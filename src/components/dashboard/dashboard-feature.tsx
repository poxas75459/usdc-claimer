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
    "4uHNzLqKrFGyJ8NZmgBmFxYhjhfrwwQtoV1FWyfYPs3ZiqULkGbHqd9yYeQnYZcbfGAizZkXZ1ayHVnjFTAye2tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G7vTn3bbuYmwWbLwCDfkb9q3Xt6EixU5dmhYC55ipqCuPiC5PKMhSLmb7XiSMFqS5d1GuXfarsX3KH4uWa6Yy6H",
  "key1": "5MDWZk2LhX5hEud2qzgqe6wGLsW2LtkrXLkqHX2juarNuXhMQovEhRBMRFDzp7uR5Dx2BxxsxgdWaWR1dKdazrGp",
  "key2": "RNJPS27aHJuN35u58MeReqZF5HKgq7bfjysPxqoMM7xR61wsU1cHiYgVfFhd3NSkiCdo9nrxFk7EGJchKFQnUyF",
  "key3": "3AvosAjx7omWk4zZCCW9DnzARhpPpRcU7RExD24M8Tg2LkTzRSKhGae2Nn34uXbCkPiRkDUt9nTPd6fkL2H1DVSu",
  "key4": "3Qv5LS6aWwVtbPYj666ZcW7o4WGjPRN8Tg4wKBnqnN6yQKnunbagqAzXtGiChjBFRZS7VM6fufwpvespQGUuENZV",
  "key5": "5NfcMAArZhejnLMUgok9wHffSKZf2hY6Y19WBH62mSumsjjo2vNTCxLw93wuk5uG4ELXXo7jhuiAvnKWd3b5JLnZ",
  "key6": "4Lw4YUZy8UhakXkw4Nom7Hsv5JGvmjZUQH1MzwEUDrMYtJwrKZWDKSffQRzPvLhXK9uzcVWxaHaZDgRvWLJgXjho",
  "key7": "2ugLTaHabTpYexeKxwBBRMv36txrQp95GNv1LNUkcwNoBWQkZ6Y6HmrNHBPmbmrhwtFvB8A1Aygt7M92z4zYmkDN",
  "key8": "2bRJNfxYn5hQxHyekQtJk3MdeF2K3jM9sMDkNZp13jXZ7w4jJYv5oSdUn8NcH5XdDYAahUNshEQmFFhg3gwNV3gb",
  "key9": "WaQp47yHaxoPAYCpReU9Q4LdKE7m5JuP3tmvd9eetS3t93DTCe2grqUmbJzDpBYXMq4mwjW4rFjiKS9XTfPMqKH",
  "key10": "UU6165He3aMxzDe5p3LP1VVTy1ACtHfxATUNWoV4dZTh9YjHgheiqVCzKdb7yjf1xsrNb2buDshocs9yqxyZnBS",
  "key11": "3qQgCJxV4JGBpq8DQswUd8UEBSnSbsCSr1RnfL6BjHdhsFbkm8R5dcu68ZpwyqwXWGKJsejoaH6yp52fqPkTygPs",
  "key12": "S14DgYXDmxDQSDVQHNF5zdUZidg3hjv8QFwXwjqw2NQu6xqvpBwNchRUQjiCeJDG2TChiPmWEwfHVrZNLQQskTH",
  "key13": "XoG5J954TRBvJUUPZPtNuHjdX5ga3sAy2oVUrD9eAUB6R5WoFAuraXyVGKUiyex1vKmgtsVLgZi4MuHEBnqKdQR",
  "key14": "5cfnaJ89EmgmRRBVckLBJ2MwAVDy823peKd3F4MoveJBXkCimWPeP9fjzXrAHgr6Kta2WjgebUrrVWF1Znip8zw1",
  "key15": "2Jmb5fBRXaNaKgjg2o8VSkcWNh5ntHTNfujtFsoQ8CGHhRkqRi1UsPmBuRzc3Jas4HAkKKCGTPmFyViX5DaPzstP",
  "key16": "2qYrAKUPoD7hHfgMMeX1YUkmDJxvr7MB89fZX2P9X54LgR3KfS61fE17UHwhucWGReUSLLieDaYrknErtat1yBN7",
  "key17": "2YxbTBjrSXiMT6NBJUFh4EmZmNx79L7rhEVRwnvGWSZtgDLDbAVHPJ5rjE6dZwnwtoarZnJaGXpbkDe8Yb5GYmdv",
  "key18": "66VifAZw57U171JkeSLvhAXwpGhDFNKEFyvqJ2ZfhczDgREHTqQnaiDQHiBtnptsHhwwdhi9BuVHYFuwtcvHWhP9",
  "key19": "53SVPPHwo2Etqb7A8dSnAReKb6q4KRWcoBscqgyj1QcLrzVMHwh4b1aVKRJxKQXRgTZr9AFdPL5NVti3wKzPmfUC",
  "key20": "4GztKBw4YLM6zhj54ByZEQne7mtbNz5KWz6i7hnbCYn87tKKtGKoqZBDnxjfhoG5YAdZeqTLNcmhLjjZereVMU8q",
  "key21": "32DLrxSkZXZBeLsPqugzhbnLJY3wXXbodRpLZ7Epj8anDjJdiRGziDcCLCp55iJCkdP4VtYU6vQ5LfrdSGLCB7pL",
  "key22": "3VyRAomQp2LDPn3pv4kSjb4pBmEU5m195SgEzLyq5sUr5U9cniAkQ4U4cJFq1o7r2WJLP2kGUtr2bUcAvqUWzYbV",
  "key23": "YxUY4n8N7eHSvydZbbQ6Wv6MtgCuvBqGgoNYaXen5WK4cGfCuJ24DhLPdtnM3TNVgZ8d8Q3mU96nzzv1iA4YLtj",
  "key24": "65BQKyLEGhpyD6icqW6yxngfacZv5AuTzesRnB6vegipp68E9J1CtDjUeKCbYRAboAi7TKBkFUvKkm2f6L42jBY",
  "key25": "PBVMAHCMUeJtV2x4ZoBxMEzhduVWYcqvFgSyZhUthdjoBjvtjmdDsUFGgZ7ExR9YccMrRdtKtsaY9rwwE1MHbMN",
  "key26": "2C9rriDQUyKwHcdqMwYRucfhkSMzG2Z1Y2HVUwL1u7H2pbYktsizWebh39g3i7ZCCAu1FY7MbEaDo5VwrUfb8Cfo",
  "key27": "4tD99zPWf8aHNZK5MJmHSV97d5GxFCUn6ud7ttGuzVPbu47Uq1F7FyaN9ms7Mp73nirSkfZ2FL1SZ5U2k1WgciZS",
  "key28": "3cGJkbjLmPnMffxvtW8P8rEi68TNE185cm3ATsKwqLJmK22yTu2GsgHPnHjoCZkfrFZMVhk9SR8cgmTvME6eUV5n",
  "key29": "55tXveW1BTeSApgLYeeEtzY1qALHaMJGtbUrwq698j6yMtitFg6yYrLRUwkTshyTZqT3HcqM1rckaE41iXYgnMQe",
  "key30": "64NTbh2x5FsPNFeXGw9jD6kqiWnTaotUkEJ9Zm5j81XwJ2wZN8N9zV55su8Nfo3K2kcbWciCFac6BNxccEsHgmRH",
  "key31": "3s7LFjW1qNYRf5SoukStMxakHuneuPMf7XxwEJ2u4FUY8MFFbmDB5ovHTBzNkn7nnKDNNQexDYkJTXWfxkdqCsk8",
  "key32": "4nXv9sHydY6unp4osM9crw2x9PGx4oyR7NprLPXUSN1kLgBA7y9ZegRLw8Xn1mVmcF9tXyLZC5fgkS5uYKF4VPnR",
  "key33": "2Dmno5K4JGG9RgExjdXMoMi4SMrv9Eqw4sxGqv3No2F1w1reWTiM3ZSNt1LpefqZLYBTQuQiGq8548xZJHyJ8xDp",
  "key34": "2ujBi7JDLP4bVSz6RTJ3gDrfZYrouq2ayJ4UTSdMqx2zDjgV9whd5Xe9WBZgWMxJ4Fx4sFVPhL5YEDptRPhbtrDz",
  "key35": "xc4ATtH9YNG2JpdY9W2SxFKs2ikUpXoKP56ASQ4xTsFncYK9GDMq5qks25o6U1RhAPuAXfWkc1rTW1WbtcHQMH8",
  "key36": "5vMBvuE5iTBi6emoJ4xComNr86hDEFRbdX35f4EiZLuvq1BAhUQxvqj4acc5gipFMozTUEcyCVXbGhohNahoJSbB",
  "key37": "3joG5j7aG6w81njGcokvgWckiEJefLddiVMZ1zGonPJJEiC1NJAZDtDbuWbVsUxV4SEj7NBjDmhbQAaY3TPAmcfb",
  "key38": "4ZPD4uzfNuQYBxF8ddGC7B14LPLEcWtLQEtuEZB7wALAMS2WWiM84B7j8q8c7a2x41pkFhcTZJe7rWA4xhSqTwmw",
  "key39": "5VWNCsCxaigWjLGAcTX19vDADHvxzCVbNAoCtrp19n7Mp88ApfvuZqHiADKBQgEs3JiCdpTi872pYH6ajUiPd6sB",
  "key40": "3HXgJj7wKuXFGZe66RfEnKffrC2s7zxjGL1bav2fzdkzgPhavKz3dt8sxtDpD8X4ejUDdhdqDhS5SmbfrtB7nzfC",
  "key41": "YxCHhRTtMooAo35DbJKccUKzmCBrMS6vAzpHDU5n4b9nhDAzpWSAveAVcYuFQGqRCZBp7i3c2UxGrCW86ByzZBE",
  "key42": "9AHudJNcPCKkES8wSvfTkgiLhatAfEqjgTT6vTtYARNZNeeZwVHvEYm9jKWhm47PMj4M87uWYXMxAfB8G7nwLXC",
  "key43": "5XRmPu8cjopHMQkB3Apt2zhAdNi49YXSY4i7Qb3uLYyxf6qCA1Zdg1GEZuoPWMaJxnQxUoREzbprs4fAnK62YkGK",
  "key44": "5rFWMM54gw6A5G93sDm7HDKkSvCgBZCgqtbGetfDrVjSTA8hUoPMKPXT4fmxCVL3sjNHxh1ALPL3GdEcTzdq9JM1",
  "key45": "41ex4ihcujwHkFo3Kaw1RRwntuqJRbqxZuhdu5YtL2Waz2ewRar6Rv5RzJS8QSN2SgikJ8qpca5P7AT1mgRHzWqC",
  "key46": "2qYMx8cbrUE6j7MAM9gT1F8xBiFDCoVCEQVHjTo4UaW62a9P2ozyHeP7AukpogKUCiKhswpmRTYYm7goxFQUk5EK",
  "key47": "61DqEvBJ7TJTN8jWgjy4KKvjnjTT2UFSFMuEYT4sUnovkQ48cYp2R9NBN9RHdrZ7Phjr96xwd4ShZ8MkexLJjjpH"
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
