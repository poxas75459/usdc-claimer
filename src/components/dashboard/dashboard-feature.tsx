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
    "3BwAe1sKpLEVZBFWTXCZzr9epTxB2eonp9Tzi4CtkH7q8iofGa3M9SzTq9n2TxdN38szijy8UiiiAE49m3ACNAzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awV1rAqqdoUeeuCXN9a3X4Ux6X15cuyH8ePYepXZWDvandozfPe2BL1vXqQGQAqw34BdMr5ZDH8PSRMwX5T1ACY",
  "key1": "3M18dtFAA1yerJcdbDixoobCK1cfQo4i7q4vWsZWXTDWceMZJtDCpe41uujuZmuzE8axWWMYdCNDNetjdR8dCBqR",
  "key2": "3J6y4s5AXMqWJ7TY4Ux5XBoet7iLR75F6DcSUkpojTV9nzmJdTJN95kWkCAGQLGmVn9FaVQ6pUkufWc9LB3T2FTu",
  "key3": "2cMn1acFrzfPc173Yo8BLpnq1XprspLKstiAunNGwvZizzzGibEMw3zSbt1QcQ1MiPS1fi8XNuYPs9Lz61FQwHMZ",
  "key4": "5CxexXNfkc2JiYXDePBYt8hrzJAXtMrm3gksaXbmy2dXJyV27WUQMQCXTLHqaocaPjxCMZn9n37TcsDCZVa7poJR",
  "key5": "b9y4swFeDwFb7x14B4YZqUkS8BxtJD8Q7amZ2Zb8wS9CbLVUW4dxheLWqYytoxtw8jLUUNeKFVmKLkjhbxij7SZ",
  "key6": "4qqGqWU1Av63hGWxRGyExQ7GNqtijziNRCexjXGphJtwAKjgPwWQEFi76gw4KbWx7P7AKh6dpa28R9sCoyAkuWwr",
  "key7": "4VbFhmUJ8m8NMWXELprmWhH1ENzy2oqnftkGdLbsnKLzQkyv5V8t2RkrJNgyY4ps5VMASuryPpfn62avgbYu5y3V",
  "key8": "5X8pqiKpPDu2vfGv1vHJ1DZ7co5WtosDmN6EuKSZNb85irK6UTopS4t2KZ3avEPdbAzfsdNHxSBYeRMRC48rNasG",
  "key9": "3K4hXPb3zCsJqTNiCeUFSi2NuY31XVaq7utWYnXycrDzW1byiivj81UspPwaFzAehSFTchWUfH5bxS26YSeNtTZY",
  "key10": "Knt7BtDZUZRtrnjx5m5gHfuJ3FMpjde5vMP6VmV7JxezsJ8zPr3jzBygJ5kWqmEunD2rTyqRyjdeck8KkH7MCNr",
  "key11": "4EtZvyWT4vK11Lb1z1skU41FeFCwFFZMhfY7qD7Ey8wXrR7pqjJWaMdEvRgVzXGFP3BQPpWrTdu8Bur4qW2DZZmE",
  "key12": "2nQSzGsXTyn8nj572VqKvfMHuxxGQhWUQtSuUqaKXu9zE1PqnVN4FhYJAChgs6LN67sw91YkgJPs6XiqejYMrwkP",
  "key13": "34R8DobsRqgNaCnxDcmuRFrno5jaGM1HBZkXk1putPU2Fpmg4EemHkLj2CF3Hjx6sTfFpNm65hG7UBFoxcygRmBE",
  "key14": "3S8M9Xz5kBL4D8UTkso8yXEEZ8g84HZL9jD2JPS8yVteV4spTHcWCi96jwEug1oKBHfLUoR1xU5KDGSNwAGUdq2u",
  "key15": "2yReXxNSbqLUqv7hr3diJfhnDcXjzcRBd38JiNKpDM9pBd55JWUQAEQVXoa5UScPv6XTadP6wqs8tWfDTV9d1tbS",
  "key16": "2nbMdt2XrYsVDzZdaHVrqnSoYBBJWgzdqJTpz46avYW6iyrcxs4v6PcdYXNjb4REFUmkTTPEwGtSgCtFtumoecvW",
  "key17": "2WxbL4nQKm4BGcj4m3mxmDHXbTGFJEhg8gTnsZHEF92VXheByBbCvm6umu52wursbEsomMsJQooonbegzjH6Lg2g",
  "key18": "361kxKSfzfpBPNYwTiAKcFgSDGVP1WD1ZUEb9s9kgvWjb1QrFgrrP5Hn4FLPYZJk99Sqd3ivjn148XkhoSQqvCNu",
  "key19": "66LJZqcGcHsiM73nrJPVZqZutYv3T9mi9iNX8sGVwW4aq9z4dMqpDXVcjrpjUVtDfiMP6HzDDqPXWW7RMV2BDJna",
  "key20": "ny98Nk3gMNk5mcFPoc9xu9hwoNu3AUY1b31C85vjq7gh7HX4tLqyVJEPUdVLbNk2xgPE9pyoaEswCiEuqwia7n9",
  "key21": "3xngrnAf4M76cEGv9oCUAwHecARmHs2fJY7Tzryi4dSCSdt9iSBVfr3RE2whGrasbt7jNaKKa27o4rTkhJtdYpAx",
  "key22": "5G1yJDJSdyYyLbtHGzhgb8cmbdUWtLmgTVHyn7XfbPxTdeaGiWE1TJqjYyVodEw4cE1C6m4mzZNF1rBfLRwmFgVQ",
  "key23": "4J7dGHwHvtGXdBZUjVYmWDKp4Hb1iPiQu7tTFnENTaP8wemxJvxuCb7GwV7aRjyGSSDsCJvkb6ymkgL3piSKzhtg",
  "key24": "7agictkkpGF4B5jVu8BbghYZSXBwtosSHdJ5mRx9DRg2nd9LhM5utjp5ipzV6Qkgb3CYMqkp5WbFfvT3Fgw7jBx",
  "key25": "25LbiTJ9bPh6EimkUfW9qXNfoXx3rzirEr2FdHK8pxW5ayFK4dWxgpVVEHAx6NnBLXQhad8fkDb9gfWno6EkS2bf",
  "key26": "4SyxmCjFYQtQKikvDsgwiqcvH4WbVAHXGKBypbN8XD1gjK4VgTtGgSFRYnJDd8TBPzwQXNNuLsY4o1Gt6JQJPkUx",
  "key27": "4cR6jj89xmoMTFEn71582V33Jhxk2fVfS1aKKgaxhwjiCuSAyyH9aJKu8NiKPL7rfHB2FgSJLtWMZmovyM1YhaPn",
  "key28": "xA5kCBfSzhQ6JMN5X9yRE7q2ydCmabYXXFFkCHq1PHuxtDkvJ1Fct8qGg37vE5TgRMjwJiQpnUqiqPqUBSEitQw",
  "key29": "5R1YpuFeduypuCBpsRcJGB4yas9bpedENfnhkVK6qrqL4KKkc8xvPfDpRaPH86z9iAzZaPqypbp5xyPT7PX1xmJf",
  "key30": "31Nxiixv3u4EhCC6PzAAZv8LDFaGyadoSjrQyvKjiAXxTjJKxsd5qJUiu9EzyDPFCBtTEYivn9mxziYXmzUYcTQh",
  "key31": "5GqSLbFktJbf6AjgvsKsQR3oXNfaUvKCgJNxeMf6YqhNWCo6fYANrabnx8eE3sAV67Qiz9Mz4Q2SSUW5gJa5PpEQ",
  "key32": "5u4E7i3DLM5RKZtddwkHY1qv9VGuHbipZWu6DxiJTHa9oL8vVXcA3P9rNZmAwC8c92FcqY34gnQHwBygHbACBwUY"
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
