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
    "4ysazVEFUkzH6aAqaK9DPjQWqBeSK4XshNqKCjjSjQFenBawLUjBUDbi9yEaGMFf3WgSLBD45ehVPTmrfvx3Rkzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YkusvyrQmW2s1D9uCTPZAySmSgdNLU8b6HBWfeeY8xV3immyryuNWTD91DTAYAJoU4wLDHWpBjw77WtLZ5My1Rd",
  "key1": "2RNKCX5T6dBjNwdWTFpFSLt74MXwcH5xHff3958YV9GYPRiqiTN8hjov8JBHd88px2mjpvjBegVkGLEjLhtaNp2G",
  "key2": "3x8H1pC6RS7atoUVHayTX5oH2yP5pTs9dwUcJfXv4NRv3VfHH38s81cxyvsE3zxLjbr4XCTetsqRgD9RGCPfudCd",
  "key3": "5ZsEFfhqfud6wVVT3H3SSu9SW16BrZikQrVytGxoZpy4U9Yg8dVA77hsimgRgeNmtMwRQGHFnfRWhqcUHtce1jqY",
  "key4": "5Vq3tiPoRXUVvcCuyL9sCkYv4mh5szC128jZKA24v11e4FeveUB7zxFSfapj7RWuybEPatEbaQB7d39vcouctiUs",
  "key5": "23vXBwoppkQKJCAkgQCMjga4vA4k2kzr14TS1AWFDmSBisxi9AHovoJPZN5uRg2LwQhAKCikXjBe8efCF5saih3Y",
  "key6": "rqfQaXaWmvpcrvZM98bzijiQkWL5NqLnnkPqUp9DmMfnrHSfLw9BafRotkXrvsirXM9fcq7NeWpk12VBFtLEEmB",
  "key7": "3ABPBLsYjbvdCjz16NoSajohFx8E3nJZmfdwP63XvHNQPUo6bzDYdunz6TVYyTZhmUxpSpeX3DUiC6Yt6NgpE7Eq",
  "key8": "W99ZsKDaZYXWMtekroiVmmHqmqbdrMUyG55qu3eLdPLXrnims3MBrJotvTYAM6F1pGygz1K8M6Loq5aKz8WYCmp",
  "key9": "54ySVBbyfzatWM5RXEVwaxWmsrW3xwfcVz2HJhsRhv5SQPqmu7oCNaM49gh4LuwnqafkE2RNYk9YjAYXPtoyRmVE",
  "key10": "5BtEJQktTKprZPH6EMaJr5vPzMWEADqhCGRpExVcoNapH7gD75444vT56ySzKQzqZRJPJLurNxjqtVnu9d7vYckF",
  "key11": "4Tas5v1CveiTbHepckQP45FjGejBV21B9UMCv82zNbnmAA4Ern7eqyW3AoXvJN1FqJaxTP4FgqhTf8doRh3q3uDi",
  "key12": "4ihvrNo2N6s6aYAJd9R5q2vVhYdfcHYz3NJadgWmapnJx6hwbvVVgWJfDqmBJjYbVeqQCCmey7Sjt6FGT8Jb3TpK",
  "key13": "57aEbcyJwUpMCc2fs8ZftjZfK8zi28dZ3yUyK4BvbqZkhG3gLctRQZd3DiFxhXAPs17xuaCQwTrmM8pExPizmwLm",
  "key14": "5xb8srUz7inHJakLL7vz7zLH5HWRja3H1U2hPkr89a9dYU4tTptWhqJVLbExUhSoAWpiNbzwojm7HL9NHhUDWh3V",
  "key15": "52LB9qSvhvHLaDHrMnK5nNTb4gpXDWUAmgz1q5buiek8sYSxtCgdRkMiAkapYuwc1fxSqGXC5UPj8SmdxHhXLW3G",
  "key16": "237Hw7k6jqaCarPBHUo5NypzdQzM4a5eV6kjuEEpyvcHnAogFBXNQVPXx3KgY8CcGANCzzRRUQfMHs79f6v1s8RP",
  "key17": "59y1CxPckgSspA9pftiv9yVDxzu5sHxXdxnUkoGDpExgm3oYZ5vkcmPsgL3q4bgXZ2EeMWmnTfkXGEvnBMrJfReY",
  "key18": "5DLnfiUTa2kwmmiEUicpmDkSK7piaEvxP8tqn2kJ23Dnhsaw8iRXF5CWer6MRmQcH56ASax18EiJ3yGX6whSZDyT",
  "key19": "2xKFB528r39nCtZksvjduvrTgbrc4jqUzALitiV7teuz57gJveAeG7V6eeSn6b5wNwzSvxUmXm9nXvdGKcxApjgJ",
  "key20": "kHnkeRHZKf86xokSQtbfzoNf6m1LcRXhcDoL6Km3Mh5jtJCTXcLfzDivbUkNFat6Bjsn4xsmiUoQy4UwwnJpdjn",
  "key21": "3tkeesq2CGX7NDx6r2BpAYPVBGuk7rhEgSxDcRJAiP5mMA69qVfqYBb8TMqDCSVC9eQKEuseHCubjE7YDwe6KRfm",
  "key22": "62pVaZCwd4XrtfDogZHFRekdvMo2YGu2E2uGaxkbiVJLG3TBExA1RGGVscJqbwLnYT1TaND6Xdo2am38KCwcLK3d",
  "key23": "2kRKeXKVCBPBTYLrKXSq8Nmwq3abXL84fGst3MDrRED5BwshfzNWWLh7gYkiozCPyS4yuJuhqsyf9sGK1pbC9mjD",
  "key24": "2KP7yMjevN4dVapwXqLKJibQtNzsuHG7HCCKt4R49mpf9539MzaN5XQKV3GPx2BBDb7XPQSD5Q9feGB4h39Uoxrx",
  "key25": "4YdQ8czc34sCKJshKZmvDcvjXX2JaAiomqcBWoT3hTJnSsDAAWqp22bKKh6sQyh82SB6aNLEesUNQPAJkeaLS48F",
  "key26": "dGnsK4BZhkjaZtjScB9KDva8VPmtobib3SbvNPT1dUvFXGb3nyXmWrHTzn2bUPbcJU93TynFAKmi994ucGXMwjp"
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
