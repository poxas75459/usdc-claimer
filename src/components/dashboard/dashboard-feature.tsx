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
    "3rMr8iZa2xKeDUWeYTiAw81b1osheLqRGqXa2SLoDBqAozwXLjXQh3mMz3wx7y8ZA4SjGVT6jttr6XZsufQy9PpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d16bKc2nmfwi7pSDRqrj9RFhMw4KxptVEk5wp52yGtNcGiUEGq9Woiw7sBaWTZs3EkaiE93nfXz8m4idMviH727",
  "key1": "3SDzLpuizdVFsQHYn3oZJ5Pv9gYx7npX15oDWqW2HcsReGHtH3x7ruL9MCH9czT5nHYmTaKvnQjRu9ziGGyAi4XW",
  "key2": "g5bnySfE1Nk7qJqS7BTpvoan8Kj7t8nnAov6XpW9kAp8TqkQQwddjA2a1q78TtLr5Awm19URa4fGMiSJsAyXZ3a",
  "key3": "3AjpN6hB1Rhh8RL7cN6RYH2pPGFhg5xWSviFAq8QbJaqyQmLoqiqvuKVNUKETaBgqRoErqHR3nHEycwPxeXrZzf5",
  "key4": "2CDSa5Ui5XiQrbEXgiDcW472KmXgp56KfzoraPZKPej3X5NeUDsuGLoXZ1ELcz4bKYbep2PJAcD9NUz8v5RznRVg",
  "key5": "3UnoG8vbzkoXC7uCpRnYtW4PYaB5UCLfod5MBK153W8VXiTupCkWmaFExJc6upYkYbsozDLw3d2sBEEHyEVJ1tHi",
  "key6": "sBjvyztQKAa4vSsP7adMbWSRUNhBZSZ9hyytz2ztpENq1fak4AE4DoeoZ5rPBi637JmYFMxv8uq7WN6m7XzD2T5",
  "key7": "4BB3advbjg9ngKxLeufgKq5hAqjvNpZ8dhucsx9Lb47aNWuVD1soEF7wQ5eiUKvHApv1V62w4VGGxYJCcWWC9b26",
  "key8": "589VxunLg6Uu4LjCrtvg7n2FLX6MX93YnZuFuRZW6Vntiq4EUNiE75vJXJcwZBaLeWEec3K2SGddVPJPk9o2xz3q",
  "key9": "5jnKtVdt5KyqTMSSrUDBYfNwLs1xnb49DTD2hvrGWNj1VCjt1emMpPxSSNfqv5GQKcHvQ9zmVY3ExdvTxWVMTxaY",
  "key10": "dnYRg7z4N6kYGmaz3g3UDvnbYCFd4JSNqG1k9nowvDwtFcaKRe5rYXQ5zMMtHk6XmQ5jxSAPgtnvXT3tNjNHQTD",
  "key11": "4fxdDnauoaB6tfNgHg8kJFogxsNrpDhdrwPiccENQAvm4zaWiaWQ2zjyRqcX1n8ebvrUj1RFhmntDbZkAnfYy9e8",
  "key12": "3hsyXcos3AWkyZ4tKr6LW27qcE166YVTA9SSutT5H5H9epYCjfNWXycuHR3ZxDvWki4A6b1LLJRHdv1R66NZH5np",
  "key13": "3NJFSuvifB7Tj3936zt74cVTXyi9FtEygYJbx7dwP1u8925b4t881GVqu761T9sevzPqF8hWPQ7gSgHy3dubv1ed",
  "key14": "36YwQb9bX7Yjhtjo5KXa3jvBjWoDTDMa4mQvYrFoRjmiVNgwMuNP7sqyyigurmof3Dc4VXPL5FyHFqJseHemsMx9",
  "key15": "5vn2uT3uguxyEr8DKBmDjHZyp4rto79fvMpriafisR4KrPq3DzP5wkKjnTwyc6CpsiPjbSirueUZnD3hkQMeeDm8",
  "key16": "4QtyxAJnvarqW58HiTsLvPbVv9W6xC8dR78cUPB7V868Y955UF4hTkVB48cs2gYCZjpCrsHjoh5GiFsKwjxFpT8S",
  "key17": "3KwkcCQR66LWq3bJ8yHCKaE13qZVm3gDM84fRZiXsvo4Ge553jsG5pkNsaSqTcAU6pFnCebojNjrFkYxWk9N4Pde",
  "key18": "5o1eqjefCyNZcrABFtxhmXiR1gE36DAcqBJjZJQSJn6wFnVr5EGq3fJDRNCzLnETjBkjjPscgCosDYoo7NXc5oyK",
  "key19": "39GyQXvVMF2dEUB1FVArGdmzz19T7bK47MTLH8qtrUrKLQf5MWELjYgvwx1zN95kbyi69ZCDL1Vm8kocsGwCV2SA",
  "key20": "F2JRhyUUymh7FRfz1jXcGZCj99yqDXNW23B6c8KEmzGrZ75FKEM4P4Up3DDaP73c5Jvr58ZVuw4W3w9uSiyocU6",
  "key21": "4poPQei11Nkm513FkRXDujSWUwuUBcww3LT8nehv5BAtdTTnjLmjKsLq73677ZvJMAbpwVDuSBP2uuK5qrLgGoC7",
  "key22": "2fraNXfBiRyR4E286NsP4QcFBgzWogrVsL5bsMuASsh4pj4LPC7kHYfkJqEZKiqM4gyVJT17aDnFchKpbTBp4bW2",
  "key23": "5P1RVbERXSiPV18FfMXtniygZwkwGyqhaBXmAbfVK4iQ83yN7wYHYVoF55zK3DSkhHEFjdgn57v9GMwVvj5oAkJy",
  "key24": "5NbMXaJBGpU5UMuo4pejK9VrGaR5udkqSeUnYeqTbZtBfQdfuaqFxD4AZ6WKwYVuLgV1hWv51C2cVWfC7fJQZ4mX",
  "key25": "2HYYZVXTkEkCnQL8oD1whBGQFTBMWchbqeTUyzPafPjDK9cqZM6ZzvrRb9isSpP47E38LDUCAddi6ZrJEsy8Va16",
  "key26": "vTQtNb1X1qbHAnnXrmJKWPUCxgvK6tMASmSVehWxj7TzTSdM7tfS2fEcpJi3pvSfcGgozofWqHaxgmmxn6hU4XZ",
  "key27": "ZNthUrSm6HKJsZ22UKxZo5NejnhoWufjNdm6Rdf34jcNn4YTz8uMjPt11QWQr5ipLdhb4uXJDokBDLhGrZUkKhr",
  "key28": "4agHeoPsyYsxjQaotDPoakQabqvuctuFjd7488mPpZ6My7dPw36jsnPq2jwMGcL4DwdGUYB69uvXWSzjwwNP9RBy",
  "key29": "EFoVmNoWEGUwP6FxdqbWuEVnDJurMNH31rLN9nCu7PHVZCR1CCLfPXsKukZEdmZXcRy3qXMcSX8E87S1E2dT2m9",
  "key30": "5rKx4NbVPG227paa3BzsehodoFqSLyuNaYruNpE8WnUcVf1eAG1AxgUXZJU3Sfv81zMCLcuGcURnDHzJvCigjPyY",
  "key31": "28vEZVDAaynfbyJmtfZ22DBK3UVKcah5x2uBDTC28usnHhNfXNvkGpprUAALqyMQqeLW8ezuoRq6wUNwaZj9Q21Z",
  "key32": "5erX1vkJfN8gZ3XoL3ktui6t6mBM1HPyrVoLo3SgiELf7VfHFPXCmYQ8ENu6TKcUe7gzSBgR6komvzLmesQaFNZX",
  "key33": "5A1LDBnm9Z4zouDbpdZ5TCjToUCSoMEoYX4K31794VCdj4C97SKtiycHNJuEBeAMAnQjxFZhqrcisWNpQ4kGBYzH",
  "key34": "djzcS6EJqiZi3gGAtbB7vwqCxcMmR7LHUxzbhnoD6WjKmYk7pv3cj5mWKtJGmf6iueKd6Ns8hG1mr1BavjGzRCt",
  "key35": "4CmVigA6J34kjW7TNUSyy16C1yW8JWzChhHBjwR7Q7PhqDAU6apjWagg7cjDdGp1w6i7wMSjhWPxQLziyYfM48S1",
  "key36": "378YouGQnNaXpd8postrqitstSq8cZSSzfFSnLD2gj35tSbhXGZHMK4z4rjJeQKVsq5iYqpJ4jXkoS4ZJM4hytVB",
  "key37": "5wXbCJTiDhxwGpzT7mcq4NZfi95bPe9ahtu4jLuBDjZEbADJhLRq2E87s5W13EYBXxEwcbtnRVx8qZoo8TiUwhpK",
  "key38": "36vdfduoJfm4EuopvWfP2CuykpkTT2PTsWHrGM1CkNhTXXvzQafznTMfMg4ngfgYiaW6pXUmNB5LaaQpzsL2eVWT",
  "key39": "2D75Bfn8g9FLUz7y3UGU5oGa2syjUR9zCw5M4AcfJtEoi2aKE8WJ8rXw8krMiuJromtH6UMp6R6jKzjQ6XXBUa7R"
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
