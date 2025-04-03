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
    "3gFm1w4xr94B3zWxRd73kW7dAVk3VR2utb1wE4e5Yvuwp1J668Lrf2Z4vyfSoRew8jhktM63diTi4rRMfMo32QM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsAmeTgmiSKuC8BEnEAPDEuWhnRJDThZdwf8SrnZ6aLKw3d65ppFaUkpUJzVCjGQHrjqcNECU2AZS4TJphZj9F8",
  "key1": "4k6JmvqDRZAYzAUdAFERNEpQX6HXjw9ZsmxPH6gXXm3CNK8h8NxbEe9BNFMS8j1RziFzUjwmfqQ7NqPRWRqgEtq3",
  "key2": "5LspyLeyaWTZcA48Nq9PqfWT3JrLWK9x2JR4gJ2UsghAQa8yrryYM5qD4xwsDWyjgKx29U4gNMnNvZtRYiC6srG9",
  "key3": "EcZPsEESxncuJgA2wB5zbuUhUUWxPS1W5iqpjPiYLSqZeghXwFm5ANAy6NvR4NzL1TPACWoo54TKKEzocu97paG",
  "key4": "3E146J71HnFMjETouAkzRL8j8ibjWe4QedpW44vMCG83cQrfJwYuy4bc1HNX8W2Rh5Ec3ccw91fSaLppzT2annqP",
  "key5": "r2aeRLnv2Dvm57SJoHfAz8K9p9JyXe9CcVpx1SJz7RseH7UutqAgNDCW6hHiE1NjQ18nWSWoFWWP4yPSTniVefr",
  "key6": "5tbt9cphW6hCJBeMj4chePoj94tjkRzoCZctVa5wiQ73gvAehAkariyrd8NyJP5T8pVEBfFRqDd98ERxjzMkxPRz",
  "key7": "3G7U4gqY3FrMoaQLTJyPquYxpT6qUNKphXB7svFEK8AtCbrhpmtGpYfYnY4tVSKLFjTL8TCMP2CoZhtYyRqLywgV",
  "key8": "49o6Regobfv71GRJ4YQiFRUfjTPkVzYB1Ei8iEwTLbNV4mKVUJ2EVD2jJ5S6Kuv6pDNUTZP5k8t9oRfH6PcVDWdz",
  "key9": "64TAMaquVSN57NKGaWEcJcPicE1fKFhAtn7h4qMvh2oxCWUMG74y4SdSUV7WDdFfV3xaY4Nd2HmKrNdndcfLqcx5",
  "key10": "4QECWu3n1Nyznvq82G3pn8m1p87b1wkXjh7vKx4dPpGWt32V41Th77VzRwHYTpEeKfEn7RwU5Sh5wQ8BfsV4hkpS",
  "key11": "2mwjEUhGDCoFtX5DXNtWEtEaqCFWYn21QsGJXuwjzWah1RdNN6zs8hA826BaLrbLPVMhqAfpxnoNqP8nhmvvMWrD",
  "key12": "56HVAJSXtUMmyCcQxdw3QkfbRAfaJygjhj4Xr42ShkADBtXCL4kK22QUuLNbiBmzqNzEAJSn2HW9VUZYUx7eceH4",
  "key13": "4wYhXjFNN6XVjpM8piWAQMCUtX4PhW8KwiCvzjdyurMjvmaVhEqM1UshHLzSMLrtjkx4S8y7mQ7wYDgfgSVYwYUD",
  "key14": "2jWw4g68CqqUEEYWttKWFrKNfv1rbzzyw1SnrvJiuLjr6Ndy9kg7f3dGCdpyg7MsNGfD1fhTqNkukUeqyni1FXhP",
  "key15": "2yT87kUaP4ii1eeBqtTVKAC3qzFCi9jnkstbUnsVxkkRBf3eyK9y4yooGf24kqWUtQ6T15eiirRzVh5FD6zfEPfi",
  "key16": "5xam6qfFM3PXzXENuEEyZFCbBq4RQ95oBwfsmkG4HxbAawfBqoXCccVxkJcp5yNfPaXs8PV85SZGemh6eFaER8sB",
  "key17": "fUBQByh14vEAvBwtph9SfP4JdjRDcS4r24ur1RyfkCxJy1pFDABSUMZd3HNUEfuV8uRsn486z5aPwfE1Rg4bAhL",
  "key18": "2txuSQXyvvFd69WFsNSg5unL96ePuMdbCZZdvxtvb3PGw1i9fS9qJvzJYtuWj4Ukj6UAYDSYGGom6DrQ1BC8JXpR",
  "key19": "4aA8Mzo6e2QkCwQ4vYgSyM4YVtQc95N7iJZkMTgRMymmv4fwJiYhhMNZJCc8PxVQU9KvXqqGhXqrUJVrJcbz51iR",
  "key20": "MA57grkta1Rh52n3XNYr5r5KGAtLcEDvVS25DqpXS546z3wZshHSCYffsmYekNCywQupfpVvchExadREakvksex",
  "key21": "39svRsk1PWZMSmL4kQGBTSnW437sev63mHDRh1v2PcfJPV3w2KKD6a4VrFQHnUND946v8a7sQUXFuCpWMhLxcgWL",
  "key22": "5bXTxY9EktSeea9GXKDtuT3oTSfV9Y5U5oPk5y4iWpMN4shL8Gi51ZztukXSs5tr3xNa6oZWq4dEaFhya1K6gCxc",
  "key23": "26yFWEKaeb8QiY5cE2UKnBy1UTQbcfrSMkdGjBLRqxseoMuGgwctKNeobz4LML6BuqSJJXxumhv5MHjZBRU96gSk",
  "key24": "4HasMxK42p9Rfmi5xqvNBiEwfMTN6t3rzPUbjaaQTPp7o7vvyVartxyM8SRj5wcR5wpEpsmwqrhtjCV821AH1GzL",
  "key25": "2VC8g8Khi28sktp8EuTULAuqQQL6zgvhUzWb7Sg8sV7gMLQKciMe38LAUaSssp8D2RDmaZuRgkoNvvyFmTFzT9fi",
  "key26": "HzwDgGgGspyoDWLz8s5p9oV2r3chJx64BzHQGmfUpPkdT8F1SsdoEKSebXKN6KF9YtHb8SWFdRHcbgfLqJCNDMg",
  "key27": "MPznazpdNpf98ASNC728f4nFKw3nfh9fheu93kCPNpJGaSHzNg2e8mYJvMPQU3ARfwUhZ2hD5KHYdijLRHoygfH"
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
