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
    "4rh1hgBNpJ2dmseVFa2EBqR8QtQUHjUhG1PHCT9MGpmnCEqRTf8suC9PUmXAJye2heLYEnynBJKPNZeuM3kUuyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5cgCg8Mn1Rqv4Jqk8Vt3Dnvsfr9zAmn4esqJNwNpEMVEPaLrVoDTqwMNpTCXACDudEhmj9CJ4MmLD1ojQup46j",
  "key1": "2vyEsEmTYAadvGnn1FxtuS7K61Q7ZHiJggLJTmrBFqebFmVeCJCh7qKD3oikEWnN7Tqjr9viBdTxpHDnD5amsc2R",
  "key2": "62AivmTs5Ae72AXBC4Rs8YT5TvpkEu9y6aNAGqRjLZpzbtEhPgA5vciEZc7yGLt6vGs6RJGp77j6RJXhoyr2CYZ3",
  "key3": "QXVbD7cU3xMy2zZfQfZjoyAMfoDtJVbPxhoVChnPFQNGEFJwYUxdvBVHsYeUhuj4FsEqnTikcCTtcryEySm1gZU",
  "key4": "iCbu3r7VPnkTXtfdeZRsR1zZJVq98p8oen8hcqrxpiZ5TCfgYfPK411nseKhoPkAJeXLkLjnXt7Raw87P59kshL",
  "key5": "291LpmQ8JNLHGjHnEbCzTFB1zQ3HeDeTpQyvLrExzZbrerKRB1Euh2gMobCPFoJhPKFctHPYEQL4HSo49q2kUakT",
  "key6": "5FosEeRD8X5R2gBpUBrAijxDNMpj1EWC4bXbBdvyvXQ31a8LtgtWLBG2a82MnTHQppngjnYDBAN7cJGUSxFLmUGR",
  "key7": "46XJ7n348SwB1so71rykbXRf543DdEK9VUeXiPDvyTGZ7aCim1erdjfLSSTu8a3v5JBkucXSBvpyJtYga5jikWak",
  "key8": "37vwYBWLiG7jUHZwzF6JmAXvTU9EBzk7NAqZugtifhB1GpjskD53Q9nxdc1g9dWMST5dr7o7LJLAULXCp6QGAsdW",
  "key9": "5LSjaQaiYb3J17f39b56qu1CiafFpJ4uKrajjH8Pm2GexLspqgJ9tVVsd4Mndm2aJbWWniZyjXXUr4tZQWZnJZ6",
  "key10": "2DKrnMavbBAwpApQXkhR1H2yzY35vufcgwSUAQycSTbqMuJpBzzFX6APFhFBRm6rDeQX9xKxDUWBNPQe2VAUajWS",
  "key11": "CMpXpi6jNqbCxnuWJfHbgAWc69sPiXvRBNwBF6sagXVwj1ZHaqVp4VqFtkNmfiJ6McaxKDKenSNNDNTqfzWS3C8",
  "key12": "5W73s7357TRm3Uz7snRBpUWBjadzvo5ZU7fd3Lgdvo7efHQUvTiyjHDK5Uo7WYHZNLFH42bBxWNKxrdSAvvzoCeS",
  "key13": "Hw67mXoNFwoeYco3pgrBmeV4h35bCJWZh4zbhCjXDUnpwstPp6iTAnahA1QFHE4TTwcQoTfrs28Pugp8uMAgpik",
  "key14": "nP89fwLT3GoqJUc4rky4oEGuSLsRhCa2CZxXRHbP5CmXdkNho6UEJ2KexnXn2myw71SLz2vrLeK4QW2t2j3yoFQ",
  "key15": "3JHvxCQ68J5xBwZpw2hs3BS7kKSHKbfTk6UbFqDvmVb54w3RwfqwhaoCgnoJERPNfhdcxUXrUtzK7sVVf9aBcmEV",
  "key16": "3hwstAuZ2sEmMFqKWhqRfC3VZsAbjRU3wTGV6kmUDrYZhv1hHYeXuBeULh4Rqz6td4wgUvKnTAxS4hDjjTqMsxDj",
  "key17": "389HTwruriwR1iSmDYhesvS4mtoydje7Snrk99bRC4BMJpAfR3SHPvK33tuwGmpnTYwghwBRxY7Uxjz5T1Wkwmhw",
  "key18": "3Grv5tA6UQcgYMokSBHYrxTuiLeGYsjNTbqPA9gUwUrWyPjYW6iLrhwMfzaqEDh1YFumZ88VtJkFTXUSxR1DXc1E",
  "key19": "5NK3FXU9FbDLw1cCGZET24HmmUECGySLPjxYSWwgNvARFnVENNgXqk7tTVabV23kP74FhuKLDpyBbseoQDwV4JxW",
  "key20": "NuNG7KiWdn8yNRK8wV3QiQweFLTGg8MvcM5eLz9MJkeNReDAvEsqRikrZbT6aR4qL8BdceCP28QcCjwXQaSBh8a",
  "key21": "4ngJRyo3u9MztjKgtqoKzXKcb67NrjCKbihn1mhyGo2GeL13TFU97dQYbNKNrRHmfLf6wPVedJK3Fkm8mrMVEmVW",
  "key22": "432r54fuYGsRsEGvbcEbvk3LJYd6GZ7ECSWSAzpt9hmQUk1y8KG6CQSjMHDG3FC72sAndaJDUHBfTPbR2cNCSoPk",
  "key23": "4fdMTiy8sB3Dyr5SGZn9nWmWkM4uiAQcdca9dDetP74Pow8xM6HgHDQkGouySCc9Px1rQ1eKNNYMqpWXpbBFSVWQ",
  "key24": "5cKNhAeZkXVQ5GFNFptCHfYJALMNP4q9THim4QhvGcZtc326M69uEA9z1B1MVDeq2yHQd2qnRqjMNjPg7tH1rzjc",
  "key25": "25wdCeXfhek3h4571CEsai4ERRrVs9DB2cmGLWafvbWo9LvzyZJaR3R11n942QmMahkzsMe7wSyy9zEJA4YdJ2qJ",
  "key26": "QJJUJihMve5UhfBdH7mpJEB75wVRSfEkuYgrPMGT56DxCv7vWZTtbqPTaA9EMZYnTa9WKUKre1sdR2juZNTeKQf",
  "key27": "41CyN81iKD1BZRGFUTUMg5JpNXA7UR9x6FLNXgKvvFwWVSxRB2CUnG2zenbHpQqNXxz3KyBXBXzHV4KFGYxEBjym",
  "key28": "5hqGVBLh74mLLcbnUxcg8VtveWCjxGXxPKqCFMhi9tSgHzgX6XbcKEwKx7MG2wNcgZaAjNE8E37Y43Y6r1WyTTCc",
  "key29": "3m5z57ZpvBPMGgrSXTU3RNmwX7Uhk9wgs1AVpw3WRhgQHHogaUBT3GX38GjChvwuKf9Xu1oGd9xxzVcrhX1Qcmqn",
  "key30": "a9KpRBp9auoD3dCBDsquit85hLCYJtBvM2R6MRoWi2yX8YP94pJJ5xZcicrRJ9vymJgWx9pBSNZQ4DUDFtfA123",
  "key31": "5s9mqdkJCvy5kHAz3Brx3kpVQnboJLhYpkzqDJ9DK8PZTYGU8Fmw4MdmzZFknGGoDmSocujevmQFwuLHwCivcFV5",
  "key32": "4z9ZcPyVwgN3FptvPtNmapzmEhe2EduwZq7aEwd6HSTGWgKEfFWksPdsQCUUvdTV2W47Peyre2DmTbuXXFXJf3S7",
  "key33": "2Ve1YRzkuAbcZWWYohDWqHRfMkFeeAwVjnHh1jj6RHUNKAXv5r7jKWGhZZGthMb8o3APpXvkv47wV656eFWFfjBm",
  "key34": "2AgFc2naY9GgQGnY3QX7ceb7eYKGihmvG71QiRwV1QEhpZziKBqZxD1chJNvmR2y7L2EnMajp36fJFMZQ8nq2jrf",
  "key35": "5ksiS1foGB8txbQbSCyYv6Gi2ir9o2hxhbtexZyHVoLWZHmBuBfaDwNTQ9BWUKDBFpMjMD38pRHTc7C5yvnzUsDp",
  "key36": "DefSuzWp9o6o54VUwpBd4q7jHHxZkKBZgm5SkGPqwm9Mt9AoxS9LLNzgjUYAtr3LGiPm7su4wRpkAxMZiRq1NiX",
  "key37": "2EmfTrq7yxJE5ckJ3bfvMCpr5XoAgRibAQMZDQBGyjj3Var1k34uBqJckveBVnnA3adoQSz9vbwtqr3zoMe57zwZ",
  "key38": "h4U5D4DPSfjHoLvTENQ2yTyjXY2tMeCxtD7VVedSXszh2BBMPGAY69oufPGXvG3VyNvwtMCTJisLxaHgC81yyT8",
  "key39": "2H9MVFVxhoUBagzr72RcQFxc3kCriYpadu7AtpKo8pP8nnFxhBBabzhJY99PfFN2fVCKjAxrCVS9zcDugHrQE24z",
  "key40": "5PM6gxHHHQhyQMdE7q3WRdC9f9MkJSy7BCcsqzdMS2P9agi2mWfFQejzJFyeFGrLVd2GJQjjJPewNpTmRBuhXTXZ",
  "key41": "5zpun94rwi5oMCEvyMs5yUuECYrneaoo7D1QpPpsmDNcEJMwpgvVnFBa2T8Ts1zARXhcvWM9zVVFxeXKEzmWWGWc",
  "key42": "27qnhjffTTctt6DzZE9F62zkvbksKSkoSjErcjGxPgZekZGApkAAk1tJMehfvc3JWB1qNxPDRLqwTzCQRp66ZBcZ",
  "key43": "4NrcAdzGky2DAYcPcD93jxKKxxdzMJgSFK4GhjTiHm9tybamkCbhumNqfQLemYVzvy9CeuKWujvAkFDB75yFkDe7"
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
