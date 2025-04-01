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
    "5povtoshZz8yQwhf5z6z5vg38CPtTgVHcVWG6YJjh3fmU6STkeztBm6UzHeBgw6vRhPFP5GnR6ovHa7tNaojrEXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5qB45s46ie4D3ZSXA4rtC5iCNfBsFUL5vngEpBt953nCVh63bwoFMpoK49EE8eJG4bPYgKHZfviq1HmvffnvXC",
  "key1": "pM2bUXoC15r6Goik4AUugJFxLSkkckr3Z4uQNxLo27ui8M82JjUmnPWbivLx5MLETw3kQkoVPCSZtiHzJ6GbWAS",
  "key2": "5c97yLZiq8YkquUY4jLQxK6yGbckgkJT6FW68JM3kjPJgb71AL7cN9Z3kGaWqT5YgDtZPHB4GxwYwYuTzHw6j7Cv",
  "key3": "2cUd2m2yP3RXF8RagwY9DMPY9qjvJSAVSAzfdJqCCGDchoacTPZ6fRDkEwuWPUaf8BJ7o2BTAYwUrDgcLRfWTF7N",
  "key4": "5544JToP4Q1LLAUEfqLDCv5KfdyVwNE3jhx8Hh2NGftAgQubQwg9L6rdYq1inDUY1Ed5kCtoTc3dDFk8vVSCCMi2",
  "key5": "hXe1g3C6nkBtpBBkXQrPq5RfHLBPQB48eNkVPvKP77ZZQkC6gxMvBmXrjN2P71wrWesEYzHhewcbzqxMfXm2ZZW",
  "key6": "4jrqDJC9dwoQE4k7jK5vAVvK4DtdRwbg2HcPr9szLt7WmuVvHRCdLk13gKjxeLGjhfWjAweidjBV4YVTmQQZ96oB",
  "key7": "28w7GvtPY2463qzikRV6a8F12h6uKppRXrWBnsNsH8KunVvBUmuZJpnazddSjasipwCkMFaHGsSTr4o2PT6CTGFe",
  "key8": "3Me5D4Byf7ARxtE5nMGMV9mWjTQip9nqfP1ne34sJ7AWPctjuwF5bofMxjGQNDg9faxvuyM3e9gr6EZHkutNkBdZ",
  "key9": "vLkcga2fwhUXJtTwwzVakNTHcdmkzcLjGRR4K6A4MPzXAN8ZNWaJ11TynTAPF3JDJGWKfLnhmcgWqPLQ7kdbkki",
  "key10": "4kRMgDJkpyfAAAz6FYGHCak7mVoGP3KQnMm3UKXQSczw18QRA1uaVhyqyE95UA4Xm7sEY9sQYVJHCrg9EHiwJRRG",
  "key11": "5sMbtHi9h7BiEdH2v4WfprtrRzXpA7e7j4cmSmSV5jbhFRWXggrFHAUyzNd3LW6WZBAAkcXafVsEoy6GTQQa8gVA",
  "key12": "3sGwhZpLv9x7v1cDNcteN2SQG7ZxkALm6NNgojajXmKZSvHCpKEPeMrZG2mBCvRqVLz6xgmmX6MuftGmYokqDswQ",
  "key13": "61Ay8mC4PNztAr4NdXgSqdmf1FfWozrdmVWWozTjas3CNtz17PAiVdQzZ3896Fh48YCfGQPKUS32UKLSfYTztDz8",
  "key14": "2xz8FgNGKqPwLWamT94PRk7QZBheKvW1e8QdCQKN5VarV6TuwjDg8DqYqduZk8qqPnW9hn7Y6VPNDkTFZbfLZQD5",
  "key15": "2nFQYpCn2ocHWs822PFMp3nd8653yVNfGcHeVJUAMM5fqJau9XNk3HxcBTQoqAJ6MWiGXc5cyC8VTKQ1aGgS3H5E",
  "key16": "ipzswv16xFcjJyDk5n8vgqCW6k7Pp6WURPwm6VkEXMRExE3bMDwYN86ifAXyLTECXisSsXHkXNn9jv2LttcmqMP",
  "key17": "2CAQint1u9wmb859iBF35544MhyicisU6L46cXtrmh5rx8bqxXPWERJNRsoAYRTP83UVv1yXrzGTbXMiD8VgmGUL",
  "key18": "41faoGMDDJuQVcyMkXTzj2hm3Ccmm7vPcTou5ja9aAi8LuMMx9q9csh6oSdnDBJWT5AxKU2KVQsxgvfmqknD1XVk",
  "key19": "47MFFXpyaJWY9VAN8hBQQDVDGykQy5Ma2SkNkAeFe5NsZ2mVPJ6Hu8d5HH8U9Ey7GtrTRGh2HekPBqvzJaRDhRSP",
  "key20": "57yEMce1izieqUxu7vuTYELQXpu81UDAqjQRCCHJa2dUHrverz5Nj92XR8EgC9rp5XHqdFwXaNpRbhYcvevSVd4",
  "key21": "5Qm7diJ83wre4DJJdrAiQJZrhYFn8tC55MrqKxBKqVNMKRjEDQDSSkDAEPpVtM3aV6hXiYXnAyqar1GN74pfofzr",
  "key22": "42T8HeSDaCPY9B1v6HwUAmfCPHdaM9TVBv8i4DJBBfF9UpZW8NeQ5USZFtg2uh285CZ1pq4hU5TP6zQQLotHAn38",
  "key23": "5iex94VJbeecK3f3yhoM1GDNgHvW6YuKBwAmNfM8HMp1TZYnLGSLHqFwSxQA9Pkphv6kn1YkHttwjNj6DwvYvRgW",
  "key24": "4P1Mod3bD3HoDhjCE8gTE8hYV4ibJLBz8ECYeaeP3LUZW7oAq3w21bWfarMfyHK2jS7d6EFG8sN3WQtazgnZKJFi",
  "key25": "3Y8JC2B7iw5LdGAqnoYzm8UTVHVrNRFQvZzbKUDp4b9WmTGt88ncLRdofkJu7xufFxRad4QbqSS9oW24yoGeaZ6V",
  "key26": "462Ny6mdufdpC1BzuaZBSf1oLMFgeX4m7334CgdS5qRVYA8dr6Nu2prW4NriJKTnQZRNe2BD2cNq1Dzrea23oWkg",
  "key27": "5ygf1K5kwMyqDj3hK5xno9yS755TYG13MT8QMBMQNVqBDzSqiDFRVyXDCwawG7y5hznZXWNKHjcRwRXgS7CV28ck",
  "key28": "2hiuw8nLQcdAtd5TRtFGX1rSLjCZckFwda82mvLCHbPhU7wx1BqKrFkSKdWtDZwfs7NfhDtjDsPXRhGDFxmMbw6B",
  "key29": "2hfFt4sS7e7WXa2dF98kX9LDrpJzjf2G3qu9baiGNT3rGXtSkvkAUE5pTzWMVBzoVw5bR4zpYCgWKyWMRZgFfTPu"
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
