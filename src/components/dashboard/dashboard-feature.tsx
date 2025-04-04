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
    "5cib497Wih5KsTbDok4Pcedcf2dwPC53SkgbSH9pPMR8W1fX4phqBDDWLgAPgHc6BemvuVcpjtku3SzphgiFrWPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275ZEbaZC4dQ9qXHeHPqQfBnHQ6mbdbW2qnG3C4gBUeUxoB9ryc3TucKw2tDQDXZgGC1Akk29fdJbqKdVcZDfJzq",
  "key1": "2ynJkb7VxcFo6MZU9Ez9HnC9Ppoj7614EXvNzdYStw7YFym14EFXUcMjZHTPMKL3J7irX1WZE5cZxSoJ2wDSpefA",
  "key2": "2GygbsBDMet6E21QqGDeAchtgrvpHoZtoWWV3LXi6Sf5RcwPfM9wwm31GzzFk7Ey3Ry4fq66qZGUrzGeChAfS7ba",
  "key3": "5krHbq5ey8cDeBjE911TKPaMq8yVMjEU8akN7fswsyfT1CKiTNHeSdvxbEf1gU6JEs2MqxcqjnmH4vx64M7CJcQz",
  "key4": "34LwGpn83QJHz772hCHJwnzysXDnySFoGo27eTua9xXVNNzdRJiErEHaqmvFoodhQjMRRZXAKd9bvLkcxpD1T1cW",
  "key5": "3P6cxFezWbsbe1ERHCa6vNvWT458FVJmF63h1kV7t5Y8iXsgG9JN5a5BRidM6aRA59ttg4hN7VmfCe5t6KYkhjhd",
  "key6": "2JG3ZuQrXrm8WWqfLwrdaieMxvKQrj8fV2YEGtxjN3YhZTjrJsTBZGMsE4mQPXGsUTB4NcbWs3zXx25jRaAtiJHC",
  "key7": "5Tx2RfaeCpkEBGUfiM2gNi7xBXG4BkHCQo7k7cATSLGpXPQdtwH2x14HxMRWxpFwbzo7s32Yb5zfeB8nbAWUeqEd",
  "key8": "4zq5PUpzoRpFJAjnmF5QZjJVMdRFvQYcqQniqG2CsgY9g56Ef1cgJ62sKsn6woaUjnmyQxUCDSp6VKEKQFXie9c1",
  "key9": "5fexmmehrAz7zPiuH6jnABUF1PNXgwL55AEkVJ2kR4nxTDfhUDpCKGyaK3NxiNoxbaQv7pX49eEt9bPqZKZp6MK",
  "key10": "4Mrk9JZbLdrxRKDqar9ZuyD8qhsudxiQCWLL5fCzhtnTbqaJEWAsn1NE734KTQmU18gVFoED7BEW2SgrYTunsR8S",
  "key11": "3hbKNRnTHPis6v5xaiwxVw5kp44igHaoBCyw6xFpqyfqH9vkRfX5sdCnbb1AqpvGni2kusyFcRkv58tDWyVftnQ9",
  "key12": "2jgrdKXGX8FvjCq81MHjJfDsWeRM7kKp9Y8Y4f4rM9Lisb9BxNXriz2593DZ6yN1xJxBbtaZuf7E2nnm2ugCK7zK",
  "key13": "4wjprwfq4W1wvV8oL6STxfnnfgcEp8UJP6em4X8qHCrEMmN36w2dzVwkZ7r2C1YaLXwD113V2hejYqkGNPMg4DfY",
  "key14": "5KwXU1Y3oVnjzjVHeYnR1ZgZz9VdJky2DQeP1Wb5FXQ2XK7jb2dYCtwFGUW51zrDaCrEkDSSw193LAcd2zbCGzfY",
  "key15": "5s1CgH32mJQukv7vLtbgzi1RbcXvu5Gan4mXmKXDH8CFcTGeqqLgXqvNLTYP9dcszAiz5bEJ8XqYwQLMoauo2hLC",
  "key16": "5FFCb97ZCug8rkuv27ygsRedMycVbK6v3jxm47Px8YPPJaZ16X5ehqwck3HniCi7uh4yRXCrcaZCg8v9DuWCXQDs",
  "key17": "5qUCrrEtE4Fk5VbUM6Xzf9QRoh2AmSS8f4Y3mzrdzwNrg72qQofk6rf6UsU66ex7ZGVKTrKqEwKwpfLJywHiTh1u",
  "key18": "4vfGUGxE8jTy9tsZ36DjVFqqpXBxY3J29pHrgTP3NB4mwNWJMuq2ZRzrV1BsW56RZrfEb6hDfkwwG69k8ZB3UAYV",
  "key19": "4HP9gGo3XZBiYX76yFNV7UwtTFfff63DLHax1GgcHq12ZwGjzhwZzZqFVR7SCj3NKksidS1vqERPe3uRA55R8jQt",
  "key20": "3jHraSWHqhNA4BBz4jouh6fRX7J46sh5NLTio8MzWCaKQxUe8AYBg3VTPjXEtWV1aWhsKQ4MAhxgYjYm1Nej525g",
  "key21": "MxBBYomCRRvrUCXCuvtQpQfzuCLLzBUWUntg8RcqacZRGMV8fQMwLgrAkZqrUbhMsdtniKy75J7T5VzMocAr7o1",
  "key22": "3m3jz6X2V7dn6ed71y2Yz9kmwzpe9169Kky8oxQVmHACcUWMZb4mM5ihrsawGvuC9J4tuSkC9yGh7W3fPkUUDHb2",
  "key23": "49BR7Zc9fFh6QpPzs3Ro8xsEAcLSGHbp4rWkKwP2en5kbPi1kLQoYUvv8bheFcGbLh2RqFij1w1s1iBCG3PyqdnW",
  "key24": "4D7SKgybgk85dodLXtPriauFushr79AHw8eF8Ph7sqMwRGwu3vE7wc5nHVsgh77cSgEFQSRA3ux1Eg4jW4TQqbbz",
  "key25": "5kg3kd7Q4CMi6FdMJGv7BpKrLep628V86KK4AwVcSyichhJ3GwYy6pXun1Zrf96mAQQBaLTZYTeqwRc8WSHVRg9T",
  "key26": "UqBLFYMe3Fcxai6sMqza55mFzYDcQbjHgi1EZMv3eqg4kdWMFEE6Di6PHhrsYyyyfBjEqwKC9tQPVheRqGqqxqN",
  "key27": "4Ub438eKLEA6kyupadsaV8HJjNWN46vxRD2o95u442bUrkcZkGt5TH1GBmkBFLeuXh2s6GyxJEqRsnWs34e5DN5P",
  "key28": "3Rht2X3ddsWuFV2THp1NUYc5TTX53oRifcBDeF49gZJ2Dj6zHKN3oFmkvSYUdoHR8U8gYquRZzTaCaisQo5VLSkK"
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
