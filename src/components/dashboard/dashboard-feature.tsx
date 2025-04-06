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
    "37jziHTRMuaNqV8bPjbGMgUm1f7oweeXJw7ueLrrGsugWextXtUYaFgCrHrRR8BbRLiFXgBcRz2Fm2uw86VBpU4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNA9FZrp1z7nbSMuVVPmjABWmg9jzkXNLNXB6g5DF8NNmjbRrt2qgUUVWY7yyPhJevkqRKc7aEcy3JMYh3EqpKa",
  "key1": "4YxGFLUouf9khzawGU4McRNDxvRh7jGikxZ8XXiENrd6QA2PP56PhVNkzeDAxVUQjZjcPXdrMgbD4HQktyDZsmoc",
  "key2": "2xKtSvfbrhXX5rwCGtMUXspb9A1A3rTbNTUyh98zFj6uQHZa79x4oB3mPmWg3XYSMH74CdqKrw8CiQNwHDoP6Naw",
  "key3": "4zrQZmGPKXofd3yxrKff3wFr5gg4FSX3spszeT9UX6zpFXqYRifmefhNm5YvHAV9cYgCgVPDEDxGHCT6BgcbTnWF",
  "key4": "5gzoKxZp5sdEY2PSGqsTDuPruaoB7Xq9E8j5bDAuL27J2ePVPHmks78amkKpRGEiWsCxcACmKBw36xqcMt5kGDj1",
  "key5": "2veUz8fk2AMSZCJGzDn42CbGpGDSWPbrih25fpERRt3pTFaBHdq17AK12k654SYiADWhdDTnVQBbepKmjB9TtAJc",
  "key6": "GMDFPz79oDo6MbbZJHApNSBVv843jXXH3pyAe5NSRdJX1Bic5jbzqVd4o523vS6PrY9NcvRJKLNkuDikoqNjT7m",
  "key7": "3sddqYcFdHpUuX1pqcT4T42SiiVPye2ST7sULkzEiiQiF7TvJcWu84GgipPtkRyJY3MBeDYPHXzJq4pHLMHiDM6s",
  "key8": "2bX6VGiehPAkBKhvUEDVUGo5XpFKpZiYv6vCALYDZvGgQZ9LBNXfMmJc6wvsrfCY1mHtgEZo1PBRCxU9Lj3oSS7K",
  "key9": "5aAnZrkcAq961EAsk1UF8qd98rK92F4tREFtwqnnhBp4FrDHJajR3bjonGGcGXznUqgcckZaokGrYRCmdf9sZUcJ",
  "key10": "4Nh2ThaBmAy3WsVdmJN65zWSPcSRYwT794fVjMH5Z9W7d6C5bUbACufpuqSHhvwPMy8YwEEzCc8AGhDq3kRatLHy",
  "key11": "4GqsDzaXVgehmsY95GnJ5qSL7vQcZ9gUYWhKAHYcfRxytBm5FB9So66PtQTieHqaYp8q2YfdmrpokryBjoVaS3kE",
  "key12": "3EL8jNV9SpcwCf9thnWBoaHNpYEztbqtt8qchQAk7qT1GEeKCdvg7sMRvmjMwHcXS1STjbPEj5VyurEfYQTK3FCs",
  "key13": "4kYLJveuxKktxrhiBy9e2JxWfunxJvsWEJ26xnauvQtHLet9j6EdSMozMqhZ6XkxJrq21KrYD11xacA69Cv9eD67",
  "key14": "3VXRKm1xrLhUhEnV2hUWTDfKqCHuBtmbojBxStZuaSQuUifYLTwXF6uQRXVXGph9nMdQHy5MfLNuhpWdP4aBBjzW",
  "key15": "5jHKeNAKJo5YjQPiBH1oE9JB2QYXnrqDmJogVnr79P9DhPwUPkYFANucUkDDSQWEPDtYYMhJeUFp2p1xQHPmtaMt",
  "key16": "56QR7j9ajYE15vbMXTFWm9XgoCnJMgsFNhFS8YpPpjiKzV1c3YsR6fQ58tdBTrGkh3VHVy5zgk23fivP3V5ipBym",
  "key17": "2WC7mcgJim9DMvSi3R5SeWnvs46j2Mdo9QN25SWx3AoBFD56LYpDutU8BQp7AAPxSnkyQiogDWRxskMVZyRiAZCH",
  "key18": "34TEshxdpgmxuWdsSMyRuN3VU7dkNuH335pVJeDS5VVKB14n23wfyy4vEpRUqw2YeiLUfmriDTBYhEmuMF1q7HMV",
  "key19": "2jc4V1gR76aYypLtKeddNCo8c7uNnvPfFfKWQdwog3o9SzVmxiYaMz3fVSbRss8X16HMgv9AeyzfaJsvGrRvYr9P",
  "key20": "338SPc65vt3RQNbkZ8Jy797YWd2ePhmFGVGqZ2PuJDJugmTEB34FULXFtFxM47jSr3irxQ2VcAyjLWPvr2SQY6H3",
  "key21": "ziRWQjwyxFZUF544h71rXqBinsf71EtZcWUPY2FxasEijsxZ8Axeg1Dx4o3CehCVaxxU8SBHW67cZikw5JotzUK",
  "key22": "4cmPxpNU7zpizenZTf3BvS4KaH53fsyU1xatHjgCg6GYHCRPmtnyzxSNgJrDVpSys2GLaWiCoAv92qXtfMqQWEqz",
  "key23": "5tBWu1DmviAQKyNKCNvNesmWTwUeUhGAnqBf4nzb4yCai9ZcCdETCMPXu8YxB8AXuk5fhyfSxyuXaVRZHZ7oug9H",
  "key24": "3rTkF6j4sBuXqsLeCNvG62nG36H8SwJm9KQk6mXkuWjkosRazRno9WDVWrAvPwGWypd5hAXKJWLSmCe4azuVZdkN",
  "key25": "4QdGbzNsKgDF2TfyYWS5Zab13PC7H1g3CACxyzuE2ZeR1KLPX8gLK7GyDcBjCJeGzQ3v2x3RtmdysLuixRjjHXMm",
  "key26": "4xdBm15pYkZNou1vLPs7Lz2CxkZ4VWiqgmE3g5fS6sco4z5QMCxzKtr9Z9Zn4qcAcSxAKyr9s9fYDhQ8sLf8ttgt",
  "key27": "5hMa6P3c2dXeiv5KgDMUmJGRmmztfTXA1XY21YMLWBQ5uq8gfuSiVk1eb5HjaZEYxMtMhbUQdXpt76cFC6zgKQ9f",
  "key28": "5vC43xuuBo1VzEbV1FENuXbcgzHQzbTdGY1JKuuRKcSF4SaFJK6qnbSHu8Ptu9HTMR3hsRaDkxqjRYecHJ1hBadS",
  "key29": "ATQbZtns5NXYLkbrd1HAgvSDs1yNgx6XrsdMRuFWsYi875NXWLJK7Mv5D5K91beUHbwSm2A4GR71YnP5xA19N5q",
  "key30": "41BKnhUvcdjNFUK2gpMqibcCQg4R9qh3aJ1b9sVrSiWXUjE6YT5sQjRMdsDdkFafafjMzrJCccffPhWX2fsDw3v5",
  "key31": "Ek1YmKhfNfBhaRPrjpvCkyu8iK6iZHd4wcobT8NKU6SxQKzv2bgSn4KGuzENLdM5YPt3SFCvuERmDiKeYfK7f5n",
  "key32": "cvUayjKzgDAh8ButoaAzbbtNuBCDhfkyezeGPjqSm6hTfFkCqdsnmvoUC1jpB1srf6WRTHFZCicgPN2rCsQzVo2",
  "key33": "4HxqHfJHR1P5cpqRPifdAtPQCmF4rf5Kd1mUSShpF94ESBgNV8QqEidXgS9PTEaH8qXWKjMfrZH5i99WvE9JFcq1",
  "key34": "2U2hJYrcXwHVfPeE9c4bo5g2BSFrgne3Dp8bDAQvEa91h15RDyJ6dwnF2q9PTg43T3zUuHjPAHDjQWDzv5DWaYzm",
  "key35": "5kzeZhWu1fR1G2dKDKFXMt4b48gPn8F8BDZw3NhakcEzkUC7rc3dejhjA9LErwQmAKznR7fKcmd9858Pdv2BJaQz",
  "key36": "3AsQrQgnSaEcSBFUxwnuNeeC7doDM6RLMZUrdUhJWZaF9mCDSmWJLy1dAFQFfAQuQqyMPAZkisJdf2VjmpXwvdcY"
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
