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
    "4CUVjAVt7R5gNKppKzvoWS8ozdKKYVWrtBHYQSHwzTefSh4TosS4q8T8rgR6cm1cA6mxqM4BMivwT3F1NfQcSpm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqkagboU28pxDTu1PjMBhUcY9Mhfc1vdc52sDLZa4pFvJsL91cDhm6nUJrQZ2xDR72BiT4vLxeDic576WZZRPqW",
  "key1": "CCUA98Loe9sBhFu1LbM6r3Q7coeiCDYn4iskeU7Nr3wGAbvNrhRZnoX78zyZRQBBbwc75LaXE49iLfS7nGc4DjF",
  "key2": "2m3CvsxBwAF2ZPSjpMsCuaF3yjTLDMpRrSnRmq561wuBPAY2QgkBjtF6ToM3Nuv1sXaFULrGd8ffojTwSCt7FhnR",
  "key3": "64kPmY4C7eGTy89z4TdhUW5Jxo7VrvYE1SkZVCvRqanYJVGeMtYbuNt6L5RfLjswo9BmJUS75aDPLZg9vELfELMx",
  "key4": "4UBRAVPk1VfkR3Fn1kdJxCu8KcuJt1MekqFdMyRCe57NQSH2qSqVaJ4jheoUpYmzuEd1VEQBPdjWKz7XG2PnXbRS",
  "key5": "2wrg3KY7drCFG8A2f23NzdcQdJ1HyHbZke259r1dKVW6Eiv3VtSmgFEsg5Ac3Yp7ChwyDJGq99PEumDXjYiDAor",
  "key6": "2jUPRnJE5MteDc3z8UcvCq2TQTqN7MZam5VpQfJykUGgykZxsSqkEm3425y1p93CChyH9amtDfkYkMxyV2cx9gRT",
  "key7": "4DjuP6PjV9anTf2CPLWdSpCWtXkr2WkzkyU4Rt4yNrvb5ExD2zsXnETPLtFyEH4Cp9VLPWdHjRS5eeADXxJWow2m",
  "key8": "4HTgTAoeZUZzMJZYGA8Z8EczJuAPmdMCTBM4oAn1wRB8dTfQvTPj82HMnexsK62UsKsWRkBPcddN6gVGYBA5rafm",
  "key9": "3XNQnK5AiZhEUpevBW7kSbAdnfupLUxkTBg4Mh9roNdEaeqr9ocPT9u5shYpT7rB5UrjwQCKFmUdV8UkHHbaPpCH",
  "key10": "Psi88ej3NGrx7E6zxSdF3vDmPey9C6iLUJQMetYKE7D5bbomDFt9MuNvMd67RbJZB9DtcH8qpBNmHYPTqpQWMb8",
  "key11": "35qm9RvkcuarU86XqLa93J1cQcWprD3TxK3Ktux3i5teg2m2ZLsJoTim9GZF3j8ZTdAN3LFk9XdCL52ZcJSB4LaV",
  "key12": "3jcZX2RL6PQ1ZD7w7AaqHVcTGhy9hXXh8iBj2EW3xPHEhnZEdouuQWMbXAgxp3cLQvVwzLQe3zghwqdK7gFd4iXA",
  "key13": "2vTqbARihUPChPV8jiRqsmbBzjRYygUdmDUDKT9ahRVyCJ91F6EVRdGJ89VBFSXGFSehs5VgpHnrWEphdcTZRtTj",
  "key14": "4zV6EXnV4GXKQhGCHCNBMRrs8sLDYDvQPaFSQVfXbk6FVSN9ztdpVxtkx9DNtufBvvmHitKMr4TVSzh8GJ9TjoWC",
  "key15": "2Te761YxYkcR8cUKc6T4adT9YBuMkxT7XkcTBgiccVRbRxamDMekM8YvbK2nzfGu6D8Cgs6S9zWL1xwDcUANm1AD",
  "key16": "4erDgDvdZik3DzciTPSKkGXCknVFJ8jayR5hocdnP2kXnuvnrmeDUXdX1ZxGUxJ1eBkeQGUe9HTrTGbkYMfHSbWZ",
  "key17": "3Nq6onfqUm9TyGLoLGGn6opzxkRMjFQ2xC8dufgh2d8gwCqrmAhJYSWEMQvK3aR6y2duK2Atcne1VVi4vr1CPWPu",
  "key18": "4pVYihSmoNTsLWYxDs9mZFGiW1gHiha3LgAqv3FxZZzWg5GmA1AUcAjoDDkKMrQZ5xLgkmQkrMvttk4kwAvQtFPe",
  "key19": "2JaxW4qFjZrca3gA6ajnFbqDHZj32QLgoT4JpndHWtMwt3GwumC1qzw3jQ1QbH2QxCBs828FFjWC6Xmq3sMtwUhD",
  "key20": "am7xTWnjez1tGtgBxtkFZ2HAGfAevSK8NbxTH3rMrgpro5bZdsoT14GfST9Yk8xnQC3DVVZdRo6Sn7amG6VTEqV",
  "key21": "hXMzQgCwrTFVEtgjtRk7eNDp8Mi9Qf1LsCqA36zQbhhf4myvR3oGY81sBKmSUFTRpGKame9fBSQieqw8Gdkoz6C",
  "key22": "5pGeQ2VF9M9j4GcfD1Px1zZvcuZz6jX75i356Mhpqtr5uEWQMH1pfHM7XfcGqLAgPRs6Cm41iVGPNAyvvAke7Sqj",
  "key23": "21qqfUSUkixNXTCLTXd3ZRxrTy1GfregQA7kpS7ydYU4GfgwUXHLoGv4RUxwKXM3Nd6vJZWF7sYghbie6imeMsHp",
  "key24": "2h1gocSDf1X3DG87EycXSpRB265qXPDJLcsiDysjBf9qKRLoFEYLn2XGxZ6yppeQ1Jcu8Mrfth9xUBZSaJwBwvAk",
  "key25": "V5V8mrAXBELpFhQu4E6JcCWvSoQfWQ9ZDfzk85Y4wGDXFNThns3vJFiaEAGgaS5MPcx8E4hktYTjfgK9wEvfV3o",
  "key26": "22fZVxBwxKkxo6ka8MsrQthvyyD35wLTW1miibN8oqTmS1wKEnghnSN5NfupkCrgJRK3m7nYipnsor61HXBArPjL",
  "key27": "2khg5XqzwiKQZSbMmXgWWQxCF6sVcPDc5PZdLUtDjuzcbfSf5HUPnpB1NDhMAXcxnfkcrrmkgcDG7qMyRPDbRvHj"
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
