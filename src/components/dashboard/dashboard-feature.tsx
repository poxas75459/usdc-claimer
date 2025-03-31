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
    "ikxPTLUMDAhVibszJu5fK8p7pRqov86E1kkXsqDgpNSLjxpPoP9shSitwqu5iWrsmG5vbiX1DrexzqgkjpMhAUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XnLKddLs7N19MDErj9UaxGtfyLERD2WuyC4VG6t7h7oqF1SC2M8XuPuoa9NnXgrurM3Enom2XhhvXrqWZUY2zU",
  "key1": "KcPCUNuLDWMVzzoBL6WbZsFUQqZceSLdHhF8foxvBn1aq5WsSDRh3V7BB5jCN3KsUfChZUpTEHjEQHGNVrmKUoL",
  "key2": "4w2XH6jBEc84CVAgZniJJXYFCJo3MadmRiSrDHV5iGGyh9eEkx5BLgQunafswfG2cPnmsGf1cy2Lh2n1phgKXPRU",
  "key3": "2TE2F8gREDzWLXDZJRk2DxftvfGuZuLec9chAVQvHCZCnMSXehhEriVb92LTftzLFmzhYuPkcb7kq6GbqSGzPGnC",
  "key4": "24odgxcPBBjsxnwqr7y8sSbuZqmSQAHjMj1pFncA1nrND1rK685D1PM6MqQ8xGKB4KbtpEgWqpB75eLKMGuot8PK",
  "key5": "5F4DY99BwrqqV3HnLABVJheao2MmrTRHgx49XftNnPRJZWVvoTxB76NQBV9y9UmBt6aRcefqAkuRaxquXeYY5Fwj",
  "key6": "4PtW37L8TFsvAqJNxo3vpoD2HsVtuKQ75fZnDmZDbMGLbtGvWYmaPB5M89cBz1ysEi73ibqysY3zYxyEEKxxaKNj",
  "key7": "54ZoRBYux393cjrgNWJWJ85r2DjwqWdRxG4c95Zp72vxzUNCkR8cT6vcLqFzPPajR3WzGS7jXq4Ud5APhXbtrGhm",
  "key8": "4gWg9bk3r5ZQwh2wTnuduqnpaiP7m4Y5SY96GLtSPH6diDqwmz1WDsw9wqK7eHKPbzd1BVPvFXN2ixV1cSrNcc5o",
  "key9": "5neKf6QXFyPT61pQ5Kj5NohLGrrpQdYt1ULiHM8y9bQE6qd62FeUaKkqNn6ZGE61kb7GcAwAYcDDtgpdJNP6u5y7",
  "key10": "YdSvJijRafULfk3JsNuukwAZVfeEKASyq1Zdco2WiuvgW8vWNQQBdJuKKZvd6aRACaChnv8iKdy3xQKPi7tWgw2",
  "key11": "2xu2pBwnWdX48y7RN4X5GV469vpw521wBSDKqB9Xkptq4eLbnRCg6dZudUhFZoCNwBjvNNqar38Fa7rJQFSqxTBr",
  "key12": "4eEHRTqyg8tYfZfytmAUo8w7yihp3BfGZmdkViEbnXSFAtBzX8G4D61NNepfdg8hZNyCSVkNTSeGtaCyw6f4CLqA",
  "key13": "4yDFTZTonhgDWHcTp4dqu5a2N6QUiWt59wioJZCaPeSPZ2Rw33AxLVrTQ14CeV7tt8emnWzPLNEk89ajF3RWvZwX",
  "key14": "3SWJRh66qGFRPGZYqmQzf6yv4vNav2geAA6VWvrD54XSGLLbipTzuJaGdRLBYhRajq6XDRjvrLuGPJaVpcZce5CL",
  "key15": "3BktPnN83qtz4T5fSmDoGXhMAN9JrDhGqfGhFu1akvtM6HCebkHedzjzsqn98JrzwmEkVh1AE5nwhMsqgQ8nzUhF",
  "key16": "4c8q8J9tawiQZXsGsREcxZPzgvwgh1wuTW3JcM3sk9aQ1zFqakwMhcHVpuNCgU5krsLCfiqcijSmYo91Z4pAcuP1",
  "key17": "33eiGGzqQdZd9VWbWQwsj9yeUPfUr2MYPjiMPpnjuYwGQXMByhkq1cGi9xhg45xacYiLax16Vfa5ai2iFmTcFA6q",
  "key18": "49k9oWn5PtFaMfr3qeDcoToTekWSakXSYphe7Hq7YvqVbtA3z6qW9hyJw1XEEPvwtPtsa6cdiA4HwVMds2bwz6bE",
  "key19": "4FwEBAbUR2jbocd2TUsSd6suUk5oUw8USzSTp6EfQjHPyQZz3sst3Mu9Wd1yRjPtszmnk3m7wWzUdNhyL7V1D5sL",
  "key20": "2PedPVuSF3cQQdQ6zbvMUTKLJjXnQb6vc3dVUBQRfZ8aSzL1Jek3ZUvjLXR5ZKBPR3eMaZ1jgdc5kaGciWns2pd8",
  "key21": "58n9hFjgh3sjXZ1LfwiMtGLP5UjY11SBUTEyPnacasQ3EUqKNds8gH5hR5RwanhBLhkeiHNsTZkHRTver9GKqttL",
  "key22": "4RoSj1AESLZ6car42dXL15vnpxZysZemcyTfWse982d59ca8c7vfikuLLLixWnYuBtBDsK5vzJ1zddZaudmEecX8",
  "key23": "UKaJipBULWCyW4WHqQ2jJZJoPkbHmYaT3BstsEk9eftzgpsp6Q6j2oo9o7iizdm2jNJJYfLmmETrdDyGaH4GWEA",
  "key24": "2RU6AJe3TjjvH6RHjK5r68vEyRY11zGkToED2yWNMcxfL3GYug7F7iD3chmRz2iJxNtuBzN9CvWdNLmhaXrsmJ4k",
  "key25": "5w9a3P6pUeuSiaogLZKEeJkJZvbdQjKY9LwoPshauKYhwzgPvNaaQ4CD2APAuJ9aUBV2LUN3NZkvR7EpnpkSvKuu",
  "key26": "2vyH5YQohYWdATuXXoXh3weWFnLSzLWzTfFE5tmeHCjQK9r6n3nt5Uk7Zc8cba3MWGzVRxik2opvSYmv5eXCkz7X",
  "key27": "5QxZbbvR68UmVwvJMqRvdGZ4CWdeaNstFFmjZrBC4EDgMdcpsTrMD3vGnhB6GxnaAEuGnscYKKvv98eGffiwphbH",
  "key28": "66oVNZPHPSq8eLyNGAV2EM6WGK7mKF1DnbfF99nupiL9DuhCrrbpyWQHbfaWsXb12Veeabi1C6a3q3EVPat9jPeV"
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
