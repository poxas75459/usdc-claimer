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
    "2PGaGRPzbmpLf5KbupXctfiyQyTcK9k9g9BFd7VNQDGwfVPtUqeTP18obQhTPiWMPuxghS3Tp1iJze784B35Xzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XDbQxQFJnZSTcC9yo4oCYWHp5SsgwypyW1TWy5Dv1HU637z8U39wqjhYxo1ggiFzAAvk8f6fc9vKErwg76BPJM",
  "key1": "37iW6mv56vGHfG8Hp8S74XAfiTfmrfEBRZdxbT3Vhf1SsUnjaYoqGrZinfDAVj9bGZkABpjKKL3PsGhzk6HH8CrB",
  "key2": "3egEkt3DeEfRvht49Mrk9L7QjQ8xrY8ef6zYeMyKJJcwukQ6jtUVEkT9ijnLGyBWL8HNxwJ7WzwNPFFLQXeZugmP",
  "key3": "LT6RnxR7RaUWNsJSzibCsMwabXv89fF1s8PSitzrAbCfHmBuvGLrb2WmC5zf8i9NCmJW1f2xg2mQRikQCCm6Xxv",
  "key4": "5GigUUTo5Akej1rVYQ1RxegRWsaAQBofjstQzTdyTVBQZPBa3ak6TnnNveeUp8yiUZwBCvHaCTK3yfKsmQhXR18N",
  "key5": "311mDZDCSupz1yGjNtAmE8hqwmeKtBt7QNGPrE8HNyN4XgruYXiz815sC1Lam5EqbcNa2uLn7LnrFAhwFhfbshUu",
  "key6": "4BXtB8LysNpoin1nPsksG11fXRak6Yhko1Vatwo2N1vXH9JEZEuDoLNeK221erwydc54HFRjb2ebzk5qiwjcvmUH",
  "key7": "2bWnLg2a5hK5vHAK6NS1JTJt8wqfHw11xYD4AgqFP8oppozcPb35PMRGi8xq6iTUctE2mdEHUwnf7z5v2FB4ofQY",
  "key8": "2N3Ru75SzMuetr3pG5rNC2Q5iQTySQDT8BFhFsHJuMwJ5mE1zt9gtYCGekQLYSApFX2tPmnn4zDyVbEHMS648dvX",
  "key9": "5EDsH2gxYN4KtsBEYy164JFTU6zdEXhfWh9roDa74xRN7FfMJ3u9RrCrcU5S3B46294GETfsjX8naWhyzt7AVynn",
  "key10": "3Y6ZYV13cmHThGLnEa9BLSCU8FxWuz8RAGBmxHXCwuFiUZproGqPaFjg12HiEKyR25SP77XYTibeCvHBQYzMAF69",
  "key11": "4vZxXzdavYDCtxWKH16UGVRmsQRE5SdW62WTUcDPACLBSYaB182aNnqVKfpW2ALE7vFLn2S8AZHLohpVsNZdyQmZ",
  "key12": "3wkpantQxJggKJWu7zVPhUA2tr4KesTNZa9JqS9JtuXN5hUYCwqHsRHvc2VvLJyNSpw21dE6MNGYY35qvQj55FTE",
  "key13": "UZ2UczE6w63kXuzWijnE9Wfn3Q6NJS8A24EZyNYicVAiD9S9uhZbr73tZkL11f6t4WrksVk1yDbXT3kHBHng7wk",
  "key14": "5pqEZHzwNFpJRZEpK362irTDT7FhFxhr9jS2CW9Hu9NtpiSwvp4MBrpKBVQz6cKvTB8TDnhMj4T7YkZYCioTkAwr",
  "key15": "5apyoQKseyp92AkbCmQu3xkZH6GXkEut8X4oNLbhi6GpfWjNJxZ9DtbRNaT5JNpW3WUZpWtTe8S2rPfRaQ1QmkyJ",
  "key16": "5Jyk112d8ujaQC2tPvFQ93eMZR8xdChNDpBptgSc8r5uQjaNkjZLe4xfz5pdS5ksmsL35E8vCPuoPM1L2K1CnTgB",
  "key17": "4sVGRmWEvtGNSrDCAZSnYFgzCKPg4QJu1KsosvjTn7LFmCxx1NiP2Mk4k8R3Dbsi6CYZqF2VsbE13mYuJDNcafaL",
  "key18": "3FwpskDV4UjGUebzZ5ktNLtq6Sq483AokvnXwLqxBFo9ErNCRQ8V1W7ghe1Sn2CtrsS7YH7pUhMYPm2hX6TsggAd",
  "key19": "2NvNkXkLjCy4PC1HH8z1t3qkPjsYdJoyRBno9mc92vuKweUtKbzMhpPXqbougQmaMpMmedfwWEmFCm9ru7pNmmQj",
  "key20": "3GGi6vMjS5DUJExTfhZ6hUcNTHaEiUqGXR7mdbt47ZzsAGbAYgDPtSr9eKnmi1mwJZ4CCy7SUCEpo9JZxuZTQHjZ",
  "key21": "2Y89sFVb8BLBXfGwP7uU1UwATNYQSzFMT4Bq6HaqfeeYi197hbrvpyjofaFwiH8HFbivzPFftppCEtNpHE7e3az5",
  "key22": "4HT2jDhdrutTgssB3xJ48vL7UzAhVQJmiwkLjeb4CQyWoSnaa8Gj55U93vzVrkLAePCDXdzZbmyjFAr2ZZVZTa9H",
  "key23": "3ZCtjPxEndtgeqhVHCGdhhuk6J1LMrSquRV4qDf5kmeBNhEgxPghtstPzKubW7GedXuFc66cEyh1n2D8Ds92UYVb",
  "key24": "4C7TPJTpwkFRZT9QumoQo2ZtFkbVw2Rk16JGof4j9mgqwQnf6rkaxoQREbA7cAXBo6QCZXtWePSe5D9ffYSZ9GJi",
  "key25": "5pcERUwF7TttC4UF8Bw1YXVc4ytCVuzBkgK5RVDoE8A3ssnjrBUNevxGRx8yR7StgMghqjjM33wdQNjHa3fubBTR",
  "key26": "3KVtbePVkBNTiFGkFEMSs3iP6gYSrn2mBYdJ3gwUMkuHtDt2UGAsHcyytGzmrDLxU5bwFNPrLNxkZTdrMxwkqJX",
  "key27": "5PSH23AF5imsBk9djUpDtcUbVWX5hTwvh2VjGwsf5wSqnNnakS9fKd8yy5QA7jq9H27GVVHiioM8JFBwaRskxaNA",
  "key28": "4XvL5ZXhux4Bh3tbkQmkpmu85CWnixgY8YoLBTUDXDDMzapdmB6YGP5a2nWp8FmnC3fpHWLVycZtPAJpr9wEMJwq",
  "key29": "54UQ2y8eb2HY5X7aQxkkT93scUpqMKi9zU3iyAMtFSBpvtqXSAkDtnxfir59eFMvn95h7Z2ctqyrWoWPjSXA52nt",
  "key30": "3gZCXKNGTQittx1Z96WiCPh48Xa9bJSirCs2pLF19wnsiEPfQdrCZXwxLhPDNCJrwKJ8VviCaVnSf6W5po3zSWrN",
  "key31": "5F6EAYXNNzVygtsZgbDkMnerLKeVcBhvsDZfFP93RwDw92V4RaWZsKimMHxRNwqmMW7KCdCMqN4zLkC8GQnZozyq"
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
