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
    "5x7EeG6xQaimidWSxTmwwCG5kk98ihFUDXgxwVRLj6qX4UKGojavTkehwHmqMWEFKwGCx3gtBESK4vhbm2vvN4wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYcLnFreMns1kFJqvhF3z3HTVUExdezdPU4ht7UxjWmHyUBuXZgeYxUCkmqJHFdEZjC3Qk347cjqXPgZi47GGys",
  "key1": "63WehsRqgeQ8rBqYmiPQ1Ayzj3BV5DQeUdjM7KbEC1bb9EkA14GV68gTEbmayMUmqbtWkmJxVz9CHYxzmHTUGhe9",
  "key2": "2q7zFffPDwp9Ff3sqDAtU4GZcychKSjgEv9HHHoHR3FbwYRZ4Zb9tP7knafoNHSaZiBZFxiXf1M6LjtZq2kyzikD",
  "key3": "59aZcf8BGjmpLKoZ1uftNk6VpuAgyt6TLCuuDiwStBLb2ZWKJmzt29hfTd7jDYTgA9XrX8ybo5V8LrSj6fDkSeNU",
  "key4": "3zaE85PchcQsb3aMWNV9EZV99rc7yFSTVmTrh8kzqJ47dVCzAoWALYNbgCWmNSfnBPnn8hJBN9qTGWBWxGqp4kDs",
  "key5": "5orgj94i7Tg7XHszw8nem4xUrb2PQLtDmR3iefx9B3hthiQmuUnU9Ma5PkyqZNNW4jp6DGB7NMKQdG2FudAZNuAy",
  "key6": "2bohGqAK47hpL2finn5ALQC4LZSeSFXmtHBhcBctbazHQaQQqbgLt7U5eveuFmw7R53QCnfE1uTggNsTs3VgwzNL",
  "key7": "5TNH8EtV8x41mtqhSHd8JA94AD3P1W8cU3M8e46grq839H81rgTFaxUNxRCeWy7Hry4tCFyykWYbpGj87KF5ppwG",
  "key8": "twpHfkZLuoAva8T8p9pp76MZy3GwdvjriLqrwnuRwvzEzoYNEYVnqMPPMh7W439Pa2FkCuk6rxt9WoAKt4VRgNo",
  "key9": "3YEN8wBap9iuFeXgPM44yYEAt3eAXgYPsP8KeSkGU9scYiRKnFvT6uuA8ZY6t6R2SCrbzKpukgd11zdQ3mgwbsHe",
  "key10": "3uEnEamSTW8nfWr676sLzytr1vqUnjLFo9ZZiyqLpkc6Pr8XPa8b6BjQTzyHxVYVWVhgEYjpsQQPAyUnqgoqHxxf",
  "key11": "42c7UBQbEwiuW4kRKjpgeXKzJfqTygeZs5dqcR11oX1MKozYGVuL2kLohQ8Qx8Deac4zTczHkUSBAXaWHQpdKNPY",
  "key12": "2dowckfqpnUgpYE9Q6YqTXqoREm7xqjTuuKLg6H3RHB6ZzZgjN8ebTgZSwyFkLaRTwdSwoVktbKJ1AozWE4A9GNE",
  "key13": "2dvhR6FFDQeRiYS1Yosvx3fRWiK54mRM5iF8Xu113H9727EB577SVDVsHYvSAjz3reUhbP6oZj7uiQDXrZxTmhLu",
  "key14": "4iGj8oa7EWVeeob7kMqLMHn69AwKyAqcLnYi7RTPxxZuEAUFLqjDMGJYmi3vqTgHtxMEEXgqCzGgjRW3HWqwzJwm",
  "key15": "66cubnTP8ydFCHZPrDv9utb7DkiMA6amKUdeKMiqvtkaLxSVfzfpyJHAJKrVF6iz7KCdF4iEWG9Fb8FgNc6pV9VC",
  "key16": "ycRzAArNPx2NWEg9T9ZYqJtzzx1RDnkZtLsZyVRdFnWyUJoSYEiV1Me1NQAxkF4KJos3iGvCdD3j3d35e6Lekjs",
  "key17": "5GuuA7sEAYzraBp6L4ajynL1bq9ezs2jbfBkUedxr4ToXCtHEiNG7QKDBinH73YUW7GfzywxNEUcdHhS1JJJzvpA",
  "key18": "2r5sMFxk3jtTeqQ9PEoUVUwVCSjbLEGg9cy83bWcq7kDNrfQwPgpfG4go8UYCPTkzYVx56M82oStYxLoQRuAccTG",
  "key19": "45ocYF5nU8Yx55oNA55yuEyaekbBJ3CVJJVTNJ4WUkTuXj9hTNFKbLQ7w5nAVq2kEfZspzQe2YXnF6xyTTo7CFKW",
  "key20": "2YEm2PnhExaG4GARtffgvmb79UnKmCCUBc8dw52C4xNPHTcMs7ZAFDd6Nu7L88eoRN44LmRx6XtZuiu8vvmLLVp3",
  "key21": "4DZgq5dcu1a29Y6Ef8hgkqS4k1zhdy47qnARXUKbo8qhHn374WpGeTJn4stc4LqMD9mcQdroE1FQ1bYmUVFBUUbn",
  "key22": "29N3UbMj5LZLwDYhVgmLyU41GhjX8WVoaBve3865EUsfvTLrhixDnvdWuRtAYiMpQ7K2nokJJP11LQhLPtJgy1ga",
  "key23": "5m87nKHF5EzRjiHr4E94Zvgq15oCLe7UKUc8dJTf7g1KoJ3QpfE6m3PjuhS2hSfiSctEuPsjrhc4WcHCh7SkJSej",
  "key24": "nu2BnmBV3GL8dQ1PfYkbzp2BzHDEmSrW4sQu4ujZmgBCJBdvA3yFLPkNursqKPhBjk5DnWyQXmUiuCzSB86Zpvo",
  "key25": "4b39Sv8sD6Sihsqw28AH8jV3Eya7nCZRfWzGSP8CBYGLWP9aswauLV48Zinc1A8xhUFirwRjSUHbW1E9g9monwy",
  "key26": "3D9fvLB3WYwLktL62zBfxKQkV1J5wMoHj8hrpbd6h2rdZHE4TALgVGyKBcuQuUY3ZttcLjbuBkveM4pm83Jdwc4s",
  "key27": "3oNgRuE9xweTNP1WgH7oA4NeS7ThQGpwNKn5VoqH1VUqSp5T6zum4pLhzZLZsZVM4qLpsgQ4owBQY9zengtRFVXp",
  "key28": "bMsateUi3aphsPTH7cxMRhMWJdiLaACu9f6oB5XMNcNUmRYzhE741ouigZrx9yDwtNetRDkm2Zsf3L2UmJNCSNV",
  "key29": "35Sef8yfTMggJ5NHymsgxWTqMKKxMvhZsxJZUbJXvEMQ3nfreCbjPkp2iZyV2ZXBrNPkBLUUVW1aQcU5sZXy8pFT",
  "key30": "3aTxS2ZoNFLFhTgwGPJXGRhEbJiGekLHmX1SXb3C6YqRSZAeUv9MSZqykAR7xBs45UkfxKi1XbAwipQnLgAWB68Z",
  "key31": "5tqcJuPxrWSqStWhAnVAJdRhzjqtRjeNVH4T4VpUjXuFSeXDF9P7DhDXy8nckCkk36mmLtJhpxACzYaKP3LuPCpJ",
  "key32": "5DpQwoiAG9RMwBtP1Mc4DM7D5oouGeVKPmxGvE9ckpy4c1cZLXe7nCTGmrYShajs1orUanEvPUapcJy2bJ42HrU1",
  "key33": "fNXAuv7tYyjFhSsQgu5JACcdozWeWvTjqjgPhfdx89GtLmYtMaqu6YoBUkGd3nLoCVCCq1thbYkAyEfGW2cR4hW",
  "key34": "4NHt2Spp24kFx9KEht5dYVU7EsRAcjSj7L2c56cdbkzK6AhN2Tu27DiefcxzRiPQLMS21YN95BwNv8ccnTqB7xwq",
  "key35": "2rDP2sjSvznsydc8nqpaB91V35b2TLnBNQ5rQDrnRz8xAfzTpyxknf7Ra6rh67fxGpyWBDQuwgRmAXzbHZ1ZpUHQ",
  "key36": "4rHVxR3wR9SvvLANcM5eZAmB1UXWmV9zwGAdr2AMjMNdFuxcKQhgp8Dc9hJJykvDUg5QabZm2oafXrnmhWKQzPyc",
  "key37": "3k2HcGiRhQm9gaS92FL9wrkRX6tBruqn46oLodLaq4MJHJK3NQ2Ndo4akYBfT1YiTtwgpzvDN5jhquukfQfbfdvZ",
  "key38": "4ZMbJkzfkuW5s9FG1AjYZ4AgAxbYsWmpC1H8kMVJLZBMfb7hXguE2BpWRiYup3W4CgAYMbX5w3KQ3W3qMe1mCDFq",
  "key39": "57MsXoKuMnQZTc6TwsLynEEekKFTTKDYBNNxSk9VR2X3FBgkBNppqE74ZGEFLM7LQVH4o72pVFwfec2ttndqzhxj",
  "key40": "5MDeLe339mkEF2MQGvZzKhoVvWXuLmnEo5fwthiLxU1VNC5PPvuzPveaTCTrJwV7DfMKj4oJf9mcwEPzovWE2z8U",
  "key41": "2X8StgbqGeybqah7WRWgtAgtqyfLpQzJQJge8j3FmpJxfdQVEDTLaL7hLiNwXbjhbbtqBoZTSuFndUgxRPMNeeRV",
  "key42": "3vzDBSTRXpvU4gA5tK8HPuPMcW5iwTm8XQxvrSczcRwv8YbW96B4WB21eZF9R3C46NGvm3xniDQ3pBe54yJP3gpi",
  "key43": "3HkkAmQowGFotBpaPC9k5xxeazgNSnbhWtgNdMuPF12TTmSYCGJBMmCwDpSuc94LSkR3R5SkYYfwsfdUz1wCdd3D",
  "key44": "9vKubQiz8ozj27ADAMw2ZUwykPdBHBCo1Q5c5AvF35swA9xQsBP6tyKAgbmiXZa4qVcqaJah8Ecj99PXtQQ5cpp",
  "key45": "276ZtFHwNju37r6EixGbzDxwsog6eiS1uvQTS5BkV1koMTJGmmU4cywmioDWzca1NiTofcJ9KPWZwu5PRvhpDy11",
  "key46": "4K9fNrNfUFVtDwKUp8QsUZ5c793Zh4MFeVGkUsWm2zUjdAqGxkLpLKR26tqbwu9SRiyGoiEc6poc9MmgVgkmuHGE"
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
