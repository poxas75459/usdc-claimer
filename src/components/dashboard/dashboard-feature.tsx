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
    "5LCvtay9qhe6b4uZHVEDJP89FpGcb4PVdzKPZSfHDAbPbbMUr6EGzfnZhFAnxGnYBC5Pg1TFC1XxKGDUkj9cwzFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o23zJaYMnXxb6LUGcieo73Eo4kGdsgeXikUQDSaFh388PibJrFZ6N8d18PvSUpsr71bqRuGNFDBu7LXaKEUw2TL",
  "key1": "2zcTcMjcAx4hTJXmj9Hm69TXYca7mXXTVJ22NJEhbaii2oDqvaBxmZUd9kNR6Y3BzAA9a5JUXdMWBUZGnNCJz1Xp",
  "key2": "3JpHnbrnTGaDZ7atKSrJoELzH8u5pf6ExixG2eVv2y5YiwfQyXYL98q6pwVVpSSCRnN9vG5dPduXnvSSVgtvnmo1",
  "key3": "4SHuR7hp8cC4wEL3UBuReVVfMj8hHJd32UyjFWpdkkD6QvC22c732PbTfL4YLG3XVhdCpdz5EyfNPMnw12L56hd3",
  "key4": "5WyTeL7VSNvn6467nmVUQvPdjyZzU3xbd4iDs6urYQR911KhuW5sprPGrXhnxVLMrL99Cn48sVtS2AqqEbqkJD8i",
  "key5": "2gT47JBWCvqjBmuZgV1U6Ugu5cMLpfmMLZgoYBGv7VoA95jDs9cQvL6bFxnsZn6HS3V1FkutYW2DgrfQ8mPFxQbL",
  "key6": "3CjvvgRvM1cxpE5N5Jgfgurwg29RovMzXPtwg6Eus9deyaXMUfmUcZKTJ289dotSu5SDyUe4gQ7K1VMvJNGguYSH",
  "key7": "4frbxgUXfeMDaYytXUk46813WC3oUJZcXWQvqtvkbjjrQoCVWREsSK8j17cvTETDdUG7ytmszzevfwBKLJ2QXmu5",
  "key8": "5TmMskqBjTUFetz4mm1LTdiirs4KyikVUL8hLm7Y6BLXuKHPvnYJyHMEM9bh9ERJwNv3zNvfJy7KN6RBc2yFQr3D",
  "key9": "42TZaSZ3v1WW6STiarmAtB9fap8om6b8Ub8Gx8nxdKDmd3DMLYQLNw95hPzjXXNCBzJ87zFFcWFhbCtDDcKynPco",
  "key10": "5Fm57naB3nvrHg8DuDvP5jkDt3NKhU4XVZxj1N7szYkxAirAuSCicn2GXbjqfPL71zkuUQZ8m5GMfRj6FFKMLwFo",
  "key11": "2iieGh2GGuKScngws5KroHRAtvjumA91az1nEmDHVeiv2V4dPqmUQR4caBWa9QaWQbjHKYWk8CSQ4jxhRzdoAGic",
  "key12": "ihEg6w546uqePC86UokadWMB4FkZVQ45o19usrRa42Q6YYBc7XwDV5Ac6DfY1WWq6fPFictYmJHtnVPWWrCsq16",
  "key13": "2aN18RgHW413ZREJ5vWfbfDGzmrYYswf3fayzA2MkPkkF3wmBSPRzKVGsUapnojUvqfgMWffzZzoi3K6sawic47K",
  "key14": "ewu6BtYVDCxA6CPN7sAmd1hpEubWcH4GENyggrpGbBBVHpKPzKfAdkLBBNrBKq73id1XY9edqrBSEuZqJ9q2feo",
  "key15": "3wCR5CA7XD84mWmmC4vqJRLYi3TmJ1qsdbJrfDTsXhF1r1YAaNAVdrsx23d1ogPBQxGC29RRdqXTuNxcPGZWMMt3",
  "key16": "49WPgkstDPp2RHPinqpBbhtyeGFn1ZRWnPD1Hr5JmAA5hW3DzacbFthwpXvcBkF1UUaTxBBnCUCxRCbfVp44Hbns",
  "key17": "64sn5u9SEr7onZFwG7pJE8AfYk6YtzXMAKAVrqob3dQ2QpykRLnpUUu9VmWbZgn5fshJwoBDiGrvwsfQJ5iG5c4t",
  "key18": "5ziXZLSrKE3zwdPycrGGiujffZFAKNtZEpEBHQ767RH7UUWpEWLCW39aWWTu42SeU54rXfN8FdrWWTbyd7HyVZ1t",
  "key19": "571gnRLybzv9hDjRAtjrq97cZTaiPzt2APt68fyu1LnZnhBZsAr1iDAJRJEU6V8dQBthRyTbmWRHTxamkKVb8HiK",
  "key20": "5qGzqh86m4Lw7NVGTf1jPquCkBKotQADAqZNCDRmzVaqy8rLB9fmBvfHzjQ8snaoVqjqi92EmELufput2aFDnm23",
  "key21": "2qjtebz4umsfWTjByuo2kMKqtNwHBbyFd5KK8e8dhV4iWDr8qkhx8o6BnFmhSyudP5THbTgacRFvxtsCGQSAhF4x",
  "key22": "mfw1uprKqHb3631sCbzJHnfFTHRaNAxXMEdThCFZSYCMp2LZrqpx68KB9PbFWDLGnV9dT146urDjzcAbj1dcVyr",
  "key23": "rDvTEckC9XgBxrp1iXTPU7ukoiFkSSaA44bxdsGW4GdsoDVYrF5MpdsHRooeBZCovWsFDXebqxpZEnGUMVyueoj",
  "key24": "3YsbQ5jTbRfN3Kga3YGFkRqcDumwekdNbRXLTBQ2ChMX8P96wX2TL5mt66YxMnzANZHo47jb2PvKvRmJ1Jt4DxWb",
  "key25": "38yR7SLrBRMTKpnv9qhM7FCBYV14DB1kWvAooZW7Rtvg879TZgBNnKHsd87ukUwJ9gw6bNma5457zpmD3tsYBZVA",
  "key26": "2Hg5uYYZcuy9cvJLn42dRkP928XnvWXsipnuYnsDj8DNTWSQZra4UL9jyCr76G2RY5envsAakziBN4fkAmrsaEa8",
  "key27": "drmonmeWbJrzqXER8Ab6DkVTjDE6fdFqFcsQMXkmtPG1pdBazFXxjahALTCv3QpnzQegymgMgmeNoNRmPDkSoyk",
  "key28": "2FddyEjUTR9B87AGuz5U7hxPL7sFKa93XbnDRRSbm828KyQ56DsWWcHuCEZKZBBbcFY2T18gtDvcruuW6hfPhRDu",
  "key29": "22hsxTMkfbXg1RKArgR1vE83xNg8PZrx7VKjmtDkGWPTPxkyZyAEojrtT5sBsatb71zbxVnjf5fDqkidTZ53ggYu",
  "key30": "4Df7urCb4W5BdroEhXtT6RSN55eX4uJJscMK1ieS3RBRXaHoY9iZC8y3AJ8hor1gT1zGWhg77DvijXXUVUkQ3tpV",
  "key31": "5GJBkgZRP6Pjo7wimduecn3QJxkYTfYvVwJ7omCQri9bomwerKutNkw2WSduzTWoZdHreLtYzz1v5yBpBAvhHFHf"
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
