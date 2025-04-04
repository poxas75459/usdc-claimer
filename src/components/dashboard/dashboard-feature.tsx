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
    "3wmAtb8PBFGNyRCqPvmP69JQnnwcPA9J9ECo9kfRTM9Fni9ud5PFSaNmnw9QT3Xh2nm3VPzdHRaUFLoqdXikMXYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4en9EegW1cz8uRoYfVGgUCTUE3ohJcDq4iFQHkUEoEdm4esKJ1mwVFVJjz785XjN5NyocmQH7jc9GjKvBBVJLDcZ",
  "key1": "XtiQSste5vGaF1JT1hRmVzzeDQowkidKhfcZoB3hzujK3gzCwCULQAzMBjKvo1DA5rNpCi2q1G9pMTbfx2Dapnz",
  "key2": "5KXv6jkcCiQskb1Hj7nKKyrvddishswUq3gtbYsQucajAJvAh4278xsQzLbGCo9633WduGYc67nk6N8KpqLSpFvy",
  "key3": "aSfh3fL1J8XTtrhfsBjxqnqTma1F4F8LEV3MN9GFtaFBTJCZu7bxGzNbdoisLoDdrkhZa8qD1FAf6YoQfGoYcXC",
  "key4": "5X4PvkNsRuoe9iaM8eJzFF4dsFZYjXQrtrDgsqtBS9Jt2cEcddcfMr4MEpoNkqrimJFRezhAEimcurUrqpSDCgQS",
  "key5": "2gWtPgRLcYEsSxAWhYbrkDUwynsTVpR7FMrM5KCKkWDEkFu6JDg8f69duExKzMxQWsxmgwigwNXdrmp7bXhiLfMk",
  "key6": "5ET8EwX5GD3cRfBeyQJ7otANaKQJVPwKLwUtLxRshWZUSV6TzZ5btLwj5SdDsvTtoo5Nt6N2vZ9FCM8AZvNjvNX7",
  "key7": "4r6qYu79fBP6GgC1cBgeNC2fMKTrBH3cjMwt2SPFfKKfSuTedMU1fpDzcR48VYby57wHox4qj4cevnRDFAdKMmku",
  "key8": "2KGtsUkTBt4GwjqcMSn6TuTCb7VLUe5nCSyTghxwCXnJBKEC7yufX5YZsqAF9vzY5uTfpwtTJC5T7PF9oFzYyCdp",
  "key9": "48tUkfgkr11phzfCKFZgZwBgHS8CMi4zn2c2TUYZ6BEx25anPSTFho26ZHWukZgVdsto1EjoCHQmkoZBHt13cwgQ",
  "key10": "TD22Q4ahDLfqLDfwFomSj2Rfh9NTGErLYkNA4pPeXq4cDbosQ356oNYP2aDtyKmW5oxBnHSwpe8Wxg7knWjmdY1",
  "key11": "5RZZUb1S9J8KaF4gR2wjzNJV8Ee6KNmfu82p1ch6gZNaCgQgpymg9wHoQJ5wKV9sXUzth2iVAm5H61fKysE2cipu",
  "key12": "YexEDwc78cdSSP4GaXUVUhc2MqNcFuPQDgA5z1o4QyYCi2Jf3Vp25iQJigVJq7QuGpjM1KKB2haD3yt5CiQU1pQ",
  "key13": "2d2xs2C74Nj5Q77RuGxUccnkz94TXskHwMGt4kmtQeRZyrpHQDYQLUz96Rad3uTwcT35kXp33m6krhhfanogggbZ",
  "key14": "3vZBMrkyHYcLnJQQAyGYi4XLcHKdjtBa3jS87B1xStsutJ1mSVYMKrSfCopGemQWh4UhUbt1hq3LXnoSjz592UMF",
  "key15": "4i5SMKGmFpjg7WfEZFWouPMG4n2dSC7kfLJq382czaLUud7uucrttwCYUrq7A5iSyiVuxkif1owStfuPMYMEh7ow",
  "key16": "3moej78qhJNk8AWmK2UYZpQp8hqMpvkseDXWs3vWRhKZUTU4QmDxLtLaRavZpmqUunN49Babr36SxMZJwBXf3DiJ",
  "key17": "4YQagtTyg36LwZ8Knv2rndcD1JSv9Wvf7TAMzmGcLqYyWz8qVp83md7LNCavb9cne4U4kEZEnBGVZbM2yYkrnHof",
  "key18": "5473UH9v4fZ52UmGjc8ucag21aFdZ66rnCrxJgijncjB1bM8wPzC87EbanSwKfLe7EjXqGP4gLqShWTgJvPDg7cJ",
  "key19": "Xx5jDuiVq2dFcVRZ1PDBArg7zZpRfj9h2dgbLDFbR8nMyENiPvS68LheEiHdBpzZ1okheabwPUFTbMwj5H1JyAd",
  "key20": "25B5gHNnvUWGvcyCjtCoJ8ogiLKJvLHoMPKxiPyN6UgvfsdmDDBDbJQXvKcBz26Dz6dyjLD7DK2GmvjZ1VXhMUgw",
  "key21": "4oHBbMF1CZ2Bmw1sNUPnwyqEwdLKoLon4eJEwFTC8fbFpTRfggWHPYmgfvEQha2D9wRywuHvfWz2TCjQgyrq8QXM",
  "key22": "4E3j4LkEHYptmyYpFrqUdGVxwa1XFaDU6JDaCavvPRYvVXjLRbgMtuhEbVKrNz8dGTpCJppayy72NUNJKNy2HsLg",
  "key23": "2Xi6fGwpmmEqWfAog2Bsyg7ZmXMXb3KTKUcuwgNMcnGhU5MXEagajtdNtCnEpGn1oxTt4q14QE7cmXmXruV89Swu",
  "key24": "3QR5vUgr3aMxmdnoU1eZj2mewFpapue48eaCTF21UvbyPou6GxJ4tNw64giafCPo1v6P8m6ERAfDzXVaciF7WTY6",
  "key25": "2Kc9QuyrYZTy8HJMaaGWdnU5kQEtY6QZAZQAi1rcc9z4umsTCJwpvdtddLzfv8SZN7kpcwubM2p7D6FHV7BQToD5",
  "key26": "3vUscY2odYjtn6hN96gHAbdYE9G11nkj2abRZ5zNnCQjjSNCy8ntgL6vzJUNXHfABivC4bjAC6d3MmN4VfLZ6mD",
  "key27": "2c7goECefvDnRfneTPoTi7PfEypM6mWjWVXKTW98TvuNTgKfkEXT3gFAuSw4vTXn8Qetk3FApGtqE8yP8hvRaZAi"
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
