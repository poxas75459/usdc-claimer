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
    "4ZLchvEcx6FkaEjFEyr5fVupDHWF5wKn4jmVvHHgiFxnRg1dMnJ9Rv6pAWKHGmra8zTgdrjmjwd22qNtXyAtrBkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q87pQvWXjfeJUFzd8Vx6sinkiWTGiApXGEBhbZGnvpRtQYLxNQK8M1FgrAf65FQTDECg3h1qJXTxvfPJVjvWy92",
  "key1": "4z1n4HYiR8Hi3WRAxEX4GDRd2d8jC78oQSXn9cPCYxGHbKhNDttR2put1YZybmnRkKT8HndQdRQTVJjMiQ9V4Ago",
  "key2": "5iWxjNwgYHjSWfHMWx94uCJKmS8ZNmPAABhWEPQUXxE1bwRtBKAGAir8PTFcpMufvxrEuGnKh8UTaGmGi9LpvkZX",
  "key3": "4bzQBZzB5gHfkZA1eD7aZNxu5HPM3CbxP2FwSxGexiudd63sR6zgqSgfE7W7A5SdJcWfn26y36pB5KnTdYfZY9gh",
  "key4": "3hAo9Jmt3D1Yeo9DDZMcFywcKongRYsn43pyx6wjUg742gakGeTepD5HV7YMcXaMsXJGbTMqWvQCFzC5C94kf542",
  "key5": "3yHgfq9UC2Yoh5RG4CvYDjfAVzGrZdXr73jwHvU54Bt5xA9fLRvZ3DeNfAp6WeHRcJF9JNQwQ6ijzvM8u5MBUmhK",
  "key6": "oEvsHKTuYNitxXVeT77pq6Kuu9nPCU2QVogJFYAFUNmxFZUNzyZaxESuPvmYSqjRzYAg6nEKtXgpJWDGJ1TPjcF",
  "key7": "5UUSK1nyHyRUX1SB8MgG629mNqXLUFCaJv4HsUpjh1wTM2pUX6jLTKpUAhyXZPFBijXoTHubBsUVq4i7v9wpjC5U",
  "key8": "5dq1Uat5uHEDtQwCvUXq3Mu8YvawSjJWhHXd5AxRUyfXkGngqHCn49tMQt9uiBpgvsYcZ9Svz4U1QwnxVCFUJHvU",
  "key9": "3Cd7o9PbZMyGbtVkNB6D3RXz33Bgb1AqTgB43YaWYR2LxKn4XAcYXfbf9q9FjpY5yBYVHzkxrtPn9yM6ebH6HrSH",
  "key10": "5A6cmdyt2iEvTPQ9Ce33FMpTmdCqfxANMpi4Jk356Ajjt3tbjgU37SdaAtY8ANWpp5wj4gFEmxM3Ugua6aknitPv",
  "key11": "43zdqMfnMp1rSA9wWCVCopN2mZ1RDqb4csocT2SBNwznyRdRTBK2RWdnHbUQ6ZLyigNkjPdD6Zh1WyPmiUTbVmjb",
  "key12": "4F2oRQhxiGU3aSniA9FUW6mvtNPRHfvMkrso7uRndSxmNwvUKUXR8Hc8AW9A9jjvnbD6cyoJ4xtA7RrLqDao5oRw",
  "key13": "2j1G8CekpkU5VLFrhL5pCs2RxGcyFkic4HLSiUzRNW9rPBYzttjFKPoXHr6Grxr7pShD8M9XcaYafZj58NLfGgX2",
  "key14": "rkw6artCnVEmGboCvybgcG6r3XhBusdy8idmgndqjv5LzpewHKWbAcecLjYaxjV6Wc5vfacZGzZioasSHRxUBbV",
  "key15": "5jQjnrv8DoTdYUVitFn5iRavaaiMwc16Um9VUEAeVRgrUDwz531REydEJodsGSHCwX541cVvmcRNFJMb4DUKoeWv",
  "key16": "5aefHjWStbub7EKBLu8sfRhnZg72hScKoYhRQPhT2ZmbQo3nCqtCwaQwtme36MS4zd7GKMjDKYCebKve4uh5uBFP",
  "key17": "3w3UmNaRD9ezhmkogpMDDnPQqQsDbMoKVd2gzrLV4Ags3Chk9pCXXxwEFdg82RgD5GzycG87nFMzecMfbUigecvn",
  "key18": "67otqo6j8cazJSgUPAiYKeBoeFBXFZWkNwdfMEqziisPWyytKtHaGvDX5ZhNwHYcyjDhmTKpibFf26XBaiq5W42M",
  "key19": "67Z7pDBynfgkYDFApvVNMcMtvMTeMXig8pS6EeWEiCHSSHdoddorEiBKjDPyJLBC6d4fKxqMBakGQHVewm1ZXW48",
  "key20": "4hhiFMTwAeTLfQGj6wfnWUZLFShRtWvDpFh1cozyBDfohLWW8BWxhkh63z25CD5m9xBarB9b1ZNzBMuRYL2DBZqv",
  "key21": "3jzRbzMceActkmTLdASpVBtxP4NPvErg7viNJKB8LWGXZ4RepQz898m6EeTT2sVrWNwv7cfHfjdPQ1YJuTCf8ix",
  "key22": "3ghQddm8M7b9QdksPMZxY97EDcGsubT1jNMHmGAYYgGG7wyfXJYGL8rbTNm1AgNui6Y66FMG5JExLAwV2dMcZ389",
  "key23": "3fos638hNJ9sSxFH5o5DeAYeT2iyDTrAEdRXmTRve26J3vDxy3adphQpYmoCBiJXJqwxpPtdQCRDz1TYZhp4owLR",
  "key24": "5RArpFw4BT2GLrnmPvMFJeSfvEhtiJus9WkayzVciqHfUV6EhRHbJC6Mkh8VbqunnMj4zBvW5tKEtjMUMHSmDteq",
  "key25": "3wwvjTvTf1LYpmZQD8AiR7WS6jh8rBgJvonJEh8ygo4kwnGfrLbbct5veVYZX2ioRYaaUHWzP2ZjbuFhS5Cj2Mne",
  "key26": "3YCqiFRM7sqcf5RxfkUHUoCfidpgiQQWhZkkDdgiRDNLwUG5CokQSZ3YisM3pKvFazruph1Ey6su7PRyd7egMdpz",
  "key27": "2ZZJAmXA8B4N4xW6UUjuTXND82nDbBsUsZUyqHvkNN4tmCk5vegcqHjcR5VomvfK26cUJdW9XLk8VEnME7h5ZhvT",
  "key28": "2wh7FM9SKVKQeNxQyyzqLkhwcbH7pgRh42p7iWar5sjqoNKGYNMsy86rwpeaa8R2psh5NKXRLPFSmanVPDTHaQKx",
  "key29": "2jHR9UjYLUSrJKcnRZ1DoFw7JHqnbChLA4XXzLrEqbo3tVtFErswkNxvrtcHDBvuT6buGHy6tVXf71GQrQkpxT4h",
  "key30": "36JVD6BgRnwC9AAjre4qF2rRqW2EEduTkYYg5YMHUCTt1BYQ4d3CJ2yeQNmtkRmVckgkr81PzCWEqxGThN9iDpxc",
  "key31": "2mJ6ZRqredX1pYJ4fwPX2cki2EqbdocviM7bUEeeoDmKq1K2h6mVnsmCfNNd8VC4upJZHTXhUkw5seWHF7kLAiPv",
  "key32": "3Soj2z6kPTPbrJwUzR4HM532uNJwBbubq8U73H6j9eVaWs2w3LQkudZRF4vVDZBsRx4vL5Ff4BjddceW4bgaUyVi",
  "key33": "4uVNAqTCDaTssRs3MaajPQpPvJvFhytQArsZZ1DM68iyg9MkWG7pw9tshPY9gtP9kuER87QSzJzobZc6kuuA9rNg",
  "key34": "3c6HuiTF9rhEfVnw3aXYaZM5cgybSFeY7162X9PMWRgJ6ZFgqiVWddvwLfimAcy3uRtRKEXNeBQ7r2Um1UaCMu4D",
  "key35": "yKtS3Y2FfxAddPiR4XWpactk8yvAamd2VKohJzgr2Vr9vuhmgpDqDjJjMo4PdZMdrj2wsTdFfTPgXjKkPGYdf1W",
  "key36": "4xMvwVXCGdvdD7QyGv8sDAACtr6VT86ABu2ondyy766iaFfDxbSouYoffxk1jBzBHt22xewCEVhdnPTQTNsLNyRS",
  "key37": "5f2eZEfJLe3fffWcoeJb7adADXM35mPByyBfxeLykeDZpPicfH7HhTNXNSkpUX6zWJsFvQ4J753XTVTLyuS6EvFc",
  "key38": "3KgyxDLPDyaKqtY35VZLLjS4gAtup82CuJVVtS84AHyAtgHYjJ5woHL33GM5DBuchfexcxeezfuRk7eXaQcXxSsT"
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
