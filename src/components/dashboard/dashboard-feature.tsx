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
    "4yrqdciW8J4AdnzpuBkc12nbyfZa81ChAdk4RZvY1okFT5mfQyaNYuwdyXB3qeqWkni2qGz22yXbCzyDHLH4LDTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qu65w3HJGKgDjaScNUcmXnxk4nos9m6AKAPZvVkh594JvYFqhx11xVMWQ7oLBGoX1zmN4bUeLLg4KB2k84QCoeW",
  "key1": "3aT29N673bzX36B7fUZ4ktzi3xya2ZfLxQrQdBgLL83RnsBM5jeACho4twp1yyWw4CQvykZSUY5e39MUNPrPpgYg",
  "key2": "5i4ehnCYypEAwJ6ZMWywnPCPNxCFV8XqbmizEXdLbRLnPPHunfXtAm3MyDuGAJxfAK6FeiGgzg3jnjhkPko2Xhvr",
  "key3": "2Ef6kcC88xgJBVnQaNC5ktrsbcLJc5znh3WeQMP7xE5QQSN3FwK9CjZ58a9DhbBmqYDo2VgpbpjKLp5rFYQFnroq",
  "key4": "4Udg8EjeaRaNi3CaWCi2D3LoNav5K4ynkLRMkZLevGb8Yo4uUkLRMPEPCAirGv6dRwiyQ1Gud99MY7x5u5zB8HmB",
  "key5": "5ndV3N1snde3zn8mNHb6D9Vesbmas51ToWRUSTsQWzNNfWJ5YmcsEZE9ncSM7vdpAR71ieBjFJ2ByXtcxedHADt4",
  "key6": "3CWRFqSnKe64eavhtfmx1uyemzToUWFyMDWZnjDEKt1atGde91Tuut6ny4MsvmCq1GKMihW6yEwXPrtYG7sE3dLA",
  "key7": "EdCFT6J1F5jAovfKQJLr8on1D8TV7AE6DDq4ayRz3fJD6sHcYG3mSBLAKf9rELmyb39bqCTx1Ept716uoRsF9Lw",
  "key8": "4NR3uQGsDVmq8bTUVzygfivKBmntkxD196KmpzNG4YrzL8rTK5Kw9TqmRZhCt2Ea6ZHFBU2ZAHjrTp4LTw8pDJHY",
  "key9": "25EkW7Uwg498MCEFpKzemHfErLgtR9VBqpdMpGghdgFXZdb1mBjD8TJmki7CreSVKtRJfigs5Y5Gmo8DS2raeTED",
  "key10": "2LB3L7wX2ocfJoidwyZEj62repK4PRboXN4PSMk2GF76k6uGXGwo8TG311B9cqg5wozsArq9qPuRjW5YBLCKhAeo",
  "key11": "2Y9QHTp3JkgFymc3e4U1oaqNaEEraG2TfWDPHaMrRAyjKeAs8BUCB5Y6vGcGmEE5AT85RHkGY1KGcNqNEyxG2vgK",
  "key12": "3PSAGXeviuqip57aG5vduPXxCSQGCHFmddEUN2sW6e3LybfqsEvkeUjRRSwSy45iT571cdp94A9ArEkGXCNQTEgh",
  "key13": "4YGLoFbQ2kNtozGwiyqtMXMeJtkaJpGTPAYbXZBKhi5Xc6siy5vTZT9rxXzDCfmQicUuqyiMP6hvG4P1NQxHNbNX",
  "key14": "4oBfTksqQrxVKkEzu5CKRjCWjMLEbMxQavK3rdCfZPJpvHFphPUiZrbKbkEiJLCJejt3mf8wVk8pdykqztwtmRe",
  "key15": "2ocfrHSzR8XWaaW1fSK3NWDwo5Ti7df56tRbe9ajD7bq7d8F7fSkCdeWyhDy9uNoF4kELxfwoJYzLEXWAqiE7h7i",
  "key16": "258bwz2LGVDPPphBU2NrE6XSoJRe5n1dFpgi7XCxjSGUJH1kynkrkKgcrCKwCGQ3QMAkciNAR9mcDg5DKnDYwhAX",
  "key17": "3hLTcaitYRaU6x43TYp2spa8FfYzZuaap1MPioLX5Pp6ukNVsFksFe63DyecLqvXkff4BZxFT2dBiPwRLeeNNdvP",
  "key18": "2GyzFj78g5kXM3Wvt3KUWz3LqT9VRqEkLsnqqgSo3oTfY399DbjnSA48Mdp8HJgb6GBhVZAvu2CRGdQMP9hKsZNH",
  "key19": "3r5Lhh7jWfkayxAqyxt7vDTf1xu6r6Yyd6afjrZn3WDMEGEQnrpZncHNQNFHUaNq5kY5anvgoepSaQGkqHNegPu1",
  "key20": "5QbawkQ3jpJr22cQe86KKSja5yDCUs6zHBwNUtkuxiJW7t84AhH5MRPANUB35EXZi5jgDNBE39tbsMu8xtEKN4Mh",
  "key21": "Zd2iJSCw5W2iqgWNfyDvkg2AyyVVSpfCeHuDvYMHN7kkW1WVdxBwt1Ya3nCodwNrUGz8FBHyrfHWoWZ1S5SzV9f",
  "key22": "3i9Wt4Tv8eYq8qzVRHi5RMaLcRZYxjwm42gKwG4UEwHHx1pFQ4BMsrdsKErAgFyb3vCND8u1eZ1rLLixq731UGcd",
  "key23": "4JEQAmdqbQRTro7D9rt6SNggj3JwTUTmYF8Ccn2d11REKfzxc8mmrQPD42nknf4xeRgVRpRYKLVCctr9h3y1B8e9",
  "key24": "4zegK7kWG4makEsaoxS7Zn21gMXtFUW2JRH6uCW71PfBCg5KPoqwaUNjDMkJjbPqhnQWiSnFjDbUNs3pzMNXxYyw",
  "key25": "xAMwgerWTMmHorbDZRQRRP91jAFcWBZ3YJBeydUciqiFxdQwv4mXtLiCanFni9QVEyZZu1VUm7BL5rnkSrLmnSc",
  "key26": "2MgNKJw5ikV121dXgFc8inHvLq49tqFQSPUsTfzEjuJNi5pm55EKZFsw3roKFHjqryYXj6LUfBNsQqiYGqViw4AG",
  "key27": "2BtrhXZD6yqhNtxSjPMkC2NiYtRNehybDCxtaiwrfpGDnwaBcZQusqJhf35bXpkYd2GpPQuDcyVJH6gJhnUU7bpL",
  "key28": "4uVEbK2M1nUoHeZGQj5sb4oq2Vpixt4De3C5oTwgdf6qB7zM6qf4vqVVx75W7Qf9Wucqe5bKpJQbBxgSHvKXpNLo",
  "key29": "2F8kwKsU5YsPZoDC4MTRV5eAxeH9qCqp9wcrNrqrivbLsEny1UG6euCBSSESLzS4F8FJL1KS7RzNQ4A8JuA8aw42",
  "key30": "tSzUVZx3pPcoiyj1izER3NZN9EnrBYmHjeXhWMdJ3yM12JwPWSWMbJRVBcuBqAGJ5vNMABBLDG2Zw3r5r5rKqi5",
  "key31": "4Nqm4n3x888EFTrekAvZaAwPDWA4AxTJJrqUjYhZKFWigDuJbB2m9U7gSQELW2n8dRioMkb94q3eWMETaZNNZWU3",
  "key32": "5fHdrFpo8WJ4xT8XnwGkjN3p2J38BTiGms9wooCjVFSv5Wosp4sK4TuuF5ju7kGYbA4rmYrjehzEDxNgqa698Dfu",
  "key33": "5pGpoyJ6Ang9ZXefwAuSu1Vnn7tQ598D3QSqZHxPBPgyG3cveqvuKJiHa6f3xiFkTkhx8j7rAkS9BQrknGrurFF3",
  "key34": "5QVHhQDGdhDYcMQyTEcsVmBXnxzzQf3k9Fmtz7VPvjj9L1HgS8PgjfPUP7jfAPsaSV1tJY29L8tVFom9bQN78zXU",
  "key35": "5zXUexqXweZNnAs2WLzD18LTc1T3Dd86ao83ZfDkDAN1MuQ4W7er3Dn1mpyLQd9yHZookccyoQhQ4Q4Lxuy3vPQb",
  "key36": "65cf91UGqV7LdPgjrHroNkbXZreDkFtkEU6oXeAtKm7PJ66udU74idrsS3ziEPoMRfwqWqcZrvmZybmid8UsmucE",
  "key37": "2KFxPtrZgNxLmXFfagN3NVczjtei3KWBnV9HURQY5yRTGA1F7sMMY37VY5yEH6eMrwmeD8zeANMBbXzem4EtzWfa",
  "key38": "3Sqw8h4g3aTKUmP8gFybWKfY3jgF1tSrFdtBGd4ByKgduHudxsLoPyDMwfLZ6juDBcGBFpYZ78yTRN7bdiL2842y",
  "key39": "UEaQLJTaxX58MYUqj1bwpUVo3H6h5HRBjAWn5c1BQT2uTtywzyzCe3WhRynxf3Z3dtBUGbGV68oTs5xWbHmjEzG",
  "key40": "2XezSDQ6c913zP9gbZofFSv1PiPzWVkWBVnjUtfCHLQiT5o7Raz4LWcqUqyKsmiPACpHqAVVthEGTUxPg2R1qw74"
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
