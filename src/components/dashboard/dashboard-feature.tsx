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
    "5WwBTh4BFgF4XNMtx1z1Sp8rygrTcv7mWkzPhY1AoFxSPb1nvvuF12DbQrjgffweQpYQCN59bdLop5fBQyg6PkNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYGbBJhA5Vpt9dRrYubuDAKb81coRMddUFYfbLVkPVyRJ12Y5hY4SymmbRcsDAZsxLtxdcRthDMK51SByXHW2hF",
  "key1": "4ksrKSH53TW8mjzebfqq2PBzVXSKxAcyo7GPfeQUsMLTpKkfaGgwRpDdU38vaXQm3JecF37pV5bFdaW9YEa1DvpE",
  "key2": "42VCTu2NdP842vM5kxo8RPK4EzoZ3bgXDKKfHfzzqCGwSij1oNxwjRsK8cuMZXYN27232QG9vkk3c2x4bqnVJmG1",
  "key3": "5FW1nMtnvRebFqjLJHDMeRVZd5RD7nPkeJHhaSRrgf7EzyBSGqwE3pKwUUztBwn42oPtSfphX6dmLFV6X1y3xPCC",
  "key4": "5wLeUTHMAbWHhPUgzZr5yba2BJy3mSAMcuoeLmeKiqWjELwEFXdskU1yFoBETwYXsQdmEYN9SbtNjJnKWRnMRFuH",
  "key5": "33xfBCNncWwsUeUPeDtGKwt81WXcZ4mdCLcMqMpFaJzXsBbExRBZqUvKLpXDifssFZC8sGrEVbJmHip7tRHTzrCY",
  "key6": "5xqvrKoB2Mgv74GMzzQF8BMo727zB1UtPDci2y4E4vAF7UhVTZJpoPuJRo6DiftYtaLQdy1PGVWGRmHJfsfgse6U",
  "key7": "ejNfo7ptFiFJX6fkxWegGfsp5UCaG4p9RX3oSRGMiquT6tqiLcbpsQsQmgqhkp23TvbYrfgvtfdoZcS56q6SEKJ",
  "key8": "2uzyegtnvSL2Nry85LKb6PYMFT3spmz8hNH6VsdBDAnDYtmbxoc1pJBp5HviSYv8i9MJiY9fCyaKjRCWtymWR6Yf",
  "key9": "236Lr61BUQsoFuWk1WEgsyX2tPb1ESJt65hDFfJaFexcqZToVcqssSonZsZxEc1AbF6FsgHV8Bh5JVgUfKYHjJpz",
  "key10": "2pLT5e8MwhUD5H2nLcuLQXhki1nG5W1EXVScHmUiKNKvbibYik7jKhWmPgZGT6pWM9gbA2LPGDNoq4UkWJze5Lxz",
  "key11": "6BF2pG8nWGg7RpwYQYq4u92YXoGh4EakhZJ4AZGH4NfWZhr2en7trtaQasU8VdNWqruYKfeTYeaZuEWRwzc5hSc",
  "key12": "4QLQbMfRB4HLuMmYrqfCeMshFpLareNKtiwfsyqWLHh5kwcWVztPpqDEHTCENkrNC8oqNfihXbYQ9DEtsyY6SiSc",
  "key13": "PWqCjhTKP1iyrg3VZE3dPCYkjazr2ZB7ZTNmH8vvVHNhX49VpgRpjokYx9MDxHkkbcSUKk852J4Ne9YgNcoygyh",
  "key14": "24ZGzc74pLqEYzBjCZenighBbuSJKSaBEnNuMSY2tabJB2BtrHmvV9Zv1ard8SQJHnBFD1fB1gvucRwnrwvtks8f",
  "key15": "pmEwrsT3WGYSmEfi8yuAPoPuzpPohZzg7quBYiT8v4dD1pFPJvJeN6NR9H1EujmGrT7FhETyKBiFL9mLUuWJYHt",
  "key16": "4NFj3tAtPmmApQzdLEvissSPu7e7MVTys4E5uWvkHPzakEqGxDuoHGXSzh71S8XADXyig9yVBzHBWz2tvE8qtKR1",
  "key17": "5aRtQNXwYWaRTetWqwNcYTwj2EjE88UamyngL5Bs64Gg1ZSd1cgJLpjffrVP44mUqJxv9U6aUhhuWiuuVvz2CDPt",
  "key18": "4ygiq3TuenBxrH4HptzvRVPVqy9VLgmJdUjZuyu6ieZ3m8u1NpR5vaC5Yb15EUfxeoBbh8nvBgPrcwavWb8VnHbu",
  "key19": "j22JvbRq7LT6hcarpGwGF4HDsAQjm9LmdgTJSQigxvbYZ5bLuqBuYTf7ap9tFrwuvY4QNM98aVGcHeW7XeSY2iu",
  "key20": "2ybcmzXtX3mM6diBv9JhYWjks5nRUd6jSEMwHwvrojM6yjXtrKBgs7vMqwPzv7KmhMxTR2kWHSm3ALGFgsYeP8WA",
  "key21": "67FGDmZFx1PDbfVRNUtQcPSgbaWqoNPVJsHPzb7nwLkXtGKJEypVWsoHhn8NGXzGYK6uoLZeNzUm43nb8JXJsfEG",
  "key22": "5yp4cHXjLMCnC2tTpQrvmgWPVhvjYyLPS1q1aFNTPpErD2UkuHHrdgz5o5TEYEZ4v48DPw8q5LXRVnMscq7V26Mo",
  "key23": "4AoBpnWQBHdULR3LMZb6jZ18BbNaza7djnPm2ssjYtCVFirMmGuie9bvy2NNK7cU6wLzjXDNWoJurg3T1UVJFWQ2",
  "key24": "2DkER2RqC2yp9nErfYLmLn2LEq6DWenEDQ3Y4iF6HZbX3YequR7Sw6zGd7pJ8fM2DLV8s821DvutLYtaK14uRCPo",
  "key25": "nwxxJj2j84npDUM31h6WpaWFiGuEsohRNGy4qUwPwhPypppZKKkTB3cnBeuhTrApZ5WUuz9yURiQabctYwMjgHb",
  "key26": "2CTZQuh6PArtthvd12G9joBtq5HzZGM2AJKHmj9EVudhtCate91yfS2mghCn74RbFbpmbbEAYFJSiZCr1JG8spDD",
  "key27": "125z8Y535gG7b6kA5dGq8r4MKjW7ni3F2ZEx7jYZdqzmm5nhVBbWFZmbRAyCx7hHHivHZa3B8gNqAVHnDz9uxYNQ",
  "key28": "sJGcmV2orbe7hWvNPTP9ywwG6XKHfrTzAH76mfj6nquH27EVK1pQ5nZ3tYTa2TTX7WChkFiDoiS81fptEFDwWWX",
  "key29": "4Eo8tLCFpLnAx2B2mWFFH9KMf766JkFGafNfq3x9raQCg1arYEyDLGavzJZVs9PspAAn2YFr3HzvEiz95rCsr4Xn",
  "key30": "yxrwWnCexPDRwZBrwgEFXyY7ZWFqLrLBDGhVKK5yGDaTRChdcWv7c2aQ7i3FzsKCQmNKymz9Yty5PserY5LbsnF",
  "key31": "4AS4mt2FivXVT38odJVjvAmugzDzRifVWey84cUpuDTVePRuSTEtf3943YoMCaM9z9pDbXwEESTMycXjaWVhc3k4",
  "key32": "3LDGXaCYaJD8c6dTJPc1dJmJoChw7ZZc97b6nav82rzGL9EfkDmxumxvDtdCs4fBKLWCjcsuJ5NhrmPUFchcaVPh",
  "key33": "3bkjzuq7WSh7HCt7tKDqr8p3Tqe8Gga7SniTNA9B55f5AoXBe7PJaxBLk3QSunVGPmhkRDV4h5rnP7nJRqY1Hhij",
  "key34": "5b2R6CQ8hEjqZcCie8eum5D6LbtWgr6Srt4pTVMqCjg9HGsZjoKi27Fd7bYjarveUqJox1WL94CWiAp8SGefaY18",
  "key35": "8LGbPaWe76rJm126h9dA1f33G5FMzxSNbz7Bw2X3bkX4wiTCsNcBgBi9cyq4usQcJJSxYhbknRqSk6TJMVTncU1",
  "key36": "3FFNnv6SFfsdRR7FuiWUeSz6mVPGwEkDLQycAt23yD4yfZEyeqZPQhnvoNr4LSiVCv9GqaEVXkqxCCgUYgF3G37r",
  "key37": "2ghWe1G979zNMW7TLRMhPVCS5weVmPK9czfR11VFaU8G8tUDJ5XwAo2muBgMtL9XXWizWeq5bCyBc2WVstABUTXH",
  "key38": "yJKmevZzidhraM5AuqHyda3NGCXSXUAkNNxYEPuvivgenrXVjn6B9rES9FRiX7ENULb12QmrgJ6SLPsjQCBgHDQ",
  "key39": "MzEjLEtwCkfdmD7hKkYUiVaSYQz5xz9PawWqW1SgzCSuzgyoT6hZ83pU9N67F7zbwGHJrJznwMu2ffrQYfAhLy5",
  "key40": "5GUxh93YTvs2tZ555mNRZzs7zYrzDWxSyLB3SPXQuCp7N8gHhhkTxyfdsGkoemqxkUpMBuEDg4i8qaFGhcUoahdY",
  "key41": "4vjouhXtBp6PY56ogCtSZhBTdE1Qjg3TZQ6j6oZZErLdPffmxxuGEoQaQJfBcT7wYEC2ZDt9iB5ibztshvG1t3w2",
  "key42": "2Yksirry9EMe11Lus9DkzoyPrdzTSgMK3HFjWe9SsUaJiPm6AuXJ2rRUU75JTcz8GeevB4XUGJnqThCnyumHJLDo",
  "key43": "31QxLxbpoLbrpisLj6dUTTGPBo8jRmcuFageQpk7cqSpWfhajTKKhnhyYf3yii2fnScGm7jZBa2oaXmznurjN888",
  "key44": "3cJDqRmWkaxCwTdoMrGugqt5YHqJ5svSngHo8FvaghyGPKGyJupTiveVgijEYqCw69RRzFjJzhbfJffxD7zHEA9F",
  "key45": "45GQkkA4v4bQYSZ1ofcstzfzBHfC4cowN2CXG5prdUKFs4DqRnwJyakyFKwpz9pRqa7hastDnT3vbbXDTRnSAdr9",
  "key46": "4pUqhoJPQEDvge1SuV6RpXQ3n8nyGaCDPKG1nGay4ipG6xg6oLqG42GJ7TcTuyY3QddsFe7kKvUmtvyZHA9EYQKL",
  "key47": "2E998LVaLXozqyc8bMixuXL6zzzregFTUKuVv7ijXpBNCcYMQFjdwQ2K7wo4v2fBYMFwGRFFVFNs89y2DoUzHnWD",
  "key48": "63ge9CwBqqciR7Y6N8UNs5MRz99fPgDmZ765Precg6ttEcFSnzUhYyZdvaaYXJLyLAxr4VKwA2bSNb5uGJGmo1XD"
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
