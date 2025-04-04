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
    "6wMwBBZKEXQKbm4dtQt9zAHkBu7MnLktVc4ACNmxTzj3ALktWJSSFRkN3xL1T8jLttEWhgQBHeXbv4Psj5gjngt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhBVNQrx5rX5mCY7CSjE2MbaRZUkCqG4q25HDHmCGHzxF85q1EaAkWpRfb8J4dfy8Vg8eBJ7CteCoyhY68CqAV6",
  "key1": "3ektiy91on45NBx6emvNGqiaQcoi8R3mqt7WuAKN8RoeXWegtCar4v9XZ3uNoe2PEgvsEUgPsw22y6fDiEWRGynk",
  "key2": "2qQBCnVHSnka4pMxvFNugaEUQoEdXRYehkYmcNxZWQvHBZd5of1WFUdzysD8Xs537Q6huxokdrH5ZNJjGWhsfth7",
  "key3": "ZSJZoSXsyaAeoyZeQbg25349nju1JwZvxpsTzPSU2j6HPLRQyEY8sRTgNsmeRTE44tPG1dyXfHELHdyhK3fVvaK",
  "key4": "4NQFULgJ38bxJQJ68Wy29saoB98Ez8APgoWGsEPqjHH4HpTGcTzMRF5kbiyxG7se5M1GiG8Ywy9LnpeifamSbsSH",
  "key5": "3kQ2adxRJuKdiSCrSEdf4jmTLDumPCm3CDHqghq3996yyzr7ktyFXtGm4SUmBy2DZtXBYmKTHKSB8XDgH4Wvu2Y6",
  "key6": "2TZMxGsSXnTiRy79Yv4Y6knkty8PCnj6nhWZLSunzN85ZyGtiCF6iQh9Unazfw39HQCXHHiSEdgwau4SWZG9eoqg",
  "key7": "4yGhqqjVMjQWaVwY83fhXLazt6xJ5gknPXQFkULkpNEeWX8hzE9P3SKi7jkYinYAjdbNAUKbjw1F9QUhdDvEigya",
  "key8": "4rjvy4UUHvCZ6rrXaeSNtJ3oHapMkAWE7fKS3vapmXtLLaKT3KU8A4bdpJTc9k4jwjdLhA2anMbfuoRRbTfsihVp",
  "key9": "5mUtrb7dgkBPjY4nx7krKHwrFhFq9gCoQparXntwWF8kewHnfheK6ZeC3kb518mr63sRQtFVVCpPoYNxBthkRxfa",
  "key10": "EvxZx7K1ZCqw6rzte2RH6VX4NW8vPgjRkqfj9SwTsm2frzyMnHnWjZe9zqEnXX1LbTw1aib2TPmooKTYZqMHyPL",
  "key11": "2w6P1RQx9M8fFSmF4dNCKXaEmb1izLx1pTz8w1iBkzS2x4AvRrDhqnVRP6quHXdK7QmkULgKvWdfijsGFs94wZQ3",
  "key12": "5bS2z5Up6a1xCxDWniTAh1kmGQRLjHmZddZ3nsoKy6jSpQ34BYvj62m7hN4pyMrWGUEyvopDzFkzQnZFwrU5HZMY",
  "key13": "4px9r8c7dQAg71SUpZFNtQH4Ugcg1hn4StwHmUXis1NaqxCgmZCsQGR2S9YbhBBBP1hf53164tFA72WNonZynFPF",
  "key14": "2VVwQE7YF4WZnGPpDFFgFLap6CtM7rP8CN1ZCrnV2CnkMkBmKfjt6bhBa875E9xYfhjXAX4Hh3fwRY6cJivFrB3T",
  "key15": "2tjGNFpNuYrxuYq8gjFVUpa1J6VesM2o6biN6tWx9DNQoU7X6stX5dMM358SyDcZJyVXWiGFXWVWY2BxqMDc5eaz",
  "key16": "5tZEMuL49wwtKyFD1KoXaq74baLQe9aBXybBtRBPGmrxuiLjdRs7mooCvLjKazkcWR8oAkgiyziviK1VA8pSKBGH",
  "key17": "5WPpgcwmbvTiKiKPhSfbTcFktCmAkPBQQgqZ56WGDir6KfGGxc6WDEKS2AZVf3j8tTMGFje1CJo1eFR6SZRZazFx",
  "key18": "8KhgbmsMsTDz7xCEnrAjEfy1fUTyWQjRQSCNpLT732mDeNdhDkTt18jq2xv93DX8vMYoMZnapedC8FK1hDkE9HG",
  "key19": "52FsLSTV8bn7kqhBjaQv6pTF8ZwAf8bo6H1WEDFtejtJwpeSQnaYxiwCYd7GbwTMcpDMA5eCviqE8YAboJhAdKDH",
  "key20": "4WQsdrJUeFkrRzddM6LYP3nGCuRRagUdLG9DYYs7V1SqwmBEYgTNeCGApDe14SeodmxugiHWxJ98rFc5TwmLpnVd",
  "key21": "2rcsvqrR2grUNyrS9BneFWucJCFU9FZXoi5Y2kyz3595xH15y9L7jX6x15qo5KztqqGdUH8cbVXhDV1NEEhhp4Dq",
  "key22": "2wZ9xBwoEQjDQ9CuUfMrgtxo9j5FPMDyGUN7sJDok9nUT8nTQ4nC97PkLn98iKotqTgVZQmq1rjYbvq6W8AMwtbj",
  "key23": "55Vt4YfMMCYTQdWMAGtg51YLLwck6HwuiRcJnZJMEvNMhnok4XGY7Yih5e8PHo4PXehcDiYu53re225YRJiy1YUk",
  "key24": "34MWooCnD7VC1p1G2hhaWAaZFsE395md2pVN6S9shazLTCqGHMyaAwu3KQafUtMx4yGTdRHAZAYmQbLW4ERnPHzo",
  "key25": "3kHyYaW5jFDf2BAoeA2M6P1peZPjTDaAf81p2Uw8XoNR68BwLpoQqd2x3JihR5Ri3ipbBGppdazSC3GrH6k1V6uV",
  "key26": "5Goip8JHQnQQJ7TiYopf8iLJEa4ZbSU5bWGP6Rv5X4EUvTvdyk19ueeTpoPXcCekqS4aXNXLXE9STUY3WCAq3NUi",
  "key27": "3Qht1rjxKrLgNWRehGNzygaGgDS6LwRmEYttY5W9a9T9Ja8gWnA3ohG5hx1txVGkDeHZzndJC2QQDErFPLNiUc3F",
  "key28": "5HtASNXYir6v98SVytyNEvpmWToweihcBboPU43DdfCC1715DexkTapFjuCxHJmiX4FWLi58e2ApuxeqsHGzSV3s",
  "key29": "3yfHyv5ehZv6k3kTKSHcHuXBjzCC1mv7aw51Wq1Uk4Spm5ywfc7SyqQ3HcBu81jXTDDyf8rduVHJMz9Jt2CUSdNb",
  "key30": "3b6eCf1a9dRqgrmNdfTX3U61UFzxubAi1RVMuDvENeraevMyt5rcgZWBd1wWjUfKCo8SwiE9wjT2ZLygPrnD3uRZ",
  "key31": "281uVJuP4XJaRqvvFyjXtLFciWGpLga2aqEsmukxGrWN3GsV6o74JfC6CVYnobN8rc7QebcJKx5ZxvRuKge5VdpG",
  "key32": "3uaZbNNc9bKcWvsn2UmcfkWuKyeNiJWEkbvapvjpwVx1Cu99eiDEUSf18wCNw6P2qv8GEuBERFNQNnA1rU41YEvq",
  "key33": "9DZ9BHVSe342AnRa6sk5Wz5DdisifeNz1hBiz4pho2rG4QYCgQU6UtynHcDJHvVZUoDxGTAn6AYPZ2fYGKycJdP",
  "key34": "2mKey6MxfsEzTYhZL6zXV2Phev7pV2t5S9Vawxym1utarZJYrmfMGDVP5z7Er2B6VYkhrpiJKTYYmPvDP4MfDVC6",
  "key35": "zXbdhy27gADiNBXcDKc1HUrpTbqPxoKPbWrxWiYEavpXxJe7uiaLxXsuKtySXjxPeU2LzqXYx7fXVhQuyjMz2Z7",
  "key36": "31nXBsi32KyU4tZyDpczyZxZYLzDzuQH8ccced8PN8YviqJ59b23K4B67czEfENJR9Dboknvb2NySUxC3Uo3gnjS",
  "key37": "Vxsjp91HLkC6bbhqxUVVJFX7hAiiyYEE4qVkHVPS1V3DWwMxWeGMrQCSJoWmeW68PxkNKpiJGeV8rYdghSy65fi",
  "key38": "4NyCyWBpX5Z8WRbr4fAhQr3rEY5u1RVUFzgKj1KUzFhqNS4s5kBM6Nd7XtL9Lijuq4weYqnDZWggPTpD1dS7frep"
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
