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
    "xtyJk9Yyx28fwqiCzN1E4Xg6M9yW9jQwoPMEduysKirXBJqkh4FopiAac6N2BgXzsdSMdvKR7PV6FeC8spUWaFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232qiqiCUmaFMQZpWV1z5XjxQx4N3LwBg61Q6kg95K4AP2ZCX3eimELBNQooeoNC6GfsuAwctww8vE27TP1L984s",
  "key1": "5ziYBmeC6E49g2mDdhGDQZnp9rwEywrN4u36fCeMtqXt4d1EkgmJ9zB3rAySCWF65b8ecvZmZBQ9RunfMGpgkQsV",
  "key2": "2SYDEsJJfmV7o9SFhRhzLoTxtHQdZKzp7GLaTav5p8CdethqkLARbseD2Uww74o67ikNCcpajjhbZHZXVQHbxZxf",
  "key3": "3nW336g2XyhYyD2nX4LQqKGCytdQTf77xiCPkP613HQK2nGbNXEUQw4qdyeezyZygCiFpTUpe988BKU48B7yVjBu",
  "key4": "2me44hK7jJSkyKdfSbQRHCCeBC3K3tX8xxvYkcbY1ZtPiCz282gJXsh2zNPB1NJ2jw7sMEE7KdheKDAnNooDsnKi",
  "key5": "7Kwwec8pxDrwp73d297WEkRpqi4Uh51EZd4vqPi35ugwjXn6QCmHdCEyCEtDiCP9RUP6K5E8atPvV4Mm7d5BWTw",
  "key6": "25zrDjEHe7k5WCbtxgRxNuZi3X6Exhrt7xQLWbaDAgMAqQYkeTk7mXk2dCDv7Ch1NTcxKGRhDT1mCBzHS7yHu7TW",
  "key7": "2kWXC1BKB2AXuSkBqjsihU8hKCuZcMSxS6pJZNhnLQVei8REeYYsCnzNtaDWqeZaKekBiNFJvKjmfA75tx4AFFrf",
  "key8": "3Ys3J4ocBFLP5ktGgD43YFk1CUcpS3CwPiKmV2pVmu2q7SmjkLDoRSK2rB8PnZxutPX9N3C9NriyHmYrDF8GCwt5",
  "key9": "yjPwqwWtcAymn5F6Dx4RQa5GPRBaD19u7FsMqDCAnhiGmMngjVJ8de3L2YKkWgcoHn9RnQbuU3MUsrmuStGpgvv",
  "key10": "46WGRqv9Z6yJeEfXMroKy5giLwBxDhm1NJeoQMBwCydKCakc5v4MagdeViihYoLwV4umxagkpDxe38pwwQseHUJx",
  "key11": "4NcAtzLYYSwykuCsBPUU99yuk1Pjp5abvARg9DMn57ii4Hovz9pFQXepF295nVnvSgpyVD1pemzS26FuCT4377on",
  "key12": "2sioDuaekyo4LtGWMT4Umg19Ai6zf85rfALdMno1ecu5cgBB8nibYySHf3xNNePfiFCPBDLEr2bYxJzPh8pKsEHn",
  "key13": "5Pd9Z2R2cdSrnHacnArNzT6VZkdE9Vgy1NghdRCfntX7Mvn9php5jQFj9NBRSnKKhByyg1vgZNDZXAbjsmFTf2s",
  "key14": "4YiP6L7fTYytJhikMMvDZFqcM6jBUmyJauVrPY6Q8ewbKNuzrH7KNkgKmi55zHEGszEAi8s1Cfvmg2zzEQeUjac9",
  "key15": "5vgn3PBt8Ur3SuQ1yBQ294srSncd7ifxBTmH3mtjfwuLRtQJ9wek8FXifee269XZ85bqZmcKZqvr68bSqFQK8JdC",
  "key16": "54eqbC64XbKQLLN9FnsEnvmUCmg8M2iK2aMGBa6XuDzjPyAdfE3hz3y6SzJNMgRPMPy3au8PdG7FEZUMb73toMBg",
  "key17": "3GDqxSB4T4PbgYf6AokRZAg2k2Fa5UaV2mFPtFjRWJLacGDvg3XDQoHJSmKcMy4XystSspikHR8pfStXYGpxyjyA",
  "key18": "RWBN8WeWRsALAniNiCYGdRbQAPRUFf84KsGFR6binb6aQe9rrXxvHoyRVf7H37GEsckB6bcYLXirpmLhzyRvtRB",
  "key19": "4qdaBqkXv2P24cpcTwSx1mqEep6gzhFPQWkqrKH1hGUT2sHKsoqKpx7UPWCn4jStn1xavFWKViVj5Cb1W8iAHu71",
  "key20": "5M8rPV2gqU8UaNgLbDkppNyyUqH5MJcPc1RUsrLTcA3oGSeXczWMXUZZPyhtQEriktkT1YjVSMHMwup9zgePR3Wd",
  "key21": "2M5foCCcmHwHs7uhTmHyZTqPzhaJnzN4G1ajziyuzBTTFTSuRJnrwCUTsMUPHvHnL9YFCCxkDjn8YSmkhhPm4nZ8",
  "key22": "APPESbLBzraYNo7RMEhMTAQH3CBkSak6MD8WvoXc7FNV3xKziCFWfS6gGN9HtiuV4KNw25fPPtPPXKZqyBmcLM3",
  "key23": "7yWzkmAbvDPxKTfi9U1LCrfjHraYhCGmYwBWdBYMBqkprVHBh5YGwoYYth7RBXbpTuA2sECLbsa4ukmjjADKsFc",
  "key24": "4CCtdhfQXjQvvsb8eTnRUETWygiHEfJYD1QavMq5CfQzPMFVGnmu7L3xqQCG7uNhq4CKMLsQF9DkHBZy3gaMvYXa",
  "key25": "3Eg4CnU9yq8BMW1CdxpyL7w2FfbtQKEoL1VBBdy6a7BXU4Uy6bjA9RjXvpX6oAbTyogVw6z6zWdnMioXEeLKqqaZ",
  "key26": "3qzCEpDt5tUS8aFDLBs4HqeAu1Y7smb4Lewh41vhmShDPKBRH4qwy98YDokxmjYxXpZ7B5FG8sgo6kRcj3kCUAUL",
  "key27": "bfne84NozKHFD3GrRdRzV41C8BvszJ9gneSAuDMJZ9QnzFeM3Gdfw6S7AeSHwZ3c5cXkZiwrEyfrMQ6MSHnojeP",
  "key28": "GdWdksZJsm7h3dytMrTp9BucLZHWPQPaSiWW14BTDTUzM2R2e2BvfTp8YbDhG816o7FjY4jTa4S5hdfnTrpVQmM",
  "key29": "Dderm6LZJyiS6k821gFtpT2ShjFweZyy3cKMD8wwCR1jqcyJ3ChrNwSVcogPdgCqyWdbEKPdscqDAJVKgcG7J1q",
  "key30": "2Kcxca3dPoCYSXttiZedVqRSpnwfdbWqXLEu3BRVi7x7GJtEQiDBFbL6VbS4w8LKfLmchyPXjcaHyiUTjsPm8uUX",
  "key31": "5oMx8Wbun6xSrk9tXyoiPRCbqbUpuALjzvwz13RMt6i7bDqnJM6LVLuFjVi8msx9pTnrcGdhkP968NgEUyjZBPRA",
  "key32": "2aXTKEivWhmwGjYv8qbqb5KWqsfcUNmdWM6VNZe21EwhMMdyZ8YaL2rrKmiwdRGJpYRt8Fv9wkgwjut9M4n6beEs",
  "key33": "36HUre8C6jwXT82Q18GMjyjnTuGquGMvRqpDXPtvaRnR6nMPV97kVxgwP7dWUPF6eU5ZLYhpipCM4emrG7kQpARY",
  "key34": "3aBQpsfFcP7jXhQ5ey4aqfRVdk37vmXhDbXW7Ledka7Ym5oiHjLo4SQFQVeNqXt66dd4m7oL3tMdauNjtPwMhtsZ"
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
