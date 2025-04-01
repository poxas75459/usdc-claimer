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
    "482Dyu3R7vLSfc9cep5pgZbwaumSk6Ct7znMvGk6CdFo7wZfYzyrKtPo6E1FhWfawQBLzFcsoQg7xdrLVJ3k6HoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHR3eaBbuMRkwaoAooV52LbRyroEDC4moeRQFLRKbVS9nhLFeoejob3QFpxtjPSvHjvKCDGVUxfigKea8DvutCk",
  "key1": "4VZQzPw4XyUNMHW5hcv5S6T7EojTFTTsvWz51hYZZyWWDKWjk2Y67da8gKd8kmPpWPrsjf7LPkRepu5Nub7goS1r",
  "key2": "SQG4Zb2BoFjZCP8hE128je6SFE5su2xTfG6J94gwt3CSdnAR3bagfCFKJuq7HCiH4Ec5ogbpo2tDtHze2D39nD6",
  "key3": "4awmW8b79ENUJmZG8iX5nyhN16hMRveQmUbQKsJj1zpxnkdscqrHC9XW6a6rvCKStvyHETZxbzvzoehsFBtoTfK2",
  "key4": "TeWDdV4UwN3L99dA46FJvnyjaR5fqfKcDvgGByU2rGmfR6tJtj8SwCEHBUz3XHHjzpUdDxxqEr5m8TQtJCrFnxg",
  "key5": "2Pkp6kZfe1VHog7DyXAZxUKK8yvxsmUrQ9ZAJT1NxU37DqzXEHtkn2WhDuhmiJLMuDDeEza5DFi3XBvYuVF7kLFC",
  "key6": "Eeb246KHqZTz3jEwNKD4NpFHnNcr5S11WCxCeuji4naYbVsNZ75xh7dEs87ymZFNnryykfPNaZTMYDRVbpfPReu",
  "key7": "TeqWLaZVx9BfojHpkdD3scwgNLDBYcLLuWiLaJAVBUcLMnUTTRp49nnN4ikUe42LkfN9Y6Ry42aJdsydYpjByQ6",
  "key8": "4CVTYkAKuMnw2Q2emFSzMnn4wencZssupcM7YoyoiVrUbRCAcbjUGgAHkoFz2E1FfsCvBifLbDR8ub45hQF5idsB",
  "key9": "3fWzNsE95q2e8oo88gZ8926RSJVynCYjt3bG73V7fZZnbpNaSza2RHp4a6HjzoDiCQ2qQpCWNHcTSwRnJwzMLCfc",
  "key10": "4sRJRcqxkwdyrWiPN8ba1SSiPuuqgqGP78JcPPFX67vWCTcUAv5g547YHQA99YQFapYChob2wx8W1fEKKJrhD3vD",
  "key11": "66jjGaVheL1JoLWdDVQpnDNumnXSWaNHNinmj3fa1Zubh7VZPBhaKtkFvM8eBs6pP4XQf1sqh2qZkkana8feZaK2",
  "key12": "5FP8uuyuL2cMJtGsanTM4vaJND5pgHCE4UhrYxuJUtQNnpdVHvznDzgrKBeRxzrgXkyHUwaiPRv9DkfQQ8HCTRLV",
  "key13": "8zYSAzFUTEouxso4ZwAfc5CXYiudvuACiBMiLaQyx7suHKeNJzozVDAwV9khAU2rCHq1SWLP8kNzS95xTF1Qb22",
  "key14": "5FjZCpmppTqmoC8pboPtt6HUdaSFdYxn5MGYatc7HXw3KdCwu1449vzbwXKoJY67K4w4PEohHxzKKNsX43tArBEw",
  "key15": "5CjuM5JPd7Lb1wD3jkKkifriz63GK2B7E7YqWzx5C5mvPTQLpvPj7X3Qy3Nw1LjsLew4FyhBaqjRaEbmzcg1ZHTN",
  "key16": "4EkYcYQLNd9m5dUcvY1DFoVRx1sKdWpTGEQRxhgYe2KS7QWWcAYRzoXs3tMmpyoy67kSwotWaHThMGCgXX81KLjx",
  "key17": "629Er9qo3PTsTrDbBNw11CENQLbeSuVaq1kMqrGdMNMbx9Jf6ScY6eR8Pxq7S5PsCMe9LqVNS4G9qWRQmzxoVznG",
  "key18": "5m43vx3yrVLBuwiTww8NjKunhA6SmGhjN1Cxef3Ff1BF1sR1iJXhAq8PiGFrNX3QYoxSSesnLcz2pJMhAY3U9mnY",
  "key19": "Mw4hWCrNhxPMSfG34LssqmEugRhwy3gYd9pizEZUKkVJsLxbF2N6VE6D4WgMxie2ytwdsgENLGVm1w9iCLJMEyZ",
  "key20": "3pcBWtgZGcMFeD5farXZZK8MeYgP9JyVx3eRuoxAemu7iUATecyzvmSbmvyK8crNZmudKbogQg6eUoCMpcJhL1DU",
  "key21": "2ygRYNxoPxEGV1QXcq4j2dDWQiR4Sas964fRfScmwcN991spx49bKKepcXWekqymc1UY9kG1DSR2MvttmeBRTWdo",
  "key22": "42e7P7taEw5mrwsBypjrLMrzHDHxvMVf4P6hsJVEXJ5vSooirvAZFZQpdRUkZGzpTYdcbuScKka9xf4EdXHBnHua",
  "key23": "2B35q7Wp54YSvyttkoCbr2KHagJHE2jh8drYV67WLNkRQPcugPBmKbaq8kMVT9kZaohJ2s5t45CLgGHAWoipKhHH",
  "key24": "3fV1XmykKVt2NBB45dQPx6h8ysB3iQDbvqS9Kzscy1syxA3h4S6bKpa9yomy7NzzvA1TLAp9jB56L9NhcytdD69v",
  "key25": "YZ4o9ocpacQTb6Yhu1AGAtAHGk4CPmo1WZQGakVhX7faR2bWkns9zJX2GgBbocRH56kiXP33jyTdC1T5GFVJ8aC",
  "key26": "32drAme776pqgxU8VPMEZFFD5sUkj1LpvwatzPE1KicCobuwf53s5aBSnhoUWoTAHWwTmUGLQJvQZh5ZjR57optw",
  "key27": "vcqPuMJN6SyuPFNNL8jLL358ThFand48N4QfCUxZyWTZMiGBVmcRpU8dj8XqK2NZXWj7upP3hADsRH2tfRBDFfc",
  "key28": "2u7eEZXaAPYAAX8GzZ2vMkAPqrfbCZYCrKMcawreSPCYSeK2biSdswgQAXNNVUXH6f3bGZCfutBUwzxk3LboduFc"
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
