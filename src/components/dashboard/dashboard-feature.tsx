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
    "4fDgMozFLXbjEVQb6gdqUF8JGkgzAQVdhzic8R3RtCTW5wi7K8XbeJ8TjdBjjMQL92yWR15m4VgLThXEV7qJRFUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hcwHLC42gjfxyokKQr8Wr7BgsyB74bqhixML2cHTPfiVAbNdsqVAAYn5fWu1TkcywanRphNrtYuKbs33SSftcsT",
  "key1": "qDiiBfmBPfuaXqCACNNneicYnudcEGo79z6KixrHSiX4z4KSSjeXrPh6DGm6LTYhovcVXXW3P9Q92YLSgjMdYVC",
  "key2": "2ooecLoU7MHvRz1qbhgwUth8k4swmzusjz2GozcvXJpq72SDeof5QUH2NMJc6xU8ckKWxDFgCANMr7uZzktDuVy4",
  "key3": "2U3FJZiWJHCTiC66gKp3zeKGBFxPH4XSVR4Ack2582m1LoP7YwridrsVLdXXp3yU89Csqumw1LXWrzdXxagMQSM8",
  "key4": "gqJDfxoyWwEZWMmfve1TspH5YfuSPFYMVUuMrEnDyNVP6s7U7iYJzpa83EaqiGSKGSCr1eHyPDSDCk3VtUx2D98",
  "key5": "5bze43FQZcTvPwMrhiBJq11nJZA66E5oaJnMfzWWgviqQBbPdtFKrE5LvuvTDMKiAhB7bTVeY5wK5t1UHpnn36cG",
  "key6": "3qJyFbrxnFA6WLdJJFoKxQ5NzMfHiruAJTeM6gUXxUQ58JYNiSQoyYtcNGFv2SqJdqYNPML3eWDDnvuu8bJLbxop",
  "key7": "B6KhZKb5XDv8U1uU5CLKb5764EZxamUodavohfQHxAwCC3vZdEWR65irHA5a3QxsaWrRwoRZNBy1uYLRLwiUViJ",
  "key8": "4GMpfJ8ouKKSwVyY8aCiSmeSHRhTTHsgeJNrrMeq5GRnhgP1zw8ex5PH5viu1vtsqSbqXuTRrGmkWMSyPAwFjtuD",
  "key9": "2bCNHBt6n97rwsqRpF5azxqCz1aL46h1CKygLCWBkkiShBkWzUiRAevxQv1UYBx1tLdUeQRiVGCHf8idEGu3CJMf",
  "key10": "37caMrqsaJdaEY3QmcpwpQQxHRC3WTzggA51dcNPdCDCftZHz7AXiBymGXVX3h8pmawFzajDx53ojfsARwiQC3k3",
  "key11": "53EVCx4QJw23oFFUZZNQLTmP2JnijyQaPM6K2WUriLKzX2h4u1xnTyPthLsziSPSHU45mgGPVVx39e26uRktNoKR",
  "key12": "SVfjbrs9cB7A49Aimng7hGMb1CE2KKZnF85btMFK6LY41hJ2YUveDtzdRgyMp6HjcTag6GbSSjBys82yNhwSUWz",
  "key13": "3Muand6dAAdCNdFW7NkHcg6XUkHXGbVtBgfihzfHsVk4ZcDLS9GSxgQTr2XRxoSAkAcDKwgeXPR6McMTSffaV4Gf",
  "key14": "3hfs25oVXRcrgYLhRs3bFecLfiTiYtyYEgbwdm7Kz5cMkAVDCbRPvzUenSJa4iwqNfFASH4t5cPtetqDEoWQCtvk",
  "key15": "2yFVdYmCpaTSC68a5QLbS4JLyQyB8FBDR6CN7fDeoXdoN8aSnnSYTXa5AVJuvpqajW2Xk5rGJc12bSYVDN3JDD8g",
  "key16": "4E2Ch2j8YszJ1LkVUwdfgj6NSsz31ZasBFtae8bTdMCfhAT3broT8Ys6F7jesN3pXtsYJPS4KLcbo62UTYUmbsBu",
  "key17": "5qGRmwsZ5QJESt2hyLivuXw7K5vCvWFakmKFHxDTxvzBpwK8yGjdNXwHwM191zRNGRQaSxUXH51UWHRnycE5HRzL",
  "key18": "CEigCcgs133xUBPiZnRjRxLnns3erGhdLXg2qPsu6ojz9nuckEyDpQ1EdxwSZN9TSyPUd93zNs6XKVNkJw5B7XX",
  "key19": "5Qn2siS8KFQpXwcLU5Y54CpADpMBed9e2BLPYw8zcPE8bNbHpH8c5Af9vTbRKWmU2Budv4FzFAGR5TChaFBT9q2p",
  "key20": "XaHpj63gB4SKgG1ZcgVC8khha71qhEa7QxCLZ3ZLaphogzPHRrwMA7acxmoxhfBu5WGs1uueErCFs9Pou93zhLH",
  "key21": "669VxQV9jaHRQsgsJpSsCE4qajsW8dkuP7E4ztXPybuJgeXbyBErbX7fy1sZqnTocQUg2ZiYTRi6QDZR6qRFv77d",
  "key22": "55TEj2cpbSSJ8E9DwcbhZVnMhK9VLXBn5Zg97WcKDhYpM1X5dxJ1Y3wqHZ5fvZZHUZG8rH5MB7LAA8N3XcYzcJv",
  "key23": "5TekNEswG6Xv9p3zCvDsn78ijEsRYR3RNKowPQyf3YEd1PupbbchVJb8xNRpd1mqeFn4jMMLQTWqRN1WXNqNgq7J",
  "key24": "4H6Ftc7sNMLoFf1sfkKnX9Ne25Ae21jPPutrzvQj6emP2eS7ZEKnSLGm6NTKHnXqAgJB2qjiCwKPioV1mV4ZEhx2",
  "key25": "5oz6k8JjoY8uEHJthV88HB3SMYzLHvoCpHsATw52VMqswQcp1C5jSzJuesdYXNm1AoCMNcuWcpEE6kXTRrkcuiGn",
  "key26": "441LjcXLt5xtiaw1tj4FR1EwZR7S8ADwEVWkACdTUA8hBURjmPbrcVAgXYhX6XaoC1BJfLEsQQtLSxmkFwFSMgZZ",
  "key27": "UkxwopJab9wdXRiiZ5k8yQL8boQzRwvYHciQJ6bL6UbBJBRtyMcfUqmHbRJeuCxB89cExhCFBzkqXfACn68NTHG",
  "key28": "2EidRbmVN7mgbZpVienxLaVs9QUTaE3dae2VBNqMYBGKQqRoATmqpPUkesd3Q82nK9iaC9NkXCfTeCS1p7wYpTo6",
  "key29": "4NNAaXAvGJ3f5bX2gBfKLPmg4KgERdKWSzyQ9nz625byG55VTuugcc8YXhtHSCjAeNZ7SjucrLoZ6p4EUHHpAUZq",
  "key30": "5S2NCg87eJbq49TNVNUqmv95TXsWx9hnpP1rEQZwwEakC66EWix9i4QXpBZ4iTSdbz6LYczxyQK21rcaJXxHMfB",
  "key31": "3cectw6TEKP1DMkeSH9G3CXsMiiViMp5acTRgrzrdK9E2gxCGykdXHMKiqR1LRrnQR62EZGmbrHfefTQdqUkcEnx",
  "key32": "4gRqv7WZRNSigUCaZjGR4yWv31SiySAnfwi3gywKjH6tA1hhcvQjN9R7PoNefWWmk6mkdWF8noemsbcRWwbqjQ65",
  "key33": "34j859ppoWCq2oMPPFT5gjBk7Et9ePmURPCwNiSfPztFkroBjMhwaids2CK28nuv6csi2BWvJVyAFDBU47ZRUtbS",
  "key34": "m1SBibEJqjeyyZukfupsmCrCsM3kjEsVDiKmeevzZWTZzQ7RME9tLmuNPShzsiMP9uDuC64WPM3RpfxHrcFuCzz"
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
