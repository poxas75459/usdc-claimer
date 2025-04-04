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
    "FeniL4MnjMJNNcK4gXtHxCTrkvKYkLjzXzWJsmqeWNuJvgwXxV6HEu9cipNB4UZYHAQca2dr5Ae1WDqmuWdXJbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHUp6RujgDYbizLuohrggzy4imgeu1x3KYH7hBsqNydGxwPM9uhuabGxyukG6Qr6vVBu325tmK82zvR8JdxuNdC",
  "key1": "2W5N3mp4jVEDAUyxL6VHN7e15tZM6eGRGM3Yj21YzvVUGA7wpPkzH4PyDgmygup3KoifSVcUw7cjfAoKvvnTuHhT",
  "key2": "5YwScRWfM77oCmhmaQ6BXbEnSi8tJj81cBMxrEkF4LSb2ZhZca9Ddt2Wpy6W92kRWWXw2SU5t44V9nbf1BgNVDC4",
  "key3": "3X5kQtkPb3CG7piwh8JUigWwNp2hmPxxD4vL6tJkJ6fMo2gyWFHQNty5A9AW9HCHz91RPQWUi3RGv3LiNbFcM8sm",
  "key4": "54JdPeco7vFJARwVZVLE1ukdrRsbcUVuhHAnJ8gpLesVGn6PgQ45GkwJCzSWLdWKyybZFzQ2a3mpotF1EjsmD5iv",
  "key5": "2acucRu5DLzvAWULfQruMMfBXHLvpaYPL9c3RiKSJpeaFLYuRWnJ1GGYLF74vJE3iqTGSs1JJBpBVCZ2KAnFDBPx",
  "key6": "2mYNXbR2DurdqpQGgjPwMx7MhH69mK9gSEKGejRGa5rQ5Xkits3jwSshkowhuE5K9ZVodRFchfdbsdLY4xj6zg47",
  "key7": "W2u112kkUhcB9urjFvcyGWCjENEGwswZP7QdjAhsj8HHQrb3aEMAPxsWT638izWSRdYcL7KbzdxDqfWDYn7HF3Y",
  "key8": "4A86uPnyWzTEmP3PYJK1tmimbt25eTCPfUd35eRkSFMLUpDoeRt7rznJSSuUz4hFE4vJ6BauGr6FrUahG5MAyHYh",
  "key9": "29K9yCxjs7d4qKgw9rsCXrYPEdNXecw2178sRiKsLNZMwbjfe4CeL6ftc6hDcEFFQ2doRPnTshxx46uBzbwUpX73",
  "key10": "4F5rBJGVmRk7AYobMLtFqmUHqQVVCGb2VfP6Mttr5CJRCYLDE2owCQzqDuJ36aS1ncahn9P8a2D5f1vdXA4TUXYJ",
  "key11": "FNwfYwJZr2VE8kttQ3p58MRe2FUxgDe68T6FMjRvcoBrkJWW8u7hA53VgNCUPFDTztt33NEKeqVbYusqm6Si2yE",
  "key12": "9x2jbzvUL57UCwHGtF6jXupHoqHpAMZ1dzmxYW7NctMtnLxG5aB2HFeYEeYFAmSS76UabwYcCRTjEyDHSVozzMi",
  "key13": "2v16hqvLwESNq4KmbqwRbvhd146AvfZJHzavTsHzyyG6BELBapYENdyBj1ii8u16GwpApoG3vhwPM2kfJQ9hkGMK",
  "key14": "3GvzNcFDbw8PJu3eA2KATNJ4AqYjkQoiWJbUui81wbKnufsW5CHtuF8iZMovSA5djks4HNi3it9AAfVh7AzzRoev",
  "key15": "9XK8rzJ3NjuP6x4qtR1721nJ1mDufiJSb2uFAWvzLJyJZws4cwmuSFmCtbYPm4weepHSAuiM8EQfnfvKDtmbb9K",
  "key16": "5TnqusCuo43Br4DTMBurpsHLCNfhLfwbas2p7UMW2xPkt75BPYurDHFPMBRDcZTybAHroKxxSnFvW6sqab9yLXDD",
  "key17": "5vG5Bhj2NiZX734Q1SxSc4bPJuN91UZhFxNuFbVd65HQynTErWVrei7S3smUhmDFdmtQ9coNuzUSyamozDu3GaNK",
  "key18": "595i9Vuyhmi1NW8RTvYBBNPyzQmM9BR5V4K3pC5gajkLwYRNsKmkZZmvGd6RSU6ggtUP776sowq6Vv5FVkYiqrV6",
  "key19": "4zRRZ8Adg24PrUGhVhX392VfGNnAxMtQ19gFUwQ64mYmVnuBcEmEpbbouyAcU3hyxeGd2sMjG7g7yCF5UERg84SV",
  "key20": "2EvAVGodmhurvfB7cDxK32eiSaPEvhDPQZSrJVAFwqpQVaAMKu7WMcUaF9fzwFy9bYdkgNaZDEjcTKuavAF5YszK",
  "key21": "2TwdkMQZRsSei8F1PFm7AXMoGLMBL3ETKsmjEhNUSSTzcbLG5K6PjqoMR2oXF21jeuy9foNXWF5nzhbMneaNzTsA",
  "key22": "3hH1Ymd8HnrGLYJ3QgVxn678auanADBh6tqzWar16Fk5MnsNqnRy2JM2kpSymFwBbmLoBQQRjD2XHpgX7uPsn6LG",
  "key23": "3Y3asWg8W3c6Qf3xAs56CdRXcZCGKovr2vz5VTaDj5o8yUJAKBf823kALtSkkGFR1VXhHcejr197J5b8bi7tHqMF",
  "key24": "2xrNc2PnMu7LZMVwA6dd6P2Myj8XZJCA1Dkwwv6aC7oFUFVwoCGnbXhpma4QC7rMJxTdqBuzpd5T3c5eXhjm2peB",
  "key25": "3nDgZRovy8iKeSraWGEoNZzcb55sKXguKS29mYPAso2x12TvWazXUV6zQH6RccrFKwStgbm2Zipqy1v9UHq5SXgY",
  "key26": "5qXpFhMi8Kgks8BKyC74bvjJQYP9aV9KnCcHyreQ3J92Bbqpu2oc1LD2PRkjQ9KZjBzSXVe7QuVw3aez8wiYoDRk",
  "key27": "5HKonDWEjLF6MTPrBtztKUeiaHwudZBBxACJPGdFvWEhVPRwDtevuZmm87AmaxekzNWuJjP8gUEcwURYtUZYehcn",
  "key28": "2CPjfbVDMgPV9iUu5MxBpFjbNACMhQh5z8xibj2qnjFMjhiRUq3qZwKDngx3aYr4D5Lc5FW1RsmNNB4wiVJxsePq",
  "key29": "3WyVCuGYhCMg85JrJ2obY8DPUiN2ZXSUwPZBYJhmXuWAgVPtCLrzaB5YcNHdxNkhKn8VTSPKKjVcgGCSLxVytfLP",
  "key30": "2fziFDVQRVFmSBE98eKCqzTXfEoYiMgNT4QUGM8b1NEXttFCJsE1ziasUCJ4eqfrYdavypmymdYZBGwVA4aWxQsq",
  "key31": "UjhbJbafUfTpUb4SzqxBsPUvN7aFNg1gkwx3iJvn9nArpfukMFd1fuMkFYrKJbMXycn5ufatdJFTVnjNEskXS5Q",
  "key32": "58WF84Jvq4d6FMJEwFmgahXBnfjWFWQ1dJvg7vYqbpge2BhUSNwx1nRNgDes48sa2zZS7ytk7X5EsE14EMfqBcp6",
  "key33": "2Q7tGwTRxq2BRMcD9NVENrD57t1MqUUi63zjEAfMQLQPBv6tfA9kFF7XJraYozwMLsUbd9MZfYZ58P3kCMsKSdP2",
  "key34": "63yMECUKmfbJ1238CmTEkVYfrANRGQ1cuhYCrJMXE1DTnDLL4TCeHaubFyjCS5o9qSfRokSN84yoN71x398GxKQ4",
  "key35": "2kh3aNawSwzhzS8Q7Y4YcEV93shHUNfqsBDQBeyuKnyWWPU3uV1xgdPEwPkcf5jX5FbjYcEa2XWSGZzWQuYxJNT1",
  "key36": "x7cv3b1qyMkJhfwS3pJdutge4XtZy6mxEy8CzkNgxxqiFc3vEmw4cNPyVTFyVQ9o5LXa8AVpv9jrkxLY923qiad",
  "key37": "3J9VMwm41xFNwXpSvSB8VzjSyyP6Lz9ResYvTwqJZyq542kBa5rhB58rZBKu9umovVkRSk6J51nRTbJt1mnBjyb9",
  "key38": "cdpeubxMBSKW2jTA9EvAwV2Q74VEymQGYLJeEu7enqgntwRgh8dW2jhqtiHZyjnB9kQysdZK1Pr8Jfpe7ef5hps",
  "key39": "mym2j8ZtSwWAxfM2ZSsoUWfjpbsdyDziYfnmfMDoM2XixrCRvr7nBEd3AiPmtcF9piH5h6HQNpJ12ramdSZbNXh",
  "key40": "3gPP4NawmftBFreHuCiUhpvqBWKPKE998k1yege4czgaSNk6SxxXVCcUXbUJiXMaSZcUJUCm4auus1rZLFQJHzao",
  "key41": "2mVGEHHrmAwJvnkDsnVY9QpempdHzwhbbuoLoRngJpjdDt4aJcxjoV8xe8b5mHvC4eDbUHyGuMm7JhRVP7vZk7z6",
  "key42": "3ven7Bf9vTyafBmSBetEqQ4XLzpReMbH1hPQz6XvcRKLs27NqR3Z8ow5WzfezeJu2wxia7uzpXydHm6XQqRKut2Z",
  "key43": "4TKBQbnfnexgNWnv3w7tEUVy5qy4V7aLd3WLJtEz9NkUYe6PQQYRV54VnbQvramqb2pZMAhefju58R9Z3n7gLB3u",
  "key44": "3ZdVrWP3m26TzXpFbEWE67g1hNHT9Rj9HxyHPHaacrTLmQVGqqmqqFVbZMVbBBMc452KfBPU9xSvmEmyceSJERjx",
  "key45": "2Zyc6BPKTrFiweLPvYBr1BGJfhqB4m9ahkzjasbH1KyMX2utz5N13C3eFspPh4AW6c7ZBpcgpL4Ng3eauCBx2EsE",
  "key46": "3scAf4QL97Ypv6zStmhRLyb8ybfWZYf6bBuf5aBU2ibfNFwj7iCrFDaQXa1Fut4ZbBHtD5dCxfADBg4KBdhtjnKr",
  "key47": "5rQQjGV31RFSj5SvEuCHUzb7GmKjtDcCoiYfK5vkF2pr38vYzLCaka4boAXmEMbXaJaGd6S6fZmzuopZZKgqYU1L"
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
