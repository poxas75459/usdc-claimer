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
    "23Me1LLHGMoLKUf82Sb1wmhW3CSG4j8MKKgPM4Eab169UwjMbQpJKmnrKCrCi8n6MNycUU2T6LsNVucAMBYrv9gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2by7LiwRmjYLVJjUsBPHvkkM4q4wuiwTJqvkc4qTnRqagRH3CuDjZn4WoJzTMYwJWtxVw8rRVqsbJTiLJ6gxSscg",
  "key1": "56Hak9n6iwX4xzKHv4YochXZqqKFrY1cf9xJ2bCWtXYWksJLfKucBnnDdVQSKgQjvXR2BvK4KrphjT5VZ4YSMrM4",
  "key2": "2QRLuWhaVuorZhSSV47CqxLiMVXg3prp4gvac8NUKWP5Lg8KzxTEyaC3DCcoxSaqnSPFce8rUbrfdXPJe7XQ7t2K",
  "key3": "3bRNCW3XwVx6xbRwCFEoMFdurrRtVxNdxCKisTJcXWqmk57jQjPDSaGznD2bkoZosxX9AAJA4eaZzoCquG1ydTSM",
  "key4": "24nvqfLjfQ2LYfeJhSWLJeJQ3wFKYMFWJ6Ux2iHgRWThU2ew6akKw5PWrniVzVzYZ6xUT4x3QCrzttLzF6jEh4xn",
  "key5": "2Bej6GbdcQfTrWnL4VR6fbKCswTD2QxLyS1fqr2narJgKL4oE84r9MS8YFJ9FiHb7MpoZw238mWZZXngBSfjoFJH",
  "key6": "42QHMgosEb5umJYWRgxF5k3W2QjXLPsY2dXjeAfCoroBQmcrct5BJx6aGFiH5SHyPSqQHJR8CxLEcecn7w55j7bT",
  "key7": "3wocZS1X4Sdd4BHyNNjL9HNcERXJcwgH9vhw4PFuPc7cAHJaYmBKLbdnqztyG4WocTNUiDf6VuwkYujWxHybtcMn",
  "key8": "3nefdZYGSoN97652zabajZkjbHmEfwvwZ93VyNGvX8hLwvreWF2y3sePKnnSM6wAgX12VMjpxHNT8r5uTp4spAyh",
  "key9": "4hNM5qEfCbPwcWmmSThFMCXUJHGeZ7PcmrG9ozBMNkavFynCBCqAXjhpH3VTUhbZXDoMxw8E1wWfNAWWBfc4n2FZ",
  "key10": "2Bj7TBwdrUAajt4wP2sEnZJtbavooeMRnVDKJATuWfXUAMcNuw3BDSTcJh3hAB8qpuXucgJHMaxRsxU5JuL7Q7Z5",
  "key11": "5E64QAAHULFh22nyKCkzgXi3mq8awm9iHnW9xBoVH81FuG1FUJcMtn17TeazLNDuTkK2g5xUvUZUZXQVZq92bRok",
  "key12": "39su5MH8fjvSbgVG7J7H1pB7cshVRN9oV2HMQFjKibmK1Atrt7vjyyrCAhfc1Hu4j8jShrBZbLQ8EcNB7ZJnqHMP",
  "key13": "4Jf5yTxwkzW2UY71ipnLZnd7MZssrCxyeC6dKKgtdC8QZF5DtcFqTo7NXucnrS26aJHLNuk7CNPQmsTfkuRHEtHd",
  "key14": "2rieMTH67YcZBMPd9SjQR54TgDWxiuExpwCzG71WVs8PfQftCcvTTjCu7XNcipwHdWtPHx7hfSKygwCxbwWNrCXJ",
  "key15": "2WiTrBqouA6d4HFusmS7f4bWrWjhjQ8H67qwnoFYd69eu9GzD1QwnHYqKop4HGrZv69gvgqCjQrAzvTVXS3tYiAJ",
  "key16": "5mrtuwd1QDWrap1rFDdWMGt83YgC4gjDMVrPZydCgZDJLM3REuhv9TG5S5tjiZ61j1nCuxdzxYbKryVNLuXrmGNY",
  "key17": "643cQGaMGBZUJYZsPRrmhuwD8Xa47xQh8YnVzbC9yK1mS2fN6keQ2GM3jbXtwUhAihpfDL24HP7WVtUE7Y9MwuXR",
  "key18": "3GWXVmPidxbK5MJzP8eiGktdQLdXyWYABc9ZECoqVm4xNgmZMKH6e3T46J21xQPrVY58dejBkn4ms9CTi6ZimfCF",
  "key19": "XoeRLL9nSEXK5MUsdbGWXL7YJ7EUBLukRFVfj7LZtwroH3n64RBMEvGYpoScKFDyzYX2Thcf3yaoF4Vs3u9p2LG",
  "key20": "5PbNAwKLDQ1FM4334urK9wYDqhmtmo1MdbpPeHsdp2GTyhGhf2GBaYEBuh9dpFWiS4uNucYhakGuuTeoCYMP5B28",
  "key21": "3BqtAjHaqh4aJgUngHidYYWWzTfm42HsPpz54XbsxAWD3viV6bJM91qvEXGcYFAdztugoGwJt4M6FHnbDRAtQqk7",
  "key22": "3yFvnVCB83agkTtoURNDYq1vHq3BurZb5YpD18PHrhgx8eFkULH43tS1qPWZJPDiMhChSGaoUp9d5Jknzx2H51tN",
  "key23": "2EVW8emuwWJk4SGbWGje4finruS8PWUAoaRFsiQCHqnCXavUyisfcSKqCQzrGCpQuKYfdEzmsdjzRDWtSQzpBRHz",
  "key24": "5M5Xgy2VQ33FNNRfXcrz2jGzuPe9yVPoxoR86TFP3Q8ef6ak7KxZh2X4kgJp452HySLjZSxnSGK5LXabuGythy2B",
  "key25": "GucAtbbD3RpgWnGRCY34v3e377r7sC6E4WuqRUc8hbV1P6GBmda7A8vZoVHu1pGuNVxh2xs9DsPrm6kNJoiHV76",
  "key26": "38ae6JDEDwnJqBJLbz8nXg2A1DJWNrJSvhJHh2kqeiJiGzPeaPMNsGXsSvHHEhYS13GmCQcgBjf4tQdnoPq4HtCA",
  "key27": "KDwdWKdQ1g3UtsRJfrvVLZHDt11qzQdGwn16buaSzkHsyjTM6hkQGjum8vgQZ5Dq3cKP6hr4qk9zox4mqdoGeny",
  "key28": "61ieaMpsTLxDGYYbg5RRcTKGBP4VsPXNBGounqW5at2ZP8wNHFWAC3PzP7Av7zdaaJ18g6QCmzmorBBbGnaJGDxT",
  "key29": "4uTJAh3ZmQCriLtDmXPiJAHsLaF5cPSHKii4LT7CS2wTfnEPJuymuzqnNTkPKDZux7k3sxmNFMNCfKbSwDLQWGRD",
  "key30": "7YPPrDoygNwcsam8JyiALJn9JbX6yuY4UAMxioQVNrEyHMsNjvh1A3SkkyCCbgC2fTZc4RE7byPNJUeEighYj1e",
  "key31": "3vhgXHqucUw2RpVeTAqwEkFBeyavepASygvzJiXwAKfcZbTtwHA2EdJ1U8oG96a11yg14L33wMqEsGDbbK6jzp5d",
  "key32": "21Ak3Zjiun7EpaYjVMPmHcQ61KicK2rwgvrPHdSddCwF8trbTaHsw2LQzWztTuWAvmNGTEuqdRD49THnM5bRVQcp",
  "key33": "5eVcY88NE4hUt56ACjbywhpJp1VC84Lq3WGRW9y4RHhKQx4sQm9tB6n2YGP6jBwTK45G5Shmy495SVcRSXuSkDx7",
  "key34": "KQkQQocKRK9YtVCkTuvPomjPxjfU5A2jxHTEStVU1TEwFJLNbNZh7obAzP4T1YNSBAw8WYSFiesFer9zMW2NDDX",
  "key35": "31P8oWdDBXH7is5iQQfRBJ5BMFZoMCBNT4DhgfodY7K1kyshDekJTBU8m4EMRuPs24S6R3RFHjtagTSnooJptdVQ",
  "key36": "3feZZ9oBE1LAxWWqHxcEpXJc4c1RLZQfbN1ocPL52fRwUfRxDFGoV2L3AycANFgHhsszptrbbzoUdprf4eeEw8Xw",
  "key37": "5u4s7cKKfPLoUQ7hiRi8YgrijPRVbVcNkFKJyFQPFagsVXdtECnd95fUpubTYJLY1EfyyMuqjkpn6zsvtE1JRAWB",
  "key38": "mak9yEwPAs5NYRUWGPvEuuwdxBh7etTshAcwDvR47FCPuUENNX838iUZc7GvAv9vzXcyGxPsT7tXsgJkxfemQop",
  "key39": "3pkrhQ87XSy1171B4bnN9RpQSHUtiFdF6veyA177M5iynoLKV5cNCHFYzSmtFefG4yb3q9EVS3S6ZsMHmA8w339f",
  "key40": "3gyy7Ww3R7DyYfArmD83dcjgfzTQiCixJe4eo3NYApN8uPW8uNtNKvnL7RkqbPzDWkxWSWnubaW69EzUP3yGdZ1y",
  "key41": "3KsC4vLFVLHaMXVWtJCKGda9gYk3veKVbNb1jqN9de9GxifMZv2GYEnJoywTMTwDREULch6ZukCJbxLdoa7Ye2mc",
  "key42": "5B7j1ujZ3KWbm2FSVAKQMATWbzNSaHK9snUHuGQ8b7WVYJ1mjvpFcDXSQANpvFj7c24PcrugrL7LRrAHS6mgD2Q1",
  "key43": "2RdQmChC8yFXLTJaq47RkTSSmtYB5CFPcRg1yoMjiwvwnJ1Q1AJGGxm32ifFohsvWuxB2hDRgPMwvfveLo99VkHb",
  "key44": "2A1tKD2LoGmvfY49neq7tua4LKAXif9dafE2G67A2osksjhkZz8Zt9xDPMyGHAho1pUELcHdRHYqiUcjwiG3NQre",
  "key45": "2dF7HTJgmT5fvmQ3UggGvvKw3LBDgLeBon8rjWzhy3LtWL2HWuVYNwMYcDY1Waoq2vqWPqg9bGDXRQ4yH4ephYTv",
  "key46": "G2H95E6W38ULAYVPfJsf12yhDP6M3CXocz1nodXRFUEwBn2dByzMLrCkLxAbyTjGrMVoysB1c5oCSgJ6hbGKwDG"
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
