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
    "4dam4QC4i3NwBv1p4sBxHZ7SjjjEzqUrot9yHiqVzoqs3V1TpLfXe9asVP26DrNeVS2JMHNdGLCV1uGV9Roe1JiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbbF3HUNJxzQiYa4Zp9rYPoy9nzPxu8zcADX8bCndJUmJeQjSjRDL1bn4Wqou5oWmbUxxxfsQG5dSZHUREKdoYQ",
  "key1": "4GcGJSpeSMELSYmHV4hS3142BSc2FsycT7yfZWD1joecmD4aziKYrYPtxouk5HvGg9skQdagUn4AheuS7EpQ9E22",
  "key2": "Nd8cAbwpuACxYojyYKnnBLTXisE8JoF65NyRPG4UkQbtLLMi2XHtTfwJa1Q3dyeBi2nmzw88BK5ZQbWP8pTpMJZ",
  "key3": "2UiQM4zNpvDqUTgdWT3Gt4DzbcAii59dn9EisQvZM3LmuhLg2u6fmKNnKP1FX9sPJf3prpwAVN759qtWrDUxbPaF",
  "key4": "55cd7FMmfHGhkngnQju8xxZRy22z3Fr4vo8XgS9qESSi2nannLJRtwg2QG7zXmMaV34PEw5akSJTZxGCZjaqqufU",
  "key5": "49vLMAMhLcyWoxnyiwudUiCWdPqbvkzwiXLqoWvwFas8fTRPXKqhGHsvVHz6uQgFYMPSu1KUyjfYdZj77jTa5nnx",
  "key6": "25W4RHvfDXshzjfoKWZNrbuHHZSANX9xnECvKHKA8k46XvZ7CVpDjrj9d8JCenk8wwaiKKu1LQhXEXXQ87uwTBtv",
  "key7": "8et9w7UZhZS5iPNeFiLARaD5wfgrm8krtQpnXNgtGszGnbzjaihEHvDYuhRYxw5RgNEj8WJrNDKmgfuqcxbatJv",
  "key8": "3oX5YF4Ak1Swv7nBo1nXU2uTpJbSBakFBEqhRpa2maD7hFhy2rVZGgn489idjnNsHaQRPYK4Lk3rJyYB8zHNfQ7B",
  "key9": "XV8UkqaxqnsNVmJQeC3jb8zo6zwwVvLWPSeiu1rAzzopDvT3u9MRTL2SEpAKPk4CEzc9hhL1DJXh3Mbb2otsy2X",
  "key10": "3J44oGcPN8nykUJiGExzbCpZhfRpNy5zuQpPQqU5Zk8Mmwq8Ao2gMMLzFwh2SQ4ddgkw5yw5Hzfo86sUhDbybuJS",
  "key11": "5sTaSaGF84EJAuLj5JmG5eNbVKuPKJu1w58Brmja9AY8UnPBZCkiRP6JAWcA5cFr2mChVn3EV4fxXmPUbxeYSZnY",
  "key12": "5uqdVua5Mi254S7LeLVxC3LKnAR3ax1LFBe7SJbkwML5uoyb7Hftct6DpnPdSKDpDUmQD968g9FZ2hV9CrmwVq6R",
  "key13": "2vcyN62S5qxNmcyXmSZG8mdiAN2k83uhBks3YjcCnjocnYS7E8iTPuBERKc4fDz614f2sfHsiVQ3pqWG6Bm2M7Fm",
  "key14": "4uNFVeVdz97ituBqBjp1MDgbQSn2CeACydfwmgBnLssq6U59hfwWKrvcu1kWLwdJaZeDKafLhNKUcYP1PNP414ZE",
  "key15": "3jCF2qt2cLVtWcJwUb7PppRmrASk59ov9UdFV5QFgCPi3M7LC7XzwUffYViKtiAbJ56PZYUSXoeNN9XZLMtFCf94",
  "key16": "2iujEUg6TqjZGhp3Uxwb4pdESFqKaFj1JQUFPcAP5jG3kD9wSSU6ERvrJDfBLYDuaFojh3auEij2tJ2yCCewF3Xe",
  "key17": "5VUbZQe58zi2vYS6n1bCUjYGjQuJoJo98CVLWiAdBMPHkco1Ks6LBNPjkSh644rPEy3c4JBtZYsc5JbWih6R7Z4u",
  "key18": "3nFRm6PdcqFjWRyoCmxF4vCb3zQNUCJRCT4JRMcE3LwSE3G5EFThBgiJUHpG7QdEZyaBZDFrFG2rVkj7VuqsiQkt",
  "key19": "VGXEnw9zYqiFmUCA7PnHsq1fZnASt8Jscc5ExV7to7mKqERwReWs98dAAQKzXyJJqoriFpyas24KUjwEiZSTgey",
  "key20": "2bTsMcUByLEfHrApNFkhTm1oYaCTMELTsfYeH7RpeF4qG9U8aGSNPv2ahLRJyYi1cMwHbN9vBBqNQk7m2hn9S7M3",
  "key21": "4roW6R8GdbD7WU9kWcRXmFNompEFYmbUrXK874A5ck4UPcF1CzRu8QuGeasTJ2t8bwiL8UEx8eEsq4LEF9WibxaB",
  "key22": "52zyoGapVMMy2FQ1jU43bayW5Scr2fCRAUCp7UCsMxzGgmvW1pc79Hpna8nRuKivWgZxukaGAgMji8MyQwihVaNv",
  "key23": "3fCw2TbNZtiSsM5bDHedPwbTJHg4DvS6AKu9fgn1UXGf1RckspY5QukZvgAjBsWfttA2XJXVcXgk6DMHYzUus6Lq",
  "key24": "2pGLeLh1C5Z1VWstBLPjKnu4D7XyQPLNca4FhvQTVeVfA7kF7MTyfkMS9zMuwJ3TLE5PVN6JJ3mwmSizEEbKQv8u",
  "key25": "YPhaTjCC8RHmfmExFjWCNWSADXZ3hDnRTPfxyunaxdx777McguaZDibRAcbijioi4iyKzCtguzAei2KZUZwQ76v",
  "key26": "qK7kkkRvHhTNGogMdb7LqXCxYLCCihA19BifipqqBdjfFjpm1nF8D4JAqsCviPX2X4oBPrd6jAstCH6qth6e21m",
  "key27": "TTKQk78VhVVZ9TVdB4NMwDKiZrxmAp2TaFStzZVdh4YmtBACjZyUuGPp8in3868Tr6t3Cf5euAnW3Jd8ayA8SNT",
  "key28": "5KD6DPV6B6WPjLGik5HV2MMZrNMw8FSqdi7EGT3pfGMBDCsUyuxt3aFDxArCc3GtFGrX6JfP59mLcYigVeam1mc4",
  "key29": "3qreaSKEyWdcNdzi2dhnjrJbvTh2oZG1ynXQSp9iRpb5JfFVQTMAQc9oDhiSCQe6qTxNXniXDsYcN7i8JVqKyRgy",
  "key30": "5XySwiwbS48gbeN51LgZJ6W7oJNDatxquac7Kj2UUeTytkR375f75fz6StSdhWjdRfSXub68x2KnQyH6DeT3x7n2",
  "key31": "5BeW5MMNjpZDYhtqik6bNbSAYrrLxszC187gFsaXmum8AN2JXDy9NAjZ1b8A2Jd6rJz1bPcCiLhMFj2UxreE7j93",
  "key32": "8XRvQPQEqke98HQ4r1fZDVZHkw35dhPNn9JjmGMZeend7EYFkRb4GcgPZh5Dr4ZHi4r9L4z2ohfKEUA8fjpHyGF",
  "key33": "NZA5UBqWqtfRJixga5S4e6zzbfjhVji5ChyvGDhEYdUH1NMF5ewzCjW9Cg72SBipu74qvbNSFX1q78wmm3HCq13",
  "key34": "5PZoAZJ6ptN4UxQWBJPdp3fnZvFY2wAbembjCFa6UZT7rTM7KJYi3A18nRZ8xJt2pi2eCM18w2EzvpeS3iyvNHn5",
  "key35": "NNiyqrSNGtdj4gdgr131oymqXN3z7KML5NmQGpGWU3tZ3eYDFjDdTipG5dnMtH3wtr9sKhWZ87EFfHGpxwr7W3N",
  "key36": "632eyNRBhpYuLakuE2ZmEu17P8cemHvezCPHu7X5qdVF1xkYopKStYJ3GvvJpubDUpjBv94i1XbR6jpBvVkUshWz",
  "key37": "65KxknCLtQ3Gx8rCTfVqHAyeAAxC7uCdK6Rztagq4LdNYX3LNa3V6cN2Wr2sPVoYYnRX65AzpVUkJUx7dw4LwQDd",
  "key38": "3jCB7apcXpF5wVVzQGSebDRhPDie4TndE5YLdWfjKe6aiXTPmq7uiZMDpcpHaSbG2WQokq5afYzfSRH6jVVX7zF2",
  "key39": "5dDuhNSLjcbHYWdDNzz9KUaFKkbgCuDHUcZFxjEQt4nCuAup9zsNKTcR7LZcPnyxGp2BXwE74Fa4aUZsUmxdDLbt",
  "key40": "2buu4ypuRDS6HqDs5ovFKKERhf3saPVTeefQgSnDx6PBLUkK6CNSVuTjA3tJF4sMUGwcQ9xQotG5XgjM1pwWvmZu",
  "key41": "2YXNq4FB9nzFUzWr5vonLkphNnxRy2QwNfEpecPaTrEEGwBn3kZfyj7YCNtBBHrFYMVZWnsqgDB18Et1tFHf4tGk",
  "key42": "3cAA2aUoer2UjMjNFmTk9tFvVb6rdJ7Qfoiqz4Jgnk4XJS8eHVMUyffNcZJ23AXtzRWpUZaHDHcZmmXaWdxSirdx",
  "key43": "aRhx2ujJrUE9BFsDLGtvjF4mpDwYiJUbz5GHDxKX7CkiqFvpCsFPxNTAH2h8R4PBU7Ac5QfXvKUemHLqbNJ4sDN",
  "key44": "3whTefoPaq1tcXHPy5K4ta7Gn8bWk3DD1wP43TnjK45ekTXh3BZqfxcfEyTR832kFicyAdLYaZ1PVoor2J48BmzQ",
  "key45": "3974Md8YYzRB1H6cCX83zAFUxNrnjSxM9gB1KPCLAtwHas6VLuZqprbaW8qPQoaPFihi7YamGt9EeJPBvStgBSfq"
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
