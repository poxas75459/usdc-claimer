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
    "KVmAySo68MCPR5xXJQYnqMLi4drFtHxkzbHqKB3wusuqdk7aoTMxmx6MvmvwRCExMabSMXsTfVbpNvMs67PhJWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tksF98Ny9Q5BAm4CS1EVtaUwcb5xxBaiiEFERRkgJUr3c3kPMvdmrZZAtNJufKFFeA49Dw888NCmvV3dd85FYkJ",
  "key1": "5eUMp2ZkUVDTn5s826HNGhk8M1LucmSgQ4Wwi5L8AgEGYNnKcbdYTJM1Zs7rcMPtZrnrtbDNEq34bTq9sL3n9oAP",
  "key2": "2uNzLz6TVqeHV72bZ8GKWmxGcjMojB63dTcfiN45SZFhhQBvnYrCKGMXHH6h7XW3GatPkSFHKHS9BgNKFW9HjF2q",
  "key3": "5NtNTs5LmNKmmLVJxWM82ay5ujW9u9yaTwC8LA3R6j5fkp7pnzKezNA1okVds1NTwbxfGquonQuFq8nPH62fL7Qu",
  "key4": "2gcfHbFGP5Va62ry4YfMpCck3kgxrgsp5yHdEvaVt9A9nNAiae9SBhGfpAtyxF71EtmGT4fbtuuoHCwFWzWCnusm",
  "key5": "xzRVzeqDmtPg9tsvgGJWcXE7nxq2oDYet1riRKsrmoyhC2FNBWBm5g1TnjzGJ3XaWYzwx26Ri8HrVtBtn3QyGct",
  "key6": "34tGCYHGH8EDcRUrpwqgGLJqMAYA5hDyodGszYKrjQCfGUzoNzarWRTFfxTqq9Gqio26VZZS99c9wsM1pnMBJ8Kt",
  "key7": "3BJNvBfTYapFdyzn6M2yXRqjKrV3Ly6wuxoYgThwy3uc2dhmKWgJnhJFXbsZMPmur6t12oe1gA42FN6CVNyq3cCD",
  "key8": "uveLV7grS5wuPicc3DiRGHGUKdmh3acRsfHXnk55faQH9VMX9T8DWyFtwjtR7SQsTVyXnLu44r1omEpsk5sgDAH",
  "key9": "5v5xcQx4YNktWwfnDyccyhUisJfiE25oksUcjGEMW82QmP5kXgk4pWsyFWkbr72p1tR8xABmLvwQvkKZw5sBsJkE",
  "key10": "3VnYLJg5AtUwnpS3WFBnbdBoyd9Hw8Z6QN5GsqXqxhMAbm3mnfaZLbGxikCzdvfuqDGvqwZKffU3h6HUcK2UtFp7",
  "key11": "4MLeXuNkveV4EjM3VzJ6Y9hgpvmUUWWiV6UTKpTpK1CP9awvTxA6p96gpXmcCyBMAQVykwAz6QqMmmMRq4EJmith",
  "key12": "2K8euApci5qq6WN4WKwYTBEnrMpguC8RP8t6X6VhF9tvveGFcfQSLSvQqey1YzffuR476Abnp8sSyFLVFdTGk9zf",
  "key13": "GDQ3BC3UuBw4Cetm1xMdBYzofnJbymgGQw7kzhUD8tJFjx16BywYBvAWSGiwo1dcrZLNAX7pz8XzRRxXAVS4jmY",
  "key14": "qkxPKFHNhedVjp2cq5ujFhLypPuZjPdMLvWf4BqHgjeJRiTyHJR9kXeaL9qv238iwMms5DcSLocXkKW117LSeKv",
  "key15": "6198G68WtdF33GiZj5vuMnrSZhUWxASA1eoThSGCQMH3Xc5qrffg4hYtS2SxbzPKzMYzR3cA6Eh17HoB8oY3cUAP",
  "key16": "34cL9rTzreWZVE6pNiEjnJRUhV4smgmXV54t3YbsrXD53c9Xpsy5uGuA2vkXMb9kcq4XGu28d1sUkvsSVXcDMBDv",
  "key17": "3HSufj8bRFiL8UVtBcWNQQbrG8ouwpBdDNcjRdgCAfrRD5stfEx9wAsdGCkpaBgaeZpVKhHNnyGQSrMhvRdGwUvC",
  "key18": "26EV6eKfXHPe8MyN54r7MDaM4MQKZ1YDcSizNxQG7PyEaezQqY5Y9GcFHjkf3QGtSyiAcqr454wcein9hDzxZpLq",
  "key19": "2Jpo4LriqnEgVdGQqQC5cSBHLHBMpBqwHo9QmfLYXonozY4MtMttwcjY5n2jvuRj5MEJRxzShTwZojsBxKRRb1ce",
  "key20": "jqsMzHy578avRusR69EYyHc4gMZ1e4XxKfJUcnz2dTmYSHua9wMCwfqXNNSg3kkGJRtYedg59oEGKa7EVrNJaEA",
  "key21": "39S1uCmkuFq269mphA7e4d39SxXwAm6Ajjta1mFPzeBNWoou7tCgCTUEZDi9XkAekiaHkB3yPfmuVx4kHYVfKEmh",
  "key22": "23bU3L9MEaiyy59vxc6LAVsQQLdnb3Y5f5jfnoHeuKEwkUwMQTZwqPmTja4Q3NdFmJWC9KpZeFpoVx9eFZQehf3U",
  "key23": "5hbUP4BBoXYEZQbMCCZiTwgWceHy5Fq6BYnxSvTWLYzNd188Pnf2EvudPm8hGHNwE3Fhm8zWV6xSxWfNimCZNkEY",
  "key24": "3F53T9iEQiQ9ZH8EZ8cEeWG3DSW7setwCRhk8CPpxC9tDGvLqUdfkRgagqv7GG2BEzgshBxasV3FWe1pXipNeT3J",
  "key25": "5X46LttSS88NebVEiheg5zmLCzULuDZ8diu9vKrkJXmKnRKNDGVSWn5xGmAx7VYBbJXbxi4biJCD2pHM3P1NQTon",
  "key26": "o86uM2KUSY1q1w5KHYvvoiYtv89ro1PDLXxTTZ4wGF4eBqNzESMxFUTph7XXds4oCiq6vZ5kAAKeWcRneVqMVkS",
  "key27": "2z7WxwJyDGe816T7fmfQv6sGKESeGTpQbViRykiJKkZCML92YRqZp5P9YpFfD1uNaV2p2koK27x2vHVfdhFQ13mA",
  "key28": "57k5tYPvsjMtwUWWbei69F9R3JfTNSrjnLDSjYQfNcn6kkYZp96q9ujdhUGNUTi8uJXjscEzVcsD9sJDkJdv9g7B",
  "key29": "5seRfsu6fEpFeZAoTSURHLkdCSp4TWuPpQL8kgSTExb1zT2ZcH8cocKAJJEZF6sUaUpfUiZ5a59LJZEraP2WxfF1",
  "key30": "3h6vM2MRqtR2D2BEhYPan4vfeR8sWCmsNKQZExg4t5kdJ8z8X1XR8XqyCgCJGpNsuiGhTASVwpJQyUrJA2PhFoY1",
  "key31": "2nwAzbJby6zWNhdGC92wGkEiD6N6cDsouGXzykWiRmX1x37HqTrHLrWB2QhdVw8rPj54tmJDjc2gswPMfW2DrnD3",
  "key32": "em2g2KEoDwW845ADJvEf5L9kpzi23XZVwAzwhRiWQXBjCRiyFjh5qrQBhbsTxNyW8kdxGFJdR5G8aD1gBkgH45T"
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
