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
    "Za72z5RtCdcATShxhcVxTJhNV16HWc3jxvH62xu71uQZhtQv6DtYwqaz5xv9ncctFMRw6zDuwmHYq2CENZwumRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Leav7C4fdeE5W3m88HudK1ExDgUgK7nLLYDvPkUt3kZVgVvQ8TLG98XtdjWwbq1U61MUbBprbHHGwaxB1ye9qHU",
  "key1": "2vExu2HcmfETKemMEN68VNkdfdNshZirHrPj4XGHgbPF7HjCr1t8xQFuuaabyhaC7qXzPMd9DHsXYYWJrMWxYYKi",
  "key2": "3CasginMee9qSBqcqQx4kcx9NV1bQBaWrUGqLg39qA9na45NQufCwxcR9QHq5ZhtBi8kCun9JGfEV59TGSR5GHVt",
  "key3": "4GFr7cCJfBMHtAXSkrGgr2GAbHpegLTu5N7BL1CcSCLGLKzbHBvWoaCD9eArF5C53S2vKsgiJ2RuPJn8pU81UAQC",
  "key4": "3Ha5ovNJCEcAVitSx4Z5KkdTCDAgM6kCRMC4Jd4HVzYsMWJwtUSUEAxd4K44mnWPGNssKCAtw94LFDRJKhJMCbAL",
  "key5": "2KEwCYh2shFKGNGLhe2i6C6Nw9T7eXR4uEbaVzCikh9BuWkPxhGvGJftqpnFWuBJCuskWmD5zRiRJH6XGjLzDNeE",
  "key6": "3XM6X2uAV3kWCXTiBjFiaG44ibmWnWACBCnyTMhCd92CvoZTDkYJxFNEe4zBt7qha7PNGBTTeF1VejvNfVvfv3tZ",
  "key7": "5AengjnH3Pu5f9EccFC1k6dpTQV196h4X78Pmvd3NaDLvMu8viiSFfsnSnx5vSHwCt5fDPYcUDhCQRvVLwKvqHog",
  "key8": "42PfDfkuRpz9bChJCSW6jje3wqn1BAPA7R8x8e7YqrKYVTfrWcNhHZPCkKrVYpdsPJx6mQ4CAGp5q7adbLvTWoqg",
  "key9": "4zc62tuGPeKStzGiTcytBR3c3oQqN1aoT5VDiK9KzPDy7GYQ8envpmT9yAAv8FANy32DSpjqVNRiU9MhhECkE7eV",
  "key10": "4xZvzKJVaKqpWVzsodVmXCejM3VkVy6wW3epatekmRzXkRPx77V9FxsiYfvua9HA64tDbcjFeYeggWKXo1eNNQee",
  "key11": "PXYJBocXsDpZoBeDFevi2kCdMh3an4hySJ9imKZqgnGxaEmqDfobnPQemmjMCb9SsTeLMaNNSvFs5vbWvaoV8Wx",
  "key12": "47jCUdXnnbccsSfJudhwGMf5VDNayukrQNtw5rjmBT7zzcAyuPhbsbiZrvSxFQetkd1srzJZ45pKnpQZD3ZPUhBe",
  "key13": "2dwJHZGzRoru9BEWM1XtCQ1DRPicWxqjnuZFju2UmTrZ6QTBntvWxQUL7nYKVSR6xH4SRkn1pwVZQK3vf1fZR2cF",
  "key14": "2wr5jy4BB2zQc2TDinMD4WeAvquRtWMgKfyTcAGNp2xL688GYYQnwWe8kawCmg78gSjeUBv44XNHXmWHTdLVSvUZ",
  "key15": "3szzNicagqacPu7nHnfyefvn16qhTvpddBD4cSpLhzxZBcR27Mvgtc94Bmsk252y1Tpawu2qYEK98wx1LvDg7NH9",
  "key16": "4qA9JZmNAaTwCaWBjbXuLuD5RpqdyvpuouSLMcSSrQLDHckxsodhEx7TFUknb93uMRee8CjNbG6WuFk7CLbZPNes",
  "key17": "X6LA218fcmjfZnrey47dhoqWX5s68j64BevSRXFFkZaageUw1NwRuH9C43bcNMN6u7fYk9QnnaqsmoCHDiVib3t",
  "key18": "4BZYhcEjjrKx9Q9sZfMHfoTqctLUw5ca6runHpYrgiHTHeHXXahDY9FeHdt8nA7uDnyKkHNjvArVcfqMLAdxtKRU",
  "key19": "5kWzbehmbdG3QtRmPNz7EVRfZbqXg5HJUDiNcXwHjbiA4Gjdv5vFM7m75P5NqB4sunxFtyVXsUvpDf5XvYsfV7bL",
  "key20": "4Sige69NUb4X6k3HFnJd3Qsdn7mbCMDbxicgbL7epSN7paTjdiXvkdoU6ceHX3aywjEtMPsxQQLSGVLVxzhoR5Hj",
  "key21": "3yapfnoendXGNg9zKpXDEFWWAfVzfbCbkcJeBQXWgFnNauz3iz3mcjCcUV6csXa1QPo5twvEBZqKyY1MbuJ5abN9",
  "key22": "24XWLYwAVfJUwLV5Hjg4tR9SRQzAxvAPYCxLGBN2HPsBReaAJFMfQUhyfdqWdw5TDBjLsDGewLKTLnKtMF2eiGFe",
  "key23": "2rurYSpUQoZiARWTftwn7VPxYHzaiGnHJWfffvMwgBGeWmRaahcBPxUsX9ahEc65EWkBtKp8r1HXRrv23i9STmGr",
  "key24": "3Rb3nrxQK9UKxLtJRoLSgkhY34rY19EoYQegmWybZ9pDy7jG9zE1D5nLdZfDubvHMjWFqzhgroLK2Xw1taiP7fS6",
  "key25": "5z6kgKzNcYm3XhQxGaxVRckXBsVkaMmtuq2MGbmAW18prqEb4fkjKWfpPzGy4p3YmXvhJpGPARKgqufmAnmmCPBQ",
  "key26": "JTb6jNns8dhgdf7HHDv48U9ATXULmWmwMwwFoDw8NGdLKbvAfJGHcYa5qDVV2cpnnJsVcwvPFMP7956fYwo2Brc"
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
