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
    "5DmftqZTbKfKQo3gztxm1kcXvbTdbgbvNv2xJPbTnHuVSch1XwvWHqdhXiXFxzXPYjbooFJe9zf8UJmfh4ogG9WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tE7yUXxqMWEsQ9714m5osv1LCPoBSjcbseMpy3HwSBVwvkEfVXHG4LP7mozAPFGtYP81pXxrArkBpBzNBig2Jk5",
  "key1": "5ecrjBWSz1QsNqL37UTDUDE4q3wnHC3aqQ26WeY4HasfKy2ZqxN3Sw1ZHXnpTUmXUT6PTqB1KUGkCqKjLK2e7NhR",
  "key2": "4RqUSjdkjpZZQChpj6jhKYdZfxW4H9EoAnTwF7GojaTap6PK55YLqSYnJEBGs3sSYaVHPpe2wmKWQ8mciujY9h3B",
  "key3": "5S1Ddf3Vb332TSmQhwBs4kGCdrXutaniSWM9sMN22KDPS1L8txLJMTJHmX75Lm3x98kEaHMjVAKtFQbogCBD9FQc",
  "key4": "3YEbBL4HV6k5AVufEi38yasXMmCnZmSATq91uGMV9J3NCfb2CU1mAKK9bLX7eNf84FoZKK1xA8tSqDXCQa1jr2Ti",
  "key5": "LTkGmdkegwqJKf1sbfggVon3PiK3T2cTTSEgkTUpJB34jfe2CjMRVZbcfm45zyog2BjpK4r4r2F9kLXsu6jDPDc",
  "key6": "4W6BwnuyawPA8rYHwyn3FVuZi9Vss8L3DaDfnPXu1PKP2B7qWh7RMTKxf5k4NLMSk2dEXvu63MEgRbuSUCnGPBzU",
  "key7": "ht5A6Lq7WhoYNTfBJaK59VtBMyGarmAfzw3AXsgzx21QfwQu7cWA97yNn1Z19XBiywEZJb4FoV5Jvsh2W6Y3TPh",
  "key8": "43qbu3Gbu1V1hXrbZT9pkrAEa7zPikgkWZJiR97udT7fhmLqjfALLAWTGc4xzydGUbXaZvQSuFm6dwJ2J42vcFkq",
  "key9": "Rfqr9oAw6bJTgsFJYrPsxFnKb3ucRJ6ETTFs9iQKNE7PrsF85r2tMXiCy4tQwWzLFPsfDQzqbJhydyYy9jBsXbJ",
  "key10": "37sUU3djvCLLG5G9Peg5oookod8nsy8N9euMJZ86iNjwwqVR1AXiNY1Ri65AzUArogZwsSUyjxV3SiwFkUPE5rdE",
  "key11": "65MQMYpiBxrXUX2a2f1FeJToCthrtMwqgSdBdjhSe7TZ3WEyt7ZAmxHGwM8hB5gojem7NUwMJjQ2iUZCbk9F8BiL",
  "key12": "2gCUQcVZ2zkuzfST2eaH9tAgeaYYVyJJ2SeFVaH4bzCLpmDquZUBMwoLHdkaskrWZXE2YKPUM5d5PD5KPNJ69jSk",
  "key13": "5hJvgU7imeRb7HpbiZRStKD3b2VaKs8uuPh9puWR3pWkeQqyRAp7pt3D9NZAsQfw2khRbaSKYogvi2TZFagNpwi5",
  "key14": "4cVZUzgjzuoT6vJMmheanhP4CE5gRUH2Rj7wWbayyrG8qh1sydQFYwS736uxPsvwjqm3kNcNGjWexEpfZ7j7u32i",
  "key15": "54meSivdEaX2wWUsC57dUh7nEXtrtNdmDjRtZakaE6T2FSdb1TSMQYwHac3n3zwGq5wjvS7rMSNPPEg6aZwNnzxh",
  "key16": "2or9vnn3BoMgQRetPV8nMnu8rkiRbzsLXcFBWM9XFN211TJNyNkoa2ohRCpxnomVbKeRT5aRsoXjZawsMZd7bdBB",
  "key17": "4udV6zMdVWdWGiVqfYm8VXYyyiEn3LS6w22VFBkeXV513SbAePTbDSkPbyVpAqoWni2gPEFcStVJ8KwXXycB5aZ9",
  "key18": "4B8KCDiiPk4khtgb78m2Kp3BDFKeYS7tq3uFoPvRjEansKGyEV5dx5KkrysjrTq78qgp7XUb4g11amWF6EBkqh3W",
  "key19": "2Nz6m7gFCTATS58iM9yVMcuYe24Ma4AJ5vkrxDcq4ErvQXU9qKCWQXwz8ASNwUUkE1Hns6PbjwrEMCCjVbtxPHnk",
  "key20": "3HHW4c6sReev6i4g62ctTEn2CBctPUCkw5M6piGKaQ9qJRWCA4Syy6fhDhfe74Qbcizq11hRsS18erCuX4K6BPhs",
  "key21": "52NsyUVFFgT6EXJ8EVUr2hoLTznb9mccjbQhUYyCVAc72WijYDvetayA95ka3DGVGV9b9XFdQxJvY1sp6Ke88cvT",
  "key22": "p6z8hWzzyCLnaPxtPK95kKV4Z5GUv2fbBmCbQUD4iKdCRhLfUUqTVRV7HQwxCEMrwgcgQ7vskBywcyLQPuu3fs7",
  "key23": "3YDFEHjuBDMqZk2T5TtQVG9UggyPX7jqEAJV6Kc2jsgSnGvEU5DPS9bKviH3mnCRspRaqB1vgrG4PnbgC9N5Ua5i",
  "key24": "Zwpx36Vcc3vRVBkk8wtnWPixJ1fLTAtBiR9BoCniHUzQiiudbnVTQnW3DHjR798TFWmKsviu2UX9ZnqwTBfqxL7",
  "key25": "bGb1mTVPG1AS3ELD2UtgeSw4gmvesPygNKPTujk1tvXAF5JSbrbqmBQbmPmbThV8EjEUMV5zLRVzSqyxsYeYNLB",
  "key26": "68eZERdV4hqR9VMnDyU8TFaYS3bpGS1ejR4yEeh1M3oR7dn5httKrMMX4pLDLokj7t373rQmg8Ls3NeztotL4QP",
  "key27": "3z5K9bcPMjxoGr9A5yif8MzmaJNfwsjxNNfRmq4mW31Z9EaYQXD3Vd4LJHbT8iD1gwTNJuPzbJXhPBocDQUSJAA5",
  "key28": "62jJARg6JPisBPSceTPBKeipjPoGAisYJcXXDtVZ2WtkN1Tz2kxb8YJtahwQwNiAU7d9yBiZM1fpdGzLVjuMyPpU",
  "key29": "5S2z5VFecz8KdUd5ELZqHTSmzXrmsXfhCnFXKHvJ9Mar5caXrJTSWzUDaa3Bx7vbHQjrXQMxegr9GccQTEnCUmNV",
  "key30": "3wqAzHZhAhcyHASZSfmyxYrsrywHD6cdRLVmrvp15hczcFP4753W3MDGCAnxkuxZSaiq8FDyd7NrcMV7rXf9FAhP",
  "key31": "McUnCSqVXZqbnddS88TJUn9Sej8XvjVMRsNKmUPQx2HzY8wKgBx3AbQKYSKiSjKR73HoP8XiYDiQF4uJQ4u2pbo",
  "key32": "2bvG9qHGLi1FQJKFessf8Co8WjH9yQn7UsFgRgatyQiaxZdVMKA3jZ3HWeqJYM7wheX3BTtVBnyaTA1TvuUBTwKV",
  "key33": "5xFgSKmr5AJKjyQKqr6tLSLHSSWFYVG4NUCwVyEciqGrb5jwLevFhb6ZTWpzdhQxcuoRqJ5GVTncMfQM5bqhvxMM",
  "key34": "4S4ug1g6KBo9bBRJSsnE7RA1UeNAjUGk8DH3Hc2EWhhGQBn9jsG7DCAfn24x1LfDnz4T3Bj33PKfBUstvA85YxEF",
  "key35": "4nM81Pe1QPvCWH3abfqiDQed9GjvQVL2VbfajMrguNBKhMBsF53MBD8GbNhoTdMBpybGj2kpeusBDM4DB8uW6nc6",
  "key36": "zyusLbgeVZ7vFcyaMdjGXEca9fgNBZfiLf3374bU1TZDcuhY6CFFaxZ7sgiFMcaLvv3Bqk3gEuPqFghxxwdNUKK",
  "key37": "U8n44f91gACfQz7M6JZC1ecQ8TcGLyEu6acgonSHhXnfm8LiLLkDgmCcJNVr85vBZdULFYUMVnTrt7ZpfbVDqYi",
  "key38": "yqK7BUwhHoRFqBpwXcq2terLoWLkgNXMqc9wXhrqE624y3pSmuaarDotH7u6k5T1TPZmbyrdHRwMU5tJkE5ZuSH",
  "key39": "qAv2wWBKjSGTH8pdmxkSMvaTScpAj5igMwCPXehZkthd9quHQwGHZMxxT7UAdk25nJs4Nc9CE2TEJapcuBjUhCK",
  "key40": "3XhYZ5McrscbddGMWwKbkBzsKUCyfyXKK1WsW6UgiRfHN37fu8USLDRxv5C9aJL6ism6NZw2cjUY9mx5nWeeY79U"
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
