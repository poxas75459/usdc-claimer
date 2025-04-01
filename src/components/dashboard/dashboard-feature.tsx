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
    "2VRVDLQzhhChy6VgmRCf5T5GKLTYLuxrv7Fw93edXLmr6MRx3DzFGAoDPauVgiq1Vhk22L8G6cTddYz6KAunerb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gm4LiQkbM6wxn6qr4nWxgTbiSFvZmytf48FSKWdZEBmiTCnWdDJWZXxU1mxMGooKT4hJGQgZNNRdZ7CYQfteteG",
  "key1": "4EJz9ZUEE8oVaDcrSs9ZfyT5QbG347cqdhmxjG4MYbFkCgxQNsMVfK2Djt91drPvaEp2LeNJV4k2fjQjXBrPKSxH",
  "key2": "3PR1S2AnPX8mipZnAeWtNYN2Bo5PJEYfsJxmn4ReBz48oFgKeh8agyvJBNGBYXCfHra28ArGxpakJiCWLzbx89du",
  "key3": "4Jct4UFYFHUU1T2tofehrPvRuGZLdqu1qNuR1EK7HCfMLNtHsCyL6Km3krfYtKdZnhxznzQmvALzr4AeZMZAqYMV",
  "key4": "3yo6yU2APeqxAYE4cwwcns8m5bKc65wREWpEbZ18ZgJKYDdpRD2DXDbogCKo7HqCskeVkvhJVkEytNC5Ue4KkqBT",
  "key5": "3BjbTgQXsupKbfnmYmVCrPA3DWCUTdu4KAzMNtkeCmPu9KkoS5ig3ZWoavFfaa7eixa6ade62zn1CdheQwF5s5wL",
  "key6": "32DZWgjhNY1UbhnAGVpH3EEDA9YCRiAyE3fRasAwBzg2ivvQVwv5aVZv9986nV8e1Jep4SgzuL5wPrQ6JiGPeSff",
  "key7": "4AXeMCJujct8ARwiDZeumSeWgytXdjHzPMRAzEdKfds5o2RpchLA3NBRANocHFXY7wTDnxvwonMLREo4h6MtckBx",
  "key8": "hNmr2tmiFzeDiJxYwuXdeUvcA6i1NtxKw3v3DRU6QWY4AqcMXtgeJyFiLAi7XZ2RpejuuAZF4Yxx9Tc8aVpre3j",
  "key9": "4myREfRHBEvmnKh3BbPaRaNu4xMT3sYiJtRa2qPm4tRAJ2UdBkhM7YMp9s4qNHFGwhjMZEEEs1kuhGb7JwW4dN1o",
  "key10": "2hHA8K67LPaQa3VtsEjMex75as39BXipgBEyKBqpHFEZMWUNMSdacdJM3oRXbz1Kh5PGiBJCdHJZsyCF9KvsTWkq",
  "key11": "2WfedbQjwqpxapUKNzYADcDafyW149YhBf9hzitSBwE4UJ4MT65Ak8dBk5rGszov6QbzdJt7JSfwZ3QN516gzcFv",
  "key12": "4WqTTaaPNMdsQ874qawFTvW2tovhMgwW3x2AR5J2xuYtLy9uYCV5UiSPSzorDj7YDagf9CeqsDQC4iTk7zvwriLx",
  "key13": "5yNwDZ9Bw27eRuJiNhhwWzQe25nLSkSe69T8eKM24BHrRA9fFzjbap7bbuLneF1HzGK543YDsGmVKPeFr3z8ufCy",
  "key14": "56LQxQEFzE4YZDRno9iiguu2VKoriFjksG7M2jLam4wgUYsgcPzUtvD1dGseJi7c67UfpnvmBBx9Z4wnFMXoaF8v",
  "key15": "3r1JBjWbzzD8GSjhbmXSvpxu9A23N8CVYLxkocbnjzfRtUCXNtHaJDyDy43HdRAN7Q5QziNnYV9HyUgLs3z9qmz6",
  "key16": "5kYgrb3UtQjhLvVsAAVCJcwfLyYSzQpDYm7AGU9gsirxPtuvboJmH9GcSKtWL4gDtnEPmZbnAyE6nQFUvBVc3X8s",
  "key17": "5dPi85cgHLbrjESg4UWC6PoJqRcW9ZbT384KLXqmweoHditgRbaxq9aVyHVzhb4CamagmhV1bxaT93jfvBFEpk6B",
  "key18": "5PgnR61rM3S3XpUcxvMydij7M3gcuhCewU2MkTPEAgop2v33BH9Fnud7c2GFkFrCYMkQdNCeF6dLkvpaxwzmEcdn",
  "key19": "4uzsCaU2F4gPq9sn6UQELy2SD43r9pLjmL8cN49vkQQsRiyHE511B9pTTAJcfuNVS5seVksox9X1w5SGwe2jPXrx",
  "key20": "3cUU2dA6svs9vpp4ABKy4HDndexk16vzBASCrqnUrGSMAZ49qNR1VnxJeNPKnrivVv3Y5YsuZHgXdJsFpbnWbcyZ",
  "key21": "65pq2LckgqcTtseFgyUUss28WvdxYnucUfyEuezEUqW2gNgTQ1krDrg26CVdoinuXMeiZVnDrusDYjfCiyLEotD6",
  "key22": "2kMfpD7bH1zjCUL47R1Wfwq73zT5RSUni1k3cSTUG8BpRsT9yZnwk3xnQhf6VzajrjWYaVMj22c8AwiyRgArW1m5",
  "key23": "56KEkf1G1Cq7BsPnxXTfKug8Bo6tpyKD5463NQY2e1ZTMrhB97eMH9otimoXZRLDJ6cb3YUZxc5nDnhsZYsBaZW1",
  "key24": "4xSFq6HLL8t7NRkPDANfCEk6oa1A9pMRRuNM4ffK19cY3WQxAZpsuDEYJtKZkf7j14J18QuNVptvn7FPkeD7NQN8",
  "key25": "QMEmBkMGHCGHNYxYsosEks2pP7ZV2Hij6hhAsPUnScNX3Pct71zDEkrmJA9tA3peY2wCriWHensn6W8XP41RaGp",
  "key26": "3SKMUQL4vHAw7N8vWXddLKygusWZxPxSGC6CU66Tyq996TQHQCtkpz53NijWNYbSfPnL2H9xDwYVfQD5cbafjbFP",
  "key27": "314C8KawVScrdVJ2i2BEBb52FtCBXVFGfWqNqJDWB5KYvWPp7tKAebQ7Cxmn5c7vqwLP3xXnp2VRd76aTsQ3CUhT",
  "key28": "3r9VBPBave3Wg83GrXBGANeXBWqs5KSs3DbpNFyzEwn7yjY1hufFpDzww5hYRNoLpbRsCHUoQtH2X5Dogc48RMk6",
  "key29": "3WvBPW26GQxjWp9Xa1L3wkXnSEApWtZiWKEvc5vzqzvFngoAV4sqo7qhiZuWqDAFZbVjYuqmSPC7QG81yKahTpm2"
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
