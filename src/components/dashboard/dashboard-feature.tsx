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
    "2DRq6dUbenexTbHzxkuLWVPVCqkjdbuXhGGuTYyP3xcX1Su4qbpoWyMwdE6YZX4xki6uAyBiZgq7t1gXnmJa5pei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9ckUqUKfUMtb6raARTYAcQF2xPk1iUqi4rVURsikM88S86JjoCLE736z8iH23dnBK1QpPgtjYUrjN5GvreYNbs",
  "key1": "5juULzTdLNwVCBWUMMWPVPJ6VvPFVAyq24oLb8KbtcrBmMWyN5Wc7BABKiN6iGivHc9aewuncyZGoJRUhfqFGAsD",
  "key2": "2F8BF2axg358tQDgJxCTnQmcHHEUstcbZFhiMgLQuFJft8DFbzHb5GUNCgGX5ccskSGHWEjkzJZqgEMAbexHvbT1",
  "key3": "3G2cnYWZDLkvhPVZMuvVvnK7vcd3BGYNuJQWSLk8hxtCpJKHnRzgBwtKEE45XS5n94vy8q8xNwMSe61heFoqJyiu",
  "key4": "2KFYwvpS88DKAVVWVJVa2V2qCh6eSCZvzdcBFYbKJP7vjh4v9HPKJ71CuPWLJtQ8k8M7okxk8jZwZizkFT77kAwm",
  "key5": "oJJ6m6Tmd6kRK61JfSzWWGqYCXvFHuQoHUTqx1qxYgLZbSxgkkrat65xRW6EkUWMHK7LzwiYv1VTd3y2Q4UvMby",
  "key6": "5tYFjVc8eovNGX1MePW5kqAg7SHnxSWnucZnSeEBbMG2AJyDUmcHkGh9Vr9oqc7tVSkQqCAoFg5KFn5Uop1RDj6h",
  "key7": "2wnvk1PcwFtDx56SUXNANmRGDrZ7iCRDjLMHGzEB4xXbbZWAUxZG3p3TWqnf1cgYTKXYr9aJXBZJuCVL16ZhqkPP",
  "key8": "5oonSeuqNNYy2hmYaNxHEjxM5zE3sVD3ASQyYEfWPzowPsQQyiz1wG9ofHpMydjVsDHskvcf3JY6SaG9eXrQT1Si",
  "key9": "5YWiqNPKz6MTntSc63Z9yEvd9bFxf91uQTo7GqNKSU5BfXWRyAtdUFdDzSSJ5BirmYuDJaRrBZMUYBGP3GrC9M5p",
  "key10": "3MyNxgpgQNQnaTGeCgJrMWbFxVVF8Dgfz96GvRBnx6AJJwJ9yfichaC1SxQTCM8hbqZMP3aPmJ3YKsikLRAhYMJb",
  "key11": "5VKxCZMmCMDDyKko5WurB8PmbuoGycAuwrPvrd795sJzMEBt72AVaHeEVZtJ2EMQWfzp88CdMMDtW9PcimhRZaCY",
  "key12": "rFfb2HWtzs8VarHodDTYsshXvfkM6KoTEo5TxvXHXbGYB9UGyV7F22caqP2fX2hLid3T22L4RmDFNyeUTQbR27t",
  "key13": "3yWXuM4HWFmPGojuNNAywzvgjj5RkANQiKE2ziP2BFXdz14KobAUNwG7NMxRtqV8mi9ZezyfXbcdcZKcm4AEeNKZ",
  "key14": "29qndbHrP4hia58T5UGtcYn6A4tymphezHwQnv8iCFgghee9eNv8ojHXPHkVN99wrE8dzpyfdPXJMDNh6VDqMi2Y",
  "key15": "4gC43kH9wLzHnCWZggk7XSxKr2mvwoxPGbfpsN43jbe5PNAUNXURCAmEo1Ty1YmKY8uCs8FQJut7ZkxV78wt2eg9",
  "key16": "3eMrqtA1a7KyXBWABUjyh9q694X4jRXRbDW5Tex1Nm86x9R1uBpQePwopUAZREr1T888LN3DWSvvrQqENrRjM3kb",
  "key17": "2tmcX4XJ7fJJjpoTZE8Abn4VACSdBf6w3q5pb53HKnb28voD1hi9awo18c4XRLwfkBydWqpHnmqQU4kRLAinomN2",
  "key18": "47qE4RVU3KZWqbwyaz1xCeWY7ktd52HxezCcV72hHvGHCt3bjZiyH1hymfge43MugiBJKESj96rW9TbNWnK9af6Q",
  "key19": "5XZFwmUzvzCcGNTMH9pJgLyM8oHxFhweRrZXm6EbiFfCzWdQY1SUPW8FP1iFgdeNoHggD7zHbnjjyssmhL1c23Zt",
  "key20": "3ZcpGv27aTjWnUejquGfuz6JfENSVQRFdfuWxuEqXmVPL4GFJ7BaZx7SrdFaPnbHMVjyaZ8isg9Nj7jtZeDxtrt1",
  "key21": "2TYpb1xmw5sgBGd1hVvvpDy9VkDDvGqQctywbabWxiTg2tq7hmG8mS6fRU7esuypaRR5XjBAF8Tmd1YRbsoGHNUJ",
  "key22": "1ih478KdY2LQYUxGJC3AoZNZYMevh7x7hnWtH1hgXnLb1HGofjiCRtQ6HphRGug5mjPaXWcVWa86bnhFdnVAMbF",
  "key23": "3UqjQT4Kamg1s1W5mt1w1dH9LNHR6HwavvHrvYnSeUoHNvgSh1CrsabA5aLUm1QRUNodSdkunAC2mKez9CHjHo1N",
  "key24": "3Cx2nhmrptXpKEj54eLJvVHAEVPw9YF2CiGGVBA9ex7kQ68R5eqSgEHSjujxBmt6r84qRL6GJKKDTYERdScsHLD4",
  "key25": "2XeBLUNGFcVVrRzdQG12Fg24Kq5EFmyAwhdZKqfQcnxspxgBKKSGDQDhs3vt22qXbAK49R93o49XHq3aPZeGBtYV",
  "key26": "5hz2TLyh5vUwocAjHp1urQ1AtbGmFJy3FhGBxiM5yAEQVruiBRdtYda51siX2dY8e1aUcaSyKSv7MFGLQZgGxH3S",
  "key27": "umNhwHpvjs4XXgZXM9cXhpUDg8EBTPEfm4as6AWm9vh6aHd3TWz58FB9U9ceFYXRNZdsLor3Fo4AiXRfye6Krpa",
  "key28": "2FZdiJq5AkXN9VdnDcycYTr6uaG15LnnpaKpR7SSFWdytjkSwoLrNGk4ix6FuwhdYn9aCHh8RXrjC1BkKgzJN3BA",
  "key29": "4E53WKk1SdeTeAeK8tT2gnWzfkmP96sJYUpQYgtTowgdNeztCPTPrXXeQk1bZ3EHyk3dHCJBZend3komzqES9GKY",
  "key30": "4AR7WnJgurCCTyCJzU6e14cbLZ9Ktcrx41Hwd71C3Pva89oZkAroJLooYXnU9eXZe25ME9LxiN1xL1GuQD6HzhNa",
  "key31": "3EgAMsYdnLGzDygeNqhGCycXfFKiz6DN1sgxx2JFe6G5kXGdEKGMkbV6MsVsjEuFh2UrZ7YnRTmmEQ4kjVu531bG",
  "key32": "4TvbtRtaG3F2ESvpJX6kZkBNUJFtJ5cn2JCpL5yZamCD3diYct3X69D1EJ8dpgnED2xJLixjn5ra3ijY7hmSXCze",
  "key33": "JXDC6GDUjVUdfq8aZeYR1V1iaXXjbzS5szt7VFoiUS73PSjUbWdKtxy4SA5fTWnoiBCYaMJXZUx61q3qB8pah7J",
  "key34": "4zSqY5dcZP53FXFKuoNMDnnhvyudjrx3Cg1XaeY929teURNY8G6W6kYvLdhAUM5mFAh57QzJzTD2BoWqMpMKUPSX",
  "key35": "2xe3jXyYqste2xyGDinQoHB8pwnrFWWSJ1gEmxMiAnHrpZk2nDVosNixkELFfQB6JV9KeSu8x5h3uBpkvtJEYpwa",
  "key36": "3jwg1fmKMYYZWDFXG5DiB24dexxLor1jWE9NsexZsUgY3PEi7uKf4YXJsgfJHAvtNinPug4RjkCzvC7uE6a9Q5bw",
  "key37": "2c19wFspzde26pXsgXqeXAipWghR6U3H4qE89nwDJuoVJUmuB1LD9VZcKTQ9BgkR1upqXAEP8AQLCjYDqtaYsS1d",
  "key38": "mCwtJvi5gdggC8iYZtirMqGFvLVRvTAyJ3AB7sbCanwuzAy6pVH7GCjnGNRrWstp1iqBtkUo8kxsREKakTfnA5v",
  "key39": "4ZFgDMBS34F8b5af7GP6aNzCj479kBKuwab7cQgk2hVkcig42xeB2xgx4Fzitp5TVNFpAoFbWCnyqPbsC5Umfb9Z",
  "key40": "47zPZJmmkTpSug1FKtKE7oX7fkRApYn5uwJfv6DXFmNrMxeqVeKi5E7CrFP1qK11j2wFyoDhC5BDSvnAzKsPsKpQ",
  "key41": "4DE2wJRfQgdFaoWXskLuS6erFriD7CfkE6TmfWMzHX1TMNxKhbHyDtEp2PeKrCMa5KDMt9sy5bn9c49V7HnFJM3y",
  "key42": "sTv7VuMh9M6ixpNTDpfCZr3T9dPh75MWHPF5ep7riSjiQv31KTR61yYid5HfxnFjRSRRpoEdVoUdS2KYtfMRhUy",
  "key43": "CUpscfqcvbTDFjxNz1ysMxKQKgsSPd4QybAydxspKykxJfDrWt4CAgACAfGZxFxWRhwJZyagJiohjBEaBbuHM6o",
  "key44": "4jxUYNX73FweKEEgZaJrKC388tY7FQb6QGz8j8Q4g4bfoFzidcFPE8988nG42SPAQQMJRbBkdoWczxujuaC3soYd",
  "key45": "5jcf3WoEWUnPsxQWJsCPAu7zzLmxF3HQaiv21t4hvg4Jyz2SSSxgDHdwtPR9H8fz368gvniCUyDL5N7uuWCXCXWV"
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
