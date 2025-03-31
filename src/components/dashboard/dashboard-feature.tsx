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
    "245rgFUXyEUkming8fAe4zs146xmk5NEUqnsKWJcRNx3sR4qiToJk7WpR1xD82ZzEzyU6pKdoRz96McRijHSMHgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47C8fnKhZykHp4dbCsE8fmNwunsgHgQkZBR6jjF3sgXKGbN2d8P4AAD98mmFsLtmtPDTusRTPF1aYcqo2NQ5EUaH",
  "key1": "5enZiX5MTL35RezdQvbjGAP8a9i2JunKs56hPTuErACcVKHccCHip8WwCZH3VkTDWn1nhX9KeuoUmqn2bCiEZAhm",
  "key2": "5UKyZr4YjrtpNxvTZzAeoC6W9aZqkASEqtJGvchiCumiUsXASmueaXM5bVjb5T1J27KneJwvAPG2uc2SJrdEP5yk",
  "key3": "5m5rxr22rwmS2XW4HzXbZPWtbW6TAiaZv4Y98bv5PrkYxK98xeCbCDDoc46GZsMvyhPBDXpQWdZYJyGt4qMz3hVj",
  "key4": "3p9SvAdCqQgx5q6H5cMU3fRLu1wxooSA6UY1kEHHJ2eCEijRxVkKrEsLaVBhkqKzrnwzaoSw8h4WtjZ2zLpxQCnY",
  "key5": "4H6gAnGpfgept9mTmNhyFkUPdnNJaoyXSg9K3Jy6nkZAgMvwJtFQXZ8grevo8YN65Jvi9PmVKtRR7Jofe5Do8AdH",
  "key6": "5ZrD3REGGjJt9q86ey6iHqVyaJ1yGNyfn6pGNocpCx1nyt1Y6xyPw1rk9FTJpV52A87icFAzSs2eL9FZUDHHCTiC",
  "key7": "sU35bx5kn2JCQpg4DEmmp6hdL78P3wrDct419CVJwD5ASrzLCuGoouGkc8EUrtN5u2a5pECcMVTCVQU2v7jN2wo",
  "key8": "5mWWSUZbo7AGXvZeHo8ExrEj1jDCyzANfyFGacXZHMQHqbL45kSjn1dTHzgTHvK8b8AqNby5bAcwcJ7oY16Xgs3e",
  "key9": "2npUVB8KE2znGdcXzwXW5nhjMabjo49MXFBSkneaycdiaHA1yA876DHoUGzfkosxDa897R9aGjhHEtuzzqkBv8wM",
  "key10": "29acyuAxihmn9cB5poqebtQp4RaS9wTwrAhb8EGeyRJP8f3tnxtPuhDa5PM1criym21WFyCPS1sHofwafy8yKRRN",
  "key11": "3W5DoeVukFwHz54RJTLFtvsJpxYo9XsKd6hjimo1GVVQfPtyQU86nRstJxDW9jcLarwCemXWfiquJKCHrQbEU8vK",
  "key12": "2EccWcd9Lpm2zd5xL1h3CGY8svDHPJyNLwCfPCdaGcDRFii8y1CBPM4wi3MXbXAhiKuUzqERJW4zYF6B2SVvj2op",
  "key13": "4UXDjNuss7MzAYdho8KZYmbDoYuBbqXitsk4weFVFghEyX6S4XHQqRReZhqgagmSk9nPVsceNKjBe5Qo9PvnAEBL",
  "key14": "4MXFtXCWnnYq613XtKMpvkns4BWRako1zACmiiL6GSiTmvWybjf4hWDZYZw8smViSzFLuJvNN1EQZwhJg9psgoLM",
  "key15": "4i3f3L7xnrob1YebCt1KU1F45wpkyGCxC3SFucj7PCvoy85k52R4anSxR3wekWhKFzPg7jeuvANjok7GYfowciDk",
  "key16": "CAKZuTae8XWCc1Rk9cicPtmm57iVP8t8QXTXNeEjztkhZxtdPrXnoUzc1D7Sie3c1f4NBHNUsGXV5HBR6ivuN1M",
  "key17": "4tcR1kf2i95AJAoVNtpopbTS8Y58n3XCE4wdYSJ4BFb23PE5gxNHERus3VwDxuGmByqQRyv9DvBRtvq18vWnnzvy",
  "key18": "4X4XA5RLPVy7bEjLwdB4tUeuH7FnpMb8j5WQnRtBCQpnaJTUAuhaG5m1yTi9xPwVofTuyL3FMu4oyWCg8HcvA1kr",
  "key19": "3ZneK2RAAwQKJabHC6YC3Kzsx7HWtpAqu4pFMAy3BuVHYhnrJU6LV5gGmugqtR6AXDXbxiPE8QXDbh7EGEtzy3aq",
  "key20": "2RwRmTCs48bdZ3uqCkjVphDjw1VdFgeFLy2Rj2dC53jyQUvDCdcigZCknYkhigKoFmUmhdhRMeNm7At4sCpsmprN",
  "key21": "2StgJrAiRwW4kpWaYAXqwhAtEgiMYr7XfZumD2XVnJgZ9WPxhJ86xNxPvHRvqEQLPPFFDAo6r7JhLiexn61hKbnF",
  "key22": "4EwWcdPiBh4ADtut56kS7aaw4SWLGwvGWXiMpmi63eUF2PnjcEnwK2Hpp4d6ZASisTX8KFhUnhbnrL7HxHT1nKoU",
  "key23": "3j1BofwNuHadU83CisNrkQ2VsAxGufntugqQZnF91cq14JccY7TUTGjicsDnh3swiTLAA9jzZfExy7FSySTAWaWi",
  "key24": "4x4FqfsonHcEZrenQ9iWzhjvQ6KyxwS5UbtdAUcHnQMy9vUrcTPtiQGDSZhvqpFqwKwqvK3yQmVRDHwNRh6G3VQB",
  "key25": "2N3RDDeHoEVGURLqPJWG8Fg7qCkfdxzSYN7cxmFJSFmwbkmMNv8b2t7pT3ZXWCKu1LZXCjogG9zBHmPuKYuXCbZu",
  "key26": "4dhdfWidGRfShz6DnKvenzCqdvTj8YpRRTWw8F5kHZ3LKsZTQAusnPjEDBpJ2oqFrHk427NCPjrKojscomdJ9VMW"
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
