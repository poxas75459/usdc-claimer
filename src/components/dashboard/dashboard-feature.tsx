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
    "mr8v5mezFD2iTwhyiXZvNMj4GdnMRDhXie2sGNNQRY7HKQ1z4G8SYLbfsXtnpBSJNoeDFZ51iXjuqxkbdtcQ9mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1BRw3FLV3aJF4PJpGLAEGhLQvKB5UU5YaUxu6kRpkrnCiW2ahTsUEDPHJbnthCwQhJvc1epA2rkqsyLnAp2g7M",
  "key1": "58NndKNFuFAmWac1HBEpPNJv48V9gRwbePehxKWZ5w6BfHS9m1TG2fjxUuU9v8BrkDWPz9CvedYyMUppAG2G4Gc6",
  "key2": "uoyHwxH2sssjqA7f62Fq2DekyB9HyY5vkjcsTTriCVrXcbpH4afPdafRWKgubzV7VWygys4bTczeNsAfkMTQrWw",
  "key3": "wq71e1T9ZM1X6K6yX9roYZHBjhf7vjj17YauWfYuNGVhvWURdvwVhzNGPEbtz9uj4s7cL3z3vBy7NPVLMMQkzpk",
  "key4": "3PygNPiqvxBgj6YmssdNaM7UhY5jmk57fTewV5pzTrPYgTh6nUk6st576kKzbL7G8GnxdcMiq2xqtgqcqer95Xda",
  "key5": "5uQHGruxY9NtebvsShhtiW1qsTx6TPsSz2YHnGKzifoW54w8r7ZqWaerYho575gVbUJAsyyv6supLW9w1LSr68ok",
  "key6": "1caiJfihN7cia9yMfYZaMASWSDKdVQDxKqBtsid8YSTW9azjeQStDXGQ624VxqRFjoExmM9ssys9uhrpWpx7PBq",
  "key7": "5KEcVpRQSsXtJTs8fieAxGUpeDWirqUxsVnGNKy1zyrMMdnsXVZAxfbQTSGAWgLgwEEjuPvFW39LiR881wHXGtQS",
  "key8": "365R7pNtQAnbmK5jbPpsmwPxr1Ud3eChr9m9fxRSuusXn3Zb51K9pX9wpYh3ZWqUmo8CwuKgjUdXTT34Jy2nFzWX",
  "key9": "3bMSEHCay5nVtzwK8QEgSaummysmhv2Z7iECAvuh4Hj9CSHgSTF38qSpCubQ5rDLScFcUvc6eQPc78hKtPAvYPKz",
  "key10": "4tELHf2yxD5cSeUAwrpp7b1ciYrrvNfwi7bDU1qqNzsXVkvdbHoHU9V5gywjo5KKAodDqZAUZa2SFuA57HdEa22",
  "key11": "5ru9V2gifwcr7uG1bjrggL4Lfx57ZacUG5ARUMnb5nbJsgnrpUsHEZEvHp52E9vu9EobCCFqn5B1u5xSmNskdmih",
  "key12": "5cbFJVrrLGG5ByyBam8bYRnYbQcdBTng2ehJhWtb4CMfrbCLUBX36wTXyMAXUPaq6qw54W1W34mq9i3ehf1Vu1Pz",
  "key13": "5dy3pTpWFJkoNeCZ1KuTHcs6Ab9qbeFJS9MeViXVudsrMXqWieS5HvRNeXzELPjaC971yANhNCqieL2tfKNN11eB",
  "key14": "3JWZKaGEA37qGMpk2Goy62w3J8Rt5xA1a4WQNshETHq1oHmCnkrYanQwc5JbAXsZK9u1FAgbF8DLTXJZS5z1NrEi",
  "key15": "21BEzJWTMA7SZX2cago7YN6ts6gpNg6K3hQy811CxGV7khyTzYTKi17qAdEi7rUjyHBWS4KS7F1mypnYLdRcrXYa",
  "key16": "2ZcN6eioy63p4Cr8x13tqPkVNsA4u7J7ci7zuuCTtmbERxSodxUDiRf4p2gBovFmShD9D6VrZHEdqEX61dB1atcs",
  "key17": "4dLh33xReJ1S2dhop6EUC5AAGq21Sh3WVfWp3ys8DbsL1iAjDQ71nokXRuX7aEpTHMvr9zRXzFefJ5VdeDUMJ6Ex",
  "key18": "3zas8QZUuMi7Y1yrZBgBKcD6PRRNr16YnRgdCybkmWAW6eFm8xsm5MJy8BhutpSUqG7v6yV9uLizY18dPir9j6Vb",
  "key19": "5WbUJwWbXGaiR6bYgy9SA4LsosMoPiDgWtH619xMDADP12xjvjSaJXAfvESbJ52gtKzddL1djmGFA3Jj5mxV8V7M",
  "key20": "mdXx6XqGFMoRTRojb3bkPBdHCok9DJXezGbnBRDVUwuXzMu8w2DeX9WHH5ReuSm1Tcvu2PLpHCaw5sdgesQmrwd",
  "key21": "3F55D7yjwczujyVPED2KUgKAD4S78iWuXoBwBDBPhecJQ79VEBG5PwCP5U3HQZumdZcrqnBZ4ZafbpW8n9DNZHNh",
  "key22": "yH6vj2sEaub6WJLsw76wfoLLqrwbiQqCoCnfdtJmbMRYQNgq8cgXzJESSfDjNBSXadpE4u1fUgC6YetpcME6iyN",
  "key23": "3gYoJCCo58F4SyD6f7RSeSV9PFKKdE8WxwFZhp8bb3vBd27g5sW4heTa36sFtZeCRYnog5VdrvDBgM3fA7bjWkSh",
  "key24": "2TjzrD75MrdK2iLPaywqiJAbw9t5SZwXPybMzT4JTLZVF5frtA82kNkoWYN8ejmbGWUBVVKLMQx9tHgYXahU82mg",
  "key25": "4J7GVs8HQAY6dL6GQ6PbXDEQZAoCGwEywaU9ibQ9yZ1GABfaxZNGDWcvjtS1yM3Vq9bJkMeVytta93ETPhXJ5Tu5",
  "key26": "5dLxHX6XnpogN8HQqGmRHh41t88EGz8wWNCBpXFWKSge3T9hKwr1WeWrBDuDqRpKuDNa6eENbqwsASYwmQ372YkG",
  "key27": "4EobhUWkHtj1Y3BE2Yz5dGa7ShAmrUszcW4oGPvH34HJSzF3BUiiUhq18wWu7f6wxg7zwq5Dcn7Fv66zisgiTo6S",
  "key28": "62LjeFqHJwpxU9HrhyzVCSJhhqHdohyTqnAAx4W41tZd5SQJG7bU2i7EKCibhhDDZo56C2zXY9sRzUS1SMVojg15"
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
