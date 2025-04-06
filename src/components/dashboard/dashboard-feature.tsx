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
    "4jhxFJ8zwtKzAPjQy1Xje43CLQ8hGJWvz5ME83Jevje1WQkSLgSXafvgkFSSBc7DToMV5JY4b5kFR8iRNJ4fycRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3odtGrXF2T4h6FAzPqZhhLUjLvZqRsRwyTJQ9nZwHnF2PYZLUxSGdd9MjXhyLHkqLFNgAYdGdPSZXnKFcSzPjv5S",
  "key1": "648oHvkSVYJee9uNsBvpuFKn1gCAoAUwkop3hsPSEPZEaxHTLwGvZm2L2y6TBpksDBrRyMY9mvcNZtgf8UYGocV",
  "key2": "uzpUvBis2b3mFHKcquuFQ3kcuf594eF4uHy3qyfJDPAVQEnXK5j8GodxRc2eRB5n9NmXPJG5kAfHxpgVBiH3udG",
  "key3": "5TQ41aruKfgswreX9a21yfBKBsoBubeLkmFhckRdz5pumvoAAutm1beWHYqFkumSREzmZFXoqmRdPU7nZSNrqYkG",
  "key4": "4TFKq2Av9RittLvV1n5vFVy4YXqr9rQ5JpnLBijcvRcsG1sCTr8Hu7G8mL6u2nUMbm9SbGiEXAVcqdufxhKMcLBz",
  "key5": "2w7udaacGwqFwbkndUx4VvFcfhNsi9ZfAKdz735YV3wXtrgGJPjEskztfg3vpjnmd23GBZCRQ6iVNsxG6nCD4thu",
  "key6": "kuyCzLaGu9fqgLWUnxZ3bseDrYZvura57GKojWB4fopaeRUE5wS2ctRh2kMqtZuqqVYcV6YHEzifbEnhN96Z4XZ",
  "key7": "4Tc6u5RrbRNri9PnzSsbdxC8m8vqSEiLNkLB9qdWAwjJZZpoZK4ZGnxmRtMKoTVxKMkGQHP8szHL7JodLEyFRpQs",
  "key8": "5edAZDqMJzEg4iPN19wPH7MYcKVZNus5FXJrbWCMjrnVy8rynmt1eXizd3ExazrUWqLgtDm1WDTkG5PLMS6UojDZ",
  "key9": "2nR5i9rXXLLZcX1chx77qou9fK8T9hwK3mrdqboh6BUipwsfSe9Cq76rYJXStruToVyVSQiCYswGUPwgos75LKPa",
  "key10": "41YAhRo565bLg9R9JxTFi9JW9WQqYMCpmybKL9BeDxhUTzWx6L4XZ2nKq749j37we1GcSmCb6wf3wV8QJZtKaAhB",
  "key11": "2obUZaU2V4RBX1tgGri42iEpmdwbPdTms6Zj1DDcX2St6ifH25DQERrwjqDkUY1Mu2LQjJV76bRRwPzDWzrkHkTu",
  "key12": "4EHjWRWrE3k5USPnAQ2yGEuyQUNyoq8KbU4S1TP6jbsK4651D2kbRSp1oWqRfSoX5pySnVV8GKa8us85iHthRAdr",
  "key13": "2CD1haDZPan7Hwq4Kjrwh2ducrgR2vgk3d5R7do5Q8gAcaTM6rW53BShr2nXhMsyGhX45PWuARiHf2ds9mcA4TGf",
  "key14": "4zBZpRfz88LCeYZMzUwDkRTMsa1VU59FNw9j6Qm17qiYMTtDQH43cgACLvNUeiTiutZXqjxZyHSQT8twEavUt44A",
  "key15": "3nHmcEHXrHGEBzprRUDgkDTtCELp21Nu16nisjvSrPcQr5TTL6wv5gbfW2ksQQkQmVZCeBCUQvk5wqKgWPhJwU7n",
  "key16": "6fqUo336USFDZ5Ykwfw2qXs2BNJd4TZCdXz8TjyN8FBHjNuPnnkdkaqKhSLFM57hyKMEXhed3Av2JbErUnrvrcu",
  "key17": "63G3BpH5FqEnqoqpmgeq7Xp8nXK6nzH5Bfsm8xhA4oCGxaJWEuQmJP5VVkvEUxdbQjVHeyVnNRMnThhARbfYgVvJ",
  "key18": "dkrfNK555z8vAi5PghDYPsW64Pwy8b9CofV4EsNr9iDvBVAA7oPwXqb4a6NFYxrAmxarQG3a9WVa9yUcvnUcFVb",
  "key19": "4Rfi73MYcjbDL1zBeVkFQJRyuStNuEkPBtVq5G2LE3xdmJv4PwcTHio1JfQ3uPZ8nLZE7t9fvP4SxteLSshSYoQq",
  "key20": "5vRZQSHUJunqLWbJbZnbrde6PUWSxSpP8ewTHCJPforZnQVoQZKVkN8uYo5Pecu2aExQEZMLmPun9d34H4ENMLYV",
  "key21": "22sBAKbnuRvYBM8dnVBp8SfCxPpxax3yhVEg6RrHC34XgvJDVVdiPFCAg7XYxbPT1uFuVj3YU19MUn97BXBT53uK",
  "key22": "3wCJ4DShjSM2tZUCTmYjCaKa9iqHcYMcFeRZjrcYxguCFPQj41H3zxfhwYmZtEBS7RM1stkekBB1U2EgCVsbS2KS",
  "key23": "62FLHfHgxE1SaHpq5c6CheJghok4tCpjCzAdn35DTHiU8uEdXduaZSTi4PLHNorC2y8dbPNbjcSds6fd4hLmT351",
  "key24": "3m5Qwj9FDBFVuocNqUa31FynomcibwSCJ7SUZvoGebiXYqWvgxftnehYxr9gRnkAx5SpF9aiLREo5HBJSVgVyrSf",
  "key25": "2972JofXnp6HvY4TMBm36K3kBfsYkCorqy2TqV64swyYzZvpaiQ3woRmf9yN6NKoEhETFe6kKLkADy1pTcMKdH6g",
  "key26": "24ZQok3AAHBFL2iW2UBjVv4CbHuzW5sRGDUjAbBtDjSo333VYBxui78bZeR9b3tF5HQMzRLC3nFWkigq13LhPJRH"
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
