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
    "5EfubkLm8GSRVErakmXKPkAb1b5QF5HR7yMf6GZL5uwdHof6wav7bShCxUdNNJ82icLSvFESbqEASoqzJcTtGF91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sda3HfUVQjGmSWXc3wvLyr2HAFceUfKrRsqZsiQmV6p71RYUrFt9iPboxqyHLX34qfJcpAyNuGeN4FEeCeBoDKP",
  "key1": "jmn8nRG67q2yEzWeG9taYJCHdVAmSL1zSAm2aDq21M9Lu5cwy71zQXaGZ3YECt8XPHz85tHqT3TvfXzzkTj2ENL",
  "key2": "4L2BpY4XnDV7GFoBDLp7ptrC3yridgofxp6BwRh8Q4Ba72hnE8bAVib8DGhveQuQ1Jw8S1r8176Kcv4s4PDqRNAK",
  "key3": "3VBEKK1Hzq95ZxjRFnBkkrzLRK5EKvGAPDoSP78nACEZFNuqnJE6iLSx31cGr8LjrsJ9Gs3S5BwTEm5AYkbwGP81",
  "key4": "2zcjEUdHuPAJpA2vwKG1RUoQYA3KFe5jbTmhizfWBZqnYNFqoyjniUsiHkCLLVLPhS5cerSnqUtYBKCgS1jMDjvb",
  "key5": "4ZRNHRH9D6bqmETQ5yw9nuDYwKFcDNPXLUkSjxRc2QnDYnAyMQGo1QK97iE1tY95rJkZN2ZsTTHC3CGownWVNVGD",
  "key6": "YtBwodiJEshuMHHc3wX8Fg7fPHfgVzpkaq6MT8BhcxQV2raHRYhgp7n2xYD72b7PM3tTKSny22No2N49h6ysKjS",
  "key7": "24d4mXreiiSuuc4zMRPpbq5DzDhb9nQPK2ogD6QwE4wKrGGMHe4jXKmYHKhqMPRfGCMkSdFnRS89ZeDDRk1vQJfg",
  "key8": "44qFDguXJMD8Th7X2M5mSCgdQA9gCFMDZX5hx1V1BXnGkpRVrMt2uVyoP8T6BxvpuhYUC7wMMq1KpNutT93dMMfV",
  "key9": "4JDDMAgadZZn9YBrRdZ1soyrX5ES4m9BxEsG7cobX4Qv1FCRyHApy3XwMCKXbszg3MgpHNr6ViEsA5iJ5FRbqYq9",
  "key10": "3FSDPNWfJPffvtXdQ4gshyt2ioTQJdHmYVyNJqJpXoFv2YADZQ7E3rjKkMQJAnjgFCWjhdtEswDCffW6w1B1pWGs",
  "key11": "VvRrwU5G9izdSy7R5vWCnmCaggkmvyoA4JA49ZtevwMoW7WuDnbtZQPrwL2phow2HPKwJKisS9J9Dfu9mkRkna9",
  "key12": "4reQosrNrvCAcTwDmyqdJmh1wEYHUBxbwdurSoHxAow2LQmQ8UBWptabfpvScCNfwgm9RjXgFHEGuKUnDjqZEGGP",
  "key13": "WHKeMEsDBjswBbeiQAuZEww2bWr2iLUY5wzaycG9UNmZoVnRp6Mpsu1VQmwPd5hANb5TtevuguP2EVoBngM9iVs",
  "key14": "5ksvVxyjDmkp4buKQv1cLJA9YqFwf6kyfRNfnuusTAc1W5iMEiuP4Squ4Ci6LmjCq2nymTDsTMUTHFo4qEqGHS1k",
  "key15": "5Ei32FtXyqxRmse2VNug6iPEeuAK5jTfv8XtNTjB9KbfKBZHVRHwMMDZdn4r52RjibKgYe9gE5TViZxd56rHefhq",
  "key16": "2KQR99CEgnSJT2H38kFku4o9kmAUg57yWwybryujTdLvJD1zgVgrac1iwM459SveXZQWHTgcizVgQTfWQsCzBwHD",
  "key17": "4ZwX99jM4YgrApUyRhK8TDEmYKVaLJaNhtyiUCYc4nBXnhJVQ9WdScugwGJDJuNUm3WLaUWiGnekZjTT6WqiMMLi",
  "key18": "3CRqZ5w8b8QSPakm6yN3tWsffDiq6Vj9oCeL8Nk7aD6zd5D8xRQPYQ7xoMdPxQAy7ijQNxTbe6vgaQ77kmCmfQQk",
  "key19": "4ZSUAapDhPFUtE4zzkpT51r1C9fwfLSBFfvSzXGPmHtgxGGtA8duvpAvfffEM8E7dM6DViU8ePAQCwb6tbgWRtja",
  "key20": "5jud4dVJLtppz9fLyZdvoLkgSjQtSdrobKvVkboiKWWvfSTAzyTy1d1DKkEeFXwDaKVpbzZq86fX3Tm6NWvW33yL",
  "key21": "48PoA1pWnCu5pRVATNM2SyqTaq5Jh6VV6cbzLcwTaFWZk33rdm4NaitBafCUEJL1VfwAcYrWmtX4hKtNwqHgfzTt",
  "key22": "FuprYPWCUodEja4EmXoBqktnn7Cvp8Le7NwMJB2KA6tvobRDx6v4dbN9YjawnkBqpiVDn38oYSxpf5hDWHWUmtD",
  "key23": "pUDtnUZXdBrcXdRQF5JawnXPKJEfU6XuNdCt78B9rCY2DP3KhdgPu6NAts8BGhCRunnSouJPAoMhqPqvpaAGu3p",
  "key24": "5eWDSJcuRTbZomFWEQxP1rJdz9RAJT9XmMtqqXNvVcibEKj2jdeFboxCT9Kyg86eauxyvum7DkRkoMJY54C5amhk",
  "key25": "4TSc1HUVdG36aruohqABPMpifkLmisVpd6ZA4dBq1yPrxh2SdD3Xs9NNn4eHpbBMgTGvNp1FDjMy6kVGBNDEGenj",
  "key26": "2MPHsb2aYKc6CxnFcu9Rw1d8JUnqH2UoGB7vzyhS6tVdtw7QL4fzwfNxLrKWPLo8WQYPZXkcYkQfmtUsAkYzRC4t"
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
