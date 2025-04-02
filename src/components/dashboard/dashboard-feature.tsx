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
    "2sY8zVV5UgmKHMxmK8CDfX97FS59Md85URbaj4Km6k6Rk1fCbJLxmPRM1vbTq62Qbwk96PoST22a3YVKgitAWjLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhGiutsjTmDp4ZR4ieWZ9e3DbFAX5CevnZGq4gP87e69sfZ98qwrH6KPDdMqf9evDvbAqNZP7YCicYTxaw9ASe7",
  "key1": "4GwBGkbruLGWdGzPpm4DNpYf8eQWtG3CMzqJmAaibFPeU4NBXzAxVcFgAsrcdTsNtwpTqdEyhQeTTqQsgbfP9qBj",
  "key2": "5bsLmwfCXGKpEnEZBVX1X6m727VN99sZVf91KMNZQY9hTmyRkPqeoLFGMVtGq12Pb8nGqEszEabNTLQprMdV6r8g",
  "key3": "2mJMdXxWdXBtGG2heh9bPZAumt2fLA81vJ9cb8jWcd9CPf7Qy5fzKzjKRujHPbwDwtGtJbnbsHRU3eiF3w9a5HJk",
  "key4": "21jQKSe55srYtLaDMF2FukqurQw6W8Q6dgRUxBtBYxxnp73Ko3c4WtcVytfzMgDaWpiCyJQ44WANY3pQZ8TZtCdK",
  "key5": "56BGMgGSM6MfpV9k1MPHoXzezgN5JgdrjB38fPYXpHgZenHz2U8SJcyfWmkYUQnnwvGYaSPCVgbFuaUeKvdDe7qq",
  "key6": "W21ZzhMTH6JjAdeEtuxRtGyVwjBKxJpHPo9xsW2YoQ533kFkLSeMZwGmTkwZu3iVynF6VcQKc7zK9JDxfCC7aY1",
  "key7": "28FoWvsG1y3zBF7tq3yVqjBB2Y4scXJ7YgSikoX3cvEKCszb1pXWyN9TDndzbStDGrsr8EamsNkdhkWUcrmNuhaL",
  "key8": "4jhQWEz1yJ3SzCGuKCuttnF4D1xBYSCBZDdAZaPmESPaNr6Xmjb2koMS9kmXFe5Zg8PTzNTfTNworrQsKi4ZzCBb",
  "key9": "2AAXTK7kWnAvfFxzkWCfKoFms1yJ9VW4ztLBiVGG2aF8zpKJfX23YdEmjmvL1J9mjFLYSDDF4qYzMfvSNrEjTgh1",
  "key10": "5QFPjJjRvn5aahexAfdnqipfGEbYVkoyStzqiNKbk6seM6ErkYb1uMnFW8Mr194XVjPb1EW3b23txCVgowLJnqME",
  "key11": "5KnmUzw3iSrtvA7cq96i2A1KgzvEMh5jeWRLVt7H9W97bBQJQNuqxU5nRLgrnGwknftMkh6k8YgqM4cPPtYGM13N",
  "key12": "4FfkrmjfqbZxjf1DR6Xm38baLmyBU3DmpnNpMMoakvvWcefnkoNskYhUXLJnpH6oqu63oik3Czdbx8mEfr9XjyYQ",
  "key13": "5BdfzAZZtgHrai2knAvsowBJfgsv5e3WgMx6foZfLXrdVTf91KzUK8PP9g36oMcGUBJSHeefhgjPXEya8LBPhaCD",
  "key14": "3nQSKG7PAp1hJ6VxC4uVNaaERWYs8DKDvTykJh9o1uzz4rBgYmjsXcCydAHc454i42NYkFpHu9nSgfcpQFY2mwzT",
  "key15": "3nmjAeZJZ17NBiVUfXrz35q9vafLpFkVzCr2svfHPAGsJFVL9wiAoD5rEP5B7YQCgwxnD5Ei6BQUbg7PdbmZgg24",
  "key16": "2tuq7kKje6UebMhriByUEdh6Rj6onuCf7fJ7xRSz7P7UgYZmrUZxhDnhqXC3r3fox365f5aT8YTtW6RqjPs95VBh",
  "key17": "3b54fJ4rSdK9DcDGd668gEcNH3tmqF1STZDxUgKbHKZ9p4LVHrWYfyLMQkFmedg9fcMDjAx4oe7gfQMhZde6BoaU",
  "key18": "2vQ6eUM1K8NXk1ofvnJtkULnrXDF2H8biutveZ93XhZmaTPXQZriUkoCzGAq8jLNPbsWFqj6c7jFDr2YBrxZ6Kj1",
  "key19": "4y7zo24yqoeWozaVxb1HuThtRpFqCezodSNYt4qYTZy5MahgCHTGvhigyeZ78YFNeMUrXYVYJNHmjubMhTmw1qCx",
  "key20": "4axrsapQBw4mPtCgXqNCt7sz9MKk7DMRtvChC58pftiRysFCh7beE39NuCYAHDmLTfPa8SsQwPM5cLpj5MsQv9Qg",
  "key21": "2sTddvhWWJ4oQaC9hcA5TUvvH6XzqxRRP8NLuzRKMb7sSiSRgCHwBQpNnPtkkL8go2wwTGYjhQU3HqgGPRhYdePj",
  "key22": "36EKDQNZ9vaWBJ1Nj6kmDZzTb3LP8tFZANcqrdk1NeyysP2NEXbutD896yhggpsNXo7e1Dqfv8DMFhALyTy77tao",
  "key23": "5yHDYWRi4N8S666SEygedKcc9mFWSE17w5TNFxrNNCBQdQ4z1TGskbF6Lg57xmmZnf6gYGzt8PAcbqK4fdciwhdL",
  "key24": "2p9m5RUCVtppvZwr5zNcQagB3z5Wh42fDzMzfLqYRr9WYxKeJ5WH6ajgEWVbtuJJLUsHbwMNp8QctppeG4aR1Z9i",
  "key25": "2HLEGFGs9Q25gxid8vUS4JbbYSF2fMFPJLwGcpjVf4CcdmLXBhPoBqJicciAWyGswrgdiXU4CvVW7rmnYhDvMi3y",
  "key26": "4baCDu6f45z4RXi35KWUmRdg1rbViSqX4X1RgSpNXVEUvFp8sX8jf1EbaPpQah9qbvBtKQD7rUy2XRZAmgUmaDEM",
  "key27": "3vsPHB1of5YrdpFkBW82fABx4LhH2BeFToad5d9rfamYV7aWSXdVDR96Ja5vk43K5MZtoswuDJCddZPF1zxMiPBu",
  "key28": "bnKEZ1bZnPYnK4hWrGVmvQVQZfmVjUPg5XQZEmeSbJAWXcEgJNCgBBXM5XoqctWi3VcWxFVvezHd9wksmuHE7gs",
  "key29": "3Q7nx8RoSYkP4vPAuHY4VPQwdy94CdDctYq4Q2ANVmqMHi1krdMAahsFhbgeyREHgr3tvg8AauJ12R921zVFvsJ3",
  "key30": "2P46YXUoPRLEPzAYNEs4PmnoWBVenrrsFf247hthbc4xwXKYRCLSyRoMA4YZ2NyYMEnJQrRjDiVrZsHzGgN5cPvS",
  "key31": "4eXL9Vfna7YtjgCzynuf9ivvRHPRLSxfDkmiHR1nmSKhaq9rxXYfNJdvNd2rqG37gfAmPbbCHWB49fBmexqvYGpn"
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
