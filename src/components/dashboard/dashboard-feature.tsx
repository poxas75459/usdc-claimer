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
    "DpZbwoCwdKCBKdzKFbmpJuM4k5rTgaT3cdxbJrUt1AyqScNnUCg2AEuj5gHegV3V9nVHxQ3w7ma9uYQ7kDdSX4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4U5YQQvJWoY1HUkLfDR7XNX33cQMqC9DNKhkz3UNzRm9cJfNwyaMqxbpzEif5yJBWjGryM7es2GKVDSqsxmxTW",
  "key1": "4tUHod5oHts8LLwDKQNREG4ZwshZF4NKJ8Whzz6qmMNELVu1dthXozpnP9qcC1ofST3faaPxmETUTJD5P69wBoox",
  "key2": "2j6nj4mEJXFUP3nprnkyNFdn6ud6UmjJeSZZCbL5o9BGQgt9eQS7TVNJairZyPZMEDjq4xtCwgjsjdcb3TGeokKv",
  "key3": "3ZeB3kA8NUbFYr4LBETqbRubtWGNQkD3aNSp3Jr22CkCbcQzAaM6dYMVqpBBonfGHP8Fa6TJXbBE54T3ieENSaoc",
  "key4": "4ubP8ZLhXQ8Mwxqk9th3LByHaAMaaUvRkQs1cDA6BR8Lb17bdHAHnFXC6CqnhoYApUYFPy8My17GRmWRrqkvKJPk",
  "key5": "5LFoceTEtMFc8ehGPrU9orKpVXQmzJSuDUEWpQcoe9QKtZX9uRPXJugtBUwJ13UANm3AaX7tkmHTrNiP2BW7Fw5j",
  "key6": "2ALNjT3vJikZiUgkx31u8scSLKicRUZWNGzJvm62xFmYHc5XMt79SZnTetZ3QK4R29sQScFPzRZYCh1oHVhUjdgh",
  "key7": "5pE48n77ygJPPEwdtVKXGwotCm3Dr7aePxGc7UGoTZ1eC34eszJ9BSGhJk2cvHMGzaoPo4B4KC1QjHiEyoK4tSHa",
  "key8": "2zeySd36obiiDXpFkydoEpFNZpDEoxoTRTWkpUTLomqH2sDVPSP8PX3w5qqhLGXyVXCEuub9pEkcFVQ1q6SGxo6X",
  "key9": "4T1Qtcr7AH1vKF2e7GwvW8MXZBHVNTBNb1XorEakh3GkKLrQr2XenDVT8yEUxcyj9JLqS1HqA5yENuPj3cMe8ANT",
  "key10": "47K5E4cpSFS84vXYTMVgk9EGXij838fhdTsPLWaCoCD67PxDGtX5HCAskijWoRfpTAmQwwt26xbQf1xxFAjC2XrY",
  "key11": "2s2k11HJw2iYDDwYJr44giqv54k4dtifCMN6qrEaxRJZvqANQfgsZFRukiMJpETy1Qbw6rkjJi2stpsbQ8wxb4fu",
  "key12": "3TJDTFEazNCsGGaVFKBGJJZZsRA31qASwcYB4YJWTqLy8x9v8MrinbbcxDMJ2j2YTp6EBuM5k7KR9HXLRGBddtwG",
  "key13": "wkN2LuWwZQd3EezFWn7TotWSh8SDef55WLEqZ3yX7hy9yQXtUbV69doGSHy318quTaXj1fNbXfDruN79rzY3Wzt",
  "key14": "mB7yzGMkPbBBSoAFqxz5mkZG7RzZXjwA52nKLGUFrj16oLqMVYpgnM8u4TnHs4UvoQ8oJ4PKYHs2DuermxVkmxH",
  "key15": "2H7gHHjj9t7ZHC9D813shNQKf5VMpABix151qN4n9r98VZ677sefuPPSwxZdnn51RtS8N1CsEbTpi3dakGwu5ZG8",
  "key16": "2b2WzQp6xChS6HboZeUr8YxvXNS87ZPBWsnPAMF39bPUhizf4PCTLNBQJWVhC4ueitARpZtQqMggnVt2geKoisur",
  "key17": "2Ktf2oi5pk6aaaXX37jMV6gVYRoPLcWLa42r3DKuY8Lj7WWdCVV4UpA48WmUpPfR1EYPbXmv55reqMXScL3pnb3H",
  "key18": "2fD4AE7HKNNdQ91WKJBNpShEWbNTNbcTBH3aQCvTY4KJPNayEDtxosVBQHdr5hVS33JnmeV8S9nTDZ6eFbtYi7L4",
  "key19": "5fpo2rguHuy7zG5GmtPh6YmcUqsuxzPAXWzYn1BzwkvvRYSfWXCBsL3fJrNffBrnnUZgWsRpptJccJWDP4iBeS9V",
  "key20": "2ytqL7SwhVhgmJkn5WwBNL2No9veUHeMCBvJ6p7b9hc4bTj71QYqs4uPcZZPPznumr8Yjuy6oJP88ZZFK9oMcCQB",
  "key21": "hR5YhEFYSKkKJH45ZHMa7AexAryaNBQYRaPkG6cAQXbREVGeGMAvxTnVsyrUucma7YuLRED5Ju8GLTGFG4FTyTL",
  "key22": "J3HsHLVyfRNxbiiZ8V6jA2LNydxY8yBZTBuL91Crk9YTmESJfprPpUbz1E7o2hwzfgGEmcM6ySJDAedDLv3KTeo",
  "key23": "5PVL1Yw1oHqCrPUrCJcmd8LwaS91z8KJPVCKVxtHDTYGwM8YXmg9FdGfzgRRPSoR71LKzMaKKGHXrABP9o5Ju3q3",
  "key24": "2W1QK2Y5uzMmmMBG1PfLud3p992TQa2rdmGRjhUUGCAaJePipL9rvaiTfzDtx5fK3otCd83j1awuvjj3VpzJBsJd",
  "key25": "42gdkSNiZh2YB7xNsRtZHWWogQtT7pKSnCrHr2TqLN1WJyN9ZzLNHjL2PWpkbv3fWLBCqqLRViYdee3rYxst1Ufa",
  "key26": "4u1phbRAwYWU4sTAVwviL9EsAVjCBZAL7iRrmZDZbt79xNxQX5S3jbHfWQviiv7SCXcfKBy6WdM8qarD8uzRJs41",
  "key27": "49NFhNHMEe8zLYmXhuGfwEwkagwPhKys4YjUp3rLtynNAkfiWRJLTQLUby7PjZ5F1gBJN4DabiGtqceBVjTSdUK1",
  "key28": "21JuJEKVaJGXgJKATfSb5o3sy2NHo3dB6A525Erfy6urKyxqe8c5rGHbibRzAoKRJGpgxKqpMaeZDCgAnSqTuvXw",
  "key29": "4xoUPf297ZQgV5nHcCJwdhXM1HHxMup3URYE3yn6d4sor2LE7SY17hFbDdjGSBCsaFYEu2NEGRpGmpZ7yUCytmLT",
  "key30": "3EM2JNR1xVvXPSa3CXn3FGpF9CeSseYQXECcmHuChWjwR5x5QJ1DYA6chCEBXkPqn9SWmzeGqq7YKD5NgjuaDKVz",
  "key31": "eNiV1nRfZZtbHgPgpSUarK3VN1ny7HxpFdYQSQpTjDqg4oYQZrttJqKhsLDkFpFnWPPDEHfMAmic9VN9fVC4f6i",
  "key32": "4SrkJ1cR6EJeduKP78rDorGwKAZMpk3i1cE4Xph1ZtXA9CB7bApMRp7znBMkVTQTFCD4qDqW7LdjX18PFJuwFTQ8",
  "key33": "4zcJLgqW7BRwnoKZzxCfSd8rtKTmBKKAubty8326sPHpcrVdeTHoxN9cCXi7KnRPhqsiwi4ZXdMDHu3rQbQLngxS",
  "key34": "4EVyShKK6wPewvryd2YTHxwk5UadiYH9nSGaNxbXyFFkkDXegAWAJrmLcTAiZgDZBqfCXEnfKPgucLR3XZMq4jrk",
  "key35": "2e88ercJ4ErFL51KwEypHcBmU5h3RTkjPw1wEENu7jCyEVohVJDbJhGXhhVVKjLSJtKiM3hi17fu5kpL2o2QMZSx",
  "key36": "4DeLy3Z746YXuaiBZvT6SuMVPbAKRiHoJHVf2go4YQR8gW6Q9SHhJssLRfmqrDvzjvuS9HLZ2xgEziarAhs2vJjV",
  "key37": "53PFgj7YHjfVayrVDQ4hawe5duX8DBDH2R8yLMZiZMmWkaQKG2NBdkhEuB5bD1Hh2ctgFnpeqXLfwWeoR5XPiKQL",
  "key38": "36T5YoBCccPsDn1a6itk4wzQEYjw33BvAvyxYMy9ve46mm4b9yeybBZChfhhkeXkp5HBEwdRuYmVB7UroguhPPRp",
  "key39": "66jPxdKkHNFEPx8yHFVQW2HeKyNCtPX9tYrhx9mHnHQVYVf3iQkqjT7dngVYdFtshNZ6z3YzUbSmeUq7iTqHyMSm",
  "key40": "Ss19qosGJbff2uWbF1YJMXJciQXrBCVJyeGrjVGWSfPXY8jKxx3UtQerdjnNvMRvXeMEYA5a7Tex8rFvGbQXwc7",
  "key41": "66tUVPEaF8Q8PVz9s5oNszbncg9hsNr6HerS1exGkQ6xx5jhNjwAvtzUQiiX49h3cAS8z16QMPLQ39zFBzGv2LKw",
  "key42": "2VCXJ2E37Ed6g2Lw5MbU9TEjPXpyWNULhkwXvmHHaodrT9gn9feBh1nfvLn5Wj1KjiH7mFzKcybJzZnhD8s3SN6C"
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
