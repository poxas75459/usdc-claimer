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
    "5NcZf6SxodSLWytbaz2LWt7279Uq8r19Qi2Ybnc8NcwRXk4FbZX1jxCjHj7a22eQaZv6CKpSA2av9b3EnNCkzu3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jMNeLTLGV8GSFfk33FVobTZTCREa89YSWLsh99GBbR8YkbGaynzwtf1cd15zpfKHvUqqDp9sVkce93fWu5CpDte",
  "key1": "ASXK766aAdqRHqZbxWqWAT6NBGLGAPKXfBx833KrVMyJMGbmMPmHcXtbwNPFJmpW8jkVaRdG1JYyWJVXR7kNn4z",
  "key2": "4f1YpZohr2Qa5snQBtGhBLVxrwA3Mw1KQ19qNSMC7Fcwh1GkWnJUfE4LcUV9CKVQAWPpkZ5c6x4V88StixoDUNr8",
  "key3": "5E2F58UoYp6Y6h93TSUMbBgr1a2kzLP5YoETmDdrHuGhvuFx1wpZwf25T5tJdE96yk4ariDShfXvzgrEQqywQ9i3",
  "key4": "2Yyk2g1m7YVRrbST22o6mZuaz7NGfKTUtRhy3jiQAfVb65715cUkgRmas2LTgYpMVx57CoY7GgG2EcLLEFmR6tms",
  "key5": "2S8SWTJABTmPw3r9iF3ZZJAZB78eHHNGoZny5Byg2yEudDpuUH1pwFeLTVtY5ewQtNFnKBVusSu5C1y5eP8HLJFK",
  "key6": "29d8Z5CvgJKARLTgHnm7T7yVaazJdRwG8Cgg7WXRBTUyLC553yuCJ3HqHMTYrBGYLr5D4uP1icCv4fEBHCNC9giB",
  "key7": "225sUKekwv2PPRDzqugGY4E9BmEZeZHPH2Ny5YJR23KYFdbHayCNP3C7sXhuZdrht9qDDiT9URibk2mNvHzqis92",
  "key8": "2xLPgewnzRd1qtzg99BaDU8c6tFR9oqtKRbB9YC7Zp2Agwd5ErGjmHJEfhdefCxPCHMJ7judZpt2ZsbCaJArxTfP",
  "key9": "3T86qB3RcdWiCSXe1PwLKsamrYCF3jy6u3tXGinCMe8kjyujs3HKqo73nZq41zkHToTsFgvAPCLY8Zh5nCaeVfz2",
  "key10": "5ETmaqtPihnHSNspgNbHyWTfZRMmSc6YyxcNNwkFBAvFyhaA6kHGxENiFQDm6fRWHKo3fg8PP7dSZdRvs15b9Yje",
  "key11": "5ji3f96ZyE5ukqVmztqJJjrJ6WuRJR35hZfB5gQmazFrcyYcnCFbuRDG8ejqFNmDBXYPYBWGJLhuU2Q87gNncAWX",
  "key12": "xMQCd1n1LnbUCdzTbERacisiPXZeLqQJs2CaCY5jGVHm1ga87ngjMXUUje7WQTnpJ2eErYaugbEHMdDZZp79itR",
  "key13": "4HJ9hKnQa7h78K6NxTc2Un6aLCrb8JLtDDLZysNhrWyvPVNj7Yrgnp682Egmi1NstqmmVmJ5FNd9hEwRhgeRDyGp",
  "key14": "7JpB7mriUk14PJ5yE76fpEDwV7idQUaK9BST7BC4U4ibmXeguqP1ZaF4yAEFhzzJH3oJrBG71a7xPG6kQHWmcLk",
  "key15": "5nLagHv2R1b2MhqJ1dJJRHyfJETEvUQoyQZqweo1L5kyzJo2bNLphBtvcta5D7ApXb1gPDeJ4h9ptEcHR3HdwwL3",
  "key16": "3ZUZGnZjAicN85HucPJjedCNps3Fmobd3hTzmeiBnbfhGwjLnWJuwXmpvVXv78HjNgb1ZurpL83DSLs8B4FCb6cf",
  "key17": "2Q73SRRRUERTVfiRRj3eLp258J8WRY4vRkDEqFyfrwVNg8fmLCcD74GQkixi6G3NHEjPS1J2y4REDNcAaBMHYCvd",
  "key18": "3J7uNEN5obLH7tk2vxkbBeUCdT1noXUcVfjXqPPde5XMotV5RvK3EHiEwWtdbaRU8k7DhTULadkvfTQTgA6Ac5YS",
  "key19": "5cVEC8Ez1ZjGEJTeTYrux1S1BxEJbNMpdmDNU76Jc6ycbvR6EcBUrFD56DAJz7crAbMWdvBWp4usim5WsT3rPbcj",
  "key20": "4rqrFg2WrPLF9SAWiPc2LLgPQ2xgmSruA5r1zdVXcQQcgkiY87nexNGuh1rZG2ArLAokoD3zJobak8CSKufFsZDU",
  "key21": "4QDRMX7EWA2TLmTCRLZTqPMi2Cduxunm8kBE3f4TYTkwGrPZNLoBk9gUNzs4KeDSE7bzzT4EkxwGCVvYiWRQdSf2",
  "key22": "8BzNhfa9quoaEZ2f3CidWzZ13WRvYuo6p3gB9i45GpisQW9AJrv8MkTgTbBS8qocPyG1kdTyneuV7jVGnQfxx5c",
  "key23": "5DHD2gEdENCwdMPa1FNk1un38JutjUTSvSn3WqAGbsyrs9t4MdsBL2fGsf4rQ97N139S1PUVL3hDSKJgUvwc6MDt",
  "key24": "3GtvefUec3611pyysz5U5PKpS7C7ELwfTs6VpJ44iyz4g1oVkur8bSRxZKpcdWtpwjRWyJ9H7KTiGSqMfxLpZDN",
  "key25": "2CCPbwgD3RrexXmP1fxq2fEmJDBXRFB3UfMex1iBXsPYNEFccBds3BDLCx4kN4AVLws4mA4hxALnwGshbafCsco6",
  "key26": "3XHNK6ih7CShPPu2S4dxhXyUecq9DuHC9j2DeXNV1qq7pwhqEGSrX6vgqRhpcH9B68iATzSZqH9Fax7v7tBdpBcK",
  "key27": "yHLuf6aQ4Vy1xCnpoKzc5HjN1wE7t5hwkasFBnPtbEuJRZAbUmzEnYytMjFf8vdRBuuBoEoL8ft97QRaGszVGy2",
  "key28": "NtTiYAkKiB9UCZN1rZSoCpHE6keyq5VsawoTJ9qPzm2Vg8FAXMDTK3Y8Ln4MQFCCcaDuFFBBiJ78FEetw1rEn3e",
  "key29": "4yAExg696PmAmQ3Gk7k8sHYeGoDQFGb3K9ZKxP4uBZ9NHyziJwYd7ae9U6RgkUZF6tzeyv2ySnc7KNt5nu3qX8NE",
  "key30": "3uvz3uPbVGrBrNmgVn9Kn2nZjV7bbkUhbUdaXUhXT9NwjjTVe9LsagLeqvYoo52jHJFxz1tZ6qgpEyJn1f8CxGFz",
  "key31": "4oJXsxPxon3Ct8iY7XxXerGdCWsbJ8XuheiHwK43iMu6kGVXBnQQei79j2R6qNFJbZ8yZ3ZRnChvSbb2ABqmQoJh",
  "key32": "X3GfrPb5neY7gURU5TSK3iP4FdzXzgwmnVdeYk4nSvTyRv4N7sYfQDsotYjrtM68nTfrpBjqLBPFzSLuPbBoDP5",
  "key33": "3fqRJVTVpkUQj9bZKHr8p9pULzV2fndQMYAHCq7JMvSWcQHG8nZ2etpYL2P6Ukayf6o4rvM5HH7wHyESYygHQpJm",
  "key34": "4TDHiwoJz3BLMvDApjBcCVJkXd9tYhVhrox37zA2quTEbfAgeZNFM21J8Te2n97CheieZrbg62iwdt9sK3KmBNa5",
  "key35": "5Fz9XixeweB5Lo4fYMLW8uqxDGQ4i9XEt9X13iTAYth9GbdWDjphqWfGEF82b69vG9kKhdzWJA8bTm84xjT23ytc",
  "key36": "ac9UJ3DGNXaa2cYiRt4tfFx9qrzTRi8MErn3vEufEYUfvvLcqiBFPfHiFSfk4YMXKMPERodBkv7V6pNa1Zqn1ia",
  "key37": "MuRjWPRzEjYK2RLWXvGvnAZcCF2xQaAmkKe6GNMbJrXJLPD8cy3Wj4uBfvCzTrvuewHrTkzoinQmL5i6U1V1jRu",
  "key38": "34U43Ka8DbVqCVYHAtvF5zZv5jkagusntqCcu3RtSbMB9W4NiTYxLg4hHqRgiPuGNgwQJBxQVjnKUx4jaq6eRL7X",
  "key39": "5mWEhaMM11U5aUriL7WYmG7ZjCN9MfgghUAxNcqjEXcSBivuNqeqzhGpoQpvfji5w35LpQXq7GS86W7GRUKB5ASj",
  "key40": "4sTQdXddkTsikwzXJpyuebwp8fpzfmHwBjhrKfVEX9YB3mivmFxy1DsBnCMZYWWWvTkjpCCX8hTX5fX7s1P967pc",
  "key41": "ajx9m68NzHS2jQwdCg6Aqa7ETquc5vWL19wQm1pnWFQZQeK4NCJPTFfHPouB45URRV9o2q81VL3EDsz2vuk6YNv",
  "key42": "5NvAUWkeUuXG7NAwUTNYF4SG3xwh8WFbAZCDwdRfiKwomyfb9iCtqgH83uUDgTBCq4cRr1iLjoE5J1ZpWzL8LZFR"
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
