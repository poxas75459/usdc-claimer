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
    "6wASjL9xCiUS9T4oCP21cAEz8Bzwkqdbc6shb1WCLVvohnTxNCZz4q6nqrp1cw17fyudt6btbxZZydsawmKwvrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szqScnA4f1YPW3fh9L4SKbsaBbiySTa3f5tFBhJqu3Qxht8S2y5V7toDBZWfiQMwNSuuqyJHnkkrLxzXiEfUGKt",
  "key1": "3KgC1hUJ3j5rUHu698ux3WuiKfvEBNx4hsXUUa58jZVYrTb4nhumuX8mm6ARLcykK9taxTcFUU6NfTtRtLqwfKSp",
  "key2": "5NdTZGvnhS7gbq86TRCo6RjB9mkaxH4Bsd2CQ3tyaKXcr4no5c4ChETVonKWpTuCf2MJzC3c7FRAVgqFfo5yCgUC",
  "key3": "381Mr1FgLiGzNN7c2ivn6s3rNCZohvTZmACyypSDtYTVbiPBc4yx7bPQKNhs39XfjffSL891phXpSwrC5jDBaFwP",
  "key4": "4AC4kAsNkxq8HF1SJ6iMQHgtEvhPe6c1KXmGJbXPk2pYfzPPYoL7oqCtrkJ2yeZ1ozvvgsWd175AcWEBw5iYBBMh",
  "key5": "4m28yZ5MWxvmBwUHjgGEZnvQSFHXkmrjEi3NyqH375wDzgGCJ95kNhKZe2UcDBLCFizcBDF75pwt6EE9LJT4FKMG",
  "key6": "vj7dfmg87ts6NX1GFXmLPkyUGyGMT7JJ5VdF2sVmMMjiEUv2QX4nNwJsNuL2yP2wgcxqUxUmjcpU3cPyi6MYCNn",
  "key7": "4hu6BYK9A5E9FagU6ZnKVW1QtGd6BtC1Bjmx2qA5p9hHt7Ga2PkSBJuQAdJ8oJJaFwcCXBCKiUXmxKNqyLwtxCzE",
  "key8": "3RU1snUjLy4FB1GxA7RmMG555o5bhxfFJFR99V6pAMFvYQ1nshLvbd9xjaDjP67PZzcS2nxE6HFssehGuB4NtnCK",
  "key9": "2Y9wR84sD7D3KgRx4Pyp1feVESuJ1t1qfPUdro9jV2cJbRLitfokMvLbHX77PCsy5TWK7Xw48VMRn8UhaKp7ugxM",
  "key10": "4vVSUdYtCDhEV1wgyoPTMJR9as84QfMP7dzsTB2BCBG4qKVK1TfbKp9qY548hogXvytuCnESjeUwZNXNG47bDdku",
  "key11": "47YRXvw5wSq3x9JNWkqVYKd1DpZAkVacFrTcTyspE4zv2xLyCwBuTf7rCQ5RxC6KgGdKCsW4MQHGA5FX9giaD9KX",
  "key12": "2gydfJCr6yJ8kg64WxxPnWi639E8SHqgZvavhQf87yj1dUz49SpV4PikJcwxkvQ5SXHf6F4thjieNjnSPFPHJpf7",
  "key13": "4THu2LT2rAuFq2STbsrmaK9qFmKyp8QUSkPd7gYB3aUZ5zMugxf6VFDWAhp6PwatR16q4EWaaSevLpHsthJMU65A",
  "key14": "5SDNSK7A9wQDsbsf83RBa8Lw6ThDKrncvEGCYCVRanoVc31ATC8j5PqCBtyxmQ39zv97sR77sU1UMB211hC6rwSW",
  "key15": "2A5wD1qS7fycQuo62dYKpcUgBsNre73N9QHWXp5fQ1q7ACWTALqf8JRjYvC4KKJC78tgvW7Agw5nEuGpkDuHHqXj",
  "key16": "2N2bGdRrexZKQd1xah2A73tB9zY6C4NvPmbFGykyVkUQgox3zkiXEY8XNBHNBkUoynGtQV494An5aRdosAWd1iCB",
  "key17": "Ut5ArFDL3xP1T1p7wHwwWshGsJ6jU11HPinpFLnAiXMkd6zBoamPCwcgsRT3avehmHeqkkCgU34JQvmavjhkoo4",
  "key18": "jiQhRgUu9vFBHq41EgbLuDsP7UJEzyYkCWm6S8dKKGqq2YsDSXHTUjHsAHA5WMHacSm9qBtKvsE4trHjEd9CUJt",
  "key19": "4ukrPBGyiGe4Rj41UkwuCrrCwuMC28XBrHxQRFctP6d25Bab8Yd6ULZWpdYFLczEVvMvYvT2o9b76JopcBCFMjka",
  "key20": "5zEEzipHsTD9qoBaUDZCsnAFe4ZYzsR7VDnM9uPuNzDTd9q5gDd3xdLa7BVrzLjzySUQmrW6Q3z1mcU6BqtBtsEz",
  "key21": "3jjqivLFMafDwDJpV2RT4WLarruRruLqBHEewfbsmb2J4m4krDyaAJbDa7Wae3jWEiwsmxgkRTSWgYvkJHy5aSUb",
  "key22": "4Bjctczs9MMqEGL75iWSZUz7yE4oJR252Y5WvEQBi9y9NSqstZAma3HbJsxGP8SyzDwzoiaN6XD136HQ1i7Y1UUW",
  "key23": "5FZCzq48daSGBJXA95zCAHGZatKnbarr7xd9CpDGPdK3tLsee4X3vH5TYUjPdJXRzHT2umsqa5wxT27sGNkVQ1Q8",
  "key24": "5dUSUMRtHQw85dEkVCaAh99fs7i31Pz2hhfrCD8qBTgPrQqMKRHGrj3PPXCH9woXur3DpighDYEAh6fEqWdkRDnk",
  "key25": "NYCDFERLxeRGTXicpmoLzQ47TfB9GTc92rDnBGi8TWSdu9jQAJhjMATBu5YZ3TZu1T6kwJPVonhrnnbcrHGZVkF",
  "key26": "293s8KTv5Gzw1vE8PUkUjc6um74RWYRpo8hdSa4htCYmKZMtP4AoXz1ebX4jQbRFXKg7UHHEDwpD1GDQ5tjtpn9j"
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
