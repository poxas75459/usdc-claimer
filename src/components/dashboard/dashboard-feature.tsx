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
    "5jGv9HxWyqdex8K68o1RqUt3RB2yXneaaXFQ4m3tGXSpjNGdkiCfdU5tavweZKnWYwkVNMfmWAwTFJfjb2HH5uj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4Ru1zio3EA1WkcsAULrc83KYoxsj6phmhNJPzmqQqNGkj7QUJ8c8g2uP8bHSFsbZRHpjppzvLXgQWQFuJW6crN",
  "key1": "4swAkGUEkQ2xxvQgMkgUYNDjuBiw7UsatP7Eug8NnekMoth9zHiHhiUuuA4wvHAZEWEfBky6vXiu8wbsdE3uGsL6",
  "key2": "3CUhu2JnoNsucxD7wmXzHRnt5GbV9p32znLkrbTp2LD6HqKcKiLQ8ZcFMjMVk3ZjfPT5FYXwsuYv6b8z2zwqkgic",
  "key3": "BDEHEo361TgyLGsfn82Cyfh6Av4SKj44mPtDPG2eGJfYdEDWMyDbsVDXS6F1z2X3AfqA9WjyrRPfP2KMEjTQtWc",
  "key4": "4mkrNTzui8wCyNs5mdy5CHTsR6NhYQNwjm1HjjKAKeq9QNY7GgcQHCQEL7PuG7eTjGcAiFsd8Ux1fhbARYR5xwmP",
  "key5": "5NxWJbiwyo6j253nwNG3fvp6XAqBvD5qSzGHa5P7oUBvZksZiJ4Sogrqg5LaHBFLxL539MJ9qJHZXKQW3sbdmuzt",
  "key6": "4x7LoE8xKH3XgNJd4nGnhi71PmVARQvzAvMeYwha2gK3kcPwncbobNBG8VtFjgZN76dZJMnY8jF4kk186nBPjRyJ",
  "key7": "avDfKQJazHhg6GGm4z7rdnKExBLDB3vAgCoN1tguao1VcCvxSQwbjBSqiv4Z8XCyahgnqpxAGmeupEzw2budveG",
  "key8": "3WwpvQdbio5i3mJHK4dMQoHMikpUzo4MZEPW17KFG4pFk4u7pqDnVugYHie8ybMUySFZwMVgLx7t7Eb8jC5CnMRn",
  "key9": "3EvEusQP2m9iP7muiF9mHr7eTFunGCEuFYsK2Vsy2BkkWNpoVDS2cw9s1JZ2kyjxhuFBNppHTVRqvHFiH6fCaQpZ",
  "key10": "61WHzM5CfayWNmF45htwCsKbxxdcRtD1zWBrhjqfjichwU2xmpuvXoNP4r2e8TWxabcDRjowzRN6tXVCWjC4sGg5",
  "key11": "4K8mM7upEYaoxdyZEe4yyFTDvVExyRgzeAx6bWmNjxYojei8hteGZccUVbaQ3mUxW1jrfsbfrPKBR5ZFSG5Bhw8u",
  "key12": "25DKejX4wgVx28FaijqG8J4Rfnu6DxxM6Q9rfp6oA5R3KeEecxuCkdjdhtb33PdhVmbkuGVQhsSWCmZpDPan5fEh",
  "key13": "5vUg6tEWciwxZ8DmrFX42RkruG5GvLNm48ptLBdFwkKnvP6DJvA3jiKz5acwx4tKac1UHsdUmxmpHXsPRN4GAYPY",
  "key14": "xt8yLF4iVcUtZ5iFhMoy6jUUmCfdE3hAPrnnKkN11FZ5y6HdnxvAW8eESFLejA2qnqiDNC44GNBGypREoSVWqC2",
  "key15": "4wKtSTiWmHiw5bK9hvJQPcifV74XDiFW3X8DS4xbDCdjDjqqcbEaNfPyEUpJgQ63TQpppJA8L8ZBuoXyik3rK2uC",
  "key16": "5echJa3ZQCMPjCAWKDoPeUieAoExzGx6zHixS933h56EF8U21WsE6K6jv9B16S7pSkDF6USoJTYhTR8QHMHQVWNQ",
  "key17": "37r8oThFwHHAw6xrdtrTA4wwbYgvW8zKfy6kQUTyTHhbz59SqLibftgExuqk3LXy5uEfGUpBoZyfQ8WpPBz9LtZX",
  "key18": "5aA7H43vAxbZqA1TvfeJjtCL3DSWkDpQdmKrk3KoZAXwpxS39X3jw5R7gzVfjkmsQtQrzQj7XYJmPNPAChbpdapF",
  "key19": "JvnWNCFT5CFugzJBKYn59ogqUMN1sY8isgdGjiMBSvDkZmGZL9KkoMkNCjVp4LQhjfwsLwujmTpowt8Gpf3EgM4",
  "key20": "67jPwiMASSgBW1ubqNqX3gFSHbY3uSSXfMkZK12mjSy8P67zDg8DivNZkzb3nsNoeYrYaQmhSFRVY9jTYZJSQY6a",
  "key21": "5CREHh6bpPUpTndVaLhJ9HzeXS4aN7uY42VpzMyADDCZBENH6npBFVd5511SRBjvB9pYMhYRmmTp7rCfjr7UNa1s",
  "key22": "3xPstYS5ajPAEyZs6K1maX9ixNTr7MSvJR9WuHU89xZd2LrJLESo1CYwKhicncSFJR6FaDEggAhX5D9RbBExgTvm",
  "key23": "5VnMekwZoaHuporbNFjeE3ccts85fQKEE3wGvX8yP8mnUnbGNKA4dzwq1Tj4dfFx1wrC6Fc4jXdXV2nME7ZTBbAA",
  "key24": "4VD6TFn8kBbDV5yqjDzeMNvnzsNiotLaHJwbJxM2EJzq3xbSCBQAE9BL3cM8UfvvwHscUTSbKPWJy9STPoNKjHbz",
  "key25": "4FA2ZcnPb1Q7T1QkEfsHUtAcj29q54bJvod5DKfxfkm33Xoq32ysMgqDA1gHEoHoH6fk2SN6DJbJrocrHPMES29N",
  "key26": "XBVqorJZyU8zQvPERk4M8Hh2ypvFXcvCaRXYSFDJiXHK2gcV7rysSXCRu9ZiZZPBpBxYyuBjwd1Q5Jct11RTyDy",
  "key27": "3xCa8uiWspj7EqrxjF82LF1bHAXdtQUqdkLbWW2VSkvQG6yRuWwZgqnEJwKFEXogtM1kjgCifH9yYgFEfytN1zUA",
  "key28": "4VkkYd1tNg491vufjFFtYnSv9Tj43J1G66BZS2f8pNrHinEDGroybHf9qMfTEEDyTRpfFHij2ZhCqw9wZjFndZLu",
  "key29": "swSLfh679kAjBYK6GZXztmeXXvEgNZ9wm88AyndSuL28sRv31qB2Sr5jXSJTDj23QZsP5JW9ftLSChnsnvT1H9N",
  "key30": "2aKjaFnVdpTR2wSaSpRH89ebcNhr1XJzDyjahdbdkDpVWEZmbr1mtsScifdLjxJp3obDSLqjQqt6UhVuKBFxv7SN",
  "key31": "5mUBfLQq8x1h3k8QN22w2zsAMRGuWHBZw96C1hrQw6iVe6Ng5xJV1smjjMAqUBcGoSCXZcsDdLd56pYeqrF6z1C2",
  "key32": "44KX4XVwc3yr4stZwfdFEqBfVsP3ruP3RxHZY7cwxmTp4jgUDcGXzbPkQiaHKyHTJJ8rpbCJHEyApRtiXb6hC8av",
  "key33": "JKdguFtWTMkLPJbHMwE6GA2yPAVvFJooajBDtbFhppRoTDxn1dq8i9whHSwMZBENqvbZBXFKdSs6p3kVJPJbFE1",
  "key34": "5iJNWgiVRoCXwDG9oiE1Qi2p9TxbXCqECqTq2co55aL5wYv6vPMutueXHA1h1159fu4vMKKh84LiYXqNS4npsbpq",
  "key35": "34QCKrYEqSjhsV6KG9tzTjHgkijC9N9HnpYGqSmqcitExuzffMuHuGv8GqsoUX66nmDnvr6p2xsoHygJ9pF2E5np",
  "key36": "4nE21vjB2Qoe1amFJLHQz9BgbfAodBkKQ5kFWURwWEVNKDzVNmhRvRF5j2JZJXfXDcnykXVhzoa978zVduimD16t",
  "key37": "5RE4HKLbu6hrhAjHRL73V4rcghcoZLQ9F9A3YvXk9x5XvhxKA2tdnmSQouPzaFGCXmbRRWhrM44gM4h4EqtDBPje",
  "key38": "3xhhSTSU3TAm35rJ7f2Ru3VZUJoAxtbePC4b1sakfixP1yWBE1SYUMuYLFhjYhrcC8vkyFi3F9y3h9J3C5FLYXMD",
  "key39": "4pDK8VPv3bUQbkLM6tdoAyEE1CZhdSRjK8Lt5FKKSKMidRVSCEBbpcq2FqX1tcgNQXpuHGikcR64CcFCqNx1mbo5",
  "key40": "5xhYJCgBGavQWrDavJxv1PJXWCuk2WGaKCTUjU7t4Midzi2c9FS3Kx54TiBSmzUqPdPw9Ti39Qgcd96f7x3BsVz2",
  "key41": "5M1dYwRGvcz3ArPuk5QT1WJbXu9i7Q7sbv7cW7Zb8YKdZ51UZ9XX34oPjgjJ7kCf88BN1v6AwqL2JJKyYjyPNAMP",
  "key42": "3LBJLjUG22qcEU9736a77oxNzhU6cjLFzkpM6a2DFh9bRX1BWhTfZ7KbePwLq17BjpDzcrRESvpuMMjKaE9RJaAb",
  "key43": "4HFMvwGu9SVHbviyq4mm7smUE2yrzH7oG8gSggbwi34dTVqBEZLfKLpcCrjoXj6rueUiasevNMWikzZts7yJh85M",
  "key44": "4naDbpEAQe3vF9XRmWqTT7dqQb1pzz3nYgaidRUMavw4KJBYHnDU2U5BEQqJxBpPVerGG5BmX4tsNmMV6mocY8w2",
  "key45": "2GUwuBPQy7sDMoCEjPy68b3reribh9QwB2DvA9ap5DgwafW3rDcW7jiWFwM3mar5mLa5RSBMKLJsnLVj5ZyZ2voC"
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
