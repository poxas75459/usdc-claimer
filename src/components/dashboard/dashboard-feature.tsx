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
    "2jFhTGjW3hRxT2UzwjWXECpwnXsgEqon3pNEScGx7xMCNEm48dmkVHoqfHbTtfb5bNQyBg2ohpBGQ9RMXRSFsZ1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2siZJgoLsSGDZ4vYdVvwZk4rzrWGJqcbGL7cajRsxwt3hV3iGNHuzxUDL2CmrMveA7f7rCrPSvtxQiLUZkTz5FN9",
  "key1": "2oRTuYmPLEgo8v3Q8c8HaiJQhBYhUvUzKqjuNsAT65kP5PNo4HZjUrKZn24fMX6WZfFHbUz31mcJdo5DcoaAvdJz",
  "key2": "3E66gA9i1RdLPYexyyeq3Hvn6XvVD8dtXEpcK6YByECim83cYr5afcvym1bLgrE8Cd7KGpDuSA2USF9VjjEe2DVB",
  "key3": "618i444BSJihrmP84SeK8mt3WcjeUEoZ63XCM5tp7DDdi8JjTjspZ4xb1Ek7y2YbjyPkRpU73u3PXxEtWNx6D4on",
  "key4": "6seN7NLJdHbrxXKdvCebqFdcyz89ddnqDev1MyxVVusiaERX4WsJ4DpYePw6BkWnxXAdyqHbvfUN3u3hKkqQrPt",
  "key5": "4ypgaakgu6YeZ8s1HLHVhNZUkznd7q4yt6xTJLYWcJRUGK8WPicyey1677Uoik9z2nqCxLYptdZTQ12Y6kq64cYh",
  "key6": "4r3PHC1JMgf8CYt56GFVjUddDBsukZtaX3ywwaESMdfCgroq4j8iZ78MaAJ4gfhfsou3uyiggExYNsKkK9osNnfv",
  "key7": "46TgQg3Bd8yoWMkEA5p9uCGTBhJ1QZ4XdQzuy8NKSzqYAp5hFhScEk8wCrTCYCTxXYXMMkmRQU2qULf2zjidDPEN",
  "key8": "3LtcXKVFa5Ljr8g8tTTw49L3aoEPPfwMk3RRvmkxtTxDdx1tuDp5dWQP3mLGwS6Aw8oDDhxJASM3vYvZxisE6jdH",
  "key9": "4VGau9VY7v8ZTcJsUhdghF6ioRh64FmWiSAAEzNhvRACwgNr7qe7fy3btT964587nQTsasah1ZcnDD3Yr3mZVJ4r",
  "key10": "2ULJJ9RkdTAyM2VKMFLd1HwYMSQvVS3ArSCQh49S7MNXTfMA4L9fXWDYLFe8jZ4iwfP1haCEmz8AiEKaGuR8tnJg",
  "key11": "2ha1pKU6RBoDrYgnfBJxJWbENjq3p4SYkieWsE2bSa7Tg8epXfZiGW3XM1tKoEvd97cW5bZVDx3fVqwRng2azRUy",
  "key12": "61MNKihRccsuQP9ZZQnyRpqfV7ikWHaD4knbAomeHVE2hPDmyitiiYqeJ6wzXoMLcMHv9vfw9cfZJvYZ85KukFYx",
  "key13": "HSjj6ARgarBgxCnsUBXdQwkJoS6qXT5c1WEXGXK3nFBZDLpWopHDxtAqvUNrBudE7z2mYMXskaRw2cQK9bcERK9",
  "key14": "5s5TfQAWPm8sWvkuamhbVibiDGm9wEQaThN2KZdkg9kxGpRk6i36qdBT8wNRSUtUD9XDMgyC3mAfnfAVvkhD2EpV",
  "key15": "2c5MbYnppFfKftnW2G4L3zCY11ssr6xdAiSst2ScYAeooZHKJupBogd1tsQiLrV3pMTcjRc9unTQUfkzGF4grkt6",
  "key16": "3SckotMdPgPTztWe14aumdzqSwDcm39FYYDeu7PgnMhYef8hxsyTv45JFYqpwcMEQ9n1gY5xwUgarJXWwmq9JPEJ",
  "key17": "53ApdEfWL2zd5CT9WfMpCn5To6nuuoyDjpp2hCF4YVpeyNv3oe9eygiLM4SjpEgukXd5n6tC7J4givmxKsWQRAdF",
  "key18": "2zQPkAPjN51k2DGB36N2dYkK4BKhCSyJGwLT4egEnz9bFCpBLuJ7zsbJsEwMCtvKoxBS8DqjxAr6KzKP4kcLikHu",
  "key19": "jWQNw8ZXf4CKppryniXANnonoHfYJmDxUVGdw1guab2geF8yTy2P6huN9MKFZoVWndLRBNMhiF9dctbCBMwyo4K",
  "key20": "3SkmhzhLvSEiaAgLX9ZRDRW5hd3dA345TKpFsSELJSdhXaciw2xyBX29gLnGc5cnoDfB1aJYDiczKA8xTeMvkFD8",
  "key21": "66wxsRv8TnCMutn6EuExr2j3pt69vhbKnNifWpsu59wS87V6BtySofThaWwctbCsVJZRFXrZT8sYd3u2FKs2TMgJ",
  "key22": "66SWRvHi4w19GL8auqjZDhMzDmtZPdEfXWS99Md9iMC6rRJkupPgEHhPjq11cVws53Afo5CThpnmuVtknCUUdMn4",
  "key23": "2TZmMRF9obzGmQ7ZA7HjmDY2kzzfsVvSpePR3SQs3AJm6tkTpcZc12nmo1XTL5apSgyT8DYHGFgQx2DsGpWEJigN",
  "key24": "f1tuWLSVHRtcP7sfM7vqSWze5GCqvQr47wvwXwow7M3vmbY2Q9PQWcy8C5ZGJUYYHiE3w8AK1X24WfNFzj7xpqV",
  "key25": "5Y5eEEhijTjcosD9F71j2NeoJCrLsunzZTtHBvzsNjuVXJSqacum9igzpwb3wEPVxfcwfswvsZGzfAN4eUGEvfso",
  "key26": "JqEAfTd8HiZVt8otYYL7sCxCyCZj1i25oQmKobHomepc4YwP11mp8oE4MXLXCPRHU59gGDotaH9Rjw5CnsyK1WP",
  "key27": "2omQWhP1Rv2RgkdtDqTUi9dY74AG4qXHARGWAq9T2EKZ7qGM2CtD99yZGEYurz9VtG3odUKht5ARBVzMK4jGWS9Q",
  "key28": "2tjxy2cET2v4FEf1uDNK6jHjrkRwdEVZST9VokwYR3R3ZGuqz4cwHp8A6yRzfr2yM19TJwVkruKKDw8WUmszHSw4",
  "key29": "tgT3ZvLgN7j7rBWXATpktgTo7Jq3hhfGE2PU7qFAaXm1EFrTHxf5fKCwJoQ29Z1uDK9sMXNSAqtDuhTswfdPau9",
  "key30": "4a9QpfyVGv7ncBQKNyKATzAHZphPnMXqQ9fqjknC5ETy7MgD5bA8hceXKMUwVg8Fcz1hkfWKjjx3JsPLUXB2EHra",
  "key31": "3Mk4cSvWgfTQuan8J6UtRyrFHJCgoTs8ye13PKKBNs99FqnN56rGS4CbsGvgWys5ToKhpQy8DL3CJHafcu316PwX"
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
