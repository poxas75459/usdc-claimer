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
    "2LvJdJeX3y8sYc7WdaREB3T9vooSFV77gkNqrB5SoMKmUrev6Wk2QBEpGNpSHVPv21bzqP8kfGBRP3bv2s5Xak4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiMZWbrQZssLhZ3rtRkEo643d8nsBXnDob3XZG7FLQjQVd5vivTNTRmhR1JXtXV8QCY2XvuEe96rX6Ay26nG7vL",
  "key1": "2HoUULZBiVpuT175vkLdWCJUS7mNT8VADpVRztrfo1thrgp7JN1b12v5hEBmwTz1W9vtt8J2Mk13Tp9E1z8Aw2uz",
  "key2": "2N2H92gv6w24zfTMdDt4UqMi2sumExmXTdPBdheTis3yx9d8Z9CWVNU8uMeW1A7Jk99QzCU97brg2NGTBNaiJN3b",
  "key3": "45UhSYP5ekeG3WwKBu7WmRnnxnASu1UZsSYDvwggfzEmFjjy7RKZfHHe2VY8tL5tjQ3XmFYCgDoSCH613pNGgjvc",
  "key4": "2KTevBwprRm6Ms6fVRBAnYNJRQTiTLTP5fEcy9ybYzrkcp4QhSKuHJ1up6jsRreCeAefuKrFnLajEfB9tHpKoaoF",
  "key5": "4vAcpfH2BkxfPcQSdk56xMULHxiyCVDjBGdKhauedrK5Gd24iEAzpapiS1k6EzEehXSgmqxmg65xBRNoCWSL7Uj2",
  "key6": "36qru7owEe6npUPGrgNTzHxat9SCgZHo8yoFDb66X6bcN2b7rZqN3XVmjZrSFJcMd37xaP2qgueeNFRPHr5Qph3Y",
  "key7": "kbs3S92zbYagtjrnFiu11gFMTh4gs1z8BiK185o7xKW7HACV6SUUkhqMAxDakdr9BiwLMDqMWwoL5qPSWQYeNGE",
  "key8": "2ARurYCgzNXwG6EGQpshdgaNUhzJLXku3cSXmWXS2MJj1p23o3RHh5Sb4ZhN7eeSRk9KXmGbGgbP5QinC5kUTLGU",
  "key9": "SxUASEkE2GJ2LB7mYKqLyHnzYohFSvacJTvK6cXcvZvNPQvWvLai85fUKj7ptwyA252n2vT2YXcH71XWUyUoGPp",
  "key10": "5NqTPzfdz75cipdqbA1GwLtygi1mtbY7ci3UEAyUdT32yHjtNcpjnVzLLeKHg8deFjH3XX4JB6b9hUE8PBXn4pmD",
  "key11": "65BcXmHCRk81oFSksLRfSbwWSAXCYqYwBHxvHsfxMCd5zZhWzYctknozmkoRreVAJvgguXr4NvPJWBQYi1feAuHB",
  "key12": "25p4Fvrsh6J53je4BQ6a8MnWSFtwx8ip3m4HgSgaJ1qY27jXn67CgXJYaj4WB3gdAxfMaEpVgYNMryodG6Ui1u33",
  "key13": "4rfA6QSds48ZoY4ptXjD8buAVGkkwCSHUjsybtWXf2ymUNDuQRFNAZiPKEEpjYTRsdYJd8HpKtKRjdawr7u2HX62",
  "key14": "EcfDA23PDrcCyVSWMLBTPxG1pwkpu5PQXJt59eUyAdP6sKrYY8FLfnX1nEefo7hzgh8eUxdk2XARNd2ctVemYza",
  "key15": "2WaoJYFPCi7K4apfAQTvWAWc5Vb2wMR5k84gS9e7eT1GAJUXXk5a9Uxb6CDoWxMjePzNU5Yep7A2QLwPtfs2Dyhf",
  "key16": "28CYYAJUX35utBHAiVdSvTRmQ9Pk61UdgwQqnuJrE3FLEo1bm736vvsYjXLqV3LhoTJxbvDCaYQhx9Yb8XTztsBm",
  "key17": "4d9JN1NoKYyQCU5Boc1z9PXvy8PqisUH5f1zvSHZFxy94PCtzGWYZUWJ38N8MFuFtn5iS513BoQP3Pxr1wSiZBs8",
  "key18": "4s3umgRiGgq8FbfAgjxp7QZ9DZa4a3ZzxAUcVumJ5bh4nqKBmZ49mxG3CJMjvv5hB5UxxeN5M8hXiJZ45XJbVJWQ",
  "key19": "4rN4tDPgdyh7cFchSGoZchdtL5zz5aq8GFNQNqrWZuDAW4R6QCDUwAsVjwTSQMxerXXsjJ5T7EXy9PCVaLbWAWBC",
  "key20": "3Lh7TfBXZNggn72W6DQafDMShJk8zcDxJc4sbcUPPxW6Lu5UGgrZpm8kF8PwQqEVTvveZ35N99M9JSouuEJi3dxR",
  "key21": "5QaNFsZgYaMaUGyNLnudpabcsJM4fSpCPSwrAGLvf7CqjRfZd3t4boSEtBxG8zaeZPzr4UKz1dnvDdHAKSxUusFw",
  "key22": "5MDxCwbgFch3F2Vgx8Fub4Sovxd7FMmGmqCS7k5i1qQDzoZkGRir5AtP1ppVKiNm2fBetdtEGruWwfead1VS4QCG",
  "key23": "3JGYjuVk9a5ApXj5AsB9vD3A2JVnBTeQxGwY119FkdZqvhuHLAfFeenjsTKNWkLfdN6SLeXySfVKQTuiAJYS7cyk",
  "key24": "5HPK4BwWHJLmxvbJ26jtW2mPLfsYhcV3VhYcpYTwfU2diiPJDmHuubdygHgLCqbhrBEHhg2gRyKnA8QYqCtJJJdr",
  "key25": "3oyrPaYFWmBUKGnXvM9AoU7mCCZTYt9M7t4uSJo91WF7536WNJUBhezZyBQrcGU284AZ7i54h4SdiK7mvbhWpdRQ",
  "key26": "5t7qtqzMBCzjKz4UB6km1ibqd4cfCMnyiVz9Fv6CUoTLtxzvhvcPTp8kRzTWtE6r1sd6ubJBEWS8HH3gTPhqZ5Ah",
  "key27": "5L28zwAkQ5j6iPmvicviVrF4QJeya1vmNG6DrxqqaqxuRApo8aJwRMqqkNXE3RQP2F96cU4jzL559ZzPpHnkmweX",
  "key28": "53VScivGTECLypQ4r5enVUr7oTLtRNqtCusL8hYzTbS5AiF3zSaDfUZJ8BKGiyPGEfLBnooiyXtDxjSn8tSDNHVh",
  "key29": "5DfZ5ThQxBCWAR9E4NskPnZ49g6qqpgLyHaZ6FTiMgGyvZcTqiLzzwYWAyKtaFyjqq1dFPNoy7BEwUsRm5x5KiT5",
  "key30": "8wNHLSgaQP85S5T6fFh5iaP7iMxmMrcvH16r2RTyWm8XZNyQBUEujDRj8Mre1pVuwsArbvpYkSvqME77gjRfLtK",
  "key31": "26fqESuBpgN84fUHyERprmaXqp9M9BwrmELnvoPMBuiE5Z5J8QbB45Pzw1Bn48JPfs3ZZEPuPcKtCpnypAuxdKzQ",
  "key32": "4xLF6StRW8WcPgAXdTJRVAUuewCuKLhHbKuptQQ5ppZBpEnKFL6PpWL32DxrdX6euVx8skJTcwhcUJ5WyPwc3QPw",
  "key33": "2hYCsZxCeALZqCNJBKoBe8vNQccUd7KYugq8FKQ4JY9CH8ppHH7FgzmwbK5cVmk4Q48KHFjpJLVW39B8oHnpUmjw",
  "key34": "3dEykLGC1CvpCGqUNGav1bTU4FpanUKxk4DPCKJqcbXaMHkex892n1AawBnwaiX9ZLZNPgvs34khfgQNVNVEsxc6",
  "key35": "53eMkv3trWEp1XiyuD6Q5rAbnp4B6BQpizuk8dWqKn7L1LMf3u8vxyFqL1LAKgup4LnLmvmXDhWn4MzmVpEubQwU",
  "key36": "2iXgrid4z3mbuTiwtfB8zE8gy7YqZgCU9n6CbiL32PYACJycgYr4o9PjxwHnprAqETxc5fo9pMCXu8r7ggPPBecf",
  "key37": "2Bz4jRyrAARNYRJ1eWN6mYiErKjPMoepR1RN5WCMSgWQjEgX2C5xYgJuq3jnJZEemTWQs7uJ4yKGQz6MAVEabTRs",
  "key38": "4ZY546UWNamjigMz5irZVER2Jmvzn7g14HCsA6RAKPtJUkZtYQYeqmmwqgAMZp6xTzycKeFpsytNxZ67RLNNE1At",
  "key39": "qy458bSZC23rUr7EQrrQrsiuHfpDE4PWH4bpbSrxNDKLC6J7uiPSNMPFTsjNNc12bxmQigqor4XS5rpuAMwPc37",
  "key40": "4Y3dGmn4vDDDHxuBWQF6Dq8Q9StXkBfaQ9RvqRPbt6maxJLE5h7v4AQCMyZNrDBjyGgxHuYytqUVQ553XSkPGHqt"
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
