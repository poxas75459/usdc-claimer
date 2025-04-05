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
    "5j5RGp8XrxPhW1ABzjCNYank5aYCgh794NGTHfo8DdyWMcsc6ofwFAoQpQ9NzDv9RjHXBfcpU7v9RRj7gPFggdXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27sbvqfNwbTcRVXsHsxtWqjjYNxCnCvBiMi132B6vnVD7He6tQWtezYXnYTJzAozULGd4xw8SfmNdJ33wVTWfxGg",
  "key1": "3u1Gz1sYfJZWZDfpcvQKV8JkH9sHc18P8fpfsMYqhrSPLgEYgQd52Ru45WRcTuZ5WmFWAKGGg8UQFgZRQd97yfBP",
  "key2": "4ucNY7tyf5gDs9v3cLrnQRREPgNv2tAq9mTJPLacziQWHRoNyG7aygDcCs8kr9EjxRgGEZ2QJ7B2hLEpfmP3AQfe",
  "key3": "33ZRoiVrA9SDG2jP6JL4kwoG2XxR3wh6EP9nqhPnxt4QqvWw4maaro44MtW93cB14fWAF2WAEdAEP6CCnVYMXFEv",
  "key4": "212fK5h9ptQAi6zgq7pef7iVJRkrLaX2sm8MotwXsDKm4ZvtJqNH52wDTafFpfC4PSqNNjnACao5jv7j1q3sjAFv",
  "key5": "2M5DdrbkKMkoWT1xrdkCucgozCmpVUNGToEZnKsZkp4SDERXsrF11d5NmKtFyge6SsGFoG5CmFa3HcB6fihpcZU9",
  "key6": "4tBXDgUvC6uprpd1JkbM9R6PtrD3oUu7vganT9d5mZsjYYhAwDrNcqFTTwCpNvzjsk57soEh3fWQwUvSggA3nv5m",
  "key7": "Go7A5ucHDb9MpixfKFKp2m6TacEtnJPK8vQQiRqiRNLXyTvHB7K7AdV1uNNcjDznrpdHsWKDFsbnBhoccrBMkYB",
  "key8": "agvnMSVFYZqhJm6aEQwvc7fMkUSPzKYm9K5KirHoX6ww5vXZvFbnrEA3fTzNRosmkVbbCqiP4KuSZrQhEyeejhE",
  "key9": "3tonmgALesrihTjB35j6G9xdUSxJz75W1ZubgUti7mXECuZyU1TdQjf8xi5GFHn54eWqVr5xmadVLg7bQ6NNk4r9",
  "key10": "3Y4SZamHoKp3rapqA4CWXGAKN4EXCWb1oRkcPBcrBgJ1HFUyfetp11Pyf1VDazLtHeREzdJwhju9zhMmvYF6gwLr",
  "key11": "4uHdnU5jxai6PmupS8r5t217TYaoXje9J1B1KrzL4HQdw15zbgGbkUXVJn3BrGss7YzapowiUAYGr4QBB3qL5nkJ",
  "key12": "49mCPKdgiXAi1UiyRFHnomLP44rJ8Mtf3wXTGbtU9aSib6qJhgEbhDUTPVqXvzLViRhMxtdAbLRZHAyeF6QkTrA2",
  "key13": "53uyHBxJa8wsdA41PPAfMJq9aWXWCALfzjLfZkPQrxTpiU26T55GZoUsH2c9qFQw66asu7XtrgcaQzHdXmn8RHxs",
  "key14": "tfu1rUrz1bY7JXJUKe5KEtPhoUpf4EgttHB9FSahXs8gUkY14BzctKCPmAEb2U1ywGrgYv9QrLoMqcBURaKAqZp",
  "key15": "3NgrpeA3uKq9Ya5QDtTovohLTTJ1g5Yqw4mgd86MaBvD2mwmf5GkPQRKQcYLomNKYopWK42PrEpt7im4SpyDTtGc",
  "key16": "3m8GS7qXnwjMiGjNW2kFCq4btppUuJMt9nrLaNrMoU83cHckQLnnxn2gxJSpXasiuC2CT73fseuMGE32QG9TRMyr",
  "key17": "jnnKHmNJoLAgq9w1B4jNYuMZVS4PSNVU78M8P9GXeWu1RopaJqKZKbNJVZPtayaXX1dhNsFWM5VRyC1JWqKMjB5",
  "key18": "3sfU9mEqLchiqAbzpYoovzH12Z5u1VR7WPav6vSxfbFcRmpp5Tw6A55j64Dw7T2VyWN59dgskSogBkeqQQFoR9Qz",
  "key19": "3NGfmzPwUWCjvFqyBgPNaEZQUVGcdAxiJnrpdouHHUKQ6KREofRJzjuZAkHTWUyME9kJKJXuDxKDdvtjWMfu9a5g",
  "key20": "58sZbQ8sdsAppio6X55bWwY9qELyzs1iPqZvhVZQNP4VxkxzjFb5quW9pu9zpERh8ykDd6sBUrPg9Evu6YzbmHJg",
  "key21": "4rSnc9vxrkodHL93tnx9AA7T5G9VD7ArM9ffVK9uxrnvfTg1vxj7vG1AxTHcrCirNsmc9FchYbp4Dy97E7WpSXGB",
  "key22": "5ZqWNS2nSawBH7yyMNnujHxaZGvaoWRcFM3iZzFuWe5MTsNU1Sg5vWbo9n8soxskZRfDpCtwzANqBKm5VhmjMdvs",
  "key23": "39eFiSoXntafPM62s1DWwRgaKDBgUzrb52bCHrPWAa4KTQNqRZkhXcqx93Eg1atfugfwnkg9aMZUwEn1DT7SUsct",
  "key24": "36cVe3YuG5wzm1wX8QnxUgFS1VxnNmPCmMRERwWn4GiyB86mWuuZ57cLXoMJuXhTuSkmfTRyrsQV9fQLqdxLXNCF",
  "key25": "4N3v53iC3jmKUX5fVRyJrgTWBAetf2FeoEtt4U5KzjS2nECHSVqiybZvWLXZqzMAqNpV6EvZnhBwh8jrL4199PY4",
  "key26": "rVpE3jyBu9V9xCnHPwTgDQtztH3CTc9EoQRXydeG9EKuDukSACZPSfoE9hbnYR1NDxVjMtCct8NwbPR2ZXAmhut",
  "key27": "2GMBf7jKoyz1QC4L7gNoEoPnUN22GDFFgwcdh5JDDE5fZfgg4N336hy4XReU5zqQMaVHYSvsntNSNpMqErFm8FDP",
  "key28": "Z1VZsU9XyY3o84vB66VT4iNpYdzCn9C165W8KhquEX3RvfFFGuHyChLbPFfQzZfZ3nBymfJeGLsA79DKFn4ojYu",
  "key29": "2VZDAXHh87eMCmdSacosrDooLF1K4gPaHXAZLHkgChRyk49RWxxcAEs8tkmoTFU8WNR67WrHCiuE1NwowLgobfaE",
  "key30": "4UU4hWCFspZhpasMz63QV6aYzwbDWKWr2rJZxLPERaLQWkrTdcq1t2NMyNN8pnQ6khqoEvLDKKqq2H9ksfmLAEtk",
  "key31": "4j9Fq3gHK532gK1JNP5FUvE3JvdXxqsSEZMiSLL5bTwiS4noMRHLKfa4ZXvNQ51UBmPDduzxVL8A5h4Koh1qy63r",
  "key32": "497y2bXksFcpy3nzUGSsop3iswkfCqoEkK6WZtJn5uZiZX55iwathYhtsvzg6Jta8BixCqq3ySpGiTRCygRzZxwo",
  "key33": "618knTNb8mgpWHJHkepSq6FEJWERiMvw9B115BAt1KnUKTM3g5PehYMjhYAVBUUWr9iE9oqwzWgxwCsd66txm9iE",
  "key34": "4QvUxcDGqQ6uAP9h7JaCvQfszsMktxQ1fioHpar3yHgcTV6qLdcuRTNBzDC6z6Jc6wZxRK9pwUfrvNCebJkckfnZ",
  "key35": "4hcgytav6oTKGFx24QSHwYhqs4CtvuugyJHcMp81o5zpfoPVQ9PQ9kZhow6aYbH2WCdjWKggKYgFH1qqEPtkyfSf",
  "key36": "5ocgNK3vEtqvXi2bMieG6HbFT6yuiTLQ4C9FVDykJqHDJRammvHTkG1kPMkkTPnnWPgb52XhZiQpJcJT9U1rmgyh",
  "key37": "h2LpBaU2u5xtSRPMqbg9bdMtVyqyh1xXhPjoJNi2e9dfdrf3xu5TjXaqFhReixQTuYzzgJVSRGwcMc3WbHq5tkL",
  "key38": "2qozpmnExCq73UonJNqx4YmxjeTPdWoHqYyudPqm2yLLbrRSHjrUFjgsSTNWJ3m1AJagVDKjZVvtEi7dFcciMEr4",
  "key39": "5WaHjeqcoEY1R4PL2qUsxLzVJ5ramSKjKEhnRFwpNj1b4iMYVcoEiNuUKz2KzkoYn87twsDD9ANZ6g5LToSL9mrb",
  "key40": "5L1kKpPoBzjD9unYfb3m3inZF81D1EuDPMewnyLMgmeWENYgTmQv997H11zGdUbAGihypNtQw9TjuYZ3SRThENvz",
  "key41": "2XUzQcRKRLYURQGdMePStxNdGLP95ooEpgZdEHUxnpPW7bCRHSJUpNTvZkBWDrSQCvd4DM4hpQM6R53TGnf9bGsz",
  "key42": "3rM2Aw3aPCrCZ8B6PmF6DTybfVjdUaD6ukTiQdfWNEAmpCgeBnhj42h2HQwPEGSequrcMhvtAfw9xwZkcnEoFLks",
  "key43": "4VpuaDwt3zudbskbDumRvrTGeAcsCLHXZMe2RbF82YShfWKbVb8g7UvfZMEJ61Sk9q6ygUHdhrQMREJYdzALgHi",
  "key44": "5pCmFRGptdicen6tVfhjBRQWxD3nXxpruAAnDa3ksmkXweCMMM2CTjqYmGeuc9z1mHiVpLMEkVnpx4GLz8ZXbnXS",
  "key45": "5PAZh9JGYdeeHbforRnvvKG5JFHJRsV6sNGfr4wSAs7BxdBLEQihYRcXkxPzrVn9jsHgZ8jJLQqxdb5mTAxK221P",
  "key46": "66jcKeiKW77urytPAxaXoHAXaVqHnVT6SRRAVuxrouWVFA6sCPYnJryFSG6QgitrU5ZuTT1ayPvVRoY6PD39Ha4y",
  "key47": "5HLs1WjT1YcyprbAQGM2bKWhK69niXW2uDbWmEeZYjF5VjwZJAWEsa1jhsm3azip2re2q2Dry3VXdD5fxBks8PUh",
  "key48": "2MCx5Ko92jaUmNQRHcbW2mJE8xhzmuE81zHuadJgD8YCtPGU6s3V7D7Ckz5Q4RR78aionkdP4gM96HR7eT2fNt6x"
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
