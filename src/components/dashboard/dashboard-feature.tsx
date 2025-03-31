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
    "sjLuPxF7r46Mh6xhYzi6SjmaDRnorSMev5Km7BnhDfRkcwAjDAmfHfDfih9Z2mCQ954cv936XX2ckoGQhffF65u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXiSVxMQBqus1cwFBBrAwS1a32Pf6ngoP4NjB4LajiFjfANDqoXQirunEzvJUkL4SuWn9P4nvdSvnwms4Xf2bjp",
  "key1": "678mpgbiiwmKKmjxufci8vGi36vJwJZqWSA9MayhxWn6HRjr8hS2dxNrxVc4NtHZgx3bSzuko2H91XMgLgBdezPu",
  "key2": "47bkff5sr236dsqvHiy8ySFtxKxZ8UR6Uu5nNfoejtbTk88ZBhk8eqP6x35TLxaCkkBvmeSF2wXEycFcdyBNyRMa",
  "key3": "5baq2HaeGWN2ApqRari72VBVQn1czziGaGmRozDVAttSCWtwVDks6DcFb2i8LL2esBQBaebk8JBL4Ehgbostgxbd",
  "key4": "3KYZdzVaafxmtXx45nkJ16MdDkyjfgGZgETz7xR72DZTMs6d2W2oYew384bPygB8zin3JAhRG4ZHswb6cJuZ5TPm",
  "key5": "5nTuMQhEvwYdnzKxrUDyzevcdLi37StnCJxLeeBo6eeYTRGZkxPK2Zm3r87NzKhABHtTtCgU144x3kztBeSHpkvY",
  "key6": "4xxmvFta8e6zjVPPpVJE3S2NCjVMYFqoq2p7y97zAVurNeQ81FRHLwHdsCc7XV1mRxhxLzpUP5J9z9yakqwueqDf",
  "key7": "2yzyh6VzDjwFNqou1zCZ7Xr8VwXcUPqvH1mTV8ewicie1QA1X39Ud1mSksmmheKXHgjKuf5peigHskYj4VdTxMZp",
  "key8": "5h7V3fsjchcyiNeqCKz4tqtwzopTYJXT1EDiwngcjTuvqZanwN4wSL6vX4BmyvEca7teckLUXF3t3UPjnzrHdVtM",
  "key9": "U3gCxe3m1M5xbvfo6nwnh5iCVnKiRcZarVQTrrT2fsiht9jhPh6CChvEEY8ECxbUVDF8RCzEUJBrjHQRPAHSy5z",
  "key10": "3YPpeSeua6qym94ikKCegsPSPMdGGYfcYmtEUCQMnzwqVKjSe4NuXEZGUroGFzgN9ZreeJ1sqX4NWEXoCaoFsrT7",
  "key11": "iCKj8CUTrG19sK8SNgk9jVjWrXEJ8ZtNQauhzTWkj6XVHcFsTe1Z3xoE5eR76CKJpyLvLqcunMxjjfhE8SDt4V2",
  "key12": "4C4KbY88A5ou8vfnxcsZUzKMjXSXkK6GikzCqeQPDFRLVfq3Xw6QAYwoQuCYVoHGM9d2ByPuaJW6wCxbXkLzHy7z",
  "key13": "2ismsiQRswdevBXbRytUhY3faZjBcoVNJKMgtwQSD4gcJCxH4RN7RqCvU8yCnqbtEZH7euvxJcc9eXKUuEqRiDEn",
  "key14": "PoiVeYBhpNFKn7tReyHdWEp17bAQGPVcguNjYB8freHFLNKq5nGwhVH77mZSJEEmoM2r8Xro9Kuau4t3JZhpfkk",
  "key15": "mi8VTdqn4YwobbkTJXoPBZKtj6m7Pbrh6u5ZS6GEAkrWfppi9hTfScWEUim4Wwk1fxTN2FjijApjtfVs6Ctj33p",
  "key16": "3JT7dQFhrzjB3ktPR5jy6zSEUi47h4yRuQZJA6CCpeqkm4TBwD9dHTP8kwbn4U4AVxXiAKU844B2sKDYp1t4a9g9",
  "key17": "4RxBsqTPYJACGoMVsCCsijiqsBEmANKN3MANVWpsgQyA4P635J14bGCdBR3RhCfXnLECq7T613H9RkGmA8KB57ko",
  "key18": "3KQrH5JoSAKniReetMSatdUmm1xH8SKkgZrRLPTV3LYMQrWfvZ5xVXFhDM3owsf67G5cdE689Wp9TVJ3vD7yX9yU",
  "key19": "4spsBLcjrEjXrKmGFfp6nB7UC7ozEshvqs8eFbUZ5d9Cm1ix3vxq8JCtJv6kReug6UjWMRGwt7DTCHG1QFd12nrE",
  "key20": "2xhv6WeBjc1gTBqeKvrLrV6rDPEjJvTH4H6eUJpPRDGVJx5wjqkpAat3EbSnzpru2NnKScxey4MA8JpYa3zjuP6i",
  "key21": "2UsdMKrGMcn1yFxzb2SsDc2WzBbFVStRKRgzb8W7cytXWWnowc9k8Fz4mbaYUyd5EdAG1nD3b8gw84mud77GTeF3",
  "key22": "4BvqtBFCjFssHcJDFrPw2uncksEyRb3aCUjcuHsEvMCinna4rikTXKkd1EcSxVhwZKKZzByyTyRiPkTo2TDyYDaf",
  "key23": "ULd6H1zsWHdfxpKHYdz5F8T44yaiDryq1qRnNFfUwSzejVsi1j82Fbma4VE4BF6bnokJLoHcPd6jZMU2dF3xaSK",
  "key24": "2fDWUBuPZaHcUh45GvquDx3nYDzJEJHBBfAUTp4vvcj7Um96JHDz53EKf8s69FSEavzSXQMRh5ueFkSsJ2rxWVEn",
  "key25": "1wL3yVKZz7DSMQQ7EER1BJT3uAWnjnC97tMH2hRnq3SmXeCGjsmvjEZoRm3Pm9iCV9zyZGtYVHt4rwBkhrM7u2f",
  "key26": "27uMNjA2DVc7taJELRmaM2cVQm8RQFe6weLzDLboWtwdLwRs3RFuSsJ1uxPERY9Kg1Uyjk7zfi6By4KkXZCnRzCz",
  "key27": "4MGng1gBboXtofQREvkgFuBfU4EVVomGEvJQ46d17NYRCwYzVRfmZwcUmXTPpU4Hx4wypnpRpdxPawVbTWaQAUCp",
  "key28": "3pQ1h5Xjj53NpAYrBKe4Wmyev3iXjPPna81F1x9SQFkuLVtE2svAiydQAC79NZVVVEDZfXCVtp4WdymvXYvkuTak",
  "key29": "4cWTReKAjow4dSnfVycnZWmNNrX1WgwYhqUgNnyg6m3Lsspt6CRWQnS7qPR5qYgAa1vGPfiQWjGBxerCd8JsKE2P",
  "key30": "kaTDpbBsxm4bZF4T6yChivguhMv7Wzg8H3BwZFSFYE7egPjJkH1F388AcaKFzDWoHWwqdty7KaUzJCPYHQSEgqa",
  "key31": "2AqKXFTZscTEiR27HhZNavQYhgckj6UVYafBbM9yNEF9ds5P2VzYC3DjV7uFV7i72swwfb6bkK8G65BQsM7RegND",
  "key32": "FXJXRk8B1QHEF5Rd1mpH7DET6mYSeBUJZAZP5c1GFwro22PXxQxxPgGYDnDSWpL7yiLs1VD5fKbK52EEZqRBwc4",
  "key33": "3qrUKFLh14Ess4jH32zq7bxuLByKZzVPrQhxBKjavvYQ5HkbSyvG6dfyWKLagpqTg9CaQt7Y2SAUSAjfnBLqJgRg",
  "key34": "25GmfYGJdPACQs9D5qxBbPwnVuh3EH5YWPK5wPGQ1AaXw3yKdVmJes6ZQMJFkFsJRnW7yvWBkZE8MVBNAipkQmjp",
  "key35": "5KukUHuMHmjb9vdNLMAy8CBLMrWBfcyMSaYJZn4rneGL1ifjBKFiNAEPnzVB6ZT7oPNAAUKZwghygvAxaoGF4Snt",
  "key36": "3EejEMRhJidtaD2Hp4hGeRDTCmrvi7364YgihkAAUAf5QvZjGTUYBR24PyhgAvWLrGQUaNXazC56GeAMK8NYMXvP"
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
