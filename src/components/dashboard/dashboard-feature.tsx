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
    "5UNhQLDvCF5prm1ReeN5VEeeh5BN5j5fHCsHHHXoVJWUdqAFuGLpeoRyEVKJ1WcdmTEuYVFuqrpLbXVBYEm6uaBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S6sKuvPnSnFgKd5SZyGCbdqDzadNwXR7dz7H1mfZX8idBdEmUXEvXkewXp8CrwSmsAbS3bxLQrGLRzHFHkFwFQe",
  "key1": "3hq2QXdWTFeTsN139WkzqVJTLzrjC6z2jmp79SJb7U2kWnZcGK6dVLN2ioL7SQyGAe46P4MCJy1mjteFUY7zvsWq",
  "key2": "3sfBqFrg3CSTHmFHzLSneYmjd1DqmzuztARbFkjXYhWkGKKm7s2q4Wr5WYrPbmCuLvBeq4LXs3Hxn64FEL2nPXbX",
  "key3": "5d7wT2vedRBvPVBKoNhbtMNgPyZygr2cYz46jXkdnhGQnoYrDePBbh7WwAqqg9BTCqhN5qtTtsRGGEbyLdCPjTdx",
  "key4": "4DySpW7mVzeaUwpicBbULf57TVyms7AM7zBSX7MbGnLu142XLYxTf5xLNQczH1UmhaQYUJYsgVJtUERSTDfD7mvb",
  "key5": "5ax1DCktWNM8Foi759nQa7fs1rooXvgXB2qP5ybRuts7UBGTUWydX5C9Y6x5jrWigrbr2Up8VqLKg1U4mRYKu5U5",
  "key6": "2odzZD3WVcyXeA8AyHmkudVa7RSqrFyY61RHSQbprXNYuU4oUXS2PtoPauwYnVQ1KKoRCqF9AVHQxbMqMsYWtDs9",
  "key7": "3peXwS4xLUZZewMLjzk73AeMEg2av1TaGN4SJvtsSemikvnjLXZZaykfmRAT84Y3rUnDDUaoi28qcozLSdLgJEgk",
  "key8": "3uqzkMYFxcDQKwJvPArs2BajrFV5r9EKSTASB1kpBjtzG2CfxFEKxUR6gfMZpxTC2GXKhMqj5ANJSanHC7a9Dg79",
  "key9": "fAPWEAshigB8Gv8Kza1YRtw297GgCFip2bvcrdA7J84YEz1Wa8NNMD5GqDqKJXXDDq7wnQ1JXbNdYX5AxnVt8JC",
  "key10": "588Cjvbb5hRdbkThBXCftoEeg8fppgRyvcB5j5TgcfTNCB8amCqAHdTZLv2uh4FiwfFs9xNhyiWG5Zo8vBuPs1fP",
  "key11": "4vKWZGvPRdBpNUUv6g8oWjL4rG6r8C8Q3Qy6hEcGR7rhMqCwQQYq1QN825e5Rf2q91BmHQGALVio16d6LQvmxbQm",
  "key12": "3rcJgFGGjthN9Bjiqo491veRgDysoSKQ9SoyMLXVy8KXPxH8HKUv1aV7k7XfUiDrwBsGusRWoC1WYoRoJJtqaSeJ",
  "key13": "4xzjAyJxJybHEGxYSQA14GSUtMRGTrBJircJn1NLseWMYviMCT8n3pdHtHqorpWYdWMdnabdy4ircxsWkPsJnHmj",
  "key14": "21GNotccKqWnP5iUQCYSfSr3GWctdHmMKyKHEcY1uFrkDYeHqgVF4AQrEVfBpSyrhUMNybbY4W33VfDptr42dH3g",
  "key15": "3YuTYko2CSqW81n23bnRBCMvLD6Q3Zb8nMJcmrqJwqBVqkYjriGSYz9S1afMv2wuCSsXfGu1LUDDk2mE3WXKjgyB",
  "key16": "YkxVEhVbowka4ryVXjtSndUFrdiancG91EZox9J1ZpfQvwwNfZPp7hLEoBmrpQfuVTJfjJJA25N2UyPExEoj4Rc",
  "key17": "5YkFzMynLibaMQttbBpoBNZc449osZXTeAjnHUMDUqgtYeK77pTHMFBRSoAZaozc82Q9Vhqx1EgxjCs38Kic884N",
  "key18": "52UsCfF4zbVitvenXQnsgbjQBTxcCQFNV4wyvX2pkjKjYkUoz5qihV7Rk8HchVJu3hBFFNWHUvdvzT4LQpn574Qx",
  "key19": "48VKivQ3rTYLkYHSpUGYtJkKea35sCM9Hwk7o4uHVFqsxhRzBPy38BYNXjiGfpwTtniBvd63ocHtx8uwmVLJCGoe",
  "key20": "4VYhhtrNi3s6ypdjRFEZSpgkY5MeuJ2XumUTTGw1Fe2sDB3PtBDTyHSN965eXqrYgNxYs1Ghc3f381jBeaV2ah6h",
  "key21": "33KnsHaxKnk9VgVMnu6xijKKx4NS6vZ7X4PNj5AsHUsPKJjUdEtQQd6xDFFq3zwdrHNNR2CpFhhNkQ3PHmeAQDHT",
  "key22": "4Q1WuzMYC4QLf9UchbXZE52maNAL1irdVDbG2zMypaG61hTkza8GrnvitJs6YtU7XSu8hbwPaqiDSLFYQJPhx7bc",
  "key23": "3tjAuWHjdqszVWgbZiTiS3qjnxcYmtmCzXk5inxuXdpCgkVFjatfQGj6oH2FqmiSxUvtZpWMN6kQHT9qbUgyLepg",
  "key24": "4vUfraDDBuFQjEDVy3Pbi4ydkyTvu7np4h28f7wasZ4WT1JT9FYrXu4upRm5Wi8DKSdVXAFTi8HawrLZ97G9ZriQ",
  "key25": "5DhCKX8PBfrZT6mRBBNVExDLhejs2q7WfHtqbaojYxua1mcPw7SQCmGidEMEnKhKp5vbedHpLvSx4sdYoCbmi1DH",
  "key26": "5rZzVjDfVKW4CFQPaCMJXwYiAicW5UEeKzKDfgZ92QJ9f1dkkW3ECy2HtNGAFHMHvHYTw6zYjijwMNmsAuzeTiBP",
  "key27": "MNcwXLLQKzkKu1iXhQn97Ubfe4nEMLRjibhPoMgtnbHSzXhq9oREEtFjvcfrzRq3WtN8ZsamRz7eX87UQQRDG8D",
  "key28": "i3Z2eXtdhd9eZk4aZbnf8EifRV1NyikWo8z6WMrZyWQN7SSGMk9fbwowuzeo7F6bBNUrKc1dvN9ZN8QaF7Duk4N",
  "key29": "4bP8TrWGkgWV4Qkh25U4iq9Yce69hxKUShLdKoZ3aCFpq1zdHUQmBPQNDqJs17tzzB4vh5MJQcWHVX6EA3U6sX7a",
  "key30": "Auc1G72qHNqr7NpzXjNBs238gEZmPcpvFYDAu7oqBSMxt8VGK3qhCxRzxM5TtyLbicgcrEbHtQvHt8QRWNfnzEq",
  "key31": "5WLY6agvAfBeDyyMcbY7pvyHdKcWdCGNPkBdF2Esf1HjULpQrRpKxQjULwcSE3UDkgDBpYahcDLhrnJ3NryPAdW5",
  "key32": "5bCEdDUtLtzhNH6KJZ3vFNwGmxAffwGuBZH3E64Dt4nbR5g8frqk3937XcW5tQBxKyKp2Rda916dE64VA8rLHh9s",
  "key33": "57YA8gHtds8rx7Wy5YqCjWxb3ngdcNinuop22iRoKbQJprMPJ4hswxgyzxNULfLPdbAeRoLyqxuYazmsfZxrVokH",
  "key34": "5H7VHxxTkvKHP8HuKodMUvJ7wzTQHZ6JhknYM2MZp6wPk8fhMHM3UhYeFgwbNoH8en8KNauaJNSsz2rFAyL6rhXU",
  "key35": "5mtNRrd11FMeFRD6c1fTjedeEkcjo582QBqj3JWxsuFWvkqHcCeeUgJLgx6NdWU8ujEHueqT4WsYGzbqkGvZJfiS",
  "key36": "2cqEWMVn495dHZs9Q21gVdtogxSzMdDNnjTG6EpUhfgstqWJydTsVpoQnopRXFFTan33jRCcFRBH7csYfKe4tRFE"
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
