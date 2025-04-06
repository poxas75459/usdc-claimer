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
    "2FwtsrHX3X73kpvijqVE83U4tJfGc3MeASXwbdNLKC4GtdQBJ3XvvRd2Rbzswo8rd89kXrZ8F5wGveBaXn4uiexu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LL4FDuoSjHe9HTziFmR4z3ftzRhgu9Bp52Bqec2XhPFajFDyqMGXUj9rGDFUQeHGnmzHfW9xGYQstYsqDs5RriH",
  "key1": "66e5j2UxLCTT8TyXZw7gma1iLEuSPf8uSVPQfeCn6MRvSiNiL8CXbG9qcwmhMZZmoE5i4UEYog1vC6hHdbJ7TuPh",
  "key2": "45TsZa3ezduCrDBeSNjWyUT7bhSWxMhu5zAPdWNMivT8CS6fusFAQqNAju2jmYs4tiN3ixvjTKAUYRpdCLZSB8st",
  "key3": "cRjmmpY6YrzXKQn6ZZFxicfDrbu7CNf4xNJAG2QXKzCM39Avpgaui98zLRoz57XvLdBnCSPvLQzj1utp4BwdXva",
  "key4": "5erLga2mSmiVMvuR1inmH9k8vETsDoHUNTaECiAGeUPmL4J8SmWCrV16GvtHCCYC93eFZ926MJGZzXz5b3gYjY5X",
  "key5": "389aZu6SDnBEssu17HYSz6TiDBcVCErSw7izZJg79Az7JA51jy5xoH3juuwuBTUaC6JT5RnJWd44DAQH6SucCse1",
  "key6": "3WLpM4rMxSvTqM6ojkPY5fbqqhRus4sdsKpxAy75uzToVgy1hE46UyygscncaddXPJqfWFZd8Fh8LcRDv1grz3y5",
  "key7": "2Wy682Hjv91fTeLBLCi983T1gU8dxCSjaLZmbJx1aXWND6J82RDKgTGEhHtz7pju3CGZczemoR2vCfBXoQ4b3S2S",
  "key8": "rKUJh8ujGgJeK7NYoTXsq4fJ2TPCL1yJD2wEAYrt9PqHLVczgxgkf615nEu7w8HQvfGhprR7G6LAXNH2syjZmJt",
  "key9": "296iX5n8XqjuHLn7AHtU9wJWeYoLV9CCpjKS5pLstPQJSuq8w684hSnhSYyML7dx95xHF6kf1Drsyk7ReUr6RhCu",
  "key10": "2dRy2uZp9Ki8KELbw4JUpiLHEribsfE3joPfdTms3NDLh8ZaLUoBHin1DWRVMz72z9P4zZRnJru2az765bU9bw5v",
  "key11": "2weA37M7iaypUfcFXhFEtbhdjkA5KpPUsHWkYubRPPmDF8ShE46BXXsKYaN7SarpxJWLbbFxtSrPXcPohfAGi6zw",
  "key12": "65v3QkjTv6zxKPcxBXfaGt75EUBeVCoV7yyeUZEy85y7k7riW5DRxAw23ViENHq1hHX4c5FG5XgXsyEVJFKSBQPw",
  "key13": "4e3b66reGjNGffL8Meoyz1riAXKGMbQg7zqpNJHt2yU1ucHgFgWFDMgVaxWCkbRYMZEi2HhBix69SAH8J3rh5FZ",
  "key14": "3ZRaWwLMe86DMhsF5KndT4zcNMQ3cjUTUbZhWAaexrhXAav3dXSYqvChUmH2cq439fbgULPpozvCH5CZBcbGimDi",
  "key15": "v7HPpSa4KfzUJAa2mjXDXGCZNMnGu5ZBcRhVcNpfkT5gYE2xoL9gv1nfFUxqzLwQax6rqRKViy8AX7dUS2Xs44h",
  "key16": "5dtDbvD3XcxT2Eu4o68a4mgWKedw5EhMndnmRTWcrwpKQFgSg8dtWaDtfkmAjaPMeuVgyYzF87A1boMvmgYNXyQe",
  "key17": "UkHWrmq44mM4dLXbWZLQF9ttYxhRVLV8zfpyRCed7xCQHFT4d14tQ9AcwU5KPJiZ5Mea92SfbHJp48dGju6a2B5",
  "key18": "5d97kdnriopSqvkraXfrroshhfiXGyfC3EWRifkYdtFDoJJKAgwWbPvjExi7RvDQs34Vs4m2wWBsqZ3uuV9q8nAH",
  "key19": "25KNdsoCz1aBhDFCsbCD3KSVTR2S6581H4obka3nGcaoPchiMWXAsFLikaFVD7k1z2p8tkyXKWtAKa4Lw6KFmmUh",
  "key20": "5z67LjUEYyd34AncbbQXswJj1hdimB57STrrEbbaQGDbyx8bdD1t2YHFEyrnx1fCixE9j7oCaLwWT2soMDRSLKDt",
  "key21": "36DyYLK9YJE6oRZtocadBGdsPa7jHuhcNsAJaH2fyQZYGiWi5QNUpMifbobydH6JuWJxn5pEcsFefxUeoV3M4ocw",
  "key22": "3XsXNwaJTJ8USBgBN4pHPFWyYLGRVeXuZrzhErun5pb9XLbPfYRiu65KUVUCKv4gPDjc9wacV2s6wRKVjL4vTko2",
  "key23": "reA6NMcuK18FMMSS73aWqeniBXVgagevzi1LN6yoQ6SF6EKtZ4N6AeiPgczG8csGTMm87CbyMXrYmwQBASU1j3J",
  "key24": "3bjmvbdSPynZ7ALPyh8nRuWWP3MK2xwyGBf21sbVfSRh3VqiTgR4xNbvFvBoMxcN7UetiMjqxut4YwAWP78a9UtM",
  "key25": "qkcPA2pyuTVZxBWD8qraNh2bmp2f275PoVPerMqv5P91zr6ptJvn5AX9GPQMV5jSfPMX8XZ3kjbzJVfiLnzRxoS"
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
