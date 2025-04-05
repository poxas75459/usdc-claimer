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
    "29sAxh7Uof8Vx3j2AaaqSCeGTXZXAmEh4UhEBjqsjMR7ustp39GPtFNCFgojuJQuvtgyhi5AcMXb8BP25NGwmuay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UsDF8FzsuE97xaNrvvRpAkhj5SSSpxzQ3BUaTd9kuAZK84ux5G1z3TKUqJXVAahQoK2GnW9y5sBoT4GXiBPLBhH",
  "key1": "3HMdXASCSKYaMXzxPg955oreymdaWWsUzbU3yXnxk7gNRifb39g7w9fpCdEtSJBKoTNjwauEo1FJqJcaGTp94dxK",
  "key2": "5YmEDJGvV76TdJBquSachoVUR1ttw4thGV6YwvNt6TBBpiAvMFwoxwzQvMLDUtNdhARyoQo2XvpoEP4aZWL3BXy2",
  "key3": "2AAhuGwmmUJVaVkbeNNPnagxh4qC52b6iYg4KQet8ACt3DEZmWSBKQrmrmB97gS6gw3pkjSofmkXQTkWkAjpwCBo",
  "key4": "2KccXVJCyYe88UdvoDza6BZcBZpCsxSJR7CP4BjTMJQJDfVG3gLmQm3DKtr7cX5VR6SKgKNjvmtwZ9GcWJBgD5v2",
  "key5": "4EwYMA5HccJ68fFmkx6ysLcEQeYDS6KnT7iJCq2FnzD49DUt5YBYVKCGQsPS4aMiCdt71phwLnZ5NzRVZfJrBfdJ",
  "key6": "44NzHtiDhCSgw8jYpgsLnddCoCLLA4kvp9RrqtYm9btVya9k2Boc12hAyMTWefrWpz5ZrvJ6QMXQUPcoChrupf7k",
  "key7": "oFPXamBR9kifWvpfSWMcXPEHBBBQWuTmoEo8gYcoeJtyWkvax7yPFMMmbsL7Zjjxw5KM5zySgYcRSURmU2WbHLG",
  "key8": "WjAtVS1GxUxjQXunaenJdn4YJciJb8CxSnPdLQPhaNuquXFTQVuLYBze1Sd8bULJzBkngcgG22eYMEw3xqEZYJU",
  "key9": "4WGzRDc35vkKquKJTyLS9CNrzhVueRxwStFA7rbe8oWAjbd5tMA4K1ozUvGbCkjPcStRGBjmo4HXyb1Q9p8UhUxV",
  "key10": "45k96o8YXVYt8Z7rKN4M3jrnCWbqsAGCAgiN9518x2pZxKqdFKLY2tKb2LRdF4zrtzTcg5XMuuiHJw5CuzY1dwzL",
  "key11": "4fvVyQveCaxZb9PTN1pkvvCyqtno4NeuMMtwY1LeM5qAFHBcobdBGyk3nRDrACTwDLJ1LCtQmkjinBD98CsQMdo1",
  "key12": "4qZVR1ffyH8Z3z6ykBXwTPwvTczArfC92uaA5uiWDfhe7PVXamdorFNsSNxhXjZVNEn3ARGkm91KYushkQHiT3id",
  "key13": "5in9rYyivJdJqFLpnrjTdXxo5KM1Qi9FUXbb1eRPo6tnXZVFRvuVLUUvnwn9yZ367gGsS7xEm3TQAKBAbT6mHbVc",
  "key14": "3nWdKsnRCdeN4NUxEkfC9rKDwy3DBJm3HvnLhXgJjXErHsxBVSM9tFQkKVXSfkiEY66tS1H7JHFjFKvmZkjXoW7X",
  "key15": "5Tyk7eKMUbt7vVPPsvn3kvbDuvuVEiMAcW1GybmdgCeULjY5WdEnhKBe91gQyotnMfugzubpF1bbBZHYjioeNHQC",
  "key16": "2UkZX7WxC1Vp458pZ5XNrnf6mkDvfDESBYhWn2RdQscpt8x1JwQSqfLmXqMS98ZESqQF5H39eqckxSLhR6Y35Pvt",
  "key17": "2Xpi3WfiyQ8BZrtUp4FU1SNcEmXjxXWPCUjmR2nDdcc894JSwAEusnFHE2BRA2KfWAZfGQ47BsHFjjyfZ4gk5BkR",
  "key18": "brPMVNs9zDdT9aCHCdNUmWViozvpWJihvxsTuZZ9y58MGYGTJgEttyV9R5vXCtXnGpFbHs4c73m2kK46uJgyFRm",
  "key19": "5d9dcZMyiMChRrBJazK7ss85cvZYQ1hWQ7LTLVyP8cTrbMSAaoAe4Re3t25s3ZF9xssBKsg1H8xZhAWAHkZfLLxg",
  "key20": "2eJC5N6yYUqvR8FGSHFfCkvuT24LoYr5pzGLLs2GN5LMSfs9jcMbnX5wukjtPw35p8pu7b7RgXZQN5G6T6MF9DG6",
  "key21": "4HV6qMePenqbL6Lu96DDcWXLdbdjvAQ5DkMHm86f3qZ7Mdt8jXjW4NitMyXjmYvX2x2Ai5wxsyApNyqJ9pwEeZTx",
  "key22": "4u4GpDejdkTYTHGFViP1ZmeSAP7s3MzEwqnC9q5LuxiAhA2gh8pxDGaMFHQV7b5j7kYZB181JiFKGVguJc6fYBgN",
  "key23": "5jWWDuHtzQf5oVkYUjaumobgUGnw9Rt8jadvozxnfkaSG8511T1A6ZEfVcFjMNcLbKh2YNUFNA8bnFAqjvHQcWHW",
  "key24": "4kxPF9KNprJU2iqgqTSUNS4DXHGA7dwtNEf3nVPqj5kHKdfHfqfiNCvd7zudKaapp6QVGms91TrzaDpcAhETY6nB",
  "key25": "54sNEoaNjUPxDnazoCP3hh88cd5DCFBsK1grbK8k1Zq9ZX58c6fLs4zyxP3wV2fgkK4M4EMN4guhEtdNvtEJwdDk",
  "key26": "DWEPnQ7V4Tu8s8A4nuhiJzoMwv3ZfQuh92GV5V5L3QcR39NwiQTFQ6rGMxz1dEfbyLayFMPoGM5jcz2PdeHKMcn",
  "key27": "3Fk5GVmrAj9WFegsfNEgKdMu5T66MxbBxEf8HTYdTJ79wYHZJorYyPgmqLVwi9oV7nuAmeBy95WRGPam4Bc9swVe"
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
