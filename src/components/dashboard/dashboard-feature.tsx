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
    "5T5twqq8u8UGNusk6nLucRv8ChDRSLkZoqZ7MnCDGWsFFGtVtXpSRFNMvBXCW5gcwU8NQ52JbhsVUhbg9GaK7jut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LgD3eULcL5rSvoHw1mSP7ccLNoJW9aJyq7xtZuh5eiugtQSirbDZ9pW8XC2SxPircXbJFH6NFrB4bjp4wrbjVC",
  "key1": "Sid9MbvEv96Foh1KgpoYQa8nWWa6y9ERzyRonDw5VyDcgCKNBMjeH2WZbN4nzy5JoJCB1CsjppLnjTmjZRZMsnD",
  "key2": "3LVdCoEcGZNrsZi4HgFR1Gqr5DHRzGSJfLG6QpGjPcL6i7NydxeYzXjeZHo8Eyd9N1yv1jX8VGTQstMEAdrTqz4v",
  "key3": "3FfmiZ4N6QKavh8Z7CamgHyWZo8saKbAM5XXH69HN9Q5GCHUov4xRWt8u2jmfagPn5s96xYZ3yCBFoMVQ9E7zABp",
  "key4": "41WTtRUiGyZUvoFdR3U8uFgimFcrHJ1k761pqv1bbdNDhrm23zfWLfYJJvq9BWYhHHDEi5GopcNgRrvx12YEN696",
  "key5": "3vG6ucLutPiEnWvg3hwFN5HL7vA6DckAsrbjdAjUeJ5D74YjW3knKshw146vTQGy3B6pNkzsTFtJVwgwKiZZDdmS",
  "key6": "4UqHzq1kkBBXXTyQkLJc6V6jwvgRhSXXLTGqAdRmDhqSVkANAhm2edLP9RK24ZmoGvpbKMq5rCedPXvnGCeiNw74",
  "key7": "P3WqXyh3bQiaPLpDibyeLjb9btsrj2Ry9LBMp8Rys6ePvAkEXL9u6q19YAzzDzoD7Hh3QacY7765Jo1KfPzDMVb",
  "key8": "5F2LhNGN61wMjsgfWMeTQ8ZGJ9VGMoee7ucDSmfVr1XGJBSPXkBLvZwLGQoLNHicc5KcMkEHtVpzz7vn9qnN2R27",
  "key9": "6XE5h7EZYSJUKYjVYUS9bVUtPrDPCwiRqDFdBjUGxz3ejJmkZD7jAt9RaBxfBQ4U47dF1EyaqpPwjeWAcXU8i84",
  "key10": "8EYJrcScpBRRo7Y3M5VPzdZMWmBjQEqnhtNfGrZh2BxbwSXb552VmtEtfvpcgXXoQ8ZbbffKmoxxJpYnDRTN97T",
  "key11": "3oqyEpMURiegGLr7HwcasuYd2yCKuoAeJJudfibnGQ5tePJxq2HU8rZp7vjPfSzrDvkFXMoZ7Nmg7qRjKgb7iH2X",
  "key12": "jwBgfE7U62wqnEXHq9QwhyBxJ4R5nL3qhU95fbWmQocKyeCyikiLnFumC4e6K8hkbaCpMVKyysvQSMZFc6Moc4r",
  "key13": "3HkRGxGn3h6vLZoVL1QftvhAYjeGZ33GSn89ajsPyGEhHk2k3Z6S3kC9b9jWRyaH9hYs2vSXSQQscKnZwyM6pNBu",
  "key14": "jvF54iXDKBxTgyEAE9rtX11GHcGdaLwe8DFB6ggYLypZrHbLKxoZnzEDJBt1h64qERi2MaGhAjajG5ijYqUhubg",
  "key15": "63fxuhcU5RMr1Z7UACY67suFQNDwWcbGqx2Pme6z9LGxsVTVxe8qHypFPZKmt8vRVKRoDfoYns5M7sLKSp53uYRS",
  "key16": "4ANTj4fJ7NrmR5Ev6ar9zvtckFbyj1gdfuuXmkY7EHpWqQhvvWJ7Tn2UjZHxsF2BVWYTCEXmjycsuKEjrRNk3Zqt",
  "key17": "31RXF2KdrEnUHzqzLRFpvcwhiVbPAJfcKtPBNr2PkKPLJd6WeCSzRjFzQh5WD5o9FpLgUuEyjQuv6Ktbuiz3My3t",
  "key18": "meb38LVYtN5cydLp6WXThWWRw9mUabkVbDGhfQnnSLvEWLUW7k95FFbDTEntXiJjSfZoBgN4D6UqaRHzKy6ZC8B",
  "key19": "2zTdDowtHqZwRoBT2RUMterQDZkavxee47puh1SNuB8r5qseBZkzSPDkMAPgeGy5efVpnnP5nhDg8r982zGMt14g",
  "key20": "KEzx6fraf5WWxJ2TTymHkuPj6EqdtAojGinoEP96pbweX35VEXery6TfSWxxYWme5d4Nys3fXKwwJZu1bDMjXAS",
  "key21": "48YKbGVtFVU3idrADMNwar4no6Bxff4A33WiTY638VWH5553yNPoym2cPTHkiFxrNb7nBwP8a59tEKCndpBZUeAw",
  "key22": "5j97MxUbYJKW5h1Wfi1d9YdoEchLhSsLV83mfaYhCBWum4rnt3PJwyvhWKbCEyaos4vT4kPH6A7z8qNHWHPNykVx",
  "key23": "5KR4iwhxFGym6tKqMuk87pjfEKGbZiVvjGRycfE5VzgSTHtefTKvDDfrUTYdhki5ZN9XvccL87RWu6GswRe7ZKxG",
  "key24": "3Mc9of53yYEGHwc715XDgyoXwBADPFARyw1aVcdZ78huffmtzgv1yz9vWMVzyny8cbEAUYP9HiYXVCn3D3kw4cub",
  "key25": "4jo6pjLTGpKnqNPrKdtW58QJ5fnjf1a7bAjt7YSSvswAP5g8PzZFo7HvsuhXdEy3Z2SZc8PxjRzCijHHZQ2xJkMs",
  "key26": "5p6UZ6462c4mmHvyWC5GcVpwsXrkzecmNhuzjzGxMBvDGU3QpT2iezEFWZfJM4ng7mbU5Z1pw7zSYy1mDnzvQuZz",
  "key27": "4ZuQD7ZT2YCoCHjnBD5nFmz3zEgX4y4HMFLETWJqggXaUC8mSbj4SRgBEpcpfBXWHu1cFKee5U6BXjLJ8UQobVDE",
  "key28": "gLsRaAnQ2a8L9uQmxfaxsNSk8AENNqWYTGk85Qpy7o6so91XyQnNmTXrGGvs27kV2ZwcxYiVbeSs1jmwMEAQi9q",
  "key29": "2aP3sKVxaUjwUhm2QRP37Z5B13xjiGM9YAhmEjt7H57tcn88Au4oSjLfoKQxpzJ7xBiJJR25qvuWsL6sW7WQyiHN",
  "key30": "2F9VNeGEXiT9GRRHYGF39HecNo3waeMAUmfrak4RZaqLtBsLwUsBCsAvbhdRKH7oDzB62wsKuAcEXWi2oJkWMmdh",
  "key31": "ytTggzLtU9x9CmG8DdFxxwhidGS7uN4iyVdZ8HBVd9UEKnabwt2L64Sy9ZXi6SH2TngWv7CZxCkX73JKHbWosyR",
  "key32": "59EuNSpfxJ7Jj6UcsAi9Frsvd9ZqRD8ueGvQ78rTLnCUSECWds8oWPqtGCVKvLQW6HxB8zPvPHGRrj7jbnpkhWoG",
  "key33": "3KAeASrKQzJtWA5684SCoqk5r36dMUkaUprbYEy9ucaDgFQa9xEWj1jKYeQ3hDs1JdFfjBg8Smn4wheZc5X82vi1",
  "key34": "5JEjYS22iHEQ8tAvPSzk18Fi11Y4AhNBqhe9QnJyRUQx1SQbkNKjrvqKvtEX1mKffbYW73rHSQkbASjFTSRXQbij",
  "key35": "4cZJhBFX72c51Wt9dpPfYFWQno3ATBi9p5RWwc7UEgmNr9ZkGXBZMS5weiViyqbXJZYtzhC7mjQ4AgBZK8T3BiSp",
  "key36": "23X73EEtD4EHYQinzf2iowX2gD6ibXSY4AqD5eMdyjwuLd1MFqtCjgLcppeEfErcy6Nz8DTSgwa3eHrFNv7V4fUq",
  "key37": "VpfmQwsBj8d3rFGwDUyGyHvC8ATHi8WjjpqsbRt9opxiPvLDoszmvYqEzjmsbQSKrF2gTwDkF5NhJ75zxBvW6Mq",
  "key38": "2Bwwp3Dd5piLR1ZSGyjp5hnnQTnp3bnKEUNGZngb9XzSmB9TsMmSkp5TPaRynn2SpAesJt15zBxYMFkwS2Z2LtNN",
  "key39": "2bJuZGTmd8A8dtBWZUhXZv8C9CGPuz4Ni26tCfxWGQmW15xZeUnAu74X2sHWDcagLxPhZmeSRfdWti37ZhgHYVHA",
  "key40": "2YGivXDTtvRBu5zAGcWSH9WiogrWZLY9wxwLkLV162pgwh4ZgkWeH83m8VbtHkMPKAspxULBWDoBZ2d1H8LRNNqi",
  "key41": "2dJxLkALN6GThxC46gvwcUcuo12qzNdCQ4sjY9vBSMxZKqFTuLwW2r9YJkqHxesWGgnhfk9gBqsS1TpqxhCNvuCn",
  "key42": "5dSJx1CnEoDQTBV6ixHym7GKaDeQKRoN85AckwuF43EmxN4kEVknreECfyzJfQwfFuiqHK3j1uYRb4qxMvrBD6yv"
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
