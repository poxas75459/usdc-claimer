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
    "4tKGLRzPeq75LXcpHRQtLgueF4JwbuHQghE3VYf15RTU5wkzAgG6p6Jk7EHxVpNKpuptKG6j9HVSnu7rrCamE4nN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKpJa5pzFy7j7tSQ7FoH6nxHnX8qC8TwYcvqEEr29vAT5vMnBVHuVLM6FQ2QKFvKA7t9PkhbZAgnLMmTgkKgfU2",
  "key1": "3JxAo9ZEhC5QfBc12TZUtXAQ5gK6yxXHv5CZqbqJXhhRZzJpQb8TbK4BF913ymFrZAsFVRUHR3vvvtB516ak5NNH",
  "key2": "566iqAH45odCJNfKaEXzH7zT5Ns3H2ZHNJ5H1qZGKSR5FJZuVMGJjX6GXrdFQhiDHtxjZGpBtgsM5kJkSkHya2sj",
  "key3": "4giCvTtGy5sd2DvR4f9nEcpH8XWJe6mJadT8Lm6dicxq2pD3SQUEFZzjNNDHc7Fe7ZbXPLaLdV2oEAyuEE7eCfXK",
  "key4": "2rvcQ3qZ2Msxbhk1eHK6zsowV3whwfYKcT6SNsffstGBAzCKJK6WcqEdqXWiDbLQLKKEb33CckbNqjuEoK9ammx6",
  "key5": "vJ3fsLK1eYMwLNfzyVCY5RtjgeKwiKogWhzj3LxL9HSkjA4Haow62TyvceywjAr2Y6W5Pty6scXTnBQDGCJpXQ5",
  "key6": "5aTkUBp3j19N3mNVHgLMz1bMW7c3RzSJMHLEhdnkn3tJoLCatS3ty9G6m27EenHSj5jsan9mWtRb3UQw3Zkv41Jo",
  "key7": "4Br1a4rcNjjTzWKFRBUyTn7Kcsr7Px7ctjq9aAijepkvwAkTer8mbUhgwTJvUdxs7uxp4uiAaTJHx2XyaU9HvEic",
  "key8": "3ynYchmAWxLUjxz5wVosLyQxeqPLSgZ6ePNbNE3Z5L5ERT8TyfdipWSqkUzaJV6AEwWvjBXVsiBFzRPRMncbodYd",
  "key9": "3gZnAkYPvyAUKM4M8XJjyvXU7WXtUNAnQVxbNKv8kx1xUZW9e5jdGXtMLaorkVFY93akjLjTW1yAezehjRD1r2xw",
  "key10": "2A6QvmaD1AAAdnMkXTKvWEPnrdg2kjVt7z4uRETuVANSivoQ5TxXSJS3JRpmLRkFH9nZ62R98nK6CGcpSCgy9f1d",
  "key11": "3PjciTESKRrnfj2vjrpLYD93fL7FQBFY1cYgi1MZ23Qc7HkJ8SmRu6dfZsFF3qEtupZxrWtR9FoVqgFC5npfu275",
  "key12": "2uFPFib5wpgNaYLRopm4TobaAkZWUXqisVycerNJ5shjwWzF7fBFsxWu7kJa1vHudq8KR9KNzWTkqRYV6gL7RsSw",
  "key13": "5bc8a9vMhQAGiyjnWki4u76VkzohQpKusgqxYtvzstpej7j21HvMNU7zNAa7VirD2ac5wYtAD2X3irimqKUftyN",
  "key14": "zCUd3jikZNbdydS3mNQjk4F8sTf3NCSAV6VzwAgY6PH2s3zkQmaMvpz5Cu9sMVitgkVjcZKXS15QqyGZZMUBcem",
  "key15": "5289mbuQcaboV7c7vKbCuNu4vDmbRFo73ntQpkM3bKkHXkhpGCmaECJRZnMENn4jAj8R8BQcpCohr2AfMznngymQ",
  "key16": "5xEx2PSjMCLH38iRCTmU2VjZWhVntBKZbDv5GH3danCXaundBXdm8qmsMzGK8fVUEokTNx87w8Vt9b6LdZmh9uJa",
  "key17": "2Ne4r7Zvw5Mn41WoaKkJBnx1WCdNwDCP5eJ425YaKQiGwpSozqDVV5pxuyGuDAJYRQnngff1kw8uRVoAp5wxwBiE",
  "key18": "3vWhRzW6zJzgCzFQKTiNXDnEddoZxdagrKmdsnAXrZrLt6LqfG7Ksfs5t23MysSZKUXx8huSkbF5CTXriFwm5cwz",
  "key19": "44d34dcZQL1cFmGJVhyrwL2krpNC6N3TcTENcGkgeyb9B9cs6avKFTPk2k7u69s62u8aTAKJRHwcyyT5miBdigRf",
  "key20": "2CUKv3VTyspBXtaSa4FiraqfSJ9EaDVszR62gpVsUifACvPWgQjdMRrKDfUz23k6b6JUAz96ytsA1gscNrL8oG2o",
  "key21": "2jjKqxtznUdDBuKCXh44BVEnxFGBSZra1cCegfuNw1rSKtmTzq7nHw5FnvqEPGaVR5vwRS2tdP8uvHbcnhgPGiDy",
  "key22": "5gPc27ThhGL67gSuo4HSqWC5jiM4NAPPSCx5eDm6yShRgj7FdmjhHsGy4R1R532xnxttLqQbW6FtfpTFnEAGmakj",
  "key23": "mf2bBmLz723JQjBc9bhHt4hFtw1dV8WShyeq4pQkaFUK1X9BQAhetHEnvR6cLRf4nAkUrKgYoN18bT7T7RYfF9a",
  "key24": "3cg6WyahRfKH5fxjJArpR9JynkekCrtpUmfFhJP2sphL1csUrT5HUQwykHeVyJuw54KYrpTgK7ySoht5MzipkXbr",
  "key25": "5TQ4scXbkCB8fVFdvFsuq5xf7gKeyRp36EP941Bv34SKZMq4UeGs6RdNSFBFXPUYYYHjDMLb9foDv3dAwr9ssUNU",
  "key26": "2y7aHAawHq4ym13eCT1YcPeRr1oX89Fj5RsauRWA4rurTcxKPdrUwVhRwj1yvf1wYR5D267TbJzMm5AXBPQQMjF",
  "key27": "4EadCqXZ3Uy5PfgapFDLDcUqZVV6LqEQiTd82AZ5LqJyjnzDCih3sKGaHipDmfHteeW6LHR48KGgqTMbnMrQZ8Gs",
  "key28": "5hcQpgCkTizmdQKCjhi9M3aiM2SiynRWmRAfUfK1UPVZYQHzgQpDbK9bnkBpXtf4KNBsuHhPgwJs5XTbGUJCgPyF",
  "key29": "2pQYn36PMqETDPtAYNaSBPAHzyg2TaGM6KKVJ2zQuwZTPqgfiLC6KWLb3j9gFhtoJEP4omfRKcE44EZJeaiL78xp",
  "key30": "5ob54BkhXXLiyViwXTfEkLpSnh6HVRH2ubZV29KEecQSoHvfFNkhLY5qM9GV1CSAyF3JUvfXHfaYg8Y3w8mTDfkN",
  "key31": "39PaAUyfZVrAUgcw6T6pjpQ8qmf39bQSGAbFaaUG8GJXSFV1wRaXvynadUsfNjgzX9g2Vw8JRJCJtZg34cPCbTE7",
  "key32": "w6PK5yz1vRKhCuEKoNGU5791ZVZDeyH74fe2pF4C7Hz4jgc7Fecq3Cmz7AdZ5sw1AiwDyRE3Y7Nc5bz1GF4dsyk",
  "key33": "41iANrwnAJkSEsjhN8byRGHmBCWZqWKQFLYSYPSzD6gTBEi3iakJd7GzSvRHjpcy6pSkBdiRm1HPoc5juVFRrL2"
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
