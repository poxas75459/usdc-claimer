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
    "66ytjLAm7c7fSgT9AnZrDJfNR7tx8sSUuUPzLnhcdUpSqbn5s6oQ78d2pRwQmiD2f78nTo9cXRj7AZdRPdiNWzUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eikxoWod1EbPnJ87XuFgC43X7FXjCQEXmPpbsCUkB3Avb2vkX4sxVEQpYtVo5JyK8kChbcjBpgTRgZicYgAWknq",
  "key1": "2Bu8poiL2BdyuSZUyW5AsCpZACQMqpTTcGK2Kx6ebkoCq8RMGYgEgvd44ZUqMoxhMnDbRTmeVRDUxvH8sMwhtMbB",
  "key2": "bMaFX8FD58uEWP5h97AHqanZkojz4npY72tbRr4V7VJRhGVUaULmEt2yLjCURZ2XRUbtBZ6yihDZc3DGiGB5dSK",
  "key3": "W3E7rxoizd5VCvdwHS2ar8VoGTpfKoEd7BAMnFstASvqEiWf3VgNGdQj38Cv1GetZEE658CKBYnmEAttPUma4dQ",
  "key4": "Kt3bF8dZJQL9An2yHHWtDgM4rBCRtV28fLwqadTAmJZatuL95ZZwtGMPQvuMHSmenfb4qufc6g24EFxvmgBeazE",
  "key5": "5qroftistkH1FbAen3b7XYQHtc3t5cLQNtE98ynpL2NPjkJvfR6JfdrHv6dc3GAN23aEnamDpuT6Km3Hk9HeFWoh",
  "key6": "4PRj2DwH7MmNJ2w1YT65MCFyon4mCubZSpAjpsEW9wynecVU8uBySYzTc1WgkbPSD4Ct1tMsQsDTvFtGcyaX5EWG",
  "key7": "3mqLyZbgT2xepV9aFPbHDPT98KoNU8Ki1ubgFDmSXvWx8VNLf6dSRxgr5sqG2cgeDcWM7hyqg3DcUtWLDV7AzJ1m",
  "key8": "4KLHekdgXFoi6YyNvZXzMFShussGe8DoqYLRgcSbFe7SGhiJFW6fV3NTZAFgHiBM6H6yx2G4zjRNJzgdWCktZwRh",
  "key9": "4Cw6EoPJvp6bQxXEJxNqyGYx9wycvgx4yLzS7EArvqWxVoW1f4Ark1wSMiovW8v45YRLvLANjaTwF4cqd3WbYyB9",
  "key10": "5DyAVw2ifQhe4nNCemh8jYkMcRUsEb22MAC9PXkBsvyVptkWnHD8bDDMiMzmEb43wvq8iNed9vzVzTo5Ry5ehaor",
  "key11": "3FTLiRd7TQnmU5B6oFz3Aess8AUGsGsNd29m7f4Vqs3qdczmPH1Zp6gK4wKoinihf5mbKw7MuuCDEwHRNwH9tnRy",
  "key12": "2PFHgzqA7N2QW5325ikTnqCky3aeFmQjgfRJ1jg7mcRC5rtRLgYjz4j3FP37fHxcgoRqfACeMGfJTDdZXVLafhEr",
  "key13": "5ucbdW3z1c6CtBaZZAGY1z2kubFrXnwGiNV4dtxKeZpjigA58Sd3CZzk4LxrG6cNHdicbQyDAbTj281Jxm5c37jx",
  "key14": "4bXN5rG56Szg3m4ahAnPpeyGG7Kwmogv44KvYFGjYuZ2eZy5sPBrWTHk6tq82tno97ya4XSnpHJHFCdQ6SU3m9mD",
  "key15": "4nH39rkoefjsAsYPwGuC3GNvKkDA2XmYoBpDsvhq8gDzHT59Qez3475tAoAdFzUGFw3DLxKVGKUicMxG4Ct4WKyq",
  "key16": "3md5nnwWGFsiZFNQEd7syJkeFBmE17TwbFEAU8fL2wtnqofyZYKFa9SXnKpboC73hHHm7pub8K4RnG7njq9gjm1a",
  "key17": "U43GPVuXuxyo3ioEK1hG3VbfD4tDNwL2LRb5T63hpU45VgX9Nr5KGfDWXuGbeoqzwMy47Tm1fNgaDx9iQrcejyQ",
  "key18": "4tuHAoj7LEus2AfQZxCCSwgrZhiMP7XUJba1YqR2CZmX3MGhbVRUGxiQZktMhKcEP6D4a6ND2M5zLHQUew3hHbDC",
  "key19": "3SxxvBCQK5D9ePCuYU1m25NLSUqEik6y1iArnwU1NYj3VbxGFcryhwo5JxG6D9DmNdZuqmDe9kN2NsEE6zRSzqj6",
  "key20": "5HhVaUJ6moyDaZkHrfau7zzCAbtFvJFvij2TgT3UsqJa8SYNpJ95AfbCHEcdGVZSAGYahqjq2sqvqiGiMdQWXZ6b",
  "key21": "4FyWErG3ja2oSmHxmaiCgHA6gkLSWTgJfvbx24vW7hsPpjnutpfifisHEVUij376hUSuJrrXEQLosoGYHR3Dk3XN",
  "key22": "25RgDALSuXfx3QTxTzMyt4p9YaxjtJcsTZFM5uyNLK4ppELkyQbCysJjqzHRbj68J72hG7FxtT6ZRUFWw95f5yNc",
  "key23": "451cV3BTTSW3ZXE6bM6XrNo5Xfdm78qrhb62gRimzjXaUpyidWjrvgVKBFgVYFYTQy1f9mBXxzGkUbSxH7XhiUXL",
  "key24": "W1SeUB7K9Kie6HNhpttRXSebQnNj5Lp973UgME1QddwBcHjT5xgsFVBc2cqVof4eDibtgTAjnACZTZBnMTSFbDn",
  "key25": "4GEfbPQdgttgGjVrkP44sjhgyJLHi9nJu7yBsFzXRQrDXebvsruhiF73vqoe5RFr8MBqq2GbibnABJXJhzXmYYMZ",
  "key26": "2NjUkbyeCQX4WPFTtsDewMDRwGsrXSHq7HdJ7UTGzcdHYZz9gP6SthuDjRcA5UpDX4v8HkyrndiuUcA5UViupy1R",
  "key27": "5Zsx1AH52QGrkLExz2ZaxzmbA4y2zmLiKoZxuKWLQjrUihUd6mJEwD5PyRpEkEcPvxpQFf4AFXCi8cbVZHnDoqdv",
  "key28": "5x55iCt5e82Kg8AFaekTqwtCkBaeoXKx37AUSaK3YMWH5bkeFdjzN7xKY7k8UjTTdrs5gUGNoV4fufiVdQUWVYHV",
  "key29": "4i38qzZxTzBy6EuaWUepdR5fGSjgXk4ycb5iT9Nrs26e9CPn9NtQ7assBx7hS9AT3JJN3tcwELqefVej9i49f673",
  "key30": "2YR2DaxgAJkfoRC2MNgZ3NGGbquq5FcNB469i8Mn3ms3N9zyFUuG7aueCfuPQNpifZD2Cd9CDreDfv5Ku8RgSoos"
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
