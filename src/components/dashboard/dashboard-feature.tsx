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
    "3ik6HkVy9kDpNar1kj1YwNjaPuffTL5yjnAbcYdBpRPBAayj3Bh1BY6GGXk6enMweybmG5Md7p3wGuyJJrjcdkUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tYRC9kfouZn8XryhjdsHhTyoRnHq2RPvbpmjVzx9yBFUc4mTqG7PnRgXSqYVYdLaKFsbA5CpHwsVCvN3HdhByTs",
  "key1": "43bmNw6FQxLPus5xZjuTysLQHaVmJ7umX3yXYzMHCGvQB86Ryobc8UWER41BbJLw6Ksti4kWgq2JmR59ov7dkbFn",
  "key2": "41qZRcpbgRQesD3yCjrcsmwxRntYQMW6SFAYjQ6gquSb4iPgrrzHCL7yYK2XvHEULnaFAVhK8T5ingEoG5Q1KU26",
  "key3": "554gyvXqveWQEg68XNecyqvy1YajGo28mAvAL1a1VcygPYvpJmFR9E9NKLmEUpDnVv9pWqzHAEbfLAndgCPGLXbp",
  "key4": "2RZNAQK8zZUmLAyTgD6xiUK3WTZj61kLgJWUrHEu4GyAAK7hQsdxMhTqN6LFA8WMHX8Z96DLN5qyWbrzxgU5Ykix",
  "key5": "5XPo8zv8i8Qq8C6m1D9iSktQESxx1QKSL2TroFT6Hx6z2aLTDQekT4pvLCwfUXscr4ttQDZMtjQdhc2AbdwnyZzf",
  "key6": "5PrCTyakssnUztVqt6qSvptgcRHHU7pTHswnL5KqXp8TUs4oBGmDD6pUuDPtX9nAgDRApReVVsWws3hki2YXGJP9",
  "key7": "3VyxFHUrS97puqcdi72VpA5StTVvti4jE4h8sFUBSmaac1ZDc16iMhAXLvMyuX9yXqJbK1cCcTa4hCy7C6DMw48f",
  "key8": "2sh4s6M8NT7kehaENHzQFEbBasw99Pnkbyw8xSQGVeMGr1dipxosQm5qMM7Pm7udbuFm7HxGGaLf9tkEbCZVmN8B",
  "key9": "45Wn3EARD9oSyCFEVfqA2McNZ9KZsSbrxBgSaefDStvaoYqEWj2QwPnWk7n6ny7P44pqtAdxFKNHWZJufZ1Nryoo",
  "key10": "4u1VZhwvDVNoXmiWpkA6KwpwAZwcrKQPZ5Z94EgrDoBqgPCSxeBkHoiWMsmutz5GMJwXYkmuCsUaDr6J5uVWDP3j",
  "key11": "4bU5sAdofsCCzmbbeM5nBfJAE3y9zKUEdFTNfT4a7GbJPH65gEhNMu94W7ySaZaxAf5RFtw5PLLcDvjpe8GCmcUV",
  "key12": "2QtL6SAKpP7J6yLPNXwF9wZfeqR3cZA2VZ27r8S6MgkRYSTyJ6Z624LKRwzbe1h3gfSmBZoiu1CVBybqQF7G6Fgx",
  "key13": "3dW8PrVp4aRQqfuzAU7sFR3RYMrAJzsoYysfCYHWUWdFxmJ1r7B3tjYdZTzBp9cTiBgDozs9GB79nRRFkzDvkcns",
  "key14": "2afdUQquk9RPSmuFhk8Wr7yPYqL6xN1G75CSMMnuECD7j5cBhHc5YWLXhm8Ma5xr5po1auPwMRCrq96eAVMfHdna",
  "key15": "3de1sopVKqaJN8vgCJjjbxeZwz7XG7zFdx4TRGedGZ5SKv4Ened6wyT262u47gutqV6EfzTKHd3duihHy9BVd92q",
  "key16": "4LyK7jmzvh24nWXxwqPYGyzhDLwPxY66saqQmdJPvioD3HmCWtnDDViPVuacyN6kTbrEM4bdxEreDSRbej1ptB6m",
  "key17": "3k1bJTR1tnDZighnZN9328jjBQvLzpxfs1nntNWaW4K8Mpd8KtL1bfGVKDRJn6rpeX2DCNdnk2ALSgNn4nmeuEYJ",
  "key18": "4iidr1AHAKiFqcWBBdzSzEHPV3UeVfcxA9WijDJTzS6KZJTxHXJpLJyWnZupnX6RimvcaQnkKjxJhxqehvJiVxKa",
  "key19": "UzxH92k3kGvzUmTzAcktvTbzunsHD14sdoHXyW8Xk4nQctnomA85N64aswm8RJGc44Wcuz8Q7GVBSBYPra4iRHp",
  "key20": "5SUbJ8QWdzvs6uTXktBthWsL7vaV7xkmub1AnHhJFhSsg3yyxxN2TgEe5fRSo8EHm2WxEE7dWenxoB1yYSp1SzHq",
  "key21": "266drZAhxXxqJAXzUyfpaZedU31d6BoFBrLgxc9Kaz4WQyZvdxvqiAfxuYi4si1wWFrpDj4TRDXaN3kjdYrD7vfN",
  "key22": "5r5qjRJdy3BXXAbSfKP3oZhrtyiNd44Dk2Dddun8N79q63WUJCY2o9SA7sqjDipkFRibDBbRqjdV86uTb9SmUAPP",
  "key23": "2CEbFD5vxW2bCcyBG8vT8BCkvcsC9jPrVCFR5DgdbTsHU434qYcqCcKqisFWXAtJHQVRviG8D2CfFfXLMWU2xCSv",
  "key24": "2EvcxvMRg9mKpayaFVo8U92gdpFTQMHa2vhcFi5tkaVi5o6Bm19oTuSGLcyo1uFCsqNLFNap1NYxt17U5pWxrG4k",
  "key25": "2UsXGrWjfXwhqt29G3a3L85zdm3yqft22fewCj4dZqCBc3sGc9gzDFXRit8dbGnnsfMYVM7779xCV5LAAVKCwB2M",
  "key26": "Z8vRus83FGqjnspsrjdVZRH6NGgsmAk7VgiDhDPNhgJvXNKQDgoH9a7FPTNw4nUzzTmkHSydqTjqPgSt6dL5BWU",
  "key27": "5GzLY53Kzo1mKMp1eLovQjhmG7MiohRNawb5EDG6fAZeXS8VdonTFPDDbmX1bQdnDjrtqSHLFL8zEgNsD4aFXJe1",
  "key28": "48aUou9MUrLuEop1C4kvuig9ycrVYQRxAbzUSnA1jwqXaeYxLETuFsfyMhUcESwfAQR8AAV18bKrYziEAsvpLyis",
  "key29": "5FkdiUaLUVaubHWCTn6SaPsnHytXZMuG9bc8h2XaGJT7jPnPUgNX7r1YSCDNvyQuGJRtHijiU57bz9J1gs5oHrxt",
  "key30": "JH2EVpKmmZpcqvzVUyA4zAX6R1Pn62SSDeJZc6MfSmfsP3phDzZrTFAfeNYQywuuALpQa4cjCEvQRnFkZmPbZKf",
  "key31": "RajQkFW4c8oCbR95XMmXwG4Kh2tAqBUdRuNJYsKdjxE2Nd81bDMXnvV7n7BWy6iku1Jq86pnvgwUChPm2uNJxZZ",
  "key32": "4XNnfT7BDXt6ew9rie6LzyLhzKyCXnZwY5V7WW32A226X3t2AiTXWxs8mtrtwCSzLRdNUEEgvCGVVyqdqU7RhT28",
  "key33": "4XtNjHKrHsHPa8nrvgovTxCiYn7AKn7QV6gkk2FTD7fHEsBGyNm79r6oG31MABw5fQB2qyagRfZJe7G4XMnzExoL",
  "key34": "3FSe1zeVHSTvWmpxrDzDUHqvceKccyVEwvfTfYpo4miTGFuM4XKa6AWr4VMsL4x3Hv5B3tdksvmMnEaaACqvZ3Uu",
  "key35": "YKugazyAFzx9XTxgRpskJJttfs1SkNXgiW3rsTRAtGoprymnqExADkMyXBjnoTjz91QfS2pLRkaH1aG2oJbvExn",
  "key36": "4oiA3Bk7auig6RgjhMbBp9pQXUyTA1hJQMigyD6Kk4KSqbokdUJ91SATQJ4muAsQDJruuBBM4GG7Vgvzqs93YAxT",
  "key37": "5pZa18FG33SPAhLRYmiBJ6aQBNQNfXyRXQsMAk1RcH7EW14suBfNk54rpsnRGG4tgDtk3FPwqBcP8vgGs4d5JMoj",
  "key38": "4yt95EewJahfxBuGhcQK8TPAF1GdWD5qx5W2kw1YkHv49ACe4rAswCLDe1GwPrtABZ6uJL9dBdfZBGF9Qc5Uy25m",
  "key39": "Q8h5kL3VfBToLNR2cqkG83Btj2mEv1sK2epfhjVvyNgKFHiUqgDBs7u9N88kns2g9GbFqPhkYsFJ1FKAYRGiQ24",
  "key40": "27VSDgpKJUWa98iQGQKJ3uJ6QCzajqTwBRMA7F5sjeEjhR9swhUFL9MCyzMQCEXsm8Jh1Tk4mp5DBKJVWNU41o6d",
  "key41": "3Zq7DJNUCJ1AfjbTGPLVn4mqC5NHaZdv6z9TXiF7Q1xpSPzKgVJCKGdRragCrWw3CmsTTa2TqmJ2UZvMqjmGGDZ9",
  "key42": "3tuAHMB36MnAaVWMA6dTfs6WisayhkJcjafHzNu8BAAgoY3PSkeeBXK787J1t2ZDBozzPgT6gy16zW2SMb1Kat4Q"
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
