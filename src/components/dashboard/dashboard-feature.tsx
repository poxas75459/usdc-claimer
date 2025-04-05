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
    "fRnhdCvezGoYgxZdaM3DNyYnXiUZEoKuU9QckATTqQRtEZPiC2hdHKyXbTfd6qE2PAy8skHyZmZCM9yRrW8XEoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313SGCGF2yWVY3XWgb2wBhpsHKXA6GftBTbgyon5nu6KEwGdmxVGmGnJpYQCzDecDNUkGCLi2mFXxwMXEUeKyfdb",
  "key1": "2SgY23RFsz6TjyA9y8jwjmRGGCbx39PhJUz62Urv14unzJus7mSVCB8KDUNrFSYvcu6Abt8sYv2uhGJNBH7THAyz",
  "key2": "462JYoJwJAypBeLqSo3A5kfrGGLCTiGmgDruBsWzz5DuWpbfXPBV9uUAWS52Mqu8T65qJ2RAgMLEtxNpSVKrMPMS",
  "key3": "2V8HHt9xf375q3TSkia8yswqGfKvZJxMZ5bDvxJfTaDmk6FCCaG85CzaJ1QFspPFQU8LJKqpZMP2zfA3W7icbbpP",
  "key4": "5WHrb8teTZfw1aqS74hrxHQ4BnCZcSC56j7ppqioUmRchn3X1j8fc5cLqycb9WvuqhF4rueS2GzJv46pUEVqgNB5",
  "key5": "3NFmEULAVH7bci8mQxJpraQhTz2jdSh2FddGtD8z1CzWc9ZHiTHqUVWe6xuLt2TeTNDwbqz1HWoXgACEBFsC3mNv",
  "key6": "NoRzJfjMp3VN3d3VdtXvU9LqM6JtDd4Kx7b4MoGZ8evvFp5DxUmArPgTtCyBkWNjS4j4LsrREPk2SKbcyoeTV3W",
  "key7": "62TVYGC6irtNgRaUD8jEjTxff8QxJW2tNGxV37HxWYt7tT5ovdBuDWn5q9Mze5mQnmrw9q5gKsoLHw9Nd3p4LB1E",
  "key8": "2BAzRPDXeFjA5wkiVKG3T72ePE8KtM6qaqJe3aC53M26TKivKfCqR8XfeDHYf6BzHSHaifYQU9mMuGBVTeBdwRYw",
  "key9": "2LGXNwChK37pmo6YDAPiEJvuL8fKK5JBjurD3iXeFshB2JM1wqpjkjSpijMDKMFX7Abv3RM3gKL2mYGgzZCpyJXn",
  "key10": "2KJuvpruX7LAHWs8xRbzrdpK4NSMxsZXydD9az1P63APmjXKWp98ZwNGznDEtkDULhELbhy8rYGkrFtoSwb8fTQH",
  "key11": "KSZ8cGe6zG8dCuU4vhyMWYxr2hjksNHRdDPFHriZuno9TNVnACeyigmkLhyHtEJ4JrKHXfw2GnfqoLhwMS42aPJ",
  "key12": "29KHf2eWAZQBwZUXAa6SQafcVxneLyvbJZ4Hxwa5oByWLF39MBbwiLe7vkyg89ZYmE4sHuuL7KQyUrSvNs3k36sc",
  "key13": "W7VNvoyfDozamTLw3vd8ez1vD1LrWnEjLDAaB4UXKf9teNssJmQUqezN5Ba5mFJY4f1biMjAgNxyK1gz9mqNUnB",
  "key14": "22Ymyh57WSDqnidtQJ893qWPLXUhk85acyGX51Hd5fnpx2Njh729X35awxxcc2aeftDRzokA8HpPSySdcnCTxLsp",
  "key15": "5Z9kAsD8mqF7nmnurNg6DcpzPSnDaNtTw3LCkGhsw5Pr1p1DqaaYX5jayurep8MUp8JjAg9NT2Y6ajqSjiEVQZoT",
  "key16": "3EZJkYGJmqj53vcU7EMdoRLRXosCBXf3HAX7e5mWZnWHq1ESaRyoWqMPPh2fK5rTaBswXH2fqxi3QZEGiwNLDb7q",
  "key17": "2uSu34eLkuyQ8RY9E1G7qbkDZm7exmAbG3XYhf1eddakidvbEY8GU8TeyQyyhDJQJ6CRc2e9W3g7yZrEfz6V6xpu",
  "key18": "3Sviy5zcSM9B898ST2AbSxEVYyxbvfmpoMRm5dgjRWmA3DSp6gLx6sbhD7Yh2dxMMPpZz4xKWCMT1x4a3ALikJKF",
  "key19": "4nmDs5To1h4W6JU4oZkXQ73U52trES1YFUq11HKHHHEGAZ1WPjv33Zxa53bhjeDpPCTTUVygH8d1oax6REENJqgm",
  "key20": "34PMR8MtpfuFjqCUbeKzU6uPTP2a2yDoZqeCzkSkRsbE5bftW9wCFnMUX2VQiiPav7ndaNNBAVppTpQxD1t95eQf",
  "key21": "5BZE8sMuGhecvwLS5vCbikFjUEj9ibUys6g2NkAstRZHYvKtxSePxgd8ghcJnFYN6m5YqH4v9nJ5PtHWdrsdU382",
  "key22": "5rbrfbJ1uXVMJL5v4yG5PQ35pzEQKHumUz3UqV8LDsxK9gNkaLd43y5a2pKZ47QkhEPQWGvduxJFXPvwZ4QxZhqZ",
  "key23": "5SdfpzEtecPUT5jHub3LckVMtkGS2kMHs2vnmiKovnBaQXRvmPXxbises3gZdgDFgycXFDSeqYgzYw18yPxT2R6R",
  "key24": "2mozZ3wLABXxdCogzDfp3BDvqKpV1S1HSiSc3xMiRXCKi2PwLdrc9oN6zRpewQoDNqh1HW25PLiLvuctACDrB82y",
  "key25": "4peGAyfsd5gKur8DHn7LGGaU87iwxKoCiz2sd17sAixuUqjfJE8jWr6Uq75HVmFMYikskhU7gA2SyEEZJ3vGyS6D",
  "key26": "2Fn8R1cDJKNzHQdyJnsoUq5qDVH39rNF4Wv5r5KVAM5KBmVJcXiBwM3hERaSznbXRRAgVkrcGYJkT7ufeZuukSu3",
  "key27": "GnY4C2gS6dysv4d8nzXRfa3xERDLqYpPoVmNuc15zJJUss5sZxPLUgaugVtJxa8GHGtXQb7rBA4JCMcAwP3XSPh",
  "key28": "4QdoiVCKcmzDRQd8xHrVErcdk7NtvJgrCeAkfmiZfXdXw5QFZZBrzqWwRDrrDRyyA1ra7gPenh87fRAgQrZPWTNR",
  "key29": "HzLF5gPLMCmeN2tVMzsXeduSDovJVakfFfhPvdyMrpbTw2iouRwQxbTRsfeBiyAAQowydHNwnU5vS34XgkZ2KtC",
  "key30": "5ZcnszAwK8vM8o4UZsGs3sxFEC36Nded5aHjmUGjJ3BQWZvUWrroVSGMqj39mS5KRFBH77z1Sgw4E6EmU9i3hcPS",
  "key31": "5Mfts28txwiyJk4h5GsUJq5C9x8atcY8NQMT2LfQDF3BYirjbhERi63uLQYXV21f6dXcb8iEHJEgnyQqfEFarBS8",
  "key32": "28yjMw5fQRjhRk8SMMxdsa7iNAySGmduE3QXSiQD7P537pE9NhH2eRXNEviX2str3XE92ojD6rrwzxTA5iSzAAHR",
  "key33": "4TVmFGu8Tuqv4pycLhw7hZAK8AcPBzekaCYwhbWTBmUZ5nm4hpZCWS21rTqxfWK6pWhKz3xorcyEtnCKieKCXa6g",
  "key34": "4p151ASvkx6HD4pRmp1xdcbDTLCdvMV9CqMvrm7oon4SfC6RVtjPptXP5RkssZ524AGWKWbsB285n1eMiKxxGJUV",
  "key35": "5yzER71npikv3RutTFnWffUnCVXVv7d4wAgddXXYaehZnsY8o733EG19pjkNh5XJUh6qWYEjvwckfgWj4VJHu612",
  "key36": "5VECSozmjKoYh6QJtE4QErNK5HrudFzkj6DWEZUrpCdP5hJ1JX7KhKYGqyUKjBfyi61PaKkM8xirvRamY4tAZ7bU",
  "key37": "5Sm1Lcc88JdvPkBZ2aVsQ5AeqGfKcvubXx7cfsaDZBZQRDAwaENFWYtHhreG4ERhBBUFr3YBJcWR1aihTotB7ESq",
  "key38": "2pBC5z3DjqcwxiWiRf73CtczWsN7ECE12jK9fy5wRKTLXFEN9JN1i8VD6bhKJqhUupEiZWiAx6vtRVGFQdCQbiZ2",
  "key39": "2JXtRBkrMnPTdebTW3q79qkQddDWt6RAoa3WE3DWUuHFJchNg8A6xJtpbYC3dge71qHgg7XPLyQfCeSoNFGaZ5pk",
  "key40": "5bf7us5uRWkmq1PSccWxRrEzDrie5J8NEdz2FQ6GgdoNCyWumWUJ21sUQcDwEky48dGqjBCL34RtUzRkNgXwNfYv",
  "key41": "mLCeLC66gCKh26skWxqsJ31xdB3x8EjbEKYCwTwfsqBdXiLWuA6dUhnASuZAdPjF6FHRLCXB5YR8cFk3M8CqBfd",
  "key42": "5ZdjVecA1aH9QYhdw1k3Btu3Eaxvp2ezLtWMwvgFQ9mfP9qwmQFDDo3mxKpvZz3pH3c91CuTQsAqQ2UuEh9c5Uxw"
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
