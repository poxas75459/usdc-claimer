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
    "4zRumBqiLyiZq4T3U7qR4UDqVBSbpUZKgk9uEmDa1Mc2YMjfcEzSoieX2YXZda9ZNQk6B9LXDoC8wamktvt5rPLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qdTLTc8ZYFJhbhwNYQQ2qqKjuWDMqDeYH44ijLA29GLC9m6PKdVEvbSiwjxx2mDuZUtzSLoeAnJdPn7fWTGqUX",
  "key1": "3oxDAPwSor6oTqJKT6F8NnSLbbK7hunRBrZeMFmrtgPuXNybdnnkv8sqZT2JFZ9jBDw7VbXAT4JWHBsjHjcjwBtB",
  "key2": "2ogMCtBqoCv2HeQhQYdbnV5sCMEtLwcVSPurYuXbfeECK1DyXYsPrb2JSGyiADiZeVwCc279kcqh7Fa8K9uMikrE",
  "key3": "4RYScmA3ZDzLo7e7HDTHKLnXCWLtrCBtfkSGrEpj1mijToufX1L8x9rYGHb6HYc2VgBy86W9gCFmZkjjJtk445Lt",
  "key4": "5mANWpDopHugAF6mipmjMYoLaFk772GQwm5pSdc4GT9vPUB9zM4MPADWAteZwEnZ5jcjVomQFFt3T8jbDmK9oJKx",
  "key5": "4fzcYs3He4UNqrQmD687YcrWZTLK7oyFDsN6sFBnWFLgQg2PT73vLMMvP9ZABVunHD76buECjLTSKdn15LCaF1AA",
  "key6": "4BZxHbWXQF9cQjnTQeNyya5B3dcLMFZHyKEhxvAYyhCHYSTDNbmnqt5AhqJuAZvVuKjFAPDRfMAE23pmy8ZpGEw6",
  "key7": "21jeJfH7M2h7tUWszSFr87mi1f3JKM5cST1o68pupcmsS9w3J4Q8my6AgqBCtdfPu1f3Tqj5zSw1UY1M89WCv6sA",
  "key8": "38cj9rMZeJ97NxN2QWoixEaQBHeug35uwraynXRPMR5R9vWTPg4z97Pf5XaJTCxs8mvtdyqTPRFnnpAZubVwjtm5",
  "key9": "57333qJddrGYeNbKCPehhP1je8168YaSB4FPfAWZ19iyM9Rd9kPP5QeHoq1FrrwbcE4p2H6JbnJCuakht2yXLnxh",
  "key10": "25JmynnnPNfMG3j35kkHxX6akn7gWfM2XU36gaf1EdUNc7uYT7zokgRZ3jHGtfMJZHUrkjqBVLLbAGkmKSmfmLFB",
  "key11": "4FJcM393UFVEmYAf3f8WYrdsJy2SZYrk92XMhfWRmXJq7HcVHVkrqieu4r3GWaRJnsTV14UHBcRGU3Nxx9aWTr4a",
  "key12": "2LnE5ybP23JgUMvxWz8wWdhsguHPA4b5BDPMQFySQF96h3tNmzvPRoptUayiNSESoXzyzYef1AUHhQ8teLUQ6oxu",
  "key13": "4KtRxqHT2ogKsq5jFTACydBvVTMqzTaeMKqCqbTvdzPrAbgRmrJnKFLdBq9PbdPXFfhT45jRcXDC4ozmaGf7qbsX",
  "key14": "4pjE9Rw3z6k12rPHdrinjtQ9ZFxof9TJcbXqk1Gr8m7F5SdWtrKXHshN4mhMnoUq6gVHCVYucQYnmmQdLCbCdEWi",
  "key15": "322Hauo6M95rWiSDCPnmaF8Rd12bJneLe8RfYJYTCwoKSDk2jdwp9iA3Bp27NPJoUUYuiuSCToq2h8cbDDMDFpjB",
  "key16": "5Y7ARyQcxbeDU4zyhmnikh7DaDvH6SNsFaX2By6wLeUh1x7DejwUvnebaS6PLmVEMUQakzGLrrkuqNAfNuTUymZS",
  "key17": "2CaLadMZou3QEkcD8pW3S6Go3o6BiZmaGwKL8buMJxVJjT4Sit8cgt4W7uqrb6h7AmAznVRMYJ7Ls29Nzie28QCp",
  "key18": "2Mje6yxGsQXE6YxkNwxJqDmbTUdPuT9WkydADWnC74fCF619w54PK6FasT5hv2qK3exzAPC9m3T2kwH2NEcH6uQJ",
  "key19": "2mN4r2aF3MEixzaoW826r2HZ2nrsCi5N22U4MXgoXpuQikfcxLdhvPLZSJonjo1VA7D577J7pwNQc3Br2w98fN56",
  "key20": "4p3GjwAdSG6DEf7dmFyxf81Tj8ebXGm5Uyxv1DsPtvi4GrxUQqo77gGaWiNeRdLA1fDb85UbXoLrznDEoUinGx9k",
  "key21": "2GcM7d1kQv5Ga3TLdX47YkKJxZb3xWGivz1cnfjKrX89hBvK1cdhrCvPu9vPv6gDP6hjwVMtVZAFQ8JmNiqWV6DC",
  "key22": "5KaoDyx6YPTmr6KTZwijqBuumvjDGUTBxQ5N4hStQqVJVwdrJF73XiBjTJSTrkQKdVNDyJLqXbgMcsSeyy1FN7p1",
  "key23": "4BaNnfKGfoJxCMZxqhXY4QzfRzAUKZK13yxPWUJxQoqi1x4yVuHVLEyKzUEnUMMEP4QRSQbGfMaXkfDbwaFNVUUx",
  "key24": "2rDzS227XNcA2nyuNHcUewAFG2kYNzPMstqcvWPQrznapdCT9n5XFSXnkTTv1kQuQotrR6vGbhqTEY1EeV9hebQp",
  "key25": "52YAbEh2GnRJnMCswnBSe2y1zMCgH9dBBiEqyDyQQEBLpnYZ1QZCPMpLA14a6yiT9Qg8QYpvS3pjwMUBa6NBrbVQ",
  "key26": "31Cvcup7vtYVQS2tK4E5kx2yrgSnzNh2Dh7eXrmkhnA6JtELucxmEXayxk3RStAffmRXGJT98eCY1WzApkFoybLV",
  "key27": "KL5mgJLUPvAcm1d6ut3xYWGfvuqBNMAtAAK2wRtQAJX6QDf4G5dFvrJ5kja5i8FPWaefGJ1bUsHNWTDXdPf9GKM",
  "key28": "3KMBtz9zFeiPwBXfMPEXMUeBCHGD2niPuw9LqUSeLcj5vg76dG4VuRDJNPcjrurbQ2WNcLWEMR2S96tmPdCyCf6X",
  "key29": "4LaLdNv6pY8gVCPS13FdmB2h5T7gwZxcRegsyYLaZaA1SfFY6WPSswKQbZSA9BwWzZ4MVo8bfHBvbXX7cr5TrDGY",
  "key30": "y8VZ2Hk13XYkaWFAe5tRwV1epBo3kJQcMNMtLySvo5Pmn3VW8sN3s3geBr9santKaUH7wTvSg9HCVbKtj6ewhHX",
  "key31": "5AFWCcBicgATqfsAf8ZytmuPUB3GsZAg3feQrEqXirgVmyXUg334hY5jwKGiPQ3TCrtTfSB5dg8pCxRKKaUb4sjN",
  "key32": "5uUBgLsW2joQ3xv2gBrucE2PQHWLYRttVSsDP7TJBtuYZpPQhei6CvyEJDPhXApLdnEPxgkz8p6SkK2wmBZrmhrZ",
  "key33": "2a1XroKQ6m1VXjQCywjCuPjMBWWMgmXrHiVtP7ppyGKjhAQAbFDftxGiY7YrtHPxBMBwgkUduWMgcHQB97txZpAj",
  "key34": "4dXKXPmThxkUaQ91GnGUQFwP3WzcA5nn1yqocBvb8VLMnrtgvJMkZcudTZjpje6fE3h3QZzH2VKpWrbQyxTgFKm2",
  "key35": "MZpsBuuZTa2kNFizF3Xvb1tFevdi2caBN5DqjtU2gHwBCWUr9TqpaEPr6nTtkRPopwUSjvfbgEjrw3k6rtYkb4u",
  "key36": "4DXhSoBdm1Z3vEPcdDms8KgNGcadzkz1b2ka1i4m4kRYLxJGJ7QfTDykU7htJ13cTBVdZ9n7LAaoksGsUHfRuTxr",
  "key37": "47JVGysnByNAyT7essUaYNhUQaBCNmNbSVPPssJ611KWwovV46FCZEmZxasddxyM9JEguNVhYfzeC1ZTKJAACDQJ",
  "key38": "4bjrcL3y8h7F19muJumBvtvcgFeaVqTfBVizFWhFNnvx4V9FqjJz81uBG8Kh8zTMXTNH2aR1sZvt1KVtiERndjCF",
  "key39": "39T6hRf6y8bzRDGxp5Gjj7feuyuDqF5UPfbvct6o4TswzpfcYkK8HBj5atqBhakLWnQy9j7AuCY2LZUhWMfWADR9",
  "key40": "kqzy79bQHi6d5KB8DpuX69khNuxJXCUiexmLeBDnSMHiBdjtaEhoE6T8cpy5zYQuw4XhWhpjVw1TAqcHZLaKKtZ",
  "key41": "251UGaLAcm3QoEaG5Wk9ANEHcvcCoVfi7y9p2xXtB1WMmuyNLZVi1McqzHADzt9NaX8aUk1JS7nyUzJ75bjpmva4",
  "key42": "3uaGBbh9iyCq5dYvtNE8MX3RBwdPgHM2CDBLaM2S1J9ZmtyxAPzQF3F5u5fwpyXdbSmTUNrbLYLLEJ19S5MakLcA",
  "key43": "471uXegU7SxzRBzkAKTUL4mqF4mGMCLM7BMgwa4w2XWNz9aJvBrJoizKv1WDyUYh21tmsspk7kovv1Ub68ZiKQaU",
  "key44": "3WeEHkwKgVxgrMj1dGrWwNwyM3scyDuqxZMvv9bunozVZfSX2wYWHvxcxsAcnrMGKJxqhbNRMDdzVA8q4EBTKYwp"
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
