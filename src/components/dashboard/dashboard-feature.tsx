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
    "FfWT4Cv3Xi2jjUS8sAhuYnW9vhU3NS22KcpdRxoBGLozdEPPyVsVSn2hvWDWk2ZwdrewnvNEMvzYZgsZswZrzbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDMJAJ91Xz7TBN8Sjm6HhuVC1pJgakxaNjyf5Nef7ZvHB3bzpa6dFeaK26XTn4LQkY8DA231jzfxU8Q61k6S6GG",
  "key1": "3hy9ZWw4L8DiZ3hXyrK4UWovheD7ZHZzu8MBjDmvJGbi5ywoyQMafwjV3TVy1Mw9r6BQTg6LoSqXqCxLokEPXf6y",
  "key2": "28XckPMKyXscesejKisVN9bTwUoztubwBGdbHGcfR2Mj2seYgZsdFic9LmesRfo74FUn4caAsH9x7BNUBcCcGiZw",
  "key3": "3XUurRshjE2h8mLoyXQe4N74N1hGDyF8vmL2fSMxM6QhCvfV3u76MxdbBCBBmETNN6uE6XQwMAQ4F7ATCpkuXB8o",
  "key4": "2ut7nFUX56aJkjFUjKKqymoQBsCUvARiJyyq4PAG47DoDShhei3zZQWDRGbgMvQqwzYiYpGpbTo7iGRz1jvXzmz",
  "key5": "4tAQPwqbvibZL2mpB5bG3t813L6qiMiW7oBAcZasN71iCt2d4B2Z6ymo1wogGV6ce9PaVfdd2o98ftooD3PxKXSe",
  "key6": "q1YvTLBebmMjr3VPHdov8JUQMsQU4uDnoDtZeYSb9r94UaqZCg8BeD4HpRTkkzspMx2eSpcFAjVGnPf9VHk55Pd",
  "key7": "v2K5tuy4dtKSMp1g7GzqWa7m76iBctFhjM8S7yZPMwvcfSRqWtjkJDxW9jdUx2XiPjJt5V4vNKF4YNM3ie6D6Yc",
  "key8": "4ZwvRJQDnL9vS8ZxwDhX3dMV9zHCG2GjG42U96F3rEBpGsMaipnEcWzEriG3vqJngGkdWRFSKrffCW3yrQSzuFAL",
  "key9": "4ucCuiaBrfw83m4qfWFU57Ez94a2EVXmeRyE6jN5RJAcJ1JwjmsQVjME3Gn53JRCP4AVFs4ZcANEu3rRJX6iL4MD",
  "key10": "kspE5rrF3qgpMsQTV4bYQ3Xtj5omXTRnesCYUf7bFeTUYjCpaNAadCUNDFWoAu7dmumCUNNVUfD8Q9zfJBGJYVK",
  "key11": "5nXWbnsu4SzUCtA5VCB1kbvvKHLprpqWHdDMgSddd4P4SfY7sdPtduQksjnjArm3WvkK9H43vLX2L5EaaDpEfQXz",
  "key12": "R6rE62r2jmn9wFXEMtcgYbPA7F4GBM6HtrmsYf7fCPRhshNELVe65dpk8cwPNtTBKE8pqqGi3Pzoadi4B8FKq7m",
  "key13": "3MhYgyM3zkfgdiZkPdpecuw2V4e37EhqzxYMLEEfeDga483yoz2gsqUiSeMN4FHcuhakTrytqn6Av57v42NeRFhn",
  "key14": "5mDjMdKjq5G5j8wzysGDeFLCeVvrX7mUiUyf69VTap3WqW57gDAfsQ9jRYwZo6eS1eCTGeWe8TNTCE1WEeWhFeu8",
  "key15": "666egFbsYkXCszG9B6d44fGUM4w6sx4yZtQktR3AP4pDuSEMJiYdDiNpNgamzCDTi8gFiJr93McRdqDtpCvK9Aiu",
  "key16": "2EE7XqX5wMcH2y677ADT2Hhceqz1FKUVUGw2Fwr4z74pj3173nkWxvBwjqoLD46hByerMtUXJNsqHu2vmziaFrSS",
  "key17": "2Dzg8vkJaoCT9GbYuE8dzvHRTHgxieRrUQUZt612JAvrWrYuuH7gBPoZbkhJtx1DbWTRp5YQRodSKvnS1NAymWMu",
  "key18": "2ePqwefZXJRq32QECfRdv1yQXx8DyAKDpuuX6hLQcRucBCr6uLMeAdGrHiG3SqB38N6d4N5KmunjJxJZMU131Vot",
  "key19": "2R8dEo5HET7BVtSGM74UMzmnhJ91DXdQbRE4nv4absMyfbC1wzBj5ymup86Vu15YqReghGBWgeCSgoZRKFP1aQib",
  "key20": "2i1b8wDgVrmTicroqcrBnHhJ2rYKstnFAoz3r9Tzgo2f956s7ZiVuKMnaQ3YCNCphGs2K85Rk2FuLd9JSjj978aZ",
  "key21": "2XwY8e1jqR4sFbT1B4hH4GBsiipLogjgG6gNgpehDUYmqeR7VHh5v7sCWX4VHGQKJHYLLmFTQFZ64jv4SwaHMNG2",
  "key22": "2exqBZK8xjd4XwP2ryxXJ5thzzSMzxvRoNBe2HumzNYJHQWiYy1sbuZVwtV7SYcKKtPX2aQVDwK9bm9knaoWBNCt",
  "key23": "3Kou4Nr3LW9ATzQdQtrexSqFUf2Js26NNnYANQJe3tHKC8gtGwd4W98viUnWo94Tk9FbyCLPF7MErLaEEyYfZSQs",
  "key24": "49XjdxATY5hUd6s1CorXTrJGUoo5szvhJLTEMX7xg2as8Qh8r3HWZ82CKZTee9MS8KNUZ4UitoqJU25k86Pfhb3C",
  "key25": "3JCTQJp56C2SLwNAovHiEuGwd1QskXuRb3w8U2VhD1JduLLQdiXA1SaJfrwMAPtE9wJZEk8GGzXcXMygF2Qc8TRz",
  "key26": "4XfyrCSNAr23CUBzzJNmdFXkkoDhNj2mas8bBvAsrcFY1atZtoVXFRygBFwDorpo9dbaUN1yTXymNaSzjFEsYNVX",
  "key27": "4rEJGW5pyZCdNzJwVcv5oWs23NcXkZcmc9SpibYjw3zG4CGFKTnrZmLPzeNrGmTjdViNCV1uVWPbh2z1HwsaciWM",
  "key28": "5MrevdsAkZ6x3NPFJUBTxXmTPz7SFY754iEkwu5gVokFgrUTxpfUSzjqSnzTNn3yGSoLKrepto2BvqAbH5iBoCtb",
  "key29": "53JXeQjQf9MVnj6DjYLePUSNX9gdy4Xk61vtXHVN1yeLcV9mMP6S1sE9fmkn7zcyeuqJrBumtxAWGMJDsGQNcVvR",
  "key30": "3Nrn63Nofi4cyUsqAGR7Un5SAkokxB85jTT1WAo52dyojhSsi75R8cUmFCU8J2KLtPMsv4ZdFXTPAQfkT8yfvrpq",
  "key31": "adiXUEcPVVnNEHVnLFFAnvNKFYovBLHa5qjbTUBvz4qg9D8bD8eUWSzoBQt2LhVQeZTFGqZNkYGdro2kyjmMxhW",
  "key32": "3om25XHo4MFE1ueyRuFmG62mE3XTtVAxJudNXPueiKrm1HChU7oVUVwooTAbryDC3aeH6dfgDXEz6Up3tafVVSe9",
  "key33": "4jmhvtDrRD7n8PhXDaKWiw7Qt8DjYF9rpTZVvWVPg3oAaXgTLgrFf3VSTFikCf9MwbaTeuEGsoBPaFUMnVfJLfJ6",
  "key34": "5g4eTgaCrsvKi2cV9wNE9eK6XzUV4DwVJCCXpBVf2UoYJaGc3fMafPnCofGoYrkDbpZ3c6H9VGh7VKJPPGtN9y3P",
  "key35": "uge5hHvCUCVVgfGQWanR9KNSD833qUMbN3Qvw2MFCkTF8Mn28EMPmKFvmP2G8GhjZ1HC7sDquYfZPybv4DFC8kr",
  "key36": "3VXhKSCYBhA2BfWmhZ4NQUJeVE9yBr45D47cEDojMPGPUdXDUTV2WpxbeDj22QvjE897rpbHQFtDdJaJ3nRtr41q",
  "key37": "2x3sNUfdXdFdHiyAsSwaovoH6BsaPs3iiJyvHdP2EXgnrTyCye28sSRZVFJY9ok933FHVb54KJgReFgqXfUuWXVG",
  "key38": "bwfYsipwo2mmG2bisXCk1dvGSxa31wBTSPhAZ7n5V57oyi36ds7TWuKkhLc3cREVJR4RbHKMCb6wx1Kh6tiAamr"
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
