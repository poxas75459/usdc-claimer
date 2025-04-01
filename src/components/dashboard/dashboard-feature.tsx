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
    "TujPawxz7ckCZX6GMrRYys2C8kRLf4izkU7yLsa1YaXarw9x8xv3Z5zmnDjDm7XZQCjchJzAWMwPpx3qSDfFELc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdaWCZT79wLi8pH26hbZFUxBhbB3UUE17SXbG3KJpQHvm4pRVMttPeL2ssZS1aY7ZDsbN1P7rAaZhg1c2AtaGT7",
  "key1": "46iRiPWexWvfRAgK1tZHtq8wi4jsEEQ4gWEP2gJ4DWxQ4Q2Zce5EUpY35FapdHTdmxfvnxVpD3YFkSLyTCVBiWaw",
  "key2": "2eosRjceZcM9Ln73vxB19MkV5uLuNVbm7mEaksG9Unhgsf6wjdWJbG2w4GYv9k5xhsdJ8ifMuW2vm4xhG45usUn1",
  "key3": "52CaVgzhTW92R5kVQt9zxpjJn4HRFaaP2a3AFdbA143hMMSSXso75UJoWp6EnX1JJ28vgvSiyc4K6o795eRfrQeQ",
  "key4": "yPaSfB7P1fGMPT7vbGy9Aet1rBvWqNwjBBtX5fmUNeMhbrd1JtQZ1d4PvARWHMwfLymi6EqL2T2cUPEHGH6eyP4",
  "key5": "2h5ydCJFms3eFJq4Zi9s4x8dbKrBrjTGWZuLRqs4WTPTirfmHnNBNoHh44RVFkuxYAya2vuzpGjSjRQTmuunop6Z",
  "key6": "5EdUpxmLwJFsTyPCDW5gLyjHkvcPnUAMWiJsVLwqTNPGKPp4XY5bXg6CCVfis7zwhecwmpWRkVjTpT1GW3KW8Bgf",
  "key7": "2LdZLCJx2arRfUEkb6Hnm8kugCmVEjFP8RtERWaJQvdRgswe5SRqrkwVBU4JcaD6wDDDHttL58VZ8reRGFatGDwB",
  "key8": "WcFD4HLJtRiJ33QTL6t9vWkZ1kExoDneyH1tzNiC3sSB46vx7kPWG2fRUbXQebc8mtyu1gb6LVzNhJCi7TsEgin",
  "key9": "4JH9RHu4yjSipuAjCQhRby6diND196NzDmJ64jYddMtwZDjNAHc4MysChewsGiKq5nC25E2r3sNcvsjptwsv6cuc",
  "key10": "5k9ZTCnwVHjHH7aLuV8a721Kqd35RmN2QNZNrYdrx28rZ51K2JHQymBM1oLduE7wwkBPxcfVQ94Wm4KcqnaXxVXM",
  "key11": "3sRGGHWh8U5QyYDWnMRkTefuqyRUQeU4UDB76RwhE7ER48D2sUcc3qoaK39uUBokoQRFi6LMoPXKDQ46co8qsF7f",
  "key12": "2xVdiUnb8Hwy9Tdm2CpgFJ2pvujLexfa99pfyivi5gmjnpFY6gM4QnXDbozB852MTiFrXt5wxDsqbXz7Qy76GW2d",
  "key13": "4CjpAKoetuvH2Z8D3R9wUS5kQ3Ltsw8ELr9SHpUJEd92JGCu6vXB2UEHXJKNk8Rpn1nkcGw91q5vqfjrzSmFBab1",
  "key14": "F7GeYUN4GcwmxNuFsQ64b3N9DNshim12FiRH86fzDTPks7JJqzMsfe2at9NvMLiM2uUVxnYVorS9Xb8qXQBaEVm",
  "key15": "5E1UL7CJqaYUd4izF4cS8aarB8SubyuH4SqpdzFFvCod2NP75fQrizkDgmk1LxxrdRJ8ZzV7bGGHoD8ctoTSEKGZ",
  "key16": "FQZQMPMMnSuspHpRsemHHbKmvJ9ahhSKNoVu6TADjq5WPbq5ugJwQqWo1dCnBbpqumfQ5BAwshoYxkErEmgKavw",
  "key17": "5jp1dQ244ghKkJUkp4JWo42nJ79S4m2KzRdgrYntTFGp6yofguBov9TcJ2XVGjgFFpzPzD5idUQTyDVhjNxkNR5F",
  "key18": "47EdzhGW1yiE7g5uN7h54MLaV2NjBu5yxMk94BunzCq6GfGvxKxn1tNaq6m8jR75TdtDLX6R7Gr7DRPnQCxPZGQy",
  "key19": "fE5R6qWMXV9yTn7KWDxuvkLLtA21xTNHA5zG13TnkH1R7ok8oGiX7j5TGKcGjsgLmRfUHCbM1qijcnwjJXwtGnX",
  "key20": "3rX7RTKe2nAiDmF1MDgMafBUyvK85Ygdq1NjXPrgV9x6A9PPXTzd6nqe1L3Jy2wsnNs4Khc6uZKD7cbY9Y2UYAfc",
  "key21": "5pPJNaXvKqdyLtTumbB8r9ZQt4tcEGawSCKrnEvv7i64SvkYmqPHpWCHaNJ2jWksQDeULwuu1LEuiP9hqKyYeufz",
  "key22": "2b8hxt3yGyo5R5G4VPhFSY7A5mTFD51xwqHSkBsWfMnBsiXXLsdkpP1qdgZp4Sjph11iGZZtot2KkSEB9Zdsgspo",
  "key23": "3XrmBd8NFaQbkRhu3ThsDh7tXJQKMo2yUFDVt1G5qhN1vb24VHtnMRo7n3E5nhYXXeezh4or5eRQxyxJXgZqwYTV",
  "key24": "4kWJMeDBfHqukDUMHGktSEAJgJuHGeqfWeimHwatgGt3w5Su67TewJ3TZggDZUqw2RaobDcmJuovnXsqsnnAjcch",
  "key25": "5ofHu58a7cMTtFdp2BoavfXRgf8PbnLn4UKEaCcDXg37M4HJRpfYKpycygp1Dy9uYMJGzz7Egr7LuRdz6M2xjxzd",
  "key26": "2HhLZ9rdVR1Vx6UBmMUZyM1nKMobJZKijFfJPzHdq8iyCUwe4d2hHuYmbMd6Qi1At7mUBbRs25dMyKeo3foksMod",
  "key27": "5BLbMpCGAr7sD89dCAbmeFL6zNLufdvAkurnRJok14GFnHFgWiMZZCN1FR13FjtANkEBtkVhx9NYEPEQ6DMWU18V",
  "key28": "52Q12MDuFJS5TaKur78UtPvEfAiNExu1o2Hra67kZS8J2bqL86dcVyNTa23Pdx4BshLBS64iyKGzReHn7sZtPEcz",
  "key29": "2XFuRLB9gY8xGXAuitDEkCEe9dkKHpEWko6Y1qiTFJGpeUJhReCup249m6We2yLjtkFr6foNKWCGzqyeFJx8fuiv",
  "key30": "2G73c8tLkuaCt7KTAv2SCqQmEQU7Cd6Q89HuhZuW2h1ZVmhcr9UR2CagDU2Bu6WgVRBXvqiwd3epVg5PuojFiCKm",
  "key31": "tHfxeqex8oaNpV6m8bVdadTDB2JKhpFJKeMCoU7C7sN1ASWttPbzvrNJv8GERaJgSJaVD8AH3MNjHXyymuGMKyZ",
  "key32": "uHUozcDsyQgXV4ksXu3LezxkkS5HEbrVEuxNVzH5UnomA9BjY5MgXQsRwBhQDpfDWTeG1JGuNbPCSWS9a1KEMAF",
  "key33": "26oQnpcFh8YxYwKav9E5sSFZQXEzVTPNVYfmcwNJDWd5iK7uktevuE5Ywc3bp22GKxXujpAtqGsDbbyyqjUZZMsY",
  "key34": "394muPe5S9e6YfFeqD4ePAAX13ZXJ3DSCif7Pg5XihDpNbrooP7XVLGaSkP14YyqQGeyKKAYjFW2jfYHEbM5CncZ",
  "key35": "2mUiMiPsyL2gPcZcv1pU5ckncAWf1ha3G9hNWW89TRYmTtVTg3aUwNGtjjG8jxzKN4HwcWoka5HAcoZ4ToajnbW6",
  "key36": "5GKYUfPgzmQSMxzG6S5EYakYWDsEpDvL8ZMpM74nBS9vqForCwgxLNhipFGiCrNjn2P64bFq3mCJH9YKP1Z6VWqb",
  "key37": "4bvkoGekqyvBy32v1X588u84JtAwqeDHv88iZ77D9H94PcoyaJ1F9McLuDvfrpctahRBwDFEfrcc4QMNPTDuPyqp",
  "key38": "5fv5khfo8LWWPDEXtrubwuQnoycBnhLZm6d2D5N16vsTwyajZhUbBbMyg9HEqBPwCr4JHtzXCMzECjMQivANi5gz",
  "key39": "nTw2Nh95KDGyjTf1nbWiqkJRqHEe7ocVTfLZeVaT4PGJ1ZbuRpUSaJsMwNsaLT8UfCPn5Kq9KjucCkK3vHqNNM2",
  "key40": "2b71BRRSx4etKsDRtJJVfUovY1ZaZWZJvW9SAHaaVao5XoRk6nqgNkDqj2uw18BRBhsoJHJB51ATuPUborDk5Z4r",
  "key41": "4fKQSXtzU9P1hFq3ffGCVrwBaFKhkSVyWVjgMrBnWEU1jUbbRzbBN1yexbGQjcHeVLNAp56mtwhAozELKxAXLcR3"
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
