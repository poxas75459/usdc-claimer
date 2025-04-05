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
    "4i1jNd3mmfLSfsWfa8SDUh7FSsMEoP29qAB5TDVjjuNJAMEvZCe1YhG3BbSMSMgYb9iTXR1KoJ6UdjWP2BAQXaQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zECHpQhwyk9LUJ98SBBeuDM5SyLucm49PHQPTQALxWumjxWuh5uEDUFFZCcmbeWe3fi4BZCnXQYdsaVzmy7fpHS",
  "key1": "26hpVFPwAhqtpdTpefVzrtNu2ACSYCQNy5mftueGwXiavwX9SqT5GmQJLtbjLSHQQsRHKjEwsNdSzHncrK6G54wy",
  "key2": "aWDbtFWQBrLyFjBmHpeBDb6x4yoJEUHbbdDVapYiSFMPGZGnyeDprAQLJTy3WpERkcvNggzZsL6p1majHpvFHLy",
  "key3": "4zT3Q9yp9VMaeuVUmwKZFD2EjaH4ThJCLFpbiDVP3e5Ln9WohU51bn4Dfxzx7TtyS3k2htwsKwsmom65PVZ7cCAo",
  "key4": "Fo7EZ4uGieJysoNr62C5TLKYk4STNEDm98j96JzJpCTayLqxGwXJaHXQTRw2euSbg3sivfa38eWD5k7fED5uEto",
  "key5": "2nJRzszWGjchcA4CQEAYxM3T8bfj9rwykiGS7cte1N2kCXPui9ko4f5xwMeZeQkq8cnGjVbvPGAf5oZnv3HnFPBi",
  "key6": "61p4d6V5SQHhWXb7GM9FWLPTcFp9YqyuZJ7b2UsJ9HuY3qvYK89H1g7Xn443L75ebfYx1WYtsVpiC48xtZEf6BpL",
  "key7": "438H3grJ8bL8v2aQahMg4DeanVXJPqKFU38SZm7wewAgwukQKEPcK1Sef2jbWf4GBcQggruWNi3MpHT5FzzsJ95v",
  "key8": "2opttZoPZyuUtECpbBxZhQzvouHZGE5aAqYVBMLWBykEUWYHXqLmYnRoD75f9aMKmGfB2jaVQ5RMp1zEscN8E8pB",
  "key9": "4fbQzzoTxE7KLWASusstuEsnWh9ib64wmTCSvZcw1QnBCqLDyv2JSx6KqddQkhEyhyCmyKGxG3Epdx2Bqkb67hSR",
  "key10": "gn4M8LtFaPMB6xQNV9KDmPQswiKKR9zkqLL2XH6MaS1A39eAeLuTQENa4RPc353fAVgooLkpEFgVu9sZt5gGxsb",
  "key11": "2v1PJAzFaKqZUB1icqNfvhSVFzhpxXpYaF4zowxYxXzwzCwxZKw2Brr3wFwZC1qZHsajTwtvKrnEHEVRzZY15StV",
  "key12": "NCjDFmr33K21CzTnGsTsUVePdFi9rag84Jwe8v5LJ4SZmt2XnoDWG5fd3rdYgBqkYHA81oKfKP94fuNUiwmM2de",
  "key13": "RG7MMjqo49FYfUT9VyD5EeijUfLL1gQN7Xrd1EHbucW5T615RYYejaUgW8eZD2bMNUoXJui7fKbCrybabW8nb1F",
  "key14": "4ycykPtq4vNnGMMfx1HqsAJfaUZYzCuowdDXM3T3ohpP1hYoZ1XGUVKXgPJpHwuquARdm3TRsJ5NHkdvBaf5kPL3",
  "key15": "4WfZzD6FdqdbgTQ6LWfaztyUgWXcGb9S1RQRB8UeXkX627HXEdk2w5htZBPvWwo9eKyLmPiPx3tQBaauXF1WgoG",
  "key16": "8r7cvSDPvakA5eoD2FKwQfh4CUyXt3tUd15amy7LtDfvv4L85HmeZRBkH56Vc2h3vtCrWYNQ7TnRgeVzjTv8ayE",
  "key17": "EkwpFT3fAPUZ64iSfWXddikC62hcjQLrFVWcAP4ytNTePS4tdNfYGWpNQZXDga99HY2zyvyxVj43Zfpt6p7HaBw",
  "key18": "3SFcLiaDhkX5hGtcJqqE6kwYyrGp1GZP6qEWMb2o1SRKVuBtLpBbxM2jAhQq1coecijQvxsa3h8zeQiCLtMoap7x",
  "key19": "2sSbUnXFjrMsAhHbjRKwkSFQ2jqC7hLVNFbhWyurPdCKn22axpxTTfd1AVRLka583AyJwcA7LuimyjKAHJkPGpp7",
  "key20": "3RxRFGDLdrDa8uy9JjGtJWpAsfUt4VNfFETmsD1Wi9TyuPjMZjEcocVv6AeY5Box89riuetyuANCCHhuX2Cy5gkU",
  "key21": "g78e5sj91HBHZWHyXpakqoAqbzfTk26Pqrg51W7KF7NGd88VTCgCKN8m1ZSX7heVAtdHiMQYdNwrVXyV3ZGUePB",
  "key22": "iT86YU6M3vySgzUfJvn15qb7yzPZNvA4y6c5e8zad1c2CpnapvJc3Q9wz4qqD7dP4zidNtE84zLUYU1WgnnCGhX",
  "key23": "41PwgrKGNMHMx4YtwkYwCdE2E7FydApwAMSDyBZZCjBoBCqpPHvAPUaLCwfK23uyGLWX6UJXXjWTNH7YJn6wa4UC",
  "key24": "5KhHcsrUZxFRjU3auzuSAxB9qkRjaTAD44VrvpQaEuBnyLMARmrg4UxEaqjKxkvpRfpTGqV7eijDSCKFagSsiRqC",
  "key25": "3EJrZgvb3tZXyGvTQVimzWqeC6LEMBVmadBzY6kDzipL6JzryChT8vmgvHk5q4LktY6AaGP4w1hByYaeXTMGhzEB",
  "key26": "LWx6mhdTUK9vbPjj7WUGYj4DXGZgaMtXwUeXVZVn8BY5WqU7w2jquJCGg61iYRJkRuaUA3wj42GbqibcM8X4zig",
  "key27": "5i6eHhH5S8XkB4X6J2j9CKqPFmvdzXY8qtnxV1SStgWsYA5b2BYoE8TwVH8dCXSvWNaVyjDmSCVVNyjMt6yB5UUa",
  "key28": "3istVUetcmVFRzgv9eJRHT8dXMQkz33nryYUxDHu92Tf56SE7mx7yX9YPktJBcf96FCSDiQkbMPHGDLfssWcXLUw",
  "key29": "5GnKy4vTf6qHujivKENUya3xX58TtYtZ2FnmnrB2U4xoWe3TmXD1avXQxrByLpnCdAiM2e6S3uWUBtyxSUFrtcAD",
  "key30": "47CnERZ74BfixfJvvQ4DriK2Fh954cm3Z5MF2rBFfX3Eh74qCw1F4nEKRz9LTuucnCWXNmBPMrppdJsPcMxQE7ZV",
  "key31": "2eCCq7XiL7hYV3sfRWUH6uoZrXP2oLJexhnwfTrJsbwFwUdofm9tS1nj3LqqA7u3F2jhWELzrq1VVW6Y2HCF44xc",
  "key32": "2d7su1xumYuP9WUMYF8oFVotuf3DpiDBVSMrCqJPv5Ldi7j5hsSX8r2pwNftPCu6QH7kApUhjiA9y4D61nWPQEFX",
  "key33": "of8yCeDbAC5ujvrWCtXnsSP4u4XQrpVKUtJqiGqP4osniXAe5bH73ChCSXQTYmoMi8WrkrRLi6exCA6kQvbaFuv",
  "key34": "3NpL3okM189T8o36G5bWPKTybfGf5tGjkzcMLC4NFQ3KSiDWYWt3vggLTxcGDWXYaL8Me92du9ubeRBGMDfYnz7J",
  "key35": "284J7mmyNiPyNSHECkfksTYQHPqCkpSokrnFMyss7N7B7LXkPjHt7bjwoUcp8F35jXTarhXv6jstaBmkNzPx7rEd",
  "key36": "23rEg1ouBtJApJJhTZmdgfWFoDT2X3A2rwRuScVVp28bkTQcREPJoKoTyrqqBWNshdmxTdP8t5UmZezurcgWohPx",
  "key37": "57gCgPjEUAx7pzTPCWZwij3swnhrqqZTSw6jCPZVK6jHtVTkjjD6pdvARQW5oxBs9kjSxsdwmnFmTG65MjVdhMxX",
  "key38": "2wijtmMaP5YXnppoiug69KnnNkph5YAuzkx15FSztzdQ3SGSVTJYzRfVreb8A1Evv37Foor9qx1JYGgPht2YN2yt",
  "key39": "9CU2JD6oBUBepkPsdCAyokkbHdv2Nbaeibb85UbaN5YJSPApXJJPRMuMJBcMNUgdKiqA5hY7o1WR4GEjBJoDyUz"
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
