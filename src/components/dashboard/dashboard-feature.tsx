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
    "2VDmxnNEbDtHk7XNY4LUUBpu8YLmy9VPKoyZ8VTj7k4ougRoqmHY18mx6daPGn34hLvGtt4R2TMqyQg2munnGcS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5ddUux4t6JXoMqQYp6VCP6SoC6Ra2dfJ1Rofi7cZbRQY6Gj2agPXQ2dj4dLagQv6dFioQ4FqRd1PvMwbzhwGSX",
  "key1": "49Hs6X5SZ2vHkpieKvhEJ9ok2SzAe6W9UcqgCd2LhymaRBjBz3SRv972w7KPGbaTykBZwNx1ybHiZYirQenspbdS",
  "key2": "3hLq3G4d8NNFZrgKoL776Bi8MhbQYXTCDogg3ATJudq1VC67m7e4SYiWb4UjJ9toLz5buhoBGaxtE9HffxQeVrvk",
  "key3": "3R8njnyq9qhSPdTLnSb6NUmzPe1uP4DgfzUuyRdTRMP3AePbmZaYknwPgmQwAUuF9BUbWrBN48T8kmtDF8JkEAdV",
  "key4": "4s3pURGgQdNBBK3WyXhNTJYak3j3mVwB5S86hoBxqrHK2Szopzrajsbnnvgytbr4mcRsZn68YJtCFjDKucf4oGYv",
  "key5": "335DBVtnyuKhE7zh9eHddHpW4r1pcrbJw31vrc6cbfFL8muhy6aVoadKkiJ4ktWQzjRgmZ6B9p44RG7ZqH4HdBB5",
  "key6": "5syNQJjR99SLv7goFVZkTiryTPd8FMn7PAhWyAyizShw6TbYLQQZM5L2UETECbmVXuBn9tSyZf8DP2dcjPmG4YP1",
  "key7": "3aYRUg4xUaTBCtzyQwL4qvcbzdUU2Dh8EgzWXXgn5LszVgiwa5UNJ9o2KGvaQnPDtqFtgxbSpvTRLr5rZ1SYqZc5",
  "key8": "44fgxwxkxLWMCmsUpRQUuG62rVuY6DNjR9j7oJh5A2KRKHA8W5mfaBniaHArweNsAaXutpv342EXfPhPzyw557V2",
  "key9": "63e4D7dguKoUUYitz3eyFEaZ321SPspYewN2MuncNkD21t6zjNoPoFQrffmzg3uqk8dgfaCJFu7sKRuQci8P9j5m",
  "key10": "3hpJ6xJGKNmS39S2oew5uUdjzWsromK3cQrVBmUNaFQXm1Z2JBnM4Spn4mKoYu8aUMighhoji2EYrZPgvTKs97vb",
  "key11": "3Xk7GeEy8LLiYQ8HUCDPeDwTEemFzeG4RBhpQDeeNHqXRspfZoGstYLWtaRtYUwqwsFxhSzGwoRi5gBSY8UZ2Rqo",
  "key12": "2aiN5hbFabju4CtPypeiQHwQ2T8eT5n9pusz1JD7QNCVGRKv4L9Lfkvoz4Gjo5sSAqSJv2uywVvwoZ1gEz42bnWG",
  "key13": "V4Twz99LTbc35c9QZ6qsVVKKHeRroEtSoKraJwGRpLBisq3XH7SXGjgoeHaXm5c8sxWV9CHyHuSe1UJfqgC35m5",
  "key14": "2tj7XqzRAUb8tZUb9mUieT1xxtH9JWa9GoVqniTFvrRjTyKRSPq39GCfqauGLKvoauZsSYRbHNGsaVS7Dc5WpEgA",
  "key15": "5dmUoa7cnArG1fbb2dpSpGfKQMRwJUboVQAaT69THEdoHRP5yw4iPsweBsm55idYvEQgLQdQZAK9HF85M4DRxK7d",
  "key16": "374siXTn41kjUsRUqKyXgELCZRrt2t6Yf36RpiTVyr9KeY49ZToXaM5BmUsEfuLvehJJLJDKkb6hM9dv55ZfDRfe",
  "key17": "3wHtLbk2feZk4AGHiDxZ339HmGTiWdEfA6RHV2bhA5wcAY2DUdwKYZxTWazUY4s19RYGAc934DrmeBXc4mcHZgkY",
  "key18": "2VmJYZ151SpAZBw7wtLXpEUhUxg58fHGKgkPGme8dDCgQ3pbHZ2qiqHfvRxBU5P4oTdsRsDPJtgwNYsnSj57fuDm",
  "key19": "2upoYBr293bpQYVgowCnjbcMBG2k25Wrpj8kRSX3AE55iihLKfqbyFFVUQv2Sg2cT4fBj8fevNoct8mh8G787PgR",
  "key20": "2pzHAmwKMRTGuZ17RKStJhpkci9VAyK9NFgNAV7bPhUYf7NGxG2oES4AAF4FcqsJD7FtuttzUbFHWgHjjTcnfgW7",
  "key21": "zxZb857BjTsEMiFkm8QuRTAU9W8mxhaUnKtq77GCxNUWJgWrX2nMAW1pKi1wXjNaVaqNcHriExbDcnaew4ktvCU",
  "key22": "42CatzN6BNFsVXouU5QxZ9vY1EWpmiB4Xg1ZbwPCzd9ZRm9YNKQRcvLVNQqPsQ6sDXWn5ajsgSuUHUrWjipxum6c",
  "key23": "YcQK9bdwDJRuupiKBjfxZVqeH5j5aWynXSyrTKibS1GFDu6ZkCL45CxmR6kQrunPdEaYwJhG5Q4XMyHjeMPuP1n",
  "key24": "3YuWEYeTB7X7xoneaVKCTRiW74MrfsifYPfUete7CcYv4vuhZqxRVr8xu6BszN2pbC7w4T5c2GWzyh6o9ZTBxXqA",
  "key25": "WWHaJG7RDtW6JaCPcVjD5k3Uvt1WqDqketfXr6SjxkQB9Jyariiy37te45BYQeMsuUfF88VWoLbgPvG3dUyA9gZ",
  "key26": "5uN1TFb6aFT452VdmsbtfQhoZJVV1SjgG4khgAsHo1W8onNxpwfYWiHk6SqrKJUvca3Sa4hNwYi9m2aGv1HudckJ",
  "key27": "8P6c4aivg33nWFdDQKbHHDPaQ6hnjkiGApNgn9SzDZED7Y7MYUU4WrPGdQzq9vZCKYLwLhLhzgSnFj8U7B9pv5k",
  "key28": "avum427CgMUkXoRxx74keNjY1FTps4F2EhjYAAcbVhY4exhiNRbNofeM5KKDShRfwaVT2kqBojWM5izpaGMdyMK",
  "key29": "4UuNjG4T4fwcdGQeZiRjWt9CXxZu4R37SmXWko26of5EU9af2e4dhXaERWLEYjQtY8qXEokj1g5wGQi9ua3MWkar",
  "key30": "5hKfLEu273jPwK6gZxmivDsUJxUUvWXvPbqSPDaCr2pQEpJ4Za5micXbCWrvX9xJjzRDHXWriKhQEftTETezd5qL",
  "key31": "5SpjRXAzYNeUpNXcYpvPzGdt7NmC1PEhFju2ggEqyXo6or3YdZ7xRrANr9aChBtaYdEvtaDF7fM9gpzJxptymi7U",
  "key32": "5Ntq5LD5D9wk3oEBJfphNxWsCwMMnpHa1gpTMo49BsDNZDukpRzb8EUQgB1pHNv6jxbmzNNL66EXAqfh97bLJxUP",
  "key33": "3J7bNSa5E5heeRwoYiN4BHsCKwB5CznFico97XDY48xt8v8zyc4Vbuy665g2vTD969YSNjfxz9KsVfWK5NWAnH3q",
  "key34": "2SNMJm66SocPuCac5URYqbj9w47ghYaJehcyqkj7Zanr59H9gKxEhFAN5gB8XwySwDtJV2bZnCvVbgZaa9wfGdLn",
  "key35": "55eYK6MH82R2X7BGFPHtPFC8WQyEdFbLZizZ8WnN7hYT73MCxxHeHMfKq1UHG9iuxokeUyE72HF1ivKpgUnT1Jmx",
  "key36": "3HaR5GqF5FxDBWygMwrzEVZezLtJ4QhhEqu5wrvfyuXLfE4zDX4BoxUihrh4HTMeSyDhdcM3Ksbx1Ye3PkAFnLmz",
  "key37": "4Jx5FtPTvB9dBrnHuZhDrKUVueBQzQgJy9QAKKLwdkchjghLGzNBreZ2R1a1goWt7qBZrrrBKbsd9U3zJW9vG3Jx",
  "key38": "2MDMHf6fKZCsGToT14jmnzTYQ2ngAKyAqpRCgCv69A7NiLrc9EGLCi4M1CdNZuw22XnsHvxjSVZBx3udZP1CSCCQ",
  "key39": "4JD6ttbbrQLX4iXeQWuRB3u8zuJghq4AysfM5RpNZnaZeR48jUUCUAQGVo4m6tmVovzjD25Z1osbQscV55usrUTx",
  "key40": "3apArq6fgtKAR3p71gx3fdFXDfrzbbywEx2KGHTH8FkTuaQHuTZibGyKwEDU85RxMtpN2MiVbNiuzmkx4HwiaqcG",
  "key41": "WP5fqMkwrwcPMSUGCzyq45QcZfCKBreroFkkM6frCUrumM4AbX9MB24AygxVLvvihoxxQM27f6aPnZGaAUEcJLe"
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
