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
    "2M62pPd8TeQqZBBXtoUPgnZdejZcZx9YPuFJE5guwTYgzvW5gHL5sqkqxueuWwwqZRAUJ7ckk7H2P5nUPxfButBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tAycGmGaGcHhWeM7xikWqZpiDdR3rC51SCFB6rXbEtmKjD5jeA216AvcjVMiVcdtiCiDXgZsxY8k5Pap5eTFJR",
  "key1": "22yrAryJuSGpKXMCjFzxDVXDPUgxY7Aw8bmPHYYd2nLvjySt8i79CLKrePsn4icviuJdkergLW2fkW7TPq5sm6XQ",
  "key2": "5VUF4LL7pz9C7pypEswZEfWZHsXMfFnuFR1usLwzWJAxmkkhkqJYNYGiFiRkfp8dgvupZoZeDK2GL1yRjVdGSDZK",
  "key3": "5Gjc9UyuoyVKendmYyVvYwgeVdRZt7xG3yxVxUNC7bSPPB4g7rX1rzd34MhzfSJJQbGVgSPrgSNzaGrnudG4tmSg",
  "key4": "3kQ5E7vrw4AdwqDVbU3GWgoBqBNpNnuWKM63zzCKcQAAY4gifna6cvAhhvgFmF4fCc6CHoeeVgvJyEghC9uJCMe3",
  "key5": "2fNvDSnpdHRM1mVCr6jEnPFxUNWvyzaFRJA3Str4MbtbVWsBQ7iQfRfitLdaDTLcGvB1veq13gTGevsWKzmoKght",
  "key6": "323V2J66t6n2kGTVjmoLWk7Sd5PThrBwgcnD4kyVsLBzW4jaqgUGv5Gu7JWBuAsy2Qs6MjhDYZw8hv6LSZ1sfTJY",
  "key7": "5gyhS7ApHjiKa4wZFsrz1rMRxhmkWAUdAsCem3uZi7Eaqu4LmVrKDLw4Va2JnfR9rXEHyguCx6dXW4mEydCzbYAa",
  "key8": "5dWhL83mt724wcENa8HEW9373MVppiD8L7sH1L5SWnW47xGC8en9axzULagpnwRCTy7PXbVL3sPFuqUTHW7nnPjS",
  "key9": "2mc6dQPUbZN5MXoR9RuJGprdgX8p3w8QhVD6TxMnfMjdXyLWq7mG3EsDzFMYZvQ4xngTLxJNfumJvqAZhjgdkbUz",
  "key10": "2h9nScuo3ccZoY2sJr98DwopK3d8Drz5Pha4t282AXnriaQSKXhCWg44nuFk1fKrD4UCpPheVHEH4UaB5KUY9FHo",
  "key11": "gzDd1uEA4nseUoh2mbMGx8o6JAULTUdxuKWJosb6PtSjkVuLnD5fjoiyk8jJGmQKAAka2qArN1LhbtWDnhpNpX5",
  "key12": "24YYAMUrPpse8BJ6PoGVqpKcCbiS7iM5JGj4sYK72hupZeiuKaaKgzXsyN9D8NUwSeehWUGahPR9k9wvPUk7TYHH",
  "key13": "2pWsNJgv5dU2WtckT5Ny8xjZ3q53nEJPp6hANb7B5mKkj2KZ71fGjBWkg3t9F1TWAau2Le5Q8Fu48f6oUCafSVDG",
  "key14": "Y26Myw17SuMs8vrQvcQra2VUQA3Bb3qjvk5nnoByDZJhM4MunUwLXX2J9shrweTRdV6SyXga6Xo4xTxZPQUZoHT",
  "key15": "253p3jqmrRYkNzHWsnQM91YQVd23LGy1FywNyD9spcgP35Ko3KVBp61KaECx8668qxMRU4nPESjAGoqtAfmLoWcn",
  "key16": "3JXmSJLMJ8tiww1GsPrxyVtoEYepgNjDuLsjT2rNQS9JvYFcQMZtA6dHg3CPRE5KM24cRbypSo5ubdvZeGz23gx1",
  "key17": "5ycBJcoD2B7yurShfBJLeEJauHf5kR1TVHrZ8jUAQ7ZwyHB91qhQtAi4adncrMvEVFMW9sQ8jTT4nTvKJ8i61mQB",
  "key18": "5Tz5R7xeFqDwuXM1ZnYeZuLHc8aNU7TaKHNMPa8AVic2kYFG8ZaFNzK46toW9NYGcL5qRCV47LHXCSgjadZacrou",
  "key19": "3KMtBpjuyZgJffnastDwAunQPcZ4KRt3pnx73kHXs8eRN2HPXkL5qDZnusieiaQLw19wgvcdAQZeb1TK22Tf1qa2",
  "key20": "2pB7ieb6fvbACTYUsFNoGBR5s45LvcsAAPtbgwhJ4m7iQVzDsfPUMtUfRDFzKpEMvx8cPvSgtXgsxcBotdHgTYhQ",
  "key21": "5fj9gSWR5eLXmeF1k5WzwjUPiBSnjBsZ3eWQuT6V4W5fBUDk2e9iprheUhQY6YZBn1hp64fEzhKt2chgM4jmyDEi",
  "key22": "3tjpWHKP1viSpcSuL8pES7UnS3Wmsy68CRLnget14TuYW7DGw6Vjt8tAQCTT35rtfnTx6QVY7rG7ZH5fMLbqgepW",
  "key23": "4X2NbvtN44me91ktN4oMobmqL98Erzvng9Sa3zwYjwEJF3F5LmrXMAi7ik1NsRUSozX14kAMX7b9iN8oLKNUGDEa",
  "key24": "4zHz776qy6ZZaiNFqWPgAUkPokaDzibFARWzMTtXaKHSWSW9VwrS7ktwuvauxPDYQtY1NLne7tjVciFJgc8uChhN",
  "key25": "2HxKLkBe21ZLVibDxH2ex3MgrShvKP4ae3apP2p63EMRhziW5YWhnFb1w5A3z4EM17QuGCT5BCycMGZBNaKEqM5b",
  "key26": "HqcffAfhTe2K3XgMBnspRZwTdUvQXh6WqZx7G7ZHF7zjXu6inycATiVMjjfVxfQdAbhVKZ3Fkrhpop31TbANSQu",
  "key27": "2CcpYETfrphognG1zoHojjGaqPQ5PUFkMJLw54dyXKT6ZUxnaUvLFN6EDHRdsHa9jWQ4LHKAQppUc385QwNYUfos",
  "key28": "3M6L9HobyyCHh5Cpkg41kKUhF9UWgVoYgf8DdsfHWoGiu4o187UEoX1jAYRSTMiedfpvo5Acya9K7Dv8CExF1wJ7",
  "key29": "jKw3ykrpTJrJVMUuD1evRfGTpvSkMLe5uyVrxWxNShQRwyC5FJpw9K3oPGqYye536a2qnZ3LpMLa5QBQFxbfKra",
  "key30": "3PWcDGjFYVZkP2QmGDAuv2FK9os3bNvAuhXKKHekYaSoAn8h7PGsLxiZnaNGzc6y7TAn7SvkEwzyb9x9ZCJPfCv8",
  "key31": "3xDsfWjRbNtxENB1aTySmFLw49tmWPzi3tbo6WqCzbWXfAc4B7FHTb3By1cxU8JbmvJWzxmqeHXu9uG18fi57AAx",
  "key32": "4qLRz9H4sK5h3DytAS47D2YJLV5r8TEx1DkAaDwjrydY46B8AppbUnaa1gJTa8DBGoHpihG2NMScnHrti4VjCWMR",
  "key33": "3SJKwBZDPXiW2kigNGtat6hPq43bryzdrbUNsuLTMHyqFbDe1kG8G4JUAS5GJf1vH6b7Xqxqxo1tbBaWiF4xVapo",
  "key34": "mqhAGxomz2aYFAgHPgFLkewioTtDgvaKcDVAo98QYMafdzjWWwXYH8aysXvYCruxrXSsk3ZzLdsTv7sGG1MEDZB",
  "key35": "22tAsTcjcFD12pQkQ7whTEETagJPVU6B7bzwa9qb8BTzD7LSeu2sRPnX5RMyH2jQorbAroSMykKVL5jHy7Bx41t1",
  "key36": "2PH6tvby2drWKEuqq3Qv6iXRLkvZXfPjN6g2sXkbprBUY5gQThVcST1mRmkR6W3Af9eknDfDB7zX3tmHg3aVAMg6",
  "key37": "2sGdvkgMvq6N5vSkLXztkua2L4tpGgVxqjnWshNKDNDAAZ4zZNRET6firazYmrAyeLU6AaFzQrKwT7X4pZBDitRt",
  "key38": "56NsPPTL3YSKqdh2DMiq2cqf6QPKLbCjt5YBetMvdvLLUUkJjS2gc53WPcuWr4Tune95cney98hag7H5bGLGP2MZ",
  "key39": "V6Pnwbrfa4NraHFeoZnoMcYuJQpoe2dxTTq72c5xbCgHkEnCDhkgGmhzfAJNwZK93tJpoiaoW4gMQ9iiN4njCRR"
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
