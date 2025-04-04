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
    "4Uykd8NfVgtG1cS4H61NfSMxotw3pGt6E7wzcPydTxGWNCCawz9pj5t9qhtJjdPHMhpAKhjHKH7P5Z4QaULieUfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bshNNC9KFT7GvZzoc52GaHTo8CXTg4CGgaUJjQqGmKso13p1Sr3HyVQaf5DyB1oAgq1aeoBs5nN9kbvUdaDtUsa",
  "key1": "4pK7hpy4HFWjB4gXyJWqHZsqhN39ci4LxWYrtub6nrivaXKNAJsDE7iajvr2y83pAvZRwFf5ZG7EJX9Lt3bjoCgv",
  "key2": "xexwpsq75Kg11mt31wWmxw4c55WVs2AbTtjNZCxKWHDe1jPtnTN4LFyrmHjsdpWAuFja3oZXFDQ18zb3LJJhTRs",
  "key3": "2akrsJKWFor5NRmfWueHc4bWdB27ySUD95QCctmPKhYbT2qdMhWQvL6gPf64s3Xb1bj6Z4cbEmbY4tLQNs9AXv79",
  "key4": "2gxT8f3Rqc4CVEbDyhv82jRTs6Dye8s68vkawgXMDbV5uay2U8pRqFf9Z6kspx7UETYjvMPpM9NfuVAuvtetE2Pe",
  "key5": "3ueo8BJrWsXNiomPzZ3gh6JN3FUwYQ9Hbje1LpDNWqzRDWynKNRXLPm1MMf3khao8yLX9DvXqXr6QcREV8t4fJbg",
  "key6": "5WTXsnWQq4MxquEueyrcLtCAUUahK74zo1ngxvBf3gGWJeWKNhJgxakhnk9nhSVFe36LPz5CJthzhfs233PVCDoV",
  "key7": "27th3zvBwrzML2LrPcXbbd8qyg4RKTBcTTKzTR7Uym9eGzEmguiRQrLks4Kz3xxCoCy5rEUfTaTGv7RbRYjsGjbL",
  "key8": "3siDmrA7wKYaBPnANmFnA7Nm3Ssns8umrgGYLVhGSzJdQdjGGg7agEVKosvHJnsKMb9bvVd2voHw8uSAWJC1rmi5",
  "key9": "F9f12LT3XpB7HyRZRHvDWnopAbQcGJkh3mR92vJuiK3yxDvtFnjBcJAoCoYPTDgVBoEJU1cwaHKzPCAQKBUx717",
  "key10": "2LDVvN8SfBjWNuoJCJYgG8fnKWw7JzxFB8bCNXfYWufvEHHfg8gyn3sVCaeLpabErFFkEAF7zWXRmduMkhDt9V1e",
  "key11": "5bhUgvKzAEmQCYpgJBnc8xF1CUn4QxzDyvoMpjU7avnDwiDapbsZGCDJX8wa3cz3BSctY8FKH4WJoXbohiuTBJvm",
  "key12": "rgybP3SnFJek2gT3qsDxRbYs2zy5jm4TSZcwSzzjcVwHMiXpHR3xEqfjChkfqBydkpa31cN6fX6UZPEqN7cfuc9",
  "key13": "RGeCA4Eqk7MYGdP9rivcBwqeq2wpBvQL9o4np8Qb23wSfn6S4scFuVb1G1FsyopecM5xnCfQX2YJUkwVZ8cvUHA",
  "key14": "gqFPyo3MiaGGG89YcrrE9oib5LUJqb2AG7piwhim93CEYY3vfBv9wjFvtvA8VWAvcubU2Z6qCZJ8yUoVJEW6Fzh",
  "key15": "5NHTjEjRTzirb4UKnE6x1PArNG3uSArRDteSfcgz2JPoDavgYdUoMsnXe8CR6kXaWeZM1y3oBdsqwRAuvt2BJYmY",
  "key16": "4W1sC5SDL1ceysXsyGbt8C25rN1N8w4BbZgsTyagtGJhNozrix3sqtF9dpRFs2DanowgvkSdP8P7DheMySVsnvTh",
  "key17": "4hsmzmVX4PoWEqDw4MCcD7PZwQf5o9Hq21DiRH7FwVMjfdizCk7H6768rHBoFGpzpAUUS719PnydWos4bbbGdj7t",
  "key18": "4YE3uwAdAM3JPx9NYAgYr7EGVLidASHzQ4RnyaiYukoVZMX12ztCnzeyV29FJdz3WtLk3X3r5C4zjEeuVHk1zGiZ",
  "key19": "z9mLsMMLFfZ1PvnZPAWGxRNeokPXbEDrvEexoUgzJdid4DVmNiqZNZj4JMGqFgdsiZAP4qvsgYCc9BBta9jTJxz",
  "key20": "3FrD9GSBKQCJ9fWRBtAsmEfxqyWZTNJeNGZ4NtnrHop5sxVD3NsX2oNqr936vh92FzdjGppFFWr321pS6Ci9t7TJ",
  "key21": "41ZaLp8qT8Wsx8ij7b5SYch2YZ7DfTLTdtQPQR6dqaLsrh68U7KWvo7qS8JtyxATtnKrDScB97GkPttKQNGXaYJM",
  "key22": "2V8QmMb3oxP7eMZNZbf9JdvchyQmcuPSsVaDcujygdbCY2aNrKhhUPV1VfDdPJs94AyCfATEZLMmpJ3CeVRtHFqB",
  "key23": "3CSCyGQWuBoWxiwuDD4VdwJdpbwgyrAwt4TKa74v3pFJz1xKqMTK94rZDoSyDvURZyenMyP6a3wLwTEWDjuz5vqY",
  "key24": "57pgwG7Jrjk7g53tD1rEqQ31Mk4Q3sRGQi9nbighyMpcwUrK92z3MjeLUwmZBtNrmUTy8768NXG4XWGEqusKCWsY",
  "key25": "xYiEwt4FR8MFrJmzZhEQNnqDDiWHhNxXMjDtgNhxafnv1B22LpTDDPSDrqbCnmhK3ecVr1GX4nixTLumRZRkzow",
  "key26": "4N1oB9SrkR9bBdeGRHCPcWa838NdEZgURwRX6WtmLHa3azSzBwc32zvjwhuh9Gbd2BurLAauRMs57Zn1PgqdVzqi",
  "key27": "PtP46uyM9sfznGDHWHm96dxFAdcdnxQskDj9gZcYNpWq81FVL3UtJPZe6mCMhovNwoE3en9HW8X72bH4kY9cxkq",
  "key28": "3ZwTFD5yM2kzC9fcWRVWS56tTRu7uZwWKdP2YLu6fb1qFPxkPCpt3ymv1FbBQF2sH76Uy21jvxSXeEXctF7q1fS8",
  "key29": "2yeUJ6wUSJjVGtHnCrDKSKF7jp6BtrMbJBe3zCGpsQyC3MoELN7TQNcJFcLcAvkd6AogP8N5DtKCRASfrJJZm8xv",
  "key30": "3sVKFghYe6BHSw1NHqw2tgGYpaGqdMZoxeHm8Uzi5gD7GXJkhrjC5bfUyMDRfma6dnjiW9zfMMUWKs3uRd1Gk18B",
  "key31": "4k1WkSeZAjSoxa4YsP7ZLf6qk5T3s8CsLE7gcWGQwugC9YHjx6JdsjYZ2eTzi8CypKsvbMnZRbNDvjbnquP4i3Ds",
  "key32": "AzubpCYz8oi4L3Nzhh7dQMvnoboZSHDmuKi5AkZio1SAmo82t6yvQjCWaY9CdoWosQX1ZTHHncCLktwvLRL3zxL",
  "key33": "2bspQ77MTSmR7FnT7PZyuH3BCHHWtGANuJVzGZxcYJumFvC7UdZ6mgJJHZKsHYHhUdtGzLRfRK6yP57nRRrGrkJQ",
  "key34": "531hXR27fjF5fyqrDgY1UhLZa7KdyCCt3fWWT98t1cLMRNfJ1dmNqbbffT3HejBzJWRahrwh8nN2UYs5yk2kr4GQ",
  "key35": "4pnxcNWq4Bhh4d9QWDzFGQh6b56ZZSs1y1cziswWqGMR7DtZ6wMkW2zqEZ3bJAiC6u4y4S1iFN9VfzeFvRgFgNNA",
  "key36": "2JtrvJzxN7AXDDsxaCrKJjpCcYW7JsxcpZEEWCmvAPtQFzGaHDjMiUBXBWywBRwYVQEiU7eADuK3NkmEN2pVZZJ4",
  "key37": "EVefqYfeApEybaYBBNfMPuKcpbcWWDmzd73W2SECFLzHtNjfCSfhuYL3USUBxRWeW99o9YtvXfiVUrVCyv2c1X9",
  "key38": "3j3rdC8ibtZsZRo6XL4T1J6JuTkMk376LWuB8CeJniLUJVqS8LpFY5BcnTofMfTfBDncjQQ83iffoZAHLG4iQHFz"
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
