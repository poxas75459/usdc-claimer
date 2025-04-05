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
    "4tEviR3wehrS2RDttNpxRpDGSW56TA9p4N7AKNEMUSBiDUTD5psQ1qpaiqV1EtJPQZ7H56pr1gQmRp8shnpDo3Vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yc4mXLTJSwvY2myM9vn91FBegqnSp4TU5TfAJFWomWdpY7SNDr1uahMqE6rc5uwndnR7dowyGzXcEi7iMxur9mH",
  "key1": "3x5SBFrLWxsdXxcdooP2wTmAqKNYtHa85c85Eo19GCpKgg5A8KAAhmVXz97C1EpuCCzwhRXDbqL6ztP4NzbimYCS",
  "key2": "3G3EntvWuA7nW5VXbu3SQq7QpC5Kppa2xiccaFnHrPLbGtGkYXKjnT8Uk3eFPoAWtVuncKeGrjYbqXPfLx7P5mk5",
  "key3": "4SfxQjVLDp5KTSFG6PPQFTDrhFjqgnVqActkYQYCBFa7ro6VXq5YzFtKLTGBuLTUs4KcwGpcQ11JyUetoSKT6eCC",
  "key4": "4UYnSabXtdLHT8z3vKbnbpPCQ7r6ixCVVTtGv19MzuAxzSSfC9UrWecqK7nvsBzbi9gWcEZfmFNPKgaLTFh6BCKv",
  "key5": "wHKtTWuALk1rb4YhXRG43MVQLHn9y2Bmtps3tJaaHGowAwt1pbcPhjK1QJ8EZ96nx7sKHW4trSvwp4HxWasRQpN",
  "key6": "5EaSiN6eL6Xc94hnhsdViv2P88Piki42EYzdHJgzB8854aPujYJz41Vb2gsHhjvhGP4stTCY6m18xVekzpahPHXe",
  "key7": "2h8Mdg3gq2Fzm1BmW6UwwfKWsbjtJztMKaFwWaiFW3wyoAjxFQPtKoJQEx2XAouSkonjcJH4LtUUWsAwqDAnCiN1",
  "key8": "3zPvXHUcQLFQkpmgwSjBmFXGDiVpKzPzpkRj3DSHtrqTTjtPrLWS6RJM1BpMjWx7AkbzK31vBYaMiKHm7zUqijKE",
  "key9": "4iU9khVKmoQVxG1mTQUW17h52Zo6E8GDkKWWEuvqjATAmxH8mdPM7MiWQMDMe6YPFuRYdSL1LMamrqYaEmL1NcHc",
  "key10": "61uoSMnzYAPqbUp7MrheTJteANtdnzfHTjRvqroLKPQZhYjg5e6rGoBnUdvRwqXg6acZFJNUcp3MEXPRqg8NFmB2",
  "key11": "oG79tR1DpfaVu1EDf2HuH3CtLudemkDWGqrRAcEZ7KUwGA2zCiuoEx89USBXfEmMP2eF97UfxJRiFCL7NouxE5P",
  "key12": "5Q8Qkjdej4N4Ko8UsnzqwWbidPY7JUDkit4oRkZKbH6HDX821KPGy6u2miLsA748YucvyUGMomKsgweWkyMD9TJm",
  "key13": "3EjBMe8VvRqWCg69SgNEMnNFf6v5erbJrBXK7wfW7d5nd6wWDS1W9YBmurwxHWDqXFWqXaBRp94FL58oqXH7dEid",
  "key14": "3D8AFiNdD4GKoaBDeFwfiDEmaQmbvQr8qrovb14ga6583pAFvQyCTudEgkUZbH6osMBdFssQ6w8h1yJVfEyDfycy",
  "key15": "3LH4TQWmwpRUNthMDHZffp4BksdonEwgWuJkTrskM2vTLf87CBtTxkQcNYDjBrEHZ5hEnH1WmjqWzVM1tK8q1cKj",
  "key16": "2uAS2TpoHWoMe1hwCLsJ1CwnheUfdFZGAttqneCeivDLns86Ns5LNLiykjgFpmuvU5V9vXvjZ989AVGbKS44cf3S",
  "key17": "398rMLwkLoa2UycknXUiNv7meCxkQUonApXA6HmXELWbb2UMHpgQwnsStkrYMRsH6Mpo7Xsgq4Bk3fhAG6QJTCXP",
  "key18": "tKhmJqNvQifD9RuCT2e7fno4dnnb9r6rbjfawNXGAviYfyPSSVivkHGGNx8a2itpWJNhg5GxSri7kjXzeTkFMyx",
  "key19": "3ccRHScAufPheRniqHQAP3WNMsandrfyghhVaMrRMtvJ5s4nZkRLHh5n1gPeEpbydWrVzxVDhvbiPafo2x1DaBoy",
  "key20": "2WpdwjyYSjx28ousMP3ssNECfYAsT1Ha1vH4eYLKHFMa4KP2wS1NU3KbPTYtpM4MhH4quc1UzufkXstmc3tUgc4x",
  "key21": "28diGyyfKakJCN3i2S6NrpGoLK7qrTMa9Gw1GhZPrPhDeXf6u3hMWs1sDCCL3L9VW8boMYTvvwx9XxasfGrdEAQM",
  "key22": "LVN5S77wd9h7diPBdw4DefLbVKiFNf9hCuBk22eZAW3XZKvb1aZN7Mq8TnrWSg7qmCNnNVvMqJEWTdDSKyrRoPX",
  "key23": "29HPsTMGMNHYoje2FbTxFs4tWnCFH6q2fKZBJnv7DtNUgcSMRG5mJLSFcR6c6jp1j5otovQpccQXsQGrFoBzTFgn",
  "key24": "Epgb3HgD6MS627XMAYQCRF6F2YdRPjM8gXwrRQPEHVy8CZ2wCqa8RB4VRssdVuqCbFSH4xWwagDA5kgcUqFcmkM",
  "key25": "5YWfUFJvmDw1c8nnp1qR5D8ofmLwF92zuwuqExuhkACQ76ETLxaAvpvS9VLb595FMGieLvrAK2Z7yQLc7uwZaY7y"
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
