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
    "2k4MyM2K3ykA4o9uHxBSwuq8ZfJo8aRGvTcKNYRhfrrirT9NYYLAPujSNhNLNs8gnTB4w9yffmyzwMHJjbLhBpfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGmhjXtnKsW6oZE9TZSpTMHep8cS5XT6Yx1RE4LAiBepkDP74tpDZiNZvZchFxj9djqtPdYPaiEtuYZGG2bt1az",
  "key1": "5VNgSJnTCxUx8UpBdGFLf1jKNXGtJLHE786qjyfU48m3Wnu9tuWd9Z5ctH7QArpSqukJbEdPwVwK9odoEsopFFV5",
  "key2": "4uFp9HLhMCGwZYXGVAj8UmojYXMRtmp8FcPMgxjoJ1XVzGNswg4P2Pjgq1zrH4H6E13sDo9R2PRdFMhBVLZPTDbS",
  "key3": "4TF2gcF82qkhNrd4pB5BpkXMMc9dceZaAvi9X2gmVUT3nBDh9CCZMtR4kgNPvTuyeVQbY3Motpfm4X7viHjqeVwj",
  "key4": "51W1UR5aYsQjXozMMPrU5cc11Ujp72DctLf6tJZH9AQ2VkburRBaigZnytqDjctTv9qPqhrdBjFv2LX4rAYDSFey",
  "key5": "x4g1Y8BFidcdjTEzuDfjsDCaHcsDPsXUAhoPPXuwiS8hP28UNByt1oS9pHCXyz9i9yqnQ36Z2tZEEyfJhkBUj77",
  "key6": "5qHUr31taQnsv4Aa3aVBe65vniue2Lbh4HqbV2rdM1ubazKcUtXNkRWz8WHjwvpSTdF38B6g1adUsWhFiUAG57R5",
  "key7": "ESmcZai5wf1MLaUS4M8idQwEX5ht8Bt9iND9PeBAETX9Tkewv2gs1yiem7fZSur3ykiaRCZC8eEPADX9oYhgCDT",
  "key8": "2NYYeKuFEcf1Ea97XraSyJajtxwvy2omA3BPDrSGAecanqNWrfWMqQ8tFT9eQaaQoHcMEfB7xZoTJzdrerfBq4JM",
  "key9": "2HaZJqBiEPRjyZUZhkAJxhjPKczcfR3ZBCEfTqfskAcFaoz82TPVVHQvqFurEB7L1zL2WsV4G6RcXsHwmkfnspPg",
  "key10": "2oaiqbrDUUeUyFdb5Synfcs9a9c3C3WcFWHjwaYLxPgZvjFSmVw8SPX9aKRhST6bwEGP7aC3q7mfoBNtCoEhoE4Z",
  "key11": "2EWVaQMGW8APLViuePsnvVtRufpitWLwA3w42BiBVs7iqsWx8yqc9y952FrwX9yCq9YuAEeihqTdze8fpNt5vTgX",
  "key12": "2LcgQHKbwJPZuMStPmKjeBRChwjcz4Dw2pUmS42irx3z2oydBLhudjx9JhNVgHotUp9H5AKDiE7JtGEZsKcqdir4",
  "key13": "4SbziP1KRms5QtybSpniMSfZjxuKWFi3zZgqQEeYzd7xwTjqiYAKnvPvTE54r5aYzc3YnnFLM5V9n7syruoFSGDQ",
  "key14": "534pMuP9TEPHBbSRS8FjAXfeDqZMgfczg8Z7GzmmshrzPSzyF7J8VK9FoowzCBcUL6SgCHCZ9e2F9cbapqDZQDkw",
  "key15": "5FQJQmACGyhnnYWRQao6HQangnb2wEqQnZJTFXx6pNiCTfJcvRka8pv8t3uKDehBz78niirvRg7dnF2RwRAvURHP",
  "key16": "2NjJTB5dRnmBWXr7RVbYHHKH7RAaK3TSBHszkZZZQi1gVckHJhGwUZwDgV31TRbgEnbV133eYpqRK4k4XmeWTJk",
  "key17": "W32T1jNVEQfoXVSaEEgGMA2148EuFLgGL8iSJL1jfprDieURjeJ3XQDTY2MVijtDNKSehD4xr52MSKaxbU52F1q",
  "key18": "5XT6stWiVZ1U9dQFANVRjbqvLRh1BKYDpERx3ZyKqNBxUHuf2DfJ3sWnEtcoTe1FjbiWBkth9Upa35XaborKa9EB",
  "key19": "3KdUaKeCxbX8YLdui4k5yFewXGs71JHtcUVCxLZ28k1HBMf7MGvniTjdJznxkj5CxfKBebF8pLRU5JD9jGUubmch",
  "key20": "6k8Kz9Vayi99V8kpWpBx33J8oq4jGJa4n7FUgR2zdXtyLc224FsQLSoRS9NNVMC7TJZepxEst9pT5bF3nZ6X5F5",
  "key21": "cSoX1hc1vxQxH9jZUTyi6fDzmhrA2yH9rwJ8rjNmSmctmojf6NQMmeDx2JY8KHH48jrDQMjFtJARqiKr56RQuBd",
  "key22": "2KpZuSdRNm5DD6imM1jFHn3hr4FqnppKyss42Z5GDG6et6oDDVSmmMMqoK8B6xcAZcDnUyYNzmQroHzByP1M6e5Q",
  "key23": "2AdFWPmWLmnuQHas71dNxjfopcXPxsZmtxiShvQofN394ojNMEuzEEccts3mDDsbzFapAW2S9UzG9oTAA6pjiPG",
  "key24": "3Ns4TK3TpJBdgzw2PAUmjvr86875oW6XHFhXiNgeWmNv5ZarL9KgoHcQ6LuEe2K5qNKaWyJww13SJUM2uUCD1GRS",
  "key25": "4MLeLvRpFWHhsgvnN7DZYvx1ng46u16uh3Mcr7W8Nsc22Z3ER71qeeoG5MnE3koadZ7dNowUUoXqypTqo2tXDcum",
  "key26": "3yH8FtPVMJ1Pos7zPREdzgVMWPiXZpHTtyvY7chuLgmPp3ncTXTqTUVVr5zZ6ZDFHSgXGcfMEGF6EEjKdPoBoRNk",
  "key27": "4sNKyp7iP2AFdKpuVqkEAuM8DYc5vvd866GoJwdoMvsJx48PPDFf7Am2D7LwdW3SwWcP15bFnkGQyVgShmvetPj9",
  "key28": "2ZcU6532YDNUuMaxpKHM5RRnPQSqekY6ACXRG3BgURijiif8wahGNDj5rCwX7sPuqF3VGgyZVgL5KyGgHjY7Z4eP"
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
