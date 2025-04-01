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
    "5SBDSp58WpibXuRiP9RYJ2xsqMGuvhU3mxqUnrE8JKqr98Mxj7SQU6LB525dGvt26p6XKDzuVju9ZQ1GBk12xB7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKkcixRizb7KrGTaeTWBvKKfmJ8BJQA3hNjvDGJjVZmTbBJUX3xjSA271LamQpYbfXj7x7T5aCBQYrY7MKwbYK7",
  "key1": "3HpzRMYKBE11zGwaAEQxwyoqKfALEZjhiTnbZePZhFMLhkdTibUR7HVoZvN1E3XJtfFcD4u8ZCVKhEHaVU8Q9mJf",
  "key2": "2hBKwQVXFJnrRrBMnbWX2nwy8qubavS3j9xREkz83yj1gn1jmtKFrnWqfyQBqRpGWHKQPBhauQSHi6CK86akht3n",
  "key3": "4R2K5p4H9oQWj9TMkRwRQKTe83vjhteYfgXSbwqkAA4TLDTDAZmhfag17CX94T9rfT7PzYX3QgDNbqZ5htXx5jun",
  "key4": "3H2S6qREKGJd7Ys6eJyh41PzS97asQruqeYukLAq1YZNgaFtkquhSNRqA8uq4iSggwq52FZksodwksSS2nDVbW4X",
  "key5": "4cqKYoxGQkcKmnC2PPzbGVkF1QYvpMwuJmK8fKMnQ9y4DiZiHPXtWYp6kcd79o9ZbPvs5i7B97r4BMfAS3k51t6V",
  "key6": "35EGiaUM9YJYJt1j2SZr5SN5ra3EM4NsbiXGeBHT1mEFBEQ6tViHe3KchD3Jd6MGjoi9GsgxcWCu4CtVJ77u4Afb",
  "key7": "4ohJWZpEncd7QUzota6m2MsbgtwzBofaJBWat55TrnNg9MBBapSMv6LTeRjKixnhpr5U6WCwfVP1CKhiybKHeuLQ",
  "key8": "4zbPnnA4MogE3V3iV9BWcvTjPoDm9yAw6WGWiE6UCT3o7AbiEfzCk1pZiQhcSxV3iVnxtnmTGrb6d7yK2VvLxrFn",
  "key9": "2PsiYeGEdizBE2JCw4En7ifVQLG5yUBqC7DpbUJk8AoBMEGzHF48WCatrpuDDbMwix8Fzfe4X29Pe8kQRRKsiqZW",
  "key10": "DwHqBUgzeidn9PRFBtwXVm2YdEi1Doeu8WLWX9eGei42jXkf916ARWgxP7qG9RqpcMtpyGxrL6VuDV6mwX1iE6q",
  "key11": "5iPzJUpPDRpsDDsNx7MQnAYCiWKAZRuzDsVXWFcznxDcWaeiBC73jBMrsbZSgNdq4TD7w622PnHbzuSnTZh1TRTy",
  "key12": "44BYhy16ackXpy12YDpbafD22VxJzHHnPNZJrmMKw81SoZppa7nhEdkNdWyypKCYJf9Zqrnew7DjgqamFvPNRUoZ",
  "key13": "P8gPYcoZ3iFrzJs6PqZur7KYdm3rmAN1gLL1H88NZPkGU4knPK37kMn6cd8Yqy9xA6vKzgW2EiQ4BYNyJXqbkaA",
  "key14": "4wbE5HTBi2rddUinnBupGw5XPcFLeMVnb5k8aFLKz8MbUKJRgnaVXa1KFfWhY7VFjfjww5VeNWaaLTd8dpDyBa9B",
  "key15": "3ZKtbcEE6BDWcP3hUJ3jgrbVUqmknCBtSAkoEZRYtBF7ajPszPhcmLfsjmJK9LeGhvP5MyY83iRNgYWMnp7dh4Gm",
  "key16": "4G5H1ee1UZsgA6L9XGoqCZti5erPdyScztdXLZAhGNz45pB6QgDudCnq7rnQw8oxVmHD9EqkTdVsHgTzeM3Bb9im",
  "key17": "223XFzrHnkrKvLxPuhsRUnKJJkHHzPjYRgBkATvKCyTWJGbY8p2c4QRWpb1GYvxG24Y4ZKFngdhuadJ2rng7HASX",
  "key18": "4jVFocFVutTLYAwQrVJiyYWRucEyZVVyfWVDm4H5PhhoHZyeCjidb1ECBsEae8YXK4iwyR9HUZ3ZKF5vrBWLcTVu",
  "key19": "2U2naEConithHX2SV4W4ShwsPQ7rYZnRCjxsP2GhDBDS16CzZSpSPDdF1gxrAVELsnATFLkRZiJ8CkX55zgEuNjK",
  "key20": "2Rg3XPDYAxYL2Qov5SPBbqs7AGbFKarGh6CYyJw3JoKEbm6ryXU7viN1seamTQ3XgERtwVYpaGxs7xUS399barm7",
  "key21": "2WuHnWvs5jqMTYrJiVQrMGtyZo6hHCnijZ18qeB7yykFAxXR1zzWo47MTud8GQtSvZ3zwB2iGi2gNYuCnCHyW4pw",
  "key22": "5VmfEd6yrQNtcJouDbV497QatDDHyGnbwtZ3BbHWJgmryH3W6nwAh9Yvzjm3H5Qkz139BUptPSopQ3TJ1oMhqZeU",
  "key23": "3Gk7Lxn8zHunLcfaYPjgqShaC4g27wzPKu32K8Fk6TAS46KFtomUKadV3mZwzEhMmw3kz2qstp6SqSezPvuhnSPj",
  "key24": "63DBAPybnVHy25rHKVAiqPFUehziTidk1He94d5BzVZ2wgfAdAxTkA1MB2TLVdiCS15N2BdLWGUar6C6Ziuv2DqF",
  "key25": "3gAzSBjLjPZvP2T6SDNXCuHeGbKXySW97uHUw2BHMkwrWKbok8kqh1tGYnGaYNGzgDrq9fi4t3dt6qBsJpE44PBE",
  "key26": "5LMGo1M2da8i7Kb8zedk3FrcbcverGwxAz3uu9Wiwm2KKU6B3ATiZeqeufewiyfpoC4vJmN5HaKhCN3giGh3dPXF",
  "key27": "4R4dQ9EyKrzgZjMiDG3TqEHMXuxWYzRpaVPoNTt1D4KbWkGwfuoAztR6XQRPBXMMyXpaVVAow7TKZSh6vsHwHDvK",
  "key28": "mBEcZYgKp9JVKjww545L8L7GXCWovQSZjc6oCETKcxmh224d2dBHFMsBRbFG5ysMaSaXYrDjg937xYapJj4AwGi",
  "key29": "6FNU4s8EzQ7G9j7rQxvJxRwKP4oRMyo6HzRqXNjEFyFPbhCvZiFmnb7WNXbMjjbYWj9fpCuKgr76u31sqW319PG",
  "key30": "dLs62Q3bqV5VenubgcTGGKoNYY8syFeHwnVyCcqZZaAjjEGE9EJuFRk6MX4gjdE787sUgv3vWki2tWSZH49nzrc"
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
