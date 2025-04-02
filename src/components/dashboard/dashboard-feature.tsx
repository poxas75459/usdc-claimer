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
    "2QwcPDtFjQNypJoAfoWBBqtpg6jD6AbHkPvCFLt1MJUAjuwuSbzDH7dNUf3W4bdrVhrJR4wC9iREywvCM73HBNKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jaKGQvF8rmaTiqcxqbyGyGUo6cKQ6P384sj3uV4pQ7reeaPt7Jeu4bbhepJ8S4ZhWSyTFBTZB6z9XFYi6YiXPvF",
  "key1": "4r8yw1RfWmbPL9dPq2t1tycef9atV6BjTDBoXHxGuA9Eu4xamFei16SAZ9mVmG1hc8LKbfan59gdt6F5P2TS7ZEJ",
  "key2": "2YMWQNW5YU9wkqaP21R3Ak9LKhyPxFmAR7duCbQSMirDtzaGDdJHoqYRGXJ2aXb8mKJEexQ1jQmnxRnmUAx16U14",
  "key3": "rKK22icRxu7TxqJ2t1UUbysTMs3Wv3WNpBbw9Zw78raPTk2FN8ZZw1mgfc226sQRNqUZ7jGGB758MzS6tLAR9YU",
  "key4": "4ViZQukTYxE8ed2DfUPeFu9cbzLJaxbAiETars4HhtEz5dvVVwQieoVQLDVCd3UzTeaMwr9ikE69VySPd6tZFzjF",
  "key5": "623UwcHGSzstW11YvySDvrnJUMJrkXVUVySJR8JALx71AXa9pwFNo7vuSX172Z9FerAqstEXhsZ29CdrvC1QMyHw",
  "key6": "idnooA2zJBgrvrqZWjteptTHZKXred8K5DnWvv1xJHEHc3EcFrqDWMTXL5GS3zZg194sjqfgA17gWy76AvqtY5P",
  "key7": "4ww6Akgrd6PAb7Z6Dr16Caw3cNp8yqFHoiFsxJ8bHuRdvH58xgFetFiMaVQo9cS1Z16ptTZSQXPFA5ti7Ge35zjC",
  "key8": "2FzRieXJoqasPiK1UJDGPYzvJedejQEpvrxmCXdPfpiuZrtoyYi74mXeUjzw6fH3seqqyQ47RVnZ6AS9DFGF2Akw",
  "key9": "siXjVHfU2NDbiLCRwtSBANDEUupAbz6tBHqyyDgF5DgA9ayaxa3BoVzsnywG2nQGeAT4bn5cgtRncx8Bde8MgFn",
  "key10": "2JRwzAdhxQUWRa5EPDpH7uxVzSnfAKRhgqwCmnbUoqguyxM1ZMaSC8GvBxm3FXKVmTvrfnG854yMNDKawNEkV6Mi",
  "key11": "46ZbP3aF5scQuNM5vFHq6s5i9PHX1k7biwBMXJT6AekKup7mcEf4Cfd2516JziTaZpsMPJ2UaLsKd65FPRa7yscJ",
  "key12": "3qUyFXcdT63aevu2TmCSm9UM1Pv6pXwZFgnXsh7N7N2Gf7CpEGVFhuifBFejr1QcHeGUoxQuVaRKGk2mnc6ZKJ44",
  "key13": "5fYvPKmnmw9q9HiXrA55idU5icqEPhG1vJR1efDy2SGji6NT7WTuAyKmBisatzijicHP3SjRuFsbK7sh9Z1j6Hce",
  "key14": "3Zc9FzswiWm7ST5HesPAzetcurxfw6FvEz5xHpKEdJfnTep7eTGwaVPpu9k64quMts4WFGd3CV8nV6s6Ha1qLDNf",
  "key15": "CQJeEYVSazCBLY3SdPR5th2ghBpvx1BfFko7SEa3JP9xHC74XrkEqkitaSHKQndcjH4q3Z6FonuTdN3HbvKwuwW",
  "key16": "5QjZ57xccYLL7cteid63rAzqg1R8UiqBoTrgigUVY6uivQ2piw1cKb1JQ8GwWVf3CiHau8cL9Nc1W7sxEHLGYN1E",
  "key17": "yEWTe27fZoskdGYocLXUKbTRDPcSZ2NdyZVLUCfzY731fjCcmARwnhQS4Qpne4PLYvTSt6vfV2v8gUXbdE2yHQS",
  "key18": "3VjG7zKBjjHx6oeKesyqMdWVnVwWDkHNQeHJCebQ1VQHmSzQQw39wERmB344RsodfGzEngHKAJqWovSHUycZBkPZ",
  "key19": "5dNPvnUSkjr32c1WeTcLyKWndRbqe8osE4qvZJgu3hwDBCEEazF4trJgSPi5rLo5tJMC3yoTTMgmSyouEbdGjneH",
  "key20": "66tHYVyxuPgAKV5iYKVA1iRzpQ7BT3ww7JQ7C33wdovv5U5vd4LXR7q5c2zmrsGAhqHfaB5W9rGSfxgh6xMNwSxQ",
  "key21": "4AkUJY8iKFnkeQLiBQFXXhaxoa8va9pgVEUKtEH7vmJpNtD5tcENn1ES39qAFCa1Wud7Lkikb5epeCdG3Guyozzj",
  "key22": "3ATSsyQk4XGEuS2Pes3VntKQH4H4xjm6JfVSmd2gQN8uTLyk4WihBMP7KGBZ26ywa8zL48yyh5fQPzBZsopaSWNE",
  "key23": "67mfnu8FTmzqB38szLfw1CU2TadQR4iYQnoWrtdddoLwmAyjYqUNGqRgQPyKTHc1sxsJ4SNy8a3Z3CJbsgAWHPbA",
  "key24": "cCzxsH49vz4Apu3d8go4SxECwhuoWkCkutEWgiy16tLFjtM5NffGub5DmodMhMnQ3wyUg4Rdf3rSsr2ZcsMY9Gf",
  "key25": "72WmJyN2QJyEnswHvQ6HmbMbn6ZZ96GXcBsMePJ8Sjem1DjXVowty5pWwvvbRgA4ApWARbS1vyK4MGq3TNv2zcu",
  "key26": "2zJ8rq7ryw7a45Rqkq7KDCTZucCwaBNDB8ktA5WtKSjPTZBCkqmFaLn86zgqQTFsZAjYTpbfCzq9JmV3iWFWZ4vK",
  "key27": "3otfd3Mqu2UPq6q5auSk6ApAAxdcvQEbx8rRhErbVXXW3ArXdDDDGpxZtyvDrTwV2pDQSmyD6AWerDMrkgrqFxg5",
  "key28": "bPD6dJUv8S9DnBY71NfdVwPxRyDxhQq2k7gYLgfBdB9jovKEwSCKswNDY7bSfTEmApBfBCzYfppgRZPbW9PDwdA",
  "key29": "5MBLjs467ikHvarzjmiQEHryHxUXgg1vKGxvMTBVfoMWqMG1kS4kFtk4ntY4d4k8TMUAq4mcct5AFXGUSaxB1Jbu",
  "key30": "4vvNYGzGffNi54JthhvoGaKEtDXVGochGopnH2Y6iP6rXpUjbV1dmD68vRfPs13qgwQabnYttYgXisei9V5FDFQN",
  "key31": "2uFYmQ8cVXHAgqoXjrm4qadL96Gm9XVbJo9dsfzD2XHyRRHLMtA4YmK141KXxYoBDEKLhqsuh9QgkvJF8mpWzxxP",
  "key32": "aC3NKL7fLojc5GwsoqsqxC8QRyn6v9hZXpSHoQTqbSPJLevELP6BtyYKWQaA328JFbxDivWV7C2es7CATD9oukK",
  "key33": "3oeL1PzykLomAdnHjUC3wqK5ESeiAbMrw488BgEjhmeboi14Zbe6nF9dkX3Ayq7m91RBxqVn12ZL3L6JXjdukxsT"
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
