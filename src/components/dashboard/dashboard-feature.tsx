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
    "2iUFJmr4Vi8LVaR7Cza7eUyDYz8Y5FxuZPug27deQfmCpuwQqxkU93CT36qcbbyLCKFKU86ot2Guhame4Z5jnx6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJ5wvvnrVXVVuHv3MB94SyxKuJefUH2mHpduy8LRCrBdhFcBCFQXaUa1saWHEsrKB5xtKeU83GujuYEnLYkARrX",
  "key1": "5X6LWppAhH4ASAHwxvPuHtCkDHTA9e8oN6puE2fCBLXdxikq4Uv5bs77qGaQbQJEYFRCqFraPU47omGuhywN4ELC",
  "key2": "4LkVydAsxrV1GJxBch1Vb8SbcrxCF3bEFDRmeGGES4AkaNddoUGoxGAk9GtqcCkjDVGtupSon7S9eGr1WdKxCVct",
  "key3": "5Tcei7C15eeJhDy1ucDKyoHMQVScFVXZTym882G5yNjrohrCAaSbmNR8fj1qmhxm5wf3AwFe1553enNrkZXrHZ7s",
  "key4": "4ovAvBG6HgczHat5JkvmwxeVEhPU53wLqZqvfJDXCSA5ivEVuaCB6XVmra5WtvDE5RSZR7cX5pHWhWuzsJnHUMY9",
  "key5": "2FHCCi7JVxHfqLn3A8EJ1sTbyLfeB22Zekbu3E5YW5rwF9fwpqyS6SqQaaFomNGKzV9SRcfD21Neb7kqc9kjmkWe",
  "key6": "5hHLwRJXKFzJ4bzEpfYEtnRBrBvJQdxZsmgNX2251NgXQLaSwokeHsMxpXLYLg2htqCTU1NGZffh9zyt4JQL9s6v",
  "key7": "2rqR7XrJRjuXcDJVeAGktLVL624tEisGFKSWSnCStXjKZxXV8qN8T82xHcmCvAPdtVpLkHrLb27EbBSiDc5CSuJ8",
  "key8": "4F9s8iJ8TQeeiGSMHVekbzMLWmmQNevXBa5sqp6cbPexi4gNujCe9oxQVsZ6yDXneJzKfLenMeM4qmFexEdP7t59",
  "key9": "3izNsb1hAvdmpW5WwJLo9aurgLZAg8xtfCwwTuYcc6aP8VnMYWnYozn7pxu9jhECtP5Gy8QEEnKxRZhWBTUgQYKQ",
  "key10": "4JfDRVVmAC2KApi8tH7S9EF9JrUuLdNsJKJBj6FMJrC9J6mEgfHADRQdaePhZZ6XeCPaqzj4idpkwidUHFN4GDcR",
  "key11": "2m2D82i3gA4vhtfrhUsjHgPbbkyKVPx4CB9r8DBCzG5cxvgh8WLTXz46BAq3USPay1HvBzjYBUwncpJKLLupJfca",
  "key12": "3Keefxy2pwJ7x4B1DatZPuroQSvoZ6DQWnBkCjAtpH59J4b17J2Jq3MECcrc42r8ZKBrJj6V2Vysd1o1W8SfsvHx",
  "key13": "2Wkw1axqJ8tY1bLqULCYa2ZQFSKbX5yAwoF6jyWEMVdwBFDFjBNWukongMXbpabjmpMBeTWBchrMZtfKDHRkuDtq",
  "key14": "5LZ5oAJBgYdbLMmx29qiwxcV3JJypyyJbSTXuj1hTVkMQfG2Zkz64uUZymm1Qnf7agHuBE94ij3YAqLxWPFSByu9",
  "key15": "2qHxwSAmXD2dWqS3V7DuPmzy6VG6XDp5d81eN4CCw5Kdp1gzn1DGsVkQwrRFxD37QeDuqmDhrTkZo7Ura4FrMWXQ",
  "key16": "2nLR4zDuJCmdqKdhUFEeMkuTn5zPkpuEH1J5FrWoEXq7qrhmHEHAtEPk95TqxGMkLv6w2KzDeZNZHyVZpQwxYXys",
  "key17": "48paF9Gz6xssWVh2BGkoxzY9tLJdKYCWKHXVwkUKmmvGZhB9KMiEuByFKZEd2JmKyqTXSTvDnPnmF7nSXYHnpdwz",
  "key18": "5xt11nAQxqGvK8BNEVCmX6hkSL748X1K2cRExym94JC76d75mcEE7ev73MDdxXqXaAyy9cHacvo6tzbZwdPucYEy",
  "key19": "219W9asNrpF8zt2XmLKumnGU5WdSnjTMKYp5V5PkQ8tLepLYpwFMN8wRha5Vkb3yg6xbAmFAXLTfdkfBCc8vmsfk",
  "key20": "5cTbG7zGnvk3s3tkiUFHuyZbfFHMfWi1W2a4EKKaSHrX9QBVpxMvm6UTHMCe9UDfi9ESDxDBh1u8KtAfwbdGNvF",
  "key21": "4rTXo5v4fKmhnNYoLdrw4hV8aPEFyaV9zGXaxKjqsYbzVtW7qig77ZM7rHYT3r4ugpQPfJdfJuERVLXjZqPu6Wet",
  "key22": "3WKH6SJyV2XmagMWHEKwLaT4hCppXey3EEGJTWCSiArRynV2w42wWQxtmVjqgHmDzkSzhAsyqNsNEojifN8csMCM",
  "key23": "23NKSnf142rWBPgQiupao4KmrBj59sRAyYHyK37HGRscCLmaYTHMLH1CYj8ouLvqKXYbCP5DQTdZ5CwjV4W4X3qd",
  "key24": "4xKbyD452YUSNFZUTuj4ixUZwv7XuZoDrnEEBhMKN5oMFLrWdRzS7L9XrcvqXRizNTQsTjRV9RaG6TZG3gGaVawe"
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
