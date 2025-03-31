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
    "qsjzta2Frg5qi4v3k6oajRwu6T5zy94faXMmWiXTEZpN7LEnkzsDrwkkP38sTYCUP3D6RNNwSqMFQdLstFUXbMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgMB3capKjXHw1DyBmrjD8KmHLYt12hgqeqrRHRc3jDHokjrxPwZmBd8LUTvSXv423ccf5iTGEFXmvQuLErk5sx",
  "key1": "qeuUD6FEqz4WRYvBiZHetLQ2EuBi9BENJoNfURkVfuAmuQ592zCG8BkJN9WYDe2koewmep9XuGKgypGWBsCEYBK",
  "key2": "2iMJC2sgv1rxPNEAKL9dc9KysMqeWU5TyMMgC2CozNVVPcmycwMj2h1pgiBmdhEUGqoYQoRv1odXddjrnx7xx9uo",
  "key3": "3tUTDsdEVkd5XhXU6tRNPtfRs2YmokBmkP56tqzZF7fGa5CikXYQfxHqX6geUMQPdiYfVHr9PjjB9gC8qt7GD35t",
  "key4": "3cqLMmMzh4H5MsXrfLT9hCQ2xvLajihEKYcK1WTqiu2DWVJgh9H36b5LWT9GMD8eV2V6iEEhQ5is2fD4CrN48rKx",
  "key5": "3PqnxquL2v59GhAZDbWsz3FMXePGJMhW7Vp6RkhDagyPfyhX6jhHQAb1Jec7ZNbcpqxgQy6wvuGeqmYRbnPfCmPj",
  "key6": "5HjY5PfimefVMZrtNMw2oXnEE2bAXwKt2dz1urUUoZZZTMfVUhiJB2ZucXbJEGL7qquC76PMuCnmHDrRkWtyXo7n",
  "key7": "m6QZBCZcDjBhAS4nxaArnZ7H3xSbbosfcwAx6kxcU2pAC2j6fM6y9TmtVFAQXCChfySHcLAJeSxMA2cn2ibjKvS",
  "key8": "3FSkv5FFxUn2G1TkRZ7zNKDMjwutELMRciuyxndRMYT6HSmLZxYven3wQpfmYkenTcZLerbLJGH1NEz27GGqo8N2",
  "key9": "5vpiBxSo2TGZQMgaPYHjyMUdFxhVfR9CQ5qeGePNPfqKdtKuJEYhTFsdMaAzN2dPxMTuF7ikHfidmvsXmfJwiryS",
  "key10": "49hEGDQ7isbTg79YwhhtvZ7TX9Rz2bRqhB6UM6XM7RLiW4JsWN2w5gwwb1Ng1vJHDJCMoMdCXdKqJ4pqjc3Be3vH",
  "key11": "4AePoJQ2d2FmP3ew4R8HWvwL7zdiwAMKK8chRdxp3U2FrUfXZaaxAC3JHcQVEQN7aSUHXKpPnVT3vTUy1aVVbJ3U",
  "key12": "5hTLFN6i4hU2VxyRnSQzELcBzQN5ecaBWTLQ2spcKMq2TZTVZi2qKxjotM9w2UbiAJ3SE9VEKvBX7QEBP5WgsKcn",
  "key13": "Z3kbEvx2X3sr79Zu1H4BnenMhHsc7YDBKUesKogysn3gtVznPWPf7V13aDTJSok72s8gWGXKMRFM1SrhPiJCPgG",
  "key14": "HcKQHqPMtFQyD7WZQLfFv3HQVuZkTxkfMD3YE8rCrq2Wcsj2N6BbRNUtq96UNZY5KphNBQJAxJY9orHdFi58bgD",
  "key15": "2X4md2vfbZ3wzitsmmFU52qjUYtiQjftGpHAXxCa1zB9d1yykCVM4EpDKvB4jemcQ8Crw3G63KNRHSbsskjFmNJZ",
  "key16": "5GaP4aNQZxnpLmKx9HR6bncA92kUBMwdNtuXNPfRzZEBLMNmZDQzeKwjapfoakvNQShnbomWDkFEjR5tDCKvxe2e",
  "key17": "UZ5SFzfgCBu7gBw9mDL65aj3byjmSaiLqT1zkEkFSgYPkpXMpSG6SsZ8oPqZdjB2ETMYyHK4yLbtFZxzpgGSKKX",
  "key18": "2vKEZirjpAYrNmzQJvSeWHNJvuPWF263ZZAKtxj6HShuEfQD2ExakzR1WxGnwCykenQfh17FYQfR8Lui1nZMjezZ",
  "key19": "ZNVs5deLMy5s9zBQB3DRnPT1fjvnfqAVtM2iR9J9JAnP1m66QP22JSwSgtEbmEXqV49VMZa5UPbtDsm5kXABSDq",
  "key20": "5ST4c3NoH4SoQfGaQeSHxUhUJ3u4GuRpKHuC5TTC2Y6avfbSpVPCafvgtd54BxHspErY8vZfb1Q4KW1YbjPAGKMK",
  "key21": "4rBhWdmno3d6heE3285zsDQKQ8Xh7Brc5d6VNvUaQvHbA3CoLcxGpQ2HDxBNGUzWu8Kxa6aNwHXc14orgU663Ezn",
  "key22": "Laczuw1RnJ6ZtiyYsjWioNQdBmiTsmqjtGq4x2sGBR2CGuko15SofxWRNYDpg6enBv44rkhjKgXLGRnYi6KcEp4",
  "key23": "5hRJQeHtdQPKT6hwssL97c7ZVgQvcp7b1bcRu5chBsT5XXSqj8jnwuwyz2Lf3ayzrKGX1soonrm6qjLePSG5CsD6",
  "key24": "5iU7NkvPBFznnz1VYfgNxkmS77LWEgk9ZmsduJohNNkuRBFbNZ9R6W5kyXzSi6yNDeXGLz9ivJRD49c9QeYrSyKQ",
  "key25": "NAR2iufchL36eCnXLcnB4xupfuJg4bjoXpzJeDCRoG6nkZ9BB39DrtED6FqRANzgKLnanydGvmEqqkMpo2NJraW",
  "key26": "39FhXsLgd9iReKdGBGDymgqWiWMXaKXnYHbt6JZJq6E6KENgs8LpgqWZ9i7ruWYswy63vkqUV9c6f2d2oLifgsTP",
  "key27": "4bHw1pMxkuJ5mSfuATDhKXXGFYYym3PJ18khqnRHSNB1JDyZgiWCDhmCcDo2ixkwU1Hbzuh63fBCyQjpvWAZRrvW",
  "key28": "2gRXohn91ZXzo96HBbuPTi5BN36qxHfSZDRBTfENrv7PLxaSNFzMe15kg1PYWSjvqSaE4iRtYJf1q9KnSbH2wELE",
  "key29": "H1GyMM9bM2FcQyKx12gbw4CxKfXi6awwvsHdHWtV1u77xGXPXnPd6BqSm8ibfRw7oNQAcsifMK7yc6gtDegL8uE",
  "key30": "5ayinrRC9mS54TRfecA7W1bnkP4eNY8QmYf8LMpTSNPB4uWdG36Yda1DkimW89X8vkbwrHcodt28Nvn1a8ZQioaj",
  "key31": "4ozMaKehvrhZNkRmd5GAoqM4dUkvmNiqDGXEfCZk8sgBNEkbdFHv5j5BMNBz5Q7SrM2SVDwvP24mraAv7aG5a8vW",
  "key32": "49NbVVZ2jVKdYDEcMrojHou8iCP8rwkR8ZMFMJfMGz6zZyTzD5fNcTrocij9NqCGQur5RtoLVQFEjtDG7SjVsYCu",
  "key33": "3wB3iVvii81LsP59CEV2KQv8oWhvM8hpUaSyPNXdZ1VYcNiBhSYCo4ujTto2ADAKBj3eeXNPNp65pp2A6er8pfmq",
  "key34": "2cPrqERzugmoCV415ENmzVfHWfH5rz3CaadGCS3aARvAWBndJjyZPFpZ5Cag8z12z8BWmrN2vwnns29STW8qgsNa",
  "key35": "5F2kpE5CpEf5WUH7em2Sdfu9LS4KDTAG9UWJ4sv3ic6o49JCybo7ZczERRdZhCDHCK2uKgmxozAMjESazAJyyYaB",
  "key36": "4eeZQraUmPhGrKxWDmNzoirv7UdsicMM8Ps8DJnw36vfHRAUGkLZtzFC8RjJrHhWrACkk7ZXyWGub7nhyAQJRbvm",
  "key37": "5gxrvifHshUJmb2aiEbWCju6YHNX7G3FUhTFuTnccAf74h51CMsPR5Jo99vw2wabWb9cpY61sMcQJzAa9seRUiHX",
  "key38": "4wmgkQqQmTLqLGYmB1uaAF1emLiEGUtpkHmveJ2dHBkaSFoBpihnZcmqDtueVaABavP1ipcUv1PmG37mHQi1mtF9",
  "key39": "3FQEujksvtAiL14R4pmN1XxBTkRQGN43vhC46xHoo5ALuZ3KsLoXACLFnUqnguvC4iYrVdGjFYMHMhcpyPodqt5r",
  "key40": "2oogKdADSHmtcvaQs7xd18a1TQZNCkrny6bwHFff3bUMJzMJ4MUiFtz2jBd6qyyCqC8VBYC2quFo38fabZ9ciApo",
  "key41": "5tPgegWfBehTs94CqCD3YiV6NK1EVGURg1xWn6S82ammKJnsrjqx9aTK1mWs3RvnYrq1oDpC2jMn8eRDi7BNxaQp",
  "key42": "4vn2xhFw6NgVqmjMzq6gr9VaKqW9WvitapVSrjzzCDqWRWEw7EQvpi9iJ2cju8E6Dk4e8i3zoQxKYgWuXEoqB6Et",
  "key43": "2MyrDtiuZ4uThYcWzxei2sN7PmD6HngiNJigoQcrkxDKCP47tWznLgmEfFueaHKgeZxGujTUjLYgxbZaKsZ6Munz",
  "key44": "ps1eN6EVViMtHUSe3cT5dkrAsFL24jm7hrNhJ6Fx6CmDGtxx2UH2RvjtURzXPQxvcebGK7J9bdp2MuFtXXJf9ba",
  "key45": "3r9HhwiXFXQczHssyTNbTjwaRza3nDAiUvpmVEBJHqL8cGcTsMC12p5f27ugSAFNYUK6rpWbknekbnz3DDEMau8X",
  "key46": "4mZFwNW1vJHvoFjno2D6aGspEzxXF26iEHqaRaamyrqVR1LzM9Gob83bJrhbcSVz817oRUEAuDLWRX9JVv9GTaty",
  "key47": "5Ddx8wRsZS5FsEFaofwdBPLh2HUGzhmNRphEWrDhibvkXapCP7g4b11iaFWv1ptKRnH6oLZDBZ6isVoYEBFjJNsL"
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
