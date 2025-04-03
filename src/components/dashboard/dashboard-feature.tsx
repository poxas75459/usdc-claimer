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
    "3ydQPFQNaCizRgM686tEmM17N11n4h4pYugyMkMqjhAArehfrvyxQ9PKSt76WUtD3woC2k88RHsv9JXYYSxQodAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBWHzEDcSWq7LkB8JYMrfjn3TKMWaxEEb6AW2jyCV8MJHf1DxLBWLCRaW6swcd8myRTqVwzsMTgA5o9mtATFWNK",
  "key1": "66q6piuCJG2wbhwGocfZSJ625GGmkgfu6mXHamyNDmavwvcdm8Q4uYCyiMCD2zqL2zGx5kgX9wxhTjqkM4tsjaxK",
  "key2": "3RzDmRc9MXnvu1YzyjoLgicVhqHmvx1SPyzDGtAC4fc4M5aABnT3uGZ5MNvyGbt9siHdAtnCUHCQkdhSu7sQGnV7",
  "key3": "33ersix2FfVVTeL1FMkT5nwmm1KoEXsgNLkrT27yeryHRQqpta3wqd8LBcT68CwCTjNWNXk5zjNEJ4NZUqiEFYvN",
  "key4": "4PniCzUmKg8M29DLXjJZe3XtoSAj63MxvXW4kotSE5Nk9eY81HZ2NmFZygBQ4Xpa3r4WS6DdeetEYsH3aWkHqXuQ",
  "key5": "5coLJPBxk1KymzBEAD4HrpxRaYXAKEqfeDhTLRLcGJUS8Wtq5Panjprwi476WhZ9anmaEekYs6GgrWiYiwEeKG22",
  "key6": "5Yj2mkyvbkjp9sG7ZMf6ve7FgUiBcV4X4pkWK9AJtiwG5aCowbWxxMMJxEzW8SedWGuPczyEviUj2jACG3f1LHpk",
  "key7": "2CecKLPTdkFBaiB2cmogn57szz41cwvRx5P7YGSPh2ixLb7gJZtVquDXihJyaD27vx17HoKDo6Acb2byRP7xWMHs",
  "key8": "2A34wKNxk8jFgew9GwHLtkbPjyP2HDwFESnYgQup5UCXLsRW4CMS6EN4pKZw9y9GYov9btTsPXAsYKyYmXw3zxK5",
  "key9": "2yogre2PVgggLv5EtAoGqbsNpGNhWG6JMVvzNb2oMCokjJnTzsEoqAS8HnN7fF8phpDmagspr6GVs97g8eACjgPf",
  "key10": "2iWtFQd6ycXrCnQv8BhiwERogBSpqKECGdU3wzDDxMQx3L2dumkzptf1CowhxFUCA1BBkNtc2VXHWePwx7nbXk4K",
  "key11": "2CcoidMC7TKtcoCcsbmbBupboKrnTYAvkM5rPDKCX3ZZ8URB4zGri32Zu6PDsiHjty9ihabUzcSpMSy6LjRKWAgQ",
  "key12": "B8NVHK4nnf3x8TLSVjc8EHxU7wKHcv52yg9qvJnWB8rVpYWwKn5Zk2D9pngfjP6uV4JMH7hJjqxEFDbCjRuC8dc",
  "key13": "UFMneoZj5xMWKBJqVPrXowjKQsBXHghBxMnvoVQVQd3FUo3v8KWKMxUguhC2BEeSnNnFi5vVZF1CNW1Mpqi9UNe",
  "key14": "2PWu849icymKt2zzpi6gSxraFoMNoEBwmoT1GGAneuZtBLm2ccyQNzPbQHtmDEx4Ecvk118g4XMBUfvjFYMh9k18",
  "key15": "2xDZCJSZtBEHweiusWSJCG4rC3ujVsmau3MLz4XFfCFEm9rQduy7rFwMDKeC4HGUGozt7v5aAcHYB5Xs98d13pKF",
  "key16": "41eY6QEKCcW5uu4S7g2zjwRuycDnBWNvCYrS6WNYB8PCCSPpA5bM9L1CDnfUS5YY62eGTT8Qp4eHEwL5TomWKc1X",
  "key17": "4eLv7Sjhu3fFbDqSAFtcnmTQuVykEVUp8nsdjUJXECHcJJwmshCZnPUakR92BVSCBsRY5gknsWp5ovAFNToa5VFy",
  "key18": "4V1gdZdtzkhSmxoHdWjo4dNGrBRSUd1CNH6YvJyWhvgPvffKHENAPk377ZKoBjnRsvussSeD2xxqQbteCVNQVfn8",
  "key19": "4D9rbYRA2ZYXixj2MSMHUFMk49G2H3oVzMvarMpeFvHgH9NJfrz4f4S44By2UNiJBHVBbyQYUBCsixhC4JefhMgS",
  "key20": "4WDyCKCSgdYWEuSLweqUvdhxNxmZTD933eTeb3nP29LNBSXozFHzrg6HEpm2k3w15wxbDwvBWEDGiTpBGHc6LbnU",
  "key21": "34PW8T9aakZoGkewaFqK3jaB5mDBoDvzvvHgqiDMci2mqEV1iotwCJpeQqrFkZqdce4Jdj9LVjf6ruiKhPgeNUV7",
  "key22": "5tQ6AhUeYJMnDBWXdTdSE99ReWjnJhxEr2TnVcZrtYoywK8Xt36MZxQTNRPxqGFJpB288BkmLDtUY3vc7g6a3ych",
  "key23": "32jePNwaMK1vXXVG26Ak7AyGvXKVqTuAYbZF51iZt4eHaCij8x2pBPeEya8xZLdUTfrr93X3BpTjQw1syMje9ExF",
  "key24": "3H3LdGXG1qrzqyE6tC6cuPXYL19fWRXxhkNUZqQ9JFBz9khihy1LHVvBLU3o8C5FWs8U4XHZPHDtCpbS8115CPtY",
  "key25": "fcuETpXxScAWQ6XyzqKA7naGoEi1e9GCWbdbCzMMqB5fjE6JT9NHXhm1bNptrtk6JU5iBRVoy44VpJtaXq5pCiW",
  "key26": "5zB7BmQH9L6SQmS9HgbxRU1oF27jzJomnY2HqGnts9LCLXG8LM8UkbtVQWDjaz9Je1GdxcskP4BNYz6TRYjagCNE",
  "key27": "X3viNwn8Bznv3xZ95qEDoPHKER8fp42HKzSpBLKUhsKxYQt7dsYKmA8mXubXjhdHEHwodyQ4snEtiNknSwCR1q8",
  "key28": "3H3LusKRhBiimE7gVQYkza5cyWjNfFVQTH33e49ig3efv1BAczqksWMKYYtmmzDZhJSRvib6B3ZSnrFyiRMCPG38",
  "key29": "2zHhzfdVkBdw2jBVm2vqsmhp78PKs8wTScNNdTBJYKUVyU87apzhKn1mgQnCqLkxMfhXNtT1DRLjPVb7xqehFNi6",
  "key30": "39oYxAaCWfyHXiZLJgPaPX1S283PVxNvkKt7QDRhzcyBJ47zXwQZ3ySp1AhL2EYuTxSb1GRKEcDx8sNwCUeM7pWb",
  "key31": "3TVKB9j1GuKoTgCQcFR3q4zkwAYhqpmLbeV6Ur8oxhpQXgW9qXCZ8UR6FktyFJ95RHegjVNb1zFETuHrKQgnoGUV",
  "key32": "3AtsBdqCrtNRXyo54rBEqVXqUREFtrPuCFdbifoatgRPqtPsEe1UNvbc19sPPoEpm2nAYRvbwLcgqr3b8o3iHNuJ",
  "key33": "63GgRSTwdkapnJA9gqMzTu5BqPJsKpQGQqEvKUY5qhH9GqyGKqYBoHs6zRKhNEH6x7TcRghFDiHv6KvChztLJXeh"
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
