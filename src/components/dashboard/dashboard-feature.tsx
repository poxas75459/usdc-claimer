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
    "ZrNBEyXUrapQAN95W6Jv3ffxJTf1xVa2Qq9ahx7R8mZGRMNLtoBd1owUKQbDhY4oBKQ7j2t4vaBkGcTTZZN6xas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmHDi3aqLNQt3yKKxqXYdEbZy8LGSCfWAg4CiKwb9jmrggCxcrFRRuGicCzyACxn7DccXMEp83yPPR9Lp6UanJS",
  "key1": "54HhkAJWf7daF5aXLxTtb64x7Nhxz1FRfACCLeZk1eNdU8cuXx6guiwPWifBDc1rWfgEFdBZCCubtdhmeiU7A9ex",
  "key2": "2nY6WixY7wKJzNfK9HXtQfkxKdPBHeGqSjk5LGZWCVFUm4B2YJvuAqnmYecCoWaAJDspu25F7ua6msV8cecDf6Jo",
  "key3": "2oruCFzEuigfZK8U3xibJtHG7A2tGccYBULJnufhPAsDUuwf4sYrQVsKJqATsHt2xC42VCZXQADNt4mbC24bUZJh",
  "key4": "5bpBpjZp7XRoTnCBVzYvKmsTNAr3zVqQ4RTmfb9nHyxRpa9aUKykL5ZSdreUF6ovy1vS3SLHXPgwahyZNSpVYpdU",
  "key5": "4f4iQ3uJGwsoVMfVBQsw4BUD9p1K6Hdn9ESNJ1H5VhMQvbikZQJLs2DpzmtoyMepkNBqjFKRH18idU2VG323n5H1",
  "key6": "3xjVWfAwg6qMW96f5ggUSDQp5TiTwF9o6Q28yY2ydeVcUiqLfTN3PyVUkHZcMNaACnVdF6qjxeWY5X8DSQFXUyrr",
  "key7": "wiaLNiywk6ykrcckEBpvbwgesiaoq5UYoR2Kxth28XSmiZeEzqjPgWXbPfjUuEvhDf8FNQgtKbQ5dsJAjXbL2ip",
  "key8": "3nKUZXftWwikdVkzeZ5Y3t9ki3m1oQjBmkk5kDnD5AYzjM3wNtVm15PSo5z999JEQz1AbfENuSnRZzcVDxRbSFWd",
  "key9": "2m2FDJv8FxCwRUcwaeSdALc5SfSkXRV92Xz9WAxAfC6uh2SNBYdmLgLScxAsePNUwHJZLPcd5AWSGxRcaSA6D1Sg",
  "key10": "2Rew137893fqy6Wen5wzFKrMV2kX5uzySgtEZUr2UGyrDLbeACeiDYmM3PuA998MHoryJJi9Vc69HFQtcfDTcrSy",
  "key11": "2BdAkQLPNiY9FtbdBLAA14bzSf9zqdjZsNn5vVc1EvNZQazFntGfzKLdDUL1NMNFHRRCmmVSGtK5XrHYeh7PbJQe",
  "key12": "3wuzWVVGxwcAn5ZTJC1cXJbiDfME2PjjzbowBStR5UBbqWrNgxGT6xsjdeXciWujYUQZw4rMrSoXFnCFhVohoQ9F",
  "key13": "3EAs6HS2WxyGTTB7etMsapi5szeRyeAJ6h67hFreyLAZykbW78puV5j5UyJ1NTQZJe9RU6xzkz2Cv1qzRSiH8z5N",
  "key14": "52gAPXDRDPeNZBvGHdjtavAuiCTzzCZobCh2AkcGy39w4kq75vxz4UsSJP9kAASGmvJ7NmsNBHv8PazafMRjjyTE",
  "key15": "21GtvthEbhtDx4pKaUsBqBgP16mEVEuE9GZTb3SMNk9sV2TA4xx4wFD8UF814a68Yz8qXYGtbYmjcCq6GAvYmvx9",
  "key16": "3kDo88XjaZmvxjQHsNuKZdRdhVAj9D64AafgewnBJABq3brtU9Rns8TJzYzHPZcQJM2nZqdDAt73S2ce1xe9XWig",
  "key17": "vKUvAVx9VsX1tjRmZg6nYL12TeNTka2oUXH7ezKjDMsLzz6PFHybn5w6n9EVQ6Ziasp1escB64ELW37LxMXSyw4",
  "key18": "59pSeikt3LUX1mbahFDhRSQgd9vHkRwAY59XfWM4X9cfKvuiP8TDhqWJgC7kT4ymuRiYuGYRU3ibNaaLWMTmReY",
  "key19": "5JfjJ5AVesS1DLVag2Ja68xoyrVG3v3SnwH7hnHmmQuZgm66Vmx5oUPS5vauSQvBKYTVVrZeuAmu9qdE2z7nSYEP",
  "key20": "4gxKQS3MT1CYYHJ4zaMv3yiEdBa7SHBaXMgAs6k5ovgUbzgbMD9Hs5Q5uHt1PY2vPm5sGTSntrZ41mabChgKFWUi",
  "key21": "51aTZmXod1xmcSf5KemLoC1nDJwPTA2Ex92QrwzYEonc6ZwjNzTjtQ6MrbHPUpLreq5z3kr516vJBYpaZom8hAgY",
  "key22": "3sPXnrM81TRKxVJ1dgjmotwUnaBvgSPLDfoD9aNspWSdNpGvkov6fmekZpg462d43UEjHC75J648gkQ5GBm9gSKk",
  "key23": "5n9quocPhX7UZoBcAbuuZ8G2B58CcJZb6d8Z8oYSYKyQEMmrC9CsMnwU5LrxGRVvBrErjYY1rv3HzzNUFp8ifw7K",
  "key24": "3GVUKTT5k9BwxxTUHt1hrPjkSdPceEcaB6VfMpFtyRBuXe3EGASQVQhTvNGYSdi77WMNPVZ7ASBMhzFV1kcaaXw3",
  "key25": "4oJEh9LSb4xtS4mwgM9hCEM3WbnBpzQ1tqSNvfLnAqtWqQczw4M5QhLuYUk4Ko7znvGg1feVeoogQnAcJyeJnUDQ",
  "key26": "4vkaVoB5fyw2TUpT62NDFynFJPMA1Wg5PzPTVdf5zeJCzJTmDLx1ZZkJkcWL29NRgmP9Y9UZQw3WFHk5WbaSCvxd",
  "key27": "3kSG833m4AtUMWp8hrFnK875Z1YTS4WqrRBTnQxEVyJyyGHoWtjzKSMMvMC5vymGs5FhD1Ff41EP4EpYwNR54Jg",
  "key28": "5CZvdVPsgH5ZLSMYEvFRc9sg5NqsZbvFvn6hPWBjpyX6cMgvKSD15k1Z8hXjHjr3eAqv9Cb9kFxxCnbocaGF5VBz",
  "key29": "2XZk974KLs2iuTUjRamgNcSnMPgjZtQ5grEQbLbVapihv3xo54pqeXnVV8LobSFd4we55ndWqzaWKhue6zgssZyi",
  "key30": "37dWaLm1xwLo9J8DtRJ7bcLdc6BReMFbqeBTMFZdcfhaaY5rsV2afCwLYHjnEySgutV2QDPK6PKt6TPd2q7azby",
  "key31": "rTpKoaN4QKWHufbitQLgKx5iwkBmhoQhhGpfhUWNgoBa7Vb55CpugMk8aZ6a7gZ2LKQpqhCx7ZYEUiNtcb7QPNk",
  "key32": "4TMm3VSmAX147B6rtYCSfcNheKjHZpoCvZcaEFfX7L1jb9JX7qbGcQr9sMTHXyjGigY2sphf869HasnQaUnmhFjN",
  "key33": "3RxHxuE2YCmz1QyosjGfaQpxBQwxD2gcVsiUfYYMFpiNT8KVWAwDRFHeXedEZm8xs1KMiKHpXU9qSnjag9vVo3LR",
  "key34": "2ycdfKjs8GyMo5SHH6nvqm6bk5vq2BpYZfqtTaUJxrvz6sXaBxtBMkfQCcySkWK7WqW3dFJyVRQkpyXcAjWmMhKj",
  "key35": "5eJuK8Ke8c4d5PFbootYWHmvw56r1Lbhnph5byTYgWAyt5GimhCPnJLSVMLo4dnueGm4AsKkxBhHkk4hKJPNrg9n",
  "key36": "3DqetoC9B2cFprQZxavFctXDFTRHG6F6L5LU4uYhracZnPYwtpqrcWukrJUJWz4NKYjGmr9nMk3rqqBSiucB3FJ3",
  "key37": "51zyq8PZE5HKdKfkqHaA85Lu5wXgW5wU2ZPRKYVBwvZAHnx3hqB9ZCP7gojGxDJwDF9JJ1iJEv6mnRZBhohqMxLt",
  "key38": "56oVXpvLVwTZc7iC3UnpGtnfAqpnn2PhEDC1C5TNq9vkgWHSXUuoVg2c4FXu5MWJzhYfye1QR5LpTu1Uy5FDg3Ym",
  "key39": "2RwF1dNc4Hzx3gttBphi9FzcKywyfJVZvtLLtL39gN6dTuJ3x1CBsHKXGUsDpprjmxymhqzRb7tw9FXgfWfJsssf",
  "key40": "4cuZtr77WW5vhGPj5hYHr6fM7MGE7iXC7hQX1A8sMeYYgAbmrTJo1RT8cEjzWkLE78UdpM56EnGnms8HtqhpXCsa",
  "key41": "VtZW1uauSDN8MYn1dkhjAifnMVczPLiL74ReXvWRYSBikbvU5CXqHR6qwUQdcj6RqDiaptfn5tiqkbeD3fVfAnc",
  "key42": "3b8TRm7v3EgyjxsDiS8FGPEZm8NUXS3Emy9gxayJjfXx1fX7mpHbEE1Bs8K2prnNE8riZqApzSkfCos1st1WbVYZ",
  "key43": "pPDYXH4Ue9EG2AhjSvo4pSqz4gD1hf7beCoonBaWKTqsGW3CiE8LYZGcTnnpkiygcUjdzZSWaxKzLZcz6ET7CaF",
  "key44": "2QvmnRBc2gcxp3Dfd42VPfEYS54FA8NtxqqBjBaPyvFMZPLnWA65mU9UZhcsycpVZnyAANbLgfDE8EpELogSetbT",
  "key45": "5LYZUBPUUwx9zNGEbDTBNmTTsMYV8MPhV9F8bp4RuZPtjLzUGjVw9ZCBVk2denAk9Xt9XWJjrPu7DGBGDSUgXdJM",
  "key46": "5jBat3RY1R7azEZUJTcSMVgk2CUXiN4YBvX9SpEw6mFBQ2pKdtpiePbRwQ7nEc615VDkZ1JHJXJVL1PXLZG68DNb",
  "key47": "4CNwTSQdkdFpGvamyqVrkJk33vDqXVHRwRqtJzFRUumgjvwkPUL3pwpvxv4JfajXh8mioz9ZTJsStxe99Zpcgpi5",
  "key48": "4tX5zN7vB2QLgbRtgFhNVSkUCS1M9i7td2h6f5ZmDEHUDSeBHg1UuapR7d6h3FmcfhvEwMowi2mCUwfx3uFA4Ppf"
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
