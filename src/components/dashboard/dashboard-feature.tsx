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
    "2CyMhm1Qfo76rEr35XHUuH5pyRNtDabNt3zuQnBBb6PcGc5Ey9bDNEn8f3LodmxFtCxUwA3BjfpSRc2cSa2ScbAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yX45FbxnbRwLFWMPyF2soSENZw6xa4zkbhA27TyEC8mADGjnwQVrpHwY8VWjNrgmx7VBfREMwEpAsfnryCvaT5y",
  "key1": "2iCdYZ4Kfxb4QciFXYY5FwQqwgcc2pApojQvAFf2HCVnn2RHpbuF7QA3HP53PSY4rNQQ8Nge3T8nULAsGeTevNZV",
  "key2": "45cbF8pgzsBzYhUstuecwktK4ah1cdqbshb3J9qTqZckvyxzjW7555v11jPSkZj4NunwL3Geg5HabgvMgr9ZRKV1",
  "key3": "4RvQfhmHk5vtNfHPnJTTknHLdNCW9KVryEddDmdRmq89NYWkkrnpEoMZ33oaXoassjHNV7e4LmZMy57UECYQUhZb",
  "key4": "5dFecgMH1QovarU8crvVdxEkkuhkSLAAehxxDyM1dJw2cPSZGZD2fHSmTGX8xxkJ2MD7hcXkKAyTiAxV6e45XQUe",
  "key5": "9pMK9BvJF8Qdsb8MbEox2VHDdhgiEsip7fVLgWfhFh4G69CEyNMNdAw8W3ad7SEAtcCG7wsBTyReig8dr56BJfg",
  "key6": "3LmSTa84pwjWdJ4zhgdLLxw5EupkaChBMiT1CwkkqgZP4rr6KNzf3q7sQcv9VpFMfTZjRMLTyC3Tccz7UVboiTE9",
  "key7": "2f1mk8CyPdY8WJC934JoxAfpNCXnvsF2paDoDFwCXBPr8SZVbWrpvV2XTW8QL3xydxWNoHG66FHhnbnsvXZZw1bo",
  "key8": "82kkNnczoq4imh53z6t6EvdSdEv1pgLjmx4ZebLuJ8Lfy7mMS8JSG21bZK7iUqLLbRTijE7WAtCDAqV9PvboxgW",
  "key9": "3L6QnCjsmBsLb3cHSy4zogSAFaCWCCTTXrX8aateidxDwqHEJTfcvmXmArV3i541jTrm4t87KaiSiVmJgik5iLL3",
  "key10": "v3YfXn8bzCTDV5LDrexCKH5XzZG1L3sU46BknWvcm1KCHLkEbiYsQEKYDUriHzMEgCpguLAityCsRULw9TrkAkq",
  "key11": "4w9nVNA2mJVb6RqX2b1w6o6uEgNkuBv2ZruXGy793TxGdFKk5bfKuaU4iRYWsz3vPMw5vWfN1uz5yNUXTajZLLN",
  "key12": "59qX8uzTygN6JDubQm39sP4ubGURcUTyK7rjaC4GhNob14UQMfmguH2AUgpBDJBdzSX4JmK1emL85XqoXGw18qp6",
  "key13": "3dahS4T7JvA6cYiZjfX7jkwSJbwjoAZf2eXWpZfwZeijFhFAVnyYDQ15WEKxssaZwmaA4p3cVgYCu9HVVstrXGXE",
  "key14": "VhyBgp7NiqmtLjXgoEJmz7JK3KigDPNPSk84dECkDzT154Qsa8pmQByQhrgSgs6npZy9mUBAykWhenNS94g2adV",
  "key15": "4qT65gKT8Ncp3CkVCnHg1SaY4yoY2hF1PAqjLhsWeTP2PZKSevkyBPWH2mRaHGPSiPVs52TzQmuanHpssPLs3XsM",
  "key16": "2xTRAcxHju5zKZEhyrDQXy5r5FrcM5iefJjGADMcefQyhi8XGvRor9buF3R5CSQTBGHJDamhxrK1CyzLCABQRG9P",
  "key17": "2SiKenyt4wcYL1JYznXHWCCBCDFxNCAyZoUH4Z9CAF5fiPEZUgy2ArEC5xBeUks1TocSmvk2wijZcsLNL2EUDFyQ",
  "key18": "3XiNuD3qx42orrGBGkEfWXzYGBkD8yMRkHNfJ9un52DheaRKCEqFAgTJwgLDXqPs2i26NRUKecY3M6hCu6PH1U8n",
  "key19": "3iKfFpYu9AXN6PfxtsJf8r96x7nc33KE4U5hCCaP6XRUWCVgyUcc2xFnsxBGznLUxA6aob9cnKdGp2Xz1upaLQ3e",
  "key20": "3VjxaLxfHyKLcLvKFjd7KXXsdy7FDgMkUxYZdcWaLaw8QnE4ndCtTXvPpjDhwA5uC9iBA8TpRLcw5ZzH7siqDWdU",
  "key21": "3yzjL9eTMGnSRwNwBbteXDKwvAi8QvuJGXja6YMEoRMcij7VYaot2b5k5ahcEjX8RvJSSaRVgwRKUrsZFw7qAneS",
  "key22": "5dSxcj1WAj8mNEVNhuasV69AK23hLKy21AZ7wEaoStbKhTZhAuPs9g7sjwXoqyY2fae3SAEM2VddkouwPWHN9n56",
  "key23": "2U6kvqaJ6cG87sjbnZK9aGHfmGHgE9Sn8rx8noXnaVWVrHexf1bkKmrxseN8mshH7715C5UQSyF1X8BQsEUpM8xF",
  "key24": "3JMemrFm22Nj2MWuWdDjfAnwTUHr52UcRwH69mhgshLoNf8rLMQ1TLx7V7g7xPb3C2JY8my7dwjrvnmNMUSkDG1J",
  "key25": "4ig5ZRW8iwS5E2MDQh6ScJ3AGEfWow8PBBvdWumc14wenWxFxzZ5W2BBStThr3fmtwwojetYAaKBi42DkEwmp9ap",
  "key26": "2zgtD4igb1Hfwgn4XYfN9adJEApaFGeQcmGZkm1CG3aazecuJ4mAZosyL4Y9wbwNsrpvJ5rRBfa32vMDxWhcokna",
  "key27": "57MBu24532xv3B1YRFXgY3oC5kAVrturYPZCgM9rFKaHwVM93ebJKNgryXBWh8G7bnbEpqHpGUfeE459yW6H3K3L",
  "key28": "64A5KnQ9GyQjuw72whfsFVWPeBtKKpQwiqtGzenJdySAQtsvp7zrLGVEowSXsnSJaVQGinBfhDZfm8Ngq18SSYj8",
  "key29": "4hUfSikfKxLFn3vSPjssZCH7fG91GDoQcr7qxqYgUE9een5iT8ajBRuGq3z2GMnqN1AY58ykPst7XWrfLN5vCaAa",
  "key30": "kh2j2FybdFt6S2qNHtxQ2gcCdT9YobCoPnpLEwL55No4huX5pcwU1DLebTQzyGyi3Wu1E5PQDo1EdQycugC6VGp",
  "key31": "rV6yGQvz6pNGXWuys9yu5LHncuuDz2gTqQssssfSPHH7Y5L6q1SfbpRWRdZizE41FKtJzwkCEDo3gtEzJ22yngx",
  "key32": "5apfSH3PzHFEdUvymHGdECKSNLJCzobGWHzGtcKQZEiRhnpPH7PdM54GPnXsJQafr7Sm3R6yK84Y4DgY8hC3iUD4",
  "key33": "4ViFVugobvFR72RXSh3inevHTLL29kxeM1Z2wrz7NYLcLyCdqLBRrY5J5KLtcXRwdU8Rc1tCDb6KhcfWJhNz2rPv",
  "key34": "4yfFPerQFtSVrrf1pEFN8BgZw6MkWS5WrZTNC8D7FqxfSQz5YvKxYZGtZ5dQm2pXwCbuTxhMxTSgohKTGN1rRQw",
  "key35": "28Sw6AdNmUcS1LMDDyZAtfjRapTbdC75jZSHpQkwxex5dCDH3JrJFSjHYuGM48uBLFvtmfBgYhNssdU7Z2QQGTQo"
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
