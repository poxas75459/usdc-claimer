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
    "Qdi3BUTM7xhck77B31Vgt6ZZQyPcoweLAGsKHDa1GEgDVEuBY1LbxdaisN8jZBex1Ay3SXxTYiYbe8CaE1fNohN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2ntUNjyHttmk2KjvbiEV9bwGiR8NenBTpWctzspEyxSFFmAuHPa6SfCd7xLpqChZBpJ4B4ihp5G1DTHRNtaTG3",
  "key1": "3fGkpBxKR39DV2RkTH4xXCBNWawdtP5ao8CEoM8p2y9M4nCphvHdeq6ZWwuRvbM8QYymzmV4SVgbXzNzgP8v54gC",
  "key2": "44MntCpW6EYSv3wRdmh5FNCFFHqjxzV23EugMsPLkF3uArkoBdSwEZ2fYYHJK9dkhwsX8yMk5ThF7KLgqc9xv7sU",
  "key3": "X1cwuTja5mAXBQeuRD27VDmF4VKWsSpdEc8Dmgg5DgEyYNbfLkdhmSbsp6uwnWFnQHabx7kbXrMeDEoAWyz2Ah7",
  "key4": "3qwyumJrGZYA5YHDgvbSR5V6z9xQwd6k7GxPEmPMpr7ZaYzAPd5Bw5sLS4w4o46rdUqx891fdJfLAPEVxEDFvoBk",
  "key5": "5se5K8GjNYD2njgguxUHnduz8r2Gj2PrcoDmdJaS6ygyrPJ8TFxKdRfnYvXmiVH7p6HZeUevx1Bzhae759kzgopd",
  "key6": "5UnuhGnTmAfsPY3rYBTbc1EC2sKnFBwVtUTu2dLqDwy6U2bbKr6u1fBdF15nCzWMqxxSibEDDGZ8jxPJtma7ETyS",
  "key7": "5oEByhso3NyiWfCScQDaWeS8Rnj4Te3uS8Jw9KzvcJcaRuRkt4NTzKEgZG8WbhF3Crbm3UyqhqQ9PFrZ8XPo2byK",
  "key8": "5v2gcgBSFGcPNAs5mT1D27LQCMWDyh6k1s9dm6wh3R3wMMUkEoz9C9GU1hcMJQL2b1rPiEFA3AD2pji1etjjBdQ7",
  "key9": "5Dn7L4bDLP3hkgLwq3MMU8MwLdxUUYXXpyG61t6GjEfDQfWDoTCDF1EA4i61okTB25LRTh3KCVjPhzDG61hHeZse",
  "key10": "3uJWXBJbpf3BY1NjjhdqCGLE3T7WdT7L3UMUdQJcZWZGXrYiunEpbV9vWpPPKRNUCdNu1ub3Q4gr4GSsM383dw7",
  "key11": "3iV9NQdY3aTsU2zYYzN5HihAJtYhtPtDcxbkXskbPxDtHfQzWS2kNZV7KZLRiTV7uWsqsYxrgixXduPXVYc2FpCR",
  "key12": "35BpW9sfJuPspQRPAgTQfC1wX8BQKP3ZkWSM7hQZdWDSVaq7zeykecr7kdGwhgenVRMSnHpsENrk7ANbpkJozLfM",
  "key13": "3C1avGWj52JhU4AaTAcE7MCu2QDCUDWcKnNXySPP7zRBKyBZTcQjvHGDZm3JV4Uv39zxqohLedZfzTntocuQqHjb",
  "key14": "2ZcTcczvZ14iXgxGdewkSTnVniNTDG1WQZbJG9UVWrBxCXebg9QAHK8uRgeZ6MD34LyQdp8rABeF5xVmtdvQPwbx",
  "key15": "3CAB4sE764wi3VYfykukgM6RQqUrGzQyYmn9abnASMjQA1hUM3xdmmzYru64JtP5RXWD8kEabGdJT8d3aTo49qbB",
  "key16": "2B51eEGYE9Su6jXf354ZPBsnXyocmgNcJMSf1ydfta8x5HhjwC2X7ELh96SgamL31aCEZr2ZuJjWKARh8RZCJ8zh",
  "key17": "mtEuA6oGbo5zzvwCMFNu6D1Bj4qtTiuHHaLtQuimrqbSBrcPbp7Rj2zz6MCSHGteUCsRcBRye7K98uLugGJTYcS",
  "key18": "66qcPAskFaJt5nVcfqomNhUvpcGV7HLtZ5dZMxpg2RZ4H2GdKuQwPCyivksbsd5Yq2QFjPfXqNq2X4yMX1m5uCrT",
  "key19": "4MDwgSDRx9BRFAW4Mqmh7MP1qPqNffVTuKSyetBbybVdwDu4JNZKD7NNCkvPS39Jjomvzs524xWvnP5gEpwAJgen",
  "key20": "3speTG1PuErAam76QbVpw9FCDnojb5JiJtRpS8FANVRF8MprqwGXQza3biEqWB1bYYSd4oXsSM5FadPjyeP38piQ",
  "key21": "KhALdZghp9QWnDJfCcYKg3VT5xTcTYQQDvHjEb9VtaxRLdy2GxjoamjGPAhNREP6CQDxzafkC7ou2KabQT1wcwc",
  "key22": "2vWfMSeSoHvjnPqbXGyzjRgFarVU965EEuyxob2RLkMG6L3r6AzHgiPyeB4eCgX6Gva1XpNq8g6zRJ8cSCPT1Hgb",
  "key23": "34XhGPkp81MRLJqL8MhwUJtPe3cQDcAQQbUMmpGMpouu5VhjhbqVLM3dNwk6sRbYpzpnAN1CdAHijbTYVTmtfJpi",
  "key24": "5DaQLdBRHijy3g9gAHreqS898ysVxJM99Wr9tP2KBMoSZG33pknn8SQVAAnDN5Ytjew834sXRdWGNR91m5mypxxN",
  "key25": "V4WiDQsfbZvft57anpK5VGHKkX4ERsnMTCVmqiPnNp4y1i24pyJxdSH8bLwGFTzWrVgZDRxJDvdfCUkWn5g96Ga",
  "key26": "2pstPPVsZ8ESk56MSUpdwnKQaQjs4HuNTkLsCjySCkyciui9LfgtuEUCGDbggVerZWmWvP5CXbcK32ZSsUrV7DG8",
  "key27": "59bJfiHLXEShrmz95nWm3H3LsxyeQjYQ5vPZ9xd1zPk4ktAbE6cxQpcAr4mCzDFYpjLeZiUSZ7SvhJFLhy3qmCTM",
  "key28": "4HCy5VVsujkBarJHXPiMekyi2BcwWi4LGCV5f56n1tX6hbeNWg1TXpSd7LwuWKQn3nnAqfsEruvGffFhq6ZSPd39",
  "key29": "3gUN7Tw1EXvWRS4Hrv3URdJtUaagaZDEFeCWk9ZHXwXC1bzKWnEg5is3jEXoioZdo1djjdRrGFxFX3o1fg3HFUDK",
  "key30": "5CYmuxjGc8yftqnk3vUmy7VsNRuJUQX8CrMUsbQTa4j3NXgZcPW3Hp8Ct5hEtmWgweBEkcD1FmvxGoVcaUPBbfFy",
  "key31": "4kMPfpCPzpm9V3ER7PMkW3g8wYi91s61h42w6Wiq9cQqBkerU2Cy9exLWqDyoDbPKQ6wpQEjjpDdAhuE1Yyt6P8t",
  "key32": "2M7WnpkkgayF9hqr3VroeqbG42WWhzYmNtBNVeBjFyW1GjEMunHSBFBRtJm4jhJgFgdziHdGh45L4vjX9DB3owfK",
  "key33": "ouoJWAhnW7AYDCpfwo6BShNFhHpHvDfi4FPYTd3KF7EkQocGQSksHyfheVJFf3PTYB3MCi4nBRW14Fr6xeL66Ld",
  "key34": "41EsWWXzR8CQNvWFBZf3gsu4qbE29cPAZoxYyP7wkyfehYBKvFNtA2VBrgiJzaQdCssZdLXJsboZg4MnmBqaT2yk",
  "key35": "5GjHwMcicutK1wN3Td3RgxCg7BV9dKCyJwo1p8z7ax4C8GSiKQ24rQZhKnsLbtHWSBxHuyaQFARgPmBHe7PV2gXU",
  "key36": "aZL7RWcRWzfNh4qQN8evhAZ1RZKsGsFCiofBmG4Z7iCKzwTBaRBUJNWvmsKAZtDYGG3U9rutfGU68QwpAWmUpBL",
  "key37": "487m7xAcEmvjhw8GZckfvEJwmEVHtT79A1WKKpPrX69oLQtadSopPkzYbNmmRKJf9dyMJs9KzVbDfgQ1EmfoQMaV",
  "key38": "2CgGTmWUeJxjgipf2Nq5Z7oN9io755kUTjgaJx4EY5S2xoSiGhhAfTSL9WuJVu7TXScuqdmiu4PdVvk6xyYGsLBY",
  "key39": "3p9dgkVV5eUZthqwjC3cdTwXKh5qatndbZQa5USeAcFurPRbU4XP8d5S1GZgXMwVonwWRSekSFofxqgAkbs2v11r"
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
