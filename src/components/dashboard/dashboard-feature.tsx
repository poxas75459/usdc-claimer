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
    "4bTjG4tHnH6FusknBGvgtwAfYChdomU9WhNhfqhiawg8WCi1Crh8eZb7xM6VXxi47KLtTFfEjyKwVqtsxbxPyU4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1t1a1dJ1dnd15kV8mbEpYfPYDDTykd9xQ25AkcZVCrspYygaC3ghXuS41aavnCJ1tFRAS3ptHMrujheMKPhzb3",
  "key1": "4NDtmt7JF45ca2mmcE2d1yECTP4cLQsmndwX88zZqAUHZLRtN11EGoTnj5x4EGQLxtHaU6rRuDCcyND5K4F1nrEd",
  "key2": "2zmR6FXb62GnJPnDpLeAReRUenG5Y191bQ3nXzCzUgC718Q2M6PAyRysRXAhHHpnh9vRWUHv9JsxNvesuaYvezhv",
  "key3": "3X9iT3qfqrP2p6F6pCj2DPddqHkMpbSFYYhqSKNoXiKxgN6sr2aP57WrXAEw7AbTE5X88GSNPTvnJxWfesMD9X7C",
  "key4": "3m6maQA8v2aMegLmiJRRPfcbYRrbKZgQkwbRqDFJoXcjPDpVRbQmnPVSKvcCPvyH59dHCUVT2HqzkWjiTEHr15Kw",
  "key5": "ZfDRfRrGSJhUPsZAVrU8RdYrSDC61FQN6Ba7sd9J4BsPhCFWkWtHxUNMkazsCSDE9miHathc3WJ846FWSuDxajp",
  "key6": "32tUzu9v21kJeUAB9Y2KAyDi3XtYYxfTsyFbwySfuF32Nx25Yd8TAWc6pdkfbsBDPgVzZvvCwCnJkKvay7UQkKAx",
  "key7": "4vc3VCWiy6nQw98zCqkMQ7K52CaHbd5JDAjnpak2DcJykJ9ySfqX1YyA1vKVQQoY47HENw8rGAbdA3n6L4fskWiK",
  "key8": "3awmvwF8CFqtkynYfE11xiMSLp8JeYJVkxYLAohHM2siwuiGYdajbs3ggTBzL6xGmgfe7eybrtpgKYo7Y4BoyAWv",
  "key9": "5qrNHSLoVBmEdp3ec94fyAwUrEQnFqv7ku11iSzqdwDSzGgTRSZ5DtrAYTKgEtCJeL3gziLfGL2iNr2HNTqgXJ5W",
  "key10": "3tSFFM56dcLdeJhXYmY5rS4ZQePiLHtG8WUFEEzX974BVvDe5tKx97RFQPMMqButtB1p4hKKbntj1Ni1Ydke6iHK",
  "key11": "43PAxAUcH5WHh5cfWA2UwivmxrxJ57TXY1DPRmWq4dJUfRoSBXVSXB2SNrhMJwfBt6TZpHkyAkh2DvSqRjFeCNxJ",
  "key12": "2gTiYeJpn5ASA2F1xMBP9nCzZKybwSKP17sny1om3LyWULXnuBMw4q1o5fw9rhz2i6mxkmEpopTr3CrQmcyUJY68",
  "key13": "5sPXV1dujoTBHw8GEjGArq7UV5ssuU7LkQLrkPnpNGegAqukMJ662FeRze69xaLMohzKYU6zE8DD8cmc1qqnziAN",
  "key14": "2MrHXuv5svzGSZ2Biq8BbSh7MCgK7QYX7kEzj78JqLEDjGpeSECNELFkxWrTtSR1mVtsG8Z46HfRzNUXFcYD2y8Q",
  "key15": "2XcRNG6vRPwZjWfn4sK4AzzYpvvjjqogjnTXNcbE68nXXwmRNWVQF8pvqkon38brUWvQDxfojVfJhjPZq2VyxGN1",
  "key16": "5LBUmgmYMxbciNZQbTEYQUcbBb5Gu56u1QRu9utke9FdswGShfgzRx59dxQD1VtfVpJ1oYYSRTdL2zU1GqiC3npT",
  "key17": "vHHUQkMeHQi3AuWjD4U2hKmeYJMbpNTu6mybdvE8TKXBko7W7p12qWfCSgspbLfpjb5M4ngidL9K5Vk26S1R35T",
  "key18": "32Y1yp28HCz9HEENa5YM7xSfzAcJFTAJJQ1S8VdJvK1P4efD9arQGRfVFgKCS6erHUpKaCMVw6uYQ5mVqcrmK1aM",
  "key19": "3nB18NEEP3rDy23TrEBbsUqv7GcjMfz4iHLLXYjkzRD76VucVE6zRqrFmsoVzJkSs7NprTCwP8ZUsF2Sya6k9ugy",
  "key20": "33dKwXtYpYVTyDfttJFjut8j86R4Cpheo52yr94F5U1kSeAUuziTcBKnjRgYgA7pMga7wb5Lm9BmwD1Vb3DoJTLs",
  "key21": "42H873u1G4PWqU9EjDSgTpwsYxBAsbhqSPYRJRSGXPAFKpyMMiNCyd5WsJ8FWV55bkmJZfhoq5M6iyTtESmFmtae",
  "key22": "4ZgzGVkCFu7JpH3zAFxEoYGU92567YqP97vsLczcfTaugwKf58vC8fqp7oQxeDG9qwMAQPeS3UTXVa6t6ARppsjB",
  "key23": "4vp9NRiN843mpN8NJvFnk28VSuwFJU38YFwbiCPArSPJrk12WRwPXpVSAuom2WgXkoTEX4GggRZJAKR4XEK2uQEa",
  "key24": "4x8zQ9NpCR5a9cXC3GKox2QRLZH54Dgeyrd1H41aQMVVLaJxtYFYCbjfqWY32Q5ScEzBEfCu786umaM37hUCkvHr",
  "key25": "579iHepqUCwaVQPuRtP8P1ZdkfRfWttkTPTCD1LYiAwGekpNymxQQWBNgjTGajnWzRyMYpsidksvbaQTm9jdvtz8",
  "key26": "4yrXdkFC4t9ftP3ChSXLJ9Xxj42TPvxdMEX1hNQSuZUheVznzit22pCiNbwgk1NcnvmSx5LBf4zVFr32aedrc5n1",
  "key27": "4KWoEf3LqPH7bRqKbeWt7VWLjez81XQXyTAeVRsw7ANmCfYSzTkY9ct4awfaqEjsQUdZBBCvrj1tDxvGkt13LDrf",
  "key28": "556hdGBL9gf5HMrQ3NZp9CoonRVkv1GaMHy6dEXgi8f6EuaeAGEcE9bpDevEynuUDYur2mZR2kbwQ1fJumQ4TkT8",
  "key29": "4xiMRG7h6WH3ohSYsdya4pebbjjcnkRdTm4rvkXPgZAXn6ADzsQXX5bBc199iyxjF4Q5eyXpjJkQGYJWayXMc5oo",
  "key30": "4cARTAYpNh6NSj48a7QYEdeFUEiBJffBx26fPjEAkMTZ5zi8dNtoEgaNTUDuU8RvdC3acza64Bv8PSSyHsUkEnfY",
  "key31": "f3wUFYHcX5RrZssyED4UBVxq4UZMnhq8kd9nmVomyuz44SGrKsrq2SrDMEkrijdUeBA79tcxaUWi6xN9PDsiUda",
  "key32": "hstgEoiqtijDHsq83V1Uip91XUNXX2D5s6BauijyRuzwbvnEWYzhnqM2DFEvcC5BZk4aCsrSPLPzvr2PbAiVBWY",
  "key33": "4csQ1RBQ51A2A2ravVE4m6cVLvp1KfPN1FsyAvo8j5rxdJhEuT4FFRWcSYgsETBoGqHXdUFPLNe3vJDqBU3czd5T",
  "key34": "5AAiwpbb3x2kcx8mYWshNr8wRYfD9KtQUTUzZ2mo7QXiRQtUrSxCRg7Uur3mcRfV3TK9ktP5Lc6jFSQbdXNmrtHs",
  "key35": "b2WWX9wU6pQ3MGaB7X7bCFYY6ifrpgScJaVX28ojk9vtrtSCRLNhZFT9XaU5NFERAY8Y8ZyVPRQqWVttmVyThVM",
  "key36": "49re8dBoRYHjCaMKSdABG4WFzKisinrVXLwSEKfRWm2boLJwitWLVmVAqToyyPzWmCAG39Vptm6xYHe8SeoYAKMp",
  "key37": "XmRn9jSRRuvLBJQJYh1jKdbAyKYVfAtA227B3u8zRPLHww3CbH84kTk91giSQ6hP7n6qU7bGP9Hwo56Zf9iMUKk",
  "key38": "46PfEFJ9uBbxc7knod2Dqzp34PsPZUdCi9fVU9fAUjeBeM7wDyCuzNV5CyEyacSSuFm3jWR2kzSDHGT78GHYt2Vi",
  "key39": "3VATgaSNjuVdzmy9fd8wE4VPG164f4utifC9piJJveLKQzWAFD99PSAxXJqUg9krN1GKfDiiCSMJa4MuU38DcHWh",
  "key40": "2Qg9vFP35XiVjev3Tt5g4B5HfowpJBvaVwUYYgmskozadxwVfVpFHPai7uMo26Q3NRMEHutUmQUMfU6dVnsQkU9v",
  "key41": "5qMqYdsZUn4CqwZtp6cqceY9JX5MKymg8PcDLyn83A8tUmaidYfEG1FxtYmuXdbKvJrffSf7LXKVoMns5GrfjjRw",
  "key42": "5vLsKrkpQipQSkuzX83MpjAMqSnu3k4pTfETCdxZn8YPVvtx3kxCSbykHD7agpRv4Zvaa3CxcuNZR3dLTHvgJWeT"
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
