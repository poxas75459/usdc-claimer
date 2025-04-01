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
    "4Ukacv1vXcNCmtmNTRRWMNAQDbbCKsPH9wMwa2xquJVsZJExXXoqQP6A8jNgmFmpkPSeou8HC3a8pZ4K3pU59LNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32y7vJRoQWcNRaMk4WiBbmTYAh8F1bG83GmJWyy5iVmwd2rRYqiVTX6WY8espQxsrkJ1nhW38FURkccsfjLm8RAe",
  "key1": "6PC9nJcQ6p1TGvQpeFZnYtSi4jo96MPyHkDGfYJUxqSXVC8RvP9tQH8mZ4S3BzsBg8us9Z9MfmcyygoTexbAxY9",
  "key2": "KxknFTi7Vq1XztERT6E8NiRrvEb1pVFMv15Zg7Bmrw5TgZ7qWWfoArfZF8crTFSAHnMkXvj6btukZ63cV8MNiLC",
  "key3": "5p3rrJ1cVWemAvx1SnfiWtsYPvRbCUCdUrTgNvSTDCmGpuyrDyvDEQ48FKnMvZxQ3mu73iKGzwNS5pevNDdWqrdM",
  "key4": "2E1AJwYSsBPwwGTo9nRrjUZXrqZsMofdwa45TXAPdrVbiRBf48v5y6iMGMKp54wWg86Bfhr8Y5DMJty1ErjaR2TL",
  "key5": "2SgAHyzHdV16r1BLp5WH78LL5TwguFup2h3vHsuCkKWXara8f67TtoYZeE32mHZVMeagRh5wQMw7eChmSA7wADd1",
  "key6": "3DZcV8XSQhBWoN8rqLGSivkrW2kUgVy8PJR21rVXtws75mNEURU5CA8YXzzY87ZZoZXWyZUmD5ayvjbygQXFJz3C",
  "key7": "MnDLdc7mjUETx8cwKXzHYcpcJVDZ4urityU7aUWu5ZnJtmCNxV9CXVBm9qqQfTqyRXpnkH8zoPU4JRk96PLtyFT",
  "key8": "5SMrK6CcnHjYE9oLusHQnmggUBmDrzxNTav3ejsL1h2J1KbX54yzU81woJ1YqLb7AYSEppKfDA7fSeF7J17dEY2d",
  "key9": "3t6SYpkqb6LWhPfnKr1zX6M3hvrNWUYkn1pihaBtfg11SdWsZxVZvSEnqBsyDpSX6qUywoVFTWuWxJU4upqVedLP",
  "key10": "32hso1HKzhXwGza5aR68hBFCbbE52VLq4ticvqPrjxq928Hz6XD9ovmoyoHbqkuo5tYMPLYmZJreJGkyrBaSFitp",
  "key11": "5kauP3VNnDMYqJH6xwBwxy1siVCxrym2pZxGMgkdTEb3dsLtmQU72WsoKRw7BgFjWx3uzHQ9ZHdW2TgfkkcNtLx6",
  "key12": "4P9wFPgtcFxfJF85ToX6gmT9pm5VfcoeYFwhA6MezLyvsDf1u6jTUN96qQL82baauifNjoHtTJ43oeFCLXdqZxFM",
  "key13": "5buAhBAwxPx8CHDPMWzazHLYFuYk7i2bXE2JdhuatmcK3vHBtGNpzTBnknFA97UgUzwiW8xLdyrudZVctpipNsML",
  "key14": "2kYLsh4MxUrrjirobyPwLHVddduHCumM7vaCMxQS5CGxUfPjmYGy5NUH5qqMuFsGwHYP26w51mKRiTGgGmLXZngg",
  "key15": "5uQv9BWsNBM3VGyDTxzCFmdzxd7iyWGYZcRdim4j1RigFoBRJXMq3iAjpWWRjzbnwpQ1tibR31FPwGuRqqe9LTuZ",
  "key16": "32cECccRLzFjPK8urGdVNA6TDUG5jnumf6XtjKbQTjagqup299hzDgUCYW75BoNy1LrqUsCcqDGtzP1Fp9e4cCxa",
  "key17": "9aJa6dpFdxkSziuK85njKrebiWr8VtAdb6gwGzn4Fx2P6EmJxXBFUBuwvqV7WfJZu9wxwmEL2ZL5EKc52LiYuMp",
  "key18": "gDzXan6M3zC682VUvJ5JayNraYPeex9EgbTwNGSdH3mgVevXhytp2GHTCxoUSGkEpmuF861cENiFMsYSckJsz2J",
  "key19": "5hkiUFA5KaQXh1Qk4XWUiWnNHvXEFydCMuyzq8X9VyABSX97ggpoxtiRzFrs6rcRGAcdR9pM1WvfhxvDhrUYfc8j",
  "key20": "gL1EHYJBCR7MXqQqcE5YAhG8ALmVg5S7PUbdq2RCVpR2N5oSkG6PspZL98hmZsEwuQywWLUmGXbUWTGUwD2MzBp",
  "key21": "4bwzEYSaYTkLTtfyAXBcqP3pr6PhH9aDYssqSmsbeh6kNXHrhFMyJdjm6qFDb3haKKB95nfGWqf5KWSTrfQVneXc",
  "key22": "3iLEEc8zsJXBsQpU66UpuLshn7zaZ5QrZs91SnyAy2jZdRt89wprcBLeAXF8QRzmZBJtPWC41GNstwF6UjXNL5cA",
  "key23": "3AtwU4RCCj2NAT3qBK6jrZFXqBwZ8SwFGxjFbA74u91BtQf7wcPH7TRdVVaLm1js56oFgFigPFYU48BRKHZqessd",
  "key24": "2FV1cAatiYnHvSrdR5aaBLtTvAhG3QJDRGhGWpvNT6JmpCjC3CfmWpQTsLc1bACrBUXhQbX6wFo5ckgPLMKx8sXE",
  "key25": "5fdshfqGVyC9UNnSu89zz9VDaaFoaFw4FpB7cvQsdeJCFQSBtXQXnYsdXFoQ13Xixdfz1eCt2afacBsQx3gi2diY",
  "key26": "2BfYxMc5cKaEj1tFBefS1ASRuostrv4hyydjPpeY85pyiqfjTX67niKwKbD1sDrfpyYhnTHKwQ2q2tJdvAA4Chey",
  "key27": "2an6zcYNdvj9DB4q2LMSHnjKSof917QC7upUAVqw3ycvbnRKxmTdJxQeMqNbvrKvmaqK1zokEzRngyumAcmGocNR",
  "key28": "5WtWNfGPc8ingQj6SyWLBMc7rQaZ67NsdSp9uvnCkZSx2EdNa8596hHMjVWGgmSM4NJLbAa4jMEa9LQygZZCnYzF",
  "key29": "2QzLcAjETWSt7H37DsL9rTwvFRz1KTsJciXS3X1BK6woh7MgvNiUCpw5VaChkkWvQuKeedfod8xEi6ZEkZE43CCu",
  "key30": "3gw8JFStxowNK6rUtbYGCZN8Z3XGuktYVB9N4EPWTnfsGK2WsKGYPX3Ms9AzAbJqMtPpGCS4TNvmA5CeXDdjTMHb",
  "key31": "42BGrfubVLbEsQGH93ks4HzK7Bmo5zBKJxjcYgkwgBjPpc9JZsYAPKa9UKCX46ajJr1hYKDkvLUV5dDvJLHRj6aM"
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
