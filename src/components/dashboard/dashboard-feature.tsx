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
    "3Nx5xePb9UbZmT4M9HaUE3zbqkNqBnPXnuotWBNiQrSbdLQwwZGs267WPCJ9DUHae74VrUqfGBK5Z6KLvSqdNYhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BeepVkcanhE7ZtWWP3eYSmnMupgEjbPA51vFDoK81y7NaPoE7Tj8GtUTserCNs9naQ38dKGqv3zHBBSY4QGbpd5",
  "key1": "2h7LZHy2QneseSDckBsVBhbc88qX6t74MiJrGE4PR9yvyNX5czwASLyqiXxW1dvNFLkf9upWuysaKBcTNCknesMW",
  "key2": "3XFTFiK46gKjVSEgSbCYbFi1tnasn1saqeYSKSEZCAK1tAyWa3HNizVCzf86Q8MxVQiHe56UkGiimKogHoCnjEKi",
  "key3": "54L6go7URzURpjQrtsBcy5r3hXwS943qpTjMKz4Cv72GDCCERhw1tJUFaXkp1sWy1vLKPzsMC2Qyv7JUcd2LX1qo",
  "key4": "5CW3f35MMkjvVVMdpPj5v9yQwuaFYtNPaFs3j65e5go1EBxGDdTgzJSkax5QUBvfSgP472jSxwHp1p4W6ZSvYUNw",
  "key5": "4xqG9Y5DfbVmg1GG9rPgjLHjHx2iVRQA6Zba27NmHxUt3pAL167TucQXiJBYSRGZTX9qVZ5BpfJKdLM14ULDEgk",
  "key6": "3Pdyg34XvSszSyiP6Xq2JEehNf8b3CGJZnM1Y1TVuCYzua9FR1svzwjYrd8CooCyGB2wP6fsdixwNDmvW9AoBSrT",
  "key7": "5Kdy5PPaqa9LioPWS9oyEeX39DK96DYfB85M9SSbg75aqrjYoF3dGyTG1Uescfo3kPHfxeEBvcqP685jpKKVmnpF",
  "key8": "xjsPCnKkTkMmaRkz8ZcD5cTeENp2mGxpuxJcpMLgtGZWAzENs7R15XhKQsMmtdyFbzxkXiw3HDAvo7RqqaCkVNr",
  "key9": "4iL7QATcwD9zcWkktNreqrf9QGYxoiZWp23cNivnGwmvRK9xzfYr4fSTa25vVypzLiT7cZsKxaQhmRdhh3bva85X",
  "key10": "5mEJ99LkmungNAez6tfBeqwcwKhheXG7p9vFoRNEAnYuL2yL5TpuXAPadLCnyXwuvH1WLwXqySEurBxE7DeiavoV",
  "key11": "UWGxw74WYAjbj8TksqhEL2QcPu5MkJB43D8EPZnKgdKo2RN1dzDUm7aJS8AgoJarETQeuENK9Jj9uizLUN9C3UN",
  "key12": "27EnjacYq5jsci21fi3UJUutQmi2Zbyj7VpscRbNYGAhKeVZmyc2BFfefNRU71XotL5jT29w2JdJDuLxRgW61LJE",
  "key13": "3aNMcwzAxVuuJhSaUnzoAZX1rzFvLGe3nqEZfCQHyMDUzxQ66JeugsWuKJ6rQSVvf2G9UzXwyL7kBTC4YPv5qf1M",
  "key14": "3JaCVfcptiuZMioLrRzxe3fEMGKRvJrAZCRpw4rC7h6QDeQcX1zJNCfbc82zaWrVCrzQePiRRLt7xxQyU7BaFmNg",
  "key15": "3xNiVWtB25J42QQn92m3iFjDsfCQeG6QdhWSq8vKuh69GGDKFSNuNotVxCrXhwmNr5B886SSo647ED6j9qdGJKXE",
  "key16": "3bkiHXEUBVB1M1h1THeyb7PzW2sjPy9kQpchBoC7pB7GZrnQxecEVTQqVNWnUpubY39HqaijPMmfSruGFnygyk9F",
  "key17": "5LeNpXMd7MvzLLyBYRkPqf9WTSWbwRRgtifJCp3tXDh52jmh9S1gQApANjCgFbgPRmeHG2QrXDmGPvjmQdeChuex",
  "key18": "2GkzAjVCMJSJEkmU81UcMJpniJvKAYYdYhrb8B8Tdez9V8L25ZgPYrEGqz23Lg7X4LjedQFC9SYYfscUeLeQdnDr",
  "key19": "4uFeCsy1ABs5cCztUgvA66jgK5ZhELsvW2RpDK8gWuNQVFTyUM9MWnibodBLECtEnxxoCrUSos9yVoZpcRcbYKYa",
  "key20": "3sCSXijnSSFBBqTdDugQXqSTKwmpNjmWRhC6X4NyYjKuDp84nresQ2Si2DyTe5wDi76p1FcQaTgDVJXT27xEn9dK",
  "key21": "uH3cGFePUjqin9Nj7tSE6PkoNd8CPZJJkVBv9ns7p4jXVVdfpV3uLFJdNs9ZBkPeEJGiXAybxqNhWHCro3Xw9q5",
  "key22": "4B7BszFAcqc9UP6Ny4DuoWkm4DEyYhYQUpmTnfm1Eu3CZrHBJeqxoT2tLAvuc7XaJY13m8XjfyVUaohJfTLm9EMN",
  "key23": "3dtwMgnprdBHiDVNLCS9SLxhYkXCgKc9jPRutUXmfPeoWrzPqYLPJtZ8Uhe9AZw2f2j43ShKZYJGmsgL4YJEPnZo",
  "key24": "3osn9EyFWAfqrNerUAqM8xnccQ12w92GeHC94WtCiMMEwNKxq3iu1ZERZs3oiLHE78xYWYY4ib98inuwNEpu91L3",
  "key25": "38g5aDcqBeHzhnV7GmLxRCGHUAXxgi6ysQ3tkH8YKbSgEoo9enGhrxYYGTQxq77mqq5MoPq8vfCYV8tba3NJT8Z4",
  "key26": "2KqMycDE7sjEpsPq3RU8AzcmYun4e61ZFkn8atL1PP8iKuPkQLMuZoCcqfejEJcw9fbsLQpoS7DYEEnzW3VBct3u",
  "key27": "3cZ7aeDhNq6D7VT5H5BJPv1RZttJEwyTEu2LQd8Q4vJGK1TuZ5nBVGvcHFUmG7HRL3WZH9m493AVdnu3WsjzRpkk",
  "key28": "4aqXAWJqpWu554HU85FGAn424WvsmvbEJm1Bj6TYAMXD4JeyKLYzLuqAWVwkDacWDc3A9xSX6V3kWyjZTpZ4DbNm",
  "key29": "4VDavsKWssmTk4emDckRGKWSQKEJNRjhTrxDKUdZq8Fu5ZvwCppcUJnEggmPaotJ2gqnunJRMb1GNsPGHotV9idE",
  "key30": "4ceizdUfSnSmqumwcpQQ6o4hQEfQkmWvnSWZSCGfQUHRSt25RA9Q2sFxyuzzuqVPQLWVhTF7d9oxasFA19FGuDa4",
  "key31": "5nsQEqdh6BNd5SBhqpwFVrTx2ftsXfyPNvPf2vW8qHVaAoVLfxCstjpEHvTsReCwBMAu2hAR8jz9twaod25SyDdt",
  "key32": "2vT6Jw2zRBma39J3vN5kLQ6j2RdKjWQm45PzM6tdsCsJCuzAzpvqVMX1X5BSLKPWfs6UNfSvjm4Zc7GpYj9qAqqU",
  "key33": "3xrBiPRXYfXM9oRRaJF4UMJZk3BtLZ5gjZVkgA3iCqQvRCk9vN2Sd2YmJ4EkhgydYWBp8JfxXf9TGYp9HwMWAAZg",
  "key34": "4FgoMpJVogEqUpkGFVF96PfR1wLZUdumDCA9AhDrba4e8g6Fw6wEchh11LiQbeJbZjjD9AgPoNWfmrpMwXqPQRt5",
  "key35": "4CqjEdC1Czwc48Ko5wJ2BL2GgPPNxzg9imyreET1nmcFsZ8jTcWHY1q5t7fvmQPC3Xf8X29Jp6Wq6b4g4eb1S4j5",
  "key36": "kSfumCh9t2ph7fQpsVE6TVqivPGQKUZ4k3acu9u1JvmYtgJRRPpMgqPke9irNTGzzc7UqGiknWiFna1bvqBS1BW",
  "key37": "3J7qs5Up7ed1fDe7eH6cxQc6KSmaLGmBxpvqpymoJhTvoAHKPCDEdqms5Rz3LZndiEAM5iDfMagApVrnuE6odmFY",
  "key38": "5Y2mBeu2z576ZcxxxSmn5gaUBDvqdmeycB9JdZJnZvdeqi3KybS5qJLGPHVpDLyE9CqwXaEFdPh3FSSNfTVRNfyu",
  "key39": "2BQNDrWYwpWdta9e5g7dxUVZJcPDcc5cnKYxGZmgmn9EuZFQRuaBFPBBGaq4edGVhmHz47CgAwdCrYf7Hh9xA4Su",
  "key40": "4f3U8VvPF4PQiHibezUGgjbWae3mZoTLFRgupgWBd57FAQFQVNnHiGNYhfjna9UoHhYKiSADbPLWHECutxM3GRrZ",
  "key41": "15wgWtUaqDCr4nLAKLDWdQGxTUMKZRn4Vq2H4VxKfrKYEAAFkPv5QUS8ubyCbJwYBcawyX4zZjgNLqScjuYhhb1",
  "key42": "5avrbG5SSa4MPdY4w1jKY2JzaNpZfFV1aNinAFRb6rsmpL6nSBXwF1yKpmaFkZpre6MAAekexqBPUCwLAdfbRLVF",
  "key43": "3A1kUvpKiaSUVXyff51f7aB3uasBp8MtLYQYsYjnFrsJcRB1ssksqPjdkSToAD4AoFz1g6MAykPVtg5QtNRaoNRC",
  "key44": "3PftVYpaa7wbEHFQ6nCHnCJ9UEQLuh5eogyawqDhMsohMuDJWGK4HSBFrPvACQzCd3qkZn5kGJ9KcvJsmEy35TaP",
  "key45": "2gB69k4DU5kiCPPcCw7Wm2Xby7eGicJ5T5x3SwCK1ZLthkWst2SC5abk23qQ9kxfFEZ12X1KAtLL81WG4Z8XXpDp"
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
