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
    "49aMzUPtkFeofGDpdcvJrw1zvXTeebKxy5ZdhVbjdUDWMTW2P5PuwwrWmSyEXoiMGYfGD7wW5p6JFnxVc8vCFoiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LXL6yccU9BHFh2XfBFaFrwaaarT9vGRBUaMG4pcoPB6rXuYiijKobag5ZfVr3CiDDxoc6y8SLq1b6GzT5x1gZau",
  "key1": "58M1R5AZhBoSE5pCGa46TZcRxsZM66rA6EvDHZqwNzwbaQoBwGMdWLdfSoTmHEsb5hy38JrVWe8jX6S8q4sWVTrH",
  "key2": "2xoJ96RpCdewyRGqRAwY4hYmx3GCVrh86eeBB95vZopFzPKCsUGF8nowYbuMaDrjGS32uqYxYzM2rGtdRBhH1wRq",
  "key3": "564ENGNvvdBYf8YvCPjW7RiYMeQxkPFjJVpLN2AAJpHaRqsUPRwKbhEmhQtrkrqtvQRhc2fxgY9MaD82urCdXwqa",
  "key4": "3LVRaSwntnU5Tbt8Ua9d7nE9dG7L9SPWnB9HF5ewDMmsh8VmTKGz4twoEYVKZEZd2sBmZ2nrNo8ejzUAMXRNRg5C",
  "key5": "4PLdevPkYALXTYxc72QtLvfkaQAoNDw8pP7Lk1krjAEMCMectF7mFmPVFheH35xCTkRnj3PGrFt9EpBNXWs6VNZa",
  "key6": "2YAPUjEP3wz4A73VhBn6rVCHQTGe9qQbKCmzqTq8QtQtqExqdrJRHWsaFsijPEzuT3x6BQzfeSNnB6KE2fRvSr9k",
  "key7": "o9cWQoK9H77oo3VufxDoaMV3FvEvfLg1Vx5pWz6CHGptPq5etJUz9Dbwjis7rKtzVwduMFV4GeRJ8SUpkAp7nk5",
  "key8": "3fqUqVDrjDJSPd7BMYESkpTvcG8C6fam6FiwDk5vcPxzyPQDNcWXoAXiwYFA5QVw9W8gSecFf2hERP7WBB6CTozM",
  "key9": "3eSa7Euyk3GPpNsWeSHuopHUFsBAVpbP2JhzxJ9WNt9EWLcZN66yEcwcPXRZJmGd3dPbvjeXmvpJ82PeFHxLvt5M",
  "key10": "28QLyh1AsxrYkdYGqwLhr2AE8heGwm8omdnpL3fRa4Hw7QL6QHTPBePJSoeFDrPmQwNis6d6kLmuCLZj2tQ1bQRL",
  "key11": "2f9x2JnL8ZDTumxve7zGCW94W1KQzyXBbbEDQHGX872xxkL7hgz54ZmQYnzDu4BnMRGfUuxr87GTv8pPiqVFX948",
  "key12": "49MCjmDr8AZsycNHYLfcG3YUGDm97pGfA7BxURzcKA2kbMvdpufVBxqs7j2JWw5hYNwb72ZxKq8rVN84ZbBQ1JCX",
  "key13": "VmLHXteJs9fXAze7E8BgkqUqZGVGo6kjm6CLKPneZfhBUg3TWNNHjb3yxnbowzCPzGkunDq9aVg1zJAtrAqhc3C",
  "key14": "5NQDAeaJrbsZuQQqgPrhNJ99aBo3TF1kHGSSA5tBbNGwGY6fCj9QLLBPj5yLqCXNsYtVBy8a3LQSSn7n3LHsL5u9",
  "key15": "8HemjQvpbx9JrB9sZf3GVh7k5LVbXR5KrShdSq75KGwCLJGiSbRC9xfCNt9K6VpDZPxmUrEjaALXqcQ51mEuMHF",
  "key16": "34gped4g4XsoXBpgsdUkBbRAipk58bcVjtET7v6mQjUqscwPJksbMLb5A2EN8ygrBFarv8pPUMJAgXW2zu5s5ABQ",
  "key17": "3aohaMzfxUnTmmJasgovs1LzGgufMB2GxmQU26XbtFwTgQ3tWVsMDtqc7hBBEReDY39fxpyEd1HRT5jgQQasD3xb",
  "key18": "4931FuPEyF6uUAmbk5wvDXku3DCwq3SMFjKfKWpKoPmxF381uCjfhoUFHbS1cpvPwDzboqPV2LrV8kp79Qmyqkbp",
  "key19": "3b2U6Ceohwrh3HBSFo3kyw8UeTn1unmzof3c33LbiJ3U3xVDb9Jag3eFutR28uarmooehz89gHFoDeQDF2kcVTkP",
  "key20": "3QDXCB1bVCjKesFLaB5afvBHktCT2ZAQEvSkiaCXhpK3tsdiVGE8xM9U5XVHHk3JYhoF7QCCLnbERxJgLE9s4ZmF",
  "key21": "do75xEyX53cHmvUAnLHdSGjD7UX2wUfhSiosRFMddbr7uuNz52dRL4Da57B5YFDvDHgTYdF6ynatnBMynFo7wWW",
  "key22": "4Z16k7g7LJngtCrQMdFeQMwVX1D8ouymvRgHYDZra6TCfWVxD3euboBdN4QA3ZzQ8LZNPgJRHQn31kzU9PMhTXBf",
  "key23": "23CxaZ2LzkDfSTbZ7ox6Nj4UwJk68bS8Fm9pxtiQU2F6Dgv6HHUfVxen7Pjepj9MD6z16vT6kyBDwnjde3vn9m4G",
  "key24": "VzyAbt1AAffBei3X27Zb8qajfysomWsriTMnsrxmBDqT5RrGbDJnSFWnu9dWh9YHjtQixvbtBJjsjBJ994cwkn3",
  "key25": "2gQ7A7Hzsny177gomjan4ZfF2oQ9pAkJoVkNAePGugei9ifZ1KqM9yNwCPned1885RsiuhEUc7vCLBBXW7JHdDdF",
  "key26": "5cYx3u7Bkd5uyFrA8Fsf2MfXtFW5wLtANQi2wPjeYCzsBDuUbnu4SJsckZXVz5qQb2hmUr5xSPyBwmsF9UU9pP88",
  "key27": "4pRM2GCNZzthSBWM6DAseK4w5QGR7QhbPGRotVWCjvDD8B9ek1UGyfd6a5MZeVafDPK8H1winAak4tV5xFFEGMoh",
  "key28": "3nnLXjn2x877NRww1epFkKgca4rCujHDYSHFcWFnhSex3yDvamhJmyCRGd1cMq29LJQLMiEC4T1wyyQND9Gpw6xH",
  "key29": "3bByerPyrY15rWDJS799S6kyUKMPwkZkspkC1XyGiJdZgQWGhNy1ndCroRaHr2AjGkkiHGw2zA5jpoVwQ9d1P2TB",
  "key30": "2ZEvBMWYzdqrNHtk3Udmc1HEmvE6i3hU512yZ1Dh6ty2k2rYbZAjqew5LKWSHixNGVZ7SkyYtgMxswmAexDvCJt9",
  "key31": "27B9sZ4n9xoWz7ZJcCa3noi8889VKnz9dKfkEVYPPcH3VBJz58qLvXhAt2iBaPqgvvUHH7LdZyodyHVwzQ991Ta2",
  "key32": "4YR6gTHpC6pdWPByukB1aLzkjPmvajDvQscFCCSgjTRJc3Rem4dzdwnfPPtxZ4oYmgVMwMR8C5wwTVgmQ2sJ55gg",
  "key33": "2eepNS6jRKEb27RaVxehzbJkLXz7tdkb3qWGP7iG58s8tFNQnNuU3i3fh2RSWt5TA5isz14HfmTFxpquGs7K1kw1",
  "key34": "wQZJsqLXoUo4jCHJR266XAnGzSAKfexBNNfZepT6paoeTd3hXgHkwdEbLkbnU5oU7rArikmFL2nr2fghAuwjB4d",
  "key35": "3Hiqa6kcPZVwaHKXswVuTAtanQvdhcAgsKJvoghSmuQ2sbFaMtzt3MG5cWp4vm4vVr6gNRAPjEYVc7zAPNTgqu1N",
  "key36": "4o6kqFrHAengXK1ctCgvWdjvvw15Qa4CLSBfpn6KNRPHnt2yv7WZsoSySEF7RrP6hraMMiuUGJwhdZqSC27ie4mV",
  "key37": "8M3wTTrnEsMkxu2sp9EAJTGTA2AB4oWgstpcKcyP1FJiDsowvQDTUoeNA4sHDRKzawtqH4kNxk8UCUvwesi5L7d",
  "key38": "3shny1WqdoQMRuHWL3JZnTkkhaGtM928LKG7xsH9ShASrQSmakAjrqXGdSFTjn7H1mxqhADsif3j3HGbLKp3Epqi",
  "key39": "9Vcue8cDTk7VGBrhy5kDAoVxsu4XN8rLayq2JVyvxDSiB7w9Co9ZhSVsP6vRDMEh5BNBCig7RZCGQWP9kacZCgS",
  "key40": "5pNr82PdGspJQ4T348sCfotzDb2ckNQVNEHXFiTAeCwTQETeqBGSbdNUPAZTQes6EXRA1cT9LtJev5kpLzFZ3CrD",
  "key41": "2RH15z8WapCANXE3LajAA11f3uLYaJmQBYP5RQ6a98S3KbkC9oUXSBJfpJHG8vYZFPrLt1j51Uws2tqthktS9gWZ",
  "key42": "5XoUMjjmvdGVE8DFVVCVVfGmAQK5VCRzSeAAgfb2hmmm2tFzENKA1tpPhyV6ytB6RVuLhxJJNXKAdrdgthpDt1rq",
  "key43": "3WicC5Kh1skqQTT1AMr4LcNXaco63oxAWBm3gTuZE1ZJRyHEfz1uqUYGVq9jdkXpbyqgDX34KquFDxsUVzbPpccq",
  "key44": "5aPpEfCwb74xo4KA8RZH6GkXLT85xFms6b8yPFn21t7RxUJrrpYXVyNK6tHRntQkUMFZriGTsrh7jFdrGMUde3hw",
  "key45": "MNRnawfaU1uCN4YXiQ2UoyDwJEUK7dbpjhgKAKrMEP1VFJvUJcxRu6Bs3i11FkBAATMSr88hWPb3NTSo2xEz7ur"
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
