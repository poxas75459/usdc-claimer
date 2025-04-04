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
    "4Lb2Gx4s6eDKpMtEGN4iPvYQ7HtwPgTJkpbef3BLFRzZxDiuCBVJJWpB71X3S2JJNqMCZtex7EPcT4hrJ3Xh3e3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YYjX99Vfd2R6DxrUVcL3cxsbyrXEtt94UXt1QvkdNaphvLzKrb3GDUYxFT48MfxaMufgqRpneCSdfFW9u9yxk74",
  "key1": "x79AqUv6jNjscFtrcKhrGacaeHeMFU5VoPEzbUK86wVMmjUBAM6WFtqhpaQYPugcRfaMf5TyAm2Qw2vtHfkLE6V",
  "key2": "4znPvZs18mUYmfP2JuLKagprSwKddRB6BcTNKuef3dJYA4htSmLS8QXaX23P82djThnz6XpEgx8eunnuTLmcXTBY",
  "key3": "5RzXFxGPViwB1xiTybUP8ocN4yNC8bnhBCjNfaspKVREtoygvbaZ3AJaLtSNsNuF3s3y1BKvy6DWF1ypL3zCexDv",
  "key4": "4PNVfT8GQ8umxSMDNY8CbH4cMMUVAeRVuhnHue6Wc9tTxNPVHqMafWhtUh3BJkD13QavWTVQ7s8E1x6QNKYesbgB",
  "key5": "4mNvy4qMGCMFJhJgGkSy6VLDccvp17VyvWVMNjZzXKAPGfGgvPE5kLRKyAsw62JCMJEEkRwUaN1F5QJGrUM4t8uA",
  "key6": "dckeEswsFp9W2BhNXdenBiNjbUH5sekDrw9njdVBgpizNUdXJV43rAJZxU74kdTVs1VR8n33dHYGCtwL1eA5f2U",
  "key7": "3tU89yVeSCt5CjaaYUBh4Q15kuarz8cfZahMyrkW7STFBbEhgaq9LoqU9VtR27NwdS7c1sU8VhfpKvwbjJxVhwmd",
  "key8": "5geRPwqda67UnoDXZuuB5AvB9gWTyVbH4FZuVtsmdzosncksy457oyFaWw7EiRuCx3JxnDpXaJbUkWpPpdyTnFCX",
  "key9": "2o8ksVW5Qyp94FTLmkigNq6LDgSfzDUkk3MVF3zaDPAk8vcQYToKcydEWGQzJX1ZMoHjF8L5S71Wi16GgMfBjyQ9",
  "key10": "3HQQpnutARJxUYtuVyAXUAT2DXrvD9VzKC34HhS1SqKrKThgd8MRmiXMmk7pZiynxNKnaqjFEF4doWcjZcuyscxa",
  "key11": "jribArF7fXhqtr1rmjHHjVP9KnKCTuCDqoTqWQq1jsthm4YPGZjM1epL9QCZ9WwWNsrk2ySDUhXbirkgEuVJcHg",
  "key12": "323S2kt2N6p3UoXTn7ekYbxDt3n9BJaHpgQTArGeBhHEdXgHGiEUZWUBaseknoNcHtdnT5ce4z6QZauUrF7roLWo",
  "key13": "H2CaR3yhntX31NVh4c3s5gT65nvi9bK1cEMAezsLVLnxcRgHzjFNBTAqNJRzdKzP25zFd1PFst99ouxyhvxJnoD",
  "key14": "9ciB6HJTwsYd15EWdvd7k9NWegn9ujpiVpYGDGD9y3LSBJvrbjrLzaZK468RyBxk7KUUvosEs4SdM1EqDEenDT5",
  "key15": "4RdeNBAYBHWwXttZMv3A4jUP23X7VnqjHKY8yWqPDpBEJtuK9eD4g5JEXTXdd2Jvgb3z2cCLdLHnFYNRfhMX1UED",
  "key16": "2iJaidicsX6DZz9Cy7Gr1vo7CM713AjGCd7HpWkgGuAYgnHz73ziPFDuxk1khXUuP6mcB1KKvMuL3LxqHBWpYfKv",
  "key17": "39QB8WmNoD4rta1XQoUB5YLJumv4J3Z1nxfHEfevHaZvBQMztNsy1Whh3nTzqCFhxus3ag3LCiqXue8JAL1JuLy9",
  "key18": "25EHkvPkRBkjic2pqtbnL7uh5xZPVoZtLBeZ6Uyo7GhZLSthh6ps2YpXATU5JZpX18m1hKgUKDV4QEmSPDjEjLPM",
  "key19": "31UbXpx2C5LcQVEpDZDpijz7fqXPeBAeCxPkm29rhTByJXmKpRdaqXVNV6KcgKKiqMCziTjmZp7bP59iSkehXUWG",
  "key20": "2u5rhePJCWcicr6eqPndNEqGQtkaTZr3ywKrf1wQZm2Nn5RaKhjEM2hnpEUQkYzGmzsDnETyy8HP1j6qLL5PkTee",
  "key21": "5TwwqfC8h65r9s53ShWKDjfrDUkaSrG5B8ou4rrJ174umyrW6az2oHANccozzDCGM4onowm4bKSdL2rQRPvSX5v6",
  "key22": "3DceqsPuJgErhwfiL3uWAG7oAPGy6Yp5RwkE712pedt84ASSLUVF78xZc4A8HQQwVZkXNAv5xRxCSsWGMBc9GAck",
  "key23": "2HnHe8BFx2SFQhHgXkftpFCfCWuAzkbtctuKcVhKyksUJzPicKTTLAVg8WzCXUp7HeM8gZb7bWsohx1PAJd8baCw",
  "key24": "38GKRwbZL67BWo44ddAKUExhZsooeb6pfJtRXxF9nnyruNZiofeSSeY1QMTTKd8R8AqXjFjKcNb8dAgydNGPhvAY",
  "key25": "4yv295hmpex3aSgwJxNH7y6Ex55sg7A5nVVVp4iPcM86ahzXFzfnGfQZ2aGdVnfJiiLgj16sXtnnb6x45rQDQ1W3",
  "key26": "537tQHiQ59TdeRWjTgKMKWCvqVp2S4bQvR7Eg663oSbgu7665nEEm88kCtZr14DqXEd6aANprYN8qHYjebjz9Gu8"
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
