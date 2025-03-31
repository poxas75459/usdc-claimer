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
    "5WKBt9QmHeRdndzc6YQBqKoNtkf6yMmxyS5NviAiKLnq5y5P95A62NveWjEcQ5ShpBNDsjxqvkCSHUNaWZVoPgaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U64h1RWdpzKGwhoKnHG31Q7Pm1taQwkKa7REX9ccqjdbEXpReCmSqjT3LGuGg95ojU9nu8wXaYgQ5uiRmz1NXYo",
  "key1": "2QABPgEVub7dG5RNzDJAqJ7KByfLmnGmHRjHb9aWCXtt3cJCtwtdMYm8UatkiryiTNkN1obfN86KTySqZrKao6Cj",
  "key2": "4gFzZwV3CWog7p2KxiicRgysQQew2ekVx3Cj2KP78iCwYxcZPcuSoNK7xf4BAZhZXdGccC9JgdD76vyV4vSuDbuF",
  "key3": "GhACoxgsPCk6WSEhgu22kScwH9hEhBb2nsaRNLUXH9xXtnaKeTzoNiRotC68pHyfUpfQhwwf9755adGW724zcFJ",
  "key4": "5Ue5kGMqJs5VA8zdT3qTazDUjhqqgxh1NNCZfyQPA14CB3NZnmzPyLsjVdhk7QrCKY7SUS2CmgAEBiUz2JGqju9s",
  "key5": "51LQmB9A5Uc2T5Uh1tKXCXavHxU8Ert8jJaCApY1Q6sZU4WBW6vkmfPMf3R52iTHUT7keiv9MGpbCCa5SBhyw3ZE",
  "key6": "2C34y37zFC9mc6vReW9urrmucJAWuJSntxwWhBiHBH4DQJVEtis5fkU2xwQAmCkzidJiRFKs1bG5wkqhhF6G1kHB",
  "key7": "whp6s26ngrEAFh7McRg2MKBBqXuzrkzfXfwNdBuiRuxjRv4zT3DC84z7PRX9SBuT1v1KzJxYaWKiSDDTHT5TnBP",
  "key8": "2x7MJ9f9vWXrBvt3FD9ajQ3W3rMBgUnRxfQi2s6MDNZzyYf131XqkJQi2wjKU1FevWH4hzuYmA22e9gyTa7eZCCh",
  "key9": "5jXkNduBq3veE5PqfRfmBwxgY2EM57ZBiESH6VQLe3sNfpmtCP1PiLnLa4xu7QeX55EPZpU9WHxTUKVcfuAngqHN",
  "key10": "5ZRhR1Dj5tKvAKLmgssoo63HEqcVJAtpvUx5ZVHiio1G1EaJZB6cg4w8FZ75GRLhtazM35WrFME8PpfHpeQvSujX",
  "key11": "5YSSi3Rt4bwsb7zGn46AjLGpCC9xywH3nqWu6CEgYsHzd2uZQioC7YGhcnexDLJshCUaWxLj3W1U2qsAZNkDzkcv",
  "key12": "4CPV3TLsFWQV8vm5CgP3dcmBdmtWAnu2D62ZFMtR866yTuADwjnjwyS97jZvq1wYHSTXYnsPCfUDgJkjZkCEmkq2",
  "key13": "5JRqgjHPadfQj9TnbCFZ4QPcZ3DkubxmasNZN4BYyQhqrfRPxqRKsEiqL6Gff3932jJ4mtwkratGtxdxH7zJDzRT",
  "key14": "4g8cdjFboK9TUxpuGVVXW1D9PTtzSUs3ucvGA79usV9ebgLha5qhiQCingZmktLEjLm9LcXT1xXMTMqp6HLAEJ8X",
  "key15": "3Mu8vz9U8p1hmSXmrnqNkc98DCoUu6n31Qz355ZfsvfWd73z7ffstBBbwucWZPHxY5puZtB4X8ibBCiu4RFYpmJY",
  "key16": "2CKkG2EDRY8EJddeXMyaCwU153BcpsfEgA49Bm3czJp76EpFmKpVXCVHxV85btzzbMcX4pbgFPJDVCAyHxkSY5MJ",
  "key17": "ciPGXhGKSooK8UZqg6pAjzNUcn43hQ1QZSmX2zwKJfAwWeAXVRgnHuCUmQYfi1ZhB5mU55fffpWPMkshkpVYkZv",
  "key18": "3NoLGQEBtSBThYeyxNcp54PBYPhdrfUFHGaAgiZF7eaUS8YrES3FpXKHM3Sk95nTgfDQzG75FjwZKeoxgPdJvkVB",
  "key19": "4oZ5Ae11UBEzFKe88vBXgkryTyQyCCLd8uYmATYzBdJDqnZjRHHTEuueNkJ9HX389CPBTD5ZY3SBaUguX7wxfQcn",
  "key20": "63hYqT99VkWcuhaCRe2nPhGUUzSY3hdJyWF8GseFt2FTSKfFNdAgdCBPSAeMYGYS3Tff9nCx9QfVJC4vsnbJZ3qh",
  "key21": "5iwRqb4Ms3i92SsBKF3bfvk8dgrb13FTJekKBWwf1D8nGrLzZ68YPqxy4jr7AVgo3otpeEAvTq1N7Js4LdaCQNaR",
  "key22": "5TxZ1o9UxTN2dxPFWQgTfGmSQxCcHQTAruRcivENLnpT6EPx2FV4ycNWebNwP1xUXNCHUWFx4BjzUsXExr2kivFH",
  "key23": "AmNuoXgPed8oxpTQ4dtRJNJd4eLg3VzZQpZXyrYBS5ozEYkXAgxwCzVHjPNe1uPqpPKYYeuj7tW3nLgn6FfXuEV",
  "key24": "5HBcuKUfcLDKUH3SyaxW34hRagU7kXZYqG6sWrkTxKw3fjgeFWcveLAaNdkxZMtQrory3Tt5HECmc1JpZ8XZwGSe",
  "key25": "5JYrrP6N9rGunjiDRQd1pAoMRqExWUB3i99QupxBhfg6AFECHXwVvppvJovSeFGMkFmiQk3QLLtZDjjKy313zeor",
  "key26": "2p1jLtFQLiz2FVagTRRjHgg7nNoPhnQz8EwCwTfBiik5QdB9jhCQZRzgDqERRPqaVHCeS5Uvt6LyhWKHbszBeHSP",
  "key27": "5FjpMjMEf2zWas3kX6f7iUrjyNVUg42GUzFR1B2nf9nVFD6hGRa9jAbj5KvucHb3ohewn436cszNBhuGRbDKXU1i",
  "key28": "2MpkK6v4oMqipjrsEMomPhxZHSdG7QbU6vi1xzmRSQicCYMdcLj5YXL3kET4MVnvvo6qMjQT5yQFezL2CXZbUS6E",
  "key29": "vQHagkdcAJqRvXN9RwzbXLUpiALuw5RwbwBhwfUeyheD69KPZmrjZzNMdfaXWukmuVWEBwtBRqZLJ1r9quziF5Q",
  "key30": "21ZtgFWBwfJZCpJbt7FUEQtxP4b6pVM7dTmduE4PraxJYVpGU5cCVQTL1VRScgjWbekbJTzh2GadJT8s9mXCJUtF",
  "key31": "4wCBTSkhQYyAmyuFoqqQTNHTAxJU48FNTpMejZHipXu8jTniAikDXfDvyqdLd2RFp682vpaeUpRRut4EKF1rn8Y6",
  "key32": "3DqJiBn2uUfDaEjgz9FLCSPCMy93MAaS2qt1XjsUg9v9GHbbRvpoL9AZjasMahHKooJ5ajW3FdRfJqyCKaPGreTx",
  "key33": "2Dw5he58gmg3Cy8YeVszvXMWhd9nWfJNtZ1QA2XVuRBu9vYeeDc4Qc5GoHm2ExZdZj7jCELhgXrtvnJPJeCSFKJh",
  "key34": "66xbwB39aUFmcXABcRRcPC31q9sPkm1r3kT4vdnUFMfZyMdfhqdJQQp3aYizjYTVz5R2Dzg7qfA8XcXCuXKxZLQb",
  "key35": "66XeKmNLMJJMyj2Ed1DsPAd1fktmfYNHX3E48gxyU94BTXH44ifLj9xPLBLEtNX2NAaku41yvg9eGb6czvsw4Y3h",
  "key36": "24Prhp6Tc5NyjqLKFJSDK3DwKCn5XQJ1rteV8TUM7SnL9CQQbiXY8auPp7SASQpFZf9AJhrgXBozAFNZjR5dkmnw",
  "key37": "3LkMe9kqTK5CwDiuxZiihCLTq93Zp1tGvTxKxpXaz5zFRb63kSDeA8bmy4969s36Ea7rfExz3gL8F8WcrZeQYURf",
  "key38": "453RrhJ16xERXjax36zcfoiJBFB4Nq7oehrmWnr4CJ293E6fPJEeGpKyVxN81LrvrnGgJYgfLL8NWSk736u57kGM",
  "key39": "3uW6nyhtMLyAH5PH9LeZxQZbLwiEAmCKU9Uhh96pz6yjk71q97GAQE6nAFjycv5StBRzEi9qXXv9xc5W5r6k9tcY"
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
