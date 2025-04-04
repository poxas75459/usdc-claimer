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
    "5MukwRLZob4NggNW7bfr5584tHtoXkwchZxX7y9UqsQsAR3oH1FDNcGiYFg5KWQ8cd3Lv7dcs6jypycgkJBAQkHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmYxJ8nshUmw9v8g5nioAdyFMiVDqTmworHqQnEZhv6Ka7GLpzVaU8ZM8ibvueZskHjPiBfkiZjDp9M32b1UsoM",
  "key1": "4uT4k72DEjbiTMAdqELj24fQfSVLwo4cMYvZuCdKpB2CJkS8tPJ81QtKfwtU8Ek2JnpadcCpLBKrmmJj624KydN6",
  "key2": "6BamPLgziBndXwJaRmoxdhtJ1PLqN3hZ9rgMU1zepkEwkh5hkyMwuqEFDdShHVHPiuMeZvSJumJvN155BbLniQ3",
  "key3": "3k6GdSRd4uHtgaktMz87VFNbjmpLhThhgTkZzJAQa8rDCGPQRRKmPRhtZq1SXMWmKmcPsUhP9DhhLVQHU3RfMGLj",
  "key4": "3BnnWnZYGjSdzd5BGfFtjrsK9iW7LtpZ9KCZRiq83CahXGAWPCMSvZmYMMgcNiKsJxpKskwcPKC65YVQww8AsGZg",
  "key5": "3epm1EwRFjNqv2VAW8Gsm6gCvNMvWo2sWqGEWfAQ7eA7yC1RWZ6CELfe1ni9V9XMUv3mssE2if4baPET5piD9wF5",
  "key6": "5T1EXEamYHwetKjF7PQxj82WowWoxYH5eZkfRtTLTx6j6RrzNw6Du1kwKeoeVSUanm2HrRGsGDD1oWto5zq5SWxm",
  "key7": "36XGLn19GM3kHCpJJfcVmhBvRoDkMQx7ak2quGvRD1nfh7iFjGNDYZFjAqxZXrsHKusZGSft5CcjQ5RoL4paJhaQ",
  "key8": "2nP2vwpVJxDG9rKgiuJYrZXYCdW7fiFCYii1vDuPyaszo3nGvHjB1fHJf9ZaQdLtjB6zLM2hirjSnPhD9nTGxVDp",
  "key9": "4kSVq52dpnjvyRnRcoV3j94V3t1DvdY9KJvHHrwkXa6aiUZZq6vDiyTeqpj6keM62fFeLuPLw4LiyymiBsMbUeWR",
  "key10": "2sRQuzmbDeGQ3hrGJEqN16wVP37ciyDaTQaW1oKezq3ZzaT2eiB5LvaNRwVjSwMLGbXUY59S4AGkYRaahojV2Sft",
  "key11": "5f77XMpnisitsvFRzuLq68EP6wvqVLqg9XBM7DVf4zvLpnaRBKQt38c1pYuCci7DWZbqk7TLG1oJagsc3m3mrJB9",
  "key12": "nSmUkMExFKVtsJnqaGTyH1LvV3TUCCV5RQXZAaW3wz7k7sNprfKtr1BGKyRY3d3vEu7sp1SQiGzW7Ez6nJjzH8p",
  "key13": "5uEnHLKs3xvpE5dwdYAPqMBWpX4LhXDxxcQG4KK9iHnPnvUcRMLRLWm3eFrhChFf6hJrqGGhXbav7NXg6boinbgV",
  "key14": "45dbMsH3BU4eMeNhCddGWukuo4vkbLewDuGmG2ZpyhGHXRVqdyvfmMUyFg6w19EdJKZ8hED6KxEmifr3FpV19Gh2",
  "key15": "5Nfthh38tGvLGGMewmsGpNJgykMk6Aypk7bivtJ9y6XMzopLgd9ucKME1Cxbko3xZc76PboNPV5RGwwE4TtyaWJ4",
  "key16": "2MmmJfPmJB574Q9B5iesHF3VfXEDTRDW8Azd5BA4hir8kYuhsDEAjPowqVZtaWWR3XsyG6Kwqe5zEMKbCuct4kWE",
  "key17": "2f9RiCJtYZ4W4qHy29VtSRdPrGqTCsBR8GMEMZ8EHdAxo5QmC83MrYtrikbBxHuLpuRreLmENqagaJ3Y6TsndBUv",
  "key18": "2ZExZMrBCMRRQGsnrPmZ4BwZxJP3to6ihtTXhrbzNZgDPsu6QprViMGBufBB1BuwQueGe9dhwyEc5JbaSXpttRhn",
  "key19": "Mo5xftx2ZDxX2naQVZJUYoqHdiVZQBCeW7hCy113Nm1RVz1HWf2Z4EkTEEHajvcFUP8TG9vWbmmYQ2MxmY9fkD9",
  "key20": "3VxDg5hATy8n9TgQ41jR4YHyveYJM8oJUyWg8DuwgwsDmqgyFMRChvAQqzrGTUqjqQjaLmV8GvT5tGZb3S7qCj9d",
  "key21": "4TKN82dBUr6ADfyHrAqxpW7oXWrbKPvhqiT6hgZD6LmEtf6pYs1oJpy4kZZ7eYLDAzuJFBdWnWzCefAbJhrhkznA",
  "key22": "469aq4KwGY9YAwn3cJS9RbAbmV6R8V1aguUDCGCEi8muYPNhsq8LzLUJqXMyowYN6H3agoBotERuVEqSwfHKNKS4",
  "key23": "4cgRx54zwspzgcUmCp1EMRZJntK3hdWFazAPANG6BiiWYH7cXqaN6PdG9LwXnfuEpCEMJjDTVzoghRUBqpmRdRQC",
  "key24": "3TfLTsnchdQDBSxfJeQR3Ub4X19BhwqAqpSmUs7jSUHb58ZhWMUbF4Myp562ZKkFWZGbwkroySFU2az5U24cbHTp",
  "key25": "31q4tBdRnYoq55r972QaNx1h1B8xqiDk1MLLNcPKsyUEkBGsqk3UfVumd8YuLHx2CtRq7HokdW3CWkHbc7DN3Xot",
  "key26": "5aaKAMB97odnk38DtDHvRuedQJ7F5CCpdk4ExBBu9kmhDQpazNziEjn1udqwaS4bJwdBrJXH2PuFSsq7w7HQYRZ8",
  "key27": "2aAPNnBhr6v62fH47rs3XvLbzE185EYovuCa96WDVaDBTMtAPCdUKabyem3i7fosqURYcpr4agQoNUSma7Dr5eN2",
  "key28": "5BLb8u47mSCqAJ7BjN59RgsAPfAYFDdmiXhpHfdkxjCscYeC1TMeei7wFcf3UskN4HDgrLsfJnTSvVbEt7FN95w",
  "key29": "4FGjLy4XdYvJC3vnjKmG31we6RG6kvP6ppXXue6UFf7LSzDWgNEZx7YWsZCJLpWVEjL8NUGvgowVBkyT14TXPRpW",
  "key30": "61KH4cHfzGkZEjCopYw3F6JoZDScJpcsznLPoKDFzT4Xds4Fgci27qQqdgG8Z2n7cSQWhSKA8gkMHSwVdSiDY7ZS",
  "key31": "2eyR3UJaJbKSGqsGF9purpn6J9wjGKhbQ3FyhxVdvMSgLvo35pq2uw7ChSWSuFAWBNushU7RkVokvm8LkKSsHg5Y",
  "key32": "4jFWJBQemDzPL3oyNK3x1Y3SUdPrFj5kR6BY5N1NkdgwAD6YfrBMrKAzJEqJwomAfSmMACEUajwAQ5gBNjxrRg3t",
  "key33": "4mv8qG4gZXtpLSJaAHjmgmCAAC4yiiGHLiVCio2vCWqiXGh6skqL5ZDHqsWkLNwjFeVnfi4kmKYeP2Esf99UcTdE",
  "key34": "3RSC7n49X1c26mL9QdMPbnp72Y8FigKraoaeGqyGYiDSE8BopjtaXcajaFFr3NaKcDYBL8W9D6FYYLvoqgr6mhH4",
  "key35": "2h2ivzaPdzDa5rDoS6QF3bz8M3GiB5PCJMTo9QmrhSSaL8U1HkpnnCRPgW9yAvwSeGn8iKfySC4Lt5uWCa9Ui6kk",
  "key36": "39R3cgmFsytzZ8rz2DVM7hmAY4Q4ERaTyBsG7fXy4pDQWA7n4JdbXu2qNLRKc5QNTpkvELGUPXx3vN2gsob2njL2",
  "key37": "41yMrULEn5sVb7CZ2JfoAjL8oYFvirYAKzp8RKgKAnt2Bn8XcdRGUmV2E1T77Fs5dMg6nfRCuNjiLZiEj6VJqZnk",
  "key38": "3C788bvYMNc5vH7a5iVtJVmAiWYnYUB1x65929Q7Wd4tvfYsUwv1Va1Ju65jUJQV5qk4Sxm7PZZWEButw2PSBUfb",
  "key39": "5pr1jLA6UpsDRMz1okmWL4XNqz55zFfonYZFJiey3q5DmvsLA625LgBbMgmD4RK2h2Musuz646mqFPSfMvTUNBxQ",
  "key40": "4Hq9eXmChdqPJ7EjTdC1aR7juC9YVMAsZVz6DD8RLMEeFSkAY1sUdeLPmhQ7WdBwCYkBkixYMxcLPCeztQwUk5Lg",
  "key41": "2MouxPfRZ4Hvi5w8bf8EmGWTd9J4KaxCtBE4kZGM962YasLG5bXp59GndvMmAwow1Dmz2MELADUaScSuGE8rTi8d"
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
