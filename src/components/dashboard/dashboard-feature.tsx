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
    "2NkYkXwk8mvV9f3NstUZS7DS5EJQLs5kAdEcitR97ao86YcVPKnkwM512qfZfgPS2GLeQhPwnWrxwux2YCCWPawC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FrG3QKCbPhZmgTNqZfebNiz7i7Mk6xz8Qso2obT63J7Q8qGxqdeZnGEHmNf7yFBdY7rgomDL8y2sEM7ME18naTG",
  "key1": "4RFWzdrLSMAvES1u7HyTdpoAf4VFSWq5rjMJxxs6gGHLM6GtBRqjEAUW7PBMYFWavD2bYzLvf8rjQt2v88b21mgb",
  "key2": "5sjLauyYY9UTyL6Zr21cK22Xx2uTha2yfdZeGs5gjSQZ4wPfKZoP9HDMvREThK7HjmhLp6SVHUzNxzrCXCu4kWz5",
  "key3": "2HojHoRNwG1tTpj9LWNDuZqsLf3qKEzCTbYjZEJYy34c4LEZQUJYU571t4PJJuMYNMGmFSqFc8Ug6omEgD7sL25n",
  "key4": "58KkMzYpSZGEG9aUwVYbr78CoAxuKH1tgrNjuH1co4b7Wk3BtJM5kWbhoaq46jcSHaSa6Lk3Qm5aYwfkSRqZyubE",
  "key5": "2gLgs8rtk317X5hD7Mv416UcZuT621E4t6KfkQ2pjvZUQwKxecFkquP2mp1fiuGZLhmwwGshMbjjUCBQE8FJzf8W",
  "key6": "4fh82i9sRdD447CGhUFY4ySJXp5HnsAJXJJVX5UDSuktgC2PFuhf45drLJxHu4F3ftRb6Awv71HZEkDWmfWuiWyF",
  "key7": "5vJkN7jXCtjTUsF6bJCLq1b3gMXuygfnDM9ZfjypjqpAW9gTgEQEaDfmQ2Lg8JVMBQ6nig8gzpWczBsXheqf9iSP",
  "key8": "519yXJwccpE2YKHoN681JcZ5mPFqFDBWyHgyUhqrpA9QHygXMRSbXyGEFwDx9SLd1kvWjxoXpxgFh2dmza5mFsB3",
  "key9": "2qwu6mZsCfAipDDiafhQyNUJryeX3dehTBF7obZd7y5ai2iyfoqJPtYYo4itreEytQuLVziDF4hPsntBagFMVjyq",
  "key10": "3NkqdM6RJ5VYUu8xAAcmGuQkeEAhTgEoxEGLEB9iWfTwtawBF1kK2vEt4H7bksfSRfXM1tvrAXfjzd9WrMJgjnuh",
  "key11": "4VcX8bRvmg9J9GVQ3mPuFKHPGSm4qZCGf7tfc4YxHEJcAwhFWajytvGW79xuo3eP1J5Nwb4PugzdZ11k4bwPmNi",
  "key12": "5pSbUboPrqqr7iMY1x3UozXbnkBn8q3zk4neRFpLrbg7xPX5B6aX9yh9qSoUvvUNonKMsR5AdNFU6b334HmjJZn5",
  "key13": "4U7ieP73merbEafMPdpFxThkeXSER6FTiRkZdfNDkvM94FDMW2ePunbVz5SSG9ne3WAxGBSmineQ3ty4qo1MUbZL",
  "key14": "oZAcWhFvW4zCZppFhBdjH7RLwpzHhFCnZmHEmgV4TerbyuxxsLTCfJ9t2oKVwPFMKhVwx84ANRJqhg8tXnDinLC",
  "key15": "3LzjUK4zJ22JcrWWVszaZhqY67DgErPkYdtKEPMaV1LdNxWNdqYdVd1fbG2SZ4EqxXZg8DyR6xcSNyd3jVWrsENy",
  "key16": "4KCKR7P8RV1xkTNxoy4kHf4FjPfRtYaNYt2P3DveU7n4R9AZLxqsQtNeEy71HP1RcT49wkvKaKaeXN7GEE1ZokjC",
  "key17": "4Lj1a53ikQ5TxAkZQPpGD9GbaNSKX6NsZvBsVAXXRpLd8TMVdEo7Xm1zskMkgWxMfiggnqfjmCaz6U35dBeAt1GU",
  "key18": "28ayBz84xGxqJ8YQe89MyYyxXyK8LFM67YekVMfG9NDcjLyRZYyUtra1zQW4AjF9h766xxk2nSFUcrudCbXKwSVP",
  "key19": "5bLLWbKh4QhMHa9z3vqr4cAEGqm4BUrddoQx6rHMYfcEczFtj5nrje1UMqUwwEJQ7wpdshydaYYucMG3L1oFeA8o",
  "key20": "5nbBcF1ekGWPUfrZ6Foux6E7jox1PqjQmbsYaNokNtr4rWuRcxPUd3VpzZnXqZP1Ug6GQEkW1EVCFDJEA9Xzg2vP",
  "key21": "5sziChtAvjop9keT5R9XhVQj4dJdqhkMgLzbt82ggttYUbsbg9JjrwrR3sCDprxS8N8SPyyKFMUAbxWJCm9KwJSn",
  "key22": "2b9ZVojbgCi3gjSGmsd5gHokKuZFogEmAExYAf6t73NtyL879qrXLbE2RPK8PgjceeSa9cu1PtnsrhtYmFETGA6o",
  "key23": "44MN3xubs2dQj1YtwZMN4jq3pTdcYPHJZrWFaEersgEAvK9DLb6zGA2J56J4HYcnCEvSGW72yoNqiTRjLiJvrKR6",
  "key24": "P3Va8U71DcVSXD5av4ApYi4BfZX3jMQBiNVMftPH8VjkXDdm1A1YFWBYmEji7whzF8iEmVxHZvQY3ZVjEzLKbGY",
  "key25": "3bdwsqjKaez7Z1tzfSzwfdGHbKgMxXyLnEGDrm1fQhvSH4Q2GcPPUF4HDB5C4Legj4LqREigFUMnW26V9KU9nJVK",
  "key26": "NSDsftXQYfy2ifcaXykd6kienbC6Lx6VgMKkX7qs8kpNZrdHu2zmmNLcgUgCQZ6wPxepFLLpReHYco29dhBdBLT",
  "key27": "Y2jqMnAgKH4FujTEc3HPv1bCRpwfNZVxg2MD7ZybD2PHnuMFZ8UQCSAD2TGwbcB3Uh2QnG2CN47N1pdbm2i86JG",
  "key28": "48PKSZEqQCWJpBXHEYPq35AomNtZ8BX4pBmRpugqWk2zhubnGHsvv1Wabf6ysynSnkkYsAAJLcm5zzxcj32E9BEz",
  "key29": "5GBvfSk8tD47SBVNzgLRbrzpb1NmJn8dqEptu1vudbMzXzvF1Xyvz42238aztejQTWzurYPUjvvLh1foDnRY8wCx",
  "key30": "2ufQzXxcKqXLg9RaYnZLpf7c3UvsbSDhnFEdu7Bi4A647vqLZVZbHP5AewfEVT6jgnTjpm5mCPKz4eoy9yrnUttf",
  "key31": "5hrQxfczeZruPMyKbpZ5jojAjc1ZDWCdXQeCpcXfwhup33z7DCiKKi2AmuKLJXyDb6Y9UwcWQuzriL7wezR3UyCz",
  "key32": "4BKB43UkYmQdjjd8aS7fqK8AuZw5LkeNEWfER4mnNKv3Bo6E3DRDRw72SVTatKS5o7T6kxx1f5u3dyQxHxgaYaQV",
  "key33": "32v7SBuoujs7U8qziW9WLxgpryDtupi5WkRzpQYevoJk3nm1CmgEaSwSsG5cnPwD8bLraEjhi5MdoByjPqTeKd98",
  "key34": "3rA2mMnxNduzsrTt5oiiLtEgAJ5WJdrqijftrwPkMKfydQX75nDkuMVXnNCzZUy542biji5cDyBnBVn1zEvctrtp",
  "key35": "5aFsSLagJmBQkkwVnt8dusG1S8QjnG9t1SJUBnpE2FBpLbNeGQEMmkoL9SyHtSbBMQRCEJ1eF9f5dDsWNM77ZE4p",
  "key36": "3FdppBHGvH1kxyZ4rXN9EoLUaB4uVD6XjDs7Uik9vG7nmbttWAxZSqVyP33C2sZbJotKewgUA9GN1n2wm7BAYsFb",
  "key37": "5xGVyBwwm2Dasxv55zPTfoN35DprUoDx4h7qi6Qd2B4DzQVcyxrttVYcTA8ZuUgE5qnR1EAz1Mz22NYwai3NEhXy",
  "key38": "3eYHtqAutazGZPyHMGhr4JBUsUTzbCLsYF36tCo9e4ZHTVpuT6mbbcuzw2P8AwvTAc18aQqFySwXbQLCnmSs6h4V",
  "key39": "3Jrc4PCYQK8tph7QyTmJ6ALQxuEYufyZZSsSQ25ZiBPMjQWbEobt7P574oZEtVMkB6uE3A2xVSGrNBby899S3Akn"
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
