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
    "oXPsay7VTK3Adumsc3nGZBtwXpt7vKUT6ur51X9grKAvxLsF2PeDyP8BhuzUevya5yRqN5WxoCeHBYmX2kvrhVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVVChfkJ8LGptCtjeAFMisQAxqqThwKirfN59SePWAtWyUtzoeeuqZEVE75ewZwCmW5Xsbw5xUwUNnYQXExoK7a",
  "key1": "4beojx4pSneSHdhSL8CjstTGtx4SVPZskxRYTgGfopgFAWD3uahsx4JuC1zmqA92AERNnRFudajoJSPeFYiQD8GM",
  "key2": "5pa1qAUDGmt8QHMGBmhFWF5enHSHqxUoxfnkvVaXBZZitwxsustkUjkvUmkNtpUQ1KW2KthaXBnatdwdBLLy4TN9",
  "key3": "42fKgyFyUG83XQPQ5FYp14NjxNu5PokJGL5bW52dMYPUokSztqi9sRLtxuPsKKPgGSVnUkRfsbxtJEJMcqGhikS1",
  "key4": "4nSgP5Gmg8Bam6gyurBTEw3xuk23kdh4h24QsFf2sSQtMp4U5SuJQLM57CL1h5rYoLJ6yFf4MS3UV9RMqoHnp8Qi",
  "key5": "dkWfPrA5NjUqE71KRDdUzrVhakcHwAcwzSLMiUwqEzarE9reYgwK7PY6JSfHLCgNqPsJoxEpFYSukM1paW7VDJM",
  "key6": "h6pCbbkqeEX8aMkiQkrVYmTqGBC5j9YDN5YBaYMTraKCPjNMJPe9wAZGvhbgravdppofnC6G4a4KCLbFV2XUvko",
  "key7": "2rsLhBGRCGVV661CF7rJfRk6kWEUd4tDLC39ZtkHqDtrA1YJvXvL1gMvJy8xf6eSn44nT4CLCdYYf9yQKSBYovwB",
  "key8": "55643zmRUHFz7N8hX3fcZD9RideX4pzC3QKkphz1pEhni23Dgsp9H1B3JkWwGmDVq1Eb5hzMYTm8WX2mSQHczbkA",
  "key9": "2foKxrgAeXHMUtKxHBEMakAKYL8z7CcL88mVX9rPuL7XAcjqVu2cEEKJ8f7s2LSFRpRqdXXndH6FCVqMoqQPLshM",
  "key10": "3qirsfyyp46hWsWUX36Bh6QH9YyruiT9DPXq4nbd3tNQcamfF2JqwZf4gQYrA8ZCDr49m3kaPfQmdNyTyYyJc2iE",
  "key11": "2Xkc5mTfDXEVSQh9ajYwXxSVc5C9nK3czZwcJ9HDJ7B3gEnyVzWMMmqhdAhibHcEGrCjGt3VxjWd4fDWtSpAWU3a",
  "key12": "EdertP5Ap5KqZzyf7aqRUTUzL5yvfY95xsBzYnwvtomLLUC4AXBo5MVRqqhAVh3Jxkvs4s7dPjRXUrSyW9YTC9A",
  "key13": "5ooTcWmmFyWs4GeBoPgq3qEoiNvDwQewFwMi8hMZfB6gZA7tYpuPmwLvvagervNgjzrLpcdKuFzZi69ZBZYwh7Wk",
  "key14": "sxLUKZT4vArSZNJWcn2z7gBb7cuc2pWuAa9woi7fhQL6gm8PPW7LUkhmL8sq7Jo5kYmAKfK2ac3iuX4Fhnh3fWY",
  "key15": "5f8pSK9FAbsnZeNy1SAv5zHfX8PC7fxAcNdtX31xRT9MK66mpyDCZdfhTrAA1L7eaCzx9MTj1uJNLNbpAVv6aACR",
  "key16": "22PYgxn5WbWvjnBNrEcE1Tjmb8zSgeWQFs7QdNgbdwu92u8rXYbRaQ51po1ant7DQSj6sW2C2pW5uDkEcyjfx433",
  "key17": "2yR8WxbgTDMdj94LWmJPi4pCUDWSw9879sRaotQqDuiwrk5yZhB8nntyeN6VKohD2nGk1DQFnsVXi8p4WZXPV4rQ",
  "key18": "2K7XWhLJFQQE35q3AgRmtXYfgC8YbiTdEigWfB61zgyNDk2FzXUKY1jb87mTgyQGifTsRJmxXW47jUaTvpGAs1Wy",
  "key19": "2WHCNzP9Rfr6SEAGsVG3U11YAxqnCcySUwi5CzVSeJrxTtgGACcMHqh8PoiHyKx7ojpqcAqiHwnieySLxJSXUriU",
  "key20": "2wSCVYbRpwzgBrvd79uue4uzjCJ1e65AvVTAY4atAwxUHYhpTCjK7TQbDHto548K1yT6n3gFK23A4PfMb5aMmd4n",
  "key21": "5ssjxUqMRK5Ztsxffz6CktcB6jsK9imL3zN42dwsgTkWeT5YroUo8V3joLNYXV628ejAR7ZajJu9Zw27WGKjF4e",
  "key22": "3YPmZJVQVk7RA5mgyosLC7HrKRUWRuphcRBin8Ck7jbmvEeqp4K22HuXZAjSwDVMCbDvGHkbUc4ngWZNE7AYGycN",
  "key23": "5Ftg5ALqHMESGfq4YtUYZQtWzzJRv4hrSkEDWPDfe4DkHy8R9y6Ri4eVm4dKsY8D53yUsnnyYSMSkHvNSwtCRWvc",
  "key24": "2DF1n6RfDGimWnGTo8h21h2batePE3qxa9HyxsnXx6KtsRacPNNvxMxWjH9c15USfhEYeWSYqDr9HQ9g8FFACpRx",
  "key25": "58i9b4efCzzx3FRNxvawtQCoCVNhCh5m15e7xp6UPeEUad3RkGreMMd4FLndW8LJMh8R8Ax9iBr1WHQaTTkRmgwG",
  "key26": "TTnhxJgLRWYQ6cfzLAC3cu361suUFkr7xeBmqwxiV3B5BNyVzqj67GAKZZXTVBz9Pdibgc2VLf5aJUqhMHFHVSY",
  "key27": "prmxMmjmFQUaGLcCNGZGqHM9x7uJtjPHfXhD5XA3gmUY3tBPdcaTJnDyiYho2jPBJc4Vuh3xom5EahahyYiUpCq",
  "key28": "5vCydF2fjMLxrEmqq7TsR4y6mzPoWytJHpcN22AxiPYDBq2r43KKVrxUh5EuiuqhwTwU6YyUDrWJ1HRZHQsFQbkC",
  "key29": "5DLqzpZAGF1N23MytihTT3u5sDcLVWrnobRKvGUm2C7ebvKbocyagK8Vjw1mxsykCVpBB5oDAno1iGxZVvKiqAtM",
  "key30": "g5NyC9FVRfS4zhzQ2PFDyBGEmX7pdpoPv84SCoPy9PGzMA3Z2tbc5h22zG7KwGRHJ3HnmjratPFYC92rqMQUkzj",
  "key31": "2YvbkzvAUi1hxS9hE4b5B38Exzeyz4f1bXCesZLsLR2YLf7vouvbgJd5dSz91ZYrsj7kE3wA3am3eEi7cjSiR7Mu",
  "key32": "3YvPMxdBLWjPzWF5kfocgftdmyokjGMpP2eMJPC9tgge65aTUyQwGHUkZ5WsveZgxgbrcKh5649PeMVQEUFJ4kL6",
  "key33": "4iorxDpKcPUH9TcLZv7ynccKrciBiuJDLJ3SfqbKRUFuezwu5wY3cMbKtmE5NYhve895d8LWV1UvkVVvc2YLL3Dz",
  "key34": "5uYzT6YzkeFcNJcSRVvuhcbCnpoz2JqEpXEVR9yiSwJdbia8rQjJxcmwLQ5in5FpQMSdKixPua5XFjC4oz49UCR8",
  "key35": "2a8SofQYXGpfKqZmZU8bf4pVq3mFdYRaxKM5iiqkyBri5TCjFHQAeYAwftMijvDTMVnJ82KihSu7vbGcTqvZ8iKF",
  "key36": "wJW5ioSikomDH7jnm1ebnjauE3TUo7GhPLdRULQER9qqbF6syybebxiauj8j9PyenaNna1b5kVjV7Jzo38N1WdQ",
  "key37": "3h75AMYRmg34SXvjzhCJReAwR7y5AjvCnJcWDnR1yUD2gQZAeNFzswXJdSgTnzNLvgzeM5qVQ6KyVJnqxPfHkbbt",
  "key38": "SzNR9LcdqbWKgQaukpaWyWKk3J8omYqmx31tgBS6iVmUWqrsgBexVraBXumHJdHuNkFBDscatJEk14HFUS1SPfz",
  "key39": "4tu5zLiUsJwmFno38NRSz6toujWTVpUaKbfUDZ7Wb3FMbQbqxam6ZeNV7NewyiqfxHbGeQhNJfjpjFFa2xtaMrqW",
  "key40": "3hHXoZPEVSwAC5T9xoUy9Vxqe5c58pmSKmanG7eYQroQ97ouUQvBrPFGJinJpopB7gWAXMBbqjktFDnUHyayGTbb",
  "key41": "5V6uBUNaXq3ApuFf6nyrE1T8JE5dxegxvjHkaJVGdUS7NPNgQGjdV8pDrWNzPW7zDbn4c4fCZVA9hkvnmWjz2U7a",
  "key42": "1GYHjk45qinpyxzUREc4spaji3fwZP2z5bg5hNdC2vNCpvDZR8yYgfoUKRzH5rELpf5XZKp8cbAKxz3129mLabH",
  "key43": "5Rtcv5eKL6b1phsvWJfKkDJem1cTjYmpnY2PQQYJ2rgnLAP229r2tR4WStVT97CHWiYcMKLV6AN3ibuvzRBinw52",
  "key44": "4FkwNxJQBZ3gafyr75KtJFjnffkEfguTAUy8dBnVCVvfxSGhS179X1Vx7rLJYFgugnxpxvGhCGKRTyHqT6bhcBUe",
  "key45": "61upZRxVGLCLzJiXvqwmKh96srcH2gx1uvM9MzCU4mXPm7Kb537Gx4XRfWKn8wKABEocP2ULEGxSa96p65WvSrEM",
  "key46": "2VcUqpLXayeKrc5bVx7fFLhCBP924LvBA3i35dZowuVHfx7igw5qsqB43eQeyj76SXnBDxA6tDaw4HjKCUs95SUd"
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
