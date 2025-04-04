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
    "4jLihyAK6rC94p4z2QAFzxVYe8JKJitSQKeJwBHG1RXD7LmqzUSN7KP9YCgD1eMFaZs3RMUmUs6bNenunG9idDVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XkU1nfc4qrBkFW7Hbe8AF6G4iwmR6AXjAA9Sy6JUPz5NWLfQaXhBzEAgsZCgv6xUCGQPbpa2weu2FZLYhEEun7",
  "key1": "5dYj7WowUzuyCGebpEStCUfmfcjBPJUt7dVt3nTW84UMcsok5YULo3dx9V93jX5ua5iipBGaaS2jhG4i4JdVAUBt",
  "key2": "4ZL2rHC2kGkxenUNxsgfwFdHKaKndvigESWRM4KZESUa5CyL8jPkYHWeA9zfCBDhLwpUPcnLt8kaTGDHGeMwXSux",
  "key3": "dgQhqEJ1RZzYN22ndNqCPa48D2f98djtRmkmrAnUAj73c1NjTB56LqhqBVjNHhHcZXBMpZqxu1FjFaUApWwLmUb",
  "key4": "21GpfKmX3fK4kFcgPXj3RqBDu4TN3qRhqqLHbzt11GFqVjw8zKk8eQKJpJN4vn1qrnhtpvNYp2vKXftKPLoeF21C",
  "key5": "3pgWpGT2ZphvyhzurYZWvXnxm77Coz3jbhffd6YdYKSRtm4rrBw2uWCTnJD693RWwVuDVFrirU5qgPdtYMTirxyp",
  "key6": "3x92j3JadGLGcw4DGiuMx6nw9C2VLVkSQS2Ps2YJxX7FYkAfPAGv7jJRDGeYwxTuKRoL1McQw8cBGnVivSUJ7uJ7",
  "key7": "4ap9FFx5TwTMxE11WGhMgBuscuv9WoGxFhVrnMEjd2E79z3Db4DnpsgFw4hdKWiBScAvULgrtMSNmbmHksxYunxj",
  "key8": "HY787VQpgFGmDDwb6MVG82d6KwApWbqTg2pnkBJHzYUvkT79ydix9ANm5DpGXUFwYJdaTVQq4f2ndAGsxer7Huy",
  "key9": "c5fdikMv184kXhkgR5e2XH7CF7xDAYRP9pyo1zba95jRpVrtK8KsRgiBrAAxotNwjLJbWshYKGzwKy1figVda4Y",
  "key10": "22xy3UsrXuyLetfi3ZDUnd9YfFDACXEMx6VzLrSTEx16owEhbvFebYjgWajprvtBeKqD7D8ESNRJ379ggQ7oRPcQ",
  "key11": "2v7FJ1cSztDJHkTuGye7yzBF4ZBbWD5QFzYrpczS8ysHoDGBhz27artsAfhpoaZrpK1jnZ7Rbjj6PMoKF1AA36iz",
  "key12": "2FV3nbenDN65LpTqx3iaMzARBL9xoqwbzaUEetJqNCsxRyKYo72Winvyv2cFCDHgo4b7wZsDNi5rDXwBdBqhQVAx",
  "key13": "UsU2PQ8bdmBPaBBys2cfXA7zQPYzWqVkPBxqByQpNqz8ft7xveD9aN47vJV17wft5N9RXPUtsvEsJw3SA3aN4Co",
  "key14": "A3hdG1EiL1P6n6pyb86z9S4iL3pPYoBPsoqo8b4rqLXweNeg2mYAquKE54PJv1Zw4rcHDhadbDPjZpYWNFKdksV",
  "key15": "383gj6Fa7A3uy7nnmeRTpTDsuEYJA3EAXFZbaoYr4465dZpZ8w4j37Fm9qiA29ejq9nqM9saAJCNpZve1DNLB4JA",
  "key16": "494FjrTDAXrbLvPz4mggGdNvrHkDXG2wbbaUbF1c8phViT7NZkfaCgXCiQ5GVqaY6ADg7SXVbMxvFsMfGV8zLas6",
  "key17": "5NfxRFX9UGsiAoyre1DChYRYAZ4Hz7RTcih5qGAy4xCCLTs47khFpbQafMy9GDqQcUvAZMmYrouiVB1vaTnYN3e8",
  "key18": "5ED7SdASPk8TaTiGPGQDhqm7B3FEug46duVaFUKi8ELt3pT22pQMbbhZwR6EG1LworSA5fWviVZ6qFDkjYyCJmyg",
  "key19": "3Zw5UTJHuB9MkfJ3EEV8kiRwb9VZECP1cQC1yJn4TMQF7saahUKu1EkXrvxBN9H9Pud4WBYnECYg9GLEebgq66Yq",
  "key20": "3WRG1HmXma1SDfnMoZnx7RcwA1geYRC1dZi1L1bXboWpq3bcvoWx5CWS3KzX9tggm3GmcRm1uczZwCaeAqKuqKpV",
  "key21": "5F66Ho6szdZi5LLd9MEDs3vQKXutE4x7cbHm1oTxsK5Q1DatTXTyEFtBMtTir4aU2EarckPsXoXJfJnZpKwAVDzN",
  "key22": "5RW4T9WP9CMoJQPntrLzqa1XXc2fcSwKNhWRMtXfXSczNWgRoYSNQ7epvJJpFMJybkonYgLntFTjNskiXfFABwE3",
  "key23": "4hNKZAx1VjvZeH1vfwBLe4iN62VpY5dX8bqYn2QhfMeoURUBzdR98vRR2ikbgRMucDk1Rjd5hjFnn7KrJU6ZFfPQ",
  "key24": "3bgFH2PUv2D2L797kr1V9kmciuXvx5Q6bvTKg6XF7NoQQHnkDp9s8YY5JLhA14BUGQdTicxUX5judXWb5XHY4fA4",
  "key25": "2VFnxTYB5zkoqniZu9BAJYvdXNAT3hNmLmPHpsNVXUoh73cMsJJadWFMfEBRyRS1Ed8SHQBXuwpxZa5tkvYz1Kvz",
  "key26": "oXy1tkZSRWbE7VX7bNswpwhPCkv4ZtmZrakgEvDbwS8GAEbqCmyEChbVnRR3mVH7xa766r8bFd8PGrjRxdD9qC4",
  "key27": "2AoLR6B74UGEBqkX1h4d5mZfRR1roZ1ueXi7r83Vt2f3LmEoWg5yq9cNh9EuyhzTDm3yo9wRNUP8Vre1M62aFty3",
  "key28": "4i4rbPopkg2VZCNXJ1WGPzN7vUCfNf9CZfsJPraG4Pd59RQxnCH2av5WECrJT9opPoqogzX3wWUF6avNfAsXsRhF",
  "key29": "56qPE2o5mXwBT9r4i4axBhSgkNSWAw4WBSeeSTKQaXh6vfW551RiUB32jTJVan6qLJHc7FTCf5ksdhnDpY8p5Nmk",
  "key30": "LdisDzgp8Gi9A1yRpk3abZHPueC5A5RrEGz97CkyvRRbGdfaJffg52REkRFburZMiHUpXCizJUpt7vxKPSJUfFe",
  "key31": "4QhnLrQLzSkXumgD21cKJ2R236Q2RhfpHNxak76nwAGWFoNKBNW6KAUju7SbF9Gx9b9Adc76WHQFogHXGj6cREVi",
  "key32": "FmtunwukKU58AqxEq7XWZomwQTW9chdJYf3Es2jhs4icTwL6HpCNp6VZmT4Z7pprb9VR4TjRAMTvUnCq1Rz2UMx",
  "key33": "3umx3HeA1vikyoCxTJTUQxnSQZZhxbXQcFhKoyPcTNodkfDM6KhV85TNTW5DcoGYpxLHPQjDPM4PNpKH4xGmd9SC",
  "key34": "4rJc4rrH6FEU3G39FJ8FWpf6zh7HxRBvyrnqHo56uxNZYyC9gujLdtkT5YSnePQHJnGApkpmkxrR8vDj5exSDACV",
  "key35": "g7v3c2asLB9LtAL55BRHXZ5b3nqGtEvnkdPTnrxNksKYsSzRPo4uvjVpxta3eWG4WwmzS7ZEFo5MF3JYFELkiLj",
  "key36": "214HKR4eCPHbHakFSzMtMqUjYyE2qiTM28pn2VscsbdtS6ViMen1DiKhysSzibHv7AuCUkLPRthKH3iTtLe1VmRb"
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
