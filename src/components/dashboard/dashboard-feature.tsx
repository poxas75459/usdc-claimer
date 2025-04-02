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
    "nFSfA8s6HjwVK83h1hjNju87Sy1Hi3tHD43XSD6uZey4pNcHgBF59W2wF63orGio5vZNeVM61hVdCGo5K6prTph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3WcNMRRqjJAdH64Udo3TJitS2FY38tvxiQLu2qArKc5MQQeMmGYcq62Smi3Q2jHhZgAKdpcMJC99Macg5nzjbX",
  "key1": "TXJ38Hk8dacWGgnqfn9oDo3fUfh6HB6dF3cRz3etosGeUyd9anTVdxVrwWjeDwypZ9mt3GNLrG22iHwGwpGLief",
  "key2": "5bYtkasg93BkkY2xSBTcftb7TQ4xy7W2f8w2BL2hxcwGFS26kRcCmcHXVvHQXX3vnJJLkmtQDvgDg5ciV5UfRdGX",
  "key3": "3VLwyV8zbqTUo4EBXQyDvEK4rsr5UWyyvxJ8PRZtjU89wtwyszBXgVMiwx9mDamEzFiRjnKa9b1HEo7xnnHUuyF9",
  "key4": "4xxevLpDBDYdbapMBhMHYJqagSDqykivqCv9sH8QtUyDSgTUebURPyVERM2Gc3ojq7t4CZkQvc3mLM4LVzMA5VnH",
  "key5": "4gerAA4rSBWhsdLBgAwZ9BJSHc8sq9wrMTGybpn2P7Mb8ygDs6jtKbwa4jmovhP9RfNwFhW6bBHuBDL1bUJ8cA1H",
  "key6": "br3it4ZUuXg9hny93ynp9873cs2tNDVptyWh5Z73u3mhprDrkXWpV93RK5TZ7JAkVi9ku9Q57ndtvY1MaYQS5Cu",
  "key7": "5zqsVcthdZ1ogsbsccj97BBgfGSiNxiVaTYz8NXesaoE7HBjk9jnWkxbcUQjscXX4wi7vzH5YeCLueQLfxMKsf6V",
  "key8": "4JEXDZWTaWHpEJtrSxsPXtRntmfXxJ8a3FGN743BeCjxYFCUMXUezF55ucUBZB9iG5UhwiZySLQ6uM2JGWNixquJ",
  "key9": "5cHov7upwEzShGg8fu1gmRmjFnCL5A9y6uB73m1ThADNq43USpYv3WCrm4Kz4H6emarVgiQUrbH79VNKbzz1gcT3",
  "key10": "5PTsmxaefdMKfG2AMptAEqetgLPoYcH8EAhgqujCnFqZ8T7svkhoKuARnay4viGU8wY64FdbypKN6BhMpjfixJvM",
  "key11": "21b31Xn7EFFs4qBcmh7oUCjWw7nFbc22iGfYNEWs3ciDxRPUPsNRdQnZEAwrNciQTFivwoFwjkg3H7rmy5e8MHuf",
  "key12": "KbZZuiAmuhPPAXVdjDZDhv24SXocVSga4DRTdV1Cf2r2AaPdcQJcjWjNHmCqrYwyTgJV8uDV3umJLwJJjD628cK",
  "key13": "5f4WWnpETVm6Xje9N1o1DhhuAkVq6n67wSQvYBsBPWDXLwZXZhxLtCvvtvbgFD3oru9CsgLCNBAJMhsbVfnu1oDz",
  "key14": "EchCnennJZiwSJPxAj15qT2ceDpynfBAPuY965LvBDaLB3mbRNfBFsMDZhsCfLqPevYiGtKgR3PBcB7qWcv8hEg",
  "key15": "2k8Dj5afzxCGZALef6yMz2Z9PrGRqV4LPMvWVbbDCUtTuxxdsR2GvLUBtU1W1rNtRhfMtwNgnndhw6479TaXBsqS",
  "key16": "2X6hTM8M7ff4wo2ZYRUXcBCNbVhmJpWSQwjPwLaRpf4KNuSp7hnKCVPpSdjpNs4umhUPew2BuAsyjBSMaXWxL2xQ",
  "key17": "zR75T3KqKGhENyuGamb3yzSLkkdbB7VLHgxrHjFPKmVG7dU1cZavRJoYu1E6BiYpgwher5UgmYZCudf15YEhTRq",
  "key18": "4HTzUh5BfqtoS7YNQXYC7LveVDeNmTKodqECyR1X4SVdVHiRjVH6Kf63an7FM3U6henV8brZPW2d88MoWuZqTvPL",
  "key19": "3pYxQKnYoWigRwZr9McJLbrSy9w9k9peHpxKLHrcGAKJBqK2YFmrhoecrpmTyBR9kSKbbBQuR8r9nWNp355ycdEX",
  "key20": "2qPan7E1htGffYbFJVVDxmuDit7U4zMJZ8WN2cGqF6mAWJUo5SsFJ6RrSmskZsL6VVTFa9d7Zra5crFWJzhVh28B",
  "key21": "4gE4qySRFC2vsNndHN632Gi4jb4Qkx9G3BXvVf7rus2EQ6z1N8s7ZSerfkDBqu4kXyHT1XpsjkmPg78abbuxMmxw",
  "key22": "4DcfJzUZRYVV4aZwBnqvnifSfvfVQU2XpX6sg5ZMfSuAo9ASwCS6HFwB4rGNBm2uMUeby8oqS96rjG9NkgWaYnur",
  "key23": "4FsNcWFvkvj1S2qCNreLdMPyFCHupWny2bkvPAiNSjKbAgWig856AsFg3MqYuGJ5mbFn9ALom8LaUDWM2ZTqWpaD",
  "key24": "2UQY7WanbDiVLH4VhaR5ZUDWgoXCoXSk623zrtGEJfNfcV367XUWeXqGZVEFYaPCXH6pNUNFTRchR6jeJMqZe7Wa"
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
