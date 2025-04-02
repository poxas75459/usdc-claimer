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
    "rZhQvHy1LYrjz2wXATXnekSwygadsaPFAKrDhcgcNEkkyaVPVEKktcDfvdZzgGAw64uLsHuGTX76rJh4sCTAC2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chzNvuNgZNCEGZHtogyu8rnGAKwznGPVaybnwtAbERtZNchzDedybD6a5Lt9SxUXgdGf9Ka5wiRVJaDPbx35gnX",
  "key1": "295RSbd7MhERJMoDBpHStdLguRP4qz3kBXn5RBN61XbY4gae93ic29P3yZ4JmKetvm4QxhdNSt17PMBTz5NBHYrA",
  "key2": "42GERPatdX2tyYgUUhRaVCCuRCTAxN31bQAMixV4LPUwiUhCMxzpkCCtwuEk6NECo9dsACV66Gy2vdCfjc69Hvfr",
  "key3": "LdYdxJnLZedtzBBN2N7jNspXMbp1598vmqbmgkoVnKn1jg1v19q625e2qjTastm33CoexKosx7oniyoDZUg79he",
  "key4": "4iMyNRN4e2hxuHVJZjVVG9A2e8aYBfhhEP1rnpqmzc2DHjQWKBrLRt33hAcieUC2skJZYbxXT72UjKQWqQh5Q9Fh",
  "key5": "58mjv6DuK3mvbYitzmbCiKpb8pfVXXeim3qLv6V72v2cpNz8qQnkNgeS65y586qbJp76f4GaPiXx6wHFYBzB7ryD",
  "key6": "56rx98oB1djLiKMgqrY2tBuFQeXRsCcbeFGgLH6Zn3axpkqzvKS6r383bbrHDvCRRubhpZLkqtYY6KfLwwcaLDUX",
  "key7": "2fH9WL6tZPNQ1ivzAjZFPnhf1N2VLNy65SfEnDRE3WkJgwEn7Q1sDULp8rVFYFVvjhwRaxcCeLMau6hugro7EUb6",
  "key8": "2XqjmJgHWnSKTW8HzWSQniYyfwct7zCuhTFo6kXyLbS8HqhZStJUGGgMpzpWQi8R8JRbWxbN6n5k7RXLPgdcFHPH",
  "key9": "3tE6m4GRQiqBhZj1U2ExAKZGctCvCbhdWmeLZto1owKXukpwQ9HFwtnEZQViCWDKjPvsnJ1ERMe5s89GBYDFZFs7",
  "key10": "pU5VYBpZtBVnNzRZ2y26A2uKHVxKbRvE1oDTa2MKxNV9ErbWfByyywqvTZcbg7yW9ddbKwD1efN3e9ggiMZFmxY",
  "key11": "2rSALDHwiorqS9bvUAdxXtdncDP3S1TDHmNQUTdfd1hawCambUtTHsMyftC1iDeJJmSdkGY1vVpNW7gs1wcnJn75",
  "key12": "4XfbC5GDih9pGEhyjXRvLBQczc9pamRoTm2BGrM5BfdoQTU3vG1cQrjXXJs1nsLusgpM18jPBceXX6hq6dr4GEAp",
  "key13": "3qCCcd2FCcKZdvXvummMZPwQqxM8QoZMs7MrjP3uCP5LcxFDnhuMRVshbHDZ3Vw34WG2CVNARvSYSymCTaSyg8LC",
  "key14": "ebaSjiZux7ngETahaRaaHQuCcmun8FwFcVaMSdCD1todR5z5DxVNXoTixhzxQRDmg1oRVcUsfZXCPKejyq5WH4L",
  "key15": "2sdLJZhaSEnRnVMi8H2gg1rvk6UxJyrK92QuFAsKmLU9Lo69y6jSU4jdyYBfdwAzD98eYLiZ1BCmCEQfdZHcbSqS",
  "key16": "bDRsd7rY3SAu1VUZvvhcM487L1ARFxKD239hqqP9Gi3vUucFzEaxxXkMKZDUs2AZMsYuwWYhj5Bcu3JdafSJrm4",
  "key17": "2LLagFX9nmjCM1kPf5JUHrhKKA8868YTpWM2yz5WABvFNHeEN8snvhEQEXQ6frSPAmHTWBrNYU8UpiSrgQ5cqWK7",
  "key18": "7C24jtbSKRCCJgj8KMH2uwywvA2tA4ctXumJk4xj8vqJrLrQB4PRkJuJ6mTSQKBPLGxNk9GYu2JngbNoK1sKjQ9",
  "key19": "3QPGVJLorjYDFer6RTiQQS9VAfkrLD8LVmc9RmarSvVmnJyDmhz6riDznHyY5dgreBsQdjodf6caZiaf5NGt5fv7",
  "key20": "51hRXxihDUa7aRkyKJJgWPwPwwftmqW5VW5J6Rr8Qa3Y6E2yNBMFwhqnKoaQ8Yo42gp1jBPmb6Xj4mSqsdpX7gZM",
  "key21": "5c4wGc3j1Bcsgp2AnEGJhAdRag5c5b3by9K9hpvBg6hHmiyK2k8r94VZRuam24QCsC93xWgFwYnrACcrS1Futy4H",
  "key22": "54wf1awoWPrwwTRH59BUWPH4uG8V9QFBdRKkamV8AZ1338GzPRtWVpMovPETf91WhDdEChjazPKFWLZVJGUDeKR",
  "key23": "3HgyskZMrhdpKmC8xqLnDv7b5T9wQjhDe7XDgHtB7BNRioxi7fGtdifNXaPJQztrPsDibbYsnLLcWYSRDdScxA3k",
  "key24": "59KSsw2tNtTvtNztmhXnEs8dn7gcfNuoU3r367vJkGy8k1Dqnpx2RjVvYCt67DGtDXcAYqtzWGx5rdGzrd6a4hAR",
  "key25": "EnMvUbSmoVLnweebFeMcjhgXz8R4zDxJPbi2ut9KjThkKgXSNX31rpCAdutKNrv7gY2u7WxQWpED7JS8a7c376p",
  "key26": "4nCSRjzsDkpdrep7F7MdT6KMMMwv7t5f1Nimwrro9wmzQstTpWXYtYuPDLSbfWWgjcTpLLNfg74wCav8V35DL4uX",
  "key27": "3VC64aBAP8ZM1sevPmpEzSzW6dAFcH5uSTy8Xosz2FPPod63YGWWGH2Ee3zZi3MNehCTNWEvJtjLBQavCgyPG3An",
  "key28": "673QiXTnFfMXFHNLtiwYvXU9D39piUfxVKwiWnJkmSR4upMcZanHe2Na3JcnaT87B5oNBd1ZhNZJbfQBtJ7yLinz",
  "key29": "38AGDT7MjtA2Zw6cXPC4vkvB9ARkPUf84dZiXyCpDqQmRc5JjbhxM2dCp54D7yxsY5MosMVNWUB1LmNTuttNdK7Y",
  "key30": "YB2AyS7wfggWXotZNCpkzoof54E9uU8eFNMciQ2hMDFA2eyeK8g6k3aWW8xSnPJnwm5x7NeSnJEEH48HsxDPwuS",
  "key31": "4M3L4bTPFUnikxzufiafesm1B5B5CRoXxGSfdbbnWUjvQnG3rJMbyhLo2L4ULTzscXPduT5N38JDkv44JYJP8AX3",
  "key32": "245EQCxYYL1mFnC8QfxgXoTpUghh5qnmmGr7SdjXhYq7gmEz5YLeTsa32dL3xshHntWhhxYVFEaLTUTKbRDEoKuk",
  "key33": "4rD84oEzswkeCHxnNzqJcrQ8qAX71dTDdCYmVjBzzstUEmdt62eg4HTvzWUVHXxd6sN5g8LQ8pVkE5wjPp2JmHzh",
  "key34": "45U6zm6iS47yUobwiB9yPJkK2FG2ftTt4dt4gGQs46j1a1CDJqKVXZbiexDZZ3X3vD3GTji8jmG1gGyf5Qa3XVQN",
  "key35": "27zF3r5QvBGiv2EDDaFgpirPVKMoUGcfENxKoF6UUfeSWQqUWAg5GNXtXk65HZMHm5tnubrZTH6oU5nzyRz4uAjs",
  "key36": "3QU81uTfg7xNgRLP9UP2Kzdya79YuHchCxuzjNcqZccNctz4bmkUStt6kzMbeBYNC7QvhzUmiss2mnsNYkKDfavV",
  "key37": "53p8UaaKjhu6yz55QvUTpggjnHB3WtUg9TTXubAqe3gtXx46JymXt8pYuJCyvUwCMqZdCEZJJ4sef1RkJs63gsrh"
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
