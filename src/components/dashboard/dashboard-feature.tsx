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
    "2TWaqs7WvjRcTs9jQdpS3edEj1tNw3spvXCgPvuYBgVkg6xMZ6JRWLHBkE6tH83NujeyYML8LztaX9z6sEr6Gcgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoVqqpiBXrE5SU8RrCWydod6e9tkXJWgHmrcqQWCWqzq9hupWAAPk6GaWCpstUB4uwYw5mhJviMU6rxWhkSjtcs",
  "key1": "2nHwRvEALPq8Wipni3ujvYr4GHuSRYDQejux1LirXL3wsjLun9kuFXBe17v7C1WKMHAhwobaRFehqNwHSysVGCEa",
  "key2": "54zuUBLmUySBrQbNGJ9iBWhazwTGmrFuh2UFSq4uvm5ispETcA38TdzVj718uLfxx2a71CtJfbez3Dpz4fiFCcXp",
  "key3": "5zYQroUn9pXzCcb92nM5bWRhVgbSp7KGxNzSTpZwZxcFnozMz5isKWa1k5soAZYL3i97anqSFzAKo9vVMtQkmP5D",
  "key4": "3aw2oKiEs3x7xbc34E6yms4NuGA33HwYcZpsRzraG8gLxnQGFVRNtCHfKZ68NZSZ5AAyUkhqNGqAsbYMo3WTZtNc",
  "key5": "rAxE4bTm5gCV2R4P8V7rsd4L86orRxKXPg897XxEi7GnuzwQxsZFFY2ki69GWQZ6Mp9Ehpazb1HYZs3acvYzXXB",
  "key6": "QH8wccQZsWKQRtGRfWfUKgKNDjvhRv3V3rJfmSYLNymRkGB5GKFnYHNsDggCjdowSph5m9dUUQV21BHZn9TfVEX",
  "key7": "3sTfo7YAeJfhj2hxk1M8AntufPD8dzfZ2jxdgyUgC8n5pYZjxkhSBwW1qwAXsPHZn3t3QYHPhBK3kQf1FPBPZ1fa",
  "key8": "3sEtQrCvjwcDCb8vygdfdEy9orRinvAg2suXocFD44AkNEHZR4jvbXksqcFUCpiq1JCNCTm1USHX7qVnEPgUaNXh",
  "key9": "4KxbZMnJ5zHK7qadjVjcAzwAjTfcdiqg3LTtovCdXg3BWWvmSVZtLMpDp5nAVMYDb75fLo3jZHza5Jt7WzpWZB7L",
  "key10": "3atYxBdsDiw9MUs5LzhukVaHJ9G2KmTp73FCJwySaU2by6wKz7iYporHMFeaFK2RNnm3p85DSyrH8EcWN8t9nNib",
  "key11": "33nP3BjgSKPRjiiX4RgfzdnRPrXRD15at21FPKDJLs5ndqygZuKy8j18dk8vAxorpCz2DswZZ4z4s8kQ1PVL6FwH",
  "key12": "66YTHgi5C3JdXDyGrPFpkU7VM9fFpp9wHSYVUm6EU4T41Ym2dktM2Ki9MMomVtFCfGUT3wSQtM4Gjie6haLysXuM",
  "key13": "2wtV3B5m5BMVxgPS64n1Tar9JTkjPk2s7rQvojiGc4ZkM5U4jcR1Z9mPS6an92Lpa9z6z1iEn8CBfPWEQfpctTGh",
  "key14": "4VhJ3K1TH5pc5oa7cMD7gsaLdVJdmKECDF7YAG7wjkUeFZ64HER8r9ix2LXecCaiMugFBGyaAGUKFeF8gC1SrCd5",
  "key15": "2HHdmd5EsKNAs5je8fSztneGoMwWjwT1uscEiSaKQpr2fsbrTv2d8FJ8rpBhrWABZAyW7bwvq6n4diSfyZKVyZpC",
  "key16": "dppzV2rJTghkz5vM4tWuLEtJtxAuC7eJRbmH8jVSrPVUQ5mnjTSJkaBn6e8gR2aCew6EShhib4sCSkwLpsFWyGB",
  "key17": "5jM7WTEmxFNJAtTA6mBEysERisnkKexzgHCTZnj2UUf4mPdBb5jMGnJuQZYfem9AT8WeYBFY6Lp2kDxbs8F719x4",
  "key18": "21qvPaE2L7VF6o1mc8ZJg3jMf2EK2xXzKHHridxQ4GFdjxzGFo8jg8G3JUSerk2RJZFs2hpduosfbmmqzU69guQ7",
  "key19": "3smidHD24GnFqLcaDBpb5CXsA9nnwhpeSPVMR3fEaQcrJkp4qn7kRPryEwR6PLbprsRsn9PXpVH68o8o7D3FyQqc",
  "key20": "4K12evbxKPk7NuGKPof3TFikbsqE5XQyjDUF9A9n5nEwYxD9EofhE5GpsU87gDTW1NCe6AQkyceW9zyYgW9DbgZk",
  "key21": "kg6CY8MUqTxtQTpgajJuATjXiiPY9bKrfbrwKyp7zWSqwARmRTUBKRdmDZHExTosY8LSRKDuGCYjunjyuroMUe7",
  "key22": "2f1MghsZwEKpWEcFnkASHNtRtkmP8TTw4sPEnpabEkJP3uS2jK1KqVhm18UUDdJaXgLRkHm3SA2A3KXNYaw4ysGh",
  "key23": "51jTte6T1YkvBs2c6MhPGDHQMB994PYneZm39d1RJdWXNj3cx23kDWbHyoRNniA8ic9SRtHrb9KSqrngDxdVP8yc",
  "key24": "3Et5ToKdx4cCrm7iTb6UeY6qKJqAdSXh4i94kL8gGb7ywU4YZFL1ZFJU19Dm45WXiBvr575UUSJpzvPG8ntDvKyt",
  "key25": "5J7Vu6BB8JEFKLwP8XYvjLjmXLv6mzX84JTDSixkhtLitTznnEBH6RK5SPXptXRNaeFJG1g49rGVsRyAcQhZx286"
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
