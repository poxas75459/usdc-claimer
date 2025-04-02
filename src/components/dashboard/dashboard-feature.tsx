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
    "438miG1SJNxUuGbyFv2uUvuR6F5RjeU5DzWMTaJA2LL5j87NmNCETBqBvVEq5mEXrq2w9qtkKEaMro7XBkMi1Liw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPBk5oKBCunszuUqmWafpVmtgukCEmxaNPz4KRXnkpY2JUnSuo2ZSiWS4BnSxppPyL4rnr7gPrbntxThiCLk4gT",
  "key1": "45i1yP8KJF92yQL4PsQZjgCLUscQHsn1dgCZyRQnSjeX4XUsSEGVtzLoFeS7AWQcngxbWohKw29vEGAEBtLkDWMy",
  "key2": "3GWn4EGJBKq9NAFwdA9WU44tuX3FUMJ7ns8pSnNkcEooDmvM2oMASXzEeKvst6vbzh1Mwj6FV9XhCNsXGq5YvJir",
  "key3": "2kKh8R9d7SccrHtAiaQuAbkSN8BwW5SUGmi2fULac3QidqxExYmwKM4bbUJqavfUCnwBL5fCAt2eKa3w5BBrZFGr",
  "key4": "5it3DEd2viNMjsCVz4F9Sg83wHqP2m83cjiaA5eRQwZUa9VQSR4RP3MPtcvX63gA1hogX9RRNauCQLnHA3mBaEyf",
  "key5": "2sNknCR8WzjMbYEw8ZhCXafLbCD2Zj1SuaajsoMfd773pHHVydvz1jwLwAG826PWNXcLgtEwtg9vkg6Y7U4BfC72",
  "key6": "5qsLWLccVTAtSQVPBqKLymVFDAcnYW4StY4h73WJxBFML66if857d8YTEQjRxcV7wnDGSLMntNK3Qmome2no5hoM",
  "key7": "5CDaqmM4odjhNUMV6jxieFrWJFeWZkAc4TjVgn1H9VebC4b18ErnpMPdZMHNkdLYopGkGX4EaarrSKzmi1J1jcYR",
  "key8": "5z5oZYQBaRN6HQcrum5Thdjh5mrMEGPHCy9GVWrYYQvWYD7pfnRWoEvxUntN5GjtaNMdfAKGjzcTgYWKEYR6jthJ",
  "key9": "4MfRZHU5VyArZdpzgBSMq8hYEaiiLotvHCrMRWbvPomAJRgZFEbvbRN4vQDHAE9HKvm1dysfwqXMLXgfhzDU6r3k",
  "key10": "3GLm2hcu8BnvZUTP93NEHnUbcabkDAoZhMjfpskhAdLMmXKBiyoDU4qtZJrv5yVmkUqdVmpY3r3D51n3ZpLk88EY",
  "key11": "3BkBamSUKc5c8ReUWYNU4LFRL55UZa4JxLJB6z2LMmMW9cjwtV1p2soajYdGn9WaSw67LvVfdJ7HFZevFbnY1brm",
  "key12": "2A94t1gZaD7wUqcFQFxc6YYSwzUcJhU4AFriArdcGTX6XetkFqNXikHkNCjNJoRxEbjTJP414PP8mkJp6DeQR5aD",
  "key13": "4ZgituHz5E7HYT4puamcihD47i7dQpB6KqNFKzA9B14setVr6EiAwauCcaHUFpwYEXzt63VUVAnJNaZ2LgBfGs1s",
  "key14": "3oY9WzJtV2qSMMckGgKEt8b3pJJnQiajmNzAZRyr5qKQ1bwyRWHbtgkrEXfCwmGjdMyuXaNEvnLUuUCTrwKfMpR9",
  "key15": "GhM45y3DspafnyTagseXbzhAX8rNkMjxx6opajJz7eis6wfsFmunEnxS4xWzyna2GoUVR84AvTM6z18QqxFLnBq",
  "key16": "xEuC5Lv9TrZuqEk8aQmbRJvApt9TbEVv4y6GR7e4cFyFm2qV1WGo7Snsbp8icvNA3USdp1ebnn8wRKjTKRdefpL",
  "key17": "64Z5vVL5E3pG9ZHxRySV651ZSoFR7oeAJq1DvkA7gYDYLudy2w35urZJL9Vrw4DCxRRKDdrstCT4w5Cz8Jqi11eo",
  "key18": "tC9mCf8NhjRgKAEwnyS3B1PZYZ7co1QbrbuMewaFgcbV5j3Xdpo6w9FJTaqDjzcud9SxbqTW4NPMwZsPaNRPbTx",
  "key19": "2b7WtA9HtveijxMTBGStmC61okFNX1Sd5uBkf5ZQcYz1nq51EfjGPm9M1zBEFfFgE3VtbRcZgSiMX9uVtERDqnkX",
  "key20": "3be1W3s6Mb1ko7FX2A84qk4CYvhkmd71MG2FpVZBSjH3ibnnpqKjQyuWmyc1KM6c3AGLTeDdoP4WiqNYCgkqgTiY",
  "key21": "4hdeMxomiudAFMjLQL6ME7sS7o65gQTvZXkmhUZTrn7aT7RepGHb9dBQEbvdNMCq1kgapDcCCDMwR6btMgZ51Q8e",
  "key22": "4fXxb7En1ykB6Sm6VyGEQ5tNKPDJoRXWqHX475owK6JiHxBmwEY6WF3pLPnKTvNDE8GFkmGfrxyXWiGqRfbkKRvM",
  "key23": "2gAX71JBFPVJeiAE4jAQ6VNtPNAYYiuTwTTCsSjTe21gub8BvxQoNSdoLoUCrcDkJpefNmWGcUyez3cS12S2ThnJ",
  "key24": "492Jrv6v6cZpz64g6JNgEYZ26FwKbQNpGd8t3dGjKJHXJxjQJKSVGAtN72F8gfKysN7ihHkgTmmQyew6wTbihUm8",
  "key25": "55W2o1TKHthcvuRtgH6SDdTdRkNQzqajMSgt3LhoAqDCBr9CiufyjRcAKvSKUUZW455V2noFnePmsrhDzxm5N1Gx",
  "key26": "3Fz1KRFoobcwbaRTgrBepv3Yv8DvvDZZY9i7itprXx89ovBi5zN1FgicK6zY5biUHVuFpEpKyjyQSqDdo3tfpjns",
  "key27": "3KULjiR67fiw1dPp1ANHCv7XTUoYBQqsGnkXWoDmnPKRAqCTwcCowAbmQ3A6jjjXGhewMASRhMN6XrSAhikzyAgf",
  "key28": "2K9eKsyicAhLnsNe2XzFtV23XzhMEpTm2GAreLNkeDwU2hyswHTHLN3n2xMpR4SRnyYRaRViipy5nsFSzZ3pqSNX",
  "key29": "4dB6WpNraoB7h3th2LZuC4VY6bA2sCMrKaw3TpnG8YfzBHrPCn7rsYy8dFvK7h4nmN8dtysS7F3FGoVbiaKjNBi6",
  "key30": "F2TRVdFfwcikaZ1zEgcEJRb2Z8uux5Bz5LAs9NgCC8FmXRnsrN7Nn3bMNMim6K7oVUeXGQfzD1ePJU2f9uZzzz9",
  "key31": "5PSiCMHkQjPSQZCCfd35daUZGTqaLv27xApwz4bWCYxoqFmsXvgznRkh3mjbPM2W7DQr3y1C7P1Q6FBvJfXHJP6P"
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
