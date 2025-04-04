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
    "5WkitNLtJr2kYixGfH7vPMnGckmf8WxB2v1wCtxv681jUNgZqiSHbh6iUNHGk7pe7B4zu4SSsaouPVpAwPPgc9yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35THhFXjFwFhfZGYiBDCrWtWYP3nYqmj4Eb1sxgz2ugCQMDXdKkWRXApmutPtDaCVXRXu8UkzFs1BzBMyieW8Dic",
  "key1": "2sdbLNMwp9d2CZEu1eRpVZ6pY39qNwa3na6p6h89guvwQqNefyhH239zL6jcEg2awLs8wuLaikCYK8pjYJfW3ocC",
  "key2": "61mremPJMmhZucL3zSh4o4u7984JzJkWyKSK4yQ1oCsUnie5eM1x7yfKoDiAMZpZB8gJfU5gutzXSqXXCeYFnMQc",
  "key3": "KseRycsB2BexYyr9imJECkNewM4HJPPB5jYmdLwdZVrRH1tZWGQDwQdbEub8SiAkSai6nWKcEF1HTxMKYr6G8SK",
  "key4": "471oh8SQM7UpHWnvhtwMJATA8v39ztGK58RekJHykcmuwLf8KtxStFQf93dD2N5TBMiRX1uum1MDRDuKpABYCagA",
  "key5": "26reDj8Bsv227D3dtmDwE84rp9TLfQgwV82HBMeiJjy7uhLR59seQA7m3iXQNGnsCtuDJvc8NvRDARsJ4XyDAayf",
  "key6": "KyaP5C2FSvV1ckAcaoTW8XT9vFBwfYe7Z79MeEqm9AwBPtq7KkEsWatp85cHMmBpPZDAkhP2B6QgthfzjvAQ7dN",
  "key7": "2CqpRDerfv1F4okHRaNQrrtKknmU2PDwkEUNC2oV1uJitpDj6bpw3ABR2Z35BTKnXwUjpDrNtzH3A8sBH91inja2",
  "key8": "3ktEMjfjbgDooppwwFEFuzZVLFzohSH9ri5igJUgyirPgh4GwETHnJVqAVNjVqb5esmSg4GLN8u3gnoXsVjLVUzL",
  "key9": "3cVkxYkZvTNhpsinTYR2X3kQWgjzkxWnntcekHpYPrDrJdnDZQDFvynsz8FijnfRpVz4syyxQcuXhwzgMAXchZfD",
  "key10": "3NtNS5FkD61kD41JaXYQT3QSBqTNGRrbQc5F7oJXX2X2xu3EfrtcRzMusKqtnwDt8bdPVJka3UfDDwhY3ASE8GRv",
  "key11": "5FhcHDfCtLCHdZECfoVuus226zemGeSMtkV8kT7skFyP8cM42LYb4ZJg4AHtintX58Kt5u3z25LCS2vAxYzkPEY",
  "key12": "33vRpnrgr34jh1HVtaKS5xjVrXoFbKVc6paG1GhUgYxsNtE8UeFjz2g7YCw9EiinGJqa2QkZpnnDwEw611dgD5aA",
  "key13": "2gARkEDhBgADpWgFZY17H59PyQYATN8vLiLpmarSE35UWHBZxUnm2YNDoQvvPmpXeacKrmYeyyq1sck4vnLzDrdU",
  "key14": "NhE8a1xaLjAosMrNjFgudqEG7dSmyyPNtyRuamQYDxBM65i8kpLg2ydeJVD5A4WP4rGXArqmn1No2323kBy923f",
  "key15": "5VdFnJt5cEDym2s2FCLLJncThZmr22uy1i6kVj5CoaGKWL12Fbvta5gc24YMyztfDLuz1H4T1HmUaKqCojtqBv2H",
  "key16": "3K2GwxdNhKTsi2UHVo2x87ptyYezp1yqhix296nQ5cPFAajG5X5fmSck8hrfE9gE5XYmoDaFQyughKCqCPmUgRMp",
  "key17": "5sWPHdWGxGoHAPVJy7cXwzgUWanikatqUg43Dov5yM3hS12RXDpnAWafi7iqfV8yk9fhEBET5k6mz5rjzsVHrD6S",
  "key18": "4YtdiVD9UqwdsZVeCyKVtbANd4JGfEjFCiVEBzRbpA7kWSBxFWrVumvwz2Q1QvgGNchzW3bVe8ywdp3cYVPMZp4J",
  "key19": "4zicctKmY4rzNdeMEC1eE3eAQDma6mNDY3AvDXM8mv67h1CkpUWWt3msHRfbTHoqhSky46Fvj1NAf1Ap5UvApgzp",
  "key20": "C1MNqhGaAH4HnUCxXhxk7ssb1bJVzLdXXngj3PjL2mQvXGAVvEZRHX89a7ys47MyFTABhe3eBknqvyCJ6F3G3WL",
  "key21": "4SwSZ2fBUeEmnzVWaZuhsfYDuCQCPwVUJarUW8aK2bMfKSxHEbekrCH4tUhz5Dxebq2PsgW9QihTMq761wnfWdtn",
  "key22": "43EbSuLwPxxQh4vpKMeKafppHM8msogR6NdARRj5MrGCchA6YM5as7ndLfVaoPrjofUX6eaUgCZVLe8VgjsWNbsL",
  "key23": "3qn1oHnv2QCq8nr7DaosRp6j4ekSerxYcva5fd1uL6MpDj2f5Qvi4S6EPUQPnxyT9zNR8A6zSVpyeAQ6mt9EbRjy",
  "key24": "X4qpkq5QYBwDGzDkC8BcrgumC5UdSGFhPMmTqMaBR8tpxMzhZuf15DBQTNE4jJC4G5GZU3efpZPSRah4JRH5eA1",
  "key25": "29KYE39SpZmA5AhQiRf9hurfSspVayK3VPoX3y4uyrv93oa7zhGgmzUZoAjLZ1T2WgPYabS6W31oU1GfzJqH4vTk",
  "key26": "LnuXB5dtiKESzN3hAS1VpAhi8vsdCJWe9HUYoaCZyZaqYEhcGXxcFqzn2gSHWnmTwcGC5DVmUSnMNNMBqeSuPhH",
  "key27": "57QTc3VrgdxPapGnGzkszNaRsKS9dkrFfM8GNLdAWaXZtzAVDoUFzPQLsQQhK49dDTPgYy38aRoEGFpQUA33zWgT",
  "key28": "KX29GBgV3D12R2jvoGxL4EqU3BQs3btaNcq8unE2K4rM52v8Skv87akziKbk8ff6YXM1vqfKVtebmR6tV8aXEaq",
  "key29": "3qg1xLNLrejJddJGW8nu6wGgcUEuHbZVHbpRSQiLcdJ2G6exiamvBjtZH9U8Q7BUenj3RJi7L5svNUcbdAcYZdm1",
  "key30": "3XRg315FH5gfjmuEpYr4vqrsaWYSJmtmGNaXDBDXEDz3whgGffhKhUfabgJJsFEV2Hi1niecu44r6XRCnpjMNHNQ"
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
