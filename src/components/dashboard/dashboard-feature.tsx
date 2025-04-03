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
    "5Hh7Z2GBMy4Pnf1iXo7btaj4JxswuwaxCnEMLnQjswcLhnrWjFnayKDx3D9yofLfSjYQPPiq5PdwMY4m9oXy6zF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fD6qgAi7BZzHGeuTbpB6uwohFLh3DgR6CrVyXnBUFoefb685wgySeBEKeUy5wC72ZKqefFrXZW2JKP7hwrFgbbR",
  "key1": "4uHdqXjVB3q3ymucBVcVZJNcoZrzz1FavgrBersfJoENeCaSzVa6mddbb8DYB1nVpb2NQfKEzwzVLqHGT2Ay6qvA",
  "key2": "5AxDzAc7wfkteJGcATkG3pefvh4L8Y51ZTdhMDt2U1uLSu2bvU1E3yw12h2nRLsv1SqRKC3k56gcz8mWDM4BBwpb",
  "key3": "2zUBse4L4F94hRfLfg3y6kJ2yvHk68i7h9eYk5Jf5VMrC8VuvUh4V14LNqPPxCiSajHRGbRmwbM5xZ4YV3jPjK6b",
  "key4": "5LjSSbzkgtuffkJt9DK4mRcteWrebndQpH1f3FB5UsAMBSfAW5wxb88BiPSMmHfEXGLCDoTJekJdgpTZpY196KMQ",
  "key5": "1299ntmoz8GS28VzbY3BukEJXxkVNXTRAD4VsmBak7yFcwxb9UaSSG8KZtThS1daL1gBUbaqjkhEsEZbwFr4JF9W",
  "key6": "2RKDEpw8fHCeQRoW4mCNEJZXEtnvuCVLDKTeBcnMebXwvdM4T6DCgvD1dDuX7CBtDZAWuED2RuF2ekBwgbvkZQxP",
  "key7": "4KkugwyPDMNcCWRE4yLhHN1TXp7vBmS8XJy38HBGq1g4JRMjtRfdMJQKamQ1RQC3NZ9dTWM2VqjttRjJUToTRJS7",
  "key8": "5AkKhc4BGy1LaVPD54Q2jrU2HG1JmhATnqVWghbQJ937MbmQjarfJU3UWdRZkTGmJqqfdQWX1iRygmArsCUkNDsU",
  "key9": "67fDq2aah55o8UnbR2zz8kusBEvyU7SRMFd8x2HpH9DLaBF2p47wE8b7m4ScTYADuBXpXV2Vzk9b48ygfSJ3BDvp",
  "key10": "ohy2ZViBzSPGnTKWKvHsxLfzGgGrkXwV751Qh6edsbupt5511DtJbkEEMjvgUXxFMS8DE7nv1Lf284AS6TGZRxu",
  "key11": "2znDCUyf4fr1UAFE476rJ35TJ2Np9s4zEzrw4QFBYqxs8CoGZH1p5z83ksXd6KwN3KnJTHAnL6ibvc6tUfYRWkSb",
  "key12": "4Jnb4jRu9xoi3mYKVyCYp5UQq8NQD1JwwsVpTJJtxxXNgLkAfYCi15zeXgAFb3s3rQxCbJCD8d3Kd26Bzm2EuheE",
  "key13": "U4akpZtP5tUe5QsfCBhGwd9p1tpwoV71gAquGq2zDnCAbLcEKuAvab5kpShZvJqRasYJPpueVsjDBJzH4UVTVrD",
  "key14": "cdzXgHeSp6WWgrNZpbDHS1v8xeXeswnFzLxytmqr1Pw3p6Ep3S27fHXZoJS89YVKFTUtQ6PJm3N9B6y7DkeYfGV",
  "key15": "8SYRQUgBmDD7tCuJEDf5rsfpagoNcgoo8zYqNzwyfD5Fuvj28Pa662va6KRkjdv1shNcWn4DnyaGes6UV3QjX5A",
  "key16": "5JkhSrzMz6vnRT1kQmddnkCEA7qbKvadyCq7rhnxYwBL5e3Tp7HxVLwmw19PCuR2ubC1C5TC9BHaDXD1d92EKVNq",
  "key17": "2CY4SHGx7Vnsd7pwtbVg6QGXpCGMhtG2wDkspUJse3mVouBRAtYFcZXcftimycLRhcVHnzMYbpVm6AECUeeQDkot",
  "key18": "5wYzTmrUJNayvBMB6YKvCNhfvy58b2YM7z2YfvKTxGQkJYj2cM7j42ETY8WawKZZ88KzSwkbfbdbVZ6P6frKfDZd",
  "key19": "63kQtsvv8a2DDDNPcLtkLvv9t1Ge6syp213mRbYh96fGhf9L28EjFHRU4Pm51BoNgkxYzNi9h3tSq5tgPaMSFfqx",
  "key20": "2qMdrSKNEqtBDg3yQtqkQ7UdMu3mYocWCsd239xjEgvC779PQMMymXJLCzuGXHwznVkdP2xd6pPw3AjeApRLjKWH",
  "key21": "4gVD9wSRTFwTrJTbHFvzqq2e5cUb8jqGtz3c2Ft3oavBEMnH5j9t5FAyGwvDNwHKcqyoKdwYNSg8UDquDVT4QRUS",
  "key22": "22Urg32xLhPhjpVQhzp7VaEKZ6ZUZRDchevqaZTTurMivbAoJccL97TEZbG5Qyz8MersD2TLcBcSgDwwD527fVAc",
  "key23": "57x95DUHCdMo755QbY7DLd3RKbgiAAH7zdrSWF54YNC9oXuFxCEYdDP3ZE2KUabDc7v5Mod2cn9DmmpHSagtRUoc",
  "key24": "3jt73zCgXhyfvrBT4EaKEw8qM6ao3jvsP6RdfSCrfoRbBi3yxBdreEhc8KtSVmHSBJnpFdUvUCqwjdocCNnXSGDm"
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
