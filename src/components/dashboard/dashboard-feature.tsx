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
    "5PekoN4EgCy6jmJ9LwNdQx3FPRRqJJinGjbyQQSj1Sd95ehDiKHA7w7trtZ2NbrgnnDurqnCFHtyRZZBNyzQVXmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XR1QCLxNnx9qfsDvKvZkKHBWtUCWQDgwz6txULxEFQFy63BCGPd3oU3HbVsfNyD2vKwZUxpqXRSMaCazh3AmM4a",
  "key1": "PgcqtV5gr5y2tYdbQ8o3Pdn7oGEyj4f4w7gYELGkphq6wd9BaNXRpmdXNvcaVjD3Q4BCVWPQoZ5TjNaDRTMVKGm",
  "key2": "5vjxV4AJeYhHhQPMQ6nocL4U8N8Ey6Gge1yA8AKacvi4toKmHypzWXBD22M5iS6TKCjbPmDf2emPwpLi4f3fi9K",
  "key3": "3LZbi7KXdetXDHGp9JpVyCWBFgFGHGnYmWcoWHyd2DLwH8s8YpGQUyXJS8fwaNWsfoiCa4KKtrJBwLWfjumpKQiQ",
  "key4": "3tUNsdpBXMqEH8z1hxZgtDXRipbMCUUAhqRrhk5tLDSzScvb8ha7yfack7iRoTtuU2aa8Z3vTbSHZ2nniTsFZ3yG",
  "key5": "44EyMdCeNT49gTAdGxm5j1nMsMCGKhp1nrMNvTpWVvbuv6N92p5Uk2DoayWpMTxoBgse24EoxdrLKwsL2i7HxoP",
  "key6": "21wVJVEkqj2kbypTBAhzYjZHVGRFWq3gnfeAg2R3jCJuS4Fn3BhPUg9E7wvCxNugFncnmXgdZRh9ViZAWsUoBG6p",
  "key7": "4Zqz2qtb8AuEpdGBWhzsb577yGffJyhvkSzE2DqYdxq3nz1vBBTDjzSwFHJQje9AFMs8JW4rcvfpmPuwwBiDm4b6",
  "key8": "2w1L2FYmeqrj8iZDd9VH6cWAHowPdALEJABEwNfM2879kDVRt6zBd6mC9E3Z3sTHkXXUCXx5u7KbGXqU15MZhaaZ",
  "key9": "JSYXJQR9urtQnDXY1gS2Mmby7K1oiw57MfSSqqHRFrTvRo2BZYZZgvawvHrNZ2GSuR6F1WAhV573jGwfcURNm8x",
  "key10": "4ehiiRUq66D9xbW9Vb6oPxrWnUcbBKgZgtVZGxdkrCGCyK71FTZt8AiZ2XRa4YSSj28YQ5HCoUp8cMaocdav1sEn",
  "key11": "5CuW68ng3MjLJHvVqmq4sPPT3u3e9N3QgJKdgcJTdrDJw93FSva16QuYVqkXicf1ExT17nqPhRoZcTMFfMgfLv3o",
  "key12": "4UHxyGUUX51RW4JQdrUNBXgwgY51WxsjXTC2kQd3Vkq2uJb1QaNcnjrSge28PRFCqPrzUnKcoPkx6ioMoZ29Gz5b",
  "key13": "3Kxth3x1RiYQ2JMxwDdMZU9xCdzYUtxktXB54za5FoSxbRbgqmtrGyix39SvrnbPKNAnDq8E8pU9JzoYcFyU5JcU",
  "key14": "44s5RvuFYMo52UT7MXo3eQStLRW95iHAHoKfAPNXp1FXvfE7Sdyvbpp87mqjHM4ce3jrnxgghu7ejy3e25MKJZQ8",
  "key15": "eFpnjUydDfhHccuCD3aDeYroCgzN5utUgN2QtZNkX5PTpnf2EvGoZMZYqUqJVotBmD9RyrCEg4SMhENkic9Lhd1",
  "key16": "2otjPh4AHDnVJ9m96Z1YdK2MYTBTpYYv4dcBxx9Edtigu6VZxFJybbRaVGpJoBX2htDPy3EXWNiexKY3Bq4gZDgu",
  "key17": "4SwhZuDSTpF7bNEkYcBHkPivuYpeATuJWmTUaMn8Wmg1oMCYb8bWYprwXr6294aVgz9ubM6FMqCfQ5qx52NsFxHH",
  "key18": "2S6QiZUebqgu4hjZsWhLHgPtnognBVS8qRQjwuiygPuNdHMS9quxCErFwgXCNUzDXESgarmDv5ALki4siV7HTiND",
  "key19": "5ySvZxmC6nWNVAhgAxE6v2Ac7gzNfEKN25abyZ1bMNNTJhgxGZ4kncGF2mKjveTgWwPM6saokCXQJgcHYeShf52q",
  "key20": "B12MPQBs6TjxyRfbcm97cJn7FMWk7j5pEFDTyduTyF2QssJBavZizkQC1th9xNhotD3RUagiFQut84rZfvDFmZf",
  "key21": "4sPSXX87GonQkFbSY99iffHHXpNuzXpbDReAeSAWja24rcV3GQzD8zrgwh2SEVpQyqkhzaVPXCKPySrD7Xze7WEg",
  "key22": "3ep4b7kJJrgp6kMmEch3bUKD2Jeabv4v2vNNwqFBSgr7zPgUcFFrfSLe8ssm6AqSrvPxjCRnMk3Pv2F97okEum4q",
  "key23": "3PwDa3xmJEXz1sxgRkyYx9EtFCwYah3uJVaPcwoyVWkJikrAqYz973zYtLL76yNMMAUMLQAe9oEHRa1iNoZTafd",
  "key24": "3Uhc7Gh2hgHFmLiLufS3KQKbq35QDTSFodub1kmFbVZB42HGpLyDCBoLjGvFMVgDEf3Pom6XWbJkmVps2BE7vrWz",
  "key25": "59TnyuySKD9SHfaLEMDqAKq3WU4jos2APDoJWio2gMqAMdfyXsTYQEhioTmi6XT4w1kREiZG4gLxTLL6eDEArQpw",
  "key26": "3vXDNbt9uYUMRwzTop4ekjnHDBUGsSRANXLucFuMJNx1iEXd2vUBPSiGe8W8oB71qCKKUTdVEExwTLTchUFCspF1"
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
