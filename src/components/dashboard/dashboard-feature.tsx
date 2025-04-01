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
    "2JaJJNYwsuT8Lf6bCL7VQi2sgu4EHPAiVHTJjjFvQ23WbM6qKqcJiCaKBUV83nkj4giEpvKiwQgkznKzFXSCNN5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eo9p7PwiqqRCM63DqVmXsD9fJuLYJp8z5ed5ic7tVQVjkEp6mj1BZe49mzQrsLMxBToTUCyf2RzTrLnGWsH9G3y",
  "key1": "4qjJQ8iMFC7AkzizWUQJBaqeXuJBfPceNKkEBqiJAtGSjgPRdX6uqMGcbur12tMaqwFHmM5WwANUGHxuZNY6Npv1",
  "key2": "4ZYcqm2Qsed7qLYYB8FAu51bEZZAfSACmDTTqpCNzhCBJ1hSS2hytPYdJbvb5qTzzXL3bbmsxDLh3vAT243av97a",
  "key3": "AytTVRLFEEYZcfCu8KCE2kCD383HBRhkbjZrtrbHPjiwDZS2KerssAUKpnG4TZ2YRLSodbNe2nGAYjbXvE3TU8x",
  "key4": "5xUFQFUQExrYUioAukvskLQ34Q6AnKYn1rpN3wFUHJ4CWcrnnMSdkycmiMJCuDYBbi8k37py7tTnnfsoEmD2HUG8",
  "key5": "2aVGxC3p6YQ2uKkYw4XiG8HcKeupRUofBeqiSXaRbWbRqv8dX7e6e6ikjK3a32TmqRE5hrNxgoXEoWp89eeFtnFj",
  "key6": "1Cqru7Zf4K86MBMwdmhkbrVm4LCXDRzYqHPDM3D7uBdRpPaADd8JcpANATwHynGaf5Hzki8aahppjwa3rxNSd8U",
  "key7": "2QGac47hdZ6dqmtcUyNN9mjAQaQRC3Y5CVFdAiJ8ViuJdB8TfEzLbWoro7smeGbc6Wh1JoTH9gg6weTiBhYBdYvp",
  "key8": "4RCCHEWF9nmiNnN9UGdpQwXe47Ht1fjLvrNedhYXSzaCUG9hP4aRsRcRiCXrKECWV5Ckzo6afRxkaDWwDEnPN7p9",
  "key9": "35SFF1SDnHWnS5zxrQJW7f8YvbyVrUWfX5LPar96fR5MwpRjPJmoa7nKA2Urs1VMuKQBzbd3v47cWfK6agN73tHo",
  "key10": "2Zv6wWcF7f5GuJYbjNzXLTGukychJ4dHaDRtd8UHk3jP7kB97QWivifyxffXJmF5YVoVCikHp1ApvtpWLhSb8xt3",
  "key11": "4VsjVvDcZr4bYYpXXDa2cGj7GJZ5j4GYQWiiedkdePfoXSKkrLusNYqDVKVfTFPnwmzr7UtTxEThmsi2WYkfCoZC",
  "key12": "2hPSg9rB53yGeDa3azcjDZ8zso3hny1358kkYSpPV8TpNsiiPL8vXbKsnEUASBex2hvdvNPoP7H37ssB4DKqg4Cu",
  "key13": "6492wEspJGhUEer2PiwnUkC7cmjgX4eoJsDoRrhFWXhyLh2dhKuv8KdzwQmRfSR96T1nVf17SKzWNvurh7qhKpYV",
  "key14": "28Hw4bH3jGawv3rBgQpStqbFq713yWjk8WaE2Q6NC9K9etY3dyYNuzFUaN1v7m4H2AWgd6csJtMmuq4FFfLMCg4H",
  "key15": "3KrrPcgRNhd3vqq7efHrrSV8L9VAGC2bK8J2YpgDmbScS5Mk5ftFgmxhXSgbU9NaaCh3J1ymefrSbFvwmcNSKBVK",
  "key16": "33urqLQ9VzjDTmDQabBANgv1QLvRXbZUrXNCMpmS57qqyj6bQ2PZi6r5XKhHnMH21fL19fLaWKER5cm1BvKRfJfX",
  "key17": "43asYHG9MERW1PRJVHXhRNWqXTtUDiUUsBtFZamNPL9ns8vphnRat8tDTYg4BGcRoPqs2ZgWtsxZeo9AJgLcJWoe",
  "key18": "zpzKJmNVYgwnXz6UnyECKQbCCPXz52eiEfFs2xRMzviDQgQVqRTE89zV1pM22eRcjEHyZhPKSHgJcNKqTTtyC6F",
  "key19": "2Wy9Wh3PEZcoWY7QpxV5wnQsZA1D6RLwPpMtRNhfqLADJHQShqkTdHfMhxgRSmQUpQdBJWJNAKx4w9FvDaAtb2Gn",
  "key20": "34P2Xg1v2rtPk1MAviZx6zwDNkB4AFzVEee21ieFmGPbA7bh2UYvkNXbBPBSC9kQvMCJypnnqudmRDX3HgumZCQR",
  "key21": "2Ln8LhjWYZ7zueznyqwzSijSqwyCu74Ex5dNTT8Qkqrq8gJV7UfszxdPyXTzK4FtEfLWWGon5M4G4Rdnbrbvp8ij",
  "key22": "yh5JSXcyJnQhKtSp3iUUzF4uGfsVyVvmTvBRH4dJEGr4tLPGNomqGtCCHAZmrvE9S7DQpGSLhzvNVFrVuiJ79Jc",
  "key23": "4sZZ2mY2TUwcqBaQwG1J114nDNDYvJY6m3HYcC8jUkbRi7ZY5nB6azpW37cwBwDqpa6sQx35rjd48wTVhcdHaZX",
  "key24": "3K7xwZ4G3oohHTsUTrgbhP8oFMCknmRoAPU73yG98vTd3uycEXqgCdspvibubkKdaA1s4bDJBFYZhKdGjenQHx3f",
  "key25": "2JaoT6CVMHYywpmQLBcErX8ZPAdkFh9W2n7uJSeYJEG6oKEAyUzkv6FKNxSCcYYaw7mUgVtS1rA3EnpdxthEEWHf",
  "key26": "4mdpSfp4bSGneeSpMCX5nDQb6iiSUZdtUMkv3bBxrxhTQSMdmrKZFNpTAmYQseDSNXof9UT7kg1ZkFEGh6gSR9Bz",
  "key27": "4HwTyhc3CsS8MnUUQKY9EkXxJsAwnP5GYm13r7tctGndq5pBXpnEPyKHogvGxi8c4yXEBLt6pHBPCPfPJi1K7nTz",
  "key28": "3ydxtXQrHafaSD199uHT7CraPaBYJmCfhpVys6zv5nqsBtTPNVYkj11ioTE8jbJuzZnuM7Ln4Extvrt9EQ9XUFEu",
  "key29": "5hmH6oKenQvBxN4PFxhcbHJPEUbmUvbR7adsKrKmpiGLGSKABH2sryRhthKEpyxDHX7WFrRWyYDg5ajUMeZcTBMm",
  "key30": "4Kx5DvvSE4MVYL6iJ2FyMKAeaqZLhFCxGYZoe3rGd8fmAxmbvspLmxsA6B38b9QShrNaDx6z7RV7sDsmiP1SEa9P",
  "key31": "38PJoM2EwvvjpX5FU7kyDB9UZNc7jN9QnrkobUpKn74pzvz2bbmud2eM5nMqfo5pYENTrETkm3Fx2Dr5BxNqbrnH",
  "key32": "23pemo63PoU3zfSPiLEPEXTdzd6G6AxwTALamSpQYymwYduZFCf8N5peEpPoWxwtJabKW2B1vfVdkVHye8GMTn7b",
  "key33": "BrtdVszo3wUouHxg5SQ9GjGxAVJNGZfYY2sKc1fEM2hsWLQJK8cEPA3YK3qmACYPN8rkp9xVEu3dEDGZULuJGVn",
  "key34": "5BYcA5NzudiSomKTZnEk6ZMfxXvgnHET9Q96PHr7HYeArFNFsV7pPHSTYNBBvXkosBae3JbW1pKBBxRNR5mXtcJp",
  "key35": "4pFR3t6cmVdRxUVnu4bjtxBqAKMGw4LDV9ZgSAjbrtCLEM4DeX4K5rAiSmEygZA6KoyNucR96CQapig7YY4BQpGK",
  "key36": "65iC3J33W4grcvXYEshEv1LBp7nMCR2Q2bbDYZdVZRkGsY3Xd9tJFroCo1oVFKcDkhbQYu6wzUJrgNYW6jhb36Bk"
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
