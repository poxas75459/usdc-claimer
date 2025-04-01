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
    "eUCJMjmiWVFGrsCvYd4tMeaf8evRU9iJdYAfNn49otLXfWGDLR2Quh6SU22jC5PuNHjTUdRBqhfSAZX19JJEMhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lb9YdrZnt3oj3TJieRsXszmSbVBFxMZvGniFr6h7VwJcoBFFcyQwZQ4E8f5CUj8RgoeJaKnxbnxAM8DLPYGJUEa",
  "key1": "2oScFyq4AjR2sa9mE21XqAW8QUaapCchxhvYnfF3fpURHrQPhLYwkATS9ZmDuwsd7zbk9TVgK16Wh6AykmnuS1zL",
  "key2": "2LnczMi8WTk2FbHD9pdVPiUrFPkRbxK3L7WMSkY5xJVrTpt76ct1Zrzo41jtM9y4zh5N3aHbzqtTGse7xJucTqky",
  "key3": "46xD5k61Nkn8q6ewW4YFMW6F2LovjjP5KH53vR5ho9xqhkpHVJbMeWhkfrEsppW8bVtTSqRJ62QrzXD6BVvddprM",
  "key4": "4H4JSSvsuRoFREHMHKVy52qvxHSTXMvfwmFCZqHGGijnj5kFKaSdnPZVM6t2VQPMbMVCYGgujPa2xbydxQ6h6LjW",
  "key5": "4Dduh8Ax86U8orLoBnXZjMN1aCe52TREKa4u1xqA3RwTW72RiDNUDGJzTBnTYYUsgQW5owMEBAwNfJ9i7SNrdkVx",
  "key6": "2Wj675845zkJbkqiH65jt57T88jPWSQcy7ZQ7RPsX213b7fAfBd3LU1GSHx4ws7YyqckT5jiC7T4TzzTreJHdSFp",
  "key7": "2XE7RTcWsDnwkicH3ycXxg22AkdSGxsUrFnMt4BBubkPReKTXxFvkCqhMJKA36Qj3hykQbLp7hyW8ysxXpk884p9",
  "key8": "2WbHfeUXUBR14PFR9chUEkXHuyvNvFSJcimM9rFbs7iYjUvDKpQzeLtvFDgiToN18hdkQFd4r33N4qMcv5F8GMqo",
  "key9": "5EwNnFJQVJkrjFLTyicTGR6x68y2hwpWs9s1eRuzukYtMGF1EhcA4jVLSLECTK9gtrX3ZkDdwhDeqUG4Lbg3vsXV",
  "key10": "3Uq7Da2QzSieq1ZnLqMRF16cQyRjfC1EnVMLH3A16ZHXxTh97ph4cQah8nEKhVCnxiR7DS8p3ycWBx9rfjjpMD5a",
  "key11": "4Bjp2iPbLnsip51ZZmpo3428qCuPCiMXJDCaBCGf7iRXsQRJ53QNhfKLjxYDpb76AL3MUoCkcLHgrbh7vK76jwi2",
  "key12": "4QmuRJpJtKkdHEzVcmUt4UxaUpDD8wEixnWmgmz2sQ5yEDYPGHSRWWBV4F76nF3seavjrnNiPDK6EVBjfd1CdSMP",
  "key13": "4bzH4WtjpSgtqQ8162xBAQQLaWiooJr8LvaLbU2G1Mpzw7VxHYNx1H3SZVthnKaGmFCjsmmoxKTo6dK2Mgg4tvzt",
  "key14": "2TkTP8iQ5N3tSszusXDfRh9FBdSixq6aeyZ1FKihrjqeNgKA6ZwPpNVr6AZ8AEy51TnXGPrLsAFxo4ku9QsKAK4K",
  "key15": "5Hzh1Wt6Sebec7963GWmLfcdU9RQn1zQWt17bkkG7ZA3Gc11MgF93WxoswNWz71BnL66K3mUC5rBCeAaVh2uKpmT",
  "key16": "2eSka11onNjTqBqeCSdKorYC7bHFdZ1CXKo3BrKU6YLyymLrhXyEw9MbjanW1Z33bqJPdMrNeXnQV7nf5DYEnNeP",
  "key17": "2wLdtpukaoftdWCbiSptD9wTRt2GBBHrAXyDjwRqerDPh7gJJhk2j2YLRRKtbfmSNW5nJBPh9XGQghNYw3fgS1Za",
  "key18": "4BgcMXzgv887ihxKSVzBz3A1Nb44GCTnwpa3Boc3U3u5Bvs2H3tWGrf5jZdLWKuzhXrvUU2puiWnxPEuF1RMzyVn",
  "key19": "3Mwf7KuesPBemMk1SZez8vc7XvjSHY1hLi64hUYPuCfvjLeKwhk3frMih688Zo4vqqy8aH2c2BtgCLZkGDCXMjhv",
  "key20": "5AENs5YS5PbxpWo1uVcv2qq5ZFiWXhYCC6dSbJYVGJZYWF82UivcNcqvcvE1r3mbWfmSseC2gsHoV8c49e27AGNV",
  "key21": "ot1cJKTJXAyvm3UdEBDFTpGoF9epGYDQ8pFCuedUrT88GkdMVkCNxsAr1QgSHxu7Unojme3jzBdBa5dAx1uLYFR",
  "key22": "3CoSwtHGec2GXXftM69pFZBbGuKp1jntfm3KAzdvBiXnpFdgps3FhSopk1T8N2o4FhPkS8dkeXuEk1PCw8ScqRPZ",
  "key23": "45gA89rFnjhWPVoDg5THiRs6RdycAPKmpRswBxJHHsevGSrdLXx3EuN777ct1XMPLg7Hz77e4G1sQQzZxHENETEr",
  "key24": "aqypmNRwWxGyvdRRHZEzFQ96cgCxSaBFnXg9isTUudvkXfb5qfdHfmXG2z3rUTKSCtFN78bARJVfGdHdffHkdtf",
  "key25": "6596Rgm3j9RToq3RMjjntL77c7pkfL2PwvrmD1DbSvYNcz3hF1qnwsEppqu5FMs9rUz6TsSBCAjkSgb6NFR9aakV",
  "key26": "5FvWfRWDe7srbv871hR7Asi6ck4gnhptpYzeQL3ZGhhwCWLTmJJjHCLJheUzZNXz1zbA2FFZRmFMfba22iKy4Uh7",
  "key27": "63KRCTE7n9RJ2dy3i3MkwntBXXKCAourWDWws2bHfeyR8NaRr1FZBJ4WrTi2dNC4K3w5hNqLtZSa1AS1GTCgenqH"
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
