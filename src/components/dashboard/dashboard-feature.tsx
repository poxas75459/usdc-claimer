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
    "5pGDX97LDDv3vkDFb2AFJ6YMD6TasrXD5hofSsDCjihvgBwYR4HsSspsohKJcj4Pq45dej7o2LYfNg9dSu4kDCFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGmN3hAsNF55JrDXdZZwxPPeZdTczeUqNFGGxz29QCxbHFwrBSK64p6f7DworhCsLGGxp1TVvWRrc5SWuZFxvQC",
  "key1": "MyBEhmbUHvEDNLjswFcjK3xVgVk5Zk1S2qrZSpA9Tso9Rj2qdUyxtp2yURZ1VKdJRzHkVdvhxjTAKH6fi9wGQHV",
  "key2": "5BMriy5UKoj869vTjMyb3RcdrwrW2R6wVbJfuqK2rQkk24Nqmncm8PmWu4rXWgY3U8SEsymrRvkXNhy94Rgaampq",
  "key3": "55sPxvmp4gnwTktvqDvH3YUSGMMiirRKJRUFXxT4g7Gwhk6DjwPuAYyoqX9WucZ3a1ERvdrFnP7RohWoRXPAseBm",
  "key4": "35KezrVMUpt1CjkqvqU3NcJY48H47AVWHSj3NAxicVWM7iZHVpTrCXyVcu1RAZ5sPM2EtmdWZzDzqhMHRiMWN4y9",
  "key5": "3dWb73UArvkKBK3yp25MeZpXovQn9cRNsYRXzgyBeB3t8ThBznuiL5njsfjpRBKgQVBEmgqops8RJENPayQc12q3",
  "key6": "MxbwNucgJAfjR3ix5rt38o9WVhfxeqQwxdgJcuuZv6E7tBghCy1Jo9LNUBxHxoEyhVFVXR3QCSs59LKeKDFB74c",
  "key7": "4KvSnF8y1n4LVm9iRYSDQgbEu8MFHZ3p1eBh2vdPEbS5Cpvr74t3zoY1DJXFFKdneZxtVyqqwkM48u8oFKpLHrKu",
  "key8": "5sFps238Pmy99QdNPwGeSsadXh5Dg2if4RYRmctrEQcJhyPaXy59LHPasLphq5FpNh8LpCkZWgF9djEQskDtYhws",
  "key9": "3DcGgQCuyqCtC7qaNze9cjQXemw55a3LayAbzEATN8xZGxpZuaj6fnF1CPtSNWXgdFTYZZyzQCY9RkeLQHst3av7",
  "key10": "uooztAuxvnK7ESRMtjQGXsWuK8d8urRdRJ3evZQtu42227KnmuGF8xgddnNo2pK2tB52CTGhVyWibAJWz4ysZaX",
  "key11": "5sTVm7MciabFSCedA2xUeM2DBHGPAmuqG1SngDsKYddt4tUXxSJ1zr6Jq9wtAF9wbMJKgpTcLY6vFhTQqEviPEis",
  "key12": "ipVL8EJDHpZvpRbhLXhm3VKSr27cE5YDUw7wxhb9414ddfFcB9PdYJHurw7WJQut2DjGxUgvoebBdTmG5QNGMxe",
  "key13": "32FLnfEFmcmnAGQRdCFozrGt3DAFwm168BdCzDCEw6DV4kojohE2ed8YBzZMETkR4dhCvHwzneMjv4ZexdcSgewd",
  "key14": "4BDRLSrEP5U6bYjGR4sAVoTx5hapS4b1GiQZd2Qwzuq32Tvb1DekrBGTSZSCsae6tdpSf8LvF2S1hd1CF8isyywq",
  "key15": "4HWZ3EwMvWJCcQicvrwndp4W433pUpTAucYhm74N17dRuDrCDkQJ5fY9oG1MjdZGibScwzD5YcbV2CLeiXyDezeo",
  "key16": "2SwSP63Si97aeR8miKE2T5WYA69osFwkwNPKFxFKtMZpzZkwLb7CWbPozT2dYovQTUJV12ZG2bURsCrJEivsyTLL",
  "key17": "2USUQMuELV8eRPe51cydbQjhetbvit4Ka8J6o22wLUTqegtDyvY2ptNgBMPhHwa4qAiAofHJmwy4cz4cdpQVCniQ",
  "key18": "4J5QwSXYiGe7aa5ozMucKYmhMzuDDJ9iVSSJTjkwbfZgzqMahuCFVX7goMi8mAaFen1iMah19QBYhU4GgGVBw4S3",
  "key19": "3tTGyTkQQ1BL6Nb7FC7XSiABwvQhASHomuDPRKgJXNo9464GuW9B1gtVWBYhhJcokcS8VFJnUBEWwPVfn3c8pcuT",
  "key20": "3FPMBrUyofqFPwdQZgQkCjeNN3Y9AWrp9QhCv2ATRy6D2EsujKyhd1cjqV5tTgLN3v2cqtTDhHubnrrQryH5QSTG",
  "key21": "3sx1KXfRNtxpEqBqtZMmnw559A2wBZbUPDNQZ6SQFJQhVWqWzaYWXL16nRqSRV6bLJF7KgN8rJk5uJkXgdyhweVX",
  "key22": "2zTqhYWc1vafd6vCWNqR4F7xaXcWjwHUuiLZwSZx6gYtU5tT7W2vgVxZBozZMQHrY8NLJgvLGgx2PBnbtyAuFun6",
  "key23": "RSh17WY6fQfvwjnBrCkH7S27beCaqHXUemXxDE2F6qtUTzM19chgyU3TkMY9tjThQ2fZzoBq8nqRAZcN8RxQ2iz",
  "key24": "3aqFa1hshYyvKEswKErKJNzTh5kDnP3ymYX1imWkAFLNP1S3cGPqdrHYefRhKZgVHPsr59e4wCPEAs6zeXkdBVt4",
  "key25": "SQyJFwCXfeEa3X8zMA2F3Un37drMdoqmETGcM6MbS9EV4XLj8RhMPgY29NMo4w9ko1s3QNQ4Xvprk3ccMoVxVs3",
  "key26": "5p4eDLgdKhPKKfaoa5wbji7RfqE5fkctShMaX5XoC7Hr8Wx3b828nLpaSF1ZtDME81NpxpAurTUNCipC8rEdgk7j",
  "key27": "4J7jWCxjMNEGqt7FFPEukHM9WTUWzwpG7Ztoum844T5y54EaixMZdZQqygX9PX4Wbq7cd4z1THaRvfAULtHenBmh",
  "key28": "5su5cRHLW2evddmPn5ndNDVRxPBZEXv4FUdWMX41GpUAwf1qEAnKZMRvxtnXDuuDT4CQdxBH5Py8iRUb1GjsdU1E",
  "key29": "3EZ8Rpa7GULXuXtHMiDPrcoPriLwTMsv5bbMzgojie4G4NbLJv2SSJZfGBLyABHiehcLjNK8syAb4f1chi9Nu4Ln",
  "key30": "fFuGHXmEcuoPuqWJLSdYq2HEVr9NMdL3DBBB24fXFzeFt65eViguYMVTFXE2DiwyQGMGC81AU7rheFccikkxcmw",
  "key31": "3Cwg8ebbbfwt4FE3cBoeyY4ZdoFtqYPfbnA9SPGQvh1MTsANqegCz3TeKdKAN82Q7uZ7chUCPCKZSyX6Sc5ArbmZ",
  "key32": "318mgfpaU32VQWtUDwmhFtn8PrwSMGpn4rb7GJzTLn5qzD27zcHpAkCFthRCGSqsCrXuwqiqqkLGDFPZtazG2CLV",
  "key33": "5ds6atf2r6HEqHZ55BQLjb1B2TRh6j3pKEEJmFiYFufkWoLHBMG1aom3gHWdwa1w8cH2mfzhFJSHsjnf8AZLp8kV"
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
