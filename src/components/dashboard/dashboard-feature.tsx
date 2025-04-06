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
    "66NYDEGoegK8YAHXE3SPzfv3mrUq2PV7ZCxLqYo7n1gVebSz9aMsDxiG1LtSEuDEaBRRGVXo3nATY2TaYR49pKfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5Ds45QX1SE8YxKcocKPzjY4XWepnFm2hKTfwbvz9GF5FsHJLLYJbqopdf5b42UrRFRj72fTMVHwTBgVxNbbF1m",
  "key1": "3S6uAz8ASJE4oM3GxHkvaFur3jREaUgtcafbBdjoPRbEuEUXiLTF7Ycs2nwvaT11zCg5GGsMjkhJ2fEMSvhh3PoL",
  "key2": "2Mn3LtfGnRwwrQFmVDavPCGnGf41j4WwA3UMnTNCMHBYoemNFLGsY7rdQtgh7w5FTzKUdmLwqhGbt2iz1CfnfPJ2",
  "key3": "33qVJA7QNhCiScVNN1UL3msUrLxo2PFY7dWhx8TkuQgoNrbfQmXWTyjCb7ZAKYqAj4X4mQBBrPQqqjCjefN2mZ19",
  "key4": "3PPkWiSa5wn4v1DLrew1M2AmZbnKAMmvgqnCtrWkLecwmps4Sqs9SRrve9aEe6TWy3hoXVinBpLLxJ18SoE9bexn",
  "key5": "3jGFMdFpL1knQ4sWdhgCa1ehMF2twx2arZTw7HvbdsGhCMQ6vxpMtpmkcNvfKrGzw9aekimjxKN3fxrFRTYBcjVy",
  "key6": "2WHFZA6uLeWXQf1sCchStsF8tNsuFvrKNAYEwL19qX8RCdmA7LKZiXgPHYYWNaSd3fnFo1mcznk5kT5n22VHAK9z",
  "key7": "2CKLkYBemmDX4sgNorpbfiAbhexTKg7GvDCXbE3ZxujuXuNaeMkioUe65qj1RGcpJDpfCC9XrUihTi5a9WTPn6xJ",
  "key8": "2JWJo5eYZkaWqYAvN8gb91SbgezKxtAe5dn7Kvser7DUy8cgkUwhZYce3fxqiPZqXk5fAZx3VQ6L9pmV2jR6VxWo",
  "key9": "VkAisPqqCe4D5Fz2hsapGzpnBWRu4WUEXukqm3qzM8PmTD4Qu73A1Av7Ek7NN8tjuQew2YSTqaCqaC5cUVCnLH8",
  "key10": "2JPt6Q65bnkkwVD9kJi3u6DpzfoWtFmnqY2mRynkxwQPLYxpWF1bphedVSt1nB57TGoZcGo2pA8htfWx7sh6Msaz",
  "key11": "5fiT13M6h9gDfbPhb8ePkzNP2NZGVaEV7oDYNJTqD7xhpDqg4DEQqmsSv1dF9tAnesqGfKVndysHciijujJTbHxS",
  "key12": "5TKD6uo6zNtqd3ynUj3SYwmNUQgeMHrbWnExdrXtuaoaazao3QFmxH1Ni7YxSEaPAtTvQGMgzWk9kHMCYNMGZHgt",
  "key13": "3RguiYuP99jL3yvA22TzzvZedJd2XzWnSy9pCbZ6FFzoRAJQC4vRyxYJ8ea8EvE3wNX2odyo4EvrcsiLLUytFuxb",
  "key14": "2qrqhxkdTKd4fb5FABRYMRceSopGT9kVrzDNf7mZxCNKKHWebfmccga37Bo4HUMCwbucyfq1EcecFuLhcgJi4E5M",
  "key15": "65PjJZQCscnUrPS75TdQD3cDEdb9ykY6UGBNoKZDHmfh2RtZjyz1GkCcrLohDvsrvYaFa5sRXfA7eAgXR3KGweGm",
  "key16": "MWbbZcj96sPZk9nJVguYqyza6E7kgLoE5FBuK6xcKCJQL4nB7ZbcJC6ogax72KvYkf11zGcJLEgfMLnEuA63jk3",
  "key17": "4vYZEJho9XHfDQZt4LiKj4G1j4p3nnqMTsm8PdV4KPPmRX1gq3ywZicBQaq7pYNpQCzUBLKaFqBtK9dJz7NxAjMZ",
  "key18": "2RyFR32QWYsYuJa73sZq5UT7jkMVMnDHxWKA8mrV8en55twnZwsjpit1HU4ZfZ5RsnyVDZjkKabwSC33Jy67xH4G",
  "key19": "3pkhVYjxukMNHcTJwveoTJQWjLcZrekKLWjcpRF7vYyf6cjnmzBB25vFJcadBpPTYpLRcoQjsc8pnUWHUg5b1ZWv",
  "key20": "4kBxfoUh9fU6ko8ExhwqaqV6uZ4RLpdatjKdFwpMuWEoHBi4iUTjZvJTztaK5PTx1rT9qapD1RNihuTC7vC6p1QM",
  "key21": "61uK4cC7LwdK5AaqHa29ok7vnd7oTNKAruUfQKxf6Gd5fYSDF8uxNpF8uvfoVZz426wQzCYrJgN7j219EXkXabKR",
  "key22": "2nbXqpZi1n3wHDYrTfigiVwfBG3aEvrYq1eZhLR3RRWKoFHKJUoopJYxxdgebCuaa7S5U7sQ9GZR56DCDnucsm6U",
  "key23": "5eQxzfNmy3j7ZWyFgn63BzQKSGuAF98DfsF7mDhNosKKhEwW9V85JTncci2iBU9nuFNHC4iuzo6XWkgrWQF2MB7j",
  "key24": "SLDcbw1hZiaMX2gmbfmWL3LD8GYBYJyVNt3WeBcYS2gRw9cyQQs8f6FQiWNsmNwSQ5asqp17ZYVoY6sSpEeZpt9",
  "key25": "TyBByRrpKF4snPFLibZuTCYQm4LMsjXJ3UsMF3Viz5UknLaQZvsuyaer5pnUMzPzkicESREN5UMTFxjeTvJFjnS"
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
