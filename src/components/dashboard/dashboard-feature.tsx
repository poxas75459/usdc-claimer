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
    "dv3e9bZQ54GFqd1T8PpiSw9db6FFH7Cck6wTArGXwrf9rqMBye59cZ4TeLbd7WVmh13vwgL64WJk5xuqoWEuAHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eiVYUUU3BgxcQrwjvdGtEL2KqyjNFeBwGxqyxzJB3pt4hVArHEsiS62Pu3hnNMLwaVN9mzjQNU5eALwU7tWBWej",
  "key1": "56ipGjqLZig91tiLUdGQhQWaJMKUdpMmwFMcSfYyBDE4FubDQEZSbegHXJQKZjD3TReSbFWhcLownhRx2a2iWQ2h",
  "key2": "2vVUHjUHRdVuKpZLK95LcxZp8Uz1vy4PyQDZ2hJANrUzYFiqFjuFGLx3BqVWm1pVwrxqoFYdXKBvuJP2vSXifHUG",
  "key3": "VRVshiNv4NjzGezP89xJtnxqFG7tFWBj8Xih1xJe5mobGV9ZKVW4T8kkn1g7sQ3nHZet43ELZQsSgyxr5nq3s6z",
  "key4": "6537iPxDMSaDpRnhxFAzKUa3dzKFVoSQsQ3xVN9kHzSxAUy25pDJ3qz2MPh24n7pSmcjjM9FQWYBgyB73AoRdpwm",
  "key5": "2prrGcCLc8JE9P5WwiSoLugvckyhHPKuWkmjKbzpVRNa3DKdA77wV1jUkfQnsRJGLBoUSYdghb4a6Zk6kmpUfBR7",
  "key6": "5fkqb3Y8iBDmGXYABKbAZfqmkS9yLPsnithnZp7MHXRMzy8XAefaSewF1GjZNkbERZumEkTt8vFn3VgptKRCcsft",
  "key7": "4Evxi3UDWef3WUswEMdqFiXHDmkTun5GqYgtyGB9gBD64Jc9Uyq7MLEikfz3fh7cQd6vvsM23L1Efv4EbM7cmGfo",
  "key8": "2vTTPKmHMyb2RopSbWzF5uwRRafnEq8okUz5eCj6RHjMyZHCtvP11EQzEvYigUFiPhzpiSCZSm7qgHfdNtUP1woW",
  "key9": "2cFSinzZ9qide117iFnbm9LgCtKAbzNLqEQD723MLqQpkubtDUzmmBbFhHb844eRXouh7Gsc3GEDvze5PHEtTCcY",
  "key10": "2QwFXZhn5GeLWj4NUwZuG9iMsW94knmrFDfZSMaefe3X5uxNZQebwbCbFtEjr7hTmELQ2GZjwhEPktDZ8z6AGVwQ",
  "key11": "PVgEiC6Wajodjs3cJndejPsNgQjPnW4TjHyRKqps8Lx8jDAxxhyvpb4rkLVZ97VnhRpywJge76AApX4RmMoRzY3",
  "key12": "2DT4KS8BXk3D79h2B6EjehKYWKd9HtUNZJy5ziMtoL3fEAZ4iTkTAxxif8EdG74ZZy6tkfbZGWtY8pm1mofLzpyC",
  "key13": "3LLTot8dLajMNATw26fCq67xSQ8NUD1kadGtpvqjTei2SxNED9r7skghPrBntgA3QuJJE1jgfwfetQh9AqU7oEGg",
  "key14": "5B4Y2oQPwnMvsBcMTvXx8d6YJG9X2TfqVQ59YPH84XUL6Gu8dsjxeuM6iz3vyYTMGPnneQH76y6AF5fRcB6NSha5",
  "key15": "4cWvyS3GMhEtE4UqdfGauSJ1cUYT26wSM8fQZe3Cb7f6bSb7x21PW7u34LeS4b1MvjFWb68Fz5mCeHBzu6Hrhshk",
  "key16": "2VrEQ3YAen8Gm2twVoecxEow4eQpYwL4NHmaGWGg5zMFdeM4DA3TGYJPN4mX9RjyutkXvqqEUF7A64Jmy9ZZZrsK",
  "key17": "63fvBHzaBxJyRpxM5Ywjivp8gjvdtGSsUQCJLbEjgJ6MB2yciBvTYZLLN9rAS5wYKG4VMRgEh4CMmUukwgbd17NQ",
  "key18": "2ctedCLFb9MUbLiujs6qBSxVniuPnJFkrj4UNkPAejcvS6atJuh6KazH5skAAh9jbfB9vSPvokWkJ7DwR5n9HUgt",
  "key19": "3R8sAX4n1xrSBcvxBwAdNDtTUTjE1gnwMpcFAgEyrAoibMPg5ZjYhQjb9Ri9cFNszWPgkhQQgVFRi48UVkPVAWhR",
  "key20": "2rS83jSg8A1ojm7QKF5hbxsbXJVkwcYXKUXvoHi6RYWAdtAzs2v9E7Cab5nQVAvDE85SmvCDMfzaPQqKaef7ZJ9n",
  "key21": "2fxSHgdF3jwS4cAbREXyEfv8vubG3JhgZs9uqhwkt5V9yEctNt8UkWTUGLyKBe38ocsuEKDE5WPYaPwibLv8xSF9",
  "key22": "Tte3cLb2ULGWFn7pFpC8f2EXFkyAcBpPoyYar5ehgpUmbqRM11RhhibwoXNTTy1KeY9DTuGh83TBMYpR3UAUCZe",
  "key23": "DM4DghrUqymx3BEutRB39wZEdZRDhJze1PTE5XCg1UFTPY41yCmLzDkUhR8BycWn3aXzRSFeyoXuJ14Z3jBnnoh",
  "key24": "5gFujn5JAX3FKKvMYpZzwu7aCjeSzorBRRejso4h6jqkbEW2UEpeCheG3LuEJtHTaPAjxpaC978xUSQ9bMe5bam8",
  "key25": "4hD8DK27NdfaQ6BJqWyM5ZjKU4rRJnyqRHqfojPGNRzdCuNLMnVppiy2qYSDWju8Ge4JNWwT7zaxGL9hGncU7XWm",
  "key26": "AXCWRnbycKXcfiCBCUzSan5iGHmfMEDBSSjhytugJpMAHVdnVBa4DmZ4L8MLhCLAdKyzR61xDxioUvH867qJvbH",
  "key27": "9p4sF5Cwnqd2ib79YoS5xxXKygoUetoZDnx61ebdSLaGVbH2uusWYD2U3T8on6ixaQ7cxWsHa3c9mM5YLuGVpaH",
  "key28": "XEmEMNUg2Gcju86LJpiAwAkjtx85dTvUBSn2p1wYvfVeyD1erd1ZTtK2kYv1LfgTyd4gXizAbV6iRyb4oVZKEFc",
  "key29": "5pwUaUgNvxuuT6ycsbxvhYpnWrqh97s4xSHh9UX5tznRjcDqTmbnxsSoBAwBpUjzXimvtxEJtnfLcHvur4Ww4xmX",
  "key30": "4ivy5TUSaWJViQ8uWB3bu7VhTfCWk87KJdS3Nc6pJqoMR6G9bkYeY2Tu3tMd1LffBWH85JhXmqKbnKCmoCnYiMnf",
  "key31": "Fo3tBabiJsuHtgcaNxjZgX9whXeqiRCytMHPJeZSJ8zq9fuBFAFfAZjue5AS8vhhWbGgPvKFziyLvq54CubtJk4",
  "key32": "mdaD82F5pfkXgBCpYDavXaZS7XWUTBUTo4gTGNfJqd1212YR4Pzm2c6vz6aHXYjct6BvC2hLnhoGHNBeFpDpGuT",
  "key33": "R4wxjF2tiYhPY43zd3wfdq2zT46pJvDJXVuG6kFbMmSjySktE1k5oCGff8pcZNHfd6JdBmHAW5iwTQLSgZTaNZw",
  "key34": "4AQKkCMLoUcjdFthjJcjcPphBV9JB3yiNrn7ESwbzhFQV5kh79YxyHzhJq66pnMyLk2MsaoUZQn28b2d53eFmzpK",
  "key35": "4So1V5Cy5ss74bPSiskneAJ3b12jwkC2jjj2CvkHtM69zk2FUuRnwwnytETU8ffHBFnf5VofPyAuCKm1B4X8vZoH",
  "key36": "44x4r6oZpqLBHBHJaQHMPDVfnifAVexd2ty7sGorArbtjYKqePEosJom4VKvbkF1TMwbtruHrtTfVtzwrMy9smyR",
  "key37": "zwV3reusta73SWvJpSKhAtVZDjmNHb9iZ47EkEX4ReHUv7oUdzRnqAZL4bvpF5N47jxjK2Hsz2i9iaodgqhad3s",
  "key38": "4Q9XgCgMUQyjstJSQcmPK2R16bQ3xrbSeVb8N6bdxq6d9BwVyyogDnBDaMMp3vGN3H2oJb3Lt2Q22SmMditi9pDJ",
  "key39": "4KMfdzJGb4AxEXJzinsjZdyCs1KnpjF7qgeK7n8BPziCBXPPgSiML6qirB1LMU16UMztNGhiwUWxEvH9hr6Zmhw4",
  "key40": "2mCHUnvRxrh1wRP7J8R2FayjqmzhQSZx9it7BD9Z2Nt5a8mGTPrmihzKNd4aq18KYYrVGbxfa2KpLjaYuFire6uU",
  "key41": "Zt2WzwQU4thsLrdfVVweSBEHpp9EYyd155tmSt3ntbm4vaZdLnBSXQyNvWucszLghzGsd9PXMv65CXNYrk3M9z4",
  "key42": "5pTeypBJhxiCy65TQpX8nDc2DNgSBKBqp1vaDw2o59CEyUct5USZR63FeUnYtdvXxTH3ZpcgHQ7imynDvF8BZVtw",
  "key43": "5tcHWEVRGVP6GmqpNR5hbGKo63gM1pHp49knX9YGfZvL6ZUCtsz4JhuU6fJUadfv8PgDdSfEsLgNFQ4xN8MUnrqG",
  "key44": "4gAwnBTvS4em5BYaSNZFonka6eAJN32NbWSjC5jaknVaLUuaGi4ntKGhNir9Jho1cexgTPRrMDfTjfCiaTyDV2hq",
  "key45": "kQBsesq68arzLiz4x2joVbhAax1JVvhk5VoCGhRDxhyKiGsWged2chbJUtTLffaSGn2DMvRxaUZhDoFC1buwWtW",
  "key46": "5YfSdhoX5C7nDiHevKopW5d98ipCnpNQbe3ko1LoQ7sPNco65zWgUtCwD6Cgu4GkKqrYA9Eznocb76BzAXDZq2De",
  "key47": "33B6sNZq6tF76pas99S2xUCGZCzeaNPutaSr8HAH2tLKfEuFsMNcp8P1ToYiXTHhiyabyrnKe53Vz4fLJM5Ufptw",
  "key48": "4DJeuPKFC5LuHjVjcbwgTHyokEELtSuE8VvwXpnQsgT5VFfVDKBUrk6aTs2HTW5pWapYEQjovyZkH9qMSzehxsLj"
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
