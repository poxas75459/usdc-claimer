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
    "TC7DA7CFyf5sm2568GLuwN4Cmfk8L1b9V5UQhGmetFFiVxEN6beDPpzwxE4U91nGJ2pWV6jKmjYHkdkuyt87HQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXs3VKKxbkHBksV2pZUCPmSmR9zQuN9ut7hfQLUFtKMeZdBrcWmiXF1Mo8bmWmpkxeYB1LaH4JvBno4yNwX3Sob",
  "key1": "2NxBY77gHcfj3jrc5hhys2gmgrN5vLpEdpzfKW4yitns62SKMQfVYtSajNnw1uDukEVZ3U9gP85S7ErhNMT2zAu3",
  "key2": "348icZtwHeqr33hhNXtCHzoRLmPUfrNnr4uBK7VsoeExWRqv2K8nFD6JRb96XFUYLejzZSM91CJdcXwjJzbu4nN2",
  "key3": "JRq1R2cDxmeRkx7Lv1dsMWmYJWSjGV3rhb7Ly831EsSG3vh2rDSp1a9G1qApad72qfZ2MfYMYmg8UDNMmH6XnHE",
  "key4": "5anGYswn8pTsPR7CLGSuiCLivBr37m9WDiioe1FZcQVc9LU2tmtcAEaXKWQXdV9rtmuqjwGXc7nRpuCwwWXjaqf1",
  "key5": "5PXpARzChUPMfjQevk7L2uh8VZFvCxSCHBHuybGzuNPcvPXgAMgm4csENgF8knpSDf4xLPp1E8nJEEj5D5tqDq46",
  "key6": "5REhRwoJDH4Dfk4PDjmtfiGt6pB8ug2YomNDgAFRxaXg5rbeSAPjQfwXbisqKyC6s8KyPpJXSy5Mvm9KLk8PihTn",
  "key7": "3mbMGcoAX3oSgCuxrZEukrqpqpePGa5LoFxdQb6qceBcEV9sxgCErRd2bmZTbfVUcbHC3pntFG2v2dvKsn8Emnjn",
  "key8": "5etTGPvwk43xHgUgTFUK6gu8bauR5CbmPZGfeB4EoF9soUthFX9XCWBBV1Ng5gHdEvKXYTsKeo2k3zHhFpHVsTkg",
  "key9": "2hwgFSQnoEsqUUUTUAvUSfrxeXRdwmWgGKY261h2pFBKT1jVC3fAijkyDf9aqab7jofACg2eNAtRH7VkvWr5m62s",
  "key10": "SWKRmCH6tdPWgDC394Jn5wwqSFvRw5rAnCRb8yATXLGT35gz9TAW4jLVrgVyDwn4hJS3pD2nLaD2JpsaXCfgbok",
  "key11": "3exgqD5qAZUG6n3hERUJQhkr894DqWPTM1gNxaRMr1zgUtCrXi15z8pNZ6arkmksTqzQUDnTxNMZdBN2x6cpSbjZ",
  "key12": "aegjYbAqtDrjHhC6iPLPzS7xwtWhcqVmSADGduVCmHmn8WyErev55FZ75oco4CpPR4M9T7atZdSLaaW1ifK6pq7",
  "key13": "5aSA9mjNoDLoHPvScN3n3xNWrJtQ8194BpGXDbRsdfh1HYqJz1fgZXDA9BP28V4PWC5K5JgaboVA23JELN4TApS",
  "key14": "5U5piMJjdD8pWXrJwoVgYwMT24rLn4JnntezmGooMjpZNhzMPFGXiyTZRCaAMGP2cAbT5JfmeE94tGz3ppTz8zB7",
  "key15": "2NDKuHLwUY2CSXGFZNyFeohp3fRAKY73oRT5dNoxWU35HZ82UyrXQFxJmWxnAKftZTUXVxBuRAZcMGqfRFQ17dnU",
  "key16": "2RCJaDR8RTJLWp5C598HnAtNNPWCtgsdBHtxaADi4f9MeFFdxi5e1DFtVscSJsSi1w1Ms7woCGRW9HqjQpnERjsf",
  "key17": "3DGQHmqo9xsF6XDMbeoptrYFTGkU36ZL2jyjEaouFX4d8H3RDWcBe28zyBgBrynAC9SF3KY9PLotLFcN4dQyXDTH",
  "key18": "4hhvd4LSkeAueNcVFFaVrtXcdx7NhVZsGxJL1U5njMCjkfhD5Bdy4fosKYbYUpym7xq8tYnAoviTAZiVinpFaNbs",
  "key19": "2e14u4SY8AfQsX9yw25aymqToBtmA3XeWWuiw2r2bKAn9wJo81j1igSRUvGCYWXqaJaf4b7s29AshjTm2ecmFzAa",
  "key20": "5K5H65B7VPdjXpPzKVkiob2Rh3KKPY1o7CxHWqoNat3NuyV4MjLw7ZTyweFRzg6PmKAYVvQSCPgvRRa4W6g8Mz5Z",
  "key21": "4rNKvpaXg5Uhm7AbBtBL3bUKgpjAR8nLHVioxPEQmxwt63QuaTsfiF6yWfrnTyFu9z7GKRKbQHVmNCVKUrgKrACu",
  "key22": "4BuL2KMKmK4HScJ6XGEbA6S9ouZbDE5hvkLTBHWU9x4BSAXgSnXSt94Ju2QwsaR4ATizmpgmQDqLeJvjT14PvnB6",
  "key23": "5TBAB1eino2KQVUozTWY4HjGoLumxCCrxtniRn7c2R4nMGCY87uNfmhH7oxEwUJwn2QNwzEVFRzK6SUiSbUx7H9w",
  "key24": "4kg1aKAav2qgYdh4Fy22TFvJi8XzAyD9jVLQ8TiUFt1aJLYVfA2zU9cBFi3V2RLf9cryi6ewCEGkLqp5p3kZ3Mvj",
  "key25": "915t25wg7d3v6RWk4tXxByUirky9XRFAowMQAeJF9vjRFNPtH984pzczoB56CZADhX4Q7fKVZ7CKDNsbsgsndNb",
  "key26": "32duyTUq7vqnGkAPgr7djYUtT6FXCiqLUETkG1qe7rGU5tuxVUnVcw9ozrH9dqhcCeMMNuo32PbZdu4K17EGmuz4",
  "key27": "o1DjS9g3h1U9rwUmHgxwMmDMkt4Gt4gwccxRV9qKtD4qbdNxKGUErEi6XGMiYjjV2MR8rFZo4itjUD1EpEYxREQ",
  "key28": "ewTBG6xwwA7LUs9TLnN1y4DnjrjrCzkqYXyGV4YQTXpcSJPBmU92GoFmQd1R5iivsSmMzEkigHfn4sDT61iCoa8",
  "key29": "Ekfmg49nVcekiXFXNn6jwukuYEmXLkGfeyejqiitovGdnWScvs8yZHfXYnJt3xLwWpzJbWnnekEymvASLfupSju",
  "key30": "3B3vvX18318moBX6XG4urQUHWnGegaQgmKPgkcBzWG2FXesZuY4DgYB7kUjRMg2FuWHV4aT8P5Kwv5XiiNd9oUXN",
  "key31": "2X9CxF6PdEX8mLyzpRdpBviPfHRQXEC3hazji9x4d4CiaKJBZprWa6KQ7CAbjfTcDanXEt5fp3DuXzt5nB4wuKd3",
  "key32": "3ENg4uVthPF3aZCEEzYLdbFwrAmRHYE1wBVYysLSZWFnHF2KexG12g6s8epkX6X1Mf9LV285whQxkYyqCbyqr67Q"
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
