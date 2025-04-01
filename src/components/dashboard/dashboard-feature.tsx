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
    "dxJjZBTd4t4qFm824mQrGNxdULb3BTF9EZsxw7FTkVbSLaEQHfmWDnrXZ4giCm6XnXLhDxmu2m6aJDpMBJjnPsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKGBuUZgbMXqaxcXJpVEi6rL6vhFwNEe6tCiRSRPHTZFEdgKvYmTbkeG818xRFfr82t7PSeonKRH3kxrro4DRSL",
  "key1": "4zZJMccQZLgmvBhRy3sX74fWFUVfqReoHozjH8dH5RUhiYnovdjMu8ene1kFzdPYSKdVaM9ZsVWFzwavcYacaGvH",
  "key2": "ZAC3jTuMvueF78FJ2M8TyYHZAgr5b3jQ1cSFG3E8t1KicwYFceHmNCC5QKTynYTW3hC591oZgmfJgCaxD2mopGU",
  "key3": "2A9pSjQCXrduVWxU5Fas8Rv12omBJZThrMu1vNa9orVwyhSdEPjLLvjC15fx3KU2CvaRxXtemNVMQKMeW11QT5kh",
  "key4": "XprTT8V196T4KzLesKZYqyFYfTLww1BSfyxX7J3bzRYhy9yF4u41eb6aDKzmL4aMyAUbe94HNuHAiaSzef6Xz5x",
  "key5": "5puGCsAWJstfo7cYCdXFECpTfve79zvhDpqnnncWwEpTNKvkjS9pLS2BmBF1Kk9jjELakqFpLHLDBy6z6Q7bbVTL",
  "key6": "2NwCzwG5RVt7RKFLhfcuJkZktAxy9s5V6DTNJBLdcF48dFMNCmMyYjDAw8aMCUGvtV5yYGLeVyVhPsZyku63N5qq",
  "key7": "2VRJorvPRuYiFKp2ASVS875JaBs31g4rkst8qkgTDmbDEwdAf3eeRqB2Yi5RCZezPFbJkEfW1JU2FXG9P4mM9BNH",
  "key8": "d87PjZhSf1DjyvM4gpJ4jiyNrF83KgxsfksoPN33PeKgv28d6NCcZFM9sSEMmFYUMdzUrgC1XbP9RGxam9pJc9G",
  "key9": "4t3HHCKFWrPeDph9UJFP2ADmk4Yxir9RZnParDDpKyDwXTBCLSgsk7EZ5KBjrENUrBVnHCje7xuWNQRSDzKdiZmZ",
  "key10": "26zihWTPEiHKKLHoWkePPhPkEcRTc357uVUJdVB3YfhMC1xjJWN4iaR6c5DpX2XEtY2wqrHMF7iMoCdzWtbRQU62",
  "key11": "4qTvLK7zH7WpYbkpXTwqgm2P1QKfYaWFeMmu1Mp77MBgoEyDgTNbbfYnK2w9Mo6fpbtemAiWJHq9bjMmuZSVMMNV",
  "key12": "GSVKjihAJgXyDPSkD9v5YEffXnZAtzJiERhm8Ra2bF1kHCpNVnw1BC1yYTDxGrRwFhrnJUJR3dgr7yjBvLWr7Ls",
  "key13": "4bNyscVTjQbdC3i5gv9ZHmTWF18rj8MiMwCe4TxYKrwBvCVFqz5y4EPjojEV4MadjTUts9ZxH2sQ2VQFbdvb6VWY",
  "key14": "4DioHeuC1F23mogEhYuReEzQt9rVFU6iJquextu1QWgR8iBQqh2pQD33P97ZsunmVzhVKipka8m8CX74W46MWwBh",
  "key15": "yCwdb1sJiNywU6MBUoU6oZQi8oP4uYuC2onuPDMv7cSeu7f7rELNBF7YcFyZ36KP5p3Tq3VHPJ4bv8S9HhC4vBu",
  "key16": "3hTj3PfB99dPWgwYMZswmxQNDSJo1SbJQUWR7c8nM7uF8QWrYvz8x6bwDNziWJrQvBHT2ABE2hknnBKUu7yeooXX",
  "key17": "5yu9cHk1dwM8PYp6tg71dCayJWT4V3PhUfa5UeXhzrV6Yk7uxsZNxB13AjsVAvSLoGV9MNLN8vXixhWcGFPZt98x",
  "key18": "2QLbJZxWz5nncjShacfM56dg5kQ46por25p2UghsvVC4YmgG5Px3KPnfj97K4RKHBWnBG67ZArLUZZjkGkXdYued",
  "key19": "RExgBG5T56617ZQiaUk9cKW7szRYKzYMnKDz3pxLPqpecC5HKyGTQM4C1fBVtF8uTognijpTvAPQWwop8s8HCbP",
  "key20": "5g1iiBPneQyaJ33efhvZMm8QgsiuBnjKgbjXR1Y1J4rh53F5RCUk8AEGcHBS2yt19XFMW3uGCNQFbUkdwAvc7dXF",
  "key21": "4JGXbpXkDAjTLGxU9ytitkKRXVBvCDSsnWMyuW16W2dJEfM2DSZQrpPVBEcS9mrNUBb9Qv2QpRYDqCN4Smgav9a9",
  "key22": "2Tbe9ChdPqbiucJfb32D5TwYKYjS9EvVvH9dWyVnxq5ji1t9zHn78F2grC91yEkXpdWKXjiqCUrdbGsRqAyymGJg",
  "key23": "2o5ceMenw1cRj5muYy9Rfh8PyDgY3tM5skpxZRdgiv3Eu7vebhEUJJz3UPk3HRKUdym4HSJA85wSV4SHG4WkzUhL",
  "key24": "5zHvBtfq4ZzD8SknA31QZ1EWYE5XKoKxZMBJgVDBqNm3PqdidTJdfHErfWb9LZoAteNmmsPmLn9GcRFGob1pcWbd"
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
