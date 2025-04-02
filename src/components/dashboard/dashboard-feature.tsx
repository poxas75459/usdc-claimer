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
    "2D3i185EodE7hynxPtTGaTCPJJEtCAnC5CHncdWyNCR4n2z1bsMtCRCCANokMqy5cVoqPKWVuvACEnAMmUwyWJtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37hnq4dK5CKUx1pdXk4HD3ApmTvibFAL6yPfifjx2f8Mv4zRR4C9DxZ14UN2oNamEizFyQShSE2NxhsAWrE2DVJu",
  "key1": "5NUKs1YP6tNDBtynEQ1kYeFBfpbfNeuTPXjvd2m3akHxjFRiWxikFfbsUxhNuVjsBCCA1ia8LPx4iQanPh9wQZ6R",
  "key2": "2xW5DB4p3utviPciNqWygYyF1Wx4sK3xb6xmLTYBeFAw78u22pcQmSsdc4CYvLrLvQFAr7XSB9riHA1kwiJWR9mA",
  "key3": "21puuA1WzC4kFqD9roAeGWFvZJuaMka52tMHhzuk5axNSwsnJCU45fGt4KtUy6HMvWAF47D58cxY117ecFjwWkCN",
  "key4": "5oFdzuYjqDMH8eDiznu8Joi57X18rYThuSvmiav2V9tUtLGRRrSWHqrpXKbq2mZapp4rH7gAtDT5FhAekDA9fgv7",
  "key5": "29Yi9C6D2nz23M2CV8AqNVqT2eSbAcrJ6xEWqv6zgDxmXd95cwA3tDJxsD12Wmeg5agPwmtgTzQUHny7ACq2WTCf",
  "key6": "3q4CtqQr5aRV7hh9RqWs8NuhPduo3jUL9HvmgxB3dcQ3uQ7NUy5EHf22e6gvAU76bd9jrp8QhSJxFXvh8Wnp8xf7",
  "key7": "3pPe9MtFt49DfEtfYnw4SRcYs6gAdT7XLFPLPdpLgGgeG1aEJLSMHiMWzS4HCJioSFtWaQ5xyqoAYYjBtu1XdAdQ",
  "key8": "NFhJDAaMUixezDPT6MTdcaZk8eCBU6MW7KSk16BPUKTiKFv1ma4rkuG5c5VL1RLykbdhvEVn7k47J4LqefrtPRn",
  "key9": "531YSfGrBbqhPiRgUStRSaEfCKJzexPAjeipsoNtRhFJNYg7DSopq64SWu2tBnRuGM9i3SwzwSe5BmwdeGqFhwos",
  "key10": "2TMZUumBXDHsSr6M9kfYZV1JiiAX6jxbvqg9XsrQMQAu3WZowjUtKu6XNVU3LFES9GzwdKVGwuSaR7MzLKtBUH8H",
  "key11": "38c9CiyMa5axZQRjhcMHEMjMvYEgYbCXiTrFDim6WxEZcmmupLRDErfdUsdWj1CtpHw4fdPMtDrPQYtt2M9xxV6v",
  "key12": "2q9rsF89Ervehso6eVwpyHUJJA3pq6xru1vATtuQ6FCEf3Jez31DfZrn7ccnksnY68xf17c66N6sGKjUf5CohnwA",
  "key13": "58NPHtWimZBXgb27gL8TWfgSEuhC4foCRDfY2BwJU8eobSZoPytZMaVv2sFusmRSaktw5nkqvxXBSszf7HzzSwog",
  "key14": "2JsYqYdw5TxSPg4zrPeSsmqtQmpDduXutaLy3reZKipdv5oDUeatnZD7FEwGQK1owQcZtwgu3a14QD1992KhttiZ",
  "key15": "4Fye5dEyzpXqYkqh5u4N7cPv5J8zxtrTMnAugnJGSmJKey8pfhWBBaahXTBt3MiBC2bkMXW6fnSC2Nbvp7UctFh",
  "key16": "5KPtdKeqt3Fk4qUBJL6FfswPZxHwPQYRMfwP4x8Ne4NRN7qv2avVHRC1S7mDagNHurtAYDzxGhcFgn5UCGVcJAbt",
  "key17": "3zUNwjawv3kBa3tpnT6HeTd7PevToaqR5yrZvLKtEgnz6hr6MhZ9GqRisdwJwjLH3ejDoz1mzYwNPLQx957NHNDF",
  "key18": "DPMJgwQ4kQafALvYXzC7CRD6eVYV3MxEUzSkx7e9yR5kfE11j3t46WDdP6Eto2hnpyGjxYqQXiWPFGSyfqf3wDo",
  "key19": "ovJM4mKdGcxwdA4S1TUggYtaQvXWWyuPkqBegmPRG49eCeozjsPGesUBfsbPHVt4mPFXE5rbM5KGamk9XHKjAhR",
  "key20": "3jhug6rcsV9qq7vJieYCWATp9d3NzHyrSQLLEAxgGdR9LWVePxtEt8bq6V5Rwe3PpGfNrmZVmXv1D9toWGtmp1or",
  "key21": "64KcAXi2NXgKpmwgnhUBXNdPwt58zum36TrY9JcHdj7ATM1ni3yET6q88z9A4i1R6euLfVRHJ5paJANYJ4EyaLVv",
  "key22": "5mtVXwivaP82t7UH1XcjmRGMsmrsnhnoFJQ8GnQ6WHBywywrwACsq7ZWXAxtHmrmgDkGSostUKa4yXUrJY9ayhJ5",
  "key23": "23Em9XVbNSZ16aqeesUggtfZnNbGHGYPRmBQ9pW9r3pXb63yXnumFUqkoYnZuWNmUK59jtfKN271qSFJTZ6cWqqf",
  "key24": "32HvjgahgtPbXh4wjhFAf9tHE3Hu1MUuLTn4jheiowRQocDMZ3itnVL3x5noGuBB633rfawh57prkpdP1RiHeY5r",
  "key25": "5yoZRsQcToS1sGyGXf4PyREqbswqa1hfXnB8AFiQov7X8vRFxr6uKyz2BtMDfnaRqDxP2pN3K7TQwxatpbjn4VTs"
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
