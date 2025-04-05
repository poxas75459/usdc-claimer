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
    "61p12rtk7BMqzZajdVfdnx3nLgDq1XNvyMCFqQ1gBYLqjediUFpwPQUNA3DnCYvyBh77LdDY6z9sXohz8FZwx2yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JAFWUKxsGu2is5aXQjAGP39GypYeEenxYqAauWpvAmuKMkPc95pLoeAHXwHcxtmisZ8xKj1FXaQHh2MpLVCx133",
  "key1": "65A6MaKsXX8nzNWNieGQwvZRSLixCBadzqFdDmbBFBiepvYXarLizJsRkRP8Z7TVYFiw7YJNXBi6xDDNY2Rxsmbr",
  "key2": "k8nriMCgD8BmcHRdu9qX3t24dxzbghKZfJ4fwG3jEFtnPzhmPvcgaqDb33rtDAuhiVdYgt7UnETp3se9W2yCGgJ",
  "key3": "3wNtW91jNY5KEhkh3XfCMimroLytg7GT4AP2NZjFi6zJwStA9KkngddqMxAbtSBYucF4VtuBSFAc7gJdxAhaiwJn",
  "key4": "2nupy4VAwz5fdJf5WrbLXJmDcDYSihmsEFbP7LLw4SJve7pkRWbkttLbJ8VuCHusy1A1PkE85Nhph54L3N86Am3X",
  "key5": "ib85SVQEmuynn6ZHPJPePY5RfmmvoxRazWcf4Z4KX2k14bUCs1sRoWwn9THZp4vGMF9z9BRdvv9RNBQCmEjZKtx",
  "key6": "3Bmwz3ZzqpeD9KSnDsZJbzG4GCTr1KR826ZkSeukoAMpmdqVva6UbaoL9U158KXBeLDE8MyQn5XMsQYHuNrSkLsL",
  "key7": "2ZJtqRMUXjVcHtJeVqXzQSDiepqdiKWCz7M7vwnwBgcM67Ppf4GUCkN9T1Px5wPzF8uE8Hnn8PB5MvSFRFf7dn2x",
  "key8": "ADnaCRKrRRkGPoetEh5HCex5ECJznssUWKpb4x7G7xgQzBavBQP6Eid6nRTgDDtJh8Y38NPobPpWchQvEdNLiPX",
  "key9": "5WGMgFtZGxMf1EZnHSLLTrAHV8oFN6giUThdEDAeR1AEFiiRkovSYVJuaHE8iTYqJvp41JVQPGcLEXgPWVuqSkx",
  "key10": "3eD1wJpH5Gtqa5pm53HupvyKHBW3R9McWX8zBkdRwhNFVTvTDaaMgWvuMu6FB6w4dLJMsYBmVQHGmGf7RDQG2bwC",
  "key11": "4n493GWco3Fs4ih9geZ7JnvKsEZQBVmT5fFEXufV2373tiiBYdA4CoFw53mmgnbxjNjGy5mgxxSquThRxatMh5UQ",
  "key12": "4SEV6PFZbjdUwUFEe8CrgWGv7i2RWrBpyuDHheBL6tRhf18aKqXBuEwwVjik6Qsa8WMdoZenkcfLCvxUjPA54jxW",
  "key13": "5rAf5X2dk67a768e8KiKsokNZWyJbo33veNDjPBj8JU8cmJmE4b4GWrSG4WcDnVkE8R5FN27HY7HofhdNK4YGLYy",
  "key14": "2AAajaAvs9A2rRpLZfLViEn4R4uzLhWdX75mm2TSaWTFEz7V6Ra7wDspaWoDBNjCTx2ZCJ7DWpA5BRL4GukFKmEz",
  "key15": "3qHKr1RGByp5GwJpS2J9D8TTTUdh5zMdUrSc3h8Zed5SuXjYZ6aDbaw8BFpcVyTBmmd8WtRTob3cBefduM2HPnDT",
  "key16": "2ow21G8Rt4N5iYhuUKm6pKESxHNrNfXFq1AHj87Jts8SgPLyqjDypXU5s43HUDGsjyE4L6SPxV5y1ribPjs57sex",
  "key17": "sQ3k86FGoQjqjMmfqDP9ezdNoRKku1tXG34o5EMqGtUbcdq1wLRGCuhLf6nz4RK62EacZAZ7jtEPW73kJdkcK4g",
  "key18": "2RBdyMFLLYC7W7S4DdKWib9zYgLB7QQEoD3LQhZo1dRa53wCLGCDRWjsekJ4ArxoMx6fx3GYzLREYf7y9mu7UzrY",
  "key19": "31fSGaMCv1UsHavEKuadxzHCZbkxeV2jdhsbYZpV7o9PBQvEexsh6DfMb4rJcKUMwpGyi1opuwcgGFvQaY3ANgLP",
  "key20": "61inDFCTTv2o61GEGcZv2Jt2ksgKvibpcmkezuZxTQw3mmxeAK56uMVuENsXRLoXsbaMCt8LAwQ3MjLWzfHqoxEw",
  "key21": "5u1J64uwCiWarXVdTxVMLVPcjvrSgUDMQfWbJTqwK1v3LJyn8ZEqCy3VXFAL8crcWStEt4S7GD1gSnAUD86yBddW",
  "key22": "4GRfuwFVqMyWJELrCb5x1QQZpFKz47hAQgK9FHKj5Sp6qQM78ucxyWCGRJCKWjDTXuHwKQZSe8pq3z64qaAvZiLe",
  "key23": "3DPW2r43xXMQ3AuDfUsKhcA2LTy6g1akNXFxbVSc8Lx9ksmhWg6EJDQaUTcP7BWmPC4abP7TurUHzL6PYFFtrTo6",
  "key24": "2hpfAAqZuMSethusRjdDpMWofUDFiU6ep1dxEr4a2RXLDf1bcy8nsYpH9kzVcsL8uBFsz5KJbmKbLqRon4WMmB8T",
  "key25": "LzYJXVKJYuAyuubnD4QKDSggcKgWASghV2MbpYqPZbmWttyfiZGTja96DnAz4KZVF2rpumaWkFRy1GeRqUkMus2",
  "key26": "5oXn92q8zNFwqUDKdDCVsgjnVqdwMNqaGoRe1PGVqbYATBWKuW34KcH7JMuwDkiLm6MmmCqgpoQWN9uUnrL6xMt7",
  "key27": "57DWApbrJQdBpPxBsmBuDpTmrRMc7JaTZFrsZjBBvhjPiRFS2B8Ka1epf8MVMCpgSH2wgJLfCpMJE5tXeaZuucgn",
  "key28": "4ZjsTBKDGadt5v9rmWewfRAzL5xeqPX4ar43nVgCVxcS61Y3CNUfvCaGwf8sJAr741FnmHVhuaGfEKU6rj4QxDXX",
  "key29": "5uygshbdH2WSRafxt8ETKtVuYcAXpEp5YC15H4jfkE1wQTxHcSnr2qpSwbzhKKmxnJvfkYXMffcbbBjuNLJAjHeR",
  "key30": "43CZBkf5j9bCnDcNudb6e68tKhKX8DJi1EdL2zLr416kipycEKXbywXnCwQRA7DhdVzXgrQZQKmFGpQ9yBEY7fwD"
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
