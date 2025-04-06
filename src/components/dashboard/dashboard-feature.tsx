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
    "38mevg8Ei3ZUbLZnVXwvsMmjpg5rPM6LhPuoWZ2mecNhSZkfNtRk9YVRqZUSAgQ6V8GSM3jYKjZSvfts15g5vmri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npY5UHpH6FrFW43tSszMTJconT8Tq5Qvn35zuLC5p9niTAyLWex4mTsFpgRk5WUaUXK8GYWQi6xgSUGpqpzT5NV",
  "key1": "4NNFpqTh4sqQGRWrHQEQmo2HiF3vPpAvXfYpw1gaoXFZdEQ41dkJHGcsRFGwjPxyLGP9rX47ojTKrcb9fPUsqFBt",
  "key2": "iSKZuaGdtYm8mzUMVK6TYWotSsuPuU4JQzW87cUN1Qj6GnH5fFCTshpZpdz37yUYEC2iaQu5aPnWzeSc3PEMz2y",
  "key3": "3kwHtBCpfmThmG9HkjVV3bG9Q8bkYHHbvNqcvpbm7aWkUhLnnfxdw4YHfeS3LJWSXn6vfgCJbYH2bAAFUPtZvsbB",
  "key4": "3paRr1Zo4Nr7G3SJJgpa4t1fD4SxHtwE1L773XyzF4pdcFWALcdLpnXMmkzALukfW4itsmwepUbJ6kpeSi8fa7fS",
  "key5": "FoNhkWCNwnZjts7cZB2vHu3dA8XfD4u7HCZZv1WkArr5xbL346jNdW7s6fXSA5dZEAAsVNZXJ65PVu8Q2tth7C9",
  "key6": "3iB6PZi8WpGu21VfpFxEfG2hrkQYA78HzW1rL8Yx8CWc3FYqmSRxYZWt2JQLcw7jRigLsy3qTEYXZM9hSr7QzaM6",
  "key7": "6KWncMkakePZamaimgnjKJMEKozqEJfTTTaSfoKJ1jo41uMhbooU7DocjPpiWtYb1Aktxc79qh4e9nr64TkEmQU",
  "key8": "4kM4LBJoQVyHwj6KvCq5RXSDdDu4xh4TyY1prDLqjBY8eBfGJ8uavD8VyB7dV8y3zW8V4575RqaGvXFuy7fmTZKz",
  "key9": "4KADQnkGgdP2nU3pCLF6M7GMfh8byg7F51um7Tu26VGLe6ZBed1Mx4UC6VerpqjyY1nwpGTKMjLbauAudnCwukTo",
  "key10": "4GMzdas6JQoFq9DpPikY8tiVdao8qGtHt8zXD4pFewjBBRfzmqtjpFTcvBT8ufKGQV6NzY1HdWzoW6KhWLjxk3sm",
  "key11": "22Dw1o2PDeEuoCBKUNzFEy7og51JEf6epRFsBQj4a83dAwvufGWLXE7BYf7xHMFzQaeivdggmvoMBsLa8zK6M3FW",
  "key12": "36FhiZxyPi913YDWZ8W3Viy4kVj7pWG6fkPdS3iNHtFM1LyUuddrNLABQfuZhYK5ySxxdbqe8f1W5E2AKV3GV7Vc",
  "key13": "3uTayt7x5hkwUdMtnWJaiccqdZZS9EQ67XDo2PrptFKoZTeBG8SpKtbBdLUeeCRopf5CBLPbCuK3tHaQdiY2dDRF",
  "key14": "52atM4gME8M2rDVa2r3PkK5H1oQz7Z1beWoGvjn4xJgwzjg9AknvhANUBU1o5thfX84312bmgYWEgu6UkdnkgNCx",
  "key15": "3qHi3ZtNBZJ5pL7U9ZoLMHiXBQTvC2Ko3RFvW4dGLXnYRpHFX4HbC3P9xxjeodBzp3gD9Ug5bhQvSZDCeWKZz7Jp",
  "key16": "4UJmCkoNKTtkF2kE6uBGdHKnn8tQiEPK8ergtoPAHME8oCY7ZkLv8DuLqYqkUdRWfHWWaw8LQKANxSTKjWspf6wu",
  "key17": "2XuRdbvMQvM28GYA3ipXnJysMzZoxwVMNUqReqvBnRo3yHBSB7K5utpaeemZ6Gh6SPWGA8yVU7snaqhpKCaj2wn6",
  "key18": "4NsFGMDfRYVKQbsLw17Lx3A8q6Gubxps6zLTPrN4wDWX1reMg3dWFbsRU44xWGsBzD3CeGop8w7jFnnSUsJkXt9L",
  "key19": "54e8JbjxGZakmQy13m4TEH4yYrfNM81egYPaa1qLBPyCoAf53MHqwobpvAmWusv3iHb2V8NRZjVK2XG71AZGUwK3",
  "key20": "2T6F2CdYcTtUxqoF9CdxC3pNy1jwQpcuhYZEQ9bBzLLr56ikovNajnG4NFbMWoM9bLuUG1tZC3XLZEDfiQg6UYdF",
  "key21": "2ZMyGULpgSdNssUC9sHkxerUqiByxdgRKcRw6Vf3KigrGVbXnojs7miabG3YdbbwbYJj5ymEfLGdtt4AR2ksoePP",
  "key22": "2dCZ3w3dimkYc9zM1oQtCvCEBgCA4DRabXCFFb2fYQrbouu5BRN9UtF2s6t3qPEFwb27zRgCmXSwJaThhE7vkQe8",
  "key23": "5jZfEPBRMNM4siNJxZ1bUtUJKTc5j4DcQzeTX4bQZZ1D99swczEHrrGNVwVRuAGxXKT5RYvbQ4VTd35HFdQtt38t",
  "key24": "VXdujnaFzxj76thX4pAg6wsqUXbkoaMoJoReS3JWxKNGXR1MuC7aRguaCMxPJYvunneB83jjwgjcDcBBWseC3N1",
  "key25": "4uqoKj9s3R8PvkLF6cS7QmqLSkA1U5X6vN2TAF1oYiX6G9QeFjGjpMJKEpj7K7jZS9fVUYBBC4DAGQx9iBNGDubL",
  "key26": "2XNR8J4LHnw7V2dJwMFd2HB96W8YzJoMnhL5bCrzFFSLgowQCPANRuyZdjBx7zc82MCMCMJoNJYKAGWQXjMvTgc4",
  "key27": "2QtL6DYAeSGLYf1YNFxnK9LFL4DHdzbfUn2oY1qojnFbbEUK31t4mXx3LxAYPRuauB4yiVhyzgsc6XnsvDXRN5Bu",
  "key28": "3N9vNMVa6N8ogPHyScT7emB8CeRhWkkgSTpB4zj5ez2cSrCnzM8Se2fjADwx1VKLQknQ7HEzULG2Q5Fy2j6wJzBq",
  "key29": "3sriGqo1JLAA8b3FZvCySPAe36BwhzvNNafBH4fAQfMPm1wZakak8eMf62vpR5b3quUkFkphxUZWewtLDHrfr31C",
  "key30": "2NFYZ2vpqXoet3GXYcFd4JHmQRqnpVfCQ9UKkWDWXPBKZHTRdbUsLAQNs5VdYw6Fw2jkKxWgwRvzWLZipSWLYY41",
  "key31": "3AYfJF35NgLwxwVqKMHP4bGQcPQ7HxKXCKnpv7MuSfomKAakzDqF8YxC8nfwTrw2dKYqeQSSHKZkfmRkEqVbdaY3",
  "key32": "3JAqaMXtHhoBRwMjHovtdzdJU8m2uMnFgqgNzvgnSfCsscfGkQPEg4nBtcdoWS38AxVofMGRbuDGA5pXo4Hi1HQJ",
  "key33": "2yMREvpXw5VuPEbxPmHdJqGSAGacUgMDbYCf1rv8UiwpRwFG1WQCDRnPypWDW2WUkNugs2rP8TSmmhrKBnZXySmV",
  "key34": "5g8MqPpriMXKFiS6Cgi8PwG7igAYCErYpe3rBZ8ayHDG87wu8uLWHJFNjtKFuo8H1N647eamPaQNiUXmtfiHUzme",
  "key35": "4ZLKrJxLs1Ma5VkQJtcxCWsiit6zfqcETq376m9eixNArFF7p83sxTx58N5nptMKFo5i9BPNxE839MramJBcMnP9",
  "key36": "3nJ7tRFF3LgwNDPjcTWVGxm5xrvVh1wQY2pZkGfQy5s9uWjuY7RCAMQqTee88vNW1PFoN84qCpizSwxg1N56pX1D"
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
