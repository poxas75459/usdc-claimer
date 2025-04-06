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
    "4mKxLT5kiDhEMLgTVNNvGHV52gci9hcME9HLJPKfagVNmUE2HQgaNhuYi9vf1iVpepcyVGqkt1XxskVzCUaVb3HB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6fP4j1jARocSoDbmQHpVhV1LvpP5i91aGD1TxQUeBH3i3LQtMVEYbd3N6teNQdTm6VcSpHw9gTc8TeD5ggpAsT",
  "key1": "5C1cAGrDbroaC6tSDHdwL8jprGBYcdHRNLcRG8UNsLkHKJSUDd2qfGCoyK7HgXYfm5DRq2LTGuwqxXSSJFezFrBX",
  "key2": "4Q5zi67uS6cn7xUQU5aRChAxsetWtKEFW7HNPUctBmjieDu4ga4w5vUWpzejax3YydLDG4BtTQSNCDUxKcUzSoJ2",
  "key3": "2RPr9XoidFziqorYVZTP9SMpZzbDSBxck6SNTyetXf3JfQWGm5TELnv4zcLBKBczgRe6nZu7KbWBUWpKAFBAouoA",
  "key4": "PdiynS2xaBV8Y2Ty92rv5uDrUMjp3EY6qQfuPTK8g7WtHhANsXy5N2qmhvQXAiA39DRVeWFmeamdHwPcanAMMwC",
  "key5": "4AG31suPw2LsFm6nNZgWZhaG4gtzPBdELSRHaxRM8Vs4wi13WvzzCzzxinVu7fgsQ11qgzPACgdWeRcYb1898YaF",
  "key6": "3hVPmgWijWBCuhhCE31fNw9sMxXB9tFjVGUajRVXqt2Dc89dRpxZgGDZcV21sqrGmV5VqCLReHu4VMTebuc3biZ9",
  "key7": "hc8HAJhJhs7G1D6RTFPfcoLwR8kd8R1ufeo3bmrAbdti3cvVPSPXxSMg2FVd2LqzubYgYtC5a2ZpbgsTGT4uJ2A",
  "key8": "xSUhvfdXcXvjafuR382AmG7t4C822fy1FDGLec6YMi9wYYnSun3jJHND4EhLRfTTPnSX6qrBuMBvgLrJmYKEiN3",
  "key9": "3dtpK17TYSJjpEzSyusV5NnBakySn4QoL8bgSbxoZGx62AvaMrD1sk7ErhxJcVnmFaTin12owTBDXpPmLqgnYYzv",
  "key10": "2jPtT6WHfB7dhKYMT24QN8dVZoQsmqTCQXGuiCXC9VQjuMMaZgicCwWfHLDyq78MN8tpQDVvDzab68u9wVgdi4a5",
  "key11": "3mhsknVm8GZtLVdYsuRB6ZAoLFvP7ir8YuPM1LZrGRMhNkRP2EJqSyDQJMmm3MZP2QWfANSYmvg4jMX3L843jJ9H",
  "key12": "5WrczkNUKGTSKougVjYGqqQtQFNv7Q7pB8bi5qwA6sQV6i73Ypw3up6QpxKtM2ahuR873R3VMn3wYNkCAtLw8Ckm",
  "key13": "3EsZL3SyPfd8i5QsAaiy91G2JtzeNw8zMUfFJiGMKUbTg7LKNYcj12c2HioAzqr7d3QJapQoKRdYkcFHgqSE8jvz",
  "key14": "2insKsdZUtoBT57oJ9FZT5gPD9GrMXX7GMiWue6wK8yWpZb7ieVtQartk5mSC5Y5WzjxB2ferR2xFDqdp8qWgsLN",
  "key15": "p4vHJP9vvJJahAYmoLwfjkqToSqDpkURRLbPC3azqgPXw867idWMndzcokk8xVpFeGp15qQYJoamUAXbWYFxicR",
  "key16": "4qdREzwCSmjyJpi5qwuVk2Fst74hkQjKJ4UzwvWvC2w6HuRGdD3ndTrZroWM9YqoxA9MjGYKBcSeUXrLrvPvRvG8",
  "key17": "4HdWFxEax8Nwhs73e15r5YDYPwcpQSrboznRty37NzJq6nLVhvwM1W7bYRAewvGDBq8T9dJ51Wa69CDr6tsvZJE1",
  "key18": "33f46GZAouh1tePVj4FXfcSj6jtuTr7njao6LJ9SAEmLXcqXNJzHorDfrFzzYw5NgwC2ccQ4HUz3xUTRFNEEdZrK",
  "key19": "54JhwzEoyu4xzeGwMk8GwmDdXYRTENkxLKQXknoDycGTHHa3yY4km9BjuzLqX6CeKcs2wNZuaiBczgfnvJrvmb83",
  "key20": "35DAcmGUANxvNGpsXVMYHrWPJYwHS5rMiusoZDVDJLvfTzPYSiG9aRwE5oRfiwiwjWzNmCm6oeAwqTo3ePmDwwud",
  "key21": "3YzbFZZXWMTmHcwBrxuwCfJSXdnvNuCY96N7ziDun3khRNHTaod3JJw4GXPgaAnJm1qT7nbBvYwHK3FbJ8t7fx4E",
  "key22": "4H5BrkLXL6zznCrqoRf8D1TmwqDc6ZFuyVZBfSGDEZtcH2KDWKTg1eBSZqXHjUqZncSZzv92umA2ocaTSZsgS55C",
  "key23": "47VM1oq2FYbL2gqXuZDpoTe6aSZRsugovWcoMBWJz6M1SjqRE5p2LMwjzMPyQfW1CCjTLaXKVkKi1n7ViauQAQfL",
  "key24": "5TJYGT76APxP6Y77PYsziF4boUJ1xFysFfM1YqCEf6vCCSzFQ41UGQEm1Cm56j7XiZSGpWSCnYjEux5XbrKdGs9Z",
  "key25": "4t2sS48hRNS4bVR2USuCyzpDLxGccQui11m4TA34z4YpLgWKv9R9CahsPRAbZyjZFMANKUN2modUR5CrDEw1aqP2",
  "key26": "2ZLzroGuKHx2wL3UzQp5UDLAPjSCcaA7964pREC1LS9bpExXFSEsrhDkt2AGSsY8yGi7WSmmV8kfuBPNVeFSjxRs",
  "key27": "V1Rgbb5wqCd7bCJ5aEhQ8ojahyTNh7ou7s8xQ43XGFpU2qDTCrgA6bDWbJhe12b2CcMw1RVLZ2zd35QpPdYirRL",
  "key28": "R1zcgdvWK98z8ciMdDybbE1odgw7sA7zZM1nx7rpDma8np6q5Z8CtwTJ983GukHyiXuL5d2dqPkJpo2tkE37wUN",
  "key29": "CdnhWQ3U5NMW77kATc6sySm3StpCiKZGykCx7i1Z8dStKMK1rHwRKWmi2UVonozLWs44vZDZNycwF83HG6F2WYi"
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
