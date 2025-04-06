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
    "2LY1YVfyEtNeZ2qA3bTAXF73k8ctsM3Lsd5aeP8awqKrquQgMZv1pzd7A48jM58tXC1Qj9P7qAYfr3JeFiesLaan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsc12m7BSgEQk9dD2Mzp2pnjSgz8qTwH5iKhgpG2DWNG315MeHzmTGCnoii8o8VU6DwSBgnbp2Nf4RqunHfaBi5",
  "key1": "63XiYzf7wXUo22ZLPtthviHKZyecVTW29zesizJKgD55vyPmHLdg4reSFKaqtTc1FG6dUpSEr9KrpbQqd7cQiPkX",
  "key2": "57NG3YjzjaKHLU73gKftT3ZcHj4J7xzbrNdHBA4TMuCKufeT1xbdvDwav9a6RfDNu8nD66QNNgzdeE9J3XTfQXm2",
  "key3": "4eyqpQiaXwRyLge4b87k44wPMdk9VCueL2HtuRNceGkmhkPtufDdHLrbPpATsQ5VGPxXV9Ft3s7fQCeeVuVyKEpQ",
  "key4": "2K1CkqD8DaxTqJD6jF5BsVTye6L8kbtsYbVChZ2RJ7hCr8Lv1sZiHBAmXoSfPLxrcg5NjfDyLr2LE1VnuguPCZ8Q",
  "key5": "mpyVdxFnwVrwLqiVYcCGMkUPuHZZaM3oRf3psEhWCVo5bqMgfdniD1m9Wupi1ibbVowGi6o99Xhg7K2aC3yzXr3",
  "key6": "3awJUvUFGJs93ub3tZFBpr69B6TWJbiSteUpUMn8Sau7U7GyXGoRZjGZTZqVoTHFmHfhzMrM6xAkZHkX34eK8S8y",
  "key7": "2u1xdBAwycir4KbUNF341AJwFijXsVkf7uzdpsF7dCHV4qEeP1E2YT1EnktzULP1v7kyFE7obqP4iuC1SyssqUqJ",
  "key8": "5fdNpE2z8QSsHsNGQ2XuraTXSLrnhFwmn5yNj84dE5FjyrmjB5L2Jb7KJ7b3wM4f18gvT8V6UZLtDeB3C7rPy8Rs",
  "key9": "2mgajRsWVkyWRRRPFEGVg5rA1VwMqLoib398N3jRcdq389CNeUR4Zev7NPzjR6gDG88gvQZu9bziCwvdddZ551Zh",
  "key10": "ZDHZRuzNSYavrN75zEzYypuoPduDb3K4p2Qwo4ZbM9PMyH1gYtLwxcWFt9413dJQ5wajKvgaFXXdeqUcVZeFGdy",
  "key11": "25tsRqWxBDNcDzDiWwJoyAFsN8hNScJs2Go71VAXUewjryEBbSnGTSpG41JkUZa2En4bUHNLf6RwZ34ECydMVEAa",
  "key12": "52ZQW2TXpUQ6Tkzqm2bzWQ2hRG65Htm3JRRVWgg5WrFw9eoWhPus3rNxvASgaX1zKNt59o2onr7mzcmSASo2K7C1",
  "key13": "3YaUT6kN2czVXpKwaV9ZvxYUhUr8dVhrUopYMy1Qpg8NPfCPqeY6aFA3BesAaSWcBpws85wAp5HbJrB612xitpqE",
  "key14": "iftStacfybxwmwMrav5RexrwJ9W3yt7Qs1172WeNycFzZEQH3T51vW574AZHh6L1WkEnKbpWvf6EfT8rvzsngHt",
  "key15": "5ic5y3BWPLhokbCdv8a8iurSjWfjpc9nonpgmwU8WH7NToC6MvjQYax4PzZT9SeoyBCR2VAqMAaTF3cpA5DopBpf",
  "key16": "4z3LnVTZJi5mdTgRsAvPWizcZRveomUG6BqDa7cq9uEVXiQKbbVtSrGnxpPJXGDRqi5XGkfABp1sh7nnxiFMkV28",
  "key17": "41eEis3ryi9cJGuzxGwpiato8jYZbc33zLF5kKvdgoKCPKq4tTRpM2QHGNiz6eqHhGpfhZbJUpMdYD4vRBotinti",
  "key18": "4pZpnTcEQdeGZgyAhQgzPZWsfLFgBsvYzsRBwT7MXV4QFik6HEDqyvPW5hJeLRnYE2SCK6yLPs8dgjDycUgfjmhG",
  "key19": "5moDjNjjbeSMZ8eJvZtdpGvDYrzC2B5BGbA3FmonqKGeT8W8YUQJV1woAvUYNmktSTv8AKKfweoxAhi1GUGkZH1K",
  "key20": "t9uytC418TTX6wVoFQjaN5tLN5xioK3WojU6rXoHoQwbVrNj3u5E8gUzCdtH5yBGaCnfvo4mkjEdbqKuBwuskQe",
  "key21": "4nysuCfJ3d67GnKbjotsP6ZCNht9U6PQhk4UQXjM3H89DHfbEz1FojYc7sbzFHFdGxRF4tKjEFfwW3VBUxK3vLD2",
  "key22": "5qQCx7eKbnSM5xkpNcWjtUDJwNS8fLcVhn4ej9DihbtH9vuPA6UqZQrVCZVKPyTdEYYNtVzM7yAcjPr41kRhi2ZC",
  "key23": "2kmsqWu9ZJ2pivayVRk6rfbCUTMSZnD2Ranrfy6tXkuMU1auu6YDwBAbe36zYZ1WXMVQppqSPnyRgPy7tu6GTFZk",
  "key24": "5V1CUfSJG5EFo1kQyf3Bxuu3De3x1eb7bbSzBH5SR4Z4fg3Uk89tHLC8YhyMPRV2YTJjwako4jw73ScvvUKW8Eb1",
  "key25": "2MnmJHaupKQocgkiJLfR8bx3HAuQFoTBjdoyivd4N5RjNKJYNcDy4D9AVaHWkDZAr4emeE4Wrck8o2HVKy6nF1LL",
  "key26": "3E4r9f1aKJ2ZjttqantPdB9KUHKmxhoxBRAEnj9NvzZXCTWFdL8tjpZGCrw2xfUt1BEc4yqttHjRpMGPMhAp5w1F"
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
