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
    "21f5H2LuZfAuup5WY6FyQRoJ465psXV1wdkbABoEycPHGFcsTAG5tm4TCm2uqARu1qFi9hvD722tFL325C8hnuER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66UwsWAz8V22GnhoAE5ePfb9NoCPrkmoYFxy51fDSugTuVotrkSyevvPgURynURv6fYV8juhCszVqJrshEPNjCRa",
  "key1": "353Hh7TDYTUEk5GZ4f6iktKL8TxWMeHojvvNMT9Qw8pJsneVDWbMwXfKSEMy65DdwBWsY4AEQ3wxdmhdQnUzEn1u",
  "key2": "5NSpcNNiwKWJK758ttTx8gHv7ji9EPcQxfEkB2WfNjXhvjbsLxXfjiACSZ61626pLodi6bUB51MeGubFUmfy3H1S",
  "key3": "49Pm33jg1RoieG4U1ae3khkP8EzRCy1NjLcDL22wvEbUBDMGZ2GJxBExeTzHuF8Td7hUUzR8owGxdzLzn3RK5Tkw",
  "key4": "5bovGbG2ZfvFUcZ2nyGLiQnH6SoAWtuSTTtR79XuCH8meAG449s4m1FgqRmdgsvBcKj9PGGBYH4eTsgMXX9uH8Ym",
  "key5": "5qPwVwARJBqAma68nXGPyQtbf28MnM4bSEbkoZCAJvsQfxKBht9RgDfqaEc5tLkkkH3nFjWYdRSpQdWQceat2xsn",
  "key6": "5S7V7B4mxD9gfcpc1xeb2oeH6CP2RLWRsU6zBLRnkXCSJ4ksAu2SfHTmHSoBkvmnCBbRG5hh2f3Y72tHQbioTY1s",
  "key7": "42yWDoBHmwnuPegbDKswEbrNz8S6z1nUxK7y2PaiKpvDX2zp8M2LexnAx2FgZMmpNHnMksVpBH168L7qYw28YFHw",
  "key8": "26oAULS8yooTZUQHZrHJD1nDboUR36krz3njMJPX4cbhGF8mtafUh68CeLRLCw1ERnQmwrk4ey2dhb5aTKRTvkPp",
  "key9": "5pDL28KPT1DXbSFUyywdmPiPzbFStFxgUrUP66tpxFKMf9W2ECxqHVzF8qqjPeAy7Vf3FojJJgwzwToXeQnqCGML",
  "key10": "5skw8XecggKtJ4dEX4Ah9j4KjWM2Pr1ggrkDGBFeBm8iwoGYuDYVsR5iX1eApth2onXojNLXaNV3q3QaVrtFaVq6",
  "key11": "3iJ7n1ubakynjkEwHPTHuJ8vRqoc9AV7Z9SzorSNZ6zgSmatGnQS57hzsD4rvpTuHXkXHtAvrCabMNDAMW1WLtaH",
  "key12": "5Ha6gyqwoZdzaZwYZvN1JqNhbiEivgDfkFGkdaaCn1doHFNFLAM6zE4g13QzJ6T5Hhzf2vMnjTxptpfQagmFeyLf",
  "key13": "3tva42avndaGooBwTeNpLa98w5mLjTKqKqjwrZW22ARCn52DR1PShFG2CLtVkAnccNGm1VdaLWeD81DJgW2iN8dh",
  "key14": "3GyxiLXdrTFUhBKpsDoCR7bgc1iuf9kDHq7mVrcx3JpE5D18yZfRobKYmbrGVEPCLvXWpq33ySdoWnytjYf97koh",
  "key15": "3DuYpTqrGEekNhzYB4TjR2jSmLXiay8yzr8pwQnRYRUeYjAJ6afMXx8bDGgTYpwSFitFzymdEoX9aD8M7AqPDVx8",
  "key16": "5feCd8bHdjBPrydRdVFBpTyvTUofeuv6U6BY75rRSVWAmrCD4CHTL1oa9RdVfs5zK9EFbuVf91ghWxG2iEB1yrVZ",
  "key17": "24Bi7QiM4bNJBiG52NWzvUFFihconsunBd6o5xzkqfDPcmVTkpxFbqVcSiaoRyfwE2fsNwyhuPwkHybmC5irLHfW",
  "key18": "2xfQQUa4prebEHFiRvSDAEMm4QCdDZ9gqP3Pi7GMRLBMJ7gEs1Lxa3VVPx61Y1k1JruVqsF9vSSQXUUdm5GqnxrA",
  "key19": "5MQmTYWc2HFCUiiCN2QtQ2pV3eYr6S65Hx3CAnwPa4dpvprGugUQmheZxGA48NBeazvoDUZjPc6ZiJvztD1tH7ZS",
  "key20": "22TSsr1DQ4Ht4HyK4LDReefpPzocwWqrowhgMkeT8RHYfxsNqsFga1fu1DoAVc89j1py3eWkPTF31acMAWop9HRU",
  "key21": "2iueom3C4R5VDUVRrF1yRgx3sc4kuKWRK74a98YfXJxwkwNSKDGfu52QYhn2XfZf1keVBUxNTabtvEg4srTepQd2",
  "key22": "63WQ12i47srgwVBNUCQ62Mk6FEUxEGE5Z1zwUHBVb84Li3KePR2mpAZHZnxs75oKTpEuPxhvqCNdLxnEgMeyVW5B",
  "key23": "Chkzi2QUqBtdCgTFhzbhp62dTQ83SfpyVPxr1E2PhuovawFWcGVu5wJyG8U97wMzkBEmdAVb5HBFqeLttHxLMbq",
  "key24": "463dhCgUd5xm7HfqRgYT4xGVdMJrxPpFjE3pnNenBH2gmUw5twDvR5nvtwNbbPzUCbYfjHkWr8Yz9GfJDcUA6nfY",
  "key25": "4o8wVwm5fTFQSLMHsddhuEwFTSnY7bBfQ4gHpRJAmX46aAfSEYQ4m4dVRAUSFaErfEV25PDtr4NtSsvKf7noAy2b",
  "key26": "JuPHnG5RmiZcnk4KtAxUaetUMe8ddLghmBDfzie5e6tqo8PziuhfDwTxkZVVciPQ644Ve7y15rd6rSmTGrcsq13",
  "key27": "LwFJBqTM4Dq56hq94zR4AA9wyTn38p5VNoUv5ZY9LMBx9CzXFpNxLMhxRymofRALxW82sjKpEUnQNbxXXs6CuqG",
  "key28": "3wL9KhBXxB3kzjjzupbERGaZ5LvsdRHPacAGJGPRuECt4hvwdV5cVouX65tFqHrnGTR27TeAnPxFbBvZ8vochY1s",
  "key29": "2CEAGgpM2yjEBKMzJyD5v9Nr1zd65xWPCKWC5mN3U569yEMAXUbNpFoLvtdwRF36zBGry4AyTy2ubxR8GEBtDzK9",
  "key30": "5pd8utjvbfFoPfUeWsz3svSqmaC2xQzjZCQkoWQ5wLv86tHkWAW8yAhCUtdJnWZere9VsR8wwJuaWdz5fFo21peL",
  "key31": "29694mWgWxUNR3ERfSZq2B9kxHSPEnzvrCdjGCrF3CB1WhG6jAQrB9oNbwWMrNKE3AUvLCzT4X4wnKDabxYrnRao",
  "key32": "3WJ5dJgaKKTPD3WsFdmKxMYQz4tpT1ZLYUeqyfmy62prfkfdfFKuDFEuv1Yax9xDrrAeimA25v1vp3jMqx57sUm9",
  "key33": "5ncD1tonyJZqm9KN5UaFAEySxmrixvmUKPbYBFb6eYiNuqGnyZ56PG861imrZoQppk1gQoVSKBtofM8xoVnjfZmR",
  "key34": "2uUSCopSDNWYpoujGdgYBtEFeQmSpmBZwvZS75DPqFsmPUKZ1uckwvtATJCuDfEYYL2sWwUsGqCne12okuhvDDV6",
  "key35": "5MrWMx1FcXSSbbBcgomT8dosnmac6qsoc6WxSyvuUQ5jBb2gnaLfNgeJTMt3dn6CykX5xjvZLGGVh8gDN3VxZyq1",
  "key36": "511PoQ7rYzU7NuKopJDX6nV99mnamt1mvcsc5CHqDKLwnFsLxVdYGkhFHgsjbGxvVSjNyHr5bKttttD6utSN7W8n",
  "key37": "5gQAYbwWiKbq2NDGMHZtChHKfJBJV4fCL7wJp1eDVjrqChjo8AnKkhsD4U8oB8y3a8jTZRNiputwMXFBHrU4A7RR",
  "key38": "3jHL3VoszF7WFM3hZ2bjADnbCGqbMRkt3FzrCzMCWGDw3qfbYvxNLHvPc9RbLSWsVZdjppEtawSzYLz6y83gTJcj",
  "key39": "hPQLDFfuiEm8QddeZwsvaGKMKekXXr6LTYVQ1NTPZu1TApQMvp9pdbwuW2E7u1eKVt7YS19nkqz43YrxhgYaX1a",
  "key40": "52kP5uNbCkN5a4VnvxRXSjCexavPFkEiHyEmmdDRjYpfQWwLVoAhewj7mUUJtzSdK9zZvWJeFSse6vH24rYZDdQs",
  "key41": "5nfCgj5hHNujSXzqagPqciybaECViEgZ6bigdNKMr1kuTGFwr3FJEQzEpdyWZyEi1V8b97tdMVYVeKNJyk7pKo46",
  "key42": "3oJER1n6LfxyAhhGQyRXYNnn8fdxmB4om77MHS8BV4XDDyvto1F6quJacg8gZVeGXgB6sCSr43cqXV6Z6xGLiRWy"
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
