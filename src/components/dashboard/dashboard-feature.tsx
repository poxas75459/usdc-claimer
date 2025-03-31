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
    "NTkecTZ9qLSns1GeZzZEB3sCFs2aqNjmEm1QsHcHv7Zutys66iiKGVyNM5GMWbuCzjsppDHVG87N1EXLV2B7iRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6CevizLmQfTCP6XVWZ3Qw9fB2cveSN8Z4EzV46gYkYLJZas4TmRYVbSHkyw3gsxVRaJNipCVqqnPwFbMzcNeGd",
  "key1": "C4ZzUe331LmEZym8CMb8Tbfq88TUTho5KiCy13u3gkSDtHaf43ZTtciiAvHdz1pe5iYf1sPnFQQPedvbApMuPH7",
  "key2": "5PJEmxxp1yXe6cVXspScSScm9z7C5xsvTJjWvT6jwR13S8YAmXSMRG5r3pBRdwTmS7CAXi6iU3Fj8ZLEgYEGSfLt",
  "key3": "51C3hcndo5ThjBgrWbAHxokJ1rqQLaNHMGnEg9axegXRSpAd1394f4vNgXGjLjasFRXHi6HCijeAbZ2cwe9xMfXd",
  "key4": "4AMKEqgefySQtS4U9hZ7n2DMdWdicstx6qBEjsuVTwHBSvuRXNm2BfxnHMWhTkTd25ao1GpvGeDSb41SNU36wpfH",
  "key5": "2STGXPSh9F26vzDr5ksit5Vh2oSoTeLmrNCrQj9fCJg49iSyeDppJZzqnMx5rytHVmvMdngoVWKgF9iy6jwE8voU",
  "key6": "3sBNRs1wP4Z8WYc2WQ7vRYAW8Zvkg2URJUxMBH7cshrF77xSwF7i6Y9aek5ZHWUJ3eEH6SFiYr2S6mx57ar49GRU",
  "key7": "aUH3Xj1MWurDXC1yTYPssbBqKYVKqpk8RTCaMnnUaCfkBxNnTkiMzPL9Yb6vscxLgTem74YdLG2fMeBPuEPh95M",
  "key8": "QAihrkDZ3ZRPJPSqA1vVazGGPAcLK1KNvwDXUKtpv29eeH5NHMFD1EV7iWN1bQ8QbJ9fxmtKA5wm9oqQ4H2zuKV",
  "key9": "2pUf6A7SGqnVpdjZya1wmyizCWusUiGgKbs9JWXSvB2X4nX4Fo9Uw1sscedEXg2YjinwhDaJzryETpZgNRv17aQu",
  "key10": "3ZqpqzizRxFwF8zeYqwy44a9YCRwupcckv38gcrjqjnVFTDg636NtUvSn1bTeaounZZEwyuowtPKPYHtC5gqazAW",
  "key11": "3ZtZUg6C2MG6MawTW5NngYCWwQe6uKuKaSxCHxbGbwpzwtu6Q1Hh62UkDTh1cTG1eNKHUQFWeChaegbjXEvf9s4q",
  "key12": "4UBSiWmKiGEf1M49nfzHUXtC7ky1n8XWri2hWGGwVbEyg11by5HmmA4e1U5QGtWL4Y5ekNkczFsr9h7id8AdXQ3b",
  "key13": "4MbVmCd2jMhiYdGmMPjNddJ8cHevdyG7UaQmBaYHp6ak3YNQ2baZCn21kG6FMhsQoaeTRmU38AMdbPCSPpSZuhn8",
  "key14": "PyxFBtSM4ELEdj1zgVjbAUYRaPpBQMq4pWBhntB6LodKpKbj5cYZ9sERcjFNyu42ZXuy8bP1Ups1UZDBaXkd2Yr",
  "key15": "Vwdh4GEaA8iH5U7qYHPz47J5q9J8ZrgcN2yZ737wFmFKFyZX7GPmRJ9UYxyvD7oJUbmjptvLAydtBuFwuLqFksv",
  "key16": "41VPfTXwMvgutKJLX5ZYaW1v5kA3dcJknj5vD49RrAG2A8u57ewspQSrfn4Fz5o4d8qaJEd8jehJw9jYkzdNneKg",
  "key17": "cPqBUzLQgGfp3QxGzFXJvGuHxUZupfnM9UAXNoDXHGWbQ6mLPnJJktfoJkmat32AjLJFNYaDYbzghvXn1u7wPLG",
  "key18": "rHSNHDDd1a4JCqfa8eSyuKPRz1DfEwSJGaiEng2KpaBivx3cWsHjRHTnS1JxPNwUwXKTj8UYsS6uPeXJYpAF3CD",
  "key19": "5aR5qZYrgfLa5cjUgySZs37TJDUHmEejnzpp1E7JZGpGAhHrvzXJFMGeMvJWJ15fHfaLhWKG4FevtF3VfwXFWEpx",
  "key20": "3d9MJbgHGLUZikUuyEiXYfXRx852osFVvwACKpStjXggUy65Dz65jGw6fjKNtn4hEEsZMEeNQ5J5pMvbLaAfcBa1",
  "key21": "4vLnaeiE5kk6tz9SS6XCBXwtDeWFd9zcJeNfjfCq54V3jiHpnhgUWwupCgBeoGPEXgMfhB77vZJBiBY1qaTY56ps",
  "key22": "PAxrEZpkh75aGuQd6NSmagt9TLZGMFoHW1HU79E9zoV2gAdk1V7sxY1qB1mNQED9LuXKHQ8x4ZCsdpNnSeq9AyF",
  "key23": "4bmhstL1PZps4omMk2WWxL2MEZzaMYVf1JhgNUDg8kdDUkLhs9uY8D4LRGTiynsv6v9W6B7S81KmC9nmisbYn3YJ",
  "key24": "46SHZ9oy9AmuWz7EckcvYG2NMHUuQFcBFGsvDzA9n8u1QVN9SMwW5DWnJ3F3zY7pqmdsFevZ7G9bNxRFjyMQw4i",
  "key25": "b4mLyp5oVxtKhpc3G4EDEnS8aq5mwqxsnWdotj2TL8ZnLmG5qWhfGQJJAWexKBngdY6S1dWhYoLULhCSGuAxMts",
  "key26": "4NGfjCHe2mjvbvkC2oGrBFeM9mVfdogzh9DDCRNrvbxueRwZ3iCQ3fqcEG1BkZBzURX2MuJosxH9sXVgq2QMNNcv",
  "key27": "urZNJ6xcUYqkKZsog9wUHaQB9UwDUEvfDEMfr2cgfHQX71TBuooQu6J1mq4bVh7VBwg2WKsPJtwesTA8JbQR3JX",
  "key28": "573EMykWfEvHPL2XgfUymQ2W4wEhawnbtLzdg1UMFBPHW4JSZpquf3dmRTboLsELKjPM14yoi2WL1KG1ivBnjeCd",
  "key29": "2ELR5gXcTJaDfSePExQPNZNbf1HKMqfQ9UeBmdwod3BSyQf3wnugAkFim4W8weAoTS1adVTVpPeuWvTy88Edn1Nh",
  "key30": "5L1JmnxetFsTNJW419EiRZR7wYbnbKRLEAi1xjEWTi4YqykowaTE3ssxMiJqqZvUZA9zocgDx3LJ5KujdZtMAmBy",
  "key31": "3Ehma3H4ACArijrmsH2LT6vAWRFSue6A56mbo3ddWpdjsBMdaSFyw9h1gurwQpjGAxYoFC9qRX61mkywnRMaLdQp",
  "key32": "Ce4JdpJCcrzicJcPj92kv5Zw4C7DTXPm9WdNaXpDJzmbx2cH4YiCMg9ppBq1a52Tuc2uG2kob1PmSa9aLvqK9L5",
  "key33": "4nzgzKmQVdUnQV5NMAyHbYPhby7uUGbmiwcvSWoAuAAXxtvVW5thwHZmnDNwoY8rPR7bpG4eyhi7htrSFqMFRyDk",
  "key34": "sdGFkuEuvcwBhniorKgWzNAYdGBobqZGf5jmQACvJg1wr2xkf7ZiS3YX69wDxR4JHZVAjQyPrvNSKTr9qABePij",
  "key35": "5X32ibt9EKQseSkqKyfB9f6LtsHiD56v6tZSzZ6WpERuNXQv5yNLxMDpXvv8ZtnEc3bs1A31NmCJ3LHdjKpPrduf",
  "key36": "3Qb4j6LjvjnGvBGV6zNSW3JKqUAU21czidoEM5uEQKHBcAhMvZegVatNC68q7NVebxr5F5FiVgg1KJBomvnM8rBw",
  "key37": "3uknM1G2FSZ4GrK1GiuPJix5DZqsVKfHXNS2DrmcoBHvG1pNxwYruUbJe6WVfeLLMiLugczdaKhk3opztRgNr33R",
  "key38": "2cMnrggG6m2ZFbFzHrpyrC3niCFsdvHNsiEYLzTQbUroY4B3xcPVMXhNvD5jBGezCc7uZX4m175GWmF6vFEFGzx7",
  "key39": "5uqJ7yUMeDN6gt9MdV3VzJj7Nc2ooNryQTzRRG8VrmNJE7wKjWphfhpLFPvwVrfK4xVRzdpZpv68b4ttC2MbyLg7",
  "key40": "4SDdxsPQLDe4MEQsSbe1PLkJqzk6NNjiEnKZB1Lgq6YqyPKwbDMGKXwTM71cYNkR23LFE8kwz1DAHavGAXdzAj4B",
  "key41": "4DUZ2env1Gs8FvZhWvrHguRgb8vWuFih2ihQm5Zdhav7rpSMMNMm9JBc2FzAdr6xkmK67Q2o7MgAUQhXPemaRkcR"
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
