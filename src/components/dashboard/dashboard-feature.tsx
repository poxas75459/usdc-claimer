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
    "4eyTmN2HH9dkJeVmLSERN6cWj953d8pGD3Az2Drg8YKYp9FiLDUuHa7Jj9XfJxFZFg4Czhw31typB7GuFjPJaFak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxVEM8wZJ27YEUHRTMHQEK17Yxig6jjM4sTJFvDWN5aWhrUuz5BGwTfpi1A2t9dPy4uQcDrSPZbQtrfdMX6MHCF",
  "key1": "46NdCRLC6SRhgGcrg4VumgSU8b7SvPorbvwBrYMvU9zPJH8K8daLUSzPT78KiLNgU5xm1nCSkfTU33wGSa9qzkh5",
  "key2": "DX4tyVCJibuBJd1WMsADJXmkC4J154WCPJ7hLrxd4haVkT7PNAusKNxouVwA4q3wCVG4ggn4md4GimL7BpcJaDG",
  "key3": "47vRKAhyFo9PcmJib2aUp2uFCt84Lw6tZiySJjVf1e4WBwCkfPiP6jPyhLjmHqQ2S5ZYv2HVEW7vW9SNd3PVPK22",
  "key4": "5MpyJtvijL3mmc5qggHFcPDJmcLAE5ptZWxPdrbUMTeg9AfBzPSj1P5vrcMXyiyU8VFgrvvspz3LpsRP4F67FpRw",
  "key5": "2qQvEKQty7sBWftyxwec1R4QS4cFHEhdKPEZiodxFRuE6TAmX3ScKDoxtce94ribEkUq1bTMXmcstERrtjrDA71q",
  "key6": "4WjypvQ37ud4UcqBsnfgbnPLJnkSvtKhUr6zqr7H3hShZ85ykz1iEoGUjZjR5zpg5m4UFU7wB5nStG2qV8D3V22p",
  "key7": "51Y3o4cgfy4SMJuXfxefSPbKqSqpiKJxqBPbLV73SKahPedNvwxWozsDfn9erps5cczhw4DLzLnwXp9Knq77ZHMB",
  "key8": "3SKm1Y4Y8xHnqaPZCLD4WfCsARL6qr2kA3rmMZ76h14aNSWK2YT6ES9ijhvxG5hP9Bgqye7fCdQyRdgLQTpiiWkg",
  "key9": "39L3ranhoLa7VJ8gPJb9ixELJKBrS5FWFSdeTRchtYNDwEXm8meHpwVzzHRKEbKwuF91STkXPNSQo18uczJZZ9Dv",
  "key10": "4QxjtkAz4daZ9GUqDevq8wY3UVMshup5SBbXXa2SAYfz8DU9cKphcA35RWdtxFNzjcH913raEqt8tYZSDVb9uww7",
  "key11": "uWa29mrVqLX1ZnmGGE2ZuELjjnXCkdyjVncyWZ7nnZv9W469FA9SjnwuFWvDJKWRXonGyV12XUkyjwhAoHs9A4R",
  "key12": "4PohuVAapbwZtPRXHtCx1KZVU8mNAaz4vN2eoXYat9KteVgu55iX5HMpnpLrp3RGGug3rT96zHUFx9Qv5ocs8i6B",
  "key13": "5noTgTGd2nUsaJx4UQKgiVsvEasafzEoriJ2ddMECuofTmoy5Ay1rjgW1XTYseBxjvVGVTP3dyKb3AArboiMywTc",
  "key14": "mc9wUJ7LA3rUuxy6ywySN5UV144eoAUe4PoFMJ3iKHnqeSQ3hmeQNqGQFSidi7QR8arq9Pvae3vxTfG4mfwVjGj",
  "key15": "2o9vqT3vTw8oRSf38P9F9QYGN7bPQxjtQx8ZereCkPVx4uMAMMKmc3sstcPSSGgBuJhQgjaSyxvAkt4n8znCYGh6",
  "key16": "2kmAsZUWwTu4m8RemFrspCGAdsU1LScoT63iQR6bVAD8wxwmP797gBLazZJnWjDHpf39F52nNt8Mgz78DWosT8Ge",
  "key17": "3Pb48xYYvfud2WfZPTAh44gwULLZD3uBDfRmp69nw1wjmcroX1tAYHpHVTisaWk2EUkfp2qMN7PTskRVA61LYqKJ",
  "key18": "43dYeCaZRXuEckFjE7vR8HmK5SD8x3w6vErsjhWfGBNDwsqYGsUpd5YHwtYQvJZMVjKoS63ej3yL4dUeb8TUxLUN",
  "key19": "5FEaMWWqksKXgmNMovMBRN6gqavUqtNiDmCfvwLPhYnJZwdu3Kp9rveriWiKvZq1zMGraZGhaX7jRPvmoA9ub7V9",
  "key20": "44PKDuKvWupXtVDTQbbMJT9HkMCdNd6ms2VX5UJK8Mo3w2ncPkLMgovWMaDrCvetpi37wro2i2AKzjMpoU9W6e3m",
  "key21": "5fXUTK77dGTzNt7BVTwaBxq4TrRNx3uiiGL4R5B6vFNsevsZhiK8uTVUVi7byt2Ua6ta2wzoQZexPJkHtDkgzSjW",
  "key22": "7cTQy7SfwS3VXsFzke8akEq65xvMbFxmosGKknKQfaXyiC4kyHNATzi87a7PGNsV1VutwFkwjdkKJkX4uAgwEwm",
  "key23": "3SjMx5WoatvnrzFCiJCeZpTxA9P8URZSty3Ghr2MZwNbsaMAtqZ2aTT4Rf4gdUXQwdYheyQP4dHWwejjvbcNi8Wv",
  "key24": "2QrxMAPmgPkt8WEmwrUh3dAadh28sx1Dh3qNG8czSzDMHwQKwb4pF3oUDYoxW7pcvDQiaSPpByaG6U5AZ4QRRgQ7",
  "key25": "AyEcEeHm3EfYUMebHXSs8GhzZ4zQcfvHooQZLMyQ7DS3DyfEwXLk6CjXETT55o4PQjM45k9KJP3zt8wQiJcWHfe",
  "key26": "omDnmHerTuyTHttg3ZDZGRFRqQyRRGgCvvo1RgvaeDAQZcbWWVWZthbUAXbMTGqSqgJA56SByW3xRfF2yjesbuU",
  "key27": "5BfF4HWR8wT3yvXCgEYyg3T4UCFwWKGaDsHvmc4L61qsfPoH7JhKghRRF9q1ZtthcNu112RoFqqyb3TRvpmNn2yi",
  "key28": "2z7x5cw3fZFnUTJEaieQnVftiM3gdqwUhuK6mwhubaDap4WNw8rq6BPVTif4BtSkxrgytB1qxkhcBh2QweJwQjKn"
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
