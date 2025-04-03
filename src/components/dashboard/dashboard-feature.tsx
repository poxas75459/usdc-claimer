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
    "5c8jpax9z18VVnd9HSLE84hD7FayNiLtJiV7VmTDnVFUyUQmWqxGNbhRQo9DYGL23dVXQupEjCUjbvujmDuGi35w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfRPB7c8RKYgAkFjSr3tGGDat3br2ACQvJnt3Qvatbr1v5XAujYeuy4EeorW5VmS3BZsGUh3FnVVEqd19r1tRTh",
  "key1": "4HPQUyF8JHKkCKRNYHxsHdzbrZrmm9y6DeKcUmmDk3yrribMj2PqsMdDQPiXHAemotPtNmPjQV8fY91QCpwrjZpx",
  "key2": "5LAq8coL7geu4AWe9eNScCMHhPhuwERosNiK7bEv3heii9dnVG7PemR1SXxBKGUZA9737Dc9bczHpKcpRo2BwbnR",
  "key3": "4W6jXBkMPoFw2ZU6qFJW3nwvAsvD2u9PqKjvg3rQqKrHLZB9ou62wUoLPQS5hSxy4UZPNRMP532kDCYMAEzoimxK",
  "key4": "3EjsqY7AWv5gJtYU8d79Y2MiYaPuXKApKEYuWkrBJiFpvUYm5pxKYJAUWDsyosn7DnRHQ4S6nfeoSJmsj8pcMtzq",
  "key5": "fUn92iA6vg5exwA7Q4UDpXdUWaPDneW2XQezHricYdJkDzWfsCB7T4ixjT1CtTuJsSYxa6gVU5ngu9s8YLSwfLr",
  "key6": "5BH9TDutc7Q1qF4UrKWBREekvbqjBpVUZWyviDpzf9NrFJpTDn8GcTACghbeZzFXvNxGiVwDUUDZQtnKf7Uuw9gT",
  "key7": "3dkdPsFRhNCb6HDZ6wsNmqCykiZAbwmM9w2HKdwmEvwW8quiXkNxBk1ZnmwdDN1WornZvgQyvAc22HggKGaiZ6vh",
  "key8": "67inaXqvGJE5SGdE5HpJV9Ln6gbdBWq5YeCbvtJnFHAk2TRNpKfrbcdnFzCnhFyT8BrUFzCTYLVb9RLpB25GZ7R6",
  "key9": "33F7WoceFbQiQ9hzj8WMUhuqomMJQBcsBkZKyWERUoGivxCPYoiMAaS3Ht5V3ZhEXmTB9R1LjD9QS7a3xEQ6vquV",
  "key10": "yQp1ZQeL5Gontb6JVQM9yWPUruHonXkcF9ibbeo1rKaTkg25oYZKAove5XzmJkLrDUZE9zPrEUrV3mnjV8inqcA",
  "key11": "3TttPFuQXnMMLGTuvhopUrYfpm4rdAKMVhu5sqWpqsxWSarszAEiUvXX7DQsVuuQZ5XvNmvjtzhJDDsyCJBbqJoY",
  "key12": "2nMbxY4bmL3bzKkRaCR9onY79AZ9dH7M4pZ2QXB5bZnbFUn7TscrpiEWLdBfrzdb1iQUzLrgMC8p1K8rFUPyjocQ",
  "key13": "Vt7GjbjVyVZF9FKig5BNxgYgHF4NgmD66SgTqxAFG7HocjK9YbbLBrYUPG64CaFXt4mJcvDe3HLExAh3Fu5YCEu",
  "key14": "4BC1s6X8nF7Js17kYM9mXPFAjpnW6Rwzu6UM5XDJfqyrJC6FCtZxcLs4URU8bDNchuC9AxVHQkVvSJtRP4yvYd1j",
  "key15": "2XJUsm1WkNpydQj8RFfnPhzTbLZU8BAMyyt1F1W4ki7yYYcSThR2CeaSEQZNurF3zMUtVG1MeUBnYNSDpq5TL9L5",
  "key16": "3zXC78UAJZUeXcDMDQ7ZJfDwb7bdfpjZqRuQFxfJ8W8w9B9gUub2nmVvEKSN3EdRiBntjERv4TPGGKtisGUgrWf2",
  "key17": "4Y85hVGsnz55qp1MN3Em6vzhF5eqQrrwiGWENFtvzpXHL1T15LK282JsgDnM4FaTmQDeoNn1L72v7tE2zKss76Hf",
  "key18": "5Gg8bF51SwUx1kPoFpwCyMCmpdyvqFrDxXcUuWkFTjq45RAfMQSSJoEaa54R3LBXArBYijaASJ7mb6m2npT8Dh1M",
  "key19": "5XVBSuK1BvAJcJ8XUsQRsKiBt5mp3U9g4Ub4xi6r8Yp47CBsBpw5fGyJBXsDB7AvwCxjLEpb4zivy8TUdyPzjCbk",
  "key20": "4FC8NZEzFr2kNoi3Ma5KEE6RSqdPwPf43LB3jB3A8Q2XQoWskRH8UkaH2hMm2dN6VPgvJSvbVusuR3bLcnejdUmr",
  "key21": "3uZ2FYXKpbti7D5u28g7VxBwqSNzRTbg6hUhTKESuYWFhVTUynax5yZyMjpogcgpjkssnxPBNtmxP5RFq1Y58SGf",
  "key22": "3UdQrVjqRpAbg2yPuCnatLUsYJ8TwjXcr1jpsmr51iZxumpTG8u9Rc8tc7nxEmNHzqdLCHbUeXCziHds8jTCgc3n",
  "key23": "3x7KoKzVv3oky9NJh8TYzUKRJ7cp4dBtqbNoryyEt6pXEseVTdwUmqia8WjCj1VC6jgGBkKieyhUrMXe2wfkmKdX",
  "key24": "63wuPni2BqCMbpUafthsdd2US61gTQzimfDcdgtsCcU2zjZP1k5d9TCEodimpXzuo8VnWFXuRzpNqLxXNkfCiSmJ",
  "key25": "5VvwGRcnHhWTDD9Hof19dpxSUNt5BGCxy8NAxDL73YYvzMq9mzkpfPT3gw4xZwjjk9q1t4ukbii4AyeJ1QWMP2MJ",
  "key26": "3Vj5Vahyme4FH3BS5uwLF4TAnv74MA4NTUU4xQRjHgyfb7FT455RNJBfskZqz41vZRnLkJp7aczD8aF7Riwyh3ZP",
  "key27": "4NAvQHfsfSMqvac1jAvSFdyGa2gvNV7Y2f4NcL89BzYVr5us9dNx2citEcQTLV8DiRCiFTwCruQoqXHvBGnNiSTS",
  "key28": "2QBsQF7QJDtyHktuBNw4DetvtpB1EEkBiyQQJtJC6VrWPTgRvNAf484s3CizfAJMbyzCvU6QQiRtHYYnTHUns355",
  "key29": "1Fx4ssU96D1d1XAZUQyZ5Ep8vonxT8NGGmBFJUK1H3XAt48aZT7UgzobAKUFrKbgdZsPJHWt2UFhhBUZWvxJeNw",
  "key30": "2bKqVjPkX4tK5jcaH3PkfAkhDpnh3o3wtaSN9HKY87X5HuMG8kxQoGpzrVHNcVV9kZ8nwcLHJ8HjseJxhWRT2rZ9",
  "key31": "4ftxnosZZjFRfoWLQ8ybYwRoDfKgkyYuVvZ88jTFuRMKY3qhz2v6YjqyUwUbR3C8ofViv4aBgpJcu3Svj86JoyAk",
  "key32": "QHcxpyyBSfGLcNEXqtZ2QScAiWW3UJLSySTrtNot2EZMPkjtmX9rFcSTPtf9ZDGpwGXu4T8MVeU38sRj186zpvJ",
  "key33": "4tp3X68UZDsE4fEGiurKET3m5cpPFsPbknfrtd9PjdGez234cSYaNiojpc2aoWPsuBmJsjw867oje4VjRCcuoEVB"
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
