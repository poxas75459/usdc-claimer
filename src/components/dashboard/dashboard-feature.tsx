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
    "Rf53bhMS9aaTWA3fQCLSsH7ZVrHrXpSrsFgkMDXKpBR43hJ88q5YzThmNMmXFN6Ey3kVYB5trDXbqeSEtE2BXBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xx565eAQ8ZKGTjSxbZVvWh1L8DgbzDSevwABvmpdeNHxfQw67ghJD12sxdSPqpZSeC3yTTA5UYQz7NMhuHR99Vw",
  "key1": "3z6RKJEUh6toGDgpE6YU1cYWnHftEBn4YbQfChKrcxjCvEktVmmum442meQAHCrZYGk5XqiPNQ6FBTyXiVq5ECcj",
  "key2": "1Thr6LXAXAmEgMEiwXqAuGEuPkeazGfbpkBcqsfjiZ8TCLToK69n4Bmweuznr2tYot6dAN3vLUuqKKD4JsvYt84",
  "key3": "HSW9iTnUfwKqUXKZP6wxjQoHsXFVaMBNH8GiE4SzJefdKcxG2nF4Sp7vBzta36xD8Tqu1ewcNiGRh7hx57qyfs8",
  "key4": "3MiKZWHVDMxCX3twVpnTq8hcEXC6onW1RLWCw753yD6yBTJwWovgyda2VWKoWFyJu3wWGPgTSUA9MmNe29RL2Yyx",
  "key5": "eqPE9TaLoiZHFv7BGRcUhLEbHPCfSGaQPxU1KoGtKqb3K4jWvB1UajJ5wfWC3tQeWa2RKf7dAgHRTb62W99zLcR",
  "key6": "3spzXbbD9iZrep3X7UcwBQ3b9BJ7odadDk4V5LcVnjHnac8DuTKSWAyCMAg555hvEoSS8MVb1GVKH9f8gsTFQ4VR",
  "key7": "2DLeffsf8D6qJ9m6QokHPKFTt4i7Rbu9poCnzKWeXyQrSFU4A8eLw96YU62NPFQ9pdS4jYBt3NUxrbVNAcj6HjiX",
  "key8": "66wfBh7uabnXtzLBfSzi2v3EBGv1b2iMQgBEYsRWMXE7pWoSoswdxCZVcte9QGCz4RqY4QqahEHGG8d1Aei3dva9",
  "key9": "5zSRtunKTUB8oSEG9PkspyfnP8BC4hbmpwdVtJmRTTj43h3zoEWTEiYd3d1FkJYEpTQd8KEhdmEEmSY56aYy4hSi",
  "key10": "2dENXTpmT2ot85hd53F5RffpjoVwStK56NLmhRXY4bVM51us72R51geRbXNm5em1WfLTEQS6YnVWHzfiTAtnGnsF",
  "key11": "5dN8keUGoq4oud2gUxsZWjeimS1GYiPFQkWoNcRS7A3Z9E1RQDXq5CMgM5Jeynd58X5CjiYCz9WS6EXaTYGmXeJS",
  "key12": "3nsQu7oeWmjyGz8bXhd78hMhWPTuxoLjdV8KT7mYL5VFpuuHmkZkJcWTPde4udQqL57C8nrCkVGZkmsQsHBAtTXF",
  "key13": "4z223gFRqLRb1V8mjuVy7Jz55nQ1HAyX7oJx97AxqV8raeo9feMZPxzHuyCdieoYzSHWRLh5JdwUHC18czMaM5Au",
  "key14": "5hWGUqviLJ5GJjaM6MsyGZJghJsWJtDGokyjBHKZKm8fmdYSF4YDwP67tWgzLXu5xpnVYEPjKbR7vP8FBnpEn1wn",
  "key15": "53Y8ddbcvpCuJAqPxMCfAjx8Nn4UpKiTnPo9wyWCrFgZv7tmoe2yba3vozgLYjQKLRzq75kSzrAqBN5GG7pEuEBY",
  "key16": "23BEJQmtx2nYDfzuzLp8zAKv2t1VQPkBv5SfVpiBHGu1mHPDSsboAR5YY6qE8vcJULNcpk6cjNXCjm12wdDpbASh",
  "key17": "fkHJFTArErk8njzFm5dwtmj3zrcNkvvqN3FonXvWGQwL8hSRj1b5C4bP9iBXebrNvwMqsugVLAxK8zbuuxA92Rz",
  "key18": "ThJwTDUGZ11CiuVEAqcZsXE9H7L93WLfbZ6jvY1hKf9VE5C9qhyaDMNtQXoHxjgNtAFMD6fTB2TUKcWBbxBpnoc",
  "key19": "2CGagxE79pcZ5nDv1xGrUawoVYpKrSYtSjZ6mY1qFaUBAJ6e6BvRNf4o48L7pLxDKQabj1VibVKNXBDUS6iLQ7kx",
  "key20": "47fH2tpbajKeupMrVbiTHN6Ahfhz1birxbfJkCeNXFV8yjxhtMyszUfoVMeKp4zvbxsqw26n5qBTPzQMC61r3cUe",
  "key21": "8QKRHAG2SAWTh4jpUiAvSqUrWeGzK9DNvHRC5iJHsHReCgZ7TdE8NTD5YKYS55JqRN1jKAf1hvwXPV6ByZb6LE7",
  "key22": "374wS9FQ1DgEBPAdhyzZbdp6g36c1sgNktcFu7C94xUdFi3XdSFKDiiugNMSVZN12L5epgM4SJEodJ552vcfapKa",
  "key23": "3CwN3R4sApqXeKXGhencRGMntZHjPA1C5GavARusv531T5na8etb7u8wakxuQdQbbmPQ7r9cisgwzFaaZpZBWkHz",
  "key24": "juDm12wue9nrveepnymDnRVCvSmsK1ryzFQAjjxukLr1ZAgtBjUjzUiGsQCsjzTKk9BS8KtANuxqV8X8L2a92qN",
  "key25": "2VACbESVQePY6XMWLbGyJwDtpunL3kp5B3sE3CHDTr9x7XwpixxPUcHBHK7sYe5AGMKhxNT1okcX7LCJaQeq2EFX"
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
