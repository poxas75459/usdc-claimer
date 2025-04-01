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
    "3tvvYGWZ5saqwbU3S2uZ4xTv8cepYRxLubcW1uekXgo95KdAZUNNAmcx23pXTxJho8pbfvtg8Sy7CuitKTw1XyWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ApD12kGDDyENaKkFNN6ZWtEJpPdBwyf6vqpKoAENZkfey3xYAmKFaEE5j2w6WGmrFBiqtxvmBLZFE7zZQWa4i6R",
  "key1": "3iGTQUzQ283yqbX9J8tP3SSjbpcYr9zUzdGgcJ16FFiRqSLKLkzpD413DRSgL617sUpD1sL36LTfKBhqsPkGGZ2G",
  "key2": "4di9kQ43oha6f1Pryoa7LSuYictjuMr6MLYuZRDbu8uTuGJy5PviS4ZXF3fPCvw3oWJtiASJyNq8bfqEgGTUyyAD",
  "key3": "2goMqSoTCJnGxDdS4jpW2HMgKw1BYTvgS2cLx9VR8oydrfECEiwUHVGvtsa6i1wHvwkALsMKv5W5trZNACQcZ4p6",
  "key4": "VXLNDP6HXFKzbio11ioQsTHnzVgb7UP4J4NGgoBA7XvFSLWjb9iGpwmk5yiDo8b1FTLhHJn15TTS1HUZgFCSA59",
  "key5": "2QBkDX57QJjdV43dti5MCP7PbUqzfmydj1QG4JQXSjSHjkKotzPTVjZg4aUgM9vLgocpkqfrVriLoftHyN1VWocU",
  "key6": "56P7euryMdehhUNgfRMTo4M5a6cZrwxM31VZYTadnUZWWkpDDYBmjJARTX5D4GV9eJzHQnTR5RmGf35yGdeGSs2j",
  "key7": "3Ahcf111GtY6Kx9WimmAZfzQuELzqV8NFBQVGgx6HSTUSfN7D3QCBVUqJQrvRRXeuw93XABmSJJ1N7Vh8ApFi3SS",
  "key8": "5PvjXqr11omSPLrZvUmuC3NEh8uPwtQbUTKozK2QxgrWpWYCZoWKd3AE1WHNmLCQjWW3UrH7aEAJcjD4P2Daq7KR",
  "key9": "3zkcocJKN16H59nyXBw8U1LZsxXWeptQoQjENxK8VsD7eo6yCTfKjgJXEpARSauVhrcFrqSQaXRsfnYS4EuNFL4D",
  "key10": "2rfowDQ9wpYEzBM2E1oUYYCvqAmUBx9xS25d1vN84iiffSpR6A2wanJMzhTejPwZmt9kiBxD1mzMHCRx4u9RE4wz",
  "key11": "4nSmfzfMMK87aLZYfCASLLVYDC6ZFjwenmGHfwURJenZwCYT5J4TmfUaLuLKecsrkCrSkaa3HbPbwWx9ZuzSRyxi",
  "key12": "V5fXKV3RpsqDxuV5uhEEdv6YVBNwy7Pbg7tqVomKq5F3i3byHCSJzQut8icoib7yyBvudpU8MbfqaNAvXgFvSMk",
  "key13": "4SybuYPHh3EW8h3NYEi8KdhxEYhLAcC3xbqza1S9fopsc19ppeG13hhDxAEiqpmi4Bzk2U6sKcDGoiLMEQmi7EnK",
  "key14": "4DnH4JmxvfHNNBPeb441edRX2W7zGKSegCGe5emuSVbbP6hXosuv7NSmcdsWm3jvpZuxW7fLgQ4HK6ep41fnzZnm",
  "key15": "5d7Ta1W9wi6M7BMWKF8HiH73HZwiaRKTqkAREnH4Y5JncTNZnPAoipfcRU9wAGj2JfWp1wkAyDNWEqPKrhs8pVhH",
  "key16": "9B9uWbCQWQmkbETQcJzC5WyKov6n62pHidvaJ7cHB3eqYxjQ8EKJ9qVJhybxsHZ7mtVG3nbK59TeCopZtpAa8FC",
  "key17": "Tr39Y53XQTZCuKPYsLvrLjWHq5mHcp2UWCfRAGUHw1mEUgZJLwbTwd4ZGoRyVWMti2zXBkjrtBKhMYmPAkAit4n",
  "key18": "3t8rEhZg1aZVKzhpggcFZSAdciFp38GeoNLbqycLixv2juvxCDYERL1qr2nVAkHn8Lyn97vSuFXeE25SjeRv53Zn",
  "key19": "3nyjiahCd3VAKL9HsD4qDW2fmjPgkUpaymZ3FWEy7WnQ153QtHVJa6bgxQkDkicUHXTskxwUCmiQTshdxLfVyVSy",
  "key20": "2nr2BP3j76sGE49BYXfPF5yJjtE7dth3c2UzUpRwCJ3ey8qgNtgtPXFUqPPkzP1djFNrov5jtxz4ke1P9Q3LXK2D",
  "key21": "554gukP54N3kBdaBUugnH4Dp1y6in4GiHP38g2ukrpo5ZXEGAPVuLBFGMY7py3S6J8EdSjJzsHpmiYtGcgQLh53k",
  "key22": "NioCEJTSfNmyJbJG7amg5kRwkaNTg9WpFpAbqAwQpZFT7komXimXaPBTuov82czux9Ya2HWZnyFpBZZQ9jEUrst",
  "key23": "4iCv6EXhs2qNvX7CVdz8NbcpAHzdF6U5cdKJfyc6NFuUVd3qoJwiqhxDDvT5Du4vESL5fnzEjoRPjXaMfxDfruAJ",
  "key24": "2uWmjcC5sZ1mqywoxc789aQEkxF2DgESWvCvPezQ64XsgUcXG3dKGwyLfStcgMrgsntjos78XmuCwNTpits2Rz5a",
  "key25": "hkXhGTVNpLasMySBVTHwerNRjgHFazYoXLrHchZeToSJHXoNL36tYRb2Xt3quUWyedfW9WPd2KQydfydXnXsL8f",
  "key26": "3EQ3bfK54mMz1dNHPQ4WzwqdfABPgjtZqj2JCHBvddm9L6UfvDR77LSZApYNwa36VhyExeusXep5ykLZAi59afCb",
  "key27": "28Cbo3x2V6cEwzytZwdoa6joQt82SVtUh7oAKQSfgzPvFZaEU8gQH6cNJQmsiGyWGL4DAYbyfXJUS7R5MtS1QxFs",
  "key28": "wmLnbktnC7bEjzMP7bYXxNRXqu7j9PH3vYUExtCR5CxG3LzYL7jPMDdq2aiRkFyCebZpPdChtaUpXRFgeuTjjUB",
  "key29": "2iyXmUav1Bu2iUgkU2RryM2PjGiVcioMj4dKmpymJubSLTVre4grbeGAJfPsKBPJWUuZQLNWazkwj6fBuj2u8cK6",
  "key30": "53fFkHGgfa9HFzT8yziDeWBANWRHGPARH2B5YfussxffGdPxMKKXWejYkZKpt5eVh5wxnXV4VfwkbZP6nD9rF6Gg",
  "key31": "5zXN1fNRggrAikdKwHn8B2U77D9o3vaSGKVJndUPmE6odJYAdJCbJofakeaNCZ1txmCCHYmQ6HvfFdZxmjVbRMnj",
  "key32": "32h8F7hyYYa8DGyeCB9eSbeupKK1bH1UDJPg3vzRGzyeZw7RmCANJ9dA6BL79kfaDMMi86XZFTRMprjdNstrjRJh",
  "key33": "3wCPyt9nNAMiQX4CqoWxaeYzcHYNhr9xoDvtSt948753wT8beSatVUjmGiV2Uwg5URQafKqGfSxT2kzMRaDCPc5w",
  "key34": "2yMtYxoxajv9GKGgrfCWxe37HFEHFW8Up1TedWVfoQZBHauvHRydtDpscr6vmw7Mhxe6QmDYrn7pTq6tggdjzty4",
  "key35": "7Y3esH1rqQsqQpL6poNDkiQ2k2afa7WQK6QwoWizkDqjukZ3WUyyoaDGjLMkefWWqQxJpG9bhAitgPCAzyuQyCw",
  "key36": "DZfbcNWcpdHE6GdMTRQ2vECEZJ7MXNd3xw9qEEWeDMgUSeggmHDPEv1tmnqEecqfi4RKoKC7yLjDYS69p3pXAAp",
  "key37": "3Qn9g7Jk1j21N8eczS2sKTvU6zZFVPrtgJzibjpnvq3cSQzBMDKuGkX8sKC8WcfLS7dMZJszXSDBaUSogkFQ45mZ",
  "key38": "3kvEGknnTGCi3ktUZGZdopTaZfNGyRideq2FeqrdcmuAo2NVtbh33p2T4TgFkFPtkEoJvCaBVxZtxo8Radrv1mrq",
  "key39": "5cbUnVPaqGKA2PxcuaKxkZhB4W2GbNWohedCQJn6s5anBs3Kr4M3ekrk2x5UHJQDto3xANBUpGh9RCyVVnzQVb5L",
  "key40": "45GiZtyE2ioa57U15wdFeXctHB9CQSzzR3Vs8PuPn8PGz3KmWEooctoCCq5TeRBozrG9Sq7oeTFh9fNStBtwHCDA",
  "key41": "4fb24EZcWRU7GFfUWGGs1idQdGKcXEWyQDJmSWzkP7JoDecEgSywgz45gFLDw1AFfW7fYWouwFpQ4kGBBq9j3xdF",
  "key42": "5NtBZXPhfMHPwADTrbDwEihPzAutzDEj5u2c97MT2SDHQrwJdQEDLdJZox1b5KRVaPdcgTat6Hz7V6AN7AF5y8pB",
  "key43": "3LZHbsZD2MUg2xyq94fQfHWLTN5Ph1fBiPTKKusfjKcV9q6jfsLMzUDqeFiw2rZVCV6TXmieWdy3Vs4vYNDFngwE",
  "key44": "3ey8cQV2fDjYVk6rfG4LbHfg2Zw3M2AB65dJu3iwCUzY2uNTraGJd3anhp2bXG8FY8VtwkxFgN3z9mYLXCXNgyU4"
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
