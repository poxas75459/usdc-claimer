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
    "3KPBd7ipv7w68iHEZiZCHk49H6N6g8HKFSej6LmvGcHoCZ5cX3ZZT1eTVxmtrKjZhTxR4EuYqjVJhpKPr9NXQjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BvAAtasH7q1nmHERdeGb2iDUg3f9jQPhoFXHra5UPvapZGn5dydwnrZ8B8THZRVBDW92QcDhHRfFiEXXEWoozhM",
  "key1": "3b7m5zVQZTtDTDs3E5ZDCfVBZu4Em9UPfC99yRfwFxoLFGn5ecZvFfhKbNxSt8eCzPamcpYpHcZ99vCZS1Xpw8fH",
  "key2": "3bNRvu3yzPVgk8fZLki4ojfDpoganRQeYSkX4vSXabmHKJG898AV1k5bfEzZkSRQ9wP4Brbw5AcWediTURpAaq9u",
  "key3": "zQTgXgKxo47mE5QbLaHwDZg6iq8MqbqkdemkZefUgEyKrRTdWAdDQuZP4oFMHezrhJ5oB6rgLu7J6kkn7UiJFMC",
  "key4": "2AfiC5eUdbyijyKNAWgS5Kt9mw2wkhr8VUiXbCQYeVE2sjQZ3qAS4r8B3j4N1mgSmSfxMPCdZpVJzBAkjjPtpohy",
  "key5": "qStWBKGB55Y157JjThUHv9YvyEiHeSQ6M9ZdcCrrWQCyWDisXVc7fSN8NeHaYog61ELwRGj6rjh1pEZG434Sm4y",
  "key6": "YtLRvj2keqtDAfJ4C7XrCvAHwodfidLRPLbAJxM7kiri2qCCLxEKmBKzTvgUgzrKLbWKy9m2mCKkfUjMArTJRiZ",
  "key7": "3FATzPYUTrbC9ke956KWiETvjr8k3JTLwELKJChPAaTFKdZojN5Zr3xzYmz3LBqDHkuAmMvpNiQmRQYSP6GtFz86",
  "key8": "3Mi6qS6XUkFj26awsxS8btbY3L9Ef5buPSMBDAaY61MuRWrzL7uFmRcCapjHMbTAbfEXAZTMCCoEuWWPY1hY9Yfg",
  "key9": "5FjsdMeaiGkFJBcJyim7tC63hh5oTtHYLJTVYY66FRvLWr8nz7X1M7vtaA4NJ33Y7du2Pqh5XtvLH2D7jbdRPD4u",
  "key10": "h4WtTAvNPzzBe8ogEZfsn2eJPaQvpgfYErbPXYzNv2zDLkL81EcPbGnfPPdPJXAm4Qr5iTNqfryzHbGCjEMarbg",
  "key11": "3bVM25c2HoMb5aBEmjpmZzUMu9qz6J2WLxoXfq8nJ31vi6J76yDeRUncTU2R8Tey8cLXNZ4H4G5PS9ZJcGvGHaqr",
  "key12": "3QhjcfWSTDfYfJGFua8CHjbMTSqoKsq8tieG82r2NwwTZEsfgzSfKhHRcaZw41g6kGjWgmV3NxkpDo9h9vk4hDBY",
  "key13": "3d31QstbWr4tUFn3mVTa5J2mLhk9oQR6ukDENaC3eRr4T1zdLySK2z7uXghE2uBbBSUrEmsoPewkw7mVbZjGcFxZ",
  "key14": "n8c3X8mrngMLUsXosxF1Md2KLzTatfNUcWHpMF1pohd5RuDKtcjYbUsgVZSiGarRxMrsi1TVBNPykc5jwiHJB8b",
  "key15": "39X2mj2uJmAJjBKDN6ozPQqvhpW2yeMQdu7dKR7Cef7pzbEoyuPgR7UTLVcZAwivUk1ZDfrQRQaB83FrgUNJh9BH",
  "key16": "5ab6tvBAjDNYUqcwYwAQ4jVdvk8aeCFWrywrpobg7ncfAbhN3hKy1q3nqas728VNNFQ8uzYY7754SKGTZA6GEJJv",
  "key17": "ZbdM4rPEmGF8ZuJkxHd441WfJiPfDF3tZ9MokVrKmxS76yH87gXDA7hj87vT5XftxPR6PLikmFxHNPQ4amGPBy1",
  "key18": "2ta7syCF7f4taZk1BCqutHC9XMoRRWE2Bd3yw1DxnsPRk9ptpnVhJpYKQADGVUzzEPzNyBparbhumiTCAY1BYMEc",
  "key19": "4SvznFyaJpn25XoypM1wQvK2PbvhRsKjLQ5wZuyLorjXTp1zwpYP7whRwPCy7wQNrLBftnSC7ouy1cZtv9m37yWL",
  "key20": "4iqXUgnKhcE5C8pBho2w3BVesfgbGLejMGcV1FCS5rzamFWsnZXSMi3cm7HkUrv4R2xwAJ5hMPMVBFJbnsv9YidQ",
  "key21": "2TzcM6QjesE8NvqfxmjTrB5TNby6Uq4fgnNzxQE8rvcTok29jGcbaXwfzp43WVCGriGEHYmFUXdghQYA6ugBFT2n",
  "key22": "e5KztqybfTPftfBgD4xt5kgStzcST6nmRWe5vXHfjxVA79htqr9Uh64p89KAdQB7uk7scQdcUhupd9D6Q44Xvti",
  "key23": "uAiaDUsAzw2Ke67M6BjvTYhn3czE8uNCLDwpdvK9cqkXtstyhaYTtBPeLQzA5KNfuKjRrGB9NNMvgPeXWDo7Ztm",
  "key24": "aneNpzA6wtd61Cpdvg9WoZsUcovDaYAvE79iVPuBujJD3sCxb7aJUVEH4pr7siaWSDKbpuu8Uv9YTnuLZ5K6e5P",
  "key25": "41D1ShC2cRQySo82kgPb9qWQkmYupZd3YCQdeiqwpzuutXrg53Myi5nXPZfCexPkUK2wfDvrZLq3JyARcSjSxbzi"
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
