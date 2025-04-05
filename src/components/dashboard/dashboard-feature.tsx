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
    "UyVGDRFFjk4mos9mb4KbbmScFFx9h8ptvmskxrUBpYwYuNhAzD2t1AUP66Z7ZpR56ietsV3KA9GX15V6Zyh7V9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W5GBdgHhQUTCSDqaNdeMJoQXBM5g5NCdU4dTWEut4tw1B2RVnwWzj9JuvdwYZmLHmLjvtrwg6GrMRqHnQiDMVoB",
  "key1": "2Hxvht6ujK4jJuAkeKRXT7YAuLD1ZVDjgJXrvC6ZK8Mh3HyFT3aoUFbEejdW2Zt33afXHoo7nmLMM7g9ngVFhDUS",
  "key2": "2wAC5PnkNGCiL7pARy7pHMKX9zCt2a9D89htTy4Uxj1wUeeyCcdBFJcyhrs3hMwoEhSQd6Ss23komf8mFV4o4uyu",
  "key3": "5U2pmJu8F6tkCsApxNWinoPmkNrK1VV3LrfazdiypfEorFjc9774nLCr7f9FESk9WLUANTMrGo8RMMzrEPwfc3a9",
  "key4": "2WnFDvFFAbMQ9eNkFuwW6xZ6BFwHRmdUoknZZG2Y2gBBneAfEUBRoASneaRjyXTN8n2f22FXuZfSFn7K2fnjtTdD",
  "key5": "3TNpKt318p3t6Czug7finbx3ksz7aq4szDtfAsdMCpV1DVsyCxDumeEmpQApbmt5CTjjTicJqi76kKfu365iK4nQ",
  "key6": "4zFP9VM92q8u8nLv3uvXMp6Zbg1fN1toHzborWZx7q5MRAziaDxox9thBkjjGV2NiTAQw9SMT3S2Kq1GDFLfqijw",
  "key7": "3GDXANHisuN4kDXezePPcAj7bqVsuunQTgEZkoygTGjZ4yjM9Kui8SdiAHZ1S2xUQ5C9bdJEAkfjvRhxFVVbtDaR",
  "key8": "5ytDmYF68eLdM8DEerbayaRdkw2BqyYZihQ69f3E2ugXsBDNP8bPDDZUbeyhuPkYcd4Sgwo5idzqMHY2sygR8hVZ",
  "key9": "5JRUNWACN39grAbwyD54yiVURpWtMTbDHJwpGA5iC1d2VCjqdZfPU2u7aD7ZwuB2THcmdE85TjytU5DubMFcDQLG",
  "key10": "5oYjB2YUkhy35AwkGYYmN35Y6LkdDaD1YRgxuEFeVmU4awqjGHRmL9hyTCE3tNSTJ5ZDsE5Dh9NoKZ8CBr4BWcH1",
  "key11": "hWfVpZm5XcSPCWhFDfzn8WuZz9rU6SkAKWMVoPfJcoST3wcWH57R1HHVHMsSsSJ9dixuXiJzoBomwEjCtnXNurm",
  "key12": "5XAhEhPj4kGiAhR96vaSetcTstuH385DkXDcCf4f9XuCkCrviuWD2ykwNRand2tQDzRtpaxAfj6ewg5eoaGktgeM",
  "key13": "4GbgEq9FYG8YMActwKWDHGhVKaxeFbEtQg27zQ7dGiX88kR9WqkFVsjjcZBau6g4iShwhUH7apb7jduWT26Qpisa",
  "key14": "2z738QkZUrQsGhjRw6aweYDmXsvdMDfaGVf3kYUXRxQTGYnuETNMpntk1BdXGHtno4yJiUoqtR46bn4CqhLgX4JY",
  "key15": "51sogMYJ9NUgTns32GQ9M4SW9qPA9aw3QqzVM6jrCNmxxLSnNCFv6HQg9Yry4ATw7uEfdLwJ2sCdRQSvmzUcnpDv",
  "key16": "5Xnx7BAwjPmd8wA9YZoHvCrQMiKonyc2S9232osm38YoGYwrpeznevRzDpMupMfvxUbNPZmB516fpiQBNnZkm3t4",
  "key17": "4dXyxzCjx2N8yDbXnUE9brX6znQ8Jn7pfaNNMydk419h8VKsfxiNhzH9tA1DAGec6NTXyriBDeRs7GgVL86hhkFZ",
  "key18": "5koRbz9fGCCcuetXiqqYEcnjstc291Ag8Mun3Rtcy5eFj3sxKAn7ALucdV9KoqotCdxoveDWHcZ6dYkJYn6dDoAL",
  "key19": "4h33bZ5dnv5XfqEpPTJeZcVo6kL4ktyNvcNZLKhz8T5iZAVAR9QuQUYocHuCn6msSM7iGtJ9iTtnVKbW1hU4EYHt",
  "key20": "4xDPa7gJEdYM3r3Z9yAskjhVRupMa4NUQyXJeWzXcnpJK9Syu1xRu6z3rzkzsDDLxXp3f1nNdvSwhWPZDAE2b8Y6",
  "key21": "2ArHmS6yEffuq1TAmojTGufjZeAfNS5EYW8M39xmPeffsrKogBWsnBDyA35iQ1qrZi6ejoNAtdawGZcPRJDN7jF3",
  "key22": "4iapPmmk62pwuy3zhYTwhgjLRTx9JC2bcUUd7XdUA9Ay51JAoDqNnGh7MrM6MZbEYyHaswktUhAS4cHYDNwKjnRA",
  "key23": "EXVqR18kY8AYyJszFAJjAhcKi3kureatY9Uridy2B6XJejdxyPbiUYnMtxXMEeuUu5AUabW4skuCWkkerk5Z65F",
  "key24": "KuA1EQK2pqSXGtb3651o3BAyXCLHhLYMpA4vtKLwV8akZmAzQhmmeNAL7p7TH2ZgFz4jL5zjLcsFKRP8cuW7Xgw",
  "key25": "4GxFGQnorb34YyWmJaAyy7Rdei9qprnVMomNTejnEJaSQyAwR4h9CffG8BvFqrj4rKXobBTQPMEedawNGcq9brXR",
  "key26": "2YYCARGxaKWHPwn4C9L3XKPBMn746GJnptkDWqEyw8CoBQsVs6VX4fv9ciGe6F3N6iZUpAcEHhK3g9cBjYf3Jach",
  "key27": "4U4axPVtU3ABhivysgBjbZrXp9SeRa2VHeu6U3g5udPBDRUA5wfXWkE4XuwKCUuAZZZYQMwAhbxNDXtkn66SaBZA"
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
