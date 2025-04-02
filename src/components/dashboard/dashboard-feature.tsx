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
    "59qDpNRRbn4YTjAgeU8UUv2v1u7afkou9ntjPtV7Sh9XujXVqLWyc6wrAoemVLH79VGESZsM7G8CbzsDG6V48naF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672842zPV7KXgtHxvcV1GAULR1sinKcTuvFc7UYaD54FXYFmym1HkebwMu1fYrKHJCBHqmGjCRU6uoT2NUUsxcqu",
  "key1": "5nSAV1dgDL2QYQ4htqhosFNscf1dWHCvRRECsmQm1L4AiX6YittWUAMtBpGXVwEaSv1Hw9YyrtAY3AbTFFYW6XpT",
  "key2": "4C4scYY6jU7X2CLN5xTeL5G4TenGK5xom2oQcH3dJqoutdX1chcRdKRnsos3KKyqdvyweNFZr26FaDtfSwt5K1NN",
  "key3": "48qV8kBn16xwLpgR5Zr86MuL37cL1odnpb1YGCmC1BbPaHroAjqkdvyB5bUtGeAg6FjVtbeBBNAY485oXF8DSUQB",
  "key4": "5V5FWiEcx44P69HWVm3P1eHm2EBQPH5JZ6wjFkrfuANBzj3ahheLwRyFND2SK8S8mqPWo5ER6ktVMEHpmQxuPGxS",
  "key5": "5tub1BLV1rWhcYRNXDEKRzy5B3USpxMVyPvvUGG4RfddCXRVMForoJqZXf2M5zDq38iV8M3jRi8CP5qsp8sW7CAq",
  "key6": "5ZU5xCpsKE6MtdUt9vapGhLg9M6yX4CrJJTxP73ocCcLGP8WxpfPJ9maZExN4mF2x1ihraRN8X4UoYPM65Sm9AcD",
  "key7": "5cqj9sF3brxHi6yQLfhHHFMgY47wEmPKdihJbuKttjG1FuoN5gTBpzJou7CzzdnR7NHbuRedhjT6HmkrbFB3GxGL",
  "key8": "4h6FWPkxNsjAUmfxNyw4TvhGh38jKSUVrGW9AX7F8ZHyRZEYU2AjJXckqE3sct1nFANMimLZaaMRspSaEKT6QZm1",
  "key9": "iNBTgGxkCs3iBdoNinqd22QFZg8Cysvi7Z5uG91VkXmbYdfBhe9XqUrZDTsWgzJW4LmTmUKJG6cnxWfa8gXzm2F",
  "key10": "5EkwKUKc5T16UesE5q1ZDaUyREuDh5CY1bfMPuGsmuEeKacfVCB3a1D7aMh9vLEK9WHZn3s4zpiTiFNEM6rrFSWs",
  "key11": "2Y5wP4RriSWzch9dJuNMizfdsjkPxQRTJd1omE21gm26t1sbYnKpSjvkLX6GBjUWbzr22kiiy4NtBK1cN8R8GkD9",
  "key12": "48ue8HWtKrX71GyPeEm52HXPTqXSJaD9fPcwRWVNGjXMbvVN72qJbMvMKz71yzzsanWpCJ4TwLb5n76DZJAecw1k",
  "key13": "7UQV38jNhKVUuZgw7ukawH897oH5cz6ebg8AwzKE2ZaaYK7x18eXK6HtqX9hZJyNFjAjC6gzX18xHPg4yzQzeoG",
  "key14": "Xerkjh82F8EYTGZAtqyCoZj6jKqBYCV8G8B8MH4e9RbyqFu7nA8yjud6BZJPzt5q5CCK9wRvjLXE8vu83jfKK49",
  "key15": "4RiKJgXcRKR89Dar7YTkLQNkdKGZXsM5uxeot7MV5mwfRj2WvowSNwFuuPbr6HE1FvkhW59U1qEix3idAdubWWhS",
  "key16": "5MCNeoJdMbz3PCQwFoP8QZkTupq3ViXrRRVH4nkSHzdBcACKAdu3qfYWQbJKnhK23riKm5e7SSnnoubmteqFp3W9",
  "key17": "4dmqJmkBe7r4MWL3R4bE9CCE4hJDA553SNTyiSHcAPB6GQjQdgn9M87jc3StzG9uUrBq1XGoSnWrxD7R43eUudZM",
  "key18": "4Rqyjtb3MDBFdWU2VQZhPSF3TnBdx5dNWYzMygqfiiq9epKMdEUhr4KMnPVVvk2LNUNsj1eJBToFny9V7c4LtaDu",
  "key19": "4zeBLdfpTEWEFspmNWM4jwu9mVnKRGjT8iLBcswhH9PVU2eLWewAZYrRQf3rGN1LFCJzuk2hey2d98XeYPUCi6uU",
  "key20": "2HSpmrFB441B1FLT9KnywJw7ECsFauHA2x8oA8SZiMaSZB8gkikZZt3p5pSFkn6yK4ZTtvMW8Sti5bmuzCx2988z",
  "key21": "4UVSJ39yH8cCv6JNgCgNXde1Wq4abzWvV59qGVnx68vwob7mYKniwdUo6r3LwdnHXk2iRRGwkhRVAzGBYT1zAGMF",
  "key22": "4Qe9wfBsqg2AMHWEKKsM7zihm7hvtqCoBLFPowMSQkwdAQZKbdoS3t24Vj8frVibbeBLNpmZHM6iSheZcg6XxtnL",
  "key23": "22mjrxybi1NG97Npcn5uEu3s9yUx4yG36YM7rKSM22hUdvYvYUxTcRqkYQxjGoPYHkfyxMohY1hHTEKgL55FbXrW",
  "key24": "2dhbrmjXf4yM9bP8tvBBPzPEvURHRGWJrD6mydKtg56b971qekZiB9LvrzQQEi73ENuQ5risnUJMFafkL9iN6PfL",
  "key25": "3jYJsNxCf9j2dz4MQYyqFovBnFj99McQNZX5KYKznWyRdFtYJxyA6BD1c35B4Qi6zCHHMAHgdkwJCJGpRdxF5XKk",
  "key26": "3ZwPVGpdAVgW962attKr6Vpe5itWotNTerqxJBTSnQsua6EdDzjvuWQUFyYgcNgcaun3isHQngyRhSxmna9uYuXp"
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
