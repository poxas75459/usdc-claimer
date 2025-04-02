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
    "3VgMGEyjVs6vSGbZvgLeDwPtLygMWFKtvouaUW4tuCRbsAA5k4J8KMzN1RFqfrQtbgJwzzRY5vkwMFaUSAFTbnnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXbDawxmTurmR11kJSqH9xK7otAE4FowmidVRYfszT3uc2ta8RQJpjhXYmmyeLA92nnUe2qMN2ZtzPjWN6jZREL",
  "key1": "67V1xcscKCriigts6ukcZDh9SBUgmS26wjTD3KohF2etHUCz5utm4djE76eJtrqrjdiZhoW4Yy66ECSdzTZDFNfT",
  "key2": "4mLbErm2i2AShf52R1tp632UUCPvXAQrYxemEo7yVgHrinmrHYmKZX2VrdEAKTF26vz95YUeri74QRZapjCNWpN8",
  "key3": "QZdmtTGpmASgvwXJ3MBodq7FwfUxwmL6YERPZGTALB91uiFyzoYz9NioEauaKwG3Ta2M4c4Qf66Vh5qhbFK4qfD",
  "key4": "5gE7ecqX6XKeFP2FVhVzaabraDJWnGPaxy3VLTcqRqWPbcXk5XJC9ySRsrqBKUsCNJsd5wYgsPsbjNQKWmQSphwn",
  "key5": "3uT6pMcXj3zL91mT6pc83dKf7EYQAJPya12xz3Fjbu19HnknxdzvUVridemdPrwo4wDd5Fmun9DHLMmcDUYqsFYp",
  "key6": "3t6EDU2nazjVW7dJSK1JwSmUbEUFcB5qSjLPZEEj4igxTxAMB6fnewJzjf2Rzvo88jQSkxxJDLU6wNHVy4REnoMs",
  "key7": "3WavQtjviBLmo83M7ewGTHPPkmghQE1gYLuy6AJ83x1UZxfKrHRBXtXaR9vuNoG2fXmsZN7ArkYkv4LtdCNnvBCy",
  "key8": "4YgH4GESncGmjiFcpLohP4gYGnEXbSmcz1BpV1qiRKk35LNoJeK3wgYkjZX5JzUV7vCFNGt1QUZkqLjyzXTZcV2N",
  "key9": "wAhoNFahGgsyqfTLR8JinHf6rbDaGgAPfgbVPBigQWZjzKXwRXkgLYcyDKCTwCk7YmDBDHqKzxXxpkjoJG9BaGs",
  "key10": "5y4NP1dij6kxKgbbFqaGWXGdyqSGEGChAAxb9dCPiSKNBZ12eb3GX6DDwXn1KHtFQsTzHcQWiogAJJC5HDmhyu26",
  "key11": "3z7syHfNQ41qKxV9JM2kaDZf1Fm5Xo2oNk2XnLDJZFxBQ5W8wFkE3erCsxixpCQyTiNgMCnQmmx6enpJVTU49WEF",
  "key12": "563SFq5aFSqiuTpvMQjkgmo19CRJn7SJ443VtzZ6qzxExq2fa5f229XgnDQ8S9cYzBXVHC3nfRni5hs1ZT7ThNHj",
  "key13": "2ZLKvqHR5zMTS6MAGUaSouRaDCNrSDAJ95rhCUepiyzpjLmsyATyw5ffkxmYNT7hGfRUk6f2VxnUxGpsLto42Gx1",
  "key14": "2C7LEFkgD1JwWnsVZHeX6bvgtEhQCzvTuJaKojBoxmwCbC4m1WoZM8KwmrSkJiq4fsRJQtiJAda3psBxNLCuWTwZ",
  "key15": "ticdsD7iLBtkSiG6VYxctyZXFiGos4iS3ENUnTRxWj3oSpGceNAzPyk6KnUDxfPD7wvRk8RXgBS44bRenpe7ySD",
  "key16": "5a4VGfD2iai5UEV4QoFt6r7yJG2WWtQcLpPwha9FL12XaKwvzvNNG6wzxsJgVGVM8RhjotsmthHto8yjf29XjKji",
  "key17": "5dZWwgBN5c9ih9zrjrrRn5CnQe9EKBZ2usX4taVW4va4CDV3XQx1gTw7iXWugx1MEs9gYwkjncRC5EaSJGaAAYxy",
  "key18": "5NC6zynUNBBE7PhDMz66ytQdJbjMN1gwFLd7sk4iMo8K7bjG5FXg7fp1zj21e4etUVUMjF1E9vHQXdrEbjWMLs8P",
  "key19": "2g3Tx32E82RG3GEAxagnk4Mb1SS5ho6AEqnFNTgrebjUhwfG74s6CJrqPVs38HWvDhMaB3pNjKZ9Q3Q3iXzMxpDH",
  "key20": "3QPy65ku9v941MkXBpoMvXKk7rs4UviRVJKWPntPkwCJZS2eXaJRCNtLNTeEsgy6JAy33aoy57APWPRk26SAwHXx",
  "key21": "3F3bcXjydNhHQXUWSUAsUKgCi4fADLd7zqCbxf2kMkyXTtJ8ra54mQeiszrZCtDeCDY1NTRi9nP3hZ5JA3Tcc8xB",
  "key22": "55nZSEUdbJLywy8GsBN4mGJuzAeR9VAYZsqqbbJvMqo4oKeNACSQaXYMUdrvrNTGhNX85paUyBExqW1mKcd348CV",
  "key23": "5GEqoHQd19AApPc62eEbzMFjyV2sacNWvUSG7fRk5cMUBHQ6x6T89Stmt6PgSPicvYpktCY83JadrE8ZptmGWYY1",
  "key24": "48J8WYZb77astviqnVJFBs7Zx3UsSzQjRQsiZnmCtryU2kw7iLL79zkaLwnrfer4492pDx5jeaozvSgLitiY1ZV2",
  "key25": "5RZArUKJD9cDcESiHyeEcgFi6fg7hRzwwp2qtyRLmrZQWYmDstmXM3JPz2tuwXGndQojCBPKNvDmBmAafw33eCFi",
  "key26": "4NyYWS7FwA5nsKHYzxMGe2cM8DdZ3tfpW6BTeH63j1Ldx6UMMvu7Rp4QqWeUjZojsojta6ssQDHjg5jDkTKVfXkA",
  "key27": "59jXpAKqvF3W67BhfVHrfwj3JuV4RQWxoLqrZ5VYzLiHVL6RoyFqpVBroKTkmscqtvyYEbBDY7bR9JADPaDUGxA8",
  "key28": "3HcHCAKCnF3tNqGxaei3DdL5H7zWSGNVru1ndk5843ntNouHi83QgC45Mteo9dQFcsBnwhEuRhusvcJQhqcGNKbw",
  "key29": "4Rq7yQHUubP2TVbLngN64jcYH2rdAnsEsvCfhgPuPzf6wgyNBPpbaAsxm6y86rDkrbdrKTYbdfXVgsC2uqt8U4qN",
  "key30": "5uPH1joophU2HVJj3qv681Z8pWgsrZMkGckZyj1k4UxEJLMJJTEB32prz38carKrXUGzZnAiYCUzGW8Srh2BZjzn",
  "key31": "3zwsvbJmSXVH4dwqd7XQG6Px9jZHQnrCau9ygfrbiaD3eRDXUkZoV3F4N8wCkuqLhpFv2Sz1uYYNAKVFRgmWQpyt",
  "key32": "5YFrwU4TsUNNwuRECfDoYevWnbLiPCBnps8R1d8X9Ero4z3rsvXDo63o6qBaWJ9rFa26HpPzZRXy6QNJkXCJfwaM",
  "key33": "4GkBa3Kmg7KWphTBTQGmYXGW7GsJQ6y64uhMA4QRgbHPotG7bb4p6MaqWWh4vfV9h7DSibgaVg14sHHKJmwQCv1R",
  "key34": "61HCQUape7vsid752As5BVFLZnjyVbAKBTs2bkX5iZexCBNHMR9Z5zd7VnGuo1UMp75qc6iQ9KrWxLa6YB9JEgJ2",
  "key35": "4EUVrGbUDTjo36iqyyz1aC5S3ge2VSd7NfwY2ni4ZP6FzYDdWQKTy9VNQ8jYw52naPsjnQDM1E53UZzK4nyQXNqe"
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
