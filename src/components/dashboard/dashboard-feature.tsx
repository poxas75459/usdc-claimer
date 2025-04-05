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
    "4k4bxQwnifvGGMSsdHM4mFpnSMgA5Un1U8NER3CXewECrzhJi4yPCwjFzGjLzwbXLzjamcGWwDriAwpCGV6ngttW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbd4SHpQQTxwm5Tg5y7HgNRGT2ZX9i1bie68xXb4bR3fY2dPxvPwcqSrdVz1BgAegrs4mPGFxfhkDuj4G8Q6pHW",
  "key1": "5WFkdH4dah6z29nwi2vkG2i5pHowyNx2N8MPPiPLTUzDf5JpiX2Lgedc3SxXs2xknzJPWpVrLQw4XAqvzTQq9Lu8",
  "key2": "NFAw6w9kmt5VcZpJiPEWbYJbTN9trrR3cZoSVrJsbpJZnKy9APTZKbN1s83guPFifCtz1vDkwX431gJsjJFjpC1",
  "key3": "5kjEqN1HQbAcKy44JygVj4dgUzms9gPBPEB6inUcprhP2EtYaFTTtweK4fpbP3cCi3CdnpH6GRMqDaVM5agbB2in",
  "key4": "3PDBE9b55BYv89CHyeGG4EMr554T3WwjqCqo5VqaSwrMWUdmuuThMkGmtaCuNxLyVAaKM3XTnJeqirjQXiknHyp1",
  "key5": "47sCsboyKFMB2AaSYHjE4su3ix7vpyqxWM59om28aLYxeUnfjuMYwniBbLxKfj2ekQDBfwWoMbo4Pg26VWYkT8aG",
  "key6": "4GK3VGLSZuxb7pbCy68UXv3XXb3zGFhZREms7Zx6JtnyX8vETBX4F6kHwDmaaUHC7HtiaZsu3YZXQBjiK1cZj2ew",
  "key7": "2RYJi6TNc4QRop2gZ4Bv4kMncKRutSc6sFWt86j4H5ytKD7wwoMYsWRo1J7isHpUWDFHw3cxWJY4SgoNFqzAcajM",
  "key8": "45uJX4RWsKvpXcF182g7tBRPj2QvwqWeD2X5dKVLj51cK5pgNdTpGiTFrhKrDb4VCsHLHa5AyNTS7KMRTr7MDm7Y",
  "key9": "41F5vr3eUgfviCrb12sEdZoVba5mYd1WgPSqQ8P4sMJdpJ2JU6Voq97YZCxaKJJpT7PdTJzamD6qesmMvTBwpdn5",
  "key10": "65MiiTFYXZjCCEmXGnmN6G7XG5BTpKCUrUq8sEJHn9WNTnKquAcdxcChUziW4CDSNhEcM68oLrphMXMAKFYSfkYW",
  "key11": "n33SY94qHeVGZYrWR85uLKQ3QFmujsVwvktELVLwQJJ8jxwjh81597sd22eY7jpU7FawKujq9arXTrWD5XYKEGS",
  "key12": "64yfSL5X9db6hayZxv1wE6Tcs5ikSGJvyrTTb1omAQxY9UKRGTKGE4To57qyyL3XPXJn5jPbpYQFEpXQRjFUFwhd",
  "key13": "Xx2qx6Rf7X9CXCmDY4Lu7BjnqdynZkYqs4VTJmGGXVuGri88VPQMJ1UooXePEPJukAQcZxwFt1KmhJwacM91kBn",
  "key14": "2yGvoCB1rFMSbAV6EaYuzqBeyWqrPJ99WRSnpHVX7iC9q8sf2J5NecmKLP48KzgBscLh3Nn5fiSf8hgXzpUeDaUN",
  "key15": "2ypgFWL9RQFXx2P76n6CYVBWgWuC4yQ9n3otZZk3mFX6FjtsdWC1eUNv4QJDYx97ogXN9PMhFieALpLTbqxp7DqC",
  "key16": "5xN257DLFAJpXHdVwYfb7gJP2ZjxpYyXo23gDgpYsZ1S9wzZFMqqKBk2yLJTyDDB4CeNM3GczNm5LsXzCjbaUNHW",
  "key17": "3QmvGCJ66XBuCecbSU6MXEdM6kjWLseVzFgiVNRrpDycsEGmNtAvp3RcxmPn2d95cc7zgonoNTPVu7y7khBMpaMB",
  "key18": "4LEFx5X4muYbN49GmB7ihr1bMLMyAYeXFwTi5z9FaZe4NkETEvT9xo86VVsyASdyTqGGYUZronm2VcszH79KRgkD",
  "key19": "51z3ujmfzPgSuKzZ58PrWW2d6UkkTQnaHorMWHmLWLhuJodzoMpw5VUkJTXn8uboBjXURuHsKm2utDQPMJX6wMhi",
  "key20": "3HEWa439wtgDfpFJrinXgWvZkqyUDnRGdToPJ7vmnaE3itvnkjXXtwdWc1yDd4wKXEaFg9Snds1ucmbWffJwfagq",
  "key21": "34CEKfBE4yXyS4W1hhNe7bioVpNMYaDxWdfGLffjYyUb5kTbWxYMvkHGz5AGLXk3hXHtp4rrb4fe5ARFywr4Avit",
  "key22": "uCuChdviLpA7Q2XCX5iSUackVWTFvMDPtNYm7Z6zNy3JKFkoEq9fPYdqHkeJT6gKYrRmFYBqhBZCkVKMbggfZr1",
  "key23": "42ZWT7Rj91LiN54H4aEksRycFMDSQ8vLh1zRU8kgnRaKA8Cg82FrH1WT8ejmrGcQbpbRYvZpE6vA915p2dSeJpv8",
  "key24": "5skbgVhFgseibuwVDUGPuKTySqsP5pfrxuJdLM71F4ayEniZ8mCT8mc2C7NJGhjkToERhhKR8PcABUcPmncmq5eE",
  "key25": "4ou3nZEt3WF3v3uk6JUWHJBZbs2j2R3ctc39J7H26AkAqKasdyUnhGPfLtR9MdbXTHs9MeabLEdAC11Nnfwcbo66",
  "key26": "5yttvQw336AukHfLtFD5WGmRBxYLGptRUC8mJDtCEFLv1JNimtjC6ktM3hG8yv6AkYE6xrEhgnxPfwD8fr5PvYcy",
  "key27": "62EKzf2iDbKy8rAuahagvedpGoS5ecrDRnxC2J1gnL3GMxYbtkbbs4yFcPG7NUXteNT7sfdanU5howLUjzP6JCt5",
  "key28": "3L8gbfzGibW43ziew8TreA3Bp4ABBmM9TEwY8vDvjA7yAuyg8UJQNfAY1wT3b2W81S22ixjBEjRh199oZ9KHDTRq",
  "key29": "2YLMXfn9hucYWQVh68ez8T11d774SiBhNe2nVEegEpb9NQtHhmKUB7p2yt5NtQXo9kTTZGUDNwfou7UNMq54iFSr",
  "key30": "3C8Azni5gUDfeXa43k9REd5JUM8mp9vnfSudZxc743F7fhEaAicugAkSpx29V9XRXHEVK7TnyVxZXCAiKTEhJYxA",
  "key31": "4eFAUJKhVfaRDvPJhFsQRawY24Ws4gwprbXYgii5kLFKW5WuPWMB4kPmWZ1YjvvvPdBtMWqYUPDqzugZWf2xFjU9",
  "key32": "4YqEi5v8aqtiwKwdxmJkEaLEBuq7frowact8mhFdB33V1ytdDDgy5bB7yeUPCHEcisu6eKFVcfKz25BfQNfmZQCC"
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
