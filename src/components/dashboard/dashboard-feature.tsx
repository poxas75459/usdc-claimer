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
    "5McLQpNodh8uMc3naDCnWCJexeNxJvnzjKCNDbNVNG311aaehvWoZtEvrcfmzz8yvLW9EQ7eiPu2UqnFNZvxtKXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35BgoFSssgMk8Tiuu3trPf2ub54XsVvdwwtY63s46SiXmjmV4CoWbX4cCtjKpcMUMkX4NFmUv2Zi4MBoWqhKX6LN",
  "key1": "6375uT6R1QSYBMgPJJMLX44JeVD2XeRNQNMMoxquF6VJknrspsk4BtHdnKze3S3NCyH6BdTSJHk8vW2UCz8jYuWn",
  "key2": "2uScW3QNYi5T3ALCJtmVWv7DQFx1ejKLe7Ut23DFKimw4DF6djaBMHTLH6vuaY6MKAjBUGhgTPbj4JegjnpwK3eY",
  "key3": "2rn86VVJsiqyWt1XTY9avVeGx1ckJp7aMzmBj3zw8Kt1HR2Y8zhdVL2vrVpvzY6KSwkXnEyvtz1WMxwbmAxxWtvW",
  "key4": "5nhK4tsBpdMHTKoNjAYsFKDAW9fprAAiWSG2T5SDsamKbz9W2CvcdbKm9Ks2CyJv6DyYB1oZWJNJcRJGKxjstV7K",
  "key5": "4qXNxUs6cEyGk571d6cUmfbkitV9sBxVRwpkKFPeNNopHCG62JgqgCU28vdiexzi55sxfTCmnyzsmL8PBvfvN7vV",
  "key6": "5AXtGsB8wG2V3Hbs9mM1DSfyEqpkSsAj3QQiAjfYxFXEBvtZHHVAh3erggYFno7BxypB7eYqnSryhmkDZWNympQy",
  "key7": "AUhgc98PFixMUkrioNHSz1gJNjDiRTmnPEUPJvz4bQgApF8yWHZPeN87FzmPgUjbEaZLyQjMqyL5rRZVMSTot8W",
  "key8": "5AtDwAUgHxGMdvS214C2Lr2F7NPNpjX9jNKDYyfj3pFaXUSxkqYKXNgtHYE4iRbMtG8k1rbfNmqeP1x2y9WBEhfz",
  "key9": "4HLzZfF2zAmkfV3i5pTEvfaw8A3o3VBehpVuyWZjdPSfNXTRL84ttdEpb3ySBA5ggopbuWb5TsxyWpBxTBjMnK1E",
  "key10": "2ySL15gBgF9toBDdtEYeCPZ6Y1cjxHYuaQUa2WMF9SStP2wwK13KH5cJLx7LVCnF1kR6UZsvuCYBzcpfYzYfMVrn",
  "key11": "5syNRGtZ1znKN7cSfj3dFxu3ShYtoDiGeTa2dbVytuK9GVyek6saGY69xZQqEnPLXpp7dPXszvfr3FuLDKWbCBUL",
  "key12": "3pNJVro8zcMsK5gLVJkgwfm2nkkjHjwLxqx6cmzUmGGvcQQGNWqcXKCkQSSDYvjE1xwDhNjTGYAhAGAkXB3qh6Dz",
  "key13": "4BmQhf1UqRsECaHbeYZms98Gz2fuXiL5VbE8HWt6LczzuKCEVGeNu15BtWkwTqHnzwoCxHDBMTH5UZ7wHa5C2W5Y",
  "key14": "JyMZ6PJLDZugPSTFnYVHCPdk3CFTXWmiF1qNxHMPEsda4wfW91fNwdJeoxvmVEpuXgDZvtmXa2ZB3u1WRoxG1y7",
  "key15": "obw2dgXr5zGNptW6vPkHCNnmeD45gvS4Ab1kiG4W2ys54CJBYnm81Eq6kPtH2S7XYeyMz44qRyw6sddTvDJDXbM",
  "key16": "51bfy6abzGgLmiWNd2bMt8c56j1mRaRH9zM1g48BQfmu7QJf4iGupX9zqMJAy74yWFF4p5UuWaJkKy9D3TzLKxbH",
  "key17": "4SUK5xc4PTEWqv4z6domft58hTVpLoUDzkFMtHxFC4t63RZ5cz35TpbQoepxooJuKHm2dCdPPsaUkCHxTRAcgrV3",
  "key18": "14C4HjTo3SBh68yDVt9bnjmkK3UAavzdDA8AD97o3v8YukrMycaGTVZ5mbLKuKvWH8R7buzbU46XChJPoaukjKm",
  "key19": "4VSFGaTuBbxVwuF6ZjmkTxaqEWnQ62bWcYasaowvjfwcFBABCMY7ezYKpG1zRXSfYtdPZB996oAV2PpqTM88ChPR",
  "key20": "4x5mdfE9LqZEPhCW3dcmgSbVj5YJLWTQQkN2bSSJqyenHTB7t5HcXWVWWqy3z3axurxCmFxnzM7ug8RnAWQFQA9h",
  "key21": "3ARr179dSksDe5fLQuXqLQsL8mWdTtfohoAv193YH5tr6jmrYvB2Y73zabrFqK83XFCSYCYaogpoQf7ikQVUQq8a",
  "key22": "2HbyhtsgSck6igNY1meKb544ztpKutuvQwD1VpzuaU3UQKn5J35GVyPpzjwV6y3XD3s2Po9rGKAYdLnMWz97cfgP",
  "key23": "4t88V2kzVUuBXRmrcjZRoSHn9VprK4AxHDjpath5pF7N9RUcrTYhGgdWmGeZMfQ5XpNsF4tSbjDjfMqMsuuzRrkA",
  "key24": "2K9rBcswNQ4Kwc2WSvn7Yv7PfJXD4LgBYfjy4ACTA9iBsdAUjtD9oBFrvGymckzeCzctiFaeUZ9Mf7pH1NkF4PmJ",
  "key25": "3sPS4ppEh2TS2qQwKt7Fam55LMohC9Mit6hHg1FBNwNb6UQgwVuqKvoK9MUwYZpsLCa3aSAVfbcWCDjz8C2LwUDx",
  "key26": "4Wz4kHtpD2MRxYk8dHQ4sfnuP68GPYu6G1yvs9zg9eckpVyLWvP7uWPCoMQ4DDVS6nESZrziKmXvARwjtNeFWriY",
  "key27": "26SH6hT3BAv6aWVP4fqDohqeBvK69P1ZyTKv18dtHNPUiMtyUA6jcRWN9zPZUBc4HK4NkW4PECE8zrWb6HDDLVhi",
  "key28": "5Syeukv4crj1zLJXqTraa1P3DDL3UE5ugJ4S43zuZjhBa1jzR1TAYqjfK1iyKynQXfk2GZ9B1FTB1gaJwaEAfXFW",
  "key29": "67hnnExZxYLdmcKupRZG8ptrH14m1jLwUhzoDJxoyd8JiPuCAJK2f9znCBcLFRgsyg7M2LbVoJrdCTBoBR7C2nWu",
  "key30": "43Ne71cK6soTx6N7Wp8Z7uoZMspm2ERYVoqkhrHpFCTFY3MG7LsykGcm6PUMQNT1bP97oVBaeNc9hX6MQtRojmjH",
  "key31": "326GoiKp3GEC86rDv424TpkskLKn47UEJ2i4uSEoUq8cj8Gc2ujMPyBs2BSxoftS4JE2xNWn5oEqwZtHB6G2qzt3",
  "key32": "2mdUhTEi7Am8L9sXcybW341edg26im2moJyEK1iKgZv1zQXJX2w7kk5M8K4a4HszBqXzQf2Bw2GwMpcsTESqF9bj",
  "key33": "64FTwU7E6gjR6QdErrvm6F9wKsbVPXENnFQaKrACXErrc8n1M99z5At3dKuY8hkKHVpq3wzWkiqNma2QDKJy2wri",
  "key34": "2vZzZs1Pf34RyAEfTzhC94ES9bu5wRwhHpuu8wSTBqLRRxyvMFsE7YPDnr7kEofq9gstLctJDrosytNd8YnoR1ND",
  "key35": "2srBebeubwpNfbcqVHvtb6PzU8MPiafE2KvJfoa5JpsC8ts5Ae5JzLmhdRscbCczaa9ufJfq2swZwH7HjSzXSMtu",
  "key36": "FuCV6GbW1MCaBu5Tc5Kmse4ym4eMmonzzNW5rPKxmVrULH9LsU15FX69hB5cvihq3Qr2fNiNRUrwngQuQ88R6kh",
  "key37": "5X82rpZAtzGF8mqFJy3UtEQYpPBEYLXfg5WP39FLGepbFxad38Yf2SebDjPNkBeJzTgWeXXWVxjxJxXii79ApX2D",
  "key38": "4W3r6jnUT7UtjAfnsJBV32ZfiqgezQ8CNDY83ahtg8nSu1i7n79o2DfwQj2VuwJYd2p91wYVugnhSAMU7h5GrzRE",
  "key39": "4XeC5jDYXxr7AfXRFeEkJKZBCYkvvQNmjoXrrJjeTTJNXR3XFnoqSveF8oCoj2MB3BK2u7SSiv6r4SS9ZkeApaLh",
  "key40": "5kGri42ARWYB6ddw2N9WfLAE4bHUtRKWtNVQzdm3ryZNbzvcz37TG8L32Xen63BjGVFo6kDfev5x2mQdAXTMyq25",
  "key41": "5CsvCtapAGqCQ5KMrmXy9eKe4SRihunRuHqQoJ9n1vi4Cni9D7k1o7L3PQNgtRzJCnXZb8dM9nRRt2Yr1fbKEjSn",
  "key42": "3j24n57X82TaTzW3qWdeccJFNqitRfuHr8ZXXD5BkkpUQVM4hMLVdymncZpDyELT5pJnYWtfqvz4JG1FVWT2N1D3"
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
