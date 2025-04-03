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
    "5B8AkxkQEpt3psP2oQaGTgBs9bHSmyAKzeFWn9bMhMSm3thLbjL6nmonxcZpaYDXyKo8jjTcnwquitGCz84Yjav3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StBY8SBZpNfZjeHnqo9o3TWwH9wabJuFTuNWjik52h5pTLqJcMckfVsDoSd1CVnbMNDdxwVcVkdnEH7fxp8JnAg",
  "key1": "3jFRm6E1M4URzyF6emAsEZgHvFyPGg72uqQCdDb8r13G6EaFo1LVSsJkHwqnwYrB2vHAywCWVgAA11ZhRSf1tsGK",
  "key2": "5H6FoU2n8na3jwkUz4MFa1L47ZYbiT2DCkPfjXqUemdoWeKbmxjcPXXqomWVUJ1mGNdaub3SFjZE2vVwfmYaD1Rv",
  "key3": "5AKMQyuWGUqW1YhNxVXogYEqdLde9RVYh47RZYbzP6Sewoa3XCcsXENcaucv7h48BQG6EuskvDsHMx27gT38ZuZR",
  "key4": "UFj1Rs2PkgpyA6LAnaBoKV57hoZ1qYFb1UK6R8DfsvHvQPN9rn7P5VukBP2EWaEbBTw32ntHnvxPmJKLzEHroH6",
  "key5": "2BP9tfSZoF8ttgpRYUx3pfaatm9iSkCCHWEY7JK7Hou8fqY6Rq4p1x2cUeLAedLSfDVs3qqPN5e7jpXepoY9zh8s",
  "key6": "2jaTGH5Fcm9vWKZDeqpocmn6rYN94xCNpZJvJpCPog9xjS3rsG3CV3LDjr1S4bJLR72YCXUnucPx5kU7KkfPabbF",
  "key7": "3NpUwD8ZusLXARsP6Q3AwL9rSrVv6jmzMH1bwtbxZ1q7uSVtdrqc9Y5m3YTr1pDbBszkPbTR67b36pysPcBeT1B3",
  "key8": "27UpCCRP3jDJWAVsAeZnqr3fYYQFtp58oxQQSoUru9GMEHeLN5irhp1apNKqMDCwBHFMkKh6EWCBoXYvcZVc2pXM",
  "key9": "XBvjuHMZS94MdwNykF2LsR6my4Z9dY61wGKfYmaNGKHmMugRzbvmxmyV9CLoqf3Zw5KZVqfGgivJmqUtVabZ9fU",
  "key10": "4weWMRcM6Q31HrYvTgiU93iUjqn9Rq8DN6inzvCvAzF8X3uRbsGyw9HdUfp2KZo32MqDAXH6ka8XyhjuYA24AU1A",
  "key11": "45Ezh46zakaHBMDRC8NPG4x8N9FmTt93XKBYW9m76WR3gArTtcj9YymivZBiujgJusWFv6iNPFzEAwAoufvpWcEV",
  "key12": "5qn7zadvzL2MsZcsrP5RkLdmszK1JHL4UqnjnpCVKvAr5SH5JyjxvnuTULdiYkmW2FCaqzGoey8jYLNzZ6J8yBZ9",
  "key13": "5ByW5zE41Pt9wzWXKiPXDZJajcHLhdDPnBus8DvjRnNrr33tRdtrZKczpoG3ggkySH4TxcFPZwihkx7SaBk5cDAn",
  "key14": "26jbSGiVUv6Vy2EthXLz6YhHtB7CpeSgtnUVyqCXLuBJSfwhRH1XCV3bxwFSeuqXDHSzaFv8KNeaREDsEA55izVV",
  "key15": "q9skT13iUPBHWbwvQhPW8sfRqCWDiFKNZaSEkbzY1XEbUx2y2M7DnBRC9tgvUGftCcFCfMwVoY5r2KBuc4cEJ4g",
  "key16": "5hdq39hMMBhap42C2VYBth5GyGijgjCgt3YqBZoWZu433XWV2otsQ4rqXSfmfYeScWNRF2p6ZAtT5PPaeg1uS7cj",
  "key17": "5L6MpJpSGmRbkHRXnDmW1JS1oeBrEps6PUXZxxm46mpZ32d4TvqP72RZC1u7CoDMST4B3Zo6Ve3CW32dYm1zyD8p",
  "key18": "572ELVPb1zUV8D6r8sDYuwdh4Xg2gU8k1NwbgZUyCufYF7q1Bife6UyzMS9cq9zoHZWeeYpkS1LRLPDj3jUMJWG3",
  "key19": "3xADnwWwTNDT5qumBrjfvR5M9y36z5zh96uo1G8BiLfyXr4ubHqAprPKaidfaZwKn5LYnbEFKat7CvN8j3tJY6wJ",
  "key20": "58R1LBrCQDyDVnaxc6DvcEeNBQQvJ8HK8287vRuQK9U2DuQxg1nCFqE6RK3DKtXcXhRf4stHXf7xNQXFAUMFg5Ea",
  "key21": "2dfXw66emBLsucPfCSbQBCdN2HTd6RN13dkZTuG5Tm8HZYsTZRprvGzTmP2piFUEbKoQo2uLBtcKnsubLfoXD4ti",
  "key22": "5u3GUhCVstUvYJ7Q8phERUKsfGmgCq9sFVR5iFeHvaXZNwJ8gmhYk724a5y8WFQ6VZj4wBWKJ8RBGzj4HoYeJsn1",
  "key23": "3NJyUeHcNZfHedBtnqJ4wV6NhtGCGFEeVxexczj5qRrSz1qj7ZzEvhhmJHBW9w31MHb8nTxhUGBxcMdKP42JmJiG",
  "key24": "4BTBYYxMhHfhnzTUyaE5ohbhL2cAbZFAFTVFuy9oTfTauKxzqAv9GqRyz4bmawCxawbRk9eu4hutx6ppweauJnag",
  "key25": "5bfZt7ZciEEMVcKsc9PuKpnfuWLnt8VLtVzjpytfcyuBz529B3yWTXVLd9WC8Gr6Q4YRUawdGwqE9hvj1JwCFLYT",
  "key26": "2Ukgyu55LxFRWuMHyfZw6YxixmWhFZFw8hRDvG6paNy1a9UVGaRnEcPX7wJ9ugbXxeVHor38TTB2ccU2pu9vas4G"
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
