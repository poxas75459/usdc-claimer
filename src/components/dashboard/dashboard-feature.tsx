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
    "4LMS6bqdT2mdRExA2rzgvKTpjUvhpDaKZvxYGeSUicD9dS6Tzk65MZhTP8AN1bXgTniCL6vDAjyydL13tmDcKXu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1TpoyCBLoGKXadDcMvc7GQsN7jGGyvUF5uoAoT7hqaDLsCV8MyZZr6EUoe8RuwNwr1yFNL6ZZK8PzP4QUqtgHy",
  "key1": "338cFpL2dPqijEs3K7BzwCxPvdgW2woP1CpWSL6kfi9iwYg7YS38PgCuF2bkiRV9ZX1Ja7bCf2oyGZQYpdgqBL8u",
  "key2": "3afFfUrc9BJCtaoEXvB4pAzR5x5g9NTaNxZjDq3VTcZq2yzF9iNutnj545VZeT6kTU54qEnr76p6t6hzXTCFn1TA",
  "key3": "5nronUnK5d7ag3iX3VqxmJhSCHcLPBTRxAdHSk1C7Zc2d463QGyJXFJ8h3VZT25oLThhcpFAJdMHApFRnXsL15Pu",
  "key4": "4qYHPWJ6vQFowwrgWZdnNqWhhAPbKyUGkqh13SaYdFT7XS8XhHGmiefmDfpFWA8ynFkkxhi44FwdBPbdbfqoE6xR",
  "key5": "26rTTDMpfL6vqtDyVF9aGSPbd86VZpArS7iVuHrtqvuUchmcPKyWVtCxMMLLrLKyQnJQBdCQexvLri3kDDkfXi9x",
  "key6": "233R6QN6TbQiR9r6ZSG7jVoM5276MeiijqHVRFSeNEkFosWDt1uQz5V8J8YvhR7dCukxEKLHYsMWR1iED4GELrjX",
  "key7": "5ik1dczEjHnpBDAZ1g1G3gmiSG11PmNBhSPHR9FhY2mWVT91WeHMz3HnNDyPnaxrorUP38P9zfZoeWTmWC7d7q7W",
  "key8": "D1tYYd9zCpifWsmKdVAAAC7WjaJYp2GsRxPdbb6CE6iRsVyMmtTQhzyfYpnviL3LLZ1HuB5ytfcwAHTFBttwXyk",
  "key9": "hGPaDq3DLvDYPFMmuVQxNaKiEX6x1EyfCo6cLyomkUEx2dYFKACkDMAtbH3dGgUU44y3Hpb2hwrGKo7igZ7EicC",
  "key10": "4TUJLfFRzUxykLRZ8TcR7dpjdjLJSogvTpwC2UPgk7FaNJJUxp7WiR7NASG5FoVuBtYAzHJEy3hAWNhcRzgmygJ1",
  "key11": "3qAxPGLpYVoinojJyD5JSBHK72MtKcGADx9v42MK5tY6G1SkytXqJHZBgLhAiSpY3kFuLnHrkvu4mtrDQX1ki9bu",
  "key12": "53frEKhjDtPGNBQgDZRaYXGPeowWHRpHhHC9LE5Pax6Wa8ECwboeRd4iknK2hvQgrYGHfETBS6uwfJXckZpR7HUn",
  "key13": "5U5WUUyuVYsFbEE1xRAdpGM9SQJ6RwQMSrXz4mePXj78PR5fVixH9dykNssytRhUyUKdLRfUydsMTsZ5rveSQdPv",
  "key14": "5xnPTHbSrngEFA22JCt48BhKdZezZGD5w1sX62q6oaEHc2d1CWnSwadrLo8JrnmPrTk8isnT1QFDvMYRwZgpdXfb",
  "key15": "5PLKn8se4joNokZ3rirmv8DnF3fqCHX9KiyPjhTSTtfgZDqbuHr3u2piE1SRVXYCqsyJNWSakEpTZvkepjCToZkC",
  "key16": "2K5wyc7erZDxQTDeAiJcMrKdhCBkBxZxvXUHz9PLAz57euEWJw15tz1hdTu1HwYJ6Tm1NAAdvkhKRJHCkV5KXVxB",
  "key17": "2pY9dqXRWRuW1hXEe1RHV3Q3Ew3uHdqBAPeo2ZX8c3P61FHuDbVemrdH3dMWXSstcRzCrivLEL8UimxWpZDJTafT",
  "key18": "5YdRRY7bFXbFNRJ3FnMEfcCDUv4hhzd7fSBp4AxpB2t9N9NViCtJK7SHysN3Ysrh5TntPm12ahYFCniDQFJfwvxh",
  "key19": "5t2yqmDsgkosr5wpZ6ZTXJMRx483STRfkaJysRS2ymXwHXAf3PUPXaEswC6UFbt2EUWZUcdLttw2frQWGkhApfUc",
  "key20": "3eDAw3oNxKuD8HMdmVSwHAmcWtGHnr9GoZ3FYbdQnFSEyLbxyYhZpAnWrxHeTkCbdjs4fur6QyiynMf8whzmXweT",
  "key21": "HVvjNJTCHshAv4vmkS5QLzvP5JAYR1NPELKkwNcEYuGPXarTviCLfmrSBTZ9zTTJe871D3iHzv4gAVonGHFG6en",
  "key22": "2st8cJPWd6yJearSVXoiHweXMFXwk1nvG1gEQuYSysx3UVzN5KD5h9QeDEf6u53KzsgvyxpnFRXKLeVjh2jE6H9y",
  "key23": "2yJ7p2CsA3XZgadyCGgR6uvbtgtvXJHgzx8vNkj6jjBdPZLwar4TYXtJrzZz1jVas8Tj2dxLWn8vL5ykqNxtotwf",
  "key24": "RSKonAXjAAwvqK3Tpku6HwMkH5xvy4hvxyyLviYcpYTnnVKZaZjktFiFwCXxeuvwAYmBTjxYSnicUwPR2ut4rx2",
  "key25": "57ffGgZTN76475cpoqMTf7h7mdvPePzKQ4nJyoW6dB4UuqG9oWby3hhe3E4AsA8n1iuSNGvDZhRGJ6Pu4xcCKRr9",
  "key26": "2aioZhfEr75UZpC4jiN6CenXyDcNchzstPGGajod8gPjZAuWheNFmKh7af2tT57FDFJkzRwSbfhFGy39DpaUyiAH",
  "key27": "2DwBhk7dq9FttzeEsXSD5YLf1ETqLyYDmmj67Bis41wpNmu5nVPpeikTa3GiHmCsXPnxvTyGrAtedr1quNfoSbSj",
  "key28": "hKSqn1HBTZrgdfQgdBm17k6Xx5umjLVjXXFBZJLb9ekqZBRyAWjQTSY6M7CaKJYfZzuGHnpYjPYtvHAZZ1xXNEe",
  "key29": "2bkfDtVtLF34WUSBBEreWzLbz47xjcgrHs1bbVjof6PNqPMD85jgpwdtY7gXyzRuLJmG44LAL3xwuqT4pGvonNfU",
  "key30": "4fF2gTGG8EjPxN7QsCYeWmQCL2Vp96MG6G1Lrs2XXLdPwUVyLGAz7w7JfxQefjgPLGP5xaCn3joZ6ajdTjJu2HXD",
  "key31": "3iQiKzYmF4BKT24awUfekvzq88Q1PMiLC7bwxt79H8CTvUAYybNE5DNsHton5zQiwr1D7cAv2LmtjAZRj7AQrz4p",
  "key32": "2TLS9PzeA8nrRAXYVhAAB7yKkt4F2yysmKW9Z82RB7BtjWM9hsdmYeTDhUufa7Es43gnj2jgGK5SoR73vm53ZoFF",
  "key33": "35PRZ1kvEcRLfsDQjhWL4dutPNfJeX8etocgF5PqXt2UwxsPH5mR9mGQysGJBuDM8mKwAPNHVGjDsHHFEh4AGfd5",
  "key34": "2wLvRGtZA4vGmN6Zc38fcm4pDvVqX9N7FQSgwexRzCf9ruRbRx8rzhC7QTR6KL4614yaP8FXh4uBzsizU3GNNWdS",
  "key35": "3VwA9Ame5qFLVEztduWnkZSSSDaKj5vKddFYtFbbUpQxqPyD1XneoeaEqSjq5yDuSNrbBWcWbn1CKZyg5hm6em2d",
  "key36": "2RVH9ntcNcnvT92AKh2waDVFsBZXMceaoF6PuPdxrwErbaq6B3iWBgEJTVERRCYJYnwChoNULEvigyRFE3xws3o6",
  "key37": "3BKhAsrqkTEcwowyqJLrTmgJDQqJW5qeMhA8GX5VwwJPy8Qb8PwZJ1JpjbrNngg6RBhR15i8A8ToP1mVH5AbgNx8"
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
