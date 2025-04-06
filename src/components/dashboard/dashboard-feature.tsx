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
    "5PLPvxt9CpQs1pKtZTeCTjuhZn1urPqog7n8axyYqsDdXqHKxRxnso34DqMTeFztkWYLjMqz2uwnCf4iycQrvBcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3gC8Due6N4bU11evHZpa1udNZRNMa31ms9et9vcP7mALb5HjXxyfGEyJ3hDKPLsCHWGCMn24hNdHU5mQe4BCwB",
  "key1": "2SADCh8egsoTae66yixEyn6QPFGmMq6NiBXVKwhWdiimrg5AcPk9b59H88cApgHeZMRoAv6wE7s7Yw811jDsumme",
  "key2": "5KEUtKUHBX5qTPqHBTkzwWyjfoGL5qGjXBnXyT9uCDYWUw26ZYSEutqxt946ZRhYrdxGvXmC1EEvfBXSbgqWemXo",
  "key3": "2Ua9suhyqLcfubvQjU4NjfLioi8m7AkB5iDaEtFjZjXgxaiEJtbjnbzoQAvEMzR5esEEaYeZ1QF3SVa44tcAsmhx",
  "key4": "4HqhNTin7S1gPYph2QMH4hXNPh9mq2T7XDsyiYep6BrX1km9QcWq1gBT65LkYEDutuNktC9ieWH39hiaNuWwGeTU",
  "key5": "7kijrDDRKgfyDrdWBEEnL1czzz1gkKjDXUYKn5m69bTb1LazPVKc8A6T72hpnvqejC9NJRo1uFeQ4znpJpyZAFZ",
  "key6": "1CQBEPigBQEcG64cX8hLRzqseSj3BC825YaCpyjooK9onwMSfPpZa6HrjsSWiKuK4fjVS5yPvho54vtMWqt8h57",
  "key7": "2E1NQFt8ts9Rk2nVTeis4tpGqjbVEgfMHRJyNLnNcBELgwCHqwp3DqCDh5wmXp4dSs9PJmmw4thy7bWkx7qzGgp4",
  "key8": "666yKFwtznsApm1AR3x54oyuSvyoxnaDxXUJ5HqVZQwMDoXsTPSAh59Wp8yjLFQssQshsy6f5MgaDvxxn7PBbtwW",
  "key9": "Pdj2tsic4cFbTGxnD4mpfweL6ygECW4VrmgqspG1dvXinztL4N4F3ZTaDHSZquV3dcwUD1VdsTyuvsN7SZF7wob",
  "key10": "27eCdDvVNT1NvUxCD8MwAdKMheXxZHYWqfB3XifPkK1KsmPydWPDYrusDXBwhWe664jFgec7v4BSvJ3LH3Cj7hFw",
  "key11": "3d9sQJNaDwYPs5ApDPk3Ldqq7tdX11r9oS2JUgpSB8pvqqU7P9WPM2wMicT5HTZVDwKUKcKKAomvW2QcDGpMgvXc",
  "key12": "24PqSFDguGegdnyC18ypXopQPo8fZPKwvm2R4Cmuttez2DtWXQv28rpTt3DTttrDQnnRPjzmq8j4z9SLUn6fXwxz",
  "key13": "3NfizE7kDxFHEbdBSjVuW1tHpXQvXUZEq26gE28FRUrP5pMnAEhkSiR8tFMQnichpPKhxMdqntDs5zwa5aT1YpME",
  "key14": "5mSD9wbz3D1o4cPysGfpc2hXWQQwaLjtWGB2b3PHQoBeSUeEt7tpFRVFUTsYHCsFX61wBfq1BtMfiXV5dVcgDuUk",
  "key15": "4eghBL7jNWsCBY9EZTCzQegX8ZPDG3uxsEbNBxegMgThkYJEdf3N4DRQJByQdqExrKkrsbBuoNHPegqZ54Hq5CAm",
  "key16": "3qjR2vUQEnTJtm6f59sGMtkodJszf629fFViWNgyt9VLHBeT9yAvmFm22BXdgRwMCFG7NDqZZRZnZH6scXXCtSfe",
  "key17": "5D9xATttsKaRxaCZxcYib9iCW7vCrmdeXnF9H2okciNCZdFcjgZCnNzcMXQ6ZTjUp5QEMxUPn4Zqqc3yWFYuSUyu",
  "key18": "5pyrbfErXndApCF5tPK728jjewgvHW275b5tRA5jHgS5VLEECDHZtecJGpD2HuFTJiA3noDXQ912KFCFWV5iDtew",
  "key19": "4EvyqhUCc4BSy5zzkNWzc2sVAn5sN8333dBDbjq1ezrXLUg7NxMfeX8CzMtrcg73HbvMM6f3qiEXwD7ucjhKnui4",
  "key20": "5BLRm786pJ8ncxohsZHGLyeS5GnSd3xLs3idAci1LJ6HDqTcSoAjVEm3PoUXujAC1f1Bw7JVAJcxREKeoU1CZYf2",
  "key21": "2s5ADRbHGtxn4eqeHHRXjvDswK71UUFJYcwS3T4WoaDoSGQcLRro56AiFGaW1NrymaGi4qdxmVR6z5fCxQvAZogm",
  "key22": "4f61eAFXAoCFtuXoVvfTnbW3dHHfQPT4B8kqaW43qMaTSqRYDDUov1fumxpxpSKWs4ALkzWCKYSHGxRnenVwZasz",
  "key23": "4Ummo88orbhW4Bc7Yr7DCb6hzm3ZamohrieWXHe8qyms2jSAv4GEYPUnUmKYcCew36QF1VYMrtRGNF5h7n4KDb7z",
  "key24": "dhK1ANCFj6Vegdn3qzugejkVv82W62w4JjKtckaBECcrfPKL9G3QP7yZfoEU4zU86igVnA6bsrJT9d3x1kZrNiu",
  "key25": "61yhwp4Z8Rve8NV32GdZ7C6qcamQHXrPen2fUg7DacB995ij4jNqAzR3B7g4B57WhN6caLQqGvgeCR5GKmTXBwYP",
  "key26": "3M3WWTsuVbiB3RaJE4rXJ7Y4v2wLnFt1RVFzDttzJoCzYbPCQEutRie9dwZuemoA1SKAgTVWz4bpuKexvLnoPmmW",
  "key27": "3A5m3BMD2S2DxwS1HGoD9cjoAugamA89QtYyKxAd6BPDeFMcthW1t64sDvR8FEeRBpVDAvkTcLoprxWM3XfFcbPL"
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
