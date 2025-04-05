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
    "dEMueU99xBbqBVQ7NfSHJpT1XWhoLKQkXgmrwRt1493fMqkCdc1oe5QX3yiegPqsBsujBnqMJ1rYKh6BX8ySWhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6J6esMbkzyBQgdMKLPdXDxwifvLFZY6PghMZkMUYQHcrndUkjgt1bb53FUkH3i4V6rxdtM68LUs1sa6CVW2eHH",
  "key1": "63x9v2seSQtWgB3CMjtWfjGt5g6msbyKVoyF6JU179ZNrVf6Pp4cgaJuNjkNbCXtvUi8QczH6A4RMk9gPtzcBu6f",
  "key2": "3u2Twroekd2UbJ6rPxBoF4SqugSqsyGZDx6D5mmiHLrgmEy3Ptpu1SFM87FaLoZsdDsQkG7vSYJvzrWZksc5EcSp",
  "key3": "HmzZKDrW3G3ZqoWg4BB5YZxtN88WAEV4NXTkU1ePUAyvCVcZgkpyuPJTgUrKTMoczZBofKAtCgzEkgsDchS9koN",
  "key4": "3ayo5xB3jJXFdGAdPQiTr7CNJoEgdiRGah93JbKHyD71ezsYtvUZawtRuYxQGd8cRytYRGh8FkHwnMEwFbBWfvPX",
  "key5": "58N7WSp1cyh4Xsxb1iLYcwWdcmCsa7UUCJC6n8ZtDQwhcV6JzgWejiommBmV6phQ9qkXDWs4qWBc83N8ApNG57Ay",
  "key6": "FoUuxypgH8cvXr7st8As4quFzJMnanjak8naiRZEXi1qHrMcQcXKHJ8UNzqbbs3e2tfXaysP6VXtZYAD54vXfmy",
  "key7": "5PAgP1GMUtmRqqo8cbNpsoTNHJ6id4AEn6PVT34vaEZqQtb4jgjyicQmKt71pM8ULzL2WmhJNHv5cmZFWfTLzVEM",
  "key8": "ybXUZ2UfbXULEJ9z184XAieYdXi7Hzm2b4DdLG73TXbsovCtkyDTv8iA6kSZ2is4LVnmcHSdES25EXMjBUuVkNv",
  "key9": "2DH8RBqLNq7QVFR1oXh9TjQjhUAgfHCnQx9fJ3DvnzqpoRT3QM4t27c1MjEvCicDHnxPAKy3xjpapNVAthzC5pkx",
  "key10": "2HGJD59FYD5pU4whmRHU6thJCg3Amj6UV3THeC24agdzG7tAmmyzPP5XdyVzTQMDeuaTRnHFtr1aKNmer8K3rZfm",
  "key11": "pbrjitzPLHvViHQsTkHjnqCAtqGiWzm4safwGbvV5YkarPqwNYsEMRbLenQSd8khGUkfLGSVkZ2V9unqHLWB6kt",
  "key12": "21tY6P9azJThaULGjPUMwNXe2LpBTqzc63RuQj1ATmS4HNgAL6vHCvy24nGwWPFRahymBQA3T4NRshHhRqdQNbaD",
  "key13": "5rcbt5qiypFGAwEYYLtdJJMvBy5JnnXyxn4kHb5NiSh7v5L2chWQ6hJQ4GUwU7STsusRMtbj47edFqUhsp4FLVY5",
  "key14": "WgLQxqrGJPz3cBRHZ4U1294NbwxEELiz2HLQhZ7Vuso4vhsbRgMfY6sXHDVLJAiQyr8VPVmHUQqxkrkYQSLCqa1",
  "key15": "5X3Yr7gDourocRc1jQWCZsefDxefEmcqbb73LYdsw3iZUHcTmPDLZhJxbJEDopijxEDqdxihzidrAh8jumSWcUeL",
  "key16": "3nZwRVUsrbhsZqzGcefr8w1PBmWJKQD5MgVYW12MHB5LxEuZKLcyJGyjTBaZt79sALhofgnNqygnJkW8RzDtfjV8",
  "key17": "mnwRoEE9p8NVkVvZFuqkUwyGDBo9EXAZZSXVowWLnMFQYTBjeda39iNAcqvEPzwAnzVfZdn8sBf5UffwdGUNAKf",
  "key18": "3dkZQyxdcS6M881LbNTHaoj7CqJLbiq8L8qxjwVFepkAMhxQqBH6nU9ra2nu7PkPUtEmFG4UzUCR6jHBYDtjfSyt",
  "key19": "4VvH4c8gyAAq27uhJq1eiNdgk4RevH5zqnwyNAD4iFLFLv6kozWU37pK3L4d5Gq6NijpQV2aSzxjJusE8Z1zfMuo",
  "key20": "5Uee58MDyamyvmSZAB9mCYmPudRo4Ab3eTDExw8FWuQjno9dFosyV8iGUHpzTGeDfAb6xHaRiTZvhpd9XzYv262t",
  "key21": "Hx3HEH9SxHChBQRrZbW4f2KaB3JzLUMfNks466jFYKvka97k5WMW2jKRL5AYFsQY7E3fvh99wC5vq4SepTXz6Ag",
  "key22": "55dYSyvoEUjC9LvLcn623fiPFEhBRmkePToy586eXGzE2LGH9nCinLQMvspvpDLJxDQqSJagYyhcYVj5eNn2BoHr",
  "key23": "3iX1prH5TKeYFhYfcRzCmGP7ktYTyfzHMJGyVQKnuAZchf9vnYW5oszyCvgyLUXFC2gu5La1L5mo2xKN6RYEAcsi",
  "key24": "45LAmMEzvHYpPQzjwK5gSe6SGJxKQoUCQc7wzeWyz58N4cADWXHXZmdzJhNoJUj9wGRo9UsRA48JmRURZxAqdd2X",
  "key25": "4ox7VCgtdtDD24GtPJDinjJ7RbXEA3vRNDrZdfGwXSaJUuejoNJ7Yoys7Z7EusV6ZwVfHE6MnnWU8qMVRhjogotu",
  "key26": "2TyxT3Nf8QQWLNvEsNDAtzzqAUHmhXiTt7FdrxjSuizze5qkyUZTexUyJBy3jtyzbf58hESU2Jxf8kRx9ytys4zT",
  "key27": "YXbF2WL27LiEQanA8VjDwEWBh5j6R8XJmRZkybwKFrthHKB4Q9c2ncGMBMN6bgEJdhKtFk1ypSQkHxHwxtbZbLZ",
  "key28": "3PUQCvvBoq2YQJzGXiWthuu1ErzRitbFvy2Kf7CXiSYMnc8NcsndgfmtrHi6WbJwGvWJz3hdiFgwRshzWyasp6cc",
  "key29": "2eBZrw1PoVdQMACj5CeDcx8KiaMqZFdxw6Pj6utwLbNUuUyS7HAWWp9hK1ouAptvf3NqayzeNdkrRgDYNToZa8wX",
  "key30": "4RGotB3MtYMdmDhkNdtStrCxC4U6FSJwNmoSLbeW7rq1vbUeWPhda8rwZgmu7wLEqEe8zKWqyns2my4ri8KDnGdu",
  "key31": "2AEkL4rCBBjr7MFJFqYFnkpwxzEgmnabxMn58BRDSvM5KjeWcaALt9awZGVLXNEdt4aJuEGRSM7SPiCat2qfQ7w5",
  "key32": "2S9hETUAC3u5sR7mHZw9msnvHZ45WFsFZKnJzgkRnkyF8Yy3dWD4cJV4sKZGKvLJE3nzxq1dtQxKfA4ntkk8RrLM",
  "key33": "5JGtmUHRPBMTEgCge21e3Bj1MtbEv6TvR2oav9EA2qzmsQYWdTR1ADM9io7PtqiG9xWJKtM7dy2wi65JtVnwgpA8",
  "key34": "3Hac49EGhZ5p62TemG9SdTLvKvkQ86S3XVEp56B5e9XMxu3BFguqZH8tcDCM7nZGSSv6VZzBuevKAExzfCzH2zvj",
  "key35": "28u8X6gwFwGm6ZprDp4RUv85gL3Vec8XPmG8KbtijabZJyX8ktQPre2Pe7ESb6P5wmacdkgHzwj5qCMwFN19Ff1V",
  "key36": "3dKRaq96R6yofKbT4LRAqF5EChevEjwEbfq23c6D8k2nMUqvS6kswGm9yq7iUoSs8yemM6w28JSshTzqmeJiCPkQ",
  "key37": "5RXCjc2K6k36r9NhwywHYfD7TM9ggW7xA7U6kdSAwoKtjn5ZnUoBPPwpMuqMKbTTDm51HDwi6cqXVreJChkn7ZGS",
  "key38": "v8TeXcTxd3gWQTRjZg3s1RnpqggvrTzXxh1FrfQigFZTtX1MJd1GK4RRw1Qu61jwkjA9orqGYHWfFtDphM69cfT",
  "key39": "3zjbUMsN1qY5V1D2pvckffcDca8iyZbv4A2dVTPSXvKjDyrnEnJKJ5ZHtQ1uxMMknyD1DNBnxmKDD1MGaR4WFXB6",
  "key40": "4f1Bhaff1gdHdLhs4414xyWF1L6CD6VGFStenBWecamZM6fgGvkeDG4CYvmYhV9xFbZNKPtmuokGPZHD37RwfgKY",
  "key41": "3Q1tsFNuQJsd7NKrcFwCm8UC413VxULrVGGNaYgnBNSVqUSHwq9so4Gijju4xJDeZwnEMjjmqCkcBon79k8CP6b7"
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
