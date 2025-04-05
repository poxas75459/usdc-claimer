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
    "2EmmvuiMqVsotuHdfYB9Yx4jMm8Th7Bq1ywjWUgyk3UZpdN1PHik7hA1JwvYp7jzJpugRVJmdfcHZk4Rbznq1J79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZZdkseHF3xptMFXciMVqm34urNEe24PoC9hjSp9uzJANPqMTMcXTSudREd8Y93AcqKYWhPMoqzbEV6xLtGYrar",
  "key1": "4yX3tBDqAFbXXPQsMSx72N5KfsPw17H8ENYbfdqmi3MXpKadVm7Sa2ZmNQX96SNmsDNn935nZXktsiKub7ppqgYk",
  "key2": "3gZSHQa4RMKti1KjpHzzB7erv5fHQRLReMHVC7wTAU5xsin3Ka44yArWUS8o5EjV9i3iYU8dk4kzz4ZYLHztXfh9",
  "key3": "Q8nW1vPFEAFkHbGtHheBiGShEQ4ACj8tNNpix119U5cpUEysPYEsgxZrVW8FuaeUuuUHazACPFCy7vK4QKkZw4r",
  "key4": "2LYQr9jhKkhCXq4D8MdKGFuczd9aAoY63vKFsCPLmS5nijS67efKYT5Ag3KCXtbWVuteZmNbQCT1ANm1pQfAnQwF",
  "key5": "3KhKX3BjYg8yFwR4DfUuANs2T8naLmmoyG37odU7mPSjaervo8ZNF2u4WaBkDNd2jCggssw5BZWioojhihre5cRN",
  "key6": "4vprfxcfdJs4ffQTJ7SWhzTeGbMxSiTdodZtLadQHM1BqGH7LFTcdCxm16J1eZ7SRofX9NPgvtPiwZtzZs3EEx2i",
  "key7": "22Ugv1RADY4uLTqCAxT62C5tzuK9yo6QXXYHvX5P9XM8A4nEu1PDEyf3WUuF17KLAoFZKLpJG1dNWKcgHE5byGJ2",
  "key8": "2UUfgwWZFg2ucZmhYhd5dCzeSp7j5emB8iGsbE39iT7fVha6HpsvdEgNBjgaXYpRTvH55GoFUQZbfMUWRYGGkPyr",
  "key9": "3X3Af7ECvC6CiHZq7gdP5kXMFNQVCCZyCgbBgQ2MfmS5VvwjXcvBwSiGERbVo3CdFkCgtpCazMGze8L7xMb56q2v",
  "key10": "54Yxx6B9BFHKjzaW1C2CPjZvmCpJjb8tv9pbcCT7if7Bo5ZcAT41zyH6V329f6hpRkBbYf3HpBcmxprC9WNHkDF1",
  "key11": "5BEpFcQ5yq1VLZeu9CJcgKApJY2kbUo3dc6qLGk89fv9rTeEQDnWfUetYih6oqo5uuZ7YCN4LmQTu4SaF5u3B8qL",
  "key12": "3G62DgPg6hXccmytmE8MMorRRESSuziv7jTyREdqqsHQ473bDHcdwBoKA4jAaU82XVHFwzttuXkDw5ojNEBz47Nd",
  "key13": "2ec4KxQmawPMTFeRkmPwky1gfQ9KS2TxSXGwZqBCoGpbCGMi8V2bf4iz51TQhnRDJpESkcPKNNptvWveKejNvaJc",
  "key14": "5kXPhqV7VFbS2Y22roiv4fuCZbhadaxXPdyP4o5h3FGnNKPYhTiEJStnuSwmvRcXQXpggsynBtmAhKhy8NY2KsuS",
  "key15": "61BzRLApCLib2cHYKnqZ5aU4JeiJiYnfhC4edxyMzt82BXAmWGcwYErQeP3rM75gvXaEMayjSMfUCxM3Z5G8jQBT",
  "key16": "22hGTjKpR7CY4VKUPNFcExVwWFFwHC7jaxiRQdpQ8rCeowPpzsGoznUu8kcCmRx8Bw76c3r1tp4RQPs5QogtnWof",
  "key17": "3t2dsecfzpsLWncvha16DUKxxkSWWapEAEPBLUNf5gYNGLSAfsQ4BBFzKmLSas7w7cMuW7qgyGyCrMwMppt4gV5S",
  "key18": "mpUeVJPcbyzkkUkRVozNa9pJiEnfGhhYUxoW9NqKuXdoQkf14HT79iZennFhcqEexnHDktXjNc2MPMg16CkZHCY",
  "key19": "24fGM2grfL78qMqJsRgtd3FMUADLrA2oa5SKV7TP6QwSYcHTdMLgUweg1wwB8RSnS6794Akmb289sZsZrRAjURof",
  "key20": "3LQHViHd3BiRtAqFCwn7GN52KP179QuMtmPi6WgBD3ySzcLFkCtnznf2RbBc5WQk12wzb3dDGNa9AH5P8cEPBYWV",
  "key21": "5oJUWmac2KdDcUwXG4WzwydxqoNx4dwW6KJkEQ12BUU2hSd1RXmDwjVVTQSraWbdg1hkKR9apaEwWwZw7rV9FGX7",
  "key22": "59zMnQDC3Ni8AxwRgg13zZYYu52CNviDKofigp8r1zPUUVzECDCW6YZj5bvUZwkWZHCUeuceMJLgPXwXave1cRrU",
  "key23": "2JQvdc2Xe5UqcrBrUKPgYXb3QKD8QBhB9U3VM44796UWPGbEp8qour5UTSKKaT1s4WGxEGBa7c9d6T8qmEcCMi3Y",
  "key24": "vJri5Y2WBhXwqNsYzQTGnegWqCzRCgytptsGem32DTDWuxurh3tM8k2QST6F41oBF55FvzqSaT39S3KBb94wFrM",
  "key25": "3d1re5VSbmydDEF8kFNuo2G1wnagn7JpDPLoJdcucCBaz4eqn4vfXWB4n7b3cj3SAWFFFXJFD2mCUPP7npYwjiJ4",
  "key26": "2K4mkeUFp6sZit2251yXKWYb4R8294knLC4ZxPfStdzvttDECKArSZG96VqD375oEh166HzWoAay1wo2SV7AXmtv",
  "key27": "3KiESAfxqgTii6UisdzGQpPPmd9bgwPzuG314DWDiPWKGjX24ZBEvPhhexfbCH4r8SXo3MhiLZraUZUcefs6MUAy",
  "key28": "42LM1ip3Tm4EgFvNCRF2WWCXuPZmLcngKr1xe4v2RhtQowX9QojjK4fz6YnFv4vstXimX1UYiwCWAtfjQM5bbZa8",
  "key29": "2EqsABBqr7Z8o9CHg8gddn1RJgmGxxWpY865zBdarVDJ5LRfeuDXiPtsoeus3zNojwgGbqBuN6bBBFBr2gPUGBKm",
  "key30": "zKq15X8DAR8Xo6HGq5qvv2rjQC1GzcZUHsqJvdbgv3JuAbyG8uEXrS5LATwUEA98N4tz9e8d8H6VmBJakGGuPoW",
  "key31": "4p5cwEeq8WNALiWr8tXiyGS6DWg3H6iUhNGwBeSBnSCHVtdTZqnGuC8mecJaNPwQfhqMLt1gtW9NnTpv6okojNpF",
  "key32": "3dsBQr9sewADa3UhsqsQoUkvKRUZi1RsxP9fuGwqdEyoCBjbMqwsd9UfceQ1Vo18nedE8wm7KAR8pWzYtuVMgKfg",
  "key33": "3wizfNz5etKNvESnyeA7HQVV6Htq7AiwQ159Ad43pMMTVFysKsqP1bd9gQXZLf1o6fXKD7D6jLg1J5VK5majpTx8",
  "key34": "5v5VTQ5RiapwUKcwC4XoB5ATAK2dG9f2LrEyyMwwE5BZdrFye1nsTaME2MT8RSmvzfwBVzZkUVBF2wcs1TpzsoGP"
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
