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
    "2EGx8G9RD7vTS7g7MWHFe1fhMrvEt1xyAsrBKBwjJUA352JnYFTTt3zArvxJp1MXinLFH4uFrsFaa7z4oPbJPNFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWjVeuZDfDanXKbQPp69AqKAsNAXrXE3Ud6HqxNLPbrjSF9qAUwJSfbNo1NN2zBwaR23rurZ5XJhiUdZ3tPhxjc",
  "key1": "UrwN3UwYLXGvKw5mU35h8pukaDzCWa8XE55MwUZfH1DKtWXnc3M6PKmRsKKPvcZEf2d1vSABASwmrbhRmY3hv3o",
  "key2": "2C7DGZMskDn5qryHzhzKsHYwYbKNyPrzCRaZRKMcs1EAnso5J8tRt44ixGA2L2spCLrkoLdJE2enf9dhjDYtyPRK",
  "key3": "uqEj2gt99A5UYknqfoUZ1A4C9BnTDRkACkKQRYVQYA8D6zw2s1Et3rJ63fEqWKp3Q9wrdr8q6pmbtjRtWRagTWj",
  "key4": "5ErQLzMQdWKnnqYVDXCm9fZostMSDY4fZ65ZJ52MwSjXUoXD53EfgubGQo1YadCvBKjCWbiTwXxp7DP69yp7utXA",
  "key5": "2iUxK1YSigYCCRs1Ypn4LqBsbJpmMzTHa97gsNH7PDd2scZBA2UcQUkrkaC227JjdSaZZEhzYawUj5cNAmrjbaGu",
  "key6": "5YtYtvgEETgZyBtVtsu5auJHALvVPUZ54TCgiDQCGDZm1iLXxQnZrPHVxpRLTLweKfskQXed2tKcarhdRsdtuGcK",
  "key7": "FyjBvfssqzv6shghvZKTTagoDrJLM9MH21bypdrWaw5p6e9vcUuzqn9WBakBei6QfTu862VVfHfj4x2TmMsasge",
  "key8": "4huWXmEHUDTEoawpQhkSs8z9qedENuULX5pjELbQNcFFMADd5mmGsi9aCAWdwwqSVCZT26Yv9E7u61Ts31V1DF8y",
  "key9": "5bovqZz24MKXDyNV5egEmezN6a7DCPkTqLtcxFkBK8e17vJez3Sg86n5L5xQ8Enb7BFyvcfGC8zrUNQE5Xue4Tw9",
  "key10": "2TF4ejYU5ELNP3Jy73ZktiqYpBB47zDwaLAf2UFbWZiRKRRnhQeV3WFRXXxELHcwQGnQZMUTZEkr8eG7v1ne9JWn",
  "key11": "3NJdbj8jHir1K8qLZtWDfwTWYFjra6irhrmXLpti2rYaJWDtzdE41qeNmBVu7BsCUejN6F1od93TuXTEBZpEU2kv",
  "key12": "3NPnTCwv8SpiXz9v4fEn6fww1aNoZCfBCnhd8aS2RAxE6Sowrsb217BkMqdUauGTdGBhR85Cv6ySQTEQt8ikGZmi",
  "key13": "HR7gBpRXosLPCjXuz8EBAx86GHiqrUYBgJQTJe6caJLPKz4erhbmRxktLY6g9Hxh6eQbsa5RsLT3nZmz5Zx9now",
  "key14": "3g7DVzF79QJKxcTDKWhQGpQ737aC82A28YsmyyKzp9a1ovqGQqvpWAK91S5WaeGVmbgkTcuWHXr6wPJFkjj4GCbK",
  "key15": "4Ji3sXZvoAf4Ld9wEk76ypumijCDTzsQ6Mj4n2mf2MbAxJcnZxdVd7QBXwkV7XsfvzDmxZLo5RbmvCnBYELF7P6x",
  "key16": "3FbjPaTiUMEKGo2CamyvU4b4dfdkDkMuKELMe9ggMSJBX2zxW1HkwwQDmBshtF2gfsepFDEkiC9rfDr4nGLmDECk",
  "key17": "2vh8zb6pnXfynSQeuWzgEWYcfrVgKcTbXFzS9jY98WT1Hov31DQVmBUhDH4T4SdrKfTHExjiQdu2jikcwm73EceD",
  "key18": "2cJY1TyG3aw4T9xCNKty5uvktb5xXctPNCYUXw2fFbPVJVVGEYCsA6gi3nGnDMaLz6oeJ9B9vSVK4373ytHt72dz",
  "key19": "5fjjcePJLRGCB7ZXLbgQLzjUy3MjKguqU5ojfk1EWWLJUZUu5EjxxHPGLr4Jo1gvMAwhkBDzns6FPZBCopi1Dn3U",
  "key20": "2KmnPVCTFxpT8rZR34jv49sycpjLC5WruKpHE946WdVakeWg8SKe9PL6fuY1FyN8PP69cfc8pRf57TvLZtWgRVG6",
  "key21": "4kFBM8MwdA8kKLZwwGgYX7dC8GxNpKNCLuK7NGjWoJs6uFrEXXA3jxpCzNHdEfxBkfphsisa4NCvJJmfDnkDA77t",
  "key22": "4UyDF28NxQPsG9mmAT2Up6i9zcoz9taVihoGexqyqFWBsF5T9TBWUWSEQyWQbJYLm5xrwkstaPegGW949J56pbaY",
  "key23": "3VxqKi92eVYk7VWLJgmoXyAi72ZNuQiZsw85T73hspCAeRf9NCHNvhbfpBisyrfp3f8ZZRWhe3wPeCYE9F342zYk",
  "key24": "qjp2joL2jbLEscjExdK4gDwDJGgMCr7XhNx5mBKmykhiVasMF9sNFB9cETtrzZKJTdtkqGT4y8QzcdTnYfE499q"
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
