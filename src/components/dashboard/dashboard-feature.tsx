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
    "2pXHzQuoGkMG3ePFQdUjC6THhQ3fCBVZe4hkQYPv8E6DWRQTjLEgwmnxdgipebD39BUz41gTnAPW1tUbGghCk3pY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PhQnxTdXJyqvzNsKChiuRB7fq4CgGiuWoAtoBTHsy5AT7gG6chypnJKy7Awh2nC71D4vLiNXPgiuMLFV7qn7jU",
  "key1": "5nTM7uU9Eu5EFoEV3tX6JYwW1JGAu8gzetqMPKqAEeFQjfETXEJBf2ye6sv8y7ENJH9JUipoeLNReXqDYo8sZ3ff",
  "key2": "BQq38FdrdeiHJVs6uaqtwBs8TFQbFwVSGVHShjxNAj14wuuevcw6EFPiK3gHAf6v6yApLxtYDfH97k4GbqHBAhc",
  "key3": "G94f7rnwxb55pnBjkn88iSEbSEVD5Ay8Fk47fWhqfzeTMQ2oAbPuSrCnn91BTXZVCLP8p51Rg9oU2VkdN8qzz3F",
  "key4": "2X7B3BwRVTJxHCWT9Hb8D4haFGioF3tyNFL66uNKx1f2N7YQPXH7iUPWLYp1y9Ljmy8LBo8PHMgaBHfHejaswiNB",
  "key5": "5ehDbYujDdDRY3TFCRvLWQnk5dWmKWfHun7S4LR1mk5SEJosMtZ1BnAhZLkevhQzBdMS84V4soMAqqY5e8cajMSk",
  "key6": "3K3Xix9rbbLc6aQYWwe4fUVzG9aaMfXLjibhG5GLW3Vdhd7KR9jjyzCxY9tXgemUgtXKm9yG7DkkbWeMfx6H7MVs",
  "key7": "2A7K3mySMK2Zq6SeMJh7JuLaDMZPzPTTwjVEfRYB8jc4pPsCCoqfT7E5WRx4YHBJBDPW4oqMoaEu1JBWShUvRRqs",
  "key8": "RBYyiBsD3bnmL3dXTGUx2EGZ1CfaynXekZCaMg7DCXZpWNCCqccn1puCLig6sBxaYkDZuNjXzcwMCH9XcGSYNna",
  "key9": "tJFFev1KgQb8JdgEpqrpiGB4u9hgHvaTdb4cCVeJWZLiCwf4bJGUKq8xt7CjKRqJB7z8qoAeYCnj7msZk8ysZgN",
  "key10": "3RcGbN4ACMDeYKewAZA9YeUGYJqNzjiNhxsDj9mit6hcR1axzn3xRcpn1jjrPT8p56ca213ECsrf42n3o3xJZ54w",
  "key11": "4GZ9tfS8Ch3n3mhkNpjfptCVxV1Pudamczks8tDAbo4ksW5HvDdCJVZavVoWg6foWrj4QBW3d1Fwjik6d1ouCGv8",
  "key12": "5h9vHByd8wQSoQ2fz9hVMxmNsRgTbBhPMzgMT3jqXz4jUv7jdRrHafHdNxLWu1VTpjMaTZgSPcHVzv8YuAKQzgbA",
  "key13": "5hvqZzLcS5YJBU32Hgf6mv6wAinjEE3qMEDNfWT5Re15nr942Ca4Djo3smfp2j7QwXkV7qPpQGj4fSshhuXLCyL2",
  "key14": "3M8iNKVKPKE2A4aJneH2eFoJ7LRA9joRxHyYAStBFrWH1s9T8PogVLm7B9ittJ6N4fyi8Zob8AG4gdMU5SPjrM57",
  "key15": "yKaN1KnWSdQqRXh67Y81kcnamWvGWA6DyvNzL9GdL5cLkZharW6gFgCuT5RMbf9kNZfTbDSWNQnUKZKti1KhuyE",
  "key16": "ziysPkGatAyNsbYoR8axwFSoV47Z5ZChBysDxtq5ZM74Css8SUv5RPPETUEwBYqxpzKFN9joUoYsuo7fQwDkMNK",
  "key17": "4r3tDh1ZJ9SP8nDpZfycd4tx5mfovjxdT9wn2ZozVUWoyUZyL1JKeazRKFeLr7yeRXjwz6iecEu2u64MW7t82ZXJ",
  "key18": "2Di6cVfwniDp2ztqNPoKPRTe82uEG5S7xBrMnNGZ1YaHMG2EXfgEqVz3Y5RfyikDtWvprWV8oBikzBJysK8fP9a2",
  "key19": "454bHPkY1gwhFWbGiNxECPsnrKzq3cRNaxEBCmfcy3VLk2SjSj2VWQaEBe937eNM6WE5wVFoWTvXcKit1VbsLnc7",
  "key20": "3xRZxCGxrexxr2pVDYG8fkmmrmBtUDxoquEmABUjVHMqHvb8E5TswxBPtUGzUUYEkwzB8rLYu42RmzZiwtbqCLfS",
  "key21": "37WZUtjQAJNKBG2EsPC2xZPCGdCUbZh71Mi4vcBYDHpZ8RhLcVgL8EyrKcW7o5YKZQi3u1ESfQx5cVJMt4Xgd6kY",
  "key22": "2i8gFAJ7MJrpYuN4n5oGXoKG4NAKg9JLUD3dTDvKayaj9vwApmsuNG9DtzmFLPDSNsvPfdJvpCsSbugQd46JJrni",
  "key23": "2Y5G14e2RmftSWpfKBpJ6qTKEeCWbagJnMjbNEpv1dRWNCgDHk5TqXYHhcW6kZvjJW6kcyDXWmRiBkbNL65SXnZG",
  "key24": "5aGDk6XFzpmSfhHiuCxN7kHyzG4by9UTqhGAoyuPGPBZwrJuHVehaNcePLFSEXn3zEV5GNG69HVLBNp1hxu6AcJm",
  "key25": "5rgWudWSXYyQq9D9zMYJLXtNiDZCqJJNATAQDPBEBQVGBA2RCMbbH3K39HmoJiv3voeBhY9dXCQoWxutYxH39Hn2",
  "key26": "2VAokBg2UJ4mU38bhobFvJfhpSK8FvohepdYGjPZgvaAvQg5ygfWa5LhdBCM8YoZD43MDNByJL792kBPrR43Ka6U",
  "key27": "24gJAaMMdKxSpYrzPpmXXyXmMjmJidxS7UHYBpzoxqEEJd1Z6dbQUcsWEKGuLCkGUgX8dKw8LzzfkjgRoHy9uoKP"
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
