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
    "3FJzibCaBuwDSQ7FnsJsa8yqJYx9ZdaMbm1fbDGKD8JMAVK5LE1DQhY1SMBRCUYA2Cx4auu9ve4jYohCWgUevrQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lpq2G4rEsiyE4Dt8vrS3wrvKfS4h7wHHbAPx3tjvEzAmfZEHupcuNkZDPX67HknJr7uvr1wikghmfE7aEQAr4dG",
  "key1": "22HJExdx4XLj3ZG8W9GqhYXshouewpQwzFXuJBnVJr5HBSD3WWK5sR3uA1BaU8NYsxSnzUoBoHGuEMHiXUDbAeEJ",
  "key2": "4znNL3GPD7SPkHRzoe31kAX49EkR9BpKj2riqnjQJeZUgVR4LgVXFR8QgFzhrNHBYtDwUK1qN4as9viw5gJUfjF8",
  "key3": "3z61sc6jiXQfA1vFPqeM8CmmGDSK15RH5vkWEQD27Ds8W7AKyfX11QpzEzteQBALsSTKyGWu4ebPwDjTk3dEZwJg",
  "key4": "3Lp6dJznpqXENLY2EdKiDB31eumaEbVzFsNWU9kXUhtLX2VeyGbgZkdyJM218CQNCgY1HJwdnn2Fhiir8vZGCrdS",
  "key5": "48N5V3JRkfCKUcCDmMa8nydpFMFZ5QpA8yL4Fqmjy6kZ4nEAU3JVfmZ1zkyFwrLRcC9UVk1YPfGEum1nyP39j62q",
  "key6": "4N5raXGuTG8thH3eCREMt5mpRgKzLvP22rq4Cd5nTp5yZxcdafppnviF6vqX2w9Uefj4vJ9pm67ULwwfh487PUcN",
  "key7": "61X1QBHUt4BmFVL1cgCXvtneWPFyRn3bH32imbgov9gMdDcFnCRPdRFmz6Rdx7xnPY11De8Nj3EPqviz7Tj2YqiA",
  "key8": "2LsL2wRXZCYhyEwXo5A49xsGHY7ydj58vUfqpvASgQxodzx4MgnSBrzM4sANhMuqWMdaBxfVSJmXaG7TBa1MAB8g",
  "key9": "ef58Y6qbRuUh2Kbu8N5VvbMKzNEtrkihQYXkCgvGiFbpNfYimNKyKDV3iFaqdojYX9VdTU14SDBPWY7sWh3YzFA",
  "key10": "4sBvJEWtNFwCNKqpzCZCLAKcXHcovdHKkdDXq3UYAHKfjWfceU1yAGzuXNWjB2YFt7BVCZm2rxdkjHHcB1dmLym3",
  "key11": "2787pwW3Z4M3zBE63QumxKKKrKk4STUPbhdBthtYuoViEmJw2ZWiAo1aian9pvnEhd92DLrZroCXAzJpQFREcmbt",
  "key12": "36aHNUh5pAjUgr2YZVhdYsYTUoD8poAxjrELhGQ64zXfWT5jynumrAEckMRLjDT4THW63z5h3V8jKZ5gxnuEbSAo",
  "key13": "2q2xuNFPbnkEKH97na764LzBGcxcRocrCoRQ2z4uoYnepFHRH3KLcmumXgA6spJPiPndEN4hxEUzYL2wuTtDUjSP",
  "key14": "2qqNebsyUPT4Ant9dKiaES8TRamWia4kdyVcNy146X1fMdX8LKRGtjjRe41seQZuB1gNixSmSZRapZNNhdu4oA4Z",
  "key15": "E9NeAx8NPPMwcsyQgpxVPvnxmoBRUMiPmvL6Pj8BPUFwqy7cipiLYf4bvxdkejNr2hUxCAPSm2tuUoCXysohqVh",
  "key16": "3wew4vK1chA4pgRU4ovtUFfMa7rzTQEM1JNZmSX8iipZMDEbKfs6FewRxE12UZm9qQ9miZFvQQSMsVKpkxU2fbdK",
  "key17": "2o74vDc9p6eFsqoHdLrGJd6CmsdewUZFUf3kwpEM6vsc8ijivUox77DK2th1AwMdJXyrniLzwW61zPLuvoVuWkW7",
  "key18": "4TbLFTfyDgmBDAxzKFiy7xY25Sh67caLY1sfriaS3fznQBtk62zykkVYUiVnMa35Brq11vP5VwC1iKxzwPoEKXuW",
  "key19": "4aBtDubXGfzuSsKTmKehxymSsNhu2fPNy3TogB21fE6Krn3SC79hB7b37Ev4aDJEQVshyZe8Ru3EmMHnaFhQ39Ld",
  "key20": "5inZJFaTMvD2V4bjFuX8UrMP4La6U3zqmmoHsU5CMs5PQJaK6W6L3mKHsjU26fKdeiG7Nqb945abZvPh9RxdQpDT",
  "key21": "2LbvyWMi1zpTCZFmEJQ74HTRgdUfks442E6TrFKTggu6yVL2dxdTvVVCsCMpsigsFN6n9gMd3Yo4UhoQ6EXfAgfZ",
  "key22": "4RFjytdT1m8nhmp8wB6cWEtEeUbmYowudxzrpjLWJsFAN8B4fc2jh6AC3X9WFQsx1ArTw6Upuzbp2ffEmiBqMDTr",
  "key23": "4HdQs448ZVgpQQws8jNMwwVP7PzesU8QuM7bUWwcSgRHQKJ3Mwn2E4LN6agrakvSibeiRpJiw1kvwHyk48igwaJZ",
  "key24": "2Tn9gJ5LHMT8NRLTQZDkfoJ8Chf7wSSv9M7K7F7bGTuSEuwokQhFT4S1iXBoZCSPDmeUkxLXhCJM9kUoD19s9FAK",
  "key25": "2d8DWBngqfcdwN49rYAfWcuxiQ7KwBBqU6AjSqQLSp4rt1mdo4hEyuDwkbSUgUnBCnauMZvZt4NHuJiF9GFrycmn",
  "key26": "55NKcbR417kunFLH1oEdmdrgobcGdbecX4J8s2yL8Vddfa8qH3GsBYVt8soknhBSZoagftHHShC46GTkLYBmLXFT",
  "key27": "67g2jxmVxij9KneUrPNbyS52qAbq6foGwosELJcGuyeZ6CdsvoU6t8Mng2uCdPeiGKb8VGKXbJFJeKh9tXkxZ7Uo",
  "key28": "62U9fT4AuuGrTLTLUvLhALy41qcQeehr6Uau2bEXrc4x2FSrooNBdshGbjv2KUKYhn2WuukwENbTyCJnURXXYwCC",
  "key29": "3PVbWGjwW3oMmSC8P7bKxgyVtv5H82CApRfcxYNrynr7J6ZkwoTKdpdbKizwfoF9HbbXGrbfdcwJW7nC5PZrWSuA",
  "key30": "4SwasCC96V7dyAB9HqMz1zV8cPf5ZtVWfvGdNLBmohyFfE38vWratTMFCVhiTpBoddiMiFU6XmyJGYwZuTqUgiaJ",
  "key31": "VPjrDXQJ2UpjuDUaZQqks2AkpEMRXXDy1GWfcFFbTghfMCPpQzieeVs4dySypdTWP4TXWJdiGKWNs8Jt1hjYVZ3",
  "key32": "cKM3zP6iQDobZ3yy4csDdV2UG8rS67tYgPuhn91wjFHCGrvtjsiytFtkdYwH1Cqx1AyNEqPMXsZJwUkEs8rTRTP",
  "key33": "4u6GbFgHUYMcVM3XE11xzrb8N3GzLRVcP63cP689wxVZf7YJx6myUJeYsdZR6ZcWyvWnEAx8VGtR3dg5X3USeJPA",
  "key34": "2eJppgaMJ4QUBhBNifcZuJtzBvPvh7T26nA4NeYPiE4gYxukxH6juya7tBBGtamrh4EEGqifggzaZS9M67AvwEA5",
  "key35": "3Lcos1YVm3ZgcKYMTsqDsisQz7kdX6gaCcdiaBUUdJ9kcc79SL84sD8i3bEVt52FvkCbzhCVHqPGS3NZnx8u9tFY"
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
