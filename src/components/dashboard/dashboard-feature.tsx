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
    "2ExjtWvLmf4LuNiDRVgvfPf2BbtbEo8QUTyQ1of9hjmnetPS7rnSAQwriD6KTgJVu5admJXgVmQWikKgDvzTv9Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6K6HUbQJWFSVpj7VkqziLq85gxbnqWfHruvz91mD74G4EXrs3kjvTg1fHp8JWQM9qLthYKQfTszoBimPabeLzh",
  "key1": "y3tcp5H9YGBLzHqXcVvQBRXP1ppdQUE6i4X1y4EVNL1LPq8Buudb4UKjM2m9SWdFm1GNDnrNKw1JKgukt7SA1Cg",
  "key2": "3QPQ7S9N2mv2nmYnzjduqsKQA7R5ifVVRoUgwL43dh6ML4U9P52kZRD2nynm1Lv7hUZbza6RdGCGDyqSiTaw1hic",
  "key3": "5yRijHs6uVfPrFeB9UYAQA92LHnAmJLLeE4EoKT2kcTCGqMiPLSpfhzhNxjZ1gyEtGG5dYSVujxUnqgwsEiGHRsP",
  "key4": "3iYrY7do3MGKWA2nnGu3HbgReFvt3q3gvsDNpp8tNXSBnoQ8WaPrTVwcZ8Da3CAksnHhHGZ5nnZioAfLycxDFNwV",
  "key5": "41cGzAuuhyZ4mXVB8ngBeTvFWasdUqVdr7acfobJhpchxg6CZkw6oQm56St3RNGP4PVqk41Qz3Hb7iFmHeLz6gJ3",
  "key6": "27quqqfgzcm5ZgVfjwFGGPRkb8BNUjiiHQCt1ykiuzvgeYfJdmsjbSmmGZ7dr7X4pHJFiQ9vTXaB2FP46B23HFaK",
  "key7": "2dpWDzPnbL3fA3sHKpqbQNGpHGxSHhQwZ9zrwceVKSqUjQZBGmtw4diy1zzjABgGzcZgNffDc1wtftuoRCDDLw8y",
  "key8": "3ziCcwPr7NH51h6KGuXN5ps2VPjfnJJDwv8LdcKoHU6LMz2EUQMJHWEJJnE8ZMeJF8Hi8Q244BEjnX9bW7DtFXGp",
  "key9": "4nJbSUz8aW7WCnbFrzkDYQGjJ8ZphEQmQbthUsErC9X1mQ72KLVtjuLY4f36bujBN1DUuEvKaNBEt1DVUCWjZu1j",
  "key10": "5StLKFHTMzLGRfQSQhx9g2iZkro2pAFm2aoqbUnyJNrZkxVkAJ7warHSytVejCzHtT5z4SNNUNc136gUZna8u66g",
  "key11": "4pryodQnqM6mk76GSUrXbXM1neU81gKAdWpVU8uYucCaUk6E6hCyFuseCvKVmZAcKTX1Hv8VTJXoUSYFWJfQ9iGr",
  "key12": "5RHktJ16keDkYxsNRQnHLs2xa9HpMcub2Hq4v5A3K3a2srW4mRiorTfQtaChKH9kWFHzaMov3nrGWhEgSYEVjvgm",
  "key13": "5vaGMx262oFqQRfE6QqfXGkugf59aAysbhcfb7fGELV4k2aEXN1RD5dR2Y2akGtnmwTNY97ekFiijHdLWgipQQbe",
  "key14": "3Dkd7XXf9piNPPJuXqnkz1hr7ce8SmK7i9r57NQnbneKBJm6wB2QVpmJmQ1w9RTUxz65tMRy4hiERSVzAsUkvT5V",
  "key15": "2tv6Vzj8EYSyF16AHSShCEUGU51xPJAXNJxSVz2YgoCyvRP9WuLrAobXaCddcHSvwV1531Pk4bueXGVu2GDUGkiP",
  "key16": "61Yhik9k4rvLkpvEVbeGR4JVWwTKuYHebK9YDftV9rQTUsfAjXHaWBycpUybD8JVxex3Sgf8ehNtwJyV11NUZb3d",
  "key17": "f2w64524uQYKXnkHWyLnSRom4x5V5sBZGDNsfLQgyrCDMkXRXENgqhyfw5wthc3vNRUs37XAnkuvovWttXqQCG9",
  "key18": "uctsxd7jT58q185sBEpvi2bXov4mQiBSh72nSciNxxuDon6R6FfSLN8wyz6prZUNE8yzwZPXeTNgP5AEJ2ui1HS",
  "key19": "3kf1He8EzDbEyfKD2hpp3acx4VX4YsN8XEME9fNgZ13fLEmNohwpQTAVJ4eSNnvHKz3cvmS3gckB3v6aGHTdhmZ3",
  "key20": "tbevYdbHTJZT389paDCkqwUWLYd6QQ11PmddhpfrPfA1T8MgtxYcqaznacoKucfY4wjWXho8rZnTyKuE4fEHJiV",
  "key21": "5Q7TEcpYR8JETEkYTa5r6mdUDTUa1NLWTMXGS5HCknLsX3QPPG5CaT4AZkT6KeyVgxkBjhqKpHKTzWRs9UVUMf1Q",
  "key22": "2dXwxfiZtodAzVXnU1ef7VvHWGSUKB1Q8zMWHE9DM7SM7FpQEbgdnyoav7qcSSe4er7oAFsz4qrAEmU3bhPqBwxR",
  "key23": "5EURy2KV69ypgF6jHtYsKAWR4AugQYhbKwLsuXfCmjuyGWLpg6fq8ny7mRZX5iH6yhhJXzAVux77FRxh2S1SYNCX",
  "key24": "LtKAoLB2Dx82BktjGcL7eUzSZ2rwC2QoMregzCtq47Py3kaie4LVdgJbxM7sr2cHbQa4Qw6gkcW1BGeaRsohUWc",
  "key25": "4a1Q49qTYUh8Cb5evMonEhtmbVHQUpCNFj8gQ6f6oUcjeSSstL8D9XRfW4qnRcBJDf69kQUJqwNrS9C8jxB1ZnYx",
  "key26": "3S2x1Q4JbbtwFg3LoHVQtZFkCExkgZVom8fYqYhD53sNSWoRscWK9gCHyXy5W4SZFsS1Nh2F1ZL6JUYuMH4Vyh6N",
  "key27": "Qv3K5p8hKxhuwuSGAEiZN7uRuvwaJr7TmEnoMNhTerzqR8N6uPnUjXVFhpGgnbjewCTUKAJTB1dfxZ11w3kQY97"
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
