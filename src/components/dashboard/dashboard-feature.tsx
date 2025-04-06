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
    "5ZeXGRtiCq3NifGHPAi3RwyhLuyECFsZPauUQwVeTdyd1FCTgD99rBVk3Zk71FDXny17etnQf9wN51C68bs2Y43p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BG5q3gwTf51U1RgZVwdYk4Bk4kR9xgn35novFtZHKJD3iYvgCCnfeWMwZuYvPmfX7pPzWH8CHiPSDuWV3Muuum",
  "key1": "XTJYF1NWW6MrFc7mQ7pBpuzhTBwrkYWAgWVLaf3bAudLoyDxXCeNVG3ULth1ZYVZwWU7cfmueJSnuryYnjRWLzm",
  "key2": "4XBZ8gY1evpiiV63UXBB1MAVN3365Pm5X9BrhHRrDBSyRogF6ZwVsLD2aqsLtR2rkGHkYQwg2kKG5qSGbRxp43xi",
  "key3": "43vFRaDGHN2KHR1syq6ATvMP2DR8c2ch9Ae1KdgNg9mypZqsLtmbKtUBtDURMxKk68rYTXo4UAjGyVYESohA3x1b",
  "key4": "5afVPFiJ9oCd3ydZGAf4p6EjavFQaVZZbhRPofq4pMesriCtvKRQCqbbtavtdKCSzADc33q4t3qHqLgaCxBaD5M8",
  "key5": "4psg21e8TawmKAiXwSsgMws5VttXt19vh4RiDPGSC9uyx5wnAnJZCyhFTfx7U4jGnWqphFGcc188E65crRXDKfMR",
  "key6": "UZv3sQHHADVNoju9B4ADCLDRck7fwhQE5dZWy4NBpwkoXZbz7Aufd5qwaTNUFraVehYrUkUCSUAopWJz5QVFioX",
  "key7": "2jMiRqjNf29UqVRBNdAZhzVmo4r7JQHCWv9KsqBoGKgjbuFn7ZkKSXW8ettMFJHohnjPNjiX5pue8EpVwTmUwvMp",
  "key8": "5KxHiztbN86KZCx4dkfmgPwqpsnoHkaUVQ1cutTojkkTuMxTnaBspsdpL4aKcGWT7k3T41WXriok33HWpGvByWcr",
  "key9": "5ogKostfK3y7XjF7yov59goVfQppzraxyiu7XkYC3XHFdCta2wmqX9M9gXpBseJiuvaddpioqn2X3axWE81G7CNt",
  "key10": "5L1q7D2xScPV3whJdYCYe1uTkwPh95ebcjMihKcEpFRz2xXsTKi9BzJLNFKVa5tEim9L52Tz6xDugTSJKwvSE1Ga",
  "key11": "bEseoAzDBkBndikQg7MLLzN5DbsQ6XKdn7Pu5Ut4dpC9xDAs3Rti4WWa1pYP5azwF33G5odncFbRhiaExE4iewM",
  "key12": "5VijCcaFAXPt1zK6WThNUwoGbuuAYsu46UsbF9LjsfcnxgonjsFzZrEGLvfspRoMhJ46H9ENPpRQGzGXkJLJUEjU",
  "key13": "4ndmo8UCYXwwx6ZhELwTUY424mBm54M9owAfafaN1VTS3DB5yKGPdTCSRvWHX6bNaWN8wW4PRnCqdpViEmszkWQf",
  "key14": "65TDsCMnbcjE2RdXsHS47BCWEEcgRRfeWL22xVLxJPVp3QRhS6huGiM4GZoRrVLnALcPuEM88BPCfu9M7JW3tdQb",
  "key15": "2xGeeSRzNJUT1gX7DnBFU16gSnEftkzYxBQPTPLgjNu78hNo6tX449yvf4SWHL34fx97V3dotjVcoEgKn4GMHPSw",
  "key16": "d5RqP3Q66JpyiBhpAJFZXs115LihMSCEHSs3uTR1iZsDY1dmLu2164WsVYo6DG6FLWkS1FAzT8Y752xiiUyLUGu",
  "key17": "2wJ4avn1cwr15oJbjLcPbddXrMxe8CgC6zDft3PkaxcHoqW3FAiA9afDzGKHPqGkhuXzpdnFW7Uaq7C8vN47qbck",
  "key18": "3iiqDyKiQ9rT9xt6DUH7f5iASNWaYGrscLkeyuW35ktJzQQkjZsegj72qmL93eXaz3yyzt265Gj4NyiKM4E13fn5",
  "key19": "35bjzrJztYD1S7TVAEkpgKzsZumVm1sLGgrMrrkFct6wCFcS2PYp6LuebWDYAnDiafpsMad3WrFFXRd7E4XRLXuy",
  "key20": "5Nfz75fmG4jz5LjqzRMqxFfbTHq6DVeeTVgs6HnZWwqATU8ZHMaNJPSmvnwtY9C9FiEt68AH7Fci9Zz18tmg5UCY",
  "key21": "sFZenBM1abZifhajz4AHd7rVr26yPEEpwQgnvGZQCNmS9PnoUW854ULPJhYbwFWhQKjc3q6sB6GE32CeKFf5Pn2",
  "key22": "M6sXrbzkyTkMh6dqmqtm8GKWqrTFsa26YsNgmGDsSRxfndgQe5gPaG64TrPcm6Kay7VcrHrAqNqhkSz8kyoefSQ",
  "key23": "4Nz6Ds3p5dAHQ4whXtreFRbg8ikRPnPTGHRUJcgwVqSrgnFip2upVWW6e8s3h9LmwvKaAPDc5uvidh5wVuYf17vA",
  "key24": "yh5HATnhVvQVBntLarDDdeTEvsVrA3QZGc3cpw6zhFAHuQa3uHjrjnjeE4K5mkpCPAg8hDW6V6ZcyAg8q3inoDC",
  "key25": "59hJysPEHqPipRW2H4sn7PY4RY8MwgF75ufeaLXqhKjuZMKQaAPzQc7AEKMoc4mRPddY7upCrCU5issCmpd1DFqH"
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
