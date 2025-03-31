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
    "66UQJDXtuNVLKEKYmH9BHu4VGnP1uEUdPDBr67zCmuwYebwReFZEGuQxjQKyR1E2UFt61j6sjinpHxNrsoDV3kGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52469FpF7b6rUHbN4bSDwprhFGPRfMSSTvSTmd2M1ykSXJjZJwHjj9ggCxeuuLASpN5o3tjSk3tnnMdp1ZvHwWtL",
  "key1": "5Eo9ajg2ALryYjrGmdi8ArnqPvH8LroCaPJR449u72jMx5mJ69ZoNFtCEuv6RMSDKiSSGT27dhp5JkSe2mTribVB",
  "key2": "a6p1PE97wqg7u7NHuZeYX1iMq8yyLGqrkpaEeejWGM3ezeziPFYj4syD2i75yBZmbPtzEDD6s3DHYzqCBhfuVBo",
  "key3": "5vUNwBR8PEt12By8XWcf8hhpjiHCxjTPpUaPhhD2ZQb3dyLSnnnXkDaqvgAqB51zm6fD9c2GR6C4HWdrMgpGKfov",
  "key4": "3ggASH67XYrtxJSWrCLbXEb8z2hkuZ6hYskUFeHQ1WtvEsaXGV8sYihen7TiKZMaQaDgUosrdHVvV5dz4dpt7Ce5",
  "key5": "23EmNqxNWdUbqgNdEYpJbr342k33KuXZXd4FW2EZbPMi7z4We24xB4ips2nMoKKKRX7qnLo2w1gLRhEXxoGocXJi",
  "key6": "RXaejwnnRCSH9jYwzEV6pvhZLmsqXYeVyuvf84rW8JwFc9mjxHdGn43gro2kxC1H6S1g6iTMTvxb6rbPGjfZQmB",
  "key7": "ujxPyG8j5Jwhvt23Rs8UdqFoaiargVXpFfpqBaG6AZQQWWcao6raZDLjYZcYYjLvxzdbvtPJAJWtoQFXA4DybYz",
  "key8": "67ZN42SfQTMWS7BAtJZNCoYQiMYQXnb112E66PND4Gk97eUb7aqq5rwXoXx52qLoQCszPjWgpeZooETNKS9jDqAz",
  "key9": "39GXVGypRH1a9P8Qa9toKh9PiVd435oW7JPKSrwbPhfdTrfHXH3CndL2p2rsJEpvnZ88rTzUx3AuDeEUjwA9j2YV",
  "key10": "5yQd8GfRkoYteg6Lshi4CAzbs6w2cFA5Pgc1bwaJYhiGnejgMDCFAxVURsfNTayRdCEQdghFj92eAv8PvuC2mPhH",
  "key11": "33wjW5UooMAZKBkjF34CdU8SRhfazuF89nA15kgEZ2db6qXKHKVRt8y4pauqmgawhnPdinBvYexbySKWhG9q2SVg",
  "key12": "4fc9FXtULgbM2JcWuthreJq24PL27QMY3KobMvZFx1tEYan4gD5akpLSeXrbWWDrmBs387YX4aGg5MS4RdcBgnQJ",
  "key13": "3ArNXVTyNCAzM4Ntg8Svm7hxHwZ5U1fPwZZZTfNvnYuUiYk4tQycCAb6Rkz6seGqWy8czL7GYwTNnTYzin6oD6hi",
  "key14": "4LJ9VPmku7uRnYhKHHVBp4TbBNJ6V7oGLk7sdhEnQ538zkWwB9C7sRNKKgiKRJZsYF7YnDRW7NoRjbfqxnyeVaqy",
  "key15": "22uzasjZBpqics9NTNF8S3iEmihbP5fpeTGvi9WnvqZZxWp42FGijaRM1osskqACwi2G7pNyBcvtq8tEebg2bG7a",
  "key16": "4rmCrLVCrn47UG689Yo2hheFJ9zUHWgUYxW2jnZj7uj8Kc2pY15ywboTwrYoipCPwMw6f2ayFNFJ4BcoB9z4LxAc",
  "key17": "561Vxr6PGAwzXAsFhqkefDxN12ur93d2NoLsjjurUFPebR4K3hvjM38VNypTzDmcHnRC4G4TD5HaG7whJHr1ubhE",
  "key18": "mdCrUzLuzU99zGLtAmXcHtFdWafa2p2q8SXqC9zocwtWCgUbLm8F13roN7C8GqNaY7wqV5mHxAdpi65Us9fpdvT",
  "key19": "3mqgZ6FGmGdacCHjoBH4DonDX4myHLXSER2TE17JDnNdhMh1HD6q69YuYgrWyHevgznkCVa23utSMry77wo4AXDx",
  "key20": "5uvLCyu4ZZQrWDsrMyTph48H4ADsZk8FZWYhwvdq9CXhZrVJykL3EhXnRyv8mcDTJ6P4q6Vg6aq1yNswvC5mv7yW",
  "key21": "5Aa5otMqi3RnsKYmBvcJgYDpXcD4AWf696mgytTFegy4rqmHkwUfVvz5ZiuigkYMKBcsPnwSHaeGCT3QXnb4ANRh",
  "key22": "3h7RoAcgJHQRmiUxdcDQtjrCn8K6kVgQwyhUdXng6U7CwAUfeuJ7b8vdsnKgJRAJfQG5wPJbfvHzqwwDJdToiWni",
  "key23": "2HUKVqrB3GDin4h2CYBXuwGLWwdQnuUC3vfA235niCkUC5aadAMrLQBSK9MCPp9GS1vdFtWDqSJ6CWTBLoB12YKF",
  "key24": "4NjaxtwKPKnqpsoNuomYPdbrrQ83L22KgZyh6G3bVmaWWVpGC7ABLDKCs4XRXMDPwafnkysryCUcRa56kDWZGPZc",
  "key25": "3LyrqFgT9MHLTqG25ifKYZUxaCKTvdCcZxJaDNtQuQMKVzctyWEHZ6qGh8xg8igtBubwn3WayTUR2NCHwy4BEqbY",
  "key26": "QEQcjr1ndt322jZPfrzoq54wAX3ZfGMmD2q7ba1dv7H4owE6v9yrZTvVDwjLrmVLvyiaABCFyRuZwEbJTQC3yeh",
  "key27": "2hpir4UVVFG8rhfBBZZ6mjDuNVS8UVHp1bs8P67SoxeLGxTyEoBX2DqP7a1VKbA8wfSsu2Py9x5Q3Sci1hhXZpQR",
  "key28": "317ctrpMBJQxJDswxttN358k4ALWoqFJkpL1owkGzo571DKDQHb8SKR9F4MvTakbRw22FSneBe2p7J6TV2cuHkXY",
  "key29": "4UuXVeJtAUnzyUgXh6ocoe7EN2VjJYiVoNqm8EZsY9MfbXBLLtUrU2yW7xv8ijArZWVKgYUQJbfAAxep2Cv1rW6w",
  "key30": "5oc4LGqs6mPXapW2p6F4AsDLVS5TRU15EBUuLC8LjQ3r1m43Q37oyYusVChUeM6VJJRmcDRf5TQeD4P8n5dvSMxF"
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
