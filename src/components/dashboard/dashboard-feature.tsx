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
    "5fbPuzwfsrWxVTLbuxfY5WU5WK5KmSvq5ZxRKqupr8FsbsWNcPsj2BFJQKuEtejHdpUbCdUrPhp3pUTMVtr6HJuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s7ureLnUfqQGm2yLxM9Fe2mJxs8sTg15GTyjjtUmT9ezEVWiP75m58sPKExF61EwiwZQGnehV5pqNxgVbvnW8YK",
  "key1": "48yXwu1CTuWZMvpNZH6Nowr8efJCz8YcEFToucbQ2XqMCJ7DhDUdMdgyJPt5ddhJCRXbkWxPiaJ8mtCvt4yAQVi4",
  "key2": "5HKxXe3FEZkVesWZusRdHH4yj7RDmVTf5rU6CRsyPJXNyNxxEQTnAQct3R7AM1GZtLbz3FNuyjij4CGkn5KVFWbA",
  "key3": "3XtN81zEPVc7wmVRq8ygxSnk3nNDXcCnkeBNQu3g6RZDUVYJacy3uLAy9bxdMSANtcU7sznkWGCKLfXQM5sjkYNn",
  "key4": "4SLhsCbHaFsxoVs2mvrRFfXkL4Y7aXqtuUK26ay4wCqkN6Ya5d2RQ5FyHtsnDtxjVcNh2S3YFtjfVFEJMd4iWNyD",
  "key5": "2BGMHkPPBXZ1vEwmDHVcKEbH7r622fyA63VJMsJuMGm4Xv9825EJLod8rF2dZB5a6SyseqKrUEaXNepS9dJ5G2x4",
  "key6": "5hjsxrCwRHhGkSxJ4wZJPM7nusHw2K2NkXTZ7nMvXdEVTGAaXeHKyuLYBrhWhHQYH4gWF3cnmGpYTX1r49rnoCfN",
  "key7": "2o9DEMpgTMU2pZknykBW8qFWzPn13htyR51eyAivWwEgxqio4mmVns7zpaB12MfwApq53KGV1ajGd2r6Bf3V4iiL",
  "key8": "2jVASdQ7m9cRh9g4aSWhqMQgfZvudCrYKt7KxVhcw3kWZPdNHJx5jb5MyFma2GrLADSkrJPfYNDjsaZMgjqfJA2D",
  "key9": "21ceFhkMvnqvKciV6BMug5a1y9fQzcDVe9WrUZq8yzKDuz8zyqUCdymnye9ZgVmCMCqr97kpcRhCu3y8X6XgmSqN",
  "key10": "QJyuia77ZR475X8gNVun4z8nkd8JXocjdTxxEUV2EnC5mW6gbYG7whmQj19CxUjnaBygoyezK6mEKb724xeYkrE",
  "key11": "9LZ77cZEoPs12LC7cvDLM4msWREGQsW9feAkpferuGAdGZPqhZw93MQ5mZKYtZneVpGHdEJHufE3YcBvyp8dJiD",
  "key12": "5Y1bccK1maMGQQeL1vJST9FpgzGf5VznWuEmQXHuBs7AFbdwxe3znwLGfFF2pbAhRFapxbtPbusUPBNVvkKhsxsW",
  "key13": "dwjUHZYhTepDbGpKvbfBuKnQeZkomNqZMbHmNUH9jqHDxrnfrtNYsruSdkTbxN5WeVB4dFXPc6jJjrkArqgdjpE",
  "key14": "2aAMG5aJS3knX6K183SBpzZaViD7FQWXrB6VUmFciTMn4AMuwxXhDwy4rHaM2GZiu2b3SaK3uYUEQQQH2TmKWhJe",
  "key15": "4FmSAyAMutmTkbnYEei1oAWoAE7F7MEWwC3WtgpEgVCgN7wHZQdAzCBj3eKPdRhDF1yMm3YjuYGU5n9xY78LBKQb",
  "key16": "3Spmbye6BsyboMbtU7gx1D1DtxQEgGxioWPXntfCVof1S8adjCTHEdEQ11b4it4fccER1pGgFQYP2Gz1q5s9AmFT",
  "key17": "2B1W1tGjkjrh77LLkgKDKhm8dFx7KKvXMj3VvJQEMUo4s3WYrNQtgwdqqqT5Btjy1gHUcLUFM6nMKU67zFppxAP4",
  "key18": "wRRkC12KYcbN1fysMvMbE6pydnzdG5X3PRcJhnmMnaJvxWbbBuzgx6bUeuYCCvuLj49hQ1L6pAQHmZS34i8cmin",
  "key19": "3hntJ31e9wjSpctSKSjCmEFfEpqhVbv9XrfoMDmenB8JRApg9PeQTnFzQNXTY6QJAThsicfViGnNWmUJXSmR1Qgr",
  "key20": "pafqX79HfLUCEPCzjcdLt3CSqac1egkPSATZTB5EgwwUhfQELqSKm8wLDjpc4Jfzbyfr1jpujn3rYNvvxhjf65K",
  "key21": "2PdpAqMHDMfDDN3KrVrJVw5h3neCMTvMrg7d5x86oVTWmpDdrJYTxyeg3yK1yGxs3vg2wR7XwD1N9sWRnaZXTxKL",
  "key22": "3ZG5WhWQ98XTxydvMnr9CEbEPewWbquaN8SLUXUFEBzTuexC1Kp7y5kVdPaCGBZ4D9zY6Uvfh5mATRhU4mu7Pc4z",
  "key23": "2rCxJmRSEPfpuTQSdxL8Dnurf2tnHkUyFChoogVNPwHoiijCTZKjGcKSoskaxNUgfSVKTKXDqKWithp9GwZPaTdQ",
  "key24": "3W1uqMa6D68Xta4VMdz9DmEE2vXpuWh4XAZKsnmEEKV2BMiz2vLqAhAHuVrZnDN6T8Y68zf829YvJf1VBFxd3ewL",
  "key25": "2FF81Ci15rRe382sMAeG5c8fMpcxdk3f7gctsqa6zqtyjxyKYGVwoj6TwcJz4C1iJ97nceYBQHxmpTiBY2ec2Dmj",
  "key26": "5Wx46hmk3NUiznmVcRjdKBSt1Cib1FtbLCdx9TznB6VwXbfeukCca4kXv7rAbSafJXqxtUwov9TgqZgNTNTEfhDR",
  "key27": "2MWkNFFPKcBfMioDxWahRaHJ467fNApqp32ensD6FST7e437yK2Z3ceyGegsRQ1v3pXxpjT7yFTmoZSSg7BTkzeA",
  "key28": "sSDZdmZFZrwzhGHQZuza9rqUiKM7btx5j1Y9weHMhPiCBHTPHgj7NFhXpiXXArhedJpLBo6R2uyZn75HkWoeqTd",
  "key29": "zapFupkESdZAPQveuxDbbWdgGdZWPWJtY1kRt2Wo1NrD5NxvdaZPrGv8uFebVkQCb3V7CyhHLKDuL9P866wEReJ",
  "key30": "5GFQhmZNjecmcDjJJ5LczEGv5g5Z9GcMp67ih6tZJL8ZVstszTbYc1kVCTJ8BVwuBydv35rk5CYBzttvJDmxLigu",
  "key31": "4mtjLnTr8L3dywty3weH91PiPxRoV75Ch5mKEykzm3GeirBpgp1qyGzagz6HpHYYyc43JW2bLjTPQppMaivDaLCT",
  "key32": "5ojMrKH48Lsz2gkeZQTBYcBYgUJ3KJT7HWy2u7nwL5Vhw6X7gRDqzSGxvzDU2VBYTZ7kGRf9P9cXiYeSseqPwFx8",
  "key33": "4ScncGiwKDRpPX9XeuRnygtSLfu1P77qLW867KJWX1h3titaPgr4KZ46xcK6dgF3epXrdtBWEkYtpgxuYoBq9f6Y"
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
