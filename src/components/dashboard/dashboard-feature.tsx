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
    "3ssaDPjtBoDim78usJcKHUbCKQ8zDx3cgLA9CBJCCq42sUBM438A5KZfGP5hWe2pJfUHtgjqzBcBXdUaiS4K3tkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RLGUKShRfNZb8b8k87srqyyZfRLKNnMjqyXifxQoceyUDy5gEKVSDQy4onmnehRV3FAd7oNGhu6pThj61fJnG7",
  "key1": "3L2NkRh6Es3woYx4tE71msiRBtjjAA1he6eYYPNafrMKhDs8ZrePmv2UrsYff8rhVaERucEWM6Yn8UPb5nT76a6q",
  "key2": "3UhxAcsfp8c3iEchk4VGRuajxLF4nzr9mKAwS74hTSPJMVg7dwYCpAz39QdJuLWJcn5QvKB3Mrfv5TX73RhRg2Lk",
  "key3": "3H8tiPHEHRMtaks9Y3Zv5u4kW5XEqaLWHhZ5LgNDgh7AqAeC1pVmQSg7ZUM6abZQngsEwUmJVgReP8bStCQZt8a",
  "key4": "PoR8yJHsGBTsmQfG6pmbxGoapPYD9cX9UhpR4Vm9yaHUbyZiZEqVnNHTsAwuChgj3VFYjSCPti9v9TuKK7eduXN",
  "key5": "4RfTW1XywUK4ky7JXb69nUoQeC3YKBd7PhGZ7kpL5GCvRqwZB6ZoGtECYNqLRAhvje5F9ZoLe8tEMbhMz3krVXdH",
  "key6": "3MiLP8rrX2YmxHeua4PScfVobtp4Kd3n5sHoMDiA4xA9C33y5qCTFMV3ur3fZasU1izgfpqPC7V9H3sZ23kLbNnc",
  "key7": "2L4wZVgqVoQyuniZEHpdmTYdjE5gUtCeyiosS67YARB2GLr57yJqtsepxEkRHdLFF4g49pAJg8SbhCg7h8Md7vdn",
  "key8": "sUJ1HMEofYbSmUMG17uSaE8YjeVMSN6zXTSsvbhDAvvDT94WqCFJ6hUjeJqTctvXQUd1Th2ygw85HRmJBCsGjZU",
  "key9": "rh7amZ1YDix27VuxZpq2mPLTiBgB4Eqa2ANGmnYeXpRWtP63bSPZbhgx2o5v5YcpyoVSaDumG9xMSFeeqeYJPCK",
  "key10": "2PL3XypqSv6NePcuT5N7j1nnPqiyLVe2Yh2vgxofjTBMUp8Hi9xWvrKGeZp3gkQ8dXuK6vnkcniX8i41eSQ9Gy3D",
  "key11": "3ymVeqyHnxiTfi85evDHXx5JF31dvkvyVYgJzkSpWPEz3TZgxpvhR1g7WvD5qN6XypdNTy7HSsui9vyPqAiUmVwf",
  "key12": "q8zy1NJ35zHFRJF6DCTe5uPwYWXrGAkmdcShwcDeU98FsbfG6kSHnRr2TVvUMwMq6M2CLujQXHBgWAtDfdDr9bL",
  "key13": "4vDLvWCyoWZQMGHB7Xv3cCS6zCXqRCBTPKPKkF3NaFgN8YTSesaS7Ge6SwRVtv5v11Axumw14JTvyqafu3kpdRgX",
  "key14": "5skdvn6e8aAQ1USESudyuJTjWMkhoq7eVzLAJkTesVikDBazxDikLbmfg7uraBSiNjwgjLoJCMCMgEt3ijU7VnfK",
  "key15": "AV8iPvG1AUfvHSLpY3Z63v38cf9sPJ3fKX5DrjZpBaowcJjSio9Ykr7rcjsCV4He96EHqdbRe3KxCCGv7k4u9BP",
  "key16": "3ZXvgntSDkLiM6QU4Ted1Pb2GWnMgVaa1sgPiMevi2wK71TMd6oUjdrszazhHViWyWrDSdfBE1dETiQenLT13cTK",
  "key17": "5NJwZwcHicSsuSKYzR9YxXptbxnbWRqP9KEwQ6pQatRnnNkAPd75w9ESFxK9JdhoQubDiiHMQ2DedCJCvEtrPDS1",
  "key18": "66aDgAdP8iTwc44nZcL4x9dEMuoWkdCcHPutJrucSy3bsRkNspH2PbK97ePgx4kRCSq51BBCGu7WnG93xE8JbmEq",
  "key19": "c7ruYQQxVqxgg4gpSUhaxnCw5xjvBf9mGXV7aKfhoXiTYzWKDzA77sCmkDkWwbvcJvg52HW3QmTS6h9yJTXkJMt",
  "key20": "3VZjzLceFzgK2TpyvRnXUQWNPFABVoqQGyL4EKvatJJS17V4uZdtkL9tKqUH8tr83QfSVd6dgsQSgzT7sX6rBCcr",
  "key21": "AddQbT69PGYiEaRe4tEbg8g7dxARJGNLSdq7qp3wpKFMvnmfcGXsmoWGpq6sFr92R2N6nPtreRevijVi1rM3uHf",
  "key22": "3wmV12gwXYGzBBj2yej8kg6QyYPQHLkYKjoKcMFiXonyWGJhap6eBG5np5CytpUyefbubX9Pq5aWR78P5p5dY8Qh",
  "key23": "4LhcXHBMb5rwJuiqguezmaJRFfxzy2xAj7TUHTFY3cegpB821AxYcJ56CdQrY3JjUZ4NJPGqTFh3scbntAKbL929",
  "key24": "3Vgtdq2gN3FbTYbJrgznSTN4XLzQ2GLvBRunTQkFqVspCuAqKJcf2bFQ5Fbcv67Mvf4RuNsxMpQWuoTJyxevV1ST",
  "key25": "3cr2rA5rGWfS4h3egKzhPzP4FJLQsMxoCejjW3cQFGGK4dzo9B9KhqwqFr1FEbRpjUP5AsWjsHwDAFvqaETbpzTx",
  "key26": "2FyrFY8WaXif7tYgeqgHPSagTPLMDcUrwnxZPHKQUFAP36zcoCoVgfN2RradMWa91txh6wsLsyhscDqzWZASoSkf",
  "key27": "wvpdFk4LPHpR4MLG4j9TYEsJYiposmfyKgKwxuSa77RLoZX2SohQgPY3DDZAB9bE7KCHoUj6L33zsbtKXB1agtD",
  "key28": "5joTBFAqPHwRbtvyretT8FF3TsusY21QUauEFSLbvcVQdAp6sge24SQMFR2uEW6yWEJDM2RzZTM26JGeKry5i21Q",
  "key29": "66QXoUyd5DXZkxzg3LBBLXSx3RMrVLimjqtogS762F3yX9zJ4pvV79AgqSEtdBTsoHJpS7GVQRknraoxHtJRyYhT",
  "key30": "3BUKZ1nb8kSvmao1ywYb2afX2DQpXZMdKikNPPRcAxDVzcSqPiKk8ufXoLFJm4r2Eqt61US6UAENYiwF6hhRnL6J",
  "key31": "YUdvWwrTTBFnKromiijaZsJFpqLRhDutEkBEeQ2wE5MZRGyciXumWVbZRskawM549tZvY7FYBxSMAnEgY1XKAF6",
  "key32": "Bkwc7MdiED9MUyVHaVyoCNGSzXBPmfjDXyZayy7dmCpKUf7GUR5kUmbTBtQ54LdxNz8aNUMT8osywhFFErCiofk",
  "key33": "29s1VsNCgPWvgsK88DPUFMEBQXhMqHEAEX1AB4y4pYtmwLn3vM79shz3CGJ8MkS6KpbjdZJq6k1mMtKyU1TWku9F",
  "key34": "y9tZVPNey48tCpKiMttuvnEQhSfiygdLgiMUAC4DTD9R2juC43K3egcr4MUweEZReSukZVoAATPqrtGoYATGKzH",
  "key35": "4J2Ys6p7ey5hZ4bGjisX9PpCuPmSWddYQmXcE8S6RdnFHxZX9knkXWeQDqPZ7uLveQ9F9Pjb2U7w7mC9QQ8dvK9"
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
