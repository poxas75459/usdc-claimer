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
    "ppCcAh7cYq6e4vVcD39GPqL1JBCKMb4nBtvKbaze1oyHvEkFUFxxkVNVNr8oanoHLwqsaRk7ow9Bps7MpNS6eJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHLvNhUiwTxMjpSkmqSiErheF9nZ9hqZQoLVKmvNBUgWFLDceQqM3ghm9AjpGq4HnS4Ao6Yu7pJYaAGoxjR6Jru",
  "key1": "4qV2QH8TiaqzbDa8dfjqHQQXHtUaT7wtjPqL82cEvAPhMaEyk3vp1Mk5tHYEebVXLW8WZajWUyMWYgJsH3MQnE2d",
  "key2": "37cz9cSsEqR4yCYT5vWa5xFNKfCDMGSxRAmU4KYK6GGsCwARnoJckMuUS88zdDoBicypLorKjdNAEeF2WSJH9PU8",
  "key3": "5DqXje3KAYqquNJmLFza5ffGQrtbZwGyTDMGHFiLE2maJ2Kz52em9wofioWLatjqLA8gUQtCnpv4dpUwEdEh5ktX",
  "key4": "2w3t3jxy8iUaDYJeK2L3iMwzEbHRbLVRAU8ucgZATzPjX2JceWF7NLmmPCmbrqz7HaiioAFbSXatMzrphFoaTCNk",
  "key5": "jCaXGzE7BrsWM1DiQaRbNSPz4neTz9dMR16TNdjaWQv77JfUXQnRUZ4hTvs8C5fdj1z6cU6XcbHsAZFcgu4znpN",
  "key6": "43yNq4EdcoS9EkD3W7cTXuECB6GS89yJViS85sTuawQzpeVa4trQmozod2sUZrTnBMj4fYr69ianV5qHVZBYRptM",
  "key7": "5k2XVJ2bnnTkxEyHG1ifxMZKJ82eBdk4sH5qMzpVCZN7Snn184uvquJ29omUfDYNfPXeCMzD1SbBC7eoSx1yng2o",
  "key8": "2Xb3affnvHpDKWSbBDkrBY4EMpMvbjSRZMCh1SsqQxJeqa5ZgRwdfhGDmhRvQb3dMCk7AF3wTbFCp16kGZFx8AD2",
  "key9": "2o8cAjZmuv8zDTnT4isP27nqDLuLW6ZvRc7fW25uN3xTp12CpDrpvAVskvdCqoqtezWgo6QxKhvP3xP9diMbeaGg",
  "key10": "CM9ZhtRzP8jvWUPgGG8V9aPPXZepgda3poNCLCmRRkcPvwcpxTmr8wFqxD7KyA37Des59f3dcxLFGdf84WMBEVk",
  "key11": "5RxDKgWDvqnDBoSyCYeJsFqgEHkVz7WGv1EbqaJVJ4LxXEjPMNnVQkZSjQhfV8xsxfJo5ZttF41G4vzH3Mf3qoMi",
  "key12": "wDicBWqgodBSbnJsFkB3sfZ6qrW1ZttM7qtK2Nirh4V8YVSUCcbHTNHKw9TcJfAYNvNQjfqe2fGzqeNCUe4NgHx",
  "key13": "4bhUcyDwQR31DVCvRS9LUNRnJcRXJNEEppBZH1K4jESHjd1qHZUfvcmijRUJ7xmR3uv6NqrQ8jAcaZqjarUrGsRx",
  "key14": "5aZa21pJgsKDfwd3Pa884yeWQuBwA7vCT6QMVhg6QqyaEdYVpmpHpqM6TiFDXKkqq7vtbCXnxhUNzMUR1KhGXED6",
  "key15": "3NE5ZZ1z8tchPWWADb5ByhhfDQghqn2y35v87BYSdLcTH81cfdv44sfFGSMscTBbju2zP6B98n92arzErkZ13E3i",
  "key16": "HwUWSSgqqGz2rZjTP5C6vmG7tELKKnTuR59C2LuYtRsBagJu3Zz9w1tLWyJ4uMnvr9PnygtxJc7ycGvfCQGMmm2",
  "key17": "4qnsMpiFo6Q9NZ8W5nqmD9JPX5HC3Z8kyPV45Bb6JcsVxRhZPNquJUS5oWsaN8DLF61M28J9jbWYZe9VgmuG6kAa",
  "key18": "3yumZ4enW1dkdUQLXHipWvNXJnm7qGwdezuAmiNFEFk5Qb4L3uDpag3QZLTx4Riv2xrVyk38n6M5Ng7gbPrqTbqS",
  "key19": "5obHbvJNHymenJLAxMu9WtHYxCn9PofNrBrcZFap3QgX4Mn3vjCkt3GWUDWYeQh5rrYRUJURnGw87i82NrbQdVpo",
  "key20": "hdwivPDBFvvCXRS9FPZ7mGRaqrumfhbKhKKamnKtrx1rs7Jf2zxv5Dius1QD2GhPoDtGCuhNHsqDffgVKQiQhTX",
  "key21": "2XVVESiaV67e2g1857yHLFPKHwaXiiiUZ2QJKoFUdfyA634xfK82cyE3BJmTUk5tow6iGmnDbSpPpt5oJxfKnVpj",
  "key22": "sauFT8FER9mt5ugzSgMUg23UzpA9fFqBWACePpXEbdhTxwFMJSyGoLkWph22tyBuLLQaftv4wMYEnkU1x3F4Zfz",
  "key23": "5ThVv4kCFGjup1iYCpzJPoTxGKyf3iK89o6PUbdB2aQn74AqxeyvjyymGb3PrvHCQFNiC8wjnFYGp2VVwvZZUXgd",
  "key24": "fU4TuqL5QVcdqdBoWi4RSf2csT75fKNW8CJisNFET9JjTT8ZVW1KfonB1huTWkoDBhQtDr6oZx3j6RH7oEWVJSH",
  "key25": "37wUtQn8LNqw6zFMM4brCADfwxnCMSU9jzHcidn1szRNrRuGBbZcjpdnNF1pw1ebFJKjzDjswJAD7LtLdUq7DHB2",
  "key26": "3h1bZ3PZ6Nc6MdA8fgnTKi8DWBxgcYYJ6gysMLHPLAL8dxDd1WRumj8ek7rWGrnEMYQAjeC7YZDdymeC6DpWkPmf",
  "key27": "iGzH1ZpZnjMrLvr4ExF1vDLVNWfKf837Ja5vWQeNmqwjoyJqekDa3Aqg5KgpZazKJjnfYWLAURt2AnoeZz5GDuk",
  "key28": "2XkPwsaENZQdvmDgkJS2DdtfNdwvadTUj8Nai39L5gqK9Wn9TW7PSpe3QXxEYw5zZnkY7vjHH6JnYLKcQeV1nrob",
  "key29": "5FEJMyYqcvJZZP34BqihWBp41KBr5Ru5p77gUJ2C4bjKguf8vWmgyL431nSSvF5iqtVkC9zQor2MoJ5gjt9xPoEW",
  "key30": "4aagSBXqBVvbfmnjPajwseHDAUsDmetAKJPGqDbgSREWe5UULFtvTDGsc8PNr2iFWnSGA9HE3HUMeqFF1Q67VSey",
  "key31": "5kYDLx61hPfirT7wFw4nSAZn72gPpeaa2XxPo4zhQf3LvXkHYK6tVn2dU1AmjQHZ7pamNpYxhtmg5ywLdo6jBpPC"
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
