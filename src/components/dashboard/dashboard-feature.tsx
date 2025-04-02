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
    "23VJWYUx1PKCJvrA6jgRq75wCAfTvmpgX9aouh39ApRuW5b9keT2DHr3GppQpirwieMzoFZ4vrq1oGrWap8RTZv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uE2jRhN7RBtgjMYsqQZp18wwh4s3yz9UQaQbmjp4mPqjKp1unbhG3ZSHcguxwMLYZdkfiv3Co9w43399UGLoXYZ",
  "key1": "5YiQathfJ1gdJBQMXoWqbxcScM6xgfFLDjUtELzkY3XNtcU7bXpKiMS9wMe9LjZkNWqqjDv5j3bonc6qtaLKddij",
  "key2": "5eGwWq7iRNhTJqrbR529jbH9V6RM4LPHi6jqt9kM5BDGpTiexdiPmWWE5jBXWtR7sdBdU2mdpnLbxZFf5sWKiBww",
  "key3": "2LTdgTv99HgV3uuA3K8oz9jytFqVwjuiQJEn9jToCD3MrpEFM4jwUv7ysCspunfPWqQj2YDt1TMoJ8vr3xTxEWdE",
  "key4": "3YttYdViv4HhVyMLegh9D2Lm1jBmWKnpCQ5FJm8zEdykWbCEYurq1Bevt7Nwf9VxJEetpWDFTSXiW5pz6gxsKih",
  "key5": "5hKzP8MgGtDNFDGUXLHDPPQhnYm8tidxQ3qiyjxu7otZJmYYdfwLD9RuJcqw1XAtzvWtfDtaQcm1zQsKrMv2kkS8",
  "key6": "3k3xv5nEKVHztv2HZHgZZUiBgqqY8go3kgWFxxFrBxhwi3cu2fSYSxRbTYS1pE5qBfiaorseCd1MZCLm2LdqWBKs",
  "key7": "5ARtZmxoLAcbQfBnUzxRFjt8Pki1P2bDrvHFx1Q2KTobxZznL1VhjD6YWyK8Hv3u6hM38mtDjRX6Th4rwPchiaW5",
  "key8": "3KZajqcVzBWWH4JWbzC4nnrzMwbzHZ9syjxPvpcQ7uRaYJ9KN7c6613UCbzJQd1uYYF8WW8SeCF7qDfWUJ9rYRtx",
  "key9": "2fZkM9JQxznX61z3HHoMKNJsCh4jRrW8f9QEmPXX7zb7DbXVB6gr1zNGUPRoghiSMTwHaPghB7VmHz3Rn38jVDGW",
  "key10": "3yPpuQACi5k1wGZ74BRZk6HdRiRZuYaVstkVVQyGA845VaBus9EXQmj81vSg5ECYYX1u4EaFLRzea9SQL6tUuiM",
  "key11": "3ZG6KtNsjEMnjaG1hQ24N7nEkGcLuEkrEEdvsp3obWsPdECD33uwwa7aGeUyfgb8XsQWZBmHrfkawxFVvXyZZcaG",
  "key12": "2RkQxenzJ3yhExYBdqgvXj9c5bn8bxJQmcK8Vs1VUEDXygsFGDDMFt3DEez3F5rc2NeKjjdQP2w4nGLXSoGAxGgG",
  "key13": "3bRpvWZS43xo38g3KH8H5PMjC7zSzdN1UE5KkSLrNcTnfthJ42iqpopx4nEzE5z7XCm8xVPgWvyWUKEgwnucotAA",
  "key14": "zJvGHhtr4BT4AaKErVuQMXaqU37XxLbTHU5kP7p6gAJchZV5FfpMupELWLjRpLz9fEbEM66NXp8YoSYKe8Lspa1",
  "key15": "4MCX8vBJ8SWWLuSnLfw52giVRdEUGrqEqtzKe6krztDxLsYtiYzDF4BQcJCBFghogpLNMFLngppwTV1hpbGFY8i3",
  "key16": "3zi37QQdiexfD7MeKFQxFzdEsFLbnxQTRJ57pyK7bTrULzwe5kkDb6UWLcqQEgohWRz7DpKqPwN4P4F6cfTqvo4",
  "key17": "Y5bnVHLfwVRfKQjgpPJ4xDitgnMz9no3PsdzKkeetwjAHj1gY3CTPc1dGx14L5UJ8BDo17og3kDwLcsCtyb1hzf",
  "key18": "4y3TdRD1ATGna3hvq7jtrf6qhtCUPjPciAaimfjez2LHe3CMEHcxzPaqEid3qt2iFiSokWCaU4RQpaVqXPzJwYiM",
  "key19": "7NKK9uh7r37z37ixxV9FZt3VjKKQYUjnmgXL9M5UABaqfsNA3b21SUDM5Nr3LwPk1GsmXVAzp2pySfJJD3vYWtq",
  "key20": "5xMbtKCMhWgtkiULmdmamQDecnj68d6tfRQkC5E3MY5EmnUFYmFkuVbATXSzLPoHNcArbkDXPbEh59t42H6JPy2U",
  "key21": "2fPLt7SXn6ai8bR9FiTsUrsDqqcmgmtvmv2zY56aqLwCbq8q8weFcKAQbxeAVT9Ci1pyK9FKPaHrF9im6txQ8yaa",
  "key22": "24jHRcFoEKcj4qjW2wNKZAhWJn8fK9RpqPx5uKWYq7AEVrwUUL3n6i7P7sL1RCbvcx25XG2SpvuYj6SCcbT2yof1",
  "key23": "dMqwES77qz1ftF7fyo7MaUWmHWdJQKCxA2YbPGdBngxMwFb6y4HR6ciEcdNkiQXYZXq33yGzbpikrS4cqTLGA8m",
  "key24": "2aZL9ksURedFzdXPvBWNsPwoZzaq6JxsfYUL7q38C74R1VvetrE3PQ9yo5aSoMSCEgEsnaMb7x5jfiHpvBF6yFMh",
  "key25": "4MSETNqYXwQMQC75mLhprnTQqFkyF1Ws2exFhHxS7JSjfQavtewZf49vkxqpnBssv6vCDKUbU6PAkNDA5FP2H67",
  "key26": "5nt1MHeVjvyP1MNC6Zj3wfqU22WMGBRGxNRdSVyi2LQ11Tnk4eYq1dThHdgoZUJAZ7eFER6zdGXFpQMgpwygKLJb",
  "key27": "49oytyXVtDKZhECSPnppGuEHwHiJV4vov8vNQBBwPsDVgZSWJV9KoKX3E724QLyf1yqzt86rgxt42sMUbQqWAkGn",
  "key28": "uvYNtxUUZJfJqeEzP3yuDGVjfwgU1BnUAuRP7xC44hVxnxz5fnn7E4bCVQZwEVwCBT1k13tTbCZPTYesSgNxuUk",
  "key29": "XYUDSU7JryjoUhZq1N5bd6AE9GWnHvnoNerrXBSCCPoiPQ5iirRsBTeofHMri1angLJ8q8PC6CM2DkGHhFAhoK4",
  "key30": "Tr37wJyeAdQSGFpcqKoiYNAGBdGna8vA2gL4iCn8cqsvVqPerBXkWdApW5y11ep5pe72AhyYDmdAZXyUsh3Kt68",
  "key31": "FvFVHkFaLxfwxf1AZK3iqmvP2B1p9UeNyXmpfvU1mcQiomYpniNYU3GwBYbFZgcYjBEhXeXpHpuGzm1uzMUmJpW",
  "key32": "4cmaghNga8RiqWdqyBqYtYrVwEPNyy3rHovgXsoqbP4NDsxe7KiYUhGF4L4a83qNjzo7ATRy771scMG9dzXYaVBo"
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
