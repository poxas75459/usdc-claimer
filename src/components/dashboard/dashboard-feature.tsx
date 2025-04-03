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
    "4aS9qaRHJXJUpgu13tuFLd6PwWw3jekynCfLBPAwfrXiQvbeT9cvUdQSR7o5DrJc9nDqSaz1JAGYmXksuCi9FoZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hw3DCr3WczGq11rnk8mUuJ1XRmr5AdWWcMELKeE5qGRLXmQoWbV4GzafwgMA6hG9otfsP17TkSwt14jL3JsC2P7",
  "key1": "4MLzq88b38K7RyFqdbK9qvJfMpC2FooetawRXAJdtc1Nwk5uM5Y6pVpQWmEFsqU13d68NAMLsQAJjSxekizdu9k9",
  "key2": "5FZn8MkGhZHokDMCHSHp6Qcy72ebDM4TSwNAjK6gTg4VshmahjreXui5w555JABNtyEkyNXfDE6XCeUHHud2a7k5",
  "key3": "Uun3E3R7KTGZEtrCEHjeZnHmMBLx4beyjSrzB1vSsqroyBvvs7kK9Xy65aiEv4DTE7SnckbKfSBMnGoGWzhhVvk",
  "key4": "3rHr8U6aoAdauELkt3gcg8kN8F4EH7BDBPrsXW955bT8vjfvXFvNYTYAMfFuU45bxwPveMSEsL7FSdGBqcsG2BmC",
  "key5": "ySAydhZYhxLuEBAnvQFdf4TvbxvMWLMZDXT3WeDFEp1zjXTGAuEXRt1upsgd5BGbYXxk3G31389k15UVHfcFaXM",
  "key6": "492ApW8vJGg3hUgqad79X5tmAxNK5aJ56o4kJm64piD1u9KcoxVJmHLCcpeG7ci62qSor5vQbpzhNgHsGLYDD2Hz",
  "key7": "3B3r1V1GGw9ABaNEwzcCiDxoNQdMmHNat9wp5Ln5p26F9FfcULYkr2hnu5bnGjoV1HshFhTcG1iJtmm4mCdWmhR1",
  "key8": "3LB5XXudtjzsxcvSknKdL1x2GkY2Dr51vMEXDYRLpVhPJZ84KwiW2ev2Cinp6EpZruabpR5HzX9AZMAeY3gpD8Mf",
  "key9": "3fhHcfwarVCgZp69G3FfaajTPiX1uVpCHMwfegpfarnLoawXRH8iCPSoemTPaew6WwkfTqQgjwW5ockJxGwFGBEi",
  "key10": "3hsXxRDxQPsmsVzrh9diibGX9e7GhcmN6Cowovz2ovjsHnmWARTL65kotr1uXN1W6VFgiBm7cRbv57kD1SzGUjmb",
  "key11": "4MH4gyo8vDtRR75Cu3Suh12fLb3fdu3yfeVqDMDJ1tRkYgdzdEQsVvmzTwGZnYj6uHFwYSmUFRWburokxTjBDZ56",
  "key12": "4SqGtQfnX8TBeytcYuK3zbvcLXTyXcxBX3hye7PfjGifV2sCDiEdtptYqFoMifby8Er7pbFmqoVwxnJJDHyNLycG",
  "key13": "2qt4vje4ET8SBRz6jeYe6383by1zjuUj4sq6XiAFnkeKXA5CfWzZx8m44ioZGWASvQsj5yWufsCgJNmNsB8KHcNZ",
  "key14": "2hxzBFnNr34S2pyBWTrnajtF5EfNYuzxXjbLxEdk5P2P2sHtjNkHr367BAtAtHT88HMijGGg2q25WUicy23cyfJX",
  "key15": "4RMjT42QSHnLoyf9AhWMws1FgQBqT4ePdWpvAdWTXYFrDAymviHA7SLEd318wrvtsJWYirpUYriZzj2DNbT4nNff",
  "key16": "5U3d9yKD7Yyj2u27EztS9rwbPptYN4mjMKNpdqLkYwQPPxZwTnQhY9ygpF6Aob8tv7deEYyeUoicxLCb4Row3LCP",
  "key17": "3qPrp1DDTgGLABZvqY3ApWbxxF51qU8i23pzJZJ5UHa4Zy7VimbsqEfxyjWCvXXbVoMAvDLp1cfz6kHUtff1DfFb",
  "key18": "5rmn94cijdo9viwAzrLMcVgdom2cKY1WvzScFrVrYpGoTp8GddW4iB7qLzrU1KTqGxkMaFJgXTBh8RURDpdL8g1F",
  "key19": "2Hi2Fw9Mypa6mTCQD5gdDapcNVsJQ7rgQWXuH9azEtvyVoEbNaohLusFVe7rsvguKZ1QAjtXfGMsars2c1hcXHTb",
  "key20": "4Cb4rCfn4g4nvcKFohfRxioKGQWNBDknFVxxfM1CPZ1voXQWm9EmKE86J5he8kyY1gPz51Fux9KfXr7uBhWHEZMw",
  "key21": "3Lu28ZBbTUM5mhZuWTjMsnYqQaq1wDtZiKm3qHh5fRXwBbSELTeCY6SephY1UwLgqaHFKyNwwy1ziKBTfnB5wyxo",
  "key22": "3FfxYeGwoqLLPr3MUvtarmX3fkcpEKbJajrxupRMFTuRCbu5TJQiy172UkieLY4w5xfWDovdDRYLPiQ1TYg1UFcn",
  "key23": "CuKS4Yjg86tsdJrmjpbXxS3ozDpqkyFJ6sqotFxtUJ4bbce3A24u3GYe9nPeFxmLwhqxbnMPrxtJTF9oEkrajoX",
  "key24": "5UU73TvDPL9QzudUVEBdJQDH3aaZysmooRwqcsmAvfnQJRvYg5pVeYupG1WVShzfZipz2VxsUH2bn1pC6JcEhycp",
  "key25": "bi39nXhM9cDJXjEpt8kWMWUpjmivyEopRWSxq3if1epvgRBAdjtF6zwaw2ceN4XEBPWeaB1Sqfj2CbnpQwS8uxD",
  "key26": "5cbBqCQMLHiX16rLY7fYoev58Pc4pC3cwm6DQ2aSqn7N5D9app66qqy1xccVbxPbqYMPS8EMHy9MmxktuZV21gWc",
  "key27": "5Nt3kdG8zUHJFJMURUec6Q6Hav8832Nzh1fhQxiVJZXMfZiBmHgweyxwJGnpaNxEbEdKfAkgNkNUKjCdyWLbnoGB",
  "key28": "4dYRP56PXHSL3nsiddic94oBu5BsV2yt1UY87y9NF2tSVdyvSo9GjGcpEz4c5MHJiwpYJPYu8pDKnocfMxLoERV6",
  "key29": "3MDSyob1DWE8QowUoz83hG8RqHnZcmAbh7K4uKDJzAs1fTUXZuQJTvXPad3RT9Eij6iRrbtJoMXKZgGGp4MapP6W",
  "key30": "8ThfR4UedaEj89otwcUy4sAfnW1hxW1YwwhY4Fzu5SrjJbL5RiAmoWk32ThpAekdqwpBUqDiskh7LtZUTz6KvSc",
  "key31": "5G3oJEBQFzrUbHbPhHHshmvy8hrFPKQk8hwucJ7xAtzd6qhntMDWtkewpSpQc68VmTXnReeZG98Vuiof9PPTKgd9",
  "key32": "1m62D8LqJyADUo8h22tkZhTdh2arScvJ5F6uMMyG4HfjLMotHYEqvgjT4tZdKAr1r3cx5b9Wf7cuXbUHuCeHiSz",
  "key33": "2PJDYyJEtcKz6UEDNJs8cjYfGPZJRRdqaoEDZZEpGxJhwbeLVqw9ZPFbunKXdsyGKj2GumXpiVd4N8SdEesxUTv5",
  "key34": "3KBNg4BEzNJkYt8K8sTHbKNWX8DH7nocHY6znzDAqGCwVn3JsycfEW1FreNdb3YXPLhs7kvGehnSjp6eMy6ej5Wv",
  "key35": "5hEtzwoGBCc7T8p32qo5p3RX2zYc9uEPHMxctEEogfYktxxGgLWjcvQ3REKno7xrwfM6bMgKpp3N1WVUfJr87Zx3",
  "key36": "5QB9ksbZFUge572QeMda7YoFCB4KQ1h98L4uaykWnzdoe11nm27FaNz4PwF1jdePxgi1EwR5xTP9qMK2KyA8nVYu",
  "key37": "3JoW14wWcPh3S9xrzYStYSrwFyCXA1vSnED6qjcGiiMauyxtEHLzcsvsmr1WnD5pMfTysRWXvPP5uPNUmgDpMhRT",
  "key38": "618TnH5Vtn1PsvYRH4tY6fJVEQYwFs7Q2VDtRXHYgC2ZKfZxwUih85E1VvsCbfjzZA584M6ufWvn1Ud2QSg6ZKDs",
  "key39": "NBcXoTk7B3PG5yAfsxNQVeq4Fb2urKNDEkrkXJysNeqZQBnXAbVytiXcrHAsoV7U17ggGLi8aTCNj7nnBJycj7g",
  "key40": "4BmUKyccQm2X6UVeBGZ6XivZesCwM9JYiMD9eBLmkCpr6jTDgdbmkWZNFUwjksibgWFz5nbXhzqVjarpZMwWGo9Q",
  "key41": "2RyWjPJE7Lh7qSGkZeMXadLqMSdU163xD5KVmpVbQ76BWZ1YiUS3CyF5x9PYa6sNJgykrUyJMRCp3asHim89i4vG",
  "key42": "bJrR1KnVp2Hk1G6z5UpBRHBBv1TVFnxV9wZ6nu7xrfSQQnBn9Fgu4C3hvcxqzAVngbN2KPSf4gsBQsuGoVwJM9a",
  "key43": "3A6ZZvk27pwhiBWHBSbRi2ixJ1sg8eJxReBpHMRMYJCMQoacPwWJPR5968CG49uAFQtsXLHhZeWqtRhfVEF1CfE3",
  "key44": "3UVzUi5nGaKhANd4xH3jgPB27vbM8onKHkT8edVNgPjervLGjZaNo3b6L2TY5f2xTFxKiBWTbud9S6uYeJdRiRBZ",
  "key45": "2LrQFnFkfcrT8C4vZE8S7ZMFRXU7JW9pDLwCVAJQ7LYhDoX49DhU5NKeVJrDvvs6mMoGe9p2KPhQa9HMKWnmJto",
  "key46": "4g5ZgnobZPtTw1pVWoNQWzDnGGzqRdp57TvZe1ZbT53LNhrCo1iwzXK9q4gBSaNUWN939xDRa19BsgzeXFxxXiy5",
  "key47": "YsuNwF2LVH7htdqZwLhri96cqnJkFq8cLjp5XBAy3qDfLo46RuYPSc9f7tE9c36f6HWdtyJPBSHdXmziKjmWqEG",
  "key48": "2rCcStbM4MdvywaRi89Rmt7wxYxELswDgxgdst6DSqzt4Qbo8En9HGBCqz6QrgPeoBpLVtCjTxdaYYMD9YpD98yo",
  "key49": "5yE2ZSrjngTUeu3Bmrpohgh1FcxgS7sGrLNiSAMbVDiz8PVGvhBvj6ByZP7WHoJ6Q3VnG5eTcMyHZK2u28gK27Ze"
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
