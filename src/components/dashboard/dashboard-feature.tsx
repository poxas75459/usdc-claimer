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
    "4KYE4ZtJbgSisnL1M9YpWuWfPFiwYrGMcGddLr9z4YV2QhNAt3Y33EeeCgLAh7G7TScKTTRRcbnbBL4w1uneS1VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ip6iqcoJMMtJ4otmjcinQ43DcnUqLQMEuo6YFF9cHZYBTN4SN46fB15EUptWWGcnfBFaYjHgKMmJLv2UDk6M21A",
  "key1": "4ELP8NNRuR7cmPF5mMnFZ6a3bMKi3ftyEz7JqJD5qP7oaMhoaRKgednTxkXZgHd4ztosPZVkTDXczeQ9j5JddNWr",
  "key2": "4cymVpcqwnTAcGkhMFJ7AcHuMSnziii1SymmirATfgdcWeS4EZYArBGzt4fMdzjRkpBZkWvs2RxMCBNgGnjzmaLS",
  "key3": "4KgnBPBpBot46rPnE3fyeHradFrL2fEWiGAKx1v5EgtLAVMVuxeg5mRdCYfedaqAXmRCitbcdr3m8Jp6BsETi8C3",
  "key4": "4ddHZ768rJGubJ1SsbCAPQS7Uf6PDg24Jx7EiukedAmY2su33SpnknuJaEce8a7xchMbGRYpDgwtnmbxcmcs3nkj",
  "key5": "5Tu8hcodDqS4AFvW3AWSB7BZTfatd5fH9qUztfy86TWYaFiDCtXxVPbyyB5EyYhoupjavDiysLwGQcWstZTrCHGL",
  "key6": "2hQkeNxe7MRTtuuEJSa7gvCTLvjZJ63hH2bM64FHDVe8onakGx5pPQ1HaAjA4qQkt6LDhSj4uT2uDSMNA7bi555J",
  "key7": "4eaCBZhLvUojn6WiqoSqoT4rG1vHGpAZzzTiyuBw5Vt7aqhz3KmFkkEXLmaMM4SwFtzRs8xgd6v1huDfDazkNYUY",
  "key8": "2mGfLAd7DtZGPZgXFYjn4GrHP1fBFcApXWmgCntWLjkfHRQuBTGZX1LiSviyvrbBkidYBZ1iv6WkEoR4icNZQcxc",
  "key9": "2npwjvb29RZhKerMyHF8q1swhXbeebvits4MLHvWxFqTGtr3gZxn61i5Fe6HghV7vo8nqG96VQn9FKxjN2Rm5P4W",
  "key10": "5KXXMmXQzQbgiHRnM4dDU8mUdcq2wHVUuvBsYcE5zLzq95WeNwXnGKAwxe1MP9ZTz4tNTNsA56ZAXysBjTpjdRyV",
  "key11": "5NYAd4aC2iaChtTWkLnjJnViWubEF2ty13xtYSqruZisr2pcbgyfYhvLJmbcmnbyc2b38kNygtyXexudUbDtwWGT",
  "key12": "4pa2MvWWFf76PssLzbwJoxkkhfWNzPNSPeXqD8Nfr5NHTHBNgF7QRSc65q6xJpvrXthAU8dcfLRnZsfHf5ktmHfu",
  "key13": "4C8UHHPEZWgunwfhXTvuqeWEihCqkKyrRjSraF2Aty8hXESxTChHwWht2H1Wrzd66EoYFzvqnU1KN3RsCoDWhpUm",
  "key14": "5deNJzt7z52ayLBgkJm1azvvQU66SWDqUAJNkjvm7cK72vCfhe7Q3U4w2bL2rSJuYsemZBymYrYdwADs4TVaMeVA",
  "key15": "4bUWoaQQZ989eMEvZPS6FKeYGL8bgXbLW3v13bTA9SWWMvu3wQrHBWuy75WBUvZZreP9eASWtPPZh42y6mddTrK5",
  "key16": "2H7EMBcAqudv3TYtrkYrrvqAnBpKxYpim93G7ecs5reQ91roStetFitufVMrmV1xaqnY8a8URVqoGpyyRTWK1j4L",
  "key17": "4mnr6jLa8Cs1JmahA4hCuLDRivSKQS1NWFKx7CCMGViuV3tETu1cWyPUZiL4HMjyYNzo6iyR2XRMLDiQiVYKLAZe",
  "key18": "4vD7bJJjSoJwt66HvKanYwmZZjJgjTeY6A3zw6Y4MsU9HS97LnoC1tQUiuPdwjwpUtRaNbeZF6AYrHNnyLfRtM9k",
  "key19": "2zTNuhShcSRq1sxv6zMND27rBKMxxch8Kk8MPTUEpsKnum8M2q9gGeTAUWA4pmsqmNRHE3jKoH3weiuEepJh9GFF",
  "key20": "vABGKTB2yoxDuZivfVR9cHKabNuG9R4tDcDLgYSt8ouazX7z4EsBDjA54o2dCfTzz5RjeexHJ4DDcSpmLnvVjeR",
  "key21": "45qV3UN42sdtjwNHLKTPVgDsvCkCPHSpFxcWGTDdKAw83dZL4rzjD9ySVLR7pDs93tj2Vm4ekVfGASaRiuqE2fZZ",
  "key22": "3RJp9hGdgHH6qcp3L1aAtKqbNYFM5rx5RtQUPKKx72cuo5smWcDv6Y4kC31Et1Lo4fVjUq1CTa8W8AX3WUeaAs8Z",
  "key23": "3QjktrFLG2Y8mXDBDDG3SstzBRAwrnT1AMaREnTdSvJg3GA78u9hurtJSFcjNMa2UeNVTQWyRw11hEWDMo2wSgMN",
  "key24": "34UrdWjZEYV2KTHVztZKLJKMu8gy5cnxAk32gGrNeAG1CDGzVfi8KfD2jEpH68t5Qmru3z3zyzbgEmSTEk6bgybp",
  "key25": "2BSjk8HiKGxEnw4KkSJ6baFiDSZNqFTn1W1oWMat1Ps3BNT2bz7nrtTM3fLL8XDGUV1P3W4bBXBakSxfVV4xT7QC",
  "key26": "3msjMc9dJPyTnP31bmX35pM7CuvBZT5gNJSzqrTzw73o8VZkCLem7ky9VQVrWqZRrSdsJZdZLtyLuaS3eUjK11p9",
  "key27": "2ZTgZmacbJeQybPAQZCzAWmFxMPBoiQotieK3vifpQo6VeTjupxBevGnkQCrFmV7N3zwsHKcUgRav5NcHb3t1rSk",
  "key28": "59E9Yhcd2RYFZx8FPJkgnf4rSzw7Y3z6U8jBhGb9TRsErVwy3iFBTKjGNqcdRhyGQVW7iCiGiCVx9B2r3betHTVF"
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
