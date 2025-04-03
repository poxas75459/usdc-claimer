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
    "5FvHwNvEhYKNPsdmwa8qcFSQ8QEH8CJnxECGWJukiZCMzequu4roZta5mpbJidp11iKxfXuQx4LwcxPiEAPjVWuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D4gTtF2bjBE7xmX2L4cu2gpnhHwqfmsACi9QDmMH61exYgfRD4ovaqG2yFc2iRvtKUjKt3dAEHYhek7JcM6LnnF",
  "key1": "3sCTQGBJwdttAXByKbN19yYoY1u6NfkK7jM9Ez3urACYfKTL4bGowfQ7kgLVUMmyd42ebwPeWWHmxstVy6NY35Ej",
  "key2": "4QmurXHg6n7AH8NFyJcFmmwXDSNuPXVygcBH28pNAiYcmvpoBveGMcGfZKMAQNeUAc3EWg6jGD7MzAZTLDE4LkXu",
  "key3": "4DxcHGNfYfQJXojj2zdcmh3ogrJ6aL3Phtsz2vMQKDtVGvtqnTxjADBWBweEbEyVLn724xPATmQSKAjMpa4D4CxK",
  "key4": "3PqZVqGjDA1FC6qNyvaQHi9VMyqmqsABRtamnESF17x4JXtkVorLGttFLforqd7PYEg6oTdgVTex7cuyDXSqDRcx",
  "key5": "NbQqxMWDT1w8UzMG7MCijgqJATxPWn2xzFwjoD4fAXFP5VWDrNnuXix6HQfJ7gVc7XrbMqzZdoj4gab57edThWS",
  "key6": "2VpNGdSYkE83B355QKruHXqPZRUVmtSMd5eipHH6XgjehsMiaiS7LmMUiD12tHs5BZVrVJcARdN4dGVaRfkDejPV",
  "key7": "2pG2XPeHGAAwEeJRrJfReNAuNg4dmv6FevULscW4cgyw3WX6ztr6KYR5dahgQ7Wo6NPx2gmbyWuX8DqhdyJShpW8",
  "key8": "4JeCQPGLizxJuAyCtcRoUGpmvmVB5wbvF9hq3rbxHUxe4K4N4xsCsYZXb9ZwwqYpmMKDSwJcb6NonqRqnwiUH2jy",
  "key9": "4zYQu1NXVJCKyopQdqoAHo2aH3T7srCvhP38E7VouwTuBFQtSHV99p6FawxwFoUX7C2p4C5MesM5ZLvpYwfMyQNt",
  "key10": "52zVrte927eVpVYju4AxuAngFwT9nc55HsNSq46tteS8WoB3pUjZtknqvRwFvQd8f66ioFSCBVeQNf45xELHb3B5",
  "key11": "vcXpBj6YiipYFQMSahfbDaCVXo6Mho1xLPfN9zLJL5gGg5Esw7fUK9QgBW1nB3PZkXTGx5vf3sKXHYgJY4i55qZ",
  "key12": "21ZXaVmXeuRPd7dbU2uk259NZ9tZ3DW8JapQHfJd3axM5FxkgWgEmDrcpzB9zN5jZVhjNubk7UMJxihSd2P4Wkqj",
  "key13": "FuxVDML2gPu76yFPok2rTxYpqYgj6vMJaXoneqXcPeEWv43uScq8n6JWHT9KbJout3Qzrd5amne8RZwfDF6w29L",
  "key14": "4F9zahKfumbJH8ZWL2kC7hDKsNLt8NbsHca12pvvbTSwHHERG7M4Cx2hrGi8bDaEmU18uzDZ4CBDxpi24kK1SNRe",
  "key15": "YzyibMePtQS1UpDAyHLLUvz8wX7JHadva8Ed1QF8dTSJJTzxEqH6VzqZedC43KkByyfH2jPS63Hyy7Zixezzro6",
  "key16": "5ANyHx6qmEJBVD3ZqFhNTMbBUsDAL8DCWzfncpzcshDTnmsEUigFfDwCQUbZCuLPiErB82WdzUREZosABdbcHJNg",
  "key17": "417cKUgzaRM7hHAkNA1ANbLy1rLm9UoLXHYo16VKAy3WKPdkHwypH2LL3DsMVPGZpkQfd1PTf8g8UYtEYYszt5mY",
  "key18": "28t8hihqUhtvrRJn5A2qYMYBYf1NxfSYc5tRa73ZeocN52YLXJJt5z1ZAprs8Yiacny3aWkzGJkeWLB6hBb8chJU",
  "key19": "4sjj17PmPvatewcpNdnKJhhe2yMhvajFacLvP8w7YVDsK8CefswMy9NdaVNJs4QaKCVJM6gR9VtjpuSFAciPvW7P",
  "key20": "66sntaouqB4tyemYyehdtQ4CHsYJKTJSw3tE6HPveJfxU9ZEz3ydb2XM844RMERCxNMCHCiJFHRkBi2onjX9mdA4",
  "key21": "5g3zSt2vs3bq7uaWV1XsXFxfYWDWNm96CxSE66hTpgH5DgsNWzBvfCsepwai2RoByeEr33R4HdL1w3n9AcACpy2c",
  "key22": "3gWixEfWRHbVfMXHFjsoaKoZkuBhzae2CZJPHxuE3LXNXcRbEtRGwXjWvZ2u4Qq9d3hU9KvAqqRKX8ZpsqqU5hP8",
  "key23": "5WsF2fhMZCoNWjNzTFnAP93SkbZwgG2GDkafBwSUN93PzVJjwomAAmhxCRZkskNLzshqbx8oLrSWmFejwRfzLqRC",
  "key24": "3CiDF3KYgrhTTrhUEyXpCaU9q8Cu3V8ay41veB9a5f1pkgjeuPrsaM9U87RrafQ4pLXNoWv8U1vFSoFXq8Yp3MHh",
  "key25": "4gTcVoqzUR9kmT4NaEEe6E63rei52w2H9em6XgYzAsBJ3952X49rVQY1FD6pecrP2EcY3TbKvLiiZ1WyYyN9ingD",
  "key26": "5kyQPiQXLoUAoEbZtEnBvemwtswN3f7JGaJPD8YMFA8NWYwB5pfVs4LVP4z9Wp8d82w57UEThFkFFzn6KiKBnMcm",
  "key27": "2byTgiigAMApFEHN6mFKQu7w7jyiyyLSXNhbMVn5qtRG6HzhB2b78RPaHHuigdgw6qRf6uL7D1WTbDdKMm5PtxQD",
  "key28": "wbQXu881VVGCD6ZjPiNqTKcnVD9BWVbcKDbBwQxhnDv5ou9B4SAnZkDwQhF85J2yDiL2UzCnwhqYKUM3asjqDTQ",
  "key29": "3haKQ59iihV7ysojk4B7AE7JzprLA5m9SqPa2aqzzGp9eZrLZzhPbgesUDefkiCXUVSZPbBEo5apYbLzui3HYa8z",
  "key30": "MNF2Eiq1dxBAtyLMyKvurZYiSZgt2SZxhnWE1ZwUrZagc5zANMk4fX1W8npH4iJrUuUNuK6TmkFxWHwBCZWiUEf",
  "key31": "5KnhqxJbubiNXPoFMRvN59sTEM7ukMw7kFc2g8GGa5vgctGcpWVrqd2C7udnxfP4m5b8waP8KG3JAhM8JPGvnGwX",
  "key32": "rrcyif9M78YH2CyAopDygWLVGYQiJB7jf81vEYujL25YuW1PTc8NHqB4oBsFiCZkv5SuL1kLPatgb7bfvg5be3A",
  "key33": "3Zc5faGHqS6CiAn5sJuUoscUMcKMBMc9YM6dVtoD5VDvC4fHSGVRKodQhCwzqcj9NuZ3LAt4rYyWNsnqktQnuWXT",
  "key34": "26xW9852Lg6v8LNaHTrZcqseUkafR1fvcUF77xJWCEJHVRREajdskGdt9q2avPuf1j7zWmcVJEber9T9J998JS3K"
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
