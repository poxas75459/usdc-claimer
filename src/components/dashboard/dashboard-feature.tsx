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
    "3FvSEymihsHZBS3UtJ56pMBtitjdTMfPDoqU7RQz1gyMgY6Mym1Ff4y19dC6bwbvjqc9tHvvZcMKXR3KmY9krnqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52MCNMPAcdkkmBXJVy3JmvbXrAEPWw7N4tecC5MbDdLX1ZErEugSWu54oAD3mWcFe175bmLHTkBR5xZ5HMpK9f2J",
  "key1": "HuCjGtfoA7GcTBj8UGTHRfygFovKdjuzzuxdhhRfPrYveFuSLv8Noc77ByjVXAQARPp56uNhuedT59Dp8ZMxFVn",
  "key2": "4QysQrK1h6XcwGMdbaRA25N137bJdBfT9xnbGPur5f8thFsCzRZKmkugDDhr9Y8cNDVGpwaB76YSbf2m1K3cWzX2",
  "key3": "UsCM79J1RUnfoMDdkzGVLMyS8143CTEYYm4GB9icsRM5if62Vr7S1yGuiX5BoLw2Ys42v9T22H833J3yUCYdLw5",
  "key4": "tMkUitjFtP6tu6Mwt6NAfYHgvzpywDtTccGw4LuUrQiFVaTa9NbmrZfC87pJoRM727K2Xr7Tj3vCyLNhQJn5Ckr",
  "key5": "43mkTrgpKDu7eJELfH1EjmQq2fAbi8jEBzsKHiWhAEBgYJLZUSpAsCK6aVeQaAQVJFFJeWeFKHbA7jNo1s4gnw2s",
  "key6": "5xiKrhqoxXEFfsW6mA5CqXvqcWpPBquyotSMhapQ3j2mVq5eMGEgUV8fxb6SFtUxRYVZaVEoeN5L5t7faDAifQJK",
  "key7": "2RxQQU9UDq9Ww6iHx15D51AZv9ZuYs8ipPJwgrrN55E6Wy95Qgf7yHPxVvhjj1kcd6qDPL1cNLzrygVw4Mk6TpuD",
  "key8": "37AFE29aJ1Ja9fXfG9RcuFzgdANuW33YwjHBxNqLkR9JTUchtTYgk6StYVhxSynJXXuwHfttnpv2bmeyNEGhCzWx",
  "key9": "MwkQWbdiHhY5aqKGKaaPV99oAvGY1M9eibq3WaRMjGtwvWc7U21dxvcpJrQxqpNvKWdAFT61o781fQmScng3Wsy",
  "key10": "3vndGgfv5GWnM9hySGbzW6os5abbDJwraYn7maYMe17Zdcs3DprMgtg3Z42wmkhMoXZjuzVz9QeGUCQU1H7hCFRk",
  "key11": "3DcUnFoXPtHsF8V9ZgGYqzfWZpE45L6VA1J3zgkbAP4XquHeqdiQYCb23SMB1tYwogfZtpeXFDkXbP2pNN7C7U5v",
  "key12": "2316ZXpRE2LL4XQMFjMgpmRRKscw1yA36zL8951pGgxfVUQQHtzrF2zrFhijw6Gu7bAUaX4gQJAifN3LntKmrA1u",
  "key13": "3Rgd5wJcBYuty5HVPK4nL1hwLTmuHSSPkS1XEhxitrJtjbPcH59eiLrrWQ8R8UTMSeVpGmAdzZjFeGe8iCaVuLch",
  "key14": "3P5nCHzQch1hTxoLPAsXSd8sia6cAWP5EhpuiKMUngppbbqA9PV5yLQhYzF5fLaGigkramXgQt4mQ6oUNy2vwpV5",
  "key15": "4XGqkoYCS1wVvAJg5gu8DPsojkaFQoqFh1hqSnXCiACpyQ6KXjRTAhXGc7ePuCJavyC6tzj3yujHUh4XCrQ95cQL",
  "key16": "cpUqv5fcpR6idaJBKAbuCQzGgBqYMc3SmyZQCK5HQkqQYXJVcF6fxFEUtqC21iN6ABuGnKc117mtCb3BaammR9n",
  "key17": "5CDRPWLwP72DhMVGYpsPyqvCN6vrQNwuJX2KiwCyn43nfc8cYM6vMd3y6TGzDBGmbReLcrk5PE2SqH2hpZfea7Cd",
  "key18": "4bSF7rwkbE2cSbd9E6GhxhTmVDDsDR3TrFNbW8psPYBP9WcNEi8nPUt87BsFsoUKVqVobgAkfi7yr8o79ayzZ97q",
  "key19": "2k1hbgx8qys2mMvAtKnZxzMnKoykeLktm8u2DaYR1CcndUWgSLiRnoJTbtPkrBWYkkhyMbXVUECLPj5ffRi8SCq7",
  "key20": "2Jog3crCQRHjThmKoPxwAM46V5wimqamv635tcKCYXdHjBMhHgJpDyEgwsCVjhwQSNPns3bURJAi4mjbFsUiKnts",
  "key21": "5qbBYobbtpDybXi6LBFtyWw634pbSDaYEebwr2a9BW7DZqoUBJaV3bnR1Arpbex9h4yEWVfzaKDob6CeqroB1HQV",
  "key22": "5z3DPKDBczohEUSava8mirLnndb6npSxn4YK8rQ1sACFZ2BZnaNfoSjijeLXi4NTN5CXhb6ebdS7F3JQwhJnEQ26",
  "key23": "4Bk8GwJtM11NVWVZrLTcY7YdPNVDMrs1mtW54PugmR4RhiAm5sbb9BWYRLUqtHfMmm75EiSCNtDvDCtnzUDG7Bzs",
  "key24": "2enkph2BChiyjKKZFoe39CQLY69BA5CLZ8rQQSrgctT5aMkGXH7kAgtCdFwA92dg2RCGFvEqK9W44Cd8i1nZxWaf",
  "key25": "3mtmnA2eBy786h4w7QkAzqriTf8AHMSMjtoWvAeSKWvC2vhA4bU4Co6YybTdffviUeA93Am13ZryX3BuJhJPEei5",
  "key26": "5Vo5theGpCM8KYn1JTe4obdL5JRku859G5TUScqS3jZRSbiDYjvMoV2VryZUPsiVqD4MoqzAerSf7JxegADTwPWE",
  "key27": "2ThCQmeToBo8DUmwKJfFm1134ugfHP1DjrNfQQAiEyiYLRYDbcZksVF9djpkB33jim8phzWWG9tdRwd5DLQDan56",
  "key28": "evdgMc5uEvoJmg2NexaTykHxUhRXPXhv9cEpngrZSymeUG6hbNKQeSKZVhJRse5Nzu8gt8WpTc4vRbQRfLeaoWe",
  "key29": "3rq8Bq5BnyLvmLG8DpSyMRXJ38SqZiPGjkN6MePL268H2iiZuSbMJgv8FDweYw8Y7ANTSfzPi1xqEGxcCuzLEq6v",
  "key30": "5ebQ9uA5ByPSKVwS4S6sfKW5FGVsGQ1S18V8GSGdMfB8x8dTZYC7FUegkETb4XYShnfKsZ1VtuZ2VuRSZJmvdXhy",
  "key31": "2fKLCnKpZmgtm82QThtWATSNxiYwE5ZQtQDs7CTeA3paMwnVZPH7otQbB6Zm1Hm3DxpWcLvV8ZEcditGMSX95GrZ",
  "key32": "ubz9o1GHXRwzpz67sLYMoVpkbxrEW5FuTCC7X9P24LtLqUC3MxZs4gBbo6FoywWc9oidGYNmdTV3edR8MafA67w",
  "key33": "4QG3wV7QwfpARudfxe2vtFQxWCaNgYRGqRMT6GoFkcNe6CKfwHcx1pTkMgn4xbkX4Bwejw7P4bVaxpsNNzQVadwT",
  "key34": "4sqSXjFKRiNgrBG1eB5sKicVc4b6JYiCjPxBvU7DpdtNXQ8b2sr4kjSP7GcewJcGmfzkgCD6whLy7Q7fZW11tR5A"
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
