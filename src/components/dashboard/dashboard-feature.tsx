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
    "5bEK3Cv31Vpc8TkJtNceMYvjU59icXx4kVRZMNyHRLzvhiVv4fX8H4iTLTcuq7qBSZepGhLTAZAnfieT2Zi2oZRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpubJXdBPRZrzBPfTfENaLLnEr2npobP1HTmXYtSjBDXk9mEQJc2jZsF4AM1ozyHhZ5eP4QGxnVuhHbUjSvVSXv",
  "key1": "3vkERHov2aqq4zPHfTQtYtvUasZsF4coAsTLcbSegtmnZiHzpFmDJe6hVVUJMLpNxR2ifxcLVisarVugxviUqTGe",
  "key2": "4BKvKDj4TsPkqZtZqS5aLdEGXTAkMDS9uSQJy89JThW2FvBYCJGbKUc6pZZ8XmihM1RWEj6e7kHgoy7q1xmcg2qf",
  "key3": "2rGJcyrnjmF7iEjgSwZcMq9AQq1dmNPPsTjpjFMnBUBHg5auUNB7P5rGb9uhfLgUm49XR7fRbzbEn9WdgMAoyKAa",
  "key4": "2KFNLtTnJtbWzLpmyoFRw3t4HdWqc7G8TggKx4rFwmTCdZcGoTUM3weXBkjfnuPXPd4CQeqrZRgnrogwiWupnEsz",
  "key5": "3ohHcySGSyTx8xcogDfNhmQXtX5XQRAsVYq1i2fmRtedChzgtmAE8jwMhbxiqBFfr4SNjWaBERnqECVBz36JUDKd",
  "key6": "4QvGAzBo5HobsQ9bQBmYQKHL8C9CmS4gwFERSpSt83ysbqypBtqyqTNrNbVkCpaPq5Y12Ev2bEkEtYbEQt5B9xK6",
  "key7": "23dXEjDiCypwPmJSwd51VqXRaav7dAHwK8xcpXnjbZaxnvWFBWojaaXgvSzLHCi88qiJbEmtZmM723htPQFMRcPT",
  "key8": "4CFAnscTYp3evnQ2sYC9YrXhDFgEd1k6AhnPKE4uHPTeeyqGQ22cLge9jajCUinEed4o2v5d3N5aisvmp2YJPgth",
  "key9": "qnTim5bjkNHdDFXCd3ewFKHa8HvqQ5nAYy7rtxZscseSHFcvaf3uRKr9AWoB9yNEaw9yw8jZAKMFSRBqoiXdxuv",
  "key10": "3bekANd3Mu2jFYDKUMeqJ6XRHVuCUenND7vg8fzc1xLrkjsA2UJ2J7iHEzPdfuTyfJN1sFbZh1xiayKBwGyWzefh",
  "key11": "2t7qqgUpGBXHTP3AbJiGueQdz4f2xQV53JtYxCVWvhKDFzZsbdZjnb7NfBVsoPbphPJQkzVKmvXrAGmCN8mEmnzC",
  "key12": "2PDEA2DvUjodpCUqsaW7cn9Wze1CtEbwVK76SVPaFYj7xTekhfuTaZoeKa22sepodS4fDR8i87FJQGDyG6oqSZiF",
  "key13": "kGheHWYFTajZ9BeuUSVE4swQT9fBMMSA39pN34hTpvKJtAZ7GxDprqRB6sYNo9gKXSJEBr1w9b9q9GEkAoGubUq",
  "key14": "UFTxeVBJYWyYk1vRyxKbXRjGSsnyV8YBA1yRwwF7JSMgNNgnwD7ThUdUL8ELLCaynUga324sHTc4q68ESTnAyKc",
  "key15": "4NbU6P82jdCA9uEh11KDPpUYtLVxW5A9LH5ujh8Wi3Y5E9sx9yqKLHLoKe7oJdnFWN6Kbrw4agWthHAPuB7JYKnu",
  "key16": "4kzecgLq93n1BRVeCyfto4r9zLaZ2mPNcxCtkWdXVqgAhCwJRfgHa3mdnQbrRxpSF2frW8RzKuGwaVCRHpXPmHAX",
  "key17": "29Cf6mv5vmb6wS2yyn9dKYCUHHyTfEGfxSwFqgdr3rb2pXd8Lam2DbHvFB1EAMma1T5p7EJUik8RfGVfsAzYk6z7",
  "key18": "JNmFuyP9nwxhhYQyQHexLMzuic32mRFCtBkEs9BirJMnrKCo5MC6qSJo4u5mroF7ejV94k9irDu1fAatguiBBDi",
  "key19": "2P8fnJXDyzs2jPoMAu1xGur5KX2ynjbqTwun8TfCnSP51zsWxhtt4HohB6Y263vde6ufq3fgcjdy4Vpc9URj3jfq",
  "key20": "GnY8bn3PDixKLCRMdv3yie4PzHGHL5nmgrhWz5HmUqzHu4QthVgNHG8HLgHyHojt5a4JerDaBaFVd5UbX2SrREH",
  "key21": "451yKwLDAr1i2U5vJkNY4fXLp2MwpoogoT2AkVkvKqoPxU4cKHCej9WkxxsFKLxsRQ8KXeNAoYFQ3my4Dqjnyuaf",
  "key22": "51uQtuL2hFDLtGHyDEXQ58HYDZcx1jJAqk2om2LDFKTXYFBegb4Kr41q9WikX6wmePkDARb1m5xHDBhqMxs298MU",
  "key23": "2t2kKFUXe2aeL6BVda7ChgKv8GWtreufqcYG4dD1gdy6khseGQH9Fa4KwNvYAAMwH3SZWaeu4ufevmZt2mHfEgHX",
  "key24": "5sTVjYWTYuLAFSUkAAgcWhgwvCo7FMx6616gXLRwVVaCi5mpdc8fz6YH9H2JF9KqiWk28pTFSdBzPxau21NWxWmT",
  "key25": "3rHro2R7P3V5XVkSyED7ba4XqDeZTgK2jWMrvayVemvAP8M9RFroSsQJeWZc4uyjMYTkknkTvmwJhhfKVyNC73mu",
  "key26": "5QLaxyDHHmjdaLBoAwN62HY1Jajga8YvQzXoJgS25eY1KFPWzDHxezr3icJgH7yDMWKzu4qM54WytdLwAgXyBDGS",
  "key27": "akkF9gT7LVbhu8ockDiyfhevqyV3f4TpWM4HhtjUTPPjvDNKjyDev44xHjKSk9CUEu4TjeKTtWEZ2bsaMwAm4iP",
  "key28": "m1urRSKhLjJS4YaiubrphdsT3hErxGdn7PJgqPBMpCgMACyF1K7X4GfrBK49ZvoE5gj2u7sgy7MLfJ1kviDbKNR",
  "key29": "61Xg6u9VPavNuoCEDrGoHz1gv1qsivkd3W4wwnx8fUBJB5pM3NEKPKNtFx2JVLQo75JNYBgm9Waeog9xmZJU3FkN"
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
