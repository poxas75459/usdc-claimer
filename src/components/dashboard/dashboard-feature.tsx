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
    "3VxLA9LNPdv2qneQLTQxpP8aDxUm7L4vxpt6SukvvuADY8f3vvKQ8768uTFbP9VeEDUaij1Lk74qkNQWfEeNgjFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36zinjUFkz3eb6JnaQKSR2g4KuNJYyku8z9sH47T5Bn7hHvyNVJRaj6VC4w8dzs8F8BdNSiGnxdC9kRz1VxSeRY5",
  "key1": "31rWGLyqJB162MLxCyPGeocJcdpfyg8Cc7J9LryBUxyrr4A5jywD3oZAa7bgY2h84zBXKVrBGp1JhcFZPQoz2Szt",
  "key2": "3K2RYTiqGmoZyTVniMmTzdptYKj7A5Jy9xKuU1ME7ukuyviA22yh6hUwyXapPEsykmkHs6kGUS5xrKJ4QLKNwWvB",
  "key3": "5mJgT7WUG3GbLb1Gy72n9rx3QRDrgWy4in3H3tKwDane2JVtiFN2z2doGnT3JAaX7EQY8NdGg5CDQ4fZS8mgN6u9",
  "key4": "27n5cgctpNsswp3ybL91kNAKZwCNWiz1KX2sEdUpUKqhBsyRQ6xarJFbgVxuvaRKPLtvuEadpD6aT4cKz65aaS8v",
  "key5": "4vKmHj12qAF8gK3G14CSq3i7BGeMREmiuq3rjthW8FGMDLM1hMa4S9NXBKcUwiWQ4T9ppv3Uidnp6oJcjH8Ycgei",
  "key6": "4cL9dgQoGkC588T5mv2MhCmjA3Tp3qW9juxzvr462wxmAFqH8rZawen1sVrejcgPBUL4Bk1Gms53SRbW7XbwRnJD",
  "key7": "xTDTPVLidkN6wvWVXJBwcxWnGKpYTnrXvhtGz134iZMPRpoRo48hqXtDi2XWJ82SzK2Mr35fGHG9kaRuqN3xcyH",
  "key8": "5t72nKrRi7m8oZju4YzbcEXPMnsoKcNfDQCDaLc4k9VKCrYVM7mHjJwCSdoi2vGwF139D4FSi8TUB6gh8dVF6gph",
  "key9": "pHVL3WRakJBAc51CV88UUHtGUnzPecEUoAXyugWEGmuYPxp2P4VFujFu2KLXPe9EvpLN3QrDU5CLpujxFXqiYAR",
  "key10": "2SNsa8RMUSZndDs524Hae8HLKoNFZrVe9iqWJ1SAtVMm1cSyZdn2yTTshAWgfLTfpMEYJ5C4umerzbquoheoXo5P",
  "key11": "XnmbZEMFX377jYiEZ2WLUVExUzHKaspyGzK99pVjoiywba7wnr5r4oiDTFCQtPY9PumGwS8wBRzgPBMVhDBE1qq",
  "key12": "twRmYpBH58cJZgA3HAg2F7QFUNVR4LjGbPDFUJMqBS1KCWrW7nbieaKhMK2XvQjPyxbrhr8XncZ18WMJPa9Xov8",
  "key13": "2vjdTiiJKcQzAen2BU3EreT4BPTVb1GoNrrRwkhzYHSFaQFQhZB43GaCGiiuusKo2xrK36YZvoC9BnDNy2bRH5jD",
  "key14": "1qYyHaBHaJtuj7zfZH49sGDh9oB3GDfprELhjPDSWmBZma8Bh1vhWZFRTiAVysAkjKwHA36QkdYVGJUew2B4pHo",
  "key15": "4D5jur3Gu9uDASdhaMsVedcs1HqvJWEtNpi96V42Wg7jtw71uFJSgCdD58TELHvHxd7SGsT1MkPHo5PJNjmQ6XNM",
  "key16": "2nBjmck3agsSKdrdTcwGvBirk6iozYMSBrga7qboRGuKNbwoYeWqQPQommRafXSX1UTA4F2bubiCiyWCud82UrqU",
  "key17": "ZaAgMhh7HFUeXpF4rSFFstCCFChY3XcZ2h8LChbpaHxWzHNmiXj2SscwaawNfNuZU16NJXw5FQftBxL7gpBibJV",
  "key18": "YgQGuMRYLYbTWrjbutq5Zab6JSwBGQdjUYEpXaZsscaT8sXuwSpFf1R3mmB943yUL4iDSzq5Skc6JPH7QHaCvd5",
  "key19": "3vSb3agvLvMRDcCWmHRjzouGeFexfoVZL16aADsuTBBHSwyQ2Bvn4rwrYAYAn33wu5wL92pdkGfzMEeAqQW3fPmk",
  "key20": "433axzLz9pMY5YeTUZczEfTCwgtj9nT564dvcCau5sp5jfcvXNqbhHrN3AFYRynMbJeyLBVnPqpd58oXHUmhAezV",
  "key21": "Rxn1ASTwMyBTtMZsJwH9ZTX8Fj6iYaJ4ZbamYfmQ6HSM8H2f2vzRyaf7mEBAmKxgLjXTY2oRjkG4FP9ht3iGC7k",
  "key22": "46c7kPZ57v9fRuh5M9DZhZvoJpVi5WMrTWYpKrLbtrf1Um1K5xHF14pgweeYdBqjkq6MB5mHvzwahyw1dCzpRaih",
  "key23": "2r6m43sUyyQTjj9kfFw6PTjAnoBVWzDrQRafzqrKcZPr6gA8rbYUovJRi6srP3oCjJqyXghiQZeyiGpPZXWzuk85",
  "key24": "4tZRRsbEaVMc6nhqGkHaXaPBtNf7HRG3em17RbkS6A6UaxDUJBgn5Vd5Ra41dV62TQpNrziss5t6qnJfuLQ8Ke2q",
  "key25": "2kUSUhCmTjhhjSsdpwE1qKZscxQ39YrHRjnnnCWpgpDAvGA2WMJkt65VM8bFzreNWxvUiSNRVKmX8JBVsxPUrYss",
  "key26": "pKUBbPicwtpYHWJZh6JKnPymAw1fdPb7JGWXGkYsVEhgCgBKsKqHnEqU4NmRNLzGi3K6aBbn9rmJEZ2HoqKMQLz",
  "key27": "3yqmb2z1whjQnQTj4RbKY7MJZrnYHtofWUKWPFLx12d788EsEG96AP9W5FwopYSaUjeTDqgn9S2pN4Q6UbG3fz8p",
  "key28": "47UUrb5NrQ48c8vAG4pdbQu5aMXj1WSSYWFQkEUjLgGrgtp23iBYxdEtTBm4gMceJYXh2MYNhBfGFnTcxVtmUGkJ",
  "key29": "2324JtwBK8dmbVdUPXizUdySRH7D2Jd6Y7bkf3tZWB3Lnht3j8oBrr4rLr1G2rewDN7Xgr2sfXFvArd4XcfaYZk7"
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
