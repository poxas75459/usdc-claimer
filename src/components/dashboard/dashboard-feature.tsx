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
    "5SzjTPYV6jZUuqMMtQCXwKw7LWoZwUUgm1QXQwSsY5Gf4Dez1Wha8mspPE6MjDPWTesaqzChRUmQMZHPTfcuRYj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WTcmcvprUVvBwqsQZBGHfdnAMtiWjJ5o4yyKfeEMLQXseLYx9ULG4GuxTSL4ejUPWxGXyrpLkFt7wdykHDSfAE4",
  "key1": "4H1EmCPUaqQS8qmUUCuNHGfaHGGz4FMsPazLb63gQbmVS8R6RMiTctYynfh6MLJBBfDDy29cKwcWea9ogGzDcgJ2",
  "key2": "48qBuX1zxDdk2DdUD9BD7j1ADrurXiWr7vbXU2HBVzehtV89qvwr2pQyo1x19DX3Qbxub9aZXaTod5wujn1hdxkJ",
  "key3": "4fU7AURdocYbmouxrZpwUbDJTLmZX9FVsKWKy2KgDe6LrDEVAFAtc5tMXC6xC1F72B1MdXxuCxNNAFcVf1FJq8r3",
  "key4": "r3VsBNG3oMBuM3fVYhTotcAbBa2Yi75egUqkAUicpk2AxTYApTeSzn2BMcA9nbRcvsFhzkbh398EjyP8PMpEJqD",
  "key5": "2wZiQCgv3t8UpFMS5rgcHB7yS2DDP7ZMBbhm3KBZ8UFNdeuTRDEcGfU214XZPooBt43gwwCKpt5b2kx2ErSqvmtr",
  "key6": "3NeFVBR4McER6EEt3ogjHfZR3LKpmcZXcecSHRammZe4b4L59gaJNWk2E6WRAzFY9keneRT14HyAhQp8VZ4nxqC6",
  "key7": "3JoruPy9gYiudzouvzrsnGxi4yKwLqxKf5YbmL2jsxzZDkjMisedEPM3QYPSSm45HLD4ZPG2ESLyZ8wtRpHmajEm",
  "key8": "2Xn712TfbVNgwopEyhUsiSLWxL3vgLgGhceKx6Lsc41Zf85rGd6TbmrQxa7pEJMNhsJ4WHuC1mrkYKipyxm5tiuV",
  "key9": "4YGHoHCNY6Nhv1rrjhuxM4iXPDKhuxLsQvMw9eUpQS9mUEHRbn2ksR5ptSRvLLsfZkeA7q7ioMWHJbiMpPitDpoL",
  "key10": "36UTtmRDB71RUp46CZKqEbfwQj4dRF1ayi9RssMAXbzcTJc7C28q5NWtFymRwqhWDZmm9kLcRL4LJ5AhSt1DQnzq",
  "key11": "4ftAD64ajitvzaNrAoZWyHmvGcvNgnpyDRBsmkeHYF62vcbd7AZnN4z9g3cW1sdQL8qwYcL4pAxsdw9AghjyXfsq",
  "key12": "34HVsSamd4Hvq9S7kQeQawuAYaDbi8WFeKYjjSQSeRLVHT6KvxedYcvcc7xgNnzY2UeDn8Xa9bBGKBaCpgC4DVCv",
  "key13": "5KQk8vTV9ZAZDTCQ8vZcUyfgn6DVZxLLNfspiSY2h2wezehQa3kf2xHnZkKNBcYN7qXEBdeHco6Sy6DBHWUFSMgh",
  "key14": "2E1LpYj1JFDEbD6D7esCAugZPtJo2aqLCzcAnGRESx7VH5Ef76JHxqSrfVnPUvpPMhbWrVbXgQaTRWnmtT6nNWpg",
  "key15": "5fNBo573hzosEL9f7WKfraKamnZxh1KLf9xpxZZHmwMxvCRMZXvfmzQtfhwbX2aHoYugx2nX3mAVWsnDvf1CDHaH",
  "key16": "4UNAEJu8rPyNGLTfCfhNNRScuK9QSmhacKJgpW9CKCFP6yEykCxaEZVsLbNfGwDgv3TySkxsz1QdhuwjoATRPLA9",
  "key17": "2XsNGee9wXwLi7XuTpuGtAL2Yq3dnnXdwHWKL8khNExTQBsfpat6QHsofT3XpQzvoNBabXXdBLQ1HFbNWdA9Ec7P",
  "key18": "wnZToDMEd3zXJcFAL29J4CtHhRav7qYDw7DdwXMZgAz2cPpw7cBAJcoLY2E4rwSh3D2NAp6vvsrDZFK4X2e5mdn",
  "key19": "4MDLTQ1CfjKa47bD4PutiNEAvqBmEz2WgJvx1RyZ4FDz2eVkuyuYZyXaKX1TgMXjRCsVwsCXPVxVHdnJak1CNfUK",
  "key20": "2EyBQVafrTMBCzN3XEGnBsQA3XggmsGfcDJz7iA9ZxVCKinHmVkuyEg6Me1utX9dK2ys4bsrbSrzoH2bDraKw27Z",
  "key21": "4v3zbfXr2T1hu5ibaADJEm5AccobbRyvJnNVQHZY7LWeVXsmeLmXQUpPZHnMsVtuC4Vx9vaH1cnYvHtX8EVqifrw",
  "key22": "3Ro1NbGxGfjyhMzHiQUPPiVQJKAydBvrYWuEaWwuKwTKrFUBdXoL95cjXCawvivnTPi8RQWLMxmuc6tMCTfzWs3g",
  "key23": "tBQNdzQqAzGe4R3mHsmyZPFrB8TuQ3hVhZaauSVPfHptZhcuvz8f8ApjU1C8bF88FriSYWNWRDxLP2GZifYsBJv",
  "key24": "2PJ2JpQNwtFYKtQ7ZLni6LLvbpWnJjp3BtHG51uDAoUSXbtjbb5ntCRxxY2EAaPBxAx8A8zMZbVu4ebqt7DCvrc7",
  "key25": "43NGAV6zEC2YhykEUDaLy5cQGKVQU6niyLmiEHKcNKE2T3VYZhUCETUFC5rSQtN3298jnLfGH3c9ai8tp4VHy9gr",
  "key26": "5yKKmh7wHq65CQH3RByzpZirU5hMNctoUbvTQ6pHaUZ5zYgYmo7cHzJWJf2muPCVCDaG6bRb1BfANhhg59iEcYTV",
  "key27": "5cTnm7HGw6moJJdx83JfibfCw1tw2u1ssqTwgZXdpduvCwBgt3QjWxyE3AQ34Pe5p4ZVmJHjfa8jh8v43bHpzUjX",
  "key28": "3AmFERXgBzUq3n4o5jkqciw712Fdnm71Rewua964gywtbY2DUJj1NaQoqbwpjpjGsD8ECoq463agvfpJ5z571CrZ",
  "key29": "ceAusmHU9NptsBwxjb3jiZjDTffe5y9AarCd8XM3nc3gKNRHVeU1nkbvJEESux97UbF9sFQ9exSNMp59vjpNDTY",
  "key30": "33ED9PA3mZHnczhjdQpkBysmrjXzuQaUSVgpxqUtQJG33UpwjTQgbKEQXgCPfHk32T5odiQ6tqT8i8CbDVRGNNyJ",
  "key31": "283QaiSsufgBZhDzUrHtFpwJgHsQJMKU1XTsuPiKbMqPJRwunynWUd3UUMoXbZrgFj6cSg6XV1PXUyuveErDKWYh",
  "key32": "5W4bXHPxVT7NRg5VHXXG1cw24bfARfHdfi9i2RKb4Yoo6ejEQfjphaPAc8KyLutm3j6hR9Y4K75ujf2vsNAijUBB",
  "key33": "3zHkzKvz5pDTEzMSZcqEqA4C2cDWMQ24w9SQyiPS44WnQ9Gfph3mq1WuHh8xDqKX6ofsonpT1q6CSLXQiFMkyMup",
  "key34": "241ZQrUFzSQCcW4hRWQNhZhBK8oHQumB9WGCuwyUZ5q3HYofbsyyB7MfXuJGo7jxVNwydzEnyJWa3UdQb6aNCRLt",
  "key35": "4GriEXmyB6Kb1q8PUXRT8mW3i9aFhLRdo6R4HcTsTwCvsST2i1K3o6hNAfBfZbjET1MugYMMrFCMQVDrgDPhJPyZ",
  "key36": "3Cs5QVnpd2QeaQ1Kbxng5ZX49mHu6D1YH3Psc74aHVaVqXiUMwsrAuCK2e9uanvnNUL3jaWoP8oqDyeLxBxCXLhG",
  "key37": "4aFsaiHsiUQGv5G3Ron8JqhyLEaC58YdXgHSU4sj1fZuhs3sZ6pEnByYDEcT1jtY2Lh7oMj1a8tS441kKaCW1wMD"
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
