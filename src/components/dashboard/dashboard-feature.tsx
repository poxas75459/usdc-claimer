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
    "3rhvBtMkSoWXxoLJx7XcjUF2NWsJ93xZsJZ3ktRN3bnhJVh9CH6ny1bUUBdC37zWU5fAaqxQTfvUnS2NkZQMf2JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jabu6YoFEMLceqkMYuoCB1q86VhKN9i7trmTNmXApfEuGXawEKjtUjPqX2vUMy7eDmbmTmdQCYTf6Lfgisodw9F",
  "key1": "2CkESfsmcn7QoKfz1B1wURMY5b4W8yyh98Qk2xvGfEEmiZo6EQC8qLHVk3LnteY2dWSzW63PTVJMkvCmYywa1cCT",
  "key2": "Tp1k2nDhGUjxZzNi45BQQzBbSPLd1tc5FEzEiZvtGQxXwXnrQykydhw74uYUtL22h3Gz4khqhuNdicoKqDEzbbL",
  "key3": "2Apqao37G8T7ztQUZKBU1iwHNDMXhk3iZvaehhWfPahm6pmzEhLJG9nFGGjRNVxWRi9WuxJDzuWfxgPDuxo5GA99",
  "key4": "2viDbhJ7EHbrpaZSuFBWLrxnEogcAfJwMLd8kfU2nLfCJwX8fmgNXZBcYqstA1aDxt2Q2c27ey9JPmeFDLrwHN1T",
  "key5": "4F6bJJtQPv4DYCd3p1Dxq5nNAugSoszvNEBFnE529B7N747WZCjjcmzvVAz7E6kfzxUG9U5zUXLTRCeXc4XTkWHP",
  "key6": "5X8WThJbGD25N9BrBtFhFK7dYdM6aghj1mtiAHqTjCtN5EngkXL1SDgcEWyqGa9MLB54Cpwmq5ZnBhdFgrzjHq75",
  "key7": "3D9bhkNedA6hdbSyqi2GFWr8szSwX1rUgGDvmQ3xq5E2NCBUUcnLFoPQwNcSiqo2DXSfqxmm4TKioRuiS53d37iw",
  "key8": "2AKSiLW5owqDLGnnGcY6rNkUftzMCdyrbG9zedMLx2eF2ZwZ7fR5TiQ1dAtVXsp1d9pmq8X1vPpJUdtcXzuFFjB8",
  "key9": "3CuqwemmLYjcLaHZzcDRBrFBiB14kF9AvoDi8jCpNdJ63wLYH2n7Fr5QBkgxM8iV9BuY61avMeuR5ofVNpiZ6gF4",
  "key10": "2dKhjucMBsmzvgCVCfuiFNnxntDtCkBMU6Kgz5KMpBEpiPg32AX5VCZKigB4mVfs6M3edVqMpLS2mPn7xS452JTU",
  "key11": "3CvDLDaxrnsRePayXKuT1bFmMUcNMnd2333E8HapBrwXZT8dHhCEppJQNJ1VAAqpF6wbvnNV7QrwjUpF2SZPrTwh",
  "key12": "2N4drz9KxEGSwJV1v2o1UjnBmm7QPHF2qyiMjospmCq1MgQYGhCrxmQig8QKt9j3bfVCBbVS4tzH7Htp6AyZvfTe",
  "key13": "4mRp7FkytD6s1Kw4rvNDfk68LMr2VDGPW72drBHMXkiQBYBo5fJfgLUfLuvdy9w6km4MRtDgQg8JSJUoHxGg65T3",
  "key14": "2nZVSNHZH15F5QhDoxK1CMCvqowt5VH7SiBaYY1XzL8DC74jTC2ZzFp1vaYGuffTSFQAiUD9o9nBC64HHL9VTyyp",
  "key15": "ieVaEVCLecBnyrBQeGY7UBETe2WCwLJdqSmPPrgb4D9ARPBnuEwMkV3YuywPzKJkVBdUGKkeWohdvX3BXQ6XndJ",
  "key16": "37xpUzwnAY1XGivYm2joN7j3dZn2yDk1ioA6S3CkWeY6ca1zMv4HGRKC4HDRXszh2ewPBm1GronF7qCVafBbVynr",
  "key17": "5Y6TAz1RwS8EdSTRnnt1i23pJZ7VoGc1XHdv2Ai1TyKckJG8Nw1u2KcfFCKsYDuc9nMhdgwd4tPzXKDDuhWRoXME",
  "key18": "SSttULFk2XmAHB2C6FHFvvC3BDRW3eWjCZo9cEvkLEzmywfJ4ygdXP1vTYcoUgnTZz5ekojrQBeCEpRrYat8v3E",
  "key19": "4JzAmBs8dZX4f2PDmbrP6a8pN8GPVNL6RpTh4zQAw8mTdcEzmyTwPExRhq3r55vX9VBCJW5v3SQfUFeYBxkM2dwj",
  "key20": "5LGLL8SuXSVtqAmf49KQcAske8WBEY5iHXmB9cnFjYHkEaDUJvJUwcY4svhuyKwuBgoVEFgV4yRNA4tr2Y3BkCb4",
  "key21": "334kESBMyW7jV9xEZSucNi2XLVZCPgukFQEzEcgNK5J3RGabSFQQWFjDaHBjNYESay29AxkNKKGrB4tBLMERnSBK",
  "key22": "4wdw6WxWLXLnxKFuJPuznVbhmFEdBEsYbk9aU8nKE7qa6p3pAobcsUAeNsU1E5VKd2omXaTFYbs4MrRuPaGdRxfF",
  "key23": "5YqZ4vqda6bG4yazscfJrifJWySdUpvKgytJEjzgwaFEBPsNAF1d25DAsfWF28WDwmD4EhhwTx74oGXGyB2x4t6N",
  "key24": "p11AMKkCdrYphtq9pVxoYoAD4m9Kuew1yczKVYoyfD4cSZ9RFxrcaGeZdMhpf1M33EDyqXYNJWLuw54vxJ7Zrg1",
  "key25": "5LDf16FJK434JRRsXpYQ8UHr1kTDXyYpX7VntqyKNeYfeNVX25FyV3zzBZZAK8EJVZNxU2GXcmgTiNKsMoav564N",
  "key26": "4xnQN4sHRDe4WzdG26GkW6wHVvz8y22xGCzyKnYbAQdeV2YZB5v2n2wyKonERYZXEpRpZY5U5uutG3yYiwo6cTsW",
  "key27": "rCRc68xxRPAm9AdCrj1pUFA5BGGDzP3McbX3zUWMicUFp8EbweFecuTK7TpGkBKYEev2q5cSHkSHubYTrok3A8N",
  "key28": "612dvgyYU5Tdg85bL52DTXxq39ospdYxvPb8dehgZD5FgFwj1DfrWGoAs8piJZaXpELzhxozhoHXD8bxjAb8sYzu"
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
