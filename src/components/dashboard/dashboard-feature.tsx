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
    "5QFaZTihj5rBRJ5dtA4JcxPJhe6K4SxAtWnZ5PQNeqs2U5h2t5YKrWEoVGRwnjiSrkMtFYXKry8JZjdMGNtwcnPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWw2AsKVYPoRE11GQNF1BjexyknuESEb3u3p7jV4By77mJfN9xqR1PYPiC5JimGUUnqjnJDV6A2V3VDfKrU3u1K",
  "key1": "5MsNF5uDDwRQcHHjmVo9P9KRczunCpvHQaHwSM5p19TH3aV3meZspKnzd5ecqVVyZj2gkscJD6EMZQZos5q5YfLf",
  "key2": "2YDkM4hZA5iBCigmeA5zN3k7dsBYcsD6cufhhAa15BV7A5DZTxEyJsei1v38pqSYxida1jKXegm2V8t3TJWyGVwM",
  "key3": "2Ae7cdga66x5umBhYd2zbFuEdTMbUxdqRWoLspWYCodH5doiKTSqKXSS5vR7EUz9nimeNgNeg4XQqqt3GMWoQaA2",
  "key4": "3tv4DxEQcPMTqktVqVFR2huq6zMaSSuPtPKNMhXnkomwjGScu9hJaRN7oecMdwb6aBpsZwjc6pbgL6DvWgfr8v3e",
  "key5": "5waP96qJKC6An3aCuferzCWNu9hmeM3vvgCAxpBrbNt477HQVtyHuc8pG8Zde1n6yS7gqoLqGsQD26PQbYXTuSrf",
  "key6": "4Gp8i3yWkPXUUdf5htmH6d291JUfBYizz7EAW9RT2mWXPdBGMGW4QR2TzNfGZnVFS54q3YCtUpZi5vavjzhu4DJU",
  "key7": "2m5bx1i9rkiZ8kPx46dvXA4RfmNfmVhEfaKnMoBERWPyA3rU5XCr4cLFLUn4Sr5fa6mZAYQSJtAZRJRJ8SpYJtUh",
  "key8": "34xgCzS859bGuZSUiPh3wG7X8QNcEKsGZouvaahjQAYgHCfrwzSvC4HUvdPCHhCWPUWEoARradgML1GPhJgQAEgF",
  "key9": "4m5aHz72ysKCgV4PPzeaWDKuSn7J1C4De7BcHZCi9yxkpboNDbhnghPRbyFq3nETSWmCCV1NMbdym7fCMGF7PPYh",
  "key10": "4qAMmZax8ZK6XpNgmBKQzFv12FdZaVaB5L2zA1CydS7NqxkgZ9GA6Nr7mKYkwqFNWU5YiCbVGK4hDzFjvb3fgo6x",
  "key11": "bftuvfMgAsvyc6FmB3XKVFAp7hzjVBaT2nkaw3V2hQavnVZv3r2UjEvgrLSbZBoNJyL7sm1Nfea9Rqj8A1iixJr",
  "key12": "4Nd76wGQvpnuvKy6xQqCvXVx4QNFmaYtcAuTGcuB7YfHR24MXnYMw6zK94PkHBfW9YtfL3b7bGnvojhN5sZnYafg",
  "key13": "3LoWdLBzwYjaTDXWw8k4pmFGcLSj1NsWMPmoTmnVcmGKns9XD48jMZxVMWfxbYhD3uK19GZUrufguvKRCnpVH37k",
  "key14": "29ZyRxtFFfMJVMk4M81iTQxSzHa3DJSHYDH4FrbvQcKZH4ikWRE2GSoyD6KpoPCn4fpk6p5hE4mL1yEn7BQydoJT",
  "key15": "4gfBSaHccFnZJpnHiD7UhxFFrkzWTTRh4DeKLPNh8MpBXsmzd1yj1owSixrFksCfJNN8fk5Z7xuZtnuYPJFA5ExY",
  "key16": "4CvEtLiaFt6tFTs7U9egKWahBm7b1DAbeNkML1EBjGNMjWeNjfXWkmpSdcKCs5kDSdbX1rmpGkhv8PeFT4Hhj14G",
  "key17": "qHnv8yvVvCFBpMNpJtACcd7xGHeugqjgpxqHxZsPan4ic2cefH9F2zTQpbx4DXNRgJjNcmfNbGZ47jucjmS7CTH",
  "key18": "24ene5JqMCoQZbWAd5LgYA9jqzCR7nCdoYVeEZR5qFPvwBZ4LzTtfexKXXztHcp1xLaM9fv3L4Nmk7DEwQNRA27B",
  "key19": "47aHxo8PuAQbZaHUR55NGBovY2eV7kDbrtmu19ER1sPonvH3tKpdHEJEFGZ85UwYWF8FBphsE66b3uCW7mfHChRn",
  "key20": "548T8Zh7KMyt4YwZ8dGe5f4v8cEfekMD52xv9K3q3CKvfXRksz7tsbvgxwhNmbfbu2quaviNLoRJyPbANwR8H4iH",
  "key21": "5HS7Np3kL8B7crTjGwyK4ywXPeLF83f69mhkJD5jf75ZXtygRtCwRQA2jjsmr1Je98xk7qrNBmRMpJH8qozymRPg",
  "key22": "4yoQY7ZHvDAM5rZdPN8vuV83pV5WmQUZeueXrs9GY78qWPei3CS9FHnYmRgC7Wo9XaZ8xLZGL5YrEAy6yB4arRgZ",
  "key23": "4r9EWDxnZZ9ytRGhNdeJPeyBo3JYQYHQmxtMwwnFtV9GaLdr3vTj9RMpkqmHFJaN8XSzPDXwMexNSV6Z3oDBtwxM",
  "key24": "5MmmfMhwUi3vFUXQgqTRLL1i629pxszQ39oJpm7ne8ZTDwnfoFC1ALeixTrD316zYW1abXzYGUm4TRXke7RDk2XN",
  "key25": "39kmyDeigzEJkQA6V6XwMkj7g8iHFQWjvxMVZrL56p5up14amYZm21TjvZgwcmivqDxVd2x2eh1qhsXXk9x1MaSf",
  "key26": "4ZJ2Qso7tjLhvqm3nb1KrSoKXJAAmBd3fDTt84V2csADUMyvCRx8TmKBTMNm76WXFxEGrQT2o9apd72LQBhnu662",
  "key27": "iUvwPHbsvGb5t5WEWk3TpooUqNe5TgXYAde7K5SPb6BSGQgGUaN5m7cNwztgQZY3rL6VxqcmArxTjqNYY6CTU3d",
  "key28": "3S2nfBd1F2QdqYn1CpHQtTN1eK4whxcZhPc2zaLU5qernrbaHhZgLpcY3DAUv3tbxggdNraCvmDqDbtfpfpKeJvp",
  "key29": "4YKcfnhtdGKKoSYT4xroZ8ezWtcGK17h8jXgTjJhgM3MM3pchDv3uzRparNVPZcJ1uvt4acVqcZF3PXn2PVKvcSk",
  "key30": "3drygmferXfLtwarFEajccghCWnSdhjGMCsUctuawmzxGExKZYiDvAbDoEjqpMCdAWWo28v21cFvYzBbCZEpBdvB",
  "key31": "CCyPSP7CJc6DMt4pzVzFDwVeYjnfQsmRV5jJ8g6kcNsEeJafTBr26tVV3ZDKw83YYX9du4dqMPAdrAeBt6ERNyi",
  "key32": "3o71nj1GX7crwDSLw9DYVN1pyo4mAuHQkF2MhboikB8VraKhR8Q968UmjyH5ZpTFHAhZkR9JcNq8ELUiVdn4CDr5",
  "key33": "2ZU4dQzA1YyByGGLzK5bCmE7sMmE27qSRnRCf6JrP4TR49tjxoZZ9ZArQMpas8YjhUEU93eg15g69XTiwH9Ddrq3",
  "key34": "2RycrcHs7RDfEtyWejUuEfD84S33cupKXpLner8qpBy2gmPtiRCN4NvMdjQDfAhdbKk12xYU7VNqVvKivBvgmTBK",
  "key35": "3fsHtWYfFD7h5HKNirA6odLvVcqm9PiEqmSUvSz46d9gMucCQZGPoTEHWrtP2kJxkWxjccXqivZLqWzKccK5AHaf",
  "key36": "c5uHDEZ8y8g5YytZ6nnHMXyNbNJF3WMjkTm83juu8VKKo4yFVhCbg45kiCiu4ZkGEfrXPbx3scZMfWdSs4DZ7Qd",
  "key37": "2fGH8DAgygAdpVrk3y3uyz8gFeskGKJjTFww6Uk6FW3kkd2UGvwa6HdWLAE8G97n6vkGhTY4mtTtHcvVMkyU6d9S",
  "key38": "5ZYVL4VWEaU2BXpXhH98Cu49T3rNHfZRz5pzz1H9yojyNhxFRXBXrtReyWW2WmEFfc6osorwkQUsBcQYJvodN3cv",
  "key39": "36oR3MyUt5ZejT8K2ZGfvUtydn3byaP9unHhV93eHNb46uViVWjtpbVr1AVUTHqTpukZJ3znrxYE2qpBHrEkGrxc"
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
