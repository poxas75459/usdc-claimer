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
    "5ecaEJkNhU7qvFzW2BDLiQhgRB1QsheCwaTnDqBFSoeSVXaHrmBpt4trKguDr5VTFUWJj7Ki5XWnBbRMpZ21dV2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQFPvnJKw9CSzjm58pukJUcnQVqHP9w8kmPo1gyeHv3uxwUY1Wt9DAzgatxJd3Bwgr5GbNswTBgUWw8DDTioJ7d",
  "key1": "3NSQSPBRWzR64pVykxLuZiPNQ2izxLfPkNtXEc78iX11mRizgAmcccMu89rwFnqn3vYv1MkMbYiQR4iz7k9zrRTw",
  "key2": "2oRREauNEM1iv8eT1WaxokiP4rjfQmuDx8yDPNgfAVkWZYSWBcBk4oZ1ovVzBDUj8Wy3RDY2J5Mm4jhWATuMGNtu",
  "key3": "5oFXmcDAiJvGhqF1NKM5bYujFihWiQAQvsYJqdXQ4FanKJwahb2ZNJNwS17MYESD6xpqZnc9feH5neRHzAoAUuN1",
  "key4": "3Vcf7Hdavq6gD3TEWMu5wSnKcuDSuXTjmKZ5f6nidGFdVFByp8whMD92fFo6HxaBVqcebxJ6cFYJeJ513BU18Et8",
  "key5": "RCoSaRA73SWSryAY9EfaT3YMZvBjzt5GiSSTAuNq8GKUXDQiumJdMYk9KHKSZSmspNFgYQmwCzW1sM1Tk9YQF48",
  "key6": "2EU9VhoXg9DtudBMKPB1yJoNu9EHevxsJUPkKooW5oB1GAc3xZ8o5VxNxu2xXiKhw4d87AkVRg79zQQgfX8hF49K",
  "key7": "2FvifkAo9v1g5ucw527M4VRTKfYtwu6K9K6ywCRLScNn7bJjPv1Ekpy8MuewXvCMs427iX1yHr7iFkzbqYuYfjdY",
  "key8": "56B6gpCUmmsN9eqG3NyYcHf8mKGnPdgcQZk9HAsb9SUfy1DMnn3RG2jTfLRpVY7fF7rqwiYnKQ1kCpE54D5vfi9E",
  "key9": "sfZzGbUm5MNThoXXvDSkHBmfMx9EB2UNYhPCrZxUuEAe9nhf7V6m75G2d16ySTokFCR5wwcwCL2aUBdARAYnc2H",
  "key10": "3PBC9h6obx24eLXARjNfFB8JnfiZxNhRC2ouAGfM23KCewEVz6XDeTRTiRTKtJw92EPnxpaphHc8F7QrRxkRvUkh",
  "key11": "4sZubSw8sv4KJCn9PwobNebBTX7psDKqjqxeHgndbSHMrbxi4ReoUJJJKt8GnxUVNDJ1AkMYHwJikcfYbWZY3Gtz",
  "key12": "4trtXNh8ajQoLhszJqHF3p5DfeQT1BM9Ns4J9stHhsspnNqWzM9vxte9QsxBK7aSHpaKwiwCh2T3TSa81HXtr3ci",
  "key13": "5EpQ42CZWWK1W7TUnc9xFcrFoxBsSomozdiUGjdUa9LeyvoTXUHxuSQUzbm688cwtUqHWhP3ifQQjAUpUjjDaTcr",
  "key14": "4wEXBgFxZFvGL1BQV98USi9Pagbd9sZWrEuxTFuuYxFah9A6gjHkroUbdzp5CUrArQAWXE4n9Bxib3WcgdfwHLMi",
  "key15": "2rVNtQajBqp1UUKrAWsRNWJDUJZJN2XB9iMkHkQ7xkVhn3AhcPLYzKBx9d8Z3ooZqFEYg2ZbARSAf6ubB34SnRAY",
  "key16": "4esr3M8zA1xqd6jPHNrBkYcvzanEEk9usNKkNFtoxkuN5krnbxyiJNd2YB7qPAetTGG19rpH2ZWkcAg4uxQc73rc",
  "key17": "32hjxzfsVMudtXmxigkxZXxozGDkiaktSDxKFSxRw8Ng5Uc9hnGzNDTv7CQYq7cWp89nAWkxSBq315u35B4X1h9e",
  "key18": "4jyEozn2nYaidarsZwpq2wpL9Qcmfn35ttcX2Qn2ATtx7VUds6TEJkMdph93jGnZGNTSoLikqUPJ8CKJHwySxQfa",
  "key19": "5K3pfBhTsYDQx7eTRHwRR3RsSGvDgtcug22aCt3HjTDrnbVVcDXqfUrZpRwkQaR5LrEvKf7AEmnjeX1DGMuvX1ao",
  "key20": "AJaPKh5hgoErZr4PHySqs1T4y2aa1kvexTf8xFs9zhjNWCGPiQZjZwsWEcNCdC8NNx1j5GHbWuavJrSKuNTAjZ1",
  "key21": "4QCrJKWL4Rdd4RiKCAFMqqUB3FbzsroNaVFkvFFwd159cWte1M6Cm1T8fs9WmkwJ67fjaaJufuYp3874Psv7KAbC",
  "key22": "4ce7yE5ZiYTzB9n5AUXem33muXchaTnkxmUwEfCcFEw4kdaCesJ3ASL9RvGTgyFwHvSQcSnBkQh23hEhbFFfgTNW",
  "key23": "4bjmg58TWDcusM9Zgy15hyhrs486sxFXMAeCsTakzT3GzBDVbcHjutGaNhLoBzWUSyqFcF999LUavRBfVnJnrwGC",
  "key24": "3HZfH9eezjbtdXMryQ4tCTG7F4V4MPUab2A9D9xD7oW2c4aLKxUbo6Kkm5JWUUxAp3ru9N4awcx9RBeYTRVPPK2q"
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
