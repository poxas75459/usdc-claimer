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
    "3UWnvvSmC3FX9hphK924v8oxGrBgpLyd3wH9Txe6zRTwPc2pCGN7kUmPFceJ1tayk6AmkBHugcRGiVy1FsxFJLfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msE62HhQfazeHp88affj5rCy5Mvo2N9REnx4SiXCS4u5GCd788Q8vqKjsqwG53Hu6KEKSfcanh5Q8tmrruy2ye1",
  "key1": "4QXFXQNHGfWgtT6N4K7K7osebuwSezNW7ZRPei7K8sfaqbcMDi6tNoeuQmqM4DwdHUVkMdXickqC2hEAZXzjaWfp",
  "key2": "Ko25u95qNnafwN32usoFNr1fjEbhax9zggYgJ7EFE8Hi9nj4b6P2cg4dgpWpDGgttgc111ryaoFsz88YptENZ4M",
  "key3": "55LftAzoD6NvLsyWUjAiNnzirqEuC2yqZZMnjFMeyZRjZ1L3d1VwiJWNUvoKEWsdwLh4LyJMj5gcnrg5ygpDpCtS",
  "key4": "4HmDwAowkAdqGKSokFipakzrys8SWo26LUN49hRz495FAFCa3xMP7pUWXmCTxv5KmcNXyS8Ks6qhjhVXfmUtwWm2",
  "key5": "uEPsdzKr9nvy5LAnirvcEMneXCJykAXvYw5x5CuXsv7cLAbx16tWK2qjkTAu3RnRVg2kFg6rivLmatNbtf8bmXx",
  "key6": "2AsSJYjb7RSJsF428oHNMRgqYMD3RfxJMerp25nyRRqR68DMVb9spkahNKQHAnjwm6agwku6i3yprbBmCgo35hAF",
  "key7": "QFCC6C2hAi5eKmNQUqjbn4dKVrWyJvDqqMx47GqrzvGPzNDyKUcp3EaW5oCjZfCbuBY9WTY6bjwg5NAtKPTFa8k",
  "key8": "4ZfCouHeLUXLqUEwBWgJ3Fn55z6koLrGQd4UGuyw66YThbcND2R67EQS9VVkzd1PXeugAAHPujU46stQS765NYkX",
  "key9": "5yNmbtD7c2a2mp8Q5FVsVNpMyvfc9DsbGUnLRLNBmoXQuo58V7DAB8aeBEaBhxL3uQc3HGvnt5oY4X5ptSi48SU",
  "key10": "3PkA4aKDLqCYafug5ijJBzCxriCTAAPQUR5dxQo3nbf6pyn1QxtFENmh8u1SUbiibboKvPv6ZVucndJTs9TsAdNh",
  "key11": "2BhW3uyD4soh2vY4TsGqzdn3PywJm8GasK5cNx478DAaPDNVSqdbcQHBkeKLgURsHrkhGMW8CcumcvAnKQMearXE",
  "key12": "3uYwteDzkdvyv9YJFdAZchJsK8yyCm7jFobh8EGAkMv8qZNw1hrNBmvJ6ZpAhXJ7F5P5kkUyk4o8ENR5ypX717Rs",
  "key13": "5uYQbGP3v4RghQkJfQYhrA5nRPV3oc9axxmXY8AodsEGEZWmnaBGLHWqiGSzyuHBeYjL5Q3EBbPeBckpTkqmjCMx",
  "key14": "2Hnx4uMS7W7wSdyZT7PRAvk4J2tboDVFKYghyY2ctWc8oaXeGLAyxSuSoHdV4Abiq6XqrtzmQzb1CgBUPMZNmexK",
  "key15": "ahK1icNZLYGJAaXLufQWmFZRFFtCv39MFQDjNh3esSREhXZCTJjgc9t1NocwZjmpiZcC6qfDY8ifWvLVkiMcNcY",
  "key16": "4A91AyJvreJYPBdvR325bb14G5MFkufVVmEUHFQEKEejUE5SwhfmTj3xsoBWwJHW5iyavnTMdRFUV6CJXLUHVnzo",
  "key17": "21CiVdZ4rLXEsJuzKA6d7cN4sgK18SdZ9MW81ypbQe6aEPoDRXHA5RRUPf472oPrPQgFdGMVx72c6jbQkLBcHmz9",
  "key18": "5UbZq4zhWXA1rttt5TBY3aJSuWMWMJ2o7SmjzeVHGoAdj3pNDqywahg87DqH9xnsfMRQxiDyeyotDX83XbBC6mBJ",
  "key19": "2dAgxeFycNLc2hReB9eSmuCFiBz9YQvYNfDXoAXEKgZY85KmEwEEp3QhDdYyZPtBn5SnuyTh5Uf2FruwoiKcdjmk",
  "key20": "DyAf6rZ7fjux25Zw2J8nhcN1wxv7erAaMMBtrE681U275S91HMfqFciJzxCVx86L5R6cQ84uY8ofwUckSy4aTyz",
  "key21": "2RrfCcNx7AFknTTXNWTzs66vXJdGqeLVxFURDynN1HCXTLME6UHUb961hjqnqSMSGtYCfnTpd7Du7iHRSDuRXpi7",
  "key22": "EpuLQ66zY8aWmiCpKwkRS5Q7yx9FBbXEfGrUCFMG8Ued4ofJbzRVyoftNmUmg6CXjU8M7gRFxpCJDmDkz9VczS7",
  "key23": "2ruViWW62Kpat2VjKeNmj5ZokkxsqqZQkctU7LnuuyKDEBBEm6jHRTJFmB1BnjULB1qjSjfT3wQzEPFP6G8KQbog",
  "key24": "298PCmZPnk4dukQ99K8sxKK6HSXvf1EUaQotwoFRo1zMeZRGUxKCppwzWzs8X6hX1oEQBnaHK72nhuvfVoKXiXgk",
  "key25": "5JR9iqR6gvNUntC3tSqdETEb8Hww27dDuxoKW6ajED1DgwAUKWnfmGsTAYbiiF35YnbmB5g21jfRWih1p8h62gBL",
  "key26": "64LjeiYA3xJ2eaBv5PooRUknSrWTAgJSkgXzzQgpdZJjjygjXWPkTMUnRULY7itptSTAADLtuhp5DiNk3gaV5NH2",
  "key27": "24QYBqsDKyQAPcy6NY1A3WRG5G8maMSVKjRAMGUQ1rsegJbA2SHDufF7pVqp1FDzZ8xTVUikfHm2c7k4dicz8LG5",
  "key28": "hxfgYJEqnyqekJgFRxMVhbEL4t3cqzgVw5pzAjj1Nsg8CHc27dZLT24jW1bd4wgH3mZcM3RGnMrgVcqkWfFQxSB",
  "key29": "5piSsokemri2PRitzeKUywX8KPTxo2ZPtrUQQeYsUQkoGXWwuGpJxe3iyB4TnuAaatS3ztErqggBVLWKDtSzQ9r9"
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
