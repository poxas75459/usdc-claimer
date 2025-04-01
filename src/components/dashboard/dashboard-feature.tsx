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
    "25At7reGaQWyfpGXR1hpkfwW5XrHyEg5XKcnrF4pt6axjurFkhEhPGzjaY3bd3pkCmhNAQyDBn56vLDRmdjdVpZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFWEJAywhC3zA6jfqH4sbz5fRwDh8mP6FTxEtGrCsbwkhSqCFgVtQ1vYDuFm9PGmS2NWwaMzhgpXQp3k8LJFZBD",
  "key1": "5GLgec8iuX1fzDjemdVsQnW26Kjma4skvBvbk4zSSLWgD5n2dCtRQM1w59Ww5eXYx7EvDjmjL7Hm17e5J12faJFG",
  "key2": "4PdWTQ4zMej6CK6Ng6hcPH6D6kVNMLbcXSTVPz66qvFbYWtoFh3FMG94uTaUXz6zNRRSvCQdZrXNusT7c6KL4pZF",
  "key3": "2L7GwQZhVyTkeSYkh66jfTzVb9c3owNFHP8kUrd7dTjiJnzJwYbgqizQRAjjT38GLhtHrqGDK4tqpy2RT2jiiMLc",
  "key4": "3i58U1RHBvCYWS5Vuo9fwcDmkK77K73REDtY9uo6vKvJy4g6dpry5nHNRSTHruVz776jcy28Dwk4jis6f8UjNLN4",
  "key5": "3yD1qbf1MCUPHuS1p7GhC3JjTQNsJQqzGYtetZLdUhDNn9ndY7ht8PhMQZYmqNKNJBNhXk3gtyC5UuSxSw3brrXu",
  "key6": "4AeeJJapLdTVGGq3VWV9R8U2XVrCJev9S5sTBvkGojP2GDzi35XVz17jzZcFMQqobL6vE128rfh2Gzt9tcSfxFwz",
  "key7": "5atfj6cLYyrTbMpojRtkuXHguNB9eWW3hgJeMzsCWBKgEHvqCm6p6wVXPCqEwSy8p8hg68FRw1SwcWefgpkShjDN",
  "key8": "41cUN6KSNDkVMRBisVf4if3yUoY2FFLTvFtL5Y9eGM1Q73d8dwrGmpQDzhAwAdyJsiGxM7MSaFLVQAgLRPkZ7aZn",
  "key9": "ycpwVWATrwRZnuLoS77vMN88q7koKhm1WMCTv69izcjzTJCmvGwp4pTEUTPTN1jqr4BQnwEVpvNXxTcQex1jkLG",
  "key10": "2P4sgHc2QM2QjWaz2cBmVb469DXsNJ6cWjqWqR2yCVUyNBUTEuGU2F9NZmKgkiPbXEtSjWiKhF1BV5ggUmsSQN59",
  "key11": "5se7Fdxns8bKFwooEu6K2z3nG7t6nrzk2djRGyGcYRmQfZ2TjjHCxgbjJCmVp2agzzXBpu1v7X6iThTBf4ykh9S3",
  "key12": "hSwKGfnEkhrDG2zctaA3YgYrLu6tXC1AFJmBPeLw6UFqKevd5LsZgA8hJQVdAN59arGiQXRoyoniJA6rVCtDw3t",
  "key13": "4qeVhCgdhyByHqYRrScmTUeXN5ZHuihTf6bNmhD38zF9AXNBNV2CDrtQijwDBe2BNToapHvj6DhxCcFhdki1ekLa",
  "key14": "5EWTuK8f3VzR8Kkps2oey4F97FwcUErpgv6tA7vYQQiQM4MGeLKHDfZX7DQSMN3syTmaBbcH8m7eN2zG9Bt7pyvv",
  "key15": "3wKnjUx3ZbnMffpXhMSmwnb4gNEx1QRAtT73CUrTYbDCxC4cuy5t3AsqeYccfGQrCCdRkYAP48XxRVRYHXQjntfQ",
  "key16": "31S33wDzc9VhNjzb1B3ESMAyE448BCztM9zUXYKAiZWLpofZbDVn5fSLRT15ae54FwSDtfyWr8to3Jw1Puq2aXSN",
  "key17": "66cmMKidP45F8zzMQNu2Y8ugfXk1bESCwYhgNMjBoW7Kan79GnudBTdsgYYgYwDYBBoxWvTY6Fe472w1ghFvKQCL",
  "key18": "3CHG1C9ALJy9qPsyeMfZ83UcF3ykMoBw6qwJQyjKuooR7BkEs2sFrQZf2ECTgmCJ3gL1UFzcBENmi73eVEwxVBJW",
  "key19": "31hyRrAqAYoGo8w9eZthfRGjsNtKzxrs5SFc6NwSpQD18WsxxeWToBi8pkhQRY9RWb1UkANKzouUfBBJScZ3RoFN",
  "key20": "2Szn32mu822Gfr5aq7bSKUAwMkF1CwsmxUtadzjKV6a4hL7ivS6g1CQ81VK6G5XdJaQsNskVojk6ySY9nnQ9258d",
  "key21": "1UpgLZjpybcsuZUUFYdAXBapM7a2H1gqqqffhS93J7BFa2pRi7DbyJRmSUVTAjNGPZ4KMD25RuY6gqmFrwsmaqk",
  "key22": "5Mc219hU43FXDjsapXCgDz2A39XDwK7XF2Hp659EQaZmXd9fwp7ebXGLZzZTvy53BVM9xedNPNWpxiKNSGuNFmd9",
  "key23": "2L7PRTNU3ktJLp2CQnuNGL1TeJoGuVMgUVBc3tofEfUTyoZWyuRFA1VVFPHggLroPipSEaCZK7ddyLZ8yQSoY12B",
  "key24": "2iM9k5oJ1UPokFovJcTGko3ZcJjAQuhe6aRhEKwfgzdgnEhqmx4bvG4dz2AbakDkoZ1Udj6yUhq7f3nbLfuZoe9h",
  "key25": "5wSPMBtsEsBQHVNLBWAzXDnpqW9etsjXcyuTWgvYth35bEeACzREnj6TdiNkwZCA1m6qamCMgTMaEGdo8vKY83tR",
  "key26": "5hWxtnbZFXwdXiKn8zssgbRBC1WasUzXpduMrPFf2CKQt3NVnb1Njm1aTbhupUn7JuUutzR49EusL86nKrwNrkYj",
  "key27": "4xZh3RMtsEFR5tXTjKsdEGvwh5PeEF3MmRsDGisWXbEafbvLyHcevbdXzBp4cgKEN41E2UjWXLwYV5oEjqsKYFdd",
  "key28": "3U4Aig6w3ji5UMHAFsiELSCowRfif4dEtJ1ymsd14jiNgUPK9qGLNfRX4HtKM5uQLwKhA791it5gvymGoqAgnjMt",
  "key29": "4zAb3KELNRDqZjJU7SmQU2gu8EiP3hihx915H247nWbM2YTJgKepxBcHFxY1BRqoweFRkZmHDDDr9xSatuAvRDws",
  "key30": "2r7op2DNZnJtYtXG582cmz2LbuuuUbmBuGXps92kni7cEYiVpWP6a3sWbW7CtgR3rr6HWLyuttLA12CvRHxsQEW2",
  "key31": "5HKgyuwrNhhvWzvLFmZ5eXTjDuvCzFubUMhorGcD6vibkrJ67SJ4X4LARGmrwkjju83WX5ARk4uCwUteULSoEymg",
  "key32": "4shPK8EkkofqnAcTEB3rz236pMKcHVspQyEcGjBYgRYem5nyWwEw2KPDqDiBzwGVrdTjGhyYi6XYSkbRQ7qrMj9D",
  "key33": "4TfH8Ei9WKLre5YCKE5VjkCpAKATQjwnwhk8rF4DfSp9yrajDuAZQhViq41Turx5EgeVRvxRvFQSnX5AbGf2WsUa",
  "key34": "34ydq47mp6iaLXPtnpYDnBTg3Da9sp79zTZctnJV7r5wWtNPVjBdjfNPpDLw6KWiwsbVARP3ptKTTjK4Wjs9TszE",
  "key35": "5bXkvmgWHLCz6qFSFjpQGDohddA6yQ72qbtBVddkrvKvMJLiFAP7swM39TBVRdVh6RCeH5RaNMkykyWrBVveYfQW",
  "key36": "5FkGPoSwxhJWZWdiwxoiDYsNbEvFASFc1bv6afzhFVQZVPFi9zwWggAYqpFbqRafBfwsPvdgDi6yPtjGiAF8mYK3",
  "key37": "2kWvidkNBcHiuKTc2VEg2s3pkzLdk3VmsaiJ1xRBdBcWZr37evAWJQjQWisqcnUXneztjBa89cXNuzqd4QnfgJkq",
  "key38": "5LsMrU3eL5pdNVcF3WRA2mizGf8wz32ZYvG863UmkF6UHzuwArZ7BGtUHecsYvHaMju7uNSMMKDeh4eUe8BCCbhd",
  "key39": "4Bnji5Rn3zNjjgRhx5z5FyPBStUNPSHcWSGb2ZrpmaWdJr3BKDVhuwvsagMtaPtXsd5tTHsAVfXKEdLk73KnpSpp",
  "key40": "PMaYdzovgDZadadWy81cVALu4Cuuaq3dhDQGW681tNLjpEL2y65uF5jdPqLdLjFh87z4YeC8g3yQjgL248UuiaN",
  "key41": "2wPPkeJgfbA4bAS5QM2rxLTHXW5mD8nPSz9Xin6UE626t2XNon3dfgz51sFN2A7TTxgVygmAyPV4kVvYUjoKYDZ2",
  "key42": "2WTSZ9HzXFSMZ1FEtXPbX4myzUZ9VqBmgLHV68DMKnNSk1a14j4C7MbPqtsZRm6Nw76KL7WBYskMRikNEagRsJt",
  "key43": "eg7CdUq9DtD8aa5v7pf14ugy4AP3YJ9CFmNPwgs8TTfrRXsDC8A2VduGk66eCEDRRNtJiQWYrF4bEyPCeeVjoaL",
  "key44": "2peeDBfoYq93EFvZXTTjSTBf3bhVJSGgFmkdr5K1yoBTFsetjMU9f4jE5mag4Ks6n3xGMANLFsNZQ8nQXkNKxuiD",
  "key45": "3BoEicHQWEAwkpir8QtpkJMnTZPJn3hCWDuME2oQpKqctGw26mLxCcfqmuigpVvyHRqy9QqjPdJQZn8ZaE9a4qyb",
  "key46": "2eJYdWgVaVYt1DfxSV1cjB881aHGKMoQmtdRMX2mY91byrRsADjQDrxjB6SMEAzjxGo7eLiyKAyom31pAzxz1RiU",
  "key47": "B6krqRmD6fvoMsiJr4xyEF89AAwcJRWmpgzngiBtHzpnMZXKmHEPjgYAyyA1mPTsGiaWv63gmui5YXdEATdqz1J"
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
