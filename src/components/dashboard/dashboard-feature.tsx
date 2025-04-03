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
    "4oQY1kRWSYHFgNAdjpoUZQA67swkEpowxG8DJThcN2C2CAmbSfKzf4bescEBFQ8K5txm1Ds5LhJyGmZaGfR1z4pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25u7E5YPTRb8CkvhwDkn9LCx9LxNVoT9wbpcd8iZYDF6uGkQED9fyWAJ1RLjteK7Eg7GiDFnu3NBmvW7wNF5rKkX",
  "key1": "3rUs4tU33PYrFncBtXxXdRgwN2iJkwgFaT8dFcYQpiHHP5WRiUCHLuxMaPd9UfpKPK4wLpMdMPA98JV1ULcxh97D",
  "key2": "3t26MxDULiGdMMDGqxWbVZ4wyG6qcFFcqhkb8a1vymXQMr5YDyav9G2j3S1tGPHaTnBzmf5DkbvjPkRvdb1dAofh",
  "key3": "2ZLRttMBrgYspij9X9bQTuLjP3upNeT31bEYmQPGzoe48V2WS6Sz9QJjp5Zayms4XFbBJmWXefH3uWrboHDyS6fu",
  "key4": "3SrQNTTATgDsWXj67QYMoVZMZQ59LKRQMjWELvC4ks5QKtvcq8uaELSsTsxQAKcPZyucK1UVwnuoQmYxSpXyW883",
  "key5": "4mCGV6h1svscrBVPx7xNTQQCJRNctH1BfVDawwP7Zjp9ythQdrrzViRnHzYBD2NRdRYYVydvXmNTcpwemSVe2uWt",
  "key6": "2SA9K1d4BfpvK5UXFGfHLNJn34uQF2wEiAC3Yij7JPZQEq3RErzisQu1Muhx5ksfyMcoVwvFoKfTWCNxyAqiNgeE",
  "key7": "3DszVYHYPNTbdGeJrHcNZQdnYLPdSbsFeqSXwxfUFpTTy3P5DMGLYYy8mfsmB7H1h5E96oLEcyG1Q7CNE6k8NesT",
  "key8": "36M7QPBC1aL2BPW3NA8V8YzV1qvx2JVp2YoM1aeKdvoPPgJ7Hu4xG6fiSXp6v115gPV1oSCPSHcKdiSoTwEthyy9",
  "key9": "52DURa2hTB2kc4dmSBQuJv7A7nZLWeVBbdDGSRnDBXjWLFE5XDmbLDnXStKusTLsa1rNhQLy2zf2ERVik7EZ4Pps",
  "key10": "3gqMoX4KoDe8pmbL2qg5F2Ynh21YSvgu9NzWCvZkTYHMx4cMJFqLARLtyBtRh8bRNXNFchsEwV9kdiAE1qWwLo13",
  "key11": "vf1odobyCFJwFjMZB5dxSyVepoELi4nnWnF9ZdwsZ6cS8ggRfaUy7kRCEXw6UvykJzRaoaA6tRTsVbwvbLqn5UC",
  "key12": "3mtuUZgn2ixB8YxpmBmqK38FtEmxBeK7XX1i8RzQwtAsH2JmKbeAPZetUmwybNvCpC6NTs2AYCcbctugBcus4Tyc",
  "key13": "2iTZHmWQtDC8NDoVTAPpyrJnP1HxYrH3ZjA52sG7Mi8LQijwSRjeK4r39nomsbGdvAenpKgExuW9CQ6vT1DHUmo9",
  "key14": "3PXYBWYKr6N354V958PQfCFo7VMZJTqhUGcJbzDMZxxTKEDiu5WfFSKUt9oyvi7yJfyuKcxy3uTKUfwyAqbVuT2r",
  "key15": "5ddsqELDeo84disyJwa9CRjiyDVTgGeXmuAFaTsyVUx3F754CQLZGYFdfiMWYgjbZNyBD7ThNdQisUncS6UMYyVE",
  "key16": "2LFsCK4Atz2mmuKWPNx3MbCPLHwNmFhjSZB71kFNcAm2AqXhwuSbd4vQU3ECXgftwLaCByGeR7Bum3B8yfXkjvNk",
  "key17": "4fkcrEjHf9qVhoKjCp78Shgm1bdvKMV85i3bMgJWjhyDKvss3htSEEMmSwYtaQcqAsMQkm64En5qqbdXv4a4CGL6",
  "key18": "59j19dmGKuFnV3sVBoCj8Snd26s8HY17XfHXvUyxFoWJZ1q6yqm37jnGm6Fr7mdAMmQvSEWjShnUe9jyZBPALN5L",
  "key19": "29SaQEaBQD27JgFJHfTWa3YuUczxTPveBPjkwzkaPMYDoZgioZMrVgL9eUxB1H9qxS568mUVKfqRuy6ZT2mpKMJ6",
  "key20": "57ReCbGWxwQAKmnniNLHt9dWFpe2x2gMJwpN1rYqVJ99GqziTZFTS8k6JvHny3mGbmLJ3emAEveadrM3F6ZLTzhH",
  "key21": "ecbYuvm2PUS5oKGk6tWzfcWyk4qCCgvmbLx5pj2R87tRbmA4u9p4tMFktwHMqgjrNwoRkz4aF7G7AJeCstoiaL2",
  "key22": "4gRYRA1UMRHDfskfdjRiN5XJRid3L4RK2ic3UfMgRPbPjy1mazE3oTzZcr4HNLFxKXuemrWbvgudTxgZsvt1xyeq",
  "key23": "38iY4exQjpJtsSc2wUTUAJSTKV13mKh5i88uEq481piWQyjs7dBUB8w87stRmt3y7zSWZgLJANPgt6s6Lvbziv1e",
  "key24": "5nv6n6YfHn4LGsA2SfWUSQZfvAjSxVSvX2QfwKnZ4LFJA8JNeA5P7Jpw3z68AyVvTNgeNRbdkxMsGZwDjcZtWpU",
  "key25": "5BJ1FEjzDmwqAS8vpRPCRcaTqtgy2zjwCmFCCBYUTc2SkFsQ3R6Lxn6dYeG5RmttKAJ6mDqnnbLGQyMwaCSoVdbg",
  "key26": "2HFNx5jA4LD6hHSbe3sMPp34ExV8AxPN8dXfJhWtZE8vvNrg6SiWCdtxSh9KTefmbRfPztjEL6QH6hiLEL6aZJCi",
  "key27": "38jAaAaC589UMg5KVtsKK4C5nuL22YwniBq3vrpbv9Fvi2NtGdKj549URhzazMVi8Ti8uxcrdZGMq6gMwesRwpkD",
  "key28": "2KHUh2kPMTx2VBe1fUcFEy99m8ioxD4r664G19cK8RyCe7GVpk9bgw4DYswVSjGzpFUoydQCyWBPhFp8yaHfCroY",
  "key29": "2YcH8TSeF8fjXbcX53q34JaMMUGXzsrZm5c3mCypjKEKifJA2Y9ufmvKTPfbcgCudA2vuYMMo8gnJjx9ZHrNHE5w",
  "key30": "49PT9KGu6xQCwxJJ8rkHWMXzHxEnNRnbJ5pjwA2vwvc1jSLv6FJimbgAqGDncC7mKdGctjeZChJPn28w2j1zbtqD",
  "key31": "3FwocTZmv4kqDWT469bqCTQpDHTSiKscxYpyMmni1HdYXWU8qwxrQ32a7FtwjBdBFYL2qSLF3nRjSpmEwnys4HKy",
  "key32": "8Drcmp2PBdHHfbBRC2DArkcRhzpvNaR9LUMaWjcuwsRyYff2J2qaCLW6B7FdeRAT4fgJuphV2EyyM7CYgg2GCPS",
  "key33": "433UbUmyR2yRLYToKzAzhzUhSsFFGsm1FZVUiXrCVAC6ZB8k9GpxBAt8PHHbuAv5htbdiSBqQC7SWEqjctXFbAdG",
  "key34": "4FAWmNG3oh3UCxzAWtwYmxhmDicUdXL3ZVm14XtqfiBXbXuSxNQNqCXZ9PgY32WzXs48Bb9iqC2LiANzSf9uf6yG",
  "key35": "4oP9N8BDXnE3Th5hqwbSAKDvYLwiksC3hgmiRGcwZia7VhrWEZX7mYVsnDLtZQGn8UbJ4io6c4qbZaFTczHEdGWu",
  "key36": "U3dkPMu1PZdW1vsNTc55dqwNtsgqd4hYMZAhGRoQ7DJNMc77Kz5sZcC37FjVj5H6dDChBje1EuisCTWFpwNrNMr",
  "key37": "gAtKhSUCc19gBUwf3i8vmX7HY2SYPQmDk91ZGmLZE4mp9Fb3i4nqAD85xUD1dUHT5rVmqWeKHNg5xqYUMbCx4sR",
  "key38": "3TEviqq2tyzAX87z4jKuHHEXnDRbMZT3BfYczeCSGh9LhxTZUxfqYL4VzNibG4r4mPPtSjDDDajTKG6MeppceFWB",
  "key39": "49LGJYXWQvf1ixetXxDPm2Fx9RJjSuBUcbRpFVdLUFktg1ZiskP2o1oEV7w4oAvnUFG2eiqvduJSdzCNcuETmgAi",
  "key40": "3XYj4gaFBQu98q5QNsitoT4raDGcFsLSUoZhD3yUVTS5XRv64UtTYHCwJrQfCtjVn73KtV79JwmqmBWqKMpXTTfL",
  "key41": "529gzmtHkH9twcKEc8msAxN7f3ofU8HEFZvdswfMBVq65qcp13tP6GFat6w4BHoUmf5qxQydmmybeHRF51FrwUUp",
  "key42": "hRs3rxAwhKJ9ubCHmNWj9js1pGBpma3iMtvmXjhnXdFTS764DhzFkN6BH3VdYVxB8ope5Gm1CsE92dzUrb9cG23",
  "key43": "5AhcXwr6Mq6kVhsgZF8pZkdnTg5Ndtv3rkqA4UjyhEwa5LnHNEjeE8uhyHmQBAnifj5Qvj7pViuLQPAkWNRdQ5AW",
  "key44": "66jtDBYpSqHuLkMgGmtohDgpLHLBF1Ujf6KmyQXj4wsGUpHVFuhSZNYapYEQAw1nWt95hdV1bPk86mjwKcATbhSm",
  "key45": "5Q4friXrqvqKHF2EdB76qFa6cnu4j5NSjuTUKppbrVjB56TVcZNcE89TtwYpQEzK1VEaU1kcNi6n2BkHrHqpT9Ws",
  "key46": "Hffe7BdHtvBmBpiXu7LjtCU16HN96qBjrjAPfxc4cFTGqEYfoMs5vzUW2VhSGtZjzAztBMSMDswNJtS1DuH8FyN",
  "key47": "2X3L5oT57e7eEaAq9cWkW3m93nXTJHTcoMrPKSXEWihW7bzcngwbse1jHLRZneVMMukmgFzBRh2dQdh93TG2iz18",
  "key48": "46Eu6DHDFzgLH5eX2PWzFVnVLxvqmBgSZfSZ16XK39HMSbcF1CwJWeh1o48LEabDVSvJ457ZthjxvtDVogbgUnQ4"
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
