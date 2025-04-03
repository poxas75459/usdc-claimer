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
    "KLd3EDgzs25sHhBmNzNKGLYQ9tp62PjSoCEVe1VPdKGJi5Tm1QeCPHQNygq2z4hbVNqCMRNhAwZAYW37QXG7Skw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czPuo7AGi1rQ6aiahqmR5yx5QutRT8bjrbY9746eYmgUdujrTDSJnxK8Qdx6uKg51LzahDgLFYJzgoPLRsome9P",
  "key1": "JsLZ7YjuZgXh5DWnJU6KBLTb9LGD16epwrhhCvv7v9SBSFxenVjbkS5tKahLJUr4gME8d8Hj1nW53kBtddBuzuj",
  "key2": "4jZWsopWMLTJkCeEpSdGtjGHN9nTMqNvX5TYtmS3TvfXBBjAKz9k3YD2MZ2mQWkzMeiLWV8JnpyLRvRERd4NtxmE",
  "key3": "5BomPE5otXPGz3TKj7LZCMxCyxKp7SEWn9VKEnjRLWx9HvPrdphA3GXWj74NYRBzsFwKHwk3kRtGynXCC7AXB4b5",
  "key4": "59TUqm2vLor67ZQZ9y811pN96mXFyFpZKHckBWdByY6XLSZQ1bgJjHZaxxSemxzqcCRsFR2zMLkkc9Jk3R5Czct4",
  "key5": "VFnnzbTL9YoNpuRjkzQnHF7GWgwXdWQ6cKWoMXHNxxPiJ96U7k8BkmYD1YPMqNoFEtaxFwn4jjabMPuE7LVuVAv",
  "key6": "2yiFK8oFLkJmXvDvA96kVYkzEuobPU3tYNFt3pEhR4M6AVf2NUv5hAAENvgEPvtBPs6UXFj7HQEBEKJuUf7L3TvF",
  "key7": "TMzdD9v6gELfzBHNah6uKer3JUA5PS7UBbTSD1uBYz7VvDTmMdMLtpwbU2qv6Anh38GHFF7RBjmztL1daLWFajX",
  "key8": "2ocnHSbsJg7Nsgdmp8dZcqVqX8EDPyNDNZwQkM2vSDb2rNY3faeVqCJZsWvGpkCRwMVUWBhMa5p35XjFdqP4Zcg8",
  "key9": "253LzUJGvNDpAEUnLZYTxjNdsbcE4aAyamD6FLp6nK5oTZpY8eZ95KktbHaTVgaHaFCxcVJm9fRx6yZTNJLsVo6q",
  "key10": "2thFDgcZ9qVhyvTMsAfNgdW3eHYH85BLAbZipqCn7QJQeBtQfmCT9xFYDaASgAPHcVgMxbz3d2MDiuJGA4EL8pkz",
  "key11": "5nYW5BYGnm9QwFPybJSZDtBeh57psfVo7FfMcY6dQGNT843PJ6BRPDrFQeenddfuQuVAbguZZ3jqxrz9g9tKM3p6",
  "key12": "NvNstiLEjhNAU716pro174fFjhVqPpdxVK2cFxcAkgvTWrYUnKNDDiPLdZijiYghc34NxjQToGDNBiBunCpWFb1",
  "key13": "5K9Tw71eZ3DWUJE4FrDTFQnFWSjC17oyFdZfqTaCCBT6wrWoHW5WWKCs87tfJ4UFZrUSvBuW6wWuJfL291xpnxGr",
  "key14": "59JqRta1uaoFUsQoqeMoV6vL8ZEE84D29NEdcWbf2jaD9TfrxvrFW6miMiwN84Xv8TDQJzkfZAHKZcNZxsTzMFz5",
  "key15": "2VB28tPYod1XSkSpfhKisD7UkXJyvU6Ke21MdRM5fcRSMYDESVApPDyqhL1VnFLZAHC8U3xVfr3opmz5FGxZ4o2g",
  "key16": "4S2FNToFacxKTidDY2s2PdKXFsaCAoMjuLzWD2K3C8n8YaD1vjaCD1RTHBnkUi1ZzWMF8VzS1wvVTBdUo8Q79Y9i",
  "key17": "Wx1AuLsC4u6js3LCaxDdGT7buFR3bij98ggDpaDqUdND87i7NDfuwMS7KrDuyVSTmvCTfHUtQVWLooSnAKjqbf7",
  "key18": "2VzRBJ1HWAem6EiKxc4rhsqWgq8NQJJBLNdiQPjuyUHKyCLq2YC48ejBEHi3keW2t8bQJozv7dZHUzsPrx2QVVP9",
  "key19": "rhp5rPjFEX4XiM2Aec9b28ZHWLRKwcmEv7dsgYhrLopvEG5tUVjQQM2gFRqB82FFiAmew7swsuGQj5QaeYjjSB1",
  "key20": "4WrwehEZchY4nZeRYyv1YK6LEcQ49XhUoBYBRJrckVgpD7Dcv1AP8seyfL2WJxt4b2BSams1CqrQrPqdP7aAik1v",
  "key21": "4CqwEcqyqa9DhWoTfDyfiMwfCT2PNEahoZWJwLpCWPmRhJgKfTkCieJQNBG4ip2K8dC8ymzysgLLWSXULaiW1Mrf",
  "key22": "2wUPxxNr6zJZmMdeMTwWHFgxH9VLuPQf2JK4DwFHGYPQiAfCiRsSLqbsnC5nH6GTb1Rjv8sJAE2zMFEAjNg1KsV4",
  "key23": "53vSZtKw1xZYxFsbyDsVWfpif4AW3zx5jByQBSsmCxrENgr98g5ZQyHdgqbZeEh6czWAE16W39jcJ384z1UBchoS",
  "key24": "2rCpkQzEV82tp4pf61zsd87ScCb8r2UViQ14tTkDD4cnHhfhpbvRjNmbpUgNNhFWwUSe2G2AtxzCuUGqVaBGrzQh",
  "key25": "3Uyk7wCCSJfJEcwBC7Hg3SYfeVpXZjdumcqfG4w4X7EiqSGctzbvpYhbeJ6rU16uHqFLm8v1sBEsuktgfmutGHbr",
  "key26": "zG6c2N57QqBxTo4vBYCV7AMwxiQL7NgPqLseMBxVKSKVq7hPxBzXhdNiDu3oSmwGhRyJ7HECJ1uDhXmPpoG8Fta",
  "key27": "UNywJpumc9m2LEuJpzSxi8oD588vjcbP7wF9ujkHQkjMDmbgbgopaT7Ww1pakyF2rBnaUyVXAtYx39BeTSfvPdF",
  "key28": "3MGs6YxJMzNi8Yz1ek7fNZrE2dWsxoLjxrPCDhzNv3dCE12KRpCT6sPsUFv9qNTjXSGtLu4naPjQhwtHa9MAGWrk",
  "key29": "2nACkaugynPAdABMfSv4DgQGUYYNQSrQGu2ySVYCcXpN9Q3N8rAAkbCLdEwUjUQJj6eKdBQEMXbWAzXn1C9VY7ZN",
  "key30": "5s8BYUtDWTUf7b22426PM1coftP9sFwVbYEDzbtGDKQhzphtBB8UnCjiCQqt9fjCVvRpvNQ6nzZunxFydh2y5gwp",
  "key31": "dbUf24Tkic37ZFs6rrVrupov2KqUsc3uUesJuwTy2WsQzbCLmy6b5o6hxTPYSQXsboVf8JKd3FmPsKVfm7EonSB",
  "key32": "5CaCbmcbQc5ELpJe6AGT6ZJmyKXyEsm6UEUe2kKbW8jFTRJfERMWVEwFrnDkMiuGwZADMqTjMqReskCJsxwUuCPL",
  "key33": "4ZaSdijpmNTHYc24CtnUZXti8YE6CzmaRHj1skSChYZNgaAeatATvQbXkJJfkpijAx5yamhZCmwYLfKaAkcb2Kkf",
  "key34": "2Rc2WfeurPM7UbZNqEwpGY8RSoQtrWuunsGg6mJ8e3cjDB6JzYeww3tPnGViP4igKXeTejjoDNP5f1bd4LMHhECa",
  "key35": "xEbwrMqG55Dq8s7h83vdvr9J7s8DnH51Zg7rrWE6DX6WibMmyyJbjGoL7MZBjCthenp26UgduTmx8YiZqvQmdrM",
  "key36": "2tMDrW3JQ64iVJAd1RhmhX7YE6zm9SR6G11rp146tELcV1MpF9by3Typ5JXydVLKmAwLm8qqgrtrN5Lkv1oNjzuK",
  "key37": "4BNDBt4sZHq6qVA2172p3hz6EaJY5rkmZvNyeeRsx77Noip1egQ5xUsnvG1AqcmTD6s3hnn495rig5r9cBzeCV8v",
  "key38": "5YH8Eursz6WiTrUXV4GJ586H9UKWZmL8KPuGi7ywxzud7K3FAC7cdjyA1NUAivapCBL6AsJfK9uvDc2ejycmm5WY",
  "key39": "4MkCxBRJnvx6jENA1yWqGb6HNfxQYC1rQKLpXGXk6btZgttTGcAp5bjESYm6qSFML2ZWxEPWeC689k9G3FZ3mg62",
  "key40": "2yfQ5ag1LMqp9BGWkAPNns7mTS7LEuLbmHgrWAuNsMx13JfmM738wCTyJEmSSHuY8JFvqRHdSxeQDj7ibQzwYbyx",
  "key41": "57PcxHVMcYpz52xantNvFRTnYwgFrbHXyG5xE6RenaXLThjZjhEpuj3knQCpt9n14bGsGhCLV7HW6jCAZgare8uA",
  "key42": "4GTNYKCvo2Vr5yTWHDWhCCXYV3PuTm4tBjn14gp8rpBmjPJYdvNa6yWVeNJDwFd3L5FrE2kSncBS4qo98uFXasRt",
  "key43": "64Kw2YH6FVAoDHUGmNNpoBgP4Lg8wcypz9rMCBAnTUo9qQh192oWtJft2K9eH7pRjrtPM2kJVjX1eDnvSN1gCkaU"
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
