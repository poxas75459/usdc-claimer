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
    "Aqu58h8ofoWAf23DRBfM2uJ7z1gX1j39JKxoCx8nhWSUHu9Rdy2TQ2tT52iQ8VJbCx2d4jCQ79oMeNhpEtbkkBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnPm58SP5cQ1qA6w5UcXJhZrRJHpiY8czssY5rDHrFc16ci78U6tVAgrWLqi9zAdMKcTad27mqiwMRZurkQBTGy",
  "key1": "5R2DVskEnAwApvTQoV5HLCbFgww6q8AkxSBhPdiLxY5MAJ3SrP2c25UMU9RKG5qvGWWhNsipdux6tvh1eioXJmCE",
  "key2": "4RiWKs6vgKdaebtaL9zaY3RTcBKkM57ph5ZunbmWBn4N66AA7GSPsTFsP9x2wr9pydutCkMJf4bfKrzDzJYzwo9w",
  "key3": "2bCNDgBfGP88ypMQbZVf4Aqn6rQAwh9tWMr9AGRp4nUYhd3VpvoTCPbmgRrwhXQ3EmEnptRRtDDwv7h3ZozkBE1f",
  "key4": "2UQkKp7YHjUxPUhU9NerT5BEyc2VkreJTa1tXHdCyKqTuekTzsh9bfYdHoYtwRVinT1QFhzZtfJ4ANq1n6nX67BX",
  "key5": "XEHU3NnV7hdZv7oLojAnQJCy3SYwAEvTuqtUBreArQkfJvZaWQkx1pzukQ1gggAATPj9optLtFwvxdZQZTgkuR9",
  "key6": "2W1yM5Dk8puUp5FVc8pLmEqMbgTPhgHw78cHbUmvSrBps5GRDchjG2x4Bn3Q82Ciw4SpXpacj8hzMeQt9ANNtjYM",
  "key7": "97BAqe3A9cMutehGWPeRjpaQqbqDWNiLHixwxS9gppyxnWW8WL6EXwcdKK7NY3b9uYd8yrv4oBiM2hLC6W5s7bb",
  "key8": "CpuKGmD2MTRhdVJiGqJkRTiecbWWVisR6JWvqNaEvFtA8ZjrgfbWoq85DaKt2YAqCbLaNtsXeenWYN5KDyWRtW3",
  "key9": "3Px6GNUSxFFDppM7KrjKBxgBfDXmuwiKGCSEZi4HiYvAxBa47LC76wPFcmQnUdi3qd1CNtXhhzyUUNQswooct1qg",
  "key10": "3b4u1n1niok46p28QoLKFcdpXgK6b77xBe7SYEKqWXBYBTfDYYmejkEXSjff4wF3fSUoaxY1ygwZhZANMP5aKLY8",
  "key11": "5PCoE3gdiHFAxzqPAYa5M8MSPqEWWhEd9RvaytTY9Tf4TGUh1WAU7pHEzaLh7vGb5RgatMcoUQpAfABfxogFwXpk",
  "key12": "e8wmvhWH25BEgiXDGvHnNDYZwnbJwnU3mGQxdKBHQsDYeByjAq9vqByLEet6bap7pPkoDW8qreZBtCbBR178y6W",
  "key13": "2MUkyH2jwWznwXcfN76ZqW5bfj8J89h1uvGcjUJT1c9LaiGavFuRWKTWayK2615VdxR9P4LKN4QKtsFChh9DRcb3",
  "key14": "5CxMesvr8kcEgv2ifWrpC8yErngL2ju37pcXbZZGcDkcMbSkMmxYfzfdmXfuvZpELhkdwvQ5GVANYcgHfDQE3f8b",
  "key15": "3oEPGB8qpwJXZLP5pLSo8qiv64nWUa4cQXoS4ZmYTDgKWDwdED4x8rCjoJZzVKbNTD6RfaXCex6ZhwTtkjBmmCzP",
  "key16": "5P79ct7hoHQWibAH7x2PvRVKUfTkoWuc11FwpSti1MPUzRZqNaASURBGwcq4248caQEjfZvvT6QAz85spsM2VpFp",
  "key17": "2heBiS7WfWAoHuFVjwCAj87uJeL9Uzna85CwxYD1sMyMwCoraNrpYDYLtfYvr4thnHBb9wRLFDsuBUaZATYpJNGZ",
  "key18": "3aE9qv6Z5RhVfvqcxnKRWXMZFkckB665sFKpK2Qt5shtbt14Z4YC7PUkC9C5WRSoeX1cA5KhcZvTKpEVrsMxdx2C",
  "key19": "36MhotjVYtbsKA32dz4MUDqFz8tcnaXNc3NqCmjq2xWGQ9PmHRZ846HDQUyMCww1qY46UM4biVHBZRUrUg8TxpPB",
  "key20": "2P6HHfNzz6QiDbFtTeWWywJPScaGtUyjqSkQCwuTtwNXC6KoWoLRnV3dkBZAaHG3R7d2yHR41w6aD7UkzKs4RFFy",
  "key21": "5Rf9XckLp4KCVkae8jqgkKKtU6p5ec1hZWwq4jYLyM5hScKmG18Ab7CSUZZs337F44pcsQCs16SDVEYp2neYGdTz",
  "key22": "3pR7GjdxE52eeDb6D4ak8AWasYpj9r9B8PNzx8MwxCLEMVVToMBgN78DLAN8pSJ2PSiMdHojtqCL1J61xsHMhcow",
  "key23": "2H3hP7DzDcTKZYo5VKMd7jL5iEVraGSsJNBscLhQLXvzTEgVCuVcqNo3dmD11NdbsLLjKM6eGPjVJrUbrCCdF14",
  "key24": "5ynRgwPJiUFGbx6rA25uJ83NRNsf6ErZFqneep2ehdXGtiQfXMKkBXsmF8ETqJZM2efmsMCyAomZAaCpuhiZxMYL",
  "key25": "3HqSs2MJRSW1m2uDPcJMC4k9tyfcXynEAZMbKm39g7RisYKZLHmzWKCLbDidrrNuFjqw4vTvpcELmTYUXiDVzx3V",
  "key26": "5UBaaSX8rGbYCK4bJgCScK1QjSQGLkNxfmse9Vik5U1Lqhs1CryajzbXSKhVNuWyyxGgD2je3kSDViG9KMKQ5vUD",
  "key27": "45xdf2FAsqKcVeTkE7uDMu3SrN6FQh25t8iZYks6FS2T9hLoNtUcAASRKuDG8Bkgbi3ttXCcC94aZdd6cMECP6aS",
  "key28": "2dhZVvBa45baXDUXPCHwKNh2mhHibHVW4crDj2QAWSX1wcz7VMpKAG1fXJm6rLyBgvZjSZ95YW6TH4gYt4NB2KeC",
  "key29": "2yYc5UsenEutaHdPwKmvkpuLFXZkETdQRDfeSttZLciDKXgrmRaZGBqAj3142WZ1XNrQVzYNi1zTrW9uoUpsfK13",
  "key30": "25VERAkAJt3MKL2LtpNuskP6SNTbigHjbyBWnxUrnoBwUno4TqQDJKgCJFWiGK7V4s4Ju9D5sbJaqLZqT6NpRU75",
  "key31": "5AEfsgfKLtwJ1HusyjbgbGXPxP7ULRPnSVrjVsn7U6PhNPMH4jTeFpBusCQdRD6iXSTTkxCwwTwyUcJuZgtXmGAU",
  "key32": "5HkA5HzjKSCPAwABd7h8S4Lkm57tiZ9uQqxVkq5H3kjoQuAGPTdMZVubVq7TSf3Nxc7GLCoc62mQw5BT37b118b1",
  "key33": "62kgiYM8EaUhdjkGjFTdYuEPCA1NkXiTMxkw3PwNvJj53qdXFZpPoGjs1U7pp2heTKtAhw7aWPfwHdmEU6pw2nTV",
  "key34": "5gaujYvPK4Hp8TWJK6j7C7X3zyciezUG68w6pcXaG75iwr9QJbcrB2b5Eo88WDas1E97gT3Y1Dd7Lx8jpLntX3Do",
  "key35": "4vj7BKbUDpqaFeA789cE6J59Jk76LB6pKs9JDwqj9iowJibyzs7januXqm4Dnnrwz3WnGJbsf2Fj1cPGobqBmf11",
  "key36": "5JY4mDDDaXSXvquVFtuM95XSVdNvawtmamHq32osRJw8gq7fowpSk8pHdt4p56KDXPubPCaGfkHZarEd9Uutx2s3",
  "key37": "3kcXP5UvG3SVgeRipDivaexWaePgyDgWPsF9QNGXaJomW9gfFR36QF93AUnRY29ihTZNctH6hhUrewwu8DoJYLzm",
  "key38": "YdsV8xqMpEW1LSHMPBybsBPKYEqXmbyf96gCWKt96HeNc8GMK5ZqgqGWziW2J7ATbTtysBEWUqiJNmKgC1kGkcc",
  "key39": "3XRDJmWQit8r57fWhnKxZnEp2uMPVbFkwg27VJ6PQYJnMVDMADbGLXjxgARCRL21RfW72MiChEmxwctnpP7vt5zb",
  "key40": "48DgZAQ6aahDzDoGEBDdiq969WZq9KnB8k9r6vbv5WLSYCAGyTqYyW3hYJkWKFwGmoxht9JVDBJvPPRhUB7Jarkx",
  "key41": "vNoEstTVYxhUBwSN6hGPZupvKm2wV1S1auczb1udz48LiHTTtaRpfsfP6ssXUkaU4AGEX2DCDtDcWauYCfgRty4",
  "key42": "2kE5m9zaXVeCHpWYgB5DUjECHnnjWN3KdtmV6fur5z1hyWP45goAjvhWrS6wVHnhroSASNcqfi5fX6Df2dcESDxj",
  "key43": "5Kz6BQY17vtz2zNiZEZzkPGYy5sUG6vuc4p4ArfG23FQ31CzJY9MfGLRzHRBH8uEPdYqbVKjFSwuaQRshNMukCyi",
  "key44": "r2Hy73cAABvxjxJ2B9QUDf8vLSkS1yHJxCNgx4xbxoCywAxpRY8AF4stRefTdXFHSiHZtUX3QNULibJeeykJFPu"
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
