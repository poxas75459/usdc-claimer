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
    "3FtTY5afUp8M7Sza88tPaXt7E5g9fvw9npaGjxCNwcvqmvwxmhpAjqt51zUD39c54K3M8JL16pYCE9bBr6VtJvge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnMs587URR966UgDy2RAaatqxA47DMMVR8UvaVYR5Xu1Bm7N4pYwWMC2a2voFqAFd3tKjWHPymL1nhd2KzPqguY",
  "key1": "s7hefvQCq35725UcBkkKWeDZKP6w1tHbRkSyWjHxqCH4BCX72yA1EGd4h5EmARjJsuXaQeCzM4KQVbNEpQcU2Xi",
  "key2": "5W1ogvRXi7gVQdy2KbiV5LmWeQBxEVzGQyRpid9Nck6VAgdDA1kPE9kinbD3z4thKP7hhdypZLazoBNT6cV8EasG",
  "key3": "2XfKWha2VwHvr7znKjg1pmK7txQDJEzDA94qTq51u6i6QiHYE2eDmP7u4P7poHTmoFxTKD9svqWoQvMDpVCWxm5T",
  "key4": "fQNzZsCA9GmKtEu1NL514uUMvs8AVFmcjtZmfPvJxAL6ksvqVzT1qGf1oMHCcGZyrcC2KSotHV5nRbbDYXsHPp7",
  "key5": "2HxqdTsPTCCf8GZZnzGpBGTmVrkAV1bb2c1wQWcKvhK6PggtZ8vxpJKoda6tDjEQKf7B8MCqzaf3LdspgaVCigUn",
  "key6": "4GLURE4kNCC9Td4RRNm21GT9bBUYR3t1F1kMfJ9MZT77qggzR63MfKawXNF8xb7DKX8sTKVaY2Sf97TaX715nGbm",
  "key7": "3a14q37Kyn4skxbmETPwL5EmpFZxy7XU1LyCdA92Cfsiar97kA8XDYFhQYFkP7hojsejXDcqfsa1m2zaArppPs2V",
  "key8": "mbvz5ncsFHmxSBK4rTQFERMa55HLBbReDsLwaT1SxnzBPm2sAL3JrM5qZrtTBpBSRKUpYNcepUKX1EtCd5EspxV",
  "key9": "2848zSd6ejbKTcKxn377sb1jcaSKMQLrYkEC47G1tQe3p7yCs5r7NjRypfFjVQq31zQxuDXUH6S5vw3crMMMqqE6",
  "key10": "5TiK11GJbbWSfUmB2WiRXFZY4FbGbY9CA3Qf66vLYoq7sqXUHEjjvibHpcAPUbvdKTXTpzeA3oVadABoUdBtDFvi",
  "key11": "2yoK14d3hBC7WZSAZ9oUWuv5ZfXTYxDH57YYpyXenrRRMeWYbhuCkxEXgjXW6Ltc6f9dCLDaciUorufyR1CRvaT7",
  "key12": "23wewVnQLKUbwfTduaAwV52WjnxNh4XwpfCSSmfKzr9eAnztWXX4r9JetX1Rzxw9gxJ9bXt6gfKpZMDEbTDfrRvG",
  "key13": "4dsPtbxvE7K4S3jVFb3iW58fo3hRAe8bmmRxmgQP9neKpohhP9TrC8vF5RRxCqPiR4bWtRs5F42sFuuSaRLRn1nP",
  "key14": "2wPTmL81jpFZGaJUz3BRWZU2foszmQ7hjVusMtQ2j1sV7dvA6g8w7kY4GfygZVcM3K5esTbH2QNeMkGsC3vY8yFo",
  "key15": "5NivBYCcuBwhtykPgBjicnqHPNcP7K1Nk7oTfJERGEByE87JoXSCXsGqsLyS6iT5E52zZhfvKP6j6nJ9oSGGfSip",
  "key16": "3AmmVAywDPGih9veyw6djQDwDxsPt8QtPqDzjHBSLyJBiWLS3p6NgskdYTxCgfjcAdxVmRQ1DhikFjm8Pxe4fMtL",
  "key17": "5Mc2mLppxKSEy7sAgsfvD4GN7CdAvB5AeWvXdZF39AHyRNABpEzymcSfmSWnzoXwXihtc88cxENwY3wY877tiMJn",
  "key18": "5ZX9jhqVdRhND1s6fznoqZrvBYMrPqEXxCRjjGVJLRFmBYJYzRvrXdpXvbRgAuUKs9jbUnD8jQGiBDqCGPyobZML",
  "key19": "8zDf5xJoqxBspM2ErsQ224F2TQo67EHg64ANzsT6Cyo1dTEfNSDeeQwMWTauL16rRLnnB7dwxK2adhuwPTsmGgY",
  "key20": "2aACYJPuK4ysYexR5uqmhxscsrsbfrn5WwvYJK857uptAV5Ex7hMrzDtAqFFxyGhHu4MEf4uE3s29sZoEVojELn3",
  "key21": "2eboMZW5njqbsnBs5P1mxM5TPEwYE9Ws3yVxyCMyZ2m7reHZfXG3ydYD7SrJXWuTW1APUUAYB86AMp3xDRg28ecp",
  "key22": "9rYCFJ7NmxYUfYqPy4ZxNovaUp1snhjDXrbAzRKx3oLfL4GmdAM8c3dpvANeCEgut4G59sXsntigPMBJxwXCQ1o",
  "key23": "ksKrpYRKNr8TqRinCw1ci2oG2hKDEoUc5t3kTSQz9v5V9LzjK8iGJhJmwP134jBFD1EDNMHLXuF3e7AcT5d6Y9W",
  "key24": "3Hk691WTJtW4na7BYGZkkNzBEHoVfQLKr1KzFe7dShsS7RgRgth62R1AoNDoXKwyYg5nWGNX3ztkHepMLBbgZ23h",
  "key25": "3CBiTdcTe25m4kn6Grr54eF9aAaMgpoYdJtkaAKaYpUuSTcivrRQ4eHmGLYe3i9TEiMPooW7RQLgZCr5U4UauaGq",
  "key26": "5jEFBMHjBvNvNaxR4RwJT47nwy8jQ4wvEiVnwpW8TCEMzQhWezAkNrrQ7DvLtjMxpNFfKq44dofbs5q8K9N4JWG8",
  "key27": "imgevVHHeiX8MwNSToY3za164i7aV7b3yM9nc2D2tLfg2qiei4BnZTtZNs7DLaABw828NskZg4SGHpsMK5SGjCg",
  "key28": "2vi5ykNoBEoqdTcjTXzapJ6WCdmCdWS32oeCB8e3te7ru9sT3ivwr1ywtGQ23Q41bL2ETEgHZTjX5juAeB3zKbmc",
  "key29": "4zspsFbGowRHXtWfG8RXccGHuVBqnNNC1HomGQ3G6GELQDpivKNfN7n9qzS4tdqkT1YE5qxzerPGpNsqCG7dyrLS",
  "key30": "mspkAPe71uwgtXXTFAnCVqjd6keKsYEKZuAiNv1JP8Ho2GPRdhQ6oTnMXPQ8cshYSSKCSbRzU125WREVRmCqXcK",
  "key31": "QRCMALePGFvzWyxCjgjHonyYcmGnUfZBVWZUwVCgDMszmAK3tBsePk1SFSBMcKP2UWiXzjUGbHMNvtSnW5LZ2vX",
  "key32": "f8wVTrK5ndpLuygUidPMxB8kvcLoPzC1muiSbDZw52KmA9FbM9jynM4pug9HrHCzxrDyB3M8a29EpLYFszoWRgy",
  "key33": "3wST8GRsaaKBfa6fNW5QGng8zFXfN1NExVCsBcMzBkPWyjs93jfhUv3mpB7e8Hh2n6oZpebBeRpyz2tXdQFQfhtJ",
  "key34": "4PH5nL6kUnG42ofFuFhdgPH7BmFbHyfoJ1HKnXGEkJ7VhzsabZFz6PWQjmDpncekxRERhxJSPAcVTSYtNC3NW5hH"
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
