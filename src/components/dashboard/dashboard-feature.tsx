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
    "53BwFvKYdStkBMkVxtGdhzJrHhr6fdZtmkMNFma7Y5tY2LB9ZWmQ6pKaMgqcdhk4fCeD9C3MhstgPsa1GRKGmxvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Srev2UwVG9595XBYrNGjBqPMCqefkz9Vw9fVMev3oMwuC4ZXt7Be2ywMmU8wgDKgwA6ffNMXnyrYCTbrgkSBF8i",
  "key1": "5Pyzj2Mjp5pszpk78fJR9S6SG2gxhvSyQVV6zKH621yQnZnqoFaijUXMa383tyZn1b6THyybejGouGHCbxt5gktD",
  "key2": "219PYxSVvKD6UdRjw3GWrEdB3vmFqvjNd5h9TqrWYgKELKCtiBeJAJ2osxPEzEhJ1TtMzFZnn15QtFH5igeQkSkq",
  "key3": "2tBGEzwmdY1nJkQpw3SNu3dEvKaiMiqa8Pm8txZzNLFTr3mKpXmP3WEuzSNWt8RxWq84ssrDm4pUWqcLd7zBnQaL",
  "key4": "R3b5tz4eg4J8d5zkybvym3WPhWDwy5tDyp2jCdrgFX3V1cF47irvPaNKwQwvM7jdh9aLGRYnzLMCaqRQ1RYYCMc",
  "key5": "64NoX6j6fRcvbSPvaBmhLvEqv8jUGA7KTuRSrsLwTQQwEV6Lt2TYFYQekmd6Jiei2qYJmg9BfqVCXxTmKgXbEuXk",
  "key6": "2YaVKfvygSnCbio2RgHEnnHqHaJgEDc3jqBg5ovNvBHZ7Qj1peazNXN6ZUjKsGsZJiXooGUH6py6joqb9hwBSwAS",
  "key7": "2Q4yBrdhVKmFDNAeAc8VRLRxRuVmj4nJipHYMdBxwzRZkn5mknbkHrGpgm6A24vJCRbDHKrEPZwZ2k1atEyUmgMo",
  "key8": "4xCcvtj2GmoAwC9mW9W8ixZfQdPs6Dqu3bbkjAb8f58W5snGBuZxYwFQ73W3TvH1QeqSJUHhMPWj7jtSUGVhNyo2",
  "key9": "5rdfCPUNJuMtYUKVbUtUzgcY3oigEwcZL7SXbY8rWCYGCs5W1PQeQjiRZEAZBjiNVxgunxaaFcQU1cve4eGhRDPB",
  "key10": "4Qse1vnvfEBRSfn9LETSc2wNDMKM59bR2xuAJFdo9aS9VjMB7ih3NENP8uecUjWDWv56QXQ9F7U9ui3iSoaCU52W",
  "key11": "YreZvWZfG463VVahKBskexYBmbY8MQz2edKUZZydaFGzMBVrKCEnm47JSh3FCtzMHC8ppcLVV2M7wMRRkcqkpPy",
  "key12": "32PmX1jNFTGkT44zoRBSEVp4HvwV57k9KrztCxtHW4dfCBXM2Z6NhUfSrUkWr4yJqWTuYFLKqKe7Z9YjyLoQJ2fX",
  "key13": "5Ra5T7ZVsYaLeDuKajSwh69NDi5SPSpxdiTEY6bNX826AZBJwZY6AeTE55D4biWU6Q892VacDgstMkBjnfYjSJKK",
  "key14": "3ZTqVwzftfHvHnj833xAAAtM5hAESRgbaXboPw9QS24KZFwLq9dQU9ntod1qdQAi1HAEj5qJ9rr6WE9gNKDfsqaW",
  "key15": "4eZvSd8xLXdFzBNfA7aWLU6Ad4bsA1AQ3MoYKRsw1KTq526yYu4t4vQc4eEfnxkK5cvyhjbr3DJwPWCw6n69nehz",
  "key16": "4z2hYoWWL8hCVJRUSfEaWrqi32NSoGE5q7ig7JPdQDYMVxBfWRxa2FtWmKbq693eHq7AT32gcn8zyF5YJvHoptNs",
  "key17": "47MKMzkaTZMCCPY3TNGdyaktvKRE46RsgxF3HThudFdQnahngD5P5Vp3hSRiJrR7fS5t1znquZGzCx4qQDCdeHM4",
  "key18": "5JDZkEUPwaTYFqqhimwgw8eC4NZmQ6N6sYGqypaZnD9soWbjPefN8LvpWWT3T1W95mhqmVwQsNZ7wwKUbp2EQUD1",
  "key19": "3JcMfH8H8nkmYGX17dAjzNGfZ5DQdx8H3TF8VyZkCJYNs3j8HsTNSkqGGj2UcCkFxw3aMLUh4L8wK1kP7cg5ejXc",
  "key20": "4KPY4YzbUpGbNWQEop8KY76GzfA1cmQ8cW7bAD3ghnCqjjbpNE4CpstkvvnCJPMamvt8zqyLbzh69UUgNR9nnT5C",
  "key21": "5zLJGifVBEkm3PYYTZjsTbZP1Nd8CeSSnM6QUxM6krwyv4eafqGMonydu6d9mPwnmureYctrDHFmT28R8t6DF6Vj",
  "key22": "3N9x7DjnzsJMsM22bZggMrDYCNr5mNbBc4hvZ6DZqK1FWtFbHnRCkBma6trbqf32DfbUiCbKpyAM25jQ1hHTPbTd",
  "key23": "Nub9nkwerdSWoxzWrhTunqae84HaYeaGyhBspLPWypxJTyKXidRWRMxp5H56CLzqyrn9fMMN7pTF4YAbJtMHhPn",
  "key24": "2hm1whpBWqe63PnpTUqRXVMbDxwwo96uFB9adbf74xTWETAHZgBa999UTnxkBJt1KhfGCHYxktENkX2hZ3u48HzJ",
  "key25": "uiCjDERS9goXdPyVQfm4ysmXbw13ycJ2Kk5kfsydyJdefDeQzjzyvbHQdNH2FH6Hu6jjEaFkaiheb6rn9fv4Eb2",
  "key26": "2L758ebx6G7RN76NZdsJq9GY8No38MPs7BXNXu7jKmtyGqmmc1fU7FrbAVnGMZvCZRm8RjvXqmLYvj34AGwns6YZ",
  "key27": "4CSs8i9n36PfhstpUF2C6emapT6CfUBcro2w76bkWFkyDC4fzD7owti751P2XJoVLzrMLxBjFw1kXx8MJEaPwYp1",
  "key28": "5fHB32rzGxsTmogREp3M6vpzgq441fzUJ2CG8A1E3YP9Mhv9aQKhhsq3Ac2NNPXN8ksneGMPQTUnexGroS7vEf9S",
  "key29": "3N9QzAbSnTYpbauHQzxreThxcBnsB4uvioMyWvciWg9V4nWjMKvXBLN2eg5AgVP8UC5ZnRtuy4FDPdNzDWnWdeJM",
  "key30": "42YimTKZYnebPVYvViiheQwXD2Lj4Zbdjha3jkPPf91jWSf7MVjr7fQo6XB2NBZYqZ6PaXBAJdR5X9GtbizxEzTN",
  "key31": "4Hiq7B6Tm1oGtuBZvnzKB2jH5HUCwkahoxGjUFYqdrQkrGRxsS15eqs56yhrbgDzDt8p3DE7BLJcPhEvXaxdgEBg",
  "key32": "3Unrq2kF9ETqxiCb8uMHrTGj4TrwRE2QHU9udvHoCrHV6fMYyfrvwsiL8PZt9M2XkTnJKztRJisQvJwcLBDsuxb1"
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
