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
    "4wJGaddQrgDgUBWa6VhTet3ffsHGU4t3NaWPtBdwwRuFyX7YyMJmQ9bfN1NM6UhrkBW32sNuFk9LBWRujW6KGnQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xguQh6pZR9Pp6BPPZEiHQuJgGywaXdo1J1YmTFf6yh6GohokoDn9aSMvYMVU45QY1uScXMGezwGFyYFdQ1Eao15",
  "key1": "5YqrhMDZrVRNjC7pERSfCA6rmjpCx47Yg9WGYt6wSQ2FZ6ZhTfJPvoKBzuZ5dTkU6zrQQKikHQuCv1Q3xNhuKk34",
  "key2": "2ABaiRXakZ8LxB4Vjihno6EGQtaxmeqVztXXd9JfWz5g5VAZUg5XPtbFJMrZAe4KTGGZVuZweu32BqeitHfRgAuw",
  "key3": "3JQbLt9hEmHUbBsneLZZsn6AJeCwKRs5mrGMgK2tFxY5ruYHcC16W8z1i4gawiRrzh2fdxfgpLf7MrMTMBbFnVsQ",
  "key4": "24GdgJJDoE3mseGEU2ZhDUXUMjg3EBhK8UtDuQ2DYBv6LCD8Rh75vjQan1Xi2y8oq6zfUAgbKiVces79Q1UUAkti",
  "key5": "2x12LCrDkrLuKdntbqbktWHhkRbR43ZcUuUiCNipdcyonuqtEHjHKBou2b2DCG4jYn58KcpQ14nR5Mk8mSSEcpo1",
  "key6": "4BushSxdYwSrZomuCjdLPJ1mqML4DoNqXEw2SFKUnTefbjoWqat2DbJeVmdXMLzSN8w96pRqxJBaUP2duF66hz3H",
  "key7": "SXJJotafWnhEo83frcCPASvQ4JQ6KvBwJXPm5vCXCNrmGXruNo7p9aCsY1xoii733mE28uMpNtTfhQqWu9SJhAL",
  "key8": "2V15kMftwGiHX9qQ1nNtDiBhFvP61YanwaJV9evGZ9Y9UCrQGLWC8sHCZzvpYHWoJ8D4wX5MZhzrtiuxThqg9M7V",
  "key9": "ytcnLTdhdCzRNT1PiCp6HFNAxykcSyptaSLQTcvytq16JCi9io98sxGfDpVk63xbRAzifdN3xFQdHE7mZaCemNw",
  "key10": "4gmrPRiYxuUaPPGEdwQQtQWKL3zaw9Q1bXsUQ9K8kiSKCWQLG5wsPXf2RQBoeX5CKFvfjkpsZnYrUoWUKSdBhU3b",
  "key11": "4KfTWg8mXCEcSwuU3WLo2vwPAe8U1cCS8T6FTkZ9kPHPc2JFmKb44mVsT3fGwepvSaTXgckSu1Tw8VJL8kJEZtVY",
  "key12": "3dVGfgP3cDaHZd4X9HPfgjBSGeWHJD7KkyGafukSnXBKvqRJyaKHC7FR7LxsXb5eCQDu91cMBjRGQd5hdZWmmN4w",
  "key13": "4dn3SgE89dFEwAcrdUAc1ev97XoNFbLH6kScJkk6uZhHPGWp4B5emJ81Cnb9Rz3Ccpp1R5Q1JHWVuirEYrAgZfDH",
  "key14": "4dKyRcx36M2VxEVkA7DCCtwnojjJ6n1yUWQtPmrATKWn8RCw4Z3kZu9tkJZTevXkDjq5WwUvSv2MuvWbX7Kuo1eU",
  "key15": "2QLRT6veAataneNjAMfL5qJDW7zqYKETEFEG3e3VBeLgFr1u7feAVxn3sKdaaF5efX9TqcNVjn4PobyifyDHvLUK",
  "key16": "5Yi1fuNxiqtQfV7Gyz2vhvDDPwzPFKpt1cWcQutfFJTsYfzzqT4qhPo8YRTZQ3a1n8Q22kVo9LQMqUMKUBabGjpJ",
  "key17": "558hfbhNSFpEH7JhKr9fKVE11BPTj78uhvvADUNzEekW5vaianzk6YG94U7U22peDGq43tdgVhioUGGF82bNmUpN",
  "key18": "2yJ3psY4VRSCDrc9kuRqD76mVLYoLrfrjU8TBKHGqLabXe3fby3QpQXU9pPw9YTkvyPkpBrE7wFEYGGr3wyrSxob",
  "key19": "4QRsEBKAVZyuyWoNcqJM1DEHk5etiXGGpPKkiVwopWUD3gJLy2Y2HrPuYmCm4W3h68zkhX1dNPvtJMS7kT9NCGnp",
  "key20": "KAfB1R5c4RXXzt5pSEa9muYnZaynmietuiP5Lt81EuE92p7FMdnkH7eAuNUf4gt4afS6MaEek1k7S9zXwpAQ3Ve",
  "key21": "3ci2Hb58oZPCf1HaRwbxAhgKcAnLZ6LWcyimcQX45nngPp7hZHSHfvwgpqfCbLa3mRhRQ9n3NkXAfcG87UoScdsD",
  "key22": "3BRQrdhCGAZoCbQfufhZKxcaXK91WkZVzspQPoqSF8zMWyK8FWngZCNYLXsRvNLN9bh5o6Ex88F5R5hAgsAuQzJ3",
  "key23": "45wUrdEnvmVmBrVQxbxfZsxPbpJ5Bjpj2WF5kpQft6ZKcegK4w3CQiFBkJwa2AHpGhRsruB3Zk8f4bUk5gH5jS2X",
  "key24": "3Ac7vGDMtDbYTarJBRBm4RRC9S8jatMuWbA8ixFK1u7t3p9L4aRepf5D4Y4vnX7wqjU3LGDQ6quCFk32SJpX1aAU",
  "key25": "63Bc74tb2bMxX9sS9FyvvEMe32gp5she76HPuTCiQai9cedn9ERtrRPp3RwzMKgxS35nA9NQ6WFVm7kDTa7mxT3m",
  "key26": "3xUfyhDhCmCs3EjEUjUmQC1mAAqeTpGQcQfDMz1CRFNLQo6xpcBhutzc6bT1TpkiTVmwHi1pqaq41TgFhFaheMaf",
  "key27": "rQo5GKFsJ8uF1R4YPJDQ9fG6JidSVZCp8NSh1jGQEZeHvTD9Uo5agb8EnP7xCWZVuYYce3ckwPt5TdM3oWWwBhQ",
  "key28": "2pZd1mujs2YREfzzG9EaUudGKqg5r1JXW2zD9DbHcVMqzDW7hWEWVpq6FUkS6k2ijoMoK45LXoBsthZKie8JvBSd",
  "key29": "5yABBFSKz8CQ5bw7ZKmZqWHhXk4At5k2bmMmP269Hw6TMXCWTD99uc2tsbZd1r52VGrLrPFd5q53NEEN6ym6H1Ln",
  "key30": "mXTdxPnigsxkwWeWVL5sLgcDFXC1XLYK8dknevoehAPboNJc5A5d1B4ETYwK7bMqi8DowmA5iPz39SGMX2x3LWf",
  "key31": "568ZhByCVyUoWxDLKzWjbHipLwSrc4ko2htCYMMyRnGbRrjKBNGEEo1E8L4yBWLXZdVuAoJigbbDcVqiksHVqLQ4",
  "key32": "55oEiePsNzMgDoGHRBD8XXMZnefzXw26yTjrwxRrrBZW33YJQkYhFcXVMC51bhzrf18EPjuU93n8oQ6HCax3tcMD",
  "key33": "5p3WvSEDxaBGdaYVu71Lef3F7dCcwGDN5NfWrs1NWjVeVzCrJ5ckcmFGoC41SdHhL8kokaZEPEB1irj7bQzsjUaF",
  "key34": "3DK1TPh1PAaNS45UfHnXLmCbZqdc2VkdCWM7xo8kEBQs11PjQUkso69vsCdrVBjUvBfFXJC97t8Fctt4ety8et8c",
  "key35": "5XRNUyXigLxAjVdLoPzafZwy6yczMtD1TG3MGrqs6jccTJmQ3XMTco4yCqP4whjELPgM5TCVT6gX3os7zUS38519",
  "key36": "4LHrwEPUnTKqjVgNWAUpXQJoUR83XsjUta9JBS6E6KBbvjTGAvi7FX2QcKYrGx86nRHTXrkQmUCJ4dRXuijJU6pG",
  "key37": "3vQv6xGaUF3duAQBAr2sFRMXddR9rigrCpe1iG5Dade82FAHVuBM6ASNdcV269KKGMhFbJix2s85hYjCM1Dptx4P",
  "key38": "EAj1T7Su56bAhSsmbc5pnkuMqsuAWNkiwJccTMbvyGE2ejfnS63dKcy8mcTZFGBCM1Li6M7DsqFKhvpr56dGVmU",
  "key39": "3CmiSehCofxYNsr4zFCp7HaW2ZmuXY4d3FgzAiQjT7LocukZsUquWHN9gpPiatJ1ptssrzEBxhxNpytERg7rMXC7",
  "key40": "5FRQdKh88MNpHPdGcLKR341hRNxHHAV3PsJCbpad2dPHqn2Q9zd2syApYSErtTTuRL4skT9aG7BqjjTp53UmTzYG",
  "key41": "521EMxAgLsg7zHj7Y3RFX3fpgrXkbACn9AjE3WywJQYDYASEEG7WwgjFQsoUu1mG84kK6btCT5cKUnHnCKiAcM4k",
  "key42": "nt3KgexEJqMsDo3ZEib3NdMQDHMhFBXMdUnbN77GNUmumWe7yo7Pi8U2aLdCUkJYHSKbLztQknuLbhRjjFJw6q9",
  "key43": "4TWrGM13xeGMkaEQ8ZGaSBwhMZEDTmBQswXCYohrQcqQFR3M476ejuogQtwB64pkp8EaYkscR6L1mm6PpcowAm5g",
  "key44": "2LvJWMsMWyBKFqWxHBfvzETMzqxSB6hEDEjRkoE7gU7Pr3nRMoV5ReVy19syEBifWs97p8nXCi9KnuPKn8mg7xRQ",
  "key45": "5fS8o4UgPSWtJiPSApiNd5jDsosnAns6t3w4jaUyPodbXBAYE91RRYvRnJhtRoPHdu4fLkFNtPj7R6vxStWZH3E",
  "key46": "5GFQCNjWW2mTsiKFKbQhExwRzKrHaFREjCvZmwLtT9S9rLKsSQCW6gASp6hokXSKmA4EjWyVRcWe99avkTxcjajA"
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
