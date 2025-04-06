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
    "3U7eLydVocwQbd3NaqZJJtrin7urdLPbpM8Sk4Ej7aYfdRp97tFw5AAbh9ZFVmoG95rkr39Qxn1XF8XYS5z7sQ7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRT8EWuB3mGFWSxXDpNGUeEAhDFryDzaUkddhKMR6cAX5BP3B2YYKc7Dc6sLuzZZ7eoKdHZK2N9g9HavFs3eLYQ",
  "key1": "48oLcyjEe11cMJVE6Z1ZhoYxQQqEmYpFefewYXJzkMmEWQEteZJ7zj5T5f4Myv6qtQLxAAQFVw4sy5EhruHR36HV",
  "key2": "3FVGqBa2vPRnLzhpTgAzQxArQm6ZiPgFWNj4EQvfQGeVhP8Q4BDBGtUpBBi2zhxtZgnR4b4WZBMvqj3yyATXDajT",
  "key3": "2Y3SJ954HpcDeWvo2FUEC3uU6Zm3AKmPu44V19CPN92Ntj4PyaVu5rEvtbkCpg8wGsYgLjfn75rr9uBtXGACNzbx",
  "key4": "42jgSPLARCRVU887Dfd1oMWHtbTjATJr3TVZaTKvsQL6fqMrSyLQwC4aPBE8HHnGLxDd7wmx3QdG1tpSrKomZQcr",
  "key5": "53GTWyzs26vh4cAA7xQSdaLdxPbPUkMGijtMzNm3hShRFCEQk5wEh3FEa1feKStQvs5YhtFjtkUq1AgW5VLDKDEx",
  "key6": "3AQe15NybeECa3wLKNE9TybwEc8bniKZ9Yp3Y2MQoy8KCZzvwbTarCcwz5y79PqqbtFdE5XrLJWv7t237XFdL1yq",
  "key7": "2SdwZs3YUQDH7nTUFhBa2ajAR4bEAySP4zkNm7mp2SfwtQW56jxsK3dVDWy3TL6pmNUo7C6N5cMduF5uc8cE8TyE",
  "key8": "2DgULqJnuUzgZ5Z2K3SafSCBBv1dGZDw8CYcZoycH3NGdCzaGaWfwtwXSbKbDiMPQcLXkbgFYf1uPmHcuoMP67d8",
  "key9": "5okP3kJVkL3HERsgmAr89n19CpDDKjYyz8g1qed3TAPBVWoU8kGJ2ntjKRgqsxKCPrYsgtA1BY368irRyAkeHJk6",
  "key10": "3NUnzNaKwiqf386kDzqff2PjW3VPighNx7UCYH9PbYtdBfFMmSqYyydCF34s2r6r8LT3hqggLtYKiVAcH3jnqB42",
  "key11": "5XMqSDUrMGPsHGYWTbGJaxbnT25sJoCDa4EsFBpeRFp4LQdV625MQXKvHKrdp5HjrztitAStiXQXB3NmeuLSn6gR",
  "key12": "2CzzHr1nJDQxKiVFsw6i7duRM7AvgZfZsRo81o9YThKJojfvy9ZQKehCweTkAt5cppP6ZMkjV6T1kUuJHesTDX1B",
  "key13": "2ros73CmsyNm8i4vRCd5J3VePJaXX9P3D5U57THmdXYTmLP66YCQWHvaizuqe2HqeF7CPpZJGMkyGbE7bUHZyfeD",
  "key14": "6P2VAirwL1fTpYmWtn8cPsBNM5Dby1YAHafKFgBtJguYuauRkSYyizZzj2NW3oqcgUXdLoNHcfuRNVzyyr4JSm7",
  "key15": "4G3yHMaygDw2qMxQgxXsQcB76qJ6fAPiWx7AS6gbaV5LhYCvsvNhbWYJ7aag8SRVeNyookXRnrxzSAssDsHoFF7Q",
  "key16": "2PBR8yGdVwTme9G6ikTsD8z717E6iu4K7Q7UXv3pcota4ZsQp4wEiQwxDzkoGpFesyyMPZ4VpDLtfLY6WkfYQ6sk",
  "key17": "3WC7U5izYJtCXujCL6JrQ8ET7uMfAY6zRJmWMx97vt8wbcwszcag9JpMFz2yM2pGiehgJ5tmgpqAMgLY2uWax4Y8",
  "key18": "2zVnpEdDcmeRz7fMmaSStC2fEKxRCJjUJdW7nHQQdJrQGiBW6dJRKmnUBCRHsZ4v7X5zLuYqAakLHs85ccQfc2kF",
  "key19": "jrqWaBLhyPyV1AATWZypLx6q7NhBj29tfTFV7Zs5FQqXqe2JruWgayUjoBWtRoL4MtCDB4APhrSpkZou2F2XTbE",
  "key20": "61xtFB4f7fTRBCMH4HJ3LBjRmzAsAB6fgWGn11zoC35BRvVL4qtuEaz3PKmR3gGmgoi2JU3jNaNxAKtBHfw2WrJF",
  "key21": "knYRQEY8WuEC4rMZ1TDcZpLJUyeqQVB76J4S5W4oahdHbXvwYxQfAoTocEa7REDKrrCrv95StS2PAp4j7DWcdKS",
  "key22": "yPdmpMkCBzxGiZTxFgmhuEFwVyaALGW89nKYftpg9zmonSTtMBi8QmtdZMZ15955SYJ26qEEDNWGciVs85MYdc7",
  "key23": "55QhJhatNcWrKNKrDqz3xSwaAkvcC5ZmHaFoN8eGbZwALxWCRir3bJEKDJaCGeNxsTJqPt9kawNDgDo7CPz9v6rv",
  "key24": "3h2TcgHmpGdEZW932W3rwL3zakQB25GoriXzax2h4piSrRGSr4EwuB6pk1VJgbb26ea7upgDNAeSy117ZZr7Sona",
  "key25": "5oa618VYRpQwnjGTjmkSCpxP2SmoCkUL6x92g9AvtR3tvwaS1LWvmaWNUturLjgoSVXg1yGS3Er6YqxQEyeSBEV1"
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
