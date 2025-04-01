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
    "3q4rdPbp8wuYRZpG4cqRpaPR1auR9vTeQWnwcAWncCj4yzPfo8gSfTvP6KQpDmoYdCKzvDiGgmM2969CqCt5gGCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65F4chGASM2KJymbsVTo5uLmvWDYrWvAM5uPkxqP5kUi1CPKGcp9a2r1aZ3YWqgSRmUBsrSmE8UUMtqPgz3U47eM",
  "key1": "4muDMRVyhigSomGn1y6r4EcfYHAZDe63vFT2vtfatfGEz99a6ZN3XJXoMSEsQeudQXr7mtCwpqTsR71AujVk7x11",
  "key2": "4UzdXkCx1PtJXTKVN1y6pHBQxqS5WuTm5Aj2NKMmNMQqW9FkV2uf1avdHRZrrpTjJ4fLH2tbvCD4F2azk76qxc7L",
  "key3": "5yZFK3WE7sN7SNXvGpRemezRcH4bZp7NitGtVP1QMBfDzhTM3JgSwBcg9t5UHSNfvNcZExfzVoUbNv1LjqFtu9H7",
  "key4": "4aYPsf2LvGZU4aZwaCafT9HLxS4cxUMjAUnqPfsTBYxFbongmLfirEZkvvhXaWL3a8PLWFSJkjSaH4KEuFwg9rHG",
  "key5": "2BSRw22yBLtLjacJvPVM4aZqyGzJVDn724Q7fFpASfPyWxPzQLemms23otjKsYPG7Uu8QaJVu3CKdrK9ci84o9hH",
  "key6": "aa7gP26L997fjvqh9pyp3ZQhWn7Pz6Wz13t3BxuNERhuD4qUi7kTUxtqTdkMUaE59DwdcrHYDiFmGcY2s6qBpvh",
  "key7": "2aQmzTcJVwjPzPKiyCkXF88QVEMouoCUWAPwzrMUpjeye7q6CAKNF8nyiQ8moME33wGTf65qYDjZdcAqsjKv6xeN",
  "key8": "475UnKsihgXYAss2XvabKtpgTxd1z2ajFbwxa4PYrWtYM1zwvNyF6WD2HmCSREFe8RrWZHqnrzgadncNDTvwSHmE",
  "key9": "zuYPZVG599TYSmqLRtPhBKM9VVChyyG4dsh2p414tRTyc9rCrfmTXVBzL9fW4RH2saehavqtL6dz8CemQzFUxt7",
  "key10": "5dHPM5WDbxdkxG5zoMBL8PUwPuqCuHZtG5QmmTrWjfoKo3S55htja9uF3d5JPi7YYj2KYh5RuJwSQzM7tef996SU",
  "key11": "4dQZru7u8UY1a3gB5EYfbDAc3kuEPEZTNHZEGbjQ6589y4suFjGMua8iKs2akRtKJQ3WGV3c9CYwktmpUgHPgsVR",
  "key12": "33o9EfAQ6XxvnDyCsZb6TGv4t6ueaHBZis9uuhGosVsukAv8HWyHbWuMHULqfAtutxQuXBSWhnqcyruw7ycFywcB",
  "key13": "4V3rsXBLjmjgqY2tJkkpcNvYMR1ToW6MSukvwLuJKkmF3dUSoeQsJvDb9AFE2F5VDqC1gz6z11rok8CutfUFoLxC",
  "key14": "65n4z8yTbHmK6uruMZDQ3iBt7Uz3hx56qrzLeqExZJYut1QsWrt7vKHQGwjabxecc2L2TarK75iBL4r7365Tr433",
  "key15": "3ePoyw5M2GRyNsUnTyBAbHesTVyxSLkhy41CzLd9Ltnwo6QPv1x45HtDbRc7xSCLW8Cdq5AXTzGxUWphJcLtsgPs",
  "key16": "3ehX7axTc8XZha2bB5AoQtpsWGGihLWAe79yDDrYNrmdWknDBq3gRsTegTvQLDdMcPHQjCCEXtVV2bfeKvRiSj4b",
  "key17": "3r4P2rjLcYfBJxYCAWydE5E9BiUvUkhkTM8dsBtv99uN5tUBdLTes8PT27wChRTC2xgFDpXGYd5ymjZF5K7DUTEs",
  "key18": "4Re9csqhKUp5iujWdymKufCeigGVr3Zn8G7iXtqePFwf4vZoZPdYF5MCpd8HT7LAaTPByYMwmBhcMEFEFJLgoiNY",
  "key19": "5CLeMEzvqFgkQLvAsQzsHavZEKLBJyQxCQKYdx1ZcpEgfSzfxg8qjddutAenR2RiZf1CtpiJc8DYvQvyWC3Fy9mW",
  "key20": "4v5zjRk7pmFxyDXBB9Q16qAEi8mXAmR8ziFQ4qJht7qpJPs777sLKdxyQqDwo5teuf543iL29XAxyujfP9XCRVey",
  "key21": "4zpJAoo5XAW8WLfr8BQgrNGoCZSsiVBHFqwvNQFMpSntHrWMFrJpYCgSFq7VbxRUEsEWHrtP3NznUyJbtJeALxuu",
  "key22": "2TN2NKEWaffDwoawuQvFuEWHEwXBKk8urJkpSJtmVawrNKDuHkD32ACAy1i9dWbcV1ZRrDS5pQ4FKdtokCyuBSku",
  "key23": "28xyd1Z1mJ6BGqzZ758AuKXGbAPaHdRJ1W8jW2ZimEf2LK7jpsyrzeuykTkbmTvvJGzrBcQGenc7J4xVJkht3qbs",
  "key24": "5WEVsWCzyzpLzL6pJ9TRHQm1XBnDy6z1pq38JXcGaZ5pMe8Qn9BKR34q7jHQDhfYKWbfykUPi2pVFZirc65zFqwu",
  "key25": "2qGpCEh9tgHUSGVSQTY3SCKetWQ28whEPVNgqQ4hXwSEZ4APd9CCEtu4TxE8hmSUtfcGaDcteqNmzDtr2TRiUzCv",
  "key26": "5s84g6bJik9eYhWd1ZaiP7E4uVvb1vQXpwBaLnzNFd4ZmfRMPyphv5ZJ896X6qENdKFHbTJrWP7fFW9mtXeYJizD",
  "key27": "4fcQL2efDcSYNBeYKwB24k1rtCRV6VPBhy3euaDkUt9s2wE1suSzvcnvyVmSxDm4C9K8JHKhDe1Anf3WUtvBWBTN",
  "key28": "2Too8TLp7FHEW6iqzQPBTEqAhHqxvjLYYhLJv6FUPnwUpXuqmaDPc9tLLpgFNyZ7ABt6LbW3RnZdn8jDg6KMWd6W",
  "key29": "59Q5n4PEzLiXmANTykMdfo4NjoaTHEhrzDZSkPT9hvvrQEsk22TT9g6TUjyBi5mKZiYmF9RxS9PDAukX5RcUt46T",
  "key30": "2bChx9oMhKbGQqYLD1bFWgM7mt4tVU8bk9X7sxMj9As6xLWQoWotTSsCK97riDeXEcCM7jcPZcz6PK2arv6RHRwB",
  "key31": "445yNNFyMqC9VQzrNe2h1f5G569PMB6GbbxcXTTGxyHF9pXcRZiytezTafkb9XgXnSKdyjz4GgssjxoSoJB4nzmH",
  "key32": "HfSn1sV4nRW4DZoW66eymeGCv9dEqAZi1WPEV768WzXs9dbgnodChFvs2GKcKPcFT89BmMBY4VX86EET2RiQEVy",
  "key33": "25Q5pp5mzoqVJoSuD2n2BWnS37uf1KckY4jNJXtdCxDjuFQ2ujUmPtKE39F2KRzsPPhGZpcEaBjuTq31zGdk2wpA",
  "key34": "MtxKJa7mhRmcZaAfNGaWf2Ca63JmpX3LnGHGS8uE4eAV2Dw4SDnw4YVLq89AYTSvPTcoZNmekGV5mV4mgpP1HfL",
  "key35": "4YmGyvF97phYYgz9XwGTqXdu1dgL4ov5RD1xPVcgboYGA8nz7dTkftSCCEsNh9o59m8Jsneg33BZJ1xQ4vj64wW3",
  "key36": "32ksiL2Y85TzSSSSWs78TjdzMkfkXPLdP8nz1qceEKD9othdQjg3NmzrvYqm2sfFRu3itHRe4iKXj6KHBzJUFQJw",
  "key37": "21wKKTtwYErn8W6oPFghRacVJpPRWFsonaFkocxT8ZzPJpcJgLbGEUbGVU9rvxLuWT2mmzJqQyTr5pGPKmVjGsqb"
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
