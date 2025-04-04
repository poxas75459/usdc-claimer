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
    "bRBD91MfAScFgzKTwh4ednfMnUaoqJ1GwMwjSqr3j2xUgWgDYsxWXQ5QKCQPmstZXzKJwKPgY3exyRejkJMAzX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxNPtT1Yft3w3xfwpZS1pSckx47yPFSeto3HV8aVrDQi9XSbVN2sVsu3Nu49o5h3KJg3BtQsouacVskkEJymFrq",
  "key1": "4dHLs3Ggm5pVvQuy8YsfqMp6zd5SdyKG27hYdtbSbrkoauCwyrUruUmX1Up8F8pxkYfAY2KWFoBAh5YTCuxw6s3k",
  "key2": "S7c1yeeGLn91UiJQ7Qrj2Au3MS9mwWmNbELSENQzPSW6dnqUuvyGWrcyS9V5fcHm2MTFNvfjctGMqb3J6mPfStc",
  "key3": "gwH5bxJYD1v8bKLmTYzescGEDVd3Ue6n8dKwKivqEYE7YFLcpwMgPaTQPYn6TLUNWoYTN52BtDSVHkirtnGvu8N",
  "key4": "57K19JWFT1eSLY3D5JfTdFXjQF1voF89xn8GWobv7nEdfqeoiUMnhAkSCe4UzQs4D7Yo3x1YCNnAUFwTLCmh1Kcq",
  "key5": "5mEXG3QNskxKxm1USyQzMGP7bGAnoPFpMxCVTCYXBRvgdU8oYTK31WPsh8BJUoPdzvWpMHsHVBxLWnZwDjyYgt2G",
  "key6": "fBKGfFsFFSRH7JREJa5zHcLmjuxKs3GawPv7vuvSCcrysWBUidJB7kjrMoLDoez72MDUQeGK7zJVRFW9mz6nRzs",
  "key7": "5R8Af9S6og2Hcbf8wDMQbsTT1nxoCuH6USfHyVMS2Ze66EM3JwZqXHmpJLPC8mvBG9ZEADFcWob4pKMqM3gDAAtD",
  "key8": "36JHbxRSwXZaieHakMiER5b6teUtZ8wGa4zzCVYvgNT5U4Rkoc9HujUDi4F5bJAiwgvShdwJCCP9Ho1bHM6Zw2um",
  "key9": "4kBGLzU5UaqMRzQpcrEhSu6Linfur43tksBTUK5Q3CV1dmFSkuqR71jvUkU6F9K6vpoiRCcKsqTxYDPxGhS78UWw",
  "key10": "5HhEzPwomsRTEdvL9WCqeB1dZHd1XKQhrDvNwcFfiRfCDuZoVpPc4uBi6DWxVJ9eZd7Y9FAbW6zd2LmPLE5tcnY",
  "key11": "JXvqfRam3GRYdAatQHVmyTKzUumdXvutRETbRdm5wopxSfHYSqT7fDvtPbNbqUk3NAZ47Rbs6mjw8RJNimviazH",
  "key12": "5mjx9aXhfcUm1gqv2LfS8ezyq9231Re1HodCcGMoggHLys1fZX9fHnZE7kjQF3Mwr3our6a4yfisdFfxxgZEsaL",
  "key13": "51BbG9qwzSceWaYHvpkHz7gtH9pwjage7jbXMtrZAvgZP2pK3kruRQzZ37UFKxyyULJ12oUhxVBfA9oLSeU3Vg3J",
  "key14": "4U1wCMCGKW3sWdG9oV8efHJtsZnQWNxD6yDsAHt8L3LqJD7pPKkoEyf12EYURCqCXDHNhtTECvqS23xWZ78w8zVU",
  "key15": "2ZWxqPNGKW1JS4sJXS87Ho5jSouTQ6QqeM54ofSZug4qdGo4eVf98LDzKQWKiePf9FYDTpMKdkvCadVRqu4M7LUG",
  "key16": "47Jcv8JFi5oRG6EKMYC6ogr74Gai3cBhE5Y1kyhrYQGKytUxSNFeZxqdTaXXWRZ8kRg6SPYDSevSZsNuqjM2zo2j",
  "key17": "B6UsCyTBrboxcGzyMyVSrhs1fEnqZKjNbHvADrRiBSHAkVm68qUGPZYM8ie8WFcjaZCEHM21yvcCCoYXLevv4io",
  "key18": "hFUomBnnygu8N7Af1sB26Xy3PGxEompRzBmoZ8XT5sNLtsLofeCqJoKyNHgNprdxy6atrHghfr7nnea7YMWNq4S",
  "key19": "2DtBhXahSk3tarxCdpnYRV22gPuwQpC8mTtG8UJ4d5NU3NPJWNroEdxNqNr386txgBdxjtMjEgZA9nEc6WUWPas1",
  "key20": "w7Fj17ZDir9YuDsnBa8cbHkVEN9yoQcXcawndE1BbKAvxRf5wT9eiC7adNvFNsUEc5fWV2cmJsfAwHtANhce5Wy",
  "key21": "5G8CaenUUvADmVogh4Ch7SAaPmZHmcb18CkfwxfQBNT2aSFU4ZNBLxhD7Zy5sGTnqrRxd4WYNquXSpbUEPfCKNy1",
  "key22": "4FXMDwynAUitNXZ6skhmqdqwXA5WRe7HKQAo4tWsGt5QErDjF1MkBNKTBrJPddw13RSB47wkc6vDZtbjYpGYG7SR",
  "key23": "3JD8jNs9bzTDqfNSPGhMGVfB34ykk2Ep6ZXtvLedP6V299K3dBP2s5YFtfBdayk7NfX6Qg459VSYameezuQN6giP",
  "key24": "3yWcda8QmNy2WEXgyTgv8p13TuPs8Y6jL1pX88irUxWR5zvFfebubZUa1bxeVJNZnJuCWwDM2YtWJ6jKanVWKdbm",
  "key25": "MeHVRJ5zo1k9K9AHPipxmJBogmX3kncjJmHxYKaVr7C5jFgWku8uva4jTeYcZSPZC5kJfqCs5YvAh1mLaZG1xwJ",
  "key26": "5wiVufa44DaU9rv3sBMGF1ThrVr7cNn6zKiKfHQaUXu7jTiKS18WGtzBrM4rWJDmPS28wNNjCRkkw13c3LHrJhQc",
  "key27": "2EAx99BwP3E8BcJL1qx9wgR9WN5XFJ2H4s1CAiWtCaVNytKLpZP34NAnZX6MzFtwX2cm31oq5Mba7k8QYh2KKskf",
  "key28": "5DV3VJurAKMyJddEZQHogUpqvpfddfXKeTK1QYaxfTUr1tRXzfdYrttGxTzz98MmW4SkRzoPZkMNdR1VxPA4ZNCp",
  "key29": "5qmPpGanDLJGeVDKV6aE9k13nLNKBCqjW8VrYL6URYtwERTRSzGPieTPTB729awekrebJW9KMPvb8mEdWn9oe3fW",
  "key30": "5rWEypx5eFotpas9hwNFXMNhSDWsZzAXHVVPXFZqfsbb6ZtUgWS1D9FZcff4XShzPXZajUHBN1e2TEc8Mq3TdHVF",
  "key31": "9wUsEW3QgfchuhihMnmh1zM5vMUdYfKjoiMGAzjgfTwgZH8U8khZGA6bduV7yyv7feWjYir8H9unywXgNNKVmgD",
  "key32": "5uC17nW3XZhAp5egFdXPqpL923g74Nvb5cFEXvx2UBWm1hvgwPAyVwen8i1R7HXXt8KW7ZrMd7dHFuehuACSJpYW",
  "key33": "3EW1hpUWwXQzsnmFRSqLTEUiSayBNg8NdkPf5mEmP8eju21rywjHPL3pZ9PthkauSEHeuUspHzWhvCN6gERf4yPL",
  "key34": "r1qbBwG3JZxh7BXrBRxxiaiT2gtwgkQbkBSfRKyWpXZdy4ztRS9f5PHKWpGQSGBNoGfaxjQjBqMaRjoJP4mQnhT",
  "key35": "5u9W2ZuLVmMKnythNBvmWbYGs6mVTjGEFiSyiscEgCLG76B1sw3HxYGucaSxRVJso2due1cbFzdqq5MBMzz12esg",
  "key36": "51SetCSY5AhEkvDLrHNSWo8iXE7t31DE5ZiBEJmzNADa9hitQnbjMFrkwYd12w2JmqoXpRNkpgK3cKhsr1vfVndk",
  "key37": "5ojNik9H6pUVGyUf53XF61vRc5YpkZa1NzV1jyFTG3VP9RQvC1c11sSuobzjfXDtMtJub9dQjgER3t2HR4kimPyJ",
  "key38": "5C3hV1trB19QnGDSa45cUCyrjAZRmxyJnHPWFfbRN1sMw1pdiEVJFjx9p8CeJX2CDbN2y2nVRYHkycaRwAdkRfVT",
  "key39": "5rb6THvYh7P6m5VdpUV6ApUfb5qnKnHV4FmLxRspF5cXJd8abdfnd9huUJnwPgi1jFcpQkFs5HVfTaFd4p5MpoBm",
  "key40": "3CtPHKRiCwnPtaRgHJcVLHW1BbF1VpRMh6WezQ37E7cPuHW21tPYjUSiA5vg6p2aPYhcP3g23LnYNv8dWpBV8t3v",
  "key41": "Hb84xzgUQBXDcCe4bwtfh1DbLpq9xnB1BR9fT8CWLKLFnSSg93kVxSzbXWULmhujwLSEM3WcyqoK4m6RkyVb7U1",
  "key42": "24V68iRidMHgA2sSWho18u9pvbFRiU9xESqfPUXpXQe2vh5tYWKwuiLh52DuyJjub183cFyyVKqELmY6XYcXVLRc"
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
