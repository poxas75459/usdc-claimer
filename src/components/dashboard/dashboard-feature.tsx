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
    "392srHgB4quMV1xCs7AQKoMyaMtVvZtYCCLVctPRkXgx4bpjw7ropXWT2TjTMuHETr6HQJ3KBERXejhu1b4dHbya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRtdcXxNNjSKZdU5aq9XS3DqCg898ZkgtRfdbyChwJvpaHpk1SVJbMi3JzwRjMX7NGabtMYJuZt8jrKZYZXWhK9",
  "key1": "3jFJLB1ySitrc6rXEMTH4u4RXwxgeaRkcuE5pD8Sp387QjVMocX5B9kRvb5J9UmXc8C5LYYPXqVvcEhqYzwS47cS",
  "key2": "3tNeVdFMTsqK5nnghRC1vma2H9ckVvsojxJZLHHJtRobv4VoF3GHSkML16cuC2Fhjx6X1M1PyAs1Xe8p2WbR61Ry",
  "key3": "6nBapvPofjmeKTqVN6xHdk8psSAcYRAR13DvUnC1gXNTq5rUUPin8iqC4XcWNyozAUY2LFg5kngznoGvJ8y5tXD",
  "key4": "5mPXAnGAi9uDfRWdiMaQbVN64nR4avcfTh53eMETx9q5J4UoZ2G8S7st9sosTAQ3VEEM5Vo1q2sXicqt2nhiCgHz",
  "key5": "saeS6xzy6HHhfw9aMA935erThDJpctaF9Ruo9sVB7cikNF67bs5uGU5b2V3bkNGQrsacGDyhDJ7WNdmwrkdV1Bb",
  "key6": "614QK3jzPLTTKP4myRAj8cF31PhQ3GF6wuTFbRq53uMffHMpVEdF3S8CXKZNGrLchqXwVZ9cBgf8s2BhR3RS7y2X",
  "key7": "3MZS6HCTjT5mRXANfaZSfssoHbBDcZY5HZXwUb8kP64VZeHwyAjtHWRNgWwL2yQzzj585hoBKaVyP62YyvZtGtAt",
  "key8": "4H58qTrs2KGj7xTcFaghJQ7CA87ksWNLaU8K3YthAHBwKnEUSmQqRafT1UXxTsf8mQZrKuoFw6weQEXm1SW593Hy",
  "key9": "5c9WihtWye1FWDEzCH7Mfms5oekuRWQzMuwFLyca4xL2ZvqfvvQKUgNfonhxpvZBhebgifxaYm2UaswnKiP2kK7S",
  "key10": "5xUsE1rCw9Xp7wRXVUfAsKG1EaQoBhqHoc9Ugi2SAsmYHFGkq2YEg1SgCYNj6jnnmzJgi7pZjB13KCWEUM19UmRN",
  "key11": "5rwNgmyPzjo6UhcZkvYizuuh5jeQtiFGuC16FqfYDYRi5KHYESMGwCpe2ZRYp8u9W46fNjmaU8mxuMb7CnSBS9JY",
  "key12": "2AsitFyaZbHUPrqF1Y56HWP2edsLSbeQYJBjYEV2jZroz4b8hh3wjEvWgqUCBiUL8Y6Enu9a6uXuqQG3YQqVAo99",
  "key13": "2L4SY5zJCCwZ8hKJAmhkSbujmuGA9WYt6AYjShUYdH1UYcGgEBm88JV7PHvVmCpHBtaB3kG2Q3jVzdYbZ3MvnG5X",
  "key14": "5q8NFDEJH2oXqVVxFAZbTGTm1mXtfvpAiKRSa6xaoQXbffdMkSFNRi1dyBcj9FqWDrFfg2yfCEYMMCQDbGW44X3P",
  "key15": "3AVNK2CVMo4kYjgZXDVw5Ap23ZrceJH6CXRxFsKZfbtYMHkwyaeSrDGLXUHfLKFF8nAjpC1sRopbuJhULhzdo1fY",
  "key16": "4ptTE9nRimLwgjHZdQ5ra3hzKV16apUj283KP9HCjMYm8mnUCcXFqVX3ReHchponKkJJBDn52inpouQX8EuLnBmz",
  "key17": "419C52SogWRLBnqZFhqDJDqkJzr9qFphtyjF4NgGk6ThoqhPCoXhZxYohKUt6Ug993NaNdhWW16LV1WfwbCosqz9",
  "key18": "5bM5MnkbfYfSpD1UB88vycj1oGzDeekGJt2zdSH6kDr2gDzihZZdqDthq8Yt5KUDpBwokwrvnxg6NoxH91VS1ugb",
  "key19": "3Vt6gy4eYfmsTvYyV2mEzxDN7sUAf1NhrBJU7CBK7XVhDN4g4RSR2wx3cZnyNbjNm1CdQH1W4WEdWLkzSJ2HAou6",
  "key20": "3hibsYLBMFM963QgjenNUw6f6aSUhbiQjKFjaL6ecrKCDZNYG1GGx9JBZuPubM7uXoxu1Cg8ZYbHMaZTg7BmPNcu",
  "key21": "4v5MXGByA4UJmTg9VGoXqmVyrnv39AuoV33VyEtG97wfQjpqbip566zfvFvm1nNaQms59Zds88uZU6w36nMuvjNA",
  "key22": "5sGyBFT6iorAau7vBadCuc5BMmSn2aQsoCbM5rTrToNHX6hkjsL9qfc1U9ayKPck7pKnnMtxoCK2GAiBQPTuSRQS",
  "key23": "3WoDPim4qvmaAL1SMC3JyWAGwo7d1FyH7dV7USBEP3qz5H8p4SGjgviLCNeY6eKQeGKS9cJqidRrxr9Mi3aySbfu",
  "key24": "2D2FCTfSurqdpSNSQg9SoBSw7eNwoBZHws2gwMjmmrwyHsKzKhfeDo9gL7RyNTupwCKou4K4hB2CatZX5HBm8KmV"
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
