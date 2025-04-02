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
    "Y3Q5KPMJde6uNFCG15W9Ar4AWyWnptnzrXQLpASSy1UJSxLxzvxqSKLDGLwJ1RJRV5D7zH3yKGp5P7ed9GWSBY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42M28yriGPeyDCQsXCWcypz61aeJZJoK9x1ZS35eKqjJAJoQYQHHGdSUoMVyZioAPcYoi1gqMscYJ61Cgi77citm",
  "key1": "LcmBhYdCBA4EdmqiNbYhyJUrBTABXdu4yBtprYn4nX4jRktABJVnCepTTVq9ykhujbUDLh7RZyYebPVLNoBAPxY",
  "key2": "4ycSfRzsFjYz3GUMezHjKpDVYdKSFcGQg3aEEydMTNY33fB8ydXRp9K9mXTL8D4wuf1CWcSwDxpxZsEwbgWzg8Nj",
  "key3": "5nL5WE9qVEnFpSAuBMNtntrNui1coXwvmzbTXwDxAVUoMvYknjVXVo7CrbM12DUq5FTqJ2N56mmJmjpE5yCrJjSy",
  "key4": "4ZapE78f28ACQmPcohsSfaUWmMFx1sf53jyCsKhex4bcnUVy9qGfQe4bFR6Z8J9cuExXKS64j4Psqrpg8o4akmhs",
  "key5": "4eBYf51ZWLDmRUpUFYH48JxE6AYRcGLDvjfJfqmP25SoZ8wH4U1vsj35cHkJpmwbaa1dbB2NQhctWUnZaymi8Jx5",
  "key6": "62YYkMsxLVvHW7LtR2ZdRVKtaEJwsb5SxoyqCJPRPuwVxUr7D5r7frosd5DicX4AGWajvPzprWBcJn1CDpoZFRAr",
  "key7": "5ChvYxAHSsqDMVhcnFxGciMQj9mR6YokK9kBR5d6kYSVh35hz4SGKjADof9gfbcHc7P1KKdqMdfrzrgC4HVEHJWo",
  "key8": "2EesErHdbtKqVSVG9LsyVSxbvinhJUhopdvREPXSvaSG7WiWXEoRtNXfqQpD7A3Cy55Qdzg3y2GNspgFNFieAgSJ",
  "key9": "59XUiYXim6k2DguvSQveaFZbSKiAjsvjPRKQVDj1BFWvuR3a58n92xhmGsx2ziKfU3CZ4RmTkBBTJ7BaPHN2LCCu",
  "key10": "o9GA1PcJm8Qo5w64A5Ddwo9m94jBgPqVBU8ZDWni7g14Qv3UW2fFYiCUwt6JbryKZc17jAJoK8rhwtK72aBGZeY",
  "key11": "4QtFaYdzeaamTvpVVnRbSoFgaWGF8hoUeYobZJRstiGxFURhvo9qGkqeEUX9rxFBied9CqokTnxLyJ2LvRYwrmz6",
  "key12": "3iGAhXPb6sFapmyEcDgWQ6YVB8GshEitQd7KTH7SE1oEFQnc94Rvynmy2S3zvMQbnXbGY3eSXJGrivd92rTmos8E",
  "key13": "4JBKvjpKN616aNzFbWfT6nbN3u6178eau7VoEU23aUPEPEGic5gkCPJcYFR1RnLC8nPfy5ZjkqzuMCwpoBsEwr6b",
  "key14": "N2E6gp6EWDTM6tXQeYKvU4wxvRmbo5XpgX9Ye5qGhmQZY2jVBnf2iiwUA7WHsMVw1QNfsH68THR4njVjaWFPUQm",
  "key15": "4UcWofUSQQFuErtqhevyxtftb2QTY3w4twWNmFr4wpFxot1TbJ9G4G9J8zsGCwbspdGqYiuQkVScssVnAeveMZDD",
  "key16": "jUtXhtf38GgdGEu7pvNsW8p8uKvguk1BuXnTBTPTtqwu6ooVzBMKqH2K4mNyEFpohn8oXA3fcxaKxUxrGYwoq8d",
  "key17": "4mhsDo7M24ShbQQGaYZWbn8NepkemZyzfMdkmXaJMemiguLAphfc1G9R4ME4XCj7yRgAbmStexf3Xm2J1z2FjakR",
  "key18": "3x5JP1pSCoNuViL5hrEmUWbrctkDhimXKPeGH2Z7LHfhBSxrqjVfm1SRXZNQhu1gQHwdmvo5oWoQNqzeGVMWyY9Q",
  "key19": "5NkX8713jHg1jcYBYqSj4VbyXjtEpSEtVG72M5CbTiXa41h6hrFJWDfTPYPStucYBjcbMv6BYCiFTRjatBw6xF87",
  "key20": "2z831YyE5qRPJFnTL9Z1C96hGFpHbM5nvnTmTcZx1iuHfenvpspUpj3gMBirsRyYqvnJRTdReztHxahs22dtvSBm",
  "key21": "2vN7GugFUcVxQvJR11BEdxzxR5FVy4cJCWdDbQqQKNc6D51YiJnh3spVq6qKLhVFrVqzLWHPrijzRikQeUuzwspC",
  "key22": "acKpRee9SHKEX1ykNqvnjhJcogsTKjm4xFQYSFDfghCRLxTA1sJwjR7jSwfojZCq2BVgeLVPGXGXyV93tG1m3VS",
  "key23": "4j7zfiYprrDiqfVeQg5fwTHBiGK57nmR8xgjMhgjydkRAZhMWRks37ePMPQfSEeWQr9heiy1f4SXfvWCeeuh1nqg",
  "key24": "4GKDndfqKS7zVCGktc8iM2wMb6qmpw4TaxcfmCv67o63ZCfd9LqJ5BzP4cD125WKVvp7RaYB12KNv5Efxs73yzFf",
  "key25": "4sVfahBCzoFy4n11YLP4R5iZNSfYjd7CPdsdsgtmS6Yhqpww5wvYK1AF6LASetqpg8CihCxzEQiUCBWFQvJBy426",
  "key26": "2iYqBoSEfpQhLLYngAXGDCULzj5eSC5GNEZvcGgeD8WwVVFbH4MLGcxiy471GMy7HbURBkAbiyFk8Da7eEjqVUDf",
  "key27": "22sVDT7AnJsLowS3A2kJj6gjuA7rPKs2envgYcprz2ZKjGisXzUYLwkuySJjD5up6e3GUkkU4GSkTNTUVgiSGL9x",
  "key28": "3KtzQTLBxW736Q8PRzZBSrEki8vuKpCZHxrVdmfDax15syL7jE8HeojaCcRdd5uSXqbyBuEYZTNL8RWTBNxgPyLw",
  "key29": "66Q1Erz8hFYcZAD9ZMzAF23u6oj1hNFGuQywY4DyYWKBoUHDtrs8NBrBxmcP7NTaxapb53Gyo51CvRceDsZvuq2F",
  "key30": "4zBAaoCqLA68bJbhxfsTzHcjYcEX5SPApMY2BbjnVDz7MP8aLcjN2RQfF6XTArdrf3xYEBk96RAhxJczdSHEGRLR",
  "key31": "262NhrBcmzSB6Yf7XJNucKBKMKw4JuorJavQfKAmKkNdSGApCMDxqEWFXVbkt7956qa8ydRmyD5RkdizLvt3PkiK",
  "key32": "48ygy7zPEVRq7Yuj9CviwSyZFXDAw2xARH8fCBJ719ibyNuUqfcycn3CxAiXT4TgoEQcWPci7Mc7UieFT2mPc3ie",
  "key33": "3f9ASzQTByAon6fxCRXnYvAK3AaJJ8ynZyWafYLgjn5MtcoUWhckzzkBmPcqw4DnnK6WDSTaEBJVhT9gwmHSi4sV",
  "key34": "4F7KB9JQuBqhyeLJ1mTRs32YfpQqzCkgzLHH1Hm6CnXrJhKdDwGjmJW3PZBMsKZkjBR1U2KTnpDx3CovRK8vGmf4",
  "key35": "4ZLsvs5GAasx3cVPBT6iMLg5TcD9U14bUV74miN4H8if5hzLVgkPBmKWzMR6n7ozfNTPsD5exHKhSxj8ELeAXTvp"
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
