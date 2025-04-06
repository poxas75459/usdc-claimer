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
    "4tcU79dqzjWsiU32hEPfs53dFmPwut3ciqMCrf7xvFhLdSu3ecFeigUns4Ch9rXeUsXdCnZo53ppaJUF9aeHm2sJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N3TLPcGxiuSBJwqnRD3GxD7RLRrKdTEsmry6Eenhjyzwt3YZ4UKJbjYZSMQZobgESqdHWz1WFTuY1nPdbteMy4",
  "key1": "3ZKiiSCXV8cgEVJ5tQibV1yazpNE6EbNzrixfPb3cPKGHoJWCMzocEnveRecgzgGBkmnhWG5XGa5MSd2u3duhv2F",
  "key2": "65n68duTHkvVdYd7qizaALDHXYWaDVhpcRCruq57JAsfB5epRjf8ZkCUCbgySkWQHkAs9re1Vuma3ViWnTJAdvip",
  "key3": "4vjdNwHixPGRZr3bRxaZLH51ZT9YzBgTzKNWngFm38p67ptW5TSXbtQJ9Ni4B9ndPor7aG4mTeSx3YNBwLZagBcj",
  "key4": "aV23De5iDt8NrkcqN5C2RSaZaq2fYPJ6yo8Av8CqJtNerWDiEr2WUbtWXGpGRWxGXpP35aggpnxec67koqaDhSt",
  "key5": "A3mbkFnJaCJeH7ZuWPoYsxmgGJAmnCeKxmcypXKvP1uPdyXXfG5AyzFQ3kiqHYY7cwiiA8oSGbtor1tN4X31vh8",
  "key6": "57ckuPenoZKkLSx44pQ2bfEr6z2g6bTQEbqcWq7EU72473GBjJda75qpae9bnFDRZwXXP2MT8YWZgVgEbBzx5dSn",
  "key7": "4Aae4NkH2aZoxEJjVBxwNtv8Wiyavweaej63z1uWjuGNxmeY2vUc44PCPabS9UyXZiy7afnnFPP6DfGmMSj8qPLv",
  "key8": "2U4P4hvwHgagucxducaVLVmQM8iwwRdYvWbheD9Ct3jMFAsioyN1TcoXu7BVUfnmuBfBEMX8HoRQNqNqYQbEsQRJ",
  "key9": "2cyg5r6XAdir4sLy4DLu9jjz9ixkCCkCc7KweHd7BKUUtpfgcucXTBozL9jePYHZF3qAUJSkZYVxHj78ZKaJ137m",
  "key10": "3CKfVvnqco8ceFP1ZUDpGTvQM2x5Y9srVygdz3nuAYwwNNGL5dXZyveQwkDwefDtukNnGTL2sFgBjdZrEbFP9iJa",
  "key11": "3pncVDwHMJFJPf3odz64JqVuATV8CobRnfuoRznAVg8YFL2xM5SJ27pFGJJNDUanvqGcNDwsyJTUtZ6MBUWDcQAu",
  "key12": "2ZKKU3XS4kDtgbwaGudQenkQUir6RLknGasH6BSKEh5jCQU4XaqfAvhxAAYtWBkJuJtcwXUMnyaCRf6YcTHEQcbo",
  "key13": "4wK3JrUQ14kMzVLrTccaNucBrKyoa51c82VUUC58f1qQxFE6xyMZJiJM7d11kPqXgN8Rinwp5btNshq4THUy4e1s",
  "key14": "5vLxdLH9KWT3Zqz8d7fVNGk2KxmmsTBra3sAWibjAnwDxXttSBwrQAAnEod6ro4cVAsFNHR2s9fPvSyBcECdFUep",
  "key15": "R2s6pNzBgzLjRVaq291SgWuW884MfpRoMcNBuCoKbZYmitt68vM1JEzRuDdCraNr6hSrWNyA3ziv4tjX5XbDu1k",
  "key16": "EeyJGX97h5xQzDbB42gooDC1fu3KqjGJBdiryCnebDqeLdYFSheZeLffEic9t3Ko2cqoqx36pYd6VdkEwrMzo2P",
  "key17": "5sVdnRpLeQ5SRHg69PwSPHLF1YfV3pvEuxY38YuD4AhEpS3KojJ1t4zW3stxnQVZ9NcAQWycvZM2gPya26s3QFJU",
  "key18": "5mZHhD4Z9Bg3gTYF4jd13aPVvFhbKMTY7yXfR5UBSH2HRMVkcZUPM5jKeAQrqaxyWHwo6dkEmVKKmbxQ5Y4Nxoqj",
  "key19": "nBCDpfMkBjP9yzzEb89aJWoH1X7b4dwgbCShuuRFUM6uS1DJPRq6hEXoG2Zy6vt6vTCq5W75oReLccBspQwJfUZ",
  "key20": "34qFLY1H9vtvuSL6q317phqJeE6CajEFoG3BEyGfresWk5Zebz1STErtBQ5Tg7RMRSmZENTwXP5mXk86Ds67iJfb",
  "key21": "5qJvPmvmHYG9veK9tTRKz6vwRnrzFnyhMJmxngfabFBM4nrfx9Dj4tSWWYd1x7rkRijzuAkDsy1FaJAQjQT3mUU5",
  "key22": "ba6QDNFmkePT6GRUWys33czkGBjMdRd6hcPZoEJ1vQ5v8s7hbrfKjip4wUaS7kRMRdiPjeo89j8G2xj6rWYj6Bi",
  "key23": "5StTk76XHx1vAYTxHX2prYrLjsYW9jVwsWP4ZwdajmpyanTL8MeG6k9sYaaqCAYJRX1WS1LuXaqgsqLjiWhoBmwa",
  "key24": "4phq7ArxMW4MEzSPPimnR819aHzYbk1UfeWRdeJD8qcwbBPuoV9dzFLgL8fA3JbscrkDgQb5WAJ9zNieXJJK7dzC",
  "key25": "2EBMArKNh1mP47VssfxJvLjvcqpHJGPBpjpwMmaSzsH6VG8iVep7dq1kymJPE6oWK3Dq78dQzrm97BdEtby5JBXg"
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
