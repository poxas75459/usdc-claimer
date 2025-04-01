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
    "tj1yPfdREaaoDftqHp16KpBfXMoR4W2uk7ujrh4HX7uLemb1ERbetq7cZKmgFTNPK3xdfimTfjF3g1NEMd591tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m8kkEc3cHchsYjzEvF32x5E7g6CTqnFKPqMhSe2FboAxLRAHyZL56Gx9rpSGYr1ftHQvre4okuUzH7gySTTCB1",
  "key1": "4aAcmzgbtHzH94ckLVGA1y59C6W65RRizSARayP7RScvmsifikcdfbZQMAcnP58YEtRQoSPDuGBAPUaN9BY8wWXc",
  "key2": "2qHVvcbrBSEKNJ5QDKaagyvWfxAcNhqH48QV6c3Em9p81owi9SciZTzPNZ7kSA2Zoatkjq2QZRkJKk2BCfRZpBsu",
  "key3": "2C3E5ypRqS3ffUmsaDUTZSWhZyyS2QztZMJjXyYuwbtkk4Nc6rqtimuY5K2aEiiqjM5hWNWRitGW6vFWF4ytvTeL",
  "key4": "4xypLJfQS5TwvLub1hKuuJffhDrMJrsv3P8nVH7xKZiGpoLwRwxHQHRnr3ekdKESc8d1mcsmecWN81xZnXPLz1X9",
  "key5": "5sXo4UarGFsQaLvqF9vYLxQFrok9JjDvqDNNW2hCY9boUVbcy6R1UWmJzEbG6QyFer6kKnDQ9Q3j57b9RmorJqBJ",
  "key6": "298d2gx2EcSbJJMfF1m8eiLEQQoAPUSAwwUnaK3zVc3cjgATDUy784woKt5pTu13BYkEVxt9zgCpYsUsy21JVPXV",
  "key7": "A534qEPmGz158dNxvEYbMi8B157Ezkvras4C2HowVkHHqosyJezegZQf56vQdrUJutE9gfQVqjFGMd3AfgqhHEV",
  "key8": "Xmd6zwxKsVg4QuHracessAQpeXHPvCqsAoMMh75tWZxnCYhwNreNQoKeSy9bm43BdxxjmZJnDL4AJnjnhuRwkz2",
  "key9": "349bCnP3Lua91TC2V3jyUqyATWMpCy8VKN3owWchTh1TiLvM9mR1SkN2Sn4oZvp1gAmXnvGUhpZt2HqSF7DzbQkn",
  "key10": "2L1M1QFE8fCMTrrjeWHr7pcpqY1iYKKpfA7VwwZ9kyiZxxbXX2cTT8ic4tTxkZqPBYHnJS51Pnz3EiKq1f67qEtj",
  "key11": "HwuyWyATve2HxRsgSiTLeDxfJbZe35e5gmn7j5momdkDwZBjUh1iZx5Phs9VeGvwJ4s4s9FmMGPraEPnBMTQwx2",
  "key12": "acjax55pPQ1yhWqHio2DhMLCbzqzATnphCUyiqrU2XZ7SgXQ2Jw1qEtnnNCfjEeo4bMFCDfx9VH6uY5agN5aRAG",
  "key13": "24gHXG1kPtuNu6aHBhe69F8Dn9whrZMZ5oxA2bWx8Gbxv8Vckf5GozeRX5yHBCGGxaGPHkFLBYzudbXX5thYuFRv",
  "key14": "2kjHF9YtYok1k9B1KT579WkPcXibNG73H13T5mUQ9hRR3KnnzqQuJRWXUewhmdJzj1FUVXgM91C673rMpGd8D9wt",
  "key15": "38ugvL8tGixef9wyHT1GTcEbVY3GV3mzUiiQP3aXJerpaueMdY1GUFEYvKYLhD85L3YdWzJSPXdJLWDR4wMN8CtW",
  "key16": "3qd4E78WpzVrdX2TkfbfdvBByGYw14iz7XRQDdFMjimMq5mojh6G5x1hYRCcbSTfkvxCr8CEeuU5PMvXnJpsAJw3",
  "key17": "curBPdvis3eriY1jXPsDTFHAEfRQLpmuqZ8XVzkzuLnn8rKwHon9hwd3soNHEbNjBadAg9oq7Xtio6cySjMpiFq",
  "key18": "5j3ZM3HWnbgmJNyyWeVJcEX73qCtKmwzxrjHcKwpmHaURJFxwdfJmWPAN3kNVF1beBqchkxeasGiB8LrzMWUn9ne",
  "key19": "4jK91HL1mjo3Z8r7Sk85njySE7XGei4ppEbwAgpE83yr2MeSa4KiaWJ1UdVZVTQtumVrSVsV5vFBaWHGKSJzdb5q",
  "key20": "5t5WQHGWoJL9vTSFaCroRLyN3AHj4EAjMuh6Z4oDGmgmdAejanBLmKf5PyJKtcrGaK4FF3vL8GjhZ3PPsdw33Wuk",
  "key21": "4mu8mPZXUFuuvdeh7PDvD4niXze595SUqWuDUg37wBdLMi9UhCKo7BEghx73pYGHcH4bNv2YNydjMUDWeXVq3cSM",
  "key22": "5r17uDz77Y12oRr8tTBmZzxME1hnZy1QNex5gX42pQw66bo9XF4tLZpHG9efUN13y5E8j1DBCv8iyBvDeb2jEQp5",
  "key23": "265iU97A3ETksYhB2BwCp7Lp69Lhptzdx3Eu8uexJ1EzsizDVHY7VHP6xzaCgKE7wtNhcvDKi3juQ4pGYNWw9Mp1",
  "key24": "HjTkQLPNTozNJ4TpxP1yjV4e3Lujj14ytRPUrWx2nRanH2va89gwFWaWAQKG1o3vztAN9VvBKMNW1xXPcYMmrst",
  "key25": "2P5SkgoTqLBJbHmJMHoZhRHnFVGMUom3uq9tXEA7LU4pehWLyMm1WUnsKTiWzPZuXea2USrqQG4XZm2Nvpt2atke",
  "key26": "TRiff5QW1STWvUZa8ydEWSApgo4F9wfNaUNBydAaYMfRfmsibAnUEDAXfYLdB6zGUfK6SLEQyjEGrJdrXuLxa5d",
  "key27": "67RMuGQcrYRxxbcKmRerZ7mtC2G7r87VpTe83zu92mVPqen6R2HRnoHy2anrgrRLtehiZ6Ax8LLPc1MdoSN6mhbk",
  "key28": "4in5XnDLTRrQ6bsb9riPKcL3Bo2GTyUZXr718engy38AYDzJ9rB8iFwZd5nqH9umVE9zGBuGziLyeHPx7erGzi8F",
  "key29": "3bCYDoQWaK7dc3H5TghpLBZNQNaqWJZT6ZekChp6SjC6iQzW8GVpnPzeaKRrzSuYi8Fd87HeMUgUYTibGWzCcC4i",
  "key30": "4fMbvv58L1zctDdkAxbQKjt91TpDXo7EmrNjv6WyM3ZYjgKew7iQkHsyFwmGwxBuuTRGgbneZnN6oihYJXbw374M",
  "key31": "5yVZEfAWVmW45zBfU2pi51DmASmBKUmJ8u8ai2bGAuAtKRqiQJoBwFZSpRKZU8ifH8moevFwGLMgr6rkaGU4vqSm",
  "key32": "5YBqBox6RSFMQq9xVs8LFeWJh57MKnLtpPzbKTKRiAvkBGHA16uo4yzQgiNpTdBivJfsTCUvMpcHmUrEsH8UVtgc",
  "key33": "2yfUYHkSEVg9DYqSwG17BssuNtTx5cJA5M7nwcULULGZhK1JbwegEjqt9ty1S52znLr2nqXj5DAN6avYitWX3jJ3",
  "key34": "3VsMHPNpqwbHdekYN2hZ1H8jp5g6vrmiVEZNzJZVmNDPBYr3PGWefoYyRBsarsjoVvjtGdP8dfwfWY26krfYxqbP",
  "key35": "4Xxfvt9sgUW5tbDRMvxwKhdzGSCfm3m72rZ4n8mzoQPS4zXRyQH52E7wrPaB5Hz7pakbqCHS3r9nJK9XvXjRv7QQ",
  "key36": "vs1uEf1KKCmU5irbGUQT4eLrNrMDQTJRhcT4unzeaPZHbXkcXBtvSNcfbKtcTmq87FGPEdSfHpH7qJLaqG46Yok",
  "key37": "2qo1SQvSxmHrGEYzdEyGDoam6LwjDYHjwhQP9RaQKj8u8DMd8ktAzVCxb2jEXDz8PVQVUomCwPxe78rbRQ5pDAea",
  "key38": "QAZBps7kCT6Vc3vECba2JohtvXzW4rhWixzYcuKw8e9JKioToZdtFC3fap1Dc1JfjgMkjujHQqXV4P7y5G4Vuri",
  "key39": "4hEfNVjUuzNvy26B6p6CvefCavqU8mVMc56XDHcBbv4SNM2Wf3EhvecgA9b7tYmWYyvgZP3pWyEupiMtqzarqLNG",
  "key40": "4BTDXvn2ft7ik45AM44bpv9VKQdvuXXji5e9pkG48q3rQU9983SdS5bP56hdxaZFPrkT3qnwrFf5Uzttt1Y5iNhG",
  "key41": "2jUZkjjXjaGaD36btHgTQR5TefRcuMCavCbyzkCkfEwDXgEWkYfGj4EWFNNeLh9vg2oALSVzm3oY2g25KaH5bcfK",
  "key42": "4PQWFo6xQsEFvkASNZttQVR3wVkVyZSTgXeaoDd13RGeKVhRfFSKiULp3gDSy6922feMUEQWfgQU8XqnCspobxpQ",
  "key43": "NxwZuDvjzo1Tn6FgFshriytzjTsatZToV3qxbhizNqcugSzrtq47rk9GEuUdLHTfMU274QFoN6xLK8sgzfTBuVb",
  "key44": "5G4MRt1cGjaEkJ7oJP9ikKGKqRMZgFV7ZSze7KsRWKpYfFViA4pn2CDsKacAXd7HMGqvZFSCXoW1PATRJJXR6TTv"
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
