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
    "2QMLjvuPjAwpbd38tfKSQtzAomfX5WeFqSJ1vSHhNiodUVgP19dkSK2SHLk51us4Vi5EeErAyZvvcc6GynkBKweZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBRgEADG8AB1x8tMhAqQUMcUwwGCDsWvqYnaV5fAfPpc9JvQX9ae9LYrm3vVZ2VzVWSg16cwGfnGKUrGWG9QCEn",
  "key1": "4ikMUoQwnyYJQXvxtcB7tLnMivLUhhWAbk5RErX6csKuuLUhwnGThmVTBXpXSGH2gEPT7HHszRca1DWcjrjAw6Ls",
  "key2": "4rbtaKxWE3Nw43iGLNeD5Qc3jJfJZysGC9jP3CQstLS7khSQvghmtgXM5jrpcTqFPoHaKuTgV2Fua6U4XyAAfHxW",
  "key3": "2CpEDWz8mSegZGokFCvPXM2ZjQf7taGTCAKtYvJMRcJSnFWhueuja83S9WP7newLqANGDqAeZRU3nhjUUNB2R8MH",
  "key4": "43tNzwVTzyG2i7pFM7mU1UWRvLnd5mkmpmh8Xx1EHYyn32N9xHf4E6gdGV92biwz72AC1qLBoM8ja5CzAzvEh8sY",
  "key5": "vB9dhdKH6wGB7KRzYPiqUDTMsNxsgGRkENtXTb7mvTeKtv5JDdymJaTVqSjmYAcNAf1WR8spLN8T4PBa8nQjzNw",
  "key6": "KnJiwyxmBdxbqv6YiNdScxRPUCEFrhxsp6MEvY2Nqs36vuvQ1oC6VLFeHMGKaMYQHpk5Ae9cayp6puQwBhoLBkL",
  "key7": "5zL6ArHEaN2ZTmrUnpyJkr3Qnoe7LZeFL8JdigdeHeA7xsj3edWazJCHCnK2EpuSNJvFVdbSE7gB6nP4GvU6JLiP",
  "key8": "2cq8EhY4KKpoPBz2S9MmU6f3YorqDvD1reDPmsDdSVw9pUcJ4aJbyPcxntoaqnSX91JHNVnPV1StEZfnLtSefCCG",
  "key9": "2QmoMNPJjVNHB6s75VAxNGNg1PVcU1QS5uk2zMR5yFYC1neKe1bWzHedurvgau1712xnvkg9HUg2ZUCAqEUB7Vxv",
  "key10": "4tT9uYYxVBy5xXkntn6d6oDGorKvgswU8xP2uykQ4zREaEe8fJRqmfzAsxNxhDWeNVhdgkuB6BSMGMdZAsnayScj",
  "key11": "22yfNoJzZ2M2tLVxsjzvRswBvikUjWhckYgYNHdqb8ymHfwD3MWBepm6R8ZheJ2nU8Fx2bMyNVHxrVXEA6GWhR79",
  "key12": "3U8NTz4eV4GD3fibiVvZJ6EMc18AGXscw4LrGigyK2m4qMUueHEw2Jc12b3fhM6Fr8DnPK9EJ47wu2Ku8yQ3ZEMc",
  "key13": "5isMuA7y8CNbw7UwhYNTfVwHPR7MChchzVdo2LL5q2BHhNgXneGM7fBrpkMNcR3TSrMx8kYLsfg8JP1zxsba8var",
  "key14": "2R19JapqMSpLxQ3SzvRvHf1qT4P7aUCqU5QE2hG1LxiLQYhsu3yqUKGdae7CPEbveRAtr6vLvqPVU9StzGQCDQCx",
  "key15": "5zFewnVWFfEW7EyMmdiCwmpARVhxrBXW36xE37sAByiV6UEHurQgHC6fgbSgDcmNcxECyDd1Qmu682R9Y6u2jhz8",
  "key16": "33hmrYMUGZsEWQCHfWjvoSu6podMBtNovpxpFkHeQwBTUhzYU13rN1U1GvnNYonm6Fzm9kiu7k7M9VAzdTVfFwGH",
  "key17": "3mzDRpqLk6rTQH7FeuAKEDLp32v3Ss1hki1szyvKL6LU7NrMxgewA4rP6L2ccHqEjNX5Yk3Ac7joC8dmrWi3ME51",
  "key18": "3BmSqewyvR7uyovYJmvw2pLrr1hcgQbQzH5qHP5oGxUfy7jW33d5XYvHumivRcS24w4XBfUcBxQivvtkpJpoXpP",
  "key19": "4gMM9HCoRe9pMHxKttnHUtaX96MuRqWKwYDkW9ZcD2nneerLkyzsbTM7iVVqAius8phb5VV8ZDPB4T1HSRUWC3W",
  "key20": "2C7YfdETZmupQ7595Mx4AcSpc72Snd6Y3Hx1rX62dTTrAWyimTtryccRzHRoNtQ9P9iHUKYSqqVxRUbXLF1JtaD8",
  "key21": "fVAChZYDwrFcU7dyYAWN92qDrHY25LsfDztgE3Dwjya92sYzEGwvQeUCRk8bcR2Y1NEqjdJrKrc2BXm6iquxoT3",
  "key22": "2i8CDtcYvdjXozysqEe28RwNzeLLrHqF2BPk8nCrSjqG7DJSnJsxex23WJrmMuXF7aowFUueTzErZJqWbMiZrTSf",
  "key23": "53KPMoU3S6CPPV94XbPEpFskrPXgA24UotKw4qGF9rGEugcosgUY1gDb1KcxgQsTkR9QBe2drrqDonKdNREs3xz1",
  "key24": "4PNW9G6FnUpenDM3u21PLEASaU6DztsN7Vo5ABhmctuDCRHJfPT7zBJP32GN1KEQTM8wbwSrhaQpShy4kvZX6Xpz",
  "key25": "2gy63A858FAbtyejJW1VV8LTusKrtr2tZRMzcRAzFiNTSeE9P2Fz2oj3UYuXZxtBdociHPEvWT7vq75ifQ8Ji41J",
  "key26": "3ecbJBxLCPBEMGzBYtodKXf4bES3YeJXF86NUMax2YPvZGdVVRUFFfGZQ69UJadowjt3dNBXGnkmqCF5qPqFbe5f",
  "key27": "4XYm4HVrW8iigy4FMoCrZmEZvWQzigWJGZ3PCsC29FyyAXvrHUsxG9xEkMYWqJsCy5pnxYkzNdXjjuLhJBrf4bmC",
  "key28": "2m3dMkVZtM2RjT5hfa2YhzSWQzBgjEn1soCseLtB26QvwiFotrwFcZMFXSs8anBbngT79M5aSrcfJCySesje2FXD",
  "key29": "3dJsffdE9YYBXvEUeL6zyjrV3vwANxWz3oiWxRS231QrWz59akQPXuHnzH66TxrWzadxjQVJsfL4uXrGBmifRAzJ",
  "key30": "3BBC9bQBjuRxVqMGXhN7DSFCJ1LfTr7nokzyWFvkasyAqNHmm84tAWVNa3FAws6expVfww3NeNYy96d1A6NY5bwM",
  "key31": "4WMC3bzwQ1a53MfaLjoKXmiMHD8gdSKXyZHNnpDMjwtPidmJs9js2G3hNP13FbP89KDt9cETEpyJbaWAF67k964X",
  "key32": "4wV2ku88zBHD2aaV1HGxc1FQrdDMTi94kNqG8pG8BXVpByDSn7vVKDm93AV9Pek5qKfugsWAd54s88r8iE31hv3T",
  "key33": "wSWLD2rRB5snFng17HyhCd4sak6VRzenozQ9MGxwPwVb2pS55jwaYAoveec65sbPwnwLCANTEXje3xJfPUD7bpA",
  "key34": "2uczGb6PL5wVmYFTMSMMZ5TBUzCj5XzQx8BDN5S4vmfSd6uR2FEnHxmHucjuJug4MpanQ9rb3j4n2nygHwHC1G3n",
  "key35": "4tTNm7Rc7RomxF465HpyAKBiMacw1E5kDzjLxjWhxSi1BjJ6nouHjuF4fCmm4hh3gTjiT1JHpvxB6BvbZcCoMrZW",
  "key36": "2KfJuCWEQ6wKchGUKMAio8yns95vm9ZsvkNsnbRvxcTamb3ZSHDVuDzkKH4RyjpoUFGLX65fd34N1PJz9kAkhyvB",
  "key37": "3QFWNasiT76qNmJ9Q9ihkn6t2BV1k2pvzhZmuxjzNSyr5iD3cW7tbMCPxCJCo84Ctum3fXJSHGcVHp1DtnkhbGiz",
  "key38": "42B8VqgzMbUrBcJNhHA3fadr7ZTYxrWQTxJb5oSfSZHCeo9fp1PF17y37TYXjUBJau3EdWZK2bP2YebmXza4yLQF",
  "key39": "4Va6cH6sWKEqzNrYD8gXt25woKmgt3FufzQucvpjKkQ2TV8bE1NSoAemJUHA7ozZcowJQkyLiKEpYG7U7r13Bry3",
  "key40": "48nfLcjDKndX47nxoZt7KyNbNcPkXruLWeakr2rvc4A9Dcqw8Gj7o3vNoVHvvpchaQ9dwsfVLiQXMMKxX8hM8JSZ",
  "key41": "RnobLPYYqL71t836nPUcPt98j9q3HWt7stc96kYgZ3pmrPCwtSGCPdV5h1vMArkf6NJM9LxzixNpE2pkRuy5ZXQ",
  "key42": "5e55paiCEvCVMyX362BQxAPkpMJe1hmvEkf4kprKfJe642KzknHPyYuLwiLEyYvBq6moRrMYanHWjrPy5RNhwSnH",
  "key43": "2D3Ejp7gDYM7gHBo7gCv2NHNeub6TjZ5bdMZZXMYFgk6hQmceYtBj55FKT1LVuu8JEVrdyo9AzyFTWYspVe87eFU",
  "key44": "3rH3r64kYdKfjpPWMkE5F9VCgDug1UJZNd7jH3cNPTUEDzvaBCuvWiRZiUdcgAf5buq6Q8L86dtia3yKG2tb8yP6",
  "key45": "41zQLYNcDLP8QmEGSbwwb4MUydoV4d1FwneYxK6MTAPXi7Jz5HAAxJ5Jba17J8A6mBLzqr89VmfdsJcpz61E7Ch3",
  "key46": "3FFxrJbK2qGnzwTdDZjxaxFVVSvwuJ1kguPJDBF3XpqpRErBzFWyKaoEE86xuswCfz5bA9tEgAvDA9Uc6aoTrqqu",
  "key47": "4jjBT2CC3oX1oaxKbmmfsUbtMyzQrEHjNss3o4nwKKxceW58XVWoUBNnywrsyE23Js1QiDMihRwAymfD5GYuG42H",
  "key48": "FpwGWDSiujM7ADb4Xa4DrvtZCME6cSLz4FbVWbUnXzFfLs3o1o2idNjc58NB4Gupx6DCpJCtpmANijjA675YZaT",
  "key49": "4tQr7iduz2sGMEbV8H8XsjfA4W4urc9wvRSrvXbmexZqcneiHozCbfxY5nWpTgxMPyyLwJnorMzvSn67ghM1pXpu"
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
