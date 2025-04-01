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
    "2TQjtPGoSofutmLZZBWVt8TRqDt9sdkTvj7ykzWj4fK9ooniBhBp9jDZEUVmgyEqLddA28MLbnvwz6apJ7Zd6R9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bhf2JCfuNnp7WMq59q3mzxzP1acVvW9frAzvyFTehJdTDGS3SgE9G5U2847fGi7qXHqdrMR1j1fzijTiDxc4F64",
  "key1": "5cghD4nt4iTWskftuKASKvdviQzuxtzGsVCgVYxjf7WX1c7Bb13baxEwVgDmZdkpzdR1sMHT7Q4tuSjfNmYBBr1S",
  "key2": "47b7nAhdyP5C98wuMCv6MXo1dbvpLU24ZgLs5JD6HHDM3UzogDh8M1rsBntchj8szFWtQ4CGsrvVfQvMZfLMfd8c",
  "key3": "2URf87bybAoWdLD8YnTUZS5G7eFoJa53Ee2AkRCb1Prh2Rbr4HCjGFspvLgBH9oV3bM9usi9mY6SqgpxT1caq6fL",
  "key4": "5QMsrZPBAEQghviMnimUc3AsWtWL4xn21H9nfTPMUNtLbr2oCWGCqDjRZHyqxd1iPcKaQ61N47xae6AFopaFccfz",
  "key5": "5JVe7bFntDk9mtcoMEQRnSLwG6E7GFqHjaMX4JLG4YXuiUPKfchww6GFYNdeKMGiNLrXR2SyCRsT8e8V1eN8M3QK",
  "key6": "51xZDS8eU7y99BxfNwjNyWoTYELgp4XqLZbw4UP2HbfLAJPF2XV2gfdwHVtGZobs26sL72vU2uXthuz4jpdoZ1Mf",
  "key7": "2nVy8r48WWqPLw4CHygKuAdXDjX9kzvAtmFzUKfjyyMX7bUzagnJkursfkfoTA9SG7aZhFVL9j1deN3AbRe2cbqR",
  "key8": "3tnBAw4RemXpE7RS8JoFCCesykBogLrCijr7KSzb9aRtpGB2w4GU4GUzpjYx6uSRNYJYXaHGxSH2ioRDqjx2yMdq",
  "key9": "2NGSWsQToYkw2qAMaqxb8qmBGTRAyvioEBEDd7RSRHMVegZ4mfgqsdag9WaZKKK91Pm14hfbkgVoMj4ynjPU4EVt",
  "key10": "65F6uDuXfoQWxVvGo4axaXG2KjYLN4nZgsseg3bnRpezgjF9y6U6WFCUQyMJc2zEgn8VRjNHwRyVToiAVNr1PcDt",
  "key11": "4NjJaxxFttxqAep1NyVLNxRrnMxtzyNUZ7rdLNQkxL8hfikYGE5CAvs3X1REhwpLus2evASoU9jAwKPhWXV7L5x6",
  "key12": "4HRuF3iAfzMEJfTLYNyDrHw5m9iTEL3tRnQTXdov7hzc2YqudpY7SAWpMts3UCWPBdyq2pErABEDz76VwJEEodMF",
  "key13": "4LzR2VhUG4YgCbnsWY5Kh3qmb4VjmQuQHAik1dY3AQeyaXScechvaKkSyX4DJqGqbWCoXEze7rqTabnkyNhYGqkk",
  "key14": "3S7KZ56QzT6LKGGyMvLe9i4JiBKc2t996nnPcYXNHABmnBjRQuvkwDDXujT3fa7YpqnGZQJpUvPoLDSswptMPZwM",
  "key15": "2dfW9FnkGjJQGzySCbD42w4sZicwzoFQQhyq83GBrzLpP17bpcJQ4nEh1KygrvPDEff2bWaKpJyh2YLprcKBouUo",
  "key16": "TDxJwSKXPYxYi8EQAifsoJ8XidXR4Ue34GnN3bjZAnpMBw8iK7mGVZokpmtTX5qBouW8dj5JQZYuos83Zg3fzNc",
  "key17": "26wAeNAkGKbJBz1qDkQKXGwT7qkzvUesC3E54xDBY87SS1k5dntW1uaU8tMyFrUnK9PQ5bvjjzKZCzbCBNh9YWWb",
  "key18": "5rC7w2sQKo4iVUwHgxkKUZoAgbTkrpoUGthf3L84xqMYZnbzvsk9p8BEs4dEpZQJXaQT2dv7jAqFFU9qESe71L7Q",
  "key19": "2yZEEVnVhYNYmYBjb5zjcZ3F38KKJmMPQQ8JgZTBNNVMAeE5RcCNX7xke8N842KEWoo757d3Hsa2brf1g1cKzM4Y",
  "key20": "3rFV6P5Phn5wDLG572P9zK8wYYEbCJmRJwDQYwU2mmsCbBjVL4kDGmZRQyPBVvyWJpDe78W9GwKsUA3tofinq9uR",
  "key21": "3ChyQTFtbXTDKh3iS6wVuyGMW4CskMTLrkPtmd12gE7qWeiyUqcMALvEvDsL3Ka8mA8HBuhQFUpfhhzsAUQ1mCSy",
  "key22": "4JnWh887Kd1UBj7toiH57FuESmobKK7LijvZsFCuLQj9xPwoDoiW8U5oU6kjbqE7wDm3PtYVjvTdZRddYKQRQjKr",
  "key23": "54gAqWoTebFFhkL1cFqx8Er93S3ScB5cgdz9Cb8GHvMa4RwJnPyNKuTzH1jkV2seWrxb18sJfW83LAU4yy4d9JV9",
  "key24": "39zJ4YaaqkeqkpfugmV8JccfYz7y3za9o3FqAVNuhETkAKtAJB88RMwQyUvk37SbKY53y61H4sxmNLZdPtEstkso",
  "key25": "4XVrkKgkm8L2Ky1JfiSoCJ9o3LEdd7iRzn8SuKfdk8Qw1BLKAy9tLxpw1CHiNBMS2p4H7jrczfQN2ekDidinxNB6",
  "key26": "4JCZMn4udnM2E3j7caPtP4217fuhD7WjacuHP2uV3qACH61eG88WAeJgjUb5NSyPqRs1wrq5GLkaTpvhh8KjVYei",
  "key27": "Jh5xuGPSjbSPnSe7gxZmKg7MTs7X3ZAXyGuWarp1SU7p4zRWHB6G6xyxTCnhAJmtERRHaQFFYJWkcokVKqM4q9d",
  "key28": "y1bMKCfxcvTTQo7TXRDQrQQ97rwmzedWQTE3dYGMvQvp1Zn9JQSbAkTPk9wzeWUkutw2etMhdf4p9M1tags2Cmo",
  "key29": "3wnHF8FCanMzWUNaAdYvsVo2EZ7SyJ8BvpoUASsx6ULN92p12p1p4GYnkU4QeCsE2bgtZZpq92auTQwGy3c3ZqpT",
  "key30": "3bHi7QTDQdixdMxJuw1E1kLhaaNDRiwybn5S42LbSknPcYJs2ii2BX7N3iZPfoqbV7r9JiXSYCK9UDLWaERyuvCE",
  "key31": "FfduDTuWZDHEUmDWZeMwyCaUbHuAiV6as4dkHeYLnce6e7Rxo9oNoKPWhz9k1RecX1DtwCYjH3MMFMmwUhmERTj",
  "key32": "5dyCnCWVDkrYzTeSpGwP9yFSk9sgAmEpxJjVvjdcnxCY22bhsMGVoQERXEb8q73ps9hbD8ZzthWyNykTkK7fbrSY",
  "key33": "5M39HKKY5wJiWnHqEBteqnznfMjE8MFBhCvW61BVQPFHCmXFUSVcrKfmu3tP43L9c3ecvCg98vE812FqBdpZKdUs",
  "key34": "3HVQteJpiipuwkjJDjf78PN4m2zAdTetUDgueZQfuZjxTHo8DSY1DwvEAbE5K4B2heTFY4k3Ed2XPrLg7g56SQSU",
  "key35": "38U8XCyTngxa5TtaWUJAWaFNCXDnRhaAtPtH7HjrKofuUbq9jUdeRWQLbJngL4YmsF45kgL951RETPnYxDXx6hwe",
  "key36": "51iPgrXCiwUEs1PCmtyZzW1xYuRgJPxGk3R39ByjJPQnFtbQDsNrhmrMntbH5BqAj29y3r1csrySa8PJDZ1azwfQ",
  "key37": "67cyxo5EW1pSFG96qwNktGF7DgAFRDauXfRM7tEuwqPWexWVcBnKen5w7oj86a1Q3xezoCm43m1yarYh9gEcGMVS"
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
