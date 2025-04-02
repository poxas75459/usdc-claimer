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
    "5dicTmcM7TF7g326rjMJhkMTa6LjnGn5rRvXnZGy3NJrZJDrC5yoe4WuTQTJB7uvYNhhhzGwxGBfMQfLufJzkH3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZwVtiN4AGc2U5C7xqnYvn4ocu4n4ChnAMRqkWJNYNyxWgDLaAvPZvgJix3f8Yu94GCmgVtnbGMuwGuiHcfkNgFA",
  "key1": "5sQX7PVekNYKtSqkXg6MBFNjiVJkMKFpb4za3k5KHNQXrhnRAi53CeciXh2VyprknikJGRFaL7Co8CiwLvQjoKgP",
  "key2": "kQipjgvrGUyJwXyvwpLueHJBcZAxbzNTWtbGdxckDRvZUB4ZVyWYBUetjBVVDKCz5TKy4vYgb3CgthgbuAwiN7A",
  "key3": "iUDD5DeVCd3suvx2N2GVt9QXXjx3jpaTZPh8MnyKt1rogDkdTCbtNmvyy9iqGxZTKdKVrYdRGDRWkdPn4LscPFH",
  "key4": "fo19htEkUJZFhfp5XwM2nsVdWsdrRFSqeQrtYYwmBqkkscXomKfTCD2dMArJLALHYcCLvY28d7vFeVZe2tLBuwB",
  "key5": "S7kX5HcCa99CJWLdAJiMQ9KoqXpssb4v5hWA6SuCNypwgJE9Vx3XgaHgHsZxtBmFpWkEmUHHRHkeqBWDCD2G8cR",
  "key6": "v2TbyenxczAGWFmFLazRnKpz6sQ1uKyXRWDbVEC8VyVEMxZbeVyWFtH2YrSr9xwEYhW9bn1yommTP7EiWHCVLpf",
  "key7": "gRaXCUorw6CtwuCfPwzQWUb2Ji7K7inHrSrrbdGn94n6FuzcYJKhUnb4JBCeVv82zkE5Ap7VEGz1ugvakqecvCM",
  "key8": "3NMdhR39aVVgkQAkvYfSCr6hK4XXo4EXmUfxtVAb7zm9yugnckGThKgVnNBwC1ZGw1hkWevHqgHEcdAxzkeM6chP",
  "key9": "w9VnKnThipWdyWJMSn52zRAgTVhNRuyFGEWq6zcDw9wjCGiHoy91WAPVsE8fq9MBDVd9eCtcdKvBXSESHiaZim8",
  "key10": "2FTMPuipU8RsjUn2Pws4A3vgNEtAyRrYqaX1c97s4J7tnp9CYj2L7C1reVm7kyEdtdYK4yh2KdUVDzGsCv2PU93d",
  "key11": "4M2X3iW8PM934CwtUD8XxNAaB6LX6jbrbaH3rPVgyPh236L19jecLzUgRqKKQABmAcPzFFVHwGheLeXp4TF3qDjJ",
  "key12": "4vTnLb7SJS7qN2yZedn6Qx4i3GLXtnr9aePNUR1j2uW9rDnyYvxpgigvH7vG4k8mNfnhS6dW6sYVys8vozHnWti2",
  "key13": "24VndCnFC5yRLx5isbzukoARr6DPqPd6jZPPqv7HiaiX9xXvTx26y2BTMp4NeJM1bU9USjXSS6f68guzCbfkVvMq",
  "key14": "5pZzyinhA7L4CWQsymYbZnVrdq2hfvLC8qacEdE8VzuMRTjDDYRcyt6JWCyMbf37aFdyzL8ReujHkdoP4xMmjfLV",
  "key15": "2DmLvq9dYAxaQNcEFeq29A7REesdxyKTQDmzzdrjriEsmYPNxUNJkfCZu7R2vw5BooRaDddXKWi9Xk5JwwBLNQBN",
  "key16": "1LXF51q3qtr73WqjETDniY35qcWeJvgSgrWUKPk59MPp52FavorbFHPqszeDXiK4S7z9RRBZxsGxTnJXbrY8w22",
  "key17": "2n5QukkLdMrkfGNMziVqfQwjsavnpwGfKBjVHsnqWZNikuX6cSpG5Ju4w4LtXB4TRp4it2GWnpQFgZnkSfJnqhXW",
  "key18": "5ccwwoDed4HcvUhRqn3xEf2yvH4EJJZnQQnXrTHAgNuB2jfkJWgZV7iChiMLtXWeMMC2QbP517yd6T4MGmuJRCyD",
  "key19": "2dDjgNeVhZC34pJutj6T27vSE5tEHDbmh7kx9GJ3N7QdRqKmwtFBVjY2h3vGzJ3x41PoMjb39UhULojQx2HHCDZm",
  "key20": "G8PDsdv6FdERCZDYRx69fRFoZr9J124zqkyi5qiMEEntubLWAV5wa2ehtefXv6xMbVoWD6Z5j9qk9VmjDAfJtX3",
  "key21": "2AGUmy2bqTEANemA2RLkpUKKCpHCri533TXLJF7VQCaGE1kkYPEHefvXW4fqFjpN6327x8VpzRqMdFx8Ayc1YHsf",
  "key22": "5XRdLUaWardPTBEJiFZyvkZPndiW9pH32uxuyFNUyfG7jdQTFTuoC2pYpbrsfeK5hy33LXivvQotpYiqy4se2QwE",
  "key23": "QPuMxsYtm1UeXszpnW5ejS9258Zc7TLV4CsSg59YVNHAF9N2xxFyseY1WrJF1eGiUtyq2rP72ctWLEzuqz74QHA",
  "key24": "3xmMMrp9mEDMpAUNEAhHr9ka9rtRtwRg5PXWhQf3GR1TxKJe9CVcrDfNnnsiovFkndAx8ymGQ2GAKTAYisHfNHmU",
  "key25": "63PdR2K33UT5MnPigCURyCduU3GC5otinMVEUK8Hhoh5w7qJXwPnR57dhaHTxt9bhx299KrgkPxGfwSCwLPaoita",
  "key26": "62Krrn4TPFymRJyQwsfGK8fr95ZATRiVvvvjT186z5ushQAmcVijk2oY8qmqkeWCoH9jWnzqM1RMQE2L8FNtSFSK",
  "key27": "MPFC3yYW6KcE716H3VsqPL8CWoFG8pWBR95xmTRvXedrutuzUvqCUXSSSqnsqSHCtuyi9agUm5k6HmzgQX8AJRN",
  "key28": "3RuydB5tZT9NSgwVhar1eCZFjUDGJeCiE8AdejZ1nhMgGZMeWNeiE8UAu4hvdQFUTku9n15pjkq9vMDK4yejyEqA",
  "key29": "4tZjTNwWc2mAsuVp6xGbACLwV8BdDZxsax95Zfhh7mvHpHnMZGrgKh9ohXbdCgPpno3tfM4aDVjov6mDjfULM6Ky",
  "key30": "yr7E6pfohZHKsbDrhyrhA9nreHTH9PUAXsuULxfZx2HSX2mSNmZpZ9CBiT7QaNXUu7Fg8w5y75C2aEZ24Esr1bj",
  "key31": "4Xrz4Bu24sqKcx1eBb4vxDe7RHCE3DZUxCmxyCF3Yi1w33L5YMhLJDqigyMgnE4fbVPeMYfsjCDAqJogQNWvcpWb",
  "key32": "1QjDmKVVqtXEpE9hsEYkR9Nu46Nx1EbLpQKH3oUtrokuJzMHJuAtrt28hMynnvLuxnsEHXMoecRcvWJRirdtNDv",
  "key33": "3xJMZeAEk3eZcNyT5nRaMm2FRomhLYSQ59j725gXsYBB3XXEbYUaSZcHz9fMA9NB1fvPnUoXm2h1Dppjp6r1Nrf4",
  "key34": "UdsH9XNFq2dR5s5JVd5uUZf6diCToomYGz5GoD5mmDiesyqjQAiebiY2Sgu1w83eLfhq9kat3bnY41knPyZ2Gbh",
  "key35": "2Vo3mhnkAA4WjtuXcasN2r7KnyKKZdSEpPvA4tk4os8V78o6njmXXpc8haRBUsWB9Hfh1n8bXiYwUTWr1DsPcGEQ",
  "key36": "2ChXjPmc7uV1VbJZojiaWDCGJuVAzBR5cFYK45upyqmyXcrdDtLVp5sMQjYaDWcvdtHsUChoPVAZXHV18q73gmJo",
  "key37": "2iYaY7RPonuZcd3eM1kpeQ5CYhBsAS585KPpEnc38pwqafQFW89QoNjNByJeBzxruYezKftvDNjXtC6MPuurv4Ls",
  "key38": "5SAbFDSyKApYRL2nJtsGew1i7bnG2hLuGw3UHo7g23ToPFhVzT2EYYFt9NjU9y3dKYe2tCV1r5a7sLWhip6f5M9f",
  "key39": "5egjzvzM72yxXJ4RSv9FNwy3wi8jZhnVk3dpv8qzCqhb76BBGFADS9B1iCnMS5U2DmzyukWBiVWWM5B5AZSp5bNB",
  "key40": "4CsXZhHck9E9wAXB6aRHLDnaZQq31T2k9gAvNdBCJ2aQSTWwBAtvCnjDfP5sZtgfBX2hRYbwATsUQRScxtTmNtf1",
  "key41": "3KVacCxbnEeXgpzTPkQZwAQdstzEYRUpWVAK2YiSNNh9VLWMdbR4TQpt4jjVCBKN5A9V3SryVdajwVjmRmfwBJ9W",
  "key42": "cEEpJ2t19JZRSb34jzC3KEdJWPnjyDykpuKxXJj52HTTNo3dQaWnSs6ssWZZCirBB2zENdb7dV6YQTZQsQnzNBm",
  "key43": "4oZPTVpCBp5U8aXtZ3VyK94RRMV7XU4tZD9FvcXtwYGiW4cT3hwMBWoMHqEDRAcWdzSRo2XRJpmZoAMth7oARBkc"
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
