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
    "QmKsxWkPuPyHAfedRUkbHjB6pZY42ELBQoVHCEfaYEUVV2hqZQPSmoo2f6SU2tKmBtUm4fXjx1t6yJraYq8TSGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QfxASzKr2c3zPX8P7Lco5WP5khEPFgWqawmRzqNupiTu8YymNAvFoGCm7EbHbBuTj9wWaNNJJKpmaXNdKCzdhVG",
  "key1": "4kkqeUZcFNAP8wey7kZ4my2Mz4ykrmpszafKrEDuFeY2YbgRPfRfCq3TJQzHWvt6ip7ecXM6iJAdSnaVocHN9Enw",
  "key2": "2yBcJmUAMSuP4ezxygjM3UiU1zUnCdyZUS3161RdmrV8sSimdMTvpY29sQkg9XamsS63J7qjAbjPm9869prnXLiN",
  "key3": "2CQPSfr3xBWSs2YAaZmBBwsivQVTb6j82dXT2mvNu7sdS7KFkAJhBoAewpmsvkWfoqxFarscB4UDfytLrxfvgYNB",
  "key4": "2deBCtHjVUmRC4teMXQmGnSkDG8qJjdLcyFCh8ayvMrA4mAZ5uCmtCSVEXFR8cZ74Z7beYRqZSpGGraBPRybvewF",
  "key5": "w63CBvZkTpqEwrnJdjZ3VSNwtRTnYXs9M9iS35YKz4tWJYCpRhRHwcYv8MJMrmcDyUBLuQYUJZTkzaPtTzUakck",
  "key6": "3vrxzagMxpPV4qbPyKfhjEJTkMKSoJaimKHsWufy7ohsJVz9Yhr7Dhp2W7sBpYZttCoTbku6ydhT4uWR14sc6rPj",
  "key7": "2tApa1MYnZVGzEAcJvGsuncTyKy689nz2DTWZjQbjTmQgipk4HegyHjUnHCUNGqotnkHiZ7kjqYQTEyyE9jwR7C8",
  "key8": "jKeKdJZijQZtmig4JQfNBu1HBtd9RCd6Me3BsamJUPQBE8jPYdzGJC5BqVRNSAUfe2Qv3ZTboEzNNu8vqFMGQqV",
  "key9": "5R8fe7UsBzQN2RZa6ESRnG1GnZJDbL1mkowLZMhdog8b6zvDoHNotZqHVHiG99Tmb41hoPeweGVkDB6uPXSdzzJV",
  "key10": "4GGEdDR7LvgzCDeEVdCt3mH1ZVt83LMYuCYnGxNUE5bhHQMhLRrJJxP9DKML5UkvxaPYUD2qZRJzvGMa7xAtRco5",
  "key11": "48yzTTNi8QzLhPRfCHcK7Umy1Ae4vTb3Tn8KezVmU2Smw55YXkHCP5Gny9y791CqQUpgiAAids74Jzyc2s9TCtxX",
  "key12": "3i6SRdoH6KL9CLNWvVPtn63DNY2nZFJnvVsKY1EpJ5SGFUJKZ5A6VmcYMkF6fSDmEKqj8CSfxpY9oNqQhA94YzCn",
  "key13": "36Yr3nZ4rQKm5tX73did8TNk3TYcyhwbunZxFKikYA1XTtjoWbdJm4gCyJNQ9SPhGut41roHNcWv5fGhxmPw2Q7Q",
  "key14": "5YUgEqimFvs3FNv3seKHfTa9yHixFgeXKEmykVCWz5ya3YX3p2ziv8yRYgDouqGak54PL8SqvEha1ZioX5Skpbwd",
  "key15": "5tZmxd3NJbHpcJs7rjtgCcgc1zefVxW52LWJqaLKuHkm1S2cjdnEFDfgHEqCz2XHSmHMdEtK2yQwQuP2imUNaeAu",
  "key16": "5ahy4tmh2pv1cpryUyKGZkUA5EERb2aMmfTLwGBBA2L8QFMY1ckTu6RKhnMdVreocBG7ykmooqEi93weLE7hxQgp",
  "key17": "3vy2Meu8E2q2cjcpQekKzkcG1jkCYYQvWFWh8sAdULWG5L14fdT1hV5J9T4GY64f1QGUAE2bi4BvGCdFoRZVddqe",
  "key18": "tcp7vq7upddGwThL84gMUZkKKiGwcgSS7cAiLGYLbHCKax71G7t46zqRpvDe5pz7PJo2zxW2284ctsPbL8xCUui",
  "key19": "4erwn8FCn42G6e8gfJYXBDQp7TMPX6hkpNg47DmGG2rEBfmc2PLy5rSJxjK9TQVYQ9AxXZiM9qpsSwQ7y7p6uByz",
  "key20": "2ZM73gFk9ErVJENpkvrD41smauiYd7NAqwX5167hVWX2LK7NEEU4iR8Y7ApXsVLy4YPps59Yw7ydHcFCbcB2iSNR",
  "key21": "24i1c9T9BCAYbdHMg1uBLsy6PFvbRJnKyUFW1gnoa2vP8xyVf2YkL1Zkxxc48bnjMMMZBjtnaH4SavyLRe9wV8Dh",
  "key22": "DzFdmaU76Tbsx8dVgxuHffTjrhuYTiXFcMVVxpzkJiixRMBTxuXYNPdd6sq1SL224YYV3vTcEbcMRVsRm19mTio",
  "key23": "3awxR6vmzRsnwSv3Ve5ngymPyEokTMGFExt65s5VWUZxLiqPNMhBugwU8QB1KwVWe3k81J9t1CuFA753HCidd77v",
  "key24": "4rSycDUC1KDsUMmQa2stb65CVVKKkghLtEVwi9udf8jsQKjNcWW5tDmJEaF91bJVJfbGjyrkpUdygnQgBgkFzvhT",
  "key25": "553jqBC373UBpWqx6oc1QeKYUdr3fiRR7i9j9xXzUgdNaMb8ZhbGrb4jx3aQtv1mLUtQuQVSiZ2VN7TJq5ahaUjT",
  "key26": "RAZdecZcTF4eWLKWdfrUCUxtBK62tnMA3vwqFdr8Z3Mzytf83zqRsYSdUFjbGix5ZY6Pv5WF8nMVhnFkAraLcYE",
  "key27": "PjQkevdAdpZzm3LcMs3KgtTYM6B16SHmKzqUq4DtWewVcAcLYzBRTNYyR4PnuFqdk9k15Z4ufeysbhPLUy13Lm4",
  "key28": "yeFL4mrnMuHZQA7uM1vYnx953x95hNkU37gcGFWLCwcDvuVYYSus8YTfpBJ7xxeviT19F6e2djngB9PW2K69M4n",
  "key29": "5hoBkmcQRKEMRbMwiyuBcLYyerWmToiy4qVRsTVuM7j2TBVwKTuNcRug3jVXq2427e9qzxk6LrB8Y6qdn8v4hBUG",
  "key30": "2MGK3Ck6AnMFQscYrBxzXNkxKhFqhxMj7UKbeQujjCDRQqs5sz6rpsM5mviDEfXwvRiMxyYhphDqxEEzcA6mKq8",
  "key31": "37Wf6Qo9qDyYHFaAUQv7iPMaNfF69BdcLjUZD5qaWtpDi8nnx27Uk14r2FZQfSGx4AJ6XfGYyuaZfwZyeR2xta2R",
  "key32": "526dMDcPaxAePthh1NeisnHxtFWUruqMV6JPNe8gBupHhYQWk3AifMzMkzbwSZPCzUG6zYXpVVhAMibyuqfj5xKu",
  "key33": "4xL8YwVG3SCAjFMH21hqsqZdyXtXXVdyN9mKyDzoTuxskTZhXYvWCZNh279KZ59yGfvKzZMchf2Qbh5LQ4b1MkZo",
  "key34": "2M1vjjAD5SjURMfRJAZrgBoV2WGdmZ5RWjUeEdKNn3jaCYmbSqrcT266VBBTQSgPNPGdtDj4W3cC4ftcSCW6VHp7",
  "key35": "43Tvyc8FpgQGsonX2B3P5hZEX4pxneb3NXtoRU2BrJRX2CtqQXuBX8yqoL2Azx66GjWTgLi282JNqHZWNxQ6fNCW",
  "key36": "t7BFzKJjKuPL9D3qJypjhLWHJqigLu7Li6o9uiNxoK7gqMGj8ujAXK5x2Wn45aQF1EYxzDWG2PZPSfWkyRsou57",
  "key37": "45vfFg1F3YqG7X8tBcPNsHHtENcLcRBZsEErWYShEqSVd6purCabVvzF4ev5bgQpXdh3sHJZjpXVaVYWW42MMRLs",
  "key38": "4D8nmhXiDmwUJrpeQCQP1qCq4eG5Cvmif6QeE4pVgMinU62cCn968p31iXWvxZhGWpa6vMt8Emkgic3Bj9tSUYb2",
  "key39": "rgkao5uLvmi9VjLLhuTbsKb3AGFXYoNzCcsz3Knp2pv43bxeAywayrdPcHGVihitTvP4p8GsFUg2E7XBoeAohdC",
  "key40": "3FRqFQZVsEHRvcHbvvbUmCU8zfAE8H4WKBCbfoYzjNyFxNzeW2ME542sa1wGkGKfeaBtXdBUq4AX1fqqEqv2Dkwo",
  "key41": "5KP5vnBWytoyS8MGVK1tZ21PVJnoyiMZ6PthdoWj2bfo7TffGvBnHxBKK5xzUH7usJajowVJXSub6VEzKgL9zcTp",
  "key42": "2v6wyomAVvX85j3WhPNcSrz18tefeGsmfC8vpkH3wYzDABdpPmybn5xuAev6zVTCBvPKiEmDkNPFcWPTY9S48p8j",
  "key43": "2xungNpGTUdWemL86DUDppxTDWiiH3SWYV7TvbXFDEx35hJWib2c6VxE7ghHEtXgG3P5ErjVEPde8uqYFaCM7rVx",
  "key44": "3uGvA152MuRwZZ6zfBgLZLSL6bt6adS1Aob7iN6CWSzxPLYau7t3GMEBx6BSNgTbMqpGSRt3LL9x1gHUqq87JB6r",
  "key45": "3TQLuPvtH2UkM78wJfsVLuUgyY5nrsnvmeatx3sqU5THWZPpYCWuvdogK4Y6NCmdoNVjEMmWMKHJJJiinrATy23T"
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
