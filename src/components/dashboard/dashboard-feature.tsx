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
    "3Gpxown2Mrq4qR9aPbvuj6uB19Y4rESXm6upuYg4gLxn1Lom2dJuG9XA4RqHU5tJ1kuiWye3BJfq1pjhNtSxeEp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w88F5yafjX5rNZamh9PqEHKo2QWKpSx3DZg2dTnnpAjBSvZfu3t44QZvNpvW8mbasZ9Lh4RifXfmBhWNEeqDt9P",
  "key1": "5zkmDtFRDNgfmH5TGkpqhGVLNfWQUBLJnM6P3CpG13yBvRXWbtF6qfmcKvtJNsCaQeMHvRJZzd9gMQYVERcbrin5",
  "key2": "2u4pRx3wuasCdsQRTtEMj5nQamWek5Yg96BcHqNSQVP8gRJqa3fezgj1mdi6kLTiPoD6iDt996pKri16WDrP4VU8",
  "key3": "5EAfJfWHXH6qh9JV29BeMPG1MWT27Kzg58qymFLH2dZPQqyrEXCfFfbwUoiLvC1nLT9B11y2gbetT6reVmBL3gfp",
  "key4": "FN5EQMdxrHvjMVLwYLSLSRujiW1YCPXoanrzckPL98jqGuKui7saVtksE9kYED5uqHm65md9bRuvgQYgHU6eMnJ",
  "key5": "LRdArhGq92oHkmBbQyP3RXJA4z1xxYCudPNDNiMj8A9rNaLYLhBjWL6xsjRes3mxgjBFthSErJ38adjkciB1Cud",
  "key6": "32eCuptciYp6boVxxYmdWzGGoT4PHyituu4HoQHVyNtWgSbG81XbKaediuMb9UqPtL7orMQavTeZFnETPeazfu3c",
  "key7": "42hLpgRCJBfatsePrvVsPkqsdsixk8VvPm6EBrfD6q5tryKKjsZiF5rx9Y8vPSojLpxnDv4S6fKp4iCgzjYAjQms",
  "key8": "2yGFmmbqDirCWdjBhDGSzz9PXz2JKMvJz2XLVKAAYEZM5Bg522Ucgq9Ay13o8jjQvDj1m1wbcjmnYfWvCkakdN6p",
  "key9": "2RkQdw2r9MtbfzWBvfmuvmgXM6onVM12jPwk1orNYraoz3a3NTe4eqSsg2pKthq6FN3jcE2h174KUoW8Ki91BCni",
  "key10": "5pExTM9CfbmCtrSCZfZyYKqsE2ZKe7ZZSwMyT3s82rxzun5UuDNPf8eobs9jYsrA7tCBGFh8xEKUwaNeJ1pzec9B",
  "key11": "dmqdFEhEGWQBRQ7g8LGLWi2Pg5qAbmHYBc8n2ytVCP3hJEn4JLJe4KpiS5pYyUnuVna9UwCG5jvXWDr3y98wbS2",
  "key12": "5Anfh1ug7e5RkpDyQrySh13HeNDuXXPnFcZNCopBxuw2H9QXUPtjZpsmtdQeoeTEJHTZ1RLsQUXKNPvykxNdJzK8",
  "key13": "4Bix89NLVk5jXJz3xL7nWR6xG9G5j4PmAfvCPnx2x35XYkUaFAhjo8acjft6jXJKSUZTPsV5HB2xLSLJ7G2EbZav",
  "key14": "xgqpRkttUy6goXJPnim5XtdvngDhnUYipCiWo5z3SyWyiiFkzrKcK5Mtfht1XCsyQUbjeieacuRRY3W3YbwmAPo",
  "key15": "2vBLQtvrzxebndD8ESmyiT2P3KXhHCN5dMzsbBw6nLbdvbXsvFZ57LfVZsc1rNKf5D72QUdBVpL4jnLsKJpuFJ5X",
  "key16": "3yqKG3MTde9HCpK6mitJ9Duac1wYG7SmwcsGdSYSX3e6c585u4NCNN8T9RWq4fJdQAo3WwFeVaU9Pa1RqEXAgwat",
  "key17": "xADebmLd6MviUDYWV3B3S2zhHiDZ4PxXN9xL7cqB95ehPxucxQksK4HbR9qXj5N59S2sDaPF7ixZhCEPbFNd5ZF",
  "key18": "26mreXfeNZS8mmLVqjRAGvK6Va9EmToAD8hSzfahkiawnPkggqzrXZy3PDqmdX9zpYwvQWLuAJ6pzms3Fp8jpgPZ",
  "key19": "UAsLmGp9eoNWVxvdiRW6HR6TiKE9mbPphCZ9TuW5vVBQtD6MZXs1koBbGs5AD6ZvHx1tZAF3nq544pWoPjXiKEh",
  "key20": "3998EHAFvGwqrSg6tEsDGhL2dqFUi6Hd51APKTMiPsnYQjfGofGEcKkWvwByhpTCnoxYDRBEm27mx975fzivdvKL",
  "key21": "4CK22kV5okUxHMF6W8GczecuU5p6kV3bsmP8Y7F2gHjNzwbiBvKtBeJT1W457pecDNVr91gf9HRN1JdQzUkpE8Su",
  "key22": "mBjmXiDLRpvngRsDgWT8RS9GETNQjpP2FoXNnkPgQrCohTnxFgzC1vzP2KF39fpJKje4p31cwyRVmSu8UaGzDxK",
  "key23": "etGXTavmbs55vahABJfF49JBddqdZpxp8cSjSBuzL42ZS5iLUpJcCqwtCTJkdkVr7kbhm9Yzy87AkpW3RoBrYeD",
  "key24": "46snJrYC2LYTkWMLX3QbMTAK3HwCWwAypztLqxXkGfV3vhuKnxjz35WZmupCYaPKCtMEtkRxavdus3A9FtJtAw19",
  "key25": "5tAA839z6w4vXpQqMETDCPG2G996DumjGyq8Zh8kQ5TggvJ5WonF2yEBFoCoy2BjbesNW5kc3Eax893Zsk25cZcy",
  "key26": "2gSdzb5PG5Fms8jRa3Jnknf1awz2Yr9F2Twh45knmhcC7SFvSnM37EWrbU7a1m5c9Uy7ZduBt9xeonTSAmaZTdpm",
  "key27": "3FERwaTCZXzeDCXXx8wUoqnS379XzBCaiMrR8gY7RjtFk3RAEMCgchfW9ekiPpbs5UoVk58X4h66Kxrq5ADrhZRW",
  "key28": "53vjBfw9rmq6TTS15wpF5vAUX6km8ZoY8uQ1UFYj2iHLdSakP2EBrEtpwcs6rqdoBAz3DVETvVVf3KgUemqWWd2K",
  "key29": "La9EVhacEuySt8p6GXAwSyYfUnKcXoyysCHeWKb9bvfEFe8qTfBerLX5DyurdMQJ8H18JvTdpKgM7RYXavbyzN2",
  "key30": "4cvtKFKyKNCGVNn8oVYei59kT8hC357qi6UKznprSKTCkNwRMoZpLtsYJJvgsAKACSKZTqXdub4E4FE3XFkqGjAR",
  "key31": "njzfjT56eZP3NfvUGDsL5YBckfEozjUTuj7MVR9AHUurwLyXeHpQF18dXTvjnhPVR8hkfFiz5GkTjv5wkEkbW4G",
  "key32": "4DwVGvHqErQJEav4xUWWsAH8U5dNEFqaHuqucfvPGPPr5H7orffKpeisR57MEvMUNEL9d5fQhDU8ZgtWycEpdYaS",
  "key33": "4ZMuYQVYBbR2ggZPojDqq1V6B6hdqQw6MNzZX8oxTVvzmA41Ldd4bLLvAADGJKnkAyhkavyQXivAM25ybpkfV12d"
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
