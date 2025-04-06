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
    "1HNn4ae9FZfnv8JuFq1LhjhbdasucG4GhhQNXTpkQmybULdWffiMQYav8HmFgCv4ApBhXNJmibPoBEm3AdRPBHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEdhbWajhsgkURnCAfpcc7HDZX2eVaYJm75b9kxoPArvcuojpic7uDngpG3P7iZp687Ym8TEvWczZXvRchNU9p5",
  "key1": "5Gb7YB8J3atsUM95Qav3u2deomA3X5F4G2wySUchacsAvJbX1EzJWbBbT2FTKzbEdAeC6tcTtoGkb7mSC79zPj29",
  "key2": "2oygc4f4ghfugBLnnZTe7WE4XjnZXrBkHjQe2xsUSUSRiwgqKjgM11HgJoodgqjWfGBWME3XMmthDKt67ZKm7Qq1",
  "key3": "3nhrYEofzi7QwBPV9RxKi6A9dgVrYyE7EVvwr4JYPJ9ryiRmDhuqUdADGN8TQqFnLXWw7yizV7qYiR1BpywuBHMn",
  "key4": "4wjNjA9BUKNqPNcBiuem2SRcZveVfQ43mzkaakrsucq1YZJppaxaxuDkZMmUt1S4z53eaGiVFdwvW49urGLPsYTt",
  "key5": "4tH6htnzg8iYDJG441DWx3VtXpdaqBxA6xmoGXPEh8eennmueMfNECpPKfZwbDjRdccCm9dLEaCiiw4jC9WQFY8h",
  "key6": "5re2aoKTdGkwvD9sH9MCEDCQy6UG6cC4tevQC33DADC2iSQaSzBnqLoL6Q1EdBwp6Jn8wczHTL9KCdC67gbwKP85",
  "key7": "3AS4xDRCbveGyJuYMon7r42vK3oxBViJ126yhKwQf9PynXwJqopHNVkNi5v38Eh28kBNLzDme124saYstPdREp91",
  "key8": "35N8veYK3mt7agDnJUL4PvCiF4qZiwHSAPHC6Tudw9rcjPmSk27y8HqUcKcqKQaD9Rfh9LeZ1BrV8pKwDs1EZse",
  "key9": "2jzLCv3kNw9buto6512iUMH65eNDeMPAMmu5MMybd2MfKYPqzN6KQ22b9XnFqrs6dPuBFKJtMiYdZaApaZrwJ9zF",
  "key10": "4H758UnaPDrHRTAZcvMnqiwVMpmXQviyZfd1rCBGRkTBNT7QDDALoWytfVjQVYpJ58oeiFiGL2aj9qNBSh6KTVhx",
  "key11": "4kVF15uR4VGp3K6a3ruAGHFHHFnaRYhjb2vvvuA9yAv1xGYVkt7Gtdi2F1x3RSpt15ccXVi2YhyVS6iBMeWQ4FEG",
  "key12": "3KaAXERfRxPkTivYUTMfK8dCgdjzVYEy5npQGczakxabHuwMvY6urdHUvSZWUzJYHbjSUQFoeBEacrby3d6MVgiK",
  "key13": "3Btgzh1KePZ7EH7Qz6FE44CcaBdBBkPLtMzNGu2hYanQfC9Rb4A5rjdhxMFbcNmGpBhXL4tBtKXaeTbBKUUu2pau",
  "key14": "jBBzujiJv7fwtm2WFPaxEMjy3Raj93bhGpW3siUFVBHjTvf3i2QXD7YVcTKHmHoSywEbPTp1UQmHp64NafY5pkC",
  "key15": "kv5fxeRGyn5esCT27QBUyJf7kLKDBaPeyRJFLapikyoTXajN6kAWjugFE5RbeMjASttQ8Q17CF1C299kp49HLmp",
  "key16": "BrrFpo86UPreN659MWzJq7R3DpP9T4Le977NaJV9DRp66fH8YJ6DvjRGeVkuaNyiLfugqNQY19P5SwWtgR7B1g8",
  "key17": "4Y3vkC1m6qPDiVq4uydDGofsjb81r7rhUAK5uEhcseHsyhcYYhfcRXY3HsgYf4FgsiCL24yr9gVtzqZ4uo5wh69W",
  "key18": "3XQu5BowQCJpokCTk3udQZNtaVRRW6szUzgbv58FTivE8bPJn3bmJhHBShM9tBU2avuX2HC1Ao1wgznNx4epkyrA",
  "key19": "3ZgAchFZ5nwByeugjUT38tSEXj98X2cnCjVTtM1tTocBEo6Pyn3LDTSQUM3AC2iybrsesRYcsLjkG5a2Stzspc5Z",
  "key20": "5RCmxuDJoDs79k8fKnBFJBPmMpkiZkV37wcLr44aftqgTBJx1vp8ABniCuFgwRXPmMYPhbLwLuJH95h5fiGYxr67",
  "key21": "2SN4HGkeCZwRW55uUghQM8vQGiDbLLeAHfdCMq1WH68ZsVBA1rgeyR5aAQh9FT2ddqv7wgMm2WswJfBiLXmTDg4D",
  "key22": "5dJ4Dde1bqQU65kju2WT3aaknEXmWoKRxsEny3rfoCLPmdSYRUYNH2RxsMun83rcSovpasefCAakpXZ5A2RHpyUP",
  "key23": "zNNJfebPACwSc3skBpQPtDKVUMkRAXcbYjgiCyrsiq8WQJQ6uiRUP1uggE5gVsE5Vceo3F8ptvdg18Faas4gdgr",
  "key24": "56RWZUYk8nTP3cmrfp5FY9i9jsfumf3Xx4MhnxAbzYPFgPtrPhbvz2we5FVZPpTGVwMah6ii65fcWh36Ne1NYXW2",
  "key25": "3hu5LkPHyYEekGyiFNZWPpiRjgC8xg5wnu9nziMPk2MoViibNh4tLehw22Dhvge3vqGRbGsFyy5tUJbVMJp28Jjs",
  "key26": "4remct7yWTG8sWsTrxSq3dypfSYfmZBD5jqPGVB7jPbg5GtYxbWeXex4NqgigA7Si4WjiDg9yDZ1c1d44wpNcot3",
  "key27": "541xtVmJjfdXwN8W5jkjHk7gNAumw8XBx533sEi4dgNh6tgLVHbWhBhQAzfCSvJ7WpFtTb59m3nah3Yuqb6uBhTc",
  "key28": "2pGt4DifiriRLFijDwJtyAGVQgSpSjJqeoDohxS9c9An59xAN6tVQRVwvLEXnRNymaNYFihNfApc6nqmmhg4eRTF",
  "key29": "2ePba5opaKMSmr8jE9XdX1jB5deMYK9Hw1979GyqC9xapgmUayxdt9frWGdnDuRqivJ6sXkUD7r2dDjRLpMNdXy3",
  "key30": "teniMakt7yg9uSynuMcjxj4Ao34AKg2xZMdJuZJ1XKrSYZkTiQ2hiRRwH1UCBn1NivRR6L5oZzLJWdj7GAAejEt",
  "key31": "oN1f8PCKZ85m8NDL8Z9RR6jZ9zQuHCdHjpGfcu2imq1ZU7mb1taZDCFs3ocHJCvC4KTaiWZTznkJe2W59cec59s",
  "key32": "238DtTf1oSDHRdv6DjAYUMoaY34YMSW3uy8cAaaAaNEgAFX9jGaTvVkjqRUJcPD1W5oUwWsCKMoyTN3bdwT8Zpzc",
  "key33": "SvwxkGArfgXckoCoPhNd5fAXAXEzjLLFSRvKyHX58aq56vZodWPSt51536vxXwhpM6nM9uBXDoSk7YtGGGHkwkX",
  "key34": "31yZ11SqYSJiq6vDsnwHLYoE8YgewV4RTureZoiyqb6mwryNFXD8dcgETNYP66WFaXD1LVhUNAEQT2rAUHQKTBTf",
  "key35": "2cm7wEQTxbzZdz1jwHbeVDw32gQatqM6fUnddcsyGkMDzr15D8Z1r7Z1EFoGyQ4mQxXw16frhRSvMeLsTUkU6vh7",
  "key36": "3irc7ADEGKDCWqG35jNjtLNKih7e2qf6uEo9dTeJka62RapkcN7jcGFRjEgvAyLeoJJ9AmUA29CDAhNrqc6PSSde",
  "key37": "SZfzrc95QM8LabXLVG7Egzi2v3hXGUsxNftuPJq6DB7s8giDfhJLw9jyG7idMYSopdz35vPLcoG7UhPeGdWoLiS",
  "key38": "2d77RQ1B3iKACCYMd3RiAXYR8SqfFw8eMz7uCYFUkyB7j5wdun8K7J8CVbn96fedk4y8RVY5hqUQEiztBb4XmMm8",
  "key39": "EvktpWYUhR7AN2hJaZXGeBj5n6ysGur8nUmx7oYQdxKndiciRsEC2UATFsxSqyEq5qk1ZeRoV5BywKNAEQy1odq",
  "key40": "5LVM4mk8jShuiwuNnXEJ2dHqNSugDX5BEYERQ8ghufcS2H1S88XXHaScpRqKkTEqBT8g2m5NhXbjXtbnfoF8EYny"
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
