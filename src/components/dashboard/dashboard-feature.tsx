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
    "9ZdPXeEyLH7k535AbaPih6mwDbF6dTMQxUAeo165Sv1gHwuLvoaZX5r8XgXaqX7xAT7zbQNpypkzJnjPs1thaKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5A3TiZmWkw6Mpm23rTzHekb6h8E8DtsM5KJQCjgjUHLxrCs8jG1bHwE277moYd4kSQjy3TB4cxzzi2Vz9SK66j",
  "key1": "3MY1H3iGn39q9yNpYS2zAdMTHPuAbs9hPEyVHnoz3dJ7eRiRzwkTV2BM17XAxFQbGhnD986zmv4CnPmWS7M8Lg7g",
  "key2": "5BHz8eguRwxAH2gmPRjYnk9QocLz22szMAEZV1eKCrfb1rQ8xNo8oJJbFggUShvsiuAGnqHzAc8vrGT5pJt3gCig",
  "key3": "5Gz2BnjTs7QuwegncScvBSUV8uRpkZ6Pdi6mT51WvCNQJyEFfLQCxBoGFAEJeiM2zYcyUPaKNQnRKwMy7ZpsHWsY",
  "key4": "3RLye1gp2pqNyknEg9fiQQnkZNrNeuBFxPkz1wTFF4jdR5FCVYFGnBJKK7WfTdUQSdSDyFHd9duPYF4Vkt8hyJp9",
  "key5": "32ktGhryVAGQtAw6yBUDtKFdU8tkv1Vt8CHMQQNCfouJwaUXUAXBa2EF3TtGh55u3sS5URGGpBgcBoU4oRWRWE7E",
  "key6": "2VmF9hvcFZoRXpHBUSBuUfCHgXdHDX3ZeASdNuzbiCGwjGAak2mrxEXq7TyLqiTzpGxb4UMrLbUhseufV6Vws8bA",
  "key7": "4U5N6wtABkWhZyrb3kj75C6L7oZ22Fb6omgMTzzSZNPYfB6LffjP3FmAjQFFPDKUgmYRELgjryVsPxaTMJcPwuEV",
  "key8": "5WiFw5nigmuAFjDKDPc4CzSgEP7oNUqsxxvAprCKYgNJuvpqHtJA5tVwLJLgyVr2ryUoaQVtWGFz8YeCuq9gEZNT",
  "key9": "3Ypw38jZQBWgib9J6WLRitn8zqA99d8WEyar3rkVRXxVRRxVk3X39knicEDv9avhBj6USuhV5jYpQZuF9aBozmfS",
  "key10": "5fHBBs473QxrvGomugxFnmc84ccZ5WmTkoVSHb8u8eRAsAUrrWgk49GwLMKk82xTjdtu7QtGiS1YKZzwyuF9ZZwf",
  "key11": "2ZwxbE1tKPJnbGp9ZHJpEq1hsLwgcMpEYAFetZdsXYH675GzagLAbnJPgxY3HbrXbP2LjFpyTx3aXNzPAsFKKnZT",
  "key12": "39frQpmkd2gjsZ94cihhsy96RTKWFQCYMGwAP3aqxZnCCrVmFXBemB6qXwaVvgmKJae3vnCiLT4snDEDU2FWDEnX",
  "key13": "3YVPTzWEDxPeByBGMsoExyTNdy5UyGAWdbzy8QMNu1YWpuGi3vFtHUTGyWbj1nqpBmpCyP3NK3JNRRJizktTZxqs",
  "key14": "5iVxjApEYKg29ih1QqnAm532efevceQdnnvqK5qeXZFWDYXs2EgQpfpbSyBPhgBtKMLq7yf5vu4WBEnYEq1pkoYJ",
  "key15": "4bdR9wzFMYU5bncrq8S5tajmbwXporBR3U6zg2T7yVKWUmTU7Fp3uKRfWDyNEx1wCszP5UkjTxoWeSxFzykmLqq5",
  "key16": "2PCE7KLv4VpFnNHBQTxjanySJve5USHcZUVsb9ihQQGDAHpcJwTrGyPnzKeN39BFhXK1HyhARPacKxJhfk1ShEYa",
  "key17": "4R5Ak4fGcWxGPpUp6mrVwNcGcCBrgMNxmnPq3uYe68e9tA4eC8VhnDLrREoEwbnraLgjzPWz8aw5Ph3qyQaPknvX",
  "key18": "4G2MtLyf41HkAjUdj7rqQwYAm2A4Td9ArLcNTxfSbtecoRqXRuBBkG2wSgKN2GznvL5eiHJ5JZxspg1A2Zx3iLDU",
  "key19": "2RWCcCy8CuzbMpgEEgCezdwYYZtt7S4CnrdCvJAYLteRLewie6QUxvzotu1NBYs3q2HKQ3go5R7E7dWrZHaXJLA4",
  "key20": "4qiGJFMtE99753m4rgkAHXzY1Q5n4oLZ7tuzpuYC3BVrWu6EWTZjyyB9Ly5gh4Viy4KxcBDkSuok2YxwzQiCC7Ki",
  "key21": "WUreXMDn7xckpE8YngJNwGqvzPWxedXUAY8kZDW8BfGYsWtN478xVwaekzRtkuafrC553XnZ8es7Nz2oCAQJFUi",
  "key22": "5R3NtuhUh5BnKuRDkUWUq3V4X7nTFCcuBDcujRm4SWJeWkmowmVaqCbNFfFYFmsefsDC4qBxCWGB7mVskj9VqkVG",
  "key23": "3Jg5JvUMu4aZEriNJCukYnF9UgmafNXwM2iYP2L459ARyPDc2wwBh3LCYVCKu38visMGXCnjCg5HqD3Zk9wsjhvX",
  "key24": "5EvW4Yjq3k8dUsJj8oA28DVwidnQgR7qMFtQz1gFgr2woncuxx8wzGNSffcHLTWTVc8Cn5W3bJ99R6y7bSQPaYwK"
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
