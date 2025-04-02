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
    "2enTqG1Eh5qxSMpjGkZgrho1Yy5d8HRwPx7cYfc35BTS2gt3BrqKVqi7kdVFdDeYReVgawLonGeaNZd3jmS5jUUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDaFpJHaEqAjaoSpFYfxTyK3wYfBT5QCirX1WefvUhFtTN2D8BgZDuHwaU61YxzC7uAvx9Yd7CTP4FuHNiiRwpn",
  "key1": "3XCDn2yN4rqV4ZpGDSu1Qz5igPXjMx6F1cydqJ6R5SC2yqTa4yKSgMvxhiXDmdtyjgN1gTACiuAiSYUwMUt1x2Xb",
  "key2": "mFiFqv2U4vjLw5ougB1gi3nhQkSuxgviXVE2bqQsMcb1Nrb7rGThtcLEL4EHFqRXDRkvRaVvAeBZpW5uU5oVfAS",
  "key3": "48C8wfEsKH2q3aEgrfoGYaVBmw4txMJxjsdCrNEBzEc781bob2iMhBkpUyWKjZKd9hCttKcewYvSabuT6F6tyQA4",
  "key4": "4d71xfQZtraqqhZHo6FRucZDh1Vh1Q6rhBL4YYCMTNB4s2e8ME5ZNrFqt9kqna1GVAJ9jUewqoHbqZuw4g2E8xK4",
  "key5": "5DobAZex1a7bS6g6vWYYX6JrQCGA6k916fH53hXSPQZ38VqewCG1AfCfzGmJHXmeokbLb93W2e2PiRQtmqkmLL6V",
  "key6": "4pCpfk1WAU36CHBWdVchRWCQTbdrp6zuutiRvtRTgLJ6TbxbHp2eFyBKETVy7mGKMhe2DGq3Ut3s6Dx7Ti94Z5aH",
  "key7": "2gt57mh6miSZia9xMeJmptNbQP7qnTeSGgFVZzrse7AGC5D6Ws4MZiRjGBmoSLwF71KbETccu7oTZbFLGrAzMXAw",
  "key8": "4kk7YHgBZ3MnWMDYFUZakvsTZyrcyuQq2s7gWhp2t9WNeSNKYPk8GT1p3i8NTR6jJA3fotEeP5JieMKpbdPQvUSr",
  "key9": "2VVqUEQtTFogE3WcfadKZXZ42d25Ttow3mHBKhrQRXKpRYXWWoNc289tagVzEwCrG8bQVrE4uCrxFhZU2prZUgpV",
  "key10": "3GqAG2UvBou9WNESXgoyctY6XKHuzKn4HdDs5ugAKMbzQ9PJhy6nhiCskXnD4r8aY2DyjLT9EjRXP3GPgTs1QkYJ",
  "key11": "397Bi4dPPWDRQRytN3jQSUyoNcW9GUeZ28MBFzgSnu8UDoHNY28Kqf753Q9TXeRkT4rp84GYw5poyCshEihxUWMR",
  "key12": "4Mxw9SbBi2VhnEcDMn3PCQCwhsJ858NGsum7qWmAKUgDL7nWW3HAPQT6jU9KiKeA5RvYy6D5vmxdEMWHXMbKwcY1",
  "key13": "5R1sdeX4gvULKhUdJeijcRbdmYF2tjPGbuEYP5NH2JHT9jC5W9SMGccnrStY3bhfhuHgXKHRU7H66BtkaXy3AykA",
  "key14": "73iitKwxwBbkr88De3FGvZkcQHCcTFPRhqxKnifZndVtzRPTwejXLCyLGcWAx7KQtSP4qR7T3vRsNeJEhsp8VGp",
  "key15": "3h5NPxUPhYXP27JY1ZvsWNzZ5vWLAGpMmAdpcvFieKR26AfmV6u1NnuNMzYvXSadAq1hcydYJBbWadXR91GVKcT1",
  "key16": "3AsqQnRtqnEDNiwyMcGJwHYLfwc2ACd9ykuiQqqD977A3nQaxTkwgpRTy2yvfmMTQ45spnx7XFECkynJgUZgAcyM",
  "key17": "2g93BcmYvVRNwhPh9mDTE9nYddhD31Yy77JFPLgzm61H3DcKinkw1vc7bJSitfWUxVtMhqKQAvP6YQaEuMv1sFwg",
  "key18": "5ZSVny5e9UnjvNNc3CWwN9yvVA7ZuDgouVYDhpEmM5FdqQ9cwUy5p4LS8gazSMnSW35yskHkDni7EBq1wqEzr3Dd",
  "key19": "4ewTEMepxNGwQ2hmPwPYW3JZeumCnAhe3VQrYg1WaCexfN1mUMBwNapf1bqwpJnUvrUJBbw7jknbj6Dy9EfejCwT",
  "key20": "4QaNNaHuFbAtULkxgp5UFwc8TtLuZRg5W1GtJ7F75xpcbueeGFEXsneFhERMbgr1T4WHV8GSd7vynMuL7WNL1v8s",
  "key21": "5Z9TJuMkcnmkrUWdhdVXhwfQ4UB2Q8b2nSm9GHVrwsfHCKgSBarpSMoHQoNhwTaNbPZAwvHC6gGpUBzK8j5o9bBK",
  "key22": "xpjoxkpKZYcm7iz9eawajUo8AgUZfRrjMu2pChtFUxSESGTLDEDHn4yGamHLnxPTEeGtaFWWpPnHeqkYJePnFmi",
  "key23": "4WyJ22iowMvktbUTm5T19V65ygQqfzSngAyH6sPXrttsCuvVa3MGfczW14hWwA21rpPnknxF4uQeoLko4BsGME7J",
  "key24": "25miedHRfvGmgHqfc1LnfDLybTCRGvmk4ZgPMocdsgxhgBhT5Yf4YGizmcQzfDw7KyyyHYciB759JxroyyxNeRkM",
  "key25": "4TDDwEWcGvwqK3WrDQkGhCnj1k6XSUN4VXqxJdNrMnSas4bwSx9LX4Yt5DfU44Y2J6DhGBW2wuuq6pL8QL455sp7"
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
