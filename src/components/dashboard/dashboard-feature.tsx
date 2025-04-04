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
    "i5SzhKLNVHYyyoHxs2BQwRobye5km7tZFcEh8ZpvNX8YMFHgAYP7k6XdTGqkMT5XpMX7wbpQ2AfATVSfcvKHAAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKjv2MSgYoFzGVYVP849QDAx37zgAM9eywvjMrBTLA8FRgc17h8p5JLy9KuV5t7Q7T7z3wTcJfbvA6VaMcZKnse",
  "key1": "34KAqb9hDijMn2RK2BjmXza9QyYyPCVYHRrWR8HZENXo5dfPeX2yw21Hkhfx8GkoCnepxVKaWentcaghfz89TQK4",
  "key2": "pKciLwr1hfwuMp5bvNovWgYhJSgKVkD5EzT6MsfJG8Efn2FmE2aBeEeQWTYZgubN29Gs3eEJ2TiAK6CXvLiUbfK",
  "key3": "3t7zL4EnpRWFwv76UKSB2Uh75bthq2SGSAyM58J9J9CSLJRujGx6VPrX9FcepPu5F78D9ZtmJnf62FXtCxp92uRk",
  "key4": "2wiRe661t8VEUiD3jwjGCe3Pnr4PmAKisgX7nENUZWtfNAAjz9i13duhUpHj6fcn8fRCj5jyyqDbHJuAAhBinrdN",
  "key5": "66B5DJYX7uVZj5vWei6C5b7kKC6ofvBj5wKyVYyAcpFLCLPtsZyKEM52LWAnmpjJXoZffCpAtG5utJracqZi8Z1k",
  "key6": "5jfjspaTSVdejgMazMYnEqGi4iufxcgPpjcNpD5d7Do7P5E4FaUELF1qipKDrdWSaXTYeCuM1Adxf3DdJiULdbk7",
  "key7": "5fAcRDJJWXCmEdqWcfnAs24jKdNPJw7D4xyKS4sAynAQMPAC21N5B1xcApNAjbNgN6jZA2GW5i7kr64f5vPDYbDV",
  "key8": "37Qc3rNUTDCYf6P1CqJQErVAC6xGDKezbPjh79D4W6hHXurgN3wwmjM3xxnfqPy4zJtJpvbijnLqUVaogVoM8DMP",
  "key9": "5JLBwLmqjkSRUEN3CDEqeamXSTaMMzwLXpkKsBMyGn8NrvjqjPgHBTqsdSaxDziQGYcuLwuC3ZgTwFHD7SEPUCvy",
  "key10": "2dEGw1DBC5cq6UJ6EayXEe2AcnbLakEAGxhcfxqNsthrryVLLD5x2UqfbErzHoHU3SqqprfP6QLzfG6rLSYsvoTp",
  "key11": "u6bwj8fsFZoTtGqKQMRsxtmYVdPVrvc14cVqridpGLJ28QkZFYwi1rceZU79xApEUFA9Lp4mkpWcJL1yEmZV6Q2",
  "key12": "ETkcLKpxDEXcvo3TWXE4KcDfJYLJRiqAeiz8xutzbKnJLfFdc2YJFtkRt17Ru4FKZD2Y9D5t87Yq54NqE2eMj33",
  "key13": "45mrygMJUrhePrLK55tqTtf1BH1L7VGfxsowPzLK4GGP1bHjTP1vEqNS6uHkncecPHvEdZSYZ7c7RrdeuQ24Cg1S",
  "key14": "352hmzNw6DsdwJiXXAx429C3hRHL4mpCQ9pXR2PM8Gt23fTNoFuesvD6HVMzYPF9ytepdwnqHNwjv8NWrYg7nNeF",
  "key15": "5WWe9Ff9fos36uN7aec3DPCDh6CkhyUzn2p2kayY14eFVgNYLyApkckfmvC4Wmd9J9bu2WPmxFiEcC6aGvDebRoe",
  "key16": "295cGyAhHh8RiSoLWjWp5uXozJCGbL2vHQRrEPDvnLM7fWf8ukjM4e2WHoLZpVhnarWLmoMSkYQAGk1FKdx5viqk",
  "key17": "2Fo4HpojY69vU2F2FKSo9HHekfDuCtKgrVx2zC7qc4bkYFh2B3WZ6PmUmpEhxPP9Px8q82ALrCXENNXD87hZd7n2",
  "key18": "36YxQqAUmpavEkx4E7tymVyNbVPaDsAo1TCLzh6YQQWC9kiJwWZXZwqGxDM3y9PyKahF8rfkM5HHXPdy4xogqndw",
  "key19": "581x8CGxxifQbpM2jJbHwczQeFES9xRgQZntw9yehf7xdZFLHAeiEezA5FPgcroUdA71tGBraZTsPkZ4oSMSNg4M",
  "key20": "5LADTGcbaC3qzB436NG4hF6gqwEskkTXjLDjii3rXdGYGjwDGYgmYkspu26wgMG4dyL7MmwcrkMzHYwfcjGebCws",
  "key21": "5MtYNgwHoTPbeV8x9BKNQXdQveFBxwB5Z9p1oT46uYttyNFVmQHG3MbLrvVGNMymB9XUusd1xZxWA5ymH2RQJ3Df",
  "key22": "3VfFjTdA1j6E9dBi3yQExFeCkXhR7yUrtuCMT4DUeysSkGcQs1hHqav6kdrTNAewLEQ8jJtKc4Db4LwsYkfNw2wY",
  "key23": "3BGcwFtv5ULaiwDoDWWxcTbPcqDuTU1aGgsnJC4G9GaTaCAji55166v1uZ638JXJnnXX8D6xmBmE4uH6oAm485KA",
  "key24": "4NT5QsirnRCkEYW9UZBPrHFfudACxHBeYy8vuvH8krVzMhn1cpg4CR4S9DMTFenUEpSS8D5GjkgWYhDaEmRBMo6d",
  "key25": "3XGynJVEJBrRvBFbKZaZARYnEB1r1P86naWAwDjd2zAmpNsPyN9SGCnYo1m2YH9sitE24q1v3EeLienrUj14Bn5e",
  "key26": "4m8rKX7NkurzcmofBmAsbkejEyMxD9UdPC12p7dMBNqHd4f11g6NFvwNMgY8KvwxMv72ytxy2zaq5qv8ZApXjrDy",
  "key27": "DMm6ocT644VvoBSZsz4zD3G1wMBhpUgc8tgP3qJgA8rdy7HsmrtkuPNHx7cWTjypppdXVQCeXfEpzZprPApi5A6"
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
