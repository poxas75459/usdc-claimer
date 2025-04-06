/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5sggLH9Vg48uKbJ46jpcbT9r1xpwdCyN8yFdfajTVwVa8b2tNqq5gz35UmQ8LxVuV9BG8MQ75RUsXuDYotVxCFpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PoR8Fq3zfkQXRK14pmQMTUgbuEARGeCstedCy9ZCM5QAPjGXQasutZYFq1NUveMdpRmK9GiH4MFenYoWfFvEu1T",
  "key1": "2PK86wjQVtYUwhWeSrcm53piHS5KB3MYponqgZhChxpfqVVw3k4U8PvQnj6NqXxXiN5ujLLmMpRfnEUZDWBC5YVd",
  "key2": "384FjFzojhhC5MZUkiALfGi9F9REv1UJqFLRnksFfewEehqu1T3G7TX3c6JrYBnMFA435XcRcf7xFz65icu2ykp6",
  "key3": "5DVhm1oBzgEoHuUx2KEXL9XJjYtvnpJwctngwGnx3QK5ZFfn35JXrYCEGpYhXfw8aX6b4gfDK2wpqYFPrC2LHaev",
  "key4": "2Cnu7HawWTT7c1pyYAKgFUdan9gxB9uYAHacMh3qQj3xTU3FmGLUhZ7RQfjGhhtAKPvFUHj3KkxY6Pa87omhL9CA",
  "key5": "4JxJju3WNdN2KnwG764v8ivd6HSwHaVRApgRRPG9SrDqWu23hAKXYYFmZKMZNg5bcVtKCA5H6GxfY8aT7qZVZHYM",
  "key6": "42AWFf9nkYz3rdaoFNrpUFELhM1FSAWmfDCWHeFYAsPYJiZCkUH2pWrtmt6kQM4seBabMtdUs74BM6wXfh3eZfvT",
  "key7": "SaqHWDn7dZHCKU9a2FqwTpV6Bn9ohEkd3ZqrNiNSqs2k34GfF8HA9cooxMtWdscCRwaRzgGCKTRmQnVnQXYB7kk",
  "key8": "5pghwvE2ogoTrhxuEU391f2yJf7buq68QRcHFA3EcrDxKfKk7s1HudKDqd7jGpfcsvsUQzSpjM8qDBh8RKn1qkC",
  "key9": "SLmV2xu4nCa2JLD3zQQKjBiZcACZBiwxSWmEhnLuDqzPT5EGDMFggSv8rZU3e9A826URBEGmXAF3AZw6MATv5Qo",
  "key10": "37qtShzcWn33qH1NB7Bm5J46cPGSgnzZbDSMGyW68hMjzrtTwJus5DijUPZ21g1ixYXtANEDdfi4trKJi5moPDnF",
  "key11": "shFzMAKM8uk7pTeag6hJhZ5JRY74KZR8qbDK22FPs2DJxjimrTaS5hQWBBa7wcGGHAxPFz7pfb52VhLojCp4GNu",
  "key12": "5QXtuoFxXBWjwhLYXEdPZgE8DtT37RxmN9iZrBAWEYEW5daHqB3w9gMcLSXnpu7HgkiZg9iK9nxJkzy1SvwKCLUR",
  "key13": "3xfiF8Rgr4ci1U4YVdqCGKJ1ssTxFGS3HXwfFzBEsjS8qbX8nhhweJY6p3p56cwxXoLu1qMrqqwHdyTaYb2tDAo6",
  "key14": "4r1rdyEV6x1sgHvVKqQqjrhjDdTAZyGkZVwgQV7FKJVhteapW8oSsq7Fhb6rC4xyAydXJ5nDN6UmR4xmByehdwa7",
  "key15": "2zopWZe9vjrTUmNFAJZ6xD6NurCABhB3241TXGp3PuEigaAeZcwffvhJqErAE6DJwGg8MRBrV6fcsGNrHZnuZwPC",
  "key16": "123GoGVeQ7MmtyMsyYaauDgunVz7rdREzoq5LbxNdWGWM8Ux11jgJQVfCPxwHjrdchAAmQxGRFJ2nrdbHmxrEMkU",
  "key17": "2Yf614qoDms6cpZAtM4uYCVT5Rr8RPUrnUWez8gxTN3nSigBbjYKP5gDAG2rsM27sDHKEFTeFNovGSkRpEtahLhd",
  "key18": "3EsS8ypbmvKFsyDoBXWhuU4X5T21eH7GBVywu8Me2oyrs2sKXdd6gYAbuNtRMtfcSY5AMFFpJcQZmCBVabH4Weu1",
  "key19": "5oQfeVr7oT3x8GNDd3oV6Yu6oGbwuMV1wLsjhf4op76sGeGtr7HtB2jHPeWLLBpsaxnr965beG8BeLpYwsjpxjJn",
  "key20": "suQmTzA5nux8tT8HjNRbWEDtSpMY34UtzJuPpX1gkN7GV2P4gYVX1yKodsShjmqhK1PTgWBpTd9sdvYEM96Wwmn",
  "key21": "3BcktfH3rnrsK7faArBDWBJnbhh2VbcK6zfzrzVMGsTsSvQxo6s42ckxC8Qn48rhiS7GbV4wVK4BSZFUCHzyPmEZ",
  "key22": "5TG4F3EEjRQqDpWQcppFsNsezd3gjm3NSHwXwoVMFNsWTjCKN9AFR7a1cgawvGDgfPdeF4rpXyBmSoEBipWGE1JD",
  "key23": "5RefUaHq3pSKps9k4mKJRiJruyKQ4i7jwqXVC9XsPoKJN6XmXkWXy5UuyjZ6xAjCi3cScNTRbfY58u8834oC7BRK",
  "key24": "4mzRxqjrMswu9ea5Y1aNUwbxcyn8ZHUK6RPrvWmoSq1fEJkk3FN1Cjd6X1knZYxegHCWY89VVjFE1HdQisBvVF9V",
  "key25": "hEQiRvqavo6DCRpatLgaJwAUtnf7NUUbsarWF2FibG45sP7cbZ9jtwXNWvJoKaoieFJkii4am8eU8Bdn1yoQgvc",
  "key26": "58rtZZZ6SRVqH1w5UBAg9idXi8UEduz7y5nNPtnjFnWDuMFZdHyHhcCAofSrUQ6HjucKDDY2LgBCaMyV6YYD3gLh",
  "key27": "3SJX6Q9gr7GX63q4HH7sadT9oakcAYZXouPcVJt5vqMWEeTaGSdNQV7sAGxPahJkPzNZM12SdKXK32997PfmP9jV",
  "key28": "jhRkewbymC3HeomAU1hPVNhDstUPF2HnrzPYirufbP3xiKADnAT5x9R2hJkNuTCZufZphgpGUFy24FL9AVDjgHc",
  "key29": "Sq6APfC7otRPYRBLHzmUGkkVABPPAtrmrtZLxa5tYQNKMNpLtB2gm3LspW8CuiJoRk9Ji8L6zmayjDstkWZwYTF",
  "key30": "24XV1JgPYjFwmGq5BBmvmeEahJPn6UyeHKbp3hNAwBNWzcj9sYnoWbaNYZyexsgHfhJjXvUyWaprKJsfDdKKauiz",
  "key31": "5eKt5RiNpcKVpC83TsauBc7xfJ8TjJbEFHhoxM8YBXjXqT3YymkS1WdZDUqXNxDMmPThU9GjkGJPHrYyEAqY2Vmm",
  "key32": "3b4wRrXxyLgbBm4a7PT7JG1JgjWxroKoQWRVsAh6dxbqUgMAFfRdkf8fHok4ZxMcSCP3XMbFzaZoZ5GDdwtBqnnu",
  "key33": "2e6QEGHzBnow64H1q7RiVD4ajr2gVgEvX4wJdKMfJkY1Cob5P6q9rQjaZgjNDXSjaQu182Em6mtrnYTdo1tJEvJD",
  "key34": "5LDULgtmuNDRVGNqBmqXx2J23tArdewuQTHFA28MczYueq667sgS9XH6K2qjooZ8G2T6HL1d2dR7uvJs1jmZpDQb",
  "key35": "2CeAAYW1JhUY8tw1gE8a1Tti9SyTGpjgiMpasSr6LW1QfZJH5LUu8Nnak5j84SWXQxN7gBmHCNbeNQrQTNrtiVPL",
  "key36": "2AsDNnsPD1Rq4qJEPwqqD7jAP1QURfcWA4rkWR7wvdoMXcQ1bpUq794zicQJdZh5tp7FLHvvmfbi57zTDDBbCfJq",
  "key37": "5FNM33nvTjEzdGZoJZhKeYCLYQHXCjbzYNrCqRqzE8im5je498e3LQYwRe2GVNV584WMAzxKFYSfB5xXfrDCxFQT",
  "key38": "29Wb196Jmy9996WshTthB15ZREfvCcoxX1UmYHSxYVuk7YvbemHZhCfG5Yq3QbDqWDXBrCFK1tpsPVhACpZA5VxD",
  "key39": "3tQw5BGTvtsszanWgWLZgoXzEZzajD5jrHNrksHaPZLG8u7y5ZoR9Kap9tnMU7byMiVKdpufH5G86cd31daqFqsm",
  "key40": "2z28v7LhFmEjU2x7zzBC16cwt35jNiQHbQfjQMZScypAP1T2L26XXa8ZHZy5GoUiFCwh8GPfz19RXP2CtwdMVXte",
  "key41": "5Ya4yGWsmzsPfPSjp1JFVWVgJAuQjPhsaecW7Ej8gNRZ6g7maJu6TK3mNKGHmDVvqTGw5QP9MFCaRiWhwGehmJqs",
  "key42": "AsVdM4kmE3hobdMgTcFEAAGzYwwcG7zBeB2XvSkL6WUEyXENbUFpaZ2xcNyiWjwRscu72PvCGE5V6pzkhfqoePv",
  "key43": "4aP9DxuamNDAQ8Jwioz8BTMdfTzbzx2SnPVm2tuZosJKfta3oiP7xpxfQuM21Q6H2ieYVUYZKcHhEPjvLRfbHz94",
  "key44": "Jz8jCigsmTnMMkZSNwyQX1iBKkY4uCeATaQBGhEKmUsKLmnoWkQJDdYAchUNm4yTEasghBBUMxjvUnxK4eM2qkW",
  "key45": "vDRjnCdSVXQos6r7zjPKn5fkU5V6opigHqs1qoRD21qK6XxJoNofTni7xZK3FvwLNifpnb1wd9QnKEGEe6GyVvM",
  "key46": "6Mq13BgpWotYhVzrWLdPMZRgYf1uoqdcW43gCgkYbYYpTCt7jrE7vJXZ2S2KowZgbu78njJHxicH34Kkm51V4YA",
  "key47": "3bJQW9gvhXt5pvcLXeHVjYQPrg6sS6GKqw8K5MvGfaifiqhiVi7mdDAddR2yHebpdbcjmWqSwJnY22dTcj6A6psP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
