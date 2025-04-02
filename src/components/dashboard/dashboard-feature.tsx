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
    "yJ2VuJ2JV5GMcpSGhtcWqRJFLG9yVRDb9Me4Pj6njDWN7QKja7ySDZGxtRDSeY52Yee2PEDGv6wyZ9kjzJcqjpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsxKZtNXoD6boiQZpD1ttwxQLFCuq9aNaSA5MSXo6y2G9WzC3Zk1GndcQQy9xKwEccBUomHig8Htg3UrUB3nvMA",
  "key1": "5cPidmTLM16kmggbg6k63pQanQGbvMzwRq4bBPmPveQsLeJUvS5jp1CYVqtjtCyDM8iBHcZhhQzwc2Q9Ucb5HBzD",
  "key2": "5nRUS6tfHNGTZrvNXT8ktkZRMqKfQpckjnrBeNV15EUzzW26cFgjc7AFviPpZBruYr4p9GHmKJcTQa5TJSi9L47M",
  "key3": "5WBUcfwzrty9eo55KoZ5pCcNS8xXdzXjeQnVcKgMCqg72NkxMCMAT8VnExzK8jMbxzPDgAjEGZZrVNw9r3p5fd9d",
  "key4": "57Brq1MfZrXNH2gYKUgFZbPK6Nqkcef2QwKBtZ22WHGYystrLHCt3zncMjh8Y1AUuKbEDUNEgnw34Q25gC4znabV",
  "key5": "5Xmf8yzzfFffeVYn1zGpPcephkMzrgo8eBDXTAHR9MA2QrGnd7WQFmEUWDskFARRPeBHVqdmVbqyijtzkJ1fQJ3",
  "key6": "2kT62n6iJX28umbv1m4nPhHPfgsbCt1j5A7G6rbAedwAqfTg9KeaUPofiYkqVmeZm73Z97V2QRKAroqLmaRmyWaX",
  "key7": "5kasrngknXZFs4ytFTuUxwyoEhHdS34unc64cgWXZe6E5PfWpFLnyN5qVejpQzfuVABoG651UsebEx2N5z8sa4jm",
  "key8": "pZRu1AebRMCfuZqQMkmp8J54XkKFxzo86UnicWDJTRtJtbnhDBATeRAkHy9CoG1qTEZqDSPwwGw4UH6f1WbmdxX",
  "key9": "2HB2MmwJYCahZRSf7AUWZfF4V6TsymLnc2XTqss26W5Lo3fM6YTWU5Gfj6CY6b7sLgwg7RZFbxHFCxPCe2vFd3UY",
  "key10": "5Kw8KYf9HfcNvdbN6kF2ifaiYVetzyL5oZLyfch7mddRg7x54VqafoprjAfLrsqLSEKKRNE8LojKPXMEvSqcx44m",
  "key11": "5849ifvEpTom8P1DdQB8VRudotJ3qgUrsDtqjF5u2fg53SFqxwSFtsrki5ffTBCyUvUvhHRSjMQLS2dxqY45CEfY",
  "key12": "9N7bwNRwNbx2iqnuqqzZWUUjgMoqVc9kricE1s8FKNtmXQkoLe1JNVqTVno2qtAgdsn6PY92ogbhdu36RF5Q64z",
  "key13": "5etovxfCQ2AxZStWgP8VvGiM7eUTnvtM5EwEZyH4BbGvD9DJwRJbUfX8WmPS31tqRzc9qt1QnjhSQsWaN2UmTJ5M",
  "key14": "5ch5UVBTz3qa8LZDkgwkGeWh7Y6ztr7QoUSUTDZ7K7D5kNYGVX2HaJCYZxR7iZSaXioagLqdgcX5zFqeucL98Efd",
  "key15": "34dnfwvGU4PTZSEspy7JfKnWEgDgZd36gEvb6uj1rR6njAPp6ucWYqQyNh6yLdeg118a3uqfKxv2CvSQLQXxYudn",
  "key16": "2qQzMEzLLBLmncu4ctiLQ4ksEQqjLEutwMWyozJY5zzFzEb7oLNE2rxRFyTGc35pR2a1e3WjYHzAAo4aiwTuUjgT",
  "key17": "2UtAHinWTZcBCAWUpdbwtVmMTatAtaBw5Ei7cowEpgPpxUNqixF2SXEinNZyQYa8TjhU2fKFnZXkAbzJH67bLCDo",
  "key18": "2FjcXZpCkk9Gm5QBNskMZgTdTgJH1Ws6d2ijrKM5cfkFsvCC9gGpfUt4xFPS68VRkJWZpuGJ4UyFRex3RAVNLrbv",
  "key19": "FouVD2Sh6AQrpMMKaR5KoALz9tLu275fYbu6553q7ihvqui4kD5aueb5C8hiMUxwZk3uru7sNgexyYGSTCtrEeQ",
  "key20": "4Bxey6umK2CHrG15Tepbdr7VTWz8FvkWp4CYeoGykqWPx6Nk9MuEZCnnfvst7ehgfeFCpapyUbPDo2CWiw2rYhvr",
  "key21": "aFy8Sb3A1W7uNfSuyDtrDi5D84Rs4as2QU9viEVQeXvuuni72tS9iikfDR3aWYwstcT4V1d1AopPxbAYTt2QBkZ",
  "key22": "y1F9b9ZFcZ3WPn2HAopCaAcUFs5kGybHH7f3soHqWWLNvqz8i72bsKtxw1f94t8pVpLnj8vefFVWvYNtDun7zTR",
  "key23": "3GS4Ph6qPxSnoo39MKZa3PGMxpea625YyJmeGN9FS4ntgZaYQxpN9TR7ZAbqzope97UHQodQaHsyv2wenhqr1o5o",
  "key24": "2WRdC5DMLzsPr6qqkcguMyjJmnTuEirX4MRcbXgWTaJhtG2NfuyPgwjcSKp5UjPHubFMn1pzjuY6Zhfo2Cz2FbhC",
  "key25": "2PtRyV1vSmpPdkVUee2mZfwXHLHnact6U6EHuovg547DFAMBpXYqougXFgFDGcuRB1CwZYKXDBb2ygaQxuUsndq4",
  "key26": "6P8jPf1xHQtjxKkMiNuGSrs95SXiKxHPhdvR8eqJdJ9324SToZ9HWKwbdAz55zhEFhZExBbGR5ESY6pqkSLZZ4R",
  "key27": "vZuTHoCWzpi1Avo13wdbxpSqc7B9we16K2BUp4iuEiGR25zeN8nrHcsSbDybWUpjCrkkevDs5KRuawAapgvMvUt",
  "key28": "YD6EuFwNq6wJPKVjDraizjb7cg4oeVzGVod1obbkzijDUxtCCNJsNFcHgoMvTjkFEPtDvLtygkefnv2Y39fJZME",
  "key29": "3dB8SckJCkRzLNcWzC7BJKZbN4uJCufukhiETJcc26k6xaFobVDzNhLwcfKLmC3RxBXWkiZxGkEZCLSH8soRFWz7",
  "key30": "5s2coXHbu5TpRnBNvCkUZX9VbvDhfFTAmCn4nCocqandE51PeYKZnSfL5yHrLptVFU8295eXGQCHedN2JizXRsQT",
  "key31": "3oNeSyzJizcMu5VXBK6FGc2C7TzfCgGPFCJRfisD1vD5xsq14M6PMbrBGiaD1fhwQdqm1yKdZX9YZLrSbvm91tQt",
  "key32": "51fPtautSbSuKdqVnHi8GrVEUD3JTbSfVqrPwxeQojS468J2a4hHX4XgW5bowWXuzPas4CSK6AnZJAMfiFbPY7RL",
  "key33": "36DLJYhDcXJ1EdCH8jW14ZugPhhJqcTm6qpcgg5yER6ew1wuPBtanPrvCuxkYMLPRhmDzVtHCSAGthtfcgFuppcC",
  "key34": "4JnrRzGAxXeko2cizUWy8mqJ5LQajpi513AwBwpVr3kZXtu81W9cyBnw4MRjYEjH1dF7sEhEZajeepF3SsDMcU2D",
  "key35": "H1AzDNoTnQub2XZJAvKmL9wimmbHajoCz8fE4mJR8dncZiaYD317qKo5TbxafYdvpCrpzuozECv4YhWtp7kxsTL",
  "key36": "5z71wGinSvqR1bemhGjLc8Vnpgz5g5cxLdAHRbkFn6BazphRFYwr9iT97yr9CYzZEgURNFG2fUH85mfcwfab1JAn"
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
