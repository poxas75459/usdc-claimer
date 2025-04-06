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
    "2RnBk2z17ghBPKYp2hbfMsEaKQXKi6PQoNALqGKFxuAxcSF2ZdabEZU35Ko1DPs9URJJvSAPDNJ62YHQDF5aPUAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKpxWQsRjAFRB2behUnFBhZbPSRe4Ja3apq3FJX1GkGMBigGoJPpySYruGUsLAhAhU8tkxJD1HzoqHDjLcTgMaN",
  "key1": "43uyDJzRvKVERMURkgsZGHx1VAobFhpVHpGy8LWZredn7JesPQK5dVCj6ZehEdF9xp3yVVkDUJWuVrjmrYHrE4wu",
  "key2": "517dvAoY6t2LKi2T3HX7gXiANk7SjF3t4yvgEpbZNGiwwYrUXE9seANzwGJu4j1Cv1QNmCMsb49hJtPbyo4cSivT",
  "key3": "32U6HmkJTCyvgbRgoNJK5aNQRhkzwfV9jqufLhc9fda6H13i97769LXqJ6N38KcorrixARP5H4NUgf8rhjB1XwLC",
  "key4": "54hwLco2r1CaTLviYAqF2mLHBJB6X2kGpDV1f98yZbLtgGqHweMxySja4tANQ3YjXS1qooqd2o1jaSkCCzCX2RLy",
  "key5": "4XFBAjPVvpS6jdYXgwBsBcj4uorxMXwt9jb54Pjp7kgGRzxTf3VAERnmPTRoGziCiECjiwFUVN4pnFHuyfccpMQJ",
  "key6": "8P9rZYRXpozo74eTJqgXcX7c98YgebMj5CKD5kxnz5v7o48UpANpGajvzJLVzDh8nvB9XcA3aNU2exV6Kf7VTLb",
  "key7": "3PRdxAuHWqQd4eG1h9811qZk58yUBRWgn2CG6yUd4XPiAFF26ku4ftqumDZpiU4Q6VmYxs1GmiJ4FrZwCHwUSjeX",
  "key8": "qBZmqHGDPhauDhyAiL3q236uwKuZDwnh9vbEGtdedZwMuLP4pZN4BZzKzN6fAFMXjvsrp7fYMmXaW3JCP5zW3rq",
  "key9": "34pM1NBUVQAxJeTWiRFcyffQ7JSroCizQa3GEa7xq3i26TzhF4nzytwTbbNb4YYfC1BGzdSBqCgGvqEGBKog4uVT",
  "key10": "2rBkH1dEmqKcbKMny69VEVKtDqBibAyZ5KYjQyjN9wtFAMyvDe5CnCUsXMToNSuxpaNmVYVh2qa66uLvf5J9WZuN",
  "key11": "66oJQ46NpbDi3pvz8tL8hBt3Hb67t2KdboyAyWqoNuDZtc88YTYwy1K842riRhwkRjwwp9jEbzW4ADxN9QTysTqV",
  "key12": "XCB9QisnzYUjAaGsfJrGBibhjPn1qsnd4DCisetf9ccjEcLFKkBN4emC2PyPkBui9vN1JE6NvBAyJ7RbFACKPPs",
  "key13": "aeHuo27WZZYXnAhxEt6cRoiJD5FYcifjWSWgMUVeKKePvoJXf9uQZ82L7c4KrU9QYzubuQukDZTjkAgLsVGWCCc",
  "key14": "4CGUMqP4cRu99PeYZU1LoJtbqmcwLk4SQyzRPupigGsA3bMb1JGkMk2cjS5iuNASxcVLXH1YsmZpdBXbaLSNnFRM",
  "key15": "3dhdxsc1V25D4i2DvS4oWEGSVZ6vH32pNk7B68eC5k1FM9DTkuRpbRNM5aA2p1e5SYSRndPzUdR4s9Dwwi4xXLA9",
  "key16": "5qty3dKkR4Nmic1Mne1c4W6qtay89MU56g6LkXtG5DMBq4TqfbmQQEJgxYRhzpkJ2QUkyfe2KiQpobRXDWaWxnXt",
  "key17": "2MYEPMbJfDqmgqThUyQd6bv7v9f392t2mEBracrQ1SFDkLet9kK8DaKdHSrCsoU1WF2ZFgdJmjyL4yxFW77QCFjM",
  "key18": "2CXpej1QzkgXWKMNTW9WR7v8HqsskYikGP3Qzpo1ut3uwhMcU4W6UxNLcFXA5UDUCSQRwFQ3hcj4Rjw521qD6wpn",
  "key19": "35DLRmZmLbDi97PWZQoMZU8tQMmJ1H3y6TwVtLx4hyJEbTENw734FN69nMuqoJCJpNM7Kp38wm1qfqH469Dcjvoz",
  "key20": "5yyHiSovHMPfBXT2igSWebSWZRiAGzHbuq1FufrYyqB9dgFm7VXtuxmW98Dc9wr2wXemQhB79uoaWUUKV7w8ytYk",
  "key21": "5iH6UHUUHibQiGCJEZvLCm8TZaGhXBBERMF8QZUQ5GtQ7VmSkPYoMPwm5W448Linivam4xEhq56Suj7W9xzn64tU",
  "key22": "4JjRYHH4YqfPTPCbJGJBVkzJC9TwZc1ef5pUsKJVEk8QpBBu4TLQnWPBut9hTVseKERLeVEvgqo14i3TYUSV6VWa",
  "key23": "49amxaqsGTVBToZxb4F6cBnq4vTbgdZS4Movtgf2V2kGdrmSncXvt23vmwxygphEsH1ANz8SaG3zGT5Xcp2oYL77",
  "key24": "39HYEq6av1XWbv5L2fZVfogdzQuR7FQi15N1QnETRF728AAnQGG5VqviNqNeihSJo1PxUSFmExr9WhiibxoVA7Gm",
  "key25": "5yWNDpU2oDdfbWUgqbVQzYGPzda1VMc92v7bfpSuzWHm8gNdqkKy1pDmCUJWbL4scGbrigQB8LXUDsk97Sc9kMMF"
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
