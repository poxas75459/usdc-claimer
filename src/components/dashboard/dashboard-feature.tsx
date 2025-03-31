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
    "2XcPyK2WioLKftqAua3CKmnpmMu5JGLv82vkXJjZi1b6iWUXbz3fr44sZ3tQf8FjGmESyvvwNCDT1Sf4dXtthJWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHfFvm2jr3P2YtA28zr9n6PqBXszcccSnt6GFxevzLr7WDrnPxUzQW1NE3fC1jsGweUFfVw1ujNucwMuJtZchHE",
  "key1": "2j3AmafZog9JY8pfv89nWHwXkDugE4WWTMSBnFxJd5HMVc94cd3TTMqcm4njAVyG8zLh9BbMgdk5eWTmepjGkgCB",
  "key2": "41Vybao5jxqMXW59pcdDndCUaxT2PU6pSLWWp1vwVrbqqkU8DSgqomSJSMqVQoR8LRfWH5cW1ZnM69CzUT5RcbJQ",
  "key3": "5uZq1PZc6xQrBsteE6kaRMcC8ZQJiJ8zDRpqG8ugtVf4QLonBPW3prmiZdab76D7Fwk1ErKVjQEWLAyWDrpEGF28",
  "key4": "4Wyu74sab6D99zHxRbS3BY5g8sTTCGkwzK9yw9Ka6rdaWtUwYotcUZZRmFxA6vvbrh3xCmeRZ5fEgEereE8sMEQV",
  "key5": "5u84frUyf1gSHQrSfyYgUdgRa6yXn2HALjFsRvMVrikMpY2mv6ethkemsAiVNWwAj2pJLb1ZvpMzk3u7BNgt81f",
  "key6": "5XEM8AkkP7RqfhiwuFmpGeRvfybSEguouUuG6u1nkHCNG2Ab5481vovBJiZ98zYjTNZCie4H8s6MNnU9Ts1o3zmY",
  "key7": "52GwZC6jG6NUB7U2c7jW7qxJv6naJz9GvNomsxivnb5uB6tR4SdNazBLWakHQ8jSt9J6XTYRGiScHri5GKxQAJ2j",
  "key8": "5PDRq8qi7mHJ8i7BenWF4oTs5KrxLH8NxxiBig4yipAx9AHyfb3iq3cL96jpFAH57kvr1UYgDJyGpyLA6Q6VX2A",
  "key9": "4XWWB1atg7usySeqHjW5EkjaHd5H8v9visectAqCPGzqz1ZRPTNnp6FHHmEQJWuhpUjm9DkmJSpQ1C8WgsLT2yJN",
  "key10": "3yohTs382WRMVWdfCQnersNUbmmn742Du63hPmHiDBgYFM8pLfHtiwPgYE11J29TdyQp3DUh65bwBeNh4FGQueaA",
  "key11": "4qZhRfZbF2qdaFwbzVBorje1mud7UU9tNjWrji4FXaHegx4LpXXji3W2uMq8b16BNYbQANGBsE9xTuJFdhNCFRED",
  "key12": "4Kwv2wjvyzXBJkeorXuHyTTnBT8NzCjHqdinG6mT7iTgiyuPYbJM8Uw7jj8e2sBEdTxr9hcqMV6eTaHhRpBhqnr8",
  "key13": "1LvpYPxrQHYMb2wQ4kNfgsnhVzh3Rf1PwQDa3hqbAcykPmsLhZjaxTcTWhF7MtQZetx4DX7euJb4wB36tFwuVCg",
  "key14": "5CkSnSD9M2oLFq2BvHKBjGVzfrwHJu9ZiarR3yGeq8hdMvvruac8ktJr29yzSjeb6m1cewCojnErf2KvGATPZQyw",
  "key15": "2CqFojsqbEum4GwoeByZaeE8Si4qhwcwMcSfZCbKGhTM6auaewetAYUHhnhaBmUudfrJgc9MXSvCcZ11aMW2crvx",
  "key16": "B52ZFYbTcPXqpTYUCt9Xo3BpCLX4JqvTV7F5h2ANdiHTw3UvNwcAP2h52nmprMLiSpPv2HCAkU5fR5GCFNuBFCf",
  "key17": "2anXLkFKt1ZA9k11CnwEqCXyKmcbxyXi92bXmuHbWRxpy1cW1dSx8URZC4McGmSnJyaG5qsmE1fwS5v3zfDrsDH2",
  "key18": "mT1T2vUxsuDqFyaaMGChwhCoTt9UJzLcH3SWp8JRrHPdtanVmaxUqbZtZC6h9ofbkdVK492CEAJYu3sXLRVkEbh",
  "key19": "27raRg6waAeSryRVMq27FWTXfJSZzEkf921NoJJ45rc4c8m5Mm7gaUPt81orHH3emoUgNmeVYRC3uKtskbDdJwCn",
  "key20": "61KwwuM2oxyuPjCBE4UR1ZFn9NFE4rrn33LFPq5yrkk9WBFiAJHMNZFxT1f9r4CCbQyqRh5QcGutPQRfg2R5Trap",
  "key21": "5iYZ45S1nmdGbgke5hcDcEwtoECu62dX3BfvDjAqnrQ3rjYxztCvEaemBt9zNxVfemeBNJYjYi77d4ePcbxnjpim",
  "key22": "4wtUNnmZrPmZTgV58bSdnrtagQdXU9KcWiVCXzWKRrxNUyeadutcmRh1DRsHWSdo23n8pwgQvdC5JxmFU9rf2PPN",
  "key23": "3GcdBvEViBk3zeBzpbazQ5eixz3fC4jbju8u65UuW8Lphu7jbXcFYoQyLX6inZDpqHKn57qeMb5JjbzuTjNgiHea",
  "key24": "2SwNnyNKdfUavmResb1n7uBg96gmNJNxBjJVFsW4ncg2CF4BVWnc9xkXfSBrFaYNA9ASNcFUTiXmgfLX373yiGpA",
  "key25": "z9TAKcmwLgFQtADQu8McP6pbxLYvdwUa65i7ABe1xAuH8PTDmASmExE23Jf18qjyFgdwZSVUruZB4FLWWdBZdgM",
  "key26": "2qMq3BBYKsuiQ8wZWeQCCdPx7s6cmMJbk6ZnXAHQfHUvT4EtGCKBzrokrEvJfC4Uy4ct1iAhzGZLPj6WcwtWge89",
  "key27": "LphfKwTbSawkVbC4LmfA2nrcYDFA1r1NWGEsACQjRYkXgZJAVaM8AZJZQUgzKekACCsE33p28i7WospgDgmPzvQ",
  "key28": "3PgQJwY8HkZxgWXwaF2mG4mt8WFj8724FyUe9QDS8wktUsdbsjBVadYHsoUrg95nGp2mhexkUTy5EHx1wHXc7Qs6",
  "key29": "4njsF2wVbt9e9cn8eX6dZ6d8YJPxSd3TPGLcAxaEJfKUJY7T4NEWj5xEMM85rxawmXvhcsCy6fHSELMBB6hypz63",
  "key30": "5xTkHznEieoTGkRzJRLF9sA8hF9uFzdVUePVbZSLEGWwoeEXYtzx6XtQfNShUEjNSsFtESMvm6rKr3Bwet3cgjNE",
  "key31": "5qBmFfdEDEdfUYEv82mD9ra9q6HXVcSxk5LgNALba7m2AmrcPje1gqEwpUyJk3bNee8ZBRwRd4RozhGm5TFianL6"
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
