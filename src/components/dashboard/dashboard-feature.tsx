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
    "4LFtGWJCp8oefAB1EC8LTjaZ7GHNAT6CRn3kod7NLzPTf9yDJqycqY352s9fETSJPjipW855GZqbTF6df5e9axNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U86o6p7CuZ3aU2mDvXvnoJysgi8AoHu8nV4qU9GiuDB7aeVtxrQH5dCVaprsYvCWZtPv37Qw9L34YautWFW8GN",
  "key1": "yk6qmomDoGxQuZZdAd8FEKRdo6qYXHTbtct6UbNkdXYG2rubTKkK4PCzSKAKJPaVUxpw9bqeXbGwFBUTRmTqdSN",
  "key2": "2K6xni1t2oXrFx9BxigALtFMKAQERFADd45SawpqvET4YBVacjtfAgqt2zL7pe7MHp5JEf5kbsdUVHPjC87CkqkK",
  "key3": "312QYNmCnJC8qaY6zctQSYevxFgwXdSxywEMPYf2tg8L3K9n4KPSiKJSfzHpqW57pz5eoKmmm7FvT99bY3xA459m",
  "key4": "2xMM2J9VHEnGkLPgVd5h7f1tjZFGrD4MJA7aVeDzK3BWmZy2iQ9DFaEJymiXaAHwQPxjhbTigQfuURaFe2Pjcf4N",
  "key5": "5DDWGaFjgzpNuHPXYxPrfkXNBxj2BoCyVx7pYTvpRpL575AVcfVBui4yLudRV2ppp3gCW2F3SfHdxiXYwQhzvwDk",
  "key6": "iwis7qw9SJZ4kGNpNLk8ZHsonvuGZTE2detfBHyxhZf1Jn6dQpqUnx7T3giKVs2W2Z228E2fxEMNaxgR6wU9V3b",
  "key7": "4jrgwWAoNXiSe1r6vH2T58Z9eRGbrWSwv2JbxqDxAbfiPhgxiiNmWzfYYNrXecP23VptAKeEMyyniFoUWX6B8Ufw",
  "key8": "2Bv5LxmRtUVrem4rYAhZCRGZxkZSW8RUbc1GNWg8xWauXzLn9w1YjcktmEJadNQEU3pxonu5A4mnsZsTWup8hQEY",
  "key9": "5ZJhved76gQRj8PG6BG8dV1e8EdMJiwjJ9bSL75HtqPJdcZ4H8kHcCmzfVDXnJD8kLZA41t93xFrvgQrPjjCU4FQ",
  "key10": "4J7CiQop6eTzJUsZPHxgLF8SkaTsPQ3oYZfPfjrZ6Q3RFp2wi1eEoLRha8GUx374ekXwTyiT8YQAzEfRacTvV4HR",
  "key11": "3jYmv2yDCamishGgEc3rvrTGBYoZGVfMJisakmBc36kQU1r8URsTwCDNJ8pPq5VDp14duz4214xsHV4AsRwQqLoQ",
  "key12": "fgARnXCGAJM947nafSbDShQjdFvZCp5bUy2tTadJ327Essa97YQCA2GJzxquKPv4KwrrXMrFhSgK9N8oAFoHYLB",
  "key13": "2dueHVLHgzQc8XvT87igmZnjwejKJdv9fHRKv2aKzNjaDHS7dFHieX3HFVEXK44XLvxeACJ44sJpuAXneLNEt3o5",
  "key14": "4VHcUkzgeaQTXii8kzt1tADn73P5yem6Zvq689eMykXCVqUQV7HbvsBJtoEBZ8kdDsAtxL2QVer7vX86Rg4bu6Mt",
  "key15": "3Fi3gBMQDn7PmRDzQ35P2qwmbDWX4u51tcpE5erHWTsrZCnbxvitU6tcBH2avWbjqd1Ke7vDKjX6y83HjGaXXqg9",
  "key16": "CtrfXARWUwWskioHGM1miWhtvWwgnqNZYgzQLWEZBKTSVyrHfxDNCFQp2g9Ji5DJvViSNMVhgUzPGd7fBWYSUo7",
  "key17": "iQ8rKjEenAYqkraaNgE6tVE8mWAprAHaDE6FUpu94mi5qChcpn4TAqgtmrPSS7EfsZZWLXybKfWdAamK29GXEq2",
  "key18": "3hTibUhnAZAUTrFPfGz7v5PzBgp36CDNR6TfoPrFKYL2osZPAJE8P5XrQUrZiugBHyxwphC9kSC6HE74QDE1E17H",
  "key19": "58NDNoaWStqGrabWdkcwoRQ5N5UpmZinoMqT6icmrrEhhATCN7bsJbSsNcoRub9RSNeuPfhGujj4tiXj42JzU24Q",
  "key20": "4BfQmkncQHXgvyhVm7J946Lj6PzUPZKbvbaBTLNQG2wMSdxSEVHvh6ZeAz1VYfUZzq7nVfsUBc2FW4WCo838KNzz",
  "key21": "3NdBKtA9NbtttDDugwvNpx5AZSmjpkPUcvibGrKAuHTTXn49nhKhRVJY5W7ThkCu8tDVtDaGCLFpDNYB4FiRPJRv",
  "key22": "jtf5rMenWi4xResm5xggKAoCjSU2MicuYyeqGW1B43fn3CskXGWsfdCKZLx38ajjrjdFHX3G4ucH3BJuQFq389j",
  "key23": "3FTRbSBffgNpE83mCMkmARrVZ6xY9Tv7Qeo6npC18jaHLSwU3EqFvyafzJDNRgrCqFd1t35k2UTM3NfyiJtD9Ytd",
  "key24": "2w1euRcpxPKXHvtu5VLZcQvmnCUTAdyKbr4eZxr1usUCzv419LyhGnt4X4ifq8aDWU93jFZdrLii7NbPBA4sBfpY",
  "key25": "4r5jCcuKqW2JcPcJggrrabSjDVmkjJ6Wc1j9ygxqSjiNDFKYiPH9iRFvVixbfTAeSy9Xy2RMUeA2PvysXSBnCrg2",
  "key26": "3YNvHn9yjg4wJ3yQyR13UtLPqqkLddMTtuJVLvvKzeYT4GT8sHfpitt9MZhUFEih8WTYnqiRFB4PQDusPmB6gjGV",
  "key27": "26qBWiaQBRzvpNtMzz9usDGZo8Vx7St3xyCQcV6Afz81YnCREEW1j5677sbskfwma7ncNvCwndDmsH7HLmEF59VE",
  "key28": "2ar8fi9knoJtvEn3JfSemHcEqmZpkqJqFA2GJgLcqHjEFeiEHMNW5qwNfP9tudcnuH4vhymkNHco2zpjvuuCXP5s",
  "key29": "3vfuhEHA4jEGcqGUdFwDNNKegBpomzMXHAFVhmLDBwWzscBsH2QUAhYTWocbDhyNufR4nrv9tLNibeRP6HkkwATe",
  "key30": "3CiNJ2Cs9kpMAAsS7K8j8CpdDv5oUqp7L6NgEBJz35S19EDyfVdknCwy37pyzpaybShVDJanaoGNVVbBXcE3R6FD",
  "key31": "3zQFEBDidDWE8EdEe6uBE2e91Y9dwWCX4K2C1WccN9sVDXQtEaZB4dL63JJgxVFpz6UuqUeYAB9F1Ajcz8YCeazU",
  "key32": "i7rBqG6RFVi8JJXPfu5wuCL3mkV3Hs3G7zgPTL4seEEFPUbdKViZP1oN9uML5zPTWwFPKDYmmf2K1PBvNRdbZjL",
  "key33": "6bpwPfdqhy4qE3XCiYXburG6UnGemN4Pkc3TdsLjoCk4R354iBrea9chGEav6ojqAFLiLu4oKRrkwoeK5TKgaWJ",
  "key34": "2Bkx49YREJrHPKdd8n33rLmV2sC1nCZLKUyo7rrYHRj7EJt6BC6F5Rq6hbaC4YKLkFTaZ351fJQLCqAN2f13gyAq",
  "key35": "22yhdK1Te9NpdrTgwZz1vbRYCnbKwPogfr9pRMp9fnymwmtkdJESgQ8JRRExrLa9ms73tQxAiBWPw2B7Ng5H86Y9",
  "key36": "3s1D7ruudNFZ3NUqjK4MDnHrAvzDpibJNZNDHc9hC2FyVz1SjXx1aELy4pjPuGh8gMZmTVnLZGUv7dsXj7Fcrfom",
  "key37": "67dWGX3ZpLArPXqu5LcNxyszPEGFvpecVLQFhnE9A8Ao8xhgS7H2az42qRsKjNBJG26qN6xNDroUcz8WSVcLSswZ",
  "key38": "3kwN6WQYvS8HD8z782gpPKy5p1tz1whdYDkr5qL2V7f49DLmJf8sdco7hwev2vUrCwU8K4KzjUGCY59iSxKFDC8j",
  "key39": "5sn9iXfh9E2wiGPQpp1SsswJZXUYQYkLCWqoMfjoLqss3GstHzKnpuDHsrF7wFzZ5RsrqczLkyDMqEWCffMBNDod"
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
