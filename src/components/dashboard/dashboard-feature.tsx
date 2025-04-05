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
    "3vnKvEag3Y7nnEsXaX7GCspXG9uVQnVVg1YarEzAoQe2MGVySfcDDoFEd3GqLPX2aX1LPYym2y9xYoCntk4ob7WB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrrCSEiYJdrTcpAjvEfbuNc91Cc6txbHLA6DXzxpgH2Zsa8t92E6KCr7sJZBuDCgFMG3LqCcPALefeHtEy4UBSC",
  "key1": "57q77ExP7hfzM2oLPuE4oX7k1YK3Hj1fPtCunDLTESrs9DBYFTDLQaatXBdQbCidEs28gzWF3ikCYC4ovVV2gffQ",
  "key2": "YhJGQPDmi3be9uN4TMUc9Spf5y2g3fztcUeszso5hq1zpPDecqSfuP5PZ5JLRCNqtMamiHKaYPxhm8gkJrhnUk6",
  "key3": "2CKv2ESTWFdPtDq1wQEQz6Q8r34RgMZ9dPkKFx6JFJX7WErTBLwitMAhVBwrqKH2NDsZ9KXQzEdnW6L78LbPb5dD",
  "key4": "4UL7PevhhL7B6nbEEu75V9iCXt82JgW5rqsuzT2hGaDNsMKNd5a1NQa8UtYwmcUsueD1p1gGTDwkBgbq8aMwM2Hw",
  "key5": "3GG3TYjP4n8NK5pMLdTsQFoqnc8xBzzZRB9jUpRKBDXiLZbGq755XnyCtBg8aiq3pN2Yhp4ETYQyuDKDpjH1BK88",
  "key6": "56b1Jw9AvziEEeqBUDNGunTd5sZQcvNxyqysa8yMroQhfLc8RvtLuiXpHJjNeuobpDBHAjW91QLjUBfH9QunvSJV",
  "key7": "5ZozSaRzusZ3HghF4P16UinUxAqkrHFyjquhQMDSsKAyvzAyGJVPg4Ldqxk1gFyZTYJCXCV5BDTEUHG876uuscHU",
  "key8": "ZVHkFiC23wdF6ru3RdL5LZMVnggzwjf89FSQMZoSbbBEQ3Yha6AnEY1hshsngyQtx7UZqRCg64VR3auhEknAowm",
  "key9": "3XtWmmaqvK28uRdsjrzqVURE68hNoviERJCup32KQzi7pAgxSsSjL4oYwDpD9mv9Acmsnmis96TXrDrfhQvB8vW2",
  "key10": "37q2zNQeP5dTYumM3WPv9NYWJmexMmXETtwGhc9RWPEiqmQDqFVrTfUzdgMsiHb2JFfyPYU6Caap58sfiWvb5Jj",
  "key11": "4kLM68uVBzykMKfVRrHcevQM7HqzzoXicSWwCtNvkthvj7mpfUyUDp454FfLVY5vcfaokiLqLWqWyJXQueF7zbpq",
  "key12": "26LJQxpo3h6SbVoCEajas2xDP5KJD9duS4WmstfbifXLdZcUvjL1TKz16CofvE55y6oedyBPte5AotyjoTkAifqc",
  "key13": "4jSHznbw66JPgnvoZmvEvLWusWKnpmeLxD3BZgcWswkBth2kufn9G7m4RsDK5o5tLVncNDGGCBMkZnrBDV3Y3vLG",
  "key14": "5p3tmDL5pkWSpMjJVuHNsXuECMQP1YHNnL1LSsUDSVQFd1vavHs9mGXc3f3VZruAFJGmJ3BRhvgdHCd8vRwzSsDy",
  "key15": "4XeN87pDrExwZ8aJvaUeWUnnWKK1WyZqBNYLbAm8dgewH7fqaUpvEmQ9afEQp4TCWAXZ8pVqLfcBM4aMezWXq7RA",
  "key16": "31BzRtRUEsnjBkUY6rvJp83BehR5nXPeatmc5T6L9uZDDBpiFEEgrhz4jFmKapfdjvP2wfsYrXxisHLWUFVMWBK7",
  "key17": "4nSiEFZ343t9aBwfZCuRHaB3mD6cKau7KjYrZtA5jSqygBd8bzoQH3Q4JF7u5oFJui6y6BJcmDUQpGzn2KDULCAP",
  "key18": "4yUj75S4jX3pa8qAth1h544dskij2NinKDZh1XT5SzjBL1jAumC2WYS5dY98Q5LeNQjuW2m2oesV2ne1wg3inrY7",
  "key19": "39it2ebevJRC4NXMw7x9auLq68YkFqCGtyc9mdnehsftTsYbEMa5WrtDK7J6rAczc5CKK9kM5gwV3tHTKEweAqmy",
  "key20": "4cFFUVgQesixqD5jCx2M3JzwJfzZbWjdVvjQi95usap6oDQMfKWtUXB6CNsKjdCp5uqNPbbLoae4SYYokkJHDmYg",
  "key21": "3QuDkCk7MDGmVeVSqaUfFXnAMY7xs2vt1H9v7nTPimFHjRf9YZtR25wjQybKUBgQjLaTbcq3U6vfEKRjWE7WaKJH",
  "key22": "61gLvUMgSt4Gaxk7x2ZFfXDqjmeevJn3g5CfjBmWLxj3SdBnd7TjHXjvm3xvEc7akdpMBvajWFXTtbw8mSMhxSf7",
  "key23": "2qyxEZEH1Z1j3tVrPgCtwxvxkpdwctgf7zvfBhgCghwFZR6UCYUSa36LHvYGpJMQqNjjH9zrB49L3x7gNWkRW1RT",
  "key24": "s1dkgLtyGabEzECU9AFkj32aqvTU8bzJ97CF9zjbpJLtqgKMpJjFY4H27oH5yVZMsMy4VJqaP1gixq7KAeouweH",
  "key25": "3Jr3Vm714Ht5uE3DTnSJgJQijoJHmcqNtb155SWkzTPGixjH9kTYLbmE14Bxi7CpEQ2vPFxUbpukaa4gVEc9z8XX",
  "key26": "5V7jVnSEs1ZpmexLLRAysRbKumVXTAMtJPL966xnUdNUzsaZxciKRMREi4z3cxai7e3n8e72i2yAif5cZc3VM5m3",
  "key27": "Zw6ybHSpapsE7KCk6waYw6F4TP3eEVTjr5fSNce97JzUVNG5ovAe4iWsS5Noq7UWXMwKDz2vajEGrYgEZL3mDKK",
  "key28": "5pK3MxnNcUmDMmQqjLDp9EhS2fgB6qKtD6yJJ32rFY6oBSxFR7hdqTK6vZqwyDXiCGUefeW3g997QviPL2AVfhkk"
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
