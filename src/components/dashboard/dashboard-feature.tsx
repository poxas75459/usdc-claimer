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
    "4Y82bBpRVpGBV3CBJwUuNvHPXQnWUmCk3JcoMBRtogoWQfaQgexN4NgbUpCi8Q4o7i6XiVofF3HNdiBb3ziJXEzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVqLaKoHBqwacHZ6bgRVUty7t2j9c1T25UmT5bXJ5GKMPkjYU3LCfWFupcri2yv8LcdGRDErCRvMHyBGho7Wvii",
  "key1": "68bBfXpw1qcJksKNgZfy7gU7RvH2z3nBS5Ak4fPg586SzsXEfPY5Qp2bG3DUbWMSvNm5DpKxrZw89VxC7V2fMYk",
  "key2": "3MbTRyxqb4U6pXTmKGXBxb8WTFBgLjyQnfErsFFsVbb7yE5pmv4ziYGVUTzwmtzwY4DHe3FBRbQk84y1LotVkkp1",
  "key3": "2SDHDDNRWoMNz2Z3KN8rGLd3tLJZqjT3aBqr4rgJkSZ88SyfFGHKRtA9ekvHTw76Wanj5wwkgrkoSAjmAVdxC5D8",
  "key4": "5pXJ2QU46hX3DYkfnojS3KuJm9yP2cARy43qFkovfh5CcCqx6zFVofWNxqY9pLGfCXDgYb1VZMkmxMW1GsVZTCpD",
  "key5": "4uTLfY7Lrt7mWyEBEJdXLxHoxKLifMubSvXARhr956uh2BtUi1CbjprX7tjvJoRBNkM66xs9hAHKjYZTwgxmojuN",
  "key6": "5eVSHHQBXHreJfzTy5oqCUWdoRbvQvkJHNoZ8pPHsEqzQmPbfD5J7bskKxv1YytTc9GdKTLiR6dZpa8tDU5bxNzM",
  "key7": "42V4UqP5i87igonYYpGdbcRrKYnnpCuZBXPM9SZeqxJ6XmbcMWr5sFAp6npj4SqxrdpWr1cjdhhFrXt8S4f91Ccj",
  "key8": "3WrNjEzPpFs6uVNhFhLugKJXKXDJDbZij53Bg4JAFCAF52opco3m5HXhbMBrBCfL9TUducY9bSSNXvi4dBigNXtC",
  "key9": "5M5of9j3wuexSxUsCNsaXSw6kFgVwDMVgXbmvHHVNDuqePNk6mYuQvzrCdSbdJ3gqUQCBnfFE5J96cNDWSXrZins",
  "key10": "2SVe7HyZymoLRCUAr4QC3zqZpno2F3j3oKhyWkgDwvnRM1ACfgLQrjL1ViVMppFah8VagNFKgy7raKiAKNBWdyLQ",
  "key11": "3FLiQTwcppywp1g2jpAEhJVrJJhZH7X16gNRx4CjnsYH8p2eYccrtsDvaLNHHT527dWSCw34SVJcfTyBM5wy3ZFF",
  "key12": "4GAgeye2VJKQn6Eon9tyDx7rjbFxbNWCN1nTpYc2h8uZCjTwokZitBGbx2SE54nUYXUNLufeyiJ2QA6ZUPkbtPGM",
  "key13": "4yJKAqHryqQJjSh3PLAbwLB8r3ieDyeBYAz2KLeWyXFjAawXoRYM1KYxbR249EKkhD7m82YyodyfKKumPjF24Cu1",
  "key14": "pi6eMxgiTyDAUW45j46WV8Yg53U8Zq2QX4KZzHr1fAKue1bFShCt7gvJET2BRFvyRqV7zheWTMtyX3pSwM32AFm",
  "key15": "3GEEHmcn3Jb4kHZYZS55oNhPSvTkvxkU3y851jT6XSuL3B4Ebbtb2CrWhC7HkBggLyEoEUbJy2Q8Zf8g3FGT3isJ",
  "key16": "BBrWJqBQAKREUM923DB5ViYxghM2UCVme2EgSHaGriUA61JzxBBHqwtbuiHjTbN8pTQYS7ybAkVkqUPxNzUFy6M",
  "key17": "64qw9K4UVNxtHd1xNLjAwNtrHVhxGUDYVfDN7abQ1dAEEeezMZhQW6C6fevykr95XhGfFHwjqv6ikcsriR4eQvau",
  "key18": "3kSfqs8UUKg67aXgZCgGcQxU7ACXB72NWHUB2WKQZdqp4nuE2Mw4h7jGXBuD29xWZBvz3B1RHMehND5gWuVr4jv1",
  "key19": "fixu4jEk4cMpvCvtwPMM2cLNuFvpWSXNNHSDSECFPdwpomSvCiNwCKTpX5CEK8p5ChtcNApKCN8fzrU5h9DemLn",
  "key20": "zVS5DmRqkjJ1ASNfwpSowQypbPqzkD5jgskeECD5VKWNDH7PBUNNy4tezzBenKW4tFHPfy6ezGtoCj9RqHPTN9X",
  "key21": "omxkVAQRBJV2F5Sy49aJucu4vUoCmMXzaPsNUbNXcRUA1mNS6YYnn4bvYn9tLEbeKbvUfyTCbfq5cVBfaiSDSVB",
  "key22": "4SVN1QwEGKbnuSscvevPHvhVNSq7tYSuXEGqXPSKn9VrSE7GMrhWewYVoQXqNfPEBwMKmBatHioKjbLxhJLGRj4G",
  "key23": "4bZUejY2dSAXSnVfg3eiRxz9LibEg4RX3Y2ssEv4B77pYFDBozvfHdHcNqknB4WvaTkXUxPTi3hMHkjqFXAABfMd",
  "key24": "RocayVB33KT6LJtvu4WpBmBtwDHzaXBLqKhXw3nsdBXx8fJoNnA6tc1FqJeFskURUd9hTxdY6NT8nyykfBwTTBL",
  "key25": "5hQfzB2LnvfsE5cRuJGCaWkqyFiRGM2367GWT1ufwypcv1r155RDhRNvvDijGpKJcaVEmKQfKBSs74EiJPEZXEpw",
  "key26": "26cdxm3fT2r9PC1Tudvh6RY3TC2JZ7UMfc9bK139VHwct9HsGTQ7ygyGonPj1qQiK99xGTenTxejKgyc31CYBkZY",
  "key27": "51AodiYh4ufa5xafPNrgfDxXuXm6kAUmbXL2RU7dfGgUzn82MRFH1rRU7VDVCUALVkscYRJzqyAozaHGEGtQPRYi",
  "key28": "2Es68CE5ojqHsQeEzCykHuMMwvjhPkKSYihN4PUHAxJHSwzxCDRerjhZx2o3SkpCsFe6YFBHQBN3FupEQNKtbuJW",
  "key29": "2E9nxH9XQabXzP2oHsnSjePVogqSnwztGtgVzhbUC9L8ffCc2Fhp9fPDszax15az68bgpjUvLMmmnVysGbDtsGXP",
  "key30": "Jsu7VSV2k4EQH4zsNQrE4M9AdGJ9uhgvEQnsoC4LZ9aPipfcUMkpwtL28nQDscFVdno5BVR9xPZZkfmtPUy5s4M",
  "key31": "Mgmvw214SuawmsxDHGSPvDppT7J4tm8urcvrjAyQd9i3JhPtKPHw5AUiGgHu4YENwv8YmKjFwMDFNchAi1uMbeJ",
  "key32": "Qn3q7T7hZHR3bqEnTihHp3tSP2fdqTVGviK3ySaypjQjJ2z6ZRTxPynkbZakvmWqX22BRyDSPwEWcaX2zbbzH14"
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
