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
    "5ome6vrd3rJXY36xiX64pCfTaGkyB1TngtSQD4kTt39ZUiGxZw3z928g86R1gKcPcjAaD7hSfWn57ngy1owzZEe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpZTSAFDPpVs4GthFhQXscA6XxFRW59a1fyMt3CneVhsQnXnCHWhKCXMCGcUojzSs4773zcVZyQXbEVg44sMM4q",
  "key1": "585ouAoA2taQdVEeBc7qj9okJLZgsoA81hpM1zuwJHrea8VU1tYaf78YgauuUdNg3YSXustqFht5xzgCag3zUEwP",
  "key2": "34aLjboXHzoDfVA3YMuT15gCcbPk1mW5uZ8xKpUQqBNGiYph6urR1JEZaWaNSuGZ1EkqLz1eXBti1TiMN8JFWUt4",
  "key3": "2paXxQ1i1UzjatM9pNKAFFbcYyNzJtyT5KhRU6JfPLPQ2DKmbFxY2qytrkJkCudQM8PF5xMPHUzLyVhtL6LuTazP",
  "key4": "8cZxMpqq1fdBvaGJcwELBRn8bhQpV1AU5Lsme9GZpmdaSxx43JVRvbbVn3zcdwZkFrk2jSY3QXZrXnyVWvkCGsr",
  "key5": "4oQ1ZAuxTPiQLTTwLhCCey3BpBzYYJvLA8wGnJmBvq1gFNj8anc3bzZEpMmtECbjq1yRFsdGS3y3fsQLZhokJSCT",
  "key6": "5SgZ74BQG4Nh5WvuokpzNASRdTsRf7QUBbyW6MqcTn9eyJ7joA6AxNigZ1fxv3cxsWw1Jayd58jzxkqVTpsyoupx",
  "key7": "2JFF8rAZWpaTV48Gs4u752LmCq63cgGaEo95WkmtKjMVMLYzesihAw57sCL2z8KCTk9wMDrybrw1Z5boKPhMLGRz",
  "key8": "vDUjGSyGt9YAHdX5h2TM2sRVpcrNg7YjmAZL8UNdntDLT6dH8FkzaN5aZ2EmEvx9bkNWdybJTzxDzimLmS8aos1",
  "key9": "iFaSYSzJ8S4ppSVPPVHzH67p2zAQB3KFTEqLjKzXa8HcXrMRTX3NHSjrGD9mPPjETEpFnQM7dGL6aoaSJd1Ytoz",
  "key10": "4fuZSPmJtjc1x155xJq25s1XpPgpzrsznkHyMmf8c29aDGvAqZGEViSy7sWWV23JWuKyoAmMkeSv2m4GYjnyjnDu",
  "key11": "39qH9C6562qKnHt6mKL1hJjDAhJP8TfVT7sf1pjiKn1ADhYsgbmScuRcLowWqL8hxNWCQae2baYXHZ24uLhLS6EQ",
  "key12": "36MS84Ltzth2rSXLzRihAo8BExL89pVAvj8U1iaBEgVQkFwnfHBRmVt4s13sxfYYhA8gxTgtRLuwKcvSZL452X4H",
  "key13": "66FGZnjZ7keF1PAyTSGN2SKxPgdQjmQyb21yjhsHmW9s9c7JU2aTcwyXttnYpbdQjPcZJGogCsoWCjignCqya2Nb",
  "key14": "27nvn3LV4kArrjhg4PdQoUGqMcx95gbUytDYjaokVuWhWmS7vE1VUtGGHtHSTjM1opVPTswhWopa2w5YHLy2PZLa",
  "key15": "4BNwcYx2N6Y1HqrDEdjJXcbJS38bZxqTETWncDf6RJxvWm1Q5mX6WaNMPB3eK5Pwqwm7dYWR1fjLQaQYAeMvA8my",
  "key16": "5pWppBy32khAifxefrNLBFThFLrSsqAEHT3uXNg7jYE42PjTk8ek45Ncv7ATw21CYK76Fxxqi55MVQdhGBJJ5Qmr",
  "key17": "3yRwPWATx5YVC55DPru65uxmzeEEC9CHG8PtGcMHMttz5vwQgGX5mjB62qqavCtc6jjYPqD6z2PtPXdS5qHZRZCb",
  "key18": "NAK1B2aEXrV7QBWujPxMcPmhzMz2bNcm7KLZP3LAJvCYAdpEkMdn1SmF1SQtL3Widp6gDbuSV4R3YkuNeSt5eon",
  "key19": "eCabyBPu7xGAkMr9XVFL8d91W8WMBHyRjthRzuPjR28qAEUjSUtiuBg67K1HVjVJdbVKKv2AvaoerbzZLLSH4Hi",
  "key20": "4inKAKSWRBLQDuLyAPVk5ueL1E6TnDDX2YgPyJzSZ7ocLtJ3hJMKHPGLReaULiyKV6pQzFGhkaepPvgiy9U1RLHD",
  "key21": "3rmrqnHX1z8zKxztWwNRP8eMx9xrKgsLeczK9urCFDB8UwaU3xyD7jUsb7o2wtp1xsinNZasAE7LVGry6NVnxtnP",
  "key22": "2CohGZHbjAkVnM52hMSffwAyEmGSrM9jEKdEmuW3y1qrmPDBCMPuM4x9sr7rambsggzZXkX8QKCLodxBLoQoJ8Bo",
  "key23": "65VwicHsuqFAwHHEYg3Zwj5MDYkXFie9GxmBMszA7xXxXvYXLWyxXbShgXKNSCTurmZf91Gqp9spjndF7Gs1PA1T",
  "key24": "2EGPfmqXjEPEBwFpYauZonnq4EjYyx4WsEL8SEhqEWMwxKVKaMV89MPmjdueqFYef4oukxBvUCeZMRg8C35A5RSM",
  "key25": "AMnL7xsNeLBpMAw7L2Adap9i8htX1kb58fjKUfWirhLTkeHJLVdckr6uToTfk3v63oK8ucBesNWGq6DGbQtuHhE",
  "key26": "Bdvzhrv8yuYZaUgG8xxbhJy3HKjKAygGtyaobWZKFJUBfXNPqCYrX6z1D2jN6tMTqr9BJhLRsGphEZPBgwjL69x",
  "key27": "4KDw4JWxBKuYRbJnLySmfNvbnRZumkrWFBwKBsCzjuR4x6xLCieFGMmpJpEU5bcqV6DPrLHNAgyh3DtZr31Luveb",
  "key28": "5M9GJ7BEGUyAUYWuDs3VuLW8oobGP7rJcFSy6ggwZL6fx8Af3Pq3Wmu7dYN1MMq4FXQv7PHTKDWL18aAQnSftted",
  "key29": "5SMKSBKktUk6Y2iyAR67qXhE6VxAp5rz53z5CxGhvC5KBtceKHZLF73FpUrW5EktUhuLyzBMqLzrB8RnWDXMste",
  "key30": "3QLhEvr1tc9KWGV3hZYvSH42JiLPGKZiDKvcdwsYKVwsYAFBRntvzB3aRApKivTFh6Cg8dJydRa2WFzqFZu2obir",
  "key31": "28NLhUFqh8P8Uwrjrwyt9cbE93H6UYfe4MkhrSRJCLACTZ23WyW3afAKBDPUQznnqVhMbxkwMTXE9oyyq39vtf35",
  "key32": "3emt7df2SModoXtcuNYxvKnyj7XiHyKRvazUAw2994y2SZe4UR2fmm54FmmwabFTdqoJtX2GPBAe9mmbb61DVF74",
  "key33": "ZVg1GQoH59KiMMSTZUWCbohvsNzvWMdhdEjdJQ6fDexzLm522heAU5QnTkXAqLZJHeJyqKGMfRt4yt22KYKEYwc",
  "key34": "3vuXTnM6q3fc5dJoM71zjbadnBTgbMvSZ6vfabXzXAor8efaJ5A7i6MbT2DaHU6EugSt2K8CG8uBr5UAvYZCH1HY",
  "key35": "2P8rFFLrCzgRSVgLEv94DNjWiF1NGGi66ZkAHyqCwydBFcdejESchT7NUocpEeJRY2xf1cRrNCdB93gyBvpkqDh1",
  "key36": "3CWxBTxFyidP3iYWBqMcHubn1DGf36GqpN9VBVRRYmXMC2v1JEJbTrmNxhmdm9ELHVwV3JU9tDuManwxE1USz4S4",
  "key37": "Js8VcCYsKT5wB6L9PV9cgPqgYUaLpgSmaxoe1kH5Pc93R5BpSTVaB7Pkw5wqw9LJWaxwX5Cxxw8N5kj6ZkcjHMk",
  "key38": "5hwQ2JLFcFn3DJEaVw7XFtZC3YARp5CfTbgzQMRSDoUWfth7BP6TiUEq9PXxY9tfKVrdwGFHTfzFusyVHifmQkA6",
  "key39": "5Jav6P2D3TXCPWBYsjCtNZPHLPzSYyhpuoAWPJZQ9gNYcubW2dDo46a19jCaLoZVGM9be8R3PCS8NtcE1rWS2kRq",
  "key40": "oGuQbMQacAmShGYJjZjmUSzBvuzenGBV8FWpfSsfU7JHzM4yeAfzwWHaJqPzk4a8iw5JV7CZF7FdVCqxUXFRyj3",
  "key41": "22MGrFvr4tjKuxSdGTiMZBSP6i8iDuLtm5qVnsscgQquis1TQN3zDEonMvjcmZSNvkLzQ7X5LB4gvHJJLEd6baUB",
  "key42": "HoDUxnCQvL55BKDw3t8RjDFpjLgDtjUtKMjHp97JsKPdWmFxZNNJjqDt46XPsLxJ9jdFnvDTTz34qz4RFYz3xtq",
  "key43": "26Y3dxG29swtyit5Hw3QPkNDvyuiDSMDfTgCsDjpSuiyQ1HRi9EP3SHKQUHPwGLu3bJbK6jAPaBnqwoRgpU9pHaf",
  "key44": "SBAVzshAfmm9TZWgPkfN2aGdsGZkeEFAeCC3yzr49ni8Z6NWtHG2TR4Zyjs8iX4WrMB99nXe7RQyeiFiBVycbMX"
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
