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
    "295hPfPeS75iGJwtXz7KdzUhznoN4qjJeFxYFDGpfmiU3vbBxcnzpPLLXxkC5JeXsYPs4LmSswihDcuSfKsAPrnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3257GZkmoZQj3ecSRWdW2e6H944WvZ6hTjLq2vttxaYn57cwjiGgJEochAx9JsGuzu3DAGzUti295kEJi7t3KWU",
  "key1": "bB86i9m1uSETXRmXftdgVqKsRw3HgiuCpM6Vb8ajMCksSKLUFH8g1DM2uwFF854cbcWLZdzJMijEgUUWffot2p7",
  "key2": "5Tazjg6w4vWHpp2PXaebACCBChkH34AUb3nVw489hoT3W4zbFQkN3GbA12F3e6ZpsJE2e8edsjqQ1GErm1E4TEzc",
  "key3": "25kKJHGMDCC4qAvFoEvVwhpQRrGxFVoH4gcKtYoxjxx9acqsUipVJMm3rXgub4X36Y58L7b9amYMYYw7asVpAidn",
  "key4": "2EQM5RxwHZB3jWLhyWtYxzpvnj4FbYhT8LsBn3ChafjhdZnbEFRpBeZ6kE3Fpyj96CkBR9Hq2irpfuLHr4XXbUW7",
  "key5": "3QRCwEze9NTDaJhsi3nRUhzFuyjRjMeL4PPxfqfFhW2NnjmA8MaPyvfMDgLHakv3iDJhLBAMm5pRh1brKRTLuLpY",
  "key6": "56KrvjT9A1NhUM1ujdEf1KbnUvfZcXSJmoNHYQU4NGQtNUdrKeRaABcYEgGJjTFacTfAP6g4mTUB4BV4JVi12tKa",
  "key7": "vV1RaWWcaM4LiVVBJkjoTvMFB8hM5132SPd3Vz75P4wTyT3LDiSdVPtjVFMVFJAkN5W17WzhVDcuLoS1ijYHqb6",
  "key8": "5u7oYKE9wUe5ufcEv48NpYgksYKt8uMjwsRPeqAFzwmJzaYT2hKfNf8mk3vPZzeRvdW5XDgvopMduM7fzSzuskgc",
  "key9": "1iKmBt1srHXsngvBvGxxtZMn8RsUQKEB5yA85V53wAv7QkmDbUGUfFawiqez16QJhAX7bMNL51AZPqZ5a4LwyEL",
  "key10": "2Uq8VvDsd245dFYw3QJuWGn1Wbe5o9zPMQ2jLZmoCN98AWHvyLA8kGurWNGKaNBYcJhttcsE1JK1ym6EeNtV4Cq6",
  "key11": "3eFppMDFXXF4Mkvn6PUqkspRWwtYrTgetfyr2Qnk3SAo42QiY8JzSfRiGC3JG3mqHsEpDimQnX9FzB9coNwpJGmn",
  "key12": "3vFSYTdV3W2QEtZdaiaXCkJzSnCfbhocM1f6BntPFgaYGhLHFwVQUWCMWjzeT65qKbXWwXHf99hiyduQXtykkj3G",
  "key13": "4D3NKWJVDLCumVwKNVzC5GzPV5DiWdHh9oVmzgdJVvj6KvYyUroDzTUzsjvqnEJswb6iYFghaqy5Wfc6VwkQUasE",
  "key14": "KASxLUYEWBSpR9m569dXDxzyTMUw5AhVktGcrgrURMZbe7RyHRxj3aw35P9EpJrYz7AnV1ki8SwYLcrQtt39GN1",
  "key15": "4D25JvwqgkiXEFtneYVFBPrNpkSmUQYMrDRz5GQPHnD3SwFtNco2FLunxUCY3wAibCyQhbi6DEW7ccUucKAQXods",
  "key16": "2S7rX7pyVfNUZeqZZSYHJb3WangreXx2qctSbVawt1DFUqZZr7MTVxzvGbz75T1KxgauxExeH4f294JwYtocs5oQ",
  "key17": "2Pj8rYKobCuGW6nVfH9iS2D62YuYHbMDpCTCZvQTPbYpGM4xDxz9uxebbPqTm4PZKwV96zyYrbw8cLUpGLzGmf1r",
  "key18": "2ovJMrnq5Bz4QJZAyc91yP4S4WLg8gornfQVbEq6FnjmWHrSydbwkci2YUNYdkehNgHs22S5mHMV2kkFQAr9qKBg",
  "key19": "YQYNjUdrcJSerJiJNzNxno7YUS6J32uzHmeBZ4gySedjinpHc57KjwT777t9wA3gnYCwK1HMFKG6U2xx1MXeAYq",
  "key20": "fYP9jfBJqG7nizwsLTE1GPLGJSyrG9mG7m6fj3VGPNqGNfiYjZdJ3VnXpCogcThgbsvd2NrjxcSpNRdBg63tXqu",
  "key21": "3ExEMBm37rkGcuMNtb2QwHkrQd8QzKcjshDLYLXbo36vVewaYYNn4YCp1vea92Yxv6qiG4bVX747qfcXMjq1yZv6",
  "key22": "4UFGf13h1EiJkSbFPagPpBQwAYJ9cdKkJp5XHBjmEhsi2PDx7qjSaanz7FCvQjW2PjYQ6zQF7SWoNwyATtjT4GCc",
  "key23": "rpA45jHeihw89RV2NAcLX7ywSzJggLHUFFchSMQDqdRY7gFShXRAsG2X45twte5rg1NrnKeba4XYQmmZyo9mwVD",
  "key24": "3FAKVbaGLEE2oQXk66ZxeNAgMkf2FvcgdE8DUBmigr88ZaU4dHwULCdCfAVqUmuPJGebUhttGRgPjD7tFMTH92VK",
  "key25": "2SnLNbv98VQomzJziNLSAcmMP9zPK5WLQfMNVZdj76adByRXDVoiaqMSq2DkEhtjPcrYSNPSqNoJXutLD9fLrzWa",
  "key26": "NrCDRnhYuge47veTh8Dt225cKK1DDSExB6SikarL7yfWLZ2ftkQBRvqLuGnUBkA1fFQrHkPLh1YZJaoScQtBKiu",
  "key27": "JTD8eBo3ccFv5xdm8SNiZ8TmatzRdGTPAZY3WQ9mJP1Q1P8wGrTvZ2sA4seGPfN5Dy7THsGSVgAxDbxV4VJVF46",
  "key28": "3Tc6UwiVvxLgybSsi8zKqE5PN6X4SAYciuuqJjNWMeT8ciUjTxSiNqBWf8vaqhbsd7eLLBGoGyF24QY3BpDFWai2"
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
