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
    "x2UzaJTb6BQhE4V4At4YtfCL72ZqmsRVPLbM2rkGZd8sjBN5KfvwDejxDWKyJxrUNKNUVPE6CkLBzX711zAuVdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XsduH9QN6kt4DcVrLtTwpChJnKGQax53Q7DfezTYW33tKheYVpNZwr5t3jQLhpUJPkdk39r5GLtx6UqnHUpyzYq",
  "key1": "tPx2GfyaXHqEi9G2GndqBABMQupEnVw4QWwXDLNCxahsZbn4VxQU2HTXMnAn4uHHFBLyddXCAY6Gf1Le6jLKELM",
  "key2": "2B8GA52unQcEgbeLFQxqCdEjCCJivCHyyW7UEjxEeHgVVvPnqHwR5VKi4S6DQc7uyS9VRVdLL9GyCLN2JqDwFzVP",
  "key3": "2x4XxDUjYYkPNrif6bhD8ooLts5SAcCKvmjzxa3UEfFLNfVWqj6SpEYcNkJ75f8sbxmLv6kCk4hGsKitXCjrZa64",
  "key4": "63QR3KgvTUvSRHdQtRDTo4QBin3TL3CAfnnkGAU1MBJPtADMWjkz9MKaQAbCLZfzXTzwFQZDmqjwWaaRGpsE1KBM",
  "key5": "EwPjXwayk4DYcHoGvRzEMSyy8oaChaP8LTRx8Cabpf1taSGdsngHCziuM94F5AGbvqvnyGb4ZWEAHbqCLRpMqgF",
  "key6": "2T6E2H65AnDVvZ43NvU3sxyzUXsSAV63eGAjhc5LfYxoKjRhSVGjnS8yQkdjaxCLTzLpkoUACtV7fcEzpoSCgqGg",
  "key7": "5rQYJ69R49eKJDKGU7oNxQdiyrCip1FoDcoG9Gxf8fET2Y78uk7duYNUnmwFz5zZBGCTnEfbnbqntya5ZZCAibYT",
  "key8": "3PDgfRMwi77xNNtEKqExaGNwF4kSNE3exEGsSzudHNgL2SvRFmjmr7uJgCqxFYopEF9BVL1jUAG6Gtcn5B9Vz6PC",
  "key9": "5jHtQESUvs6xFVGEAy7SvshG3D6BFJrZ89JFpUqVCRmGRhM4cevcdDyqBmc3JPUgTWjtZRgPBqRLum3ochZdW37v",
  "key10": "2BZB3bUG7qAFZ8nYRjtSJKAuj9ocaCzdYxG9rMxgo8ut3mbt1z97yequwv29uvBr4RPT67AJR22x5bMMr7vvjRRZ",
  "key11": "2Bv6PEBQQNdx4DhMiZ6SCBidKkZtey717RSUqBoaygmGGuTnwqQuB3Fx7ar9jb7L43yW8mcQ4cXuXzHzi1iSS8qU",
  "key12": "4aW9GfQhfNyY87tpjns5WSRvSJfYakDZPohLChJbdVA4kniC8yDBoYWpkjQ6qfXMqxJ3SYFqrMiYwLVyHpjox9U8",
  "key13": "3Ysra2MzNn8sw9WjgHZ1WyX7TkUbaix3R7BKZNQPSNGsRnogZa1nHioRpMJQHzHrinqJ52uA2LCy8y6tiDrsbCcU",
  "key14": "avBkyLP3iQe25btBor78cfPwbiHqnr17g97ZSYNrEEEJimgHDvdf3zhup66H7oLLD8KSKnLAFiBxBUCfnyQZDnF",
  "key15": "588qhGqBMi4eUULkA3xavCKKQTK8zBPeQBpCTDGcqGdKDSqCBRkXV4CG9MiGn5HDJsR4JSBTkzRma2GzRVE1W5QU",
  "key16": "V569m8XuH4rckpFbr24DZLAzN6TLf29LuN99JdV1FEznJMBmoqwXoE5CcgDDaJycM3YgUBN67zc4YJZnzhr7xuY",
  "key17": "4WoQvT1MexcNzpMm4Ujmkj2tibYtnd5oMXYjDHf8pN1JpEdvpmV1iBVJzo99CwCoBCXKziUvya49rFv7qUBM1Bdr",
  "key18": "2e9DyJAwPXTkbFDhhb2UE3gjmDaowQuXJy8J5xscKtTivhUmUNkekoriVH5bsnQTVAgeLrBMDWpZy63usns7srrr",
  "key19": "3Yg9rkAp2tChvWHQ6FX3kExgvoEsdHyydAYpb3fvbLfiFFJZfmPzA81fg5nr4eqzA1qab1QQrUxoquJ8zayyxWm9",
  "key20": "48cpSR4p3BSGUCmzjKrvyETaugccQgb4C4E2YN5kfmeR4pspfTEoKA3RpxSjFkMwJTtQvhwNcRCRfsCYFN8xPueB",
  "key21": "4u6orrSPH3nfvDAhr2FXbVvKiGmcxT31hNLPUVTfpTJKkaqSoqYSLaZKkRktvV6iEJJZEM5JJKoLzmiVW6sLKERX",
  "key22": "3TqmMxxNwUMZhyGDkd8yhP36z857Ptj7gXjnbtNiFgy9iakP7CCuhvE41DvQHPK4kJMYSuvSoyJAFwcE38HFNB6F",
  "key23": "3Fcatyb7nt3DTsx8q3xx2oc4fwRkoUFLqo6CdvYrpDp2o8RGCYPkeCYJTJ27EudZsWGWfdP2E1NorqYtWweLvzdt",
  "key24": "5idxdEBbggBk95exQp4jgXckHcUGh7yasngPhU6nDU5h9zVGpY4RrbfProHVkhcxZWixrB5a6vaNJsfgLSeMD9uT",
  "key25": "3W6TiuFhm1fmzVrMzCLjDsYi7v3dZRwcRjek7BQqm72WestTN6TDboKQUbh5x3FR9poZNVGnKXMArBYqBy1RFBSV",
  "key26": "4VFHhk1tNqAfDJEih2FpBxRCyHWTqRea8BRLAm6iC4u3Twr7AHLJETiZqMvjqizfB2zD7CAqshMVbGFn2ezkRSEy",
  "key27": "27hBwgTjqzAauw1GSJrBCi1Xi3ZsWwFWjbKgWeExRTy211oUvocYxXekZuRqeZzpaVFvj6oRj7vFGrgUNVH1dqMa",
  "key28": "2QbSYjHgG5wEV254XUK7yEoj8QcxgV7UBxLZGWy8dmxiTLRwVRaxz2jiT3J2TUCoTYbt3Z24qTJE3cxK2VcTHaZu",
  "key29": "3P1mLvMbVAGRxFsYzLUqEpVqJprJHxzV9QgA5Uq3Y7JaRNtanELgBWvjqQAthQRu6y1dSCr8gAa5z4f95czPFYTL",
  "key30": "5j7nKT9xzc9b3t72FJkEgXtsX5HZbU3GRbhixc75PHiDfKpUzVuvBL6P2jjkJv2MWVXuovuUVcAxBZkFjrdXuG5n",
  "key31": "2jknDdrxE8kwevmbXxRYQ3a9shxV6QVhbcsfUBPBpbBMwPuMwQqJxPE3vBjkNn1mgZwozynVG9tAE9Dja5UQoKRr",
  "key32": "2NcvDBh4NK7jf35y16Y6TTk4KmKVJoc7iutG7ZffMe9uPcd5sPLsXpWSeT5ah6468tgt91PTJuQ7zFueFHNzR86w",
  "key33": "24wkzZpnwupUHUcY9tErpKUitenb7F5nzmeNBA29bfuFB1SFpi3THfK14RrzaLgBfjRvfpA7zhX8jJoN3QYgJvRB",
  "key34": "h842Dt5DA1KJ6j5FEssY4py6PJpdJZqGnvL29j7WqymBQ51XSeqFdovS7j2AQ7YirVboCpC6tQBwhUjQBSRFRui",
  "key35": "3bA2nhbzNoW6rUVm4XhohgYhm9DPxebCHVqMw17RFzbADWcqHgZXjC3pxKAxBb3vDDPyYPMnnYVmBWJtdApCpEcQ",
  "key36": "fHxHQ5pEuzmNzUYBtghR6wZpYAvXpiLKt8pNpEiWUY7TJ5ENMX3Y9J9xAT415Ge32sEcvNRiigiLbkim9xAvfGf",
  "key37": "tB6oZCCR5cEbQktqRJZ1WoeW26qnfxsKu9p3ffrGBGtPUMQFXekZCwP1NNRUWaenjCZmSE1wxEz8fDAKbYDsTEU",
  "key38": "3XmXPdbxejnegMXFdCi9czUws42CphpBwXN59qcfBodCnjPXuuhGrkGNf4EAf91tkFym6CdPbuuJUC9QC9Go5DbS",
  "key39": "49Dt4hLSUU8EByzLZFEthkJrdfmYVWXJ9w5XGUkv8zqD9uvSvXUK7BBtr2A87eVB6JznBf4Dv98HHfvozxd8jCwJ",
  "key40": "9LZagfGWtKG6gZ9npLSCir432zFRyYWQe8xDv3EQneXpHQdcvCwq8vmataa9LUrwukMqTZ7HKDchj8Wp6AyYqc3",
  "key41": "Ur3Uooah6ASzVNTyBqUTPPk5BJgUjnrozX33R5YhtXJAsPAzbzRNA5cR5hiL169wDj6fQ5sGYXBfk4s11FEWowZ",
  "key42": "2q1azL676Exz3cAF5nVvvPQYXSV7ZAkip3m1XndFNsikTVkCZDQVcb1PLego3AtArGLRcTCC1Cz5BmQFAje8nfh8",
  "key43": "49owS1FqPb4qzq7yTsEHyoKYxbFGFbALinV7QeNEFJ4kNQj3NdkNVcdT8ppDUbdUeLyNReKJz8czhif2JVasbVhK",
  "key44": "2oMHLdHCnbQXuL9QrzaL9ncE9XrnspwimxoAzARYS9NgLHNpWCMBkvunq3e3eofGGgEoQ3sgaEgEi54ifQwG78BR",
  "key45": "4etBA2b1Wm9kF6VbPUr2ATC44HkV6Yku4PLi6mnw8KfhJvJAwA8ND67BF55py7zcZpTV2biF963cpeiMHpyv2J1N",
  "key46": "xG1k8B4JdMZ7nn8DxthD6pstYCTkUxjFMDSiQJmkt3xRXvVRUqE7AyW6MCHQrNZBy9VvwLtEopVsGT4JX3nYjFD"
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
