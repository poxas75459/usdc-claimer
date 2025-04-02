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
    "5u9u29NiUuUEE5tKkv5N1jobBzcqpPoMmmp1UQF7jDFxw2zAfn4qrvmKJjJokZbDtAuv4qyKW3qSDH2AAncgVG3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nGf1HZbFYucTtGsAcBbMcfUb31BMYRFe9TYXEkF4zHzDf58epT1pwgNPSLzxginJcE1w7WZNbqjuvpiRDjosvL9",
  "key1": "3UTrwi3SJgUQXULT1aEyoCna1kT6mS9QsQGucugKFMBLXFFW3g2RJsBF5qJn4Nd1BBcBTDRhWytMMDuAwB4fVo5T",
  "key2": "4i1nd7WLvNwnJHmmZ6PPXpp3ZMpbRkFut89ZM9u9dbmqiGbrzQYVaaQrjXdWigEFVpn9zUNYJaiJ3yUyu932QuwE",
  "key3": "5r7u1diuNi54UupF6v2FhXgoJVVQ8stNKM2jQiZ2E2TkNBApqa4ydYJQNPQc6PTx2gCxJDAhpXNi7tbCXS64W8hA",
  "key4": "4ej7mUwk2sJSeiCJtXHmMg4eVjSXz7SGCxygF4SznRNQxT18SgHXTUaZgwcNzkoBHmSnqAitsf4JqQCMxpeKicbX",
  "key5": "5tzCkh1rcVEAumiVuRjs83SakVPH8qhSqvVTh1VvKb7XRZWoHjCF7vz17MuTFh46XZC4Bv6MPLpn5zywL6KKXcpZ",
  "key6": "4qs7wNYp4WbgpYU9aJLhRs8iVnZzPzmk8sj4txxZm3ELuEPk261zTzex7RL9fwDHw234PA6TZA9Ji7RQh5fwZ3eJ",
  "key7": "24mxrQVNhFYr1BQUW3RfPdNjv9p2R8Jt5m1KRjZZ9zWuxvG33N2gQJkUJKYYxsVBSmM1tjvtsWLTMRHjYididU5h",
  "key8": "5m9bMSCdtbn4o33DGpxtTzTY8F7z9F7QaZ56QBxMyHcDLdAJfgyK4caoS57ZixEXuFEDfYY3w4KvDn8kuEm4uVW",
  "key9": "3E3qX6w9M2AjjgS3EvbapYjbua35QSV5aYTMU4auu11teHKUfp642uEqdVgxtSqvYDJ7e22x8BACq9TmBXrfmRRv",
  "key10": "o5wCJQS8kr7pTREWc4H81Z5Um7zYGfX9ssQdEX7cGvgw7c5Lbu4ik2VxDTJTnXZCd83cnAjyHAFvu6U2ToiQUQp",
  "key11": "4PXP9QDSjqvwz7qZMTdmQedX1UDEvCooatRdKSYu3xcfk9wA4gAF2DHUgSGEHDCUmggjQcGxcb4H2PseggFfpgSW",
  "key12": "iPr77LLCWnkY58S9Kd9U8BdijY9bdnsbnpL4Bwiwpw3tj6cDgSU1DHJJHWF7Aq1TFFxQe8fUJVnZunyrMJgg8qg",
  "key13": "5uP9zp7fMxEtSmtDbwUBcuRvP5KM1rP9bsGP4aC7GDV8iTwYUzKRfLsWehDJ7S6p7bULyD77DTP5AnyPRQKn5nkp",
  "key14": "2cge5JyGeqEDW5rTSqRSab41hogHLHCzwaXKRcoVHFkzSd8gqhuCzCnVqxi6EM78xQeYHcL5kAsZzx7vv2US8TGQ",
  "key15": "3N7YHiR6Kj4zWX9FLApN29o2XnRzwZoMHhqLRvb5LPMaKZ9jCKdanYb9Y9LvibwqMEQdhS1UvP162nQXR7gSzgYw",
  "key16": "ZDqW3ZijUgRMoM9jUzzYv4SmSqwJa5AMDAQUzv7czGsumymAAexEuDCb5wWmuHJcg8cQhJN3Y6JXZMKwjAV2jj4",
  "key17": "2968qNJNAAqyy85keG9p4qHEzTWmu5NDc5axW3fSpUf1qtA3u6Vtmwp9LKpt9E6tkdzdkDaf6sGW2fM88o7KcJtx",
  "key18": "kYaW7yW5WXSyDuLzBXwFtcNq67DYTiqeZrdSxZvFMEB8waZtbuFtwDrjhPvrmLnYfJjmzk4nV1ypQMNb7J7PkeC",
  "key19": "2KyPuETbj6FdWorS8gBdoVcrjr9MHUqvYXL6mwtUVmgAysA2LQEwxDhHRLXszabHqpbdzhwjwkRgBYG7Wu1ojLd3",
  "key20": "5pcTuyQYztCWSBsnsyGUEC8uYtK47XH2FX91ngX7ZdpePjhrwwkDaSc3LgFwmk6FjSdVwtTGWEhzpFFRSodS4FPi",
  "key21": "2xYKjocqy7c28Ktxf4FKADtJofsC9E73Esk6pXHhqPc9HbW6iMNf3kidCZyTzqoTPYfZ6chJRULH9nxc24iC5k5Q",
  "key22": "4k7XqKHr2yC3XnDqPoEEUzL8BgwxAuyLGKLtBinKJXc3QFdn9SCQhUKJwARocXspW1EghZNrLLDQjqeYR5tKXx1U",
  "key23": "5yXPmSy4zc6zX867JGetTCQFHXs8hFBMBeUHs7zLFqbFjMFbRpo1mGC9yV4D4pGv43rmZomwNpFi9gk1sGwKjSQs",
  "key24": "38affEFVXz9YUKaPqxEt6u2Zzgsd8c8N4Tyzp1ycpHznq5cB8dHF8NgeRX6N4ousrjoPjW2oijDopBJLqmxGL4sG",
  "key25": "4C4mnTgEpah3ezaYSDmHUq5p4EvSU92ui5VHDLhfe79h4QUKJ3Tkfgvz7dRdP3oDG8j19oQ618qqEp5jLZmyb7gc",
  "key26": "ExgkMJ44ZodDVMUt1XBz8HZuskefGWMV82miy3YWoGmjvWn8y9bhw276QS9CooPF4omouccZosNEZQeyGuGCLis",
  "key27": "2N6nXijZ91PXKNf8giFQDuzs4p2m6UMiLMvdJsekC5LxHDKGiBdVQJhsrMiLMjwE5sEaGQ3VuLhcCNS6vHj1pQrR",
  "key28": "DqLuy5q96WjQewvERCN6m2UXNBfkpLvDxKf2FmwPF3qn2ccjEf5BEZBKUVZK2C52T1QjWjeaH2PR9Zeg9bkzCKs",
  "key29": "4NuhJKn5BGAf4m9ypp76JcaKD3tHd7FLZywE2edQbEQ5328K9tov6vLRwfRzt45An4ZM6gsxcbQdCn9d8TX4yw8Y",
  "key30": "3et7K2grZ4cPASUJYtXhBprQBVW2Qr3AtwdQDB2pZV84yCAfganVWG8zPkJRSpDhGRX6JZRUpQ9uhJezQjsKYP1v",
  "key31": "457SLHtjjN4Yo5eUojHPM87XZ3usLrr4DBRSsQZb6EuiNnuYzGvRn88bPavCMMqPnffDnNfyKaeSRxwwZQXZZooN",
  "key32": "8D4pzemciU4TN6492pJoRaTgLWVZmHgMiXLWgYCrZ6cdm32PKW69TrcAZstawdYT8QhVyvcFjvUDRyXjhMsmHDZ",
  "key33": "2wbvQA6LqtUSsh1XefktE6NcGk19DUvAKE4aA8eyS5AroDtH7jLsWehJA6TLQXES9ZnioWRCKnZf8aGJFEzeWMzZ",
  "key34": "5L88LvCVgj9FnHxiCCysawQC7Jroer15Kqqqr3SYPFc6HHzuTL2MY4gGuorjwGMNci33ngrQ2vSBeJ2KKxEuDW2W",
  "key35": "2ayv2PCCQY1XvLdZVyWmpMNjuEAPXcBnKXAWaVKAsyU7ihKBWwKbV4QmfPKcwg8NGFzbjfyrMcGt1uozXsXiWjnJ",
  "key36": "2BsJrACdwSmnjE4r9ouZZxhhHuw2rPXbBu1QVCQNMsipvSDysjKFbirv5ezMwMCRJYhSdeUdLNJXa4aLFj3vo65N",
  "key37": "4Mxogq3LUvo6KFLTUtJwNWnk8Yp5nDtEgsTvFfBhGhEV8nnLp7J3S7P6x1BaW5Rz2piE1uD56iayuxwqWHappKH7",
  "key38": "41SypmqLRqmsTcbWTdRDBBfXj5Q7i839UrzPqRxgDFjtXnTHpwoH8LWEMwXbUPPAddbHAfazsFcCocnDzSUSLGoe",
  "key39": "2xMvmj5VNKLHDkwtAoT64r9E6RfwHidoPwAcKMHgAbYcXwLRa4siWFBzFRd3ZW5TniQT2ChbR6GWNkUx7W8zfq9k"
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
