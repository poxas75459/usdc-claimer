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
    "AuLA85RMmdqg2CpPeGzrQqL1eyDFBvQa2q4qPYvvoxizugWDGK91rLf3oebAGW969DBryD6CSzpzAm4LwnAwqC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XADDM6V3WGpMwA631dfjScRLHeHFzCsSZiZMubM8zt1k1YWJAXkXFXci6i8tYDZ6MPmzYu4CJjHx2QBrJVspvVW",
  "key1": "38ookNtryAAjVJ5tmto2SiJsGLjw5GSpCj7g8JmwuMSyjRoaBh7gbwrWLm4JV7pfaM2M2QmwjaAaSxfXHA7knA3M",
  "key2": "2WQzgiid9tVa4EqFAjTF2hJbfrCEcofM4PpEhYwC3jkFNXLQ7vVr2U8SgjtpGSy6kgawm97wz2Wkw4SQDcadxmEH",
  "key3": "4fTTEXmS9n1QnYjZYRTMMsMNaYftDdox6LJDsXDminHbJxBynrWcp9hr3g3uompnRrJMUhjdUami3kfRKWtgMjeP",
  "key4": "65A6XPoXLCPbPW1rFYrdyz8L8pz4m1moG1EdeCJbtNDPa8iUNgd2gs3RGzvTDUZYDDa4AJsLPuSuKrc8H8tthscF",
  "key5": "27bojNSxxBWZBpUswzoYRAYhaZLqkaP29feBfQbWkmzuzaiEgLL9F4zkjM1huYEcN4jHnLaeftMnBLHzGtG5aZmj",
  "key6": "3P4xr1WpMeA2njDyQumZJtnmEMsbRaBcD8HaouyWC5ubvVcVL9MSacEQPaaRRgbfzLkGDjsn6RDdW6nsXpcSUSm5",
  "key7": "4ukFG1NYDEpj1VNb1S58xyMaRgxRteNp8VgRwK7WNX6Hy6Uf13br8RN2y5MqBicLDPQ4rbmbW2ZvJ9xiC9BfWZYj",
  "key8": "2SJKtR9Fh3NnVmAF2fC7WkqpiB4MX188FeYbUHQGRo4opjbEJ4FiDZSXuxdSJdZw6idAhHWr3qMncuwm6ZhMF7pz",
  "key9": "3FjP7cGgkpdC1WMJYi3jxrscwgKLkXCN6oqpZ4N3X8QSs2SqRuJP9qm3PCHkDR6tSTAGwDzaPQCE5ud5pJeb5Q7H",
  "key10": "2bshqJz29Pu3HEEFBBLEpEgc5CSGNEtXweWNjFPfV94ArJdh4hmL1dxf2YHC1ov8bCLUwCFj8WEcvc1DyMuXWEwD",
  "key11": "5CW1XNFDVMb4X11oRR95ZqgMsoBhFtdEqjn1V8FSSF5gbbBJBPBfBRupGCje6y5PeyNXABPfHkK5vGUSjoPdo52",
  "key12": "36mn3jQYkcqbdDvCnsHuYtRyuyPEipxY8ZANPBhZBPp17KDRJyjt3t3LCze2T4VGak5xjp7c4z7FQTJYZLCxC1oF",
  "key13": "TjnyUDaGxmFBifPCdCXBpRsTubLE8jNJFeHob3bvdj2Gq12AYL4Q3PLNm47kqgS5rFhkdFugUaeBTzPuugvDe9S",
  "key14": "5XhkwWrzQEqRbZTPJdQi7nLPAzKH5seXX7gaujw9a2qtu3JjkxbHPpiLCkDhYMAaErkXTDDxTrpSmfXCT1t3fKhL",
  "key15": "5ZPuZaHGmkgqvVyhY3XV8zLKMGCqPr131dVuhw2bNmmRxobN7SM8Hp3Kz3FyTakhAj7pwDFDuPH5SpnN3phC5GYQ",
  "key16": "5gjQuiyf7o1ZKKbXi1RKrs38oABLLdkxhhQ3T1mJ4zMcCUrt9vYqdvXdwEzHnF4bVG9Phj6BNmawAonHj6vPXabe",
  "key17": "5NQQ9Lai4nxwGpUKmjf3zEBLo3JuSD8p2BQ1jg3PrAkDVAsesabNtgZbdTpeEuD3NsbHxwsgnnLcZvoMzK4apXkJ",
  "key18": "55KHMHMJPztDBz7xRHYxuSu7cNQKrcv3PmXwhyVgdwzBnebPevpYTsRkpxZdRggRmVUBZw7CL1c9ekTKkjxtZnaz",
  "key19": "5nSMV2SNFLe6r73mCYhQMk36mNidKnp2k2E6GjWJMU79vydeQ91p2zBYkLrE4spBSaMKCG5sJ64Peq2KjDooXPwG",
  "key20": "4xeH8vAhoT4Ky1FWx6mWbAfjcTJ8RjNBytbAttD1SyseyKd2y8cvwyQUMkjsdPwUFLF1hxCvs1fFVb2kqAUqf3Jt",
  "key21": "5ZWzxNLpKU4ydfHoFUx7hbDLAFnPf9jnV5YubRSSwKN1qw2VRw42b1mGrkbpnpoXTtNk7PzFA1XkAR5z9347odz4",
  "key22": "3LPSqWoFX9KYqCZeAvsqWjdpqdw2t4L4Gs6Zwjqfjz1kXW7Vga5CXzYN7UAqKDxFxoaEPG3paYWxVVMMriz9acXo",
  "key23": "rBi2PmAYcV53Li5u67f8WjwPvwwdL1ex191AJyXZ3bQihpZAeiGvRx6E8Jm2aELdaFYEVDBVeLrvRBNtUJ1f1gg",
  "key24": "31PUtEGcV4VTfPKH1HShdKCv6EiyzPiuEGoCA3wWUWszVgkvnoGuW712L5gvCuZp1yHrQNwLEvdoUi5us2UQMJx1",
  "key25": "4bGZq9u7gkijsS47X1qFQEcVCrwEG3nVUYu9sbPErtGKajksS3i75uA644sGcGpjqprPwRR5ZEzUn7A9PESV6BLi",
  "key26": "4DTMeSS9YBdYVENSommVJtqqrAvGSzYgEYbbTjeQsc1QHE3uZ8sLPeq1UKWA9foBjgQoBjSGwdmx2pd5FkV5NSgM",
  "key27": "hM9wFGfdUE67z4nnaEtA3Go4HsPXzUrv2Hmhnyu5S6P3aVY9xtpD4d9K8BsT23ZDw8hEzyBg663WUDw9x85iqpL",
  "key28": "2UMdnzxfeH58yidEtEniGQyuuPCUxujm1E4aUDHMGggwiahfaQ5McYj9kwt5Rcy1zVGMn9ixvikR32X1Wu968Msh",
  "key29": "4rtksHn5FqH7ZBV9PFoX2CkcsmxB17W24zLcQeG8YrC1UyzAZuuuktUbZxN8fVX4BfJSPTpB3vdHL1PYGYJbMD9",
  "key30": "5ECjEA3SQhuXCoymGyb5SU3XF7DEB2aGWKZdbAq1UVHAtvvEjmUzNCZ7zqoVqumMcGwSys4uzzqT9ciWCnihqf6K"
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
