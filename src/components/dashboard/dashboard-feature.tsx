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
    "3Vf6sxrfaMNG5gEXJw5PSitgxSh6BNxbhcnA185x7ppkY6pPdnwm4unyZo78bUXJvamzkNfkzE6XYfFxu1sC3jQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g58EjHGXZU3CcccZXD7p54Nt6uqwvRfTUEyQEPRg5j1vQqi85mxkPhP2JoUAk5nbawgaY9SyinNLBPXwYzLojEC",
  "key1": "5Sa2xPSjbQq5ZhjU11pRhYVfxAgoWovqJGDfdMvFkXFVEa6yH875xBDeSi5iEq9gFtTn6w22dy2uYi4umBMgbBxX",
  "key2": "29yQxAxfyJU5VmP53RFC4FwddwFc9q7TcmZX8sGFLxpS1Gxztjsk3EkFzEvKbasa5ivSKKefZiavNqWLaUa3CE6o",
  "key3": "271YwE3zXP9XPAj9dh1D3g7FJufwUrKJj7HcehZQbWsaKrT1vCQfG9JeZaDPRAa5MWKCfuxmtfpFXh1CpWKfd1bM",
  "key4": "wQNosUwiH1p7epxtwu2zJqENgocMpWuwKN6Jg8xKiWYyuHyDfnfnwgGf5cTZz86PZnQ1tGJugsKgH5QAsoVgXDd",
  "key5": "4zVATjGzJBBX4cUPtp48ZFvwvXz9xzKxf3FcNMKQCybysjKZabcjSsVPmsojKeHStrJxY2ELdJTFeiBmFTVmT9rf",
  "key6": "3a6zTWZLscKwVxffFg8FZ1a8BJvGUmdCdNt56h5kYqVvgN3zrTZW38fL2aszUxmPGqfVcBQbfRPnWPVrq2UaobMX",
  "key7": "5MktP4MGDgVTP3S6hR4nRP544xTFGfabkHVvigbmWEYNTunYD4HKCNcnZSPGjhZoyD8h9v6Wo845jhWGPYzrmuUc",
  "key8": "3Dp8BKjMPFap6zVMHteMyt2KMa63rZSxAETVRutmcvLWuM7rzi5QTG9Ge49nKjie5MbyP1W7xAU9CYSA53VTG2XM",
  "key9": "3BJKfJy3FxqLnDi4vZcZ2HmLSjcX1Yg5n8RYKRw7nGDhLXL9sYoWLKGvGDF4rnwwYm1RQcRomN56W7xWKEJLq4nh",
  "key10": "3K4YHB15cmaAHwnR4EdAe8PMraZtwxRUrS1rpcwFWPG6UuVTgNS829Yngfmt6qQA6jaxFhdAoqgWWL5yiK37PC5n",
  "key11": "5bP9wBWXc515eszuqKuH6cKMCkhcAbcNx6Susrj7XyhjUerwNmH213WPNyoeKdstVypuDa9oxQ5D7wW93VxyYwR6",
  "key12": "5pGVTFCfRAdXZrLvNDDdWvgFCPGJ5N7otDoQTDXaP7MxipKHcZVWjELM1PA36HYwBaqiV9FS6LWci4PcYPqyokwP",
  "key13": "5za7rnnL8mUAuJVjnnnMox2D3k7NTfs7rXyHqZsy6rYYubrypC8biobEmsDYFoKgDmJh7GFeVqCbMf9ZuhdZ4Zq9",
  "key14": "iWzLzYMwy5bQDvE6k4V3aRw3JJxi9ak1XUPGNWJzFb3JUg7dJaySXEuWL6kpzynLDwZfHjdDiFytc1z5C6R948a",
  "key15": "23MCWmj7TtG4LHzzLQ4ccLw23ucPXY3ZQ2PsFEgYs2527JYwEb8DWNyW3u78oyCUZriQqmq45sgjiCzek9waB5r2",
  "key16": "5KcSZCzyVevD568DjjdU3kEBdsWR4sW5RhoWSkCmUQ8kxYeKXM4MYYardCgmtNR3YVhzZsxXhuo4GPEnhpNmtiw8",
  "key17": "2RrmD3pcvzXGE3PHbGBye6F12M7iJfrmebtK6u4QGCmK9gDzAfCTHz3sJpeHNGo4UVp2c7yvKxmwaWyenAwsE2q1",
  "key18": "uCtZJ9ZSXdxAqtrcpamdBKZeSi7M7vwehyVqA9dEUQ6H9TEcFkP5w4Acarr5wvxRbrUXnZGhQEFy5WMyhrUUq6L",
  "key19": "5GAxZizqDW7rYLptSgAaMCZ8Q6HBHxR4G2M9TDPUYK8EGgU8DjqiZwuUNYu3o8rQ9TDSRXS1CSKpasE4ioC9Enu5",
  "key20": "419mFtFC7RiUvgceT6iMo6LASjt4k2iwzV8t6BJ1ijUvzttMYEecfMdyMJP1dsfd8pxSaLAuZHiom76KmU5XX5Ud",
  "key21": "2Gk1MuyFuhhXMXJmux6TJjxpiRn8tLdvqUYbTdCQYPFtPWAwizwRZfKTXNEuB1m7yyz2Sz9nuphPvyZ7Lk7d6BVP",
  "key22": "29FFQnhuwwmpYeo44eTQQEFjneeFL7fyUcxX6qgchJbRQj8pMAikv5Be5msehq2EJzaqxmLFF8UDitFzTWhMh5fq",
  "key23": "4822UrqL5qTtSC225XFr1GGH95pFrxtBr36bd9XKB8kw7bnMjiEgHdZB5nTkRaNfSXMff1q3HvgjqtU7irDZcfPW",
  "key24": "4KGhPkuFkdetfktAKi3gcorYZL1mwQxumadRWvE8dr59LchX3hWQZMgKejjMVPNajZT5VKjZ3kNA6RWQ9sTDqpRR",
  "key25": "Y1ZRnSAoQMqkN2LYRBtDpyNYAq4ZSTnjc8gamuw7NVHKgUahfyUZRHqY9i2iy3L3adFg4N4PTsZ663U7am9u988",
  "key26": "CG6EdH9v7NQHcBkcoUcNwB8LpYgsRA7Q6XiqZa5mNnWtW4NiiRbH7XuWsaEBMZ1oNYFQ3jnHRDDWxr6SjXcGhgT",
  "key27": "3T8Csv8vSHpCBcXU7ntFyd2RaAbUXeQ2NVWtfnZPVTkjb7X12XfpWYHjyi3Y4JSEh2PQPSjPhEtSgNv7gud9WekF",
  "key28": "VvsN99evujmZJ2nYRN9DU8FDT1jms3twH9mmnE8e75edDbRW2xzYW52Cp83mJSLLY8gYNX92U2wEjXSbVaaxJEv",
  "key29": "4Nr5UiACMRvSWKccnexRKh8GfNXAjVXohA3hAsHoVTbishkn52R6YxTo5mr3XoCtxveveXHwGKPiZFVRmRuEUn9j",
  "key30": "2HCS7T6CN94Vm7pYb4WnVENbUd4cKguM95VrthBWGMj2XnMRb94YQ6jGAd6sMrqQnccPbvSzb2UBh8rNz6fEL5ZD",
  "key31": "d7Gqdg1e1j1X35LmiLSgqPoZwgjZt4QxXzLmc1NNDiCWno1m53Q77mfjrfrcQJZbEFMQUZtfVpY4zinkyy46Pbe",
  "key32": "fFJgZ82JLJFoR8H1ddQGjryVgoqMKhbuDCSku1t98yv4Afq1ixv3bh3QANJeu4n5BYY5Lg1rnH5cEauM16kMYvQ",
  "key33": "2oo7xxe7hL9CRZEMQQaLkgEhsroqbVfcrhCRFaUW6vMnYomPThtyGLHmErjwCdAnL5cCD1Q84SfGrP8XJ9GXTaxc",
  "key34": "33cfcyCaygo7RCDLnj43pgW4XiCsa289juYQg3T8yWGahJkjCJ2dVtLa5hE1KRnu7jMk1o78cbBs86YQJYRR1Zx1",
  "key35": "4oCDiNv2Vf8gLzbrJHrAxiQjVDGSEQAW7t4poeqkRSk6FvZ5p76Mm8KbfTp9T9Mt5c1h5oLSDq9oAPgRAAS3FeGh",
  "key36": "2Cr6dARP2qcpEiS6UcjX86BB1RiPpR18WT1a7sCAibwZnWCKQVi9nEXoMeZet1kSsVLEmzM5e26CarnZ3ZapbEmR",
  "key37": "44XmDqSyhvxwUtjTVPmjSDFNc4hiFTyfCyXRG3T2yf1tCgmtybwZiPmqce3SUu9kRWHZr239Ly4ed588MfkL9F6d"
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
