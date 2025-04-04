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
    "3Pwzz3bBRBg7XjDGgNDU6CpktWTQrR7444AsbVWXQDtXf4uX25h83KGuXWuM82ZwzrWEWMtCiwGtKnbD5DtyjwWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwQr1gXDMJrfDkfWYeVxzzwnB1ckSaq5cD5BcduSDzxBqAVMwHTSwJrWVJ1ojCKU8CLCqMh3gf4UVLSWUTY7SeJ",
  "key1": "3pz89xaEU9QnpcoSRM5w5F8DcDPYEMMyuQBMW6UCKoBnqsBLgszhGbcXRb9JXdfewSHpEaj7hcgJ2XjkYnkrWiTc",
  "key2": "3hN1Rd1ERJdrUHBZbjd9Qq7CmV31vs6DLYvicPYvt6ajFJZy6QNQQ9gVxT4BqpAh36A12RNErXtMnZ9GmZtfCFM4",
  "key3": "3KxomjuZ4QxH67EAjvSHew6n8ZUvV4xz8SCgmDjdcnSrfbDLL5LboUAzh83PqWwQAzujzLUzQaTc38hFeRcfW7os",
  "key4": "6HpbxZvh9hwxQgngEiLyA9jb57eTKHA7BEPbpUZe9okNbF7UtrET1cbw8k8qMBfKRMs8iaBFf1kFupUY4cR2eUD",
  "key5": "4nxJNa2Lpwa4KS271Nhpxcd3ER99m1pBaYQJZZVafSANPZoSsd6SDSoHYdu1xKLFSEyTe8RmD7VAcjevxRPZnubg",
  "key6": "2peLDKvmEavxT7jSnYApDVPokEu97W4yf2qmPDvunJZ4rCEcdzPEKCw6GDmDVW5YFHNZQAYUmKmQDRyCetth5oop",
  "key7": "4v7cFHCpK9YUVLiueDTWn7ai3Nfr3KaRTz7YHgvZxdLc6XXpryqWe4VPMTsw4xZ2YeDWDUCXh6F7xFzhMyvd7e7H",
  "key8": "3YTKZMYTvfk9D9SVM27GJSkGFYRPGC3Rk7dDebP3rDw9dcfZmJurzUUPk2tFU8DFexLV6v6aEAf5RMR4o7xj8bWw",
  "key9": "oU7f2ZcHizEiUbYMAnXyUgeGShe8M4n43cqLwsTqA1gJvjsPaQigUYztyaWJJKeSgBaGHavbECNWsaUqiSnCWs3",
  "key10": "2VYjEvzKCuQuEXFXq8jdtimfgh5oDxH6CNttSqvwD5qyajTBhzRiFg4SvrmBXQVGEefyksL6H2aT6KeyE1FwtT8C",
  "key11": "4fEtRj83JzDKD7SnvzMjbbvF6GiME168hzpiv4AuLteoQhmS8fzQ81fY2k7yke6zNZz6ijWWv2qLnVjneKzFpZjX",
  "key12": "3N7orEdD7XfLetpBv9nrfpfzhMDtL4HRqfxUZmKvswLJiMGPBK43yoghWojhv9DNwxF6pRvjRXsdpKsXCEFuQn7V",
  "key13": "4t1DzPPiJ6U7BiRg2LBnWiA2LuXQQjzwAZnJMmHHH8MCTiasEUB28vkwF4spY56Rk4YiZh1V7vvyfzCkDH5ShYPv",
  "key14": "EEJUiRkd3AiYgpTK6e5j9ztZQ2z21jyuMySuoTRn7s8zp8nXtRBhM711CVcKhvk8pqT31mzLJqfkAz21ezCUJfT",
  "key15": "5Rnh1xp5SM7exkdyexoqKEfVoZyAV3oPBfmV3zmTjvwTsAu1keHjy1rcJEC246uanSzMCw2m1Dw6YgGgWmbR2QCM",
  "key16": "2dW46SoiyvfHdoki7MqNhP1JSSQLrqpegHu753yn19GVitTLgAoDUR19XSSEa8JG98RapV4WQmkpP8EouUh3t114",
  "key17": "3utwdCAU5Rex8P1gBoZL5SKDXWY13Tbd4SDBHsxdFjvLirY6VnfzyqdfVKStu45DAp6cSrYLwxStAs77CrKdw9DP",
  "key18": "2UVVpaSj5iVWaxJdbMZHzHnCmpufiEb7JAMtoMW43e7a91BY53UaomnY9pujhoWzB7kfHPbLaKWZ2k2KXA6rDE5C",
  "key19": "61pfF5maQJaMKowPYa4x7eM9AsK1a3JTCH1qh4RtEnCx2Sa3Fc6oQwMDXwcpXsP92iWMbd9S9ie1mcCp6jMXomte",
  "key20": "5URUwWNVCYiSRbD5Gdb4EfQkZg4FVM9947jqqz4NdwnyGJuYo84HBFkgVBS6JEER6GHA3nfDUKrcGNt7oiDh1JMT",
  "key21": "3Kdt2DrGm7Vbo3WLzrq4n5vReaNyufLfBD9ivwx8X78Eq3r3Dni2Qg1nbtogswSruTf9JkHb8gMzhmipGG8mBbSE",
  "key22": "5RSDFgTyCm6emBjoJfAN7j63GZD8BJqXyG6stoLaXi1gxb1rZXA7x9voSg8HXK62FhXM3chFdBXGSg6ShFN2H32c",
  "key23": "2L7PS7dGxPcPJWcieH3c6BpzzumheLumKG3DkS4ysxcBukp6KrWQxJNMZSRZnQpMRjiL3NfiWx9ijFJLeobH29Xg",
  "key24": "5U5v2E9fmRxpv1KpwEeT31iHWXj4kCMzcVSxkR6rthZjtuGoWG8bHSt6fRbJSd9WTQVhiyegXwoaqAjqvWbs4Ax9",
  "key25": "6rr76RAmthsMLEGT8NSWhpx8h8WTirsSXGXgsUvidWBzErST48n5a5mgynrqgpQAHqbwPpsb2E8nL4GSD8NLQ4v",
  "key26": "66AF9GpShRZkXd6hDYaNDZD3qEeCCeApuee2RQ2eAzzm7GA7NhNLzpSMMMJFRJwtAyVWe7C9MJoUxwMMXAtqBzzA",
  "key27": "55EjEawF4Wi18Uow5Yi4JcjkaSKLoaDZZCv44y52496KfbCXZVDHoe6U2H3sbcYhdDUbLMRqgZWf5FJdqbo9Ncpw",
  "key28": "3vEYgMRo9L6boUkKaDuKF4WxH6pbaoMZtAVedMGJ4sbeHGQBaWMECLNPmCGrtfrnomRKRDS9bvSqnMnqzpLZEK2j",
  "key29": "4uWdJBtF2U3q4YtHq5TKh4Q1R7gpZsuiPA6sJpm8etCCvseoe1aPKVbcf9BVoZS2pA1bYnB5kMxjsLTdwzfjabWT",
  "key30": "5kUwGfUmCmT4z6xDbizox16vAZSu9AscSovX9sigWpDpHGRtYi1rnHqjaSCKxUq6o6sigFNHSb21Dww6hCLnQjyY",
  "key31": "4RBk7a66ixhk13ih5e45BdLvwxx9MnWTi3fqoWg5ihKrGuPdF9anbfXPX616rnxVQwta2rfrEDrx7r6BCfr18Lgx",
  "key32": "3csfs1hgvLxspUhc8SXHZ8eMCEyUQfNN1odXXSuPfdaL4azqbQbWUdq1vxfXjwwjAtATA5AyqBmQeytamuiD2ZVL",
  "key33": "5CRX8AYGi4CKhjrywtzpdQ7hd3Vc2Ukn3wVMcQNCFkbeJhn692GQrNQy4BaR9jMPBHfz6YrBTbwrPJXK5zrMufXx",
  "key34": "22pXNKmwZfNZVoJwJuhbWYSWs22zjmwWrzDyNWRFxH2Wrw2eFXZK2SASWt6yH9gNXHSge6g3zm9vq79NDX67rSN8",
  "key35": "43C7FSkbuVim9Z3AWKrKbXCmaYGNwqZyckZ3us7UMbZkY72MftRKSoQCjk3WjooG23evdQfGMpR193MMVZeEJwKn",
  "key36": "3P3u5GRoZAhWyK12o8VpCo4wUedYPSmArnTRLed4LdtrWtg2dapRSEpH7HiqPgX31R1JT7oeZSeGm5TMfcrY3nKB",
  "key37": "3d8drCrjg2Y3yfysfv5GT5vQpHfzeHW5W4bWT5nadmd3ghTgsDH2DzDvQUFYzqkyr1Lkac9nDPBiuuHECiRi4vkL",
  "key38": "5Jb5MwhN2Bi5mUZqKSJiec5KhBZagxPmhQ5WTQ6FnjcmVsmgYJZQ4UnDMewzHFRaiZARAk3RHtjSQc9j4yp4jvY4",
  "key39": "32AB5mGgv7A4RRjo7mzhXo4ekc6jFpAiMb1eaa4gfnkszbAEtrseDtSPVQmqJ7biHFwbYRNTJxuAETAkidfgKt4E",
  "key40": "ptoCeGJiC2aS2pHXSLMCLFQWyEXeGj3SbfPGBmhP9YMeCHRuUhWWWtXBGXtYPTZPvN5KJUYS6e9n3DBtMzWdsMk",
  "key41": "3qiUuEAoyV5LPJ6J2mu2NSvqHAhctdmiqvi64ZdpNSY2u3V4NN7LdLhNq1xfNTZ3AnwK8jCPFbhmyUqxWtFPKgrd",
  "key42": "Re1GY7nJZQ1t7S2jdA65v2Ff1QiLbrpP6hWf15HrsLhPGJwz1nbFvt2Kv2iGXqxuh6sZTDjKMWQvLisiKVuh3SD",
  "key43": "aMCXGnuqFmndSBBURNPPkiSK4tPf3ah73duGvqt9Jh2eJbEPkcgZHNfzG3u1YdnEcte7k94YW8WSm4waZ5cRv5a"
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
