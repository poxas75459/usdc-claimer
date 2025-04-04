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
    "3ppqFVsJoWj13wti3RV9gXjcihReKDLfU7DDweBdH9FNMyUbSKaGTccqz87Qok8w3uuL3ckmfy2Lbz613i5BDLt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcJqRUcRXxftankBTYvyWLLmXYtSmfy4hh3SaF9Ax2C3pyGSEb96yLYVdiRodrahwvyZYmdsymxPDFBkboFsziw",
  "key1": "3wR4p9zSBQMBtFB8UjEeBWv9q7Q3bJshH3LnnvU8HDkeaknBWAH3g4qat95SSK79rKDB3XrhDM2jC2cPqkNKk7iu",
  "key2": "4GQXHg37YVAR2EmLRCcpD74PA3fdATg1q2F6Rb3hCXren93GsU3JUouhwv5XAk74Wqgd1X6QD75qY2saWqSMP7Ab",
  "key3": "jHaVP2sxRee6wCcduJmQd9xTLVrrnE96aRTm7dK8hAXKWi6me4WLAntRNub4Nu2LkxVCUX8qKch3TvyTz6n1brj",
  "key4": "2CsW1YwzT4TpvT2gqrSa1RzZsZb4p59Z1MiPRmcFfJErZvokQaZfYJZwtbsNEXpPb1FPpSnwPJJJFR3DVuYJCazS",
  "key5": "2tQsWcbHcwf9zkuxnJAUWqxsE6BSjxqN7HEZqvaMpU9Kwq5WnQv19GTHp1zoZx9V6LfkVr6rJ2QrT7cW4F9qBJ7m",
  "key6": "8kwfuMEfAFo7npmVhBQA9TA5j7dPggbpVogD8B81u7jEXk24j87AKbEAdZY7oAE7ECaAhRnqf1k2gBa3Jqttq4Z",
  "key7": "5zmewTbMgADrxkucoQHe6xMgo7thizouo8VahYyDmCwNEzcKQM9YqUumYygy4XQF6NDNrtUPTVZ1ip7KeLqJB8PH",
  "key8": "ymCHjcBxQBAodwhHnU5mAL8TqPaqHo1YR3kvndjcPpDkv4XVwjYzjB36Sgm7ht9yskdXihbSXmtsUrr8twQmtJJ",
  "key9": "2dNTfsSYJY9REjr4eo6RH5624Ef6KuECm9Cq46ppxwaTAZhkKTBbQEvAH51H33Xe6E71EkvCsc8zPzFKynGYtHtC",
  "key10": "4y7aZVCc4dXWN15iYoHC7eReqJAA2zNdq8ruxD7Hjshe8NVBRwZpDe3wSndD3rK2aoRgX4KSVMedeHS6sCktd8mH",
  "key11": "3sVwFmggZqZJ8ryy9xWhRXoWRLdYTj674KugtCssgahEyAytZ119iSAtcC4V2JuyTDHYrVNDpMFjecF4pjzqmKD7",
  "key12": "3iJTGhnzpkQJ75oE7c2SqtUvEkuiNRJ9rm3EuPLXpVkwiMU157EWkZkovPzwCFfhfNBpYEJpdoV5XDBEeUfP9o7i",
  "key13": "2un8tv1Tk82S4EkUm8ynNiQFDSrjkXHayw2YsrfvyxkxTz6SKxq2Me6CAG3ohuMyAyvcRCTEa1zT68qdHf9fCEhA",
  "key14": "2sVWETLzS2gS2L2fK8j3pApvRVZ3Md1XdBoTWkepdXFyGdD9VDuSV8GSfYXNUmmPg36PbZevsm5M6TMYqMKuHM69",
  "key15": "kytbTtJkLEXxSZoimEp1tUKzH5CNaFMKz5W62LTnJ9hdgbVTYiCuSqZvPBmCjFTBGvViJMenHawD78nNhhA5NFu",
  "key16": "5buYuA2MqBfe5aeikSjcuXgtjZHTx9TwHAcfS1ADePZFdc5Vmc7EuS232Da1zx87k4mfAtGLXNwXtbrs8xx4crQr",
  "key17": "2z1BzfSMcuhSWja6aC9WDFvvzuEwZzWbHP45hyhkAHjRvVGRwfcaW5RBXDUsc75sGjzYouqF9SraNZKLT4xg7U6Y",
  "key18": "5AWLgvBG1gAx6xoGaXJQ34bjFtWR8BYCgWC3qxdcBUi1QBDecxxXNMNS98WR3m8Jr9nkgKaZzk91VMR5GfYaho8w",
  "key19": "ntHCg7BfSPETuKXzGhDH9Jd4pzFksAnYFKx2BjeMj13cywURArGjFFX3N3uqbzopoSdZkVDRdfwUYEFKhjKCLYo",
  "key20": "3g7PoTwZDhbx38jaEw6tK8adDtcx932dyPtsr3hYF5abE6ZsdA2odAohqMFwQnBs6GjommiHrUvy7dU8Yu36W2Ts",
  "key21": "5aS4NN6Ws64FUZwAhDeYFQaaqSSdjo992o3an35E1AcTgkdzxy8NLoF5S37diHPYhdHDr3GDx2yU7j5mFi4Rw5sc",
  "key22": "595bbn8WT61ZdSxRnXp2Y6EmMMDLDLLkHz6SactpQCySNDYQVsuj1vhJyXeqVRLueBFiFBJiGNGHLY4zoMLwKPAy",
  "key23": "4kMnzfcoNg7tqsdAHSPvWqQL7mbrWY4Xyg6R9vg4s8Nx2xJ8a9SqtgKnYbGAbxSvPPJBF1ZxbmntfUAW8PYbRoZo",
  "key24": "5rKkqnZTU6pzskPHPEBwTaiPChGGGaqx65bQw7TWCKXWMqmeCSVmsLjgGTLN4y8M8ehHMrgoXurPXCMknxZc4yRF",
  "key25": "2GrRskqbMhS82QE7pijSMfBp3CmzKDUKTR2k7goxvAoKKRbSuNB2irDJ8jB1Lez3jxRXdEzfCddZsKBRxwwUi74A",
  "key26": "4UDNbrHggGA6DK6Fzgcd3XxFcVyz7AhDmHmKdLZz7PXjrv4aq2JuT2aY3ShWt8x5fk8pzvQpjucoHLV68HYCjjmi",
  "key27": "5uBn5JoUkVhqYN9Rc1Babb63DXpRkhMmFrsQ6UuRc1oPjTD4FeMgoZAanJvNZUdmYH7JNMsrNyXU56LXSnQG3Sni",
  "key28": "32wSeKtwW9F8DmQuaUtdskf4hCEQBop8A4hacQMQAGHPqxH8s4bqvUCwxwAsKLqq91ES42A7FKZFReUZJJ22m9rz",
  "key29": "2v7iWdxH7vivERc5GAGxVaSSPXGNaoDX137d57xGWjdkevGC1HJQJN74f8GCB14Q5opYQy3nrdaGbEGohFK8w6ic",
  "key30": "4dXu5iyG5PZkpxi3XjdBgwVwwfhSDtc6mvs3KtPBoyp1bwS8ZcDX5msAMBiP55EpzekNhw36EJj1yi2sjepxj7wU",
  "key31": "5JCCfoR563ZCH4UUG3B29CCsBsCg9uoG36DaoHyLefNj5zpwYouN1n2tzZLYJ2C6HHVhzTRmHnvXfzDHgcPtDDAb",
  "key32": "5qnEvZdxxkbjgtsZCXHdHq4cSVCrJdBMzTLh3CgFyXgMHdB1KN3Raokv5RLyUb8tyjEnWLZTqu2JSTveF217KepK",
  "key33": "4xTbZCDPZy9aeR7sua6ohSYhHWKbuYqiBHW2cy74CEgWWkToE5x25GfabgRuMxTQjz7thzHcqxpYJEMaXwVx1D2X",
  "key34": "418dNQjnAL2u87qVR8WhMR68KjYhZZEjEm5jkse1syqqSsmCTJS8dpyUcMVSLW9EyHKAi9EqdYAyC8kDNWwxHdTD",
  "key35": "n7o5UCUNnr9cFVZqmGXx7wjQYECFQDT8P7XpoAtCKcqZLNN4kpt4Gz3QYUPmzL3MwDyH2f3pEYFN6m3uJqgj2dr",
  "key36": "5ACtQH3susTsHFq8QJ5yihsMsmLPE5RZwAGpyn7FKUuFBZWSHxMdsxUv357L2VDN5D1yTQuUpvKmEWoVjcUv6rZA",
  "key37": "2vCMHcGR3v3CJ6TdB2455P8aS1fpWPoxZG1VVqEQYShzKuDJ6tG9gCGuBmacvEz4k8ypkV5MVcVML4TEiY6BPJnq",
  "key38": "ZPY1v2EcbDut6CK5Xuksm2e75MAQXS6UNSMejoagzwaqZSGXwRNVNeDSnDqiAXQubTYNN54qKYC3b83giSSeDmW",
  "key39": "roB4YhqbGhzVwBZ7WajcR1iGkJjBX2Xhs8raDrR8eFTtPxqG8adP4xxATefp7Hm8BjB4uSqxohUbR6oCorKTJ3k",
  "key40": "gTNwvHDsyH1EJ5mLLavFva1s37M2KKfBrmmNQhiQjzx45vnSQwV6B5i4R1QDQxP4jjABbhmDWNM8NMLiK94ELxr"
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
