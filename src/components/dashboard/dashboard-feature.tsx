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
    "5QzH48nGWMhoDTsRHJhE7XpZoGabeVp48E7BtLsgc7ZmzHmZpnHHJPX1j1Z5y1aKv5HcGzYHPbZUFD3BERqHL6NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZtwvakkJa1fpgaRaZm3cbDPJY7myP3dw2V2wknXyVkQAcFsKipwYj7ykFgqPkjAVjc1cC1i8Yk31pyVT1kVY9JJ",
  "key1": "3ThSuX7dV4LVTutcNfic5DkayjTYeHbCKu41UxyAN62c7WPEcotUE6L2riLVoyG5Smw4EJr3bNFSqPzR5tuXoAQg",
  "key2": "5GDMt492YfnxLyVkE5ncoBtSRP5ZABWvrUSkE5ojfYYruqeU17nhzcZrLuuxGyTBehiWqZoDpYNjoX6djPuu1L3e",
  "key3": "4RpUwDLEf1Z75FUB6hcAAdRi3JtVJ7MzCHt1ZudzqYG55VCDUe7GEWF9StUtYJTKTebVSG6LfmTB3XPf4cWYtzjm",
  "key4": "3kfLRkcpeNiMFV2voRUhUX95dxayxxAeLzvBdwx86yhWYk94QkRHefPVzBQxUAwdyS8VuTmx4wGr66vk9RM29YY6",
  "key5": "2A3oHard9ypF7P4oaonYn3UucyvFkASmQf8u98SHFpjEhdgjK8D6oZNQMATevr15yn12AibuYeZ7wJrV6xCcdqCh",
  "key6": "3ot7bd3UgQQYLsYTTAmdmecty94XW6fmLumx4RQtrnnTUgPqkiWJLdm2v2UJih4AD7bZtPgrcJcpooGmDPTkij3i",
  "key7": "33GoeTEPvunYj69i5KJtg821b3tEnHtAMZePZw8eCoGAP9pxZfmgjscqDUc9XbPMHSgCPDERgav8qXEbZfpwEMnU",
  "key8": "2qSMYAz3otoWjrmwH3VBFYBdNNU8ukL4YSe6wqoKVix2xkNSvjT1CQ1nQNGHmvZzDRsbvKYYvqXoUTvqwUMKu9ZJ",
  "key9": "5KVFuBMMW1ddFpJ4SwCNvRhE6QwJaZfb1ZbbV6jhayMd742tRXSgZtrDczYzTQJTCciZcwUBWX31FfKyQos9RxWe",
  "key10": "35bjgGvxpi43cTtrmX5yhdwGNr2zQS3oyTg24PNs4awMLVKXjf7fXMbozjtkWGXSBgzHSZboVpYvF7x8pGf5gN1b",
  "key11": "2HpNHNxAkEbfK23StrLUcDCMs278UwVn9j6CZVSU9sysgBMk97rCqA5XxXwKSDEj2qBdwtxA9k9EUUkPxK7anLPP",
  "key12": "3rSb4iiDUuvgAzJqrdM7Yw7Je2jXdCSmbxbJDr9U43byoSrT7qs1KiUvXfRKNL3afgNju6QyxuEaR1Xiz733uAfW",
  "key13": "5Sc1WyikAwZp7pwbFFitVSavQ511YNfg8QKh23dUhX5TpmotuwM7etnEh2HJB8grk7gtjrZk4tcjH2xdZwswjFEA",
  "key14": "4yABRgrmUQFn1PzRAAJghytQP1ALz2TnkbzEdZkSq9wAxybPw7XJCf8dT8ZiZADFEUwXqS6VRjri4eUR14fatKvi",
  "key15": "4CfdK5YVcYMbr2d5jqjivu57qmNJ2CM67RZkQgtWNofm837dYWQ1YnAmobPWeKDwSS4HMASeY4dPRLoZTqnVU7JQ",
  "key16": "2Mn9MJMtdwo3xcxRwRv2NzQqbQc85FJxoSYh6aB1NkB2DuUqJdhN6N1kFeLVeGjcXqGZcaFoSTpx8qpcUVfXN55E",
  "key17": "8YwaoEgCU56J43W3m3XmBo5ywqwppfqR6nSEaj3mBrznvyYdQdFWPhvqLBD8e1gDYkQzVjWoSWtg8UF5qxGCH3f",
  "key18": "5NzGD8HwjuKLXBFDiKfzfjHdSHkkTaGR2o5gZESrnxTgsyAarcB1yrwMzCdAHUsm6S72CojGQ9fYReZ9VNTDzBLv",
  "key19": "3kXq27vFsDf4bV558Qf9Bs4syHRhgz5yHbBuka1KmVm9kHpy5Evo3WRX8cYABvAS6Tju2w7DQU9R8y6r69vN4psm",
  "key20": "ak2e4BFnBFFR9thGQ2ufgb2fpg8PJGBk1MitXSostZroC6z27in14Hb6XovJ9jm7GGYtnvn6b2Ljsnu6TDCbqJG",
  "key21": "4Yq88nVxxDYRcSGv4iQoDoSkDjEYK7x6nDRXFCeEYbF4pCXLMRMZNQKQk35EGo3UYmgTxhueaZdGNWLETmtHxdz9",
  "key22": "5V7y6hccbduvDtfNHSA3QzKv7MtjWgh6hJQvUovTbS7T7i36xFS7vcCbbK85PrTh2wty85Qd3iwGQ23ypYvKwd4t",
  "key23": "4JLsuLq6pXZEG8YLsFgmZxyth1vXRquoNid9g8Ws9qD34hFnRom7Q3xe6yDp8P9SHeXW1JAVY4651A6Tw1dD1xXh",
  "key24": "2AtKxwRbcLfDySazDmqPTfNM3z8VebKJta6v7nfz8amRiQtc9s8ceRyw4XnRCQAP7EqmUUVjFBQ9XkPCTvV1BfwZ"
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
