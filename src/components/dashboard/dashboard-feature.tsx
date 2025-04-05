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
    "2YpgKTUuX9PMMq76bj7nUcRQdzn6H3mddw7Q8KyUmz5VPP7qw1VDx8ArYDCCX9Qar2USJw19bguhX1paagFYQ54g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqJXovpuREG3FuCo1w6TVWXGDkgG5vVqMxr6kzR8hpEgBN2DHamhTNj7MtLDERbNgbhXc3Hii9ajWA2M17tkmJw",
  "key1": "53Na1dQFmQrjwxv6EMC5dKDSkmyqUJLaX8WfNKykioK3fJVKP2yxZu7VyjKgLiByhHswqBqvc32XYhed4c83PrgV",
  "key2": "658pEBJLc8QTt5B8DSJaGyoHyakXhiribhj6Dcb5TQvt37kSnS9sG47PwZrro4JThhrwsgPjbVnT9iM424z4Esu2",
  "key3": "5W1YL4sSXm2wc7tSTKFhbbPLkV41b7vpvCnvtwXZBuYjVg9sS1LZwmzDhe78PKEdy32XWPFgySsTqrkertxN3E48",
  "key4": "pqdwXrrGZLfHjFT5qJdbKPhUg9sG39oNHHiUdJPv5kvCzNqwX1M6iL12utrbHhxpPo4hp6TRGTUCKoixRL86man",
  "key5": "3a6niSuhTZXbF4XTb8mnTWLQFufpoiQRomnkK6W7oKPniVm7XrbH3QXveLm9Ps7rdKPM4j67Cvsm3T7XGGMZpSBP",
  "key6": "5N486tgv7Q3yVkAAfFk7QH285wKjMq2VG9hH9y3gU351c2ZG3SNwzZFWyRLGHbXfENtA8kf1RDExozYum5ABTL51",
  "key7": "4rCdzkYfWfCE6zM8SbjiCbzSyCDBprboGoKFVenfix6pLXragcwkzpGg7W9RPAZ6EnNbQoDuc75aocZMdszLZ7r1",
  "key8": "2w2jLyHyWvndDcXqrTyGxrAtHDNLbtXKR55ds2zB9ZHuzpzeUioyi53Xrzh3ToNcKY17WGBjuo7WW9vEGgazEKXs",
  "key9": "VhtJ8ZqQovsUzbSAPEquHYRvpdN8LdAA2ZYNoYt1hJyaebF5eq4AvY7DjcqeB1ZfMLaSqbeF4XnhN3FBUdHwvUn",
  "key10": "5c1QCNMf3jNAG1ZX1pE5nic3wzRydQUU7LrxPfuqUf6rd7J4DrYnZmSiVxWzhZPS3fYE4Bfm7G9x7p3uhmcBHQV3",
  "key11": "4WhtNMoaEE1FKwe67AzdntUYazqthvuhF489dMRdBP8ouSG7p7WNJ2LDkj4BD5awQeMtYjpRx2y8kEHrfwptR4KR",
  "key12": "2DXxgA1bFjSM5zdM5uMhUZMGPqLYvDyN4Xq96zEfXsJmpmMiwyyiyXWrrLzD7AnHiZTxHjRVWhHk5pkMGupjg4d3",
  "key13": "2XhtTivEaDkUUvsxwdzu64pMU5aZoU61BiCufA7uaYkbJuL3Wo4wijry6u4BU9TGpW9ieMqmUKp3fcnspTDqqoRM",
  "key14": "5sFyQz35Vggc9yB3GBNjWg61rCbKwKst84HN92Lkrw97hA41dPPq35kvAy3oWTDbDztThrcqFgdjhpq4CeWdvXAZ",
  "key15": "54xMt2LJkSiinRSR5xvHVXhG51YunCo5TxwpQ7GXcjfovBHfqbzpxUKHgHXUuKyemY12sxHckE1SknpzyMMLGwX3",
  "key16": "5dUdk8ZSHZ8yPPJeQ6YEN2Fwt1SXH8ysZTFFy6yGdixHPDPNn9iyuNJvLy2aUKzgJ7hMMkwnzCMAXgDx4GGbFSS9",
  "key17": "2ymH7r91oScJAggK8Ubrqnge1t9P3o5HP2Xrgabsqeo4ewf3ExdDbdQqCgoeWXGoJ5Pt6xhzNaFZy68oXyKL5bKw",
  "key18": "3XFgryY6Wk6bLc2A9x4kJVHAWgECW42E7J6dxoRJirnJMgYhyfoRDKgibSFExiDUFvJRmvvKT3hxU9uqG7TeJZcV",
  "key19": "hBfHDxi7edZGLyVY81ztcoAk62q3M3ZuFqXkBHcn8gExxN7kuA4t96DYTr8gXbYk8rL3crPNt3Nwo2cQSJtTGdH",
  "key20": "4dDguWyL3g3fjTAYvR6Lj4N4nMBDSwHuatM9aa9A7SLcyxbTRdRvcwdHt98WRbDACKiwKXoWdQcYPejH1s59nPmP",
  "key21": "25AUxveJtbGnGhvqgBJYpbvMP6VxN1bKgVrNegRjvriAafCzaTpd2Q1Hwj9kedyZABYayq1JP57Yjv2b269zGe6V",
  "key22": "3nzBAfpjqHmrnwzSMcX3Z5Y4oaC1U96L1xVLx3C75NT86gaGs1ZpK79EGbRYeRAh9zxsNEyYL8xoZACKLXushCkz",
  "key23": "4eNg4dXiZh9GMMB8mst7RWHFYMEVjwiMwQWYjKZob83djrTSZuVzfMyLKq898BEyKmAKPmQVD1nLMnbmN8gDXhte",
  "key24": "4gXW4tWRBMD5x6295KhrRxEh4evyTpHttqvYZVNvF9NGEFrZRLpX1eEYXFQR5JYmqSW9H7RUSJzQLth3LqztpLuV",
  "key25": "5Gqr6o5TRP3JCfpNhdNnssAt4GUkwTcqoXzsFZyMkJ68chx92Sowvx9DQ6XVcd3mE4r75xpDaXpZYdjB8PjBgNkH",
  "key26": "4PBqx1z71ehupAp4D4G8BJRMmoxzA6wYdbXakRALqQA4V8HSkZK4CzmCHL338LZdWcyjYwwgdQNiqVJAVQiiSG1r",
  "key27": "63mpGwTazoPWDhh9Y3BeDwdDgyxwHCeixFEYcqRPKSJ8KaXz5Um8insBNMRpKExQK9bwJMSrGnfhuxRx4Jm522r2",
  "key28": "vNvwMTN95qaNybJu7DEJnWNmZLQ8w4X6qwEzUXUWpjQzh2Zbm9TdtPr9aDjTk97wfDtwSrBVrDBJhBjMWUeDC9s",
  "key29": "2gkmxufAT2TaSr7XZescpqNiPh8XBeDQkKrgjFJscD3G193eT7Gbp6MUsTQymQXpDsdAV2UhT1hSKVPqhfgrWTvx",
  "key30": "3h5HHG8PQLwDHHsr85bgC1PDZj9qfNap95qpfjH35MstwoAZVsXRAGi75BStjHnUDqYkJpBXYfdTBEaRMGdvdTfm",
  "key31": "sL6L9wux1NLmWtY5xbN9y2g8fe2sCtWT8NCiXHp97oDaENtF9vL9Ztqe5vdd8b3q67m9NheZvxtDJq5X59zZMaQ",
  "key32": "Z2Barx92NARbb6gfxuEWoovZHL8FzeX2TDcYEXf73R6DjkrJfyCQiR6sGGWM2HJGXaaYEGT87YFhNX7HDB8koCD",
  "key33": "4bTUHwLD1aSqTJ76Rxrzaz2rzFFt92pBtfgVxGAo36XZdMoXnTeNExfC71x4FeeEQbVd1xnWk1tWcmHL9VxrUswt",
  "key34": "54thgFGS5LDmqvgk7g5DAHqkY7VYdh9WtJee3wPk3tFybuFcpPnPUhyymGYduBfNhdiHN8pVTD8tHSyziiPL6ZMs",
  "key35": "5LoBxUTET74sRN5L1Vdxyn5sxzC6JhGj9CPAxoKpo5nyiwCBXFuji7HXquZkMCAxCD5NQ2UhbXvQT6bJkS9NFx8R",
  "key36": "5qs443fyk2sKVtQUwnYv9GEry6ZVZ5YbvdeZqEP72M6Vozvog9PEdmHfmpvEifQDwVsPTeDXRpQ24gAc8bSLkJWK",
  "key37": "5rqfzzY9Fy6QLAJxmKHfUFCmPafSvcRYFM4mYrNhsH95k9H9APStdDkcwChTKkwHBwoyTeZ5Awrs5mafGudRNWxk",
  "key38": "5C3LZCLGckVxnRzCi9Yt1hGbYjMXRpEh3vj2hLpgxpL9wdU6MKSuQ9Z3boGqHZLnxxmcmkSAT9o1VBwqHEXtpQ9H",
  "key39": "3NMy9pngMiNCwP6vDMCq89m5fELZjeiPW83egxXShRjX3LSYXwtyomui7e8BdLfacgDxnesg5MHZ3jPVMSPLLAqd",
  "key40": "4bnyPaUAqzrb7jsSZ2aKwEsvBBvYEWtRY1NY6ajHVBXnZ9hAkvaseda22iE9YNkPfULumD5btDkMPEoEFCjefjeR",
  "key41": "4kMGGajaHpkEyzxZXFmpKhagJmBFY6HbV3c6XY6KitdE8rrpMGt1EayJcNpNuYkrNtgRGHpbBzEiiWTqz43SkR2L",
  "key42": "5hNvcWHGs9gdQ1toNqEkNnpRCn69nunD4NN9vZLwpYDYGUvFw6zyxndJVEFKrWnwr5X4Xy94Q3DPNjCtLSgB9Rxj",
  "key43": "rtyuFsQiZYLwFTgk74D4QwMp4Sve514cJv8g8v3ipYHmDyLCBQfvyjsXa9rJw1YbxNLxfMFAGVqBe5Qc9V2gozc",
  "key44": "ha48gnqMfaNXrDFsY1YoLGhqKQQ6y9HphKwXnWoiRX2PUwmtq2WYAUtpUgrvEkFr9rTack63V9rZqWHj9syNMSK",
  "key45": "bVJUJ6SxKk8zj3aEKYByMKFbZb2wm5UvzZiW1TWpXUVX9PdGr1wKWpSWEuh3SgRJudVWzu75R878aW7WtkbzTS9",
  "key46": "5NRKWbHSjWX2aGYUYQyWCWdLm1nLMiXW2ZnKutJcMKETibS1YWDwytgmsrVqZBPCzosZfvuKK4FUSmSqupFEhFUr",
  "key47": "58hEZ8xpKyUacQbpyAhmt7nZDcFomzjfX9xRzRj2e7xshQBvKxqYp68ocGWN3ybjM81p9HLTmP2i46KRDP7gXhYR",
  "key48": "35kwAneSgeJV7n8Qav7FxGEotmPyX56kEYuVwA2dabuhRKxSMTHLQbHrr6DsBGcJ98YPXpCKfjHNLk2ALVQi9maP",
  "key49": "Wa65phSe1sb3mUgnbFXbDW9tvETuxYrEcGtqqaqgALxMdntmTnP4pAWREuSdzEmfwvkmkR6h8KS34VyesTbYpfS"
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
