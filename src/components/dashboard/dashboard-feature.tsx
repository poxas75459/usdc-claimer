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
    "3AGqSERWvL2hGxSCABHTC2Mewi3cowQ72gCijdtyL4FxvtXh8JaaDy5zf8eKY8cBSt5Pfz7bNhiuLsUV8U2dqMis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oteoktSQ56sunkFBk18oqAQ2iAot66Sq7MK1kNY3yPuvd31b9X3R53Ja4SdubNucVN5EPFc42zYrgSo6GKJn98y",
  "key1": "swpTotzs8af8nv31MDHBA3Bchzp1DAUABzjfKPJvLxTPnWWURTPzYdzRYN3saWRUsuvwxfNkvZsgDm3MXBTcGri",
  "key2": "YJJF8EXec5Kxezuon6p2XKFB7gDa58Ukk5CSmaLUqAj1U8LoJQoUd9pNpPBV47ULFn8nVJ4YGNgrHgi3ZmQXJyo",
  "key3": "2uuJu9nAvnfRyhtW6RxFUns41tM6msy3dqF21om25Y1DQXFJGRqokeYfciPfX6kdyS1TxozEdy8MAMkSTyVcXsRc",
  "key4": "2vCvhKVdQHaaPL5ZEJbh1rM4C1yuaaahcfzFFVpHTwHpCH63FGvLWXhXYGfS5wKwryH6P2XApKPZGn71wWtub9gK",
  "key5": "33M4b6tDsqJaUBwxdyXsfHgYUt5wrvKhuPJjsgsx5uMVBgFQF6c9AGRrPqMpvz8bJpv6PzqebQZLMPxHpQ9Ee7bn",
  "key6": "2Dkq1vDnZyNxv2uxVu28QAnzjhyCgjJQJDBnyBuLPbzVXSW1B32M62WcMCRpaC95VQzkzf4fReRLR4P4Znvk1GCZ",
  "key7": "3h8DUyA58okd9AFYGgEowgHQ2s3QTpcvHs2NgPFbRdnTy5tub1ib5f6zY9UCLya9woqNbjBE2vMPr6bQe8AwWRvk",
  "key8": "4zBe1gjzgB8m1HMzrJxuwaWiA7srGEmnVZLymvNTrsBRemKG5wYfpCtjBa9ZSL9r9qErKm3yrSktj11Dx7NWs2u8",
  "key9": "3mivVPzCfwp8bgRHePSBJY9JwhHJjgRVTDgHeUGBWhumNP7iK5T387hkDHRQhJ9iWsYjcCgNbVL94Qp8EXeQVb4Y",
  "key10": "manazVyzSJ5VJ4SiQxAuTHwrRPRXKf6xWGW5dtkAVcAGKD1Jr7HPX3f7UiW9bvurk84EYTzUVnQkzMUVeA3j4Fe",
  "key11": "21Nr4gDveRvxKMgfwkkP12hb55SpDQcw8nrECxDUPnhGCZpVgP4DRJrscVnrcfaTRA5oW4JZ4pJeyTxLCCjrV3ns",
  "key12": "4727DWCNyRzvaWtwmbDDPdyk6sguQvX86BgA7hqU2FEFYpfRTzZYK3rDsdL5r1smfVvERxRCXmwBgnfvd4QGosvL",
  "key13": "VwCLPBYT8cnLBawmhHwR6wwGiwv8b1BTRGjdmC3hyRaE7sk67jnswezxKRpsqD7T3uoRwegCMWFhUgXD1aZKDcK",
  "key14": "5oC1mzcoX6u1hNQqhwjmcBm4xuWhtf8kSZsF7GbqvRD8oMRctQQVufoobZUwWT7sCXM6dQpKuNSrSswp4mG7yypY",
  "key15": "5u7TTtGxEBus9gDVCKmVwSiiabSWnkqWRB4c85VgEG5273oREDdEH2H38wmXkP7NvxUM2AMXFA6SaqJ1HaJ75b47",
  "key16": "3vNpaEeSRXeQgAddyTGWQyYLkaqu4DcVvAvwdDuVVUPDidhGUfTUxTNZVYcf5J6sSDnLJ1PQMtJssiznDEzpja1F",
  "key17": "5tXcjmsSE9UHHogZ7gkzgwNMMg7WaSToeU3h2kp32qBtURf75rj1LAVj3k5iNNPzwmaT5oK2rHeDmVMZDtT4Y5TW",
  "key18": "3H8pqqJVNcWCSFmdmuqsgMzN17usF4qTSMNZ8dNBAKfzPfftfhB3V5sGgBbZ6kS3K68G8fixtwCK88qXPDHJrveX",
  "key19": "4Ti6RuiAdcsPQAaZxRbT5ZCvETb4wdZkkf7FfyxenAHwRYQhq4BfjDypQQqNpn2A96Y8gfqgDunhJh3ZXdoeqGfA",
  "key20": "U7pBv1RFwDmUJqhE5qPYrSe79aFoej4R3sS8jZjc4ZjKp6HaQyXi5dHxUKV1Uj8c8ewwKMZ4ErdvpaykFHKxnGG",
  "key21": "3CDYmd6rpVcHg1hE4KRcujR1tuM1sX7wMNmAVWjaubvQSEeP2pmnr7UJswKjAwk45bP9ZdJHit3tL1BQ7BiuAhWm",
  "key22": "4X7TdgotGAvLs1bcd4vehvmuvdy14JdTDqCsuqbNuG7GPE8eNpnfDm1xci4pV8ypKvUkyQjzT74YEV2ruyyVcHgX",
  "key23": "2WjzwHXDbXvrWpWPHPPFHihBz1fffENaju5ic4LYXwA3WXhD4NoKJB9dzZByDU4vL1eEDqrhM6UdQ7bN3LugZekv",
  "key24": "3sG8akM56pxjAB186anw6iP5gPDkLN6UJcnHoNokuARYZsafWpGbAETZGB941AXLi51BoN8ooNePRBtuxtq5ff4k",
  "key25": "aefArDsA1KPpbAEYTToJsAkhXfKfpYtJ8BspX94yzZ3Du6owhLmFpvT6R1AqN3cPYmz9n5nHVwmUkLirK1TafFR",
  "key26": "3BDkjEV3otcnMg3oC5q5gukKK2fPPTR9hVNkVtpZshdwKJHaFXWER9Vvw5QpxT5i94U7VXVV1gj6fzSxZ9GvLuo6",
  "key27": "2czUudYSFhccCNeiVK9Yg4CQY7jqfHPAVQUp3i6f6EqPgPeZYykWmLG986vELZmaQMdB32aBVjXFq2ThLNPLKbEs",
  "key28": "66BsrHAFY3DZCYXN2MyvdEy8miSHeVTr89FVGKpGveBui66oF9XudQbegWTZecaDmsBpMRSoNuWrJL4Ehspk1guW"
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
