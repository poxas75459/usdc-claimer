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
    "2DjQubHLB9JAU2yC6Q2Eezr55TePawzz53hPp1VznaCMJsfCExdncgoBhbxH4HscF2PVCq4ZrFzzbTQ48STqBbkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SyEKWReM7jze55w6VVNbkB1scuB8Pst2GVnd26SQsM1YPe5zJo7Bgo4L2V7AVPXSJKkDF7DvQ97ry3oyqFPu1X",
  "key1": "YpeDi7bDHHRdcdvrytu9Kqyjtv56P9iv9XdWQjzqnM41C6xLtVMz99V3pcWxCccB7XT8ViDA1sXEGjvLi45xszq",
  "key2": "4BS65GPsHjyJ9T8aBRy9gGBxmtazQkZtKpvK6kooe5yP7AhB77VPN89MfqW3xf2sQAKxKvv8qH5GpaSX4eGLGpX1",
  "key3": "3hEvSYW8HLLkFAUowezpQrZCe5GYoNCmMukfvjUhAid9DExScPfgLj7igFZssVovLLLE5AKAy3MUKKUgdUTRczrn",
  "key4": "5iFFfJLo7KhLSW4h9SC4K3e6A1NN7VdrLKGXg2uv5dgUj2BZU1NQR9Vdi2hhU1i8YeXKr9Nh5ap2UCRRmUMC2JxR",
  "key5": "PsHYHsHJEPiUwtLkqkPCsZr1RQQuBua8xsmv52jUCB7aDgUQyMu7hs1tWfWU7rRRe8U2GT8QdutFLPfQoAFowGu",
  "key6": "4DsWxewvrXNC7BZadrJLKtHKE72N71tqNLcmswSYUmX3g4GoMWezwPhMpBDxP5PbXbCrJdjLZJZqy9fUaQzf4Azu",
  "key7": "4oAqcdEcjuCoak1WGDtBHNmTkSbqageyZsS7aqRsXqgpE3G9twhenGmFsaUt49JLnjetb6T8srr8HDZJspBUpJmv",
  "key8": "3VfVbycvbmZDR6AmAnmjyKu3N7JyqXDA89Cc6Vq6nBgdoF7t4mUGxaFfWmDqKVnWTpPMwGwNnTvSDc4gBzmP1xi6",
  "key9": "4iontL6yPeaLJ1LsyfSaa4V6Uyj28sY4W6fDVsEv7mKZd8y8jBHAfdgs5zVdMT7U7xNEq9y1heYTLbffMZreVcM7",
  "key10": "57TGz1Mgk9TV52z9RdzdZRbz5LdZaM8DGm3KACw9Z9MbbgyQVz78a7GawswvZ8JC6uJGWFfqqhApXjSmxv1k2Lq6",
  "key11": "iiqsqEpSRunPG3MHGggTEJcgp3thD4Cbz3ZBNVytzstYXtfKEWUVT9F2M2taPVc57nvVYQ6azdRDnhAwo3d5JRq",
  "key12": "5dm81qp9Bnm7VKodZzSpaUj6grDbsYcJ4xgE4xTTCcS7D3iCPU6pjEuDoVKtZpiyKdrHFYCYbDbDmPg5BxbyuoBk",
  "key13": "3XQmMF4KCXDD2VxeTsQqRKS61RKQdLQqMSFX1MtomcYP8QeS9aLhj1ncjGzxPQuqaasaattz6Zj11GsHwFAGxtGz",
  "key14": "4i5P9MdneSvPDr9Ys44t3sWZ74sTGCvmNoq43pd5mZJ3PVfWDnbi3Ecd7eWwTphdfS6vtTAerA9LgXioCvwtMuFh",
  "key15": "vUrP1YxyRbWWCS3cJbfdJiubvmRsSwcFSsLmycVDke8LcnGB3b4QuZxt66Vjc6e9gJhif4GSGgAZ3Dt1uZdd5BG",
  "key16": "7x5LtP9YBiv4gcNdXWTYPWUJBSQh1uAwAhJ5RWQPpPaRa9m6YvK1TDicVeGiwxKfadwD5jFckxor9zntgVuAzfX",
  "key17": "oM5KmctTETY6VKJKKCkjFFTiKSLTDj1WbfeqWuj6Qkbtzgh4xPvurmtJWThWVk9PJzNuffMuuSu9RCBjSF1q1Q2",
  "key18": "5wedf5pUqFehjVE2i3XBnWJLD8JYY47f3cD1kzkx91SghL9FhgkPZYKzpmz5hxC7shYWocdsth6crW2YafpW4aj2",
  "key19": "5wNBCo4EdBeUyzUkU89JQFmH5jZS9JMy1aF1dL2777fh4n8qL618ATE7gPj9K9maC9J9xTbGoZE5YnqqCsgXLNbx",
  "key20": "WHr2RgkEVTsAXYDxNWU1TF2T7C1swcsa7uoxCUhzjcwtEoyAyai4PsM4VpF1oFHCWhBVi7Xdyvoop6fyAMCSBoJ",
  "key21": "2yyN2A2BYEhp44xnVaTQyb1KCjfi2y5XUXdJMtsSDCNmo9SZ6UYsoNCEPHfi1uebvQswxK5inmsLqao73c2YAbu",
  "key22": "29eQ3VTbvWyBxM7BsAWPMf5RMCovn29DNqNshJGPdGkNbA9g6yN1VdCUg1qnDFF6EzSc7QQkcEwHZ5ynmku9d4Nw",
  "key23": "3Yd18WFD6t2LpaHGZocSERipm5xxNP8gD4echyd1eY3UwwkgxMDXLWP9N3ZVLXJ5JQcti75PEW9SQLGUzcCEehvB",
  "key24": "5WxYMBQ6L3c5utADMkigk9w4avVnzGVKxHcbUMmjUX6dj9N5fockZsybLFA5F6MFobWZ7AXjXosf9YEmYTTTkdGK",
  "key25": "35k5qGHbqMva3n8mtMZeCymRFWpmKsfeoFKwwKKj643XUNgYeRbUAHK4toqfKixpKjt74ujpvBTA2hXikBjw8R4u",
  "key26": "3qQYFnbbFVNPw6a3jKqYXo34vqMkiM1cZp9B2KVuWFPD6TN6cosKVJjJtpJ86x6WG4FEnF2VMr6dqqpY36sUJt66",
  "key27": "2MGJdCtLrec1xciqMCAkZWmaBgqB73gF9diQ2Bd6Gs5vQrcVgTmRTJ23Sxuba9uqCkRvTNMiNmRvdakrXDdfwF8i",
  "key28": "5PmbmjGRdZWhKGvuswAfscHU7xFdfowxtygEXHQo7Yr2zCAnvXPuKNiwJaY1si9yzz65TkwkVQiJ4W3s5LxUeCb4",
  "key29": "RrojTnxRymy5gsP36oeyLb6AQc4BS4J3g1fDVt2NEfPBANFZduToS4VPoxuDDovXM34kXFup1P34ay3aSxAxzRC",
  "key30": "4h43vuw7DVSmMykQnT3xxpvWjXFwfPTrFoMCKmgYLuu3g57kNzKGGRtaugTpvoLUxPaUuw4ZNRMiuksU3mAxCanS",
  "key31": "4fpZe5Bv5459uaSBxTwvZ1rn5QqfQWsu7BDzhNmKmo6GyTxqz6JchvXqKGLFrmj2Ybg8grV829VtVVbv9s9i3mg6",
  "key32": "4DJ6nWKHZ9C6kbVPfkn3cZb5xsCV2uJWbzNo1nDzpk2iL9m3uJFop4jwHvPWBwMJXANJEquYXeLL2oaG9nohrq8d",
  "key33": "2qM2rgng9M7YQWXLyo9eyVgAZhJY5zXkuo9BkBWjdgYqj7sz6Z6HBZfjGQc9GqpgpCmuGxqivmCbDsJyC4uSS4xx",
  "key34": "3Yh2a6srQKhN71QzZi24kCiFRcroE8Z5W7M9LrqPAnb165jvrJ29zMJQpTYzn1th27YXhyqWJW2U1dy8FqsbABa2",
  "key35": "4G4GnaRUys4Zmi9tDJqUKfkwvvi8jZXshcg7Aq7vSvVNy3VGSc7H7w1MX6Mk8Gk13xqTwyqeS9pBhhCc254TkNcC",
  "key36": "3GK8Qw4etiLg99PYWA7E4oqxhho6x8RLJmNxgSR9FkCJcMhidkWmhWenx2fRSeGDH2t7SfhKkK62RZjEgiUAJYnH",
  "key37": "YtEoCXy9dgvCDhRgPfY6Tyx72vRVnbNHqnbGUBb4mLNjfC5SrvPi9djQbrEvDQ4a9xaRRazmam8LGXShAUDpEHt",
  "key38": "4xkyDYGvJG1zThvWQ8RNjStK5NWYLcAC7acorTcjugoA1achy8LLrGkaahE78JBMT43gveoy8M2vam3hnjfAgXDs",
  "key39": "66g5Qiyvg3hsAjSFzNNuEURMaL7pvBYxBZFVcQawyJDWupX6k32n92VwotYJu7PpYdcXzkTGqNPxfy4oEo26HdYN",
  "key40": "33ooMKRmNbNiFV3Y3n4gXRQuirMpRBQZZGr9gHN2nwZhxUccZqgJUXixxUFwApC5aP9qT4cSpHCxUrn6CFeqyiGF",
  "key41": "4zucPthK17XTFZM7YEapuh5cTqJ7i9hvaJcVPVHm6BvmWBVvcQjkgZpSeQg7Gyt3A96hkaT4kkmGewey1ewQxb6i",
  "key42": "2NtZUQ5aXLxVtm9FdWW8sJTeJqi3z4ZtkXCSSXgyLzVab1UKZr8vb8gzyRPkMDteCZKMoB23WFK2RW6ruR1Sr9it",
  "key43": "2DaYyP6XxMNYRn1yjr4zYH2Wh3NAwr6vKXn3yoJwm75pRM9aZRYwRndwha4uffbC6nLsxuhASuPWMtfTxfYsQts5",
  "key44": "5yHaDmYT4wkQr5xhyV3nSG21TxwRraqSCqKpmutaYGX9HVcSArAQVeZyz7CEfCGSJYwM9Lf3ydZAUZrFkXutMifc",
  "key45": "2Rq5x9bkdd2JEryJJLUU1eVEEnnHa22PCyiJn7pRLmJ2ucU6wGFH75CGD7TGLYB2cajDKmfDCxkMj2k7Xcp66f1H",
  "key46": "5DNJjwgBFLdexymr5gzTyFXHuaKgxShFJkYVpU1yoJisVUbkByvekthtojSpfykbtK1U9eGAi7iR3pqqUkb48G6g"
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
