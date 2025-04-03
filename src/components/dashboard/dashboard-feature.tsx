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
    "JU8vEsirg7cv9JR7AbKHRvQcoJGFuxAiWRWCcTZuWEVZDxjFsVpcSujxM7NL9zEES9fD3QLR15x43QvdJcaY3nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUWTnhDPx21gfxaixfXrXeqgUDRgyL6BcQywZ8Qw6fzfSX4X6FqTwk3voKG7GQyX9d5TNnS4PoG6w1aTtfJk8g5",
  "key1": "4jsxQBFhM6m9sGtuVJqasAzo4wyRAKcuKR3fyduZeMGuHmzeNt7cc2bhzC3aF4RseqUo6YeMFcfKBHGDg2hYu86L",
  "key2": "4yGQgebtNzXUep1UeppxRWigcjsW1hX262za7GwqgjFpqzf2qqVeDaD3q1bbKjjR9oFwqjDUNjiqH2Udwc8gnLo8",
  "key3": "2svdKqik4cbBjpGncfqKGrriYqogAuwyzyZDaxv8d5PSfthFZyYJAT4Xui2FscWBzbzhwT9fZV8cJNGC4SMjPpZ3",
  "key4": "5e5AYLsvTaXmYpvskccs4vE54gZKiHv5xRfUNdFqQCSvWBqJTpti2HDgfP2MW274m5dbA9uZnGx5SrHEycRC6pzZ",
  "key5": "59TLheP72LaLG9eBgcewjqFjYEbEdaxwYusNaeic9Z4PJcPq7NgxBym9qFi4KtDUDWZwJ8wZor1G2ZViP4LmZtQ1",
  "key6": "3k7kmtCdxCa1AZ953ykxj7daVkM2DQ8ysF3MEffbk1T5BzHRRDfQHcMKxhw4AaMgGMacDAFnHV9VJmagJFmH7cEN",
  "key7": "3mVG56J3hNLMFfbkYqUNxuggtQjj1J74DXLhwieJ3J8Uy5sHRDeVqd7fNPduqVmjdF5UV2fXqv6wJRcs4Y9CX7Jq",
  "key8": "3yfMKccyUQEYpqeGoggMiV9LCxY61q94sxYPqCi2TJ4Ddvp3QuyE7gp2BLumzeyuRiynidSztUtZiReacNgLr5sz",
  "key9": "3cqj6CyaCwg5A9uQNBdFpNAEPCnfED63Y3FJ15QWduauVDrwMiPBEdDLa5FptUXijJCHVSLYi4KEPVvNrPSGN4Yr",
  "key10": "51otYBUNceZVP9N4ZTXFzyXhbciuq8nqyMaGDMfXB8TPLvzRKCRp6eJnoP6MfDwjshJXLzEkoqNT33h95miP1BvE",
  "key11": "49S2tN9NB1Ub9f84TdeSkibpKJuxEVc23BpEA6QvLiDP5mWQnefJvtoxeJxHKYmJUmC7j12YB4hQodsdbg7UGcCR",
  "key12": "5Ncy7ucnScEKTvpEvZctNeuvsN3ugG9EqqubjYG7nFjm5Ay2GUvyBJ7gBeHWmQkHtURbgMB6petd756nxkc3v9iK",
  "key13": "4RPTtr1wqir5r23e5PSkJ1NvoY9Th1Ad1PpwTY3EFSnWjrMXxYpyvohDsmmXZaPhNLfkmjV6WJeHxCQv6ZVjWTUF",
  "key14": "4NwPs34UYQPdxNZpqBuaBsAoD48aGPGZJBwW6RYaXZ6SupkTfSXLc7p7ScGmhDGVQBcdd1KYv3bo7oMPtdbxkutV",
  "key15": "3kW1K6mTCenbTAR9YDCC9jciufmjUPvra7TAtBZTNmrrKof6Aj4HcW76dLbSLAmv7xer46HFcCjMhbxxwXyEq8cn",
  "key16": "4gKCDDV38uW6913vinSpRHQCYK4dXBYvEmpeJDMBQXUdWrYUXxHTdRhWvsqJdbsWKjNkKjABppoVLdMPb6JUr6cT",
  "key17": "65PN67TPCTGFSJ4kraxtwy5Qod9cW4DUqnSHvC3nb9md3HvBV4byNmgVamfzVT6wsp43PrVdKms6hs2BP5yHz6ch",
  "key18": "2F7wzVWKiemi3SoMuMHNTMvaEDwy8jePoswFQpTzUgJ3MScXQzhhBKkgbaDAXwBZkC92hpy4uC7rtzJ82dY9AziU",
  "key19": "7x39tzQszoVC9BeEFy8pXts9Y5ZpJUVhGF4dQYmWxuyoK1SvZvefmh2Q52Q86q6WFFyK15DREWUqY5Vmb3kNCAJ",
  "key20": "4K5E8MuJQeuLuKTcKiBhTiiV7nQxmFinANTbXnZANinqpbyBqct9bu7xNFEfCYT8hEzgNCEBw9ZsrfYg9zwPTgyi",
  "key21": "5M7bvH2jVLrtRPYkPyJ7c1m7ZnnnG7JkWiEpkHXtr6giU6fY86Du3geNwMX1BqAXmsmHBo14vPzpUYnYwCAHTNtU",
  "key22": "4fbzzDkd2TUS8jihXwXKdt1DPL15EzHRAA4DrMe7KeSjdemgREQwxQmEjchoZdZtxA9KghWE91z3zgUZfxeeihbJ",
  "key23": "63EFKFLGtjANtCR6wuCgSxGK9X341mazyoDuBYQXGPUZBXsA5AaCQz4V249dZeiKboXitbppxtwkbQ9vniVXEtMd",
  "key24": "5kkoW7cmTHQnf698QXgTZ7q9gxJUrZkViGWiVfDnuGvkUeGofy6D77FB7RVHzs4ft1D5EyUtU7a9BpBwyqQMLm22",
  "key25": "QjUeNZCVjKoonB3dNFLBpcJMWo8LPzhoaZyWwGsrJkkdDdoTXE66ERkth1LBZPhXm3EnxwGtwBEqiS6cFK661Dr",
  "key26": "4jgj3HngLDQPkpBBPKbAtWHkTGDAn16oXAFxzHFYFbvg1W2iugkQeow4k7v8uV8mYgZCTeHQyf7BzxzRi2UyXKr1",
  "key27": "4KvVXQabZQgWdBVPgTGEc8utNp8pfGFz7SQX4TSJX54m677sAKnyJmHwatgKx4ytykiaGLsHZ8EpaUcKKBudwMZG",
  "key28": "FC17MFieaH2j3QS2sAg6vBZJaYrRU6r5cYQ7Kq8ceCDNghdCWSaVes7un4wQi6Zfyt3qgjpsutavKRztjbGz5yv"
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
