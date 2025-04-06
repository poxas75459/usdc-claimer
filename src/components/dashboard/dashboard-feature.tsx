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
    "35dgEQBnf2uTmmxn91ct4JnQ1m8Cn2qHQZwRDUGwkb7T5kbLuKscWNNm5RmXHEbpt6frfTr6YQvtYJs6QiQKuATT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jhf5GipFvS13rjFWuk7KxXhh9NbDuAhAizaDquLAW16Fw9QgHuGGR5d2ptyFxGVcgbLCa1ntVviS2quxW2ZQFj",
  "key1": "NnxSDKu5CiEsZeqzdP8C3eBzoBdYRN1fgiid7Pqq5SW6vUMuxVx8b6GaCcGnxuMj1eUQmzQ1esxQkzZi1FjDKCT",
  "key2": "3BoS7xzmdZojv2op5MCFXpqBzNERd1c8eh1ipDtUC5oBrVGhWPEMcdwxvTDLDeqRTGTcH7G55LMgPfCuCUnu3CTR",
  "key3": "3QXpShZn5VRK5UwJLTGEU1xUn4AtfzypNFpBTRGfgmMgfYkM3hMdofKtWW2fUeY8AALJK42K5MGkJVpa31iWDEyg",
  "key4": "59YGnaWLbEoa5eYEaPWMo61yGM6AYkz3RpLNfyAT4m8FkFS6FqbjFPoKmq8uGPxw2zYsZZZHZ4dUZ1d5T2C4qqQR",
  "key5": "WVSuckkiECVxdUZKreUQhpZB5BK24LhcAEDaJeUQM8LmMAKcnsnZvaKfkQWpL1Es5MXKvxK8h6xyEQADGAjYdRt",
  "key6": "4SvokT9LwSFfXzTQtV2k72vEAVW6Fzfe84rfZY6scDyeUvzQLMMCPADBkPR3RAX6G7GUiZ9fi6Jh9mbAKtzNwA6j",
  "key7": "3dRtj21D9cePkrfGkDH9QntwRd4S4oasz4y3qb2j96ARfYEm5iyrfmDWX5em5GG6zB8v5Zg4eymjSmgWSuhvUJin",
  "key8": "2CTntbxDFpphop9hrzyZJtsAYB8kvRFUrRV5VT9w5hBbrQkzvUK5Mj6vUijZL6K3jghqkF5YDNYy9gxSV4Zf8A4k",
  "key9": "5tNVXAXwrkPX1iP7aJtfUhnRNUycKfNNvMRbZaFp9w7gb8uK1hv4mk99KFV7gE5sAYfzCqv1WMWZYMDwAjW4o7Ls",
  "key10": "ZYzmXNybtJKKW7ug571JtrK5WrqMioRpPmxc4eh65GTkHq2rQmZhZ2BTSP5CEsSM6e8b7s5ojZBDRLQq6TC7YKi",
  "key11": "2hmHAb7SoC4ezp8J7x8WvKHAMVRxgvSc36ygzvD7D8KjpR96jAneXSbKqbABfKT2qiuX3ZVT3zhTGjpgYVWZSU63",
  "key12": "QJBQ8thAb5oiyM1ucHeRLgTfg8Csak6JgoTw53pnEEw9Hidfxqts9GwYBxsZdT1G3TqmLV8QNoZnPz9ciwMvjtq",
  "key13": "2PkEXUMCqgCznDQgRpKCBLQUE6JatS4L5hHD4mutFhvTzmk3Jy4yru8yGwntiFpjUcu4ePhTayCJdFUwZZzaH3Ti",
  "key14": "4d7Gf95sp3oqeToEJRtq9RsQEHg7ugZnhoMQgWrY9MEVwAMuHC6tvCHMByrCbZgYaGMYiV9qALnAa8itAJ18NcW",
  "key15": "5HxtXvLgH4LAy2jEo9ianakUMajStZNo39sbE9kL9GFB2gMZ5aHLjNCVK3j1RAdAgrHUxARV9ypEFqWGD857m6dc",
  "key16": "5NsV5fNHpRg7GjSRPoUqtgBMNdGuGrDfwwfPVPnjaPG2atrmUzToEacd66Rr47Sb74UeuR8pgGMBKyPikk9P98EJ",
  "key17": "5uhVwNHykaLSaNTHp5XgJ79pyvGdHjkcquG3A12zHYe7qHMHJjQNTVdQeA3BdpXuX9YgvsdVBUMzZPMq8Npwman4",
  "key18": "4AM3Lg1gVvjMC1s2PJkYzocPTRSEGRdwr1iiY6qAL5Eektv6zV1MnU93mJtBHKTf3PEN1EGwEeXAHbvw9QKwAkyv",
  "key19": "3FDDRbjA98mzZASXnRmC2px97SevVYwECrszKEfy8wjTofPzQnhC2gdjsesf8bZrSA1ffaZT4vtWdEF8hTCfiANK",
  "key20": "2931xmcbY36SRVDS7KKrKjMn3ZUpqKG23vv8w9HRtTh1uNfkC2AyXKKRvhCzNCCvwBBXvwTgErjJrTbyyxB8qqiF",
  "key21": "2JoLoM5TrkWKDFHbQ5K46eSTa5hDaWHWUsL5XASjy2gjTeHSKcQKXLAHmQ4yVNkittLr9dp5hg3TTPZyBVEBCv8Z",
  "key22": "54QzmeyeRvAtcLHSWY7JenBoijNNKbShm116w87U8z5drbp2Jou2HAu1bxTnpg9NUqywVyQ94SJDUrubicaeZAcd",
  "key23": "4PJg1xaDHUJhh5emY7uBAKnS4xc8JhJkrBQVcVQZmN1VMvNNMZrJVaVnqK86i43ntGPmotBRJQb2pb7GHwZ5GRUD",
  "key24": "5jqLqTeNnC9ZjggK4wxftJZpc6q7TTzgULgPZEmPZpvK8SGmpaamZba7vA5BC82KhNPLrdn1mFVvsid8uZ6McxXr",
  "key25": "2T6sazomrn7LiXkJdrKxQUUccjF257UySGdrCLi3sDyk9pniwNpvevxqKdxzsdvb5Tyrm68EEV6rswfHrTht6jyA",
  "key26": "3q41xNeaPKxtAe9MhsbYaaai2w5T8uSf3tVzFCvK4vWy98BdhzXkvjYwfkNcvpt48to4Vh5qvz15XnSM7GAnoChK",
  "key27": "4xKTCKugDTWJT8LFxuSKBFgX4rrzQKMhgFbxUL8r6E8j4of4v4LGK6m1DgzStrTCAARSvzrRPCb15GYXURPhNdTg",
  "key28": "21GBvZy28T17aaQwnE1VTFPrxriVJTqzyUzRHCxvw5gZN6AbRhnytFjQD264FFfXEfuL8SaGAh2vydqqaX6svrWn",
  "key29": "4B23adMLJ16hdQFnR2evzAp4bfX4jt8B9MrqKAUFSZMKPBTqLFkpnwt5GM7ho7DRb21QKNyJQxN5cgyFe9ChPFdu",
  "key30": "4TKpXhEdGoSEksPHakt4eYsnSznJGUS3dV2cTtgt6KwWHS39k4cYjggMxcsV5TaofvzYduMBZh4daDHrLZcEEiTU",
  "key31": "4qx5i18uXqTdj3iYPNNuHfw5n4dqEaZGFD7g6LE5QXmg9E6sPTzMdatqHsE6Lj3uZpawdaeJD3FhRy1nvUzoy9JN",
  "key32": "ErR4z9hdkqnWA9FUfW5tU8bD4vCNHpwMXzdfSHD9kYw9jKSRVKmHQnabBTJaNpectGHXsBXqbX1B2C7Qpk5SGA1",
  "key33": "3p1XZmz5Fz6kmyMXTnDHDZF6pfwUJnnByxb2jPBmjDkkYpC3s4X6VCbmNFGo9ZUwGVaq9u62m1Psgqx6GEbwynZQ",
  "key34": "5zVavpyKAD8Kahg8AGVX8BRFaA15warS2Q1JhoreBEmHdQQpVC4LexrXeiixEFWZp2foKf6FDQWkkMxB95qStMQH",
  "key35": "4zThA9p8A4Ey4x1RaJfbvLrQMJ6QtzmCJ3r55PekSGBHqVmbNZdhxbLiuowMsYbo6jeBNieCmKxKD4Eka6mP9j1v",
  "key36": "iwXLfBL91KjbJASBeQd6i3n4SYvQQSEdt8v1Y8pXxz3UiK5d9Yrqdt9k82ALkRxNvRNBNpytGTUXkg8QMkQwoJ1",
  "key37": "4Vs99ioJnEJEi6yvpbfeXmeyaGWpW8JcpXv2AKWjdDrLWkk83vQXj9EZqCyziJicDfXPGAqEECvVJfg6qVXx13YL",
  "key38": "4aGZ488Q3P6i9K5sy3BZfZ7dzi5XJpmfktXsiLvBWWroApUhw9CvnGvXZbmjpfMHunQy7ba6ibazDdEKnR3wuehR",
  "key39": "45As1ycx8FRBkxSAgtbsgThtrZyuga2DWnthRu71HaBboecKn2u8BrUNm9E5V9qm3ZrDyxiEf5yTyB4SZ6zga3PM",
  "key40": "4JauWiQDB73xu1aK6xd5FTHjvhEPFw1u8KSuuCMoGoNkpNHrpmKyJTszsbHnkeC3aDjYMF5rqMYZyjxrrfPGehm3",
  "key41": "5MSPon5vP5JNYua5KSd3K8orf97iEeXkqWCjcf3u5CEfrfSRa56yWzmYkbmLp42wp3fUPaJSg3vP2PMHkTwpXeNR",
  "key42": "3Beops9MjoMBpTMaMLDWcN3THzNGEW2nAbeVwaKudRPocxAtSb2E7SmoWERSkKSiM5HCRRhB9h1LQrSVsfumhPuU",
  "key43": "46LNXi2nDRNy2fv4LNRjjH6oHTnP46wj9FNmCkvgG9TUYAL217aPoHStRA3wGJd8QKQHArhuYBXgKgjGu1tVJ4mS",
  "key44": "4qUuzJF93XhCiwtdGUGoyZHf9FBWWW3CBZbozhLv8YrYsi4dcPwamAmkx5tM4TP5FpBDbakzThLVxNtuHqxf5igR",
  "key45": "kjXErwi7LD42K8Rec2Beb8jg8MpA5KFhWRpYP6k7MxUkBb5ndEnVbJqyRjiS6SEvmHr1jZ91FUjmn79pDJaJHey",
  "key46": "3tHbexH235Bzu1WtuNVCBuXJmx6xLKFFDWxY9RnmQdoVv3M3mLhtgiab5MnLuAqQRdBMN7a7ENCEFbrhGQoyVgJ",
  "key47": "3Q5oNrDxacDFdqUouUfN944V7Q24qwqKUwJvRRzp3zEsQjX1jN1dAeMpvPRFhXH7Pzi14NWxaEtji18wN4RuDwBM",
  "key48": "m5GLkD6MR7RrJmNNbnAfZWGQUnHPkHrSdmg4FyUow1FgM9TizYrZ3jrxiVZ8sLRyFaMPBaU62unbLkCkQiJeZpY"
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
