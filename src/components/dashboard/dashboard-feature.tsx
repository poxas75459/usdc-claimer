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
    "33ZdPiFZpiLwxkWHAbUU2Q7wpG6yoGbsUdjAFLPgftREnYtuwEBpFkZiyLyyM9Q7bXc7wDjqKENmMU2L2RBJQF3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnS9kFrVHyDkrwr3v1kCLGvkh4gG3pohfrPHWcKdbujSZZ1Woxkk5xh6462Rdr1TLvFCxTS7jk2c5tgpNhhnzfA",
  "key1": "GGiBpHayJsxHerrDmcnUSLN8HUCMTUWsfjRxueTccRaZp6W86Zqae2hRwgW6xZVxkCKqysjHuq8qZdNFyT1tHkP",
  "key2": "2i3afVSfofnD8rJwGxMhJwnDzeT2YHMT6dnhhrzyrssT67qYW8KjcJMa3Ko3imvDuRGvrbbQrN7EXEfBeSMyLSkz",
  "key3": "3AT1DGLs6yyQXyNPAEP1CqGPWyRa3UdsA8nvEoaCCEUQFL1qkEMSYTW3bsM4Yw4jiJ1xaxgGairx6qvJF6PRZRW1",
  "key4": "4FaWkKJj7fWNLNdqgzXFTi3cTnW6S2MdgSrDoMLnawHjdnFgnk4ZbBBKLuBGvMwwgoQieLNP7Q7tewumTcUdJ5XK",
  "key5": "35mHT4n7RjqbqG4c7Z7BAHEgB8gGEJuT7ZfHXzWHYznE4k4HfvZUJbx9HMvCbBvajnnh7MxV7cBvY662Kqo7WoNL",
  "key6": "qudFULsHMsnCxXFfa2pym949hS86nVdwBCv8KB8P1dPoZnfc4NmAmQ7amG5HMcCrt4kDasXyYB6wHD3BziU81um",
  "key7": "3Xw8157cjsnTKe3nuY82eYojC3Q9QcRBpGJNGn4EmRYVjAtkK5AZRY2DV1TcxmxYccTHQ8uDiXSWo9egHxjc3BT1",
  "key8": "2CBQBSXCWATAeJoZLBS5kW9zvirfDuLLom4fzE3q7xrpoFdvFcQAE3236UL4hNWn2T51sazxRWmWLP6dLeSs5PKG",
  "key9": "5hqHqu6jdBB8SpM8eSHEA5fGNRwGadrqbDDxRe2DdZs3MfoZvTuNdcT432o8hzh9XVrtuwfGUPnYyGNw7eRJ4ZLL",
  "key10": "3mc18tLQ8UamsoMfxPc9isRyZYVXX3DopYNcNRc69o92seE3Rb5oBYSTc2AsFgUxMeoaPi1WYdiBz9xrVS8aEbmF",
  "key11": "3M6BBFp451DYqhbyjkA9q7GLv29G9o38hpgbj5ZXfRnBVz3ZAbCLzNrSxwBx4pfXfZkoeXAKAnmvse9V1HDYKfSt",
  "key12": "2X1ehJzdLkLQmVqnh1BswbLqEca7CVbaKwVU7xnXVe8qnFCycndwHJruJoJ5HfEVAn5itN8ZhTEnhWmmvS2Yo7oy",
  "key13": "4quekJeUQeddUqQsFsCVyMoCbwBQZW1P7tFW4kRs9ao9Gg1dyXPHMLmgm5uKxgJYycowQaukaNdXhSLANzh3rGuN",
  "key14": "3nLNjvnQvaziM7MWV58AjR7nwbGyv7nWjLhD9WYCi85ACHyqZgJtKiMahDTdLvRaYvC8LM7VsEYZGESCGVsRP5Uz",
  "key15": "2mXmQ7oDWCAi6gNo8oCHsjuByazQ3oY6bgyU7diuQNmV9ixNe2fpXCEqqyNoXcUzv1J6X67WPbiVBaV5xdPKCtHi",
  "key16": "5DG8V3dBnWYVGA65mfHebis5e42HKhsrYgoJD2CXhPtCrj9s8TLz42ovZZ1erJ4eMsPpu1x3tyw99MpLHhyx7CRH",
  "key17": "4E5MgF1YUtF1gQ3rZVbgvXeNXGJ7ZwBWWmPND39EJt5dZk1NN7qa1m2n2pwi2E4kh2m7R41Jzwmi8bSEkFGpBnL6",
  "key18": "33nF32imUCUARpX2jMfV7CNxUciDYzUTKM2brN677PVdK17W8LC9y9ao4m2fNNiJyQMvoeUTSeU2mMRyHBa4JMUo",
  "key19": "5CSen16R2NGedUc1fSpfLG8XhP7sjUa96g4FKthdDN6QkmAHVfNdM7zGU225i1HGJYzjwi6dgTEmTgWxPy2J7eiZ",
  "key20": "29c3B8hmGkxUN17EVPaqeevQVpWDi9D6ve5ATYynJYq1GLvvZxgUHQqjzafR1LN5oM7skZPR9xJc4tfDpJoD4MKP",
  "key21": "2baiTofjxYo2yVFrQf1xZJLwNgoqTXB4gURYQtXGEgJUcPDBVkZSZGpTHTtJWQu37owm5aHJnKury158FQuzmJyN",
  "key22": "4zT18fGoF1EnKX41D9DY3BTCnWPJfhorXxdct7UCnZACzBJczRvSoynonnrW8RysLALdW5DrStJFtwXpDSYVpQhq",
  "key23": "4nyDH2qeRKaNNJmghLLWPkpirDa4TCFYerKqtkuyMNU9fKGuQAAkU1Ahv3pX9fwnrNiHFEaG2yQrgqCUtVqDYY4A",
  "key24": "4dVTNr5Lncd3FXMgsAEPuvDfCBqoxmDzJ2MN5jZKLh5JLT2gVWuWZic5625yMAuTeZWQLLaFUMKmToqyaxipPv9T",
  "key25": "2ib4Ty16xJm3Z8NZKMa91hABXjgbGHC1PiwVX72fHqx9ka9okEzBvznEuPRZvVy1LhwpGjxiAPtFZFeahYxVipUf",
  "key26": "2hsXufscyBzjyKm7ps2TDLAtJFoe932ynTRJjbq99qR1Nz9PBd6zzEatW1i3tKrDhuW5quSH9pkSZXRo9TStavLp",
  "key27": "4jHeLG3Zorb8yVWwspacGbiQHmYWjY1vmzz3YbsX6psh95omR5a3tfGY4BVXWYEMPCbrrGttx375QNBV73TZU5hA",
  "key28": "535YpQ9rcRLfs9fBDVmhQ7gTcUAZhiUG3XZZvzQZpbu2d13s7pFvKPA9iSYYhCXPe8huVN8k953YLsMdbksa5Qnn",
  "key29": "29cxr3sH6iEMJUdbCHdHiPvDsaAfpuP6SadaVRRpXbuqdAqVe13FNcM5hoiLZJHq43y26uE4syYJhiXWiXhnyJki",
  "key30": "NScLrQucmj343yw8d9HLZyDg6h6ovwWyXbQJfDzr3xDYuzqDkwH1Pw34Xyg8g6YPTut5wJqzb8u12z3poGHYE4h",
  "key31": "2TcoJvcAoUf8fXcw98bm8DvC9216pkiWk4Ca4UKHHufXG4mk3HdgTsQRK3xGj2RgR1JzQ8fEivv4i4YeH9TZ2ate",
  "key32": "3hvcgquMgNVx5Bg7H38QhVXjgyQYH5Bj1PEQH6CuU4cWQLZycYdDf6DAmPwJg5GDNmpb4BgN9zfVNxdp4RpNLSqe",
  "key33": "FuDtJP9aS8sneRARyGYe157gjStrfYY4AnGBuVHC6pEaSB7ugeg65RtwMtEMq2LbvHQhpDBVbzhXmWL6g3rd5Tw",
  "key34": "46hUX7Nq1HuzVKn9vgKKT5F5MYmq527hSzoHK1KCquS7gskH7WJPJAANAExFMWQwML2E17FxJLwPeZcMxjbfXt6a",
  "key35": "4MF2UCQTbzgpd4DAN8X1sTM1GjQnXSsMSZL9EArZTWU4Bct1SbA3V1paDHXi5MhjyFugKVxbdeEoxv7kUj4ByT48",
  "key36": "2xA1r7dJEWvvWhjNrsbya1MQmqfgU63d3pNfAzyA6WzcRHF4aiCZfjXMoaPLXqiisEhySMVFjMLqPD9PCqnwvNbq",
  "key37": "54CvFXecMzxJRnSytB1SvfKimTRgAUmt9PkkqJDiBVT4Cys1ojXbCJCvCchYMyscPwyYGGvNJJLQ31u7T7mKoZgY",
  "key38": "5fdXPxnU8pMJvZuNwQghwsiZBq4ouTUiDY6kXcNMqkR9DbnS16uBgJ68E5FtAt3buSooGSj573TotBVFVAxdsqf1",
  "key39": "644haQiE6yAeAU95HhRss2nxooTMUwx5kEDEdtAmWag7m4UEL7ukUymRkixoECRnBY9AMEuZGWmgPtjh8YWTZMTJ",
  "key40": "2gxFzcSvdjq3ttKxHLEGZaKN8a13qCZtmssPxGcj6NaJuik2Ki9iGY5EQg6ogvxNWj5uqSFjwoVdNQpggJb3zYyT",
  "key41": "qsdzj1U3uN45MRx8Je9uUtvu4oe7772L67h2m5U8VvjeL15hsfy4Hma7wL1G6LoTvXPDnh48jczD9wEhLEuabgc",
  "key42": "5S3sQHCSHeuraE6TwggBztdtHBwr8ELb5rm8c8ShCjzPo7Motw4LAadb5F8CuYnsG1r56nkdbTAVGYGeSa8yiHVT",
  "key43": "tp5SZwHEeGuRXArajtM2oNJRFMFK7EhbmcUKFGhQdK2zPoovJ8U8thbSJrR19ohrq92RFoAPn8kXWB9jHX5vcPy"
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
