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
    "ubSqMHDp9sDNupVPJBTfNEwhWn4bbUVuUq6w38K16P7E8yzapzz3AFJrjRCnnP3da6yFeCnDwce6o97PJoXp8Bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tC1u9pHnHGdudMxbxyPq3WYmPuKWZBdLhsQEbdqWxP97yCQZE57oiZshuT4T95UEtoj29DHzKjThkHE4eiUeBh1",
  "key1": "2QFouyYPqdV3o4rWfiQ5ZCgoLbbHa21PdZ6rnLZ9WkoxLG7Hdko3BEtndZVLqvfwizJGfqyxMr4dH2kC1TNkosw4",
  "key2": "5NW1N1BT1RzgAmkbvPcWM1Pn2grwvQk7vxmzpkh9qDv297SEos8NYwM8A3m669tgfgMNfi89Mv9soSCghDd6CWrP",
  "key3": "3adGsa3wbGJrYR4x5LnNx7aqj7Lm5yA16WYuvPbxirqbYF4tYJpys4eXFRh5uYcvxGmrqKdc3vjvTMuqx4VB7ueL",
  "key4": "2UkXGsHXxVkkZZRpH73vrMMGryKvqqecQoGUyN3w3tZksRabBqpok8Xs8AtWT1ERDaYS2QgdhFhFnSQVJ5AEhZ8y",
  "key5": "3rUVh7Svu8fJWDn3Vd9mBVhWETFeU1RNmUpn5bgamfQrtZ6YuqDUzymDAXfUTCi33FN7msEgPtVSDxDeX2HfXBWh",
  "key6": "2t2U5CLxMP4PihBJ9JwvntM3TqtmPf1Ws1YmkDbxtJTgUjsV3sn9Mt3R8vxWLLGvPHTNVCv5bcXzujMTTqSMx7AX",
  "key7": "5UUjG1owiKbDrNdWpFxfXybnkFkRvXxWu1HRqfbKVaQjCobHwej2bJu8Pb4Buzhpqrb4W2YpARqGzL6kHKGZvAn2",
  "key8": "5tVAahhJjZWdLduUBD7tcVe5zfYpiN2a6A2LhGzkyLUt8ZB1m83M78Q4pv48SeJkdqG2Rd2AvEymyfkurQLPRGNW",
  "key9": "3y9YgJuqeZdHDTgNggMyvpLzKwc8hTeczspEsoD12LrmDfpLmjMA4PKd76guQjgvf7P5Hd9QkngzvSSaPLNaTQUc",
  "key10": "W1jdSfSRrefTwVJn5M7HUUunjdLykZVi8jTC2DFpVrZtYhKdHG2jLq6KrKN9WAqwEsyiuJBpCmaK4JJh178nwfY",
  "key11": "XReGnbNHnzm2A3thaJqNWaNxbiadctvXhXC1tMq8rzTPoY56b1smXNbykgouxvCyy9yKCru5izwwsNrXZCE3TQD",
  "key12": "5eqCdgvwWGo5gD2RbRHFHZpoRzM9hMjsdejQzJo7Jon1MWnMaEzuoR4HpYyoLQ21z28FyaE5zp5yuSe2QCNd7qjH",
  "key13": "2RQJ5YV5jm55VskCgjduySYeAqVY9TcRpabG5FWrmM7hDYUJSP14yhNPnsNxFWJw3FrrgeyVy7NZWYv5HXPU4NUH",
  "key14": "7VP4r5Hn6usg7XdWkaLtEUkGmA9DCkVWQRYHsLcgeYGe2hp5HgYBK8JC4EqCAbb4gdAby4azDKx8WhpdyLLiQPD",
  "key15": "2tihH9VoGJKEXUNTALJJy9UrLUVzidqffVWYUbtfnETAe6L1MjpsJbp4wRMcws3GxzxPh6Hqmn7C47ZtHG5jsQEJ",
  "key16": "4vBae4F96X5qMgHADWhGZqGwtdLJFcgehsXG5Tu6Yz9RQPjPiRTwmA2uWy2E6KuuUA3n2MDPv86eDR5JL88i8STq",
  "key17": "469AXsFxXR4VfSGwoAeSnPLnszWmkZFpsz8BU2K6MuANeG5QvBhAVD4KxX1E7FrH85NmhVXSmTnWPqVcLdHu1YZC",
  "key18": "5QPDAdbesJx49cXkNU8mXBuLKNSVNAVM3xoY9pqw1rDLRTaByDskgRAEAVSsJJ6Lq3e71Mmcyd6XvKWze5ZuViHA",
  "key19": "3PBdp36PcyEZNVCv245GMsr986ofm7Yrwzw4ZKwnpFufBeKNseAZiRFhWbcHN1XXZuqmhevGjTKDRDQZpCKGT6KR",
  "key20": "3PhMWJy83Pfojvb3MtiSxNW57rDwibjrXHEBUWKgWY9NNQDjTctztV6KHgQwukZ5HZy2LaX3o6PDLTQZmyCD1ZsH",
  "key21": "4cUAVd5o2fvFfTrBmAaaXpKmYejRDvRdHcLhPPDUWNFJuwQWfQ9Jrx5q9Vaf7PCumCTqcE7k5eeKdpGCqmpwHovF",
  "key22": "2LxJqNiDckQFMDxofjty9cRCukANobi6PwCUBjypJTp5zsxmFDSHUsP3SGGiFQVvV7czPGytaxn2AtoH62c5roWw",
  "key23": "5jVwihyVXf5255TEKiDtZ2iHigaHbftq2H14r8z1TcnBNPWGNzrqd2ALbdyC3f1hNHTpkZiZdqczqEmnr7Kv8csy",
  "key24": "36WVZcLW74U7cYpbnTGRk6BxF97thHFTtPjTs8C7qeQyhvKjWuN6R6BPmfqjMVX2jr18yHxf6ntYSJvuAM3myNP8",
  "key25": "3guVjLyEadpcaLXivoWhuXoZhpBSbyRmr3Eya8ASZCcCqAqd4PtDQSgDWaBDS2y4g1Bk8nMYqss33eUKZ4Lg94oZ",
  "key26": "4y1ubgxRUE3NpbtAC1kPRcEq371kUj781yr6MTUiQ3U74injrrHqpnNfdhq3MjyVnbiK7kKHYwQ4c3piViDXyWdp",
  "key27": "GyoZ65eLbbegyKmQFv2Jzv2XASijywaZt3fdnaBu377FEy2nNW6gb2TJF7jqMtRj8omZh12tomzxsaMtLctHcNw",
  "key28": "4ycg7dLirzC8GUggb6N7mu4EDwNBfs9WugRgE6gyobjQZjRqgjmMXkpr5oVcWtrf8qaKeRBQ2XueoLs8F1Nhgq1U",
  "key29": "GwNFCF4c2ZsLtSHmXP5FudDpsQRxPL1fUtCPWiabNrfuwnXBJDyb3BdMEWWY8v2sgQD9Migo68LnSkrwWBL6L9N",
  "key30": "5pdYd1a94P7v8QVUau2XsM4V2JFtEPeFThhh2cBTDHX4fmHybm9ZhvGMZKCcyxBnzD2eZfp4zGdXPpyeP7CNbqgD",
  "key31": "4MisQYZuuQTUMe5Y5UMW5KfyhM1yF7FHx1mmT2cUjXtu3bGgYduW5wmAuodteaPwFqDBMLTQFSCz3NR1gfLrByeA",
  "key32": "5fVAkY9xfV4suHRyP8mM3YV4LUFv3Becgpgsetut2U9tsFqVNADaguAZPT43vk7UH1pJjN95XtCxJqDd37pEB4VH",
  "key33": "3fUYPfrMPHNNUL9gdYA63KctssCYjgHx2ZVcTX8Xs1LPe2NhfR4MCDFJjDqe7yNUTovtp7eRfnHgw5m4SntkDCCt",
  "key34": "ey99dU8j4F53KTNBNLah763yrQfaAmTh1w11iFXfoE8SQgpmsLN5SpKNQqWkczE2BQCWT6EdTMaVpmtDNpMtzje",
  "key35": "3qwFLrGoQZcGCiNYFfj4zvoU9PwAzttWBS5t4UeHxeHJFAz2uWUk78usbtXJmRwa9Q68n5tYgEQpjpAxc1Ug1t7b",
  "key36": "4Yww3tsyWPzfdGUov58FtFcwpvWF5a4yi3hAkZ61qjBMbLSBpGLNhssLLTRhyEjjSUgYJLsCoWKw4YPby6T5Z68S",
  "key37": "87r8cu94SjBiF5HtTXKUNicABzha8hGxdR3fF23B4pHqcSyVqR1BWVQGDSTSiqtKU6PJid3WrW9e7HR5rLUdcn4",
  "key38": "5gjPnVMoJnCHoNa6NKqYFbAHXHF5kSZ7m8tDH3ZEzUbS8Atjqn4TKuvRbtzCWURbkGHiLPbwKp9Zsso6eofyBgGC",
  "key39": "3Mf784bCnQCPzLpkiWc54MVJqx1yon6h4MdwS3DJ3xqgiMkN2Qv3dCH7nhBTNRGfPSYCYcyyZJE5USybCog5VPb4",
  "key40": "qNPH58f6fBfAKFbdGpi3Rg61K23HLG8PuMEyWMZLSTvs3vPRwpUfgbfzSsFN5jZ2ZXBKA3rxwTUnfTBD9VYREdn",
  "key41": "33ujo3hMb1T9YPCz4wFrDMzZuDAcF7GPzXiPmPoUisLnMUwwJrbkyhw9ktZdHRQprs7dLNw9jCtpKmEFZEAJhyLy",
  "key42": "5C2k8eZUU3XsAocrQPh1xvyPMM9w4knyncwcvnjHf5Em2rG3gKKcNQmkmMvvP3Y8d69h6ENF7QdBdCYoiZUr8R2o",
  "key43": "2tCH3FU7kTEVuozitKzW1U1zUZdiMDAJLuf5DbCJFwRs38hKq3wzhgyukD1zKGTQyvmgJ6FywVnYTRcyc9uJtrAY",
  "key44": "AiuNheChaBzTR6dgYY2zhbFwcAHs6qU2VuCHPSJZcMTNpkwDFpN7VUETDJXAPiiSFQUM8LTZ2FtxKKrvuaVDL4u"
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
