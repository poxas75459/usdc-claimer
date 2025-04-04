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
    "35QBti73WA7WA7z5oY4pkkVxF9XNr8zSePnzCgDUbzww1gXRbpbuxehJdhAtyCmU7NDMx8CreZRpm5YxfqqeZu47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVGJ1w3sV8peyFrHZpbQtarmPodaGMa2h6Ah5XrHokg21NEKoubMYanpRD2bJckdwunSV8JhWknLDVWJZ365BiR",
  "key1": "3St5DQoCL7sqXX5NtmGX7LoWfB24cLWiHvAYGtpgcLpDn2oPwPNTaZCotEs6b2wLKXQeAsDz1rNiSpvjyZQnYumg",
  "key2": "21BXDwhAM5LUe5DxhW9wRZKRPAT9sMTKrz3GSbNL35QcAvRfQWYs4Yn3ymHnNNZoXHFLx3L6v4Yd7tVpGc3VJyEE",
  "key3": "23jU3r1mZQ3wAF7DEGTLYXJWLQo8Urkhyj3ut3PHTD5kncXttsqGXC6qib6Hb7J5oWA1ChbEdo9uQDaWavfQ5xyp",
  "key4": "5pPsUpp3f9XotyJ8K12Fx9UsR1gbMgdxeDmobwFmJjXZJspKfK2qksQ6DzuJciGXYZxWXUJu3xCpbbqr5xqZbuW6",
  "key5": "65b3iUG5xKPF7iaDVxEAhaduJaHWjwpJgQeT4NE1K3gZTKpSjYoDwnCmHptLLvucTMy79h2fRm88MWoQN5E436Kd",
  "key6": "46CdFe3zwrzdVMKkz6Xud1ShVo4WxQjURyvXaeFx5EJgeh1vwLgVScCYNdc87JynutFbxXPedniHET1VuJcW5t4d",
  "key7": "627Su4V5GhHqvWWQuvYLMmqstDztnsuPwPsmMCJ3x4utXjze81eThWeFcTJ6Qwm61SU9b2KCh1PbjJbm8YmgyBRR",
  "key8": "2N8pAduLrZkVGW1GiDNAQHpYjnuC8TuLvgWNnjvV18D56WFSGyxdMhETZ6fQVQHGXDjpJ8yTxWMUTfM8Bxtcwnae",
  "key9": "dB8A3GJ4drsM8KB56wvpi8a4MUnyp27XfrUg1LJC7ZDEGhuXcDH1CVxUXaG1MGXMbihi5WyCHzDwTdkiNpUFfcG",
  "key10": "3psqK2WWKxmCq1R8NCX1JhLADkzLvifgPBaKwko7v6yemAshANBB6dJs3EvcBTWnmjBLKirV8hWcM28b5a4EYTnv",
  "key11": "4f3EkzPj4zBs8KXuTPiKjp8CGMSTNGsHnfEkQQSkf7j3wU6r58kmoGY94RbXY1QxrUbzG7LduHqwkWoaWyV76Vh6",
  "key12": "5M7G1ppLPAQ1k6T5LAk71D677QMLDALL1w81JEVgz3VqWHqfmGkX7WrAiVXirRVbde3qCKshcEnXtHTRaJM2rEQg",
  "key13": "4ALhC4bqEUv8245eqL45KoEhZeaQ9nNFUChCezPFMjmoNqdcGw7n4YiwUMDbivNxYEaWNRRrp2w2ySh37mcHnrQq",
  "key14": "4seouYn4aRmZdamgngAwjXnBGi3psrrHMFr2iB1EujHA6MC6TWhWb4PLCT8F1MqtLVZH97SyZjjAadgJB9PfXVAL",
  "key15": "426kAmkotZKwXWXs5Px9x19aT8vUKNuLCy8Qm8dGfKompvsBdquQEgLK3HHrqGxCCzmW6SquDCjcpsZcmtHoVtj",
  "key16": "3tLLCrbmkcRRPfPMLti8KJu8CVkfwS97WZ3RGJdn2geVenqrbaBW8BxCWtFV8VUnuhf1DHzjvEtg9jPQMxgEouD5",
  "key17": "2zqEdWU2Lz9m62aSeLHBPjxsgpbcbeDkfkkyvpDg42SqBEcEK8gVNFfV384vsnsrqFT31tygk51yKC55GVVxUARq",
  "key18": "2WYGjCRCu2B9eFcGbrif5zHka1cBSPYfWEtUSpG4fFVF6w7yw4MLXJh2rVqAdkZ6jA16xYJ8rS2P2VnHrQYhKxCm",
  "key19": "57Pv3LVkSqYb8XhPodWNsmH48qSVQsAZwQYjjzwLo28BgCEAU9Nd5oZMoT39myTkMZLHYe8LUpaGj459NXDdoTZi",
  "key20": "2ULkQtoJPpYnAgrmhrBLJEm91BrF1yYMsquQ76nfNKbiyMud3wiFgp4SxJBdX9GKXJyK5fFe3AgmBUqm5T6UxKn2",
  "key21": "3YP9migg6g7MgYGVnb1YQ2BFzTaEFyv6SxyTbF2J2F58VsKkAox6dQs7rcBVv52g2QzeE4L2QM1VZhRX8RQJ9Uq2",
  "key22": "4mE6hoFivpdpwdaQxSS4PbbdknRKe3JKgXBaiQ2uDmcZ2sPXWpqMzve1PMXYevXjzg1Bfi9SPhdcH383PoyvonNc",
  "key23": "476i6DaatN86HXZ3NJ2Eg5MvMKktBb4CQhUy2sXvLcp1M8pdyD15XbvpdSGLk7iDb1e24gYJRmeBRHHZVXu5FWWP",
  "key24": "61KZrAmcJJppYWUrbFzSJCBVJst1zCXLdruA2yPHJ1VWJh8zCHUEKL3MDvBWKzmNchhXaNZaWvR5YehtreKUHPh4",
  "key25": "4KTjEH1yaN3L8axxSsCbi8Ur12d3zL2dr5osa4DMEzLfQYgmsKvcLp3pJZNyfS46A6z4ZdQfoxVsMc669UA3cEGL",
  "key26": "661UVTU9fTCTDg6GBKHPuY1bEnpBtJRkoRMczF7c2mmsn1ZmNnMCmVwAhyeBFKPgrNyeACfjSPDhxwkS12vQfFfz",
  "key27": "2XAYN7jhVHQ3MmL4eJWXUUV954YrucEBM9fuUPeNhJzxMbXG8kywR89CW8Rm2RoRpTVGPAWfVyfKWHa7Ymr5FAqh"
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
