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
    "3HAzRZ4hNcZR1SY5dvrwcXF7PBKmy3KtauJSDNFSdVqMicgSKvKo2EjxWjh4LF3JbtMXmB2oouUAvj9MsJLmyfYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q8FQmkwLMwfFVXLh5N8uZ8ZAfDJqyFKNdafiqM61W7Bk3k6snW3K4CQRkvX5Da4RS2KnhocvPnChVZMKUAghn3k",
  "key1": "5rm5kjx42aC3Acoy5kvVSWbYzwHWJjL3PWbWJ7xo4Sk6aZviMgR93BpprjKbNjUG3N17F98pVqogk9QcHQP9SNzt",
  "key2": "5KVzTcvfdybpeZxtgSCmECA3fqdq5ASJroJ4Le4eqHHmKv9rzmMTsAJKuTHW5H2ReCE3VPX3ew38NQqCdHnmNPYT",
  "key3": "nmujoKBwfRyyFJ7LrU8Ar1mTyxDiuW4vNZKQ1F75tRC7boQX4R4vcpEvs5qjFYStCb9bq58sSjyL5vNqggFuvmp",
  "key4": "5HR1v44hHnA7UqHLpwF4HbMTSHX3k6rSFDNeXef9NQeFn9WsY1MKoi3qmczhYVL56WwjTBzdg9x2miob1SsgC4av",
  "key5": "3zzsWcQBF9vnv5QB1zTtaoR8koAMhGhP6QF84AZi6zyC8VRKo7ivTFT29fwNS2G9yQn23nomkJrs9KKfiuqiPUa5",
  "key6": "31Qt5g7RamtLRJ3ka4MtwYFTCrc1oYbwyVgkB9SkzRS6MrKuxU4LYehC1Ffuf9MXeEzWiGcSNAPjJaeazHG4AedD",
  "key7": "5op5RMECrepXqFamDe9YfBZwVMFJe5i3DosJtXV5GGF4roFXVdd5SBGF8Tub2DnfRS8MXyLzWYPHkHpoREBB3gRd",
  "key8": "21EQzuWD2noEqUX2NPNojuff3MiAWUxARTkfMjzHRTHcKAzJTLLGU3c8Xc5dK9NVJHNXan4rxcsmYREKCDomsPBt",
  "key9": "2PwtCy25UzLjVTUd31KYqonLzoC1X5gvA7nTaXppkTARQv7rfiymoTUfkgioTJ4bakhnNRqbnsNVnymv8EmfYvkn",
  "key10": "5KV7pSNsy6m1kfZjnydr1ApQkyPRrdADgMfCevR3jwdKAAaq3oihyQUrfYPTTRR7NQNtuvPk8rbnkEwBv6DYx2fT",
  "key11": "54YxvmXUzk63sVRNTnLEeAiWheXGSGfpWMMGXVw3FqQWHX67994VTmszTGqxfEcJbouRAGwpFJ1JDHJqBy1RmPdD",
  "key12": "2BoopafnmGNsEecEC1mXmiHRzqZ49cdYmyTdgc7me2gh38ztpCGYZoH2iCtfX1xnvryGBooMNWstprEEpPL93jzM",
  "key13": "2er42cHHVAcjyoBHM4TQ51CFwU33YJhbprMHcT2XjyScuCpZtEBDnZRa8yQJ2e2sHmpyC7b47gHjyHx1tJfkY3oD",
  "key14": "3qoE92JYpCx3iCcMCKZf7LCS1B7hz8qGqyiSDMN126nrU1Sf2cUBQ1kQG52Mwbb47CZGsCoa4QdwViqDuYysJjcX",
  "key15": "4uBDVg1nnex7cboinXnapTq6KFrVSofdfZSQ7f2V5kjCo387h5VKNgHPd1SeraR5JHcDvaxdstTMGZTVJCtf9xec",
  "key16": "5qhfmFFChtVbSvGJz7TpbvcVYoMLqxBDBrnHz5UjNzyYXTrMzDx65JKX6H2yC1ffeBwn89KvfygonLV8zUjhX9RS",
  "key17": "315j13R7QqdooeQ6QcNDzojzGrY3pSAdhsRH4Gtwr3PtxQ4LVtbkYq2hDQZ3YpkjomzMERTGzbk5m8zr1xGHec3E",
  "key18": "yYKC5rqL35uHvVY6M3dvpnwrCiQgJCWrK3X7uMng2VLSXHWXiV44BzZy3QhqTSWQJBi5v4hzwhEGXXsuSdTs2cN",
  "key19": "3xv78m6TzafaU4wWXWTy8nbVKdpTgRBdJGDV8rqfvrGuh62DJ7JQeTxTBGteATicT8cSDA3DgSLtrnUAq7nXQx2r",
  "key20": "qKnQPNqScd7wK9tJDqntaEFjGfiapjsEePqkHmUgkF3yd3mpqdnP1stcdQuV5s1HmjpCKe8kTzhdPCcQJXkCyya",
  "key21": "5C7w57RAf1D221cneuDe5YDFuvJUNbk9DesKxfVJLzQjB5WrpkPHHUFHTw786LzM11dqj6yFTqB56fGqtGSTF9nn",
  "key22": "32z81HhgkZQRH2gwZ612kz2MB1WRvqBvTzMVZw71imoEp1tpzK4VED4Q4WqPcVhoycm9Ly4PnkLNeTFk3wuNDBD1",
  "key23": "4m9xxe4xKRjmFD33LqRxnf4iZyo8F7FncjkZufKNiFNvfRafDBMrY7osSqSK43CRhSgTnfQ9ucRhHATW7kaPFgSc",
  "key24": "nrmu6jpaAjg3eF7Zpfh5bwfVpygMhjLYVQBieRwdZFGqx1y2f3AfsBajYaBjHDPByZM11E4hXgczSAS5x5XneKB",
  "key25": "5HHZyY9i59rBBXrmd5kyrHHDRx1UrPTiTRSwgVSvXfGLjuQsLJ9KhsZfssRtWAvSxzvjjNR28RCKjfhFTzXDAycH",
  "key26": "c8A3FiYJicNZyUUisQPF4ewHGjYQhMh1gu3auxe996hiZtNVqdvN3A6pG4b1tKZBvwuG78QHTXTW4wxR2CTeCxg",
  "key27": "4PDjTYqnbqnSFy862765Py9T48Nru96NWmNZDbTtoJcQap4ne4ZPFPRyF2GRKhTApHRMTSLua7h6vW7ASZsGAyF7",
  "key28": "5BoEKGpd2o8RNyMs7UMCKwrArGd1VhQQox3bfb2gyk9cN5yLx8oZpEtET43CBz1xMujrimDbiPUFwhWwh96rvVNY",
  "key29": "2Y86rFu7HYPKQZQ1TQg69pFxnRCoZPebfLg1FxqRiMa4oeHzVaxAqxD5iMt7Ab1sdJvk6pQCvPZfq6B36diLdGMu",
  "key30": "4D9nv38BUVLtLV47GypEBnm73PUdjYkCGRzV95ceBCa2nFoQKvvXEZ8Qdj4jDEvYeRbrCZQcTkmZidJ7JxLThev4",
  "key31": "43EWHKXu3FuacyzZaGh7jVGkf9McuCgJFfV57VSW5cZbmhamiUhJApmLyttdM5gRgtpirMmN82igxE2GLcabymQ4",
  "key32": "2vDsYxUasVdovV7HteGwjceBMGVu6RzxbTci1ZcJJ2J9oJq1bDLmMcaXMZDEF8VJtqhzSZfiVmgBMxrgnWwEHMuT",
  "key33": "3tLsBb6DTwjpjhgsXJjFpSAJWbLuZ9PDDUfMHgUVk2x99JAtUbxikNHTbn686o5AjSqtS4FdzUfrCfUmgqmtbix6",
  "key34": "58azmWq3W3ciDXbDPnoMTKKEQz7bYqTw2wxgvoGk6T7pvSBBLynt664DTW8WgnsryR4qqE1MdhGZBjTFKhAuCxF2",
  "key35": "2iXhv1CGmSvHyMNNc6CHrYKhxCAbZozSAVuwaRCVtEkTLc1phu1qH8HV5HymqMmEDhotzJmR4bHet5HMSMvBTi2e",
  "key36": "22TRD4NqYNRdxe74oUBHgcXkQZPhSMeERMot7BKiDRrUk5YmH7RXXDmNWsrx4PCZmVQPbMuZnA9j6haPHaTRSTLD",
  "key37": "5ahwq425e5JbD1fzvDCd94wHxT5DaJtKrrAvf7JTdsC1hQhRstznhJiFruRp7QqpxszMEU8MSpuHN3jzW5wTn5D4",
  "key38": "5bketrZhpHtiuYb1NyirQzTqP2PPjwxKw44vicJ7buGTTqbzWygctNMiBQpcGSbg8yV8xNMC4kXVfDcR1atAZEua",
  "key39": "5EU8b5EaQqY8QjickEQVjxt5K2625MNz6fAjkE8Fw3pxRSiAGKKARuagc3yvrnm8yWMun86tpuEMStZqPJsZnpPp",
  "key40": "48K8D9QPfFcJt43fH3fQE5sJKJXyY4tKG4kjJQjepDzJj5ndCSSzEcLCiLAvEnsbjRoQXPgkdHagpGppUZg4KMor",
  "key41": "2RjTA6EFw1QVM4LbUGjVFvZatxLnQqt1jiHfqp2nSz9R33o61CKvRDbZGuZ5jnvaC7KR7JrQcGKRa2vJh9iL3AxR",
  "key42": "33Gz2Ye3ccAq4WGK1joLNM9td3CuLw22CKTweRxxrA5hnR9yaia7nvopEFZCbUPAguZ4LaYP2FfzLqo78bEoxYDi"
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
