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
    "vb78JuhRtaLbh87Ug6NgA3z9QrXDc5ESdJy1UkEjxPK6YJc7iwXS1jfdWSb5Aj2Ekhy5wuXZFdxEc4JDpmULi73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LFAVXMfBEAEWnmCbSv8qLBoccvS23CmDcyQ7VgYSjof4ntZbTQm1ejFXeHX2RgUDpfcZbEjkP7JqGrVHL1zVntA",
  "key1": "3MfddrwJkvVjTZPULWZUSRv72Ud4BwMPtZr8jApF8fG7Tb6evHdwURTCxmxyHDWFeREEhMcTTWKSiQyLD1ZBs1dc",
  "key2": "5jgSH2LWqCUn5xW9pLcYF5Xywi7oRFhxnuQK5sNjSN8dnToPMYxucEw5cQ2rwPYnH15aps21rm35MRPxTmpxmi6M",
  "key3": "2a1Ez5SB2hhUydq4GLCbJdRnK3K9Q9FUeWvRGn4pFyhLcfWDLDHHjSghpWuo7JsVxaGMrCioswon56ia24PNH13t",
  "key4": "5RToExHLUtLc5MtgrRVpMCfWydGNftt73cXuiEwZgx2gT6s2PPx4pupHVryoXMEm345KkQ6fqvbiHUhpyGyNge34",
  "key5": "4vPxZS8DkepPAYmgXDNMeJ7wkvMLqMJgx9JjsCGY93GJanU1XTaPLtENDqqGKiWusQu5QsgMTyANUKn3cqw4qmMG",
  "key6": "58EoFCKeBsvXpgFHWLZDGzjm541cBCFMX54Tt4E7DTnRdoCeKmK5UVuc3NZqeNantev1SudA3FFdZGtzWM9pvabX",
  "key7": "5dCPqmUqZRarLvgLJm82pJGQ3j12XU9XUpXYWiELDsAPYNis6nGKMnUD3sm2ep6qUyBwCtvTL9t9MkNdg9Ue2hb6",
  "key8": "4QiSSWqCDbN4c4KBFw2oJPLWryhZNdTN57rwDoRwUyQZwQhunEaxu6jzju9CiTHCFk86mvbE5VQAiXYb2otcpe9P",
  "key9": "2cueXQdTAf99qt7bFDY2Qf5RSNC7BTmKD3Vdj4KgpKBaNYg1bGbSLHz1m8cG3tdTFS8nD25Ghm35QMK1QFKHnX7m",
  "key10": "3XUG9t2xq7ZaAz59iCvX75xMHAfnfwqpdmASSSmYWTWQLhVsUQYHf6tgC4GNbCRFvEf8v2rxNp66XxigpHpBhjgT",
  "key11": "3zwhRJP59yLEzidnerpxzWY7mo62HkbVM8XE1v8QtUDXzWNgbnQEpZqi6ESkTfreKzy9zU3K6833jCFEVvHjeu9T",
  "key12": "4saU6VPkCjukFZWjbMXr8KSSw6kF3dkBPnQFxH7RwjHHBUBswA8awBsN52Xirrb28gpnNgsYkoZbUxdc5v6q8FZ8",
  "key13": "9RKjAdMfp1Xwtz2mY8PyienqmxiZvZ49yNzBLWS3ce9WT78KCQf8rBKMPQeJzQgiZATK8TnkdsEeB4t65pn5N91",
  "key14": "7AZNYjvhgZEZsabgRLGC5VcQDAbzHDatGyfVdrkq2v35SqMwAWvXGj8YQHPDxyF2Lfh1RFYajq2g6hqvgVNkmHS",
  "key15": "4m2JqnZg2GCuWYbDMu1X81ZwK4GCj96ajKquZzXN2iPoz5SPGL34bN5WvDR84rKKktXAsLWDF1p7c6h29axHuUJH",
  "key16": "3B7ZAwB83RkSzBi6Pdfyb6dgv6yck7pjnmUrme4S43x2c23BnQavDGiKVGusRbWUYETb5nPiD85kktq9v66edz6X",
  "key17": "57Tr55LQr76iaKXgaeSgHG8QcRT1ZpKCnCpvpAie3a8FgnixpJpNCZ9DtkgLhW7DT8acPXrzV8kupveigUe1Bn95",
  "key18": "5ViQxKpkzmzGeB2y94yRRXgWjXAQkG5dFEyq2x7UifpPSYPtZMGRnF8y8ewPRAPooaaD4FZLLKthCi3Wd8PpG7RF",
  "key19": "4x9uRkKRfKsqqHDWi2VdwaVU2tj6sbUHDQYt97fMznTjdtZYz28H6fRXanKPxVzCqgpqL2Ys9FaSYxAJRg9QjzMJ",
  "key20": "5Fn2Vsfd2cy3HG5XxAdUNJNMjvu7Pxy2Z7x6m5SKUj94P7t24EbctnFa7NsfEbtSQXD6goTipTAtYdxA1kviGu2B",
  "key21": "5BkRopQgqnDFb1UJFgCY13ypE9q5GCwG1qz1W8xmfM7uREJFogyxmRrGtxSf7JLXHB58htSQgzbNUh4CSvJ7qEQ7",
  "key22": "4tv17hJy6z5GJBNjbJjoA8x73sNCTyw9DbTJWrqACkjPvTUFDLWzLXXjZ7Lg6Z8CrMZy2UozG8o6RiazWmwyZB5K",
  "key23": "2fHeedLg85c5hMVc6xmwyFF2kHkCBW24zEovUt2aVay3BUzCXQLHiUtsyir12KXHiGjrbNL93SpbQiEFWVNyXqxh",
  "key24": "2tLoS7pN9zShcBDBTmZmuFQAFLybd6sop4sSRHKjdPZNr37F4Dtfm3DmoPFJN8ENEJ7PzjfBhfuVyrs3pFin4qpN",
  "key25": "4cQfHjT2FMs4VnSibjCCUX9Rf4R3Vt1NfUTtqoKHeV5Kmph6LPm1puj8qYsTdgSPLDy18t46zDkKFdw8oa1dSDk8",
  "key26": "2qurnxoCriCSogiiJBz4brgAqApsqJxgxPVmTNdUEMi19nQUm3ahx9rRN7JhLFtHUSLG8NoTUxEANuSyJCvvKji7",
  "key27": "4U5orxbkXe5mpXbNdfgccSFtxSTAeeCptgZxvX1RScRatwcdJtkirWKwYxHjWf6gZTeMUbURUWCe4ZnpwpEfAQzv",
  "key28": "54SBbufxuQVy2e1WNUskHaJiwg2ErCV1ojnk56fCLcydTmRNfZj7nxLucDGhkJmqwDVSen4H7VXzvWYK4n8m6Atd",
  "key29": "5oPaQ34w1wmBAAwAWFjFJL28dD8En6FhsQYowNkQm4Tg1GJbNhPWgCxK5mh8CAQD7PXkvdoj4GSiEex4YCfgbsRR",
  "key30": "2o1mJb6Z63XzyFjK7P7RBR7B7fiMx86oSGy1Tsim2iEWoig8VXYvedyu8e8PCNSXXYTw8qvxhg66fjC4S9XnkPEk",
  "key31": "2ev1kYFz9b5iXFh54yGek16ypKSUZpZJWe62QMMJqXNqd1hWRHATMSEVgcfMuunkvHvnY14D3jU8FePfM9MfwMAv",
  "key32": "5MiMnUe6B9oFz57MCFu5gs1cQdtJ5quAAerkXsnfPyJRGYPYTfAEZdBiH6NyuiGPKk4ugB9XF9ETMUEvSZmqcoYS",
  "key33": "4rixKarJkCXN34xBjSD7BgZ1UAxzb4hVYJFbjHDFUXq8onxLdRhb142JbPpQ3XYHYFobujpdhxKhzbe5xa55R2dF",
  "key34": "3cb6zYXooHrDm9GqQtJWEUzLKfEM4hrAFZnDDMN2jBbRQmRpYqy8ebiSZ9BdC8PBbnnvRtxEMaXrsHTp9SMHsZNb",
  "key35": "3wWrR2NHwvzxNCfpp3MuNNL3MZmqmdgmT9JuF2ph3QYCXKypGazhekiZTKDEqgNUyC1rUpHGRTkj5B7ewviSVjPG",
  "key36": "2u8Zx9YdHW1MmN5ABxHkVWeHPEDexHG6LiZYjs9MSRcFyJ6Y8P41ezEGMjJYygWQAJsYLWVC9jukwCY4zQAakYRS",
  "key37": "fYf8SpT3ns338XnL1V5RwA19y1QdHi2nC4o43o4irohqLzaHSnsYirK3CfnG2oGzWE859NJBsrYkkZgYNB6yZ57",
  "key38": "4zXftTRAtYbAwvg3gQNtkeFgnWQFR8VPdRDKKeqm321TYXJdPsCxphtHx557kEXGAk7Gffn6kxJ8ASAfNQXAGpV7",
  "key39": "2GHFg2MRZ41ihNzSJmRhw78D3jPenabJpsg9hxyArRL3ExyzsHhqZbhoYYZnABViiKLbo5HoTtqkuxWDGFukpmLu"
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
