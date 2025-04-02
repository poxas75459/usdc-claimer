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
    "4TQVANHc1L7JHR3eApCqjPjfe3ZRK5aLq9XRcaji5qP2V9AtyMys1CqxeDKtnyf68tqBCiESe4d79J5BegTEvPJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2VuvYqJbMP4ULrTvYEeCfCwjtAXa8zff6zPTphRbJzGBfHpF6xDJzBnjhaqjQ2TU8yiX8CB8r7T86YvQpX1PpD",
  "key1": "54DhbsPYovdrZtjWman73h2obV5Rc9CpPMc8SpzEn8YTzDo7kaRD1ZgpxK9aWkgjWyDFAfY76CeFpkj7DEJxjRmx",
  "key2": "3DWcBkdNMfnxLboFtuaniKBMPNLCL16CdWNmcpSdqpQZZANHesxdVfwk2nvpJop8V2WBAHvqUzFZG76J5HcmbY6d",
  "key3": "2UiuWYaNnMjijhysxNCtyx8c6qxhoHamoEG6XFv6ULejUxa3fEeLNpkeN73kq6ddGbSQztAfLPYhCdaDZGohYvWC",
  "key4": "2bLCw7A2jYgXNJZvqKy7Pdgnr6tfzXNi6MdPyHY6QaQvKd2xHvcnWAaspQdfvpXG6owGECeDL5CzodCSVp1viE15",
  "key5": "4f7RCc8EAkdzM1uhpC3Wow3GK7gtci7RqdBXCY92eLavTiybzoxCqkw7aQXCMrNxS62smfAZdA1GBLyhUqU6Csb7",
  "key6": "2Yd5vEP9nPu8ug6F5tLPQHMVZhrQDS1Kh6Gsv5UszRUs4fWVq6mQN8cix4eNwg51nYR9jsHmamQvuXktH1y96V4D",
  "key7": "3z4sQmBnQRMUsvfhDYy1o3qQviLDRUWU61cdhdp2K59YEqzG977dK1asmc3FGgtqJqKJGFDRX3rUCN5fc3Z3M8sr",
  "key8": "jN34rbEJisCrEkKWUYGgXTds6ozjd3WNRW7ZX1k8FbQq1BWL9rdvyhBXxfZjr2eziykwFqkJcpQFj3GKs1RFthM",
  "key9": "4bCZFuvr6zpHzc7DB1n2Lz7tjZE8hUdSVBb9iTi13k9HgtzGNRDMcurAZEeH6JK9Z5eEsiqCfyjjRQBG4ddefRmu",
  "key10": "581pXYZDXWJ3be9Jujbats3Y1VAAM69fxsxou2nxJJuDiL75PfX9CjRAjDeRpTkfMFpLudRXHrQMs5CC3JJauazL",
  "key11": "4SMeUzAfVsNp4AaxfqrwBdEg8PnQXUFqo8dAmkg5RpcubDZXeBc374TWbwu3W98CNZTLpWz9ehkKgsYEKsRrMewS",
  "key12": "2cYJXXMbbXYsQCshfvbT1fPmg4WtQVx48nMNQTydBgnpRhfkjpsCxqHgfNLU1RvRe97oEbSL4eefyYBzZhmRtHCi",
  "key13": "ZQ21px5Y5psLbHnLrQ2kUguRdaTSVe9Rv85WnrsK5ASUnfenxWKK2i5yhAAFxwW9dCEsZaTAttDmsokTT1NjyZc",
  "key14": "2xcjj6GThoV9UWC1sFNBEWpwGpcmm3UveH1XjrX9AoU7pe8RGKsW2icK7Mh38PRLMhX7agLATL6rQFGQ2kpegNDG",
  "key15": "3GevFnQyYMQTfXZiPcxpQuKBj5QNXCCAQik5tNGCNHUPqYTFWsRdvwx68U3ts7Rc63k2PJgTihLaP6MqtPRx7mLP",
  "key16": "28WAghDPA81xH4qTsjtVrnPh9wCfBPtfQjyyTsqDNm3gkfdPxQ9c1woz7FyVZg1ALGXHPmN8EzLrCQHZNTzDBzho",
  "key17": "4KF1wWCCKKPvEuLdRscgSBHEuT8XxWndAiCtJ4WnvABfsamD7LBf65m11ZnMWEtgUYEMG3WnucNBKbyfqNLgyMqJ",
  "key18": "3eW1FitRd76mfGnfxaSTkAjWzcsW6QTFBTDUzuoQaCTvMAZset58jgAHocL1YHxM5FsWYiwop1MjKT1o1Z3fQstU",
  "key19": "3SCu3HA61vTTHJrw5MTboMQSiq2DJ2A1zSX9X5Wh4MNbgri2pmwN9xFQgXMUrerAG3GDpSByyth9kz6LpeuqwrUp",
  "key20": "3L7z96ABP1Dti7hrkTsb874jy27iXat3H79tw48uMffCanDnisFescgk14ZGYvoGR2wp2Uqvz1vRASNAWTVVtV5w",
  "key21": "5pNBztBpiDoc81uDxALcwVuzacd7PEBfJDLff4H1USEUMZLPSQqmxxeVpRdhdBNawdzREY5hRzETBfJLoufFRfAd",
  "key22": "CPWVwREgrwoqU39LCtzz8GKkygf1RVRqxyQJyUxvyebbWwNDTyfoBTLCxR3csS29hdFZQCJxbtansi1Yf1RBSiK",
  "key23": "3Fo85BVybeT9cYxHVhesrJvqzjZ8mjKM8bowjKnmDEgM6QXy5QxNaFfuxTAeyXKTYtUjC9WFvW6QzD731THSbdsc",
  "key24": "6fHa2DQBWd8T5JbeVASLkWaw2cKkutnatsEAqiCU4ArgSLGddUh7An4XsqNSWhXeg9t7qDoz3UKKDnJ1fqd9dsq",
  "key25": "4dhYKcQr6zcJ1Gqex6aWWL5xgKiX8x3LujHMbcg6cwQeyMmAbS6jdaV31FDAkFc44XEqcfx13FqgEaQNkLfNWnWp",
  "key26": "2pqbBMPWGvQ1W3djUvQJ1g2NKg4ambwuQ1VcsVTSYLr2XPLcEimWbrF8suoGKFn2SAASbZUdvry2EFAWLJLGun3C",
  "key27": "2kbsdQYnEGZtYWs9ZUz2cmJc6L9yYCuFfFmseKCzd4wn3Ai4NrB6gNKGjP2NdkDtcxYcPLYVnQQ8nzSxa6T5W5Tv",
  "key28": "2PfdDrr1RfqKc4TP24PL34yBjtYBiYPahCCmnoUX8Vqi25kN56CLJZw5oVwMy6F5urtV9GXrEH6pAS9SSoZ2tWxn",
  "key29": "5DXkNSxhgCCnC9QLR7j9bV7DYjmJxRdNhBhUvDA5gJcDRgH677C7WpPSYfHL2hz4Cn71TnjRAvtjjj6yjM3b15Po",
  "key30": "VoPrc1YU6uUWcRRDcdBzAhSArXXThTKxBPp47z9aSjofQ1b8Z3mZTUyFCBwPhpxckyf3Tm17SJ3VNfBYxJMU1KE",
  "key31": "5qF36w45qYHKqt6Znjc15Synn4WbHeUB9GkKa9H139F3iZnyAQVBzw8WRQV96rZSYfwk7irp6Qunc7to7Ujj1UUk",
  "key32": "3iRu34dSfp6vLWZ3NeKXpXuzXPAVyqyTo4TuhkQWRUx8bZrPfAuLyVTikgCNVtDBHqDpaEUY4eMRgAuyV6CdjY5n",
  "key33": "4BqdH9Nz1eZN66FV2LLQkExoEFKuNc5TrcusXqUuRa4CeKJ9NHRRNNiXim6vxeV5EDi7nnMVNJJyvNA5bLoW5CLc",
  "key34": "feVViMLFGdP7NTNALcayzp5fy3ziF88mRUQ7nXpqafvQNEK5fGk5ZMuNuoJnyhyoyu7gtUBiBzDf2xBkTGDWkN8",
  "key35": "cahQd1zTx8GJr33EGZsa4XfViCHCmRxtPiqPwPPojo7iuUy5k1XuQTJUHtu7kw97edYapsVq1aXoqj6S5jn1P9F",
  "key36": "4YmLw9ySpTPbBH2TnfFowCi8yGhBXLimAXvnRyU1qxXFXuz7PtqeUxyamdDrTxjRZTQSYc3qPeW6qdNivmFxMZiL",
  "key37": "277oECcU4L6R2xYXjUrfbzrTQpmDyYNqcfncG59ZqVFYzQYxn8ZrBjGDvywYVN6GXRfghNYzJe4f4k77hcyd8jAZ",
  "key38": "4xZRekzasW58zdamyM6zwQrFkLMi8CNLPo2DUCj5XwrARrgfuMyZXk5eLdmmtf9eVKvTw1eGPYMF7RYqSq3zmmj2",
  "key39": "9UCgFs7DWRipyszVVuhA7z4B9L1pWED2nKrFgw79wR4ettQejQndsN6urASEfs1wLrdSg4yW79uWeZmJvZm641R",
  "key40": "5fAA7Xpp4yXw8Lk9Z5gjf5KJmjTiScx7q2E9Qumwz5qdywkwQdJo6JDvMQsUZ6B667ETmUWGGqiFQHhsdVXi8Snf",
  "key41": "3DyzjjtnJvfjQ1JwNpq9DDbjpD1B5ks1cubfP9i3RwyvqYWmv2AV8kRuuCRUd5iFcMBsWC3zXSoFJfdGZffRrw6B",
  "key42": "4oJ6gANizJzmFRZhoyCQqnZTLxtQgbqJqFSpmc7z1QNsXVuojDsdVMU5AdYE2HsanN5AiQYeG3ppveuTHbmQEV97",
  "key43": "64Wqaqdxy1Ccthg8Bw8bhRjUNJzbpWpSYGnFSwMhYkhy8t5BFRnevr8rbFeiWkrXXi5SivkTEAr6GDD5HKJvfhMU",
  "key44": "NtH1iTgU7Cmga8dQt2muP8qpYS1RuNimY4UgRntoibPRccUJrjGEFqc891dxfCPX59wtPDb2FxC98u3ooVGnZXb",
  "key45": "3LfzhzCzFhsy4TUpmCh5Fh6c1KviRf5zaAF7gWtnDZaKiGqP3CztaWD4FD5vJpNHEuChDUfJoHvKAApGTWrdwMTc"
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
