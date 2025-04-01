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
    "5XoWw9QzZ1tJttzBzTXHSNPXsqqP47qtvXDJpcHoycbGk97UYEDpK9m2S37inkyDUDu9y4EbqDmdKcuXHYk4dDGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqeu2iz6nvtsSoefytge4oCJHkBbeGx555CNtXoBG11SbezPQ25jZkdJhcoXu7De3FaV2cKcam3nmuokSyxauba",
  "key1": "48XcK1SfGG8o6DAUPp2W3ipmS3AMeqdL3aod3if7yAd3rcfSVfUY45F1T4Gwj1rMrizFN6RoZC79UToFKDk2EXen",
  "key2": "3RYSNBXje8rfFpRAu2DEDvopwYfGyJbQ7dYDQrZw5q1HjQiQK4yxNHmE9DekUPUzPjh8UmmN6XYQ9MaHudjp2wMF",
  "key3": "4zvnzQKHC5C4m8GFfSB195NWnezTxr2YpMegQ1XKgHiibWYAN62VvWMs4wTxvyneyPvGBfCT3UtB4jLpE9DCgFNb",
  "key4": "5HHhmSw6tm6k4rSoTkZPnUqnkL3KM66bugG9ZMzBCxSyJrdGwgzufLJGyArBjyXqEg1ynNucVfTddy9vTKsESfL1",
  "key5": "5kFGKGE94qPqm2qdGQU8zv4CBNNFY5UFQPqR4Yzzvi8f41aQMVWxPxDnDWQ13UfGM1gLfCJqWDudMVKJrj9xPW4E",
  "key6": "4iyK4itXdCP6Sn9mbWumhVNSz1etKQBLBabb8ejYG2TVMbaUe91DVx9ZTwJDApcWaTWY91k8b6vodGVR5engoZJs",
  "key7": "4KXLuCEvruvF29xYTefHk7vvttx6xxtXtFC2fgLaMDqCBd2KZ7r1uenj2TUzYbTchXqDAiP22PTybqR1JdohjKvf",
  "key8": "3NuEQAs8rx6DvGw8xMSAnw9shLfAdAoxDoSSA5BbeLvGD378DpcFsSqLKNvB7BC1nELkYamQpuWuUE37edTfUqXM",
  "key9": "5mAQhn9ERDYoNU4uGhvntVkmVmNJC3P5hkPUMMMEoYDEmM3UbVr9BuvYSP395bun8Y96FHk52ChjjfhTEjiAD6hF",
  "key10": "ZHjV9EN2f1ytb3XC3d32J1Jiy74zy4y4Qc83eWtt8nw5mLfubCLWAdB62QhGS9cbHxUvVgsf1CwnkiCipCmJioH",
  "key11": "3UA2G8NwSfugwHr8duoxZKYtk3TvxtsWFz7ZjHDeFY8Lh1ipNVY4zGBTVJjPJrRUnjHVKMe5C6Rwr5NuRLFGQPdE",
  "key12": "5FWtMNL8LNqQNoEuYY1k4MjP9oacSbZrD5nBTrEzUkJp66DEm6UmC4nJ7AsXbr9yK4abg4BVpH5Tgv7QFXwTarZW",
  "key13": "5a2deJmLkemT7UcjhwjsKaw58CiZh7sQmcKaoT7b9mCiJ1YQYsCZZ2o4AhLA6UZ3XHjzeKTGoMrLPzedPkQ3ZSo3",
  "key14": "3p7XY6sykGyJP2KY8RykYJ4JVJoM89bPJFrDqmrYgtw1s1aBzzTqCiK13Wby35rkNNFR8mVpfi8yNjXfyccVz74V",
  "key15": "3Per8vdxLjTcfXUB6Q3CG1H5oi28aUBd8QVn4qcMhJgL3ZxXdvonz8npzEQ7UASMKXvyr9tZRCyCszdwG4F9EwCY",
  "key16": "m5AqLncwkM5iBkC7uvcvHZx2DCTUYAcB9tvXWWrSPqi9UftD65wRQheUybeeH4aamFpJFC2kdtED6e3UM2RZkWW",
  "key17": "2PGWabyia4C7uBfCWymygA7QNxVsC9FVQH9zZLSo9T9V4T52LQsmbpMQiseBGrXgPaxbuRz7Um71SwuCBPkGUaqx",
  "key18": "4XEWbpxtnn2gaihwUUMFavG7f2TDDPs8epUohjDtp5X8rYbDfXEScmj66HoEtxKRhS88HVb2WWscYEUfHeie6HyS",
  "key19": "2oYRiP8wbM8aqToReEChvgDbgdfCvj4xd7u3ycK9cmE6mZSLn9QRbhp8A3AFGVzRpqbSNBsgybDDyWKXMM9xRABs",
  "key20": "nycjr4hjCYjit38eyim2pN9PwBXPrU3waJ1sM7L1WN1kYQpEK8KuHT9Bgy4SADqjzFQsECM5RXknZaiBiaNevuB",
  "key21": "3wodyn21KeH3gd1T33keih88dyJhNDWt7VoP6LbbHpJHqMEP6RsfL8P6pBJ9Y2Pp8RcnGzo2THV2wLqkYzGtD2f6",
  "key22": "2QZ2YMSoqZcc1bePtxF6koywxKd9oR7bUdPo1fA7xBGvu1u1LMwcd4igszbthcdBcsk5HcVvefHDbufqNkawjvM",
  "key23": "5SeTCEkPjoNFyWvHXE8ahvxMLYaJNnGghuxE4WA9JdXQX4iutT3Ehj1oXw3nPawSdMRCBTuGqAXefJnJ1mo3a6kv",
  "key24": "4xBMLRUbr1u4D5zZexnnqwPGi6UoqzMYY9LMHAa56eKUo8LBGYBMMVkPNk73PqxxdLjc6uGPCTwgnwgnfzybGn5Z",
  "key25": "3j6zEVbTm33CtmtzunTJXqnKA41ywbDXEMTgbmSXA9J8568UYuU5VhbofQd44v4MMeJBnEreyhfHWfd6KGdpbgBF",
  "key26": "62tGXa929HRzowt4ByFUPAiyXAqutuLwmd98XyQaBfMWjK4VyE7HdQbjuL2UJLG9wTRPEcHLx4Cm4dL9jwMfpQ3h",
  "key27": "2f2d6apUyxZnXhszc4GUaEQbLvsHJn2vLs2rvRYSGPpZAwUFKcygcs3xxx2rxcRPoY4M4kUScogYxMhfFF7SR6MK",
  "key28": "deaDZeiWLdKJ8PinbzLR29sdU7EMyjCviVhWucLMnZ3oDBEMVHC6xxM6s1YzvnECzEeNUrWYnBTqWviumgbdYN1",
  "key29": "4c61fYknBnJWYoVGhsUcJxCGdMTn5rQ9WmdmpZRnEFL3BwnS3SCTmLpHmxf8hUb2TgaMGxzMWbZx3MD5Zb7fgKNT",
  "key30": "3Vzcs7RDEM6EAEbGjvKHVMtDfkJ3EXYuX1NpExym95Emm8udvndtk47sTXmYsaqUxwhVbjairAVVPfY9YFBBzgxS",
  "key31": "3JNYb9jNhK53novCkX5xXAhLeABVgvfhAeqz5yLWb9pa5y8Jy8NUgQHZwNGuoc6SVS6Mgi1qL9x7mouqY8JzSa1M"
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
