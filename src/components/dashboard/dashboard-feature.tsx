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
    "5Dwokp2YuEcjN66pqLihNu31wwKKDLXaFCRA1CnHbjs838PzZp2LXosPrSW7XBAZZfushtWGKmVu9yR4nvhsjSSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYXhXQJwXp8mWKYevh1CQmhj8QscoVUSh2AHhnJQ1mYeVV6ZcX45nM6sKqGnnbsr4zRrLRrUkxJCGccj53mAEym",
  "key1": "1TfJDXPnN1F3D4PtRgdp9h4xLEoQrhZHvnPuxkp7eWBjSXUtwnPbjAXDMc8odiXWedRjqswNgDt3Bk2itpeDwrm",
  "key2": "4LizERws5yR2WX3Cymj5mMCLqEttXtfUXoUGCHHA9fDdHFLXtU9EHQqoCVyetCkNLrqLA2DMQTybLpmumtcFEu5D",
  "key3": "xdp3zS1xvK1dJanfx1ThSRzzjwkHexSq5XKEmdiFhsbUvrtWhpoYhKFTmakusuZdvEkRHE1g4WHy8avtMiADLq3",
  "key4": "4mswqQmwfUwgnpbTdVbjjEGT6TdTfBrGiTDosqFvTPD8FTRYQFzqb2c8rk7hm91sbVJVFFaTLa1ax48mzzC7yCgw",
  "key5": "4br4oMHeiJ3ffWCDcEff9TiKfBrQFouc2DN2nBPGcT12H4KYQms4gvjDFZn9GMKQ5s9XHPsMSWXDcwZs5sVhopQr",
  "key6": "3wL5HqfRZBmwC8Pb1opLcQFY3ja6mkd1HDqVsQBSX3DgBHN4oSAMpKtKyJrkjHmVvuCw4kCYFkczXpS9hkVgdN6f",
  "key7": "5r545mgD6d2SEBEhaak2CQiM4C5HiqCbknoJtsQEdmu6QFTc22k59y5RmwQcypDhFxqe6eWo1ci12qqR5Xh3Dz4n",
  "key8": "42gyhXzs4hoZADQfZaDf1dhPxrD4YKFgR1UWcm2GNRGMGVqZXpd4cMtUMDJxD4AEbHtXaxGnN3b6kLxB3MDZdsV9",
  "key9": "4FhPD9eBrbAzeQteCPdTSKUkS4yb5yRzWG92pQapqEtxuZBHodskkN8jirSAvdVmizLxTDdhdUvSwbQvXgY3PhVP",
  "key10": "2r3Xe2tBCfAobkqQ47hfpvitrGrMT11v72Gw8aQSAJjg7BqJbK9HWcFo9NPhr8ZPh8uVrgjbPw55nFe7QvZixUrq",
  "key11": "3F1ugmewoJcnfTzyUfTZDeBWPgncZHxMbsxymN3iCAXxWoxMbkMkUSsCnY4VdajdvQqvzb3asvcHZyikcgdHcJi",
  "key12": "3uFGC4Yb8qXn7hiYRTRhag12mGfjAiC6nXpVz1jjVveveBAposudhe3U6fbqf2ADFDwN2ir6JJAWJ38xp1Cv3625",
  "key13": "SicWY43CGXvh17R3Jpi7sdJehpKr3AzD7NsefsaZdqWiZN3DaRXbdCppVSH6TYQHzsUfHXCjF9ER4n24HXSdJS6",
  "key14": "3T6rhvufVFCd1pdZp83ZoZChM9Xb8DJJeq5761yN8kAwW3sdJAZkwj6f9PNoAhNEqUoBoqRknUoQbSJ9ke6BC5kW",
  "key15": "2MH6Xhu8oYFEKuijpXnJ8GEi4miDUjoA6ewv6fPbDeDxxKHofPfNbFR5zEvD5DbuK11msP5cvncLWdbYKD4eAEjY",
  "key16": "3kdBoGFa2ES6Vve26kNKz8Y5x85XhgmyAx4rijdRjBZipKL5zBgGBhutSY8P7CbzEgSHYCmwYJHJGHuS8ZNwmCD5",
  "key17": "36yMmiMF7xRC24B6aGeMdMM8ijPBkJGKxPqRxXTKDr9bPjzHNuUvpYwzERry3Qvnj1HJfcXeojYd6vPAgJWqnBxW",
  "key18": "8Hj9e8mZBw6NVfMjPFzu49Y94yyGJk2ZPrTCxgdDPfR9kKnaELR7YzwihjQ6JpKo2Ak5jm6ADAqQJUZeRwUborg",
  "key19": "3SFJE4ndn5G2Vt3jciZEih9sdaGADyoiA5DdZTieC73Qc8fzsEB9AGbXuXEB6xL5uivrLcaqNT4NpoHUvkjNHub5",
  "key20": "52CSPiMbXX3Vmj1iaVbd25FY99JwPgCkrfRoSu8AarBUbEL3xnX5UAGx8QgoWnddYmgUiyArNxQmD3cYAAkRdXEL",
  "key21": "rHGyGt3Sn16zU1o3ZRx597bDmboLJ3Gfvm1ANjSKVej5nZMRgs31vDexZwaEHYf6ckFE66n5n7HwVftEWeaf857",
  "key22": "5VwU6MrqPDCncesmvQ8yFm5akhySjtyPaFyGXqMbsM8MwBFZ1ujRfNd7M6Bw3q7QmctJLP2iEk6cg44i1y1HyhrN",
  "key23": "8FqA6wbxwQqUEfmR9T5edN9CbTPQgXFSeLwwcPqu83vETWZnxf29e8X2VxZa6d3LmH2XxcFJLS9ncntDoPU2x8J",
  "key24": "2uMwKr9G2b6TUrmwAZyvTunHJSyqUhqrkhgEbKgPzAJC8173cjHMpsfaQBz67DaVoUgrvto5es63bHLyX8E7987M",
  "key25": "2tESwB6ztRruomm1tzmp5TgtoXyk8pU1mKKQ2u4RHBYpm3N292r4oe45u5khoFXsiF6BUUD7vP2RUfEy4gQUAY8P",
  "key26": "5nENdX22UoguVSWp7rcMbp8cU7DRMhD8hEJjf9eQMndHNGDDxcsLTdsFKf6167JzS9XuXvjT8k9E3vgtnAeaBKjT",
  "key27": "2HNdb7aiJMpWWXzYYJseYb9iGpm4WhcAvc5x6WfrswERVWegHq3VzpEmwHoE84wXNoq3Nh2uEdCZPUfLEgv23yQt",
  "key28": "45hCr6xGA2TRrqZs17RhMdgbedUZe7DgPxFpFQMzcrwuRPc1pa4ezdamTxMRQgvLQ3e16Njcj2i4vxwvjqX1HhE5",
  "key29": "2PDPMQ3YZB74BfkbSH7TfSQRFCJgAACfgnivMg5wQCDo7XSrRQqbFqa9EGugzMwRZPHMhxkLpCQtigMfsdn3s5Jd",
  "key30": "3yCamaCRmruEm6zojLp8MuEz3w18oDtM9WxsMwkfh7H4ZGHdhtAciSxk1JZfJuNJERy2fNocQzChXTi2VoneHStU",
  "key31": "C9E9xyk1Ni8bzdoU1zq74yu5jXcz5Sm15RVWcCfoJibVp8jWgvE9toD7frAT34tsUTy6PgSF5ax8nC7EHLeaFdx",
  "key32": "2NWccH1P539nzugt1ycKPgycLUEPPUitb87v44hRKSvksFofvNr7GhW24R7HK9nSph3am9ggszMBpucNiFbhLsgz",
  "key33": "5p2KpEa2xqhF3vSUnRR9EjEXGCwhWHqSSeKnsDCBz2k8iY3kicNpe5y5bfMeEndArKYxTqnEn3HsyWkPQRBKsbuJ",
  "key34": "2hwwFwrgMgpRDW36tZV5xw8k6jad2KVBpHisqwwGKYooAz6YZACL8U2cUzAdNtj3rpB8XxFtNTDrK3Y6cmAbR5cX",
  "key35": "3Bokq1iRKQuReZvqGoYrqMQRBLyKL7rUnMByReBxyxaotyG8sugJpcbJXthpHSFesaXXLWM1WvMaTZ2dt2F7DDg3",
  "key36": "24ej6qgCu5BJAkiXcshPX1QYsY8NNmetY7qrQcaUrB4E81mjP3ZgqNN58pnG4pEYkSTu9j3tu3Pt9pbPzH8rM1zc",
  "key37": "2GYCK2ZoH1CcF9mJeHHqjWgFYuh1vvq9rukDyQ2cHnX5jrQHNMTGykTUzJc6FKxGcumjVZxoruLbDQSVBgVUxy6p",
  "key38": "2qp9a9TTQ7b4Y2yuoydbXKrUQpj1NbCibSPTqwHDdPgjKfqSKjqDefyML9qhf4oFBwqBMGsttYGQjcaVh5pqptWd",
  "key39": "3QDtxRzUXt3pHYWiePCCknWKVESWy72nUsViJgXu5N8stB2eA64hZBb1uEWZBZCg6kvJB5yZLr7Zr2xxoCgzywZf",
  "key40": "5JUYng1Bz67dGYFefSHnsbitaZUgJyKrhEXi58ufv8FKtNXnNZGozW93HjUAfYFahdczswtBB1p9BN15av7nkDxW",
  "key41": "2sWjkNwvvtEhawYJddFDtjmArFTSGDxZFTTSBbqLbYF2vwNPq8w2JB95ccugmniBVqZPSCyfAjt3KkySzj4iDF4g",
  "key42": "53wRLnmkuVVnVo2w1hLyRPZNvnoazRAouuKAq6kydChNKgVNXYWR18Z3aChPgnJse8RM3HDdVKmRsocZJRXgNp7j",
  "key43": "4Zyttr4YWbqUz4WVmGckDUjyxv4NVuHAVZN3sbYxT1fg5vybB6LHFDBzWQEGfJp9V9NWMT1bt3g8UZoJUcnqkGs7",
  "key44": "3ZRPE454mCDsgpScCw2MpY7ndKEpWPfKLXCB5TkCCDAuwMwHLj4LLhcQcdUnqgwgdjcxmtUZBqq2okmYm3a5tPUe",
  "key45": "5aHUgrY4xyacdtdGSBuXbtGchNN1Lv97eg8QjHKvSNkeEHKGRUf6pnmkeFueXL1Ssg7zWkhWbjeBQWHjLBzRiGbf",
  "key46": "4Zmhr6MGZk36U2cXQCrzPein765uHUrbrFdvqAQgy6jM7Ej2xGfv6kK7iyMsTDL5bCrmnE6z6zr3qaUroMXeVBxZ"
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
