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
    "3Tc3fyZipvt2TdH4demS4kgNVVE6SQUB2JrKTKDH9WDRt7tFWxnq55QX7YntnDDeX6veoZT9tLAQXkwiRVHVZaRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fKRDMStDQCWt22M7fApayLnJxt1TtbdT2eyjnSoyvf4EjeNnzwaMPwpdvbSuf4RwxvxJn2QRwmfzcKmgPzDDGYe",
  "key1": "3vmqowNp4MvPCa9zUr1XnU6wV9nFyJs5zJcsJLG1AifGisgMNFKjJwtNgbtvev28sNzJq6YPiQk5PNsnW2Vi1P8q",
  "key2": "24ceCiZYKpUYNv2qj6o8jXHPGLWiVDcZAETtiTbJaq7qez56iCchfPg8kQEx6edW9VD81j9sV4DAJkfJEX4DKmzw",
  "key3": "44gHJS1aTBYzqZNBduCApZevoXbNpC8GNEBJtvJgoBDbkQpuY5HwfEaqG3FrS6zCB95QY264PSbQ6cnqyz7ne7CV",
  "key4": "2pAC4wrV8wNBD5gVy46jeHtAgdf5XquSFvGHMrVhVhpeBo9KSNPjhZ3Q5dpo7QLFgApQnA85vWja78SCzeqy8q8h",
  "key5": "3jxmQ6QwSLpfUjMNzqi1Fu8Gk786EfXuVc2iZ9UMgBhhaHd81JHTYCj6xVFP4d9gS4j21VYficBBQmARGEiBBzp",
  "key6": "2tKeSwy14KsNFYUQ5Q4G24x8EBLj2tdPtZmDwDZaj8HaXi4ELEXVxpv8Wc3VGEybZBk8v8ZbV7Enhf6JiupnDz77",
  "key7": "3ZKyditL2V7BVMZ2aJ74Rkudwwxw2tfn8jjYPAygJjsJ3sDwkd1ye29sT7k5PyZe4CsinY3P8tQQmDD2dismg2ma",
  "key8": "4uyduJnD8qeicP959U6Xr2CL5LZUvnU2RXptks66qxA3LVYgHH8NbcDDaiNNjRj1zx4quiBkKp8HH8iUWyxW8P5a",
  "key9": "2yLbRzRn9wWvDegrcw7ap9afxxGH1pGq1p4K5mMhjQbkoPmLa48yxr3xMFiN5oxMu4Li3uW9nUsHHWkYyasmJNCA",
  "key10": "4es5vDUtTx25SDHurZGM8owCuTUSKn6dvJNPEe9oYzuVGT3UnFx7XsJp2oRcLEww7ZZF9ovVgsmCexE7c597YTc8",
  "key11": "4sBCsGinQdw8xdT8VBDVeQPDxjX79oN3D5k9UUj7FP3zrpty7SbFjAf2VtLbxwcBSqMVbZYxyM6jtb3njPTBHRBn",
  "key12": "5UTPKRMfDnW8iYobPVhSt9DkAdpgzLQppJq8qhCAuDByQTNqgcurmRjZG3xr8D7efJ8GorYYhK6NwzW2yZ6Bu5fu",
  "key13": "2P2HxibFXWMQ51c5epKNc5UA6euDrGx6Di4Ui4BHZLJpdByEhyVE8rwesfA3xxUXGBjdYpypf5NimGRZXE11doX2",
  "key14": "59odthWqUubHVTJt9ELAXCYM44SMhAWVpPiQPLJW5CGofxFSA2C61Vk8WBjBgkFAFe8fjw6jFKqVcfZh9qbSaJwb",
  "key15": "4x5TsS3wee8Ebo7xZQMtQhVZyF2f3NuhLgxj7wo2M1nEj4kCRheDh8wKKoXnUo6bsLtQ65htJxh1tUk9yWb8aQqT",
  "key16": "3wwiQ7gjV8TeGDm7Hgsjg4KJqgfASovub9EXW4dfhFYZAbGTNT7NvKTNVkojJfhqFnf7SXtvpmHPAbuJxnMB8QLm",
  "key17": "523fENQNWpZHwyYfYKaW2mNrd2D1XjWpPB28ackBXXXoHDveB5kW9KrcbWmi8Xv3Lu8wqhGqz6qpjti81C95dMay",
  "key18": "5rrkwGSLgE8PPqyCmDsXaGU9CNsVVhdjTDo8d9HpbscyvcgZSCU2Vir3rMuutJSnzg44J3mSvy3oCyThX1PRpxdp",
  "key19": "2WK4CguiDR7dgC7wtnza9q9ds6Y8EyxDXzoikQZnCH29VJNxvwsiUkYoS7ahDNPNtdTVC9NsJ4XdCPnz2ZFk6qqN",
  "key20": "2vdNRbwdRP5Bg1cM2nzxNsDct87fga4XXAvYMDFRXE64VA4S5FTFiR5Qt9mN85cMG4Jud3r8ncefj4mA8mGmiivF",
  "key21": "4fLZ18H4csApzPrthDr9gTDXfUtiCupJtvXsrFLos6UsUd2cKkjCAenQEWwaQiVm1wfowwbdb24Wvj5R7GSo5YUW",
  "key22": "3J2s9P6kXoPuPQDU4i8j2w8Pio5j3hrgMmPVbbJuDhmpFYbp9cRQzFEaEW4bU9LLLj1M8xV3C93q2nHLw3TDPrAW",
  "key23": "2ApDcoysk5qvLQFNebeS2yeRcpPjfXNn95GejPhbAdgW4FWQTAK5GBm5PupaCs35Egk7bUvxGxiUPLLwwXRaq8At",
  "key24": "5THNkhESqT1m7GnVRTyBUaqoRu7vRSLhkunhe3T1FHd7s27tH5sfw1NyrDrMQbVrC334WN5z9zPY1cbQceo5BBYr",
  "key25": "5AH9uB9pynrisBMSwFf4Ki4UyY9onyiaR3ZqPDQBMeWQYLEHNULoYMSmVciynGFpNWaydmXyCJjnUsCi7gLcaspG",
  "key26": "3rTyUVMQHno5CHgNAhxiHnYU3DpCgDVcSdWrGQFFCHBo5f9XrtyrxGGpWCChwK7UjV4NZntkTZpJZeQMSNjho4sV",
  "key27": "4HMW2FL9NqXrZv8krDLUck8kKUbgshy1zhKVNcCg7LNYfHxACCEFjaProGS2tRetyafM4T92eGB7RaVMrB839DVk",
  "key28": "EjkZYybiQuxbAfdjsxZamyJXnMAM9MxLgofpskcBqFhiVL4ZoZZiTWvHfBfYEm5Dh7FgfDLHRcuHxg2KghFU9mt",
  "key29": "32hxtAhTLNwWGJZQpYes61vkwiz1hKAJC8ejK7fvVRR6Mz9q7yeGMZnfASN1PKpZjb7ZJfLVrKVgjmCUSzcX3H4M",
  "key30": "5VG9foCdmMGi7Wdyj8FhqDMzsdxs15PXRt6ieJp1TY5mr1stQD9ARqZa3QEJ777y5V87jhwWAK9kWWG9YmsJHuSS",
  "key31": "48vu8TKoByacT678DutgXkUtfih5ddmN7Dq2RitXwvwQ74rTgfGePSsHsXofsy7joj2ZXcPjE14DY616S3dTCskR",
  "key32": "5zeu7uwCxoz2AFG8otwbn5dnR8gp13TVeTfFXMMdtFWpu3LKPSoiQ4JJgqe2U6KHyykSv9zLget1t4jM2SwgzHgG",
  "key33": "3NQaMohJ7jfLjaDFqYmDUWxZgSMJF4vrJNoh5k3fSCsBjpD5bhREkap637LFJZ7hAybucJdeN4VEdZnKQ53PHwr2",
  "key34": "5JUWWYKQiNa7CeHfbrBXgLhKBRKbCHAJMEuHAXw8ztJAqDYeUBbdQzKzZdeUqCEJf14tSD8NS1PRRx2ZfWUXmgh5",
  "key35": "7nJwGTy74sCgKvwcrpJswb1wezXNRteA9UhK1BRJm8LcrRiz9qrt8Sm6Zf4319ZpCESTduUTobjX1TMhbNQUV9d",
  "key36": "4HiJN4ndkx68Mcbnfwar6vaNKwTuPv1VMzeniWrB1HU5yqcrXEKUrKLAESvtShACP43Ynq5yzPTA4kmocLyVDjib",
  "key37": "57gpdw6oM9TYG3spU5P1L9QmDjiigVm6CXpww6samb5kRxAfEtUgR1EMxBnWKAZrT3hwAtF75sm5ZvEHDDLsGbtr",
  "key38": "3JH8FtypfqfaCgwznZEXEqQu5Pnu1quTk2oP5Qsg5FWb42QLqpQmpP6ra1rYLGuMVPoh2eyfR3vSV7FvzXBM2fbB",
  "key39": "a1KNi8qKyTNGMLzgZn1w4MK5ubUzQoLi3wbTGKp52dxohuWy4TGZ6bHtN97rkyyReMxnrzit5TUvzRDkubyu5ce",
  "key40": "2YyHmZ32ToZKqTJKEZutbPsPJBkmfSyBEAzTBm1fqeZZkd7fk8g6Qi9r1LMsJ5eR5TLgRWMxkE1Sk3xN6e4XA4E9",
  "key41": "5mNV3etSzt6YGMZY9DiCe2HWGfozfTz33X9JTFteSmPjzDN4KJ7u71V7ZiREd5YriphbtjtZHfrwrnGa8bpQc9vn"
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
