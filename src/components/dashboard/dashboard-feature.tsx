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
    "27TFmgEYWc1BNxYtQrinUBhXLvFLo4UcREAJNXqYxKZSZVRRbESyQyb531TAtx38y4x3NmLPuAoTuAFnu8ELuxAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2612ShbGDujU3SiSDtm5GXAMbxajtWszAv7s7PMwd74B55cbuzXUnLVeGMcCmG8PsZXeht7M7BWPhipcryACsJ4z",
  "key1": "3fRNwWMB1GqxWgDcpwG3QifJUAWUABgBriFaxPgjEpZD3uRtXDwxzMH4emGTCSRANapEHzEJjHx5A22cNS1Lcn41",
  "key2": "QndZnmvbDksrEVvGdrk6PVqXvW63gkfWG3tMfKi81NAU3mS46owZ58KbLUjMg5K7iBWVZg3ATUpNKKA9zoW7oJw",
  "key3": "3Az16mBhai6XBNq6o7GqSr62Mn6psMpBxwYvn4YZwyiieikz8TJiBjkpAmgczQmeDWS1kiH1JdNYUffNuUsBh8jp",
  "key4": "4uBscEC987g6ot4CD2wi2G3TmCsWP9FEQS6TcvLe3dUUJehTkcAJ9Kbc963onibYEgZF3VuvgitNmKgo5ULo9bhT",
  "key5": "5HAgfLfDoJnR5hiUFzZF6cQwLpfKxrc13977Z8dK4myYP3rrukkNLkbDnEweerKXaAW7UnwRKFXTXD5HSTx5D8Tc",
  "key6": "2717azT8CnEEXS8GdGDVZGJYeq4Dd2NgAoiH2bx6RR3rHuet1caFgWX4e2ts6q3aMBnMZVWBAdFHBvgtiePYFLFS",
  "key7": "3jjVcWPVn5uHvLhPs2U9jBzaPPWjh38mmd5cJvTETGVEGUbpZgfK5VQZqb7JFYu9qkkDVwTdCR2fL8fG8jYrZfjm",
  "key8": "42PJW2QCezY2DQamTRJTY99b1x7iRz3VkBYTYhP6jrwPoYTsoJf9eRXKhzEHVXBjYJ46zr8DrnKE6FKyYxFAVhSo",
  "key9": "HvyMVD5rxjZC8RTw42jUHkdqNKTY6zK31YDD3F5L2EwtjuHJrzVq2G6fhWDw6TgkP8KBsGqARPmLcLhC7Wcsj8K",
  "key10": "o5pMR1qbZSMTb8yiNyB1oxVGmYaGZKvkPB2dGTK9a37hRnFSpGs4SXmrZDYJKtHMvDKJZURZzWqh9tsfYMAjQRf",
  "key11": "47fNKzQoEUdJpWrM7Qei8qDbgvQ6sejAL25cfBCazD98y4AXnuKpGWvrkmWkDg6EagpstoFQjCq2nr48dLeoi6p4",
  "key12": "4EZH6KLPNR7ZyFyn9trQNct9ka5uU6GsC7qYJUBH4doEy8631fsdYbFVhGHwLjzUCuRCmjvYsRk2Xw4fFXscKsnu",
  "key13": "2LDKHyxmfpkbE3QtWz2wse9wopMd4x8wVWd2d4h7YJC6xj1ongHWac7Uzg1WzJWjKTEGcgH9eBWtpiNoDMXJ6HdZ",
  "key14": "3B8BDfqgdtVuvs24QA3ukKx7Dk694pydcZEdRDAiZG1qDJS6KX5Sde1Jsway6zsaMWFpnJv4PZW9GLXpUXiU2Zn5",
  "key15": "5W2o5vgKJvHfaKy3oSJRyyaX57ktG9fhVoLMRQBvR5P5qgh7hPjSLuXLPxbxyrtC7DaWMMpuQ5G8Ssfotpdao8hJ",
  "key16": "5TXhEF6VGwP4pEgkNEZnp9V92qBvm1SxLRrpETBe2u66b8ikMhEq7hDUCamW4Sx6QojRaQvTUw5iuLcF4UG9KTRv",
  "key17": "3ZUjeE1F5AjunCmRYbogMnt74KTzqVPJFjS8nLpPMHn4PwpcYitEH9rhBrT9Xg1SaELh4stf4RjP6kemaTLkHPS6",
  "key18": "3APhSgqbEEgvz2ZoMGY5JCn4e6JwNczR66ipgBJ4RBwxzgQ9prh8Ewfmqgqj7LdpTJ8G2S9Henu3S43fsti16SKP",
  "key19": "31Jubebu1PG2sj4pgHBM11uE9XaVgEW2AUZdgaVF9AWB2sKinZhCwN2t2GHnmr3Dfnzi84P75vpcgEc9JPquvk2E",
  "key20": "5UprUyyBdHA8MWakELLs8bhRgKPGEhcoFTXyLssyPL44LvwEEthpuQzUKu6C2SGaBYSXGSQ6Z2SKSdA67m8cy42R",
  "key21": "4oJVQcHWxF7xhgFy2Gof583HJWzv4bvNQPgdF1fqUsYQDoSHCtDDfn48FJLYXvSwsbZBuPqhS7eAy98vyZgb3dsV",
  "key22": "5aNjsN1HbKNJ363phGBbLvWCKsMfvAqVmTyrA5yc16qaV8TJ5XZWdeFVCeRZxHwSRpWgdJ4HoMoZgVWjEGNNLdjQ",
  "key23": "31fc3u1cXPAVo1HPYBg1LTraDsEJ6gkhoL5krmEcibEQoPwQzgx2cTt61Kffkqntg4kWJyDubzM8eU95EoQPU8ud",
  "key24": "VFY9Uk4RrrbYJ4Ra6bpdU1TZCj8Mzm1w41hYRcZr2GcDLAuL2bs5Md9yE5vu7UUhoQ9GN9M92WQgxo36gR5xpUj",
  "key25": "2M3paEVFEFErdZ8g4sFEeJDJiyN8royXXMtdYjB3LTKffjMHhEJ7P5Ns7CWLj1jM6gkjeWhkwSSuAkRAjDrtBvP7",
  "key26": "5YP4H44xet1n8B7HZXyEuoSqiF8hj8BYemhs6YfX7ro15rS629VACnwSc9DhDXNYrVoBbCR6M2n3ME83k3gXMEgk",
  "key27": "561g5pqTovseVcG8Tm7B1J1UXKboHZARzjWfqkwAGJqFpBxw36t3MuUxQyERWi59FShkF5QC7ehU3jiHoJha7yAL",
  "key28": "MzTbuGzYbfpxhtoddDkkBjY5GBTpZyspGCQ49Jcsr56VFUmYHDK7yhmZdd7UZFGT97iKnsTjgHZnsNQWH5EME45",
  "key29": "kKKHGusKFPERn7wRvWbVo9D8pcyryMeZN4wPhXsWin2xTrQNdiAJFFQ9j9qwRiA9Z1ZQmJbWU1Vx2BV55JryQ7m",
  "key30": "4UML2htc3p7xBEVRfw5voc2W2pbWFzXYTXcrKXGJ8TroX9nuChe9TAT6ALi66mcjNCKyY1vLBfV6pcf16x3Ktn7N",
  "key31": "64SZvuNgcFSUheR1ANpiMeQc2kfQHfjNzofra3Dcu8mHsXPqrht8D6w4Fx9d6DtoRxrZhDzBwd5w8fJRhvT5Qkdy",
  "key32": "4vjCsQSxZGkj2TB818ryJpwDT8aq2bnDy11TSx34eZPiuiJNsgoeTif8mBkkf4JZ4hvzEugd7xqgsu3ietQKagx2"
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
