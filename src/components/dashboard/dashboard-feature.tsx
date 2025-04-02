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
    "mtUk6PrBaZh8RjgFa7qRjrvWR4rTVQXAR7azmi4uubs9Y1sAJyQkFvkTEhyGTWrKLQQbSMs2Vw5e7fPH1uBchvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNai6ZFMU2TPKuzLynnUWLjP6si1vpnDFaKjEfhFXKAKEWwQ8XoqXJEAAfuWDrhj4dMxnWH1gNvgw7VDdJj2xKG",
  "key1": "b7mc5acS4HgZh292kvJQwnoQ3gVucvpBEyFVvi6kdnkwcpNSPEHUZ3bnRYws5rvjYLEGCGmAP3apwSioVfTNoFG",
  "key2": "5YnnS7EkRh1V6UoATHM5ZmGNwfarqdkxagu4Ex8r8KXc8E37ncR2fcvVAGn7yg9onvr2HdsvbycwYTnxBGqABjPV",
  "key3": "4aF42SSagwvogi2SZA6Q44oTuyuhPrUe2irapcG6aR2bpdHLyEvf9JBA9P7iFdjJ4PcVgqNsebJT9h4bRrRTMKzC",
  "key4": "36GiPDf9QvpHMjv5F1fqRQ3GkE182UxGim9eV5wba9tMk5c5VnrRwaBTh5ajMavMZiMuHsp9YoUh6zBSx14bW2Z4",
  "key5": "VmNBTbTkk3PYHyNZCcEduS9oFwZSLiDiRXNxHBaffD6ueL4GVnn5yLEBKREqSGXHyy8pM66VrmogoaUwgK5BEq5",
  "key6": "u3uibd4yg4LDxxJDcAdMy9gszzNzKxpY4QnvgkAXAf2zAxxDX7F3v7SUWAPBXjk7EmoUGFWscq9xQyFuQ7GrQHp",
  "key7": "3zYqS5zrx2NxsTtVUkJdX5k9ht6Mx4ETA7GYRKv2mYeiJ6GrM2w9HmKuSKksaJhhpcoQXBRchcsx2NeK76Eaz9JK",
  "key8": "537WR84uGFVk5TMmjhaMRbrBi6f4fG3BVGZ5JeyK5pAjgRJu1CcwZmJk1oj2cxWxjMPSdH7hFDwV1e8duwRAR4oh",
  "key9": "45fqS9MA5XSedKrCawpZztgHWGMYsoyDfT2UqMo8dLqZ95SMYkaghcwVeZPH4iqUgQTkztSwpYP1CCBypz4ecF8J",
  "key10": "5GrXGhYFiy9TpfC69P42825aixwyvpX4LqgkEBNFCqq5LNTy14AGJCWq33iF3aidyUz2QXUqdom6CbmpHtjLhV6x",
  "key11": "15Y65x9rP7fU6fZck7XCSKm2ispW2k7hKR3mTq9HWn8vndKJQHu3z2GNuXA7BEfNfToEep876sjSXo5zY2wF2TG",
  "key12": "3hR6ZX1CjCMTcwmzFBqfS2LjczwxZ2FgQDK9PvgwwXU6bWZL3k2ZJQDbgPRezGnaNmiXcaZisK3k8pA9CK1FbuAb",
  "key13": "4zigNUaZPas41JwwgqPyHALADCaxjNVfbUA5DsJm9rQjZH5dcWqza26VxPYqZiKnTKPRfnfWtxsSRMVrYwqLpb4q",
  "key14": "2XRRAKYKkKuYTudsKVKfNtUrcVBjvpFyJBPCJkmoQ36HVguYrJtBbiVvEDLVPNcEoKhHuztmNvvGZQRTcXE9SJkg",
  "key15": "kg5LWiUdJa1QWo12fiDbSpzVqhdVbJRtX2DQDrjFedaq6a9j3ViDL7oQPiUzPAiRcfrRBhqoGiuUBBge2wZ8Lb8",
  "key16": "5zjV3E1Fqfz2qnp4W4k3hcJxk4VjL6MJAWc1mDFvSYPpWxonEW8xeio4TtGUFdbjVzYGWzD6tdQYFQs2QiALBue",
  "key17": "5fZN3tw9Ecubb2KQYMWYZj7bZYo4YnoLGcqZYMu5PccbrYUK1xwBkyxxBq4zkeza4t3esC4WLvJbGwsfUxd5FC4R",
  "key18": "2kWgn6g7ZVLj6MVUJAYKLBdvSoxDoqKoRD5WLZ3MW7cHSEFpU4BCSahmowcrqDYAtXSnqL1EdZVVBdwGyQR9Nj7E",
  "key19": "EgNpU8J7tov773rRbF2kqe8QhPSgQBt1BRH3NpJy4vWvKcVhn7hPHYNYE2h5ECDJ55CcckU45dmDuMgTUunzS6k",
  "key20": "3uLHapZXCSkAwPoBfaJ4FdDnpyGxVKH2QJYPS6kzqgnpFAKCu2csRfPFM5CU7FJetxYgf7LMWyrhrg9AwjVSHKDd",
  "key21": "2CMXa7vAZiqSwjBjmGD6Taqm1nSw3KJhKP4zRg4DKc3e1jShJsX4uCwM7Y4nF6ouXEU1VQhg6ZVX7M2iiT1U4NdV",
  "key22": "3o3miskwh3kEqYYsZTqbtRgwN22R9PsR7CeckA1xZn7BEoYnGuL1ZLM9fsCcX4moMcFy1my1VWxV3Sz7ApTgi2Hi",
  "key23": "3St77xNh9cTVovkxPsZKB6RjpBxhufVFhkPAR5dbBVuXCDSWfwpmerzEuzgg99KmpFzaCQAYnAVeZYzTbpcgLohu",
  "key24": "48BkTKHetNAxrLfpGJJT3mHMEdYT4M8khygAifMkxCicrkgh8gQUS1J42neWbjqVAbX3qRKbUBsBUYDWnGhuL2YZ",
  "key25": "2JtXgJgyPaSsnGsFwXwnK1oAhLidqjLy8VoaAKuXCWVWr516CtexiXAy87Y94zFpJttHXpgfP9KyTTxxaCeQyxfw",
  "key26": "2HvDBzTfEn2kvAWeq3QeG7WRUr8arTL6HnJrUcZ8U32QFzg6rgfZa1BXMBiXRSeyJDh717sb4n44XzNAhdV5FWPu",
  "key27": "5Nu8wQscfM475LBLVBfMDdBQJcGwZLmZAkoNw9n8Hw9xkFnoqJhxDTWRf3ve6AfRbmP1YpFA4mxHiCBpcwhNyq6b",
  "key28": "2vZ2NkPaa8jPVhGUC2SKKELZVK4NpMXQG4Q2BX3p3R8Fn7xs7GMGH1iW5XbhPyzCdA6qv9MWRYWByzCHdcUKtQiJ",
  "key29": "5xvhEmHsJDmzRk6cQbAKFCvYMVi3ZqX7kzrXZAxpeS1tW4nBLeMk842KyF4qG6MZ44dcRZkssbGhvUoMo5G57XFk"
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
