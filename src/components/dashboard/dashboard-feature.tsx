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
    "4jRcwGWtheFs5jxwondDhegUipMs4ydgzVdLyioL6Zv8hk6rEsQm8McYDiXnmdvs3iKd26fvKcqNJUWR359kcjHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewBbZcztYg4CPLciNQq6Q3PNKa5N1UFvEtUxd6JoytBin1852DsD6GURH2MgUxDagXy2xeoqNnh9AM4ocRE1MUf",
  "key1": "3zVYq42pgsLbV5XdCPWyUdDtpTSrVm7x713zHgEkwrDfxRjVK23HuD3sp7L1wGpjecbe8Zpw1fn7YPhyy3RTGhEe",
  "key2": "32BoiZ8GU7KTtLZii8o5FhorzSXApTfZBHQMg8SMmBAANrbf9cAkM9WgrN8Ekq2hQbeeoAgK7zdYNLXVkCkC3RMh",
  "key3": "3GVztT7j9aAnqyT4JPL9GGYdVZZUWN6foqC7JXjea2v3QCacLvsjzdfu188fYrJTCjF5uE9y68ZUrzvBmngmsVA5",
  "key4": "2f4VwpubagK8J6thzLBfGMj7HXVSDHXUMpMrurq23jqcmJ4bAhJyAz1b3ZaiAC4baRGtg6wZRVFA5otvHCGT16NP",
  "key5": "3bqrsk6HSaqXyDesvWJEXPQdUpgfti3KYX3bs7Hepx3XTMX6xBLzvWoCDZCUrme4KLCjswASmqkjCvMK7BrBBZsB",
  "key6": "518CZjdW9zdtA5Hasddy4hTpELSNRJQfe7GWq5KFFVDnPcF5Ts2cd8sv7nUaN5GDC8j7ioy3Y9AxMHRZAJxPxeqe",
  "key7": "zL4jF3v99d84DVLWbzmenugTS7F9buehG6RYGpTQ1ZvGgNc4hVAJZbTfgMwJkg3ARCDo6shdD1Ak77YhZii9aAM",
  "key8": "2867YFraRBANZv8RsHXCNQMxfVrbpkz9AsB63RfuztAkmmih8VPMEhXWteM4V3o2fYGk3iqZgiRyVTeMSn4m7pCn",
  "key9": "5rLdj5G9iweTZCcevYwHtwdbCUcME563umziM5frUKzeru89CbfaQxqZFS3tiZ1SZeur7EMGvEGGEhnU5EhsGo9c",
  "key10": "2AJp4EBzYWyvSK3grJJsFx9wjfQAHgwttbfTkAQ9zE66m7FukFWF7wXe6W43bzEhfS9hHZZw2rHguYQhkmTNB9RM",
  "key11": "4gKvRZiDcq1h8ybum9dwggiGxfAuGRiBycV2DT3DGLsJMMgZ3o85Xxe5NxmuLcNMokCcPYT7aY5Qbtoq6EgxQscn",
  "key12": "5XrFBckJ6ZZ72dZT751cqKKSRP6n2PYDt62ZAJyq48X4o1KccaJVnieiBCRv5WwzjbqAyftnATwSHN1vzuUcFuMF",
  "key13": "3qVeMet9F1iZG2vNuPvmxNdPkbhZt2rtLkGymtiFWu9iawfA6J5t4iX3rXJTnQ5t3WvxfgJmrVxNZfUpzpFN9fYH",
  "key14": "3YuqPkYxrQCjt3yZMFAdqxHFbefwhjXnmU9A9A7rLq5yQpF23drkAc9f8r4j1cP7HEvPfghL3GNmwevcDvMKN65Y",
  "key15": "2wzq9A7iJCDpbgcQBGRAzab2vyzMbxAYBfSwzQM4sS229KAgB9wSmimjjF2YTMEDqHmnqBGnYTMf9AgLS2GcTJ9d",
  "key16": "39mBbsVfaUrKrH2QWV1PR7nYtHT831aZiTnTSwCjbcxgc5GAQyjVcVJQdyf5ZsyDV2omx5VBXwatrYDmSGsVo79X",
  "key17": "1pn83Paos2h2e1n3r3dALQDcJZQUmoKBvoNAvwg7XCN2JT62D7LpKbHynPetBfhswqcT6irFTFtNXjVx3uCCuMH",
  "key18": "oRhgFJfcGLZWS3j8eTYFdopqeeobVWRSWJxn2zg9UjMZqmNskorjK1uFgecismciRYn1TnhLsYm4DWpEQTyHQFA",
  "key19": "4SNdYX5931zJFAhE3sJgDJhTTZ2P4BMbd3BaStkwjKZKGmjVp5SenEbzfrzLBvkfjzf3begZz2y21PYCwUqenb7s",
  "key20": "3iLbU42S2pEtDBtEpsf5MPykicoP87Pvy7WMa58EM21DbzBybEsjEvz8du1pdASwJVcaeTCtM9yacEyfzVqjc74b",
  "key21": "3fUHMnmYxJPmMzQueCb6C6NVgRL5PmZaW71TwBEmSXkbgh2cf8MNjjLNgRDj39S6jWwV981ztZLX1KtMXGXms7xs",
  "key22": "nN4JrwA1siYM6bM6Aikosdw23ivuR51tLkBJKNoHnfjMgiH5HSfTssceqR74VzebbUWakJ7xAaP7hRccnUbtDLi",
  "key23": "3FULYtvhry3YovDqV73VEaXFmMRPU2v3K58RvbZXMuXfJcVDZq5gZghpXAxXLtEGaGpcmj2tBHTtDV7j4ceKGmC4",
  "key24": "4K1XEzXcy65RBs7Xeop4EKkkXpaLXS5x1iWTR233JmE9CrU6z6D2baR5QgGxMrbz2Kz7Hz7X2TD3BfdLVrgdbTi1",
  "key25": "34PdGNuNGRahhaHLTLLC83UUoHSSrPKyTrwTSJquofJtQVUnRurTXAxakmPf8DNcCyxLpGSrT4EcZs6xMrkeNJt8",
  "key26": "cn7514ABLe274S4XxpLumu7bzLYZdy3W75woSi6Lx4A6xup5vubDrmJqv1BaAcShAXY2oLMTobSrNpg3ubk6yuv",
  "key27": "vyUVcTcMHcLgm2TD5K2QJLqVEML5t5U3du9hrDsWbBkDo9fjby4iiUfM7ytG6tp5zB3KxHngXMttK59YgnQGtGK",
  "key28": "3sMsavE966a3526vNANq6wqATiTUmozMjmMUSWn9iMoQNc49TXjcNa5bLnqEQHzpgAJnhNTP9qsxx6DcBm1AfRcj",
  "key29": "3UB28pSoTpqpoYqon5QETraBP5HU8MYxSe6FR3iX9zuZccYEHvXYDDu8CYrT17NuBPaiwiKTocHRntY3yvj82Siu"
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
