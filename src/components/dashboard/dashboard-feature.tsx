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
    "2v3DZi7mdUxBXwKWuXpcQFg8Cwuuu2aLcCMRQ5mVww9rf6GAx7WV16dSuGiFsSdbdSbwJZxhGsRbuh9QxTVTAa7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oH7hLbBiaLPsqEELKoub2sob5aGReLFhFjdSMUztLXpLgHusBVHBnvgfRnawWWfgTqY1eqCVu39CAFCs4kb7Zzg",
  "key1": "2PoMJwCBoe8vmvDrbtbPUnLQZsYzkm8pV7re7arXETfQpPwkFiRZQHuHveeLm8J62sXnBjyhPpSqw6aK6LFoqCsC",
  "key2": "34Gb2CT5VUuie3g54nbMbv5YmKe45HM55aWMqG5Hnq79hYeUrc7vW2F9uWAfhjuTGGQ1jDSN2Bk3B5g8F2cFLgGW",
  "key3": "2aM9CWnN5ZPHsnrMn9jcgQMmCwCPN3hUrioEFq7SbBba1QNsTHJJQQodP5oh4RkaZtXKUAiQQqL37xFqDaqiFCBe",
  "key4": "5oXtRSMXueJxLSzK7NrEeCpDXwdbgL3NE6ojS97DiyECt669B8uaDbuvLcZ8ou31i6Etz6UMMS2KeFMWjhoFCu9h",
  "key5": "5oXnRGwTG48kSGP4LHm2KvAHjSUw6rNv3SAjJs8j17dv6WUkHZedS3YdRcMaZ2EfrE6J57hUHiryKb8RSY7evqcv",
  "key6": "3jJqDdGoaSWNA1TNeR9FwWP2kBwNWoj1qMfCPioZnqcF2f1mqkFgP45LMdsLWYsCgNFsGqqRmYPkKVEWy3bMy14n",
  "key7": "5HSXAC9HLiSEsDmsBytSFwfwv7FxtUmiM7EfvU2rzGF58L3rSch9rGAiBYkLBLqd9my5oh9r3eKCVKqZKdNdAD9p",
  "key8": "jnS4KZaHSurAurk4z69cEGNXLdHXh9qGy4K6F6tj3dKTCzMCdKU82B8rmFPCWK72nVjbuCeDRvxm8Tf24rDMCxG",
  "key9": "5ByQhdguGwzu5jM7z21zYxUyyjCDxfCb7jS8UpqcchMDSCaqxHexbiYof5mo65Y7GtXRwqAkFpc5WFnumoA7gnAd",
  "key10": "2yRd3DnWaJ4fTFP9QYnfQqb6kHj3BTh6F4t3S3TEuLocE9pQM2xdxWXzaRBCVukWah6jwU6Br2GNo8Zx9gnFjcV9",
  "key11": "5ibSqaoXrxgpE1D1LnJUVUfman9q5EJFysjF3nM4C8fJw4MN5RzXDjR2Cab7JEBEr8n7EVs7SE4ACLs3upLj4tXx",
  "key12": "4d1DmHPe39KxcJ9z1afoAuUGScdu5vX5uz9GfHMet4UKG8PYYAiZRRoYD17kqm7NGxLmnTR9KRXM5K52Fi4yusYo",
  "key13": "5PgTrfURwPGLngv6ogvxqqdvrNjKvun3ZVn6JuurkST4L1TyfsNQ3Z7s4wJ5H1Y7A59NqQpGPtX8vTGUd86vLxNC",
  "key14": "oqzt9wrHAKEfeCuueD7oPJ65Vy3Fi4RFDjcMMSmP9Zk1bHKb8YNqwtVFKx8iEBk417eG3QXm6DHQoEwp4bAMvZo",
  "key15": "MFyUmwHwFpWJJ1zXDHnHQKJrZ6TdKP2WgNmQsFHddy64LZPMcc2FKKUdEW6VWKHGnYbC2JXifS8HcT2VKimXsPk",
  "key16": "2EexwcW9UKRGQdGgcZd6vYKsTR9RZHSxP7PSF2pXW1jwRjq8GicvowPYae1BzGXWJfvrZ8xya8DzEw9qa8Gx8VLL",
  "key17": "XZA2pjYQf5d3urAU6zUTmCKNV88n2beoeqgxrN2Rfgpfapd1oteudbMEohQ3hbjRsqr9XPSWt3qpUHTF467guqr",
  "key18": "3QiSuQkiSj7swZYfU7Dc4q319KUeGLb4Rcv1MXCxHyv3uUT24hKNiWhj7uy4dc3CZLFhCaBM8u2gcnHanRbtQHFn",
  "key19": "2qLsmMXqpdYhxCXbfiYv83g5xB8TaDZ7RGz5iGB5LfQNxmsDWMWds4ijqHP1n7aim5NovAPTD92fBRMUJQUAU1A5",
  "key20": "P8zyHcctuYwda2PB52vjZxMv4cUZmDkFcS4AcRMsobPiiXu7SU313G2e797JktJeuNE2znb9RxamDiRGVkoru2S",
  "key21": "2jT4d6ccWoFtoVdNWc3p5KDy8AyNV78fxgGk1sBNKFToBUaDHQKQgqMP4KxDpRA5BZakag1AR75rY3qZ7FZkWHcC",
  "key22": "2cbJDTGNY1eRY2x9U6XDjGDXoDAS2mc2DmEEH71V6zVCM6gqYv7E6Fzghd8Kqfy2Gx7AviRNkaiF3Zjdj2a9XWZs",
  "key23": "2sMuYyWvg9W8ArtSBsh7uJAEPXWtNsRircoVWdop59dGYeie8rj5XCQMWVccA87NBh677ZqSeh5i6cX48TYjYeTw",
  "key24": "5je3viA718wJuNgPScfz5wRFfzYgyFjWHg6Mg6HW12VfxN7WtrcSVpSGXbUv9d1EiG8Tzpw1oZMW3vUznFyDqiFD",
  "key25": "3yvn6cLBZ2TceT16Wk8pkh3inEtoDoCwtgkfVfiUCPVe3tvGQUp7sjkwsZHTockLBMcVECrNNxr7EA2huoLMZcpX"
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
