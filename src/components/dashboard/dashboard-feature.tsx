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
    "5araXD2GLAJ1qtfYaKc1jqhkWJhy9GUzUND2s2cqUeJehKZoxjEKtyHxHH7nxHQccjJjb8uXubd4kv8S9GCi2KKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbgdNov9Sdy26ipTcE6742k4LXstMZNv7HRhEEUtAb9wCkbCxxvL5M3N6ga1E9DNnRpAQGeyacNDKRi4UWqoWyM",
  "key1": "4XttywMzoSYeMcQRpp7rwvw7xzQRfPnq8QbF1Yip317DuC5bHC2L7ifuCK8mtsF64JV6mS8tdSsssWLGu1cAW6Nb",
  "key2": "4MGQ9KX6kwRugM3EfajJfU7uRiczk7zgmu2GZDvGQ3yQty9hiNv92yC1zPRXPg1uyZJAesL3AH7JDX1jcmJWka1H",
  "key3": "4HZTsDDoGfEwqhWZpwgDhvk43UCFcTuxNgEftcuCUfgkkXJ1TxqdjXGcmZxPLnzZdBHT2ommCrV1cA2fdkto92qb",
  "key4": "ZwBzy1Q3EfgxuHfCmofRDaKH4M6sLN4utCS81HwT9fW11zXVKUn5LbcnwBBHWmdat4K9xvzbjjKT15y8twfC5Hw",
  "key5": "5e8fYfjGURdG6EgQbFYtMb8Z9fZM2NafAjzqvoq2pwnqkzXeXcKsSbh2gycWZ7hnwvTTC5SVK15hXfFsoVDLP1kJ",
  "key6": "5eW5gsVj5WXV72zfLrDuRfCvCLMkpCqiiw9Q1CBWHLNkTGf9Yf21oH8QvDGfLPqykeGfgUET5gm836xPb43CYtdy",
  "key7": "65sTKusad815FYqJhMSHoWGSN7w14kEcoPrJMD8NAvcwZQnavzH3Wgfxp4S4qhpQvK2vCQtyaoK3dMN7RqexAZDz",
  "key8": "33ke56d4Fq6nF75WCVDDDC7Grq2oefnKXLSMoZqCJJGxU2ru3i5yGn473nxdd2LEFu1775YoKZuVnZ2bswyZJbSQ",
  "key9": "2ZSwhWxr2vyouxk4DS7nuwKwdZdmynPnAHNe8dS8yVvP9uZPHEo6tua73duVJ6fsySL5XmL918qSA8zS9yT6vFcr",
  "key10": "2RmwquzaKJx8LDEt8GEQQv8VP5WZ9Tvdzrpcypwy4bTuygcVrcUsJ5QRYPmHkvR22X7MoPDCfJDMKjeG3ZJtxtP2",
  "key11": "pVEDk161dH64KSkpMvDJraV8Ks1iLV737TJx5Y2EELZWf7kjV2zCtRnKo5LKksZbFcwLxBBNh6RNu2DbXfbzJJd",
  "key12": "e2pTzz84tCQM2fjLxxAVsm4ryTvhfE5Go4F7rm5M2CpnMHmMn6oVzx9X2cYNS9vh2LX3fdwpPatXHWngKk4ZUa4",
  "key13": "3t9fmcp2YwsfR44UH5kMjjTRYJXSZrF7SJfqijgkRbPDEVpiZoW1DCovai32vo57TAXC818UGRMdeBq44BZVXjH6",
  "key14": "3K41qcL1BDffSAd1L7i6oGRq8CbjXLBcNt2mmAP3Ny9m5qKP7Wzkg2yDno1CUipfbZ6AdH6qFYh8VM9eSa77G3KN",
  "key15": "1SJ9v32MJxWUkKHvD8ps52c8ZfkvBF8ME2Worwh141JLrqXL1GAXsMqM1XKASquFRmN73K1fZYUvvfk96fqJe42",
  "key16": "3A1RZ4j9E8QwLRK933vRBJZ5ePJdcecRk4GFicBAvnhikxSFLDPjUGCQfwoAhYWoWexDsahy5n89HwSSJwwZwcCt",
  "key17": "4JxcTpHeRQGdaRybLhn9hiCp7q9BEuF5tTqoUvEVCrZGBAd1v5TFBJh71LApjmJq9PLKTTYBVMqncGPfPW25FYEi",
  "key18": "42fsBrQJVvfEE9XtohcDoRhAkDKxMUiaYVzhNXxnqPq6CWKhBEsqt1CvroZvpM3VGwfBWPztzFJ5gvSi9gUMMds4",
  "key19": "5SUd24d81uUJQeZs4GPmoS3fC84GgmiNsPbJMHzGnc8TnoZG4vmVUuWuBbcS3zpGgjCdRqfMxF2yqZQTfLHWqaWx",
  "key20": "WEeacLQVrSSiad7Hevnncvo1TnocyzEg6S3opxWuqVAmWPeZPhBMWf6ioBk4xWKcafWAgLY3cvanqqwfhRU58Ui",
  "key21": "ure2Bxpyj4sUhi32HcgDHDDYDXyKuBUdWv6zTAQ9NU1L9QiSmi3Cv6DUpRHB7Vigexg2PGRSaBPyfLX1q9WjgpA",
  "key22": "3mUekF6Lp71DDXsWjH1anPKm8xr85jFakP6NueyU1ufk96WYK9z8FUhZw6SJMF1ghMBinfxqYUkDKNK4ksW7QJKN",
  "key23": "2QUqR7DSPAn5fRfzkTntzRdG1yhLNWqaKtZFSpx9VyktkreLhJUfaAYPpbFdLaFw7HZEGN8rt5w2uHEpyr8sN8QV",
  "key24": "3PX3LryuFV7EaBR1Gdim1nfzFkzbsGCyo9DYbBoeAQgprAVURv5og8BohQ4nnuf78xciV5QoaKqpMzuXL1p7Dwv2",
  "key25": "5pq63ZHVv9pZQoGsDqVz5uQ2HiUN6iraqwFeZQe13yDb2JMaTvLdgquETwUp5k3FfMPCpVuvEeg7dkD93N6Lhi2m",
  "key26": "2mVdAwM1JJPzbHbaTmDwzteLwFTRWrwUnsLRh8X22E1hhf8Qq3XvKnU6jeGsyiaJ95iKr78B6nBw2DWoUwF5Lye9",
  "key27": "5kJyF5YuH2sMUQB3uch3rxg2AnJ435W1ySS5AKvqCUbd9CeRSJJJSiswv76sqomaHzcSrdUVshXYjxvj68pGXWD9"
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
