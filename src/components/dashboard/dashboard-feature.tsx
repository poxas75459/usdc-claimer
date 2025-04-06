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
    "HP3fE4dovPZT6QXR95M55bkYidVugngg2cVWyPcYo4P8R2XMCpMSdKNVKi1nP8sef9xdaKru7EL4xNnLxnQa29x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccfFqmonze4NXQVeLx9fSvcuyzraujLdAgkgcGPNkZqmtN2qXWacgSrtDpmPRukzMsv2YGDDD2zDpjA4DXs7kTN",
  "key1": "3z6aJrdWLGqUuw7BsUTxqsHhwYBwjquZyUCEDhrmgnHaLzzYNMxftPQuVxUKoCV48zLpDFg38w9br2h9V8k9AsTV",
  "key2": "2a7amFvghRHsyJ4kGJELxRCuL6ikyQDXmEsRXDagYCRV9wR2yy1qoEaUpbTBKWiQs6xAH5MTBEx9eKgDHCRaPGUt",
  "key3": "yF7g65NMniaTtC5Ua56wW27qXD3FidmsvXZ8MKCEE3Gg8oUHDsPXoHpCLWjcUZB2Co8AyPHWTZYqqMSr4ufqwNy",
  "key4": "PDD9o455gh9EahDYrz1vhRm1QTXgTxMStXHHKctJXUskBu7QBhVJrzGfRRD32h1iLM5xUgyv52GVNoZERHUryoJ",
  "key5": "4Uhv3eiKgJZQCysf6nCn5g9s4vD89objcV9rxoW4EtiK4Ami8vUWrKgb9H4LwGwfYVnrR81nNykMUzhJ8VwaPj1T",
  "key6": "5CYy44xQdNNL1HE8BJyE89e5L8a7MjrmadJSxEphdXbHwLg3rwqmV1RVua7wo9dAoxt4UDaujkNaDur9i6hqBA1Z",
  "key7": "3ufkC4Rw72gAhUFx4XCzdqjXxMWi71sv3esdKKm8iGZyvKNR69B7UQbuW79QePrPg6KmHB3V1V9KGf7ZbBNq3dUe",
  "key8": "TBDY26Aa2ncJ6Y8gKtV9iRR6FvG5WzD2oH9KCreFTTjcYi6YTxuLDoi5mz7FUTNMn5a68tiSb8F1qqMnL1VijH9",
  "key9": "3FsN3PmcqbyJUJMhcXvzRXgRYj9uobHj7AXJeExy8ddP6yXcLNaExD7MchTrxeJN7eFzvEDGjLCFwGHaeS7UgRXw",
  "key10": "5KpHgMzYxWJuCmaP2ZRC6bXAfu9bbA2Z7H8ZAvR77TmPuUGU8pQtpswH98oPQFNYNhW1tB5zBdPBiQqSjzrjLNhs",
  "key11": "5NJLqzT3dmgZdwjtaAjss5u3YvouTcbBrE6fMfaff2TNnCiMWMNMLrYLtYp8auYcZ5PUTcqeXsKDF9uvA3V25osF",
  "key12": "4gmXMWZZaopActeut9WZpAfW6fqxJrSvWSvQaxzut61sJsx2ASjMiHSWT7mpM8zhZT83tgUBafPe6U4THWs2fFtv",
  "key13": "YSaua2FEUkLMPop69hYgXenTq8NJaM1pFpH8YxeDuhfviUetB5hWNe7xUQHQFPuJuKt4dAe32N7mEciddW29b4c",
  "key14": "2qGKDneZTwbGu92gaQjt4UMDTnRwsQZocLM4pwRGXbdWFzDsELT2nQLzsq44rX9ofSy9Xv1EQnWpcCsboDCPQkMx",
  "key15": "2m5XHdcQUvPMdtD6oTZtkumvHNVwXxyZ8eK5xT2ggmLa34GY65D1AwSRNFsR8j3113SvXYjpJtMwP67zf4TpekRh",
  "key16": "3zsZvbmTWnoiiG8XeH1iBw4Gfmp3aYSVZfR8uCj11Kse2aWEob3PzubFr3FLR6kyPr9hn9neajd3Rio1M7dCswLZ",
  "key17": "4BF64HxUCZCaXqgXbFuovFDW9HiGaNRtrvtMgLnkWCf2dkQsaoo5Li4eW7PjN9s7aojrbzw2sPUTj5Xu4cbxBPQ1",
  "key18": "2bxBY8LMWHG2uxJvAP44k4c5DpZdwqzrU2atB9EnEm4woGPFpWgknF3jvPi3XuTeiomBN1o4FkncZPvmzDCLHZAg",
  "key19": "3xB8uiH4pxxmzkTNyhdWuiGGDgrJmA4i95FADj2KRu4sth16u7cUVeEkofNSfZdHndoGWxy8wzvEBmcSHJ58WChZ",
  "key20": "3wbNoax2FZpSmafxLsGwuBmHwAdpceHueeEF442ZowxvJ8QgbQnQuMAS1hS3DRhwpcyksGTbwPWV3PMchCDU72KZ",
  "key21": "5NMDyJEL7txqhAit6BCmLfKsJQF1KyuvR4gbyRYH5rvYBUwuW6khdkk4dcxzUjQmBbmTLQYDf7GK1ypmGUbsdDmF",
  "key22": "gNhB9opge81tbqu91KHLhsopLP1pJcta8AYmrsrSaDC2QVbm1L34VB2DzGKWzhEd1WBHKaudEK6UWAw6JDtKLZL",
  "key23": "My9yBipKrXU6xc1HD71qu4ayWwtRPPFGumzzAfFxeg7yBEBppzqdedwA841FNgR3gi4DR3uRCnsnreWvhmrvZRA",
  "key24": "4VNwW3LchwH9kzn2hFgiA4qFZWJbriNwzGsdthiZhLUKjJZSVFKdr8EUAkoSSzQeH6GqXZwo9Zo6s4JJWT8BJ18b",
  "key25": "4FcMDG4sxKzP7PAvZJ9yZEX2fpaxztRw8FfEz4rFEga4BGaezruHHJvBT69msx3aFYwxFjndPf1em73A1mcnAd4J",
  "key26": "4QnQ75EndBh7bwbDbWmMMRujFGBxv3TsZNGKMXLd6rdqhdMQwJ28ahnyv9n37t31m1hYHDkUTsR4PRhvZxbAhUhe",
  "key27": "34n6kVkYf39qeGoDWWxQiK3aPn8FQmtGytGJToknficgyAwhgWQP9Vpx1ptVEFWnarzgukWXkdYQ5uh1HKHXz9KQ",
  "key28": "36a5oqVMBFd4cSXK5vNdy889XvMfqUt9HwLvGb5G7UfFXitFxUSYGZoQxpjA2euoPFyeNTGNSH5hsmXNsz8gQgef",
  "key29": "5bjkTz7LXrq8CSaEq1KA41aVW9ErJoSQFrYMEkWLBovnQGx3SaVCKShMxmYTLaDE32WhQn6N74JHV1xFVcBTJYgi",
  "key30": "3PzPChC29bHJYwgVD3zjkoUVRrhqj4xTQGRuwgRUNxAB2gySn3sEnsWZfpoUopQBjz25zisKXvGZVU1XcLwjynJt",
  "key31": "65b8R8PvK9DS1u3WZpG4a4no7bb9npxGDsDd2Q4399U2Mpamk4WES1bYb4caDxb7ZhxbdCjK7dkS8AcbpJAuNX7A",
  "key32": "3M4y2CFi2h9uFc1jwHDHKXqReWcAeK21cieFYTNrZYDqhauSoTSHoEUhAgPNUMFH9eDuNRyHpC4r7MGsNQcm3uZJ",
  "key33": "3FiRbdATihcVxvaRz7Bg7ZZGkYuMDwaG6ouTEM6bNdYZV64TUCWpfngk4ZDVEtwkSLEoKTLVZygckA7PpHFGbX5N",
  "key34": "2vKE8nLV3cDKKi2ieBUkJEHtpFyHLxo96tDhQXJaNnYTGfbJzf4TYkiX4v6T5o3p1MStZkH1ZGKRpxcTPPgeoQ7n",
  "key35": "2v1ozYAvd7ZmjCGw9QbnniLxkj1Mmwn4JgYGK4GbB23bXoxxD1kuadncfyG2tgL7QCA5bhNTx9AsAthqGtSfqFG7",
  "key36": "2Zmnhuozo8dSb1vxjGquts7uhemXW8waW1ozRyF5WYmRorVockeButUFngmFzEankARAeP49wX6xz4P6DhGvbgcy",
  "key37": "34tGhh8F68yNwMH344vhhCZgQPpzrfBbfz9Mt9uaXfkZkRHVaND2FaKMCLrMrGJUbsxhEtqoH3jwaczrWq7E3WTy",
  "key38": "4PreFZq42uJZWg76tA1ifvk35JYnjqHBHx96iQhAYzQNH63yzHq1hgxqiVT98id4zzUy1atg5QC5uL6VK5FWHUpH",
  "key39": "BPTtPTmJNQQmwW2XbB9ztm4EYCY3cxGVSrAhPrKPvbmpFBnPvt5xdyS9oNujCGow6w7zwErog669RJt4resQqxd",
  "key40": "2Pe9EDkCyZNhG5pHnxSUXisCWTkPrXjpSduvf3sx43TtYjaEhzJshXv52KV1cAdLcWnC9CyTX7vT8j8GD457qzWA",
  "key41": "57XTiTDesQJHQboFm2yyKBf5UoHunMUdwwLZnCMwZzeD5jZGMTLydfk91ThuS1MjkndK6odxmhN85d1eE3x78qgS",
  "key42": "4wpqk5GX85KDHMg7W699ZkP97nhYSST1xokVZhdyXMFPqmUAKc8jNbCDXd6Taqo5xGFV5K4CTiQhcAudXsi4QREa",
  "key43": "4dSzhREmsL1RTiXekaSRqAs6jimAvSQAVtK7HcWKvRDGLGebXYohjUnQbqyD4A3HuSY4RytFijuLXYEMg5A59CBT",
  "key44": "3NwvWvE41j1sMn765txDRXH9bFqo418VAvyGKxw3LAPwCY38cnTML138WTk9UYe1oZLhm9zFqiF4AjvAZ7uaLEbs",
  "key45": "2txesFAbAMULWMbSLk7CLNtaQUSu3uXU4XrDMtMK6hD5ATkUTTZeagQrEhAoj113msV1cxKovEpHbgRxkRsUc9c1",
  "key46": "4EncoKP9Ay6MgGuDrPvFFV9tQfTQ2ppYQ4x1Y1ptJNeVy87u7tfSv6j1Nq5kr23o8Px9fRQ63Cyy9UNLAPZ2aqxm"
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
