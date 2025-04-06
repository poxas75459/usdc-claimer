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
    "3CMsrUDFEHmx94WTaEwVeZAgMzuQxsbbtGukbordAZixwPUJ7Dy8tBo1CXg5wukLsAtfj9g6dYHycg5g4FqJaCHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647wYom51YnYX9Xudjmav4cVSwfVfRvtU2LBLAvZusqrUPjsVU6LpzpAXzd5u1Ayjb9FaFmo3QEZd5eybpnvr4A1",
  "key1": "4RLcRyqBFV8p3Shjes9yRzdo94pMp4ccax9BRq3iopiaiGxji2ioEC1ZMzfgV1ZtUMj3e5dYwmT2bHcy6YtXEPZJ",
  "key2": "4VQNzScAuPidZjVY56Ww1pnG8Fcfc9cpVnC2fQDxwUcZyYd8gZHuqrch6EHDdqYrgZpkLtti4dZripy2eUhmh31z",
  "key3": "2t5yP4iMiA8onsoEca2YxeTAHJE98T7aUSupWa3fngsV8zZBKww7e7JwDRQfLYefPK4Rw4KYoM2DQZeQmJH6RXxp",
  "key4": "2hX2N89NUiSVFy9B65FUUhwAr2jf3kUT7mgxCkygSg7csuzGiLKhkPmzUvGfT9Sd8aX1ArJfiESjDfeapP37vPby",
  "key5": "4cqUai4ohS8ERtKzd25uZei79tb2ANUyoHXchZpieEXVymNmvBn4x74FTgEMtaBjYAtZndJqrBSae2bHMa5rN7ia",
  "key6": "3qHMumr94wPw16eLJgT3YS6ibzdUs7DG5Zd2sfZWnDthotY6xZLRF2umC5Sqh1sysV4AahmosMSd3KesVr1F155J",
  "key7": "2M3N2o2oRp9KWrHKAETYBq3J7ZTpZ7Fe9v8YEG5TuLyX3zyAib2kiZiTtcaWY9j3MceVKVaC7hfKwpdoVTVypwZD",
  "key8": "57yoTuaKkhmPT5mpGUDRgYMzS5PXbqw3go8MxyU3HWnsutou2UwUQTHKvm4DfYENpLmh2EbKP1oSYy6a6Si5E2vh",
  "key9": "616zsu29noGNq9PCfBwYWe1bohrR5TUbt4z7B9EnmrkhSNLfa2Zy4bFAg3mzepAwvf15jT45W6o7AfEQXiHthmuv",
  "key10": "5QwbbvENP6YwHHvmCwfUnVnruju4ZEVnnEp9hvTYc9YJnb8cxsYfBrvMNTxeBAKx7oDXKykn13HKdjTwVdP7Dt1n",
  "key11": "AJR5h8vaYu3g6oCSAkMhEdctYxqEcoXYfPQdDgtcLQQVn1zMq5e2AH1bekpEy1duGLCCYFMMdg1yMsnoz1rAfn5",
  "key12": "wpB1yqXN31vWFkaypzzEytexPkQNkZMFLkbBs1qSEWMTZCmDLHkQiufoyy6DrvPJ26y6mg8wW3gNK7BLdHjTCuu",
  "key13": "G2xshjHRJnfAg4XS4zNqEyGfsEav4hG67NuhBdAknrvP4C9HVpCUrS8WYzApZKKwFZ3F2DHfXUCyqeiEkrg9nR5",
  "key14": "4r4Eu8TYjeikobpHBczhvJbceDQJf2kWo5CFwKVeD4vegwCUToZDkTAZuKMXcQkgVeXGtjaMeMirDtUBypyMGgTu",
  "key15": "4zEUj8HKBdvC7GQ9S9Gg7CyLCv7FSRPnfL88dkzENs87dT3MrLBSQwY3VQnyg48xNqZoucDfUj1Fdm3aoXXRnLFS",
  "key16": "4T3fUfZ5HzFVPUqBH3DfxziT7QyFQMRpymkK76T9D6ywaztKARJUTAiFimprcsvYXGMkE4DvWdTp8m9cVXX4YWK8",
  "key17": "5jesjqF9eYH19Cv6Vv8qBq5UzuZVizZaeEbCr2akF7nC6ugBcoJiodm8H25WUsfTX9y7jJvCSYGxqNJ5SyVxF3g8",
  "key18": "4yF98FHpwEvBBbj7zjYmFA9kyc23nWa1qCbDGgekDgP4JQT17tTxYXB6rZofWU3tc772VbHgxttnXN7svKPbHjkN",
  "key19": "5P7Edit6FMZBKA6cfVbnsWnAbFBCBxftTce92rPSTbowa2qbx9HVhikwmojcMf8BZCFDRcG5gj2vgvx62pSq5uM8",
  "key20": "52oUP6nEj16sWueWhTuPnveareDH2PVzhmjEPQDQ6HpE1YzVD7sTSbfxCAn6WEqjDckkCqbFS9aYWERyi5oQXrM3",
  "key21": "4XZuHKMhbduU9wdWohk9z9c452GBuwnpBBrPYJazwD9heMHwuUJZiKuBvpoFTYgqn7j8k8ck4ukvZEyt1vy3SPGP",
  "key22": "4qxCt8z73cYffDdBAXXih9U16G2XBXQ8z2QYjZasn2JG4h2g2jwDANyBQtkcsGQEnvAocc5vEyWQvTvSdgrsACbe",
  "key23": "1JXZmT3qmgAjZoVgM47sMn3JVw6wKhQdnWzwQ9nngnhD7NNgzZgUHTHemJH8a15QT1MZZHCqPt9pjCuUY7MRBQU",
  "key24": "2FQPs1C3ddZE98N3eobUX66qq41hpYjiwBpWkQEYk9edMvZVYzr9jFC1qCQZTccGdiMLAEVcz1iwQotmmtfNjTNB",
  "key25": "5ukXSGeE4ZfJZEUGYsM8f4R5C2KQYdPPBbHm35v67K17WTs1Fre6Me2eaP7goLBSiuFBh4SgtpSG7X8ozQ1WJu3T",
  "key26": "3GYex7DkSpJqXR8GQQKCb9tfZMT47u2YsP42DmahcHDKrYJr2TeVgi55EBSDadbpMkszWujJCSmJHP3CPkKgR3Qz",
  "key27": "kER17cfi61rPQM73Y8PEnXvcwRCK8tkgLa1ix1enepsDXFT1MnacieUYLcB6Q9MsfKrqXfp2JeLajpiPEP6Ajix"
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
