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
    "ExoLyMdLpDSiV57bTArTm6qFRnTx61yqbkNE4DUxnoYNTfD18eGx4a9gJGciQZ7PZPXdB2RFE8bebaRTBWhWrew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQQcZrDFWK6fkR6PE449ZDqVheW7xv6dyHJHhkKXiUWi1bWQTjDWRewumUUniNRf6fG3Zhnvkp37qyLe4hDzFLi",
  "key1": "34FG9AAY58cwYu4UfUFtnS83etFLciydCWmZi48aDLZa1YfgbqsHTZM1jywST3Evsiux1ajWYCvSRLv3bcMgsRMA",
  "key2": "613nN9aP3Y8gL9UWbxF4acZXZVymC4frsPr5cbyfmz4eQUuxqxyeAzSHbiAXfQ4qhBkacJ181eEULjULcfnbFoo8",
  "key3": "sTdE5EWgtowmWDdcjALhvLC8UqqnJ56KXuHcEAssCSVTZchcM3JhKNDTTAfHjsa9Z9FEeeQJ1wjQgPFkjcmShPY",
  "key4": "423r3eFmQ9DCbC22zHNB5NXKQafGgmXvR5bz2wrpwvUBDcrkNPzGPYG4cgqu9vZoEk7pCyU44bcvb8xuEutWMGwy",
  "key5": "2cCsGkyzhLomG51wkWcypUd191mJtWqZnbitawNTeow9JaDGLkDXL3Vtct2T71JKtqpstTgJU1VrgLA8P2s94bnK",
  "key6": "1UkuSyacVV859MexNsq3PmfQ2o1trbuSj1FFSFs7PvmtUvnnJbLqwV1EnvhdtGxupqpKaejrQbCoQBD2AFG3KWw",
  "key7": "3VrVodm2wN3k1v2PBnCLnXNM9L82AvPaEARZGF1hv3QwrbGUR23Y597Cx64Fy2XYRBrTdPEg19VW4EAVaru8t7ir",
  "key8": "5zX19rTsBzVVA3CqARM4Ln6EBoAS6mhiRhnbj2v8HhJCKovE4hf4pVr8GGE3rKWpaLQhfE9j4rTpofN8he7YEp4N",
  "key9": "4WVxQXdHG5ZjX5yvoEjrJDiqXC94GCqQnspAhXyp48XG1Gq9ts58zwRHtZyJ24tHiR5mktfYH28Xci7M7GStLjRJ",
  "key10": "njd8TVyhmE6pysrW2p94PDT6x9DCG9VRZesZ9qwHqfbrY2cU2FdPJno4FFZzSxFbqQRbeedxvwEtcFd2jGbnyhU",
  "key11": "3MQmkgEmSf1EdxhY2RsCqiu7scxaeLMCt2d1E2VtURUSxDXWvLpnDbKmcCvt7Mj5fdYBr1Z2dpyodCmPevK7vKwk",
  "key12": "4iyYHCkmigfyhaU9qo1CnPm1V7T7FDWQVyRNBoPDpiSHvYJas3SsbkcZC87AEJKJZx7d5NptdXz4VQNBvASBAfE3",
  "key13": "2HwZdxPQ47GwJ6FtEpK349KZ2qQsULLAAtjbVZqqyPUUPs3dmj4utaSFthj61BpALEUcdchVcKQkEBUR1fxp25Xt",
  "key14": "3QHmgkaKSPxuizMbE2ueUhfYHpFqDQ1NrojE1KEEskkEvRLDtWKLz4nWHHDHBfAmQezpr6H4i78jt5CE1zhLDmEz",
  "key15": "54BTh7TYM56sP8T3vP8WN7HYYCNo8nFCbLC6iD2znfsA9ZekMafAMAPHpGJ1J7FFvJQFYN1nFpwn3ecSdzQ28rKD",
  "key16": "3Hmcsf41TaJaYFzwDosaA3asgBSf8wBYTrKB52y3ER7xeTt7MaheRww2z4pjvLE7UzJUTjRh5B3kvV96NMXwsPzB",
  "key17": "ssoJqSbfixmszjicYRE7sosxfKSt7qFKSPkZcxvKx2YKk5ADtpPip8PEQGdugDKyA23eBZAAMXVB6QMZXVGh1JJ",
  "key18": "4n38quTNnVP9zobxLEHWWwJqi92LbSL9x3Fks6arhLpB6UpTFz4yueVQFuBZg1xUjgywgYYnzboWQAqz47hJ5TzE",
  "key19": "gbuEh9KwKYJAXmxdGL3Vz17rqq1TTEATQDQLvhx2ipRzSNZQqBtABZCnas8ki2QjukK5v1eNCNVto9er9zJJgKm",
  "key20": "4NsvQatG4hBNenNUb5ihcDFdWmpRHeCBz7E65bzZzHvpq9osNNaicpzhGitf62EPNb3spNvepeukJVmWuVZioRwi",
  "key21": "reZvxkXhgiaoiPFTdrC9PJXnb3SXTftELS7LmUCuiqwYYjLC3cZxWc5sC9jqFXJCZDzdqJ4GFs69nN9dyG5xvwP",
  "key22": "46DDGqxJeN1fsi5ufpsAe8eR574fE6mJbbKsmgzCYzUfNTUt1Z7chvbUkgW2dUWCnJMU3bWVsHvrpoLSWYjfUahK",
  "key23": "x2G5a5KzsaNZxX5aU7ZvpNqPPGMCuhambovc6HgvJtZRkPX2SALnEwMJ4LMY8GwMH35wfFXZsouBiSun8ZgoHSB",
  "key24": "32mNUHhWhJi5hrZaYMeaK17kgaTSM852HQgsrX6GVuYA79kaak5oQwtX4eaek3ZxtMaKGkiKoe9wmxjSWV4Lfzt6",
  "key25": "XnsKAx7zzsPkD5SKUmyhyQCUxxVZB7R45oy7oxpPL463xGW8k2ah7poGyRcajpL52m8rEg8RjPLFmAXzeuJed3F",
  "key26": "23xeDTazthbj4rMCXf5ro3Rf6n6YowEtsVrspfd54LhLnjdFbw4TdhT8Th8oPNciedMj369Cdz9g2bEbnz48FzAn",
  "key27": "2Z3PRLHDSJmJ2gsYjD4YAVpgj7vfkyfMzJkiKjKt7A2d1r7NFr9v5a89kzckZ4Qd4CkgVD9bwUd3gRJojmCuyVfy",
  "key28": "4C95WTyeEssHk6hMKBsQ1uG482eDZNQ4k86GCGpTv8K6XgbCmhvtfawAEJnEqRTywmmsFu5Wf4PP9XkNrPxdgvvb",
  "key29": "3A5xk7VTR1x5Ddqza3d8RbFCdBsrzmNzNPA3samo6YxfVsmf6FFqWstfqzDoZcXQjJdjkRCFQXBm7B6kTSNRRgPC",
  "key30": "nFdWx3kZSBaWk61PmYBGrsaAUFumewK2qZtf2zd8dSqHKWk75go2A1Qvs7tUFvThMqiRHCdAa17zw5ZEd5drQ1i",
  "key31": "5ikCXpQfZ17GNqrPZE3Wb3n7Uh26z48uAKttEcCb1vDt5KCix6DukxpmE3z5sEaZ23fbpBYG87P5pBFB5PPkuSpf",
  "key32": "4LdNgX6ornusnzUStjDdxe26xVSMB9ubF412YaHjKiZ5zi85hh9ipVweWn9ChTzANQ5GyZmQGDtwuhLJB88Z26qA",
  "key33": "VQnaFGzw6wJj65oGNVtbaXp1mZPtU1CPcyrnjnYXTv5vtYgfP89XET3mocjrFgiWdiTsioThGcsrLjMXzTfhXy2",
  "key34": "5s8N5qk98r5Uk7tFqWJTqsVSrrhqaLiKTPzkAFY5XLPvpf4fkHweYXQHQfpm2ywgxcEC95sa9ZxNXKQzsDV3PB1i",
  "key35": "pDThXQ2U9X8voroC63AvJ5eiWj4fSDceBivoRwNf8kkvw3W8dXqc8XuDossRdHMYNtBu3ubbw39kRU8wZTLSDZw",
  "key36": "5tPsKKa4U7JwEg7H4cLEtiJjcqeW96asHDU51eWQVmNnEVEKsd8XwXw2QgtnXf93zeVchRCoCn4KbG2SpPL8fkvK",
  "key37": "3FftifN2Mfeci4cxJQuDv3DVnS8yjQfst5Ys2y4iQBW4bHhGbgbHvUEF19gAfkpXq1BDurhNGMGsogQZtGyGySig",
  "key38": "VuneaueYryUB1SmQYDducXwRh5wAoQ8mbTmNsk2mmoxHc2TXYGzMP6TXdzMoFMLhw9xmcjndP7sbB9U2BYiV9pP",
  "key39": "4HBhaVHdz22Nfx7eXwRrTqEhAWEmQucgPX4ECFHk8Vmqm5jbGCpQyYZhaeCkPhe5AjpiqmzS5Qv2YzDy2BQDa5TZ",
  "key40": "3Q4g4wxwWNi92gWjL6J9DKaXQarKo91eHDVqbN38nxxqXG2eQXAwv6DF1paiKVKL84Z74joU3aJCY6VyamKy6oXX",
  "key41": "49iRTvud787xHLctoYfjsF33R9D16tV1L43VjPsFgFFdeNzq8EoaSrBNaJmjumxqXDrVCiAyrky2Z4BQyeydM5Vf",
  "key42": "2fPKCB43kJQTeL8mJif2rXQRycanoPaNJs6rpQ6hHg2Qqh42iGidkxx7MtXnhFvLhSUKRnDinD2UX16a292e7wdH"
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
