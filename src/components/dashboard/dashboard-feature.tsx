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
    "2bDzWNRPhfHH4dzt4DrzK42utXMbtHtoUdtXtY5hhbP2kboTgMSSxWKvyYAoH6gXj54PeDnn3SLjWFw7L7AVA3Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecZAKASXXdTSHVKdkhJBbFkVb4iwzXfhSctNcin9jAcEuNfbkxShvBB9jYBZH4WKwHGnxcTn6vaSf1QvU76ivy2",
  "key1": "3osBaAhspwZGp6oiZSmy3z7pb7TKk9Jx6uLPAMgfwjGt2NgyQ2idF1ynsSjhibuCbbyTTw2XrcpgogoNgwvrmZkj",
  "key2": "4S4bFrrhsBkJJKXE3HthuqzYfDiDBu97RsBixSByP7yo2WeA7Ja9si9KPjv92KZP53uDHathrP25HQpW6JzhjKpx",
  "key3": "2i2rh6noQnMSdfATkFHn92c2PPPRdi6fhnbo1yKFGDB3KZomTQFC5BGMdJKcBBM5BgSA7XjB3yHbhbn5UawyddH",
  "key4": "5Ttdb8atb3fAXB33Zp32KX8ScVez42LYZMXoXrm6T4TXwMajv9nTT7iq5LQop4YWEZTtrDM4fVKCspvxYHEYVfry",
  "key5": "4iQ8uxn5HTA8yS7evNPjBRnv7esLraKjjxZD55RFo9BMnmxeQtrzVBZPv8xhYAPuvmG16JWhv2wWUWZhKt9Rms7L",
  "key6": "4Qz2VyQt2vXeTi6XB8WtoMhQYM3LcZSoLDCwJWgzBYSaM6bQWiJMmnqkJ5JJGDPDQkhy7ErRrN8xiJrERyyfDUx4",
  "key7": "3RmqxoHAuA4RUMDDEJDmxUYQFCtunShbX6k8egpB1511Ez9stLFgr2UL9ssp7hpQmBDdovEwVbdrZMCovarocU4k",
  "key8": "4GJGLA1RVUZPLXUjCz8StQ538JbpKWMPdXQ8RG4mXAaQawx8cBy2Z6EhpvtKxMB6vJjyfL3j8EeTRRREtXeCnqMf",
  "key9": "pQaeCk7S4J1yxxQxfvBent3J35CbQGDUzF1oW4WMvwhUU8PTAvZfwiTtozj6iiNmFrUtmvCDvyPHYZz7KongxQJ",
  "key10": "2avAmBmCc7gfeWuJ3QXE3hgUCGp3MSm9GYi5dW37fJV1YffubweDyRt24Fas32pLfZEge2dN5zddmwXifsEXEiZ5",
  "key11": "5HnDmSCvagAUSK4cyBv6zAt2F3xJUS4ydMzoaKz8Lnvv1qkw5v68reEXzefjFjSK9MA3uxtaxLnsr2K26mex5GP5",
  "key12": "4izjWEjymmwjf67TgeEe11F6tVZqD6Rsq2mzrL68T9oN6Nx8FmrbXxTdLULuSWDx6EFnC3NasAyiHTkdkGALXjWD",
  "key13": "WVBjim1T9SsNemU5hBAY5kpjcC1fugByRBN5nYuEoWjZcXeWEta7vMXgrbJUDasQNiqVRa2M89XVtQBLcjy4NKJ",
  "key14": "4UQPcVFhHjeGXRudEC9VvxZNtitYCVs593ePNW95Ry2S6Wvt8ohmucTRaffzCEtLFE2NxdWUCyVnpw7EUnPLMN2k",
  "key15": "4hwBaCBR8MLS4Ef75ExUGjGHWimiuC27JnxDVGeQZFevz3FT6zcbn9TakwXX4Epswn1LndNddYNbkifeXweZNw55",
  "key16": "43poz8ZtWwotdFdP359uTv8sgrMaaikdcwBYhjatjajZ8Qbu1yFbBaftZHLbhRfSxaH3a5MVoeesvfPxDPgmk26m",
  "key17": "rPXm5ofaCtPbEGrGLuvjaGgTRopG1wEgy51xNR4gSdnXzZHPcjvutsoJtcCnjiGy4FFBHuqCXg1jAT2zdwZsZyf",
  "key18": "4qyJ2AdriawnhtMa7kPgy35L4z7GdLSVtrEeYNtrdiuqBv31FGAHPP6FNoMtLzEKsAasfQ6NCSDWvZocuA4o8d3Y",
  "key19": "3i7ezdyUr25VXwQrjMQqUZxvYj9Leb4x4g4b77p7R9LQL7evRSGHA5LZMuNjzDv8wRUWumw5a2na6n3TLaXxBjCK",
  "key20": "6k2r9baag6djtbpTnkkS8U53YG7kZYZY9bzLpLxVU63zfFMgtLZR9Y665x86trbk4gsm3KPWi5BZvcfL5Fo5bgh",
  "key21": "5c89NMVkfpcrzcmy72R3tuVP5yDt56sFRmkUtgxJPriR44uYYDUnnVXHyYPkmwSWjwLCTNWNEjnZWgoAaUSPK1EN",
  "key22": "46UqYkLM5YSKCiRgKkLFKHrmXU4ZU4LndUiJnpBFTVp8pWaxuArZk5CWW1fcwgMg2in12oQDAavqXjok5sUYHkx2",
  "key23": "5c6eqEn4VJSdiHv3PT8TmjoQrJA6wxKGqLr1hHWb9vRuC8adJ1ysXLgjTE9y2arHJtUuwuqTxCg62pG3ZMSriFSg",
  "key24": "2WYDfS7trvy6RCi7MLWFLKanMf8xid2dTPCvb9Zonsaxgq1CYb7sEZrkRj2AfwPgVRYEKDQrfLdFDQRYQExouX9u",
  "key25": "5bhNchNU1kjYnzLLbLWX4jXAawdpw5L2m5VYBfaKSHpcCQJe24tygY1hnehe9SxTrRvrS5cXi6MvBWMTJwVVHjev",
  "key26": "4Aa7ifvK6UM57HSGsQrRGGHEptoFEcRM1xFK4iWoLJDW4t8AkW1LqRMzxHdaW3bArZxYsyW2gWnxbfXpcob8umnX",
  "key27": "6gGszoELdspSgh8f3sMGKBWsjwEJ8fxd1BGvECeHALwYLeiGvbcjrJXGy6f8saqCCa2TRydWnpEVYXJCCeaY7kL",
  "key28": "4ZJr3VMxCg3oiQyhJU9TK2WqTmbCiAuwvrmZzA8oS6WeBPKHJvsSRzD2SvXTXsiSELxaG25QeFf7oeuQ4rNYNcZ9",
  "key29": "4PvVSjWyji83kGgwhpZpEiPuVJoMLdpMsfdm3KRZgvJxbHDTx441ZKNPBMUUUY5AqYsdGH8mhXzwzETti8wTC8Qj",
  "key30": "2eShsk27cU37hETFwaVKHXc4uwjoqJMZXsgFdjP8hTgzXVViz7VS62xNuZgwA3PWddMMEnsPFeuCXgpwh7sDTZRM",
  "key31": "3KdrAMT38vd1Fosh4miKDbGL1eNUBBgvQoWWLjcEUQdRiJLWsJJcamWzDByRjRWcb6xfL5DRDQzdXKtmNJ3EiYDc",
  "key32": "KQNEWVdyZNShdTk1RjhdLK78gxywn7ek9hq1hmV6DWsps3CsnXJXdS2EQ6EHBx7atEeoNxE34HLPJjnHN6wT889",
  "key33": "2sbVL7rE2NwiHS6w8JRqESEXgH7DUBJi3ezMSZscn91AXUWjHoKutvfjySrHPNpVEL2m95vrvTeEkZsUnfek293Y",
  "key34": "i1QaoG1LXrVPKRGSG1wE6xnbdt1xbcpSPTZDp38ELZU7G7Z6QZKtnomVUTK86QhPRuNH4jF3a5PuAMzwU6FSAUB",
  "key35": "3vVFj233VgnTuJgbsbQoryKZRSBToJu557GFUB7ogV8QkkyDUkQ5PB5VkxfjoEZC7hUVUczoPH7JnRNEKgoTvLYp",
  "key36": "2aBpHoJKqkyHxJmMq5XHWNE4ie4MTYNwGAJDPwAjXWH5ELbZGXWaEqTpSrtdpWLy5DrYF5dKvCuQQDtEDs2sUT6R",
  "key37": "YDcBAwm6mrY1ARDUQCVStk1pSiv6K1EPQUNgApw1sD5RY9wk3ELbnqWaW2yTsLKevaDi8sX1bhH4qHaJHo8L8zY",
  "key38": "2J5YS7wLxoCzewbPjXPpo2kaw4mpBnepotxe1HrQ6CnpskUKsDTvz5pfCPMs8YfE9QpwLDRMm5xeQAJ36HeYMqYN",
  "key39": "azxhaFF6iUMg5HoAnQ4rsdrrioMMVfMXCU5U5PY2Whe15P1pHUu1SgzG6wMTSzYNgtmgAFmJz2mQXK2BdEEfz8P",
  "key40": "FuUomGafd9LSwxzeU4hgLxcffAs4BfswkweYB9MGsrSsEkmQyXa5q2H5Lo6hm8Y779TBdhckdeRFLc2cZ7qr5Vk",
  "key41": "3yRc4GB4gM6mCZpG8VnQZ3z2Zpao5dX5u92tS1Tpg71ZvnaAXzbXu1U489pp7jJaMk4JMKMFeK4iJFjrtcsRin9f",
  "key42": "3G4nDVebm9RTRscSoPa5d7dyBN6NKWFATg95SnuY12D4vGbGhjDyz1hJxXFKXTzPa93uUha82bzEiC7433qF7SjL",
  "key43": "4WcmxRW3uydrRthvhbiqYM3he2XPpjp2VEsNwph2uR6kT8BXFkx2gabxrYmD9y1v9wgWSRTu4KP53HLsiNjoWj8U",
  "key44": "58nfqxemh8ZP6XGs5p7sFn897GrvCncZn1c8NoqX5wH8XxazHeZqvM1hBTG3GdFwqAhcCuVwzENN7ZkjQsMt4vwL",
  "key45": "2FEV8RB7SxAZF3EwkFMvFHKq3wzTe7YZeQLy6A5JGy9i9aQcfBFEUJsKcnW5EGMix73DtFewQAV4Fxg26yBRh7VH",
  "key46": "3qUTVmveLH6kFL2yxyH5yptoAPuSQ97JwGAL9sManwGnxHLYNUbHtbJEKcnjLD3jiJDp5PM3FUN5obgb3mJjn15X"
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
