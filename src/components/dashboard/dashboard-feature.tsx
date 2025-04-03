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
    "5kntqRGyf8VSfYsaevRxL2E3QFve532GTsoJyaUnYeN369TqbTMG4eFxnL7pJb5tjCsCqNA8jNPQNRw3xgumEA3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4utbRqbQexo9qeaSmC6dpe3N9JeMwi3C1PTVZts8jC5yRqSyc1TNgCaxyaYZa3HzqLSipcE594o5nBw9C5cDoy",
  "key1": "sUisyznyqfYgf2tvFpFUCZjm9zhDPUAM9PKWb3VDCut3NbNky7REo5g3EbVfCtfUrgkT5Nj7pHS1QZn3DNjYMuP",
  "key2": "41eDvZziVuErisgBDCJupracqUwNKU4L8S5omj1rU5FpJpURLKcocK7G6fobEPPu3M3yJ2o7TKETh4WHkBDoRWTW",
  "key3": "58x13zSFTk6Ktw4Y2HedQvqsSe4hwixuBPng68ewNjuPRP7k2b2dZFw1dzUmTtLHZn31jWaBirxtnhaFFZHUNcyd",
  "key4": "3yJDnFMxTRQfKx5RMnj8LkgYXmft3rKCHckHMxW8urtdzDhapT4rrzH4Er8XD435owrgYjdfuqWnHuPM9KcsWgKe",
  "key5": "oe2V1Psvbbjaijsro4rSrbvz8mfj5b9cCxb9tR8rva4Q6CP7R7eRq9TbQojmjFk1CeFz63PMmLipfiVPbQE49az",
  "key6": "4mHsEShG2TXienij5ScdX88XGAEqFWqDctqks5daYACfW1KdHz78UaAPFyFqcprKxcZj99BAwFtU3FwPJvhkcdnK",
  "key7": "2hz8e9UZs9byNSjKShjznPw6zoMR1PDpU3UqarpKj9V2tTV8phaECERP1z9xFdE684XB5jixDbvx3RdFceL3mJti",
  "key8": "3ufeGhyjdc4PpKCgY6SdcF6qqciTd34Qqj1v66ptZmHhZGLHuMq9Eg2TWHpjxyfq4iYXH78qFRzA9NV5dbjUJmNb",
  "key9": "2jVM2tPdEg4LBywYSPybKoiiyNGf6GLpDoBQJ3R9GXWkPFt9nwERVuHs7ghHCZpJc2tF4Yvp5XPqsWqw5FcVhVQ",
  "key10": "3mk2suYWzFD5bHGkxd49EDNBMtGAiVie7zB9D99VxTbEqKpGNGm78uwqbnL8RTEYNwrae9qHSzvxHHfoTqiPVFhb",
  "key11": "JEtP2F7aXNMtxt6mVJn2Hjn1hE1CbDLRe4FipJTw8atoHkFQXw22WZACAxRLs5Z3HcK2zKFLeUU6XFWqVykcHgz",
  "key12": "bwNmd2KkQcqzZqqchXn11fbgnxiQsmBDiviGm54kDD2gP8Ydqc3YeCNZt4WyAWYPJDuXf9CAKd36xUNimViQ6Lq",
  "key13": "MFh4Z3oJG3eVbyh9h4DKneKWufikmycCHVgAVEeAvdBUyjU5Jgdvh5wcSbxhAe8XkQ2MkzGqV1yr3zWqAUvVuA8",
  "key14": "1gQGhGYCeud8LbG26Nx53dQ8oy8A1zuqawhfkpmSYp1LfASxcpfY95f3iyNEAfJ2C3ooF3KC49twjREZ8y2EwZY",
  "key15": "538AKbkYGwD1pUzUDZmA6ohcAuhj4X94hnfcuwdUirGLS366Kz8SvHwAqYLWscaDR3QEagqNvRmZ5JHRnva5ivQX",
  "key16": "643XcmGVxGHkXmXup64deTRY3yAt2mwQuN8BkQkbSreQJfWqqTqUdPz1vTiRsbCENoSA1yYMpyu6G3u5uvyxQQQJ",
  "key17": "4ThWUA7LURzaB1C9pcDGVzEmfoRftutDqgWvHtYJwkz533txFvtBpST2jdZmefQBKmXibptbT6fVdTKEjvMws6gy",
  "key18": "3ZmwVXUVssfPBVsmPaCzzZYTjxmmmE84umKPK6HT46BEcMKva5TgAPgYPv5XWdN3grHi7CknQ4GNPFgtUCRMFGDV",
  "key19": "3wJkFJR7nd2o4DL8F2uFuSBTFVbo1zHTwJrK8SVWFNiGbTsNLyhxq5kSrQuqPQHHWaJ9RvVX77ntQHch3oibAAdF",
  "key20": "5XpteqQ5crc8tk8yAchP5i4813v7Wj4oH73g6qTsfYe9JBnzjHXEVyGc4rDoontm2LfRU5GEt1s7Xoya1neXWzqT",
  "key21": "4poe8g23ECvaD21rjgzii7kVJYHPnnfesC1cBAzU3A9WYs2c77Ysm3kqLcuAcbRozwvHiNuFzmLDWvspqGJxcUmr",
  "key22": "3HzGYsH8GdRCoyg7zmnYt7HjnK9BTQ7x5z6WE7L4NNaPCS6gr1BNeGWXMzG5pFvMmDCkXfH6h5DY1KnkbXy5aJ7b",
  "key23": "26YZAJBsR3sg4cxdjrC2DDTuxFDjE7iZdsRsDNhbtxvzuEaab4qSyzpFDbDt5LLLRcrzwzfAmr55fqX1rYQghahT",
  "key24": "5MwyCxB531CCq73nuW88bBj9fWj8K6n2BWD3oZekuBfpdfBzNyQymJA9jM8joXhTAnrejN2im1cq9rFa3pMFErdH",
  "key25": "2YxPo499YzCdDW52y75fPtckikEVxbu7joSw9DcRYDFnPKd5gDtdk3ntmxUDgCSSa4m8Mh3329NgqnaZMK8oHrre",
  "key26": "5rzEz6yWCK2auCeVpgC6zv55kWJiStQMNCHqpggZUfQRJVetE58Lp21p5Gdn6j2c7hN76HBBwrgGiddFyKoVgy7f",
  "key27": "3Cmh9cqS3XhrhoptkkPfsr66Aq9Mu5mvniUPJ9QDmiN1YodvAnSENEDYy6jpoRg8cCme4jtBk54AdSMJ2tLMQDJ8",
  "key28": "24VQcvSPKvdKpNHoCPwDtG2oqhb7z88HYNumaLoAVnCFvZapzy3GDC8MgLJEdriAMeSwHdAYqUeARX8QbXdJU8tP",
  "key29": "2q4QQP6F1jFoGX3bwwhkqAUCtR8iSz9GquzXegmDbAMitR3XWGsugnva8uNErCtwX5MFrqMCQGVkL43HBwPvrsSD",
  "key30": "tcmxHNKF4q3LuamsTG1evDbM682WJDX1vKpM9LPM7GjkvUAoH1wK5r1Pq3a1gKJbfnze3JbYUtPAQVyZ95x14qh",
  "key31": "2rRviFd8ZZXoVaD2CxFPFa4ywmcmkzkLQwchZG954B4WAy6UGwPAtTsT1pybF8itRdSmzvYosp6iG2fMEmAHAWM6",
  "key32": "cKZxSbR4CG1cyDAbVtxUqMZRDnhjRS12T6PaKAFCwYSXYK4xjRajGc4f6L5erFDRBgFFAoroPKFiCfjSczio4Vg",
  "key33": "2uCneqSp73hB7jaPqv4GoEqKemF9ukecP1dR8ZNSRGsJW3ptZYKmh4pkt2eym7id1q9rPKoUMXkn4jckKdUi1h1K",
  "key34": "48a5oea1THVUyEdVwUEBz64hpDyRv6frfX1h4nZmsT9Lag18iqQhnMiwG5nBjJSXvYaWdLTFoXbCyEpQ24HrEYPt",
  "key35": "4HFoDgMMQ3Fo9CVL8Cjt6QuKhe7tS9mAZYBoW9CUVh5wU89wcZwzXfVHF7D4k4yw2fGybajWynG7jgVR1a3bs1oA",
  "key36": "3cxiz1GSDUjaZKMaKJcdiTN7gtqqRVe5xmKm8tmWsTHEjSS2XzhwBKuQGV2crxG9KL9viNae4yuGnHMrJpva92Kw",
  "key37": "gWWiAyTCzo8zBqBSqedVzsdoNgQUUDYtNjRG3ypmjudAwiRystBKqzQyj6XaqdCJ5i1hM78BrKDhqWj1EE7ryZu",
  "key38": "4QnrVci5W7cBVkbiRBbcUL987w6tfCeuTsTvmTp3Xs7TpKfTf4h3PMr4iuNrepY9Jd7xSEisPZj7kp1RaF3NyYhy",
  "key39": "4oduwBpZBDKV52tzKeivWkwQpfVeL7H1QW6gLMCFAe73RgzQ1zTb6yUQi2phM1JPfhGSUKWQnmFNpjXeHgm4iXzh",
  "key40": "eAhyS6X2PABdT76G9D5zbARPC2Q3CA1RV8sWkWpQxMfCpK3UcBQDGiDpLF1ivis8pM6DPmyWcDwDNrJ74zt1rvh",
  "key41": "4ANWruScR4SzBnhbtKNTXeN14Jc1bNZ5HutWTwguGZx6qH7KdNEEUzWGrGv9npW1nCyGvJaMmPd4Hy5H3Hy9GE11",
  "key42": "5UWsyDiqRpzY8aE3yBBLvSzfNtyACj2oo9FmDvH7kP2QuH1ZoCp63QR3qvCBPapsnuXwsH8zNipubC26RHKq9NGJ",
  "key43": "2XGGxJ2Eo38Nnniy3J9KDZddQVpxiAFEi7DNxD7APQUA3TEVWGFa8GVQRf6tUTj1Fv5rJvb9pm7iQhup8F8bTTVg",
  "key44": "hWZ1wAJsVGWqnGguT8PxJafXE8imqiRzUTxkaopfGoYp7bG2NJVZmttqivD6h8vQm1YXuyHCrU1JdmqKv1ThaN6",
  "key45": "2ijHrGLgykRrxbMFCs5bd1KnfrMV4cWgXpFtdp1yo2LaE6s1aTxwEQmoeXC4aupi5YUxGXrVH9Ae1feu9zYLP4Jz",
  "key46": "2eTHFjEzntb5sk2eJmjXo3zXSoCGmUAGKWYYg6qRtgzJVbymFTsK7FGLab4BGJHKN8QztxBGhdwarSxUGa3c5848",
  "key47": "62p7ZSPcMpNSL97nMcPnMHJRMM6u3y4kZBXJaHQV6izfdQH1jkfw96aM1SKodXmAnzvTqYN9CnU1b9CtNP2zuaDR"
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
