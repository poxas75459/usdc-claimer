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
    "5AiBHVMFtF5rUyk94z8z2YUJYGVFP68KHZ33VRYeeW5NFJ4LuHfTnLmGHnusznWKcsTN9MF2UNzALTgyWsGQ7he2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rv6w2T8tqhAoaWdF5vi9qWk71QUXyixAmBYreTwd8KpqvHpSGAAXEi5nHRqePKvnwjRGajXgxyjPeehWFvTrMn",
  "key1": "4qGf6zPUobu2xEhVbtnkVwhL72Y2jY7oT9smDNeND6taD3LPKQstrX2mAoGxFGwxBbNvyVm9uxd5jwvWx7L3ps34",
  "key2": "25DxC56sR5YWKicJhaiQswnbANYotuoFcpXqg9dwkquczUJWS7NyMjNx31cPa4Z7mvMHhR1PdW6pQq1Bowp6D3ky",
  "key3": "4mUqJEiaLhxGULDnUtX9HAZw2cTpzYZ9gGPDanb4jjcxipDBTK8xRrTKqhnRiULp92KK79z6Pf1t4Uik1tRvXVC1",
  "key4": "2Rmz4GC4fddyvcLPiY5nRshWQkYxXzEBz87BUQY6gJ3ihQrDXkWjD1tCtKNoF7RijNNEU4TNXchvrHr3Tyqx3NNw",
  "key5": "5y6Pc6KC73my4gxAEHCaW652E9sxhFWL9SK22hxyYzyGKekps8CgMkKqztpZbT6oL1CvMj2fmeiMDDaAWLrMFToF",
  "key6": "Qch2PqSkJPLbT6L5LvHLusvCaXELqrd9CwubJGjMjkJnsr2YmQjsdcDkhFEV91xumEcxkxTuj9SkbQJkkonwVPm",
  "key7": "35a1meFgaNhT9vzPgznpr15qK2jz72VjNe1kpY9cQ22w1C51UQzNsYyJCyXu2ZZ3xpTgDKLupeJuxzsG4DLRPU4W",
  "key8": "urJGxN8P9duJx6fpsWiTwnXP51UEbHjgYcuigBTNGcVZePXrQH91XuavL4f6ZTmPYehLjdLvGr9FY7ZHZbZJrWG",
  "key9": "2K9wgA6d3uyzsfPtakysKxEyHNCFkCPWEEgiK7EQpTBj4JzCJaHqyy88jvSTVr5hYgWzd4wMqjeHew38TNvmJb9M",
  "key10": "bS58VV8NDuy2S7NzrFthgJgQbkp787cU9Puv5jKtKCWyWh6jcwcaqu69UG6vGXe5CdX67WYDUWX5vZnWYnB5y6Y",
  "key11": "3G26Xc84MPVKrG3RR4WUsgDs1XMESy4HMcFmHG3zDYFgozF3YfxLQVhVE7ycLAxezytt1CnR4Bo24mNAteyFtBYD",
  "key12": "xvZK4kXKb8nfpxwSpJjyZqURRsfsJs8uKrtLm26FsyGJEqFZUzUTqGNskAQ57dmJJ7uVhyFXsKNtZ2bWNPRuR88",
  "key13": "BcaohgVpnVDKLG5LGQYgjnHUhd4tBjy5cgDXHNqCx1hbzktJdJBYaJiTyzXRSqB8RSDrsaPnxPmdshDjG9zsUbR",
  "key14": "5cxStKpHCpihgubkJgb1GS22zdLdmqcaEyiharvB4wRpG2oPQje1vdD7E39aQ7oKg6ixQVqP4krEbKMndtN8KhCB",
  "key15": "53kmbvaQ2bYe8crLSb1QxE4NGeLzQTmQX5nMJ9URnMFTS7mp9KsHc7GYoGHAk5kUtcYNpddTRYHQUurTndbBUWbL",
  "key16": "5vQf92tr6yDv9ztodf69iMRLcWTvJSwwUACvAnVQDALsyfz6an9XFaqWwXrmsoyeQUtG9Lcf64FFxpuQxNcv16kW",
  "key17": "5tC2sSZuQApesge3U26vr1PFNSC1B8GpbPyjiQdvZqSgR2DnjhMAU1g6z44vEbU5DeJdqtupXSLwBAULyXFuAvLY",
  "key18": "2NuyrpUgyiHAYbX77Lk9Wr33yMmx12W1CVs1D8ovF2otrZVZfhGyMsgmB7tKRk1snZ1vuz17epzzs9vSLCaBxpe5",
  "key19": "4k1bbgjYVPfFS34h7G2pQAZq12kvbxpQiUpQEkk3T6a7rFD53cfasHdi1sc8FJvEoUbsoPwRsH84Bapay6yUP9QF",
  "key20": "53fNr6pVvZxxenGD7pmZKhTT7yAPm6XvEqQ2EJ494QMcFKk7Jsrwx8cNVDs3GxTdmLy7Ma9J1G6vcg9ycunyVco8",
  "key21": "5KxjbB8BY3PgYN7vpZM1LSSFNB3jQUgAQFb4eaSvnx7DpDhmhBVXN1CXU3PZr3HjVu3GL6y7t1sjx4XJgHukW7L2",
  "key22": "aFfi8fxMHgaTzk3XgXhKPBANJFpaQ5iwwybkFAP4ejrANuYq7UsqULiQGpzLdHwubuXohDr6wT6xTbe3mZNkvXc",
  "key23": "4PSpYT4LdASAWrp3sh2AeBaa9KetnzGhDNX27VoJGJ6qjX9xd7H6n5RbTCnkzpZihbcnyKNPDhwuodwKTFrm9XCw",
  "key24": "4L1h1RtSey7MLTxv8WgttYecP4TWKLGxiGgQiBniHBVaguL4uTFXcPmpksDqDSxZTfSb9yyde2Syo7tymjTpgpX5",
  "key25": "2ZowEBmb4Hjt5wmLKjd26tc9rxdn85H87mae6p8nqXKPge71mPdVDapXrokQMYuwtsRJTbvU8fJot7paDbGGn4Gz",
  "key26": "4pUYU1EdJg7P1hTe8fSqBWepBRXh257d3YaqtKg8MYUp5TqvET89t6SBaRa9RqQkZggDvGHcFk4hap9KaMKGoFKC",
  "key27": "3d1JN5QpGtFPfn31h6moiA2mvRCsLzmvKaou31SNaKwgeUaDfFeujSk5p27XxUsaR2jxh7T5bk2PxgZu5K2K3Ten",
  "key28": "61j3msfudf9Jgwx4Xie2UT4tSbvMUdSmWZPvf54eQk7zWSFUExwbAVF4MSDdv4Yret1xyWBoYmA1TpEe67hqDpQY",
  "key29": "3K1xgsLXKrTubMmmNbq8TYs1Vy7bDx9vBwFZkfQLuFBnA3inLvDGWkpmeccqhFryHCqZd59XFgiUZAC3rtMyipgx",
  "key30": "243sGmmkur1wE5KSygLi6eEiA8NQ7A4SF3RTWyqsJCm4AHvSXT5BsgUwhRpxwc4Ha61qNNB9hwFYV8BVb6ZPA69i"
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
