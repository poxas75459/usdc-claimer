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
    "r5mJhyV4C5Z25N1VKMMtRugy9wmWrLXFJX3bpiqRKddx192cMgLU2EpSD2Hc5LQR3zbuD74viZvx95tgkfBpeQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSbZQH59fz4VuX2yzyLZii2CLctPgVGFg2cYMHNgtvzNMWDJHCYctU5zXpQ3zS4qqiaTSx7b63Tm1NTbpCaRvca",
  "key1": "4895Q9wt1Ec6GzoQ3mbyQKtQyhweBobBHvsH96VLk7EQLHmpMdzj47iz7vf19vutqqZdZNbE3uFi8k5WDow8c7yz",
  "key2": "3yYZ9XGPyiCpHZ9FgSvnoP5WcLNrr1gumCdNP2dYhVSd7PDFkMRSCEVQAXm4Ka9iC6Y8Mp9LaKVux3dtPmTNwaFH",
  "key3": "2dLDEKDmxRfeda1ENUoXjDEQiTeQnBxWmm8HtKr7jjDscAdxfF4DCuMb1JmXvCQKnXWMEL2e6C5m2yxAqcfYofRG",
  "key4": "5QCa9dTYmdoxYqCuCyqEgcMn9uSuPuzv866pvWUpqY4Yej8tCc1QG4DjUvvfHwbZj51uU9mVySB1SGRFTN3BggPF",
  "key5": "RyNLsd64B8tnCHq7S8ZHPEed8KKXA5J2DqKAyxkQsidkuiHAYBLTStBWkRcQNPP84jqFd73wH1gNVxtt9AuMKT9",
  "key6": "4kwtzaTD8RoiticRxvuTunaLxrRWL34jEoZheJTqRMav9EEV8LxvXgcjyRSF48K7QNV9yBB5hTXtvNpGLSgeLuZM",
  "key7": "4KqeEyySCWB47WZUmEQPStsFsKahrWt2ofLvYCy2oyyprWyTnygtGczEUbgAr8z1rZEw93jQ32tB8daWbszN5NSy",
  "key8": "33LVxDVkHcLrnkj9EGdM7L5SZnjg2wzEyTQ53yxHK7Tsz39o6kYFcuCGsJSmnNNnr8HcUk7H9kYDgv57W2HFzcr7",
  "key9": "4FpG2TABrFiR2EyNABXhp4DndEUfLgWvK9RHmyFQCvHpieeucq5dh8hfNMrPdWRw7oqxbfdQ96yvNnoPbpJQg9g5",
  "key10": "4HzVGdiMWRN7nL45ADTSKJ4L8enKL5kSkWwKNtQEWiE9FCUTFR2kjxEiVVH6gKKb24FDg3SUU2EtCPwgs1ZJgPzg",
  "key11": "3kXgx2Mgu5pqEsSwNeMcSRFncx1eGT23GC8iuuyEgZdinAXzmeA9UmNASDv5va6Df5mj8FF9F6dnpgc6KNXSjpkv",
  "key12": "2pMnYmJaYcvENQKoftodYy3EGzskZnSvwbYhZtTU7nFhA3rh1egFDjS9q6xGFFtsJKzSPjfyE66CeFeRhq96smB8",
  "key13": "2ZzLrDEsNn2fafycUmk4JBkh7gVCebGqPR5Zw7j3Dt8ETF4jJLED2rRStKVTuyc6Pya2anqW9cSw5LdFD5qHpkWL",
  "key14": "5Uru56ZFxRyipufpSXJ4DwHYsvCxyWtCLfRgJN6CamLHzFgrLzPBBtpgLMV6hvEA5QfwWduKGY7fxaCDpDuT8FEh",
  "key15": "3z67KrtcP2ZH1bjVVZstbeZ3p9mASuWWJZ3xZHeNSvHqQKCkpk6mvRRGF6Wgk7sFFWhaJDwdfN1yu2scZDbJ5uCP",
  "key16": "4dPE8oSxFRgico6xUxFnsYRdfnX1b2Fq9Ux47QUdSRJbytBsDhGmFgKJkHUsXVhDJxPzBRZ1eigefCkSzdv7X9QD",
  "key17": "5CT5RfrKCp3zNF7cx4QCcWTKvtbQQfNPJdgmNZrj7mR7XFfBBTSS3zdADc5HMU6JYV6sFd68ka3L8z3Y2A1Pddu6",
  "key18": "9LHfwN92xmrxg2Qdat34u9oFoaYGwHTabYytyUqW4UNcmtPDWvrerRPscYkPJJn2LnHsxwFcf74biJYStBr2KK8",
  "key19": "4DgZxTHrnAyqyRnYsRw5fYMLC5E6YRFr4McaRHWbDvigstB8DXFzDCLGKXRfkFydgRaVnUZs8i6HoTMp7C9pfq9K",
  "key20": "9fQxrjowVk8X8Fup5pgd4s1LHtGmHQSFXSQL5YhqW25657B6erxkhpm8MfEN2LdbJhmAniCgAJe53XcMSPAxwSi",
  "key21": "5wtU2x9bGNCFg9xYvVhM38fsTPtQq8b1WhAPZJMDAKCFBER7NrTqr6T4pySYk3e5MvjYntrTZafZQ25n1cKMhSFF",
  "key22": "qeDk1vYayLsapWjQHxLC96U4j4fskkLz5kLn47PuLoNVfFPAAcBnCygxuHp4HPTuHKZybWZ5Jw6Ut438wNUptXF",
  "key23": "2wj1LvBZc8u6TtJbkmhBBNexRtSFrTFjApo4pGrvfsnELKTBd7xEvtkSfTtt1zpjimQFFLVtAz9pauZJyPbqNuRU",
  "key24": "5K1fSbenUVSUgqHnxA7BvBRfNcxqjDHo5Ny8GTmTeVPRQcVoP1LWcCJMR2cjZjrBWfTgH7VsjTr6XQ9Mvj9SHcX8",
  "key25": "4bHi7DrhvaJXh3Rpq6iQrRkrLXtTGeA2kucXUABYLYuy4FX5PzzhNxMDy6aGkRMe4BAZSSk667MV5nhyKtW3jtRt",
  "key26": "54t4PsajzLeEqtoXTTRRgH79ppA5Pgj8iodJnf4yM2XpYCqxHJCV5eWKjaURNHUvTRay8KmR49WS4Uy9ujKpQeuu",
  "key27": "3yMWLjGY81Yjy47p3MtZivCUPFecMAjeQK4x7b75PKB9VHDPLfqHMnj2mgWHDdx74xEuaCciqKcHQuaTjH9MyRjk",
  "key28": "36o2ZFrUDUigarAyU2HGyWLwnoCJaMe6i9b13FRUBPh63tiJc8GgbgjzZDhoTVfPq73jHJHoQv4Jt2WynosRhhyj",
  "key29": "4Nb3myzYmkFpMKLEqEpNC5ypjihMA1N3wY3A3tiMCprLZoS8f9WbRSGw8YasvcEpJVNpfQFt936e4AgVHQFYTauX",
  "key30": "4h2UvMuT5NcDBEbm5tR3THEcJU5EyXnw18tQCSiAU1P9Ti66GRm73HbyXuEMRWYRHd3Lw7o3E33nkEJmwJn6kZoQ",
  "key31": "4v9h24vTCb6u8dZj1sLDSbvk23UjuobWAxK2ZjZMoUK8bFqmxije1E7LSyXnm5fwncAXd4SNcjZ2SmKsqYtgkabe",
  "key32": "3wy67C4SEHS9Na9BCeYbA9yQZRus5RKfMMBnwDhUS4gBFtQaa6iAdrkLaJi2xSCWYYF55bXGsVPiBQpu3M3WWmQ9",
  "key33": "49dcHveqCJHCaTJpF9BbePhoSoKQVm1d4RAX7WZG5vaww1me4goahRyCh8XGfj27TbvinhCYVCJmTwLwqPrRQwfw",
  "key34": "4esv3L2WYb381GDPuCyueakQm8Gqj3NgkussJ9cDdGMAzXXpMfajJU4EoaVUS4LGyqeJV5m5t55qRS3sWxM1gYib",
  "key35": "284bFMf86ey1c3H7pGbhBwH5UBhiMeodrf4NmmTa6UGCAQzn7pWvRL6RsYTjtAjshzihZ2QGujN1gpBtVeSYGfpX",
  "key36": "YXDtdeHgJonDrRaeBKwK19689kRL1eLrdJkgdMwQAdC25hKU8tCF4ShwetbwrX5UaDTbwfZKVTE1U2UyS3ujcFQ",
  "key37": "2MF5ufZEspYHNqGXVNXZNtPF2mamBzD7TgYzLm4dSo3aTXYErq9qLHs5Qb2DQNtz4GQRfUwo9thbYeC7CQKsrhbB",
  "key38": "26aVtuB9nq3hp8x3EGfNi7bk81PyVQZKLiayCWd9Zn2yyRwtQ5hPx1tjosAqwEyoEqo3rd6tuPyHewP7e1ur6fva",
  "key39": "5dgUuf1EotVS6RYmbcRf8bVytzJMTZ2PqvmZENxFL5Tkh8Kz1p544b6fizS5pWXr1G8i1awbac4GUM7NN2KNWxtb",
  "key40": "MupHuDH2xz8Lqd9KTYATKqfJvoq3tDKpPRaAJkFzrZP1fBGnqyWfkBC7qHi4BfQyFjVgF71JUgm9TPCKpRYTmC8",
  "key41": "3iGiZuvGWQgnHjwvrqg5PmQvhk6NxcMRMegPmfc7Hzn5ad9jKuQ1bdygnyfbBWkys9gwsULjELcayprbC582s3Y5",
  "key42": "3LPUgX9714evRMC5BeFpyhNUepUSfydnuTZdaX8Ei8foSNjMGWLZCDUmm8LpeQGwDP6jcuTKrPHRHuCospEvbLee",
  "key43": "2oyES75CsrjNHSguQzMmXJEGyFQv93HcTbK4WkjboZwS1jeGJLY2wByqp2EDiD1FpmnNqPsVvKaDbyPGuiSLSnVD",
  "key44": "3Wpr6Ecfp2uftURWyhbsXf7MLDcZ6aX77g5e4rDvQe2eCbEndBzrkfibPTkwtpSaLY1hkZyb4u2gJN2fDkFrFDgf",
  "key45": "5f1LFfhyz4XqKLeKnkpbhzqoZWykgxAr3k9w1z6hnRaUotusWkSeaGbasq41rq9zuKLAYrUUcxPKgkZ5bUv14RiX"
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
