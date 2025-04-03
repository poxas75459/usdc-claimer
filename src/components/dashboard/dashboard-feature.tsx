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
    "4JcB6tRLhP6MDeyUXtyYPb7boNfzJLD2eoMqLZVRevkistBcrpBSHTJa1jw5v45Mt26RGeqSVxoqANWMB1CHMck2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vhYXBZExsjGheGcEXPpSqdyGBeYpi6TQZNxpzvVq9FxyQfhWdFvJNS4CvNretH1F6VNMkcpp7j9SVt7MGBvPzid",
  "key1": "2PbDdTcdm46ECzpTeJugpfyjAHrLTb6qCmcbWatJmCEosU4BHbE8HFZoGBgiawGZaYQf9JMvrqUzXbSBa7an4ytb",
  "key2": "MkPBiNZ7AHWCU3nghdZHV2e9a9pAhM9Z1QaPYRkmn8S8stwcQS4RidihDgV3NZ1Poi6jXZTycgX1Auoa8Z26y6s",
  "key3": "hJ1yajsQ2jkEFp7vov2z94vohYyYVKPkcHmSuZjmHh5P7Ck8iQQPQB1mnxXspoPMWaFXTgcpZA18Zbs3PvnzHHf",
  "key4": "ptWp8G1qTnKwPHWpvrfuEwxfs42AFhrDqS26kTN8Bx6qUma1WLCFLoS1mzAHGcG2tFoeu7kVZ7LezWRiMRhkjGn",
  "key5": "2a8ufdYywqdXuQN1i1JBCV5PdP1dJ2rijiPxEPNQW6pN3DZ66TdRQAXhXXpJ98T1wjoBS2GoeuPc89hUH2gZsiUS",
  "key6": "4vosaoLt9tsFjsKhZ5oEavQFYXmiNksJYfs4zj79cB3bhzmSe3XLpeS6Fjo7R1bY3Hda6iMMypZXGxT743MxcUGM",
  "key7": "46dkdadrDs1Mgxdk4sj4E4HMBr48BtQrtaVgZsPcjQrGSw9WBy3F4MLbBci6t5HqVTcrTftZAS6GKwQMWxwndEe7",
  "key8": "J1KvJD6RNot6Bs2HMo3SgGinZ8h91wxnPtEuxHPm7tFdbdnJYqVhW6BF9ULfD5zyFsnSSdt1HR8FJhT2co3uK3N",
  "key9": "5mJm4XCodUYW6F3CYgib1GywAL7w5JgtD8Jc1frADptx6aLX36pErQ4RE6MgyV3rhVwwWZbuhCEUhtzk8dL9VjKQ",
  "key10": "643qcZYofKfYwM9hcEuePZxs66AjGgTXoCiaKDaFecpM5D6icqgidWhvfHqBe5UhbuPM4JS2XVpgyYaByAEwM3KW",
  "key11": "4c9EuURs4rsevdQrtunfQscTBbrmeJB33cKL8K5aiUM7xyPj4c41At8YgnNe4UKHzS1dzqUuCLRVqmih4BXBKeVG",
  "key12": "4WT4rjozK6WzzLaUyu4SDphRj4AaKzyzCoyKGuh9tV4T233wbAx3QrpUYLEcMt6ftaaby5TBXvvJAoJzQyAfW4Y3",
  "key13": "5E9iuHTSF6efXmLXzwmBXSfCzN1HpYRBgpdiwgBSxXcLtCjMYdMctx5svSvgAd69GiP9maZyBEvm6nMpY4kMVD8T",
  "key14": "jgD1mm4QiKhpraT1qChA3zbSGz4cpe3HhpkfcwKJBtyGVbf3RD4tmf6azscZzXW6JRCJVF17ndmhgBf3zE9hWyG",
  "key15": "4tQXApLCrTW8pMq82LdZSUqautftZpx8Cubc9RksWGkcZfWV4ApuMeidrV1jmrxjWwyMHHZrBDWqRLeF7UV7prTt",
  "key16": "5fRYuEjfhNdNbJvcQ7SF9nxZT3BRzj9QZ8Q93UrnGkhhAifvk2jAGCUg8zoHHYD8DSef6wgUFvxa8MUwdtjAon36",
  "key17": "2qQWs9spCqZqjnpHkjWnhyUwANK6DRok7ZJeofTWNPix3E2NY41bayb8rvM1WszCxTUGAmpY7t6tWMB7WJa3oM2o",
  "key18": "4bdvSwdPspWGQhRA6hNRoiA6vTNkxEi9nUwHgPXqhuyLnmTeca78rwKV4F4FhtaimHsqd45wSKHSTEsEtXwgjqdK",
  "key19": "3hoXKcWTxaJ9F9PH6hSTG9AkwVHika3cQpVWJe7vyT5vEhcXhi2nxGb89pKQiA4jK94C5rtHqJkoHSk1xdHz51fs",
  "key20": "4uvrd87euescvJ1pwtUusLVuF8HaFyTuoEYLUWR1qMArPgvRHsK1haYTxAGEkXLVT4g8EjAumEKwwu981dEXETNo",
  "key21": "2ptbPCzi9qXUvgr6pNc3CAtWAhfq2V3wQ2V7woc7bSH7tDkeErgWtHmdsbhT63reHLdKhgYuZR4hh2AFri458mrP",
  "key22": "5dXdVqcpNHp2xTMqhB98Lv5ReZxdurmtbrVDss2yPSdVNhURo56hdZgDDWqyD4CF5BwkeNabtrSns6s4VH7UN8j2",
  "key23": "35CZ2JQUdCJJKkrdsxNDddL4GboNTJuPFngaKVSJFRWNMjmrZ3D61iL8ChpzYjbv5dFu6sbU7XsRmM1hfZNAPrbn",
  "key24": "2J9dteNjyThHw65WXPxrapEFjXEyNgG9MrSNwh5txq2AWtqzxzhQHLo49JuK568H4yEnVefAJ3BRPB8KigWWAHxk",
  "key25": "5GA6ioWAyXq7kNTTwow6AYeQcFGAgsAwYz6pVvfDm4BvzedzQN5ha9MQAsJsk3SPDWPj5Mziqg8vSSKzMeyvRQqx",
  "key26": "61cCaCGxdAQzFXmZygqtiBQ4pWo9JgDFBKN9ya32xpE9cGfd9wk21nXnwYdVp4r629KeJvffNXjBQbW1pmgTA49k",
  "key27": "4TPyMQkc6aCeELGZb6QyRyqS4LNMkCwczTi3FSMavu7iynkG7veqYrUiUvtgSDq6MzdQwk3RSq8PUti9ZMSty7ry",
  "key28": "4Z4Rg4Jkv8gtUJJtS3XFnLMipNYEXyHBND8FtrAaynd21kn2pr2pnSZeUuFKyDxStgvx2Xji2akAFk9Fo3UKNKTt",
  "key29": "4PYEyzoxbLNE9dcM8rVa96fncJ4Tw7Fup3UXra2tebfq42sChk8bPcVJdEMur5CuM4AKZLJCoHp2KnbQMRpXckqf",
  "key30": "iMurzQQZ6kuoYt4CuH679zV6zo9bknJsRWWvWmX8DpBJHyNyJCTbNyKmoZ3n5N6sFyQTHCwVb8AcDgFudjLr8uP",
  "key31": "2C1enVPh8hxeyf5A6jxhPuSskobUz4NqQUCohAFSP8pV6g6P9qgtxUt9j395YbzwdZwAoBfVv1oDQ6vFAN9f8DCL",
  "key32": "pENGfTXiB7YnCjPJvz9zeZxkdRJpEJaDDwBDr3HCvUNaw3ePvpDVrjJYTLvh5c38K1GFCX7p2TwFc1Ko8voLiYS",
  "key33": "4X1VB7KtAuk22NS87nHRkpiYSradcD9hEwkTqeiZozs9MCuV39poKqmS9eCE2RqFLSqySfths3Z9JoT5vGJUggm",
  "key34": "4F35fhrUFmQGsTWjpLF63RmpU9i9wUtK2cSW5Su6ENL1JRxVKqmaqAZ2Nviqj8gzKTzcvRK2R9Dn8kNPYBrSQV3U",
  "key35": "4rVon6aMDN9MPVo2wTw7FDiU4wJ3G1wvgzEHc6pFDZpvWwwp2eM4TRa299ZkN31ZTpNp3QJ6BFwx8QD36mkbcHfs",
  "key36": "5KUEgZBR2hywc4RaxjX46TGmJ5XNUSh9ABof27iTZxWEkS5eGMB4d7yvn4ve8SKfjC4DVXrG6oSmJDtdZUbTBcCA",
  "key37": "4pTY3omzNGYt9xoSJXLiAPbJM6XndLnAqJJdQvuM2Bus4kfDyXLSNiEnjzZwQEdmGUQjsJDYYgUrfj4o7Xpcwpay",
  "key38": "5qSAoDEwzfJqFTUWpwhyBk8LERrLDUdKjFEUpeSjUagwT2Kav2zvJfpDpyGqugchvX8stZe1ZxCxmrY1V6XK4LFb",
  "key39": "2QKFggViGwgXugUknP7Th33VXZcgmSA7AkF5YBfBidjvm5pfqZYSfzPXchkRCSKTcFtfUAE3WQtonyfayQaQMfHb",
  "key40": "2dnBg8uiZ3fwodad8DtjJD3NhCgor7GwDgST2ooohjRu1fVTHkJMzSCYC3vSgaGCi75qcvCT3Tdb7XR3ZHiADAGg",
  "key41": "2ae7eLjdXG7ogkJJ4yp9peBBV16TMP9nSWFcVxNchvXo3pVBxuA8afNjoeMnihSQwzsXxcWSLNQ9JfcZSUGdbyQo",
  "key42": "5wkmvr5cSP2TEw1BQgNddqpTwcePUDQN2uYpL6wJYXW7oqBLB4wvFA8HoMj2Nc5AUaR8Y1gUPeUJeVgTKko2wwLb"
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
