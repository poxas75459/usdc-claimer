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
    "EuSbL9wumRfWLTpt1W4QDevBV5gE6CfQMp6vJGZAg6gPi3MA8j6w13SfHe5cdMxTfJ3Kb1Lg2HWUWA8H9CbsUQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5474jRrFhxkpWaFLUWQeF2EAho6MG8RzEYj5JKzxFYjfSYaEeXK1yPjcuXL3qUdtMzQRxFWtjaonvNs99Bu3Gwqv",
  "key1": "4oLZf5fRe91ejKjh1YbGFxUziQGb3TV3ac9Q4iVtirMTBKrQRpzRTPFPyuv1e4zBMgwyDx9RPJQrMgPP62azN4FZ",
  "key2": "4yC4o7PcPqQ9AkdTUcWFpKmeAJJcB41K5SaNxdAYuCmi1wrCLfYwrr1arqYuneYnpTYpThvxfvxpsG2eQoR5J4MK",
  "key3": "2wAkFMx5Zp7XW5eK2gwTRjWb8DrBfLwHB9EDBJafoGPC2twFEzfEYC415kJMfhb9aNUGXubRTasKRjd1QCXe9wse",
  "key4": "5FQpAetyQ9PttWLcmEemE7iwwasQzx8mME1cd12aEEixSF2eUZd5P3CR4JaeXQsFZWeqkYqkvcmUZAsanuEnfMii",
  "key5": "5anHLHtqtyL9U7hg54nVNyMjdEjiHTKxGNu2umu46KVjkPejjvS13ZmsmzBraBazhpxirz695NNYBVjaTFhLNGWV",
  "key6": "27RF98qQ74HKorpwdCu7wHwrVk1kRsUcmdLKU75P3RZevpGncNVJqPE3Y4QvVF6oC4NE9ndwuxb3KxwFVhzA6zSJ",
  "key7": "9u7HveuM5w7HPyV7hXqs49hpT8iYrkrWnqm5Gp1YyTE5zh7XD38evSs3nyVrMhKquCkMDWQeJxxYFWuvLaDSWsQ",
  "key8": "4Xk5ePejV4fALh8mYQj5NLgTDTqb7SH6JhcowKCQGdEgVRLcdNKGs76xBhazx3q5dpbrhewuhyTqJhtSypowrvH5",
  "key9": "29wQNfSpuaJRKgAQckw2ypzsUVufPPHz7FyGGnJdFHXF5MMrps5qQoy88bEgU85J925ygTtUAyLGZ7Kn3uUZHRr8",
  "key10": "4bcSg3gvUxRUKEgJFLR1qVdPPCQ7Y8GMjfrfYXjLBFz3qqpDoRXdcVNnTHNquVyt8kNEb9DE7BMiqSpHpVFt3Kg6",
  "key11": "4VFbNTGXrBoD8dcqqzZhDdW6tbCQ6PZPRGUmWosapA1gbXUMwx3a9F1bzhjWE92m3js3UBCR3n4ipaCMGtLCHLmu",
  "key12": "5KowN7k8yDwuzCS3L5Xk9cKMU5MJrWW1RwFifYjmDL6t1fNto7R7LV8rKgaL3tdyEg3Ce4wH25d2KNBmpeEC61Wb",
  "key13": "G2tfao2vw38GTot5PijQKjW1LFZqHJCMZqSKMsCEvVGXskymPRyeAUGMtTjCXDMpQEjRvGAzTQoCXnu1cT2v4xh",
  "key14": "2XK77QAoZhwhyNB1JfydAiQ4js9x5cnwuNkPdN4JqYpwHUpX4VpbLNhcYmaTPsRNx1cxA1S3iVZvHRwYCUiiyj8a",
  "key15": "xvN2KstcjHyHBKRV6T51CFRK4eapwJa76Z56ngbzFVhNRUQiutuqEy5CdruXE83k9gyinYbTxp9DeDV2J1ybqxr",
  "key16": "FQHPt3f1hCmwwsrNNJHVUw81CLZothy43Eqr4kKcAAMsczevfLecNJYAWHkGrS66rvsTQmA8Xj9v5sCiMojsHSR",
  "key17": "5ED9M8g3h23MPxHAdn31PZgkAryvWGSz9QzqoNtzzx9eCQJyidU1Rwjhx23ENek1KhN7v9L3Z4fxPFmZRw3RmbLm",
  "key18": "2v6PdeHkArJzjb3QBW1M1wjRzbgAsLGQZ4R6z5qxqEsd3CetAciaYVyNks3tr9hPiFWBrvychrj2riZ7UFuqLKDV",
  "key19": "h5A45Kg3KQaBkZ8fxqFJX5yym7DTDUDC8jUTmYcrbeEep32T2LwLuVBdjAaiMwUL1E3ZWeFF5MvnDVqnFvQtQ1R",
  "key20": "2nF93hYASzk8QvEoQKP92YcXpCfL9nkwPuZndQTMFm39fsV4qAbykJ75AXeXtmiYsWVtEg1XRPhyxZNRv4TtveYb",
  "key21": "w98KBLJKwxDHxsbH9B1qkwSRSJpj9dvp9EUSgvFzHgc4NgtAjvsYY4Zi4yw5BLDVV6Y58RSaj6godycUhHkRLUu",
  "key22": "2ogXMcFhuq7xcpdKTqTUWdnzcQ4An5Wju4UVRyzw1tWt9XH2iaBZ8cxLDNG3BEEqKnAMb85Bz5qxExnk3w42nko8",
  "key23": "5zvwSjjUdwEV7NVCdEbyHD4YKBjaN9vrV9DmNpHS5hpvzL78YBKSBAE4GrdzXDR9xQNkRZgDgpBfW1a6ULvJGRAP",
  "key24": "5sZYYbSTageN2Y3xwK2ezxgLRiFxKHwZSCbyNM7UeCAj5TEfVpbbq4E9STguFJX8E83WuZAXHnfeFgnaZuyiuuau",
  "key25": "ZTMKja6zxPU7smWh3aDTFmYSUmFY7oH6dUGvJ3twVN6rWnWz41XndFGrj1mZEVR7ijP8AD1fp2BPYUmUc4hw7qm",
  "key26": "315Yxw5XJ1M1UxB446c9r51fTehMQFQtGoChLfFCURwXcTqiKNY8rrY2ZFXjHDFaENdF18RwL8nyz8Jk2Z9pNA2J",
  "key27": "4EmYhJ2gFC1FKaD74HbHfaBShNqthkCKdomzacLSJdj61ox6W1TmE7LMBijscv1RuovJcCYGWmPmbMJzKR2uuUYH",
  "key28": "4WazEa94d9LrCYn8FcWd5tDsBKNStx8nq7gbQuQRbSE2jqrMqkWHt9PmvMcpMDgayPHRCXLjHshPvfaoAgMkMJbX",
  "key29": "NLfP2oqB8C6HdSigAFw4zTkiVLDApJWV25Rc6SoYjbnQW6ubdfh4NRHFmNwF2Abg1SW4JNZhQJ9FUHY8gvXivL9",
  "key30": "431b1b2ZpCic76j1SKpHRJw8ygrtJ7jAqx7pMHAiUtHNV7Q7U2RhXiJ6pj3SxJbDJuYjqbkCPFiSJP1zeUScaCgy",
  "key31": "5VoSLm7MvX647QQr8KFTvooTHMYyRjPowtYgk1cMckyTHLpwDLo6Hc1XE83xp5qrRjCCxumvy6Zm1UCDUd2Gco56",
  "key32": "5qNMu6NCsTqX7gx4rS3QEiQ4sxm6So5TgxeDjHpJibYrsb8Pp9hasSqGHqzMUN6QXZ97zY5eUAosR57TZgPennLj"
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
