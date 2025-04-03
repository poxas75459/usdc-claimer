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
    "5vLZGLP5Xa8E2CK6YAezDA6qYLMSkD2PSNwELyxErcqZc75frBgwQvs6TJKWNvStSNfsvy7bnehAjQZ4mq8SgK6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMEU1SGuG5DCANcewkPLD5r7zLCh9vVVP7Zpf5rjfFqrLuxKTxnDinGMh2mBztULDEgZaj1hCZ96E7TFEk46zME",
  "key1": "4L9aJCa9d76h952tBeLezDrvbQPTTEa9uLpS7iRFRnKZv7Jmsie5dtdD5iLWSbdDLwAAH7gMrmfMXsPCkmrxzVZb",
  "key2": "6G6hffsW16r3VNa52jUTS3v2soGRfkCPp2YWiXvBwQubmK94f33pvn3bRe2xFE15BKuxXbCcDK1B9GwWYTegtcX",
  "key3": "5y9q5aLjdy7jjWowEFTAw3maKCmoWxo2STTEE2s8sdYs19k1ejcyGthbyNwmk7PscVBFzLv4SizK96q5PFuggRHy",
  "key4": "5M1xGCoCQmtM9G5h2JVCYrR7PWkU1yfSMjuFqghvkjfPqKZMSve1fP6spwLSPKEuabNkcDzght4Pqrmy6yh8ND5q",
  "key5": "4qm2nV2yvoq74drK3UqVaZjNeS6BDgrtof6YecArEM5sGYv98JdCSSVCYBC348mo32frL5yrNkmxqEdAtgs4Ackt",
  "key6": "4GqgEYMc6kaVtumAcaDeNoPa2uMBEytP8okMyDuBY8r9cRpzPbtaHZ6ydaAYyPLwGkFP2KJp9dyWxSHeaV8XkgAg",
  "key7": "5Cnqeeiik2mt5yiBmmaNPyAZ5Gk2muMraQWVVrN7o3XwaGkqC5TLMmGcuqwziDDdm8o8NRzeHtW6H5DX6XqHkrgG",
  "key8": "2JB4Xio8j9xjdAD5FrzxhsZn7ERy97S2niTkxhspf9GBWM7mAqXB9dMqS65XkYM2u9i2yefroJbi5e7LbdnSbpwu",
  "key9": "3eK2Y36T4Kbo4UJN4vuXKeyzdtARP9WWV8cqiyUecsswDyMjq4T8cv2GLiFYMrwknfvECi79n9KDWcB7MDmRLXBV",
  "key10": "5ZkkAfKoXXDcAfWT3GZHX4aV75Vn9turRfNXch2iXUMyxKDdLdTBgGizVkqg53khpXBFWCihKGPVj3cahB5GUoMG",
  "key11": "BD8qRmfZ6fkVuvAYHgc4F8z4j8A8kzk2uHmk4jkubqs9JwJxoyufr88SdA8RkcyMgAHuqcqsUT6kZMJvy9Eci9R",
  "key12": "2gMwcmADr4sfu5tFGhpKgjbpzdxXqQb8geyTxHhjFUoeRvWkMYpJNbBRytmkhgZt64DX9B4BsKvq2y9ioVMcrJVD",
  "key13": "4bAZV7gRHotsMMV47pZW7krwWht38Ye74C4ZtjMH9nW4hQRjjuxkLepV2ugthfY3vvrTGxXvk2A18HKvxd4HnYMb",
  "key14": "5dHwpayefUUtwN2vWfeozetjDKPkMMDwDgufXMQvHxTbsCetxKz2NdjCqWXxhu2ntTptUCFP8K51oeeya6J12km5",
  "key15": "JbSMd9aPd1dqBJUVHtNCE9BKoYV85QGQj1cpUxyHHDrFjyJs5v7wQqomJJoxUU9p3XjHAJxgi5EuWJETPWEnWRy",
  "key16": "5oE9x4n4p8DWvfJtYp1bQVZhki7JaYkifmTyiCZxr6guLMCPPD2uZNbhb99TuDS3dLZ45MUXisZqx6rDLd6ciSHN",
  "key17": "5LaEqcfadURp9EAi7qjEpBZosa84UjuhRQ55LJPTfc3UW3s3naQN2mBfH9NyGkWbLTjaTUEpGsTA7DwyGuHVYRdc",
  "key18": "5gvkUmE2PdZPoAEtrjD16B6me86xpvqvdnprsvX8bG8TkQSBXQz3gquaTrGN6kQXZPq8FQXDK17uG6n6Av5p6MN",
  "key19": "5gnXJa54A69DTWsm3eJEE7UsnazNdGCBB5yCbkjvBuY9QA1NkGQtA1h1RWytfgf8P9nYVqGa84CsjpvSh4miiDuo",
  "key20": "y4NBRYmrgS3y4E8bBYMq1aLGF77fryNGEBuTu5f4bNCpp8tezgWDwfj2BJjGj2EeLPjexUYHDT5FuLPeqt9tT23",
  "key21": "58THfZ5SSz1VyuaV4bMCN6hVvYG4hnJ6KP1hVnWw8jKMND6icX9DTBE5jYGFNzt5PStMYun5PqVT1hMnd7eJRX1e",
  "key22": "2baXFyRd2tsj22yTaTeHGgmG1mJwihbb5kr4XQPrUgtXbrncxo6vhJbNxuLG9MNTF3b5JjFQMXpjXL62s99toUmf",
  "key23": "5Hbg1HYhJkcjbVP1zBEiX5zSciB7KAN8DggrQ4KvEqp1GHTTKLNooeo5wiRRLS37ukH8B2B9sujvVBELD5C1DLLz",
  "key24": "4TeG67agKY9Jh89QY6TULsnr9Su2Fg9GnzFQZ4VhGHH5Ly4wK3CRtRhM2kJMDnMWvzBPKAGqWT7RLHdRBkLtYiK",
  "key25": "2JUqJCVQgCyMvrS7c1EMTFtuuWBJGDuSuniGQCXKZFMNvLhx6vSQE6RRTU672gahKDGwAXoNUjkFSedYdE7wpeRG"
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
