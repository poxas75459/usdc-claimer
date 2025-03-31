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
    "52m9r3J69T5Q3wAHZR1ANocKYs9zkhwrNZ3Afxnt8eVa7HRqoQasMPZCg25nPepqmaUSrXNRRC2AYqLrzLbWqgqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQWUaJpAv926FbAywWSn9PMMWtf1rvVUjje6dc75kNeUhwavZKnS65tsG2Br7Eae4V7bxUv3pgKSNpzawMv1aTr",
  "key1": "5dHHLrW4hiDLQnR5BJTb7btZTVDbvmgW8Bxey3D26obJR7YtxExsCTRr2EiVQyNyTgnU941o5h8SbLeph7hNqHbT",
  "key2": "48cYNXPp6WNScTXNVVamexonurpGK5U7pahHtdYn1bnjZw9NPwvEZNeJvqMzLwCCzmwNcjLCYYe1NHbjodh45BH6",
  "key3": "RzkzN4WznWtHr4nmfnAEHFfJNZmKNfrbyEsTskA9Rx1jW7V1rYkMBx3SktpitARjRDPJfeuufc3732ymyEpyFvj",
  "key4": "3wzrfyoB9DBcQTVyNdzpU2jJ986FY7tSgVtX3HWLGuV9uEjs1EFMYhvQDWuEwktegvAUHH7vUviQzTHwm6HesTM7",
  "key5": "2sCEDjZpg8onq37PdVG1hNPxTDxqP3mH1iM6D3HRwA61zKEHadsJCHPUrqyw1nQLBc7vgvaBJWYzPJprSN8Aq3L",
  "key6": "3kMFZP2hgnc86LRDZR9wrhJMDUj9K36UBfKxexVQ8H3sBQyk7KbYvgA2FrubZBxPJUnrAHVsxAc1p5carc3xNwuE",
  "key7": "2wT5pCWtPpX1fVQGHi88QtmWLyJ9M7uz1HBp6KKwXWSknGYGQLJLQvRZq1ws5PKPHcf9bhdV4SxXMuu1gs9XuUAk",
  "key8": "41cY9yRm1rqDEjPky6nkF6sVk5QymoTsr5BAuKrC9GYDVf5RFnNj917UNpo9bHS3p7TaGYe23Z7h77UZtLW3XkoL",
  "key9": "qo6Pr49ZEjDgFJue6aohLaqatBqkigySkf9cnXzGnQpe2jKooJ7TkbpqejtTKBoL32pHsYhWzdwJU74fs6dnkgu",
  "key10": "347ViiesGx9Hr59JZ822FeJNdNtHMTHD3t1U6M1vHR1LZvDEGZrMVLeqDCEHemBRPou2PvyJVSmjktsLQK9Y3wvZ",
  "key11": "3NQhDsxEFniJTEgiZPMe3xUe7fQ2atomTqFwWsThTuq9qee6Xbxr2sYQ4S42w69Sz5REouvku2sV7poLLYRQfcC8",
  "key12": "7w3mSFPtKfwMmYjHy6hPc3ZW4PY78eCCiJxmazUm89e6MVEm8XAeTHK2WjVtDtG8MJJ8sCntMdReThsaWpYoDmX",
  "key13": "2CqMA7VpKQwt2LPfMcJDwivW7hVK4D1yoP9kABBLCddMGwQXTApUY5LfMiRqZCx4SAhfxd4jWnTiqVU7xcJsUEyx",
  "key14": "z1NuuxTLqNtTqvsbGbe3Y9TmRUMQFju4qvj5RZ8f9MA4PPF1zL5QTTuu6d3oMVBdS7gDQM26c13q9mV7xsA2z1S",
  "key15": "2qkiYa56QRgr33d5qXaewYPwEnfm8BmDa95UCi8e1VxfjBYPk7N1jqjv18zkNKaX6h9c6PS3phZh6eQpvFho4CeE",
  "key16": "PCDoydDwVE7SeywrUZjqCWNvGF3xxd96BToWhYF56YymSKyvsbpofNqKJHYLmK9TdWbmGc78DkkED86jbc1Szer",
  "key17": "49t8yaF9eQa3iwQLhQ9AxvLd3RoAcqMSnPrkb5FjgsKUg8nZ1SjJfkZ3wpnFJzdz9fjAtko9eFSSMbGZGTytaWrZ",
  "key18": "3q7UpMFZ3gPmTd83tVQdF5H9gm9jNAJ1uC9qxAEcSc74pHhtYR1TXn8j4gQTiq2j2FLV4PWz4DHCqGgvEkJXyFCK",
  "key19": "5rm7SSeMMHA6c2M8sijSWybvYy9n5DiHtyGU5dmMTVZMRCmBFcEFcy4Vv2bjafj5VDmiSavXiLYhY6d2Ef9Vyk1b",
  "key20": "1GdgTRKAeanQ1BwSuXgvJmXq8iYqRemzd9QWtmXF2mVJJAoJbgxxnw6Qi2ipShNAYRgMUjMGXDdPXgXg2WZAMVq",
  "key21": "4ZQ6P3oLSLzn2DKSHDq2s9AfVUkAaNg7X5P7ZqJVm3dkHgmS9rSxfTCN5FxFuvXoWBDK3kDfQbW2kL4qDhLAtarn",
  "key22": "DVmL2GqYdUZ12Eikv3CjggRCBBMRD5ufBmc8tLUQVgRwzhtGSjVAarVk8kkciKX3y9BikHMToFtMBgJxrAxtN6z",
  "key23": "5aMdTtSWfUe62djcGeFZ7C92nhNsW3UASdUjRvuoVjryZFNskxPpjr7DwuBvGkBESViihZPdEAfirTvvAvNUsbSp",
  "key24": "4VLcbF51zLSgNPcDZJeg69vRVsohfd4CztDS9GhWgqRZGHz2NSrTxb4NGtJK51NqnnGU7JGLLQASdJ9dVNiqb5AQ",
  "key25": "5wtVK9TdRAJ1xtiXLiCgmG7fMoCaEUSKA6y6n1eEoCAjzM9kLN67FXYqkUaS8yVhVdiXwxk6AWFDcKGnqcPSiPQc",
  "key26": "55Q7FDEgfi6r2C8VFPe56BrWgTRFhwZKPtgPaQ3oGUUfmzpQ6vjVrhJmhKAKwNTAQ7DFf1sEERQmGS22svF32cxj",
  "key27": "2v4TfPeyy5ZNa3ZYVwswkG1e6Z14oQdUrzF6tBjieBBK1iwiamgjk1BFSrdUundueFqE7j8Rv4GxBKTD8jjCesQL",
  "key28": "e9XN62VR9KraHD4fNiYLE62iTJQths5DGK8ZCmtbmnEBnzyxttMqyTnMjL1VndsYW2GGSN8B1W8hVXbdEKZnCsp",
  "key29": "4tb1mQ2r6NeuEr5BE17YUNoY1TNEsxEfgCZTQgV2iJMKVxX1wWJcyRkP4nc4XrmJenaMTU11cmVBmQosmhA6uSoa",
  "key30": "4cxZiKUNrCVqE7niDZbix7MsTCe6i56bhWM1QL8fbfbav5vkRS99qFcEYLUDpL4NqgRJH1nwVWA1n1BCHHvC3PZo",
  "key31": "2FTaUA6D3p5t4oWBUD3rxpnaZpCU2jYew9P1GCdjEi2yXrf8VvGki4i6RaDeboq5UXu2UotMxPv2ZjxLWNEXEZzD",
  "key32": "4kfkKextu8Qw4SzKSL6YepdZpqLuMprLmnwnSPapRt1t6ve8ZtybK6LxfGjBFYe8SusNftijquBRrKjh77R6aA32",
  "key33": "mZL9A6VqehJatgsjqs4c2ZEd9S9RzeVARcm7XoUL5PMzPohA5vEZ61YFSJZAv3dJc8jiYYgvMjdq2LyL1y8m4h3",
  "key34": "4kNpMZTYsrepUjKNtmBQM5FsjeEVZ42DAHGUXYgdEU9Adw48J2SaPv6VNHvKPWU8Xj1AiK7HMrb3rCqh6KixrFW3",
  "key35": "3xk9nxVwo4pwThHHgH76tJamZPEnRVXRsBQdL11gbiuttHLLHSpFz1TRhoTXzWFdKQgREgDZFsrq28WH5WXUaABQ",
  "key36": "2rCFX1wrKEudCYASFzoRJiGxXbzbLpGiSsCWkFvQhmujewTfHhLxY6YyNrhQcofLDSjt7bB3AGAtCt7LSzXktyLf",
  "key37": "5rgXDu14GBHhykRSV9jaVAbXBP6pqBR1Z5HABMbEEFWnhvWpfGidYJxRcDTeRHaXDwwGXNsFKcknsqxsBjTTxZ4H",
  "key38": "5xawwfF847MjFD52zTMK9Asdh2XSuXKumBsVSaY95mKwKyNZQC44b6nXEExSPQth53CfiVCfB1LoCXs8ETDVAj19",
  "key39": "EoJctTKk2uNDNM6sTZZGRhjr9SF9AN6pg31TzdWis8faZpXJqMxiVc3ZkCF6fETzLCZMeHt6tRFx5DXhziJca5f",
  "key40": "39QQfDsDZUSM9DB7eUjkW1GpATDvGixa3dCZG27GQBcMeDfA9YQm9aWSmsFxi92hTwL2FkqCiKdhGDpEg4ZpwCWA",
  "key41": "5tCgpTLjYpY1XgunzR6b8PUgEzjXr6JZntL5AH6SP4EamECHrbf2Yu64cajepV35ryKU4KVsM9BVA4yHh3RDg6Hd",
  "key42": "3CJh5bNBwfzK7oYp2bK4o3dqxhVMFnZiU8uNnECTcBFYRqTo6MP3jJg8FSVjSdpBjoi9Q34vn4b58XYnsL89VcMc",
  "key43": "4yzWmZmYnDp8Dx9se6pJY2BMYkfE916dbmj6t2D2iyCbRrEaZzktpA9o9kt6Ax3Sx2ogD7J4XtLriZBCnGw92ion",
  "key44": "6bQudtKoAFFgyXu1tw1vpznKfaSDZQVAKWK14XM2DDHuC5UwH4UduSVwBZftn8ZU2KK1xqFyF5Q4n5434ovy792",
  "key45": "5UCKuxoqeb6Rc96nJyxR7Viak1FuBDraxenbdadfNPaAjyqUsDPP84Dx48ZzWeaQ5F5MvS9efiXB7h4rL7ayLFgy",
  "key46": "CEd1yuV8zfzJx6MRcyeVKyEYMinE72Yas7cwTbp1Qy6sfiJ6YXgQc5eGwuYN5EwivoSoWxZnXPG9Pr7kJSJUKwF",
  "key47": "b2VdEMNvfu8Uhpaxw9B6xMLRYY2Q6JG22w91qYMTac7v9gzTz9sXbx1bCR5PCGpAWZeZZhSzrVP7ijxaQcWFruw",
  "key48": "4tpmNxgNm7neeWruJ9tgj6UYu4iqcRkG58fdvULWTR4Dr3xRSFmbm9ZBHaLhNeJ4LabZwUpMdSPYDa28Z2xMryrf"
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
