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
    "3pRAfN9xouYB5W1sTFLbBRfhVL6WjPADUiJJ58VXGmbBUiw19ShmNY65GCL37f3pUcgLS4tSbjkVGs4wphHfjRVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pHtXHxFpZDLAAT1JdZA4daW6UuRW6rsb5c7ZH3or1EpCquJtWeS2phEgsKvj3zL7udK1RqZW7zbJ8H8TJYWkrM",
  "key1": "4P91fiRBmSjqyEnrpKi2mFRoY5vesHMFhNVEY2BW49X8aynvHyRL3UoWnLFd7JaxsmJUccEY9aPLUPiuFcxzPdpE",
  "key2": "2UBJfQDma1YRfQiwoHriSJxMu2S2AFbBXRs2kTdNFaSX28Lg6HiStMrPrMWKmD8zeiGh2pKgh7uH4HiX1SWyjDq",
  "key3": "2YbXpB9nbp2C25sps5vutApnTM83rwUdfmy1DjJKuqm6t41Vwh5Js9QFs5Mgu1FN9fdkbjJpcjbmeDu1o8ne9C9j",
  "key4": "2EhaAU11nfbe3vSGEhbaSBy3NGyhHC7xPNu1Lfi2NxW4Tt7sHBKCpZPDWKiGXMHj9oqbHXKhixuyQWfnjFcXzPGg",
  "key5": "5sRXgozPfmwCtiGUeLmPK2HMNuZqTyrqSzfrrggm9nGaNV1SQQb6hK1DpJQhm5owG1yzSKSVmjBKHMoLFsxZNcn4",
  "key6": "vDzcq8nYmKQrXhxCjknfLWdiDbtVn4ZVduArdHshsTpmFMqRGCZHZ9TFSyXWePZuu6ZXbjfuvSUkkq6rJR7F4AL",
  "key7": "54JoMQ1QcQ92sBR2tKVUYVtBBHBbfGccM4kNd7GmjbpuFisJUewFHTFi6KZyBERKVjaibynHgmKxRGnjMaRoY8yU",
  "key8": "4xTTDAhzDDwAn8cFwuAeZd7AfppC93SrbVpv9HzaoBJfq5JaAn3MUuhGJ4FaJ77Z8egVFE82Tj2ES5AT7AT6ecHQ",
  "key9": "2ooBErfAdv3AR4pgGtSYnRkJrvK62kMqCy34BoMqTghKMpNB4K5x3fkL2TxPkSaDmm1P8wxMntY8DmpEL1GHBLSh",
  "key10": "4Jcnj8uekVnSoGph7wM7iuTXCaYxARhjBX9JDdsXPnJDGG3jtnF3VGMdHtdaTxfaRacmZRch1tVnhC4kDuhYfGEQ",
  "key11": "2TquDCbLKEkyhuCVtsiwmoXKP2bZjYtFaHPjmnEQ4tZkUVA2Gr77DwPcrt5QXcJgzdmaJ8fy8RRqAGiKdq9ruprK",
  "key12": "4kGshWeY76kTBx7kmbpNSrHhxgFvdS9RhedrNHzzNXH6hdWgq9qod3PAzmzwH26zSAsY5GvCW4NoZPsRgGy2uM4y",
  "key13": "2Ptb9FrNH94GyHyhRBj5XTbmdkE9A6fe8tjbXiXzrDmTdoDuuh7YX8c8RwwKHWQ9dqd82YiK3vQRQkQEe3xbW8Lz",
  "key14": "2WsLPSSacfKuwogm6mrkXrkoLUd4vWLiGopk2TD2UwvZtKx8fernTr4CiGiSMV45hDbuyUFvMKyw9YfQ52FWkZgX",
  "key15": "3pgC6sXXeJZYpkUdX2y3fRYUwUEkNaGMhHDAAw46fcPW67dC7NJ8ZHpGvQXtaen8wFwvKqVGkhA9gS9xARAR7UcE",
  "key16": "4uXCZzYwA8T3BST4dyksrHiJkR7z5gjburX8wVZLG5qXJF5EX6H2o4DvZiZsnuKDoGPkUnnAWLXNN57arzKrqXog",
  "key17": "4NquUGfaQq2UwvqacHum5tJ78pHszh9VfHtS8SN6PV927zHX94ryTXTunrTfFysQL3LqBxL9LGU77V6ZCu6GjJJK",
  "key18": "2xRrHPYszCc7veQ3UqhbVqRqa7qhB6DrGjHpapy1pFqah69ZHpvrRnZSMiEFJsMAESXXbhXuXyK7EyVu2zMK87aR",
  "key19": "JxHzGbNFFG3iK58mTge8uTSG2zFDYeiL4wxxJg8GQYGHL4ZGW3TAfoFr5DK2JaJFbdxiKoovQ6mVFfg5QgaWvgD",
  "key20": "5ss1a3d3beN9nUrd2jjSkpSpTFuNAuyic8DCHDR5VVet9DBNnD49ocpDU3NnqbJVYe47GdY6RH3fDTdHKr8CZuhe",
  "key21": "4haM2pWeby7KHExUdVwPvvR91pJHxZmHwoUQ6y3Cu7V1DuRpUCucU25SCEoUsSoGw7nw142qfsmdkMDntSmRaYxs",
  "key22": "czH8Ko3eXA9GWw5XfxsDYQGXTfqK1cqUqT8xjcS1C8b4xJ3XUrwP3U8uy5A1QVHrp2EEGxmNjcFaSfrbM78ifG3",
  "key23": "2H84kCkbU5fpkweCsWguWFf21U1ddSh8ozUi5HuFy6MPkNyjeSVzKJmidBbK1wCzrNkaeDBQqd2ujakTJLW9iDZY",
  "key24": "aPY57vxSAr1NegVdDWY6DRNXu4Nnxtit4gmd1DC6ek9AzR2MnPTkuyUpZCD6ciPzZc6HY34gQLdEcaqrVEqabpt",
  "key25": "4yYUumQFdNb4tz5mPXRaVyKeopBx8YxBixvcrb6LFVPnVHhTZEiTuFYL4PrYXwCLvgznfJpTVDgQgUZdnvHv2pPV",
  "key26": "3HggHRkFEPXR9nLbRioCFu2C4H6VnPjY3JNzgrXfw3As97Vp95sjEYjqd2abghMGX746YsQyjPX6QqACZcbg1GFy",
  "key27": "5r2brFaKcCUkuDZprkWZkYLUFJqchuyQLXRvydSNXDkLrHMoq1iYnVGwxdpBanHPxyVG3Lige8SF8n85tQ4bN59t",
  "key28": "2BJGGNRZETUPD971416UUSikoDxZ6DuLK14ECtoq3TuU938bYujpD5DSPup9Qdvob1ByuUDaKDGmr6Enmg3BY72U",
  "key29": "3RhXL3RdFvr7dyirSnAhLNUY5Z2JVw3UtDNYhpuc2GfSZrNXV2Zwo7D9ioLdz6WvLUTQ9jFBJ3bnJPKbPjNEm4LV",
  "key30": "SGqKKKPWmKcQC2Ns6nQ8kuZ3PLq9QuVVRxVvm56s9yScefSVaREKJ3oZLs5Vh8oBWMoAfjeT8hRNBq3QPdSrMJ3",
  "key31": "5HcCcGHigzGooskZWU1wikaBaX6SvLgLsyfwU3coND9X6vapr7kgj7V3AwXzmApP1PCunVh4iUxyr9LMG4GDtsUR",
  "key32": "367xYpiE2itL6UdhzpHXDCQZqq2rQBZRSc6QFhzZrcTG75z6TuvJuc1gdwoJtY8MxQdSWNjyKvnn8VLrZyLm1h16",
  "key33": "3RFGjh5GiYDnkiDjs5Wfh2Nt5i553X7NFjXJZiBotf1ADpvk8Z4voDEShx5UJZGUu9aVXgxXWgJVRc6Btt86eqvq",
  "key34": "5JfejrPFRzUPhHaKdgRPGR3ZK7uciNeMJp1aZHwUt7NSCnffJwGcBeKSzKGyS9HgepcXJDUHnydnVRvGeKD5fvZ6",
  "key35": "7Q8tDgbt7a6dfPXPNU638RkcaA71ZGxoWrit6tjfSMZK3zDjwCn9QtLs94Csib6NwJwK1EBYTx3e7txi6QUVG19",
  "key36": "jUkuKJ9iaRMccoj5Ma6ieUEaa2xmTMJ2mU25MsdrkbJV8TvNDV7ZLjBA88HKAZWrJigHJtqvLPXdJ9hc9LAKqbR",
  "key37": "4dogkUctnYA8HPutBH7XHC7xJKPd3c2VEmCh3wLaF4RcmLET9y8kbhHXqbDu7eS9CVA1uavSo1M5kGYJzFotNtCC",
  "key38": "2f9anJUdgd8UtCPN3cNhMugeK5Asb6gcLKitXQfFxrWjD5aQcCFCjs9FofBk9BUvCG1Q4fv7vKGRqAUX63BtUqxi"
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
