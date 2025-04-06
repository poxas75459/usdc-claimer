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
    "39SDd9y98UYNZpwn58zSYjHUs1YMPf1Ag8jjh3Bacern1LYGVPGMkXPC9zRQH1sQbzawaPzq2EbcTK7znvPtQYoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4musM1xUrM6GDCsu4o2oxUhkUGw8aQS7Q9oZS8t4EoPMRFqgyXH7fVEBfPrvuvScSmRdWFy1zF3YALH6ptMsyBC6",
  "key1": "23icXbPEKTiSJnvGLa981c6Zt4L86R3th8copuzDWYyJhrDqw9ZRvizuz3P9ZkwNvguTZEkSoN4Ly5Pcj8yNafMx",
  "key2": "3kdzQ54xWHwMNcfopUv3CPe1ufZ9NrppQLsusUVgn1bEUc7gMd5mWjn8Ysof6FBQHRyuXx963v2tEFYSJiBFDVRo",
  "key3": "64sQuv5uFFn2tmZykYMCdWe5SeEgjP3oVA5FVKzDxFcv82nQ4UnXcr8ANNdMP38SqzaMmzsGJwWSZVvip2eungVD",
  "key4": "2LatXCcWHKXawWpmTNuSeyBSRKC7Bv2MCgR4JuW2tg44Q34WhaiUCd4YJBdGq41rziedrK8mEDGLHYH77voy4VZQ",
  "key5": "5oj6rYTorxKuxwjWhnGhHhHckbqzVUxx4aNs7cYgu9DAGbuietAi3h8Z8cRsbbk4CfmBSGxpTodQFqj55vesCCf7",
  "key6": "3NdjfvXy6P6JZJrvekgcv7NscbL5bS2vtm1zofWNsS9Ex23ruxHeULsof3Gk4K9dU8A3tkgsC1gXpg3FtRLvkEtB",
  "key7": "47ZQhbFjZw4z6aYCRaF6n2GqwKEyADSeorUHNatZcS21R5k6d5nsWNTxwPWS1gUorcrtqs5c7jSqattzHyksDnnn",
  "key8": "4ptnpDCpMZRhbXuMzYaGtv8tebePgPEHpa8gfMzyoHZ6YYZMeBDcxo8X3AvPuka8BKDanSgyUGPWKNLVPvRBU6nC",
  "key9": "2FnAXdPyVvpVv8HpuQ2xbs9MsorXE4J7aFcjiXPq7s1iuMc7joPHs7Znm9BdnCAAFuXEhjYBSgN9bpFEUDriUp9m",
  "key10": "5TvhiiuAv9J1j5TSeL5b3bNWSnhcNCHpLdNBEs5bvbJAobUa1jN2NBUnAJWNXvMMLLXonymheZ8fMaNqYwwxNZTw",
  "key11": "LWs9SCZRchuhZkDppGVi1ZagTG7R8H9coiGqY5tFHzZMrp3axUm21o2nPGkWqikpzx6K9fo6iSM21xCQ7YCMNFx",
  "key12": "jk7hfBv46oZuwFPRf1LaWEvxQdKWmrzd1iZNwMiEon6n1Zn5JgbikqzH4vmvw9r3u6YZnTAJMBz6WxhaEsAhHFs",
  "key13": "4Tya7hBCaUtbW2tLXjsLTpvqfcG3en1NGcfb4u1kxActXNafnMk32qcWrYNK4bBc7SsH1D3x8qr9z7x4gx78QhVD",
  "key14": "ZhmT9U7c568wHPLRYQk6uM7NQaMs9Wybu3tjTuL7W4RYpTPtNSqKkXpeMACfde9BDYzNu2HAMPmBFkEy6DyiQaB",
  "key15": "2dEgHrayPE63v173o763972kCW9G9EgmDE95RTZpaPt3GBt8LvWTiB25fZsKt2ETvNTcSHfkMn7tjWz2MY9mWizY",
  "key16": "BaMD19t6x2CgBFncmAHMWhxSwoXkMfeQHUnKPnXoCRwhKW9ArpShLMfMKz7W4QCvDBPLjMXvPSDj6BpZjXve56Z",
  "key17": "bWs78EhGzNnh3SoFsyrzH95HqnTyB74AnhVfaL5pCnhWmNyaEaZEAN1yXa2zb3dvZ56am1FaqB2cMs4Y7DQ2crX",
  "key18": "4F3WvXYW4x7ffTDnGHdCtEaJv1YocZTTZrydouT3t3SjTHgGVA7xWj3bAsprP6RQgdz63jnPQqYfdNQ6PFhJa7R",
  "key19": "44MNpUfuTKkUdyiX2FBysAyLA4MJDF1KuS9WumP4RTCKnmDtjQi52r9MgpYpk1vDx5wsTD7NQgws8AR9KNQ7UqJW",
  "key20": "ZiHRyroGeDunrcE9NgfqM2AX3Tn6VyyH1gNUsLagAShXgPfHj5NXFWZQENJTfMqjBWbrXAkcePy3XptCVWaRoX9",
  "key21": "B9aASoCPsn3vzMS6oQUvrnvuqm2DA1m9AZPo1gV68zgNpL9AQUxp7ywC6geBFUCxqZyVZEb626Gu8mk5EDSwydK",
  "key22": "x6mgtoUPJpdtB3TJsJUx7A5tR2r9nuqmNJT5aTQ8QaoH6U44mv6beSBD15ndk5cDtvmAk3E56WBtTxgiDCXEUEi",
  "key23": "2Vi91a42FPchokd46qfXaFs49sJD5e5VVBrppZiHiF17Akny5SZqud9cLUjGVQb4EyfruDFDgRG8VZtLwwagnXSs",
  "key24": "46depJM49dMHg57Jgw5ZaLortWkat2KHcnAEyhDJJergWkhv8McMuEx6bkYLj81WndMyfBnvoVg4qaUja4wzRVSm",
  "key25": "5EovAqCUqwwh7Sk1pA1WwbKFMZgfQknLuuc1SmtZQK9MRVt2UL7uxTZPkPUe5hgr4AEKUbNLcdANuRxUmkotrFMe",
  "key26": "5fh9ERyJ4H7F7rD8n1m12g851HN5ZLADJcU4suyQvx9jHj2WWTJsSNwUN1BctdjDgWdnoNqHdPbvkoesM7yJPPZu",
  "key27": "3XnMVyo5eUaaiUufSyeigEAaxjXSZkEEFuXSdQvk3vz6kbj91M4qvrf5LobbaYb3eyvxPYCZU8UEcN8X1GXnHSL5",
  "key28": "678jy3LjbPk9XN4cHmxxHQrbGUe2ssyWgC3ZRLDqaCdkwkrqBLd7t4dnDEvmEJHLNz2iT3Joj8RFg8wQMkqCvXge",
  "key29": "qCZSibjXiM9MXCEq4xT1JqFBm1i5posuBz655KZxWvsCBzcEGav67XsVgoJCwEjHUGX1YMN7kZcgiWyw3Aq4N3Y",
  "key30": "4fv5cDjdbKWbL392h9wAN6fhCUbSNcXoPhMHM3CeP2hbe42L1DPjJ55fzNM13ydEwpJajknDNmWGsjA5bWtBE665",
  "key31": "2oqAuiVNcUM6n96NyY2RnsnycDmtzTTUBwxRctgKbq7CwDVYGCx8QadUyA8Bbf846o1582Md3Ab19uLBTdVekVwx",
  "key32": "3QMRaLN56P25oNetyQtHRmK9vLU5dV8CRujJG3asa5WzkLkGgwFJMFfyub3nmFwEzJ4kBPBtoZr2MQZGGbx7PLZH",
  "key33": "dqzmjGNe1aBSvXqvbYjpZN2UFpFfTZWEo5qtD3sS13DqhYKHEHrjaKPq54EJTSK4TXaFGJqWQKW9nByTcdRKSbf",
  "key34": "5nKV2Gdubuk2BXSkAHdjA4TdYy2oEr5SzmeJDYywQwVUaiLBKbpw7vpyW544tdSjBfix8hB4H5JZLhExVjxwji7f",
  "key35": "5zfAmoSN6xHcBTJHjRn5DFaZmxiQ6oUa4E1E98Zef1CumkMZFf6K3xEVCXktaFmwqVfnMRqALwyhfwc1ZEB5i3TL",
  "key36": "2DTpZ53WwNu4UjveFiUQR5JXQKDz3Kw9aUNwzfJ8iD5xUnqa8JqXw33LkjVYpguV6pCSCY4wgMoCb8DfSLLpEr62",
  "key37": "3dWW5kkQDXKJkqsKT8A7zJne98E9fdkfz8q5bbbQK9cCVuSjJn5xG7cr2Bi1ajK7xaQxP2E3n3cs5KC882oBTQTo",
  "key38": "4teoCDLtX1HS8iHzCuokNAUTNhihDyk4G8zsK2NgJZCunivw3fwQxnR12819gJQipRWgbiz6Ym3RGa4xyqKRyU5W",
  "key39": "3jp1uP1Zwqu8FyNa8dR3EMmMwtvSV4YoSFUwAPkhKrv6XpA2aAt6qhUkULjxFArbxcC9Gtt2wk4ZF6eLaUmnk3gv",
  "key40": "55a8CnCUfDYoEZyicSAnThegVjbTcfzDSE495C8LfvMw9Yg3nUwu1EUvHUZCRHcFrnf5mJb3pf3eyMxxcfKkPwHx",
  "key41": "2DbuNFAL9QbW7AQvK7hPziTsEnqUvkZkZUEPzKohfthKi12FRJ8TPZwCz7pFnACs6B2CiAbV1b5PkccqCfm8KeNe",
  "key42": "GnQfKiDVtd59ShwPcm8cuuhpWioFe5gbrzyy69YmmjBfGpocGke4KMtuWEpEUW4jFF8ssZF5uncQgQDh9ujF2aB",
  "key43": "3KWW2SNAGmNXWSuZv5g7doXNXrh2bhhAkNQ4iXx1nNdP4wgN29xt8YaFvwjA3zfgJk9fnBSg6Hi1qmSN3A4PZbto",
  "key44": "5n45u8zMSQcstJtS9ntM6vpgSeRg7hQw2gQdebLHVkkkj69EWMPbhmzEozpW8KxLiFYdfjr8vqAhVJAuYrDrveww",
  "key45": "3XMcHFgHBePbWdFLQESRVZgWTcni6GwPRDWLCQ3UeV4z7M9RRKQgeUM6Ukp5ByG5sS1WWWhMNps227SgXzh8NVsR",
  "key46": "uY4bbtTvFUZ6CHa7UEJM56E74kNUtoFZxKWATT7vyvVp8sL92a9aeRvhaCFetZG24cqcr3aUm9oiERwEtrm4VH2",
  "key47": "3LmKMnHHhow7tcNiboUqYWF1B2aUfwyCmXL3Q3ki9kxjzcebwX4c3SoXzsRuzK5vxVfazwYWQGbhjcP3VmhkjosR",
  "key48": "4M4hDU8BEzD4nBLG66KwHV6kwWfR7Pj9YTqg5C29YQ43bsK7tMgzp81KJJzSgDkQjQra5my4bBuXnw3EatUHM4EV"
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
