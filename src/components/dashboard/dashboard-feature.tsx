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
    "39vDgdWApT4Qb2x3JqFLjoxHTFgYUjrP8RnfvAmw8b3b3b9Xvw42ky8ezWtEKDx3ybKUMFVthxJS2jMYR9oAXn5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfbAWnepL8AEBbXZtL4HY9De3NFHPtbYCthfb1eRnsh1ytRimuRKXX2y9C7cLj1U3DUBQJkVrxt7xdzJfNVHbkQ",
  "key1": "2CCeRKCuw3qEk3cnkqHWicC5ZqeSAp895FsDJ5qTvZvrnaV7mKrfH793j3WLMYNBpsY9nuok6hjWmPdT6bXUfjfq",
  "key2": "2yASd7QvcpLvtD2RQbpVj3FTNVPfTkd5fXTr55zeuppru8tG5oBPbsnHtz5UDa7iTKwu74XPL2DttXYYCjesQgNC",
  "key3": "3cz2kAfuNSGM3PyFBBbJ8RMJdgJhjfayhoGMHvqMjvKthQdbi3J6jRpmb6gKwG9Xn1fj1TaCo5RdnMpfYA4c8Awb",
  "key4": "3cHgkagnmEyXEd9L6aVmt1WEP5hPJnwQWHwBY1HQghBvUCufh5X9QMWffk8WiWnM8QwjMXxv3N1ZGQh6s4cQKXvZ",
  "key5": "thvpPKMctyE1eYJJK9d9uFUfxuugismT5y2drAir6ZfXwvdbja7cso8RzYFmDiitimasmdqgf4bL4xVffXV4ZCe",
  "key6": "yNJhNY8BFeb54k5LzfA4XTD5J62981huxHTcNSj8QJrDY7ppnEHkTRdZtJcKJgTrjg1ywdrBXrukoQmLyfhTxsw",
  "key7": "2j3WU5CqgweCkZWBu9hsbJdEmE6sPhxm9uLcuoHJ3pnYqcf1pDGL65ntZgixqm9p18f7b5oGTLeuzBFSuokkM86u",
  "key8": "38sdMiEHdVSzKRrh6R92qc3Z7Hm9ArWtKVWaU5W4tNNMa1AjFQmV4o2pswEpBNoQpgbLJTnqdWTwcKBJoanv6Jir",
  "key9": "5P7t4mHRP53MpPfJHSMAaeaeL2NGwkhS9WgG6YWh7Ndr42p3jX8G8CCMM2hgLU7oZaNuexy2FMmMeRb2Bi5hbNqS",
  "key10": "3aZZjbsasyQZx2hqTR1TNTE2bYsVfSJZn5rrvmvX3JMaBUxnHhZCgGnWR4zqqN1ouEvHABbfsGMp84chwU4J1eZS",
  "key11": "46KbVA8EDnaPXbLKCuWBSpfYi4gs6Q7yQBHkjzGUYuJea7GZXGUsQTrHvbNCsU79HWV769raTbxGxVKVJyccpaeb",
  "key12": "4D1eepkQVBEByagF7gTL3bN52ChftCx1w62XnBkVVQ39KQGtXjTrXWtXCn1wBW2GgeJ9r8iFivsn9DBWNsbYo43B",
  "key13": "1743465gZkLWS43esiSPYUcwZqkZ3wTkeKKpVQXp4GS12F5s2UXE8vXg4u738pKvoMYiHYvxo3ddwQuA15Rqcun",
  "key14": "3NiH7RwK3udZauVMcMN1cJP9BM1KoWqh3xRFyeLLLvGRfL3ZQbCo2PSQCfr3fZPy3AoP2EU2TPZrYB5EmxHaB4jM",
  "key15": "4D3V97hy8Eoa6C1R6FyzF1TNdN4uf13SiBa4HWxoEuHKYUzQehbkxgTYmzrubyD1hcGKS8Vnx1j4nBvhdm9hp23C",
  "key16": "cDuezXRhNGGP7ZDFMzvm4WbWtbXwgKtizhZu3S26ZVGtFxenj2Au2fYpdJMvm7YHSH9f8k32tCpujAMxMS94Q62",
  "key17": "2y7YyP8KBkrB5CZj189oT9KBGDCbw2sRF1fsenPAyfvBhaNZ79AgnJfhKVXKeCW9dqPXmQSjeE75ozQVxVJxxLZM",
  "key18": "4C14nTxyjn2X9kjYDTk1dz8Aph2vYmasfsG2GZeKjAZU8ynrxi27EbaWDDnjMvr5T6BCteHAT5EdARpn1xwPVjJW",
  "key19": "5oBHbr1dczrbMWKLzoREHyr4jEmsZEYNMqAt5YjH9eihYd3mBoPBHcXUMFWuSP6XHToVVhadmMyDHYN2Cq5pn65w",
  "key20": "3sbWjxntZYXkEDgHSwGcE4x5kQakchfinZH7zkXxBb2S9hfZErbVWZrMwh1ySKHfEG1bW3MJdYDHGNe4bEo9fnCS",
  "key21": "5ebLhsKEAo4nxD3X973aKfTnvEf3Kv7pKB3vgqY6QKhnHietuiqeAnK6yfDFBBhcEfepfQspikj5oWEPsEuRXarv",
  "key22": "5CG2xaTntJbjWfYMcMfDsCDcfHbaSsbmDYNTacDoFwLdW3Y4Ev6SSWUrJzVrycWEb6gaHQ3SrS5gEHp5M3P3ytVm",
  "key23": "3xpd92bXATvtMeifsKrj1nBEovRh2DFT45jzJ2ic6HwZJZn5cr4jgUuWWnzcQaP2kEURJChGEGzRcqeVpZxSZpr8",
  "key24": "2EYeZXd95TZb1kJuNeAi8bQH2ddaAUsCJ3AjXjcGTGNxTmo3pXej6kFukEfiYepmzLoF9so516CQAweGqQzArmmn",
  "key25": "67kMgfpNqjkjSSXiDY3JYL6bdh5cRi7JnaPo3neCVrowavK8Nj2s5M5Vk5mrvfD2NhXaN3q8xzPweRzgZVVZ4sY5",
  "key26": "nnT2VXaqBSijXL1ak5h6AQtUpvnxqs6PiyaZQdgg7HZ8Yki6qYS944pheS2XFraf1UCYGUi1PjsgEJGWWiMem7z",
  "key27": "3KBz7ADSVRX8VnT7P1C2r5oexQh5FMacnhv98B83bMuozj2zcuVjFYVVTX1mujpixBm5ZfJCRDZJ8qWb2fqbFHBm",
  "key28": "5UcT1TRuC46tRpV7v6KjXmbMQ12wAHsrcmmTs7ZKGVdKSjuC6etbuEPD6W5axckQB6iyNhu3Z9iLHJPDVyigtfx2"
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
