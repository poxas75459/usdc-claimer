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
    "WogMwPQ2pxXj7pLCitzRyb5YynzFmm1gWXrDRWhzNTCWUrbPHP3GwbeEUr9Uqhv6tmPw34jDru7AQKUuQqCKZZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozdgHVjK1HQZ8cEGT6Dp3XP3wzbbDivBpFBXFuNpR41Aq7R8fzkxr8nXTDSUHJSJpEVVWgCdrYgUbnoG3bDU9B1",
  "key1": "CcjGQ6FgE5WcX1gWmL7YPjtXgKn1JNxA5tR6Xx2Ts5jDrB1Bjct5RT9t4kJaYkm5Aqy9fgqM8QmPhYAi5r3jabT",
  "key2": "3P5occgua4NWcY8QQ6uzzTnUo631esCHQV29Ryu55MFfjFhtNmCxvNpEU6VVAicQL4ZEHzvAxkKLKQ4f7TMSBEvP",
  "key3": "4L93eG32JDWig2QMkBqUXD7xdKtGa7kz1fLmN9RtwxdfZinWg6tRPZ88L7LrBgz95mog9h2MWHokREn7R51Xa934",
  "key4": "3HDW4Sk7DjntW5FE2T32rjboBrenLGKTm882CLes45TA9fR2vVNe1P2TLzcGaD8MviiJjzPWvGTPbYptube8Nse6",
  "key5": "3E61q2rvHfqGGRDrrQ9RMTWGpWX2citiesc2CTVPc8ULNPn3ckSycLmqKx5PfasscBivT3FT4k1acABwpz5RjXFx",
  "key6": "3G9HhgRf5Up6bNDBWH6Y5Rfnu2qeubZYLqp9UKj7KL8gzE1AyjYN5cTU2j8vEiiUQpiuZyPctLSgchEsZzX8mLzp",
  "key7": "5Sffpm39DjAk4EqKy5UV7ePGxYZ7oU6Ar3nKSH9cvekw4EZyCKGuSGDdpavPLw4CC6RQhz9J55jCUh5UwmBoZv9Y",
  "key8": "2sTvbq9v4Nwafb3wiB4No3927iHj9h6H3eKorz8h58wWGmHzjm5jh65HQgu7P128JiomVpVft8WRL1kXTWCb8fXB",
  "key9": "9REw5gFRpMrGFip7CDKNQYg2uYy3WuNkpVu19d6u7kYpc636NxxiUfBZJuAAoyjnfgK7rKGuvAT8GoeokWSAqNz",
  "key10": "3zPHVBPXMTwXr2FsRsMxrStXwYUd4VWE464LsnPAK5WshatcJ6jWieZm4uVSgvhNvSifDXVjPj3dAmvpgTCCD4Qh",
  "key11": "4913VcJ7HsMNPAWtBf6tcWu29x7wVsEViojganyB29PQbQpwYZoM67xy2UnjS1AirzSHf2FhkfJKpizVPMLi9BHz",
  "key12": "5scHR5KLHir87aRijSSivkaJKxm2VWoyPrLtbmgef1X6n2LSCJjqhXWqzj2PwkxSGVmZhx5or12fK95jgbrZgDx7",
  "key13": "z6trRy1pN4VBiXLTDCgo9P5bb9rXuYqzMEe8MjBsPbyzH6gfGduLUtLSmoJ2eo1UfWeP2wjXfcucHax36G14txf",
  "key14": "5EJmTZnyNZAjKF1g5svf8PNSNGFeQmiYrybChbeVHsYPFSmnMEJ2CdosBFtbeYMy415f1rouf9evi67A2Zq8h4bE",
  "key15": "jPFNWnQCiaWmqXmSqxVjTLGmbRJfTbtygsbCtiLDyFjUAaseHZsbvinRBYY3mGYPvXP6YKWEhuqQf5s3ChJVyMP",
  "key16": "2psUQiBXza9mfxYLSS5ed8Dc34nEjWS6VCq6hm3fd6CR8nXvvWxpU6QbZrGha6ppqneyi19kzv7CWxARciL6QT1B",
  "key17": "2amBMMF7Zk9mqJ7inmZu9PVgjdydydRAKTtYg73CMmXmvpMsxQzvbMJTiEQyXZ8VBZWRH8fjdPsAAE2kL4CJegSN",
  "key18": "21KzsRKPd4FbrSzJ5A4erduxfGu8tDuJHMH9Nj7x2442xoNtGDEUs8H52QnFBnKeLHF3yJ57za3ZFaEKZgWGk6D1",
  "key19": "4UAE3Fbcde1Sw8wYQPmexibPwyFwJymVzG3h3YkDuZXh8o8s8PYHVLXXfSUVPN6DWViYWrDxpGMySEQKMMvGuogZ",
  "key20": "3CSA4RsRdxEswgqvNuBDr5JXPisKrmrXvktLrAtZuVqCmCmJgZ5ujpA1cty1JHVag3JZBr2fh8wkY9iyguoxZfL7",
  "key21": "3HNeWjZTXxmyAitABFGk8JZ5uBVitn4XRYSPF3CMygDaYAQFyeNEGjrgXncoVhkPViTmcLMvML4zKYKmvcsABiMA",
  "key22": "2nqmmT1ridY1wXXWLdFYjoebJHEZeHcRrLtW3unjpuxmD71BtzhYyTaMuqMbJUzS5KJmgWdESBHVhdWnQKkVXzpA",
  "key23": "31D1h3HzHaEk2aEfzVpcSQCY9gBDLcuz8MFNcGjTkgQ8pieRA5xtKH4LzpXb5ntiPbDa4xb8qjoM7z5tidmtTddQ",
  "key24": "4ZVnrkz5XKxWjm8j4X72QK9Ky9UiLjtTbD2FhQK2Xb83NoRvJn5iE3X9KnEpTte4zmghqTRZtucXrvMsQaxza8ke",
  "key25": "4q8FbsB175pSG8uBX6hZ2uJ3uN7zsfRVY7TpCBdwDkX8HgDADFBJMGAAJeGQzqVq29FMY1TE7h3jwMwcp4o4Mbnz",
  "key26": "61hTbxiBbFKFEvK6jkJXCzP4aACx1Yob8dhNGgSkA2LrtsNnW5knzw58CNd159XCmKjbaWgMqKfe4VQNfjGtbuPm",
  "key27": "4VwB2qtDNGH15fCm8mAjAxDZqw9irsWXNx1dBPUA7rGzEB7bgo4aDWepXXaTsc7wuEyViJnWMVeBhN5yAokJXnPn",
  "key28": "5PSLRcsk1t86u3GJoe3i2NwD3WPgTwx4KT3wjoNKd6TtKT9wUDuUMATqCx45brHHwUuHGcne2efeCzowd6Ya6ZmP",
  "key29": "4JkahFCe1pHvfsdaYm9wnYXMjdhs11cTChSFJ2Y7S5PcwcaYxiw2MEWKQhGKQ1S2DXf8gmWsP8TbDMAtKi3TDUvp",
  "key30": "V6ip9q5VakkRB9c64wPBdyLasJMjRDpsnEu8hEMfXYGr8BMNWFaMCoKkZUsop5GiMhChKnxa3jsMWbcvWsH4F6F",
  "key31": "46Jzf5W6vEiSrehxaem9nAxCXsg4iuw1FecR9SeF2r621uczziFqZoZbzbU9CLDVyDUAJBecs1pGxGPUvetsCUat",
  "key32": "5VuuHPQnVJ2ch2D6mC7aLs69kVeaQABYgfwTUfSufVXhRtq6hgm9AkzZv7QGQRjFGoe7RrSjrChbjmb9Pcft8DAC",
  "key33": "5aH5Mzbz1dnqqVvWcYuna8jQLpDUL4PZkiz22BiravnLjKTXw5f5kJgCgZRb5bUPVxJMu3MbHTw4VGhvgY69mJEn",
  "key34": "3nsqiV4iBkDBUC22u2R39P3TKEUbzNUY9rzae8H9GEJL46RTfhxAjUrX26XFXAgY9L5ZkixEfYRFjBNYGDTPMDcX",
  "key35": "3wyfATEYAvjtpPm8DG2BSrbdTgLortHCmfVZYAautexSMmSeWxfutgG1F6xhMy5X1x8wpSC57MpNZodDXEcHaupj",
  "key36": "4kkG7ZpV99PNLGhGYc5t8fnwNWyUNK25AgWXfqMQdmuSmAvk5Jxz6baTGuFz71xEEWN6iYm5HjqPscwdaK81p8eu",
  "key37": "31K9E1EjLumrQZUsY9XdwLJcrzuf8rwZqy8eWhVJdg6ExNTEp2JSmSm6rtBJmBUVT4ZhNyP5w9VvNWCzpu4RuWJg",
  "key38": "5MXNx8SnUpqKw9VtE1UbKAYfLcWuLSNM1VciYjUAfjDmDAQXqWY3jGwpGHiYsQBbcAMckHA1dyaDiu12RN5iTMVQ",
  "key39": "5TQfm1UPA2CV2R61u4oZXXpzTS2ezEVrC5Gq1tuyiHNA3Sx6HxkBcBnreYU2y3G8hWRcmdUTumbMN115Bk2swbhw",
  "key40": "5SkrVqN9UWowN2WuxjomEKgVwGsVya42HibdhufLFWQRzJcRiCRXHb5bpKAjUQ9w1CGKPTWLDNS7Xs6sz6wwcH8B"
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
