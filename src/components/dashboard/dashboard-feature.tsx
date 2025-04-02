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
    "5Qynjt7ADbDTJ2AuntTiADfS9G8d9dZ7TbN3kb7cdQ5EKi6sscTe8nbSs8fseE9TSE1Mj2JJr2MKUmMcgruCQhpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQDBGC8N3BP4aKUTaj23t5wyhai6bg6aQz2i71owPaD39DCRaaX52pgMrQXPhv9cJCHTM9m328ESSGLZr97xBCz",
  "key1": "2BN7tNxoKNnrBPhAa2cDQ4ALhVkwHbQnXwYMr5FXhgNkB9mPhuzTxx3Uiz9MKhvGtf69Mcn12C3oQYhroUhvNrqm",
  "key2": "3mUXjnPNtYZDon5RHvWNN9K62izCgzzyPr8BytJFkxBhi7eZC6Sf6Pw5Bz1J1svyxMJociPHh36uwfoyMSPPEGck",
  "key3": "5eieRAXxGuEdKFuKAvoFvJiQap7oC9b8eAMebRdNpGqn7nq7CD1xCk3Q8kd8G1J4gvr7FA6BxRVtS2tZsrq89Gom",
  "key4": "3GUfvwMAYe9zf3EQo1UawT3rv8bNeMBXn5avSo7nDDZ57Avhs1tZXvZVoRwjanXEDnmDDeGUq3D31ai5DoGLfjnC",
  "key5": "58S7ThDyiZKcth66WZ4Gi6QoJuRyRY9QxDzf9vv8Uf86topiwTh9DMBvNePSvYN7H5dHvmBDkV48hroAdPzTraEd",
  "key6": "2yHf52srGjffZCRXyX4Y8U5zZ794w7R27oes4SLLqEBjxeC5STFHY2gEh3utT6NArFeNLKNi7Lr271UEnpJkKsvq",
  "key7": "3RC51tGEYuV8nFyHXnEXAgzdP9JFZhBheb2eXX3RqgRaL3GFwiDEdMYuTzM1jocbDt3kUmAUfope8vGypuHfrWRY",
  "key8": "3m6CWEXzgEFMLCyUEFexSqFLqSiTycpbA2rCrQgMi1Bn1WpxgbgnrjnM63TLH28ZZNH7iT7g3cvVnTWEZUK4qBX4",
  "key9": "4vhZerHaUVPJyeAdqNQF5qJFcKEguT9VR1U24uRDho9Kk36SsqD6hHBD6APGSMz2cS7JF3FP4yteb8dreHRw5q8h",
  "key10": "2QYtfFR7TfFzqBA4RM1rjgNJRzttyvyZmfQkYr6Dy2LrCDWYeF3gdJvLwMRdcXzuDvP45wpbU25RXpxZhWKLjiu3",
  "key11": "5p7try9YpbRJWBUNwVMcU8m8vc8pAJoZSBudiAmVqtk8pex1Yx4Y4wnQDuD2Td1152jUL95DAtnr72BKgL2Nvt1k",
  "key12": "2aUQrUJv9Rt41iqbo24YJ1qdWmezbD7UKDEhxV5Ga3k7xLCRxHduDxRV1bsHJDRi7NAdysKgSe7xfaerQELkzd6K",
  "key13": "ttEVU5Tkg8ezybGGxcV5tVMHYHueQqhBQ6p8bfs9jGpqFS3eZWy5oEnUpbKnVGAAAorF25kS5xcXnb33TuXgcPe",
  "key14": "d14KxtzZDamK2mYo7AGESZ8ndtz7zHku4QdwxH3qxqunGGM6AbLeTKaLzxKx3ycDfnPf1h8uRw2TQHeTP9AmfsL",
  "key15": "rwADH9Jegyx7SkAQtAxVFmYZjy2ggfjyJvUet18yHSiTsQKVDAyeUN2VawXKBjaBN91YANNon9XdzJLnj67AMMH",
  "key16": "3dxgoyWA24oPbxzPg9pFbePWshTDZrafqCNJJEzfXmt2zg6Q43Vihd7R1ptC7JRhiK2eczoPxiYekEFhVARGKKf4",
  "key17": "3rmXv1wJwkPYhGdYLQmruS647eNTTy1CjgPa5K84FEPJdkBhdqiYhzv5mBunnbcQXc34RZDqSi1ZhEc8ggtcxXq1",
  "key18": "zDu4gYd3tuww7puywz2XHiSiXsX1DLKNKFhFAt4uk9NbpHLL4SyCRCFUrAWnkfJXQ1r9DVBGmxm8aSKoC25E7JU",
  "key19": "5kJC36PB58LWGSAw4dn6ynaA7RiUK9zuTTgpCHwCFziDYrby8pQqECFr7zVZcvRqPx1nLHDX11nfxrwJ1vhcjksm",
  "key20": "51yVgLsN3xJdN9oC8Drovsgu4XkBSgTyfL7GobcX88Z5dFnzNdA1DwDbvDV9NJLNvLzxp5pnWkNWCTH1ktgKSJZ5",
  "key21": "4X8RVZoPvSkU2LxRphE9KDHZYWNaRYyf9VUjXjDoDu9DGaBpq3rnsGFRSVqARGiZ23Jhf55Jgk49py8giEx8nfrX",
  "key22": "3BJCnHuBbC8aRVM5RAcRxH6RQvgirjQkd1whAGSzpCombBP6rFitfP9SksGPMgJkpNrursjVCuZpt9BqsT7AeFYe",
  "key23": "4VsDT7U35371Xa6Dh7DTzxupfCqKfD6T2cutLza27kz8uMuLFHDU1niEAzLAKNcQLvEug7aWNxdKWoEZ7XACLnNV",
  "key24": "3jZWUxXqAEmL3bEvgEuGU7H55ACRZH2CuNsayDvndcSudQ8Gg9DfnowQiicm2NuvXfo91JPs1RjuxoMRi4FM8Pm9",
  "key25": "2RK3WPSbznBkiraXHWPiX85McmH9u3VtnjTPq42xgw6UCG5PCTZiSCdRN4ffezdUGmBCjC9nFFBYucNJmk417PbH",
  "key26": "65qg8AM4USZjgfCEZoJcUFnupkdeJZsWSztC9HK679LKcRrsyni5q1uRMVzYpbRM5JiGPwkehcRqU7NfFnL2fVM2",
  "key27": "66LKwgqAnAwtbDyENborupEdSj3RLnfgbk8p8v3Sbd412awHnFB1gzkYaLcqRGL27esuc65X2cofgHsA2w5KNW1p",
  "key28": "2A1PfHmSX9xpyoZZMdY2nRzyBSVoCTnvWBHRJWKiqX9EKTEdJ5jbjP1p6LeUbQ51b2doPDBivRwKs2Hkyj84aTWL",
  "key29": "5AUTdhwnEwhsL1eJVeUBjZpcRzPE3JDpmUABYDidcgwhctwxrBbvdx9jVE3YLFW1XLRn5o2jgYmF2FjzKB1p1zpT",
  "key30": "2ew8D25NebaPX61igXNYUFu1kw3UpjHkxxXZXYVDAMdDQgBZyhQkc6pyA73JDQv91QM5PykasBoLGMvJbptzQM2f",
  "key31": "4YeSCxapjf8q7A4ibT11xq9oJdjyCFvzGXkYj1uEzDMJEM3Vh327krYBgfiGnKkqksCbwkGGTLMk6xoMkTMsVn1A",
  "key32": "7E6pQBUXRnqt4yBCddLzbPgnH3a2LF3yomiGwMoCxNcKSP4w7SQkBoSHp34AzrmUyabC94epzsZdBcd3Ca2bywE",
  "key33": "33RHsuLbDNaoo843fokQo64WVx7pBR5SMhKRZ6ux7GSq65ezTuzaeWg8QG3pWypUSEJGPrvHTVX7J5zsASYfAZj4"
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
