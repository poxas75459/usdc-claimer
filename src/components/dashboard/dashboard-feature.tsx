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
    "3xRucjoVhU2hV9Cu6NNJXhiYxMBCRqjwHZGRFJzxnnULnZGupWiHtYocyuvXppeeMgAwSghTcjqJKPFJm71Q5zwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1ptQYnKP7WphEZJ9Ci7uLxdqQFCNzHC5Zrf5QQ3j5mG65S7fJHfZ1aLdxa6nUCMmcPp1gAyd4veFy8zy3566wj",
  "key1": "5BwzRQtWKZUby1wYKSkwyfcJbW1PD7XwiQrzR5PoWQzHgD7ZvGTL5gExaN6FxToJMJvdgrah5S6oSTxfvMk6UEiq",
  "key2": "2t8nrsc6M3KavLpS3zLMSzoqRQzSzPiurN5grq6B7YWLeA1y7AMQXeFHkQBDpYKFAvdGXssxfjz8wFRkCwbKzZ1d",
  "key3": "4TRCzWzjSozGriMNi36PbE194kTDXHvkxeBxNxUNdLnnzEB7qqv9d9iF9n9Qge7gXuUMt7HbmJh6Sdsj4T761sPp",
  "key4": "2AWrUWm79dstAA8VZCHuVyDk99MkjZjZ8TxB5g8o4STiboXbwPEwRuvqE7gu1km65kjRF8mBkdqd3AbsoAxVA53m",
  "key5": "4FtoLj3rmUXSbcPzX7UFGQsrbviToTZXzjEg9NZdhwc1Pi32Eqa263YWMdQxy4McUZ9HUd2wKh8BZDwyb71fJ9kn",
  "key6": "3gAHYCU99VEugX1iTmr7VhXvaEDxAYSpuYoZzh18mhHu141W6h2Zkqk4rurTxTbcJ3r532dKhBggoQKbs4CsSoAf",
  "key7": "c26evgi1rKQquHFpjsc4yLtcJrDtuFUwxEoiKWMtcLqewQauuPxf3wFDBeYZAGr5Nt7vxWpnso1jgra3iR2a4f1",
  "key8": "3Dxw2MLUTA5R6cdeaftrCUZhkWdq8JrKKGEiicJ1VcXY4cbLPY1f8Feb7X6jt5PRkphtneA5W9xSSTE3Vg9Kyh8S",
  "key9": "3TzWQ5f3dhLoY3ADrjezb4jJj87UBVBpcjCSqb2tSJxB2dL2oXoV527LamWyJafEZY67iicMtbSz5vkD25E5B7Sz",
  "key10": "483bgjDv246par54Wx4D21Ykb6wqkRuDbakC24C6Vt3ciXocf53Cb2wYsTE1KTefcZwKnDUH75mexQQ45PEtcqbL",
  "key11": "4HB4bJZ1WVygp5jkKJZuUoS7U5Adz3vECirgsehieca8hnpPdBHyoeRDtAtZxvnm6xM2zZt2BaGdaNRGysDqrHpv",
  "key12": "49D99fLguKxqiLNptqVMcLRBMiKWAi9N9upJqUvZqaxKqfHD91iSYuMTJkHFxBQjDnUQPVBJQgGHi4y1yruT5WAm",
  "key13": "3aFnBVxaXk8urnUVcgF7N9dqrH4XBmzNyJav9gSXihsPkQrRwqkvdFpAt93Z61Mkzh9d8N1QUDvYncNL2GgPRxd5",
  "key14": "4BvfGm1kF17TDM2V5ZLrGoiXw81MnGR6qeTFcCyQfSowWUF5TfAsVqFRrNmJDa7zgmTbpZxmiyP6K56uUnkMovg1",
  "key15": "27Z6xTc5HwNLkuDH6WiPk3iZHJ513oMaEcHCwmCtBbHYcNgCAZ4Ugn3fJCjJwpdeNKp3MfoJtGHm9ubJtopP9e8X",
  "key16": "4PvurQTZesnqABKssopMrw1yE5qcE6mKKE6AnLFvwoTGoGVyzGpXGmpsMpqgxnBxhW4uARG3CbrCph77EZaGcNnu",
  "key17": "4cKbfDN3BNY5PiWPyiiFaZm17sxWKd5NghoCsVnrwsr4mwL1VQotRGYzZCM2B7rYryfbm9CFVD2Hhhz8dynnNyUK",
  "key18": "4tJk6xraBwgDc2gaBwaUddpRCv8VnNFe11tchPNT3wTGrsWaeD5coXyxxyGEo45TPhppETxTzZTKBGUb3hkjpbhS",
  "key19": "2KgyUWxmqpqMQ7v1rrvpB14HDqeq2kWZmBei1MEjZb9ouCVbB7T24y5amU9nt4iiisiY1unCerQ4ppJsqyfQQFad",
  "key20": "3Q6BDnHjCSub6YbFArgS4MWrq357VeZgHe16iT7uz5jWAcNH2xFfoHqyazdiuSMmDRzjtyqPeUF6SPNQupicGxfs",
  "key21": "A17baDvwkB367sD9ojvGACLS2ng5usNWSiQAkL1ECMdQtpd5BPoNiBEE63pnBrVV14VeHdjMbMsUVYjftk7Gne7",
  "key22": "vAyoxon4T5e2BZz9w7EaKttpsnUY7A9d5JZX2id2re8PdNXdGUkXFJcbX77AojVvCw4ZWnhekEPBdq8nMUzSgfq",
  "key23": "5mRfzt3XdxBhgjJV2hRhUhYtiHSGGAZ3SHdXcbgqpFui6VPWNVLyYPGs5jCwwhgjBhF7p6svJ92FTfU9BF8akoPL",
  "key24": "5guu1tjrs4AW4FgHkWa2bnFEhcxxc4TkcMXkunn34TzKHp6boVKeTQuoyQuaeJPfJ5SX1Uce1bkFky5WGzqvc5Yc",
  "key25": "43LHHk38x2zKyNNHGNR1buBWcFre8ri2gaMjJNd15dcjB8wfLunTrtAC5woSghzgmVZPXYLyKN6eEGedbz4X28X8",
  "key26": "Gk2z9VZsjHANhvDAzmXYV8QmBDiQSTJHi4JXcQwSCAEinE9KmaqTpehzZCZdkik44ZAbVwrzLf8SHvuRd61CszV",
  "key27": "4E5UUP7yzZbadY2BcjkyfaYVx2B2PCQV1HjYmcFiLzAye5ip35raGT5Ug1a4bVky8T37fG1TBw1UQre65H7q5Dif",
  "key28": "3Z7FYXDt3r5ZiM39Z8iJerr6y2UNDtfqmu4vRCE3e5Pd7vjchKZDcrSN6FFSuAQxLDXUFXtCgxRUg77Amvi3VVfG",
  "key29": "2PRjKjDJ12PtrdP4ARczKkf5VdktznVQymALSxdbvREjHymCSK8ZEeqWpadNnEzmUhqg3kHiBDnD2cg7667pundU",
  "key30": "2sVwFBPsUY3tuMdNuBG2RhKSw5E9S5JZvdPg6R8F8H8WhaQXHGqhCJ3oYGXEUroNu5sdQs1gJkezyaAKchkT3NpR",
  "key31": "2mw1UughZqvVD6msPT4ehJ1rvNWbjVcAp5ikBbVdiuRTu8ywBF9sJGHypRJDgRyNobcQnLAe4Wx7t8BhJjVKeVN4"
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
