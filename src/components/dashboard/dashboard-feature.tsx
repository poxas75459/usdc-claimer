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
    "4inREe4tgqW9zrEZgDQiYAbsaREykYdzAbVp7XKXTTEE3NQ9Q6ZSouRxTwPwYTTnfqsqj3cxBhiVozAZp8pmjoKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5oqmaSDDpNLbKv3VNiRRW23DLKeDjWa2TbCTTCxQTT2kSMaNSbUprK8BzKVRQn4kFdN8HM3y7UD6CMZM8wLFNY",
  "key1": "xJtmF2fp2a8kpuAX92jowTFBicvMTpm7THEz1dcQmTER5uQ2XkZuzQMdo3eXHZLAQmr9dz3Rzhh6EpGRgNVbNdC",
  "key2": "eZ56H5ND7XgVWjZ5fMw9j9ky9EjTqd8KeDJ6mo5SXWWAZhxEKi9Anyrkt3PVKhHSxQNx271VQ4YhDE2H2G3z2xj",
  "key3": "22RdeN1pdB7NogCJJWNucE4EbSp9qZYGhTeH5LkdHVWcFo2Jn9tNxJ9wnhL2YqnV6yF9fauTPEKRDem8JxeL4LH8",
  "key4": "2QfBFpysFEcpUr8nVDefjZNRSMAMXnLR8yTrnGawhYZyyRP21a7yQmX759j8pRay1ehGh6M9uNQgX1U2x3SBe9z2",
  "key5": "QnDKEBqjop8FRtSrTaba9UeGViMJZNeh9ZLnG2U1K3aZgM7F6egK8RyQE4gWCzbAWynJTuidHB2JvZjNZvjBLNY",
  "key6": "F1114AQxabjUVwkXJqbWKy7UDxAQbtmoMxNgstGyoagJnBDwidjEWR3qXmFqjAjeoZCfbJhyEn9s5RNzQ8vzgby",
  "key7": "48jgHjCmLTVEadzp2rAmPCm2T1ZCrfpN8X7NNLQeUJWeD9iCPZZvjHqLTAnu6UHQks5TdHbLhno2QcAe53hWf1iq",
  "key8": "3q5cAGfj58hzvHBr7taTeZ4uzryFpn9dmEnBy37BGRiSVnP3JTsSXhzzRYsauNm11AnY7dvxDUVoYcS7o5YWJvN7",
  "key9": "3FzRzagpPG7b98WDwfYGdhpdXnTUaehs4JrxPk1pKuCjabhnAFus36ZPbR9tg9GDVLqEdkrrA29QJ4hm9672uJUK",
  "key10": "5bzT374yCE6uJY4UFivUXAXdhftkFpEwqex7v6S68ZWSB5xFNUsPnfaQYq285ALApFPfqwrGJES5MYzYFqH1PRkz",
  "key11": "9DPEHghHakYa9mzqQedAwDiQ5qMnybTf3od4n264o7Z7USaLkU26M2w33ttZvFmzQcUSunopMdKABdMB4U5iFfd",
  "key12": "4CwTg1bFHPK5cdPBUiYndRe9gcnBUuspyxvK15ZvgnqCD8sMSFN7Y7TafTC9hUpEkL3zn8injqN1Hyqhtu37u1Na",
  "key13": "5KHswdPmHosQQVZEWgm6GHmHjYkToGhURtX8ebnDmEjiVM7jyzxfNUMKF28v9M3aF6T2svsfZGa2ULUgriXvAmrB",
  "key14": "5DWZL8W7f13MToaVTGPeRhqmPKSBMM2UbcukLgQznrhqbke1aSzgMUAaJBRqdkVP8NWx5M89nqgJKndhq5iRX2C3",
  "key15": "3DDkUhUFJBhcpdrUDePEF9DLHiN1VQDGwvRKCCeM2ffYWoYDEr9uYbUL94hL1RuqSBXYj1ZDaVhFNef37PFDzSHe",
  "key16": "5rVciNSHPX9aSBE9h3ywChbg2Rb4XNrpgTFYemUzXfJaea8txeRu8ih3nbv17cGrwMKA3asrL2KMT38ZjV7adRds",
  "key17": "41GqhFnhPB9bDQmEWSh5vzNyEPWwcE3iM9SPvTpkWLxee9j3xwPkWcPbPmPN7uGk2V6UD2UShMhPQdG6GVRXcV1C",
  "key18": "Es6pEbsKkzJ9bpiWdbDKsMoHCiSVA7sjB3cWFCawcttU3RkQNAwKUoMBhTBjpMaPDwuy9Fs9fcnbftPce1xdW5i",
  "key19": "2YChsHY6jXaCGbPCpErssvF8BHgc9BuNbDC5N9BjJWq3czhyd2nGWQ4nFgjUpMeCDgLmgSXX3FnmbtnVe1nareEX",
  "key20": "5jZzk4Nup8qQ4vdnFtpoNegEgHug6ZKjHATiyCKo4tVMzMx2Fmt4XmrBWJ8kYWCfBF7ePSYDBFNUT2gxs6mthJij",
  "key21": "zjkgEWAcHMPZW4KRjVpCGRA53UUkKqyvB4K3CwFFx8duHQ2wdCzQzPHcQhMNXSpKfF69miQUTGGKhDuHWiTEUaM",
  "key22": "uh3ZcnbZovfAU3KEqCNCxonkWUvH6jRUtKfNXT25bqMPnTShYFqrpXyMjoDU6KS24JxAg3AqLBGAz7JjCp6RVu3",
  "key23": "4BDWwsXjm9TcodsQibW9vYNBZj2RgH823d6X9yZrYvx8S64QiZCQiPoPQi5zf23gdC6QSa2TsrPiBfTWVumMDvQo",
  "key24": "4XGWfsbZB7W9xZB8J6TaBCrxWew48QeYGkACY6WjqwaEqb1a1vxEcpsmpNX38xkbY4MRkN3ZgX7HFPtiEjyJoWaX",
  "key25": "4k3EzUTyi4XAufVoo1JKBfwaCeL3sWyLpvn23yaaS4dpiJtarfYsZ3ogyFo4ZpLqDim9huVLjHvU233beTyqdvCq",
  "key26": "2xeVppR6d78iBEBX45cfa5ZstBpKsxQXJnzMCWsjnLW8N7Gm222r7T3G2qGR1DMGDVUdwjEMt43V1p533nnq6RAS",
  "key27": "7iL9fCFewfEhF6NV4daVLM1kCUU7773agSZWuh9aSjyLRrAUeSNN3xv2MmoY6hNyVTYsosKLZR1M2gK5WBRRfxR",
  "key28": "yc5pKQYPPC4pL1fxMULoFdGp3VjnjUBd6izC8h9eTFBM9Kts4xHuZuZ96aGUVCYzGxuXd4NMHgCL6ksYbbA5fDH",
  "key29": "2Petn4vHhPzBqSvkDQdnsjqsV2inmyCkQ4pyEM1tMZMxDaEuQ1bHH35bPt4cByg9iFCTNXsPqsKKUtKkLxawtbvf",
  "key30": "3h4yhy3BkkWYdWmMomPU8oLTCqFK3rVgWFQY6sYF4v3CxYYnmhpADnV3Dkcy9ssyQr7UHh8aKfNdUugUXw9fZ3on",
  "key31": "2VURJiQuqvrNrpBCQgxNtyqJnKKwytoHDJAzRF3vjQjPUKEHXik66zPCB8iGCMB93u2XUwUNaEMoYKUcDUoTUBvr",
  "key32": "2Q7GNuZSMJFonYXZeefqmYTHTgBKBn8TgLJVTZnGLzixYhkksN9m4fEw4HB2XKkTdzpjGb7W5YcJPdVdTDMzkFvi",
  "key33": "4TTs1aydeNm4GoyroJqAvQhfJ6JhDp9AfHXJm6sAV6dDyymoTqWa2NM1agkFcRxwz8Ac2aQHVUtXayKfiEPHEDiM",
  "key34": "2jkLtNEfeKN4kAzmcxEDrpmCkYM5vgxX7Lt21L9nm86hBnBwG8sSng74BTigq3CpqmanQrkhN15ERKsLnfaph5mG",
  "key35": "4hMebRyuoKEHCxg8rRtJ5L3KK3sAh34JrwMw6uMMtKHLXGF1uVFRPmvZPjjenaCRLY5u2rBLFDD7mbq87hEsozp3",
  "key36": "2bUaWiic7FfYajvhQFNgFSeV4Geu6DgjYezXXYhJVRopoizHtiG85r3TSqj9PiTNTJPqqpoTmVffnri19EZooBpy",
  "key37": "UFpmKtEXDUxfBawTWj7ehV6rrFVjMq2uwoao3Twcuco8MF4uG2fJVoLov5zjVGKDfgt9nPdM1Xy7JrATaWdRJTp",
  "key38": "66T1dVwrDMvr8u1NsvCWvX9V7qjJtr7duXEib2VmkBYy3pBQmMoufTuxtA8VnFu7WFESC3ZQGCkxjG3x2aiUgBMp",
  "key39": "3BwPah5FHnZbC3CknZ2dyiUUyzzma8HqJjLM17ovDSVsraxxH9ZRB5CAgsXkryaccu9R4nNPw1pADW61vxAJw2qr"
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
