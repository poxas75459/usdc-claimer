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
    "5AGY98K3urKDQ2ph8e2pcnE7x9rS8hFgxdDrdAe4zABwDJpEj6eZKEebmQ7mQfwLhxYgCp516gmr9xMiuhSAzrdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFqHi9WK2nqzYhwBNNqUmG6VCySQa7UQDn4QzQXQcWAdChPH927LSbihutx4WAXW5qrbGPduQ2H6RjFCTAqMiSi",
  "key1": "4SvedhcPNgKNz97xcEeyXENxTYub8WU3dGJkwBSvLEmH9pspmMYbq4JUqa1H7Y7uFQxkYpyUEb2BTnd8xyF2y8rx",
  "key2": "3QAEmaEZXcCtaG4EmQeKKFvyrd3AhVff8jdUReKndhmYjRzw3QR8BYdaKKzjWdMmTtQkCRAqjBJhoqMK5WFYMrQx",
  "key3": "3a4UEwET6FpsxZ5B2vc9sWBiNCNJ1KNGQPUZDrTWSMjEVTevszj3ENGznLQ55MTYGMBLzDUn2CEz5mbxw9PMhzy2",
  "key4": "CSLScGoCrd1btqx8FyYtJkFfUDDNBQ2qfbsFJW4Evv45N5wAnnWo7ywo53PS8u9zmLfjYiu4fXinWBJL8qGMtC3",
  "key5": "1i4yiVtaB6MrdixebYf5M5Go7SVxE7fpM9nuabHAYN4TRbGuyLjeGGSHxysfsxE4M9j4xq2myoLkTzHVrvbh7vn",
  "key6": "3UGTRqcQCcxRfsRYZu4T3s3LXjXaQsJ2FTbgum2JDGtherZPeVrtqac9kjwn7uvy1Sw5HPoxrRk4Bctwy6ZSkD2v",
  "key7": "2z95ruHfuRtMjdwDr32vXJpBgVWejNHrtWDCa5WWwaqbkHKToERedR7RJqH5U1cd1Eqn5beykCvuPu1PL7658332",
  "key8": "eHBMGRDdfqHo4dM3W2ELZBpitMMWWVFAbpX1KnE5M87LWkd9WuGq7oPv2TmSju9JVjxpfWbRS19LNNuHuyVaRdp",
  "key9": "3EUe9QoZfubiGgzMJur8zav2cHkvbCW6XvgbFnB8Eq9JJJABDeCvkicYFXstqfNWHGnFcJ71vGgHkMAzUdF5vwcz",
  "key10": "2XYi9wqaskRuxJ3dLL8SznBh1D3eBNL9nDDDQ1VpL88uNJeF8xvFvxHPZYPqpxoNiCfDvkUr4joXNKFHWvrEe3KT",
  "key11": "3p3rBTpAppbYWDWAcT8uznWg9dr3K2FbYrdVRvktUrL2zu8J7aihf8RXiNMzK9S4ioZTnaGpxrya8z2c2P5Gy81Q",
  "key12": "2dBrtLDXqRDfy8vhhtQsENqX5ugkhkNqrfV2LiYXr9Mc5AXqCPjxtP3XALAyrSt53iC7xhT2APnm2kVRUqEGE2Yj",
  "key13": "5ttGD813saACGaP3ew5e4WDyHYRasruiFqP7MQbXkiVPiqxZzza9Xjo5w9TEzPk6zMKFTMV1tMfjGFtU4smow9qo",
  "key14": "5r7k2GYnLb13gSXutvCJt5LWDVKLkJequHrBtQoRtwy4GoKh1NMKCTGLAVXXU1akFMnbTruNBV5S39rFnvno7kzC",
  "key15": "3E8L2bm98SDGBXqbwgsgRXSQDnHRqQSEXeTS2aFJGp3vfovhQYSqQ7JruuCyfZ9Y9fon2XbF7uiy4AknJxTFJtHe",
  "key16": "3iW75NKbfRAo97HiRtsgUS4DxM9AKhc5C6sxEKrTvao8ZbVNwk6bJg78EUsGok16WavJLASsbDyh15Dxh5gFQFTU",
  "key17": "5eu3nU4Kyv9c6TpERZAxTgQ42fciP6y3S4KnYSET9ZBjxVLjRNwmmyPRt4mETe1SN7EVZG39BsHDZkdpvpReFiPH",
  "key18": "29XGFNH5i3414X32zV6gfzpEJEBC2FT2EWWpRx5eVxqB375BRzykCd6C191EsJn2NEMggDSqtzLQRNc5gntLh8u6",
  "key19": "StFkyd3h1j3QBgxsJijnwFG5dhsSUZvToGDB59WnKwuC8Z5fwzWPngQqWjhLbx2xQ7d1JEaqwp5r46L4GSRxHqN",
  "key20": "QWRsAEDTnGFseneGVy3vDWrQtr4Cy2rTSCfRamD5S9nj9mXz8CGWi2naUWWC7Js1kyJ2o7cKThkQwvKJUjZ58EN",
  "key21": "3wwNXDyE8nmPAEbzRrRPkyAvmL35zWWRNcnyKAzvxYSxjjZ1E64qtvxLNsztezTk4FDAwygYZtvN5Kt3u58dMAtS",
  "key22": "5HQGycJpWGDGnyRC8Z1DFpRD1DrUumkd8QcmLb9CkhpgZKGffe9QP1QVFvQD933sn2NtVYuP9MTk47JgvqKnmiFA",
  "key23": "5Xg7j94139uwzqmrj3QWo6VBwzYnDyfmKRHfMs9fkAwjiybUC4NVuZFqq6ySMrgZR2iQw49p5DJd4JB3TGG1opzQ",
  "key24": "4tJvXvTmHdwNVDz8boBXrkNUQ4FvYStSXYC8MPkTFP5pMA5oCpC4wMWxAMb7kBC63SDLJ7ceuQTpMxY5duM9VReh",
  "key25": "pMyDThKmnzkP3qi8kyug8KpnnS23uH5KmNW2fN1XMFWzmmqqUSHguqF4WnD7B9UTizmjj2qn9tnzUF8QnmmPhK7",
  "key26": "vNtNrMdZHpAMNdsbbDVFLmQi2a5zVC31v4vpq3WgkVXMLzMDdKw8uponbgfzsVBQ11BjzpsU7HivFJjDL8m2SMk",
  "key27": "34eyMEZVz81K8Rm5hw1sYrRFkQAeX7TXWbGC8XuVMNYiEMxzTbVKWZJmWCEGEoSANmrKbae8KrTrx3Mxha9rQpVm"
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
