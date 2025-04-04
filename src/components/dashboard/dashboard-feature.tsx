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
    "2D7TGCw9N7Sst6VrrPgTcBpMVE7QsMrD7GWqgDjattDhzXbuBtHYcCQtkTTYrQDoeMxttPwqxf922hpsT9BuTDsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hog3anE2nXcJ9ngJzZ39gSpgXdabzdTZ1KfzF7eSd4oRttbwnmZo5AewQRAoZNvAu42P46s1hQZTHAwDx5XGoVT",
  "key1": "5pcEP2jzeSSTTszNrTRwTeQvnkNxD5CoYBSVBANGSokHUwQ3S9MTu9mmR53Jqr78jbKNfr7Xg1nsReeheeYeJtAy",
  "key2": "25jqAe9L1QH9Vsok6cqhL3n3R2B7rUYZUWWLBuCY7UZt7g1ggMgzaWCnoTiEbD3v5shqPDZvo8G6NApt5XdsLTqd",
  "key3": "5GztRf3cLHyZtyCQzVSjQsaKefq3efnqTbrvRtGZcuEtob2JJvKo9yPuaMjwN889HJYgaWUSMPoKWKfAjCgjpocD",
  "key4": "3MgGKVstX2RkRkjXa5VZdzvG6rQBzcajEqVxwtuBic8mMY7nw9P4Uxr5DZkvrpigVfXe9XHo3WBMhCRsVkXFjWGf",
  "key5": "5ivCEcrow6rF44MRYRMnbEScP5q88543zodo7vCqpwhdzBhuqHUJjpyGnQ3fPaoWLmD69CSme8qhdvawbCxczhZL",
  "key6": "3TfMnkG4iCXdcioS3J9wQjJtqqf5sSfupAMfgMch4DavqNVSzdfSkjL4HzU9VVnjPufn1dPgaUuZ52HhHuaU9PNQ",
  "key7": "Bx4Vrnm4MnJyrbBQFD74ndr4gENBFwExe6Zv7g3rSo1mMAqzFKNcKWiqLYBAY4Ckq6utUj2NzPz5sd3JfDUStXd",
  "key8": "4hb7Kxmz6W4wuuomJZMtW1ZwPkRmceVrdSRaPU1bwPLakiPmmzYgc8eAq3yDXDvyFFekRfT1dsSYhSw7zvX7BowB",
  "key9": "5xqan5gKrGrHUJu38ahsGqP1bbW9xHDNJ5VPB5hKjH1fjnt6KmFER8zhHE3nkXLqcmaoB7MPtSwgyEQreYykWpsK",
  "key10": "5eRLmxxq3bQeM9rs7XNm3dsLezsfAUQZXk7Z6dM6ngXM4o3SXhMs9mtMpocayP3f9akeUD7TiL3XcJTeNq93tRQE",
  "key11": "44kdReFCydYR9AnArDiUf4Zvqc3wm4Dc2VyredMDW3vz9Z3PzDK5R8fpVA9dKJ3n6UG9MwetMB7NycwE4DYmmdqK",
  "key12": "2QUvjXcVHrjkvaZx7SfRPG7GCrdDN74qxpe1BAZ6RYfaADrTmTx925tUkUFChDW8AndJ7jB2UAySNSNAFVCp1y2k",
  "key13": "4bvDKivdG6DgEhRs4m1d19RusbUh1jemzEPD9saTcjeGTFkhuD8rL4hjeg2cZyMN5bkgbVQbveuGSDjVNfNSjWEd",
  "key14": "2Gu1DPgT1u68MpEeSuHL1FEdyLtY3sbsBHfYBrSQSfdqWUEiSqoShYK3X2w2VqQwKqg4fhsAe16tZEKpHG1s7VNf",
  "key15": "5aAujr6RLY61ZiYYPFQyTt9dZ4iewWQAddkfYukFJzRh7xKVQhjspHPDoYKKKMEDC2NPfhiJYNVxGrYK1YEReE5e",
  "key16": "3L9qBQzqhd3B8YQjdBEmLKdahH4MDHKtF7emxKjU3ySVY7mqJ5zDWbSfiNMN1HJwS2ax61EqjDW9BBHuZjiFpss8",
  "key17": "4YH2NGBQFNRtbTDFLeyS34VK5DG5cRf1raSp9jR8Rd2AJkK1oqWhKyw7imCXWArBPtLTTx9Sp1tTkSbg2prxUx8",
  "key18": "41xtRqTChaaWAqMQoBf7UVvayWp8NDiZhugLYPLpbREBVgtsJXsjgY7wQPr1kSot3DvVZWhbnChpcaSTKW8fxUVL",
  "key19": "3a5zFEqHBTnUicY2VWYXG88h78bcCV4NFXVmqhNoz1WDryYv1ziZLzbAuLib874mXhr3BqmRmSnbAGXSVC9BSzcz",
  "key20": "2ZLXdAskbZnV9XyysnR7XfPHMXgkXZegZksVxXJzCTAbJkwvSkE22ockavnLEQdyshRVimVfzxpxkGAbTt2gZ5r2",
  "key21": "4zBUjCBZEsHHgg5h86TU8vvhf5e58yfUpN6yMrBJ7Uf8iALy9QcoYKgN6fBxj5BL16yMa5VQhh54nJEAHrG9EKmE",
  "key22": "3qvau6DMxbbpiQ5w4QSqeaWyHHtiP3xy44X2uNRg7tAeFBSmCZsft18SpTxybHDmAXDE2MLVrfahiN87FLCMtvg5",
  "key23": "Ke21kyqqngjhZRPC6N2wmoNCZkSdcLq7Lwq6yjW73tXVZ59bp2LYxHKnzzMYzvWmqaKa1oxZtyEw88xv6wHzQqk",
  "key24": "3ibg1NTX1AcpbJCQaAY6KJkbFwtbZoCZTsi3C3g52cX9mL2akshSXLDcf4fYp8aokAQkZ3fYfirnFGBFzNPg5QAM",
  "key25": "3YAGDQQVx5XWdgEpVE6nDLE3ZFvPbiEcXjKaeYaZUE8ewGFFtUx5bpHvwEh2PwwCzm6LJZqVStAU3ABUzhr7L9uf",
  "key26": "5JndqKXnwsHS9fjuVDo6TgvYf25ixJ1JZKbSY4PgzkRBaHQu7pQXFXYrCWRHbk3Dt5SiB47J7B8bRnbh1B3JpWu5",
  "key27": "2gwP6LEra1gHJ3D7thoAS1jdHLpvdQDKaTFbYkD8S8UxobNj67ho4ExfCrrA2QScsDCi6SDo878usKnczMkosChL",
  "key28": "rTqMmDp8HZheczJh8FEDZcS9MTeJsz27gXCiyA52Szk1LiZXczguPNSYvbirPt6PqrAc72nhS8AQrkMVgAobaTN",
  "key29": "3kZ2diYgP8PHtGwqwdRQ6AbkBPzbdfRCed4qW5aZ4nazhReBZSwvRX5hNbMFfsu5MeJ88sCWBhZC3VheBkfY5DHX",
  "key30": "5kKXpTobLuKw5bZVRtqW3nsdpkiojVwVvxqG59UNK9GBLiD7hZRh9DFyAFGL6Y36nKHJWuoF7Cf7TW9xRXkrg7Wq",
  "key31": "5JTBBFXW3ugee4kxP5q4Y1uLBmgFRUY4eDZm7zwq9qJvtxrSYdn12giPLQeXj5a3qEo9VMrgCynvmCPWnJof3H9Z",
  "key32": "3oPxUERpzYRwwnr6zV5csicGtam28vMYs2okHp2ct6QH8cqAdd2yCiwujLUAX6AQVP8HX3jywuT2khYt9RuHkrA3",
  "key33": "5YagLBvhJM8seQS4wUzm5gCCBifyRQfwVsq5Koi9L9UdzrKhZJacmZu1XtA1xkayV79uAeFuBKcbYzBGELvjRm12",
  "key34": "4ZoTPzvDhH7Bjh9dLVRjye3aXudEGKhttrtppdsr8RivoE5pF5JgQ5pQmmdZQ9Kd8VvwnJ9tEarJuyRmovn5k2q2",
  "key35": "5fgX5ZEiqnCGeyb3ePNUQnrCuyJ1YsGtyQAFb5q9H7JvodA8Yk9p5es64CnMbCUeiTYkMS4Z4ULpWLg3S2D3JfiW",
  "key36": "3YTY8bfY1n7c2NC25MespbFySaiJb7m5fg88bSakttU4eiNFpNMRqsvgNuvenGfpZn2bnGJGTbGwYnzwDK6c2YEb",
  "key37": "5HTXVfWRPmGJkSgGLD5U1ssgGRjHZ3NG4KaZtfkpAnxMpqTKdUKMBZybEc1t5bcGYAb2PpbUw41uXBR74j7FVHih",
  "key38": "3hZfU6wpVN4sXEpAE6rsyiXqDT6uNF5WXTJCmcVrqfQ3ahLGs9XtrDNw1VDwahbCJU3ukyrPdqSgxPD8CyAjW1pH",
  "key39": "5dK1nui7vvWaa7X6Ba7JFCySdCSThfW3qNKfCfcGZSrqnHL6NqrEzZghwCKoNmRSF8XukYe4rhprYuaFVvB3hgdv",
  "key40": "3ZisTiE5B7CuAGupDuKHbVBchH9vsXRiL86KAuHtZjWvjQTm4PkHnHrGZbiMbWbpVWoNKogrNNFimwbzuprUZ6ob",
  "key41": "5S2pzdZBTuX3RxUuNiBxvWzz9QLM4tyhLUUsXndZEnDL1qJqBBcEzNFF8rDqYTAKDzxwj5RKLtivF2XNtM9tMrvz",
  "key42": "9GtyqnF7rvKfvKyrzGHf3JL42LP1x1UstgToWVy9eYMyZK15mQBctpH6syRmrjb6DcTU8pTkjncvpq4KvVQGFEU",
  "key43": "34HnwMB6G3FfYJXTZbk9KA3SbnsbSP5RvngktFRmLrpm7T15CtTVMiG1rEG4p7BNaSR3tBWMZc1S7bZTx2pzt8aN",
  "key44": "4uSZFrJXfrXVUN5iKYHF2LVYZ7XFhDFKKR9Gov41XNHkYwtZJjvGhsmLKW7qz2c94pRJgGYWLARDCRE3G8vCXn9f",
  "key45": "3biBXiHku3ft87qEMkBC5kfAGYBUywYvVRpVG2irTKFXNjk2j6U9WiAFYPDogDaZJLrE1umCJfwwq3jpxZ9otbog",
  "key46": "5C6jDWQHvh5ToLrm76rePyJA33NbN17P6PXxZeu8biQCGhFmvXGYkHMjjusQwTSstmRpUU5xTfnQFrzs9txBp9vK",
  "key47": "5D7xQ4rnSUDNGJ51o3SmtdGwyUxgyxvxm6juvhHQ9VvxwhgGf9Ld8HxK5iuMaEsWT8YWQAe1az4iSbDFYXo7uJZD",
  "key48": "2Frm5yXx6CxhB7djxsQaXHsJWDPUtEU4zyp9Suq3ggJ4aKRgVbYp1SQGAtXNvQM8SHR3uDUkyaKmyY2LKNhjTgQf",
  "key49": "5KKrM4Xmo3cNM58tdP2PHPgUxgb5ajPjbvxpfzJtNSDKKZTC45gmVv38W3RnXkbUcYrDtEiWP8Xp4ea8gU18X9GE"
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
