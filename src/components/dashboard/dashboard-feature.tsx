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
    "37Cia53UEPYMeUcRqkGmo1J9kVS93CAJ1mEdXENjPTPzdaF2SehERKsyxWqqG4GiEzmfZ7tjJ3xtRKqDameDsFZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TQbyxQCMj74YDPyW9mKR9Y54ZSNAmSWpBKKP8TRXP3WnyZkoqFp5XkYvCcJji1BAPAvQBGupPgxujDDTCCMxUho",
  "key1": "5btBn1JqzZRNEr9nNJ2tLVVSxyVqRgZSNCF3bTwdrpCQrcEaEHzFNwYcX8SXwhMyfqH5gUbnfB1PRtk8rAj2jVGr",
  "key2": "4wUHKPvhmy87GoSriyWjriEaohzE4JWBx2BXShFHTVvewbf1K1hE5mWi5FoSQaZFskvfEx7TQrxqB9kvtsdofyCf",
  "key3": "43s272x2B6vS39Vr92kPVmunv9jQ8DMDtBnttNzBZkMBSoWTGsCSLK95R4kCt7RaVrVSkK6KbPTdyxdrTM7qbHQv",
  "key4": "3iVXYL4YFBhrBfK43dnRef68rMMEeicTSVeMCm6twPci6shzvmh9F2b6HibpdyhyL847mef6tNa9SpjTHChdw6ij",
  "key5": "37LN19jkJXUCEVm9ronesmW6DrppNVfgjt9yHm3wnZHkj1x1f72cCTw75d2jyBKxVBNLmc6j2tbZvxXyLNLGg1tc",
  "key6": "d75AKmjhLGpVg6U6WeWCwD2wYEtB4iHws6i1KeameQpR7oNupEg9Sg3zpjcZviVYXopx1N8LspAJpyud2NWWv6S",
  "key7": "5MfvdVWXQ1UsgDuKNAvC9TBUxDbCeewRhsmaEpT4qn26EDkwYuBPTCZTrAzFxpf3db1Z6DWHxSxT4JX2mbv4F5TP",
  "key8": "5qFrDEXHD7RXCgAET9HGVTkk7NZ6tEZTQeUxMeyLKN1S7UBGTMPe5R23e7NnYxmLhQi78qdbrjgN5CrzXGoTXg7S",
  "key9": "Ut9Rx14wyqoJMpUbBGbRyua1L3HjUtx5956jp8sky4f4BU5ZY7nvdjuUM8CheeU9q7R4ibUddwxxHgxQD2C5S2i",
  "key10": "orNZDLAyXqCd73rxY48Dxue7Z77gTdxupJR64AXw7WcC5CiiGcioEovBPGUMEUr5Re5xYgNUFcmNXML5V9k8y2g",
  "key11": "4RXcCHhsNyKMPGtqJnrKKXRR286cxqaNGz5cUPuD8pkrVkm8yExEaRJWSfkhGfwghtiNiuevtDAbzXDwCwpQVFrZ",
  "key12": "4hAKBgyTLBTmvxxKVtAFWn8DF9MAy7oa8YfVXDUfqYHyHSu6hWjY5NYXjqwfwCxVQhNRDQiiV8e6vXc3itbpSjgS",
  "key13": "3ZAp5MZw8PRtssH1JQRxaXAiLggxTiyyKcqxXkK83x656BwQRYoVTSUSxqaPs1bGy7MyMnD21no28Xyis8HFRCCJ",
  "key14": "4BH829onQYUdzeCNBaAnsazcn8N8QN3tthBEvzqoVszHxgVQ79YpS4LnRfbJhbguxvWKpKwj4Kws1Aeqd6Hqy26V",
  "key15": "3MVTbz59KfG3ZVe6VQtRoEpRtNTfuTPMHLhcB9aUwwzY3Qo8cKV6b5CBYoNTUDtMVBDKQYsNHJ2t51FvAXEsiFiu",
  "key16": "2RVp7BrkB9ug7Cw8svRkuSXw8p71GJnbVji75SfWKPrUNWoeGaQWGzFuBD6ZharQLJmnNtPRUcFTfeL7atZC1GxK",
  "key17": "5xK8UfGdGk1f99PdUPwa9V3DjuqzEbbf9GHmm4t2guDZR7Dz91udAJgfjfGaqy26HpDa2cGfRTCL8yQtjKhPZoZk",
  "key18": "4nETgSd7nrhZM4BtUnxEoe84HoLDh2QmMNofoXYvgEwrJRo21mcbpMVJrNu8dijRvwJTazZzPA2pARoYjSxDTNuT",
  "key19": "CyTuE4eXSXmnVZjfaN2mBaYaZFekaEt4AKybX917upooeqSufqAb5Rx3YCaafijVffnBZFNqXTYbKSFoYEkbfYz",
  "key20": "5Da9FrDdkRzPJj7o1u8uKaVGsLqXEtx2QevhPjAzq7BWLtho6Wj3juQbG6yoAVTQqKvz4PWgarbCJ5GmeuGX8JM",
  "key21": "2wZRPoHDTqXV9YQVeB7SUvTRbCxaNBrjimDS3L93nDQ9W3xB2wMMaV5s5EukzXPA8naZmj7tQ9Hz1Y5UDVkfGD3y",
  "key22": "4edeQFJh1uP8zUc9yCgpg3byvWoVS7TTo9xdRYmbXPer52UwZEfuLtLffuzVCY4ZRPsAC118pTGeR6YABfwtqzuH",
  "key23": "2fgMZYqzWFHCsqfzshzxMrmohQg8kqzQwpiCxz2yFKT2ji8gqFBzLF5YkEFXRunpnLx5AX9V5sgTcQnqH2i6tAos",
  "key24": "2ZhcfgxPe5Bteww4KtSozizQdF67tvsrnTUc7cnaUZ3mo1cCSLUYzgsKyaWawBHhUXUFuBUCGwsQ6JoiksAAFjrh",
  "key25": "4CU8MN9a7neuxqqxT5js3tC35ZSpsqoyg9TZH8fK6v1QxB7niUSjgqpjva9iaisCacWUQU6TZEtkyrQYnYnYcAhu",
  "key26": "MbRxrx1S45HNeNRRUF5LBSyV8cNjHCYvG74LxpzVuwiaUNZUcjUpx6tsyhqisK2FobDyr4gmDEQF21nXZaQt5tr",
  "key27": "Z9LZo9zjYHTV5oL1vXLZqXbzxKcaYZTjFo9sCs4MvBk1VTsfjVJtnte6SyKQs6B1ycbcddmfckE1DMDCwcoVwfG",
  "key28": "4KKpdeYyriDeDNgV4hCeHkFDfmuZnHxf16UsdHpnxubjoKQAFLvss2arnis2HQMDrh9tnbAfTo268TcZZETtoD91",
  "key29": "2zn995Mg9jmZwVe8Hd1Vaz6N3MURDmk8FrGwbJ1RJGHudPcrq3Q2ztof6q1qaU9pCtTsU6bM2US6FHe5TXvqfDsL",
  "key30": "3p9Xf1km2EsSr6XrVjLqpVMZ8cc9nSAs6sbERzDoF6JZHVNRoDnHfjznQk9V76HFm4B3JSfUChV3K2smFXk9Tbzu",
  "key31": "C3ZVZxnLtLnJ5rkZwrrCzyGMSuYmvSiCLcdFKDQjZ4cpbk1PMfPtSJ1YwBGKUjkP7k6cD5U248tAJfhUCnfT5iX",
  "key32": "5ZxMGjEJHZT1N5Jtv8isD9a3BmbKjkLVUqwpXargdkCaAwydqQ3wyQee55NxbMSmPaqNt2jzPBUKfbao2wBfdbm2",
  "key33": "4AS3nr7y7RAB47zrBLcq49Sg9giM7vJbPvkkcbPqcq11wymQEP1G7EYFTSk4553mazGdfHKHgbmUZmbPrLq8sdBH",
  "key34": "5PZ2A3M2CDTUw1uUxnhNRMfnqz2SV2juW61Mmdw1esiEGXNGcv3YMkj4ecqu26TzAxS6eHuETc2YD9TBUVtyVZER",
  "key35": "aaGvFZ7tgreurCjpxV1h22JGNUfotGEUk5g2H38uHEML3Nmp5cfk12vyE3KfjPD5KJ7Pkjdw2Zv8goL8sUkh7xP",
  "key36": "5JttxRrq4sHrucnJtc4usfALRjYeKXicFMKpiwEfE2xSydDxPe2cQx6juhKEk72BgJreqfu2iauZ8hnhVYZ4ZPXU",
  "key37": "2ApH9rjnqS1HWLaiwJYL4SxeLmfD44cs45J7UxyAXqzmMVJojyj2Hwa2RyZSWXFpLH7o7Naf3vo8iDPcTF5eiebB"
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
