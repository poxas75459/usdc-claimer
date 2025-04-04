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
    "42huceFv5Fcubz5MzMLdhXfksyntDKZgsTdn1tfR6unKizXYUWvYUSaCyYQCvtfvDAr27uNH7YKrsPDHuvNmsZxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ryBWT2t4UsrxgAphEQK8bgwNhUPieEGqh3pjkhryYEvPYr2WHnAHFcGtXws916ZeYG1ffg1SbHEpCZ2QqVUaCN",
  "key1": "2NMjQYgVwJY8fCZHrqhYBrfww4rwSwhgQZpUCDsS7tzVXzu5LsxXgN9VYurCM4WAhvaZtvjjpEjd51TS1uCZGcYj",
  "key2": "2YKnFkvXdBVqzCJEZWB55EmZjrQkbcQz2M4xdnW926SaCQDLrtMjcv8MLw5RHxGpbFSHB7w6P85vYwERP9nnCdjP",
  "key3": "WvaRWoUdiZxQPBpFWo8rJR6VTghXGvU435sGUojoAau3mzdfU6q2yyKh33pQHFBNjmxi1zFy88rUEQgUcX1LPmt",
  "key4": "VZkJhCwk64AQRG243a2ru8pZee2rUSmjkHB7mhP9fUVb1GSVTa62ixsChG6L8Rx82yP1y4sdxzGSWGnyW7wu3bW",
  "key5": "2twHYYwc9ZsAYPj7tZtiymHWFvzRn32kKWBtv1mH2LgoKMNM1981o2YXUeBuZE3vFrkSkoLDfREie7ecHipM9xwd",
  "key6": "DwBsGWNkhJNep5KM5YjavzUekgCCGDYLiBNfqVDK58UYoMmGFxf6jfJQ5xxQwhZBAKL1BDkdAgSeyyu7iRkR7z8",
  "key7": "39aervDvnradippDZt3cmFVNeQnBGUUEEEc9RB8TszpRwd9oNbjGNPwRju9coSPULDUDUgvzyubEjaUHpJiPXwwE",
  "key8": "4ga32rtSYCBJagZ5EP92LNXpLzdwnW5RierpBzyjnJ4wtm8tqqBRJ44fjCv8td2EK5KTHtsAZyDYHVgct7jkEKDf",
  "key9": "4DyksPRuicLoej6yCsgYJaooeo1x4es2G4z6QCJLhVsR5654RSVet7kp8bYvLkZf7wc2PvkQxCQLGhymHUhEneiC",
  "key10": "3i8hAkYAJF9DcsdJjfHoj7sxYtby99xcsckdrLXY45HPrLBwmqNXqbaGSBzeALd45hRsg8KNacV4WHJ3pN41Xv9R",
  "key11": "pixwRWwY3VDCttPbgNxDnd5LVacDBcVnxaChtcbx5JGLL4Wjs3nqceh4jYikwK3JtUz2LfUpnFXeYGVE8VabxtH",
  "key12": "oS1o2KDVqUgFccKxSwSvXyD7psMKZFKkRVTea3c3d49ACT9TCAAXLfe1FsZcKM7rVYEUQTwq2QA1eTPRKTSHNpo",
  "key13": "yfLceaK4sxeN5JU7NJA1Z5fxYndL5VS1tNgtQWbzjphqR19VGhdfrMCoHkiePJKNdwkhDRbsm43DHV4foMisu9s",
  "key14": "2WUXwbQGdwH8W5VzaR3gG1UBsef1rJRWKXR2jdGVp9f8XvhWg1AY9XknhaHdhapwMxAQHLwhozM6TedEBXuWKKAT",
  "key15": "2aTzi9GFjPEDk67DkhBUUHg7TLZWrrMrYoCQv6Gve2g17e5A8xeXmoA3kEojWsvswck1DnztdXayoGgUkRwCWkp1",
  "key16": "4WQcHbBf24tMT443zo437ugQ8J4bW5KcriCwBx5DCeZCRyK6yK8kL6NkTKwGmXygVAXXZU8heMHkwxPnAWefA8j7",
  "key17": "4C4nQo4BV6zoBTEMvCAAoUYpkAdgX5Sq8yWi886R8mkEpiGPWF3HgJC2NwqBmA63e5hdGPx1JD5AqkK6sefAEeLM",
  "key18": "ayK2kSDbJnEBCGKT6W3XXAkM3CWTrGoSDdDoJ71boB5iJaRL75WEzXNbuHVMkrfJ9Ym1isWxHtiN1UBYAqN1xyL",
  "key19": "2qhKvyo7DPAJKJFztLnZA1MuQsBh8ACj2qEeKd6iNu7VUPu3HL2BfqbBFutDH5WuZWFMwEa1zigXibn4fgbbCrRf",
  "key20": "5qjg2Z6ufXbhu63j92gCV5oT4bJXH2XE5h6fGQ5gizXxByCEm3asSyYp2zpYrkkrmSJcZKcJguVBXoie5gWZ8Lw3",
  "key21": "2vioUgBSWWxLcFcwbGRsuAcK5W2a23NUyFZK8PiFViQvh2RVvR8sk8MJvSXUidgraTB4o3PBDZBGmz4o1fA2YBHg",
  "key22": "ovsCPKsvp3RUGqgw1BTARBkX8BYoUXrzfDAXpcXETUFR7YuD1jgFyiZLxhZoiCdYENnZD7EPCkYcuCcfwZk1GBB",
  "key23": "5M1iRu5b7ADTDHD6nebCXNqENGUtH8fFdmkLEaTsXR3me92Z2y3hu332sega1Uk7WLB5bPExGtXi6w6e4LC4ru2G",
  "key24": "3dNmE1dr9kxf3YL1ecuHCkWD4c195a9AnJM9heGtX1gck3oPQxrA1auMqRgNimNKidtCrWR1Q1jp6bQDYhpmCQP5",
  "key25": "5z1J3kpgjjWGjwgRzrCWa2DzEoXVJueynmz735Wm4tQ9d4p6AnwwmUhUcFFaE4anzEamjkfn1X4CL1xYoZJDa4VC",
  "key26": "4AXTeeABKbQTSYYJ4qNgwNzJGSZ6fU7ec1LrnfNhwH5rH1uruJgV6rzqeDhLzY77BA5cRjngCmce6duAHJfjSyFx",
  "key27": "39KW38a5RpkNu26upcgi3csG8vvMs46saoaYCGQmT5KdXg95KGKCC9DygUknysr8FC3CLuvaCyMan9xd3t45Cobr",
  "key28": "49oajtZ9zXCyLLkS9X8JpX1XMBCYvPQJzmUK91XkY66Mq9r8DA24mhBqdqRY3BLEjFqikfPdCLKXgJBoPRV3q4Vj",
  "key29": "4KGbMLLTXxBvsKMY5FBXH8xTiFyGNYNiraVtwEnQaWwF85RfPeCCGiNfx4TeE83QdyM4NtoJYBmCzGUSWvVzFAYn",
  "key30": "4QLSeTk8G5HGkvkPBMnK86N8A8MMmXk4cGjiMcgq4qkPrTt6jDo4VKTna6UZTFW2dtozQhUJ7umoVk6Df6ZYcXE8",
  "key31": "4QFk23a1JXrsK5ofkiLM4JMPUE2X7MdfiJJCfkvrvfqnfYS3AZEmojqppw4NJ4uLxvkBA3ZVDfohmZGbn8LZBAXc",
  "key32": "2Wi6PN8kRrbFgFBYNpBh4v5Xzo9ojzYyPeXKgc5PnUotjAtNdDPS6wpN1gNferwecTYbqqGrcTUUdt4d5u93FVoA",
  "key33": "5Lpfz4cgWCgEimcJU7o4A5kqJRSAkoSeowhFaAb3d4jjGqvmqq1thBb2XEPUZQJULigekxYoNaTS3dq2iZbeZaEH",
  "key34": "C6pPYvZzidPAZEyirWsEWxucPzgiYphtL5C1oB4dqwLMYvFjhDokXpvrk2XsHFpBJNGmPe2k1YVR46Y4iXLutws",
  "key35": "65w1wqL4YoahnkxnZVGN4vrxyG8XMXz7jJmmEEkp27yxmdtvuMC6SKMTDwXB8W1E6fZwehT7U7Q86KsyUywfwyun",
  "key36": "3dwWb65KMCXM6JgswoHnwfRVVPjNcz3aZmAazHEyHCppDX2wUPRuJmT5dFHETcBmbrGRFDFHHMWLCfuhgJr4TRdD",
  "key37": "4kK5gE2s1siJAu9VCFcXJWaioHd9uC6ARQ696xG5ddnR5TBK6Kam2iCCfgV8JoRB1Y6sDCcjJseRK6EVKpzwU3ik",
  "key38": "52S5cyjFGYNvWe2AeSjkJi7gqWj1ERHEK14x2Qgoty8izy4Fjk6kL4wqtvgkERJAytAgZjTLyLuinThz8ohPZGim",
  "key39": "4UfS8ogdTwx7LKqo4Y1mMM3Uy4QDfEWWZNP1YRCLa7kLP74fEYicwirT77295wwJ9LD69wHBxra7vxvRex1VFFCt",
  "key40": "2tR7iaNL6qe26tRyZ3W3TpWqX8AD3J7EmH5HSHYFMgofdqNYpWs15gJUcw1S6amXB4KykG9kdEP8qHR32H89pHTa",
  "key41": "uVwCXaJEaoAxB3Kv9FdcnUHNumnf3AD44igRnUSrkZGYp5xrdCq8PYCoZHyMAgJRj5HmtddEV2JKGYEDVxjRC1f",
  "key42": "3ecqaExWyh7pdCF5NDZECopCw2Bmwpp7Tu1dXWYKb4BsVaYmHArbBKUAFPUdvfrgNSB4MS1Kwb9sqN99fXPL6Mgu",
  "key43": "3wVYjNTzDwku5q9AD7ZKghWeCsQ7yDrtHHY3z3gwEBv3hBN6NbT358rLX6gVpqHytsPjs1LniuC4pcdiGta7ApDk"
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
