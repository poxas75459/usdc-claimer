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
    "34LdtPGRVCj29S2SGSMeyBh1WjAH58vr8C1M4iBn4i3MzqRHCYBxNXVgdRVpbjkRKQZz41F1VFi9i7298agUYvoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTQR5A7yeF4nLpcXumL9xUdgz5yQkq531pvzphYhPfs1PHB2oovp5pvCoTSFD2MnNyKfVdM7w9ADUBxixuouskr",
  "key1": "39mPV6bhxE4TwTxXVL588pkY75TsR1d27umsfDnTY1i1vBKMYukpWXaSRZZjhkgftuZBmeTCbqjiBSygAxw5UZK1",
  "key2": "49R5cWaBSrpBxVq33k7bfVyJj4gy2Mbgp2aRwuzUrQjhHYYEDpAuepALdyFa34VRFkX2xqn6y6bYAAxi3X5fExRt",
  "key3": "5w3uuYUdxV652mEg62k4AdXDTRkWHKysRQDx4twzZs3PFgLpGeV6Np6uEGBHiAyeK8Aw13wZSTXm9swh5TknB7qz",
  "key4": "2x9fqEmKSrz9tDZFgwuRd1xs3mB4tCxmh85LREYbLULoajBk7G7NQ6t7BFxFgnyRQzdnwqgsWM8RWgJ9hgcvnVk",
  "key5": "Z7kbdeR2uLdjFw2aKw9o5EEowNF2jtmbyPp4qLLLRmopoo4j1j2UqGsnqPDbjAPSiX3ewPrXkD135SoxANUaWyo",
  "key6": "4W5B7Uu3wWxjruyHKm1MdmWLRiSoZ3eLAjmXjEFRxGprMjrrgieXSJf1LpexY1fpYgqq3KjBErRc3ZoWuJDbiCeZ",
  "key7": "F4Hd8w5bg89jZSJZYxRVW4jyE2V9YsnxJE7c4z9YpM6tfjWVWsAYJBuQ8VNJJxSiFpvJHFVzEvgDQ8Vcnw2oTF1",
  "key8": "2BCtvM4nGEYJppKsZmNj1TfsSXXaW7EPVf2XhEZBgCXf7yzeLoAMHs7QJAkw6kXxib7UykApbyfqnnFewLWrutUG",
  "key9": "5WiFUVVELGzP7nAyRCtw1FUe5k8U4awTirqGQVttKtUJwhsJwKHKUeB5EGp8dKAqrcwqtufWPzkd6xpxa3id1RBP",
  "key10": "3qQyZn2rSBkSaFb2RcFKwbGyXaL9LLxnT1mS7JUXyLq7gJPSWAfdwrAVDtXh2KjbdeQEmxBKU3Pu7B2NgeqKqamX",
  "key11": "2DE3cjR5EzBvtveGnRiXE1AwqBzKHMfrkx8N1zMRHGMmFdjFC5bHMUuDUZpZXPmEyYEwY1A36iHk9wR7ahQ1ADEb",
  "key12": "5zNprzjAbhTq5PMLNvtwVMCK2m1oBr5yoqXGh9MDfHVFXjKks65A981qzuiEbfSq97KHdrubjJQP5Qrf8N3KVKNs",
  "key13": "5ucvw6GraoonRoTrccLqkqYFApQAVjU5y9BvUZnWYzgq54HZJwA2gnoXWcSPsVwZGZBFQqxoqXFNhTtY1uRe8tYx",
  "key14": "2AwGNBdXQofhGaAxcU64emvbMqK1UfkcUjKyAbiYNmAM97UqMjR1FXUKy3XKo9n1XfcyDtc969DihAotWHgJctnW",
  "key15": "S64DxL7QH3RTDYEnNzfmBjsWo478DLN5WYomvgzGCrQuDYwfvaHagaf4SKWpprwuDHU8bqiDN85DmCAJRurnruj",
  "key16": "63ktKL2Mux33DNUswde9iKZbiMEGjW4Dd2w9KAkNqR7YTdZsschySEhBAmJpWt593cGHdobkxHJeSpwpKQufiyXv",
  "key17": "3kUo3HHzPPoPRgVc6NW51pbwjMCHfqGiXcxzAWAwC4JYTSSdvj1rLRSUbiyGo6SNPsyQwAgb7XF7c7M1tqbrMS6h",
  "key18": "qCFiPfH2JYRCksSvRVWqXGnBRW3w5TZuphmCznc9q4GMWyp99ux4BMsmdG1MWrRYf1QHsU7qEPi5RM3PRoFkZUH",
  "key19": "FAMaAvkGwxFnXbU8GTMdr24mDTt5Xn5JWhNVN4QvgtGtmciZzz8tAAn3bGP7xuc2Rf5QfvWHnKRpkpyGBs81Hx3",
  "key20": "jRHcMJYe4J6jgJectPBaetFKoGezK5bKJNnZq3wHwAmkiJ2tXZS3dj2tDbAVgtq7Zs7sgt6PAuLyqSWskCy6t1C",
  "key21": "2cZuRMSug3yHShRjfBCy4NZugrQJx58pok6f3G7CTyPmTK6oNt9jeUsJzHD4sGuQUSkG2C6MLw8LLZXyMQdZsAU8",
  "key22": "3aEQdZ4kFcR9W4fVS95RjDCrx8VuZmjV7t7MpCFMSuiGXhLpcneE3mP3bGGTrjEu1xGZGk1dEd7AP9omAHrdbwD9",
  "key23": "32WQT1bhnRdJfawooJHV2dXM7RQQwNF9MmtvzGjv4YoUtoQyasdQjV7gAtvywAg2yNsxKxn3h6nkC6gCKQmZLfVS",
  "key24": "2qsyze9dEHaejrNuTULEbgNVMCWys5MKcPwgsXZWf4Huka4aHiei9qv1fB39FmuzrSpzo9N8SNLW4cwGajM3td7g",
  "key25": "5a98AWdgtCsuPsj8szpowfCcdMyJsoCQrTsSLBdxe23RnoK86CgYYFsATcDrsxi7kS9pC4FsugQvsJMnSWyqrFK3",
  "key26": "2uhTsRSwvjaphDYkdnPx4MBK8B64BnryCS2Wavz84eDAmNwXECTnNZdxY854Ma3HKUhGV6mUGegGTjoKxfxNgDX1"
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
