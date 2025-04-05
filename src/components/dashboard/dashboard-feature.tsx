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
    "5zjWnsAVUX8nokdXZJYQVREET7SB4GTYezDBFqEcVUSvabHamwckA3MeNMLig6xKJxoBcCdXUg7Uj12jePxUwYQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMuYBySH6XtBCUPHtFoMLgxVVoL4QRjF9bQBgc7VkF7mrPuEizqN73VRkBY9kM3Ld11DtRHx6BQ2e4BHm1Qv6tw",
  "key1": "3yQgqSMRmVH727r1EfzyFPb1GyMmX8JZibMaKFnn7teQMXz7SAFT2kVLthq444H1EZKDRN1k5etBFBBNeB462pXY",
  "key2": "5cCMZrbLS4gzJNaux24pqgTyE3X1vDjvUpLHURtWk5dLYLCW8ETmek7CGKaDDy3USdxoqiBC7w7JnPdkJxp5BQgN",
  "key3": "1t9EatT1Lyoj5D2ADKNSkRMeBJaDjSAnzV9eEcsJvjTreK5qmY4vep9pSjqutDjEZBPGjQxgvgUJSGXwybWxFCK",
  "key4": "31fT5zRgAgt8LSVUVFBUR2pMtfiuGjnkJwfzqEi95FMuAyAnd2XTxhXLXcSet6zozpmku9TkgBWDEqcnAkbWMkmX",
  "key5": "5c78d78bKuULhxcZz2SMoT3AwQWviRQsW1r3Bks6fXRGHmnwR91ZswmNBxo1RbmVKGjRf3SFmc7pDBdFfC5C8cnA",
  "key6": "28kxjyVV2LEPV2YoHFWnrPH45B84biBwuqq2243P7ao1VwUwFsLHVPKMeidB3K9HPiUDW1LenRtxB9mhiR1hRjuz",
  "key7": "5KhMQdqfy6B9MaMBeDpk9h3bJQk5TRgZ9JFm6eQ5JobE44VRrv2iPwAB2nrqDhnFpbLR17EGf15YdjtvhGstagoh",
  "key8": "4VaFasg3dxzhr8x1ZkrMUFupdkQ8g7fbyFcy4iXaVXTf852UbP7hBCvFjHJQxsHdZ4nuvTaTdtUibAaS3VcuzfdC",
  "key9": "5Mx5Yq1rm3bbjepT5tc153KS34e46ZXMrUvWWYetz3Zd4gn8edq5LKtqYGYpq6tRrWWYYyj1bvv27mSiSGvHhbZK",
  "key10": "crBQsFgmguA6XwiikgddxVVFj4NvmS5JVVxc7EyJWZdx8kAE8wcRZThoBsy9ajuCbT2yBGkdRvEYZE92sZnrfbt",
  "key11": "2uiZSiaftkvzT4E77MurMLR9ZnDeW97Tq2oerFKNfztjEwKcMtZxjHu4nS1UzAxXzKguVXiZm8dqp9GcvXFMQFB4",
  "key12": "HR5V5TpVh9B7FF5yK7Umxt7PRXSBdjBq3uMdyoYegU3jmStp8AeZATxvVrCRyx3VXWkKasZ7HWREwP5RCbpjws1",
  "key13": "49cpd796YjqxceaKXLgGX58xXADTT82h4uzcGuWeVZT13E2Gbo6SLZHmDRUVPGyv1HwgyiawUwKtE3qEwaiUPFfm",
  "key14": "3T8dUQctoWR6CoGWC5fKMSdeYU78hGAq1LJ5Ac3MdEqxNAYJWDU6txB4AMiNzBbv8VVMX2yVwokdnUzgRaVwyoWT",
  "key15": "4ux3Bfv75bdm3LajV9fpC5h7bkmyS8TF1ECu1n18reTR8TtET2K83n3c9obqKFiZ3E7ErKp23mkt3iSntQSGjvCw",
  "key16": "2G5QseaGtAje9N6QVhjn1qNNRMYgXko5eTecAbjJBM3K3uQkHvkkVnts8eV4TTzfZ5jtBGB4wyyuLqas3hyxtBdw",
  "key17": "5DiH2uuHxHWtgt74ienNWS5FT3ELWqjHvLDjK1dhRLmoqkVZtGux8ii2wGii4TEGwSdWYWveddgxZSF488NcG7wt",
  "key18": "37U4bP3oAz1KeZ5jdBSame9YANxWFq3cr1udCyZKfnYFDkjeTqaQzQrcMymJBTdZd5CNBHfDVDdP6Dg9u3dzHDnB",
  "key19": "5eUJtS7qdNDFfLosXFsuvy5tM3ZmcziJTDPyqVKmp11mvmyg7mDa8YaKqCofxF37Uo7FQaAtCnbkkScJh9K9aKcd",
  "key20": "jC9r7hYhjJzewtamt81ytnYjArYwRoVrLFZiHfSDSbMD7PYWaZYgX5tL7XhcWgbRS8nF6mMiJ4Rmu6T4ZgzoHCJ",
  "key21": "53M2KarVqMDoy5TBmkWnAENwXReDLxBhqi2ztyneo5n5XhAjjiqVmSY5rb2Neg7fAM68gjgaovnzJhmytQhb8Brw",
  "key22": "hfJontGJJrvpHRscWSCLyCgaypJkAfptTBLMSrvXVX2pWa4e3kHngLZY1knhhfmHWgyewpMYnqAPMXhr8BBD9oH",
  "key23": "2zNDHTuB7ZCqWJURhSstThjhgtvTMPEcaBDsBES53nfik4eQ4uEsLcAKUjw5KnwgypUmPY7muLCfvbBsqxGun6F7",
  "key24": "5t7Pu2uTDrV4CM6sEtay2ZKscWDjcf1HK6ts3cbdAGtmBAikm4qokJgmprY6jfqD6PxXXLi4ns1y2KxDZQbx9Brn"
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
