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
    "2gV85eTGDEAoAp6P6pFGyk3utTBb1VCKqweYAZXvTFqLqLTNFEbT4pQTj37H2JLGKSCRvoWVzaTEtqLSWRU2mQFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYjKKshWt86VqJDU92HtjLHwZJn7tnqBsYgtLweVnEfMUAm5hnSBYviwirS9VHbTBsCfrrmQJL8uvWo6BCTxFmv",
  "key1": "UD8kyJ49tfPev3N3xauWk5oUbpAhFNXpV2opv1TWVwVan2ZLKwHUeNPLsDaQhcear81wFejBzZhsDwBePf9o62R",
  "key2": "FoZY11mX6rex8zCwBNPsJHM7PTYVxu5mT58rzuWYMaEQPgr4hi1w9Rz1JScKc57mgbW4WFqVRtYgB2AVGS3cdcc",
  "key3": "3ndKyeSaWCKMmvd6891TjZUnHkm6mMLrB4un2sRtQMY4id5NpyVHX9J4PvaBwDF4WxNQCFQeha7gpv7EhzeXzEwU",
  "key4": "4Qw9fiWo1tuvhGurC7b3uVptY9bv7Uxs3PNNo2wApsEEFRg34QiYg58Uf7UKxtuhqnUYc4wqVWLyyCjpH6kVcdbV",
  "key5": "65nr1PrJnKPMihG9c3C9PmVyUiGeZBu6bW6QtNAtEzzCG3wxKq3nDyYjaWhbRoaLAMXsTxWDU6JvbgahRFE3rqQr",
  "key6": "2kLyDmohjWhnY4eoNX7MwwazPXegEkMHMidj5TB4ZcSCcCYFGssJ2FujD5TPXUETYsPwBaJa7BGfBx6SXq938VQy",
  "key7": "2b18oDE9bAQ2RfLG2CzZSrGQLj6iotuYQ8sHaDXFsVQNFa1c5UEKfdoKAes98j8BVzfKg4uGDbHji3NHVsQCgZkk",
  "key8": "4FJkAWBiMqiq4jpHV8AeruhnL2DPU3TR3nJ42ThsFdQZaMR5kb2qf9HuLiQ5Jfep58UGsjCmP896gXktcFYuTmyE",
  "key9": "4oxi4m2sFZZCvce1VSCto4byyrmzTDcaS2vVnDnyRxUzsctk6QTgpvmgTaWWEyF3otA364GuetyXJk5hBVDUyArR",
  "key10": "2XWb3fPSejsvnSkHrSEFosw7GFzfDRF9EMgBjRXwecMP5yFFkpzKDMV8L1cWcYD4QcTV9apk6aoLJsn1fbQh3UyZ",
  "key11": "rfowyNf2dnoUNCeYB7oS77K1HDZ818NLuPKQXjRKbYTgBVoLqByhFqgjvp8zfMGv5L2LS7BaU7XxcbmCYydkRwj",
  "key12": "2YTJb5ZQEJgHLJyNvoa6UaBFDkW1GL3DFMToxhaQpvBXYegaWLpcQTzUPVVf7bnLjgzom8QKY8onZD6nm7aQgxHc",
  "key13": "5SrhAMc7F6evitp1qqw6NKAS11CqxuTrGw7F4KdHeAqZqGbVtpa9sHuCEyZPmmcznWEY89TqeLUYSyW1t9Xz32n9",
  "key14": "Gw2i2QAMFHMoRj741JnX5b9TXDsW647oimaERhcok7Gr88LY4a2MVJmnFzsYbSVmBKqrdoH1aaVysQmZCtuj3iq",
  "key15": "uqnUBdfQP3WFTJmnfujdvVe3cfDtL78tPM4Jc9dpRqGte7HrFUyo7AJ2KuhazGep8Gr2m1wU7AjhnDVGHhXfiUT",
  "key16": "5suZGr3Zm47q2Q3fRBUCZBh7xxDpqirreqTsyxB3rJeiujX8Z71PP5STnrxLwWQ2XCnrdumi5BDYZS5LPEpTwNJ9",
  "key17": "5BKJbUkjLgdHqZRLu6Z3tEREW3ciobkfTituZbBgukhHkERXQKoMPDvVVMTHRbkVS4wVSJiPLHcsvqC18yG2EckY",
  "key18": "63GJww1Hc14gsNBvRXGcVuSr3JEtU8TdaZjMfYZqcxW3VYKmyGhbnZ6rxbELQEF1pC7pjXVmbPx4AyLGuZQsYs5E",
  "key19": "2C3qzWJaa6zg3TNs93pCMHMJcBWqaucmFtPxa4BPtj7TozzjUV7m6eAEf5Y8Rutn25jMrNGZftNkV8F1LPXopeH9",
  "key20": "St1a3N3p6U6Pj6qXUtNimbtPkHJaNKVUgsDXV4xwAn7DmUoqTKgHJA86QuoeEd8DbbXJMmyx4CdEHqs4PiE8sTT",
  "key21": "2YM1LYaakfGBQzTXw4akHsNmgkxKUEF5i1MwWhtqXfdrogeUHj6nC97eMiZXGWV2z19pjCsPahaZLt4QmKTBEk5h",
  "key22": "5dknWsxAyKdLEabemqqbfJCGCeFv5DmTSGqvM1jy2efoxaGzAUicuCcS4yEsKqjXUV1thSUA2qNFUUVnBJxt6bMG",
  "key23": "ZzLgnci8peF8woaGEYCxuw5P6GywDURFEDx4182CWHa5VYToGBiobechCGDGXc4MvEo7Qz7qTw6bK6mrKkvQcum",
  "key24": "3S4Lc2NVjd2agSZfKRjDFHuMJw4JnqjGe54NyduadjEZy1CRmKh18diDqbtFpNmmFgF7z8fo2jkQjDaaW6SBTi82"
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
