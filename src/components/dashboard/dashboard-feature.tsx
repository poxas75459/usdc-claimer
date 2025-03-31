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
    "Uyi3THRKENPLoEquFBFVyLJnZ7Kia5hEqcKFEqygsK6ixzJF1MqH7d8ytpHDafPhfq8qxvrCnTz3TXsyTiXjS5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEtoFB1Z2YdwCeVnKNFQP8VkJnDBchwtgxffhAyb8VvBNf73mxUy4bEFvDpwDufRbzgQXx55zdJ4uniq3zoGz6w",
  "key1": "5huC4MbHdXXzq8Jn6EYBY5aqV9ezhweLVLxHZxYnNcJs96NLEbQWXGj33WNB9PJpFUQsPdpvkTprxD7NqMWcTexY",
  "key2": "ANyzA4EjK5VwPMi576BihoAgvAAfJACXHYsnhqosDfPd3wPSsgLvP6QTkWUqwLcw1EN115hC5exzyqLdcduyE5J",
  "key3": "ReZgjDfpWHmbPXmoHjDspYbRiMmPB5XaoY7bZU9J4pxWKcFgCLaoWqqAia7yCCh6GbrhxJfCw3ZRzvvp73x1seZ",
  "key4": "5zaUZokMqzTxUte45eVaBn4mt4ZzPE28jnEEwMB4m5o5FgfGZpXtjtaFGcuWuQgD7oyS9jeqPKagHmpTxvwdxYUc",
  "key5": "5Ucyq59P8ZB7iuMPhyED9zHKzJs3LyaEh4muuVHZB3mKBaD1rrSn3Vz5ckrqBp2sdvwRZYiQM7wcMiRXtFDZ6GFw",
  "key6": "ghnHkzRS3YqY7vVmdaK5TJN15qjECeuQaEAifNhzYi1KAbfZU55Kj77TRP47Yndkc9KMUWyyj1VEPdLbjyqe1Br",
  "key7": "6EJseVGk1pcjHVFjLySbfKiSvt4Q8Uuu1UiVS2tNP8haJCDYpYg9PMACyGAsJXidmKnP3GqazFA1edK9XSGMuxE",
  "key8": "2B4TeonSJyCunvwhfFEGTX2iCf9KCLrRWvDrMYXbqQCPgZaNWARwta4PAqJDabwSpfFJoebD98H1LYcwJJjhw7ry",
  "key9": "dnAd8SSGfLRoygB2wukCdGG7BLSUS1dMLounMQ2K85nF3mQDa68ixryNUPx48zqy8T98YbChvAqZ63SZqRiUCmi",
  "key10": "628A3nxo1aAHZeveiV1yyVXu3AE8MySnid5QX1xdrtuWWBd6wwipERAQtVFEonFrywAjPkkZyfVxn21hWck8Hmwt",
  "key11": "zvWQUNd3qAraPkmQ1xnbsqbCSztTHYTN44x9qyzEnGvjWWjurawDmMPdHVEVfCfr7f2V5GrsbhDYv8gEGxPpf5C",
  "key12": "3wgAVSDHnH6myRjqgth2j7pF4uWcSeGPYEJuJoFGuGtgEQ35kgH79ij6KSXWyhg5YY3pBqqS1KTBCr3rNdxn69Gp",
  "key13": "4WCqM6vDBUvKRrFPe1VjttGXCfejDNmS3JRjbBpoDtTnf7hQLyNod3rV5XqPckAFLMzaHZK7Lj6MexBVGpEGbbQw",
  "key14": "3NQbhUE7Ds9hTkebD2ERKMJKsdY5HEgFDUEkrHyr8V1XFX3PR575rcrgDxCnojFEDQKbVibYipo9vWEdi363Wpmz",
  "key15": "2FUoDiwCj46H1gYxDP1rsY65aiyvCCc3wRJBdreZ5rMTTwaCqkPwfStCGbfEo4jt5EV9Dx67rPszZWNyakn1t6qf",
  "key16": "3EJx947gPY55q1XhnUmE7eRukGcVDD4KY8eL2wm7AqVPLsrNK2n6YxmUCoYYPgHSEnkM6kPRxSqTVh73AQ9h9MjU",
  "key17": "4AoVuh1pG2d3JQqhd53LgFDw6MRGknYzFguV9ZBwKpTbs2em9ubp9CHxGVbBfkVj8ycyvQBpGTwAhRJPZEfup5UT",
  "key18": "3VHzvcJ28RLRjKDH5Y3MuoKCThTknA6ey6dTkzwUFUH1Vk8dQTANwRbYiyqEJHfJBGF7r8P9hmiBRaxf9fxhYVh",
  "key19": "42B75yD3J1qXDgsYjRRgv7vrS8yVSCLFSFWaiLdhyBQ4pqrQn4AVZ3AZkZjQEKgb3WFLGGv2batShrEzo6cd1aS2",
  "key20": "3WRKjzpXJnJfE1hUhMhrdcDLLzFjgqkL3XuaSmpyJyjA2drbpfmuh8fUMPmSs73uw2m9rQqZmQuRLhEYecr4gpEy",
  "key21": "49HmbR8bGogpcgCDYhP9HcNKPjHqj2dEhRitwaAwmiv4Lm48KrMzha4nchMDyFu7Mg5BFW6ADZ8SeuQFnGtwVG27",
  "key22": "3dcvh91c2YWstkpCMUwwaAkCGz9q5h2fSDWt879U7HbEnXKgK4rZFYngiVfz3m962tF692c9CFGmnyNw4Sw7M5JA",
  "key23": "2nkdXXAJ7R1kCcopQWs6vNiUxaj1gkKBC5uq9Gz1YiUyAcHsDWPm6LwPKwXppPrJc7eqaBXqZMe4EqFCpVPtCfcK",
  "key24": "VzUuEK64sxAFfa9vL9TH9A2DrnK7Xb92HdtyBGuhxN5TL9vdsmmr1bA8UmziYYrNo27s4FmQV8GdjCi9LVbHfgE",
  "key25": "5L9CbHJh7GQzeUf4xRRU2Hi9Q7befNiTvpRGnDm7aFHZqnoJ5RVdX1gXmvUMDWZKGBcuqbNikKoYJNpNM5w3gmtV",
  "key26": "3Kpr4dDXMPn8iTJjzhkyTTLkz3rXASkFaWsmbK3XQVdZ8igmaiWHwUG8K5gUCWejnw7BB4Tcdwh3VDZGTut7ZXH5",
  "key27": "26o2aGsv3SVdCvifuYVCX1Qmz3Fj64nf1MzJiDbn7W1wqWKfkzJyhHTGRrqAhUsFw5dXWQRHDKKQCGpaMcHixVAn",
  "key28": "1v9B7oqtoqpfwmiEmQwbsi9V1nnobXGNh1unHvc5wph8WqRidEpaSLCACxTwL24q3QwwZZoD7dLLRTL2Bxwwavy"
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
