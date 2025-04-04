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
    "5D5U1bXzh1HNDwGffyu1Srj3Ze2qb3Q9c39HL2LP1Vu2w7e378JC8cvUvZ6iyvFYbTmr7oWP6dfGfakKpT3Dznru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfvTmYqtHp3dTbpDWrJtKmcCKHcDVA9aSd2YJqkouPDgMX6zL6JUXXn6ZaPgao8qaWxkxPwx9ihw9tHx1rkKjUN",
  "key1": "3e2thjPZV4F8LUtCMJzWUTUjyFfxuE6dXnt4sNqGiCXEDS5rPFgWBHPnMm1QNbJF45iQyTytn89LW17h1747ushR",
  "key2": "5zizenNe1Su4n2EE29sSz5HwwLBTuReyQF41SMCnFcZVxuVGdRmLv9dWbs1o9iSBdFDX3zshdtYrCTdh4xFs3wzr",
  "key3": "7nSkRVk4Pe4XLLvLZhHeQvAaYwgdNXNGuHLyjfeXTPK58NFRtxTUk36e9FVvWc4d4JCmYi1KkVA8VHb4wRWhFQD",
  "key4": "4ZpCudQWUw3ActR9fbzSBd31C528jQkNUePVNLiQacptN11zKptE4mtS6YxTQdeWHRdTkANrB6QccNQqEL4gKu8C",
  "key5": "3xG1AmpkCeAaXyZMBoCNxj8xYS138McoVE1b8hNrTKQMRh6Q54ChL6nAgujim7sezJTJQ3CMce8uUoJP5RcEEuJS",
  "key6": "2Pw76RdQTPQPnqWowWyNn7344h4cRL5bwAhP9xZb9LirhMDnrHHFaVuGg9jPVjDU6HX6NfAWry4p3vbYcxNAPiZ2",
  "key7": "3ecAabxw7fGTfCKc64h7wVGZT3G6ETfdFccL5cWwQdRMiTzPPQJo25XYJdTeEYNSyqpduRxzFB3MEE4HhiLBRwo8",
  "key8": "5qAT2TkBPVHa37GZ3fev5U8hcconLdbTqvcGmMZUNHQe2cHq3HxruVPh4UARfMbMB1UG7h4uoyxam2uGytcGBBfn",
  "key9": "34fZPzEieYvXJjFQ7spEdU54PAz8HphZ7NoR5fuM3LhDwMGnFAYy4gTTqeLd7tEQre4dcpwmvC5NY1KbZB1L6w5S",
  "key10": "3agDA4jiWcZepYpq5ziXo5XS7f3y6vTvsRMycEYNZkTNrkGz2x6hSeKgV5bo4F8E1yoMKGxMQQCXUQ1h7gfKQaAj",
  "key11": "Mw18YZ9Bbcycd9jsNJcbNsD7mW5AGgQgvrBbxUrUgtFrGJxbnXwsqHocKWqMjKyq6gS4G7aCiP5tSZsGwDYuhVg",
  "key12": "5SzHgxQNSLjLyAKJTXNDyMsocd4kHzVahAo4bBTSSxHxm8tbxY97kzQJMHMDVMyiDeR9tKoVwpHsT1QowMhDTSiY",
  "key13": "5xQWcGgYqUGp5btZccjFZbufWN1Y8cUUsQK8FxPqRRT8Hh2Ju2Z7e1BT39xzX52QZEAdp4Cgrf4LC4dNZopgUsBJ",
  "key14": "4gjoQDwGFmXWXexPJjsGEBRCXCTmn35zzwUtmdjfVATLV9TXuqK4iiGjYVNoRAsXdU3pC7rUQX73ZL7xNnEpxmrK",
  "key15": "4VqxF5RM6kWiMgpCPLzfgxSrQFoyRhR2raBGUxj76iqbRfGHqLhLMNTUxszDoBG6FUw3t2Mp8g9VYyouSYn7kEep",
  "key16": "VsCbWGJipPQyuqGDCdFN555K2bE3UR4wqKw81ycPTtgVP29pXjA3Jm2eG38xhnRzSoMjiHurocTn838otFXvxtH",
  "key17": "5WqvSaes94YivgPtYJBSVAVhn3c34NtKmzdNUeUaKDAoFUWx7cT241Vtg67oNJoSvXcvu5DauHYekqqR4R32M51x",
  "key18": "2hoe7FXq2usxdKktxqE15jQVuyQgBVa1UCtLv5iLFMCUhK3UP6j6zWdKjGmucydFHvD7cdQ3yZ9ekYVALjw2v2yV",
  "key19": "2knNoaMuCDe2NLDvYXTt6XhETjMWhm8SJN1eECv9jEmFGz8KSQxXPZNKTU3Mp9M2Du7j5z1jgLvyQeCuoSg9nSSJ",
  "key20": "xACAYXfhc6obv22KcPYJw2SHfbwrxbFGRJdWgKFqxTCPP966Yvb1DkNffriEJ6bWmFohRGfbYTAUt91TunpiKog",
  "key21": "5WDZQCt86Jf1zJ1BG4DtnD4ZvNSjwiMVZ44J7dV9vHaxFrG4eBU9bxJpGo3GJp6LSBtEpXoryEAMKR9duomzEM31",
  "key22": "7juRZz8a8phzYzDYhvZx5y5eUMPoxGPgQWd5siJMi9J5QS6sZJX7J2FwWuv4zbffZoNNksdDjWW1uuirY3p7EuA",
  "key23": "B85B2U4NV4cCqHF5ukA2D2YPQi3pjNsY1cBkcgXaUqeq2Hf1LGoP3XwrnnUGccNpG23vrjENXMduuLxhHVBKcvr",
  "key24": "51y2VTPEgTct4XqjbFkfdHFh2sCJM822nTNaPaqkkJ32z4sh6xsGVyXoQr6VFxWNU2wdH8Jz5fwou7h6pCLGuPUd",
  "key25": "3tp4sWNuVmum1HQZkJwrkMV1tohtxjvi8pmpJ9pvuqcwA1JeQ3ATcdESQo5owirto5kbEvFr9fiSYvdtTBVtQPSW",
  "key26": "5EUCtT8n2RDr35QKH2PWZUsNBJEJvAhrukv2rq6A8DffUVG37kuevxpKUkGAE4sPmTqz2ZC7VeWhYxC6RLVBS99u",
  "key27": "385zTP5DEC7jgPTDrWKPg2QrZDC75Ys5nEPwqQBeR6W8XX1X2wcCtSbbTrjyiCbG5X83aaGuDXXCSitZqptWNwyG",
  "key28": "4oTYTbrtU7HNHzXKvPhEd8PjGm2crNZJKL6m2yPCJpDt4kAEW9hjQCvDMt4CECmpXShg16zQBnVUQj6cAePwihsC",
  "key29": "4GcaKQFHgK4H8sgvv9iCFn8yPMKQHH3idU7qEvAtJp93FVLULWnYjGqWhFmUBrjfVikMihHKbQiJ8oh877SiPjiJ",
  "key30": "HuibTJFp5HRdcr2fan9UBrBkkUv7DnT5AJM5W6HxXQgTjCd2ZAph4CMMhNpnxteueKvFLtRuZtkchz3VR1fW4zy",
  "key31": "2Yd6NenysSqg81yqDgPdunX9LutDKv8ZJVpvuypa2yojj95hdD4TwdEQpfvjeuXqFypudxGGG3xUqQn6jgmVqQVM",
  "key32": "AWTkzTcBffjGdvR6QijByMXVnMWyng4piGY9HJbGe2zeNhMAqfbdnbTZUErNBM6siYRtMH7ePJbF8KMXWMYp63y",
  "key33": "34arZLgv2wmbZFihc5Wrq7hYTNuPjV6vCkDM8izTDdZu6ynFLd2d6CCxPSyxJstDEty1oPRLjfdzyq2Dhc1QZXi3",
  "key34": "42HvqL6vCMv4D2mrjmMwkw3hPFUNESYvihcwbBzX5AFoFbfoGV5fzg1Fv2qx1MkELB6CiLaybffquiBjvCbHqavz"
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
