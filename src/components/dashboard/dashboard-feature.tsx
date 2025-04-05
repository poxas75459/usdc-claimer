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
    "2X2wFHY7HrqtMvyiiyLscjckVCvuiKCVEeHKiMvVgxXUdmDj7DJwbqaZ7xi1TcfxEd43Zjd9h66wHYocmbdPNMWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSp43kjxYjHyu84jwsWvkDbauEWCzUro1LDiBCcSRHB1hLgDujDi4kfo1zcgFnXak22fWoGHbNh3w4bb5gVkvPm",
  "key1": "2spEhHw4sRoM66mtfUxVh9gyCXbA2wt3rMCRGsnehE7f565UEd5NjEdv7yft3YHUbAos4C6WyochQQ5EzWeNyuqA",
  "key2": "3fR2fJnT3FypJLJfCyS63CQc4dVCL5pT4Gc3FEBko1qJzYKt3zkkcRW8kN9uT1XTNR82XD9Mr9QUvGVHWWEPmsUR",
  "key3": "3sbc7nyMwc6VLUhmbx918vYwRmdPMnNx3crSwPh3TxWLFbdmmdSpucmtacxYToYSxp8ShWfYQswnEAxYUXFq1ekA",
  "key4": "3nkZhQcQmiuAQiggbWw3y8uR4T3FLACCLpJ9WTMNThQKTLjzWHU2ScbxmVaMSmQ4sSVSDzxoH4RUwzm1bgZTxKbH",
  "key5": "4iBfVi5uo7hDqaD8RQqHb33P1JUkSjK1nDzHnaYfRqa9CJbekWryfpoaX3f3qrn7E5uWEsKaGBEDw8jPTXWxHJ4F",
  "key6": "3oKFrhEqod2VWnWg7fJ7eoB79HNJnNydf1xvHK8fqLzv5eDjo1GzT5DcHSYzqvLPEGjpnQJygHy1WvBHpE39Yy8z",
  "key7": "2MPae5qAQkkK8jKiinny7KzK8kLtxUNBu7rUpHNTpLjcnmGBqWdQyRaY4k6LYpU39HoJZAV8m282Zufc5sTW3XSa",
  "key8": "122xY5fZ5JRbKYG8dJUSQvWpKcYg9C1t4P27Seb5zyA1pL176dhJFHDDkuiLaXUG5x9wTYYt6Jd4WoRAG9ujX5h2",
  "key9": "478sUmemA3dcRPZx79V6vecgcaEE6KRPTEkQKmtz45ihu9emCxYqZNCrrRAzu9P2xGsroc6nCJxsRYjMCQKExUxz",
  "key10": "2DqCGjQJT529HgcZPVJxnrZmWr7SWZ3Mezy8CKmN4NBTk3haUnB2yqASiGBrYcvKdiwLHkzNUxVTGXBfwEHJhRyf",
  "key11": "3LuZtp9M7qhU78pWXz8jC3q2ALd4VdBsavwDxgYzFKb52H1Az6FEfhZwFCK4KM75JkRdKeuNsGhY49Xbws3GDMsR",
  "key12": "37feuSr1dgVmhagRvgsLiEA5Ar53poz4Pd1Xyfc1YTLeeEiKNteh7Wq76VFEHM4p7pDgB9U7P8CQGJHUq4dLmsUM",
  "key13": "5DegsmQUVTtakG5vFwwQeMAtjgi98B1BJNPvEEVxbaPKRZ2vMnPuXqAGmuQogD24TbNZBWJxT5hDD4yhDSM8dLvW",
  "key14": "2Ffish6ZqCFk2fQTNYWeMcWyqAZH78xiM8N5w9rtJNVW33KisYT8SuPnSfohWjJwPyW3avTstAChUAkJ7EzhhYue",
  "key15": "595aaAcytYb8Xp6qm1DPfc9HgnAUsPcbyUdGuBHKZG6N2AQsVBxkZkaQECZbGyMpoCAo78RH6j34ELnce7ThewP4",
  "key16": "5P7gtsBgzEUwLtXwF1NySZjYDRqQf9izHm8FhQdd2boK9xQrMNzGxMYpZKVDmFgTz4ZubMPhAoGxyhSgyLa6v29h",
  "key17": "48DXHCKSw27c5SJPXZXh17eH6GNrzFBBx7amCr8VWqQ7Wf4w3qHUFYLm3wNdaUWSM8771coMutoSmd26RtndEo12",
  "key18": "5jwdMgMuB6PNMtk62fjUT7y1fgoKjG6JsRsKc4YrL1Yyhn4cRcLHeEwc2Ujdjeaidg6BcankWJwqSwF5T9fDy2VG",
  "key19": "CNCZWJ5v1pC1ffTTf5uaSGEHDUaUeK8RupThaGBLXif4KqP9UPFTYy4pvivmyht8EWtFVfqsTtZisFfhiE9BSKJ",
  "key20": "eTWkZbeKUtZWku6CMR9u3ejEV1cVRCdBKVyUmjBUDBC3U6T5UB2uHhbPXWdLSaCQn6WBKJVPpn1hQsBfCFEfAnm",
  "key21": "KwX64aoRF944Monx8wnxVXaYECZJzQCmVLrGdUVAsgFQLdjUvwHggB8Tqb1mhNCsYcn2ejYtWic16VXnrx92t57",
  "key22": "2ArCK2PzwTrPQqK1fq6DEc7wtgWBFqpMJMhhY7imqRnrZppu8sUbAhdurPBns3bcDGSZ8dsMFczpTYK62deHTf24",
  "key23": "66oXnBessHc3AK7MX6DDCeFaaBvMGdHAWD4Nx2wHjLHMAXLcsT2MobRxArEB6ZqmnscSstnGGYUkhF56VivVeE1p",
  "key24": "3gzYKPV8Sxb3fuEkP698p2yMenua5K5qDGQmHiRdVZCe4dPh5W6xS8C7FbCVe1ZGVHHdGHPZmpKYvLEEF7JaYNyQ",
  "key25": "5rESyU5XKoDAbjSzh4is29Lhpz3M9GHwqeNw4tCFTfsX1XqYHFMqUqRKex7yYbc8C5MkNztPybzinqPnMirtAemx",
  "key26": "cDCs44oYzDRoT1DhXKQKx8FLyKMCh1YesUo5Fc41Qpwr4oVfdfNs8c3hMsUysJF9hG53aY32RZcXS74sv5TQy4v",
  "key27": "2pc6bNLQeaR9kNXwRNkd37Z1hJ3aJzuTK78gTRdEA2uuPqvWF5NGziurPtpCWq4uTiPdxJ3AiPtMdyYE5BBWF9ZJ",
  "key28": "2E9Ko5Si5Job6kDUEV8EKubTrLcT7eewJAjoHissqHy43xb3u75HNuGF5dVodgXvndDA7NGwFCZXMFQwDNu57qLB",
  "key29": "66pRxB2z5E3yGyhVjKXpMSzbCWze4piSRebaMtCeS3VFa5NqX197eFEMsStqwGBCS4tuMUtACsBKD9A8x1oL6nht",
  "key30": "5Yez3fJSfQP6kqF4PKYcL85cJQckPMmSqzMxd19L66jUDCav2w1DvDNUHreFPK3Jr9UjPuyFsAWzRntbU48SnCCq"
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
