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
    "3Vzy8WVk8nhJsTzmAJNK6WHJrpeVtqttAzkQRa3vj3q5XrQiaAa6FVQfSkx2FqRzuBFm4hdsFYiRKfgsXK7UV8gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHPXCT9rGw9GPBcLZ64Vr4LvB4E6onzk18wjDsozFZCKn4DDi6mBHXKMKmWNNEg6nEbxzxRGXcNVASTpypLDVqE",
  "key1": "4EBPGbZXpUNjSKyCTsY12Bv93yCLpso6aCJERT6NQWJoK6SyLhiDJ8d1n3X7EZYcBLEJqCzQYcgb6EaYzWeGsyS9",
  "key2": "5C3SFRv9Zop68QMHvmYLkZjEGCLnLyxV8W1pXnNE3u24txvby7JWX9V6Rjyj6xhyb8oF6mjRt9EzGwVyLmqH8MHw",
  "key3": "3zyuMzRi7Qb2HAv939nrpvMEk318G6epDbNvWT69CcoUUQ56WQt9dQRj8TnjonVVLtkrcSbdE9dUViN6rFuXTYSP",
  "key4": "2dkRtZhUhN55HJBLvivumtvTSo7t9wfgUBTdbcfzcdfgf2t2NzJNEYg58tBXNNtLikyrYScz9sUz5bfdBtgdogYk",
  "key5": "hwMwwxoLPSZ5kzyhWRhKZzR8xFVaieXK59rnXbcExvVaGQjehWCXjZ3aqyjer4Kf4eDsDnPJE9C8R4SJdXZRdgU",
  "key6": "26SFMWU9nAoiPQg8KWy9KB8M6X1EUscMpH5UjNq6StNiirPVekn5hXJLizTo4YHz7QFWewFBe57cRtH9Eg6Diytq",
  "key7": "ZRT9wzytJs6Mdq76WPUPSoP9qsa2duZHF1oa5ou2UagUzzsrJrGfM8ra8T3rqwLmVKezN1V16iqmisMvvK9cXzn",
  "key8": "5tXSRfXUY3rJ465QYhnZgtSa7bt6jft1RedyVvK6J19TNpmhh63yfV3hybk6KZyhHMpdTAFf5EwibzmiWnME24AA",
  "key9": "2uBd12c52qfdcgSnqyvAsqqYspHEuswo2CNY9cCVoboruZtJH5KeGKF2sWrfvR3mSR38yP1ViJ5xy7z98qzYKrYf",
  "key10": "2NYCyX9xFUtNn9NRsT3KhdjbHQp6VCoLqHkVb656gEsPuT51n5XAKCMevYn3mKBs7gJpdmS69YUqQjzTnA6Cg96T",
  "key11": "4tusqinALoKJ4z83XqYqddgUnAWhqNjhg74GsXU74Gpkqtm1JcZnCehihbHUJqDuQsomhErgXRgb1KFwaxqnTTVc",
  "key12": "5iESa5x8DqVPQEDp12FVtRCxG1itgePY7cqXF9rWWS9q8aCaP7oiBYud63K6qB8gtigbYZ5GbESV6fWHPLNpADnT",
  "key13": "4gEhfTY1MwhGsTQdf7bm2a7Bp98vJr9ZAQ8nEqLxePWtrRyBC1Ck2kcXaJDz9VsyukBg6JRTGx8YeTy4Tn1oVid6",
  "key14": "3q3Xmee97XUrVpgzY4gmS9iM6kR8iTUfrHvL2BS9yqjy76hZiBb43NYwTpfDzGKZ6AHP6qCvsuDZtQSiG2TRMF62",
  "key15": "5SRUSSKTG3cJWQdWaEVKteGePmSuHSCestMkvcJJ3XuP51DCTxQFcpjPcTtPeNZZtauSkgDaRLqpWfW7D1XKSYFj",
  "key16": "3qQ6zYzZxoASdScWAxH87wsyBgdS3yunNK46PnZQw1rXmN7TSrqAL5BWSLA6KocG1uykAeupVpKLzjKyQT1o5nB4",
  "key17": "2LcXyJWBUuWUtWqkrWsLZyXEhk8mTBqx1wqsxbBbx1xwD8dFgoQxguuTv3Rf7i6zz6zeSSxyEHrxSvZws4DeJ2Pk",
  "key18": "2XUQ3cMZWqH5QjfsJMARZaBHUDjtHZk3fj3jLssLVfiqtZcFeLRm7Kwqfvr6z4hKPyCW1zxxAbU6pyBvsrd8xzdc",
  "key19": "5RwEfVnJognRPGhikATn6bxEW2nXEPs79yTSzZBXKtMQhzehX1BfLwMiZPaU1Mm7gC2nBRPhktiPTdQroXHcX1Wj",
  "key20": "qqGVSaYEqVXtwBV2eRA6Bqd1sbtJMLPqEqfmWz19V7JvwrLnhcP3q1J1QJXztPiALt97f491vSEKRDAhCcF7xsq",
  "key21": "QFLEq2pS6hDGSDaVhPdB8pi4QjvuEb2HdtC4BM13r9WTNA2B299kfczECiiCrHg7LaeneT8M8k4wDWRMcYbahzA",
  "key22": "3Dr6KH1nQRaD8PJnycepwt6o8YXTmkpm3TGYp2LjRvtNh4L5V4DntYuoCCcqjFbAR2Yd1e4FuNM84cVQ2Mw684RJ",
  "key23": "2d9REmqyvyHJnfAhfpuszSQXC5PyX7BHR6FVbQuZvtYTPm7PHkMibJgktX1W91jr6sjxK3DpNCWfik4RtvFs7ba6",
  "key24": "o7LgUHXdvm4vkZemzAKAM4AYUk74TawXeEHX74GQrENptseJgdzcjPMjvXXK43VxyiFsyGHgTJaZ956nKz9GRba",
  "key25": "4pJJqww6sHc7b4c6db11Cpou85hGd6opmsEMxwmRRuYWsf3xQ9MDujsEaFqmLCX3Mfkq5h47Rim7kRv7ARWcWKzw",
  "key26": "42r5HLDDrcTb84RuiBHsXKYhiK81CiEdCa1LheZjC4GepLqDMnMUzQiTP2g1MUoTFe2EaDUZNWvGxLFpNLBQ8dhD",
  "key27": "4CrrtvDSYY3gc8KSi5mCdAJaPhHwhZpf6RqDDD5PwaxYnK529x9mUMwN13bGUpNqUacBCmkwrexrG9KPadZgkUZf",
  "key28": "49woDbwDS4NsgQaZ9QX6WfhbHpdBNrfDCPVfFN6JfC4TMxXoLY4imG8yDsDFzoLKcPQkZWpoEpRzKHmdDYpZea4f",
  "key29": "5UwzXdnddZVXApmGxwHjoCUeArJCo5fCoJzwkEYKHR1U6BmoSkiudes2NnS3mM6fYwrZijG2EpMPaAWCJmjiQrRL"
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
