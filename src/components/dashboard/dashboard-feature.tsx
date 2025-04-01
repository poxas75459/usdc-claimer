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
    "vnD6aWTYX84a67Le7eGS94ie8SC4fzF8g5JRcG4UBg26ceVczGVtQiA17fPwKi1HQUqRbF1b8hpQGVTwdH5QV86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLQRHNcJtaYUgrncU4QioUnKbzMaWrfRNd2TTB6MdiCXK7Mvnhan9v6566xHPbLYAKQw1EZMT3qKL7j3YfuTD2h",
  "key1": "3Q1KJWtPGCYLbFPkVYr5EX3mn53sJmsLn2QgMGePaYt65d22MzUCbnTQrSKDJXkLRzNtrL7PGze3d2iFL3jpziGP",
  "key2": "2UtX8nsE18k6Uux9HAwi5QqaSk3Cxomggj3TwGeWfDdwzzgPtNMrsr28XKxhfTjGwLRAPi8FNW22F2m6GwXU8G22",
  "key3": "4yyBTXpGrrE9WQA296kCU8YgSmHXkz58JUSgsdj5aECvyuJvkWFvCbfhVw5X3oVMEUu2WjBXepLZ8SVJHy4ytZZ3",
  "key4": "3evVVpUeEyFajF4veCUh4Y3MqVD3BVeWCXs7TE3yo1UDoKCrAN44HX7nXr4i3QzmKhDadksa4QxXymVYkAd9LTCK",
  "key5": "42AozRuDWDUbjEALmAknwyy7YsmZbMrMiJq9JYm29QnSkXmhrLuD8vumDaj3Hz5SWXRNFKPX3UcmzEtLK41KULuR",
  "key6": "4HB3hdMznHswyQfwTKK55XEw7jyo7wU7Gwv2Tu3d8RyVncyNadh428HaCJ7DoAWQLFP7K15m4StATb5tJFKRcprS",
  "key7": "TMim2b4XNLVZGVAsPg8i4R8q4qjZ8c5AsPsYh3Ng8UaxijP9AFgRHFK8i1iYVY64MmPChVapKDgc1Q4P5qp8ea7",
  "key8": "3mxKWAa2SuDa94CjAyTREuWFERA92TgALD4z4pM6CfFzmrqmCc1e27XWnLQty2PRfgKvy183x9kD6xctQEWTfBBS",
  "key9": "2XMgvWYQKpgMseUEWw1r4Yzvb5dmzGdVRdNTTWjMLWZnLKB9WWLbex65CZ6Mq4x8PS5G9gU8xokPmWU4g3wHvWNk",
  "key10": "2QD6ZpaK3cNfx3xDyogPVB3TuSfbsriLNHJKnBYXANB9ePMwok7YUC57RdcZGrVsChRhPC1tw5L5megDTZS7fsKZ",
  "key11": "pghdbwfYm4P1CZfkZ1EvS2333kM9JCbZbz1SSsRJdRKfPJrmrbrWDEqqRypoC3LZtPnqiGWmC6WzxaHJPpMTUhx",
  "key12": "38zvkDRx8VrZTNRhNGf1yEkNbTy5AUx9HJgQEDHkGCoZXhvoqgDdEisA7SgeFucfseH31Cy8Pb3TUzpJd3KdkvnQ",
  "key13": "F7qiEoAAyiPSwjrmkx1aTUK7Z1hhaaiGhdUqroUbycCCfvnpix5vZ1du7goCECFNaXsKj49yEnZ7HhN7GTVKgY4",
  "key14": "2CDGT1Qv86zWrkircxxX1tYXTn1tUK1C6udVcjSWkLnfq8Uw9EiiFFwo2DqQJmeWSozxYauk72pxszP6v9oYUTxo",
  "key15": "4JRNxdSHUzZ8QmzWziALt5hbMXtRBUSHeGdHwJSRVE523FmYn7uJ6opUSPEWx8AMZenUk75U9UKXqAU5wnGbqfet",
  "key16": "5z4pUPcXMvaCriWBFNvKMYCQyQwJDZkjaoMNuNuC2DtfVXX7Lii71XMfWgN7NSGrGi6dGPpSoNLvrm6KM8XHAkqn",
  "key17": "2VXExVHE3uoBXE7EEgB95ws4udwxofdDBPR7r5wGMYYD84RTVzkH5ctNWdrosTKUraMeCjPoeqZPdcjNoBS96uGh",
  "key18": "2Bh4Xwovnbx51BR3ui1kHZJ4DipGHGQRbaGZgBoqKu6SNNq6fEWGYCipWbE2kSHQP2W7LDFTiAXVzY2LU6bUpX8K",
  "key19": "3tVHX5dbUpE5YPtWYoZYUinLmZP13mAtX3ndQm7Zps5RjWJkHFpXm4qJkvvDgsCrvSZUMaddVhjRWFPcYMjtsChE",
  "key20": "3hcqXdcGYetJbWcuPPVVS98KYg4eUjjCTrkDnC2uqj5F8e558UyH6oQT7UtrEh3PCfznc7aQm8JUo86j3hgaxJZp",
  "key21": "UgUJGK3ufiF5KK1ebwEYBXSJYffyYSuPXWcm6a4maH9BqRSa4FVPuuqd869zf4FJ5WDCFWZ5NaW1Pbmg2mj7hk8",
  "key22": "1Ci1VrXQ2Gdueos873QL5MHpaS9qExHLZ7TAvxXafiTZcwoo4DWr5svqBuBvEtnkU4qGvSn4hADN244ex5vBt4d",
  "key23": "Qup4Hcp9GHZtQVh5XSDs9qA19nEvLsuWaCnzHYPbqt79h7wHBJ3NmSfmBRY3w23WmRGwif8sWfZXRJYsvDk6pEm",
  "key24": "5WYBcnCCzjRYPt9K8VYy8y3KnjziPCmMpYr8JRBWYvWENc1GQYXqtyqBB4NgXeivGJaYQGG8HgiYZE7mof4CvwXn",
  "key25": "3eudrn8EaMhBxWEtqg3YxmFCRKRQbzZar8h5zhknePy1TaEUiC9DrXoEuLDGjx7WEHte7ektQ96Cf5T8wLPr2CT3",
  "key26": "2tPkNREQnfzgsNzqc676Ldocrc9Dr3VC8z1eaSSDj7k7TekPsZLTT4QzybKScBJAcDgfmDpGcrYBQu2wmDPsEmcE",
  "key27": "2nV3Knv2dCjko54tp1mP2UttDRPs4sJ5ACv555NCa3pYtrz7yuZRcQ3z79siDmzrSYGAf3ru2Pi9gUm3i5qzzxNG",
  "key28": "4vZeNsceh7iBmH3pxqq84fMB4cjnssELb6JBQTKZLsA1NyfpsQQeVbfY64XRpRLxcp29re4iQEqwVyQihMNoS8JV",
  "key29": "4UZvCQMXB1zGKRn2a4RDwtpetR8UNnLgzT93kebRRQ1YR4ngQJ2qyVph39112FNZPcC1U5cREZP79R2GU9r7he87",
  "key30": "2yipghg3jebt7kskZqRGkHHZASkS27PSyRH9zSmTGBN3CvxQWzo4qaB4uauiSTXFNuFdWZcZC6fuaQ2aYDPGbJ4J",
  "key31": "bwNEZyhkqKdXsFSy7dCKJUoTH943u4B18gWhkaQivv8biRbxy8wDf9dKxSr93C2CPF2Be8wKXtcDSJgTDcQHw8r",
  "key32": "5Jy25pDyvK5wynP6Zjw9BrUvgKLuuHcwG73UzzhoUMq3AejJZdfTdpLa5f45adYZw6SXX14cfhLK4kFoeEWM8JgY",
  "key33": "2AmFiR3kADKuoKscUVppkfQVJyL6rBFhMmmLFoJBNbux5DpcmLk25kVQC9pdm2Wbuiq23tyK4AW6wSgmjvV3JAeG",
  "key34": "2hRXMzKWxozQ7hvXBKHqY55gBLAc8NHoZSZGpjBsvZaYUg2BGfbP4hgoG46qyXMCNcAoW634bCXdu59fnDKBSXbJ",
  "key35": "4hQHC7p6FH4KhMZrCjrbsmdBbfA9F8Ub3VgyeHEQofPtcahwk4gpiy8C8ei8wT4nGkLHdUQr8evvWt2uTFU2zqVK",
  "key36": "49akfx15V5e1Eka71yeuFhz53AX6j6EJv6quLeA4tz9TsFeQdDnSumZMK7hce2chzLYVBP9QiNQFB953bE8cF9wE",
  "key37": "4qXafmP9McHveTb2tePwW3mwwKyVeQoerNLXgALwWVVSy1WYmQPpsuAmQHq1oSXaYfzxgYzpLvkAnf4k9QMAbRcf",
  "key38": "msCGk6ufycLdJuo2q28mvGAk4kmfrHusBNdGNHbR9sUpiJf4tPpq8dnnTVRnhnFooDfyRhL3wwC3Kk2ZKKtJLxV",
  "key39": "3FcNhbnGFMhkAiNw4tz9YqhyaQFWCP1sdUZpU8m3g5mfPKtYuym4X8Xbb5xUShac9KvUXYc88qW3inXZ8dLWeSGd",
  "key40": "2kLYwGpfNgeKLyZNZX1tKFkeFrAtD4sjMjXLTH9wo4MCePaQsJ4bbpS7hqETYEREsS5Gm46nD1JyoXZakfbZZJAQ",
  "key41": "mSiwdyTpo4uzTd1Cw2LQDBA5Nn1MmyNz1WM2wvXmuKbnwoj22XbGEWXFuUisXSRcdpHUDSeZ7aFxqmPjqz1dxor",
  "key42": "25xH8WgdGMfzxn63FN8mtPL1Y8dRWTJ95oHb2Mfm7K5bRH4SStn3RfSNu6NKMSpSvEpGHFCzVefAZdTfT3CjXKAQ",
  "key43": "2cBwuVrNZ4EkRmjNLqRHP1fYv6fRGz7a7tQSnbRmcL5t3rppQfSw9aXmkFTzF7RfUo11577iL15dRDq8SZzFQdKk",
  "key44": "34eW3FN7orx5TJDMCMby2eicNzMtxMGyii1bZ5h9zHVTWLricTjBysj4ih2TFJWUQ8dKa9C4wMVXduFNEE7bw6L6",
  "key45": "g13SCaqxMpLL7KAw64Fh5kznsc1EbmqQeJ1VSw4TqCBsiE4HRotUc698ZGaxDv5wWCFyLtz6rze9VPfFLwUEHc9",
  "key46": "32LddgFFucHR3D8Fip2VbBKna4gDpJYhfcwZTRaRaQdYZ9JGhzP8zb1iLy4e6eGGuRHLZDR9TyLLBjJ7AsgDkmsf",
  "key47": "cVDb3CGMpkMZFzTq5thDFUsmg7LXnqGEs2fiLr9mmEL4xu4CXyTPzZqF8Dx7EdEFW19RJBLxJxY4SPgeSMMbLxz",
  "key48": "2Y2N582MXiCMj1kjUFvFLdb3AugBrUzHRmNAmvq4Hx8KX42yyxhdJeksrQTDHuUAwXT4wmkNsaGRHGyTZ8U2MQ6G",
  "key49": "2D96fmChx2tb4pkR73yR1y3ZVxKgFAUU9w1K8yLCQ6MMYHKmceK2TPxWMXUJQwdSYxiac6gDuVSeFWeeXBJpm4Zx"
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
