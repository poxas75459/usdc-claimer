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
    "2MsJQ7oaUnzDvaz7kZA4WeGeSijbRbiveArQdzfaLbuRjp5xFRpTLDJTLDgsLjhsxGNKGTgSt2k38gKjB17AiNsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TytZHcBTmzTFyZy3b9eY7SeWQLrFMxDXsB9yW44ksazpBENQEeVd2uZvKRshFj4NRtzS4BXtPbXnzHVKHdUvfTk",
  "key1": "39y5Lbfahgawws4yEE71jJkGUy51hSdu9PkfCdmNn8fwakgDR54CU2RdNVBwatGLYW7D26LT9mdHfpLNEaFnphZu",
  "key2": "W3xJbbbokgQW88YoPcoHLZTX7e3kwaKBaF6QFfqi8KpybNq3u21iCxGWKjqPhVVrTmJ4VrcroqvsqTKLM3yxQyd",
  "key3": "294zff6DCuuBmxqYki2BNA9nE6Jj5eD4BAuzRW8ByA93n5qfFVQtN3jzyssjMDpkm7t7mUTR1h6oZcgxFeZgBuCZ",
  "key4": "4KkegQDgUw9YrxHTsWRT4F3Pf8nQHzH4E12eDqdKv8QrraXcpXubidp8ikWz2QZYGPXk8Ya3q8HDre6JXkADMB23",
  "key5": "fTkYKBj2M4FSHj9spwctyYDuawL7adz3h3oU9pfVnzmSU1bEyPszVcErRTbY9tLehdJtgn2hDJySn37TRz8bA76",
  "key6": "3FcmEUCnfuvAmtjVrrZ2gimoihvhDDyq9n9QBmHaT29wqMgYpus1QBo1EVPea2u74y1Dhyxpt6BtK5eT3V7zKCYQ",
  "key7": "3HXKZJiXPrSyWVNFxUwTJj1mJXiNtdibxK5DmXHPKXjnGRy77mnEQhH4zPSQsLxrZXajYpLcjWXGnLqGTqpLCgiT",
  "key8": "59DUjqMFRfrpzRS3ijHRAL8Lrf2NKmVUd7Ngi2wPz3UpCmxKEd9cQEZf2qNXc9DXdYACHhZV9Utzs3uSJfPZagHQ",
  "key9": "2QV8Ri9ZvULUe9pb1pg6wxunxnQz7EmnqpdtSVZoJrU1jQMJretVBZ7XwFdmwJUuSNWt9rNQCX9G855PKDbSLpCk",
  "key10": "4hmeUhu4R97myfeyPZyZhN7fYfLd9qqWdwTGMeTYUF7fYH45P71pVF3EvdKvtPR4wBc4zvKfHaAD5TaMFVjSp6fq",
  "key11": "2HWB2qY8Bj2mY4FsPcQg2u7142UPvcWizNxAyD9hpfdECZfYrhcjsNPbRSLaGCrguKzNfipb2WYuCZfdJvUx8fhh",
  "key12": "kufoD8cAn6B9LKSD8xWBxSxyEZVzHAwgXADaNJUuip6uXsiH48hT3P2cA1e6gwYBYsVX4Bu1mwt55koJUJ6ss3M",
  "key13": "RXq7Y64Vrcvauz4DPUVbNK75uzJJmZdMJ7gvveEvMMU1pWTFshTbpiMoDAEDuNA9j47mJFACUEZWoiQ452281DR",
  "key14": "wG3UjtyXrXuecfDwPBg3NRZ4vgaUMTEWUg9aJy9yRe26rvP6b9DFLazkSGWLqZeTrZSRBbD3fA1315UF7UgbYV6",
  "key15": "4dURrUezYTjtwcvdbuBw95HfBxrszo7HDvPsrdG1js39LEL4bKLpcGHKUWGk6pgRAKL39GsMXYZMUZMx75TAFDPA",
  "key16": "5cMGu8wceW5bQvC2MnvBBD7QQ5bpg4bB22Y35QMgnTkKbxPmudqyfQNG6DReVkqGRDsf5x6vQBpnso2ur7vox7Fw",
  "key17": "5chvFESe5nB5vYVwfRfTRKqaijDvJ9gnMxjNyj9TJZhn6nrKm9MoEZyUEoys95mrpHQN33Na6d6DpfzpHDx8MrAK",
  "key18": "4GMXmix3xvLHRv6AufajyRUvvZJDhZH4G61cRm7JNBxQw19ojdnqb6Div9rZ7QiPy9FxHoF6bBgRA3bnWQWxoDNY",
  "key19": "4ekptKzPMM58wqi1ucs7jaB26FeLY6Eb5naZN4myR7wctLBs8WXcqjTx1UswxACuqtk9thyJw1Nj6DZ2FWmBDBPu",
  "key20": "5VL3ig3i3HWa9LvPX6kTHwN9zCJSj4wHKfGz5VmqK4MSLhJ1RMMJNjmumQV3fq26w8FAcJ8Hxm3epsh2T4fFK6xa",
  "key21": "hhzfqBeFREmNiUko6YLERT4jV6fGH2nUsdyiwv8dEyBf9hdd3oHZzaXzxYMHvnrD8s4d6pv35cwm2puy7Jzu1p3",
  "key22": "2xuT21GTcs2AEhf8z9EbBcbva91UCXVuXUhKnfHXKS5uJcnsci8qL8v5PsbGhpfvsnHUTUNKsEUsKSpsSsNdRgij",
  "key23": "4qbmFpzDSd1apcke6MPAWaeYyQbhWkmC98aEnc9YQnQ5xApTa96UwRzdmkenQUTHa1NEpRcrshhTn9eY5trPj9rX",
  "key24": "3TRwNDYUZipzF8YLfoD5i7b7WZTqsowucNy5KQzvHkreoeQsB23HMHMLb42LJoRYryZ7oXCMLKdT8q2dqAjqp1km",
  "key25": "bJmesS1qTu347Xudm8Pc2UCkXibwQKRT4bEAJMGqVC7gkNbk3rzg7N78HG5U3N8oyfYAV7g1Y2jaF4rdJCBHALZ",
  "key26": "5ov2faFfZAk6UmqwkFcEPXE1YkJvBnZzumR3F4iJ3FvRTP8uSmwbZK1zkzGqrzFvfsLMUmFVdCiV5MRP8DNr3iFZ",
  "key27": "3do9GyRWiTnxzx4y2ChVfCf9wkGZShdThkYwCn7cKVvD3uRcMp1PT4W88Kdd8g16n5yHWN2wnf7z7TeZgvtbHZJ",
  "key28": "5LSA4Q2evoQuyevJ58UPRroYh8x31LiSgW7MJfQ3mmRRo9oJ4hNr61kJfD9B1skdNmutQ29d3KE4AqNcSLZkZCbj",
  "key29": "9xAPGn7NaDWbpi9wKUWz4Pb857Fp7MQE47A7WSUBU7gph74zWR7AN9wjo56mmyZUk3YciEQU28K6uysWoGMqKYo",
  "key30": "q6sipYYT7uCMD6k54AewGDRcrXf7CEcMxh8RCiDe8GLPEBRzSn8c1cTZT7b3T54dcLnLSgdz2WYMymCdSnqBVyJ",
  "key31": "3dg9Xp3fRx48aoQVMntS6tQAZdmgRoDGGsPgJWsUDnHMmyyFHPfRgA78CyvvzyxWmMze8WvdE8LMq2Ek3wGVpM8a",
  "key32": "3Lc7H99UqiPg7pFZuhnY5tYykpQ2U2vfFxCugtVHfuAd7TsHQbjygkcLyr8QwvKeHoctgXCy1MMFtfM5AFfPdhKF",
  "key33": "2taKzRzxxjAh3EnrRRb2tuqt1Huc2whXMJgBQdM9np6AV8xRuBdnSiFoMkqDwb62bx8fDo3YihPgiP3aFYvZQeAM",
  "key34": "qUByQV4NW9NrbWa7PAQ1fzWVDcKqUjoAjFiNQ1Vwk3EeBARM8jLf1JQj7R7UhhsaNeKFubE9NJu3CgJGWXV76Nr",
  "key35": "2yWX3xdGPtVBhpA5v4S7whwPqMvibCkoWpQdHXMF9BoA6HV4PW5As7Yn7E4RdSu3DzmWvbEJf5DjZDKK8t5ZiDi3",
  "key36": "3P3V5khNTLtQe3nxy618cZ8ddCUnFSfNJsD3hci9uShyr7wiaMW3nMmViuEyd95s4cvdNk5MJXHQxZggcqFKH6Wk",
  "key37": "5kATqToCzuqH1d3zDLGoeuACUsq3juzCMP5Y2iha97wYshghGjAs6YS7BURu4Y5hQLo8kZC5jTuEd3shC8uWbud7",
  "key38": "34HHJa7byVGBb6dVA7juaDojVVqzGLebcS6cr35kPKXbmj3bHHxQpaRjiNG6NLx1MYMjCfZ5aCYeyo6nPrTzi4Ko",
  "key39": "5YB6UcvyREagcJGFMnj9B96ycpoBdLUN8zNRZ8Z3oncRQs29yQ1NRwrWRTaGv67y2iS9P5d2HTgNuETg7y3sD1a8",
  "key40": "5RSkj5UisjJUJ1mdu3S9hb2UYoAziydYFbyMWQwt2Eyr8knJshw2jdtzbkfURMrU1S9VG2qckv6ymGhMkmN1ntoQ",
  "key41": "idARVdJNnvmQNdsEi1iaSeJEBAS9WwainHyb5QBBvnumtfCskjRRigFZ6EAC9QGZwRfAqTRveyDv3gLgVCkuS77"
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
