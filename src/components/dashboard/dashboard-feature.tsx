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
    "3gw3HktXCJZY5964rS8YZQVHyE8AaAQy2p4PhW21xZnV8PQMvEtR5S3Btas14oD2NFmGwKPVH1WLPjsuYWjJSBoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eoKY86DSQGaUCk5KAzMvVd4PQDu5HhJeU6vvgn7zfqGisbHjaNjrwYRJzqvFbC57gyLxn9BMnk53QrvVYifXSTu",
  "key1": "4wDzjq8ck9Rh1pra9R6dY21HaWeUZTbS5CN2ubHC1TWbiSjYLdyJTDk1jdXifGGKQxYh7dAyykSJrxivMTRp7CKx",
  "key2": "3Z2ezx6i7jGMj7fXSwCK3bsCcE1ydbAW31MS38WZ7GLHRVkVWMrYNgxgjEk1d9niDcsczkbUihsoJLdksZBM6Kn9",
  "key3": "MkXcZhXjJ9VdqD64itfwVaWnah3sBo4etr1AMWYKWCCJ9sZz5Tj1ibvrtNGfSzWf6Er3HT1Z4u6LaGh9r5cz695",
  "key4": "4MQVX5p6mmVk8d7235fdScKRmZTeDhrVpXuv2aof2mtXydkKyKZHFJjtPeNoseSoFSrUbBhLc9hTCcb6rFDTmSvE",
  "key5": "fTrvJKnDFC8TBMhBtVs9UgcBgDnzXYwvEFQ28qGSRXifWQJhATs2bkBfbPRX6cLxCTfkd7NT6op3QXBAwwR7VFS",
  "key6": "5CbPbEcZFzrH1XzQM75TB1KT1Z7BKnPS3fdgKiijHbEZVD1f9Dt6yMiYt9wi131VJnbYTh2k2zwj6XmLpG51yLeG",
  "key7": "5tZZeYCYiZYKN4chzvFntv9Jyjz6mjDFEkbB95aY7B8kT8bXVMh4MUF78f7CVd3nTnfLhYCsjmBRqqHWCobUcfkj",
  "key8": "5VJQH22Mv1FzsAXVxyPdUScPWfM17airEnDNjKVJ2iV1RgjMV1NLxaSz8wJnfgd7YZyuFVUWRXy1QiynoB6SdP5r",
  "key9": "uZWBNH7Gjuw9DRpeaUDxfhiVQLArE8QZrvnWDbrtmVUgJ1LHcKio65aXDQBSJKybnCpQEQngNbPL1jCYwsk7FBD",
  "key10": "3yDM6nUFR365dJcdKhuKofSa2FFrLQaZUJgL9NQdQV4j5EVBZSjZ17h5KXWGadY7oQoWcUVTN9TyY3vVPSQpzx31",
  "key11": "j2FKnnQoe2ovc3dxWyenpWVdRq543xpkkK3e9LjmWGbLu9kZ2hiWeXBkAkdd1j5MbXYusG8qVHhYotnJZqWrkHQ",
  "key12": "2en2pPDJaq2by1VCPhEUuse8S92qYrf3wXYBtuKFJtzQxmiQMhH6T9tFknbL7BH6Sam4TBByB1wucPyKMxdpdSvE",
  "key13": "H6o5wyfD3a6Jy8k4ue4zRftUyYRymQiR5wWSCaYbM9w86WRF4oRLxbz2gFqnQiyLMyRP91Dog7JkeFJs8Vj7nWj",
  "key14": "NrLDHYTfv6XSPNw86Lat3pL1EctsTf5W9JxVu75kBe9ifuC99YLUFhiYMhTV9rcYw2wbw6joHrt1JHhaogGwQgN",
  "key15": "27yZJzZYTF1sZjz7S8atm6ahHmWNna9Y5D3HZpNppxT7P9bZG11xAJ7us4D4ezQPGe42AP5PSsu7CtRSBtMBt4sc",
  "key16": "5itmvdo13LPKa1KmN4ovFjowzDbBgvcMDbqmP213KGZZLz57LSj3ULue6kDFqHgFM4jCEHgX4Zch2vc7CEQd4qcd",
  "key17": "5ExaX8rTDQCN6uPdfR6uscRLKgZVGs4oG4Aa62gTMf4fvZQtpXL9985ifLhkmihAvFTiMcHk2s59zPT3Awzb3Ubg",
  "key18": "4qQNRzdKLtAACQscxuKUL2yGXDfzd1XoQBZjDCRDa7nZQFq2LxGc4ph6of25N4jqBfhKV4q9cvG5agCd6ye5Qae1",
  "key19": "fNoLfN1piSQqCZyKm5rVeFC9XbgKcCK1aoJ9m41y6hSofRpkPE6H4DH5e9nXbqaUjG71qPDDtLtwDMsdb7azgcC",
  "key20": "2ri34BL4XmajCLuCQDz2cdp2i4ci82ezqaMTmdygSLj3ikGqKn727oRr7Qj3Vds34RVWcZkW5t3jNj31T8uqeQdX",
  "key21": "4SAA52tBiuwDZkpqVLq3xgCL1SnPs4gCZznqtm73v4mutVYhdAMUKfcwUG3jszs839keHyEELW8AK8VJpGyyJDuJ",
  "key22": "4u7YGvqM277iqjyodEuFx3MRDewgsuNT8JRJbp3kBk3ofK63QTFD45iA5bRy5di4naAm7xLbVLkwrTpkWJbpEsva",
  "key23": "54Y33qoibT1MheTQH2zuoCa8FePmHP9MqAii14yqChiFsL4LJP2QZyYDmDTGJJpa3VF7WZAdDbwhq9BT6VNyWo7M",
  "key24": "2YyzJEZbgHBnqWaD8tTXnaBf3zo668V2F7ZimZhiu7KiX8Gnrcs52o4Xwg24aizhKM3Ss29EDY4aBbWRREXg2JKE"
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
