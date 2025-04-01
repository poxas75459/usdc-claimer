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
    "42yihxHC1c1GLQ84LNyncs7xkXTc4JcYniQqf9pvXS5rCuxq93peCqEPB587e8pWzr79Y1Q1caZvHV8VQJEVQjey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWk4qHbgUxv91JJJYoBB2Mqw7Zt6zYqtEaVy6h4zzQEBccn35FfPt82h2g33kJsG3X6G2abczMfgxhdGh6tY3rL",
  "key1": "5QbLPXLhBkVPYf2ErMWJVkwcGQ97Vd8NcSm4DYBHDMq5b1EVfRfTbD9rgHtevdnWPxG7JhxxWykxEhbNZ1eRvHNj",
  "key2": "395pkSKHK2XVNeZvbpm2aAnT2hW7MW6yDS9aa7VqxwGoT5FQyd1zALjPkCzgfMoRFNUbwLFvPVYXNUST7iHd2vrq",
  "key3": "2oUzRwhwrNsh9Hpid2UW4sw5QBYt2zLZhU8SP6wGjegd3j4Ruh6VzKrbfhJKEUBp38GKMXYmBJ78KgEWMCxw32Yw",
  "key4": "5AoEaiCzAQdy4ZFvkH7TEUviEKMHBsGp1XXmEmA2oiruxE2PHZNSieV1KkNGPstnuB2ChpHtRzphH8GS8yP47h4r",
  "key5": "4tQbaQjPWBnfVEwguGkWF3x3ZzgzAi4vCcP3xnXGDeUUK4rqSuHEWAJNLdt4oXJxeXv1fBdSmBWzRCtwjhpHNZim",
  "key6": "2Jdbue8wexPtVkVXKgsew3eA4S8o3sNuHN9tdhgoVnFVRLCvFWyfWrKhaeXUiWgSUTubKzbyEffYYF5EH6Go1vv1",
  "key7": "597W7CCoA8oYyE8BYjPfycq752m7S5JDY9a6fcuAEfbjsCNT2MdLKXNZ5uYcYcNUMRPECV91r7naXSawtbYYVB9R",
  "key8": "rP3SbPjBrC9gshUTcJ5qZYJgvoxQEjewc8j556HWvhcdtTguFCTyn4CmkoZDdhgvcud3GG8w5v5VmgtLbvehSXp",
  "key9": "285QXGVQnBDUjWvXUyQW3pYhApCc26VoUUnQhvH24QNMSBX1xJDByBH7GxATjaaymNBSPCNuRRjtt6hm2zeRMqSc",
  "key10": "4efz5d9nQa6tA9WyMZwqLJECfiz3sWbXVUynJSzEw2cBaiCjq9equbTrCYFjmJWzbqKLdws35TmpkanoezTP1YEH",
  "key11": "JSp4eqxA6dZJSCzmwj1oemPc8thSzkY8C8aLGX39tsRTkKzB826NaBHXc8Dw1rr2QXQPC14eUR6agSK9ZYufjFw",
  "key12": "2F7QSThojv4GtqCpqQmRKoaCDUU2Zd7jpoXhk1kPKfuKL8ihRVZFv3kyyAprMP6kSFH3fUUQzFA7GtbBoPrt1pth",
  "key13": "3uL4NfwZTu261AiYKwkUvM5AbKxGjuNYehRDRhP9GW5wbedHeJQTZqneJCpjX6T8Qmq1KvSN7DBcpCq5dF72h9cm",
  "key14": "3XABxcxbr8bM9iS7PUR9G2GY3Kw63sP4YMMvFfKGNVjZpPHmZCJBggHMVu4TMLNC3vf6mwtasS4P3E8ZKW7VZwDu",
  "key15": "4vmy8g1jSVF5amAPrS8mH4SfMMJL918RQR4Q7Kc99HgYscxq11hz1YzkGiojEY8UpUBzw7cpuaUKTfgQyrKQPstP",
  "key16": "4zCcGp5moU8TL9qhFVCXTQ1tVT93u1Rpb2MmwjY5wShrQaLfk9DH51HgaFdavWMFQc8HThUmsCjFaYvef4n2FbDd",
  "key17": "4JdQ1S79r7pmbUXgYYxvHr99Fuk7Wc5G7a9Zo235H4AQjqEmLtPybSXLTiundrLPyV2CwigtYHSUxMRNFXi3Rcga",
  "key18": "5fCghpQdXmwco4tfXqyuwnBaHdydFfmnEvUPGGi2rTRh8DNS77ZUJZNFXMisiT9kM8C2Wc4Lku28rcBP2kEiZnjL",
  "key19": "hLgrq2j7uuHCpG8zeZUcmtTyuFccBPG8WxRAwtNp73AtEQE2wiX1V9YhrwjQ2Cv8E9qm9NqBsYA485xrssAykRJ",
  "key20": "ut8tEK6E2ndnwnWaBfrJ6BUbuvykA6pPoRcobH7dZyNKoyN8AY2LfjBzwmwc2JWgiAfAxXj2nUdYapDqvi23MCo",
  "key21": "21LsjW1wsvsFezJUukd4snoLTPNcxn1DPTB8KJJgpaCFuF7w6xYxN3tJ5qFAqN65Jw4KZzDe4VfFXGzRbmwsRPvP",
  "key22": "51YucnvfhvXKH544p2h2UnLY4ydqhqDgBnBWHoRKXdGERyum4pBkjPF5ed6oW63HJwnJbRc4vyydG9UhvpmVwFHo",
  "key23": "4rNCvijtXwPN7p3i1hSEdaFGw5Qxs8KXvcmMc6Pqqqbhib36SNrzUms6MGkHSUieQqhh8KZ5Crw96RoMvp1Rew7P",
  "key24": "2qiznEKXd2meaaeEPBbppwjLscud3kFeZsYnRaERSn3o27tB6ByjEpfS2PwYA4ZgxmkUpn8wiAAdyGpCaVuB6XGm",
  "key25": "588cQeLNKjNa7X8WT1P1XsUDAQaeSCyxdYdrNNTCQE2MUhk2GWQ1tVjsF6diuS3gRUdnmiZXNiQK1RGEAMBscaXt",
  "key26": "5WQidYBYLjVZLHG3FDohDM6ufsjCVE12iqSHTPTHcQfQ5JryBFKktAbQrujn7bMmTrGkBvMJkAPyG5S4ni5ZKDvd",
  "key27": "36ADRLTs5acUzr97WvLe9eXR5Bejtc4ktYYZjnjiDJV8zQDk7mHQgcCykWGgDuKyZj3GHitPdp6svP6iRdnsSP49",
  "key28": "5rQjSiZmJcVkPcuuHrvEa7vkFU3CXMLcW4GGiSvPt3afp4NFXRXJFwUqtwsCe426po2TdBmeK4dc8Rhe47uHVKsd",
  "key29": "5YhctNPby38AQTRWuXoVqZMeXMiLqGdg8kuLkrUnVzzE6ZjtLVJfvVYrd3FyCkQBnT5KRxHDFHeZ5t5bSUTBW4ZJ",
  "key30": "3pTsyR6PPy9K5oQvaG82CrrAUqEUWHwPZLbf8gBfDuFSgdprpTWvfUpvny4n9BV5YpuTyy2tjW8AMTfi8QjCobS2",
  "key31": "5EPHmZ1MDMB3Fhsbx3RWKEVVe7h6tJLJsTF7sgyc9zqUKmmPT95Gr8pXeBBiaAT8cojupSdockuzgMPXx2sm9ksG",
  "key32": "4DmDyToa8EZ2RaqsEumYahhGnT8xbrjh3rx2VMVTDf4HkBv7Seb8SZMmPdDDkDRY6q5HB3nr5h4mBGHVKjsNxZea",
  "key33": "37CcvNRjwXRkfQJ1N3Y5q9N6ee9yH7kSWq4fSwdS5bkPUprMeMuujjwZSNWVAc4Uf8urk5XXX8Mmbv8mPkCJtEwc",
  "key34": "39vC7E5BbtVinv8LaFHNxjXdvqkUEt5oqhbWYkpyYpDjX6JX4pxY5Zct6hnxDkQrUL3Jo8nEFxhyUW8YWeAWTMfD",
  "key35": "2V8vD6XDLMAK1a5AG26ZUTUAMv8Nmz1RvjgK6CMFnSAq9BquGZURAPAccZiGuR4sHZsnqhYJzif92dpM9HXerAM6",
  "key36": "54qjuwig3QL8izT67L6V7YdwZCkC3mxrcCVmf1KKWrSf6hjkk46GRMYRzSoYya4oQB71Yz7SzeqMRa8XEszR6Atd",
  "key37": "2K7SYVGZCCUY4x1D4wLnB1nMkKvbfGChUrPfG3NYeqq9CJXDaykpg5cNyeWkiAWKvMN3CmuvG6dhCfKimue6CUiM"
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
