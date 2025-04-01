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
    "32aPfBR4i38pQmdeZM4qDgpWsE1LEDSxacjBc85tBTo1o8n1i67JRV83tufpo5WUxdLJYFLChFrqt2b372wWZ1Ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1WEHm273cb7tDkvKE9xBTZQ4LBCV8Pok2dBUw4u5GDqFwvSNqeLRSxt2SSGsb8voVQdrM1Uu15iGwo4CDi6jSn",
  "key1": "59r71keFdnmcgFEGPn1CUJQWmfigbcqB6BtGbxytrqarp2k3CuA5oJ5hieY9aXege89omvfuHYTpWVoFT69HXWKD",
  "key2": "3NuWqkJvLpRNTphEqCsixAVjmFBDX7JtKrehx2wNK2gkvqFm8xouWmRzcyxPTMXBs1VWii5goiNEJSmh34wUeUMJ",
  "key3": "5949k6wLvLeCUXXpvTG9aUqkBCTKaoPAqFf7FKmBN1SXU1J2NVaeyBra1JQ1eWy1f8cBvN8uh9xoLygivaYSfAjM",
  "key4": "52Lty7REo9JNoFkSzJTDM2sjE7tk25JEJpgLnAnJYCvDaEJXmFCaCx17dPeMwszrLg27DGVY99d7HR5C8rRMY825",
  "key5": "Bnuo2cpabM74D5FGkUPGdP2bfHPLnJxxRNHxAavP6wTnhrn1R3CjrEhJRwUMNSTekWCViNyy3RXtF5ph2K1CZtf",
  "key6": "3jRNsafsT6SXseV1uazWevY85edxtyVjL1aD5vpVUHZcfDDWZMQjDqChzQnbQc8dF6G8Hb88iT5BiEovJuTWzCCh",
  "key7": "2yJaEM9Cdjzh7ziytCmPykeEagXvTAr6mHgkRdqZ7GgzsNDjaHwypaxrKrMTsFTGKoYkMyYuoQNUwocSeU7cTWqP",
  "key8": "s8255bKvXrKKGT6mDT7cncgKGk84jTx11jL7kgEHVHeQCKgSrQrqKXo3zHRiAxZJ7fYgc7BiTmbNRpTcDEExtWo",
  "key9": "3tt15ijLQLyj4HZ9JFTMGefgJmEC1pQcPztfZuovujLLyahbb3LDNgoNJdHZB6CFvyeqegWdRZCNK9dojvciksM",
  "key10": "3aNotHkxNYg3SxkD9ev21478qFHYk7xKmZFrw9uXXnMFvn5WAHtfkMZyxcXaVQw2GJ7XVTB43PQrhUDNqQ7Xqsby",
  "key11": "5tvZQ4V7pc1Vj78bhtMo4nwhsuaHXBsup1Qza6LnaPZDKgap7mpJEc3kuY63zcoiR2RqdX6EJXMvZiQkfjU48G3N",
  "key12": "2RVPFP5sfYo6UsYBZb8BkWd651MSe2WixuqLkxk6G7fH4nNeHsXG9VmD6anwQyG5ao5ttVcY7US9Yo7T5oyVhQV8",
  "key13": "5FiLxtLT3p47wy65TSJw6XhWiMPuDB1k46Uepo6UZrfZFjDHjkMsWdSp1wxsCcegDpPytswwNeSGaxmASoupX1PQ",
  "key14": "23WNKY7FC6RQGe4Ygv96f5zCAVPsog6M2ydfpo8mY3oKeJHgNTc5GXL3oXHoDjP9w9AFsh845CawUVrNqqLCifi7",
  "key15": "4CXRDTbjYKZ2mBcRj6WsmgG1hSriGx89RgzmWnXxqv4aLgnuFywVuJdMQa5FRgf7SFJUiuLLhN7eeSvgECK3MHwD",
  "key16": "4DdNqt8Mam25824dfy77BMrsP6ShiZbRHQ4vPZoHDUZ9bbYrmmfzKKVxuV1AjB44HRzjrsovifqix4vQk3RNzhHa",
  "key17": "3aBkBZMdCG33wyb9o3TTgkw2Vr2HRxXMptukSHohBnaVymhLdRWixzzZH1bozc9FT6R2gHrDGFM5cK2TAFE8x6QJ",
  "key18": "2KSpNwDE1vQdy85xmoMBtPrSroTCwyUmFLASQt7R42rkACPbnktY3ThG1RDaTCzGzZHzmWDGb3vAf5hRv8AP3EZ6",
  "key19": "UYtgzvF67sogcgp9hs473BaT9K38JkWzo7Vu3jcXLvrZZ3nGrmvtWnBpfRmX6TeUbYYJAzXBikwEcZSKzuW1NK6",
  "key20": "4p8uYZVSvDHg1AtXdBQgpHYK6RfrZEC2BqMDn7co8cWbU9oEVAYyJiqe4JoV5zjFExJX2AgtikLx3d6rDGYismcG",
  "key21": "2EqHfjAg7dNUQcZtaoXL2yTSLQTES6mq28nq1CV1kaDiUZd674K1iR1puNw1hHpjCKQktrhvsKVXEPouZq52NwPD",
  "key22": "3FquxJJ9DKDnZqESwmir9cCjGoqETPcJBc6DE46AiizYJixRRFkbiXPd4sfxeyjKyDbNAPSG3dbgNLXAWGmdsG5w",
  "key23": "5T8aEt8ncxXnBJUj77D36XkEREp17qY4bADCbund3NJ3W8nnaV5t26A4jgAG5U2upf4LVRxVUWjRcXXGuduYU45h",
  "key24": "5iK4tbsQgFMPbTwqUEN9WKnrn1yx5qu186Z3RLmQoqkbGEWp6D3RsSMmt2F1E5YU86hP9X6MqszqA3uJwNPPEJCw",
  "key25": "3YhTrFi94eCsaCrc7weG4gPgFoTpgBTxwqDNJ2Qyc8wWp1Fx7MVJ5GLjBa9VFmhprs7PCKLebahEtc95fL1HWPV1",
  "key26": "2sLvQPw4r88nyxsuiRrQfQgC2djiujCxjHQT2USbvKCm62dj1arCgPEaJDazz6ZP2o38VP2veKMXYYsnDDhWjt6F",
  "key27": "3DWAWq41jprkGg1dgLkuZuss4sgdtuEGqDwD3dQRYAUbTsxS9c4Wf3aYXFyX7sfa5oGDuVC4mkrcurmYbi2BSyue",
  "key28": "5JWUeF6KU1XFQo8QUEs6UYdyqLmNvpR1Hqs9iLbx6Gj488uFHz6M9dnM4gVBzsLwQBdSDwSCyQCJCED6RixqSrmv",
  "key29": "3miguxxP3CA8KJdwgge9jkWG4ckHotvAZmH4YUkRJJ4JtZ1qvzstCaHQPbqyNMYT46XX3SXR5G2EQSBHR1z99wSE",
  "key30": "32uaaxGsGwekgiyFxorcq9ZDJGWKAFWJ88rxbyNNp6F3ADJLUymxet1So72Fw4DvZrTwtxGbfxZn4YFqyJZjre85",
  "key31": "2Fmns7s2RiexS7y6Sh5NbYp4fY1knzBqZzVaqQUygxYFbDJ8hmsRLzbf65F3b1167rv5gyyDNZrDgi3YH9CVJ9v1",
  "key32": "4TTgjZVLjqrpWSSrGAVA6hkFirzymTVoA8z2UVP2RHmKtzLArKn8mn9jPgsevNVhoac5VCCmn98EpnzXMm5n87Vi"
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
