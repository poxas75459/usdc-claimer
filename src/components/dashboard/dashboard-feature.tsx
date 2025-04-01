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
    "1TahJCsxByYxNP15PGPjZ5jjhnGDunoD6m6ks8H22M7HnZbNMvfBP96RfyGXLKqDrJoe6n8spu9rMF3JHo1UpHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55oeiLGrkmhLeXSK2mnBkkcNtZnTHGkyjrUFowxmgFm8XyMxMoQsnqmLv2fTi7jqvcWARGWdTWZCznyqYiQmXvpT",
  "key1": "5QVFiyMhCxMMH5zF1YPzrbr1nXMtL7RBGrtKWhDRo1pADXLZX5i9KmQwdRmMvc2LA7rEyTQ22FB7hWrYXCC1HpjL",
  "key2": "2ZpGwjFCcGAHKhcq8wCZQEzDBbjjdM3ph5dm4KhvChETXtAefPyMNCkJZGcrd9r4ZxjXFn9637zjNTxusSyVaEC4",
  "key3": "5C3iqod32jGp8rgEMdu9Qc7fkXKFNTvzf8ENm8ygWXYE2CpLgXizHCmdMXahXPNXUHqSUMLLzigcgDvxyAZRivhU",
  "key4": "2zsjprAu9FawQojVYvkBrEjH1bioMpTNe9sNTwp3gJGNNMXUb4y6UJ7fGZeh71eUnyC2aTWPeXAoph48YKC2YsGW",
  "key5": "3qmNMHp956PZHVDFhVZNoW2c7ohNTJn5Yw5wGVDdpmFZohdRqst24FzvmproUuSKaktLJAVw298bmQF7cFvdTQst",
  "key6": "5jCMdbAo4m1bW8Bf6PL8jwexV21q1nmuN8r7fspRAxFvJJRcuo7aY4qYjBdtvCVXKQXtXmMs3psdapxDi7TrSrhd",
  "key7": "5drECesdTw8h6pdMoC4GZUjofJdK2pLU4GcKjHPS9rrysBMWekawzHF3K4FZmLdeyLiw97ggnp8DBvFUwUYMHU5N",
  "key8": "4ZNnVNTYBDYWoVb5s3tyFQAe79RY2YBCcZgiKF4BSSJzaRnkvMoDXA4nHcXPZTgbwPpezvy4TbUh9EK9SzM6WkzF",
  "key9": "JavF6vy9qmD3iFdA5F7Tb49vKDtZ3BxeJtzxNcCxFEdcrL3LMosEAA4dvFdDAqFA8ehXTmSpoEdTS5RdFA8fUQA",
  "key10": "5f19GdSPtPYGqMWp5JYbq6oEJ5R4Ah5fSNMApeznCiWLnWNC13affXAD7hGf96kHgpdUvsR8EdxqcTBjAgAEYzsQ",
  "key11": "4kji5Uo9a6Fv3Zh1puwVLW52NnMfGoTfm3YtjjU2WBKhUeX5YPHet7xughVQkrLiRqjbBa3cLPvieRQBEGm5uLiS",
  "key12": "63r3wu17z7C1eWoMAAggmwQMt2jLvBjpcDbdnRjPTuQW3wd2XSQikJow8yADE1wHGojMtctc7PMaZkuwuyak3Tfj",
  "key13": "4EG59vvKZT3wuYLrMZWsfA5879eDYzchzc1hpd5Mccgqce7EwAc4C1upEvcakty26m7ufWntRVqr58xCqwiWDDMm",
  "key14": "5rhdzBqqGeAHWrZCUhwpTMbABQb3A4yjWzJUwCnSmnxtvKY1WjFkwZib2HzxR1EpWf8C5NQhvpY6yQCMyFXZrpmt",
  "key15": "4LcVRqRtogifSzaXcBJdAgnYsJEo27gxaTWUJwDHEExkfompgoqyHJuxUi3phgHWy8bz7zgSBczj5EiDTCYLXq9Q",
  "key16": "5Rrxasnh26tktnNcB3dD3Ne6SkzeooAWUVES1YgKkT1m1xPQenCQBTUKAAWRBD3bBmZKPZvoz9wfvjSTsyqFeYPA",
  "key17": "28VVNfDmJacmLE4aqpXupDKiqjF22ndUmQCq71cDJ5JpeHU3L2DTFBYnX4PKdasQmgFPKQSeiRWoqrth5YyFr7pS",
  "key18": "kSbCz9ziVNJXBrx18U8mv4mbPA47zkGJGoyyKhCGCqYn9U4WKksSDSqg6bPo3GfkGQfKCqQ8S4mAn5yQDS1MkGz",
  "key19": "5wysvWQShH74iFWGTPjbjDzTrCK9PdMbmpjbh5b8gie3pRLeaTmCBHRLySdSwV9TB77TU2DM3VqNPntFj1SVWpM1",
  "key20": "56mHemfx2dJ9pAvK91bXPnJ97Rrw71egXpRQctLhJkCbndCF4U1q4r5LBPKu6F7FW7tf3uDzQx2NiW3GocTbdXG1",
  "key21": "3Cw6ybDkBYpaSXbUYMoUYBJMFmRNB3HBi6Ssbe5o6MvjcKyDG28YArNQeyyM97CbAAYaJYnRHFSoDXXZAd6bsGEq",
  "key22": "2t6MMSHw8R2VzQW2aAZuAdbpz9x49Dz5PbXN1uwrju3BSHHT3AvwwXqJdegEqPgsCAZHspBKYuBNC3tbkb8SLbzp",
  "key23": "2injwswQCFVuab3qky4tJ5nvYcvGsnxzG88oTFuPNDrjJJUZTtk1ACu1L2U9GqQ22Wv3gJdRg3SrwFSbESCB4Xzi",
  "key24": "6pQwFDj1vKVV5T9mth8C4v1yE4resHVagAhJaGegERTYUzKZvFV6tqx1Ew2Uf9QYRt4YcwD1QAVLj7bsSV1rZkJ",
  "key25": "5qpBViWuq6u89qHmoNw2kB7xRKVxCpUGwTVNPgJB96NKrLdZed3hiTgGu23zPQBnbqLhYcUck6UMUdLFZdsgU6cP",
  "key26": "2s8v8kW51ovpNPqEetC5bWxDezfj6SAPCM2XQrZkuVgUMxVnMUwQ3Qjv2YnFyCw2X9sKDRRoBg9EmKMFjjhixvqa"
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
