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
    "32Z6xnDm5RF3NcGVYCFCCH4689StfmsLjQ2riVSui5PypJivRbb5xFixBRdNv84mdAM3e2kcUrL6R2qkU7ZuDjjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QG3kSNmN3KXh4muYY7VPXxCHfHaTb8LU74JafE7xdifvUMph4d9FZjgdJdtyR4fVQHP6oh4P4WByE3QjqXbM1s",
  "key1": "5KkfKD7of9DGgS5yBxhiuRB8mHbpHQvzUBpWPNdnpnrBq4rrnKTfv7qFpGCo49zs9rQLytSrqdCJ99978vRXjDKu",
  "key2": "37DkTSRd2HUqEyRNptWQPabqnJTZXXnhsxLExJHuCq1uZHfYpfa2H6Q7in4HsWAwsHv2hcbymQC7vFD2995dM5iu",
  "key3": "A5p9vMNXS52C3ie5ZYmS9gpWQBM1eTxSN3TaZo8f2sVJY7CcTsDBeVJvZrLxJnvqG1K4z8FotMskPGHtZhRjJS2",
  "key4": "4xuh6Mrn83aez9nYfRkA7BN9QJULaqPZhJSBDrwdhPLXMQEAyeRoagjZvavgiStdeWRvTSUqiS9LtdYgXMmo5Trw",
  "key5": "45K7UcLW7TzLX36LwD82aXcAi7BSRRzi4rVMCViKnREmSRLnuM63s3UzYZeSns2sVvfuaUxFKr5dpi4Dv3xadui7",
  "key6": "5CLsgBvwmYDokdaD1tnveJ5jcwY4j1t3kiPVuRZiPtdubQrmG2Ruqd3UwFnHaFyPuzv17FoUwYcTkxkocBLdHW2P",
  "key7": "3FFoh72LRpmv2xvseSem5SJzDshF4fdiBMWFBFSQtJcxSSMzbeMxL1xaTMG1SehrLfRoQt3Snoz5Pm6T4QU4oeEC",
  "key8": "3Yn4YRDGi7ukdas78mWucVV5CgH1odE9hzEGHcX2YDX75NHbefL2gwEYnPgjnoCfW2p5MTTUpMJqKSmehjYJwsZK",
  "key9": "3GVp4RE1VkkwJrca9x87YcwtXaJdjyqDbFMG1ZExRnVsj6eEfW4Piqq9LCeLrd2kS9fW8m5hMdJJxHwAepYkvYEg",
  "key10": "4uhkffF9QcXdM6HrumEaKTQTMvAEhnQQSTj3yCJq8kZshZqPfvw64sMs5mnfJNNgd8Fvc7FaZt2PsJB7jcJfXeeM",
  "key11": "3ddtMRLUwSXBMjEjgvenqvrWZXzj5F1MKXgHJ2xAJJPbyqckPsjGDu9iFUmF7abQnuj92vGbvKEkfBxYoCUDxaoQ",
  "key12": "319SnDY52y3aRdDjNvndoUwq7a1g5HXekPkh41VPwV9Vmv5VPufW5Pz1Gq4fxZbTuz3dPfHYqwrQAsfmwQ56g4JK",
  "key13": "3i3tV8pZ68T1jd5X7kW7Ue3NgXPaMj99uVZ3atDDez2hiRLHFqMrvw1Nz4xMrTUs7BHVLSkgUZKWK1rbEZFsrob2",
  "key14": "NyaqCXh7kFChrY2Ao8fK6yRtJdcNV5CYqLEs9oCn7KcWQNsNSRWUEYW8BtWBUVrxyrncuJiMDnCVk7pbArbFdiy",
  "key15": "dQdj6fdgaU9k5VAqoD9aWdTneiySDtLiboqJztTyJ6XiiYEWR7nd6c695H8M7UbsHDWKxD3zLeLphBmm9E8w2kF",
  "key16": "5aS5wNTbm9ridhCA9GBNzJFWeUKRtfNF7WBziRmAPdPdWda9CKkh5LWtmcdjdUFeUHkYtj6E9npJMZhszhph6ERQ",
  "key17": "4gL3q5K4CQCPmGAYR3Fiuuw51uscsr2FWVrHjTAU7iWoyJB7DaBBrok3bJdPTPC3XBTWA6FUzw52T1865YZJ28CR",
  "key18": "2xdS7jxVmgewzVJtQfvT3FMdwfENtofhxyZzkCjvigFRmVZNSDeoFjVRebBHEQh7hMnT5MnDNjnFXBvQos5UWWFs",
  "key19": "NKETbn4WFoBvXMX6cx77mBqVH8mXYCWJzqXGrhJvvjrRy9Ti4wmp5BppiG94u3WKKbhUAi8cjZspJpK3E94fZhr",
  "key20": "4jrogjKzieonrwz7xC13dzi3tBvCHrEovtujW14UwKESpNaoXmjwpLwStSAdnwFUoLjXVABcJVpo9QKisEBD5Pq9",
  "key21": "5ySpJHmV7fe93TCMYUQ8Fhs62hMzYMo7hx21zQ1bDkZaLHBuArCFeEccCPWHcVyP7YFkgCrG611Hzyk76mht81kD",
  "key22": "2CHvV8CEQ3KkPFFs5pmuo3rkHFZ1qdEuTakdU3AiRWpoaRkLNGvBMBcw4QvwsTRXfE1UMQmMgBYERkfc79eaPz7G",
  "key23": "5nYegJnL1XCVFSFe5JXtJfGwfkna6buLi4DUAhncpq8d9NGnTqoPX2waGVnUZgSoWdFzYybKPe5pRE5GZCGciWUt",
  "key24": "5KTL2jRm4QfBQNhdLyWBGhGvFpoNaRY2peNpkDBHmcgbGhuGWvyUdQMJ6keVeqiqtYX9pQvEi3xgbgJgCXxQfXuf",
  "key25": "4jh7mSCN4GTVHhVFT4gRshkZ3kecrYz24oRoUGavW9TD9fvfhc4eVdfV6Mib6cfZEqXU21vCn4Z7ELh9kuUYxR9P",
  "key26": "5joTcwR7q7ijR1cRy4a7hT17EoS1ViLc6Wqkrm3czKK9B37CaCtvCsz5FcE9xnnP3cuZWo1c2iJ35FkG5uotKAUB",
  "key27": "64yuzC5h41vPActNM7gbj69oVZyN6YWZCWWgzUBrN7zwTTL8ozdzoQrPZ8tetG9rrhEhd1hSiuDVQupxbVaA2CwS",
  "key28": "UcSCkyF94wcp12nNa23vvTfESKGJUDqnSgrCCMxEgv1jQcgJjUDhRSATMQaprUaG92UtDmg9W5gKhckfoHMiUd5",
  "key29": "57gCMkpZ7phXFnhSG4kvf26UnouasQfwzPhwhbrBfL64exU7ZwgGQzJnrMqVjvqYBPuDphp2p3jSZ1aXZZeD72e5",
  "key30": "2k1YDQpcvayw2PNb4ac3QomweVwxbVcPiSGLYSG7MoRXArhbwmnhqL6m3a3TX8HV11eoBnbt9SZJxZrGV7zQ5Qe6",
  "key31": "96s9Zg2GDN5wusR6vtQ8ih2J9XSrfb1S7XGxvxXePYhsWjHQN7tZ8pQn5htRCqQ3GLbdRd6oz1SifiXgCZXNpqn",
  "key32": "gQkThEr94shWSASebjReawXki1kk5i7Ufo6R9Tys2jsp8MWmGuMCfViLmqcxBYxtNrVdeHGiNRctFhPGtYiHiR1",
  "key33": "nYPgmPW4EGocAQayMPgEz235tAzWZXSisAs4qkbFBWQPwmtycsjhxvJ9ApPSB9LggBw4PyHRRrpNKefvL7EF4jY",
  "key34": "3DkPo5x6oyk77s5KD99rBrw2RprL2UhusYrvAinNVzNUMK2gWuw1HZ4gDzPurTtM9YmvWWSM4bJjCjsEk9YwjBYX",
  "key35": "4BRhxD1xC6mev5NMsDWeZER8jMvDiYE4TkwmmN9WZtooN3obDyG26skzWzmuLc9rwLdZBYRYQwWeSiFVGjDgxGtH",
  "key36": "2EdHREMSZgRRK2xQn4Vu1qrninaAxoSigaV9touGaAZn1xTkXQ8BVDhbFu1qu3ybsCv6a7UTiVTydXYprCYKYrCT",
  "key37": "5x67egLKm7N1X14hNN6QQf4LaKYoMDxhUvnb8946Ym3BGZdfTwguEywN1yBviLbeFEF3TbtsNT9Ci4HyeCYqKNw9",
  "key38": "2R24nHZSYzcDb1mZRDJShEMvs9Ng1uSUTEcUdbpSbpdC3XriAaZv8Zo6kMMwAxxPF3YGiJHMySdsUyLrCApm9QV1",
  "key39": "5X5npBnzhXje227XyxhvcqQCGK9TMnHoPwA5cajfG55KRMkiNDAVzizC99mDY2ydRwGPkmphe7LEgmwJPdAeahq3"
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
