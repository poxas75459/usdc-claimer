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
    "5cHkxRPKJ38dZCMo2hFNF8q4yZ6FodUssABzmmESas2Xbj2HndghrLsMQYFjBUhcWwYGNAjfWTC1PQpeVh3GEo5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Quz36vVA9Rcvci9W1hoBKup5tjSJU85wKbFB3a63Te2Jxspm1zhoccy5YV3q8dbtF2abykTyH5ZgpFTjfc8Ks3W",
  "key1": "uqAARQ7cQchzoVvpBTZHMWYDrU6t1soLZVPPkzrCrRP768nr8c3BpWVWZs5esTZaPoU5jEq5pL4fxD5wzWmm7Ei",
  "key2": "2jRcynSHuC4NqmAjd47dYWss84kCGecXKKMBfUNC9MZ8BdJZj8LN4iGQED7Xi7oRb2nfEsFkPrnv3g7BzTpQWbKb",
  "key3": "4t1Ma26tJNiUxCKVRkSP3Xp5h5ZJuHfszMdZaeLw4yG621Y533ygP6VLpRVnAjqbnDeQnFFHozJqmMwBorSMYcFB",
  "key4": "aPpxWY19DH5fJFKYYP8K4kAXdLMbAPr3iBAoZDdhjepaXVcmRdMotysChUT6W4YywNqamN1JgWU7TqioJttkexB",
  "key5": "2g3vDrFa2dyhLBF7h12W8Vvh88V2e1oCncLURFUPH2EbmcRN9Xn4zv44V5zhdq9RGQeijKnz3gGUxUmh4YRuoak5",
  "key6": "1uH8dowPQy8FhgTJyMCBxS1f2Rrt2Zm9aSNjg6tGt3fDJRC2Y2a6hbSX9wapm6jUcsGU8HRU4pzoveER8fWRRfc",
  "key7": "7nZhGCgxM3ZJRQ6JdxzXHczgyZxhmhm7qrtcuiLWdPhALt3D9bC376LruHn4PKZVjQG3YrMtuZfhdYx73hCAf6e",
  "key8": "3Zs6QBvHsQo1aoeumcwehM9bDpjdN6kwtJsgq3eQWejj7gnamB9WnBdYYD83g5aJuFYHgHtcTUGtZpnzYCVuAgLP",
  "key9": "V7S84VxzFfA8SHhCZYUWBZ6L7CjxsKHDLKtzcLSDsEiLKPEoEqTcnBnTAUNh8gAxp5WCcfMFY9VHyLZccU7JFLL",
  "key10": "2CzqfHXhEBGE1h1fJirnrgb8kxA46EJE62xJup1wqo4Jg3RN7SoTpr146qzxboLZBW2YPkwHL1ByG24Sgj9D9z1a",
  "key11": "3QnHbFtTTpRz6FgWuJZt2KKiRUdoNaKsWMXGmFAar2e8iVawSdGjMrteGtegKMZLjeRbvWSdCRwhfMoX3pduxXLd",
  "key12": "giJQtZB9ziDVGfe5nhDjLS2Ap2p1DCPZQjz3vUbxXfQgmfabWv3iztVdD3eGZQqZ9K8Zj1ogtEXWbTk6X1rait3",
  "key13": "42ckKVPaE4UafQbZ5LvRQeDzYposCG7qPvyTg8tbVq9q9okoy6UD1pdu58LkRnW2WG3cTonCZKc33hbK3By9CcWo",
  "key14": "454NwU72fCWne4FDtpjc1WGAZ5Z2tdRtnJgqoc3sANcxjhsyJru6Z7jEuho4zPgrVKD9ZYkQTXgHtU7t51xhPm4j",
  "key15": "4aikExQYV1jtHUMCnBsAuYqg3w45D1jCLdPqytgntRxRKzvjAXRjF79DTPxYfsm55LRNNfKwp8sEpYLo6QsUrxtm",
  "key16": "5qDRtaSM6cgA8iU9JrTYmq7nzpAKzYCdrpfUT9BW8yLCW4Q5oe7jRfceeoDTHdNGSSVrjgSmfobiQs67Hu5b9946",
  "key17": "6pQ5pyB9sc8csA9KvD83abzruizJJ1fVZCoCSMHUudMzvwFWhc3givzgyUJsnkq9AsqukUwMq3JrmMs7S4ehYwe",
  "key18": "2jz4NDysXERcPeZ8wWQiFZXkPZ7zN3tFR7BM7EBTMoAzrZoV6sNR3u6kguBdps7dRULqLMYDbKTaR2cdqftP6g86",
  "key19": "3V1GJgiN8gcAv7gGtgMUwW2uCBXhkyc7ic26oYVi7yhrzrA8Um3gE7PbJUJbgHqxm2XsTPzvRpVKQt5dhZJp6NRw",
  "key20": "2eh5bKJEoAKv4KzMW4PJsztacJrUdpjuHTaraoChpH5JeMxLG5NHre71suLi83vpRE2H2D7sbubLrfzUsGVykosL",
  "key21": "4PMWEkKR4R5zfKyEHkKPY5bJQFAigsD3RbsQtmyeKS8wzHh2MHr1icHdJUbddWrigPKVGyZ1SELsehRmsSeqR6W1",
  "key22": "4derFaTFkttBnT6Nnh2HDPLtPs5S3boWGPfaqVWNYBnu5E9DJMLVLSkP2iVffuWYVFPgeJ4Sq2oz29u28HbNg711",
  "key23": "4htwf3oBSsChqFmo3brFxfVmxHedoAe4b1D6qZRfMnjRmcwNfJ5BhaFHurGMmTGY3mnx4cCHWr29uXUwxSPVUZYr",
  "key24": "2YioY8Vat6snXphr1r1yZJYBBcAFDetvf9ZyP2QtLtsq8m5X9TCM4ARNcYqmakbdZTPkSRQypvw1fqeggRSnETcb",
  "key25": "24bYNnPDPd8P4GLA8hsJzibKB7pnHinTUtMuP1RcQkmWjvomdGUC9Ha8qUa8Ez9VS6jqZv1vvYyJtBvuSbW7rahT",
  "key26": "2zvLT4ph3RKcS7PQjUTnmgAWuFH9mgA3dSY33SLSCg4Sz5oYkqP5sFzZUzxZcJTAUveG9NF3NeFv1xGgwdt297jB",
  "key27": "4QQAnMgW692n457v8TjX2Md1DMRL5AcWubuyqoCb4bastNnXafMzqPUdKULfM59nfsb86h75iGFzsSe7vYNczq65",
  "key28": "4SKoeJzAnNTaRtsCg36yzRowaZ7sdZpD5rvURLRVCdrZ9h5MjjzA2okGTv3mqyAjwRN8f2LL4FABHaQuBa2AeD81",
  "key29": "4Y9sfqQJ1VwGyY34zFnQDj77RAoh5NorXyTaPirmGxWpdXRE6C4E2DXv3Aucvc2CMoS4D5aweLGpHtVrZ3Av5fwg",
  "key30": "2xJJc3FkADz7iArcyLkz59Xoht9DMH9HZCs3JswBdwvUtc3UcfiWyZ8k6kQY4zJWAd6nbLwHafcnKsYZm22UDA5Z",
  "key31": "5AA7Q3CavfddynmTq3fJnWjodYeKX378psKYJJBA9Qk58q72yAULyb4wE7daTRRr5Hs4kawqPXGiEPwTSvZGw8J3",
  "key32": "3vxgj2rgbbigu1kWyoUWntEdBjpUfcqX8mTrVFLA311pCaHckqZrtKZY1RRpzgbAmdrti8JURaUwHJiKR6X89sri",
  "key33": "SSWfcyCJw3SHVpKUUUNCMPADrDxR95UcX6WdJqLez2mfMu3i2xkay5VszHQxvfozbueU4BkcoN2E7HDBHetLjJc"
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
