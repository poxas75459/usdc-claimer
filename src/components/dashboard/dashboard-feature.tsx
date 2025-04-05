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
    "3HiMuKVJ8KKDAGxMBw6ZtnKeUUa2BqLPbAPm4Lb7gn8kPgZpbbLDEHcJychNvozYeyKLWiP4P1h68RonSHWu5NLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WtZK4No4CRTiZUBbSddTEgqo1stGWtq4ruecqHgw1LGYrGTkivAWzFAqC1n2sujUvMNsBwGAYfPSqqxJ2j1LULu",
  "key1": "4DXqKSsNEfutmqWzea4fqsg6ZPCsu37yKUrEUeDDVNh1nwDSYEHBkuPz855bmXKZAvqgGfmwkVzfmKmRjnbSJDrE",
  "key2": "cn3hKbFKfo99DA7FpyTVG4nJ6851ars6FukUSjw9c6u1TzibV1pq1uLmtotZG1u65aVTvoUdP9cpQRbtNzchoch",
  "key3": "5P7Zn7Eq3BaNa8mraAQFuryC58Cw9X6HYHyibey5JfuBMnpMXZ1irxDJTtWi5vZ955jB3RW7U5wagW8ts5FLCtKU",
  "key4": "5oqqJ6bRWhieyZfVz9Kuhnqd9LADBqJzek6dJDcvUpnBtrouuh18bv4bcaaqMq5veZ6kHzmZhSafEiSERMAZWU4E",
  "key5": "M4gBbtBgZ2TDSa1Fwf1q3UAZNn2bL2LqXUdCWsqVYM74vYbz1Ln2LUYbhasWy77kADguV69ZPYd1Wbb8Xfeiwf6",
  "key6": "FTmk3J1WZyP2oDYxr6Qm3X7dtGr9WDX8wP8kD6Dr85y7JiLnXrCcdnEFBkmp8Nmrjai1VuHi5XJwQTs4CstTYLX",
  "key7": "5obbquNGTXd6u8cJuLJorxHcPU31rwxKApcfFpNKzFTVWfJ3NyrhxxxRHFKuqcEu3fa2xt1J12C8nQVUpK5z3zeb",
  "key8": "5KgNmwd4UzHjTB3YuZke84RRGxWJ37PwptcScp5oGxAXHApXcp1V75UNmo5KWqfe8odbfTtkzLBQnGr4McYXBQPs",
  "key9": "5AJhszyBrfku42SJifexMWqszJ47NvwWB85cZvbqBUQdDRiGvMVjgcTqB2QqKshuWqfYjECUdLFXEyNULZdBLn6x",
  "key10": "2NXDZjhoZzMk4R98qF3e75MJTtiCGTWQzCW3ZNZkQ8JQScNB6efZi5EDTucCZmo9QcmCCcJc7jmxJ1D9mFF7NbXR",
  "key11": "3NmRykPX2iA72PraJKdo2f9CR3dQ3c5mHp41y36oqaQYTvhxHqaD76n7vKvurbqsFpDfUj72Y2uvenf7w5XYjmhK",
  "key12": "4wZAbnUq3BAnFR4qH4hQQoCkRhthurLVzUdo8Rddpgr6W76eMURW64NdTqxBnyjBk4ZRPh1BUzXjbAVXhv1qunr9",
  "key13": "RyAyXT7B4zLK3eCQrxQmqXpmkphcRX6vEPUd1VPqGfx99g2d4pU9r2hJxiETDjaf4g3fXsL5iqfnr8aaG5ixzQp",
  "key14": "Y43rHyNMfpVgDbxmABpAiQBtiaz99Ct2iEBUV6zMjxWDfRjFXuCyQ665KU9jhYKR1aKY9BDnSFDsS4WCqjUu4v3",
  "key15": "46KAZ91v6A75LartTUS9mVKUGhkDaKGNtXaovfqbyuiiqzdutqC3kizaYECBFVLqoAqyncTSDf4ubVn9kDKsc4Lz",
  "key16": "UC3eE9KwG5pkKLxMo9K1h5PpyJdVpgHEL54uaMEHttnaNTupvZkoc33HrKsefZHru7mWWws1LJhYLFmgx68phY7",
  "key17": "4QPnJdKUwhmAMDN4LDNkE62ZbfuphP1tZSSFQDKQkrFt4knXBX9BTDS1rr2otXJZ72CG4rBNBcEeQC2H1xCwEAQH",
  "key18": "622PWkQtkTXTN2JiWqH3wmtG3ojFEg43r7Wu33udL3B6cxSWwDBKMqoKjh6Qj7BXqZcUJQ9J4XsVG34qj5XjjyJp",
  "key19": "pzisda651XNMEkGtMnDKVAiy963K55vf7B3jsWy6FRBKGthU9Pa8o5LM4cRVret3dAMuLUtWfyEktuxgw6bqKYN",
  "key20": "3RuQQ45yJmA4Y9oKFhRtx5m3RMSLMMx3Jstz7Gn3R6gS5dvuoFUrpeXRcH8EvnufPfdwxP6A119Pdr5geQKaMs6B",
  "key21": "5Bm82cfu4Nyy19HyZppkfoB9BR3kQG5MfqQd5hjKdL7XkJridULqfuQLkoS2hpZijcyP9pUtLdHr8BovKZCxT4pT",
  "key22": "xxYXirStkofoSZLgKBzGF6H5CcLcCDYvRauDzmYqVzcHQwTvoLpfUMZybqNnPA3oeYuZEV9qWjoZF6sBUUinQNe",
  "key23": "36jGdzmt9JFkFbLCb7DG6BVFBrtCD8EaqQbZPm4RCCMnitfncCuqe1Cb9aiHpsT4cG2L7xP7DmqjLTvRbUXmGptw",
  "key24": "3tFT1Ka9XFvUbs4TERqH3dgyybbNaDPkA3bxoJc5TP2Jovf2DLRRiEP6rWrs2UaHDJ9c16KDchBPTyUworAGZu7t",
  "key25": "3msFxr928evp9TGVrpYC3pnVzJaKYY4ciouqsbqviAVMkh487mLDykpCpQYFX4T51dKbWBQBVAYcQCvp5XouMkQz",
  "key26": "55LWx5wkJG2gKV6KG7fqKjzXTnQgUBz5URzww7CsKE9Q4665xqCRFktwb5feLPet12XiU1SxfvJn1mVinUW82SLJ",
  "key27": "2mDKH6nrP7pDULJ6ecyxyAE21WcDc9iADEeyALahDHiQSp2QqYB8qH2N6KZ3V1ewsJvhX3CwyHGdjZWnyRcasdTb",
  "key28": "4LyGMwENy8r1U4oNZiLgiFBmHr5wWDDNeD746nqwUUFzVtWs3JMzNYEWio8PyS5e9HhPpscb8wGEu4Z7UF1TDKiQ",
  "key29": "3hPHNRAq6qESgCLwtDnkzgB4qnH4Ur12jqrMSDggeeFp5cVkXdFzBpntYM7Nhozh4wo2w1kmHsTqCBy7ZtYBavs5"
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
