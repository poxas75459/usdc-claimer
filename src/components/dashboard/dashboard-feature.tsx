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
    "2QAtoRE6abzj7uLtx58BcnNa1fEGENsPhHbzzkRmFmxVhwWTjALBN8o9fDvA37g3CT1FfuXZxvFRpt2kBmmicAeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9XL5HDdwwEW5qRx5rnM9hgKYqjTwHJ9qHbMovnhFAAZxYyWMqJtSj67q9wQEJ59v83dca3chTKJFiC7C31RyHQ",
  "key1": "3543i8UbsEEdGYA4w99XiJU7PG4v7FidHNTd7FcuxgVxVvM3vgeKBruaaiNNb2135vufTXhaXhfpTfGpo9LCxSVm",
  "key2": "5mpPJ55tMt9dMXwroZ7rd7GZESPRCdsW7a7qnjJfzvCZZXzppyLU8sAkes6Dt99yT5VemKkFU3v63xbsNGtj3dfv",
  "key3": "7AKove59fftv2iikyhtDQ6h5XxCKPR47CmcyDcmwDHWYhC8ADSzHK3JnKhmsuQua2tpktwSRu4XCHaMBxDC4jdF",
  "key4": "5yzZhigcxH7V5RAMJZPYZChTu5x9UR4yEUREXjWEM8MQ1wxHuAWBZ4anE1q6KhZmkLKZN2dMmsynZxTs15sEjWTu",
  "key5": "3uBc8vygWaRe9kQLDgmXukFAoXNXTBqUJYv4MaeG7ug9VaPtTM2wTByGX33SLuMBwAY68UeZybLD73bfVeEgvv4w",
  "key6": "27zcLYudDwWqytfUzCqw11BAZNKckfRdQiyPjeszmfqQXV2Xsf4jmAncCEueJ9uWu5w71ajPeoEFYjv9KCGFtLpo",
  "key7": "3zyFBU7NUpxuwGbGwrz9MwMWLGwk7RdJueZ9WWsG5dSZuETJdpd89k3ADtU1MhtgnGE7xW8UUYJvWLwxLQh4gSuc",
  "key8": "49rPwvbFNytnPLuM5sQgSoR3wn4ZExhRuJUXLRPa9r5mXXEhWYFuGotBfGXw5wjwteKkWckEpSoP8YNr8x9RmbYH",
  "key9": "5NBcf4ecvpwNdWD5cw8A5ot5taWiDLdnnopx27BYc8PmotDCbB955JwD4BT46baknBr42sV6HYrNsADZn7ugbc9E",
  "key10": "47Lu65c5Z5WjpAHwuirKHyJgZXTMKhnjzSr2SM1XQ9SSPApDvHRVW6w7W8ufupAtVGkVqgms3e9d7Rt36s6Y224n",
  "key11": "5bmwxJEd6Q3HsF1D3kAotRewX3tMznc6LTcwD72xEjQu2ax48kEZHChiUKK76uGYx674pVxotfbj4uRKPAp4RcA2",
  "key12": "5WojSh62UKchtVHZXs7or6dEatvdVnPUuUswE2HCyAGLhVtv2v591gcYLNa273GM7WjoddYxo7BeKJB1iUcMmG8a",
  "key13": "2dp93XfLERr6WAzpwh15XnNSQTVTtJbvjPgLzcFA5oKTuR81FMYxRGfqAxvCsbZZKBfeAzLkXoFiouFoL6UzGAmc",
  "key14": "5eZh9SpangU5DpRjTtKQHDz8bxK889zFRdDzWbQj3xt4n2S2QT5x2o2bvmaVE2UXbHUsiFP9bP8C6Qwmhnnvf2Yc",
  "key15": "2B9UfBmNfrNuWxVDVU8TbteVeCiAAtRxJk4K9L8yCqMTDLAWjGSABY3uwEQXo47HL2m4hG1xBmDzp6QXyFGM8AFD",
  "key16": "2FN4cYsMCthQrYG42wkEnnQs7kpB4XgSxax7PhvJVA5vffdcRLS6bf2sm5WmzJ9DFsmdaXBZzyhbwjqpnv5Jfy8s",
  "key17": "4arWRqurhdioHshuNGZCtDiLJG7ojnbLtnask5n9UGUHfozxDBcz6k8yj46mQPtET2qp6z7HwEw7CB43sZsz1EwF",
  "key18": "2v85x4wMXpu5WaXyYAkKFkQcwe1tPQYW4Ewn9gNM2EpDpdDDpFbe2bZn2Wos48jm4nrqkAUiHAJ4ZaemJeEjszbK",
  "key19": "2DfSJs28NdYmaxzGVPQ7R6z9TnNfK1Y4iw1ZQQVx8NqvGdxaE9WxCLbzxt6dgXkWTowxc4cpZLqwfK5CiPsLDAvR",
  "key20": "tg1SetbDmKexmh6hYc1brKeCtUegBEEYarbT9XMLN7uofXc6aGPrY98ZHUrSxtsVvHyfBtnW8zPvPhLPcVRLRxs",
  "key21": "2bwUTBAHSv6Q5Kp9eSj5UpNCzTiRwfxBJvck2GzuG4LM9inuNEnTMRdZUrCiSMenVMJ9u1JpatSnZ2FgfhMt2Qu",
  "key22": "4HwttUgUVhqMYpXPSjKX2KpiYM8JLPj9BBAciUY5MyoU2Rims8Qpgtcotr1S2c7bNqub8PnhgcWGdeSmcXnaLuVs",
  "key23": "GjCidBKZy1AichrR5S76XUDejaoXYjSA6Y9kJbdXK52nYn6mwHtsNqNnAahTs6PknZqT3pvr9ZEecgYLu1E86Vn",
  "key24": "45CHXzeLDmPWdnNEp3Yz4dmrx4jb6MRJGxJce1fGyuRL1fQTWkjzkXTb1Q7umLNKqnvTu5nFaMJpnD15vFPKTBMU",
  "key25": "4g8Psir3tFfdmzqh7Dr15NMvxBXG41QFv7wWkXqQei7Es8BJxwAXoM5dJXWH7v7ps9iu2UmagEwLeBXv1nbyf8zX",
  "key26": "j2vL1ThJvQSyrHdmjM5vjV5xytG3XyNRBYqVAja2JZ2BqJQjmXF1vFurzegs8AwGnKdcRqyaCLKydoSH19P6se2",
  "key27": "9pmw6AyXFS8riFU3PyRh1Rkkmx3rL26DcVHrfSaofkgGXTb7LwRDxTaCkyu9S6GJDAnVfkbUQG8sXuvNGDWhXYd"
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
