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
    "4xps4akJi8F7sjcuyYRihDv695Wt4GRujNZRnPW8hBCLqGVwDvjjwgjRFsDjcnBdmp62e2WBvVmUn8k4EPe1j9b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7X3Hf4ZSxUieFKik52m84Hf1pBZeXk3PEfvLr6iAGFy2FdfrKPMw28nfwtbdBtrMtNyVJXa66KCRXXNEFXNudV",
  "key1": "2daV46FpkLmhX3HJ7CimzWVLb8ypkubZFbGSPnhKp8VzufmoqXY6zRzDXK7qyxPZk9jTegzR5MJp8WfDht5eycsU",
  "key2": "5oQdVsVJmrBVvzpJNnW4nzrgGCBqM4Gk9qBg78uvWpx9mweB15NeSoQYDPt52E48Aozqt116dAveQjpqvPKQbfLp",
  "key3": "qhtqPwVsFfEa14MgaUe324dBriEp41KMsezgW9urF6xobHFLHuZpBWHBwm2m1cdrGjUZVTe1k95Ydh2RZK2To1a",
  "key4": "5wxs51xjVnzdQXUdJ7Uxgxu8pBqBwTRXpCBpUSMygERkf27EwK9AKZJ8kpayTbJ3qEgR9vos6nUcKxrMGgSDZhXz",
  "key5": "4ofrhCRMxdkgpHBcog4m492XPwMMmhhNDUSrUTMQXgUezs4kHnyUJZdpiJ69PwHmsFjzBTM3Vrz3qqyk4rR3nQcG",
  "key6": "3NWh9g1FwmhimcGBkCeFrYy6MRNVqxorJK86cAayyggnyzqCeZChKUr5hP3xuMeKhNeqL4iuGaDkdn3n1WHubRHp",
  "key7": "459fc4YJoFFTVS39Np6d2N1eNXGjyVdAzWqT5YvuCEScaPyESbmyhNYzF4fvvW9qWstK4dwSuRvQ8RkTjBnZL6vp",
  "key8": "ia3tfWYaU4URmGbxNEhQJmWWgZfgL9rRAjMmoDZhMx5eHLdZmXGt9NY8FqwchG21pnMpaq3EjtXfE3QANuX3jqk",
  "key9": "5C7TJcjVvtY516fwC7aWs1DDW8bQc61r21QUzrZETXJtSVGcskFybrUWPaoa2zXyUkuzQGV7BuG7oTs5Hc9brEi8",
  "key10": "5k7b5gcGNAgTzzN35TmeoBFE5HdEHm8R4s5wpyTvW8SspiwC9nra3FmdL6mpPBYNKeszpS8Bgtv2zwfA87LhDarE",
  "key11": "3NgMCr2DXsPZrSbWWmgFUxm5bdHuqW13Z2Woh1SynzupGyGTUrGx4nM1GkBh4SvWx1keMozg9viB1ULPi6EsFjMZ",
  "key12": "j9wfipDA1AvT5uadmD9hCuUkqEMfdREQLTS6rZymotdVrwrfkz5evKghAY3zFnYcHXrcfWnJTfmDAQ21ur9LEs8",
  "key13": "4mSmnaDbb8SebVWzUoyjD1RX9Ka2BJT97FKK7SoKzhe2GZYDK1RNmL6ENhwnQhjYvUvBYZ4Bfy4LnntTQw1GoQJG",
  "key14": "2Q8uhMUueGmpPnsuAVMJMvYKYEWLx6qYfr4dGwkT7GnnFcdeXvNbUhQXDegDCaYhpoXM5qYQp7VxkxVyH3SHxCTw",
  "key15": "CijyZRCk5dC9ZUn3tVVCzLiPHHAN7qBRCnsmxDPcPRHUBi3hihuPBuHzGUei7Kg2zDnPFG1dNFGJJ3abpVoyuF1",
  "key16": "5AHrajnxpbihb98iui19qBkyUcLdcnAfzkQpQYPn9xrSJHJaKMnub5Y7HByAEXKqnnRiZgACSkyoAbQTh9Bn7Mgc",
  "key17": "5Y5KjrvniqVNGss3s73hPLupbmNZaAkcFQZjUDDhK8UuNkVsBAMuqFmBUA3ixCegkhDMy1VLhPgQ4uuAoVjhqR7h",
  "key18": "3JBkucXE55pWzjoGxNR7NrT3D1imVLoaYkfMkRAsK5DazJNTBqa7JpHqotxiUKRv4LiisnDCiRkx65ZTDstFwQvG",
  "key19": "35KfnPdzGyy7QQGvbMeDBX49ZpWWE1qRg6zUZJkMcwvhKwvKhrsYbynxrsAKuMiWXM3Mz226CL3P5L7MabAATNMM",
  "key20": "64xQjQ6vs8NDnWKTJb5jGFqh8ssKu4jEMdWkPW27Q4FmkaSZpG5P4mt1ZgKPYyYDNAtRNhpaDESZ9j6RsUVKrDw1",
  "key21": "2dr1BKjAAXSfYNongT897MWPSbGUUCQYvY9nBLuxbdW5qZCmLJdtBh177E5JSCAxGGAVMursojFQNFTUqtniSsBT",
  "key22": "4gZ8dgaDYBnUUWV4PnyyPjMNL3hyG1G5p5YNNNfcHts8G6EDg12GXCevp5rNhzxaAb4omRFjM8eVcv3euy5ieZHW",
  "key23": "2qB1j6Gnx9GB5r1nTNrkGiBMpkMaX1S6zx1FSfZrybzWo93MggM7FuFe3cfaaisMYBFwFi5MHsKzjHzxgrYXkrsc",
  "key24": "4QNDoo2nrD7rATmeqnuiNen4gUEYjGDX5MiRrJy1HgPfGj8FYPFuZkmmPyvCJq9NU52XvU8P7JsYL5mGwscqn8nV",
  "key25": "2fC2gk5PEbqHJS9A1tk1UqcZ5avDoSiEd7Sx6dz1pzHNvjsG2sArEo3fk4nmkmt1KQevR34kDg8gLPhciyaVokB5",
  "key26": "5ed2qvkUutvZ4PUyBdp2AZiuo4S88F55RxPJ1UzRd9UHDcWYCMKFLSdwfa7FdUs25dY6n7G38QWH5ksPfbGL6deq",
  "key27": "WrAm5M8g37LQwKdnE33Aoy6j3tsJjABovktwzmUooX6qJc41zz5UXXgQxmTANXzyRxUJCLDBpvwDZmR5x4X3PB2",
  "key28": "teoLbDaCWQa1rjGaUN6R3Dxt7ekBGYzPW5D3ToKRRUQgJ65gjuMEFqjVqKxCX2CT8DaxzyxHmDqDNZs4MynJSHX"
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
