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
    "3X6oHrxXc1HJZQvxVjWmtqMTmhNNJW93EW8v18GSdUrC8efYFMqCMtkH4mbmEfHUQ869qBM7yUukfwfxofwfhLEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nkExxmyaqor6MyNmWpvwYYZpTBCxByEeYFYVu5qHXDnwrLbPGq12w1Qd9zY3MLFFCGWy8DKTmy4WdVqu6zYpHJ",
  "key1": "2NpXo1xawSdZqEzS321rb5tYhP12r6Ubh7gnbRf22TQ6p9AgDMm1iMHps4YUKLNPe2c1GdBaSrtS7h7b3ohZyuJH",
  "key2": "27iKNEmG3fBJZJJqsU2ypFPtCnunBsfBu7DwNAqUZ7MrkAbio4mHhCrdF1WN7ARkk9YpJGJASqKRsSMrE9CgB36x",
  "key3": "51gHXjU8zeTpwwnr2Ydb4q1wMWNUAP4KET4UbjsGzqr2KjumvVbFMByYuHxwz6Y92C9RAJvHYtjN3WN474bbsNvH",
  "key4": "c5iFuh6MDmCNmxfgJ8awnAewWGutsYn8jobNVQ6MEPMwgcRgDUweqpv5cNykzki8ukq6GoJdBxiNSbscaKpm85M",
  "key5": "4o4vNg2s6ikR7NNwF35GQFGtxevtgQebjBmyRy72SP6CDQbm4dFkHeK98mBhpkwkNc7z5Gbo3q4ax5dEKwLJtfW6",
  "key6": "3AAfJceawpjf7iD3oPANGLn8BXZA2UUhrfFDEvLYa2vyedLtwUKTg1weDEzGnxe6uDS9AGQYGkTAtoTDTxfwkHn2",
  "key7": "48EUZe6iQjjTW3Gfv7YEN7xW5HVX2tKcQXBAeDPfts5isY4N6beQbYF9zmvhJ9Q9SC9gkW8HE2YdpzGSazamQtev",
  "key8": "5YRddiyEaDhJhKvh7Qkf44YrqCVK5bcJWkPjaSw1EzFmnyxvksBR1vupapGzbd4NTstwzpbxdn1Wct5b66pXNYX3",
  "key9": "3YEZkGrr3nHhdjTbF3S74jaPghsd1gBqMksSSDcQo8SzgDp6y1qeujKsPRZMK2Sv564kohNet512zAfxmaXeAdLg",
  "key10": "2XXPU1mfdAo9K4mWhVf9wArRvEXxks2qBsCsnBC6ZdSVcfgLW1wt1GbDHEXZa96KykCcgbCrwqgyr7kSJM6L97rY",
  "key11": "3fpboRxJFCeJeVsVgcE8Q86SPNGotqeHG3DUSFtb98nVUeXFMjNzweENiRxpJGTzd1yHpbSpPTYiV22SxdTAwo6p",
  "key12": "4ArKwB6YCy7FA1UgVqgVJznhYti5GxhUqhPBh8YV1Na6c9n6g14oLa2cAYPyxQVMFX2vSi8UPdWruJFa4Sv5SPGC",
  "key13": "4phSkzwc9z1rymCcy7eZkReNEG23VRBgRd9ztWCZwkkyZm83Z7sjQ5uAJGLLiMgMFwqGyqke6jQ48xGFEZ1yhjyj",
  "key14": "64FqUG4DGYq8Nj5FnGNPu9AAJiof27ZptHZqB3XKEGkadxHPHhJY9mLiufiubdZYoSVAEjmJzD55VgRLUvbLrBuL",
  "key15": "3vXvdfsqCyRg9Thj3tpVS5kLCyFNyrUQX1hcgnzZvUCeaPzjZuEu4sbDHKPLL2Si2MoHdbsRd5cPd8HvxisTHkSu",
  "key16": "35LxNxv9nrHw6hgstYfoE41gJHQE4GLCP75vELpwhyMxUtZb1h7yhRZUVmBHHYpttFiNjyxNXVucx2hiQ5pRgDY2",
  "key17": "38yDSzybcAJrpoNvT6Sw4zB1oeRtnjjyyYVajuTJQHvjuWXXrpnK6PPoZq6RReYKdsTGDXKtcFVnJ73iaJdSSNi7",
  "key18": "4taF6yUdDqJyG4UV8KzEtvG9ENmcyT8QdaKWK4CnDmRpwpXeFim1XkqsSDUEqHFxC2THika5fyGYjWiwmw1YYZtN",
  "key19": "2xGBaLB7MwcA5zFfW1R69sgPqBouyeDucDK5BVSPYi7jDmgnY8MWdZnYGGaAvMDP9ChEyDmcDomebcEEx1DnkGhy",
  "key20": "5Gi9JQXLUhQoZx6wYbG9hG4YLMSAiM3BefoXJ3shobWUfthqKnu1GEFEgWFnQP6CXbnrxfBp6ecwqa7mfNfLTB6d",
  "key21": "rnLCNurB5WnizPrZndDyfqEy5ag9JHUuYpidDDV2PsS5U66mAAnvkPQsTDaCesvyKDLeYx7JA4mjnz4sLunDGCh",
  "key22": "4fiP2GXvw4SsJzAbNakAJjJ6631nTLS6WWmnFArp6oYB4r7ut28Ei9qjaCDmR7SFDapyCYvEob682zAZi3qrvaXf",
  "key23": "p9Kn5XJRmSX863pAxJnNo2bzPAGRqbkcKXV1Shv1ZWvjVWG5MzfW4vpBAhWmXMqmp2mckB24R2xS6VdcghJXL4S",
  "key24": "2j5LbSy6jG1yyGaJcpiPMSJLXYMYVj1KVxENYYuTouzQsw6rswVEq9tb4npEEjx9h89n3BwVmgXp4wFdWo6eEUUG",
  "key25": "5CLksvvFe8dUXoQffK2cX7KPCA58tHQDYPsc46tc713Sj5zgvqEJ3iMJa7Bn7Yk9pkhUd5Xpavgb5QgKP4LP9WBT",
  "key26": "29gMRxHrvoriTJH48szg6srjBFuvrbBruLzLdv13WsgG3aWAEsUybsYSmjUT4pEZyHhFHsMee8Z6S7zjAkFNHZRY",
  "key27": "4TQ1ERpZMNQ4ve8w8Geh6YNBvyc4WGXUVHfwyYyob99qdTnkBJsTEY61Xxutpa5tqAmcHxQrnuGCZRKo7Vww8xFN",
  "key28": "2pXDa6ca8ZRe7x6Zq9A2uHWtMTF63B49oMY2Zd772XAWRSdhA7fsTg253JBEUrMCuLhVyr5gMPMSEAbWBmdAy3Pm",
  "key29": "5pD8jqRHSSTdhCGAwixHgnFJ3viFxqzr9Sx8kJ9bN9A1JGMoKPvZSMWzbDerU5jZdcvs76Z6vUYmMURF2hHdtGwK",
  "key30": "3BG1ygBFBBvdMzpMScpZuR7b9kBJZPPDWgWrMSsurM874sWq5ismNsP5FZi2iyB7PGCJDRyUSQEVYHi2cd47NjkN",
  "key31": "4jiA6odYGmgmF26ofDAU8pGTMuSr8urTc55QdWVTfn7VQ2ZB9nt8wtQCjpdXY7swKMQUYfYMWuWdZM58KskJbAJV",
  "key32": "NEXuiuAS3R3KzE8sav8Y2HetHNfiqpWzE5pwZP8xGTwrsdt1wiwMQs8gAR1sTCiQtwJLXqSnxCow4FC8syfsCxk"
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
