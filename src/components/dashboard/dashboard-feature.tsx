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
    "4JkMzH9cJLLVz5kRtiYLVXnLw8AZd19mphFWosuc2PJimEwuvuNb2QXGVq4vp4atJGmhad3H4T4aQquNPipGE1Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mcbu5BwGPxima4fxCH2M5GK9h9fL3FUJzx5utAwhWFQw1JGgmMGxB5utiArsRm6tu4fA4pxJvioYSGVt9pUSg6N",
  "key1": "2tNvTwVNyXSjL5aQF87WAtRvjmTQgnE2ebNN56qVMfQz1ogw9VHeRGwvoWy9ovv9yF8MbUzuBd8qyUQHmgPf5myn",
  "key2": "3fDfYdK7N8YSYd843s9c6mCLMMu4imBiSjhVMWk5Kf68NXkBMiA2AHHVLw4f5y1VyEYMPeeEDoCFmU6yxaToRrgz",
  "key3": "5mM1if9eXxyzo4483Y4KP8sKjLDyGLtBMVB7rcUfEX6VoCKZxbKeuPgGeB8vBk9H3gjvzBNpb2AtsG5eTVaPwfMK",
  "key4": "3uX57T3WkMSfL6rhFmYwdVThbLdA7CZ4e11zqfWoBVhRK152iyVt6uTAo49rZh7595i6mH6oTk1ekTNooGttpfKR",
  "key5": "2vW2eF1UQ9Rsde3Zy8V5so4ZkUmnyXawfRkpWmB8gaUUnojHdx5YMkQUVYmrm2F2uxZKbR6W4p1CUxjcF9KTehET",
  "key6": "2Wr9p3vBejF5uYdBSYXirzPUxdMSm1j34S9gkb8g5RH9ZJEG3NPT9gEB5ZnpsxUrk5MKwXhpP8BdFhx9nG7X4MpX",
  "key7": "4NU4VdmFo7nFZW87RYmWNa96XctSdedasbqqmg5hgEay1trUEhqUf2Kks9K7nf268ud2wNAf6DuyRPMQQputC3YU",
  "key8": "5G8n7tHEnUmV6R8qbXVL2vb8Z3Dc9nitfzrayjA34VPnTXsEbxMRs9ZoZtZd9UZsy7kPtBhJcgkQ67FJSFwZCZ73",
  "key9": "3BJ1yW2gzwHD56bxNrwaMDVe6RZUQDL1rjRP23RDNDuZ6ByYiVCiV2mo4v42Gw4735HRP18dzsgskwmfpmP8Z9Gw",
  "key10": "2ic2Pcv86um2ow8cC7vsqTcPdkTE5A5iQqjm8CDu5YW1KhFV49dU6c5Fyg6eu6R9HoGmDrJYou9p27S9tHiczgz4",
  "key11": "5cg9cyyVqMPQxrqW1PVfUHcEMs1LaejfcJdoaQTmvQjwtqftbYyEBhawKSWhkU6hYA8Gk1TaHNwz58SFZeG33svB",
  "key12": "5VEVtuPeKzWeNwWuMzvGVbFjLwSvLpszKEd28RaFz2h9HtMZPs7aA3emn6wpj1Cz4EqbCmnpzkMqZSvPtsnK5o4d",
  "key13": "2u84rBKfY3gcXaice5gbghtzvnEKXHC85jvBVvfjGaH47Eg3g4dofXy49WT1zzZxxPTZpzUeRxdGV4R1iCtskLig",
  "key14": "5RJJYfwxrLCyYFhBkB3vX64eGRYadWLqRxpKW7yPPv37VJTzCcAKFBN51XUwLZf6QhXLEiYx2vyaAXwrJq6EHNgU",
  "key15": "5Hx7rtPPvZX9h9Gnsem79nzCpgGJhzfJmt99EGWDzP7bwE39vX1m94A6nXqTtNbzrLBZ1uu2WTZqCBc2itiHhUbm",
  "key16": "2gmsSudkcsdff9tpUJNP67ab3HwmbposoYq88HCsT8bvqpXuTyJeUmCN3vrH3fqcV82fHhVGNGwDYc1vLgdviNfh",
  "key17": "3b7Unjc1xSuTSUZdYQyY5qPBn95t5eGCQDEHF9BHbpaJHh3ERXjKmu3CZns5mV9rYopyL2cBFRKLynY4dHXTsDPm",
  "key18": "35qyx29hzoY2K7EZg2sGghrkBWBCjDbBZc63n25Siw6cVQTqEVwMF9mKM4tC3DoJtW8aWCdsEccABzanuyqzSqfi",
  "key19": "4y3pZ6wbAN8o9Y4zNZ3nx2yiw1fjFvWdMFscTd1HjabK8TcKR1no136MY9hbAHw7wYXr1M4KmQQXcEaLAncC6TmL",
  "key20": "5yk6APqhxyjyVsauWnBaYDQMMxA1c5dGR4Ja5q61rPTLFC6F8jcL3pXqPDZLgdEooYmCpHcKdUjWXHELaJVdvHgw",
  "key21": "8rcFcyaEx25izgCXAgmTXcSYjZtYQxgoaRvQqzT7ZT8bCydw3uQyAWhcXMwtuLgy1jfXFZRaK4oFByV28LfrHqq",
  "key22": "FSSr6Fa9dQvx8Fvc9Z7RXvfSYbWZttn72SNUDy6fqmU7uFoGMopsbKPBko2Hd6GWM3kKyzJmtJgKZKuQUyiaWe9",
  "key23": "3ceA2EauawuAguvhiLr8gf142KZHomWjVcoiwr4GdgPMLJiesxuNhehvMPLstWMRhPVgBU7FkCDfCX1uEmdEhSF7",
  "key24": "2yaGPd2H1ZBjE5YXrUzw6LAT2S9exP8QqrpSGZFPFCRT6hmVDeoex2EujxDdPAeEBVvKN2Ujn1waiHSU5XnLF7eX",
  "key25": "5RyiXXnMiUpTJMt1NazCA3xXAioTN9KEYDJVDBAzyZ8hiMB7FsgoKpY7mgvXHne1Z64PVoTsTonk2HuMumCKC3x7",
  "key26": "5AaSXwBKp14NwhWT5VSEnyXk4oXXUKTdoeCHtsgNBd8wGvWQFqDtZqYHp82n1xYNDEwMWhFHscvKswwnQZTVjF1J",
  "key27": "5kHTEgxxJcYMvWYLoTqDY9xSnkdANdtefHWitwzAF2oKU8hXNciuYB1UhFyr36iLiv1gQKY1WdPF9NDFdmy4vD1G",
  "key28": "2wPW3xZmaDGgXykAq5fNx1H28ZkX6P2yC82JhbMhE4VKwgkiYv7TeFg5WvMuCHgb7Gkde2wrybGwUZvGRQBbeHpb",
  "key29": "2NU5z2U6tULfZdmQarc8KcBWjLvxiXuFh66CFzDHSr3gFo3v31BQz93yFZoZF76PeJbr6dR9B7UyNstNNyJ1LPTB",
  "key30": "SnXyBdXWjoGFM3xKTV2SLPvj3GoSyiPwrRazfjVrzBwxDxtGfoTPpNw428n8oePG3UcNvW1PkUKoYuzarKEZTTQ",
  "key31": "msUJqD5sUVvtpTkEfd7Pjao2sBdEeCRZKUKS2MdHLbuQy9JXhqyYRKwNwrDA71ZEq32FGYmVW8uuTWtw49HsuQr",
  "key32": "x7U9cPZLtNkVp7xHwoJJJWmg2Uxuq46LtMZ2BXaXteqtsKU1DG8HoFWDNzfRZUjV66yRc6a3gfQ4EwTWmT6vrqp",
  "key33": "fpo7fs84xz17KpmAE1xLnwtvVfn4L2atiZ2GhRtMCh8SbNujcFaKSy6sTTTH1FEgvqs2tfd7CMhZ2sVqNciZFrt",
  "key34": "2tJBJRTn4NNdjwSEPyzeSop7YyYbo4ma73PSWf2MuJwEhxQXGdW7Q5d1djVcsU6CCXEbqUmUzbrrehvSA9P7Upta",
  "key35": "4AqoJm8uMmae4V1to3kCBJtSrkQm2Ca95aoaiV5Y1ZWfu1YvLmti9zVf4KB2K4mGVdVJqitie7Pjgw7rxWfGjLQ1",
  "key36": "2Kbiurh3xeHwYpLqdJ7AqcqNaSfTswHx6dDJfH7W1og1VimbGXXwTyAgENXVZUugRphrA3MijnREUeNf9NsM8tod",
  "key37": "5d6FruiHr5kzC1j3hqud1CHA9KHbDWhrmE9t6dmzEwaoyBFY9JsxBqMWNzHdLXzy3j4dQGzNfx3RbqJvVv5rX6Pe",
  "key38": "3p3HcQXqTzePqk2ZSSp9etncNt4f7pDLgWWw5qbHEte1sUPfP3aEH2Xfp8ZK3DCxJWZNNmMk3u7F6trMCZ3CjEsQ",
  "key39": "4N4qSggD829mUxAUqkDqZTiidH9ZsGqCkFPhxEYJVrBWJyKcxouRLJUkR5WsdkW4HETZWWQRg4JbaKSyKns3ps76",
  "key40": "4hroY981pka94XFKA8j2Ghc8ZA6Yk7bw54iN95stNSHKCncHQb8HC7XY9dyQSzKuqwUm3T5tkxjiNkSF7e2d4RHs",
  "key41": "52HxqqARPgi9DS7E7GT9JNrp4He2LFBKktmjNASZzrqRyDkV21omXpQNACpJ2KQ28zXeFsLSmHo2nLvbBJH5FTyo",
  "key42": "2FPMEotqQ6dgRLVf9gcXQByZEFxxY7jr5MpypABqAPXWAKqu4Yk8FJCTC5K9FhtRj2w1HnvkJzMdGPHZTMCKtxEt",
  "key43": "2AtpfW9CEp6TWgeN3XWKYv2bLzxayvTgMWzq8pFP4kDtP6MtYjeNBKRnfASzFdJbxMGPqbTTwE1byFNLNLEmAm5M",
  "key44": "4ugGXQcRGkugF7KE8XyD66izX49hpsv2qQDtoPbrtWQ9eCJKEb797LasVZVHQLRayK6zsmyUn1TiuH7BCLR396rF",
  "key45": "5iFsJbw3UsuLBttXNYaMZoCTYWX8wbQcCv4oeKbYqsyiXGEfmBph9MZjajK1AwTuPPfrf1XC9tRFhwo4Yq3LGpaM",
  "key46": "2cCeZ6MatHEpiAvAeN3FreJjNTmYFwsRptF1STDmCr8mHHmGbipH2hW8QyfjQt292SGyJNkFNxCuFru1xovBbKfP"
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
