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
    "5VbTkDTJJG9Ue1qMexzXid5dHuPZX8obP7dg6tyAskqA5zSDxag2guSfZkofAsvFmLkGLgALGKmihTkAvWVkrzwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMkBXrjJEF1wuaDVj4x1MxGScCpD3xJGsepooayLEDXGea7U7HvwS5nBAQyg4GXtmvHfPsozHRX5BfpadBdnrgP",
  "key1": "3doyzaLSuMSftTpyXSc15DXRmUEDVFZb6nwBXJKLXr5a1LSQMKfMjMXD9VzWRtLjBEQaafoSTXDB4GWWN3yPmnV6",
  "key2": "57hvMGkCJDcvhFidFSsVCPL2kni6UtF8zJxJK3YavezieQqt6SFME6eS2c4yevdenGS8Hh4gFJZPhGFXwUqpMDXa",
  "key3": "5BA2oXd8fvUwR1xkZ9YfcEMsP3JpnP5ZH1ZnMiXhUJW2RFuC7QCG6ZsnczYMe3AJTWz1e9nHz1GifHguiJAVp1pZ",
  "key4": "5CYpYqhT94f8P5g9sugTt6VbEkY58dH97SSix1AiJcmcdPn6DvoRQgW3VFhJMSVnP6UrxHuArwcujZ6iwERqJkfS",
  "key5": "2p17m1RqufGpVAmQD67YHE52D64oeETta1viL7TWTqx2pXMTgcnTMgNk15EKTdEoL6Rp59nRYP6Rqotm5uvAJXfr",
  "key6": "2tn5rv4rP9DkZhKYXQpnYTdEbCfdy37T2S8TGMqHS7hx4iM5RzwMHyrfu3WE7GTdG2jzi9Ym6jSbzf3zzB7w8Si",
  "key7": "239Bs4ZAVRsMohUbvKKbEJGFW4tB3U4XcLurfdJG5vWRpKaeZajHRseNDQUcosfa2rD2Mb78SXZgPXtYYAGJV1M5",
  "key8": "NfSBgMf2xrW2b4GsQZoGg4WcsqG4iPPQg6oFTykKYHPAcpyHp1uHmTLzRLs99NkArvRrvhngUhx4LTLd7bRApnx",
  "key9": "2WunaD78B6F42PQDHxQK2Dbr1v79PPf7qmZoNiA85kTPTC265bm7Eqyjx7evPKos6rGzK8sg1JE9AqH76wMh3pWP",
  "key10": "5LJEMitzVF9HXJFyXHXGwPfYKqu7EZZnpToZbw885KVtftHUxFTQceWzErsggexgByKyGvC6cuXxnuqegvJEE417",
  "key11": "43Hr4BekozmQJq4Ysnm1UfSV7nVN1Rif8MQJqND6dNy5fiWdoNr6bVVn27ocSyGJ2HG3YCiKsr3kPc6zUNvXEoqR",
  "key12": "2mcCUQbfdvkpTsM28FQSYe712kXRdLSCLMHowTH1tG2xViBnvT6E5DsY3TSscZxS5SoBh3Kr9RCFrX78aRDku78v",
  "key13": "5wuE5BzKzK39PF4ibtYZB9AHKzCdmYD52jc18q66v7VWuGegnhuC7xYUaVL7nX9SK1aBPTtPD2PCSHKoYG51s2Rh",
  "key14": "katLDBYpQkEXRpgTD4VkudAJHpgimoFdJY3SHbsEZAXE5vtN39R5QJRp7F9xYyxZNFgETV2KtwjvXQ1MV7ZKWCk",
  "key15": "5ojoo3rYrokWfp1JSjuvbQUA4oKiwyMyBu15soZHKASvAsE8zKCX8H1pTmHGHZoxF8duCreemVCUz9DSVrpJMGw",
  "key16": "5mvRqfC3yauh66rSsX6WJXHqdtu8j9A6tzQJJN4wafaqM7Bnd1VV6HhDTf562xZ44tCTirF4oGPQi3Yu1QNG2gnP",
  "key17": "3X119yERphCYLyHXbvj6y95m5UCJLjwyiN8LZcySqUV6evYBeciwgfNFQfFQ6qsRAE1DSqqESpcZQG2yCZU99vQ7",
  "key18": "3XhR27GmpMKdy6rhTvfzpAHBfdKQCoyMKJE9LMjaeeriZ6Ywjtw7QdAJkKG5eSFTfAJdVwTqhKBJpDrkoHdkB3mT",
  "key19": "5VX3tkihiLmo6YfMd6p5xBm3aeEG6NbrtUTL942U4ysw3SSeBHBki3ngoijCv3bRijcjHgohKtMhUnqdg66aajWZ",
  "key20": "3rw933twqb6YdDnrzM2XebnLqgcPeEvipwF136BeLjcAuz7jiTPz1AfwNLfWW1Qr52LZntqprKgsxAL3iKuvSkH7",
  "key21": "478uYoy84T6tiSQ6fru68cnYg6twqpzeFzHDX4tWZ8zGdRVA6Fhtsph4LXeapKumsGY7CVeKDXtRdYTReEnnGhHw",
  "key22": "4Z8VyDBRZHyd2qmTLwXqwHmz6uyGQ1UCZsJ8DhEUu4ACMwvjDVBPGHSmhqwvNNxqG2kHZYLDFVB9ye4cqopgGBwd",
  "key23": "2Br8YjhVG2KNVRufGhK8U1326zXueaDu1kc8F9gXjSZbsJcZdEGiJVrvC9CvZ46kiBAQ3J1Cp22Y5JntnrNfJ5WX",
  "key24": "52bm1ER2jRvjFnJUgQWyvkA9oqEEnhFNUcFACxxnQHPKuSHJ7LZ2ZmRDpeNhbt44m1XgeUcQNACZ7gyrnFGgg8qh",
  "key25": "UgsatK2SvzE9YBg78ENEvw8Dr3HkLRHnSxPSuEFi3hQLCmQDTefPLq8eQreJXyZXYqHr7JNW452c5dV6rukZocd",
  "key26": "5ZY7pJHer9qHiHj8msTzSTwc2EWW3UEKwMh6EqujvEAQ9RLT5pXu3KRgwcj7BsAb3KSa2MJkaiGcSX44fNB2G77d",
  "key27": "2U2W1Vaov4H6EAuFh1tCig4SxTTJLw8XGNoQ6DZwEyEMC3sMn4LXe9xpGaedeLuLwvKaEyRbeCmZtqpxASipxoe5",
  "key28": "4PeZ99GXeToRDEX6ZLcAgu1oZVLPqNhVmTefaV6rTkv74qGWxaYEg8yUFQPZDZoBygc4gZCNcfqMaL24V7oQtKbE",
  "key29": "4HeY4EyNQbhEhmjtuNAFHTCXQYtBBNsM21aoMn868Cc15ErQq7DGu4pNqdRJPdCjX9WGFnkG3AW5zMz1Tc48fEif",
  "key30": "5zeSx4UJRLHHu7fj5aWHWbHwCdFvjye8oF3n4mNFChP93y6TBcaKGoXKoYaK1Am5pGAbG9G944ASzMs2XkFp7jMm",
  "key31": "4ZeEVmTuVzK4VSFLRafPMJsqmWyJ2GkQy3g2FURjnvK8J15YPAEVTQHnUaVBdVNx7X3m1JCFR9UfvGa3hBbpwghH",
  "key32": "5WotrfHhNDmGSfW9LzZ5SBCyJg2DRhzkdaF6ubwVsDsKwefUyMqZfmbvSDxHrpCcbSPevRydm18U98ct38FjGumC",
  "key33": "46ZKyrHPiKJu8ZXMh526LJWayyn74yUryiD4MesvUUTqxjMg2yFPAwezakafQUSEt8HM51U1sej2Wwjam7FNqc6w",
  "key34": "4st668ahkCindeJR5PTpZinTF68W88dfKLwYDdHZ8RzauJSqKJFkgQTM3inyVFcJrQbhE7kaY4mrQ3QQqZHfKn6i",
  "key35": "4t7NAW29f3aUqR6cX9zK4u6xMUqVvLqD3AzgY3znNte3JFdrtr8RaLE3oPB8i1SKp9q7F1unWcUwFc68XZ9QtzdZ",
  "key36": "4Zy2WXAHA1wit5dN2VuCDZrUBWdAEoVbGAMBj2BmsnLkZNgrAuCxHPat8YSYWKqxm1jVc2w1c7oDusJeqXY4aJnQ",
  "key37": "BH1CLVmnAxChCV5NB2wxmVNUymeqwNWEwuaStYDbQ4PaUj2whw6p9k6WQ2hw5qCeWMQGDqnuZwXNtz5r2Tsnms3",
  "key38": "2gGhBaB2mnLYbbQMiZieztyzgdft1TZ25YtzhEhLhBsnSLn7hJe4F3FMTiBG2Kd5rJX3ew5KqWqWVn9tWC9vW3LU",
  "key39": "2vFRRxiqyLuCWn2jbB9j2Ton9aHe59DiRUHb9PFkazrQX7dLwHFDBMJKcEkCV1XzcDKXWCFXfw8ST5GFaJ3dExY4",
  "key40": "2GyMbneVkjWzNPsUfgCUiCS2AEwn62L42qGqTJ7ggwbtpZNMtUQ47Ph3AQRHipHrEwyePKyhPLmxVDv2RRF6oLdj",
  "key41": "McnmFjA44WHLy2fkqLVkT4PxphvkUnKbJZGcFs7hMDZJgB26tUkuFs3LQ5HKzdShzJRHiVHgCdCKZfKBKj5h8a6",
  "key42": "KvBTvX2fyAdirVg379FLH2LtPWhm557c1MMHJASiwmvnd8rCJo4ASGtxyKuFtJjjEvyNeZdZYGppm3bcf3NXAQP",
  "key43": "2WLwCEej4njPJ1JPyM9dGHJPbivsozk83cjcTdkGuXAGUGT7BpYqJLRFZFm6YVbfxizKuwWai6Qi5o5MoNxkUber",
  "key44": "4zQnnebqFVwUPvAPmaY4cQuLJDjTCsDcFLj3qzEbbyTDnSDwFJQBjBgWJC54zW8bcG84aXNQk4Sh3o8J5TjHvyMA",
  "key45": "jE5c7MHcDvBRcKKQrBQMUcctBBo5NchpXkd5t8k3hDqTLpo8ffggureF2yjJYtikEuPPu2siefPRXPtd54xdgTQ",
  "key46": "3xgtvcxG8D1XyhRMM8McupfkfvzoQMykAJREjDky8wMVTdFPAmbtP3W7WkCChidk9JL2zg2NwddBuBfTMGh73JwS"
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
