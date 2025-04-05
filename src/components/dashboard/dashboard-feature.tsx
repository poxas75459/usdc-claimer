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
    "3v7yJeNiSp2weT2UbosWgQezWKqsnYj4X2EgZH4RNi2YNmbYWCkaT8FCNt76gb3UiMCbf5Ge3ywwBjDmTMYVrBTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sowc4swppFjK9ZRfn7ZCsx7LGTeCxJWn3u9iXU7raq2XoMD8jXcdAUTHHmcmcCpH29bVtpkPuKg6RQzZwkbsgu9",
  "key1": "67k9VFJuiwGaXxmnHjBkNmmSc5SD43ZpyCF4P6ha1nYSABS6MqYRcQzqnk1Ji1BnYszZz9B3wDvZbmmYt3WHCWxA",
  "key2": "4gcduLsRRzecaMTtf3pFuNYxNNx6fvfRFdCNS1RuBhwPMb5SbUCbSiTRjWxYkt5dSBnLGsoidJekdczn28AdXq8P",
  "key3": "3HfF8LXE9NS21zBgWTTN1auNwvXWE1Eu8WSDPpWeYtoDxhEPzhbBqoGvv6cgdP4bhtEWzVN41vQiAC8DxajxfR1P",
  "key4": "2ombuaYx6nJJQ7xBgPXLxkAth822jZDwEGwZwLHrdtVHVGYLgZ5qKCP8BUF751Fzq4qehBTAxYS8LdsxvnkmiYAU",
  "key5": "22XVbHv5m2fiyfASnPAv38qruwKKNXHgJ2MUw8C5RDNGxt1MoxDaCCJy6kQwVXvhEPm14eTr6ALozLVKXjvUnqpA",
  "key6": "iWA6nZNK5zq1B83wVVStvc1jUeyzkkN2do5v2eJvUrL7B6GaeQ6RyEhP3NvHHHvZDLGgqb8mwgRxvbJZPy7ofzE",
  "key7": "29qZa3SdTT9yCNrxLiq6NtcS8fnCsNp1yJ9yHHUkrAV5arhPdnGkMJwxGAvfmZqrwqAPXS1uyrrnMMgb4rJw9CM2",
  "key8": "qdirA7NbKMZT7jwBNRnLAcqvvghTdxEhrn8BkAGix1WxdAEnpCnU5yCFGoWjXbaz6WLsrsasRiyckAehbbJS8ZU",
  "key9": "4KehYenV4mEL94UxsVRkmZUUuNX9aMC7PoEH8zwdmvp7WAzviJx5in2PAsJxN4G4WASuRQzknusWTAfpL5gzEAYE",
  "key10": "4vMVYwF8AKTJW3cCegzsqacgy4mUnMh39TWUajM6oXvA4wEhxZkwEwpPiejSivhNmzLfGgKqL3GU5fNd9PRbZYKa",
  "key11": "5R4ERLCBcAybAdG7HsazbueUhYgoKyaeLV6UvuVw9xtPePsttXEsRRfaoGNvprYSduhpR8ZvEAwVqaTEWVTSiAJK",
  "key12": "5XWy4UvUi6Ki2cqf4oxSTcSS83dTVC9JuserKwqESUM2rVgwQNQXNeHa6MGLxaD6m13WoPvGSLbkvHBEyegu9a5g",
  "key13": "5HdaWRrAf1M4Frr36vNZYeXYX4FiYXuzyut9VCUNLCXFLydLWpiJzL42T5b3xewjh6oiyHGayY9pmQJqdmHKRfTE",
  "key14": "Dwxs2AC1VRs5p4Waqw4LTQ1ZV6jkMv1Mc14TWsBsaLuSWtq1yxhgVkXaT8ExqruAT2KRYrXjezqhGvLHgFreQSg",
  "key15": "xe4pZzFzdgEucDqJxFQQ7YcQ6ujjKeRKAxZVwU2zB8JYZ9m1xW82aQvZaFV1kbDhPgvngZyptGxAwMPAjMD31q2",
  "key16": "2vGfbH528HiFFH8HJxyGzZUoaPrsDz4zqgfnQTngcMt88J7uYZ5Af5bYZDRGkoRoqVbvHh7LhYmspsSL7fnxrjYw",
  "key17": "4FWV5LjRx7vAhQA4mBBhJCThK5aRu3dZXVqXa9qaktdEHwJei7hhJ376dXMm2VjMe72asfBTNKn2mbA64g9yPF3J",
  "key18": "gefTQFUgQtUrre2hArriQFxCBXH2Zef7b12b81LxAx5Y3cfCw935mmQNzbg6ryBdjduoQrEjX7tKVCmxtunmmjw",
  "key19": "MgaJjCrfwx13hQKXFWGiBpfnZLX9yKdrcV5EJHg33LX2CtYvJD6a2P3tHQSBC3fAwCYn6ar6DcPG4Hn7WFgrcgV",
  "key20": "43hXqgEgSzrqpptxkkpQF622FSs5hzTLUFEw4RpEa5QSE8VkrpaWNmgGsuiDbJdPka5Sh3JDxfQr2wqHD7Ch1E6m",
  "key21": "5DeAy9ZaWH48rQKFajwgAa2kBCAnZZyZnbpVWbNzYzknXcJsA4zP7t3zioMJFUMzeQDgJvqfAQ3ZnDrS2PrTFAj8",
  "key22": "5deF1fKrUbXZQPMXJuYX67CTVTqQox621xti755E9cYoVcBw1M2rtHDSqWd2stMViCQRMfBh7ELVEq5MVt7i61K7",
  "key23": "2SQTzC7U5RJf89yDd9ev8a8i7Sy9CULoQ9L9y1JQgrQMR4iiE3Ub24pLKsqwgKZBsFJ5m3NRWwN4cwwb4n6aQjBt",
  "key24": "KxxwR9NFTgMgQNzcjpijqH9S75J99TVVzX3oECo9smsec3Yr4ZBinm659Roxu7jHtHodaZa1ysUuaggy4oAzgPP",
  "key25": "5ABYAVXsra2ZNmWkfRwQZJiJLq7E4e7xQY72jo9XZx7bZRJetMp7yduWq3XLDWirNDsodGn8iajoSX67j2H8PwrP",
  "key26": "4uUnitnN4DvceKf46SJQkDiq2sjuzUbA4E5RXMkHu1hLycPwJyPQokvjrRCeU4DHs4DGsbLsnwGkLZLJpxJE93Hw",
  "key27": "3etVNcTrkoUgfToEBvn6HgAw9KQGqNjtC92gzZT4R3fxUW6XKRErK59zW2i8jaPwDte74zLX4UTuFutfn8pXBNxw",
  "key28": "4M1BFkvH8KAhijQLJssPZciQZtSMxsuEBd36QFUUbK46hAAfhnvU2Wc2Nj6E24fZrSL47UYCUtvR1Hj6YHwVhcTw"
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
