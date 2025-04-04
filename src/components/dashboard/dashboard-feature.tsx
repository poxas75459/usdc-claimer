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
    "2NCmUHquxneanQUpknGWz7QQhwLpdQ8kTNixHmeWVffQaNAatCScFPYVkXvvLoNvuyJZmn4baYbfqaZZvyXg9RTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6qESbPxfsEhuJjRVzcba7rtXQH8QdMbXGJeG6HVGYSpgAo1eQ61r42Rgr6oqzmPE6cvG1rBx93YG3BBJdNuDH8",
  "key1": "4MPWkkNXJ6XzyWnzSATe85nUwiFCxmChNF4UZg8VmwJi4EA2ST2JF5kRkQyvtRRsBYiKak5iktUoFn4Lo5DBhgHH",
  "key2": "5K5FktrEr3WND7mLMufmDmsh925DYaWmViKAe36VFbqGWw32GwNVqsEPxJN1HWuE9Gr39WrybJqhqmP59FZ1U39Y",
  "key3": "25nW2qyZ9aas4PRUkAgYufzg2EVKA7BzV6CRQRqfgC6SHPTSHiUaGsuf2FGpARjZrCbFwhU9Rpphwdvk8sdu7upn",
  "key4": "352mSmREFjsVxe4y73QJpCPww2tvSzP1h1jbMTtKWpxnyNCdo6wL9xmjMuvmeMwSDWXrPZhJYkyEnr11s5V3Xd3t",
  "key5": "4Kk1yP3uqY1AAPYvno9D9sY3WFwVG2UBo6iyK5b6uG2NffYYCYxQV5D3PzJQMWNwesyWFUbx3PD11jJAV1isRBt1",
  "key6": "2xn4qhS234hbZqHSXDEm8f9DrexuY7Yy2wLrMSpBM4CbQqgGbsf36TaSXGvR2t9AVg6bgCypeMJhx1SYQ3Z1fD4J",
  "key7": "3wzKcqvQwgE8hfg5N1fNyeLk6a6AhPthbJ9cqsRGpZ1H8PPjJP9Z9b8adzCv9tcDMneVdFqhfzCf1FNtwLSeeh1y",
  "key8": "5PUJGADTyAdcspfDb2Yb9UR9rfJXzJy7iJt8ZXfk7CWRXYkbNBtPzfGrTqae6bBSdHzZRnEmxwaYTp45D6iBw4HC",
  "key9": "3z2mFu9zwZr6W2bXTeyRdBa1UFFxpbGS9TejRutaSPKwtEayTd6dEER2t9vhW7aS2Q5NV1raPmbHmxUtizPgUG5T",
  "key10": "4YkZ75BhXTjaBSG9qx5MRJTFKnLLWsvsGaLAdJMsUwcm6KVbP3zMp7cMHdcx5LMzBcsR2owMGy5D7gtACrYwuGT1",
  "key11": "HKLKAk9Xr9AHWa2CFRAUxbKWda9LSFbEAckMM8GBkTtBEzMYLE19uS3KCtvmBRapN1xXuFVRAtJMiRWi38jrsmQ",
  "key12": "2hAc2vvTfaBKdmiWUYz9UoXUi24D6U782saVktDaHNajYt7UTpbm7uYgHkomTeEqBFRYqEn5ZXeQo86vVT3Hf2rs",
  "key13": "5cVnCQuhmE7S8WUM16QW3y9qDrqEnRYjxcd7RF8zCidhog1DscRkYcShmaUN64fHX9A9At5qWCSDfvCL4X3st328",
  "key14": "5qzQpZ2m9ZaffhtJfDMmdRdQDePiiw1MeECknDV8F42HL5BUU5neTwRFHfRg16xTsZRa1Lc3EgC3ZJCPBdM1TAqW",
  "key15": "61ZWN9qinetN3ZPZJe4aFrVCgaKCjPuwYuK7U2q5WMARRxKUx76PAcYfYDnBKqnNvU5EbSc3BtxA536viz7ferXP",
  "key16": "4Zykfd6Fej5bA99WRWiA1pYNE7CY6kYRyjirA5Jy8ZKAvvMAoTM8ie7nxhu6A7AZK6io8BMV9MMW1CPLdCuRe2PW",
  "key17": "yDdwcN6jMhUJd4HWXUGUgdbDT3QPcfPoSsEf3kPbr2ArimtFAs5BELMmsU8AL3ZjAXyCAijS6RVANvrR9FXwNAF",
  "key18": "8JgxwHFr72LfKHEgoJ5D8D6UxK6227dP21ZfXmDJMqYp5hmYc7THDnvsrFLy26QZLP6gU3vQn2kiLZGLECAHmYJ",
  "key19": "5tjM5P1LBxaqeEfRiyvy6TTaFHvJ8fAkRVLBY8suR1zfonXuuCRTQU4GH9fLdP78WrBydmp9UFjqmGHKf8BmvagW",
  "key20": "5zVdCpP4fiGep9cBTQRyzstnCgeiQbe6Xfw6fRPL6u8B9AWnXdxmHCqcaSBT37y7ardpou9nXMm7uLWQDfTU79iS",
  "key21": "2eajaB5cDbdEe9tbmDpmgdmKxfUkZkLdeQFAgm1Yru61o8GWu6RcMex7QjWySBGQrCoPdixYTMeGcSnX8Z5VJCd",
  "key22": "54pC2rUvEvdHAwZ9S1GPoarunx46nx9bPueRgctuH6uXiVVV4KhLSN5gNw6nWzhkb95M9Z4R7t3ezus8sCbk3yhz",
  "key23": "2yBT8xxLTfmtWUhMREag5mBgRuLDAY11iaVSNk9ToRCXyCKT1ku4ZsiEp5WVbFRMBFW5UEBPSzH8HMfwVt1dzMJv",
  "key24": "3NnAV3YQ2JtU79ydUzTyZunFQm3oxkCjtojbKJWKcuSPfJerP328xFuasi6KHd7r4kyh22JKxG6qiFW2HZAG4teg",
  "key25": "34DWfiMzzPwS4mpHETBBD6xJ5CyYYaGPe2AsMnK3NCHJsCi9MxKj4q19t1vT3phenuCA72fZfhxqDQNUbfug9YAP",
  "key26": "3WjLijsCRVJxxBaptT72ni84PupPrcJMh8bkDkzVnXmNizhYSHABkMfja3DfhfErKRSuimoKjrEM6iSFeTiSVYdq",
  "key27": "2MbdYun8wg5yuXHfnop7yvykxLWX7mjR3ocj8atL2Gi9uEfCJu6mAuZj3matno72pqAbz6fpiJw6c3567QYiUgDy",
  "key28": "62MGdzqP4vyHp52MigX3YBNzzwevrHv5qhMRKQMevydemijrAFkEaibF3WRZ8NuFvubNZDAUUyPGi37JN6VpGR6h",
  "key29": "3XySviNH6iLsV1PQKCuuu9F8tXB3TfrpBx9wTQ1JSHCqfvDh6vjLbGYMksfDFYN26hDFnh3L34S5JVWsnhkfTeaU",
  "key30": "2Rna4Gtt52VrwPMkhN69735Bhs7cCbsxPgjmVCn2Pcs5TNzzXML7GuenZs6dfWnai6yC3zFmnrnNnvSWW4vrLuP2",
  "key31": "5eVnisKcAmNgeEWV9gDmR9dvtvxuEYjhnGeT5gyuwqkbNu91naay9i5LdiRYw4CyfGoyM2YuXUuWvL3T9Ubu1zpN",
  "key32": "2afSywNnDYUhhKtWMpxfrhyrjdBan6QUxEtcdUC8d4Ko9kDKsq99gtidbMXA1jsmud8jM6at53NHKeAy6QSp7XX",
  "key33": "4J3QFvRc566JgZmJam5Xs1V3YYjLvYmjWnk5yKviPH2Xs1fe1y9LvMkdLT7LDiZDa3TNkECKV168UUFgysuwArXE",
  "key34": "27oxgSiuTHzDMZHg42Xe3TbnxVz9YtNkibCEbSmUDRCxcW84e3nfFxUHxYNvWUFqrhMdmmxzaW1zEsnc4xNvt1ud",
  "key35": "3nYnUULTJkuM7pBop9vmvbfZs9RygE2egGubXVbnwctPaHMeHwbcJ15aWQ2txW4ujKoMZQcF9KWGAxgRYz9prfHG",
  "key36": "232pBfCakeT4PJgdCqJdVAfBP1c8QSuKrvYY8FNCAASBbuDQ18FF9q9EPq7XjDmbboYLscF3moN8PUPwWNwjYYNS"
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
