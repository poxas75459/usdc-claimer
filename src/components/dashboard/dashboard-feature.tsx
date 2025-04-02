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
    "2BWqZRw1Bbev4gNmpHNQrdtPpP53JJwHTmZdStnZABEAD4Pb5Hf7v5amWsxxYBrUBThtXfbSvBY58jWu4BCxpUC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26M6SHfKKZVQvvSRqSS85VNoCSPW2k86DiJ6d3NJoQK8FHnN7mf5pvHSRGvsNYwB65F2pBDkYG6V7Tnx4toDStiN",
  "key1": "5e455i9r3FipozRJg99wyiCEUvv33bccwTSksaq59y2C2vBFzEY7eQ9pXsmKx9i6MYXBR9rgDATkDiuzr1T38vzw",
  "key2": "DpNdsNoWeFJ5M3aWM6oCtThVhnjUrkVN9NbDiu48ZePs6PV6rfSz2QrZZq3mKxENcNjmuLCgFoxpM3PZbcyar1j",
  "key3": "3Bf7iiXHnNoCqNz1rU5uU18BjbmYo49gDDgbKpneBynfmRc8msYxpQgL18sv7nj544rxcmGqyEDjQPuRZQxr5pY2",
  "key4": "47qQpJs3eZPQSNgh3nGKfJccBnu7LUiQ4TrqrQ2D9CJoUXaqf5Bd21ZR8fkDZwLHjBzsWd9Stk7WsA5QLtgdZSHe",
  "key5": "4mCPA6TBVJ3aGEh3XLmHUPAqaaRMVpBDvkFpNHttTJeE8BrpoqxSFqFzFhR5s54LKjFWHhJoXtsZx3KaFzt71Nme",
  "key6": "2tZkywkpC53gLEKVE2TmTFQWRxyXnpN2a73cmmAwRJJjjEJD3twYPv3ARn1cu2MhsZgqQ4MHHtA7CfkWxL5XVzXE",
  "key7": "2TPnH8uVmskbeqxLb3XjasnuqqR9yjFSYQP8rRQbBgSBoGS7qqbYkTjXph5C2LoXH4AcmxkgBJk4m1czV95mTEMs",
  "key8": "2MUk9RyadZbaKpU3aRDLST4CEoTior7xeg1DbfgaXvMBrD8UdSTqtwfSiwJeYLgSofj3RREfZGGSh2w6UKXvRMo7",
  "key9": "3ypefz15AkYfibmTsEGzpmhFbgVr7xobp2gPhzDKQFH7SNTxATN6e8njq6vTU4kjCQHuPVKiA2Jnxce1MdZYchMc",
  "key10": "5X3iGNFk7w39xGcF3khNMAk2YtebmshyaX4ns2z2eu8MVTYWub5SWLQJ54LmiZwb46BXC3mcPHDcRCQn7ssftzyi",
  "key11": "4ZwrVD8z1cj64Z3J7YcnXDCuXVFY5MsTs21KMXAbn7YRhCZZ5B8DrSybDbqpnjdbtyhxzSMZjjSdRE21aiJ7dvjc",
  "key12": "4MVMfz5r43i4nVfjk5BH3Kq4BzyomyraPcTgKVQ9KwN2AkC7tjJKv21wYcptqXBmsKUU4kXV7YrK7YoP597yivwY",
  "key13": "5C3nSBRumCuudgg3nDo7Lmito248vdhdfoTq67kLcrnN5EQa5VFUHUEE83gZZR66qqKeB4x6mCg9uwEQzUp4LMj6",
  "key14": "5fZUzLHjJvhkhboVA8yoMT7Qu3khQTaxv5KTBRasD16FGF1gkzpps5j2PfjGntfGkh8yxxpjbQpagJrPC8wtM1Vy",
  "key15": "4Udo35YFqo4WfzyMRZm9YQ61mdsqXffm2VpXzWB5aJZvbtq49B5EasV2kfEm8k5BFRexoEZwzdmbBQ1kSUFzTFbu",
  "key16": "4j6sQKYyRgFxFaQonRXMTjao8XaP9wZmgawRQCGA5saaBMjTgUskWJAUKfDrf8bG4P8zMab6FKTwS4W53kMjdtEw",
  "key17": "2xzwWSLTJy5v8tUrKKFQGiiwXtnpy5uPbV1G4SAS2eugFUrAZN87QrixVhFtkcNBpmajPEUx2wpbqRdF6FJ7HVu8",
  "key18": "38XLr6gJtmaBcuqT8YwqJU8S8v4WMh8QzNL3iRd8qZy9ah47LZeGUViXk6kz9a3t6gSDYZEVjFpvgApJL2wtrxzV",
  "key19": "3yLFWLk7gfxLHCKifeSpNcbDuUHRwLV1U4GpFXdwixcmJTP2mqCxK8w3BYC4Wvfjq6KJboN7KJmap9Jfj72QtQgy",
  "key20": "3UcUwc8pttdE44NbyC6JYjLqLzx9bfw4KCpMPaNRhxk6PXZw1Vtn8BzFdhdusH9ZJKqiM3xoXL2V6XB5zVy6YcxB",
  "key21": "5hpQi1ogqRT5P41kFKWoyycstHxbFzYMoqSWqC9bUmKRG7pjucQnwq1c3w7vgYrRfJALx82uuiSZonY3VSs2oKRV",
  "key22": "5YugsUSJ1gCASKnXaxnJvgUEE3GU71nxxKL788DtzF8kWUKfAkxbYokrFpFMaiChGYxAVnFAEExzX534AkPevydw",
  "key23": "4fERN4YUfgsDiuhZrMfpa2siUb6WvCnd6YQPAFJgvuBZg9Tk5tSPKxqnJzyYQW1CZ2WvCvUZFzmka47K8bNq8GpH",
  "key24": "gdm6yyAbRQz6eqUosrhs6CpBG7Lihzgvs6AkmyWUhZa9UWGVNqbqMBfRthiyZ2GPyeMXYB6mAL9fp2wSL1YsccY",
  "key25": "3LuMgT8SZsx8TSyVJrsVWbgyLfcSdtALij66rxSbbwSbW937enm3BeSLPYWNPniLcfRZVPuLdr663x1ybt5RsqPY",
  "key26": "28mLpTyWAvSLq5FMwdvhj7KcduVCriLvLTjBQxCcRVMJkWANKw9GhyhM5LZawsRHc3iTnpqYXuL7VHJcE2MEYMP8",
  "key27": "3E5CSUDHZVrRwj4geJBBCZh8RwATm2yaU2GcqGkCmmLY1magaaT7PKgMfF9GPUk9c3RepN6f6Es8reCpg4A9SWfN",
  "key28": "5a5QeW9FZwCQhzZ4tnpjvBC56fiJSBVWUj3THnTvyx298yLeCcdCmXMFvbibLsQmBSCNXXcyVMLrgh6Jvnrr9U5b",
  "key29": "42kxd8uNTZ2syP66vHwxSaM1GQWyuNh8gLJL1h2zTP2seV6WJTiU3dTfWsDgsuHf5DpfniwKHTeAwSBeTAtqd8RE",
  "key30": "9Ai7h2WcWxgv3FCcHigjERMvHdiybfMYvYocLNdZffYzj3w9oRFYUitw5GnR9cjX6GQVngoXhcMoDbuE2s8qqoj",
  "key31": "4W8opJ2EdzaS2h4UeGHSADenvdupAjJocNtk9bsxGrxk5iKGbz7C5RxLzRoc6g4bNZnXxA4WW27jNRiSksguF3NA"
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
