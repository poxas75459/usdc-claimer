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
    "2v8dS9JjLKq4je1zHrr9oUEzCnKXKhEPd9NJfDRX1Bpb7F6Buffq1Dx6kshCHcbyzhgPANdg6XrCN1uA3fffZZXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUUkXuBRhXs3ZdQABe6DYDSjqFAPM8Fu9YNg7uhn6pqQEAcfoCYZQVcdhodBGhg47jmu1YrtARn5g7bfyApxbgY",
  "key1": "4oSHfgwUABAQQGt7Gnm54qqvHWQtho4H5orJat5rWfZnFtqrhxh2cuXLNPeriNz6kQhcfXfm6oWm8SuNF2UsDvJx",
  "key2": "4u6LWryHJmzbs4UNwvKLwHQ6vMkku4U8fFP8ujBdEJEe5uAzEjSWmJnDDo9VBVjXcf2ggs3LJBU1ZcCCHNmGMdsh",
  "key3": "4M3UoLBYfHKMfpBSkr2sDL2w3KTv8R9HkjsavswdoX4mU7Rc91GZPjddquUSNNFtYr32AhRdfXTepUh8oTwotbwP",
  "key4": "4etqhtNe9uhKfvQvXa4YHqysA1B96WQU3Dopgha1u6PZmM4156fvdQhZveH65xw3pKyMBabk5R95B1SuzqJCGk8a",
  "key5": "3Hn7bMXWmdUb46oGT5jLA1VkwBLD4Rt4PsKphpyoB4Zz164LttskJ6w8jz4hsKydDZHatP9XHGPhYd4Fo7eEXqkq",
  "key6": "4nTHWFNtSrDhfjGqa3EVKLzpsZM7vwW9JZmEzsnwNjujUPaBjveMjjDgfk6v3uAr9CCrrGZJMA6SVPBCNaLGGMGj",
  "key7": "3YNrsyxQhb4QmUU4Wx3LY9sYi1mwLgMXTaNsCjV6QGqHRf6qTXSkZW9dZCfWDnfLkJd89UV9jVE5tHozStbKqdJi",
  "key8": "4PbNaavDMCoQtBT77AuZae3jve687i1TesUgoCzwYaRAk8hfkKUUXtzwrLDLoHBiyEp3i25tCZZZXXiYbWW63nQy",
  "key9": "2qEgDSDvrYeAS6pvt27AVgE6e8ZSu2UiLS21C7dPxteV6xVvSSCbNQS1UD3n4HnJ5wx8a86AntmDLQrtrnkErs98",
  "key10": "36mv5rjEjvwapYa7LEW5NRe9tWrZSdwDypny26UuJrmYAy86gtNbxXv2i1CoQ2cGAEBDPLukdpu8GqWFP2tGUjQ3",
  "key11": "2bJjW6yCSajty51komtUGzqEc2cHxqsYtoUJZHPuucQnNVMJKEyN4uuAKm5kxg9cfqrEuNYbsADtKSxPTEiG7uvZ",
  "key12": "4LKKp81zfhDGRC9aDd4LZ1ZhH2uSWd6dPoWtThFjn7oZ7DHgbt7SxE2Yrf7Jnkh6YmVLWHdumN5gGYhELjps8ttA",
  "key13": "3ztUiAQk8jBVPqVubytfWbnTXw64GJCXH5Xec6ZhHiYdB5TvDFCMWzUJKfzP6HNif3CjYsegubtvY5o2btVkpuB5",
  "key14": "4m24cSd45r7BGUB5xdbgxpAwJxjGUVW6fViUSJ8CFZAS3vSZU3nYgwLsgmXpWoZ9HZRnhpnm6Gd8YPRJx7zSbt6c",
  "key15": "4LWUJ2P5HK5naGgoEQT1tAoPpR9kUQP8ycq1BKuxp22V3F7AL6Z3az96VL6vgLLrjrPjriuA2tgpfYqcH3rhn7Go",
  "key16": "2Rjw1VdHyQB55CHX19xwbhmqyFXx1AjqFV3DNSAGHW7FASciGWZ2BqyymxU912irjWrhTUzR4LzL9PoVfSi7FHg9",
  "key17": "7Bsqp12kScS5LwQEymqhR1u3RrxEYmBqTT6mSYoRDFv5sk78EaLoU28Wjp1X5YFedp8Ck3Dh9fXrQxaS255WfNs",
  "key18": "51D1nFrtUeLtiz6M8XUBPw5wJYtKnmv36W62f8jJQUA2ABZXnxgX4KGeNsVVoLueAicwyp2ReXWxPt4X9A5BJMeP",
  "key19": "3fuyr5yxuGcCd1B1uv8MJXizq4hPe9RWZLQbGjwpwsRM72a7VCkU726DTHSuBdDmQmbejXHYU2YghcUVQzXSpvJD",
  "key20": "2exfEpDdAYooqk2HCksrqBMgGTLxUSQWB1DqCPmbjtypmGyDq8DY57BkWyB28atpVizk5T21V2Y7rbcn18pBACZx",
  "key21": "2E2Pp2bPZuUwZpGQPmngN6eke4sWJkem66AnytcfqENXofzz1uauxtgX4UFstH6QPizqig74itrgM7HRZzG71fPT",
  "key22": "5AZmShDYsWKe99NC5LJXD2aA7XmDu5tF3Zx4y4DBD9MYFWdLBpwf7SANgNYeFA5fbnY7sgCjbgD2XNBiW6uDCa88",
  "key23": "LdCQWhnqphUMaLsdooRxgY76zJhh1mWvQq9mrYodaiq3qQjQABEA7kBiQEBNJQF15A9nd8j7gnk3pebziq3SsCe",
  "key24": "38q4LzUPg8M2cgvMdpo9Xw8LHHNiw3aye9jWSNqseKrYdB9RBvMfknQHMjBgSnTPTHagyGTEY9yRqqKVctx5V3AE",
  "key25": "22BB2ExR7NzJMJ2Mprj2vb9nx9vU4CtZvwV8KVSYGW7ayLH9f22tUeT5dzA8FEdPJEspwPBAassG3JC4Jb8nmJAY",
  "key26": "2xG6GAwqU7qJV2QHQ76XumXncyjZG5ogpmrwR33c5HmsjTWeLz4xUgeS8EQf9rmAN9JySPiiTcmhrRWWAXdqGy9z",
  "key27": "tcTUhtX1ffvrjiYsSBbo16mvaQGW2Zti6U1KWVUMGLkHiPjQajWhPraa8SYQJPzZHYXSAnUKWrGKFXViGu8VzzZ",
  "key28": "RJXr8z7nUTSGxbMRp8qoAjAD9EdufXWMrsddxEGU4CBBprdPV4g8ZPBjwvTqFJFSuXyEax8kJwvxP7B7sCxSB13"
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
