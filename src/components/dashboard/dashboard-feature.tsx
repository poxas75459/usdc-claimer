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
    "EZXAChq571y7YvNbehedV1tK7Hf759CJavyoB7GvZfufUorZjzAKbzMfbzMfGLEYMjSyUMPk1773MyQ5WmZiT8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4LWQF5sUYT8czxqcKRepnpFUdDGyXsuwavXwspUwBBqrDDSdiQnAkocbsDHRKntRqt2hZj6c3vLKMALfmdmiDe",
  "key1": "feRfXTWsq9jSysyfsrh79nFB1eH3YWwCRF6broRNiw8KBXa44PejQsDTxeyhqhLyWj3hSjBTZCfbFKoRhJ4T4zy",
  "key2": "3SXEGuqFFBujRNBBbwT1B12KeuZdyee2BLf1wHefd1MXYnNb1FHaS2fvK1SryGE9cTrMmkToY5uCv4NTTomaRip9",
  "key3": "2FGUwKcvrBDCMvFvMRAzrUpEwaE5p2cqMw42KkhFZuDdUQqZZkmscJzyYPhgsefdYMSEneeBvFoFFUcHC4P35fnU",
  "key4": "3N9hznpDHU19ho8JD8vbcNSHgkCxQp9E1QbwqUk1jRaS6LJWFwAv9UQBxZ65oqFKrMVH4xbihwLKQkvziCSwoioL",
  "key5": "2zFvarWqJ25NNjNM5sHCY69XuXi7G11uMsVEg65BWf3ahCiTmSzPDd88JY2zw8jJxDqn1i8FecnY3GE5nwzkSYDL",
  "key6": "528Qq8uGSfFeTscDmJWrTgsTMwu8iBS74S8ask9VpaqcnLQdRkDJb49xAZygwG6uJx5ms7Ee92XcLb3L9U2gAkT",
  "key7": "YpNPCYLMDS4pDxeNR9qSXVv5xo3NsioQ6hpZCfh1J8gsg9Ffb7VnJH8zTm2HomVt8S14ZsdGjDdTrpkR3i4bEY5",
  "key8": "56no11VmK8Xwgzg1Hgq8BVaMfUpDnZiUeM5JmGEYg9tFR31SjqW1jtEuguFvpqD7tfsNG8hcJ9hcC4m89j9hoULV",
  "key9": "G1UTa2QrrgnsWUxL3FRJkbLtxVo4JKc3CCWaFCC8bPFYrPLJFqh8VNsMSFs4mXr7uG84ddLeKAMSJHKhAmMdC9s",
  "key10": "54gWhxs18qU48G2xPquQaSadAjdaDEEVY7zh1iBhuDjxbCZRg9Jj8tNyLuUSrY78cKUBXLXRiiL9gBNEmKT3ob5k",
  "key11": "5i8383BSQbG1b9FUdZTNNDWLdDs5hehpt1ewLKQgmCzFkKkToDToQnnyTUM5cUtdXqVGhtXUT3mexpV81YxLGMn4",
  "key12": "2zpLAFH213uZXBamvVJFz7Um8zbBaiP91CoD54GRHRY26kvpmJuWabQLVniUEnXeHRBn7HwBaK6fLnDzZCsYcbuT",
  "key13": "32RsdBgJ5iSdJQrDDkLvN9wG1GB1krLXW1tGMQLBdVAc6Y7Nvijro9KG1wVrnGpffD3G9MM1kP9htCAQt6dgUzoh",
  "key14": "3huXQEDAokuYrvxtFVJbUZXGKJXeARPq49keUaRoqx8MsWjn7Jraz5Ng9eK7bwPfD4nnt2gCDzEPrLLSYDZwEDjA",
  "key15": "62v4cBgt4n5J6tdgAvRqQcuUWnAt5uKaYM5cVueG6nVjSQ35gpYgt5pDUkyNq56ipZxSX8pKghmFquXU6uM5R3wG",
  "key16": "56xTh1po85MDFaHwTYvBTYbxE3fdU5nJoxjCb4RJrEfchB5ntmxZaktCWfdTbLNxRaZMKFnC56rAJ3hUSTCnnQ54",
  "key17": "3gzVdsR1LRBqKxQ61reDMxuYMDotj2kNPNf9CudFt12g6PcGJYBwpFTA7ZKvihTFPNMG6e6yFDS2mBuU9jktEXdJ",
  "key18": "4Gp6EaCG6bC84Yt71cMevfkXwfUMdqG5A21dPi9xmZLEb4mGzYxYG5pGBTgj3H2PwQCC7LjJcaMod1ZGTb3BSCPQ",
  "key19": "ks3Fnd2QAQRtBPXszWRTqeGbwETZJAzqNeutLxHjTVxuNq13aLhMRiXwLnoRmfdC2XWs5uWsBRy1E5whaHRzLBx",
  "key20": "5rvoYKHNZn8zQwM5RpF1FZND8mt2ATsSfGbRrHEvi3tRpdLh2BCozoZMDpyR3stQvXfxvLpCfysAgiNcPHBWce2c",
  "key21": "5mQrwmPH1FU2B8yo5RikMBecFfWmLcSr1P5mqrGJQtPtKw6qJX7UWVYnSeTFc9tsjxSDUaqmL54jJht5SfpvX8ei",
  "key22": "5oHXmqtAH1Cbtvx3Vuq1r5JfMJjM1AXHFa2srNvgnASMVCrSUecAhyDQNqgUxSdhz19D8CCAGxTb5gdft1av1UNG",
  "key23": "3MZzJpdzd5XDRRxrDvUWLcM3gZ7pHGUoxjVtAWLq4ApTh5Hy3wPs9dY7Q1u5HUbSAVJd6m2Wzwf3ksxbAxCvoqAv",
  "key24": "3hJfioAnnG7ZvSeHMSirpnydbXyvqbzWBG4dcUyMhKPU4DofWS4QyxbRY8wXKdA2mTCQmK45TQwvEYaJMyQYdVjJ",
  "key25": "3nBZs9ELreKpY4MaXcF5MiVP4BS7Ny9G5Gk3DAPYdYrEyHDdNFT21rZpcnfdkAAVgHBw5jXJfUJDTaHkK92QvduS",
  "key26": "4pSVz5sXNNUbjiFpikFbSuFBaKbaqhA7rDQ9Q4ks1WGpcdhsvAbeCVg8vadpo1hG49YTmgZiYTJ4TXD65Vx1b1dS",
  "key27": "4sLNpZtwwCdAUgyiThKvD2Ax7maiCTx4pcGjfBnpaoom5YDLm1VEX8NGqxhpKA2Hjuq4zRTxEPyVpum5vvN3BJp1",
  "key28": "5n6rcUbJ3VPVNA15QcRL8kubPCAy1m5QmvYxhHbYi53e3x87RBqVXBsNXYmKp6WySJiYX3iHk9Kp1URY1quSVAw8",
  "key29": "3UGGiyNejqBc2mwmugjMgV2CQDb1ka2sNj9zU1EPdDFFfSjG8jeHgTqwKimz1fUPgkQXS6iDCE4QqjjoNrZ926DC",
  "key30": "4dzzCjHQn2MYJTgA7BGqk5fiCSia2Pcs88k7ytF2dbsWVtoynyszy99XodwVX33onLMffxU3a33h4NQ6EuDQe1nX",
  "key31": "55wWN28T9SKEjyGzPB3EFTq3Vdcb4cHFZSRHFX4qz9doURG9rRaPnjPetTsXp1ThCqGYg6QotMqcqJwUJcgiLgx9",
  "key32": "4c2gXVKecfADqtV55KsYGSSQztgiPUPf1FVmDUpATVb6ft7xxKz4Kf4fsm9qunjNaLotnATdSiEesfag44WY5fR"
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
