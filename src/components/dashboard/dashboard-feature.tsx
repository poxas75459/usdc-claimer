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
    "4jN6qYtqMBMSmBKPH1SaRCHScPnrJGnqtNQXzbM2PWQ2GBzrzeSEkwwaX9evEM421SYN6y49gB5nfWQcaFiHQVGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gt2KN71VwNu88oyop915bH87h26sTw3Ak3fnicPWLKFQ5X9b3E2K7xYmTZ7st5vCiNpmegCnyy4RMhj5BtjZ6JX",
  "key1": "24NoCAT7wc3xFgqQiywXSvygziPfFqTkbq6dPYjfq1jUkLhkCixsBmebaVRLdaTSXjhS4SD1pEB8s9jETTntjMmN",
  "key2": "2dcUR8gWXwqP3zjy7QYmkw2BMWiuqkCdXAdCZcqqWfY61VPtLGzBUSvcdzzAKMXRMd1fq484UTA6xrjXV93AdXG",
  "key3": "3QPxshdJPYUoX7b9UaaUUizuc5tMcx2eDJZUcEDdvdijstspDwvvadtQJf8EgfoREAb9fnYHj9dYrzychvgFkMdX",
  "key4": "126a8kdCs37zUZtbDJssi3PnTQdzXny4JfmCtZg5VqM12oHV8Gm2myffZexBD2VjNkL6tNmTXJme8JBobnUzGLkC",
  "key5": "ZJFjzr982AABYC2dswKhxqoM1xjV3XEUuqZ3nw7MVCs3QfeZumknUqrbB6ixxNhdWugB2x638XgQ72jHQJoLMjx",
  "key6": "5W4Daev8sqtd3SxjBEyetVYauYrWd3BYchUFr2rrLcwqHwHwhqnmmix3e3gVae5NJYwcAto1CNUcHB4Pqdysu7Eo",
  "key7": "3iJsXkvVc1i3a9Kv9HnyDFgzFCCDAc33Ss218wNMK2uRd9xk2FPHiCAw3MGi1D4XeYwno9ipEqejgvVKahGYcbrm",
  "key8": "5ua78AfFUhMPGRvZCqBbPLm3kootAERZmMigSv5LKifUfY5biZkEnLpcLiNbWgE9E7ozaHZ4qYbF745R9NKAHghx",
  "key9": "4vky6QF9ArwmDmfcsjH5eadjfJhvw8YwVpeqRMnndcrXyFG59WU8R3nd5wUACV8Se8v1S8Y2fUSBQiBj1QkCtot6",
  "key10": "5C8gBVVw3khXT4LoFypB7GFiPrxWFfvAV2jdv2Dtmc9jgHwzw7bEvoBEALySg6RDv9PFsJcNS9bP4XgAR9ZHqLrz",
  "key11": "355aAY1cfVSe2wfz8mswRDopKBTfWaPLEiZqHP93n3HvFJaaoWkKohFX67cNZyQMwPkMFonV6jamuwBb3RFTB1Li",
  "key12": "52tKWxgMBc7XnX4cEjR6Fg7UMJf2ZpUpHiawhnssS9MSaj2YnMHCWoUHwihqhcDBrgooZoLEkZMqHJS2ebXFCFYZ",
  "key13": "5AsqQcg1WsbC7CJ9gYinEve4tQ9eY861c8WfV3AbKboQcMkbGGBmus4KCcGF3L2RcAcnhwAT3nG9auL4cPQziEzc",
  "key14": "4wiYJARjPECXhHaTCfxpY43d9VUv9Sr3Qi64AWZHY3LNYCTYkLcXQQRfG8cr8MX8j9DQx3PrQN8MK2jZ6Nonvz7N",
  "key15": "2FyFXtfvtxKiJhgUjZcySzkfRjRuCeB4xa7gPchEf1SoQWspZdSFCBws4uzHcr92G4FfbxMAoL3oafTg9zP8Usxw",
  "key16": "UGuZkN6xAmTy33Y5qjYYZfpTfvUczDR2wH9reebbhVwU5DtYzGzx4X8PGTaUS3zxFTtC86KJFqQE1ubsUUWJAMk",
  "key17": "3HGUNbaHyGNMZ7zLKykMZRtyp7DVfyvR6ASqRsPkJm2ojo1E1YPdvvSPB3xmyuz9jWLA7Nk8xGGDHZd1gteZpvCF",
  "key18": "aTfb4MqZkBVHUdSDF71AF6syquLFP4ie7TcPmR8RryUVCHbvqq6WtBcS6hmCSX5pnpN4Zq6fdpHVioTNJKphoui",
  "key19": "375RYpqqJE6d3J4g8EMNk9KDN5C8R4a1urv9SZ4c3VGRq6F2vhHztsanYhkco2XvaY9C5t8hgg74qrpCuAKnihP",
  "key20": "kX4dP2rAHPbrHRotSQvtSzgSG91XhFQrgyiX5UCqu2FtNM6vuxzY7erNgGJce1FyBR38Pxx5oGF37oT33fCDut8",
  "key21": "2eiw2LnPaYYb49giHZ7x11scigAqgxVj8iYAesDwoTRD5KABQLPLfJAEqcMkxHwyo73YQ6x8mrn7k3hiQeNEs3eD",
  "key22": "UdY9Uk1Ub6jgWMbCfjitT3XdX8JjtcBupAJySCpcQed9PBsYZSHWgSnBryYkWsVwCK3MvpW24xnqx1CqjM4s4Hh",
  "key23": "4XndoAds6AgHxdeiCgXPf69ZpWFnwFQc86aNVZxdLbgUszM1YDse6Szu3vpR7voUKWKXVk1G5eCon5iQD7FjhS5q",
  "key24": "2APT2JU7RSTsUVmZ6sEMfW2k7YkkSDo1mbceJ2SiZHHrBc4MnApMUsupcWtsJXFbqzo7Td2NHamofXeVidpsEAov",
  "key25": "62xScmfKMEEviyRRmhjoe1xciaW88TJJMriYWd5amyNo31dJonLoqHBZNZjRf1dDPKTk8r8JSPpANPoQL1VHauAw",
  "key26": "3pGyVgrBCEqmNFwhTBRGn1HeNPFcCfpXqBVBfb9eJxjewLD14Suq4DskKe9zzrNnjUN77rkPdTZnn8uYJTxJDhtQ",
  "key27": "65Yb3uEUojrrB8ZGj2GcbHPUxrezhzuEGetxhjsfvGUCeQRraKM1uHewPeqkKYY3bBCKYRUkbuFedCDbNqCvsAwE",
  "key28": "51gyT9BR59Hn8zXESCTYaYT81PQMCPna4v4CXbWZ4JZzkiazHncxZmQ6t2zALV13PVs52GQw3c8R7YB7NNzuAhDr",
  "key29": "ZEWNXgG4YiPXKBeGoi558YUvconq7SjKi2yVm9cHfsqR3NGqVGDRgbF6qxjjaNE1wK7fW79VFQo7WKR8c4AUoTJ",
  "key30": "McpL6KeXCXTtjVKLvcGLuFxxLpHo1R4vjTPUoi6MCJozrCuNrgreHGHBXomsYJhHxXnmpMihsKsPF7JVirt3btT",
  "key31": "3huh4UX42gJTWaYStuTV3S1A57PXm7z17WFsTtSdQBRpnnD7gvEPco8QqiFs9Q89GSWxEmghEC88pq5Lwb2PLw6w",
  "key32": "62a6LNcx6Cw26VoXi9hF9PEdG9BXemuujpmNoL5PMu7K1fMsG6Pd6baFPhNP4Snmdz5KVjABEEy6RemyiP3zGjoP",
  "key33": "4jahBQcysSRbBnWaahuP8p45RTD4mRps7eLxw3E7rS1mjeWgSG8qDyAMBqKZZjKKsDGi8GXWouuGqyzFTKoQFxNV",
  "key34": "58sT6VZfhKXWqrCAKCx3TYhDjGuTWZsXdzjNT2X8TqFbscgaZguwFsmo8jAxUM7wKJDZz5pi7TkwCjGb65h1sdFX",
  "key35": "4xkzwKjcrADX1nebbLukXyKv89HDBdfSDfmE1RqUNzyNsYH7Sx4HjP7oggmyzQEdymPYbhppjJudF537nf6Y7sRL",
  "key36": "3AnHZNsbF3m7N7AwnjBsiaggJNUtr7xwhSQTi2cTb3ciwJb6A88Yb5SHT9S1GWRMPfnTNZeELtm4EaU1KSTf6HgD",
  "key37": "5nj4KDnjy8n5t515h1DCaePrVEQXn2LCdeVFTqqXoZRfm4NiE4gWgtXRenD9R4ixnnX6jPBLBQb5GnAUR1bqkbpv",
  "key38": "3i3aPQx2c4mGFXX1wrXKfF2VY4rWZRkspcbW8toSBRe8Lt5dk4abstNBpLq8jCzW2kUs363dEG2Z2pCPk9kbU9wp",
  "key39": "5VhncnBPgev2DJZe2eq7VVGMNQxjoau4xsXRfSc6e9NN1ChgdNf3R5qDBZ53asTnPX3uwia4HR9YtJEtF89mdFHC",
  "key40": "2uNJ8gyKFpLKbgCL2Jh9TancCxwa2dpP1HZSpKRaRFY2qdxuDCKdvrmYA1nArFxsuJPZUvt1utxa6AJUeu3XmaVc",
  "key41": "4jXb39Ks3hMGbfF2xaFNPr2b6LabYQsY52jkpY8ckuAipSQLnUfidvozhUuYDUjyF4XoBhoCdhNjSaUcNkjzp9uC",
  "key42": "4kscrWbCDvyJNa3JSawgwRE8muw1aB3RnZr1Txty3vrGYyFhvviSnDHc8r7yXM9wG3YYSgyeNwwJ2TuxZswt4UPg",
  "key43": "3ypVJ6Pg9sGUR6RZB6uZQmGAWX32AHKJ6KSK8jLion23fwtmbnibP2GBgSqQB8vzFYNKHR9kJELg2qgpG6CSS8ZR",
  "key44": "4ZZ4RS8G4DvBTSDTYnj8DdzR2EwWJZcCMuueixpKsSShT9EyVhMmg3LruUTs8PXEWPB3xge8buevN1PhymR1XJKD",
  "key45": "Tk5z7hwdhsUo2ntnDPeDV28tTXmynq9gQuvG4kRTDxp6FXzgGBeqQXAPTN3DfPXGMtALiYdppVnfgpposz7NcBd",
  "key46": "2s9bSFCerxSceSZvc2zuNwWSuZcEPegPjwaTEka2Sg3jrKJcKQRnsz8tYSGjgn4rPA9FC93GfVWdcD5Ft6jHvCuZ",
  "key47": "5oY11RR6c6sb1TXbcZc1q4CkeFCLFpZ9Y7SAtTSjqETk9tNniCe75NbBGvyWCuy3UJK3pXw87oCJ7RfRU8hk95ku"
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
