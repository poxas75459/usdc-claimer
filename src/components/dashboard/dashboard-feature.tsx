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
    "5P2L2GLFszhBWiLVAr5n4PyJXWceQ2FLFJtM7En9DVk5ZDB5QbDGgQ8NkfR3zhieYjKHNJ12wgkum5fF7B3zRtJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SCuQETdjbdqeFPyy7Bpk8fU1muWjvbm815HaRyxxtsz7aEnr6qUM79iSPQM6Emz7vKkSTfQpEUa7Vw5vde4oXQS",
  "key1": "8KwDZHK8iCXjduPEFfKQ8iMcoTgzgryFKGFckEomDurQ2zc4bV9Hj6L3EKs5XZhBGFyEW3nMsP5ivcWHo25gyUf",
  "key2": "eQzaCHFas6tfquZRS9N8JHZJXV5Gvu12bdw6Xrq4d4VtjDvVLTH9yx8t6P7KQMNPfZ7ybrwQGEJ4M1RUmUy7ejB",
  "key3": "32s8pdGTrEfm46fn6skC9NjBnTyr5QDayxya7uL9QhbtSsqAM8d2RGmTfLSFsS6VGWqwq6dKJaPJC2SKv4GbRjeX",
  "key4": "5MMhTUGMb7spGP1Mjw2uQcP3nJHWqRNyZmAFVovicQv5i73zxwyCTwA9du5Z9x5H1Wc9SxWunrLESYCvcbPkW8Da",
  "key5": "2B6z72HVMiYPwnGd1t4Q2sSn8kEXRm68ZfiSzmpyJDL2rcqdmHtgjThLehpJ5y7qHYD55qVKNmUiNvE9at2pRRex",
  "key6": "4tFhuMg4iJAXQrYXpWub2QSQhAcHfutj5t8CHobobs3PBXUb3qhK8QVdoNs1Z1YBmPjLhGjUNKbEjhWRdfeXxKFV",
  "key7": "5zKT7JvUVyETzehHAMhN7D6fqXbpZGidV3cdKoNAR2rxe1F27Sdi3bdF8vvk4s7k73tFsYqBQdToVa1Bp2AGEfEG",
  "key8": "3LfoFAk3LgnWQqpZC6zyR6YNkuTgjyemgFcfAdNbjV935pW6WFrhHN1eHwiBdPBpjnwWkFt4nMtvdPqPms55smfL",
  "key9": "d4XeeGoDMmxroRVpaNDy7n4zNBAf7NgCxP64DHaRi1JtJVGqRVP4kh1Dbmomjdj5kcALjLWBxNh8EnfHk8U6xQF",
  "key10": "4YKrQy3LsRYzHLVDH8qLgDhA97LLTTBJmcqwAYizpWjLL6QdiNhZ48NRadL1L8UfG5g9V8i6qvWY1cqGPJUNzam2",
  "key11": "4wHSCdPmrjXUC4ZK2NXEZ3EsUgzTLPFUtzPS2799P8TdmFgcKC5WDFbmt6gaQk86M9ktawVBNrpzusXc8LCHFSLF",
  "key12": "3rky6RsWWmxVAtThs8gXoatnzZqNR7SH6tBVaYBjg8cXrnqaLQ1hs1rhqre9Lr25Fyvaq7zZUNwvrJhuigahM59",
  "key13": "zRw5mCHcUELhhBbwjbqt74j2QCRRC2DdM7dXn1uya5DFBfqaep7sAsYCAba7B3tn3x44WzAJi9McdxZj83FJkzU",
  "key14": "2NuHUB2wrvtx1grZMyVFNcjuk8KTDmc2vfDNjmkV8tU3KMazb2FM5AFk6ZVfbRzT83v8CeM3XhUFQXUmiFLsm6mN",
  "key15": "2tDCuZhJ8XsajCesEMq3dNKWKQnyckhFzmnov97aZen1NKsdU5iuH2XpHt6QC8cwwCVfZmANm5ndH9JZuinbsyUo",
  "key16": "4iE2EjVTKpi7chNfUgRvDB6n1vR5VXQA6YTYZ7QZN9W2N5pKW8as3JrJvnnnnp87jUm6WhJVVcKiSRZ6Gz1Xs1Sq",
  "key17": "5m6XG34JpWRu29m3mWtVzPcsMn5U5mj6kVNe5uwu3XV6EJGjpgUiCFTfEtsZhPK2a2PspLxxGxYFkNLGD1BPXYJG",
  "key18": "N1bE4VfpxSreq6GxU7AVXZiuo5vNW7FQ6bReWpQtMmHvpZ5S52KSod77VzJpfYDRQCDad6qqnc9DcBjaZ9Wzxqe",
  "key19": "5fRiDh1DAjcayyk1mjf432efguExwiftB9aiwp4oZcsdDZhQXeAtzcWBoB8PrJ7XwRWvEASptSsqq9qgzMmd1uBD",
  "key20": "3Pg682LmvEzcKeWHFrjRZDEeEdynUFA2nv8s8AhHko6a2EcT3fxHWqAguKNisyAioc3EAngF5uHKabHNeTwki5yt",
  "key21": "JYcCeBjQC7LGLbazrQDd4tPfaN9JED8esrH7CwFYWaSumdP8VTgZw6ySLhfzgxFpHbPYJdPHPoEF12i3w9Ccqm7",
  "key22": "436ndDnbibhbjw4sfQVhN3h9Jju3Joo5DmZjYKTrurt77xY1V5iKvVvQgVtwPzLHm52g7gazRGL72eSQiLhxpeM8",
  "key23": "3Krh8tkj2wneAZbG24hbgHyNB6eqCetY1yv2NbXSugwxbcPe6Ctr6suKF1bNTK8iQgtUAhtYeKzMZrYUsEAA5Xjq",
  "key24": "XFJY1SWaZ1jjDMbHLEwEseW8J8P3YME5cKVK1q1E4h5TZHaPueJMtyoZn6DfY8t4XBc22j8t3V4ZkhGeVqZP9VT",
  "key25": "46B4cJDr93S6LWJoEa6WJ92iaiMPHpxpGSrfCKmjadeZJTB5WgQn7HHiRPFfHDwmPKsTAD4K5u1wQR1BbB9K9zBp",
  "key26": "5wAWcBsaG34JwTaumDScxSSSkPpTz9zoJFPLkjmiNoGHTuAU1Hg93PKe4Fv3qKpPbHZJTFqVpstt4h69an59E128",
  "key27": "3NTTSWw6kbM6Je6beD4KeDZqZ3HzR2DeXaVdwuK3ZzJU2FkbrrczadhJUqcoa2YYyr6WrraN1DRSV3mv4WcGWF7h",
  "key28": "2otq4prmWBnWR8wK9ApcFXGdkgET9kVBkyU2y9Ay46s9NY8N5uSwvap25AsYwHPxS7whAELJz1hZ6WJ6suvCMQDa",
  "key29": "2YGv29C7JcjQrqaQseHK8Ws1Twgm5EKfwEyGY2g8hXtEDVQ8UtQQoxzxNAF42jb3rp82Qoy5KtaHgvtkG67YARu3",
  "key30": "4HaX6SrQHybS21F13dvf2FsshLnGjqxG2NdkeixgyfUiDnYUsfHCoDJ9Dv41yCbvuZaYBC8Jrz6G8dpppiGdPPmT",
  "key31": "3PrGSovjsBinuvoA2VQBZE9VkqjNMpiqsFnp59ZFTwkyzVwkk35JeTpU6nUK4FrztvmvaHVW2onRqQXV25h5z8tF",
  "key32": "3q19WdVqEufQWm4WHhSSn4yNi4o1NNpdTLVC4H8FpbVQ4aF9qGPSofALxuYxgGFTLQ1qXouhwYFXRuLPkJ38U61",
  "key33": "tARLypBi8vSdi5739jVSo41dwWknwCLL6WoPWvNxijkY3VTe3Z4n2qrQsbbDWUrGZtH8h4tj3gHfuHDvYZkiUqB",
  "key34": "2w35fKjWLwiWgk6yaN6VZX2e1exNMqBfseav7XfN4h3TFnWPgFayhEhAooSL95kmdpCrLkTVKQhhoo3FPnXzadSL",
  "key35": "2Hrd6NyvDRQa6q2AuiXhJrBqYMD695M44KRkL5WyV5Td6ZfX5qwehWF1p8DXh9ENQCL1rPVJUqv2kscKY3ToPCAY",
  "key36": "fk5d19qm9neFTKozSSYk3kUgdtn8uuLyx6ozG3qH3NUx3JAQ9d91s5tf2VanVqyr1EcrAqu2F2HMNn2rjix35vV"
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
