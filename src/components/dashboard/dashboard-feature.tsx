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
    "5TCvC6TqbW4zw8uWjcoTtFSkMZLL3YCw9s6qVD152BHqRKqEwiA284P3WFDEkf1QLR3Yo6gB2cfPi28D9VAJKu7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPLTbS4eBmVo6qoCC6DMRZK81JozWcKmbhyT1NBArKP8qnLFDoVcwbdcVgmnJa9qTCCt2tTip3KohvmMJKq5g9N",
  "key1": "5m2T435HqCNwJgPRSnh2Tn9AsB6TPe5yJoRhwPVQbw298ncKTgnVXYtKjkgYcm2vRXpHN862RiUCP57bwVCdNemZ",
  "key2": "2VCyYE8uy3zPYZDQ69q6neUeM3ya8kdKMzgHVvb113eu38YDHfEAHEbz1QbpWHLZXdmpQnWhTrZg7dtRAEJvrj32",
  "key3": "2XVYCQk9twEeUTvSFKDntT7PGkmmQdXLzaNByVaHnSM5ctbj5tAnxBL44spKbZm2t1VaJitbqkx9o8sa4ZeCemhK",
  "key4": "4ZwtSgH1sDdKZpA8fvoSA3D3URXPnX8vKktBQ6bcKTFXB2ZmQEEoCNuM8oFMAdnAGdaXofbnemZXaEdpKY6RNqfE",
  "key5": "2VXVHmcxofsx2sCrBNHgC23PJfbcAb63dkn6KJc7fSSEfvTr3xouKiVmw3wsBntHZz4tZDKi4XEnsM7AQXdf6a8A",
  "key6": "2C3yKA2MspNPc8EUMwp95k4PUvnmZQvxyXYqncb9Uq215FNTS4okVqo12qNpA9M28FfBipbdFymCKaL1K3iMjqFD",
  "key7": "2RWfRN2FCtPMZttH2vqZRWjEJdLAZJeo3jcM8RNdqU48SGBNenvrDirJWwcaRnvG9HnmwawRo8XAGzAT9rn24ypM",
  "key8": "61NLXUDNAj7UpaddjFWewoTHPWoNPEPWHsdcBzuwgaMFmU9sXniqnhbJJaPSAogR9oByVyemmQWo8SJXFMvTb7D1",
  "key9": "b2XWrhsMkTnzVUa9WmkUjgFMZfWG2ag6n4xYhAKUNhgaS6ixN7aBWYWLwbNycchT6arJ58cW4VMABGxoZ7u7QPU",
  "key10": "EeVKAc3x65hfGTTotMPAsZdueFb3Abj7huSSAXkwpok8k8G8deziUKZsxdfayoQX79zxu2ErthhfZ2d1oUisXSs",
  "key11": "434WqJ8SCmtPzKhffLfedM6K7EfJowfvYbimS6y444NpRZijPMLC3KhVDc12n5fWzL6W97whFmuCRm7Wg8cmo3NS",
  "key12": "2uri5EctGoKugH8aDUUScep24guuz4kn6f6eRkXBHzkfCMmb4n9WDYcSsYbHUnRkhhhqhvdS6dqTBmPxr1AZi9Sg",
  "key13": "L21Th9kDfenApaB5jSzor8VMdKjD1H3MogBDUjQvSV7DScwf9sNEnxgdDM99CnxT4pG9qQjW3ZZYnYLdowXv1Ls",
  "key14": "66rgtVqfjaLW9hzfQ6rJ7rx9rwBmPtXi2yL8T8DddWvvtPXriLAyi7x1RBoMnxuFm8Lovm3UQ7pEHNbj1tNwN7Zm",
  "key15": "59RH6yG8aQYr1m2LmwWvrwwLEEU98vf1B87zZtyZLVKGjy71gerX54Jb5hiywFNy6mePqaVKFfCZaea6tGGmSdsN",
  "key16": "fNa7mEhDJLpSMnmEYWDCbL7JFLT7WVENUTyLrAq3BCNiTUDTy2ManH7Ni1Q73dSsF2mdBcAm3Xb7iEGaRVx5RFN",
  "key17": "4tftsht5aEVHxkJpqLqj6wE6Dbr8r5fRjJf8G68DFV2vBpTkLTfsLVmgexug2DCnXCyXeCVYBCBnNP88s7ZPYGnY",
  "key18": "2uBizoRL4mef2ZJ7yqJxveXvCafbsXwLcsLTMVQmHfR4vybXg9BiDMmatM39DYZQ91VEnCaCPoyxuFL1seTSEAcU",
  "key19": "FNZQPLo8AVF1kxYDKZrLgGycLtJZNFtE6hmo4LjTP4qoTRNXjvqAf9ewbk4suFFZ97BRxG6jvvVsKRNWikcBENz",
  "key20": "5bw8gHL1W2eJKKxMyMujmtWSUSJd3Rs2VqPBr41qe9rGBmSkZ1ZgCGCJ5GpLwgRLzd88eHsNPuR6Uikp9Jd9NCTk",
  "key21": "2tWPWdE8ZJjpb1qRnJQGfHR9Bj9DMA8tcghsrS7RQXkMkTsJnvUUacUZpbXw6yL4Eff9ebLWizYA3rCfXdTnwfT1",
  "key22": "21ociJcFtvQWg91K8eKpE8TpxUVMZTii6HrMgxcWU1qv7KK38cs5L6thoMjzyF5uWLh2vxNFQWmdgtzbZsMfFDmm",
  "key23": "33f5CespjnUKv6SioXVNFGvjExs78zahxmWqm1RZm8ss9qxzrgdh9VdCfuGSfPW9JhTtvVo9Xmyt1cJVKe8ExpAE",
  "key24": "3XmoSBC8fovy1X5ggivAPeSxCb36iSW3H7ioP3ntrDKtGzRkAAHn22317VD3qtHpYvatUtW9LVg42YbeTcVhZYcy",
  "key25": "2kBbf4Tpf6pBRUj4b394YDZhoH5dhf34zpokuNu11Tk2jfFgvsmkzkUwSqXxxTX4GYXkWATag9x1uzT9iPMcakZv",
  "key26": "8VV8D7XSoKJDzXfkwrLKC4Sq8w1bSC7GKbt5TfTuKz3zJRxBMCwt5FMgNzJBo9WLYEAStFmiBYfopS7JXP12X81",
  "key27": "319Y6pc4iK1ycddfrAJ9MqyRkfPwy5yDZ99rfHtvZ25MtdDz2kCRfWwiXYXHfkVazgFTMpPzFd1n6q7M6HHDCUuT",
  "key28": "zEMe2xxhmRJDeWMdY9tQ9854GBQc7qAjHDLdXowDDbMJ9iJWWJr9ZN9YcWpS7hJuez3ZiTbjaCdapJzSVjukVkc",
  "key29": "4yRmciHzsdiFGPre69wp1ZoSsq8JJCbtfWZCioXW59QUmrqS9KQd3kzxMYUEAdALPwyZs5GkUuhJ4UdstNyrk2eq",
  "key30": "Szvmo3PPrRBbLU9Umh4zAiYDkezpb5pyt4HH2TXhe48baSNxrMnFr58hhJsWWpQwg9ivpTxU6NfGAfx8wPp3iAJ",
  "key31": "yyKcyJe8WhfgAeGKAEs6Pwp28TsAVQFLuK1QEwbFkap1ghWv6vSHkFrRrXySRsyPz9r634euroHkWG6NUdLn1MP",
  "key32": "2T5GsMCF9rgKAEaF3rAvbmUvMvdVKfBx3NPush4X734F2Ao5u3R5A1veH7jF6m6fvC6w7AzUfjHC7ugXtshtvWmx",
  "key33": "43Qk1aoTWLuJwtytvfNLkot54s8j2smqxXtmuFft22JSS7hrv27edLbBJ7QxYAV8sg6gekYFcAgDnFDVxZuMeFFn",
  "key34": "3pn2DvokBmrHvSEWBjUiR3A56FzxjrCth6nrdTJzNLwrEp1nrKwwGgeudEfRAKsPFPXCdEEniDP4xsUzEsG1DMie",
  "key35": "3CZCm9nNir8HwRX2EEUaj4jJCAumaHCqauUmNmJTKxG55TkYxZdHyMd1Pg8wftRfkP3Wwp8BzwcrCusR3k17UP3g",
  "key36": "5kHoc21ngL2j3fmXX1FFF4yCxr32hxwFek2QskPQz5JQ1eowGRFKoy6uLhwX195kyoCL4nb7iv78JaMe4KXxGgAr",
  "key37": "5Bjr4EKFCKXVhD8wPeSLCGrEaXyN4TuiQ2WPUuynByTJekpEdjAuzQmmhVuh8HozcgTEHh3BbPeWBnrjDXEMroRL",
  "key38": "3LkYgccmLqLrFXMj47XzuViWhSV4bXYrWUvumG3u1axSchkow56C6XJXaGJfp1gh3YEXMZtf6vqFuoWVd5UVcvbf",
  "key39": "2htZznVg9aiumBrryv6gs7V75bXwonXb7bMRhNPSdxRAa6yeCpVop28U7ctSrXdNiJTNKC9JcNEWdYWUFEQHC1Y8"
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
