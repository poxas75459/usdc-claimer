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
    "4824icKd8xvps29TRbLPyc2Nr3tMtqBhKbsfLyrRpvKjjVwFpTgfZ5XxCbfhj398e28zZHWxUCS43WLGgsYSimja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yL5T7dTG4N9RP2vB9pQUjocbktZnjd2iDHCX4N9HoLpSVmun2RjLevfcu6c69Y5oVaicyf6u7Xas3q8dMDKYQVL",
  "key1": "38cTUwjnQjpqojnwNB2LnBkozGYdUTxSTXwagMCwSgSK9o1QWdBX99oedvwUeffMuNnFku68f62hq2vuXfAyKuwL",
  "key2": "44a2StyRu7ntkqxbaXw3f48Ahc3TvTdLmaLsEVEWZfj5PiSLqJTWwqebJ4QLga23F1b6ayEVfkkWSJT5YXJ25rZd",
  "key3": "3iEhmdPssPW19j2FayyHNzSqxNheUnJarfrz7SM1wFefuPFbSuKLjz24z9ifhkyCGqr7LvLQPdrDBCTxZ7H8UuYe",
  "key4": "3G8AJtAEdKFz7MvtuEkYF6wALBpYwdjTUffwQedxcDL1q6WS3epZUvttMSUmJ7NmwMzqJd8T2fgvb83Da8aGYG4z",
  "key5": "5Ry1sjEC4gg4iH83ZmvwnmWpQVR9Sm7ujiXmdxroiYsn51mWTgN52eRNeYqjNfD6MVP6JA6DVqTCr66ymCFcd1rq",
  "key6": "4NSLupLH1ZB4U8ygYqkbzaNK816CSgbMExDGSsGLrjuFAEg3avq7c8qWKXbnisxM5SKRCXhYiM5tQaxkKvQzzazQ",
  "key7": "3JK7Wg7wdvfAAbphyLd1TWuf9NZLPvNt7rqW8F1mjcsAwu9ykEpoBUUNopwpCGitqZXeuZXstuCQsWYPMgAUD298",
  "key8": "vHMViMoMYAabNiDpitUXV4Uoy2bbX2XNZu2j77X22VtZFaGTRJLJvjp7MwbFDZzxrLncuHDNXBG1nXLCQx3PPFN",
  "key9": "4CXcyiGiJQKW4FoUsoRyKUKqCAmhUwKGxbXEHtKWuUgzEikQigB74anT2et8cdT9QbagrLvCNJqZnx1khXYJQdYY",
  "key10": "43nhgcTJ1afzEWgYaSVBwmeUHwnzJWgUi6DUcp25NL1X4x5P9Lzg1bXEuqTo7ixQC36PUgFxb6JVeNQQgnJD9eF4",
  "key11": "3WzAw5ysfqUJKUPM6UCVWgGsrMCEYtoLt5sY2dKaifvDDZDJxjvMEbZb9xVfPUs9Qkb2arEz5tutNQhksYK71aY4",
  "key12": "4Xk34PBATc4swpkJx5Qcze5kvpiPNbvjFFUZfJ2m1XM75mWfMNczsazQEASdEH6zPPT7MXmnusqTxPsG98nCYpeN",
  "key13": "3NLMdaUHtCRgMvDBAmhWxhaxerAzue3w7d9M7kzrZnx5vqkHXUkEhrQW3qpqEwDtQW4ry2Ek3qJxfeW2wXXRuWLK",
  "key14": "5mZhSq7wuC1c2QchXCiUche4WyDM3Gfjg2xi8NSQzHW7SqUXc2vLc6154sqVCHVEB8fQtfFBpuFULRaT5fPHknyA",
  "key15": "5hSfzMqoxqwN4QVzQBNFx9mz66r5meVYYdGdhJWdzb9T89WLNyp9gVSH6s78zX1zojoRe24xRStVwVk1xmekbs32",
  "key16": "4x7hy6oPKVr9QVxQbobkz6YSkfajRoNdUynCov6uVPMRwxvUKto4Z7uA5FR7VFjjV7qstzixm3zqvGEqeQAdqgHB",
  "key17": "3HtsWqL4LX1ECT4h76RRLPuTpH7JjYHFdnnMuMGEqRfYdtt2zhNjYD8KW4te7CDAtousoPjSU1gTqWrZeTDH4gAk",
  "key18": "63Gu5wRPEpgKHs7hTomv4xLMGo6hDyyjLBeELxztk2w6eYNXt66E2wCM5hQFsaL9ovb8FBXopYPEgm7tmFYxSFir",
  "key19": "63DsD7sNhZnPkGCEnDFh7YkSZnBZFTkxi3ahQrLmSKpTREyzsXtfGuPRPSRCd85652oycRd8L5bFyqTUKaW6AJaa",
  "key20": "2a51nhZoDc15ZYTVhviU7XtAehYxgR2SuWPaCYZDRn7mVnjAP6NPCpX6kW8K7s9dBMfqHVzzVhZKJN8XvAiRP4PP",
  "key21": "2CrzM9bonTLFUbK1kBcted5Eq75Y4AjtP6WVhN6YaQ2KAJd75JK2FTPnEHAp2hqc3suZR6Evw57AghRKmkuV4Jk8",
  "key22": "4eNbzXqdBewAxA1myk2p1vMXg3bHYKVMaC3Sp5CUNLiKbupYZJx9s5tDA3reSUHmD6VoqjhyuSLPn2hfDtaBVnZY",
  "key23": "5ZE7c97jnvNNGvC1BWKN1YxBAUYNLqXCVtdXkP4GMNsVKHiKroEpkQhJBJRtcvn4fdzAZZWBEjxkee9DgFBZWdLe",
  "key24": "YcW3mqkZPvWzF1Uf7UExvQVQaw5U5EJfSZCFfRL8rbBSs3mf4NvPe46EjUmbctDdNuJom9zLgNVV1udBSrbGpmH",
  "key25": "5tquJ88nmphhpCw5SKSDycGPJxJkBBSS1e4HrgBJRHVaqKZvL97y64NVr482gLuwJrfKTjPaqtGb1sg96FCRjZhr"
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
