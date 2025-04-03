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
    "5aoYhEdCnMHsHA9oG9M2ffa25GKvKS6DZvuHDnKAp49NahXaGki7AUJegnFrD39Wf4XyWryuccCpdfFw842Gkp5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSFeqxD8vQVAwWtoJ1eMMJPDiFjwndD5Wmm43aKkbpBVbg3DMb8LzgyCYjPWfw9buUYbiRiCaXVWk3LeobcH74G",
  "key1": "pK2EjPnN1ze5AzfggqHQSeFug6oQyj2aroX2j9DUJeD1c33Nq2uDJ7sRTcqn6XTW7TteTHGcFycnFEiApbp2gpW",
  "key2": "4ic3vDkdbcmoCMyQuG2xYPx9YCc1oHxXbzZSRd1DsNsTt1yaAmBUHMgcbRKiL6aevEL2ZnN66JTwtBW5Aa4SEUTh",
  "key3": "3j5AMFxknK3CQd1CmawXMPsVgGiE2BBjVGxKuiVZJGKMXMkMeYrGNBt16FxRpMG7DhYUtoLa88aXhyQxReaJ28wY",
  "key4": "Lmu44Wtfbur2LSrH1TfLnY1wNHkPfGsA9exZhZ6G6ysFXm4jyum3Jxz82b6kKJXGcLkfmwvsipQfk4fMiamtY1Q",
  "key5": "4wS3dMPZWDgwafC4Uho5Ps8XEXSaGP54H7Fcyg94qG7ZwcXsvUpcD3WehizatC8G4nhvJknq5HyY8RLafTtcFk1k",
  "key6": "5UJVCcyZYwMUPWRoV21W7PCVBWXVsF6tUz69ELdsXwPy4ri3CQWod77hLN6JPywMLXqJHs8dtFXdcgG7iWBq6Wxt",
  "key7": "4YU7Ubqd9UAtGQwb1NUzqqXxnwtmrt7T9biB516FbcLwb31dPwNc2Bt28Fceyg1WyTYfJhjzMnprTCW3hUsv6c4x",
  "key8": "4kwtRZ2CurzTcsDCgKZYyxKKSEx31o6jYii14L4U8eXsFqL475CKuBoxPx6QQe4iuKew8ky341dALyCGfJzMyqzA",
  "key9": "5SYrkfMyjT4ZJjZdhhX3tHkfQ4u9ST1naqG5CmrQsR9Lxi6M7d5QfPtM9QLqJp2sXaQzJa263FrPF8ieKficbbdi",
  "key10": "4kpoLR7TMAdZXdCTguaLGysmU97CyyGZpaiiEntPyF8ZmofynrvEqMpH18q3cswyTU19WQELs9vdhAnQYca983c4",
  "key11": "4nbyh5fMX46j3VPLQnttRtYGbFqSmZKDT6ba7bqjpVLitcP7owZPkPJqbwFgbhSCwwHjufZFmYxgLcoknkF1zvXb",
  "key12": "2rXjpFXqRP2j4aw93eMWF8QQUbK178gXDnujwAG9QpvnkRu9Yj7E542vEkiR8qxazFTqT36EmDiZPCo2aT8RvgU8",
  "key13": "5Fmpt1iULwjYasjq8ghbksRQeLKRhEV9RcPywkhNfe2CSeDoEiB1ewvXwTm7cdkHPAsDtFMj8FySoyYRwtKLAFuU",
  "key14": "5hQQbRDrZTUFUeUMF18z72hJS5hrS2ZpDihaWgRr3dnVzb1UaEvJpPKB9N9HXqQG8sizaZ866NmdZEtcSvsQYHRd",
  "key15": "3vv4wozyiGxDENkTVLAYd9g1iguJfVgPS68GoLj2rsjUjw8juwgzGmAMFwQo1qNf8Zaky6aHeMf5mWTbKQ9VQ6NS",
  "key16": "4r5PNaYoLv8aGjYRxrtoDmsp43TEoPFKWjkPPQkNVf2H2F12YyhPXNQRbVHQQNn9JTpGjwtYyvCG5oPWQtMS6uMn",
  "key17": "53A2ZXSW6oK4V36t8bVDzZ2uSY7vm9yBxxVY2chjGYw5B8uMiDkXeBzm6b51Yfa3Kfoq46vPGaLAxF1mxZn6FRcp",
  "key18": "55d8YJaBeWu55F3ai6FbNnaWsYFfewmaT7gUHub2SpoYnXC15ncMBLgenPgyDJoeHPSAGQaetJHPMycmp6St5bkj",
  "key19": "5hYR2Hyu1Qa22EFc8YXPFsSbkcm1nmcNSy7sRWSfKsSqRu8nQR4AXAbGYXrPUDLuemoWBYmkgphA9FnbXTQRtq1r",
  "key20": "3RuvVzU83snRb8bVKF1VHtELyDRcfNd34f8893ndJiyGkNEfA5GuVpspTd51da4Bh15sRzorCKZwH9DWy1tdtFrj",
  "key21": "4Z1Q66WMmqzvhgmYmZxQr4iHDegqzTvVuhp2Um1fou17ihvWiZJXreErD7ghzuvvFRNsJDhSkvtYcpshoU1QwuaA",
  "key22": "XvTuKaEzdz7BcsUDi6mvksh7mGYmM5Fb4eskx6mmSS2t6oRqpBZj9byiRhJcRoLFgQwBpXPC6dHJ2Qu2NcahZhL",
  "key23": "3wvW1eTe8QnFsKSYr1dHxq3KcCwJMVybaMzJHEnFXdJNZhyoBrSrPddfWu6SckTuHvyUbxLCVjAJaZeHJ33325xR",
  "key24": "41rksXTnrZFaXrmyAuzkD15T562Bu7YRkSwvC7najEGNeT7AYqCb4aJWWZArXzxD8dsY8uvWPyhbg3DQqdyzpaPf",
  "key25": "46RP6Ziaw7ZTr4h41K8Ve1SVkRo6nz716vriSust1zffskYz7wGVuF3a9KckrJafU7DZ7SmPazyVzm8rSDXzAFSm",
  "key26": "44zqBsVxGiiMAVAf7bo2A6UQCLfSHeJKakaRRjf6Ji7NFtb85MUDiwVPhn2MFhZGS1FdmAVkzB13kyWSs6QKU3RE",
  "key27": "vR33HHJJvjrC7LQssTV9Z48mqsgc8K5Jm7de73fZr37RM3u7SV9QsfZMzscvyeti4qj9oKGiurYnoMQSpuPgwG4",
  "key28": "3Ea7195fJREhSiavaVr8b2e43mo6LPpLCwb1YsEqiKixb3j6L7x9VLh9DTYWKwDHoYsBpBfg9HoNRfFJ7xYb4PRy",
  "key29": "Ze22JLJ3pPUygko4ACMVSsvc6aCjqZe21pVQSw4SWzLSv64KRvPUL1ecPFkuRF69HzCCoquGQ2HY6CGPM4rXLL4",
  "key30": "664Mm8fww9xvSxDhtsMv1g2HpeuVx6ci8kwWHe19oUNGozFNcPq1pi8gc9bsgqBrfe6UoNVjJweYJJTW9ihSxLY6",
  "key31": "3URh7tQ8ViLQipdfDPGXPUEjxpJqzuU5YmujZAdKGG1SL58upmgYEAvjCgXrMUoKwJjXyD5DPnKH7KAqVw86NUCi",
  "key32": "3737Th32s3V8b654di4nHbNSsmuCzCx3NTYQaX8ickq9Ar8oNTAtb3vjwakukx7dV794h8znoNqGzjrvBoqFkuud",
  "key33": "3vEhtigitkDRi9f68qRuhRSafP752r3eJyuoRCEFuAXpQFSS5CdFi59MSa9Nv8maHTJszokCDeJLuu8vosAQ2nCX",
  "key34": "2pXyksFr1Wxny6aPdSwP7WnzotXr1aNceZsJ481pfQBGTZSqJ1j7c8GGwG5cicmWWerLzWbajpDypgU539hKSfGt",
  "key35": "2JKWFZQ8YEpUunStahbu5HRHQ991u4HDywmV4nfUt4QyG3Ta8hNRM6KS62nniNHijdkr3ve9MGtTH8f9GP55iWac"
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
