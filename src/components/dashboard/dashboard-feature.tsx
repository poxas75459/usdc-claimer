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
    "3PmzniwBsfEYHFaJk9Pra1y3H8cX8UoJTLHmGDNFt5iNhe56B6zzpKh91XmcQGkEqwddrYkdK1ab4qRZ8D3C1u8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B6YXxSbSMVvtw1kaw3DXwFT92DEXGYmDM7PAmzJWcngT1K9KpMqQBSKFFWRVjs427dUbCFsBHgmVTp5j6CXSita",
  "key1": "sBHi6HsxVpUQnrPx14PAbkwwyxMUSc7HafZiUNYbfQHfVT2CBX4fz2McAyZmUGDsCFdpv5YGVevmD7Ns8btHyYx",
  "key2": "5iXRvzekbfeKysgbfQuD8kTQjsUa8eFPHKQBBeMqg1QZt48VufzPiPYbuhAYoJrrgwvUFYwqPaWXZDk79e6fpVAr",
  "key3": "4hfP3Df9N4BLVhL3MbVBZurZMAJKGDYWeMAqNmiZuGHyLmyDgNHvjXWGJehENCdiRnYsCKFdZwCp1V1MrPUjrQSr",
  "key4": "5ZvqvkaEBNVZ3MDFUgkj7GtRTa5cqB4iwVpPrnMHJYyykNLD5Q4JaA1s96P5n5Ehh7xHc3124WnG5UU8BZdJwD1w",
  "key5": "5EV9H9ra984DFVogp7j4p4fF1vQgPHbWuFLcFivryY3r2ZwwJnFphtDysZ6S5nJuRkLcvXfcQA7LQkk9ang7ugEn",
  "key6": "VrYHNSwbyJui66guXsYe9ovpVV4xda83vHSN5eK4U81rw4fXXbmesm9Vb4wkAbTj67qKXZcGT3U8TyDiSAERuCx",
  "key7": "REssEvzg8TTuiHmU9oDgGXs3KzeduQsSZaQcA9NF2SETufUP7ZjqAZWPdVyRZEzQmyaKjjUNifUBfP47h67b6FD",
  "key8": "5exunarWYzbokBxJWDqRj7RDarRi1squkgcbHztxxRX4kqAovocse5ARioxFkuT1LetuoNszCT5mZnrdoukd9yGp",
  "key9": "38TxV2gUUkR4ovePZPgtpwN3hWNrZ6WKFuRwupeMmvWLeJeiYFme4Ss8Dj4pviWcurFeEcgJDnEVd2LfFX5F5eUw",
  "key10": "3Sah7BN44zBRKZog2DtwPL8X4JcKdZT2NqtgrUeMTQt8sGYs8VvWMMkDEcPyPEypv86dUtCcJNSLNVyJQ6MAAuqw",
  "key11": "jpTckJm2Ybhyi5zzUnMnxemx5nTFvv3xh7Tv9sQmPvZS13FbbeoYKGQgo8xiEnQxZzq9a4ci6Br6mLW17GA4GJw",
  "key12": "4Zz3e7AHnvznHtSf32iAKvML1Bi6r598KPZEdrnb3ozLNNq7GPSDLTibLqbM4BvXWqs1DveTgcQGdrm21ZMLh7SS",
  "key13": "5RQB1sJQpwxUnEiDVfFMjijGAisdDR6gP6nYuiNPLJPfcJRtQREYnhCBbH1VYDxhmNUhtkfw5NNRNgSbsQzXz9E9",
  "key14": "4G3NkJr5nxiBFfrzgAXJLLVFaBwuCD1UPsd9pJiKtkDHsnS63NYyEmq9jP6bQgBYRaHafsBgADx2HiBUDziVgwWK",
  "key15": "2nzG9bZsWP3Fjd9vajcLrLUVzKykaiHb5ZyTy66gx5vwTzo2xzq66pdW9QSF2te7cWXUQgoJ4W78UVTp3Ggsf9PW",
  "key16": "3BFXMpfZbdbVuCcdK8MfuHVu2efocKpX4Y54dgfJ6Qo9PVE7opVvnDF8RzBaCxT8wG2m5zD1mqLcm36kA2eXuqdv",
  "key17": "3qAeYo9Q3nJyoQ74Y8TuDE1bEWLJERHJUXBLfZftudm51cXJd28uG7jbbNauqDgiKP5UbBacPWexqamXVv6RrPT7",
  "key18": "3CxHJyryMzCWES7hiVjGgxitf8a9UA8ti3SUwV38tp8i3hkPLBJQAnJEh8DALTJiyaHHE2NiQArXjiVEpodTSdhk",
  "key19": "Xmgho12FpKSWoXcMQYcdmZgNHjsqypLcv7L6i1s6igV2vxCv2b3bTPbDVWNj5Gu62CsT4R4rtVJj61zkrjmF6TD",
  "key20": "32EBb88Rewz1jHZvsgDLxomjNzGGa8pzn8X62X3EX7mWo4nNb6xhiUZWFGpz44WKpk1pvQLWy266ZFh5vGwy6G58",
  "key21": "ssoVieMY2Gx47Rfkjvbc6t2UM5nYuNi3md81DX6F6YSqifHFpNeaEURhDRWzkok8DZ1YU1AGQzika3PxiUKCHVt",
  "key22": "ykRPvtKMXfzPrZ7sZrfhxmDr87hxwchmwBFu4T95rRTWDAi2UoASXKNeraC4dJiHVUiRKejQq6uy6LKR6MLTVTb",
  "key23": "3jbd66dMCJYL5rfDvSaLv3ynj29tAswHXJqEUbJL32ghxmMJpvaUaJspaH29bGQVPi8iEqcmAXRYcpEYff62r4W6",
  "key24": "2xfstNPcDU59ttaekMX6G4Ynn4rXmYpef8ncqx5w6D9p9UJBYxMAokWb3qXkShGzWzjcTQWpRbhsZVEeWuSBGkmb",
  "key25": "3zbXAg6QmBwoAsg6d19u7YPsZfdA7SFBqKdvrK6n8h1EkGj1hUyBWKdhvUizrX3nNKGdUrV4JthkonFo5RPZgcAZ",
  "key26": "5Uk8v5jL9Wkpdeo4Jf2U6nmAZgNLYhTe5UyyUHonTv6SVzXiMUJRuFwAWTbxZHcJmL5mSs5YrhXotiHmMYCHviqJ",
  "key27": "3bzWH6gpHpj79uL5nRLMmJHR8EFiPouYMAEYDtUbA4AED3dnBixqN2jkk5tGyWufmUzvRabJfrmcALZNqiHhQ43t",
  "key28": "5mhVcB4t8WiDManfiMaFS23ydvurq3jPhXSYoEYNjEP5DfByFpjYFLvrhNAbPvh2T7a9fS1FWqkNCW3r1k54Qhhd",
  "key29": "3TqzCAbrNBeWfS5kruV8jgbURzoyc8ETV8svavZMgaXzE9yQnkYobUpLwt75Xx6tMq5VfMuDJUxjeSatkKHAm41F",
  "key30": "45fhp8ZyyapCMVMwj1SYsV1ksrA9d8fUsDwPiVG53ZtPiwcWTqq7F3Y4SB5PkwZKeNXRBLLKkq54rZNoKhuunTMY",
  "key31": "KNLMcQSjLtfXY4UbET22DYuuvPoc9pjKo6UMLuiFsRYDJd5UhVmYbRGuxbQ4Th6CeEjZftyg3vHbr87888GvkTK",
  "key32": "4wimHShnQ8WrC75pE8eYxEvEqsR4pMiZR5L3jPGVyrjrk8FPYbpsAuNwrDKWTyjcSzTworXS8hAj5QCLW2Nof3Qn",
  "key33": "5WrkHB4Yh4uur1Q5wookSqAD4yS2EUfWK6AEGUgrtMxJZBMqdUaD8EWXyCoXCDEqVrh1wEBWRLDWCjQKPCgZMb9",
  "key34": "3X3aYPaHZP7n58nPDMz1dKT5uA8QA4UbAn1qpckzrNVZrxD5wytXKJHJJRxEkkzEnvzZhxgztRVkYPUPBYRi4YsW",
  "key35": "4v7oZGj7MHFwHv5S8u1U2Cd27SPnEK8EzXP4VAa3uKbur7Ez74HeNwmua6HC6CRvPwbaPLAKhWbi43Ps8sfCSCCi",
  "key36": "b27cJv4jzh1xTGKWUDEa8YNcnCGKDsWrDh5Nar7y5M94BHo8R4a8pZGXct1rSpqyvQLjRYM2uFZpwdbK7W4f4VH",
  "key37": "4VyXgFB7s7VLyBbd5ACqyakPWDsENvuN5W357w7gPwQh9eRWn7hh4DiDQLujiJ2y8HH2hkrHaM6yBTeWNiNrNv3x",
  "key38": "5PgQUNB1NytgGmyxxAMfSLqnpv1Wy5gKibi64pY6xZuyHHbrLpNCP4nnboa1iJ6ZKbcCZrsCoswKcHA6p6zkKMaC"
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
