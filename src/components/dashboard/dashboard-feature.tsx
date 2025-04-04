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
    "5Z4831CbrwC9xw3XBR9af9xiaHdgFHH8JWnfCCyaoTEQjerQhDkj8xbi5UJNc65XZrQpXU7NeEfHRQSfX8L7cUns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5AANd2AVrfYgTp37j6keFkQ6r7yhSWnC84hb9ePWeEgyp9Mj9TSfxMiQ2nLXfH7rFTrCk9vtAN8pQDmR4PdLmX",
  "key1": "2Ta4kN9gwywJ81N3tErojqdzKDLzqDRQe5e7jEbEDzwLNpeDJoDGbFpYuoy91XFfi7MgGJXx76mJK9wim62BRTrV",
  "key2": "4azTbhMp6vKwyp4LwYJNs4gG7e6sJdVTEGPLzoGae7mTerih45EGY8sn99YDxkmfdi38ZVthoRzEfu9cigBuXFWr",
  "key3": "2azRj6yeXsMnZH7q1hsdaMvBYZc2T8dKxhkePSTSCE3t8TrjRQTGFTZhVPT2RiNkPdGzRVERArhweJASBCdJdRQV",
  "key4": "zZDrb1QbPJbhvARg7q1d7DQuQDrKHCBq1GciP1uHR9pjVTRr7ovDM1RYK5BZF5ydajWpsEVY77ypX7s8Rp6yGG5",
  "key5": "5HYNCZTRhQCKUjL9zWNDQyH4ZYpfUfGD6Css634kgCcP8a9xPV9ptzZ3mgTAfiwGpbgW8UCHtxwZy1i99VdosSYV",
  "key6": "TYvyYL9fBBs7nxd5uoFfRW5Mx2EZSN2dgbStxp9X1q2VpZMyF4e6cwS4mbadGZGodz5zSa7XZjGEyJkosnXWSf1",
  "key7": "ctgmNkUNy2iRyuQPRvbu2nzJgpnmPYXQYGFKGmDvtSJpmh4Gu7aNHifxnVM4imc6z9kT6QSSzr4ybDyxQuWsVNf",
  "key8": "huL5uhxJTNALEZpUM9oXu2uGniLhtZQbMBbeUiGEixiVKceHxQvJfSVtzbRGywzJ41Sxui6KK8Dj2DMFngDFcuu",
  "key9": "5DvsL6JSjvdSZ1yR5sAdTHRCfxn9bs2vjTKvaHthYQQ9QVCD29eJxnjiG3T3XvUPmMXvWfci8RcGZxQi23wfURWM",
  "key10": "4FM9y2XJBpzDs5JeyvCYg8bHQqArfajyqG9n84jKRNQBrTzxViMVo6DFREzgBGwDHDTRUK1pjNbZt7vDjH4dr2NZ",
  "key11": "43pAqa2Sft6WRBeB36Q41zzZp5ZMdHc4PmrwvjTPwjEeEMHck55N8DMBetakbtJihrawKMtL4o6DFz2DpttbEokL",
  "key12": "4pMXWnFdGAw1fiX3q7BTmvE3jSAtrWNiDPYqMRJXtdRHjkLwqnrWjK442X6aAXuFnhiFXLxLuQryzEBKUT9sPx9k",
  "key13": "2sEECzXaCZfAezDWcdkpD1MJtAkF9TUWMgmRqDgqgM4A5RZ982AAavmoGEW9yk1cfmE4jrRabrJ6mqhYwaBtxwUk",
  "key14": "2b3AzZ6t2dT7QESjwnxoy2oovAem3zCX5TZ227zaeRABHEU17qJLSWZnez17et2ghiZ13xYsLm2pzvq7D8jREDJE",
  "key15": "2K5xkMJp3tRGVb5cpdXMCRutSTTjgFJs2PZH1Gb1ax3UpJC6pHyiVavBDKVLsjaTJdEfjjt5oXkH642h6tPywWgL",
  "key16": "2upmULy6kc8fZFp5KXG99f6KS4Tpsejh16byQES4MJSc6eC2eBm5rx95xqxquD6q2GTbbvFd1ZATXCUMJB8ddX5L",
  "key17": "46SewmSNwPVtE5vTFifL3XyAcK8WyJsqVB1heQpB6sejcqstGnDNKsDtqSQ2cPBLRXzLWGtL23vqL7Y2bFftukWH",
  "key18": "3FefGAkAFqKxN1YqVjVLH8aoJaDarqQA2kiGSC4jKava83Hg3jbmY5iKiEFmnzZqaaEGYepfyGES5ce8GsiRiFgt",
  "key19": "gm6g9Fete9wMsWR9zp1sNzTMoim5uLHMHbL24KsVBJGnCWAfTi14frodo8WJuvD1UmMW1XNdpX65P9Ksk4fLzny",
  "key20": "36buQ8m1mW9pZrLCWLeMuUk1pTJq412VP6szi54hXMgBoMHWtWAreSRm4gr9raDqYk2oLYLMzmwHpP6bnHhwmS85",
  "key21": "4aXiYgpcVWzcDv2gg4wuNKQnyUG9ZW8rhmEjEMiUPvTnTAx6vGCScqBSdG5k67MAPF1yJRT8JbuUuLrYLwnngiuR",
  "key22": "3zrobjT6b9MGDWtyRwatXZcFC3WWGCukuqCwT3DJAhWRqfH1aAqVU2cieqFe2fi7CUkpUTBkebpJM6AoRX7Y4fm9",
  "key23": "3weS1x9uVYPiBsNrdYDJ58n8neaiAQLF3roFmpebmfT7S79DWEt6ctTxawEQky6NdxrB5xG7uv8HJcHtduxqg75D",
  "key24": "SZvJgGE324C2GnAKNcWb98Qo3DEtBdEHNeCfUQ3XGL4MZkSSxP6g6MQKWHhvH4FtbLWKcqHCjEL4aBTcTY79HgJ",
  "key25": "3L3pgcZTvqugRRdc8oLKUfep6vfJjgCZRXCxaMGLpbhiCGUPWP4LZnQYoEmzZYUPREMTjHSdyPqSbZczkW2M2Dmi",
  "key26": "3jxYfqsvtYtPnwtjKLN6UoxHX3SvpSf9mi4hNosSedt4q66xwwZxAHQxwMCoBA5SzrkfDypw6xiUdiByC6gGQinD",
  "key27": "5qrQPZF4Rnq4SSDzeeNXhhwtoLtBtnBiSxzw7q5YdGmjToK2izSzHYvYHxihAEdXenNpBACRLGu1biR7NQoRJMQ",
  "key28": "642t1euVFPoCqT7KaDVEaZpMV7fDQk2gYS773gBfunHfJA8APfEyUpcMc34HD3gRfN77fYAGPvnZ97Xs78tFMJ9v",
  "key29": "uJTLJJ6vAX59EwibuaXpM7Gs34oNF4HhAVfYuNP374HwYPpvSm6LdQjZe8tBRc8wQTYhZZHuE2Wdq84uH8oEYLJ",
  "key30": "5aXzqpDSjZvBBoXxHRPyUgZXEJvoumH9yCsSXkQYfZAMMtXysJQj6AaQHr3KTrnKqM4Q7sWCWNHBPsKscpTyUzae",
  "key31": "2wxdzc3y9Dapg4VmkSyckN194QEXoGt7xVJKCPK6AQPUK4nMxg1YJmQwQFCnd1dyaZEaSGES8f2GJ5nbk67YyNEz",
  "key32": "45pVP4RHhNZr9cJqerKhQg2tA3cjXHHK7FCjN8PcG3GphytK7RhNRnqfsZpgPvGwNzX6t1b81UbE58UwpQGTY1De",
  "key33": "2mHMBjVNqNohHgbLDnpLRiLc6nJx7oQivUAETXEK1hXajCZZ5mmrLg3cJHRH1iMb3HouRRnqQJsu1xzf1NxFsCGC",
  "key34": "kkoRDDiVzd7GmTAmabW7W4VXUtV6Hhs7iK67azsoba5yc9odnLuTATg2CtgRr3EUS5U1FgLfcXoy2UMT4qLurRL",
  "key35": "3HXWXrgUJTzVVy66K3AaqdfhVwwdhm2KaRA3nYZpwTMnXX48Gkb3cNuYoxSKmCUaVv3tvWVMPZTwkQu8DQ1SRh1a",
  "key36": "5tZojKSCS4ACNmwxGWKfxyfQgym8EmkhCde4VEtUuiAqaeE9RPttCFpQCpA3KTDrFvheKnirUxkJ1z98hvjQ7KDd",
  "key37": "3StpoQpj6psQDqeC8vM75yearpzxjdtj884ZyP2bfm7KCiovofpxFJmGyv7sZYECdXVLKWjpkzCSVsRyEcSDBZbo"
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
