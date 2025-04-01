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
    "2nBXWuej4cZtHTRP5vBuUZENBuRPFtDrgX82SDdU9VFMUwQankBNUDjzFQVJXmH6VG6p8jRmWhcgNeBcroeEzsM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8i4hUJZ6Wey7Sw76REYgJbBq6zCgPkZdVWGgjjjhaqxLcR5TJkmAxx2aVo5aLy6ZQDohs4bxRBz7dDufnvFfsa",
  "key1": "4SqfRZrKChPPf8Azu3Vm5jv3CMHp9JiWDq9oqBcdN631z6mR5fdJ53pR9qeLyXvzRAN3NgZDKnVng31YHTzkzjom",
  "key2": "2uVRochFucVpvxnpDHP7E4HJoxWm2NGYWBEmX6mxkwctefs57Q4EmKFYiYnZdUzZ92N4vgd3ABT2zmAoDsanfUez",
  "key3": "ty8vNse24dVDGS9jWKqSWJzdFupXDsnMmceYDHRtsq29tUTedJTpPMCGvx882vNSDF94oKsNTeAy35KkfgRztm6",
  "key4": "26jFxZjn9tEVWsvgjKqeDUwcQ5CjuUHSzdeKct4LHnNvzeNDN4wma8d5Vp4dHAtHQ8YQFYNGCx9UoPkFE4qre326",
  "key5": "23tKLH4QCrYNWRbwg5PtRP7y32cebjiVB9sd2S6sH8m7DeNmYVykZaLsTffuJxJp9AzH9HVco25vGQseiUXXPV78",
  "key6": "3fSBpaKw6eG1YTUqomuxaNKmAjjieeMavffBohusrPt9rWwa3syCDw5ccY2BygXspCHxGX88kWFTrXWuntt4qXz",
  "key7": "3SzhH2pZD4Z3AAXDpW8pbqtapQ796zNebJnbRV9LaW4oiP2e655KXRbzYgjzmu8eTmL37s4Vv71nXrPc73ZB3REj",
  "key8": "4a6TPdAtehWkvaQrcUKDmWKrNfuasM7E1n4tBR73tDZjAPSmhiniws7av9q3mG7AW4qVN4L2V21vWS792i38sDfW",
  "key9": "35VxHzEuQQL6ZU1cLp8KFMUmFjHEiy8UM3VzjGfTvEQJgBB3oiSaxhuj5XvY7iBAHcKLMZvqwXuB1kgrEnFWqf3H",
  "key10": "3ikBPHeSj4f9CLPm46hrD9cfFFQT9rKSkyV7mZLeCyrJGKGWWhzTNuh7wEaNvSoysx1tWJputtfcMTd9NcgPpXZ2",
  "key11": "5PRe5Q1jcjj8Et1BYRNNxsbRQq9nBW6eu5cz9pZ8jrDXMKZutnhf3D5ogrgs3Vbu7wTcgM8UosUxcNStvbUmgDoV",
  "key12": "23UWzj97pi2QSZZ69SxSXGnCE9L1KbvoWTpwWdKoCFLhKoht9AiEz8BwJCzozFkvkisC3kBXUjnFkrKeSmBwGPUp",
  "key13": "5nscQX7J4PscAdLRuR92qEtMVRxeaShp34LT2cD5PL1Qn6HeY7AqTddPEmgC7BKhsuEXXovgMmZ91s85iQ8bDvWJ",
  "key14": "3bNEkVNrrcGvTq9N6Gm4Ng13iq9i6ZoUnkbqMZ5yteGPzbcHLNirXwdKdGPjNSjvnuHNrUTnsMpLsmPZNUNehq9T",
  "key15": "2RYn77PD9gaKzwLrpKc8KpWFFTYDDgyPZah9gNdPnhWpFvU3RznrZ9JgvXRSmgJ2V1Rg6ed3v9BbwLX9aWrqbGpK",
  "key16": "2wwXWPxB2EFERyxHQ6ia2yPY79NyCU4XMpUuQexsUvGVD9UewqvkXtEfARkix6izB9X9nmgv3mGWbp46Q2zE4BCP",
  "key17": "5ibmYw4yoDsD2W1rtvQR1BE5G1SMk7KiHH1rfiPgeszFGvudKcDpQAU8jvLBdP7ihsrGUJMafDzs4ksvb12ckVx1",
  "key18": "66PcW16XtAurtLJ2Gt9zCAFPt46sQ6NFNbnZxqec7whUr5ncGd7G7Z2YiX4fgsVgbHaDg7UxhiN12nxp54UAA3Kv",
  "key19": "4cC7ucqxNG5xwCZWCvZqBGCbAd7ZwrmCgjjgoQfSAQ7Topaes4WSzzAoqnfxmA7kEfb57J9HM7uA5ip4LjX8ogUo",
  "key20": "4ZmWxRFz5Pug8bSCZ1JGMyZ6YHAd337Q73PtKPvbVAcUEPiYXxeDBbcNSh3o4Tv917VencjZkEADxyzxUyxrPvGf",
  "key21": "5dD7P8SZXCVYdZadu5zB3DdWgGu9iqtHkbsnKMyu5EmCkGSFPvWoAortaXnjAaVRqiFNpH1VMHfG23tpXeF78ECo",
  "key22": "4nJKTGMxrfMvcVzvji5TfDDtmtzqDdcMip9dBqSrNxayaxvuoUTX6Q5oFkAP2KuzwKp1usK1WMe5En8GcjrHACPs",
  "key23": "c4sgDRffLLJSfDunWYWBNnk8qf5iyMg1oihroqKKFgb2YgX9AzAUwWCSrbXHVVwVw3VparTsNA7bRHS76BEyGYM",
  "key24": "7uWdmR8wd2BNNqLRMmzwJX7bjN3baFLobAeasFENaoP78FkeobR2fFZfWX4kw2qBCHf4Fe1uiYWeNqnCxVy1Vcz",
  "key25": "4x1ieLjmXGRAEjs9a4v3ztPJHYeCeigfX73d5ZpgL32JBFEgpQCvnohYA6ax5cQYZU64ReCxwzuBWu9L8JhRxybK",
  "key26": "2rbF8YbaBQswdEM3CakEDdaG2hAvdvNHFR9YE5VDztW1i5KEWDHXEFBFCPVXdWdKn7gQ9r3ei6xR1w33HCCVqaw5",
  "key27": "2a88R6h33qbZmRYNYWuU6dmGVVHdyrqRmTxzqwDg4a25dHULMGubTnNjEKpxu3ixJUtDw4AEiHuy7GcCSsYRKjqm",
  "key28": "42EKsw3fb2o1SDUY8N3dRaRPh5DFYrpPoTQTBaLZUru5jsAJsdH7ZVMYXDVWXZwmFLd9U5SYvR5FZQotxsbSAQmM",
  "key29": "wsP1BXFZ4nN8ccm9fk8EsxPsKoo6TXbrV85KoAiWWxpFaFhokjKPJNgxJeQKzSb6FUFnkqerGEgXY3Pp7niNBJb",
  "key30": "65eu7T8Hv7zYwZzrwGpEBMgDUzNRAbdhwNG6jBX6ASUsmeZb9ncQnBk5kKNmZX6DWWT919poTEcx38qm26hZDuMv",
  "key31": "5ATHqGLj1RQuyFa6KrXfnYJbG3VN3GgZckRvudMqWZMYf2JPpaZNpdvijuVdVCQLMi8XQp7WLa2omGrK6aiwv2Ev",
  "key32": "5J58XgC3WhdqtrwWLzqmZY4q68SjcmtcyiBDYbgCcD99VqDZJx288kdDj2hY1eTD2Kjpyq9iutzop8uqtkpY4Ygz",
  "key33": "2LWbKTSEe9kN9pYKxHVDrmsBrFcCCTLaKQZ8wNoYyhNVactCXnHpEgxjDxWv9m6r9CAdxoeRLnNb1WbRZnZFUjg7",
  "key34": "3QXabmcmZv7KJSeecrRfpt1bJCkcq4Tx8TGTCqr6RUpsxjqeSsEKn7Xcypo3UbF82n5Zwg5LN3rUh1Wgv3xtF3ys",
  "key35": "3sv29RTvvDTyYn7TWgzRBw1zFHmkh3f89rGdCwNaLomJgjbT1Z4VzQKRU8g8oMjXd2iK53SD7fSRshjfbyd8VcYF",
  "key36": "2S6xAjd4ZVqRvg7agMwcDJRdBfCZhkfWCg4E1jzLGYJnBMZFSHt49HxejfX7Nr6DDXkHYagtrL968qtiZJJY1FbR",
  "key37": "Dnv6S8qJzs4anX5R4NQj4gTNHotwPd2faP3JhmBwCVFv98XCdWAe8pucmcWjXfVJXuRbVHZkPxzN1v331rev4uq",
  "key38": "51QJGCtu3NGcz6BjCAmMvfyU1vAieQvegu4qTZLHYUHJAWyPbfaCbWj6s1HrYVsqENrzErigxS4dY9Gngn9Fy889",
  "key39": "47nibS3qJbTbTCQ2BY7LLfgqkBGMzTCgWwh4LFvZP52VkXA12y1bnTMenUK9BwzRCKd5ujg4JzBjGWivsCeQzKp7",
  "key40": "29399DjqCoSHMBzkGTaTB3ZyqVvGJk2z2cMTwukXNSSfcfFaNHMrWvnh1umgddgLfeLXNZ8LyqrLDSydW8i2dPph",
  "key41": "3t84GJtfqKq6ws3w6W76ZwRWm3B6DZvVRpwXWZbdxrQJGWXs7WDXFPqxi3szE5isZPbg1AEKD4L9SDjrVjrotpjZ",
  "key42": "3sT3FQ9qHMaht5fhr8nu2bMCEgCycwqf1CoFsCMYKsKsSsdBmQQ52QEUiTuNLhKNa2zXhN5xX3rvPbj7YNJMyPCm"
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
