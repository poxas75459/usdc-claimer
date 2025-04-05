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
    "2co9ApoJTj45ha99kPeXBdr4uzmA4Ed5CizpcjPPCoShMrttRjFPbnfciDvRHVVwTbvM6jJibZDEHPSZa179kFEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XMmGg5SCbWCmxcpCK9ZBeHjcEKGi1xS4ZpditZqS5kRCREdSg6oc7UkRfcxXhvbPN7MkNB5vUn8pvRuftr3gfNv",
  "key1": "62SVXczxUEgsAEcLpU2FF1p3tWH7RPHu831HocE4qX6HwVSboDCj6CyxCdVHLiwBQgcKUHJL7STytcJM1eq5ofXj",
  "key2": "KcwC3QHUtsBMgDx1AhidExy1bz96GGDpJtgWi6X7Ns629mNCDWiwHJFMmY5UCMYVzLgH5zFPh7wmBC4aCX2Dxun",
  "key3": "4oouQyeZ1ZzN92SrnUwN9qx92broTa17HcoaXFJ6FBr1LjwVu7jxToscSpKdYd2NNua2sbQbCJ52puZS55TQXujw",
  "key4": "5gvU8BGmmNzm6kBvho8gdTnFDaLtY1CJDuxaAMHs6j6bziwDUs2MimqgPZs7ZphjuMPU9TZGuoCqkJ4YHUeHwtKN",
  "key5": "StTozLs4HZ6ZLjn6dzt7V4XgsGPKJWiV1uN27ns9qH4wFvfGKoJWUAo64e4tLk57CTmcV1yp3sWNywsZbsJsHdA",
  "key6": "3p1JK8ovJijHGCexeTwnfeNUEFuFe5bQUdR1mdt6ersV5kge1R5qMkpohYfXYgJfr6t6RYU814iW8t2uqT1fpspd",
  "key7": "3X3ehcnVBqe6zW267UcUPNmwHWUitXvhkp39HQqJrcCFvkf6VUf9P5sub6Njj3upNPQgL5KySyqux9wCdr2Jkzna",
  "key8": "65mzotZciSxTXPwxoy2DANZMx1kCNZKzDED1SYzSxkdSA7WTN7keSWuhr3NVoUNAQ7uBc14vpMcgLbEB2bG1XSg2",
  "key9": "4VY2WEx16k1eNbtSZQBzkDVYsjuPdzhz3ZHWQDcGbeGFeBPtP9UUxBR6T63mmaeVSWYuGB6KvcE68UL4UqJnAQDg",
  "key10": "5AFsuTahdNHvz8EWG2k27QwKEuuVmL9jYQ9QtZmmFoPbssKaKsbDp6VXreYZaBEBpAvUSqVN12vT2RibqurfC81",
  "key11": "5ZjnZ163x5WpCa8KgvCqeShEdQBjngUaKvhR9QLkmwYsMQFMTDLprkcYCEgVomXSwZQmmuRRCbw5UUAh7hpZdYT9",
  "key12": "946Ao9mwq8BqSAQwd4f4igQ8wEt7iyaWMHNNJyhCRA8ecF9DqDndvARptACWhxNH6oShaSN2qHs28B8SxLtMEa4",
  "key13": "3J9dJtNYx6KeovnaL5J4Vrpoggnfrk6ZMQkUsXwaJQYAoZW9E9nMRKn2KigdpArEeP5AkkhyDArKbsUZxA7eBoV4",
  "key14": "44nGQnY6VVTnzKHdqPhH8NiknN6y7hteS91dtG2JA3girH7K9edvKSe5nvjqcN1Wc9ApeK4PrJDnHsinntZQo18p",
  "key15": "24anUgs2EStCUrKH5EmPphn7SFtzfjVpoXMiWBapb9TuoeXoKzACbJUbdRUAqLDb1TWdGNQyPK59uPKcWnvJbqDZ",
  "key16": "MaYoFeBXwAsTui3KykFtKDsH128uZdLYMGvv2CVAn9BZhWtvhLc7NC69baHfkcm719cxXu7fbovwJ8LyjfoTnp1",
  "key17": "4WanYbBZ26Mp2fGY3YwGY1ukybDEr8fnyfVPx1JWGUhJzD4kuqhNgn6X8aBbrESTdgKnzX9VFx4PDArTnsVVwnuo",
  "key18": "62JrQRuhJZzZxsSpo4go8i2w6PSnUemApm52cPihFfEoh3ciiyBzzXumzNBXRMtP83fSDq2m1PxV282T7xiPsNEy",
  "key19": "5B9nnDXnFpQHWJnKzgEpipxjPFrRAK8pQTEc7Ap1WhQ9kxPqQS3GhcdAMiiRHwTBka6oopDmf3j8dE9Dya1K3oix",
  "key20": "3JwcfLcgZnNQcqNwohiPgz29RJym8yWhsZ4BywifXtrQHm1XmF647FoGx6DKFBqPoWj2JgKdve8Rz7TnhG8owWH5",
  "key21": "2YcEcW3K3zaNaGtpbcKcggzwmCJi77x7NYW63iTCVB74iDB6TiEDRLJtVkH5owoo6GHfgWig5G3YFJNve25gjwiz",
  "key22": "54oFmpPvfywf5dJ3WNkjrMkY9T2aaBgeJpEoq2HByUNAVweiyvaE94neNqipfPrm3BqFExy8mrTc7qM9g1ib7mf6",
  "key23": "2vxScBxt1W44UEAnw5rvzdr1Kz6PJWo64GaD8fbSR2VSoUYMo1pacyDJh9LTnGbrm5W4oMJ4j8ANT3c6T34Zywhc",
  "key24": "3CaohzFbfQXasEJAhZBjESjKKxTkBDsh7wzYCjA9PmFzMGaQo5JFfWjAbRCsDCVv1eNyeth7rrrSMRSrFKaL5FJy",
  "key25": "3N85jcYcwoNnQ6EDfaaDz8eePQ8uGyePkwGPk3MEMYCyU17ezQ91Ce1zP8aizyPh5sGcziaJ18uGCDcjTwHyJTEV",
  "key26": "c1qtxk284yLoTvaGG87ZyVpUx17v178Cj81nNiZBfc4SEL4FYtTftFx6b1TfsqxpGnKQohV2aKRAkbkMiym2YFU",
  "key27": "kdW6iwmEGgYkT2C4oV6zLSvJ86pPGKsCFMVX1j7JQ56T5Gb8vw5xVHYcmJxrUXYvNfL1VgWyR9TezyVBGk1gAbf"
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
