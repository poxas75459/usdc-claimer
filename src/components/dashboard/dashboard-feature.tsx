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
    "5j6sYRReSQyrdB45QmkY3Q4yjLBwC8AnYRwK5dHHbiZGerwXkwkSjwB8uSpQhHwu13afNYKJZj3Ezp6JnSw9KGdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLij4hS1DK1qsfWZGS1Hq9tnTf3gLSPQC5WDKgLKr1iVgEXVtLEadKJLBpM6zJofSCHvnuUbf66MKPQSHhN1RnB",
  "key1": "2gxfWn9fUuW7ND8XNi1ate2SbrRWqoKF7hHzaPagwUBnDdKMx4of8pQW5Dtz34jt8Bvmhwu6X9FCaBcxkHn1kYrZ",
  "key2": "3dvZL3jL8PcN84UgmdeRw7CMderngUhx3vzSMr5bUJUvuMKqbyoFBZBMeNkZh6VmGjNkCQjY233CJp9KMqjFErV2",
  "key3": "4BTZq1kjXKd4bkNbUJnp5taVC5CcQuz8n4sK1D538fmZJM9R7h2kSsF3spoJo8oh3pKzKY9PVUTaZswrFxZNgEPZ",
  "key4": "3aj8X3DTKGgGS644JnxnwRcWtvP2FLYxERQSshqAZCY3b1yxHQEykQUmmSYFvYdPPsRViumhdLnZT4deeh9LBebm",
  "key5": "2fVM5JgQ9SV53SfGyDmArT32ohcwbtr5sp8dM6WHoTmm2jRypi9otMe5mFhnNcNKqpGkRFxtUVsR4rChApRiCh6U",
  "key6": "583FihWKa5TxV1Ji6UH6d7pPdhZeV6xFk7eKwcf7oULH6yxJkBwsAHsqK5n1hfbm64snBNSfCuWdz1xRFmX1LvJa",
  "key7": "yd6uMj8Gx6MDQ56KigUFLJeRK4XQWmsx9bh3rMUh6PZKVSQurFvyrK2rdeRNaqxkfcicWaBGdbR6ciNMRiam9s9",
  "key8": "5psTtbHk4ET9Xri3qHHXcbpK4wvxjRXTtLhe1bcpY5gxRUTBQDnKeta66JcoaGS1QcuFgiKkN72R95EqsCBGtMfG",
  "key9": "4E3Jsf9PkYx1mZ3fTTjPQXnQGRkZkRJsKEwwR92jDxm8LpZpDum2uJp8FmtsnoPkX1TdoRkYTnD3GrGMaNBmD4wb",
  "key10": "3zRaDvFC6QPXBpRRMmqNaueDSdt17DgLUXL32hkXQWPEMTb9L73fzcQGQThM4VAt57zhLgzxvbDnGqTsAPPG26vZ",
  "key11": "5tToNPwcZUbduo9rvw3JKJnGCaEhb2NGnVUX9JjUqW5vqUsaoBe1FF8NnA7zzp2qs4xFopSuVsXScjHEXdsj2vKV",
  "key12": "3PysuSJ4vcEd3vCCcLTUiKiqxrV18Yk1Dr2kjuD8HsAwvopYefTUrYyKcCzNACa98Bj3Ei2bJfjLFjepATM6zk9k",
  "key13": "4NBBUNvYnm3e1QHCBi3QQ1SvyWNeUTVsFGQmRUKzgkkZE2xYfzrZxdMGi7SiDhW4eeKYzXaHWFtBu1CUcsboHX4C",
  "key14": "tvJFXjPe4mY1ihvYG9h4KpLywqJUQGzGXbz9aJ6ds4kLxMEEJWtACGinNrQzNcP3NiKca5CuyaASKayyaLTMcLF",
  "key15": "4XnhyMWiHv7RdaBiNZsTAAQoR6YsTX3KcKrFikKtYb7kiMAesT5gKgm7KJ5Lo4fNyeQe2rE7aNxF8i8AePRL4o8n",
  "key16": "45hG9mLDAm5Wk7LU782MhW83yjatgZkNrJPs9MheJQAeCddP2ks9ph1zD5yy9W6skBY5LPjaSmrcgae7uVC776Sh",
  "key17": "3AwcFXjRC4xatGvo1fWEEeQHswiMWDQqtDtRGsye1PhY6XkrmL8abAhuaqcmLaH9HvvRKunfnDG92NUiQPAP7j7H",
  "key18": "3V9UCZ2UzFL4bNYcXx5SMXVGcyo1ztbn5iDWgJUHzUwUMdQvrU379oo4sFC6c9PXqijVVfYhrqXqzvv899tcAvch",
  "key19": "3oGAxGxx8FvFNs6Sf6Go7KRtgVxncQ574BWptAc9Pw5LZFofX7qh6R3A9fejm3QuhSVLD4827L69hx3JmpyxSdSK",
  "key20": "5a8hSpdz5Hy2jZeDAS1Mmk22fDYyjCXhkHTPa6cxjSaNrtzRc7naHeoLY4NKWs1rhPvVRVEghdBYazE7g2Q1z9H8",
  "key21": "YbbFoDsmifJc7zM9BtfVbmQMwEcyJYDExjcYH6B8LgQcQLe3mHqgnUVvfuKxCBvEZAz5UwrFrVSVP6eUkUBkM7o",
  "key22": "xoyu6Uaw7JFedmz4iHdQeba2DxYGFUjVJ7kcTc58DB478aWEV56XrBj6JKWnpvFqNeeEwgyzAyqC79Kf128Q7Hz",
  "key23": "on6rFdyjYaiZtLAFa9QiHKb3sNqYVLhDgGBEgDCUg4shNY3WuEN9bbBCrd5uvhTKa5Uuf91VAfmWyp15rDAgioQ",
  "key24": "5Xz3n8rJhyKBVC8mmRLDJQC27zKrNVmHSadteMyuwCV2gNb9vfsnLtsT5jYh1vo7teEK29Ccf1RPxjEDM5HQdeLn",
  "key25": "3uXkqqgNJiwtK71mmsDHX5NN3YDLJGcTWnfVPTD88hC762Lx3ERHsj2Bq4GGstcp88witvqULEFsCkq9Wuk4UuzV",
  "key26": "4XrujHzXZQGCqYXgee8qxecCezbRjf6rSp8T1WGYEQJA7P6xswAcze53dRJCGHs2Lo1UHoFcSY7GaXqSyh6LVX2h",
  "key27": "HAstoKqYfvSP9zZajtjbtgyLFCsuSbWhB3mYs1s77DuiHe2PPLrT2wcjvJyd4zLhQc1WDLUonKT5i7oQ8TA5pY5",
  "key28": "tZnTxAnuNVuGHQwa2qNN98j9YUAt17QJPuQT2t1DAir3cm7NjHS3baFtvoxP3Czimim7sDPXQF41aV8YH9MS62d"
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
