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
    "2JdpY5q1v2B79xKcKcwFJUM2ybxbT2gcCU3ref6eGnsX9oiCSQWfWTWsnagiHKLzaifK66u3JGEuUg5RrXp57uWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTCJw4LCkQ9e52rqWN5EYUxoZqb7wz1UeBassqJoaYSax6r8zzv4dnGkpVdrFT62rqFFWbHKCVPjgqVUDrR8H8m",
  "key1": "4eYPunbt2t7gN3ibq5P5QS3o6RUVgB1k6Ve7i9Hk21dt1qkRLA5yKhLmHLLifL9ZC5SXzWtwjRwBVoQ9Y8ptVsWu",
  "key2": "AXB2s9tE5vKxTm9jn6EtHesZCnBc8brth4We4Sb3jTCbzX5z1ZcY6qVrZv4v7GXKG3eCv37tG6N5Wx2MtST8WHo",
  "key3": "hPeuD5Wt2xkNFMHjVM9hxqTLEqD1dbguDmZG86sDZvwXEhk8TejsDXK1pQNYZ3b55JLhW1YbJrRvGjc25spRRrn",
  "key4": "wssQfNbDbgm8MRyr4j7LcNkDxsjL5xEe7rpGCwt1XE6Rkm1YtCEeMusYRdW92TsKrvB9TuZ1LpJ8iQeZgpvw2Kr",
  "key5": "5Ft2p7rZrBXiLM5qkQ39W8viQMku6A8YbnHh9uYjr5GKDSNeTr2NtxjXK2cZ9NnwrTHBkywv9TGpTMJAWLFXvMQh",
  "key6": "JY8DPuTzG98MZtqkioCdmKfeMqXvr1mvDdTEfz9FgBnpC1RUJgCdq5Baupc81JTqSw9YFNfy8jojJG8AcRtatw2",
  "key7": "5aLyGaW9XY5AgKeAKCFLGpYSZtGvLj7p12cnWJhZgtRWAsjFe6AvP4EFchKc977z9JyhK6yWxSnjhPANY9RaZniK",
  "key8": "38oM7JDtk7jqnhoijgPYve6ZquUxch4pLNGQSXtpa7kr7RRvwAaqW3kLfRFw8GRuebYWik22hJ3TtpNXGfQxDphE",
  "key9": "37T3GckzxzARNf7gMzGKpPxXcKqN2BoscUWYLZJh9A8E81wmTCQGsMnYduF4yp6vd8NcGoxvFhfdb1ThGuFsewP5",
  "key10": "2ZmPzmxtEZMXf4aB6b3yyZ5KkaHBis9Hk6vfGeSGXAFRejSi2aq8SJiedAza8rfWomTizqeamTkt7kpcSkPLje7B",
  "key11": "jrc52BPYbHZKaWGdrNvmGtppyYxQUF6Yvgh1vKcHE3WVvRvwxDLcbYTFwStPjdB1XYpnJXBH17ALqCcZJgej6eY",
  "key12": "dmJF23GZEnuVK2bzRVJdi59U9AshxeFERdxuLksr7F4ZSkFeNuc58TZuSJQuDiK25FFaqoVX155WVUWJZ7ZtsTq",
  "key13": "5TrtT8Vrxy9miQqqi9nAfyWRJck66jXztjdNetDFGi4qwnYmD8HdTQ14x8F3PJm47aCkNH6zebWPxmU3yPxp9eV3",
  "key14": "5v6gQcicXuR6q4UW2ezfv3RNWe3rQQYWQK2jTffW9wbwyV6miGxkm7PFBUKt8xZ6qNapbk9McsFQWKhfNiYFkPuS",
  "key15": "4GrvqRDToWbVwCi9LgkfeVbY5euYFWeBF8pvfycqAV4HHFQjWxGvRidupwXFzmePFynMWamqasFdRMDt5HmgtE2v",
  "key16": "5zKnMrdEkFLNQDZsTx7WtXV9WBzpgcoMymZV78ZRF2MNhYMA8L6s61TCw8QdspeM66qZsJ931DLYEWruNcxxPugH",
  "key17": "4LWqDrY3Xey9xaUVj6S36vABwA3UtJU3jf2EV8iEcorbxRZKWkySKsPETRSbmECy43UEE3YNBosdB5wkqhgPaYoP",
  "key18": "2jyK5j1jBqHTN67oU6YGagHt5orkeAD9r3vVom2eFqqUFHPD2xuUbkzB2uU42pNMzfMhGaSDSJ5UHz1TqWAW1hvV",
  "key19": "3Gj3GDYerwq4r3HsCa6Pe1JjNbFSCmMxquNi6imdGpNwvW4EebhReMiSiKSisTPT3QMzQhubdmpXgnYkZTcrCGFV",
  "key20": "3dXm5ErtEVYhSVRB9FfPmj2EYatnp7bjqZmEzmYN7a9BssMc295NbukXhNBNgSzpS8SA3Z4i1S89YQG3cQgmrgL9",
  "key21": "EN6LqoBuTWrRLTLqu9Gx9HNYMaWtZSuYbd7zcBDMFYraMc8p2BWoZjqNdDFtnzRUJ4DhRc6DYzwUu24Pu389Ta8",
  "key22": "5mWnnPSkWbBXZe2GvGuzmAgFRXDXUzC3AJNc5GEJiKPBuST1G6GCqYoSJR8AfXF9q75vndYAasvuSs9ZTb9oQqmx",
  "key23": "4QAZSNDDDD51AuxGVSm34ay2p1VCGe1X4zRVXoCD9S7HZhpjox4y3pmA31ancDmvXETyCgBrA4vb1LSnn2RhTV9N",
  "key24": "4mThxSXMyUtPRbSWk7v1nRnZY8jpCJTg3HkBfX8pQsPHQBxxqmqt9KHLF6pgKfiWH3UHUcEexU394zsCGXGk9fqf",
  "key25": "iJDccF3eBPpod6F34sNT43odzxND8X9LQVEW6XBueC2Nx4pSb6xJNHu5YhRj4RgqbNwDoqWG8b1wKixCTTs222t",
  "key26": "2JjrcHZhEPpbrG3tFcGqUp1mGbGEFznrJRwr9kTyTdzjqc9AeT1T681aaTEhcY8h17dsYmYbGzCyAfdn9gmEoxHS",
  "key27": "3e8Yns1JGZYvJtuXrU4nGXMWJBcwkxButMc6EwyraagtcFeddZYK1BvkPHQhtyj1LiPfxa1c5GdnLYkxtv9HpcXQ",
  "key28": "sHNHa791ErgouJCF8XJqv9hDVBXDkiaPREEp7upjcnBRek5heE3RXvnzE9sje1sWX5TZzfWW2jFSE3wPj1McbWK",
  "key29": "5tZUFMpKWK4k8ia5j9pQUE4SncNV52GKN3eV6Lu22Lror18WRZHNKrUhDXqkQVcH4spFUNk98jjahCVsvbMskTTE",
  "key30": "3vq3tsmcXpm3HQZgsNp58qxgu5dqhKSrv5Vp5geCRS2D7msHEZsnPX2bBFLTa6CGsWuAascyeDeuWaCVzWF1Nmsb"
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
