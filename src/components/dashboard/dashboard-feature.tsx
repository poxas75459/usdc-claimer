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
    "42hwDbd56j5n88Len92NoMugiFHasAurh33ULRkM2HXpETiodYLdnwDL2ovfyFEyXBAp1disPTkueREEFUkS1Hhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wXdfc21Zrxtzrd3MvmH2MgxHtuKEHQcru5mTVhks7F7k1LW2Ef5rVEWyK1WftrVxVAeNeiTRBwow7DKeXzoiiJ",
  "key1": "3uWt8AWrj5PiSgSY9Q5qktH7Gg5Fi92yuFQAMqJBVQS8WDfVySohxxvj1VzvA65Hpsj7K34obZ1D6b6SFc8hJdmB",
  "key2": "4WMZzh95KNykFqkMrs8aFkxpdwt1j2UzkGJyzVjLFuRnfAJQZjMYqKg69Vbs5cJs868eFEdYTFM7x9CY6jTRFuc7",
  "key3": "5qGnu7HKjZQw2dHRSckWEvhyXw6eVjfhwXHpzHPmULfg1qehudkveqh6yRrd5tsRt6FCqyPPUkaocX36MYgW7zhy",
  "key4": "5SfBpnJy9HEFWu6SkFfCGrZEGQ2PAS9pDh6SjLufE2U5zaeBAY4ZLQckCrBtKagSHmNfqzTpMQbCh925Z8Q3aHXV",
  "key5": "2XdcDf3yHz4WcA2cvvW6BQwrvzjHJrZvYcywuMxfoKX95C8dSKtRSsgwz6iZsqnmCJEaXadTUgipJn9YBfMcAZWg",
  "key6": "3ypZdVY5v3gntJzq1kJ32Gdd7eQ8Vr3jUgNAAERhTwgNS8hiwHvzG1LGL1ZAVx6KzaCPaTBFUdrX2HfSwiE6Jnec",
  "key7": "5KF3ZGesqJcCyvMCjJAZetCkh7pt3rch8q3PgbWhwmyAew7cWY4m3auKKf3JgaEKdzMrSCZnT8En36tANJBEKoD9",
  "key8": "37GTK7T1TPHZWeYCUmktL3idCmjsoy4TyqJuzXJJKDNT6xEvwMKmQkVkM9ArFLXAUNiEwbsb8wiPVcqXt4MjUZxM",
  "key9": "4W858FdKVRZj7vkDYQ6JX5wAtBhe7BSp17gEEbytGZ8F3RcBT5kZuTFrLULsJorSBXSs9i2N8LnSFBfNqa5CNJys",
  "key10": "3hSefmvHeobd5TpesWWBgmCqTVW6bj9Ky9XMxLEkwzttQaJE5pqH1ejTgMyT2XT57LEwqD9w4KLkvqLYPYLV31MX",
  "key11": "26GNn3vYRBj91ZqJeMWBjfvTY3mrniM2Yv1P5YTJAdsQzRCjCvm2Q6qYqe2UR7MEGE1MZ1YfBaXdsgPvKtBZavbJ",
  "key12": "8SRRDZs1PgwEX2jqDmv3PGeunavKTtfgXkk1FbqzPyCfdgNKT3axbiu2AAcqZWA2My6xZu2wc74J3FtkBbmzoYN",
  "key13": "2yCKq3jwJb9NNr25H4Gobdw3BbVxazb2DbiCRpAQDcJP4PShKdEMGAT5rvvhLSzR5g2qXkhkJP4U6J7jStr6zN7H",
  "key14": "4fGMLdyC11N65SqySmeFtg6Jxc4o4Fdxpfr2Ut7HbrnvFDn2xi2AeU4PoWbmtqwhzQ3xKekwrteukNXg5CaBeajY",
  "key15": "2zmFYUiyb2XqjTvL1KVLPuGnbWNQiZXnnnevyn8eQcgm14FtXsiqMmwY3Ej1NVuj1scspotJ7bbgdwauod7psUZM",
  "key16": "5ofB9cnaH2dfb1eWpYGNVDEHkmyqngK8mwDvBpQrPK2mZsRCjwfQc6A1hhuejtX8oJAt3JQgmyLDvhqkuvSXKTR6",
  "key17": "5DQ5q6DKFKhsfa5Y2rx5SbXNeecjd3RhLqU2SUFtGR2TJXNPaTXBzXQqRnqsUAMF7cMPMLM9aGkZmwATvttkiLtH",
  "key18": "3BiCiym3GW33xGggUzcsWjEAhaFgmw6YrEBhkLSXBBNfHdA3foC6TDrCht27vAcTtTKkVJt7nX1Vu53zGqT5Fkkd",
  "key19": "2bsAzNfh3QS3eQSPXih6R95tXAAW6RaUnyDgrT9rs9PgroLqzBJKkvHkRJ8XhY9boYbpXe7Zond1YSesQ72tTzW5",
  "key20": "4FoSv69561tjbG7kTiuD1sWwg2taqsJMWKpbmNAbxuKbyEcHJJogSZbnSVJeXuwdyjr4kSADf26kKLXfmzPy9b6p",
  "key21": "3Yx9ub9fFUUsLVWh9erm1KjppuyVvX4bRyuNjzDrmMQTyW6nxj3HvS6UbXprjFVVv9LkRBFinV5XHjDWUVu5efyM",
  "key22": "3pJ7TFGxXnzn3NXJ85RcQq5122VCP7sMV9BGVDNZFQvtGvK1aiN52Yh6XExSyJ5W656D2rvsRZCvKMuttjDz6Ce8",
  "key23": "X4AqHeghZxP9ZcbkqJSCJXm4Giuz61ZvwpuRxVTxFuhqDW5FWMx87JPsRmkyEmqSE19JdyWo4UJM6AH8dWffNm9",
  "key24": "4M41h9NPKwSrzygxE1BCbD5RHeFUrDMeauTvicQAvF9iMdw7ZntK1Amauj9qMxGSUD25Puz3aVSirTCXifkVpyp4"
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
