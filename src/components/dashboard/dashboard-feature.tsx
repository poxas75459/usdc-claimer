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
    "gigarLV36UUaGm4VTYiJgMnDcxZ2wEEsR8v2H99U7B2o5nhUPkNn7G61UbPJeQzx3CKaaFzw7yDRUbrh3evkZvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8p4VBTTs2Dx7naJvdL33453Si6g2qDEwWcZEjfeZDE28rcthQ1mvYj9KWpUJ1oC6Q1HbZsXLUoPSFwQZJYKouP",
  "key1": "3rVWRGd9Vidxkgy8AiqKTKduWGZZbqhqb6Hj1r386z6cdX9pkmRSX1ZCDXwrhx3oSqcvNKNKS3H5ZZ254kKKUTEs",
  "key2": "vtU3SqEaxfMwKESUAThNi5FEqQbsupZXhMBfcm1k8Ewk6rhJA2MQqAwrKnSnifCDhUzHkYBt3BDru5nKPeCaHYY",
  "key3": "2JthApBFvUegQkx2sVuAvSiZSamgSzX29sCqM2he9MfCZaJcyd9ZZ6szzEQED7z7ii2LRbYhtz456ns6UMQy7Wkc",
  "key4": "sB8JKb5r91XYQKFojhdYuxZprEyzTRy7NDGmhs2DJCxpFMMj468DrJNqBcBqo77dNxC86sbojmPbspELwpAEkPj",
  "key5": "Ma6Lv6gqEjZQYUkVuRDQXku9ETARodq8Xpk3HnfxHrLsfqP8vam15sVZL1YFktvhPwDxKDFAeV2fs2sVP1p7wSg",
  "key6": "4kuGWgMq5v1uWyWL8yEb7JnuTGPpFFSWuGu6rSRtKfVigodNskQE12TSeb4SfvPsmC8Y3ceEU61WrjqJMVQkJm55",
  "key7": "2PJaHftobborjnizmUunmdZtMzuzVXvyGzH9GRTspH5JkHfD6aWwXawTv4uhr8B4hRjAJ9vV9jpZQtWujvgVmmbK",
  "key8": "5LN7rMAEzBZdxjCz2ctrdKWTRhsGQyb7d4tptB6xnrh73wj8Zvs2bw6A6QsEMT97G4MyVBYYMzWYnnp2c2QyPGse",
  "key9": "5qhiYA7sR1DbnYBgUmftuFQx7dnc2voE1KAdikf8JbA4Qqb9cTrqXqYGHwuwSZAezhmwivQCxUkMoVnyzFnmRhv6",
  "key10": "47wKtCVk5wz4nEgS737RknYQFhs6QxsDuMvN4xUJNGbYfTuzMESdtqoMzgJLCGJkkg1J8YUVGgi4ztEWXobr8rjF",
  "key11": "3X8i33YLtuebQob3665pHDA8WfbfHSorZz1SBk9yvcZBr3CK4aSpH85wj69HzYe9K1j91tBc1h72539AuwyezyXe",
  "key12": "4uszRXn6Qb6jw2oP8K7KGvXb9J57ZaPdr8HdLUr1uzzHoKs9c8UL6hq4jgNURnZY4MgcEpnbRjStgArsvBSe3eQB",
  "key13": "3sZpdRaCeAvUyR4Fy3u2xoGyYuGzKTmihJg9rk3DaQLCQXbhg4Y9kbmNABurwtTX4s9iZwTf1QGyjQPysUCJ99Fp",
  "key14": "47UUmNRhUamMbzJZZbhbEzJbGttfz158wYZpAVgCuiVrpmv2cWrNu4Bqk2DPKNQAT7j9BAaX7bBSCqytvBhXcVeg",
  "key15": "BDkjxaQSt68etBcJjANeaw8EZ5w5H9LnnRiEg4kdd3mwLnE7g9BMqnnHEtAdbjXrkhpQk6Azh6E3wUS22qsqkWg",
  "key16": "5zVW4NTqzYYAyDupgaKqsa6GBM3hoc263apfUgu6zmeFhT1EJc3kXF4M4vGstijob8AHJNRnw57LjHCDpkhsJ6D",
  "key17": "3HLBd2CTHmLMAysMPYrdmMsFwmafrM33JRkWxNK87oCpwp3r3czGiJhDNeQe2NackJJbBDJoh8YsmQNTYqLwmpyi",
  "key18": "5ywHX1RYGTWgtNqqX31wh52oUiWsU72tCAZnKFrFKQ2hP8BsuQu6hUXLq3D1ikNeX4ggNkVwJXbTNXR7EW2KgdvM",
  "key19": "3hNkU192ugj4PpDhBsH7SFfG3QDt8N8RNje3DTRVhxrPTMRE2B1NeR1a6X1ySRKsFsuuwzKNC5Bt35S4v1umwEXd",
  "key20": "2ku2He4kWyPY5SD7MUtyFBCQvqJ4evYkpS4FA5VQLFDifXPKv4Awgjvyr8V7nQ2k7TWuguzynJdEWQFjjvwSLskD",
  "key21": "GXHXj2ew3wwfz97JFMJBgyAVxexvcAGGhY1eDzeisCuBfcuHuADxpbMqgoqbDnoDN3mH8rvvYE8XYvdz1XRZrWy",
  "key22": "3J4WNPpDGm67NN2bu2sSqwQ8sNhbA5CYaXMxzKgfGCuK4HpZk9WyL3p78qE5tCqgZyqXkkxCUZ8YFCYB8m13JVu2",
  "key23": "24CRXdnyPEEzWH7cefpc4kx32yMtxEHLFpvLBYiRFjfTo7jJRwKttAgB5eNAKkzyTatzKoLUCqt2DUYt2XbdkCiZ",
  "key24": "54DvrhMK8LvaEqrvsUuQdG8CL4sJQWaqtqDwv48TkZpF3dy46bYcxZLuFxBecFqeiW1SvhePXsjusGTy5YojkpAz",
  "key25": "5WXHj5zsNRyE6HHW9GD9EjZu7YG9JM5WYrbZ5PztsKh5PRZKDJLAnXw5s2dCYrXBh7UgPVi8z3HzKPywsmYiEgVg",
  "key26": "2QAqR2pFZAKpF3dRMCSihncgEUseZL9CCWcTo9xaFaXgD5jVGbz2m9H6AQzA7s2C7rVTxvhfTWxgHae6FHXFPvxL",
  "key27": "39bXKoc7Lx2GeWCyoHzDafkCKHN5DEggjp8sTPCK4mppHuRiVTetToiE7xaBmW6E86MAgQcLzBbtPvL2E9thTWL5"
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
