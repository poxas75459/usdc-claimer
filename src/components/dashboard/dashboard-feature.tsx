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
    "2dXQzTwRod7bRK4JXQvH1pLDAq9VX4Pf16eQaMZdK2bfb3rTw2tjDNz4YcyD5XXZkCudqTwtLGwtAHvjrRePqwRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MjEqWWme9cPSvBFcRvyeb29KNpk5XEyWKeCyhQEGW7dMCc8VjGPYdNjVnyKw23uHZH3GDBeV9fqMCcCqeFTeeL9",
  "key1": "2qHy7dbpkEkdciNtZbKNhvPo7gUoEg38RFCZbxz9aTJEQ2Gek4njuoXCVtSD6UDTKKWBta3uhNWPQx4F6vxYn8Ku",
  "key2": "w5mecwnnGk31fseXQCPSt6J19hdkZj4ZpwRyG9yj8hcbHvEAS8cjMe2QjXMHyzZdu2fRirKhnC3BsJeT72pU55P",
  "key3": "51zJ2XrW83UGeRHtQow36LEN2NGuY7V2qEf3rNMP1ndLkkgevoTtACDQ4y7EBuRdHFoFznQbt2nqWkSkjcJb3bCr",
  "key4": "4qXMDEA1HkgUoJ9DZe2N3UvKvo42RaYgBRXEbegvjvm6vPSm8FyNxcEBWW94ZiR1BTVFEDfkb23mXFHMV17arqEV",
  "key5": "3SWkPoRVXqCsZT7mkJapXQbKVg34zLZjFrdDNzgKzdThKcmp7R4mc8ypPN49vHU7LWhHtszZEKTTHMVNSSThWrwG",
  "key6": "4FH1RMYJadcSLqQhxbGbUAP4GjUpCiRez8HPTDNP4aHZ9t8WP1JHMhLLTWQQmybZmj6c7k13SfFFcWps1tRR6tDE",
  "key7": "2XdWetWTrnMNimQsL8LF328P8CEd6wBJgCD4ca1QrMUJjRWqZbNGnzsbN3tVyd1HrwfKhkgeZHCQB1x697fDxYmF",
  "key8": "5gJsRBGkJo4oN53SphFPGgmjhJzMGkn2h6MqCXb3NQHtEnem7MxkJeeRGiUzc2VEUhmLTxWJ2BNmWVVPb4gBy3JW",
  "key9": "5xSJ7fCRSs1MeRwNkFSGAw2G1QwxiQbsATQrvPi6UFS5Fc7Jdh8DUXXZJArgeSv3VKnakvqBQMwvig8cNwGkqwr9",
  "key10": "4E3hwmcGj9V81jDwtHzoohqwBsJftk49nT7oa3JRWiKECnHSdtZAcU1WTjYJWo8A6BpNsdkSpfJVS9ggU6YtLjsC",
  "key11": "3sSkgGPCJgfqhEVAbyqEfYGssZEVkcmxMhWvxw6FcKywHgk3rSE63BRuDFdegzzNQ23wuH3a3sQskE6n9LDyW5jr",
  "key12": "HgibMNtVcXhvYaawyCBbtUDirRcWVbAStEvAgoE9Xze3x7wtMus31TSZBmpAu6irjMsRDm8xn73oNrdbi2g8Sgm",
  "key13": "5zrANTyMmeAf5FinJtPbyecbBGZDJpKKWBPUod55zu9S9t5YU2zia7wjz8goyGW8VxjLfsJ2soKaSNNX7E32C9i6",
  "key14": "5bLAtpqwvXJsuWuDhn1zoZBMCfyy8qpMwkQnkzpqA1NhSFao24YiK6YY8hiMFrBqJ6wmZcFZVzD8Wq1gZnV61g11",
  "key15": "4JmsQLrgheGrNxFsuSnE9YiEj3Xkmp5gyybwQNEBKxmfTKf6RPusWCr74CyMrMBmvmkFAZ1Fdumhjhr9qdTKyk4G",
  "key16": "2KqSVzttzcMyuLXco4e3moz6evCsLdtRgeyFHesaUJnNPzSt79CtDpcmitHSAJHT8hG5giF3ix39x1rQwzFw4XeU",
  "key17": "5nnzUDVwVHECDQKyx2qfvLGAh89nU4jzxMZojiKLc5ozeD94nGbYRLYFBgMu8HiVWchNuouLRG846bks4WHA5wYs",
  "key18": "5odHS1u4CzxjVJipP7QPRZs9LTjH7F41i2eGLFBgbzZvh5B1MW3jSKYtpG8yg6fKDufysyWV6s53PGHpVcSficm6",
  "key19": "5QCNVG1fjRmcv9YQo3dcqMbXvb77T4HweTpxLc7U4eRFgv8rJfJRnNahu972tgTwLeihiLxtZ5vLpPPmAwoJBVBw",
  "key20": "5sJ4PMyf3uVi8ojSxPakroDZtqez7rm2ififKKqriPRZbNAdkXJ3cwg6FCDwNHo2k83fHgUZziMK4NTKUADjkyLV",
  "key21": "216d3GqykqvTssGk3BrCuJxHu3RaJNsWsGQRKfaq2TBvHdxESLffJUWAjThW3b9v2uqQMkEmLdd5xhharxCv7Pt6",
  "key22": "shjY4ncFRuXTLy6djLQnz7T3kNXeCUF8AVHVxJUeb2BwPQUDMSKKDi6asGJfqrU1uFNyi72z3TfN3ZmHCgPN3vp",
  "key23": "514e1emZxTwgHuD5wBEDP9u3e6YEdAQurg4uCzqntfrrnbbv5VeQSCcBAyfnubkZjZJbX6q58ykvvGvkyusS6hYY",
  "key24": "5L98jRCooxuGwNDoMnRggG7Y48XQ2gx9tMqHVokz9MMFY4XS2GW12SfgSdC7L6pBzGbrZmWFMecLYQSdbF64cUwp",
  "key25": "21GGw9a76TnwcjaZQTQYBj6QvbLDCj6yeExmfxgtM28Hxx5KhKwaiK7LXxqepaLboC4byThFGQtRMfPXBzmbVPJJ",
  "key26": "44VxtWaEQnCGmGVA8fNNAYEnJVyXohS189H2DRJkU9nAuXPbquysGFjFyXkPkkv2xi8xvfYqNnzxZNQCSU3eanPY",
  "key27": "2ZqS3AGzp111CCwhcMFrtawsQoCnX5ht2zEuvyJCYE3kp77gGVAChgDCe4zWTw9mwfARPvn7mVntKHvnHPaJU2fg",
  "key28": "4v4CsqEnbQvmsGAcUQBgXeSNpzAnSbkJD2QAaqXMuQcdDasRCaSckP6gmUpfLdhzQxsqdATQDJGiafzBbPngvBEz",
  "key29": "2UbvpanBq5JXtdSoEz5z6XFPnT8VnhX7tJJcDgz8eiZnGCcpzQWdbXPGtVGTRmmHVtr6wDFBjJ8tucwNeU8wvfX7"
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
