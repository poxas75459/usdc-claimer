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
    "5SDReuyUXFJjgXPGmyVxVzWsHtRtkofFLbMHsGsLNkCFNkfPsbDJFf23zd4rehCC1ybnk1wZmLkEH8P4ZGoUonaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZr1mog4uBjZdMhXBdbeE2RMF1A84yRRFaoSMErMQVk4zyz26MqhDNptdW9SM9hxse3FLUYpkbuqg2VsCpz2eSN",
  "key1": "5hE5dKGWXnLxnS2z8tgvw1y1aS4xu8R1pcRnwsvFoUqEi9Kczhrebew88S7nG5FsokMiYU1qEmukWggwwgYjzNv8",
  "key2": "3YUGyWBekCyYmHLa9pFx35y9XRPr77XJNZkEKGUrsH69PczyjXYbp2hLjZX3GWVWXUcmUiqho2CmRU7urBKmbCc3",
  "key3": "4giTQHabnbnW4RkT4WcDmmTRVhBqQoZCdkdfMAyfoaQrG1gTetFoETYJtgLHamCjePvhaoiB3UdQwmpNhpiX92Gz",
  "key4": "344dNmNoX5u7oTJeryFUgXFMphpDuZLzaiLoEqpo3MQmcLm7fqPv7C5YYojQ88PvSKoYj4m6e3PnPETurcQAdcsi",
  "key5": "4eXdVfhCuFmerCzw3iNKT3LJ2Qw53dR5iW6jkSTYa65E8xqvFfgmukusmT2m61ukvwzvN5zbSU8Xxps2JfShy7Kg",
  "key6": "4V2HSgd2u98b7puid3wFqZ1gLs6Bm7M2bSoKkwdVPVuwDcJYoB5pbf7fRofJDNdsVpAe2LTKsRxSh8XTomMNcEwb",
  "key7": "2n24XwwgJKQM1hGVxFm5fonFrKmyHtPc6CEqseUzYArk7GeQkgB4RnMcaWC2i5pR5nrFUhDQCUkHue6sKRX8PH5o",
  "key8": "4gtqXnTVuSv5FAUfwaAZHaBTxcETST5WjhN2x8KxnsVPsVHfC9m4XeWagUqeJ2u3bH7uwuVm7mgsqmexsUPQxedk",
  "key9": "52fta5h6MeyKJL2sZnNbaVF3aJ9xvqNLsie7e5FJwDKbLHwdDCJP4eynT7AV1hu5txCD2Zj6SkvbzqPkn1HCZZBh",
  "key10": "4BdF3Y3kMYPxw19hCCeDXUuzTiQN6csNRF7KTjY5mQB7RhuYhPfeXdFYu5UMuyCbch1vaDbwKgDD2aJRv8YJVkBf",
  "key11": "5hUEWmjzXDicJD8p9XXNCK53zwayrw5hTcGUinqp7FjZdySwMAHZt6owwJR73pzWuqGz2m9GQTgKRjmukhs24fwR",
  "key12": "2uzoAVqkxcrfksYpEQcs4fTnn3pHU1dKKbrwYUh1S9zcN5gE3ZeRz4rfE87co5kuVsgWhF4L7VWAuoySod6tPCis",
  "key13": "LYd6CTh1Xvxyu95MHCTNEdVqpcH48oNhCrd4ki8vL7GCpUXtKX4RMMzzMfHkUqjZkPSxwjKZBfszuKeejEwzZGJ",
  "key14": "2Zup6Qm1idGMx9p2za5iQ7tbAwqf7ELjBJ2XvvVMn9yBcbt9fy4hmPC3FwfxKRAVfVUyeMai5Bk6KEFaKa9oRhj",
  "key15": "61PFPNZwZfsr2nUDpM8sjhBsnm917KUVxU2CuYdmPp1YVP67iDbTvWreohDWUEp8od3HGDEVWjJXtivxLkrzfbrN",
  "key16": "dy1tuB1pxqvYWAh1khaP5XFsnNacKaMKz5JMHgz5LVB6ygXBBXmhNKYgS7m2BXbRAGuzf2K2XicG1beFaQYBMUi",
  "key17": "5jEES4eqtr1nW3ebmWUARtvJTwttg7ZsxatvSxZERn2yQTbHu9NuTM1iJcoDbvNM39iUD8UkYYn5YHukzwrW6JZQ",
  "key18": "3qsvzoN7NeXe81rAZAPhZsSPWVS2F59amg7YmJbqxPx1Zs45ahLSGWbHcv9QToR1rTnbB9wQTEU7nkyBQ6gJL5Yi",
  "key19": "3SJDotyx6BoA7dK9JFKjqQ4HPY9hjVx9MUwDa2h1jZry11rV4uTP9asr8gGM8QGMKJivyXK4cnce4x2eRcNdufe4",
  "key20": "56wUJzwVav9kVLJqGWxo5Z2iR1tjCzPQowdpQ1FgyT9iWKC8nyTgNKuWNaGjRY9izi96BPa1tvBDcRWCkYbbusCJ",
  "key21": "3dGsYz1A1Q5FBTcZwMTStZf9QPFBdpeQsg41gFMMzpVGNsv2uXdTP2xvD5VfpUYSsso7U7TNHqCz23UyyDQxrD51",
  "key22": "3ZUstuHwEPdHoNFopwVQKwhCphKghRtptFRFYe8MDuTc9PPgVvCzdtdxmDeGHWV22H5fLx5cf439vxVXddVaBDq1",
  "key23": "2jVV3VMesEy92tYCzBmq8s9F3dKjVKLVao3BZDJnJ6XqUrgE8C9ci5jHxjoy1HF1kpbCPBxkBAxxVTWRbwVvusdB",
  "key24": "2iNnwkeGydFokwM32GY1eNbq4qx1KZ74bsHm7FcVJuRsw7YBbYJD4pq5njrcqAkYikFo3ok32hxZHS5a6tcSbDEa",
  "key25": "44zX4Y8FiaNJ1oyfvZQVNvY5KRLNALvv995QqWhnY2h86bQaMQNdZoXf2W5sDCJJ7v1MWNprbWD2Nmu1ve4FYPp3",
  "key26": "44Vcwe15Fbz8Xey4uS24NsgBtLURTU1P8cmDg4JKSdgFHAjuC5XreBgyFUHRDrkaNnkybKK2WyXxWHvovdBgZuHG",
  "key27": "46dwQLjK2tphkWXvgCrvPuNXw8nJ11CDbzn5s4WopySpuzurzd6W4N25g2oGt5zbWM7ZX74e4nmrZhVUEMC8QFug",
  "key28": "5h3NNnBoB6AqnAUvmNbqNrH3T2DapHpB8L7BNBtXywQ2Gx3w7XhpmRGuqdu9ktnb6CXTdAh677f25UWaWtZ75DDG",
  "key29": "24vJCdzCbCjSSSckfEt6ytDqCpFNLNsJy7AfbjPRbL3zoNVq2M3rEL7BNxH5UkFrkrC6zRYAKgJyy2kGuDEYPsNx",
  "key30": "4ZhX63BTKgKhoFr3ZJXKC92Wnvx4gH9ZTBmRoyACLBhTq9pYjapGRqcjHoqcdBfqoZpcgfY3enkrvHbbX7yCFQsa",
  "key31": "RcQYbXzj2FVw8VZzx6n9xjJdfbVReZG6QeJDUz55JszCoyWpdoZ5sVuCZvTruptNcxPJhD996qPHwXhYi2Vh6XK"
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
