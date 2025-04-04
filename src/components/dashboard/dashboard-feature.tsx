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
    "RWWJj4yuk5kuFNuQNKeJjm7HyXrnnNmYTLC4YaC8wqRY6911qYJ2mV5vE1jcZNMt5DdYCpRRVRbPayGgfiB3Gi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3npXtpBK5k5noNwLjEf6cYBRfnhxGfXG1Q2WruZS8uV7dUtU8xLJKpi6qweTfuGuf3LPQKC9Pa9SkLUAPNfnw6",
  "key1": "Rc87JREm38QS15CMBqAkD4FpiwLJMANDZppTZP655vbNLoUP2sCnymdx3pDSu3GKLFux6EbGZNkhfc55venZyCe",
  "key2": "2kUr6F3B3WWFvzskjEwDZN8h76SoWcKHPQvLwCUxy9FCeEuKWqq8h99w6VEjpQxryA3tkL7JJ1LT8Pah4LVATG4o",
  "key3": "5vVWwCcHXcvfdKskgCBGUG9kcU8psngtRTXkhTf6bSwahUNju4Sg3VTm96gDz3NmJ5BNFFeCTvFxsGkvvWoYkne2",
  "key4": "3c428F5i2hLWaNYqP2jNQW5bouWxab6CbnDqVzC4ZMKjGwPgUZuoFgrvA9gzDHR8NLbwQPdnkHCW51LVPj9U89Pa",
  "key5": "4zRjRqZ5wjojH4u2aExaT2bvYw2n5kkvy6ZKyMFvBcZtoEaHeRvMpektu6TfxJShKQBkHhpKTG5k9JJWNbFPCJ4W",
  "key6": "32cFFfPKRqNgXiWjWgH6oko7wge2vxiHctmoaRy9cW2oerVg3HEQQHXCCsAkJd3BDWkoTcMzx8icKaVJZXWRnj84",
  "key7": "dzDTvio4wYaz7EhmfPfNFH2xREunQCBBq3wnUkijXGgZpeE1N8ZaLcBHUcsxDRaxZUnXGMQfWqeiMgDzd1afg7j",
  "key8": "2FrZnv1hwYCsJBDViFTw9acMtngrtVAUmWEWnYRPkfDUQYNygNZcevZHPVVbMjfGrh1QUHb1UWYQ1squ5M1sgLGQ",
  "key9": "5qJ628MS8DY7dqFT8R71zekEKVujdhpah8GjX1tshxCsJK7kJKsu8zUfoh2hid7RCpkfW8eCzLEsUuYfJwXq6CNL",
  "key10": "2SpZYqadvHSfyKwu3QTPHL4iEF3v8ZqnRDYmxT5VQuqf1LdbMxmUvTqCdergmLo2x58FvfXaB84Xg9evn6uSQGEV",
  "key11": "2UriGrZL4T4eh3r17UYEhmxm4vNpx4vFWTzhZ1T1RkyXacjTZtDACxjpFuJfk8VDTXWiSzmW56yzfE8jpFZMam1p",
  "key12": "2groN52dTc7PWuYfc8cQ3qcsJbx5w14jbzAwDpLiDD3GkfKTxm4NNVxook9MW4fVAFeMAHsASye3chTJ1VSi1r6D",
  "key13": "4oswveMoEmJZqcLR5Enomz5T428ggTAfAnHPmE3eCnQJMsM9cchUrYdwyh2kydzWUfGTt4XtoUmJNZ8aSDBRrG4X",
  "key14": "2AxrDodv4X7DH4mZTbrhGjp9FoTdcFLgkoduU3M79nPsh8eXWbpsP8j1AHqiZvsW4SEJEyWM9eHq8XYYBBv94eDB",
  "key15": "H9kNPc7fwcxKNZZxqbE6qWQTTpmF8YwZoaAPkGPsn6MoARx8cGZpscJhNvJVdWuiCMSSciK74VCSKkAkqKcXFRC",
  "key16": "iEXQmoCx6v9df7VQgVhG3wxar3sGqENqpqA2fQy9Y29xUhwaAEax2H61Cfu4YmYt5SkQYq4ueL7QjmhTSRQNuhG",
  "key17": "4D2ybV4r3mYc1F2VxLE28FdFbYfYS2BmXJTiEj5xRnMbvWEZv2Q6QRZcguxwt5HQDUo68yuDGdBXtrMuJUp6w2i",
  "key18": "Ry53vi8DtKXkE3nh67KJ3a17x6s8iCGyBSp95hceRivo4arhruPsroxPnFB9c7Nc7CnSBg4iiB7o2cH1V7LU2PP",
  "key19": "5H7HaiUCQ9eUByxYd2Ae1nwfTK5dEP85iYDAT7DEuXu2zk1LVfxsQPrpLjnfiqcKrzQwWA3iJHnbUh4D5nZwxd8D",
  "key20": "4urZiW8EsUPVvxwYudWbbeDrPx8CmeKcRYEVW1UwNFkH9wXpSE59W5iSmCtN1849KSGiKhrtECQedK574m4hCqii",
  "key21": "1Gt2m7Fe7Ydh3yu5m1eoATu2LkWJQQQAGcSKfp6GnUVJ4xzGvpvSF1EbVScXwA1QmF35tqK5yyG5umUTyVNVYrp",
  "key22": "5VNpPiPjocTQ73P8Nhrw3ydfCmsvwJVoB99ZjqCZLpW7ishmfBHNvTazUYLw8ZE7rPjGX1eawzftuWrWRZ9r8dV3",
  "key23": "3RBSSSaXmKv4NsSCbNdUE9QTsQmRxegfygsqMvqBQBpQ8bkKdHGC7oa7Ruyb7qSSFbGorE2KuyLYqiF9Sw6qAL8m",
  "key24": "2eipQkR5bDqkgKuYvh5Jn8cSXeZqFcNyVUAe57JzW7q4dFZwbSd2j3B1691yWhNkGJdN6ZzxPXXhkUHCpQrM7Uer",
  "key25": "qCNewcmYwrjRP2yd8NmpBF68Asrzzt6gG28GJTbjfdepYEeuDz5i2EKes6EAVgVK3GXqApQTtKHPeJDworfVjfM",
  "key26": "2VQHWV6H1U4SxNDaJ5fak7CM4jEiYFeA895MLZfw3LANRczTLn7rEs6m8WHo7sRgMcyWRQ4ybsGXkdNTGayBC5uz",
  "key27": "xRPoqvvUytPXKW1w6VMJTwcQaACCAwhFVhEqnQjp7ny1nc1ebiZaCK3yuvndZ4nXutqKA1kXtf1YCVzvcWrbsqp",
  "key28": "3EuE8qFvsXuPyDHDLWBE7FoqC1Zr2rTQyMvHQjwTGZ9kPN1yRMZWwVSNwuxPGNvm93U13EVWiN6HwjaBEjzsPwK2",
  "key29": "2Q5gXU7jHmp9SUzGvTvM45EfmRUcMmH99ExbANKNdrYf9DZy5LmKP8aMAV6uDfZg1gZwFbP33Lx5xHzswMojyZD8",
  "key30": "3bSfFycz8Ba5QH7CeKLY2XYKJMsn86GAvBd35GwCk1rBUDejPb2TnHzYMfqsLMiAz5BFTWaNzfUSD3YCSd1sMpiA",
  "key31": "31w2yacNtevaqCkgfBEaLnVqjmtm752S5huAmQ5Mar515PnfUSXdPVmBmxePYWyAjmXZpGPN3UxJMWoBiarkEfe3",
  "key32": "5LubtwAsnaVPBCEED7e5uNrfpod43oiGHv9XULEVAyjV79KUjMFZJSkd4BxKZkxNXpFmq94Vi9yNBfwsLkr8u6Ct",
  "key33": "2bjy1vWVxtYk6i3e4QyQpbuAr4yQQejo7z39u7ZttNbkzpN1Vb81nhsa5i8cb4utGUi1vzbhcazEhd7KPGmtQU3Q",
  "key34": "5coYdonsjr97C4jMKqkPFp9j3pe5b8aRSPxtwcnW9G1QV1RsToEB3bHMzFh51ykujiafojqju6VRLyDvjenvMNWZ",
  "key35": "5nUBdoD5mtsfAWxEb8Afunjj6Ux8kAhuRGxgGNN5XoS31DLBxP5sLco93Gi8dgu24k52VQNypkUPsuLWJv5LDCUi",
  "key36": "3WX1SzvBY8wS7FfpcxG9ZtGyYae48iAJow8BV3BJaRKpcVVhV6JaarwaGWhChiAqYYGw2sGunJkWnSaRdCDcpkSf"
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
