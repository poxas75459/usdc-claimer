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
    "2o9p1DiAQ38ZTihRUNcwdCYKRwFUR7LrTtH2G6TYTqJ7b7dxaaoRgrEBaxX5CVJ4piHJwt4juy5C1Bu3W83LLhZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c6iWdxZi1WAcR3mevWtmbUoivkLb8DtVCpDDqC3J89rp2Ejg1wtCAnoMSQAndkd7SvrKTFnJecDskEyRd411o2S",
  "key1": "125u7VBJnuXyVzG7S1NAvminAiBCaCAS8qSBDnLGE5qBgCKPPcCLdRx8ZRAmHyx8qzkefYxLAH6U4SjqqKDwUtkt",
  "key2": "5hBDvz95UzpQgzJ6ZTgddADkrKPSRSFmSs8aBd2kCzwCdQErRYziGXcM8ATJDf3uHRF8qz7kjk8PUJnaZYebUbvp",
  "key3": "2ywSwMK7f1cr8qAUHrM8abKhEWoKVsCnmjUhqWzMS25aCz9w4hFESamb448jeWXYs97oQMmH61j7upLH12Qe4wmD",
  "key4": "65F3mVjmBs1M5ESxKDvWDNJRXbk6W2v9KaJ6RVYrd8r47cRK46bjRjc5MLwrqRGSehsV8J8NKjPGVAkRsMXAWfui",
  "key5": "3uyakT2cSKbNbdTGBREd53itU726sZaRuPGDNbBZiNTTfd5G8ViWUzTdxDo1kuBAFoavVz9dUTEB5thLhCqx8BkN",
  "key6": "4zuytyKGXvsPPKjFNUSLRWy6Jq1oxw2FvQ8ozhqRefiQw8Fx8eQebjD6b8t6gPsfjoBT5B5WnYBoHR8p24uHN7pL",
  "key7": "4TGMoZAwxHHfDYKsve6TfuDfDXXcPidditJ5UPnoo5jyFEvu4fdmFb5ByuaNYKpsD1vuQhyBn1FXZ5dLHqq1GqZm",
  "key8": "4VTCZGoBXSEPaejhqhvsjE1DDwbqyvs7DtHh8Dw4eVpZtuCrhRgt96WGCoR1jQJeX1PxsF3UfB7hV6a6bV4V49Nd",
  "key9": "31fPYkWuMEe16eKrm963CLN4k9BtLGfzJQFfKs6peHywiZhBjesxWSHq4H3rDJpxQ2CRCZJCN2iguZWWcCP7K3bH",
  "key10": "4itmvgVKY9umvdaj75jPicPkjRZxSbgcyL59vHRXhNS3F61VadACucSa4yGZ8ZR8CpTqyAUwHps79nuz32DfiBvG",
  "key11": "L8uqpVwv9p166ruS3nnhsdfLhdo84bpixduwjXhAdYcVyeEbdjY2pFbsZDtmTeHqybidENbBAs5DPWvj82aTMK7",
  "key12": "3cTHFYHQSS72XB9M3p7omoqitVXzyzPeCtpNDisPiBmR7h3duxCn6YxM3vik9rVsK6BHFdnbgNyDFRdBqui9hNo7",
  "key13": "4TDxFwc1X2SbioDmugD66D2gie7oG7N8yRcgS9X8MQPYV1nKKtPepVVwbtkrzLh6hiwwGDT8ETvQH3UE56ENE3du",
  "key14": "54sWLNDPfh5fQjWivshws5JDqknZrsDU77Erk2BwKz2ckRRq8ChCj4uxhw58wzAtjeEeijA6xsWdmBjRTY9sTdd3",
  "key15": "62w6HLQEpRCkrGCJuQpBMYhr1DLywVXBKg9Qe8r8XewoPvL5FgbDD2WR34Xz1amQMEnTVjCkaBcyaFW6NKnBqxQK",
  "key16": "TeZhCGnFSaQKDCQD5PbWKbNjm7iket7wDz1dDDKZLaTJatBcmCRFiXxStyM5zNjqYtMqTFNm93iQeDS6Kz6DcUL",
  "key17": "4FHE2huQNZ7PhGP1ZBQbsGjkVP3FEJT2eRVJ97Y9QmAsLLnPkGjRxMixWZU2uKaCnRRGXLELpD1jZfnBX26shwzp",
  "key18": "2wjQLjHzMHu4Qfk2nJWU6Vw72yzn6bkgxkt3Bo2D7cPyCMFHmBN95TmTSZr1YLFNDjJ9ho1ojC63B59vKNeeheRW",
  "key19": "5fT26FAYWZh9pu4JE3zXw5rywtE7xArPmFkrN6nKv3yeWUgQ15aGATNC73Dz4MshWqkQjcaZhmHKXfgErro4DVYi",
  "key20": "4gshbutqF8gqjSXoX9qDuBVYSWkPEM5B9deySwHzaoMHqMaJYoBtB5zQExZmbi8zzg3tct9rEFwxzGW81BCTc8sP",
  "key21": "4k1iGE9z9jsQTcsH6jatfTmPwuV1HuVRcGcRNwUQkAsMQaoYh3TcD2QWmYLkZ212sw6veX33jCmZmotma2X9xs7w",
  "key22": "5pGHGFGBzsDPExtZBHFpBnkKfMJUXHDd7gzRTsaX8FSzF2cBEbJXztR9899RhpPwJ9RXEWybsQngKQE3XA7Ny2pT",
  "key23": "5no3edLazFjUceLRK2NafoFN68CJ8pjNYLzn4rhyD4MUpSp113AWsYz8ad5sKVsxCEHBUQDMc6Sz6vMN9F2crLp",
  "key24": "29uAT5WE5Bx7C3h41J61hZYq6YEqYAw9VWSqBzgyEYpTQR3n1wMJfrFvXXSE2jYnnd7XQD2VnCnS9t9yYVDakrkz",
  "key25": "42YGk3dFVAsaN9tcctuQBTZZzRGowHoJEjdU8Pjpdp5Coy3uT6uSt1XsyturjL2cmzW1zFZ5gC73zmt7aercHHLj",
  "key26": "3gUjCKQBiua6bbKn6H4m1Hmm1K2TD37PbpZGFr6eYcVT4D9AQomfJhaNUVq686Pw637WP59xnrLo96U66VVNcGnq",
  "key27": "DtGNnmxpFocjvC89Ees9xPhcUyRnyGNgMHYencY8RWss3KSpNdM3k4pkVu533aDKTVju5mSGhURDANerh3HvYJP",
  "key28": "43xqtr2pqAVMceB5az9gHUipeAvN3QKkTY5F4TuA89oidxrLSnRXnU2NgE4SFkJfKHuTN5uMnzbi7oJDPhALGH95",
  "key29": "2kDqDw5amu9PUKXzvQgXUZGNtFLY5oUPskCcto6XxYCyQVQVhq8KuHpWP7cFrrDdrdBYULzpagHXmxBoQqrZv6iJ",
  "key30": "5wJ8j3ZH8JqsZNm5fNm57JMtmU2cvzYqkRD8VhenoLGyxGQVCgWDVH3e3u7b9JSrh5cv3neenVn3y6Zj7eURRRXj",
  "key31": "4Lpq3UU7GWXJjGrH71dD9RvfZ2hGxXdHSMBQjMnnZz8BotkKVQ21JYACj4joym2Qdnzrs2hnR5NgsnEzvjnHyPYY",
  "key32": "h4gJYnwgAThN1nKLoxjhMvGDNm7nRimPcokzpJHmiSQiBUCzJcA3AsRG78wpqLMvXMm56tTibb3ignHJCGfqdty",
  "key33": "2g9jLRC85CTwsL4vocm6xyK9yUyg2EKppeDeJjBWc3ayz6zE4tqAPDqz2KLsxkUJck8jSbLFXNjuY84U4EoXJrLb",
  "key34": "uJPjpNGB4JAgGPafm4gpHvAphJ1ERLr7o2DWGjp46YeCwFR6auaDYUQVPFM6iJgaAgye3pBGEmhZBS4mPAhn8Ee",
  "key35": "3CMn4YCBahLCL9tvFjtMGU6RzoYcPixWmrjzcc1TMyr5vwsuCegLSMSSyc2J7j6GFnfLaKfaskzdohwivCKGjpDS",
  "key36": "5NTdoyaw4kLdqbn91UpxpsdpbL4JEmofaH4GzTS2Gq51BXpJao8REuFTyQyHPJisUQaxnFdZpbMVj2YyAYQ91HLW",
  "key37": "yG8roG5VvgaFswXtgTd5uBVSnHty4n2NF5bhbGxGAnrHjv3Qeedd2BxberWzc1bZLsGMWa4ibrkMbnLa1hQnLGE",
  "key38": "VPSCkgMxP1KcAn7UiVSnxeXrwLi75ss5gB2wL8yoaWg2QP6B8Zqj4RkQAzonEALRC5cdWMHdZShJmnH8wteTYwq",
  "key39": "3ndonDPX8K3zxTXzNi916sUnL856iX7rcKgwtcNL3oJhesf1FSKAfg9WgeZZwv4RmVwqWn5K8jxTKGPGw3dHf1i1",
  "key40": "5TCiNdEhhEmQuf9QzmFLTpXRb9Pegx4Ncz2ycKps3663UL1RkqgPsBTQH9ur1C6twaFVaaFNPBiVxpBHS17UmLPj",
  "key41": "5NKoZWKxUFpbynQGa8K3NuhkTNh4VzAdvHVPxkzipuXSKU3CicAKafYaeMq6qumWbsCULQuiAjNUGQnhM4PZmeXz",
  "key42": "27qtU5vKhS5qXndwvL4116nqkRdG7gJfMnQ4En6eNyVqkyAoTvVgazeAywMWCvsPE6f6DqvtfKRQo57BrrwCafNk"
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
