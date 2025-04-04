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
    "57222tPgiPzapgcM7DLBnxMQyXSv7mvqVfp9ggbP4vnnJHPXKFBTi55KW4YaT1bSNxAPHXkKk6PgG9VHKUxpXy4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297xrZ9ZgDGdoFE1kiSRbuLH2dLbkAmg7CWeSrsF2Nvhc9F5b3CbUJxwdbvdbfu4nHegvoVbBqbwyV1J2G5diTqu",
  "key1": "128J9zkfJtu6cxqQgMKRpKe1iqLnU7ehNjb9DEfCNdSYEf5S1hX2wxMKdGU4gZYjDPYG4pHBFJqNK7u3Hac3kTjL",
  "key2": "5wnDZpttzAXLhTcpyAvawkN1a5wzMHhjBBZXQxpF4wsF1rMSy29jLuiegQcMitxRKSXaZJ5KscKB5rhYpTkQW2Hm",
  "key3": "49maCjEGXcmxAoVGREsTkWBybsuurDddwW2L3p6qtaTHgFb2ALWJPqTXTTYwfRNpWuTCcQq9qD7wMNNfMJXVzJG3",
  "key4": "5Ha4ucy7vumfQgHdrKJ7VLzyQfKNg6c83f6XQLRFEgyjhXvXKFc58kpuCCrfWgH6EoE35j7qtxGwqdM74eXvgcJe",
  "key5": "x5ruzKguErqXjU98qof9gj6R2kG8ZK6BLuLbYBLZWuCCBtihVNq5RH5qJ9DKJCjatY63K9fCwpRo3JdNps16iST",
  "key6": "qi67HZGA8ujhonZ7qvLtXmzPLEJzRKEW6JkAQmE7GraNUFwMBHH323Lr43A93gU5UYWRPzC19AH7T3QkVbWLixD",
  "key7": "56Ej8ZSAmFNYGkx314ZLxwUW9NvaWn7XAndjWCTB5hHfYV1S9h5vRdAAMS175ju8mNyYH6v328U2y39sUVHAi5yZ",
  "key8": "27YUboQZjK3JnkV3Y7fpgRSBTYdg6KBbcSri2Bai3JHvjXcLb3EoqwFdVZyypcdo6v4sxsF3haqj6EKbtxAidbP8",
  "key9": "bZL8pboCeKiC3DD15pASR7gfAMCRBCLcWTpANmkVhWs6uSVDyrsttW8Z8frwfhgQGSzhJB9KN21frBCK7EuC2Mx",
  "key10": "5xeHuNz2W5qVtGTYKkeELSBcJFbb15sj1kN6jMUXEewbTgs9s7Rtg4AHhqqk9LLvGVvG4RPQMqg8KNGXmt38Lvon",
  "key11": "ThKzLyKt5joUcTMz2J7CfC1WtgY1ngrocDK1XmJQG5gH5n96mZuimHyWLrZ6AS4eyF2U1j63WEHRdcTVpo5JnUt",
  "key12": "5Z9ziVnSq83zHXCknoGGyyhk2wZxvTzvRx2daoSzrQv4WabTDGFsVrRXQLh8pQ3423hdi2JiV6QryUL9WLCEVsrQ",
  "key13": "33t7nNBzS8L4cjenhvb4Q5NxZBzUdqM8dVKExUbcNRX4vSMQaHPCWJC8MjMw6rw28EH7GQ3QB4BYDmme7mbiw3gw",
  "key14": "3VLt3XFhMHuwRG9Qh7TbWzSRCcEcEqG51pV448HvZzMwKpLc2dVX1tQjJgfNgUytVyXiJeY16nwbuQM24DkLXN4G",
  "key15": "43b9EmzgevK1oD2T1pkFVrjmRN3z51saExAaj3P8kgJ4YJFL5Dp9WQ1UHqhXQoEYbysfFcWtAnsrLun2PFNxbWGe",
  "key16": "64E6fowNktWKYPeY3X8pE2ZWNqFJ4eHAcTdJ4QHvqGAidRxF5iDPpAH3mJsxhsGa5QrX4QFkYxm5LPJNHRV2619c",
  "key17": "ym8d9DVFtHiZ5i66uHvs1oNgugTAiALrYeYU2xG9Avii7PiMxDcsAFDFDKupkHEZMjCNnwhorhLMPj38AYJu8d7",
  "key18": "4S6csdcg53DZTkXf84uQ6n3fuuiHZzkBoofUdbUQo3NPVoHe4GDCxEr4SHPmbViJs3iTiAf6wxeU1uniEPKjw3bU",
  "key19": "4XaHn9PUATiKy91nrDeYh93hUXfAR2YYHuxK5x88ySESfpRmshD2JiHKAL8pNGKanurXDHUHiHnxvgaTiVshFkNh",
  "key20": "3BqVmP7EF9ChY3k7Aq5NkeULR92amCeLd55Ugk6tmBkrB9Y48nsxA1URsG9WPQFf3JSp8WEfjxtfGt6RD6KLWYsD",
  "key21": "2e3ypMtrjNHAbmWV3HTPHy6BLQZmQVqDEwrH8LuhwNtXvBrLKUq1tiUzDpQg3ZJqcKUFBXoErucCQxfeyTZ6veyt",
  "key22": "g8ypeZfiaRuMzPDPTmuGPbHcz7jhQaKftaTuHzZs36QSUDTtoxedXV5J2UweANJpGbVE5ofdX2jW5hod4FxhXW3",
  "key23": "3ssKFXZLH2GQ5mSXqpd9GtwUbpENTSkNSz6V2tR55ksbW5AKoofbWBM4wDPBkqwvqG4UckHAHNREB1i9sKmA3RAe",
  "key24": "GvQjmcBXQY6VJhgJFBHrQCpg4o3NeZtXcG7gftJsbnXj9dXbrcJmCTRF4xGpDaYtARJSA5WbbDupJ67RGeEgjuh"
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
