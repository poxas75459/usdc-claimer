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
    "4zQrMk9q6ibXwmJVkLQTmHRnYThmudEUxiu8nneg5ECWiQTkBVxktm7WWBtr5GYXCsQ4q7HciVapULbTYmmhiGMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzexHnd5Xe6M7BiEjZPq3Nh9m4RVb4XUAWreGmCy23zxgeB2TfwKENnvJ4aYNQWbQQfmfPbKdxDPxGH3PXKNjdH",
  "key1": "5drug8ygiPP41oHRX7kzhpuQvLx81uP9J7ynninZYGtquUoyAoz2qCqeip8ggEL663g8SuZ7GezLwtxLfdKdWSZd",
  "key2": "5CfEYhkwH3cpHKhmqkPQ1DPFRupndEBGyXTKvRY9VJ7dbyX9Lr1bZsZEWQp8uPKg23XEDW1MXLwVbNtbrHPCiz4r",
  "key3": "2kXnYccgHwTrj1pE7A5pGGXgxDBMmU2FMd5dDNVGvPUNtAXkugMdBSMY6N4rR29Duw2Nyvi2PoSF74ALbUjG32nm",
  "key4": "2KUNNvRKSKaeVPJ6xMmDWhzrTvupJvzaD7isxAkrmxV5vRoz2kDLDJS2fpKkA26f3cXVjKwbCmSwjwYg86WWpiZx",
  "key5": "5hCL8hYSkeKDskF94j3PFWzwDV6zRSKgLDt2KMcqXKAhaEn5px5hDZHbVEbGvA72YKZiHseQwkgEu8FyDYxAmk2S",
  "key6": "VhqdszrXSon8fBHrYxLmfSmmwAQTERktGYqDKXcZuU7sCXdzDNp7mHXLKbr2upoDQDqEznV5hEQmnG2KDt1qPTX",
  "key7": "2Xhz7bw4fvDVrbyjyy8AjWviCozVcURqQkmMvLH8Vj94RgbPZjUmMtz1Y3Zu6HzpwLFUpf3wKnR1xSG8SMtiy1jE",
  "key8": "2GWMTVAt7iQ6482YNwA3Ba5pVWvaN8LF4EEm9afGLajr9LS2iiAPRGZDnmqXonbejDGex3c2jbb9eHqJu3eZMKxB",
  "key9": "5jrAxumxFkiEE91wjtDsqauawR1ujBsBXZBQGchoxzBt8vSxrzW1fAndqQ43hYgnE1qtECsyAeDkY3MDnqqTLEpm",
  "key10": "D8dXCxJ6Q4C4KKu6X5CFYvfXgfEiTxjqfHgszH8ABySNQPVHAFvoyp1TQfSJkfr2KEdczECoEUjHU2pNPVzNPkq",
  "key11": "vFVEhLaAd3kVg6veXXwGZnuPpk8zKPfvWR3WKF4bH3fz6LBkvM6KGCW3GgWcuMUVWtH7ebevmNFwW545x1T7xjV",
  "key12": "3eG4PP9ZhcV6xf6v658MukC9m28qeFwp82CVbnmWQDWwpimM9WJ8H413EL99S6tHTWQ7Q9hbCSpBvW7GMhfLeN99",
  "key13": "4QBcQFaVMR8MbdFeei9ha6X2obzU2nwC3MVkhDFhPZRFdAvNQ666QvViWurzdk4JyxQA4MME8CxEbmeYSYBNFyd4",
  "key14": "4pYPvxuux3pJKfSnio2tZXvky1HAa2zguaf1Rpa9zAe4fx8QTG6hHQHD4aUHobP6VPvqfa6BzduzvcRagrEMEUdM",
  "key15": "4uWMLDu2GxaTyr8zJrTzRfi6AfnBJzHRcDAa5sCcK8Fk2RNURP1bYoona8UbNWg6G8N8Cug2fdZbPQsW9VJQt4Lk",
  "key16": "3RgRwyPUpdhVMRaCZgMZ6womNKKcc6NvgHeTUFFYPWV7BezCuPaxjmqw8DPSnXQsVBDZZaGGqBj9L69XLo9DrMmp",
  "key17": "2DtonzbSNrosV8STyCtZdRZ7qdeJfCEsU82RAiUm3y8FXLGKHTxYwUWGXMLfz6ZkBNiJwCDifk1aAHd2aHjWLP7Q",
  "key18": "3q8TGFLxJnDJu41MeXpXdaV7tDfixWNutfcBsBxnqSgxtw3KNdBGYoqiBSBgPmEc5sx6DnZBtSmSy2MSCzCCoxM1",
  "key19": "3DgcMGptXpwZxDda5X4WGXAsVhPhpXF1iBLkZN9MdAzJAToMNskBREPCuFtp1z7FYPpHcPeoAYtTaE8qtaZnD5Jp",
  "key20": "4QQbRPEmFSWzRAuwxWpaqxqsmYSR1fzA4wRBaMqA6qoU9QqEMUPwDokWA5rQiQEspdr8VWxWVM6Rd1dWww2M7beq",
  "key21": "R9jagxb9muybSVaxMejkV31wCVWPKYBg8x9e3wdPsB7KDtDoNNdmZEHbqznuYKNLo8gPgxpNkMeJtuE5ZFiFHa2",
  "key22": "3FucSepupitibwCPgXeMAk4HthCRkDgwyzJ9VqSeXp2WH2qaxMnDt5zh4t9YsBRmMcUX9eqQkGeAWuNDXtLB8jdo",
  "key23": "2PBJwKPMhUoCLCwBDPH4K3WskRH7zpN8Wk8PRnWruGmFscjTcfoBpf9Qyohroqeuk94PeTKxG6gf3418JxAZAep3",
  "key24": "4DzFopx8MsKVZGoxD5Fn6xLR3pzjsWECdgxUBCpibQkYyaGPWURYwM2Yphx5XpNnFxWwjNNF6bnNrya69znXrAAn",
  "key25": "4x2DWh2VaGHjCpnZGbxnh4EyPMseMjvLSrEnfS7DPcnvRoHGo5CCSnucwXzotvaWPjTVBF8douBgfLNhQGnAu5pm",
  "key26": "3F5C4S6ug7A8sRxbHX8S7fSCokzbxXVPqCrE1Z8nU37yk1AAgWA1dKgWBtauxTV6AvWxcSREed97TGdYPqYyeLeD",
  "key27": "5vN8D78tU7AdyoLdb6KM4AgqysAiG4PbkPwskF7RqiyNpNwBuDSdPWRd4XnS14VwUeSscFQR9Daafa9W2A3pvbE2",
  "key28": "TMnVE4tfTnjvLqX2mDmgX2aLYFiwqo2AVopoHzAQEpLQsG4FoD56Y3QpY2rQ2NapZeN7yS49CRpyLXKRp2rRyd7"
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
