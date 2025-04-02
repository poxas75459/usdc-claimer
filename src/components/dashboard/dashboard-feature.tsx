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
    "5Goq4KzCMBnSMWxSR57DUesoHPx1kDo55QWzdY9qwHrvdLUrEmErHDsb2BSJiu1Tgzy8AsGuPF4SY634TFQzNdhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EUk4UfBTxZVUqqTsqv74dXU1EtN48JEYarQDqdGr64jW2yceHZ9Eg6A3ERQXdSDR4MHYgxfNXttzdFH5HV1jc2v",
  "key1": "64vEXqSbApnVsMTqRqZanyqanb7DNXi5PoqBi5iCJuCn4cWxLm5iZnfZY5KS3GVZ5TyL7SLNnwz38UjKfEnLMR7H",
  "key2": "3xc87H2bcto3TRQZq9BRibHHqT4rG8kCqQMXXj5JYzLvGasbaQt95nppVsf8xkfCcRaL6rhAa8KTH8YnVjXCE7jA",
  "key3": "1gfVfgdLPWuXxxowH5Mi9nWPftkVgjgScTPKiGiHyPKW9n7ikMbS8bPxGP4MkqPJC3bmiTgbDMBWX1yoAYzgnSu",
  "key4": "2tJFsog4rXSzas54tK98nhPUvECSy47uwsUQV93CyWvGPzUPUEH33ekfJjJrpSHkhtpDaTucwMFgg6RY8xTTpkNS",
  "key5": "41msuAxFjmdFfaRBkk54fx15otufMt8eB6p89XJA7Fg3rBVnyFrdeuygi3SKVjtXvDc8U756r9Cd6zUuY571jZ7N",
  "key6": "2NLiSTrhxaaYpyQnFwjMHDPtiVAbDEVKRuvrQtYMvm9geNEW5PvuAVFavPL5t6ZJ1KNgWbRAPADP9gkZpnw3SLhT",
  "key7": "uz8btuNuXZaUkMe3YBU7rwaPrCtSwgp91KaQmdMJj5eMhH1jA5xS1vFLREm2YddYrNoyjc55ZxzwaURxzGoc7pY",
  "key8": "2nxSscC3rteVMuByJZJMQ9YUXRK8mth2KKhhdX4SHSZdwBcQQsNZfEsyV9nysP76B4CzBySrqj5bqGiPXU6nXSXJ",
  "key9": "3zayzooLSYpRuKMJaYoKhGgHbK655ttED3cdhJCaK3nfeN24Pg95gJ3KkLkPWdZGT1bX7MtNJkoB8i2sT5ztDof5",
  "key10": "55Zz9AKvgkf23tPMRYonzDEKbn4JnEhttNEB8AEUuz3kFeV4q44GdPP7p5GwVhxDChgRAZTDDA4X8BjAfC3XxGWd",
  "key11": "GKFYgYxrFWwSimAAGPour5NzZW68X11vfrj8wbqRPiR6VYY66FAfiVMHpkariuVKoS1FYennQcwXMKPQyptLEin",
  "key12": "3igsf1Bxw7MZxYVQnfCzAT2UgzvD2QLJ7CHwUAbpjoqbgNaNXrQ7B2HuRRZhHmcGY9WiWW3rs4tMg5RnoE6z1WtA",
  "key13": "5UzjbxurnrqhDssSvWUMCNWBBTPxHEUCexYgXZ2hQVGGLTGccbgPBoT4Y8N4qqVdG4nwj18wQgJHrzJ9f9D2ogTE",
  "key14": "4dapgrKxgLY9e1MqFaSdobANJrmp2ZGz7Rod9Qt82trrEtHb3G2xRrG9JJXEruCLHcmYUgZK2XseaNmnVf1jAPwP",
  "key15": "5G7nGHxi5oXSkHdfqi5vyE9mYUUoRV6m6yY7BcYSQiCqB7MxmsQT6YLzoVdtQihYEG8WTytUfHtjNoFeCthfFfwD",
  "key16": "5dpBxa83T8FsvEGbDQexG4AH32cAx6gsDJnHEBo7BrrToWCsGSo8Q1gMGakj8skr5S9NPermg1FQx7imkKqpJhSG",
  "key17": "GLmDdC78Ui4QgSHNTbDBfKnY4CXKiuTyNEEjQnNx1rwcu7fdWRoBfSogKYKPVZPEXSA4fjSGBXAqwfAQNLaJrKD",
  "key18": "qanY1onKNQynFLEJPUSCF21WGFFxe9X2gYxjZ3BYo2uPuC4ecvSEV2XYbGVJ7pv2QTvzpWj9jcecatxknbCMrvE",
  "key19": "2iSdJRDCSDruWhVhDpbL6H665KeWvWdXgozuAxZG5yTRT71cbodmnm7M568ngvdNX7bvJ48RV1LVMpiDNsYfqLnv",
  "key20": "2D7PkAZgyZVFgNVnNhMcqEF33bEaMjQCrh8aG1t9qgx3PHY8nNgnV7TL75yfu9CQDRo1TpmUGLgZ2oppe4yf7T6X",
  "key21": "3468qzWfU4BdSerhBzgqqdgKRvmndx6AM74ePz5T3LMtJyKjNAHxtzM7Z1513xSBS6aDXFe1CMAG85WiiPVhLJpX",
  "key22": "4gnwy6YZmActHdn2Pqqr865yp7ytEA9rzU3JKTsoNtMoTzcKRnfLdwpGLQXQFGAhuwB73ayWhfLyqvDwhcYMkdu5",
  "key23": "3pWsisroUsqjSKkELh9h7WY8BnYJKBBJ9BK1K4dTcQKucrRrsdf6X2zoe8qLdAGsG2SvPrXYa7jirx9E1hzuMkRW",
  "key24": "5ZVKA2qmiPqfu2vTMGBHBt8nuF1cua9iNcvBqcEk53p697bvcHAkvwStyRnYNgb9Ayk4VM9mGGbGt7K8zYkp553k",
  "key25": "NEwXfnHwgPu82JkcVax1y6hBzJkeqNBwLNUekiEwHrtcHyGXGe2K8HW29gbP8JLY5UQiY895c555dwXN5WZj6cD",
  "key26": "2QAxkGGg5nKPQsp1C6KPTwMG7yqR1sRj4Xk2ga5xcjPT1dZUC466fSyY7kaq7b5aU3NycsuPe1TCBHDYwKyVEuzM",
  "key27": "hcAodA2qjHWaQxTHGiTcKZEufNqLxaZo26z7uVy84CR9DbcPFcKb5mXB7UKStradqdLeRSmMZ4iPKBkhdaEvzpP",
  "key28": "2n7FKK4GRwJEP3nrQDxajxP8YgNnSbdCy7r4dXu2LuVMBYnKh7xfYFx1aojyGxCeB34WCW3Ron6DinXGxyn4DhPw",
  "key29": "9wsZPvDPXybN96GnoRC4z5MqhtR4X7BkkpvA2AKNsoqnQsdWEP2VJzhJ7deSGjURfCjuUAvp3G6FewN9cGe7HCt"
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
