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
    "2L324x7YPzEeCD2QvtJ4Eg7EQ5wfB4Lm4xAvTXAQncJAVpcXtVD4mDtdiaEJpsEUXmDftdxLuv12EfpfNRyDzoiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "crGfHbWRwySVXPB3C1DAaZ8mCRbWL4St1t8SXV3krgTMFkGj6VgTU7dNNG1vWwDTcSyp5inRwGBnoh9GGZUXHpJ",
  "key1": "4V4kQoCS7DgPCww5747XGcfqxqYKG7WUVVWsG5ggZnRCoVdqzHUNH9kZgk39wz1TLNxjasCDH6v4fzvo7JBoGDhq",
  "key2": "3935yMmxSdxEn8iwZXJhvCYqNk33wNsnPV6v5pzpeAEn5Zg3LyTMxEWWmBtWYgGM9c7w9noaxB1ts3kDiMbNxzak",
  "key3": "571bnxYk9t485nhisvUg6rtiB3u3sKCHouKdwY4BaKha3PXWm2QFum4tsgmUSjYov9edVVx5hhF9NSYeXXoDkcn",
  "key4": "4jHf36f4rtqAu5gpkirmvQL4kkEVzumesZeuXHSRWUzBuzpLPpWCpr42tPVMU3ZgTqXiSBMdUHpnu1foBGECGxJ7",
  "key5": "3xeHtWzgYqjGFkD4mKNJxG1yfrXkS6k7mvBQLXQNq7QM5N2x3RZhePXXzWN2CkLNcL7F4PJyhvoknqiA4uJucjJc",
  "key6": "4v5PaaSU4AhuLR2SRpj7vus5nxtpdV39sqk59113CbQjPWU5WKDyLm2TnpkPK12udod1WQQaDEmtzWwFBM5AngjJ",
  "key7": "ZH1esC2eCJwR7nmmFLWPUY6BtvDufMLTBtA43YUrfvHsLEoyvJcZi7t4a9oQ8fQ4puZ67zoaR1E2JfhcUJPwfmX",
  "key8": "4Nv3WHgaofUAyxmMAbGAv54JsMuZ9uKRhc5DComnBX8t4BGjgP9me22QDVFiS6pmzgNRMYnpckpqMzrFb99cYRDG",
  "key9": "3maduVcjGYid19pN9swAKrLdJfLYixjVvpVkpZfFgUkaFnLvGimTaBC8j1jfpuUdhnFQJtyfsSDk7eEXGUYCAtkd",
  "key10": "5GL2DqmFu2ZVEU1Q5Csoz28Sz9GcDawJ8L9nFeehWgL6Bs2veSTgfGsEi1tLwBNVQ8V4xfyCPDTGeRTe6BPeSFhK",
  "key11": "4JPbCcE5PUb1b3GdCdbCSfcLYrgHzYmPfaNQWDCY6y8jcKqHrgt9hoZu7xxB4aLZXZYzxU7cQXWqvAzJG5bmcmhe",
  "key12": "33tUUCcmbFd4MK66fakpp9o8HV9iRsUFRytYqK16jW5o1r8on9VuTze2Y1EexTNLkTPT1UDaWAcupTzGgPhNVgDb",
  "key13": "5AQGrhBwFgutUHLvkvNrMqyXHAaJHUs4sAX7NZoC6PoaSJ7ANX9BGeEnCCpmV7epnj5V4yNJD3QEf1nkwiUJLdDd",
  "key14": "5BwTL8L8CX9NaugFJSaiuBs8yPG5EFHFDaTMBV1gCfJQ1FU4zc2YonnQWGStTZ9R7rDh1VmDHx1SSX63JMghmteL",
  "key15": "5HSJeZDxTZFNiKMazvvFihF5Y1po3ZseJYoAL2bycskcnVkXkXCBot4m3fXTTqeNzB3q8jVU6Rwqdy6DVn9R7Zuo",
  "key16": "5aciD4tjLoYhqRgGmp7DYAWWZMkYuJj2WKMHLBkwCwaokAG79sdQTsh7voVD5StuYso17t5Zap3j74s8SYAc9n1X",
  "key17": "3oxWjLFcVaAhAsBZBz8jTJgv9Xao248J5yFjwBquaoDTaLzjbZg3zUAaXmjsEZZj2Vma1sfXH9a5cHLCodEW8c5R",
  "key18": "5pDAA3ERNauJXGAGtyaV4JamAHcZv9dAXP65UUyzTBfRV5d4QwSV7a25oztjLFo4654nT8ibax6m4NXfm1pDkPK5",
  "key19": "3GWM4XrnQNYWFG4pW9pmXMAPjFETQ1US3SDVV9xXcCwtmTaBdGLKnVKTLdbjfLDVNLTJdFYzkaeErcnbtaJZbHCP",
  "key20": "5AJ8sPmdKjmhgHYtFL9rcdBNnLXB4pP6Gz5uzW3vS97kDnhxyKYe7dNacj9u6UQZn6UqsgAuxC5pg96ZZk6LmeQC",
  "key21": "24uQ5XoLEk3gRB6bHsiVyLkedzwTuDHGhFKULsvP6JyY7RF1Msb8FGUe1B2wzskSgW292qU2ceMhpZW6KjyLBq6B",
  "key22": "5V17qa5AP68YWya3KvtaXNFftCtzMg3jdKMTaFXWmaHW9gn9Pvf2dJ89kqPJ6L1RxNHs8bGDd1qmvUBzGSY6Fo5S",
  "key23": "5ACUgRLPwd1SttTwyqiNwD9CmVuCgZX6L5L2aZRrWqWF56SvHSe27KDi69QBVbA9VEDj8paRwxFpRwW4EaWrwqYD",
  "key24": "2ZBXeCkULJVWomidKJwLeywQC5oZGrmgnaEQ436La6P5wJwJ2KFXzdiidM18WDpL4TTmAPVhJQt7G2HrjijZi5JA",
  "key25": "2nQhh2o9Q9Uj3Mqrh815ayJk4LMSkwMiSSw6NYiiJwZthDA7L4uDU8D3VS22orvruAmj3HeygfxvducZHzvRx6Hf",
  "key26": "Fe13MLt8AmWz7RpnynGre49m4TQJUeAaYsUFocGwXFCfaipvNT74BvwbLDEw2bnqVdKty8b9tHqHpPf5gQ1dnqt",
  "key27": "DmiLXgAziDqT9oq1UbKteooNJUMACZeUCaPPp3zL8CH3yyPiAXx8XNPPNRfR9aaShrsDnGzCx8uYPXEvAxLTcSq",
  "key28": "487rJFRnahogPJCsQkdMeUsFDkh6dmrP5t5rCVcasv1hCkP1KuiAVgt9jNrgdsfKsLFY7RwnnSGtqt9KKoekRaJ8",
  "key29": "4X9bmZiVMX99DyBfqo18KJUz3mr3yCvAwv5DNtb61tM8cGcbu7iAYrg2ux1fLi3bLRmpRGvLBd2PUxnhiCUeAoqs",
  "key30": "5Pwsa6wp9whrJUfpYa5egjiMi5FJJntd1B8uorRaDgkLrDyJt6ojwfAxVpYvf5coGapzE7FBG1CMZGNoa9N23KxL",
  "key31": "3CmaJCQV1rzpQKhbNUhNEEuePmgRB3qbRRJMRNLmAeAsjjZPQH1A8f5ZcBkGF1urBEFn7VssLr1FyTEBYQTF3opq",
  "key32": "VYh5QYooX1ZMWcbLRHfC4Fh7w3rAV5NkUgJxCGtAAZ95EVwoY9XQ31VxTyPrB3jj1nhtvCaKSEs7yQHwJyFa3oi",
  "key33": "F2UUz4fvUEc4tGzYtzpmtceyKQhAtvHqrQpRgTXHdfehAUWPc5G4kf2VhCpfwpuyWgwzBN8igogQParVYL6yxQT",
  "key34": "3SQnZvseEeA9iA8mmAbyTEudw1degrbSjktxbBoLZ2x2vLrsS8dDwdscHBPbgZHTdCVtB9WWFMSetepRBeJw3PuF",
  "key35": "ZRspDwm3ebFXQGAMu6b6bs7Wsati7BPrYrPnuNgB1kQ7VKa7CDGepaKVCPLW27zVSEEtQichdbQePfNrpR7EKyq",
  "key36": "HNPyq7LfzzrSK8Xvn7PNEd4epwY5phrC9KsVySjpYcL5rG4y1XGUPLRx5eHDDdA1Eo4foBdkd5C4NNodoVUEPGk",
  "key37": "4V8aDihWfcfD9aRSyDdfVJu5BFBVFw1Z4j5yTVDc5PLFnvdn1EX3f6KX4urG6X9cMDZkP5VWy5MnViXvUwUY12u3",
  "key38": "2Tk3La8TkE6rHaAKxiaMVU2eewioaCG2ZK7PhrPJB7kiJ6AapRRwUoT4MQ318bo6qHY2HAN3zHGXDVFjoaRcT4CV",
  "key39": "5DL1LuVKvr5F6NkyUCNhpq9RRFkV1XFc1b6Ksit3Nvw3ndaQddDNbodQZLwQyVmirpcvtZkzjYM6g7vctNhqAEUg",
  "key40": "4cDqoDRAzM7ACVNLtY5FwmTQL5SXpEQgrAYDXTqxa4YKuuHBt4VEVDybd6v6NpnuCrdNzv7fRQb7scC2Q71MhLFp",
  "key41": "4nmME2WEMqi7xfuhfcBjCorYU75RepghrnG5i7Ahd3hDKpY25ZCrvewduQti26UWTRrVvUMfuv3TMadAbUkoY5oq",
  "key42": "48GJkFc85RRY5qEZCxDWH424ofpYVRFyNhivb8zsNBwaQHfdb8heP6LKLyJjfyNjLfRF84eY3939q2DjY3exRvhE",
  "key43": "5Zb33zJrFXU4C6NEyYyuTcpFrwSu5CetDuH7BsHh9Qi8YzPqub1wNXFGP7Qz3SWioLGt5XLBe75fYLCiCknhH3PR",
  "key44": "2bB5KBNw7varWqrGAFhFEGpuJD1Te8JHgkYtDdgccX3TUMFp2bDjZhqztYBUNgVZeHQj6EXbEFh9ew6sZRPemPLH",
  "key45": "4bBFxNxSBGAWM78QtmTwbU6KbuBqvkuzRdyGDTzMrXkmpqeWG3TzGNQ5FWe9aY7j6VcztY1YsP8sRfoDvvNfkpet",
  "key46": "4G6ajnCtEeAZvLVdX75qisLmEbstd6eGNDnnWFEt6S1UPD1sPn5zQN32seQ3ze2gfcix6g3yB4q4vRjjELoXdswf"
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
