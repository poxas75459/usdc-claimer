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
    "2q2jMi64PZfPMrhwpwXpduqeXtoHWbTi7CSAtL2PquGd9qNqjb2Lcay1FxDgHmFFWMxuWw7b8fvm2c6gEhK1sZAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NvYUwx65fArX47JHy2cdUDKijYukf6HDYfcaNzj3FyTYPcm73nh9uYoW2EGwEVHS6DgDEPF3PQV8h9d4rJUj7jb",
  "key1": "4V3UyejB6q5MkbFQwB4i6EhnKM7y4dpbNHajdk6fR77z1smjNX24gcHyLWJkAPMwUjzpxX6DaKZ1nm6NkZuf8NtA",
  "key2": "5wHCS2XreyXD2G3SPKjmXmmfACUTBEMa3Rr5zSBLGpg89XwoSmRhwPRwWTk4ZmfPXBa9Ht9r62UaQow6WTuxdP3j",
  "key3": "5PfZhudWanQAvBEL7LcWhSw9XmmaK3dc3nzhZMTjfN9nf46tgK5pSc89nXnJ9uZ2u1WCSjLpTnvLU3RC9ac8UG1m",
  "key4": "2TNhVk8LDtsawcYsJkg4XPF39cCRjL9m4LundZ3eJ2awBm15ENaSiE9GmsriTTe9wXS8SfNLW3ZrAecg9y1E6Bcg",
  "key5": "3uAN6t1NeioRGSQR4jeZJSwDDhwzB1Cb8Vq7LJY3ZHnPXWf3MQ3pdmWaFvXZGP3ePyo1xqHShtGYKBDRSRo9N3ZR",
  "key6": "4heP5W2kfWg8NL4SHhu3BsVd3jyLXLPEM5RVx2MyTopXJ89hhQMvJFDxDh8KFjgp7Y9irXL7of8cQyrxsEHxcoqy",
  "key7": "53ar1Xev8o2UT2bzef9PQg8ZSJRtjz2AZjEUQYCUoy9aGPq2KMx3cQ3nAYrtFSegpZUMZYC4GKA7hH2rdpDiDxMZ",
  "key8": "3fLBRBgQNpAsZwG1yRAy7LE7S2Pb6HbZEgPmmjmFeKHfLh5paDHMZMvhGroSTPsKDJa2vYsUGYpsNP5mK8ftbqGC",
  "key9": "QReUvLp4YWpAR7TPEoLfhGgQZMZ47M7an5d1dEtpvbBtLrxSZh6JTZoR4sx6fUx7CBjQobwVPh6wWsbJohzqxWC",
  "key10": "3f1Y8wLJWDcnWrRiqhs3wuKJZana9Gwst62fKCCVZekw6iDdDXcieFge6PrfKMYCs18oTJq3sw48umXqxgApagr5",
  "key11": "4aiTXbauQ171WdCjXUFKRbUZRgzZDmpL8DmDtXGZarSh2CsvoGZhgkPT2brAaGPnaj38c1xiQ9CFXrHPqaRXhGTY",
  "key12": "hPqNXDp2FCT6v8gTXu4MFdHTTewUv8kBDDZ4X4fbUntRgMvBFup2A1rVqTrNEVvb2ofMwk8tX76YQ59yxx2a4cG",
  "key13": "ye6i1QJKVNqSfBg8UUsTBQgNajEpd6JDsc38Zw1rfnDKvfZi2AQvd1AghCvkEZ7KapjytaKqWTop7731JUGJ3Dg",
  "key14": "4uhyntqCsG4FytE2PDwrDdfaBXxvCKzPK3UZ9t6zfx32giUVXwmeBGi45eYX4znqHniFr88aTiRzsarjDzJUXuny",
  "key15": "TLWBMfm33HDVkLJkDERxbLwZsHosHfabNfAzfaKhvKhExc95X2t9yQCvpGg96JMgviST2WtPyGnzLZu7rVPaZQP",
  "key16": "bMNUFwE1zHYWaiVGs49R824pi4sFSmqo5nnVApBq1tmchTQguKjnFPZ698faVeqZagbJuxipwcJJkCSRztGBLW5",
  "key17": "2LNkCFEsPiSYeJo1eW7H6LxQXqfFJJkn9mubSWpTGT2BU9KpTfbsQa5YJUDVL33ZypMxBYAt42cXHLUr4cgVgQEf",
  "key18": "2opJMT9dkhYxKZGunuYmnWoP5PxcX2ui5sxKPpds12czvQ4Uyr83RDRoFS572692MrjJL6foWv2eUZ4fSMKMSEW3",
  "key19": "3GFePFV2W3uQs6MsuVYUKe6bokz3t6v7H4XEignwka6x5c91ssrUfbUfUNuP7ErR3fC3KcphTgej6m6mBBmvGUYG",
  "key20": "5oQQ1MxRvrfcH1yWrGryxt3W4q35h3ScuTbbjjFJGgp95FTuYQiauCyLLQ31Bqbbt2HT3kYmQBfgx8LHZkxHVBZP",
  "key21": "2sYxgTC2639BKaMCa2UoBfLfPk9ziEFzB5W81KFn1sEhzgt7yyzDuzbW7yLDkLEaLiYfph7uQa12NboSEcNy9SMC",
  "key22": "2HfB8gdXepTZn4mmvpdR9xq9FzRUMdGcgcijomMKurD7UqZoDgRpGHjQ6C8hKurnm9gvCgvfweMUP4xdv5ZtvSrX",
  "key23": "4jgpGyXDVCJgiaPgvATsQ5B2HexBoBNLEy2Jgv3Rsw1tTkFAZCUiePSB8jQgyQMEVvFsXZ8bJZu4xME81SDXp8CX",
  "key24": "kfnVmPpKnu5M7MyYxeD6X45dSQgCLmC4dKWVmQvaubpffaQbJ8YYwPLVgsnVyJ5aLws8P3GrnRht43fHTfUdFCW",
  "key25": "38LYrKeNDWBYHN3sNNSixcif8hKxyryvmEwzmUSEzqV8xA5BYWQxNxv3oHgMvttRSZJGZ7k8tYhrHwxMVv3jpTJV",
  "key26": "5QcDKtA9xUQPARA7pNvbxwfBMTpssZK3ho1z7G2bhCLzhtNczM4HfyEpuuWHDPwswRRorHALNDBoqbBsms6BGhrG",
  "key27": "2i4RLgsMfpt2q9EuFCCtg1dFrTmRzUs5TVwbs2Vx33Q8AzHcXfbSFexVQfSxWhHn8nzs2fo42widjptQ24DCkRcy",
  "key28": "4B949iC1ndeYPW8P4ywRkkuycvJLPrLUbniXvjKU69jBcwutjRHvkGq99YFpKzzyWe9zHTqqnYMtJD5a3WDNzdb2",
  "key29": "2eHmRAvXReEkLDMQyK9mJb4mPhTA8Up22nZKiPXgKKUSt3TkhV4pe5TxNsnVp4SoEH57t3zAvDUKi4fMVPnpNS25"
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
