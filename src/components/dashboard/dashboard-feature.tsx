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
    "bmXJNGCsBV6MrjWLDo6LVBDVK6tN4Eedn1eXr9uKb5ECZcHNMYP8GDz6Yc5QmDKSBoJ3zTUuPavuS5wdbKqed4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmqnB1DkQs9TZheG33UuqysZEKnFR2xiQ1qmP4SvPUfMFD7QdwNJkQhuWw2wWB5sdthLBzszck2gQzV7TdQZfmT",
  "key1": "3qxWtmp7dGdMJ8JjuSj5VmT6HgYHfJoPj4szkHUpY5qNRCVmUrdNheB2bXruJciwKdm9CoZSYNL9JBDZ49XDRm1S",
  "key2": "QkiiN2362MnWMbUaZygVeb4M49vyqgA2jufmBvF55iMKVrZp9mJvbDbACe6JMd9wPGygS1WNWk7xrFhkAevzNco",
  "key3": "5pQCxRRaRMwecHbFHYNYhq3SZe9ZYbMXnQSZLMQwund5gVL6L5zkzJfJYWqHygrsKjZ1Grt6UsT2SKSgqiLCHwP1",
  "key4": "4sC1yRkucB8Gv4KkxvteAgeoRqLsj3PbpKrbtYLAVZg31GVXWknDCBahYRJ4eg7oyqsxY2NnsX3Gwk4hzFNu9zcu",
  "key5": "5ZL6idrsUPxLh1ig3EbWdQvt2WBZJMesMcoHFbMiuY5KrjhVqB3tqieg5PoNf46kNZ3pbV1jwUQQJ3CHnPNBq33D",
  "key6": "2rLi8eaiju2PT3AzHa2dCkFdQUw5QZXgkCvMQtTTLvmsPmAMqnKw6XkCM2RR7bnfd4waY6sMcZ26iBZMUXP5GhKe",
  "key7": "3Zg6yVHvCkh3YHyv7b7myueKQ5oYTQFb1cGUEngt4ZwBCrRkzWgiGx8eWeBgSVztoJTMVjJcVi9a58JP5dcpCSFx",
  "key8": "5u6JAWNQxLKKKeAGPrdN77cEGFtj2D6sdFG1CojRx9UBkdJhVDFvsz5ou73wQjqogHLQNFDFAMck68ntQsF3hHQz",
  "key9": "5kNChnVD7GjmzPEDRY6LyasUEJ9fBPuhvQ9kEL2rRXAV1Em4vZLgd2NVXT9kMDd5WtJ18mTDSZZprQ4B78DjQ2oi",
  "key10": "2b7tcbQWNRnGTANp3wXVHFuA3zVFZz6YudnwWmLKpE8tfNsMivDWj1Lb7Qna3ZhEP2QYGh4pskQi5EgvEa86TFkU",
  "key11": "5qNctQeyRCGErcbRqFNzZkwqEVWsQEaUrJjXjZhp9JAyBLWWRWNydcUvLZjuFXn5TBprZ8NX8P9pGZ68naoHYA6d",
  "key12": "5YvU3rpj17vGtheh4r8vRRt7Q4ASpS9Ms6BF3gPDDEwmchtVe1NyMT1346FCGcYvvAWv59Yioc1oDXL7MzxjNT1t",
  "key13": "5bAE6JnJzeN4oqyigQ6zhNxWMoT4STp8Pozz6iZydGRhpwEhn6aRm8XSdoMhFnuGG3a2cPTu6gVmM3Uq4YUnfFS5",
  "key14": "5qAKJe5d14j5xs1wAt99zCKZNzi5vt4jYhQQd4pzQPqB8X5qnZPkNiVCjq5nipsbVBpyx9DuzEzsQXY1kboP9nFn",
  "key15": "wMpUgBgh8mqBnYFnc7RXUym8Ztrmx36sFJQxiGRtawpz8MQvVDjtHgiYYh8TCVHwyXNpzJ2pDgK7yycDCpc51wF",
  "key16": "42PkM7Hv5WMwBdHk5h1R4AgDTJjQAboSBsnSbkpANEHHrvtNwdT3ucrLEFMsGnby4nRLp8ibbexYwR8R4eX73yT2",
  "key17": "2wRTSJsoWx7VbnsmHhxcBfSDqTWYCA4wZFse47KYrwTYeDFy7rqWn3H1JcaqVx84qpKvcuH6SuqUJ2d8dCPgYabJ",
  "key18": "2Vtcza7Wep6JSjPhpetA8DeiR3v5SGZBEZUBK3tEPVXpc9nLCpgyPMDTxypPYJr2isRZYY566L545W1UGYexzund",
  "key19": "41cL4MM5HyWhqRcyDbWzEnnYUwHreCM26yyBbW8wziqcdVrym1HHhhN1J6menfAwXhH7ssvzujJiW9vBayysi6Lm",
  "key20": "2FExBT5vFGSEHeLLxAmchaVUYybY2hrTrRHktBhyVcXTd4YytSbGkLFzCtpdCYfvzp4uRrg3x7mDDy69SFaC1dcn",
  "key21": "3fFqgKZH5F8eecgqUpwykEES5L6tKdB2Ps1NwWxAu21Pd25wT8ySWVWLwvXvW1tneiB9LVWpFEkf1SfhkdCRq3iu",
  "key22": "aT8Td9zqeznmTaxndM64fVVooS1TuEvSWUUoBq4nVEmtb6o3isDMNcQrUvrDtFvk9QhWUqxUrSfdavpG52UMqfa",
  "key23": "MHEeTzMxfdYNW3xLwCtdirunRG8eDh82gTHT3LN1YYuoLyidXiVtDBxgxxbt7RBxzs77sSrQV1vb2ZoXVxLxSsT",
  "key24": "2CYXMU5Y5U3sLdkoQh4yc23DKkKxKA44ybGdppm464YBNPWq79HVnVu9Mf4jF5hESHk7vSmVy3pSBiGyiLkz9Eym"
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
