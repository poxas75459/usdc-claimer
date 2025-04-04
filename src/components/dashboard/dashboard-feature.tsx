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
    "59Kwve7gqTXL4D56wQQwoowAYjicmwEQ5zGc9WWES6UUBtfJjZWSxvEUxAmdYKeHqA3TU2P1pL9dmDSz71x8YbGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d7rLqNa4NGKcVyNeyBjJL9pXm6rhtcHu3TuCgjgqCfeVjoK9mYvRAJwWDpM2HvHE4Byiuiucrifsz4DHJean7uZ",
  "key1": "fL1VaUBCFsLDuNVbffYyfffDGb1u2KbqjtBwoyytwoyADteHx6RMnA5Ned3zj6oGQJJ3XrFuiD9bCLnDS5WFVNn",
  "key2": "vZhhqJamxaHkpfNgiJDoCYSjAuQzfjZoW97FiSkx8u6tMMaiMkScwfxBLZJfkX9HJsHHSLchh6QtKthpvEYAhmK",
  "key3": "31Azirgt2wjDARqzDVURArjuwABjNgW6i7vuPCnrzP83qM426WDNuy4yimuL55NuJh1DXQzo6dZn99v64oAaaNGD",
  "key4": "MUVpGffUfEMjMQes966vE8bQftgoEWuWpdRRDtCDgeGpQmnHewVg3aZYuZpvSzrM35tu1vPceaGQjSFkCp6uXPX",
  "key5": "5dZim4fseziP6N4xL65Nm9wXxsbNAWPpSN6B7nK9hAmi5GG759s6k5ZVqncRFdPTYYJPuHY21vcyGKFm355wVvLH",
  "key6": "MMNxspcfwiGLoVoj9kAjfDZz4XCWiabSrHnfKfRN1LtDUWCHxmvLbZ7ndP3Pr5ckZbeUtkCbc4MKPukBnbeeJhR",
  "key7": "5vaSdtVKAUbSvDbBWpPayqgu5Ycs44ah6zuDzeptFQPd7f1hc8Gn5yB13bxaoMTkew3faHixtzUgGQc961CTFJoQ",
  "key8": "2oYN8E6f4TT2GmjubvryFvj33MmLHg6pVSHXH6ngV5zTKCC3dejzxkU9UC1g3GDCaSYJguPXMwjY9WWh5Q5A1Tnn",
  "key9": "4YgyXU5DR1r2kb9iJphubxQWDWZZVufWJ6herkUYqLfGdTEV9rJqBrmJePJH4QYfPfivuom9b3vwiHJimwdXa8c2",
  "key10": "2vLFszJPcrJckjRjq8R1sbLaUkR9UXcPmxcdYfPv7Z7XL29LT7yMDGezovPwyw9pToyhSmQ3eYGPeMSb6mF8CdB6",
  "key11": "5EEEV29ngMbqMuP5qD4NjBLyyFnH8rxV7kLGc22stgCgirrELWzYodFwTKbvc1igq4ijJzHW3fDKdM89ZuPRACcZ",
  "key12": "3xiVrSynxYSF6SgrM7tFwZKrLAQ9tAEXfj44s9GcKSzwaGCJU5rmpwnCDWk6WQXP1RQWfmhvBAREEiu6sia2i859",
  "key13": "4qUxvPiHB3o7VsKEev5aHff6Dr3rMEYg5Jt5zqghKVqgxXZ5DXJErTP3bC1MNNDC49vJPjkUteAQKtzfKEwWTKSv",
  "key14": "3PEiT4e6yj69EQHfgx2qePXQcZiMAZqBqvZ2BwZ7ZJMq59JxpFfjo4VapriQGycuvL7bt2XqyDoWfYPKSkq2kS1Y",
  "key15": "2FMTkr7vZNjW4VJr73DgnJyCDpHTcPmm1p2wJ4HP4GHUebDi7y3gfo9qqXKehLJpGgGFsmCinu7HS1KVoUY2Ck2q",
  "key16": "vAeUUGj7rUk13tev2gU21NJa3qBVudyhNt3nREbnaMVeGDEF6EnyYgQQmDuRL2PtNdY5bSwYq4LwJ1B1JojfQwB",
  "key17": "3g2vbU9jNzdcyN4uGvTzjMAwTRtf5VAkrfuikErKqyX8b1ZSe6YJfxtqivxAau1Ti4V3UQokWFKf1xvyorTyXgLr",
  "key18": "43eiM444SuapzHTDyJSCwkoRNgUyLaNpDwnxBSpKHF24zr6DqCtciqGQZtTiL9qKSw9DowY1sw77LYMKLi1g9edQ",
  "key19": "46zVKMMFeHKtsdFW5F6oubKqBRNMe5YXFfRmGfooQ2s39amsWR1D6G5hEtHSARTavsPb2XppzMhM6FNPv9pJdKGo",
  "key20": "5PzcV1pad3ujwQzn3mpFrTaYmRuJAysnUd4Em81T72ypCyWCpRSh67Fq9ZDpu9kpNpKVcVAuRm3d1iz1VLqKLdCa",
  "key21": "23WMksgTpuvnfvyxQbma8ZteDj2F35Hhrhf6qtBKTEsW62YFdsSWF63RW9HJwwWbyXteMgPtx2MHCFdPrvSmWtjD",
  "key22": "5Prm8DLVXFfEzZsu5s75Pg4TTaXwGjeNhYDgZcQ8RUkYagMgsBmGLPM7vvhwdP2mT7st71skCoxcm7VSyDMs3RCC",
  "key23": "4nVpPP7a4GUjd1eqqUS4aNithwyQL6BZ6iankazPwimWEWyTGTsosQmoKjocemPTqQdEiaanmWcekBb8J4PdVjCy",
  "key24": "EW7gTVCjLwNNtaNHWg5JE1PHN7V3zRLkMFX4EjGK4xuGKHqr9TQr35qqJ4DZznf5fkjPvTiAMkvuHqWtf8ouQKA",
  "key25": "3W8KnCXX5cGYtx7YcS1eRTWg5VifkAsegksTSMNZEnKA1qEnd49Motc2GnKBpR5wRRPNm4C8VWqC5tUrzC71ehK5",
  "key26": "2YiC9Gsu9BurwRK2hp3HEWFneUkJ6ZuMg6N3EmfTFyN9ooukM2iF6agSwokD2EsbEH3iqhMPZyC2MCygMCVJc42B",
  "key27": "4CoMhTodKFN13bs38tpk6uxrhWpb4vP24UVbfDfFWYeej5GAP29iLgEjVwB4Yzv8hPuVPvqv6DHemSA5LnU1noz1",
  "key28": "4gyiz6NKs2pz9HxA6pRfkngBo1uu8uFuq3T1W51z6eqb62Ymb99gP5V8SdZUV65vH8phwD2jZsbsuobQABPf8TWz",
  "key29": "3cRnjirfUG8rUJt7u1iHD2BMfNv6MRU8dX8tsycdp6yoY9kQL8LPhApGz7iegsd35uwJmttonxbhzeqMf1kKK3kS",
  "key30": "52J9NCuKSeF58Hkm22kSLeuQ3cqwXBiGc7UBYWNZyudDxokLkb7rXjjvvtbxSZZpiJ3sj431SuzqQ4BPJdekSsog",
  "key31": "2iRnhXDGw3jX65AcvpB1ztFoV1yK4ESesVtkgG2Scr7TZoLxnJ4qzhFqgNFZ4Egic6vPREZ4PSYaVBtK2F2doahq",
  "key32": "31hRbrJJxqkDknVZmQRGt8c9LJYq9RazeXLCLppTvyoaMvbhpVszHpLFTW8Heyd5txZAHiJrDvXqu9XmdQwkiFec",
  "key33": "2sRwvMCDndvETXqeRgZXSqZQf73wZ1zX7i6tu9f5G5rbDHshFWK6Jzkj2vTKgsyLFq1fu6pLVAMndfcxCCZUuaVQ",
  "key34": "3pQZxx6tYYsjA5gABDLEGa5D3mtx57FT13fz3C3BD8dKD2HnHuZUB85CDMzMBcdAr5bP7XLWySxsbVhhAWwUefbV"
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
