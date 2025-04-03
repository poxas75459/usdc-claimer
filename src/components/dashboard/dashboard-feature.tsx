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
    "3m7AsTxBA6AzA97U6jmuyHv1kPwq2snMBAt1sPUV9HoVAZFzZmJ7TAHXE4Ta5QKZPN8w5Zq39MFteWUfsvwE14MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Re1PTpKKodq9tXaj3WuCVefsjyQ1gyEX7kLwCuEKicN8b9gS3SEXZVZpg4K1d1ww6dCngPcmQJhGi8hQJZ4xkt",
  "key1": "4h5K5mJTg1UyR9j9KfZsyswpH6QdHvbFsBRinkNTPoccwRszavaEpWvSeQCZ8Xs5p4MreogvoYSK9GkSqnS9bS4M",
  "key2": "5v8vwKvMZKwwztnzsYoV6HG5VXY2grDGTAFQfa3K5qFHD46T3sVpSk2G9WGkGa1kvxUXPeWey5Zoj78Bs2Zw1AHm",
  "key3": "TtstPBqFrEwZg3WhZxgNZVCiQWoGccDNvXbVmXqUjnNBbxyFnFvPq3zUvHkF2H4FmxuvvkfABLdudr7xcW25qGW",
  "key4": "34BoZMs9yep8yk5QprjkfcsKRouQndJEPv3dTbK9fqSs7Hfr4EwCdSpKjFG3JH9W7ew2ZJ2igQJPn89VpPXxoc4W",
  "key5": "3XHREywLXnacQejzVyf1LYWziUny6NQnF75coQoibewsdemwjpR1LXzWGmYPriYEZfMSsiMKyUyhnFSMSQj1npLp",
  "key6": "BKSpgZxaGEDSuG63Ck4Ly9HMgw2gCrXyR2EABPFzPw9h8Nhy4XDTJLSNJsbNo7rci44Suf2DsMq28R3v2QeBx4s",
  "key7": "2f7SvR38Qvc5y4c4kDxTMdU8kuX889axXhYp4PF4jWvwkLyZduEGPooUUdr43mSGo4M2XcHXYmm8eTJTmm3Zm8QJ",
  "key8": "2mF742Ep3M9js5F24K29S7eGh6GFbWeKbzu7Pv9CSVhvFGH289ZjwmPBRwhXkE2M91HSpVP47HiYM3A31jc8ALq",
  "key9": "4v52hmWQL16ij28escHB2VuoDz7PcjghmiZSQZc7SZ5oJGwjLxdvyg5kTHsy4NrgoZvUrtq6X3tPQFs5XQxEvX8R",
  "key10": "5Qvvf4j1GbDfWh1UMbWVexE7LgZ9BtH1vEsWUyxhewd2asGiiKCVH4QzmqpSAeAXoXcG3e425QAvndzupi9Jc8dn",
  "key11": "3dNARxxMS9RTnQE66xyRboAQsPtLvC5WQV8hW9ZHRHd6vPELpyHsP4vuTBJUfD2GyAjwghvq7YrQkDKYBymUebxk",
  "key12": "2AbErxuysqZyKmkTBa41mt5ibNRXmuJfc6EGHUy6fHsG74sfs5tsDJUZqaQGurXQhK8E9nYhfTngkK5MLow9WEVe",
  "key13": "3QTGukxhgdQ8AQTqmbzFFcppgPBMgShdbMGDg5TJRkGEnVzgvVjUEcKNjUpmQc7x3VGhnqJKNerRgKypXBgV4bDt",
  "key14": "3RG5GBwMBG1BoMj7iN4atURiUkLDAgYmetWhwEsdGeXjsHhhPGKBJuYkEAb7id4EtUsgUe4cpbd3sQ5zFfJquCrZ",
  "key15": "4sCHPUdsGmJDsGFbieFP5ctEHuf9NV1z7unyTdKCu4b99CQQyNmx3cAKyz5824bMuvy4zjXxQ4gaZ7SyfhDdy9uX",
  "key16": "67oTHQqWpWqHvgVhyUD6y55ZY815Jn9xhsFuQaujtzoRULZ7rrcBhTzodLa9HKnrJEiEpbPwPqYan2HpxoRJQa3Q",
  "key17": "5upQ8X3LhbTr3EJzwpLr4ich76gXzKbArPnByFSDFwS7X6CbZyvKCFQ1B4tr9fHVhqKqrYp5eZMvce2cr1FUyMbi",
  "key18": "4rvWtdwxkVDfHMKAFv5v6ovQ7x8CJc7bqXW32nzhM8S7jfmBUzoEH1uAQKvkwPCBGv455hCRo7dvEYV5BcaBKS7e",
  "key19": "4AVa1MW38CvqkcA7hgnqTyMTZrXTUar5h4U7QqAr7EwEJ5XPrG9SqjsvLBN2Cj9jLA2mPkN7RyFCXuqiuvFWPTfn",
  "key20": "4q1nP9TG8ftySCzE6LXS9uvVQBA5j3ZrRRQ82aAQroLn9X6iqLM5fnGBXkBF4E6r8dLyv55WZsMTazfmvCv3Wc42",
  "key21": "5n8yjTdnt2c1w66GcPyC3CVKshou1eYsZB8K7q9Gdeyy6V3T2Nnnrrj5yJ85hQ5Ak9f4HXvTiBiSt1hb53LLB5Ad",
  "key22": "3A3ZHraKk4KSgSfNko7amg3MEqAdJ41Kzbsc6Qdic1xJ6wdv9C57uzoePExiSrV5aUTLxH5cW6DUwS4egn4i1i3r",
  "key23": "4NTpdDhW4W2Fem8mSVRBRMxwzVGom9JUK8kwV9WUE69wp2fD4HUYBMypPQN2A8D8oq3gnDQvE23xEGfDtxLrLHVU",
  "key24": "5vqXDjBujsW5kV7agqfvSyDdA3cHfFxtjdz39MhApHDrjs3nWWwScSgeabA5NX1HZJ8SfddBxEthYUr1QVMDrJyp",
  "key25": "tXSvTDR8PGbtX4KirHqqYPD1bbd34kCd6tMCJEhWmoeGgXprnTkngy126iZavaz1iQZrBt7X9Bf6xzWqvW2imSd",
  "key26": "3wvauRWWsoCSsxi1AYCLLQoGZtqZFdjqjzKprVNyNJShVPNc8qwv8ZyMRSDonojBhuY22ZUxsXy3aCzpeRKXrkK4",
  "key27": "LoQwdiSguc9Rbku3nDEt24sdVwzFiR3PfqcmxAA2ithYRCQ9GF6tpCSbgmVBbkBWxvcnHyxV3aCZeFt5zHUYHu8"
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
