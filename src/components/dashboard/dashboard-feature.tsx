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
    "2Qy2m9FAfPRZJqsHUbg4QWzZsSTXs1zRCgWnd1qCBgDNBLbB1fub3cqvw4vjtXzhkBgq4EujrvWZShwF7vpYzEvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwLpeDot5BcjSjAwTGpKT1HqBy5KvwwgBWiiWhqDe29fYDx7R3kFuw3ik8guLTRvZy3yDR3LX3JVctaH7koaHCA",
  "key1": "2aYRPop55ZHs65A3epGWxanATB9pY4CuoHsuF8e5eExKTa3s1srqxxeXoQjcu7rvhB8oXRjiAQz9ecaCH3bMzrWY",
  "key2": "4RjhCfC1pPTdNzCkYiGSkFSi8UzefEib9WkDpTnWpPCLKrckR66khRtiz4MsK2UuvQsk8ei44Gxkzs6v7cZtY1G5",
  "key3": "5K3MLdoEqQvgRLgnyDRexLA481FzBxqiA3uwZkgQfdGMoBqNXNZh12K9tP9svFAz7W7gxH3nazYgtK6k9aGooeBp",
  "key4": "5pcZCehDNB8Lu9iqtDBaXtxoSvzFT8HHxbaLXcTNmKD8u4CBnymRaXDqmjVybhqBuU5wE49sCrZK2BEw8ovB2U4t",
  "key5": "5UqBgcScgS2ATuheKPnTJyrCx99H6w3rzcEVC9MzJsxSqcxsHYxPi9nPSaiD8yaAD9K4emmY3fsJDhio3GrAqPt6",
  "key6": "52enzFEqFdtxLTcyL5JaYYZKUfSo6KMq7bxw7gnBDh3Usgdsutqh3A7VSrDSAiafrymYbLerBbybJSFMQH48RkZB",
  "key7": "6JP5RSQabrkCKYu2GL7jjEt5yBE3FfLr8L9NhjyRbKYr5EH4VFdN62sQgcDQ6sTs3MkG83zirtFqoucfMwEsBKB",
  "key8": "3KPqURXFAqxB9BjhroGk3CybWCkXbYhTyKrEc3nnFgHJMYpRAK5teNx9wJZ1hQ1sH4BFusoxqRwfUbHmRfKPzv6B",
  "key9": "57yj53VMJcMegUNqTcQVR1ZMdHJEdA52PogA2BgYtNBLpzkQgUxkT6haZKPVfsSZhArJnjvdFgtpceKZxKEYnptF",
  "key10": "ppwMYS5KCm9qHwumsxv1Mt7848UwzaPMF1dujzVH3rDn2BjiQHHoL5k4pmmMGaThCriEq5aWJF79cf7NbUKeAiX",
  "key11": "3txQCA2EmMvdHQUpfer9oD3nkBoKqsR4QZ8NmxjwNbjhTMuKiQUZjsX4d37MMrq3z3s7byDgamETg4EH3wb2U4ib",
  "key12": "3x89AgWV3SDTCQTGNwdcv2miubtZfWdZj5Lx71gwPe74CPL77UR5xU6fkfyFTXBfr2YFNh3d1mBsCryFNQsVgrTW",
  "key13": "3EUNKCjdUdPwquptszRoApNPDobpiWcaX8gtajct7dPURCJVnwC9EEq5wxcyJBYG991JtwnrpBcFCnNbXfqAXX2w",
  "key14": "41ivP6DDJFSRtRagM6jqtg6gNfLYDNcQqs35rP5JeQgpH5GTmsfvkW1SeYxW2Edjz4Ezqp6vNTPi81pVBZnHBv6P",
  "key15": "2jtSAqEJyAKNoCjywCnoEuMNVNf32MCFsXfPJws4QYzzvXHB4JFHHgMUvpmoCDKc5s759o4zxMeqx2xwb6AUpKYm",
  "key16": "41ow3Pz2uR5aKR3BayG4PBZzogJ1kiAfWu5sztWk1wnYTMwUGyjvkMk5qrqyJKT4CTcVRfep2CqDNdTvjdkt1zqm",
  "key17": "3gG5rxJQKkvnxxWiNv45nbSGkMo8QWt6NAQg3x6CpQRpaHvzx63rPyrdRgTLuTE5tha9C3YoeVhqE4aNFvocbfCy",
  "key18": "2r9pcZrcQSm4PRghT5i8gzjAJHFC96M1MyXZszBnKdYkD3iAqXb2UaAvRu1MgRv644VBSXB1RbugGrM2kvtx526B",
  "key19": "3R3tT22qAM9sNAKGwjecDueXie8gVCvF4Z6E9ymbj6d6nJJQnjD8pPUYbBHZnpz392jcHtGsBAE3WqjHosSVctcw",
  "key20": "3zFvCMXJnEFEmWipPD2qa8vcypsoDCkUFSZ1ArFwYfYpKjQRZV82dj8XLnKpixxBFkop9yinV5mM4WjF3pzMDWpY",
  "key21": "3ZxVQ5NXHHg7iR6S8XJB9CDC9A9j5hJNqGeu9oFACnoaVnAdDsHbHNF4rBuAhKzh8ZMMtSoqj2dvJU5tVmAiBAiV",
  "key22": "jw3eugeQGhuSJBv2DduZNMEMpW81tDKA66gUtsEbtntD1LsU1F2TwoM5iPFH2kqKRKMe7bfjrESvTPMofiDGpCL",
  "key23": "4XZbUtbBr5UVV9f8DTF84x5ToKqcAxi638nLY3nUYFN2Fa7EYCZeu4ZNkuGeZ2zBA6LTvgg1KXJdLBLfpqA7F7wa",
  "key24": "2TXxoMgm5R4MgSJRDrB6zSLfYp8Z58D2RxDEHmsuuRR3bkSjuSR2m8RHeZ9keFJUVoGqJGnbs5a7atkfwTMEXcfT",
  "key25": "66nTJYSC21yk1NMdErY8rNXGi2ABLSBSVoueHqPaMXDPkNqf5n3yiaj4eFjREEKn9VAgurcGuVp4QcHnz2FsCKN6",
  "key26": "24jBuMzysSAWFzFhgtv5ugkf5o41sij7PnfqfvtR3B4uesRgbCtzq5MYZG3h1aHTSGLD61sJoPA414GBrqdybSyE",
  "key27": "2ssgJMz29A1MCarx2A4E45SCY492ppEdTQCbvLghXXVPZcwdHm6EJjidGDZvR6tBeTHfNajZutj82Svxj893yjWu",
  "key28": "5LSCD9nBJepfLLYMkbU8KHGqgBMUmkUc6wBrihuWHjWbTbPCS6WPCm15ZYNEJ2YZsqk9e7dm2LJYKKw7ofYUSdzi",
  "key29": "3ymuTjqs4Eab4M4nZD3tvVm64ADFs7W6w3U7WdDfkmGKyuMM6cGvUhba4eKAycX1mMxtCQhG2Uffgviq6HvKeFob",
  "key30": "AvbH9nAZ2ndYjxNABrRMUM1uupboamNqXHjcmRmTbnak2fz5ZLhHNCRtxRrV8e41nxsinZXBXSqDG57kGtecF52",
  "key31": "8mtFdezYX3erkCsyyjJutDnS5DQYAE9YaV7LJdkjXofQMQUGGSAmgg7KYgorxm3DmkRMtAmFCqQSAfSoqQzLvU4",
  "key32": "3VC3mRpZugtZijdqcACkw6ye4auyuZ31BweEe2G1M2Q6BDSzHf96ka4MwyweuTPEA9Y9FTw6XwyeJTMpe7RTMGha",
  "key33": "5tLpiwrjTYDgyhSZb87vecThPP5qKhUQQrDQzFXB98F1yPny5RxWf5WRSC28F7DvT5G6SiNeyt55Jzcew5wHbdJ5",
  "key34": "jFXgoP71JDZwJhigKY2dqzLE3kBBVTtx1QQ9WZo11c3HqT4r62wiNMHNr4CMqp2wDLoVG3C5Ck55zURp8VAK3Yj",
  "key35": "5TBbQbH6e1fAyhFs9rwMDcyfBK1c3tP8HjvZuV9McxVqbLWo2wvqEvY6GH56FXg8EEgTdXAfRaEeZY4oe7oebRkR",
  "key36": "5uN5zUv2RSLdFXCx9cDZm1pzkmmqZBc5ZQ82TVnCn8SZyebE5GP7snCqtixggX88goGPrqPCRAcEd5EuqSqfEG1y"
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
