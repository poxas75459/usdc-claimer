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
    "hfy2inVazFgecVpJAJPm7oqPKm5x3W2VASuyjdTgkixLnHqb8F8twpKDUbrhJJtVgit3nzgDKvrUfWH7Np3ZzXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbC8LyE66opxukf2RZBcFuKYQqx7UhVvbtDLDEMeY7naqxuiW3VYQV27N12qwcVNVVYmmUbS3BHpig5AqRwVLWD",
  "key1": "58NxeQ8FqSMnny9cHJo83im9A9prfSVvasmRxfZsBCFWSeJPx5EHTfx4d4P5qgetPVzY5hPmaHi6n3wXiyouh6Zw",
  "key2": "55ga4Y8kJhMweUNfRHHvjsve133SLazXEmGdKA85mvvWbQLW5fSpC2UbsjHLQ3b5PoKQ4Nm7So5SF3GR9uRbYYXU",
  "key3": "3YZm9AX4hSPWRoxJ6UdZHUfWUxfyXW6v9fi8eknZM7owt8jxAyjS6CMyF52TTYfGfb1uY5zzxosGpHAdeM6GiTo6",
  "key4": "34DHG99zDZ57WH1SxHeU2eyPheuqZKtUKXFWzZLsrhLQrkMJqdGUYktkz44snxyq8vbSzs8r2CNqmdemuYguoEJL",
  "key5": "3YsGaLa6S6XUBgtxV75q4aGXLaY62t4srEp1GpbregBLAzR74NyMDngMNjVdYnU3HzofV94JeJSdp652jnkA1nRG",
  "key6": "2xxtT6Df9zdYKfA1Jy3G5HHFUX6wyFP41aXwZr8YcCwPnxjrEzZeuYcKJADFQcnt2GWiNHeoEFmwjCGUDFyHKPZL",
  "key7": "5xZ5vpWKFZSqDrWUafNZpsXymYdTABmmJSXJrKqXvZrBXy5hM9WBY2mj5FyS3GFXUHuVYJZWofZJ11dbN7x6HsoE",
  "key8": "5Tucj2pMckMorKxD9s99zwwv84YoeR2cnqotpFpZrghPRkx8yMgCpGpPLkBtowBQ22iCV9BhNoq8q7yuu1s15RhS",
  "key9": "wy7czCwY1JS6FMhPDbMuiHTbZ2zDAdrNY8KDCrr8diZ9AKeBjQUm9Np4XC2JL4g8EkVRoqudBVgTgQC1xZTo5Ns",
  "key10": "3MDdi4w4oFjC2aQGb5GggHxgCH91sEfZ6Uqog16vLG1UidJpgJF3ehJN3LfkowHxthNAvg9vKpKcJGC9zwzYL1jn",
  "key11": "35RSom5uby2GrQWrtVc4PEZsbZUTbDaHoRyWUG8uQ7MwxeCzerAD7eyR9pPtqWQwAvwTw5VWirfSZjGrBokMPUAb",
  "key12": "5scQsPekigrydTN7Hcb1iS14LWcLSK8wx1mmvHF49GZNA5TjsCLKUbDprrEsUy3XBDWATQzgHPiu3s3RsxZqSy7f",
  "key13": "3B5bijVGMg9EVvA1JDBXE4bricQm5zunVBwKSsTau3Ys1vzcukZ2hw85m4fJjQQ3Khfmrymr4ithjrErgpSHHP45",
  "key14": "DTfzFJAjpWzvRmX27VpYYMikbSaF3wP3GBaHgCXqQCmw39HWvhm2TA4tc36ECbCSbEJdhdJE19BGyGMTTtGmHsA",
  "key15": "2LSXfHv7ioAYsus2z1JhUrU47bDxciTGLWCYVf8MNbxjV46wacLKUwAUE5U2FGiTu9RJgYRigYaGuo5R2RiD4tD1",
  "key16": "svXntpgX3arW1emwydQ74hpYUJmAwsqKaib8xFyiDQWiiuv3VFGTsa2vVvwBEgE2kzgNb4GCuMQVvuuUrcobbP6",
  "key17": "3mi9kVv74UzMc4zGMYgkKLoYPiTb3f4v53rakKHngbD4fa1uK5MQC6z9nsZ6fUk9LvX8i9G8ZyRNxJUGoLw4ue3w",
  "key18": "129QVyzFaK2njNHry4bnij6LdCc3PBEKM74digQuYB6hdzRkYszLtzpo4ERHEWzJYyJop1AisG3R1pMGhQbmseaj",
  "key19": "qqRLSi3C1Knw2W1zqrxRcuwZEV6AhXXmcTGRVd8fvModomBvakkXSxcb4Rud8THViB9QRop9ynERkv62qN5Bq4f",
  "key20": "3yaKtM47M6SFWH9V7XT3tfCm6nCKtfwij11EdXnmnhrUxo6YVLywEJnBeggmTE5tuFbaSa69Bp82KuW8utJnCyCv",
  "key21": "3dSh9BuMctjuq9wwpH8kcKHhu6gQMDe2juw5VKRKBmNR7aLrtTHqNyrzJngh86PFqHyAsvEt5BxLYZNZWUgVSLUC",
  "key22": "1g6Goxy3CRQaiwfefjiFWHctGr2gxhn8JAEJwi8QkPeMR2EK7LTaGMinHFfbyn5a7Xxj5sZFPahE88kt87LbhTN",
  "key23": "2gT9cuvvALt5w4igMaALoTeMVHCCbzP3R7E72P2a7jvqe82f9y71UJqxP5owGxdDGQNJpiozQHFKWUPCCT5BdLr6",
  "key24": "3eQ56YWJ2vTZtT6KzC4um3YnMF5JLePvmdjj4g95nJAkpyjvVpPBWv5UwHfDYvz8QTtwuaYmmDdCGc9d7qPqiJgm",
  "key25": "SFwaZhTbizAitExSEYkWeAbWSMxeghs3LGX7Tt54icJ42Sm2p7M4tEYTbE1k1kGxWgMAteE2uxTLsYmGAfRPnnN",
  "key26": "22PzEwxs695jErbb9Xw8uvuzQSwgxMvHDDQiMcdAGkwWwaTEEpqUQjVbMbvHaxu29SMUme1NGM5w7VRpLE3izT67"
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
