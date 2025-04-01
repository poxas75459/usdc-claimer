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
    "2brHURmWtUHqxUDKxoB3aBW5ohBnNewWjDA6akq2mkG1amEJKdXzJ6rucD1Uy2M3nrSSFWmmvzuxLRHLGXr5tE6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iK4it1MRpUwsR7Mx24HMGhyjUPSPsb4zcY4shNKsetVrgajgLpeXLjfQBuCDeeKEotkZLGo25RoYdAhLnpgZBa8",
  "key1": "4AmUJEftXuJKSwf6EhNzBaLGgPXDMfhqYjwfXuw2EfccpzKMPjPhTyAaCwPWjuwzgEW3Ga7kg7q6Zr1zpLWBYQsP",
  "key2": "3j4ogoXGJh9nfMeEmcdfwnEfRc5T8xHQQcVx9EpdrCiUGdnJWVVqCiDzfgGqLDMtfJtS5qH6QLjXuzmPG16j8f7H",
  "key3": "PWZSxJpUGtv8Bacim5e2n7c1UT1zk4HcVRYobts5hbpc5URyskcP6Q7TEvacVLtyVpzm9QnKHiy9HoU4TbXi4cU",
  "key4": "3ZbrDkAwWRXpo3HgwQVo38K7kPn2RTbs8ZaV8vpjaCGH8YmMq73KK7Unw3nhEUq1cfo6sRZtVsuQXpCLSNbLrC2j",
  "key5": "24zZUtoiVR4kf3HeWFcrL3kwdfLM3RrRdDZqrVmVQckZqh5M23ZEx5xbXjzBAZZc3oq1tBJ4xXKzch7qVUXsoGCE",
  "key6": "3Fq4RPZwqj4XxgoxwkTev2ngfZQbZ8EVvXuwNjs2ZdQWURQ1dWvpGrsZwy3UBQSTfQCsdyzjEWL9ASn4oYbAsnad",
  "key7": "4xEtJ3KkDwn9FyT8cFvnTBLPFNSx1F4GbyHDHokmnVAdhY8ypY5dWBVkb6zsn6nuHWZmWdiwhEz89T2RGLNZzUhG",
  "key8": "2KHmNBsHPzNHWjqyq3PtYz5tMh5xX2hiBL9jCCHSX5jQCnGJwytjDvub9ajUFxJetpHsoLtvcAfTJ6yKpD8MY9yi",
  "key9": "4TjTUpJuHaAdREGqwZKmVFZBVbgrsJecvov7EULJFj6PVAjFKdxhAnyPMU5NHyahNoXRpYtoja4PTorvMurwxJgd",
  "key10": "4a8hGhEQbndkhyEKsuDgfgWnM1zwiG8jHfJRqM27kDno2nqvhZJAshsGBuon2vqFBzVkeAQ4DdiQJKpLxpGafXXA",
  "key11": "3kGaxHacQShNWRMXEjDwM1QcKhhyJW6yhGPQQtmnhiRL2BcbYY9HyzKBbkj6rTfDJjGddYH2b5Q2PdWAx9FsYihS",
  "key12": "2UAq4HkcQxZXm3rWdyRGCNTa9uxgzUT8HgGERMoBhAsWsZAZjTKEDeFrG2Eirwn46cRYM21iiZJA3535trNxCZYy",
  "key13": "5wtcEmYpqvXvYezERbxGiwdKEwG12oMM85G5iqD78tnVgie9zph8hpKNxW4MPmJGpGGtWq7cLkBm9N5WnhAFR4TD",
  "key14": "4jFmXGYAFjgbS9j4KeT3y3yUVVkqa2e8nLweKGL2Xf2ifkyXJpaQnxyMechPAjBnCJoNeRkRoTkPBLBdzuLHLkK2",
  "key15": "22YVrjqiTiKMbNwYLKLrsqvrbqHHVwa43MS2G1Y37vjYCfErPxW9S6ph4GXWgDixwqPNte5R5qgsif9H5A6kBu1R",
  "key16": "61YT87U5CvjWuRM138kibhBUVR6r9DLVtiD6DkSFkbuYQRNEtvvB4qHWR4LJcb1CyzdqFBGk18V7695rSTymQWUd",
  "key17": "GA5X9L6eoBo5UwMS4Gb4fYQKr4ETjHnKs4yigS7FDFv9xCvFQLjW168b53CfWKsuCys7CY8gJi82bzNn41qeW4m",
  "key18": "mawjPxz9DSSC9p3d3NH1TEJrt3ic3JSS3iHqvgndHaBTJ3DmLHjXcxw2inVmLN9q9HvxNqm2ieQhPQ8sRCteKNh",
  "key19": "4yhqeAvfuzUQ1cRynjW1NKg7HCeFiCiy5ncsqt8BWyQHuvuWZvhU8aBJCkckjE3oLegVXK3G4n2MJHF79RztEYH7",
  "key20": "2CYzJLwNVN3o86JjU9h4wqgQZYggWa6htWrRKvHoZRRvxbVZ8YNP4BUkg4oGDbNseDM2iKbehnyUz6BAv1sjgaks",
  "key21": "21CxT8t2dtrJdENZg8wXMe9J4YHuw6rc5K1Lzm5xsmzTz6uz64LBtMahKYHadi7SYQpvGCvftxesmnE7EPvwKUVX",
  "key22": "5bA4Nd6p8SQaPNwpYKkrj52ag1rGt8eoZxuzwTvY7u11rfQuAJieSmKg1fmH8Ck6dH4PkfcPG6ojEVKCRK1qYo1",
  "key23": "3Hx8jnJcepeVE4XcVu4LDrrsDB6pMWBKA1TNB56BdLu4QsmRfAU44rFJ6UfpEvMKN5k9r5EKHYon83bjsW8Tdrcj",
  "key24": "4VZpq4FV7XxcNA1XKADG9W7keSvniBqhZhsojaMshhn9YF6efFp3pV5JvdxQC2QGFJUreMgAGsvvAVTbfwCxo2Nx"
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
