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
    "CmYZaBkDngXknsBc9MXHZmbRWgBoaUSEQ7RCnjruer8NM3ALh8FLTfadix2vRvR3nmAvWGspbtiUK75Htb4rRRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8783PhoFx6km8YuarLdnqxVFjngwbh8Uxv9o9H2p8i2bSyx73w7LsRnubp289Qjar3Y7urb92cXvcfu4g4uKfP",
  "key1": "5QMHB65LVRQ8zATGtna51NgUqQMMXLi1CfRLfdW3SShHx22bqbaiuDJLQG1gbRQhzhpw9W37AcC83hGqiNAZtYaW",
  "key2": "FDkjYtSQpGVf7nDhg3NjVLeGRpYsp4LMHJrADRP9SSxpouR5ryF8UENJvJYgHc8kNHarCneMdGBs62ismQBMMBc",
  "key3": "5XAcqYES7ipEphgDffnXZXKF1DVdMqkzSw2igeZWspZiSz5HcKSVZuf9XYcS2xVQw19qGLc1k3fUSyVX3ZtQns1d",
  "key4": "2wFyYEj7N5kBQxfEe9HM1hjBfxVGLrtxyFP6miPX2GczDMx14vMzTEAYYHJiJfSf5J99iCPFhQ11FxMdytpoZWf5",
  "key5": "4VujuLimPHwgfWf3FkQ8FRuZg5Mu84h1Xz9EqdtfXSTwqNUegkFhALioceDZUf3h8YAR9XM9qWvxxZUyGM5Pr8Pz",
  "key6": "3LKzf51YjAGp1hELBwitGHhhJ5d6VN2TV8a2uyrwbiRiFk1Jf3yrAjhsHb19WhQwaUiyeyQVtorx695jbtYQGH2B",
  "key7": "4eUuqoayVQQvxdz7S3wH5X2jHiuFDK78MuEJkNYgpMBjMECnuzzqijaVyujw3mWKuLGe5ow7ttrLAPSY6sqkHd5X",
  "key8": "exPsLjfownSWiUrD51jTJpg8suJVV84Jd5Nd4ZbZF3DNUxN2uVGoih3ZG3ByKe2MyeBqmLmSYkKBtG2QRGdudE9",
  "key9": "fnL37g65NiyvjEas9WUNg7N4V5naHBbKKAbXF3zoFQMAWJcamdoeYMEHKfbPVDYsWAnaa6Dc1PDtMuNcePt3NFo",
  "key10": "5PtG9XS6x3fpkCvPL31vf576b8ZXNsQgiCjEFKpCsGimXZssdTbR7u77vFJwqFVV9w6RwN5PDSnmVS5LjJoh5TVW",
  "key11": "3Kp41aqrjto1M2NACEmAr1Vn1pupdCWvcs6bnEvokmY9Qj4FkBbt5TYtYZZuBq4DRBNFfaVGozL4BsDYJPiJwBSB",
  "key12": "4kNfqr9aT4nn92rkBHdjALWEDpN1tnsSnnXZ49XMk1k4QUxn4ULMyq3MNbJCZMFtAqYqscAzHWavyY3Poe9e2oSx",
  "key13": "5N4ASyXNM5p97pysAhtSchjvmE2ACtKCbBtiuJVLjZxZ7e29f2bGg4ddE3DKG7GL2VC4W9qCWmjS9feSMn63bbrW",
  "key14": "3fTnVHtGXmUZXVSeG66KwenkSqCAYH6aLHwU89tAopH4Xq1azh4kZKEmRLfVyJ3ZR9YY1gAiJxFedcCrGGzj4UNB",
  "key15": "5hqPTeyoKLRcwrMCSXVtiP75RsRMKobrY1ERUMoPVpY4eH3M1Q6UNyyjeRuD4a4pPBVhkSAZG3BV7JJMt5x99xuH",
  "key16": "5oe3PQVE7q6rzLq7aacf5brcCGtJmp7SEGJx2HDVtGRf8Z9J1wJBEDBKYwyErqsxLoYxi3nKFEYsNDE7Z2QTrDGL",
  "key17": "2rHLzH79VPTCXADPisaaFWj4tL6vftLvU1Nex8YHLYrzWooVnsQk35oa5uKfvHxaa9ExS7KoUodHb3rsfn1Uj4Fr",
  "key18": "4GE17VK9CYnBNXv19dbzcdhkrLowf2N4Cym11nK3fJf5BNPrYgXYWP8VsczY25MuAcHXPhasK7Z8TH1MrSeawQeY",
  "key19": "LetPdVk8F3foxLkKYEE5TU187Nx9S8Y2sXky5oLC1nGTQkZp1Dtmoe8UsKykeAUQAtUnS5MEMnDGWVqXnGzrcxZ",
  "key20": "Ph84jn5uTPexGTsovPfBEFb6E1rimRizdMikQDBoN2A9uSxBTzf4R9qPvYfEeMinQ5meJPoUoRXJsNdn9QxcpKC",
  "key21": "4Fbmnt7KtsuNGC89HqjXVUBYAejbr7isxpUuXNJMah9BBdA5ojTyx1fVrpPF1XN5uiV2BGgBvSTKZ92Mq8TU96Dq",
  "key22": "3pJkxRPrAdUJSWaGgZiugiVN7uTVn8QHmg6hZWsWekRbCsCFGHGjpXkYxwDXxwRRR2X5N1gyj1MGw4HSCdo65FKy",
  "key23": "5Gtd7wrcTMEURK7h9i3g4nSyeioPB3fDbMDPGqpgpTeXmbEWD7ZhatA3bjPijSxEdJKpAgbUE7P1hN6brEQi5Bot",
  "key24": "29KWvF3DZwhQYgAz1WxBvZrYd81hLDrDefYY9krF3Qr7B2zHcLkAdCyizD3CPefdTN4AJUUePFYztgcEq8bXeFRs",
  "key25": "3cAfjFJqZMCrDXRZmHQiCZF3add39MdkA6Wfk5pWDN8c3y2ouvaUZb4UpZBTWXGRUuP8xwaUjCZE8rieXZU4AjvE",
  "key26": "4XtbAUbFXXVAzEqxY5DTbKrdubkBZLoswpzELMSK1zLPvTbKXnZWB25H5YEDEyfNQvPgJRhEPbfRW9xFyg8sRMNr",
  "key27": "4VwExJWoqEGB2Sdb84JEaYB7PVRKcer9tkhn3eyRCq1oF4Xzt5JdApWSmk2ZzVrqmjJmu3KDuNgMS47ccCKRuKTE",
  "key28": "wxMisuQrJ1JPbSKmWqz2jVv9qz1ce7WEU4qBVXPsUVLmSkQXNCjWPNKh9ivS4BY2wLtSAupth7UeWVESXHpf8kz",
  "key29": "htRUf87htn3CWse63PpxQbxaqjvEFazu4os5N6PechbvxK213G5K6FC6byTjutyEajQNcwc8AxLJmRrvhthKMsP",
  "key30": "6TjmJxJQzV1Yjpv8wNVxviBbNkKzTzR2H8foSnVqfNjGovr4LWgX4Qd6UYTB9vq5MmVJv8QYM1V4itHG4FM8asa",
  "key31": "4kbLJnMCif5gW1LaqeK67UBDZ5Nz6P35RCeWN6ERjhcefThjvrxmmseFUFa72M1jqwoQZSQc4wUYTGEzfDsukgZB",
  "key32": "5YjVtyYW4ShcTCYAXUdJPcLaYxLvSQHzsWEcYVpGcNEZXPf6hxPHK6MmLJsXaQvvo2eu9cyPhpgwV8UB8EuVALPN",
  "key33": "2LbDzFoJnTqgHSewFAZcPnk69NzrBCT8ozRdhLeSJjqmURAdaeCJcTg11GivnxghcS5hABUazM6jqwcvHPBzgKV",
  "key34": "bX6teow2RVUDwBHGJqH1LiwftZ9iqhv63XkjAFJ3Tqibop3k5SQ8zGxuAeGFsj27hcNTPFs4NZFM93LyYDXeRCj",
  "key35": "2usAgiKxxdJuQXWfq8mvU1qoGdvhnJhpKuLPfVWDSWsxeevUcceAe63g4MeniX4ooVWzkDt9NtiAcXtBvREPAWBp",
  "key36": "3McQaLkStiPXVUjgCoHd8YkXEugAkdtwH2mvXcgH5rwRrTm6zEW4LVf3L2RfTe2bjAdMY2Ec9ke34eYTVKUaJ2U5",
  "key37": "FLEGRcJhFpQs3M3eypWkSg8fF2fwbAN6ZfjXyUfRXV6d8aiFqKsX8pr4WpFSU3UxGQpBwARmfygFmTVqnkkspkY",
  "key38": "5UE3QjdEyVa3TuLsgcf94wEzzcMsc879dWG5yJ2WDjfNTVj9jfqZdHmQjboZNFvffVn9VMTLyccd8A7iAmVFjpcV",
  "key39": "51h89nyVPATNbGABfGEw5nJ3jXUPu9M9Bb3m7pMSAGyiiYzvceLgsHWLA8LPvkRvgpV3rKpK38c9YKC2h2Ff9PtU",
  "key40": "5jBAX1SuqLAQ5n682toU1YDKzi7mWAEj3dsUyQa7HS4GKzgLBCU9iFfr3EWM35QoGJVAtwrUrVyu51tET6dbrDpX",
  "key41": "FX4HZmyLQnEkeHfNjeftApohopSM5aTSFvYRVg15ocgrS62QWcJoAnNtBUgo3MPiX993jMaKLao7KWK3roKxgAj",
  "key42": "3t7ArLEraaJQ5yzaRXgTCguBosjXTRD3bTK3om9gNmZtBUXhEZgKqdLi2MqYuJD5XQVAyx9B5jyPWD4LzQg1A8Hc",
  "key43": "2awmFHU6x2UGZ471Act3xFCJcGKxMUkDjJRyD78Ai1SQdXJ6Qd78y1j7BMCcMU8hkGNBvafz9A2BjNyp4gLNpCAc",
  "key44": "3KAyH6Dy3SGnbeCyp4s1Zid28wnDjKQaQaV2tf6VYXwFppvs3hVw8txvNeuS2r1QvSKErMhyNVfg9Ru81XWUbF4D",
  "key45": "3vP52EdzoQwhLDryQ7Am2eifzadFxby1VNGevGT926C5ToWXQzHfitWHn7VyEkZfP9BU6DiF1Akr5SNpzH9bKN6M",
  "key46": "ELtcmC67wqaGKHiBCizqr3XkgFsKw8HVZTRd1qS8NY7dAoXR133kHznA1yzCP9fsVH6so9xaYvroMXaCmYapuvH",
  "key47": "3e1wwkVCd4cqaTSsURbCxhAHxiLhaxWxK2oLxUkspcKTWuAyNcKvse3YPewnVVHmucmCenGhcd397JvJaAc7HxkC"
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
