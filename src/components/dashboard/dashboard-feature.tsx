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
    "59xPbfNFBcomQRUfdGEmnMH3XaXcy9ai7sCExMh8j5Rcg2i4YFBLQu8LSiz3wtSUdUfpC5whrjFVkL2ZNdqHvxu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrvryyB9w623XWSR98kVSXwRDJn97CdpCrhCfhaMo6jq2EZ7ozQUSm9ghAVxAt6eZYTcnGKHCD4WqSaoGdF6stx",
  "key1": "4NcRyWAFgPQuDp1VbMDR56EguDmMRm6jENaWPD7uFnwia4JwgyQjBj8BdYXQMAvaQtqWDqpBeSW6dFDsdeVijp71",
  "key2": "5HEi6EoMDkeFFXjdDtqPxsWgkCCdEFh4A1vFjsPN5rq1H1Bsvsa8JQKSUyKSjnL34umKpKtuGny6NGbfEq4iEtQm",
  "key3": "3ucyxrz7PW1fohqRBTzsSyiXqwfLLn9zJr3YvWK956d7z1G8LXgF4qSvx9oDWn5qoLCRBpSJ5gCdWWSyY43a3w6d",
  "key4": "2FBUiHdX5MaZJrYUXQDetJHfzC9T1L3t32CLFkMrfigbmviV7YzDqeVCxRHJusJjdBXiaQpww6btmYs5V56dVKkL",
  "key5": "4UaHvcbrWriH7uHxGduQCfFiyQEq8t86q3Fwjo1xn6iJ8mHq9PdyXHxjhX514tG2yt1k3oEt2ddaF7vN8Ec6y7WZ",
  "key6": "3SVubdmXJ6dqiadeSvc8hLKR4uSJFXprWBcxWRtuwd2o8mTf3V9iKeUavhd5yi1prCcFSFdsxG4zbRnvEE8MVmQk",
  "key7": "5bwky8nrDZUwXfLvdmiv78cU13P6uRGMKk4nTf2WAt2S2SU2e6EWisgU2wEeSRAcFpzEDy3WJPzmgx6pWuTPX6HW",
  "key8": "42UEQPk4zmSDnNUnAZ9YCPgN5wYaqb3p6n6aAtYayqZzP7s3488vXfm8vWbZjzZfqC1JZdofL2Yp7me3r69Z3pZa",
  "key9": "GsR2oBGG4Gr1yd9pi9od3vdq1n54eAW2whhjZsCz6jdRBwEZtBLWehmS75p38jd4GhNg2FLP7PHmUsqaQkpvEVT",
  "key10": "5Ui96aXA7eEyLcpZRsj2H8HwvHEZHUn1Ref53yYuvFvTRQ7T6aDnGfdcDQN1n6XYecdE7ijt4Khd7JYpABoKtYkj",
  "key11": "3m7fVfu9jXMMifVP7aJvnaSRH4YdCEyQwqKCXBNTR4oo3PadSSJjHxEFzKmns3KjVNoVGSvuJmzZ5EMnmgpeTkbf",
  "key12": "2qUiCXuvuDpjMVAA2vAsFgQyWdqvffr142Rdi73dXkbStEE1G3ggKtnc6QLEBQbVNds1WroZVEccg4JjpTjj9fUC",
  "key13": "2JB2qVrAPMvB7Lnbhx2wg8zCRmhTFsHZSaxzsZmHKpqWKyzjKTeBjLeSnPHu2F8GeDJhFvqjUg4D8J38byaWPGwu",
  "key14": "4LYaqRyUy6EzJPdvCcjSZ6NnHxYFwYujx2BNrXwWXbWvm2nAtvAZ7sVGPQYHzaFqRT8a9fC57xWXoz9WwevjzzRL",
  "key15": "2PbLtV1tYp9T4tZtXwQbf3kGWPMiMXW1Ew2Nufueh7jJjuo8yPSBWW1FPfGrg3Y3cVEi62S5GyTdpi43XHC5Ydqa",
  "key16": "2kRdZsgBQ4yK1eaoNc8dPFBbLHLLhbKNc97ZAgHGunGtAheqgfNeMGBnzEWLhEWVX39fvwjH7ia95P913tbVZPPP",
  "key17": "5wYtvKTsmBMjh8E49WT19zXHp9V8GKrvne5yGmywEpC9pWo9vo1ixDgYdL2sKKTyba8XZwVKmMZdS2Djcy3keZfy",
  "key18": "45z4LAU9BMNGr7ZiPfdrh3veVnPosc7o59zWDCboUsbVUzHXeWoYqbYW68yKXm2axxHSDBzxTMb6hfyNDoiy4k7L",
  "key19": "2nSsFdLcXSJRFNL8RAxr89f8rzexV6B4VqhYvdbqN68SnhB5v43bnLRs9TyF7nmpsJrr5iLBwbC2UbC96nhck73w",
  "key20": "x7droBguyEhEebjkdhrNPfFFczej7Yr9FwFtUDpdd4tMNKbDEKKJXJYZLGGiyRLRaSscz2hTPetd4CuPdQwS8DM",
  "key21": "2BaCYr5X4dcCuWB3jpNVBk66tMi3XPr2bdinzkc5WRPJqLfVjpywQnKTCUJY5fkQKq2bwG3nx9qgkjLwiMmjChTr",
  "key22": "3jGBRag2XGaK9vHUwkVYLD6SqAQouquAJ513KyJdvLGAUrS6YqM2Ai8FXHLoCAZ7v1FHVdpYnvpxeyUmF7ksf3kr",
  "key23": "BdNntE5MCvXKEgzwcxrUBdM7nMF7hfLGoCebP2ZVo18Lpzx3RYhA5DWikiTvttNq2wfLzXpC3j6PRJwrSy4iMvG",
  "key24": "3wqCUdEJDnjw5PmbfLTU32vcW6keTozGucADaoCx3wLZCiNasBtD16NN9JNEdDwAvqCfThuJW4CJJnAv5ZGfMrL9",
  "key25": "2tkVsB4TQUwjSCzc8r7ri5ZZ2Uw1H7kJUvjFzczPyDNDJJgMxLof1q8e5yesFmnS5tDhjVVKwKe6XaobptgacWFZ",
  "key26": "5qFRPWD1g9mR2NKMWWG2CGk76AeZEeWu5rj7qW52ontqT28oMJxrGcM5gnNX1R8VjCX3aWvn5uZd6XwAgpBwP2p8",
  "key27": "4Xjx2HtycQ7vWvEV7tviLAwyE9GvqCcuGmmV2uJSnWCQHuSy8cThsWYki5RnJjfgPCpHFYNye81KKU4U8hVEsrn2",
  "key28": "5Fc3q1hSx6bcajqUy884hfRnydrrauaHnwhDxCyGyWWXCYqaEYrFq2ReTB11dUVGpHtMQKswMUSYqqpiK6esEMXD",
  "key29": "2gDaT9ztdCoJD9RLTgKdBcBtpvz635jc9ZkVhWAcDCY8vHbwxmfGUgri3HzjagyGTaj3UvcCRAAk3APpi2nCEiKD",
  "key30": "5LZPGYjN6g7JNiroPrCJosHjdL1cLGK5iqEybEMG1GkdqmmoyPt9Y1QSdVafRP3HHmzKdYwkG5mCxSNj66mSaPRv",
  "key31": "5AEm2opbW8ycV7xLnUdTDxdYkzdK7X2jaQKaZkMaboKDnLEHZ3YvSuiRY7cwCBpSSHXk3DwTWMyrV8kviJGT1tGC",
  "key32": "5Td5VB6AzYsq8RvcYHniDwu7hNmMKQu6DFohBfNbU4TBD72YgASawg1JZDGrAWnWk1u8tmDHM4h7UF3yrW2tKtqa",
  "key33": "4J4zGmEECoDee8qzf7VriXyffVcVHxyzKmv71rupqDz8P4p9NQcSc8nWRznTXxirwsC8kQzbhwCTkn6DstcHe1xa",
  "key34": "2yuYZMhRaWgEQLJsm4X2bEN7BTN2EcuQt8QRPE75EGeGM5Zd1xtFDedjCSa8vAA4K6oxyfUWZnvPP4bsgc4h6Gsn",
  "key35": "5J8kZnDCU7H8tUm9m5an6nAtiyGneGaNaHFA5rB28Qkh7aFtkE1GyHmyeAMPz2QxyoBk3HrZBKyf6D1SSxc2Z6KA",
  "key36": "65RPTY1RjzDyNHJmUvjuyx7HPC64ojs7vg2BuXgc6FuV9YaixMVg7Xt35YmcjuxTHiB7jFBvtmn3pWd14D8Ub6L2",
  "key37": "P2TvDZydCJMENXsjMuxSNe4HeVcB9Cbm9p88XVPXhw8nDnEqkzCeq2JnE91ZP4FkbkBG8zn5aTFsYmfRhCFXcbh",
  "key38": "4J67URHSPQi4djspGxoBE7KhfQrAQeGVt9ZuHKRyerPqNrhpkyUJ4vwRAM2ojePeFwMzDtnPpXh7udhsjX3CpDJH",
  "key39": "3JtcCs8xgf3c8ZRNDzgw41n7JWb3EaN1kXjM8HGjB2aPfinsoiE2HMFoNfXsL4DGoyzkCq2qeUYMT1rXhzJwaRWc",
  "key40": "tMLPxp5ACLU8AgracEEb8GwC98zPXwXu6CcEigBGaFPz8NwGxR3DUi6zangyPFBT3jnR2Uw2sYeK5tT1AjAMvKX",
  "key41": "4R3Xn5biwzZ2wD7TtBnaj616bHK6GfEuBmrfyemeaXpgNt3RjVTZunTFuBPCBBzZZgaKDn7PNmpjJLqFF3fFsML2",
  "key42": "3qNVz8FvEJ7ysTVhbBtoEzh8dDU55QPPrEkfZHipBg2L1xWqqHbJKFkv42Fm36tYdTQ2zVW26Yrmw96HM5vFvpo5",
  "key43": "3VXyKUv5FUxTA3369wfJvQ5PvrSjCPpCwoGXALB2LcRRCx6r7fvc2BhvQuTCL8KYsqGErXYsg4LmJZaArLh5smwH",
  "key44": "5gYUmaJ7rRoxeY6hcLYETnyRjG9poQhcYN8PoqEfnV4UoafjiqtYFvfLDkFyv7BM5f67i1988icuB1DXQBqLdU2s",
  "key45": "2zW8tNCvHokrsRm2ugRXJZxYpkY3JbPip5paFeCjMGHPgM6GL1J7cDFDEzqwcjGSnCrdFm85eyEejaEyiBLKS8xY",
  "key46": "2EfpxmWWpisv1nW9npdymDWUbgmDNUga9eoxNLqpNeaYVFkeajpQX3iM48aahny4GSnvuHsKWavbpSVbR9DtMRo3",
  "key47": "5EniuAUQXpp33zJV6GssuLCcs25ZuyT1QTyNtZFSNgUmz6J6FZvJL9gKEb2xuGL6E5Qz9MntGopo1pqJeVinLjQ"
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
