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
    "4cLn4ycjLvFS6GPvLiZhcrpvHvS1emvLeMMxNU6sHxbozYTxsvp9jHnuVZwCuPLpk6wKgQsyqe27Ukk41x3kyCJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmom8ToJ7wmPzXQddFYip9h3EzvSYaYJRELSW1oUPVvTYK61qjN6qqXggH6SR2ai4GNxkt98FattAr8psd6MEUj",
  "key1": "4sFwdSwWtg6JENkrTKJKgchbR576gZALgLFdBe2QBWaY1fwVWCRuAHeh61ncqunACKsXSij8Gch8m794k64fKx62",
  "key2": "35Uz8HfryYhBvnEBuLWaGjBwRnJhDyKJ7kbizPwSGqzra8a82LCurAYw34bg9FYFXpFiqLRaV8m93ihPeY8PNhs9",
  "key3": "4419of3kMomHhztknh9ALCXFrmfC6W4gAyLxiG8zKSN7XHNyZSSfpSnFWCndix4qC1eY7MV5NogxPXcmFwgtqSpm",
  "key4": "dqz484cht7GugTcyvBcQDdvumPQP4EZHjnyYJ49dXLTNyaDQWyxfFjVjR2Ehz4hpubndB66VdB7yMxpX59PgsKE",
  "key5": "2fCaPCjJUayW8goe7CuYfPx9j17Yqob2wSgGCkcnaQbwXAWLwcnfioJtS2A7WfcPiCuVExKr1QFKVLLNFz3ZAApa",
  "key6": "2buuuvkhQYr7PnMGCyeMLNndRsPfPGbfYvnkiGowju3yg69FJYLCevS2fnB9N1bsoKUVCcufb3BLaRBbJH6gA9tp",
  "key7": "4rhYHNYk1DwRZQeg8vRaXXT4NvstNPee9JrYpfuo8ud4hQ1giA2MvBqReRMwx5NRAHU7Nam569scawusWJzVNcBo",
  "key8": "2mmifARiSR5siwBfWTQR8YiMix8CKNNbgiinrJRgUWuAREYFu89iTfLetJ68CkztrwZQNmCSPK3Cugg2HCKHgHym",
  "key9": "2qFNo6ztHXChQVDnT4N6xt7byLnFTznhs3U16Hh87timPnCYNC81yAnRwTiZ5Pv58d3Tpdcrrd78hkwTbu4Hpwn1",
  "key10": "275aJXG6C8Wa7HwrSmx7x5uMTFvgUUhidbCWBxyCboX4iTG9qZjVSuhKafyVevFXg7p3nDmhFBYtNJisf8s87GzL",
  "key11": "5AqhzCbBuNz48u2YUWxi4J1r8byqRuKD5K87Fo4fzWVtFT75iH7mtcFdwNuZ5YLBwmuXRBE3qT2NfcqTcTzpXfTJ",
  "key12": "2WAVBmxThiwrBG9ZQJPCdNL1DDtmtoJUFAqD7EPTbkpfxNY3GgrBDK4rGQsk26mWfRzy2jhZhc2wewMyLEZ3tuaJ",
  "key13": "4iCj8v1ZeEL9C4RDiCkWREFhTDpYPBj3HN2TaM884r7Jnxc5cjre8G5x7fXiyhZFseXxGFE9nUgr5enC5dykAXgw",
  "key14": "4eaKFAUytYrV3WhUgFupbhhAUPzjGChTQsbAYnUJGEagf7XiZ5Bb84WcsjRA1PQWtqZyVpBMHFaV6NS26SPRjEQ6",
  "key15": "3RAjPt8YAobiY9AGck42j2xpwKjPayBVCc4c91RUJhjkiAAapix45QrfhKauWZUnkAyWcXHJkWYWg194rjD5mHkg",
  "key16": "2MUgyKSKfPxNspDD1FB79sfC5DX2eA2R2GMSQgBayvEvh8nVJSxhVqZoD9viokxmwj8KmvbJEvcxazPFgA3Dxamq",
  "key17": "2kb5vGbAS4PoaMLt9Lsyqhs8xrf32cVoAHjp2FAJSvscWF4KwUkeeHUK8Nt98VYuJv3xK6T5newvpPuLCVnm2Q6f",
  "key18": "UQbAki9JrAYKECAF1VkeZa1suXHFXM3DdvWfuY8spZpkw66pvtsS4xZQoQ8CqUGTcbiEuWPNteCaxF2QzSQF6Y5",
  "key19": "3DTYVsWwKxhuumLCq7CfFVbMvXpCKenAnqbaE8ZkPcWvCJ9MrGrRRXTNKF8imY6rWfKy26aP8VhLwJXMRzTg5J4D",
  "key20": "3u2DMDsfH31YKm6634jsxi7FmNWHpxcFqESbRoNkuKH96R8jL9mg7ottK8qN2orTNciwBj2HMkB8ye3pNykxiWDz",
  "key21": "xbHhnoWTtSbUUqQsTFqFAVztCkxwoUpNbupDJzR9GQ7XUHAtGqHYTyKsKxGiES28EnCZ2W3qTibmiuNNQoGj6RG",
  "key22": "5Pr62LWipMmTbu782gq6sx19u44HGfQ9GyqqFH1QDSU9T4k2BcyYX4gUYTsCFuxifH27fgxHE7pZZnCdB4ua73bw",
  "key23": "4NwDKnNcwJXUBuE5aJaqC5fR9mfDqNUJuDALMaieeZv4XFYHQJ3tgQkJaNzjz9Xh6h1MVDACS3os6xPRqAchwJiu",
  "key24": "5N9w1MzSKkBmzBENGKQbJSrVFJcMp1GYtt9Nmhpu8RWzbxxPEzGzstwa2J3w2hHUHDrRoPGd7GJoVFYjdUv4z3tN",
  "key25": "3ud7M6TfcAVNnT2wto8B3HBcwApu8jNcMsst5SivpNAjoQmWL7nQfV4gNh9CTLD51k9ZEgZ6dRH34nxu7k6YAuEX",
  "key26": "2x1XtdqrMPF8UcA7rw9E1EcFxU4BvfXFcedbUT5kADb7rJBqEGKPZAq11Jzak8QAHGMkkiLbkgq9FfZMigRSuVTz",
  "key27": "614w4voeuPM6KyuZTrAWcKr4jRtRpLQG84txVKjgb8JmAp7SSiW2kNqqQcdkvXtCGvSRHT3YhdgsE3LDrsRJTSN1",
  "key28": "2UDqiebhHjuvaY4EJze3znW4DdVH2fdfRNQE53DM9xbj1fPpUh7WHngpnndy2GkjEHeYbP9WmDJJECQLPHdNJLLj",
  "key29": "4yjkTDNUiytDcEUPN7wwGW78cg4edsMgkV32sodzuUmVQHjo9ujzqodnrisUsqH2oro72r1mQBUjV2zMu2RpgXuq",
  "key30": "3oXm4Yznp79s7fgcPqKuyvhz8UEyDoqTLUB9N4NypTiRQJqscPEKAQ4D83Jm87Fijoi5X2K6hAexwYhWZh29qWcR"
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
