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
    "5wgDrCERBmfyPwf34Pdw634mR7RmEYAKLuigqnxaPePCiwVa6EZ7py64J1a8Hhths1arstjaY96bagJ5piG1iST2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzHcbj7fGBzfvKBNCu8uGgGYJZ17UETGDUhMFC8yyS7DiXU79C1TpenBL6scb2QZvW7eCEuUgTXQs5oL8EtzNpW",
  "key1": "3jwBLRLf741r27sPR2Y64Lej86NSyhomFpDNpN7kjK4nfiA3PyZwEWBAWFugVeeQwVARyEi718UUmfzK5AzhU4uA",
  "key2": "3fp5wUm7fV9BWfXW8ZLNeMKTjXrmx3NmgbGWYGuTzxQJ8JHNLKakduxpggR5unLeL1MnmRSNQQrCykh6pf6JQvjz",
  "key3": "33eN1GGM9gd7RfXL3E9tZdPNsDaPH2DWiFyCTzCs2TFdNbWvUsgs8osBoMLKin9Lqubn8EZynfWy5L1PFMrayW6f",
  "key4": "4xJGJhskSwBXCSmR237HYCic8YG2uVLSifqGQCsYJviR2SEFy5YQHJFJhKPsQCCr67vD7QnV3eFX5wNM7U1epNxH",
  "key5": "2tJzBFBVmewmNrLapYP7q3dC78PPkap52pGnA8vJtY2BToTRuf1ZrujYUX4RiBXpMtLeWY5YfzqSMqiEPDrVmUeT",
  "key6": "5KqXPBgKQdD27hXmrukAYsXKoyG6TKS7x28xdTqAZphk57Uxyu22h3uyaTJLmidxBdE2zqR9yXKV2cAzuZUPZnJ7",
  "key7": "3iEmcTDMPMjwGd4ihebjiAqytez6zxUbFdaprx6zXcsfbqqMWAVKaSuMgfXuQNdTDvM5xW2WZZg9VFEo5uM7fL1",
  "key8": "33J9iY1PdWFCNbj2xw8sgV9TPJEP2XczfgUaE8HbzXdS4ovdL9HdTBJhgrkVj4NbnHswpqFycFrN4KAVfVt6zgxR",
  "key9": "3e4rLsZfmRTkGJUGEDzGuhJUzrYi9c4RPtj5kQoMHNGXJpwqh3h3DKAzvxw2e1sJN3UNKjF8Dk93SDeHhSF4otUM",
  "key10": "3fuQM9fKfHmmYkmj12svpRyRSoxRMRNFX8u3VX4Mb6hFm2CJ8zZgkvZNEkpQD2hgpuNCfRU2ozfkQsNRzrhnKyPX",
  "key11": "5d35PHGWMQ5aBjTQyZqEwsRUqTFBnXY6BwfYne38D2ZV5PNaefKJHKhGXNQEbSHN4qw97LW7aMRHqPxFLqgUyt65",
  "key12": "64VAWZhYv539x5xAqnTfrH5jpEjsYcs2ixgez3onqjXWr4AdkdYCVCgQwaCDPQoSrgF78uWRRj97gAWuhV4xEQmB",
  "key13": "4ZXVqN8DASQAnUE8n53qQ9MetctsHuEG98VxTGV28WemaYuLWYQF96GKMFRzvB8fdA4c2iWUaqqz8wr2UYc1jhVk",
  "key14": "5aNwFyCY7Gkxb17Ca71aeq5p9YPkypRXwr8b6da6341RAoDJ77L4PoBMxQmnwhsC8CfWKTAZPFWK3P7bisdDoA8G",
  "key15": "6358LKJRmBDqh1Gyrx2oSbnvd4KrhDYfxgdDZsuqtpkVCnYQoV32GHE5Zh33U6fNVS7GeWKYTExMJvA1KA9mF6YL",
  "key16": "4HqAoWpXnwg1vCnr2mrpnPCff82x6EhJRVvEUnrrMV7xQLQY9v7gsCN17UDr4FZTnABYrpDndpUJS16X7z1EhRuE",
  "key17": "534bx2qT7qHDyLGZFqhzfnF6P24aDUbFZMkdH6N7nJ6G8vJxY9xk58KbsWWZiPEtDtNe2VK3nSj3BsCEf3ap3nds",
  "key18": "2f6dzeYBpYiWXBpqmin8Ndz1Q5KX5gGvA1dQhAQyFnzdxjSpsszLqW6LA3uRYFATEYCFRo9eAa7waL399cQYSvrD",
  "key19": "2v4CKxY311dBAV2jiXGfi9kqF1LBicFsYub19Tsarjieg87fSeppLmLqxtGT8naqQGmz2CmRNGdDBiT3NoGvyvhi",
  "key20": "5qi7kk2tz7YuYH5122UDaBMauimafvA5NWxGmSAwfPvAV8yy7Peb51ehGrqDfB339tsB7Na3C9GB1ZvpkzwPzDgR",
  "key21": "5C9B1bywa5s99dXt6k5d4tFJGXdNa16wuDtVLy8JXHKgqEAuyD3wnUzJZw8KSmt2xBJxuLPzK6tzML8xGsBLoGcz",
  "key22": "3D2hYHPrwhEntjeiiHehHVatjpu7SUiwUwRrucaFm4sXSsuYaX62TxwdiT6ZV8zSHk8Kx6YGTFBXikxRFHJV6XYv",
  "key23": "4LkrkzQcR1WiEp2d99A6Xun9YNDbwskNNvTCyJ2mKc4yBqAmaAMemXAAax3saJ4NKHxtfVFvqHsZzyrsWAjWBLrf",
  "key24": "2BLp5cf8wSdb6kihkTivSiHtfxrJzo34XD8hRqWYCYvKfH8VUaBYwdMPwryrcUpCJbe5ANT4wD53Fu1RyqPyMFBr",
  "key25": "LHpibow1LrpUmAAJhKfcksioCJN3E2YAYTUgMAbQtAaSXUjdhVBdooPhRBmDpgCGuUvBsdgTrmPXRKaiHmzkFBj",
  "key26": "9bkae3PxB5NWfwhWtH9zcifEaeiSq2dq9ktEHmEWq8fLjNnSJkFVQAEtF3ArNDJ8TMn6fgyMwMopWmTEaufrQjT",
  "key27": "5HWZdjuVVY4X5TB4dNe29xG9mhkHjSgUX1Z1hs1Lz5of5k89kEp4LRXaT92gL1ep7rNTs152cEJAxARGe1jEEiAe",
  "key28": "5Ssg85nvTitrWJ1PmqHDgZRzH5M8Pfsji3zSuADcGdrBj1URKotXFwQddRTwivW3SGuGtTmPhNmBNCvRLcT5bN6f",
  "key29": "4XHET5FtuYjcf28saRdg86WW7HZyug5zPsp8RZKjiJkLfcdh59AV4KogCpVQcSw9RRmxpjhWoBe8Bt3L2onmR6wa",
  "key30": "3iwJijZwemGryP3JTw55JdJ4tHbiM1MEcakzTLVskcBCH5USvzpXxeNePiv4wXk9CENYB86MUbGaGYmVtJFyQwdX",
  "key31": "2e2K1AAEiXdViwfXhbQUJJVERaG262goH4EwaVXYMP2JYSg9TdVPZgf9yk3nAMpwQd6pQUDh1qM7Ld1GFsbMaBe5",
  "key32": "275GfogMp1sx5WLoCoh2rxyMuwdapv1gAkZ2XGuKFMsASNgQwTDwBiJY7HfVm46zHcfFcoZP7iF23Wq4n2E4ZoyE",
  "key33": "2MzT12LCyZy3dpceB6nVaevJTnpi4YSXZwAaN84Cj8vk8WMPtEoawzXbWPpqRS7D3fFDKbxJP3UFoRNPuv4xdsaY",
  "key34": "5CvukPRukbW6W9y8Xihsa3cC5mH9xg5nisSZErxwp233rp6dmXJTToxtiXuMAwMg8yWW4gLpQuvpGwWpHbCKw8KX",
  "key35": "2DCQqjaFnNQaAYLgYRu8d1s1iqwGw4zZSMhf4Goj4LDDHDPUnkPSM47ATfJLQt7jF8ex5BSv2KvufGHtuELQ8NNC",
  "key36": "uvuYUabpK8wkmBVC535w8rais74oSxfkgy4BvRrrwEL9qWHwvn9wWhLy71ewN8No4VXrVzd2wVqYRDawn1fNwXY"
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
