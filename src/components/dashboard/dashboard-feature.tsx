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
    "2yHqxTuv4TiqKVp5yBWP6wrkzBXgLLLkTBwQ1fNPXwAd5xg3JQje5oWy5GphtMrwYXTKEn9sZD2vCnpTHj5WEmLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "acHxLL8VA7uiL1f2jKnmn8KYYDn1nHagWZJBM671XTuKeoZMBtsnvkrqkYcmBwLi9XVSLJUwyqiabkAmQzHM39J",
  "key1": "2ZaEjjfuvdVAQLav86J5yNUWM9Zvt9Lm2yzvehv9TdHaTKfKV9Bs3DUMXTH2QXh1Es8VhnUgQpa8fRfcoUEthGtb",
  "key2": "26CbsNwiLEwdKjWhckQ7WpJQvNw4z1kEfom8EG9yL1um5xANEogGAYKNRGgaMyuYMEB1svLpJBU9Gw9eDXKgUDFk",
  "key3": "4UiwGrCBoBntBsKVfiyBT7hBkfrULkeqthHiex8iqesBjTTsBA7jweKAGZp1Nd5RFV5iwoVFYeZDPoN4AMg7V9V2",
  "key4": "2h9gNZA9ZC3qEWS385HM4gwNq3dZuAn1fR9pMk6QeJTyQXyK8eP8biHHUqchJvXnrn5GJaaiPZ5JXw1c5Vb7yGqH",
  "key5": "3p3E7jWYRGsyqu5wAWiXRhmuQDQVWbcKpkfo6gfKtWDs628PbNHZ8A7UTdVmRSKAD33YtpdRxkqXCQfj2PkJMY4J",
  "key6": "2oH24PqYwXBWX2Ed8WZRUo7b45KvV1FDGykg6is4nnn6K9bwtugUwZepzD3DSEdeV4GbtM4FTqVG8T6TXyCk3m8p",
  "key7": "5o2BU13ZWjPrwmgeDvsG2ci3RgADvg57K9rQwQnTQkVw8gswiXpNphRGoZV351dgC2eCXGxqTYD5nGQMsP8Wj2hv",
  "key8": "ZhxKK3EYMo624RyNix9K6nJBZyKXAGTGFMzsjrVgMC5XQY5JE3X8E87ZNTF6T8j4VfF1E2qoaaQkQvkdQ2eTYYn",
  "key9": "4Bw3pjYHK3FJxnTF29TA1bgESw2K25kf71Edob3ZsngGPpLmMsdpXkApRTCUyY9TB6tLDhambfiKHnHfmsJkJEzw",
  "key10": "3HXUNfcteEZNxvwSZwT1My6srjoajLAMAf6kM1D8VRkGzYbpbb1vM7eVQWYcQbUfK2YrReG286BJ8aViAbTsMH7a",
  "key11": "3MNKmJfumo9E8kYmA5NeTJJzkLVhwtu74M8Dm9QjCSbJQgPDbZEngd2AxMrPHXVQHS93kF6EXkotw12NTEpGZirh",
  "key12": "2p7KzmdQQkiRoXRZQybX7wzUx2ruasxqRNdyMY5DDhBNjt3ix5TDXwJj6YNYEMMZXSeW6zHP1zppyUTtMz9n5hA6",
  "key13": "3TV83eEfVpJSp96tfGEC2YvAae6bKfEr4Tu9AxF4rHuEFdmJtEkUgxepPZw16fPeDmQRjuRCo72j723PMHtQLfTm",
  "key14": "4b1CT9iTVnTxUEVxey2tDJRrXiAFo8Dp5FDWUbvpZ2AFHfge818djek9dq79bQRr1qiiMoY21qLSFPkdozHyiR3q",
  "key15": "5yWt3LKN5jZq5YtGe87Ug565jD3JdercCxngJ9FQqD7UCnNnWVnCQghaRDwwAYbrDFC7T5R29QHCbGstmNDuEM8r",
  "key16": "T4biWNCdHSXnpSi6gbaUKu57Shz9GLRKyYVXww7rk5ttRwfmqoqu9ogoeDrxV8C9AEw6x1eyYCYNXnLLUqrseGu",
  "key17": "4Pr5tzdj95skhqJTFZGcdUX763uks5CnsXkxLi54kKi21RcavmWHbXQZeTGrGt6fkTVBLDWJLizK1kXU1KQ8F4QW",
  "key18": "429uzctudKQCjkqAzg1XPPwSFnBkeWjmDEpmPThLjhbAb2EVZt5LwhN8PDjC3wtdbxd3zsy2uBVFLtjQmst8EC5j",
  "key19": "4z2wP9yey5Li6YWWxV3tAETjb82bRk3R5aDiYsam9QMzpguxkKwU8y4tcDCVViWa5sS8EDT1gWhrjvMV2r9SFd7e",
  "key20": "5CKaRuE4ciSamRJUTL5n7M1BAbc6oRgwFQoyFnwQAAR4WeGvJSWwkUZP2FkurEa6qwrdDbdNbecwM5nTuL51SnQD",
  "key21": "3C7ecteGR3VNgMnvNfChZBPBEWkY1axW5dGEc2zUCgL2jw38ef9WuuPrqVhX5P99U3CSqQLsP3hNBdedbHo31FMm",
  "key22": "3wvVgJUDCYFJpTvPKPb1oqYPGaUkhWFnxAuU5eVXTiFVAti9ry1kNcmgFWZN2Whes6DXe3vrweyCdkcF1WFsLLCY",
  "key23": "43aHQQGA1oVQhAFaQKv32KBH9oGN6UA3Vf5Ea6GZpYbrsnCmAhw1rFNTVkFySeNADDC5aayaTgbbi9obHbTCW4LM",
  "key24": "3SydcptohrxH7qJ8aDmuj2CJM55pFMVpLhVe4xqUvwVReVM9DScoZEXVZSFuCNfquAM3mMM9t1WJ81MkhLLXR6CR",
  "key25": "3hH3GxT77j2rTrXoSHY25TqLoay8tTPSRNrnC2xccsC6Pa2RAL5uH19BNZe3C8Yz6JoEmvpuzDyCS4Lt5Sc2n5kD",
  "key26": "67My7Qn67H1DppL4nTWRyAxeuu3M7E5aYtKe9GoQmKX9yHiAMPe1yd8D2aE42fojypqPJEDyssiV2ukDj9H1hpTM",
  "key27": "4uydR2A4WnpKcXionhatQKXk4wwfJRCjHpbDgHR1RoJy68VHpB5Ko1FbqRjGYev5euu4euQiTn92cuB1kZD2HmyH",
  "key28": "38Ry9cP7ZWqEbE57BVLVwHFYbpkgaKzT24C1BkDPF6fBu6bsG7eSX28dxejBMJwatPder6rAEj2JWa9BNDKnGdKC",
  "key29": "5bauKDGCZfwsv5iV7RX5Dnihvd2oFbrrjE4PoQXAtMwV1ZsNvxdHasBHXH2Vwdjr2ZUffX3stdetkXGRttCTAXeG",
  "key30": "2GTgfWjDJgGjN3EpNNfPM6d5CtQ9SrP7LdHZE37PcxVsmYD8Sk1uXPw2NNCz3CRPiUQxto3fh2uCiTT534K4v9Fp",
  "key31": "4BobmM3pidDTPNhRaKV6qUezrdrV8sQq66XjgHAzfiQoSdJvVGmPnKzthus1XCMBHPLgsPDz9YZWscs1g9Ufde5X",
  "key32": "4bQr13PDHi7CXJmG9u4chj3hYsLKsxw1zHk8KMH8PNWUN86wKrTrpQ93otaDjXRVLqwcXh6JVMAnRjcEQkScrzfu",
  "key33": "2RF8h2ZjdSVrQ661PU7dbmhVPzZFSKnGrKj7HwG6RYnfFFwqhn2KkSvwUBW3eLgdn7yc1UDzB99kqzguc46RwvEo",
  "key34": "EKzGoR8W8KqmYhHPdS4jxRfcG35sEqNCXm5RfgoPjD1i7otwy8AgT93Yb1YXSuArgxZ37DtypFCVJta2jQs7WYc",
  "key35": "4nk4FYhfWN63r5ha5YnEMbqskBCfUd9sYhXEyb9RkX75kmm9rGHVRuUDA49z3ACSL9zfMUu4RzRtpc5YzNHN8Pft",
  "key36": "D1YR9uv78tPvoazKU71sG6rknF63Xfo4XB8Dt7mjaCHfeQtvr83y9Cky3mLex7fr1SfHjaM78E6jQeX429986NC",
  "key37": "27VMPbSBXWdMYHhcwTxhB5rurCbwRqC2EDmEb5mzdLcQ9vt6HuNbxRJkNkUD4JcUzHRGHRAByWBEJBaCittDhUUv",
  "key38": "32aqYGNus4jj8xdW88UA8ryneXm6fMYbvbzNyYpgViZDJwHuaHg2WjYz3i17WDiHzuFLXY3m5xPw3NAt2dKwLKoJ",
  "key39": "2QJ6zFdQAb2VQEgug5PSGn2w8ATQRqVS8wEUoxgj16cVhjniCkeFqXNwJntEKDzivuSH2UXiM7mqxXM6ukCvqqYA",
  "key40": "fZHszQo2WKftS1C9bf8fxxv8D6gcVK3o1P5CRSdZD9ychetUiXThND9n45nzhrTjq1Bm9kb7cLLp8HeBSLSXbnk",
  "key41": "5agmnG3Cx9Td7zt5eQxghuwXLD7h1iUHbRczHtWwGprRBhZKFCx7sg5dW956XXbVVL5GGCwHiKZX7pcehhHbe2XA",
  "key42": "3FMo5LtyDcwYQHme3r6msFGccjEugw7c7GjHj86rkgUrRTFx6RogggUVtfpgNkBHtMXSxScmQJejXGh285QsxRcE",
  "key43": "4aZL1QBFLqYzmekxPiPZK9dRbrCgxa3mhxct2ArPgZZs66pGAE5pcAUU7gkDTRwQnMCWhkzLWFzWKLmT2jRRg9a"
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
