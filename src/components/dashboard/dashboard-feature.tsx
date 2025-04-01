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
    "48etjRg7BhjsCnuyJqW5QDxUuKwvfccRpz4PCtKWSamBmEYaRB1CRXXLq1CNxnbzVvu56GpnnzrPKGSgry7oTRtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmfUpJaryL3aty2bUXeDLzg1pUAexhF8dEV3Ly8nq2dszR6D1PCkvCHij16PB5JWpzWkwEnGtzvnDahet65MfwU",
  "key1": "R3xdWiXKXGgrYeKXrhY7mP6bKT44WzpSPM7PzxLkLZFAMH9pfrWrezTuBzNB2JXFrWoHSuBZdG9F6FvwNJRisfg",
  "key2": "2RgXEguJnVvegcJ5iHoussbifuj2WGdQfDFw1wVNJFhdEY4NkYScAV55ndSTVQPgJoBKPsEzp5qphQY6gXbETUve",
  "key3": "4whU8kEA83iBcRgKvdNDsYPEwzRyNiFsou9xbYpkjccM7bUKk7M6nQbMgT4cUgWVWAVEdcSW3U7kYN4rdr8gjWc7",
  "key4": "54yQUWuTQgzsuB8VZcC9BheLgFiqLDXQAbLgbfrmMtMRvdjrzPoorTJan137SB97KzorBbhY3vdqd2atctofR37J",
  "key5": "3AFm4K4GMiEbYNyLhwMcCcbiTYefNedHMtvjsLnWCcT4en78eUcACKTSm4dP7CvDGYreCapZiZUYZvmDnKMQBxGB",
  "key6": "eT3FHMn1qxTmZFv9eD7VmhjuwPtcZdr1gBgp9nLrhQeYe9Uym6CTAyrUCf3fAtj62mcBgzgf1XMnRZj8FHXAEP5",
  "key7": "43TPpvjanSuYJtU1WUmnedVMqt445CjdRZcJmuX5voLYEAQBb3NSfvNtr4iFDDVg6pDqwEVK2fsbbip6iUJRm618",
  "key8": "5NnJBjWZs5LksyDqqEqGxceVhAjGTKDZdJfgU3fzzhhgtzw7wvzHrrnVB5VPq1Z2o3CtqUycpSLwVVTbhipuPwHn",
  "key9": "6zcZT9wXoTtkR9bYpduDzKuBSo1CeBoCdBgPbsLojzJLaXGpC8ZCKwawBAY6Qa9CMiPamNe7fXKjVziW95aQUsT",
  "key10": "42nTqHByoD96aNsyciUVK7UyrwbuNQHCwF3NvDVXS5bu6X3m4qf3RBz7F9gm5J58MocjsQSrbzt6mXskeCDTLv22",
  "key11": "4muUujkgn1tzFTHwgjubTBQKQED5RJHZvuYXfyxcmp3L5VQYweezUCDsKzQToidLwsqPRhjooCiMGLxki1JxBwF5",
  "key12": "3ZqGWjGWWHehrqtjtcxu45VPFmsFTaL58nQ8DJMmU3HVre6keDkHrrTzSP1ED2gXVVckPRJPkBkhJZVk1wuR76nQ",
  "key13": "66Tza3YK4r3D3KSaQmc2yinCdaHf1DhazcYi9RTBpkkkrrQoTXNsTN4VzhsggW3SqcN2epzu4kfwXiS2bPQpEKFm",
  "key14": "2YWhnbsVpHwgTSG5v2n8MeUWXsTMyUcejFi3bXPq62ww9MvioceBVB9nEzQ69meDtJuPn7STubfyuh3swmSTuxb5",
  "key15": "xMdnny6TWoc5zNFPHRWdsm23QbhL12u4bxBdCvVa7wxdVy9o5VYQhhX9CgMKJvFkv9qweNnH3hwev1a6j6vYfZv",
  "key16": "4Tmq5ft7e3JpDYoRTLrjsV9ZMYp5JuKciUCxAhkV6LFzoLAU338JgTcGnWRHWxHxEKfwsgpKd6ENwTvk7HefxUPo",
  "key17": "3qdqMosCyrhqFKApz1fLiuDBHnr6FLkBAfw2KAbgQ8X5LQfTDRZe1YdfhbvbzDCfi5WsUVCkBX6xtaKUgHn1L1GS",
  "key18": "3ZPiDWdq8kg6GzBvGVfDSgtvVPpZMc4AJjBSMiYK3psyNW21HSUs5NroqkViYofaafLnmZ6oeBxNf6HiGNzR6HF9",
  "key19": "3owW1Ap2YCJMoHUHNxnanEsMvGnFZ3dnepxqnXBwAfse8Pny23EdnrQt6LQeaRGze1L2RKA8SJXNpc7BG1qt5FGt",
  "key20": "3KLMaE2dvNj6JReZeg16xbgN2Lfa34aFw774gNFeAQMXwvYj9cLeqbpSEiyLCVUP215tnJuzeMeW8H2bfVgPK6ur",
  "key21": "262ztZk2DEuFfdz1xAWncJTYcmaS1NMBYptT6bX3PCXXX8psUWb7Ayso7eHqddTNSnwcLadwMmChCVSRhewMFnGa",
  "key22": "gwnhRqvU2YUU8AwijunqVGPctAxWR17N2A7UnaL9hmp5C4DGT2mT1iZChJzBc27YyegJqaA8UrmWFnNy7aj5xH7",
  "key23": "3ii3DQ2vL4SWiCBeZK1o6JYiKSVzvtYnCsm7694FQdyjB6y2967a2rcunmdo6WPXVWpbiKUj5FUMUtewXKAeZTCj",
  "key24": "5S9G73mMYsdHCNootZBuBnFq2fyoPnap5URQwPqmotHmnVpLZRAKFiJMdQ2G5CMTyLjS6DNmxLhndYeMz1eRwRBY",
  "key25": "7m582EvWWYUnV8CGFzgwWsxCmxhZbZdFYe2oD9b1TgKnpZuUf1iLVWtfpFTqWxbXuyHdVau9ytN3y2DkdZus8My",
  "key26": "5YZTayfhNUfEeUcACGRM16z2Shx6QSGrYLj7ZPU6djqboVbjsrzPzoXWZQGwojnzU9urdmkHuUWGMW2inqLCz2VG",
  "key27": "4XzESa3UezUrgZk3o3A8K3A2Ug4iaMXtyNUQQS2XCJoN7CAHNYxj3kmd6eVNZjxDii1gvTj4dEvmJqNPk2tvYNFo",
  "key28": "2t8K7hn3u57bnqLYnkuy4491hobre7GQCMQCFCcxqgUKPJZm41GqgTMWGQme2qFPK59wNxdaQDJMtmasao4Xhqn",
  "key29": "27fSoChHMHY8G4rT7LX5kfNaudL8d3nUsUrk7cJZAqvoqkYi3qtbcBsAUnWQynnBxefFHon1EWhuxiueSUJKw5qJ",
  "key30": "QEDou9anai5ZZ7FTrtgGJbKAaQJJB5ngEJpevMV4WBm3fD6wd9i98SfWwvKGbrdNWbeBrQ1ZT45SxVeU8QQW9mm",
  "key31": "3z11cmpe5FqZvrzeM1iF9FYRZAqmGUmnGMUgy2juD39NwnN2rXKqtRKYRQHf4bdosUyKSLMKgS95S86uDiSKYFvk",
  "key32": "3gS8dy2UmQTu9nJA8d9Qc8dZZ8NAreMnDSjiD7B9wr2uMmDAEpQh6Cq21EJzxUzrtsZ9gUByaoo4fSVLuJ5C1iqt"
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
