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
    "39FfiKNLYGBp6BqepLHaDHJMSS8u18oqxt8K9rCDF5peP3fhZQfc2NoxNknc7BCdVqJuKEHSAvQ2HEqWufsuREhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8mj912ePHJW4ueL9R3Aic9uQwLMTT4RYPRREh3Xc7KG3THyhyvZaQ4GAoXURWCQY3QfBCqSu4Gsd7qhi9Fwczf",
  "key1": "4AFV94BbppeUxKhXdtbWLgnCWS4D8YkatGtZ2wWzP2MaCc9JNQGqgdSKXHgkzu15D8DHTVL2S3eypT8K7gfCyzTB",
  "key2": "4t5SaQ95EhwnyTjiSSDA3GwMKTdmeVWwF1ebcxo6ogwzwvdZyND6UGd16ec8rWt4yh3xSRs4JdrWVD61esn9s4PG",
  "key3": "4gXB1fsVKebj9rWxQwYu6yTWeEAUQn3Zf1FC3wAm3Du4XQEHiRjLrPHfmuwpKEgENiXi7vq79ydP2cujSVeiqsXP",
  "key4": "36b88gPk2AnqMMrmpVQVSAnX726wcdbiup953WwHcij8QmdJFF7XafmbULKAunoBmC9QkCX21r9KiwBZpEkiXJ6E",
  "key5": "5sZbMxKRwYFzHjJQ3sqi4wfhaf6mhiCvbCiExrP8txz8pM31ZLQdGHaQuxioQjtaioFjuwB2voUiE2pKhG8LVC9",
  "key6": "25DdPZJt1AGzGYLSQJ8ffwWVXs7JinxrGNM6ZzSsz1Uex6kri9yUWCSvpiaPmfbysZTgm1cPa8CosKq1JFPEQxYP",
  "key7": "JpwiKdDJCz84pp68aZuYHTjVqNyrruBj498NHC3XbZUqdBdtPaKS621g7kwpsPfycgWNnBkwXuHs7myM7jM2WyL",
  "key8": "5vnEzfBYLgvU7kibH1h75tMmXCUzpza1fVfi8cncExbDX7aZptJrVEDRHFPun8jJNfYkeAsyaGUk8sewzE6Jkk2h",
  "key9": "2fXhwGqegM1zPkrrxFsPKK786qmQnaJA2cd7ZqbTiPVuCKZKoT47VebBFcLQjJTnB94upLH3ytynbU64TmW1PW1e",
  "key10": "2XLcFbkwLiojJrrnfTd82PDyDQcvh97JhKC43QwdEf2bSSgqTTospvPFign8cgFpRLmbfNAkJvgFBzuEFr6DNEvz",
  "key11": "ETvT2MhdXNyMHWUjR99fpxj15J5QJtFc7ouveCAATs6VSom9bgSwZsY4YiqDwbxMboXiPdpo8Axn1L43hfMxXjq",
  "key12": "4xVZZAfXnTASK4bLbsafAkiBJ7SinbFdWnV9YHZJPC8j6SGugUgDqyC5xMSC3Bhz4k1tELxdo4owGfqgeRTywCvW",
  "key13": "2dxXzNRrVxPeoGpr796qv4ovbZVjDjPL1fdb5329tdyaxxAbAt4LFmAzX1D4ngHwuAxeeCfXqgNsBLwDe2C2Yben",
  "key14": "516feLdCjK1h22XmzJBr41pkFmQw2QsB91n6yuGDH9S1avmdLPggzhEy5gewR4QxA35JhRtRxcnid6V17NZd7atH",
  "key15": "3guKdZ5gCwZBHNBph14Pwbk9zWwZ4kMB694tA29BQ49J4xyW3bwEeu82T14RpwvtNWvbS3RNauVMPYV9z5GwFnvY",
  "key16": "36i3DGTEAjGQ6wst1uTVWS4WAuHf9UfdnEc4LANwbqJkuxPW2uv3G49kzmYKZphWXWMbHYTbPviXH82Zxi2PnbVg",
  "key17": "4jG51rPbgwmjbbT8Kvxd2o1FQSMCZ7t1tTonERezCBtLEwhieeYW1MMZrYmVcJMYxXE4pNCTskp2zPpA17RPuFST",
  "key18": "4taZfu4C9e1UFhdgn6FEMQc4nK74VXmDvNdf4YGAAGCXnaKsMa9oewiVVQqb4N4eVigkYTtKoFktBVPGQw9ELeE9",
  "key19": "3RpXPG2M3bHQkn6zQjKhwXDNniTedWL3iss7si8JwoAV1sBoLb5d2mZgxm5SGZow9D1CvkuCoL97xJbsNT7rJh3q",
  "key20": "5f3u72ZKxhUbXUXrf8uWj6iMrMsVB7k2eJnaLJAHkCMBRR58HxoapwugzsJozGGneaTzmd9SvNixssL715qyF8vR",
  "key21": "bRLFUZXWAD1ExB1EbcYNRZqYmgZyPnfL4tSxW2G7rtFk32y8RSDeGjDhXvZwgW7xG7c5vV9hWEAEVyvvDbGDuyD",
  "key22": "4fAMSkr4TgFVotkj48pCifBYAWbC6TcTXMJecCHT24WGb6hDpuuTiDodXBaJLbu455zjTbDG4KX8xdUuQ8nB8WxG",
  "key23": "3E5cxwDcEhLR56bdrGc9kFaJPdDq82dCw1yDCFScbQkrUi1gEpNB85fECZuoWSSoe1GkoVPeL69Sgr72rabxeewW",
  "key24": "5sAN4JhuVheDGqs7fya5Ssbdeq8ktCZaSNWmJKrpE9m6wLMTFmqmChwpdBLyY78XRvjhpjqoS9rqYnFaqjrTPYdr",
  "key25": "sJNTMKzFfju7bfDPzzkuTEZcBaKi82CgxzY19bA5FiBrWiYDzve4PbfcminsXUJ8fH6uxMJEazctgAjZiDz6o4k",
  "key26": "66tDPKdg8n6bR6nXZTv5MMVMTQk1XBDdMzDNFhSzoekNZFHA2CCU85eMUhYqjtD1MKb5oPwSM7nMmi5ri3ZkSmPB",
  "key27": "5TaKnXTe6P7nPqdZu5oTtDgN9fpfmUobQYNhCV8kFPddsWpwN74fRKHc5p7fXaTLH81xuCNfhpEwAbUoY9FzbRGT",
  "key28": "XqRsMtui3dgJkQffzvfB7uRCeFSQx6JUWfQ1Lnt1Z2e4kBmuVjLs5kLRfy4mRcszXAnWZtgoYkSKZccuQmpF2R5",
  "key29": "5JeCVgUaTtgqfGNhvp5NCoUeEdpBnd9PqnxGLYK5MUNzxLYPuVs7x2bjMHTuCfVLVTkYjgWkPsYHwCD6jfkSybjh",
  "key30": "TuyN88KqrBv5eTXas5DLhKr4X8qdmfBGFdTjoKEczi4soDn6SE9AubC7QFAdjYm8WGbrnwhE5JkabiwFNepvvcZ",
  "key31": "KUrpXLbVVvtHeJWmMHkdL2vxtuN1gRTZpdZ2Wz95CA9QKV8QgzeWPcNgECExpr8rkoEwbeNFLf5Kv9EadYHaAiV"
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
