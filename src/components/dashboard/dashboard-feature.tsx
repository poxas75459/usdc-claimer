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
    "GuKsYBYzDULmHxMjB2tEDmPRiD91ag3mUy4DVJzY5HQWJvYRmHSoVRhTzrTEpLrz1rT2f5wJSZsL2fK8Jwgh7Gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGEm7B3jHWN3CHQtKBxZDbjG7ju1Nw24ucLC4ndiNYGtMg1NDk7cfPcrV6Caw5i5Bh9i27NzwebkiF8AkPmxzAn",
  "key1": "51ksk4Wj38NASrHzegPEcZxCpk3DG9QjuC3rQote8yrLS7M1WWfeR5rcdfvyGoJS5ECdmrgcn2Q5KdmRu42qYA21",
  "key2": "2qdS2m19f1W9trTPvDddYLNN6pqAZyjaN9iHXkQKoaRLaW5VNNYVBDNR1ucJ8c6a7N4oeCwuPTANYM8JkYHSuhDk",
  "key3": "JpxarieZZWq5zkzcFeJ5SuHz51asBuM7QiF6YsopgGYocqzSHPkXKE5JUA4TPniC8f8reP4xUx4vE11P2xxeTzd",
  "key4": "oNvTb5dcDrzN2LzcEoMouksQhMhJUB3UAF9Q3fXY9dADwZeowmNaxhyssYB6mEfghGuxAGaLdkvocZKjSDtWTBc",
  "key5": "3GjuwtSEqG4axYYQFZt8rDemUDqYqeQ6B4tujM8rMEJ7j94YNqTPQtZ7HXVvqxcuadWpBGPY3hURLK7FpnMN7y3X",
  "key6": "5RkxRVURBdaGgDUjJP2i6WMzeEFQH9W7QLgGdYxxsah3TK3rdrp5vHPBGzUFCbfRVqcbJgRUraCU4bKzNWyfGWSm",
  "key7": "2QHubp5bv6QAjeCTkXq8pydH4D82WnjAqMKSYU5k185WZf73BTQADgME6NWNAeRJqm6s29yHYmyyxpNym8yNuV3t",
  "key8": "ZjJdfJoLfdEbKtwQ7Fidq74gSoAAraE6M4btZBjUFzTPRnsUfQycvErogbmofsGgCeXZy8gqCfk9T5WmWsVaawJ",
  "key9": "54E5tJ5j3q8kJSJMmaHpcn3JAJyXnS1Ls7Er7AiLNjN5sXSuDWo4VzPDy5poT3vLC7XtDFEHZicmXaXJ68zZqP4",
  "key10": "wEdiLDq4ZQhzuYVsSjLSfy4Q6ptLsL3uGnuyxUQ3bKcpRXsPwttdssRfd2282fBTdCBxB6eEpFyFiXou8MRPhyx",
  "key11": "z8RYugGGpuWWagyQZ4v5y8Xca9EmLzskwyRFx4syEBzbFbpzu7UuoQB52yFPyBnKbE8pRkBD2Y9hiAughQubxVt",
  "key12": "5fpYo4Um6om5aDTVksQXurPfstk46W4hJDoiG3cXoTTRd28EhtrfR6Upf6wHX7jWvWpXm8KKa5S7cUL9hAfEEwG2",
  "key13": "41GpAUyRPzR7MdFfwV3Ur3j9XH8isVMU3u8j5QLZZiSAR7L77ATc4ipFZGSdusj5HJpj5bZEF8bv8dnNGsK8rmu5",
  "key14": "29M7UhjVVTKnNnbb5KrhoRkKyfUg8JGn6s6SgPLqoYfgwn3omeGgHHzQ9Kn924zsVcNMgMdTuLRVPCVvXHLgdFq8",
  "key15": "2cNVVn1xQ6PiJdx9SmXbCbYUMfMk7gZy6M6dXuAXK2P236gtAhMJZ8D5DkXHdKBtqQUuJ6tXs2DUVfb7oiabFmoA",
  "key16": "5PyjXAMpQhGq2cU6vkKApipJSmWF6bLJGGEckvierR5zB3PghLegLvi4h5bLVEizj3iyWVNkGzCLHuTKFnEuMphZ",
  "key17": "4fogZmc9myXDL8Rj9jwvFTf1YHkE1yZPMW17Yjxaa373yEsB7x8eihQExWuk8avKWL2WPyorLs3PXe4YHhNsCbXt",
  "key18": "5Q6ZEzqaHJw13ZsxYpTPJqShY4zTbzKhhWrwSVZFD5PY17Kqt91MTnN5qvSV9mjhGpf2p4o1wNG3QN315Vd72QEb",
  "key19": "33pWHVwuzsswc6iYpdnqUPP5HqwfKHiw49ACBBSRLj9npE1pE1kvSSkFrdsuBUdXALEKfzjBYxaoWFwQ8S4cDFdH",
  "key20": "2w57xLWoi5z8BwoTkufDSh3m8QRTGdB6J844ANpGRQrEbz7nER4MtmYkt33RHATnPB8gVTqzEJLBLiA9c4zeEfgv",
  "key21": "2yrsumYDtL7bid7UebzR7oswyMo9jsKUr3isVW3yFwHcV297vDr3w6vqzWk5xL4DwA6jz8Y3VRZXR4hVYizuGmGS",
  "key22": "2woLmdaW9f6gYyFcVVxZgLvFCUtrbeeVgJpvi7SBLdZWSj6d5RVEEvcAcTrNqKxZWUxfnrNgnNQNGPGLQ8exGKTA",
  "key23": "61QW2tNxhd3pKPNxKo84ThdkU6eLdsNrEfYft1XLbLbQWu67fmtwJ4TKbZLuVvntm28kV78wvz2BQeVzN5RdAFuY",
  "key24": "2Pb6UY3CsSmXoqXSgkWDk1awAYcyvuZ4Yb5Hc35jB9FVramkTvKAuHQuzpKteU5ombKsV2wLdCUnUFqmr1ECXo2C",
  "key25": "37YdtP6Uq6iSgQx2tp4YWSu6VQm1g8CnuTRFhgfKmYhfMCfze9hKWBddLeNj6vMdT4mnyefiDdaMZpToHDyjNuAf",
  "key26": "5YK5g6DpohEbXQffYqieUrsfDK8s6T1x5Vj7jMaWat8WHExZADrqM7FADuh3WrivtDNCZ1necpsmnAYr5KpYPq3L",
  "key27": "3SZNP3whDtPAS12swBgemdP1Hh2yCop2UodUXfQUDaR58xeY9s2bTts4acVUKvoTZhWRq55AdBpd3o76Q2TRdPdz",
  "key28": "2SiDgXML3mcxc1vvQzCqahvBLzhnvonTdpzzKQemMm28dwV7jCHjg7dhNbgVqbDFkXAhUpEsSLnXp843SGbpDbNp",
  "key29": "JqWv3PhpQbCAfDn6pNgGJWfmGKxAjqtLE8q2nuzQhyAkbWwAPQrdxkrpKUF2MwopVg1uLpdyN25pzHNMhVahGXP",
  "key30": "5NZrAmg218pJhpjLoDoQwhfNpTWVjjKbYrRX9HrPw8NSLMvZymjtHyAc9wC2tdsH3dUKrMu239KRF9M1eM8Zk3RS",
  "key31": "3fDWWEChopWxKFkmYoST8HFYAXxcyf61K2d4pM8ZuahqgUgcfHbTLp1bHM8svy2XVN8kxWicUZea7yqgPue9mRba",
  "key32": "4DwYATN5oryGgXuJiAQZKbNpgZcCNU7B9sDUd4vgtKD92V6qDVdu8FZ5G9abgbkCVuzxE7QCgjFz3Jr7RbvPM7aj",
  "key33": "LJupGwJwzUYXGSZtMg2io1HsbfFpioKJ5v8CLM1Eiq73iC1C6o5FaTWTbasCL9qyft8sYvedwubwruF1NyfpmJC",
  "key34": "5YV62sS3ALgjVDPAhwptkFgYqY5voC9CA6vuoyDgUhw6NXnSkv3oy1KfLcHfyGJMCoSsj2D9KRppSf4oUKw5vqWK",
  "key35": "SHD7AR9VGzdGTSj2ALQMwwc4BkfJGGA6hmv51faUTLE1eQHwXyQ6PGRPLxtmVuS92Mn7mZLJNVoUpgNjbd4JuL9"
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
