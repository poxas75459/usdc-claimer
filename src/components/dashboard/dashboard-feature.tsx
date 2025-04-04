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
    "2uFwUc2PvWjZ42GzTr6JHwm5UkDzxsWijesHEMG4uttXGrpxZbz79AcXKdFC63pbvQuBFqd8fQKTTzgvGSuPTEkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cYmbrRqS4GLzpgmmFJQPajXRhJW4cE9kRBqcLhFbSJmtF7EqQj2frtKF2iueTnQrg2chPTodmPnPMkSfrdRLyNu",
  "key1": "3oVfGgUPePAbQQ8gReQct8DnwYgvpPh7RTG9HMbpK2UC4yoQvPjcFNmTNGVEqgZfqQT5vwetzEewCHjHyMosBB8h",
  "key2": "QRDuXCSn3tD38mnXXVnrBzENPufcmZekLQRwrF332KxhZTi7h95Y5CDoJ1Zqtw2r2HL4AujFHVjvoxZLap1wiwH",
  "key3": "5fBDFwPXBjQTtZ7wsMvdQyHkesN5c4tYrak9sRp7CuzPxJNFXZ3kBZh9QUpAFcejFKdcwbNkshUMpJijUZJMDavr",
  "key4": "562ky2G6JFFW4stEdxWKm5vp2DeqPR7JDApAKmEHbBApyw5iGczDNh2VhAaz5p44TAVd1s5LBTkGCdjzTDemVMxo",
  "key5": "5T6t54Yj6iGDXRFtVN2meN4rkhbuDtXxp2sDXJzqtreuzA96wDTMi31ku46AJbjajmwUxmEAqmrunWzfSSmqc8Ut",
  "key6": "2iFDVmf3Mh42J31i2SfnkUEU2QUo4Z7KQaeFFkqPbnTsW2jtfTJMvWFCM8f95CwL1caSsKom8BzJHNnRjVMTh9VV",
  "key7": "3u9R1ZcghYKqDtTaDr7kqMgZVRMo6TnX2mUnFcCiJnu1C9yUGPudCqqiGjTygtSGb7EpfxxKE5zDGunjw3o94zA3",
  "key8": "2LyvXJk8JGFCrSvWT8b64KGHTmpAs9P4XsmaXT1dqbHdhEoyH3Cwau76omqzaqFHYwnyKSRENQf6CSUmNQyQN5eS",
  "key9": "2GVWFKqiG7JY9YDa5iYYLWNY9jUtjg8sw1kPoKWgR1ZiKHzQMaUs4YfaEDfsru1siF7x6rvqtbkYmEGtXECfurUt",
  "key10": "5sCsxF8PSMqsWwiiUTnyYXeFmtvxU6hC7eGYiHrGdBTMZ2xfgRP34o5cUD6ASLp2zqhGAVxdEexiqDR9KSXkYdWY",
  "key11": "3kMZHujNuABRGBNjdn1WKBGegigEZH9VfH3PxxqtUKtCtDWs11JpSSimb3swVoeuzJosod2eLwQmXq5ZpDJ4xKm9",
  "key12": "63Sdreh6CLNYsczRvSmDtyV9Ej2Jpa41L9yWBrW2sMbQzaMREB1dD2jrjhHQu5rwjeNKrA2Gg7FgNxprcoRf3KAY",
  "key13": "2zR9pGne2ZtvVrA6p13SSWRD11iL3fUhvLELxDwyxhc2B4iqRwgnzgAkhM7jA9Spr6E2NZACeEVhRGsZF9Da99Kf",
  "key14": "xDPFRVbs7MVAsBsdSJmRw9fnoaHQi3wT8dtMMNooG8beMD3cw52zvwD8oGnWkugfrwxntpRPd7nxy7teebWYAdJ",
  "key15": "2THMyidBUZdqCKVN8jA5o1zgmwH5gHdyiQV2QCG6BuEa8r8kH9izoxfaSvsMUkbtZFANe1jNryjtgrm1zqytBqVA",
  "key16": "3afbgyqMgMT666VDX5YEmMBB8FgNWb1d5nyLnQzhZKDViDFhoo8VfHLyBDMYXYQHWV6uEp1pgt3ZvALEzJzMDJB4",
  "key17": "44ukSnPSDTwZE62VSa9UkmH2hAhQYkugKfXqigc3DZoC2UBANKQ5jx5L65LzPUdQsu993ZAMJGR5BNq4N72zusEd",
  "key18": "4E8PRjU3bwDWnPZMYukcJkaZXRREg1EJ3fjc3CSb3CyZH8cLuxkawQbTBPyE7o4Armx8BGRH33rhfphW7ESdZZ2o",
  "key19": "3BBcUnVa2w2jqeG8Ft5UwSi2MShjUCwqH3uhb1YUkZp1dFNmfbpUaGJDi7sbFBy1gZ1ZHF4a8LmvnkyTnpZVWq2P",
  "key20": "RFM9EbYBdisDXdTwpwpA9bHh6Xp2UgiytgaJMgeQGYn7LVQJMsDSw87QE5xRuV2fWJbKvxiAYGjvrbbPmxjWW2S",
  "key21": "51JCBBLn66GqBWFRaX2Jxh9NYjjrmpoocty7NJDmKjqT2hcFWFggrjuCh89PPpYxttu1nGS3RPk4mxTwc66sgTdz",
  "key22": "44FdvnDXvAM82yyLMxyghSTEX7HFHPKNrP2nGipq3XsSa7GPMeJn47KvevKM7q4o8R4DdPfdzCrbSG3c9D7CwfKm",
  "key23": "3TwiimQQZvjBuuc9BBbPMgCY9gNqvcd8eLH4kfHhJUkHejDECUcyNt2jX2NXqd2cYxJgPX3nVtyEcKpBjbY47R2k",
  "key24": "41Cm1oQpAgjTBjrJc4WdCRgfT8W62vZYnUCwK11BsB7VqFPFB1QVYTyDj92kbFJcuEvWAEmtou2jC92QudHgmpyk",
  "key25": "3hHLZuTKLfF94Mz2LekUPvtH1MqF4p7MZAq8jA3zdG9AeqDcKnGaLrb8QZF8SiVvfSQrkbAb1jpSB7dGEo3z5idc",
  "key26": "5APHnxGsKXvNHDKs79rZTnuMrwhosyQVFRuKRqGcFFCpJoxZE8FGjVY2P9Sg4tnMUVMhsaCMCH4NwHMJViXojEej",
  "key27": "2W5DqNNrfWwkkR74uYwptheWBrTqw2Bho9AYD84EPHjTUXXDARL7ZF9ZCH9LBNVyvUdRppofuHn7T7buJ8kqeZpK",
  "key28": "3zu9jBkvrVobUANr4NGDSx1BC46Vrsa9eUPfAcdTMpxoJVxBnNKiMJCvRQq8kBhDaWAHFg5ADJ6zxQ4Q5KJHxRT9",
  "key29": "4fhDQLch9cGfwWE5g2B8gMrDHQoFqVKHDChdHAPmtAjH7Yazw1TJDt437Av58XTNbUSZciseu5RtGjXxjSNoY3qj",
  "key30": "2sC3hnJ5VASXEBLN268ywJeu8kuFBpFuBwydVzMeHujPbYzHVCpWMuhJ3NjEpN8k3YwJg4M32YNzM6RMNZSUJChz",
  "key31": "Li7pPzeg4FYTxQFWrZxMjSthRoLn3VZW74StBKdosNPYUwfGv7Qzmzc33QiHkHbABPLV9og8MGMDuhe5FhhAnJA",
  "key32": "3DRdRcQjsyST5LJ7ScEfvk3AwZKRdyok83Hi3PPXGAtZmpHzCYHo1MMGMvP2yiMUwGvC3ZGG8QK3yaX5xhWmvxXP",
  "key33": "2Nx6Vgk4VLW2Xw95MCgmg76eY2rXBedbadCqgcpV4o9GMoaZkxGh9fsagEf8eVegDqUEmzqLSkTJpwiuQJ4KGXED",
  "key34": "4Lna32LJKY1FGW6jX5HwxgzHt9ujHTHpLTUsrpeHm8WTh4WmPiwxoZoFAX5SnF9fVvwpHVWevRL6QpakKpTgWAwP",
  "key35": "5mSNCErpePTtfpvzMKdYEspEc48TLg7SKesgo85PQJ3turvcS1RZcwA6FBrAEdUzArFBxNK2HHnnmvbqe7Mxig9m",
  "key36": "2obqvgcFwuWRJwJJ1tzJJCmwNixnTs3teihAYD4p1ZiNuGbAMGPunqx4WNhwLoZahuoGkuxRAeGXBJyuewS1Bc24",
  "key37": "4UHmdaha5ukBRgCsSAYonPR3wazC7UxKaybjLMUQzuGhMh7PqNeeV2J536U9yCsLPzUmzL8S6xeHT5nk6LDffUDU",
  "key38": "5SRYmjoKYiG7oQorwoBrL1YFSca92xqAL5gVMw7ARqkdN37SZKtyPao2UozDG7aE9HvfwD5WqgV84Uheo5eA1vtm",
  "key39": "5CpSJ1koG6gv3Bh5PabhMCQvi6xLzVysoEkykLwBP676JF8jXyJpbunzQ7nEsYGdjbYyrHANSZk1WV3eCtmxDwUt",
  "key40": "3Sn9qCu62SfhpSiHuQT6fpkMdkhGDVMbvAb9qtdyDQQbJ8Vyit9LFHGGJ2KGAYJmRuk6y4fL2MAJgXwwBjteNzck",
  "key41": "2aGhx3GpwJrDSPTWmhaha2oCDey4aNREhH5mEzUKeN5EPgRb4bGfuTMpDUw3uXSyvqWxJ4Qb91rGBQL7Ty3Jj6a8"
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
