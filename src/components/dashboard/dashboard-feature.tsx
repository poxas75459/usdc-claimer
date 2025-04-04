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
    "2ai8PjHnWPfwaZx7eVvkfxBu5MqaXN51NTv2aYW3tDmVvnMRPSEzyPkxZe9Q5a7zLpQ2AdcgBzBuFse5tHSBnhFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efSEavW9HvPoyGDo85p5fjKLRCQ1dutmptWRRFFBW28NLQ4NPRZUv5wSHskPgswqjtCajS7Gpe5Pkmmy439rLjQ",
  "key1": "61UgBrUfYESXysUv2ghfBdZgM98jq3pGUod4WHLnNFiHLbk5abwur4Ua8tuSV2A1XbqMmsAFoggnLwGpv4zc3U1g",
  "key2": "519EkdCRdMJjXXttVxZT1EZ79BnNx8Ys7KLW8kvYMj66pTCYnVLCEGstgSQENtdmu2LYRUDuU7sRZvdtR8oxmWvF",
  "key3": "28UMnyArKXuYPutn1VfgGNYy78jzykkwsZqxVkmnvpErAbSNadFbmwHCPWDaArxdY3VgyYzx6mZrZEfYLHhu5Wm9",
  "key4": "AFNAiGqrbRzYgiMWFU2PXfweEibn6qPk3KxqEMkgXeUjbQ4pohfNLYaimYD9U9wGuCL1jU8UnnHYF2ej76zbW5G",
  "key5": "xWEgKWeoHVcDdmWvbMSLDdrXypS47E13HCEAjANjSQw8jJLg7xtXi6w9wCg7vV6fn1oa9SoUdmiybxNk88yirn1",
  "key6": "4XXsaMdfx5GeXv3suyB3fVnBeCouiydEB4qGBBv6PUnJLQzDA2HB69P4kB4rP3J9HVnKLwb6ff7QtykN7jqsD88N",
  "key7": "4kiePmE74qaJFodFWKSSWtp9yKbvk3UsCtQJoHSMtBMEeHTnEj9QQG5zA3RoN5HShXXt3vrvhNdD3Mpbj5hBuceu",
  "key8": "dufP9WjsmHG1KFPbSFmvKvvvbMk3yQnSpyNifTinEhpcsuNnLQHcJYcgn4EV18NcKLhPLjvUfkPXKLQSkjCcFRV",
  "key9": "31UJXWmDDdiMvQDMo5yUSEftU1c3gDQ1EDBvTfQdMEwKqwYvcWbHdsX573Gu4HzLvNN2yKn6Xn5ytwXuXPy6BrNQ",
  "key10": "3XJ1GbANDAxSQX2YgTY9DvaKanBbshdQ7vQVKT4rdmRLxsTtM12xjuRAd78Bqw9p1L4uphcdbfEXPdU6SHSoMGS9",
  "key11": "5ZrTctC8dF9vmVFKtQtL8P1kGcGiXnhsAJo3uehKTe89zZZhAByXAc1C6B1kkqmxPXMPe8ypYiFonbFTq9QBUZBa",
  "key12": "3uSWVviJrrp9YZPkjqtEQiwiVxQqC6dtc4Zen69XsZ8iiei2gJdhycY95gTLhAToE1kyAciBE7u49DzJQbpTXGY7",
  "key13": "2dc4grSiBjgXAVgRZxiFSmFvXU2i62KmxLe3d8gMjqMEYtkth37RrmoKZCVDg1mB1qzQQFJdXRgeGQT6HALG7AWd",
  "key14": "29MP8UmsM7jXoybfPtsb7g5tcEgtt9efTAdD7GPhGu2CtehCX8zoEKYotkyoYpv2XoxN8eAdubiWXic9Y96Pkvxn",
  "key15": "4jkQQa5wfXAPLYBzTouNL1yQVV7mNGce6dEoFLZY1Fj9e4WUYU624gcRDj59rY4zRZqnt1ZZhZSBpz4GQN3eiBNj",
  "key16": "2zBoBBNd5uk3edoKBv19qBrWJRWdNtWZdgYpaTVWh1nfRvBscwWr885FZe98JRBNqdKg3Td9WAiJwCoUNMbHQnBH",
  "key17": "613ZqzKuQc4CT3GEk7T4zsFNZfHYV7VZ8F1oUNXbBrjvAYubhKkZJsKHz1DHkhqb2XPUnxGHEoC5fQkqQZ8epJaj",
  "key18": "28GSx6jjg6zszm2wU75pSWokhiYHmA7CHgdZ6c27bC5d3MXWxEaks6CGiZsmyis1r2z2AcmA4ykH7PfhyLGVd26i",
  "key19": "31dR1ezqQNgSxmSy79TX2Ka7dzUcxSvhBYB3c659wGv1TPfXQoeRZzFLEnQAGe6imydDvHXtrVBmRjtha4enNZoQ",
  "key20": "5uVBHoasFpVKEVS1NuCAH18gyCS5uDuhAwsgWacXVgNv8fkM1spaqh5DSaQsSndJxkHQPwWH3gywC4af8SpaFRU",
  "key21": "5LSAsyGQntJpVYNChawGAjRdXCDGtB3F8h6VvK6VrHFGL8zzj7xf4vgJrmvQwunw81FaHW2iq1cyEqYzFrMmoUxh",
  "key22": "3uFkyPkWnZ4kg1SpUFJdXpcVnucnYyQ5Sm8igxWJZL1aSgMhURkBhMbtYZTeNG2nUZGuQVZFgL6eYMCqyWaDkFEg",
  "key23": "2vBpkssaZnZoyJ1UsCvRVGWQ3ouF471AXgFtsfZpdRVneLkJvtRwLuDyDJi8W1WGy9qrgzjUFCAzhpCZJbziC4W7",
  "key24": "2GTzbxbLpB2YdUt4uJcmxRnb4g93BeJ1he59SQUFSviHeRTnwtnX6cdgJC1Cu1pEziDam5oGmWXbhSXFr2Ph6et5",
  "key25": "2BSHzGzCqGVxJU9Ci1KBUfwY3x1WLf18xoGuLo29zeTC75q2Cjywwjn599RCjJabojm7EHa8AWFQDii2ccQ1QJ8",
  "key26": "2bN5FrHb6MiGm7HBojfXGCjXcCrcEVzNzAJDbBnSTc5EFddnKtdvxvRyd3tPAb95Af9kfpKuNBt117C7Bmebf2Af",
  "key27": "yMnsxdMktQFq46Vf5sqr7Xp5WiKwJDHyd1AvTKSZv7ys9f43hLfriG93eZRhkhHZEn3yidHRiJRCrtoy1GhCiCH",
  "key28": "s75fK4ea2uDWtr1xgbcqF1XYLNuRV4xszf5JQrvjhAvLL4zfmsoQiTFQAQ686ny4quuReqdvXioiF8dbWz8tvHR",
  "key29": "62mb5JC2RhzrLiLXFcXgZFbcQBjqqapPQTxjrMTXMx1T2pF9vpLmtiwftfkeSbUR4EXm7L5b1LxkXZZP96mzhYsR",
  "key30": "3g1syNPE2XEJ26F9U7BRotDwdNgCCFTs8frHevj8T6UanUVKsbAygicMHKkCxVK5mb2a7pD25JM2YawGMpPKjwgg",
  "key31": "3htzpdEhVowX7tC5Ny37eRyjGu2M71KWSnwtEfrLMFQUid7o3vhTQY6doTvD8Vc3cMWdicVRPtAfJ3rf2GBdkNVV"
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
