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
    "2ERSsuCcUu7NsAsFYZdGg9Sx6P5k4jJWAFJfqCNEXz9wVx4BLJuqWxPRNw6hGQr2JLCnA2mEgChn1jiC5aqbtnio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWgffjZFWQdwV8S2nHDainTUnw4bvJGae1j55ob8MTPMTnT6AJTXJ21C6ckxUqYWBHw1zaPvN39QMyYCHNbbYa6",
  "key1": "4rWN4U5MDGBR4A51ZVopwWzXRb69nieoD7uAsa7sWrkXugSLeYZL9LpQokpTZEyRrbi8gFEnzxMELF7oNcefuuJp",
  "key2": "3Hjm6Mp4dP97CwridCd8dC7RbxEbh9Nqjm4urmFbzaoUB885Fh7ST6cXmsTjVqTGAfk9WV6C5GmCr13MKNFn4We6",
  "key3": "4PnQHZ9vAnENkGUcbeNNQq1CAFk6oya97qXkHGR6xGm1pgetEzCgfKotMcd5cwrAg9Ps7w2JrdiTUPYktJd5JcKQ",
  "key4": "HjzaT25w3z7zbYP1o615khtbNQynm272aGTPGsJ3Ag1vkgtNBzr7QiiJ5q8JSWeLY3Sv9UDCaUySY5SZ3JkAtDW",
  "key5": "4HZbcpZE8nWVUVnJNiqftzDQssWBe9KT2Z1DCMv8QxPwQ9UNgk9j8QsfNEWfNse29YJ2TdNhr2KoCPRs7mGZe2Bx",
  "key6": "4mvvsmGHcWrbLLYuPE3RzWgmHjWCXnrwe2ijcwEcaBT6Am7o91p6aJRvW3QhnVxfwMg5dN4ogvrrEieoFK8UKW4F",
  "key7": "5FKPtgDrRaNW318Z3oPR7iGAY9w7xKV4tKgG8Mrym7MthQj2idjyzgGFWeNmkCkXLps2M9y4DCAHr274R6B5ni5X",
  "key8": "2Mmb4zagCMEBhWMVSX2vrG9K4dd2zRq562EQZ9WtrazWFvqkgH4Ac64e5iEGBLoDuS4XLUnigwn3fYzyLhzUMojn",
  "key9": "nEiyYzQfgwqkvBkuBdUTEs3Bqv1eG2r4ZxPV1AWDTRQKpmv2Xupk1WvG3D6SFiVUWrnyb7rSxYhguzbXCqWqzA8",
  "key10": "kG5vqn6jFuMcePuFV6Cr7qkiPNNWyP82TKygp58Aun9DYPtG5fFvEWGsn2aaHeuj8PLbZomUCVVLTdYSi5YHi8e",
  "key11": "3dJSKDNR6WaAGDQR48MrAnqgxG59g7LA2a4hTzzbvGiWm4Yae7vJNZNQgQjKTSgcJ28oEsrxZNr5Gd5FENag5Y3C",
  "key12": "21sdF7eVSoUtbNBWGrUauMyxpS9Wrc2nhatzrdg9yjQQMrV7jaCSx5xCoHYbz1JkNYya2a6wyy37kz7MQqGY8Y3z",
  "key13": "43NaMUNDKiTixefXNdPYnk44QGE4wGAp6Ha3MmNeaiikuk6ZGqfd2nj16mSnqz7CfiZt6WFLUZPH3BVLdNMh9DeK",
  "key14": "5QiRfh7aenWzDKWdr2CdG1T1APMXRBHmkqAzdchxhLAqGKp3t31Mj4bxAqGqSe8v4j2qiZ1h44Lh7S6DrWLTyRWm",
  "key15": "3gkYezkmCAD9h3GzbmaDN6PLvLDF4CqHwifgVK86m5X8Ez93u5nGGmRDG7p2QyQs1nmmdu5jKJcNx1rbPcduRbp6",
  "key16": "7K9A3EDX3QDvAE59TrAF4v3yQVeBSQa8ny2JYwRD5SUtzHsE3v9pvXcUz3kqEn8U62EuQuk9ukcBF8zMku2JLYA",
  "key17": "58vtCM6a6e5Wv5xTUQgcXtxAAff2rW5XrLiHcjNvP2EzyoWD7nukSNrKCiXiYYWKLcFNBdAFSKFiTta3HQea1V2e",
  "key18": "4jow89ZRQwhNoLXzU16Qua7cXXnPvAhnf3LJWZJKYBdbLHt21eFJ3o83xPByUn3WjW6JNuq5a3v4X99EwBus5zXB",
  "key19": "4eTxi4xumDijRjstZ4VqmFKXgFnu1RYXxJ3FqY4yaBaNfSed5kavgpwLu3qAHCQAZ31gotj61xDpHJnPje2jDd1J",
  "key20": "5XNQagexPQyErMsnicRFhTCCnFCustQ5kQZ2j6UHGanbLnAxxjZzVqKBqJcirX6GUK3DFQ2SY7Uebp2FafHHRg8y",
  "key21": "4EXgcedUfBq1RatCEjyAGYytWGwaSYNWX4KDLZPicp4SVjsceQzvxDkoyo83uKax9Buk8BUmrViLEgSAoexw5drj",
  "key22": "3FTV26LQCZPzcgE44zbb5o19u4X2ds2xwp488qMs2hzLoUtHsd8bGWKe12qkavbp8rsj8TjsnrWyRd2oPRDjNSD7",
  "key23": "2w13C95teFu5X9YLAVbaJY6oZYn2esvw5EhP5Btgf5Q3WoQPpfXWJwjXJYgrNTSz3uDSNSuFzy296UC7dEaDH5uk",
  "key24": "5u2fpHRgvU2rFfKGB58MQE86KqWt8WJiXF7BsswDK2cAdAdGRhiewuhG5DxoJ8QnFERh75jj243rKFUVx34nsGqt",
  "key25": "2QSp4Gac8B8knapFotMxHrYi28pwssPQgUnwf9ivATTTKNMdhEXGgeGE2A74ujcSa3yg4bKh1LVmcvKWcpnCJt66",
  "key26": "V7znFrGM3xVzEkVYDZgjFgXemuTXfMGqoJ1Dn77X4j1ULLFdudkafkwWWamY4KZEdc6Hh5QCZ1H1bQmduVHadLs",
  "key27": "3kgN1NEWiwyWZpbjjR4R5zFUDKgyuwxsDDScYfzcqE78ryiMuqzqfgD4khfissLhtWxcw9NbhB8eb8NkTkPCpFLb",
  "key28": "38ZBdtu1LSG22ZS6KNusgV1oD3AAsKLGEUunm6hHRQFFg4EU1wghNrBv6sCVisMdymcaDjTisWebFWb3BJfjMegk",
  "key29": "2LQhTc8cX6NTJgpWyn2FoxRvCvnY8nD5ZqMxfdBJVsuaMRNAfvTCdZFQp5VxYrYNs3C9WVSvrNb3kDRPSsjizqmY",
  "key30": "5YVHFB9MjyL2pryv3ptVyW9PYt9bp6qzsF1PpCjeyCxzrRfZWNPRuTsXAFYH8K8yNLVJJSvnR6oqtwzpfXpaC719",
  "key31": "4mAJ3gCHNUrJD1TWcyhRATweTHzvmCS5bZjerynomFKLAXwrjaGiQyEpBMCZmgwXpFqB8eRVgG3ZjZsS2FdAjCG4",
  "key32": "4LDdU3ciL2hcXr6gbd1ZHwEp1Uchnjmy575aoyNaHQuExeijEwmPh1uHcEvrbxz9gGeNDmf2GchPexaz9UKAAagH",
  "key33": "mv4xgt3Y14zxmq63p31UGfzp5Da3cYK7XBnz475ixqC6hgNaG4PP88nC41EydBj5mSLQqXcXmkqVPc7wWmvrBDq"
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
