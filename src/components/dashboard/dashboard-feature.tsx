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
    "2CZ78M3PV4xwBQ67CuTEBYuzC1LJzoSB2kGfwadow5c1eYztn5tA3NyoYxfpDEKDufae9exWP3aR7J6A2j3RFdVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xjy3iJgTSZjAzFeKM1qPcE6sLfwfkz1kEPv8u1c1ZnUnP2bs6g5FMo45uNV9mg24V916HkaBQYaw7qSUAbtuLPy",
  "key1": "pKNmMmMtyVdU5nQ32Yx2tk7q5c4TGXcqmQWxsCaKq6MNNRj5a5Ci6Kd3FiUZvLrdHfN3qwAdPUH2WzcSgzof1sK",
  "key2": "2PeiR4m8MeSi4AQR4V89uu7aiLcKautV5xzMXinUUVJxxG1Gw8sMetkLbzSsAhe9zwCdjFiGFV7Yp4wiRL1sCvY7",
  "key3": "2BoQpyrPDUUn7Lqguyyp1mPMTR2qApzJuPcNjDv7qcreXReYzaMVvmpzQAAiBWnzDBwoKsb4tMbpoKR2QwMAEML6",
  "key4": "5gUL3hATbmFxF89yfxawpgs7EVLeTbqpY3rPJwwc6UBjgJpR4aM66DAoqJr7kA1RTtq75VhSjqyo1zjzPBzcRU5j",
  "key5": "31C7msL8p5MJHRBoCLgSUSxazXxk3tjuQWP86AnWGH8rATSzHkQoLhCq3iSHcchtSyjhbog7EQ5QyuEGqgomhpCx",
  "key6": "3dowQWGS9kEXyfEK5vxS9iawER73UQ65FdFU18ALzfdNubM3vuTKAXLPbVNyD4LpmPcCtXCLtn4Md1rbg9Fsfvrt",
  "key7": "5KnWqfc2BdoFzrUcBWBipya3gSLEFFnRrsXo4LQcxurEfTVC15Lm9WnioXzESsk6tzxFFirJha4deUxbRVbpM8aw",
  "key8": "644Rws9JKM1npfqrc5CwyRc8LJ81VXZxHtCAGk9z1Hg7t3EqXQE14pi63xCPaQDnFhmEjZMfNLYDJ1bmZ7MyMzHy",
  "key9": "5Bo2kzsQGge39Bj4kLvh8kd24v1WUTYoMxDZgt1RC5osCKDtuUJ6HUGbKn43N9o1NhHzDwumbrufekiSzTym2Pqr",
  "key10": "8wk24fqyc6VcfcMiXQG6dajmj4y3KSY6ibTp6LvxsknPkBCpexFzDC1czSp4h5fsrjaXHiabmpyUbCStwEAmRiA",
  "key11": "5qh6DTvW1HrJ9skdcsMhTnE3nUHi9t9KpJkX8z7VBToSThMxYJoEoCpPK5Wy9zf81rNoR8thKaJPEcM8WdETBtmN",
  "key12": "3VjPazyWaCzADgRt5ksqWD4aChPtMyQkiPXbiWrvSsn3FFtyLLmm4MXjPFzhAsVeJYX9ASKBxp8nQfNUjbAFsJaK",
  "key13": "5gB3391BueDCrHrMemRyzsjm2XVaQEiGpudaWaCidATjwTeTZ97wsfejpJDEMrUTZBhTV8d77Z5aS68wJrDkCQgW",
  "key14": "2nx2Wu7VLfKc2DtueDzo4zmit63ateKyFKQXfwJJsn6dJFtv5rLqMSqisqgce8Drh4ysUdibTbgzoVNeZhbyvatk",
  "key15": "4A2pFeE8LMCcj6r1MHa9xiy1YL2kj214gbzavRuwznYSWcp6uVjSgsSWgpQTvmjZNXqgXs1FYNrLicA8eGyw156z",
  "key16": "56gVD93mq3c3ca5WkqR5fp6MuLtSA3Vi8A8e7v3oDXy74UMeJwMt1Ru63jxGzJWFow5YBEGFNVwxyr5cGkFqCQe3",
  "key17": "2TtF5446NvmxM1rkEyKbyCLaE69Ek2KYZLZdaQQDH1HjB5zb7cuZephQdG8nuEGjYFH2YQNnBTWTh51h4Nnth2Cd",
  "key18": "3ocVSKYusPCGA2Twgo91DzuYcgULvQTofFkew1ayVE6H85kk6zJ4ZTfksNz86Hs1vgNZbAkrMbKLFNAadKZzr9oH",
  "key19": "X1BUwxDaxsYgfEe58VWuhVYEj1NiToJoABB1uWjX2UCctZNdRt552EJwHH2ssAtmK3KNxCbAtKWXq934aPWPDE5",
  "key20": "452uPhETN1bVxJPLTaQN1nZ7eyktRGJzTpHBB6S6ug8ZThaqzMPeS38v9TXWbUbS3KxLa2ZocHgRG8kfL4uYfAKE",
  "key21": "67LDMZnc4ax6gkKpxdsSjbLpsg3sMVgUDJhR3W5FiA5vg9vn2bSGyWre1gEmfDkkzJh8ZoBFW9EMmBxa3LuEmTCX",
  "key22": "e69phcoraQiL3wS9dPZYCYEZaHE2X9VTJ9VgTKgaWAZFiTJ5fhckhEPa27iZChQhoXVbSbVcsyW8qxroTb9fP35",
  "key23": "5gUoGJzeqMyB4MnQ1Afj5xkc29cKYEdZ6UTEjHwFCkjPWYdXspHfw4f9wXV44VZrXzW9As5XeZPuQuiVyw7NvPs6",
  "key24": "3KeFTFcFK2Se9tzY6HH8JCMUvyGs4YWhoFN1iY73DdWZ6HW852zzLCw3hr9sYNQDKpWscu6dCYZJmkE1pp3sNLEV"
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
