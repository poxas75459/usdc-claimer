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
    "2ugyiYhcmmqTjbrwtfVs7Tgkk1srFftGyYtqKCZtDBfugQ3shXAydrcp9bDPtDwfS6zPSJSzKZbN9omYWxNbgrMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7vwEm6iD9g6LiTWHzSrcVJyaRLrG9H2ATZYErFCqDDZES1S2eqKuzWKamaWCfT2BRh2FeyHwWn3T5GmF5yLY13",
  "key1": "335qkayF7DbaKrcCAucYq2XeyDgNdJPgNpMjce7r47KAKZVxJ81TnFM6uVpLTpp13zX4Pp4J54LUtAtaNkMiy33i",
  "key2": "66EouLTa564sPpByrMLJQKgaTVyhifBkd4bNnmcja13CpZPVVLZ3ZiPHAhuosVnwAwfwiPvMXVpikEgygAgHcXSA",
  "key3": "U3KqKqdkEKgEgmAVVyZVD8so4191LYZ6iK1KimgeBxhSovWWBmttHsNnzQq88U47s8Hm9aoBZumokv42BMkbbYw",
  "key4": "2RMkf85b4ACiWiNfyC8CXskAQrPJukc7nWT1WrWDFABNTfJm7F6Yp7iM3dM2enW8V84iJcUmtaoyqR2JLwpoiFtY",
  "key5": "4w2pL6sXLJY775F7yi9FegoqTCtHr4bRFR31jcPYzVHgPvtMuhkrGXF6LvE4WHvJvp1bpzSTkVJyNqF8UHC83k62",
  "key6": "54QAppT3qETaCayhsxvFKY12SkcW1pN4Rt4dRvAktypquSiKELP3EBPK6rUewPo3TCLT2yW6FYsNG7pGT97bPgxc",
  "key7": "AHuvJvgXYR3wcji2AChTDBPXCJ7rWXZvCQsCeNHAg9m8GoeXwzKVkfwzWVqPe23xkTqr4XhKfB3tWQwGQ2p8Jah",
  "key8": "2eyBf3wpioFK2arfj7XgwgutaAf5hTLX7HnnfuFSPA8v5diRYgpUqC1kpGDUEb4hbevZKc9Z6HNtnbDfxKD6cPjU",
  "key9": "3BCdtFVxxNy6hJqHrqjiy4XqTUyc3hYwrCKVY1nEhiNTkZ2B37gK3saTiGKd7CTwyKU9AYaS1Hv72vmGmzZtWWqY",
  "key10": "4DF7yYWKKaxnDrbgcr1hZ3d9jKFwr5fPYtCc1JktK3oSCp2KiDTcU4Apdsf8ygY2yJA1ZmTfhw5sn9z7AU5LYsti",
  "key11": "3FdsCrSZiZPDVLnZjj2FpnzXdkF7dPViNKt9pKggxGwgwmJFTs6YSmJVHTmZZZkgRZE75cVKoe7hNvrJgi7AgA9D",
  "key12": "2rHWY5yoUBCWwZEBwerATLSShv4Wze6QS7qHYapkR4jj9MJ2YFkspqkQ7yRTnN5YyzGMjcGdFMobNZRe2yGn99c7",
  "key13": "51w76H5HvEKgpcy3vCiVwmMvdyzvhjqxpWF6RfJEaQsjeXodMRtAS1dBcQgcJ7Z1QNjdQSf2qD8LtNG24Vy2K4Fa",
  "key14": "shuPveTGQhmXvjiPFPUKmXSZ64cZyPJxSoy38XZSVCpf5KdK2WrCms4VPZmEjy4xB5unU4L25gJdKUBcebix5jx",
  "key15": "3rascrb6rSvQ8UXcmBYjeXJkAhwe9h38yApnPnUeS56WHr3F7Z3BE5o82qL2oX61G93TJgJcLbceUXab1NNenPdV",
  "key16": "2e1M6fWNLoEn9GfCFHKEJ8aKYrnPk4UY9goJDECmfKxFzfkfCo8XeoPeEc2gPY7sQMHDcRWTqqQqZZCoStaCayFk",
  "key17": "5jDZZKzmwG4duLHufQYF2xQjX2nc4dh5mtzTxryApPTpjh9WMWYtgtVpoFaAcofbZd9sGJnxYkgnDBXhU9gPAGJ6",
  "key18": "VYCJGekXvgpBbhdL9tJmYKJcBs1ABHbbXVMavkwFfSb5qQyUtUYYzbKJ3egcqPtYDLsFS99hpv3AVGqhWQqPiQj",
  "key19": "3WcWSPmaTzrtbw6ioFBgiNkrbU9cnTSpNrbofAAZxybBS2JxomHaZEHrWh6n9J5hNv3jNBenr6MCtDFw9Yn8dXNq",
  "key20": "8isqyLCJTU2QpHh3yRS9WGkEVZNo4jQRc9tHnvw2xGFNiWAemiYQV8ovDNzPvQfT3r6sbkHWRSarzvUfPFdeJp4",
  "key21": "3Mm9ucxG7kPwTQ9R5jYQaQYdgbVb5Yy6UZ7hHvrFK2j2kaSqpcbhibZfbeXTVDcAhSH2Cp1kPB5XgUWxXZ6qkD9H",
  "key22": "5tyPpTaV7bKqvDh19KPAKsfmT1gmFdb64ynAX2z2297MKuWJwCyMKKDKH7zhhF6Benkgz8gUX35g9XKpc3o5Pfcc",
  "key23": "5DEZtHfivpaDFQ6cJar9dzJZxHrUTzhNArDcz1yanCKyukJFgf7oiDgwFxWxNbsprvhTGPTFfdg8DSe4QxpeSGjE",
  "key24": "48BTqnBsGKwVXjro3Eyo5xAp4CvHRVeRWSvupBgSGxKzBS7ZDg6uEFGnzz2HbiZm2GTAVVhQsJCgmZt4kpFtb2Am",
  "key25": "2yeKy7wqrvvYYa3cG5PW8hu8FhoXUUpEjF6Ahfkr86ZJvXh3ZrvH76w38U4RrrjBh5zrUt2QETPjdZ8AKMFyWNXt",
  "key26": "5rzk5Kf8CVNiSWWS1XkgWZwfDFwCzU9JzqDDSrwuxk1kG2iAfFZhez1BJ29h1a5zUCLhXXUzDZ479YCp567ei9yX",
  "key27": "5FpmK21RHShNHStx838ykCaEbZP9UnyXgQtffxNpaMVQ1N1rPsgbBrxpbRXy7rJBeymi8iGKfTrXFB6EEFpxVy2M",
  "key28": "4ZHBY2qjcBBa3iyuRBwMtYbFB3MHxWHfuCZ4xZV572kxruQzLcWuZ85weCmxrWJzsbyDaRRjZPhhenANRGSzzLgy",
  "key29": "XW7wxBUCV9p8tWwJHx3u8pseUGutc7GPRjpiJ4hMtNUDHqKqJxQLCXyge6f9MTfisjJ2ianAySW1eK25cBScDMQ",
  "key30": "5a9ei76bsjFF2wJ8HYeWypxDiwV7GAVpuMzrGcCVRJpWZpH3SLnwLb9QnakYaghUuNVvxfZorMshR5Gf1VrQb4Ud",
  "key31": "TMpz6Z1qmVaEYt6NcCWe3yBy8aGmQ2QbYfYjz7s9YWAj4xdXn6YDFDrtJCMvn1ktj8rWBgbauafYh2CKsuXBJHz"
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
