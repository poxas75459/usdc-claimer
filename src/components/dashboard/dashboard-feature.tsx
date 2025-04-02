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
    "3Xen58KbQnYWHS1etofZ6uw8L6rzUTZ52yUiGzpStL75H8efNbFqNNKNXyniCcWv4qR5g7XsgsEbuJ6eRhxqoHgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LSmvMKVz4TdvW2syjpDUA42rCbbbdNaZCzTd9mDvP4gYmpfxgVxwhapnYxEVvdn9Mb99VNudUpcTdXqEEcYHVgd",
  "key1": "2yjAjpwtNLzvKZkyVsJCbeQxee2tLtE3gnt5HJ4cHHRxNnoVYiBs5aDDkmYMpJAGz4hT6azht2dza8ztekK6d79J",
  "key2": "2tpZHcfPfmSNdvWTmGLtfAt7HmbtWeuHGHzvwJ8ejiZebewgUfAxqLrsbpz1nLyh3o42AYUQVJykQG6wTV9FLLb1",
  "key3": "3jic5QYjVmXH2FV2r5P93YAXStdUxbata7kEMQbNfH9hx5YxuGp8ZHaS64BvZ37hByentDp1R4v24RxqfXMBXWf1",
  "key4": "4aina2ceeEJUeLaE6ur9XDdNyxCPswCjkG5V7J8N2babYcAs2PyNZCHVX4Jzhz1SxSy8PdiAjC9fuv9JqyvP73AR",
  "key5": "41BAnxBRrWZ9YYfg6u8iYXwJM8SUK9ghbSdqd9jL5hfMLgWWVDGE59HUobSfuaoCQ1PVbqJZXPKf9AunBgEDfeaC",
  "key6": "6ZRSKbUPFrr93JqP3qZ7PDc2Fgij1R8EMF8HeJ4pJffsxTyqS9UsKJvU9TiLtW1tWuFfsHF34P12ri4WnryJUvc",
  "key7": "AACVCfmoMhN7Hg2xAxAHNupaT6NWLH7FdNEa7cxxWdFmBa3iYywcGwftkcsGwrZb3YQHMvarJVCWcsSSWKH1441",
  "key8": "3R6becBMiCJsx9cn2iK2haX7HT6nd9XHxiVEE29hYY4GPuYHykPpCRMxD4G143FgkMzx165XDVUqJYZmhs2xrTW",
  "key9": "3Uti5D1v9c91dRujResmaT376oJeui4afekjdUBRLYncUbFV3NTCKKuVjnxQaxhgugw7nCuBHDNYaNW9ByiZYGuf",
  "key10": "EwsWtBULxJcvYX8w3P4javxJ3Ddv23RU4j39CsbCmZdetaZFzA45iQ43Ry1CArVZ96vfbesp8i1PeNVRXwqFUm7",
  "key11": "58ECMP6aETVRHWAXVeQruhVML2KdKUtK9fH44xxjVyjq7BsgssKYe6ekdLTgFrq6jdwAHPFkWvNzJtxg8QtV8epz",
  "key12": "3imoQdyJxD6Q1brPJge8D2uFL5JzJorim3zZXoD4eeJgqtsLSpQDqhYysZTqzQvvhxYTrEL5Kv3pfovbsAVaW6Bo",
  "key13": "5MxjTyqoYujctEU7oijBumqDDFhJKWuNWF77P2FeDGs9TsfVZ9qum8vgazocT8wVFTfjLeLPQYL38TwzD68hmtEY",
  "key14": "3SJf7H5NSw6kZa93m8rRg1tnEXZRNRrPD93kMJRNMxv46KHQwbjMP1vbifLS55Suuw7Tt1eiuW9BmJGXE2RJq6Wt",
  "key15": "35DxpjtkNcgJSB4tBYdxKZ515HjxF1EUq3FTr2FKikm8JH1pDL2tqfERdfxAF2JGi5QdaLEM7wkfGweT24aUvdoq",
  "key16": "3TxyKwoYGN1RDSEvJ27U79f53pBQJLdohWxpyzUqk4TAY7CqQPrhR2hWwzM9sUngJDtbm2RpHGzrDATbND5vtL4w",
  "key17": "KX5zcb2btrhf3m8vbwWrbNw9F9RUMRqGyaGqBAg8TuFVzGkUPuyo5zNCfHYdiumqioxZ1Ag3wMm5gRes9eDPnTR",
  "key18": "4Y8k4uREb328vpoMiBqM2MGg2gppKiykEexbUxPa6i9wjh2Qgn4a6Ff76n8D9aKMe5xxtZJb2qCCoem82uxgoXuT",
  "key19": "rJRzRE9kJjkJSjHpKpHaDmcwdHYeEJu58yGLGCcWGdUNc9HM2Zqot7fXVDJVMNZnzbF6JG6rybBCkY14zoK81Yi",
  "key20": "3ewxiRZD2MYEc2KzX8uUK9Bpuzoz44NwpXLHeo4GgHMoMggZ5jCez5qNdbfoWk7rQiTKQZ9fFeqZKUp4F7jkfwr8",
  "key21": "zdtQtUz1pd8ytuYUKcRndAhxK3LDNZSDV9HczWh8Y19KUU3cG1kMpZVuyRmc57An44FuCGXoKPb3fE7jFtMNhXs",
  "key22": "DMH3RZdW7fXmN8ZjwD7BsHMCXzKSDDVxnts4ibzQXKJTNr935JxrXHSaoVHVpqYCj4y2JfBZgoZRJywwjHwL55K",
  "key23": "5jrgX4guZj2HjE5ieQRoRFgj2RGxuvBnu2DPzvJyGMnh9YxNzvvBv79SX4kHBFjKUe8RBi3d5gCKkY752ZTdXcsG",
  "key24": "4oA2XXAq5xomfYgrQUgz8pRSpTuafh1azmyvPRJyK2ZYrmn9iPptoWcfeyzNuznisqVCGcaT485DTkPWz8eCQGVL",
  "key25": "449Z8fTJ4pzZuny1SHVhcYy22K8pDGvopWuf7TQvyax194RCeG6AYzwD248SWz8cuHAEndh2i4R8trHt7VvTXcQx",
  "key26": "i2Qm4d5Es9gD6e8WTa95t9iM7erCVD9AsjGHgPH7dFWtkXSAQtzJsAzuq1TVypKrFs3SzucQfedrxHVVEfYHJvR",
  "key27": "2eLyw9hM5FLAxHFs6vWDuDQ99ZWzJ62bP4JmNnop84Lyc3dx3bX4VEf8NuvjsboWZvUuS5Qh6yGcszPn6J4aHuaB",
  "key28": "3zW5iLe9ruiET1XpCcK9Kn1pbeHyaPLkJCLeh1g14u3bdw5zp3Lesy4fH5NuJFv8u8FTZheBhNv5oYEqcWoba7fB",
  "key29": "2rEizye4RiwqdD1XnevCeGthC9aoTu2NyNcNv6hQZhJhtZDw2CuBk875X7WQYENmp1fQkEYZWtoESBW57ZgQznQi",
  "key30": "4hyMTFxNsygSd75VRkniytdwyDS3LXY36qRSKSkXpX6bPq8srKdZAZw2oJPe84YqoWQk8e91JZdUwUcgQG6MQV9a",
  "key31": "42P3y5L7gq3e9RTk7Ugj9uLRApw2P894awweyXyca9QEHLyv7TgtnZRtDZZ4L2hExzU5ZoBSAtYweFjgg8bdqJvW",
  "key32": "eopGJmvc9nyZjrZ7GoswgEuN89SFBjoQWFDNBsUd1ftU1G67MJD23CDsybGPX8vYY3prWYHw3gV1cUbXTxgRMPy",
  "key33": "5YVrofVPMfLSgBdow6k8PUS6SKbxfvRpDMF6VsHCJtwPsPbTKxR2mYHhyA4Ym7Lp6BHUzZMWpGNru9WEMBXkVm8R",
  "key34": "3euqzp8tA4MemF6CThi3rY9svjjzQComRNQvYVexpRBiuxTerrV7sTn2X8zis3zPPVysjrRdrkbLoDz8KgahuqQw",
  "key35": "3LjoyC2bZW4Gf7Qn4X5MmGUcjkZnDVoufnCXEsskNAeX6xjaohwqFsFYcrNjfeHWs9ES48k1tArGv4u2isxwrr6k",
  "key36": "2x3SmP5RKYko2PaovkM8spPiVEguuAuXtoGdkec1gzUyWiGdzA5rFoKfCz2oBAugXQ8QBiydqPqHGtPg2HzWGfGH",
  "key37": "4bsEvcMVJ8mnqpSvK6Kbej5Ak2nFudoL2gtH85qWf6YUKVcn5fcXsCWVq2evJHuM1XbSF4Xnd9g2g84WGUTRJeUD",
  "key38": "2wwGZQ3kwnwd6o9BpirUqo59RG1QCVe4YxHiaaFpjap6xV4t1ejU1AEaeX1fRaB5DMiCQhhRizs7hjHnXBYm3P5h",
  "key39": "YSvuQMwpM1TfzEqfJ1VNYQwQ6f3TeQErL58aMY5EK6NUTK6V7EMS2oiFFcEPPNwRUf2MVgsxaPGNPPkQ5GrLdkW",
  "key40": "5xc1VURQSS3AdCQ77Has96RTjAzz4wJZ5ZsxHfXga9i4dkUHijyhHDeHkz8WAVoRLqiAkYaFD2XhzRNunRbqKcS8",
  "key41": "54AbEE21etA9FQg4HCZhZgqXX8dTjA5Xgo61NMee3Yk5fuTDjoPJHB4UpFNLfaY2HUgoySrEqK46zsC3fzmqYtSg",
  "key42": "5g7vQ2qHFFRUAvi5ZdNj98aMY5WmpiFmskD1CaG6cfo2pQVXo3ULWfXuaFevtGSr6FiD7UZcqvYzrQP82jYdBQTm"
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
