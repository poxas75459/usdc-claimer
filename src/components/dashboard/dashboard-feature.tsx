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
    "57MS768PCKfL7WcJfx5cD7xR5HVgS2gakYm6sUixPP9zg9voXk8oxNTU9MLGMHwQcN4h7qBt1h9xSzmVFv3xMHUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNLZaYouu1TN9KvC6UTpJXmcb78imyVsyVhfcrN1cC4bNgprFht3DQKp94WARuRdRr1dLZbX3U6NAcaaa2qoRtj",
  "key1": "2M7Ab88Bu2Nj4MUyZ18BYiw3dUCDinatvbbRWwDZbwRUeZ4dJdPze5ACM6RomkoyZdPRMyD2oTQtBpWfsQPNyftb",
  "key2": "3b5nach4TkuFbBV5WA7ij6GFU6SGzyrE6nNXBtyFt5YAi82FpuQNQDrKqmc45xqAjgmAroTtuv4waEmpMhZn2YL1",
  "key3": "jodKFP8Nese3MTnQdiJYj7JJ2dW1npmYC4ZRPNi1aYzTAePogthqLnYe5HNYwHBWkdAMxgyaFs2BW5Sd3Y1fVCM",
  "key4": "dg6KA5vVax72sHsqmHhA4tCwFn21qff31AEQiE3xh17TTCdJgQ81Jgv9m8AMiZioxfzVeVtYHyKc5DMxQSbWZMv",
  "key5": "4fshEnRKfqsatcsMZJdmq4xorbaNkwDjJByvTdVzUbp18fFGmNVgtRtRPxidNFviNbTpupCBrrhGFD7zez5FLMyi",
  "key6": "3hRscUrDY1zSnfS2w5ateMu4VYkWfmfwGQYarpiUzGfZTdu7R2NQqVtdaF863fkB4Vyt36heQySfSKwb51YkVzub",
  "key7": "5sqN7Jo4j9iVGUk4UbY2mEFfhXh3Fg2jsxfWnYMQEzasgSnR75X91rWqBA9GoCaccPjMvzeXVE99Y5TziMzJq8RY",
  "key8": "4JihLUHH3cp1DWvAqTNpVEbMBCRp4hfCKWt6mB1fPzYQtFjmjenJzqTJrKWdeooqM76nBVDa3NgjkhMpG8qnrWjR",
  "key9": "2L52Dx98KBqhVz9PAj1ypBU8ze9qiYFTZ2TyNuqqsPmJkD4X2yGeSL6Qu2kgjEFthqemmu2axFQqetVYk9yC7Mt1",
  "key10": "3E3eBcy86k1pV99AJnpChKkuYtHo6RBg1Zimi3LR5eQAZgFqsMFH98MdPA3kgSxA5g3u4xgupcFnahJJ7Zfso8DT",
  "key11": "ktReVNuSAdtoUPcsUXfByFeyLZ55kZDAjNSAqy5GhotNQ84ffqRKDNyTrrYBPq6r3BUx6idXbQQP526328QJLei",
  "key12": "5ZC8GwBTiKb2S94yH99upUjcHS5MpQ47taZpQ271zWcr1zoQe6TFycHay2rrU1zb8MqWpRdD9rqgRjoZXmHJGt6T",
  "key13": "2dXsyx4nvHAzHHTYHNk6dhkbgucygRLjiLoPSJyFSNAvVur432g4fJeiaaaPT6ZohG6ZK4vFDsMx6WnwmLU5spuU",
  "key14": "4UphY7f3jhbBof5FyRTAnSCKaFUy8gaK17iB24nowsqHj8q9aYg7KJ8qkevp1YES7Syu1AAH2SxWiGpMSPmSxHXk",
  "key15": "3xUvbhey6yX4JqmYGhgWFZEvYs1tJaUUe2ZJjRj14dPRC5d99x7HfNF49CmegYGRxqZkYcDoVnP6MQaPvvf3NUdg",
  "key16": "52cS1vgyQhoSFftHkWLZp23WxfnkLakpnQuQLeUzTFUpLWtsgPTCx2WZaqoRaPYCaLdy7yaJKH1zrSKToCVoPHrW",
  "key17": "47hjcFgVKeo91KzNzezsxnXd5KQnmo1avHaagY2KirbBp1vmg9vLkje1TGHAFrbHec2Zq7h3AmgswmmyrjhjJ8Tu",
  "key18": "2ErdmknwU4cFhejzqELpNYMjYpdQZ89KAFMMnSppXrq8NVTEJa6eMtiJ4gia75uKLGPqLmkBjkbdxJNZFww7zcx8",
  "key19": "7yaupfU2q1qmKrHoEwngM5VAir4nVjzNGJiSZBqhSifymUJ9tvLNTwLgtstNsmMbp2yiXrVtWpJgZP7T6AggFsb",
  "key20": "21JUAL4VLXxzpiNLHoUrKeH6v1ETFtRuFARPwnJwRgeZKYNwJaVqaqm1aJ1dVrdwqNBsyptg8rHMMP88uLqQPsxm",
  "key21": "4kEJREAwknsAVjootxh6qCN8GVHDCCv4xRX8KprQZTA1dnZ8FdiDRrTiL98rZ5yeENLRX3BtNcwL48nFupDRPCZj",
  "key22": "4EkHWm1a5a3waiF9asZMEC3nEkSaBou7Hs9SUAvgnjw6LMFzehmGCLSS57mcvCvxRMXEqZyh8byvCeQg1UL6MFg6",
  "key23": "VWNRUwDyzSdsTbmcwBcJh2QmgXFym6QhYoSPZWHs1DFvm8rAEDov7vb13KHqi7DwjUkAAfgM1DNRuosYSogNRQz",
  "key24": "cUMyMTD6TWBga8Yj6VwyVaK5j8se3MRXUUH3RVYMWkdPArf1yeZ7as5BhPo3kpzz1eRW46vyRcrRnZrZcro2JAM",
  "key25": "agnDQXT7FEWV2muTUTcaGis8FxZReyJZUjiEQHo4khefuCwctw3oYUrFKB6W3eVhQSnKdbsbSRKxEL49SMDpmmh",
  "key26": "4AMMcYuy2VqX1H4owCgAeKGTcm4vwh6sAfCHnLS6EesQGvyZjirYPAmhhUh7upJqNQ737s18KG6hkc8Yd92sYLKt",
  "key27": "58XrqGEUJoBW1HTbKen78kByPbh9SPyBpuKmte5JExisweKGdqG4zwuMEiC2JFzpTDLXcMbKSecnRgYakoGPQRTC",
  "key28": "2or4qotVm487QJKLkF7eUrAkuRGDEcFEogjmGzJhMvVeHedPbCPqMFD2sqt4gKGfs6nvkiFEyy48TvLBVUFtmSLD",
  "key29": "3JoN9n7dcmdJULj4e5Smr81WrP3kdEX5qYz1bSg8iVu891LfRvJEdo2PsiB1sLyffJnB9yhzqHg5N9C4TD1CTC4s",
  "key30": "2AVWkuGQJ2oDV1RwT2fQ22vdHd7HKEvQaYvAfk6ftRNDmeSt9Ra8z6dPbufaw95cQWNRR4rfVLGGQijZTuFRDccr",
  "key31": "2C2TiA13QRNngnjzLBqeUq2739RqUw7YgobAthsaJ1z9z3YCGeDPsxBzcpjViL1asqaefzXsMrBwSJJ81UrcM3MF",
  "key32": "DWbNvzHEtzsvJvXzAdRMpbBgbwo17twpQBgfes7VuS8ZThRHTGit2YCYGKMejUkiWE5tswmsHL8HBgpvUB2ATKV",
  "key33": "tk8aYd42xeDJj5h9yZp6VmEpbksAHUfBHu29R5yHux9R342Qep91BL4KDfUraYYxYxu5NBVNasTrZrKNAFhjdmr",
  "key34": "2MLBpBD4qGXRE3B2PjURXzV8bHrjHWmmvZvxw1qiP9bV4WdHgoxex7vekYWiymermBeZ8jGSUrMjZeK7PWCV2BvL",
  "key35": "5tnkHAsfJ9LMBfFtPLKoLAL5pk7rcfSnrnFSFwBzs98cA36Fv5B2xyUp6dG7kfXAV3F1W3w7wZDZFtiZuXjh7MNx",
  "key36": "2krUM3QE51cDAZSm4M8mxstFmL3Ux1ozfaxhpjBwmt3pKH2rzGuSogyTZTwaxjhHXBFURfFR887h2XgzDvAH9oUu",
  "key37": "2R7d1fQGnEeCpTzkTWLXCwpzt724KuQDQUodoQJ7W2JPudn3FPQda6RpmddKgZAzJBKsKYvkFcoSskCB15nNfkop",
  "key38": "3D4iaXfwkvJcEVGrJKb3y4KESzJ6WyTm5rdkCiFGeWWLTUbYaLE27BTfZoBxSmys6BSn2yRGBSnTBLSySL2Tcwev",
  "key39": "25U8rrUX5Po95G1Ca8gEHGSaMPkmjhEs7Ww9mKwZQm1DZmxsTEkY1fSuaHXKJWB689TFviPMsYuNe1iQjHLzWwtD",
  "key40": "4hNyAbjoGAnYZowEfpp4tDCDD4fZW3hSoXbHACG4XuYziDxQHnWK1pbW1q8Cc3RXTxnxr6VCjhfb8Ntyh4ci3mYU",
  "key41": "5wj9trgPKm8p16D1iEND3CqXE4RbWVDksrp7sdYsvoMhSBh4kKNAWLkpfE83AM1wNN2CU9NGkpoJbfj7hFA3ijaa",
  "key42": "nxryvx9wfo9PHhqWCwQhkBJo9XgVgWYWZ2uDPfLf6dfg29jfJczsJByJVCLKLzoaGL3oq8YBNzdMdRyUnavVwgm",
  "key43": "zDgztjxLhheYqq2ecabdY177EScXL7JNKgs6JYZyWEQbgFmvzLUGQjWiCd3VFcbJYyw2aN8EZhyq913REwcyyv4",
  "key44": "nquaC5aPyC1dWc6m8GiXiGpwy9cNuu5f895UCwFpTV5bxNtgVrRwLNXi1NwHEHcuNmy6V6uzPTm7NKGfscHnU6Y",
  "key45": "rkF8TPd1XiDNGkYsmTSNA1Sz3DPV3WmkbEAV1PvwKruBTpTkxQfFCrNQ7WdGup11Kc4tBNFroAjE9g2EhWg5wjg",
  "key46": "2jV2m5VTURXkBAq2eY8rzZncxCkcYaz4xt1GvCEHRt4icKD4aBf7KmZU2TJJ8X6E3tjCUWHW5i1Xt368CcoqrEFs",
  "key47": "ZhCCA9mbyA5kjbXGG1Wa1jbCyTh6Fow7kP6pPMGYgignpX7m6tnDkmhjLi5fE97Ev8N2qrzz3oQutJLTLCpyhio"
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
