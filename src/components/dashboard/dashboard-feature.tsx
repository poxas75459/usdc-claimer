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
    "2BCdSMCweMnsusGzuTZ7AprL1KzJS5ECNRVzSN5FoSGBL3BRPR69UrxcpfQjDKDSTEKt4xfGViWDZzNjBfnHYLSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVHAVY86DgtuUkedWuRXyygTdrLqFj4N7gaH9Q3W9dLkRjT2GeYtaWtAySUXeYJRsAp6owu6iNWgzRKS1cio5P9",
  "key1": "2xJoYJjpMN5rZAmRZguppa8yHECBJ6NU3h1PEMBcXvxRayGV114B1sNdzp3qNFsGnVWhjr66MTpFtav9dtqQV9W3",
  "key2": "32s76vhdjamogEdkzFtedhYvdU3egitt9fjEkKZ4K56e9Xv53SUHQRAP4fSHL3ULsbkSKvzQRusJdLy2tfsszniE",
  "key3": "Mx26vZ6rj4KoVyEzSLDNKSAbuLT7iXdLRRFxZiQVDHZuRzVHspzaYMBd5GpcJU97QQPSXLCHFTVPyUX9SJ96bnq",
  "key4": "tqQNr4H41Cr2La2d78rytosomMR9kSDN9HgpLiGmZGfxmZBXEFAijsQUVP5gUsue6J6qhyehk8TnKBDcgo62TKy",
  "key5": "4VH5S6uAng9eLM3dw762o3Wt5N7QBE8suGTpS4trzna8uNobkG2E1ynyC7qQ1KUDHGeh3fPBqmoCBmheYC5vWhW3",
  "key6": "5xgu51k9RcD9PwgczK5VS1ZG7qCnpQ9f6CzHGgiQrR4pWQ4e99kVvHtERXgYj2kDZQFNEs3Z52iTYg8Fp6zdq34R",
  "key7": "3zjDKaqGa5vVS4JcBzmmK4UqpeWejWfkrHm3bPxPYks8igy9EnzwkqE6qi4YQeEy3WBzmBHgTYiF7GfTYLGh6YqS",
  "key8": "5dPwTgnqfK5hdmxTZJopCLdDWGY6BM9puVVimkjnscvExB3aGXx9VwLmpxNVQ5LsVPFQ6oh3BGzP9WJJnUfto1XU",
  "key9": "241rJbUdZuQLBb2JSHJxiTuSkgQb4S8LBaE9MJfEY7xtWzT9ZWUdBKDLwn7Bq2HDC4Lc8G7YNrGGEpoTm4q5NvUQ",
  "key10": "4NaY5JCAX9s6b2URD1RwmaHhSrdG4ZyvhqzKBqcFM3jBy3Ft9MLsvT1VBR5s7eEVd6aKULB1naXeTBJxGSozhuir",
  "key11": "5D7rR53f7EMNbaN6Lh3Pa5fifWnQka9oikGYa8DhFawYpzULWLPZybkgXviXy2CyV718LR8ME5AX8gtK8BxWyfkP",
  "key12": "47D3jAEaEF669NXmpg8gbdK1NZJN6MtusthobNvd5Nz782CtaRfkRgtkfe3SfhiguxjZaVxZwm2QQib1N3uQKCmd",
  "key13": "51dRoeNoeJtyCAgVEA5ZoPd8hk1Anrkh6aZew1k4Zjh1CiUWWY6zadgfA1oKERBFxe9ePPUAi7hsa1GccQ6uDYYJ",
  "key14": "2HyFRYCVXV3z1X1BWkQYFSqYtgXyRGVmCboJi3MdFEfYu7UAmx615RPVyV5z5R3m54gf5b48UWrsRcX6n2df1u8P",
  "key15": "4iVS8ynUxAtd8aTXaS7V6bvxTpXsaZSciE3J2Bf5hyJtn4sZeDUYjnbrgeVsciwyzSAESYeUaLZ6MiRu6fFFAeJi",
  "key16": "3cca4D1HYk1MEReaheJAbcBVzFmkM3vnYbmarTUoRmSA4Dfj6HGx2pUnLU22h2edxTe8Yyt3d1wh9gxFr7vzzWcD",
  "key17": "5Az9PApyXrzhDKotQjnmSRqz7qz3SJPR3FCQSkvtLaV4Stsv47q3JVpT15RCh8oSb2KwsBcFJiVjuVp4WUQrc1mM",
  "key18": "258VpNyd8e57miyNLyBMtiAShwva1pexUABq5zMnCbZXwwumP8huT1FspURg5DdbY7aH5T3gLPMXBhhoqt9xuY1q",
  "key19": "4KNqp9FRj5p8zSrWnnEjKJto9sSFRU2XTZr4iTUoBcCNxesr27hBcRMDVGk2ei7sQ4jw953zV2huvVWFEZdJuT4j",
  "key20": "4XRvWi28P2dmynLVokt8DgnV44YcXA5w97wc5NASPCgqaE6tsGnfMRR7ej2M7xnr3wwEA3NAGVg7s8Yd28z6K8Bs",
  "key21": "4hcAjV9ubd9SvVSE3pS8Qg7GLpiJDxknjW89Vs5gGqiC94h6AeyLvaaRjPkWAx4SEjeaTnzDKcM4LiRCxGXioQUW",
  "key22": "66fy9BhQNH224MwDhaFYXVwiQMom22s3WFQy3i7zZfRS9nLbo2d9eEUSejSFgLsmiJ1msDY8a4QLh7ztWXgbT9iz",
  "key23": "3VWwbS15BBNBesRbs3XfQinDPUAv1ZGJbcgeC5GyduhuKP54Qbr5fQH1YgTSWwWFj7ndTe7npjbE5nbLxJ4ALGZD",
  "key24": "4F9maPo4hrnPN9e8D2NndDrawMUsvSD9KpDLfCJWfc5yu5TunrJVfvspum1gWDi287tceqPapBBnskJH98y6x8Xt",
  "key25": "5BjofDyWohAb5RkkEiShWMitLvG9DqViJgfthmdtX8TEhoXkXscP4EyB2oxZahDsV1ntXUMTKCehxxaDQfvR5Qat",
  "key26": "2GQUgfVoCUoRaVBFKMntLcFhqdG2ivdotgqDweJ65GdmwedJhTLLML2GPHQrMCi2QipuJxe6eXpMMsYj9VDsK5CN",
  "key27": "cMi5BLrNf9DnpCWcz426W2cPGFrFBBbdvbtBekRDhe6mBwNsXm2SmYJEiRfqEbyWt5weqAoX4rWkDP3MFE2UaCc",
  "key28": "epKJ9oKjSQ8Np4g7EWUiPGTC1BTdgcP62LtH72URiPFSwqkXtHT841Qf3s1Cg8bnG7xvuLe3q55fnQTjAjXELtw",
  "key29": "5KMD4jefd9DyvXaPfYciDdRWudFjcxtEkLWPbKJt25AXA1sBAQKMxsbLruNB74cDweQ4M1eUUhgBnwm2ynQCJYU6",
  "key30": "4otti3Qw9ajWKC6TPn6MhERAmywSC5P2dtC3NeZJZMjjHYAy5BThLKv7mKVtrAqn3RpqEfXbzy42xugRuzgifW3w",
  "key31": "2VYcmQfLVr55vT6QXLY4LrT5HWjUHm5pRc6UVQfJ13oypjCieooQemVWyqog4UDJvuq96iutPiieoqEDfLyXg4a5",
  "key32": "33mSQgutinXCJCebdA7GQa9EDJcC9o5kjidFEio5RYQVHVWjhnZqZP7FPUdDvBed7PFwosRmwGEoCXcrygaeSEdW",
  "key33": "3SHw61Pch53ieG8H1iiXqypcPEU64DAibkbSXcHRuJ9eYoMRjybxG69ptvVqjefXUHEky9QTZtYe2vA71PcYcy6h",
  "key34": "38wtdPKmeo9uRHQ8wuCUvxBHqWhfYfdi39WhNk54n1ET9UR2gtDo8UBe96GSX2wffdENxf5vczVFHy9bYuRrhHZf",
  "key35": "3twNQMLAp9eBFdFza6CN8gtwMibP7ADrTK475bs1qCtigarp5Npqa7EpjPtZpjsHMvjMU61euJ2o2fbGi4pWWFro",
  "key36": "42ag8gU5Y1dizQ9zuGnAwKGKpjixb9oNHDdtBrXAQxN48AjbGPTq3rxx7D7wVmpDt1EV9ES1Agfdqnpn1R1YAGge",
  "key37": "2iuTVy8yuECc5SLWVUx343bPo6hABJLPetZrMDmYG5Kbda2PgGaFx3A2jk4tj17cdXs7NSkrFJ63Bq693Kh1g52T"
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
