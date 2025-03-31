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
    "3kyU2Qmh3R4ewEUBzVVz4tb6Qs8CSCHPQPdwCGZfPkEYnghPw4EMETufztYRXyTU3MCfZC5beKCRYkuJgfmtmw71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFjQWQLBqnU2HBiZKnpuPo7KB6ye3UmwcstAay63DUKWfCgiYdcqixgUaRTGDT6tpwRW4DSHBpndUHXZ2sr9D2P",
  "key1": "4uLiKysjTdRY7jLcVvq73RgDtQMLEVJADMt5p4VLChT1UuH5p7CRu3xzFTsYEio1SoEV5NdvVSh9BEmtdqnjdJyi",
  "key2": "4KfanZ32AAfZccX2LrCFzrb3VdZoDAeyf9pgFLfEoVQdGmvAEPxZqy1ZtfyHmr5zX25HkD2hZTBMeJrFYj54ArCp",
  "key3": "2ssDrTWRXbmtn2hDEycMNjkRjqEPZfmExZPTWFfBgb4pUxpXk4fYfeL4WCULs4uxWk8sZq4LaqKwDLmS3gDEBhDG",
  "key4": "64ytbjQRA5zvmybJMzRpjxrwHGgZsHXohP87Yc4HSK34yy2acrrpsFbhc3ceF5ndAAKHoTpded5pshAAEKD4jE1Y",
  "key5": "4vowTozgBAyBZiWUG1fsvifCDS5G4AKeS91N23aNbNjPGRcK5zMrcCgLX7ExSTepYtbUrsPW3iYydLNqoPciBeXD",
  "key6": "5UUEDvmGqgM85WJ14DE7sW8cu1aELph2BsfzNAephteMjmKcQ1Q35okZUYiHMZCcCpaPPjZWqyQEqSct1AYtvxqb",
  "key7": "3ga7hJtLfGHK4UN25rtzsm9PCRWbuLJiXfRsSmG1E3qkjQM3se8KMsPec825TXACrZDzi3aFwk9mKkEeB1o9nfg5",
  "key8": "3gw7tDUFSvhM6NDRp4nrz1Fh3QLBDM6bYMPhg5Y6bxMRegeexaxUAmibDaTHiFSA48chYCyd4VbgmPmMENsSCJu7",
  "key9": "ocH7zs9PqNYVPMEFr6b8ywvAnVjZ8KN9M8xH5WXTWhpP9xSqwh7bAMThxSRdeLfChqjkbcWzwzoFKwkFAep7xzg",
  "key10": "4EKW295dgSeo72ZNMcwKYwV3wpLDCcBid23EX5Xqxhn7EY5jmo4iYqnyo9KNHUR4tLKp9moaqG8YtD2LKefp6NuU",
  "key11": "29JL8QZDZAHRGwgsqX1AqZbr8yieXgZhqcCKVsStB9M6L9NBC97RLBkYaH33W4QgdVxuEi4yg9vXQFZduaf6C7CB",
  "key12": "4pxj2Atw8iHEs4SbR9jtn7dFzu2eD6s2eM6Pe3hvCpQSpybYCioiw7jpPMpsY2hkMmWcfddJgSx6XGu5PJ2wrC5U",
  "key13": "61n9wKJ5ZqhJoL57DEmK8vnFvZkUngw7JghxFQB43WUHcRKnMYUXhN7aiUx7jZHJLo4zTYHqaYLG4rgbqWiS9Ywe",
  "key14": "T9f3MuY5ChBCCLzvzBKUR4raPvW9iecMgHLzCxJ8ND2ANH6XNB4MB8gkgMm7LsLPs8ZjBbLQJNNaQH76jy52FRo",
  "key15": "24JGBTsa259ZBVD8A8fT1xyB8JcT6tXg3x5NqURvyqEAzRutRSg59BrqXQ3rZf12JLpW8DUDxQ16vYpqJKE8Fn5a",
  "key16": "5UQz82mtVDcfb3bKpZZdKRYQ53p9oVSFZ21hCPg7SGy6wZyDGhPQAtedStzrqGKkzpwX39mFz5rYGDGH2PKCUxJ1",
  "key17": "3UKmVsD9r5HGVoy1ZSyXXJ9TVcjQqfQZZU7XH1cGMhFfoVbM6MdFFHFamDFqbegwqZXD86HwvwYWNNSAu6AEhpuL",
  "key18": "2G1Lbmmiyxxx1pkm1JusaPtdBjKF5QMRmrfdkBo1a6ReSa1p2ES8Rng1u7uxPEGAPnUE5nf8GvacMx2keedVFyYr",
  "key19": "2UkRodXSBFxGJEKa7Mggc3ZKRRrj51paLTnB5vXZRbDHGK3eZ6PZLhrdsrtRmRQLvK3m3M7tjUYpwSJaP7GSgbWF",
  "key20": "2uQCLcssWcPej2ciZX3Sfubg8Z19fcjWdDdzjM9c3euEQrByVuKLwJyPwpPXYpStUuU28HHExZkYBKiGo4qqJ4zQ",
  "key21": "5xwxC3Qqj43A5QZHAoPpGGfmUf5ZQ6DwWGnMHyGzigP4MVjP4oZoongY2E22izcTUsRPNaZ6ARQGV4z4a2DqmnRs",
  "key22": "2fHUuZf6ZX6dtac8WtqSP4x1cUd1Q7tRJFN5d8QheTLtxL9ayDQ5ybiXpYjivGABrdjUQtbGt9xLPAiEQjKKkGhr",
  "key23": "3WpW54USBkQE7cSfR7iHZ7Cvex1SbpLSevF9EuaLn9yxkawtWNDvVv3iWn9cF5Efd2j9qyQfSoA1zgHN49RGWNDi",
  "key24": "2bEnZEcayKRPUKVETznrSYoHPxZH9oBoSoZ7kNmdrH82oEHNK3FUKPRWVjH9gZQcvcZGgtfPcVsLKkmwBe4pHgJp",
  "key25": "3posARYogiZsFngkNQxa1q1v1e5eRJx2Kw5r4kbieEUPMHRMfboX89Hpjv9nbXCRRoyTHTge3HxdA4XKr2cLtE7q",
  "key26": "5M8rQpaJ8KbvNHkCMLaqZryymKNDMmsbYLL6zgbXeEERNKkcSHHSEvYP5feNfYgGmf69umtdHt7Pq5hF7Mz8psoF",
  "key27": "aVwFY7UWTpZW2eMpBoK4sTbjiKubHaoQrKwUyQsUdetVs12HEtd1PwKnJncuJYyuky9TTXWqau3bSWLVMhNv6zv",
  "key28": "3DL1n9XTvXuXQJnfknZmzGoyPJTtVZ5ijXeacXwr13sCWgtT197VsFWdp5SAFnpW5a96h2dciUJ6nuM9N8JyxNpC",
  "key29": "3hhQJgoLhnNiVcTf6xfQxtgVy815w2GzaKu7DwEQtLsMHYVcwvBVQePJT3FnLwUH63nX2h2W5EAcMrVAEPg7Rt59",
  "key30": "2itkP1yuiRCSiEeNAcF25F8SfKVRtQiMUtXxY6SjfiR2TG4h9KZGeUf1xZqQEipBm4gz4RRFo1kHysH67cFTdTxE"
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
