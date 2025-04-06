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
    "3Ah7LY4WE59ztCnsKdvbmoyuScwHc2bchABMNBCU5AjgunSWyZDfCvA6A8GJhkNoaMvEhPg9TuyTxu9eH3QKCGHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6oMzzJuNBmuaF2kuZhXeKTegpboXbNQc4A32YgisNUWHCbcrSYe2wqfMX9SEYGNbmWCYrMW5guWNfcSBTzB6sD",
  "key1": "2NNLADehLanQtd8gejtnBRWiMoGahKdfbbThKpbANzPFsKFZZFVDVZn1NQozNvhFXmjzU3VgbHUHA46qtq64uH92",
  "key2": "5BDKYePxXEiEQGGVB8Zc5q2bdCXJwoYuR9a2kPr9DiV7taTtqvdgm31LywDqus3nzEK6UxV8VNMttHUjmaCMaUPL",
  "key3": "61rFt8QmFv8XphwUrDdLVCbCFhPnbyW4FXamAiBFH43xY7U3JHbXt5ieMgpAY9UqJuSsUGsYFCRTE8pRj6AeFGib",
  "key4": "521tXGMUddy1HExJ6aer4VWRTBJQJfFJpXWqHcUfnNGfWwqRzsDZnjgdtXHuHUdchf9J1FWrAjG6x2wb7fYn9e8D",
  "key5": "5xBLQoVuUyrTXwuTmecT7bfUx4PruK1t1HAx7u7nfXBsoYcr7XQzss9Pcib6mnrafnpTFW89gRXyEhbiAShKLNw2",
  "key6": "3LBLpzhSf3nUT7MVRJsTpKb7Goxmih8fmD7waTWxeUT8ZLxVrrkk5XcobgkY8jqvQAYZjXRSaC3towbTLYA233vg",
  "key7": "3X8kPFycoLjoCofYqyQ4VvQpsvTGERszusX218uHdGjipVQru4xzuqbSDUKXHeUgx36s5myiwXMm2kBWF4zyngr4",
  "key8": "29gvDqVV2Dwp8zynPVCTjrDVJi9x9ctkPWpKz6rn5GLP8reMN46THBTVXJ69msgPUiT4ao7jENKCZPhLTdjUHfr5",
  "key9": "2uD3Zmd7vbwPgMJWJr8JphpQuHNBGGF7NyNVz3vVCEPRxiQvd3AJ3JG75oCz6fJLowm7RJLkpEtjuZLqLEsBmNCp",
  "key10": "M3m4fefZfVKHZ8evtr4jFo4qk3K3eyzC2e6m8NXi4nojPfvt7Um1yMqbpD2AxsJA6e1AUSREw1Ke9CS8ESuioSm",
  "key11": "2S5GUGvfC1HzfpCtpQNbCjgDvhx32hNGEdP1Cdv3iDoKNdYoD6R7eFBXcTaDxRpHQQhEzT3XF2xKSSMhL9WQzS1c",
  "key12": "3RYafcR8MhUpNrFJ6h29MeuQ3bPY9NYUaYpTHkMFUX5uwCY56gfdiTBBYcZY1f2SQPcM3TTWjREUZwjZhXJvkCUF",
  "key13": "6frPdkYVujYbPHcLbaTihMAjBvaZVJbfNnqQ8dN3mqxFW2g15vfHUXPBV1W6YeqVi66vTujzSLV3uK1pRDJxdBG",
  "key14": "2Vo9Kn6sZNkuwXsJgLfivN5zWy7qpLCKS22fejmJ8tT3HzXoumLBP6R8TPuhJyxjueWADpQnHk8LXXStsB4t1Rte",
  "key15": "4zzV4zr426rC5AiZnzScZfe91Vg9ymMb4P29HhsmZDPMYfKMNXTgyYJhuHVp2Mo6xpNee2s1ZU1BmvZyt1pxdTaP",
  "key16": "xVJN8tysPrbxqmGXNc7qk4MudPgDbf588D3BFfWwLNjGu2pnc35jbNcpyfauBN2FKqp9rxZHaUB5QwiSmVz158L",
  "key17": "FRw538D4H5Fozfk1yfWTNc6MsacerxHW6FyEMD38kgtP8pZKitXSQ8Evo9TjiH234WZLT2gt56227GqGiWqhsVF",
  "key18": "2i7eRciziJtLNoY7w1YJJu7644eRaKXDEkGkWDR1MjhkimrgbNZ9wTrY2WQx4XwYJC96j5eefsihC7hJY9jP9gzx",
  "key19": "2NMBKZQ1qVwktjUMXHuzbUvDEWkEh5hrYC3mLVdTJVaYNpAHevjcfEKf54ut26Ceuq76nirDNHM5LZ8XMmsRcKKY",
  "key20": "3sZaXNEf8RuDH4Gre7uajGek2Xxt1ggFNzkA1rxx9w7T36RdqGtJANAqzfC6kBPwBAasqYYsAg3wcX6ge4S6fur7",
  "key21": "3WGQLWkySzL9LcnuVCRAtv1Ux1qmz3ny3W9xWTDF91Tzba5D4oHhcPaW3xk2bKmoBvU1ggmQnRyCLyHVQoPQukui",
  "key22": "4YqD29JZUSsPY927Kth6AnruYzgSYjfJtko4u7KuanZZRppmU2PWvZ8iZj13EZWFNPnXm6QG7eyh22XkzyxkvmMJ",
  "key23": "54PuQ68svjFP5Mn9WLwjcn1wNH7xxJs2YaRGRpr9BZu7WicTsmXM5fXGsoxUGggbAMv8bDz79wRB2XmaQXCGmtiy",
  "key24": "3B4ukCDdynjaDh9GGXzBcVM4vkGgNN9qtw7m6hh9Cug5rFHFWqyn1QdurRjuHUANcrjL7NmPxguWCgbjC27uLY6B",
  "key25": "3AKXFyngVa3vbLc8xTeGaAsczjd8aGBNnvZwp9P8b1eyagjQ5h4zWgvpqPTPtj3p9mTDUiJagySgdE9iPNqvzAwx",
  "key26": "2ovMJEhdMY5or98Xuckr2UZJtd8usepdfhCJzpJTALtgPnRYYVURK6zk4U6gToyZJg53hD4e8ycFP7eHwEVMCvuD",
  "key27": "62VEnthovqj3i844c9Dxdfn9XDE7CbgiQuTA9GafLMQHWPTpzoiAENCfA1UhFdJaL8Z9TvpCh2GWEnDjymUNpqXM",
  "key28": "2c885sjRatTRL7yvMkAgfoHsZBGcJGzTaR9MNHgATw4DXpdDdTMTnxieoD1rjynooniQLEZswHwT2DeCnMzz6cU",
  "key29": "3fnkL4LqrGRrPQjkKHzx3au5CfeUKzWNAJxecbvQsmxYiAj2awTrd9esfE728vVRUu3D46RNEaX7ristLqGhmpuf",
  "key30": "2kZ9PdqrEmdxrkbqn7auWiz1jHBriaAbU1KnbrF7uLN7K8mbV8RnYW8xPApw2k28qWEZQrrkCv2mQ8jD2VdBB7DH",
  "key31": "4P99MuWQCzV8Sh8JQoyLnzHp5Y84zHdCDba12ivje2n3vZ6XmtWXQZUyDpF6xFUUnYY6xC5KqR4Z4aKGWiAUHGXg",
  "key32": "3Y4XnkUPLh4DmUAhCTnjYFG82tyLqLQut83DhGsgQ3b3AgbnG2oRGwEMkvB6TnKawEFZQW1CeabBpZfcDqbyvtQ3",
  "key33": "24xWSZqABgc8jDKLLXCBe97gVZcy7amuNY32VnW1Evnjp8aSACzdwPcN1LGdrUEnsuVNRc7g8x8BuWCAJGMf3qYU",
  "key34": "2ZvR7XutAE68C7Rx8mq5RgA2nmQ6j8j2vJAwhfUoSdyFjVSKfQUdp7sth36zCRsSAFyUqtG5EEJvGbcSgW5ESbwZ",
  "key35": "5QRrxaWFNj4DuvouECRPnAn31c222kdTRFUGR16EUHu15fNhhqgHddhTMmXJaRXm38PK5L99s4JDrELL4BLtdsHe",
  "key36": "2P1iE1WwNJyYUvAFwfqgbW7XtCDPuZU4RXupGJGXNjhjJMWcANFSw4bCJjMGAbDrWjGoETggBNR2gLKv1b9UbYUn",
  "key37": "64k1MztDF3MiF6vA8f8XcP2jj8F1z9qBS3Vg1uTV2UySZ2iskQ5hzRhWSAUsWAJAApVRnAC5BRxpGJ9x9VVhUx1A",
  "key38": "SuX9h36dd3qaktg3Vs3A4Bbe7aAXbk1StiCtsxLv9QYRfr3nSVJQVXACXEaadgweAw1Sa2pyrLTWUD8NUG9eK5B",
  "key39": "5PZUXyKGfhig7n8iVtecd7ynAP462zuAaNukN5tqmYcziWNxAfyRSa71A9jiekReBxj7C63zFwif3iYfyC6kFfn8",
  "key40": "2iuCPKr8XJRGR3vv65329k8p4DWdy7zHHosDoAfb1CHAmEnvtBLcJE7QXUxgDSBixbW41nS5SeBXTXujy6WsfDAg",
  "key41": "3suoiCd5aYDjCP7UFpYDPWAt2TzL9th9UEVVa2huX5ZWPFvcV9Pjfrf4gJXrBWfMZFcQPRe5vgEWXU5qeYiT6VQy",
  "key42": "3EayJHyRWoCp1tYGjwqV3Qu2d62qA53mErw1Wzk28rmXhmAufzZd3PmXcfTCqrB2BEZy3SGxF2hKDVqPqaRsgk2B",
  "key43": "4EBfRncanPdepycqcEcJLCdj2vMExmFThLqDtkpLvxtgvtgsf4nFfYAVvqNA7Y1XsMuhBFggAeVjaDgRquXuXuZk",
  "key44": "3Jfc7XYNdeqAwAWtac8eowko4hUFQsGZnweuvk7RwNWSsVriU6u3sMPRUzgyTjdAQvmiR3hEu7oHFJ6rDsgGyC1T",
  "key45": "3DPs3nbgFwojsD777VXdvYUamK73VsHsc4DG4kwzrBTSfdsnEvG9pbfmuV8E1phAyfgJksXzWb3bQZBR5WcbdLEU",
  "key46": "L3iJUG6eLwHN2h6FdY5sfARQzkkaePjU9j4qLdKkyZJ1tSAVz96js7VJKiacvbaucAGGJLPCCCxV4Pco482799J",
  "key47": "48VaxDcxhSL1BQpTaZhvgEd3AwpSoqxRiaMxACa36MJEprQejAR2ap94Z57A76JorbZ2asoPHQ3acQoX8tcB6N2s",
  "key48": "4zScjGRm9UNWXSRdJE4oajuYLsD1BHtkrjkyb3KmADDoj47XZp4HcV94Mq3PuYRdFjnD15ufPuHWqSR7vsufAts7",
  "key49": "3WDHV6WMktc3rNovqsf7nKLLmggdX9zY8KusnMcGQyovnNf2Wr1kzADMbjZ9zRQ8mRbKv2kbRkQiKt8WC1FZprC9"
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
