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
    "4N1uw5dUEviSNzFarhcoQTZbrSBxxPraunjErWn3UeJRro7UFPAhwxmKSues1hxPRU1HnzG6iRsm1T1b8ANrsNef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eATMYUskMwVTiWVgQ1j7XCkfGAojDDmEd3zPTzGu4UFLboJwAVVBHe9Y42S8JfPZgmWvJtVrgo7i5WzCYN3yW8L",
  "key1": "tLcHbH2ZT3MUvPENATgYRoM6nuceQXwqKdXpMz1AXv9a2T21JT7WUieVW53CSiffC1mZkkeeHRUwUpLX8YdP2Xh",
  "key2": "4sWVGq6WeJAHpxJWxWyb9euXPG3V9Bsfd46nGX31mNbAdRaKoy2GfiPztU3GHNRn31uuSmeW29VnFJ9sntvXdWWD",
  "key3": "4kQFXZSxpkUJR4Eu13Q8Z7YMBMiGB2FHvaVbjHq4WVVu6mLz2KeFkqnWdVZRxRc9SUbiJaeNXCmEb5q2KdXyExzp",
  "key4": "4iXurTT5Xjm4E5fqpiQxe9o3mgFBRiZ147JapBBsbN6M68vJ1XVUuJ7kiM6xGG89A6He32fsfaEHopoUeFUA4DZh",
  "key5": "3Kbz39Shy6LkYxhDiqgej9F6mh7sV8v3b17H4KB8kCsdPj5GagNbY6mF1pb4LjzXKjRqme1bTHzfX2oPMCMwzrTK",
  "key6": "dCw6M98dp5benunviXGLbLoTMrsNmoHBCgbzpA1EC11RQPxNrKbVTmX1J8njXFr6J4xTxqiDZMR5wgxwi8JEr9P",
  "key7": "8V6xEPNt7246BYr5gNZNaYdo8WDEH8n49nfffjwjsa6tyDpaQ1ymu3bEpWn2mUw8GX8f7P7PXjrLg3xkXsVScau",
  "key8": "4ATbYGMowoUd5ZwAN1pGCXu2kCHTy7NbxwYKYPQ2kVUDNAfF96hwMuKKiXKTzwdpuhZQdMxDHBo5DBKbSqCwMMRn",
  "key9": "2n9gP6G5uvzftm1gsoGvAZTsQuCovjDEDAEpWLyM7Hu9cDY14uXgPvtizYDfKvxkrLgYU3vcwyuwsyCNxPFPpVaf",
  "key10": "HUbAfjybpcpfC8vuHEdfFZxvN2xoHCrWevcBo6ERKCKgtbouyWrwvWyVkgKxuw7odDkUS4ae9EPgdRoApBrGKyc",
  "key11": "3KGB4m8k6ZSTQGM2JNWFfJDSTAuUQSDTYktMmhkEF2zeSKCpiCbcKxYCH5fdZikzWhg2ebDuSJqQANBLhXyKwoXo",
  "key12": "NDR5ms3cvdVWkRCSNcn49eYm7gYJJd4ae6nsyFb9SC9gpMdGtuV38CuD24qgH3rcSawnqNL7oJ9j7VGjb4rQhL5",
  "key13": "56yHaQG4MHMXMfA6DHDXfDoAsGArhxiUnr9YK1wBrSgD2beLbp5NGhZdPjDTb2tJJdhLM7Ncc7XSDAb2vZ5s61pw",
  "key14": "HxhC7UH9aVwR8UPJRB5thKZ5gLDy8HAadDNagDtDwXQnv4ZYmgXZ8h59kAqRx66ouzTsebBPG111KyoretXeATi",
  "key15": "66EJftVZPM5TjTrio6HZbe5Ax8GQLQvcf2PxeNBUGyuVWtr38ExXJLJA4HgGG5naSgnA6jvbmFqhJu8zHNJ4jN83",
  "key16": "2dFwL8sUJDdmSMMRQtQmfSnoFrwKyQNZeXnroP6tDiu9ukZ49gETK93Zb1Xrd9JL5SK1rcGVoXkicRWECfgEa5k9",
  "key17": "4UUHCoSHDxjajYAU9z4jpY4bwHFgyn1nfrSUVqTJuS3Yg7zxoXBPLy17KovoivFQ7KwHRwUht2kGiwZchAuvP1uq",
  "key18": "2x2eeiA2JmgwqBLrUw1ywv6ygSnq15vUntWixexEjM59fE3E3RYGTYnnBwG1y4pSQvX8twyBmK8MgE6gyrj2hENd",
  "key19": "21XUqkjiY7yBxCkAbmp2gpM3vkBW7PKvQ96ckA2gNxpoiMCPqyuRcLpHnppL4pDNjjLotHJLnm2AtGz3EpkezBtL",
  "key20": "54BZihWesJw1L78pnmu2FSRYyradeFTUb3Wbx2Tm1yK8awN2v6ciJTLMkYSQ7F1EcJgB51hinMVP5knUFX7eWteL",
  "key21": "3PNVS6qs9kpT6r7g4TmV6WEaWg5sUqLdSzDN7EA53VmZbJZpgppYtRBTPT6C2C5vz9pktEfmHFihrcok53CjYtu9",
  "key22": "62RY9GPkjoQWRNKe5Q5HZgkBaGyfdeyxxjoBivfR5r57Jf5ZarXjd2vJGzvjAm2t93PPnKFbg51Z6HX95jxEjWBu",
  "key23": "38oyZ2FfzNmRnxyvJHCFbsXAqNYN7W2UXqqG16WDtP47sRVaJKH7SWRjcTLmgXhMTDVwP1U3gXw8DWcakhLVsaMn",
  "key24": "3cDibDQAQTT6MbarCGgeTADdRHySQdRirTLfbLNMsEBLTCFLJqU7hqdP2YjQ3LpLEUxZ4eFS4Poa1uTTRRYLroLd",
  "key25": "wRNNucesFwoU6d7N1sWq7sWGrMkoBa1AGP31JLBC5VToTUL1mQRN71K3ioj7v21dTLBhTpJ9ygQT7miBfqVxiqt",
  "key26": "3W1CAF4Jpt1NNhcmSKKSSqR74Wz5WWKgMhRxUkjVnPwMoRZiRivUVQqBvnMEpxtKx1AQ6jVink4hJoG82jXV7cCN",
  "key27": "2JrQhkfUoR4fPWJW83RWK18sqjwhHvTpFDNr3qDKRC3sb1cbKAo5E9kVFqCJcHSnuAkBnNp9vSoN9DMQpdxLGcjP",
  "key28": "3ZqCwWWbhGXn85ZNPFMMTrzxu5AxjTerLJByJiTqqrnNyPrjm74ZkRnMQHvVPv8QjoX34qwmypvYNAg3jZrDqxHm",
  "key29": "4htvJz1kF9h9bct66VEhNpNpvSBEESxeCkYit351j5mV6KFC358MZATBEeiCHRfFExvBAdLgfGf5bJt39idSQNjL",
  "key30": "CRZkaggMe7XWMpqYCgYNHgjGRWZjK68Wabphp24d4fhTKvyHDR8VE9bx2ZDUQWqWN6MNYTsScCMFc4AMAvYdZ5b",
  "key31": "4KDySMbDtiEVEUamxAGAxC8x1cqg2Mv85Dr71DfrBzeP1deoxtHckqNqSsHtoB5Yw5R1B6my357ji5aji3FdLYue",
  "key32": "3wcuTFB7xJgxK7B3PXQXLYjztXx2APh1uyUwwcq2GEMN1mEiELYG3VC2Gu8rpTZQFDh7C8ydhDe7N2GJjSoCArU4",
  "key33": "4PNk9Q6B74Qb1RzSZ3WBWAXTUcUYb4sRrawJ2mSw289jYoWr4YPCt7jpDczP46cQM4v8acrdS3HR5TUrT6PZyCJ4"
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
