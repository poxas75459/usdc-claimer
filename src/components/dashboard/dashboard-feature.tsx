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
    "4jTeuhzibiCBCa6NHNNpHUSgeTL5fFBfGiCdpvk1frf3JnvBJeqCPT4VjCyeGu3pRFXyYsRntqvfVBGLAvuoMx4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCk9iTzeUZuaMKSGqpF4Y4KETRkT9pnMK2uXNukmVavBvojy4CWipsoGTLYKgH5n1tS4zBnmKeyJLJYkngGGjVp",
  "key1": "3Cy9inM7hmd63R9DHCTEnFwt1RkTEnk7smfsnZMMpx1ciFGA1VPEqFUhF63eZ2LR3A8FwRaDk4modjBx3zoEqCAt",
  "key2": "atofXuqVC1PFmYEXBwvZERr7v3gJAmgXc9CtNQ3mJiBxuEaDwxeHnfToNz64kwirXyUB2FwYC8f3Xd1wFYsp6Pb",
  "key3": "3U7qQphdvgZCsE8DQYARCSrPCAvrUWaJ6zzr7ksusEryKPtwvCPEG4NeE4XiZz77wsZdm8VMJYfZn9QygGwJiPNo",
  "key4": "hqyW2bKz2p9kkUk95GC4xBKY8RnZrNRwSsDV84ZB5aBzN7cY74H9AVubUngGrLQ7GW6HP8CfkMdfqYG6YtZ91sj",
  "key5": "2K5WAVX67YXPBCHXv7sVvAhyaPbjSNoftaJR5uW4htRCTu7MQgruaH26CMqgHX5ktJb2MyfWJcwzRWxTfe8bbfmX",
  "key6": "2RVRG51WjqU3Wa2dBQKptx6eouKwyPSs8qQ1n5iGmR2TaoipKKf41RrM7BdXqcJqdsMiHfaQVaiCzKcx8fGu3qDb",
  "key7": "5Tcc7PZYR2vGx2SFKT81SqswQ6BCbp8homzRuTDgK3rxGwaUNtXW75LQBo8zMZ8NVTBjsLrNxT7FrzGtc1VanBcm",
  "key8": "3AfQvSkYjdksYc2J6SaSPPoCCCFy2H1JafhqgpwqfuXScfeHfE2QxYFA38fwwdsXmdZDYk5FtASqDZzZtjkUnd1A",
  "key9": "58f2KmzoWdsTceJWhky4jfuGXGziRcHu5Q9YgsGA5Sd57RApXAY2C5hLUFdqoq4ngJh7XUMtUveb8yRyLKREHwg5",
  "key10": "5BPcQoEryWzp5yJ89tpxywrL26E3qVxwHupQcB3Kp8tBxmZ9nDtEZEp2EdoyqQqEogH2qn8c9UxLUpaaBQorq4jC",
  "key11": "tDTeqP875SCdktBdpixBYEA41XfFuUVhVyoqSHLkATrw1xu7VCnYA7hoU6QYxuFuTPpjwQ87rNjPBwtZarDBDUX",
  "key12": "2RXmYAYmXMYt9xkc3fzsgbRejhevGySFDjiCUVjyv4Rxn2qeWgZZJBEBonTSxJaimUwGVh8zSfKSp1ixEXdqSzL4",
  "key13": "6LnH1PVWwmimaeRYunoKULht8rmE5v4qGDX9GqdaHVDESEAr13zt8SpFdR6jnHa1nJ62tnU1Rnqj5sgnRC6axYi",
  "key14": "9H9kN7NwUS3kE2LLztDFqg966JWsHqMf9DyPodnWBz3bdMGsh4hgCD5zksx9P7KyH57uZ7rn8v2WXAzKU1kRokb",
  "key15": "3yhYuUuyRdhebNYgSaWgzKLGYVzr5Ni4eVLKWZf8kHT3H7m4HsYvVseuxDJ6i2UcrWEWXkekVVbFDM6JNzaVo7ak",
  "key16": "wRTFDwNd4FkfaJxR85aZSsH2gsFFeWkUUvZ5q3wRS3u5Vzi62wKCqsyusykbxkCLjo1mELxQvEJGALgejMaasL2",
  "key17": "Y3wB4JKSWY2kyTJLEfP6UtoB8SK1Qr5Z6F552X1NQj9cF61FRA3vywGARRW1jCwtJdRrfCsENrSxYBCVh76GVgz",
  "key18": "55Wz8LVb9p6doqhJTZdK7XFfPN1QpBgeSsoZudUpUstk3m9BYBqoY1bAvETJ2JLmBUDgc7MrMjAMaXNusZY1NM2K",
  "key19": "tCX3YmLYqfQEZ5RuNcCfa8Hh3LyP8suz7zv6WhMuiMbJC7AY6W1KPHJrt2vemYyocnoVcKoeewGdvC7YK1acSNn",
  "key20": "5gQN3oxUs1Cv8tHTLrv2Bo1E5JUb7fDNBhnKL1GKJrmTDi5XURinYwwioYxj5JWFuENMfpzUrnffV1Pu4rrUbEN6",
  "key21": "3hvZRCzAuZMQb2Ub8Ve18YD5PWNoDp8SEydjZ51Kz8MsR4JS3evLD5Nrx3SNv9jzH7GT6peq8HKCmEfVKwp84w1m",
  "key22": "2rYwAJBad8yoSNyd3hWRyjqhWDZagrTboaB1QAwF87jyc2EBso5K9LECHwukTzPYw5gGqqQ934LsViv4kCAxKeGc",
  "key23": "3i4XyMmEvKmP6nsE4zUemrq8hFRBKPUJGfj9NUfDZj2PBuaCZQi1x3xBbDVNhSdAcqdVuLgADgS5Y5gPVjhueVyA",
  "key24": "4jPY5g5FbF1waThmXVecKyiBgXn9rtouK3Th79TDdiNtgawSU1HJx6kYkEDFDRWrwwdhmPP8EHJHJ1eaRRChcQYD",
  "key25": "4AETuLobofQuhoLDqUYeBS3D6LRRb7YwhKTXdtZqF6sNYQw6FEuE84njxDBZJQSxj2WruJzKbh2Sa2QUniN1Mi72"
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
