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
    "2Z9BR81RmiBzPmmywoMA22BoMBSVQK5Nom3UaSzYnZuNgBq8jJxxg19nWDcVKZ5nBejoFKyLQ5jfoupkGmPY955m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqSczCSoY8CVGHbdCqADd6XV5xvwjCDJwZ9hTSGd9AKWHFpG33W6i6VNCJ6XithCrDnQbqPS1sWbKWh9ttq488j",
  "key1": "3ci7cifj3sfHk3fjBjPwMsjHqhRxP5dATBy7snxoVCDL9MJAQ9K6RftDsHfnw6Sai3ZMTcZktNck1AidsEcmpxNF",
  "key2": "3RFkyx18Eajd7NXRgXspPCQfcs6RF67QPcbjmPyQMQoV5i9GehJHYeeGNSLQ1PWT9xAksmM87ZWDw5dLFkNUtfvq",
  "key3": "31jm3Ak5ie97oZQzFpm6yJkEGQSomdZRsyGDvodzEJRsn4yF72UQuXFeByRL4r82VYLEEzNi4jZ2BNNUbn1iBPgm",
  "key4": "5tbnrFK9zdxP1oWVoTe18dswZGEwrXHyeERuYfMfymaTArpyyv6Z2HvdqcBCmr4E2ddzBTawC3fALcETJdtRtqXf",
  "key5": "5d3MqqAJTMsEy5JdKiQNwF3dfkTi3SbAxBBJzuFe3Fz8mX1Dox54mHARvWFkp1axJoAvNVV7igFF8RWGQJsCuSPr",
  "key6": "4tWgKpdcKs6tL6Umj3PNynedYzFNBTa8KH1Gb6YuTd7AE3nKZhVoRG3PirAQH19r4rq5Zq5GjTAXBwbJ7zKpvv3T",
  "key7": "2gDEe6JYvb2VcTxNXLc7yULACcPZCmkypLzwwM6K3uWUPUbnX6no1Xyau7MZrns8E18RnwSVYzuizaHr8ceVGvvy",
  "key8": "3Q1F18AA945X3WZUwRdnJsEe91GUNkr3X5f5GpVZKAjfEsLLkq6qWSnsrEE2isah5ToNnkv2GSedfM1NYxtbf2jj",
  "key9": "FQwv2TjKsZVdTzmrEq2f21ibNAbWkypXBCt3xGDjS7DSQky7dfQ8jrEocPr67CgWuycVpX7ud5vX9AGKmyyuM5N",
  "key10": "41NueoxQ5djwdjwcP4Tv2u6ZpZuDMbsbxTGpE5h9CDq6N5kn6RvXsbyqbHYDfF15vuTrFrAgxhXp7ZV49EDh6hXU",
  "key11": "47znomsbnYj6YWzUFnfMEaQjxA23xJ2wkUbsT2A8HhLdxBsf5RaXDgSdUDS7Q4pocuzjKJZSYY1QsUPwT4WrHuK3",
  "key12": "4bkFSdB9HtpW6d7eP4zaoPZcZuSZxQ4XHvFEjCuWkN9nsiJWzDhY6KhZnuGnBug63FpkXo8KeBZVori4mKxhtKXn",
  "key13": "kmbeZiDswwePnNHLRVAN8KUKfyVfwkZkYfKBSstJtjKhidx5iPjw8vx5KKke4Z5XMzsr1FSB8MfJ2BVWU8WMcUD",
  "key14": "4tM4rRZLhHVQHXaXxX9JcjRxRPMHwLTFrgYPkuUo8iB2LL6TXuqvJ7fG8cJ5WjjgZzchfjtoa7PTQBE59NV995cr",
  "key15": "5d3pCLse3K9FpYeirEKRgSJtphQTs6NWpFMFR2mcXDM36hFGgJkfzXDgmWhbJAHBnwN1ejCAYaLM1orv7dtA7MrX",
  "key16": "3UZJh3kcF5fGeygoXzUC8bTjYbk22M3Th6iXSTzVijcTmkCGUNvrQAJen4tj1Z12mpn3u14aiLXtATBsifUFxwuB",
  "key17": "gfRDVAWaHEGgMnf6ZhcXQZoS2aKatDySSnSnbjMBhhxkfRyHM4QVqd6v4TfuVPLw1XiodM7yrUNzXz81X4EC7rZ",
  "key18": "55GF1S4cecXLFamey6tU7BsudqzKskg3ydhMVHmbDvnviW9NcWj11QFae1NHXsevKWBS82pLuoSq12EfCbzmKr4A",
  "key19": "33BTzWiCCK6hsvZM57wcUeFb9o4fqTR7w4CYLsGzaSSMJpDoLDGqznDi7p5tSSTtw2tArfB1NCC2ikiQ4LkEz1aJ",
  "key20": "2JNGV4DaunzMAzQ6gw3JYEiDWEFZjXuesebLHvuSzvm5Ln59h9BagapWUGnsnLSbLqFCeCrFuaw8J4T3pJ2q7gew",
  "key21": "5s9849rY38zB7Sh4UzHMvZFyZc88hXeQsRL5GByxoSycGyLUo22pHv7RFeq1Qeuj6gLW7Yxzyq46HGHyqdUPZRQJ",
  "key22": "3zW6Rudb9Dwx18ej43sR1ZfXzLjCFktbNXQs87irXggxJZHrxfthEWSo3fXvQo344L8YqaAzrP2QEmnWnGgFmSDp",
  "key23": "4PnvZz2T3s6CpNd3MgvDStZ3stAMgVgCJ7K2MLvMHrmxfB7Ya4kAYNQnAcr6FBtwH9J2nZ4HiG4RF9MGRCcwABJG",
  "key24": "7ZxgkCx9DSSbkQ3yWcFVwcLWrsRQxY9Xfkv2oGuJpjipvQiDM2hwTfbKefMf1nyFQmLMf1piNVsALerQrocyh5E",
  "key25": "2VwRn5D393uxTsEPfQ1NFmLtNJcNMuxATr8R3F5XGVPbJM6YPk18ERMNbx63Xcj2QxYxyjYkQtEv12sLzzjHgcEy",
  "key26": "5e8hgMQP2Epxxo2MfA3AjuuJ7bdkMmsg84hz3xFXxXyg4YttfgDEU8WY6ARixy3snAyS7AEwPxMA4hq4RpiJ85md",
  "key27": "5AhA6c6tGETGBJt8BmjgAuamNqQX67G52GoiWuyobr4pV2DxCuQyEAv9ucqw8K3mXpSBZQVuDK3x25yhQUXcPKRQ",
  "key28": "42WTcZVCjfWY1yoDmSqjTcYBa2znRowYKmfDrenciYS9CbY8KSE4R4xhhp96Xchs5RDM7k7YDL2feiLhWCA5WjKp",
  "key29": "63q4waYhC8VXzLDhrndmVCzXprsHe7XKPYky4VzPgAbhRMhpxLGnZUCT1WcZZGRLzHWh7yKms9jTKNEAdHnz6aE7",
  "key30": "923hC3t8uuPUnPHhxg3w7KhixMwQdneGoVj4BdzTrRKKTDkJhA5XWBmCA3wpa4BTHpMpNsXVMdihTW2kQtiGiYi",
  "key31": "66CP6YYBhS9nzY1GmUc2jbcCwDEJJPNGQP17B1pEXEzXprYThZjdgTo8z3stwWZkKNCQvDUpZqxqASWbUFiEKxLY",
  "key32": "2ZovetpRGzHAGsTWNoYvhixZDUqt9PRyNN47RAvJSFfrokMTZZhh52ABpoX8WSHyitMA56S8invsj5u5okKmvwiv",
  "key33": "3zP26HdGQyx3epw1oBkJ8eDn94nMYtJ83fDsWa96B4iYv7WvjEwjL5AoEF51uhpgn1Vv9guVyKGQQQSGgFEDogdD",
  "key34": "2KEabdQjtqdju8jaxZAkzCwjGnnppiPdHK1h3Xw8uMkaYCzsxa7KqiFBwZxEDLPvFuS6FFZNnJt3e6ZKQDdud18S",
  "key35": "43RfcfqURiZEZEydPksqirqkygRMCpshcYTwyB8Mz8RwVp1NhQ39jdi29vfUX7J1KqJe1Y2WAgwxHZappFmDX9f1",
  "key36": "ayqT8cV1tfeDQc6iczBJBckgxFdXEtMGGavmFXTauytKUfnWyPLjdQ3Dt2JUzYzHd2WUDKyhwGbn4GECL1TQD4h",
  "key37": "3sakNHyEGuwAt8ArewLH1nSNHh8B7tSuKWkspeQivgcSgU7NTVNeLHnX6LGs5Eyx2d5vNk969VupSWszTtu8UAjh",
  "key38": "3CjZktNoWjm8SPrmVBvayhNpPqpaVujsqChAXyKzu7gv2in1urF7i5XX3sSYiWivsbYteuruUJZj6ef76cBP1jzZ"
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
