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
    "2DkKVALhe1M3PfspnQpR8aaMqQDVPxPuj5ft5FMZ6SadGPnQSys6QLu17Uy3yw2YPXCeNtSZeLCVaDBe7bziS3tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1yKmynDdD78wceawzrwb3odgJ1JKqUKxHht6yUhfsoQxe8RG17XHnpA7z8xhWzRrHfzMKNkbc8WyyNsD8zS28vd",
  "key1": "3SAb9HYQXr8fnp2XD89AiayCAgQF9vBqiXYqqvMnukqC7w1ySsDd6YGJkA4cyS3GfT8aVW2PXoo5Qwghhodpd1ZD",
  "key2": "2KNoRB7A7ZnEkwhwJYBw7kx3ya7TyenfPFgHwaTb7UBUuawFVdJytapGHEoTka34Q2SJazvkGJmxhunArtGMr7Fx",
  "key3": "5LWhHYbwkHRDqgfLaJq9v69zAsK61yg3LBzd23xePFTPRmJQSnJXc5AUU72VDsGvwsxiQZHA64jJUPB8jqABnp7B",
  "key4": "F7LZbTffiZvWUJwxkKwT3UWcefx1QA7ZieBY53bahEcGL9cVRXkckNVPq5WrR8WYkN5gLk2khrxCZsXjdu8gMwH",
  "key5": "5iEifEeTZ2HiiNXNqry3z6raZUat8ZZyZ4euh9fPUpic6kC3wCSuHNvkiC32qHxsRyjfs8exRMQEBeaykUFfJtNG",
  "key6": "5s6gkivZwbb8acz2nt6bc5gKZffnBSt1UzAMuAndtA2fpqCvCCCTn5LU44XeAw7cju4KMXh5sEebJ88ANwPV6hR8",
  "key7": "5jMc33Mf63MEXNgUWLFpK6TJUYZfg1PzZnzRxz7HXTEAYbULC9MForogH8MbVXmDCirqxDvcZMAumPtHyKecYqeM",
  "key8": "2ZD262dvb72Rdk8jVz35ARHEZuKBuJ7WnHSS7D1PaCKnc62CrgbFCSSquKEEiRDJqcQM694hYhjPUFkb5dECdJQR",
  "key9": "g3xZHgeeQMP52Qyhn7vwmUhCxwbN9CgL3hy9AQWGQyXzH7EEtcgkYyhGrYMYgXpaFhHcdn3LSyWMVdDjKEzZgi1",
  "key10": "2FK7ekNn6Zd2FfSijvwtF57RdpoRaoqKUrGAQc1Sek4ppxZSM9ntM6vznTesAxcGKHcLN2sYZkjAJ4BJy3vEHhQ9",
  "key11": "C8Qa43zbf9nZeQBZTAsc2pyKZ3dq6dQXnZGqC2bdMRRwj13Avqf4GpFKFV4nXRcJJ5GjJrmjXkp3h5gKm1umn7Q",
  "key12": "AAzjRTgnVjRz1p31SooBtKXVZtQjvUx6AXHF9A8VVE3w1hnuFCK3SYnARknW8ENSZR28LvebuhVnh9unVSoZtUS",
  "key13": "462x8hAmWVuci9UuutPDiEeNRb3KrXH8m8bF4wAptKaALfpWhxx3LZCy6snbC1B5tryKZxbhNjYgXQd2ANnbD3gv",
  "key14": "57EKUyGieec5qHqeQDu5etwdzsCpu9ADi2w9rWtma4Pts758oj9bj7ZK9H2qMHQ1JL5TURm784PwSW3G1YpoewKH",
  "key15": "3CaRobfT2MMLrzraRQiRApPP2d7xNVsAVkhYJ8gETUn9HKHfveRUEfk2iudonvwDNTstREXLmEAfKThdE2nQgaAt",
  "key16": "4SEYajtUs5XFGn4hT5Vi4DP3Jkzx85eNMuXxpAY2JDPwSNfZ9brbFBCvVdDu4rRPf8hJC9AyLMMPKWbrq9WwEVes",
  "key17": "2JJPFPM31WLwDQDDGLjvUiz7X3iQATqMbxw8snKRcm7jChfb5ihpoyZb58GVJbEr8bPKiHu4c4Q8VzdKccAoAj5u",
  "key18": "3but39kPMDS9q8nEHFfCZ8i5db9SwxoV8a1GW5aHgg7esfrEDJo5NMW8cgakE8tB9TbuDtfawqP7vuCSoAc6HGKY",
  "key19": "4DJueBeDmrAMKjqGSr3dQea9vQ5pUkohhADx3AtSv7zwF58tMHTZMNyuba7kg8z213H8tRbNioG6AdoaH2J8Tj3q",
  "key20": "2cV9ZbfQWwj7vgLJxuLHvjxSWE5NqPM15bzSS6144p9sJgRMjJ7tjUtGEkuhmTJncsALP34d8BUVXcWvjkt1Epnk",
  "key21": "3x93ja8JbwCNKcLv3YrfDgrU4ip1fhX7nyFm9fMZnm27osWD4LMmQm9tMrSMH6AbRmkAp4vCE7PAv5bKc9QjS29a",
  "key22": "KDJbafmituAp75QmKg5o2bKfCKBdxVYRYss3KtZkKtQae9uDhDqmpweAtNG3RbQKu3QafsbTvz4ehNLxyL2te9z",
  "key23": "62XdwsAoi7bKcCtjziWNj4gQ1u3pAX8PxYX8mGzhCdMibY9y2QvqpG11vwuXWRu3HpcmPYqYp9NKQvohnmdunX4T",
  "key24": "124dHhV4QP7VHyHAgFv8tVFnwVmVdSYN1RveAeLAy3bvvB5G6T5tei64mTEaLUzxtQ6h11fQmAmmQvkMN1EmWmC2",
  "key25": "23x1n6bM7nFeR4enNSb9gstKZ7qzeXcA87v7EJ4hzijFFBZjJT4nFPCwcYJ4GXjvrfRb6KTszB1W6rGCTmRDo8HR",
  "key26": "3JwWpw3kzaQasFzyzrixgSwRc8SFesi9LWGJvBHd3HLzgiPRvVkq4fC9t22hLKFxgju7YidZ8x4FVRCRJZNaxKsf",
  "key27": "2zPNapFGQkCaVRufoStcEmZ5HENPiUzfG1zswVGvnYcXUmckmBPSNRAxPBWb2bnjphVHXbGENVbwj6vTJhZCbDNa",
  "key28": "Gf81h6eGBsFbkYW7rqHQ3b8mXRvwBvi4ookj2XahLtb1eguUx1zwpwuQR42ghou8YghvpSg3jHYS2rQWtps6Bo1",
  "key29": "2KSC3EHWA7cuBveweQiu4fRjc744KLrpNskkrDAHJVLm4etExFwCZ8srzeEN4fgbRnPhXV5FXRkTGQuYc6XmeVGQ",
  "key30": "35LRzMwc7ejgzbHq4Jq66DqUfhGX9cbsQmBtFtnq3eLfFopp2uqTrDRha4T25m3twknpYpUpp9xEH5jgPPfMu4T9",
  "key31": "3rrUPkVU1o4pmTN8ve24Q6abjJGS5KKCGj8pagvPKQMYsmzvMk78P1gn3WrDdr39En49LbwojJHmSdL1Jk96end3",
  "key32": "pa6wphhSpqHTtcuw7YQRGk4KSebwPADcTtDQ1tX7Rm5fYgB81NDuULtmS91osRmJCN7BYRtyr5MFZuJKqwZ2QGg",
  "key33": "2WidveUsCztDfaU1HCHro5unsM9pVRFKdcoxFa4eKQUZXtqY5aZWAWu3zr7WW9fptyQHtufhV7EE1EAQMBPZQxci",
  "key34": "mtgAxDkADcy2693pwRcwuzkvQahYsRG32MPNdMuSFzoy78HT5vwBPn3jFcRkbSs3UnDS2zx5cGfT2hKM47wPgtC",
  "key35": "4c6YfrUQ2zLx4siFvRsC16LpLRaGahvnPWs8Ltd1AzMfzDmWWXsxScSgRnx7DAQzLCGJZGhBdfNJ5t8BcTbxQgyb",
  "key36": "2T1wbVNnFdFe2LWkNFJ4D3GK5AGWXvLu9fHdqt2WXpq5WeyTLvuZuTmEMUV2Ds4tCteSZP6giBtGh3BS9mf8zjuh",
  "key37": "5LyRiDc2K29CT74Bd5RLpZb9KLMujSQCAVZ3F13XyY6VNmfRprW9Hvcx9eNumArTbwTkT3iMf4nXiCryi5CZpXLc",
  "key38": "4fmWuofRrqGX5Rb3sQdfE2Mdse1tgG9u8uziib2a5zKVczSMtHTtyoA639E9cegG1GmiFfVgPNSKfy1R3fEGPPwb",
  "key39": "3FwfEWNvFxr3Fo1jtJvREZXWP8GySr4d4ZdpYWFCfHodZAD9vPtBS11L7SCy3CB8qWaFCL3jRhHc9iAQV6ATpx5H",
  "key40": "3F2cxihzR5tEtwF3d8Qp8ZTd9v4azLHN8smvpP9y8VK6BX5Kc5qE9e7gwfL4FjfYPfcXNag7i3tTQzwuACK2R69F",
  "key41": "5GEtrPr1MuarvdNzJRisEQu2eSYrGvEkVUFMven9WDzBFe6nEWmBV7YwNe2P5HA2CgtQBkMUMtUeQuC2qoPb5wFd",
  "key42": "66vH1oCnYnpi4NkH94gxcKDKDUXtmqYpZzkXo8Tm2aUBPdv7rxXw4Ti59vTSH3e1KFaPugy7UdoShgZxqrVPgNdY",
  "key43": "5M255djjoqTgVRdAqrYsh4ErqiMt8mh7VUBLadTKHXok73rwrF3RFiuMqNGSkMszDNXeA263QYGJ5uQLJpDwH38W",
  "key44": "QBQQjQssBjWezcnDGNzBb3J8tXZoMKdMf3RxcUCBPbVbo6AMz7jVnSWxRBSoHztopDaPT7NorfUWYj7t99txbsY",
  "key45": "62T9ZhSu5VKMoUrtHcVUuC3CXD7rH4skhuLAAGA4H77qxiSf2i2eijySk2kAUwj9Lu8Zx7UMn2yEzZV45nabM15u"
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
