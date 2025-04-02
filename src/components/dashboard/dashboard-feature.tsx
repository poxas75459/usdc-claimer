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
    "3SkPrvFP5Bfa9QTSSsxS9c1FX7eeGvXyEr5kd3erKUMTrKPPiX8FxM9wD5JJNqa5NQ5jha2ZbY6P9oU9sRMscp3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ppih8FLSQkHkxcSALhEMfxe3TrY59U7S4WTDaw2YTN9VMJe4558j3zvtvFoWmSzfXo3FPNG12QLTmAwFB5xY2JF",
  "key1": "54pGko1H3v4VhCZ9nRKxFpBwDu2fWLsHQgKYhojcnaoTosYNaHHRmAkzAoo6n3K3op7j7jXroVZ5Bw6SbyYbbZdD",
  "key2": "5NHpaTzQKBgVBiYG8Gt92LYxwsp7djjZzcctygNgn1wsmg1GhGvAcLAD9zimZ97reAqBo6y69zc5q827yVd8BL67",
  "key3": "3XvK8PWPvP7zazoieecprG8GmAYz3b8DcMNUAMMAFKp5xuR24NykUjzGjrfXbxAi3n9BBg63hzUDnHarY5ZwTCe3",
  "key4": "4NmHdCpJBx2otxsNsmc21Tm9pVn9LgiNtEECnbmLDsePNwK7ehjjzL3K24EuZk7dswfhL2FxhQ7hvociaejcwAuh",
  "key5": "37xaEEb5UaSSnJcHQGkeVE3cPvWQvmctDNPaE8stNyM8RMUpLyczMNr6wYjegLu8pSZwc994KemdTs7EashFA4tH",
  "key6": "2YG5QVbx5F9erxTHX9qYRE6Twb5UN1R4K5CVBZHgcbSgogtENiFGtUEkVaTP45bKNaKM2HPPQcbnMJBBfccg1TXP",
  "key7": "3uY9NnEHbprGmR7wEbRNayF8yK1Gx7mNxu3bxRudEGJCHCiMT4cjCaNpMGJvDZikuaDV7jxqyMXF5YBeeUu7jqQD",
  "key8": "2vheeQTT2mz2fSFEb1E5J6qWy2ssTWRkQhSp96acHGRvZKUNTm8vBXYWKwHQrZQtQvntCpVHcTbSSPhjzd98WVyU",
  "key9": "5mTAfM7prbCTpCj3HLvtiCLK5RhWBTnbCZSmKxMMo1qBFSwvjHndN1tdZormaZCcPcTgGKFizgvdrhYRiPPjN9G7",
  "key10": "1fdpXBZfJbUgHL27bnjvnqXq2awqCbpnoysXNutYH2yceph8JrDVw1ErY5pMRQRT99HBSV81QBNkzNKSoMT4VtA",
  "key11": "2RSFCPwThQUmMibvkRS3DB5rBYZ54jXAXFfHbgKqwXRSnYvfK4HfWxSswQzqUebjriefbWmQsYDPWXHmyFY5Lndd",
  "key12": "4HGX74WEnFugCzugkNvfYyNrxd9ZJYhqamNHmzH9zFp24SmRR6yWxZ1nzMx8JvmcENagwTWJgdDWPxCGMe99rPZp",
  "key13": "3QVi9ek2DJMWfzbPuj23zF4LNahKx6pTgWU3C465MusAg12JyynkPEhi6g8ongszQRA4ovkXfiJ7beC39Sk5eRMo",
  "key14": "5XMqK9Qd83ds1dngXqPUKswwU3JmS9DtAF1MpYGPVJBupqGpWtPquGE8Bs2DEqKWuWkBLWq6gNvpnqVraiWqS9ww",
  "key15": "3u3gpFxm9m2Htzz4iEyGWJiCNuoGZWzPvrfrQSv6hEa4imtkzxmZZ1Spfa6JYk9dGxjmSFpJ1WXTthsD2zmqoDWy",
  "key16": "5TJV6YVNXE4xKkfV6NTNTBiUjWAuUMLK6A97n9muDWN1mvksBzaoVPP5nG9Tw6m5dADJVDkTotcMkRd8ximbq8Ej",
  "key17": "2BrHEVye9TpXfpNCQqLnfP9rwXphoQgSDTcy8T6QXwK6rbhwi148Unmvv1ShnLxgtpJrJAmwzatXrQSHfK9yQWso",
  "key18": "34B45z7Fhp8b7LrYSmWo2GVxpFVqShaXwzdd6N3bd7HLJQVKu9JBGuczZ3hKTKHyPYAeYRbmhuL1KEXqFURTnftX",
  "key19": "64FhEn48PJSnSqH7TkpWCrKXNWbqFbov65ygYXaqR85ZbeVV4n1Vet8rdx46ePFQqPt5ZHSRj87XQAeKFqDTnXAx",
  "key20": "2n7BWHrmM9Ab7DwANJtBkugSXLU9wgGmAqtdfLpCQZ1WuFAyH6ELvnYMNCYduGuVSFC9CqELgD7ryKj25BBL9RQ3",
  "key21": "2EiZeEcWBskQY9xvbAhrYmVEGFBfajC22UaBTKEyY5UrQCBWiKup6VGLE16BBv7isYbysCX4DKBK4UipF3YhvgfX",
  "key22": "3g1xJYzPoxGamCjzd3mvpRAogYxkmGuYABu2YUfkymagApb7g66LEgT6NnDRKt2SSWmgySQEbyJFbiFp5VroRBbp",
  "key23": "3rAZ7mPVvGqfBR6wAGWY2MjDSCN7qd4KPTqahEFSHnhCRsNvy5MAqxrDEZ47Xw9pBUsyawQeoXb2squtVvoG7YpE",
  "key24": "5fG6Y1vsPDsYbbbFDyBP3bd15BZbb6nkvDPFZnHGGdA66yWujPcNL7XAeZska7DSKrsRqUcathKkJdtNd9puYmhG",
  "key25": "3p9n1nj7e42RiZ4e2Rmo2hU1MJ8FA6DUku8GVVfQ2246PTMLcRNSmWPM2jov1bk4pw7MYzW2BFjt3jjuWfmWykdN",
  "key26": "3dCnZAkSncrbBWrqgcSfQHjna44Tr4QTV2YoLGCSVx4AQVMzyW484H84F4jueg68KGTKDN9x9Y9LwNfBtxFdZUEW",
  "key27": "2jrWqE773mrxqsMx39cxCSZnFNV2mWDjEkzDPViqVdw5WBmhRDgYjNLBedpUjp7ysFBW9EFfUMBniMhV2Aho1syE",
  "key28": "noV65c6s6KWby4jdWFgvQyzJ9s2NbKvKYbBiyh6AQGi2B6UcG8QqS67aKRs1CUiMSR3oxrnm88nBJa69D2errQS",
  "key29": "4YPEEVBG2yKQFJDFmRDV4NCS1YzjyNCB3NDLqmhoKKdkDtrQXQtPMGae2Xzf7wNo1QW3oJTX7gjnvrfBekWoSfCP"
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
