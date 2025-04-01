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
    "2sWZCxzpy56U6H2aBZYgEGDxj1mLVGU62Je4a39TwbVJqb8Dah8Jy4JA7LDM7kRqcmZu9tACiVWJzPpjQKSX5Vu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44uNkYKZ328dP2qM3ynemrw5JEDZp9uFeUssFGy2PDeSPcSCvhW5APT16vu2v27UyQXJvMtavb6DiDDkALQMQptw",
  "key1": "393CeRTRYvMgTqqRSKazKfH4hoXz5m9Zq9o2uoo3nWsnFVU1XgaFfDNCagwFiey9HeEDRyRPCAjfFgvLwaYUmHpc",
  "key2": "4nTmsrsT23ZjXxqVVBdXQXserPABJeG5PmFHKHfjCi1DgDeAGUBq6H8w6afMcGrzXK2fvKNebvf96R7b5eA97KgP",
  "key3": "3rP2aZZGbT4kzuebkw1FghNqPNvk1NQXcjaAnBXwcjeXJu486PZLPsNo6SK5rDuqviQFbLZKBXJfAJnu2PrQZNin",
  "key4": "5s2LkHKrjAPtQbrMr6qWVkpNwLfZayqo82Qia6znhdnpL76oeifhPwTSWfB2a3kcpkyd73LQErKA1DdjwVAREr78",
  "key5": "9qkAD8mckiLvKdvoGJBFa5tXfuHy1fJ7kHiUbFx1woa4DmpTjoWWrEjoFosAy4FJbdQbyVjspc5f2KCoykeAn9v",
  "key6": "ofeoxtHYzrx6UhSu3PNQcRyj6w2mjpyrvDPLDKy3hcsBnCeZRReezyboX4zLMLqCaLKn8RTEzgA9C9uuc9Q6ALT",
  "key7": "2MiwAD6sm8D8QzApLC5PCbaEiaKeUWyMhXtGqkm9ReMRSiQ7pg1cmxLS27eu2K2tWWjzqHcGpnUxKu5BXp8TwYQm",
  "key8": "V7JH2R8QtaG2dwmz7GnzfcT9NiPcAybJJgXuv1Q9Lo8vjnNJPftsWFXDB7ep6rnQUEcABfLHkTJMT9rRLmgfBTZ",
  "key9": "2qAK3nvLD8fSzHDCFJwLvKanHD58FerEk81bEcaPej25p4VH9NqGq5qGvk2L6VNvj8NWRT8yMSEKq7QefL2QzVtg",
  "key10": "2A3wUMpzy3xno6cpDMBZPaYq1v1edob5vkXDRtfjbLSqsJx8zR13vLdXRdTtZXfLsq4TBVBVjo9snHwpVJZo3WrQ",
  "key11": "2N4G4Znch7ruWknQCAWimknLq3RUxKZYYcutkX6b6cXqFssWQyNHVQ3jqkfMDPh3wihzcnKyHsKj4MZdj7oz3NCF",
  "key12": "3usKsqEHW2KFYN6mAjhzvCGbKGeFRuUVPRSWSqnEx2VxVjrJMrpDYfDQcji338AMv6eBwUheAHdPLVjyZqbWmBxa",
  "key13": "3VbGRPxGycTofyCGhe5b1iPXZ1VZMLBhvX8YTr6rPUe9soigYEtNgrvGN6xWLvx9MqUx6hwEsphsjSNGRH9P7sGQ",
  "key14": "ESoAnZDL7WVVQrCgbVarb5rEfN9pXggyYEgeAfZMnwhUHfPwHGYq6qCAThAfAwmePURxf35TbCJHDstsznkd5Tw",
  "key15": "63jx4TnmLRGBeMSkygZxMZthxwfVfwktRvaaoDjyPsDaZ8xysKJphY41kRvvmyfAKZouTEJ4W3XA3caXrLeXRAT1",
  "key16": "5f9xbc4ZWB6BCEtGBW1NoX4tBBPZNyPyzJHDTJXTrtNiWZmz7dwXxQUnv7zuUhJPCjUqkULBz4d1JkBoYH1A2Wug",
  "key17": "AHrKEay2HoGMLHZVZdbeHw8TLU3qikjMKLHPLKdkRbyG1TkAXPXePQcRsn1nLRXzmz5zmAxxykWWY8mDdaMc9Mp",
  "key18": "4EnshttRCz1GmFgmNiwQLAmXbB11JvXfajFBRUvLaq9XaFjsJMWL8fVztxHbMVad2JezrdBypP8K3CdZTpTe65dC",
  "key19": "5RGVDKfwMPnpM9bUngFdcu37pouPZFe3fJeYsekyvMa9zFBmewuB6ccLkzLTWdGLzyxywXbfTrn3HWzJqiP6GM5y",
  "key20": "3H1SpwVHiNGFw7kiqnBGR8w8anjff1kX6LqKE2FuhYk5LwYvk9M7PH5YKwN5Jc2wvxSk3UJbHUv8SNXHCHCNpgjo",
  "key21": "5UHxKouDUe4R598UiVMpsmikFG8ZxJ14QcHaq7kcJf3K2kg5fWwEGCLPpKmmGCxRi5G9zpw8JCtzw6AFcwXNFYbA",
  "key22": "45gaZmGgm6DrJqsvhjFJGTwbYknAbFTJqp1DPTvowHEVzmwPWRXhNS7vQdhKVoCq8Xy4VY6Jo3UscmXLiN2rKX3",
  "key23": "4rCCcJa68aQA3MhhWFNLBf6wU4A3GGBAkMyqhiw92tGGmU7KSRbtRjnJVeWeVAvhtEoeE462jKAEpZb4SvT8Hiyz",
  "key24": "3RiS2JM2xZscFRNV9QcByaKffyA8yd8J8KhWYRgTfpMMe4P9utVu2jyKs3H8m58tawAxKSR8VCcefB8hN4hZeq2W",
  "key25": "5o4uyznEqL2NcvNhc6VbrnGdDprJ6cTT96V39qFksE4p2nYNdVuG2HuMjLu75b7SkZUsYCBKV9pUifnyNEKmjfHY",
  "key26": "2uEjRdmjJLXKNGZEhJxeT8okWXyD5hFaEHT9LnT6KjZac83CADUtLsqWXk3QVeYEuqtEaYQVPnRZ2nWAGHVuYXCD",
  "key27": "4FyStKi4FFVLfdHePzg46taasakX2GA39BoQd5LpqA8sFk2HSeoZXnttKLwiHq13NFkDihVS4ZQqNe8QomqBV1ne",
  "key28": "42xJPi2Erq3g5KZW6zJiucua5Ra6XTcqwLmLfQBXoZp3Kz3quvEm7rdc3zdnBLgPTm1obprBj2cJQh17A8pC5wFc",
  "key29": "6ZNxHigdTdEpxPiG8bqnBsiZsf8H2SwFfyecduiNUji7YAYkwF8rgYccD7JXtA64pFCo6agC6KdE2uHEHDf19o7",
  "key30": "5nYtRxqYNBMBwpzH8sNuMPRYLwSBoHiNHbL7svxgA4shvv9kogTv4j7VmhcbodDdrQvFnCoAYTHKEsjFrEJ9ETJk",
  "key31": "Tm3Q2aCcNaBjhMf7u9A62ZE1ozekEFMm8Y4irHUGZyB3g9X2V3d5Q1SmF7Dy1a3FuNir9L6TQsSTKYTHox62WKQ"
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
