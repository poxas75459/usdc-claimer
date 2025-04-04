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
    "3hmQM1zJTdoHgVixkCrMQdb8dir6VvjGFLctQq5um2sE9NKtTrLxf2jj93hxcmQ6cpgV6st3kTR8qSdUBMV3RHUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sAqCvbH1BMG62qTo8JajoJsg5RxTfEFh7pRdMXkgbpuWUbq1PHSPTSztonsevx6rDmxU5Xv9mk53T2JmbPFfKPj",
  "key1": "7EYoM1aLjBZ94V6Pb6e7YzqHLg8HhY7EjRx69HYN4K45eAYx5ZMvA7XtL41H3vGBAf7vg4eAwVRqF9Y18GqN6jv",
  "key2": "5TNDWwTZu7EDZyvNvphh4KuGPxajJD3hYrxN5ddbAKFpG3GUuWHGZNfv9xajkZE1N4pMrLGu51AsM7Ddu3HrvBjG",
  "key3": "5VtGUMSdvdy9LWjajx1To5sqhVDjpMCuiVgpLPdA24KBChoxhDMiSeM1mYjmvBeTSezFX69Epo4QuTMUFzm2tM69",
  "key4": "541hAVFe3CT9GYdtQb5HFe8zuAjF6rmM3pvGstyaW3dd4DSpvu5JBxJYRuFjF8eK6gv2xXTAzQRfFLf3e8xUUS4q",
  "key5": "217iRgz6H2Lutn6aBhsuprztGZCc21k5LfStZwivbctfiTayWjhN9Z4mwdufZJDR2pb82i5frvr8UUjdj5FcphmK",
  "key6": "4zma9dSTka3wHCAMjyDRbY6JpkHCEaCMsLV5GqzaC2WNzjmNW3fN2nhvizyk3JQh7UMqvdp6ZuZpfu9ktz9rYhSZ",
  "key7": "3m8tF1F2T5tmHN459zWPmWefBPphmpSGTYJxodeAe5pFVB2rqJ6cEchmXFkna499GFnFtKDAJxG4DVDybnWvYieq",
  "key8": "c7HhPksoAU2pCLiDPgAcujRmRGGe1RsfdUqwfMGKK1XRzWEw8mFVWsuQ8W7u4VWWdinwZTiDynpUhC7x2gQVe4v",
  "key9": "2HviYpsHQ7Bn1kvmGYLUqYpPYXU8NWxTPeERZ6oDcFoDJixgtASpYrs5HKY6LuhmgLaAkMgUnyS4upF7BHF3qHaY",
  "key10": "5uicAYHJeYvrin4V83KC47a1aYVWNcooubfxyaECimnxSDHX9Y1PwZ2n6jjpqqKtRKHcabiGZ2w2mQeddMyXbEUR",
  "key11": "2yaPwedmcgJMoZ1oPPr1LvjHSwbV6S4752kA5Q2mGTSny52GgzUmghbkVBWb5YgCJrBeWV2u3LFKAW9GPN7s6AYn",
  "key12": "4DSyc6BvYMMTnRbi6qRS7q7Y4YEQhmGZqGmWRV6yGnWXkmasXN3gvwXqV7MktwFLKTu28RZ9k819EZUiBjiPgwQn",
  "key13": "41rEo9rBXfo5moCegXMMeUefCiG5wQE3hEwwniRDHitXpCGE3pVPDPdgH1V526La2siu6PXJDeTEXzQfUQXGZ47s",
  "key14": "2WWwRrHcvCkoMVnQfSVaiuLt8doJyR3irm8wMpsg9P294QKojMjxQHtBzoFbKbHb2RbCG2HHjmo6W4hu83Fgmogi",
  "key15": "5uHV7JfosMvfJ6LsV57Jcnx4sZdXFuQjnG5FeELZSiHRYAfKEU5c1wUJJeppq6tgGfJ6V1mFfWNhMbe5o5gbtEg4",
  "key16": "4Ss7WnUqemfuWQyTYoDtKaXZrbZMbHVFcVqY9MfoVQEDvUQ3KKa2gLzWNcUXf1pnoJBFNuJiV7EYAuDXx5CeuXHs",
  "key17": "3YBWW4ZjrXUYWBqAXgrDiJYpsqrhS8rbQQAMmrA4egFNGvYUYakB9VJvbB2HirdDTxZHnBmPkdzAmvrym52Cfkrn",
  "key18": "3F1n755GVa75EDxtayXjkLQLmEMpLM2AB3BscHbQCcjDY4JJQs364DaxuvMMNktmjVbQ7arjNKRpmvkU5DXmG3ab",
  "key19": "5D8VVfMBrLCsiGo2faR49F3KJsoc6S5PH1raEXJWtszFWMAaiuAEa4T162okAV77PGk95rh691cSb2N2j9RMCPir",
  "key20": "thNtyXpx4hm9mNYG6FyNVSyWcwhNcUJxnx7KqmXq8xhAHETfLJJ6tmCoyazESKhxD1tijpWxFnfCPGZBKY8cuiN",
  "key21": "2JDRR5TgNXjNxMVFk2y4zqs5WeEWy7E51wmMiqdGykPDcaWP9LZALWDVnwTwtojAJxjh6kyThfuhPLyqM7jihUNW",
  "key22": "35Zqq1xP65sNX4Cz4pFVhzXypPELxpUdeca1HK3aSTgpA9bYq9QbMFdXq9qEP16N7FHaMqDAZVMVuHaxeGHEURXM",
  "key23": "4wg6HCFoYNsvJdionEtabg5gySnV8NC5sXxEr5RG5NC3afuPKE4UUgtFiHS4z3nzFE64xM5tPMaRibTHWg1avqMs",
  "key24": "52tzpYPBHv3x3KWENwJrB1FzhSLp14Mz5r3NcbDH9G6equHWbibEKvevQmRFoQ793nLx8FmUQHtQmTLyNS9duqpb",
  "key25": "5e3y5Q1JiJ5s4t9L6m39cUzDbZ1yXA6r1H6CoUnT1z3zDAGBzkHeGJYPAtXy3p1cZivKTCBmcfmhAQ1UgriFNAbV",
  "key26": "34EpZgpjqNgEfBcJHYfWdyk7QWWE9QyLGp9SVchg4DkfkZTamzM87ZsBRHdKs9DbD8qHEX8e9HyHG8YpMgEwgeCe",
  "key27": "5CGopBD3i5xy6YFxuS99FdFdfLXBVoiYi6VavGc3t3JjDJpMPQcCccePoU99yC4zcPwV63jfqMYE9ATqA4M15U81",
  "key28": "uKhgiKeUG57a4iEBisKxyXksGcsfx3BQ5fkegKRgZATMaWmFSZjN1j1HcvN2T2VrRRH2Jv3dhvv12jtxLJx1kTC",
  "key29": "5BRZ35XVCh3LRtMViaNpGBo4F5F56s4Wf4GqdqVKm1xyErdDrSZpNxbRQ4GxvSwhbYqZDmWjnbtB2Dv5UqbHZSi"
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
