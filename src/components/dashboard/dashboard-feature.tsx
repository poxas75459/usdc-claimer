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
    "31nPTqSD3iGxEkbXYtUc5ykJiKyCUqWVNNj9dMqSd64JnvgBodgdCwUUact2c83d2vNA1HcGK8PjABD4N3UVLZLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmZMvkKCVUCP5V5G73U5sPs2kx7vN8wnQBxtFdHLppojBicSEvmugf9FXNAMetVNRLSe6fi5ut7icUVad5J4JCJ",
  "key1": "4Ad2bHcQ4TR6MF1KZW4sjq2LzYmPrZ98HCSDGDASC3kHLJPVqLuQg2QZxgh4u4Qdtt1RTmNNRa55hip1N789eMBf",
  "key2": "4yrHaaUyKou28vbbZHc8e3TmDXzacwkATGi5AeSnzphPJeZqXPNmFfxeSw1GNQBdDjSbG9XsHuU4xxcAwVuCDLW9",
  "key3": "3qouY3zzYGVdwpV5D8hC1YpdJ2qn1VXm8gEz2WuKugAUkhw5QufAhomyU9s2sMzgWbCTdsYYWbVfEMZRS7JjBBXQ",
  "key4": "5eh33xNp3cmou8Y8zeU1WQS1KY1DcGfv1PeXqjd6T3W6vk4rqrGKQuA3C118cG9GhnoQQDMFUz1W5RyzcJpD1MiE",
  "key5": "5ZzV4qqBm9c2xBoW5wDjhgX41ddB3McUNHZnURvA5x22BdR34emu9dDgR8k8QBD4oHMXh59gkNR84wDdAdnRdHaW",
  "key6": "2w7X2zatmDgoUneNE7MwEg6StykwZTq275pjukn527PiNWnG7YYfubR4VrdF2WL6TGFfM2mXptDpL846Gy1LmbFd",
  "key7": "3YRbpXBwz1EDz2Veg2xejj2CbcTwN8FzenJbEt8HrUSycMd8Dq9VXNqpwfE7NAmKQhvV5nfs2YE5WchU2qB3oYuy",
  "key8": "3jZDoMzjvB1V77rtk3CaxJ4AaEnQG38y6LqLEMri1dRJDuWZEYiy3DfdtFwLc4dj8Si71AgZbNnuP1qGTMivRFT2",
  "key9": "46xB9BwvSdhvxxFPGjt31MaYzhmAJHZpk8ZmRc86hnnGFcVBA6MEMiFSyUUbQfjrG8Q3FrU8No4gx7usAfLSQ5di",
  "key10": "4rUPQZwb2x34kpjHNV2JeFXwfakc3vX1THHe4gda8F8XoWZwNzGPYJ48ib2cB1phFzuRRXssi8z6fPbZU7cjdZT4",
  "key11": "Lv4S87n64FDcqkNVvLA2ef2QpXxXWJ9WUib7eQ83SqDCkMaT2sPJqQYksEsEKDGYoRAh6pJb3QxzZjwgpw65nwQ",
  "key12": "32rQJETJjzDeXoGyX1HHhdcp8oHPKaFNYP6Su7Txg9B3mniJo5dBMDCeyhMkSL5inFHbA9kLoPFegMith45TGqK",
  "key13": "wK94jG7Q51qewYT2N7zr5w6z4VBYdBwjGMwS6evtrC7YgQnz1ESzqbpsbySUDfBqWuHXsuPmuCYDUU1jUACaGzV",
  "key14": "5agYtptrKHCzW1g1uTR4rPJQ8oFvXdPdvgupiSucQGE2ro6QG2JK48b3HoZVtYbW9wwFzExmZrbE5tQ9DNsB6azw",
  "key15": "232XPZDAS6w6yFRNiE3Ziu3Spg95AR8jxJ4AvanQkFa48kGbdb4zyvG4HFprBJY1sJ98Vt97qpFCf96mNV8x1v75",
  "key16": "2zqkSnK8XrMfUVC8KdhY3qK34x5Cq65mZP4VQjZge2USfWPeeL798XeDtNwcMRrWMrkPXa2fCNGg1fDtJjdFvpSC",
  "key17": "TvvJ9Wmg5y4EteFL3g2GjWa2uumeV4tyHHNtDVK6QLCitgm7aEVRum6rYMDoXxSF1hxgMTj9bSswBfg7w7vH2Q3",
  "key18": "4NSTczkohr6ubSYUfa3Lds54jd3Vg5Kzo7sN8ffuirn3SP2KrgQu6tnpvQqXorYTFXCeFvnJZzMNLfv9fVVC4g6G",
  "key19": "2mTzW4F8ngto8mgTzLeUDoYG3NL1g13V4GQ7Hg9MSbirGFRPjs1oFGhZb5wTk1P4CSzwJtgSvZauN9tF1eNXkqbH",
  "key20": "3jT9TQRor9D87Nqgm9J65CWefeAEmJTwhpeiCic6Nf3EL4YxFXNx1EvR26akxXwRQskhzDtneBxC7eoBjsChbDAv",
  "key21": "4yEu1xVHFMEYrZ2tQZHR2v9Y94ypmJgxr15FcbYZS7DUaq4bbbtmG1Mxm24v4sjtSFSd8v9fh7J3Soy4NmizKhD9",
  "key22": "5FGCpABvDTKdrwyEzczHsJySvDb6AfmiGA7mfPzQAUG9L8YajAfBGWtsdHyNoe8bYLhEEh1tjFn4snbANrzGmr6W",
  "key23": "5x8M9JztAkPgeZxu3EqFVRYSdpHLr8VS2EBFq2qbkH1km7e46K3uqGQbkcTDrT6yC3KqHGBCCGoMNCwBHzfjNCij",
  "key24": "3LB8at42qsTAWyiq62LjnhDYSgEEfT7NDcZosWUCgYjEXWtBhEfGxHfYzG1fwFBo4uqy1uKSQ2vtedajqBtqNoJq",
  "key25": "2GUpn62LAijNAuxnRYyb1YNfhEFexWBTnjZKoYjcz34bwtEHstYo2Hdn2mLaeBmdwBYTTWGBXqopd8J2hRmufVLV",
  "key26": "oJNq45PhLaiewTazyannBCCtMke77QAwAsUHqj74JMB55Xdv5kLtY6uSPdPWLLmgtYU5Q4pnodzmY55bjX5fcBi",
  "key27": "wgUCMesygAyLve892wcJZVKG2SPytiCgd1QA8Wbj29mnshzPWMTazv1XSJFG1CKpevKjwMv8nZbBbNsKJX4Tpou",
  "key28": "2MeymGmp1wtVDwKpscnycZ4mVaPzU4xYz6iZYgTSoCMCXNzUiESCuCP1SWwaAgbJZB95AkoZPn3iD4uzhH74NQRi",
  "key29": "2ULDC7uJu435UZgcwV77Qsik8hG6pbMhfjXzt8HRCPbk5h7EkcgXDURhuBTdEAXKa3Qu3Wx7RANxntEbssjcgeux",
  "key30": "5NWYjgVuLEZSkZsbLWmYhhKUmbYPf1QWjrEmZArWA9nbP2WiAJ35YYqsfJtrRkr6NH3GGypVG84qfzY31YQ2Hm6R"
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
