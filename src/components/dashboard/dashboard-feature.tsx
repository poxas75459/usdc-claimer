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
    "2gje4gTNPV2VrjeGTx65oCYvG3qsEUEDCZvVXz4vXvBeS3wWtY8BLRcnmfcGpG3GFYUg5FNbVtsUGr7R1S5enEFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Tjr4puyQBM23Hryae4p1k9goejfvqPbxUyJgrR8oEVSpFKYAZcRdrD38JSnoZWXcAfq3tvpKuBpDpbTskjTYh",
  "key1": "2Cw3W5ieCWyn38SdMYdKV6aDdY8UYxwug81H2GKMGvDsj2uo9WMT2XANBVw4QCm74hhn8XuPDKwVp8Vye2vqaMUQ",
  "key2": "32njftCSewn2tVJnE5rDMCza69wX3FSSW6joGdySdgLz9eYG2fJLdmKmTLBqmdWBdokwzfjpaZn5XpNu6uqomVma",
  "key3": "5axoHUArrm67MWmT5gkepzuSpQ1hAaJhUZZyW6RiZiYv7Yc44jMhMaeJNgVwUoA2X6Fo5zSMrYJkjcDbmD8dJ3bt",
  "key4": "2qxKBpHDWU3KkdAxmFaqDGYDpGNYcprKDoepDs62oweEAE2EFa7pV3Yvq2U3CmtTuG7efKeP1y5kZsAkjvMDJnFc",
  "key5": "3PmUjjQJbznftcRt8ovBAwTaqh7FLsky2AQsYomURTo4fWoHvyAJ1ueDBjLeac6BfuCCoo6mhkjoaSvSLi6RAghy",
  "key6": "t2ZwQ9dDgBi2nWUhqjS9wojV3NV1bjFS5yK4SQkCyg4cDuJaBn45rocdd7sRLG36ZF4xbuJJsNfiBx8UowemqFx",
  "key7": "2LSTGvXAxCVyXve9Vhe1URFuB5wAhKffAqXpjyePfUZ57uf1xaPQhix1sWetK2gFnCEYNWP4PBzcmgjrSD9h3Vb5",
  "key8": "2u84oYJSFR7tDxgrqntL1N1veD4YVqCh5EfhT3EGBV2u55uUFWgypV1zNAosyykHbuzu5sq8r6jZaCKiht5Smijh",
  "key9": "WSbgt59fyeGK6kk2tLycNDiKi2WhwWsbS2wL5tycVg51vVZ1wXtH3YK1YkN8rWP3HptoJrzU5ca4Vd1zkM8M2WW",
  "key10": "52tBroj21ZWYhMdBWQRhtLnXP8BUiJG1Sxh1vKD1Mr5Y2Jk6Wom8vQcDCaxddtQ52W58LwbazgDkhEwVGowntFsk",
  "key11": "infYmX75e8xC3519zjZU7jsFwKm8zQiXodj7okmXESJgqneKhaNuL8tqcvGZzK34mNJ5CH1FoKGc6ggGmx3MMU6",
  "key12": "2Dm2853of1CQMspRJ9Bdb4MoWitw7LaGBGVP7uftvZPfnTovLFsDaFvH7ZmfRfTAQCnwHmpNc8wEJeuGh3r29YxQ",
  "key13": "2WBn8eGgDZqg7PCS5wkqAuh2EGVqhxg9eT8F2aHAzGkNcXCKyd6TpJDp3Ckm5xcmfLwZDZW82Jv6gTZmDqprJmii",
  "key14": "4ZfaqPZFHWwkiBhKetuXd5U9pLfDQCRfgMGANC4ntzMrK6KCq9CsGU1Jb4UjdrD4LrnHVk8EeC94KHkoD7eZxuph",
  "key15": "9wLXqesyHA6oi2M92ZLykrANH6PATNh1u6pS5WVVyJf4cJcLppDXWAMFroEcjrpthRqWnt9jUFk5eSdDkN8SKF5",
  "key16": "58s3W9Svjxptv1ERK3ihNMPsvCfNqpSMR4kBrLLH9GGf9LyAc4NB5iEP9gbYVvbBbt5S63Wui9wGmspx5zkn2f2C",
  "key17": "4XLzkwz7eTLN1EykW7iHGRTkVTHyqNZfbL4sn1AEGXaR9TQ9rnAkSkCghHf5z6XEcrBFS6g1Mjrw2J9zmetszz4Q",
  "key18": "jfvAHGVRQZU4rXdg9KTeuoVnYHdXeWhUKntD7wjqBynjqjw7PrnahRzqS4zWpp8vtrJCp76KDXVvKG8JxHXPL1H",
  "key19": "4KwTw1p6AeKoutbBhRZ77yh1wTj6MBnrcV3yeNjVTo5LtyHJJMwESTYFetzSGV3GdwRJQAmkBH6nfp29HW9H4n2y",
  "key20": "54RjZB3Bb9MU1gmmQz5QVrJmKi3Eivdnh9upEmu5zV5z45TirsLigJqqM2DtZS1yjEUkuQyFKwVSAvkiNDjqdzAy",
  "key21": "31AWNhbEsqkQoH5jPgDKEA72G1PDEuYoweSCcrFnsPrwtrzxv6kChNzEU3qCEdk8mHzjPKSnzrdmvkWumiv2gmm",
  "key22": "3Nub89m4okvzYUCXkk9NxvAYpjUpTK69HjwCJhccZQh58BDSwqCQ4NqWEGn8sR8oehayctfTM5MAkvVNuGVbQJXY",
  "key23": "2CNvkjgQ7Byf5zTsPWek7sfWBo7Ma3c8SPPup39QwQhmEE9YJShRAZWBgXRPifn3JydRVxUaDFwiFrS72mBLChjz",
  "key24": "425LdcUf4asZcAkSrdJzbPuDMUpPTKgDEwJUwZQHAoKef7r5dHfdVuDQfmhMEWU1d6UHnsC5E4RyR1iSD7kaH2vs",
  "key25": "2toZ1pNJngSpSVKgXmF2EagDXMVQiPrZD2y91JPSk542m5MajgXPyGfavGsDAqzzZ9PK6ehUwr1w4SvrFfBr6wV9",
  "key26": "2jreF4xQ96qRUtTYJ6akxTHJGUDPbXNAD9UiZkPLg88Lis3ULVbK7VtPSLv8G62qgFoRcWPL7b6CVmN4t4kkrepd",
  "key27": "5hyE2askt8M71gyQXXFTWUATJBgimdf5BxndhyjG64RDhXzg42iiYHtSKQT8XvhJ3w1oaPZdCMx17ugTu57KymfX",
  "key28": "3HYHNuUMnACuwGGqoyvRRAi6M9X2LgFzgoFakjjCbV3Ft6oUbeWngLc2DbnZSHQZhwzj4MzZnEeMjFw5SbVMqBxZ",
  "key29": "4A6FfWVZVEUkZBkvz5fKxaZaFxc3oDARTzfqW2FWWMX7FoFJbTK2sGRba6nB2giqgEYAhTgbTDkN94ABqYWC9V6a",
  "key30": "5D4PVFe16A4nv2dryQAsoTdAjQeoG5QHS9vFoeAnXuvs5Vbe9Ux1x2PyGaJ76vzKiUPzEXd1b8fUwFzceft7YoZr",
  "key31": "EHR5Wc27EfJAgNm4MWb4rHRxxTEmJmjqUPzUAubu7VrLTe4p7PvWSMVHh6xugL8MF9LaFWUgcDWRUw9wVi2P9oi",
  "key32": "2Pj7ZK5csYRF92WiqJy3MiFH7kFYfdje8yEYEZsaPZuu6uesuuj8BukVJ73xhTJY4icx99k5r6XdhkY8Bt4ULbQS",
  "key33": "32eK763JE3XqU6KSXtGG5MsRPMYQQY7QqeW4SpgDmA6wcAFBKDuoBMAzvPGUMEDguMABnWxWMnqqkSmLkCdWdtRJ",
  "key34": "4LV5fkiBXVPYkU2356DyKBXHtkwixcb3dVqX2C3y57m7WkKQJ9czPT2VKqELmeDvFUi9ohENzjhDjhgdo9SG1QhJ",
  "key35": "5emJEkJNkgPh86WwvZVJpvofycSJu4dXGLWHwxbyyDWKdpfGTvLVjJrd61WdresgfoCBqWucX22SAeJ5v5Jv383R",
  "key36": "2iiPbpdBfB2see4ofFZEb2aacqUb6RLNR4ULyxb8GnPfWX9oiBWGpKLBw9hzxwryGaTriajDKM2MhXYeVs3Ciyc9",
  "key37": "3Qoqg98AWZkfGieTWo3GVT4goFJ2W7x3UEMy9oi4gCwx1GFYT3pS1XgRvdaP5hwfAUFsgx72wfAPmMWQJVNARydC",
  "key38": "gMb4tuq89eox9MZ263KMHRzRxjMuv4hawgmW4BjNWt8upzZL5Q3mtn4wFiKM5aKQKyUQrnEyCxtQ92WK67gMEYp",
  "key39": "5PorXt7ZFGWAiJ3kcD5z1evSrGckr36UepoyE47ZfBS86t3mNiBPBM85nNPSPpHB5ZNjwes82Nz7JRANYiqTxV1T"
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
