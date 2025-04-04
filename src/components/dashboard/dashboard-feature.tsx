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
    "2UDftQASoKegYr6WTyVtYSequfHAeNioYpoRpquH5ARr83bASoDco5kXY3Z98KBfiVU8EZeQ3uvpzwqSm7ACqJcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3njhP68pRPMo9VN52BR6cWmoBkPKeeYpMaSAiqv1zxf3zS6rTRcD3uCQoqUkzUV4EjHg58CHVUopeFFFT3TSPrPt",
  "key1": "3tb7BTq2EAQrrzjPqEbSMa9srfdwq5dmN61jtei842ctC2vsYcr91mciQ6dJ8Q6SiQe521CQDkiMZVMFE5vpybaF",
  "key2": "2LPntUnjHFCcyDoQ9s26FR7M6rzY7EovS9pQm6pKuA5eXq19Q7MobrUXAj3vYPZR2V5z6ph7zCP3TjMHPncPKxdm",
  "key3": "3mauMYh8a8rAbiHuLhiRYLqFWN8VRf75KuWyLguSAUbu1kgUid6SfpJjHn4bqwaU4HEYHf3BRoHn1yp4jhZ4DQnB",
  "key4": "53PNCXBkP7se2Ck6kjnxwqVpgGSbCreXATyKFrxTGpTMF5NNQnJbwinzPX5yMmdKeJE7zaDwaGxDK1RgFiQPSzof",
  "key5": "2Wh3urVtGypTYrzJVECA8aDxEQFSQvFCb89sUVmxdfwF2fb4ombf4imYuTymfZWoxYmLkBfniWxZ4ixg9jdyzeJP",
  "key6": "4YNxUozsX7wmHCgsaeWN82if5pNk6rnA3wPCBSaeYkBp8HLXCFxfaYg6sCZ8XYRdibmtS97Cq1YBqosG6Aah1bif",
  "key7": "4GgfV9ZRqSSVoaidMPKYrMo7xHsBieCm5xPBJUGijR1UfY7cKDxmfHwKsmxzo8sXk44evjK3qeJbkgwS5nGMhMLv",
  "key8": "4tayr9cGYrFgV7M1LGrVhUirQycwETQeZfNTvY8DZB6dtj6vUhXK8mTfuMRnA4xtf18whw6GfZXfwmP726anqTR5",
  "key9": "67g4n32SmDYqHN8MFjijxxd4VHX1BqXBcGPvtQf5csnJMz5hkJ8WAPM7UwsY3gxPsGZQPjyYCJpQ9XU5cgEdf1gU",
  "key10": "UEbpYCWTG2tnQJbdSQ526cSbiURtuzp7H6Te8t1dcyJk25DyJNbzLR63pX9NLERcEKTNrrE1A3TbXpSzgjRKZcX",
  "key11": "2RPkEL4xpHdq3xF7HnoquMs792pCGZnkV8e6GhsisaAUowwPWjSdspirRy4PSkttX3iDht7gxQJUSixDWSAGLgDV",
  "key12": "o7M9iwUbJWXdSzxrYj5ii7yLSYM5rsBLV3xEQc9MCfXrcU6S83s2tHpc7sxjJkjJETZd5MifU5jfstbhWRFnSo8",
  "key13": "4dAExU2GToHfsaPcDYtRbx2Vb4LdZ5jEYA1JdBe6cAZPwxGG9TehmXb17hbRy8JMcZiGmtaeVKJUkvxte6F2sTuq",
  "key14": "2Mi4qVvvmrY3yUjvCQQmpMdJYHZ4pZcUB31CB46AQ46q2Ymfbu5F5AHC7Be4tny2bH4Sst7RKYoWZ6iDKitES9Lb",
  "key15": "4SWHLFbgbaXHFPZo8RZTisMazpeH7uvEkYtJ9Gf9UrzZ8BQEdAZCrcRzBMSiw8se6swgLb1iUVKnScwrcQYucGLX",
  "key16": "2zCWjQwA19sidoZue4gNMoC3EXW823sdK51sxBihoFS2ZcYVRLSF39B8wrnqnTtGwrDNEt3hLmBadjWjUCwywZXC",
  "key17": "3LYUDYr1uBp4tT98EQEgsVzEGLr6VYMM8Y3ZFSCEuaoGTaCSWnwBpF5TQDNZTHjN1NoW7F3aPTvWVKQUzSJ7jDYB",
  "key18": "3oCxvdY3rxnoHmBCNKSrzKzaqvWBoUqmUqqcMrW1g12PeNTuDfLDaCY5Y9Jx9Rfam7pLQHzN4ax9BhQN6SkpTfMw",
  "key19": "45FXAYV2cLEv5mqCH4PsR6djrGb3GqUxsVAeYupUehuu1jpMDpKEUoMQTT81mk2HJRqSqvh8JuVBG4myXqcsF8J8",
  "key20": "4r2m1xjGD76xPdexSCMgiYUUtDak9phF8DLZAJouSbV4h37gyYv6UhAPsXu3UwFSHfU92McegSxhpJq6oq4aJgyJ",
  "key21": "228YrehAjfPhkgYf3PRYMXH6by6G3ByrPM3LPaEHiP8QuQbmFgrnEpcK984oRBDGfSCUmgF4y1bUn2zQdA7pJVct",
  "key22": "7mkMwBjpRnJDwrhN2rUhGQjfu7z9YpxNHLzweAFRQKFaVpdy7wruraLSyfSiDdVi7CC3e3QPXpPtayrXcmaqjXp",
  "key23": "EpFLV9dHdwYz7txguHFRtF16ghSfSRfYLpf1455B8drA3tMKzTk3NmyZ2TeFJR6UZvrPVqrSRR72emvVhUEsUuf",
  "key24": "3WwmX1J87346o55zJN3aVbcw7K9xnYtbCbKFVmCWbJAotukM9BPxeUEAdDzsuRRwmKWzGmp4SVjRpLgFsk43NEM2",
  "key25": "3XJmrLZJB6HWGjo5ahAnCUjEAFLa8FWmTbMDrhomDZ62ybYZxvBBNRXGMeKDjWCszbn4zD8Di3AeDmjchesgVsvc",
  "key26": "5FGne2RqVjdjCdH4TmdVCKWXdGh2SLCuGXqmXfgoBHJ1mTYXuhQSBdTbCL7U7bSg3cAqTHVueqjLXbAtbPv2YjXF",
  "key27": "492m2uu5ZS76pt8onmoUniPCjDCPZqKKLtAs8nBqkBzcmjYGexvZ4gCHuu6B2Ez16VeXHuUXgiyCgdnUs4jdYRb9",
  "key28": "2msnD8CBV2ju2bPTpXnbQKozN7TsjNiY3ELzopYS7qZKqV6AEHdD9yFLkbFktfDugNvWbgcCjBrMgA3YHpH1mLR1",
  "key29": "3kuyxxmdcTPCy9cta3rEVeTnqnhHJ1PMTsFdWC33ZxUMeufXJUMkdju4J5EpAhp9ghFr1PLcjib8ZBBD2LHKAdSG",
  "key30": "3EMXh4tvHdLK5NCY6BGNQ6QnESv4SD2VAPsysyJjbxWpLqBEDykjow9gTHw6vqVxaLbaf4NZ48gw9uEtKnwCuAKC"
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
