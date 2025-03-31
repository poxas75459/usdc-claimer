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
    "2tVwUtPf4t2dGJdt5fG4G8oJb3dZNYyokWbLSQ2mUFkCcArxmMpMJmqoxX5AuCC9o9AMNqMHPherh2buQQooMyQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ecUnkQzEpd6Rk3Vuz1NXU3XbbZaEBQVpW7fMuaQD9tEzdnhXXyxGq5fqZqgfwA9pLZyYWUCXf7UwbwtW53MwX9r",
  "key1": "3MCsUo81pg7AXN6hve9aNNZykaU8ZkcPTQnd88ZympHNV9aq8SZw4HZCF2rdgfEHaVnWnyPpqu9qs6vyFS9Gekj",
  "key2": "2QUBPbbAmo652ESp82QDyHRVnikXpnPVE2vx74HBpSPNxnuazkAjmpR16Kat4K6CVfyLGmQdKnDkCL4wb65CxZvH",
  "key3": "54YpfwYg8EAqfvrPNWZcXLpE4pYNknMbHCSmhonYvcXDpcyxrx72PkixR7PdVrGjq2CFrrg7UzhL4YXmvJQ3BmLt",
  "key4": "2mdbjUmHrQHEYJfndNrCKzcKU7v6pbX119YVABMSDRFcnUYMPfm5uopErxZGiNB3XwRedRBzQUyLU4SwwxbpVzrz",
  "key5": "kDXGUiUKuwnZwvQCgtTKK31DWk5aVGucREcFGhXtVB59Ycyq2JcQkJZnpyHQGRfVekKuC5ZsMuSnnL2yqu2PQk9",
  "key6": "4ZgQpnJXTDnE66Nq7891XLKfkvzdpAvEVjAoW5fQZCbM9Qf152LqxN6WyTezgWSWLRWYJ6TqQGusU11zL11ohNsJ",
  "key7": "4NscLiFmqargovMc53eXWnWXBJpjXJboD8s9dZQa9SFniuqLeCiQoHdgd5aRjVGMmz78sn1xBxfE7x2Gn1VrQJnF",
  "key8": "2XSC41iRpnpJdQ7kyii6DMAydu1NJFFfyDjG7jpQnZ3iPT6ZsB3t9NaG5bTvhvVapEGxSeYpzyTbKy4WqiCrNhY8",
  "key9": "4P6Ca5jS3pJGDL7t1v9mkko2XYQdeeVbTJfs9E68HcneEqrduJNJRUVCP5Ckhbfpjy5PrQBKXfxP3GcXnFz5wYBW",
  "key10": "3zygtFYV689YVv1jfRodQQdeMuCmCBTAxZ8PVQ4A9zMMoXSWQTf4B9AmbKamMfqTTA9aD9CXas46yXY2JJ8bxPiJ",
  "key11": "57EBqZxnQ2CkchcvBUCTpbbTgKiWyTBKC1HoyHywurmbwChKmDuwhKaweTjbYG2PiEdUcXsWB81xNHychWxdqhKX",
  "key12": "2y5iQyuC4S7EBhhFhK3SrcKRRshpEjtT1PWkyB6tNc5tuMVzvj625eioWr68nxfbsvswSygE3n6akisrLnckEvz9",
  "key13": "5pVShzsEUKxKPALW1mR4H3hVi6T78cRvCRziCvdRXXGby7o288h7GdjeEhXgqNG3jfhWQG9zeGPDvzJu8bjYgTRe",
  "key14": "3FBg6U9UToY7EH44SrC77iUbRLtJcivmSuBtwrckRxGEf3bzAnMAN2bVkXvEtHsk3RBTru1fJa8tXXbySYtY9Dr5",
  "key15": "4FnBDqFZxP2VbhDgauG7735ieuPmwht4ZU2EqQ2Xdt2MrSQzy8ey5y3WRaymd8TtdTPxA7zW7seEfrNZTiYGuTp8",
  "key16": "38mXvxV65DfwDVCNaivDQFaZEzmxBB1m57j23U2m8Tv3J3DMQPJfvnDAvJNmBWCRLXtHvYJBYoqBSZdD78EGPXZJ",
  "key17": "48zzxYiySitEcQk4Dk9tZB34JbMW5zrcDvEK64Bw8JAauWhip2Exu3YxcGH6d2LLiAF8SWRqUfM3rwL9nkomYtBg",
  "key18": "4KGJ5j3ZKe2VUH8zLgiNQWU3mV45DoJwTNrfNEEpzGbR5sU8UXjr4DkSpqW6vG4twaJGpC6Nc8nAtFw5jL27TP75",
  "key19": "yWJq4YEeCk7Dc5t7YMzPaiJM6vnofm8RtPRKgqUFd31KzqsMFHVSZHEJcHZ3XtUGYSTeoyHzXJikKq1Ssyk9g8n",
  "key20": "5rsndmFKGoWKF19Gmo4JzDSvWkVoXGfEmbGZXBtK4mFCKf6WNVRcmfG5uSqxqpNtL3xcLDukCnW8hbT2CD19uGVk",
  "key21": "54nt2zpWJPby1so89113bpibhTBcaupz5zB7Y2tTpepgJtTW6TE9zmn5VpcUivxba3mEfDEFUkBKNZKBx8Mngos2",
  "key22": "2N4FwJctdVJ4Jgd2vvPsrringTdEipj3FJWaBZGHauU7GN2pr2VPcqCtQwQDUwSgGEpaq7N8bNUnEiyM4ycvLNdx",
  "key23": "2gdabvSpDjZZVEqxzyJmEpWnQYmMmDcAmM9acW71DmTJEMLgo7SPntYCW1wyLtmNv2i6zfy2PumVfbfBFSQXBfqV",
  "key24": "4qHgXckMLYyKTbPBy7h9LUwobLnyTVZyxzWV5gSpm57wLFCiV2Z7y24ySDFzRv1hdnVW5V88EAnZSwjq3DsBEQtt",
  "key25": "5ZbHT2giqFaEbsXEab4xw2hrYJbYUT9DASsXNJyrKDMeQrPRJBEGt9zYf1oMNxm4YQDAVjdNZam5n3bN7YZHpobb",
  "key26": "3Mi2dXEZmgepn1Y4saCwoZrsr41pC3vz3wNdShjHtiEBDXVQTHY3J3BRwca3gN8oVoU2cnia72hUmbGPTAbRs2Ez",
  "key27": "5rbKRHtcozgoGHXR2SZACmiKobTEqWCLiqkbht6Gt13V8jzjA65SyJtqb79KQ8Dv2KEUXSrdcVeNy6eFnR6hBFX3",
  "key28": "3wv1CawbArLj9zYK4a7Ui93GbCvagPWn2XSExyuJYyomd1hkPkeHwDccVZgeDRxfJFwre1xkk6oRnCgn2vyWmn3T",
  "key29": "4hSEiuTFHGTjTREZXE4kdQMVLRzcdVBznzWxEjDdbrScdQSLYt6iburoqpeMHdXaAwhXgp5hvt7oDE8zRpASybGZ",
  "key30": "4V7869HQNhpwLkthFtuYVNb6bZLEN3KCUhnWiwqCt4kQVT9HRXfMmiH2DnNP3YZtmMv7KrVLySY6cPwTMe8mSN7L",
  "key31": "3C1qzxKvQM3CF8T65yueS3HqUD2MN8aH3MNgYaMyG8E2esbKr8S9D5M1TiMWkJez3mJ2g3NYy1kuUXpF78zPpjNU",
  "key32": "3D3tjJuJRnXbLjkyVtJZoYQjtq2Uwxb5P65YdhQojo8GwP7vrNEATiMwAPBkUDhaH7NMPYbUR8SKSKmRadtfhCDD",
  "key33": "46nRuRKLTgXGMiR85bSfUVKwodDAjX7neQjY2Szs9QTkf6gFYdj9m99PX1BZaVgXQe79VuJFuiYTwWdphLfG6PHw",
  "key34": "4VcZbwJEBBbzkKR4C75C4URvhVraBmG2RfiwMZCov9gh99hBkJ5NNXkW6eZ6fTQt62PTgg77Y6tXZDnJLnvhEKL",
  "key35": "u2XRbEN3RdNhU1VSBiFduBc5sHpFDnumArbBLaP9Go35ShDtk3qFVG6YerCnd5zWam279FWnLuThusEQUa7jjy3",
  "key36": "2SJjuRyJZo3v1hKPZG77cpmyXBqkdBwPkKGJbNh2YUFy42z9bUNpFCtuxmGtiKYSPVxvLNA7wx3m2oBVQdpGAvfC",
  "key37": "2YkK4z5ovTvpaEfsVVQo7o6wmk8dKN8ysrcYTZ8JBGkqPVe9cS5koZ9eXC5dpgDp1xK4XpX7mwVYpzXwreZnwf28",
  "key38": "2HqQxbGz7v5XVdMYVxqJpcDYmM6nXEFyQiCMS7Ye68wrFW1miuD7xWy3RPjz1oEbht7zFzrYtu6jBb54GA7GG9tB",
  "key39": "2MxHAFbKVAGf6AanMmQavyLRahBWftWeAX8AktoCAUq7rTKjuundv5gYSZRbKgZcnbhB6YJVPhULoLtiSJQqWkKP",
  "key40": "66AP1iqT4NC8f254ciuAurSBaFSDEeHsMSaocoPKoNwgh7GfNWugruZQnS9UNEkTpskfsuqXqFHpwc9SXnh8x7PB",
  "key41": "5SwkftJyZ1hVrMke2SnphQPnXKLdJM4BxcusWsmGzPPWxC5ecQvo8wZCMwWhuMHPak4ZsMqY6QQhTfuBmfZ6w9vJ",
  "key42": "5Ky2qL1Z9oJgn9SN1E8iP7NEKSeXdNdv7WpuPjbve1H2kPU4wZcTXacwszLtgpwF34oPdB81VsrrN6Ft7xTxapSL"
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
