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
    "4nSKXXQFfVwc9he3FkaLwVN9Sx9XKzg2qyo2ZwPhda44KLnGFAtf3k7oBwgoSbWRDouZyEPZBPBcVknfG8n1Hc4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SveDasRT784CSPvVSbu4WZryrctFQrmqMkuJYBoqJVzaRqweVMLZSqPLciQfdPP2BoHWHStMY84Cz1xRzXthDPW",
  "key1": "5US5o917VAGG55C7XHCackNhNBAKUQkZaRKAVnAbeFqdgYfnVUJ73HzqV23NE1gBquLzzxQof4csJgZQVsrX2opo",
  "key2": "2VNNUBNENzBCAdAHL9vm6gELPXNdqvipVNaccLnEuAdQ1qpx7QMVMrh8SVU8AEcc9JgL7kjBovmAK7hso9xbHbVW",
  "key3": "5Zy8fqty4HsZ9PJ2DYnCYJGnZCzmicfosUSchbYcThf7LEHnZYN21sL72NrG9SDr2wi8yXJcX2Hd73UQoKo37M4F",
  "key4": "5Ctks6J3kSz5dtJtPmwXVaaQNctfVijHjftbDkF9DdyKuyffHgXGQgevuZWfKcJyKVXUTMz9We1iDS4WPaPjugD7",
  "key5": "uCKdRcY92NF2sgHypDAVAzCDBEzLNWBHndKieoNNfrXjHcZPSubATuSbkUs2oH1L8SdAFbJe2jmRpsWPAHDjC6K",
  "key6": "5Mxu1RpHqAjP1SRApVEsvfurHHNGZ4c37vWVUUi1NbzW6BvRdWL5gKknpyYen1SZD9YLPPaVsrwqa5Y4vRAjJRHw",
  "key7": "2c1QRyQGFK2Qkvum1gByUPafiTfsEgW8tp5yRufNWz3Q6kqbiseKH8Ko59QkD1wjBUB32BsqGWwh8uWxqJpCyrSW",
  "key8": "j2n3bdcaQQhYHGZ4MEoND2pzfGJyCLG4BTeCwnZpNQD3LYivh8dKNJjcnPDT2Zr1a6bsNbE1vhvyXJh6RwkpKct",
  "key9": "sW87VzDQDNYFzXR36p66MejAVP38rbbsPUyDPouS6thn1VRLnrprU6Tp5tgDg1AAVJDwLgDtXAeLhJeJiwhKTTn",
  "key10": "26FssEMzX9u628JNWQgY9kWVPr3H5x86ev31pJxRWdHfQsLB1YiLmU2ZB6RqFTyD862uUaK1721184454Lyh7eZG",
  "key11": "3rBHhghpZh3JV3p6hEygPpW6yRhsXRKGgUZZmcdCdx8kMPjyA2cbkiqGfTX5rP7sxMsqNK4eBzYgoNPLf8Dp4eHG",
  "key12": "5TifSmmxKVvDUSTpq5Z9X16A8bVUaLpkhjDv9tqQM2NjtsSxUAz18RLG5cCNzdb6t7dkjLEP8rxJi4LaaYTpUJwb",
  "key13": "5wx2w6YFaTpSuR4zDg4mMpsV5R5hcg3SnmmshmasGDiY4gy9YaVBWwDA8hyaq8jdwCC2NpNVnKm1nQb3Kdmsmn1D",
  "key14": "3Qe9sXmm5CX3Wc2GqZBf24nG9n7C65vgqHQoicpC14fi3aeDNfTTFk4WYAWT9KxkH5E2qiWuBWtPobfinnQmAmbk",
  "key15": "Dxqia7RsWCMYnwYi3xaYeVKMVa8HoNGGufC7jqc2EtA6ELiR1zjcK2oAa3XyfkmhhAe1obSJz7DdrEfyWG1ds61",
  "key16": "5dBpXNmRNZrUDRcqAnRagjyqdDqq6fiNSoQAcgdN9HJbxx2Ksj9srf2s8tpsNxrp9fvhfrNd9f4uzci5MAuyAUyk",
  "key17": "3XN1FVTi7wk9hoXKjNWGANBJy7RybPtcJR59ER9jJqEgrmH68ri9TYfcSEURDhahYVQDK57gNNuTC5mT9UcDE7WX",
  "key18": "5nRB4FuALrc67oA6USE2sstf2joVTHFGvS6ctPqTcRBqvAJrc7fvqdPZF28Q8Vpho1Z2ywdbXPm92TzQtF2rThQX",
  "key19": "3HicQnnAeA8gdSfj3x5MSnJSk9EF9qymFP9nSeEGhC2tEvR95ZcvN5y5eSNfK5DyhvboMtkM2ZDgTz34QvmRcUHu",
  "key20": "2WeBTrLo7HmcKzHXA15STMwgzGhEHzueKpKChfMnFDNrdDFvcNSKn5LWMVL5bUn1UaqBxuDGn8NyL9RMvasrduip",
  "key21": "BV4QK5zq9m3nYG4zpVkbVFgccacHokt2FdWiW5VEKznVtEDZxWb7vXyiJrBvSmCjKTcHsw7kAheff19RrCXnscs",
  "key22": "2s6ofDABoqPbAWUBSQLVbcyujnHSygULcNs8SE7WoS6nZtH8P58i3HfWxrsVcrz3wMMK97J32HYTJRz6D1taTFfg",
  "key23": "YwhSr1qLj3WawKJGt395XsJrBVr68GYXQPnni453PsJERzHq7yKTnHzQBijygn4Qh8W4yW9VWM2K8txuQzMqW71",
  "key24": "44RkUqGzrvjvxyvyVX91MeQmfkYa1vxvvVLkpapEkxry1NzXskSyyp3BDhxFCrchy6Dod5zrHKpESFFBK9FFGW8b",
  "key25": "3dtX3j9vEJniQ6saYHm1MJFPdhQZxwHY1PVWFqHS7GhZYx3V7816EJkSRrbQWkDvmACFSik2Wps5QmYtmNh8DfaD",
  "key26": "67eu1N2fgTZ1AzyuCoABywsY6sjLQDTnihaMgxfMksVJqLsT3w4414pGz6mTDaVvg17MJj1kkeZYXQaojXaiA74v",
  "key27": "43yGiqH1jtEQtEwmi47hShpfh9S8TqUqPVDQUwa75eTz5oae8AV76F7VRekW7DuhcffYbeCNQNmCiZv64bcTg1Pt",
  "key28": "6TMwf996nBG4F57XREkrqVbU3VLimbApiXhC88sTkizpfJGwvRXeSzYotf6Cktpgc4EjvpJTWjugdboyNoLJkbT",
  "key29": "3rsuLUkYZjAvTxjVtr9L5YNWxivFmg1f5h2UqdQH93z1Ddb9KEq25JMZTPj3k7bqF58xRipPbGQ6NHca9bMYA6Mv",
  "key30": "2e4m6NYMBty16knfPYbgh9T1YHLsSsrTSEj8Yg2B2X6CgCnVBmLrBV5ZhvhKkDZHqwTXLbqpTdaz4K5beaGgg7Vw",
  "key31": "5m7HqZ1DCQyWFKg7SM5ceWgsLjs4dqf3BHRR4nmxhepYEi8Awhhi6cagWFEeS5d13PZ2iBttXCTPPH6dTo1CE5GF",
  "key32": "5o5xTPjX2CPDXn4TGS98xKALN6yz147MDMizTdoBhC9rKTZYMxTpe5KCLZJGzgKyZVXy1AvfqGoRApDQHhyptbLp",
  "key33": "4VktcZe8qLxBWr7mjDFKApoiPRjTJVAuceYwKSQphk2puCqwGLP3w3mgvdY4oY3uYMC2bXzUZvHFm5v2AU8S8tGH"
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
