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
    "iXZ6pxe4M8VXWe3VaJ7rZ7HzNsGotAX3tYBxd22em7ydgvCViS8WZDT2NqQ8ohfda16ruDhdS3ocjtZvAQnFmbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bjjy6VMYWckvsTCXdAvXYwaGBpr9hzbDmK9h1j6mjLpQ7nDg7uBEsiWoNfQroFVC4ei48vKArejKnSNFT3W78kr",
  "key1": "2rVhF4K68PAAuhP7oFUBLJTwJv1fghkgCzqzxqki8bFjJeAZ4sQgeK9xv3N8Cj1QjB2zQNuG59oQNPnbbhgCjDkk",
  "key2": "DMitX74ynLXPJCoQujpiGFSsJH2xszooVtQ9PupTpHg58CxMcs8cUjpBNDu1iByhEV6Wbg3xVpWsY9YnpsQEBJa",
  "key3": "2N6fdg6Jib1cVDLtzVhrZP4N4cbS6CfP8bZpCCb4s6WAZTLWSpPtckEnq8XEKeU5mFxaNEVboJZdXogbndpsPRQ7",
  "key4": "5jJ244y2hABkULkBxgBYRZF48d1ggZTXvyEZZxVvHdTvji4tBqNTQBSVzsKE7TboFCjnU8Vfg4LxmnwLCL5SpaYt",
  "key5": "5UKP3LXxnrzzxJxTZkr13G97iQA76yN3YRhPD8fWb5paZ4PLF6Zh2EQPdok5zKXjhV9i1RhjsXa7i3J6zKhxhvH",
  "key6": "527f7DJgWNonDa9xrdyzFPLfFamFNcpbEJ5UqyHJhRwNHSkiSdwtU4xXtfpffgcbAvVQ4J4nugbefWibj2zDzXeX",
  "key7": "2jQZ8Qo9nYKd5VoaKH9j1ViWcMWbtuEoRtxfw2LBf64igZvAFw3k441ccWMg1UPuDPX7b2GzQ6MSZswZ6WXs2jWz",
  "key8": "APBCwzkiLDiG5tEMQoQcQRy9KHY8HUV4z3HGBVW9PsdMuVhzsAmeTvVPurmyjSAUMtAHkMGu4WVsGJteheY3c3G",
  "key9": "37JmHsw8Koxhph377DFKj18EXvAksJtwGVSKfBkwAgdRziTDE6rbzyQ5nBndBsMyTXTFLLHVTizVCs7Zfo8dEkwU",
  "key10": "nDi1Ts4By1Hz9L1Yz24pDDJp8NUxv1sriAfo965BbvtCqnt2j5hGqA4zYKWqejsfibABT3VhZwX32Vt4TiuBi4H",
  "key11": "8Gqnki3QxVZc9TPV3PeNtjUYgYSBmRoAakNys55yRgbdx626CvWsKrVjCrcbivQavHCrASHGew1YrDkgW1JN7Kt",
  "key12": "2s8eqz3jZT84wRbspsL4AicitvcMVXiW3F4E97uKzzfTPgDfqTG97rup7Y4qP2GXzhshzHLNqXk5bKiGnKd9TZUJ",
  "key13": "4fRU1XkcdKDjA1Ghh3AeXLHJdFPonY5h3jAZhARDjzhL5qkBTvZGvuuVUQRiTgHSV8oC77AYrf5Cfoh6WQSERoeA",
  "key14": "tCo7tDgt6tHVjMELFaQipbgorFKhzAVkxm3LgrqadRxEUbWirUPoLCBzHseVkipoq1B8dgUgvJ1qGuzvJZtViAh",
  "key15": "258UbRxyCeaSYQbp7LYQoFiik3wtakgKjZxLRpsYEF8ATrbE91idEswW1oKLpahqZubzpRQCzPPkNybLxKWqfjYL",
  "key16": "3sNPnMFwLzgjx7eBKUpq4a9MiSaqdVKzTwP7BM3HfkCAa3uJ7Ft3qgtAWxqBVmn74H9fXfFZUyGHwgjgrW4gohbc",
  "key17": "67mhpZvXVfb2kMXrn8jFU5UySb7ZmGNNsgMZ9JBdqhtQgsQRrisGqwDybhWTe2kMDcBz96yBwR3dvKrCnvoQkQtb",
  "key18": "Mr1QteS5KZWoMe9toSagt3aAcG6CK5J3mA2uuUYAPbzTHtitBpJ2MgfnSoNLDchSCTSRWZ7GF4HadCiUB7KFspg",
  "key19": "5tKEKqJL4cSw5wMERhdrmFi7iF7QqERbiyFMJyj6SuriDkijsDA1nboMR5PxL21jDoZjLBjx3GMF8ABfpeFJm5uk",
  "key20": "2qR8An8ZYk6cMdr8wYS8tF7xoiaRSv4we7AZNA77KXJ2YWsLXvAq1LtUrq7tD44zgintSMz1e2mzVqYTud2yPJYF",
  "key21": "66PBn9VxmaxkUFCFGEiCK7pkqUYX15wTcSdU5wLwRvuqUhXnMHq6pjm38KSmd1mnNTVFMhhsgnELJQxANDw182sq",
  "key22": "489arPfh9WLF4HxFpdcfKaL271mdQRHB7yiByzVitorpYg2Rjny4jGdnZXap9QfvghzSrQZycxWq3FcWbLrV4iGF",
  "key23": "2RP7szHQQfT2aFzmhh3DHnMi2cLF5ddWAKrnwb65xdoXbd32fdh4Av41C5fyaqactAZ2rMgFYif9NZqLcu2istbv",
  "key24": "59wZtsR39dmWbextBYfSXa1onZkYXiVNhpoKDP8M5kXH9wCGhJoD8coubbNWFN2zV5fA39Qxdcpzopg97A3wdtA9",
  "key25": "2zWshftZzifX4EaycmvnzjWJvxLsTcotbtxG1HijwM42YFdWESEV9T7QzQ8tYJ1AXEEnWsLgTfmBXKYzBjEWVCjo",
  "key26": "2xGC1H95o53GUKFjPzj45WVfFa2RniFBVqEnLrp9QVBcSrio8WvykbQjdGvUmuf9apr5tngwhFQDFbNuSs7aQGt8",
  "key27": "2wWAQX9cQrqfzDP4Xxdj75ueQ8uaZfB5oNXkojCpjdUWJWfQA8s1i5QANG27XnPs8DFzPbDhpf1ctossuCz9HZGR",
  "key28": "3w8Gq5PQ6VQPpftpgSqh6NqJvQ8rbNgNCXTERrNUJjmz4Vqe8bNG33A4Ew7QBrGKyLNc6cMWCmjLK3iWfU5eYqRG",
  "key29": "277CRqmwtwoyvo492n3qqXS7eGkL8zug32th1yHZK8JtMiwKnsREgb1rjRVAwuCv9Vifaw2WvEDmUV7fFkLcp1SR",
  "key30": "5vbWASZreeCFjrDaKJSoLUWv42vbVMuK4LDr4hTwypUKxP1Z3SLseHW2SB7D9ahiYREhcUBPwgSihq7CGVHwY5Mb",
  "key31": "KhpmE8TXjqJ1vDemGdsCGfrisz6qjCLxN97nDB5PwnVtWVx8CMDQyn1SLDZ1KAhdHKvmpGFmNLWpufMsBA8e5oq",
  "key32": "5oRiDUJQvku7UZfXEYTWqs6TrS4MaWChuZwtUzGPcV8dFeYXc9taG82txio8doHmsLsxEsUfuEBVkmUoSUcpwmB1",
  "key33": "pyHPmg3YFxJTxAeBsDyEeARekWDrAYhfyVQt6ZKGKV37jzWw7XNneyN5wx2AVFipr3T2MQkBnL3uy56Ai3RFVUc",
  "key34": "3RwpzcbeABGb8v8aAHkyyiqyWxrhq14tkFd5PN5ZxJRw22HC1ydTuHvtrXnDrCa73wVVj7rRYBqTFTq4roXZ5RPi",
  "key35": "2g9nwcg4FLv5t4UCH35ECvfi7mcnduocFfJiFukgJ11XpUp7FCY3kH3u1UwJHSrYAEifUSLxFtMrxVXM23K8ho8U",
  "key36": "2TzdteYxr627SpSzVot64PHFbjQX6PuziAk8z4sVvMoM1T7UATDLxsNRRfDo9TVk574TfnrDmRsMm3E2fjiJzzyc",
  "key37": "5WyaYtraKUumYYa6qJ2hbkyVkNY7uhMijUwkUCkhuPu521daziZpveq4RmE6gnEwuFacB5xmSd7wz4r8CBfDoUMV",
  "key38": "4GThN7qPK7HRq2fjVC9gTgBFBMZUGzTJ9bdr6xsHqVSHZY7ReVogTHf1Hn94nf5QpfbLd2WFmDEhPetcrJKjFRsq",
  "key39": "2rhrC6upNCdavNMqohuRUBDJa4hvYroRLGYio4RJQDpHawvpbt2dX4uuAa1zPmvBrrrpVnXamzZ3ePB6qdifSzcY",
  "key40": "41aypHwmdfsmWp9FbF1EQrqxmMZnDN12QmxL18zuHthh5rWt3Nwk23zgXFZMa6QZiCSMdXQyVDqzRngsUwgq5FhL",
  "key41": "4NFtA4jcA5ueu8BvWJntFiptGm5rjCQicwXXfZqen7vHWTYePJShA8JNUEt3R72gwSWRYVaUVn95VUV762pEYCsJ",
  "key42": "5Q4AriJzbuofU9R2V987gE3ZBmejxLw5qtWxvpBHHAA2GeK4WmW2LBfsfaLqtTGhUngZoLCYPCLbVvLVPukauCL7"
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
