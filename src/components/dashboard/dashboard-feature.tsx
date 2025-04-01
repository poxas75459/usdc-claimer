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
    "2KohtNKSpP82FpYUUFaC5rFqVV72ob3bYxDp4FSifivvAGAbWfkMMYAmFNu3ywWgiXycAbPqJKZpYu9aZux3PT1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrHNSPx2WKU9MgBMdoCnW7w33MwgneU1uVDRzXNTX84cVBkVpPCmUvMSrgVtHR91kMwNEgADn6UcuL1bqeoB4bp",
  "key1": "iea34yMB7pj1AMjLkfJBgLnSCGRz5kNhqbquuLgzvMKCKGqc365riZRgivgquRVaYFsEFu1kjz683r9ifimW5TP",
  "key2": "ddvNcTq9DDNNpmNxx7YYX1k6rJ1tpsHw2fQQuyaM2z3NJJKQNCm3EWcMBj1uU4uZCgrUocR2nM9ymiebxnxnGu1",
  "key3": "4coGxAyi2PSiAAyXjF8J7ZMnMZGrMbsJkrVVVDMwUvg2WcdDRhcy7SrvHuuY8quCdA6XUPLjCThiQK8ytaxwpj7t",
  "key4": "4JcQqoWJQbT1dkC4Dv9CnGRXFYjHi9braEpWFe2fgofihiaX6BtDVSYHmEAPdqQdTw5srLqaZQzgSYSnEkXN8CaY",
  "key5": "Tvt8CLYCq6ziESgE2HmcJ1jDJRr4MPwQM8oKMMTddxNUJSCxJkTY5tYN7MNcKzVmc3387MpmYARpNz82uUv9mqy",
  "key6": "58FvByGRqMwYBGP1akgfviVySRwSrjWT58isyGNbGWX8YtFWZnn8F7Afb66r2hcnXCezY93kU1VS4P26toyZpA75",
  "key7": "21d9eLTTDurqSKMqDALfJ3zcWZ46Mrn856Py779tBLcWy2b587ruPtpM9H9Q6F51SHcMHnCuFnRUVr1MsMm4QeG9",
  "key8": "41zhaemJFzk7MNRyD1ERYX4vgXeTT1HymfvB1gMm9H6cMd7bVbWtpvagMaNzZaQsfas8MLre6dmZYVigczay5Qjp",
  "key9": "3ojTYwWTQxP3dLMYGBtfnNbqcpc1QArvo8sjUGTxvNzwgdhPMXNbRXkAmGAEnHk7bS2EhCCXPHwUEQJBKDJYAbNw",
  "key10": "3ZqZZutCnty1wn6W8EmJYhoAyYrqbJfLzVuGNhK18jt32dUVeUTv17AHXufZcLdupWtBTke8it7c8tyZkA7SrbQf",
  "key11": "H5GiokyxUCHD5mquj4KQJetfKnoFqryKEPvwfVh3GTU8KX5xRxobw8i8Uonu7MeuiwckqhBUG7anR9tcw7kE7iK",
  "key12": "GfbVsjyrR7Cg2DYov7KA6P2reJT5399DBcRFXc6UvPYzzVLjrRTcFyF4rP4kJXWXWtKbALAXj4gtDkUHotsSyiC",
  "key13": "4skMoDr4rXvR6YQZprsi5yRNtiQhKugEJDj6X7n53t4LTf7S6PHidtNc6ASY9h2nzWBR2KDwr8EAezrREydJ8s63",
  "key14": "2TAZrnq3CZbNE5apP6UdAjDB9PEtL3AqhBY6HEPqzxgDzTJseihvAZmmZZFxNL46FwgsWJWoKzTNuJtgKypvmB9p",
  "key15": "3ADoEcxwwZ47s4mgmnmccoez5cRDJucsuwZFjotp6bdMHt7povJhupq3jaDUU4KfCb74bptQemqyoBWdru1es5Ku",
  "key16": "4NZ4PNa3UkuJewys7Uf9HbK1fwBndFF65ALqDeuNGErnXz9YaY5UgKYVv9kYumkRSJNZR6KJ6a47wzLbTSr44vZw",
  "key17": "hKuSPcUZoUPpiku2WdzbpAf5ZjHQhwMZMorYy5MLPEtLGNPKQjpAxrDgZTuNwWXz6v3oReHqT2o7aUMhAmih13P",
  "key18": "2MLuUQuY9EcAk8GYnMM4N9zo9VQhSLxor32iroFUEEGph2cDn6ECXebMMSiHaWDdxegDQXEksqRiyTeWaFF3KqTU",
  "key19": "27BxeD7oQaB2P1TQUzjY66qsXN5PwJTEeRYFkTpG3jXyQvrShGPx164MJLQj8HPxZ9xx2jhbNKvrJUVdesNuX3rL",
  "key20": "ExDMrwxsKhorSeW4vNERpnr4sY21HbCQA2etH9uJciMpvAtZyxFx1q9d6Ee6bF8C1yqiUSKb4Mi4RvWCQE3pUYG",
  "key21": "5u9wnJhZ9EL1aCqeZraEKtgNd3RGgwP7Wvx2CPZp9Ypv5u2kkH36Xh3XSoEtQMtGXtGJG4uAJr7VJohiNFF9ivvK",
  "key22": "3WRSLYo5U9SKi5doiijXfJErXnxNoFFdC8WsFeGiRCFKts3NthQqWutPKhckXsTkJmWPLqrXRYgzJGcGmvmPvHix",
  "key23": "5ojHwDW1dvNb3ncqrCRfB4ovmhsCGyt41GRWoh9ey8kSQcCyeYatkPN5gqfE3snDFc422ifCJnrAnfbNBDZ48Mnc",
  "key24": "4yQE1AwDTcz9jPrbhRHFoYJYg1xbdwCNfu39ZSsjaoLN88AhepbEUds24TEwajn6WjEjcLpDytuSPH3SX4acHjWx",
  "key25": "4eVU668s4FsgzwUaqdfvSD8SsS2MQEzbnVru1PMejp6Dnj1aHjySAc3QyzVNd3ByoLod52TzHYa3Z1tyLhTEzJj3"
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
