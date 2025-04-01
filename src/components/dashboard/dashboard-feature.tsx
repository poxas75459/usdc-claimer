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
    "umvYWhunrTePc8L6LfuT2Lry61cVXtLDJdC9KTBefW1iEoxFJHPuZtLryzu92qH56DEkysqfktKpY7casywCAD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsiJU8TtLfpkDE3YzN8KGX75Es6BVMN8a7jeN6E8Cs7BHTJMf3rjYJohc3Db3MC1s1ZN1dVsdnHYDN8MK7EEjrM",
  "key1": "2cbsvyEWEL7Z25Bqj78GwULLFroLrsTmX48rnmoNMPYpPoRqmSx5EiLcWCeGk9dSTvqM7TSfDngrv7bpJdifv3xg",
  "key2": "5w4WW29Wmn6i9a14DkngafEm48fBBuzeWa1UDxecMncDRXd9nrhLq4vpdxNKXqP2v6unytS4wTDxbutBMqu4cALp",
  "key3": "4kAP1MHzFWGEWqU5uePNdU6AdwEU3L73w4TXThUo7WSq8JeeAihWhHw3kcsoVAjACuMYLFibk3iieoqLikgGoCVy",
  "key4": "3JELiSGiZCbwETkUkQHvbRqLNxJrpYR1HSKeT4mMruzKQ38acfUB1MAdM3ADF46YRM5kA6xCPSBoGq7WjBvFxtet",
  "key5": "4FDs6ayWSAxJVNvEtS5i9dqgdgvCmPgfedVaw4MZbfgMBTJGc9eHpyd1mdVqfGmh4rKeq82ohndsFzA1fxjANPUK",
  "key6": "4ZBQJ7kRrVWQnWyLu2ipea97fDDmbnV8Y39oGh996e1XEBrUjmTZMfcEPB8gxGv1KJD1qAYZ2nvTPFbgToTQRL6c",
  "key7": "5dnLzbdtpKPEfgepQGxNQDhpfw76XWdyS5JP7ewwDf2r4hK4EW7xU96ZdKZooXTCFiMgMwUbW1zFMKspRmjGESjW",
  "key8": "5mF7j6s6FSVhxxSXSceRLRtQVNoqW4aQmTbveevWnWPx1ZuJhB65ptr82iB1GHzxX6sNHouJsyVVndrHvjkABi1U",
  "key9": "2WFdDq4f2N5EtapL5QL9seihh7GdTfsfzehu86YTPzz8ipEy5yqmevUZceKsrYCA3w96dHbKZMUA5U59aAV2agVc",
  "key10": "5kE5JjM4X5UuGU5DSkktCSW7kAbnYJwfXk6eiKdxkxwgQVLqrqo41Dy3PDhiEHk42zQp9p5JGg3qz1FDWvgPyMMf",
  "key11": "2N1b96PBWoFZVskMqbju8M9JwPWA6pz5pbjxybgdjmhfZ8wqH7BiJeQ3x8sY7eawQGwETEGZjkV5KSdbgvGiCqAp",
  "key12": "4JVNCvpWFNhpMfrwfvR51Bozt2uf3xhRaoyfkAxPov8XWmYEecET651jG5BgnKGLL6jYani2TdqZut2U54aKrgj9",
  "key13": "2pMS6k1PjskLqcfsmwu8Z6Ua2vMQvXDN6MhhDa9xafuvrKNgPzJExRD8oDPBCiEzjNeS5sGUF5qNV6vktuYR6BLN",
  "key14": "2Rz7WUUvsNQ853vLSchSYT32jDL8Nfuh57G4B3mLzG1rjweaFkBZhxcb1ivads9ZJpPAZvmkktBPmg79XDNqhrkQ",
  "key15": "4oAo3YDDriC8LtMqQcK8ZFw9PqDyjYm1wuMCCSPNA48hyE6KDBBAgK4ZzxDcUhwYNTVtiY3mvkpxBnA3vZwkUKCD",
  "key16": "48vnzuNPUSHDxeZ3HXA7ABNCyu85z4i5wXFUWd91L6M4PRRe8YiCnbpebKmJstadps47ryDVJN6FDXwHRL7RkpeR",
  "key17": "3MCMGDNBmfB9UU6VL9UCNHnQUigUM5nGyd1bfKT1mtMmpZviA3cBMqRyyP4VXLZswLXwJ8sWELdKt8sF1B7ScrYM",
  "key18": "4uYk8doFwvRTk7xwEJJKKA8ok7tL2tZycWexDKBBUKEsf4iNALx7J1Z52JYBA1QhPozC7jTt5TRey1c5ytvRSF6n",
  "key19": "54GiwqLoU3Zs1y6hX7P8Mib8rmyw6HH5MzniEVcXZAH8EWmag3Byb2FcJUSrXHKuQ7GcNqziCaMbdXhNGSpdRttm",
  "key20": "YGVSoTKvgTuvcxwsZSm83S3SwhntegMvnED2FgpkUYzEE91S9JPVRVKs1eBUTSLt7hbJAePkTbUMBn6LirA2FsR",
  "key21": "CETyDsLNsDc4AjHsbsPMbhQAmU15kgdwm1ExYL7qDUfFzjZjQvdQxn6NuQVhDZx72XQWPSeSDDCoQCGEFvU54Qr",
  "key22": "3R2Qr3J8i1zpkn6NDbwqTVjYyJWWf2f5q4CV1Nt9R6CTbf5sy59oMkyyxAW5xyZFp6PHzMXjtUqJ23fcxvNKkVGN",
  "key23": "NJKMqKDdU1rbTnauVtAob35SpAu8YkVQAWpGpAWfQpjHmtJtkvcSy6MwUbWZRourBc1NgB1QdkDGkvshz6mEwQS",
  "key24": "3idxT7jNnjsfAMZHzQhyje8YZhcHjsixYRbPvySrbKH2u8VWacxb59MXFQLyj42GApBCnxC5ty6MBWyRv1ZH8n6x",
  "key25": "2a9QK8cLQ1mxTgCQz9MkJBR8KDecFY1mnXZuyvobAYuumR1MLu6TZwDB1JcuVsnvph3NYMJN6aGgu9SPXAxqrVhL",
  "key26": "5D9LEHYPeSBXf4QhiCW7faoTeckrxmQkqr88dAQVk76jwJx8SrKSoSijXqBNBpWHG61a3NtryyPUjzdj5dCYTEzp",
  "key27": "GtsiNmUtbRBdGvXZFcyC5stHkt2EcyTTe7khxPkmJCdj2Ss8cox2KEeJSL4k7hw1uBFyazVSiFPT2Bq2gajv67t",
  "key28": "4m4JwcYXZ6xi3u5BEDyyKtNivzVfGWSAQnsJbi1bfZyAyToLPQZNmiYepcHRFfEP8qP8zrKCKtKcnxUdmQZYkHAG",
  "key29": "2oCg9Tdmsgm7VyS1C7AojZsMWkepghpLLh1E7atrbyB4j23RxS9SH2g6hHtQdB1Ewj7nm31AjykYDyctja44gr4e",
  "key30": "3Yf6R4vgSmV7Ztnhi9tue63dGtaQ7HaGx3KPrb46H5M6HVKySN7d3NoYnTyHVncP5DLpvAHQzjZLuGfCKgkX2NgG",
  "key31": "65ryv4cLQR9nQw9p1zbfSBkk9cVHK2cyXaqPKnwYdXTSGDd24YmGq5KR4nFCn9fu4VjmoqDnFS9umovBwstR9JoS",
  "key32": "beuheYHpRWxFFfS8WyRnxUn7TiwPB6G1y4b777azw4DbGPPMmRa5zQUFDYqVufJbvS6PfMc36Hm2sa3QPJPWeTc",
  "key33": "5iQXSvrxJkTBziXbvEA8LXZX4ZCuA96DH4yTWYsdhHK9sNJDbhZgX98Cxh7NHn5TfRtuiC5VMgqSrkcWB1AK1A4J",
  "key34": "2sXfpYi9brpcr1QjMPdQboCooLcCjXV8jo1RTSoj1ZY7kVHFbmiq6RgcmPFpeiqiW9M4pFxHXKUp8ttWMiCyAERr",
  "key35": "2txSRNccKuD6m2fxyAwP4UBfmit3yeo5fbUMkdEJM4JGXeVuBFbHtm6wh2rgjTL3hQ23L363pfiUyfEek8yTxFCJ"
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
