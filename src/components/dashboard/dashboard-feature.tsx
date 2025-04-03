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
    "2YJp3h39yTR21WotCwi1MUH8zBUPQ9dfLpf7MYbwW4Ty9qjYyjdbHx5hfdUWkfv35CznHRmnLpBtoQ7n3rqMWX6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v29k9QgF3v26EVwrGRBZuVDCfgzZHv3pk1PWJwBRxn5MbayyDSEJVwKkzsftwtVfkh9nmMdNekRWKi1kD9Cxd4g",
  "key1": "5jord1gqSz2MpqgtzMaWohjuztrBcMvLoDC8giYWmfhw9TXaZTq9GrqnjAp1MHfad7vgmhoyQqxLsFPcY8gE9ERs",
  "key2": "bChJfeKtc4a3KhiQmGHrzTdN732abFykuNsQEZsR2wc5xdMHtqm2GfTCR3YLChVnnsFg7f8KdVw89eRmELKXqaQ",
  "key3": "1AAxFcB4PGQEYPyfXf58QWH1SyhKkgszaqj73iS7nodZc5y9ssazu482mbQfWbyTWBcfTSWAnu3jkL64SYDdptV",
  "key4": "4gW2RKWTPYLByXD1ZLMCyVzwshsNxTbHgq5f3NikAPAC6cSSgRcA8ZcVyBUoHLUaW4x9tVnvSZNzmwRjxd4o5iX4",
  "key5": "kaH3E3WkqWKsJFnamtJTTScUAA7EFAgtQp6FNWcgaonNJbh1jaMJxbumGsSopLYE9f67VfLd4XPWr12Af48kwUs",
  "key6": "3btLADs4DGUqmJU5wTCxThTgRhgT3iUN8HMxgbfxa77Bta3p3jJ5A9gM8znUSguBpHthU5N1sVkrNpEaiwnefkEc",
  "key7": "qzkCsAVkjwhdUBSfYhDRU4ehGahK2ar1G9ZRbiz5t67hicryytSXqkFgvBtMDvCeWQtQLMKJN3ErV6JuzmvaCTL",
  "key8": "5X6Phw9fRXwxyTB7dnBjtZh7uN9ctey2voRXRRkMRfLwLWdySH1ZkpweJK7k2LzafWMBwaJV54LyUzuTJoXCi4JC",
  "key9": "5vUrR1fuYwZxPtnrqFMHBYJ4hGxjH46EfEVLBNmdKt6ozpDKDkTzXkC6TndHXSevjstXvsczdQ35q1rRB1ZuF9C2",
  "key10": "5A1qQhLgXAC3LqEWCjTXkk49sq1GpHB7TfmEK5C4NxyWmgSzDjSPVBTPuMU1pk186otooLTmQhVCnRccL9h3W8eD",
  "key11": "26rEViTGs76pumQvEZ8nmiWhRVs1oTSmD5mmm7qq65Wnqc6EL7PYuD7cPanPozqedMvJLyk1KCjto1s4SNT8Lqyc",
  "key12": "4HozmLyKFigMNywqaPWwM5J6Big3o5WuEXdTrmGkjaHk288o1W4wUqRGkVPiYbybwoBeSHU1WRbD9LjBHEJsHa9X",
  "key13": "DHuKG2MimdHheqRQ1yyDaBuUdYdFA4o1ieJvSaEREt1Xt8wUjQZ51nbh43diNBxamoiaxKiim4LuBMqY8MtrfGC",
  "key14": "2XSTYqPq5WybeV2BkpuKx3vn2X182HisbA2Xv8bAvWhjosczarU4dGpbthA3dLkE18t9FUfDi2kvHpmXpEVguUX5",
  "key15": "2w8wWt262nKcZkXyvUNynC4xMTqxZHDpP4sYMo4dzbAf4EDuC1xTDyfywUpduVnctNHci4y7xuqU1ivweyu6YYgy",
  "key16": "3KoQH7uxMLDvh93WswK36nYzVtm7sjwNNLtBZ76qgAS6h46qJxP9P8uFWa2ZiPxsK8c6r8tYvzqvGU1wJ3QfjUNT",
  "key17": "43tnC7kr9WervzQ1ZcmtEaJ8QWh89cUVxJcDFdKFMw94n3u7gsmNVQtfkT9KZ4e7fpoBkZ2b68hxKSsJ5W7YM4ad",
  "key18": "3zHDN4ESmAbdpZHNMF8cFgjDAzJTU8deqfYAfFv6UjGeNE7JjyqtaMFxdW8B6hdVwewb9JrDhZLUPYhYvVGL255r",
  "key19": "3xhPuhGMzk3WjRs9Sgo3XiahQcFVwQuf1aAyHc4EiWkSQ7uwTpG3YzUzY61ejV6QAX5HdR5BqWQ8JUhr1BahYe9P",
  "key20": "3vAop7R6g2uJusNKSMWS5GfBLFvcKwgHLT17Za8vkuwFwtTB23tCAX2ukp6x1n2iaLiHv52mJR2Cua3EkhXdHkNh",
  "key21": "2ufBAYHghGJBnMJiz2SiL2xTHG3ozAukp1GwY1JtbQE2pCfbeDDdWncJnAWQho63ifXRYdFLymrY6tGr5UKL8T89",
  "key22": "5URB1rir8nu7pasE85Gd9iRrd4suCZWCCGFiDPuMWZebYqBbrqNLxjxgiSZR4AVDUyLVY3tk3CEMtY6fdewQeo54",
  "key23": "4227yo4MbKkC2EKX2CMooA2rFGQ77oY2zBBMWuokMqMaMLv186Zsc955W7WrBE9eoT88j4jWE33zX3AjKpJ9AZPG",
  "key24": "4Mt4aKjZWANursrPfpFPvVuXLMd6ha3jz7DhvnjzTtULr3fg71yHyf6pJrCb9Vz7qCGZ1eLbh7u9qJzM4hYuyKYy"
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
