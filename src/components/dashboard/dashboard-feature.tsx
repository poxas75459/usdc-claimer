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
    "52k7hfsToSehAroMDfgRpn46RHYiTUFSvRhZ122xyQeHPwu9bFeWMJSfsYiPWiVVVDEV55imUj9tqWHQf3Th8SuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rjsesPg5LHAscheRVsrujdrydd7Vxo1ZAGt3QVfSioZFzFiQL6LBRusMYmSAfWqsiyRjvMRmjoB6xgTjPgxchW",
  "key1": "3tnhw1DD1XfXsgHfZ6rVRh6YF1U6Yub8777Y8Tc6LxCkC6YctFg8MSUMdTrUfE6GWeKX7HBcRxkhMgG7eRXWgd7g",
  "key2": "5FzAmKy9yVghrydr1QuhuzdCxPCYiDpmc8665aXNDiJU9z1Kuyg3NEVZCEWurfMt6nN5VLcy9XT49Ab1vPWPapx9",
  "key3": "4LgjKcNLnYKWAeJygQ2FsMY9pNH4XyMumrRZN7iSiKRHho5mbiCjV1F6oifJb17sJH6zg9R7N5TgwZqbpmE7D9cL",
  "key4": "2foaGMUrRYUTM2voPzqq8B2g3U6hTPk6imNxyuWUWn8zPExNaZCwXFK3Zh8Soecvghjk2QdQuVQcR4LeNmK7DVSQ",
  "key5": "LeCftMARB5WxnGg2GiiXEVpSrR9TLfwXvtkuq7Ja2iErbc23Pycf6VmUesduJEu5RvQpuhcJJDeQY5CsTqvAHdp",
  "key6": "5TLCFnJEypwGRSYL9mW6SiQuXd7UnVgCtcb22oX2KLVt5h1V8me37TEBunyEJvCiKRpTkhPqjdTwPLaSxa15UTcc",
  "key7": "5vyEYUef8BcgrJqe8RDYxH2Myrc2sLZmQMpNfFSkdRtzymyfgrBhrr3wiaCgXCuPUGaX63uUK3rNb34jc4dDeTET",
  "key8": "4P3Dvekw3HWYKypQKxeMmRLWKHeXHe8gvp5qUg65hEdrgSq5jK7ea3YBYbLUNURwt2xx8gJf2ausWcuCKAtNgd8m",
  "key9": "ni5dBnsV6AbUsjHqgxDAZn1anWxaUvya63ZndKdPg6UrKugaeAfnDxbkmLmfWVGKFhxkNbXDwdCZB3S1xAxZ34B",
  "key10": "2f6GaNWzdwrFLun9cXkJBGm6Jshm45rrbtS7NRbEnqV4QG334xsntyKMBFC64nxCUVf8t2UFevUJQFuUnFAnxKCA",
  "key11": "47hwDsdagFqCxPzJYMrYVhcdUo7MQWm4f2az4YeiUesEFyrP3hE6UVyp89ko66hnk8pDXgnQFDZrjcrV8fcfijx",
  "key12": "5PMaaedtXMWPdoTwsX9ZqmAinRdQwdN4kKHhnWCYB8sthEjYMorjg178uzqrSHvheBoPuNKa35tQhbiwNtAthzso",
  "key13": "5vxGEnSNWNUt7cikNo6W8udgTvq3zUogFry7qxHeDq5KBGeEbnH1eCcmHa8bnkVrU1t5b29ZC3TsZVQrdfJcvKHe",
  "key14": "3Uqn2hJoV8xd1k4Us6JBVnSK33JzcPazifhhzTtKDd77iUV8xdVuSTCUBV58fusQAXVphR1LgfjPJFDv8GbniC3b",
  "key15": "5CabTK4ceppfGwqenMS2F1qjdNnorKPk16y5hGxQpAxgLtS6TMGCHbc599GdtRgocknVABQ55936kBUytPotv3Pf",
  "key16": "5arJZNxj9jgeTSMy2AxwWPbwDXCG96pdKdmNuqQCMpTcGGiFh1FLAe4ggsQUvXL6H1VHBt2wMj5g9tfVFJcLwQnQ",
  "key17": "3WoQ35cuqX1meMAStdhEogEz7jMtKxCtxGpFN6HqVTNHcH46bToASroEU56YVKuhWeAnbQwQnPVS8JuWfBpcgJRS",
  "key18": "5S5YmQtz15QtmwHaxBh9FjpYaiMZ622W7JxygzfepMH29AG7aDPozm6VFQm16rtBszA933oTgtHB6R78zbqcns96",
  "key19": "2Kyv2w5SgHVHgyyyus6rpKjBWx9qZ9opTjG7aYsN9PAQ2Ln4nXLuU5zpx9YToZC8ecCBKJu8LBT1M4hbkGhWGDHp",
  "key20": "4aAyAEtZk5JkLtys8EW2VVkFyNYrtercH6TeRA2brY5dt75UNayi7aaRdZ9FqRdUVkKJAhw3DMVwWG3gxsd6n5sg",
  "key21": "3etPGes5tRWC11pAPBFjLUz9zoguSHUsEYzDUHH22boe9rKG32rMHhzLJ775ATyxARj7hfDxKkTN3xWKuhig3HTv",
  "key22": "5W3avGFhBm198zBGxShZQWvdD87L5fgGjeuZqDBUizJ6kh7XDCYqsSNTqQe7TSsfwPMT1o1M42EaPDvEGz1PqKmz",
  "key23": "2wtfSdiTtqR6JdhBD4cut41Z8rdd3mza8q9G7Y5Q5U3qSgB1rw72fHr6a5vnhAa4Zq1E28TLTi6Kk59avrPsD64y",
  "key24": "5WcEjJGTzStuL3s6w6Mmc7t8JT7pqYruq8irzHSDmTmhGxN11XYmsmBttjvo8nEN5y1Qnvs668eGxtfsQm4zw9xr",
  "key25": "8BJvxL1BX68X2SupZwqZWKDL6sHqnS16jBi2wd5iM4R8Np342Fc5VCxB6Zu2REA35FvLUby3oFxkgQFESdeiR7Z",
  "key26": "2Zc4snBMCCvTqupqK5uMRe4McK6kXd78dfQxsK1zhjc5DwvsPwrR7iuD6bsKSY58c69uQWzvo5dC3bFAyxUrHkxe",
  "key27": "3udxBAhLq6uwPHsSpEJXuYYDAjgGAtLiNTshAAdVfcQcj8ri8Kp1j4qFsHEN68o4mRVN7HtbVDXtt3BLm5F4mAmc",
  "key28": "3VBoqfFYqpuES3So2iNaKW5rr8jmpx8Rpmpdo7Wv4f8Kj2kVZrVaAR4QaNzc183er2rNyZDzHGfosrUxZS2oo8hd",
  "key29": "4zMVcfkBo6zH7dBguhKd34UErSosFbJPPtBGSw61XtPXbFgFwMUkYeLJh2PNH1QF38gPa8mLS9eTRfXpgP5yDrKJ",
  "key30": "4PzMAJDPjy95cd1LFeQ8RXaSFEfHDgznsiGeBDaR8dE6BngMH3S8dUgiDjeKzyQ3fecuTkKuWThDupoZjYrDZh77",
  "key31": "4SjpcBrSUocGcRitK6UkP13n8D1NhXiEUWrxX9DDXVzV2DJUBHupunfrL4Q6NpJus7mYyGTdeTsfjkxwWFfhiqSt",
  "key32": "57cirNksSsNF4tmyDoQqY1LHG6j167Ny9RpsaV7qhafN18KnpEyZB3vvsWazCQ3qG5WjrB4VU9nMRTaujVGzBVAc",
  "key33": "gKZno5WkCbxyQnEJBfw2SyDe1RHZPgpYCrhZmKNKJdzv7jQMzN7F7TXeeoKsHkjZUFvyHiHNx55UahFN6TbbeL9",
  "key34": "42kP21QyTcSXWTKNHT6dScWy1ST3zw56fHv4v8sgPSBmxVvKhmdY2Aw4vh2zd46NTnBEE4x4p95mEHMviEWaor9X",
  "key35": "uKXtyz2Aj3wJjYfEQ6GAMFJ24rycaW4g2XhBC5Xykiiu2oPkPqrVYvibafX8oNBLK6cpjGcgVjEBXuGVCB1gMgN",
  "key36": "65io6RX2PpvmKUEpCE26QRY9JrStvF7p5E7JDjbZDETCsouUSSyUZB8idWQZ6uhJNH3e3k5PsLJa7ZrL8eNvZ2GP",
  "key37": "nWB7YTY6zSz9467ZvcuC8GEmgmtGQg7csfByyUm2UCTmz8FjnnuPgLj7YJiefbGDbqtDbC1JbpTLLbDSquj4DBo",
  "key38": "5JdhiHKMA8XmNPgzswLK1D1bc1vxppMcS6LZVNW2MzoXG7oaM8aKvPmiZTj43FAJ4w9ScvpEXbmRS1rq2L54RNWt",
  "key39": "2miCbSuKsfqoQz4ULV79YmPLsTrxwduueNRtfDQPLo3w1s35f4e8DtGzvjeuSskKJpekffQdU1kNcynLfNmxiDXw",
  "key40": "2MX6vTmMn6NtxSauvBvmGbgRWqoN4A5ic2axmfxZeuPcmjjSevczXQUxrrfYJjsznBsUn3Dmt4wcw7e2eSuVvqsA",
  "key41": "43yPtsVMBNBK9D8kpWr5ooppYpo9VrbW8rBT7vUN9JWny3wuSyR4BiqpS6HoKpWBtdmqp6hwUshJ9qyMKDGcvuUN",
  "key42": "3CfpvBQdsSj9tqh5k3zkmqToGFSpBt6PRhEEBmY6JXcFYDxfd8k2D57SH6xAiwg5Dfmhb9khRNTuU6WdYittfRMT",
  "key43": "21nKkKDtfBADDjAFX7pRM6iUpK6gusLfJNocHpEG8VcAZ9zYxKBWEgtmrfNumkPQGi3hLrikuZBm4fZF6fe3eD9X",
  "key44": "121o9vpiYpCDZ8hEYXJJqpMTJfjZVN8fqYtmMfQC4PrWG9e18JXMPYeMykZra4JRz7vcH3VbKErRyctdKrdYPAU5",
  "key45": "3f9FCDi55DXTvaAVkQ3KJJogDjTjCR1esSpXLkVCfQ11t4dWUYssvHRkV7w6m56wMKVfppDpiuGku7CPD8FWy7v6",
  "key46": "dM7iQzWiEWcq9bqZ7dbPJtSNwFTMQaPToy8voCzH7nWok6sECejkqiQUj3NJTjq1bFZZQvtGaTej3xbJU3qg4up"
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
