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
    "67YesRdHUXNWRarw8m6Jsxn4NH3jEf9Wtc7dCHgLNSJaKrVAkZAKR3gBUmEH7vVjnZLy6Z252NrFQaEugkLSLjQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WMUEmrv9rgesTVwYk2Atpxep89ez98UqMPq7gKRdgHRUaWSYGt1pz97WJf1qBUibnQwUCuNYaWHRTk2o8daKZjg",
  "key1": "3rKVJR4gt8KEhUsAe126M8AzBQuXLDhkLR5Gaw9Dam1VpgN5DqNhRdDX17E1fMfWFEu5HZ9ULKhzAgkGepHVGp8q",
  "key2": "3esKZodPUG2sAMkYAmpNC28dwBWab8jwYnDfWthWy2bytMMnCNo9v3uDFWQtPxuy43ixgznXrw54daDu449t47eH",
  "key3": "2aHiur6aNWirYD5HS3jfVphXZbLZwJRGXLpM2XVHvUXXSerpfCe4p4YhbFDtGDY2F8x84gDbFqnv2dV3nB5r4kCq",
  "key4": "46AW5rBcH77QQkWg1CZnNFANuzLvJJZcMSfobSECrYteVu8VukdRFB5PUGsmALdWtu9M5aUtpwB33gibqPgmgw1q",
  "key5": "2tUvqwJyDQ8dJRkb3Taddy1LBV8XvERFBkbqSt9YM9Y8xAFe9G9guZhpiuFDoGHpQVZUJUDq74ExsUriXbkBaM3D",
  "key6": "4R9zCrKX6GLA8uSypJ3pD2HW4j3nRHkNpuAbM3vQN3GFRqmiXCjD7sebRBwzCv9Ak87LpnNjgAKP57dwbsKCvfhd",
  "key7": "K1ySL7wKqzFHtm1VkD1qTS29m7QKq579YC1JSjsm87aM4bQndWbk4L4MRh7Z7dudkHEVNL9d6pTWXLcry6RPdi8",
  "key8": "uPCsZe1p58TU1VxqkcTRos7VtcmoiQo85BtDpSFUG3giUJf15kfAkh3kVsAWsXPe8ahN2mqH6J6GjUeXvt5h9em",
  "key9": "4CAdenPFsHRFsiaZYsHhaeiMEeLub7zrFBnMqRuiQP9R1LvBuMUmDSwQGvoxWho9nqFKHVWStdnPMJV7MHhXFyvr",
  "key10": "2cw2narGW29atFChPCtsXwhGovqBg2bJbjRmhpU6v9Rr5Rd3rskdVdu6VAK8GqznxybM44wWw4pXqJUtUkDBpTxh",
  "key11": "6wCcxXnjkpKec9nsxSTviDshxXQtAfkGpLZLkdb1BFabaJPiJo2bV1fJudVrWC47ySG1u5YkMRwcoapycuH2WNE",
  "key12": "9ZsDMXZvu2SVi2oFN2XMNDVRgd9qhCGEXAyabosKbvybaJ2UWUguzVjVgQScTVFX8wUWfPdvCYjhm2fkoBnbFqu",
  "key13": "3QSv2K7xF4Ne3mVTmMEwNmqXqow1SKGUuwPuA6vX56S8WWFgomcynSiHUcQ35hk15khfyUtCzsxMJNVYzsRytxnM",
  "key14": "4hPTasK3yJGPdCzyiG5mizcBu2GGSXiUN63yUkdJfkqxV16XntMQXZM15iACDRGAmaBMg1nEsVNg1isVA46EXKFj",
  "key15": "4HkVYwgftTH6qixBBPmxLLaS1gFk3RFD3L6mtpoh3gehL8wJfsSdEbezTmzTB6kgd3dH9HwU1TMgxP5vhbaKJgi1",
  "key16": "2Wb6RzLXzmX8rjobRDmvKNZmFpWPjyhPfimDBj2ReQZ34HLmRxwskpYrCFRQW8p1QPtnp4TyRBXWoUKbXDMLQo6",
  "key17": "4H52SZtx1DCDCGGKh1KFiRyCuLZo2C5sim1f5h4megRdL1FXvxzxtx1pWLHmZvPNjqGerz8QtFsNVWUECj5aZcD9",
  "key18": "9ph1uV9wkDpAJRSvmnwQGDMNJKQfQPCyREQSgHtoyhabdHorXADXqNFRvb3EXdG6zPs3C1zNtj1xsSWCfFhoVKS",
  "key19": "4TgfKAizYB5X96XeiLBWVsbaa1FHhK7ZCgNGz99gvieEnTsWMMCN7NL9RZYXxMaGtQqMKt7gXhq68cmVCCjYsEQz",
  "key20": "4SmWpFwBko7245jgqhAuXNRGH4mhNVkfEuLHojxJJATNNan3HmszafauL5Th31JNkuUnvU7yfCHpKKgzW2NoVWAt",
  "key21": "2RPH2929HZX1zryQcX7rC1UYrcAcDMwt18b3zcRqqC6KS8hd1J5hH2xJ6jRexBTkizJZS4g1LRjdRuJvaMaFHY8S",
  "key22": "38Pwv2GGBCBzCZU9qT5GKfvjA4f3qoyAqvaqT4TkoaFcqcgCP59pvVfoBSeDmEkog9e69F25q6mqTH91KShGjW8u",
  "key23": "57XVhzN7vC3Mgdc15SZoUC9PjRbqBe6KjoZg8w9uP2rxEimzdLcnQpXbhn4VrVXMSSiSoku4ZNcwoRdHmNh7ceLq",
  "key24": "3xkSxkGyLEjbGNkwWaLZvug5YdE261oCqveC2NCuzhUAY753yXZZhgyBFCEo7AkGFJ481ZGJUurRmW3zF3vqgrbC"
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
