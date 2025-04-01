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
    "55K1KcuJ1FppLgCRhCnmwdr2pqKNhQ3W8U3dcCiK8JtGtnrMQYEhhSWNyEegm5jTLbQFi3fnDXWN5k9eXJwgLuba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391vewDCF9cPBL5UkRo4gVGKwUYt6fds8MTh1nUrP8bDn4aWUjx1mi3noNAnU2CZCQ12EzxHZhhGr4GzwhdGvGRg",
  "key1": "38bq1RE5o9mA43DUcAQY5SasAUJLSewaRyiRhZhYxoQSQ4ggwFncUqygCCPwG7ZSAVwJxXstTDbbT54zMAxys9M7",
  "key2": "4JhpE5g3qrFoSNrsJ8dUqBjoCSgMMUdZ4RtagQytLco28qyuDyDbws1F2TSpm7NvAJ6zGQ7rKywFMqruEz62ZWEp",
  "key3": "23tJuLcq1gSpD3LJzVJt7dcwivfyj9iwfoLp5T1Zyq6KQTTxGWT4Tu79AGh8Qi2SFTU9d7P17uobzewQtQtYYUbr",
  "key4": "vRGT9FZvzweZPLhSG4zp8yXTLjZ5B5hWg5rNqALmdv5rzhgud1rfFxC7oukpQoSgfPRGU2hmrciDrFdGS6ktWas",
  "key5": "4etg2BiKTGARBJF53wCNzjBTfinHNZMtmnMw2Un8SAzCRz3oA6owMyYGsP1Upusnah7LNQFuA9RtaZsW2tMH1QLi",
  "key6": "GtxXU9ZsLnohwvxtRLXvGMcCqkdoPyY7adpQ7Czsj11d3s8U1c7atDMGnKfbfN46o5psjeo7opimxfoYWddfh55",
  "key7": "3yBgda2mknKUppzNQRTcSsigKJsBZG1tAaz4cjMXsdrxzPX55w8fYwyaFiVzJXEgZ3M8ZcWafhg98wj7qqhmJEJS",
  "key8": "5Zttha3H1xsb9XhbVJj83BC63ikHB2NZWR4cBsmF7kd6K4CWuD1vPYQ36rFj3gPhm4PMGGZ4KR13eKMQgFYqTpHb",
  "key9": "5hwn1QK2BzyhxYGGyxSoWLYqSmBCEwUiP5FMRCHgiomtdWsYYBZgmNE11HCgdSfDx3uoWEpDEqQ7WubBrT1zzefx",
  "key10": "vyjiQPuikqXFDaf4QjPwkJ9VZHM1THDF2MpQnujm9RhSynLE4sZM7uzYZiNgwp8GVPLTdHFBFdkksHsGW8W7nw7",
  "key11": "5QNSMsVTgLeXDwDAgxfy45CXgV4QoFPrzbfufEMLxgs7LNa4XSvoWcD64fYaqqjnVGBG4J1HeJXWP9F6xXWmrFrN",
  "key12": "43bo8DXtwZn34achLCcb7amd1cuBp7VSnjUnStDKYSNA2SGAswZLXGT5DBRfkAk9AaJfRVPEb458hGCFmM2TjFcc",
  "key13": "67m7BTnKcdqXWogueUVeujtjJETPnAFqE29eYa3g1y3YH9825c2kaEhBVLk5rpFLjVzi7kxDMU9VBu6BfcsWZsun",
  "key14": "3qQpFMNuJu4DW3gWa6FPwLhSuiRC43wyM1HY5hyRwwve21XVK9Lr5XzhutNFSLUK5UQfdSxyqH1y69U5uLnPDC2H",
  "key15": "Ags6Snz4Jx42fzmFgbB52r98hNaRAvEnu1CZjugJGuBn5zef7GGZtBFiqAGRY7muv7bKAPsuEV9ikEb7E9skBxy",
  "key16": "5mvVkTv8jg7U1PGbaaBjew4ZDVgknTDSzqwc11H5k93jTsUcqcpjJechRsx78a5s7V6Yt6fCdZxkG6Cy2azoHvdG",
  "key17": "3sHDrrZ8bSxUikRZCh8U7RRW4Khj9U2ajhkLeEr76ynC6Yw9ecgjEdKV6fhF1gMe8HFWqFMDQR9Ejgt39e3qioow",
  "key18": "21gMLeEZ9MJoF9to4n6qcLsxoAS6RzvNuzrZigHSkRJdmABq4ya8s7bAVR5PLZfgf4RsReuui52NmWGvfUizNAPt",
  "key19": "3uoECw8oy4KmnU4P6PYbykCvX29oYnx5rGpUeHFLWNhqJNmCBvtBgRoAuhVGdavXyX9ztcL9BN5xUZM6ZU6HEeGY",
  "key20": "4y1dZpLorQ8pPeX9fCdPo2mEyJ727MkiG1ybyJbQDbLRDf8kKCWrWXYfsyyvhNphPddYoAZ3AoiSiEBJGBHssgob",
  "key21": "5s86yoBGBSxMfSNpqU8Eb5Uc7yfam7hqwUkQQz6WGG36Fw1LkycJ1aQRGYuRiDTGhZReqegSAwxHRADCAFo7EzAK",
  "key22": "2TM1Adv3H3EMuVKfdgibdDU64yy4dRSTCkyy94GdpTUiuDasGneLcAbJ1nQ9hCVBAdRHtmnafQU1E6tb6gLaxtbk",
  "key23": "49pnxViSveomG1i4upBu1DX1eiUsaAZYw9LJDPd5dJh99BYrhXdD5mYTSaDnRQWBMHrbsJid3vzFvCkQgaZWZPza",
  "key24": "Vt8f9jdQSDt1ytwi4Mhc6LW6oMLUxx2zcbG6uAMwe6zjQJwFx5xz2trXoW3Q8ghnufSkZRrGiurqDDkRnoW4b5f"
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
