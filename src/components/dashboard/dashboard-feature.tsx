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
    "3nWtMery8AYMh6Vkwj32Y31xNWBW17uT7qv52fdiFTTPVh8vq6eBGT6qiZXeJtZTS8uqMDcAkk11ciBNgJS6G8DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D4EWPBfhdvDVN6tbkVTXQvxHDDRTz8VsEqH3b3R6rtebxQaqd4MtxtzPRF61FJgMKYqpE4xmMoFMQaMUa3Tr8M9",
  "key1": "29TD4x3vu55W1Ud2buono9pytLNvvMDuz4AGpGaFFxVPsxZ1s2jdenHNtgkEQ81TcoveHk4svCrYKZXaXKGGJmyg",
  "key2": "4Kwswk4jFA7yrDCReATUsGsBukHm8fAymNSMEbFjmC9ZKwX83s8CZiSnyX5RC11Mfm4R5dMhVMRxL1E77wAEF3SF",
  "key3": "5iJqu2HfGj5Y2J7kVy8HktQXJcbGw4xfFQ5aRyWGbPq3B4S1ccSVVCqL68msbsbPanMHGRDkTc1R7Rq7jA5e94MJ",
  "key4": "5idnXrzkYYZ9SULimhLRh6793FXYFz35BsB7QEcvyD67wDKEXbDG9kQU39W4mqY4hL5y6RVc2dYHiwPouPsqiW8Y",
  "key5": "2qyq76EhsQBggazQQxDvo3qtiX7Z1XqLvevCEVF8Gop1McsmYMhyD4QZzSLSvEvj5nZ5hJZVJqSemtFumVbBMtCF",
  "key6": "2rfEwnjhmcp7BVjtr4rxtdWucbktQ2esHXnMG9MsHsncZSSVCw96qFZZzDaSj4sFmnKUW8ex3uM5W3yHbLyJ9k19",
  "key7": "2yPNF3PEgFfFxE9Hi2WpGK8ns8UVLrpzqMz2t7Sx2qUrsk5iWJ7FfxCwuB3WuqsFftbaoLjBuxfcUutSXP34QxoW",
  "key8": "2cA3CwEFPuoV3boawnk49UCp9LZrdCCh72i28cjcJewGzKxom3FMifRgYkV8qjqENHJG6qoCXoiH5Q3b5nWeP9LN",
  "key9": "4UHpwNMdecU3NL298QzBQNWXAUyiJWmNZeLawAotC5SyN8PcEX5BEqi8seDHgcrBF2rDE3xBCMY3y2hYNBKeVHfx",
  "key10": "61GM6nu4mUrY2Nx8Fdiom66f7Vi6ySdk1Vd4nS1PKx5C9yXb3j3MEAQmf9KzvNwnUAn8UpAhWgdnyY7z9neJmJxk",
  "key11": "3p5yAhBXvs7E8wBXvXmFn1b6cZ67w2YHVQEc7yF864Ms9MUaHrXnkmCSSk9ppGfTheoUU2QCFRXR756fcN7pL1kS",
  "key12": "2L4Yj8C9FUNLj5i5bbb2mzG68HK4Ypf187TGuXj56zEM8dKu9Wqavo3a9MmfpcfWbod1j4iLSZ6wfeTKDSa7n9hu",
  "key13": "cdD5kx4J2xeDopoVgp1efypr6pFcBTu5BAJm5mDrCrmttvGXazdGH7DqxAZvih8yekHN8sRj15ias65rGzr3KdR",
  "key14": "4JGBSNey94F2JD5w2MK3ewJSHGrsdTwGFiUothF4de1fWYusyWXZxFN7F25M5LNEjkrpASjBWCSz46yJryLBKJCp",
  "key15": "2XczXQ2PJX1JoXPdQfsJxVuNbMzc9uic4Z7u9Z4D8JH4qKo5mCfcXBxet3dvWf8p1bn9VdP9PMKntsosjXaQs5Bq",
  "key16": "Ehz5h2rD7f1a2kkXf3pxTVr7VFVdMwUh3KvdJT5TQ1FyDsDwAupJhbExdr1bDvVj68zGrJKYWu6L7qQghWCX7MN",
  "key17": "4EXLB2d623hhvQuPpprTP4v5yCHe2JFGdcS3AuCsQFjccdMvr3MUk3S5F1TSLQ9m3v4vjsh4jevKXc9DrsjJJ3wV",
  "key18": "26EHRbcWHRe9JNrwCDpwhoJTBJNLAbesoN6C5oViDbqDTUd1j5MgjRZmcQUxBRFs72xXs6Av1NxxJjscxwF2W4gz",
  "key19": "2mhf6Tww2u12GfpU33pH9tdSopBkpQkhbtS3JUjspYKU5CPLfGY16Pwp293amUqZcn2kwBUJThAW945HHfPrTNz4",
  "key20": "5ts6kgLH7GGZWGpT4i7C5xyehjoSQqJRa4ra6aSduFyuAADTXakXkdBPJxPkNB9EgWseJ6XpWz2cMiBm9okG8VLW",
  "key21": "3ErtJqFuK6WhJ5MHnGgTqCuTMG4UegXaSaWVtdfHe598eBY8vihCc1mrRaivhmKZxS1AAWBzTTvgF5YG86LEZtZZ",
  "key22": "5tCMSEM6AXMeJPXAuRRKx7tUYodnB9VmXdve179CB2dZwvaknREq3cH8RBMY8wz4KykVVUoDZc53gTnZp5iU6D57",
  "key23": "3RNWuxFRyHMLcQFJsHtoUvDQBT1fg3nciyBpoFdmBiDGgjCoFDj33s2BPvaGKBn918hmhse6azEKT5ZoFU9cx9hF",
  "key24": "3fxikq9utoD44DP5yKpvWtxySKzaFkTmhqiRkCTjWgCc2wHAfXj9raYdSo74S7Bn4jWrU2HGwVDWmdVPx7mkxJVk",
  "key25": "3ipS4gnZYVxhyAYMSRZrcprR4a4YGsN5mCXLPLzxZFeu6xsyCZKKx91fjRvyBLtLaes5fdDsLtWHdiM17F5NrSAx",
  "key26": "2Wcc2RPsgF3nPJ9imuzcfFf1o4SCLsc2qUCnpaB3t6FV7cT4DSG8R93UxabUBePnE8ZU8Rdfv9MDyxt6fy6hzoAt",
  "key27": "5tdN7xbvWtu2ZSvuPSzME57mM3Wm2GsMgfKiXARAyqLAPE7VqswU46WZRibq6EPE5888KgjpoWR6ZrZX3syBfYrH",
  "key28": "DkNcoWwVfGrt4S1XUzRHi6vX8ELai6ExTm9XPARJoPVdf4vWM6E6qyuU5tuY5cuQJa6YSQkPEfvjokrtvGDu6NM",
  "key29": "4ZbLVYpUdCzBwtdc3WpryMZh9KgVD3icULiaoYMJLrPw6Rb6GW7mqLtrmf2Y6BjiJVBEoKhpD6ybPmkBZC6VTZHx",
  "key30": "5PkFDHWz7T9i1zjXH3z5KFNnbiP4tkC9a88kcZUZdEwyuMwofs5EsfxeXEx2oYeXrLu9jVgeUBMivX4ZCWhALmNe",
  "key31": "8jWPKakAmPeikwPo7TRKQzsWVuh23xj4JPXjKFRuHRetPJN1tdbTnc4ajprTBEFwsjJKTzVLjEZFSxfyrpjBEvR",
  "key32": "3RaEZewn2qBjyJAGuGahCLvqdNm6SZsQJ6AiqeH6mahJxQX9XFbCJmK3aUYmUZwReXJuxngPXoTkqgEHLdMULtBx",
  "key33": "4AxkBieGfpgxtyzvkoKEErpLrSxZQRJUc3NgMdzj2VQ7WaFx8BWhge2wpbLZxf8mk1Hzwscie2hXUCzU9Dy2vpfw",
  "key34": "4zKjBtx9TiBKRyw5Kio669YUMmqtxDhYfRgxFBkkmsZCA6wVGvvGfX85ci2VvPWkGM7cfYv7E7dVrUZVZCGYURrM",
  "key35": "3faCpE9xvVgq1gPLCTvitVba1aGZ2SHrJ5CykrGuS9J8bBiUpvKXjdQaWiAAzbVJgZ1NjuoyU16fLM2H7Y5Wz6h8",
  "key36": "5CjUaxB4FNBiG7D1ia5oAGXEF6TWis2dqj34akXWZerC7JFBiPoUCRYw5h7UFSx4kTWe3Y9TiJ8gAK2wfhcA61UP",
  "key37": "fkyXPTeozXT5SwjfBPtoQtKBYjft18K9dJrHzut2Sk1UPtApAn6GtystpboG6rkUHxoaXx8YRdX1m6bfskgtc5i",
  "key38": "4jab3YKBGUZLj9gKU9pTCZiSxhgDRQwP3hjUyqeh2pmZuGSFF54acYgTksCck5baHxz42rJTHQuN5ukRBxZgkTY",
  "key39": "5Mbyq8Gw947ZGEC2d6qoS8EfTXoCkBtwjyTFoU2aEPzLH1vSsNqzKkm1WHyzSfAn3P2JJSfKuwaBYNv6QFwikJ2G",
  "key40": "4fw8fJTvtoy6gWC6Kqvz1v7fTwTy8dWSBSwXbSh2P1M3TmDpKkPyjcbtWvHDSqtFjxCmoCvQX2jNT8jA7EBvvE6K"
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
