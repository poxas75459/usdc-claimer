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
    "3zW2y99Z93qW8Z3kzPCKVmxC4DravpFXc1KFWXnJBhprCVtxCB1fRsfJkgP61cfQvumj8vro79jBnwcr86SDUqMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZkQ6gMN5KBHgJVJfTGT6ZN9WmQ7tmqjXJ8goLckEPaTyXrdCbAeYoHHZtxRN1wfkPot1bttSfUGG3pkeXdZYHy",
  "key1": "Sea74qroGwGgAs1AZqYof8byFFuTcWTnVbqzBdZeHPaeGbW7uUEQ8V1EYYHFZRu7a5a1r8wKSKubfLjdaLaE6MZ",
  "key2": "2fe1tNu8gRHKbMg7zvMR3han9DWjqLHaWpR7z1rpLTUBsPCb7CzjuNzZyExSGWomE7U8YbVGUQ2YiSHHfqR37nQa",
  "key3": "obPCBP8C7issrEEUGMKeGvfUdYHsb18JP23AkPN9oqQoPSCBzNKkpSrvP9QyEzHtx66h7Ap2s8QM3fmrKwejx2U",
  "key4": "647fmd1jcAHAKxYf4CXEtZba72mGZeg6P3RQFHAsxkug9bxpg9rvh9uscTtYHP4HVSvGHaRWY67EsZLoEfnWkDKx",
  "key5": "65yrLH1TCpEjvBnM11M2oKNB6iNjYEcoqQeMhBb3uSHp1BZFVEzCAW5uYmFYgYxA2kaf5nnWqwfTCt34jfYNJuhz",
  "key6": "45zgLxaSUcpeTAGxvz6YfMdbcNE8pPSRHKrtcpJquAuCY1zdyqqzwEzrP6vKTERwPFzB87rMg53vz2UPVAqikjPU",
  "key7": "63vuapQmazTcTCxzyRz7jKFK87Z8qpBDLdUzA7XdgCNuTHoz3ND4Xs5Ary4S1dKrQV9KucgEyNTAZWDv665CDWok",
  "key8": "2ATRzb33mDEn6BC6spgZTBu81LG9CHmV8Fwiv7fLiqqThuefggLVzhUAy5jvCah3RLZ3xTbc335cPdPAqZRKsEfs",
  "key9": "2kck3pzJwtFKwPwbNQUUzYCM938m1EZ77iQmhuh181AwqBosBHEmrF7YNAjd4F2wbD5UFWzx7bF7FfBpLuPRicsq",
  "key10": "8snxp1PG19s6CkvFrhFV6q4Uz5wnGoz9Y7sEaRFbvVDaTf3Y5gNPxQcJgyHoR25YQNV7fLLDNm9sBeR2wPX8Qo2",
  "key11": "2mUPmYrU73MtdswtPakY6j6eWQ7J7W7C22YSvnzpa4zV7p1GeRCEpgudjuZ7hrHwaHnaB5W1RqdKBHRGk4cqSuBv",
  "key12": "5da3idJSKj1k1CYcoG4T1rCemuc8y5bF33oS8n9Zjog8W47r9xztGFhCMEagcSwJgvnRkmemPw4VDqRUw15czHr1",
  "key13": "4k52PvPrCpC9cXGKpCXLEN5zdXCY4v9mMJDQsQqV8Wo78TtvQbmAbE52wXVdFhgF2m8LzGLLsqdjaVmZTcgpqCs9",
  "key14": "3sbeZaan7UedQrsJQ3vs25LA4bk1RTordp3rTLabkh78zyBdJiPxqjWoKMfPTtJwxkzmtvcjyhzDdWNrcisFWNDW",
  "key15": "6grvD5auzJRRN48HxXMFDBKDZve8kDh26j9kAB4cxYdgrfch33SkUhEL1YmVCUntDW7d1anH8d3CsqUUyoEmjGt",
  "key16": "3KbsNUh1svYhfSDEX6uvn6GtB6mEohS6whWoQCRFjx3jeNFUd8eCM6SwYa9uNMLHvgwo1X4naks6ReivjNWC8sjN",
  "key17": "57ySW31BrrHCZKx2dUmuryDepFo1o4Qb8c28U7Y75A8x7Sw1vSUwcwJT5Cy5A7nUCkcz5kSmxQEXsH8adrq2QF6Q",
  "key18": "5JH8H1SK5JrBf66SFraqeLdSSd7A5or2NXkKVnVgcfk9HVVQXShH8XmsVYiB2C9mPGiJtxZFVmS2ntpkoUdX1xxZ",
  "key19": "5V7dXuDk5yrYrre6Rv3Sz9TZbLPLkMVoVe7qsWzqQykLcLxXVDtPREMEh32jyRYsMLU8c9BkQw3Y1L2Nwg53n314",
  "key20": "5BFXAVkFVP6sBHYzLU18dZhG2hNURcr3YPx7GtCSCxQt3vLWZAnU7ubQg9Rqss3qmEwUcszeyqJVRTojG24MzT6t",
  "key21": "5W7S8noQsNJ5FWnpDgsYXzMBoPBpj6TB2ZWQfr9edLdzWtBzYU8papM9a7iTmLmic3P3XaJsr9xRXAsAfzRxW37q",
  "key22": "23pXrzBMZapQMxwKYaivptiEp15QbccgAcrQKr6CsaCiV2uYSxeihZ62uCBEQrP4WQNh5vrKKi4Ncw335xZDt7dC",
  "key23": "3DRbyyjiyu3ihYmCJWDXRfti1H9JtkjiqzkDe9LUw2DoGM7SPTRmfdHnZMVTARW3vjHWCGSdcRFcmXeag6muuB25",
  "key24": "2Nuh64P889RSsLystyTgHaawRzhSm1dqDF3Qw68puwvEzjEoBnBfSoRU9GrCWu2pmRnrYzWZmyQHVUmL21RXUiEs",
  "key25": "3xg3MsqEayi4ztFNScgiPiN2dcE6qLJvxWReNnVnvFRQbtAvsocV39L5JJM4vGuC1dyW2NjJUjUZgVnhp9FGm4V1",
  "key26": "5MBMdciCtSkMrfwP3UMmN11PYCaQXJkwQeNDUTLF3JB4EcuyM6MAS4XG65RrzderLNevH2UM9XszC6YVRFsjiwE5",
  "key27": "FQJuMLEVFyGsGzjEF4g2FEH1DQXA2VuQ8rwuduHMu5WxU2ce9K7s1RpaA2ZfwWVnTmT8Tuo4RKLj45mimFcEkYr",
  "key28": "ERM6ptYAYp1UqR6zNEHDi2HyAcdENCkBGmAGhFdVsWmBjUs9Zepzsjmg98LNhsj1FuPhXpQB15GZ8kqYXpUwESQ",
  "key29": "44365Cz6FmKzpzkiXySHNW7R1m4s5NkpH5ewibpxtBMy3Z1W7GwVscmAeaBtC9voqkoNmvPMTAJQoNFbpc7YMHUU",
  "key30": "2uMF5XqqybcMuKDPWQofpajzS5zBeqhgDdybnwuhAEtXy8DgEiHtVDfB9DfGLcZW6DYmNwYTWXf6NQ8iYbsRrp4",
  "key31": "5W7VxpjhqbDY754vtLiKcEpcPERrsTGBBL3RNPakvSZJAPTrpxYu4PRi8GS5rKNHNBtYHKp8EFeHFLbPEfQtps6q",
  "key32": "3hn38QG477rhwZ8qwxbEi3RhH5cniDkX72hR1ASvWAeYKhKu1yP8xiJPmageKkuQu5c4n6Zers5X5hevv3KbSP6o",
  "key33": "5whxBHPQCTq58JwFciRwFPHRWZ4Coezp38ZRZ1y7kwiyNhFi1Hw59YLavzRmdSaYjo4ayTy59MVsP1DxFQqBL23f",
  "key34": "4tTwSwit3iWLQs6tfkXEEQ59L1uiZSCuoBGaCyqxX3kHYrTkxqwrthAhMcjJYfQuinHuuHgotm8sWeeQ7yaM5gRo",
  "key35": "GsAFBWmT6kJB8QFpe4nHxxrLkXoaj5qeqJmjEUDwkhYTkZmwg53VRg9sexf5gzvUh17EsfY4jXCFANgAKUB3AdP",
  "key36": "35iE2DBvCqW2CdzQM5BJWtX1R8GW8UYiZkzkzmDJerTAaE44E9MQBTSEndeyEepXKxkpNJKY1Bp35JyZykHV8uQo",
  "key37": "676698QTamQUAc2uZUydhznBKLPdLsVc8iG1eFeA7S3wiF9b2kM8FY33vhxoF15jzVWDqogac28WSW8p2nRmcbuw"
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
