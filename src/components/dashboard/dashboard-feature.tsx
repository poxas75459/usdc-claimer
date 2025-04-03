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
    "5b23BZ7VsQTE9SFcYvUfyY4tx9kLaDZi9xa6vr67f8poyh6QL1YfNPucVYZwQGqByKRvfaZJVhsH7RYREGHK7kqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2ov41GK7sHpzEEZ2GbQUTKYe9Yi7Rz9E32vTw1mnL2uXAk48iNkamFRZP3KsDffKH6KtRUCTEEFTnmdnd4bA8D",
  "key1": "4XdGLU5ETYCgtevTf5qszF9JJGqAjVgog6DURVSKyBx7pD4oWgbvRuq5w2t73NigtCe1F4pkBYtW9V7fgq3mzy4P",
  "key2": "5HP9GqnrjVECY3obm8uC5U7kPUhZmTxqMzRwHS7KhTzyozZG1yJGTFrdJNHFV9ZYnQDSqBbmvUttgqeZY7v1PpDt",
  "key3": "5x3QLKFBhdhf8fB7vQdoFzaVmtV8sZZ3Lbnk3RZV9stcKmiiSZwc6PbkuUD4NTJkyUirVfqQCEM76ZCB2JZ8RSNi",
  "key4": "3aQvpQQjtXCzJhjXT7VMEav3jCTPQmHLLSdUYzCRESs8R5bN5zyyjawX9gX4mkvMUhyoWFvtsckmudrfWBEYjdn5",
  "key5": "4y72ziLa6Vdb7crCHa3pVmruP2w1AaW14GZu2RWjVYZnfXBTtXRhfJYY1VdkbJwGJbrobqyguBoSc8JrSkxvxyXQ",
  "key6": "3UKkjGXQuyyYN1qX2ZtNWp3mKsNRm2e2pUeXkNLZWHxv8DKoNPMBur23XLMctGtJM7mqAHVj8hBSGUfNhWexejEA",
  "key7": "LP9VMLuYKxzkM8GoAb5Tm6dDRG1jKi4tDJhs8NXFpT4HRTXx2rM5UsVuMp2GW3tXedNUTYTiWZoStF9ewDVtqZP",
  "key8": "aAtsE24mQDorpfCC8FedQuNbhAzLPfDPj95x1YjRsXjg34WUwcpvXcLDKYkpKmHfnJYw2wcBXzXaoKb7CDbhWAC",
  "key9": "3xq1VDiU6szdDjNsGp26UrbsjB7PJr6KYBTsLq9HrfxPHh8RNKnweZpRDxVunkBNAePEtspUP6KsaiTaTZnt4Md4",
  "key10": "5JQnjShEyoJp8pjJWrwPzFjfghrzNNR9KzMeWqVPAHKeTpsQhS5P4dbBjwpe24hUCeYjPqCMYCHkfZEFfH4V9deg",
  "key11": "2mKCThhvDB5fnrcQvC4b1iEbcjCAr2dPFEmSLFo7xC9fFj5U6i6MRWfvMxy2KuxWaPsMSFqdJcXbheV91n4bnDbn",
  "key12": "geUDbKEpg8tY8vA41cun5NgxfVNcZUSZrQsgWHj6qfq2XmsFmDaJK5TPLbiBPwYBMj9X3PEfAqpr3a64qxVhxJu",
  "key13": "31ReVRoarvBbksBb7qBLtJqg7qXXdkWguxHXthsJDTa7bWvmSE7aFMfyN2erJ82FvNPzPSD5a49yKHdiwooHf2ng",
  "key14": "4LX331neTHtPLxfsFwDrbyUFSvfoq41DJrxWmnEdUAdALqTBbRHF4zJapKoVM237cSbGrRJS5iwamskM8mWRxZKJ",
  "key15": "475q1SSL4pm7ue8FpcsQeG9P7ZWUUPGauxwK2Vt7wGMFSrjeXvRqnvecBpKMjzyav6tTkgZQ71fBbh6ysFUc8w3k",
  "key16": "5ZCyAn96BoDnvLkkRh7pVhnYVA1w6SpaLQRZLdRFKVxGMyhCii4B5Wp1xY7huCXqDfHeFvErWApnT5iFR48QDcEB",
  "key17": "9iKZbAhXKhtE3uxTM2acpbxmSnqFBhx2voyuJcRo1c6q9pW82z5SSrbkkN9MDPqbZxAgx3GXhL4oXQohQZEcgm9",
  "key18": "FvRryAvPRWjBtF8gqncbwzZ5JfbGwQZH88pAJzPj9wSn9VWThHWfoBkR8t8tSnx48gFysEvgGsR2LCVsbVVu4dR",
  "key19": "5ixutnF2obWYKPtagKUfDmmF9nDruGpM6xBby6dFdrZp3PHQy9UQEjoHMMT8kUCzzvbRqBreHAH82un2geLGK55V",
  "key20": "65HkYK9AvrkkqsvDbHsf5HnqoqFyMAw2TjadEdQJwHBRtiwVpFZgscoTm4PCwGEM2XBkPs6wUmo5XmQq31JmkDkj",
  "key21": "39p5tfUSRdd2k5qgYNXFqeDN6MtYsGqSpzoQWidu4LACb5Sce7wXfSbPkdTfeyDVSYfBnwBPadYxqpuFkMRy7fzM",
  "key22": "TBCcNFaQuUkqVworRRcaJspPVjhR73pf6R8VoqMpA1A3gZxM1xvMhtXuTghqgtfqf2R5vNjrARo63MPSKHirxPD",
  "key23": "3ic1DXUTjAMVxWL8hTYgQ3zaBxtB9wGmZC2zp2cuxtRrHipdv4VDNN1o5UtBv8atj2EDKuncXgf1RRKp7pAxmTav",
  "key24": "3gRHdx7mxDchDPdVmX7CMXH7JQ4GgDpnz7CY6S7rdGw8m4JgBFKSpz7GZXdwtvAGeCT2vfM3r9SbaToFDKE7muUD",
  "key25": "3oG3WAKs3bYbS759nxgkpPdAz33pzQt9g4nHxBKsqtLdVyhk4KRfh9VLau3jRst29NxhJVxRmn5mAwc1Eoh944A",
  "key26": "5hGUjCksYxqnuVMSMTVvQpfqxEkgyseA7bAcCbVvX52TSJWaSwWd7iAdp6pktjbaPdtybVSFFRjgREGr1Rfg2Nh8",
  "key27": "3wtSp6QReHcFG3thZDCRVXKN2BTx2Vy9UrQEEzaVTZKanpqcthvi5Bbk3YQ9R7y5GaJzt7cb7mUesAnzp5NjYHnV",
  "key28": "48sYy9c33uLJHyjeLjhWWJvyW3Q1LpXMipLnc2Um1LLXsZTir1PLbjzBUPd8HP2o1mpQtCQsrAjMJ4VK9k1fHvdP",
  "key29": "4WBtiiCbNoaWVy1W7Dmqe2xt5QUxXYduyuLS3WaUn1fbar5fpWiaVvH51Qy8Bz3QcLAMtnjt8cUtCraSmZwtGu6Z",
  "key30": "45RxbTSUejjykSsid41LTXkgJ57XDYW4JKurqsnAq5gTYAMMp8UutUDC7C3MA2pppeUX3CBGbAyDTj8rVBP6Mpua",
  "key31": "5ZhEJ3M7erL6yz1tVRgsEoA8y33RjPZ8WNHgo7kPgbtrdZFYkvCo1RxVQtBgd6NgeQh1ZmgbW1orpiEBnqxRdYua",
  "key32": "3T4Fv5ACU7SwATPMzjtGkhxcjn9of7mqh4C3SJG3RScJ273kMvDacfKRENHGyhfXBxT12Bsmt1FwjKmpVS1qWbed",
  "key33": "5WB13K8Ktrrg44GXC7yXffjegFrbgf4zcr5mcqZWDhEN8ZSQUqCEDSXWWWdVza3QiBvwKxXUX3EjeYL9zLzcQiR8",
  "key34": "21Hrqf6qAFskss2Yyh39vZzXe7MzKTubSn4jD5gWvmgtfFpCeV3F17AJFApkDEec66AEvRSP4dAG8fu5kR3LBZvr",
  "key35": "4xcdh4mhZzX2GioHwSftRh4RsVYwpPJSW8t78sunk7HsugJbASzFe5BJoALDknu7T1bkBnLdP56fghQZ9dGaeerv",
  "key36": "4ykUZQ2o2mcbqhuXpuD8LRTpVrzb4NqDLB3h7hN7dGzxzJhvXVfaaskaCHjfWVTddzjNK3sJErKEuSEtMc4sMdJr"
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
