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
    "3GEZs4e1bx76cCnkZgguZSktyPGCSoVf4ELk2GbRTSCJz7e2ojLxRLv4Wo3FfsZgBkUXC3vPqUVHdW4bet6toy8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJ8yNnWTDvPxMTFYPCvN3azzwAorNEdtYpEX2Dy75ZrXvAgVC8cHYPxTuyv8qwKwFuu4QLyX9B8MyUk8ehzURed",
  "key1": "qFXvspSyNcJYob6QTv5SQKKVVBZ7vvHBa3dB7N55GFquzaTuPaaacfeyFjYerWV6SMiFKh9cBGXGgvvoVyYV4sk",
  "key2": "4k9BG6yJ92xJNNBXyu73NR2g8NK7xdYYmHmRVtcJshP7GFc5vXC2DD6M2chDKYbKx8aR3UsJ5Kdc8adDbfH3dEX9",
  "key3": "4AnfMbtZxsUghnL1zXqjgSNav6rEznQNKsj3jFdkqsJcECVz7zJVvbuQ7pLNvNGP8fn6dF3HHGwjEvkw4xsrtErR",
  "key4": "2h2SdfKQWe4RHe1P4nWkCP8iYdFjpttvi2begdUYTtZ3MKF1moPWfrizdhyUB5iv9CQTEh1DJdBPPgM5Tn831HNs",
  "key5": "5yMkhGitrm49hULhSVJGFHHx4h1mViZnmRvdpob2vakVTbWHngX7cd8b5PrAT1SjU2HQNGmQFn5suUgfdqiEpWdp",
  "key6": "DgNBVfjqqK1HZ8bxrqb3uohtyN2ouojCNzE55p98QQdaSjfAjPjh4uzRz3Bed7MCbJx1JUMHE7wNgfTcUywJcpY",
  "key7": "5REAL4LoBofdBbN7SiVso97JbfMGUkDTMTY1sHw84gbcHQytWc4ZPoheKuWG9k1gjSn93Q8xaAc6DQZX1C4deEv2",
  "key8": "5LxV6rpBCmpg9zFx974v9AYMeVUYkz9vmdDqeudBH8jbdpSDDhAPXdifwsS9XKSygAJWScMk623fiTN1hcaVsYJW",
  "key9": "4vGU2XR7qPx5xgnpuMW3q9UFydVo11XxjeKmziTKaBGHGjRSrti789bg6jRvDrcxKx5tzyhhLHz4gu5FLQGr1J3V",
  "key10": "3LWNfS4zHnmJrcAM34r7oAbP2YvpqB42hgbpNCwTPLWWpr2jiofpPC4MqHtqy393E6b1b854o3cEVSSVpWbfwkjE",
  "key11": "jUe8jKXRq3tDruZsSwcokCNNJt8wd4uWULy54t8Drvka89dbUWHSBov5DMK4K6jz4gt4twgB6adFYWFhKtH868c",
  "key12": "4Z65BpmTnqaWS6sRzce9QXtTmYJmRbf9gFcaGhh6gzW6nfbFF6bxgMYQvhRisDma4nz4ypqFRwkXpEMAwVjvAiqX",
  "key13": "3qp3CaaokcvwqQjc4bVFkCFyghmwL93qjuvaMtR5efhVarHXrKe3Cad5jfRLFgiYirXVZy7NLCNYzEvvqxzqNYZA",
  "key14": "5mBF7QH3xT9Bhm4YP2oWzUPTUvKbWQZ5hyVnVY3dRpvTCoYbcHj4XwqqEsuySHaNGpStFZ4CTuqNYraRyY5ZgPoH",
  "key15": "SD5X8ibejp3SH1HXa3hDTGRvHJbT5Qv4oZj6Qz8v9jsTBsmwvD8C13ir3xbQAvD33EBgGxUVf13HNwWiTHmnkAm",
  "key16": "g9bwxNMD6p4x1NHz2v2gSv8DzupSdrUTPxDPQ7NpG9uqkYR56dVtvif6BaeDZ2sMFrr3JgKGzS6Bs9zVtpYcVS5",
  "key17": "5EiMDjjP4ZXnBY39ESwrdYS4ELwG8841y21gRkvmqX8wNVKAEundB6r4nbjHjRdajHY6yBLjWACmMsTTUSUUQBrw",
  "key18": "5UH13Tt5Ay23ZgmcFeHC5zr2zEhCRAsKMyv19LvjuJJ76MydokN6CwyRMxdtMLkkeUTPthhmL9qw7LNTsZTyf9LF",
  "key19": "2ks1avMJEy1tdFDVb4wUukPzLG8XAJGaZ6dvBRPdEjZVm86LSJ74zTJMa7LQc6urridzz5GejA2g2LFvzxsHT8vd",
  "key20": "3ZiJg2NaYSCDr7DYhE6oeusETceGhJAwya1PiHf6REr7aUmk9yK9nhvLSDgrfcbgKDdKSgyLtnx4k2hoTUd4S7SX",
  "key21": "4qBWmNHMMY4AWS39LrugX7aAWfuocNehkepU27tbmenteXfsJmmSJmhz1ZGa7Zmh8TXHJkvj9ScM2iH2nNYgS6y3",
  "key22": "3NAgfDLa8iPxDRX43gs5YgXrE8fhiYkgS1CS9WANgc5JmseVw8gSYoLSDLqai4tgSk9WagqKsFid2QFowCC4z82x",
  "key23": "CZ8PLhZK1hLe9bD2weeaKKwAkYwBbZdRiKaX9GpdgY8sKQBPkZG27y1JPDEUMkfLs56TmbhQsbSpnxpAD39fNN3",
  "key24": "5ZnRUzgKo1aXiCuJQ56BGmXDnCTCZZCv7bhDQtRrEjjEZfntaPHpbF7nHL7B5YvFj8eGmPTiNstYYCF5UZNQLcXD",
  "key25": "3g5WpwaG5jocQvf69nfz7JMXLZWJg2WLwmke6FdSGxqEQk35DKoLnGKAEgRLDkBT9KixHC1MBCpHCPuZ3wnBaiiY",
  "key26": "4mTEQRtnhHyMtGvTY1Lzg5x2rDX1e84zc6k4jpqtiHRCDmbVUMGLYsvnsbS6X9QyRXKYiPQwcw8qDuZ5khtBM6YB",
  "key27": "51awMCgKSKDwRm57JMcJid9jMyiKGiu3YQaiVca5nr2SjU9WrpYNWmcmG7GVPb1rGZ2AVZWyCgwWAdiZ4BJwNsY3",
  "key28": "kZiqXmZeT2rsvaEsR3nSzV4ixH2XMBKNk3wr1rySrRgqvfyiT4Qrx3kKZsMjbPHF7BTnacBEtci3tjimTR5Fq4T",
  "key29": "WUEgLTsa4Bx3GKg35zb3HQtnVoMWSxfXddrTPLr5j6NteoL8NCCUkN2mzFNc2LrkztWWtXjLazithB7zU3NS378",
  "key30": "4xNAKacrtkrHz6aoNgAHTcyWhdaggcrcruo8UsNjv5Sevor2MbUmpQS75hnRhBRwPwsPpNVact2VgHNJxMvxzzy7",
  "key31": "W1WPoP1ZX2UE3ZFMJtqCWdqF8mQwQWS4ceTK7UxxSrntECuBA1p4XzFSdhpAnxURnNaDb92uR4WnQWdPmWT87SW",
  "key32": "4ThkdWkbtbMLxy2zYxvtexamRSNFLEoR9HTsraW6x2eyJeoqWp8ADgskN3VNMCvAquA6E3Uq4yoG1HM1R94iqsyd",
  "key33": "9PVPPS2m27PFftu9gK8SodzgXSGrSfJ2b5sdJbYYw93APanZyTXczGp4XZ7hKKc1KexUMkQcMz5oWT9ewsxeM4z",
  "key34": "3YdHdYNhsUzjJa7ix2DzpgpetbvLL48M4uf8rsLyky19xRrMPCQstUuMqLpvWGrL11gugmeSBUA8Av34gxYj15ha"
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
