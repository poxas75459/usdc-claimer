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
    "3GZCCaRccgygcTroy8Pqvut9pjgKzp45fKLc3oFpQJ3MG58SJfkhi7av3dKDxLM6JmsfYRf1A1fjUcegTko1HdFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zNHiq1dtZnhpwQ6RHkvMNMFPbq2ChtwVmXUxiGy6sXH6cqXh3R2jMS3fE6VaZQp5S4znngAVuert3ebzigTA8aj",
  "key1": "4Gsx2PK2PrH6fUoPtSz78BfNaRH1AcjC8J2iQ8WhevcD6NzAbdPLMz2sfwBANN97CFqTrvV4uYPuzN3ZT9szyRNH",
  "key2": "2K6CZCdubLPekpW8kTXZjKDsopw7zyStHZmPNMY5jfCkq1NUBqeqp543z9JqL7wpsorcQvXwpR2TGvC1i2uq1HMf",
  "key3": "5MiHKrtK97GmK5HBKDpiMjtmXknEbTcu7XQrWL6zBiLCwT5F7edFNMWzK1VRa27RMVrn46jXKX6REbWXVYs9RVAH",
  "key4": "3ovPCqai1GTKsPJqNQStcoqB1dLGAXzbnAN53A85jkyVoCktzd1CnfwkRTjZWnWvZBVx4ZudNqfeXFYwvEhYKLPT",
  "key5": "xZ9pqnxMRR2UarMJwiMFUAvLFZJmEuD9tHZ9dLEyAEjyw2T8vSczg5UCwtrzieUCfMpj6JioWF1VyonWnyyRL9Z",
  "key6": "5KatUB5giNtbL6CfV5zusPFeHdym2UFPwg9EEPVt3syRxKprjZGTLxHS7pP1R7EXAys9xjMr4sscBu5qSZYVHs1S",
  "key7": "4LpvUQMGdi6Sheh4CyPBBGrFwwhFT92NTFSRkDk4RzkhesgcCpG9caEjv21Yd76jxYZhypT233vuHaXz45sjPuZY",
  "key8": "43KjifytfrqpWoiSRJAqJ8ixPmFTyiS4Tf6TUHoTYC66YjQ7CeqiJ2nRahE3paHhzcaAbzbFnrHHfkVMhEmtsN7q",
  "key9": "ccKwbap7wUc2bw5uKSDQfwW9MSHtsQYqzctg6QpATuuLqoJFeaVCLFD73WCnjh8C7odWEsP1vqv6KUnz9WKSE7o",
  "key10": "4JSdiSbVAixcNADyykG8BwCmALziZUEcGbfDatFJuEQ5zLr23AAexoW4xsAcFsEiTCJQdPQYnjZreBQ5Mb3K2cs5",
  "key11": "3QKQwwz8Rcj7z3zUpLkUAs8miQyuR511yUopedWz1vU146ZKATMjkD1Y2S4zitDXm3w6NAsG7rGDpXzk7FAdNZwf",
  "key12": "5i2qjqkcmnpAVmAUYd2D55YKJGVQ7nmL13qJiL5jwNWbCNBmhdwd184GpQqkvD6qW8WxhE5yGVxrLAZcHRKTyBSW",
  "key13": "snSirjKRbWSNLo3TLN1d3wVCmFvogu5du9qDXt8y28QVj4zPGySaMwv3ky2XiLmrDzk17tt34w5mBfFYYCBk1Zz",
  "key14": "AF81o1WhcF7Xi4Ye69x4AYQhccm4Snxog1bdhAnyD1gq2dCr5SMLNYxD1XwBVrJWWdMYjcGii7L3Lfgonh82NAe",
  "key15": "Rz2vGHA98ZjVbAS2Ba76LVsv5NojoUSPGozj89ptwFhJzxvM4WpCoudCrKcRpZFEmKoAQ3zEYARjAT9XHxp3Dvj",
  "key16": "449SV554FPreor26i3BRXWKvBmQBmvxXrsbsXv84qPfu9Hqz9tSUyz46nHHxHozFKJqcoAV6XyavUSREWnfyJ3M9",
  "key17": "4rj8oaceY15rFCqYZdyfHsiwYzTCdcComD56PcVG7s9Cej7D1rcnKhovFwR8SJwhvECRyU7nx3ZwrbnG4T8CEu5F",
  "key18": "6fLnTrmfVxEMjLBcVJvZPytbLWdgZg4ERvNoxAdLyxitgh3WTAxSzRgk9Q3HVAwvez5URASYUXyzynxgpHdtjuB",
  "key19": "jgfVgKMsAkvMVtiYuHURGLBhoEQtQ8yAu1PNcy8gJq1qeVuRVqVVcSyBnELekfhmVpYNc2954i88vwtCU2R2Vea",
  "key20": "3mnMT2UipbDA9rS5AYMwoPhk53YQgKTCVRYdd9K956dTuFKUUEJtSJwnL3o7CUDPcyunV7uiMfKKfXLtnwXiPvCF",
  "key21": "mF5nd2UWob8nvcSZER6c93FphtAcQzoNvV3dirvKQnZK3VG8S8Gof7ctfqA7rvecMAuxfTF5grEaiYMivn81z26",
  "key22": "5tKKYbfT3TQT6B3yYhPDCwyR8UrisqCQxgH8dvJLDwNSRDgmw72D6TSqJeKjUUZXPtpR2eQW4WD7ixNYSGj2nqX8",
  "key23": "h9eqfDCHBqgg9TzJF13eZatrESRxrYsfDEQuwM8PmjDqT7LhL59w2zZgSGFn6xwrim1KivQ72sroa5KWrEnQkSV",
  "key24": "3LpRsmS2nSkguC7h52dVYEeJJY2zNn8cvitWgc6TgVam5hdBMLUWsc9a5LGGG5TcN7K7LA6gBGFkCycMf8Mmtcsa",
  "key25": "3aYmPCZTdEziv5228ZDd2odGw8UQQHEDPFnyEDSiKageJcyBWBkpaL2dA2WNvPUMHZrH1iJxAvvsk4Q9mGQkWzRZ",
  "key26": "3XNhEEgdhPHk28nG947sVjAtYtPaHvMJF3Pjwte5Cijt2WwaTv9uUuoANpT7NY6gJhzK9PiZxTtMQEyMm6o5u46"
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
