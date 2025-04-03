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
    "4WjZo2iezGJqwLjYz5QcGzFihdgFrqqEFgsxi3kPDV7tv9H4DntuRk2zDyNetNQqeCrH3hRDzVkfYsm4Dc9u6Zid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLjz5MYmNUUEn3ynks2mW4RfSnGFGjHnTVvacUbEYXcZdUMmcZGqR5gCVakEShUKZJxwdAVPrsTRc6aanEWfSaY",
  "key1": "3LNNutrFGbtFUywKfDhBFCk3mMRQCRiRwFyNoj7vnXpKM4FBjHPe1HFRNvvDLqLrzw1dqtd2AEDQi8VYDaDoKWpQ",
  "key2": "45QT8DMp1uZGAtYMQwf5M4rcD3t7Mw1CYTSYxcdf8ssNKJVfr916LgX4jdrZneME1hTvgF74MDSPApktcUcZB1Na",
  "key3": "2iRSqBae9XURkb2fX4qP8TK771DM4UwWcMS2jgDSVJXVYfwTUnmfQZ6gjtNEsAFnfZ3DFFghzTYzNYjasWFo8KxQ",
  "key4": "64nKcHxdFXtj669p2i4FdPQKtvTCitpKGuf8CYBGuCYXhSbLa17PDzhV24Jk36eyuuMnnQ9F4gFFBTkE2qR8haHA",
  "key5": "4XaZL6VafUK2gwYwQPEDVUVLJpvndvTsMnNbo4PEawFveygmAXRw6hnszjXJeBrGte3UayNg6CyrAn5E4bRwDyD6",
  "key6": "yDs8kDK3chyDkn6ttT1P37RzxmVCqfwqQj3mnrPFp653K2qemvyFLz3QFnErMRAnUDgMWQEyiiyaa9rA6gL6W1f",
  "key7": "5uTWo5qPfmPogzvNAXN6voyHLjn6jN7z6JtydyeVQHVCVcfdNY8hLULjKdF7fxmooRREwvWDeHN1seA1VxM8sQfq",
  "key8": "2fWPpRYmq25RfyDjr5vdK9B2mCTFozGxG4TWY9iDhZHT4ctVyj8wSmi3cQdYxUK7FWsPzd1KuLkaui52yMbXYTpj",
  "key9": "27BnT8CP2nAdajdhRupAo4jLsYvBSs3dTXqZjaSKJNS14nkqQrpJvLzixUz36uFeevSUHqw78htodTwuwomGgUB4",
  "key10": "2gvkrWRuWhRU1hRKuSzBz29km2eExnRSevQeMBsYF6FosNYb4r8s5uwnsxBscSQGLaEPFvqFKhz5mh7ajgedbidr",
  "key11": "cEMvmfE7xBBr9kxR1fqwhqZUsudF1tcDm2BLzojD1w6UmJjc4AuHZB1rWnq5VLzJpYvoBDcHapJ4shKqQWERoZT",
  "key12": "4vjbiDvGwxB7WgVgCVi9rWBmDE2oQ9JYbe4QndSza3m52NcfYvJSKff8vgicybSiRxAbYsGtAqigFEggEhtgmAxr",
  "key13": "5pxfowjmnaHDEP3wreAha3aLeeVr2gaev8Wjz8y71URKo6e4H7LAYCGB96QmehdbwajCpri1VEUAecrSS2rPV31d",
  "key14": "4biq2sMu3DyCL6d3bXX7vjQ83FvGH6AMXfdmbTKDTypy3FWaTXzv3BVKcsWSxBDD8t1dk65s2VFVeaLpUTXsqucG",
  "key15": "2Wk7x9WbEbnA1DajGusK6aRXYfvgtJZsyNRj2fPko49KGs14Leep5NHv52uZofSPEVWMQGn1gkC8omRVWXhKMdFE",
  "key16": "5JBqUrhzLH7E7GMVqJcxttMwadwNMR9EQHFLoTPqyUgVnCBregmBth5YghtVRq37GdroAZDaTiRnAmVU3sEp3DgR",
  "key17": "2xT8fgXRNFqgQgLS31DYu6onYVGN4dfWYMHtJr62exwsSGHCxWWaoNbV6NSVtLNq5hanSbGTSyY2jk1U2KM5n6qT",
  "key18": "5zwNb1pXDt2A6R5ouiy8Hpu4xgBRHYwiCV7sgBs8SsY5MigQEhyVGJurfm7a29J7UCxE9FrGR8189uamsSLq3ERP",
  "key19": "3UVnbGZXszWecRZyxzyfXg67DFVEhnQFUWCrkme9VCgEyE1fJXkP5Rfkzhjddh3352PWeyiUcesrSbEpfkFC2VjU",
  "key20": "4bxUWr7zMeHLpAUdPdFv4KaNFXxDeq4cyC6bL6nwrYMTDqNULeEpozBN3bbRBkbvBfix6c4JJmox9KQq5owgZgxz",
  "key21": "2Tp21MjYmD3pweqqizzd2cGekSCPuSzyfhr35jksm8V8GQyX2cSuX1Rti6vRqtams59yT8DupKCYeXcupDVDyRT4",
  "key22": "63JJGNDwsCEwK5oGY1fbfvgtUxjs3zKG9vXkHwd7UbUzE9tUcnR6tn7nxjTSGu9BqSHWWn5QCYx4owygsoEsh1HK",
  "key23": "2R2cPikXnkEwcWhy2mN3FWgJEcXGLdFySZnpS1wQse78mysshskCopBhF4VQDAjqz2vySs4MSriRxkskBo1ucq5R",
  "key24": "2j3fTwHaFxb7jiP7jV1d2mpY2ph66TexqKWN3R922jLA6uJ94qEiYjdsZ5CJDhSTFq4agpA85GyrGyrMFocryRuh",
  "key25": "47kETSs2ecFtE3A8k8DDYEt4gCj6CcnLm4URux2NgDpELCt7UcvN3z3mQPcXD1vJGrMJbwsGozniPBvB9y1NNbzF",
  "key26": "dJHEBbaVN4z3RBt9nCeJiDi6nLshfC7AMcvhncUgpH1rG7n1YPZgvMGE91Vkv2X3EkebEn3WbU2ZcjGG3qDLLB6",
  "key27": "4y7DKiL9UXtKVdzBQufnVJ3hyDS8bZvZV1c2iNLV7xqz1F97zB4YaVJDeBXQPSYSTNcLFkp2yPFSt7gtrQ6WfBZM",
  "key28": "wRpPZogCFsssCgckZmyA9bTC9eRJnryESSixD8aK6um4JVPHfnAwSaQmmuREnQHVkY93FUh5NK2F6suG3jKwU1h",
  "key29": "57d8kJ5jzXqfeH5HWQqdrUzzRwdSYwSHJRGk8gDwXxNGZ52X5FsPeqoL7k5D6PiPfaTFVfoV4rzdmvQPTxBRZYbg",
  "key30": "5s5nLHiCu7A9Qrd4uZGV7qDHnahU5yjxymLCdZREBA9dVNZrh4cFjXJ9Ldi61mRwUGHZwFDMBC7Pa96cH5HJdvxG",
  "key31": "1HnTth6Hs97KjTTjkxsaXnDvWhn6BAe3oZVmRMkzJvL72od9km3UDSQg6ar8qoBCfMMUnv65vh5kokh2VJefzJC",
  "key32": "4piLic7YzrnGoENuUf2jeXLQubQzThVs4boYNe11mbpKTjDtosQu9oiqf5gq74kA1d3v2N8rhE7HAVN4Jhk7ebEN",
  "key33": "2cLrT9nMoU1ULoZvEBCZhyEXGvKHKPMVbxJBP5BeyRoGcufHMFEK9jt2P3nxbSVGCof7XG96XpL6a41hJDfCixAH",
  "key34": "5od3nJKAjiei9zNTrY9wkRcGp1kgNv3vcPcBqMcBguXd7x5VhAHtzKXhxnG9bdAqJsPHdAhTNMZSYMmdFaDnsVeE",
  "key35": "4K64Touv9rsduNb1bQbeK8JKLdyvCZN1T5XSnufvn83uC2hVWhzEJJARnC6x89cbvuS4vC4vVrsypiewGcN7SK3Y",
  "key36": "JQp3kQ9PSgQBasaVyfQxjn6XzG11ovMMm49sKqDEnjTExzuRVS2gejruHnF9qUuHbpNsU9sFcxyHWxgtJkTC4d7",
  "key37": "5S9Y7omPWNbZE1XMCfCqTWsz6kRzSF4rAUdDMQ5zB5rNPqzhV3dKWQXQG3D6uTz723BrwNsBwEjWox2MRymhUEyt",
  "key38": "4LWWN5k9a4hgdPfCkG9UWtixicgDtHybZDrRkU1EWF1e2gMPwAdnnRX1SrkthS747PM2wSHSQeL9MuzxvtMw6dcs",
  "key39": "2q8ExYMgt7BNwkF8XMgaWXRjXCDZ2vxFBeKmfoopSwTw7gzMj9bUniwRJxgEcwAvW1hTmh8nXf42SQPfJw9ua81y",
  "key40": "2rKHMj4Re5oBfoxWCBQGnAaGAWabzY85hvj5yXxzXfF5r7YZfGCfWi23DmUB7TuK1GHeQGq8EnPrKc9mqnDHN9tT",
  "key41": "5pFGRdkd3kMiNshTHeQzA5iDgahNBVRaaFWbnanthuuRRueFSWSKZY2qSdV6PBQyxzGKGJRyTk6YfvZpUPnQSsDa",
  "key42": "Xie6HWAdYmPFCdhGURWiaMRwy2BzPEWxjeVwjPFD1T32HqA6aZfBDNuvo4QKZAzFYtMxLyT2hYsBFkzetZKu3Gy",
  "key43": "25a4Hbw5Gk8EjR31LVn59fHUTrbWs2uzhRJPP7rQkPALvZnfuUvsxpFbjWhYiCdBfb4ac65eim2ytQAsCVwYFMqu",
  "key44": "4LnNNLQQ1nV4463MzyCKM9vGqRRXCqgvEZxYvDjS9kzzeNPe6wMjeN2F568aTE1KYX4GKoqijyzrhwv2PBxwBoyS"
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
