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
    "28cr1Fs1F36Tfra4S9YfhMS5xFcDdnReGe3yNsZwzCBqm192YB7fqkbsGUDy19VFGzQBr7aszoA3NSNPGLW6nVKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFMm8bxfSyEAvkQoBjJ32awp37ZDcgZthFrpbNcSW3YP1dtH79R8daJkMY2jXVP1KrmZKhPtTmBRuzty7KN3oEK",
  "key1": "y7BG569XxYG8gfg2EGt7g1kiNe6pR2H8YWG8PcWAdVqwefYUYW8CXGCXiuxCU67drMTBgeLnQdKEU9NkDDhY8T1",
  "key2": "5f9m2vhPG3Ywr2HMxwfN3xELXb6TY5NfRisefLu1RX1ssQNAgPBCi1npgWNvJZ2P5qG3gbYuLvusc3wZhjzpQF8k",
  "key3": "3PhkHEajisPxSQrych6LytqdX58KukmaxLoNthgwioYU4NdnyUvJZ8FdkfBBij2JSFWbdAoFv6csTJmTfoRMkkQr",
  "key4": "3ARn6dfnzUTVB4rWkrNjak9NWojUXCUCwSazKGuVBEQ4X2wKrwHpEo1dabkVgjNvTwC45KRNmYAFJgFwRvbrA8Gr",
  "key5": "58neyDDtCj9rbSWmzucimDMMCuaqMXoytr3GXNRYAMqBK92rUEj4Qasogi7Q3pfphu7U1dU67yMYRHCwjqrsSpP5",
  "key6": "5q3LdM9PFD4nx7Q4gHHP6FySdrqVz6FJvNq2hgxVCiUHcK3Yb5smem4Ep5yWErEf5PnebHFvzzLg6Fa4W419cyCG",
  "key7": "5AKi34UrDm9i2exKsVy1cTrWFoGbhzTsojrvtinuVxJAvZaruRhXWH2KJG85BCMMjDZCgicjCqdFRxd1hcARr2P",
  "key8": "64Gc7b3k8C5jXU8fk8vjjteSTkmcF924khmR4eFoaU4n7hDccsxBxfs2HhTdykguVdhtKnytJiSw6LweSZ9ks1ES",
  "key9": "z5mjYuFPSUZNkYsc2W3TCE6y9ekD1AistNCAwnEh3HD2xewcq1EzScw67nhCp8TkePAZycM8anfWbwN6UDGB5mW",
  "key10": "r8Fv8CzcPtmBNmRwzEXXGP8G64j7DD3p4wvNDF1icJpGeDnGoGRkN7cVBNzV37L6FAuWYNAzJehPkkXmbRmiDoK",
  "key11": "3rbsu3ZWX9hUkf5xS1g9TnyKiGanSgb1C9CDKAZwc1tCyhd1vYmLVrC9jDHr6yXZqfnDa6x3r8NEiNZaodkXJ2fu",
  "key12": "4h6zfKHvGj1afS8CHhcS8F49KpRrt4UTsCQUHcNopaCPWufi74ch3QmymDHHDDBxkbsqKaj4ncSkBVNwmwCWyVZp",
  "key13": "2wH3EoJ2zg7DHR5FBhu9Z3J4W8JtsrNdGRscB2s2SKunnjmzioZL2s8SBeniJxeGxBE2NWceRd3gDeep8pXnLadQ",
  "key14": "5EYpHCa5kA4mZ6GDPPj27PyDfsbkD9MiwXsj9SvTy3PtStUmzJfa6Eoh3TZj25UZaJyBp6dErQuyz3Y8Wk4hegdH",
  "key15": "58DorubA1WQKVmDuzVfHoYXrtiU41KwsSrooQ8BLSCaZVVkmXt87xV4PBT6YxRkxdGLyZGtSAkLtuqNqfDfNsqie",
  "key16": "4v6xJnxde7rsgszwK567D2Qk6tYxet9vSvJ81Djd6P5wfQwrxxSrxdLcihVHj6kUthTKx7C5dmYgx8dQkLetDL5b",
  "key17": "5mQEAcwzKAcScHVaz8qzDV4aKURnTn8B7rbgh7fJ5MiZYKdzgzoYJrzWKVpbxMeNJXdsuUjvejgHMrAC4q4pgRDF",
  "key18": "3jhiUH51F58HbmhGRK4eMpcTw7UQBj38NyjS81uBjRBRNH5PeiLbztFESRw46tdmUZdzXQQ5cnjE8kRD3Q7GQZ3Q",
  "key19": "4DGPg2VGyiBeAcNbdxBFgmGFs1y279mMspWLGu4nAbvtQ2Q4eeeheyS9Zbz7YCSqvGfTSQzxKG2EQ96Zm7MKsARd",
  "key20": "2EZhCkgZApfVT5Yj3VkSxBR5MCbKGZpKc49AFjE5RRPvcXLqqrgmWgW93WvynDwPZmqMa1JNpAQgkNX82YTZcJqn",
  "key21": "2e2KW5AKQd3fJHgtCEoUW5bLX9vFf5TcaEY47J648Rmc71K1TgdCi9wVeCcvTt4G4suJGutiTsMoUvKsT2eMhHUG",
  "key22": "XDUF8vQ6FotyDWDyKsKZrzNwqyGLDKfKj9BjzdtmrjqdmhDjkbqgVjK3ATtDxN45q5vbCsK4phBVKXEAUGuY5bH",
  "key23": "NsmPjt76DAgoHQF8yuyNmRc7zrNoBxuWbuwd41eCWZzyQTQtYTJXReme5K1tVgZthVtragkHmr8M3EJeCG3E7TW",
  "key24": "5XqQadttEfLUiU6Vquzza3JPQk72bwYDaNu1ctJcMCJ3yvNHvC39AGaRLHLYDrLbmsnpmewMjgzfEW8CvUBJWuLa",
  "key25": "2MU4eVhSDqF3Xon6dUJbXUPjn6B5zjL36jPYFdAbQgVmoHbbZHuJd3pXFdsC59SXKL7nAVSLna7Th6EPhENZVwDj",
  "key26": "k7o8z6ZtSUkbx2DX4vS5AveZxKKhJs6oXqsxVxtxTxmdXLFDwb8wifExeUQTAXQVvTPpk2d5cUbne34yudtT5JT",
  "key27": "3JsrbndhE55CKQKLiRAgRP8oyYrqTMahumoPQx7YZmdksxc7QaNmhA96w4m8Wqwd5GGEBqBL2sSYro3695kDWM7G",
  "key28": "8R34H3Q2kf5ktW7EEYGq7ULBmuHC6K9Js6z58aRpsP9EC9AoLciAcwost1tPs2e1v7gs7LHK8F6pMTqaG8AijU1",
  "key29": "54RuRfhmUvMHcQbQys47RKu4LLA8RW46mahw2v4oX3BsWrB3ALx1TuaRkw4ytCvXipAgUU4wr3d8NjbSXzr1UhSS",
  "key30": "3WRDvgQDqaQBNfH6eiYYRLxJ2wbn9Q3h3ME3S9gf7woHAKdzsr1Qt8pZVHR78JErLgnm93rQ15Guby3kGWoMZ9tU",
  "key31": "tVSSzuTeEvQf27ELGHpfk1fWcbyj7jhFnu6563vMVPijLPuFByaPacrTUGsq7UpZrFKE5H9RojYNMYSXPo2RJxC",
  "key32": "3zg9NBbaorz8o6mkZRDdvnm2oLBMLBS5aRzWfQJnjXtUXdEFc9dStk8PUz6QwoRgntz3oGGYXGFirFxozXULFAxp",
  "key33": "4gtYDrCgGKJqNiXtiG228VPWq7VY1xnueYL6aHUDXFaPNAGf492PqteptuTxzaJmqgeAfqDRARSJ9m8ncvXDaLi9",
  "key34": "4gY89VaGQx8CNvT4fZfwE3LQSm6YTsHZGDQXXve9o2mtBQoWAEhYovpNZU3ae2esF1NWXGaeMo6RY1ZfnWnP4iva",
  "key35": "xVvvd4WVQYCH3j35TqXmisRHUFzKLKjZqzkQL8L3iSrKyBzNZZ51JyxbtCyu2DJBDfi3iWGfi1DTER7zEaddqP4",
  "key36": "4dzQvVzgcU6zNLSgxRQr1ztaBAH1hHakDnqHWc6WMHo3Y2U5QeCNnAciYKM3RygHfQJDVPB9FYP4iFTknoL8B8hr",
  "key37": "tXftNPmcEJTjn3Bnp9SUYR21eujFeq7P2rCeBRkQijdBDafPviDfZaD6kAAiG8hKuqjWF3soX364Gu36JMTnXfK",
  "key38": "372zxbuJC1zpDt9u85wYfzuqSBBKTAJNr9dAG1rDU6ZVobSFXGP4frdZxfXj7xFmWuHYJSoiNZLWdAkvQeT5d4Qn",
  "key39": "5scYhkzEhz3L9tgGK31sGWS1j6PRJeSSEf6s71Uw6SvNeL4WusoWKQd9u5tbmQL41YKuHUPjkinNMrECJq4VX56v",
  "key40": "5HwB4e7ZQc4Ep1xiic3H2NTkvYhaNbbUCnesmsgtWfBKH8wZQDYTcRCuajhtMW1s1mYoQNUcCdMh5aVSNR6avXoz",
  "key41": "XrV3phviASoQ2mtrqnfXyRNP8zaxkHEcqVYGu1WPE15AtCFEstbdm4LoiarkbWm8PGdq3JVG4utd57pGx2oBd8r"
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
