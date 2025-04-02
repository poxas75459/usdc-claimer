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
    "5VJpiTd9q4sd4U7GqgE6RPvzhdncxhvkQgQN548eMdXnhWaEzqHbdh1PA2WHQVPhJxkWUF9Se3B6pxRZL8r54GmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDPB2fpJHLGDV6tETmfJYUkXGpLg9ogxdQdipupxqUK97k5RXVThy3PtZNHRRgakkTGizdtmE8g4DGPmqgbcDQj",
  "key1": "4bYA5VcBUXgq9zNZ2qxQGFTbYzr4AXUiw3uP1RJuVrEk4Njc7r22EED3jCxgLtri4qjBsqmHen3WZF23ULG6kwsr",
  "key2": "rJSNAaNQQ6xAubtcVZh9CqkzmA9EaU3p8LydN6cjquUY6SNWjQkRsj3rxk3YjU5Dc9bzBF6apNc6bKDPx77TyYQ",
  "key3": "2gQ1uCcbhoQbwL5KizmsDWpEUhvu1U6V93Afun9JANDiiKjZLDnGsKWZeCNzhbJNiYh2EL6Cm7GX5NBHDdp3joQ9",
  "key4": "5ZtwcrTU4fPxASy6FYayPdRBjca8wCLJSBQAz214H5bvFJcPjsKNxVV5JkHoJkwvzCZRLbSn54Xcayhq1r8As6bW",
  "key5": "2hTumJAB8yXZmYgGeX23akEDUuiJZvhinFGBiqcWrdKfzV6ApSSLxp5W35Pqpx2RHGByPQufo5xVnERPyqDPqY41",
  "key6": "mwGYefM8yFWw9WTXspceSGhdnX2r2bLesvBecvr13xw2xSxWGp4gQjHDxxPwcUhpLkT2Gc2rCfYJnW41B3GmhWs",
  "key7": "5aNpNe4TYcL2oZbYXdSbwUBRJqW9quZ1dr9UkVHGFj3Nutkxfse5S6JUkyZmuKuh34YDt3LKhcma7PeEXUjMuiEQ",
  "key8": "3iirdaFswcuEX7LezgXn3KJT69j5NeJRjRduHLYe6uTN2umef2aHDMTdFsvBtvmboq6NqwtZnP9g3W5KpJs3zJr4",
  "key9": "43pw5BeXQHHffayXXBx799Bo4GxZJ42UmaeaF3TBBgf54RwBiw9rnukdMhH29TqmWso3TLH6XMyrL4QQvacC4ruK",
  "key10": "drMo3VrHmL6R7meTbAnL5NowMBWK4ft9M7r6bXmaxo7KYLn87pQP1YnsUPyzHM16ztp6XDtCVW7wFZRhJEmnvJu",
  "key11": "4QCJgXt3T77JLCbGEtnvWYHJcvaEFhgDVVQ817SS1mFLSKxaqHg6cV4FiK9pKo95u8Stj7oDn1Y9VWhMVufm82N1",
  "key12": "5obAVyAmkgrdeUWCS7xc9QcbY9zTdzgq92TXcKQfphdjB76jCvF6hdftcUXd8jya6dfoxryJ4pvYiePsK7s6Cbvo",
  "key13": "325WT5AKnjwb9Vp9w72QGT8D1ETAzJhhZ7bALo6Zwme2Ta8Kh3CBKMb6kpRXsYFBHfPFbkhbFXX66qG76G1gx9Hh",
  "key14": "3qBTMmYjhHJYLcyhtbhdYt8fkSrd97Y6xBHMRZEnwFf393g3uit5aidqXSNMB3DbiXSM5JXG7q7hvtHQCmqRKxBi",
  "key15": "4g4fUB6ryZLY1V7sj4ewxomXyeEZ9iArAdeNZ6ividmygyvjep7rLvv51HtgVQodpmcRJG21ibo3zNc9h8hShHjY",
  "key16": "2aRCRX2w1HofE7DbFc3AnHo3P2dmKiWEhekYvqLHyXkhCcSeLNcDYAy8ZyqzjgpcvvCgAaz78Sc7KSxY9RuaLnfk",
  "key17": "kERSSXcwVrgbMForsHG3BcQS7FN4JgrnXiro6dcCfki59mQLTN2L6zQNJHJGGNjXrpPPexWAurJJoE5uZnbsy6r",
  "key18": "EYvMwTiHUkQMv26V7sNVd8DWFHYaNyPqqMju9Ni4f44mWHUkow4swjdWdnucHvsgveuvFM69jwyfgBPMPvTRaga",
  "key19": "3QhPqkgzmRaFcDGP64D3sfckbusfW2T3R4rbTmDUuAnbK9wzEfKhhBkPUALow9F1Wc34LBVgaccXRzLzN8Q2DrZE",
  "key20": "bZwoz14ghUHBfWq5cS4UYS27KdT4EKiN9j6JXQYaB6cQE1AG4Qz6q8fYx6vm42w1TG1xN9EgkfXwaViaCgErcVP",
  "key21": "34NBS4cdHogu7hebRhWgyBU5Egi88Z8JS8ZFkkU9n5KWo5MC7yMH6pX2bEMfAYPcLbhLowQHxuGnzWvvU7Q2KSyQ",
  "key22": "3MfajBrVJR6tNDowbhWwUc6bPEEJBUhPGdc589s91TkEoJjGCHNWGX8z9Q3LcKNJtnJCWgc1WocSgUAjP3mNK5kA",
  "key23": "55RCxXZCFk45cEgMQHAMT6tmDfxk2dd812cuNiaANbFv8hmU2uiUTaxkQ1WAVdfPxbxN4zVG9G1rhezdmcZAcXAA",
  "key24": "3M59avUrT7UAE7W8fu7LMEqJmsuLtaDgxchrSUxw9YeDPQBeXf4FWjHm4BZyboxJNgDjhTRGZJ18K8W43LR9whwp",
  "key25": "NqABVYsvtitG58yCDtfiU2H6sQVJUYkHZYDyuCWiijmD7y3JhEdXFz48PDVPyTRG6a42xdbLCYywtWzacQiutKH",
  "key26": "5D1ZqDYDHf7Co3JrypsiB33jnKBYpatgzEu8K7FdRBrYrPkEeBtU1vmBLvstEijzzJuqr2TozemdJkRkb2BLEkrU",
  "key27": "3MMTh1xPy76gcK4tUVgsyvratXUyWj6epaTkt7nGmckt4rmWVdnWDFsSznRepSZvLjvVKT1hq3NtVt1WNdigQq3u",
  "key28": "CNPFUpdD54petAW1UZh721coJvftD9S9YDPPwAgRbLg6Wr1HFJhLuxRfQ4c3uNrjRYwWu6U9nSJ4HBTA5mc5eoT",
  "key29": "25xStWfmiNpbnWepfT5dPxyWJy3FgC45JQwLZcW3cJwRUSUNvneuhPk7sjDNWVFWFWXkcuXeCFsawuHf6EjE4tRP",
  "key30": "3HhtJoW9eaRbaMenndfB65jFUqd7wVqQB6d5yKT7ozxtgke5BvGuDrofTLoXkKCCbWPsgk4R93PwsqHY2c6sU1G6",
  "key31": "5pPdbQBUupBjHmc1sURDGxvsj8hn2hCgBZnkozQnQEP7wcdwawHWMvvWDYAkzcc2idYG8FUY2pZ2crZhByU7Xnhv",
  "key32": "NudXmbfhbAb8HpnXmFdxi8U1YgkzsRbu54prvc1EbJk2ByMPxfHXZ9gN4oxJkVPfXxGo4H6uuMGh7g7PjBMgGKk",
  "key33": "3nyGgzigsfmRm8vNQxjpzKdSASk2EcHSqA17mMJkk5jopMsLnm9kiMCHbr6gW3JExgjoP1j8gbYbvFy7y7u3kjFJ"
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
