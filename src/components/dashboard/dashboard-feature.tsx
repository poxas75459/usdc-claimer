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
    "5gTjWdNYHovRppM2pmrncGVtZdB2d5VZFqCjs6D56p63RJj3m6Ugxb5K8RUU1S632ZogshxsK6aLDTbzxCdX3ykb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uM9dKsmQjsNrceLDFCvb8RMx68UjQKYt37SzLe49AkncuUAw5Ko7JRbGuhnuw339v2X7qtKtPw98Dzm6rVaLXef",
  "key1": "3YQD6fDy94ETr7GtV2CME65bEk7ZtvifBMMAvLzKxtMeJoHPL6HLLvs86bQcqvrh4wafF9zo5apeCrTqiCZjDrgk",
  "key2": "3BuFbWHgZSX6mmDsFHYABWtzg5ZTogctHoU2rC9ipJqtjUDb344bYN6RwhZwQqKiWZjYHxe7REfDdXd5GUABtS85",
  "key3": "2iNSFrErmpAiTWgvkkyzVdHDeGxpWQfYcTpKQtk5eQnotoqgmr2HiAjf35p8ZwPdVV4RyGtHNMMjfEHupzi8zRxt",
  "key4": "4mjSgbT48a8FDZUcHVcLkxFLrehoRR7jMoNnZ3isjzMHxmszz3xBta8KvnnqqqfzviTRiVA96vBiM3gwD4kzJwkU",
  "key5": "rfkztqSWgmBDdiyAcWT29XSxLARb6DhGQhwAhagdyo5G5xAcXgVdrQa6bZTupFb9PjKg2QBcT5VtGWvwBGEd4MX",
  "key6": "3XbxXnq8g4D1HwouvAuHDg9og6R13iWichooZyrjTyUuv8cNkBNeJKbqC95WgqtXhRuVukjRLHukZehfqziufSse",
  "key7": "5Qo6e7xDsDz7p3v2DeYy24yC56vEXNCKVKFEpoiChrSWLjTgRHnv2FxkrVq5mxiqTGYM3nC1dMrqekPCT3AMnzzf",
  "key8": "3fqMQhdRtpiuSgBj7xpGKEMxwqijK6m8QK4zGr3dBKk6ssLWaBxXtnw6LbnhLNg3EpYgzfTj4Nm2vAo9ALYubTWf",
  "key9": "2VZEd9ecDYQEVy9UDfH9etyd8M1GmURuKkem2tvfB47v5AbXTkmWQUdxQcE5jLQZ4H8FoRyqVim7PCJWAUDEgLrX",
  "key10": "5mTnMywwY5SXiFi9A1YFGustXkh8D5tv1MeZnFQe4Rck4CUqHbm2QuS7ryqMemqVY3NLrqk3GFSka6cStv8pjBda",
  "key11": "LRrN5sG8YCsyukxbTLuNLMdp87Lny2Ep25QoPoVbddwqH7MMKH5bsWMqnPMqRwp7hqXsmxCXCYbk7DU71w5MUD3",
  "key12": "Ay5thzkLVn4Sifr1KDhTHCzXnVWekCD5K4qQoRWaxUrWvY8tGiuDvxf9bYfC2Q7qqcc32jYnoDmag3inydTiWP5",
  "key13": "2PXGmaKDWz2gro1k4EFfnYAtNjYt8yCakrDqQ87hQ15eWAMbSMA6xMs3FKAxUCRThWYWaVBacpbwEvrxHMETfdh3",
  "key14": "on4owMPzkf1MWhmPbVkq32xZ69aBEWThtzA9Wr64FgYsZ8TwZSJBZgh7tk7r4crqLyqSrik8u5Nqxh7dZ5STVag",
  "key15": "XyNka1UQDbSf64nNZdcy3iTYpPDJjZ6bhVxNpjdV8XHRQyrSNCXmLnRPmwxLdjvXKYG4md9xyaQ4HhM8fZkpKrB",
  "key16": "3pM1rfYWgnznjE8jsDLEJPiZksBiFchgR8ZTKogxPrhVGmCkHJeNMgKW7DhgpgVakSwA7GJD3RP9fA3FhrrkEcDJ",
  "key17": "4HJNGdY81UD8j21CrjwFiwDRjnCdRRMT8uxFoyJFbhHmT1ZwpRAnoZDfbHSrwDFEEsAooiVvPVW4NHia6EBhCr8y",
  "key18": "466qPgpQqZstBWuoYkj7a4yFHfX1W4hK67ZC67zCgjsiMFFzJhv6Kr1QRCc7A8Sace9LsTNDaYk5JEywtPu1oHBE",
  "key19": "28A5iKQnQPWcx889wg7FvLPgmScudE9tWR25aiUBoEevXmhQPUfbUxX5qkRci88AmWMuKRDFoo5hg1SFYv49x5YN",
  "key20": "3kWmqeniA1Fw4AgKo9MGQwj7hddo668chPLcQXkwGRdHJiteW1kFxzRJmtGeW65r3rkEp1pY2vube4QqWrdvuMEp",
  "key21": "5Dg3YpoGmrPjm7NpLnBwcgompxRtfG8EBTGCzKTqJWo2F8PMsuv5HeNxgiwbPAwodyEZ4LZiJa1XRVCT6BXBP54a",
  "key22": "n2b8KYs2v49fdsuaZLu3j5A6p5WXmvm4Nvg8kmpNJprCADgwdegG8SuczsaWBjvXFQzUDkuaiWGhPAAodVfqh31",
  "key23": "hZxMmgDWcYazpotsXtwCVokXXvUodU8Grr8Fr8edQHKeNT6Ayzv6iKCwFDm84bcPuX71HMvH8NCfTStCrBAgCcb",
  "key24": "5tuN3tQQbputekrifZJJpyJ4xY2y1kNhcKCnku2ms9s2nnyckW53BoW8bfLbB4qCqDHQYuFRD92C7K1GQ5ehkmpG",
  "key25": "2mY69Yukm3PWVjhsrpWoKVP2jNW3CmC3CNE9eVykMzxNEWtYAiqt5vgx4zqQ2EH6BXwPyiqDWEhKx37iz7VJpFmZ",
  "key26": "5tCDnA7nncWc4JmRDB3dcX2bN2jT8zzMT1pD6MSRdFdqpGhF7nczn2EtJQ1otJkx8oQ2Ka5E5P5wZqcjVHVHZgCC",
  "key27": "3x2KxEsDxdsLHz9JAUmj9qCVUZv2LNras5geUtPoNvhEe5jxPMyopabsYRLERDAZGUxP4dDpgBDS9RaxxBrm5NzR",
  "key28": "4PfpUe8tE4mtj8Gkj2QZyjzBxwkzk4F2bUNRt5gnQyhDjbn6oiPsSm8Ey5mWx6gbWBWRyzRcKpk7bymTa2Xe4MPE",
  "key29": "PjnbiDVahgVgsfDHmUTEr9Bfv239EVjz5AFbLHrQiVjAA5Lv8YjbucSGiHXs4P18ZNyBC9DtdBAAa2E94YW4STR",
  "key30": "XuPmnHbSzpeFqXuEhLYAVTJyGZ6upP8iRUeNKxNxb6FzRWhbQwsew6jFysNwMif8o9EB36BdEdTYQds9ztzVAai",
  "key31": "2RTiaXePaY56hG8GpGS1LrHxmD6CULn4bk1oGmhtCsgBLDFttRbwCzenLZVWSvquQ2vi4pMuotbzF24vaZhZoJup",
  "key32": "5nvcz5oBuqFjfRn5iznR9ncsNEVfw2hDeMHLJYkgg7azohAfyhRh8rTiPYtEriqZ2VzVK4QwcPrZfdA6STsQBoSe",
  "key33": "3HKSK53G3DckePf2jcm833emRcSdESb6HumeiLLC1py5sHdzC6TvZGuzwNS9oZkKiUieUuMq7tg77NCNZpAMFRdb",
  "key34": "33GfeqmM6vCNdYAmamaVA5VA8dAcqhNzHdwFTnzxN3vFFors4wcoUaUmKDLueGNoneotakUEJEHwyQr1FzE8R3Hx",
  "key35": "5qzcMAiUgCTzgQ9DARwY83st5aRizTLBwWW9Vnxm7v7pfLtdFBwJsyUxnJL2cW7N3x8H1sf1dRJisoLhC5eyRXKr"
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
