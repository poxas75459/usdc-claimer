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
    "3TZwAY9WKACFpoUyid5wbGsQbbub1mqaSZ4jnEWCeUFDvo4SVJ3wwFSxpum3N2wKKWwKZR9arePwCuHrDDHzGwWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SoTFEx79eS2PWrhMSsMazurkg3w2cRVXyeX3oiWr7NSGYoyocMWge5hF2UJb8C4SdmCyLpgh2yfZzJsn6ev7tL9",
  "key1": "4BZNs2nPrGYfZNrGWunMs8kihaXhxAAT7aj4vrHZXpY8ALtURzFYAWfKmrkNCFD8i3dZzp2iC3d8akpgfoKFegtQ",
  "key2": "5ovSYGMGeA69gXgeqvEgqqQxQ4JQZTVR3vhnUs4Ga1SdhmcxrM68M9YcrhBU4xgXGF6Jm8hDGgATAxXgmzoNJ9BB",
  "key3": "3STNe5VE543zpkYDzHhztrSZVaP18v8W62D2pzmktBWMCJ5m3bah5q4dov4nrg8tTNYq3qUN6t4aHppVqVuwNuNT",
  "key4": "3iuhZW4coU3QywcaspdvuBM28ALxGLgy8PDcbjXV83EWWmTpmxNaCsL5G7qmmg7ehTkPEq93eiZrdA3BatFP2kBU",
  "key5": "Y8CDuzBA8nhz6AAzyZSWa7ViPchTNeDJUJn7W8cfTZPUga4aKyeUjYjyPimDkyT6ZuoEYTLhd9DpwrJwUaWTwLL",
  "key6": "3SRi9BgryBSsY9joxR4zHpmxqBVLmTBmjuTQyZsHeBeknxKf9cyyY7nuSgfpuiKExjXv27bJHZnZyCaxL82zkSsJ",
  "key7": "aZiqRXUdYmpwAoEgSgVa5GXZrJHWSKB6gymrwt5EhRvxnvczEFGvk14fvpFXbd2vddU7hMfihBSngxMsVXLnopg",
  "key8": "23WLvuZ5gyobcnuNabjoMw9sPJ23sq88nyejgbfMJq1sK2qs5Sh2sA3FvwBGZZctmMtujmLBWPoZ5iaLoDK8HMKF",
  "key9": "2X9XTCvmAXUhSoWjsGGhyHFUvKB2ugEMPtFMK2P3VKo7AdWbhA8ANY4FmkGYoCUUgzaVoLzPmiWVobypi4GmsHc3",
  "key10": "4fE5DLFn5dB5YUre7Rf3q2ksr6JDbmQ7FjSGJXHBbSQ9rvQtzneGxY93LYm5rmmnbDgygyXJRSnXFiCVjL3VjvKZ",
  "key11": "3pyCkM12bi1sniztb62iWK6uXqoNxhwpvah8c24FSS9DEdeSypxy4QXPNcs8fD7VFfCMwfvLUGAi8Sy3se3wwjsJ",
  "key12": "DKvfWBojC4uRdJ2HKW5cRmFqFnatrF1ncUqfx1zgwVgnr6oGC814NPzMwWkgGrz4xP5oVS2MrkwBtYAN5BZgfPN",
  "key13": "2eK7BMf5Ynr71mxEZHmC1tNE7LnK7tQRZxGaXTUGK6jgXhuX4ffBz2D4tAysbCL7sywdK9DZcU8fFFcyEkCsM4CC",
  "key14": "2XGnFnKbkZqM2Xb8bznEYb8CGewrwCRB5xKXuNNBfZsnMd9cw6f9scm75t9W955mVVbqXYCybaJJpkt9zaGQTk3Q",
  "key15": "5Pn85BdVApmgkXv5wP1bxFN4roj9UpLp8WVddDMJZci8Vi11WahBEdUpWn5nidyEtUd4s29XDiiHcEb27ttfz3Te",
  "key16": "4AMLcTCgRR9mjvhanmwsz1jZ3E5iEZjFbWKTKrYMCLSMAGtp8AK7DG2zyWNKwKTxMg95PkKobuM1jk6iyoZhyL2k",
  "key17": "4Sr9YR5AMKq3JoAPetiYNG36y49UFWKfSewyyTe1weme46Ga33ByYHfvgNqoagwayjECcELv9ZTSAMBEw884U2Bx",
  "key18": "4gS3rAwdkFBSnN8AXzxySb8aJ6CjC2EswsBPqcFtFATqFXScc7C8pQ2jcu33i4ds74sid8nYAQxuged3PmNZGHRs",
  "key19": "3HioTWjRtxXzEKocsbcEMmrYRCyYXgVGhRAzkkgs9KTfj5HZGX9VW9P6zNMkoJj6kHxbc6M1QSQbtx9Tnf1HXApn",
  "key20": "3MRPt9yL9GkFocL8YEsNCexqrfbzUM7KWwmgy4Md9AfKFsiAUZ5Pm88xuK4GpQs6ZukJLLEkRUJjYitx6YpECBnp",
  "key21": "56To4CvcAG1TAJMU7yUPRhMsLY2Lbd7CMvvm8m2d7ri9J8JJThXQcgGHfKqrRPGfik5kjxudXA1dcqLM9bKpcGC8",
  "key22": "LmYzSoYyMAaxeMm3VJECDFYKYK1imJs2zobNcaXtZnKkJsBTgkcsMAtB1zHEbx2p4KwP5MZvDor4zZWHJxPi1VT",
  "key23": "4dBHLSEHuBmueNxiuptdEcmpMuqKNTg8hn8NzA6X8AqLWSq9CgKXYkAkYdJ89PWui798KMJtG1kLeWYuuzFGMoo2",
  "key24": "3X2cVWSiWMmKoaYiS6crwZcvfuYKEYF94uiD67uBD98cePoo2V9VN42wqqG1ytGq9nJAXfWa4kUZbYWKWdBYVLds",
  "key25": "4eVSm5KuzJPYY295eTkeDbLUDvLrKxcWzPKesFrbqrxo5Xqn6wneo5iUinWzNZ5ApMkXa4kNrZRfbzpjPVQgiYNA",
  "key26": "1H5ZgC7DhQqXKv5FLGSSNNhcSprjiHkVxxmLL1DBxuiquarfFxgAj5a65DFzfzSoznRWWHC8uWT5hgpFfFjb3ZW",
  "key27": "5MV3CvmgHr67S9ke6xRx65seFfrXXv5VdYFB4xBgoL2V8L1HEhprWqLw9EccWVRQBVfPUeKECMzFaqKvVuf4Tnr6",
  "key28": "3fbUAtRWrtPvJsYtbBF2sW5EjcY1GMLuTxncLHBVtwvthqE3b5sh6T5bcw7VP4Lc7oJeqo57SWM5yd8nK5H5uvgE",
  "key29": "3hXyRYJ4kDKsLUi8qSJ9LpxiJVS8mzL1uQMue9rgrun5LDuGnZxRNCnbk43CMzJPpc4d8X4SXRVbgzGcHVraxgbY",
  "key30": "J5oZXK9nPFKaBRvuUzwbEDf6sKJ3yTB9C2Vaao6k8uSnNYrmNAFPp2wPBmFHcjLMJyGXWf3e8AfoWJkUcQ3r375",
  "key31": "iHEjCYh32Prq5Z1bGKocqmKcziFoVeGxFayFWy6oGL5KNmamFfCSSRSdHJG9T5nGtTV7pa8axVm8FUhGQsaHenY",
  "key32": "4rP3SomW8JzCgSkyNDgvFGHh25VR6VWQdg7eNFvGNywwGeP9PyirGdrkC9tfTTBzdxZnkBBCXK8HS5aUiARkrZ1k",
  "key33": "57m4FD1xN6diuNc4SSkrqy17WwkjvKwQZRBaQLBrkFcYSxxdeobF8WSYyxY2qpBhSPN2LoVHhb2sWhYgJ9sjRT6R",
  "key34": "3UZW4RKYTYudV2G9VHYgPG6yu17bNieRwup6zA3ouhyg13WUsTtkK8FkK2oH2t3gK1kRyfvK8V84xAF87Hxk1Vhd",
  "key35": "3rvHQek5u5NvWfAyAp9kMkKJX2Kst53qWrY4PSfxG87th8jj5PVzkTYDT2ywAW4RRoVcZYDTcjYiMkMg6fDgiVqu"
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
