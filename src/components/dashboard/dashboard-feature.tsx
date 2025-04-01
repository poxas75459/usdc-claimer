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
    "4Nfs6LL83fxjz5pgbdz6SrxtbRnsA8m3gVLgCre7NFrMRDEkMVJc2h5Sf4dRiF64QuityCnpK3rwLKj9pxevvpA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srGpycnhEViUijMR3mQbC2FmnrZbsJaQB4iVAgAvUikn5tG2zeKDhb8WKyKjkgi4bhDRZA1wikpuRy5Dx1SWGsi",
  "key1": "2UWxJpsiQsTQhKNBhH5m5cw9t4grxAqhnXvBdWvvjQ4Gqm2Xzy8gJ3xb2gd693TWau3nKPvXDvYDZbYFPHuAHEMS",
  "key2": "4c6fNEisMNqfvv3HDhid6PjZzESzuPoVxigQXjBbzNu3YxHXZzxrzXwF3XbJgbWoJWV3Nm4pMhuHmTy4CJP4WHtw",
  "key3": "dqJt8YfZDWAXkrdMafcGuchhbQR68FpHPECxth34rpQydGS4pFxpxAUV44P2kJtSi58kDi52qHwDRLjxXHcmhfu",
  "key4": "3LhfYUoDyZABMezFKvWawkeBYEoUACKN3FNg2m8Mg4cH92U3dNT9niU942KQ4HSRBuipiR9kPdooVLCPt9P83bVb",
  "key5": "2nYfTuu8fTTt9Nn7kcU2XFY5gk2t5t1fzZuru5nRT8bdPNSZKDY1CWYEKXwMVrtg81XC4w4F1Fx4RddSUjEgSmih",
  "key6": "3bqfJ12KdNK2ikKWzeHqBHr78nGw7Vp1D7gpcRnGHm8ZJ6Vy7ZobPNmkD81ztFJEjtPwxPkQkxqn22Wd7YV8WKAF",
  "key7": "5AsTpiQVRXUF9nhw5wbeUrjdLSJfiYmFCohaQVp1GDz3wwR8YovZbDvVFfwS5c4npiHEBPmZhry1ztP5vpxbFG8s",
  "key8": "2rDMj9RKfZJWGdVy9tRtxTMuJ3ziqfEhgTgSPYwpP7BmXyrWPJ12YzYRYocqtFnsSLRGYj18WhBPmYwnE6tAaEL7",
  "key9": "2NExk2D8uUksoATztnmnmKpaqzZMd8d5xkMGB43VJDpMdauUzAxu4DK55ncgBy8xNyhCKsoM5xuLMZe3QwwdXDyH",
  "key10": "r2vwcHd5H2vuhdjsYKSDMEuKsxXozmrLttuYMmaUxqgow2ZZhujceM9VqTYFxer9Hv3wdxC2G9tRfexPLFZ1Tem",
  "key11": "Lsoh5RM5y4thaip6WqSDAMGbvr1MRxZGrFrbJFE5Xeyzs8VTnVMZeUcMqgDLGUckbXBT5L6nk3AxegKDp13oioz",
  "key12": "4gsLt6wziD8qacvGESyVbyfYD4f3v3pLsYca4bBk9Bd35cfuxzMMpbUPrHZWuD9cvA5FnZJyzmJxE4fqpbupyo4j",
  "key13": "3h2z26u4ky8nZDTBiaW39zFF2fEh5hGvWC6LoghvXxjmGtLLGSqhjSo2gq1BZ9JQdoLhFTkj9HL59CfWd4435VSL",
  "key14": "4tCagDk2gHAs95AST6NdWnUv92rpx44T6zzTaEfhW8xvbqyVRPuArE5hKWtRSAShUuh2xEJRnspAjtcjFaCsJHGs",
  "key15": "31wHmo4ie3d4c2iae7SpPd4pfr6qL85eD2khfsd2ewiLLpePUVknFUjksAPWG8ywRbDmTqENqZHTyzTYA39HCLSQ",
  "key16": "327HuWHS6QusfCyz86zQQChqEkFtpQEC92xPYFwBqHEgS7Bpju69sUJrWKAQUDuA3nfGW4wx6RHNYmkJrjZJuSda",
  "key17": "5ZT8TM1DxBKXCG3aQpbeg9zZnFbpcvnNYi2hDxXY7A7eLHckwCMjh1Kb2v6KU8XRNuyTsZJnxqvw8WoSdihokBnF",
  "key18": "3iKNHRTZGtjMxP6Np1aUiFAq3CEzDRGTspM94FGER3ymG7CPComJHR6McQ1437PMa5k6wXYU5PzC5udFSDJCpRdG",
  "key19": "zuEP4x2pnQENrpntaYLfhGLZTUGhv8BhmGaXtGm4AzKaKhoTUCtGDtn4rqifkM2ASDYD8abh1kt985w5y7xd5mf",
  "key20": "2jPMSsDjnaUZUDVwWcDiVdarTDusPvVU7SW4wSKzitf7DPqEuZ9CvhmpdEQutCkkFF2uUwaPZwiSzSLFKzzqdvZi",
  "key21": "5LBv3DAmpCGaLDPp2yGZtjQbacHbsLfDLtxWiSJY4iwoQuhTyD7s6zYZoHaWNkMn2182J49eKf6Bv4N5yNxoT8o5",
  "key22": "2RpjERxGsCjrXToArfMPjmveYAXfiLwYTrykiMoif3qq29GDXwuRsD2rd8HGfmHWWKVV3etzvBC5Ce4KTiP78mS3",
  "key23": "4pcdtUPEsmA1HjH7LMUJnW8yMfgeQUNSaMggJVzDi4iyY1NDouwqPb6xgW2z7RJvHGK1iPQsviBmHNnUg9uDQVM9",
  "key24": "28ZWqxDegGfrRKESWXNKoMUiBUAHuj2bogpL886aN2WKweinzs4gBswsao8rcTmTfBq96DxUZi7JgCY4PLVVBGD6",
  "key25": "aLSmaLzs31gah48B3TkzLzSZxz2C7GTZZdNtHeDfL8qHdEMdo1mQEjPyTNZzS3qVCd7umRwfDKax49je8QBmgCJ",
  "key26": "5WHGsr3jXaJoonseTbrUZiB2EXCLxwTLy1PTnw6gBLpLDCCPV7htdVi4iCLdBKUx9PBFA7yPLbgmTv7h9RS58wER",
  "key27": "3wF5hovQnNHxAu5YE2Sd7W4Yvj3V5zewq4NjTvJjYBkbC4zY4yEXvooMRdtq6U783CDP6ZGEGAy1sr5tzxZWc5ZW",
  "key28": "5aTEK5KDacWQMaHPif66yM9e12gKbsyohZza6rwkbe3oFsUk9XCAqtvYMyLEGFHpAzjfqSdaaciJqwV6dMYvweFn",
  "key29": "3CHRG52nvk49zuWqXSxMiRGWG9E7d3CuNhRKhxbao1vDFcQgRCmg6S9fKGKJxnSM23HzFu3ZZwcALNmt5dhUG5SV",
  "key30": "reAk41ZzYKcpkxJiaS7bHLw8qHsgdAqFVDFF3cPhLd2m582f5m7PdfXY3xHpb66FKnHWBx461NaC6W2h5KQBV9U",
  "key31": "3T6cYYd2mFeW81ypDJeSokJVm14vNxD1PRpNkePUM91mkJL56TiaohTdiqygeCPDsF4RW6pFwnPvQ1sExFu8eadT",
  "key32": "4cBQGq45xWUXnL67jZaqij3Tg6Q73niFt88ZGLdafi4ULi6e3P2ofy8GLukSYiKbURKngqjU3NUzrDuiciF3cgs3",
  "key33": "2wn4jAvkTKXK3DWFSGV5BVHDmFsknDqmqdgvfu7xYmgtJbcQdGhoaHAKRVNrsFUGzvaGuDnEGSBCWGLgSHBKQ1da",
  "key34": "KJhvZRzRxandySaNPcFbVtfm3oGk5Hip5uXEmUCWVSPTz2AcFVHwWjPy3nffHLxGH27BnsViB2jRSheaLyowqE5",
  "key35": "YjV3fmew8PyPhQRY2YoQ8sQLzXtms48ARQnBhjsLXSYR7aHDo2GvtwxMVQgJYw1HLaMdrqRbt7tf9vkoWUFbMb9",
  "key36": "6y31Xo4GEPY9oybcyH5Fidh4PYkafLBUUqLVBE6ff1SvVxrxGm3HGnfNpjEHACEgTZG2SYihXyoJLLLXJ7G7FcG",
  "key37": "4xSMF6dbasjhUm5nEeXkRDCdHf9rfnq589jDKZ97W4rmibYCivtoHV6PKWEUnRK7weJZXGkCdA2m1JysxwJrcXgN",
  "key38": "5PAB5AmqkeKsJ5qtw4rxXheF9AiViauENRMmhHT9vdDJ2oZDNj2yGzn7DAf6gmQEbkaqmf9Y5VHtD4u34srto9gZ"
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
