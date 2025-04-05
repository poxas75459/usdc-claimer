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
    "KxDVZw32QTqzPQB2qw9qLu7Mpobpd8VLNLjRAym7BAkPqC1y7zTJXRkf26KYCmsWashEVMVbN8SQ9byPUiyfXzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXJGCFKosrqL1chsPB9rWsCa3SMhUhjAmWDmHnGXnRua6N7WhCAyoY9eu4BrDYjmqjGpuE9gJGoBSuxqVJPcvTE",
  "key1": "3gJtKtX7XCd7uVCULzkJgDmLfbpoMeRDP3D1WAQpd2W2voCbQEy4i5XQD1KbZTEeoQ1wbADD7kHPnRU5mYPwitdG",
  "key2": "2Af472FAhbSordHkJzG8Z4zWDMQ8zR2JXPyFe4xUVzBEWHPZZSXqkyRiAraqNoZ7yuibAvPbfQtMvVzdpoBL15p8",
  "key3": "48injxvfDiEQqsmEGio3dEhpBDq51GxjrZ5eEMUDmuCEwH5M6gzqhXdjcYyxWsF37GxxWfdbT3MVJjFfo8QrADD6",
  "key4": "2krVnLDGib6a97GuMxACsXxrfhakQP72PEbwJVMqXKyWUzaD2bL1kZSzLV8qhBGcrJ64ypXtY4fW7MrHbDquPvWv",
  "key5": "48qWjdGtDLdGNhKBiwG5GZ3txEFzMrhfvaxpBmHqg96G85bj25y4bKjDybuisoZH72rS49sG9jP4x4ouPq78ed6n",
  "key6": "4nz3U4dfedadhG9EgTEnp4uiKU1ckqMsgr6fJwUF4SbWUtpPpPmVDH1QmF3aJ7L85qWxVWUFHXV1SC1Ni52aUFfV",
  "key7": "dc4Qh4Y9iA3vz2yYXTEvNCFPuGY4SGb6SiGopcoU45gxGKhUZBp8EK3651JSKqNpxKSk6rWg5DR2x1UYuezkiiS",
  "key8": "5my6ogPF611C6ZwzHFC8diw2yxhSw9eMv2kEBE9CewAMJ56h8AtzQFKyJBYxPE8WoMesYcdBzGXVQDYy9L26Xp4R",
  "key9": "mfU3bVzTXByASryRJJf6pFnXeLbg9jsLZ7yZNCwK6fTNjLyQKew73JnrzxwmQBJXmWZyc5AWKwhqu1zvcRqcqmX",
  "key10": "3696TevDyUMwHbbxvHRGbYXora18bka1j3172JcW6Udw41hcgMBUBHUgp5iXjEc12SQ9Sdaxm1PKZRbb9GG4uQX9",
  "key11": "rPfdhDM6amehy2KbRvqHCPFqgrEobvVa2DfMv521uMPHBKVnKvsDKvF5KmHG4xtEMXC78coX8rgXz17NCS4rWWP",
  "key12": "4Y4kZforNYJD1HunbBgrqc3wLw72dnFqyGkGVEiMRFoTx2kv8dCjjpVgArfisxVD5HZYfdRQmFw3THewJsAo5biZ",
  "key13": "4sSYPhrY5cV8sThtesBzhH642GfwczkVvkAiaA1siR7rptKFVs5G8ehiEPSsuXveSdLzvKXvhy8gfsDfzko8y8Dq",
  "key14": "51sBR2uDwBP8biTgNu6rgXNdADvWKf255YT1tFqnq3Z4DZut9ZFSHwg3FX12BHBstB9UiL4DtkSY9f4CFVkJkPPb",
  "key15": "REBb4qhwhRALSLH2cwQmkKVWE19PhB6Br6AjaB3Xmu2d6ndoAaYLmf1VLEVekMBBWZBidqLe4kQ5ZkajP68Smt7",
  "key16": "61PHmtsGcW959Z9FrVJ4gVbnpLzLVrVnMB2GW87v1zrowmhB9B8ua8w3Xfi2zyLKVQvzyGVrCkmS9QpPbHn5W1sV",
  "key17": "29kUYsedbWyWn4QtMRdEZvu5HoUWt412DASS6Qtx78unWfYqyvzMh6D1MMazV2yJ82cjw5Ea6u1geHBEkjdWdNnf",
  "key18": "xvj8ZeN9YBxwF2DwR37DCAc39mukKkEV9MLJuY5MhpUQyHEVqMNppkeGwvGvreYNXqwCNbVujy9mxiV5j8zoY2y",
  "key19": "475SPAnF7fLYWWsP7tjxHtvv58AtJPUjNR4455vxNYUTWCnQvK2kDu7it63duT3Z6Wqz8fnd6fTyNgukPCWJkKig",
  "key20": "2RsvaBUuGACeW871mgQC75JKT9CQpHix1FzewTycp59n44siXcDohEyM7ydo3s8hjxSsVvsws2neKnV3shx9jWBu",
  "key21": "3WYQX2tfu6czQKtAEmUtRbrHRDXeERDnGG4Y8qwbwDtzA3gQ3xruNWspMvLwNGKK886mUdY11RKuXw752VFURHHW",
  "key22": "3ENk4h3SNwBPvq9WGzfpJV49S8oLaAkkVA5HHKbpV5MnEPnAweBHY8hgdR4o1ibsJjPsptScENUsY57GMZzRJEGr",
  "key23": "4CyMeP8McVEh1o5GSKi3VyqGgpqmDSManvsuFphXfakiwcHnnZSPG2sh2panuQNVmJRjUdWgJzvBtLsobQRgjE8b",
  "key24": "5W4SckusygSuaG2iThArGFVyNnAnjipSw1shQErod3N8VST1XfCyLq1kFXzKmnQGksN98kS6jywuDMbcZD3jPgYD",
  "key25": "3UH9gexXMt1JwvwcZk9jcxLRECLNvERTsPNSxToahHhhPviPs45W6aV8TptRVSnMEJwNxiGiaGhQHga96d1mpgQq",
  "key26": "4fvSLYsR7MQYxk7hTsF8tZzFK3J58L6pcNLpiLZgAR1DTBMsUL9YznWaJJaVpBsE8j91YwqZn3U1aFW2EqKre6JL",
  "key27": "5iDvgKtnF9ozk4NLMhsNQQqY5H2rQ15D7UX8cuDEHUEMKMh52poULbMwbQFkAaQ8THTRnK7JxqsfeBAvbbqfvTPW",
  "key28": "2zM4dkGrih8cbjJng6TLavySCPQnXAyANHMbHEP33mgRgGgJXZyaHaLbuvkDMCdiEwzL2dhZnauqN1pGe8Uab98P",
  "key29": "DzY7Cw2qWUiCsZDLUp9S7gWDhLWci8GNhPbCDYxBqJqTa6cBN8LUgWhA4BrNBsjMSbPr6KYEiZnmd7HsbCmdGBo",
  "key30": "4YhHMaGL2CvTuXwgVNY698r2WUYgyG2c85r23nBK4Z6DV23QiL8xctNmNabANfs8EAmwL9dTkk19yunYbGPqjdyL",
  "key31": "632Md5c4rs3QU3RnQuwnXFnYRcZ938tvmZjWf8f6w5opsggLZoCPQBMry3jGQG7kXA88DJtQ9edLzDVT4ejVBZM4",
  "key32": "2gvNLhSKT2xKhTR7CKeUyLALuoYbWZmF8EaSDUvopqQRyAnZRDW9zSZAAKQFMPmZm2wMJyGYJMccMeCsEQWvLrCT",
  "key33": "2q2f7tsk8nDiE922AsKgw17cw4RSGH9A8nwBVoKdqMFotxvXXTkFPLKnNxTaQwckpyRY2Xn3Va486aLkWDa7EkB6",
  "key34": "3ta7t85a7WB8qeWYnmX5QyWBh6W9utTbAoeXXXuMxSHyLL48vn8RpywqiF5xjSsPAsvYR934S6hNF1ff8DkwdfnQ",
  "key35": "4wyLtivRVkxZJ57ej8mSvXqfM9dETu58nUvRjKt83BLvU7Y3GRMpkhixnCYpnV387R8PFApNzTWBJemf9G8tk4EH",
  "key36": "4dHmSiRNmxX6DQyPmP9mALDTziEY9ntgWdgWMKAtueRZWnp5zE646WPNweQ1xiiKyFHhrExYauF5UqBAvwqa9XCy",
  "key37": "41C1moteG7frybU5B2EgfqE6MAwcXLjt2bEtBxAEqkJ9S45rKHxFVfkrVMdF9jGfGRtTRz7L9ZcprqeSgkAhSpgs",
  "key38": "iZm6ftxmmhEbdvjEcL8n2Zpp1sG71g3ygjvBCiGXiEgBo8tPryXb1z3VaJY8TeTT1hYBor581PNJWvs4fKoHRLF",
  "key39": "45VRYmnTrHqt3DggbTAdvQgeEN9gQrRT4wxd49PjEvziD6kJJbfJwgEMj2wWhDYstSTPAEJXNxX66JK6iGrTUnmd",
  "key40": "d9PyqNTndWQHUdALFNizKL91W9BoA4UwvXXrfTMmHzbpBoadYSWSMqj5HKCK9qBrLyMsma7KfagbyvqvGL516kF",
  "key41": "55camso64RTV2Fa9VVs2CGRRtbinydH4diWjCP4GkRZwZXqG4EyLexeZQtnCuoehKRwhLq6fC1u4Wq949VYF1H1H",
  "key42": "2Lnkqz1rSXZsE5PpMDrL1Asf1ghaBqPdEejhkuRo9Ksh2oFQNiUiu73ew4GwCTKe66DSJb6hsEweZe45qWjox6oS"
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
