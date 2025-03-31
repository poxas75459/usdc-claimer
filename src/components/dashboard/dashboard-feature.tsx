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
    "36CukV3gAs7Z5pQUTj63Yt5WTDQkB8vRDhmb1DGZfooW3qRbuhLtvK17rbKSZjhQFsnTZdRhwjnzSy3ZmvMsq1Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LC4qTjUp57Db9o7eheMsHAh21dDdw4hcdeCTtub2pb8cWsRCUorYZvnWJTPVTVeEKcipBBxbucwCfTNZ3qfBhLg",
  "key1": "nmcpfymgXhLPXLf9HbETnzAhu7KSJ5LKThDW1cdq3PuwoUe1abYxMPHFTp1gcDjRdPYZBipbMMhRPo38oEotyWM",
  "key2": "2NLRxZ3DjFZRNnJtyynG6XHyXcy7Kx95yf7QPzmw6NweoD6PdJsYgMnntUXyHLVqDW5v7sEv2qSswwzkWWFti4Rs",
  "key3": "2SHGSJDJ3kY1HQLNQDnCozZq3VgQTXG6bqZRjoRZRh7LiFmETRtiuLpH7VFTaFywEx149yVYar6ubh1DHPHRvNuf",
  "key4": "3DKgDhTm67eST8kM8NwiNSsWU4WpE52xdinKa8HJqkaSRzgYdTtf5ZNxPXoQPgZLudNbABRLMfhFNJhV2CjWXxA3",
  "key5": "kXHujZPgvDpK9ZmxXXN5c37UtL3tUqEX8LCMcicHwK8oDfWjTHwqmVsQtMqq9qi96Bg3pPYdF2UrKowzA1DGXGC",
  "key6": "URSdMr1wN7dxDf2PDkwTMBeVvTpF5gqPg97ogUjeYHS9J3AGqzJZ36VVhqa6XJ3Pn7Thqb4aQkHQfM6T4rZVnkb",
  "key7": "5ESYmfTpaEBXi31Gn98Bi8hPnCqxNDcbQb6WthjXqQqdkMxn9xs9BganDXX5bXSZGXAwyyNqtqdozZCa8UyYBava",
  "key8": "x8BKUUV9Yd29D4YBjCLiNFkyHNv16eHLmjndc2t7Z89FzxLiVdPbLiHFu54ajTGSrNdjvVq9qUH543EJEi8Zbh7",
  "key9": "4SKq8ZHaLdMKzQgAxPprKvK9hXCvL6sLzMLmMhRoZKNEDZ6d38wfzbZtBVwXX9iXrb25QLVpZQjNaxxC5ui6jS55",
  "key10": "4KqkUGVCVXkBWDTGWw52R1WNQhyQWxRJAHppWdFsyAVzQHSteKFuJfcpRcMR4uyV2Y8HHhfZyhBW2zT4jxD1U3t7",
  "key11": "4Bu2KbRSHXx2aQWdpFXhnra2uXah1CBr2nYAHzFctJhKWeFPN4ZURw1n9ceHAd58xqbZwMiLJVtcHdxSrEAPdSMJ",
  "key12": "3ysfMXBcdjLWZDmaJ1q2vNcwvRGyGU4CgnRayhMGnkBj5HvDdFKa4jtvWdDjePwCz4ykfxG6hRGDwFe5MVNSQ8Fp",
  "key13": "5vDKhmJHx1MKP35SFr7MWgmVNa9gseAwGzGN3Zt9n3CKJaXrTwFDHdFjcbgv7PECJLvi6ARTVaPhuajpXqkt2aCw",
  "key14": "5FpwJX8cbsFRT8PJLDX3A3CZrDZdqkNrcGPp3rDauH3J5JupvuNoc7iFD6Qcqnt8JmYCm1zGMNNPraLhzzaPPGyr",
  "key15": "3WyfU6mi7hhJikdSQL8VnNFYQxhSEF5RXHeMZfbXC2JhPywHhhEUwCr9DWGHGuq8xpQy3bfgVvQ47adhTGwyXFXv",
  "key16": "4RXH5ygsQft4zJfd8dvqPwV42ye1B8TS6RDXauzPVXcSRyd9Nqo6B8jgaDLJT8EH7216p1kVhZFBqT7Q99FRkzcV",
  "key17": "2j77cEaf8j1RBDeH4jJic6vtGQQ89VRSzCWs3g5KDgycHwVyQ6ru535PDLtofjgshrkWE1ZTJZj1LLB1y2HGwp48",
  "key18": "3vFAdXXgV8iEwtpnimMPB9BR3bGXyMnzHMkA2JHNJ3uUxkuyGLumLxJcGWSt1rizESUsrM6P6edU97NBQpiFb6WG",
  "key19": "ukUTgoenRHn1fGT25TqqRJEmxGnqgxGF7gcLS5m1Lr9iqBsFPSDpf1qdsVrUA5DksuT5Z7WEd2sdMrXSHSJ4iyV",
  "key20": "5akd5Cb7GJLs87SJi4TJhZHKgyi2SMwmMUyyZeiaiGdZizSYowzUX2G4HiGZV291fnARBgdbzwCPsUvA3sE6gfX5",
  "key21": "3yH6eNDeWbPZrLC9YYzoMHjWhyJBwE8FSzmu8wCK7ySbohGcJZRHcLMwnegRbXngKAsdbYwp3dtaUHQbc3vygyeS",
  "key22": "4SuVq57Pu791vPGtWVMVg3vmGXFMrGb2CUbPCNMxzEFssnVNnVcV6m5RQWCcbhL79B3s7RXaXvcUmMvtGNSvHKSU",
  "key23": "2jdJdprewDw8X8Gjgr4EThg6KtXuFWU6YjL3QsioJj4FydJ7curCEYCxmHrDSCMDWnRtEQUSeWhJV2KWd3KCoeEv",
  "key24": "24dQje4PR3EK4R8vYD6GCzQRdUFyroux4B1AQXN4Cv3bfNUDAS3yTSamuj5uJcryEhLQL6MdyeGy15XuEZpDaspF",
  "key25": "3ZEdwNJ41JYf9cPjXunraFSf6pcoFQXBnLMw6C1nyp5W9nUpzAHx2VLpw42hzRJnS9Ja6HV1VQPxrKQteTmmF7yA",
  "key26": "ChD32SKVmJ39e5X5SPgtaoYCJuXH1rdMozcte8MWDY4XvEnnq7W9fnVEq7UvipEvaygPeatwSbTg972fedFqo2A",
  "key27": "2QKdHfKCwiFdFknEjzUktNXGhBJZkkJBQM7UAaJXc4DgZucLEztb55jbtzzkxo9c8i3eC8Ts5bDbEn4W9Jsn6F53",
  "key28": "3iKfsQQNXjE4ukfWghxYCD6MYtjaMfT1eTnvfsnL1X5fePzVBxXENbEderwxxVbwhBEUmwJQHAAwTMbwepRyBfpx"
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
