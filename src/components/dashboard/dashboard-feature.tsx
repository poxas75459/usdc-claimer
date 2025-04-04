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
    "4NTYi2FR64NGUnY18ntnWPoBExED2fhThHiTkfrGB1TtrYqHX2oxMLoMRvzNR5yCSKmLehZH4Yy1gsgF91TFyNXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eq6kC1ReznDG8pcfZpU8G4mGtDPwsUSpMVsXJ2zGFgrto2F8RTr74hC9mhNECE9SVtBpP26QCfzQEsxTBwZHRaJ",
  "key1": "4Vy4EBUReWLcSRv8xXJ121kZkKxB6pDWRMMzdpSeLgXoNB3ySCMbQQ3kmREzMttRNGNBwrMzPcdUQUCk5LsPCdWD",
  "key2": "4CZR5WywNy7NAuBNs8qoQtXfwUX71BK5FtX4QdsJ1E36qk2FXPvP83P6Xrm3UdR7odncooJAvURexRxwJA2NKDNJ",
  "key3": "37SfZaV7u6pVg1ayxUqdLpfzUFZvAuRg17vjDPX7z8iDEiPz9yoMMrtMhwcjXSQhghZyM41CfTKryu1pfGyBRbN9",
  "key4": "6NbYL7cdoG12E53wkUQt2hz2FqNN6gB3jPS9nMfntnkPTuNBi4SxHVPUMq6ZdL8VHGEy18io8mP3cke3U7XZezT",
  "key5": "2uBi6i5ZH2MmnjrDYHo8LxhmM3khFBGFNd9zsW7HZEVbpUtjAYBQ6eTGzSNXKnM3yjoJKLtKFSviCt21M2B5SF5p",
  "key6": "2kLUsEPp4NLDZA2iHCiGnTJ9JUpGFswKSkUiHjwm1GoXXqybBe8pd9gdTQv8r9XUnEpNEdkU6ozUYCrMGkQz96Ju",
  "key7": "fbKHmny8z9ACfH79W1oAxhJWvQrLgwG3mak2ZPf2CFs8rhyKjhLxBsDVYVccwipL8kAtBo4Ps7w5x14fuqUxuC7",
  "key8": "4VW1AEZZM4oBQfAfiSh3n7n3QGGkdP7HnHyphvEz4jPuZ53aksv1bLW3XjYp5MmzJYsKDqwpa1kNcT9i62qJwV6o",
  "key9": "2qnqYsrbi4gdXuvwZE5fCDvRP3yjcuF8i6GwNq33XioWLoqcgp9VS3XqJCCgUuNPrRzq8FMxJgoqGfwES6zhNUjJ",
  "key10": "o5ZHQYvtXnS2PjnUVARBmF29wUqRzRiUAm5cHpAktEN3rYWhey6JDEmbskWSepGwFeBn2dJCW5ppgHbN6jyT7Z5",
  "key11": "5asJjV177rR6jMgEXSdUTeN5g1LtacGrF8N2X7HHaAuEcUFNByip5S1R1afZr1mnrLS8ZFAz4ErTDZ9Ms6cPVF2Y",
  "key12": "2EN5ioUFvBh37REYgpgZPixfjdEVSyCWCa3U7tFRit35qnE8nZbPPK7RQ3idS4gfErBx3HnLZY4SvMqTRqn8FGr7",
  "key13": "k91KJbVY83YLkEPumhPYUcTjfBs8jLh4krd9Qyea8zHCxdT38QyCqdKZ8y4U4QhFGXtyS9iwKdFtupEW5i5Yw6u",
  "key14": "2kFQgpAiyhP92XmJwh59K55PHZ7hSBNjZgqdgNLApF4eQv5PH1Hh1AvWAadySUT4GPWBQitThEe9XwqCCfj1NwHT",
  "key15": "3x6Nwv4fmG3fVDm9RFm2PNvdHSN2DiM41sM12X3PaAw2KkZrYq1GLA7n9wiSprjceEF1tjxd8B1bcWAcxuu1fsLK",
  "key16": "8khcRNnUru9TJgcqGwM1DpVbKn3or5RVbEaFg3LcwHCew7bUttiPLj3FKQjetdJ7J4a5PRJ6EXvFtjwKukebwkg",
  "key17": "3tBgekgXRAfgBqugNQmnFCs1PMxN146aotv6mfeH9zjfAXNXmZ1NWHzpjhfQkqDPCzw39MThHCEeNHyiSiDejGYW",
  "key18": "3mmKEZjvMHp6qoR8Bwzi4kR7usfrFKNjSSZq9WJZqKbFhEYfdxuv3fkG2ePjHsU3QY59GBMKpxBn95hjAYs9sVkx",
  "key19": "3BtttcjhyhC95zh9BdphZRjLjBXWDbZeh5LT687eG4Vjd2wAyMt1G4tFpijd6jVdN9kSp1zmnDoRutKMGaF9Ghh9",
  "key20": "3cEen8heENfCgYgz6To4UkDFWRPAaBLLamh7gh1hT9Vq36UyCfr3zWfLguAdWVPhpc8bxtS4ktbyNVMpvxf4LEN1",
  "key21": "4642FSrPCfcagAK4DT6pT78UJdWzMPCyYBwtUSSYadvd6TyYvLTEiy3BG27R1GpF9KtcAGuHu3xCsem9g3Q2ruv1",
  "key22": "2ouWT3Ky3X68r34i5Q4xyFgPX33DWJZPvgvmvz1YsC5UEJdvmkvpBEphZLGY1tPKAYMN7imfDveGPeXrvfpyt7bJ",
  "key23": "5UTuQVr8XXCHi3ASyAjE1L874vqo6NHG5dReH5wADCdYhdXpe5pzauRE7U44JimXqWE1k9Tks7BdrXTUf3Hj7Bz3",
  "key24": "4GuPZHCMCoCcqrttCRUYK6pe4R88CF6SgpPDitS6pKY4m9av5FofdfT2CFBqkbRUE4Fdvu5AEPAJzeyLaMz4ojBo",
  "key25": "65QMEFZiVNejqQvZc9CpVTadAghSvmZFXscrqDfRhpUEXp6z7BT5N5qcgSL2dfvBZCcFfMab6rLYa4qfeFqTstTh"
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
