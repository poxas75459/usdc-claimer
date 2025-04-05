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
    "DijP1iujpqudqM3aavgNYdZMYJXWdtzKWT32kmGzqaQj4wdSvYn7Zj1PuV3AmazD7C8nwgjvVcSk9Ncienh45Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMpUQzNrkvQrxDhBo2e4pffWsDqeKH1oft4t7kEAbMWmNjFZXmsgrXdGiaGTMwwwrkDHWpixCEBkqx7PKQsiwPK",
  "key1": "3nWHCPQp2NTFmyVrPVkm2ifySz55B5pf18LJXfoNdi9JwK8BsfTyqP2H4Ue2CMwHJuseJcVaZTVXwUUhtiWXREPb",
  "key2": "589sGJR7spEAqWcacmgGFM72mKWttVdpEJi4j1NyQjLTz63g86Jzhot5MvzH76YdfoFeuyYTx9uqvjNGAM7Z9E8U",
  "key3": "YEDyNj7EePKx7GWyKdhAsrBEmSmyNnzAmanmmSjqU3WuGamr1NX6Sa4CGvZVmQH5NjXdyE2sqLAhbX1TSCDwSqo",
  "key4": "22UV5GjW77nnSBN3paSKhCLfSGUq4Ng1a3xAFU34KueXcV9MuWpui8n4hK1EFMkbXAhcBpNnDrrVtiuMv7zMKDha",
  "key5": "5d3cvoFkNhrHMrVUbczFWSzGAdAJAax7eo2kc6LpjRLV5Vssva2bNDhK2jtXfPds3PhcoV9NozJetzJBKEQRLJgd",
  "key6": "42Rug9TVVBAoYfbu3j7FELj5Z5oLAWPaxhS3mLrAd3itLW1zaLTwSDSBYDn6w95XLfWmgsjixeejSJ9srYFTYL3g",
  "key7": "5J2ApeUzQjzZ7xArWz6UYr7o2qycHNQqYZsVpUCeiz3NQ3MNXYAod7W9CCK6YiXeBbYFy3qbnwzWYGUw6W2SpoYj",
  "key8": "62bzFr3gUmKKJbDKYgU8Lo6stsefv8rH9x4CTqRt7UPzGY4m5kBV3wfzZgm5bV1Lb8a7k3qZ95G1EATu9Tp2kb3d",
  "key9": "5V7tG2kT7v7WYNkB9AkCHJqdtgRpSbQawyuZCPuJLeVxskvhTaK8ubbqZP6b6pdDEnmi5WhtbvA9uwBe8HjjaFHM",
  "key10": "4ZEkoGa2aHpXPWoEXs9sKGFx9unN9rT1AzPMBcDugS1qZFpePCLKxi5cqHDZgdvGK6gatqNppYhwAkWJQpXcgX85",
  "key11": "2kZijhrjdVabSpfKTFM8cFrYY9NjMuDJGqHCxGrq5Jk3gigMrnVpdU2GZTM7jy6MMR6YpJG1RXCUYvHAHB9bZwgy",
  "key12": "3AH3whheRjtLa1v2nJDrqSdrmrDrYpzQssHPgRgMqHHFQGMP97ibf19QPaU9cP82TdZDe6W9c6BSBpnuJJdRwkMF",
  "key13": "3sJc6keD8Xyd9kFewgZE7pdJSAxNuSSB55TfZ5ibdZVQBGQUF1xWLDTdPPxpZtZat3BHG7uQ4d5MgehrkXQTJcfk",
  "key14": "53oGHe4SzoiTVYr9DjmumNGiDeJUmEhwpjsu4n6BbtSd78519FJowZV3iokAeyxWN9aAx6QSEY34LNfWBzgcbVDQ",
  "key15": "2QTcztqpSi57jGwiACVvjMGxneUBeZ4nPnTVfwEu8BubEJb9jxo9kfde8sEfLvEhgpNLTVM6CxVBuyn1sYUrjnxi",
  "key16": "4fMMpVjsg44ibWhYciKXewt5PeegNCLipMmJB7pTX1mTrCr6qtW1d2EeRin9KuNs5ZrhmgEWN5cKo6iqugmSUXJQ",
  "key17": "FfYbo3sH99H3hBUnPV2FgWHaCTWJCo4TCcQ11HVDrkd9kWnZZRUkrriuJGwgA7Hi81AMmL79YNgdse5me9f59nB",
  "key18": "3hmsPcB7ZJ6Ya7u33XyhwpyMB7bRgqYChhcyGG4KoazyRtYcNkgcet1CTjRLfFCQHnspFsqGb8r4wwYkKcgP596j",
  "key19": "5WdmUmX15XNuZzfgPqbuZF2aoW1D2eaj4gZaWQhUb2LtbBH2sohPXsQFwkJ4Bq4us8dWr9DnVJ7ieTB1RMQz6i9h",
  "key20": "2Y8ifpQCH2K4wUuS98rgfzwckTjP5CQsd7VfRDjAVkt3wfdS4pcwizL1As9YgAMc8v5rV2xUupZg6zckXAGTu4Lm",
  "key21": "5nCgNmgB18twpkjxSXyYo1V7ELv6sqPoLLgpR1LJR5RK2fZC8rcAzjtWz77JpqPpMzLoJiSjkBXThptdXmAkoTG9",
  "key22": "4nVZ9mNarSFyS9RwstBQARR1WKxcPVdT9HF3VtEmRs71tBKuWTKCWSyq7JtqrxN96ohje9ibAbq1tCFZBPWxkgkj",
  "key23": "5BBUCjSTkjh6NoXmPk3SgtxKdRNhAtZ5FFB9SVDgz25rk8rXWruaSaLtSve1VZm7u5nNDtn2HqK3aAH5MnSBX13G",
  "key24": "3nDj2nBXrtoDmUBMJyc7pnrnV1pXhofV2N5G3wDW4y8saGjjkGSbFPZyahSJwqq8bqyXtQp3TqPKugNy742i7fVg",
  "key25": "jz2dCN1cNpGBtHa5wpEtjsXGM9wxdMdFD2iAnjepUray5bovXTS6f7iuoo9sJdBf4e5gJXuCx4WnZNNMeAEdVZf",
  "key26": "2y7TqMntZjScxKFHXUEmwVd6job4RfguBFiiNvYaP2vCUtzP2atsdbbw7DLhvBaKJju4w5mYP4ZAhFf6CaPvytLX",
  "key27": "2jFqcvCFQjv6y6mG6uCqNFYoW4WaXX67Nm3i9QpT4XLfxQGJMnQ8AkZ5HQWKbHRM99siKBN2XsA4svHVEHKSyymV",
  "key28": "5CLcgYcqqziJgnxWpEE6XpWjW4BRExYqfC5A1TUVrfP5ZWwTtSPtyqzhjJKc615vPn1dzCoyEC9agxhJbESGQDY5",
  "key29": "5zDZynTuTexQqJJcgV5eng2CXV4udo2mpbpUBKdHtpDzGPq7rBS7cMMEH6SWroc73mRsHwMNFmxaijf9jx77ZuE",
  "key30": "5oQ873s4KRTC4S8nAJ5QqG6gZQNf3ge9ifpbT4LXgm1tD8Mn7etwzktzCoyf1XFFLF2ckCsEdkprsGviZMnJjBzT",
  "key31": "5jsXWpQohj73MZyaLEyt9p8pUU7Ahh747wKkoJtbzENEeK6ees5cyuoCLyKip5jf7rmyA5jtqx2Fjh8NZLY78Vxc",
  "key32": "4rDR8ywvNtZxtDfQpXWrZjVg2AfeaocqDFtNa26APsftym6Z1ggyxh2UN54hzZMRoBiwjxQtj1NFbTX3DBUHeKDJ",
  "key33": "5kNuz8FCYU8Lr9wqaVGEveQnJwfRu9LDr9bvcb9v6an6UVwj8SUZMbmSJCuo5EDfVVq3Gz8gPPPdWUERWYGKLjr"
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
