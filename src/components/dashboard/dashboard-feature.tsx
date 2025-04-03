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
    "58KaDQ34J81yN9zHHnrHpBzWZ2WMcmBaATqnPQwUbRQDuxdEUNpWnTcxG2Ey9cuS8N48VDhWpq88kLzkwDeudbaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q3vPYS6a1Wh1gGhtpB1CqXeovsFfaKvYNEWwZ9MEDFMvygETUM7xb7i5DKoJJAV7w9eyew4wp3XgLHvCzZvySaY",
  "key1": "3FkpnaAkFBBrksDMpzPhaH54ShR5EBBEKu6nxYd6QNARjXLz5VLcor3oNdCGC4aD6HScnAk9dnU1yWpKj7zye2R9",
  "key2": "59nRFb8UnT9nNf3EXGxotR5U5htEhpkrahQvm9r9LWxzyFfjsTAcSvBFEBWL3xphf5jBbEsDnEWzM6yT2ZPzjgX7",
  "key3": "5N2oK8j88qYXwGQQztL35P9Tw7Ar2JrueH5zS32BUrmrHijZutE3XTMSEZAxhtd7Am4N7mVfo4QHGW8Kc42KFKpe",
  "key4": "3npMNaXKc6nUWNer7mE2LmzKeQHdFAWWJLGuRFrcd1CpQvN1ryk8aaiYC6m5QD9jSRUFa9RozvNgqxzHKthHXtp6",
  "key5": "VVhcUjsNZvDGsuK7K3DjSwMZb6726Kakt7sn5yQVaV195SojTUiNHTbZqGfoDRjpEqGajERpNUwnrEJAkYbmhWJ",
  "key6": "4qjD5WV5wmgQvJxvg32uiLxeFjpCHVDUKAmeMXAP5oQisVPpqZHus2s366QWFfW3EsZptp4vzzZSzWkq14BEbb5y",
  "key7": "3U2zzqhV5puqcAExm2dismLyjiGR6NtvrFsYNuqCWbfMtveyeMBXia2eopfaYXybfmuRJoq46PPCzn9WxYMdeqTp",
  "key8": "3dfaeosWx15NBwr6wYi4QNeEkAfG8Gmr69KKzyyBcMECd2niQZmQgRdSyMnMeDQXtXi6cC9X3hGYikwo3W3MNaQi",
  "key9": "39F1NyE7PohAM3dCpH54a8a1azGLAbFwNWFQe7MEZG8bxY253eb4fJz6on2RVaTdGTRjjoEA6UDaW9Q2AfftQjcP",
  "key10": "2p71z5ctf15Jei3yqSbrzKNxyS4RuuMXpJ6qDUYLfSHouJCUk8V75vji1p6qjoyfN2XyCk9p1SF2K4WJxubUn6Mj",
  "key11": "5JLne27sLyMTpftAwhntkePRZcReCRFhEf7YqUnhZHjdc45F6hgUJKcRoVSBHqfkRMJztk1FxKZwRwxiGdBuQgpy",
  "key12": "3VLRgSdP8zQrfSGRDCXCq8EZXWnYLhYuvetBY27joxXbRfPUHm9tU4KmV5LrYzaKJ5wVo6B5nbwxfak1zuox8JL8",
  "key13": "5Bp3QHxcFr5nGqHCSsD2Pbypq4mRsNU8yeYpL37jKyzjj5PEYZ5WvbeaBHN8UhTdedpLRFX6U8BgwDqrp9bneMAR",
  "key14": "5po1qc8tBgu1k51JeKCvPnX2VKvvhMGE6ZBBnBEPyCsBdABeAaFinXiWTzLaVGGn7umJ9RhA2Zgsj4vTRGWuRKJG",
  "key15": "4Hr7xaJQd7XztcgjXQPRvdRs4qSXPN7wjReFUinEnPJ9djJMDhZNaHsK7648CNEpNTuDdPYzn5eihwGoBX9ELeUN",
  "key16": "5EsSY4XocZnX5NntWaa7oqKANs9Sm7txi8cW3hJ4PgAjkCgB8XkR2YR6Lk4rnqUvgtSq9E63ycqS1KkSGhr7GkEM",
  "key17": "4HCPycvyxRofbA5xzMdHEZTbZLmwrGi7kPACpAaRKbjjPG9QCpbGhTSTQK1oLZPUTjWFNKuAcw4MsRm9i6AkxSpT",
  "key18": "535ePfgJ4Ld7Dz5HgRw5fdzGn7eEsw7xm99C2WypRnE3cAi2MgL1RnwuQfmaHfPj81aQKDuU84HeWvmVwTzvYQ89",
  "key19": "32LSMcGZwZKECd4kT7BZABxmwERDpSxFewHHZV7xxWWyGaMasrNeGcohWi2ANhhkryAxzGMuzyn8NjviWAHJZp2p",
  "key20": "UL4Q3wainLt5s36BiuCitBTsCJ8dhUbEX5Voo1uKoUHn5jDaUEXb9kWit57Cvvt1GUosPDrBzmvMPq7BAoSqYJq",
  "key21": "f3zvWBgQhbhHw6ypYrb21dPVz3SVrWjeGVBDoLnA6en4wXWfPcXFpfYahVUnoQJhVhBWasyG7wSscop8fPugCda",
  "key22": "ozSd2eCZaxsZq4ficvgHxUmxt1LfmCzXG5YQyFGngQ1mrg2t3sac4Z5HaoAij6o5Kkf1Bt4nmfom5CP7pNBi42x",
  "key23": "2Z66TCnJ52pM8ns5t9GryTnJm5Zrg9wrd4fBnh91otEtSJwZRLcht5tH8DNwNJqhaG4xgCzzJtHzvXt5KnNbimJo",
  "key24": "Zq1fURoBD2K9BtgDPYLxbyrNfsVybcTUvaww7se79Ho92ukAkZxEL2USrnDJXitEHPjc9AEp7awP7YQUrP5v3pM",
  "key25": "4VWzWJPqP2a8WMQLzUR6oTeXS5N7qyA4KweooGiiFmHeKLDo7DeAK2bpYSaYH37mGqTsA1pFwjUSNYtHFLXXbvfX",
  "key26": "5jP8J2AQaEpeYK8yFvfxbHvSA5yD3wS4pokHFrxCQA7hV9mwBnSsfVbZutBiLdSG28m2B7s7zDwn7pKUsZHyAUyN",
  "key27": "SMRSjsrkV6N7gkyj9uXGgNfB8hjsAgReX7kfpEhBJwXXkoFspmP8zeMhAbhhEfNUeenr4wrNdiQWLYSHhN7GMP4",
  "key28": "mXXYQquHbaMyx5EfRzS6yHCbREQDmcw5FHktoZkTBGuJVAd8GoCvdbYePmcxhRMSsbqco6KcLt3hVYGxhLYFb4N",
  "key29": "5cRTrHqAnhJwZ4ntdy9PJvebiAXfypTXNRcXyfnmjJmagfbPSGHuup8XpHGNVhdHB1RgWdT1R5YtCMnUefhk85we",
  "key30": "3g6h2EHrGiPdhV5h33Fq3v8BtmzzvPvq1Y1BRuG7xYnJwx2fbnvR3s3ENa3N2Wj4AuD49fdv2kz1wTGv9Z7uAiTj",
  "key31": "4NTCzJqJUBcNgYgzkXzUFHbV1qmVeYdsxT9E5KVQrWDS98vh7BYEtfT9o5mkvZoJWwbiBkJJDYqCJS2vk93m9fA4"
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
