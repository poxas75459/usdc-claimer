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
    "3BL1f3qyhcgCgcMeomZ37FU2AYuskPBNbEpc8Mg8HVZQjAEKNmRYtY3AvmXpEoHrayS6MViKFpFmXX6dM54rJqe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tmENLzZ3ys15MwopTWVJ6585HXcmhf7ZP3R2U2Ws8Uwn1cCnqAZSYqAKUYK9JmaXoa1nF8DSGZpDq5BezkZDPK3",
  "key1": "48A6FiAr4igfnVc72kNCApCR9nf6tFMyneeYiKaBY4nyBpBy2cT3J6L9wXddN4Xh25G2b7JcWFeXRmafoUSPNxSe",
  "key2": "43nZYmiFwSNnDFn5GxRFVxtyRnwVL1Eh8281qpYXFkHRxx6xJHb6kd5o5Vj8eZaQ9gomXeN3PebJU9QdHNzEPFyX",
  "key3": "2GWm7VULBwDSViCDwFfDWmzmLzNLbf3teSB486Vip71P45LkyQbJuMduRbNjR2n7L6ip9fWn14PDazcCbHMMQ36w",
  "key4": "4AR5MQDTosUh3dkcTE7LRuMqjWzACVR7mtt1wBYU2PqTkafe5hMGa3oDPFJeRhULmTKiSogvpbM8c94Njq32Yj56",
  "key5": "MeutxDJ4G7kNkAH2ncp7owJCf3EsTWVZ7hBQ1wdHQELwKoVqfSw4N8NbEuBAs5KFoJ8ETiMAPjxYmkGUMT4YWGU",
  "key6": "5M357MxWiDEMYnhu4VWpW5eoATuZWZhmxQapddbpCNcgaKg8bJX1rqZ85mMBUXQoFNxR5144i4tifufLzB1MCqh4",
  "key7": "3BBUYgS9s1aMbAHCa15bQCRw7am5VfagaN4tMezbfAksdzxNUR8MDsT4cfkK5nrkXTahuQuEfzo7sKRzonS2j9ew",
  "key8": "3Yfk2VbKpVmm6u1wdde8bLLSWoTpgcgp4hHBqp8pbt9nKg8h1ZFzp6EHc3jQswtAufDwVy7SX7oBsAdbCXWovLnd",
  "key9": "52wkLtTNtAaosGiyAeu1YpRgT8obLSrx1WAiXctfT3nBgC89aj1u8cCBAQrKBP7boz1mS28P7edfQcmZJsmrCUHE",
  "key10": "5FNUUfEitjK8swWfFqU8BJRXh1qkpcHgYb4RN8SY2v5TXh6NzSQ46EmAwAtdMPPZbYYw2vemV1AoDUYEjMTwpNtt",
  "key11": "2pPtbCFduv7FC2oxX1AfXrY51MzvUMsLbNwTf7UfcwKXkJ8AdoyR3UujHRRpbHqvEsPkqkFjAwFoM9L7oQsZoQSo",
  "key12": "4Vmf5DUhe8AXhQqybrRUYoQk2bcTXJN6zNLdEc4mD1SggYGhJmV1kNJ1NQyK6o3khRGtKYfsbKhAyzBsXG5mrkvA",
  "key13": "5nWRyx1BCqJh9niBBXxqfjmk2J43NaULMpc4AUx4KJPw82T4GjdstZAv9VAdi25XkoSFZsbCDWuSdczA1CtdMce6",
  "key14": "5HKnBon5PTwVQdKV8AzGzepRu7tMMtnsA7EJQ7pHTtJwQbxtt3PR1ERWimQ1kd1T5Rxuv77qgG4M7GSew9UgQTFa",
  "key15": "3XBFLq8SYnTZ3sgXD3LNtE6MwHNWvKNA8qic8THKRuQizQ9bCG8EsARcH8Xruv76k2cK5PkBZtrRd9PBQ3mLnWCj",
  "key16": "53sxhh63mE9Sxn4bP5mHgFPGzDUyAMCfmAiUfqH5C4U6Cd5DbGFHDuvxH9MSPuGZBicydMZA9SdrHne1aeFbLeDm",
  "key17": "Ay3MaHib2z4d3ApAjfY1LetBKGp9vrbDQmPQifGf4V4NaFMToNWPxYqUw6GQwtKfv6qWD5TnoJf2Vh9atDJYUr5",
  "key18": "2hJxf5mVKXUc7T7EDc5MYHCtmBnJwUmCkxu3GWDfhf7qbMwb52fvbowugkAoykwxunbvHohVNa3PvM4QnFGSusio",
  "key19": "3ATp6F3LNMDMJsi7qJqg97aPEeZXU6bJMwQECNrSnAWnh31S7ZwsMDYGRCAywQ4YgFWJjg4QEtCSRbjTxLupUffY",
  "key20": "2ujdjGk1K6kyBMRnrBKFTcA8bSzpXtjQ4kFAmxuJMWhnJJigjEqCiA2ePDPAtGkDcLZM1Gumq5ySYZF4Z7jQUHyt",
  "key21": "4VmtrBNF2AbKcj2feVNZcPTYXMZBzJLvP7he4KFMndXX96zp3gN3jL8HtTohcLjdF18ye42GhN4jqkbnYB7sxfn2",
  "key22": "5TTFKUfA9uavUNX6Pgec9vUziUCkRo1nNb4Mziru8BHb8axV7EWVPxdvxC5pZUTgstzvfVe9xrRnHy7YVzN6zyfr",
  "key23": "63D7pQSsSCPgW4rLdDwndRokEAjnVLqovZKUxPmM5g6Armg3YyVPqP9hiZT72gtLpckUEn33NrSMpyDgv5CLh2JB",
  "key24": "4CqP1rBzj7GjZ52Lf2rWjys7x34W4cv5t5fULX3o6WJN1xpCSKMrVauKdJYZcCREXPpgRtvn14a85MjTCUGMaSMQ",
  "key25": "5tLMLC11oLVknFMNjW89EMTfeGpLBDDKEWNYw7aFyG26PFeHwRmHN5iEZcV9HPNaYwzi7amwnvqWh5ZNhDzm6bM4",
  "key26": "44HTgr34SMjmTdyFUAiWMfULLzZN4isBRJH46CfmYfUioQAx8P5aJShzzkScBYTGAsoowXqTLFAiJDR2VtiLtcr8",
  "key27": "3QEXB8gLjiw89T2HrJqeA6jbybTBhhnmEoy5ojngiBfGeKn8UvsfycGG7N23pRr4dTgTysPvLkMCZeVUeVpb9QRi",
  "key28": "59Dy2YCSrRRcMUPZcxKus3bgwmmzkt7ZntvbLTnMG5ALgNNL8Kc7JLsSBG79QtZZwFvNAeXrohcXzHMKy47HPzMi",
  "key29": "2HTxiiTFJ5qoDVUQ9Uy5sXw6zV15vRaEdCswWnCNf4zMX5jQ7qXc6pTubXA5sD82fLppASbEkbNHXG65XzuXKyYt",
  "key30": "4c8VdoJ5139Nfir95gDWbtZCZN69H9duxFXdCzKAJfoSVwwRqoUvc6pYHfkuYCCKDuqp7TnvguN3w6E3yGsxMWto",
  "key31": "3YwAAPG1iX4Yyi9ayYBspZKPRGoNi4RCBPypAw1NKRAbA6YQHu1VCoYGT7VfikWaX2vzSrQfgfJscQBUKxANTdns",
  "key32": "G8KGJTwsR2QCwtokMsczcAgBQoNQqu9qvjNJX1NTmK6hzEeKbU6BgfbtLuNbfzHP6FMzYMpsBJ1ujGgdt3Ge4kH",
  "key33": "46mwn5YxXdXquhwZQmL6ggR49UZvBmiqrHGQQfh97zVcTLk5TeysgJgNbr7quoTUfoVKKNvBxL3gV5gVdMKJDcGU",
  "key34": "3VGqAdXMpeMoephFYu1HvMUKGvmLmTxsYgDGubuDimRFvHPyu9VjT6A76JPXz5uqxiDZehbAHwbj1LZdrv2QiKhN",
  "key35": "2Zch6t3ihDtFrUKBKcvHnLBjZipg5msPkvasaHimavaMu44BXD236BQFAu5tL6ox4R3PY2gpHcXCxziR8YW63j8R"
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
