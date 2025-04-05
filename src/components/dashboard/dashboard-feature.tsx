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
    "2TQRPRR38r8xABpwyHMhqAvCRnMJwhGtwB4PDVXifHhi9kGatGwc4mYk4vEgQTqSpH6kRc7VF3pAnJhZuCsS6Gce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhNXyG4C6tTzYRuRrit7YA1WBKNZm2iDL5jt84HGGuhBzofsG2h6VVWFQKkV8qwqYRDDF1p8fQNcKbK7i6HDque",
  "key1": "4magSVx2FwjuiS5eKvf3EsX8iQR69vSyruMjcc6bSskk1gmqtvukH78ebw8TzV7R2PtfzuTANkaTqzZH3iEPDFM9",
  "key2": "3C4rVZhgacUWv5c56yit4GcGUkyydAjYFsDktLDLEqrtDgWH3Ka3GSNd7uvCjjynfPSw5p5oKibQoupFFMutWbss",
  "key3": "4RHBQWYymbLRziAtU8zjQjycUkLJW3LVqWNUZmXuakHWAyjRZox27v8JvHtV1ahp1CHQEavYr7MCSMo95YQTKuHp",
  "key4": "3fWQNKJQ6uoVTPBoe5u7Bh9S45Jgyj8c9pkp2vkpPRcFxTNMx1LxJDggRHzqD1hra7v5V6dCft5T1nMnvf8Y17D5",
  "key5": "nsdUzz1naGgQftpT42fxah2j7rGHhiQawXDxU8cAGbwyJKVTtkmVHpou1JyVeKaQfvw2hRYNJc5XcXdhXBBHhmx",
  "key6": "2rdAV71XCrULVNAhBbPm5mKy3iFewkU7z1xmSau5tXALp9QTf8ptMzvuauxTLYoCoofudQXCHtkFFeKmYPE7XeeQ",
  "key7": "35q5oLhYMSq37AkV8M8p4jzr2YPcGgazz3zHxUc8oC6i6PtUd9GCszDQtHcoHscjZ7LC5brpiqd3po1kUJzRvp3A",
  "key8": "6Z6huYVCTfnCCGZ9gqpb5KYVR2c6UgWfFHxP3YbbMxe9vP4cCk69DcGhHpbyDCVemUfzAhps4ZUhF7n8dhoRduW",
  "key9": "2todEo77kKa8BUWVEdJViGiriaSZEyrdm9wcXb8V3e9tUgbPmSMnKmnAvfYmB95n4swPNifMpUUCvhz7UzTtYxVG",
  "key10": "2KctUPfW1yqSD7xPSuWrUxxMrJ4B894nTS9V5mqUFbBRdPtdkF1Ns6X6N8i3rPV49JTDwRgScnir64gF3kNRjxy1",
  "key11": "rDXEbsQMarTfiKDqbZpK1QqyMuWQEammH4ckoMPhEZQz4bzg45q5qpU7TVbjg8f6hNgdfCnC2DqCLCbwuNGRjtU",
  "key12": "4JrLQgTAzB5S13StZ7S2uwRpYGPdQat7H5jrRFDtkM16eAfAE8JXkzdGn1ctYmYAAS4NYoYSHzbpKSsUXqtZtnrj",
  "key13": "3Km8DJ3kqEPq1iPEWPRYmFU9n9K2RjFM5FBUytYcueyRfP98cF1Z4yAcRHYbaUgBptukxhFnmXJoKDt7WCARjmK8",
  "key14": "4AYTnymM53j4FDvYV4WwSNUDaqsNswuYU529CJSaKW8qHgGJRB1anXAJh4qpw35PAJ5QSTHyK9M4oay1RiWgkV9T",
  "key15": "5LBursNxfUb2ggAAjuMBwNHtwpBsNPbiZRpbfbFbbrJj8y7VD6VsaCKTBp3Ww9butNpqyjgUbA1WfHAmBhXLxgbo",
  "key16": "85RLXs9zbp9441geiu89YEohWqhaJaCitAa1LKFoJeU5xfzE4AB5xfWhTfyAdvUSEdSGxrKAosd9zcRdfXd11H2",
  "key17": "23Gi1W3aEJS64D63XSiMtxwEaFPgWL4T3RnXaoUw16h846DAG6MYM2ofMwpd6S6MXNXVG2AnUrF2zKJGT21m1oBS",
  "key18": "5x9C6ptS5L9x2uRUq3yGDXJECGmJpoBm3AxQX16UrkeNhiRvx6F5hhVGJiqwGkWbrZnKk2JAZNzsMXuoq9eW553U",
  "key19": "38H1kTSAwX2hpkR2V5TKH6Z72aqo1SEBKDZrsQVsRgHgGQBTcj2rAA4HqYWz8ncdPNwx7bduKDCRyMc3J4ihDtm9",
  "key20": "3bTzv8neFUCSfw4kJuk1D4BM5Dj9BpNNZ2XUa7guhbANivq5F7MLWA2CYmgodcmPTtDsSUrb6g3DLiybrXeo76Av",
  "key21": "uXq5kiLqT4aN6ouvFizoABfPct1u3vMB4wDF7WY4MkcXmAazx8vyC9zQRHr7YaBWaDasNfXQiPiDT5zKVwEzmoa",
  "key22": "5Hh5VQYPUCqc4cZmR66ixkqHkcpxCKJgVwi7BPrgTaTyiNgQctTsHNC4Jtbb6aBCNBW8SsvfNguRykfrnZeSh9iD",
  "key23": "45WsYY4UHYp5zPQ5vuLnQvKtthr2mABxfTHuiYQ6qcMauzBJQh4oyp5eQ5Vdbwpy4TKaMyRSSjhdh4ZEot1gUr2a",
  "key24": "KjT2pcUczeCorq3pQHUKctMHVe9mTCyBXHkjeU3UgnVMwqEABhta9fJuFFG8zNVuRvYgjwdqcLzj8RUhavHmhRC",
  "key25": "pZ9CLEFG9VjzcndEAF8zW7fk2KN8hEodcvzBq6vXENhF5gARU4Cs1JwWcMFssq8kNUVnDSAWd8dYx4ENfchwY2K",
  "key26": "2186rcp7RknKzp6Mbsfr5enhj7vs4ZdcyWAiMHoMXJP9nzkZzEae9Km9BeAiK6SX2GuxnKwwNMdLvdP2JuVKQcHa",
  "key27": "2W8qhjLWUUxhnkVTxDjqpJ1nrXq5AxL7AboJU8c9BLS4D2BXGoMiHCfjV7SJhsTkuwB7ckKFn1Wgj1EoWW5shEZs",
  "key28": "5rXsd5sFnQvQY36Vrab9RLDRgjsKPkUnbxRgX6U6DKRFR9rrC2vCu8RvtZPZVatdaaoTqggtLKnK98EGeHLCqHGi",
  "key29": "2Vkar5qyfP4kuAkK1fzjTAGkVek8shom9as6sixJz4D6Ebf3FECKxJC4CjwcGsLi8cVbZov7zZnc192rKfL7DZqW",
  "key30": "5wi5jAfhsTDdtJTRPjFKSxNsYthUmeXp31FCzZsiCSBZcoBUSc9eyyHYX9XZ2CmLWv3j4eEBAbBzSYZV6R29xVhQ",
  "key31": "35Ri8ktdsgMjQFMyfhXFhZfzLamPrAdfXUFpjr68KcpmVkXgboZqreDkrNjJz1MxqMsbEMnXA1F6u1iAWnb8SfRS",
  "key32": "4VMoD4MhUEoDyvbAYsyw5jaWm1CZJrd7Fz2t7n4G3AXe1xoRzU5TNgDjbguBigidpSkmA3QnpVu4neGaK2PM7nTF",
  "key33": "3u3t3911GZNMSP4AVbKvRzq3msm7HXPygcifFZ8xM9R3tDgBb2vGpaiKduNcD2Fa37i7DUMSXhQryEMDFLPwySF4",
  "key34": "2RU6Rby7Lv2NZZ6A6A3bBEPytb2NbS6vzDUSJNDWmRV7akqk3Qsd67qjZT22bsXVbRtVu1TAsehDiBbzGRrCumyq",
  "key35": "ZHp5kqBF1zk1yut12AwXiUnsauSy9KWdCy3c6ZZRoF9c3LMFW9GEnQb6Le3ESwezFakxPdua8eChX7FvxUoD9CH",
  "key36": "3hyA9D4JGiDEiX6T7Uj6ffqVRuvMP9QAnnbWXd4wJ84f4SVaVU16qNEbenk92L9YvdbaptVtZ3t16KZ768HUfhpD",
  "key37": "SMEqatoXZbq2B2724uVnHXekhXvfRgvb4YstynnAA7P7mauo2TLuX6NYgAk73FckQ48pCUefzBZLKrUnCAueyTh",
  "key38": "2p4DRGAT2zkSqyZbEnutHVHdFxG1KPvsX5jkVYFUceVLSTykFBHGgsQefyK55yixfFYMPxKpWLj6SoWyoxQ3h1cA",
  "key39": "hGwXhZhrAoefjAm9u16eqU2V48PK5mu1DT5pPEBrEZ68nawgsQxxxErrixRJV8UBkQxXxBsonhcADif9pxPrf3A",
  "key40": "3sgWJxAxBgKF5YSANVF5Fm4PatcJuARvzpnRCtHzqwpY8xCdU6z2W3XD7ocum9W7xsLkQfz13zvefFe4rNtBEEWE",
  "key41": "B22z3gq863UcCE6MyLuSREGoYBCJQUwDfEwoAbThhVSajncShBBvB4W45rS1vKSZHFSj87bYMnH1j62ZRPpqsJS",
  "key42": "2ksYKwhXWKU7fgKYkKkgzxpU5Xa7RN2EVvFG4x1qoTSV75L4XGP5k2DfmiKEpYZKxA1bjN8vzYzvw9Aq75eGfPmZ"
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
