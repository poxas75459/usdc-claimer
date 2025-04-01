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
    "u29BT4fUYq4RAv1HC46aJxyoc67zEJTMYhStygjf5SmNt8JTFfwZRSBs7vZP9jA9i65TbW9gpnRanH534y538qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUPvEGiBYPHCdTCGbkZCj2Mg3uMdMdoUsh9dKj7cxizy6PkbcEX8Mc5bMbFzinSTCKaftq7uwdDMykVzJztDZsS",
  "key1": "2QZwJfSuFfwHfQfpGdzPBKQeMnQHCxungChimRhLgaT6SqqzLb5g7UXJ1zuRPhFnD4zU6WWca9WkbqR2oZxMaMkV",
  "key2": "Y9REm123DL83QtmFTQRMQQDBnMSqbM7hKHdNbFQxm3r5sh6iSKkTrs7ZfgZC6AWn4qMSuKzaQwPkCNUkAkJNdgb",
  "key3": "59N947smFRLTGjqXmESNxovRygyJHcZcye6TwH756wJo8kjDT8JYcpSrmB69VwKFdpC9BFH2LKHtSo9akWcgntzd",
  "key4": "2LTaRp87A27xZvhoq4rnUQmbxmkF9xpd8EEMhKgLaHvhG5WFcQYfGoYH7N9QAM4JHnjmeKHY8yYBhNe2a9bRWRtx",
  "key5": "4pTqTCtSHeFXnG9YxKCgYrcxAVp7F36UZBefZCu8b6VVX5ALvzRsafoQuDNfzvUj3VRNfUusigmcRPGUEizqBimV",
  "key6": "2HvEUp7T5f4asuv5A1hKeh87fEnKCQKMjwmW9Hw3bpPPEwt4sRsb3qnQhVpLn4jg5ZyjZSEfwaWCnZMoi8MKmb5v",
  "key7": "4N6NS7jBkpA7sb4QVKcWqjEi8S2mKi1t8R7Rjj3kEEqRQ8LdmXDUioJGKigpyPEoCfzNMCJNs512JpDsRhpy8B3d",
  "key8": "36iJjWAgXEJZFwg2Sj3N7qMgPAWHHvuT7xBBGaZDiQK357Zkepn3mZbKs2wNzddG3wBWEYTamJCoci9GzTEwkgHU",
  "key9": "4zKonmkzoK1azFHsVNsYf1aHErpAVabDVw4chnjviySrLmQGcrPqfbFWvzMHf3B36rxwVmbJ6QfnqFcWRFsQo25f",
  "key10": "4LwVHvxFucVU8ZWbPphV8FHXVcTr6NuhPV5GBKVK9zeXSrwEVuPzC9pzGtyCkyn9RWeNimhULtbL1k9Q6SaWaWj8",
  "key11": "5F5FFsnTp8j1DQJSk3yrVBkqyBwK58hGR7avffZsuuAuX5cJQZvb8LxiYaq3RE5kv2t9cp4CN8oXRRa91wGmGKLM",
  "key12": "4ncZDrhs3nQfA4iVa63NF1zQBGt1ABsetsyoaSXzUW2NWRLaesikC6zDU8Etm67FL5mkWdJAzkUem5TW9SVJhYaW",
  "key13": "BEuQY2PE9qzTAJjHeKUBpnqXFoL5X942UXbaauwAGsDK8ZJxiTzKtwFtKHaJNsab2mpnyFwMxZXVGK79SJpJk98",
  "key14": "4ZSjPXU5egQf3YPyhUAAvD2H9F1CJb5Yrd8eXm2jhUXYM2kmaSLbqg6ZDx53P7kR5c9HzDFJ1FoPXBviYbAdZ42E",
  "key15": "3RCFhwp5ebhbSNXX3ncLh5h99UQ5ofASw5EYw9SgteVXZcsdvfAtX3xpFDddPQcjsJeK5FHbJx4ZhDEwkMyWofdN",
  "key16": "2hWXb738icpky4fxQMhgqUMPFjK3bX7B81tdWToPkzHn2CaxMAaXjouL1EaHKrCZ56tor6j5XP4LEmsYvofan46C",
  "key17": "4eFZX1FX3BsN54NohEPkQMkan9X6fmZE7NaERDd7fQzchUGPNZ24SQLR2k9XbQJ5UGQiB6Sb8XMTPJX3XoyoXjAc",
  "key18": "5w8SZTBK398uw3Cf1qNp9Mv9rE9AyMj2ckZ9cbWHhy75VfUM4SFYndA46TDDWLFwgMicXraxNrsNwPVAq7QBE51y",
  "key19": "4fDzCwAF79ZPRWk4zoJk7SuFTnXoYkAFsPgMtN2YZs7LMKb1j1K1yqozT2Jm5zzJnAKAQ5yKZFMMbfXEFa7GLTwF",
  "key20": "YkhKAQZhmU2pLANRVkrDZkc9wNu87JjnSC82zWu1dXZhxEhNGBh6D5oMjduULYhwpLqD4dk9kbUQkqyGQzLmuSm",
  "key21": "FUJ3d6rT7KXdXET7eZURKb15iFr7Buf7sk5DXNXD1Q3HdrwaqhPgXXBVGFxdk8YJ4H3rM1G1sW7z4j2ytJ4m4hg",
  "key22": "3e1nrH7mQpawwwLC2FYFPm544FoMH1TukrciUELUDBst7MYFvkTnh27dHspSre9bKHgVP8WjZReUrngfTfCks2RA",
  "key23": "41im8g4mN8XrX8dN8Ve8FtmvdC9V45YveLe67Mkw9K2Uu7KcuAZZZAjis3vwqJ4vnCnLBncwLZxYQK9ubbq2VFDR",
  "key24": "3hfPq4q7rquMgdoJnUnEESuCRHLXijPBPSqfvQA6fm8HeVLgyUJSpfGH2MY7jjbVK3HjXnQDqaZaMqZQ6hxqKhvX",
  "key25": "5EiQBfc972MtxEU8vyHQMiiwZ8dwSWuXB5Z4Scyt2ps6rCX2mYYwVvBufDyymMsmgZF9pkZFCrEwjN3SbSusJR2A",
  "key26": "2sTmfrEuSvtMaY1Vs6pivqgkgHHoVeE35UQFB58JjNtSv6ysQYvvkgVkyzKNYpsmuvHrrSYnh3jVB952V4t4YMLz",
  "key27": "2ex1nfDH9C97A6ZpRGm1h5g7VG57wiVki1hh2dost7ebYswyTMY4QS3sWnqrM4SjaTTncfSNffUGf3pkQbZH7T5P",
  "key28": "37uJqC1V8CvQeomcuFzpifHrTL918Tt1gM6UGKDibQkNUVikbo326pNXcrUXQifike54KJ7oKiJkC92VFU2NNoRx",
  "key29": "2XxA7NzYAHCLjG6zwPmwCpMF7fQVwNeMXCZJ37DCQQGA2v87ZA8kr765H2Sy7Zsk6phjFKyVALH8qvUeLjdUmnfU",
  "key30": "3gTnEFozwtiABKfTDbvBnndH37gMpVQxFndnHxWvyAiGf1WcaDuvV7p6WjdUSQV6Y5R9PoewPbg1nFhaw8dJ4UpJ",
  "key31": "46CNwxKqRzmFfWuxGnfbkh2LueVZM5Y6uR8W79R2nqaZ8fQQJEx5wXx1mnPLwwWtgds2qyPCnb4CYwvD1QR1Gnzu",
  "key32": "47CCeb9R9CsC8L34kzvb64yaWEFAtbk9DAUZuxMLhsCJQhabVe2BM17ATY2xCdrkzu37j31sQSCvmTx234DwtA5z",
  "key33": "62TQbuE3GuFEuTm9JcQo8nHLznAAdAYreQaJgUJoizNb4EUAVEHtHHE3NNxnnA2N6GVKkAzt5B4q71yj3tWN1Abo",
  "key34": "Jy9KYwm6TaXzp5np5S7neiXVMurmjsGJDiX6A2wHDNKifGKrMMDzWGFfvkCdi13xi7evQ9y9v3xVsUgZFjb1T2s"
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
