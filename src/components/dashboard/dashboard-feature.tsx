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
    "4hCxSicwM2c5hNsTssfdThroFtj7zrTVnsTEkizX434eEjVQnhZeaMewsHY89hkhTExbpn4gkn76qTXonU9vBfy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGmkeg1MLJ8DKca6kn2TcEZfoVW4cRJsrtXpuCEwUEzdWueeJDV8Kub4mw3QyTAWdMdf8t3vdG7rw35KhSYjo7D",
  "key1": "Vpa4SSpgfoXp8gMeRKbTww6Sf6DDBnhd6ZgQ61SsuDNwaKpd2JfhHgjxuazBUrtoeHzPVSK6Re23VHPbrDkGAmG",
  "key2": "2ucuApXe3QxeBtFFpUTuace9YtSJycGnY8ZHmAWHFSjSaWGJoRkw46pCVVUnJGhDvbnqRYCVNP9kM7ckTfCDGRGN",
  "key3": "4GvM51c2JWupcEfmMADzDNpuTWMQGv1Jae9AH8eUzvPD3u6cjz3bteKu5sHLZK3ca55KMPynJ3fGpfyZoybD1g7s",
  "key4": "54pCEtuLk66ahmrxRA1YR1Wrfvc5mRsRdFKsXpVyQMpVr3tc5m9YTCcFSm2C8WmJ93aFbWZvTfHckLzBBhfWKDjq",
  "key5": "2b4uVe7KB2Pr8npCPkWnbHJyMHJK8SDG1vGFT5pq2CdBpTKd3CWWKjEPqR7YiQdxqEyiGbbuN35TK8NN3FZBptbh",
  "key6": "5ePjiYWQKekbhWyiis11hGvHeUQzhuqpq4YJWPsyiuUziwQXhBsme4aU1Mtvm8UQFFhrjHkQqq64ugWs2gCYJA8o",
  "key7": "3eAgmK3uMVHuBj9AmCxy1t9m8gtyYjAnuZmJG18SGL29ojFDnweP3Dk6d9yJyDMzsiD6gtuX8HQ7pnauVGAbLi8C",
  "key8": "5qQP4AWTFmvn3imhucm8Hxf6Z3uQZERuFMbeGraEscRXdWFTvP2wU2D5dJEiSSJ4EHwQ3UG7robg83fNNoY7Jf6M",
  "key9": "LZggtbhDQwpGR8nLv4i9yV5fy7jmHp6zH3MY5KQ6UB11ZafpoTGwWrPBrbrsHMEUSCtmAJ399TnqYMGY8AfuWHL",
  "key10": "5y8PvuGcLiSzVGbiZbTbRB4zw3qPm2m1ATaLKJRC7S9ZfDADvt1Aet9T8WLHYupDdP4cDiyMDGpQdrtHmaHDvGYT",
  "key11": "2t6nAHi8XSUNxTvjAn3Kh4m9RJLpXDi5TexMfiemwKDB72whUUXSrJKLrDAm6DjGTnY5HfBiQh9Nq3eqpcTafA1b",
  "key12": "5z8sAAQbqnxM9smrmkDeRUeMBLGnxx7HnSZN2Rc2PBwrUCxXfhDfUBJiezBcrJq9612WAiLjKG4bWHbEENnJqMLs",
  "key13": "4fkBcPZHgyFr4THPf9X5uU3EGz6USGBubABTJtC3XHJNHUkvb1F24ZWji2bV1sPiEKhUY1DH7paEuCDzw8RyEuZV",
  "key14": "44ceHqNHA2jvc1CSXBHPLMCtGwmYbcjWtyhkbBh7S2518wTybSGKkqRTBx4HthDZ8Y1xXXUPMrLgBF9JVCNiz58U",
  "key15": "4GukyiHc4sEiBotFkfFnc1z7Dcnw5EE21JWdNnk5UEJN5SsPShacjunqPgy8pw3AKedsEecQfX2Jq54gYYKbqZ4g",
  "key16": "3CsY8maSfZXerEGzSaHrvAavm1fnwBALziLEcbmqFGbkETBpGa2WypMEnF4vbtTPtz1kEacnFNdTiKhZ58PNcbTG",
  "key17": "4nJHPX8rBYLwTwTGwyjMdvQEyEbLp7sA2PukoCqtfAFkRpq821WJXGbU2cGGGm4rUuumpfXt2ELRABDRggCXXKyW",
  "key18": "2cazbyY9HGh5kLe3Y5xSWf3k3Cmu9T8xVeo8SqSTAfqLUQuPjmoDjxPo9gmKqnNJuZ4EGiycbeZwu4VVF4ofV68m",
  "key19": "412vYJMaKxcFtisG4d88a1ynXh94zzYBHDhvRfpPLYBqEG1zKk3iVXpvXm14enmLUKwrpeawr5wTajemP9KqDpt8",
  "key20": "5hD84yymXbH4LgFEENQAnWzutxzmy3sVxTNevQAb9TNpk5ukH7u9B2EDfXgVE9PxnCmHLWumxVJ56PZrzF4xnnFy",
  "key21": "2zvHDpnoWNSxNHYDrX1LkH34MCmY12Xfggnvi2jpf5cgqf3fvmGGAnFXSfjBpSYz3EA6iGYVHDKU33XanGvNnTkr",
  "key22": "23iPdDM5QjTmo1mGUaPX2ThZr9dhyLk2CL2wVttpqWgn126bfHCPer76bNwrvcfNL3at4TzCv88Asjpb7yty8wC3",
  "key23": "2Cqz1X8VcHFhhy7T4Mq7bucJtAKQNakHZzwAmv8THjvEhbSLy9TNFSjhFuDtGedT1NL21PAfnUU76aL9fDRNAPYE",
  "key24": "2Vq5h8mMYLr6NP2RvkYeqPdB2gGm3yZAXYFJGQ9bLxpzvtVA2v5warDtUxf9YThtwRpoPiedjFhPekMx94YpQ5eK",
  "key25": "EQjnUpPyLLFLPJo1xKwmwU8dyzFtsPtawwfbknQ8PTU91ngx4TtVNG7dTS2ZVeihpFkzDugNcbkznYHDuC5ZNAJ",
  "key26": "2rKZGHiZGQnbTQajqM7jKCfhpdf5rvCqxqEbxH3ATmrSa6AvKG2827GxVY6ZEH19oiM2zeXy4svNwBoTnBcZVaqD",
  "key27": "5BxLTiMRNTUCXCsieQjMcJmTJLuf6BJ3Q6dWDuZ7LVM421CeNZpWw8x9BDfv9kBXrnGWghse2nxc6qr51y4qFTRd",
  "key28": "xvGbKhksJk1EhV8w22MoDX4QHW5uUPXL1rDL8sjF9L89s7ozEFPNB6AGdH7iDjDKja68mcw9vCrbMsB9uvSungk",
  "key29": "2u6smwMxYGvnA4CPA1r8Kj43XKY9BijNWwW5EfyRHM6UtnauJCfJ7VaFjkPaYvMXCa8yxVczkmvLhQT2picKnJ3c"
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
