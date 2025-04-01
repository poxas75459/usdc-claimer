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
    "5N9U3kuNu3unQCtUsnDrzpZHJRRS1TEFRws4SALnaFqG1VV1TWSS5APYWSicV3RXnQvJwFrXdUwNhpp6cH5qN8Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ruxXD3VugvkowECC1sPegZzWo8vVmnQyQiiqihxeRaYgcvRH4LE4enMXYxpt7LS21AvnVFEtZPMFG77PceeUa7Q",
  "key1": "2C2K3T1hLsj5gBxd3NfLFVpEoAGeajC9Vj2GLGx73v3ZyCkAn1iapfJcRghUCxpAEBoDbHdRXwHrf4ZFPvAkDzkn",
  "key2": "ox8MWbWJhd3sCiiaHkHmBrcm1xRmHkBZQn7H7nSaQWLXMqthF36vdKqHGNcURbXZoHSuGfyooh5tHH1GUaX2QCB",
  "key3": "fXUbJZXUpM2DwQRetoPZdTHef21EDnzH6BkpVYTtX7wEXwTH7M2bHfQkxoUYUTzxMcGMBtkrWttSu6H4RTeTNN2",
  "key4": "2B3VpjFnvFu1b9BnLaQdSXWZhRm5Ncrb9uEgUwyZrGeXWm3exoMbuFSpgutBx3hhDBJ4ZGWo5asvn9BXUXPGVFr4",
  "key5": "2uLDr1FwXnsZf9p7KgnbGKg68a69PidvWkQfG5pM6q2oDKWsPw1fZpPjpXBqDrDECBahMxG47C4P7RWz21VghvpQ",
  "key6": "Ydc8TVnRUdxXfsMFgtZEMoi2wLXskByDMyD1KatsXrcfk4AgHEAEpppGxWrkrqYFvU77Y8FQV3Mwev13HLFbAAw",
  "key7": "61YEAyDi7CbajfwehiZQhHkPQcC8bGFpyAQChTSEp4J64MCkg36Eo4xdgDWujmofyg8PRhv8gm5WKCqqyx6k5Npr",
  "key8": "2t2UCgb5NL5uzxFoz1wKoA3ZdtMYo8BsTtta7qRZMoNxx9qq4CXkwidGva4voKMFegBypN6mA9q7jcouhoa94YBE",
  "key9": "jQyyUFf63xKXkJS9MTcvGD4P3hbenc3ez3J44pbtvUM7rLLqxm7ZSuNLXGfFCZwr7diqEuv9Yi9x2LCWwZbiAJ9",
  "key10": "3eWJEABaHB62UUj3LzEWnAjmnnRbwN9nWYLF5CQ81hk4YZKGHyt1zVryiRoFbCAHa25XzixUpss8Jpy48nLMXs56",
  "key11": "3BcuphKpzyvu9j32Ez8EoQhXaipuDqoXZjgmYYJVU2MGHYbwNad1nCxghFnaRuZhSg7a8mcFyE4rrGpW1n4jBBBL",
  "key12": "47fY5zFeQVZmjiDmbn2CD773wpyPvgkGj9Qk3NcyX4TMvo7oSiSpiAPHBSefcKAJf5HBP5za2zkc5nggxX3Gcqg5",
  "key13": "5mVm1EhUAwZ55bCCjc4KmCqVEPWE4uQNeBn8nNHevZq53PLbbu23dJ2Q855Kz7gji6azfdUwAKD52o5JPYAoqsp3",
  "key14": "UKcNvcn1yD5grhJT1hwcx7rivjsTGDVr1KmDP1qxR5AHuXs8xrdjSkQbxosVc3F7mj12qd9i3HoV1DxAhdkTARq",
  "key15": "5on2ixjmJsa52cK5ZqhHp17UbToMsKxkEN6GtM1RwQjHh1YLRiQxiBRkyDZyeyhV5WNhaMWVPvvTCxCXBiNwDxmc",
  "key16": "4XtYbBtNogPuT2aFMq5c4Xz3mpaEwFcGag7roB2bxmXaoTV2CLvGr6iDo5dGw9DGcH4rpTBG95hnkSjdG5RhBo2Q",
  "key17": "6116qTtuRMMj98aLB3odFE9rUvUzqb1v3iZ77iqtm1Q2fKtkGwzppCtjRjv1DRBDaN3RGkTmF8jCjFtNwPadP1Fv",
  "key18": "5EFqtmWANx7m6upqTezMax7n99LG6XUJtTgRx9iz4YN9tyAH7H7uuP5ErbwB5TwUFYPaYpurwEHwp4QRFCG6CSP3",
  "key19": "peN1NvvkbpX2n8vUMS6Zs1eXBYpFz15B6GeSzzVwCefGtrFeLNbPu27EDdyjgzJ6fks8mNUnDbYXgV7UFPBKxcx",
  "key20": "5VDUtPLmwSsM6CAGPg6Pr8PDTiy2au7oCiehVWG89jjEz59wrGE6qB5BjZgA6maDyX9m6BveMiUALuyCzeS7UsYc",
  "key21": "2anHhmxFpH9koisbqZZSQd2o3T6P7NHh1JB3NPHg4sWr8dVVXgxse9WjqBuP7VYFmkWbNoziSKYcCzuA4HY4h2o4",
  "key22": "9mGGeeM3jtBYFd2PomzAqzkDg8CiPbmfDERe4rwm4CcTwNTH9RPD6Xy1XfiV9JoHr57er3m4ZvjHUJQsJLQXp3R",
  "key23": "29x6pcM3fYkdJHNF3ErDQPkJCE3WZ6fFS8gdiomgNR73nZwsoXS9dDz4oUVu9vy8aFRcSo5V8UpHBjDJgTDETGxi",
  "key24": "24b2mXUsKmtPhMVR9NXj1uYhX89UwL867wMPbWaV87yGiHfbPBoccFqhJY8YsU42MViwWXY9HQKP9RByEJgg8hQh",
  "key25": "27CyuqTAGVvEoLMEFX52TopeShbaoBwXEWiYXUJj2q5veRf3wjfV7BKNZzZ98qJCgZApmWkZMdGALzjraGPWM8nB",
  "key26": "GXqs7WzgxuGU8eWnSAVfuMVyJHUxHaM5LSG8fxEX7u9recDW2KC1L6Bvgp74ndWFGqzQyLf3aBVAphz7mw163hn",
  "key27": "sA6deM3hEU1z4HDcbHRC5BPhg51C8snLBzWyXRXB9W4kme7aQ1Pv6BPB9ujhnoHtkY2wrcERdpAjKv4ZwotXiDM"
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
