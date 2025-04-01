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
    "6fFDQrzYwvvtHAaAoZTtB6PSxabUuRNyKUfSjb9rx2AnbwAR3Eebc2qD2GHAzdnWLpch92wNnQKXqZsLCFZypg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpBGNDBig8ch3MTJoF3VUm1g2GPGVh4Xb69jXfN5uFvZeopEL7QxyqKKCcXLfiMWLk2azTEuhEdEd4LCgGT65qe",
  "key1": "4ferVfEnkKx48W5LZBB98pywUM4TgsJ4pYNLWxfa1fdNfRHrepAVbtVKyJSMBsynYDZwzEGD59NCpHaRQMfX1Qhz",
  "key2": "kKWWqA7RarCXpwdVMMA6nmzyGtovxBn8BNyb35Dmy9u8CrDvwA29X4dzNKqP3EyyJTVRo47AGo4AvxovZSMdM5s",
  "key3": "4ViDsft9gFaeAm19bsSqB6TpKmgy6aeVxbefGi63YkRRwGwiAG3KagaLtJvvq8c8dEdQXrEdtz1pB31NLrBE5b61",
  "key4": "4buUgHrfVzWKv8QAk69uWDA2L1dDPtQ4hW4uURSQtcW6rWXPKRaMXGrDJu3njagVjZM3468eQssJS4u5icpTuTGf",
  "key5": "5mXpuswF1M2kNFSwYDU1vHGHQmvYAXvvfQPhUoAQWV42ZxAzqqbNfyUXkndS6acwxBvfYt38uRmTEQ8XQk4waue",
  "key6": "3SW2Uc7gfUZYV4LCmzSEoxMjmPZPrtnVFfjoVcFAPCWDrPi2oLBSQMqtW6CzzjLNEcMvGKKz1reSi7xYgNYoSXYh",
  "key7": "3w7AG8x1Z4eiEbhJLY3q45miqc1ofDVJhwre7FWnemFqJRNnAU4Uw356uEMpiJgz34YyRojhuRrdKW17SyUsjYsx",
  "key8": "4xREncBpZ7ZuH15FRrk6MQRtZdeUkjfkWLwaE48f8M4K2qb1Q1HyN4kk2LZct7L6hdYK2ey8uWQ1PeFHzpfGCbfK",
  "key9": "2gYoMrtSm53aVSgUnEr62viu4JRddBU4uysaXhVkCtTeawqjnYSa5za2fE9Pf1BTWMt8dJcGPuEDPrVGvJdc7wmv",
  "key10": "5NZMc8qhsdrESMEgaAeeHvRAymvmFyMfa8yH3FgKAncstXTCSFvYS4yTEM5DUtE6rjPYoFQhtwvehyYixRaDagwt",
  "key11": "5NsnaBbwgeMeeSUXc54rPzDLQSqX9LQZmKKjoWonNBs73Nh1JPW4anidsEQoBYmihd6whXvYgCoU7odUowCCYb5J",
  "key12": "4gpZAM7AJ7SqEURQBNapg7nJhqi6BDz6GFGDb79C2n1n1ZRDvucZ7UoCuWU4rUHk38qeHT9YB5rNYvCdd8HYNXQH",
  "key13": "5tEirSJXkopzhju8H3xpTnRHuLivjrtd1tiWXtNDPBn1L6nB7M9aD9bmEcVjGaTi8pEaDfEud6oj8MEpkrBayneJ",
  "key14": "5yfzgDj2FHJoV3hNwa4xLMkcJVNzkxzQGF72q8fjYHHjDSS5EWKgV9rSA6xEu9kK5PtEFLamkKHhZy4r3v9bPSUK",
  "key15": "5ogAd45xEZuSLGdR2nYUqi4b4poApvTKtnUJ8JwL9d8QFMnu4CrxX4nTwrjSCxEnopbLTLdMPhF9sqEN7MmBjtd3",
  "key16": "24aLqqj9KCLkzavRtcRdSW57nTWSGdD6pKv2oViUSNA5aTaU7AEuWcLgHN8L4kxqaytXeYFTfqcLCADMxPKdwAc7",
  "key17": "sZSS5iy2JLHpXVg6ABfLd9Dia3dzthFTjh3gY8vuUiZyJPYNjBDxNCbPMtTV541rnUznd4WybgPrZ7AgSTvefw4",
  "key18": "HEySsbZww63Htc1ypk6nGb5QDSPSyrj7MVN3sLQcHrLtDGvjnzJx8JLd1mwBFnJnX6v73qMKJ6JdCYanUKV2bcg",
  "key19": "2mfPT2Bx1Xj5o44rPBvX1sSZjngwr5KhmzDGyecgjZtLewhDQncnTDJao3wJgK9kbCjafZSMLxPeVeRjmqcEBWBi",
  "key20": "2NMRrCoutrgANneLmi6i5KGig5u9aFkvqe4Wh4PeMV8Rs1aUx11HkbSWYp9hC6HQ2aJLR9f7MZ3ZycF12DWN216N",
  "key21": "4wuCkqmsp2qJe8HBbmB2MFCKDLZmxgQSPiEmy7Bi3nT9R8k6MdfcFPXNLgZfWyCeNqU9seNDXS6PoaT4ga98BJ1Z",
  "key22": "59tVz6kfMRbNtU2ycjArV3rpNNVsyh3ocwbnxehxaTM2CqerxzrTddEqSu6BBPAHwsbKtC87EcnbX5rXEJyx6TNV",
  "key23": "4FUxim273EqervynpxdVHEw6u4yeRyRe6Gw5aG6bNfaTsGsMFFPEAdA7Vo7e6JWUqjsHeU1GGVsbPpj1nAU9GMHU",
  "key24": "2u56wSQ1uj8CsfCDVwbuvjkKDPrDFiXepYKd3JvYMcriFjPWFBXUTg8gzGfPgnttX5ryPJ5JD5daX5uJLBKNyrFt",
  "key25": "3eB8oaKnipbEHfx5xqVSwCzVp7yHQQYCGC3TYEz5s5JnxG4ZwiymcSzbdpFAoyLgPdi5P8NuGxmqrhq9qPBgyCAE",
  "key26": "4cmb8LAaAKLn7WPM93nPzWg8LYeTUz7XzwS4RbaJiUBoZneS1ic9X6eFGD345N4ojSXXf63VydeyomxHfDorVhtp",
  "key27": "3MMpSe5vzGLUNZLDRGce8eRdPi2gBUHdWtxwEdYPiXdLQkphMW2QXDFLEjaowzUUknnXjRq4At4QRKj9iSVKMUdA",
  "key28": "TUCuLjYNsyNeMtpu7zUxfHniGiYRr73VFEGfcjSASeTYH1KLfpYHCXrx6mz6UV8mKrbeUm48qwefjRckCJbYFSJ"
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
