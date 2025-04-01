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
    "4eKhpqyWbuKaLBDEKRHk9kA2yWhSqRP4HQxEuadLj2ykuhm5U5Pj9jyGQ552kSgCrW7eHCfSHHkoKzu8JQRBe9jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XvAGrK3QhFkJ1hhAy6wRa7QrymnPHUBMjEcf2rH2ZoE4xjD6R8Xk4nzTmEAfaSaTQDaebxpAfC8ZsXaVJq1A2aT",
  "key1": "5y5msskVKVNkSW3DaVmbt8cxMtnUFTEyYoDM12Pc16JWbZYLnNXd7195N8fuVMqfZFkwms1WVyzsLMPepf5cfFcs",
  "key2": "Pe3HvmiVEb8BShMvGzGqbvZPRxLtjLFwWjpk2VTfC4fNZ9Z51U7AeBytinJjF73WYp7wihjqtx1JtfgMmQruBrU",
  "key3": "3ftVTNLAeUHwMJAkFi6kbgqkoofmVUQWCBKjWvMpUM9PriBmFKVp57r6zdftiFakQ8awbMguRAtCTuu6X7sphAeC",
  "key4": "3VznLRkhfAdkR94NcqBnYHMSScJ9Pwoykhfb1oDDYrC9tAwg4HV8yuPbFXvzWHsZf6syBTXAsAUumvWPVGKThwVz",
  "key5": "2GLeYDbhqTmGkj9Zcy3WunuY26R2xQseC6LCcQcxuAiB7gVVAuTptzuqEsvEatLajNTTNNdTCLANGy6tixH8iWDS",
  "key6": "4zhAsqKBfZMBqsapAmSX8fSYFwR6BfSrU1JohaAGrhRBck825esNUtkE9wQdk759jspZHg5mCn3JurHpJk3xKXie",
  "key7": "2s2rwYr3wVdjhLRWxjvjSK5xF4MfBkEZ2jCLu6CiE9o8vTd86vjhZegN2tCRqmgeXYMuQLrMe9XiE5TN3rJ6Nyqx",
  "key8": "4SwSNqQ1GJmaEQHm2ocryXRDWkxsdr1fSZKccHsRyRBuhVZKbHKJd9bkGWpEFCv82uWZXq5tfSzoHf6SoTcZErqY",
  "key9": "2Vyg2qr4aXQo4n9MSSt5DtVaJeh7L9n4exJRk8c7EpjsFLkdhY6FVaMPQJtLP1ejLZ4ZV93kc5HiEVNapEvFySet",
  "key10": "4S9kRa2NmJoGycHsNcYEbMzLF1mU4NBXACbMui9pgjp8wFpmwXT1BZHGseUvm4r1bcQTLPwiFe8GiL1NqXpjYMqK",
  "key11": "27PYEYCWwYjGKT9mJgA2tT5CbYzYgjUssEBHbwqxaHXyoqwKjZRsXpK6aMo7jdJT9aq6T76oeoBs5Ns5bjbKqGrD",
  "key12": "oHUVk37ULqegoSJ2hPxeMHF4hUGYo9JUSaxzi3tbTgDhtpBeuL25VMjJTChKA3MqGSKEw8twNFZXhBo4DqLKDcB",
  "key13": "ji21tmk6r8KWX1GxFvvjU7hc9SQLFzFxKR8Y5YC7P9bTJ9sN75SGFxuaBXBNxM5JbPpg549TmzUuonJrm97FUwq",
  "key14": "4xqv9UKCkkGse6ozx3kxiGtPqR5apM5aPn1NnM8TdzdnXCqzJtArebA9Y6QDwTJ6rrnJ4cp9ZwR1P3uKUYy6dsZ2",
  "key15": "66nqnAMdZH8feLpQLPnX9WRzvXerz2HsavX54gpn8eSkV1haDseytNiSVokycUSYeLTezkDxqz2c9ZHb3GrjfUXh",
  "key16": "vm2s1Yw9jEUBHYiqwD1VmswQK44VnVhMay5spufRbdNjysXGnEA74ps1ci7q8K1sRxvANsJtaPGJyMnuqWRp7XC",
  "key17": "4yi2rvxnUyrVDDoPqXcnytJ317ffWspqiPv5ukzSN7n7azb9MXMafam8ynUaCo5uQZjSp4VPQjXe3amnK5huQXdq",
  "key18": "54NyHJNrknYmUC6UQ35wVAB6LVh5Vqs2wGFdPUMRjNbHYPrMTSarmft8ZZj4FHouGVL7mYP2uSdwXDrxDx95zELM",
  "key19": "22FUoGHeBXAtAFxXABEsPHrqPVnie3P7RXzXJgLJgNz3AfMQyR6N468kc9qeWFoWxJemweXo2SXciCQ4mbMA7j2W",
  "key20": "evr1HucAdSAK5PNq2YxjvT6qmv4NNfB99ZCwNKLk5zQMvxSTVfrjkqPj5KGmPzwnPSd7xskYWa48Afs8VwABNUU",
  "key21": "2RSzjW7xmddjqWTKtaY6w7ma1M4RneZTqyJ9QP143MVEkkECqrZhSm5asnZaRRbo7e4RhTug3JaJGggEJKb4sm86",
  "key22": "4ubLK2qXCxtkRXaZMg6Ztpk3n65oEyrcQuPD5DABZpNogPW26XSKaaVtufNXWBykXr5DL4oA8Bz2cUAFYzEpcrz6",
  "key23": "3Hvy4LfxtVfPysgeBiRKnkxZ3fkSHNsxQGdAvNM1TTdmg8NmyYUx2phdMobiuxNgy5Nsb4qEVE2PvSJTXow7WuvG",
  "key24": "bv5vRaWKvUSUFTTrtcQt89HmjV8XVUTr3wMHTP7JmpMPiKR83c3TQzeL3dSxa3CQrqLmXALs7pDspgN8gttRNHp",
  "key25": "3W3J61rooDdspxqNKWTnpX6kU7WsjHs78AbG2AQnpqHiMZJSFW4axfp8SBzsREqSYVsYp8wJ6ijxGLsWmAefckVS",
  "key26": "3k9bHagFuj5yWJUuZ3wyRv4nFHFEzR262BqNSh77K2u6zFxpgUxif1AeoaBB4mKNgREcM6A46otfdA3zLK5MEFrd",
  "key27": "5Dji6D6R6EYkQ2GXR5jeiQJp5HjdB3HBsuxBBqNmhiJLpaezeqTpY44vFzSf2tv7CbgaCrVy5C6Zop6H5mkgvKHc",
  "key28": "dA3wT675687NGzyBYZmAEDtHcpH2JHXhiYWTrX6bXRRCmiAm5XtKmrtdJasbN2nMtspmnmWfPg5MypFhuFpzZqn",
  "key29": "5eQsy2tCkGz3YDZpqq2X8VPnAe4viqQmjfeBiwiriDuh4JX4Wt3x6rtgYmtrsKfkD2LkdFSpWQNeUky58oagMra7",
  "key30": "2JMtxopvArETdxcCVWEepeikJvPhsHqEVzHoyKzeP1DiCws1ZkKEExpu9dGXBmgENb587mBEyT9MmsRfZ8atZRqb",
  "key31": "48CDQsrm5NKsPbePRsEki5PrtHR8QTPTRNKZuWkg4TbBa4odBLzuk82iwJDtaz45rGNeV5mLZjAyfcHyC4GxwK9s",
  "key32": "4JwgLMBXmUAEx7AqDLNvMVqQyCCY91cvx1xhyjPo1znb1bQZQNCNeqPsL7Zpc4X48cLiSnZw1zJvJWvr2ddK3rdR",
  "key33": "5jk3ht5syer8FDxo82CPJg38tDVaWQv47t12GJ6YfSKixsD3G29pbhKuhaqxnxqcLs2D8hBEZuqTsXjNhC2DDTCz",
  "key34": "1scsNKtyhuUY7uwRhzdZ2T5wEBjFmna5NaScgkFUirHJPnMWd5nci1xDdZy4ZkPQPdxsvNZ44nCgLJH3NaFERd3",
  "key35": "2sBUcEgkH8djAGSCZR7q5TK8nUw41NiJpZBXkR71W7H9des4AFF9BUHZMgvjz4A1jDQoq7aLYEzRbpfD5TVer4y2",
  "key36": "3fFwiHzuUSUfCQ5GiJK7YPtn1Ahd9VAwoXVQvsqRtna8AhjDdFDVecGDueiLndy1axLgAnrXzkQu96Gsc6UvNBkH",
  "key37": "2rjqPwP3phak3Z2c8QV2ap4EvRuJnPtMLR6z9TfiBPT1U81AQciqmaEuDzk9W89aJmL526ioHfmdH6BTXbd9SeUp",
  "key38": "2jxrCGz5CVeXzhsvneSnGB94vxapv67zEGHFUW2d3urkqyyQ1Y2wS8Rzh5AKy6AWoMTTiNcBaM9b7hBPYZyyiorz",
  "key39": "2rNbvXJvbKoQ9Ayc47vkbYPMmb3DhBxMAireqNhW8qAvVr5rFhbvQUqgrxpWL9BAyg2P6iybinnB4ry1jBvS8igu",
  "key40": "3CqP8bfjdoZHPVcYtiAqr21uTxpW3KPz7ZPwqEgp4RJ9SpZfraSqK4tWE8QxvDzzWFiga2SWGcHw5MsSZ372ZhQd",
  "key41": "3YEqZg1gMCANXRt8e4CG2XWXAaCdMw3xBQ9TZWT8ZW5iu6ma5FdKLhJ9PLYUo7hGRo37GZcbsQwwkzaf6FY1ytAV",
  "key42": "4KAbbsp4YPDRfFbednG2qzpAUeK2Lf9EnRqRR31qeiy37QxTKNYr9x6M3GVGFNvh8G3g2Gb3Jx22MQ6B1b3jwKoT"
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
