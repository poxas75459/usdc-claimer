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
    "VCw7ZuKs4FDagsyhFRGZbWTgu2bcP4NFkXd5kLa5bbiyZGx6nui6FSykrJvm19kNZ664hD3bjQQ2qvNB52PFxFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51er95Rm9jnF127Xpbz18P3oGUAqoinaLeFta1zEXG1baA3zHstMGPvNKbUwjDjEu8KiXMhiTzQcpTZgKH7Z8t44",
  "key1": "2qpsjohuNSyv4mjZvaXUTVqFQ11Q4gb4wovR42cBoewu61XX9haQWkT7mcwSFwnHRk8JpVQM7j15Vz4umMCe19ra",
  "key2": "3gjaZjxjMJNhXLJXCrPbkZVbcqQvRnP6Jo2zTVacwXS3wXYbyoW4Exrn747xEot732Na7VaigrjJnpgjP4ZQHUB7",
  "key3": "27sfB6xUJWiB3DGUsxeDvzXh7ZiYKYMjuCccrtDVcmZ6MJW9Laa9z6pJZaMr6Q9sHfnmyvyt5UTcQkpjSpGinP5m",
  "key4": "5wmumjGA5fvPKcJ3iAiiZ1z6ewEme8ka7u2DQNUfBmE991ozyFHWSJife3LbQKrzQ3PgWZYj3SrXtfrP7ZcEiH4R",
  "key5": "ExJ4hjttb3z2RgK1ohZYRp3EucHXJhWZqteuqE1836h4AEG3MFCPtYCYk4NXZWUfmbcjHwBus5i2sy85WKk6bom",
  "key6": "EDCgefrT1oHWm1zYGZTBum3KpX2EmUcTrwCKnLFhTdxeA517DUsEB874PydTeZFoSJzf9Qja5KjkJivAjvVH7EL",
  "key7": "RBchLRqhbW5hcCQQG8yCwCFWgbHdmyhTyTrE6E3tCgyLLQsxbVLge4gJJ2ijWQN9vvkhxJ3xgzPQs2SreFU81tS",
  "key8": "cPjN1HLeQjLGUPQuqV4PJsNHBkhW6cypZ2kCcdgnokUYsrPrcpb15TfeGvLjF3QXeJ17UB62tzUxEhbdpynAUow",
  "key9": "3mao56xAJy9rRmvk8VKWXGvvJqi76wjuevd7VQ6UfXwDEvusgbL7zBcZZie5DyyYnRNwniijihY2kWEg4USWioFU",
  "key10": "29uKbNM3ECHjErHdL4uS5jYjNexEZqp6uBrqVZuRC8S7gA8yfaC9TTKMcZ7XNbkjtpMc1MekiPgSSDMiBo9LCUw1",
  "key11": "h5wcG72WSkJ3qZbQQkWNG6nbaNF38T2d8HCDtK7tt5hySjhWtxYXy7bokJ1rFoSk2xDGJQkiSnPhhnzvR52mnop",
  "key12": "3Dn4PeJ8GtzEXqCye4u6MPshmXkKdY5KdVqFB24PYi1tHDPijDWSJ3UskWrmDV93ULa5YVw9gbTSfSkf74SGEJV8",
  "key13": "2rM5Mo15ajdbdopx49DyNAmz8KUELMumaNHZj9K6ZnimmY6VPxp1vWmdYpa6peHdRykn5qDmUYYwyGd7ZKwo57Sz",
  "key14": "2WStXQWXuBtHPQ4bvHSfi47XdNYFDuXFLGfA8aWyG17qH3HnN2nxHKJMCHm7LyiejCcykCmrNGFDnLMEHdxoTNfo",
  "key15": "3BdjKKgoZXYayZNSqCg827UKmaah12o2z7zYjYtHwoLbDV9J7RTvKYrtheS6omQaaPTZxK57NEthGXuDPeyugvgy",
  "key16": "5jdtcnASGwcqAPSL6MnZkBRynoHdXRBFFzupRzHt1x6PWjqMS73z6vm2kNDDeGV8pnop99sZxXgPJGyWzEEFBcDe",
  "key17": "4kraLEtmTvFjawrfcAjhkcH474eH2cUXYEEgEDEcwM2gDxJfke6fMf7kjd7CJZaurZvid2aJdEzy8YWNfUe164oP",
  "key18": "5AJKph6uSwbJF3ZMnFaRkiSXC6zLa1crQymYJ9FRaZ7EsFEheo4jmRw1rrEW9L7EaKMN2BPHTDABoV9Mpks9rond",
  "key19": "jedkJmQU6XD9Swgiipz49D8YgFwcrrJ5tAQx3HHUkLU7npug4BMNMB7Y8Q3NHPCTAi9tvMpMj764m8ZnpGMaBBo",
  "key20": "HD9MXgko8XMeNN6hue1uwhHB6wbKJUzZZ6oGfKwt6ARZfZqYRdQHWtZ74Y44PYQreSASjJ81ktGkf7JUhPffFGx",
  "key21": "2HF2oChQHt5GTSmYFoWyKRrE5Z6xERKYwRizGh1N5Kxf25CY42DTs8A6bADC1TzutrbykBrrYPXbVAg5FNZHKCDJ",
  "key22": "5gbguNsUhqMwLYr4sUqeUaUvmaCHjvF9WQdGeuKQkpLJFfa4gRKSjpEYdszUoJCyV8sgDHhAtfvATyycF7ChXvVw",
  "key23": "2Cb9Qztn1kAKLc2a1acq1qz8Ru7zo5G7etwaeEjY4nVgzEWRCPuPX9xJ3cgEYY3Cj18yiubAmssZ7gkYU1pjfeXY",
  "key24": "5HC5wyMZ4MRDgFMShaeQHNvcbvCQfqvEVttkatk5jCH9XNEuPbSdPcAvD4WnpvNDSvmP9RSeoyuau1mUEKdq9biH",
  "key25": "4Fa8hnTZHtZ11KoUfipTZMBbUPfyvhAbmeSNMrMaMw7RZPFXUepesqqN6bek9YxE1cSYFfyE2aXpC4iyjXHafQsr",
  "key26": "jQ3n4UjbQ7Pg99FvSJaUKnvXXeKJgpLB6UgmiM8bd65vXKB6ddhxAKmcGYnnuTFcSjELqqbL3FPJRP7xraqVd4s",
  "key27": "4j9uneQHNtvPiGnkZP2hT46VG8YeadXDLqxkMqjRDBH3V38uKaHfKKR4w2vg7A7B3NygR5yk6iiMDzX3VmN6sqQv",
  "key28": "52ndbcAU8ZSgKNPSptXAMst6fsSiBwnhxa8ZGP3eDG7h4gQjrYJxBE6h5xuPUdAAjaXJnwAK5bzKgqDvCenrbdUF",
  "key29": "2unS1XerWVRzzWbsGfW7korvbCRab7QFGgv5i2QTr2fhRPhznwjnasYpSGoh1xACipJ2HMZwkRaXGMws3aU9cYS4",
  "key30": "4g1pTEHeSLzLUhS8sabzos1yz9tBUJEDxPrGyhApSscYgNgt5tUJ4zbypQ3yosK3rZDK4YrqhSGdEX3CvNNY4cU9",
  "key31": "56h4gwf6DqYRrUUXK3E35jWR3xxZ3dJPVw2wDQqEu8zsAn3xPQ2mK8vhAzbJynikkLJ1k1rUjrRYE3vmAr1Sgsa7",
  "key32": "ntSYbScwDUcQbsk52ufnAsg2ooQstoxHn7FJwgKHr2aH57dM8feSzrdSgbTXFKzxzWmoGpsTiyL74QxWGCuvLFY",
  "key33": "4mBk97J5UkYvvizGd2SQv8w4Q7dBrPwduQcVnCPs1N8hwvDUU3ooxfL3XPnDsbBqgMXCNQCPXwuwhbEQAXaKjKNL",
  "key34": "4986mR17LN3hLW7GwjH7BNZAsCxRV2hKF9upX8zE7Feqz1PBeUe4qNL9Ssy5S9H1jKQE7W8LNtp9FopEkiXUiSWo"
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
