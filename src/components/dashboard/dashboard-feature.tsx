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
    "4FuN2kB8THSW4QnEePRa1DsJ3NLc5kqjEj2hpa1Csa1GvDcgsZkXiD6zdKaSPt5Qb7eJHpAWMsyBixgyLy2yvisy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YYvDtWeqaSPukeBVxq4gBsLdpCzGyYig38QEhVYG1RVhpRcYYGrmkoLBDqzigmYrYxC4ua2v98C64z8L7Ts8U6z",
  "key1": "U2EStuZfoXaAvZKM7tQjnMMazWdhZd4qVn5UYBRx6KUBoTK9XhF3GP6xuHQiaeLgmJtc55KscCGWCHyByDnwtBo",
  "key2": "41B4Sr7JchMnz67vcc4kCx41xVP2nxHim5Nr9ThN49hvjbKie4bxCfHJbNLtiqbEPJNUqbaPHECsgVQZ2ybMNrdG",
  "key3": "4QT57GBqZLPjPU6UJHuRmAKoufaRvwfQ3TLT1rksVYM9HHxaCqmCvf4H6zNSewiCh9chXKQV1nqzn1s2MWWJaGa3",
  "key4": "4nQoPWtYTizvaxGXPnuJjsh3ZMEdSuNNr2drXLwPZenuwDp6VWTsFdkzuibE7GX7tFbMpW6yVnQvFmdF6E4tzWB9",
  "key5": "p8dCSnxsuvZmrDBzdf5aRMe69EHvwU4DDBE1Wu3LPCNQQ4T34BvVSB3pjmM791M1SPJGiQLoDVks23gp8jn9RgL",
  "key6": "5xLgFNy4eAd6DARaYY1noXf3pGMRxZs2x9m9nLmXW8B7c76Pps9U6AFQLdhBctB24sSFkkhjJE4zUbv8VAiP36YJ",
  "key7": "39DRsEzEJzAQvvXJBYjhaWDaNvGD9PJ1xaHSP3y6kqPe2SM3tSJXxRoFbogi3M4XYbg8iXPgwKr8zK1FsqBqwzXn",
  "key8": "5VSeDQPTk6pXeKhhvTCfCbJLnknRSfRK9eH4bbjTZhNrjW7NjAj1jCuiqGwUqT122LoTMeQkDgQCTB5VDpvzffxY",
  "key9": "chhyDbqeipqBghop7JBKANTT3iaZVggfYMZTDve2rWvDd59nqYBUX3Gkz6ZZF94T4J7YzXZdvHYpAH9khVqQqhf",
  "key10": "4hyytUG4tyN11ZFHH7uLWzbE8EnWuqsBZTtsgUao1H3x7pKW5iqdeGQ7o6PfSeizmNxsrKeGg2b2nuLFrKdpRKLi",
  "key11": "2ToBAT1ajnexjMUL9sVBGghv84s1pn6fVhifGGZgqHAAPS8pZ5pegQnRKQkMB1sb2ThSJZmXJFMiNhkqZTYYmkbg",
  "key12": "2iEbG1kuN8AHYXTUKC27CsSp4jiKvUpRA7EPrLRueJBGpCdPxY1gCk2F9EJhkw3F6XuggsSrRp3QNLvphJrGJFjR",
  "key13": "TXsdD4RAFPYLbTLhxL2fJ6ndUG76wjyMKs2QoBvWmobSjZ4vecoSB6cwiLJRFTd4jv8N6p59qAEfUSEduK7AKw4",
  "key14": "5GtpGZusbUAF8qRB6JsiFE2UxUHX5wrh6UENyAwPnftjktGVD8bbs93gDpmKWkJNV83qR8LvwfvMMi445zaHFgqe",
  "key15": "4zFmSpywn8tMaX3y11vrHe3Rzr9YSVURfF3bEtrshD152Cj5TuvnP4EmWrDx1Hzwy5CTnr15m2HZ1hNW3X8VzybD",
  "key16": "4BvPeLdesv3du9pbjZqJ1MYFZgb5RWSJjvwxMeGfrs4KL2PonPnPNKszcyXBSoeNNZ6pXwZcM1kqvd7CMF8cudot",
  "key17": "3MojowzzvYxvJnxRtN2YDmWbDYmQvdEBNLTjNeNz5hrRXKgyn4TnR3KgSYqFw39SRK45Df3WsgLFkZBAMhf5o3P8",
  "key18": "rvHaLpgRJZgRdeWmFsaWuZKodLynEi3vfmkx6FsQjPQTaMdqP2AKkMDfF3vR9akCm9fZa21dpGsdLqeNa5Vx2Yk",
  "key19": "4RWuRGD7eZ9VH6d4uc8o4mmg2RCBYN5eGQNEWhWAwJU3QCDurtE7yWCo92DiNgq9aTbad79WKQnkrouGuqnhLybW",
  "key20": "5GfUA8MWRMAAttusQLVHFqdcYo1Zaof9YqqQbvZzRDLAfd8XVg31JSqRxWZ241goKZmVqeBC9yHGzRvjUGvLinCY",
  "key21": "38hy59QDeCN6jr19xYgmgABceWpVMKMexA1wWVfqq8nFkroj4fCKVKot3RYYPmyCoam1oH8DnrhhmzYigsoTosP4",
  "key22": "hpqW4Wj1K7kVJ2UjbJTk61QYnRiN3BtotHiY1Uik4xLiwPLaYkhNrUcTCs6FH17CkKHEQQY761S9TKVDfSjj7vr",
  "key23": "GcquwDxA1p9rKCBBypSEDgQJ6WNpZpaYUv6Nq9kkR7eyYwrAiobdt4kwrrcBBsMpJSMekZsygDo6RiPQT4dHG2k",
  "key24": "35f9MaoU3Po9NBAMXEgAB44NqGQsSFCR2dG1do3wX4Y36knshMga19GPnE4YwrhVhsrGsrRkttFN2DmmrCKHsrn8",
  "key25": "3inDjqnNzn3w5oRRcYA8UonvvSa92DFNqvs2TUqtcU3ezw3nHwkYXU3mEqy7326tPveAZp6xr6rd4L9pcnJv3tso",
  "key26": "3Z7MP2PiTojzotkSyU2yDATYrBng19KwTwQvJaQskvUqTYsSK1NkCXPrKvzQmAxW3HcgRbYUAXLH2WvWtSbvkwCp",
  "key27": "56YocKRzgesPU8aqpaCkDoMA1Y2Q6EGJANczGMDnWB1NRAV7RGRcL1WhZgeTGmGSkBoijKELuAQeaMXVCH5HFNFK",
  "key28": "3sgnHRzXPBa11RFayQ2hooGHt8J2SSLFuPw93e6MkgpCayGGGbXTQpw8qSMQtGiiqyDEHuvecaaYZ5iT1fdBKpwr",
  "key29": "4HronzAy4PcoGSrAC9MEaRS9Qv5wCDCeuvhbaBqE56EZ2GHbBYkftkHthh1taAru8k2aYBdCYezMKMALJjsoYfZf",
  "key30": "4Kouw2PHGTBLGZeKaWZPMpwxD2ksxG1CPJNcwjV7FYbBXC9S19qPD5S135U9jDDT9rHjW9Qd825Z4xnuQNuwUDoU",
  "key31": "4bNSNL21iAymV2osf3BjeAK5JZMAvaCWHU6cmpTybnqaHHVqPtyNZYXGeGRDXj3dm41k5cJcfXCRYRNyyFD8PDU6",
  "key32": "2aAAqfNr8Zn1zFmxpG9BYcRJ4SDMWjvrH1tYSsFbM8A3YDhyLyuYHFuPqwk2aAew9RQbMot4qRne62MR51TGehb6",
  "key33": "3KJewseozCYho3Bs3TfCKKEZyfBvCQ9Mo64Ef1QiCPZT45fZeiWNY2vyJgSteHXZVW7g42EXoLgTQBJSZ3TV5nsC",
  "key34": "4Hns7YP1wuvqUkXnkzyEugaiLBHnfwFgND6C83dHCuYhYXE5reFM8dFVU9rP2c7g7Q7TqUNUkDxks2wi4cz5oicj",
  "key35": "4xb4uH5cTi4wBq9Wdfk1TaUGPuEQfPXvVCej2VHCfWYDkGH1ru53zZgz6an2iBmZsRe2MrS4KyvUu5pokPucPRm5"
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
