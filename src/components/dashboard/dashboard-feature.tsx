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
    "5YK61vvWHPHNSg2aCALaLEANZTRhfMvKBsPn7bBBuD3aBHBSQ8v4C4GgLPTFJYbH3u5wV7qn1TL1okWNrdoJgfBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ug5hCQunZVh6X5Z4Pqev6pg2E3nrdvxkTy5ULZkQc6CW7ADa855Nz3Be1uwqCiYXEXo48MDCs8pPwMxAmvpZVV1",
  "key1": "21UVb3uRwjJaCTRqaVxWLkBp1ewM6BVYWBw8aL7GbPk6gpHqMgcpWp9fgSXeQKLfRhpnr432v1uYi5g7MUv21rVj",
  "key2": "4vFK21G2uMCjCwmn2P6cSTy9GrgDq4z3XKpPverC2PVexp4w7CfVcP8LFpnJMPN1GwKzVVB2f7PSH9G2Rt9UvouT",
  "key3": "2zXT9fZ81QDsRavpYKfgAwPxnDkb1K4oPNyRv5RZ8KU1RWGekB3YhmPuW2RGkEmnFPdYqPM8nrFRvvsrPStjHdpU",
  "key4": "4PMHv6iMtAn9854cymrHsBD2RpTS7n6w3W5wv6fcRs4oh59CsGh8z9XrtQxvDUVPZJk7SVE1c3w1YkmksN15Vzgh",
  "key5": "2VmPd5s1iTsMtswahkTPNRNqbJvFXgdZR4KLkqdiCLv66YenLBg6W66VyMKZ7xKJHy5sWA4kNNHugp1K9u5KR6zx",
  "key6": "5LKEGt9UvPMLzN5CGjAfMJttc43KCSZKBYfLN9YSYFY5ACB5nDGQKRR9U7yfZfbjpWgwvrgRCFyM1jNqYXXiURxt",
  "key7": "nhgitk3brGAYT7exTQEQHw31HvPiJD51Ri2YQSKLSnTELz435CmT4oYcigYB8uvNK5LpBuRiZT7mNBuoCdybwUY",
  "key8": "2RG9dgx2mPxCJx3NEj8SsyQsBnTqVtvBQ9KgdRcm3Rjtav4MvZM4WDVxUu5QiEoABWmv43XitJvUdxMGiDqZG7eA",
  "key9": "zmugGuNrNbtzwVzh88KGWxT4YbrSaHrrRrrbcy3isbeHtfQVeYoDCdmYyg6tLjwo2p5cS3uPtr8q1rSvb9Er1ck",
  "key10": "3tCyNbF2pYgvbhAzyVbNJroKnFgVKgS6EwRcUQgCp32iomnKgnRoJ7R6AQrzXRSKa9phhJYr12GVJQMdTEXXhHp9",
  "key11": "251YFrbHZ8x28F4RtM1DtuxH6zsnNqrXQmaYGB69C9H12fTCvMAUhfJb3HBbyNRZ6M7CBdZHfFdZGvcTRNdaXcs9",
  "key12": "4jFqL7HDRKbDSttVR7s6i4HQKmRBogUQtyc6iDwhKqko5YCuNhxfejHdQFhfajgmjzoDjAdsU1bHMkpWZD83mBty",
  "key13": "4W7dG3YTQAMr59RnEk8KGcbqeTcKvbCZXVYTZaqhZCKsCAy1knrAkysbp4x3xm7PTmhr1uHtmHitPyJ2gwKDbTjV",
  "key14": "39mts8UYQiJ3MELv7fFV5rD1BG3zsNHZnWxZCobhiZSwcXpSsmRwH2aAMkMjm4z3AKk5UFcivhsgWKXyyieSsifJ",
  "key15": "3Pc4s7PGximBXitpp8F663WxSC84xPaLzvafAyMYPL6Mp7sjNkzNL8enm9hZzJ5TDaqMZD76RcGZs3M4VfzTPy6b",
  "key16": "3JUPPPM2K9jJ4BdxbUUQJ3fSZLmGeRBHgbHEBw8a78MQx2qVjj6XwxXQQF7F8nA3os2s6bqAhvyYNNnwE4t6aoXD",
  "key17": "47JyvUE226AhT4qDGACFmM3jXbF7D1F1YZSP2HBhHKyjH2pF8MHdet59jMidnkGGjLjRppfazqCzAnRkMDd4g22j",
  "key18": "5F9nJoZ29SkvH85DRAVg3KLqRy1YK9TZAuCBZ8zyM39RdVLpJuXaSPXwk1qpAAWxuEUzmbpPJxzjNzuyd9kAXFsn",
  "key19": "226EbFGZ65H2X7ZDTiikBxakewx5R6Ezp3Buu691MxVG8CygbBWiuPCgGzC5mhvw2pCMdvpnHF7gLhpKRNHDNF4B",
  "key20": "2wiPiiLtUwnzCYKXgHm7KSo2Py2istpareVaffDRMjWWCu9nn6eLZYeW2TevEvjASH6pmWp1Vb6iJqm4NjFgYmaQ",
  "key21": "4cN6WEaZwvsF7kSWtxaJA4zx38RnnEkxmbKQTfLVUx4Wpdc9LozZd4n5oPJHUp6cks2JgtMWBCEE9ncPHzBPbxtF",
  "key22": "46kPqer5vC8UCtMgk93WQVpqcGZhB1gB1aZFo9Kc4T6gVqMHKaXn5ce4cJjcQnL7ZdL1HZqYWApdt1GXEDF4aN39",
  "key23": "JPdtwh6eNA6fAs64MSpmfR7gLxwCng3t33gH49AY3fn2PPAaKUEFpBaJnE5C3Q8tPWS741UiCAVdRTXVnUnvUNz",
  "key24": "2V7HySFRam3PzRW3hGX5Sq2bsPnvwa4LDeCd2W47FbTH1oRBrqQKamU3RjKjnbEYzK16LLV3fpSXT5AxwKN5nFYM",
  "key25": "2dToPKiKF6UY2KDnay5XVN69KHJbm8iqBuij3U4PHXk6Xa9hreVTeW6JAax5gCkAX5JvtkBSFAqio4oMPyhBNQsd",
  "key26": "43cf7HggpBao4NkjoVxXL8DcvajCQqqYURpRUYTzo6qYoikqix1zBGcTPHHsiEWoGS6LSnJFRdRPNsgM3HMNAMKd",
  "key27": "4ebj9xEq7BTKg4TPoZBGBNnfoSVhZv2cDTyPVta37U8LfMyUTnKQ82cmKJrp9T2t3y2Vo22v6HfaW1MDD6rTWVmZ",
  "key28": "5MPfGTUg3gHSAepnaPFFpsoM3ThpZJUKFUPCi5NiPBdfBXijU5YC8UX1z5BbSbPFFbgBAkR1K7qpksf6Npgitmhx",
  "key29": "3upSd9pdUrPzEZofdDowXEPawqj1Z8eABBQYQDknMZxZZUjugDsyvoowpawNxEXAH7Y5VioyLheZaRpCLom3Azsx",
  "key30": "3f8K26Q26Y85ZJKCy6GgVsATaamHQzhB7dsdX5WXrhRzBrVKJbAbWAVJQTu87TrKq28w5HqmWvwECtH4CDJKR6RX",
  "key31": "3v94uThVE3qzDfv294HfiEAD9niTRv3r8mZg9tBnbtTi9ASsLxMfY8ixioRH2h8rhDtg6ZVEZ7EeLHVvxofN8jzE",
  "key32": "5yZ1vBrcovPmnJoSrZqfbWPbWZtjMFYpPjG7QgQNpcht4pXrDtE9R3qjczS6FA2S49uUeth92u4rdfwNnbaimFVM",
  "key33": "kz2NNxRAWULhHFysfVr82CnHta2ZtKpqMAQopuf1PuuBWS6J9T2gC6BEr6ugKaDm41Y76qSV62kaJKS3W4eEUs4",
  "key34": "3hQtswvN9q6m5fZGxMn4terNJK3Cghqf9XU9xVNxVfSeaLuhDLNdMmzn66Ze9E8JgSyC7cAt3Z5FmYRTejKkx6p9",
  "key35": "3FxPr6F1y1QwXH7GdRzTSHP5X7Y1WXtVxgq8oRXjWZYHnYGC5ipU4Ruj6T2NrTK3Ef9UXYtKvvJ5njP1CWidqHuR",
  "key36": "3YEni3y8Um7L2wqJJ4VCHM1TtbFMoamTpomwkQMfyfDGjn9yrWkDwiBxrF3td4Bf4eXd6cYqNPDpQDyieufEXEr8"
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
