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
    "JSiFV1EC5ESZ1k3Mhvh2bkupccGK66RoR9EcWiMp3DNW2t9QdqvfL84H7m3JbE5BPFjwjcxqB83GXZsHmjQVJ9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDCtsQxKGod37PeTgQvSw1tgLqjWERMg2AkuxfBbU8ZyZSVLbLaSyLj7wTmqKm37cGLNHc4Rc8FJaWypSKzsZsH",
  "key1": "4m82LQqBoi3HZqNaBh8tVsAneB9X4fMY5BWDRWu4Hb1bhj9tJ8cWjxAdMq1np3MF2dSfyET4bZLKAsbsayu49hsn",
  "key2": "5AXSp7syLZ6MGrDb5JaomNopoN5GQYF1DGueCE4nDbLVDo7v2G8oEyn2mFD6XLFtD7aJPpdTEFXg2fwrCYxtPovK",
  "key3": "2sty7EtaeB3aFHRtV4mbQ22jm9n6S2SZFXFRyxsgRLgvgWXZPVnGWcWbNVn1wPzkr5ZikfuqCmcXcr3XEcW13Qbm",
  "key4": "yCoAV1eE9XPKzKjiZPe4Gph4S1Wc1N3V2LYNAvPdRHUWozFGSMPdd5qAJVQgkpZT9CABxEU47rZncYwip7GPS9W",
  "key5": "1yHMjkDLgaQYwpDXREv37Xjf6X3QeZpEjTKYKdx2DmskVcJdR22659B4HMSodzxv3QrFm7AHPKWjPxhsvi4B7B",
  "key6": "27JhvDjafoq1VvdvFAooaeZhM4mV2pzCAvpPmuWdWsHmeapWKV3CZmBNv5UUnjVMytpCVNUrtyx2YrUYh3LSwGPb",
  "key7": "53nKC9gPX1VNbV6CUvVVVs7nz593PSsB5CwMFFk8R26BLfavcf97qKet5rAH65GiHk9rNdTr9TEciM58KguQ5mQ5",
  "key8": "4NuaqS55C7M6KnHK59By2XrJPQJ5jdJAXs1PjUAyGFrc7dx7kHsMwYgfVoBWVt12yS8wJvmge7s91KbRNVw9WgaW",
  "key9": "3cbdmay4ubYSKY7u7Lnh6KEa83PeXz61P2FJJZ5yTjrx6H217QsUTHXp3EJFzheQaw9NHJcpw9rtHiooMSPAEQEK",
  "key10": "Mdp4HpEgubFJpEjhfjUN4fLu7vaHLccxvvY3yy4vHJdUUhqHeJvJA2joZsCXGSXPAoQru4oeULAp2uuzxuqS2VX",
  "key11": "2uEJjuE8ZSFgcv78rXieBDzyW4ZBMRXBHmAjwNPNUmmRsT5UWCWM1hmjJvXdmTxfhDmJ5B9rSSLmVf3VRKrFWcAM",
  "key12": "3YKgERUGx2YSLuA4aCURdGu9b2dDE1EdP9knvMQw6JGZUrWY48ZBaR19Ai2fEYrUwbq8aXyYy2SqCZ4Zau1eucax",
  "key13": "pcuPxVCjxfHuw2nkQ7jTpYJDEaZeoEHa3bgS3QFqLZbcSaw1WpgCr2aNH4e1uXRP7oH2sgwVdNwC97S9i43mHmu",
  "key14": "5iLxsr8s778TkaqnnhEfqe8utdoS1UBY4hiq2ejq4PDF7wGipYcAHWRYoXAYp6ZBLfikKhDihq2kfZLP9nB5fSf",
  "key15": "VUVcPovmE6ykq8NdouqEVprZ66NV3vWHqd64LRcD2pxLLpXB9TpuurmP4fZbftfMdLL7EGBqmWMS7PtJm48dj96",
  "key16": "4pTauJ3ySEzVnAAFJjDRioP1S6g1RxFrufbBUCdWfyccrrU99VdenBzYmhHgPiQAZfKeA1krCxRE2YxqH2zLY8ju",
  "key17": "37N6yEdbQzDTCMGbQejbbhWSw92mDNdP7zq9fifcHyxCpiCMmZvveJ7oh9QoR2P7hKNaLsx5SmZppsn1tcPpnmHS",
  "key18": "4zEbSDu3LHHsibsfnnTk4zbv3BA9QAgKfscFCJ9g7fefF8ivKfVxprfbRXBnopjSrj2BhGFkD2KVSKNAgcPCZEPm",
  "key19": "2RncJG1yTajuJKCvvHFfHCXjZDJa9wMHngXqKDNnuzAYYfuhCsiLEqDaQJjCeTKRjZxafQGzi4Muby3qZisFRzbV",
  "key20": "5yaYNkpkYZsWtWv79Nn8PxaqcggmcYSBchmXWpXrSDyVokyWYEDogcsMYF5y1YZTh8QrwTbdZxavs7eFE8ouKBCS",
  "key21": "3kX2aiBNhAq1xxJmsV6L84aNqcXBov9rRkfpPQqQLWU87vCmC43XUJUY81awUAAJCP9XQu4EJDcDHfeDZvUDjcmo",
  "key22": "3tu4xyoFKPxqxWojMt5oFDh3HJKT1beXz1rTWnEiGv9bmWtp3H5jZdMkYXXrVRVBvRHrGe5XPdjofmTQS5chH4Qt",
  "key23": "66L1eJBQPwXtQVnHSEPoXJCB2MvTVxdg9YE8jvV7MGdVKDZfbtqii2BSvwMrqFPmuM2mZLXcEoFAzQYaqWy7dGrA",
  "key24": "vPdCTKzoCthmSSMDRqw1EFZKbYPreXacV2qd23kdKDMsrMNmw365FqZ9LKvz1437BQaprnURfjNG9jk6o3D9KGG",
  "key25": "3n2izJcnGGyKanFxHhytveFHVYao4rRa7muiXqcTE7N5XxxKJLzaRD63urQL53u4U2iXWWaKhessEXewpQ2WHBPK",
  "key26": "5pj7siFX3ANrENHzQNWQnnhaew8RapAHj8D71aF1z9sL6xb3R1sR6HGPAr9RCtmCGgQnw9k3ntAY6rZhbvua3ZoY",
  "key27": "38rKJsMXywvoQw9Fw7CVNb2Fr3sRogMivQDe3HPTAhSDgLSSFkSATPwkrQZVbz6yY9R9sCTzVgEf9kEzENNER7JJ"
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
