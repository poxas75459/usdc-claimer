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
    "JukonDFTerFZXKyzR8GgJw6mZGkSHm4At6EgJGCf3ZvQDr6ePsoHjtbirBG3uTofHPZcQWHK4dsCELmdT6AbSrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNVpZLaUcPXUUWMNXB6TQ3eTcvu77wa4zXrHKmhJQUTNpjF7bGMBQYgnmBe5nsVFk2TZ488ZsxNpk6yS9Umajqw",
  "key1": "2vWr5PMaeFqQzithjHmtdUfCwYtagFtEQ9qNohKwuEZWnguuxKc4d1ENEDN5LKqcy53M8YSXKXKXdMS3MspDgFJm",
  "key2": "3a7vA9opaJ5YvkdeLEPpSXM4ETHrKC1RE3kFErAJQLBUJezkZQim3z1DmAe1KiYS5WiuRzmxMm9JGUCpK2q2e7m1",
  "key3": "2JoDeNokyiFFNJkSGJygGNDBrBUNVU9TQHaZZzTFH8Jzb24JC8bKFGL1X9z56DEG9VhxUZyPxuZU6GnHPvUo1ttD",
  "key4": "28Ty9LpnfZ7VE3uxgdrRtNuC45qK2mWZxkVMQZpSnc8tHakG8XSQ3XP3KtXHMzi9xzbguX5yEmj5KiQUbV3Ec1Ye",
  "key5": "5GECA9BH4VTZQiZApTHFLU675uewZNWKJYHj51tYhuGV4ZLcWdPXBPC7qDXG5S7UtbdFvmA534ZayCXyo6wgEnPc",
  "key6": "4EDZAdCxjbAwCzrFKg8naPTp3GMGZPfUBnpr9PXaEAKNWkSxfAdc1D1WfEa6qUmAz1AEd3oXJrygEu9aWNrKSjpg",
  "key7": "VwWWQTX2Mum6c6mYw4K6JipahkzNEyMyZDJMyn5jaM4pjMHPg7rCAEdcdd32kpJxFeCmZ1gTp55G2ymAcphRwv2",
  "key8": "5ZcCTBFpDLfuPVuej5LGL3CjdkeB43QKVMfrF1tgUGwZdi4WDHuP61YoVkZ2n7E9Xcub2GD9frpUr3rr8B28BcmX",
  "key9": "5jGenk4PoRZUi5oHzkoctHsrdkkGVhxEWBdcYQtJ6eYBotXXus8Q55NtxgMCjHrQjXaALuu56e4qawRYXnPjG3Jr",
  "key10": "dC32MDyKYeyeSgJkPZQVuEEzHAkinPvVBR4zL9nvSdtTfKjbKq2gtzhfo9SQegUe4AriEAMk8yrkNaJnwdNBrQn",
  "key11": "FepBgBkhnD6HjBpmZDtsf6Vtb6818VonKswtVPecV1KpPpW32US3ejK938Ti98bcdYTxnBxu4Sg1YD4E9VjyejL",
  "key12": "5xhqXvrHiVNVmgB6ir9TAZq3p72nA5uE43ZXK86PFbXpZxJZZNL4ZKbjM4x2sgvYxZ5tLYZ48rieHs5GYZFp4dWB",
  "key13": "2W9qBNzU9JzDU8MVtEhHYUjTaXQCU2KgoaEzdRUPStNFh5Jb9E8CqW2mfmLyHRGPDBQ8PpNY8Qb9rS3rAuq2yWuV",
  "key14": "4FHkeFsCk6F8nReiEUsuXjBxLPXDsnMwjKhzqDR9PFSDJ7ymgUUHZyehBaaCmZSsvHL1uZ8gKKLoaeK9ErgSfRM5",
  "key15": "KvM6afC1G8pC5BVZV81qRiQ3JDM4umfmfFkBPnDGtW86CiVjhSFJVemBozVqNr8qNMezkb8QyWsh9K3uW3Phs8h",
  "key16": "2gXgYQWKPpdoB99GjBbbiB7jfGdg6oBDQ8m2BjPRwTQb3dauwa98xMsCgm9Vj4LzBdbunzAqRo8HCcJjEbKLkihv",
  "key17": "33yqFvfYg5CLKN46YyaqMwGhASXrnEC89aNaukmpU2Ji46H1tZ6VJDqH6ZBcTu9imR2zoRKPyWB6yz6rDWpfF3wY",
  "key18": "3LNH5FuLicQ7D6B6DXZFgke6MV5AwKEWkufFqjtjjU5X6gDmdCyumgrXmNMgHiPJH6MYuDYcdM3uuGj1YYvNzHx1",
  "key19": "2svtZDvfE3ZC8vz1BiAjxBR8uNGYVtiXXn9E7w4dVrjqjVK9ZPmQdgM8C4G9fCczmKXGcwreqrL8WTyBc6grq8Sn",
  "key20": "N8GsnJUhyV7Ld1EsVgrXCSWBDWsKK8SXq1grtSmNMNth7rnMhdy16AxopcXhe9c1U9RBAfsPi4x2M7YbZ3NHwX8",
  "key21": "27KXL5K4NSXpNfe1HuZVUh2T2r1HzQ2A1u9ASwUABCuqfmMLW7QFed9JR3AYqfbzijByDoytTMc9TcxbbahtcaYH",
  "key22": "mVp2M9xcnXeJYA8MCakgi44eAnmocEwMiwHwkvUSpv8P6MjYdEHgJC5ccz6KwYt3LQotht35ATGdxiZocBJ3pdk",
  "key23": "asf6JHScw9jkC47Kr1qE5E4JNGToy3mnYxySFRzFDDg4pi378Axf2BsVnhNAQuwuushFTDtGy6xMdYJPjmemq8t",
  "key24": "vfWXzBnYhmZNXwh4tWUvgsnt538L1cNiPqR9pXeuVemH2yeXy5nSoU3286NCcTvG14cUW9e3Dj1RJHtjvYvZqSZ"
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
