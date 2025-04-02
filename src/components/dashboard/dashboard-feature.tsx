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
    "37TCGxgpePovCn89q39yxGGpZP8pHVLH2n5QbDdYuUr8V7wafFgscLCXEZzHpjgF4u7QYYjrKAxWpjGK5cguT8ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ey2YjtKB3EZBgibkNPv3TYGK48JNomBfe5FGSysrruoagEtTdgbDMc5h21KD3BVq7Qs31kMDf2mKKPWgSKV934g",
  "key1": "25MtWeAWVS1E8uiw9Te1jmwnkUdBmUuUgbYUF22DhMfJrYwxUuLAWFFcBG2bukfZgh2ddSHWcnRWVcpkjoWmoeZQ",
  "key2": "4d7rmGVjHemTEa8cyo5DWMd3dVKsMxMUrCfetPVpJDubZ2SCmNW4mWDQQ18UCokdPdUCDhUKT34rqg9AuKVQQSML",
  "key3": "48mKdCBRNvPBNLpFo4NMzW2yA3PXxu4TuSataKUJJ1a4SEuRTRkHMUpf3F8WBpyh8MKDAtGzP8A9cRJN2oKdWcqf",
  "key4": "59oetGFKHDC2aaJiT3qYuQ5H3G8ycadFVrY42nCNMpFbQTzJk96HqyUPCedayH65RdQKQ5yRA55NWb2HsviP9Xaz",
  "key5": "3KPmH4aRJYR4q5ciMVHB3caBoXRLZFYhRrJumsiqHk1AsB7R5rfRwWGuoQ3VxCBYn9hZd8BVhApg3vtW36c6c1S7",
  "key6": "4THmuwxNoHGrkd3TsbTvs8dqXJ6JL8Rjnckr6NJPWpYKBipgqvjqMsSSJmC7yhaaTHmbV4gYxCiWHjNrPCRHCfi",
  "key7": "2oNAdoNXrW5EWoDnkBzfYHYvRaWwB8gudjodF5RXEUK4i24S6H4u4aUPWS3Mw7h2tmeDZmTYjpn8QaM1pMp4ACLY",
  "key8": "5jK76EixDBYGu8epdMukgr6GnmxWwpm8E4V4HNYkAqKp1UUJRNKhZMpSnbRC8vhCup8bNqvNxos4bAzgZDT8FBfs",
  "key9": "DeuEtHNGraWRT8rxRLJ8mFsdArS2yEqrHoz9aUdSJEDXVM5RUeaAqS4T5tn4QFv9xg8JsatuFzSNCrM8SDaoQn6",
  "key10": "4FeQaRqp4dZUdVWRPf4tKRwZEYMpiY4cfyLdpNK3QJc1vmxVCcNjd9FvfS3wcNfHfbaSsq9F7GJ2Q4s6Y3KwD4as",
  "key11": "4x4SoG22nYqvoc7RDdNVFZ17BWGMJVP6QyTd3hZuKenSV2cqDZRMfKbq39n1XhvyzERzAEzcFPYzrwsxSCASeSRV",
  "key12": "5fk7JdzivHKXAoKatnkRH37Ao4X7YSdUUJD8AazJTk1YfFAbAJZVwcUgEjF37kBZuWP8bdcdorc4okFM1A5LdUhY",
  "key13": "2nxFdf6wv6Ty3oarbsJafX9znpydZ2KWwr5yw6BF9hBxX8GAabTkiTQYdTEsFKpEgAW2DZWu6fYPaLmvo3QTknbA",
  "key14": "5xucTN78DgA1u7HKArJWzf6wszz5iwvuGuT31cXKrkZETsDpQ5Zghd2r9wi5extCf1xvdz9zzhkZrNZiPBMMsxr3",
  "key15": "yEkBUwnUV3kgZKDG23ixrEVQxG8r64EtDYKmhNFFyiyk1mTZK1wSsCx6HGfcwvA12aoA8oGY8Y6yDmANhcB2aFU",
  "key16": "RrNQzSd2rDhiAoMKFbUkrPafXjf8cikxKnCSug4m1QHuQcqKB9sMGPXkGL2z7HKbKz9DARwsYMqY6v5dxEVJJzx",
  "key17": "59ktfrFn8TYoWCBHRwe5pq28sKRkNyKhN5GSMXDNMwc4RupdXKrZiR1De2aP2gPug6GTvBcwxBXTkdqDdidXfkXv",
  "key18": "3aAFfv4Mqtn1LPheCEyxZDc6FT6ZGHttwj9Z5Mb4DDsZqGaURjcEfRnYk5Bop9D8W2uTv4S519XZuEkDR8ubJoR9",
  "key19": "219j36brWcSpkG5RbU35Ax4aFXmJ1JGnHgr7Sve8tTjpWUDP63puSPwBAxWeTwdzE71JzDWFd8rfDWVMhXW8GBak",
  "key20": "5VgHnR3TqruVd9t9N8Jn3GevNEEMjxBRAVfZLd3C9yqp9TY9GnMMyC4di16Q7kXCSSTr4aBaizsidGYMJ3ELxe2R",
  "key21": "4a6wQ5Yfg42gpZX4xtJE4WK23tcfL8Y8NqjwJcBKG2FvtEQooxxELrBmK6qPX6Tw6cXjF2KTUZH7vcqxEZKYLQaJ",
  "key22": "3xP1GRXeU9Ha8yTvJTN4c7RgaiJUWdToK1LVcxRYkbhbP5ENUB37bTVgAyxXrRhpFGFS75P2N9pYqTMd4q2UMAri",
  "key23": "2MtNRhDWWrGenCC5GGVV6cheqJ5ckeL68bxWwZ3n9bBZGpk3nguKiKbkdyYYd6ViubDQNgCUifeibD4sDK7YoQuA",
  "key24": "64sPHUrYYBmUdmJvkaqhcgTcWwaAaptstG7RhTRBJbps9NtGDpnVVRfob2WYuHgFrqx3QTUsUBSjVUh1hVcnYahX"
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
