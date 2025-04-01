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
    "MMP5Xpjook6uWj7kjsd5pGqJKGvU96pDwGudCZpNa6U5LicHwkpS5S5zbNaYtd2qEeCJTqab4pDURnWgwLuAUDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v8JRBnoh1KzcqJC79u8w2QLuqrTCFu1UAKMtEsq2XLzhGL5y8R4gSggz9UnzLT8J4ovrgbQxeUuYK8tbo69DXQZ",
  "key1": "475kZThg5pgJmbNKo9GKKtcW8ZjA6ar6rUQTR4uggmYc3Y5MQdZuZ8Mvm7mp3swwTAY2Nhhy9DczcV2CAMLmszox",
  "key2": "2PFQTaYp6yJbdx5oknPVwUVa64Vfdj5KSzYK4eNf1VGfRCQC19SevHRztC7TFGwEvY3GJYAWqXG1v2TWFomP3pRs",
  "key3": "BrkTxvYARvzeGYRtBuXRzw1jaJtyD6oMP6bTMK4XSXmBSfCPhhE4GL5Lu5cP5t1eo1VPSMwjArF6ia8SVywzCQ2",
  "key4": "5JFUb3NRNRim4Axs9a71aw8S91QmaVos7FpPb6tpX8ghW1ohyp2whUJwG4PhJWrjCFWUgL8ZApPDurTtkDgRiWvg",
  "key5": "28q4JiRkNkGSpXV6aezMDuxt1GRcjLdZzvbnhpToeMgcQ7wkcEzDW87rDf1zhFAEvnDewk7eSrj6tx5ABMfH3FE8",
  "key6": "2ZkV14M2iotwyCBzGiPF4GgaA9PVYUv763UiyGTuCdVjPvCmcgqAt1ZwymUzrEM1Xgsct7cBWKu6W4D1Ksvy5XaA",
  "key7": "4sPVTtPMknkYJjXSnxd3QTmra6se4fyVySwMNV1xBn3x5nvnmAuUyRpt955Xxv1sMm2MnsLsbkTsNm7jm7CnA5np",
  "key8": "2eCfchBkZd19pQ7iV7sS6qpXR9cXuyMBbbP6ex4mKuXtVbaFeQtmsXehHWSKn3M9DCghqMr9bwYQDm9Fqt6KuAhZ",
  "key9": "33nwGzFKZPWRitYh9gbJ9jXqS6YJXAeLMt8qpKjyG9SG6phDw87uQHSNmpM14g3ykYTAJUyMSV6kku3WsAgVLTJ9",
  "key10": "p4kTtgFkx8k3o5fSq3J6XoneMH9BfAJjnpep5cj9iWeufEs2i6DvF27cV3jMXqzGriLtTTzoUiMy2vkeaUQcY5M",
  "key11": "5Cn5ncicK1JJ1yJt4omyDA3Uq8bfZkjSKFEYm6yQvx7q4Wx7pzVhjzvS5ppS3bPmibvcH5aFVQpsuunL2sMV6ipL",
  "key12": "3E95iuzb13JZ89rkGugu8cwZBtnsL4md83aBG5vXZAhNGQBJGAMm2a7j9QmgUY7darpEtHawHDPMaprjxaBZhWGb",
  "key13": "To2Tj2oH8t5NH2YGQpbLTwU58YanNLZ8pHMohKWsNj66YmoYhDbJUHCYSMZdfPhmxHX2siLgWeoL31gmWpeCdLg",
  "key14": "5UZX5cxSPHH4puNqbrSfwy3edqv972xkGumyoWTUX1PVwDHa4pb1VgV2xShH4S8XcD7g1NXXRncCJfKTNJgkHqHw",
  "key15": "kQhbesrffbdA2SnGKmSJQeitqraYFexYR8dAzjMxezAuz3sRx7JQyF25vVgzeyAG3jDFEHqmyW6bp3XCxRLgZdy",
  "key16": "2WaWakAFyjr1Tu6ayFPjtZTLoQoDw584cDN3trVdKUCJKHLhWHdPve6TKb9MLZ8Ns4GWMxtK62Ndhy6yk36L88U1",
  "key17": "rvroco8tqGSgtNqNF6GAF2tzdCEVTV5XtBRnV4GV55FqhNuFdJe2nwDf4QsaFYWMESzkgpZF3tcLHTN2yxjGSow",
  "key18": "5miuXRfknS2gyCrpP7GMUTxKePzcTMbjNs58MAJYxVykAJPJ5S7AYWbWekQvhXhZ7estLXnc2VR57vR3k7SdFhzF",
  "key19": "2QcrThDMGwKKfZ6P1nMWBirbYZzENkgas39z2mRiTrDasgp9Pd7uYuZZGiLLdTxPxmErT3yPb8jswLmpgTEWrbRw",
  "key20": "4JYiqBH7ZpiRsfzxiYRy4Q4gvdkvbTGPtsZ2JoqZYUcGYuLMdFRuPnQ711rPUumK8fb1ayoEY73Rwxnk3HiJwbu7",
  "key21": "3L38C7Pd2acEENAbKRktgHJdNasCtTJgWseZ1RzUANsepJAopZSsQkXXwmGx6435PuTphQiU3TugNWrfRBLGhBFn",
  "key22": "351ALjdRuFN2XoBF5dYSGmKwXT77kDGJBecaXv65PnPP5qYWWBJiua43m3tY3PyVG626XjQVvrzNSSTwcZRZj7bj",
  "key23": "5SEf5LxYtx68NQySKBGvesXCh3drv6XH3ETW7JBVMU82x1f4LjAj5HBDTnn2Duph5t6KBswfAdANiv5Dkm2C63ry",
  "key24": "JzVTpcs5FxgH67yMmfTgNjApAu9NvMDAbqN4StqpMHg6LvLk94ZhtuwgAELHAwG2ZuGXKrCGdKM3oLaqGyWqod1",
  "key25": "89wKyDU2Uwqr882eewHn1mubLrY3eTre5Xkm8khJfy54EuNs5zk3JvBVd4DUwhjtDneyrxWCtzov21aVgMhf1nr",
  "key26": "35uyiSvXrXmhsv8jL3pTHxwgYMfJaYRJ1HZWSF2niuSJULC4d3Re91reyvDFnoKBLjFj3tz4o1QzjtfxUsyJPAtw",
  "key27": "4mbBrSaQfZdcqMXbSVGhuoYZszvWcubB5ApgN77a8AZxMrKurxd8aJ6h3fuV8m4aEAecKn5YKM3SDFZqPHDc2pZa",
  "key28": "6jm1mdgqourh3zF4DowmGbBWgSTRruNvzXm2P35XqWiCanTYsdT86Nk2tR95gy5KYgJa6axcmmSuvb3wfiaxSgw",
  "key29": "2xvi5WfuKAF5JvRZMiEvftpUPqDMgKvYvvGK5E685ENova9hhmUtyP9w1qGRJAKJSHwSrSvMnDStr9nZVzCDPJ3W",
  "key30": "rvEE2hRZzoeRrpAT6Wf5Scvk9NyWFfGQEVimfeErW451pEnARf2tY3LWpL42bLJj1HThB6HV9j8zzUqcQuLFKMW",
  "key31": "c16HiXa9KNyQ5HmqUoefKokBLUYv86qiZVD5YZUDGqNySVLzEogoy5H9V1WX9wv7HocDHQkU9pcsu64QZ5L2w1B"
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
