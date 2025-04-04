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
    "2meFf7gSqXiLvpSj6h26NopjCFRbGNyodpziKCTb7WvWUKkZYnKTftftKoFU2VU55qs1kLLuycY3WimR8sxd1R9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXm5Vw2rsM5q2f1t2Mm3CM59Rd6VdfJ8jLtKSU9BSpUmgYpRxXTBVYS8xvppG6BFBxwMZxJFxnehNbwpKMhHRjA",
  "key1": "2o2pxdo4j1wngfCKggPN2TZb9qcvFVadF1gTtwz3BJM1YxSXF7GiWxAHCkC3bZCxAXFQ8t3Kj4kDDNTPf7t9SEWW",
  "key2": "5wJmqJebn9Hdi4izWUcjGqdVtZUpfBig2NpXqEuXLUXFRXUMw6yffkNGKcUaLoDmaTWnFTSwZ6rVETrfS8bVVrU4",
  "key3": "4r2jaYN7hqvHyGX1LPTigzW1mMiGzxcKUkTv3yUby7QLmZiRhsMgSZ48nk5TMcHVvHSKEcLufEoo4njGxcNRJrdE",
  "key4": "57cxQ2m8tG88JZfCi7N5ZFyyJEpo6FPqCHc6Gj6fP4kbAY25oBw5sPutVaQrNmSeqRezRxmzfs47HQd6rhJHviFf",
  "key5": "4kjYLucfYUYosfBUtfsJdrpJ6UTC9TMzdvQeM5aH5TbEzueML3LxM7Sa5Robj8ngJsd8Zr5n8w9XkdQ2uhDXKZtT",
  "key6": "67HRvY74Z4deHgeNxMCCrm9T1P1TixXc3DRBuDxCS7KyqCwTF3yaoEWfHocUH1vA8fGwg6L7NUSVcNfyh2vD1Kjx",
  "key7": "3DkuZp3bjd8QPpk9BZnuXTqxM71ABQZLHpbqhaNi8qcA1Gcan7CMe5BqiFKmfQtncb7DFde1SoLy4HeyYVFAs2jB",
  "key8": "dAkxSBGQmLEovLrvbLheKjuuLpK1n16AqmrF3RXenZCRViVKCrZWLPfvXxiQceMpRhv9j9SqDu3oFg14nZwZELG",
  "key9": "QbRELzwjzf1bDU1SH7YdwbHVJeSCQLTBRt1UpGZ2WAseYve8CVZXA1bLtigusoCGEwvyJTLKL2hxKDF1bdt4XBD",
  "key10": "w96RCr9Eak1t3EpxkKZ21joFbVker7XCUa9cbYhJwashG5s83AB17WfEPhhBGiZcJb3xsMh2z5zr5ebuDZzmxum",
  "key11": "59nh5FXvmfHkb3PPvTCN2KrzQAnYtqRbSnGsHjnXZUWJEeTyLuxsU7S9XEH1D51x4665zq3ZxPGGrB8mhXAUW6gQ",
  "key12": "49qZhA1gURrm7FG3KuYaKRXMhDW1CygSu3MnNF8Scws8sydjwLkoT6noarwCptA5wZVCmqaZyh4hi8kNpk7GAcZE",
  "key13": "5SgHEDfzS2BtLqnJzAByQTSgEjYfDsoCXwhWtvt9wCgJH7Ffw4iQYnn98hfXXzj2ppSGTj8kopLqpDz6M5vfpjLg",
  "key14": "4wbj5Tro7bCYLbynX7xY7c1TzaXFq1yh8vd5pYvSWEEEYUwmVUQwcKy7yVsa1rJpUTMKUNcgWXi7QikcLAYYm4Aq",
  "key15": "4YS8VRP7tjoEsJQmnwpkc2cUgWa3N6JadSiK4VJSf55ZQocDLmhYdzwCs7PYL5KL1DgnSV2foiwdWqHebGKMFiBo",
  "key16": "4D1BR2zYfT5pHbkXjXkR19kgk41YeQRrRjw11KHaW4m5vvcbt44tv6rXn6fspBxeQGE2QJCERj3ZvsczQiwnKUgX",
  "key17": "3AHK59LpmGBFFQ61JKitYea2Lme5F6C9u8aQpEf8NYEVxwKmnmHcUF7ZjWCmnwWRWWY9Px318qYV4YJwktpFhTfo",
  "key18": "4Z8LWkBzKwg2Z9rbtreuNZRKYhQ4fXMbTVvFmuZRrqH78KkyFtCQ4TyYzwvBKkMBe6KCyapjtDCsWGk6SVk2ctKG",
  "key19": "oAGAt2jP8FctstXptXGcWDufs2SFZZTeB91AXDjNifJo92JK2SfxPTPod1k4bXLsYsH6J4z49ULTMcGnJR2Kkgx",
  "key20": "5YjS9LejtftccCVAMmJjHsJixfvT1t9Frg9jrALVNoPuqnhQCuvRsEEFvJvKKa3PZ6MWQyYtPcypU1FGt2gYFhZr",
  "key21": "47DU9VaG6d66RB2XMiMLggwE4ivMswdmsh6hWxVmSjJ11g2Hou8rdcGvodQuW6esLKVDVa3h8pZLm7GFYP5vvFse",
  "key22": "3Y8MfFZAom1U95f9UTE5JKdHiKWYHHd4MeZjaXXHLa8uks9GgGQzEj2M8qxJzYqeYQLz7HUnDZTDXTEyRxAwqaho",
  "key23": "4HdtdmrkwM1QUoKxEnudrrkBkTCk3pF3FVnbTacGwL5dY3RLtwKGQ8VqtWRTtiNR8XgbqK7YzXVcQxcmjqQtLR7M",
  "key24": "2SzQspQy3DYqGrssMbYfsW7Kwg8r4VvDxF836xEqLZD2MWq2g4yhxsfCDZDs8UUhqgWWCP8NgAtz2649hVYw1UTq",
  "key25": "FyZ18CGgUzkjoZnTsb1qL1zwNbSv62TWuXV6AxKyX79U82uqhStnZMJLn5BunXHjEgudtNPn3AHjyzd2PQ8Bjni",
  "key26": "4JanwjXDsTqoVoUyBPCCg35iNspSV7oAXK7ChAJHP9v5uBC7NxxcUervWudrppwj9UgsqYG3aKQ6octerHgGv7Ra",
  "key27": "j15C7i72apnk5Q9THis8nZMGU83pU1y7xB1cLqAVDnPF1uq5PmvkF3Xzmgbw1osATe1VrRdBJZEP9KYyLddrLMC",
  "key28": "2LjDERYYkdqwRqtoFzWgK8Le1bNdWpTc9Z1zEqKVRohTct4BcuNzcaXMpgXhNFcZnhNhNJ4UJwP3HVzQBmL4QRiW",
  "key29": "5oF9jv6W8QfuwqNb5BBnNH1QSkDzaNbPDFzyz23WcHXg2iT5cNsGQYtLQJ3rLYoDwG5A3WECXjzjXmneC37c779N",
  "key30": "3qQ7eGwBPx2iZfJ5WmvnLHbL46U9qzkGJ7Y6Afc9cDXewQMAKCZfXp7GxKRUSN3zPD8LBCv2b2SuYxx5VqwXK6k5",
  "key31": "3nQveorK76WyZQFFwCswBvW1DVbuTeAhKDs2LQgnJtxfkYHam4WZx53MMzFQBjESTmvcNSD2x3yL4aeFJSZH5CQu",
  "key32": "5Xa9cDwk94mY7fPJKNKnxXUsWaSEAb64x1Dia8R1s9BfdGk4fMZRRhxQUubYJPzXo7d2wTunJVG3EMpdSBNCq1L7",
  "key33": "45qxNiy5fKpnshq37jf94tULbacz2ngzUhmUKgTZdZ6VKWc4w6CB5GikXuRgtTVUfbPcpQK4EzssgR2w5mFAxpCA",
  "key34": "4CREPdvRyBiFt7ByChDdZk8JJic5E8cVdTc2XuTyRxWpsB5mAaBXtSm7Kbn9EK6z8sgESX3uXK7BYbuTvH5S1Bss",
  "key35": "53X6xjiqCosZs9jM5dMLtoxZDqsK8UA1ookhBvyaNwWYLepiLkPSaqMvafW6mr7oseRJVKTW14xkuxVnKPBZyb9z"
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
