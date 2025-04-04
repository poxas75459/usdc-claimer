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
    "5JVSGaM8ZbY2vA8FwQTF8vAw9brfX3c3xZyDhHHDzMFbs6Hww4Aafepyd3tRL1iK2nHVuKTNPTf8LLXBuuQ1CFDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3t8HrNGiz2Kwzu6TWq4CGCU2vovNA2PQm2QtbRDcGouLk4DGpAMRWcKsTz14GozVpQuUFpbyB7gSCgH6Ky8NzX",
  "key1": "2pp3VoeVuKoSFtCme6KcwYpqd2pcCokC4LAhmmipF6Z4Ekf6MicBcchGi5THCijGNraqBP36C6jHTiaMFHknc54L",
  "key2": "ZUEeaSWMq8LqfRgFFnmf6q4YZRwEZXM2swZomZUTPy3oGdtofApDJXN6Nm7oGaWyGaV3ecYCY1ftwg3L9L9axV2",
  "key3": "4rbwhUUNhPMJg6jCMTeZGWC3Rru8xJ7uhxhJA4aH3jsUdbbwLfwDYZaC5XCAUuotV7SP5JepdKE6LafNsX2jB9Y",
  "key4": "2KmFCTCKztqcis7BsXa2xFP6m3vDdzL4M2ZC8nhnSjUX4GTzb89cEG2GFMacqAjT5CbyoRpSoVCpbfoa7AYbKqhT",
  "key5": "9rnwm91zFmto4VGduTdpqh7HfysHDEs1cB6ZPfjP69GCaVCXmVfRuE1tZAv6VxQkQt4w7uRLtBHQMeT1USCe7Mn",
  "key6": "3LRQGdLta1vRgQKei2LQbTXJzZoKwCbtUWumouFNaQsSSBp83RskzbuuoSh3n4G1e3Af4sggzz46KABd39rV7Arf",
  "key7": "4V18x1XLuGoQzyErYFFKpRGtCDkac2ok2iif3EJCo9VzMdSy52WgWHQcU3bAneta4QmeGdPaqU38t5mzJ8V6hp6D",
  "key8": "2itStMQNR4ajeSVurZDCBGeLKVabJTNw6BpQxHQwZqZw76roeFur8yyjn4UmeDHCqVkUUQXomL4nFg1wNEemvxG",
  "key9": "2K9Ba5PRnbU1WWqZPCRSFom14RWmiT1m6N22LbSrCd4cCpnpwL1MiTqBH8xE3NxZzbhvhsMRxknds5uJCbbEPW5g",
  "key10": "5eMTVaWobWh2Tu1miwaJFU9kX1hBAUqQVv76KFsF8nKEwmYXLNarbfFp4UMovtbSwHcPXu82UQETDjHC5t4Jpvud",
  "key11": "nueFKGcfvH62ZKiEMGdc3qPD52ewfGHvp815abVL9a7pTn5Fi1yRV6qPHGiWPoGmgNYvdKqgLSeAspwaGMRkSAu",
  "key12": "4TJ717RZyuNxUdVGNJkptNpNNoDrtdsU8NXb54dzaXAy55ffSsVPLwaAuowjthPhg4b9X4y7tVGM4A9X1PKb5919",
  "key13": "4pCXHnPFyg8P37yTsYCv1vQtfpkrfi3GQQxvdofCHWZaf4Ee6SzRqkX5nccuJ5drBTVn8KhUp3meV5GLD1sFR1DB",
  "key14": "2sWLCaufwjJEnhuCyC9XvJQgUJHqoMfa5YF7F9x8AcQ2dQCAyVRsAPwovMYGZ5yqQiR5aDJJ6g5kJxmgZ21v87fe",
  "key15": "2TpFFY693zutQM1BEccajXvggweZS6dKMCjnGp5e4xBqk8h4o6A61jSWNh6XScSLzoxr74RFxVgsdhNtqzXV5FRa",
  "key16": "3Zn1Y4JK1HFMENzd2SfjrJnkm2pDTBt1vyF1xp2ZjdeKtZPqu6vvWEp7KMpsccwKwRTK54yrr5xt431M4ud3YunY",
  "key17": "2a4Jncs3mSMvZjgorAqSDVv3pPC4kFao78N7zoQjVBaTLaRWgQtvDHnjfZMHQXage364u58UPVdneFFgdjEWCA7S",
  "key18": "ELmBJcXxnZ3gcfyewGgpRpFGzewRJDDmPgQDZrhUSzcXJTRdKPPh8khBd3nQemhJTYVSVcxyssmNLzDg2Co9TE2",
  "key19": "GCoYr75RdudjDRtF1mBmDrW46m4ii89iv5cqFTaNSLD1jP8SRjGGCgzbiX4k9x6FG7ZdVujLincWoxS9Wh7c6YD",
  "key20": "33A5wqkNfnTQWB2Fi5ppMpEfXzfGyJeFR7axSa1vxunXVBGwY2oLCRB16485XCAmWaYA6CnpesTyT3bCBJAmkMeL",
  "key21": "4dY6abtWkRu2r4hiAg2Yz1sHcFbhh1jkf2zsLDc94N724eTHLgwrReHfdzyhc5AHNJzPPGvHWJY5EiKPHrkrPjdF",
  "key22": "4D6BotPjK77NSTzosNC2fqfGn8oWnH7yto5qbEFoFw1tUViLQnUig1LXGfKv27MGhXpojnAZcqByrsGdgf23javf",
  "key23": "31DYC6WjSPNhvspSTCTVBTbdafVGmMbqCYFuhey8gtb8nbqXN6Rdc457vasHbSd1Ps92pwaHrKuP7Hvic5efMoiS",
  "key24": "4yaRenJaQixVeivoQRsdmVGYDRtZohjQ9j4CDL5ru7eHsm9hPuQJp42m7evu9W5gQ79hjzWzeoi5ZE4Go3gsQ4Uj",
  "key25": "3boeKhSQ7soR3rbpdnBitVA4vZ1XrZCGS4X7Podw9cFQAM6pNxbSVpo7iuBCicHh5zDDt1YpBwaN4eFCBVQ5vdeU",
  "key26": "3pKmqkASTvTxA8efN3Z4ucRFNHLiQSinhkF8ZNzMECg15vFxvxd1Q96E7KCSYZjdvXPoJ4Cc4FP5oC5qLnARiGYS",
  "key27": "46itQqdiNSaZY7CssdjSuzhpojAo5LFCJAThzGCF6safhumm78UVj7RFrrxJVdAehUCb4qT4TGkC8MNWCUTPTP8r",
  "key28": "234ncx6sh55xFWx4wN73a1UYaBnRJNsmqqobgxFQu42k2ndzthr7wCii61gTbbshghA2caUefogvcUDbynHYxqPE",
  "key29": "3dE39zsaWA48xVjFNMTqUNQuMtimEUJ1FzfpTjEwzDpLNjkSDKNb84wKisbFsdoc4yd9pZDjok3wEN3MpAvKWYY8",
  "key30": "2bkcEzDyEWHdcJTR2nopoNHC24QjAXdQLZ6fdpdqtX6TkFJCLmqfz1p81ZNTgPPw5gS55wxH6SKF2teqa3y4M5Yr",
  "key31": "4npdtsvmiJb2trm6azWm5B8pvSMpChUnJVcLgYYfBXMNq78bGorEzNWga7QThxiKzEQUGF8nYJDgFe3CXxgd8Vpm"
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
