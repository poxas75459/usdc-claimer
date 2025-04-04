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
    "3WVfmyCB9GUG1oAeHCFqVv14HAiNXpmhwVCkwzJYyPpJeqBtPiWtdSottBZAgzfQJrY476uRwJZxeACRgfEURTFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26uZaSkjPcJHH81ZpoSZTx75m1uFcndw2tyeAxTqj1MiybQuoZbgKzkWqBSWQRbyLgToj8XrPVBuSvcqJwx7VJjb",
  "key1": "4DCwBqAFpkgZc6C9zEf3ZFa4bQ2zeNHFNEZSUvt3uLVLwo9daaNS19P2y71N7PMVTQoiaQmsGCR4boohYZ4TN3bZ",
  "key2": "2xuumhdhWLNrrtPVhSjRonHZoEJbQS8ADBTqZUSnFqMjUr4qo3v6LiuALHjtu4Cpm2PGEX5vX2S42BbiW4vLoi7b",
  "key3": "26tPGePuhY6mVXmF9nF3g4NBAuqtLx68cuRzJTBEm2caJFMyT28WMvhuyXonrsZ57Hq1scsnbjEn7J1KjCcXtMDG",
  "key4": "2DGf8BCGPaJHPT3t2pzYZsPh1149C318b5mnwDAjZC8dEZxBU5zFW7vRBEk3M1rotpbZz3nxML4EfcD8g7fN4spG",
  "key5": "xvuiBu1R2yM2KRjkqofsMhRDqFyvDAv4CQDcTrxcLyTKmkCxCvsLChQsziHNm23MM4tS4Ws5arPEp26R2sYX58x",
  "key6": "4BujhkNsRDRpynprwmXQL9LortPkiDekJ2F69AQhzTcYp89uycHVSNcv4rLTFQmqEyhjsEsNskbaGZdcSp2cvHFT",
  "key7": "2ZaEs7sdjaTjtsjYLuDJVidtUwSgckGrMVQ4yf6kkTZ3GgVW5Rt1pFetTKT18LoerziV2Wz3hjiCqxoopHWUvqrG",
  "key8": "4yksvLvmWXY3s9MpuyZP4YLutFhG9Sz6kGLZ73kiq9hK6u2fgapVDe7miEftyE2xBVkx9Y4zUCTZVh9tUBtmmysB",
  "key9": "4wZhg5bHUfETbNvdCWV9Jy4KiFDRk8rp4EBg3D5eYFas39CBUcQt7VnZ6hLBn4yRvtWkrhmU2LQaukMDHHgAVBkB",
  "key10": "3Ac3vA4XJaozFae1idmcocgmwxePFPxyE8F9cS1Tv3MJevzdEHw3FzBSediuZhYCrnGpuftzfGUdsxNt6b26betP",
  "key11": "2MzGDcaUgE55NMym7iryTcdAmbZC7YDgthwLzWGxL6EfFLocgQj3vgeb8nfQfhk6AnpuzkKD9b6JgPAQQmDxbXdc",
  "key12": "2yiWjc91XbKWKEdaPgYz5DmhMaxZage3Yxpd7XQgVJcVsc5qE9RKznbFokYiUSB6sRTpF15sZAW7WhHmdZeL2M2D",
  "key13": "2rBAG1uM4UBSebt9Q6qejcJ1HNURixWUeBLXTbMQrjAhudiZSQ31WCtYn5WZLYPuedpZNBzwDdaswj2bC3tNcMKz",
  "key14": "5NCsd7eydTuyBbNzw6rHVqSU7f6MUh5rEhnQtpAskFRFWvaMd2eXW38HdiSKqXuh7Lfr5GfHHAGc24qdTgGFApzZ",
  "key15": "2LyqhrvViM9625GAktJ6EHvykR4vasRTs8xGiquko61RvgF3fBUVFXsFBS4tZ4egV3HvmmtxCekxD7dEv6vrcVYi",
  "key16": "3UiwAsWvu7TkanhseUCQDDsFJ91oxPRZkxTcRGohgeeV8XHHUyEqrGdxRsW9Py3uRLMpPagAW1iUaDPadZwCpYMb",
  "key17": "3HS35rJ6vSnwKu8Xy7h8eiVhMhyFpTfkL6uUWDAu7jdY55SGpvvRsp85m4czJDFzDf2M7wC7dvnFiikVJd8njhpF",
  "key18": "b3vMS6b2NPpro4Q8S5ttqfWt72JVRxLTefXGcJsZpBAwDVWNa6ChYYKmC17VgeMFppZPcAejkdUNMWAAorGTckb",
  "key19": "64V69eTz52vjpTwe34hxEaBFv394vMboBiRpAQXtQGT8PWbvghRZAq451MC22QJBWUCsBHuY8q9ihJDSc3cEc59E",
  "key20": "2sFdgHyMfP2ao1R45VxRN3PSvehCHg5akFBac95YJcNrmwNj9YeeVKM13c41Su2iHnbJ3XkdpmG3FDdWeTcc9NQq",
  "key21": "5LZtECHhHfDijefPJgmrKTK1fHBjx4qwWUPh863W249z7G6Mwe4bTxAdbZDgU1zh2o1dWLKpb4vZgDssL3A4JJUr",
  "key22": "1ZVkakn6xCDEYUHSgHnB8hRubebN9DEpPZz8Dx69WWiUCxhXMjEKYwu9DdP6kU5B59fu9gdyENuPa1qfjcnVrhv",
  "key23": "32WudNk5FZ1DKuz8vqMAG75JB64QX7JXdEXu6gqSrDVxpkddRgv5JN974pZ99Ja1wfE8LJCPj1PdkebCGm4Pg2z4",
  "key24": "3mgZAjrKX5fThyaVTBmS2rG7PSvuMx3CHTMe5yuJM7YHDq8W3Uqd48PJdTVhvUoYpX1qr9kXRzgTSLTCyX65o28i",
  "key25": "3LZ18meHqd2ocz9yY1akTiEWgWSsKQNPyzNapN3iFA2iv4T3TdHSsWRyiWGR2KvpDrwrkBfhWFk2ousAusWvqUv",
  "key26": "5ZtGBec2fg7QDSQ4fy7fMWanwBVpDtDBFhMyaKfKjFrHyGD5iqxWD36ggcg8L1BBGDZuCJCQe1JL2NCCTwDb48ak"
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
