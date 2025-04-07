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
    "2EbV9bSWK5eTmernDzzPqBnWb8nBWXKzdJjET8zxzaynsQSvc7Du2RytHAVEr5SrtAH57Jn8XHNBuGhiZ38kmRt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tAYZLL5rY8qpi46Rvw8G9iZQGUEjcLPvU5xsy9JHNBBCJKDfr8zxJZPmbSu5YTU7N9zwqdSm527tctRpoLs9xag",
  "key1": "33mjsYabtH21WvPXyNmfzfF6yqD5Nmz19UZAQijyAUdvM4aRZHUVJZcBShAFcqU4if9DaMWp8NPiPzAgnDQyhYZM",
  "key2": "AtnZyQYqVmTMdiNJBCE4sGwEmr1YyP9Fyd1kdFMYrEPSa7Y9AF4ftJTC5BXayLEedEagDom6ESMZD91mz8Pjyui",
  "key3": "3ADWAk55T2fgmHLdcL8M5LbG6hUA65qMe7KNxVdd3qfEMpXdCgoQYmTi8BTUbWXE3VJibCsEJZjvmRiMzpn8v4Q2",
  "key4": "3t2nsaAiiNE2ksHDfWe7GzbrcEfpbzjN1uWun8x3vRzXsHufMGXbjq9rbpZnwRXn6yF2DaoNSg7esoQQiWKYMypk",
  "key5": "5jNGjgK8L2dsBeCLJPZvhSWRKVDM3ctQdGHiMgY98rCi7hWcPwiBtJbgJv4hL3zgaijAZQYxnmEMQxpeMXJzJP51",
  "key6": "2uzVDgMM6XQgQqmByWevCZu5eHSqeuwbKvQ8iuCAJKCnqVJoch5fBFqrzZp4pzY1gq9daBc1AfidxPoLUf1Yaeq6",
  "key7": "2PRoxuGHz6FNjsyifxLmnnaR8pbDeaYU87MtyLY5Tz8RFSbruJ2A2BrhTVmdZKjbNFgDY87YjeiBDiJ9y6tuk66P",
  "key8": "5my6YsDsCzu1k1ofn3RYU5hEYYJ8KHKkbEzT3hsWfo5zZdMcqJhHNTqV1QY1Yfhvf9xhZjUhA8yqR4TJLC34REHz",
  "key9": "4iXdyLrGnzaNWs4kubTUC28uGVQCkMNHQeMRzEJdG3myRApE7FyS4tFP5U6WXV9f9VY6APHyTas5QZGzDRtaULCg",
  "key10": "3aWBSWufzHvS63XPK8Q2fXHh8SJdR6YS5sgxmAFxboesFN2b4qzSpdqDPAievZ9iJxy7hdXFV9gm5orP8NjwHnon",
  "key11": "3LidQpt6Eu71QtY2EGzmxfifvPqSPgirRPSpcrEpLEadV2jDW9u6rb9qraYz1tg7Y2FdETnkNNKMdPMZvoTsmhYL",
  "key12": "2oJtjAMYa1LMN3zsCpaYcYzpW8SwGqzR8aNXCSoHEfT4xPCg2VRNNx1XYFJBtg5v8w6h4HE2Ph4Y8bi1AijsbStq",
  "key13": "2FmWMGTZT62XyoZeNsfhf1TigTyinCfirKatnVkxU4tN9ZTKX4rXPt9Zop25UPXQhqdkabdJhrsuTuupPP3MEXa7",
  "key14": "5ovwed7PXLQf2nmC8yr7TYYsCT7TnFaHaPeTDXVtAG5ttbyuSfA9BJDzvxP8M382cteY4YBfBo42ddpvLPofCRLv",
  "key15": "4YDecdaywLENsG7QvkEB67TGzigDhihceis8kExHYCoaVwMJGZ9QRcU68Q2XeJWrJVDyUwv2qX58dCu95xB1dSop",
  "key16": "nGA7JqfzHqG5Lsd1yZbRSfH3KTHbqPfhkoajUHhBvoxQMxuMGfa4vybq5y93NBG37zkL6BLqQ7b5CNeLoRUUBMT",
  "key17": "57u8NmRWw3LspZ2en9Su4uP1Kjd7SYV4iQ2tg7KYHoJisSys8JnGg27Hg95WhS7MrAsc3WHYN3Mx3TYGCTkCMiX4",
  "key18": "65Wi9ZyHM98dKNpZQGysEXVczWodvzkgt1LFX9gahgQc2iYLJYpnAfN2SNzgb7sVZ2xEx9H5FXzX3AvDqL9nkisS",
  "key19": "4SnQdfVaaAB1M5NsuE2SDJfoquQMi1tbCVRB1dqvqGijeVxh9VEw9wjEtwe9uHFqBsqb8EsMRVUA3mNLodMMM4z7",
  "key20": "NKjBtEdGyyuFmB9DJ4pdfgh7qzU7X7Z4SeMW1Ny1rrQckzGLmvGEqvhmdU6EK2PYRkRsfsN3gae13V522shWmPp",
  "key21": "45yQdXoZWWzpp7g7Xa3FysNAPSTLLZAWWgRC4EeRWCvTj1FTUkHyXZ98e9VQFvisMCsmrX8pu2gNMkHcxywZ4a8A",
  "key22": "43XryNdwninpeDuVTLnPd5B8tLQMC89r8FrsVLtV9QaffWvGGPEVJSDFKUnbbHVimthaMRi6JnfBmnrq4txintEt",
  "key23": "F8M99XCo7bmKo8MTqLKzd6Bi4JVyPNR3ATLRPzZFFtLLtnQSnj9cjEbAriAD4E3nfnxsjRaC42qKs7kFeunJ3mQ",
  "key24": "5ePaUxfpFtLM8TbGEEm8YTRx72bm9yLxyNuvHF9Q82675BkBWbrt8cNGB5okZVc9r1F5QRbdYvi8p62sw2Db7kuq",
  "key25": "4xAJkG7Qt1JHL9dW3bikCWETJjgTkrsNSH1V8kKzHdThPL33of9TAACW76EN5F4ppwzy7FYpNVjKWNtat91NTWyN",
  "key26": "5zPfBeArN5J23KAAfWT1T1b65LhubpeBYpoE1k9w4NT4PShdJLLFcfbRNyHd35Yx1HF5GxAmt6Jx34cKzy6HUBMy"
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
