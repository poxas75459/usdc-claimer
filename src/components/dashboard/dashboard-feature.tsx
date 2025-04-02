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
    "2TxetyEJDifi3x8QuUA6twwi13nMLxibnHGNp8KPVRp3mafvD3h6y7qjpizcjg2aSfGTfq8LUXF6Y7482GPMJu2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48iHogGYXaRiXnBsMgw6ovWy2sGX2oUM39GR2EV6pfkqvTigCKPmgpEWKmEqLMXnPuGRZxtr14VtR24fiJognUJG",
  "key1": "4xJqfbsZTd2iUAHWWyDW4PxviZfdH1JV3pf8UEZYPct6qCk5ex19MZvMezVFpQZ3aYaMdkELKK1XF69juk65omP9",
  "key2": "54TTnypu8fLKq4QMLDScTvuyB2RzQCPwNZbzES9f3LhxmDY3VWYxrBo1yCbJ6jC6rdxDFrLb3J7JvJ2cSxYiVnLv",
  "key3": "2mGKZm2BJNtPRw2nuzzgHebxwZ9pvZWQ3kGx61ztAtwipEvkwGAu5pP4Nttt6QFc5UA8KeeuWTejbaYfPzCfskBM",
  "key4": "4r1kBENPX7szRT85caUY1RRkSecuToQfDj1ggyNo7f9j4Zat56gy1qcRLYeyrh1YMGp8RdhH5p5ARtR57gxXdc5m",
  "key5": "2MTiV8cPLcGpBeHBPpuPYpYQrT68YY3BWrfWAyuXVFhfX2mEGkwjSffh2uBkeTgiubc9xYDeJmQGaAbEr7RXdhyn",
  "key6": "3TAM9T4j7baX63CxJrHWxop1ZV2s6E4SkYutTqxWWw4fvh1stJarDQQiV689fpnM4hDkjX6P8uZYuYgHcsyHUDxs",
  "key7": "3euaDGBbHEyuJaXHxruiDeUmydjJb97ysrf2RudPqVq6DGxtoBaVpFYwLuJKLFJsDU6Rt2L2BPh8cBU1UNX7zdmr",
  "key8": "38Va9fzk8g3h1MPR3eJu4dpryELbUaVdNpRMjGzXpgCvm9jW7MQsF2DpSFw1VXYbVSKTko1fsM2aSHU9gTh9eK2Y",
  "key9": "4GjQ6ggvf6wj6SZtdoUn1F8b5py3uARrVcsHL9W9mrjJtPHdNZoa3Zq3BmzLGsbyH3T6vLwR75EHqgLo9Rt3F9Lv",
  "key10": "1UboyydvgfzT7CyRHfyUBqJXD25EKxMny3bVyZzeXJQfrQSJAmj8FActMoKHgdzakSZU8thghmD9ikHfHbjemrU",
  "key11": "4qPTyNDj4MnRJu5VzNXhtf53XfXaXi77PuLrrAfWmJWN3sV31YLmEraQQPA8vAbGZxseTLdUUseBjx9eeHuyUKzZ",
  "key12": "3SgoNfDHcFrgFXuMu4pb4JB8BMh5FwQM1ww1PBh3yfVzLDMBzvDENSbokdFr3rmarM9m2jQyjPCddZxzQMwgA19S",
  "key13": "5e7w5P4QTHCuTzzXWKKqrnUbzaYJ8hZa5YsXsnq8JszSr28kLDmMFK8nKXxwNksFiARQY5NTg2XAe91ARcSQxbfz",
  "key14": "4u3eDjaJfcLhk5kEvMNCWZPAhnPNerj8GaXd7JuVutM2M2ofuFnZ6HtF5MUQuBburF4fKZ8UAmoPmvLDHMzBbrcX",
  "key15": "4su5181qNhDv3Tehp7FhQz5n9GGefyqx7Me5g6R6r149N46SEaft3qcvmZGyoSZJcytS9YJmD1oz3PgMNDFxGRK4",
  "key16": "4w4G12ZPH8E2xmFxFMbsX1nutbhH1LrKJ3DZXN5Rba3jbvmaoKtYrxDjDyHvCoq1eAz1LvRUqWNi85uryGnUR3qi",
  "key17": "5X3SggQRYhwrcQxHQzHaP3jirkzBFDoUpK7XGrmd79XyBxouAHDQbQ2ThQktfsvhxotGSkKuJS7aDq4tLPVHEnvA",
  "key18": "4XmkpEZd3QGF7RTdLeYeWQ4DVv2Qxg1jazic3ZMBGwExjbSLn5WRWjdqiuLX2fKGyu3Bm4Xn7AjR6ifmooLebP9C",
  "key19": "3KvSv7wcnhyrTNmfYXQTFa9nT6p3myERh3LnZMADQ8YabZ6Pnee5EqC7JMb6mSVGf48RMo7puQE2TgpMYpvX129s",
  "key20": "44A8zFYcUiZpMJEQjpDjKduB67VodgWWTw1qmJqePGpGHut72s6QdcM5byYLKmoXDLFZVEoZ1uuwumV5m9P8C32d",
  "key21": "3qSYWwTu5QCRfF3nvxSaNBCroU9NG4ACVwayDSvDNJdyPcijmoDzuTQYZKucAzgD2VMn2iGwEaRCFXifL33GfE77",
  "key22": "5E2a2BXtFXqF971uxUkFCgtxDkHmpATArp67kBCTvwNdWMxinPrNpwuPXrCUnTsV3PGRoDHxr8dzmvm7nFEaHYsy",
  "key23": "URe6xvv9ZVBtz8L3yz5fYeK8qJjUQj1mi8hzTpPXC2m6s5WqA2TUUw4sEjPp4K7yyn7y4qBstrjrhdYYbXojCiv",
  "key24": "5ZPTtSu2B7RWG47wUXRWmo4iwdddYjLPLU3EoPDEgSLhhD6p2oGrFbj6sjtzaaT3Rt6Po62QRbSAiv5NrwphUwWp",
  "key25": "5UvqCbrksRhEyf2xJakFfGhXnygZXXVnmsdREtgbe3DPytrB1Zbb6Mjnqh126f8GWFnhQtMnwWqZavUexwGf9nKP",
  "key26": "4TzUS1GPC5HXqS8By94QaSPuNBcaM1k3ZuNXh7JzAQLdzoEcupXcefmYNAvaPX1dnVJx1dd56BMBF92XdMwWvkne",
  "key27": "2tkKrDUJsPWXSys8SppoQnLN9XQ5L4BrBVjAegz7UvUwnfqc7SYQg7zEENEgk9MZvi2xUQENSK7YaGWsvfYEgskm"
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
