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
    "46d5e3XTS7Dz3f9fuWzr618mb4w6kY3pq44u4unb2TAjv3LS3yAKWcpXtthPCW3mYhhwc6SgfY4waKLTKU2ymGPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxnB2WRUiPEVRghnAzo4xrTbMczKZ56Qy7utnzyw93BHqJjwFPAdY1E51PEKn3z44ZkiTS6sWzUuCDFun5Ktazg",
  "key1": "22xhJhCNiL96CJU5DvbKio11uJiv2QMf5tre51rqVifcUfQbNcKVfiLaAcYVmQHPP2UaZmaRwfFPkPo86EnTvpV9",
  "key2": "5nc3hRVZY9XJniRmoH6JnxxZFXCwvYgGFysRHGcR2tt1Z5prUFoeTy9DiihKoixnZfYgXZk6BGCswoLKXMS5uMPn",
  "key3": "52FDpK29N2mSEaP43qAXcTG5iPLkrdDF5Chm4UEuTAsnwxZ4137mEjEMdQjm4Ki7VbgXgY4WDkSmLT1HJLj2tCuq",
  "key4": "5nd1zwcuz2czb1KPjF39yUCH2bEKWf39sS22ooy1j48rENGRDr3erpkpxR2m4DTiE9vXKCu6rPCM9PNsz96EsZT5",
  "key5": "3JATouQFNvy5SBbVfsdiWAmc53iAEmMRCFFjCVqyGBvKztNyB6kf8trTAN9YCDkBJJXhCYMbwxJfvpYsCMV2QBSX",
  "key6": "4mHvZaTGgAZLgsW5sg7HgzPYcBR4HTEYsRbqjAscFLS4cwdC3bH7UuN6g7trDickcJMkensh155o9jqqZiDUeYAu",
  "key7": "2ELgs2DZkgSu8YkRL4tpLjz7f3dJa6XXDgXNetiVEp4X8UzprJGpGN3AhyqDN4XkCmhVgxktHDDNmtYZjz23MWST",
  "key8": "3gP8QhP5Tqv878fq3g5cGa86WpKZJsusQfjnJ5mrvDfgxHxvg2iCxg3AjLX2tKogQGcwbhQuZWLALy3cofiSSAXR",
  "key9": "4UDpp6BVmLGYBggwarmehKewFwjwQb5AbqD6BkTesFDAW8zeq9TQcgmQTbv5B7ZNxcNe6XBqrNLe3GZZFNjQFNBF",
  "key10": "4QpRV1JcC8bDhyv875vkSjZRS7bjrg9R4zdub2AS6X3jyxQnP7nJgcmPfrepjPsbW4uMJT2vrqkX1idMBgK4D62Z",
  "key11": "nhppmaRTUGzPcScSrgCkBBDA2Z7ZkAWBpExZd8nbfEt5Ufob2v4NLv9KPEVwdX1YRhyqzSqz8b8yc69xQ6wPUbU",
  "key12": "5GxJrraUF14S1uFcWjrRN7exBmmV5G3VFbAba11azKALpsiLp8mnxyMFaZggzbgJeHrKp2k8zremK9tZb9nhDncC",
  "key13": "2gPXLjU5uAmFsBc4BpJqq3WnijZ1FyA9CQdVK1MYiZRck9j4KEHHhVEBLSpGD5JhxPuv6DN7pCSPXDPeN1dzvPYT",
  "key14": "jiCjtBCG3t3p8HY8mSZQZgMztqiSbJekL2WWQaf1Ng2cWM9GMA1XDMCAX92vQnM9qDR51CJU69aWWMw1shRmfbH",
  "key15": "2qQBZsbertoLJL5aYJcDiVW7aSKGJ7YmxWGT9FWT9HCwm3udB2HcbegVTwWrusHYNuvkBEsG98n1iD4ymhaQA82Z",
  "key16": "25EwGgcvbcFRHzpa5X9EnneciRHfdcDLJZrZc9MCrc4AsCdhy2q2ku4zPexFC75LogWYTJWPN8ZerZ3GSxni3oYD",
  "key17": "5QN6UdJfTd3PuZoCLCKVenVUG9z7BYEHd2Za7TJZubVowcEYPwndrMTC855nJnrYcjLHikCkuVMhxFNLe743Gsbv",
  "key18": "47fP7B1LQNdgoMh2D4hgXHZcFJYtJHS136TefFuFSvHQMeDPc9mYRLGKb1gyKx95UqESbFHgkvPwKytfFAJAaVwq",
  "key19": "2UaeScmnMr6QQQi2ZbWysSpoLXxQPAiyyRZuCpmfvJG3w7ZyLnU2ud5MY4ucfA4VajjYrbC7XxQ85joaViQdLGKp",
  "key20": "52f8UNx9zfKDYGQhsVi81J9AExibnwv2CXMAMEZqibSNGDRgyaBU5d1iWtyJAXcYXR8HADEgZ5QKYh59FhvCXbAC",
  "key21": "2beyaQ8W6LXnP5SQRnGMHJzaQxuAUYqnvh7vhNkkas9dvjEU8YHhTHaPvFvSGENKFuGD23wD1zt4yvtSwsg5Z9zD",
  "key22": "YWUnSGxC74mMnVAuQQ8YVHCwQuEKbpPdpuYKvTvHvL2nGECDcgA3zpqfhriwPTu4xAgy5En6bDNryirzEoT3RTx",
  "key23": "4nDaBCEB1NuNdi51dF4vss9w5VTeDJ4XW7mxW2iRXXHurQrAC9SnsGb3xzfakYBKckk8PVjeYABeN27GquMdvLrp",
  "key24": "5fPtQfmURT1AiqAm4P7uzsL4C73t8oeufRwQQvfYXp8dX9gZ2irDyowg45NarCN7xGtWKSsi2KfK9ETbkAgYxHAb",
  "key25": "3XwFGNWJZPtHWzvyYg6e9gWqUWLPkLgXceqzffu4eeKMV4rbfG9cMaP6gUSYyxB6QzEWaHovwQk9jbMFFjmG4Uue",
  "key26": "2y3vocMsCY6U5h7rtF7Ru9ZnyMCrQkSCz6Pw52TyNmEstf9aYEhX1L6awLvibc45zqKxfBqg8wD6fgFfso2QBkCG",
  "key27": "5433QGqf1n96vZgTMechxueAdUvRQyNPg1raV7rCtmPWb2w7fMhfposmh5P5P8mQTzWUU9srQiRoWa8T8LgQ2UUT",
  "key28": "64Np6i133B2esUr8NM1dJGnDyEpPsHB8voZWQuvnVwuGmUrAhnFCbreNQhEHwDUjdckXgJHBgECiwnonkufBpbDk",
  "key29": "DbbxJyQKb9dh8Mo6x1KRmGSY8sa7kYA8qz99SGf2DkciUieCCNyL1tL6YGRhwhGC87y52JuitWMMhuej6eLJSjM",
  "key30": "2fsFXg9893D9W1Urxx5VFK7L5MhPyrmVDShhHjg5nNncHhMYvGa53e1n5h3qUY1fL1fDKdvCrLggdHcTB3tqANmH",
  "key31": "h1jFQTnYFAjnoMZpZKHeXkQtvVdpMin8juuk177aYZ8gcVghBNCQx7r2nnwm1ib7Su1zvCbBxdz5d12cvBw4NSu",
  "key32": "2kkt2cHfN74a5NoDSp3vhpCvER69ukfoq8X2x8mVTjmC7adhf4YKrprT7zSw1zF9Kv1hAfNvmhAcdKge3vwnRkFG",
  "key33": "v29Dctwqzgxrf1SU1NuoKer5RAPrJMKKWTxaRTCAmjmYyksJVx4iNMXSEGYdrzUPfdgCntUrgaAtSyro531P5UY"
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
