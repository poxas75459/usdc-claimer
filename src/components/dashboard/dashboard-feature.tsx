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
    "4Csc7PeheE4syc8zgXGpXmpg7FAXGRcG31iEjBx5ooLyMj4KyGPh1QnNLKsJza9p5hE61dVkhFd1gAfUWBQt2vXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HZEez93du33QP9b2WD2gV1EhdGKzcQN4nYr36whGLSbveS6oa2KXECy2Ekb5HE5FZ4xeppT6H3ZeqYWeum3gm31",
  "key1": "4yM5AMELTzLMwomrfQir9Ff2uwtDum3jRRBsgBkDn65MyaY6qjzSbK7ERtMTDwATrtqcPSwSGgeoSvHF356EwrqZ",
  "key2": "3NbLuka5YpugMhFgSaQcUkbEgdwwqLxtYaBpDUiLRPrkjCqis7tF4AXdH3V9A4QdSBmxN2xhddPqMXG5WWwJ4tzH",
  "key3": "2wa51PxB24SFA63hqyc3cjPfXPtTQ9H98tRnSkmZ4N6HFsakRyNH9wkmsPKtSgcEXAgFxeGK52nr9nvb3PR8injL",
  "key4": "5g1F5uDe8AeqmCDHUwG8e3Fhva78gFPqnuf7GeBAA1BWTV1Zo3NQTJMXB9jGAqDcvHg6EJnenAyamo95K9vL2vf7",
  "key5": "2jLr6swB2HmNsnBxFDAv6eWXam8xUtMjuvrZ1pKws8AqmhZG2qEc7GxbbiYHqKtEFBpfKeQDHLijN47LKk4wtpAt",
  "key6": "jhkSos2FWc17pyCAkiqwzvxtRbHEZQxYsnsGnZTNkjmLkwZymYBY15atJ3qE2avm7BTCk3onZeeGHf1BpQ8XSR2",
  "key7": "353d5qZy5Z4wdSS1tcq2MebmuidKmpZyeoR8odWjZu3fh2ogWu7wtpTit5cYQ6o9DoBUjCkgHUgDV98UfCvAtykE",
  "key8": "5mdZha6sE6v8Vithm1Hp5TQmYH7UgaG43Y57f36vvXZESoJE1ANW6VFXEixr7SxjR7Tmu463vWfm9CfHRXFWP1uH",
  "key9": "4t2CMqhghrYsfEB1JL4AttS74S2t5Qp6pZYu7rBYLFbnNKVKV6CGiKpQqEuHU1ZihufYxuKATrpXy6mFWiDNxhrQ",
  "key10": "2C5nFCB9fTYFYmkmqsnGZuEN6Eq3Pd8Yoe1Hsr7u4X39aUrpFQhxRcQ96iCKqhfo2CVhTJ96PX1EoNaGBU7X5bbn",
  "key11": "2rxgqtKSqtxfEcySz1zQaWTubhkJZot46fbZPkxAV6EtpnjjykMYXLFjcJAJRhmV9uQvAFvcrzSqSicqVM9aq1tJ",
  "key12": "2bufQmmrRzweGutXakRvuxz6SWq5F4ozzdwHYUY4Wvgz5QLEiZP79LssMsMPmShHw9iHdqbC9TkDKb6SAdxDnjPs",
  "key13": "dCxWtBV3B7fmHNinFnU2wKTsbauyswTTHoRoENximy3fEh8nqcKT7Yfd4c3svT11mJQZkBnGygZzHc3EK3TWsy7",
  "key14": "3RmUN1cbtKyyG9VoidV61iv5ZoUqeRJyeaZyx7XK2NBJXHZ5XLKm1Zwada2xgwW8vzmsLDofcfvA2X28cdfdoDDG",
  "key15": "41NKJwG1ACzqN3HaHTWzoonCzka6wFvkmDDNkTuePFJ5Br2iyC6dDM9Hra6wDRxfz8nXpHb4mZ8yX3a6xzEw4NCt",
  "key16": "aqdUWLUUctG2HbVMAt99EJZ6MYVWHUkkCQK7AvNTjsRj71ZfmjBMkyRckwG6vCy5vECBQXozmC23qRtzknTMK51",
  "key17": "4GzbWqC2zXfnZyXq3qfp1UxY6mx5cm2N3YBD6kzeptWWcJ3WTyeCGrumd8a68ey2KxLVBVt9xUat6X4dbWr7bKRk",
  "key18": "jPJdpFYwpxJRuxZjDR8GbbWb1JA5YxsE9G1J47bnmoXf1PSDsevWB3AnTxXsjE5azcwcLFqwUEEkGBKfVRxEH8c",
  "key19": "4roVi53ibf8TXGuursgHd6pKecBNvz7Yn68o81Tfds1ek4jxmAQt2yEdf8qdwvxc99guk5WrjCmY6PGTyGyYDho5",
  "key20": "2FD31h4Q5LZBg1r1LAX1KAmDTra5NcLjML6Az5GWPBrp9JfbUiD5if4SPZcaxrjxAAmLkQa1NiT7VCzRxhE41MW",
  "key21": "4FDFgQsJnGixrNfed97veq3F6sv1pdkvrAUTbGfwxcJZo7eiE86PXVoLfmMBFqaFKn4TD6CEtvwXE2NfWyY4CXYh",
  "key22": "51woXM4znhcijjMtNBk46DRFJP4rqm1Pz7zbU13UrijY7HdEa2mx4TjZcjuAwHuXdrCdKAWGFrzcMSijQDPa5dTk",
  "key23": "UMCCPH5NXjunt6JeuZrUbifzbpDo8ya3TmoKMNWU9p1eDPbgyPPsDyg8ME6n41mSisnw4SAV5rP6gwnbLEDgdzB",
  "key24": "4V6MGwLaz9WyKp25ZozSK4863PFdBuxv8msEfU6T5UnShpokuiXreekxqdqKteuhGv7PRzqAJqnZfr85TLX4jyZT",
  "key25": "2umDawiaqi54XYgLZt6kjs3o7pkbhdS7318nfgTvjS3U4FurSNJ3dNC54HY5TuLbUrDDoSk6tEaJ7cnbxUQdhSMa",
  "key26": "3Ghag3MMxUNXN2eUNNqh7GZxLcxaqdaKLMNwiXddHvkDQH5KpFCiL6FXqCvXqqg2KqDrn2BttySr8owtCNEjpduk",
  "key27": "ALGdrPTcBed5JPKFLqvyhHD5PkVud534PFcFUpw6YaSdBe1hkQtmogRn8tojaBqCgd4NoJtWqAevk2mgEjnKqwZ",
  "key28": "49QqJRTa9uoJpg6Fqyn1VWt1H7VCdeZ9emG6cg6UW97fJgLXnawUr1ZdfyGDikHMvpmR4yrVh3nGUY4C3si8mLEK",
  "key29": "4kaj8jDbFSkqHNuHkErb3eovTPSCnAtZTwZQp2kkTzLcbqSeNL7eu8p7zJvs5Wg98sCRiqANtC9p4rbBpTMQzLpN",
  "key30": "TMP1KDq54PrT6i4vz5STwCtVnofy7bjkqt4tH8Ddi7xZXF5vY9fyyjPwRFwnyVjUV9PZpB9YE6U7A4rZFqj9sFa",
  "key31": "41HoMibQia7woh7YPdzZenkbXfGSLLLXjF94DQVfjT78VoPnNZ1b6iWckqXxUVLsRGSsBUKDPpo7pYK9tkbtAcia",
  "key32": "4957AhWRerKXopbziLQnaVvVV2kNLxB5ddd3hW9jMtW2zrua4w5pj3TRT3w2BsNotJtVquXHqpXkZga3HvQUL6P5",
  "key33": "3X4Dr7xqzujyBLkqR9TtbfmCKYGzR5PVfUD3UPDCtBEhbVwp9cvKCPG64EYM8dLjZDxmmE86T6QMeQa4kkPPFzjD",
  "key34": "2r9R7dezKB8mW1wJHR9dfPJKU451usogc1tHaZiu9YfyEr6D9KmEX6fPXwu4qtxGjDjfnhM8xnk9iXdUjh78d7s7",
  "key35": "2M4LMuWsLqFkGXJNtJP5uFfTsn7N5aiXTq1Y9NwZu9qrb54dn1qHZwAuZAB9ZLzUc7ZT1syp6GBNS3BcY5DGNoCL",
  "key36": "2gWK12L6mw1iJ2bJJX6g7eUokv79a2EWCVHKPLAd6b7xYjemcjHMAeNqsxi7BuXBUXG1kZMoThZYviyF5D7ZKvPF",
  "key37": "3tRm2Q1jpt9i3Yrew5sM1o3XBuBod5iDDoq3k34zy9RNdxkWx5ev6hVwZGdYUFUMY2RqbBGJmVP1tMNLpbidt4Nu",
  "key38": "2C98e6JLAhe4Jympcr1qoidQFNiqszx67Yk8TZcXRw89mDJHwQKbRTV97EB31ZMEdQAmJcBNvY7xTrbRnRsc7aeZ",
  "key39": "3bvbY3XFNkx2FmUp8T6Kq8Xc3TjrP15JiHsxrJhzK5ueNdiHZorCCVBsa8xzTHG5Q8XK1J35onQBMr7ptH2HqmyR",
  "key40": "53yQtj9N5se4RvXK2AqpLqDprKk2vxdwQQJBE9L4hkJ3PrnxF8xHNwE3AA5Pb69KXjG67yuaf7REmjra2VYeMEot"
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
