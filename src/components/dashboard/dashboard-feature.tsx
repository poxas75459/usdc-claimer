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
    "3sGxz7VgdJpxPJCg3aE5FvjUae2BGQcC18VkB6Zf81gVSEberhEfK6Z7X31S438ni7GR9PwxNtuYYdX1qrMc3TG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VjRqJ7HcAYUCd319KgtfLTb372XVw3zm3CjeLnZQwgWT2BVbTfeuYf35ihF1fmTFrbUgiCKevCNpHpQJXNT9hA4",
  "key1": "4qLSeGK4ohJqfncZqKFXNsjk5e8Nnzzi8E5jed4oXTH9fmXTaQXtv9f8gEi4K2aZcQW1VChfiuxhJjHPLV2swcsC",
  "key2": "4kXQbbkysEWphP3N9riP39Tyk9Ez9ZpHEaRJ3oBMbVDkrToQbzoeUhivG8htjUdbvmB87gqNSFQzVL8zAzngNd6H",
  "key3": "3z7TNMm2LpBeKBFPsrb5vEuPPeqMvp1jxG7R8qntdK9iDfS6joEzHfYQvrW6qgr85nPo7TpVPHCdwaCR4e6Li8x3",
  "key4": "48HTNPSaGMFw15KpX3ZSkseBByzHY3hfiarrJjCt3xBBHVH2eEwionL8TQkUosm5oSb5bDDvnp1pL6DtQqsXPbri",
  "key5": "41pMuGtsFT2ZVbejPAKvW5XhWvs5ZrFwQGJrazc17kV1jrX8Y2MEJd1Tw1qjrMVmgFU8U5WiumqRNeLFVwz97dx7",
  "key6": "6k3DHenwwkvmf2tSQwpYuVJ9Dt1sPXBhKmd2QenLF26nwuoLD9oDVr7Qyy1dWmHVW65C6Gnt5omcqrouipe1XYK",
  "key7": "4QHtFLMm6YytRq59U5ybYpWTGedcGurcJi192iFDMhmVCTTosrzaLZubg1TVtbofncq2RRpkXqdTihHSS4bbRP3z",
  "key8": "3Ykk2sokgAqJghD5n5SJYFJUZtxDnVxmCpXHwxePpoAMKb58frRZ95PS9U3h4TLSFX14JnFYD5pfMWRVYtGNYNvr",
  "key9": "2odD35Dn7Qpbf9VwcL4MqyUgLm6jDbjwjYjbHUmz8MFo2258JuQ3GP1EUGcLemBahi5TPc4Z2yJZkrKBnKHZAA64",
  "key10": "2GyQskoJQPLuLVDaYgonj2Fnmbm5x4Gt2XEDShiQ98Kg28DdoBkAPE7n1tMrNd4MGkqxdTMh178dzZZ2eRhWqgar",
  "key11": "pDrLjDSAABipLhXkbXR7TfyZJasc7q7mCXjFcFZGani7k7yrZc4czdkrbaNzoFkiWa3zdcg9kgymEsesdMu1WGR",
  "key12": "gfhTQBkJVq4q6b2KuGRkg7EVwxLj61cBgKvTGKRgpF4E4xJMzoCfbmzA2dxX7hREqGW7egzVMwhjUUyDRD3CrCf",
  "key13": "4TkYu64AVmfccm4ck1zDQYMSLHRHSG3fYWeXF5Zkk6teDHvmWXVoEhbDW93pW3Tvx3VAKSEFHiAY4g7aERQGpxas",
  "key14": "xgciDDBrDVu1e9HdVkrULjpVQCBUCN9tdKaye6X41xfZ8SFAPRMECkmoHUNQ5e8MPUCC7LQQ6MB9yaVDMuFsY8U",
  "key15": "5ybfrXpDGeEKV8fn6vvQqScLv2gQgecKmrLdg518v7PNiw1T9ZNMRBVKcdy8EfgMex8VcfBw6v98nzih9Mi5oxsd",
  "key16": "2geFJWkZqDdvwyVGX4VaCjgWZZ5W1tJdTevV5NxkqHnkJPzkLojNyZv43DWMUhQv8zH16BkDtcCxRGZLEnpKnqmJ",
  "key17": "39N7Up9A6ESSMUUwtkgFr1Tdnnp7RenUKVf6HDDQLP9Za54HD3kKMM5wnGwHaQAsfVJanzvWy82YKSpz28eGqmn8",
  "key18": "62e7GZNtf29H1zLxPLs2dS5dCm5mXjeQjFckXfjces89HtcpQhDm7xRoNi3dynbJ4C9uYEn25rZierGKdaj45JXJ",
  "key19": "2nQUKFTWvhuXhSJiYt5ASEsJCBfmuLWXuiK7Yij6fycQzhzwNFUFnszPTcuEhzU3ZAgZS7DxxBA8kyBTpzf1cj1K",
  "key20": "3qxw3MCPzKtUYs4yd9URtQBsHfQ6mjKDCXySxp2xXbgJgqDV9NQPCNmnrWF6HbtLSU1pgnJZULABnsvhw7fSUeMa",
  "key21": "3cWyxpYbVRb7Be7U5xAHqiQQgfSsd9miVyjna1iQdL7amFWx1o6NVBsLDQiLMc3yuSBf3w7YSojHpBBpPrkG2PF3",
  "key22": "58ss8iVimze39g2HKicnBTyXxQHtJokwWqmXFpSE5tEwZ2k49TuRUv2EiRwmeLetVmFqALYX4aEbzop8JbihfRBc",
  "key23": "3MXn28kmWaYUJPdD1VbqKfCUqGe7pypoLc5PT73ZSjfwwBendcsEUHzjKq5Raa1kqUayQMCdw4Zppwyt5GEzTYB6",
  "key24": "2niqTKa9ZAN1foRnL3Cx4bnbuo5Wi6xCwDHT3MZHgCYATFD4PXzrrhwjpMZVWFJFff6oSMN2CcqAmQecSaFUMxc7",
  "key25": "2ZViqUyzHqHY6NkNiFftHJNvKrNFSDF5o96LyC9HHFyYbRsqdnMW7AADH1RMNfAA4iNHBL4PDWR8dmmf4xbALopq",
  "key26": "3fHpQ6Kc2xMskdmmSidqMwLov2SUWBFh6iRdAjbMtMTeViH21Z1BTYsTZmEuQ8XLVYGpGNnVFcBih9rWv6Qkd6b5",
  "key27": "5ktzqagsbSpcpdXie4qsxSHTRjhw3GVTKx5S1se2dpizy5KbgQ6QUT9XnN9L1LZQmEtcGDMfYrvoC25XRgwSDLyZ",
  "key28": "RS2gyhFHiUxRjoYo6VzJxDjB3pKzXQZoHYgE3E6X7q2u99xAoEaphb9z5GrZ8sqEz6AJRooJsCWJB6wo9jW1G6n",
  "key29": "ZB68Vt4USHvqD8Ah3emJh4re1xvVdFqy4n14KWRT3MYvBF3tJND4mL9HCXZanvxYmath7nchgn77QYkGJKUpWQH",
  "key30": "2tCo3pzLkCYMfNb6KCQbUeGeE9R7A9yoGdb6bTGtdQ63JnvkD7bn6VEPVCKHU7WTFN9Q3Qgx2EP9H8uua797akNQ",
  "key31": "5TK35LZZrGzdjvb9hCsxvdGAvtwiLz8wTzBbJvPH68r7gR92BzUo5mT51A5Ri7CBrb1Jiy6zxvpi3gaU6y4QkMfA",
  "key32": "4vpdSDsjSkDE5AhHpXfpbmQopEvKGjHq97HcxdgmrXCgH7DJNwmZnqvFnzg1dWYYra5E2XLqfebqZPouwte8wtYi",
  "key33": "59qcPqgj2WrAT9vUZjhHyQS2j7UkEVPwiaChTGPdcwBXZ1jHEavbwsb7mP5hXXjutJECZihEKw3HAP7bCt9zbrYJ",
  "key34": "57mf1qCuqupjqsRYzpiwKUggLJC7DLGw13UNCwcjZWZscxpJqgAaMt78kpHuip2CT8aDQYGFiEe33ybLBPMffs3W",
  "key35": "59oxsuYfVUkusonPT5fNEkshjyPuiBxQy2VdpFvm5H8mnK5jz7FQwTWfd62AJyPT7D2VawKHeeXVS9rM6G9nEEUq",
  "key36": "44CDMNNcwNuRFU69R9VH7sdTogAfUZUoCUzoMZcoKfpf6AyKg7yWZgAhdfSBvcKeKLSqnK65eU6YoMhBDzKzWtY9",
  "key37": "5KCLjLmS3Q3e9LhEXyTaNbiEn8mihNbZs5jhSLTszU5sbvtf9dt91eW5k6sbn83ytL12p5CsLjhXg9NSB12Ps2Fg",
  "key38": "3NfbkP89PXtkaKG3nVVYnneMSs6PQzAapc6sSZtJABykMjaLMtz2F8698p5tWhBh3G5cG5PtaqvedM4Gt4LYWdRB",
  "key39": "UBxpkkgWuRHTNmqHPiJYfQ5uHgGqrFqCRkwZmqHaT4pm7Hk49psQKojQz8tWKcALumtrHZwdeG3NQ5P6W6UicdR",
  "key40": "fNS3ArEtT7gyRzEcfTVcRSpCAVM9d53aWTS9ZiEeg3yzh6mm24qLTrpSkwUiikapbn29SZqFHYuG9AWB9XuC8xY",
  "key41": "3oTu2KodowcqTeb89Q5e4AhwEe4JSREGdatXcCLa8XZbjH3QGv7p2AmPWLbXZo6V3XQTKBUtzU4RgqSBW5q3SmTx",
  "key42": "23jP7iZ8jrqDJjq7iorWpoqiSczBydWxh951cxKYfoLaHTCuwdXuJW9kQz7jQe3Zpf1mUg115BLUrHaWNWrt5e52",
  "key43": "56NQiDC92L6qCkyuB3qHK6pmg3isyLS1PYH6Y4L6gmNFbdQyDjWhRzqVkBMM3vRrdXqqfuFmgAuLQ5TmwBtLPFJM"
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
