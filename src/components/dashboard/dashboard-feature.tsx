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
    "4JcFpVhUZt4DfGwe4RtjQbh941hsAJXUxJyR977etkBuWW35dn86xBnB7rXb1uft4PWxAFxcwCRnCvYykevU2jFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqBmX6uMmuyQZibFMwayHyRdszZG4N7eJLyH2YLYiJBXbNFmME1Emoqfq5HpvvrCJh7NcLBbfec3MqWGqeWJiBS",
  "key1": "56aEodbMnaqbspyAKoGwY9SxRq6A7EgaefdA6CjhX7QsqGvHQgQbmBNuKjzB68eDXTe5DkXNcrSDGcjTisT8RrTS",
  "key2": "5RrQxswSHQRas11sfjJsLLUh25LtLNhetL5QRU4oER6Wy85JEnS5AHCTgpBF94e69pEMKGqFDEss2AJUV3R7Tfow",
  "key3": "2k6itYVB9aTUJn2zAQjdHd2ZFGiEp4uexicJ9q869TPBkckz21pPwdieZopvLBpXJSjKYPFAEES5mPCWjpN9Qc7m",
  "key4": "49M5k3U5eZR6myTDP7NWexdTD5cLwzTNG23drvNtL1KcVTefnaSAG5tR9vXUZUNnT6W9RFsYJeviVsZoyrqAEdoS",
  "key5": "2zh2kaMDRk6Cpy4mZPXnMU7sDTfSRoGDTPCaNFNXwXQ1Nfetvr4tq4ZnxGtgkiAvV5WSaHoeBtpP3zHEGPKUPNru",
  "key6": "YQLXzoM5XzTvSM1AdZyGgXCc5dRJtfeoKx63n6aSKC3yJaSXzAKGwEVzBndxraLGqtsidcbjpqz651gdCtLWgzu",
  "key7": "5gGpyMxzcZWksji1x7aBJrQm7rH3wd2PhFVennJYm2pMG7TR5GzeeRBGWHzevATQxRRNneA7xCHQQHCeU65YfB6D",
  "key8": "27ZvkJDLojZ8uxRV9CuPEuQ5aPUvCmCHkP8td5W9E97HAQ2eWDotPGwmPJXwyaFUG7Pcq9BfWmCYHr31L4cR2WTz",
  "key9": "37ue87sNnzRcV1yQUgtewBQ1JPsugZa8NCM8MAMxXdRiGjAA2nyAnD2Rn1vjeUwuuy177NrJzjUwpDictwXGiJdX",
  "key10": "4zHaYAFXCsiChCqUcjhv1xfqeZSojq5XCFBxkBnkEJvAvtCWPEdPoKKdgPqpcEVDhzuZwAUSu1SZWkZ4SFEunKEQ",
  "key11": "2sgqmzc81r9JxjpZUAsscuG3QnDpvvbw9YJmx1m1urVMgCwg2jZi4YKPBzuqceETx2YEPMz45RWG1TQGbXkwHhFD",
  "key12": "5BbVn9zjZU7rX4zALm14YjSywCnD1RxBEswNjVaKiArQEzX6rPVbsxpAJk5f2noH6J9BYwiPRx5JPfccJiMLTrJX",
  "key13": "2dBcu4PvRacbfubY2qoRRY3unDse9En2T5h1icmm9kujW9rU6iybXDnz72V7SGRGY6XXmqyF6p3DFCHfgXkVH7ks",
  "key14": "3JAir6fADkGJWNPkgdCbUSiBvigG76cRhCpdPonuNozstcvaaF798jiEMWzEJAgRKASPxeqzR3XSDWDAka4frMzL",
  "key15": "SFnYthay2MubFqCbrJup33zuv4SFTEaZn2oKfrnm86NRJkMrMhTyjZSEpv5ovBcMRqE4n8PH3suF7t4bKpwozL7",
  "key16": "2VH9vz4q8GbiHU1RhGvX7WrFbD4fxRyWqhHrnv1oxFzmBcs7yB91Ha9nHvATQe3LYTUSgkmKsXrePuBDkHPBTnWV",
  "key17": "4Qk3F613bEExteqNMDn6dDXyQ77T7fLYfnXMrZWeDaKuTDD5bhH96sFRxNRfbsqtHmFKNtYyeucRwexa9y12YfkH",
  "key18": "5YGu8YC91FiuPwFZ6VVZKPNgeWECkaSuBwPWaaiQ8Wy33AYTopBmXDgJYgXV3ELNngjmWzuKb8t7J2X7g8AW7S8z",
  "key19": "3MpHNSasfUHYn39MF32ggTz6vuwo4cheL2gDDfvdP1rdN2ZuEi8XNZkkiyZvqHTwdZjm9byX1HehR5P8gotdTinX",
  "key20": "258f6D5chjJwiweYX9wYE31zftu1yTab8C534QJUjAH6zWuENyKa8hvBsBAhAn5xgmXzCAkPsC7VVRVbH7ZRnHGG",
  "key21": "K3Bor1rhoXng9HoTQ9zzYXAsP4LtWjVCR4AkVj25MU8sty4Pzfhqtp6fh1NdPJaYUnbSzV8HRYgLaetkVqUz3Gc",
  "key22": "4NFHbE5irFfXsbtjgtThJWWsWMvzrxS64dvb7zmeNRnmWeSmDXTX1MAYv6qCbrzezVmfgmTRJbyTkHARFnTZLGNx",
  "key23": "64rk8WHmJbDM1EXSBtrnR8MMWLtQDWKqGk9jtyDhEAV8SrZUVTWNWFRBzA1BuyUNnb19jzbkcotTx7P5WFSDrLQF",
  "key24": "2AaXdafqvgwnrwcEQR4f7u9HwrV7aoHf1nTx9BhFf38jpwmqZHRYxu5zoVc1CYHpAJ5wA7QCqGLNM8Kod5RBxvs2",
  "key25": "SWku2kqhvwLV8SHDkx51d49dnBf8MBcBZCreWckxMxqK7VWTfREvKX3YbukwDYUzyKqqKqf9bGYfACi2G1cSeX1",
  "key26": "2t6n7z9SWqjSvm3GZ2sz5B8GQZ3K6YaVQ1WXD2gZo3f5atRS18AcH8XCv6trNDnXv3dqgPpSgE49NEUkVpVYAm3A",
  "key27": "54aYvqQfXZzaL4sSPZ7hQhekXy4VhQK7zoUA31e5t9XuZd9G2QcCNieQjA38faVQeyT5ThYtwvcUboiYhmqaADEN",
  "key28": "21bV6EjATfeEekjCqs9CuYnn6V7sZ9chX6f85VUnjucHApNNBJXL7VaeCJXyCUXvPY27tssmBQr8BvZWgYs5PtDX",
  "key29": "5LSt42FP7ubuZbfiNQVHVYbUnCxMBEpV8fYESAWcYHbeKi6sJGqBKHS9LQsdaeV8GWdd6juKj8yLJJiCABzFA3bZ",
  "key30": "5kt1yE6q2gT5DvA7UA62EfFbg1yc7WB2ESGEFTooWVoSB7FKZ2Aw7bUWTRVtZvZ1ZGdxgT4XKyKZQViKMCHeBKM",
  "key31": "3TuJnhbd5tWdeNMVcTvgpNoxWF3rGaSGxqDGWEt41gCLsnQhCThEMuqXc9qGEK2JwFymkGaKyBsr5C2HJoWegLVV",
  "key32": "5qQdL1KyyAiqzGrrxrJ7iviTSgTpdJER91HQwZvQdp8oAtgLddbbCRuVmv6xzn5FtgUJ4sGfNZujHPR36fkJb8V1",
  "key33": "3Fk1TKV1YxW3EzRUwHdP5hbQcvH9vhaYqw4hYwZg3fgnZrHZgSNB1w17rL8ogEa4Yr6BXMkz1V5JyhdbYdHxRrUg",
  "key34": "2tZLiNYDfkZgWDfeFUtC6d3JJf2XCwWCB5vXbiD1SUase5P7Xm2Pb2aWbaXGT1D9q8Gccej875sk7punmQXdHLL",
  "key35": "48Hzqqfhsrk7UTNraViRAwycdmwYVqT6tqmFhB733qNMX7zi5fx7HFHpuc2BNVJYmCycEUfCJZnw8F1qVprLUhd7",
  "key36": "KHT8i7akteBoHmz4Wd9xSS9iNtQVT3VZnvYdfCs7VkQe72fmAWnzZvRyvE3LgFtSDVqSvE2xw1uNaWXrWRKbLnH",
  "key37": "42CXvTA2Quua8ByfRgZ2ax2hNpNvK1WzS4cndbJqdJCA1DyASkcjETaGcJxFt7Qc8Zk4Bpgpgrg2pyYz4j2YrM1H",
  "key38": "63bB5VyTWcZkCaJGXqYHiYHXB4WxGnLk7Rc35Q7Q1n61w3WBLrLsE92Vr9sp9eFyAU6dQeK47D1CtK5t3DFKzyq9",
  "key39": "4Vq2VWo2LMvgkgPHkELTRNTFSLjjUFdY9XYikGfrgvRCW6nk5Eea53EH3fq8iFkKTvevJw222Z7QD7oCJ2LKQMhx",
  "key40": "7JDvCuVQPb2VJX3FPLHKwomUEqR5Q73ibc3im79gqKVoBZ4XDjdV8MS2Zqf8GMBvpxv4fBCvdMAztb4vs2RZjrN",
  "key41": "5VbRFFmpx3XD6F6NQeibTKAmerEviw3SHAdyhziEnERonRwEG96WzpWBLNXDSg7iYaHnnnWRtLMSNrS4Ga7PuY24",
  "key42": "38RhG8hn8DafdWwUD5RQBtikU6FUjJPM28RbBXFUY66uBq2zgHG5BXzucWJzgJr1k8L9edqcxsEasrdQAxuk6NL6"
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
