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
    "3Dfsu94yxujKy14vPTpXiTzPaXtxmJ3qjgN9UfWMpNoZx6qDsqAp7sniyB3ZjaqJpFBnJ1CRfEiw3z9EdixVSLBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNhZvddLwYVL6PLHLS9s2i1JyadiuMkFft4U66C92yruFgAVKZLp4zrF9aE7nKCkPkuMzT5XKonSrb25gca1AjJ",
  "key1": "4QceSx6Y8GYcEXMZLSCpq9f2JM3PLcdhf49YPZsPcQD9rQjAsZ7AQURnoUNdbVJKEKhgvtB71x3gNTbgxw32wDNG",
  "key2": "fYGicuMoyXbPVVbfbwce4ovxYWD4BcjkNT6p75ZuMCpLBwECFRG2okSzg74LWQkHaShvQhfjFD1ufKMhyoqEdTW",
  "key3": "5GYcw4z1HhrUzCAZUPpe5Y6dqs9UXpoVvkE8hkrTRg47ATVRWiix1aDa2tkhHsHbRZ4vcTjgC25X2R3kPUtz1Log",
  "key4": "238frwhKZnnMukCyhmm5ZUDW7h2pmxL3ks83SGaNp42t8Gw2uhZWVrFrCBFTN2evwdKSJYmqEtyraWXU9WiWcqGs",
  "key5": "2wK9zzYoHEkQhk75n6PEG2amMsCbDb7TTt9SaYvqHNdP1Tk3RFiSUjG3YTEy3xqTWpsybx7QfvCfgYxXSk4Kid7E",
  "key6": "2VMUDqh9fSwxKk8LuHE1Y9Te19yqLF6XooHwZHKuBLTdvxf6NLWC966v2sQJ2BwH3JEKqgPE7TvLSy9jgHTSEHBr",
  "key7": "4WWbXksctriSNuMWgYmY8P16ssuLTpeUV9i2ASex2HaWwwZRxTBrFrn7NYe72PhjkNZzvuNTvQf2ogqw6xxZAE5M",
  "key8": "5s5FbPwpAbKbQVswKVEzCxdnFnDTwTC19Nstze3QEaQyyZJ6Tmj5P7RCQC6afPzS6qvkNDn5abR3a4jVzPzpLjGc",
  "key9": "2XaBSSbRTeVGF9j3komnWhFQMKfikfSHahqWGXLydheJ3qYqrh6RuvLoCrKuasmKU7XvVVJJxRGKLj5gdzpzNFrw",
  "key10": "HyrsNapMicorzJMjAawfPtsPVGa4Spow2qo2XoAtVQ4epUhAx4zbmCs8k8QWFwRbweco3goybuHSrwbkit5xG9r",
  "key11": "65Ak7TnBaorQUDrF79zMYYTXkVnLhdgQDcq994TkF28Hge1q6qHhE1YN2c2K8iftWBbBS4FEWj9D4RRQ7iZrxT6P",
  "key12": "4QK315sybyv85jW7ejXuVTX7PdceokBzEYB8AxrJzQSft8NdQLPUaQCdQFwroEP9tXDYCDpPDtyXMqCyWj42nv7T",
  "key13": "5upRHy26r4EzugdgXyB9xdAzweiZTivQPAeLDAxH54HJh8wHZE4WF3xwEa3hFLefdbiSXVFzQoJonAaHEwdTJvTu",
  "key14": "465zjSEmaPhsEFEZi3qJoHZG4bJ6kAPqy8cQ5VZgFj38dMkUWscnDebXkKGocbtjfUxUMUjQAfg15kQ9jaDP9iQ3",
  "key15": "3hWXKazwEbD82NoEvqa4ZQhLi776yusR5V4J6cUmRCAMLacgV1VG9TyNoRVd74WHaL9V4i1GQ15wkCCahJKh2f9S",
  "key16": "2ctWT6AmqvehqesHqps8fagBWLFCxjRHT6oMxm7nJcHxXMVZTYLYBYr8D2ZA3YDpVsQ5XZZAjZqPm2YNyyALNLXj",
  "key17": "3x5ycdZAW9Y4GLF94UpBvxYRK8XPYpRynDS49UawzgpokcnANUbCrVX52Xgj9XzrGppSrbkkbqbtegCQTpohonZc",
  "key18": "ppHCSFwrd8QpH3iFjMswjvjwC6njNk1Ae8rpfo6o1M3yYidNMasEbczdio8GN8pV2G1pbmFwyAFKMqpvq2Y1fwM",
  "key19": "NhgJ8cZ4KgoKJ5RUbVBtXVP3R7M63ng6ME7nioCJvvyq1PB7iaW1vvT8KMfYTwc8MmzzPkoR8w55NZr4JFc3HdB",
  "key20": "gDR3oMr9GMT5W7bUAGzaZ9pHpg9UDWCwqNZvUYbkzkisvKFEWRDb3UoB8L8BeTsX88Eu1tV6iJCgw9hbVYC2WR4",
  "key21": "4RN9n2zk8ZR4awRgMLLMmCsDMfJZsML3aSPYvSrnHuqHLdacGS95fMRt1GotW4DaU5i1wrFM5PYp1tbLBCttk8dW",
  "key22": "4i8NnXhfqFv762jjYGFyZsu13efkjwhBRnUoCNCo4rKcDjbNh1PKTUN24bpinracDhwuVrf1CY7iiWTW5JC4XiiL",
  "key23": "4XcH5BLkptNijviyJAVrMSiTGD2HxGLbH2Pj33xS2TPcfx7obvjzdjuGuniavsXPadaJPVNpJh8VGS5qgXhDaJjn",
  "key24": "kBmn1q1m1nmt8RCAD5AtGzxE4ny9qwVFpUrPR4W4uMABZN5Z1G5rV9sywXhbLB9r9sted3zUX7xVkimGYdpmtfv",
  "key25": "2TA9i62Aft2MjR9GvBonYzAzE4nxARekKFwCfopsyrsp8xCFcJzeP6L93acS76nawdsWbcSzXaboAdd1F5oSfRxE",
  "key26": "4pzMQ8cDCQA8no7ESz5ZufvcPuZAzRXJ4YjA59ANVs5BqKsA36oZVvLtiRb3HURQTHbECFNaBymDFYE1QX7hyRhD",
  "key27": "W8cHBon6bTnbgQb178Mzy3LJRXyLMprjkAncqKvKPmHG2TZgc2ieSbpXipShfmqWpz12RTdaSBqam6LLF6HPBiH",
  "key28": "3yAtQ1Rz27uvkJU5SJdc2km7vngGo4raqgdSHgddtfJraQn4b5SvXcGGTPrf9ny12T8Vwqj7gLsVWbiJssBxaGJa",
  "key29": "63FDHkoGxrDhGFsFXMPxtJ86A81oTAg4SP8YAmy8h2Maoo5jhXkDqRwr6D4PoPhSFxnnHtr232tXcUnphyWLGf8H"
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
