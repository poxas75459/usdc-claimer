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
    "5xmwVQHropDyKLZfjwLudLcyevKJFyhVkUzhuTt4uJpTA4iTrkWczhjqTCdaLVcJmqgvMxKorVk5mwWVBBW4Bbhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVHyxSCz1jwTfUqxgexXEh6S6HJL2KAi2KM6J3XWxcgRyAXJmwFHBk1EBmYyByZY5srrRWuNUEjGbrXS5YqRy3p",
  "key1": "3kYLxwpHdSFjSyDGxrxTfAwhiLAoeqxe8V6GUTgHhxvnZbwz3vzFnitrswSpvyD63PJJrHbgMkY186C3pNSK441e",
  "key2": "5Bi5y3VFSg2NcekMCHdSjUeyUDMa6m6yVKSawmabaCyNbxPh8KbbvkXAAdg3QTFyvC1xUDaNDAoVnmW4QVZ9eQa3",
  "key3": "62LfvQ36ffmcHLgZkosSWcgUCmrNarkLTBxkFjcm8MgXV6s4cySVXL62QjgsBRe2zMWXQiXZcsLTLXXpwfTzaMBo",
  "key4": "2WfvpihHVdav88f4Y92sBma2R3Nqisb2gH4v3GhHL3XND3DgVyxLxoKGqyDH9hVfxsqEhLjb97FiH9WBWNAMubZr",
  "key5": "5FQibwFBUK1bPbuf3FqdY6JEHX1WuASYkPCgkRu4eqZt1wcy3reffDCfx9RNM4FbLFRKa6gn6rQsfPWqDY3Stu34",
  "key6": "h4gTViNdY9XHHXbCcJL2m5teGo6s34eJgBWrUbitQkr7b1Q5dvk1umPMKWc8k2Zkf7Ve5u8w3WtjCtr5uu5Wm6d",
  "key7": "6FPQ4VwtH2qUcuREE4R99wqpSrYoDytFApsiEzcNt93MSJ66ZH1E2dTuobUNCJWnuaDxaNo8TNCoP4buiirBg16",
  "key8": "2W1d8sKVxWk1z2UYrVTVR7fetbnqVABbSkUvv3rmkDFacgGwQjtmriRV3AgqBPRwyR5KS5f6Vh2vffgnNoDbsFyw",
  "key9": "4kLxKLBQPEtrVPMriWJwis1BgJC8q6aWRqxcPt575beVasmRdza1oy4HR3DWnbzYmh5LWox3JvdSQuypnGL8BQZR",
  "key10": "3MwwesteEQY5v1GRUNUceHMYbzTnrDExyAJuQUDcNkDXU2jL6kwUfd7jTreqZTrHZA8noxnp7BbKghpte9bvjCo4",
  "key11": "3v7aA6LZhpKvZ8X4PeGSKc8jr5kU6N4yZQb1RsxzYoqQUxeHHdZddp6XkXCXUvSn9dFMw7XPnZBdPckoksMofPWP",
  "key12": "5VL2f8GgEhF7cbB3HUGWU5Ege6zLo2HzTZ3ws9w141x4SZamWx9xae6QGuuwQR7hvcnyrxuWLrnsXdyTaxiCtsnY",
  "key13": "5XtkwacJ1xRTr5WPp6WoqmGBpCEJ7E3CpNNYPn5eqBYwqttSLe1dNxJ5Uk1PLbMtrAzm2p9wY1v8236VBTYywJZz",
  "key14": "4nnbBW6eQjJyRMBmnSvC2kkZfRrqqG6ATPjbZjJvCdtbzjqzup38MBtCEp6QmFPz7RkcTz7tSUdcxwy6gn541ZTF",
  "key15": "dcEoJ1kktSqNgi1poWESwH3TYf7NJa9aHXfT79SyfW8yk2ZAvMbLibejHzY4tfVUnY9xDKHp15LpoCgof3jcqou",
  "key16": "42WPHrDi3rfNAc4kJK5mTHLdDRn7kwSjUaAqJhd5zpJcaFW1kktHLuCQk7hjzMEaUgnbhXLodt3w1WwPCJ2uD46T",
  "key17": "64ynHwKyGM1GqgV2KY7SiLJaTs6fcuA4Npb2gjNxqPC7FPMk2XsfjeZUM9xqUMb93rWEejoRVHwwoYCQAugr3XDd",
  "key18": "2FGLo1Jy4KNXVzHn1uJkMMadsRsk5EfQAJgj9QyvGHHkhahXr2kg5wpXNqNyVoJFXUTiMYppe8c83rfByCuQb4fU",
  "key19": "245Cds4XQXVGA6NvGXau7p2hUKXRzdXq7zJJZmgpKVtx2YgygBhXxgmf9k14CXJHtpZbgJDbLysbA7cG4AYALxnD",
  "key20": "LR9t8agix9Dxdqd8V98nFiceK371KCR5QeH2MZCujDmeQrx84npmF8Wq1W8bCmU8z36wKJ6jHa8SSCPSjpBQDNP",
  "key21": "29CV3WECoo3JG9f5d6rFVWviM8QRToiGxSxa1vvfU1ogGAD8dr4iHWdnbqR7EK9wDKBUcfaWdz4ekYgj4DdrnhDU",
  "key22": "eSmqfTz2HeZdyddokVkrmXy8We267s7U2GhuqvJSKEF4QoK7FsLVhkcGaQ5m3YaaNURVLpgqs7JuXdibqxGjNQe",
  "key23": "3fbFQATnrK53pB4RPhnNZ8Dk75e7S2qTQsYMhyNm3yL6kZ4R9qLgXemWh3XSUbwmkn3M1TRfU8tdSCcDeGtAfwuB",
  "key24": "4669jkJ5i7Rkivp5AxLbhefiB2RaXk8dVqnfzjXi9tiSqDeDfYS9hMggSCh9FstLmPBPGfcEPhUPDNC4VNvHDtVR",
  "key25": "4g6yLa5XazhZVeBiyRrkZ3tSD3zoqnBw37waHEN1SxF4HLGn9GVv9R1AwHovLzTNTeL1ZVhMxavPftdwkBJyMBWE",
  "key26": "Z8SiaKGNvy8gsH4Y2KqMY2nECMpseirnnT5brm1JqXvWN1Bdp8vvvmy96edutCAerQzMafRHdNqCou4Y1aPh5kn",
  "key27": "4G9XHRUUU7wBqKiMuPmJDHHkBF8a9fx2811cE4DjYMkZQKjnhZXLtXSfL6wSXUG3JQTQhwmhDX2H6aKzCHDLVjPz",
  "key28": "4e87AJ9cBcu4FLM8QtaPx6nuQnbPDt5Zo9BTcYs2wm3AtJQLcpSvp4Z9kJTBj7tPx96VvvaogrkwDeHnWvKoeRun",
  "key29": "59Ry9SZm6i1FX2uSgTi7kY3tdJfTycQ6VpyiYi3F6KredhU71DVPnAEP52c6vHT62grWmxjr3UFYa5fcXDb8MkgS",
  "key30": "5c5Jrs2UsLn1RhyfBvYY1PsfK5WDvv9e9VczPhxPyKbj7qWRdyvH36sUARYnyopwA7386DWAS6WNNGXzTGaEVnw",
  "key31": "vdLBEfJKcWQnwbLzECBs3sjvDycravKBNC2fYgvYdzdZWZ3s5GZWptByrvmACXrfewAHsPA1GRwxXjitgrt7rtX",
  "key32": "35wzj73WQDNGAifxCPDmUhePMqHAUDtM3MgWV8SspLuDeWTcJy6A1HQFMqYMZk5G5sLBQgiZK1JKo2RzVvL81Gfw",
  "key33": "4eZXmqDUdFN1R5gZuKMNRhd6eh7irrERHP3fy5QZrktDfviv87D4JSA1kHErQUjVDgRaW9jXNXMhXF2zqJ8q3TNq",
  "key34": "atLoMMDRhBoSCyeEupjRRutM6mMjS1jdkbqbcCsN9XPvr69Kp2SLesgwbAn2ge9c6xndJ5VygzAvVarjB8JvcS5",
  "key35": "5C5xseg4A3r5Ky6P1R8Eknq8HHbanX91xCxD9E9SyeWYvLyDkDcDTPk6d7nHnHWFjCaM7wU7mo1B1uFJpspnKb9E",
  "key36": "47zWhnttcwjatY3aF1bjxSWR6B7zNVTNx6DZa9M7JNqHfDHU1qaJWv58UxHZXXg35doQ2a7zz8Zaf766GGeJY5wM",
  "key37": "a6nCGHKYDbnY4dsxR56To3UM38gDUfNAG94LVXQqDNmNrY23VinEzy9otnt1qvqvQLS2zHBqyKz9kn2hc5j3tdX",
  "key38": "3KSY5hbDKB55quvFBgFTr9ECSmwEBW9AVvYpBYcqampkQWiQer4Ei3zkfrN2Zunef7YU18M9uczCh2i8EL3vLeba",
  "key39": "59A8Ti8QNpivtU3mnbX822QPv7xctkp7rkWkiiWvpJuCCP6QsCMkKn2Cv5pYXpy5Hn4kycMq5SzbWTfmQzCG1FH",
  "key40": "52G4s2MhzpYr3g7eVpr8JJECYC1npkUh8saqnwckpJEE8fQXYqCbfJeP9KvifKUV2o1v1A3Hk47izUggRMDSNKWW"
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
