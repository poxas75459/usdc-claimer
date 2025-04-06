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
    "3DchoVxroXfGSZhQFnjpZpSXRWDZfPY5smWRn7rwwf4vCG7sfr7opApFFeuYk8AxASiEULGkoSuKf7eQd2TBpcs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7DFGeZ7kgzW49huK9oMQe1STBU1AqfqbgkvshYBD6WA9GArfqDZ8HWFBqARPWzUZN9wjhWshVRARuDm25nahWw",
  "key1": "5fCaihfE8fFTCUFrayEHGz7gW6Xt69CAiYKAKbGV9UzpWTzmTEVwKgMkfiuq6BKUkqdL4oX5VYqVwQLagWRBqZhr",
  "key2": "WLYU33BhbBLjfmmTpPvaXgMrKMRVvo4H9WTqCZLu38cvbnq5LHuBd6JRujDtjPjNtkb8E3h8Pmg8SmfzbEtCQvf",
  "key3": "3VTEasNp3CJZaG1H4LTVD79g5UDf6sqACjRpeo51rX9uWteveRoJ4Rr1AAUzut6H1BwBkVQPzayT3dYirG5F4wry",
  "key4": "3iMQ2n4kZbJ61rmnyK1Yn6o2bALxH7U4afpWdrJhUy36QCJPKNtW5DHMs3Ak2qB4EibdiEE1qy3bYE4NdqE1LsHR",
  "key5": "3vEMjdoFJLaahsY6Kyg7cVygMAmTDob14QCsbxYMLBFmKwKZHdn9RxAH5e5NqyMGR1NuoqkXRHxu4VzjTqZaTEQc",
  "key6": "2xDd6xUz25gRvgDwwAnEerXbHBkQ9J4zxAdUUnLwvnELaLQ4641NDmSrfmARQHDzmouiZyWbmvUSR59Wg1XW1NcL",
  "key7": "57uiCpJXXFiFP1DS9j1AfqAhRoQkEFumwpXzbWLXsKg95kRk3vDgbdqa6BExigKgBTKYVC8AKRhyW8Vgkaa6SZmo",
  "key8": "4owCE8uqxHXhhy3DpQbv5koX7vkfwAXGj4WNwHFbB6jMRkjjKpvbkKmWqxxzA9EYRxRfjzmkusLVNWF2MhdPsQcu",
  "key9": "3QG9GX7YTFQxVapdHKAg1y2W7h6wAkq15A11ZkuzPPMZck4mvHW7mg8FvZTEdEGX1Si9euriMcdkg6skUrAfH6hk",
  "key10": "4VWzJh5EwTc2iSRHVLhGD3gSLdRBUZsYy7rvsGUKsGrGWVuMw5ufjQ3Yoci5zhM2yp41edBB994qnrJWCdZ28G5A",
  "key11": "2ak4bxk5Gmr7U8EbnJZs558kvWLhYZM3kC91JzU3MXNm7MiEqHcYWfn8Qz87Trge4b3pDKrp43Upzu1dGXvktaGg",
  "key12": "3jQCyTZFFsV9EoGn68C6aFABw4Fi6jqF3eaYceCHgAPTMyR8XMWWYD3iiLCS7bcjd5KUrq8ftAPBmf9T6qcdTS6t",
  "key13": "4oKXTJC4cfiSwpaSGTCt72gizH6rUmHrQJTAmoVkQg8YcWb1qwxLnHLubE6g3d71uY7zHvgYZCxtZUFazeYETRh9",
  "key14": "FQN2UcL3czLBRQAvUa6RYdVpwgU1t9sKsRVDhZ9e7NPyhc6oNjkRw5GGAYzwFFC8twnnjZbxVMJUywDqdi7Z4BA",
  "key15": "2K32BSaZHtjevzxrX57ikn8Zt9ohSw5uDYhZAZi5CSa4jtwsUKT3nRbg2RfTjhWSanWJtUniVtE9z63ywAtxA5DK",
  "key16": "5amReUoFGECBQsygvUb5uZ8PysZNBLVAEkBiLrEoaEhKzqCJ7nWLWQEQNUJZhiYuEK8xDusLBXnD3G5HeYBCCTAZ",
  "key17": "2PkfqytCBXmDhCMPYG99Rpr12pVW5sV86v7d6HnzkeL4tcAh3UY6iEGPgmV2gd6JfN7BpvPgYEoMPN9yGixtcNvT",
  "key18": "vYHVwj6sUFf6Eerh9GmhRoW7FQDnWPPHctZgVvSrTgw6J5FNB9Xj4zEqh7DnfLWftwaNjoY59SELBikMyFFDrYC",
  "key19": "4NB6h6zMHnTFAw5o8eYsbtAfhF1AjbYZjAdC618ms2DdQShWTYJKT6wcazwSXnYND3nY78CRAfDuWgWFbPg4wwbq",
  "key20": "PanAKqCqVf81KP2Emvz8sGipqey74TXvRPFJkLAGjbFo3Zb4WshAah67zAUwTS819ztbQCdf9z727rsj1Qrni87",
  "key21": "vFwQAv6GAU3J6yB7AKwHRp2aBVoEK74vqyvqdCTiyHptEtCUcCVhw8VGLPgMvM4qUVuj9DezNh3eqJZMq9DUr9C",
  "key22": "5XiDMz4xRgANfwmYFKyg8ktQKB5eYFc5CsDzQwHLtMuhxEsp7yczqv6CLiDoi6tKT3Tuh3Zzxiwmk74MS3qp56dP",
  "key23": "5hjn9ApLP4JrhYsE1ch4emdpjLv9VofF3ni9b6tNoqKgmbdhRXnheFArtWGnAvhML2F2vYsatC1VWqxMFqfmV5oD",
  "key24": "4XKJYaT2veu88N8Wqo36BJw2mpB1JfYqaPf5sZ62AXbzATfJTqN2NRh5M4xJWktdHBoasKkpAazUpxqosnN7QDGK",
  "key25": "XazmRuHrp5Y7rxzuQmJYogckSVKN8RV8QmUki8taZ4ZFzxu2pBLWQAZuC38qrH8Vce7c8xa4PmxXvaPr2Cbi6Qy",
  "key26": "3QCz2HygnQSG75tLkjjpXiL14AS3yjdvXdJey9H49zXoZpNSyYxDWvwu2jyZ6aucv7qqkjAubFfw25EmV6SYtGhc",
  "key27": "29C8LbUAhr7n2adnzz3YGoyFFrbaLJcyWd4qdgnpcaMeAcnVZ5ZvYq6YN93SdNJFB3AekkCiSM4e8J94LYdGsCLQ",
  "key28": "EWvmjcZCmdWDrb5RAHFiSFn5po7BSyvxEpWR3uXYTXjgP3QfspmXrvdNaAZQ6NghkRgLY984RqtBphwuQikgPzD",
  "key29": "4Ng9b8s2c2aSMvLNmFFs9eZbrGCFvgqFp3H7TuexrdNc5yfutzHF3BRzX1N3iydk9NqZ8Hzad8ncKX5bE3GWhLn7",
  "key30": "2FMxtDdHutbjsuXkXgLZ3ZoSTdNvVuzmo5jZcbtpxQHsQBHSPGpUn3UBVTPDdqnrPHy7NjemraWfxuf4bZ8xnqmE",
  "key31": "5eY21kbn8dNsnuXdd3cLGfwFAFxk8qgZxeqiWUiRs3xzdDqcwan1cP5BkP2b6E5GpsnGW1Y9VBC2G2ruadk8zSHF",
  "key32": "e2y5h3YvMjRFaP9ca7ZZruZJWPru1n4kgNEvwaf1sv3QswSRi5tdhH3QSCSarhe6y1e7C5kBfee7cSUH9hWdQ94",
  "key33": "2gL8SmNfRwrBKUV9HBsxRoCTzQ4AKGNPgRXHJVZgrSEdFk9aDZTry5WeLbmDTWshuDzkYivb5BdvArJZekp78xNk",
  "key34": "5BPFaHbzR8uqnxS1nSFkrNGC9EHZZenMTymB9Mdgy9HrjPLvdnCNwZtwN6Pc3rEwEaZBGmxa73DooQUESLiYwCem",
  "key35": "4MtJBpooWke52xfLzxqtxBpWCfx5tkDCozgB4SsuGFSkPb3yxyGFpZCkahkcG66odCeLiKu1VZcTX3zbF1GtfXgP",
  "key36": "22H8yDmS3oCAca64hQit9QcJgwgK6exnGbsxd762bCW157pefsxxjtRi67qDMJt6YZeejdGQukvhWyaD42St8p4q",
  "key37": "TiEjUQ7id2hczLgvYms9v5z3kaz8tcGVaQWyaDfHozkov8UvTvRXBywj3bYW9mkAL1nPjaZimAUUYSxjipLxFxx",
  "key38": "2vCswyXKgYyvcG7YqMwCVpAfAGaHV6ckNToCQtzGc8SDzu9mm7cQrNegUXNgQLaWopogdWECK3AipgnLDXjZ3bJN",
  "key39": "2w3kxKJb1yCnK7DbvwnFSMYrsPfn2drRFrhoocyCbQ1Ue2K1mzSNUWrvj1s2ajsX4sB6JgXzYhGACnUKfvFVgc2n",
  "key40": "3dQc54WAdurLwtXhKXyCWfj5vJP2EeQi5N9FW89Vsjz2KXuFxvJXLpNYkNE7tpNGDTYJRVDe4zYKSBzyw64fUEFL",
  "key41": "61MkNokfzgkugmrkdGEJWfbXofTMCqAaY1UFexB8rT9KHvQnUBX7gm3AsDzd4P7xZSWV1Cwhbk8vWkCgbi6aiYz",
  "key42": "4WwZ2azRPgMCUkNdVhgtMHcXkHDkMZ4rtJ1HMvxpLcUXrufzRbpHdDCc68CPyV1jjdsMLLdG6AoqqW5EJkmXwZE6",
  "key43": "2qx36Wu2ZBjnF28Uk898QyGX6mz3rY4khJ1nN6RWbVtUeQSZJA2fSPGbZYZ6QD2BsCmCxYNExsM8vxWUAcoEQpBG"
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
