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
    "4yFp4KZ9ZDqHtxMDYNgFyEyMAS5j5J5JW3aFPi9muGsRKjfVrEpY4vgdzhPHxx3RMweHwtbPCYuuToh5gy6st2kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WshVMcJYoCuyr8F8rD79PgqfZhEnhm8cQQ6UW2Y3J2TELQxvqqQtZ8KiP6JiLNH2XW9yax9Gd2HxhngBWWpiAHi",
  "key1": "2NN3aBJEBck5wR7aJ4hEKEvWuu5KTcYSs8UqdJHA9XotrTvgi3m2mrVFiGDrQXMe9DkTL2uGJLzqxWHxDdM1YF3u",
  "key2": "3cpLHZE6Vij8XYZ5d6GtPAfTAPwgmk4A5irCaGiRHMppL8zYAAtqgYKkGo5DH5MQi31YHGfSQGz8A8NsDMEkVJcm",
  "key3": "5Si6Nn6Qy1Ebkxd3sqafrBHNN9WseurcXJCQ5toEeTMUHCN4LJizX3RoFXgJ6KorVHUwh486xYVvcj25CUJ5YGSY",
  "key4": "gqfrqcuNN7D18L8xRbbLeE3SX4t9YKdmQ8AERP1iintSGdTKtqmiCQ1CByC89CbgDjQCMkWytgrnAWgFH2ggGVq",
  "key5": "2KfWAoVQWnMK3zfvPbiMmbgJiN27AKJzE8AxP7BcG94w6JSoVMmocz4cr1HEZj6yAKPY6PeTjRLRKZHF9Ce1PN8K",
  "key6": "3nwYjyp2zbaLPMhqWPQEtPeDQL3zCzJybTKNeSuzbAsv8hjBf7zfWqoH3fuJmYdx2YQq8LW1CCPtPNXGjsYh13Z8",
  "key7": "uKQQUxGf4yV1aGSLxTv4iEYyuK47xnLduZp9Up37PSHpYAjE3NHVu2XB7PmmXe69svsmfEhddTxcZ3JQpC7BQu9",
  "key8": "2ozDHwQaohKwQ9sUXGbqoLmKAehmbo1Reih4ptwp5Dj5v8SVECLkv68HFrAdyNEm7FebH19pMHeKbukHFgAnctGn",
  "key9": "2BHx5M9jnZDXwhGfYn328HbpX1kMRp6EXWdQwAyQetRVYpzU7ZqDmg1n1CKgeMGkDZzWwast3ZRoGd1QamQvPJYy",
  "key10": "3Qmk54ZQF9VAWbs8ykofAvkYmL7mAQLhGm7psQby2m912zLWDnxBhXJnZkcuF8pxNoaDiqeyAdVNvsJuM7xXrj8p",
  "key11": "5rMQNtwCkRKhU6qo6obe4xd2oiceRQQu9abWYSmcWXQJNwWf2rj6WiWJeQ4KRXyrWkNCdYm5LLBxaxUxtwUbwLtr",
  "key12": "2pms2NYKXrqNuGxFDbPULczXYmeLXuMMwSqAdDvVnRRzJi17M8NAeX6LjnZypp35ExcJDSemmzvCus862KTCJfke",
  "key13": "2UfzwnVbdeetEFactBGXFRURx9pj6LQuXbxHVHppWYBAMWb2JD8KF5KuN2VrtjrfoHYKb8DmqHCogfsoqiy7WMu2",
  "key14": "44JWB5zGMBTpT6k7vC5363cMYwFp2AL5zG7nfUQGfAg1AuoBdBna2exoCnH9MX66aMukTjFstQtQBZF2ifseq8VA",
  "key15": "fDscQ4dkSeZTi9jDwRdS5HpP2YxGPm9tb6F1rczmx3WHQ24WwknUeEs4sSebSQf8ubhKysGuQKb1nAwbsYmi923",
  "key16": "oyWyffeym8jhPCpbbNFWsCXyQiAEcR7cu7aXeep8FbarepAstDUq4DPrCpJbCnVp3fHyQ81BEuHP4ToWdMj3ns8",
  "key17": "27erePq846G6toSx4Z6Z3pX8t7rqsbwdU6fUMdaBC9jRc1jahbs7FJB6LZPjtc79Urz9AKj6sDUx8EcNReFwTCob",
  "key18": "x5uSf1eTEBfnVTSFJC1CynFsgTz99BKehugx6QxwWvAWCHvbq3KiByXi476fn22ZYriATzEv3Yj1136Q4Es3uVy",
  "key19": "2WycGHAmG3AocjTDp8dsfsbUtHyqRn3M19c3RB2N6dmTYyaEqKfqaaycT4wrikYs31x1KgTbHRb3k8wSXWEBhUWX",
  "key20": "3LpxqXpcFDPZYjzSeA5eR8Are9XLBoax2nQVk1Q7JYaPPsdKZMUG4K8nVbWC34XNg3Zvn814n1rnqj7ietbtmZXq",
  "key21": "55YoZR6zKEjsgSkstMUENd8HuNGE9A3LP5aHzGnZY5HGuG7FxjBvCpyJxbAiCirh2ve2sc2B8kpHRTGTDnCDWExv",
  "key22": "2EE743tVCdrw3gMe3YJEnz2fUpfuUPEhUJVYeEjvL2hLL72mFAa5ngKtPmbTDWzZcC5YRpGmMFc1sSifKroLvLkj",
  "key23": "3PqXVEYNexmmRVtVUvizit3BRyvJEy37AirkadnhDaaV6ihuyLiiBaiawjpa3y5rcAxvbsEPCSbu43p8XtXvA4UR",
  "key24": "KLExumFN76sqxuv4iPaRh7yekBhM9HjXvjSSkeaEVDJStQJvD5g47s13crWkZET7wGCBjVb94UEwWMmaoicwFTW",
  "key25": "2W2V18g8kiLhgdREtUTvA5J6JT8AN1YzR12n3YVm8h4JCkPo3nxbrv6RNWCik5imK3pRhCam29gz6jpjWaB3RyQF",
  "key26": "5EP2D12mBzAFS7qpf9Y2VLn8eUGfmeNpzq8J41krqF6NQLSVDKFULRJR1u2tjsccnxGQ8A6fgVCy7EB3xt5vkLGB",
  "key27": "55GDqL5pzK9QmW6Xr4Wub8Dudssikrges1Bn99hfK6KhFambJj9jHNBFPzZxjnaFNXhQXShXt4YYmipvkxqbtGdt",
  "key28": "dAuWi8B7ntZob4upy9yEydP4UzHygiFnSvE68CyRUtJMKqEkJC7sV787XYCDj8Pw28ySCBqZHsqymrk7hRwcnTZ",
  "key29": "5TRTiTXW9pRiyVxMjD4xKsCHE3juaacThJxdcn58nauurkoUqaA2cwssNX5JsnytBrqjNSzJgBvKMqHBu9bhWLvi",
  "key30": "5kSuqzeqpEJGJ2pcYWAyr8rzzDqD9YNz5L9jTgvzZ9n9PyJsMvkEwupSSRDXbBAn17mSBdLwnMpc6q3bYgLESmwd"
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
