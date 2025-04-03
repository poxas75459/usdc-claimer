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
    "2iY8pWjtrfKGHGvbtrJhXaTuHCMfSRUh2cpD5aNSHCiH2GJKUYAxrpEsd2DDrGUve4DFfDXB548GTpUxEDQLTXgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApgcdBbijVf6tNWNNakL2zhcr9mGqZHdKVeMVc3wyvsKvAf3nySGPxcahZcaKe7Hz3bEdJTo6Be7xbb2aKL1DfA",
  "key1": "2Qy4Cd6xm4uLHJtywas46uMNXCdTJ3ghv9izeayXk32qKD7TaDcGMzVGKZT2iHTBuUMEzRCuGTT3Q77SjaQyZ4MB",
  "key2": "ZwMQvzHjjLUiM752J1QZDsTGEXjywDg8CbFTcvKaJ9AavosbeTRHhJsGvHTe26PbSXVCyRv59dR5iLUwJTvBhj1",
  "key3": "4EHirmNwUb5riZ83MxKZZRHhc4oQogAsu8EgMRRgifDJ6MQNM26fo2eMwHS5Tww2MfW8eH1syRpPFsfGo4Ci9GgP",
  "key4": "4BD8aDQMQyaurWzGPPBTjas83VKADqDWapjkDaAzmSKaWtthbhAnAMoGbxD186TDji43ePg1d61vNKs5uC5S4x3M",
  "key5": "UUigLXzRtzBD7iYHxY3zx1cXsNmDh5vVsL12U5Ke8BwHvsiYb6gvK6MXxZrBZYLKkzm12UU1mLHfAvP4RxGy2PM",
  "key6": "5ruNqirC5aKiFgyevfVKpVyN37NvoCPhK6a5WJBK9LQdKj6U4WLaFeg3t53UDXthBgcU9JMWMuuRAKpPDAJSUzq3",
  "key7": "4b3GnqBT7PGPovQv14HhTnho1wqQKimCruPB6XQQjkdj9uQryjXe5so728S6RDST1ztzdt5zSjQwwMi8CzjddnLD",
  "key8": "3cGRnLiVRB6pFJFGUeviz65c89xGAH6iVsKMvzwbqrFoo8jigfrwyBTAUXc5R6ipuBLv7vfb6PiVzaxFVqHkSJvK",
  "key9": "2d15HAE7HhgKuBMGEmMGS1yE2ZGYEFZirJzDm6CLoiFxYbyUgrTo2V2SWzptU3va1vZZVyWzvbYxoAXfbJjDfqeJ",
  "key10": "527jQcjB7SMeWDhp2UL2gAhxvb8cehvPiosxJAvSys5jX4pSoVz7L3EU3tyxuTcHjeNhnnTNGc6vEbSA3R1rmTea",
  "key11": "5NWR751UozqP2tC8DBhYgHdeVJNnjSyWYrQ7daqSKFA6juJPLZzjVkS2xquVbFjotW9gR4KqfxJSRCG9vC2Ufx2r",
  "key12": "Dme6GnQvAFfag4h5r4TgEkBdX6C75CVGRPaffy726CZ2UgmE8Ko6XqT1hW2tnHeVyYWvQcTC41YiywPmNEL26FC",
  "key13": "5ybSnLUgQE4yRmJHeUWzZAnu4Pb2CiBKJG7fMbdypVJzuwfZrrrVvjGxbFtYNyj9fvf7os987XJTwoMbH9b9FR5u",
  "key14": "5TWM1o99f13QHivgzFctMYc8xdWeRSBu1Zc4bysXq3i1LMEZBmTEwmdsrUrHXcL6KKXafA6fgiy7SeeEtSdrEPEd",
  "key15": "9LS71AxA7RnhC3TXshLzCwynTkxDZsAie7YeyK5fATX7ni5NbFRrDpd7v1gjQB3EhUEJgbYfvK2otGdS1bEMP2G",
  "key16": "34JYyxmk1gKY84fRxR26uEa3nNs5GCHP65TdhxQrxmSTYhqP65A6JFP11Hh9DgJ2z1goCxoemuHRbiAtGCtpf6K7",
  "key17": "GXp98TYxUtkRozwx8MN96QBVVDM2waXYmETZZVmFKJPiwXLmgaDaemfzLY5y6pvY34Jh9yhstGcJzCL5vX5e2kw",
  "key18": "5vmhmvsap4x7EmRed2D9e7PrkX8zWbkzzBUsotkbA5Cc8GacjmtGu9Y4PxDdJvEXSBT3ks1DWUudjAcJ9KX8Bae6",
  "key19": "4Jrnusf7LziyGQC69EoyxN5wpxs4vs8VWznS8bUfonhWwvSw5iM6eBNQU7kKEey1FCzzeG4Z4NCZkxUoKWWHp4Ri",
  "key20": "28WBQ7XLVZJNUTDyouAEzdCTFiAMGc8PV8PpTkNfBEJ7h2kaXRw8SUtWs6oGzvpQoNWEJNszDrjiBoQXQBHqh8rN",
  "key21": "wRTw4QJkKCyrjPSDHnLRVs6nxHK9YKANnvztTMoaU37bondKcs71ixHYDNNZeNmihwNGh97hoCieZSduedHwspZ",
  "key22": "26c1zJeGQMYSwpRtccRZRFcwYMwH6JXw9x88B7fbjxTpYcxHWxnrsrFj7QUba32qS91UmKLgErvTNYnxPHa47qy1",
  "key23": "X44jRBKwUfkSH4yTyraRzLHqzRNrCpy7pK1zVfms4jvWMstNAd64bkwH7Wqtbks5qXTtbDXbR2kaCndkqiGn2D7",
  "key24": "2vqiJwz5ikH52WExewmUyBC7KSPDcg9KTp73uVWw3zEyTvHq9G28vds7tTLpoiSeAwnBVBHQyodE8BJumGThMxf1",
  "key25": "3UVPPtaZzDkkzPUiqDAzwJze7KGmvgia4gtkbSKViYiKUCAHs6eMt4CBr3EtESUjd6vSRa6AzakKfBkrQaUSujuV",
  "key26": "2xycvaEYE2M58VQX1UiznP3Ng8rqhREYwPxSkrDaD4BrNqaxwB375E2cs5oUAcXi227pBXCwGEVrREov7W6GFJLA",
  "key27": "2cm7mba7fiKYH5VhJtufw1tMqrsve6mr38z16bH9ycGLJs5JAsBAdSUxPcU4YJZCtbvdLrrgH5qWBGvXrQkhaUzu",
  "key28": "5PhYshx1ezbhN5Au3fFKWvF1vewVbZYPS1jdrJ7mVJ94wKPvZVuzZRonxKA72DzpFkGR7wWqLSGgy6KfYh5Z9s2m",
  "key29": "3X5XisRfatCPzcNe42PM1dj1ghAPNPh25ZVBV8tT4rjRyacaYcsztu354pPSeX3jsZVyEsWQpP3qitSizqZW3mmu",
  "key30": "4UTE5xduM9YEhnB7r6puoGSydRJiGaenPjzAet8DLU38SeKcRkug3AryMk5cjUWmoMEByHREztduWde3B3cjaebG",
  "key31": "McwA4fuhCvwzFz6RPmMMg3Qee85B4Upgz1ELqqiS9YgL1q4B8Vg3sUjrBjircP2ZZQu3YH8s7D4NgT4FM7G2XhX",
  "key32": "5pUNUNBq4dswj54AQQqqSpbrhMVPprFoN7wQjvBXipcRTZsojjrfzVRXstcmUq2KzzznExdMedoPb3mHsDw4Lcyj",
  "key33": "5xJRM7ppRF56Mr7S46YLFAGc7XRkCCmppa71joaGJ9RrNPTmE5szebvdFbThwT6ZFkzJBWGcprXZyaS6PoUUQMRQ",
  "key34": "VAwrMHvtpQMnDDDtcsuFeLaXs6KnVrsxWiXNHWHxPRRE3EVAhA88ZqC9ryfVZsWJfCjYNdfnzXFN6wpcpQ4dLmJ"
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
