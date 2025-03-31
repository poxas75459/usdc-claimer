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
    "2Ns4Z7mQxoZRD4fVSCFHCqA2n9wqXgoikwgdaowuohdHH4NcNyp8d5pURwj31X7drURKiwDwQiQCgzr96tqTtasd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23JZTcB7g3nnDBDS9HafAsDfH41oCbrddjZmALFnZpA6zr1Z6wwzAD87cToffiNxGeykJbUWg3VfXYMQ7LJ8mFc7",
  "key1": "3NWzyys5ufMdVRQmb3wcWfcXYpiwjYCA6i1cJkSdMqYFtRwPnBtEt5GD27TCXsBCyGimnXJ9hw8kwpXugHRAcwfT",
  "key2": "dvZF1J7cEicbz7cj6EqmNTfcgBBDQ3vb5i1oGxiZ8Dt3xfVMDznCbEFyzrZKLDpBC2onHG9p6z2Ngdkj4BM1QJ6",
  "key3": "4ewTV6H74A6xXPkbiiEjXT5i2xg7QuWtRCiUHr4ReTRXn4Q6dUG8QUFYGtTJvxa1hXgdu1vJDKkpPBWmrSeYqSQL",
  "key4": "2HSWA2qCYjxY2vywirMLMADVkwkkDLh8J43JwdmDCwp2s5gLrtGoQS5p3y5Y4JkDojSiGDSNyDFFE3BWwbFY66cY",
  "key5": "9sDTNFqvtyNm7Fzqh2QefUmC15VLTtwmvugd936HyCyezMEfLxVtqkH8x6Z5U4NWfrQb3RZH5K1qUcdYhu3MAhR",
  "key6": "1WgLWTUWjfgSvtuoKhhV5R1BuNoyQxRopHHEAKjBjer1ui9sRzsbZotAB7eUfTbpLTqyejm5PdMMtWJzHh9FDUT",
  "key7": "f23WS15E253AX6wWdLmY3LeBpnqhwudx7HEQBF5arYwKorK3auRteiabYoPiv6t1mWqqJWqDKfTTPQ2bNmDw6eR",
  "key8": "4bFFn15NBXoBe4Pm1iF9Q221GGVMLm5H4h3pxdyoo7Rpuq1u1zoP3LQdMkCuU9S7jqknvKnbvGJyHYW699TeGuHX",
  "key9": "eRNizACSejmfxQ5BFJK1pKc5mUFw6ciuxhvGzAUvxdYGoSh3V3kZueNk8tbCKDBrM6DsLP5RH4aHYBY6vhY7aNw",
  "key10": "3NscGe5d9hkGEBcLRye3uShKEy2E2SdSEi2jcpngqivbw14t19B1KuEsPRnx36ESfnGGe7pgW1sSxVpzAShFRvsv",
  "key11": "5xuoUMrNGVs44dr2mX74GkHuhfF3vX6hyGEpJ4r8Ca5MXPoGRKS6MamQB8yfrfHu9exYNKhx9GepbWZrgbS9ZAuG",
  "key12": "5cF7Hi4AXTMqZVru9TTiN7d29qczQhWyLuRdjd9gsXjKenzrBJRYzRJNbi9AhK418sJDnr2ED2HSioKPQnjCAYgY",
  "key13": "2viGPVY8dbbhwJdBZF1UF5Wpf5d6CPirLwcyQCCsMVVgWa9HPSrLcuAaubopR1B1dJBcosHXEjjA3qpJdvKqPqVn",
  "key14": "2PdnpHhTvegsehiVNwScQMHqtiJatEt2cmXWssFTXacffDfEdNCP5Nf2iJWnTzQhXbZ6PN21BwWDQaZjfBenUrMX",
  "key15": "3nTHN9GRpeftz6rPQ5MhAjamDxE8gZLSDMAkK1Yo21NwZtNKHegmTBGUZFLLCEhzhTKUTgZBDMz2W1G9BqntYtsC",
  "key16": "3J4VJpDm8ntjVsUDHdC49pM8gAgmxb3V6jxtR98tpHRx2tvFZtUwLuzMkgHfStkaCxoRL1BEBosE6D4bdweRDkBh",
  "key17": "2ZwEBqXoJDo9qnBp138A84WexwnqaisuqZMpQ49YDaiqB5gudUCmCW9m46nfaBMGhnnZQkZdtqkerkAzsXVruzpv",
  "key18": "51X8mdC5nsKKdvTJ7gk9DebGtoUsCMb2A8VysnSQ48sRzhV2hpz3obVLKRkuDTFCn8kUo2zKPyHmpZTxQZLziUVA",
  "key19": "5c5qLsiAzdhntZhiUttLskk7hCSFRWFUzNDi2ANHE8w84Vfuu72St5cRaTsEJj4yMhAKY8EXhRJwkpFGN1Mb4rfr",
  "key20": "4P9a4VheCZBk3aa7qAC7xo6J7qNVPn7MQJy5w1dBZ2bvKSJwPC12GKGB4GrsRX7hpfbmbLqQtCRWwkxXX5ai8pix",
  "key21": "3KBBNRucfW5cM15V91DqiddhmvP9sZXSYCDj9QntBd47FzY3SXeupFrB6ELt71FP4dYhA4E5746Siz1XBY9UREP3",
  "key22": "2Q3o781ZvnRmNX8t8CWWXG9megD7v2DbL3RittK6GCEpqqKn3HuQf9dvxXJswwaCetjUB5fmuTeDqi8uB8Ewb9uf",
  "key23": "3oUa3WWFFkcFiMXXFvWogW53ap7VzVYqqQNw9rSx3aBW8PUdc7GXuY4iaHQTJ5sNzsdwCBPAPwWJdLsgD3myv3iU",
  "key24": "4hiqsssTKRsv9PQafc162mTgZTtZzDC7o2NLJGnkK5TjkZZVc5SJ6JEa8vndBmbEYfFheLJJzH7P5CxUfJKR8fqs",
  "key25": "2nnnK1pDsw38dJFmbX5zZbNfbSw629dgFRNK6DHRay67DeeubYdzumVoC1dKdiEGd6dG1vtmiWqf36SmFsWUG7m2",
  "key26": "5naHpmvVkLU3ibhKkFCtCUMRVQfp23hVmHaEwDNRm2EKVxHK7XHwCGfiWnmHn1opA6ywxsNT9PPEc7zWPZ1HD9Zo",
  "key27": "ZjpjMJPgdVxN1jPfHbs4rMnNSvdGCxq2c1MuPkcn98svKa54Dk6yHLXdYuhnFoMGSZfpdeNHwUaGiAyHZkVBcUN",
  "key28": "2ugNpC78EvAfvPggsYL2vGTkgf77soVz3QAoT9yni78QYcqFjFEPeuNtHXDP33doPFUKvyFKwpuww6RNsfcBFpp3",
  "key29": "3rnNB7jan5KEZijFJ7PA2UgzdrDZ6xzFq6XrQjuuzAhs3VpcywZsNxPnp8We3JaKZhyEMDJ8HnPRQZJYjNW3ASuC",
  "key30": "9YHcSWoeBp3fX6oKaunGD7vXoAp8LBLuxHp8A3PC323xem1GGdSCJoq4UJRYH8mxBk4YyUEibr4Bopz4gPAJNqX",
  "key31": "qvdK6Q5mfmmsB7itVTP9FFPTughNSh4ygHcA5edaohN8821yRsGDRPrEs1LPkb8MiXUW3XLfY8d7GiT5jnvXKdj",
  "key32": "2oG95qdvZ5L6BEqMjWAqtzWc5Si97jY5jXEkNS3Mb1ZNVDRTgNJCXg9PDPvS2wwPePChQtqGJrLpayWekJjEushc",
  "key33": "C6GuyT2qC1KPyAgqdpxgaKKQsRNpAMdoa8A2U6gfHJooVs1eAhSSS55pAQ8QWhW8ALHvrc28gBqJLb5y72XDk38",
  "key34": "5E6xkkfjt5frSfoxgvgKPVVd3KUZieVVyQWWaHZLbq14KQ9A8uJsrHMgbhNeFvHKZC5SqdpnKbkbvxoNucHjkYo2",
  "key35": "23j79Zgk99eRSxrmfFd6KV3R9qvkyJt1DgLTmgG6qEQruoarEEvYwxAaDLqWW8267ny7iy842P9oDbn5KXTP5qKT",
  "key36": "4Jetb7i8WCSzuVS2qLgmGMhbGoFqDGcCmv4RSQyMJoQd3cCmA1pZcvg5e2c4K7SMUjDs6wtdpSAVmAcK2784wFm4",
  "key37": "LdyrgyqhCKfdjt6sC6KArPtdyajMFbyZRKew6jCFZMTpp83G1mnkhNahuVtEWvDmaLzpNeKrYC4211gEuUiRL4f",
  "key38": "3VuoBsBs9GQPrv1z71QkaqKh1S7NrqPZiGMkwpysF4eDzeABVZJFkAN5cNejJwf3HBJiKuGY131G7ccLVL8CZ36m",
  "key39": "3aUoyuHPCfj2tARJzuHTG59oXprrzsCHeukxdGDNRo9F9YjxPYFycmsaZGpY84s9phWdJwREHHw2sGC6tL79DHZP",
  "key40": "4e7uNJuYAQdcTHT1pN4tXoWFFHJxgyUgaZFw5ELkmAeTKqX3RrWrWLdMZs9N27ECPaPmfDpKxMxtL5U3YiPHWFk2",
  "key41": "5JHwBNq6N82KK92m2JHuEnFEV367Nv48BkNeBXQA27vYzUwft15j8Vc91Kx2u4T14LSs1hQp6S3ZkpwqL15beHWL"
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
