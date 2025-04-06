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
    "Wzq2b995dyfkVrCL2nnMT3ZrnwGVWkSHX7croNujJiszyGnEeHYvx8Yc1yqKagBjR6DZVRzT8t9xDyyTYMsVPgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkxpHmnNjfXjTtz7X7R81yCgnsvMdrvWd2yfswDhvCgtUd74187JDtEMZbEY4fzvz44t8fqKejwvGtCUfgWRyn3",
  "key1": "2iPjgzS6458YjettshbKSmNxXc2PLgr4Wx3UVPZGz4pxsUZKhPvT4EiGf66AGjvk6PJPmwpY9oY5kfCUBPiq8t4s",
  "key2": "5WpjvbTA6C8jucDqn4oudvziobJcBdSrU2zvYK1PTt7fgFwwfLAnNwXJxjTHAh2LrcgVmYS5BLYSUkdPfFwxrH8n",
  "key3": "2UnW3ijzW8R6PuK3n53PNfQAahzLkjktbicNEBgV7gZogrYY7gLfqpHxK7MnSdXffL6xfjn4zAWBdZPrNgTq3bMx",
  "key4": "24bT5sWTe2U2YTJWMg7TQyMwoPm11UgL13djvwYkKWHzv16A1NCRGPkNygzykWyeKKaLHFE9rttzLci8AzcgD2P9",
  "key5": "Xs2ERftWUxxNwJCmxpgAikC6URwG6CpkGbjDGs1TyccyaWWnBuSpbJL5RVp8Yy8PRJwYwXKtHwe7nd4Xvdn3AMD",
  "key6": "AGChHfBCXvyof33zvXQVx9oBW4mNue3J9LdsrS3CQpkxA5beEcWNwB3FuLTobV4GmK96mEC7Wbr7mt17XYPMjNm",
  "key7": "ijRKgxnxvhDGooH3Vx3GZW699oA9ygrgPYJKKjdqzY23DVQeapE3rbnUrGFBepPyrJdT4TncAXBGXKVcmGEF3CL",
  "key8": "4ALRnqZV5c2a3P7crG7k4dv7mjy4vaCxhd2eA9HxthsPbG4B6FbpZp4bjErr89CoktT32NanbbhhaoeSJLZswMza",
  "key9": "5Bz6aMzY4VUFcdssoh3b7F84oAVfh5jYwtqwFaSAGzB76sGe39F5iDg1ys52v65ZDdvjM4DEKeHCmvT9wFjmfRPs",
  "key10": "fGoXN6PqJ2mi9fnwozFVJrY7Vz2FSZDSkxwbDtT4JJmEyP2VMNLL1izEMgXsuSfCLJJG1C9RXdNYMnoRY5nrs6y",
  "key11": "5zPFSQcgeecHhC95T6KbhGHnTUvH8T45c6BoTqAc2rrEipKSTUsdT24XJcYePsmZcdDLd6SaUGcqonWEev6NuMd7",
  "key12": "4yKysVho2u77KgJTSfLYWXtGyTiGpqVPXG88b9rXqGdJrPPsbgApUPBXcgaDKXSd3rWmVFJy77XGkEnbQQz16bWX",
  "key13": "64EXFob39pjHP3eg5U33d1f5gyZTfan6FZN6p3b3w8XCpAP559oUXNu63P8xsTofuCB34xbGBgm6jaP2Y67eEtnJ",
  "key14": "55cCpF4M516ferxmAd7ZqrVMxntmf8u5bJYAKWxTeE1XzKXdqz1wFpwAAPzdTs5ZUvKRRU5DTFSyrydWuYDTSGm7",
  "key15": "4XaUPihF1EEugt3yceikou7Ted7abhi19TN5QEjtz8jKfAECui59YHYwPPDFeW2HjHUeA3aurZDqGuD282n6EitP",
  "key16": "4g4dfZ4N9KJ5bYeufman7sj77YsAWwMQgCP96gcjkZdE8jPKu2j14qHwFBWqf3ZwaKipVctQXJAjKHayJSrw73tP",
  "key17": "2VTML8KitRoqq6GPv6gD38bcB9F1vT9x7Mcs2jx3CZhQoddTfPfbjo36x2EtfNYJdHeJ76ufNpSV1N8afDF8Gzcp",
  "key18": "PnvNN24wzHybLaKPTpaEuskzSPPD9wwdWsC86n8KJ266BFfv9XGY6mtpMs9K47QCEd1M8F8msYdHDtYtHr9xbLy",
  "key19": "4kSyTpbugbFvGGL3x5HYT2YGNufHYit2FEzSYpfLs4uVwvUYAXg1ZtdhyPWt7SURWW9ehvHntMvwvWGsBkfDpZCE",
  "key20": "5NMPbR4gaw5zhdhJXV6Gt3wN4JCAGQRL5TkzVSZLg2nrfb9MmGVtZc5ZCyba2zj3jygnqKfFSRXs8yrpJ3VDZjvs",
  "key21": "365TgajQqu9qi5tSraLwd1Q53TeLe4qW4eh5ViatXyePG7yqrrG2bfMhcBq6sipCcN5AMJpuUpXNtzmmQ16UmSpZ",
  "key22": "sG8J1iLXnjTa9yMCxcJVWbP4B8DGHc5jKLkHtuAzRsfQiMtUTp94yd6kdqAqv7E3wEEUZv2RwfaR63Sxt4kRcTN",
  "key23": "36YJKFzRjy4ie1yJYahma6vvc4eCk8E7Wyb8Zjvn4qg2VeNGDXF6Eff68mYMJRtYKonKXHJypXNHrFaLE6RdnLJS",
  "key24": "45v97UAjUUP9XDZ2Qq9mofmsCo2FSTvSPoAXGVTuLKrAYnXzWVheg8zbRkvS5yydb1LBnCPgyHWCNmNHs4rqGgH2",
  "key25": "3UhXMFSW9yqcUiWYdc7D2AzCG4Hmh2f6gw5E168M4hJkRNwJjTBARNjLUoZu5egHQEaPY6gKEBNKp1oqSbS9hFgb",
  "key26": "2eYQzjt5kLPrBhdhPmmZyhhNbmZzJsm79J5qGjM1xyPjRVFqRBY9aNXcR5NDSu4amKgFVXg6VY44SXnEpjnaSAA2",
  "key27": "YKpdca7W4jVfMyspadxG9efi4kxjY765p85w18wagwXMHcH498aNmxDUF99oemtfirFwR1j57MWiaTwWgdmeJvy",
  "key28": "3Ztj3XBukpLAuGg3QMY38mejpyYLqqGWf6b1mAqLdSc2fYCgVFmKESNVz7Ygfjk7KDL4HpsZ5N9pb14SV4GqiBS",
  "key29": "21sfgMdQyhhvXUabgTYudso3ubdkRf81Sebdj95SbvbD5b7euJpkS2PsQt97CHqU1QE4jP8cojqG4diFD6hs1oHV",
  "key30": "4R97sHE6ewrnNXiDtxWmwtBtdyMQGyd9nfocjs9KWZJNDY1ggEKNHbN24hQeSKNGhsx1VrZpauLYERJ9pE5CukE3",
  "key31": "5511FWSY3QTzdhDq994Ky26w8VtMmEg6NKm7LELRrRkTMVe8iEadyWKVUkxBqnV7NK2zfWojk6nYzvAAeVtEG5D5",
  "key32": "39oFv2sq2gC2F6WPrwiC6R4trRtxin96dDiMbitFqWeJ3EQirnbxfzjdQWFrT7i8d6xkMWkKTNmaNXyNs7W8VKsK",
  "key33": "49kyMg4zv3vHNMuHDWAyHJPEEZCAkpHWMMag1fsVFMEwFJozrHNbu9MGL7p3yJK7Ln8DbxgW9qRiW1RW2wUf1YJL",
  "key34": "2KEfxt2GrvMoHpEcNjyRD6SzqNpDnTGSh4KA8tcAiGjbWxNzfMkgZooxCH5N9xw6SGk52f9feyAyQvABQW5bCoy",
  "key35": "35hquwXxhNz3zkFPqzfhbDsrk13ArwKr1AFaUwCzMAruN5gf8QUnKq2GWdjd9jxuYN69fRSJZ13RsDRhJHWvptDy",
  "key36": "2Q91nJG4na7pqkM7jwRckiXk4uzEeXQ7gCnuvzZYqeKpm1meSxBNHt1GXs9XViLRAMBCuRG9KUmi3E6Jd3ayQtiA",
  "key37": "28FR2mRzrvU5jzBpgf8jL6TQAy49RHzQf69wjNEp1b1SGuR616YZ1T2qksSXumbWvQkV2nuTKGPhKBbiZPwYM9eW",
  "key38": "tXgzd2p7tqq3Fdo2Z4eR97K6JMKiCTLRvR9HJSmT4W1v8Btm3XHfWWEN8Y9e3itq3qi46Bko3tYVHUvAzvzADw9",
  "key39": "5FuTkydYHnVMYxtJoFhPNJhzErGMvS2pAebsKJXvJRTVhkoHdK6QrDS6MHDqyCdMmP1496gFPg6EZmNTwFRXzQC8"
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
