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
    "3x5vggc98zVwK7WhMSy9MV6WtBDoP9pCnzqpgzz8AJC4hafC8fHGBZ1XUvJDDQCrsurP9JKBK41xrZYGVSEfUwDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2o24rfaUo8ULxK3H2v8iMB83eVyeU6TMamAENct2yM3dS6z1S3BNXYhGSTEKwAYPtS9vSk9irfExE5tnQPM6v2",
  "key1": "6neunAqJWXpBnVef2WFYjh9xu7MuTNRx3c2L6S8wH6LGnQVGqoX14sAZM4bEwUesSHbpHeYGcSkKNnLkDH2msEF",
  "key2": "3h8Y6ATswYkk1UR1y1HUWt2aU8Lusv3CrRFtLQZYnKGnjZYZSoP2nDVFb9mSYWToMgVv7QeS6JGj8n1iUcpbdLMA",
  "key3": "4vr1LMpCKArm3FNT9fz7aLn8bGoANNK9Yer3Ek2bxnxs6uw4XC54iCUcuoqZaFohTeH4H1FLzM6Uoi4mzyc3Q3va",
  "key4": "5FxKp1VzMRFNiwFXrqvfYrFNELBAM1znN1AWb7SktdojfaaJnBT4Mi5dBfJXj33PpuAxoZozwmCDnhQ22apy2d3U",
  "key5": "23zD8jQWwmnfWDUZ5bi85nVLtHVAZQGjTuNqdwHrgVxeQGDN7jCd82ymZstj7XwLkDKd9FwLtY3URoSY1ygNvZtW",
  "key6": "2RRbsEM51atMJ3KAJXV2QBg52w3ioLyJvZQkoMRugsr5yqRcaYnF1xNgqkMeL59iQ3S3jYata71Uebod5QusKyLz",
  "key7": "2RLzcDqQJeBD1K7iimWLwZo6jyQuA3zHhBaVBFk9iaq9dWZKT7k5ev33GFfqrq2kRhzdcnw7VSEr3s5Ve8Jrxu87",
  "key8": "4NAYkSYcmEB8wrDtE1UirFQZMWqudD2YkwX9TnMucB6e3kaTAfWUsb9dDWCsib8FHUMPg2StDMe58stPrC1Wq9Hc",
  "key9": "3GK9rKTW2XmeaGw884YVDh8RDwsfrLzJga2qSYLUwZ3MRy5R1HeYGSyXZ7E4jum6qf1GfzcJ84hAgRXjmSyWn1oF",
  "key10": "33a3HizmijgNLmyeB9kL4urEamXGhJH58CUnkKxPiYGZxdMWDdJohKCWZs4FEvHDH5d3oix1Q2qQTJt9AabKthC8",
  "key11": "3VnrJ6tW9F66TzPXnebUTBFvrjjCpTYmZhn9oumnHoXKn8zY92hkdR5yc3qvzYGMyhKr18RvEf1fGVXkgAHptkH2",
  "key12": "28Q1DEUFCsAuuCY6TXJXrXHBcj8jnN24HeE5cojX9auZ8bC4TRs2pBDBtzfTsge6fduvYrRDQjELzJUYnLcKrSBU",
  "key13": "wYPfxR2HuvKTpM5zCLG1WhKE21EHUxU33YQne91YyhXfsWHzh8WoMN2qXZCoR3mNqduUystEKuMgqEkE3F2w6oG",
  "key14": "3xTh6KbXfjherF7F9YBezHN6udhxwt8CXqjW6rZxsy1hgZpERnYAiqapgHfKB1HLjt8rWqc3qR1yKRM6HdbHgW9r",
  "key15": "RogiLXfBtDbfMPG9xCFF9TodeJNXiBvPnL4JvNCdSmv9BTiEabBQuHotzrbGCgg7h1C8KATCvNnFkcNBaTdx8xQ",
  "key16": "2XxnqneNiKCpWUZP4JrCWmuESvyR8mUvzm6c1MRE6HcqGiQddLJz3fzxVmu6qYZmyGQkzdViGz4AWb2St25yRosr",
  "key17": "3NPJSZbqJTF9jb2xFtF8BRwB2e12VDcfXJZNbLmBXNnTDacQA1X4TGNEV41CHS7bkX2R9tk7nbBD8DPMoTNu2DPH",
  "key18": "z6bQc3JYF8NBMgMU7HgEqorF143DiAWtmzzCZuqt8KqJ6FxmaJzmGhCzZhMfarsej2E5ZLDPJ9ScZxKxbrXCeZc",
  "key19": "4UehTBf8TCrTBczjwaNtd1QFU2wxTCwvo9Ek5VfswyNqdzerukFpvy1hRADdErfiTjz8ZwFuRtgNXjnEJushUQFq",
  "key20": "3Vfy44tXFmZLswAW6iqjnKvhWh2RRWm6UfMwDfLjLmP8bjt2MVQyJWRh7Bkkk5FSKeuT9WfEXHuwBBdmNvb8Fn1A",
  "key21": "5vfnr7iY89whaYsVAL1nxuDHiLKpKo9zxMNudp9bm8tjZdDg2sdNmkcbg83mRZZASEthg9QMtCx7XzHx9iVuWNW2",
  "key22": "3cjENXAs7kuEhTVp7rH8Ky2Qnh8NpyQggBTi3pfpukcEejqumJm1iXocabGunysuni5vzzyE6SCBJfHhS4tG6WzF",
  "key23": "3PE2ZGmdBrWW87eoHm6JrAm1VKwuimr8JnW8NDrUx4aLhPeBSPo1pWe2HYqYC41a799ESqzhFu3sV15o3PtPedg1",
  "key24": "PGHCKHpiLGpwHJV5srjcp26BVYySBFHrEnihtMxSm4ZvZxDVvav4ij4YbncbHw2mAdyqPLRQew6LhymnrREkHGk",
  "key25": "5dFpMYJJV8YQKUwqzqjKUw8CyTAhBpiVnTGHtFR6LcDW6X8QHrJCaEthWia68u7R68gPaZgMpTAtqYZBqFZM7hWK",
  "key26": "3iW9nJyKDFhKx4pgchjAXJ6SdqwXTWfrxLVBxgUNG9QvtsNg5SzNcnpf3ZKzdM5vnnCaWmyfmWB6EW7JZwX5TX1w",
  "key27": "2MNwtTpp7zKmK8Gofd69c3csxJkyUMcQairgQTJ4jRW8swAsyX1re4r6y21dSC424XyUPdezWzR3XvjWFn18dCMU",
  "key28": "5wWdy844n622av8Bp8hDknWE7644mro9MrRi3P5AyH3q3FmUo9DHf7rDRRAAfdbER1wKEFxU6zGaXiuG5qkqCN8g",
  "key29": "5HtkYDKZXV3MG5tNuzbgR6ngTnpgFtQSDYFysC8zeUpdqxjvYQvRAn87rrDT92RyNpjyM3b38bfocwSRx9M7RmB2",
  "key30": "5WbbkquvwLSPCHbAYwoEhW7dBXdSUoPMZ6Xq8z8HsCrmFJPkF2RDSqEb6CjU3qb72nJdyTcif2cK3wvqLZTndGBj",
  "key31": "4Jf6ngr3ezHNwXxjqqjgWXm8UNby9RqgMq8EWWWm1wsmz71jUcTayZGVeCL517bpLgLN6NwM6zx9GeqLcCvrUWFS",
  "key32": "5PxLmR4tSeToBDFaH46867tK8cScEzJTGTKZHYS86hATBJK5jC1aeheF63eifnZjws7ciUEPcSDRaoMyLmwdcqd5",
  "key33": "2X8JNXFuU5Kp9eDqcqHRssqQs3U2M2ANtFb1GyW7YVHVPXQhHNuU2ECM19CiR73QSvdZVxwK51cKhjjiHHuTjzjd",
  "key34": "51e5uihJNXBVCH3jsjmPvgLb4mHq6RCQtp8CyT6DncQvmM4Q5g2xmWmmPxqaZpzd6edKLSsrHRwfRmjQcBW3JqC4",
  "key35": "3M4ZpRQJNed8Co1MmbpxTUisSv6tAPx1rdw7sPbVM6fXG9gMMUA7BpYKXUVwhQ69BBLN2NvPvdvJom8SvXV4NjuB",
  "key36": "2MPqcp6dEcu3eTGEYrrACXTNVGtP4KKC7fXxyn9zev9wKVKsy2iYeaLwaa3HMGASsiHjAahYZ7kb59HEDsmXo38X",
  "key37": "4RRq1V77VZHdDDRUvik5B97ac3bieCLhdg7e57KUgKCwJsnK27KGdW28urwwNaT2wAq5VEET77KM7Fh2KuVsXbhM",
  "key38": "Q1pVWbjwr5gdm7iU9dJzL6ihKFSYVjKyqdpGCqDRy9b8Vc4GX1oDrQo9dEmBiZLxCcMNgh67hNnEtJM6iYPrR6c",
  "key39": "5PmsWLQiDPmBDUejmi3gU6nBGc3pXLjuP8cSa4xP8VRq6BKzjwZCymccpmkUx7GugvyktDqa5RimVUMxBZR9h3Fr",
  "key40": "ou7xuvTyg4NaD5Wi695zqDax28CRyooNzFdm9S6xT1wDjXYcBo9jp2fJdt8bs5eEihUT1GStdhxiCWj8PrmBo3m",
  "key41": "2RUHif2znpcPB1cbqrVbviH1VsgwJuG6YEFEDrHYLsJkSyx1WMom78E5GFTiQMjo35hck5W9Aa4WcWJL6rDkcTz7",
  "key42": "31UMaMBUvGRK6TcgFXJTr3fp4EME3pjDKKayZdpkQKuLaP5eGXFb1fbmJDz42Z1GQKZuK8SXHCxArvWywNtR8YK7",
  "key43": "3pcM4mdGDXjEqv5xdYXLYAoLHbKFtnoSZ1mx2EjgeygAjaHT5mCPD1HL9PbRHXeCJh7GqHz1JDFPewxh34oNiMPY",
  "key44": "5QZZZKDasqtL4xPRCRh4VHaQNeLExXhEqLH1RDJSCJPdq8j1dZ4bBVmX3cDXKDq4jh373pn1uwCVGEb3m1V8kqQe",
  "key45": "2Ks4kq7c9JK6YvwfqLxp81zc3dAssgi4qJ7dk58BrRaZAFuswR4MNpMerKdYvQicyqJEB5x5etKMt2bp7NMstAQN",
  "key46": "2rZAscy7i6XHrWdwc3e3H8XGbK3iEVpYukj7QtC1rVZELcXpGLSTiQcWeYcC7GoKhX4CkZmhJV94GiAXMcVKFkK1",
  "key47": "3RzBrRJGS1E8fCd4W5YVeyb6rStCrc66F8C4tcHrJbPr31XsbaSN3ALRCvPWz6jMZh2jVb8yVkSRazXeTWSAb7bD",
  "key48": "5VKyA85Atba6EDAp3CEHJYNFjuvvGnscdNCHZMgruqTLVucvwMv9bJB9YefTKQxFvpRXxvN7yCF1HDKHkZmHorwD",
  "key49": "2HL4hpUqujs3njzsqXsDK7QY17WeM5Admr2b5r6bfx3ofjLxvF7Ta2E9nen7D6gth5m74feGWoNHTGUVuRRa9Zfb"
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
