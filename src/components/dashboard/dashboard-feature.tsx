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
    "5AmEbsLSvFs9PdXn3R1ikoZmw2ZVbfYsB8McFNSgqXKaYfmeVVjER5DCTWZTkoJPAtFvZBaC2cEJ3ne6gije4dod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYmjxixYcdtLFJUKFaLDT8NrZHwPYj8hRcdVVya6RRYMykgVdofewTZCRzTwKt2T4vGQtq5Fk9FGBCVkDSEAS54",
  "key1": "4eqKTqgjdvJJYNCkyXpqqL2pjVgAijJFzuxuo7xCcyqX9RS4NGe2pS838LMSXtPRveixC82roaw6AMZz685Xi1Ry",
  "key2": "4SRNm2zRrNZtxcw3zfkMKdvuqmMMHueA2kwkJZNjic44sRNnjRVSZgRxyWJADWyrFE4iRMv1es7sMPx25gc77roG",
  "key3": "Qqk4YTXdQdyZc9uFhkjSqDzxejajCMyoAkS3GcaMKfUjCXmmZsHcinda7FepXsCS7fHyjAYY5k9XVBVrLD5oeGQ",
  "key4": "2w83TqyPFuusZ5RhitZPQ1Rp7FyPEDQvdq3G9sVwfbGjNx4MeyyNP3uoxedZHVdNjVwb6f2FbDeZ3qeJrewUm12Z",
  "key5": "2zehKvbxpCCv2nFcthkQefQPWNnvJMjYT4He5fkvVNpbvbuKGjQseNSyc7z9j38qG6cRhKek1rzthWoDYqFx5JCa",
  "key6": "3erAvPis6o9sLoj9Jb3KKtDqjLufHbHN2qgEY4bbg4eLaQNQKbPkPb53HAzA6FT8DeD496NSr7VZaijS8HTgCTwh",
  "key7": "5HZptcD1aPHmLetWn5oAPQWZX7d4s8EnEaiNA69QPteW1aJuH6hppbZCSZjZKBi9dbjuYPkaqtFKJ8wQNmMVnmsB",
  "key8": "2r7kFu5aYm4bsywg532KCXtpPs2nTwGmxaDVX8y2NDkSZKTJDUyB9KtrrvZYsoTB28MfUDW57FXaKwnWLhfZMcEL",
  "key9": "33WvSzqnY8iC3dsQdUEhnTSzuaekXYhGGgqxBj8fspKrhPR6f4Pct8YRL4qHRYdwToXTuvRSBmReQiC4pJdRTvN6",
  "key10": "5wARMYQpfxRALTkudTYgV2VmqWA3LAeXXayxmu6FCzT1aUVSQesnjkMS4CNCJvDgHmtuho3zpQbwQsDVnCGqHaN1",
  "key11": "25q7xdnecv1JkagtV1MWCQj53c74yV2H7PYyX9SKr7viYxs6FF2kNWXEMt3MDdbdFZJK1AbPaz9D68vyr3C9BxJJ",
  "key12": "39nU67gx5Gb5qmfh4VFbackurYbDD8o5fSEukQhw5fup8dQeLH4PNPwtQzsVjFNhZNxWuXrf7GhhrKK94k9cUWiE",
  "key13": "377zMvGBxVphA7sVsk4iTKtUbsjRJv43jU8BqD7cJgCHSeaBgCTcQnKxjrZAuguRTkPCq54ibZE5dChT2dQXcyuC",
  "key14": "4q7eBBdrDF59N6j9vbe1BogcuEJdEsj1LC9AcT7CQPqXpuyr2D94FaubP3jMiKJKjsDLASsBJ8cNkeQSnrMNTg66",
  "key15": "2sC1ypVDPguii5YEMK9SyTjodZjyawc7Lq9PyoS4VyTCXcCu6qbJRjayFGEiJimXpc6vs6rTvb9MSv9yi3oLXbWu",
  "key16": "2jqgPZy7Yy6ABDyZgJfhweYUhQFPKm3GZSzfhbPfCe8uzZj1k7XDxJBuMzUmjU3U98C3ozKraEJV57g3XgXCx8jq",
  "key17": "3XW4EcrDR8pvc5dxXRsscyUwgSU8SVGmRzbKHhB5k4X2vAosKVJhiYFx8BJv1o2ZYrmTmJCUujZ2yXd5cHAQiTto",
  "key18": "5h3mrTqsWXJ8PQBbCrALQP1Wp4eajDc165JoSKjLuZhrPAE8bADd6ZHLVPBueNY7Yq6nZ3p4aTKRXwjT6RdxdY6x",
  "key19": "4ZyqJz82jZXpHpduB8C41kXSfva7zWZnnXfxZdTaJowYapbq65ECo38SjwHLHDsZWhD3hebZryNw9PmvCQa99wFF",
  "key20": "2Ro4Jsu6PEiVAYjP5UZzZVH91kkqfCHgdBNpD3tquPo5SqDkHYpJ3Ba1NFUkK5k3Fob6UWiDbJiMsyTmV8s545WM",
  "key21": "3tCVHpkLFFz7i9KmmTShEE5L3QaxhJPRrknd9fHTH5EWoypafF5VNESW3FnErjc6q29KPn2LAxwMFjCZXgXkf44P",
  "key22": "xgdkCkFjtGYGGHFpFk9YtkSr4AYJysX76VJCF7vWqCyKEWs7aGaBydn4TBHLmB15nvpJWbNDtLudszp4iGQjdmb",
  "key23": "nKvxiQDhtoFp63vtyX6sraYNAZmnn4EfEgnFWZ9nFdfSmuQPWn8k8BwXUbCcfbYcTvZp4ZM2ETyjXQoJBXvojvU",
  "key24": "yD1kzm36x6a9tkPB5mRWTaiVn1r2eHwc2cDMN5xefwTqrn77Vymhgw6uf22gQ61shBSR4UBRtSjty4WfstNtgEA",
  "key25": "3x4ipsrXXWpqfbYyqhcKntteEjpUmEXHVwFqPT6oqvCt74V75inuFUsjaPCYUiDXsGf7wmzUvCiiWP2AAWuc3hk9",
  "key26": "WvqW2fXLToUijn8TWKa7iRzHt5APjF3HqSHQofDz7VFXDgmnGNRrg3H2Yo52fsq8xRxv3zHdobm9CH8XogEzisP",
  "key27": "4LYCN4NRA9TDj38uMeqRddqdyiMHYN6PnbiRsnbXrBfYTwsywTsAGQxMNK3KYbDJkmYyfL6R3KUCWmAwETL8T3By",
  "key28": "32DZetfuoibVonu8BcoFQMk2uJqTn2ALFFNt9CGyiYZKX25oKUgLv5YfhUa2XLZw4RsW3RyqpUtVdbw78JTCcS7c",
  "key29": "7UzPLtmSmBNcoWH2sMgWiBw8TyhsWBCEMttQfVKo1MpVM1UpCM7uVwgjmoKaTbj32AozSLuT5dmzdDYBBTCXs5e",
  "key30": "4L2f9qcFRkqE35MtGDvpGnQ9V9Wc86z1SjVE3FkXrZVhzGxbSj47LRhj9QqoiYHA98TFcKpccyBPjtrHRU6HJ6Uk",
  "key31": "2voTkEQ7UKz23qkfKi8yLHgtLG7gkmdcbtqouY44JgdF8aEFkQBDsK4tBD1phSq3NemimUSxPErg6hCTrVr2dNSA"
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
