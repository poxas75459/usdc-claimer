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
    "3FowsWqhHeaoJt482g3VdTkJAGpvdwqvmxoTjjr1GXjGaLuA835FqFAgUWTBhMdrgA43ry9nMpukoeCZwMur9HUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJRZ6P2sr2xXf8rg5zRyraaYFY22uSE1gH6aasbKYgMQtQZSBkYuULSMLPhV9rHqr8mdJfZ8gCLWSj6zQyAHQif",
  "key1": "5863DR5WLYSypbHXFU4FUxDjgjekaxzVSaVVEhKz8odVqhSYf2uZ11yBfsSnAb2jZcWmrUsqoVqycxm4grfwmnXt",
  "key2": "3cKv4Z7FopXhWvzXJkpXdofvSFwMY3YBAZz4yEh9GZ7mxgw3GAWQoxT53VyrRhuGYNH5WEVhyBN6LS5oDSA4NML2",
  "key3": "zGV7fpcBLaiEk6uoTyZ7i3ktzTJGxx5TqKWjLzcgyJwrGp7qyTX8YM29F6AAPJPFvCSFMwJPFDXL5ZXiqkjZr4W",
  "key4": "2jRUCdxtHyJDn7i5JytRU5qEHdEhCzUdVWRbkf5zGM9C6qtZ6vt2L7hytELFW1XeYn7sAM8eddn6sqvQTuqZVyNt",
  "key5": "ARvz1YcM4urGgyYEBk578GSrKBf19p3NrYPbiTpUPS4sM2a1aevvtvSVFUL5tEwEpf5hHQnSMb9usewCaKd9kHF",
  "key6": "9MCjGtpUA8CW6VKQjutbSNfcFLwcRWRPP7JSkjhxP5nv1rrcs6uLhyNNkofzqAufJ85z1jmBRYhMirtfarBQgX7",
  "key7": "4TZBrWxysBUREs6Ncgmym3R6k7mGdkD1Xugou1hHsFswREFg1YPXGYEigrCCQymymGYYr8ckcY71oLZxC2w39Pqp",
  "key8": "5G1q5cmXSVEkUYtih5vqUjodNG6vhYj4anfPeaNCwVUTjuHMntZurkVXw4BSwwLRmExjSRSCNsRgyiR2DhcePmEN",
  "key9": "5a7MhkWEMLY6wMs7rMBgarBmUJtVbDMivXUrivgdD4aWoMPXGEwR95d9eNSycLwgiYiku79EnGH26MERLys7eun6",
  "key10": "57pcxim2HT8DUwbtUyd9DWutGwR4SNGUo4XpFE5to1TGGtYhxnB8TTggKmKVuYCPwYXXMFTw6zbWsd5L6aETe5vy",
  "key11": "3jgcRFBEPMPvMH5ArtMVBwMt8VMsvf8bVCMYS8LPQ2BNkZPa8j3UtGEEo4x1P7jr7vnDiQr1fsi7qjtnDczHqLi",
  "key12": "DR88kvxYteMWyXCvTh8NX558P7GyrQFiUcAcog8Q9HHXYU1fkRgXgCZupt2tRMWq5TGutwwDczYrhfLfZh1RKNQ",
  "key13": "2PJnYWV6R1sG47sLBmZ5wCZmJZJo6s3Q8nc4TXpGoFibUurrYjJkVaavLmC2UCMQDZZHe5gLk2bWaomgmsRc4M6R",
  "key14": "VpZkqTxbn8kEh5HXhAgueYoL57fChvR8sSzp6TnGwjfC5KLCHK65fSKhtzviHxeCEYci7crCsEUf8om6Qv9X2iW",
  "key15": "7EEo6XWzDNQJWDWFewtH5QUdMFWLdWDWW4q6oYLEDkQVN6TKSShCq2niyWrKGFad1WmmwrA9n1sfXzAuxjQ6nuw",
  "key16": "2TCdPQW2F6kvvyEQNneeVQSKq5ye78jtimS6VENTvxTKszwpDqSjZoz888veJ9BP8ceLp3VzDMprumaZZQcuxAzj",
  "key17": "2EHveXudj78R1HoLwoG7WUhAKyVVbrGXY3WMhi9KApawGe7GeEStXPomURga2eZDzgieK41TNMFbbmLMbAHNswX",
  "key18": "2twAeK5XsLZgDzAmLeaK3g22rfqnaXmoKo5VSYGe8d8femLEQnKXFaUrWqemMEcuDMduUxtiM3dhfX1C2ARYBTFE",
  "key19": "35DiYmHcRMsYzARyU2zxJzLihUN8n8RTjC9oThs21Va27WAAvLBvGHYSjkSZ4323MWw8Bxy6C6D5RficQ6gP4hAF",
  "key20": "iUcvcyo9pGBg5dfryk2jFy99vMtHPYFV9zn6MZ4vtbgpNpBzARMCJeBJEk4ZTp52bW3jtMk78EBSXBenndVLvjX",
  "key21": "5bgN8skR43UkkHYLhfi9ijcHorE4WqjNY1UkJnSf2tpDLzmo73JyNE6DcJVm6tdypMtq69nvcxJWPgtJFkiPiM9J",
  "key22": "cmGJNsp9mtWJJdKs9MisQNAZ1ZEBXXo3sH2imT5KCUGHiVM9SVRrqDMqHZeL9cy6MwZMEfiy36s37oUqvkG3n8A",
  "key23": "2AUAGDK8UWWx2AATLyYBPboKM6jvkcouyp6VkJsmwP3nrngdGWeNdXYNM1WQtMBzPERExNMc7nriRNXzknkwn6XV",
  "key24": "5LASuHFYsUQYWdeephZPS8SY1SDhFtc1nHD24uPBrvcku2uQTvcA7bLHLK8JUWUjVrvfSoJ8tVRF2ZYTdzqaXKWV",
  "key25": "5oe7UvaxawnG1zCEnTTSjmZFwRMuK2FVDyFQd9E3hBujzA5s7HYPUwMf82B1c7kFySXsyuAcHoLz6F1S53tSoNbm",
  "key26": "4aSs5aA1hjpVujZoVE6XfrrFmEV1RLDKwfBVgFvgogr5Q1m6FvZQv7WyMATpCU7XmQEeWShUXi8XQCabt5QNoamk",
  "key27": "2PaSgnmsdq1MQdoxpr1vcooWqsSoe7HtjMrr5ZwK9LQjnULZQF1o9jiSEqiMujK3jEEdjqbKNwm5xVXThdYtaZeb",
  "key28": "4aRpcjxk16QE5KoeBbhYog3cZgeemJcSxEevhCKdJgg5PcjqkwSchhXmiTb3xyhDTzoK1WqH1KhvwCtfqxPKMQAX"
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
