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
    "4593sa8jKApmJNrENY43fDiuN82tb2LE7iauhnCm87mnMXib6LFF4Q1qR471A4qbgG59mrQyPrSw7zqJkeWTjMQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j385YmFitrQgLLjGdpWGuBYceNpM9v6W4pNvC3zZGbDJaAtjnyKRMb2PAoM4Lcgrf5c1c6JDhfU7K82ER1PTHV6",
  "key1": "kEAm4pFzaEELTesSsvXnG4oRHFg9WyJLDctjB8cr39BJo1Ufshdu4VNCLodXMNJMF8LRXXCohDx7Sa86t1ELGZ3",
  "key2": "4eRUac4fhArP4AcSGBopqZ9dWZWjtUSTY4iCuQqKkVKFfsHqfUBGpVDnMaXJ6hnZnYhsQGq2g9arHeXAxNtTTJHG",
  "key3": "5Az1BuuZTFbwhcCrdsfWQhK8HhGSK7NotVMrLNX8uQDruHE72zj5pRpueaL9EHzUZZEDSi4G4EzZapYvELq36fQE",
  "key4": "4W5xPSsYnW8XqZfZNHHFrrQedAFivVDihFzp9u3XMmA38bP25NGJsfsHUTfmkjPtWbHadnMhDWHdQcrigzfD1ULa",
  "key5": "32seMyJUy9vaaBgKPHy5NRtxVwHNio8ELPHzkG215fEx2s5Xz8ACiwCe9TB1Ub8m3Jx5k5VxUyqtnaH7aT63A2ph",
  "key6": "4Z5CxQZ9k7iGXrYrydtA5joYyeCehMaVUVVLb9XCTBScAs9TSSy6dsQMZvQ6L3qx8JyRHQF1HZdHyC3N8NK62bcz",
  "key7": "3Y9DYoRGRjQCeEf3vn5QdJRRyNUTR6PBp48KYANJEWgpdS71PXwTLMY63yqnBSAKpeMH7ufhePK1qqBAKRNbXAkQ",
  "key8": "4jpcov9CtN1ZUWi8osn63V9btJqFQLRjYu9ytJny8fNwTKCk14ZYu2tSfqMfJPFEXWxhFzkCxT15GoxMQaeXHgcZ",
  "key9": "3TRKG63PwtoyjwZqwRU4CehsWNG8XUkTQVrHwuKCDxD4EfbmqhP8LZgFZJyVyFABzpMMoDWPQAFGryJDiGmKGSFq",
  "key10": "5q8rU9szPnKhdDqYwD6ve24NZ4ZaorbeHJkD2v5TMGiwS9JXY12W7pRo7vHwB6Uz3p9Jn6xHhCS5t7evFs7mbDEf",
  "key11": "2r2Qpgx4A5Uw1FrpvPtyqrkACjAxF77vdHoKVNx84nuUVMg48Z47ZWKAUPh3uaYS1KcfbPwd96GMKiDYhMHxZDzA",
  "key12": "3MaN8eLdyN1KdbZ2aoJkHSMdrB1GfEf28gEARuPD9uaEyLpF8B1S6rAQseVfsXcNrqVgg7GrVEGvQ1vpvEnsU76i",
  "key13": "5VL4JBCYvc1bZHYktF7CDGo2XgDv3mFHPacW6Cdi1dukrqkbqNiywPadfYrTALyuPdm6Tp39LKEWjZnqAUSboDzR",
  "key14": "xLncoSMkTwj5LPtXot8BQZWEz7zFxwx1KZsKBsDwt6XPti1S2gwRoHAo3dMv2Qu2vtXkQQNs6X2sLtDNxE2p72r",
  "key15": "51FtUrYKtvxiHTjWsx3CFKy6PKJUogKgLGCV59qMwR62DozWVYMiGXcYgVCfXbh2yzWpaKDnXW2U7FjfHVqAkRhc",
  "key16": "4P6yMHmRAzctPMnicTodwy7soWfhBibt4CDxA4b5PvPCEw98YXzeYBULj2cHh3t1HABL2BDTxouiZXVfzLY49T9D",
  "key17": "4XUDoxG3BqiS2iy5gjEJobcJSiTnATSpys367pK4vxuNXfUKoMqSvAiDdHp1sECwytDKek2iYQjRhZ4LqBBxcK2r",
  "key18": "eRAxsvc32h1S3BHVQMjoDs33SyK96iCQZTp6spRGdibKus3cEZhan3SWjK75fmueXY7njWzrVQ2BMS9nPq7STAB",
  "key19": "2TR8yvapDmy8ci5QmUMYM76uohUHmFhd6SnKrYRLrUy8jiHD6Jwno5wSwoGVuQoCi6ei9oVkmC9KwvdiTWtbTsRu",
  "key20": "3ksbrzPAHjc3Cqz2VWwADtjzXYCeZZG5TquU2xQebQkTSg2aqN62SBTsjQ6aJSpLhTTSe58NDpACM6FNjPjfc2B9",
  "key21": "4dCRdYhHnrY2VFWACxYeVADoJe6NE31xdh5H6YyFnB35U7nQCs7pNz8yjwvm8uwDfQKNjRWEgdVTsrH66V28k7o",
  "key22": "QgCeZ5JGXWoTzTGg6xQyiFqrpzEZd7d9xucAh714Bzo8VhLdzCDaRfAQy5bSr1Q3xFNVk76KspN2C8JoVzfyyDK",
  "key23": "2UNwY3Qv68gdDh73E1LrcSVWDomE2sR6SgfpUWHfAG8PJ9AtDbrCBguVBi5ANQm5YEU5mYrxanjudpwboTFvBuBK",
  "key24": "VkXYRT9ao3bfatvnDsY2NkygfDQL3kEdAjP52uvSmiSraow7uSPWgAqpu8A44B7ywCX9pwFJdohuDRkJp7dveiA",
  "key25": "5LVtSMrtT8sEu1GjHa8U2DZJeWLsGmzan6LvV1BtUn7MFHTuzhx4bQuVkc5eTBgshVmZSpq7W9oRAs7NpRGENn3s",
  "key26": "3g5PARS9zi95bMSiRcAzpQHv2Uu5e6vJHHVgJ96ff9ky1qeUhnZNu4WfyP8gyE8ceRyPGC5y6yRoQjuVT6KNyYip",
  "key27": "3o1T6tokhaGRsfSc1hrPEWAan32hhr7TPA9PHCKBicDiwU9dtYENbSGfJyQthM7RLsQ41AYyAazMP1oZ3AUEVHx9",
  "key28": "3VvTJsRdtkX9bTb6vPUjdg7DViR4Q9n4Dgvi6J6VFaomfkA9uiUfrna7MPVG1tePpqZaGpymWsQSQwVcjnCS8w88",
  "key29": "44VQM5TmuWEU14QjDxYomsRJ9v9LBpcdnTZnLB4Rt1zA2HSBRBtVzC7Xbepy9Vg96tmvRKxBgtUv5Z2JzSf19SBA"
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
