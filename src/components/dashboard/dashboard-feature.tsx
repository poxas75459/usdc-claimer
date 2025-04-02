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
    "6bwsc6DRHm3Sceq6EYaGxoYbCQxiTpwjrLaUdKMKoQkvPDHqX2ZfN8wqgqcPcDAPDg779JtEGAVL5RHMYX4QRC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHUtPdkd2wxdZa2RqaEsdfqNH6693hVJWK382uihEDpBiri3TsfwnQpGGbEsj9zeFeuoo3bu95eCaiMCPB9Bb5f",
  "key1": "4o3as4MXWFadVLLXFTUpaxzpABMHHEdFeaEbQbaDPFv3fC6QYZn1s3427U2V41HRMrRcjRxx6q92igD3XMSrRnvY",
  "key2": "32vB5VQn4yh9XhKrkNaP7zkLWNWUeEQxzqsyiVVdEvT2SdGc7r73kkPqB3xDGGbKhJTvfBPFmtt2M8HnjTYs2paa",
  "key3": "5AdyVVPcLatFcZxCyWs9p1LTuELM1daM9Cq3RDUz23DiT6Sc78d4enemuJLmj6DCSqhuxjcJPcXkJmhNCu7tsF76",
  "key4": "2pS3NMzxLewTroWX8LL8QjjkU9XPHSDVqsZUGVPAth4vB9xNmDqrkoDUqoT9nLP6YLQwvCT5F15kij2iznVKRHZb",
  "key5": "5QfkovycKjv4XgXh7RSNqQ66feUoj3pgKrKoaKRUdh2T9Dk6R7dM7AJugNRG5ADZb2PLrozWj9z2A63bzaHimiLp",
  "key6": "4Y5GGiAfs5SKZntqsYntPQXyahy4GE9EVJGJjX62kc9T5vMu1UPmucsbjDRCGDWUWL3E6Go5akrY7P7f36MhVnWt",
  "key7": "2BXsrE7w6Z197Gd4xMzf16LdqCjhPwZH5p8GazpCSB2QrMx2ALu4AwPGMHKcySozMqndhKrF3So7RotoTsrgSKuk",
  "key8": "2WfuTubwEGbYauCeo6hrUis2G7bn7bghFzWLFYMRd3UJLiAkgdf1ddMj8mQVYMTN947XSFPsZkiH7MJUd6jt7ckP",
  "key9": "2ezvwwzZ5dEVcEpUYPEBAHibXZ5t8VtqaqZMpTeXT9NE6MHMWy75Mg6oTb2KWkLHbFbDjCCA8Vhgaixr68rMtMWY",
  "key10": "59YS78RqjaMJu4sK71RTMKjTHfAfeQUJZVofiGVmgzFoawHxqys8BsuyfWHeGCS3Ae81kRrausCSLRcmRCBzfJE7",
  "key11": "5sWFesHaCTeepprf2wpPqQMEppvgKi3PCXca2H4o47AJF6ccxSkSXfi3vL5kpxWk7NsVkDr9RDETxa59sqnP5Co5",
  "key12": "3HsWiEGdLUZ3T6NLZ83jcEnZvhhgv6D9xS9yZMGRiPFAX5F1do9CEEigdTGTaN4uW8YZsH5yZPkL6KunbuaVyDwC",
  "key13": "2AzHy2LLKC5FM642rgzCeFFuDs8ZqzZ6gkNc3XHssf2FpsiwYV5JiiNMcdE9atGX4hCpkBsUWMkfA2QFTqmLjhnc",
  "key14": "4jbccoTWZAH592ZmbNULWsiuJB9MRRGXzKYsv2iskoX3J4KY2qvyVDWKD9WH8RrWnU9cFY1iqZzQQVhwoR4fDpT",
  "key15": "26yyj6GBBKdWew3hrJhyojsdwxdUV3gE1CmPbKHEZvcXcR1McPkXdNEpWkprheWrsWLECTkikenTEVD6tmHmXW3p",
  "key16": "3yhZkbPCe753Wc3uGhVUB317M3Nh5xxvpGJqzHeKRahRLQwPwVNRLaEjdJURpMUQMC51mJGPHaQprFnDgf9M4BDb",
  "key17": "bhcDq3hYkQAURLsmsppWfW5t2AvwRoTSGBAAf9K5Q85aK4QpACjjUtT52968jw6yhm77CuZA2anncz9F3zeLx25",
  "key18": "39oFgZX2ArMwGindAH7VvfET7YUUgtCFMDNKBpforEnUBrjRnevHdtYx3GRgaRNQaD1CUSsire2js58MEk5Lw1dg",
  "key19": "2CpCs32VWmEwutW3vs816KuFnEByFYdTQLMz7bbcoL1KhH6TP5w9Nn5DRH5gQ248FWFxXx5p8XLdSZgK4SVWv3ux",
  "key20": "4FV4zu44oocaY6Thqkch3ZAB38khhqz7ExpRBk1jfzuhBqvuxP1r9Y3rt3znhXA5TzCbcZ44q57xQHH6nWUcR8io",
  "key21": "YfarVmX1P1uVHkuewo3XKSiKQ4LnRGNtsrRJ3sPkNYo22y5Tzg8hVGwgA9cmfQNU2fw2HZJRvZ18YwmKKLGhMuU",
  "key22": "3jKxLT8sPE6wjszya8eX5jsiHdkPyT4G7y6tErw3Ep6mQeYCa8UQMxhB6aDZrQJ1pa7xd6QKPY9UnKQszh2vafyq",
  "key23": "5pNLts6WXMh8SHyZajWnTNFSVnpHMMQLD35iNs4CSfrK9kwMBi2QR73g4PBXA2zevm75rVYWYU5tnKDHHTJzEyKp",
  "key24": "4fF7NJCX3fVHuwAzKrjbXfwQZgAqEKBRS8RRHeCN6Ue8L1dL4qxYQdGBy8apPyDF9ycnPwBmzz43Pw7ciCnhx6Am",
  "key25": "jjwdZPFRLWLzCn8YmuXeLyxZS4Wigbn5K5HERTFEwTY3HxhZTBCfd4RLz9irKryXmUtvXbue4aLD9VRTW3XRxhr",
  "key26": "hCKUqQp7qDCPHcrjbQVokn4BwWVbBevXzaEMpfJaEGQHKCLZrZsiWtLvqYFEip8eNtnHG3FpS2Zsbsedrz6syGd",
  "key27": "socnZkVmaofeTS69zWqoZhLRpzCQxngkoXmva9HG8QNZLiWQNEhNz5GpPUx55HBwFeP2pYAu2CwEsS64vJXUPd5",
  "key28": "2avjYVxuSFDQYkJioQJG3fxH43KsCur1hS9tnC5x7AEabvYnsPymsHT6DT1ddKhoeBjQTPNeV44jJHMJ9YAhViuH",
  "key29": "3qi4hSsxXnxnMms1c6ukSbHUsQiNoKVjjx7MgGqRL6iXtjWH65upBxxpSRZBWKGwZ9zpthkiaLusxk1asbaW38W8",
  "key30": "J8M66nSxvS7Pi9b1G9KG8LfKmuFP3RDZcYi1XC35BArUoBPetPAqF9GFTkj3YxTdWfCkzipKYTEgWYGR1i8dB8T"
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
