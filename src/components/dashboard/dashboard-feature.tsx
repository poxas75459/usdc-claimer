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
    "4hsE2d8y6sEppGq39vEEZbp8ix9NdwYij8hSspuyMgCmn8t3JT4NRbC7P4AT6vQBTdXgZhp4rEh56ZiYPPK7CtqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4doX5rrwrtMFeTK6JAUZUyp1Qyw3RpeieRSgTvhtmfz1RmNffRw4xQ6TeD234DfPkoT3uEcxg9yyUo7jertDve",
  "key1": "4ZC6kVLuRGke5eKv2FcMzPvr4E5Ta18eq8f1PXt2yvxBDPAtCFFQUHCaARu8SwsYrjichpKceVn8MqjMHADbaHpc",
  "key2": "4c95an6Ro8dGLKrPzgWF5fLL9Aaz93QtxHvYagJVAakSqGArwWgKUCUKcLHh9K1KPdBAcrZC8WXxrpPJa2GWwCr3",
  "key3": "LPrPZSotEtyARM5qLiz9LK8KnMBRohwkctiJw4ccGxmkHr1qpzjo8ShZujoExDSiH7vEUfCpG36SRA9SSPbhjKu",
  "key4": "4bjmt577Tt9B6fKjBmNZWTF835svRbwJRZDvXvFtkE8g4mZu9cWMxozEbF2qmJWqfbcohTb9XhMXQhsCVDWm66XM",
  "key5": "2YzfbahHqpWtYsi5rHnFLdhDahkyeq9EWQd2cB6kH3fUuTbtSyNcnEugNtdB2GJJmDWC4sbCDCnZ2wiHWAbMmdCn",
  "key6": "2uHUH1hDyrJSjViAMRRQLxAzAeYZ5DnTxahJ1xQtCposLR5Dm2xG9a9Tsuff86cD9rFsdeFYLkJcwstVxPR8D8PV",
  "key7": "4GQzBP1C5tpyL5axEj5AbBUjGn8RQ1bcGmgY8cFb1wx6W7N5AZpADDhHCs1eyNb3jpjJPsqzUBRdmuT7CD2vy97o",
  "key8": "5QdxXoCAn5g8oyK6hb4Vro23utQixujKZUvVoQY2JgrrAcziTjmhSbSZ6vgaajvoLidLuYLFjvh743HzgM6GHWE8",
  "key9": "5zaQ2WN1p4YeqkUvn7E7Gnu4cTFSZE2PtB1QsZbx2LgGNMLwYF1DarPSgAsPvJyt6TsH3WKQVzJCMtUEXUseAhA8",
  "key10": "4tvW8rBqbNjSWQUZvp6Xurv3uqBuazhbMM4fbd6ABuXR81F2cXEch4s4CMmNgepJZu13Zx6kWVjpAdyLx7krBmvP",
  "key11": "5r8puTxgZPKjm6LJ7HcokXai1nTV1g5Wsqn6eoSKXQZdAMbU186YcsfsxC3ZvXNC7V2FuHm1CcVLpq5HRurXS81s",
  "key12": "44cADyLWr33bDeP8M57ggWQ68szvaWwt4qJ3jBaiHRKjzspvzK2RH4pDVsdY7KGeFaoUGGrvQtBkNVhbsnWQwQZ8",
  "key13": "v6kLeZ4GizmPFfDBzPwWRYTXRSDU5BqzifhXuqd2tgN4LbtRg8wyRQ9W1YApQY2jeLsmfxZvTC3MpEoAyCnK8mc",
  "key14": "5iJKQnxUb6NG65sQafZtxJu18mppWHXoyiyPNMoBomrYfm8bDmtp4uFjmi1v7vn4vr9To8abJPSGN1631P2ZicX5",
  "key15": "p2dgSeQeVS2kXMneeBdEvguTxcSKDLxKfjUQ5ow53d8PitWi3nHn3zkhvRoWuJuMdGcRRbECCKdcTy2jbRTm8HE",
  "key16": "3WG7T7T29rPtRChUbuJTUCHae7ebMKBbcE64GVCkqbk34grLDz8SbvG6tovWzkwHQHnsq9emjx7bijYK3PDoMomd",
  "key17": "3Vwc7rEdeVyhYEb2i79izShdPDZ6cBSyrzSgELiTunTWyjuS3XyyFuTtdz5NBkrJkTdwyF3Vzvohiw3VCwH52bL6",
  "key18": "5CuRz3b6vhVY7XsrKhhbRnVP4qoyF21HbrG3hjB6XnGDABKCNNpNn2wGQCP8bbB3gVr3VrUMSVD8qkEm12vnHGnX",
  "key19": "5b8pMzwBNfXnUobMxC9nMvucEqmTFpkvXuSW3eirmhBSuTy9AGC6osa8ErQXmJXmHw3PiQdUArU4Tsh2Wys7tnDA",
  "key20": "9gBUrLQekem1ofwCyyAh4Vu2pkZcyx5MPkoRNFzJErAXJzieiriTikvtWUsvkwT1Juh1ULXzyP5vtZPRs1pPEgD",
  "key21": "5gbRaYWqrvnXwKNfythw9VWc4VTRqvjNwsovEstex13G2eCCLGmk9yCEkFb99vV48HLyHZDtiJw3RVahbqe2X7Hd",
  "key22": "3B6oa1kcjM1FwD8gneFgDo2ZDVAAuL2aarJgkpWzQKGGWbBAF6uE9KbNJcvsZJ4ug8Awvf8CASXwXEmC4dGC9DC2",
  "key23": "5EweauZXyjExQ4gBkQomRYpyGamX6UcWa86vFX1LUVHDrNtZbyBsYMRFxJ82cnKnLXj2zMqTRo2sscV2KRPrXALn",
  "key24": "2xJZzSXNA5kmVQwkytVMQcxHi77k4Kygpi2mBeqtNivbDby5Va7ETGPnNt2mkkZ66TYVGirhh6xk15ZUKXJS1Jx1",
  "key25": "2qzVr8XCpNdwMHvZCCitZxR6NDpL2f8NXZJjtC44ficNkBo5QK4H1EQRWiL81np1n1XdKyazT7vnVr2aAhTJS49n",
  "key26": "2HSoUGs11rSXhxzwqo5UewxjY2PdEE32ZKEVBn9op6ubeCKxZKykLERgDwedkPgmzkngA2dUuY8xgJ4ouXSLWLb8",
  "key27": "2pqsf5MdhmcCZd6rg9vLgeLCcryKL3qinMrbhuezGgnobZS29HAG61zqi6qZksbSr9P1QZkgCg9zRpNDzFURxHcK",
  "key28": "42Ms42d1bT8JQRM4fxgzdeSiEBqSwQiXNC6TvegwtziXyyNG25QcBCK4HBFbGsLNEVN8AY1bVNPxY4PwkkKRQsbb",
  "key29": "3tP2nA6xDSzQrTsv4oTX1bSDCrSmJYmiMPzGHvzrTbjCLAZCXyKnhKQj7juqkC7cw6Y3GfP7u17LJ1LvWXhPFj6V",
  "key30": "2Y6yNMTqbvL92iLnvp6923Lg2SQEswy8YkoTUbCna4ddKByJcDnHJDa2EZ7oBGSymebjk1SqsarNS1coaosMAfHh",
  "key31": "2iZ2BnFFfabCqqHzcVzRiEQAK8NDmArYX9bLbqssmPcKAjiXHF8UkYBzFQ75jS2VRXgLiqtcbVoKrmopvvTis6cZ",
  "key32": "5KpNdGbx9j2xMUcQhPXCx72AEfJnBHniqAnSfiEZJ9hwtxawVW9QUJwN5AJUBWPUnAvLKzqMBdr2kN3AAavfTHdM",
  "key33": "4ste5qNYnbbU2om371Z7xAr6eGwx2HxifzYs2tgrbxaB46vVccaqW3qoWtRFcE8noVJLtG1argd9ad49SX5Tsskp"
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
