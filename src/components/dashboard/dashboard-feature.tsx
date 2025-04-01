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
    "WDAHsmzdqEGGLjiZDPvyYvHbY5HwL1oYKYyjmUKbA3dQtBEWEPKG6adtRDVw3XprSDWU9bf5mhWJmRnqnouwfmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UziHVZGPiK2uPJ3NvKuFTdY5NKRBwcdg6faDU5cfydkxQrWGr6LR8jLBsui1pg8XW4seQmAduBm9bYA7YZ7apJx",
  "key1": "2PKYBw5dfsnpUpPsvsE7Mc1hyCBeXPGxPqRqmSq6y2N3ESKC5cWr7HPFx2eEiTsy2HXwsFE8sNxPA3fhewk7Ay2J",
  "key2": "2u49B6JySDjxh2dBojhk9JZDiFoELra8jJasRHbGG1rVMvmPkVCa4rLYP11oDuhrMngHCeTZFRa6JT5LkbXjWjAM",
  "key3": "4QvwyjVpgaio1UeSDm79rAJQkYKV7XpzF9gJkdJFrSiNkCH6zeQ3odUpMixdA5JEyqvUpAApMzppYT7QdNUUcjd5",
  "key4": "4ZbvzYs7dmuPAYDjsJjMVbua18zSZyn5KcV3KS4UstFqDPqHiBRmVcgbRnxGPCRtk2wZPytkK9ygDiJ1NTZ3nFoT",
  "key5": "4y4AthNG9AhVHYguhKWydaou83xU6qCgmUE5s2CTrKvNDrQnJAgrgyg6v1123jYGeJVKhCtJcQ4hM2JS8TbzWasi",
  "key6": "4VqwBeXQm7SMKUZcn9heiVytPFr7AHkAndw9XtHvQ5uToxrHRB6eAkAEPj1fcVgtrq4zMbCq3Nbb4E5WLi4JJS48",
  "key7": "4bFxGnxHs3t2ZhWt2mPd5LFRo25j5Y7Mfu1ZwCVwtJTyFegXNsTCXbYi2VmYfMBZ3N2TN7aijD9qWQDNdS979JSD",
  "key8": "3GpN9DHWShapv84XPDFm9xoF3jE8fhtVsqqRpQ2RCR4YNxxyBHzCEkVWCb1nANmqnXT7YMEtPKBo15B1fLHEejrU",
  "key9": "5EkPcozjjuk9xRHfR2pR98YJb1kSDJwJY5ogv66UiiT6yyLjkk5DaF6kftZhpuvAzdEh8gEA3vYjBHcDr5jehHMM",
  "key10": "5K8aoN2CdtVYuqWgLqjjU4GHMaRPxk4uEYShmJiPd8ABCBgn7tY986ac34z9xjUDkMkmNL9XPLGt9Xw96cY4hh8A",
  "key11": "4gTAnmDyYGkrjyxP3sRjV1g11i9sdjpwLdC4ppMg8EpajRLBcNWhKXUHk2MXJWTnozSnhbVhC8H7RJy9ZrY9VHnU",
  "key12": "2KCzG8zfkvuXUiQPhkoGnbZPb4YGHuyLtpvuCc9XTLEumjyzwVRAH7A96GUJ9p6DqBG3cE7prPdTKC4rDLT4PSzK",
  "key13": "3pyJQxKXDEggUqu8JCXmZzVxn2iCMJkRRy73ZrMc1NuZL4MrexiDKmNBMju4KhvmJVAtc1B5x59V7vXxwox6wFrg",
  "key14": "4W7pyLyokiGMQYW7KSWXRVFnwQd7THBZqem6JV6MBBrfAwpjZ1j69cdD84Uic2Kw6WTALEj7MP312SdWfXK3sSNK",
  "key15": "2fTm5HY2qvD7yZhrh7gonVWgaS8UnbNU6Hqx8jA8deBRmGCURjLeQrLZ95qDjHGqRKHtFkkD453Q2ZE7aNcUyxUP",
  "key16": "4GepFcL8ahYNjY3YzvKGdwgyPzUjgBDryJpcwviMZGMYyrsjyhB2dzy7qygksaXxwTCbRqTSsVNmUZ7rSiCopW1U",
  "key17": "3Mz9r134ebHdMRMZENsgogPBPXqYJzmt6v5RB5arszMyTupviENXH3bwuXLNStv6C7hYj7YKqmQnqwGzw1qdeipo",
  "key18": "p6uDjfjVLffjMLWwZu6Kzqf5EMP6WzkSjskmbt3EPd3bYdRH3FGnfytKkQKQYvpZRxengWZQhiivMuy56X7TN57",
  "key19": "5g1SaumucSmYwMo26rBwhvALuc3DEcTYeHiLG88NXHp5dPdgN6bvmVLWbFEDpSxjfUP3ZfzNJswzqDXz4fQo8xTs",
  "key20": "48u9haof1oUmrTKSC9ddkoTyyq1XMex5dnhdxof2e5QccGGy5UH3y5423FS9fFQ1TyWJNhr818biHH7RndpoGYqx",
  "key21": "4xKbtQeqbrwgsqUEtkpzb9WmSECJrS4LZJc1vcnCzUXiju9yqnWjme6Wpgo6oNAaVkakC73trJzK6sHdEn2YW6gv",
  "key22": "5Yt2Hw2h4dJANGcdTxWCDLQ1QBtRoitxaCYCvdpUiTdUB7UVvM8Xrsg6G8rU36fw1VWD2P5FHCrDmDy4ocTsTgsp",
  "key23": "2MN5B5szKSHJy9ZWuvhkrFTejpiAoSW7zYj28EuwKgivHDj9XVyU6x4KrU6RYvfWwUHZGfRcNwqSw5bMkSbeFnnp",
  "key24": "2HuPG4cBSiCnLid5u1sEAzHxdTog5fWNjAjTzKapE4RXbrrEHLs5fCQ5woySXdunR6DeTcJb7Gx566ETu4LmKNoV",
  "key25": "vCxkU7EsnFBgcsJrB84wbw7Som83mX5u2Hcv1gdDWaU1pzaa7mc3u3ZnAQMRBX9jQpTuypkxfGNUhUYLvQ746aE",
  "key26": "JFMbNxWRFkyH98Gg8tydA8mNtN2uruomkdEgVDLrjTwThWNtgBMjJuFw1vdMTsXSk3wfJYMZF8nMZyVaSzaTNAb",
  "key27": "2RLLhBo5XhGKfdn3jZkLxb8V2VtQN656n6yLnsCEY5Gag2vvnZ646fC84HPMih24LzbYhNJeJkEqEyPwjapVVNJ7",
  "key28": "3tpMbR9X2vu61GDYfZ1tf1khiAztFTS8KqtHyvZiQ8azxmrHiWBhoDaBuQQm5sJGXddf1LP7KWjN8PCUEVbAHvq7",
  "key29": "3Aqkq8iHkEaTN3entQ4ohkenbY9e6cM1mpqN96EDw6u2gSY88to5VuSyckcZZqAE8UQ2HeUi9NCnNGMpYHEPAeue",
  "key30": "4mBakc4cuwLfeyvnnUs1MrEHcot2GroPHzWa7LGh5p8bSdCuVPpkdoT9Wp2mYPKokGZWFT9jzAzFF9AvEDVnuL6m",
  "key31": "2ejorpvGStYsdVyfHKbzX4EEab2tRdaVb21Cu7qoKzb8p9Qt1f3677JmVDThrci66YmgFqAuJyhhnmv8N39V3zMw",
  "key32": "Whhuaj9EatqC85gZJAgFKpehsSkgcBgthwkYoM5pRVw9ovSYJC35JQX6kpL9eo9yqDXSG3hHvrekiydhntxtqa8",
  "key33": "5jougZxyiBDktWi4Z4xrM3eKNY6xowtwGiVbtCET4BropqtQvrtspv123GLswjPvpGCARih5BeZuQ4owxi42bkqM",
  "key34": "pNE9i6yPVNbsPxxP3d9nDNPWNa3zW9bc548CdXcyrhzRNCuvThpw2ehw6pNWaiTD5ocM61SPg1VBHX6mJ3NSjo9",
  "key35": "5V84KfnxxAZyPW4b1BbLFKm3zXxjXNkXnYu951daFtL5dxQMpdvFBb2sdQg79FkQUa1VTVRzyzqoAk9TDg6yDdpp",
  "key36": "4MLCgvKK8juyH5ZJYwH1sZf63eeuChYeURVyH5u1e1CCvuG8HDB9MfP1ws521nzjqA4JrxB3b463KTTf5cc7CdRv",
  "key37": "3rHmoqbEVsiamYA5a46deBQev6mdgQCxhwHmiqNU1x5fburVEFE9RTCRYYiX8Xbk4vbU1Frj2Vf9JgzPR8Yu3hhT",
  "key38": "fAc6zeSHvRrDweUCJCLYkEh4HSbWhz4u8Y9tXkxgoaPm2SSrQZ5WpiSZWHZh3fcvoW4whB6m64VhR9Mv7E8KbM9",
  "key39": "4zUKAFuaeewVCTAqFd2PQLZ2xERY7o6RKZPhftQtQp4CUAz2fbJdjqJ48WD7ztRKctDqAmo1yxrrysmyumve27UM",
  "key40": "2bmon8cw3LfRJ9jnUx2H9GGZXpE1dBfSasCKEei34hVMLwY6mxtk1EaVCpt7GYVzvsvk1YVTsF4VSord1KcRuHzq",
  "key41": "6645Pyvzz1MFWZsHGxYgicjfiyivkPkTYtfqKeUhsEdTdoRv2Jsh8iLLtVhGthxfLswF9uzuxpygCfNErwMuFrNH",
  "key42": "4DP6gkhHaSHvoMDN5yk6fa6F4YNm7CdaCUmbD5XbHrs8968DYsABbNbeWdodfNsUP94dawJzwuE9cyUAQqtrVmn8",
  "key43": "4qrT4ZXNEVpg6iNin2u8k3RseTF9Ubi1ZyfP354DevqQHjv9V55hsoqFHNB1ktSWsh6GVRfWDV9XJ4xfaCfA5DiN",
  "key44": "4RhPrZvqqqfmp27CKTSEvbKFA2H4kRy3VLefuraq1S3Zq9JeH4yq61hhwLiao7Qm31HUkQJ8wKGwpgz1NdKYdVdX",
  "key45": "bon9Q6f614o3xGFhpyoi78nKBcHJwd3e7f2MoyCAgYnLc31MBhWhDxnRhqoLYnZnGReqhhyqhpa9KavvSbvdRLr"
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
