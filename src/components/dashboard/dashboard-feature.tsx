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
    "5WNyypJ2GNEVuiGjP5LbNe7CsTuuG2DD1qbvFZdBf16QCR7hzCwZChqmtan2NCz2UX4NtiZeaYQwMVSAKqX132KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vo56gMQN2WDbFeL6TBTVevvz2gTFuQmgHg4HQoUWp35FAs16uKJc3SzkWVnsCdvsfGAi2Ts1GNYfJaxFhmGWoPf",
  "key1": "2Jqixb1UmFBKzHCaLei3uGMGgeYHtwfxHxiE7qHwq6Z9XzqK4ZL2YwBryEXzcyhCT1szsaVyWPQszFtbNwNxddq2",
  "key2": "5EJfTuMyo7hJncJyGLLheP4tBEKAxrAKWdLnWJzfomMUM3V4Gu6PA6HkFTJu6bMosrmzmKNUXH9ndowP7nXWU1J",
  "key3": "4GqwX9RSQWJhuf48vELonAAytxJXRrVGDf1n1B9o8u7PmyseobarcW2ku3V1tMa87eAxSePt5bcXzAGWgUCjH6Cz",
  "key4": "usudh3xYpCv4zwKKEQkHX3JuQM5oHeUXGHEENQ84JZMZpLaBpBoVc89yV2y4ZreB2DxoiE9vFb57WgcHFUJVHok",
  "key5": "49HrEsj368tHghLH1rhQogjK62gWDD5t1Q1DHTJbf4eLQCKFYCVb8gLeoJ9LuvJAwJnUBBuSZfiwogK7pz2ceQwP",
  "key6": "2RQFCLU1bRfv9AnC7UmcwRxZrAw7HQbYEQ99aQtetGrua4VJfqAfeTTP6SoUXFLRAsdkodqrc52Q193VQ15nuiJT",
  "key7": "4WbX5kMmQHzg49szTPweYbU8kU6rMs9418FNbZhkQXTZQz7Akx9HYKruNSiUab3yoW7bE9uPgs9gv4MNGcV16mgx",
  "key8": "5oRRDxAkpRzi75XMojQ1SWFk3QN9tP7hPF3qjvXDvNH7ebjmTxbNwUtAPEJWXMf4S4GXZ9ZNUURbruPXgXdvoqzz",
  "key9": "ZpwP3CvccfxnePc1ZoeoD7A4PmuX7MbAKu8k1wwQu3CYQZKfV36Gu7LqNqGHqr4tKjekaMLHj1XqtWQbc461dYk",
  "key10": "5T4qnskSderotzWsNECDJDgAwAcvcuDsa2QUfYneNhCXh7tu14BsANdXvhPVuZAD4MvDYmXdyLYtabUDhoRLggVN",
  "key11": "5QM1S9xi1N696UnJj2mpXaL4aTBtChEf3mBTxfD8otogeqcQxJ7Q5JmDUCaFgxhGd1JyF5DampCDkjESNsgWzFSP",
  "key12": "2Gxcx1nXj5dc6fxSUhCkxCvimETqojnDCeXxW7q1YURwsm2LkH5UQkMJgHzonJ8Y5GEYCmbep9oHMK3oMTYRZjyA",
  "key13": "2SueWKmR2TXEXBh6QJCBq3qdgBemsaRxBXi4GZgaF11H5T4zDkxTRsmBHywwkbGP4RrMxui8TmCsHBR4YVr6h7xP",
  "key14": "U3Mg2GuTw2wxHwMxyjV3bb7QZEhof3J3rx4R1Mfw3RgxNWqpqMNY1UZ7BGv5etdX4jPWjJccaTb3a1nZKxZEKqD",
  "key15": "LRYWTK8VF9hyjvkTZ1XBysY1AibSrKT8RwqPEoQEM25c8ECiAS1Z7kVtUzVphuhaveLmBhtCvZTeowt1L3x6QVq",
  "key16": "4H2apLif7tgHNYMCMprE79j25ZJ5Hn9hcbyMzjtkxyexDCPDLF7MJtctVGCREceMBJfz1zcU745nEhrLaaKfjE9t",
  "key17": "4qoJ1DqhEgFz6LEH7KTjFWeB2VAkRSoJTLTq2A99UcwaAK8kj7gSr1x2SXJgkCQVacaLo8LTYbrAt999b4u78Xmj",
  "key18": "4iraZ4hHAWpi8vKPKwKUMycmvL994JDT9JQkt1h81cpjuKBkSTUvhGa4Rz5P7dkhvwHN9fxi8zF6dNaWy1D56HdQ",
  "key19": "5DxweSsyTczVw4NGLhmoKbTJAGVSFh9a5RaPWGrqhZADcLyavhzba3SAMYB2uQ17xv47UQ9hKMVzfQ2WSBKZrreN",
  "key20": "5ybUJecaA1UjyW9MUbmUjnnAkjyzLgbo9DQ8ujjx24RrhrSrs9QzwrEwnqmHDkq92cwZNpaajr4qizmxr7ANoBJV",
  "key21": "4CVWrdMnF7cjqqBjcEJep35ZghxLbFkoi4NaAqVWzhy9dWo2fw85nVVmTJ7Wg9jiN2YoC9vvMwMjj1bju4FcVTC3",
  "key22": "2isRrLyF96DukVvBmFo76rBAjiGsmfEXDtdJZmJp6iBVNJuV74ReMpJMisRKWybCmXbr6haTNGSBPqHpYUmLXY4T",
  "key23": "2Vcs7sAC4JRNPfvBf4A78hztYqyBoGLAKnitVjyQVLjuuEXajuf9maNwu8XC6wVEUAxBN8UUcuaUZsRGi1f97Xrr",
  "key24": "BgRYH2y1zxpDGutSmazZnRgRpck3fvnaXHLRpVDQSFRPvWgCw89b3fZ43qVY4GbKpfBwqAgbwhguCq3VvmrkJwq",
  "key25": "3qQJXncyHtQ55c1uXTRwpxPcsvf34vnRidVddxg9QvuPdV27kXungdKLXiYf144eWT5sSj1X9n7LfwQ7UakuVqvd",
  "key26": "5pyebS3oqCRrBxFxUqsUTqEk1kvBVBbM28qEqyVVcWSmgxwcMuvxRAWydGYeisuByJUi8vW4zo5YpyrBKwiounNo",
  "key27": "3zXWTbq5KbT933YfVNG5MqBwBqACjsQvBSUQp9dWaGpMt6URuy7t53BJCL94jLiq97ZpH61WSE3YVH6aNT161WZY",
  "key28": "3RS1ERuNqPxbDG96oMN4XJcwqXJ8vMibJ5aKbn52GAxM4heSgwrrjanUDTT922vMD7ZvqAf74MaeiHxzjuNniL1N",
  "key29": "41J6HQ4uyo6n6BvyP2X44vXcFAXSU1sbozc5zXFak8gmTaEpn44QbyuK2iTiSdy8ZymtegzaUZEcT58W4hB98Rzg",
  "key30": "3XZxcudj2FhT6wTBSSor7CDHoSayJwv74ZDUHRi8q94iJL2jVSBwmn9gagpNDqNjVn8XMXQremyMH5ruXA2xXbDz"
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
