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
    "518veyjQNU66ActJ3JtPntaCdSdFmX5Lfq8vcm3CqnPSouiFtLQVyboy8MNkvu1nAMUqoMYPsDfyY6FMMWS7LEeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiSpYeehtCjGCYGzoJb435FBz4Dhnh2yPyBXEnfsQPSWjhipTEm9dYEpepmAC4jDviWr4JbcA1xC9nngyVWaBUR",
  "key1": "nqQabmkLw9kKFdRfRCgwvgjVNbD4FFfsjMhxKH5nVGJNLuYFE7JYyzaTmyZGoPxGXCCQLf5RV7W1jKEE44LhvuF",
  "key2": "3oWVHdNQPGwAGueMRzADHayH8arJ9ToNbUsgy7otQ6TeTPMB1n8kLYUCFdPJTq4U1CCE2KF2hECf6NBTidRgVksV",
  "key3": "3dzBwxDrn1GASRtfFMJkDM7QtSceGqCs6bzNUaVjxDGUHrdcuMcDHFNhZNQAne3LqnFbLaRcpKUJcrfNWdSJ9ypC",
  "key4": "2SVxx3UVBG7gKcsYURzyueUq73CtcbHs99EdeneCdT4THEKhU4beKCRg2V8Sw6TSLobM9t5xZtRiF3SdhLDtnd9N",
  "key5": "iUFjAH2MU8JHT2tcdr5XXRjFhCWbcRr3UFknuDNyJkySEoki6ZUU4aQsRBmhdQeGCcWtu6inQ3pYfvfUXiSsUM6",
  "key6": "2x6RHrghz5JhoypoGbmUQoDXNZ3DZ4BpZmQv8i33bzVwjH3HMhkNAqkWudSM3FjeAEKsF3ZTPiqYCC8bxB9PCqDd",
  "key7": "TK16GmVMBNqjpzocprcgLRuBTA1uCsNv2SPiph1Ljoq7BgJR25tgP6uZzsQ5h9cEG617TEtFjwzZW3GrAyXv5qL",
  "key8": "31LjM3XJf5bjHew6nqSyQHRv4yUX11ScT9CHgj4yEkLzqFDi2HXUU47xjS1WVM2aZbJ3HQPN1LVMdwrLUH513gg2",
  "key9": "G4FCV8PAMQR2GR1FwsxZdsfqA16wamhCZAgnv36QUR2eKs91pGocytEGRYg2K6fzsSKqCGhbJCotm6sNRbQq63n",
  "key10": "tXYDWG6veQtv5UxbSg2dqgcgJdFJ3dMYYQv29WX6BjdeHH7QnnyDyuqom8YZtFQ6tPBDF1StJig8m9HCruBEQPA",
  "key11": "4nPSJ73V1Kdh2JdBS2aZNGzZ7Z4knSask9Eu5VbYXbBG41za3Af46g5gB11GCSKjVQjV9K22ex4SNuKDooPf7zJB",
  "key12": "2a4bKLb6E9LRPw8UThqYTZ2hUNh5JuuaZA6A8B6XQiPCciHnwsVcnVvUftNdfxWJx92QDhexRVrzStMy6AyUUzTS",
  "key13": "5f2NKoAYE4AkzyrdDZWkAEKoYedphgaBQGXjZcNHq3AjMyAdJzBjjcdqWhLm3Tc1Nb2ysGscaUR8SP9MvU69Gvyn",
  "key14": "54p7EN58cYMpdFM2C4xVJjXpSARgP5JDGgKWHbuUgLXvfLZqF2Edq4sFtqGj43khcm9nxsi6aj5hmpgGbtHqNruX",
  "key15": "7RtBwhnk8oW1s9LhoQfnAXUrrvPTCBcNxsQcKemonMS8Wx7kjhoPfMA4jHC41o1PQhvvS2XNAswaM5WmSsYUkrw",
  "key16": "54xeHbuDn8X12C4Z7N9GBazCvPqgMBWdiLozvYr8oqrv8g6wte7Rg4V1zfLGf5oZutFZNFdGt2pW8MWzJccdnA5s",
  "key17": "66RpnziLGSMBiktzyhGfnnvc44Jj49yrvmGwD7yxjEY4VQ7E1suz6QtGKVUsGCs82VbxDeVUiZnDLu5J5s8vqXWU",
  "key18": "4pBEwgiyxooTsauh1towBxY4TqKm8Yzvr18qPcCopxfMR9RaZUwkhcen7kU2Vu1UgMLw9cuWpBj3MZ4hLoNagCyD",
  "key19": "4FYNf7SjsFPHGkwKF2PmXGJccqmNtBfoHveNE1sW3DMi98ENcNcvR1iC5Fw2xZNkS3krjgP9psutXtxfjFSoT6jR",
  "key20": "4vBSKtqXtQcLMTMkSgZwSxHAw5Qjj8b29u9yVQqfnMGchLiGpoch5fCypRyLjGXDNwKRSVfvqhfjy8LyxWJkdNFG",
  "key21": "3o1ZXVM4gzLmXfo37v1TRgN7mSzR27CLWQg6NX4kFWpupTqrV3AmuENAaBPLzTMvSzGNakNykDsXXHqKAZ7QBiPC",
  "key22": "2B7pF75hPub6fuu8Sr6Bq45WJvCBPgbFwZ9MZY8bDUSLi89jvKQ1un2u5rFU1dn6gMeEcag4gV8Qyqu2pxMyP2ag",
  "key23": "5eMGnDi5NXeYmemSdfGtA9QaozBmPsTQcAt9otH1imCkUpsKwFJ11g68HuWLCdnLmUMGjBXcb4D36wdGSto6RY58",
  "key24": "3BqC9ozW9z158izo9PbdGsdfav2JFu578zPia3iz8JpxZEm1FmyyaWuam3WHoQ8Ep9m9eFiHk17jjLGjnenFNJ7Q",
  "key25": "UXA6TKd4E1fw2r59wcoDzByuco4sFoXCUy5rY4MhbX4iFynUGXfLey4XJuSiLYc3VEGqm6TKa8qJ6XGmzS8DxtZ",
  "key26": "66xMieeYvwiKCZaWb14FJeapk4iVqmm4NCbb5SdbTZXK8wi6Cc4YdSNE1Jb6gtFcVv4XkEntnC2owtqG8ejTD9ww",
  "key27": "5dkS72NJJkcWA4TgAZBjRJHtkFV5chrqNxQdQnjtF2Wn5na74nkerMqZvbe4CHKCPRErE15kXPbjhVf9CMUshz9U",
  "key28": "wLjwkS4gdov1vZR5WNikLPysxywiqaHY2iFqYG6ex2x9SZZ6qf5dHWvTNmRT1nT9NqF1GDYr3WDm7whDi5neEgp",
  "key29": "tDqbUNsa5NEPyhCmcjmtSKCeKQiVL6F2spSLsuoyVMaVAUsvNxJr2jemx59J16gPPNPuLFRb1oxrooqU8sP5quA",
  "key30": "5wDHEw8bvJ2YY15EhqyDLgL2Qy6s8vhB8W885G34PWeVYdpVFYdwC92QfKXcydBV2vpVEXF96NP1DW5QrRs5ZC4f",
  "key31": "4NzkeBugUhadx5cGgXfmoyKGWcXx6VP73x7uCgt2MwPJ5dgJQ6qHyJkPk8BcCWUsHJBd6eFY8Vzj6gQAhp31U99u",
  "key32": "4ejfzLhVzwkqW6X6fShd5GAJRosm6sFvM4JRhBgKFZLLPUMZLjJjASnTjKZcXRsNfhi9zPPKpTiR6qSHdDM5zxmW",
  "key33": "3GpQKgoWuyr5mYwcCovFrdLcxwKroPYwekRhYwFKHvsEyRicE5oyURkeSwTqdmGYgHeEzv8wjx3vyt5zR62sjUxt",
  "key34": "23GoUxFAFqGnNikhxYgAFxQB6AMbWsw4eFy4iuP47citMV1pyNeZDaXuy6r1gyPFUxXA9uV8eKi7kMR4gzpb68kG",
  "key35": "5vb93EQRRQxuFFdrjaXRsb5Qk1AZxaAWs3LEkcV9sP5bVrTF6ZzE1Ha6t15BYU3rhB2UgonXkffrtMzzcHr1ETmt",
  "key36": "3n1dvyA1bTA3NavSceGkH41gnnP5bSeA1FcHSNrUbUM98Tc62hBCHuMwFtKPPguAqYPvuMvF5zC561X17ihmRYVb",
  "key37": "4pb2MaeHVMQJ27UKbBffXDUgXMHv3vrmLrVXo5F5J25E2NZ2RxPNcX2FAxXvFtousVHkSXtyCH2fg8NzwRQqmvoW",
  "key38": "3PvgGobS8QqZFeJ99a8KQyp1keWyPMPPxcHJXmUGm9ABV7TY9PLadXiq7NC1NEs9eGcdKC3sW7VtzKsxQxfH2DCi",
  "key39": "4eaEg8Snn2pD4HrzzPkvMpNVxSFQqWNuZAbgrW5WWLfr9UT2og9EttNMugw9moWXUntecyoULaEDzbP6aJsMG9ML",
  "key40": "4AMyX3Wsbc7DHfkNkyXh3sDKPF57F6M7EE8T75tbGaZm48hDyAumZwpoYU8JjQap9wDbd3YM7Jnw2EEnpio2xx9X",
  "key41": "Hj5tWfEwBvELhjQgNDNA5PNDX1bNW8aht1Knejw1UuFDoNh5Q3rwEttAgDwRcZZDiAWyndfgXebkiPZgqjJaXBN",
  "key42": "3qZmZLMxDwtStyG7AgSQeCxLx3AKHPtSoCcFKPq87j7kE8FF72MDHojY79anPv5XA1tJx2n53WRDzVZPqcnH3AQR"
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
