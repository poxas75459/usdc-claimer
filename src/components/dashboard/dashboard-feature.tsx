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
    "3YXy5bUayUk7pyfvLjHgoCDH66ksqzbaAnRLEQd8Cxgj7CPwg3dCuk7x4m15y3866VYpV6FnDvH3eBW3hbMCGtE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "486YsMiz7uJPKPWvG584JWZgCrhwLFZbWH1PgNoj8DmHUkYJtHPRRUwkzVMg3vMwnZ6uG2mtUwm9f8Mzv2YpJSwZ",
  "key1": "3LHaqnLZXm9zoD2T45fNRz589PQA1EbGeBKTRq364bMVkDjF4Gse7jDEw8LZtHUE54n8rfGCP74rjrUkhjRkwtn",
  "key2": "5SGAT3tw74KjbMBMDxbFE7k8sYba86hMSoE4jiJrcGBAAx146YFd5C3gQY1vzZyQgLU6GnDf5SqQ9v2qyNBHRzXu",
  "key3": "QNPhsPiG8EUqVvdLNPNgsu7yDT2Hhz835afWrwCX94QwusxigF5Q9yri1vahP4wmcJoF1R5CLYifupLYfGa6MDM",
  "key4": "2G7F1eptoV2imC69irgiesG8jy7ThL8PY55o5x5Dp31fkJ3HasCV6ChUbToZqsVSfH4xEPYv7RpADivP4FtoDUkF",
  "key5": "4hS3kqAGe9eC4LPuXFBpwrFAD3M1RStxucyoiZKRsbABsSzsSMLn6CD92GB6REnRQVcC999GqBNhFvPRJ8oNnrPp",
  "key6": "m5LmFMGYjwGHGSHRgA9jrrYCHAZzwsSAhYYHSQfxiLrdRLnhAM9wK9WKrteaKdUP44LfowjKWTH6rTSNgGmrwwu",
  "key7": "2ZCpsrFtAxN2ceGjQdQ6jpqrM2Mqd9dmarw4nRL3HpyGDhcnzTMAVo4ZsZcaKmZsh49hzyLXLfUdYSUmGF7U3ogo",
  "key8": "4U8oxukxbFoyd7yJWrFX71nUGjC9k61bXNW367uhWiyFHBJcgpKMBHsjtAHiyPNmE43Ye6Zyxu7QLY4CDD6i4Zzn",
  "key9": "jrzmusxP7MHpQ9bUobfwhFFjyeu75sCf6gFZzMryXuNAmfnEsUf3wq7GcVFFEqj7Kgx6P5UgtVzo3zvaNELUY1c",
  "key10": "219qsDdi6a8BNfCxmXEMMY8Ax43yGSR75JpbkUN5Ftv1yUGWGdayrzhbadJGMSb83Mo5snwED3JLLPLx9JWD7eF2",
  "key11": "4Jhebe56fgDyiimVvbUgzCGMYjdFTE33csvb7j4fVouk31k9JBJChiwr91gA75u4LQwfY3UBMGtdFcFGryBh2v53",
  "key12": "22UofRtF72yjuP8nfCamriCiKqUsDj4aPJLkHNgXZ16wzVacxuBY7eSCFxLsRVurJPtQvZAeTwJWdQGSPhYVU8kC",
  "key13": "55TKbndZg4u7r48S8oVA7CZAFS685qg2DgFtFz2GsJbn8guXvyAjhjjL8itZtBfD4d7PkEucj7S4vKZLAhyF5DDs",
  "key14": "2Q7WMea1qSEzGmJB2CMQbBkhafghxkEnvkVFbYfQSeJVyQ1m7XLhyE5FvKs1m8ay4AKNGF4mojg4bsAKbBaHEDvS",
  "key15": "iPxvfcJrDLWgDWuCDjdbFKAjFH9yctQ1KFNvSVG1dwyw7heKkmLb2BPyL7BpRi5NVwzbaSfd3SCybs2PwRT1oBg",
  "key16": "2PXCDBegBHt1WmVfh6krFD7sB5RH4Ui82jVvTZkssgNccdRviJURqm6wwNcK9X9ZgoQ2B1nSZXBNeXFUbuTdLF8d",
  "key17": "nvWNBS5oDMuEd7Fdg8zK8fnAG3XwHbPHpXQDuDZGWZpq8GHaipxc1ZtNoGpxk52ZoAJ78Dqu9H47NfVdCyMNGba",
  "key18": "w4ZMhBNW4wDc5CSaBkQ1quzQVTUSR8hKmVufJ7KTKwkfmcrMBRMof8ERzougd1zHmAVuCqbzRKte3sbV55my2J6",
  "key19": "3xa67kEKCvHdNjxY2zysyM6pZgT9Rijv1bHcJZJ7xbaYACjcg96YWm5GHDYQ6oQoBQR2m2Eq7GrWtqNzMHFmZJw4",
  "key20": "5LZW15EREQJB55pVqJLXJJg6jXDBvc1FHGruXLbVjpPaartqEchjWN6MvCFWb7MRSw6dkLJYHavxWEtnpmsUvRAY",
  "key21": "xHQtDy16Jcvy6z2CeJLzw88qdMDFoceQVLFVK7bdru9i6WLVBSNSboqF1rRbb2Dbb4FVjxtAR6R2rQh7qEZcfjb",
  "key22": "3wmNX1V5SSHE5fHDKJa5qLkKaKq1xBCgzpny1YRDDNZM7kW4tDmgpZW3AnuYdVfs97YPSrJooXVd4DDxX4Dxdxg6",
  "key23": "3F5qDz7YhrkiZpGecaBp31jjsoJH6iiFSixU1Ub4Et5Rj2AqcYBGBT9WRX1741Wv3qCkcHBAHBAP7ZsBSZQUMWvK",
  "key24": "6A3pouBy77JU8Nv2rc9eYucKLpeygxTAN8RFFAwkadmng2g8PznnpMpyfgswizHrZiEAtLjqgm5igS1aLEtGHJV",
  "key25": "4pF7YhFztY8ccCsz7jVUcRHo5GpBUg7KgsxR8cGFuMnhM8WyxqmCU1vxUZKDmDeKYgQyer3B7aYizLCgxanphQT6",
  "key26": "4mT4Cez4JkK8bkAYyiz48nPfcK7y3aazETsCgEtkaVrFKCne7wfy8vDDsJ4PLaqtf93HRK6GtLoG9dTGa67wfayv",
  "key27": "rQnQZpPW3MYHy9ULW1vydWAhwwyTL5jkW8Pz8RQjJZ1yU7H7SzZLeDgSAdssR9p44n9eHFtnhRmgMdtf39pyGpZ",
  "key28": "2bwAKNqTupiqKm1DiHHndNkH7efT5PtBohwNwsK5RJDfHYjnfoKcqkvkRrojH1idGHWwzBujL6z4B8a15euqnDpV",
  "key29": "3weYi67bVUrcHmq1YtGnYArUu619BUJDMHRjrVv3LeFmjPuxdgucgctGACDiP5AvJWGd6bhciUNBtz1R9AUqgbZ8",
  "key30": "2ZcKFLCQ3e5N3ubJzv1Ze6PfLYAQQDRBdNe1xsXa3ks6MpLp3wmf67ketokojYPPgVx8ii32zFP5XwkHwYQLP9CZ",
  "key31": "5GLDXgW6KQCVmruqj9D1zpwMPoTiHExGtzHgEMZtUYpk4Fui2mJfWSQ2VEtwFD3wwRsxXkVUDiAgib4zcz5QFzUq",
  "key32": "3V24NTsd72fcWcRqc8HMhhsf3unqf5rGsy3m4EriMp6fKE6UuaEybcQhVbjAuND8rnorwAik5Y13snq2vSRwqXkE",
  "key33": "5ZmxJ9ejqVmZtCE7eRqAXxAPsQRGnAssSjym3XcPB1VpgHYa3nf3s5KhejQJwXykQEmrm7uZoDTfvJt6CJXoQCyD",
  "key34": "5KETJzak5bNCHAHtUcvZMYs8oF5cyutaaAqZdC7moG5Lw3oeNnhSMzJA3rDa72VdqA8b4QqiGBjNsEKcaPuZ4gyh",
  "key35": "1TmtdQM4fBPcR7azKqcK6UJcxQURQZmL4kMbs2hRi3r4Ze2qQN7rALuuadjY2EChC3z3djVZ1xQpuRvmbDhJHrK",
  "key36": "3MyRJ3dBtH94fxd1oBysSP8cDEF2qFpLoy9vAPXfmxrxtu6wCgEWDR2KybS2CKrmw9KmJvMiHELT2RFJqRDsNRE5",
  "key37": "52qFAgmLeJxYhC3Aqa53zBge41mC1kvUqVER7WGHmL5XSWiq5r97CEUnYbGhCN5tTmjkP12V7WyC6vGigCmfbMVj",
  "key38": "61o9pNzBRufMoSREQJgcmJSNkTp2H3NPrNQhM4jTNoo52KmaS2yg5Vr3fWVfjMRSHGv2nvFT28YLV8sFCqKoJ2fh",
  "key39": "GnwF6KknmfContY589mbeheSog4SGKQjNLj68s5fxjh4hVepNZAekovTbk8jLhqKcen9KW7XVYxaPv6wnRhNunA",
  "key40": "5xpRSm6xUxG1kSL22XtxaHtaGQt9tG5xurLwiHrDr9MPkvAGFpmH3sT1QkrD8Zn6tubF2vXR2FsJdWpyP1nmrQ2b",
  "key41": "2cr5dcfLvZ7ZUQhngsXKf7yGXDzty1uTsvRu1ejoSiLc6XiMPPHuauQ8nxBR6SALieaXft3UGcZJvBWHUpPG3G8R"
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
