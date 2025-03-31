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
    "3x1Rq4xRmGRupmcJGrB9GU5xRYyL37CMqRAKdQG8gTcSMXzMRjiRCQrbPfQCTqRQWnVHAJtk4pcbP1siKwqvr1tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ajb4RRPVFTFJmUL2z7g1ZF6SVmbdzgKy4cR94beiVF8QgXCy69rwMmTpWdTvmF2CdHh3ftLpSdevYfygZv6jMgS",
  "key1": "2jYaxfrJd8ZyzQ8mLCASMVYV9XG6JzybCEyoo1c9XXyBr8VMDm3zxKNmKrFFoRikjgukuCFoghjkNRq9waznjTmR",
  "key2": "aBGAkZTD79W7AHXzmaj9RDXu1LT1p6vxJ2poYBVqK1fvvik8s62wK1268s7JECB7v7WxNsG469JWRdRmvBZhJA1",
  "key3": "ShrEUhcf3KzrVzWfb2moB5Vbjkoqz1fiPXdhA5CWpa9EKY2nhvL9qMteqmGVLNmsPWWA7hVFGwRAfrHnvBKG3Rb",
  "key4": "5bJdRo7pT7kaF23Pxdtbbw58zL8ezCRWAmVdqnNbfqGK5VYUSd3uZF64KcTMe5d2pfYkFEuXi11FpJWZwL5bqUxD",
  "key5": "5aYuzozFWuhTqiLfPTBS1DQgyeNCPrJA99qX9QQCzS1RdcjYfG1WhZeUw8Nn9S2igXKvj3gBbLzJwTffb79w8DpA",
  "key6": "2MRuPGTFcqtUwCnZY53Ctv8ukejsB8F9HkNoE46ePHXuawdHtbGG7RhWp8KUSL9odeHyQKRkH7QBr9JSwLMGAFVq",
  "key7": "4R8DuVUa1KG1hK4DuzL9dkaYktDNLrRziBBZvE6me7amn92DBXiYJb2aXTQtYTH89xZGAmjSqDVFK5V9Gu6KDuLB",
  "key8": "36fkfxWeVN5BmLBso2fxWEU3W61RMTzjwzpXodrj46Xc7P1hpvxwmkXxjyYiFWq18ngBKyiLXgpo1xrnjnoo8SNB",
  "key9": "313ivFH48iEKwVXQPgaBDWmodcgqka78u5TFPwjATkzp3gRY78eQoy3dcuAmdYA7wAsz4Cp4DHzTL8uim584t1Aq",
  "key10": "2ogLHgbPXb3ArPj8a2kX7vironLtZMmcayR9y6E26D5w1FtXfCgW8oWmz8mQKhbKFDsj3J3iV8g1c8Et8dwSV7fe",
  "key11": "4qYHJ9hzQPyH2ku18sc3fYGhWLsUVBTcAiWTikFKa1hjzA3BSHDY2D2RtDoU2fodJv6w2oPAyCENP1zHqKRxc32d",
  "key12": "5E5vFmnbWvJqKub6RWWeiYtxHm9Uvx6TLHZcvaiVW7Sd2Sbc8GikH2Wzj9e27ZyMr9q6o6hjKkXJJJieDhqNUxaK",
  "key13": "3HeWtnHAia8UwfDWANtqEJdcX8P5tzfKE52TdxUdXeDjJDxWrAu354zKBh2TSjKc5HaNJrrgdTURd8479McfsCqZ",
  "key14": "3MeN76DfTDwo7s97LCDMkkr8S22aH8zYX7F18PvF8czyy93XWHM2yc5XiLh8MnpbCp65hZm9qJNsZk6yt5ZCS4ze",
  "key15": "mwv5MMXm65tG9aiuSYhicoCEW8HhWgZQe3tLr38fhw3R7m1dxELrXtDfLoBq1VVwL2UHPeqJ6mEnrimnye3eNaw",
  "key16": "FuUq747cKVPpi3mNq1JJM9N4soPRRvR1hGvLgGSqnKfoxmbhGCVrYLcvMnwphu7GmaFMiQfkB2vEntjYQyK6YuC",
  "key17": "4jbd2wfdJycNVFfkSxSp7kBSsxMh8UjhXPUhm1GQRjf3VhbhWtueh4PjUqCB7xb3zXTmSKmjy4wf29kMjGUVyKME",
  "key18": "JjX9uhVpxTUnk4upXoFXEMfvymdpVEra6yXVxjZZCGZkrq6AnbdGmvQoxTS2vkLFsuWtvngK9Un28fd9ms5oJyT",
  "key19": "5LXXCteyrjJHZq5wR59TGpG8S3EJga8tGHhDmVrgKNgKqJDyhxEq1gYYSeZJv3YGEhSMaM4sdK8Z5tCAhWQU1mZk",
  "key20": "4zyjotUwh8dr6sBcuuLpewru3rPttyBtgS3F1tgsmdYLVSPGEKwBgYQihVeLYhZbbBZ7A8vbGRvMbH7brxNvV8g1",
  "key21": "4r5CtXtTA9y9dAbfJqWxtUbsjidDCbjXMAnRiD11ZGxcYZv2HuVJzq4h6NgKYWj8oLtBR89UJgFrZS4whtkVH1s5",
  "key22": "51K7YpGBEX76tXwvbjCaaz4x4qjWazCkdjgssYxnYLzBiNWhjkoaousDDdi2ysodcu2zxSg6tid4Av7i7Xdte4UG",
  "key23": "4mfXnHLuqj2qtfhwGmHEZEkjf9XGEA5KtxbKBdDSGMdvYRkGbYF7aNCpYn91Du2VbuXnT6BxB6iiQiVJDWs2ZxAA",
  "key24": "3DVGRGLVwFzYzgVSVyVpqS1VH6zVedBgnaPkDKHViwG1CRstxppw8KsV5mg49ffDJ9KidNmmvcRxxMEmE2L8SVEn",
  "key25": "2EmunTq3XKavYRZMKaZYdKodLCfK2NEDXCdLeJNFx3zcKhtZiavCfhRjtBst3ZKqmXxv1fVjj7WpnFNUyqtPz1FU",
  "key26": "3wZb5eE9RU8xMhFPNWz1yAeovKdvc4UmUWfz4BugqM4S2MgW8YvP1xnauUWjFUe6LPcNRPwdz9gmrujqe8zcpZNm",
  "key27": "jhM3hWGNGbG8b9T94a6699n97Jui5iEwV2hcJz6Sv3HugiUDN1zqvJkfuCF4L99RzxGFgJW684NLS4kAuFsinQA",
  "key28": "4Gy5oR2VEPaLELJpeRUejiuGaF1CQh6ApqrahWSAbXW8T4XSSfapsfp7kPnF48Z5AY8LcAvqRCr7vPhxZ47MLJTg",
  "key29": "ZCsMqMVXV3yU6rBuyQRVnYxdve57pAHWiYHqscfXCTpJLnmkWTrfVGTyPSNDMK29YLHrL4vwBtr9HgD7L3rjJ9Z",
  "key30": "5X9FS1RafhVegrYRu7aP7Ru21t7NSPa1DDBuHnHM2MGKWd4ofSec3BDH2QHmNeW6ohErfEmABkyTw1a3HHUFP3iv",
  "key31": "3diWJg1cmJ2RT4Qs82gTXhjLzU8E9kJvnuanj84eMYQ7cLheFB3qqpWVLH6xTgP3D5ZwnoAfmwfeaQGvPiKTFg4R"
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
