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
    "2SuwNjuhRZdqURuvWcWXDcNGUnA9FjkTpACHTWoua2yqyp6tQvbfnamwVGqRLJMKXNTDMPaCzVpY5p12J8YedB7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSgaS3xC1H7botpFUxDDZCMtLDN1CJCSDZBsAmpsxMs2oZSSX9nCusdgTtrYKKcEHTKWaqKkauNbesUyxyvRyW8",
  "key1": "3btsJ7NrgU6Cijf1UVp458P6FKQPDxw3fpzvgEuVJ6TkAAgAbZ2VT8ZgiVc5DUDUDJSMRHtBqP9JpbPtgtvU7EhQ",
  "key2": "3PpbH6kFQ6HjrJUgz8B8oqvBNU7e9iYX8aWWdgM32FiEdU16AGK1MC4ZifWNyZQf6GhhVgPeptAzPK1qiDfHh7Vp",
  "key3": "5ti6Znv9FZcCi7NNYLMXW9zZry1C8P1Y5hsBdrsdM7DN89tvkYLbtbqNPQktCag5M4PWRDGa62XXo8KTwiNSJ1DM",
  "key4": "if3ptV5d7iiKyYKNzR1vT4iuNERaLGENbySkwKyZDY3Fu3gJsxhiGWauDUUiyNFPRFfV5jxJ45KMPQgkht4Mtzm",
  "key5": "4KXM4kBvPQ6f6oMWcGDpaibaaRbLYjhUX6i5rfqDSiUujazFoGJ6pQWSq9hqxWzHkui9CcgRJ4VNEwUcpXGYbthg",
  "key6": "zpWcEUnH1vGD3BCW5UAWp31sx8Wp3C9o8Ud7kEM275yBf8VeBXbtZzxHJ6vQqn25uWhEuZLTNxAfvw6gVHG76VJ",
  "key7": "4vtW6SBdJ7myuqX8LKtUnQitdDSRuqojCukg3Y44F6BkipcS3vVadn7QB74MJBA2HaPoxZNz3jxaSrwzLZm6ifZ6",
  "key8": "2cjV9Q3dJGiRWWPuL4SRZcupRd8JxVajNuqRQRxGSZrSTyGEKnQm752bgbn1BMq2FNkuhDmLc6fxnjK2xKF8kBSZ",
  "key9": "323dfnTWiwshmv7BW2PQZfTxrMU48ixU1JZQvZY1z3kuAsgmHyETfAqC18gSmxYuvqoowWbFqGcHzzBR7WjpdedA",
  "key10": "4pV5Yo7KBgcAupQbkWg9hBqWeaGa2qNoMAGxDTSQ5ud4QKtEofMWCAEfdLR1TKj1JbtK5PuM7QDiBbRq9fQ2H2M1",
  "key11": "51DAdsB5V78nuRvHYFBhbDjSbVZhtw8A5orgBk4UF54t9CzdrPf3sBRphcHcDMXbH7kmxjBkkns2A3qEKX86dELx",
  "key12": "thNCHpajehzxSbgkMSLNpNms5us35hpzeVBaV6iyzCVEqJMyWdHTaD2quW1WkgZg3a3dxV5RCSfQc11kiABoBCx",
  "key13": "5e98gzpo93jKAjmLoVPR9o1ZVgsbJWoS5MFuQQJPK4NPxWoCuG5S6P5FmTwGzXtzkRwGh9p38GhDgkWpDmDaBCK9",
  "key14": "pRuV2d1yu6nyGoGF5fpmZicpBydmV2oc9kYoMxgPAkEe74qh1wLZPGtWUKBYA9K6jREnrfM15MPrHcmwkqLA6PK",
  "key15": "5TC6oCjEid8UewYpoo1zXeMbdwS7oMcPs7SxrUegaB3HfAPCAod5aMrPqMCufGhVQ731Wi6NBnngpDaFhNBz2cwf",
  "key16": "qWZ9U9ncgbFTezJaYaGBoGFGv9EwMjMR9S1NrwtA2pNPc7HAZAhAp8U2kshGvTo4fMbs9dXnoGB7tNMfAGnTs1U",
  "key17": "2mbqFZQuVdx47WTFeppAUdirbrVF8x1TZsMwiaK9g5Zn6dQV9HdVcfgY47pSC1nRGDDnMeJDdpXH7r8DSBd7r7Mq",
  "key18": "34zudgUYexCRY4K6DQVwpUpj41ch4wtHvNAQWew17TJiS1XuuLoAxz3eaq7DydacKzfFw1uvEc1S43VgedBUjnNm",
  "key19": "37pTCwveBT9eThrpPpD9rUz7nGY7vMpj5AC5egnnSzESKhqqnZ2Zg7ZGiEUp62PvgD9aBfppfAvUfSoRLLT9efZY",
  "key20": "523GNP8SyjTQSLyCwmMykL6C2kx1fEEoRiFHx1R1z4jmxwtyKczNRi1VxGV7WG78SutJwCHevDzJ4hxSnTJ8RfCk",
  "key21": "4T2hQ74wcPDCyZFr3VnwcDt3p3RRjQL3KjxJiZDEyuQzFyAW3Rs95DhUAEdY6qGHGYeUzg2ZrE8yuzbgMahvahcW",
  "key22": "5KUGGUjJsBsSYGWZe6fdrrcPy6JN1VHRpMdBZNCS9FM88VXa8iWpkYFKxvKbK5UDA1ucK4x3kK6SiuqgJ38GZLrZ",
  "key23": "2q8H5k2NCgitNKJVKSRZiocHpon1APBoQ51JWRq5SVqV4E4eoURKLKao1QB45ULHAH5NdzHqGkwZkWGqBHGxSQ7U",
  "key24": "T7SDgkdQK2iuv95Yq6JuyNVWeV5B1RDkjVFbDEMmBqEqhGC3si3du8C8JaUFCYXaqmzJP5AzKGtU9a4aXP23Tbe",
  "key25": "3JrrRFbFkzwKsSzK14psmCXXDxen5fAovTgMkqwb9rD8wRh978phQrghUqZGLeJYzFQVPUShzGFkeQYwvs8qux1i"
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
