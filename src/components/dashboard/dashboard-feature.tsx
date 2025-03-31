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
    "i2YPKFJ63B1DWLMMK62fFwrSukwgoZGArTduJTHazSTmzuyzJj69zdA72JkcDoe5EZsFbvLSxAipLf13fNM8KBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfFwRwWb2ag4qBRUY6BuURKBSjZn4vaxVKuaWryuGgg6qhpHhvFYzG2pEGguM2n31PgS4GgF8KaWymcZieHHiZ2",
  "key1": "5CHAZE4Ace7pACH1FyYtwv8ZC5vwKF2s48DVTKz5N2hkMQHC11eBpwjttdBBLZDiNdR9i8kV9k4vDFEWwRuJsSbV",
  "key2": "5LNBL3VqqCEwRSGcWXrMkQoG61nnh9uHoVsXf5Pvn4xREjtx6nqip5W3mg6UpzFSXKLq4fyb88hHobU1zdU33sZG",
  "key3": "2JQwVAbzG3V7uYYh94W8KDDQs5V1EXkdNj2jTkdmrMGiod3y1rMBVwiDth64tDzswQvPSNUShgvgMiy2U8YcyTod",
  "key4": "38kQHA2ZKS6jrU7fe5UFDhB41nw1TwgRokZiBtsxxnAceLf8neZrxsHd47KUJg7pEkLmPAVHeUyiXsHBWTYnxvCD",
  "key5": "3JoxbGzGNMAwxrVJpT2YJh5bc1mGRCQKdnYpnXkmcLH9zG7NykD644YrZpup13BJU7TdUoSEsiazsj1c1GzZsCfE",
  "key6": "Av4utxw3CjkEQv5mnLdj81FmbwhK9Dt8sv4jfsjx1B19Goxcyk2hT9fMu1sMx5qoL4PUeJ9DVw5qkqHeUNCB62o",
  "key7": "R7WeY241rTLPpWYJfa6E47Txs3Ta2gPgzYgyyKUhM7gg6eFdPRWaNizAqnRUqsR9DUWmcymPJ1ujsnwkG2oTdyS",
  "key8": "2MnoCHUTfZYfWomgDsFGA1iPELrHQLn1qr3SqDb72hTwzHUSs2v2SvMQeRw3iwypgcZFFr9n5RDZ4dKFFQcCqMY9",
  "key9": "3EFTqfonu5BQ4vdN6jtHZ3qmJtEV9vPAroFfVj6LXYAKBTF8jpsM32ND6RJgj9RuNLrbKCVE5bc3Hx3URp9B11ff",
  "key10": "2w2wJ6kbXdvRAvviFGvUCYMoNg81rnfqQKsEuMC59p7exUTddbYA8MqJ2HVF2fAfdCyGmExM6ws8kNbejputBY7w",
  "key11": "29XmD6hXyAddxWzwwPA1AEbgpCnXLm9qR2BbnASPutfnmKBRe1GCDLAAvzWqdWQw6qR4ZxA7x8o6kwvsP2gSxa6B",
  "key12": "5XGxXD7GUCpGCSCsqXF1URFdg2TRS7Cuab4MwwCMFSB4opqP8hGxpzYDjcs2Zrs6NbvJUeE1ZGH2virXhKb8NCpE",
  "key13": "4NEWgLnVh1wtGmNnQ91TRd9vXhXsuwGn7GqZshtzukjgSBRZ48mp47Keq3zargQPnHtWpd23YpxRwyfY2BacHbSE",
  "key14": "51mk4evHjqvKvL1QS2NizrWhqVvezuhTY85s1ayfHSmZfLW6C7KRd4cbU45ZAAhxLLMRHTBhSNp3HyNNHqbRbvTo",
  "key15": "4a4CaERp9Z7UyXEPSKfoReSGvzTB57PQVhG86nPaY74JRAimfTfzQ943ynk8x4GpPokVcUxgkjsSjQrvQeE5Fv6X",
  "key16": "3Xqi4hjvfcCgWNZ2DPNZvkLL6YC5N23Trgj1rgRefdsApF23efH3cwR8mnYFX5sjzhoy26Ywc6TC1j9BC1THmD5M",
  "key17": "3ECevGUYrHMXnamkbVrBKU3vjNUGXMn9971sJDcyRGLbbng8oFAScpeMSBUusc96rMizttdNTGv5R5SN6QHB3pQi",
  "key18": "611NBpCnajeh8bzMRuS8YpD1udsEoouSkdhKV5sbZkbteBfphRUsMTRUE8tevqwJncotyyi3dHpsPyr7yewHp9nV",
  "key19": "3Y8q4XQjr18jdNUaVi3cJijgpHafTK3kmw5AQxntWX5zDdZzkmkk6bH3KqMQ2mRPYLc9Bg7rAY6PiXYJWCj8g25u",
  "key20": "5tqLCUMutCDV7rM6Xxw7aUpmQVXgwZSFeV6v5AhdgeNBdi5GmMncRu6EvT5JiCUEiLktCreS9PhCQed2WyndXnAf",
  "key21": "5tgvDAm74BnJbFhDXDNFBHM4aBtcj4aUdxMy9aEpLNRD3DeQncLMY9gtgbEQ8Snnv4YeoYwJEauK1GUL2RHotr4J",
  "key22": "26tzM4XK9g8osZ8beC5BTdktmm7BQUQvZYVv7DVTabsedHkjjxefMV4UNREpgkUHPyFUJLo7JV6z5GebAHGCfhKf",
  "key23": "4D1bM4AoJH4ziBAHgAUtPXGSccGUFeNEagDJKXUb23pBxiD1h2HCHC81dDEGZVDSZzvKocCkxDyzwHx25R4uNgeh",
  "key24": "3EvhE5DNbao1BAEYX2ToRkA634EfbpiWHxDBPJVF2oapfDjKxCJH6kG5Tj7NYTqdSbxz8YgjueZzaoUYTdJuohJn",
  "key25": "5VkNKdSShftQ7xS5vf1roEFovZzW4TWUSndBv6dSkuezgobHgx47EiTP9KLBdpsmAQPstnhunwzdVg1kUcatJ73W",
  "key26": "52QiHuYPaPW8piraHihRdKKuqMkyycgUmQZvrwMwgbiBQn82BAgV5PLs1whdVPWan8LC8N9rdqjMrLxBciw3H19J",
  "key27": "5xfwJrb1SED1Eaj8gbn55XqGnvdc3E3VK6BKCPmthYjW9REo7dEsPQMW2yHKzbLk8whdwqNqVtg5eCKcARhqqehT",
  "key28": "4MRNeRJVRbSana3Srkkuu3obfkUepFyXdbjn9gBwu4PmFZsDbzm5FJTgvJu5MmjWVTaPM6oS3eMXqpMF7XuDE9BG",
  "key29": "5EP6PES1KFtM8Yt9fRkYSz5RyyR4FU3JH6c8q9q6xWFjRUrLktuTSDqJc5asQ9yfh4UpT9fxeaR5PAxNSDKstiNa",
  "key30": "5bWsuUMDdN3o7RM1Cb33LNFTDKyqpJoZXQvsUkNLbGtBMtGyYrs42tg2nHtxSGfZNhdw8BuGxPEJcRXVokFec5mi",
  "key31": "bX9FHPYJPssCStA6r6eG3PJv2x1GrpaRuYHfYP61SALQpfbftWPUwPK67R1TF48H5MoJsbDGBwGZGB3zSCkRBnt",
  "key32": "4upLzKMRrBPLb2vjw12zbgKPy2TKRHnHmXmv1AQ67BL5P4kB7iMeu95cWtkD67cTQRRqMQWrWABRHK1yY9ipSvus",
  "key33": "CwrzrvQjfzbtKU6TF5eyHhRYzAGeGZHsijdYTuVnv7H9asD2iUFRbpijezkebi5MfDFwjXCA1orsyuedPHQyv8d",
  "key34": "62X9uuYeCCqFgCDkPwYibKr1pBppiV8CZXP3rsrYmvZFE2KxB891UBTpBoMARzXwKzxezZDq2L6QJckwW5ugyVY6",
  "key35": "3fnwtq9pfqXnWdnDtPwQjA8gHoLujXjaiAn8WEMQKix53bAQoLspRGLTmH69CnEq5HqTd2nJMfEHy8Bcs7HLGEiq",
  "key36": "3xB3WLvfHxhRwcMC9EoB12YxxBnXTCwKe6tAzm3skMDRTUM5VpVPENv7fC1JGFxeqpCnCTaQ6iF4KtxZpvjU5K2s",
  "key37": "2pNghcT9Xvossk6mzFemVzCy8a89gRuZz2f1TCB8a1sWQ7FpUFAKm3Qfz3PEkSD9F1P5hzPjSXBfHnveNTgNNgdS",
  "key38": "2Lw3A4dHrxkz7PpVVQRN4ze3whTkrLt5utuZRaKBghXKQkK4bNtieTWaX7FC6qVSFXRnoruqVv7azUFaXjeK4KNY",
  "key39": "mSo8TQgV2ibb5SSPs1gsZSfgLwD3VYa1xSD3y1keuCqxpyc6N87TFo5ssc5Nvbqt4QM1aGyrDN3pFqsJNUtpt4x",
  "key40": "2zscrfH1VC6x1P3yFyoekuD3gzRr7fZKzp39JnyCGcNUZSMqrwFs2gXE36CSxDpkc8wYBg5ceQ8RGDM2sikt4hrh",
  "key41": "5gQzaWNqs25Sp5iZiTLL7cfTwyj1BMRK7hBfbK6LzoZjfQ6DNiPLrcvmgHzvx7ccwcajeMWPtA3r6p2J4nPa4Bxs",
  "key42": "3us99AWUZUgPJtSgcmqLvoazz1MVhqaWL3zzrpbvgmDMhteZQB1cJCuR7QgjeZryrhLa6vMjfbFJJ48GycsMjwiK",
  "key43": "3DgkLwFGENCzXgPbxqchqeLDU89N8rC6booLzrxm5Xf1acgzd3fTg9vB7o9A3vQEpVXyt41YMM1mdydrPvU2pvHR",
  "key44": "5ZRxMSDgurDmjgKLfiaAHZaiE7P2DBoV2TGmLeZCymB33uGqxyFjuN7Rtvhr4fV5zPQbebk7FqQfkKSMJJ7FsCcc",
  "key45": "4WHWhS8U3GazD6Dcq1f7C4ML627rnFK3YNspKhn2AK6vMhPituiYcsmMaq9U93XbeE6H9PyPrfCaPUza57VuU5k7"
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
