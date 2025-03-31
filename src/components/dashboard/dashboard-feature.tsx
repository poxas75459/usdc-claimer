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
    "3Wa4AbcQNY5Fb2RS5SqY57F5nygW1qLh3GYpef8U9VzXnYomth8CJBu5Zww9Kx111NJfg7uYffS9wJWQLSHpgKea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aa9zSKwkh7DMzkPQbq5ByH5PorH4MwyHS9gYhvH4cBmUDXEoCVswqrxuj1EpfByaRCJvsx6j9MZQbHSZJyy4X5R",
  "key1": "5DBdRqc8maTiegYCTaFEvcFRoLBjEF7hcxPAxtT7o755NbkYdUw4Xr3j1Hn3LZDxsufnS6iGtAwS92zpcX9T8XZH",
  "key2": "2kiaGGRuBenSCE4cucC7kMJmsBgH6XG44Y5ddyS9o5pbwQgKnbQkJx36qi5FVgwhkVCbMdoinTsx8EXiTvUJZJ65",
  "key3": "5NhH75RgVcaNXsTkk9Qws2mJDto1e5Sxc6h7Zrq4oRbaTFavd89pxRaQsU49EALxm4LmbTTPCRVLtim1HNJwCwDP",
  "key4": "c1bjjC7QdsNx5zRxz8wcqm5gjT2gV4X8GammkMswZMNGPoc7PQGsFVfGU86SftPSYYg771dJbk6hx1YmP58dgmc",
  "key5": "3kvujG6a2EQ83D9aGXj1JtXZcDtYVvBzJ2z4akeHUs31TxA4un5XyipZa4ns5AHnKTDHmFCyTZDrXS96KbYfm1XX",
  "key6": "2Y1mpP6CjoFuBwcP3H34FjUnhMbD7jz2XMd31gj312GMk5hymQQ9turCeh3hiWGPJB6vfo5P4t5iWJHjEp3nQnQc",
  "key7": "NzHPHsx3Ak4MBazjbnxpEb7f1qBHcMsVj6SCfoeqtr2DSHcTsk7nEm2BBhi2bCLTxBqYCUAiwxHQWXj92HQJ6yz",
  "key8": "4RUjsEZoiV93seEMq4UV5rctrSsDTBPLmiNfmC5gkMhMcb8vCk4CyGU1T6fY29G2GuXnD6yzLQXDL2GcGeVmRVQ1",
  "key9": "4zEUnWs6PbichoDsWPF8n6skHW5mKbDGgMtT1BBX3U1GPM3ippZGEm7t4234ZBkKmogN2GLjcjRVbNDjWDXexS2J",
  "key10": "5UgLS8zbSWBcZ4AzadTBuK6iugmpaGunLW3EvmyKHhWGB7qctyMpHKwDESQ8TLS948PKwi1anKEmbadEwyTEKX6m",
  "key11": "32jSDSTCE4nyhpfNsseVtJeAnKExpZ8mQTxGdVxAxcb23qmiTNbZNbh3hbo4tNM89D6VeouX992G8i445Y8ra9oi",
  "key12": "63q2kEZbNjZDZPSPhZBBVX6RrNHWQk7YDce6p6CxaXtD4ufJ6fVgTJXqgrhvZPfkKakeN8BES9JZX2iPs25swU1o",
  "key13": "H8jHR6vQwNpygUiZYs33USQoPS39UKumnQiNWyBbA5hhQh5K9uALBXBvWqvpBVhZfjcmC2jMiVpkKZqgcEr4Nzb",
  "key14": "2W4pUVLobaWmuRgSmo9qY2ab9R7h7FFgfmJ7pJsxmmpSkVG6BfsvT1FVrRKP3uU6BgsC9STj3eXAdMf8c3sx8ssD",
  "key15": "4iwnR8kUnjtY8zNHDk4cNUtW9tJSBZwrEZmmJN3q3ApYEygo5qbsAAA92Hhuo3GuCtQkZ7dH7oST7M81fQdPZUQk",
  "key16": "2GbVD6DWq3LCMSCfBk4zLvTJgJ9tJCHRZ2KLN7PKdWkunMX3Y3NUkSUkiMreGjioMoDcwXWpu7drmB7d8mP5nuUY",
  "key17": "38E5XpX8eyxJnuhUZZR6GnkJ5fLdSQi7G4Eob4Bwwcqp7rHorguhVQzzhBj1kHDc8oqhi71LVdcUP7pcVHPBgbRq",
  "key18": "5PDnpBJepM46gEdGjZHSQFXyzGLxs3spySpjravYBomm15DnBMRuid3a3f5AzUX37cTV1kQFGpa5XNHFY4KD9EKK",
  "key19": "48BTfAfxhy8z8gu6jSWY37U6v2NgovX5JPHnDMQ3gAvuykp5Epm6kX65ZExH6zeqRGf7cxWcbGddVuwXZfS9cp9s",
  "key20": "48om5YcHmv3bREyDAeQzch4SpHXn8errabYWgk5EBexqbubt9xezxRY4itBMsxB11WJHKsTqS9AUkfNrRUAqN9gW",
  "key21": "2Y7VJuGmWHvKsKUWSZVEdU9UpmHcMJAkTXaV5pJkitfR1MP5DtEwcyzZqsPsUfepQukPexFWY8g7Vi4jfg2bxr4z",
  "key22": "3GBScG4AuF6sEbF9DwkWEpLJnYaTECKPnY4nveA9dofZCGNFect6q24fTCqKyEhqwYE9qpW4Yz2RR35RMmypPXnU",
  "key23": "5rwqXF6NGitPSWwb4nW5eQnFseX2yHeekHVqu2oFSnRWRRdPeXqNNheJiqv7JoBS7RteVTTEXE5mcZwvnsxj6v6T",
  "key24": "4cAcrH3fYtyo1Hu8uwVdKR4PidKb6j2ygUQ1h63Twz6oviHnzsKi4Y1s93SYLgMsBBmHa1Xs1zYLcs5Eo2zEimqn",
  "key25": "f5pvcQPGzMihfjAtsSkmMUAigbGe2Mqrqts55TyahRq3knBVL9qWKYrN5vzdE4oeCFuZBoyLMeP3PXn4EbF6eVe",
  "key26": "5RMej2uwH4py9NKNVMPUWQzvfarJDJW4b9M9CX1PMGkGs4DJLJAbFArLmxnFPBX8K2sXn9zzQoeYA46DoZQkUjWc",
  "key27": "hmUCYgxaBgmxqSBiPmSF6Z3F9e2VhPnZEow3b3Q4pjS2Y4TVrvqdwjA5t2cjwCdXBEz6gR7bD2HmyRDPFSh1AWg",
  "key28": "31zs3WnjjJESv1rU7NN6xHmxKefejmjHqeFGa1oMXD9cwiDP9VN4BRSivQR25JtFtC82RR8XkBd9RkqCn7dwJxN8",
  "key29": "4eW47ZLjYzonHr7dx5Ky7rFnFZvKwCRfztx3Re1yXqUjyuSViAB3CWa2hxy7vTkJ79iy9UrVJEPG3RuqUgccNJk4",
  "key30": "53tmg6GdXL1UfayLmwbf3wTCe626Q8Qb3mHi4AywRU1Raj6sXbNAMpodJB96cGxkFyhxQFx4kQb4PSztQrFBRbvU",
  "key31": "2HRhngYdxTYYBCLGxTCUXiR81k3uy74Tua1nBn4WKodAq11Ja5d2MPWJQBRmKc7TbYxdRoj6CocBYoHmfKX1rqXA",
  "key32": "7t7cDXgNe9U5nvqnepZEvefUhBQHpZ1L6GVyiCKfFudrZQsE2KaHh2LXBdH9pZZJjX1H8ZM3P4wq1onvq3TCNhR",
  "key33": "2DKwqsUeETjeGSKcgZYeRboaKAotxBNYKXocAc2kJxh7JsbZGf1vhUPXReCGr93a6crDjNRM5g6vvrtU8bk8Nv9c",
  "key34": "5MZvg7ndYzwNccEHS5AmjP1XPMYAwkXSToZXQ6qMrMxma2twkDgaTvdQ2NFJsvGFPYitDEmCQwhmntuMKVCL2H45",
  "key35": "493GoADsDvUFSayARA8GtwJ7E3P41AXe1EG6y9oAx2AJ3vCh6RPcDAFNfWmCqNwYN6VX7UfaRSWkKXKjJgjff2ma",
  "key36": "4p1uDphSbdfzEpM3rdTgdwRf1UWhACnRGC4mpkRJVx34xZGN3psAVxxbYGRaW3Bugq7NU1vTpDwibD3JxhYqx3hG",
  "key37": "UPADb1Q2Rrq48SJsoB63f6ALNCekk1VtmHqPsY2rWYsNQjXDLRYwqGPQkru63YPPEKrYWdWdV5phz6koP8gsgux",
  "key38": "4kQh4RXBG7WhhLQi57eDoC5GbtDn8mV9knJMxmTpv1Grf5z8nLQPFzDZCfS5ea42GMTNmTpky6qYTFc45xhkwQrr"
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
