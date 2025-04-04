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
    "2HM4fRRVbgvp4k5nPogKd8wdoAmHheVtZ5yJSQKhfU4ymzBiumLgm5VSQMtCkMhM8Ep68C5Lr9rKiSH8BHfJAFgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWK5kmxP12WoMfkmpRLyYwpF2uHfwtiszhArmveBctD5SUN52C2wXHXVYdyB3o4yKgGp8w7a4z7JCmACEp5rwKb",
  "key1": "2pYJipxZA4cSJoaKR7DNRqQH6ChVfhArzZbXco6HLjSUBKE8JoCPs3ACVkhHS9UiKSejUXLFTi1JYqykMx2LN3sz",
  "key2": "gZxGMZX2mV55Hin1kLGXf9QGfX1h8JuH5yVGnonq9PiduEAEq9P7L5Fon5YCW7q3wVSTf4q57A5PzxCKFWKS6v5",
  "key3": "5AMBx3MBRh9geCqGJNysJSWVLZ2oFZf5FMFnZUHUYtDLmmoFbSDGp4N1CoqDqGAQHPLH4qk9XEpQUny4LRfkPmXW",
  "key4": "8BD8mpvXvrf8gVR2WhEfGxPza8DftvLMj5TaeYC7hBLpVt91gkqPjWEF3S6YdBCZoH8YuEtgbuo9HdAERAMFg9Y",
  "key5": "2DDfgygJ7npWgabLGTNQb395y5RmheQjwrDxTsqQAyrTcDwoRzHQpzDPfsgcwMPNPSH8U6rDuvABWyfrmgT2uWst",
  "key6": "nALxCfM18msbQYUzAz7ZnR3YR86h31DZiJ2nuQ3f4cxD2tS9btKSunrTQ5Y79SqTJUsgphfX5TJVky27M4Fvd2f",
  "key7": "2QJTYGMcQwFiF3EdMfjoVyH1Az45ux8F5pimjQWkPrMMf7fzGxDBxzS3M9dYt4jEDv63wGTkGzz4Bvw2uswmv54f",
  "key8": "2PnHCy9kRj3ZEMTarLg8wQEFTzuXqiZT4rkjX7awbNrZqZymH8JzQC9XDWpzwHNKYc18rBFtpz5PyKB8SgQPqEsS",
  "key9": "4XrUkPEKBVc6XbX2Ak9a2nX2KfXeVGPtDUQPFmn7Jhj3K6wPPCL7KH2byBxvKhK9ce31szRBrwxfprpjn8aAMfAN",
  "key10": "57ryRPpHZeNGjqRPD62AMkAUrrRKeXhtr8sEDtpfpXxjPbc5TbToVRtgZqnJnsQiHjDLE9uE1gsq61xMinYmnSJP",
  "key11": "2iskYYRQnqWeJk9D2JZKnFmZbaZagbdSqVvWjGfbHMBKN6BPcZmfBdK52mY4SFmmBSkVwK2JqU6dJejeS8hTrTg1",
  "key12": "2RbH6fpp77bvpUuZd7UZr1nwWSWDqFAx4yMW9LwqcAq8wiCtaAsHCM2LX1iyzgNQBEzVqYZLAbJkvXW8XbBHeq1n",
  "key13": "nKEri2FgNu8StyWHSp7AfBfow7PaehQ4RErahLCm1AasmsskQjquR6FXFcKGZ4fKwJYfeJrVaC5aewGy4fwoGtF",
  "key14": "4nqxqYw6UuWNVRhF93pbqefJcQveudTjjeWyWQ4eWyy12qvuChr4LgVzbAmEXoyHo5rUfMKqEhk2nxtDettqQvPk",
  "key15": "5GxbDRFeQmoy936jj7kMQnqBqVNTFS5dFqE4xojbWN4hzvRNxaj9Y5DF5JdnSMwA6zFAuvw32jWg3Aqd2E5V1h6K",
  "key16": "2qNycd2KdG6moYaBaVGNV8paAvt7qNnB84HVEAAzPupiEFRv5Y7LoMoUQnK4staLLwkZ1K1pvD3upV66ZVimwS9w",
  "key17": "5Swpt5oxXBZ7MbJSKBbtAVWeWj64gXtfww8PgGomPXsBizXCiKkGwmV3M6KdszFUTnUPZu7VQLtfgJj1xNq2tT4i",
  "key18": "fZh2DfUsk4nQJGUW9gv1qjKYSKmzjKzLWFMfEv7AjuUDpLcxZzL1TibrEGf5WXhPnpmiFrdrFiJMeDin6zbUhaV",
  "key19": "653JLpEn7EBGZXGwLT111Fa1t84hSrMdHzZQpzDhvGnpkqQv2Yre9wf31GoZpnR1XconTmXufWonN7FQbasMbDHF",
  "key20": "En3caMZPihRyyf2Pz7gFsdErHvfYitNqo4YAFgwjyVdwbpENEsaXxx4VFhjyv573CvbXvUCiac9tnrwpX7de3HX",
  "key21": "5ayUnZCzDjHgTAwySHiTRW27bUtXbbmULucL4tgbeBJfuQ3kZccMSa2natrk6AEnCKQqg5B4hHtQmT61cm9y44ZJ",
  "key22": "2F1E7XCLLUG4RJLTSaPUUJv9ZGB7Lc9Un315GJFzr2V5Q6aDFm54oBMWYSsM8fsYBA4Kw16x7CF4uvAHs8a9Qhn4",
  "key23": "3TfXaMCir5sXYJkyzivK6EVVnjxVxasQmnQxB81vCeohjVHrUUzQqrbYBKXCdeZDbcpPD6XjFRVYGmZdvq81ihkN",
  "key24": "38X2ebCN3AhzSAKAFNxdLnxtGRVLcNcaNe8znpyPK87wPPaKpk4dVkCKYpSkUbGVLvVPpWQW4meEtaU27yj3imNR",
  "key25": "31MX86wkQnPj6M1e9gJtRo3Zjizvq3DYRmJ1AZui8itDHMY3vyExhgSjSd4cWk8BpcQRKusJ4goTyQP6Uos7mLw1",
  "key26": "5Cd5XRPE6nTZ4sYK4f191PL2pcG2Y4D78iw8wDmxeyEQd4xrRGgJ6WEik1TL2StodhBxvCRiaTXro9js7usiARVH",
  "key27": "yFDTCvH3d3223A3cCJVbMHek7ttwhcrWATXNMxTaFxm2bQS5rLHTwwooAnpChS1xN5qtKwD5q7TQRTDz6C1iiNP",
  "key28": "3weMjZENujAiTjaFeaGk84xZ1zhSPmh6zwLBt7GSTmN8kjze498sixVScuhznmTwt1nBSQKuazoHrn4qC54LK9dt",
  "key29": "4Dt133yW9FozgaqLtVW7WLSBwNgVkywXr1jpm6AGESPRHLDN4rtFiqATRjJ4ZHmkdNpxt3qVYSH1N6UkUmLCSmAV",
  "key30": "4skF8mqr9uP8sLfP1w7V2JuvoTEYnKotMhrLQwgqjgHAEM3JGS4mgjQfWecydbwRVTRHV87K8Abz3Fcbr1AwfNNx"
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
