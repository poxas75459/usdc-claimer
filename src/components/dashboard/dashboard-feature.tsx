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
    "vmX6JvND5Qd8ajojr9JpF3q7LF7VNwrzCRBPoJUEb7DfvoLPmK2a4uFe8dExredxdWrCYU2gpGPuHKEe5T2qpDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cKRJQsFu1Paeo7wNkxHjG4GRnPDSijUhHmd2hHTNYck96YnxMSWDkBgGTJgr3YszoKEJbxVyELWeTPSjM7Fhwd5",
  "key1": "5xAPhMSwVvfjM82rdTuRygRYB8xVy8jbPJDebcT3ZJ4xNpjBAQyp8ohvBu8w9vTPYGKvT4QAdWCS7c4BwX4HJ2dQ",
  "key2": "3NHNQ1mTrKN2rd2twE7yTskfrnQJZERqQDWAmJw2v1nafSUHPdEyLV8tVi8JBTyTnzUsCngZDYo9LoRbHAsQd6Gk",
  "key3": "3qAY1tfbS8CU4Ufw6oeyK8mdvMo1iji6ANxV7Fur6ZhediT4wE1a8scRtquabbJUQUHUkTWyJwGq161dz4844j6x",
  "key4": "5MoQT3sQoMXGhPSsFZv3xKZqHYt7KB2vB8VeXRWfG9woVVoQNgAKPLPgWPMrd7bBDfuGUykrdTxp6CPKHyBBazjP",
  "key5": "5u8FdmKoWRQmdLWvzYaUXpo3fVkno3MELFWRTLg8eJiWNghhQJQKnam4uc5vpfpSjdntGCc8wXJyHK67iMaYKahp",
  "key6": "Cci5Wq5HfTNtNoG1geT3LGvdr3afsh3xbpgXM6AQbHxTZ6vxZNyz1wCrr7G6dA44mhT79wsFW1GAb31UrzHybNF",
  "key7": "4cQTAkU89ENwVUxGNLGEKf4kNHH3f8VcAvwSA46xjPptC5b7AAec77hXbsVJ5GKhDSnGZFHMFGfj2rdjkCuf1iXZ",
  "key8": "3RoTRoFtQi1jdybPJGpYc7YGPNBb1sPEes2xCwhrvuagRMcQNR2sVpeMND3FGWj1wrMNcbZg1QuW3uurELgyjepC",
  "key9": "b1pfPei9qwxstr3GeFH9bwn4jNntNAsT6DhxECnAbz4tzLVArvsL27V3zKJTsukioSFXHEWAmNYnZxNf1ggeCHe",
  "key10": "RteT1CrizvY2ifKKcdxWnMGFC1UawtYvxgbSeVgo9dnXZYWLWGcEhZP8PxBkUXbPDDBzba9rbtjoy553CuDeeAN",
  "key11": "4ZXyz4jgCbbrh7vYb5fsbSifbc9PhBG8gJopMTXAg5Mscq6nptRJAKD7KwPp7fKrUcbvicixMUhbemVK8piDANNC",
  "key12": "3GfEoBbaSDRsBPGd7QHMAxq4qsJRxYAbAksPz4idKHzQoWfrpryhParACZcSwSwwUaGz74GaxFoPnBjJhr1Tdqoo",
  "key13": "2R5i7aSoMcNQXRWxFvGevmMwqwhw5EmaTtmsY5nZ8SrvNnPKkWHCXc1T4grci7Sv9KBT2ANGJe2R5ZbDksBJuUVe",
  "key14": "2nYW8NK8EGDVWdspayHZafuZd3Ek9aZJwY7xSEirDeKSiBXM2hbBA8SAfubPvAAfGstJPPWXG7kaUD6gFSMunhNm",
  "key15": "vy4BSqiBWLk746FpJcLqymHnyqAD6fbJZmk13BibARufWxbAKA6sKyrzzWCxwBBSSGWTdNY8YxGjkq3umxs5P5L",
  "key16": "2JRCM86AX78PbLfjE4TaqPS8uetJWxNWp77EwKogWGXfQoepYZM28LhaegM9M8Bw1QqXctXYW2bncf2gE9UhPqsB",
  "key17": "4vsyVvQEZz6vA8N9PhKoKfdhuvASYTJiubfqdx2E8yNvW4k4LD8PhgXj3yyvdZyNADdZKAactmXcidSBBue1TCnE",
  "key18": "2S5b4VRzPPmzYeKbF6j6jMNwnvteh4WS4SYuGbMUDgq7jS1iviKsvQpdMb4Qmbs6affw3WWyXKm3EybrmaRL9qPC",
  "key19": "2RRnSxqaLUKzp4rvFPfiJbEXEjXyPCNx641EJVcbtrpfi34MEdYvtSKfbrS3Mm5RRe7VMEPqdQgrBDuoTod8qukd",
  "key20": "GgRGhHXcHwR7zKwbjZajMqwWf7DB6j9GbuPnAU5cR8QKwp93Ui9ZRGJ7MMMgae43h65FCr26Qezhk6g2FYb1aqg",
  "key21": "BsKLEirZzJ1D3DXHSfrBRYKmuhN4CQa8sFhZgMCcEdXgjdi49i547XMv9hKLNY8xcrBZn58Won91AbDta5rABgu",
  "key22": "vvJropwpRJauBTqDWBfjT3vHTxxRKUXSQxkK6BvVp3PS4eqCsjR4nC5QUAzSMkKBjPQdUqprLtdrVooFaa5KHGM",
  "key23": "zPEx8QLGTfkYzMyC1VBDmwnioFLVCMwwPMiEWpfRFcaeFSbmLvbmVJaUcJfZcJq7iGx8aaL6mQcwdfJXX3V6ZHS",
  "key24": "28HkvVYwRBPf8SeYpNGNfkFENgDiyjCUv7juTHK5czrtutvdF7UNzsaae5siHPNzDtDShMMifyLog56KRGupzRCr",
  "key25": "53Bw72XELGrzeN9VH2mwVMPKWCfGMjixH9GTjuTw6AbRnUtWrWxquHxonpeLATy3Vp69zW6uA2wAyWnvJcwZNzTj",
  "key26": "5BY3JdfPaFo7rsMk5pnv2f6KsrTWxCQL44EvTYjebmaanyNGJ5RsbqR5Fo3KXS6TdDLViKU3XqB4C5woHTuJJScX",
  "key27": "58yCAFD251ohAPzSMsmqETfvPgw2tq23iE5mDqohhrdLmsnKMPya1ioewizWbQv1cLpYpqtESjrFvXuarbcKSSWW",
  "key28": "3qJPo9hNZAXJxJEovKUiYU5RytGMqBk9xkf8U2LQ8itffEepJKi5dXREHaLwgms1Kn8JHSpz2JvNBBFhuiq8wCMJ",
  "key29": "48grercDHAAevwPhcBStsD8GZmeqewp8yS1YRR6qXzKvLMP2YB4vxUPnkAFqQhMsUH5zvQB5oAEoBtM5AEY84qYu",
  "key30": "5r61r8myjown7FQE69T5ENm48ZqSyGhYqyhVLtfaU8vrdjSXG1hYrj8dHYeVws8KugXjsY7C6PGb8rETYPFEz7tc",
  "key31": "2VLvkwvSKwcSvbk6q8DoPjfVfGWd1AJGNAY51xtae1DtS3RrgyNRQM6cTiEwMtPQ97yLSXCB9uhqswT3PYSJ7syh",
  "key32": "5a3z7U7e5e9pDwzDNK5YagKQvoU8g3YZ7G8aYaZcXnkH19KzdEEggibyUiaWLuwL8r79NNScipTARc6jgQU7rShw",
  "key33": "4kZuaRAxBRm64GVCyNgaK5spzcHjGef3GUJxNx1NET1LYFhHRfdFUaZCapD9UGmFyQHzT21f75bfbcZDmUDzxQcr",
  "key34": "5Uxz9Zu9nTgRnxXBcJyxMNAkZNST7wWLN2DFtD3CSz7Cioo8wZ8o1iZYu1GTY5qUnyF7MjAJDGW41ctdKqXmKtDc"
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
