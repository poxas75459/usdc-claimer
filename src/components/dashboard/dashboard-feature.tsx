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
    "CVCFz6umuSqgxz98RnYyqVVqx8pK2oQAX2sJrkiBQNaSEG4q69LJijqyL8GfFHq9zhAjNo3wpJmswV29GTYjKvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3utrwkeX7UgmdnjdYNxN2EHvuxpWM7Fz2QBgzuHoaybfVDhfG1MGnnN5ggDXzPDL9jz7rfFL5hBgFh8q9uUgoJMt",
  "key1": "5Lpe8fGML9yPV5zsMY6EHidgsseme9W2sjCWkBNkYhcv9r7JMcvbyTgrRh13j4P3ZxiSRzuKZ1V8E3T4cFirtEYf",
  "key2": "2tCZ2V2yxHT8tcG47V69pqqpMey1SUPS5KpTyMDfUWEcHDqqhALubK4hD26wfXKhWq9ohJgDcXZwhKjE4M8rcdkB",
  "key3": "4jHTEvXLM9gDH2aEVz1wSCaSkfY49gT4nJ3PpMemuDQQ7UQ1RXe92iSHcK4WMRqtrg5FGyVL2mnULWMPRgJRJA6P",
  "key4": "5JNU6unwAHLMAnNtMpkeMvrCHUzxTfUXQaJv9GR9z1khYoKkzmZfUtdMF8GNs5z7dCtoEEfK9WWGJyp1iUhGg4yW",
  "key5": "K8ijLf1ajp1hfQtEyyvP1EPHyEdvWQzFX9VJ5mXLwkQEUtDknbXfKXEMLiw8wuHmW4ufehUS4ompYnxXpJjmVqT",
  "key6": "43JsQo96vNDWvDVbcca9ENL4GnUkV2sZPJevPGec3DadmmCRZEoJcEP7wHBqpPacpocuFy5J7RCJGbUNMdvN1FLT",
  "key7": "5AzhYWenBSkNiDLJQHfYG7uUP1Agk1gjPxmJMJ5hRF91KkMbLY17rEQhTBmVD2U7ZL8NDnxYYMzzVCoyNGLo7e9C",
  "key8": "2fNy18SdtDGwR9uNviQevUSj4vN7xU6rWoD2oynf6B1iiTn2AfBDnZ4Y5qyipbK1VZfGunEUeBaw9chh8Cz8zDc1",
  "key9": "272Yfi1AVpcwpqgm5M5r3KepKJyzThhP8akqvmJTLhgMCKdJjM8ZofBuwPjpGuyABPsV3pStgXqJ84BsHDtcCZh9",
  "key10": "3S2bWmAtZvwSFXbxdjTP8sJBkBEyrrB8ihGky67ifQnZKc3VBqkPD28bJk7A33EhqrUxt5qk4aZcqBBmFX3jcL1Z",
  "key11": "ja1RqDVzTZUnL5uf55sHwMEFhsWuod9wGf2LkePcFbiYsa2WbYH8XwZANGW4EJFRYgwexYEKz3fvkjVMucrheMP",
  "key12": "2RmnKy6mdtXW8hMDuKTwMdpXFh5szWxPQySHN56cx7b2RHENfypeHDaDgGzQfHwnJyESd4rbeiiSMbqrh3L2Rxpo",
  "key13": "3ZGty1V2h2kUytXvzGo756HxxQErMFmDEpYkZmbVpfPPAkULz6odV1NEH2WmB8bwd93Nb8fZ6YgmvGhjVA2mGY45",
  "key14": "2QYiGPEGky9345JzTm3kqEB8op6tgwCm9DdU6CRbRjhcKtDm5ZWGYp5cZf2DcpK2wV5Ta5P92Uoahhfn3vs3YJp7",
  "key15": "3dedGigPPQFbaPFzizoxrZv1D9pZ9HSeSAofqZ7gHDK26KjnBLhFyefgZDC537FqbdN2tuSs7Xasc3HT59GR6GbE",
  "key16": "K6beTrXYTruUaLNxN2rDEgimhfYyKdxxcWCKfNbZae1fB9f38sRr6mEvp81fvXC5tzWf58FagFfUX2z5asPBZ2M",
  "key17": "3rutSBDY83qWdD3aNxa4Dyfhv2j4S7Pbf29Q1DuNm6mxEPbuoT4mPze3ZCat1LjjvGgMyMTHfNekaaJ8HRcJAtHp",
  "key18": "3nXbS4sMxVem1HEse9iyT5byh7FetqGqjqK1S2zGW2oRH3jd2NHYfAr9CFLZ7CuPrmKYYmJJqE12AoTXF8c1jVnw",
  "key19": "HHPRmYuaZCcbuWqwKUV6ddCPC9CaajuMgVukTRYVBZSCNXjimaBLboLsbDeTgYNVghDkFjaPfXTJCoYcwjpsSAA",
  "key20": "veNho3XeqNHLPPQL4frxFjuG8XwgR6DjQBs4KA59UAfkkCScHbCYe1kmvrag1r2RmfbDt9P69RNe3J1ELSYgZZm",
  "key21": "nEjoRmBcYYiVWq4jo7PKGLcKTUr6gMnrWjFFVuCoWUYpuq6qkytVaP6sLVGTUihDoD4wQNdyfTLDokS8YqCVekR",
  "key22": "hvve3L5Z66QzoTPz2RHRP3dr7jPXcPUgnhvhGP3pqt65ZnSj6xo2QfjwhzWJocgmoE9a9NnU1j3gpBs3YuuN1tf",
  "key23": "2fMfuv4mWu4GX2BEeiJKgvMDsUmrYY6hNWNbEGe5Wj3j9wCpKEPhVBYGkGQmpm4rjFAPUkZwEEZaqm2YMQAXd3H5",
  "key24": "5xuGLcsdLp69TxCZpHzB52rWDRarPA1MFwiLpokJ3NhB5zBFn8kiRS9MWvJdhqx2Xz3i1NXmJfHHet7Vgq9Pd2Qb",
  "key25": "4x6kC4YeRALfZ2ZRGMcxCSbJeai6DnLpN6VLkHYS5HaHjWWwbUJ2Fn2rgr9Foee31hzCWcF5r5a6KLuU7oqAt4AU",
  "key26": "2cduHjHAV4rigRobUJs9UeZeDgptXuQcycKzzCH54WCQNEg9tK8uxUSRS9JtrqskkiQD57x5jkY66bzQgF2YMDnK",
  "key27": "iDETyy6e7fL3GDvGvmiYR6Qz4MawXv8xU6VjBLUfevqSP5Qqq2D2o5ib4FNaXQetj4C5Z163VJEPCXVPcdij7zf",
  "key28": "4V8RkfgTxKaF7WSBwVZSq4oFx7eytNDne8n3xSRwgCy7jbLBwJMeQrPeVs9RCpqcVqoQsb8tccYkFKQHTcxJSd73",
  "key29": "65k9D64TmPu6o5WfdLimnK6uEMJD6NGrJLLkVpHKdAwSnCb7bEHdVG5fHbMi1Wh9JfrajqsHPv1svLkSFozrrC5F",
  "key30": "2pBrAEwmo9CvsCbuyB5fekQpuCcFfFGeSfJSWciCVXCCWDhTFrpFPK1H8DPQZwBaJU8GKPLxeomjNTwYqQ7rbqTm",
  "key31": "4bysJVdMCgJcFxiUbW2o5APUd8JUWwLzFDMqfdLu8XKciLe7RCUe5HTsokgpQuFhmUCtmE6vAvER2XzVGHxgdSLt",
  "key32": "5QkhCCbkr58V5huX9uhGBRhyBwXAPhhVgstsYzyDkP5UTu3bNm62dAMvD3SNkWLjy2w6bzpdYDVY8hhAqgP2MkJY",
  "key33": "fKFov4WLgSYzLjxcKQn3AqMvg46dfvCiMvJdcErzg4ie9YcR8Ky5f2u7TnGUPqQDdfShx56yHzv8j8AcRAJBjbp",
  "key34": "LdxQoZMh9WFrkPiGs8dxCBN6wiasysXcTsJXQ2zyBe5fuerNR7yhZhzSGXe8dUwmyTG4NHx23QCqk3sJ8ugqeVG",
  "key35": "2pvQTsaXbg1eBgVBhdQvcTqVMAHPBWQaFK5cgPcPxvzpRQUzg6WjLAnmHyZotr2SuK2VYtdi1NNceQLBWV1UyuPU",
  "key36": "3NPDzU5LudDpfuY7G7LMTeqHdB9cxsrmujDDPFJH1kBKs1mxQK8LyqLrGRqNKnfHnRXtAGUR4dxsuqZAY9p7ZskX",
  "key37": "34B7ciARjWUehh6CrdUYTqZ78jUiTrUkS3s2pPwMJGgofstnhuj3AUZY4MvTi1WVGdVsxbNev5MeRqJRNtEZVQtJ"
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
