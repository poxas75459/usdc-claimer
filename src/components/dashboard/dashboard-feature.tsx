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
    "u3ZDpZ9JbbPS5REfKHnURf3yHc9uq1i895kYL9tdXUdog93KRaqe9vcwqQaUEGfJHBKFQ7GipJtGMJUiSJfXnrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uA2ZpN35K5gf48fjdcPi8zZrAuHsztugVCE26FG7cykmfhTRgaKq6fboCiN4L4ujPa49Un8jzPCywQo5BnqzZhY",
  "key1": "SuTy4GNdv9sZd9hakqpPXSGTGWxjucpeq518iq63A511N5uHfiEGVRRSg3mdrWfyWWA1pNKarxRuPm4jPMBp7y8",
  "key2": "5KYjhgbisevfFqaNJDfY4sfVBr5z4ArdfomAtqABYwBhtm6FTuhdWyhBVMMFsyE7rFyiMxsgmYERcNu8qtqF8VFt",
  "key3": "4XkoGeigcufworXmUeipmeLLJS9x8JEAeteRCAZjstvydQJJPyK1dKBxxJj9ufyiymaAVuEcu5PfLq2MWJuvAQaM",
  "key4": "4FUWv84kuKFffnfDXcohw9Bd83FbSGS1gAfzepeY9QhZvjvFhyih3xq5ePtUks24HKRW3cv5UDti3j7jb2nnznku",
  "key5": "LTJJWm9KHDB6TDx42yJodEeQiktqLE6AKmtJA2oJ4aYWZCnDGyCEMaci73vRyLuesPhmUeJLepW5WzFWuiuiqzv",
  "key6": "4gtYgC2LiU3Ns6NvhVocwUCe7CJMRbRnZVy2teWkyVAfuabfL46k5wduzXai6k53sdU4mqaFzNsfJoQzABpkZ2AW",
  "key7": "5rXEWQ3HsvYY8HtSK42GpLVUoAkHiyZge4iZLSmauEmeG49xTd2Wpp19wd9jhFNVSGq1hsJUXbLzFKVeZR5HcYJV",
  "key8": "2oz3bJCyTHA9MTqP1uPCuBUcwtMGXeE7xP54B9ts6AN7QeGoS6ui9YJMqn7noGqe4LuT3NLVLdSXj4bvy56AGESK",
  "key9": "2jUdBNx6pgDsGC45e2P1yzbqpQ8wKFpepR2wbvMvBagbha4NEFxQZLzRc8pvHnqR4mjsbfqL9U73Chw5Ce36mU5E",
  "key10": "3XeR3AKejhkb4v1gBPJ7dgVU1PhSzBo28nufCNMhEcM3CM7Ro1PhQ6ABfdY6c7sHPsQsUgGxG6nQRzQiayFBLUrG",
  "key11": "31zqzhaVCB6jqL3kxSVYDU8jxRKJPr373TnPn2dab6DHvsKjYFXt9pvj5FqMD489aDT5w9Frw6yGdgw2yqN7nxt3",
  "key12": "4FT6ikVVFxbYjKBqGRbehTxPQc4x7VzE7vpaxZXVSe5ypK2T2xzLh3BpEtqq1G9fyDdgRoigDgZ4g8pRBWbkfHcY",
  "key13": "5ZvzpvZzjfG769ZUoJytKbdBR7oWtqGtLTDvjNr3LByknLypWLuRAYHTn6ewg6L2t8BQECV3kHjpwUiLY7GzcStj",
  "key14": "za8LN8jS5HFrLGaQXw4Bp6PbVpLDRYFq738HMWJv1cTfuoW28f7w3YVrabaELAqQSuvagGuZj39VU8EbuaZCo3m",
  "key15": "P16bPrRxXRh2YXxGyHx54MsXSZZxrzGptE7msNFsng1GDy7hoH4NExYdqrM55bDPEYXFrt5CpWcYz4vFXrC52pY",
  "key16": "3Q9aiTQerVHHfyA5B3CPAgry9ZDuCiqJmuQxfZfkgRhGUb2UQrqg6TaGmQ1NLNU8QejKfCHXxL9gP2P3P91FDP7S",
  "key17": "38ADV4kJChDu5UJr5HsyqHXmqF1YzTEMb89PxLMQF1qcUQmCZ7xPQCdwCryqXbDRkNv7XtypqNVCmGT8VGhkHr7a",
  "key18": "Zrbst4MSpGcHnNfG3DsPnNUJsywKZkUDB4tTqE8hpzFKJZNo6rCM1YpntWLmJAgT8Ujsou2VSCmhrz3p2JoM7KG",
  "key19": "5Db5xMAXL8ZqiSrex58jqss6BxgCBkqiahLNuvrjVUz5nxnyraGGbdnPSGMwHEqkTHT3fRPKBmtUg8LDCucXrKLy",
  "key20": "3BqokqkpR1dkgvG9KPtntyuwqzYRi8vsPbNfw7sYDETSfALscJ4Q2meHPBCb6RG1Tx5Za43rsez8qFrCVHLDRJnW",
  "key21": "2JbscxzWnnYEXiv2wTaCc7iMukpwpyZ61R4s18U4xjLa1YQ4PPPY7kChSbkD9YwDNbpoGANvUAbSxG12CDgD2oBv",
  "key22": "2ba2MDfVN98RyuS48yWfCBkQQEjoXRz4WQKpqRHmh2DQoTWRs8P8GSX4UfBp3QRpjJ7kBytCyr3S4tMShmk4dCyU",
  "key23": "57d1X5niCDwwJPBeP13SnhxhdHcVhgqBgpdxhjNrKfK3HNLqohoqZ24R7iHk84N6GN8M1fo8eArpsaLRSGeWV9Wj",
  "key24": "3BA3u8F8WVxeUyZaajgKCtJQyJYEJepJuLYwtaUBFKUSoCE29JwdectpbLa96MWqHwEugD43848VeaBoXm1UumPc",
  "key25": "3NCtaY8Ginmi8kLUsZBEtU8cwPCy383pppnidZvoD7bVAPw5smhzu5t62rQL1MYm65Q5ry3BoxTigVMtq4k8tCwu",
  "key26": "5zMR7Dsi6fX5WwvBihmH3GbM6127VZDdUCWzoDNjiiKvmkU9x7XRrjM9a8cdkb9dUDHyjftn4Eo9BdXjvwAZRg8G",
  "key27": "4YaJ53yCxoZqTrt47cFGefX4GXtjXXbP2kcjqDsTeZvvtMTJDvGBVDRpwRPTnk3t1BGCXA1CckRZdXk8S34bmXFc",
  "key28": "3Ei7RbDfPvBdD6wfuXoUCABDNVLpXBJrbHaPoNJK2JhpKxiXo2xyyXLzb3DGc1ik7Y6LRDdRmevxm5zDHhVnSsRL",
  "key29": "3cX7kjjiCvQ7BoUrZ95Gth2XwsmkU1Xs9vTasJ7zJxzC4iSgdmACnVedz2tp9Ay1nK6JcXHi3JU3VbJPnbqhHX2Z",
  "key30": "3o956LU6UMXG93tCo2cfLRua9pMmvVV2HEhEM1V9KwpcJQ4ghXXMZfhrBkn6Ndta3ubtidoUD9MZwBqDpQGsTFWv",
  "key31": "4hD2m6W9TKgcWhmJYRC19VUzaotwDuL8711GdmAD9mX2PMrrSD1JCdGKy59vnmzVc4GQU4QZtGibHSK6p1MQqcHQ",
  "key32": "4RLnxt4juoBKrfzERssuMyED5noS4irQwxZvsUJb62WvgWA21ysaxY8RqBysLZqLSziCWYnvif1kv3q6Jzmn4mPE",
  "key33": "2uFnghSpd8d4sSTvfFSRwZAMMxEndBN6EH7Yymbze335SpsLJtCUJHBKPvqUmFsJG9KTLDFtHgdS41BCPTn2LaC1",
  "key34": "fRXRXhZtwrw58rbpqDm8T38kidUFfum527JUwZbjeua1VmhtYpY53MUxaxupxD8bCt2vBHeXHxFXBTNa9tMDfTU",
  "key35": "SQAPGckHoebCZronjRxpoTFUbMNqT7wpjhLtMvUMNwEXxPy8Ay2o2orNvdz1Z7ULZ1bMCvYeK2W1dq1Rys2RGq9",
  "key36": "2HGYXYFbGf1JNSRwUvSkb1ZRWoZeaURMpQAkTHFzziVxvqjL8UujaoHmtDnfVXZXBbJZUEjbHXmzpqkPHjHNqPDV",
  "key37": "5sF8741TQqK3zWEwv5GhwmPDMfEWK4EFKRctmhm8tpwhyDP9iMXsaUbWrKjZtA3sGAQsScaMX9dtEunGD6wzbDdf"
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
