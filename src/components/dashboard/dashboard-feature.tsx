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
    "323Y7UmoNwnZ5MJTNJXKwuChmtGTqpjY5nknvPn4wCtg5igX6dxnYF4Zasoqj5fYHLDSS81rS6amX6fKYWRZCGMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623kC1Z7DEXo4wYYbV4GG3K9fS65i9hmgB9YJrT3XzWdL3VUHTvZ1tQ6DBM9QBKvm86pEuh1MQrhvrKcQA1qHwix",
  "key1": "2vmSTZdMp7CSiwrsBTpgpB7WNXSaLtq1oAAgSkybM9UcMWqT11zqhteXRrJVzhSZ5rnjq8xdkjfyDatpWoopYN2m",
  "key2": "4touwW8LQnFJk71jitWZSepShwuLCeSy7i5bagiNkPTpd6ECx8yuGY7BXTURWYwD4NvuJCbh3wLVHbj9mEinggGB",
  "key3": "2ffsLGatPh1JMdPQxu9YJZ1L48tKBcWyserYYix4s6GALnJ3BLh2jkbTZVkinVNDki5gPLNQ5jdECB5qSB5V6pyb",
  "key4": "25gGV14JmCz2GFX2bw5pjRfc57TdAGxvMEYVbb12fp2GUQpAafYKc4tvtKcBnHsxmW3KRkjBLTyaHdu8QPky94Sj",
  "key5": "2rBXpmjKTKsFUZsAZbxtdgbJj4HnjGNTNmVe65yHiBREMSe9K658pYqY7B5m2Vo7HmfTmornUehY1dhD7pnkw8hb",
  "key6": "3UbtsGUvF9pfxUaPgoWBEQCyT8bxKn3Sp88wZhbXH6ZJDzFTbB4GLcUNcD9iXLUXU52yPJxi1LqBQ7GBFGjwo8p4",
  "key7": "2a7AZJxdmJUXQ49miXX4BmnF8SHhXveyaSuRGeKVYPswqxRvwfqKZMkpmmNGHt4jjUXKd7Jjxm51YB7qRaC9VEre",
  "key8": "3ZyZ8mJQmycv9mrsMjaXZ9TKvFBTWyzkXx9prXLWasmdnbyktJjA7wECgmHUEeUTd9Q68x9V7ggH1VNGFuCeBiJZ",
  "key9": "2c1CvdBJJBWarrqyXts4UWJEWw5uhZ1MeANcAziz6L5VSFGUTnhEjEucx3P3sNiz23ybQrPieqexqKcpQ3Htv2TN",
  "key10": "2yfa2KXQ95VL5aELVLgFx6645ukASGYD5cEWTCmTGdzTAMN3xCqD3HM9khPGLYChBybnS9NJUav5BYczbCoBJsam",
  "key11": "3jQjrttKces66tHXbe4HvXX7KuLxHqTkwfzTSPWdVctjMS3NN1xoXNBo3GyyULyHXmemK82VuYawYFvPGibgQu5o",
  "key12": "4a2yL3mpQGLfFwe2WkXHGgjxJ35mDdYUk9KjFGdUW6fFkaMxroCxXmnVTUFJU6M8HHUqB6zqCXFU2r5Sz6yPhyLy",
  "key13": "644cxNU6yWNwJ7AbrxAj2CzKtV2wsmKpKknmQbDL2qxmkQ5rXhcyZXNaD8pbkauC4CvtnE34ByUfjBoChsytj71V",
  "key14": "36HuPFdHeUGyCjbjdMtadqwu2YnAEbpyFtJT1BUJk2JMimPUxBTD3nt51odyhDMzVJ3UsoHsfbPxSTinaqYU4VAn",
  "key15": "b2R8pCpYM4DW7inGPCRD5UdszqqMEsaAZ1AuGvFZTJYLoJqW3LtCTKSvz2TiLPQrBc3rYLVotYJdrp5LntaZ7b1",
  "key16": "62sj9mfrxGTuT39DiB7gidhmHtr6xTZu8pK5gH9GcGCsmbZgWC7pR58EKHaenkcHiqzYf6FzxzMooSRyNQCD4u94",
  "key17": "23SXJ3UVbtzocqtUaXUM3vtsf3VvBwvm1TLzy6a5dYuuXjndsaAsaNYqgjPBMaCEVNFzArdNWP6ics8Pc5cvY9c1",
  "key18": "34g4iKRQWfzYMPCW1UpQoDLCJgmj3pgiGGuY7t9wGa4KWoCkzXgo9WCNqfFQAJnwGQ4Fnfct8DRsy4y2guSYHX6s",
  "key19": "38v81eVX285ywn3M6BhdvMUbyhTzW9Z4m4vWyVDdHVG6RDfR7ScQ1ge8GN3pqEVyzs4qVoDBHKknN2ALthVWKSva",
  "key20": "3kypoQwNd6oRGDVmN9jvGnQfgn7SNMQ7hGBiHhaUbA4pALxwtGHG3CUriTtecHF4asWvczVrdpHBgbNiemSkXnay",
  "key21": "2i4WEB3sV1B9rDbuHJMaCcYTqdAXW9ELGydL8cnBQ88zLESn1j4u2K3Jkt37YBHctq8vz87vLzYxQ7fxp2CHX11S",
  "key22": "5XQPLmDXcrms7H7XRX1owo6XSzRJ3GpVtVPWZfVxedgkryCiUKS6JHi85WHrrTUNZomf3BnZGkbTrTpjd95SnRbo",
  "key23": "5vEoPQTBToD61J3Bbt4aJnyNZZr6wNMWCDBqpUcjnX97BTsok7EhPRFmLoRCCkBRXLm7gcaLgcZRcLkds2idpCGL",
  "key24": "44UfPo6sqkHScDSDCYEK19FPn5Zx5Xtan4mPbuLuVBWVzXmogJP7sjgDBKAiJzfmLFL4dVqnkNKHzbC863wnMyP4",
  "key25": "3pTerLctw5Y6a6TyWKc7aqMEbdJMjNv5ymCPDghKVR4UduxZkk1NrBrA8XUekEFeXYwTtScDUfesr4wn5KFaobAQ",
  "key26": "41QAiNCPEbuWRh9KHFqtCV3y5Jp1WXQGi9TBk8FqEoqEzT1B6s1QcRXoqkmBwmhPDyhRtfNaroeJ5nAunZXBoVcC",
  "key27": "47mWYrqRNete8TB9uYcP7Z9vEn9wbKr7wjXuCXJef72YufHCZSwMLJXduGCDZHujhecdfMGwNgTu7NzqYRcoGF7n",
  "key28": "2hRJkNguzw9nK3BmMWFkG1CgqVaXfVboQUBGaoFWWaVkJzwgcfqN1F6ZXxtAvYQGkRp2CjTf1zkLV6ce4sCCZF87",
  "key29": "2GngKy1xVjSCqxSf4YwpEmzra7M4F9dWpFYFWEut6LryWZ8RRGXTrpkpVSu6NFU72pQ6YUvKoiPsWwn4Ed7VdmSQ",
  "key30": "CqibML5sWSXYhdScwFSbUaL52RGvF5pEjxNXjs3WKFGSbJ5ZZYfYDsUxwX81Vi8gQ1uDbkK84ENj5LEkC5FyxQs",
  "key31": "XMkjFitFupRjKxhXtP56bCn8ehM795K5Rob7cd16rUmUrYrwC6dwymV9pV5nTkjwaY5nPDaq1uf1yNZWWD7hu25",
  "key32": "5WwcLZPHon3VhGQjfX9725p96mxHb1PxTeob6QCmssbZhYDH9Ed9qtDytWgxAqkfoSfBaSpQe5vbfwi2C3sd9Wua"
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
