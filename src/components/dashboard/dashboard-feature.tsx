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
    "5Moo6jKYwNV1tpyfWQh14EV6BuGKhYdUfyGYnttmCpuRXKHMCBVSFf67oREyriHAFyXnr9wc1UbJ7pKq7vCLuq7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67i6QYQdSLvA6BkBVDLfxkPpPzE9DdyYU6WLuU9kiZJNSjCG5Efdxvi7fhaAKo4cfS1uWZ1ANSDoNFRsq8Mu3Dc7",
  "key1": "2mWd1PjcJCE7pybP4dRoHUTz5dyXkNWxLfdCsDduiaZzEdPb1P33ygu9vja24wq7fkw513179tNbS4JnAEiHxhvm",
  "key2": "ikur9uMzyujtp3ewPAm4H9VqiYeqQcrZ2eyyTwTdtQq6atyDM6MUguaPbLn9QLePhvE3q8VGrHWJRgeRskMdKtA",
  "key3": "2VAR5Y5DV2ERQaAfYGqLXQoNJ4ksAmRurZSgGL194ZyNuCfkmGFY4FGrUQNZvvxQNKn7hq5b2WpMoFnDaPE4vLKS",
  "key4": "jcPUeXMMCw6ySr8KTBwFGtFDzu6grhWthuC4j7tWPmHgygVQ5ZFKpimdNezYCkJfpPWp3jJyLGmN4LasqvYFTWF",
  "key5": "3aet4XuCVPKdHMMN8EvsNaDXBUz5hjr7oCNEek58fBgJvbu5N6KeJyRY6jZBk4S8VXbdhP3vGyjAgcUmhb7y9en3",
  "key6": "5trpDiyFCarjEZTc3d1CtpQ61WTxXYugxYzPurjm14bCvV9i6pn6ceSC24Ritkr4nPU95swpN1h96WsGuSQhSyhr",
  "key7": "5Lkdhgv3Y8VuwYUt3H1XzGp4C9uGJNKYomrdhGb859X98XCXFgpGpT5hJbkGsVPWJ1kwsHaBp2xMMRK7YLHq4E6i",
  "key8": "4EF9kay37btYQFecMFyjVYAzUPfcucYoJdGiy4JxTAJgXvFqSKmSLuCwEyTgTNQqig9WRAo3maRjLKYpChijfMsN",
  "key9": "JBiaq9rhs1vYuAd2Fs2BMCQWXJGRKrGEDSikRAqHHK5eBHavM6q8SsDyh1FqYj43GBSjMJrYDQHdWPF3sjZbjrh",
  "key10": "3Q5tcJXEegaMh6prxDXqz62D7XcXfBb9RBMnizQq6GJAyCF6ZAhHFNP8QHeivUCTvSiosiVdHNkCiLxts1LzEvuU",
  "key11": "3PFniDhYxuLUn32xiGacAM13QFWB1WCJrHnQSf8cmRAvPbj9YyWmkXkVabDoFLuw1j8bhzFzFuxatwCLhHy2QYSM",
  "key12": "3g9rjxAjdez6jVb4qfknfsd4rujFTX3iS3oTJk6Mm35fyRYtGCp5gpkiws4uYF1T262WiCyup8ZoFvGKdCNndLFX",
  "key13": "5WRQhLNm3Um5SWdEJJvhm4d2weFoTyWaRPPhs9jA9fSCgx8sHsm7SjU93EFbTsaQid7XJUUznj8vAH9YsUx8j7D2",
  "key14": "5y4HkBFGj2eE8r4Vrer2ZJ4YutpqhqfXJLPy6ktoXWKq5fEXuM69FQt8np3yDUv76jK7AcQoBQWwBwB713fWhVeH",
  "key15": "5q6tY2mv5VS6oYg6AVAq2ARVYn1Jpf2zwdud2wv5meUr3QJsQ3wBLJ1JvfrzQgepVL4CDCd1xqKQDCiYZADe58Dt",
  "key16": "4JXTcayW2eB5UW3hwRgLCTWb79FrUtMkVuX7kUap3LMtETdHdjL6r4a9FWCStRxQmJ3Rqa4Lxy1MDmwWzgNo33z3",
  "key17": "2Bi7QaHazuc5sezDJaHETmt4RmZnjg9xc6JchdvHKeazFsybXSyDv7VfHo7fxupjqFF4LtSjvH8pEhX59EanEN4Z",
  "key18": "2GkEdbaBQ25Av8SZixB2AFVLsGbPCAge8Vgsh4gnLpZJob4TxHPfk9LWH86P9nxgrSK1g8zSCSLjfJiBDKw9QnZf",
  "key19": "4QtiPPC3HHuaewhxJMZSqerYcPFJY12Z5wLb8mF1f7b3J8uMqdEEZB2yJ273PwmCeiwR9GMpwHmShMJraUjQwdf7",
  "key20": "2XTgorPeDWb3KzvXNqWkEnKNUTBbiuTvcRAimJqYbMEDLcfpUJMJzwFYQjp7TbPnbyBDHaEcXCJh4m5hfkAqEN7",
  "key21": "5uX1CNJYG2Ld7Djxd8nyyumtiNv3uSy7HBy5n23ehW9t78CtJhyV8DATBJ3UM2Sm7C2RgPfd9HQYzf74iRJcw38u",
  "key22": "4Bpe4iGQW1ujeAqvVS1RyB5kDsZTHiL3gPNjWL9BL5CqLhhtzbs37JeJNxFMs3XMPdBu6g4sb593NGQUzKt4gZCU",
  "key23": "4cw7vfSE2BtJDUMWkPxLUzDKcsNoqXTqW4tFdds1mjDp9JbLUbUBFiAYPWxHN3E92QQRWuXXWM8Ak6U5XLCugaEJ",
  "key24": "67RskmkGRzJ3HWG3evc84ubu3Sj6soWyDYpDiZ2xKsNANnd2aKbwoHFfviY8WDgAXnDKDLU5osSS9BEvWLLdnbhJ",
  "key25": "2okTDYJqUg64iVU3vJev4T3uVHVZxKeB5pQWp3d3r4F1yXdahbcHMeZTnGrL12sM6SRqSE2fPQUARrwHheynCXt",
  "key26": "2coKQE11BghMccCpc89LMpgjHCzzAVDicrixRy8VEK4ZCGY7p9DpAAo2jE7Bhnq8MDXB9QsairzYHreXp9ksJt7G",
  "key27": "2MgVTE2pwj7rNpiHTUYUabB3Zmgh1LqthsQn7WiVzcw3QtCCzTNHYajAcU1UQZd3y9EdZ3Qrn7pb7HcmhWPXMGwU",
  "key28": "5qSE1ZBD3LHta7L5u7S33hLgc5TpvFBP2ZHtoyYK17AY975PqKkkBsYuBh8r3E1HMzjWnQD93htGpGevjEqQFnzN",
  "key29": "5JNXk8s41yJeqTx9QZHxK7uTq4ys89R3HjVrAyNw5tdwGn2zZP8cSbNUqxqiLRqBxVWLXGuuXDhshYqc4uuLpeJt",
  "key30": "4ffWChL4FjyXsepFHEeGsrsQtP7quWrydbMR7JvMUutYxKSSSbAqbCZb5KzzZ8GUkJGpiMwz196EuCvbrSg4FDrA",
  "key31": "5mnbHpKRwxmWfcUFPKJLEPNf1SkyKPxgxZHFyaCbvhvf4WmcswxHFjyhp5Juja4d3H3g8SycoHJhiQ9XtMDAkvvT"
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
