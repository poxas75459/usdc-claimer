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
    "4ZxMeGEaZPsX6dxt3Xq2RTEmifPNhYpxyv3aaPPTpSqmNuxYT1HVEhb2LHYL9cyekQjeH3QRFdkpsbzvnSm8WBzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ordvgpCUwnnC7J1xsdaMESKmfv6Tut7hEoqU1N4yEB2umMA8DcseTPqn4mDyoQjLPkyqdQbjx8rDXxerSGhJ7eq",
  "key1": "2gmG8saGWGVF9aDJx3tm1FNqRdoczEyPg6iNjoiujTF6kHBNZRGMvK4os5rRru6RYetymqxpUSxamR3KCVBcwyMB",
  "key2": "4N6XtPRiT8cV3w14Piy4BjuGd1HJ5XNGpqmR1CqfPfMkAGVEp27qmsJpu69FUjVuZJk6HZYqQkw8aBBtchhGEZeR",
  "key3": "2GQGa6SJPZ4tYEi5P6L5PGguT67UHQTQkNfK1KSZTkPb5J7roxQgMpvy2vkHfUWvxPtzjVg5zg7emrC9nGoYAKKN",
  "key4": "2r6DNcHLwFpRJjgqqnt8eeaVH8MCoqKGvYFNZueEEQw5Nn1o3hH1PaNr3SXkKfzJMqQkYndumVYa82EWVPxDky8Y",
  "key5": "5GitWEW4RT6vnjxVUoD2ERvnFcSuJVubo8w7F8Du5RyG9XEbkQq3AxZ7Cj98DV6zXYqmit5n3V2Y2gvEemaFFYjm",
  "key6": "339Y1wL8P1JapwW52oZwAuJKNBYhUyooX9PGrqrLVmG54d2ToYRNyxcW62nU3D8R3BnPbj91PeU1p583HUFYUVF1",
  "key7": "5FZuLDBas75gXzAJrZooAKkQRXuJoC6bzeta2xfbDh4xF8RZcpMRNJGtU823VBKTL2PazEDyC3UwVtBXSw5tjQUe",
  "key8": "5NMhSq2NftPc9KFVGfgmvPCCnvLc3c4P2Y2maudEGa6LN33Qhi2FdCCWjTGFCDD3tci9EESph7af5p1DoPhDcEne",
  "key9": "4XzKpGzWZAUBoLg2TEFFysp5jQXh3vysiW2wZKD6dcGDCtB2qAtT24ZpKbGGTr71jtp92t6WpvR2FDuxikui8Ccg",
  "key10": "3qS2ePbiNnQsGdhf7rVSL7Zn72CAEduXBPuX4YtUdaKCeMuiD7jWsKFsyQVb78F8oD1b9P4RxqRUqEhoj8XC5Ny",
  "key11": "2HDPTUyLyqcqrm9avemYE59uy88J5jXAHcHjQMuWh4Vk1VHBNJnn3yZ9h8sogV27Q7NC9D1dzFN7gZbGh7tQb6Uz",
  "key12": "hLJEzYHo1Tg2k8x1co9Zx3NZ6fWGrXy1Ma43f6qu63GWDUDBRy6NThF64iMDEGdtpjM779QQeTNeGLWPUKZw6We",
  "key13": "4UnfKsgkoc1AtMdkdb4tEvSpfYtGfBGbT85FiUG9b8rSjE4ggCyvqhWTsQPgrN5zFTVWb8p6kDu6GpDvSYBWot5K",
  "key14": "5pJfw8UtMueRzitG9kHgiLb6vqqriyvsjbPVYNnR1vX6hH6qaaoNKV8d3fATaCJvYtVv1kW3vXhqnf5N7Rv1Jv5E",
  "key15": "Qd8F4XfXgwL7GK5eE4NM5wtW7uRRPjP9xUUCDEeGMBTqcDfMEu5E47Bg7MdMCk7VkW2xSFKGkhvrehjxk3UkJkJ",
  "key16": "2yZTMGbBueHifyEs9STvmiyEMdSWurBhNcdVtJDiXMR8E3hyfkUvP8jzQ6Ybqn9pGDvTkGKN16Qj2Pz16fsH2Kkd",
  "key17": "4wZnXUrHMkzaSCfoBg19VNkmDtZ6mLK1qkScP8Lc9RJExh4ompKR4LAe3Dq4Xft2wwdDMtjunFEpW2PWd3rqXDbw",
  "key18": "3dBATrPzXrEsDgdk4pLYcuH91RVUfUoGg7vm3JKf3ixLM9Z9aGGVjdYT6qBY499awbKghF7LPBUprrYW1yT7dNvH",
  "key19": "4aauWdAsVB7dRgSdQtVVEWVf4YbWdbkueTeCbzEFWf9FyajEVrQrHvnfTtpBrKVUZfAKSuARqjLEapRjg6gFJMkm",
  "key20": "5nXa6wxeBwhTgYNUyys8vf7jT3LfT2sfjdSNtPvHQAAgv3Qj1UXfcTsjXRqMwSkRVntsSn5MrtMrwnjV2vDXDg9L",
  "key21": "5F6SivXGt1W2gNbwbAmTYcCNepyhMAuZt6cuzBVMqVjtGmxsQpVjeTH1LoRwMB4ELoYyws1qBFL7gTD63APKCmPY",
  "key22": "3hv5zJBw5ae7qfjmCoNgW49tuLcFPgBEFUF35bBnYB6ADJntzZHE7FrkfBCPZNGYeCRM491VkAFeJL9KeGkDcY1X",
  "key23": "5aUWA62W7iGLt9jpo5zSpb8c6yNLQfhNJuGKdbiHpUZXBMxuR6EoKaXjadgzJobVazpVvLaofvwRUKRRn5h8WtP8",
  "key24": "3ZbubsNhH37Qa3qrJABTk43Ybdm1JiHxa3rEgtfcLGwnat6vktBLMjjGbdDS22KAJDCMnmPsEpRzZTZHoxjYeD27",
  "key25": "4ubBFzR321RX5j4oREFAfe8bWRy3fHjWqPNiyzbz4jXFfRUMyKAt6PWtEXqXTon4KcPd2Cjq1qxiFXB2HkMtqY2o",
  "key26": "26cCysTWkDvJmyJu91bYxn1YmEfmJ5FYEPFfUJwMVDn4bZcqBT4LVBKUa8qjh9cjViYN3Wh65qn4oR2zubrHAacz",
  "key27": "dgkd5SHcPnYrica2LDASB5q3nh4kKbbAmkA5NHjakUK2UAeYW8wxpEMVvqeju687GXCyhqorTtifGajyZsDa1kC",
  "key28": "5rqYdgTWxCyExHvh7LC1zPBFz5tQoXKHQhY6LCNzLB4srLoBCyDEsc1WdwAXX84dpL27kgEiYmLRBijRzJQW5aXL",
  "key29": "4qLB8NrtFKSEM1BYDzqArwSm7TBuDNr5vFwHLcftjMEbHxTCf44Pa6j5djx9FnXQj7qWwnUKEGZTJbAgCFqMHgGZ",
  "key30": "3B2eZq4TVPso9uYcgtzo5onPVFf9MXCi5HTvjzNgjm58R1TGbYL4eAP7SzKaQzTrpteysuAapbdmorGSjd7Sdb4u",
  "key31": "3NEa8gyFjGtg6rmT5uY9BenDKajmRxbsoNt47GDKS1y7dT1MXEZakoW2Nxr9TxgtNHXea5MzMHdGyqDeusGnYhYT",
  "key32": "5wwoN6mzzbQxCECpMihvCCBtxDtMchQANevhoUMWUubNmMqiaY3WeMuRA1z1JHNDNrhfkxGE4XhJMvMEhJRH11FP",
  "key33": "JUY6ZrhJEB8BBxAd6Gb8simEuz2xnhVA6k8v6UhR6A6vZw2oYqy2L6ajeiqBTrqFWLyUydkCQ8MxxHmeWXm6nt3",
  "key34": "hbPoYTWQ5qGMD2DqQMsaKzp1nQ2iZihmCXcFqMYMeUTCNj4enoC9VYWEPFs41SGZQBGjatdvspta5fZpeML3teD",
  "key35": "2HvgbDvE6H975cnCTjTxrjdoVai61v4o6bcCHqqmqQAoVf8yPY5CtsQrVbgLqGurQgRSuxFGXaavtdnSe8mRr5hM",
  "key36": "STuKEeGzp4S2iceTYUp62uqMZ93tByuWffPqzYnZGqSJ5YbGePPyLEnhmMb3PewjGT72htMv4N35jtrRy6jnyQk",
  "key37": "61VP7y1dC1WRzD28tRYhV26KFSzbAva9Y8wRUnGbHJ5opE3MiSX7VRXT32iRiQc22XPw2ai4Z8PRu7YngeRYdpmq",
  "key38": "61bDDCryw6RY7BxjuVR9YPAbWv7aeyseap2R3wjcZvf5Fe9jC3Zb2YD1cS2d226SUUx8mtWLKe3aZD9X4ThJwx37",
  "key39": "2mnhuZ26RrA3E3VUb2bvhEtQSLKQseBGXBv7zTDH6yJRFJQZmTFbtor4SNehCFUQ5jDoXhU2mwpK1YMMAMWpjwoA",
  "key40": "2BzB8PHrPqXzXpwFjKJxebwKT3zm2RSMkEpg1r4a8zwdpyQvfLpHr4kRCb24Yx7kMwxKypdbudTy1NMbqTmoHqwn"
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
