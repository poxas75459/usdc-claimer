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
    "4RZvP6SHF5svyR4URDYyArY4pveVarW2pSFpu68jJABb4Rph5qu9BjkSTiUoXm9J2qDNL8toXEVRKzNSEwkJ6TeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39xbRiUyMhX9RC7oq1Ucs7CkwpVqxSEZssRBcopN23AoVZrrN2mB51eqZ1CpEuSk9ntcCuLyrGyhkEjAAN1YkomW",
  "key1": "Yu8F5N9A3H8S1n12zdvfegrKb1kE4jXSXA8edRQMg7dVAvBz4TM5So6SZNh5FG8DJ3WaadXQ7MT1JYiWmSDU1UN",
  "key2": "2LnfXxWMLmF9qN9SpYyWVnnpQo4iRVefZmviP5yN7FcSeDXA2uq4KPsZa3MNjoBP1XYmQHi5nUybdCacQAsXmkBx",
  "key3": "5WAEcShMV5gFFQVE6kYXDeE94bedue9m6TQbyUbbiwjrYxVN7qKVQPktoGJ6FDzid9Fu56pTqZ1rotqnk5G6yruR",
  "key4": "E6Y8fJBFoXfoArM443StRQZTxN2S7VvFhZ9Lnhw9ATvCDShoyTom7pnRc8xSWUGShBW39XyeNqbJH328EH5t3Pz",
  "key5": "62X2dqDwDLY78ZL9r5HkL4j6YHqTbo52G1D8N7s4LSsxGZq7mcDGLApmcCPBta64orxmWac1FppwXeXbbuRCdg8E",
  "key6": "2ZUgk2cD6sto2M9q5u63AWgzgY8WSm29kUTsimKw2cH2PbhXMWodaFdVBB6f7mjMx8qZGhzUCqiVa2WPyYiSPpAZ",
  "key7": "PsVM6UHwTG2myJCDoroWo7S5dsnUWWcMWew1gfHuhmnDh5QMv4r1D9ThNhY5GBt21csBSmyGSPnWbSHuncCPhNm",
  "key8": "4cZUhkCMvnJDLrrytS9qDSwVHSjo9m9uQMeTKKk8Pt4xTu1VhzKz7HQck3rtEp6ADMrm5VNLSwz2q3wUCV7fYhMT",
  "key9": "63bz7XdRtTLwM9c5ixN5zJx1o6piN8tVHf5AvXFVeuqAAUNzKGnfaoS1H43Zx3vtttmKrxSBkHaUrFvYwag6gMri",
  "key10": "2DZoq1f7qCjZpKnM3Afhy9jT8SKKxjxyoNNSSVCp3EhRFnx54pK8EB2oEszerztWinMp9HKD8qNGUqSztJwuhB9",
  "key11": "5mNB7E4CkC9kuQyiU5UKe9WkDzoVySX4e9NNuyPAMUVAckRN66KsHfGfjfSj1Q2wZPFNhHBqPWt1zkNpe9iBZSma",
  "key12": "2C6pQ9ugQiAZasY1rCmAMDUNYwNaTcd44iiWQPY2ALgWTBPqdNke2wmGFoRrUMm1Wt2ESzLCPQyeoADsPJriFhXB",
  "key13": "KvagJVFRH7zxL5C1Pxu1pjiaq9PkSjuSFvZvT7zDB1CEZKVD73S2dnNq1tnxWGPzZWtupz8TKF8wjTjVivzykV6",
  "key14": "4XFjmmx6MRyu8iqtUjTALm6VXX4dxD6VsAVajAfLTorVALsRYXum5hp4nMadtEHgZPczea6GWHi62Uaw5WZHiYka",
  "key15": "56eb9FWLankBeauqriAz3foo9zEpzQoVcQiwqbhqCpmnNPTQWrNkKQgmgfzccw71bUSVcd39iJ4a9eD3HiQmgqkr",
  "key16": "WsPRCcnqDZVe1AkwhwGJR4nu7B4n5715CQjwvf6cSeHAUES3SieKASuEJD3zj7dbUJwM6g5BNGurj9xm8eKLBXC",
  "key17": "3nsL4GnfrZvAUCbeMRQeWgKk3eaBX9QvAWuS8sBWs3QNrEZrpbDVZKT7jRMjpKBijP1UiTdhiS9GB1mtNJHtxZRQ",
  "key18": "23RwqrfHXgYVU6CVUtV1rpNzBMzwmnqciMKCJHawpsNp8xg9LW7MzMN7XsVRLxXHVtSnLwWNoEMLqEmYtzpeLWea",
  "key19": "ufDr4fK2kg3DbrU4sKz24d6r3KGEHxNKkvoGHPJATttyBZoqfRuHNU5nH8RVYhLyUQCjWVFPiLi29MpkkFRRHPR",
  "key20": "2GfUX9VCEgVK9LLMJqg41b2xPwA7YNGwGFXkDQ7vSyrH3kiG13WJYDvLJXHaPABiEKs1K8NoRnTfBoDsf57mrQzF",
  "key21": "3G9JyZQmMXcwaj118E7naRzwXjZoBMMf2TaVvV4N1Nbe81tDYSnCHKhHG5Go9Dpgrq1bqcVDQxnhSBo2iLz2DLHN",
  "key22": "3uNqT7hLZCUqaoC1TcGnF2rPS8tC7HM4pie8TjdeLYqhMSpAS8kt5xntdq4bKNpAv3xYY42gnMWkHjPQRmMYHiUo",
  "key23": "5gNCHKXs9MKWJiyCskmfB4KN6zoj8EatPAdZ9YUCJpuUmWtbKBtHGZm19NZqJm14ftxCVvFAdytuNzbhALXBrnnZ",
  "key24": "jEfHgF71BQRANvSBSJM35Q7G4yRQnWXwqK4uFTJnaQAPCv6BsPXpHEAV6uQTzCMmQUw7W5CUBAiy1mKk4f8jXpv",
  "key25": "4KTtrSXcgaYAzpTZEDaAPnH1imDNQMK5xaGQEiVUCgQNk9ZaRMkfTAcY9yTYXfB2VrCxtSGRScV97ggLSdfzMvDk",
  "key26": "3BtNbTkCBQejPm3gND6LPjojXftpQPLUeBV2wA7gj95YiUNu6cBnLafiJwgwyscbPKpXK3EVmmUgNgfSeAFPT5zt",
  "key27": "52YEigZnkhAUqZiHJYSy6nc9gc2axKYT24HWzBFaWLq5QXLtDppE7PePkGsPMzgjUnXxtDtnnvDcJ65Ey9Zzrr4C",
  "key28": "2KY9eyGkbM4avwD4M1JK9MrMsENAB6YHLAGSTMpkb6ruqeS2nUXFaGZX4YuGXgRPgYGfp8woiVp1AqHb8wPfFBvc",
  "key29": "3WWpuHwQir2AVeF9p2ixKnTBeNWEHPVMa8q6TnfjfxhqidJPPp74hoBEHR4XLzgUYLNNXNBF61WXXYVZT7iFXa61",
  "key30": "3bESzCtoPjhunDfZ3DwDBPmE41yxYcAhU7WSVF8Mv8RsPE9dPEs7pQ42TMJZNRZegEvbPAoYgigxrsiCPNuqwwb3",
  "key31": "4V1Bf1wB9ymuMXoG3zaJFZcKv1sHCB1jXCBBLbCZ7oVg6y8Fki6Adrj9Jq4LBbsBFA563G4LfG4Tpr1UJxsr8KfU",
  "key32": "4Vk53Gc8PTZje5nhGE3LTewQqzP3K3QvkNYp57TpTXn8qpcUrHk6ajn4EA3bBpLJ3vftsf3R17m8NEhxg4VcRTdX",
  "key33": "2nrbnWKoA7naEunuKRTNZLiF3gpRxDK48A9rZAXnsUrFZWpJrbVc3gozUv9E14KfpjsWeuNBx4N8pKqUo5w77V1d",
  "key34": "421EPV5Kv38wVMxgNxepQbqrEYwhpZoDirK9yVcYDE4NGH6M5B2kLcri1C4yFSL4QNdxLmm9BT4NmTjNFBP8b9Rn",
  "key35": "4T8ejvpM5xh2cqHmWd5Ry4Kds2vMYyuYW4n2UvqDwKs9W5bfw1V7unMoPr5yuyyhD6nPg9pQ6PgLQcVeVE9GPCvR"
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
