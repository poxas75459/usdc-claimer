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
    "4Ff9hPtbWGcG4G2TFxLinbHCqW8QmTkJqfngfyMjZF9emg53btrcyTn7HhpLzddRzqHvhu6y71StjCLAh62Mowz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9QmZFRaw8utYDQZKQZZhULrEECb58mvQx7xepUneaqirx2wKo7CaKx5BfQ33Kpqn98TYgqFZH6HM8JbD7XWJ54",
  "key1": "4EuLoJuu3dFDmjBpfPZFdkerYViFa9AEFf3Raqh5VMSkst1GFF7TGUf3k3MxVvhFFCD2hUU5kQwxF954Ldtk9mHQ",
  "key2": "5k1e75sued72Gtu7hhcFmcPLNa1Buw7HC1XoC43Jz8VakkLfjzzYjwbnhEEhBsf5TyM1Uv69GRGtkTFDKntc9Td1",
  "key3": "5MQ4Rmy25Y6gV9SrWkDPM5W8idAuapEpQxKtQCAAan134vRsqZEezWrksZ67VM8vaTzskcW4hGebubFsxA6eQUDB",
  "key4": "2p47j176byuDQdKeP7vCjDe7oLfm7wBoeQJviXGt8jRDx1z7eGYYBuP3YF8YASJPscwcqQgBJMCf5Khpx6Uihpiw",
  "key5": "4UKRG8FimfHipyi8ciHkjaxrE3fJEwf9zaJ1QVguxqqZyDSSWtAyRGSD5sfoavpDGBgEeTQdusZo4hSv49znd8xs",
  "key6": "5qS1ZyxUsqoNmyG9uVEQhNmYBanQMXeXJzu7cc5mkqrSHF6VY3nDYX2gM19dJCoQKsjwgUaR8pq6WB7TjegxUtan",
  "key7": "3CoynSbUHWZQ9RkKVTS1Ks46WUNM5PnoEN3s7rU6T1tvXgqHWxJmE5vP62KA6ksTLo5FoQmt4NiA7ZU5N5uC8Fvr",
  "key8": "Cbs3T3PkN15u8Px3frubnnTqgiF1Axhcanuy7w3CWaSctSnnnSBSXDT9BU6dBxQeG77tpMbn7Htx6dRMR2BGkGz",
  "key9": "22sd52vjxAQg8io3dTVTbVqk7gAksoBA9MHc98Tfnzvkp82t7TF1EWpoMSdtB6sMpNf6KhHW11n7Ez98qUJehwwf",
  "key10": "bqWEoZAEoguDgmDro2Pm9fTcF21rf2wkTA7aaMdTmvFRdbeaKu4BCnZYEg6r7gbCjGLi8zg2ytSXhcabmzA5ANr",
  "key11": "Wr21e3uxjeLLjM6RjkDpLyzYP1vQaoTt6yDY1kaiHQqBmt5u95Bi5764TknXEAqGLcBWRMh2KrPnkLTfkpQBBae",
  "key12": "pcVAJN3wMX4kfuwxbpWVff7m9VaTjpAiRiyeyDMp1xy1mTFjB6FJ56gt26qifHUr8dhnJq6YLCy6WjAsy2ibFvC",
  "key13": "eeDe9Kw1Qi2mhs6C52TUMMGFGJpHH5DzBdsBxshoZnAocuZM75hgVPfBehPjKX1QghEppER1sHTBHGCTZBNnPd8",
  "key14": "24ACEhWXdtpLnS7BVSqPfU9V4n6zmvHkUPkdtE7jaJWoEU3iLbecEaeAAibpaYzBWQYaLa1ga9X9Egkc6AGs5SGj",
  "key15": "3TR1gRYu7QZy2J6YKeqAPgQXHbYCFwoCc5bdQyFamq69VWwwWf3H2rXpmGfcR6sCXBPzawAJfC3UYjtDE239ZnEb",
  "key16": "4PZPBT68hLX48JdA7yfjEnBgZRiNvjbJF7cnSqL3Bn9fwLeAbkwWnHiaKgc8xaHMSTJhqCeoChrtYnK6XCUXocbX",
  "key17": "27btHgEc9cKDyYRT4S6NTctwpZnHaJF3AroK2d35pKqCk9vqEUxDtEHZRHPEPMpwk45DD5acmYk7FvkXPVuLBg7C",
  "key18": "2PxrV47P7am4t3c65RfXZiS2fkU5AHBzgXumvgcq3nQ5dt1c6UCn5Aoti6VuHExHHBCXv1xakYxXaNUbL4rthMcp",
  "key19": "4gKtC2piq3wT4raztcVcxYDfCn1rC8xkwPqR1jjH19PVshDR638cZWtp9ufgVS9CoATcGezSgursLz6EZnrjty8L",
  "key20": "JjhRniwCusJnWeboSz5qEBRNTuNRJRHU7E41wu3U9VGZdf3hEi88g4TjAuW6d9AXjWrSpdTc3JYpvFpe5dLuWPp",
  "key21": "2xwSnHVmSyodWSynQSUKcvHRxx6K3TC43Mm2EDhZ7fxhgqp7i9jsBx7UTY6tpCwyj1WJ1BBeYVwPLL1QLeY7Xaid",
  "key22": "5n2Qxksvtzcd6q92xojGMW8iL57KXFBSz974WS5NG6FDjuSAoT1r59Zho21hSPktB5yD7s8SmWouPb2XhUfeU8DU",
  "key23": "5QqrXivWd5ucaUUSmkm8K2BErGuUGzPEUwZANdbyNAZ2DvKaLHTyrSGk3nh6TLkxswo7mVGCDQL2iRFFdVXjE6Ws",
  "key24": "49mkmByZ7hWk7XrTW93tHpdNe8Aq3BiQrvGpWFD9ad2hBKsPgTAWcqst1pRo7cf581xLE67QcobeoVsMx4EAyV1y",
  "key25": "4XR4D3jn5TjQDb2S3MBLv757rzjnVD5zaAWY2cwCCgju77iwsD87bEpZyxPNiZHdwFQ5Frocw2XS56DkEn8QtS2L",
  "key26": "41aWhoNCvNW6Jrta61taoCcmnZertCm4tnpeJAB2Y1B1uAos15UXHMUjJiYHg5VWDkeZFE7DHpANNLPLpuQPDbHB",
  "key27": "49dyjnqPRBJ3H3rEeieAR65nb8EVirYn59Ty6WcipUsUCfUJsnH4yBCtjcC7MnS9vDRJzsoxAc2b2DaQ4ckDYwai",
  "key28": "3RFfjiseEhREzscdKJ36Dyzwed766ym4YstgRNMy3EbcpzrRcgQSNMmyyUQBrfEqLvcZf9cr42wXBjjeoHW1L7V5",
  "key29": "5P9uA9nke3bJtWeUHLDLkfjQr1BJpdeaJPvJHZqNgFHXRoJ7JCvch84ThtvTBWDQEYMwc85eS9GbNLRqUoPApHSF",
  "key30": "5KD6w46QKPguU1LocZdH7tknZQVcfy3nxYt4iA1B6LdeuSe1iqwfNg3jxvDkSjehJfUnANZdB7viEJ1Pd8gsZQJd",
  "key31": "2CN46vdCvz9cN4krmcDQ9aiN15dALeN8D6GVc9g35TFqUfGK19uQuof38L3qkdRaDUjc2nxX9BXrrYNZpifX9rvx",
  "key32": "3dbKreyV23zXkfxypxTAcwUhSQE4J65DTYd4fLpVpsArGzh1JrMQTi9yajczvAkwH7gP45zWpiUFbVkcCrFG8PXK",
  "key33": "zooRVtjbexG9CdaWUn98dfRhCc3og4GobkxZJdrRbpXxbA1ymAFL6HsqL9e8szwkQkxTVzKAdGQR5jDzSE7BLoi",
  "key34": "5Rb2UbZJD2a2vABZjco8pebYHyMbJgu1c9WcUrN2f4cS2TDDhZXg1McWFYwheVortJLXwdfDXALN3zShvaLPhVzm",
  "key35": "Q39NLAn3Ze2DfoJSL1kxmJ1gbrzNAXSUTvXwYUKbNUaBcU35mnfg8HsdtnDJiAFCmTskq5QuhThExZ91nZEBC6y",
  "key36": "4JYePAkVZ6tMLZxYtKa6krTpnkxYTUyrtgXKcSE4sQM2CaSR4kfL6VwwrGgFFjGWQY19FVn8z1nh8j3CLS6JKaQy",
  "key37": "42t6gkirpMBQ8oXs5nbXGxGopVa5cDogj2JFcrAyTyjVupqdMg5yRSiqcE4g7N98Ek16V1xpqv34B5aN9oiLNrc9",
  "key38": "QpD6KVuQiPTkNP3UMpXWDrztWzkcvDrtCAeUpRrGjmw2Nasarqfst5ey4pn2UaJvQa8fYAEdWmJgQ7wbphAeazx",
  "key39": "588wLmqN5V6MVFPx4R51g6uHzuRJ4ezfxE2cJzCdHe23gP7AZYYmcdsaNXCq8rKkjauuUs5yxxnDq3H4F94DGCqS",
  "key40": "4RZCrP1SpBAqS28fddX8K9hwcBXF3H2bLBgxV9aoc7mh8GGGtefQPGEHj1yFLzEJLCJk9eGcASK99wgZ1T4KNFce",
  "key41": "dpnuar7V8Bb7eTdJ5RojP5sZc4LHJV4u72ffWA11XSHEUEZzSvizZsLyLvHkEpGF6nsWYMqN5n9HQZ89EqPaeqN",
  "key42": "54Gcu76DeAuDuivjEyWTpPLzWTPCBXzpBtoDKF2V1aJnJSCDZQjTG77JJ1VLPox7fdkiVwD2b7N8vsxW49wdL7Vv",
  "key43": "4jMvTzzv5728FcYfUJ4xDRUWcSWwUyHgjhGWndBaB31CqRvDaW5cJkerVUqy4iMfiXGXE98gB4KzUjLWPSREWKDD",
  "key44": "64W6gq92ZeW3jx9bpPrGtGNZVV6NSzsAbrHFfo7whYw8yzyW5w8a54pkowyRXw6vn86mKZvCuF2yaCox8A8vAZX9",
  "key45": "3ockDy9qzujfqRNrbQhAjdeyTTqZzmqCeBwhBoMjEsCBijaSNeckbesFyBRLxY73tkEPuVzSWuFojWSF4F4FhCVD",
  "key46": "64WUh5jx3ytC9qNNvkKr734zC2whc2tRgnJifczCqEjW1bUbzdutC49kGSQ58zyoqtHFu7KZPwDjVdMugYwr6Son",
  "key47": "5KBwXEQyeUPtmatGe65tcxzj81Av1rSXmWM7YLqPHgizkYVa2CBbHcyTaB5bqV5K3PL6f194qzYGUmndojTrFkMd",
  "key48": "2DbRv3PK9fHYPAn9zFoZ1YLMFuiiwdo9PcoopB2AmXPMSdWd1RzikYdgcDsBNHN9EWyuMDAocg3sd8WZCtPTKiCG",
  "key49": "4PYSgktUHcEWHyhaU9NWmE5sED4DkvuGsfe2XWnNUx7227CVPqcCCrEUQXNe3icyxJ87fqzKb55s78NnmrhVQ7Xh"
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
