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
    "25iWC2ThWqRcVAgH5U9S2ypEphbQ9xUxGizB2f59cUiR6J5bjKGtJBqW6MjqrvTXRRdFY9P22aPL4PAKpXW1ATWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTi4HMS4JYLLa8dq5fF4kguJGM57BoGHDGtgPhomLtA8b1aWQHtXoAV7qczmbVsUHyTA9gL1HifHKqMY3UYbioN",
  "key1": "LhjiJ9XGn54FquhKjnq5yNufwsHDUirChNhMR54c4uXzXNzPBq8E9f2NQtGibZmyXMGpZck56UrD2MqVVkCmcR1",
  "key2": "4S4UvUBvV4ichTmErkWPWPCks6hqPpzgPpXyBvt8sE4HehZdmh3nhm2EsVaCnCnU2KXs4QZDxGUfqSm9GsR5t3Hm",
  "key3": "5XsLxS5UbxVqmxmY57Uo44czy2zCe2e2TtNCVtJoY3h14U7GdFozT3G7iso6VX9FeybkQAwMqyn3NhQWBJUjT3V5",
  "key4": "4N4tBUKMbJBGtepVS94ESoizYANdGawPf9of7yCusV24nqvRXNRUBFfiT9McAaaGuQ5JLqQaz3EahqVktT7piC2F",
  "key5": "3Da153ATgTL8k1MZZnDUb1icBjkvFR7qfVrRfDDoKEQtKptJTcnh8JBYCS7Zh1mDaWgibg7qvegw9ZWjqFRenh6H",
  "key6": "3C4u7T5Z1t1YWQnvvUsMqAwsBMh6skPFyTiCUF7cbaJFL7YGr2UBbRsLugDvYnX87rFKPSVm3b2B9gow4219Dqjr",
  "key7": "29vgmJD1SDcpzr1otM29ebvW7TqFvzhz95zZKAuPYP66SZUTqn6r7hKsoehXr3FgjrEELYBisM7DUdA1pNWHXbQ3",
  "key8": "3Pawv94hqJaC6LyNiXwoUKT9t7qehHwge4bLFf4J2n4C71uyiX6W3YtLkqqfRiTG3UEVYF3ghC7rbKqY5L7nuYyC",
  "key9": "3z2Gjg9h5bnhLwWpN2BCTFRS5sAtTJ1f5BkxyApuvids89UaxM9az16MLPADNojsxWzLmZeqWpTcZrTLrfG9fQUa",
  "key10": "2FDVsfQk9QfN11uSE9DGZNpDvpbrP3Gp8fK2Kqv33cF8sLvDEnf7sUsvLnswp9qScSTTPkoRMeUuRHT3sH5KetBX",
  "key11": "247xegyFHdXSKZdDwGBNgnBHo9njeNRZugv3SzT1c2VR355tvEkzSscRUqMZxrTQ54VSpGnuWGNdzt1UtiEKCxun",
  "key12": "4EjCr9DmhWrCJ9mB3tksDtroCj6vnjsPA1BLGpZ75rJwrzNoXcSZdjjYqdZZfh4tTESuMS6fxFaWrBmKssvtiQSf",
  "key13": "AWgTnhMAHF1qjUqoJYAvBQqAqCMHmc2MxzW1ktdiSQdwDETVVDkkp1SZ9gvuqvS7tBo4qpMfgqvpWfwHmasQPuR",
  "key14": "5NcRXwVvL1rdbgJMPeLEAL2TVxUqfZgSFt2LUWEirzwBaKLXW86bBU53H2XrwpWzAYPYtxN2AqGFiKHZUSktqBa3",
  "key15": "4piC9JLLc2Jp5RmbPeP3kHTXN579bRLSrLbQ2ZxqNfLs2eF1JXjDvbZUKoeHCPPgHVQaAjEc96etGz2ZiWvWhM8f",
  "key16": "35sDDUQt8VKMktN9ywc4nh4GkmNht7c34SCrSEvfBQsr5kCHyuDqRWbUR1EnqtepKNFd5AY87f6cqoR3qtFAh3rW",
  "key17": "36xKXCMeWKKFpQqd3PgAwfNQmgwTgMbciZXozCY2DqQtRxe1NJdtsYDkKMnKohKT3ux569x6JKedoYrUo7doC9ay",
  "key18": "324vj8LEoKt1voaMFPp1dGJYQG3ZWhwo5M2BxRaqAfgxUDiyZLskSDJrs3A21WaVGrN8ivfcNBfY5q92byoZBA48",
  "key19": "52aWJZBgBBFYnC1Kn3g7qb41FDnwuHjRMzX7ydNx4eDSnNeWakUC3Ha7Nbwswhb3TRxu64WsbwkvbXBEDJhfbgjx",
  "key20": "5xNAmdkGWnNaSxmqfT1Fs8415yaCeGUvzKC4meoL4qZeUbdR9zmd2f1XEUM7RT4LhHw61iQxvTsJJnqgkPSK3odM",
  "key21": "2rCWyKbEc9AUhRpdMcf2rotbGuDmsNZ2kQeD2Le7tXorKKws96SDEwASbbk9j8Rda5TxMsXCa9Cf7TMY2vc7yEsf",
  "key22": "4HptqbKUPvXrQesyu5WQcDjtvpsZLu7Wd8Yv8FWE3E1LuuaEpi29B3bvcrj1tZG4ajrQwA9rnYaGmo7VGdTZR282",
  "key23": "3FU6oqaHfkRwVgPCi75SKeVjzEidofyouAExJVASUR5oX7hGYmh2rTH64AThsM1mqp7YHuAatcgxsFdDR4mFHqWk",
  "key24": "251QtbvHsYjw8scUfBh9wSu44ekgKHpVZo1hWZmZvqF1qLP9GuqrxoSt3wxb91g4DGMJyhCANFR8LgHowJyvNzy1",
  "key25": "GAkdYPZbzctCgxBGadh85zbYfWaNQYaxCSVZ6Z346623Zg9unYNeGTprtHVXtBusvqgyP3BP2UyukcVR6dtRJUm",
  "key26": "54phakpr2AZYADPKKF91fHHh2YWtbwj2xA1i5vLztDdhSuNTRUtTAa7pxjrfmUVuD9US8GEPh7R6N51P5oN6rGQn",
  "key27": "3Fi4dNpJwPpBnKLJFZsvPcTQy4QY4iRmZAD6kRUgbWXPzxy7azepp9hKRSa7Kt4SuiC3kpBjPtqLuEW3t6fJpBQA",
  "key28": "4JDnqn5sVwrv2yNJX8b2c2NE1dKEwrbybbY5eUawhELjWzQ8qwpUp2WWHivpaGbZh65ZLhH9AUp55H55ud4UfWVv",
  "key29": "8ZZArjhjvpZcHGDgnCFV8v3GHUNZwSbmAVR1UCq1K7BibPrHFVLDQFrmatnKRRRtRkGz39xzBa3eVrFAgAfSmBi",
  "key30": "ZiNneXcsUJ9LJRTuPoWSaCpRCAVq7S7Fk1auPBZXyfxYC3yJXAwvoGMEpNmVbPBu8ye9QnN5SNcYiZt5hc4em9b",
  "key31": "2F3MNHAPpDpMLtmX8UHZc4dqRXUh6oRzTirEgJyAijPMCK7ZHLieeoPR7k8NWHJJYGEeVJ8VMp5vTgicfz1hkn1B",
  "key32": "5gWiVjjPU2fjgFmmQWVMGKdm6Y9dhteN96bdRwxs7jheYM2TemPDJdGL6CQVspRwVcmnD8NKNTDJhQqrTovzpxWP",
  "key33": "3ZeZwCGqo9mXAmnVRpYx6KkSJNyv1Xu5MXqCEvxFhdE3p1AdiSUz5GUd9HbjV9X9fQF6qrYnaFELaoPhmFTxZJRQ",
  "key34": "32Bd5dfP4EyYad4k3TLh6ef7q1Pc5ztuV6torbFcR7LmfedAYWg6WZBaSaswbKYbKm5T7eL7XRKyCnenQsL1Sbzr",
  "key35": "2jf4sKNdEEbwLQbiLrTPgcHDjeWHRSw1uWQe33fssAyeHSSZVianDDXRizQabWhytAQuqU18fPoGTjvNBom8or5V",
  "key36": "4fTEP7dTgfnMaFB7KWFJe6Ag9HwCjdgmiwf89k8jvVncbcsfotjii1sNJagcBUuFhSdM7G1PbgUStZz6Ms5mFUHp",
  "key37": "2C9u5M5922DVZZvzV4i8VcqdoiJi8obj2dRrYycuk3PHv5rco7EGMZYDrTnvZiuaMo9nYVXBWouTDTJVVxYfQmqL",
  "key38": "56LnKduiY3JXxJ9dVyx266Cu6e2Fd8Sekgt69sqh91ipQRKEoxai9kTxnWfn2S1jyo1PsoyeAx1qiyt3Y3hsGPTx",
  "key39": "3uXTr2uS6KfgSCKY1fRV8GwzyXRNuk769Yuq56eRJouYYAKw67mfWpQoBGCgxH7umR8uabKodoGYYFXhhzgErhUk",
  "key40": "2cHqp1bmKPMQRvvZ972EYyXfajftCdsZHEvkwTiA8QMFXnSXEsvMeSdsJJbk77adZYQrF382SBYWUAHCG9zADW4Z",
  "key41": "25Kr4y8aeYLUDZZBoR8Jr8XC9XHD3rXhDLqrbBShmU83TSprnZmV3KJxbuzP8BmHV8wNk55jxWhrKBQobr7gzGYa",
  "key42": "4Ue5j5ZitPvcw5Rq7tjZdXbfLt4Nerj2aCuLvZvu123Wc6hRGX7dbGAFyvLvYjfYy87b2nGyvxxR1cXkk6MhsLrp",
  "key43": "3ftLQzKJySVPxAnchBWorZctPLrBQ6LMR1zemvKdddAnGmmo41oTG9XMSnkX12BjBxSHa4zksrwWsEULWibkwvu1",
  "key44": "2ZUg4765NeuMfygBWDBLQbpu9ugveprvwWRKKmh1vaXD5kfx3bDXC397KovDFep5yDRdBbemx18C7BKqoFF8MCYD",
  "key45": "3vdpi6eXDvZ6VXTZbQbxaJYzDf7HSeAhUU1hqpjMYYzJMmmkq61qiPByqCEjTVSDshgcobPdNzPVKZD9ftAVCHEx",
  "key46": "2qoNaNfowfGQ66nZL9eHxQcsX8j3G4mZWc39zRpo1eGitpkexPVUE9kTidciVUsXTTjPsE397ouRCH4vTQDcKTFe",
  "key47": "2fzWLSLxtwdMXLtCtuun8cG7vD5kfDKtxUwRCYgXE5EFdZXJ2YKv76gxw6xBqQxWFXWEuAnkNigsFivGik41YKS3"
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
