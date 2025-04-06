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
    "5s3sFxUJxPrvHWmSicmcnyRLe61qoArJbt3gP3dGjbthAdRYCYh7LuWR9VcBVagn2g8K9HLGHcTBWps58HLFuPCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odSYEdc257i28BDa8rsFxqLStTFXrpfMmRfJHHvq5trT5Pyw7z3r4AUbamQc7zqMgx7vh61MdHzSLFSayVBH4zn",
  "key1": "g72nnmrTr89Yhh9GBcGWUbv7zVFT4b4xaxT4RHHg78EDCtTV6QRkw6pgbAKx1Fdf13ejdbb9LGxmcaawHgTTZz8",
  "key2": "4gFWFDnf6KMgb6CFQYDD3RBNRkm3ESAg7z1t68Mb5rVNkG2F64UGzpEprrnYGYPshNV4EbhrhNVPCrGX8VFSnQUS",
  "key3": "pQSCQQUt2bjZFvwFfwAGZMQew7ssedc78tdRYYb9VhhmQvmZbmfNKbzp6tKpjB6AYyiz8KoKgMPYeUGx8sNiKxa",
  "key4": "4CYHZSHeQtfbvQEHx8Un7kPnCBrrbvNKY8DAeE9EZy5bsQdF7fU4abnU7SqZK7CRcY4po7iCSyTipc7eUXH6prXf",
  "key5": "57sBLDJERSjdA6BoDjKv8UbkzrSyt3fscKfz22XsduCbCZVrhX4zMUMtaqTmahWB3Ag752BD3G5SUy1Y46cG1zT7",
  "key6": "5fo1863uQcJkhputvVARdMgxKvB9gbCobJk6kLTCjSs9pF9nA3f2VbzCvvG8bnBgWm2MAbE8QMnCCCK6z8hQQqYy",
  "key7": "4KVTXMe8Ndycze4PCJsiMUuqT184W5aDQptmhfZKxKgykYnMG3yENM2KYSyrK4wqXPj64LAML3F9Dr1Tk5Cne6HE",
  "key8": "5D7wtV2TtFNBrYAsMvdtJe4ARXYw5XCMQWiSSJTAiJmNANAX54xY7V5jna1Xbgt44YFFxg36yTDh7NPrZrQX5ZoC",
  "key9": "2KiesdNVXuHMidJc7x4y3AUSwhb8DsQnSzi7DdxDpegohKkAnMdTRj5oTsXUg16T2jEvrZcwCHPPQNne32CgYXp1",
  "key10": "5MZh489USvX9nN1XaMD17H3yVREfeonDEeXs47Fw5FLnMia7cRn42cozgLYyMmxD7YZhZoXoyVswuQvK66cXvq52",
  "key11": "2bkHJpBdNP2siqgRU3BdhU3csQRitSni6CkKLu68KAPZa5hQ9BKy1ofzHpyqdnbLR62WoADv3iwJMErJ3ysVEQmu",
  "key12": "2iCSj6Zf3ADivx86o48S4d7kbzkpHDrhbyxZ3qR6NqTcCWskS7gNYX8jz8ypMxrSBQEt2wepVDGPFeraza9Ko4Dq",
  "key13": "2qJvZevMYnSkWTWvctDuuDHVfbQRVwQUbKukRUb7qr65kBjPpyaavt7xccxitit788FwQNKDkgmRXc6QHBRQZXx6",
  "key14": "4pWj1CDQznnisccP2dGqyGgsaifYPwjeqEwNWhBp6PQZgYAzpYQAEQ2cN2TFKv8434o8xX4i3VJi6ue7mju6g3TB",
  "key15": "43hYymjmJMbiy7rsQ4oaTbSVTaiif3DtWdNfh5F2JG2YxJTi8k9Uj7NUqLBCpCXUa7Y24hXURTD4CiT5W5KnNPpm",
  "key16": "4L4Natxi1XYN1AoyyEehXpFYKs9wipd6dn6BXCXb9U4JjxpukuEqJUUFfeokQL2X2DC6mANnhTx7pw6jWCeGtTPJ",
  "key17": "Fzd66Fn9UcMu7NDNSFog7wueHZqogcZ8f2eFTBoGxqvFAump9Z4kqo9StfAw46PYwQfq9v6FcGHRdb8oxpnwgJj",
  "key18": "49eTDdi1J2UBrsLaAPzP1kYbUhDqPVogRMNnHdMPDqB72LMZpqV5pZKtCToBtjR5tanuwMx77E1B6QschRMHh4Pz",
  "key19": "2pwsGJUhAEjUWkreG3SAMx818ryo7GfMQNhAEpueydqVNrzM1cUfANJTAvzUkztcbruqPbXMuveNRU18hroEVefj",
  "key20": "39wGxyzepaoFqdfrM1i5zMNZUSSuSMB19TSAUpWFCfNVPDUnpMrntVTdifkMk2WGJSHorizWGPR8XRKcX9VapWgV",
  "key21": "72gKVfgTkRZjduT2vvR8XN175UCP5uJL9v8Td3Qro2jukFqpw1Vjaem1d7CSeW7j7qqyBkayS2xpbfKVmLVUYvj",
  "key22": "5UpQ73yJAXo5e9RJP9NFu7v996FKyXL4m9Pbbez8ECZAfLvuzJFhTWfG3tfrAoyVwH5zKeNtWzQq2qpPAaiaEEEy",
  "key23": "2u6EHZeb2Pz7NYvZFQRGwVAzyuZyVttaW9PAjsT6oCKBDNSy76Btw6R1HDfr1BpBXMFj9AYvQKW4vyt6CsGkiimo",
  "key24": "4gZEGQcdKmzxTLkMApV979X9uxksEH6TYpi2MtDJbAv2ywHz9jTBbccA5jGyXpe88PoAkmwCFrXYHysodpKDb9nJ",
  "key25": "3Bm1c1uQCymdR7ZBrjYM7MMDnrDaAziaLZRMGViYCcUqcXUPicKtgXLHv7wmAvW1TT8pvxpPxi658AApeuSZBb4q",
  "key26": "2NfY6yLyB9BRoTLk3mYhnkxwsqLZn3nBG2ZPJS89Huo9r6B2ZKmpPxHC4y3bgJvckMb5Ey3ZytobnuRbWjd5eFk9"
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
