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
    "2UXFiBZzXH23c1UJ8ezjtUoWHUVp73V9Qifi6gEB6sJmqUkEc3iAhGcWCcZD61vYf4Yk6iRBSXf1LV8B1SaYAkTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJfVchGSGJz4R2br44kNXHi1qQpF48NsQ4TEG5FKV8hkc8uHLKmRdRKGWFZcn9iRwYT62pM5L8Kpk9x8Jv73hpN",
  "key1": "567bEabY9bxEEKCtPyUAHJA7vvmvfxVNCQgBH1ESYo3Mvoogvoq7EkgkmLo68BtiMyNhGGTuyPy6L3EGQ4APeaZU",
  "key2": "RjXGNohNL4X8vwowmPRnSqMmYEPtCnTDzMPcFPwrtB6Dy9sho7TSsSMwCCGyCbn7U1iJfmzJRfegRybNsf6QPFe",
  "key3": "4kkHAvXdiDMAhjdPgXED4xQgaFdW28wBDwwxPioDR1eeSLNe8x6WpPPyLSrnCn1TpHuJ238MpjQjovwPrD5txNem",
  "key4": "zezZmd6AAP4HhkjwNvvihgCkShEQXwDRvwxjfiZvwZ8EwBFZrT445iXMXMdb3ctMtCcskRC182Yg2RZ4Q1U5w9g",
  "key5": "jhZuJqP72RUYiXSSqexbU9g47XW4eJkM3ZL39LEbKeBxFa8pFHFHTp4q9YLtv6LKBCnLinQb1pRfThygsACfXsQ",
  "key6": "2AG1CEbg5ntgscoEtBNiNSGNZ1Mqppm3abHBJXoHKFvA12gJNqs5LtzQtvEZkLioJJKzKD22GNeVCqSoUfCHXL6F",
  "key7": "22PuTYdNKg76vrv8UvGsu7X3ZMY7yhpL43CmdhahvSUve2qzxKpfjfxpd4zo51FrmxsHmX6hVC1gzmbyx4Ao9Tqh",
  "key8": "rVcU89KM65uwWNZnAM6UU6s928hy18UKxiUSs5bNfvQWTc8Ec7PH7HfQFkk7er9o5PdWea3RURcy5f4Rw4dofeh",
  "key9": "3HWt94HZRqJYu22zgTrg36B9q6JoFDpwgDQbp4NKjGnXd8NeeVQgJzDpJYTvhFs4GR76Mrah3MKFJ5Xmwo9mJuhN",
  "key10": "2ur8ELjRJaeD79FjsTSj59N2G37hSKjRTnu79Y7foAtwPnMqZ3PUCn3ok358VAYssKEffaGKuGgKJVEvPKpontE6",
  "key11": "n9A3CpkFk1YwPyZR96qXok1xXQxMVqyeAJE5M3yp1qaDwMxDtf3eUfEWRqk91WG6T7pTm9fNYYzQbXQNRBjMTXd",
  "key12": "5vShQHvWuT53e7amCHqreahoXAK3XRVAX9t3EKoVm7hQuTLPYektzWJuG2yxjvxLb3Dm6rcWzkMFu4fauWGHr4Un",
  "key13": "3eKLFfRbU6bdVg1AJVfesUYgQeA6ziAw8GWKarZkH1eAAA5zPUHXnzFk7wPdy9MuQnewaD3Y4PuC1Hg2UKyeroSB",
  "key14": "2hPsm8bjKVr8cMnM66wkETikggoMC2MqoFUbwPK7RqTnzrKp9b1N6NMgqmDprQ6DHuvu8ZPVcjiVYaUQ87SohaNv",
  "key15": "2WSAGgk9o3Avu4T4mDAj1tzxiXhU6TV5hrCzUTCrCynV8QvVBDUxiQfv4GHdw5rmQ5KvBaRBZSaceUqAXvJE6AxF",
  "key16": "4bRdQAwGVmzd8NvhPpKjenh3kT4efVkyXSwRWNexpTbAyCBELbzsVfvBAk8UwoQ9oPhNJeb8x7iKJHSdKrmeocsU",
  "key17": "4PmbMoBEbvopaehqSguzJNUk1JDiToEQpCejB3GQ5sFd6hRxmyfY5XLEYV9Shax6mLXoq4UrpwxZSxZTV4hLKz5Y",
  "key18": "44w5q72HrFGUa56NzDbnbUqAfzRqtJjwhHLLHPzAfe3voMrTUnvtUvMkqeXSAHPPCVNTmH9YXD1VC2LKznhU5VoB",
  "key19": "3VjuwhZBik8D6mtS3DkBBgqV2y5y8rRwEquksgAJE2pBmy5neBucxQvKTEYSxwoH83PuS2PWf9YwKdDaLrDbdxCM",
  "key20": "4u7zgj46PZmgbBjAaZaBq2R5U1qdgX9E8FPJcFXroZGVWfq4g6UECCYn1QPCvvH8rtRwkfbynufWGnQmLdHiqy4s",
  "key21": "hRQrHybgcHdj6o3ZxMq666HvriQ4JESg23uRv2ZeYY7auf84vEWxWXJ3BBSLrxzEH8y9S8AqSskzfYkeBgJB7Cm",
  "key22": "588AFkYhZjarJJYy8pGsoGWKHpKN4BS8Zgoabnx4PCF7Lb1jquskop8DhN9v2jZ1LthumtKToFXany1cPNSkAyxd",
  "key23": "3iNGXLRDi8T7nDFtUtpJu59KkmkkZ4d7ELEqs3TBhzroy7MFrYr79mvddFCPdUFPEQSYH4YqQUgBaf5KiNXx4wqB",
  "key24": "2bGouL7jNnxGeZf7j6JcXnRrVYkjppBsdjMrAG41Xd82fqNpWLqEBAnpCBcHDzyYWcuVkTgtiTCU6KqEUUeTDYDH",
  "key25": "4PNQBov9ciAsRkWuzkQyneTeupZqqVPjsk3Se2d2Q44Ud8DdcrD3T7jk19i2keMZX26F68khB88JBJMcc5sXHot1",
  "key26": "4m7LWrpbkHcMr2wP1uEtunT8jCfi9d8GAcFuTjR1KnqENCtHYHPWgX1GKE9R2y3AKQjcmUTatqtLStm8pfKm847y",
  "key27": "21uH61LPr5V7ALn3fCi7Nnr2QZxnMPWKSQvyw6VxJJzg2yShLoHktgxcCn4RAyd1ra2UTxPaRV8r64n9rkwCwNwp",
  "key28": "47Q9Si2yqpvrssC91DcVAMr9XHoThrSf5qUAfkUbP4u8V9ocymhEAVGihyyyF51RAP5sPkRiWdyAaF7V91ioVKUj"
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
