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
    "4aAXTEPcYjWfcj6oQyUn41D7NbMmkcPDKT9DpNAAZyNhdgqGPN9yzYaDKH3HLYp9xZzmWs363u5gdvrcFgHyJaJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hN2mqydWKtQymXTbn3aD1PE7s1kC32VgWTrUoTuJ6cpzNXQ8rLAk1vNkB71UkGDrzTB7T85i9BuVLsrvZkEjwKN",
  "key1": "dx1xyZPGSkqvgg6vmDdMEMd1Zk9BKQ7gtrxVNpdyoDFgdF6VqoBDcjWq6mWRWxB1GpsiKyCscZ3YgmPwSGSVmny",
  "key2": "P4r8BBpQi1NN3boHKsfpqRCjGu4T1EaBwQxVtmVR3DUAYr7snpVtZm7KGiRTwLbd5nCPjdqFdPoD15AakctpcPV",
  "key3": "5P7PsiXPLzX5GYxcNVZhwPuWexVMSmTTVCnUSuaqpYPjjuKmLAj3gHDL9xAivaMgYjDKLQBezcb3qAwiCXjr4TXV",
  "key4": "2j66NjapZt7QdwgQFaqCtxdMLhNG3JrRSGc8h9w1gdGPgroX3eRW2gSg6ycDEtcs6pYW1nrjbifC6gxHfzujNdov",
  "key5": "2wsiTCNhWJk1uqCWJouqEkUChieY5pG15WsjPAk4HKDLin3wWcwfQE2Sx553UXDBFwpqyd8s3f88zASVbUo5ezth",
  "key6": "HjQoVKPMHXchk4kRUALvTgr9pYhqKvfu6M8XHnUmrEsz9nMz6EeGRkELvKCHJjrgV4kCTmkn2B9QYieoisRT4zr",
  "key7": "4QChw2Jk6LEGYZ38UNawLbydRmR1D5U2sn6xBrrgmiGELktyKHymGpoDjabh2wkuXfjkbXHD5XHaM9Z776rTZMNg",
  "key8": "4KqBCMykEb41n1n19tS7SevueSsuh8oe99n9CvH2uPG3C7TTFkHaS9yakLiM6Ku9fnPG9AazkBTMVkWMRjazTpnh",
  "key9": "jqremQoMXacwbKz5gGmXXm213d5TSE1scFY6RgpVrHVHfE1a7QyHoAF3CPBXo435kGMyUCCMVY4DAziZrG2HgF9",
  "key10": "4NSt7FVxocakJ89AumZHg47LkV2jsY4BR5oQpfh5GYPdvpM5tcRUwstSmSAmAy585UmfQ1RJxeuSYNGj9RrgmhRu",
  "key11": "3KcQcC6TQgVgPXVD7boFJGHV6NJsXyqJjuLJtNSTfLAAPNz2ru7wrQzbcKUqYEhiqkENwea1ZYiSFtwGS9M3ep85",
  "key12": "4dX8ZV8J5MmkY8J2D6XCTNKBugaJB7TsZBNsAq71e2adnAgKnwW8NTHUrKZi1j6w8x3vpehG3mzVW8Jm7Gb7BHje",
  "key13": "2KBxXTGM7gsRBZ6qeYiyMmowxMqNKV3P7Qwe8LCZLVgSW3R8ejqxagdM3HppjY4k7M7G5TcRJgRXcrdkN3FMuikT",
  "key14": "3c2sCHQ7rqvceEgHQGexEvxY2S2iHUNv6avA731Wt2kHQDTnoMwfVpHGbFBwtBZoGXmnLzJBaeRjZaQbYPyap5md",
  "key15": "y3YBaMWxNf1RAzKKXWJJucE36E2xnZB6Cgr65PKEkcuyJNPsR4bvvMx1RRcibEYPqcXDEnsyHDDBAM9NFQ7mNFY",
  "key16": "2pKaDYeXot5fH2f3w4hXvfdbtMiZhqFDDALUzVD94F15XdkqwKuv73hHMhuWi26cTcbNftvapVwc87XmdJ9AzuGE",
  "key17": "ZtL9HZW2rRxG5J71z2gSETxoPhcikq9DdLRN5i4vwnXTP1q8EoF1SuyJdMvcGWepjT3dVmv7MhmmWQHWreGvcm2",
  "key18": "2ubj7H7FAJ4zhA1VmxiM3Yhib4kj3DnWh6vB3gS7D2Vsomz1t6ZBQdunvD7AHWmLEEperxaG1qBdKyenknhjPgSo",
  "key19": "gndqdtJhkQyuEnG9VHrXHKW47s9xL1SoXhpiNZSgdjkA1vvfTNDJmfriKYrNiDkARiAkYoxpn9NY5ojWWUkXRSu",
  "key20": "1oJ43z7jiFCryKgrSPJCstSrtUhtUcbwhG3KKcin9eTQRjpb43AvJAKTKnZJjSYgvEbtU381qWAc2kaDujZwqCo",
  "key21": "NZKYEKD4REJk99iHAnirCQGhp2uNjNCyNwv71zWm3dSX9yEr977fDXXx6i9E3hykqzQQpQmGCoKBUq8BChyPMZz",
  "key22": "44Uy8Xf8myqCBinmzta9BwaoGBhWJPd3RhMjpqdmQPnBiadcGXo1oGsKJruewLTetRsbGvVPn2UKnvxiAaY8j6Hv",
  "key23": "CraZEJo14QZETq3GdZWLVPVby3882TujwPupBeMbrSEc5eH4p8xKutCU6PCRYumVdZrHPj5MQVPwt3HqW4gdNQ5",
  "key24": "343cJKCscSzzeFqKr92hYZoZVxgcJDLZoAgHYkGfGcCZ4AoxeuhCXtkdvazr2jwVxyBUPercpDE74fxZ2GpsHwkR",
  "key25": "2EXKWJi7anZNmpj2cCdsMfsWNXWQcQijRwyfb6wtfeQFhhGYsveQR4TuHFLnaW9mwzC4qEh67PhFWaeNyp1vRMci",
  "key26": "44RWfABezNHrNstjr5hqz5vPxEUpgru1fBrBzVoLZFj8nj6YqN6FQRFPbRRpLo9s8uJr8bWTKjV81wr2ceY2QLUb",
  "key27": "4pDLEcLchLTUoNRoF69XQyKEE13PvfwXo7sUwjxe81cynpfSEZberhwNQtSVnoYDHsiYizhoBJwyVXdwkuNrk1m4",
  "key28": "4xkvk9Te9i375prfYXRLDj6dARNv2LZXTVTCS5WmtNrKDbkzqKfs6nJjPuF1cuk5HHJ7HnyodDNnicBaQtc576CB",
  "key29": "5JQvKGcvt4YduSQHBQsmL467uGRxkRJEGnoNCCKSiHmHx1G3Jg7MkxnGStrQPTcmrqkpDQ5vXUiJ2C2G6zB2g8JZ",
  "key30": "5jzMoW92pj2kdt4jKXj6kVS7JrX3PttDrK7zUqKaekbHWLYYw3gHKSayWuVwfCwRhDXB5m8iGELWKWuAzP7jQgWf",
  "key31": "5n5qCPfJDgS8gkkozX41e7BQJPLMAGtmDQAkGjuoRb96K2K37KkJRdEBDQKJpwMzjnPutj5dvtu1Zkj129j6uSru",
  "key32": "5pD6rQuHw3GiKKjfx4g8SUCVKvUTLUsBDdp8rsM7xq5a5zd27N4QR7hEVWPtDPx2LsWQ6MK1Lk65oWUHYbRYyMRL",
  "key33": "2ZjtmvK5Q9k5db5hVX6uimDm78gRPTtuijTMzjBW18zxRKdJ4qVQLJSyuo2fqQaKvJ8FWGvVgimmLALQiLAsNDjd",
  "key34": "4kDL3A7DiPBHwSDvBKgqpJW2vJQknTX1Yu2So4unYzFhYLFYaBuXHb6VvXpHTSDnNXruMhecLUY69Yu8spU8W1ta",
  "key35": "3hVJugYbR2nVz15CEFhEZmonnPq6EE4khTSmBeQBohccsZVLWqjUWZjKknhU4A4C1z3UUF2XkxATZLMLPv75XHrS",
  "key36": "2288B1mdAVFzBhZqkFRpTxRUKPSMe6nrMo47n5KQWsXiSVphZeXXQNnLQtKmDxCi97bRqrBZaiKgt6rL9gqhfKxX",
  "key37": "3dWH3YRzN9DhQDFsgXQVaNLMdsmVzeyjpHQPSbtgY4REuBgM4idD65o4GQvVD2YnyzEbxQiwjfFKJ5L6ZHqaNab6",
  "key38": "mMbaokkvSp1NiKwmofDuqSHdKoERC4WEnReuiUNdeYpqhFKoTnqGedrzayKrVB1RmLqfCpggxfcYppBmGXiHtd4"
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
