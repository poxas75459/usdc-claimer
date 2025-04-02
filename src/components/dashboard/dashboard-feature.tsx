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
    "2uQ5cVqdxbhXTA8vZa9VEZpNLfideKtfGCDcSrorgKrrWecPUf1PbKT9AyyA28H7m1LJqGs6QXqUnawFfu5EGrRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RhAbqNFsLfg9nkBFfwXJCBKuccrMQ88bTkEAScQNMg7CJfoUSqNG2Xr5RbmRgHkWPjnwqCa4Ug2Ut2VQyJiDKVq",
  "key1": "4iMREyfxwFGqinrtTouUwT6Qdf3S6mFwfWXDeiQ5m9BcVe3PjLCuzEA1whht3dhs61XjAffTv7kK7uRL7dKFMa69",
  "key2": "4urVTazCynxoMVYYeajUfh1TPQgjouFDDJVZtPDw3WPQFHjmbQD85oQmx5ekzZKvbmEboLsVevqndNC1NAggbzU3",
  "key3": "46LyLBMWQsYB6cWZiPveDYQmUenceRkXXYbvTcPLqNLPCvQADTcH9Cf9Qag4Mzi6Jae7eUJdijG55cxfyKFtSeEv",
  "key4": "2EvMxcduDzva5YYKqBBHtsgzCdA6sxBu9ZZHY8g9rbVuJKfnhLfmDDXBgtEUaFLsrQgNPEtvWZz1WhKcbuJXQE2n",
  "key5": "5qcvbXVTm7GBpoLjMXQfP9G66Z2o8fmmM621S9KiC6k2nmcn8dzXFVHvRFp23wkajHsjyPoh37azKhgyTRVXFGST",
  "key6": "5hCN7PGurzuPZzdeFRiuxPuLFqRWS6KjkD75Lvd7X831D66t4iV7hZLWeKbvdg2UU9tridwvtV8UqYTF5hJtP6dJ",
  "key7": "HV6zWvXgcMn9vETvTGhWx9q4GCnaXHuJbnqkLKYFH5pagxkaFdHa2RnXvyZNd4jfshf41eXLjc1Q5fPFs3YQ9dM",
  "key8": "5EJFyWXTP6izEtxFVF4Bor6TkPfgmLE3mYdcSzPfF3kj6jo1j7ajyarzKvL2Uw3cPxjbmsTYgr533WqrwdjmZix3",
  "key9": "2eB4YZSrYhrThGgkLNNu8zKyJ8MrEF6jx5EmBc3m9jo7SfoJNUXpEpMbpDi7AfSq4pP3XGoZN86HQmSgdgGsy9VL",
  "key10": "P3DyLNv5LuejHTr4hWzsV8gdUUEspAgd53sGLk8Xp1uhjF4bxoX4r2xV3ck4vJYLFyYGzAtYTd1Ey2MbcZvaay3",
  "key11": "3qBCPbFQHHJ9ajtQDVCtfbDsyWqtBEj7WJfzn41zr3KeFao2TZZtQ86Ugtk84XDSS4QU6gHzpQ1GKmu6np6eHrA3",
  "key12": "5XUMcASR1NUnsXfx5mMUuc7bzDozssuyoWKBUnVCjk1VEM8Qu8ZGYZJeUEkSfFRi98xBco9xW8TjW9sozZCE9DqP",
  "key13": "5LyhrRiRmGg49BrQckKnHESbzc1VeatzCb2MGUKdKdiRece1UMqsrtZovSaVwRChvUcK2w73kAv6Mcheq884xXEG",
  "key14": "432QBCXEeABGU2GEbjzdAiPiYT6nAemzhQvhPJtiRgPtaUfHQL9gGsdZuXKGv3fEADxMFePKqWT4QiuShT81EV8e",
  "key15": "63BH7gxe9YC1CFQA6uZCcsSVo3cuEbL6WPXky6BCSvt5m7edWoY7BWLuejF8TeMqKZcBd2WDBiRQYfgkanKUS2q9",
  "key16": "5bCmiEBVUdyBXkRu81jTL64yqXSMuzRy8KDSUoaDTh2KZiF2WrTXyZfXcJWnpGsxX98fXJpFL4PMLYPs8vQuiveY",
  "key17": "5h8p8kgpk1geFZKLr3bSKnzr7dkh1TvnfbcGtAku4rjVWJaEgYVMrr42G4AiRRyg21hzwuMNG8agWQGcMJbUtu9s",
  "key18": "44gnh7NophWjLND4LA83ZvuLpM4eknS7bQpnkmWY15c8gGMJGkyMr5UeKNVUyjUtv1XcqgFGoYUNgw7enrw92vjw",
  "key19": "46kXvqQxuVBokGLhacCeqGSuUqj4F2whJ97rDaycGvY8zFdiP6B3r5snPHEmyiWMJXNnM9a3z8kmKSsBkSG34F1W",
  "key20": "teXDQLvhchbGBkyXRe8YTD6dNbWLp3uCoC5gqBK2732jsmywiEbbmeNfjZhctMD77VTMkoPWCMHrQfxJgPr9yVD",
  "key21": "54sTCPvAGAnxnRvspaRQNTgHPHvb2VVV7h9jRWYG4ERE2K47XYCE7y392YWGdpmhDJb1zMZdjUZ1RbXrjKpGVs9Y",
  "key22": "BFbYzYgfphTat4yEc6G2wJx7nrWAJZkGFWUvJnKjx87NokW7gd3LMx1ZDgRh1gJHjXTuXE8f9Bk3NNuJyKH278N",
  "key23": "LNo4Mf2FC6vnTFA4Jph1EXd82VSAmqSp9pyF4DcLJqNBdwXPLxuU63r8ntAVc76iyW8iWTuzXMVKe28zy4TxRJn",
  "key24": "3W857Sduuj6yccKn9CusG9eT42AuYuGmb47siqLKHgy6gNr4b7KwzkqocSxnfHzW8ik1k1tuRgRtTR91WjxoE4EA",
  "key25": "3AA64JDAnAUtKdzs9w7BiM6DGwZjicGtkQCZnLDHCtmtyfkt3hBekpF7Tfd4ySU85A2uDCpsYZD1kdeAM4iHpsv9",
  "key26": "5Fxsn2jB1RNNDpVBUjg7ErbpMcMcTYUJTL3irXJHrN7zUo1DobbgUdPM7jQLcPj6fRU9xib6RXXvZbYYvvvt9Zpk",
  "key27": "3tGTtnkhGDTiRwxf52TDbNkXwDnjxwRAt6TcgKyza6ANJL3fg3N3xrFLMSHb73cM1whxBT5CXBnoe41a6AJwyBvC",
  "key28": "mts4eVmSX8QE3vmReJoYDXmhLV1GfS4sDJnM8TLLa24sPsWsJ5nAZDKGWszzBkSHmaMMmt1vK9EMeAiwNEjycTX",
  "key29": "3fhYVeqRUKvM1arctFkHFNoHeQVhbMAjFhpyQUKtkt7ym7tFF6bCpfvaqnajuC4ukrGgLMMNetREGspLwLc63ewp",
  "key30": "e9LX8kCoNSHBanyU7ftdcAkHUcB41Gi4PBEkupGXjrmygmrL6GpncaLUb3YsxgnMoqABAceNLLnjuchdd9sSLK7",
  "key31": "i7dzMP3g6pwFMSB5ttWf12SNr5u91QkAR5i46q2gmYmGms44DXZcBkfwaNrXaWLu9PNKfNayTDZfpUZ7pqUXP22",
  "key32": "3sF1M3iM17Ka1i4jjdzGaN6Nys4D3EiAosZxfxYUJ71F6Dx3wJ7zVAVSJqXyg8GYrjEVfWPdg1xX4qPr5GAEvHvK",
  "key33": "3xfYH4TbqT9iwucmggL4tmbqVNEcNtuQu5TX8guiZN718yZ1cuFTehn9JbcSLCLn5VUg7uowmR7xhFBNRfHC6rmq",
  "key34": "cnTeaACGBAJqdiFjvLuxWziucRkNsDLMPubs9vi4vUPWZpnNZCTWqo8Wywar85UjxtvvNgEtv36zh1z3dAaB4rD",
  "key35": "MBEnLAmydWf3TtoxWYcpXv2kr8tTCGy6JeWyqxckCnv49hQTWdh1kjw3V13jiP4XUbsqp4eYByZdYL5NiGNhpoh"
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
