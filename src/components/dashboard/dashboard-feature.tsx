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
    "4s8nS1PbgPrWF4smXu6w1AHGodLB9ZjkHtfnrg2dp2UCe7AHDxtCEeKPpfFwhc3rzeXVsDNAjpyW2oUVhiTFhpgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HDC8Xu2E19Fxr3ic2HNUyo33U1wyPsuXcMnfsPJUuXPbzqBXvrcE5wXe64NoaNnzeemjPp1R9WVFpa5MiNRTo9",
  "key1": "5zB8TfY7AzuUgY1tkpAaBkAGfd9R51Jc7hHMTefYi24eEpiSPTA9DZWMy1sWa8uaPZEC57ruTrWjYTAdZVRCis4z",
  "key2": "3UJ1XDGeG1xGoRCL4tJZYMy2ViWphJJBSA6V9nqNbiEcYrLyCVHNsWJDuStJ5wQpvXpSHkYCpDci5CaU9xPxa2DL",
  "key3": "J94JWaFcrPcPNfB1ZwwMMuQpeSYvJR2RSdSpgoLoecn7UUgVHGL6xy1oSrrNcQvaADyVoyKJGFEmf2ehJhXWHsC",
  "key4": "3SguxLgKwfm7TkAyYnpgJP9GhLtLLaBK3JPwDVWEybs5fkNGMWFX5bMpfcpQinyJ7WM48rndSAo8np4oV4N6ZDip",
  "key5": "4V7FpHXYa2hmH6DiKgxoEnqn6bzoPcby5fLzFgxLmkKuxGWmMUPUrKgdSfuRmEjo86TPdd6B31V22YockLVpHVe",
  "key6": "3QcVb4LMNh4FZjpXqqtz6QRLhHDaJayW2DAncrJaCcq7PHuNocgFYSYgYHwzweu5umh6UXYwS18HfrKSs7m8V4C",
  "key7": "3VBs8yYPEhArBTa3JNoCEp8DVxUDHuMiuhWMv8qAxCqUqcwkQZSa5c3MYrj3z4ctVVDkaw2dKStm149J9nT1eVcv",
  "key8": "39La4i6xUFpTPs17SsZFE3rNNy6RysVMH3VhejEe14thEF51cxM4BxJEwF6UaPh2QHL38NjXeT16TyMq7A4TaHqD",
  "key9": "2Arr9WPi3bfVnrsXghNXyJEwyWpPnuBhawNKh7GX7vFtRxhC3f3krhsY61UN5ygYFaTUMCCYJeQgyED4itsu17V8",
  "key10": "5qrUUJHRzqzMdNSbzLEHbLw8W995g2ANeVfSNczfeL9kTXeW3hFDnVMDgPxA19vs8u7gb39HL3DbDiHBQyDbE2SQ",
  "key11": "2WhJ2LZTDRXD7BoSyj6tH74J4JttHD9gwhyBY4HNhTodvQ7KtnfDmfBmjRQNgDWsJfbHCGXbgyxDVEi1Vddr57Fh",
  "key12": "2aN7RvmBLVfBusrmb9E88fxrVrMPRjwLDAzegzS2RzqDWPPXQRpwP9qwWXHCcC2TcEntBC87GuruCA1a8XpS2Hio",
  "key13": "33PvP3FMSv9E351Ev7NEGZWxEYkAiXGLzrbRsu6f1qfiEdYnSCtADtW2RTsBsnMV1wxHpTWUJ6uDJYCBusNKSCBN",
  "key14": "3sKP7oPtArLX1d7vjsVzVmhkXBNBxZ6kcAEuRxk1uj4vKqovm1YdQ6wmhhobVGfHexs5duP2RFjj6GAhMo9so2Qr",
  "key15": "3mn954khqi4BsfxFuXuGfQcSQ8aRjPD8XVBuEjHPSSFdqfz1ZEpSNJATSfGpSd5JUdHrvitnZyECbtsw4JSqkXbN",
  "key16": "5DWqqSXafTyBRU6EpqRbaEWfQkJwWFAoXHReaFCZTnroodvLgNbKYfhHgs6s5GSbdBWReeqwLUSJoz5xSVXvQ7js",
  "key17": "3jHvhjbxbfRZycgny9ciBPwW9Tg5dET7bfamHChTC5mR9FujhVmiwedhStGpp3m354rfAVrpc4EqGZzJzHoiWEDz",
  "key18": "26sr2obBAyZZVGxN63CWUvG4qWWN4aLFNHybTjGfV2VUmXtd9w9cjD7NwdRM49km8dumBBgijSRmzxrvEz9pm5KR",
  "key19": "vFV7jh9UME4hzYacAjVDqfe2N78hgLeCnxkXZWt51T9ZNanQnzwSsywzY6DMLAo5LmkMPfEk4Lnv4LkEWcGa1XE",
  "key20": "3idYmM8ZRSfCPCtjVfWNN41XWWf9D8oaRyFhncwFo6h3S9UdCUuzqqa1TN2R8HC96h3fZsRd2yDREnybBir9fZqh",
  "key21": "sK1UWtG5N641oNkWVAwXPMRM2rJ4PrQCe5FHT5Jpg8b7B4HvvLEUnBXiHZJNQ6nC5HGh2zEXEC1ux2sc37ZbecV",
  "key22": "Ac12zk7QukuGL9ZkpWKdJ4NgAt5jDNnPQZEKKfmzAGNCUcwEogeJ1Q1Kbkf7tQ7bjsQFTXSejeqskAoXu64thnP",
  "key23": "4d65epzySojUu3jCgDbY7jJ7q76hoKH12Jjz8g3YAeXQwfi3XMTLhDuH2CwBouHosv1w1nKNAicTeY4st5JNNMUk",
  "key24": "4iRaZHG6ZdxrA5kwSLrjDZLzHBV2idvJW6vPH5eJappwRYDLqwYoVELADzjSrEVovNSkzA8XV7ce92QwNQ6qH8A5",
  "key25": "29hTfXoNo5zDoWQrykydZXN9XWhAJhbCgdD4gGdrDbVhvD9anTrHCUc5aJaFwhUgwKwRtCUuVKbH3f5FwgjobJG5",
  "key26": "39nqWVN5F83qfdS2BhKszJ63SeLhphaSgz39iMHvMACDR3dKfuVL4RBrejSU37jxStbbXzAKptqD1ii7bN48CukG",
  "key27": "2CDEbSZeuPjCXFzCRmTsTZbyyYaiAfNgttXtMQnWKCbCApWi1yUZHER9TEiskk7jpHyGmXXgQnd5KMpTLpwdgGv4",
  "key28": "5dK4RiJUhrgHA7jtGY1wWyH1QF9PDJ2b1Vnto3Z5wgvhAkCRmkHsL5PcrCh2CRZXoTxcYsgEcX3sWKZDa955RGFi",
  "key29": "2MRiDs4oTbTKVmSBLsQPPS4vFGvoVhEdfkovCKZENsWe3Fjo674cgTbMqhbvLchEsS4PVEBTUtFewk8N1VoZ1M7V",
  "key30": "2vXxUoRHNkhToFJ21FzBDJWfPxZ76bsJHo7nEynpuKDHMdkECN7G1iyECviDmiyYkMKCmc9aQp52wo6SA6Z6dKjq",
  "key31": "3BmeAh2kM65UnGqxy4TMX812UcreZr7ftNA4QrEwr6MfWUmssXadMtJponv9Y5MixX6HB1ZaECrLSBiuhnrPVMSc",
  "key32": "27uzKHR4rpqQbeefDBcXry3sHtxjXZCYSqs8QrxVkExTxMiM8DLgq3EANAX6wsNiCxMDeA9DMmzpM2SoL52xDaEU"
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
