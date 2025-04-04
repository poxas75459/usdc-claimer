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
    "44FowXCwaXuz7rhREWFS2APU59KyLmFr2X5QvvWDCZz1SM1ZSEEsxQXpvEHsn6HzDQmq3nj1meMn9LtmxGTaTkaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NW4r3Jm4JKBqerA7fJW9oJRJ4pvrdfiui3iSfHW6yTp3s4TjM5bgEg1y3GeshfniQCTvuCump8RjXrXPWdKaWhQ",
  "key1": "SgUxYxQahyDXh6vaZTKRQUHU1dAyCjCiBvZjTu7AtFK2yLwhruuX2QRj4nVN1o2VVBiPAx2k7HeCCtGLGRCBwSs",
  "key2": "56tE1gNBMTrNYQsoHi1fi7FUK5SPkcNDvR3GcUJ2Hsb9N8tZJMkrMg5zQpC2BfKipC8q2ojm6b3PNXgs7og3PGvN",
  "key3": "2tgtANpvM29swVA2fWG9jExBLsQ88bnT2Wc2Q7RqiYgyN8V2WjxgR7MEUC77rihf7kyscwnvVUagbvRjRD58f33",
  "key4": "bfzcNStbbsB8JGx7APundbCVebNsPtKqShy2uRvY6w6ZPRhdoBKoa4BWCU8bVjUEiGfxA76jUtPyRbiWHa2JGUG",
  "key5": "4Z65DJ7Ez1mMJopZC2p46RPoFGRBmdnCv8m6NaeCx4zymgt1SU1hzGEZRfBFPLpurhV53VDK9TpLudcF5ttiXfuR",
  "key6": "5pr5ArJ97szpLfsj9JkicTr1RbMmYCBKLmJewzqbUPecPEz8zyyZ4vnYQEjjDm9znhbJiHGQnqUi4BZngczt3nrx",
  "key7": "4VoxEC26d2HUTWzoykGnPU3qzhxpHZwWFUULoQcZKSVtD4EnHZFD8revrWRKKdgcDeTZr8PjgqunYzVWRsJH7d1N",
  "key8": "25mYKQec14iDWH2UFVF81hzxN2BegKYjmxWPLcmnMvu2yCh8T3xtDmefMeZ4bdkYJqxXakirtd7TRYUVUzb6pBdr",
  "key9": "3yMqnx4JFR8VdKNvSjoxUu7CpjVe61fWpi2YDYPDdpTksr9RhQXrcLSX2ULvucFut21qtgRFkor3bYRZE2GsenVX",
  "key10": "5QvAJmm8DXeHvfMkLPPB4yRjTo1zMxsqBE7zeTJibQx58R4QQcxvR9pT73hoeEKrrvnhez9nKM7uosrvL24XntMf",
  "key11": "4okv6MtnfxgbWix7f32FKDwKMGiejZuHJKMnt1SmLUyegaChpVeu4sDbsDzkLnXgC1DV8APwpChBQXqF8JXysMjF",
  "key12": "2LZvnBCVWczWRzP3xLskyftnFtzMd2PhaaGi86V3vKoxsQv1zpNSnF2qBxJDJeqw7DpBbyTn8cHMBA3Ff24nVGRL",
  "key13": "8QqRQu4bRnZnvHDjeWiQfq7A1UWjpesiq9j9Jqd8HfbUDBArDZy7h23Bb4yb5y7LpNWu6fuMxKSjmwc2qzzMwss",
  "key14": "3czXXokrW6XFF9dQ3u8FcPAPafXZcVTPiC1ifhWMzox7vdTKSDTYPkQSRH2tPkxLsn81YPiqoNvAgnQagZmrRfi9",
  "key15": "5zeoExhkfku9QE7Dhrz8fGZe461Uu5BByN3WdxKURmm6kCGm5Z3tessNLfqga9Ls9KnfnKm629558UyfbWJY4icU",
  "key16": "RwU2dJmoNrgnBzmeqfmFomrSoqGPkEsQixgs7tgD8W4s8ijJ4McGp12fg4bKv8aVVXGebh4uShaFuhVtSMgt3Cs",
  "key17": "WAoGGtsNcPbpdtsDHbSrg2FSA3DY7YWpqFxXCaiwCWPmoM3Nw5GvGagbiRdysuwih1ak8rugyvsMygjyUnvLfus",
  "key18": "5tygHNuDozeu6f2YSrUqeo5mZZeU1WskSuWLNB8HcbVdkzDbGY4YMbperi4sVB5nUEhxHErbfDhsE1pFi9aAJNpQ",
  "key19": "2fupY4fybYfXFhxzah642UiHvQSGGZu36bHHBPTXWidD1fWfZeuLm7zoGJLzjB58pB6UAFYTVvWPpva98EhsiYFG",
  "key20": "32xKvuf7XVwjtVVMTrChorvMP9eCFEt2UHbo1acw4q5zsX7JfwjsxDGHPaVmJqdrP6AbDoN2T6kgw6KgFu3uM3uB",
  "key21": "3dcURS2opbH6xAWov3uu9G25JeGnE7RQF6JYdPxH17JU44mwpoU6dX5RQja1DGNz38NDMswmmVaHsH3hRQNjVYeZ",
  "key22": "5CLLeVniTRzwc4JAD6YrhsRM4vxDwQKhZfCgcpfu1Xyta6EgwtyXe59enx9EvJMM4U4wkAk6QitQE5w4n9ZLp6Ay",
  "key23": "NjGGsQs41f7RmaQuSFvV4EK2jzc7QrCeNRnJK4GUiCTTPzA38ixCRT2Z1dG6LWHk8FMxp9ZAkbj1cynDQYseDn9",
  "key24": "53Pc4FuxzbhRCHvg6cyiUnv7vXjJoJ2xtkneKGu6ZZtzkCg5L8kWUibGfEcvcrQePmd8L5HxGptdfCuKS9vytfRV",
  "key25": "3DEoyh9k4vWqxormTPdeddxdLQPUzPqg3iC1sdmanLdeGYVqTPE9baES4oJtQBhY7n7u89PHHRxPx2ZvAAZ8P5v1",
  "key26": "5PSqTt7UbHbxUaMzSVRApPtC3vBaiWRXivHV1eW791t83X3PY2FcPHyG5pg5iUd3N1j2vktbxGZNcXvg3vx4nxXR",
  "key27": "hbHZBngkjHQuFkzJ7obCDJqDUzxHYcQtpGM78EDSYff7jdsy6CvpWHza2vUpSY7Ks39nYzorgjwA3sbfqWkdJz7",
  "key28": "Gq9s2qdbNJ6DWF5u8mMFusrujWBZHqpKzBNs8yntBULzudqP1nnvuYKibsJkbQa9F9BPUw7SvQ4oxaM3Epv19gf",
  "key29": "3rvA3QqWkLBci69s9UtgpCbmYwfQp7hYqcgmr5WSuLBidj4eDN7MGpcWitSFGkRGc4NFCFwWRoPCN2Vaj95GP3Ro",
  "key30": "2rXbkFNP9QFgYP7iB73tjrruHAFWAMLkaxXVJ86LtJxZKpikWG4MPETzZttyCfWrqGoLGZKSEm6wMkJGrvnuDVU2",
  "key31": "3YQZRwHQRC4UY55JjugvK4q8odcj8BuAPckgc3RHHpufF3k147SsSzoDoKM1CsvpBTj9Ft12PFyR9fRjvDwYqfsn",
  "key32": "5YEb7fhq7be5BmycC4xDCkkzTXCnAsAXjTDfE8A2F4uAM7JFd5epHeeyDYKkDf7pcZFe8ddLqK3KodjE6vguxVe9",
  "key33": "3oABdVQjDCoixtHH2nq7c7Wd6eRjn9cjWPCztWXyMQEs3TnKquKkwkXBxJbxEyyrwF4fwGjmX2viXBZZ1EZG2KwL",
  "key34": "5SbnoV2idg8PtfxzNEdRShR3sxHKMqRioySmY87KdqJMyP892sn9EzofmNgM8NyU9zuNKtVYC3BRDynmx2xX8rQs",
  "key35": "5dP8Uioy4rtJsP43W3cA4hHeRWUfy8PsBRxCqmcZeCCrodSdK9KnXAY4qVEJZ7kQRV1oDZUTxhVeKMB3VJCyW5pa",
  "key36": "3e96hjHhVGZztqYSYnE7yiKuUXiyRo6iUVtFbJ4MjwKeCReccCvuicGskpMH8kg1WcG7ibZ9FAxk7uMe46bNxkhY",
  "key37": "3wXbeKUAXGRFMp1ayqPiqPuMK93cey6UEGRtY5zCZ2SJKvMKje8normmGecrzFXqpT8V1YXAC2snwrytw1DyA1b",
  "key38": "3Q4ysWNj9HuhQ1MNrxd2iPZz5tVJQEcy4wcBW2SGeMxtX3rDJPGkg4Fhjkr7K5ba1pzunLCuQ8PKsq75k7gEs3wK",
  "key39": "29okacnvegmyRuJtmKWf8FtgSL7USyh6S7eF2RjNYx6pxX3qLzYtBESs9qGFdXR3AuSgjD9YMUqEwBfP5yFLs34k"
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
