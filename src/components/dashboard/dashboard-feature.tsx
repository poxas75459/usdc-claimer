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
    "5EwBB3GEvh32pqfgLuFzYPqCvMZzd25ShKogbQK8RRbpQZy7hmHHNvhfgdsSPXrVhQfWFwBUz5a8EdxGWTDZjkMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgF53yEY4wKxScAbfj7CnCVxeba87cv7xvQJ3he8faHfkc4osU7EzSQEdXFGDuw5GNGQwvjQGe3BTkSmYWLxphi",
  "key1": "4WYuQ6s767oSBJD6c7g3SZqFuaKs2Ui3cuJ6BtoNSsP8nKPn2h5itvqLY7G1gpaah1C7BQi2SDYboBBgZNqa977R",
  "key2": "2RdwrENtqJz534LbDEwPSdMGmGAzi1UxoQTPB62VezGUpnWxZcaVgYs6DUR1Dtf4E5KjEyHdeppFeCJJmYR4a9r8",
  "key3": "2AXn7mjjZpE4TYguY3DCQVjUgQLViwsf3HB5JFntTbXJYH63Qe9445VSEeYuGtUhyjYowSJq1cDUU9soAUcAbtke",
  "key4": "5QfPWYfG8etcwXWvborxG2XHmtquwJCL5ydfL5kPAtFPwiM4mD2ftN7tvMBmaPXsg2GGvs6rmStyoPL2Yh4EKv3E",
  "key5": "4aHTeUraurVKgkAs4o9zwbErHyFzo9P18e1mHzLx6DMYkSPCeoA9UW1ebRhq4fLeJFkFmwBGzEjJs6Ybzg7ftajm",
  "key6": "57MZewKAotQpTNDKh285xhGhNEmnxEMQNH3Qk6fqFCoJqBZcr6ZbBp75dx44fzRqJS6PehvMW9Amnxy1GDiDibt9",
  "key7": "5D1F6cuFX9mfQCNnwjZ5gbP3njJ6Q6UEMhvvDH85wxyxfmGExGMKPBatrsXLWcGKAFV3dSKn3DyHqQRPHTMCGJd5",
  "key8": "2ZQzx4YmcJiPquRWYKoCDZ4jYT18FguFzQyfA1tNibYbWDwMDfDseDEfqknqKSxkTWtfFrHKZGMEE7iJ2csJ24w8",
  "key9": "4b7LT9x5BXx2MSpVSoRBQ5gsgU3g2rwgCF7ov7KVgTeS5xY9k9pbobovbu6b6kGCDztyG1eergj6eyfmCcdYmcrJ",
  "key10": "4XvoiL5tCPvM5S3Y8LesebiMzyh4a4ES99pvwootaf4265AXoJNPeVPwWq54LUWtfcMUfCSewnLoDKN7HccVsh6a",
  "key11": "5Gk5QHkVBhusWUcgwi11NWX2ukwv1E8YMQ3t2xP6JT8oTnugzF8XkRwzj7HzCy6UbUmkAsjyY5vx8cSbF5sZS7oU",
  "key12": "2r1gjDqC66Yg4FtpGmyycPvgqQFj8pGRcTwc2kjgVSxP7yPE5szt5maiWTBWcU6kfSQrTNViQVa2vyDmjMkiaBwQ",
  "key13": "5du47YZDNP9cEcaqr86eWJ4z2xKuYqWh8hgvZwNfj9LENCtNqugjW8YooMQLQAoH4w96R57HoTH1DiURKSpBjmkW",
  "key14": "3DcR7SdcgYocits9dFBG5R5NDHMyy8qGN6Q7fqeVPViasVKesmyKg56zdSgriWYJDKq8tdZrKSFDvjzoRxmj9yMU",
  "key15": "3hcafkW6K7q7wx1Zjo7KPWAHm5TSrzhmFne2frUTKyETDeaEvSwJMG2XWtQ7oVDXAAEehPPQaKcVVB9wd5APB9BK",
  "key16": "2wTvnMXyRYCTtepX6iHZDM8X5Yo9CodKvHbo3nzUDBMYGv12DDD9gSy4946RdvYHXiYAsEau97i92n26cbjiWcUc",
  "key17": "4dhirx2whCagjqQ8qApiBii2MVJyS1LpQjHNmnyhSKPkUkByqkFzado1PpNTERCKEEYwmxrmXgnoVLNsqirJVfvJ",
  "key18": "3zMg6STqwn5DvUitezJbgS2JXdTAhEKXK7NRmyC7x1mwqiCz942GmCZN2Z2U8CKr6bGovnCZzzN9ksC4iRPKerL",
  "key19": "52Cbumh2nX1HbLKZqV9NRKeBid9FXGChHBSGQ1XgjDZBKFfwKNkCkW2a42JD6G9XZVGZQY6yhDuzgUcPXGXeiWtr",
  "key20": "KpGKgo4bf4RavtaEUYHqZmW11wcCbCtD34JHq7v5UEfYxFzcTQnJfQB6m3Pote4fMDBBa2xdpViLbq6AuUrbi8A",
  "key21": "5pqa3BfwHuzAfH2fhq76jXNdsgjrNmTt3PoCYsAcYyBG6DjiYXHSVs5MbgU4S2LHWuiZ5m8sKbnrWs3ohbKVwt9H",
  "key22": "cV8o9i1cxN9WEsvSztsagUyPDbSpNDm8Lsm6XMkqyNivXAsHqfGk9pV5FV39ccrsmEm6zBHdmWWxpwMMJJoz4cq",
  "key23": "74LywYjL3YrfEXEpes9XUnHFTkR7xRJhjYGx5CyfDPuJMg5fC1Wveuw43SYDFEio5GKaToTXGnPmS3hwbVizHPb",
  "key24": "5oqbpCysQTwunWuTo5Agcb6mnLzZZU1Sx6fDEaVBmvDQCtLXcXjppoco28tymqn5fkvhDymkSUoxGcMXFwSBeCX"
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
