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
    "4TN7REzcRjoe2KCC65nwbLHPmAY8Z6cbTvV69s42GsnWMXARwwMaKSYN7gMoATxyL9fT5jRmLBn1aaRGRms6BdJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyzxSsbPzuzTaZDRp4Z7VqB9o4P22aWhyNhR8Pi1nWaZT1qL2sGZN5DYtYFbTyqNrkEJRMTUu3M5LQVVQ5jriKX",
  "key1": "4p4wR1YxQvvtLUeX2adyZuiK2wPLgNdrXhuBpHEEcE9FPmdUYSM23ai2VAXYgvNKMZ6ctbC4jnJ6M8kZGe74WsF2",
  "key2": "26UyMge3DeEsKbnUsqcE7jVSiVvnAnjtqp34ytmzTBLoPNKwLtzTciCDujDWjfTzFsjNxRq1TJ2ofTopX9V3jGA9",
  "key3": "31Eo2dJKR8E34AFFKeaeWptixg1SrSMrQ7GhcMgZTY5JngaYAYbJ3PsnjzBVQr54Ao1pDRsH2Bh5gaaMMmR1q3en",
  "key4": "quxuPg8eUFDNRdmgtooxjpPfxwZm3qCpDHzrF2i3RnXuihaAfngwBvxBqsoCKFvtBgbvnWgaNG2JxwN8c39M8en",
  "key5": "2qRKCHKk3eamPRYe2fDxziXPR7884c46r5GHDdTNFTqsNsjbgfiepQzT9E9HQdoqJR3gcGjeoPnykeuzmu2D4r7g",
  "key6": "3WJAH5DS7FTj1E3YQ5oVuMabGehJ3nemoHLPkHToXn7btQqnbXc6Cfc9mKkHnqWqpWtd2b97J16s9j3cnNvDzekS",
  "key7": "2gbgw1f9D7kqFvbZHjE5tnjLxRVN7PSj411uUZw3sSjR2xGS4cmD9xt4kGdAu2mfd55epNa7fDA38RmoyjkMXWeQ",
  "key8": "2AKqs1NLXggNzSy6GgH7k5rKiCNrDWTVrCVMZTuS3g853wfSvSnbbjMPckgLyMpucZSJa1cV8AQcybMcsBYy9DZ4",
  "key9": "v7wuACyBRwafaJN2mBZZxF18CUoXbVuPUdsgZzNayMQU76ULGR5nn2kZ1AeSYUa9CCqQ6ZBb4ALHdAJZebN8h1X",
  "key10": "CJqBKTBffViru2pZ6Df9rGsQyYEuiP7pNsK5dFbufuicNrzPgbrPcg6EV9HD5ceLHQQKHt2U4oMGCJJ6dMjj9qJ",
  "key11": "2g6yyRdYG1eRb3rJ1Fe9uaBnhw4iASzMckT6JdEri1zzWGGgR9TqnXGgMPT5nmczdBSoTf15uN5wDAkxBQiY3fER",
  "key12": "5BbjjaHuwFoJayYJxF5oDwnZhGSDgZajps5JZLBKWgoBj8vZ1e9r4kgzyipwTdYywJVBSDikAK8PBbFe2pM7nATG",
  "key13": "4GFBaZwjtSfeJWWtmUK8i8vvKi8xFvkoPTquwNKoq8aSvpjuxvzGrYDW6Mk8Jpmb5EUyiqzT45Nu7PsJAFuK33bh",
  "key14": "4pgob5vSthY4sEykrBPyHR2QYpAvL6cTmbnUiT9k7RBmwiTsRcWUmcDbvmMawG19y5VYNmk7cLEcY6fHfsM3VtzG",
  "key15": "4jfdw327aMGxi1L32PjMapFLJEKjewvL36FUCXgbZr2w6X2xs2ZnoyTSBdDza656EUtxH7Aj29VZKmD67zg7yad2",
  "key16": "4NbSNujMYcoXHZuwKc1iHWqMLu3hfVo1CfQUDgjnKytzKukf6M6EzdfYMdzqe2H29nXwtdgYZZqFA11y5jtqKzuj",
  "key17": "1PBgfiNi2NJP49AJwpgUEYXpDsfaaK27nY3oK12zXPrjcpDcGtmicNKSXieQj8SBPM2wgDnNN9fY2N7FWTRFuJj",
  "key18": "3tZtsrCH2vms7jQ8pWQiKauHHnen29CgSD3hmDsKVVSEpUCnpGLRdvg32PgFGjWgkiFoq5MDD563hCZEwirgqq7V",
  "key19": "3f18KTcxozbyNhHWsFmeThwhxrVyNLXVD5Rez3Yort7DS83ZUcuCxdeFsUuqDcJeojndLtRxVv947B6kkjYnvFgY",
  "key20": "2UmsmJhyV1NG3U2v5K5dDhPUVSiWyPqCYjvePAWCHj7ArVgyJfR4pAhH3dc5QuGngCUXcjW8HAY2RCNUiX52SDiD",
  "key21": "3DCeGMTKP31AaCr2HxjVgphBaJq4ZHxxGRwkGi9NZ8LM3XPpFKufC3vWoH25hfoSL3uKXTYoKRUzMb1ktRnmyZE8",
  "key22": "jzQgK9JrhraaP4aHVwEWGyxo2toLBXDaWh5L5fR3UvP6f2VrvPrtKnLuHmcyHpRmeMP58qcGiQk3m9UuXL8XqPc",
  "key23": "2iAMuUbzZYpCA2Jspi2m8edYoUUb3HUR5vWEuomVWp5jbQzb4LdE7x7Z5FUz5xaKARLo4FdrCV8rqdGoj86NyAQk",
  "key24": "43mLHrBAoiMtYX9YiDSSeMh1gedaJ5YJJqcGSD6H8Bx5hexcSHmuvmUQU9Tjkcog1ttbzYNK4HaQR56wxj8JTMw",
  "key25": "y9WEEVnYtHJ3wN5hHFtWzbv8ULRCuGiRBW7Di7jWCQ72YtgQ7ryL3GKvEMgvsBe4vbq7r31Na7Vktg5psoS1As6",
  "key26": "2GV7kpAbQMi3qvdEkypDkHuaDxgQZUoUqfT3wXPVgebBu3i6kXi3QjKnMB2AiSPHKSn88Bwq9wcZMy3sobLdzsKP",
  "key27": "3pQq6NxqcavNWtJVWQbqQEaxnUuryY852zo8udV82Wj3Sc6RtLL1m7eTm6JTwcoUoVb3Ejddqpf2Zokopi66X4oH",
  "key28": "2fjvpGBXw61fsXVPYU6KKP6HFR6DCCPK3Y6fnjZRhGEfqvnQhZ1XmKZoSKEsB2eDXLZ2NXwdwdCvBNCfU8ZF29jZ",
  "key29": "2dZova1Yb5pabSmuHmqBiUUjg1pKSi6gZKHKUbPDg8uFJSubPnqk1P9PPCziwuYpnoKB6hnibJXqc1juSYn3oLKN",
  "key30": "42knt1bfVik9syjp1zLSzhTLK81njFAKFXcGKLPMpTKXiqxwJTBjzN9mrazYiDCBWKp2TV2s2Z6nkQwnySuxd3GQ",
  "key31": "2WgqztUcu7agbFkvKvYC4bYxLG23jkDPgc7qdHD73MVZiLimf8WgAE76r7XY7d7MKHzX3h97ZTYmuxukm8W2XbuB",
  "key32": "33bA3dYdHHhHKAYvSSygEDms6uvVDcjAvoJU8xSh94gN4LLoy6ngqEPR9avaTfM8LME9hZ9bdfcQ4377rM2yCcsg",
  "key33": "4TYuLNtTgm8Bh5J3uAJwZK4NwVxspTWU8U1zTxKnmX3nEFvE8e3ngs1G8xcpcEkJ8Ehtw25tbHADMVEsgG4aVMRA",
  "key34": "3jE2NxKWXjdhKSRnN3E7U8WoQhkCr5NWMWfMzLf7NP1rCz9yQh6AfdLRHSugPM3sQrebxx2Dgj93CHMvVrbvVKyE",
  "key35": "2ZSR5FwM96guGCnec4zvc4tEwT5Vt6KvGhcHjDHnqqFydWFAEm9SiES5xEL5xfiRWokdueuqGTM2L9hQqZZaUWTM",
  "key36": "4LcGRXeVhWPeWqYEcd1YtWWRH4wPxKeXcmiNKWkjjoje9QBEVNka28gEPHfaiU4UhY2s2Yb34kEEFaEUA32cHRpm",
  "key37": "29LYZYaD5bbMTaXX5CuPeprspChyPySk78TGaAMwTpwNkYrtHksX8EDvYF4Q9Y7GZFLC9W66KukiJEzTxLVawCsb",
  "key38": "3xMd5E4W73cU9W2mErtRNmmTPZWoYKz2UUebPGqW7bjZmzfYbEoENvwnBMAZBt5GV8ZLZWT4PExkU2rSrA8h42FL",
  "key39": "2exXd6zC4jDRszAZuHPQ9NBLtMtwo6CkgMMVcXXSfhPhnwMGLZzungL8L2ZCAg76EUXkXjrY99qdm5wnmcsrDWVR",
  "key40": "62wMqBBEmSnxPEBzo6uWekcYbCjnnJtjKCcuLn1V5Hpgew4DCnjayK1R8j6y7FUx7r2R4FNDxBxWY1Q8CesBpUXm"
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
