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
    "56aCiVBD3ZkbBnt9L3TgNnEGWsuj2Xn2FGjrC6g6gGsztruxPBQ1xPfEivbg3VGA5D3cVGZ9GrBTCjYrpkWWn689"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqXwwThFJhrtZWJUZsoxp83oJmDpYWXeCRW7nCJE7vGBn3cYbfpHwWyKMSFu7gBs1LpuxeNNxFRqmKKKSY7XXy9",
  "key1": "5Lk6dxnW9qVWZXCjFoLN5kUp14Lm18SMoZ6REXFmZYwmKoBNxJuHCsfHqfVjnPZhHLpjUYfGtyVoEtkjt8QDVbxN",
  "key2": "i9uGmyjqjfqQr2gukQa8nnkeX6u64CFtnvUJ6Lc3fhjByXyPZ1X56waqVc7MNofsn8pxTDVkmHsWh9YfmsEVB95",
  "key3": "5owhXqL5pJU1kRZfzsDFUe2mT2Qqof3igy7np1aXeEJ62KXr6d14i73UZEkYCHHT5ef74MBgNVu9QQSuBUTiEeA9",
  "key4": "2mqXVHKupi8vdetRofc24nNLQUPqYhraD4amtg7xg27jSeuj4Chq1wrBu2Q8NbqMj11uC12rzsaKvxTW42KVDZ1J",
  "key5": "5UwkRJanik1FVR7biPYczR2BWGeTMj1YDcY93zGW1W2rdEcDyFixyB8SJvh9cjQrLRWcWLXj96iPCLTuK8YAEqeb",
  "key6": "5UMwztHi3RvwFoxaQnEYZzPQBSonyy7A1JRxEzWJGSMM97BBUChSNpkDUh9m2HdkQqV4UfM7Wst1JpNuyAZVwwjp",
  "key7": "Dq9Vfb6WqWHihZqBTDfPhGGsu75LyiznTdvuLrbDWV1AWUwwaoGVifnERtPDZiUATK5WfgfrK6XJKXiac2ugbvj",
  "key8": "EXVtFU3n9LWE3aRw1axvcH1a7h2uzm6ajWDUH9H3BtCHuWU11CHywm36ao5acPpRzHbLdnLKHzfHrxv7tgrHNz9",
  "key9": "4qGHXycExzpnF76UEFt77hRaqkRohx5HaAGL9r6q6TAtdiAXXz6DbY241k4RpDRHSzt6bDhKnsxuvaSxTuCh1Q39",
  "key10": "zHzFTZSacTQngvJ5i5rMhUfad8eAwkdasd3WWNE49DPVai8aFkpUWBMMv2mayQJ89vzMxkdqSChLzTSFeU6hubu",
  "key11": "2kPB9ajm4gGjtw51AkSmnDs5pPixN34mWPFRKYKmeVaKCYJeJfgeEnotzAezrfxi3tUgEvAQVp7RhkbFFgV5k32A",
  "key12": "f4zi4i5QgKh6gh1vv3NGq2MkbF5DJG7eoUBvvrbqdiqPptgaaSU7iGsNCSMzz4yt4i1DDdwbj9CnVqACAJhmWPx",
  "key13": "3eQdcTin158AdgdQ26iY6E8YuBY8PFt3JNzdxnF5fEi5scK9iTJeYPkrWm7tch2Mo3ZvueseYZknFdj4BruDgifU",
  "key14": "3uJ17bJxHfHXXV2ouE4JVYMTcTLGq3UrHzL8gBwjATDJk3JYBVh2gbgr5C8NjxzFDAzgdmoFoXLtLMxXUneJ3ro6",
  "key15": "2dbyGBo1Jvbg89f7rGnAzKKsDvfrnDJy4zQZ9FcnytUn3nB5vz4RNYaCQeeSwNH63ATg5yH9Bm6uPwxjpq2LzTMT",
  "key16": "5GqPqEASqUM7upwYB9vKK28kNvxK32wLkZbTQQaE4uXdaKPFoW8HfQcqHyQ6vS1pCK7xgR64neJmhdShSP5hoHno",
  "key17": "3Qmsoj7JcbqLYK6vntR44GUP3mmShp4WZVEk5Muzozu85ntA5g5K9qhrPYT3G9v1sQnvn1Dj82pLVwjgmZFBCbeT",
  "key18": "34eiN5hC4QH6RQhaqidRUZ2krGdy8W3ihRaKqDvdQAsb8YwNWZBTudFAi5BQK7EZJbycgch59EjEaptEb9uRGdR3",
  "key19": "49RoPQPe3EMv2kYxhbLqa2JYtth7xmYUBVQjJJmGgjAb2NFKwbL1u7nky6QgFcZRarcFgvN2hq1VHiaj6U7fJLj5",
  "key20": "4XEZFrT9RnKfSKdc9tty2vYRLhtooeSBJDjyQfWwqGTzSLamJbXoM7e9dbTKe6m9oFhyPdgs6bAWcgDeUuer1vUU",
  "key21": "5evVpX6Hd6vVDoKfEDLo1jpSmH1sE9prhuibeh7v1MgHkAKzQsLPNoMkxxG7T8CyQ2h2njasxJ3DmYyG9vzkUUSv",
  "key22": "2yzEHJXEgdpq8xnPSKX8eNvQNUovXjHNL9sw4R2ByegmvSVH46HfKCXPt38dkbXwvd3nBEFX5pK9iAz8ZVi297cB",
  "key23": "3Cj2Dx7wnRRUqUzBvXDP69a8tk1V2LKc2D94BiHzws94rfbd2odZVjkvn6gNdkbFo6sknCsJw8g286LpjqcrdggS",
  "key24": "27TrAVn68PUNAzddc8GcHDcvcrUiLJwS2YEwkX12Dof2WAoxYwv9aY4ckHQuoZ2VQLgVtNT4s58NakLmYy2SmJAq",
  "key25": "EvSZmkdVicWFSuxZpxxLHCXJoiWQTaFtuCP68wMPJHsvAMMTRmTtXybKLuSkETWB1Wp7TrhrqqyFHVx4LdGqyXV",
  "key26": "2XSxvt6AUGxjA3t7SyiaWREeugSzZ3RWK87Bqh9jCYjp2tq47jFyJNFEMfDWJriJHprxnXpcYWoN6R5HcrJjrVfq",
  "key27": "5pHfLMN4yR25ruhUEJwXxZFsdNQEisRpHFfLBSqJcoZr18Li1MBEMt7zakRVV24Gz7SbmSamCqJBzXDJM3T6WTkj",
  "key28": "4WUSuFeGFUB8NM9eEZFSYecf4txJEUotxz3ZGTKiNFPDmBf9zrgVRHtKZqvzLZMeaWLCbrD8pnCfgeUYEA8sXHLC",
  "key29": "5ziNo1LHLNfpB7f1EiY44HUu7wN6KAq7jMUizMecMrvhBJTxU19PdcE5UWNP1dkEBNUydogUGnnTMwDapzSPLBAg",
  "key30": "5H66NmFYDLVMjJs42ezAM2rzm2LSN7hHvPcpmZZDL4K728FJGUB5R6vRFLJjN5cqWhUpKsnjzKZCbWqmzLsQGrWy",
  "key31": "2KrXz1qwcRCr2QHQR4uRYULVv5PCcT2p9onCbw2dYaRoH189HRLZz3do6Yqq2BUcrSzSDe1uSsjuYzDHZVFtgddL",
  "key32": "B1WgF2kn4c6YRpWtGCngUPvV14yxu3dcpDK1VApKnsdydAu9vPsqmUa4JgVkqk4JZAzvE9A9NyKc1dsi3wHnpW3",
  "key33": "5JbDhgzqvHG3Dsc1aixCraF37J7iLThgXgo2KzHTQxgmYoRcHRJBZbgxDxPdYeMbatKRmNjG2yRSFFuep6tePASw",
  "key34": "2VpDw8yJr8BAzcxG8HXMVaVz3s3RirWuM98sQ6r4EYPHuyuzKEDVxGPTGhHBjrzZAT8cB4FE46F8brWq8GNYM5fN",
  "key35": "5bANSRhH8cSS5bU4YK1Pz43EkiBNYM4S6XMX7etAmgPmezcY7PdSwWuApKpHMCigoH8L5NT8joGDdvt58dAAk8J2",
  "key36": "mF4mwJYe6MKCquC3M5nUqB3jkBpoKUdfYs91AQ41NnLTWTtymeSz5YhgT9ag3FSARpk76Dbpixcw66FcFXHouj2",
  "key37": "2uKvxnTGvp2vnqC3npZywCPw4iNPNVxgoC6N5bya2npQBat5FZ2JuQLQn1ACm4Aq4YRaEUpULEhaCBH3spta1Prz",
  "key38": "HB35jrznZvFAMktkoF3GCs7WN9haugWF3eyEaLYfQxThic3whjiThRLmd5Wm8AcgWjJfHh3xPtUXwFZaXdMLjVz",
  "key39": "be8Qa6Wo7K3QGo3PUA3hV12Q8SCJJwdSoTKgYg1XN879u67s1XkpQ38uAjuYFqcMuNG9HecYgygyzKibBbxfFAt",
  "key40": "4qKbptC8XBovbMfYiU7L65epmfeQPqbML1WrThMDvmDnBU8f5Kh47gpKD1TvHxWNtyoatj2K9cQ2BWor1UeeLiL9"
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
