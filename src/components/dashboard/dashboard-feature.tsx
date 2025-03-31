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
    "5uATmxLwnQPmerR3L69thxVyTXNFnGr8yC3gDTL7NXExpBbaoKzzrxtGwcSgH3v5Mo3C1ceSxQaf8fWGDYjuc9ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fr8u6EZ6VZAxsatVeMtAXkLG45k5ZyE4zKA1BEPcYfAGqErNm84oZAkK1axiUAZE7xuU5HzzAwubSREGAx8t6cW",
  "key1": "4s5TH3eFWqJLBSBZ2JzLyDcfAKwVmq5EMvjEA4mStYnRpXpYeqoPxAZqa6K3NTVWtNvW81KZ3NX1ztPGedCzWa1D",
  "key2": "53MAQw4emb7j64KsNWVEKTpLNno4hpQgejLzKWrBFmeP5hjBSRjFwD8A8f7cACypzRj6ZRjQTdPMThCQw3YYMgQW",
  "key3": "4nEJ5A2n1i2eXypkn189iYDhu4xzCxDeapRj8E9NDamghzh36tQYJUyjA325T64u2sY6kmctb9LUWUcmxQqqmcnz",
  "key4": "4Gc6e2a4KCo4sVxAadymvwV7rV7wqMRYCUTGut3tH7rpFwYcnmBaSRw1QQVogTogJPLsftV3hSVUVedAvq5jFG2U",
  "key5": "52asfhqTyV5ytahodzGYhh36Wq7yk215itLTSJNp2Jg3eJwCTfJYYmtXzUySPXcghCUh8NAFeL9BCB2gdfx4fxQX",
  "key6": "15CpvSxhkwwJHqgtLdb6riJqN9rvpCsEWVeNpoBhuTHZzKuuY8Bas1QWmGfY45CsdrxkwthWGP4UCz8fcLQQaRn",
  "key7": "TgGL8X2Cx1cv4AV9mNEJLw9So3svjjtPQgF8UBrQDAdCbTCRjatft9rhjfurroE84H8GKm2LaHyPAeTiqMBz2N3",
  "key8": "5hFsnM2Nun3Uty236HnxUYtwTNfLmYLwTpvy6HZorMjXan9hfH8Ctrc72BRpDwGAUwMGxVukgdzBo4fH1z98QCYL",
  "key9": "3nwNZXVDLQVdCntp1zJt9jTGiptv6umkr1vp3i71VaSjaVUx4kocvRpmm5hB5xcStrdedVBJ3nphEuKY1uFYM1Ei",
  "key10": "5JqgTmDNVi5CjmSLyvHDkqPgCb86TAyMVXs1oyezRPhs7SmtSMyAdPWa473mVBKc5s5Z2kJmZ9z2D3Qdd1fKYxRd",
  "key11": "2sQ1tJdiheGuoZMkH2fnmvZGnnr313BGxJ29ucYNEZHmxpMTFnvE3Aux3oQbqhj17eyr3DxS91iK63edMmVYuB2q",
  "key12": "5k9MrwZFt1Pf9DuKdzY3AiqY2foowJkZWGqph5RhsS9W8KevmtsUr3c7QtXCrC64qbcYndcLtZcDxtupBxoozQzo",
  "key13": "4D3FRDwqKYQmsC22bcxBgKPA2RLcwkvBAFtTK5w73dRLGfCAD3kC6ZHzNfxCnY7RcQRwhfWTZ35uHPGtdZyUBBCM",
  "key14": "5MJB1XhxRbmBx8mS3jiBr7qnWcszvFvAG2XJKs32URqZ4CYzrsoSAM5jgB5qQTqYRA2MZpo4K9kkwJFmeVsjSD5E",
  "key15": "5WKRQDH1fvdLrGyYJ9nmGmzBC8d18GyDExMxj8zprXf6XiYrZKVuf9tpG2uUtUfxWoMBQ1au1AwMTaLzfhen1CsP",
  "key16": "H8wuSyyeUJVD3N7H1DKD6Zu76VXHAVzyrb1hwGPEHbG1pphFMHBbvRAdcNmKMDXqBgwHS9UnhrULswr4LNN6Eke",
  "key17": "5eNtmvAoF8BAmwsKuoH3eutZvekFrG5FT2geojA8Mp2hzusoxGW2ywe5GBVMhyHXu8kR3s7WvGj1rNtHT2ebhM3S",
  "key18": "65UYnAN4TQq8D9cq1BJKjpVHUgTSanDFrQ7XuwnZybxBKk7x9SpvLx4y583So291gbHrUZqRHJWWoKhuYohz6nub",
  "key19": "32EekgNWY5kEkYRZLhcTLTZ27ryxre8Bd1FQKvkr6ih8NCBMfE95hirYJ9SgmQynD2zcmqbRJH4USEHsYANmEn63",
  "key20": "4SGxyrofejfc9J3dGNyBGue6LnabXvhz9ddMnRYVWVR7FYohuJRDdbhxVG8tAeMtkR2XZDeAtjxbsdQK8ZFensw9",
  "key21": "4K9QsWD2YLikQYjFBhDNFAVrAR1Z1wAjWCt1CsX28YG8CP2oSxoKqbZbTvP5dK3dt2LhirteNXv5BPCA7s7a9skj",
  "key22": "57gXtu3RHgXodZ2w9WVCFh6FggcmSzTJ699xnzJwKGFn7mkCErFdPVSA9QHZ5iJJvwhsn4sk3g5xk3SGf1J6snf2",
  "key23": "4sW9jHh5haemTWfLKEqoRtQpTtSxNnUwwm2xmmFfy2v4dn8vDAG6bhNspU11d8aCxPZ73hwgqAnX8ZeL39oibSEz",
  "key24": "4ukgnXjdWRmuK6Nf4a4wHhbiRvTkB3qogk3v6ty3wK9BosRjYYX4CseJQJZBzc6niivkDm4k1KAAhaFHzSgx4qSQ",
  "key25": "5q84Tp7CV1fjBSHHFcJkWVcpx7bqc9crkkhY3hYX9P3acZ6MPaZ5YQXuPc7LSTWsvoxcncA131JNNjN5ezr8bzZi",
  "key26": "5NGznfPqvbNNC2vqy8q8AZyiSd9ECtDaWVXuW5zGdcgn1BYBLhdSU5mDkYfoKn8BcRZRUXWMWtupkKD8MeiAK7W9",
  "key27": "4js8hLJ3Nrbjg8znMsHKyQdtaook249JddE5uuvY8eufVJWQTuFQDN6PJEAqyo3KY287nBLKhoBUfsuDQiKZrE9j",
  "key28": "5P71x6pL1FDgkDgUSV7E3QQxjXkmDWFPVQdjSDqK4HMqsHh5kJDECW9iHuZyNMEhFnrB8NxxTSQiEF1du5q5h7Fq",
  "key29": "5GCdFXBDueTHA9gFBj5rmt4BBUNDqkK6REtmpRvezBGPbTnsrWP2KkyiNUV3Ah8MHvTB1Ndnm9YSfTHJMqQHcpv3",
  "key30": "3CcaGTKoCTpbRBSLSmscczA1gLu4cusjPeQHhqipZNt5qomRMTCBvHbexS92PvBSRtDFHLHZyYrDEuB6dyMCGfpU"
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
