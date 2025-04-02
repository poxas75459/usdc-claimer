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
    "2tRCgnaiRNFRdEtqMiNpniTJ49tbcLDXpmdr4ApuJFuUeGqDrfXLXAHCyECJvSYouvnaRPz89Q9Hsr2jkuCnRKq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQnDSCC3SPyBvcmVifJ8Gy95HfQPYXrGkHhNL5aRgYebJqZxohkWwwThxyKTyGkmN9m6Do9JuLv422zSH58ZwiY",
  "key1": "4X6KoiM7y7Wsg5krPdbVFPWv8Vkb7YtYW9jLizP2FGxLyRhTxtNbErkC3BPAeNez6P3JF3tQkva9ehFspYiNYE6X",
  "key2": "26snchqRGnuJxbLtbEnVixi4MUdgpR5XekRVwop5gRzptPUrbkiP7kJyZ5zzmqNdFfNMFsNmzHKa3NgPyQaX51SD",
  "key3": "HunA1izjDgoVKpDTjF1CcmkXkvFJDnxyUqWu4kAw78FtD7FW6N5HobHpoYz8KQWGuVNytZYEfpoSB34rcqFkU9p",
  "key4": "511CChKsECComsrRKz39HnYq8ZrtLNQs5rDxF74KyWMPN4KLAjrRutqiPkSzxSpMCvVNu4Vh7oHGLi4h8FXBgEJc",
  "key5": "33Tu1qnASC2M3ZNGiB3DPMhvYa7Aq4DQmwyDiRueYbtvh4UWKKUgA7sd4wtynVSvhvfxGdLyT9xVwa3wFRgbPFbD",
  "key6": "4oHL9BNtejrUPhefdUp9aP5WkYQ26FS3VhwrdkSmt7zcqP3imndUAprXwprCEwBEA2iKoqi9UTrzdRLCtQeQLUKC",
  "key7": "4NiiJuWhdbPrA51zWLKSwofvRVxxREmGnHi25r2MYc9LUobXFxnNPUMkPWZYpyAw7SVG6CGxrRdbUEoQPYxYtCxS",
  "key8": "2h4zuYd816yVLftQV17aCc4Nd9jVHgfqcB6nbsKfzagSJAfx1fhDzB4T7cPbtTrSdLT5oChtckAktg9PfrYJa6i2",
  "key9": "zJ8Kpu4T35f671A8hRNfKh1XqScvk6PgoQumrCWsMuPaiSdA5Bg988K89mbbazQ6cHZCXRQgdZ6KuNCGH5Esgp5",
  "key10": "49JooJjJG1jfBq8PK1SqGEfCGcJabTZ5kDKVd7HyMbx2enLyx64tFxs7uPJwxyFBMHd89MhmsktEgmjpeDJmD4eR",
  "key11": "4XR6ck9JKdQ3xi9HJwrVGXPX2WtqkhyiLPNQfVPi1W9c6Zfqb6ckrxubfgM3GkWWjGMimLYiso7NiNU1FZk6GT88",
  "key12": "5QzatFb9F6eNSx8yVMKsxwafJ7gdLmVMPsZnVQ48yn145bysqMApKdCjgiMFevLrhgXtsL3rm4v7Rh7xC4NBuBRx",
  "key13": "5xaZ8fEoHMthY2EeH8TAme8vLpC3R1b5FF1msFB6fPQZeDzZ29ZAQ6hf8n4RMqafCFVZTLrs2gVASofN3YUJcdVE",
  "key14": "28CnHDjzbcxuRHxcQnGnMQF1hegR9AhF1i9PXajM3CKCy1GjsfYqaHruoLsev3Q6HgtPRNnZRE6iDnPjzdQdrmiX",
  "key15": "h2SqC3VtnMvBbTxVUTcE1mFsQiNhmVTVviaBteZ46NXgfPDiYHHH61idwEp4RjVpobGGU5kJddNzSBvK64QhuVP",
  "key16": "2tRemfdrhwzWgA3mT4EetgXZ6MHjaNSTWTrgY7gRvRPhTKJgzmuegbqVCMwpdUKxf9VYWVxRt7TAwjcUkJrphGy9",
  "key17": "3aJHSvykEM5RrhUMVBaaZ7fS1wm1Cym9vLqAmZs8JCrAKDBnXFJeBijKj6VpCPn73GQHv4LYVS35u3gNgBFJVSei",
  "key18": "3vFg8a72vUzvG85A6BU61XXtuAKG8CvzgubUhtuaLT3veHbdRGiMRqMyw9arDYnM24N7rLt2EAKkL4fP6j7Z2ktd",
  "key19": "DCQQ7YzBsLqRKGg8nb2jfNBxfr6zfkUPhWtqDMMKUaQd7b3D4UMdfmFrqq2zRLpgqS69uGQpPBHPqZQAXbLKZrT",
  "key20": "omFdJJ5DDxMnyFKDTDH4CDXPGpYT5cG8HWcVHhFiD1NvaQCSysEQGTnVB9KUCCmqjQLSX5CThAAVHkKNLUXVs5P",
  "key21": "4AjiHPxYvm7Jdjw1KPRLr8ayA7oyPq7jE5e4WD1gofWCsRX9mwyM7ngNZxPui8KbNXu1SyCGkCuNmysGQ6WAFUr6",
  "key22": "2CiTi5aThavUAjkvifMyjsv9ffkNi6GHC4AU69Vs73HCmsf9xtjsUcbaYdgMV7RPmAHBndRqCojR45d4kV6nD2RL",
  "key23": "2Lm5XoQC1HQxbQLCr2eWopvyyk4hk1EbxHbXJkvcY8QcUsheSjQ7hhVKG3dQWuBgZGBsZuAf3Cy3f2oyzbS35Syh",
  "key24": "2MT3tHwrYNLLfFZ7s8m315oYgcFWUCNt6VuYU9z8MUboQh33DPLja8VznLG8zwiurqnPeZ8nP8upZwgHpkbUZiqg",
  "key25": "31b986ndAr84RNGBZVHios4rzCxVx23bYdWZwRJtRakCLQHNvcP2MnCnHEPkEkajgcTWz7uxAiYM1ujAwh3WU7CL",
  "key26": "2wVv4XSRuZpDJHeZ62w16xqbaQJs3wyALfB6fpFenG5Y9Z56UGfAjsPTqEcRw6KZnCwdQWTmfZ2KVutjLGJFV3Vh",
  "key27": "HHF4fhTFrAkwzDWJcVatUN4T1T2RukUEfDaWRXcE7Br2TFbYi71qWLsQx3Ddtue4oQpTixvbKiTL2RcWHSpftFv",
  "key28": "4j7qp4pFMhfV1YfCk9pkoPnkFf98GiDhSNuCijf9N7syfqQ1gKXVV5nUkzog9qQYU1hbx2pczLKNM14STyqUyzj2",
  "key29": "5KX81TK9zX8S1W8AesuinyNUma7To8zU8h625523Am1nxWmpj5nx3aoFxV2NXgHc298FGfjc77Ac7tyGzPaG8rHW",
  "key30": "3zbocXJYe6TTsQj9dExCU7J4rtSrcaFWw7faFp8G5rKUzXXE5UJ3SVvUN14jtco3haSHrFW6f2dJjpKr7PCjsrCV",
  "key31": "3nS57FGHWL9SuajP34zvjAxxDiGouo3VCgxw3LRgHfrutTXbY1uoU1kBqU5SVjkpnsDo4T1CtDq9sW148NtBWUZ1",
  "key32": "3PFyHkxTtYboo3RioWDKC9kaz3zL9o474zKZjqAfZQznvyxF3pEZJDYkNg28wN2E2k1UujCY2noYKHm9rWeBA5ue",
  "key33": "5VXKnpCCzuaxePgd3MZYbc2rLSA8wzvKAjHkCqTkV19iYchQLHBHeq7kyF4FSDXDKpZiq6gqADAHE7oZGcfCtLma",
  "key34": "2TcFmjJoGArvR5mBCETAy6jgfRpqWxm2E6RD46uV3MgFYnxWNAVHGqR8Rv8UzW4SZeRyxCD7AYTN4mHu9J1zPfyT",
  "key35": "5GJtRgTbCoG3SMRj5zyB8HkFyATs2s2VWccvwmuoJeV4BRnSJ1XoQNHLczhZD26BQnCWSbD171YkS11KnEDgLGp",
  "key36": "ENMm7dQodKKheWFtFf4WCP2QrwBDke9hd9S6SpkBse3cXtAMsUHqvHHLgoUVHnwjNX5MY7nTu51Vp7pwrZKtQVG"
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
