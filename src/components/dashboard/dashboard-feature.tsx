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
    "5aKD4T9YpgJsq7N2G4foET98vtL6duay6U1hC3VTfCGjgXHTwZjjuoXfuLBjKmtH5qEqMMo382WfKs9CDSqVGtmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ceBnTXigUEchzT5qjsJiZmajWoKe9nXt6dHopY9wnqemx9fccotaQyzqzo1B1UPTDp29F1sdV2EMLNVTzeA6H9a",
  "key1": "353SSaCKkseE6EFwfvTwnpoJN3z4YRZeoBYEMnt9WKxowR4G978F9zNm2zoZmZvCSrRJNRLpAJy5gdxzPUwEhCeM",
  "key2": "2eb5QBP1QgrHVcX9rs8UXMNfGYccPrQTyy8btKbnXhzugCdkPsqvqZxm6qZcLfZBxCnNLQtbNx4qBfh2KPL1gg1D",
  "key3": "3aZRaL9zpcQKFY1NxQM4DUwEftA7cAMkQWoKHjzVJX2iun2MeY781JscEV5sdntbkqgCPei4KRCzAuaLMChRY6Ag",
  "key4": "2aofAT29FpfM1Er9AnAvXFYn34UtKq4U4xyEhpnZrmznb1QBmBoo6A86nAsjxpbRzVXMazwt2uxYHChZwdHXvLMx",
  "key5": "5UMzyQ8UFkCP2nkv9gmnz3BHqRyLRMQBWzDtQzBAnaP77zZAmLc8MkTp51ncdkLngEwNTiLoMTbYWJ6yNNx1kYDZ",
  "key6": "2ojNitE81a33oiP2ehDnN8NzY5epv8ZqEmKqYm6LCd3Y868cKCrnsHaRn6p6Xmq14V8Hw1Mz7yEfN8aFP2oYc7MT",
  "key7": "4WuWCWcCitRRtGAjSvEhPrkGQ7nuhNf7Qkj17xFBgRitEH2Fb6aoc5hGL1wDuh7iVbZR75ZHUHWTLnTkk7pPUXzq",
  "key8": "PpFgR7YaxfmuFmJw3fXbXgLroNERrnRXFFgb6KmHQj3Y6uy4FV1ga95NiQ8whVqqAU2N9FgHjMJzaaC5XkcCCAP",
  "key9": "3yTpLx1Nz1nbutCsGdiuSkkMFZg1q4NSx5tCoTCLoCu7EEHRmxm6CZ1smb3SpcFw8ZipgdHHL5PRbxcm2teWWAYw",
  "key10": "2pGh3PKBUYaEkZnFKUVB8Wjt1tr2SMJ2ykTrqTmVFRPHcdAPQXUSBnexH46TQN9RHj9xQCEQgGrfjiMzNn2sD2BK",
  "key11": "4ArzXSgJS6UL4TxZR1wZVMWLWeJgAzCQjcC8VNgKtzv4v9Yz1oAp5km5CCLmAMRLnkt6eJnHkKnEpzt89iMJ8r8n",
  "key12": "5svPsv7vJRf8PMNGJnhj4oTrH9RRbQvAa1Fo94LubNxk8bANgG7ipntcWRV3tLDL7yiPXVF7PKNZ5J3V69SvhA85",
  "key13": "26u7MdwUUUV9V3eJWitMKNn5s9FvdkPetkcw62xrzxWEBTGt9kiLcnd43kLGSx7ZpHTgAQJp2Spx5zfFfftTdug5",
  "key14": "3uvTsmaAZBXW2DzCUAGqnM9f1D1dcctxZbh5ExSggKsyAY8tqm7b6TeeYLrcYSMEp8HBASAn6My38bCWn1KrYXW7",
  "key15": "2Hv2xqF7eXPtWd1pqK8hU7VAPGhanrmtM7ZS1tNFYMz3Su1kRUpo41exYtEigbNXgENYukbBLR6qyPFGmPdi8Ebp",
  "key16": "boSPrUYU9Y8mQbPKe1vBBEuSjkjD4wyjGLBkHcbnFeenEVJVLspdgHKSnDi2Mx39oTxW2eYK8KnGhCkMQ5PB3yS",
  "key17": "4Nxx8xHBQ7gA4NoMKDbFnM2ff9i2sgACkc6SPizaVJeZdRxF7GnkqX87rgfczDUxtNLyiyC9i3pyu7wT6cwmBHNA",
  "key18": "56CRbUk6yhZfskCAtHhjufvpr5F2vA3kmFFDLhBo9wUkYb5g2i7HuwjTKtEgH1dUY3fPjfSXXMY4iVa8g5e84bSm",
  "key19": "29LvytMhbu4g3qSgG9mGwft22hGLGCjS7HFe4obKeh3HJd2SLGggNMHKcdkB1W3rLGegJRz1JpvfEbBW64JmkBaX",
  "key20": "32uEdyCDJvQViXTnGnwwGoRsvCW5JRcHWD9aYfQCdXEXJjQwzfaoMTZfxPj6G7CYUNbveLWvaLrMukgr27wbe41j",
  "key21": "4GWHr7SRhTgzpYLNCqeHnTanZrpesdGSj9CQHr9UUCpuYwNkPQJbtb34QeNEt4uGUtTYH5vFqGqjFWepxkpnEpBZ",
  "key22": "4R42Xx12QuJfCvoPrt9Cj4gxFRwFnNsyZXeuMaxuWJ2wWJF3odUtmKkoKv1hBLD6UA3RXiDaj3LES6dLKLvXomP6",
  "key23": "VcE7p6yiJhQeY1Kuat1QkqTMSVPjzVhZNZ7uM7kacqQms4uqQF42aNFidqnGNRkXMwAY1bHwZmEDNNutW1cm9nS",
  "key24": "HFdfMaURYf9rn1SP2ko5b9aCNeF9Q69XvVHwMQEf5ZUA8JEGFKui8o9uHqEmAXEhtEw6XCPkBnzmyaJwY3BVHq4"
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
