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
    "5XNUVVH2mCXLjjh3jZGaBd1ejNkE6UVXYkfntWEGMiw8aQYui1xoh4gGRe2pKv88Lr7zmZJ3o85pSk6ZkaLihWtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfNo7Py5sNv7EKE3pEWSrMKtW3GiTvhCAgfBto1oiZGHgRA4hHu1gAsKtXT1EucfF4zpDSTHXpDPbxKdiXnoTMs",
  "key1": "4U98aTa27pKxNef2898V7rPDAS7utXD65d2BsJR8jhX9nr5hbFuSanGQGSPj2T2XBCknRBcTM64iXzaUtxuBuZQL",
  "key2": "2uoVaYt1qpFQCjS5i1PweL1euTAmkG3kHY4jTkaWg4twKuEzUsLgNZCWurNCPuJLJj5McYpDNEMKJdMSJBzAv7LZ",
  "key3": "3J8KsZi6C6frq3YFCHxQzuYZYqLpoVTbbfSykWLX7y5VoyMrFGe7h2GiBiLrxkzNVXSpEZBBiiUnm4U1cB9v81yt",
  "key4": "4GPRZzjGoFPcoRbYysE2JB8iPknDeT6amfkWikwFTh5gLgNQppxkeL33AnbUAcQUUVXf6rnVQWGTP3HnsJZLRsDi",
  "key5": "5EiF3WpACY3xkMi9n5DWa1d1XHrwq2Qb4dajJeGZkBd48jpxzh2fQT2SMC45zavxnjuwJ3BRAoY5xKFqhKf44fDv",
  "key6": "67AzJFoXhUkciuAXTjYGpAuULW1SdTiNxRByhgzEJsbQAVtQGjQeTizxBx83TjrXFL4qTDhoxKpqnQGJYqNMxBMd",
  "key7": "3B5tPYgeJHjdZeHBDskNPfYGSm6ippsi7R886KwZznHyhosPLJPriLcXBSeGj9QqWPT5N6DYMuFjLhmcpSjBmx5a",
  "key8": "45NPeHzdhaABJzNewNGXHzRuM7oNbaMpwNskemFi947hxkzoQHK3CepiCKsGShL5Ky9CUoVy8V2UD9AvNXjQjSFa",
  "key9": "4r92Ya2ri5R61BWdhJyDvuxq6kTqPUSoYYVYu21qKJrkgn5DDqydkqWd1SMACT15nuTncWshJ17uWazAwXZYrVSA",
  "key10": "yM11AWtkPrJp7JcNiCN3RxgVCkSAnQRzdm2p7JGTJt83SRZn6NjVkeGewtihQCxhk2ALWfUbEV28L8cRcpnLXBG",
  "key11": "4LtBi9U5qHLfyCpEbyKyKQqeKwicjYwwtGd4148DAzkKJ1KrEvqcV8ADrifpQzXoqBvkxw4cQe4shaqoj6MENVbZ",
  "key12": "HrwX1F2GkPkudmTJyKsDjXE2M1HQLksEdBjHbZXhSAnd47psvqTjegcmkzD9N3fSnLMQ7xyVvHa7jVtdAtFu4ao",
  "key13": "3AkYhFmHL2FxpD2Hvr3ace57bAUinaBByCyXBMedohBMzJnad68tTV9ygQH3HNugx6eesQ6ZXY5vA2wLraGDo8Pu",
  "key14": "2SzDUNgiHKihcfY4wx6d4CeMtZLEyqkjRwMC1xBsDSjgit6Trwc29hRetifAjLfiW7CaqsVbMUH4U8GfjRYWDQjd",
  "key15": "4MWUniEYgWRigymyc6rzfvDXSNeKQUawBdXaYCZKNguE98GxVd9FpTWL3i7mvnRkrU9yfZX5AmnKFJywfp3PSbEA",
  "key16": "56wep7M6kg29RHDLv3MXqusS8FaGhkJNfiizaNdeC6JZuYqQswHbgGP6LiV7oJA41krP81L2kn626ay3mZa496ya",
  "key17": "2aZo1zXKaJR3AYhaGNczxtqC2kWNJqErM2Jsm6NWHduFfyvmcd3KMt3BDwQebcW32D6V17Tx6JkshJ56TnUMYZfT",
  "key18": "3PiRiVggKsT8ac8ksGx53h6QgaYEtpLLuzy8CfxN7NnJkMTvA2im8rcBySSdBuU47KffXbbWMKHKLXrrf2ZP9ECD",
  "key19": "43Ce1W1fF1Tt49qtabfDZGRBhwbFzXurJ19wwtkVgM3PSV72Wt9VMrjJ37xNEMDG596MDezhRyHS62bPHfxmoYNS",
  "key20": "33YhTJBZJVvEbduPNoonLdXsrvqBMNGFmNMK1of7zbVmMCpzLHctDi4LmT7puvjKJPbAoY8T69QrwCNxFUbenPFM",
  "key21": "5bf8F2KTExHiMWQ6AA3vF6XEpQN3Z2j5M71ipnpZPnJTGaVHvYsb1zz1fdExjQT8wEXLfugcJ8mhM5QDSeTQLbL3",
  "key22": "4sEFG1VkJFHemSvcW39ji6EMCUdVe81wCg7LHe7zmrs5CM3XKZDo8rHe2D7ZJS67FbHM2kmnv2thA4jWQnUnezgD",
  "key23": "339HW9RGtAEfHVdjBoav9JeoqxBd7maMb1bcTHLCAEmkqapVicFckqkdyGX1QvLFUNDvLmJNnbfVuHD6RhQanxYY",
  "key24": "4C9K4zjHjnkn9PL1zsFRdbmS1pCSkgJ9nmjJQZqPPMRU9rkgo4yyyE1rdVFZP6STsrBtBBdYB4oXExtoezJZpCTL"
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
