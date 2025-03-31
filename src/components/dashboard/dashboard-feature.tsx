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
    "674B9SXENwekv98RjWRgxSd5HUMcqYoAVxc83VHY7h9w6ULZtVt2XLZaAj27NJerEfTGnpregquD1jzUtwuzeWSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XMLqhgU6Qnxc88KFaGQmEMXvwRQHXBXxGtDtseBc7ZDjWtj3XJErLwakLVkyRvCYAqyjfYBUYxsP3t2AtKYWMoL",
  "key1": "2FkeaAFkGkasn16Q6jtgoqY9JkV54ikCx3zCFM69k4uwaYKMMmj3hqBFCQpUvBAViioTcsSAk9kVhCy7KYivRiYA",
  "key2": "5CRQ5XHx8iNrLzeZ8brv8JenqzMJqqRuzZniMpb5RN6pD1Gd2Dwd7eBnNQq5b2PZD7DD7iSVbNN5o7DDbkveMjcP",
  "key3": "i8yJZea9saF1fTj55hVuR3mp1CpfCWWbAB9fAPDquFhyPR93a2r4bYMNigMU2WnkVuvvhJVgmxnUgtLHzaD4SvK",
  "key4": "4UXZmSqVNib89B46dCozwJupSvZk2yFdzNb5HTNemprsZ266n2o6bDbMdQt9cH19G7aUkmpTLSVvVvxyPGxzdSBx",
  "key5": "4MxTzm36UKMfNFntY5yrVjf2oTVNDeU6hH8qmJygV9oeMsPWoQfMJutequv8bCmYexyMqirfbxRDDXkBonu8N4F7",
  "key6": "4MayCPEzHkacHqjnbGbCKXYr2yNY3uuRWBDHci2W2SvY7KVtSHN5PHMXJr4Kk4KQXTKaMvSkbnWr65LJvuaE9a9A",
  "key7": "28XdetwKvP4m1J79keQ6Ma95xBwvVFYpQsEAAE4KuVgsBbr7fdh1XTbCaufpM8SXWZe9KsZ3s8zJDyHXqKwSE7je",
  "key8": "FjRP7yH9JUx4nuk6ASXhhzs7McWR3U3yj8VWs3HzLBBcm2pFoHPQXVDZzjKLKfAqmBJspVuuB15ZvivLUrpTea9",
  "key9": "5WzWodMHdRBeBWSwiJYNrF4Vvq8NVVmpL4JjwhvKXBbA8KQ5cCLND6DHjC4q9FATcrvFJ1sCHTvAmvVQXm8FptG5",
  "key10": "sXsDFRSBsQuKgJ1edGF9QmD8idqKc5cunWJkdajr86Lh9bM1sF9DFDYaqBW6j6SpVDXMmH3NAmLLqQBqPCLfDCr",
  "key11": "5kAHdfGHSxyXxWKKCEdNLAgKbLBAH6Ly43MLRyHygeFdMACDJjmA66NK8sF41MxQyHFZPbiNgfz6m6L8nQxEwjRm",
  "key12": "5b5sZ1f74m5tpXZj3z7T2mB9GM2kxQAgaQvz14U5w7b4dioQr8b6mVmwJPgxSQc9wRjAPXGRMXw8ntykx5Rea7yC",
  "key13": "2yN94eaE8hFvGkcPigCVYwKpGwBGGfKD9TbY1GbFNpVtJ3JSH8VwqV4YVAP2FpWvPYQ9PJrJBBVcFCsGcCqzSS3q",
  "key14": "4MkXJgoerJtnDNRBEct5hSHG9j5iNiPhTrdJaxSH5CM4kzGPe4umwotwJmxiLcTtJMHp3wbFqwcCTmuQz2rCzRvJ",
  "key15": "4kMzWms4cSXw5iSAE2m7QfSiaZfequHm1Y9ArZWZwNYYneGvSsqdVESV49F1Cyv5peLmbVPd6q55vQfAfbtKTXdc",
  "key16": "5vrxe3PbKo3vrTDG1GkwUhBfjqhu5tArpGTwg67EVgoEuXnFAbA8dNsp47oCwpdkw7XNKVTb49mo6dAxCoH5wtc3",
  "key17": "2AUp3xAg9iurMGBaDRyacXs3wnqjZYYngPtMsj4aoaazuBhy6DtAb39sbEEubx598DA3ubhvc4vM49YhMr9rWDCc",
  "key18": "UwdAJwdutAG42pwwaHecFbDXmdKGPdG8UTp2o6WpJYM2NRrsySzL2XyijgPAQ3qJuPK4DtBauqC8mwESZTM119b",
  "key19": "4C6cf19QfM6XYCr1agCCASY16uG9SBKje1JwzL9K4ua21jy1DRa1L722YztAbdgih7RPM1k9xsiH3qeEs4faesq4",
  "key20": "5VvnnnQ9pTyp93uqQwqtRcReLx66ZKcGg3uGf6EpNxCe7t1VYoZuvVNKEC6RFVKyvkxHwaecQXg1LuTEemWF258G",
  "key21": "VpDp3tDyame5qUCDHayiEhVPb4a5pW8p4bhN5NGGRUeSvxjr6ayD3WDACt3UB3VbiTt72VBnJ9WhCEj618jMfTi",
  "key22": "22MbmtERrcjJbVtJuiJkwM5cjMdg3zo5v8o4aKG3Xt4WkSe91UGtXKd9H73wb6aa27EsGiPDZRxE8X5CMqdN7YZp",
  "key23": "3XnD3Wfat8iLndapLoiZQg6uug5FDnVJAb42kDoyN2UZJDwjxoECKtHywAEsdarKYuzyHJ4ypvit8PNHaAXL56KB",
  "key24": "MMSWhEMMTx7JEKkJbQ4Rjd8ojFdr6AsCzwmtyfHXwhCUvrkp3eWANtG1P8o8eQZvaA7PwYwSkSb3Wf86tTqL8wW",
  "key25": "5BvG61ByhFBdenPoya1DVmZsdH4tdRghWhbAAoq5K3ak9y48RgHcJs2W3pRdFnYBFc5G1hAn2Fa4UTs7t22BSNLZ",
  "key26": "29sHMWakcqwTbvrxWSGPoFhFLeFDRPM1coQ1fByTaSaLLnPErfLc3ighSRX39edvZ12WDCc3WC4QTJAriYNJGXTY",
  "key27": "56QnYeGGXV2xAPed22pfkmdc5k3PMMuyCeNCHPPaFAWzrCm3hTYgt8tyzAuRnQQxJHaPMvRGdJgHEoNnzjjZdb5q",
  "key28": "3sz1vYrerMp4PbJKWYXGQNwuuWFrFDXk9ymznT81DjH11r7EDPNFg2efxGcL3n9AX4AZY9kPAbJX6WHvdEf2EKSD",
  "key29": "5UX69MpQ6monGxfs71yeT2w2RihRSuAskjDUj3L2NKqpVFjCYzJGLQExwnBPZXf5Zss7hx1EtUrzG4vrQcCXBcJC"
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
