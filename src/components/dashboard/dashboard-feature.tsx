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
    "2SsawUANtg2K4KjZgY3U2YqGg5uxMMTRCBg3bAFXoUnn2UevqE6W2LA8JYqfrmpxPNCkzAPnUsctxZQ1ecXmJBoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AL2UiffkGeZLD4E2oYwZqx5hpH3Ftuw53CUKcX3N7vbRDcSdhqQ8gjHJytMaZgAGReARFWUZ4eXoFg5KgaPdTwm",
  "key1": "A6huyi9fNhdhPJ8bBTkwgocuMcd76TfxQxaHBBe87MwhEXwU4YPEB1vawcBixyJKwvvFnizRhSJY9CPoJQx2iRq",
  "key2": "5LDQyhKVviW5CfjQKaP2fpnpefvPa7pQUCy9sEzKDoqQkA9KqJ2bkFdSVQ6vUAbGud5unzQeLvkwaU6JS2PwsLGt",
  "key3": "1hxBeEGjYzYdNEgNM59yxg1JRqeVemknoQe1GR53RTN37JdrQsLrwDZFBDpQH2qHEMRnyhYhtPAwnhJeY1Jq1Sg",
  "key4": "5b8p7DKg1zncJqum2dmWmXbtwfCpedBmEtZPZ1q8781YGcVh6kQVdysYrfBFGR5jdFQxGh5BPyr9VZsN8MMNvqpT",
  "key5": "2gWq9F7jQBJ5y9yuLBmThTCX15KUGsf9XdAAN5zb9NnXPiN9UpeCUijibSmaPFSTecAY6USJnSR3D4ZMbTNQnQTS",
  "key6": "56sYMWRq8LscU1CdF5oLj2GwPuPPV6dXsd8QrrG4LNxLegP3iqk2TyFqJB614uhJVnhJunz3Bda85o4viR9nLhL6",
  "key7": "2Xj6Kep8Ui9dpwugW667cAD7NhvTAGCMZS5YG9u6cDxymTbPTnoVPgWCFrxhsgbFDh4q1hHFFF5sodw4MeCZbmmP",
  "key8": "4n7V6ASnAUGMGECrkhi6dg3N8qKcP1ae7CzunE5X4HDBGwNzRByVu4SyZKXnPbghQbDFYnQRJEK6YmoUqNLhFywk",
  "key9": "4PvKC38gLqPg5mEtLWeEaKgEaACZpoGwfbdueQzLe2C19qx8uQ2QmKaKWprvhHByt7wBQ76K3hjChs9CzLg3MqKB",
  "key10": "aWnj1TQGcUuHb3wXJoJFTyvoEnfrBaZEuG8W72KZDZkCbtqYmJwD47dm2BHj26fpW1t1hc5rQcYsMwz2ijnbEjb",
  "key11": "3Coes8vCh2QVXaJbrmQ1WDEWY96uyKXskLHSmeFTGuo5GwZYS87B95S945idYs61ygKmUkzq6kn8L2ppX2QSMVPR",
  "key12": "4HSm85qC5V3ootKoDT2DgnY3wzPQRjwM67kpUbaBeuB8aW7MBprYBdmbV5b5K2kTX112JRJoov59c6GwJzbf8ju1",
  "key13": "4KtxqaPKnytbhs8QVo1h9UnpK3HNDiRpZnuw6MHe76i74bwV6N7GJ4uYZ68mDMXVSkccca2L5xJdDhcrPz6tThYp",
  "key14": "5tUq6ekxHgcSBYpurCGsbnbozH7etxzVtWB46RyrBL2cfpuGPu19AwJLq9SGyPkMBkEN4v7tkffWTSJQD76xnDLY",
  "key15": "4EhQ3SUY3RatKVabkZ53dNvYjTQQHdsanpYLxHVHT2cQhcRskLhVjxuv3PehrxKJu51LzxKpedNJS8TV4wLrekjp",
  "key16": "2oPtBE5SB9yQcea5mZvVtxCAkEFMNXooCWGfaRMnoJXRZ9beApCCC2zBqxfRwAyxYHGvfsh5gVE7Pbn7GKATpqJZ",
  "key17": "4KvxaAQYTHC7viYUGu1q8KCqyW6is8AzdFNHcge1WzYBKJBktNCVRJYZrBY9WgvQDg12zTXZ6fTVsBQmWZ7Xz5F",
  "key18": "47gmYBshwt66BHJH78DCpbGxxmF14KxGK3vAMtp9kxXhCjxSCizF5PsN7kBLGoKqa76qC97uZuBZe5i2eGvsLqCo",
  "key19": "5SoJGAA4oYPNc3miJhr7nAoRDnNSoQe1fLhfEiwfrmJ4RCn2VdTFar1aiuGFodFFvzQbjzxxN5MLpf7CpLwq4R8J",
  "key20": "4wnsXaoZuXExza9iCn87LeE2Zcc1nmeWtaM2TU6oNffoipNx2vv2BESbtDzX3N3GdbxMo3yPRjzyUDe3mH5UFmHP",
  "key21": "4HptSGMWTAihmegKHD5bvh6g53JS8YE6iBRZE56FmJy7BaxSdYzB7pxPZ49z97PJFqazZGckc855Fr9eMCUuSYqC",
  "key22": "2bTU41s3Qn31HVehsk4NKQakm8ijKBKv3uBMHHGoFFa5dVxWGMAk74bV6bBh1wiwVivGSEjWEVrvP8qFXwH8qu5y",
  "key23": "5qwb9oFSMUFi4yRiRbDwtiod5RwwrFarBESaLEKXg2QuZP1dRrJ5FBpz7fCbKVCr4FJr11iMNcDKrKLajBDk7b9W",
  "key24": "edGsRB9jeD4qHdnk31WthNqg7vWsEWFtXL5Gtetm8QppimMu4RqjJ68Vd98mk8ncTGUNnA8HocPoRTXudYJC3Sg",
  "key25": "7PNzLPmwzSWZuYVenuqdmHjAvcdyLNGP1T74FrXkNGw1SdzVtPYTJSe2oB5xKzqYzeJntZ9fRt1WD2SxufEWXSr",
  "key26": "49Hrw81MtmzVqBRAHKxaimgLzcxwZZnYazZDUwev9cYKGV2bfxBiQB2tCc5zaHQBDx6XvW3osKNighQLmRYDdd4D",
  "key27": "sg5sEGVd1CK14JeYEBX2QP39rDgYbJUJbiwvB5C7P5mDqpWwwPSL1hqeYM9c2K5hfekrnJArTN1ppVnzwoHmLS2",
  "key28": "2EecsvSC11SPEG3oj9nzCbNGX63h1rVeHPQJggKrd1hUQD1Gyg9toPD32tqY5LW8fAZVS8HvaVhZNsMEvxVUDVwG",
  "key29": "4Yz8gu9eYRDVxk16RaGDKqPC8gzwo5mgkHny7qFTHNSwt8aFmKw1sbRMuVRRTXrJanExUzUKZZt2WtWmx61ur6sX",
  "key30": "p5Ee8dWQnDtg438SzVnZZrbUNYRBXKWugnDJmJgKEkEw9PmhtkczyDA3BuppJutdUV5gpvYZERimcPQtV8bskod",
  "key31": "45F6swGMvVKm5XDyhDpu2BTKnTb7UtsayN2p6VEJ8N7XnJCBobHsXJciny8johgDAUFZmqNXaa18ordH3hhkzKwn",
  "key32": "3ekfnEas6p3nLRuQWqnvEj8XA2VkSba1R5QRBPbVe3m13jq8yhEQFMnFo6nxwfVbqV2RASHdNjifYGcFAsyc4kja",
  "key33": "63yk2Mm3n683nzAcphy7aJXA1hVqznF3Kp83cWuXjgHYf3UhwpF184i4MB3eRQW3MHD4hVsVdeJfXGJueQ5gBdqv",
  "key34": "62ybPGR1MFGrApv6bfGnyGhjnPbVi4DJ6jVV4amqx2q78HhisjpKaEQw46PVUmGCXgno64MTUMcNP78xCMt5H5LY",
  "key35": "3gW2P15Mrx5RnpAVqWMc4vicKwXBTcxhzrEXtgBP4hBiM1WCav8ToZDqF7UPtBxSy5C7wuQ3BYo7pV7Bg2TrHTSd",
  "key36": "3WYS8eQQNXevQYEUawAyYrPfzwMmKrJ9g7vBNncVLAWBfBZvyyxG9nhQkWAEjxKpu4TcSHLesyF6WN5PX6gdECYJ",
  "key37": "2um77jrWfs8AfEdi4onwawCuuFjct2j87KDXgbTfiiyBEsHrWPSXqfWV7JvuVVFh1waqRyGj8HEDqFGL7FxVTw5Z",
  "key38": "3xkAN6xsZEmcbZoCBmGrgK395cDkwJzV9QtrQ6Tp8VQFgWK7U5mHHeGNF356rCn5yzF6b43T8Z4r4kkJZYJdif8F",
  "key39": "2cBQof9ddQ1YNWkfjdPhD5XFNuSxiGuLUvH16yJzEZKWSdg3YGti8kn8HuG7yRey3PJqMRUcuNNwRZYqnm1qGrX7",
  "key40": "2uzaN3DXGEMo3bFtYvtCyWngjUjfrHHxb1K8VACFXHWh13NdRNwHTg2EaHaxZ35fxsjuDTysEv6ZNq5WRoyCKT6r",
  "key41": "4zbDThzpUWAiZwd25EdGbv1m8Yri5GNE1gQMgv8RctgWKRCG2LF8Rmbajxo6Cu99ffhJCMyaKmFQYapX4Meps9hj",
  "key42": "2BT1PkjqXsSxE4tJBLBG7UC7rnYzfYfthyDgsqvsq5CYnP4dLXLR4bECjuceYWvwry7wCEomSgvzGGzxfuwUjHtv",
  "key43": "43dR7oD17hSPWCSBKmo9Nr4dRtgN6G1ENeCrBfKMyGkSkoLudAzLujhu1498hF2Loo9pydExcsNhvEVMJ53VrJxU"
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
