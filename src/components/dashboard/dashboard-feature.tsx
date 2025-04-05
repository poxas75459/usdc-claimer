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
    "bikp7FDXHhed8PiqjW2dTSrLYcDw5pPYZHjRKqxNExsrYoW1Nst2X7uKmnXS9KfGd2ymGhKijVg7MSJWtW6T8qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z141cHR3MN3UsMJ6B8NLLvk4Eh3HRh5oEgZFF6XcrLJZm2bzvNzrgmb9ecgSxePkiQiZjtWxyZSXMJJ1TkBwM9k",
  "key1": "5r4Ux6wEcNHVQLLNSqVnNmNKzVC9aUsFLGuJJi5k2EmnRYxgzWFHKhfQj1ETGxtJ2m6MrB5TzcF52pGrMfefCtU5",
  "key2": "4oH1i4dHqZ2rNGbutxLXMEm2gUL1UVNVuAoq3NtsoiD4GhW2hV8KmB8uUMvBzjG3RwZwR4B4N3Aq9m2eNnUvZYuv",
  "key3": "5FNGEbCNf3EP9L18acFVVGodAdE6mYQ49bUXMjysqnDrvSrqdKyhCQkXP6ZVLYZ7bEA8tAkAkXYkRVVpKsCJiGCZ",
  "key4": "2oxMmktfRBnCWC3YyfL3a5modwuXty5RBfKXEoHthLK4VKsFNjE8i6PDPeBgJrSNYKRLNXRX5nJjsfkyYij1bH8e",
  "key5": "3Goc3Jxf8oNPVUSgHGW4H4ffAoj6WS25N3YPk4n9Jq9VWTJvFodMpTPJHPHDmUexhS6D3m2ZC9L5KQquxaVpdusL",
  "key6": "5HDGfRZuoSkdzAeMoBftLuQpnad6VuXHMnnMebHFNd4auw56vB91sS2wsEycPyvyQwGR8VE6XGuqkeA71eUfxx9X",
  "key7": "M6iy9oPRXaXheKMcct4Knjhchq3K3HPk6nF5E7XqjDEeZPJBgNrfvaKMT1MSjyqC5UqwF19zL8TEDUwsP9vP4uZ",
  "key8": "44xBQnq38tAoJuFBfWuYjHgLFqv7JJGSAcKQVze981XVExfkRvLFsDyg6oUQgsd7gEtKZd2EGrykycv9B4xPVRZB",
  "key9": "4aoifbppqnm6LehR83Y9Caqa9TZLN1UkhKkhAGeP83pz1ny63s3DzYAd5G2msWgkNf2PKzLwEUudgCxXQ2LzAV4S",
  "key10": "5s5SDsgUW2iRB6kWnNwUn1DW1V53frYrDhtFdBXUaz8nRfhXxucuvx4rA2VbuZjvbe9nyVt5sZmg8NLzdgFF4AUe",
  "key11": "3kP991XExTNBjJFjWiUb6zpAk3HXcE6siL9cQE8PU4EJZi3NNqajoUKJJntsTbsNu8aU3F4WLLEd5v3GScwjirZk",
  "key12": "NJLY5KEABXFVT8tYksNpicM8szEq2WpaM71XDAS25bnFZbtftFKmYQ27WBvnBDXEKYkeEwm6Q9vVX21F17jzpeq",
  "key13": "Hw9x6wJzW569dtHEMJin9MknTBw7SKs5sYhzM66ebZANQxbKwdZpwtUQ2Ap78XT2oPHzqJKVxmzYnjjMn2F2zWD",
  "key14": "E6iMQvWdPh5wfxQ5PzVQs7AYPtZGD3XscZ9piQ5FeSwRv8UQeBDU389bbdA6TtaNQ2TbSYNQjqN2d2osmDQgJ7o",
  "key15": "nvhQ7hywhu4QUFey3dhEWEFWT1YxbTdNLckYP7dzuAxA1dJTPR1vsmhWpsQr7PhL5aPi8mgUQcFLS35iGMUqPij",
  "key16": "vSnWUuNUabAiwAR5nvHsGJHK3wgmZc9DEMsqwYk3knX2kF9BtbWij9EsWgFP7ucmZR11eEzddNToRSginbWsgxS",
  "key17": "5JpabVPErHyVJb29qq3gqgKARwr1PZ8P82Rgh6LG7MZPJq3SSwY3M7FhPrxJzcMHvz6NdxCn1QiJWQ73zBdoR2mq",
  "key18": "bqwDbQpV9xNn3cqVBwCDbRc5WTpxijzS9CcvFn6WjHf6xiuXHZ7apLQCeJM8Y1G1iCGMB1HAXvgsFP2za6vAkvK",
  "key19": "58mAiQpo8K6XfBqpL33VSvVE8cnzvGpRvdh4rfbzHSi3MoR9tK4SaG9D23W9iGxAAgU2rDAVSnBHgMMAdCpnQQHK",
  "key20": "5RmDPSBmGtzX7prqYLa1HfeTBrAVpqKaUCs6FdLmviJHCgTzqz8GFH7FBtGcMYut7DA66TZoPzbNxww88dwt6mdk",
  "key21": "3yZSiue5ZDKwHP9XdBxgfR5ghFKQBJP3MnWcHbDrPnuFDJZnPMjfZeSaVsgqes2vay22LRCYMp1RsV3hBogkeEkB",
  "key22": "2PcHh8zAVXBBE3cFWvmxPx76uedsA4TsRfBFNzQg3jG69WL1AZ9dES2JdntYBNZNZChZTJDA26cbunwBQbnnr69f",
  "key23": "3zWnssPpE2kx6xdihdJXuaLBca1zj9yJ91a3xpjHTWUDdeMGnMDd2jhzYQwMQUPmo9KsJGyvT8mr3PwBSHqCGkd2",
  "key24": "25M25USjvHXKfKGPEcm5XroxfZP6AgiNC7DjVKLfVoWyeSwvgrHGjkVjgwszKpBZge81NAJQWw529Z41iA6XuhWq",
  "key25": "5r2kfYCmbzNsutECy5tbw581X6NeEm1qxCoQEXKWTHAMgCZPtxcxJbBdSKtTbdeZo67W1LbHog7WPzvrw9ksNBAN",
  "key26": "4BvdGRpjsBbKspfqgnGdYLJZhbU3ns42kti1VoA99MUdLxAjozxQ8AHg5iC7MPEqepyDk7FPELFUw7pZxFGGBSHW",
  "key27": "2MxsemxXJaaJFkaBc1WncpxXeqFANTd81PhDPSoAVkmaducxj64EeMHNA6kWjMz423bmqFXzTeRmfprEJat2GGJJ",
  "key28": "5LULaEjFU4ipfit7WqFuugZ5en1sAzQgSjyDaFvzkYRLTi3TTniuiuaLZLA45yPyq8ktHvEUt4uMfqqjv9zovFRe",
  "key29": "3ivYgdHDapkNXdVAvDtnTnnya7rNzxZzWa5C7QVnueqk8KJYCQJD2CycLW2ZxoGrDanUSdZ8Jw9xfUE8dQxuqpeD",
  "key30": "3p4SomV5XYb4NSHM6EV4woo7XfVdHvFi7V3Qr93oz7vpcnCAPcoxbmQwYUNo4kGUDPn7G7FpbDExjbTPC5aPvCkH",
  "key31": "HJ8iPWjeUE9nFbvqychU1PCvUVcUYHJNp1B3dFqYfjm15g9VjKUhsctBmb3vS5V5S8ZBXr99e1eadTw4x2DvQLK",
  "key32": "2khZAXDBwfbNkbRiAw9skNTsY71DcDYa2bebS9XGCZfVkNfmrahuV8U2dRQeaQZmNshfffseYiwkWp3aFhZg6eu7",
  "key33": "2PWiVBFGfh2k26w6EAWpJxiss781t9wnDADvRDAWpVVLYYPD79TmbaLaKByVYWA84usBRYyQfR6pnZTbgRqtWUES",
  "key34": "3gF8hxRjYKF2rpzBCGrn7sR6G8vQyfeUJhRosHMnmAEJ4VcmcT5vXsBoDJEACDzC8dRFeufkdENJicug4c9hfhZ1",
  "key35": "5ywSdngCUajGuW5FW4yHjbuwwEVY19diDeCtNk99B6bmum8foUegproFAPeWgKrGAoz4bsJjgZAAQ9A5wppA9o2r",
  "key36": "4kS6QhSWoibKw2PE9kSk3CJujS76XHuc69ymhwFuwAA2mPANRsAPn6LhraiPGRAHyxE6ayW2Pkih5X4RfSbGRPni",
  "key37": "RjSqp2RZju2PjkxU5rgBUeDiMbaUqrxGi3xZkWNKrvG5H8SoRJEHjq9Btajko7ECCrCnb2RTPTbefuJHacm8n2W",
  "key38": "3YJPWWVZrdcRFzJ1W3qRrEwimTd7btvM3DiefHuu8F2N1s5XdimfPhkNneEKaqoVfUBp5zojjHAYHuLFcuuYKSyR",
  "key39": "2FwWnAchAxL52wZD2iRavxYSaSK2LG8h63oXxGNz7wfYEFDSMKovZJEKvoWp4jr7rPKxkr1p3JwurU6145pXBQcc",
  "key40": "3oTiWYwT231wjbqZSfZdeCQszZKwvj5tU9q9PEDmSHvn6ME4YbqEF4iWDyXZj2vThwjY6QfpGEmDRoSVYkxeNiM9",
  "key41": "29s8m12Ve5FrFNqDX1cj9SQTnGgWaDXkNt7n2czyun8bkBGdkQhxhBZkiSR6KggPTfa4mGpfxhEsTf2KzpQJWYcD",
  "key42": "21KFm98oAjFKW9V8UMKw1KhPixLFnS6TEjLShcvSdjvnRoJE1Dm4knrfR6aCC2SE1kDFSdiGoQuhgWWyfZ1cNN4p",
  "key43": "UcrEt62RJxg8boQzRFWYdtKnKTfPLa5aWuG1mLqy262yteuVUz7Btd1hKFXPexg3GjP5AKwszDMghRSvLGRqLju",
  "key44": "TanVkRbCNm9a4hLKgCXrkBpfdmBgD5LT2i9auovt6h9veY4zbM4t82Ak35e8ZP4KTGMQuUQteHoacoMH4uv5Urd",
  "key45": "3J5yMJVgo88Fu1iifufdKNekLNH3RX9U11THie6xqzoCe53jt95m2rrhGqDKZ3hEqhJDf1r9xNgN5ccRpduEULi4",
  "key46": "5u2P1oEgTFMM353jcvyN89tLEvGiZZJzk82wUGJpNQWy9vEBPj85Tyu53JDt8rpG1vCsAtL1j77gWb9Bg482gsCy",
  "key47": "5GjohwgeVNsAmt69gTGasY5D9bNmrzmBmFEPn6VPZKU9fh6DQ7JwmmPEJZQkvMGRU9YoKGmyX7EBXMMRaXVxmmSJ"
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
