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
    "26c4VFULEce8oi8B7mYRNkx2fqAgovdePebWEqvVpE7SCzchT8e5GjEHau8ivSXjzK4jsfBPhttAxppaBBewNdgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxUJCGvA29PZnSW6CxTZtaryMD8tmsGBWfNtxpc43sXKqeXuZa29ZguNAiLub2CJBocidhPQAfepZBKyBaPNmYT",
  "key1": "3srZ5YUXbYT1iKi4PX64E54Wcs9iQUNzVTCFxJ2A4HUhCQvjko1to5bBA8VZSBa8cvKmUgjUTPKkfeN1F7fAmEtr",
  "key2": "2aCUvpiz8Eox6CgqCBUuevy1k8aZ2Hs2BCUnui3SFZqUqFqiaNEroMU1AS3J6WhWqF7AC8b8S4NgLmDfn9zcKe1b",
  "key3": "36QgYajFuz2Qb94dUhSg1fLujhB3nYJkp79hoepKsBbpCRbgYrRpgs9oWMcQu8sxxU5BH1XwQcFUQtHGveBYaQ3p",
  "key4": "3iU9CSPxFe1tkTLu1NK9n737behiHsz9UQX42DXGLRyQJ9kogr9sv3Tjs8mQncYwLYAFrEfNbdTmAmZu56vcdQpu",
  "key5": "2mVudp1wvqUEfmoU7RMWRtSjpk5ygkGewQvVkee9aGek8cWmVRxbeFJM3PcazYRoQb6MuEMgj2THkLEBp4mRVtD",
  "key6": "4vSA8VSJQCWdnapSR3owTPzxwWMQy5hCGeCFzZFPkQPJPG46bq7D5hhWHHByT8EwjJFYETM2PvQbfXQ6m92BZZyF",
  "key7": "4mEE5FVgbAtboxJ2M6AkUDQBKBVvq7V6buktGXnPzECU9QkRWmrgoXNQDssWMZ4kkKMVgMGrPu4VvFL4doZpvN1w",
  "key8": "2scQEzEdpMakJMT2ZsZEhpMF42niD2HGYLhiTAFEEQa97iD39p6AHRHWf4Ev5WX5ZdXGQuukNGUFtSCH2d5AKmn",
  "key9": "3YpDTqpNPTjnPb8NJyQqyktzaduKoi1dCnmMYof6fm9xxFdzfFxe7waDgiwVoE3eRMDibYUgDMjpSnAdLCQmXYNN",
  "key10": "3miy8RhKWuauezLRRVF2AZinmZrMsTDhJTWEWyDDeAuQKyCvKD2ZWe4BkYHf6oQYxcEqGqgKMnW68uQQQfNpYgbu",
  "key11": "2VQt7MHXVQNfDhuzUNGCwneS1UUXQWR53ned9Aq6wdKnzhD8ni8uyJEtpj1AwxxdZhB9SnWdpGzow5EPYbN5veHL",
  "key12": "3PwR38EzTNqTRrezHm3dSdi971X8a9fP5rQYzJQgk5pdSQTqvp1Pz5jCvdjiNDdoM8cq2hYQ1zWEqmmaNjUjuxFZ",
  "key13": "8biL7oZSJrh6ADg8HBcS3wv3o8dL6YYEAdgtsToyfhyqSFc9WVmNt7BgLFMDJ8Dqvi4hEDTbRqg7z5uNPEYMifj",
  "key14": "2cnBTWqescRHcxWHqapyuZwBeS11syohD92DU8RWmy3E4C66SLd3LiqE5WY2LvMfPeNypLZXke2CrB7Zzn9hboeA",
  "key15": "4wZdcNkiWy7WLZMa8vWhsD54WvcFLn8G8ZpNYvmrKtkBmoRhqFLZF24Rqn6fWEUjaH3Qvuoy8dMDk3pnWgWffKTL",
  "key16": "4ZgYKUXDvE1qiXvD5RUuhBDv3FLmv98UU2gFYX99o1LrLbb19Pg4GvLYhxYFxGdnJrofqjRaQu2Li1U6QRJfgXVY",
  "key17": "2nbBPrzFH5tLbAP2uK7fHvKCm4N7Ba5Zg6yuCMs1MU6xCgnsqFQ2FrWsSkEvjUSDvfW5JFtApVG2Hyq4tG9dgUaE",
  "key18": "2G3dPLRBtpUFmk9NdJHHsvo1uwaTv7eDfcMBgy3ADbGtAaHE3BiTJzcqeFjmZMtFAHHsqtx4rCDxgEg4UN48vLEz",
  "key19": "3df2E5k2SYafAGApbu6GTQZmHced5GtG1HXkKSXUXUB9SgzzdQPAP59aQbPEpQ3rvKs4Z2Z9M1Lj3rUdzzVAy9yX",
  "key20": "5vucwCa6WUZtMLVnBfL84RSSgG9nZKj6fAVriVEULWicm8c4mLHfNM2LPJU1fd68vPaFwoCzFQFSLmz8eMfFQJrb",
  "key21": "5r7EBRD7bXEibYzY8Jte54sNFV4WKEe9nZ3vSbWB6bRrVuvaXEscwFgouWtDbyAnKcige1gcAnEeuKiKZZkCm8am",
  "key22": "5z3fEZqMKLEjaavn7v4Yk5NicKXYA7FWvsngFVDuxJe4iVpnsJn6o9Q1H2RRxKsew1YE6YHTRrv7XJRpnzUwdXS9",
  "key23": "xaJESsi555MSUReGC5Bm4yLnJjYHEDYTDrC1gPveHmx3FuGMMgaMuStyiTRheNhpLvqJwge4Mge11Ld55hFveVw",
  "key24": "5SKmkyzQx9s9DLG8VrZBMbhjo4QaNRta5m7tiYWVfmk9cokiemeHW68qgT51ak1DQpxJvDeh6cVnY84eVxBcxC6m",
  "key25": "56bTK8ZTwquCsEhS6QZo44QZAaqdcNNVNVoN1LBXBADxf1CPoWoW6CjCj8hP29VubDnHCbRr6TnHYumWdEtk5F53",
  "key26": "338g5SVmStzkCF18JTFH9Ttb2HmeyqCF5ujsBd6PLKgEksEJwwq5xeyyj2mwDpV7DmgSx9owbpFiCGi3okgqc6qN",
  "key27": "4vYKFZKtJTEozgj6fwx5m4A2s5Xn8gX8MS4ktnNhHYjAy27kGYamqbhkRoFsqHNwrZW74J3ecvkBjapJdns1GiwQ",
  "key28": "2aiesKXg8gjqWwH7dvK1UkKRSmQuzCuYUAH5abUd2pSEhQz6e4QFkkbbChTpyxNnXzABm4hdmdpZ5f8CRXEJprwP",
  "key29": "65yVJN1tZLVUwxTP7FrDCJGJqdkMDHUwzbM24umNsn7t9ruKeUjSHfkqqzx2e9HvEHpc88DLPiorwk24SsQQKtKk",
  "key30": "BFnjvtonQe9ueBxpKJUZ6jYpbybgVug3itjeBqfEe3uzDGkpQPQPMCAdXXSfbcdFWfvC91kz2M9Sb5RdrYpygSV",
  "key31": "5oUk7u6R34tDuekEi6azJ47AaEjCYSHKr9xRKVjLQ815i8d6jSh1KEeiHd1fLQANgXkD2AdvijfNH2GnCXwHiQS3",
  "key32": "5HYNj7bgJhqctNU4HqD6Wu9xgHNZbVQiLLQQL8z8Vs31JEVYEcaTVfLSppR2Jcw9Jb1YprFDxw5Y1cvaAKre2Wx5",
  "key33": "3gptNhHKhtsiuAJYBU8Hsd8aiFq3PA7HsK3GwS3mEPnGfoLthwnzCwtuD4FcX8FRCLm4h7x1F2xLZu2Hw8Fjqt6c",
  "key34": "3wTpH2oT9jXqZpgrrzvftfzFTwNY5zyf2KzLttGpzGHLudUbo7fpQGo9uatkp6qkqqwe14UPJ53qnPhhRCR8isA2",
  "key35": "44ToT5uNrsyeYvLq1EAtMXAKaGe9CqEi8vsX9cHsTXBtF8XeheD84Vzwk22FNwNdYrKsqRhoswaYQVnSTBF76V6Q",
  "key36": "5KEvXwCWpkuRTMpVkaWw7aDjQ8ob4jn9p2zn7efMUTBF4wyqxVN4h2T9JCzfAjDkNzuDJsEVqEE39u5K78iJyZZQ",
  "key37": "fuG1Ev1fu45hEs5gSgn7cSwy3Wzdka6mEh1igPg62GQ37174s1GEKATWa8WDz6r58khghU9m2e4ZEpuBYFgJd3k",
  "key38": "4MZ2o2y5DVPQm9kKyTbAdVbgnsjV7DvedoowZW3pL9Ua6qNk1KxoPNxFy7sBGs2h5kwJYYXcufHQVrMvTz4ydcmS"
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
