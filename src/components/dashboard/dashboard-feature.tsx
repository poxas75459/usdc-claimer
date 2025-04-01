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
    "4fqRE4DZPofQNm79cxwZzQAmR6Z9gnxurZX7PYZkDQfwAMjhtZrZBf1Sg4oDKhPkgHuCfvmLHn5kGyDmPDFvGzTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPQPkdyAd4bzx7YpBZxC7FmAehhWT8YuMRkfqvqkusnSQ6ZHZ9N9b4Pab8SmEztFUpjbxXAYhToiYuwnMkJ1n38",
  "key1": "67QBzmrHmRhwBDuzMGxPJaRVgAcNXA52XSjwSEFPhXHVgGP5bspcp3cSzBrzhK5r7Xqxd6E95tNbxoz2eMKAB8kZ",
  "key2": "5gereRipd2x88DRUNsSF4UpRMheD4j7tjX1KDRbfeW1bxbByHffzhpioiPVTHT7KtQSS4tyYqSqi3qw8cnrtQLRv",
  "key3": "5ux9qFVarrk89mSD7Twac78KDLM5CQv2hm7VCBNF8ESrApc8u7pppcU795tNY5qftb9o9pNn6DNXdc48U9TrisgY",
  "key4": "3xZY89heKZqHhiWFXdKU8qvdjVW4TiTbsWNF4xnG8PWLWqKRpgc8YMXGfkBGqQC85MEigKVAxvyPysd5uzFJhwn4",
  "key5": "4UkRvCwvQ1TzBsn1EYq2uv3cWEGVLVAe33BFWd3hAzg2Kx8NKeSGwUr4Eun9M1e6gMSNkwaU2CDyukAHVYAtP4b",
  "key6": "4qzB97NH7D5RA6kPM5zj3mYNyXDqezYk7eRFwKZp126whb2HQ93zvrctmAKY9GMzH3jXLkAzE3VFsdFvd1e3RZHE",
  "key7": "3MajMLytoN9jFinzFUr1J5k2ic9LHVbHEjAU372zmbqGF6fcFUC9vB9bMJCQMsasXrVN4K1Hs6TagEzuPxRvVuHH",
  "key8": "4EfnxEGRyJsafj3R75Byf9R7ibYZ4mvmDeCNafUikMdn9WTkMigoTb7wcW2ibsPqt5jeYzfHHakjjwiU9EWxUpjX",
  "key9": "2zJpzCBdK7V41V2uDpes6mFqoSBAtbAogJ8V96JeAC97f1euhejmT221j53iSV5hgFMtuC9t9KRcVsErAaZtdeCY",
  "key10": "4okQAD1pxkYoFnZ8J3u7A4dMESNZi7qjuTFUEjc2opFGW263soikj5pwus2QqZZx7UNdTYs8LreT1bzQhoxeaBrN",
  "key11": "3UierBLNrTDZCW4kGzZkKe9XTEAMGwDrU9nJvGG3Thyhb5pYxsAaBL8VG2r44KnbcUSjRQnYticnZHo7LHYhs8PS",
  "key12": "3DAToFvaF9t5dzUS8BjDbr6Uus3oqAc4jdMLmsVsV8phZCWgwSYNKxD1QPU6V1RZkEN1tf9Y3Vk3QkN45uSB22E2",
  "key13": "64sYW51r3J1nCJ1bto8VA9E77hEV8mAkcbemeGgsjGzSv8n5z7XerNKWvdU5cFJ1EPRBkGHNGrEuzAEWMKesGTr9",
  "key14": "24kAMTiKWBgkXT8Dzb4ZSFVfJyxMxWFygads3aLUsJw7RpiFJfuxEPTP6Ksf2kqkBiDT1jF58gjTQNoaW7JMCMGj",
  "key15": "5yBhCWaWVCZwwmycyYCcxutpVb2pZfxd31rCPLbXoQLEPSd57rSczTfT4Vjuu7KLw8D2JYHWPNpV25qgBZb1efL1",
  "key16": "2uefTgaVgKUEEtpaZQwAhG6R4wY7DJ2EfRnviyozEvk8aCDuiegkuqDS3A1WYPCCJrk9L79kZ4kvBUqLcAeZ3oXG",
  "key17": "P4x2WrnotZFK2mFcSFxtFDLWg8Ei6vajN3YjzpedoeoGmAmh3ysLABABhxMfeeetQjeutfnD9Axe66acWaSDtXa",
  "key18": "4y3RDqWLLGkQXgDWGb4SqDBCUW7Wx34bHsSoEMz52zh9RoTBGBbq22pLjLGyRjEvmJAbmaYyJ5kvGod5j3St8y5N",
  "key19": "2fgEf9WyGS46ZeFgcVj9uLhssvJcs6eHKbwQET63Pw26uQJKmGnxU1Gw7iYDU2JSMx5ryLMCZyM7r8htte4J5T7r",
  "key20": "5cvsYjioqSd5AzF4x3fHNFVybN2HTqHMkFs2YwimahRXHuidDpDcubLfPKUghxkT661dTHAYYnLGpAbXQfFtpQP",
  "key21": "3fgY8KoqrC9bQAetbgA2huMihdG9GbnF5EHdK4vfLr4L3RTDsGoNypMv73nM9R4jxmURGUg3pM9jYAHHhYmtnw3y",
  "key22": "Gx56QF97omnUCDYJPG6wTntVw9cEVnJ7Wbv7XW9cqsCcTn86TbXK9L1rhY3hzVz2r1UfnqZCoXEBBvuhj2HZ324",
  "key23": "4xVF6QLikYictuV2xC2uKQzjLWQ6PMT6AX2oRW9tWMB5RDdWBKr3ogeHNaL9CitDPNBpSqfzDncCQrQmQ8tDLjHY",
  "key24": "z8we8C4uqhVRxR8tQn4gcesvtzMD9zh7DmYMFJAoKZ7xCbGVJZKWbNC7EG2MLt8BzATPBPquHFxncaEMqXNUAPe",
  "key25": "EGHcZioFwDYuGQMLmraDhtQw4S2fjhycnTX6BMzudVqeeRxSzzktCseKBd8PZrBD8AMNR7a3JeJWRRPN17dTY4p",
  "key26": "2WELxdYJTy1UeMMbJG9kTeZ1uceGh8dL9vYSFgDiamCFdLqqzNhareBBHZx14YjY2T4kFgZruuT2HkPivGR5BMFX",
  "key27": "3Rv6kqdk37QWRhsQUfMt3FxGHECxhePb69Jj53H89stRbP5rTNVXk34QmyN1H7cqKpE9PFFZJRSaXsrWC4fpbRiD",
  "key28": "4pCtNJ58T1zC2XXid9RwWmGppsorJHtc4JHkEt12BrcYS3d7Y4J7k8g137AKg4BPEcZD35EodjSipJPt1Gmzq2gL",
  "key29": "57dkVAPngJdMi95gJJrwKwreLcavZRPsGQCxKYgm81zW8G7T16K6FNGU85bEB8gAdEZcBHyVsdGR7b4GviAr9zju",
  "key30": "2Sk2tw6iHt3wp21tBMpTorkihSBFrTKxzwS6k5RhYCZtLrpZnmXQ9iiKACDa2Wvyq8x7M5Lv1FCRsuaeKv2N2cqy",
  "key31": "3fUoK3MomkytUoDnxAH9ZWjWQC4HqrXUkHcS73vkTwhokwvoVdwF9fH57fEUpRBNQC5X4rYWCXXKydnqaoEuZuvU",
  "key32": "5xkBG3hcH8kD4x69MGpc7sp9WYHnBwG9wWKLhVmHFa6huRJTa9424XQ6mDJAS84gwruyZc1CQATocX3vF88hoBmD"
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
