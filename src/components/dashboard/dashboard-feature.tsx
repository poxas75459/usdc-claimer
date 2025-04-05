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
    "5npbqBfrN5a6pFBjYcqMtEF5to1Lqir8QhMe5q6ow7qNvn9F2eBUrQvqbmSHZusYHCcqw3yTfLQXJsrmxRjF1Ghb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QZH6yUnnx61jAZK24nBsKqQLSPak7AVpFUBbRwptHWrqvGkEVYdFGV9RHZLWP4LrAjh6VBqqn5mt1BHapvkEbmT",
  "key1": "2gtje21mzQ9LUvQzJEUP2BXVHgg3i1WotsXvbsXkg2ECYCimnyz9ZSTz2m12kJTKSoQCUNiQF9WTTHc6P9PRbppL",
  "key2": "4due7Be64MGWYu5BW31pHaLcjCqjzuvW8pDVjBcD4E6ExWZJAgMQX1zJuUy8nrV7UeWaLFh9oPHo7W2aRXCvcSzy",
  "key3": "3VtHwx4XRLpPjMRVMZGXpXuT4E44BMJ8JyeC5ri2BPJAUofmRySxpiR6duGfp8i6Xj3S1YrEScjY3DEH6FGqEqUj",
  "key4": "53HjmbJFm976vAewMcwHzxwXdMM66WLgfwk3rHiJQHx6972zF1YRXDcrYPEeuv4b77thYNTbs6ZNh2suhoyyXeRV",
  "key5": "Jk44msN6Pghi8XbVshbuo5Ri8wDw66CAZieyHhWaQ2VM9dT9Bn98hm2ScpNy8aNm7xabQowkuYswg2jWiTLUqhT",
  "key6": "4vUhX6kUEgpmU3mPtqvSZrCCGsug5gno99TZNcPae1ahEd1i2uaFhXexHebqvGjAXfi6tY8kXGSEGejHFxYDnrUQ",
  "key7": "2TMqJWVo23Lid1SA9LrkY9XEBFY4PexjLLFLf3GFNKs3X8mYZyMSEinc9qy2699EST8DMLSTYYwwQ37rgmDDAuy9",
  "key8": "Z9LthuBma2paDjoRCyW4FJaU9Uz24bFhcPWvmP4sW2ceBnp9wdAuKNiqENnP7EFAfnnGRawvP1R3Ds1ML1u8sfM",
  "key9": "5AEc5q31E52B728oNnwb5JD9UaHgVgVQjgCD5x42Fmek3K8gWZm3JrGt5xZ32yDzUBvah1Jkry94enTJ3D2hMTM3",
  "key10": "4TGds748qRtcX4R6tnChunARh5VUDMj5vJd3RHbinJxuqZ7bKhu9kSJdCZaPXdamKFQmVC9bZLXsd9pNeptLockR",
  "key11": "kPPSjShVVNcpcmpaEGvA4SgEL99x9hLoFcnT3zfYy6sorUAytf4kuMC8ZWyFjfgMBhTMTTgujQLx7k9YK9ZojHa",
  "key12": "PtBnPnz7CjFApNFeDm3MiLeEc5itENHWxFDRjhFFwgdsjgc6MWNRZcZw6DHHerHzNZirihgADDfWSmZ5waspX5U",
  "key13": "3W35vcK1PFMtQ45ApnRFdu4LVefA7cjnBH1NUBKhZFLCKo2imE8RFptc4VFanjeeMNbFgtp5WvFUDsLFmKDrc1Xr",
  "key14": "2KHAfyz8L4X5v9wBYkQYmgdF35UEYr4xjyMjcd8oPQFMteuD8YJC2UxcwEC5JxDCZmSFp8xsV2V5urhVKyqzgSgG",
  "key15": "3a7Gxdk4yLCMtJzQcP82C6nszzBVWFhXvqoBPW4FsuUFrboFHN4S7s3fWMnCD9ytdAeuyUD2cR38jvXiysEhtXXZ",
  "key16": "2HL7nUFBbrjXuDKGhBLqVVGyML3EFvTQBJQR7o98dYyp2an3uog37nfFUDeUFP7f58x88df1pm62cd3fy8nGuUV6",
  "key17": "41RigpbxYrTwPqTqFKfH74gKLTipsPPBntWmavaE5ZSW9MpanD6tfzpXgdbpkf93pBRyUx7RHbLX8eYvC21xEMnx",
  "key18": "61nLv9NFVBJ4dRLxmtHt1asMdckYtd8tmkMcAoAG2iViPFdmSFsf4eHLoaMnPcYCyjdWNVh7WrUFu4ft9Sz6RgKd",
  "key19": "61wFVB4pj5PC7xx7vnjXnAkkBBM7k5GnCW2BRtdLBqivFFu879BqN8eR81e8Zjy6zd7MSuhCegTfGAtmpHJBHJX1",
  "key20": "5wNwmu9PLmzeV4qzb9wMDYEUtVCPpWqPR5MuoaAvX5MXCpCVXNxVgB9u629iAHGW4LATS1DaG9gZhHjNtxPKuodh",
  "key21": "3DjUaq3Nt3zcZKv3ZzsaU6n7KZWwH8bjPExnkHZ297WugYWqDavr3hunHHMW2fc5TCn3QJSWfKa7LiqZUzNpXLzQ",
  "key22": "4pi8MqHHbJdcBErJPTxdorbDZVMrne1wPa3bsJsmJnVhdx9HxBxVSj8DkuYMF8n9eyQ7AbR5uJhaa72uYntiFkwB",
  "key23": "63fkpifYg5Cq7ihVNzBbVkkks7Pifk9P7hgewteJQchomRbfWwrfyWwYmoixrJTJBAu6ppZh8KgJWYfmT6aQDrVS",
  "key24": "2LNDMzihuoYpD2t5tGrr3VFSVdiF4PkZg2zuHaWLZ2jmQWfBNGhhvKc5ckeHTkzZoZAC3KLQao7wpw1txyUVkbLZ",
  "key25": "4QgUJqKtLg54tKRAL8YZmT3o1oFxNyrQpJV5o7XHW7GEViG9DpXD64Hax84PmP1RfeaXbReiaCPeDSrBFYQCPaJT",
  "key26": "4pdXrdzC5DHrvWfEwE2s2gkwxXUxHu5kByEwtv2E711tyyc7V2DemYxn9rH1RMYFbnfkC3N1MWYaCRtCuWn6ysaT",
  "key27": "4Rjms8EFgvdwvErypQGDiQqzeHhfQfs4qBUwU6c3tp4MAyLtVpH4JFGt5DudKdow21CDsfffNYNvHmuRSrcSFGX1",
  "key28": "dc8vdr8UCXaZr8PTVvDC3znQeBcKadbR6JvDmoXk1mHS5285wVU4wEKjAaV3KiLi7nX6RT7XkjJjvhBV2SQWLrm",
  "key29": "2ubqdR8SPDWDPd23vSYrzJMW8Dy1BTL1tbwx4KjuiYjXpxcRceXEM1xpKp52h9uqYxQJrDLpTZp6iJ4mMkbnkXVE",
  "key30": "2Ao4zh3AXNarUPmuQpWqkdrsiWPeA1bPrf6rfs7vALV6ns1bLhZonp9zRHyBsRk9B2uCfd57NFZLa9n7Ra5vQD42",
  "key31": "5aL11qxi8XowhDM3f4nZjfpu3CDvmHNXrRXwoea9wVM2RntFLgGCbbVFLKKXJQe5KrWvGrXw6Lymj5Bk6aYMyp1n",
  "key32": "41QwEvYga8CPougMVutWT4CSG8BMiYwLAdd733kJy7PEzy9CWCypE98eaV7fa5UmiCW4ZxfDBSppSEC53TSNctwX",
  "key33": "4skwiWSvmmdpgaLFAFJgc6GUoQfk3ja7r3rdQBp8871RLUzfDMbcH6Z1QvNSAhXpzDAd3XpuqRKY4LY7ru7y57yx",
  "key34": "4eQJheZKTmmjPhLfG7R3ueoPGpQiYXndJPJ16UPMQzxkkDke6HbGNaPRnSizjF3PgP9scJtZJKw4XxHNhkKhUQX6",
  "key35": "59Hg9zKDewL1Jj6L2UeVaj8MS1rSxbQ5THS8wwuYkdigoVJu7rTfChPjxLudvrQojuQtiHG1Sxj1iueSegkNuv6L",
  "key36": "3oEZUZDf4gMJojJQYLN8bq9wyFuQy9iSygQb1yGG2KTX2cuqQUKtDEc1EcXT7qU1WUtnpgyqHkb4nMZiAPMRaLaj",
  "key37": "4Lfdru8VWRv7DxfnHxwyWcpC8KRcri6D3CHq3nTspddN3j8rwVYFmSk4yo2rMfUrrZNGriZh2xxM9p7VRgeVVVcL"
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
