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
    "3no3L32to1MUTyJTaoboog6XsREwvNh7ZDB5h67A1K7fSKGGdLcjGN1Co6W5wGAKUo9EYnvtKwA4A9mBh1dk6JJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xix9RNiV92e9A7BPXBA73uePz9XcLaD7fMmr4uBtBYax3K2nQAivtfkxX4Eqrsn6CyPqTiiWRKoujoM6CBHAnam",
  "key1": "4pFwEt35QyrLk4xPYn5UgCbcJ9NRZCXqsXzJ42VJ5gPyRR7jhUCBZEX8T2Eme5A8cfgbQnZqQzZdenPh2DdsjaMB",
  "key2": "3JYwwDH6gjPQgnP5x5bmkMB7ZdtS7NqAsjjGj6XeifA1RqB4kWhBBVNBUUcJe9EzDiJxV9fKLkRDJtcw7cD7J2R6",
  "key3": "2FapyX66bfpUE8QzEQgpyeSVBqzVQkqrJhZGHb2t6nprhBq78S4hU3SzbEcNiu17NNFB56qjaPY3u5XfQhqsB8fe",
  "key4": "4RFxoADCBwZMQcbird6akH1GuEcYYpLMf1Pw8zvgXmwMfPYoajUjiahwR3y4ptsFCYXopcbWv1m8gUoJgpFPDRuf",
  "key5": "38oSRvuNtjzNGAsZHjfw2ZfJDoKeTeGzX2kiRmU5qAxprRckAmgt7uDoDR94i6bVYJCNXZiYMVaG8vHo1KPx5zWD",
  "key6": "miam6afNAGTH36T3kVPrahCuh5s7tn2mdnyScRzwvhJwtRACzr8qupvJSfpXzwsL4Po7WoAysy1siG5nSjyHwM7",
  "key7": "wgLwnmPARSHBoKgmdRsAFhDbtjPE5fhWqxRBYGiNsQ6jdkV5kGHcsZsS68CkY6s28e4rPMqGox13nPHVAEq2ETr",
  "key8": "645p5eUBnjFvpgB7yiTTk11gYH1QpXawTBZLcXfF2R7ktHU9z5W93MrorLhpabj19Wnm6RJEwz9SiCUx9fFabkeG",
  "key9": "4agHawnXD5noh13YzAAhtTMMNZ1L1QUUz3PL7dzuHz4wVjAxxR4NfTXZuvUZbiPyJ3kLh78iJxt6Brap2sGQDRBK",
  "key10": "JJQ53fEuutjBppoqqkXR3BkCuPoj464AVqjHu2GzwMV7Y8en8t2B7L2xqE6QnVH7TemQc4eZ4HbwzT1qBpcWJEq",
  "key11": "3NyvwLvTBbHHB9xAy6GTeU58QxGL9SRAdxhtjxz3QPf1fXcDuhKej4HDtWdzERcQqSfggFU3pi7uCVDD78tfBnS8",
  "key12": "tY3EC5md55LURu1LBuwdvzVQdekd4xSwSLr6ZdnFsjshHSVcmLUwBtNz6YvbAjP5qDbrQApfysvVNNgmFhJyEJE",
  "key13": "EgirWZRmXbET1XEge8WMCnuJ9qUV4Nt8xp4Qct1fjJp9pSgrEW1XiNA6yBnzEENcxv3fNp642QSTmgKxT5VYQEj",
  "key14": "1sBh3fM4qiLnTzZitJhjTJHmdEGeQWN23vtUC2A6wbUu6LG9NmcCoRhCyQEAxPrpVGZ4K9zuyutxa3ENJSTN2kK",
  "key15": "23ztVv9RetAM5Zdn3aTnnoDQwfxmag7rUFrxhmmTqaHqJKyzPi38XYGbEgfFkjFwFopSt8WVScew2EopbFz6FaNf",
  "key16": "4uhMDzZq8eaP97bD5cwVcgBvTsbsLskASyhTJ3bEKeKFB2TqiPFDEVcfwxrmcexbG5Wt1eSXPXxwZCefBtAPbS5h",
  "key17": "4m2VRrvxUY7St8W7bvsuzQgG1AXPpVg3Ps3HAJJ6tTPu1mPEPe1gA4eC6AmpJyAKKtkc6DghEbdNSsmV46gHvrFR",
  "key18": "AQpkLFjVTvvdNVZUnAVYr6mDqaK6yfULZQSJGiFGhgXmZjHmB6bHBptas5KDTfScv2nNToLXnmeHqfRSsthXBZx",
  "key19": "29WTiDKvGSDhcBqA2Gt8EDJoLkz7qFRNhRXojjmiqSBPK4ZQ1z1V1L1HiGwFhBDAn7RqauQqtVMmyaqhexvj2aNc",
  "key20": "7rUZiX6c8tWxnBg1SNchBgYMMfBXFRcrWtpyrctUjRNfy8vrNgTeHg9DWYGkSeo9A5YHSQqhwzGZAr9uXCRE4uj",
  "key21": "wPjvbSNC6oE2f6nmDQPcczDKJjuhdkYJjAYKrznQbCLbRzkyvGka6DUMPEt9uZYfe5wUBFyMyGNmCB6urKTN2E8",
  "key22": "DJStMEoK32NP6E4qAfsdXcEUNxCr4UfPs2zgmKHegnZM1uRn3YZqQRkswE1v1Z1fsLU7HLKErE5mzh3oPTw3eEW",
  "key23": "TXfVnU89te47F8nQYD8pq4CQ5AonuY8GvKb4gGpCiRYodNipUWMwZ781WW8zKerV2ozxeZrV6B7gFxcTxsvXd6S",
  "key24": "2gLeDUxCy69wvGY1ZjErQPpnQGHzKS6gRwL19yY1VdTtnucUdmfMkTWeMS1NxZoWimXfE88ABQYtY7nC56N4XgWK",
  "key25": "58SpCij5DcrhbwzSBbeCNW8MPdcFQ8gx2pHqoXax9Wyvu7v1amMSSnkCDoMHrGcsrRKJkdLPDHde6jH463JAfDtV",
  "key26": "5HT7c3FbcDfFGWVrPgHH2LNUwKMipt6qVT7pgZExSxRSyQWtEJCtLYzdfggf3RKqyvguZ2gfcC7uYFiQowgzftSP",
  "key27": "3c2t7SKj68jwCGCnJ6VivxgNux2Lz7NitteKvnJjcLxZPJVa8qBtBxLHmnUuEeBakrZ5Ybs9hCEojc3yH2n3prdp",
  "key28": "ULuWYV1PUrMRFX3wKWaZbqsZqfk61aqLyipAkR17htoofVY582sdr293HiyWDBjjFNg1ZRK8rpZYgssnguGMCzR"
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
