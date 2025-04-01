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
    "4JyNK1q2yYT4qj9SLUYi3VhAnGBpLuKZS3EcJYa8xW4KmoQQkoyVmbc8QNZggsiZw1rjKcmPmWivARGqnmsBKcvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCdvZQeufcWBGcJFGHoHgmwqeLfhbMtbWdM7cBD9Us6ZfKn9HqRP4utoDYAarXUSG427CnrT3SQikz2YPdYYXFb",
  "key1": "4rq2XYdv5VFk99w8xfoxbZeFq1dvsM2osprTjQ14c64qvFQ7iV36bLdeq4u8AkDC74hdchLyWnw4ME3G92sDEaBc",
  "key2": "2PvdFRXDXT27e1b8PmRSEhfsRgPQZajYuEZ2oCDY2XBcNF6A7bgSv9ezTiyC2zc8LEEWQGjD5DXEYDbnbctsYsp2",
  "key3": "3oZbxStBWcFWbQHBNVPNomUpQXU57U6Fi2E3bQYY3JRdxsCNZBp9KFbXThRtcQKjPhh3ZZ6hEKZV1CdTumvYTyDE",
  "key4": "mef4uCEgEcxkPENQnMy16JJB6KP9y7vhmLxmjomfaatMgpFeczCmcRvmhS3H97mizJiZS5hXQ7xXXxiC55RxcYa",
  "key5": "2PpNDp1i424hmfCT4V3p2UJvK5R7kXKdrkLtQEvJV1CgDmh1HvxosPGpkb3R8ywzhnSxTmxSLwczPk5Ti1WSmtHQ",
  "key6": "QzqGoYLcAkU15MGjoJ7cbNQNSKVBBwvbuiLTyrniQNTcGLaWRpA7QJBEbL1zPJ7R2SbmqtbcRrhTJk5JMjnWdqq",
  "key7": "4y1TNjcNYLmuWDK6ordJyDHUAPmizvhDysC3jQCNF3ACMyB5WmNUtD3T4Vfp2fRdJ37kTvzeomLyfh4efvFcngdc",
  "key8": "3Z7yUFedDZpfYGjeo7u7yXUMusq3Zugb2TiKFDa75fsRyns9kAKY97bfh68uy35oMmsEoUD4FU6DuQWX1VmCGjr8",
  "key9": "35SxRrwhQHajVmHhCeCTHg1hEeBSSGE2vVJZR2TD1vBH3LrfwYwZnwwzFTNwG6R79qjHuR38g7eTMPZEphndMSxf",
  "key10": "34u1TYbCz2R62TSRtQR5DDHXQ1U1vAWXs64SuZUemr2qhUq3HkaeZdFYBSKFtdq6QjrrkzpQTDd4qzMjESwQ5ku",
  "key11": "3tneU2oi3NqmruMQWTEihbemej66pxgfT32ho6VhD1D7c3zGVZgdrzzhnrraRNgcuGjWNBsgeJdDVu469DEMcjjr",
  "key12": "5MeWm8LABYPGxZJibtkm8DV1huSE532K5AKapsGs2Ui58ggyxPg871xQccZzLmhLNTP7TtDP9M4Vpz2tHecqfS3U",
  "key13": "2gjpCWpMRvzGtxSTGHyD3Q8KhV75GZEJH5UrMKfT3TZeJ95QisGck1SWbHiYPzEpd8UC35oAHSSCA9WzmxN3S5bv",
  "key14": "5XxSJ5qd3qhdcmBKD5ezTrjXBN4ZKFEFpyzPReeuMth8YSPHzc9yMqfrg9TiqFP9d6p4w7GfnLPS2Y7HzZ6QLNLE",
  "key15": "3iN5fBLhTR7XQPeXLqbJAXMQBPmau669H9jxKRQ1ZbrV1tRNME1CW4DqRaG45EdTgmx5jnpdRnG2eG7hs9nNVJtk",
  "key16": "2eGaTcM2yFCoMCtzX1XrSKh9ycjQXNg3kRLGab6FosnvcZKAqp6S4fFtqtjPmArkyocYCHELksUk8qeb4BwHWrV5",
  "key17": "4xPxUwJRr3F7TTiQAh1SttasLK6LF3AFDjzR6CL5ndoeiSnzUACm8fnHArpvpbpEQLGxBMAWYVuuYekwVy2sXaeQ",
  "key18": "9kh7ro1LPe6nQRcsf4HQQjm7fSfaTQM4bJnxpJ7Bg7ZTkoBrLABy8BZxuxwwSbDHVHU6vgVoiBx5gLz4i4cc8gc",
  "key19": "4bKMWRZnKwCft5WjRaAHkWhBPFLVRotNU7x2QDoCVZ8UHLgL4RChts1RpxLAUNyoQFU45LFgaFuf3H2VPDDBjmNB",
  "key20": "2KCpa163D7AcdvPMGjy72YeBxhmy5BXh1rcSQQmKc3SS63ARtzukaGHwnEVaNw4rVgoUHNimgftNmpNUfXyvcTGi",
  "key21": "61h4BtTYomfyf7o1FsMy2X5suTuqFwR6UU3UP5rmFyQ5K6ASzvPHSqizqCxjzxkp9nny5CBnxDjyC4vK2DHde3WX",
  "key22": "2HMKLk3Tiogz6csYv3b7KCgMUSQeTdBJ7jgEM8jpW9wY96S4j6K1hsTFu9DnzPDA5saACzvz6Pdo6cBCDKLz9f59",
  "key23": "494KW9cgdoHFgicyXb56yfBJgUDqSFzcYpKdkfZWj7hCaBi3qUwTBqMLXm8X7Cw3t7y2Mm55mjpyLByDm2YtsG6j",
  "key24": "KsZnHDJB1DpgWMiETRTU4WDYw3unAiZHqgotE1WbAfoA7YtewL5zAqe4zmy547iHdnhCekgdWnfmQ1BPpXwp1Gp",
  "key25": "47kMYK411N29jNMZSzZbPxGUUjx1t3GLEappJx4gFrXTTWAyqkB372SmqG1FaQcww4rcNuQDXq4S5vQwEHFwfHrD",
  "key26": "3LxZngwY66kbieKLCACbjv7hdV5AXnsRoVHZtg3cnavShd5owGA5k8aGyrosyhkedpRDVhWmR3coLfcYGUxwNo6n",
  "key27": "wvZwim7NnpjB4xwCQUrKLyVJqU2nwtyeK4gmKQeDgYgWFmUa3XuE2EC4wPXG1AXnpmi67zrubn9k9zrcVnTEzwt",
  "key28": "5M3XfCunnwUHYcm9NvBrFgFREUKAN7xQ7VFskLYwAdY92PXyvj4iWwkiCLoPTob3vYzQCiUY1Z1dXeJQYFq1i6Dc",
  "key29": "53Sw7JEafS53PgJGjVEVPv12oKQZfzY2ZngX24c3Qi1Jc5zVVEMzdVA6iVj7o4wfXRweKG19TsWayARY8JnRnJtS",
  "key30": "2hCKSLRSUCmNfJR1HjBEHhNj6WPRHuAMkAyEWmBnMTGpMELisKf9VK5x9PfEsQGFTD58aPX8GQiw1qFAavWvigq9",
  "key31": "5TGzyukFvhEwAfxNQ2B6Emz1Q97H2pXrxJ3oVBTCZik1MiR6fGyRbiPEi3hGWMUXLWq687CG3D7J9tGhoordE4TU",
  "key32": "4zJU5t2coAGooYTh6bBzeGMjxkfEo2LN4PaTUmf1kum34vFwHTz6Wuoh6hJk6WPx3sJBFTXsUNiQmaFv61qpvXz3",
  "key33": "2E5ffD3BZfywsYs681kUJejwpexN5dmCa4ZuDLDx1vqT77jVvpExCAiQAwZHHFQTrUXNus55DRjCuWP7yxTMgaw1",
  "key34": "5cn2wBXYUBAuvNrXJobu8i7irjcR2is6H1V13bjREQinDjhDWvyQGoPre7shqe2eUwBqRfJjNpyUjsUdAgkHQ8Ra"
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
