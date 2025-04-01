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
    "3sjSTNcZYD8aU6MCdNPuRRDew91mdcZrmbekA2bCJCNVsxH3x43TKPWXwrVjzj314nPscGpcHAaZZwCfbZwgTwJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvGF4M6bwCek9mwaQtXekHc1MM7CwqCTEyDQwQr6pcZHWWVBSRqH1Mo4AoSqyyPi2ZdkkXqkXQbvhKwpJbeXtBc",
  "key1": "5wUQTnz6k8FmDmSFjjrdhgMAJrcWJbaRnvwtQfQ5YZPHeyavtEgtBCCvFZhRoAZj78MFHM3NkAFG2pGKzXuvddqb",
  "key2": "4r3DfrEq2VUaQ9sMzsGdHCaWJhWyHGCtifnTUSFtuCB2zobEGUmiSE4SMAtBGzbdkYDz9AEuQK9Xh5buWE3YQN4T",
  "key3": "4uuB4JTsTDiGZyhRRXbj58gBb2Wr8tLhtePMubcNW4ersnv1tYpwvNHJn73edxs5jhGEwKKNkMjpXzPL5Uc2sCWa",
  "key4": "5zHu1PY8csmftVR5An5sH5GJTQNiaLSp23uJ9wbSBKs6SwFuEgmJRp54xv7mMHL2KEct6gjRg21UFUVdge8S2jsf",
  "key5": "oWfnv3dHK8yE6NoDgNbAin1dTUbGxyyRviAtpGhewgZ6GoQ31Jxu7bLhfBWAx9bof38bF8Tv7GYavhgwin5gcot",
  "key6": "23fwVrDEzn8g5cNHD3u1YVyyVurnMqu9L4ukRtzRAKVminbZEdNLocCcP28moVACzoQRwWQdk3uRfd7NMctytGFM",
  "key7": "2tUSUZXXgekMuxir4BbYGQ2aBeAq2Zhbyki6z1UjABcidDovqfdZ9RfDPDACX2pG24phypzQfS345aR5fgNPjgxT",
  "key8": "58vVQEPBvpHGzAmhtHtDqciUymu9A95hNvq4E1ZpqXpaz9Piwvp4ya1CvLmJ17Nr4hVhAhEk6tioN9mLyEVwa7TT",
  "key9": "pEKbmxYysiWxjLPuj3N7FEo1hnNSjKvZ2wZ2uNgwc9yjYTvLpA9ZDj3C3svAkSvfv4EzFRFPetPyvgoKea2Hzur",
  "key10": "4Aws1Uwd1Am2LYp6vksWFQVQ2oLBEoYRQnWns5gfTu3kpVfrrE4d1SyGea9sUWNhYYQg5fJMqxNfWSen92g1VvW5",
  "key11": "4MDA8YTERBc5vfiKdVpgYp1zwfJw9ncrgqjiKF2QQxwNF8cYc6C56srnTtQAQsJe51tcUhmhPRQQVaTBBtHWsVgY",
  "key12": "3FquYtLqNzNQJuaUj21t3xu7AndeHB5BhDhxevgK1ZRHGjqHnZvC7uLVse7JsX42iMiKfkbDP5yTr5KbrCfeetUd",
  "key13": "31N5Px3uWr5BfFm6EeYkXCQC6PUfkGriMeb4o7YR5V2YvQp5HjjZFUR52AY51GwxoXi1vR5wpKpzPLj9w7TCe3U1",
  "key14": "4vnwCf9GSiwFAcEMJM7XmCjPkNXbJ9xK8cQC42bM6xCCvZuLwT5igAZC6V2bZVZm2fvbKwwpDUaeXjrTvkxZGQrR",
  "key15": "3Brt92JxGqBYFCS29beocdzqsSX3oSCmsizpfsa2vTMxj7Ui65YKpPJKTpksFrEA2rvVpZxmb1Qsdk5HPKBjiWd8",
  "key16": "2fpb1jsJRLqX7N4z5StEeJCQsbLd1TvPJw8n8r4jWoHLe71psZwzPycqQgzppBceStfHSyBbJVxuGvsioFWr1EM4",
  "key17": "9ePNt1bjWkNx3HoWMjY5xErPVh7KPMBdgB2vxp3Bv822gXWGNVSn9URhpFEXJRhLo5HcUM7g6P11ydTGhq86Lo6",
  "key18": "4FxpZGHJdywKNdoUZVFCoDhsYvyGkVp1qj9iznEWmb8wg81aA8rDQjiQsffPF43h1gurw9UpJFGbuDoa38xyHji",
  "key19": "4veTs2fcUqhvdvXeVcBFESf8Cope5d5bSZhCNCr9tC7FgUjZW5NcSL3gV1cmuYuvxf93c7dZTRMKCTb9DXYaoQ8",
  "key20": "2pSAaB57xyfXwD3QvE4ND1hMjkkWneHnZrKHuZyvdx5SF9uMRMXpUv32bzVDwPR61aGusCZfFZAa2sFXd8sk7i8P",
  "key21": "rV1ZAyEhbPuh14DenduPhAUttKE1ngzhybXVVBjwxtNBXg7QMohD8EG51w6spKCeM2Nz2FNUKmQE5EMFgn9TU8R",
  "key22": "2Wyy59BiVDY8RKU1cELJ4eB5nWoga56sCQvS7Hx2rHLqMSYCipwqnrEXS22hVGSJRyD43748eWccBhYpGzFHSH57",
  "key23": "2pLMEJhiHCyzAsdxheqGErRbowJgrPm7sahm65VKgep8wB7Thhc4VnXFUTAd5iWvbqdG4g1swMAi6vL2dm3RBEZm",
  "key24": "2PuC25j5tbP7Jv6jZ225Q32J3Symi1Hpo87Dw8uShbKU42WgcX89wB14V1ZgJLMy91wBuT38C9EJVYW8ax8xUPt",
  "key25": "4NmMSfoV7Es4nKfT7kgVsWRq7YqUrs5QJvK3kixYDTbkQfffUxQt23EXA91MLaYENuvriEPVSi4K2XfWvvuKVvsq",
  "key26": "3VvvEV2CnkVx6VApufzymtFCHyaCLkr8nMeG9pHZcDayuuCLF1c7crQc25K2dRFJWEFJru1wfSgnsaRNbenY7kUx",
  "key27": "5uJHsspeUdqmb63jsEs15t4pKA2QXCzGFXLKhoDoZ8VwQNU6SrN565ZqYwCvMEmbxQRuU8oiZejefFeuLsffgqS3",
  "key28": "SgPxs1cc2ECyDFUj7ABc12Z5e7F6gedbxnbARc4HgP23vtpKjR8LKRSkZwY4kxtPzw5swF9kTU9YYBTALoc8Xs3",
  "key29": "66uwk7XyGKhc1Ld5Gesw59rR9kWfPf215DqroiwjtbE2cnSdwCPAfHjMdc88taFTiQ4tsRXj7Q2yV39aSoMW5jro",
  "key30": "5J5yMQinfj5DUE64qmVG8W8AtF2CPgBJVR1Q3SNeLq5ZEAhizPqpJjeHBKokRBNKPR89sHSJmnnKcEr4roRRr19a",
  "key31": "3ywqggu34KerEPaiKs1Qyny3Jg8PK5C8nymWDk6oZGFoUScazeEGa8bofEF7tLe7XPtFaWNGYQpCGUpU75s5nJgW",
  "key32": "4exjLNDTVRGM84rNK98GPgishr982sbGyZBDu2V48QfJu5BneeFkZE3BNdGE9Autu9CHXEfnwJjs6U52mpdqzBX7",
  "key33": "LUihSRXKT5nSSg3xeYFvKoEaJLv8kEBcsVSBCDKjVcth8nHnTJNtrpXmd1wi2ZzxrrYBJKHX8AgovGZaMyha6Gn",
  "key34": "45rfFG6g7goMEvzzC5ZivTtKeFSaR67XwFJwumNUJrJ4s49QxTjEnMsfx9kf2Ez9t5i5qhxcxcgjxUzjBSan2Q6h",
  "key35": "4XNgK9mxcpL7jSDXNfEZV4PEnvYVqVSpaF29Y4xDSJmHN1SgvMKNy6gZ8KwzCboBhcSeC8aJA9DMPkBkcJ4HSrS1",
  "key36": "3Dh3e2jdbEs2pSMbFcjvkcHUsqoYroVVqLzwD2JPEXWk1ybrVZ1KyBrKnJGoCGq78ia1rZUxw3BaP3GRUUcJ1v4X",
  "key37": "6pke8a7tnkfQaWZKSFXKNMXqzvpLfE7aLDuc3mT5z4ih3BeqU8ghGLmsTFhhBPw35WsWLmaoB7nJzvgRuj2ZDD6",
  "key38": "51DjoAGHCxYffijvaYLW3CHaYrAe1a4uSXg7H3WXb2i8LanShc7QfvoZ9YxRAA9Da6ZaVJpeUeVZGKu3cAGnFfgF"
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
