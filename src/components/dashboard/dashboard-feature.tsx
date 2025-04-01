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
    "25q47vKYHLJ4ekNFNYdrtjEA2DPR9zriCW8sA9bLWZsBPi5bx2t7KTVfGs4VB4utUa2PYZ1jB3aMb8Ebsuf1qwBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qax1Eax5n4muGe52YTovtP2VJRSdUKEAXEaV9SiR7yiByM9z9mH6Tpfrd4QBhZ9N85aTdtCzdfstwfvYEv6NfMq",
  "key1": "5zTzMuC3KEAfP6ceMF4z4T4gZswHswKwnUCLSySiH3NHQfHSu9eqFkzXxKBE5P53DEGNikC5woWjPBJzyXE1eHqK",
  "key2": "4MycTPQCNDmgn19MnVHPCTfQc8obqfVGA9TFkqi46nNhiYs8wU8AF87LzZwUq84466fCBTyg4H5Y8EX6kxsg996E",
  "key3": "4jHFayr98XjBYf3yMSzBMdvckrJXafdeATVgmJXH42kv3r7ciWmM1qtDheaD4h3rxvh5e8KjBrdZH74RdpSbcMw6",
  "key4": "53x73Q4RT21PPhSMQLG66Pm6XkrtPQmVNTmpXpEAUxL5NReXmGBtWqVAoDuCg9wgoucE4bFHgTZv8TncxbuCT1oV",
  "key5": "goix28bpvJYA3pyGz8XmpwNGTNiWa89WBNvxqvo8wiJyURgubLHUxzcCe7rr3f5HsnA1vXM3QiBkfzSm6hh2yKD",
  "key6": "EkgsLWhrutdmr9Z3HznuVa1MfNxrqnLRQrDjuvVFqQf92xmi592viPhEganJHD8oCVjscpzPZjNHBPWhvuYTWkM",
  "key7": "4Ko5Vhnourhdz2aKuLhVamKD7Q9yo1zwTh4TkYCTD1Lp7hk18Tq6PpozVoZ18cQ3fNWtBfjR5R6iJet36RfG2TqB",
  "key8": "5EZaHNJEutrTnCiyw6dFCTm9mwUfApNHK7MDS4TxuTETjLLqh74YYpdkBQwXjo9wdEah7NmbMR74R4ifiw5WRhUY",
  "key9": "3BVPXPZ3wzQ4Dap1X35WqKv5vXrUQZe2GukKEcLCkPWYqi4LanprTiyyr7bt9XGSW52DVUpD3RZxxLRe35gxfjGS",
  "key10": "3WpqBpo8ovuP1Q8EoiK3JeUuGUjk2RSzQNAq7L6RKwC6EHEq5oJcQxUYzMq2wjpHsZWVMPnqTeKgGpUf6EQgVa9j",
  "key11": "4RVSHKFQMV5o956hfBcZTuUvAsraTbYmSuAkzJY6bzYw9eBmXmbo8zaH63eqsoJY9xJtfrKzrHXrRUcUPW3TNAY6",
  "key12": "3ThVxGurDXkhNRFddBR74bwqk34EmEyyEuMsiQf8sfG2dkrrqTcxt8TwFgniWNk6r1YDvTmkXvfNgMoKmuFYEHgm",
  "key13": "5xzGroLWzQG8D4cmC2wg2YKieBUVhMkNWPXxMY1JnR3esTpeiZayFbynUjUCu2p46txMH6xp3oVdzffLBrT7KE6W",
  "key14": "HBZs1S5bt4XdWpTCFcFTnDSz4cQDsP8vzpNhu7gc8PSy1vnNo2qJ7QYXLiNVh9XRMsnw5WSdSePb3417PtDLJT2",
  "key15": "62yLjMnT5aHYb8jE49cSHbXvKpYDnXVpWeo9KxzvGzKTamEyBVQuAmCt4BcPZrH9gMbWu1cCn8GrWAffcBZfgSGZ",
  "key16": "4x9Lpk8zvYwNghUe5rJ7tY6J9CHPaFRe1rpa5Jdz4AFw94RhevscCGkeS98SU9S6cRLuJ9PoRumQeJSFfBsKJLmy",
  "key17": "5sVBqXAa827Crkcda3S6CbZV9vNU2dG53FL7ZyMKBjNj2jXZUMpq9jhR95RPWrKqNHSMzfEpC3HaxCKvtMCGv3f",
  "key18": "3ogKeFkMk9guF6qH8piRsaMgp1dsUKwWLpATSPPGasoMJyA1fnBBmX8apYyJDR5JnMnfUaQZbXWRb6syj22QxozW",
  "key19": "5zG7obos4p5VRELjcWa1rMVUa4uhJRHdH1oxj25HGXXSwhiem5KdYqH5gWg3Qxdz8pmZouoDA1rX9TpwY3HZXnrn",
  "key20": "2EPrzobQkAJzqHfMpHv8GqmANE8ZZgxs6hyWiDcY6zvyxHQoEoQCAVUNjy7vc2bKqeUKaiFrLKDxsRLnFDnZxwga",
  "key21": "2BKLnN2p71GHyJfnfA7ALu5RJKQNSKwCaiuRQd2wEQMKcbET5JnRNPYNG3S3E2fpwgX7yMTDDg9RrcT9muyR4w2j",
  "key22": "3hUP3952yAYGyXeCRRZ89yZpHJ92TRofBohPYTCDv1XeYx2kwj4ZqU3GmPsBsrmbNt4tp5SfTU9FFaEGZNH65CZF",
  "key23": "4iHGEDAoUmrLfeoEDK3uyVCyp8asTa9TK328pahd43bbpTzzJQec2yz62f4addhbQwQNfjAKZ6N9rTq5nTw3cUPS",
  "key24": "2WvypQDxnkRGHxEdCMWb5EKngzBGZcZVVwMY6KrzRyMRNwQGJewYbA9cQvGinZfWbSuu63eAzqobCbpMa72sRp86",
  "key25": "3VWe9fHd5UbAX4rD7pQiiVmkHHu2f2YiF5w9QVkNhdg6kct6bvhedeS3dsgXf91GiQPfXd2B2kMMJX8fhaAaM1yh",
  "key26": "56GdyM21m1tezkECo9SMsJd9YvcgMoW1pmcpSijA5M7KP2SYjrhsebGo1vLFLVh4LHS9QQW2H5GKeRdk3SUvZfP5",
  "key27": "5zQGwzyNBYiBqRC3jfh7xUPqxpCaR7qcvuHunTGHs74CatzYCaBqpRQ9xUfZzYoKnfS6hCuq6kcB5Tam2nEFCQhS"
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
