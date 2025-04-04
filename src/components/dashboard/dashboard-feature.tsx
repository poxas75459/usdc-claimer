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
    "2jRdLLRGJ6n8dAMwQJVjPo2TDheQcxXFjTmyK1WuPbFeJbUpnjaYkGs19GaVPnaFe4JTAkTUcigQf93Tj3PvCh2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tJPY8fBNCsVaBWf8PPGJoCr695vf5zysvUQKqC4TZo2tHCA5N9yqGUbpXW7bCL5Jh5hBeLPf1A7txUFb5zSpRe",
  "key1": "444A74RmzYRVPHVWSKngWL4o2PWdoqZDAbDzwozLEq7Ra4nYZRBHr5NGFAXe6RGxMXmhn1zwMmJqi2V3WU3JDhun",
  "key2": "2KMBCUGDLhTDoG1LWMUTxrigEwqUpHV4sGxM3T6xzu3Gsw9bofvoo3VPLkjqnzdobZnQDvXjhkBnhxRkDN4o5GcF",
  "key3": "3oBCKn2eXcKihokVAsjYKSNk4EDXpusErwxw9CHx8fbZAaHS4M8gTq14Hj2woaa1m2focfKuqazcwkZUo1qHkUSx",
  "key4": "5HBkd3c6MhwF3GV38L9qeqmuFXdYzYC7ABcaQCFUhAzw6harkKC7VsDxoxEf4NRPnoKqtiZ9xsAqgFYfEj9o9KSu",
  "key5": "3CTXHm9gzgGgzeGr6jHLRC7YX2pA1Dssv8KnqG23xytpXs4KNADGV6ugfAszR3fr7uTaY6GYdDhaETq2KLBdw9hj",
  "key6": "5PYGmojAD7pehnTKfTxbGZTj9NZUJubb3Yjck2qcEKjBQfRGDt9frhEZ9A6hDmo3rDYpqkqFo1DUWDCw5STYhE8m",
  "key7": "5jgeTatCBmr2BYxJ13z3Svga9NZ1YzPD5tTRPrHg6AKAaPL5Va6PX1nBp7dAPxKqL1WUqCcavpyy5oZNDakVYDSJ",
  "key8": "2CDvWfMZDXTCCPKQ9qoS1BiUaLWtX2DSS4WEcwraPn7agrWaz5yHgosYtjEyuRt3BLFtSCz9H1R5x2aaXxYr354V",
  "key9": "3NDkbRnMVMAYehqPVDFixsdGRUB8eqTmXBT71YCwkF6ZnjvpcCqraZjPdfuonxwLMDi8XgHKF138M22D13rbygY1",
  "key10": "4UzFKpYcPniYwsmcRGmZi4ca9maVNun1hQp1uMnTJqthEHSbw3hQhqRec5kuEYFYWwPUrigBJx3YgpLpELnckxKY",
  "key11": "fEqin595y1cWHoXyThiHfikp4mV7gGxU7AS1qJJ68QA2qgZtxhZrw1ngNpVCwZQS9TidSLYsGBkGvSnafwCnB2T",
  "key12": "36fZoj6jUPDqLmCbeLMJmQmPmLSG3EhoAjnEAtKGBXvkCBiLA7nb4DLKQjKMZs8gLM36kcDeVCfFRAg92NfRHMwr",
  "key13": "44sCHvpCxi792Sn72YWEybSh6MwCpKQAZQjhLneEM4bEoGyu24F1Tn6ANHjoJwXF4zi5JXcV8GdWn3vdTgrHT2RR",
  "key14": "5THLAP9esnurQeGmSv2Xnh2Baes8shTCCVBhNtBUnfn2edNeEYN3G5mKWsUd6gsUBkAJ713hpjt1t9sEAWUmwLqs",
  "key15": "3LCzVkENhPGbNmcPtUABi7zwAYiboG65ZKKDfkiVvQma9xLfG6GSPQEtogzpF5dRUdtq4qGe8XDzRmzBLm6uJCXL",
  "key16": "4aBfLXWtVfypwZvACwkdpmkP89EAMWw2FqpwBksa2G6a7QsYNoBJaqNBMdhtz1WeLCyRmX84uv1PfB8DFstaCrkf",
  "key17": "52wtckjvDhHprp73vUbcjyUVUsCSPXzoBiduvP6oFLy1U5m7PvNTefy7NUEK18FWRzq6pPXLuCw8xG9XzVhDzT5y",
  "key18": "4JuzresHpgxEa1KfjVgvg4dr2NHNyQp8XGwLESPTGqKzqJqgBcD5xXYhYfMskenZRyUavkwi49JxFWDcbnFAK27Z",
  "key19": "63WCwzwE7dZNVux1ETi4oFT9c77D3hdG6KF6cSiLUmX9xVxBdDoQJxb83xwC5BMiEMimrNeKrYNCH4QegGShYJ3x",
  "key20": "2Q342FRUsZ9GjsVDyZ7gfuNyewxJdpoN1FyY4riAGvLiAbX1T1pJYuMgvV8x5dE1z2HhcXtamJBzv4gWB77SyXet",
  "key21": "5nPWzCdFnkX3FbirybvcSiLfWEGn1WA2QFZ5EVKR9tZgE1gdnzKB5PMn5E9ovEv9if87fwvunvnJS9f6h6STRxRR",
  "key22": "3L5BW8Wh2QstivQ1bujr2CznGrHBviNSR5HTmuyaBQqx4VnpmrWipCw82bAi6VJSG9X23nBQ7nU8PJrvecfWp8e",
  "key23": "5gU7sRDH3hYV6JWKquQWNntUJAXGiyQLnyGBran9JYr2W2rUFUFExRHGmUDX643feUJnYApuiTPyJVVoRWAcvW3e",
  "key24": "45YvbohZWQgVXGboxtez7YQTXqoZsjdeyMKgr8Z3qEccYGvw6HxpE6m9ssTLrB38XrHfpydP6jVyzuTLZraAjDKX",
  "key25": "4NFELgQ4B3knGSwkyVtYK6697hFML6CsoukjaTVgmpk2s893R8zizm8gDRRsSH3cXFEM1SYN8rHsP3ctj6yK5PBT",
  "key26": "55XjJBmdCHHcQUbBv5MZdeqJHDqMqerDYx2TWpYRkaSJ3dYdHcVopy7NYCxN5JHMLkPyfTcBvQ43EcJrxTL4jszo",
  "key27": "vDzj9KuoWw74U7edoQWp4axwJNVjrnJA9CuFMD62qpEmxsUj2H4V1a1PTTviso7U3kcFpMk7uRfBt1E583cAERH",
  "key28": "3LLmJqHR5MBCRzo2UtpgJnTWJ6a56sG1UtEM4oMiRQPtR179URBgGEAWxWs9H8FZdNbRsbdukLJpD7YNuS2p2k1k",
  "key29": "2LtiY9d6nW4CA4ZwH4nJtjBWafwNY9hUu7GXLFPAp65uaggCLq74pz2qthcfZ4ELerWUjAfHCvVtK5tTrTn7JcW3",
  "key30": "4s93NF8y2EKCikmNFUZNHPatc6NBDrvgMBpU5agfR1ka1yuWem5aUqBPFqYgxzT2MyVox1SERDh5PiyEmS3QJtHv",
  "key31": "FAeHveHHdCbosGnMMFMYEwr46hRjDNV65v4js5En9Mcp8NVjbsTnYctLppggHpyLyTALGNH5TmnvjeiM5cZXpgd",
  "key32": "5PKNHcwKXRvqddM4HnAKCqmT1iBruVZp8VJ2A7GWarth8d7gv8PxtKHp2XFMC7gi5LtsdBuUnLuTMo7nyjynJLiB",
  "key33": "57rTnZSAEazGeBqFPasGo6h74it3E9qg9C4NqYnaQVsfXHnvrAFXF88uoQsHYKSZ5ouhdwJRySKu5VBGiPdaxMQD",
  "key34": "uwB4oPzHZnMLr8k3Bkh43SGQsLzGEVkZvz4726XNeU41sitAhAmUZ8GZiDPZsACmk1X7PDirnXfeAZQWGUjRt9H",
  "key35": "2bbvv5eTqfXjspdmntavnXJy4Q5XsmYEj1bCHqMwMgQsB3Qkky3X3EVhnQTPWVYZ7vhumCMJvnV2j2271W9wZZVY",
  "key36": "5ckp4fGiJ9Nu6mdmCNWoST6F4othmt4JXzzZv1QvPscgFHZR86eYtvNrtKuhVWFHQWm8vM5dozqSdLUp86mnuHHS"
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
