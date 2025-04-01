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
    "ogFhrTP16QeE9ihDhrZn5vQZY667LbwwfwhRpn7MtSr8rxEVw6YgQLA675GSPAswF63qihHejUsWB6QYoATdkwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kf4LpbQ16JYa1VAShpd4nDMCw1LWh7hirHPzkAYJWkFYLbTDNh2HRSkjvd7teX6vfX2CzjVHuC9xmS14qF4Uwi2",
  "key1": "67ffdgHaGeHZbNyTyW4RpaDQXcH48z9jj2p31HXiurWyUYgTCqxZgrCzPAAqmu8RdtDSDSgTbf6XwVaKUqJ8bpKS",
  "key2": "32jBs7kNbvHhzWyupwqFK3A7PnEn5AaK6xp32iTMVfBPpMw6D7nozh17cbLikzkwTjsgStADJKWtW1YmyuquzL7M",
  "key3": "3rEut2UC2QjcHxdkco1EPw42RNkwSp23MJewBNuN5y7cacoAH5LyNbV3M3k9i3KVbKdJBKNpZtARoPaj9AvXwWGi",
  "key4": "5eqMR3zENQjcZavGP53k1PyDcKfh6o2sMByirXNqaik76He9n7xFpj1tFXhUcZT5S9H9BbyphFmxQ7QCWDoMz2H2",
  "key5": "2QtLjVufYjYa2m8rA98uXf4rQqVwdpFsvvoVv3ivYZZDvHDYdHHvnT1Ro4Hqu6TkSAqD9w82cnQGBV86qJeSgTf2",
  "key6": "25mDqgHgMxhBkkZBMM674SUMHtU3MVkL3RidzqMgmNrPbxJ1iojbmF5YKVTiSSbM8c5aC1gUzGjySRxxY5z6EWEp",
  "key7": "2v6ZWgd5efv3zgTPdBbQxP1edPhYkk8KFG6gicmWSk8Qd6FGZrZGZ9WmsHjeQPwtQ8XqFBSRneerGzpgfiWFkFx7",
  "key8": "fQgYw3fZE2GBaFmRwFaLYmHBd54nucjLtvsrkkrxM6CPnoT1agfy2oQ1UEkB2cSXxUPhhtAP5szjXtEzceXJ6Hb",
  "key9": "5mcBodEPjrrJNdZ3dhSu4onGL13sHNQ2L5jhAfCZiiKx7mmyfqHubUEP1XiCecMvjqpziFBEboVRMZy8qMUwWQcU",
  "key10": "4QBd3wQsLYTv6aZn9fEFABohamGDVKZptrJFR1PrtP6gnbvmuyEhYcXXpG2iLer2h52uhizzDnZTaSDhaLiL229Q",
  "key11": "2vnuBeUDz6LU5MR48JgLNfZZ4WvWSyY8e3CZoG2Re6hxacFPgTkdVqnH295Hgz4PtR2JitDNNks8ypaKToXjz8qG",
  "key12": "QnRYPP7DmaonXqGqmBL3gDF1H3Xy76uXqJkTxgT3uMQVaemz6eS9aWZqtqnPTdRjS4T53pC91pbYDz3NM79hUGA",
  "key13": "5XQJuv5Pyz2sPkj2onENUkPYsmB9LQ4JsVJ1Uj3eBi3e3mPsmhHaAu3nzC3d7ZwPYNG695VG7Vf28qU92LnDSjw9",
  "key14": "4y2PHwj1dvW72P4EGDPDQ8n6aWQXLTVtFTY3BZ4dSnhE4s4dE12W1xM7wUbkCTq1TWDcKuvX5diFS3huUb1T4jiZ",
  "key15": "Qn787pS8TxyHRK6tWmKKjNf7vCivbzmmwVxZG2TeMvj8qEEVLrMu3iTFCa3CBGq295DmrVychKxe4ZStYDqMcg1",
  "key16": "33jG9HXmonrsU6wrwQWKHXghuF7ebMi4uX7zJ8M66WTAAXim1AjZqBsHq1yM1QumJy6Nphi5NJ9coZeRC6227BEL",
  "key17": "645sbwiTa3wZyWjMx7CEeVZhZyPJKktHPTZAEYzazLyebLvXwXPBnaaJmUQP5165QJDg8qJ937ZTdQniqe9oqQno",
  "key18": "35zDMWKozwg64iGwW7WqMFRHSPJBhaqQCpwwCLvQugVAjbFzkmg3v9oQXY6MibKShhwursSBo8ToLub6xVMvjXWC",
  "key19": "2szkpqJTd24d6w5S9zPUCBeg18ZemAzrjghvyKEZwhKJkNFbftoTAhWVZtroGCDDV7SWRTrHBCFdWMapKDdaxAUP",
  "key20": "3YyitKtUwV3XQPY8pbY2veS6RYNyWChiMgCkSqum9QeXWT5shJiqNRzt6XGfgbCRZMnAfyHeY18AMuBTaAKLsuZb",
  "key21": "54o2TJuqky1ttr4VWQAAT6qHomiMWjvxUmkjmVFW8oHFRzbePGTjCnQWRdtX9kjxxmP2ceto593mbo4vYdsM9ATh",
  "key22": "2ufDuNXehJtWN9u7ypvJxogN4xQaLwCH8CyHJsHy5Ce7vVbPnkT5CLWNAt8GkLkXdX6KHxwmezjpN5AWtGu5vmjS",
  "key23": "4u4nfX8UMySBwQFx6c5ju3GGkHLTT2f6MzfhWNJjJ444S65762fyf2XttEHTxbzMpM9jUueJtuXEX2zox9pRyEPa",
  "key24": "iQnoD3XgmUDkwmrrmUvZW4xYzNG5AHm1QHmYE1jL5QEjjJjTR1HYkGqP4c3mA3QxBrBpk1Tfbf8bxVKXJ9vRNeo",
  "key25": "5e4A79Hw5h3hgYwUBJKjEdimzsNnVFELTn7GUt9M4Co74KXPJhNF4Mw2pBRw4kxtfPnQVH8Y8bCnWtZq9zztWKVC",
  "key26": "w3auS4Xy8w7AhxkbrJ4ahTagRYzSDu7Ki6c8gHsLWVkqbJG18nQCgAWVkuh4ietcYpVMF4N4bRvMCFT5byx9d2o",
  "key27": "46c4kX5D8QbuiZ91kGe4zxtCEKJsTsX7hvTKNNUt6qkZbb5ZDWqr3kFBNLzS29gz6GQNrt8DXMbxQjoWFV8Ak1Dp",
  "key28": "4FNa8MPHJimEbdwBrvRTyVby36WHAsDLRpGjMEB55b2byWYvBG4cHhwCb3BLXY4sZJfa3wuPWhxfZ8S5kd8g9WdZ",
  "key29": "2a3aeARxbwEgtxVpzxsbqtcGr7JvxzikbRSJGpf3mCFURhqUahN8DeNWrJLbthTxKmhZeV8qnZZtPbk1Z4xtLVQ3",
  "key30": "3vzH1SE33QCdP2jBoQjAkKxjiYuZb7n9o6ky3XLm7MHqVT4S7MZEYUQHHvaGbqK3nr4LqCnaP92eKRMGHLZ28Vxp",
  "key31": "38wiQvc4JBvC4cw6Dkayhk1tdP4mRFMjELn8B2DHZnsudWw4EpBc4mA7BEGmuXEuszETbxMbJVYZS4amxKvx17Eh",
  "key32": "s4JcHgUSMGTwpX8CSzHYySHPWZ9UsqRFDafBAd9ZYub6G5i9XVW1bjFAV97Bfp4MR5QSSJ7igQ7gqhZ6trFSjvE",
  "key33": "2mMp7fQVNk2M2JNoGXxTqeDaZEDwzigj4SRQvZi91uxiEz8mihG1SbP7CabF27ZYWbU2uNzypGqC4wvaKAAN6mMy",
  "key34": "38uETdYuvufEjuF5GKK67Bs8QocVU2M8jWQcFT39pPAq24Zy21Gja7RZpo4RKdizX961iTAB5wRc7PFzsq2CSTSo",
  "key35": "5RAvWn7N7jPF7X8QMTVQkRe3k2RXqzKq3pcmihGqYTzsLwe8RSn7C9NqWB1KRAviWVpx3PW4y6vcThHYTfGAgZZP",
  "key36": "3xgQpUJsYRhvAyGwy8mqouoAcDUnPbCfg6EM9cZnycZC13i3BegkdMHpAJHiCroVqG4uU19LUCQXEuGTSKxeDuDX",
  "key37": "4VUmQXBMTSghZcPDU13w9co3HLXkg3PY6pL2qVCi6c9aEfmFzafDgPjSwuoCJsxRqJpm3tmXKugrA2yGeDpzz7DC",
  "key38": "MEcQNYvpEdZMW6mbEpNY885KY1CJLYgWxemAuzS7Fss8ErZNoTXggyBT6p6DcRnm88eHx7RLTAxtUXQ3F6xA9XB",
  "key39": "27XTv59XuPW75kQSfLA3otrACnxsSCzhyDaF6b9eg3KSM3xfrrVqc21yMW3di1SQr5mJr4iYHr7vxj4yE3Rgfs3w",
  "key40": "3zFndc7S9ogshW6466siYAfR4mLUy1wy9FGSBUXJvr35dDYFBAB9znR37Sbovn2R9JPe13gHHXaHDPVzaiJcqJvE",
  "key41": "5y3RfGAmAqWLeHzq4YzixbmyHxh13sQfUCNR4xQ8JKj2LuDDVXo4FpKRTQafUY38saBTqiyBVX1cwRQFDvcLwh1H",
  "key42": "3FsW21BEkWsZB76Usi8wUYEH2Mgmq4vuNTNMXvvYBesShvCN56i71yXVndzM5nkg6Mm2SgE1GvWCWgZTeoSjMi2G",
  "key43": "4Zzb1UpRvZqtPzjMHGozYQsw7ycQ5mcqmfa1Bt9iotqRMWHr4myZaXZU5bsCv4kPfbYUMNiAQukVs9j9kugnFvD5",
  "key44": "iVsdnZyoniJUXLSddQMDZzmxLwnFRgUhDajGetpF3E136ns9nBHaEwggQrkgdERW9FFQUAuqsnQRG2Af2whCvVL",
  "key45": "2s21KXhrtosfGFnA756H1pdUKnaaxTJ1SJsdJgjJeAYbN9PrMhfbbHoeY4LnxWNaRcSfu4age9wYxvN4sxNbETWw",
  "key46": "3AjNBZkCNVKT3Lrn63JyofJnrEGtugCzJEx95GRqYpPaznJTMHeSoE7KRWXuz6Yr1rcxLgJ8tEtGtxmyeg33EZQ2",
  "key47": "55tToxej6sn7ymb1c8NPVg34DbkW1jfzwriz1TUi7ugt9HA1XSpF6ZuXkCxZd4LotKT1WKBoRGf7WK9B1QqvDN9t"
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
