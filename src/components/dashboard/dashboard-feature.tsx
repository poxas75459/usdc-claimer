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
    "514VN2xmtHag5gjcGD5KYcwKgzaw2oTtxArL8WcChMzYptyWxvNFSb4tcx34fRJWXFkticSbatChomEHTetNtZsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fjj4LMareAodKgh4sg9idCzBHXiXGuhhZhRFTnrZZLJbhZuFaERPErkvp4PA4ePUxBNLto5HBs3wxhnKhpJ8ZnP",
  "key1": "38o1MTt4kP6xcUDVhJGmmMvvMzLZ7LQ4F8xZAEQSv2AnBQjV2jikaEQuPKh1uaAxtojV1upSiYL3nmjDY99KEwup",
  "key2": "34Mf4RAn1JxuCpt8pEDJHU9wC4hhAu8Ek8MiMrZJzqwDBUgELdn2kY2fw6M5jXBmFcF8YxQRN6vM6JxBwb6AwGZB",
  "key3": "5fEuvf8Sd7tVxWj5H9v65gS7SquHfSWzkPjdYP9uvbfe7evv4zLc1zmwoopGAiCVV6Kt6PUhtgJPWi3Ee1nhuheX",
  "key4": "5sXMA1hbSKJq5S7rXJTpeLFcrH4PWtmaBfUFJiG1Zrb9yDPHQy4gNtHo1sC8awzXPBkRKuBKBWxhXDSXZcXRkkcY",
  "key5": "DADY7s8NGTJ9gcB9nuU8rGFvwZCyMHb9upnvGR7dtrdCmxPjSJZaS9T4JANzyyyAL2XHhH99KmHeGnd7JfV3Y91",
  "key6": "2h997FCuzycq7kPMm4LhLfjB5UjUApbcndHgtotecsdkDP4MtDseGJY2vGEZTTJqxwBk6dH5M9hWHKKtQF6r1dbn",
  "key7": "5HZEYDuxKhfwoDgjnA4DXzWUWykTXxSvyvrWDhfrKKHxHuiQBzdFpEAM3zTmxfWzHpgf8ZAQLDHt9pGpD9B4T3wK",
  "key8": "D6hCGvCmuEVcMqY6pZiWtJP1Pk463oe55PLCdzMCobxk6zMvvjcLhx4LeGd1HsHjy4LrC91aDH3yCaaxwKyaayq",
  "key9": "EWXKc38z5e3EZsGhCKfMCQg3S4Ut68YAisNY44nFXY1UFQ4SEP6jh8KjWi5ixDmBB5hzuCQNLW3WGGi8jQ4Pvvg",
  "key10": "4jUbi7gsp829h5acYz21xtBVq2H3WD2MUh8AypeeUD1PyH6WzmJCYNaJREEpCSwBZLqchWa7GgpBgUcfXsAa1C9K",
  "key11": "2SnpTrEtY3jUwahRGyHxa9qwmzpcXzTn959rLhExPpwMSDPHzQ4Zwy1sKqgSkQ4F3hkg6tDM1GUeNbcVqym2syKi",
  "key12": "3L4EistPwHvwCfS7mMkzFsJSPQuCtSC2XmZwS5rd6CDWLTkCHjybhHpLxxTa8Di5HKEEgYHixzaM2YPkuRR47XgB",
  "key13": "4ziut5ULtkt17wZVR5E5B7xzCA2B21mZvfg4gg9ASCU3JNhYPVmNxYbKFbMX91cHVk9E9a8JrSov9PauLxsFQPix",
  "key14": "cDz7VTsBotRyW7Ez49B9e98nHGAPvuZehQGaQwMFsKEEfS27MdM32xZJaKmhi9MnhwxvRbeNg2VhUq25KfjRpSV",
  "key15": "3HB6YGDbpqVmmvNcqXkdZMGBA83io1HTGHEAi7259RMYaqsWjCoCs49UUtzj1kD5ChgWEdT7PTDYWgUcyCbsXLPt",
  "key16": "G7JrzBmFBqdD4WYK4mEuURdBJvxKoNh6ZzSf2Ccg972ddJFrCy3UGbeBZQdqe5ZtXKxtTg9918qhofFTFAixsrx",
  "key17": "6wZVbb3YkQnF3ugRxvr8WuwVVgBCGAxyHrsZHAXzWZMLsSgZB287Xjbc8H3R4XRMfoyxNvVgyBnWon5MVCgiWBG",
  "key18": "2udpCFLmn5SksEsbBgoXnYbhm6kNnBvEbL1x8X1CaRtKFCEd5z9GQXDd5EhrZGGLd3BgRrrnLnJ2cE5oczUWdob2",
  "key19": "3pbpjdB6UZWsYMnsR22tDAVisyHBvNxDDaZ4HuK6YQdGjmuJfZ5tRS5Z48MFgbiTr4rk28CZeMZrUppAnMobyjdv",
  "key20": "3uLmTEHB6DxxPyqXqSjHkKPa8PrNJqVdvLSLJXGheVYnTKcRu8Q5hHkn63EQyFaAj68XGkbMovYmTGaikLNeaokP",
  "key21": "2KxRRjJ3sKrnCKcF1mVLyj3atP69YkjCQvAY4RskWh8LMsW1piHLywwxJbMmuFFn6qCiikoeP7DmNQn3tLQfiuda",
  "key22": "5m9paxE3yAYFnR4qC9LyoGgq3i7PF3ypVhiGEwLHgHb8SjCdxv6AG9gboGE9k7YG7czyQD1zvXkZT1RyKm5JsrS5",
  "key23": "jSBxjKvgsJuRJDYiwdqipGgZM3uPz436Uv4tKxQQE7xDrGd9Uc8MJj6zkdXZme2cEeLhWEMZr2FQXNv6ZMPZrWz",
  "key24": "d7mzPFyzkCWx5yVCQXgtXDRrLFoVhV6BvGFEVboefqmwPnq2wiAwwGwy5p9J6NsyuGwtnE5d6L9PL2CdLxXCgnt",
  "key25": "DusYziZoCTQhUuXmSfgR6sodPwgCGeP6hfvFRAD2jdKGwGG41XTBQd1W92yN7RRxbZ3oz37HZM4qqjbMUZkp6kR",
  "key26": "3YAvuJwLrjPW989AJhxZ25b7ECiDyfS1jU85BwKMFEQbm1UVYZpcE3FJ5AjSZjAMctwyxn879usiuWKVBjc8arGB",
  "key27": "5NTH7TyW7mC1zeAZWG2ECS7j67iP4uipsB4eqaA5WL6HCNQHfnDoSbegXxDs127p68yvgqXFiWK7HqxhjbDE75Fw",
  "key28": "iXEjXZXog8ZXdTPT99XEeChG48BkxGYK4WvA7BkuQpRYFkWCyBDnnUzXzFVFvdRBDnLTpsDLPbcBkPK2ZpXgaxn"
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
