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
    "RPehDKnrvTJWmY9ESia2kdSQFDZgRBTkkPXqpssy4j2eM4gCFRqJu7jiXma7eYbxgc4ZkU9SHncrGPrWDPQFKQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpmYizR5U4sQhrqsPWLXsdEUVtUfsxTi5c8s7DX2RjgZLjQEudznkqVE4eU54vSsqFjKtq66CiEm2Mwma4Lchkm",
  "key1": "5ADCqttEznTPs8y5W38CUmwoWCM9KinFuNUGnnd92EVSTB9AcZ423vZdaQ3ADVrYea1TJL4ezczyDETESz5LNV2B",
  "key2": "XxxxuNsKB3whYMNCfQSGBjqErPvoHLNMRhFJ7Cru939VsrhBKUma1SpRHBcRSBCwgRuZVZuFyEiptYFcCTVCBdW",
  "key3": "2ZyNg2UymwojSYUX3EW36NCJmR1GLyDBc17uUtxB1FYk3kFE2dLNxuDDEvPfCbztZpYuqU6ScJx3iW4y1J2WSAw6",
  "key4": "34YnNXhRvWYceWPrGfEkHCszWRbwSpoZAf3DAkpJq6yv8D8XAHEovdJmxbcHKPqgP1YqzvR8iKZLW7MhqN24BAp5",
  "key5": "5J8BqCKKMTerzM9x2YiuztmCH3KuzJtyqyC8MUZsFhmUp633fxQSWBCyxK9ZVWe3hhJXAnKAgX9BgDwoamqDpxBm",
  "key6": "5YzyLQwuuBbx2mRgkLxoAiPCM6puDrpz6DnqbgpUwcQkXemNoqotK1c7hYdKWuqCdSkyYT1uURYq9f8GjuqY6PTQ",
  "key7": "435Zoxouv6H9bgm1XcJJvbpQmBvnYX4DmVsq4UdZtJXz1ji3BSbvL5C28wkCnsEcR5vjXEpL2BZswJz6TB4N2ZCv",
  "key8": "22kbwVm6fxqSLyCAJUfBaokT4819yFB6vR4PMzzKaNufeEyNsTtUYnwi82eRHt5hAVoWWqg2F4fJKLd8S9pZQa3J",
  "key9": "4CtCGsw8wzgy3QP2T4Br5pHtxHDTwmq4p2gcdkSnPF8bJFYafJ62pJH2gVUbE953jCuGex5fFe4ZXVTMT5Rwz7GH",
  "key10": "55MTX9eLtRBfMyNLxgFiW53ektEufD9osG2UzuMyfu7mZ5myHPAFyDAboD4CU6PemuAv4ex9QWvVwkPJiAJDhQCg",
  "key11": "QtdhhHU7mCueow2qLx1AZzKMnCy87vxhSDNh9HMAidzTxExFHpvQ7aadzFh2jecnR3tskVkXjVWYLF8jcxsMgom",
  "key12": "564VB9uCYLUcpW6hMNNsYjxeBaiMFFkxmh9YuSJ5eWs4U7YJnowdY83J1c1jZwNHgCbhJYobUTnn46ADUgQ3vwYQ",
  "key13": "21XuqzqfPVB4AXM7o1ARnm4XkioqKTHRPT6XmTy2D22kfAtBPvR4EV9tJTiL5A4pJVGupcEXo3UhNykwaGvWwnE3",
  "key14": "25h1dYsLibTBUE8h5Kk1zVco7XDQw6YNr1o5W5te5HdasYJSeMJHsSoeHKz5B9L8N5GpoDe9n7EXzxErBjFam74o",
  "key15": "5g9HB3vRbVeUs8mTJhzh359XwGhyJYtp8XASjXSczDPK2QxrrQdTY46CEpyq9sSB9gqJt8wYcvTC33rJQbmaQzwy",
  "key16": "DXjozVN7FoykQQg6UzgoRJ2XrQypKL6dp6Ek5TTGXXdDwqR2VkQrfL8tAFXe2FGAD9FBSSY3vZyYVdYQQj1zxtx",
  "key17": "5HzEoJQkHBsS1wqXPTCvmxBqzUce2nTq3YitugTiSSXSC9odZMeeJcA4tHswbS4paTYvZP15HnKNuLFDSDC92yFe",
  "key18": "4fxfiokcuAfxXuQ5V3e3V3bKwEo7HcJdmkymi2uZfveSptVfZkjWs53mdn5bxUmxEAwwr8aGwzRhzaKF1VCdh6jV",
  "key19": "4nQ2BbQxkSbgrKsaTDahuFGrtWr8dwkNP4oR4zaM8qYvPNanDCA6BpiraYdVohq6qeM51bmSWqBuJUjmzs8QcQzX",
  "key20": "o9xknUEJQBUbtpqjCfws2extSG8UNAr63hnH9gs8cXy5NqECmEqsE1zFYKNSTuLJ9tqyVgrAHzjWizzQEpQFk5U",
  "key21": "2g8ywU3TXGX1Rwjof8uXq8tLDcWSQAdvUU5FMYzpQnuNv9QZvmQb6BrKD2CYTTDFaa54AHkraXsSdRbSjBHVC6AT",
  "key22": "2G4ZwwFechovowULa6nPvfL3iQP812ZoitHBt4dJehETGgHTQeyVF1SSwVYqgy5om684BApdf4Snw4SJZMTMWVtk",
  "key23": "4AnSAZ93QEZPA5bNCBcipvPbbbRcRB3SQaALuvaUD8MSfupRvq42kuy5PseafyKkwZnMySDAQ5Rn7rtq1rWqEJg4",
  "key24": "8eAbnfrfAqK368k8veHqNeBkFppmiG5Qv1xbjWjmxqxfn8Wf7ohUVecd794uM4a6eKabwDyjMc37nxYnD4eTXh6",
  "key25": "3SeZp5moiWCZ9rH6Fvcc9N6zrGpcwPdGurxqY3SijtCbaeVYpgw5hAQRLQwH7pruZwiufYzaY4jZw9K6LmyjZPLs",
  "key26": "2JpZdK91MV964Y787s41BR3adxraaunXJ3nNtqw2a6wdiCE9YnQfRepBLVph6v6P13ePWiTgkkzAo4ah8axC5yWz",
  "key27": "3E8G91ebrzsxJaianeK5pvuqLgiW4vRnBwxaCqZHZQSMYcq95ew2YCjSpxzixiVXW83cM92D5EDX4z19bcFeF4rv",
  "key28": "3YgdefMf1Wxge2HniQEmjsiibfhoXtmjmADC1RKFR7M2sZtqh4r3X3wuTTUfoPqbbjUfBEA5vSXasCr1aNB8C7oq",
  "key29": "3XZg1C3bRV7AGYLZULjViegTSertBfHPZDdpwd9DybhnCd7M9z7NKpHL5JDywtNMTyXJrKFeUwnLWoDNS9a2MF82",
  "key30": "5EFzjD5bszCSGDCfnsKuaXm7aPbUvEBhbxVm65YcE9NEBAHZjWj9LVXNye5RS5aa8SnaHbv18tSfaNc8Bi4e5opj",
  "key31": "3WRY2FK6SXVrX7FGhhDCaxAMbU5aLTELH5iu5fHhpfnxjHHydkSqZtpSZvMpd53Q3UuzPpuKE46dSsC64CPSgMVn",
  "key32": "3kyAWtFPy8G4EBLd76gN24GcJAbYBaiTXYiFXBXZwBXnXrHT7UADyPzXWtjUSv4J7EXKzTbHBv6udeaTwcjHXXzZ",
  "key33": "3VYc1BnShzDt4fE8283pMayoxXyWQgfmWG1RURvKq2wLRKtTKP9V3X8XzWU7q7MeZCbsQZ4cZYNGLU4UTfBD48Vv",
  "key34": "54ANHVZDq6c9i3SKmDNxs3sEfdGtt5VsScYbJV5YnSffVd4xvFpWVoshp5XwXFqGmMZr1MhdsdLhkD8oBmJ7rwwm",
  "key35": "21isJgLtTa1co27gscoYfArkV3RNadcrhj4Vzz9rn7wCidftWy8fTucD7Lt8ps3LrWBtZSvKAXS9zGMea4GbKZcK",
  "key36": "2tSkrp678dMpDiqRy1782QSWi2MEANfxaJGsufSAVYJEL6py3JzmriJmrKcpj9rAkSgAqunkFo1FGZbSRT6SrSqu",
  "key37": "2uDLeLsLSCTM6nTnNfor9UMmT3J2N58cWpiswvexBuyKVBYR8reHM9WXEi87CSMrMV6U8W3fAkmeM5MS7hEfAwsV",
  "key38": "2pRJuEaK6ukitQqpgyr8FDE3nuuzCCn3epvopsjF2fvhPGCET2cxG8RjdQb2xZgsm8w6dMD7JrvFpFEfgPA8o2MA",
  "key39": "4Y2AX7ST9NBPuvysuExByARt6zvq47gkdZpsDAewwNFpvEsFCuXeacFCfrKE3mPtQ7MmJ7SEeC4ECdXZQXFn9ctn",
  "key40": "64VGX7BhWGTQ86AcQcbv7NUnaUBWyDxy2mvD169ZCqQr4ctW2L4CqiAqRjt2BPpRMZmhvDqd21oEAVNVfsdnKYSo",
  "key41": "63qvJUdHko27F9VyKiVCEmLsGskyf94snYmxUMWjPqoDt7C27uh4wZrkHDu9ZZmSKGByLFS61ZxiNe4urDzhxjcs",
  "key42": "4r4tqEKYtsdUErCMuuj4Pwt2HtyUpWvLYMS66j3NHYBxJC9i25tN4MB19rspWUmqA4qz9mD2y1pgEKu7g4PBeggi",
  "key43": "boQky8RswzJmU3Ud2AMjNsf55eVrrrcZ5pGFsdtNJPTdETb2hdwsdkijj2EfhsR7UqDnkjRfN4FsfV4Nc2hvRQA",
  "key44": "2qzTYPkbbnC7DMgGbd2cx7PHTekep2tkW5YzuPSkj1sCQX4VKsTMUPQtMa1ttyb4gTWRS4mXymq8jkxvF5dW1bTE",
  "key45": "66NPmUSevBpkNJ4JyWFsAG48cgum9NoMLYxnELu6MdxP8dk8WHrFpPvZFjALWEgtLxPD5fPCdT6kwHqNtipgeMh5",
  "key46": "2QZtS67SRvmCafxQnNihBspruUgRuSrS146Sh79XF5Lz1PLwqXQDXVdQCzqefV1hKzP5d17K18bwTUWtjVNnf5VQ",
  "key47": "5hdHjdNAJzrt3f6ArmAsfHDFxzUFm5FJjcagdzgaar22v2oSRrNW2K8v9w1U4kkZCFqYr44Y39LjFZQXDhYQCjnD",
  "key48": "2QN3uRX5Ez3U4Hc1SoapQ2nAT8ntY8SNKdodEN6KMCgDwgy4Z9bG6PSgyDofg8nfVaFLy3qPbQgp353Sqk6kj6iE"
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
