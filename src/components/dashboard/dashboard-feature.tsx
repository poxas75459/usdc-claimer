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
    "ZFMhJzacjn6PS2nkGqbYhBjz7enVptUXE3j47decMkFHcjQear821pHEeqThv7yX4zbtNGHYcYKXfmMtGpU5ds7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oyEQNViUMMZVwHuSqSfJtuDua3XJq4aPF5GpAGq7vgs6fXZwZDM83m7v7KQWRAeybCW84Fxfan4VbQyLpDukSCu",
  "key1": "53ntLEbNvYcuW3LCLpmLaGZpYsvhujsDJ3TfaQFkwQqyAcycuhKUvS9SdtDPrN8wTqDcbgofZ2vHSUhF6nMi9FRi",
  "key2": "2RSJoAVnrfq9wzvsbvedMQtZKNfPwgxXxFSwfp9ZGNj36iyTCDYNqMEHpdE4KbyJRLKaqNJnMP9zGGgDCxH65rgk",
  "key3": "3DxW9WvvP2Aq6g22AwJfQ6CqNyJSPQ9ubLn6adxbEgHL13aq2hUBnZS4u9UEwKztnjRfAtR9j3CnvF4yzxcDXAK1",
  "key4": "2QgzTqpbngY1h9PbuS98QWyEKH9ZM7rf8A2wdLVAXUSdAgeJxgwcoUn9XYLcxfCWyZmBttHmSxKD3MwGMejaepCv",
  "key5": "3CmzoHDubRrdHo2M4K6ZbkySZ1n36mQHad4ijPm5Ef29iSpafboJ4tqjXiXAqE4gkBzZCWQNrneCREdyziocNMgC",
  "key6": "3rSghPWjQL7yWuCPcuENXgQCbiGYNb8u7Dg4dpde9ukxFjYecT9vnKW49PQTp6yUa3VSWxhyG9Wdm8vzuBuomitV",
  "key7": "61qyHCPXoCznGFFgrVsVT8hsnSETe8NJvRbLHrRmijpyjBAryimzGB1Bi8RBgy5vTSFDneiicLi3D2EyEDMp1X8n",
  "key8": "49cKWH8rvtgwLi29e5PR3TCRd7cLN98DHQtQgoVNf91qarGVQc47s2DJZbPPm7zTNWi71xWDSuax218ujyWLjpWD",
  "key9": "8gFxfK4YZReEkyYV5BAD9yrBVphDzq33WLQUivYKHExuCUZaQEM5gxUzjzzCY34sBJGjLeBCWrALqchhQxPGbjs",
  "key10": "2bkmkLnUSDT7ritwHnnqLXqCf5XVVoL72ZJoLK27eC3LVsnhP9wBGpBCkRUUo2GsNDCJwSCjQuMTMpvvh5ZBzAQ8",
  "key11": "DGpe324HEuW8Grb9rx95rWtdNEnsM2FecGDtKJM8xqDeCPpEjGdLdiNUcq3STu19jCqfFteLgyRP78BY52w8JEt",
  "key12": "5eFPTCYuCueVZCa4NtFQm2xGoezhXU3i1GyASEfVn3FVdtPJSmBBdphg9poGL7NEHZdMhhFNGdRcpYUnc5uVybjJ",
  "key13": "4gDNB1aTPM5BjvQUZWaJqRvLe8NnPDCm8nD7tTcszbC7uiS9zZbqBe39HBh8LXxfdmA3j14aLKABfooBs3YruFGv",
  "key14": "4f71zAQkmExTHLvEiMWNTGv8N1TNXC6Y3iGSsshG24nX7uv57zFQH8em2YGzPJSN5RnXQL2DKRTK4Jh1bcWwwDRb",
  "key15": "5FskoJ1y45R1HdpnhdAs75Wq4RT9xZ1LAAfCicifkQAS35EvaL7WEgEKRaG5cUWeb1dByoubb2SPo5CP3h2MAuMT",
  "key16": "4ZY9r7cETUAuVYBA4mMRJjZUWjoSki5wmFp63dajRjeJjX3b6JeFjomQJsBm2wZrvT3YuHaUNBvdKdBQ9qMN8k31",
  "key17": "3f3yNyDbLDKVE4hXrtehFZEv5srUShLuPW5gDjiqwY6xk6qtfS1YESiiZV6cbTY85ros9nTZyHqZb17NZvPJjYsd",
  "key18": "543DiKKonNqYpfvqVm1peUebPxLE6RmrmDMfr55i7BbKr7bbyvax6iCwBZ7gQrUZD7NWcWS9Yqgj6j8j3YJZdSZG",
  "key19": "5ZskVARyUDULFa9adRQrQGJHfyzrDwx5DAAkAxAY7KBYG38ZZKBCBLo4wdJdi4RmEJjpENYqzEuRUjKZEEwV4oe",
  "key20": "5APK8GBrdP8BV6jzGj4UPAx8gwvGuudDzM4ACbZMTbvwrt7DbSNTuvsjbasfPUCMLKZRACpBLeMfL5GMSKzjTaYx",
  "key21": "5KncEDu8nw24mUNo54FDxsxbhLYWAqs9YcXjLssBGV2rH21dcv3miTTsPAkW6NtrMjfiQbnPo5FPfbxECpRWLKPA",
  "key22": "5B98Kxv6kdKtmxZxiYitxSnEXV5eLLemnD7SM44Lq6XpJacZgQuspa3GfFNxKT1n7LHGF9NN7CvCxM1KCn3CakrJ",
  "key23": "2KEDjJbFiLraedgk4zXfoh2J4rUuB2DDCAPazjMNCSqr14yHaQ9Pux4chTYRcxcjwpNejW1PqsQKdX1y9Hteq9ca",
  "key24": "4TiRXkxj6KeUhVXuyXqwu7VWEfk1ucuPBeEdWPw17WuEVrCiHqjQuHHsaqC1QMJoiKGikxuSh4LnznHU6YuMwDaV",
  "key25": "32A6DUL2heWuL4ERzAiZkvMkMgNPMhczKKyGyABCVP2mzoknNCaKaoXBSdYSmrgDDZMqbPcSTV4FjEZ8zS7r7spP",
  "key26": "22dSLPFrar4CCLmwERubVXHyi9NCc9KhVk15ZX5Zp26w1oKiXMCZqmjt1w3SaTqPAS385HvT3T1P1dZDbDMhtkPz",
  "key27": "F2YrUBTNmZZ4bR4cZu5EDAAjQqPoYjDnwZMCnASgBFrBUqvCfthKmAp4uQWjb3Tbzg98mUbwe1j97kpKEKrHnr1",
  "key28": "jG2UUa36EvQWPnoshCMGQEKxAkH3RHUEEo2CJPNt7TzLuq2wY8Uf2D4XJzukEpaebCgg3aEjc18EYvVjSxuz9xi",
  "key29": "27eHnZD4QjegnMCk63mRaAkMv7mbzdJCZQAYyiZ8aGjTo454hiWTc6MSgstgccsPyYbbYbruvGMThC9R6wBviZzM",
  "key30": "4AFivfQ1PvYMib2tiMvpLo68PcD2gDpa2cvE5TkVTLq1iRXVGnJMgvFcAcN9ZScGT53ytR6VET6vPA99X9qQa1Vy"
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
