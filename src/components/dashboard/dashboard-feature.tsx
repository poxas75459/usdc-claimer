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
    "5Fj1FTKYMHhhoeMiCLFAkL7wJY9ciZR1qbtLQktmarTKMZtm7f6jEvoXrnJjrnMPYpx5KDdotEd7h3df61iF3oV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgrxyqtDrDcYV2Nb25sGEih99UJG89ivMgw5e3XCDMZff5MJan8x8515JjV3bawjN5d75wu2EfKoyHn5H8f5D69",
  "key1": "3d2gXGi4WBi9LdirW8dnkKWbDDrHwygFKAxxFSDBmtXmX7UAdMgLestfX2dt9LcPuxZnAHQRgZziDzmGPs1eCGow",
  "key2": "22Rfmkh5GzjjfXz742NksZVNC52dw8wZ3Xhzk5x5wsbeC7dhghsco9oPg15X7GWT4SeqSBXqe7TkmAYmtEYgBVjD",
  "key3": "2f3gMq7zvVseDEsCqqmHYqrpjbdk2EN1xZnXtFsq2RotHXxjeoV7rx2xdU2sdd4nZnzfC3dkA7fpPqAfNVBFAS6c",
  "key4": "4ES6zFuGf3MSfBeJCkShfHLPuzQRrbX9a3qM5vdBy2ybtvT2HueWP3mXkD1EkcrEbDcF8Jv3h5X5ebJgbab6BcYE",
  "key5": "4BWUo8yM9PBVggnBpNsHjidxZaw5NBCDLfW6FGBtAgm8FfTUMViX1nZTnrubtLNCsFjHD8hcFxnH8kTgmnweS3WE",
  "key6": "5kEkNJKwojf7eya5XHCpNG6DrNE31US48XWeaMa4NeBChdWisWdyyq55LbyyHyMw2UaX1NAiCzgCE1uim3bxrtum",
  "key7": "rx3YqYxsjZz6DexE3a4ZuKCxDqR1vQYiKiNdazLtLHnNrSa5Wm8KK5r69T4KNfYVb69LThXSTkdx68MhrpqhSbK",
  "key8": "4ZVfNHEzcyHTXCN5VCMrFh4nb8SENQYssbrJrU9o6xVpwhrHnRe1ihZisRQktoNbayQcoBsLVywAqcvi5wMR1mrp",
  "key9": "2BQo54g72WHfhmfHYgbPyk4iTuoudYKYx4tkRT4UJ8MLULu4Xqu5owUSkP67vE773hZ8q5gkoae3WSWuNCHCfXaG",
  "key10": "3eckPnBDn3ZnUmY2nBmTm832xRscs1vonCPLACPH3Nde1NVezxtzPihVq2vkna16WAkK4dSMAsjUPSAunahz7R6N",
  "key11": "3aNHBkmqBBibqtLZpJvANRyJNAPWvxv13JGfHakmgSV34ntfuwPmTeLppVMPK3eKAd37uCZJgR2Gqgd517cpphdq",
  "key12": "3JEqqgHq8ndTG2b2xK517Xi9aYdythqg6Pi7zQXuNp9taEY5rDWYL5Vv7zeC5pRoqe9zX9VqrEBBfQFzHKHZtV7t",
  "key13": "3U9xmgs1eddreFRD7CZrnjG5WSNkRq776ivJRzHKmQuu9g5NZHPAhWQ1yYcauTMyAY7XWCgjNBVaWHQvQ1x8r81T",
  "key14": "2gPkJN7ZC1ZvDkP23gXpMYEgN33QJ9rxdQ9b4jq1mJZoJNZykBn2aCwtrPoEjtMrCDHsNTdmoT49y3H2f1B9MCKB",
  "key15": "54qpog21Ej5uVxPtHAgiyR1DUxRRAq5ZvEmY6i8HF33hMCaB6weZV43SCMHq3PyEbwFsKKkZqTL2HPW3Ln85NKTP",
  "key16": "4fGZKoTqZfRudktihDLVARVP1idjrRAVV6jFFwoGYdjgk2qm661U5RKNTSj2BRgg7SuGnYT7Y3PAq8t6tvnmawcq",
  "key17": "4TAEf1WBfpCSFT8cnKeGMkqVqFyUcXQRhitk6mWMTjqef2fssrPU1Wf2jzD69TWLrrRV4rPX4vveiUqDKWd3vvfT",
  "key18": "5NcAFKyoDF78Y1kZMsqYuTbx6zSDYbfUHwRB5uvSa1Wnwui7vCBrnparcG1igHALuj51z66eH1DYTvmacumn9vGq",
  "key19": "2C6yk4jaaSH2PBTvMPSh2i6Ak9bSeyz2r4bTsFLUtkfxWhHKYJKrN8oytsbTXALwjvR1hmLykc5aCBcyujBT1He9",
  "key20": "66ibBfQ8VtmamZn5Xy2CxxNAyijgdtscxpjcbg4wBqyua1WHmgHKC7ucFjosHduFKLhVsqUA3hJknCUppXpj7Au7",
  "key21": "wpeGcpBSw8SHp5Bh3wECYRBrRBzNpDnyoeyEXFm7u6yb9isrWpwwYZK13SPTgp8rx4Hcu3v3BtE25Lfc5DkEbDj",
  "key22": "4vrdnoKogdRuRywRK1tmuU79Q56RBYvDg3yEhWF3saKScM1UcEvBTMivNMdfwUiPyKjazk97pZUqbx79yp7hemN6",
  "key23": "42sBjfeGw2ut4VE4sEUtFAna34Jp2EuBvX2Achs7PEt28px7u57Y597hMQ5JfkyKhw8DGHiTCyf7qNSoZ93pum45",
  "key24": "4VwQqWa4nXcKKQZxMy6NWCnwXurpAprF6LS9dfMALtwrY4zGzbqqJANeWuyBNoZscKysSNdSYbeF5dtRfJTBUd1b",
  "key25": "4JwhZhqJHRfRFNPKEBb4hVzRyw92bpcCm9SU1zyzXctaZ6huUaW1JeZQXZq2aDPNTrcX3f2opWrzSAJZLLRncnB6",
  "key26": "2z8LvQDJ2m93PuZsXcBofN7hvhHeHPU74PqHRWZDQGqvX4xYL95oV8WTz9nvkdWaBPvym7MhFqMxhTy91yuf5X7K",
  "key27": "4qntiDpE1cfkdQRR2PUEgrWT7umv4TiFteeE9PS86TQfHan868z2zTVg7WdgqattKe2TCqwu58VhAnqwPC2NQ4P5",
  "key28": "4eyJqVgqS3fWkaT73e6aserBhqbfsvdKkQnd8cuKQFLmVgdz1nXBAMb2p2WXZGfnztmh5AasxWrf5hdMZjTo3VDD"
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
