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
    "2g8XXsjMUTJ3F68mWLLqzyH1zQ6fdcB5Skk1d6hd6ai7y3x2We3t8JppLP5xyiW3QemdmBVLf5XdBApMXMjcZhXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BcGcJEYh5Xan2AE1Gia49upANtgm5t1QaHwDKXpAkppcYJhoHNs4FNSproYtoXzFDv3VRyV4otS3NeYxvoN2zmr",
  "key1": "3EPbizqDkjpZbNiytH7rFKw94dxEzcyDCjqSHSDhksdbsTDmdJhCACSwJFHxpD5kp36Gpru2cD5yVVs37CbSbNrJ",
  "key2": "3sHJpRrP9xpsNN8UjAdNNdQeEdEEjygt7BeQYNjT6LkshJ9tXGGfbsK6mxqpSynz9xypDREimeLRETTQXPkg7aHT",
  "key3": "7w566Q1oCrwur185N7Mzhkhx1iAEPmKUAP8khdDitmCbCVCoRKr73mkqcYX2ZMUUDWztFKfGNeoLMokjJYXEASJ",
  "key4": "2h58FYuQEUvwbJ1achHp1ACyeD5ouTm3F2jwbpJsZvQQgmGYjjv8QYcf7QLgV9FmKZHrQRNz35SQ7SfXsmeDS9md",
  "key5": "53HodFuMze3YTWE1kFnRMtzwEb3jTFLPTkCUkXqwNVv2ZVjeREojneEN8y3txTRiYVoYtU6b6jx4GD3KsTsU1Ae4",
  "key6": "5EC7tNQwvMCq5g1j6KzT3uQpMYugEBPtceF6TYNipGzcF7eJLj8Stnt5Rvmt2TnyUpZM1M2GiiXUtBH6LVhv1qZS",
  "key7": "S9hu1BrzMHiHmekfs5ENMiuo1bqJMBVoBAhGzkv5zuZt3d45bQis9ZnunCHAqA8krevPY6D4chiLo2cCVWxtzuB",
  "key8": "3E934BNyFfYbsCP2tFXRa5oAWZgMQDDxA5pxFSc6yDJKVD3i7hM8oKt1axHJWzqh8AHZg9DNnMVpy7eLuFfbVjsh",
  "key9": "2h5uY9GseKwcmwqrANmdkx9dFdpMroEptrgx6FeSCi4EuanGXp3gTQ4Qbh981buttUgBQRFK2Y1o2ZfHu3wDtJwU",
  "key10": "3LHAcBxf8exc53nSN358hGg6UCcudGdgLw8Qbg4mH3btMKjLc39Af4RQaaGJbmJ6z6jrRn4fbQQnj6h9MuPTfyf9",
  "key11": "5AqNYxU8tdFXneh2WxWgd7aLt6naXH7akAHwH1Js6eiae4ebztykD2fVCk1ciQabtvz8zmAMZAxCNnb5cEJNFeDF",
  "key12": "1MzjwkwDit3Ssf96CGXXi7tjcNC7LLDFPoortY17jqCWcjbuNiX8wM6NAhDhHNzMdMuL5KSQo4CrZkwwiKuJAHF",
  "key13": "24CVtYLSXvajMYLMsbKiuZci4XsixnV5rTazRZneJJH7Q7nc4bWaiBvUncwqT9cuVPrTEiSfo5vyybQi9Eouc74G",
  "key14": "3pG8XumiZPH2gko7qEGvUZXSmCepbsnR2xqBrEhhz1hy7hyA6UWvLK27shjS7aYN8zAmtS478NB8AoNLfKqFnP3Q",
  "key15": "JD4EtGVZ2N12nnMjtuQeV1Aaob8B7Evb3QBrzYdszHvFyNAe8hj4fXKP2euoe6DxN1cLXDSpY7k3zsUJjmDZxzz",
  "key16": "4JPhpkHgKwqCCx4ViB5MSHjQbqThgTpYUAhEJ2ZwzafvnpiHJd5xxVDCF1ctjG3L34nZD4hC2rL6HtsArfd1PDd2",
  "key17": "3rhsCdqJDRdAHstqsti1Eaj6VJQsHQWbTyDiMpAr7qjspQpiXM3MeAfdnTx4CWMJZVxgrv3ERWrisUnsFh6FozLz",
  "key18": "2tMG4qUrWnrwd3msh4DM4RqaricyhHFqH7KfD6Cbth2JVBun79k845Ydwg1rm9hALjhDsSjQrwE7uZdom1C748Qd",
  "key19": "56ezBvfYuvy7D2o4rcYEtU3cydR3w9fEYwRVC7p44gxWdaFnzDo827Li6HePYXvvVe4McHy8PDxdhcrN5f1a37kY",
  "key20": "4YMAvpbfG2t7sDXmMurZVRirq1EpBPJaBkPk7j5vT7MhFBFNEtF5uhXnUutYxPo64qno62PdbZtsnsUzPbBEGRzD",
  "key21": "AyULR96d15GkcVzfQZWCjLwyKsWc54DdKhTCwi5A9eMfvBpcApuaPsaMpsgMybhSdkQD6TcXnnAtSCV9VY3mW2W",
  "key22": "2ctoi83UnFcftB9gBhACVYoWLaMmogU34wy3CcxCdH1YLhvzV6Tyzfs8qjqU7ziXLayTZE8PwxieiQk7A6uwWfwP",
  "key23": "4NTkXQ596wLaodMXu1Lo2fdVo5NMBQyQBpV8LoGfmY8fE4XknvxKoxjFaarPrgbEtKq4QRijm6evPVZ9dQbBKJR9",
  "key24": "43H2aTAvYFcrh2mG1fVgoFu1FBAXbv4zMbvWS1paxK8fEQ57FwDEKcZWSj3t8XP97QEXW3psRDrHdDBguenwPxCS",
  "key25": "3MykmMPvoRooV2wK3ZcepwLqrsiH7QGMCmQUkjK3adQvQbAifwz1ATCrCXEh46ZQzE3TSSfM4LdCsp4fCZvEabRf",
  "key26": "3Fti7bH5HuPbuDRCDhpkqwUaMqRwQA6G1VZjSsjC2s8JmgWmuUUBg1UhMyqa78gp2p5b4sv84VVPUgkLJEHVfZLU",
  "key27": "3tBrdNwjHkXQbFyhnaKYXkoi7P991Ytr1wxQSuqugrH7TQEWsW8XXo3Qfr6oayVDUThvgXFZmDZPhdqNbAy7UTUn",
  "key28": "2qyfxWELvfPztvXVQPUc1CuQmWgRTrMxGhHDAgtkaAtSHrHBR88pZVjmjmHFAf9YqpWJxoP35WqmVotcsQjmsYt2",
  "key29": "3yYv7kcE1zvigJRsNLGFifwDPt7f6aJFJ8JTRRLbZnNUE6A1WVD8mpWSXDB7jtUsBgFDitYWQVMBWncKFRfv8HQi",
  "key30": "3wMPQsC7QjKo9HYKv9jmCCJHVsJfVoMQzpdn3mnCoDwfKioZpyrpdVNqevKwC5mzx57x6kWqviCLSWunX3skWkjj",
  "key31": "4R8rLHt9EXPqRkDiPwBszjxP2cmPiMwHaWpWtgsRe73JCQad8TCpvujqQGLwoEPfqJ75SNJ23aJN5mQtGQ1bguQH",
  "key32": "2d5DUikCDSTYZjAhoFwdA91zsr2utkv5hYZTaHEC4e8f4VVEWZyLyEu4fn1HRqYF5W2i1WaUQtN4WMeWBW5peCx8"
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
