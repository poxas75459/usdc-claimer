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
    "4661t29DwKkXEfGYWJiPWJ7iH1pfDNJ1H2GSf2bUbQMx5VLXi3CKGa6nrEgDoYjAQQwnDfuqFywrHTdJa9WR6mwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTE9FUVPrG5ZqyDzU1Mtxta3uZ72sJnsAXEwTwuNStGgaMPW66dxB1WBgveFMgQqFtFdEhYNtce92WxSHWTM7UY",
  "key1": "EyySwhGXy9sB47R7YjZC463PWKhqxjh3gyL3Na26P1SkugW4p2vRqPtgQqRQu37kWvjMYxZfD2weLFfbsvR6q8R",
  "key2": "33kUPLg1Tq5E9yHC5Uh7aGr86WwtVpgpWGqL4LXCofqp9fUPZB9T7Qr3EVvCv8CJPNwP73LSxNrkiswwPp7M1rRC",
  "key3": "2qeBaJjfStfCLAsnX2nQCdtK3CHX3AkXE3avTUtc6TbXJx3L1unedXeNaKsVnUWYMaR2yKfCcQM8AVP8VF2Zx8vA",
  "key4": "hRuX2Bu6928VNsCnSY3xHksZVzhiEvsm6FApnpzuaz8PJPQAEYR162dcFTNU6zQDZsrsiV2AFeXQV4PTmGXS7ku",
  "key5": "3y4SLNR77zVd3fwWFuJ5GzpWB6hK7Rkh6Qw1W9XPKSFi5L1dpmwBY2bsY5bvu5BvUpDMP9PhnoyBkpFZKM6GsZJu",
  "key6": "5qKDNh5JK1n2ibYevTGmvpkUcestkFNAEfchMWVGYqdcWohQ6sLx8CVptWrcKqXAQwZyWU3PBbS5xYANP8M7q4CL",
  "key7": "483zD8wj5t12paTNL5KLzVYcNZwBfwHWZcodcfHLR1rvxeir5TLfumhWRk4FZwDrvLNtKToxxRmZEJH5hBh4ito",
  "key8": "2Ptmui5M1zbmpzkn94Rp5wMvrFd6ix7jYXSyJ3ivLwSWv5tHLybhviahPQSLqma2AeQRyuNd5p6U2P9tYRdpxsoX",
  "key9": "5t5rTvkHmkzER6zJQ24Xf6tyz3GJvDPRy9rSXZ9VLYT3MCREg3p9676hkRj9FgAMkLzmcpHgR7fvsfT5syEiX3wz",
  "key10": "hAobXXvQUJZ1sxEGADEgRUF1un3DyFe2ZBtHgfKdgUvjpPF1nRjani8fN6Ug8KaUMws45SwJssvosMgYn7iwxxB",
  "key11": "qZtovkn6vefHZgcV7KkbNk222FH1uj3kEzpncBS17fouvUAryLqkfziFSj512iTidENUuT2xAA5cfJRFfptKZDo",
  "key12": "5YAnL9JBsXvY6gNqhhw4ShjPG6GKtB3Nb9sm3MNvi2oTD37qUAQRUJFQKox56ucj7DYVfr5HDgyatJWAWZCwohi9",
  "key13": "2kHZteC72xpj31yVUUNuchXcqcrWaCqfGH1PpW6y1VHjBbnJ6RSAHPSFXY4ab3txhNp7YSANGuC5iAqgubSQic8Y",
  "key14": "N7omvErbcVhbzVSMzryJzHr1BuXPZYgLhLzJ8VfsbkYEZN5fr3XU2MdGcXtiQNtLCqoNgaxzzDDyFhgswz5WEEH",
  "key15": "2C3hWs7NDwmBEdx2U5iQhaCiwVphi6328gu5tH727v83icUG7VAFE3h25Q2ATPFm8U4udV63FubNJR2ScVw8Fx6m",
  "key16": "48DuA32EvXZeFuSYzrLKFwTu1RrgeFrmDgyifkvtZ7HvnHm8Jh8DfqV2ssLtM2edczdWJCDsVjFMP5gnFNiVWpJw",
  "key17": "45zJhfnk4zgembtoCosGK3H9dqaTvgLAma92pFG3tMGG8NbHJHFsaD5Yr7SXcxzqm1VZpQbb2z1Yq63cQXSb5zjR",
  "key18": "129uiwNuarpeunZtJDF3nYTT5Ni75un8L5scXHs6FYXGtze8BaPmt2Me3V4Q8PGmbRk1QMia8AKFeGBCbH26Svfk",
  "key19": "6z1f3W2i2AKaNGQbFrUFkTWAziS7fDrG1gMG1CMPHLp1eccy4CzbNia8Nrnw3erT8JYo849ziyhrzcBpfdF7Tcq",
  "key20": "5WVeqHCpSUHrETF5Thg3VXMsBnpaXJb9jNwDsTqi6tz7BeiqcBDuQCFrjD3iWbYh1FVMNtCM2qFtk1ArFcJeMh5g",
  "key21": "jzsAtwxyXiSn5mqZDBhtsp1obHMN922btsdL365Hrug9orayfV9q2998PRpN15eaPhUmDKrTXAf6WruYp6Qqga6",
  "key22": "3tNYh6TmNnYmfnydrjKF3PrLPb4NuHJeJnEPgcDHxQQDqHtbTR7SVeiSEDvTYeWP98PtDvNQqJbjaMXhqRXtu8c6",
  "key23": "2VRB18c6wKpB7sWBVMbLV1Mwexie7gfukjVqG2pHGModg2m1rFyXbmaRRja9UhijNHc5Wb3SkMx7n7wSWLgyCDhL",
  "key24": "jacwMNrtPPmQTCeFtWhS7XKMhveui12zL1afkiU4yim9tP24coCNJBYg3UJJg3jcxb72TWd1tWDgzCAbh5Fvawn",
  "key25": "wiv5QrrVFREjGovZeVgXNMnuy3P4pbQEYncZ1yGHGPyHHnUhVkEwMUGVQCcc51SXLf8J78eTk765wby4mprxfyL",
  "key26": "4V6iB3irBWZvi6WYyfjEtrgrCYwofQjdeAHrQuXWhX3wZjBBxzCYRV8FyrNxxJQbdCaB8cLTcnfRUCjiaFmDUnWt",
  "key27": "2BtkA2ytv2H3Pt4MEFK1FUQNDt8tKoPFq4YGpWdVVxRqpnYPKWq7jsVUmGq2JswUUTQazNdV6PxpxLGWeVaAUqMg",
  "key28": "5L7gTqoH8jpcZohHrkvQKUNax1XKVYVc8LBt46cxiaFdkauvuPqDMJRzdtWGJyzKP9PaE8EUra7YDnraMH9zEagL",
  "key29": "4UZtWSg1rGxF2WoWFNVGXCztX1gQR1i2BYDmqChbw39a2P34fFuyRxxs6uzoXQBrx6pRtyDHmr84ySc4vwMkuory",
  "key30": "3NjDzNn3rz6MRgqUEJLCeVjZR9GyZ8J8wyvmHv2Em1EKxLW1J3GnMnierN98RV15YyodsdWk4MnevN58sF2PBp5k",
  "key31": "4oNZZPeLTnLFYzWWjLniC1cRWy9atCDkFuHGnsoJfSe5xoZZTMyX6QeJu7D9KwjiMJHn89PMC9ddiVBv56FCxkrJ",
  "key32": "2vYt6LfLnxteLtL9zNtFkTN8AeuvAUtYV4hJQM7LNKzUPDA28odrVwCesgg82sZU9y6ckSXbcGGinoh4nsBBGSSn",
  "key33": "Uzg8twYUNsNTUNzHxPBrntQXixqsNM4bqHHWekHHVVSPHKUi5uk6hThgquHJ7MyV5T5hjETmpywcandR3DeDbuW",
  "key34": "4o7X2TfdsUyHqyJw6P4jnnTQJdnGperwnQKZhGAdWuRct1WXTugJie3fJoJyc7FVA36X8CCwD9BSZ2bzMhSpRCQF",
  "key35": "5rSXXxcNWdqdzV7NAeX72fnLKSwr6FsBdNQYcEixYGJoDT2U9AcnTZFD9wiyHXU4fwR9PNbvDU9SeM243EA24Atr"
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
