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
    "3uNPQGiNJhkmMk3RXiF2ahsnvtqzx4oibMLvkM8PeTg6ktjnMNRLmEmoQvNUTX9CBJTGk1uMr58aRAjyvMoENvvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwZVTprAj7bg6AF6hUiFWG8G2ke2z4h8Bxz53y7Vf6NLzqBu4r1fZsiqj9jVFowRmrL6uaRDo7PBL42HzZWeB3f",
  "key1": "2cmKLsend9fu9GiopGh8GQHKw6eVbrzTt9kVVjCr5Wmw96dALzHUQFcEqeoLmzaKqaAmA7Cgrw9hzVYCLixbBvgA",
  "key2": "4FcbodAW4Ez92DuiPn1fLs4yCMQUyxSiaSGvWxMFJmn2R1LGKTsTAdJyABMWAGGRRezUUec6e69TX9TSXmv7i7bM",
  "key3": "5BJbMoz88pUZmd3528pEENChfNLztiRSRJk5F5BbRa6eFQSnK45W8Vec1B531J6D2ZEf6sFjbJgRaVHvH1fP6jWq",
  "key4": "9AJgoeJgaFgrXYQMT4qh5d88QZof8EReK8cSzj6YtQAwiwCf2W4jiF5QS94cFzJU8ZKwB4YgTMfS2aVgeckXH1C",
  "key5": "34xTX3WFqTQnaf9LtxqjBjWZXLzmwpKYekxywBJ2WenpamWBP2tfDD7gQd9nRSii2VbqJUYuZykveEhCvMMhrT79",
  "key6": "4687VsLZWMedqgEB1W111tj9NxmjtX2t5LE8ueD9YakTv4DhgS4Y2Hp8vG7Thq9fXYtUFrrrQ2ZkeUgKbcxT7bHr",
  "key7": "5NSh2qPMvNkbeD7YDDkfTtVMuKU2FDV4eohQospu2HQGcPa7YT12thDr1moWfhpAMhStQHytXWQnkkeSoZEKVM9v",
  "key8": "4x3PnrV2iTeRjuH36S5ggVo6HfYwsVEcyiXfcMjcBQmAvGAV3DvqcQvzNcddcp4NACSk75xZM1FYDNbuy5pvmCdk",
  "key9": "3AgB5wU6hbS2MKauLrf4zkWeRmEGYDtVYLbaZ3Qrb2Jh1eSBXvjjpetBShsB7MREmJEHy66BEzDHtE8tJZD1LocL",
  "key10": "3262qBpV8nQjR5aUVPnDceZ5LmQZgVEpa2yN8qQ2brsn5FpUhCndA9Q9FE5Sey6bLAWC9h659ErRnFcirKerfaaN",
  "key11": "5gaNUspJZKg4aVW8t4VNkQLdYqaatTyWzMy4G1khXkXGwRcvFgAA8iCMNjP85qs1xW4A8ktLWsjEhna86e6qYkck",
  "key12": "4DgowSEkh1sjfeLJxDwFbQLrePPs6JvQCxJgXgenV5sDHCJ4N9UVYUbxpW4e3xrHJsKNAyomwPnRv8DKvN6o8WhN",
  "key13": "3ZQ8b5v6tyzW6o8qrMdj9vwyWsMHNsdemHYXpfQXgfptJu9cG2ufEHEeGBckyA93DhwQXnpKAk1uE7qPoCJ5ccks",
  "key14": "7P98gGeP8kXCFN5NFiWrXU1CY81AGKWnA7KMRRCV1fNmdDgwLEhNnaYTZ94uamMZyGvKSUuuAzXqHFiKPYmatkM",
  "key15": "3NPGNYEf8SBhUzuPSGkjkMaxVeyywWDG6kWazAkMWgPn5qWU7hb4L4ATqhZDp9apafzN2AxKsg36rbH1HfQn5khh",
  "key16": "5VqAf7LijJ7h83KwKyo9Ss318GqpbM67hne7rLJERVpMJFfRgRMhvYq8c3yiF35X8LF2Y54yrJkEnq2YfDWeP3Fn",
  "key17": "ZVQzNqwsTHLyZHPS5Q5XS5KMtyDpK1DbY2P6mwdRPA5w62P52MB8X9JFtfzQCM7BDhorWVBh84h37FtdSNa1xJb",
  "key18": "5iA4GSgRfG38VbagvAbs1K1npgN5bf9MN7D7Rq56ySt3zNw5HS29kCtvgJYZ8kSoZaYgyjob5kcno8fkW6GawLZs",
  "key19": "32wdcE7ADAvE4gimQaaqQQWbBHfmHCLBbRQXXWczRgc34rf63RMzW1TC2Ea1GgMRqaFaxxZTqSfCLWeJhfV3Pm77",
  "key20": "2QkoYY2iXWDBnoid2XxoG9dcwooZDDrDmYyat61oPBhAxZ1iUb3imNH52DGo9M9KSVkWhbW877W8gjnHfqPzjwLq",
  "key21": "2HGpxmhjWV3NcU4TyxmhG3TKLkhJwaGNj4i9gMXA31VxzsdpFFsS9BtjeTu36ZFzz1jxZRrjb2tFq9RR6531nNgj",
  "key22": "2aLJG7pWAuJFztZnpff6FfPiEJg8jKa7TRcdtFKFC9TQ6Rx6nnxNNRHgTQLnc8ZbrkaM4vi7WHVUxwkt315aJcLT",
  "key23": "5wHM4U4hPthGC8Vo1nNthjaxFwbu9G5jthA5qSJSuVaCWrgdtU2WU42ADp3iJjjTYA9NSe2fFhwtzUvw22WeMf7v",
  "key24": "3KJxFDHjdcmShGAibwayc85tJm6SBP8NvxncFwDFZgmNGZd2Ex419BQYmRNxH82c26DZkF9AnFWbGzkNBhXW2pEk",
  "key25": "2uyMHcVsnp3U6nDtbR1joYeNz1kMoxKc1Bu7LjyYqCJ7YVirvneCLh8cBtWo44UkYWso7BpAfKFFxddR14giGe67",
  "key26": "2e1bxFqy3SPSM4SKQJT2ad9hvA7rxThZenmrjDBx3dPcUn6WLZetpENKZKYeMbdHmHeF1sw6Y8skDTutnUGebCSE",
  "key27": "4Wo956QvbUHWWqeNjGXhEPQhCgc56VHymYY4ja6Jdy1PJrJsaT1BcDXJgw7NEBWU77SXELhBCBxYj9CsXuzaRxPk",
  "key28": "GxRLYXaqqYz3PLDgKFstswVt8oNA24oArNS5BfqH5oqov6doA9cjH9eCNSN1HYdZT9JCPWuABZsqxd9PM6Qi3D8",
  "key29": "3S3nnSDgVUvBQFrhu4WEqitxucZdXrMTc5npvdwpELyXQKMBbuGv5u4KSxobzJCvNcpbBkuVeV5Fbuw5U2fHiqb",
  "key30": "2p85oRSmKo3hTrESsaK2a8z7iJn3h7kxhzgjKDBAxnNtuZTETQMPvWaq1aTzJV5V4LRc6e8YM5pm37xvGr8f7NbZ",
  "key31": "2ubxgh5gzHzkHgBueJEDfKMDHp8eSHuwHh7UFKtJfM1Unf6bagSqn1WMcfY5SNCAW3MM1dfM1tU7duuAuCJt8fnP",
  "key32": "4cyetyosj8YWhBrT7puqhQ5xmUqqCWvpdBfF1hy8wG4NXSb1SDjPz5cEVn9bvBfZ5hYkSUbLA9PYYJnWKnux18TS"
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
