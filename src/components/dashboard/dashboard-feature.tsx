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
    "2CB9qCyZkM4Dc3zp5grLLFK3Req4tSxQ7K8tHcpb8HVEkBR5JT6wfYBknV91hMW85YDaY2ipBZEboTyntxUShFo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmEk2aRLcVRyWG14vBajUpnfEWsJjqcEoYiaUaUzckMuH3rsT1BTDBFYmgvmXCCPTXuUosTqhzrewF3spJk1DCp",
  "key1": "62CZDTf1yUnC6JiXXVfMKQYFEerXwh4GoHqKqYiY8v76V5uXm8dvX3FNYuN7Xs5XvnSEiApkCkuDVsGYrsNDpAeN",
  "key2": "2hd1nHE3YPcFCzje6xeZZrseXHZGN3xZNrjws7NZ6FUfbHPvSSQa4fpPKUgkftW4iUqUSoDYGTZjEjCej95vj5mz",
  "key3": "3q6Ng9LnAaGQkq6gqAmC9pwiPPS7DbUdnYE2KTyKTNrBKuYy1TQrxE8d7hsU9iCgbAKCLgokorNtC6ESiXUztTKU",
  "key4": "4A2uWBpB2DH5584E6PKPBKuqjdUAwQu24m2mdXPyUxzKp29rquK7aBYPNkc9UnRfd2oBDr2fkcq45Etb4N7dwiUF",
  "key5": "3U1CYMEuNkm3PNa8tQetU4CTEWQqTRzbTCCavrxVAEBUJEjw8a8Yg4A9TMSiuXm8whortkxBagXGRVGsgVMkJyzC",
  "key6": "hvSZy6vcsg3AeSmcAotdH52Mg4m7r9KFfuL42z8fq9yUnBXJv2iYCjk2QfwAe6TtTE42pPK4LZQMz4qy4gwCj4G",
  "key7": "5uNr5K1L7ZSxdmNffg6tC5XJz4Dag21S7G7o4Pn5aySPfL5jXtUEEtqPBKw4zncEpLfmMZhqGojG6uuPSgTKzofn",
  "key8": "3Z7gipmrokEAqU8THeqxPHDwjJbXfPYwNpN6t6bBUiFgBfw1XLDqoq5o6XE4q9HoU2ghB3NVA6HLAGECw97V9qL8",
  "key9": "4wkk92NwGxM15iWymLC4gNk9NaYCEgGA21LUS22xsuudfNVK6tqbNZMCuThMaZSAZrn7gbjTUyZpJsSoRZPfGK5B",
  "key10": "2ugNcsYeHiGm4eYifepHFtP8JZbCEjvzSLdyPmjfVqS814WQfqpNb3TDFaX8FoZzsPDchS887Zejb6Yz8hrZ7gZ4",
  "key11": "5fAYXtdRK7AQZboqJShGRgzWCXxAZUM3Bu22ZpkurcxBdKqYmyZzQqLMuCG8iwjSp2qnNz1gbKS3dDmRk16w9GWA",
  "key12": "5UXyd4V1rGTBGEb8AAe3KRkpjUhP3FzQnaqeaHkCc1SavDMxy1WR5GJu2BdSadfFTTxknPWVcNuWkwE9pV35YCFu",
  "key13": "3kdumFsUEyVWisycAjUCB4KrCrMmh5YMY4ETkJ8mfPXxGPh55HDiyg8DSBjocfXy6zC4DhbCbDKQjxDCaSkGEWN1",
  "key14": "2dFE6wiMgSwHcvhn99RvehRoUEHHZCWVAK5GA7QYkRJM5oK23Xw5QBx1eu73476XmpKXSmsu2NzGe5yEE4ftM8pM",
  "key15": "Ua58pi4mxPZwwXCrvCCjRBb16zoSc3afRY54azbaMAMax33YNFNngevKd1soCvz2pNMosbuBtevLHkmywBJqdw2",
  "key16": "25CK5iozKGv9w2KP1wqkw8ENmX7ixeJw9T9x4WGNYkNkH9742vTjB5hV1xuFLNqMfV61T6yCiZoFKi8TKqzLD3Ad",
  "key17": "25tox6wV6LLZSqQcRkaFeA89rB9xoE9kETpED4N2fahfFDjPRSZVyy487QzVBp2HckEcfJou2C53Z3MFsojWjmBa",
  "key18": "5FxwkEB9AyVuJ4MiwNgMAbZP5K1iBhDVg3qM9rKXbG7q3swSD2gAUxqnJ74i7q69LtwtBRvwKNJvdYrTVZFYjhst",
  "key19": "2P9W1uJ64k28F7XAphxubMeVtgMeBVL5q7rYgNaoRxHwTMVTXeoJMBC3QEABz9CUC6Q6kkySKaFJ5hZYCsiq8Enu",
  "key20": "8NjjpoKpybD8S4gaH42mbagJKsxsHTqiWmDbW65nEiFhcA76Bbkpno8xEgfgjrvawN5Rtw5gy7DBq9ZJdMbmGNg",
  "key21": "4ohnG3H8PH8hhNScHdu6qZyVrsuvcweMe8pVEfv1kZaCtN8piMMe6Hfirng8d5x9FZTsN5LyARScMDqPbKSWBzjg",
  "key22": "zxtEw45hnE4WyMAordLq7GrnbtcvdcZY2tz1M4tKTThQ8w2885mYWQtxaSBBXdDKKUSuRNypaeEssgq7usgDAHM",
  "key23": "5JC3RJLvv9te3zYdhduyeE6ZVbytTqphPGQKA6WZuU1foDdt815P2UhaDKzQZDJHvuo4CYXCSqwSsZXt231W6vq6",
  "key24": "5E71E5mp6yCDYy8RTBfW8rLckkb6QXFXd9jmhADeyXGfZg9VJWo1srXJhZ3VWiwdJvrotvzkwPTcAGpCAyTK6uxZ",
  "key25": "3Gd1FEsQhfniX6LQFM4881MzV9HFXHMFCjwfV9nquuMRGaYsxAJgwXwdpzdPiNjT8fJqEBJmQNCPb1uijy8CG5d5",
  "key26": "5JSTcNLFn7pojroTG4bNUnEHjvHTNizAnjpj3B7jfS4Srgq43nK1rWCLnYJwbiSdKtCxZ62RqwEPs3i8KtwabXJ",
  "key27": "Xf76nfiwpekFmGccYPMxUqqzyv9PzBe7ZUyvaJunkmqA9mH4UEqprsGb6cyg2e5urjDZdTsyv9Jz5dSZbFecmqG",
  "key28": "kYtBY18giicqCbvkJdjfUtwVppfYd7Vx44UNnbzKDRWK4zGKxxD2kNc21UmYVLSH3DgEurMQeMMjYSeoQzd2mAK",
  "key29": "31Q5MKpw4hVNcto9QSP9i3g2GkanJZ1gu3NRMw3L9zATQvatecoEFHUwnPmgucNfmaPReX9D6Uei4skxViJHmTuJ",
  "key30": "4xb6aXP3n79yQWk1gZujqZ4yVF8iE86G6UFXgLkXo1LeGtrmSYYpqMcUzxZVa1rPMJvk6C1BnpM4UsKEqK5yTdnT",
  "key31": "5DrKE19WnMtM85i2QkYXecNDjWUdXnCaCRJPmBUTmTG7hmAbBfMcxTASzjkMWJTrUixBadDYJp7qfADKcjKE5C4V"
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
