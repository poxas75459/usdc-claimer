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
    "3gJBxKvDBewUxjXwHVnHsUiJcBn6Qh1vujWrt96qWSzjLWYRqSkPnoxZc6BLsdaC8ZAfs9h8Jbjy2zAfidv8rpzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKENzRRYDgere4zkBqp1P6xTr51SD6XMztcL2biEWYumkbwkyyG1FyCmPy1LSC9F5xX3rXpkfib4rRh3RJq1aJJ",
  "key1": "43Y8Qiv6EaCCbU6kecxA5CXEMsu66VKHfmuGigQhpd6gEsoMNeo8YvHFTWqAmCzKxo6hqL5o8fTsedqmpFGJxFJM",
  "key2": "4zqjGQ928dYa5eRf9Q4xpZdE8XQVGY7SiLWvU7Q7q7wmYhnSFPHnhHzvv9Tm8Hs2YXaZohhzizCfNavSCfPwRLMx",
  "key3": "55wKb2nc8neiPsfuPafFA8rR74UutEQ2xDMornwDMSnQsWNSFr1Hg6pLayhQ33KeQzCr2RFvaT6KwEm8wEwdaJyQ",
  "key4": "3Dwe8ADC7dH95Px2wzytMt2tqLoVCxHACP541xepfLDFXsXbYLqG3CdVpP45KegMR9adwjR7SRZ6HLtethwqFBkk",
  "key5": "bCvfpSpGwBVSW2U6T6nP6S8euq7sN35eXCkgsNF6ea5jytgWFHM5oRvYe1j4Fvuqzvd6EsviUAqVKchs1u4rTB8",
  "key6": "pSERBzeMNok9Wyyk9spzzg5RKKd5WpFYKtyqA31o8JdpghuGYcrJ1SB1a4wMsoUuG9dPhUWieKFYcXsQZaaZBHF",
  "key7": "5pwPMPUhVLYAbHpb2fwFgSaiTtkx6wqkKqq9WvNgCretx5zq3Y9PGzDxhrRJL5KexYXeaHNGKzeWKsySDy8yhhKF",
  "key8": "2BkNS52u3GbxC4rS1qhGtU3eHYLgwEDKn35Un3Pyr52QEYrLB8Qq1uSEq3qRcoZXr5oNbVTyMJ8CiPqXRfht8r4m",
  "key9": "4SHy5AtMbzpRhp8gnTjbT8uMrJrXBTbjCZJmWJMdEiUsAjnvqLwQhVAPvRpWJknRcVqNTCnS9NTHyV8zBLpPxZEh",
  "key10": "45zEQCgGRZfvm9smhEADExzRJXYYfpjiXvHSXG1CmeoNgmWf8NVki8QTgKmsh4JvwdviqPSjC6Xckymigg6u5k9w",
  "key11": "Xr7RR7qgpAC2G5Xs9FBifQydmhGzCnmsFaYBHHedngLjnr3Bp94LZ6abVdRQEysKyyaPLEkQjLUvbke1dFvxkEM",
  "key12": "44ks9oJ4omjua4EEP9Ewd9YBw7VR4sUpMCTP6j4STZtmc8XRaaNGx28MZC29o84mxhKMtmDHRWTCXsNggJq1v6B9",
  "key13": "3wex3bQPC2makXXfWk22ufuRfRXrXjSyw7ZHPrjGHwc3hrZoXxeuXumFRKrXQKkivNMUVT321BRuSyLKZqtCYF97",
  "key14": "5kVZsHvRJZbP81Mmgvq8qtkTHfwZ2Q1HUVH3B3fejNUdkJjEhtyg7Q3foukiSCD2JMBZjwvNSTCfoBnyfzY6S2py",
  "key15": "2vGx57kX9NZgTVRL7999mURxKZW8QAagJCSegskFUVqZ54eFiHk67Z8xas1Ye76ehHgBrjsrs5gTFHgQortWmqyt",
  "key16": "3YBq3SGePdpucFZrCrfbLcnLHhbWTJxqCvLen2vfhfqdkPVweozmYJqZBhrzsoCfZdxKLH9nwYyPdJfAnCNARMrH",
  "key17": "2qoxHbcpu2Vy9zP9tipc3MTiZELPZrzTxaDDbCQqxFgQ1CvAKcaosh58qgtBNSxy5BYuhZ3Q1PYMaM5PHENi2Q8u",
  "key18": "36KL7uemiM1z6YYFe8D94qBKHD5Pnz8h9g4A4fPG1Juf3dkRUnkV8YFY2ww55Kf6qR5SDQPSfV9cgm15KUhur85S",
  "key19": "5SrSmMQp13kjXUWj6GotG5AXLKjLxarTDZwezz54nAWz7SfoxT5TA2Tfhim9zRj7bNDq1j579bPxX8GVR2AoaMJX",
  "key20": "4cxddDUm2bqaNJ4XTN2FEiuy4cEcRceCQNbpGDvrgeSjQs2u9tFfNfUW1xEfYy4PdZygZ4mrKt6jtWNXWTCj1KTZ",
  "key21": "4SDYgrXMb9CV1aY44xU4NSbB2TszL5a6e93YSPfbfjhvhcTVEJo6cy8HsViSebUyyp5eyBmiSbdPyqFVypzNcFbG",
  "key22": "2RwzFSLa32zHayx6MAdyjuTs3d9ctdThUt5iDoSZoM6wEcrXVsti9JaGVNe1vg8yTZCSY1XQW1shfak6QHVbrxvn",
  "key23": "22So9USu2Ypc16gc8vftzbydABRwiGXt732pUGJPXggK5sAgNhX9PT3peKqaddT9cNVpuWaHXDn4oetGPY7tDj2i",
  "key24": "EfkJbz2ESrk8QZBjCc2QX8sahPCnz4YccgkSdNSxotGfYZMdGrRAuDSAfyyfwpG8UvK2Aj72Mr2HtHE1GFfFetQ",
  "key25": "3hNPkjhRPWp1RMRys6uHtDcs38cysJw92sMus5JSxPh6nFcmK4a9qEVjobGmJg3JGb49L69LNLAcEFFvPEi1urfs",
  "key26": "2pAh9gs8CnbA8P3D98FMVCsZLWxJjix7kNej5ic7R6pe6MgMnuesx6DFmZJg6K6E9n5QD5qcV8cJRzXPUEUDqY4r",
  "key27": "jGK1m2cw4UzbHNL5LhMmkm5ghTnDdzAMoFLTsc4uVaRKwVFTo7kUuJnYSSV4tvsim2Hp1W557SfLygTshE4BbKG",
  "key28": "xcQt29LBDUqao8bXNihpi5hcVJk1EhU8kGgtCihT7gycHZ1xvuiaqyNR7P6nxxLvtiGGwdtVCybgzLDBNbmwLmC",
  "key29": "5PZsAsj2vKJuE1WP7WsF1QHeKYvaQFk5Jj64cwPJEBab822nby9AdMHxkQoWA1AERzz21zQxnsYNjiB781hBbj5L",
  "key30": "mm4H8QoXP3hPFWrcq53Fyv2d8AUUkWByVHz1sa3Pd2zeJeRrnScFwuuTuxPPkMaNk8vVYRe5E9gXcwSupe2q5sb",
  "key31": "5SLs2NEeyMYT6BfrqtNH3qpYsPDQzFGhcRrHyVYnLPECSA8HcT6uy5WVB3J5oYEVBzaxjRFbveVpWPWQjz5Y2keT",
  "key32": "3dPnoVJwkUwWQMw6aBzezsVZdwv7bMdR3zA47fSKr55VqYkXrQP5H2hBkmZGXqHB8cuxt3vnc66L1o8rneK4z2Jo",
  "key33": "3DRfUktaH3jTNfA6JeZuuJ9k4QgntPUAkLk9RT2y3Z9Lb83eKsFAHxXGRXi3yJQ4Hp8ZfWUNrxMSCFT4smv71f8B",
  "key34": "HGkNJNW6fd1VHgQBWZEdDr42qVHXop9F2wppMo3XaxcgDf6vjq7DhWbARYt8yjf6pt1nsqTtEMebzZs1yEFKFjP",
  "key35": "36fGsm3N2Y34Ju3DTFuXP6PTuzh41Yj8pNibdTj1JbETDZdtLAEwcG9tragJGULzLAzXcTvcWcXvrFuZgBVqAgs5",
  "key36": "3hYway617MjbKm9xV9ujntXZFqnbZ7WVeSk7agLr3NytxREdDwd4SL27cRhkBHxipvx42YvQ8ftY6ufiW8wMoptM",
  "key37": "5H7B52LSfY9RBMTEAzpUaeHv6VkneoGeWRQ7yD9bfz3uUz8HAHAQnaWn8nmGRqD8UBg8jGsBBjX4XWWheYEyYv1e",
  "key38": "4i4xunJtMz5P6S7XwDovJU7gmBrCyb5LxHdJcQZ8bXrM8pF6CKCb6tkMqnLG6PKskQi3hhqYLCUbbBCyGR5dJRhn",
  "key39": "5w3mu5PqfRqf7kF9Rqe2bs75aAxCJNRGWkspJzruG2dWL5GyNzdSGGVh94L4yZw75atKuZTExbXczuqAsbNmi1Ez",
  "key40": "mdhRPJRy3ybPUfCFVD82yXd7ih4gTJWweCgfbLnzoyRmdsnMj6uMFpgDVNzVnTusVgJmSVq2WwBc11fRuTTvfQ6",
  "key41": "3vMxAdWkFQrm1TzhSsfqPTZvfRT3gyLMpQJ2ZmkLoDAkKpKVEzFukS2DP1Gzu9urGjvjszBpUsSfvvzG2cUK6XWn",
  "key42": "4sGmr5ySHtpfbvzKnXCXjBxDKjcPBCaZzy7dAB7FkA2cLMwhcfYisSjbAV2daBtzELBoTboFd7AqfF5F6p8Ds3mZ",
  "key43": "5pqept3H8JtMjsEBMopKmqqXnBRsTovyzzHZQALKgHnXo4xfj2yvg4h9AGfme35KJgS1ckRhsfwSPPk9oiDhHwcy",
  "key44": "b3BYyM3EJS71HAC8fcqcRn8HBVL4k6xZQq1QfppHRo1UAXRLBTqJTMojyjMcuJ5BrfoyfwuJpzys7tMSzxA76ZT"
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
