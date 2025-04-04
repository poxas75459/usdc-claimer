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
    "3t3eYG986AGWA4VUwnf5RFT83mpttDvnuK1LmnXXcSnNfvHKWrP6bjbuzHsxQWvZjTCakGJg2KMBKUomNkYNPbnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCm6SdhwK6mc4Sip5nJAoVpJP96SCxD98J9r2CRnpKkUHiqb2wM3kizg3mKruVMQqbCvFm7U2AjYQzszFjrfxFR",
  "key1": "3unbpxsPAnZgphzckYdQaocVP7QthfLjLmWJsptyoLdCWRrfuoyrzTQXDd3tPTqs1Wu8ugmgox576hCW9mZVpP5U",
  "key2": "mnLrPtnGwFe4AJBe84XeaNnemujjbpPU71oXCacTmh3Bh58Fzo5xUtH22G2iNS1YvomJ8fCoW5ynqQguXuzcFUy",
  "key3": "5SDHm3V8dFftd7X9BGH1zztxHRpeBruxTBSs1LABi66DQvtGnyC3gEzQKdsByNeUWQyuhYxZsM5xgsuDsW45Ecpa",
  "key4": "4BD836qfwDjJCrEaj2YyZj145TYa2QPUYGcqWKCdSGm5D3EXSkDnVvh2foNuLRn311iUdTWcxFArLGvMnUvbuMZg",
  "key5": "2v8bZKJpiqXpv7qkAHt9Fp3rCbUtx2NA9iJGrn7PHwPMCrFx3CMzzAYBAN19UVBfSmL7tPVWmiMYxWRm8wymQbWd",
  "key6": "5QTPrt6aHXxdBDnCsaX7EpnM4aSQGreaQEhFCNdRRw9nhog4C4M1jo1cbiukq7sKFaTdXCRn1j67bK65N6oXmWpA",
  "key7": "cqfs2woDRahRjPPDDBQ5QXFijPVtw1Ahb6jkm4g2awiEbSieDeYtBvvuALpfiPkg48tbrAop5yVmtD1Aq9ebD5g",
  "key8": "3dofAe9o5swh5jwmvcjNkYBBjWGoLsSASkpTipSFMykkuauR5nP7xenkoLcbiU4EQL9FCADds5pmKNiqhqR63fCd",
  "key9": "2WaXrdX6Ff79PwghNguCfz9Mb3bHzAAwBbeKpgEBPyHoDpPnxaAmPgN99pssDc6Lt6h25WBSHjvhKJr27NyAQJqb",
  "key10": "5mZu7nQnbqonyx3MfpoS7khwd7ARLSRXZwnMSTNEmKiEXVpESNCoG8dWr2DykWnx9ZjeVG1Wqq8oWASGDe2khLY1",
  "key11": "VxLB2cGEHVnZqM75anLSCy1BqJsKww1bX4QvqpUXQSH4Lr9QY8B1RHRBeZm6WA1CtMSn3qLTgnapKqNM8JnorN8",
  "key12": "2VRcmJyZEhzA2WB7cWwnVg1XVGc3prdKwQogdmk4Cmnqd9Y8xfqmJAszBVS7ETcNYNA91g3D3CZ8cHxeVkmYJHfj",
  "key13": "4zFwTDv32EXRfKkMvAPKgoLVXyXv424KrpeqKnHqhH7Q1QayiEAXzEJtbwZ76QbnHQ1V9CvSTmcTeuz3gRotiSj8",
  "key14": "3zq4CBFPej4VaAggQ4os2ormXPcpeaxveQv3V4LyTNLHUePXJsAbJzpbsnhykzq6pf3xrYhcFnuazMbLLhfSBiRg",
  "key15": "4VuqoPWjQffarrwKkTckpukoaaVnhBpeMCgGdP36YetFuG1wtsANFkF2Cp5DVxAGnEw5b7N7oYAmRfJ1uktnemKu",
  "key16": "5goijvEGwS8bFcmK49ASbQVNyumwb8AzVFv1B3ojGCsKdxcBDvpsnV7xxDTAJQHmv3e7ZSoMcqqukGfj8UnuxG3J",
  "key17": "3j4kE3ShcY5WjXushbhYPezDUZSUx5AZBvtVzAm8XbKZP2kdwHJqAfozzvJbQh2K6ebRAsyckXRbAcuyw3MziR9L",
  "key18": "2pWYJ5oCekbkD6M6Gs8M2TPgXCazVKdYnYnWEb3oMK82nYgGmCriCaxwiaM4PPfNmzSYa4HT5WnxnhMfGtvPvq4f",
  "key19": "4D918AXACQKV8Y8qUUUYTcH3tvFceLU2qfiubyvTa8ET6TLZTebdaX6Z7ZRbG2udKKzVacQ5sMRKFAnrYHniv2nZ",
  "key20": "2zqZrK3LRkdQi9VNTHbKSGvbZ9y4yfSJeTsDZ6d2BrMPo1mpiHeYjGeeKU311TND3vG7JK4QdZePzQZDfjcywDyn",
  "key21": "4bquVKmjNosQnioRBAG94b1nQ7ogfoAfPQma2jZCkTBRnkJLzdyKPKK6kjRUiEx83EQE1EfEQnhLrnK59d8f2Hge",
  "key22": "5zWG5Lgj85NvF5DYYqFa214ozmBjDDvUH3jJeNiXQkR1NQnQ6smKx9djNrTVhEwPx5qdB248Sux5tCcxiH5kVFuo",
  "key23": "2thx7TUsSuuy9gbmq2xvFekVVVtCLdcnHooDsvZrz3SPUy7dBzbsbHS6dACRyKF6NVgSvvYqHChnHxTFwhAjrtMo",
  "key24": "3es2P96wMaoLiWErBZJhzRiFPXqprtXrqcdxYQysx4TdjK97VFGytqtgA4j8XTnUdyniH3MkieLvuidejcMdTaFp",
  "key25": "i36yxbR7ecVUF2FsCzEF1Y4qq8KC8pokoRSKZST425vGZjeK3Gnnc6tjbojNUqK9AmcmtRytVU17g2MxVwayriX",
  "key26": "3CefK6gp1eTx5ZXb92SQUxo5hQEsiEqeYCLNDSVfWigTJaNhsfewzNbbfmyY4B5pfLDw7KVnBZ4oLzYXZvs7xJ8s",
  "key27": "2aBzspXqiUyzKnxHByAgS6J4qD4wcD5r7nopuH99KcigVZXvYSwfuZqrMoHBBvyKbmgdMofgB9HuNUYxcr4zy8VR",
  "key28": "2Db7TAg3AwzuUbXREcZRbiyLchtsU1xP2E3gYCC11gsQ4uM1QcZdUtAYcW4NP8m2AXnyo9X82hao1doGWFmtCM6u",
  "key29": "4a1wnLqLe1tuwQzSPvJE1xJoGnCJEZcpgAKCs32JdDr8E3cnhCErVEuUdbR2nhRkqrX7xmWqEScX9NuhQ8xRZHCv",
  "key30": "5KPVQQjNGTVTArzVu9TdeqmqjzF2ZDZrWWifYk2x7MJusyuTSssoG5YB4Frogoghp6N2y7UzS76FBY93Vza4Kwk3",
  "key31": "wSDNpXwB1LfiocUfNRikfHHNmnbTu21t8BEjhr27FULG5Liq95vEMR8FioHjdoVnxh11TNfoJ4khGA6hBt2QiFx",
  "key32": "4cnoJxgETuHn3s8ZQiQuAf2Dvg8jyiEjrSDhdtLPecbAh2MxUxPDF3tsZ4AjUptF9qJajxvEUgxfBA3ybxwDYLzS",
  "key33": "4wkXebMptgyVvvMvJNkXkTq2gZ7u3sDeb5EvBaiS91xxh1i5yL4zKTAUn2XSLFb3zfWLQzhuVmmokNivxpiY6APr",
  "key34": "3nEdwxsDDwrWhVdLyx6EJCyB63WhZ8jrUFQ1JSLeh2gvtYvZtAa2njU22QcTHFWQmYgC7KP2RBC3mQc1cdtitTAi"
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
