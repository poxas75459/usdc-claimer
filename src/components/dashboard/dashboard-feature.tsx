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
    "5NwGTKetzt2bTG81qnFvifwyvv4vAo4Qz6zKXGmM17KWYnPLw4iBxkTjYxtooxBKaTi4Wd422J6YMjMQZpMUEMhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bb9zuisxnGWhj1YEWCegrbyyT1VSgCMS2TaeoDCbvjatxF78DRckVLAvq4jdHLincim73fAtrq1enoffYf3z3XH",
  "key1": "5zvKQ8LpnCBzZE6vqybxwM2oWMK156yKsHLZjyAME9RTsanxVzZTfA2SqfAzjkadqo3n6GwQtGATxEuVm5LMe7CA",
  "key2": "EgZR7fBvLDs6X2atzYfcrkKN4DgVmo6FjBE1KxN8WWBzm5maqhwoKPK2poU517d8miKmmRxzfywWqX7NLpmMTr8",
  "key3": "3EwGnDxKCzFSSdd5udP66k4s3kVGgB8XCJGxaHpVFRPTnYieyKYHVXiE77msx5fekkMF5aQZwgKPtQsm6queUjkk",
  "key4": "3f1YwJZVxnTtZ5HdybUJjEY5Dpg5WRzDh5KSGDFqBzjyRJcb2D6whb1TxAL3ogNSPkYpVsdioqKymbRU8mgYc14n",
  "key5": "4hQC7PyTaxuyNiNrEbBYzbAaxshuQzWtK2iL2Ya9hbm2bCMVkDFjNqKUGnDRNBSBGiTsjDRgX2uqgsWdH35GCYfk",
  "key6": "3TBCsJysXMd8gXthM3UE7Rxe3izb7sud1VzAAfL9kacp6TL41hqkfxvSPPKuL9Uf9J4Zu7zKG6526sG2BLc8pfZF",
  "key7": "4fMKNY9Zj8JJPxFbsx4TXb3gMCRGcYqEUTJuUmtyRUfc46GGrEh4JvQRENV7f3Gt4ZigVz6wvVNj5L2Ko4x7oiJi",
  "key8": "rdNsEvdaPDSzabSHrpe8Yxx46LpvnWsZYc8r2tnh7Yjxc3ahC93K3nxavCyC6pbKdtG5wEaPZv1Wzu32EaLimx7",
  "key9": "4zH7qgHoiTCwKC6R9sKYwYBg5ddNfiCydrx8VnEYoyaoCXUjfFojUFP7GAE1soTx6mK8bRmHM1uLY9Lfots2HnPB",
  "key10": "4QeZFM9M4yG22tJ95dz6YqCQt4EBK7ZqrJ2QC1ijWWUpEPk5iYQXmPrTRaGPW5j11g7UkLZiTB3xKefPyRK25uwD",
  "key11": "2f5jDKHt73tfYR7EGpujPYBrvhBBcQNtZvX9TodvgTLw6kwQCzDrjvHEfkCw6c5aaCMrStGc3kJ2BNxFmpAdPcW2",
  "key12": "8GJbzL15jcXr4Z8vTbTtjVxCvD5mYTKZ5vdczuZXxh49GwhrigUebd6oEZzADyRxwYvw6fxE4MFia9u7DeBku27",
  "key13": "c56etgNjxdHiDL8nhvTgXUxWebZRjkWCro4unof6B2knC8hYRUAucUGsHCK634CshnSAgQuK4n1JCv8onVFhHe2",
  "key14": "3Vi7As9iiLwTzbgaN176Q8TpckKEahrwpLHQFVrriZ1JuRoQjxf4VMzcbXR4kR5Qg2NK1FJnWWTYjJF24F9uENsn",
  "key15": "4QHJSS4guRHcJwZJ3pa14G3uPtiJSNV97DLNU8z84suMnqARUdSi8Rrgs42KpPNcZywrdtspwMmaikibm2EreuyV",
  "key16": "uVHx4SxqAxj1ywKisoTbHZgpv7d3wUrXBtGi8G1kW4zRN5xATbUp8pUsmkTa9afmGkov447Egp44oT5nnyNGNAk",
  "key17": "2e88M4jDCU6M9jo4uovvZsfMLanUadqFFiqMRZ9g1g4icJuSSP1ocu45gnzTGU38gBTP1q9p6PVCGZigKf5d1yYp",
  "key18": "gsfNVkqj3hTLQDkPH3xUhzQPttBSBwePJaReYwLdca4x48TRvhNJszNHAvTDbNWerafCXZW3TBgPsgHknBNoNn2",
  "key19": "bxtQzAwAmv1PjKaJvJx39LnwRE1Z9zZeqSRoDnsAttyhBLiSqKFGg67dDohYvf2Z4uyS6Q4iVKHrwPcWFXS42o8",
  "key20": "2RSyj54zvZBKAJQi3EN8ZimX1oqXwFVySNwsmwdNLPmekcgtEeUuTjC7aPppKW25RJLPc8k7JZskmniV52HajtZy",
  "key21": "5pfMPNKGq5jAk6dUZrpqEDwBjuCrZwSC55Q34WL9e4kida7Eb7CgNnipsWNhgK86iqZ4LrnGzSFAuu7KTShqQz2D",
  "key22": "5w9Ej8p3X6wEWCPgBnNVUXS5V8zWgBx9rVRU3ESTTF3E2jzjLBKaMFLyrefjtb5WhDtXAnq8ecHrc8BJw7BLWTrD",
  "key23": "5WwJ8yHyXZAA3YEp9ZU1E1wdx9fsJDSM6K3omLJyQXk11doqTekSfsFvk1dcytSaRAyotvg3iA4QghCSZq7fkYk1",
  "key24": "58qexzfPW834g4iHmWgcYqpnq8696hEBAp2sMhm5rzzQqb9Sqv4MZbQyCeXfneV4qiyYBHTJts5ZhVV4MTbP22GZ",
  "key25": "EfhrrfAL8MshborbR6iaeeGYoczohLVsDUXeeKhvrg6Px45Ss4Lr19oefh65tSdajLw8ZyQJYhkKgaTxyU33Fzg",
  "key26": "4bKjvHyaHotDp1SJS3ne872qEP5yqcagpSNk4xZT2uZfWdMfwRxHC4tnNvjYenWzJquunCE428vqAC9hANXYNash"
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
