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
    "4fjcxG2nKU8vGkKcRGQnHoq6u9xDYtmRmU5S6dbcFyw1pW8jXNzu33oMtS5srqADcu1CQXm3kgPmVkFd6dZwwTax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5dvQm3ueNrHMvRJvLubiQk2J9vq8SprJcCTVcSktr9j4p4rBnSAPBFcbA8ZDeJotHPcMofV4z1aFqASuLH5Z6b",
  "key1": "65Zqvr8rpuopBuhgfUpHfr6hL1wcWZPqLzPyPsrXPDxoFssH2myskTZ1zXRCYv8Q7BBYcZj1Ld14rtSQYpbfHYCP",
  "key2": "2uMKm2V3HrazitLejmpQVkJuywZypwHjbGeky89kiBk9mhYeKrWTcRiaXv1ougGTf51faSjCp1p6suQ6TeUVFpkR",
  "key3": "gshm8WPhLKHTU371dMn7rQjYr3sqByYjYea8fnvcqX4wNhew2oKny5BR68fZ2DHNkPKovzEbdE4tjWZM6wk6Rts",
  "key4": "397RJktoLaDLQN9kKrWg3ZoN8XbZ3c35MbHeKwnh42SdjJY76m6HGBv4HyCQ3zWkFgrXTyvF1hhjoQSnaCHLZffq",
  "key5": "2MfYz2eHWgYgmecyvsZ1Hn5mrFAvN4J8ei4UMX2m4SXv9Cg4ruZ85Y8SjWkkpnAFg2BFe3axCdDmrZokKNw2aDEr",
  "key6": "2rdB7EBXAovCAkDmHu1ZvTHpiFc7jjML1Au9HqjNxUGudf2m17hUvHLkxFoHYje3ppNAwsVpiWxgsjitv1CCGjWX",
  "key7": "uRma8uPS4spQZhGTumcmC6JnRCTTs2ziKR7wxCygVGciKBYWDr26VnmfvFEm9RYzYo1ZvcQVHjHRvunHC8LfNeS",
  "key8": "2VNhHZgqCgBQ7Y3DfMc4bxfPjiRqBn5sphDf5aQU82F3QvPC3yyxwxLz2Ng8kFXnYTKETLM2TWwq6vwppnP8Dqg4",
  "key9": "5JRmSvUKfPrY88vFBc4zUraiZGkiK5HiGKCs7oqCj4thUuWnPwLtLHeXXQMGNouPKms1GTme8RHBhakrkjnmW1sg",
  "key10": "25m5csCRwXGqKMiLpVtZ1spVXYYyJE2GEeSEWf51QzkHUaoucTEUmvGSJEjF8KVEHemPNnUPtxswX1YT1UGEccVg",
  "key11": "2nQojk4ge55JS2WPwuRruuxcUjfE31nixL8vzukFeagfZyVXRyLjhNzZTmKNZhRMMSPxxR8p2jz1naZsQmoCgVbN",
  "key12": "2Z9DMPSrMTLVCphx77CgzQ8jAius65HqW6CBedhKVUEj89xwFJLFPqQTmdtVfPZ8GystgMUQHsw9nRbPk6vGiLdY",
  "key13": "4G8Dd3M2mZPQazURQ7CUUZ1ZMuu29eUJbnwoNMvXEUpWRv9aFx8ZXvQZNeryzjaX2dupxj8zYBg3n6euwbLKUvof",
  "key14": "4H5z5xHyCGfdQXwdHwRLxnTWtzM9ZvtdYQUGYrv9fDdC91MxngfvtyKpnJYSdzzjnwfsnb3WSM3xaSBaXN1gbmfB",
  "key15": "3fVZCreEDEH7acs1C4idRrVSXBeACigzKUDFePoJfdU7DwpszovXDMVrChaNQkAv6k2o5xHkZw2T9vwospWSgTxj",
  "key16": "4ji76Bf2GmNnZCNYZuJGBNipF2CidFFcLBSAix2hWVt3YMtUVRqPKWx1fpGM9MzswBmyrBi2xefkNVK2Pt7y1A3u",
  "key17": "3hDMCjTmNLJxTTWmksgfhfPRQaxR3KLMDxqaRn9UkQqirDvuC17eZrEYe4xZegS7L54K5Pqcj2c1fD3qqYNeNnZb",
  "key18": "SUdyRfKcZ844hHJXa5p3A8qga8e2rQsgFTobhB78ZRq32pBravLyodjVbVznxQWbhQwoJvpxg6qEU2GWsAttCZL",
  "key19": "2mfN8jNcYjQLzchU8p9ivJG2JHeqJU87drc628dP31wR3UxCX1zpxhfd8HPnvkzTQDz9heGEDykRq7bgPBYyeyJA",
  "key20": "41ibqHGYxvKmhrv1DLDQzYj3QyGp4Kwzm8goqNr98eoqkgty7CU9N5ubERooYvEn1hDreexcZn9YPXvthFbnqBHM",
  "key21": "4LC1LW4hbyedUk3FgnoPyyp15soFWUKrUSpsnVAmGkCqqHqmgNKaqWPSVTjUws1RY2nCgf5VCWsude7gr46oDm5o",
  "key22": "5NHuJMGm6H6L3dR2LFGpDGW27gMrqPcXaq6Cj8zMdsrt7oncfN2djyvT3UtNmriWYfY6htdAm3wKNp8p75TMiaZv",
  "key23": "C26odwUcaeqFYsbeh2LKRTsh2JzzQ5FV3oztUFBG9TjEzwj2WZytXcnPzgz981MkJLULKRHbgWhLz2Fpf3CU5ba",
  "key24": "5xkuTqqiLLmZCoNuAXqWHVM2TBXgGenb2gKVW5MCpPc8QpVC19qjdUtRqFnggYSwQJ69tUKcKSiagajeevd2zdTL",
  "key25": "66uCuvohrJWzEc49pUTTyPkKGHu54YYPURfxtxbq7CBTPLJDyE9vFPiMmSps39HXYJfkzxD4sNujiUrjRHVeb1Ea",
  "key26": "3Ho152Vc4ciZc7WVvGjvRpZy29hhAAqc6xjY8otvVuPNQK9rZseBkn3UvnMWxo9JsQmE8efTEt6hvVrdpubEj6MS",
  "key27": "2nuyEKtgtQ5vLWbr1JNdbce1KofuENfqRH2W742VHvvYfqenJcrdhjn5cM9qCbZ9vBG5yWrkT3zBoKJrsPLtZv3T",
  "key28": "64LJzbcTHDncQuMSsU7GiQaetmEYXNZXBJr75rxwCGeCeySSpLTCfQU1uBdvzSa2sECWBzu7fhVM85Gd8jj7EEwQ",
  "key29": "4wCsfGBp9GG19tbTiFCxBp5wF1AM5oor5zXLBBrkL6w1a2JmpG3cwF7DZyB5qsFyYmAjKE58FT5RiavMa83i4JiF",
  "key30": "65hJVERE8KfQttFx27C9f6pgTiQiWqoTa3AXV9ZnnQ62vshg19GFwG5HmSDEtKziRWCSepyU6CQZMNFTJrkWk8Qj",
  "key31": "3jHnNYCaVCw91YwAdvzJ7oVCJfeU1iiMeYwbPV3QSjqfMMH7vtbe3LVyxFgAyWdP2DSLvCagoVqB7sg5jYHugQ2f",
  "key32": "47Ako6ijUynu5TGXoktfC4HVAnsVyyqp6pppXaj6qrsfpprWtj1W61z6VNF6D5QixbWPYNhWGFkNp9zs1vuW69NG",
  "key33": "3tFn49bcLKLnsJSg43yDrTwJwb7v58NAJPxKhHSNDjRVE5ohyE46kFuznwQd2ju19V7pwx5Cd3hawby8viTdY5TY",
  "key34": "4D6ixCXPxe5cps7zwbMqoNYF9kdCDMCwGNLhdAVkA5SdKQ1Kt6gGsC2VrG2DTLKAspfYRDuHyxNk42f4tr6ntA63",
  "key35": "36jBAGByLvnYNFpbUEmdm71h9jRYrEcYQTPZQTD4RAivdBWgENiL89i3jCw4aNAErHqGdZXGygHFbRDMvWmJvbfD",
  "key36": "5CvJscoi2ePaAVn9Y5PMjqxPUZ79sxrhFjvKmrgQZpMufNwr7gvA9dkHXbrmCctYv6K51cDinThWKBNWSX4gJwT",
  "key37": "4rGx1o9VXYxip8fT8fvCCzUyfFVSpEQCSPotQsK9MBY2mdMifoWgMc1PWDioyFEDjX3SzhtAG65Gc4zwuHPWN7js",
  "key38": "5iW7MHFwSdiTR9CZzRTsXauDbmoHdssCbYa79fErM3a7zsfpm4qWnt3zzAaXt9WeEJJ9Y7A7YujYBPH7fL6SiSS6",
  "key39": "vX9LxbrAy27ziCMHVnpkJWrSkr1oLg5Fdktan7cPSsWsWgWmyoQMEay9qUgqG88paJTTMdihJX1PupUJWs9ABJ7",
  "key40": "47uE9dfH6bt3EkteLoYX7pRtjy8TskJAhMfZ7mW7hT2btjiCvowx4ozeZ34VyPayrpKbfxwUbNdFAM5JD1Txst9A",
  "key41": "FKFK4jJXwaQjmoXT7VyHQ74W1vAVRZN11S2KYvYhHgaFSArAzQmjb6ifDtkFrmqKCkciJuYwMt34iGxXXnf932U",
  "key42": "2CnYeVD1mkcqJBskcFKt7wuQ3SZsQtbcTXqBC5TW9BVzx9QziU5998icQB6LayuTQtgVL4uytg3p7kLeNV8R7rJJ",
  "key43": "gsoSw1MLdtLUGqjz85BsR6uHAVQKAfDkTEWY9Td5sRcq3CzYu5TsQ1xpiNyG2BpNCjwmYhVCdZFubbxDhpmT7hB",
  "key44": "Y5LXfwZSkUsfmrxkirsifY2F13cVC1SkvmgN1ehYcL2S3i6kzrCy3esxU2j2DzBntPcg7U6bohZwjwj1sXLQyp8",
  "key45": "2ArbhESv378MUCjHBzDBhd91o7nDiuEfM9YpEQGtuUQdW18WKZRUwhMpXCDoDZ8SyFSs63MCyqAnYiAvwD95gWPR",
  "key46": "4UyfShFWhfFmgY3nvSCQGLZGWCui5hmxmUpPirXYeVe6LYWwPrjBqTysxDVdBmb6A8XZfezw8ESZeciWrmtvuFBc",
  "key47": "3bqdqgMDBT6T5r99y4QBoGLcxj7MP2dfg5A54Uo1VcBC8G2vfJGDxsfunCuZDDRvBAmAw9EV8KyvaNYBwecFKsqT",
  "key48": "2HSULMcyHcqQG5DhmAXU8Kg1uz96WVabuLv7QwbTcqkmx6MoPSJv592nraiqF3U3Rb6u4hYC87ywhFdredVGAWVA",
  "key49": "5VetcS6pHazgDKFCeYBzSX4t8WUAvFjdYc4jAiietHY7pSGfZoN7S7NDYkHP5oDm25uCpEj6AMkqv2pLTGYvPCwM"
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
