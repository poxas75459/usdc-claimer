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
    "W6ZGYMYH1zhxCQuKb2Ljks7fp1bMRm3V2rPZSkX63y7yCkf2jmvNChXWuZbYPo4YQEep9mVP69wMPoxrNFWeCC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C2R93T3g8tbwj2kam6AapDPGPSY9Kh7aKih59CZLYDsP3VJzVeKqkqgaognuYFJmGR6E17CQtpC17zZaPqjQcvZ",
  "key1": "vfo1tTHqgz5sFqxv4G5AXu8j8PRXnUMJnLen8tbePbBdfGPDVF9Bpq8Y1GfNvcH1Cs7vyWGqKFBz5tQVi13Vh9F",
  "key2": "2PetLqHyN6zXojwaiMniu4pJSf1f4hnvJnyNMK4JDeqafqhZijTqwXswkCKpEvgMuGYvkFQoqJYGrHkttpgGYb6b",
  "key3": "2H1ZinXZG2rKGrmyjsZJvxhyHtbBtQUdgtzzgmsCam361WwUGy1GjrL7yPCzgu2xbYyjPBuwcEWjBcengsUTGMPd",
  "key4": "3HJmjL7WAwZ9paaTvL9oyR3NjgQzhofqZf5Ps1vjZ4sg568ityw9XfS2RJ93Jedo38RpNTuaxqUUhzBGUbmkJhZE",
  "key5": "5yHfGkSzLevQxpzmCPsrUknvqW3njtHeBHcxR18My3ZEg3AoMgWzdYUutAsZ4H3DMxzACmmiToEobdUPWmK8ZBzL",
  "key6": "4itWPDEQUeajnRjWfWxPc85gBXxszcu5X8KRHkWAhKKXWgqXCLvMr6MD8J853XDyv5Fbys5Qos8Xhke2fmJdmiYW",
  "key7": "3e3rQLQ4nYTeAeva9vJG7AuH4FzPavvBY1Vh6CSaWQHnGR4m89L6H5SFdHDgsWU1tyrpB7atBZje9LYFrePkRjgr",
  "key8": "QXqZYV9WhGuaygHF4kpieUgLSFD9XrL5hWLFUzupNnuXkAMXES9miYkQDjhUkrGTpGi2AzsPpMeisa3ybDeJJgP",
  "key9": "5cBGM4hpQVUNEjMUGr5MmFYDZVv6p9a89pgFLYMEe2Ykuq2KJ1EZL26HVR11x9GfmLQr97yt2JZJ84Z7HjgT9nVi",
  "key10": "3XFeDGM7m31QXCicAGi2VtA5tZC9KeoZLv6iptxbFV2eQttuoDF7w69q7PSc7armrfcgumJt2RrrjQLATPVWke7j",
  "key11": "32Y2kdafWPx3WQ84Znz432MFf9BSBwPw3RBAqepq5PMQ77tw4Dx1ifJHfsxo3eBpjyNfCwvtSbYfYhJGyUvrydFL",
  "key12": "44EWKSw5WyHX5yTfRmGKZxbPTrKyeBDC7e1VQzXRmELdPTd1HkZyzc7aHFnDy2KLALDRNLpJaAKEJEX7aJ3f79hk",
  "key13": "27Vq6ud8nwFKMRyDbASCtceNGSmWapXgeMzDJnSyNas4PuwoLpGppGw6TdwqXbytXCtzjBtn8eioHkrG3xvPVWJx",
  "key14": "3axcq1dN82XrTEGVvrubqwkdrUuxgbUKMCvxBKzQLTn8H6XqeLnK1NLz7nDK5FhH4U79qMBw14tzpRWZ2ofCu8Ju",
  "key15": "315Fcm3pMp332SE4zoGKv3Yx7AhHNQLTPEtpompSmkn3dXHPUbhbygPCSZYydMRbuirygvVem9qVNDQPsvSa7sPP",
  "key16": "3tYX5grXrm3PYa8mmtBio91arJWaVWn16yeBCTaaVae5ybJEDEfAE8e5pbDSZTwyHVwdNqaTN1KachHuM6cWaooF",
  "key17": "3fG7265cJXTT4AbFzH1uTWU67C2YHYdXSacU91nCuz8T6qgnFNModiTLwi5b7PiE9uGc4w81P9futugJMTde4U8M",
  "key18": "2KwrUU1UQ8piGhRGvbPqMPy5J9xRQsBR1KSYVuicJVrQE1JFNMqj7j9M5FadvMJzv3MYdkZTpySt1mS4v814ZyHn",
  "key19": "3Ms93BmsVTNFJctQjeFBdCp3gHEcjyi4D4QErPGcVHquYdWcNzUtuX7S8ebK6R8yBcejCfi9HvWDbmjbUnn9PjUN",
  "key20": "3bjy6iGYra5uTz6qCVHFJdoaTUz2fxq4f9kZkPocTD22Rv1d1oZecUQrrinDzwiYxF7tiMwPs11FJ74NqzED7k8X",
  "key21": "q71Nq1jpLqS9hFPx56RNrLtyKYsSqJKK9nAeuPHF57j7oS6JBsbaoEWptNcGEKs2TZSXUZiLZaSyUvfummyoivu",
  "key22": "2gdPNMnMQgoBtebGJTMYavRxqZX6hZcV2NhjksqP7PX7DxsU3iFWtrA6jfHJFs45horxAQVJuLbtXrxUpbyJPoqm",
  "key23": "4XXzhq48rpfDiK2Gz5PFGRpbHf6egKtfHPzPa3dbwojVCejU48uvSYMh1CmGFkYfCdMDuUYAxoN9sSpTjNWicf2c",
  "key24": "4TfxTTaRbPHNWb5HgVT3f17Fa2sTzZhrYhx6T4628u47RvNH5rWR7vowKT5HXBXUUnQ42T8aXfBJHVXoj85shxB3",
  "key25": "3rwMR5tETyTiwsTdWsYfkgfbxrEbRTw3rfnGVDB98DTWFdKLh1yzdrMPD4kJtFy4Z9wMWcD9ACdGwNDvPGVzm1FW",
  "key26": "5wA9WH563AwU38c1sz4MrhpGPzwAgoDuFCZuo8AuTwAtVWcmYrK6j2dNYNtKJUYhBd95BSgHi58r862v2D1T5VEc",
  "key27": "2e2KdGcFseX87tChexLXKAJjS4AfKXcHUHdgydNR21CwwtCFUnuDd6Hz1j98X3o4vLAhcuqWWK1Xq7QTQXc5icBP",
  "key28": "25whxxFgHCqpM5AbATZcWQE2qroRRSRLqT9aHKH6bQDx1bVFdaUuZn6ZEfbr9t9DCPbLLWizA4rfKGCFaxBFoaYc",
  "key29": "4qu7kPjEiz6S37MyF8LAW3hhp2ArxHxmdwhb3XH9Qzj2aWaJauMPk9DqWBVaDkgHnLo6YmJne8FnNhwZFsPSjYBv",
  "key30": "2w1fa2a5XYtffxVAGKekX5UPAp75yn7ByjNaPAGKVLBbVhYz9CzbgWSGtX4GPGJoCntF6K1oHmws6o1aVw2HYk56",
  "key31": "5JZ6LfbBQmNTFn7DkM2gPdj51916uubM8qot3X7BC5qjXqsKq8dcVN4zLXzk6e8qhjfNdwLFYUB4fpPa3rYWXJTT",
  "key32": "3RxYSi7g1c92TG45S2ko3cnEvjGAedGRNdLx6MyZKxvotyRfjkJobRoAYsUGZDm98z9ST5fpUMBceEmGRUCbTYzj",
  "key33": "3nQLHUiMqJYfc6LDftxhRLiV7Sjc8QMgJ84wTnbecWZmQiDffiXCpDGcysmCQ3SKMBY4GkHLkKc43GW5pWfbwQQB",
  "key34": "EAuQ9kL1suipGoARoCKUQw65rJmkPrHo2J15yT4ZxDBGfC5hV85naepCi6L5jYKH5oyLWgFsEb7hDfeZcohNyZn",
  "key35": "4bak4uyDKngcUhbQ9L56WTAn7jKhQwjdJesiJBE2eoN8b2vqeLV9bbfWro6g14FuXMUvyuHS5pMD17nHe5YJzNxV",
  "key36": "zXtoiw85avzJti81tYzXR8BLbDh8UPa58TPWLKJL49FHmNCVkU8K9Ru7Xc4Pro92sCcqkNCkPE8ugp6XjGJxdz7",
  "key37": "tjQbXLBJHhonnSEiYcJpYb4Hi4AA51LnwvWNDAW4fBLDzETjqKHBaAQvTksawyvLD8fWYD6kRHptyxLhuqaV8hT"
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
