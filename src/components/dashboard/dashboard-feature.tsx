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
    "5GUPSg5ebxXVLtj8ApuPFNkS3yjZ8fBcwRDAsVmzQM6SGdDjnzcNQeMswnR27AvY7ujnu9X22r2pXKPUA5CF2hKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5WFg5QXBwGnrwiGn89wy3qqsrKeL4SGb9uqh2nGJiU7dRHLM47GuPqxeHRYbZKwmSyx97C59k8ARiqd5Rr1mAi",
  "key1": "3rtmdSPqqc3eZPPo4Q7pTwcT8RyFipPh1dYiABNEjzjYCoxNfC7hejgcfe6TvMGKAo3or4Xf9Epd8wZZBgjUHnV2",
  "key2": "4EUm8SesaBJLgfW1NA5VUiUL5V9qLk7bdfeQC4hMjmjFpMjcC4XTfxhC9xJyE3JwPYBPjk1VQyJb3Rv9gtp2CAgx",
  "key3": "wAtZErnhL8X2ypV2RkkXXQspckwhFLzdSq4epp71VC3ZSyVyZkpnzCtyHTavidJzRmXuGJvFpAfrBUDshfPPSVR",
  "key4": "5ptCdZjCjMNPWJsAv1C6HEjndRsTFNBBtfcyZ6CJkeuWPdPkhz7tRK4uf5LVapcPwGtoJs6tDGVJEZvXCAvWHkLn",
  "key5": "5A4tkFnLjALKBdKFm3j2p9s7jWtzxGHnYadzdRe8JeoYsUAKPi7mPw6G3quKejjuwt5zbJ22KBGsnizkmfaeYknx",
  "key6": "tCgyMyyRcxUoKAyEiZ78xAzev65aK8YT8MhznpVpNSfBiQR3wiZRnRGFrP825jiZyutMVEBTZDaiaWwNYvhMZkK",
  "key7": "3U6XYvVqvo9ToERb1yo1tuPpDeETHbjBZxVkLS7qhBARPiMGd2ZXFDGSZdvuB5oxbaaMyWg164tZW2cTFWutZsW2",
  "key8": "3YUJ4XTnMaYSfnw7DieonaU5vttNQeErxSjGdmNsnCGLczgoGqewMzsNm1pdkxyFUNuNucQc1n7ewwnMG5vzNHf8",
  "key9": "3aXi3cSc6AvHycyovD1oFZtpPhc1DQojKRDt2S76g4mwxAvuSwNa5D8NQNHze6Uzuvj9NbjZXVR5BnqUZEpmuqzo",
  "key10": "49bzSwqYFUpSgrw6kw3wiBZEmLzXxoZFzfKNTLrZfBW2wvpQXTjyB3Ku7juquZ5vWnFzsHUDkW7NiSExS1gF3VYZ",
  "key11": "4JE8PWHyGwoFpjM6Vt1GkXDcw4WM5b1H8W2nfrs9qGPdKwiuFqG8uo4kWHnM18xQ6bWzxLJDPNc7SW31DapnuihK",
  "key12": "5s71FTNMJdRNErFPjW2VuqXBazgRwXjFRZTvpMpnEnb6uAruHtKSpi3wSEX7Z2wxXgPbKNyja5bMACq8k9sGo3k5",
  "key13": "JBzRamtQK2tQHmwe1Y1Di4Cx6oSJXfQ8Qv4bpLyUJeeJMdLW13qzb5cKNDWPy9Pt3UVBuWexbHx5tW5AyQQjf8F",
  "key14": "3MTAxEXfrP6vmQyxZQaZT7Fjxuk671bVdfocpeWtuqTZLc2qbGFy8KfR4vWDhRwwqwaSGZvR5P6Vb6Mhjx2Zzaph",
  "key15": "5JMUVf97iboR6ynCytxtNscUCR35ptKrn2kWnyYYbsiRYMqvbtS5hWeov9yy4rqVnkcYPewPTJYBdpd7u1ad7PiQ",
  "key16": "5Qsmpp2EmcrLAognFS1jaZaFAF81xB32W6sxnWqTzLYW1bQ6N6nUY4BCf5ke2GaSafQ9eRx2CRFm9g9ajFKi3KMx",
  "key17": "5Wt4JExYtSKMoJGfXFqppgCC8vNf3Ahsq5iTea8gG5beyLkemqAXhN8cmWLFShfaKvBSpP2K6kT8uzhAi8FZyjYn",
  "key18": "4YgsBnVpMSJ7fYZdpaWEuNqRxgqWeBQ6hyzD2XUaZW8x32z9TWySuYhaWudxTbVfmPKjzvdjhnZPHBqSotBEPS8c",
  "key19": "qsztdPkt2ubhjJDGLakiXVb714eygZsDbfnsZeBRSK2HfPGF4j8Wnyni9S3TWaK4CDUuirD16YLzF3zyoLxjYeJ",
  "key20": "4N2YBnvF7HtG2zjnayRt2X7mK9dZVTmgRTGwkBgDGxArXYaHNuzzTis8GbQ3EWJaLMsp1PK7b4eiPWD1hZXbqUrR",
  "key21": "28Rn1pMKNiuHR1aLwxagVtUL8WFBV8oKhbwTM62225JNT63FRgyCpvktJtwGCtsCkeNAEQjroU1gn3uioRnCEw92",
  "key22": "2iTg596HfSwQTmTjCtjBcwETmHs2gE5qrVZf9nVHLECbWrYGySw3seecn6oJ5arGwFsB9D45cBqJvXuktWeAYq9M",
  "key23": "4QUCa1QS7fjazMiZe8yHWUEzEoLWH7m41FyTYhj3aqQoHmYSm77H68GLaFbHbTYexuNd35nV7pr7gzpTmHokZqxj",
  "key24": "2ucceoidu5udKFZcBU28xBVYw5LGKj1Jx32MM6k9u6A8gMReTx6udySWZUmob4tDtifqBPS3a9b3thg9s4HYe2bd",
  "key25": "bNNCnWdqFjJWKqwbHRjcMf5mTYUuzcwHhFJjwAktgQLkXtqXRG1Pr6Fg3Uk246QRjnFb1iEat35G341yBksRWuY",
  "key26": "4QqgaEkP9RakJLHR49FPibomrtwaMermnyLMutwT39DiP6TbQYcayYhdxpEBgPtpPvcdfLUtBn6YV59TE6vtcSoM",
  "key27": "3mraoSMkk99kUXbf57n9j29sRgWroX5XDXvcvWafW194bJYKM7fZoDJ18UzFmvHLXaLSTEQAGkE3gmyG7hdvX5sV",
  "key28": "cixDN88iMpK4qiZeRoPFpVwhL5ErQ2vczvdBD13xtKrzhvxpkG3UbHzKWx4An9oB4dVLFXoWwrfm4X2oQDgXbsT",
  "key29": "2tWiE93C8T41tCCLvYbad34E7W8EKWmDFzq6g43rY8wfpPmUTAp6UaPy9W5WAUEELNa1N8nGwQh4WdTEo13UtBZa",
  "key30": "5N2r57CoSHjuJvyLeqsdLSVvrgP7Soh2dfJbrYmprKAhoq4qc2AAiF8FS9AQLe9ZH13rWHj278TDxJbZqt1wk9Ny",
  "key31": "3CkcmFJGYv55HaxgLD2kKYLVWmHnK9WhSpgixdeSrRJ1Ljcmt4PdG7dy9TXL9bYjoscbmhFPbjjiti7m5BPSFUoS",
  "key32": "4Dw9aBsK13ppkLoZxXBcjNmMDETnijSMYdt4z5f5Y4gFGugf69LZDVxDTbWx18raUzUrQBpzfPT2893LEHGR5hoa",
  "key33": "4QA81gNz1ZY8dm5B8b6gvcXJTxZsq7D919pQ6X89uiNKd7giHtWegYM3Sn2FXEonWRV3rqo1W2JujhRzUR5jzmKw",
  "key34": "3vABUQJqsAwCJwFduMLH8BnogCUtFtVJnK4ZjLb4VFH1Y9de6KDwXVq5tFMxTGmfWZtnu55jgqJ6kujvH6suFbxD",
  "key35": "4ZC7NyJixApZrGzQW8YrSUzGfwyfYCiHRNkkzs1Q1QLBHe7n674jdFKdtisBW1RQwxb1PtnZikyYA7QgWKukMPEd",
  "key36": "42GRspgt15CkkeYo4DyZtFPPLdWC69s8kR2fuQTHPYjgvDApYCuHjU57ZZwkUyriJNUSsE6a11tgabzj3cnXEwPs",
  "key37": "2uJbLJBrvZXDxkJBqTd97jkP6WAgRjaQN1JevKLFD741UiLaf82QEcSBtb3sj5Nes6CHjNdg42nU7cyT23EQC2G4",
  "key38": "4YqqCZ6SpVDjASRaAPkBAtNdV7mXv6HydkaqFEnFHUavHbtFzmK55anT7354vNTaAeoHx2UHwa4CeRjvZQUsxKoo",
  "key39": "3utFW8ygSvPgxvWuxU8DGExZze7nQLjGSTsFHHRxxf5Q5uL2MQCAKBSV8NsEQKrzbSmbgm8mBxqQxqaV4ZqZHaf1",
  "key40": "5wiwNkkfvqMWU9W1vQiN1z4rwXWFMXRn98uBe9E2KqeWtWb33q4zuUeeCUTiDg1nqLcsvi2Xf17t8E3jYMwhaQar",
  "key41": "5qwJC5uy8fxvzBFnkToffPfwMsAjWRcciC5Kja8SmTt8siYCX2HrAcFjjrdq1J8JM18NxdJvMaZDy7MNyXtWtdiv",
  "key42": "3ivj7AkmTtGF5hHMF3krfnFK1Nfk5Pucu61b8DpRRu4VZnuasDcDao3pPjwKAvfWEPvVHrE8GQnUUfPGcmqpA2ET"
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
