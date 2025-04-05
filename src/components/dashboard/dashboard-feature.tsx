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
    "5avSqEja3KV7mTCjKcyjtG4CADx6YgnKjDPW44KTB7PjgEug35MMaBX2wj4atf4qCgMTQvZAtM4b4j9fu9oN5kj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUQecS4uKRb6BQDqVkdvFWNng3nwYv9kSsLAXcFQ6naJiB9XGjRXMc7FDyjFxdX5bmTVLJdY5VYL9fUAZdcXJDi",
  "key1": "YWkxGx5uzx5Q92zmr9iFCxPB8N74JXsYj3kzHcBNCaKeT5tXkbzMhSQsQUVFMLV1H5vUnwT6GAHNU9QcPhQEdzi",
  "key2": "QMeCGBYAEoTyrmbzXMRZ1SarLJrvG2gXixLDW3cM1iBN3ujM4pSVLrF2xwX7XcTV7Zehw4RHrGij7dD76B1f1ey",
  "key3": "3ZffTHE8aVk1um3ToAtMnpVy29bztErNioepUQwZPWMpLd3vSdGpoTmdJjUU2mzkJ6n9DADFUE3cKptV7NQkYTSV",
  "key4": "54M6GYjzsLyzFVFmLe2kAdgopqqhSfTgKBozeuVP3wGQcHQd3M2D31yJs6qhRp9FoJhNCdu84BhAPFVhGVeASkBd",
  "key5": "2hFB8uchz4c45o331yfrJf8iPWtVtHL6z5ReuHuSEWyaAVMQyPvJ4zCZHrzYN9ZEcSnRUKugrzuRttvT6cuK9Pr5",
  "key6": "sRXNxvgaXa9QCVuK9M46EfFpPFLX3WvgVrPNyCtGQEvEAGakJFaHeDGTn1VpQjZDz6cWwirtBx4CzFnBgGNs8uY",
  "key7": "62G4xMvftGSt5Gnr26bjAgioruiYiu53pwhzt5hbFgCknMmcyteWPrRHvFSo7AuBsf5nmGpbCFCk8Je7wdznfrwJ",
  "key8": "3j1nbQRQm6wuguSjRecfAqVWW8YP59R4Bjp9uRpFeHryvcfyPZs4JrxfJiRjzFYPjUVMBPrp1hZk16pHaiYTdEAm",
  "key9": "645jwCAaPrHA46vZ65qzw2fn5ksVbZTgVPduCbee2vrwjYMjJEfzQmYYpFpKQivXBC7sUTSnZYPHUEvSyoHJUPRS",
  "key10": "4HYqUpm7VdXZzU9mMDhLALK48oeF1ZQH7YgTDrdWd6HgMU6UY6Z3d3nf8jXT9JtfNryiCr2VJ1S1ji5WyL5eo16e",
  "key11": "2vaUev8CXLXcbGuejbgFCRFU1TYeSCcWBgbZcrKvHzbXZrNTdRbT3sR3kvRDvdQ5EgUiFDMNUoweXSFumTjKnW29",
  "key12": "4aC2RL8NqDNnHe7khQo2pGZZYi5e58QHt1v6ESnnh9BaKAqyYKbuY72r5rYDEGs6Zzwcp8QWQy8cL8zLXtLuFpXM",
  "key13": "5317HoQiU3rzoJrG8sq1RsrEDDbBQFeHHurd61gEDK9BezFsivezECRvD5myHK92MdfKV64XbG78PXXKMLAjM9Yp",
  "key14": "2DFW3g7XuCuCygFQmy32QecPhFM8sHdDujJ5izqBqewVMWjpFQmbGyyBB1D3dENukMLtWuYBCYECKTmM7bADARHS",
  "key15": "2wCbRX7Cg6uyqbYD6ndYhjfeYFC8zTSvpC56RMw1XVZoEmuyWfREs7jabtd72M4sWzBxMfVbYmD1fu1c14CRDM8N",
  "key16": "3TWsa7cr5PTPikt17W9gEJE18r112WHChY5YdzWFwkfmbKbihPHnKsokz24B2zKPvhtGuArmaQoUChDzDBQ3Q5m6",
  "key17": "2F9m79Vc1WwNqH85BrgZEfCvcqEx8FNv7Xxb9u7mbsyEqKfkKQ22t7PucUSjThxzF5QifEfuS9WaibEH3hZWvzZ7",
  "key18": "5SDhYAbu2gbo1QmugvbSsPMZQ193vQ3k8JMSsNwati991GVRNA31gHLUpiMkGEW8kzYecqeqBjNWWcuejez8UuCC",
  "key19": "VFGZ3ZoxLPYV54JaDarUKWRsRRkaokFVw8AvZHztfpm6MWZiaxTLFnp1QtcaygU7qyVu3SVDY1KASJUBvhCtrcw",
  "key20": "3FsY7LeXgH5QevUyb1aQijgBPPGp99N3yAXmoDX5bfwyGaorz572Pt7tvaBXnzg7UHtjvEdQ5jBnyHBU5fWs7bFo",
  "key21": "3Kp7wiVdKx77SLtvqGoEoBLxM9HEz5moLmENJXLSSmYXUZRjTmP4agAeL8XEGQd6ScN5qUfBWyzBk7yWGezB86Z4",
  "key22": "3hSKT7XVAgWe4Ybc1eJPmL2sWUFocqwcH5wgXZyE9XSjQnEJGhyz8atAfhZBZosdTmcQccLcscJCb71zRYsyP1jD",
  "key23": "2bK6XXzvS2zvYZxp5Bd1cMtc5XUdnh5HhhNBpSyKuKpStVCDrLAV4sY8andGozR1FVJ1158zSKpUvha1Pumi7Ki",
  "key24": "3uWYJbWngZpaZAGWLwz77VbYGfBHjamr16uwRKDSVFvP36rqZ4hp9UrhixHR61UfkJrSpVErX2MBH5idVYyVoP12",
  "key25": "5WS6vrAMw37npkKbiiAexf7hXwwyFo7biurxutfgE6vtGLrv8zuNn83NXVrexCmCeuC8M9vsu6NH8VuFHRVunZLd",
  "key26": "2cvp42V5v5HZ2DfzMV1rMZvRERqZfeL14S1jfmSqK8w2ErLvCYWoB2UV9TWXTCRp8QNTbPDbHFDvA3Yj9BtHD21e",
  "key27": "5GC5pCFouchha25X7NvhMV1M5TeKC79eTUWiKex4Vvt1yiPzNwdL9uwJDgkjA9FtZkthXoA929XNAxmNjKx5YkGL",
  "key28": "61ALkc4XXpzSYJJXBTiNS2xty5u9edirwJPLcHvoKii3sz6phe1ukjTU8ix3E9XNC3L2WDsgmqfzdrDYTvJZYAWL",
  "key29": "3SLJGT65QhUgQWZAwDpMkLzEVJJ4pzJ7C8EsSxzrJG2uEB4x3GZ5HRv4csUud66qoAJe1WzXuGvSq1QNYsbBE9Kb",
  "key30": "2EwjHeGw4Mqmg6mAcFqy26MMPkjBzBiT9cRaptZbNXJPwKfGybmpMNNCWSAKpRiqX9LimMWf2714fM4fxwhgFsT1",
  "key31": "havgJiu32gPFpJaijDh3WLHAA5qVDjVaZkdgQDbiHskaoM1uZ2qvXCv3ULBGeLZ7dMEUTJX3AiTTDWMT5ZUPE5c",
  "key32": "soJpDs9iHrnTziM1nVyiXU1RNc7mDuLuWUUkWyXWNqiyNM9unb47xr2mma4Q7Txri9QuEdiPcjmN6ijNN2871sY",
  "key33": "KYENKBzUoBjrHUWavyYYxwxfzndUMsJfFbwZYdS5qjWZjKWYTpUBBquW1aLfWFpht3mBRS5eBMDi6U9cT5UBePW",
  "key34": "FMDoopb6tuMxNFTLWLjPWgeuiFhKMGupznAyQXjNBCaNXNqLh1Stci2GDRYDKJZfUxNSWZ4kjzKMbwZqMqmY1eJ"
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
