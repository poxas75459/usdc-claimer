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
    "5ry1YtRXRQKswCATmp28fBRc42L94DBNpPAdsyq1Akc3tW3FGkyx6vRXooB1vEYtjDEXqV37h2VLUNvLNLjw65n9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwwuabG8FukZ8siBp5TCXTXwzXoH8cmWSoTm56M5eegFQtyjLkFERsYBKAnA7RZWcw2X4172FUHaVutZPTpDPTP",
  "key1": "kTpkjSWnPLhsHeZqRjAjj6ZYwjQguNc6K4bceW9RDmoY4JxYP6dwhCUYN1n2yoJTrxg9wuH69sQovi8VcYUGGQk",
  "key2": "4JEymhq3Ums4S71SKSf9DoQSxr6igqnCPUvXsFdTNjGhQsGWmrXxeqWhrRfZN35Vr9GoyGbaUj76VzTUUJsf1bTT",
  "key3": "4Ybou8NtJ9rqfj9XzYagxHYg3HLrUQqQdYpdjKGKoFFD9F6kHsKfXrdauPaTgDmGNh267c9Aa5asyJYTU52Ds8Tc",
  "key4": "LgrEWJVmRM6oyUWackEMUuCtmvtgZ9fS2yUvAE8GRcJ8HkHX4imcJBeJfMQfkUaG3XoxmYtNBder6ZrzftS63Wv",
  "key5": "3oPjgTRUdNfep8o3HdKc9Gs9wntHGf7xhU6CJiUkAyv3XHA5ZS3wLeTZ6JZBQqbLyexkKJQSojTKZ5TFrm2kTqJ",
  "key6": "uLwiCA2MAcCbi5DJ1NczDpJ8k6RRGqL1CXtvYSmgCSxtuQR5osW37g4EaxGFRVVfVrLoMP5un8WB2YPWJESVBbF",
  "key7": "25Z6LtUrUeuuGLYU8G4Tced1GZQt9aRx4Ri1hRE78gQjQ1DD4jTKH1ENxAPb7qKB57KTfDtm1cNEsfuLDghqtpu2",
  "key8": "Mtt74NHfK3f7RCsKo1JvkWqhYoKzEnZNRdKNPmiiMdstT2m5ZTz81Pcsobw4Dfv9J12CELGZSgbHZjK71RWTYMs",
  "key9": "3qpiWi5ynzBioyGACh4ax6SCMabHkTExbyFebgErP2f795yrHfnF92HSPJVyEYkHsWpe4McjAu7WJ1dCotRmXkrp",
  "key10": "3HXr6HvbVfbc1RSFkqzdCQBcLdeyQMhata5kfFtNAZQoSZSwEm9nLhuNYLhWSSt1pFgS5Cbxhi36oo6sKALxbA8d",
  "key11": "67W677Rnw6oeF1zPwWLuc542Mm9Y4HEDa3P9LnZ4Gv3qmu67zwGZhtz9T7ryvdn1KZfRLDsqUwBweMryvf6xQUcv",
  "key12": "59Cgt8hMaTvpihRYkihMvUq4w4ey52e5Yn8DRyge97mNR4mQ3qQYRTcYDgXY2TDJV2dAcqHo9Ncv2mEzSnVTFYut",
  "key13": "2CoFUSsmFvjU1j1L6Tv3ucNtp6yNoRhcLerJKPzWhim9KaYp69ji3zHG44Mudo3DtCk6Xns1EBWXkRnzLScYijdi",
  "key14": "3Q3t6H9osMvEYGzqmwkgfDbC4CYnuMKYnSj1yvW1HAooHh7Rf3L4UA1w5AoBW6rbaS2HHriECxsZKaxGhzpPtsHw",
  "key15": "2QguRJnubWVsabia7An1ukckUwScRmdpksYNa1B2eNHpN5dHRNDhMGp2rU6S8uGBGSTF89pL5fCFKkt9FnukPEET",
  "key16": "fR6M6uJNih1SSjp1MM8wUp38raMKGaP1oXAyMWGYrupHw7irce25g9pi9Yx9Q7M631k3r8Vy28M8UJPhfJopCML",
  "key17": "3ma6pZfinNQKM8YjozdsscRfPRuCygdKMVHa2RsPAfjkfTknixW2Abj5zVVhKk9uCe5uftEvrjiSVVzBDdPop9vp",
  "key18": "5Dh8ChcCZsiCTYauMmzBicHVhoYyPuPSU7qYkkfbAzCVJNxFqh31TAYpgYQ6tJ4c68jkq3dTZ9oPWHBexjMXhT3t",
  "key19": "5HMzStkqWPaK5aiFEFwP5uCGiw9JjMBwRU4JYygSgrHu17PCpnBvqbRyDMkfwQUUbKCPpTijqLsCGf9GtpMPNPTU",
  "key20": "3dmTKoPJZVTyMcNJeHJq9QGzsW1UTATiH4X7x3srnzy2iHMZabZ79kv9KhEyncx2smo4QYe6WWA5YXA2M7cKU3oA",
  "key21": "iEHVLinZ9H1FET4jxzLKUDhG4Nkn8EE6iXK5N2tTmPQ14bMCKUYr1GCZtojt4rkRYBRnfQKYrLL3jGYdArsTWsh",
  "key22": "32hCk3XLTvZbnfbTZ7ci2nWoGN6QZAufY7Mo4eK5zPk4TDdMqQHfrHbudA4Wag1ZED6q4McT8i3ouJGswoctZZg2",
  "key23": "555czHYTzDp2TBKCyHvDYAUYNU5fkkc3LcaWiiX1N2KrG8TNNqiZ1x7TApDDyMtqPvN9mYhVUWWcPaB4nudGqrUg",
  "key24": "5146eMnmnnNknqCc6iuMwCWdqkA59DrJ3ySyrrtafMqcTHidmHwYK9b28PQupoAbQjrwAHvQpz3XJs7EvjY38k3o",
  "key25": "4XsL2dhyEnqo4GTub43U7NumdjCwirx1ScN29yXDMLP665eXeZFz2eM1eeriA6uxGg2n1M3zSzUK5iihV72y64EJ",
  "key26": "3efpn1wGLcAd46qRzKEsqxE1JAAD7ZqGMsRnXyvvow7DjhNbJJqbf3fayCK34qecaXfUkgrQ5jAod7B5UeMsjsoC",
  "key27": "2SC68meFLbYSocTBPseaKZFJgNMqpogyPpUi8yEzbynZj99CEzt3a4MzA87tsA3Fdo2nh41sjNNWBBtA8hBQyZsg",
  "key28": "3RsEFv3FW7Cm4jH5xWV1dawGkBVHd8XH549TAYG1W1t7PKzMXwWUeiwK3Zy7o9eAwryYnGNEDeKQJhiQrsv3nqE8",
  "key29": "4kG2VQ5W6wU3cQyYzMzyq4N1rabywRK22w1rwQnDiS2Pfdx2UtAHzMdn5VtL1fdE7fReepuaPK8EMHGd7AhZPNvV",
  "key30": "5NV3dqu88mGCowLYhoWTAY5sBfyUSm8V22AF56znzQpunS8nY1GHQKtTXdKyV4fQXqNgrnkDBjXkVgzrzYtvWEBv",
  "key31": "3PF9cKBfj8aBnc3uhEpqfzqB6aXyDejRHZsd9yuLLkyfWPBzcrfjhRU3v8Wy9iepgFfLpD34cijK86V8yjEUMrHm",
  "key32": "3c7p9eyKteyQ4bLC5GPt5id7KyZ1g1RJJXeKb5Wi2A7HrqjzALomYUPEGDEyRTtNZ7kBy1EW3grMLFjX7cnDwoDC",
  "key33": "3euo3YHcrvXfahGvpRPfpJF36YtfFpTQudKWo7mDMA5AmShkFezMR5bCd1qwMSrSBJyEvg88U2SRKdG7jqMQ72So",
  "key34": "5AoJ6ZSzeZn5b6KyNfZbAskVvoBjHPyFiLsXeCytNNwsdYCX2NmAfbdFBY18ycck8dcbQ7uoq2m2zDFrFcdtoR2q",
  "key35": "5JHL6LaemQB4fLu9L1LZJo8eBQRW6ndrvmL6Pcv8nRUAf3xWwGQh9ao8TFCm6RzuRMJvEKSAuM6Q2pC8rsLfgBCh",
  "key36": "4ZzER5FCHJnUqvwJsKMrNw1H6MLkDwCnzf6xWFxDqhzKBwZidijAtivQrN6DQuZUFqKvs7pE4SHV8a9T81iBHVS9",
  "key37": "SAWtgmjhX5XsDpEs62sBKkYfobnzbQ1pg4iiruCrReGFopuJET19tTVm3i2khs5f7E2mkfe8aNvesoEQTftoWbd",
  "key38": "2c9EnSjdeLdkc4bkDubWAFKBPyf5Vt6HfKmRjJ9xDsAoGyy6BVp5Ksepz2zyew1ZmzWriyxpxACUibQ3q8BuSria",
  "key39": "5gQktwCHPonmXEPF2athEDxE89g1wwVtembRK6z4354QUEzSU5aMfj6yKySmtiRt9u3WWBBSc9VXCcgX1xkSt97x",
  "key40": "2g7ZYcoKso5hUMp3u1XxVRF4Q5r39UGPFVDXLF6Ej9qPKmxUw8hnwbdrwMp269mFCaMBPeb9qEYCe1sxbUhpc1Qb",
  "key41": "44b64af8trEAoUt4PRyFWkhdL3NhQrXr3VY3LLx1A5Wct4AJSkkkPMJagQxSop86WYkHew2A7XZjJJSsQ6SVo62N",
  "key42": "2FPcJVA7rRSDn6U9AD61jqUZind3HwEtGAY5Zn3GiVBk9hUe27pT73KV3RCQHEUoszsSwX8r7Up1Zsx6EUTgNSJ8",
  "key43": "5GHTZzRtjW85PVTw8LdFCVYKvsc8tLUvyQydTfnaabc7prWrZejHFanaR9zye9zSX1Bpjbh8iHSzGrKrFFF9maXc",
  "key44": "3obpTy1ivWWuwZgf8MA1P9396JTEwZDhPHmPzeaihi84GadyzHcuASh3M5yRQFJoHKBuTDpbAjyQoK5a5JueLnkz",
  "key45": "YvgNxjjxuL8Cundpg3FrdxMvfRRn39RZcZbk3Z9xH3uDh4kNiBBUouD3vYxNGZzbEMmemertZ5Ln5V94Pkmprjv",
  "key46": "4UvaW3G7Usi62dhqWXfHNrm9vm5NSvPqy8pK8Cdsys8U4qvL71Vgk3Kymm2CqFVQU2QucrhscXAyLshM9kkV8erY",
  "key47": "2FGgLfShWaixQGV4NcQ3MegRbsTFQKTKwTKXiw6QRcLby7qVfQAwsDhgCHCvUGcTrHZBoJ1btdUiCqBsnjJ4PX2Z",
  "key48": "2wR362wUs3wLrg9s6AkhGcdidYA1HbaiXUXnk3vVgPnE9TAuQqLA8aeXgzo1i8QbaJdjssydPBZyinU2pV2jbmQW",
  "key49": "4vKz8WxuJgQfRLvJUE7iQ5e5hdcFtnpxCQ9g8jif6yNuweKG2DnZyctuSeuzE7A9ufdXJPBiED4jYxEycbGTxRix"
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
