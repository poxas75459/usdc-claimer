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
    "4HcTAFa6jwfP62kF65t9anMPyDuSe4WwKNhMFJi6QQCyBSvRghyXMbJBjt5ATM5LaXMEmWvQrbcZZQLWgGqsWXSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QKYP6pLSWcqWVqGCExwuKKnnDLvUdyy2vTzA9wftz3cPu5HMDPqM2ei8z4Q8PvAEExDaX9bZ4Gw6rcWkbMNcv2",
  "key1": "3W4aBZdyu637zNeP2aW4reHSwrq799obqq1RSYv7JcPGQGdBxkTBCoopzh6FDexMyDYGnSPwVX114HhF37PBgMRK",
  "key2": "3gDaXkTStqhe3MVzvCYJsELDjmLL6iY9rcrsegyFYB9HwPtGuszfUb1WsB5AxyLHB5sYs4aerNzmC7c4fX1Gpi6d",
  "key3": "2rGyvFumeDwyYHpFv5aXmW4D1hhdZ3hCAQcLu2ybYtwEbvCAKG9YcF6ud6T9VH2myJESjSB8UDJc2X2txtHAKH7V",
  "key4": "5izpD7UQYTnyUQfxYxehUF8MtPbwy4LkpQ4b57W95PNGLnz4JbPXrysqAHEadkGAMFQfYiqtQ5dP6jST9kEwDqps",
  "key5": "3UryNcTuWB1sjM8FH59xYaQodRYDpiFAXZvfVMx2UH83fEUpjHQ7wMrUMdyoCoDFBtAdpMgfCNqKZ4mRiBEKmRZR",
  "key6": "3Y6ZNpDohLhNPC15DG7fgfDi8kQbUqrSjpXJaTQPcd773JP3QBte8pNnWyvj8ZGc95b53vx9RzjgfPdGX8NeordN",
  "key7": "3oJjgS5W2YTn2eZdNQEhdgPVbpwiBz3zpi14pjoDpboie6xL8ULQBQctFnpQGsti5Gc62CwkJ219kwTmpAnAu91k",
  "key8": "5M7kdcrPHc937G4incjit9GPkSGsFfRGNnvnYVoLi8oC8guvzU99pAf1zWETdK9bKVCzzpZ4XGhnr5ixi5CKXj31",
  "key9": "2koA2X9zEBYr7nYHwFz54i95nxzrumXn4SfkVS5tNvzrAUd26vtMYpce9FYYCGJdJLp4eesWhnucvKtJixNKSrTT",
  "key10": "kCwumi2cuwPjBqFet68uajot9sgqEYFCFVH8kUY1CGKxyTvhtpsfrohGmDpADtrrwc3oqdT2Bdg2uVnD5xQizfh",
  "key11": "dprRs8rMjsTe6cpnAceFhqeGZBw5XqfzVkzxgGN4d1s82SyPUxuE4bSCA8YAYovcLcEf6k7atzGQefoMUmbs6XZ",
  "key12": "3yUbS1fXgVLyoKhVVna8uKnGmNqo9HVnW7NhBsHqvAxftKYp3Gkx12WSoxLDkRvraVQdueLstEK5S2EapdghFUAg",
  "key13": "5cEqLax4MTwD6Gz728LNVrpDtLxFjRf5VRrbdU4xHD1NjRXQhjRLbSAogv1jLpcQUnuWsTs7pVryq6qN8kjfLXQy",
  "key14": "28N7BryBuy5goMeZc34GmaMaL7FbPcGg8FyVs7uBbvDBe5JsLXhaJVnxHA3M96uTxHoAYrmxaJ2MqHQEHjgABz4M",
  "key15": "3YzMxmS7M55xysjXSqf7uGpMCq5w9Tujgxu72e5QAdSVK4HMCxXnBiET4B1Qw8A8d1zdhR7u98nDUsfeajSri4rs",
  "key16": "3PxfnMBWhfGDfTX9aBA8i4C9xjWGHgegiibTTy2zPq5oo5fu5Lm1tyPX9854FAJz2vvpGhgbzU869sReQFSECBWG",
  "key17": "5LQ1Di5t25d6UccaLW6sWxpyoPjsWdRSx3skkNodtGM1RThzFwiMDF3W6ihVrJjVxpMjAcGdSWtDLEPgm96VPamG",
  "key18": "2Nn8B8qgxcZ5WVeUheZokB6qwHx4WcYhWTPnKpB4Y9MhvFxm7EPJ3FAgC4BuDxQZ7xSxUrTzHB7nQUcDYKm7DiA4",
  "key19": "3BcoqFtiuq71ctjgHEpqsvEvNTei1mKVL5mZwjtwN71Fco1zGZy49wgMwKeFtE6R6ZtVjKD3GNFEC1jABdgLAGFp",
  "key20": "2WQnua6fR3LQvUcWyyLMZvqin2q5qHWNHxSUwLX1m2NTD92YQbi7KXvURLiqSf6BaJ7815tZSLzGZJqxeDkTz8fH",
  "key21": "A2Lsq7yjvLac4wfWafAYMH2UaRYHXy6qUMaGnd6iFWqEZz2uwnPLDTocJADDnicVsSqNvgQgkhd56PtmL54pxaZ",
  "key22": "4V8meGHhVAgTPKR5iYgBwNtiKjqbSfn16GWKr43sX3LrM9DHKrucaD5gbXNvUPteEFLGMFMuUF5uZatJxn2uehum",
  "key23": "23o8sCXTvPGgNnhgWjDf2JAnmGT5ZBdd3k2pkjtyNF5BDZguEh7BWBNUzjb3TAfstaT2judgqTwZDiVPwDdUtkTx",
  "key24": "N6GRZnUXCXPRxME1uxr665LzTqphCSnSxSwYhrhiavabBQ2XNcdHHHxL88PM53N2y3GdBLhDiqMJpTkqvhprh95",
  "key25": "2Et6i4nzePCeHTK3cxWjGVLm6HXpE1XXwxPCe4iXXZXCaKTGhhKwG8EnbsvQquCA9aUC2gqEjZf6kqGPZecmiLUv",
  "key26": "51XSirK6J6aUTekwQFcgNEwwStw3ivCK6CLmG7EDaUHPGEx5PWEtvxc8hismEMgHALNF3Y4dUy6BLuq7cY7EKZje",
  "key27": "4geb929XYQpLdb7zswocK4CLbaZqWgQ4giNRtkFZTnZyeD4rs5zZ1673kmhXKFjhmdqJhJdqnsRiRTctjUyis3eJ",
  "key28": "5ecvjQeCB6ajpTte59A2ArTyj43UiMXvbdw2A6Dk2x4tB7xx926DgXi59G63GPsjTVtZLUSCU9FgTVA8FkU8ZAsL",
  "key29": "423EekVqx568iQxujvcXDuhzvWF4wkkMv9SZFHQwCkuogmuFzNAXvTV9aJrzCzFv2QxEfdyKgPTNe2wyriCyxNmB",
  "key30": "2sYG66C4nQovBqFTwT1ZvoNBzvgR5k22QVB9ETJgpddQ1MkBsMsLrRR8Hbbv5VvqrnqzRX9qqWyAe8B7FcHFFTtC",
  "key31": "5CGZhsAS9mjoQdvWf8uevKSpbX5v4Ls6geRU1QDsUUXmK7Ppg5UBKFEo2zq5hJnPJLi95WKusGm9b5bkXpqtLpJd",
  "key32": "oZZepSih1ob8a8N8qREwQWMdA3AuwqBr88sU1BNaXB63XzEo2mzri9BZdv5afy1WCzREmhFnWJx6bKjGNUSNayW",
  "key33": "28r3dzMq9KeQs5gdfW28D9pfdB3Ejav4gi7DHrjC7zVyjfgnc4jURhh1UCjWBKCqcHwjDz5mrxjvscbQwvBEqz3K",
  "key34": "2uNwbCojYEHCwUybLyJvKQsFT2gjQt6KmfiDMkNnButLF82ciu9ymhdBoo5ripKWsVeS5Ugm4eav8kC5aVeFmVrb",
  "key35": "5GBsDkva3nYARC16Ye9xCsex2WfcR4V1Ncgtqv6725dB5tfyegL2tPNWwJqixVsW9C7ypkfVu4dnPp1h9ciFL1Ew",
  "key36": "5BEVH3b3inZaJpBd1Nhb3HDMvbc5vSVuNcpg8BXra1YvxBydEQtYJ9bwSFUrDpmnnVB7oybKdGfSHwJtCZL1senN",
  "key37": "Afo1UPa13DajuKWjVCLuHyZoAYmb3XpMAogbRQBbRDLntSfhwvw82YRXRQYmRx225oyALwv7Gx2kGMS7YPNVgAn",
  "key38": "32hj3nzBeupCS26YuUfYpzWDSRuUdNVps7E44xnS9qw9gkSLREFeuceoPAKSTUG8HAn5MSQ4KBwSznBm4LX7HLBk",
  "key39": "5JU3Nuva7YBbL6xjwuqGX3nUGwfKivi1T7JxZzEDGkcogf25Drpj1xAxnUngjCkYxGgNiPUkLQh2U777unrcPDny",
  "key40": "2VtzNzgcLs2eBLB33TyChuAahq1Z4WoJLZiZtDW4BWVyeSBGnmao5DNwg2gRUwaNWuSeRgMJDER2DwSihsMdLb3y",
  "key41": "5QVXDactUBm25MCXJbhQTJte5YaJnd2FEkDaN7eU6zBVp7JM1cGS2PfDdHxxPKQd3gkig7bWGm6XFZ3UX2YXBy5h",
  "key42": "5qWSG3GZLDmLBZjfVxkKEECBTBf9tuUcB3hnQFV8YWGyNDfWKTav1RoHBbFyoZCEWocNjrFMdpxaEJ9QNdbjc88u",
  "key43": "2LkqrGrK7Ag3JLVpUzCaZrX1RPGMzcdqXfaV4SKrCuggW7F3BbxxWFioXFC4B85Uvst9gosHbNmnp2x2soJmadGL"
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
