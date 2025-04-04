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
    "LHTp8KddmPNAgpEv3hkpLmUgebkWA5npRj2isuMZ58uQ7HwLCL5dxZmFriYt7u7NWd6Ze5MwGCBEnek3XmWNLQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bw7c7UQJaewUHMaTGJmSoounvQN9WhLwpdET9VwQ8GD2f9MHVhvDzqiXYhoXx2HvGmixKmio794PZZs2QpjvGZD",
  "key1": "2J1gyof59TNaMoGFdcdZxs3YMGYewPnbWHR6hiuc3qKkKA9gsnMrUPqnJ5VkPnvY412XUVHep4cb9RHZFLA4ubRf",
  "key2": "5gtfvLGVUWz8S9teC5Ucds3oQuaGLeSHjfqgcJiPPqj5dbuNLcaZUKZMx5VDSmGeZGZLC9zqLjTrpgS9n9jSQtJ1",
  "key3": "2gBUcgcbyWaeM36GoyBwnQCRv2SoDPGpmp5V7gzFnEfxS1fJWWX6JWupMT2scVYQC1UEcxMW9eiugnaXc9cnZeJT",
  "key4": "3rpgXdUTuddkLC6cT6TVq5SgERKb7zNBNLJmVmTUzZWxYpwoW8MXQEMcbXW7gtZpN4EJi2KwZpBqNW2YAfTthaT5",
  "key5": "ABkhEZvzcSxVaa6fHn8C8pxGoD6iVYDmqnSxaiKRah34CEZA26XxphNxPUFf9HAn5x2zu9s2YFyjdq8Y5iZD6DB",
  "key6": "4oazokcbY4xRFmNaBXkWJBgiGJkTREuEwDpoMpu9FBNeHdWwfCMzZu6yr3iZALAC7zgJezE25imWtbPMaGDBoGXD",
  "key7": "5sE2NBtbXqMuVASv9ZgNA9WqQuzBwWyrUf4SxoN4pWrsAsMNS5mHg1YY2nYR2tLe8khbdAUmYcEsbnp15MPWdkDy",
  "key8": "XB5mUL6FJT9GL9MyDjKadWD51Je8JYmkrMqBkEQHkKXiPHjaDt5FTfFFPdAng7KMNDkfqodhuBHvCLd8a8LMWvi",
  "key9": "8n91truC4xcLZ7raxveMaNXq9L8DLgjiiVHiwPAHWg29rGcigegCsBvw25BCGB7TPBxrTL6nNyDb7nQCHiFhpBV",
  "key10": "KJaEm2KYcHRGUujegXJWf9ditWN9m9tad1HjvoGvamrDs76BmKwtWmWYhviZWrppvZ6QZfGV3DdbcEf9nVZm2fR",
  "key11": "4F9stmgy4b1owBzhjFz1YPSjURfDHLDLSs8LPt63G6gKzf3HpPs7vLNTSJn8HxB1tGZoT5gUswSTQAabASjRhc76",
  "key12": "5cJ69qGPyEJ72n19dy25NrDnLt54WycDjy2zb96GK12fvdfcQZuo9agUnd3MPbtNerVaSCZxAFVFfwkj1btVv39Z",
  "key13": "3vyP8U329HnnhNFJVJUg34bjEnWnCT7FMVPz9sNWL1xyP8U4tYPwuLx2d6UG8zXeNCRAjJ1zhvoyJVCQAuxs6Mmu",
  "key14": "4Qt79qEFZEZZ81NhLgRWrPGP2dJ1jHjH3MPA3bdJaXRo5mwRSzWsyM4sA5edZrYtpmesMbP7uoymszGiQJM2wUjp",
  "key15": "5erkB4oCdMTgSmoFJMG1bSSiZF7yxhM1CmBp5BiNgNGE3dKTLsmU3jEoFdjS1CAohNAS674TDj9nQJh3CgNmzD23",
  "key16": "4mxDrRfyY8jiP6WtHdLtC5Zq6Ewqwa2yjnYS65XHTLLMTjSUMHSDEaMtfYfRb4Y3wdFnQPC966LVypghR1ASX6PH",
  "key17": "7kF2QfivSnbyt9URBZWPjFiHD5u4EUU2wL4dJW1sVaZFsYmSZ48gupitWNvw1VJRrYfSiJH9U4ZGvt6K28WkxyM",
  "key18": "2LSZPo7QmtpxFrMupnuYHvK97tZirSwZkNawq3aQc7CcB9ULoptNjfLucHkW2JJ5p1YmuYuoYmtSeWxNZ7R2AHiN",
  "key19": "3MaBtec5EhTRXWKDLm1xW9HCe16CGhsFhXNkL7ABy5ZUdRhuu4CqjvKthxVZgZeBDSTrBfEUDMajQ7SAdt8UL84k",
  "key20": "1HP65mYCno535o2zUmLDdPkzbc7UcWwukVy3s4AwrBYdZkfFv1Lt4xUnwQ9c8xvm4ckQnxyakvXQwmseWDtoW6t",
  "key21": "3n2EUKYDve5d3VNR8VwrGEbEGsbkzkc5fzcGrm4jJMbWtEHbd75nBxJfofsordVU6ZJ6teh15PXkvxViaTYekiFQ",
  "key22": "3zWk97YGa3qsFhu11XjVmGeDWYbazKcpW4rLPbBV7aDD31HoF2525rZs4ek2kGcMP2HEgvp3jqYC2r22nCjARNbt",
  "key23": "3J71z6tzURt1hfHhmsyx5xGNV1hhs181vngjMY8VCKbgSzHsKzXDdZ8FRrVnjFojHfQ5hiqYbjNKgpXZAMmjA8yT",
  "key24": "5CsgLKf8YEqAQNo5eTbpCa8FyEW6kMHkMyqC7uYCkVaHLsmN1sJc1UhqJZWhPerPZXsfM554Pgfr3bkcJcneeW8o",
  "key25": "4UHZ6G8rzDtoSLka4gE1qCQbuUQUTC7f5vRQgWi7LbdvMJSena7kRUD6z9Bk5sAPb1GckaL9kmXfDs5uqxAr3VdS",
  "key26": "4x4kPbbqknzXDujgUnB5hju426deS9hG4zpjVKtRwuZHSpjowof7F1XMdWsup4FwwCp6c2XeLfjaH2gfTXoq5uwW",
  "key27": "2B8ZeHDFgkPzdGQwjb22nXqVcKcDKG6fjcaPhGPydhsoGWZb8t1GLRhoJhrPEDXGBBgFSJTkzpsS8gGvArVJfsF9",
  "key28": "4Qv8XgmbCr1TA6QnQ9aJN3dr9ETTvALs59r4e7xs1xwUHvz5xspPbLaF7HcjamvNfaJXH45i5kBEdF13BPdjM5SD",
  "key29": "3wP314PFsGtqkwMRcpGc42tYt8Cbp7tLDE9JSq4sRTzHaSQEWazFRPpPFL4shENE9SeS2FeMZHR63S4NHxA2jCmD",
  "key30": "5rVJ37CstnSRDCDiC2aT4gTHLYB4JPsWMoLuMuYgC3iAgR3YacJUdy7Ni65ziT8DSvtUs1Sho7sbKmpQyFrL1XPR"
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
