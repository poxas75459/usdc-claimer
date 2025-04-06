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
    "qj8c4Te312djGD4zLtHhYdGFS2JURSivMMaXg6HzfM5ReqKC1Bbt5pR9YxmCMf3qHYSBCxPbPRZzFdPmHYeFpug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3whfPxpn9h6ZVotZiSf4w7PY2rvTjT3dznSdtVMBTpucwBAR14T7zVP3iHLc1XLymScFaVnShj6HR9rCiAXfrg",
  "key1": "35aCBPuHU9faMVhTHzL2jot4PAGw6EDsgLf5P1ehPLvyKdSmxxjKWW8LNtVVqYXefSf6ti6k6W2yNEE4cJ5Z392w",
  "key2": "7e8zDxvQy1GJjADUwnvw73h8gvDjmeSqb71pqMMfJoKXFwMLwLCjqUwnogCSo3yvuDnY9AkCPF7rJ7UGsKnnGwU",
  "key3": "3gvM7y2SWf4ufw5NB5KrZMt3V4mAXNWnnoHWVQSR5kB6pFoMv8xp8v6gLoLsZ9NNhEDfX8HhaKiELHqHGVoUUfvG",
  "key4": "3A25Motv9zWToTVEPGHyXeTx8SX2RbUooLmUJmkWyXvYDU5Nuoo7VPmQcPeJGTRfvfMt4ciNnGVtSTXZb64kzWX3",
  "key5": "4sPN7dX1tCzsPCUy5oTHd2tYwFARxKHc64zYfmXHr8y2m37yE7oKZnUo6ZLanZ7R3wepwWH39EWJVhY7m8AUDxnW",
  "key6": "5ELBehiAj8Di1pH9nxMa5KyGhXoesoH9vwJMdzs3tN9MQTgC3y4kiBKDig1BioQuVPSmAuPrbbnsN6K8n3fNbwuQ",
  "key7": "3f5WMJ3vKjt2Wobu3wxWdvNRRLhs6N63Jg11CjKD1YsZPbFF2uoCT3JrzZEm1YmSZsknMVvvrV7RgLeWoWrNNhoJ",
  "key8": "2Wik27V9Fe4gq8ckh9cG3YrofmUZT3xm7eWwuvYkwKP9D7s44uGgrsvCRtQhQdX7FmQptFhRbftPyba5icfcD64e",
  "key9": "4R2Hq1cSRbxBM6m8VC4P8aKzsYhDAfPZuN28EMrShn58SSZmzZLptAmu6swnUt8Z3RKMNjDRsBrxw637qA1pJU9z",
  "key10": "5ZiU461jmJX6KSMpyyWNALo8E38sbdfx7CqTVB1SxJasDXvADHddq4p7Lcqh8WpB1xBFhhqYGVEnXB3N8MHc9TTk",
  "key11": "33b95FHssKGV1UzY59rZutStnbKePpu9ZCjudhTzDXR45zVTBhy1Di6SfHU8kKvoYkWEJrYk2UJxQHLeBf38QnGC",
  "key12": "2QQH3FURh9wg6SGPX7MKPGmyPFaqpStngMpYc5BhTtpHcUcD3s19TYoZt7hLA5csx7zSt5MCnGgRCgVi6f2YkjKt",
  "key13": "mPTRRTTxWWVPJ8AwCz7SCnSnat9rtDjPVu3MnYn3jXsjPyUmashga9ZxeF87CJdKYPcZFyLpjHRtGB7ZTTEeNos",
  "key14": "2vyEFgSrGXqagP3q2r17tY6fYcBjUuLaL7F8mXp9yGtAG9ibau5DcNq7scnA9nx85cUGT3P8k4ByDbVNNxG1yp2U",
  "key15": "PC7b9jFhAPDcwacKXNv6oBQvyS4GDpRyiBLsoBN98f9kXNui2xHmfyyew3NXtk8RnhCJzb4N5NBzN36SEYhswgM",
  "key16": "5g2HZzLBDwaQZvnm64MRmuW8xBadRmYjQvUGmfUdbEW5reeo2Y95zBHez85kSWFyVA6AEBQ82qBs5tU8XrgRRkZ4",
  "key17": "3R7ZuLpbFJNBJdxx4nsWWtNBXg6PboQvYdxAhoV1ngbaCS2N7qtwy9wioHCZrPmpLatGD9yX1e5Ru5BfHvoequf7",
  "key18": "2zfq8jhBgXFFDQrgimkvSiMYFxKtxJFJmyFRLepx2Drexh2RodnSw9LoSBdLEhCt6aWdX2ej949Z1J6WLcpn85Ax",
  "key19": "2vurkisns3rtt8AGWqPozsJcFCdYSEYCy8r9nFo7Xaf8UXA14V9kWEY4gW1Ur76HZeTRjXKhMCfiwnr6r3ZsJMDA",
  "key20": "4eYg2kzGMNTxNzEBkRdbdPV3s7rrG3JKqQsZTGVdntHXHXMmBDtABCu4b6LuK2A3PbeFLQtCKDnc3RhdjoMH3Rm1",
  "key21": "3SuFBcwJc2uGnNVq5bLGwZfVeSuiVH6viJ2Wwq2Kh3aaPauVnx4RA6NSdFV6WcvwBUqitSd2fCQfVPNatnKLMRAq",
  "key22": "EfWd8cXuDiVuZzd12pKNNDrmgnngGdyqwV6KmBP4VK88fSTdxkLDy3ehhPMQMG5hH7K9wo3wq4s1WXCF7skAcn9",
  "key23": "5WUGRt8jZdLCdMaWDnGsK1LRFRvGRsow7msV4wBwUvcMSUj8yp4NMRqnN8EetT8neBTAxJBRvzDaHa5AWzZeBxvU",
  "key24": "4kKBSdNNm6FprM9oBTTkXesNkfcg4Kh85ufht7w1HqUDSv8UNene4s46JKKPp5mKVd1cRwJ8dViNqMNy7sb6ztrU",
  "key25": "39wcLnbaUoGbMmMciwDVX6oMJvgx758YB3x6NcoJ5Lc6SmkPaiHUJH2TbnWnu7tYsUgbhWzeJBZnoVxcZVfhC2qf",
  "key26": "5oBPKWWpPuTFEYS8ooNd62iYd7zDFcQn79sWSZgNcRys2oyAUfBdBXm9auWjsiMGNRNUxP33sNPHR6cxStsAVVZs",
  "key27": "25M4aYpEdiTEJMdZTnWMR1sB5KyatTed6TWa8LWmrdLKf65oZcWYYxz48gD1afkbaFkRqcDN2Sta4YWhfggVxesm",
  "key28": "5i7v8dSwvXqEBdD4CcgURPTpxnTSyrAgtX64gYmbtpD7otdT5GX15Mv56coyRhaThAnTxjZz5HHASoHgWXsJPXYL",
  "key29": "yVavQYzoD4pw9vwLo89yLEsM6ywALfEVDvkHon9mS23C3nF8zSzBMkxY61pqFMU6BjvkFLkEr7PxyE4QeXmr6r9",
  "key30": "5Sfv2aT1hR4ibPavgEyXipvhVDPq73NVyeDRdhezkJMiUiM2oHySLMCSE8up2MoKoJQ2rcvNFppRYkbmecKyBptU",
  "key31": "8W1JvKMQtduzJdrxYoWRRvRNBamsscwjzPLKbwQhprEZSa78dj5k6ErqkYEF82GFBR7g5ejoGDoCM4LAkzpgM6z",
  "key32": "RvFUN4LMy9vRM1pJhPxH8oYJUXbABXqrPmdJ5DnQrZsnXaHDwBwbbpFexdgTC9v2cB5tm8ceaE5Qm4kbxR9pTXd",
  "key33": "5LbTxTp54fYLXFgz6G4M4xPWiS678Qjqm6Z6yec13yNrkKwYE2WtZX9Z9rDTvjNepVn9LdNam7ehpC8RmFLRou9X",
  "key34": "ucyLNZcxDBrojRhicR5EHig9o2ZRiyv9C1EUvjZJYrhnJ7A8eBoVz2M46kZGcMeNKRGdXmFCUavfb9BFajKt1YH",
  "key35": "43PTrk3eLipuN1CEDvRW7LGEirSDjfgWnACXTYDW6GxA5wtgcMnGtyLTaE1Q3xJStJjz1UovgPR78APbwEwV3Lnh",
  "key36": "41LYpvJs1j4yYwPRgoPGJqC51kc5Y8n8TCn1pph5sKpkP3p9AubZhyzvV1ADuiP14yZkL7LUMWbxhZ5DSdjo74u6",
  "key37": "64Ywuy27tJKjbRpU3BbCxnEQYzjfvLjYNqpfhThnpRMRPiyNTUoWF4FDiyfHoSkS7F85ffEvgkCPJ17zVZNKjQWr",
  "key38": "3FQMxDEYSuftLJgEpLzxX4go4rLGQ81vX9G9agPHJdRexTRpVc8hp4naLMogQFYb5o2z1iA6nHDZVM9U27viG8XA",
  "key39": "5v47B9JRPxYU9QJnsey7FZZpgxWcpUnSzpxXbzgoH4XNK2eM8kEwbhPMuSYJFcW4he6PLNdA93wQV69Z33smwuft",
  "key40": "66WsBVUELg2WHRW9TNH712DYg8HhSjMMbwhu8cKHVHS59pg7TK3LQokDSGsDSVEqvMghSkHB5fv2Ku6XHCR2tV5G",
  "key41": "63Ey8NKwjoVRNcwoxBAWFvkoHciq2WWVPBKxtXWVajVXw266CbJUV3sfMxeCYHGQvRAUM5gQwuMG7x4JcdrCfH7g",
  "key42": "9wFqDhqspT1ypWbfejig9jqb89ao11cJgXRifMGxwp1JCVcXFihzaRFa9W1tyD7hrqGpqu6i4P7Pcg1ANUdbhPt",
  "key43": "3N1XaUDo6a4y8rKyHoL9ne4nUQdk55nKR9Kvyo5Lx2tHNJmsgDk7iQUDF21v2dEtv8z7XTLw1JxmWmXDd63pcGdf",
  "key44": "5qReqSgEvZXGR5UC9KDDG21TZY5f5xQTCB454FQTWwCiQGPAYp56APwLTXq9XB5XbFSXkU6ciBNNo79Lk3FMrufv"
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
