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
    "4Pynn9rtFi9s4ZpXu2CHWifLkwymqTdvC19pqVeaUzgKQr1eKZb8xuAmSSmRjR3kFvVRPXkxqBokWRawTHkNpPhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VENt4me4DRBXBBE8bzSZK7s4s5wT2hMohNqfg4pDtq4hg1EH2pXq9DX72veduwzPJ68MzSrmBsdGonceh5JGLGP",
  "key1": "53qDtgMEPEewzPQZcdwCNm4aoKTKdnPb2ganwkUfGsfcB31vXTDdnMSAsL21PCuLo4N25StytGq5aYFpN3EtoUHN",
  "key2": "3d56ZpG55wvMJLo3nSwK81Bn5ujYPtzGGLn8BtZzmXbV6a5sCes22c2KajzrAvUUMCYAPgs5xdrLkiZXjFxeFMMU",
  "key3": "2VCmGXHUyFtwT3q4jbBHsJkC9PQX6ThWnUqyFkb8KQbGpeLzvurfKZN4ZT3VhdupQJrsJCcntsD4Tdq9NsgvtMpd",
  "key4": "5mXsWFjhX9rvetogyjsBGDVdk3SuL6qBvWL175hCa5iBCNQjj3s4hwJrmpDZVzGTgZgWsd9JgLpath4aANE2iTXs",
  "key5": "2FLzHJ52h8EwPcpXGv8LAKuZx4NAfYWDEKuENvuDoGfS4UjbAjcUfCtKJyAM11igxkTD71Aj54QRHKJy11pfb2TM",
  "key6": "4HLypjwjanVRbU1DFW4gkSvHqSc6pJT6pVGAgvKkW55uMUx6bUzyPbbq5yBgwJs186J4BTZxFc6rjk7DuVse15RU",
  "key7": "3FwbXs1QrvmGHbzCB5tCpuSPuSFnZkMq5qYX34oDsdS2vAHtQgDpDnxM4tA78Zv2CH2WTEizoA1GVK55qfV1VUne",
  "key8": "yLtM9GPuep5B4ZMdcAQjJCXN27ZAYUiKDgsDzSt7JpCygyrtydkVQHLhBbHaUWGusvUfsK4v4ULEXAgLvZkZ86R",
  "key9": "3hBAuEHEzKw5CN2wfsEnjQ5sTL4bRddB4Ui7iRBexMTJSeT63GMBAwCv1roUkjWEw4JmnHVbd8MpfcWkbx62te99",
  "key10": "4P1GZbGxTeazFSWZyGhwFUCg8RirVoqgAMLu1yHifi54wUta4X7tFxcXv542B9ZJTRrQcLLirGUmddG3FNpjJ2mR",
  "key11": "2ysuL95rwc3vMGqhr4KqRo7PmgRNNvSCAnE8DZeZnCACpEWzQCM8uXhwGigkoVYsW546HS8GqRbA69hDSmuJwEp9",
  "key12": "5ffhs7NAPXmCxPkeHq51WzRERTQXHotdxcj1p9g5hSUVxT9BNwY2fhzHZJQJ1ty2g9hemky36HNpSZtC75VtGFYS",
  "key13": "4YKSycjeWDBdJzfKpC6d27ivuzV7Qhe3wGq8BXn5QDzYepHAABAiV8kF5nViBAjquMd6TLxzyeZyDwThcvrnp7Bp",
  "key14": "5M5Sp1rPa4n4TomvGswh9eh1Wafe7SLfERUinVyrHimyiUXTVZLaVQwA8SBKzMWkaEgQGwt66NP8jiqVuCWwSa33",
  "key15": "argQ3ajSZrbE3L27gYpo2WkRwwAeTKESNKHxeEsb4xqYAwWWL3JKB94RUiTJY2LtGZBJ4nfHUh6jZTnTEwrGvBB",
  "key16": "3xkDhtbrMzkbhaWWUVK4dyyXmiZLZfv9qSDN1Kd2DAqn5BxqTuNRGgVxqeZ94oZiwPtuL3yNNa1gj6PQM8jCH8pL",
  "key17": "2wPi57b9a7iNzJENuTVg8kDhTgzvXy8UeV5UX7CRDDrD96NJJApVX66djFM7kUHpTxifgYhCDSHfKM5GbFZeJzF9",
  "key18": "4Ein3Az1bFUA8VcZS55NHXFrUTcS3L4kXbN6PtpJwtCRxJYi78Ttt5T3hsPGmd61kmMniVdPVrs6k9pN4UiDgXuy",
  "key19": "5GME2hFXGRj9v43qmPd4sDNcPTZj7nVKEfPHRhCCh3PR8UcEhfY5fkkyfaUJhqjotAywYy1f8pE4pBRoqa9SpLo5",
  "key20": "3BhL2Z9hMQXyQemtrVPXgHE3hXK9bUHEYyv4Ese2a3y9e9bE2G1uDe3scSebWvH3gibbYa48quTp9wRmX3Y5GCEX",
  "key21": "F77dZmSrV2YqU1Bcc9PhxzE5JXnXM7aB5nT3nHHV4n6kn5UPeNEZTG578b6GXeTbyAm5MahQZLio4qm1FDWabwD",
  "key22": "Lp9gnTvKeDhfyUGKzkxicSQDo4w5VBbB8GtVJKYGTJXeiCv7R5jszyAQseLZ3euTHY9FERjNmGehJZcyqsFGn5Z",
  "key23": "C9wtKUFgL6QMu2FdHQosfCExxWqeZJz9yWTnearyVh8bConjy7rAXXQCgJRMDk1uFNbwkeQuPRsLbXTPsQN4nQc",
  "key24": "5jpaKPrtKuqE12218VUy5gttpJzxEEftPnBmT2URXpSRdnYrsMBVuTrXd7nZEjr53pMFLYePRGAnTKiUzW81a15U",
  "key25": "3GuybRCckGYE7VzFTLPQ2g9vjLPQTj5kMx7cNQLzFcUgcs4d7jF2H7i3Z5isZUQr68aaCvveGMbjQijSEGWMVdPM",
  "key26": "upF6Mgq1ZqKdzhYnFdZSLR8VMTh733uGHh82LABmTjrptrdWHQQkWJ7jZNCWeM6B6r2HKsTMGoPFV2rFsT3op15",
  "key27": "4GheqMKGsx3VF6gwKTUSYrmjnEV9gLzxCHfgtTSmqv8AU2eB1eq4vbuH3bETPK7n989SCohAsdaFae1bVkLTkUfa"
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
