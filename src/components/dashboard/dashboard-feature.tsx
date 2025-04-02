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
    "4PW2ozuWYGwPXa59itumK5RytZ4SQfGsPUHaGp1xk2Ndi5Ng2sAnsP4bMbq2AVwR1jxig62CezwAkKj8fHwE9Xjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DC3N55PiFwLvJStRWDzSc4LvX4EhFMhxqe9obnLR1iNK4KPLdPczRMb3f7pBgGwRUzkD88t6QXzNBna4Pvei6ag",
  "key1": "3nie9yC9yA3LKwhw6jNr4LTJ2NNZxnvRAYicNJQjswuzTC25awER1EtwDai6UxrMdQGyJQjjdetU7aRtMGz39Mt5",
  "key2": "2EhUL6R83DabNM53poAC7n7ksM3vydsvJ6MgSYiTZs9pS77CskJqJUqCT4U59SXWkG6mLGJK4NK8WJL7PgcbzR9N",
  "key3": "42e2VaSSUS4FHC3froNYAktQk9GqaxjgGqwmWeKTKq6PJNRc8ZyndHyTP14GwWQmAf2raGLPCoAt8P4GC5QXiv6U",
  "key4": "56WLchrPQybk4e89XDvvn7fkJMhtvn9XVtuwNJjWokxk4p4UMSTGVVR5pPoDP6m3Ux5BNhK2Ea4wLVrQqbsx6S3z",
  "key5": "2CVHZ7KQWH9SuudQnDRvnvvAzTRZiy1VB4SN3v1xDRdkQxC7zpA9NvzK5FTfuGpoNq8ZYaquxxEaPZJJ2rRtVsJ4",
  "key6": "2gymubtcptPFGE4P7HEnMpSumTwKJfzx3MzSMgQFphaHNctLVWCC8zjW1pmW9a1fBuYuhfkZuXyyQy1Q9q5k2c82",
  "key7": "5mYPSW4mvMZd4isvuqBjiNE28cLmG82eEp3i3nntMgnZS2sfqNTNeAaE387ZWLm4Bohju4K1kg3Sg5PWpDPEmecH",
  "key8": "xkRAR4WyQdKeFHuJVA3X7BWhcLViCXAYtSiGxEQzjDQFrTBd4hLqzmoPHkhAYnVzWQFzvwNCqBFA4rJ437jMznC",
  "key9": "UZMb9FVMQJcemUXdpmzvEVFjBQ7sg4zr7uFXggAWNqZ4NHyQvPNfEGEn5Ds5GKTZnuVLbifjDEcmu62AH1ADXvh",
  "key10": "2GJyCSf89F2fhHMDpq5XeA3YPBrnK8p8B6ckAAEgc2MfGmgJFi4qTJ959u14ku3pfJ3pwEQek8bMhUYYM4MkZMw1",
  "key11": "3RyguGyNfg7HTzK1WBJ5Y58AphnxbhK9djLUBVCMNxmycaYT35Md6sDbbdSMkJZN3UJBgL2Em659hVzKTu6Tv43v",
  "key12": "3Ex4TkRtgFS2woZxux3fVJPXjzzCFiFHSZ5dK12P1DUMZUSwidbTBUn6CN7cDc6Bt3gUgcxdiNTMqXzTBZH28mV3",
  "key13": "5TgX55WvKfxtWH2s6huJZx4YdBMxtgsVSxBuowjCArRJmcn6L5EsVhPBfsPdPhwEXWcfHtGoqypMgYNhL4Xn8az5",
  "key14": "61Aq4gfYjqYuZNfdb4chgsMaMCe35hoqwHMNSQVQMkJgDKNwBLbTAD4bN3jHfyWVpUEQKVV5EFKHonFJieSYmEnF",
  "key15": "hh5m2SjXgPFbFXg1GEkqCgpxy7GNdtWgP48ye2yEy4kNgyGJ7wUWi3ybBmkhVx95Q35obEWBYrC6zDyLF3gvLE8",
  "key16": "27Qxd7YMH8GJdkGpfkbhn5cdXVYTMV8Gyr78t1qkJxNaS172ZaYom31wJCGdLNNEQhBBmdyQdyTKJDXP9h5qr9gg",
  "key17": "3XK1DoL9iFbq4pTwJohK3xt6sBaAe5WcWGje84dD1pFmjVWNKa6tqJrguWEmJSjdFJHoztzp9cgv8Yh3zyqAdWWi",
  "key18": "55ZFbaoWCi4jeDpfPDvrwHLXvRx9sc7hQoQcm19M9hgBupupVHjzkhhNi3mqUPDYrUga4kMv51DDoYQ8hUfBS6AM",
  "key19": "2jTSRqt7uuiy6RPBoQCtiuyaQnoyehGs65giWeteZ8g1f2hHdsozvkxN68oSCBWKv6qKHySvB8nnn4Rnd5fof7d9",
  "key20": "ZCba6UTvPQE4okqZ9pibivS4BDmk6xkcy86HcgqnQq8xcMuaDi5UY9ygSziG9URZpPTuzkKSshZvSMVHCHAUxpr",
  "key21": "2baWzJCmWkHY8FxpzDyy6TevYBHzK7m1Cdr51DeZUNFbjZBnnT8tidTWpqZb1XjTjQeVXPagNGxaGRzzv8bwrT8w",
  "key22": "4hfJCZsy1DqDFmr3ucdmpwt6sHam8P1mGTcP1Q47Bo68sqDQMhou1xjEWi2FeFkLq8JuMtM4CvgzNtAPi1U5Lrne",
  "key23": "4V3GywTeHXKdZMTL1YfQNqEg4LfAsUxPQMieuzr4xpusfkjtR3SvPP8tBPrjjaPY9pJSkBFhqG5fZUp48amRZzwD",
  "key24": "5JYeoj7xqTxDgkjCnEryQLugxhdEQDPYoA11EtHGcNVkLGFdf4QTqp2VxYaHaXK5wyhdTptJNcrddsTqE1VWwDvv",
  "key25": "2BieiSsW21A3ymyUP41zgFXD5ZZigiDAYuD5PWVLF8AUPNrBXKYE2cNmy6YHXFKFb5QTzBTtNo7648nmrdDSp199",
  "key26": "Srb7KA3sXeQssT6bJp4nUs3UPWuxAcTm7h5Dwi4GXYoEnEafDK85iwEpg6FF5HMM5eZ3M1rv4vmQphtwGqmaAsQ",
  "key27": "8FkYDYaxUDYKW6p1bERL1wgXdEnATVAAtVJ6CHsxSfoaRZpWruayMDZ6cZ3j7ACURUNagb6fB1WraQ66KMuwLqx",
  "key28": "327DcpGzqfgTa6ru9Zsnce5DdjPbcQcd9rmFzr2L4fibwLgYSJKkQRSVKAK7knUHW4PYGr1xfcNi1pzcaZrqGHn4",
  "key29": "5x4rfghfdnhD8PFeqMPXfA7Kp9KiouWFP3Ag2MorejLMLkNoyzj57ig1TaH2tsBzLiUjX8mwDpZPtLKENFGzEsKS"
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
