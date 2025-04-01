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
    "52Shu9QcwZDWaqKUPWKj6GQ3wGQNgw5gmSktK3aCch4tjn1BNsrD1w9nhRXY8DvE44Qjkawnzayx4w5hqfypeT9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gr9yAtfRmmucfDM1muTBB4ktKbnGRey79skwvubnniWGCdmcgFjFk7ZeAiHKEWCMdY1K8XMj8GDvDFdVY93s5Li",
  "key1": "2mhFvPDFZEnryj4obZ7koDXgbWyqsNheGEV1kfoKarTSJof9tSZ7caVZfotgd9RndEzDNYxvv1hvh6WPXHFHMxNG",
  "key2": "1GdBKp8dUqGBHDxNJkLxsxHzxevCEzVW54DYBQC4wdS9PkAPouDbCKsntXypM6ZPmVC6P6g7k7AzNkrxJ9LBSTb",
  "key3": "3rNxLpDS5XMQkw8HWEvSWWFkinSiR3jo3CHXmHAjdmcLJD39F1csRMZP9feVcYuy5mrmfZ7uA5hWg6ZfQ6u8prcF",
  "key4": "5XfUaPJTdpQzZngvbGJS9xu5mK3waZEUR9Q3ktiZv5xJdvNSDrEB9eC3zVByFZwmt6AwptmdV9kRtndABqAMZ9m6",
  "key5": "2ZhAfJ8BqBTYtCtc1kp47Hw5JPu6YJxg3DB3H9KugcWnJj1kw7XrVchsMAVoWHtr9kaF7f8as3v3NUr7VtccmmRW",
  "key6": "23bCQf1ud4Cn5CoH7iBcY2HT1dNvapxCKZ3VAVdSjHLZqeDtkkzpKt98UoArNJjvHxkyz9YiAvKZDTpAKc1TBLmk",
  "key7": "5yV2BEeaA3LyTpfM97QMUXViKzB7qxgE61cnoyEL8apFEGceSZYLSwkokRzMstnnthEAc7PFaeKLdnEGu3mETxd2",
  "key8": "5QqrqML5PH45mKWeQ3Jzt32pZYiWgwVhhGLVZBdhfQ9Zr9rE5vdW1QZNFW4RgkU4qbYSVjKJxMxE5jEiggs1eqBM",
  "key9": "5goehD4iDTyZhxRnFhGWCtzp9phejh81fnR8KTsS4LjKRuyx3GMYmUk3sWm6voGmZHoVt7s1AzArLU5DmCSi5jRm",
  "key10": "31d8GPFe4rBffVMNGiWZjy9vdKCSwqG7j1ukL7Z1xvu145QjYUBnaGeh31CbJFXnGDnJJGiJ5AJoXfk57bcSjv57",
  "key11": "4KqC4sAnwsj5VDAb2L39pxcobcZaYN61VX77FMHqmpjwChycNpEVWwKbCzAVhgAjK2HMe8gvaHMAadSbzv5dkAu1",
  "key12": "3m1ZgpxpNUBeu8J9AvjE7BGJqSvkGf8qHez2fN98Ryv7v6tLFuzAFhjogUW1WZt3LQknUdJScZHMPgUkXRMpCW4o",
  "key13": "tpsSXJgqpb4KTTbFn1ibopyVxaawfg9g3sFA4DKqkR7TDbmPPKMVzH6qB7FTcouZ4qWXPoYnVUWsZwpWY2sCDMx",
  "key14": "s4vjDbT2cqHU4v7VUJS2HynFjYTE7HXEt1FJP4WtgsD7raH8FonFqe9moMSRogqpp64wxHzVdfrPYUy1opbzmuQ",
  "key15": "2A6M1fxACCBf6bBUA7jstkLZaPYGSgk8kZi9oz7UieZuwEXDG2YU9SgzGRaY1jT8HCfaeckt7qLLR7PAC89CSzEC",
  "key16": "42S4VrmuzeHn5uqvedRSfNpZ2suksLkHrK1doTcJyvzpjzBPgUZA94Ui3x4CtBobuvrK54ryhqnP2E5doS8utXY3",
  "key17": "4NXyXdUAFWVP41brkwCrrKgwf9wDhowjn5JE49cENStEpJgUiwBzurcDntSnzjf9rjbFUFPBcGSviskkTGHtGkjd",
  "key18": "4yWNJhicxo8T3dTd92gAu3Mg3tttiH5bpUboAszxiXxkXiawKTCQgZAUx59F3NGx1UNhp7gZVWV6tQD41xyXkQ48",
  "key19": "263SnCPDmjtjNkMxzdJBX1xHfdS9TgW8kc9JehL49KSWHHeqMkbL6qXqJ5r4YpkkevpZFB7Gu8bnrms2z4YvquXt",
  "key20": "2D6NF4WfGjin8H2HKxBfBbJYnTvsepU2TK54z7M2iUfSxd7oxbDzdzJx8E3KX6aAyJShtfnBK4W8cc5aXTqPxxft",
  "key21": "4wLShp97q9k1BUqJvNoo2HKrYC76oDX91qM6cdUC2spTNRNpDaXiw9fYXSShFCFQv1tmVRUUehatHKZbueUQzEeM",
  "key22": "4WTnFi5Jrh87C9qN96rBuH7Fk15g1979mAaeforxn76sMcpehBqpWyorHhzjDnDf2NywVuL2jiNuur37xCc4hbni",
  "key23": "5GrJbPW79NiLd2fMytNF8H2SFzgxEGvXnC7yvX6sJbrXzZhpJUFimQPwNj4TkB82XJtXRKhajNj6pdYYf5J39Rnd",
  "key24": "4Vbfom573XPiuVtwfqCRvJhfEj1FkNPRiQiDDGRUGpML95Sog6AuttUf2UDCFGvjdXRQs7NF85hyn5Mo5x9Fj6aK",
  "key25": "M1iLa1J3yPh7fBvwC993dKndt8Fk5fS8ywfmvmVB7CRFjZEZX3TWDbmoAVibeBUrhsGUMLchLzp1KZ54TPaXgzE",
  "key26": "2UeRQmAFqGivLjPVi78jwMt5MBUGNKo1qw76znZf8HjQcVxiqKqjJssy1JW3A1wthockQ58yqg86hFgFukMiDVW3",
  "key27": "5PjDgKj9fLB2bhzr74VYyimNFgGh6hAW8cVw5bDKaRurKqvsF5htaF1SqDAXGXGxZBckwVE6jhTL2PUKwywPmgrj",
  "key28": "3UQJze1DzdiMQqBN87MnqjSeyNtLiChWYdpphC1FqpWk6SueDgt5eyK1rKW9SwPUoh4gDPkQEMMUfAQmxMamEXjz",
  "key29": "3UbFVVMrpxAouDKp8KcChqsvGBN1tVZsvpAmMKUM55jKy86mRpGcxYtbgXGAAV6b9pS2eoG1rz8oADr7fCniMjm1",
  "key30": "5h1TwP9UKWm51wgZF2SVKAvzboMv98Vnw2LuGSvx8yUaRG528U8RVscH6AuYUX82AFzQh4hfqRrXiNUHS1uj8aL1",
  "key31": "rV7KGC6smwNRXX1s5CsHVVtah7XsLdCbYU9yFVrjcmp4VBfcv1K1qHwUJevqdjbTtWMoaVJxafctwC4enC5YU9G",
  "key32": "2a4tgeaHazrAcmEaV8onSXeLgYDL9BQTiqtzXXnGL6Mn6vgmqPZzWrJudA1jGdpok96ghS1PxdnphSJNoKNysFqg",
  "key33": "5hLYKJfAHgjefYFYXNew4eiEWjtbtxw5NhSbUMLTD5uTi9Qj4bzDJwTUiBnKEAfmNPqgAf9pBT8PoeX5jrzF34vb"
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
