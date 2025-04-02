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
    "5kNoK57gJhVfgcwar1nZ96Bws69VrS1VfnKLkh6ZqPMUXyTJFgFgi6ETYUy1cssmPN8WZfEMLdP1xxhouXryLrZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwRa6EFPeb2qEh1r9VemU8amjhBwDYHjxH4qa6msoynA31jwkMtA7kC4HHNB5tQ2cUMkCvY3KkmNw5Jj9MV1RZr",
  "key1": "52NvNbNxfZM6CoqKwx2TN8fZ5Nyxz3XyvCPkE6YL362kEJmZg4KjypvFBFhBdYaSdzs1f6JWpATSNHZv4N94JRoz",
  "key2": "4HJMWLpgstJCXeEBxUjYqpb9JXMsyPKNCGvhpeWM2bdd8f7PUTgyCzjHnQ4q7WY3pUASm2Awg4SAi8u9ZXL5XXKd",
  "key3": "4XLHxd8sCPMt4DWvx4QmpfYoRL319SzSkjdtSgrNDC9J4ooSUX9Ca3rXDhqom4vJkVWUFZbqB4AiugL9YMqXQiK6",
  "key4": "51dCyd25hqptQZpeDKFNyyWNJC5Mun9vUH65XwwNqYWCtVFCkQeQdFJgdXwBFmGqEPWFinWxPfaRkmGDiZ7EHCHp",
  "key5": "358U2EqVEv2NCzzCvzCnpT31ZSUYdHQ6t6KDUkGdCxfMEAnZDzvcTWToFuQq5FUJCxH9XUDXqDP9TX29AW7e3RMg",
  "key6": "5NoYYNfWddrYbLFYiXWMX9tEUjDFYoGeyyZmVT2B47TwTA9zvEMZo3iCWbaURyfayYr9YNkMkw6avJ7gPU5jG17x",
  "key7": "2X9i41jh4xHsj9iFdenfF3GG32Ss3gS5LzUe4jSx8rWfBREkngx9kA6auSDBWYwU82mRucgLJJHBitSUjEsUdQEZ",
  "key8": "2MHV77zrhYEx5rCPrg8Px6ZW6Z9QWn1nUr9h1Ju2SWUNNg6up7KKMCuSvTjLKComTatdAvMPtuCwsvDJFceTx2q7",
  "key9": "5teUrhnGtSE9WEQgsJYRa2WtduJPtmqoAVCcvvzxHrk3znhrVYSn7wD5R2yeTCpTxjgvKKLUnH9QTvcWKq5WeF9Z",
  "key10": "5RdXfyambfasA93YJLdxUozAxKP3jhMa7xMGe9chNHtNDHcJDfV7SMuhXx8fLVwfZYjRJYeFPLt9Q5XCNZ2XFf7d",
  "key11": "2LK4meKpDbGMQ4bTbZmgpbq5woKmPyr81m8F21oswzbPP3X5ikW8ABFskVq2eBRCWoPxaq9MvWb17hqzY2WzvWQF",
  "key12": "4ZoorFMb6Si7oBwYaw3JYJGn6EQSMkeHrszybDJTW37wrE7JUhEsFjBCoRjMpUBjWcznzZHug8wD2wqmb2EGxAdx",
  "key13": "LdELui62TEZXmQSFoDbPPzNkY7APjdosQPP3UKRJ8MgazUb1Q1bGuhCMqvqRhmv5nxVNojLVo1ya1pFFMgyxkhj",
  "key14": "3pMBCLyDpyXz5KoNBJf9VYxWmh2pjVTEg7M3y92cLW2VLoKDqoj9Lds5xwqB6TgjtqU3nvDY2dyiEAuNqymiFG9Q",
  "key15": "5NWBuusGqXaicEv8qaYzas88u5U8ZUDkGsCmBKimCbbr24bcxzDgCWV2HyZWCoDXjLYTW5ivfoeGsc31BQpZnn4v",
  "key16": "4dS5sfqh4PZjMUxMaWAKghWoeE1FSUKd7z4qWyKdiimpBuctabT1wS1fg1MiCMsWEwdsmoGHCTktyoqkrbeimEv3",
  "key17": "2ui2LKKcLQKfgBrzMrQiMDt8noL83j76mnhJwkQfTgeJYievMaWnvH3Z5sMor6YSXLXRVyUMVh319eN62AT9xp9r",
  "key18": "62HqWg3eEgXtTGvZ8mZiA6ad12WkWsrWa4rHVSsPSNYDcY8i7jPYDqqbxKJ4aiDF8u5Wov6SfGnpj9xu3dX3RLBT",
  "key19": "Zoa2uX77Nz4wh7XCnDgkEUookmkdUL1xe6qpiWANk1RQqxE8xQ2Zk5ZNDm4HBAE7QhMth5ePfpxDjDXWFdvszqz",
  "key20": "2dXmdSwwLfs7DLVjZrmcsGGNNfqnCauwwVpPuN6vAP8gYQ1H6HLycLEstqndieZMvQGrK3pWWft74aQLSYYYq3cn",
  "key21": "3gnUt11zrk2PjuxUv9nrG3Tw3DEx1AdRtNVFgBtjEQDpFY7ASKkrXnhr7WKM5q1rzuFuz2NWaVWY8m1EprzbKJQU",
  "key22": "5oG6Uvd2RNSCJxEUFJWvNdyFnnUWnk8jKWeQNAcnv4vPKftxr3RAVFqga1hLDZX9jxdr8HBGn2AzCKGFCQNTErfD",
  "key23": "4d1CQ3FMsiAJnGJ3Ratn1TPeyL1JejEHs7He4XGoTKrRCR475VohDsCY9Poh8MPJZtp43UurPDe9BMkypB2GJWWF",
  "key24": "2kZ6qZiztRvhnmunRZmQ1g7SNLri4X7p25Mx39XipCE4BiumCqLm7UVXfVVojGNwdQcTrT2m4Tw7SYeV1anjgrsz",
  "key25": "2EwgfetcUvdN33ypohVcsPrrNYkaSPr94mc2ppk6TiW9M53vcF7sC9UYkSNNqCiKZfaaNqxr5jEPfhymMdKwRzK5",
  "key26": "5WqWWgR2FdJbyTc48TggduPDfNwGLw81Aq1KG92EWwobSDPh4YbhyEEDLFzS28GAHDS43syKofQ79mKX7uYjhtyN",
  "key27": "roECDFnsmb6FVhWe9Zq7AoxH35Bd2R3wVfmzZz4yM5YkfDbEMdoiE7zvK5pPCqdFQN7vQfvGCdD68QKkeBVB816",
  "key28": "5yBLmWhN3L2ea9UnBAoSadEuDsZhzEdLY2cbqX8pdx3P7dzyyaUHvWsWhGXRZwjX5KKNbVwkyxVtNjRxJrm3FAWY",
  "key29": "2mQUBPJTLvmZnVoSr3vLfxHTsAGaoqkM7L8b7JFSFXnzCCwEfWvpqGEUM9RmUD5cGCxidsURNmjNUndoW1oyTY9E",
  "key30": "2oTwPbuMJsRCt2YrCDm8L22fjYNnBgG5UwnBNdd46AzxPgEzGUTG9ENxxu22gK8xeagqhLhQ2ZgEeeGifLsnksyU",
  "key31": "V7tcLXWmzb2ZjmH89oruHsuK5iJzFp9UnnsSruFgkJcAae81YFxuyUUSzCNVWqcdu6cxy8EYW7vWcmoK1ZeDUH7",
  "key32": "4uoD9qQ5YgPDwz7bybLGNyyvQm5wW7hg7k36yGsRue45nTCec62P39wofrDYjrr9Lia7CwCckXD1VrCrx1wmHnDz",
  "key33": "5pm911xKEA2yq9AaKHFqmkcs1eCRN4kDubVG8mB5fgoRcmidgeonoQeXpvp6vSfsHV7pTsMUY6zpJYcLggKrUmqA",
  "key34": "3XURqLgNEA7WMHdvZofeFAUWSaUtoMtmGW7EotvnQD88ZJe2QsUc87ddbfZd8nwizNvWZq3uEdPR5FK4tcVY1eNF",
  "key35": "4K226gPE9PPW1ZQGqKhMnifdTUqi9T1xLUWtBy3Ta3ZgUk4PwY14zWQFd2kVR99dAGH5rrmSWWT6piVCMiCdNCS4",
  "key36": "rQCJ3hEs7BCKhnCfk47MPRtvUosUAFwiurjcVj1cgrZifhvqkF1jhpk8sgXwxhD7WqkMFw8EK9j3kopgt1g8ndA",
  "key37": "kwdmYwqkFPmtMdP4jaJw7PsL2UN4vtk8tEnAaqmKYWYio7akVRBUq3nEsLfcZBiDqovnpGTeLn9eCyhAaCMVRTt",
  "key38": "LFfUkGZSH8wUgdJKapqJ8oZpQSgTJeEaLSnxeo8LY2G2ZJE3u8BnmaYNUeP9RXYvuNg4d2aSwwtMUqTBtXDcxYd",
  "key39": "5GjA5DnSHaVvopXfmU6pDPWVAqB3Gz4AeswHKQ8dNQFcWEjdLrvK2n3DgimDGCUBkpbihHkmZfp59THwdTbpRdjD",
  "key40": "39fT7hdZSJJLwtGZtjrqUHK8w3VZEXpJejW2hQeDgNajrBktVrszngZvizUnsXpUrjc2TpdSN1C7YF7EkgaPyv2Y",
  "key41": "4DCYdhtXAj8eixhYx6uAMKyFfwhx7pGawecCbM3BmtutvvZxwLVegLL8LkJqoR8uMfwWTCSncNVcitHzyjyzmDxx",
  "key42": "616ibG3WQGtZ4gQeAZ7QUGA11dZYUYzNatV6nMyQKSNkFdkwiYemWMq3jqxYwUUovDPuocHNLZvVw2fbJwiYnUx2",
  "key43": "4EGhkkTkg3roKqBVcQnzMcjsVNey53aQDhTHC1LfSz14tjrZN9xBuKwGxhuZt6QNjWdJzXifjo6BRPsLGvfm7nSC",
  "key44": "3eVtzXrogLf7rHKtRS2G99MRjGcjsTkEKHua6gysbMkmdCx7iLo5CzGU3e3a4Nm1ApkuLkhXjq7BvPtyee88518N",
  "key45": "vmHqBnHP21mC4x62mZnwcRbaEu2HY3iqiXxCyDgAQaKniSpfGw9fMFczopo4v2n9t1HcoMhAe3WsHCP1zjQGrhW",
  "key46": "z2xWb4jvfWFWdkWXwNwPZqUbV3aWKNVPczEBuai9NjS493DhTKPMW2aNU9cnsAcaDGfz8XUmyG8Z9GJcYqosS9S"
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
