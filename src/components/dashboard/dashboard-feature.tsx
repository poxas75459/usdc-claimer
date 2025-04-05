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
    "5QUDHhvr5LzcPDWRR5mJHhKpx4ucEc22yMJyGm4Gc1SnxeiQdsC9YFRUWr1iKmitec6GpDbwiyADoQg3phc6a2Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ANEfbtFNhf8GyB9ShCcEWipftVXFpaUfnj5Ln5kM2BRTxf5XZBCihHymB6XjtATJCpbn1odtTAXzRSzxGr3TzX1",
  "key1": "2H3N7sEpcvgEKxhmWMzhBVtJzQth61fomsBR5HnQ6RzU2RjVUBTnJFEsWJbvTFUP3i6DvCBJwpBRsPMd2gEczhnj",
  "key2": "4PULEPLjfcvFFjmWeJu2wrnD4Z3cW89QLEqr9stABFBHv51LkkDoPx34nZQVEh39Ehhw4hjqYa9Qemy3Vp1GkpLB",
  "key3": "4b8YuzTKD24EiDguTsmXq5dywcYggwpWzdLu3uYpuTo4pQnCtobYWuQeDCbxyLKVTaqHjz9hhreTxafg1C8UzU1m",
  "key4": "338FF8vSfCHRZcjEb3mvYHJDXLiQ6TJxpwRxddF345vfV2DJ9k3uL9hRCachvr4UJypkKJcRaTuPjZwjDTLYx9xh",
  "key5": "4jco7YvDMQYBNKczZbYa1YeW8mgXaKydF2FUMtWM9vrJQB6153Tq8fqpaKsBuRq2BzZpWE6FVVzbECBcCouvwHCr",
  "key6": "345iPeHd3KApC7t5uJTFEYmqHTP3ZFVH9pFiXcVwQjgDXb7w4JaFxUPLTeZKu5JfxWebNjhyuLMofMCAxX8gkgbv",
  "key7": "3vU4bfvwLQifcL6Us5m1hGKB43AWDQSPQiQnkjSzN2aDo89Dhit2amWLaxHLG4sYnKoNG6bPGtnZGi1XScGREEeo",
  "key8": "38JD25Y3xMywAhnz7wm1tNN2EZZxb2yDYMyMbgZtPozLnjtJpgf2ZWwSqq2CYHRusfyMAtUwxNwCxPCwVbqCMdBn",
  "key9": "2RotnGZ9KXjCLLQfbwY1RG1cFMehjZG6YVNU2ejnX1WUeV3Z49Cjx7PYXXyUzZswh7MrFTia3JNzGJoVodosW7Yi",
  "key10": "2KNjHPCpwHeAMi638FrjEYXfsH2VRs3JWRQJZRgYTW4VZndQrSGcw2W5bAZv7zrSMiYDSh4XyxN9WBhmDsq93ByR",
  "key11": "3BVCG2QbP7YwnPk6sGHKZqDiDYDxaiuXprnQByUCRkadm5GyBH2kK3fuoLm78wW66125yGixP4znQTytfNHahLe6",
  "key12": "3111yWgf4bJrQDQyY8Qy3JMfEAskYzgbj7Gy4JJF4Lsg2SJ679EQ4kv9pzTLPS7yGawFu5E8ejDy188VWq5Z5cFF",
  "key13": "66TtigvQED3N4A771q2JUZy3tKgB7i42cso6xFz1YXbUfdtqcPz32gWFJSGcoASVRntz1aLqWdkQTLgkQvGSZedS",
  "key14": "E5G4TmCwJa7H1iMBt8v4HdCCs88tKUFFfV9MSgwGhowWLbxnyBTNuC5PpJnYJKwjN67BX5dKkc8phue4xABCdGc",
  "key15": "7qv3S8WHhVkyYB5ituUywRmcGwQVc85ft36SynMjmkv1rzcGAFpSKPuSKC9rwc6Jkq1yvMXBVsavY4VkaHwRB6J",
  "key16": "5DsxF445kzr5zsE3GnAqJWcHxuTw1uuoGb2kDHd27r2HCsU3doDxMoEizoKVtdpBhnTy8A4FK7xM9vWi7Nd4q7Ap",
  "key17": "5juYVj4huhu3WEP84T6qHPZiCu5dkngdcvxikmTYGzQR2m4rcwbAhKahnJuUpLdvteE7ZHgu5JM67UJgjKQhLhTF",
  "key18": "5aoEC2WSnyJymgsGvCiKtBeQmXzPWUiXwH2TzfURTGvb9jM92nyiPrDYYpqaE8Lay4by9vs7sPLfHaMe1C7Wzzz",
  "key19": "4bRmAmyFqtQULHkw3VKwxJpTWfGVh418oF6s1sVTKy5Qmrwy25cpDaZ1UTqRiYLBF185Ym5WNXgNwpAPXnqr27mR",
  "key20": "4pqPRgTUHGy2P4TmiQAnFQexwaTwAAiFWPXsALyJ93Ytjd5QuwgVXHfPep3MbXDf8hUAQkPWbQLbW8vhdK68JHaN",
  "key21": "4tjSsXej8uN8QwW3Voo4HyudsBixSopueSBWMqcwE2aUFSSh6Kurfn7YeWTwmR5pM2T8wYmiHXUGepRnEjiNLKAf",
  "key22": "3GGb68Ze9SoXd15iakeTeBPY1SK4fjmymLLsDAXZ65Y8cyspzC9FR45R8i9Q36BEn3znkFLkkgiy7NYiVdqStkjZ",
  "key23": "5mzzSUdJUaRiKoLoEKrPefFJucaB56PkS8yLTqNuGd1f4EgTkMMxnztyaZmUVMpPUvNK3eokDbX1dRFd6pgpMzAi",
  "key24": "3iqYXa5y2gV3xe5q1hB955xft23q2uSoeTsSAZ6GrXGmYnm3UBEUxR2Ks9Da891YAs32SfadnmKJBacwS8rM81tU",
  "key25": "2hkWV9eRuFgJ4UUzSJvtTzsJW6FHoDVysq3M5g4bVtM8FJ1BHfgpGC9qa6JybJFhqJR9ZGLEQrCJXFXAm31C6h7t",
  "key26": "nhLNkzhEBbXowbJH8Q3x7txq35kn583dtVta6CJbgMXKcknx2B2V4qhKKgSqMiKQ5xtYdk7Yi9PewxCdFFYuLFu",
  "key27": "3LU5miiRn9Ym46qyHmom3Ak6YMBJY1s3X2KZ8C7PNuX5o5h426zHs2o9faPoUX4MtUwaMGjJhTeVnNC3DV2Tmv3u",
  "key28": "4Zb8VUngjPMStbn3A1kZ67LPdMA1X8XWgSeHVD5KgCYNmsp2FrPztGWji7MjyTAYjBPBgYUvQbyGDqnFnEoCRxGH"
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
