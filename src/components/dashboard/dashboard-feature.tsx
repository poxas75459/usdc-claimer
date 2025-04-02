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
    "37Ex7LxUJqAUFrTNuPEnNu38k66HcrW2f2C7VHBpCkqbxXBenkYbNDQ4HiSaiBusoQCtLGuYfb8X4g3WDrjVWuJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fNtqDZdrajTQjKBGg2oxvtqDvxDKUNkuTXxh2TT3yyPLAHziPJ4LueJFC4KgzmKkc9h4jAVk2hVkyoqXptrouxb",
  "key1": "SuHZRQJohsTPRejkzKUUVkybGFwaxmLYz8SWctFZqF49aiT9qbmGMEq2nC3YZ3tNTY1zsvbpZ9vzMkVcaP51xqs",
  "key2": "2qAHFDj22Gzjwa6xSyNWNagWkruEtQ4FaVwBqxmjiUgNw6w9aiCF9sKXic9kUakWWGie6ByFyMCVvV34kowAfwhE",
  "key3": "5zH5J8Sqv6dm1nDFvUYRBtSyn3S2QN31RZDowPFpJakMsS2YTMFkXbRyqgZ6F8A1Mer5PR2zSxiUdDun3VJHdTJL",
  "key4": "57xdSiRYxS6rToUn5JYrUB1Km4TipCr9NYMbjSAPuTogPBwGxPTRNQ7WWsdoMk7YSKZwiH9tud75f4cKpA62emit",
  "key5": "YQqMshjpvUXnqQgKsFawFukYbFiQxuL1uJSjgSN5i1azDyNYoHckbYLPKqJPLf3iwCgpCe7SVJ6icVF3KqTCwem",
  "key6": "5tsnsLqWfBtSnsE3uKk6umu54jvxjZjNkRtrpu1Ms51j74BgHdkAbbbDNN54DJV2uwKfHaiqtujc8UfB5C9Q1Gcf",
  "key7": "3yzmTKMj4R8UqthnQPyZJ52LXhZARNosgbiAdyzhMHve4vmhcVDgN3Y3KadX4NDgAEeFrrUMKk1pnwqcw77skv1s",
  "key8": "3RDcZaoVDJJ6ArWMyDYg7DUFjeGH5nQLB2sAxbPgmGxsYFYWssetHwkx6UzKkiyjDhqdR3fQyvPF6fKZQTRrypxc",
  "key9": "t1NpiK5DXvg1JjDzwUCo9KT7Uh3GunhwCovqq9oSJM4TrG383R8xeq18Do7eujA8j8y5mjv2iDBWBPV4NtmVS94",
  "key10": "3TBzGyRy4pAMMLDaQbdTSUrjVq9sd4A9uvrddfjngX9ZGU6QkS8KirYajcti4UP3RPwabWHgB479TkK1aFeg7Vh5",
  "key11": "2JxsamREABV3WnwX8raoAwJ4zE9Hp9f28x5oBfuuenbozQ4BPPjmuhs7GNirBs4M9JgecUWyBf7gtSQJccJxt811",
  "key12": "38nMRLazo9DWCocpTSKJdNHyxCmjEbfqYmC31VyTPzXciwwSWrUVhH97P7yi8sRFMUbCrKLc2amKvkgqp38xygw8",
  "key13": "2p1MC3crKYYKT9AXTWMYvjLGtEMQWxPrMoB866oQ1giVXB3xcEoh3Hrt53jWyUr5TJigGAvW5eEBwCcN4CtEKZTX",
  "key14": "5TfbqxHRREAEgcEgpMbWonG9kRhYYAmdb8ZQ6pi5TgohHmLBFKF94JB9VRDY6ekMSARSeYRqmeifhHigJ8KGcpXq",
  "key15": "3LxoEw28vQamLx1W8ApDLz5EpU6EZNeAJWzAmqH6wF9LeEVrG6sotfyCQiELC9F7GHYQL1NMna2WKaZoPs6bNPav",
  "key16": "26gb1hzwmJV3N4yXR7fv9U6JnxB1TGW57xWKnQHbHpkFDwZy5PDGKSogwBVQwjLUF7h6SVaRHgPCSXaX8eT9iYvU",
  "key17": "5BNbAwxiRHmQahxCqJ8kz48vYg4TThzm7LFgLP7wKNur6VR6wuvYtdTV49emZYfAHiGB6usYACYiDbgNttYKijHb",
  "key18": "5VK88CpCG4X6thknVWWaj7LtJ1m6SHvg32wzJvMzYvykKU3bpKbFLMopn2Gic9Z825VbPqKDP4eZVRRDfVut2moh",
  "key19": "5c7WTWyQC3Rfs5zfrDp6NUXX31K3EG6woiGfigXw3iGCKMZBtaoDcd3i7WL1b69fiRme9WBVnYdpqr1956U5Ynx2",
  "key20": "q49MKRe68WYpSsXveoezjr4azYRPnZ8eeRZz3rrjYa3KXZ8WvCXVW4452vDS1F7St3mAoAkV4sCuKYRHQ2pDGhN",
  "key21": "5toV1ijcXdamLdF3sPbUod9qeUcf2qoZTSGw2iKXqUbRGdxYC9nBkwAFVPKbStx94MxsGa4zxpQP4aXHC9o8QoeF",
  "key22": "SapeFV7puMPYcgicjFkkbUMmEDaumkj26v1xcYUYR2r5ktapt8V9AicDy338s2BgkFc8qtz11KdnB4AJ1fbUpTH",
  "key23": "2USayqKnDwN9bcxwwdrSUvaE1vMKaB1iGeZo7WuNgKiXx2a4hy8qGrdDtLfqayqmZQmZWn66WxA26s8ZrxEdKaR4",
  "key24": "61frHBTxLn3wqFE2oso3roe7Ut7ffucgriBKfJSwrh2fc95segvVZtz593BesKYLTdkX2RMZru31DAVxAMbr1h4f",
  "key25": "3WiH28jEAUTmVK5EoScBY2qSvS5FF8uB4kX8kiyrqe42dtraznHV5ybnWUoWyHRKTzrJiuLRCbQQL4KKygU1xSHd",
  "key26": "25kFarx7gZWeitophzVtdpcgYWD64xjqHvNp5n6Cp1fE4YYq6bFz8cG5wkET7GJCyTw8R6pEUVSU7e1Pdq7Bk3DH"
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
