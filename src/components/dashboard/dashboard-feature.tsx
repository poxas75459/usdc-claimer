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
    "2y6SCfFArJcfofZzwEUrWLLc8jMtNUETEg56P4QozeH5Phdh8MAMQeMZtgsw7Wp3i2bTbYzJQ7qYtCf4V6TzsqXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irD5yBpUvGPsBR91ZLacxCzdBnfWbmAZ6i1yXB3rQJtbT276VGHeHdVwvK3T89DoVK9kaRnQT4vaFhvZyePbGTy",
  "key1": "3pmWLYZsH1oe83iF3zLrTHJtKm9NTYv6x1myFuBr5FrrH8tHk8ybV1apLW47G6Jx22aGfAPrnFfnTpzLprnTnJgS",
  "key2": "5Q9djYxRHYpBqxProk53ke9EEano3ViRWet9GypSykVRixCAr7p6qAjt8iPkXgXYshtMXzp2EXF3Up64d2uNe5aH",
  "key3": "g8Zzbcd8XCDTTQRDZo2k7CcoCFDoYx4SoKWZavkUU7UJnoRUddkpw6KXBxtHrGRWz3S1oAivL2kRUmabnfTJYdn",
  "key4": "3NvaBXwCY14LSnhYPT2a3LQQfn4Tw5UAySTYbnNssKkdXdWJzzfVxbTjNxnR5jdZF92fz8hJiWVcbKCAbF7VQ9kF",
  "key5": "5WpkhadvKu53fCUURvFQkCwsNchyDszRcTcZHrB13GfxNvbb2LSdjZ3pGf8b2zB7e9zptc7o36eExMb3zZU21uUc",
  "key6": "3sX3n3jegqrcz8d7KETvQP4dzYvXYfeVrr4NVGuXW5FSie3dizd6uj9qRweqUqyYsMENj6GuAzkh5Fw8nxxdXk2w",
  "key7": "2zkGP4VHj1no8tdRRmRUZtaz17rW4ANnUdqX2WvVbQ7ZLbAr9xk1bdvhGYvJDhZ8CgP1ymJjDmu7pDQPLeeKi4Gy",
  "key8": "bs3YY7kDWUaF6E7sJ8GPtE2TXW2Xj8HwKqncq4kfSNCH1DDbr1oiPVHzd7gVpkUX2zqTjiBv9GW13h1Mb9fqeKQ",
  "key9": "3eZmTGdjkHJVC95ca8Rq486XAwg3cgMuJCPjWtkacz21cDBzzhvQzPL7pTh8ewnAeNWoXJX15AqTGTnH4BoHDfpr",
  "key10": "4XWa633iJN2xtF7WRLHaUo7LBpqz6ybqeV2voGfiGrAm8tspBShuizuA49utVHHSJHskVk3sudDid3RyqrknQ5z8",
  "key11": "4AJVM8KJjc2TMdPUFpPcXeH2NJAWeKrAdS9NmuuFhL4rwBTU8b7ZcMWNMHuShSfApF69yPRKyxbBoWwZZQYTVLGF",
  "key12": "5eJ3D79U9okPDwbqynzfBaayzN7kb9HxRo7PdNEr3nctXKQe8zyUKd9pQxNZCcLiiR8yfBw8Ge3smM8iwNq3VWR5",
  "key13": "VFnTQi6UukUiKJm3REcVmX5FtcnpNhzKTXLRcrG3MTrEjP1ShkZuaSJMEwEqx5YWWdcUsLaoUzNNxdYKo8o9bmF",
  "key14": "523G1YTocrFNicVbE5KVFZE6ohBU7fzaMY2duYLyLcBP15pHJqTRyZPf3zrhA73kzR8GReT1dqNkLfxUm8uBtR5i",
  "key15": "zR1mbjB6axEfZfsmGj66qZ9dgjgDEmrn5hvBhMDQe2jtPGwnieChZLcmmRkUH5Md8rBCft7FeBmRbHp9pAPCjoQ",
  "key16": "3oT1X3mn4oXvqVArFv2VJHm1L8SLJQk9KMGbmXkmAvSpmodqrkw3UGZpNMjLDnq7LMRT6sQw5cjrafTrSPnPcGnz",
  "key17": "2UnoN9nwMMCM7ovMDPYbHv1EDof6cnJaGagw39M7QMK3MbzWatVQ2GAvkK8aYsa4FGoirDhHCibsAnB9kHu3piNq",
  "key18": "sRW5E2SU1JtCE9ZyjaE6QR7MNy3yTqjJD3BzWDL8gVskNeHrcc8qTzEivFTwjXuaBaAMKiikxu4sJsS9NpEiiCp",
  "key19": "4PjPa8QVDytVqyCtaErz83U7AJB7qB7SjoATkzaiR5f8JnQgniKvcPRWYQQuyi97rPGHMKoKvRgxwn9XY1YtTcHS",
  "key20": "SXE7j922G8dMcGbmNNWYE1j82Pxxr36b4JtTWua8TQGSc7dEUFnVM7GDw87QXU99VsBc7YubDwXTstYjTmzorA4",
  "key21": "5aMyjEU7vkqhDxXVyrBCaDYeZry2TBfiaAwphYkKrhNPwwtnsxTSFg1wHMfvfFkB126BKd7oioF8QBd5Xw9nkrin",
  "key22": "B9JdYCfCDwLvMjrkqmYuf1AKfUY1ino1Xj9s1cnFAURJh3cHRFehKJHhoTvMEomkcU6astfebm3sLVbLU9jJZTk",
  "key23": "4MDqqXUd8GgKipSTnk3eSMdU4J93zJyiYNKfXJJcFA4QffWpdYTEXf7wfnRUzSEVvHNtKLym3S7UTQpHrmKoG4Zn",
  "key24": "PDTDYL4tg5xjk73FshH998qGvKFs2udGjnWxubutJKqynopW4oJCntiSkbEtwKuzvHDW81WxhC7gSuHU9uxbdjG",
  "key25": "3eM5eW7EdUASepr5y8z53Rfn5npyzKY3sCrJhyhQMNK5q2qjoQDijYC1gJ66JKSnusjhbzhiRGZUJ5jKdzUtTM4M",
  "key26": "46cjRoR1FabmojYeEWjAZb1QoNoyLoZ8DUQ19gshqYQKoNHtzGSZ1EcH2YKXzxFo8FgQJZ8AaRNa33ifBvMheJ3A",
  "key27": "5kZKCv6W4Vxs2cNMeyUshHUVKYfiRU3KHiw6fNUYtUjdKn825Cja9jhRuUFLpcZ8ynmmovnJkBia6ZQx8yHGYRHH",
  "key28": "3Qvv37PY2PgeGHqQaH1pGkSF922q8hfHvGXGwo8hqDpcoxLzx5XamLkV1u5LpCJHiejbiznvUjYtq54YJKY7XkoW",
  "key29": "34rkdD8mKZor7QRXKpcZS1aak2qu1DkW9cVXtZyAMCMgsv5u6cchNHfDTQyY8vBYnKrtTDkH5vZupYL98U1pEUtW",
  "key30": "3Enr48GD97eToR7cMJbtVeozR9RAWjTm9a27Ppd4woazwrxhWA9LAp82Xeq2qT2qvGDc9oC9B8Vbu4cBRd9LBPzM",
  "key31": "n8k5E7Ndc78AzDCTaR6RyXG87cBEfTNmGddG49H7vX4AftXdysXz7vX6XvDw5TRGty4gLvMh5NxvyQ6Q3tv3wrQ",
  "key32": "4c9FUdmf81tRnFcfkcuimupKgpqgra5vm9T8ZEr2rUFoim3ua96QFF65Lg2gXKqrB4YR3eUoaaTA2nEHnxRQGWSC",
  "key33": "jV6cBwftyW6EHt1CnSt5dss35pbbkDxrVp4T2pEUtJzgHKRtXdKTqmKPPNCwhUYNYp4aL6VX73SCJLsy6T9MK82",
  "key34": "2T2ZjkUnwG35mXhJsVuhEab8WHcqar3SmgQNvy8ZKH4vx6Uyyuq4KwnB1g8Hnsj1HizXHvgBm59kXvxe8qi7LnBN",
  "key35": "4n88DKy6522UAyCFFfJ25sk4dNpypT1xgjJASzBr884jEMgZuwGGo1Uo36yeUqDSGBBiC2utQt1n7EBKPN4QrQ7R",
  "key36": "nd5KDmAjabQ7vzp3EQHr5NstRLfRrx7Ye9umQxipQkC6qpLcQ4EFfbwv5PaGZHW65V88rC3rHbriS4LhbwqZS4V",
  "key37": "5wSJe99DJqWuvMSvNxqEypfqF78JkAfvixU5U7KRtqEVgjzcC5TJvM9RTEwZxx5KRy98Sc4aWmPe66URbJNJvWFo",
  "key38": "QJMqsS81926z1CBP17QkN3qEu7Cz2UQqA4r18LfMLioLL6memN7cQ1aiGPhXJ6oYsGwKbeY29mTzxiS7EtercX1",
  "key39": "57vs3Dw5rwMAEgNxs49gmJUi9WESUV7Tkemw7gjo2ZsAFuRXmyoYSLM2zeJV6W7DuohqDfGa71Qn4gKwKhpR6BXo",
  "key40": "5Nj1X5iCkjWkBF2cbk5kDDE2eAqjatHACiv3Ukfk8jCoybvV1hvYkp1NrAiiM66cq8RzS3aYdmTyGyQ6fQsgNak9",
  "key41": "eMR1YHXAYrNP89yGkmSiUQBAffXAdu5GRV4jqLmTpqHnA1dVKTEe8YAbXJV2bj6AThPALvBiFYouNVFEw5jbk5t",
  "key42": "2VXY64GXw1SY8DpniNPDoA4wRrvygPCs7jzZgAYTa7CuJnW5bAy6ryAqmYGGSeF63Sj7xrsT19sq9k4YcNiahDqz",
  "key43": "5hzBv29dwBobkthpVac4Pe5WcF6a2Ee1qijBx1xLZNHXfQ55mGHYxxA2t1AVzmbYSimPFo3epMjhAF2oMgckRmmf",
  "key44": "BaDVr3hB84wzeNcLo8Hk1y5u1gtJAADWSE1e5BNuaAnufkGw6HpfbtbsphHM1jwFFyuFwxdfXqb6YuKqjBxtSxy",
  "key45": "2grknnJu8QRfXcEtfCGHU7wEyTjfYuYKNaAVjCfevUgSVjQA68YtVuWBZEq1vXW1KFksqaZ8ZTEQgNqKe7RL7RyV",
  "key46": "9CLNdrLCySWNPuqbByC5pkAJg6wK1Bs3qSMx1aKmUxKFNEpupKNaoRjaseZUoP4Jt9wMQwQaCftFvNXQopergBZ",
  "key47": "PidAVxQfb6XGdZQpRQJzr21jEZKRx7fcdQwfMf4ATxtLYjBkhPzy52iMBJiRUc4qMERt7sQCcKrtNMYJQDen5io",
  "key48": "4kKg38BHbNuaWx4YuyekEFdVm24vLqJwPzR3SkXXWuEBWW8E52CcBrHZN3Yvk6GuvsEtHKF6b15cqmvVcqhkvksN"
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
