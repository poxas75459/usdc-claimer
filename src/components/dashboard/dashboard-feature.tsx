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
    "5fasenCEKrEZS9WmC7yKNFmNPDiMqUC5zgbsDoZ3rJV3WzYuNSqbCfg1CK3aBDU4JDTHegcGwpa2Nns323rkY1ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nv7TjimTfFYAbg34DAg48q6kcr45ECFmQAE3MSdX1kSehJXHGcwMunR21SXHMjpSwNbQaVTP8hVeVGwvHuX9BT3",
  "key1": "yUdV5JhP6wJbuuYMyVorSfjygFttrq9Fqw2yPVfbjK46x7ye3DDq17hPmZF9GFaKZo9fFtMedamWEwAnMECTsFK",
  "key2": "34gpViwhAfvWzEh4KSydxN3jHaitgz4xNiU3nZYgsJM33Myu8Anoek88JUguTBY7qeCqtn5h1nkunV519uYEBcjG",
  "key3": "Lz4KKuiHoMa4DWXwXndiobXrMMBfTpxnrcnwghNdDQM435MQTyRjK4LSZP521H6HwXCQUVE2yp3QZrYLY3F4x3r",
  "key4": "22C4tCVgw3xa8NU6R1QT7W1RfC1QGmhKksZnSxeY1j5QiEJfgV3gD4YgDSyr55sSQpKhA9RUBXPXNVvgRGbQGgAu",
  "key5": "2JZzn3C2Gz2b7yRoJmZP4BUmEEJXrAHdTqYdokuJWpfdArwwtHQoDDSFew1UFvrFwCYPn7HCmBbJPqSQGE5L8yhj",
  "key6": "3hibKoduLs21y7fAZJB6iz5i12pEXsaUMtuNpKpNDESmGX9oAqEKXXKD5Ha7jk5iKPPPE8MyM9RvBLPDLvYVujjm",
  "key7": "2HaSGa1tN9E1w1wsBu9iBi52woD9zzUqpdZxzdiapxubfi1XGeaSFefpaWfUwp6dC6M46u9UFq7yi8jZrSQFD7Dc",
  "key8": "5DytGrmFpucUUSFPhmjYfQ7phaYCaPfkWGkWuwfRv8kdZEDMDKaaHJcP4ABBuoPDNC5i9yhzZX3d5xSUJyRMbrCw",
  "key9": "4pKJguZsEo9Q531FHpSLxtarBvUXti53smUaBAMYpQVQ3f1JaMrQ89kyAaV8vDbDRQi9LBrAmLW6F5cD75i3SxF1",
  "key10": "2RoUhJHQunp39nNvbCSWkEQv9MDqThtJHHjcGNMs87A2jBHfQgndSyrwkjzKUDZtSepjvGrP5sPNPbip6Ka3DotF",
  "key11": "5zG6fgpyMqM4dtEvYgynMMg4Ai59pmqf1NHhpw7kyv14dcvT6mKzuLAZvBmDxe2M4eeh6VB767MfroavQ4JR2tVT",
  "key12": "5qgTZs9Rw6e9xvzTVdw9P2VBjwWRNBPaDnMzrW74sAMM8aK4Rphzf93AcXQDdPVPwJpiNdd3ZBkcC6k5gCzSogpE",
  "key13": "ENzoktcGHErwAJXH4opJsRWKk4iRdRZKD5imzJFXBhT2EttUtYTokczAPfdCCjKad2inWYvtsaKBiBhXCJV59d2",
  "key14": "D8DPi8X7DymNSpQVzn93vyWFM21yDG9AjGZtGC5D2ojYxqrg5FQTf28B3HuMwc8dbh6S6d7VZckXiMxMZy1dEXc",
  "key15": "2rWKGV2dQbdokLPaPoPg9v5EUG8sLRr37NyDknoQb9rKnm7dfk3BeATztBFcCANu165Aw9gV5AFRXhrnkQpZEC7a",
  "key16": "4599W4Yp5QQxbMngfBYwyoUDUjqPH1iS9iciuWY25CX1tjT3rKqLB9t7TxziDC6h3s5q5uCB3LMFh8YuHNgtqLKP",
  "key17": "3E5pmHK3LvgFwHzEVpw9rKG1sfjmQhfFpQR5dCmH6vEjq6QwBz7qZdwa9sZEAnDVfjrtqymt5RfBhWouCfDTTAET",
  "key18": "4U5Rs2JBqfNy6YefT5CjqDhFhhusayuCAwaca2AXyba2P8sT4ciJqTnQN7MPCq43d3BciBfge2dQajpV4yRjn19J",
  "key19": "2Pg6JiJj59fwcqQ794pch6c9csL6vf28Si8pKcqubAPU3Jdg1FtW27pBMejf6S2xa1MqQD9U46TQ6s2tkRuQrZX",
  "key20": "2GhtBckN7cmExhSSzeCeJ9q4r6WRwEchq8KSukd4mXHJYedwK5m31ebvpvc1YPVc3C9HSNpnqQ4aQgpt6jrwz4BU",
  "key21": "3z9sEDer6Q1BJ8NjGcMTkcszXKrVuTLPRfXvvFrCwtik84SaWscLw2HdkDVtrBQq3aA4UTYgu6uZoHm7YGFqW3Ev",
  "key22": "5qzcrmMrfDm4bxEFhonBreDoiEojsE8WVrZwU4dn6dAuziQZXr4qF3j4V9mjfFJDQj4PKDEAaaoyQb8DzH15TfTc",
  "key23": "NZnYNJi65LZNTzL5nzjDSX6yNRHc2dFDPjG1bhc4C7PmKutVs9k66rx9aLzsckhcswjjshdaSqcWXiU3pt3NAhM",
  "key24": "5sb1HyH1cWeSWYzDMPcfP51vgVJVHPGztkzLppHisSGT6fkisVTKrJgymfW4ME7gzmc11ksKWxWt16EQvWTBrHAB"
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
