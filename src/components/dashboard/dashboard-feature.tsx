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
    "2cg7D5GD2mo14Q3pn9xZ29qemrt5Ht9GWsTAm3QpB9azbP4yR7kVfbouAFz4KzfLDGhhH7PS9Z6UxTiW85vb166g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nPhFZVi53g5CYCiq7hUbv94zEujMvDx1nNdfmfbBqZAJQcULTviRhpXcGPjVG8jwj7raWe2aPqWsVxiwfoiXDr",
  "key1": "3SfnZN8fiXfxSeadEoWizXtZLfs5pjXMCmYKuFRKxqubUhjeWszD8Bb7gE6Goy75mnMcHchqXP9eVwhnHhNcggav",
  "key2": "Sot7ieofPVB27V2syDZaXWXqJTi2Fj2N8FhxtSugPLxHa2ZLH7KDhqGcUZc6YWozBuQGJ5aaueXxPxh8ECKTY5C",
  "key3": "32pGrbmjtv57CVfbbih7A5fE7mt4s2DkRGdMeAthT8UkvNhiuYsDDyFBGgZ8mmompux6TQWzhkK7kWf2rGBCDrwi",
  "key4": "2R2YHEQN62fRfVvHXFG9GjGuaK7dKMGZdTEg5GTSDqXjURN91j6y37PJjcGeRykaqvNJWomhw1EaKjKKteTU3dqD",
  "key5": "5YpuPs5n3768CjMKwjU4GU3oNWi3ZvE53qSwDGnQzwdapgB9TsttW7pC4P8jsqBtaQtsLkGj9RQkxWxpGCYWgeVn",
  "key6": "3CovSTqwJCxHqiTmSiqZpm6BYEk3ziNr5EDaP7i7RCe8xvYb2bDNVXKPANWz91Fj3dpRQvcnSdJho7CBR53uja3U",
  "key7": "4jEUCjRkiuLCDFq4jZtbKQoWGWB6r4Z747kfosSRYCSSfsdPofhLhGNaXC8k8VWdufWwE4b6buFFAWJxwaFKxxsQ",
  "key8": "5UKx3q6NuxvhmWLYiqr6J5LW5JrGBdbkuyF7gd5uwRxvNpgQXYvt7X3nKkJuj7LQqbVHPdCMS1ACTNnnxTuvRHz5",
  "key9": "26ia6QpgLLb4MD3ZqwAuL2KWNoHkN8SGv2F3H6ZuyBeGYK9oZ7MSdsXZYcTaxxv8b67TudArZ32o1A4L7Vx8eNeX",
  "key10": "3KrVKnAUvpr7VjEJqSTDGFXpHx5FCUDPXuKsximoHZyVJMmNZiN2bTzjAC3fMP3mjgtowciUTNnunhErNdAqk96f",
  "key11": "3c5rNsDgfgiCaWsKKGaWndFooHPXV7jBhojTtdkBBxnmiowKe8agVyH88cLmr657AW7S9uFd97uRBdiSRGEiJ5eM",
  "key12": "2RwpKZreMWWvx7Q44ab3WcvwAvDMFrJbiyiobNwyRTrfJHLpmJ45W1HSiBHazCWYs3vNeKdfMNsh54BdXATRwQP4",
  "key13": "5ai3E6zKn4ep2oxDTx2EtLhsL2xKUXDQMTUJBeAJFerUFJhCr5NmvC6FSQFwKt2UXBHzpRTy8cgM494c1g1BwFzw",
  "key14": "zDCRzEkrRn5E95JudGE4P8dWJrpnTK3eMrNWy6AxtyK5nQfKXKAdhg3W3MXaGmbNPsw7H2t4NiEwXbNPLyaXDnR",
  "key15": "2BhnHttBaEWbztzgebwMyHef91SYEj2uKJmTF8ocffuB7PqCCPWj9YxHyvWLyxX5vU7Do3jkK4TXaxxG54fB6g8r",
  "key16": "26Geb2Mr4AhS93w9k724DMckrskPoGtDmCyp7eBc6zsDcTqxsJs1dwPj3e8hdoqA4SqhzRFWqefqDTMfPnznKGTi",
  "key17": "2JkqjYH6gwYah3hzQRiMm7Bibk263EwgBdpBHi8mDQwSvGetZhRJWspW7HoWkBgxJZUd5f4PDpXDfRhz4F6SNNi2",
  "key18": "5oUCpFduz1pocbTcHRikzqHc7FBaofYYwcR8AB35eJssm5rdMCniMmG743pa5ZbXVdpxoyVFqcuNQZB2pdDDDCNP",
  "key19": "2Ru2ohx2W9Rzdcsqve7s2K49tpnHrxsmUfAwcdmPocbhXdY5GMyVW7oKnvieJipoKG9jrRGn4ecSSJBYMjYjhJpn",
  "key20": "5gKfCRBrjwJ1495iaeTgxsSxfb3E9r4HaMr35JaQx7mFdjqLwCVP5Ehq8pguU9WHmQwBo5u3gBDwH9SLvSb3ZaRw",
  "key21": "5kuF6kfFonD1HUcpdT3kVNMApMWw5KcB66NzE2oipd1j1wHCPgcCZD3W7YwnUnjzTCiY62AKTBZWjpdb4FHuUxUC",
  "key22": "3uca4Y43UrdcUMD2cDoqzxc8JFwms4dYRZYaDYm9Do4xnBiDD6ku48aWhkY64W85DKvqpVjZkD7ckRjUtBeL9syp",
  "key23": "3hQtV9tYmtrdJpAHggSddmm4yu3bbRruY1EVEtpDxWrX8561A3wjy6peicoeGMbz54onvR2vMrZ7A96roMGXw4XA",
  "key24": "2jsruGDWfEuzPuARvyccqakjcJqtoqoWxVPgEMta6TZp6nVSfTg1srRoNQXkPWVWbqDKXT9dexnC1kXM1ks98EXJ",
  "key25": "48oq7n3DxY6iDr8srB2M1dJyc6jYJb6BZGAoPHCroneDXVNnSBDFjadknYmUZJkgUPDKV2d71CvVfUmV9ngS4Lep",
  "key26": "2e5m4jaQtKopPaavgKMZgXqtR7WXuRSsHq8BDVwosMgBgCqBdVKasjYh2U2BzEhQ593sRCEBsYfg9FdVQMxtKEAY",
  "key27": "2Vxc4RLqMp7NJqD62XdM9w4CnnGRgRYb1oJbeXQoMDYvaF8YgCjn5AfggBuSkgnHfAmUyYsvEfnYXaKYbTMYMEnL",
  "key28": "3wihX4FaT99qMK6VjVQnH562GCoBWxzpD9PchfpB5SPN2expLLePrje7PqSP2j26AVbTCmynN55a73QXJr4SSZdf",
  "key29": "2zaykPSERM5qDrhUe1AUd3NG7sJCUdWpQALk6z2pWiB9aAoMyufEFFYRvSg3fbr6eJjmS2A7GggVqg7jQk3k31Bf",
  "key30": "25UvMmRBZzMgJpwp9EniRBxujVNukMvsZeviEjruv21mvVrYuoPTN9QVhtwFmL4sBoZP6DAWTaKZ38EWBfCBNELP",
  "key31": "2cK95H3p8KxHXFFJ5t12iv8fN4taKGxA48orRfReJgHs5TcuM1pG8Gg7CABkc4sEpjXXFqunkNdxNyT6x4SzgcP7",
  "key32": "2qGYAPW3PmBds8ZpMSxJ9bXUNUWSnsC3Mpp23DJTwmEP8oh9zkEAjei1Su7ft1vmaNPd12ZMu2xzmLyeRGp64ABY",
  "key33": "2Y9S9gfwpbRomvENbtL1rxGv94DBtq9ShS5HU6EBudsfL97N6PzBVMmrUsGhBj2RFdgsAMizoq5YVTC3Gb4UPV4A",
  "key34": "2ryUESpqwiax6KLXbEhPyyCMBchiBrpfxey8rypGKKxZnP4rK82SYDwT4K1JJDQ4qWDuVyWcEjWdvjSxR6voFXA1",
  "key35": "4c9gYBF64iJJDr5JGdQqBqr4Mq2cjuWTnyaERYractSpNp84fch8gj4DAN4EM1nnDxHjgMHkg4kbfAxZEygMbDbX",
  "key36": "4FnDnY8cpocWMuRtRC595vjRx2LiZb1y9APfBvMExbtd7x7wvo6vhMNDGYtvX2zWQhncsteRH6MW7nMUZry1Q4Rp",
  "key37": "2z5ViX16JhNNPL2or6iSVWvBg1xkupjo1Sbp4HSdTbk6S1PDBVy9x4kVCMneY1hRbCaFWSg8x3PLK9NzuQzvx5Gy",
  "key38": "5x9cw3ps3uYpExH85abm17UrhevbfcnP3UK7uB29VAYtV1Gfz6CUYFUi55fsLHCBVEotzNiAyzpzETg39GmWTJhz",
  "key39": "digMkjTyZXXJQD3fUk6mXABrjobbWa4L9JnazLDmxCe3KbJMXq6QyjAyoitnxLVTyoX1Z8vGnSYjYmHrdZUq1uD"
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
