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
    "4VgspgBptR4iwCbPrUDUaXTKtvet1pAenBvGwc84gkmnFMPGMbyeCdq4FzxQaCHHALdKWTbgLGDkHLakDUnmAhS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JrS7Dj4YQFrZ4tdXFWjkWXqTyPSRjjCyYWviQrZZf2ZRs6CRu81W5BHjP4K1sWVYVtp7T4UJaB5knLrGaW5VEZP",
  "key1": "4hwjrznT8wS4PMVQKP1TW8uMwgtqS7cHnx16R7ecJndE7ikpefXL5CQFGZwVrvo5MMr9B5gFAGGRc1LjiWAcaQEr",
  "key2": "5zqXB2ezuWLLps7qgcVo33Tb3xWmTp68QawvZtQZREfFDQX9EmHV1mw3t4kkSZxUdFGfjuSYktoC2Vqyf8c5w1zg",
  "key3": "36RBGepYHYjGXaRdQniCDUyBEqTY5oM1555Y9ruGr7nEDuRZZw5tv9Ggb7S5HwQdFkEpuabBcQY7R1dyBCPWuFNs",
  "key4": "2iVozmc641rUKbxeyCQwmW63XYpfn8nK2MpPMojThRFH9M3wjjFoVvASWRdRc1BH8NeeKfE7x38YYJRs9HdTSD7G",
  "key5": "51qPYMxo1XCGXk9AfRoh8fTbagvpHxAUo5EGQgnG8Lj2BigxBRKcxrDR64LWtKPQxA6AjDurE1Sv9yhyKBMwMCxg",
  "key6": "38hgAvYP8StVR6hGdqpUKznSFJBTxguSydY1tN3Uuyh94akLvJTrVVugxXyiYoREP3VGC4JgQ6JGjC1WasakfN1j",
  "key7": "Mnqpcn1SmAapnRJ9nttxNrF8XNsiKnRrAEVkxKYi6N86ecBX9jj2ayCd1zJCPF78KcjkcHWSr26scNqMGyCP1FD",
  "key8": "PFzonneZEAM5zKsoF6HxosnQsuBPpoTdgiwvW32rKEjvcyRWfAKnYDQ3DHZjVcm4o69X4HFXA9DrUvV9ma2XG3Q",
  "key9": "3UfvxRXRn9zy8vqFrhA5GpH5hdBAvyU3EGybXKinaeQhPxGA2Q5ELVD1zhFdfeHAE2jeyquSP7KStX9TvFm9sdD9",
  "key10": "7cRjXRpMmEpTa1KR54AQ33rtEQ6jPcdrxGfv1hjguymG3ZThuP15pUefgwdCcq1rjYUcDVqdNcL7cCetmPv8Lbt",
  "key11": "Po3rgRNumo2DtTLe72r7F1WW1cqdfuujEEGC6fn9hj3peeGGJXiuxqrrjmTkJekqgqXMFrGGJrxETzzLVfaE74d",
  "key12": "59g1CKRMq5uc8bHiRq1UircYTyoeMkwJAXnozXe6uL9ogYJskPwMDVMwzTAmUabwyUgZgqLqYmSckmYCktmpnQda",
  "key13": "4RG4Mg3X5XwA3N4MVJChyFL83Btz9SP6XL7DEKt942a5cu1JUPsQyUNvqQ68DK6KEawm65QxvGDNtkgfTvDHwP88",
  "key14": "3XRGgX2HNV5s43p6bVE3zxVjpRRTXqXm4HHi9zeUdqvBjqkT2gFT6zAgFyXjVdR1myXwhVUZFAdsSYkHaugUQnix",
  "key15": "4ogjGv1eA13VviYEFuxtoWqSB1acR5SnRNy2rDgBSMS2gTuBucQYiDqZnJU6Zz3Yhur1yRmBAPq52odXf58cEQVZ",
  "key16": "3zhMiTAMziELXE391ySUY4S77yBAET23jcLebgzEjpVeBCb9TJXGvX1fTQgjbj2tNcDkQ3k1GPit3ygFsDzR9XpA",
  "key17": "4szcccV6bbsybkCp8CPfh16PS4Bh5SNPVW4jRM95yMUQkvjctzb9Bq7nXdRcbiJugwjpfAJ8MEaNmRvpn42NxX9j",
  "key18": "4hFaSHfecy8VHokhGgiEFp6bK4akwhevLFtPjRttDg4WjVxxK7bD3Aoq5ynUBA7JKvJYc3DFfXXvP3nammQBydZ9",
  "key19": "2Sg7pv6WU17jsW9XaFCUHZ1CJWKJf3pkkLJh1Ffn7w6udxUh3Ji9o5rj7U1AJ4F2rBGxnnnXaUJoP3s7UpZhx26j",
  "key20": "5gFGjZuZetTUZiE4LZkguJMgN3nunvm1Trmdr89hHj21L6HHwwbfcZo55Dt8nXciNtCia93x5uTf2FLdow4Vcf2J",
  "key21": "5xJM4jpLhYADPE1LyYK4bg4J36txYGmoQgWstEB9yWv2GQLnW5wT8fEpcmD77DBCtf6Q82gSwFKahZmVnT8BpBk6",
  "key22": "5JMrkTjGjEkEh5WX2Mtif7ig6DZM2GUU7ydgR7DKb5KbvxcEzkkJAXxgTTa6UGNknm4yuApDgP2VJh4HU9X7hnbR",
  "key23": "8MbwedidJ2VugF9us75CYNSfEYowHsMP89yF4JGj8nDJXmxjkMQ1MXHoAvp4FhGmZaYGvSnpzEbVVExHdq5mfYz",
  "key24": "2dkET9jHMLmbX7BiG1zdoBeMt2SeFaipPJV2NbBVraFTikv4jCodZc86LgAaawCDm6MZW252feJatipQyx6FWm41",
  "key25": "5EWtUhQ3RsTR2vdtc4FMAT1N7PU31NsNB1SrQSet3Z9bGDVyVuiqEjDx6su2ZCAXfSKUWngujEqcnh85gZJ61494",
  "key26": "55uJzfXK2q67xqtqYxFSdoPeSoUziq2rEkMmM6sHRCSRzyA5k1ZZN4n7w388HPjWYQsvVfwwuRu87SMqraPgFZVq",
  "key27": "2RXijgCVDREWVY7UHpy2483qS3ukhtEeofLowghFzVmjaAP7vei4n7b6vHGZu3qoSyzBCK2orsre6d88vJgRwq8z",
  "key28": "4snboobWbqYo5wENFPejSJgaAQSxtBxV1S3dxNkx7NmmGU2mtSsj48t6pYrVZoKngH1dpC7yMNC3qyamgYiNVJ6L",
  "key29": "4435pA8JL7CwvDzuzdTSR3Cw3iT15Wi1Npy6QCn2xuwZkgiUU4okeatyvZyKME1276obkq1xk66nuHsTACVtPf73",
  "key30": "3KYEWSJ3GBqkSdZ8R79ijhBQcDr3Hwju15rByUQ1uXpiTi75TKKyiSMP4DXjYNR1PDy6VDNNtBbT9KZy5FC1Czdj",
  "key31": "614XkHY6YcHoeXVfzrZgEeV75PMFAXKxyJ8BEPGDEo29tMtzmsfLtgiY43L7rXMYpZQ8Kqu6W3wjshQrmRS2neSa",
  "key32": "2Be5hYYciPJkmpKxKecah8jdDYByjymKW11THDTEHdgKaW9Jk9vGi9HBD6Db2YybysddC673F6Ve5kxYnkoswsA8"
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
