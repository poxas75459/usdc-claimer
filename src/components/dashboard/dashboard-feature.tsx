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
    "387xH3Kf5bo9mibDmB8Dj4V6krJEwLXXExFwqBxRpRwz6zhNd85GbSTSFMETmn5fNem4WLFZTHKhJtk96AxWBJcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mvMLE7rq3t48z53HncCSmhSeWbsvWWEpfdx5YvGZXPtBbPaLGnLcvYjg2qV6ripGncwQTakzb7hyFgV9QE98zdB",
  "key1": "3Ww8vyueNy1ETXzsLTcLYd59HFJao1iE3rbhRuAZ7UVqK6fKXBSQWmALRujensFUAkv3tNDxvbJbgbEzizWyF6cY",
  "key2": "5cq3naX6PUiy3Hoc8QhayAJeayCHaKbPWXcjBHc3Vvc2c54UghkcTJ5PE44Y4MNNCsfZzuGQVybM8t7CL8GKnRwA",
  "key3": "5iE7sMsHa14Y51EAWhij6fqTbCLENguk97VFi56VFabSM8qZb9eu3AMheku1GzXfQmL2y6bNG3XBdJ2hjt9uZFf7",
  "key4": "5zBthCb2Rj9FVeFxkBfRvpwT3iPhHD6SU91avJuiZVRxhrHJxc7S7E3tnNforfuQM1c7hHQbzvCGmvndkFZ9c4ji",
  "key5": "gAjf3DGTKxaRFd6XK7xeneJRAfnkV5Lxw48MjUQZVRpohiFNGG9ewiLYDP3rSixM6TWzjSAj349nQG2uMciCmLn",
  "key6": "3Sb3VbgsjA9fdAuHuPEH7vLhkg6NZqbbss6uGUcwkZYFBRyynToHmJHHbZumjaamEPpuGjusg4tm1PVWWcoQpkdP",
  "key7": "3k1SnLEuhRDLQ3JbPnsGtuwG9jt2rzjVZrFqMNet4FKk8CJe2DPjrBZigmNT1s9YZA7dK14Gz8ZXUsAVjBoPiCmL",
  "key8": "5NwpX43fvb7qEhYw6gE5MQU7HuXM1pwpZCpWNMr4dzTCpShvwawfaE1v8AfwXLFubevaMY7V7nKCdA9gGDYKm3dA",
  "key9": "2Rz82zWFzVuDHeaupozgc4ibFizHRXVRNkDPDJbcLSMx5xteZErFaXwrrHjK633JfWmPMaAHBpfsezuLE1LZsYfr",
  "key10": "5DrX9xoHXGB3NGrzSnFPzd8m5TcmkFF4VEfe4wQUsbRxSYbSLGpyAhRLgSrUei87cVA9Rotk7L62dhu5xhb9ZDBV",
  "key11": "4bjnUvshV1fcCG4LDHgvC3R3suy7414R4FHD7T2Jha9r32yYCdwL7uymQMJrMaWuKmL8A9zoSoGdyj1QcWZofg8d",
  "key12": "3DmUpPFncN9DmxkGYrWtpDuFtpFLrmRMucgoUTR2h5PJJmePJ3ipoYHXHsVu1ZAQVwtYL8fHd3ucVc2kKFvZUwUb",
  "key13": "tGEi3hdHUUCaLBhTmWGdhDDKtPonXA8D9yzsvYmVZiryxWJCvAjxwBPabaadChoeMJxNqLBFGuekLfanrFTCNF8",
  "key14": "5TuHNpm2Wc5o3r19PRPuAbNhbgPAZramnarCYA6Z6QCvszF7bjuM7MXGw7EQZwAAmapZN6R1ZAdWKvnmhRRhiXyC",
  "key15": "3Z6nXfmrbDyq8jFq6m2AhgdhDDbLxiNxTkjwcY6rEzZXu45RM7aW72QpnvHERdvyVHFTabFM1384r4hgG8sQZMmP",
  "key16": "2wJhhYZsQemAFMYs8UBhLrzTib7YaKPf49KaYiXqCwV7mB3fxYsPnHXfA1FNuDLXTnqteqF46bwxvDVzDaKZ7EPY",
  "key17": "3uYVshVj7abxFvRVRxeTcp5wRyxHu8GDaxCB5wVkPd6V1b89FTJgJUncjaBK6CXzG8huiYZZzfdzPfFjMj4CT9Uy",
  "key18": "2DNimfDqvuUprmbLm8F7rejWUReEaFGxhKeazLxKxhw2NGM74MDUnfHaYuVMQXtWhAS5F25xa3fqs7rxSobrKemd",
  "key19": "cn1NAusPULbHfSQReotKmQJmwaUN1uNgoPKKCU3ASdFNH2ekSJdUXHqNv8BhTKKXNYkQKyFWQ1MWuZpeUrLFvED",
  "key20": "cCoWmm3h2zBMzYYKByZsZS4XLF2K9zaXZgK3uVQ3kTgWQvzwqyMwUMby14HTPgiWU3HzduGAa3ysdX7ahzYvzub",
  "key21": "2raByN8dzW9knwq5vnnKTSknR3ENgLRzV6jqFMNaaWasQea2AwXE2B4XHjquV7fTwReHgDwY7iwtFMxcJ9VdMPuw",
  "key22": "m9a5BRMCJwqYRkizmPdfuBmLVjTQo6V33CVznLAFfWqjNtHUzDvvzxkSDdffpGLSzDv6i6BedZjSYwqAE8HgA1y",
  "key23": "4XfUt3mx51UZ5NaqgRL11t2vHf7YvcCdcRo9nmvJ4QgHZTFiEXiHLgKNmoLg39EF3y94txSroFJMuSR1jYGvkxGt",
  "key24": "26pMvhzhi9b3ThApJaQx1yqxXLM4gnirSGuouH8tyeh3tnCbuCVCW1VTCWjVgKjgoZoe9bi9dm61vc9CHkXLkJAe",
  "key25": "5eN2nb6XoaQkh7mU5r4edBHNhQm9FczwaiqzFi5FdhUUzpNQNfaKdbSCCAzVBGbhZugczs8PMGX9GBWRoXHhAEAN",
  "key26": "4mJ1gor6daN5VnYDDbC6sfJfhQEUkYsS8rUxsuxiguYyccnoBsiUJajoLZzWDJmM2weRNkyKoPfPeRuhGDFEGHYg",
  "key27": "5BA18BEKtpWAm9vM4mLrp5eCeiKJUsmMFh7nSki4G7bojggVPC2k8D6pDYBXEzgeYW8rzTC6MTpkEatGMSVZsmdB",
  "key28": "3tJqD5RY91Nvd2Se8v439cfWdmWu8Y6E8rYrvmpbj3xoH4eRmNSjaMFiRsxR4Y5qGrJb5H2k69FCuymhqXnEkwRU",
  "key29": "5gUKjijVsxYnKp5TJQJDTc8S9k9Lgykcb9DwANuzEPaGA8DDDwd87bbuBLjVPKC6gB93pFfkdfsNUTp3QAQdk5Jt",
  "key30": "5aTomFEWHX8ucc5tiZ34NwLQrBfkJa7qjVUDnG1UFRyKi1yYxjCu1mnZRe8NZU8eoKBj83gNwnFwoDazcpiAf1i6",
  "key31": "3EjdZnWq3rjVMK7PcoiXNGDq5TCcwPbxeVUWaQL7s1TxsaPo5ghDnPTVbiKk4eMbsZVE2ARLQ4fSweyHyCxvBJPp",
  "key32": "5sMmSUt8AenufeAgN9fiNBWwKiNodW1ZEuVgLU7DRzdGo3SpnKFXHXgMbYy43HVHHQBwwWbvid9oryAEuGSHUKCt",
  "key33": "3jtHBdrYxp8qxCPNyU9NEZr4nhQf2wtSH9cXPuewPi9mtijkz11dSu9bTBdQu2u4uk8n1HW5TYdGo6c8nbqEGbB5",
  "key34": "sG1PYvigbHBKdF47132a84T8AmWwmJDCVa7eyNiHNvFukVMGoHHUPc8pCZivTxnNPh5NWhVVNKJ7MW4VbGMkTCb",
  "key35": "2Y8QNkaxWn5T7ikA5rdzh4qSVfrQazrx4w17ViR9bYfnt89y33F6wHeJNDoEMeZZE8f3NTCTT6hVdV1zyDBH5Fqg",
  "key36": "oJan1v9GT4AxE1eJKKC4mk36ExYUNcSAkqnvcS7ttxqPf1EH75xjE2ojhMutv6B83NCfjrNEJnTipS7moafawLt",
  "key37": "K1tDExezD3K2AEjCboh63QdGats9N8x43ux1QnJ1DJcBnXw931m4HJYX1NHd9swQQjHnatdqRuTUQAANEyZ7E1n",
  "key38": "51mwaPYZwQVY43WrJbt6KaWGnnv2vt5dZXRq35XVLTKxFuzsYfGAU33kBqcWcp8mc8yZVfFubTCMEMmCXCniEmdk",
  "key39": "27v9pHWUUhfxj4vNMLs1th91KSxvtbK7SDMBwTyMPaYBQPvh8THzB3WsJnj8NN5CVyfExEBvGZ3vm2VWcoTHRWhc"
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
