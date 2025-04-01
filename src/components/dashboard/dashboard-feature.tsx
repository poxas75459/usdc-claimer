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
    "39TLa8xVgga22VgzW3195nREjmCAf7GxDjW996wTHEsZeeZ11J3aM6nYWDAHgakKHuduMCe9JS3G5Xx1jPSWdXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhCS5Kz9SNJAXkgN5KarEAn3JhHLqkEd4WYYKSdZmygVNwXQSyHxQgABvkfsYjJG5KeG7SVZcLzs4Y6TZ9vq4va",
  "key1": "4wC9NLxaYTt7FGRge3ZH1feS1qfXRm2rpkhNHG2CcNhwjJG4vzPfDxsaLoq4MC7bvprqYEikiarvFcuP7tL9QiCU",
  "key2": "5hp3atvPwP3Bjvkw7D2LBpbnVLTbqPTXcZNfqnDwh9qhCAASHdX2Z2FUNmzuHccoWMi7DieSHGkJyH3nA93xvqZu",
  "key3": "4ugDB7QRw12ryf6LCPV9TK6mbJgNPxs6iDXrzXUVmNfDZpP5xVa5pYGpSK17tVEhzk8R8wfFMsL7WQSrsvgGHx34",
  "key4": "5BKBE5ov55mtyFfsqDekD993mdzAkj6F9jTiibU6mXXBskDX2F18BHhWJzJipVjw9ufTn1PBsUYrzFr2RPovqGAm",
  "key5": "4XRMAjzZDbA5wpgcFWTfiKajG89XiMXhJswWqkiYnStjCFT11ScSKXbVJYzSx21MKqJsA9CjcjBYv6WSR2cK26go",
  "key6": "4kudhD9WSYMnLM5bnyNBVGXRQ8UQW3hP8T4Jh31c2jq3tCTsveYJjS91x1ZhZqhQk9wW4hbeTgBPUkuKFXueN6sY",
  "key7": "5rEAwnHK1QkLVyN5DJxuzDtzpZrs6sGsqSdiSvA9RfCVpUHjCBj1fxHBWguMmdB2SeeRRqDyvy96NJ31LvcNB9g4",
  "key8": "45TaMmDuGzPpwh8fxhkomL5qNCButtZweTvRxTJirbPiw9ZvHxqUfPMDK2NwA3dviPs7A9RhkZ4cinVarDMGtBGU",
  "key9": "5BqDtGQZDfQvMokLiwuo44ExLm6dH6Xc32W6p32DLXFih1EDzrf8j7HotVj3zNrUTQDVc5nJDHWRNZNoD56DmTjV",
  "key10": "4FVTUwK2NxbQzRC7i26v4omJupncESB6aTMTXogxL5gtoDEeo5TZPrnToQkY8LKf4ViQ151vjSnXTUKWyiFvTvvF",
  "key11": "38y1BXDRuCAqLqcyBR69pJnCEG18J1sT5JHFhDE4Uf2UAdiaMWycztYPxFoNTGfUj5SQTyNhtn7Us7UbDxBwqnWF",
  "key12": "43FBnh86GtPVgPneYWZKhDbYaS4nHYyteDJWbDBukAT7ZpjPheWBZ8qN2NH7169fJcTeyS79AJAhTurrTJi2fRZT",
  "key13": "B4bLDaCJaDHYgymzqb5qD9TRX3RnJo9752rzkvxtHDscY1gpKyxTWYMniCc8AS3NsdCMwvkDa73cC3fSVeZmPRC",
  "key14": "X2UVZPgoC9cqkgUDZoH5srfgPLk4mCFio86qCePZ82UuquL1k4tyoAV5AmFYpQQ997n7mHwzr5D7uZuZBMbXTZo",
  "key15": "3fT1LNgbhPN68Tvnx66LFhu5VjVvNoBJk5xdaYZDC1ay63yDMS78pSGGe3RkQ4AJbP4ASLUKd3J8YHTz4nhX3vVL",
  "key16": "54FknC6va6iUWerqLyBSc8LpFitEPThFynuZhiP67DkEUs2NhgUmcoavPAVspKV9EXL2p53zJM174GmMCZvsWHUW",
  "key17": "2JQPKsB8XGqXZm9oGqcmrR29Z5DC1waigR9DqSwxLHi3Z5KCBPsVjChSxceX7gEb48vs9PXY1tuTziRidAdWnPMW",
  "key18": "3yJbvLU9A8fdE5yQ9B2tYnXHKUHSJZQheSxSbWbt6Z1kP9ZLLDmk4teuEmHkiknV6iodKxC1XRbGLLPuoP52tUQD",
  "key19": "ioqJsp64YtJUj2vB3wNP1tkPR9gMUfwrBap1dfeZByUoAyg4oqbYk7N2EJZxmXwetMB2deyUaS9y4JrJF6K78Hv",
  "key20": "2FYfKJH127M9yHTGqjK535QWZ9qSVoYMTxiuewD7GJxQz4omCnW8yhn9utw87yDbiCz915gNW8nRCD8ftajSqXxN",
  "key21": "5WNutLyKVtB7jh6bxucjGqqTSq1cHMNFwb1PsbXKqKfWgfwMW5CttjLUdtPGKa3pRgBHbaRoqDQ3MKt24UXuQtKD",
  "key22": "3kUe59yLSNkjSWqj4aGuB9wcUxfERKQYeCNMwxGzAxTmhHeDj68ytRMi51tRNFeHodo8fY8bPfn5xURYRhjki4VQ",
  "key23": "3v4XuCBLD3ecyWxGHzzUWaKaNWvLDYYGsYvde5H92CQa7hzXPUqi5ejwXLJtsVPFBk1itPNAwGFcrxfc4WNKswd9",
  "key24": "3ToTTwu2ncvTxpydQoXQ1oMHK64XmmhUQMCVCftykCLWE4Azhp7PkhTEbAikavxybW9pNjC62B5HzHDC9Uk1SmK9",
  "key25": "3HjQ3xA1F6HdC51BaMCEM6isE5s1FVir7cWEpBqgWk9KTthmC7NkgGSAUHuX8QsmtgeUMG8T8p65qS8viad7nYuQ",
  "key26": "mh6jw4J6gmDPUHKDC4HNCvuieQtvQGASUyjdoztAstshuCJ6CT17SLcn4ykTzCmtBRVnxH1omLFHFghjRgFQCnE",
  "key27": "2tcNX8FGTaY3tkjrENBkHozzZJDH1wYCoZWFXV1aoLbeYsKHNZ9K7ZUAQH6tVoxs2dTxk4QFaNwhRHi73SZXmXZq",
  "key28": "24hwMWHdfr3DVd57mVzZqMkqE4YgoydMXbZgJeYrwKm3JSzyXQZETM6APoyACpUhpZkpUhRG884KZDS6DaS8BdaU",
  "key29": "3RZpiLeUG33kGRZDqZvAWBZAscD1e1f6jzi1aESkHNFkEHgVpKu8pbaWc4ZaPGqqMQJcpgricejR6n7Qr8xmtVLG"
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
