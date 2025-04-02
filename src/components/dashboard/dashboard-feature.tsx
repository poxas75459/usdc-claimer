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
    "2JjuBjXy6yzK1vWLvnVXwMqwEuQ9DCixJ5iBf4dw2W8WtHnWSUK1SyYAu2zF2SSGjEHgggYigbcvyjyqC386YsEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQrpRWQ6ZhP5BSSRYnhfrfsxwEBjpSExU8YdViZ7Qk6JJa3rG57T4wWra1i3kjaWNGwSS64TmFB2YxFZVGNs15E",
  "key1": "4vwEKS5jxvQhuosT7GgHcmtkwoLFYFkgyza54U8WbhZkmHHyVqYDq9iSHiDzRhAoHgAsynskMvfKoskszEmwqiE3",
  "key2": "5UiM3CwR4xerEBcU7Wkian8eMWfMr5qKYw7kgsPP3yV47SbLQFgjeUgxg2gJqn4CHWfe6ErSb3VjCzEuABJ3oUif",
  "key3": "4gjk63VUsAT4VDcVgAd2DT7ZQSZVkEdXgVMB7NPd5e3nMiHg9Pmv7yYAksok6phNYdJLA5UXYSTZrzUb3MCPqNe",
  "key4": "VghJubW3ggtgP1trDyrhb8jzuk2tzMSbeqNqkntp223wDKBgnFdubJ8nreiFDvxLrD7MeXVrvHiMod8izTcWQRB",
  "key5": "2xAuiqPfoCnPMLAn97yGw1awhgV4NW7R8poYMiAuTMLq7n3Dzpcv23WN7qNsEs6WZk9jxfQPJ3zJQA8WdGPJeDMZ",
  "key6": "21afRwcmVHsXN7ooGGwHL2mELLVn9zyMYSBM43kNH1iNYpXKDUySn5oQmiL3HVQ4fREG5V5PsivKFfFVuhhndteU",
  "key7": "6521gkvMxwKYHX4UKPpDmdqV21j7N7uppXTUknCTY2mpBxnam2VkFftZMJW8wWTfrVxeHzyUEAEHCFWeB8LtDQX2",
  "key8": "usJdVpSajVsxsrnhSBb4qmvQoDEQ6bEqUY5aqho9zZUeWLoNpJNYtXGS8mk7sk4VNbunCeqGPyvcKcFC9htk4uZ",
  "key9": "3SwpYfowVAzAKKgxxnSDkmWc3cG9NUE6Qn3gHyfJnjSyHcT3sx7FY5F9kue5CzYg3mSF9AMVU2xRD5JqCEjkxjeL",
  "key10": "2cmZvWEK8WNhqxDrtQSqxfdvzGTrY7e2cWVy3T6ag8jyoURozVzn4UcwSg9fCy6PYnCwXy32ahmHBQYKjvL1QSuC",
  "key11": "2iwTPHU5MyF3e2nqE2ZPYRNBT3ARqReahpE8ww6F85842SzpnJrXPGXgWBrGBfM69vqSk7GHq6q6jkc5uFrSEcSv",
  "key12": "4D3cu2fj7P5EZT2Dyyzz4GgoJE3HLbGc1bQKDZzT1WNxu8ua4p4oarz37rBZSJ9JUdvDJqF8R7Yk5w199pozGyyU",
  "key13": "4VcrDxuBdFFkTWpxngKLx53Dd2fs5mzCJCoUfRyyGB42XvBtGNPQGC3QoqwnmHkir998vumUHGSQwCYf3LBxWTg3",
  "key14": "127kRcV3JerE1BDSm71DVijXpzAqpKA299ohYb5FboWqCs44qypPiVRUbZ77eCUEHUgKWedcFapwZdx2Yetvz4BR",
  "key15": "5ndFrnaPZ7N9qFwcACPVeaFYVZsfu42Dda8L6A9KQ8NYAVCwBmKvKsuYmGwSKXQZudufYpKZFwfzEdphiZrnvFwu",
  "key16": "3DjpAQJPhX2Zb3Q38kGccRRtaAXZfA5mNnzTK3prYUKL5k3BukR1eW8LPPcegcnjxfRfyPd54qsbgW2SgR14tYvc",
  "key17": "2jCkB9g17QiftqHmqXJHyEnWqZMBLEZMcEJQNwcZeSCoF7s3MZhy1CNZhKz9ivWm3fx3NyJrGgfRapW2tCGcjAFR",
  "key18": "5qTNqXAkStpM3kFVjbSY8uXnGRvAbfNmEkDuG7c5U6ahHqK5G9MSNHUbRUUHMkLc6PHJvQRD7iV4obgxxcNTU4iq",
  "key19": "37QFq6MXiyHisdJNcQPunkyokdnAtVH7t3L5frpKqaR6bwenh54w8RKnZbsgRm1xLGNj3DV6x86kc34vG3SisqeQ",
  "key20": "3mTMWAA1Twsphhrs44KCXUhJRteCztD3vfRn4dq5Eky9965TrsuxdMVy6tZnGSVzSjYFAad17K7Rq3vhcYMwa2Ez",
  "key21": "28Q6ML1iygjhyZ1jxeBZNrvwh9EEMK8gZfawuEdrBqKtbprszVRmNmfFRyV9K44vomHpdYAe2v2aXBgh9nRDGMnq",
  "key22": "3oH486yxJCgV4smRrhtK3Tc7crcv1rkwDdVJEsni5v13kix9zypB9BnwPcSdKQHPfvzoSZtUPWGwtovMUwAQdCaQ",
  "key23": "7ik7xybaCt9hy7nPDtiBEVY6rAJ1hU6qHar1DQXGh3fJaYtv9Cgpp855oCeRHJsZhYKQKhTiR2oSvKXVuCd4ekB",
  "key24": "7Hmnt3E3GwobUF53ih4EUdJHovV5dgzXLg3YuL3atXB5y7Fsq5AtsU8ULsyctm1dEYudWD4KmwVYxvctpJfVLHE",
  "key25": "5fLGj3a4CBpaiEtFjXkUc8darAboQuJJRoA7f3mtdFafhP763iKxaqbmHtgfPhYZC71kjeuCoYqkbsZ3cHJMKLhj",
  "key26": "5kwx7YJw9i57EZB7fmD2fKEAtLehFsqVFYyrjKCDA1X7VBaNvTyY49TvUkXYXWzEBb3XfHNZ8xirAF5BNQAb5HiS",
  "key27": "5HLZEoFDK5YMgqTNrmAcsxS5t1YwXtxjEpYRUrh4TAuFwLE2B3FjQQVpv6yLxt6RtoZx5a3TNfhEhNEGZRXZWaHH",
  "key28": "4iGmeZa2yBhpFtr3ySzDzzjJ1EebM4U8xUqcD87zJdFzZLzGnUXk6obVkrEpfw1f5qLpPBpAUoXF1BnS9S1hUz6Y",
  "key29": "3VEYrcJSWiqSifGBcJoSzy1gHZhxkEcfYxwKLEqXzDPWHP93LWjS9fxXFntKLWxjWaQdXbxzswNDnhuBdoBNqoZa",
  "key30": "2pCnuQJB9CTpKmJWgWuFqHrFKhchJbkainnTnUtea3eGG2QTbXXx1CN8b1dTR4HZDCaJq63enCKjt83TwBweSFZc",
  "key31": "2kJhazjsV5oTh88zev4jrwxfGMxRGSr9agGwi6ZXZcwrUvMEftdkmRrmTzZriMGBn6SdUdSgxLk8JfjxDp9UeYJL",
  "key32": "3qNmuZuwfFEFy3XqPs897CRU2x16o7ckTCvJuqbKRgE7tqsJ2hX9P9pAKaujT8TYwohLSzufjTXU59GEZY6RtwwN",
  "key33": "5RJQs1EzwrR2UaXnZMM5q4XgyHJdmFXAaQwufV6pEqWsAkqorssb7giKmXxeMeGD43ZEE3zpoTo1GUqfwGN3PX9T",
  "key34": "5STGMmgPvSYHCMEZXRm2yC4rENqnFvXMEd8cPAQtCmrCdPWhrF5pozYMvT4BpEJNJ6rLtbonkK7P3Efb9zVwMcV8",
  "key35": "fA2W5knJTcx2WntgNJSshW1JhkfPSHh3hbnCDvwNoQWXvwBp7mg72Rpr1Z16nuXPtd1R85jDYrnJrshAnaMMxP5",
  "key36": "2xeH1KVLVidLXNjmes1o86wpMbBH5Pp2Kru1ZfNSfwipGBbAETWhtyu7YTKFHyd9q1Qw45SRtpt2gkVDwWSwgthf",
  "key37": "auWDprkhMr5boJo8ivijsiQN3U77sbayqLVSLq9kJGVh8cCLKJW6GEspCTvAeNwBV3DfdrAnSr4mgf51yd6QFFG",
  "key38": "4by9YYg651qR8sm1jvpZN9aumoT5HnUip12AaQfDjHyMGcab3fgyZWDZGiVH5fsok7VEbGDkg5mUEvctvcsLWNqc",
  "key39": "5qRdiGtgMvbRQVwsbNCiLgr8msqWMbmqCyGFzMCiM7e3YQBHRcGdCkk7B69MvvnQTqR6PyDMHA2WxFpr8JbGZAay"
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
