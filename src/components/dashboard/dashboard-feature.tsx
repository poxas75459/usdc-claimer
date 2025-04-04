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
    "4UPACL7nU3gZC22qnwpj99dUEJmakefCo7Kp6AbF6cCFWxqAfna4bDtcYkZig5FavKaBnfXrrcJMYzKwpxvvkTXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VGBe8CJN1ZSVXCTGKVkXYmTTmRk5Cbdd1qMVfccU7sviLnLszykS1q3K34FnrEaPE4jxMo6F3JU1cuUJ5ugf2hs",
  "key1": "4MaMWQvLneLCBXDFdqypdCznU6jrBeW6usfK3HwxV3yvThDwaHNCZcGaZcEfhX2J7k8TEgd5d5ZcwEb4LB7m1wpA",
  "key2": "5C99hEyiuC6tbdc5LTXRzGAiUrs3DiJqfafaL6QGurRL2MhE3zs45owe9JN8J2Y83XpfxVdnK9zQ1aYDzHjxiKNe",
  "key3": "An2CeUW1vdryULGEikVD96VoQBEsUBVHtb7GR2149mc1ym8SwyDRs8yduxEBNxqX3qyYnK5Kz7frdYGpCebVmFC",
  "key4": "5gz5fnHVE5ww3EfWKSL6LmnjRmBuUCp5vLHXSFFH6FB7kunCt68k83G1zDbZK3932KP6gMAyx9hSCHvxkDnPjCsY",
  "key5": "4PX32fvCsz4ek8fjq7YYR17vbTkjJZcBeyMDNWCtGCuDxgpAh4Zumfog9jcyMK17chGJRtTKaSXJ6s335fTvmbQe",
  "key6": "2tZXJ1fBtL89cMLDo2oji7vQtvHMtzMhyDwoUvucpKGPEKJ8A9CeJuifUeoWEKENdKTgpm8jes8VrU4RHnvFKKzM",
  "key7": "2KZZSYx7dfg9TraTgJLSSzgakoZ92FRiftD8Xq7yaWD1aq9eyUAe5TMgmyeMxzYSToaC4wYPBmWV4zqh3aWYDAv1",
  "key8": "4RMAkn1VegZWhBtz9KhEoLYUkyseTi858WTUMB624qFUCPYHW7fvNYE61hyNQCoDJzXrdXbnwvYmAmdyanjGUUhx",
  "key9": "48m8YScVfg5CbCG27Pw2CA19ztL85xziEsjRBiPxZaMUwDFNk827z7JJ6xszfDPE8LkQQSPVW68n2mx8mPDGM8if",
  "key10": "5En4Ai235uJrcSD5ELFUowLUEAfrst48BYVHkvX7CnjznvWj1Eegj4nCwFH65xaDMGszgGU35zTscbGRAqypsHHv",
  "key11": "Rvt4FG13rmmzdjz3NeJLZZfbLfhxWQ7Loz24MuZBuHKwP9fGgHgHuJ1wdfmRabnuL5mRwJMrXnL2Pw6p7yPsooP",
  "key12": "2baJFMztgnTNteuyuMVtU28MHFRspjuy6sFoA79oVU5AN2j6HpkVBhsdMYZiciaADRp49njBaw2fkqr2d2ySMPm2",
  "key13": "27oU9JFhZkvKhVFwtdJSEDiL2Cf8ftmfHgGJsWBSpZLGTYxiPDAn7do2N3n5s723FHiRZnDYgnVUQPEDX1fSoVMd",
  "key14": "VFgXZuu1DRucGrMJ5eGzgjwW8tYqNhVJ9P5L4p6wRWqgtv6sm3guj1AKW1VHFXvDumjsrYupGzz45bmbJSnyieZ",
  "key15": "2yMHJJmQQRdAp8hhifc5u2BJEHyjehH2jdwpNXcVsaiDaqUeU9GE8nw4zEHsurWDhsTqdGwcoB6bdGewpVXVbMir",
  "key16": "4AdwR9g8s5iUCqpfmLe9kp6hMJ3XgDVokrR97YKKcyqabeEAeBh3LHxSA1285A5QnfP1trrGhaZ71UYkG2Y9v1LB",
  "key17": "59sACLfiUbTtEcKQJMMKHGaWWV8nUrLdyCoEqMrGKptVPMu8KpbdardSuMEJuFAEc2jMbUjTZ1txxxAMQ6M2byaL",
  "key18": "51hX25pBqGKiRw93DCnMCCSWf3Y66zCe1cfDCWNyMyCiyrj2n864M8JZKwK2CL6qfZXtK6M6y88DBEq3urjKevJC",
  "key19": "4grAwNnJW7V1eCFj9x2TzA7mahgVe6a1jTP3v4neuZKEPBL4WMM83wFEgmzirUE5F9jjMcBFsCPK5drNvJJKcRfU",
  "key20": "23kDmMxjArrgGamDTEpX8zzopWwV7jgU9XTFPGWsqdWTqdsadhsuS711Le6Q5rFdBHseHhkJSFDbvhT9ukoMmhvq",
  "key21": "hDoEXfpp3taBVNob78gAhAHPvZHgzMbQ6qAV46YtDRzkt7SE7g6Rxw9vJmEWkfaPTpV7H1iPP1YJwV7v6NVmL2R",
  "key22": "eoexgDLg2VqAUViPij3hNADRNkddD7a4mKDosoouUPdEFbw7a99qHB7YKjvPskA5vNeQoDJbaBQ5HAs19r443x9",
  "key23": "VHQJBaHCPwhViX8ceCeF2wvMRYG2dCFmwn1MyPY6weV3RxxXpu87yv67Czcyk5QDWW5qJLv2JEgMjB4iwJ1TZF6",
  "key24": "51yd7eXnuSXfkZLdiJkWtqMWy65scmqgkJ2u32fZvGMsQaqQkp625mL5mNfbmCKasXg9GA5oZstimXC8LRhkztRo",
  "key25": "39kdEvwVGvRoQDdmNPAZM2mSYvFU5DmAFhCMNim7GCJymmgKeTUdq6QtuqdoLWgdt7WhpVcEwnDKEX5Ar5qHfVh4",
  "key26": "5JYKQ4boUNbiJnqy9NuMMMHxQiqKxDnKvBsBNtjFsMitjQdg7eik7ShTwJZcV6bv1tp8PSYFbryKtwVytH3SWuLA",
  "key27": "b8K9zfmThBo6kmELctMCokZfDcBFEvVpt2u62rto1UP8wfMmFjnqyVEwKf1nNKWnCq5vQRrLx8JdDCDh1AH9yH5",
  "key28": "5vWKZMNgBTiALwSxbYdxAKBp7aLC3CbM5f6pQbYd2XM4ZLuzeFpvViSL2QFdKpYHJ7VLaEZkjcRWX38oTJreyauV",
  "key29": "5AF9QCaURtUYB14ju4yyjsnFTsxCGUE16HAhkbsMQJVWjtjMkYKFHYDitkHCWE3ZkoV4aqLF5tobvPkemvE4wgNf",
  "key30": "4XmxeDhfBBAiEirq8rgF9n5yGvrkhF8DW2v6Etv4AVeL1oo83xsSgsYAtrAwmzeywX1EAnMAFKC3xwNkySpg5zHE",
  "key31": "3yCBjbVd1f44fGXk2EE83RznrxsGdPvJ8GZWjuhCKJXjdzvu6aJspsfMubkM3ZQE41hdx7XrzR2phUp3d2Pitgi7",
  "key32": "tzVsgofLBB2JmqVbvDgmahXPK1pRtGvtvmsoLhGnvKqTutn2GdhuCub5YiAMSwFCkfJyx1yhh7kpRyjRPUJC9ja",
  "key33": "32Zm76UZZMW2sfWJH5qWTGGedG4yGUuu7cQK5DWfC3Dx5uvXfxcnRGjwC1qm4aGx6aqLEdzL8f6k5ELg3qreKDQG",
  "key34": "2mexQpjnFbEpniXyLHhUsM3EnqX8ZCQ1cntgGAEBFjPU9gWYkHGyR4zMu7X37f3UmWPyzzkyuwLNfSuWPxdMhLM6",
  "key35": "54Vx7KED9zzckuJtXuUdkQ5Vg5uhhd37GiSVEHWSiyxbG189zo9BjDUH63qFE627KtDvK1sQUybtpg3phP3Qk3FM",
  "key36": "5HywYv4dt3uaR1FqKkizUBR1n6taCfh9fHnsGP5Z3DH4ZKpwGzkRr2dUYnaHA8Avug2MgcZwLdSQPbJ4hQRN8LK8",
  "key37": "5t1MU7gCVREFEDudKYqcc1qfJZYuDRqSdghPieaXemodR5xo64DRV28eHh1ZZoMnpUWJbkSsZnyh2Yg1neDa7UAe",
  "key38": "5TqFMbQBPyWrda33cWbEk8YjYyrLxz3HGhU6NpXvqDWTb9dZ2aepDZpsg3rASNee5svdkEMLhJwdrs2xnRLPW4g5",
  "key39": "4f4rxszyNSj9ZHf8mG995Tfyzrh2qWPSD59Y2g49NndL6SUw9K84tGkwuEsYPNpEucH8Qjmgu4ez1kyVU5hgzL7d",
  "key40": "4iBEZ4CZ6srZ1r5CMPzQVjJMqmoNGMeRRRCLgCmC6SzqCmLVn4pFQHCh8GZCNVzYb2k52VNjYvhpRCWqRkjkYtQn",
  "key41": "3KonmgzPcZTraAscwYAZhg44bxLNYwGnxfuvo8VTCSV5WYLBQmFG9LtnuQDHgerYCGSgCMNePSTeN7LkiAQAxYxD",
  "key42": "5A1Rz4UJ343eNdoKLvW74vYvWC5sG6h8yRz6e71LXfGXbTKmyGnX3cnBFyLe1zVfNNZHz5ipCvEYysT27rnxsfu5",
  "key43": "2e1ngF7wJXZrpkdPm4U2U44ZJEfWvPFfornh4G91ckPaG6jqp7azHwXcF8AVY578se2goVheuaTB6qKq4TMJDS6z",
  "key44": "322PAWuUnkcNztq9vYrJb5AEtVoCqqPdVUS416YmT8FHGiaMRXAczuXRyDoFF83YBUXoc3YN19H1erACaXxGQJ8x"
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
