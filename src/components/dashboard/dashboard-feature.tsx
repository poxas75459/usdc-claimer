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
    "5XqzbSMZEFXKGujr1u15cPVvAifXRWYSkGXeKTRCf61UoNMxEUf9vyovk9yQJbT2BkirqgrnmzU1b1QW7xgCLnrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKh2Fth9GHkd6YN6nPTCGyNjDCadscMep6NgDWi5mYWTtvGuZxZVKPzn8FXRjYSB79yZnenEt3dnGnVVaH1HHzV",
  "key1": "546o1nwbk1sUtoFnuZWuf66WCdeiyEYnf7qD2Nu4rbEyH6Xbe5HGvnoTs8XxAQDtbHBZBR6qMnhds2iaK89AR8tv",
  "key2": "5nFyyCi2vbua54kGcgJDSEM8PREsSxpo592hgTEjGsSYTaKfQPTdwesDVCPKnnK9hs4Vxf1PBxcQDS1t9e4Csffu",
  "key3": "5xtWHfC7ZD24CNdF3Uq7N5QYwHWKGYCM2P7cyQJeEwQhLqSqxr7EoBAtPip7gqohVaD1fQgBRqvyZCUS8rP38e6t",
  "key4": "5tZ6czvi13Wd4aKeJ9eZD6woLrrrUBnaVZtTzPMSF2D46a3JiWNVNxJSKLWNQXbuyqBpYmgkJsQ6rTCB6eHK6Yuw",
  "key5": "2yYs9yG2HFzKkiiME7vgTxukMKh9F26kzb4SVh6d9dpL1eixdLCkHwgxYH9u1y1uZ4cdSbdmmK5ZaseZWUM7Uudi",
  "key6": "2YUrH1cnBEaMiURyAhRgvmeoJBJCBbffJwujCXfbgYSN5BGi1wYeaN62jBLBaKvXLq9i4NVy84qk51rB2M2ZCB4L",
  "key7": "t8B49ayDsH91eEjPkzZJ3mFpt3eJ7mJVW1GmPxEKyqJH5aVeJErvHMzR7V1VS1sGWCX5Ch89mDutS4n6HkENhtX",
  "key8": "3L13HyWM3YTXQrVBttC9FwPnF51npXhu9vUmzX9puve9vA87z2GMw9YaH67924CQsLEUe9hz2b8E3md9mLsDez6P",
  "key9": "3wRqvHCxmXpA8DNiVbFCv3MqVZuPupiGXcEi4Q6cseFpq7juBsmQHB9WTD62HtKeR7uVpDxg9wGZN4qkx59AUUTC",
  "key10": "4h42RdHSWYEmdBYY13gXx5pK16nKArXnVh8vzrtX5NSaJrvg8fgcUQWyd6cwfFz7kiRexXojDpmrBDofSwJfYYVz",
  "key11": "5LdBzMoESnRqdmHngU2aLkEY7JnB6w8Y3yUpwU1KM3yS8hcfwAJUhj1qgN6kKZFh7h1biGBrgmim11tY8ArSHUKj",
  "key12": "3qxwrdqz7M7pgb8W5AQxrDBZ1FrFbWVnkWEwtWnt15JWimvmqoyYUhxrrbGq2kcg135WWiYMrgoXnAci6umXy6Zc",
  "key13": "BSnAZ3p7atukpZ8ZVXx9WGCwowtG4UjjgMNx2EhYViVPrsFQiRccf3TU8cquRQcctu6de4SK1Q7mdovN2wCNeGw",
  "key14": "66ac4S3itAM6gMj7AdfGYg1E5JiNFCTH9JpUT5BwSLEemDFSAMs2ZJc61Jn7TEyBiti7fxjUKxnC66PmLqWZgXHa",
  "key15": "3ZXGVGPZXzPYUEysSjTeEFriBxhguVYpAJUyeKpui5D7bo6Zsh7uu7PTWDtzYCynPLqttKiGxfmHqca9bPh46MHQ",
  "key16": "2hHN9nQDtf7Cqt4XMJwvJD4Wuu5LPMjW4smdvEKyR6BsustYrCQzBe144jM5DiBqkms2YM6ck3nhRaJSYsdh9JMm",
  "key17": "ghi9cctY6n5fzaFyhMCWKmQA4JrQriwPfFteE7QBGQkCSGyu1hpG7Mw54FXtkSbsMpQxqPCaAY65nVtjqrvu6T3",
  "key18": "5mfwRrpF2XWy8JnJtNd6BdBNxJaDowgNzLMXrKrWAFqK36mYA7mKW2X7pMToKDGWAP5HGPZd2riGJbCsX5nAtG6e",
  "key19": "VzgWsiv7atp2Tu9Eijc7xW57ndutXeKjJnZPAPAmXxun7gSHXsV6oo6aYuQkCyuLtEqYaQouVzUyEPp6CzrQDNA",
  "key20": "36UcWMzN4SKqECT8Aa5c8iRf49dZ7EkozAJprxCYGjNwytwpaJVewrcQtqfyHM5AjPhn2MmWoVehDesWoE2HeNjo",
  "key21": "5kLg6ERK6UE8mp7F9fUZFXkMsTeV2XcpW7dV1MWSo3dZ2WXoqC1jn4nk7VvPyGuobCuSs9WxuUEw6kwVTGttiobn",
  "key22": "3bgd6SgEdJbjaYrvQv5VdQdrjmd4tns7gUa2cFEzWkQuqbxQ6XtDXjgG6TVz6F6BnwY798B7wYJFouzoVCGUNEZA",
  "key23": "2FQtiojPD7rtd1cVHnAKmFzAkbCLumvGZFEtJ73nyUQbXvQy2yhrxxKVDzY2Pwr1LQNJdKfQfVXBGT1rXweG5uTe",
  "key24": "GZwA6rnT93FuGTexA2g4yXD2T4m2BKRp2jYPehzuYc1dSvW2sVBdoQZPdEpA6wrk6gX6yA3xVTAVXyqytwYSgzt",
  "key25": "p6yy45FXRbGobVkpnzt1T5odTFr4X8agGmbVpar2JNcAsVvaDBCsW2qPTxcva9GmaE2gQgtzumMkRGY72a5q2XC",
  "key26": "2bPbu4U9JaN9dcRksLVuokdivgKSRpwSPfSD69Cot8jpXGPT6TqorbzquT5ypixRmevzwpSZaB6oKemUqNLMfP25",
  "key27": "5faj4LZjFHxMKQXFjbDCU8arudEQR9L5pHn7b695YmP812jnNXsz6PvJigiNtdXReoXWqGQ6rbV45zzbpSRTRrwe",
  "key28": "5Ygozk3MrhLe2gw6RuJ8DKMFo7LMjY16xL9B37wcag6NGVFiNtuPnmB6wUYKEFn9Y91e8BH9UT9MwDYa9P6NXHaf",
  "key29": "YnmLXpDLhyqy1Y5qGfasmhd37pdVXXWGZuetKbH2FnJ5hzZe7zLYypGP8J7SyUZDeaNo2LHEyXs9BY5gpoKy5YV"
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
