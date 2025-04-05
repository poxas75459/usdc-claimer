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
    "4R8btHy5dgTeT1nWXPRX7T9CNDp2XgRwTJpJRiyNwaqZf3VL8BL9Ws9wg3KxVmQqspu97QiPZQZFYNzviqWnV3sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bdx5X5xoCWswPU8YEvVveC8Q5vXxWdEUp9HnjeagWV8D9gvtQg8e7UuJHNn5xG8W1Vzn5hUDDEL6GafzrHMfcQu",
  "key1": "5Xt9WPEDU9UB5RkVS5RSqVCNJtV3Lp3SMxjiFbPgW7GjHaTCnUzxQTpeahXKSmBvWBqLxwWyLhrSW1AEbuuC2cPM",
  "key2": "Wz2xfyRCTHV72B4zDKVfNHW8hK9UQdQYh5NARTo2VMgUtwpXzzMGHizhgeVFy53KnxCuC5foncdkpJRA23iQp9s",
  "key3": "2WWmdo5dRXa9Z2pGXH8yR8XoBG2q4gofLiZ1pAZ5hXT3YHzBhAq8m8GeLy75HitoAS6UuU13d1gi6oAkJagp1EPv",
  "key4": "3a5SzLyxPCNQzgiXLEiX2PCZLVGfXMnwZFanS9D1xiRpVFKGn28LwrhxoSp4ABdoeRK8GhKkFgZAu5FdTvAhM5YS",
  "key5": "2P6SUDwSV3dCq9mLB7ZqzPwQviWvZ7ptvUcHF9tC9snQ6tKjPviELguFtsbzEyQrNxrL7KY3r8P1P6vvpgeKuW83",
  "key6": "7VpfhcndYJJc1u6UZchHST4vq71kqnJdDPCiULzRHoQeebP7FCF8uiushFncaUjbMBhABjH2oNNEit5zEG4hvGa",
  "key7": "5D6SHpCAfQvYVLRbQ91aLRX74nJw4u9krf25ZsVW2sUUW8ZL1iGKeVq5HcoouYnQtWcWmHReBdbWHAewHowucK6R",
  "key8": "2SNG6zpAiZQz2Tcho8wqHzK2s5NZwAFphHVS1xEPuPCjYRtwH4zaSaQzojfjg8md32rymvtJ8HSVkyE5aopKXHEa",
  "key9": "GQDXgX7rZr69uKFx9rApibxNQrEA1QPGrpx6vGJXVq68CeXeRNDeCDb6cjzo1n2YF3msNxubNxd5PW4XjAypHQi",
  "key10": "mzU94a8ASVqbCL4kkGNDaYWfH59wyCuVwAWRFtjnrX2LGdMUACbFqEa7drMPQqY3WXgwDzdUVaBFRvis6VsYPtM",
  "key11": "2Xa2sNCKhA3Q4j1qERczcYNh66E4ejcusGsZnAWjxCsRRpFQMuuQD4jQUdLAvvikFtuRj8E4Y8zNjyEVevRzZGvp",
  "key12": "4t4eHBhtsgN9iyqxsPBFFsQQ3EaLAjFeN4T5J98rzxv9aFjCpqUeYLv2Qu7ugnyiKihHbNTQ1iHyxV6jbMYh2Zjs",
  "key13": "3R6Z58rjvBA4zQgABG4Wd1P1Pp8ct4NQ1bwCSb4wwTbkr5VhNuLcCSjPprxqvMotaEPL6ez2AtPVGnECoU58xL69",
  "key14": "3V2EoyZJp5oavPazRe27zsjsSbirEXAYnEKQF9HkvqrHd8PZW7wRG3pBKSjFin3VjTZQJVGJgdZ2fQweruoCfejG",
  "key15": "3Uh7isaRBLUhqrcMy53F2tqMugfkGH2YCUpt3983w7mDhghBHyWBTijvgJpER8H9w5gD5zAmH39Ws4k8ehMHvtir",
  "key16": "56Mpu8ofBRUbosyyJRXRr8wpAWb8PEd79gPMJTUuQVyBJfLxhMUHP8Y77TsGQ43Sv1x3Ltukdwen3F16M7XMPrU7",
  "key17": "5u2tYBkbPxLingfdEJvn83dxYFXzBBb2oFCL4F2KKqLMnkp46hqt6nP425JhtNKWmAErfqx3MXGXcdx4K8iegAb9",
  "key18": "3y9KGJkYo3jQE7cmNedjBQNC1FFa4yC8RcnfN8MJ2UYhNe1nn1QgQDY757txzBCRKJSSB1wRDiXL6SSqzaTathCo",
  "key19": "2WHKAmD1gWiXro4ewkYKSAxUEyeWb557YRzTLcRcxVkxwt1Ug6MgbKHvTf53DUweKsfKnVEzjQwrtj88aN4RdNCq",
  "key20": "GD3LskcziHfyZk3hcKRkXryRUHASo85vaDg3PN87UFgZBhMMt5oy5dqD9zgqEL3xHnCJWFpcHinzstzA22hUgWZ",
  "key21": "4FMqkJEs16ooRb5BMksSVZtkpfw8Z1Wa68iroB9JMiXJ3gjiYhxbucjM5rqqKSohZMGXzbGTRyto9YKC2MmSfQG7",
  "key22": "3caYfSmtR8QCGBBHw3Hv2HZGLsCPmAvtgkyC3jEBgGd3acqk1jwHjvwbBz1Ppjz5rZU3vcUsdPTF7CGFjka4D9Mn",
  "key23": "2FPSrbQ4WRZBmWfW1jyBkESUsddi7pWZZeTb2gfTbMFBvJoVumLJLP1BMh51jwncc6GQBoLmXx47L2NzcpU21173",
  "key24": "4wK2rniydc3M37p5pUWEisGcE89WbmmJqFebodpw8cQB4SSvRP3uytjwh1oc3kLYDdiMo6hyRmFx82kkQQWGqV1R",
  "key25": "z23L1XAxDb9e9MxG3V8TaigLnZgQsP74MEjdbc7Mo1pfLWk7jEcrtDmywoZ1jBenSxNWAr6EDPDNA2keHD48GGV"
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
