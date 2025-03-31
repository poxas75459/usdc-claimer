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
    "33FJES9Y6Niy58XsbeVzWgZYwswWbeQE6VuSnPXiU7uxDonPjYwJNuSu4oyufBDpYSkjbDApSYijGi111cQ3E7N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYN3PkEe25XZMWuyYpazeEX1Hw4Xfh1xH9Hy2jRLHqzM2HJPR8T9HaQQATW9JkiQdmyBAuM3aXkAFf7wLAHfGZ9",
  "key1": "2vWxzCVNNcw1AvtxDJq3mC6PNna6FQZfqm9SKU5B78YUubUrUbok7m6DfGM5uTzq87TCmx57pUAdGKEmZLSUbKU5",
  "key2": "2TN9B7MDWFeYL3D3aDvTK7xMog5KdvKxW4e8eKSWi78rWdwskoSHnqMwYiEPtuaHqxoAY4jp4d8uW9KjdiDK2Kit",
  "key3": "2hNTaHVLwpnYhMsqQq8mUMkFxhKQ2a5oeqPp8uFps5vtFDd4bPvqH9UwAwxzmWWC7vXDFrPVCntfwmZAT77CrWEe",
  "key4": "4zYj17WezdqmGwLQLaM75ayD5trrc5kXJqDK3QmYeMc2NfHCQdti1Au59mA55sS3Rmo4ceL8CWCmJnuejreLK1pk",
  "key5": "3wGfdeCQKgzPhA5E8Cswq5S5GqjURTMs5jnihBtwvoS5DT4fUJsXJtisfXw4WhyhcMLqY4hSVZ3QyM6TqmNtG52B",
  "key6": "2ucHp731Fs2d9oQg6LNkKqaQnPPWvVJ1MHEcDmjTAaHyHCUxPwkYBCHRgpG8mnbY2zxA8UZ5MrQTa5dRe3HHv49j",
  "key7": "121QG7LQgs6X991QLLsbMj68avAWeFdNdEFQcVa5y8Cp7ridhjtd2Yu2nWyd5wwv2VR4TLFeyY1TPcq2AbRdGzEf",
  "key8": "5Dcz2bpwhdfu2mh346p7w3HqNboyt67PL8qiTY17pFMmjNnPUi6f47rYz3j28hQeUFDNFS7USLYvjmnXvn4u9kBU",
  "key9": "4zXuD6WnxMi4XnG7x3sApb8SPiY97qFg4HDxi7H76wnUnyK1C9wW82SB17LVR29HR4npvJYXL4SGHqb2hvhcdcD7",
  "key10": "2eij3ajZ1Z568uN29Ebzq5beGufHsWtnR93jkTfG4yRArKyp6JBjMekTLiNGJbLgSsTLYF6HAGndHoe2VvBAqqeW",
  "key11": "43YRSSvoAPUk9MkVNvNYc7H1CLJiUUGpZmq8shVZSeTQm5Xuk8x9TYdpMgQpkcL2JxgQnduNDERFFrprzruoNx6M",
  "key12": "3K8KtoPkQyNqZeuFSbisYoaagdrjsPkGkdeh2TiEQ4Zdsrs6HANebagupm7qDH2mj3bUvan1hWcsnSr4xy5pKBrh",
  "key13": "XPm5QdrrjYVwrvWB8ga6fcytEJaNdp9rzGXuRz3RFLCP4UQZv5BKZvSgGZg681h5CuYBBsMpB6Yk8T7nnDPoAbj",
  "key14": "5ijGkzN24678tRgGcLCfu1RpGvKQFAX3zKuiXQPAiMs4n5E9oHXJSbtcwWf8Emurrj9MUFj4uwTBy5NroZK1xgag",
  "key15": "38LTcvRmZxc9fv5vK9LTncRF53NxCQZz7HvfkUxkqGS5EVUb16aapvfLhgtigj9pDsNSnpDKTLFrd8FNUtLUBWJJ",
  "key16": "5hE9pYTZ5W1v9NLL8a1kz4HoqNtPvqxb7BdDKPg8x4bVN883F6jmcgmw5v6YAkbSMCXZpiumWb1SteE293m9CWYG",
  "key17": "5RfeYhBufhfMztnouebUL6RQNqtwajkce4JuFwe3iiKUnuESgff1BGy62WsUFyQkuv9n84xUTpBoAqNwoLpKDVuH",
  "key18": "6Pdo2Ab1pxLYuzNgfnrZfPEWQJerJTiNLBx9FnCYMZeCd8kWCVQdwH92xiTWQCumgnbdaiCFGhgVuWMxQQ1eYi6",
  "key19": "34KpUiiCHJnMUTdxMu3PpuZUbxyXt4dTHAHnPVA6CDfg95wNm93Np1Q7VfFZ7aNiWgftSRSLjB6dXqR7U9xR3e7T",
  "key20": "3WgyJcKD6bzGCeCcxkKYvMVhCe6GTdm7u644V3QZBcctiK7cLRKxRfZwnVm9jiZSmRHwXi6YZkDR6dCR4FHpR818",
  "key21": "5yT4m2cZJQMneKMyWwmjXi9gv4GqovzYEaoaxreWNwdKjMTcWqsu82eKowsCxxYax33sq5ypNiAynJ5rkiVVaW9w",
  "key22": "4ynoyw4cL8BHcCXbkfZMxDExo6tCLnUEzweWwL16yfxpA8UmByBoN7sfxKS5gbebjKhN8v1JivdaoEzdMXxDaK5N",
  "key23": "5weC2EL6gS7w8UfTDCoAJ9EqbAAeUJzhUytfY5JSLcZCa3jwFHsDEac9wWW1STeFdU4RfPG3FxifP2KdidyxU8oC",
  "key24": "2GfEcYqDXCsRj8kd7Q1XS3rHpXU1NhPtSs798LCbf56R4jzho8bdjGcdyzohrHXZ7EqxSMqoWwabdaobvvgT4zfN",
  "key25": "3zJ1wW6seTaAA8EvGRrt37cdLBxgxwkg1P5goQvzt7wXRbNuVKHtZtTU4ELroBdcEMBY8NdkvbDnjSPZ3qAiSBUf",
  "key26": "amAj4MDMT8T9Ua8S1neu3nG8ocJsemLkwA8M56mAmd1NrmUg5MNaG7EuqrVQ4aqkxaqfL2X5jwtApnd34XqSowJ",
  "key27": "42pjmYxR2MGyyXqhzdygPUsre7WXGW9djj6DJicySEEpGVT7UkXBq42kCDfXCg4tDSwYyHfPL7aUm3VT2tsaUKDi",
  "key28": "2Lacvr1iGU6aVBd5Whwt323aGZxThtszEkvauHkXSCVNT7RjXx1SUWncAjMovDyw7XYNBN9NofXiReLTgz3ignEL",
  "key29": "2wMfBReAp5hxuEu5HtAaK9uhCVbG7LjgdWyTFuDmYBu6piBogM6hxumTTRamo9mvY6z3H7o6GfFNo8CH9d7CFrNs",
  "key30": "UrhyyR9YiYTLsyGYkak3GHF4znEJNehSjYX45AUxKxNZBRK5rP8DhpmoV3mUm7xBiVQxK96NjpPKJfXdDCBnh9p",
  "key31": "2qf3J5U1RE7T4VLNf6516MHr9PH14gKPhqSaNBBLPxcFA9J2pw8kmh8FVGNGwu8bhwd52SGTaV5eDmEvbEFjYhzC",
  "key32": "A7q9waC3aW8KH1oWaqfJaBiVP8fh8uq2cNzTdEbB2T1CB7A9thSNG7XZsK9Er4Fhtj8xURzd4vNadTbNfYTD3eg",
  "key33": "AVhk7ZTXDUo4qcvJTntfrn6uaeL9RxEf3mFHqPYPscjhGRYuWhMDT9rfKViGsdE3DjULZxsgckSvNjV58Vho89r",
  "key34": "Nhgqv8NfPEsHoLCwuo3akyTGSn7QjctmFSNR6F1w4xdf1gMTuaQNbCbnVwXFuJBJ6r2uy28dEe3KXuSEjA6rQ2y",
  "key35": "32SgAcHawVgzHcKuoEfHBS56fj6KVk1seogPgdd4wddnTFCJLBdoxAVzemKQyGF26gUsApx5H2bi9QxE1JoATFvE",
  "key36": "4MH5pJ6hbQ8qWgBaJHcF73FL9d13paXSQuur2t7QW2cvyxRsLRwvUjupVqe6v4amdy45s3sU4VugGdUX7DUg7y39",
  "key37": "29YF1GrhYXUWn9H2ebtL8f5Bz5sVTZezcYsP3Uw4K5GGABWTp95jicnq8Cc1P38dcLxDcbEePgMtC4GtqBump9vT",
  "key38": "bMNGXeXqbF4Z4iPpFgnBBaWbZ4UPHSYGAnxRCuak77ESLUiPA55zrhuduS2fUeJnA1qm1R8fk4orHM9ptLEA4JK",
  "key39": "2JbNavubqAs3GUWCG18LiLKMn6JEsaApgq4F1zH5swkPprF75UyYtVQKV89crBoNQg1FsonvnkxhEq4wYBJbq2Dp",
  "key40": "5Xx8DDE5tf5pqqrPABVCq9CusbLNwH3yHm5tKhjTioezrG1iw1CkQxn24quRznRBvxMCeBZrjcG5ugHND4GBbuDJ",
  "key41": "5VCuwy3G9mTVQ2d16nKdGjSyrbHbiFLZjxY9g47v8djCR3XjaKiV3jZurs1nwb1txWgUD1cojZRVJ9LZPhmuVxPM",
  "key42": "5RFgK4pLVVaH9D6r8WyNT4QdYbg1SeUKnURiWmEVX88TnzxJtSFZ2kSgXGbCNpjoVW2jHb7bgXfbxwhGyvMUudKU",
  "key43": "3AecSzRXVAkmngx5eQuhir7iTLm7zTgPMLDmcjR1cVr94UfsyFEvFauuwiZfhbG84H2YiLUxu3FC7qYbxmCy3GC1",
  "key44": "671xofaJmHLXaXcTU9CE9bVAcaV7TsrP1Cp1EAtNrdSmpykg6FgP96SnuEMa7dV1ptWnFeiYMQtTNJF3pqzHbqdW",
  "key45": "2qvgUgZWGzBUKscjTpBDRKSugwXW7XiA23qRPt6yQbDo2z3qERphhvRqonsdWnAa5XpQ1FsRDQhB7ZJdayaDbVa7",
  "key46": "rPVRLjMJiTjV4Z9s7U5NV16rzagysJpb7gSkbdbyyaz9s22Yb2sFs4a59a2XJE2GtX7nZCtxBXrC2rT4Mih3eSF",
  "key47": "1WPtXQNqHTFP3aLYVSaCtxkNYX8B1bshGq72SLr2Ck7yU7NGkwwzUpGN3vomDL8ZGCkLu7sUeqzXvyL9bKzTXLB"
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
