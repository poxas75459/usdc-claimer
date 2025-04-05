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
    "5xnmVMECNvnGocwGAeNsQn92fyy9dXANaTF9VnAogYRnv8pBcbq85Gk5mg822r2Si3K5BLK5kaGkkJt4f7FcY8jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rJfDj3VaXWa3i5EbMTzKfp37yp6aNkjoRxwGGz1vTa1sHjrcVEVK3MZuZcCtPFTdnDY81ESiTgAebg9LbqrytZ",
  "key1": "5h8PBukJbsirC9tZworSCKfckgkKbBAe8TuxANNbeBqjTkvspmiJmYjbDC6pX2mVdvAWiuXfYSDhLtn6E1j8y2Dp",
  "key2": "4w4xbtFXin6H1gHQofGJY9HVMkfNkV12UqetLQUAqzXr1UBAT7WJbdRjfzkC7tw8c2MibSzvGNfW64CRftd6iTJP",
  "key3": "4zTErY8B4DcA7JY8iyyHeJKTTkjJEuCuPzS4zL7KRqWPghzxmawD6DfDq38RUP96Xc6PWuCqJmEzirwr1w9Lyvok",
  "key4": "uUmtrfT1mqqirRjtSqCoeDxJMC9vKxue52mvTQfMrTgF1p5Cy4XuoGG1KLwcDg5K3yDQFDY49KvjaquV2hdxQQf",
  "key5": "2vprWQtyW9ZMDZ54WNTMfeBhxm4otYZCwxF1MzfTgS2uj1mkn5vXV82J4HPFYPy5m64WuX2g4AuDVocddZzQoC2r",
  "key6": "iYx82rfRmbufMTsHbvGoRvQXbaKvBMLso9afNoxKxfVPD6pyWgbvsffefMgdbvUQAPi7CYbVu6i3qpzqPCC4aLC",
  "key7": "49WFgtPyYX2ZgxHQ1UfqSXKvTmEu6CP9Um9uZdtQifJvRdHA8Tk5y6Wso9tr2D5vNKAtV2hrsgo9SJotfFmghfQ7",
  "key8": "4uvk9499fvmmwSBhJitDkrpGgveowxym96Yq69mjCweNiRctRgYD3zE7c3ExHR5NTh9FULza4xhGpCdGrEtAWgPo",
  "key9": "47Hvx2jQNwbXKvwnFDAyJBrSepPyJNdbkstHDgo9b3qwKuSESM5g6RGfaef7LLU2dbM1Ps3TQLN8uKkXk7mSgGyV",
  "key10": "3ZJyR7M6aHGdWbgzsbyc6tJf2K7USWzZLwkswN5uDUzmzRXvgdxzj7vBuQ2pYPATpo1gfixtZYcMusEPM1kXvTya",
  "key11": "4HXAfbUhYyA2H3maHgZVHbkYbhM6bDpAatBJaBTwzdqNkTp7PQPGYNgTG1QrrNAjYh76tioWYd9KSTCbu2tHM2dz",
  "key12": "3WM8uALXWUTeduJPVpEN383sqPf51eLJknj1BeFaV1nQCJmeq8JFFR6WEB6kWCrEJrNFcvtgbuckwfNYWzQrPA7J",
  "key13": "YwwNuCF5yd4zLPwkbCkZ6R6Gfz1ndTvoepu2w8ha1wa5ouEzZpbFVK3oN4jzEUdZpqNRasjiShYo6MzJDRU7ELR",
  "key14": "5zgdHyVKp4d1yJuE1MCk4AGAzft8cMjwC2PbXy5GidzgFaQyDN8CVQeCvzvbJchtRvL3aeULP2fLGkRibypWKHEa",
  "key15": "jGsNgCM4jubQ8RgkvFjwTMiKiotoSCbPQWizWY9MWVK7R9JwK2BpcPKKynAQZapuTozAd32JiDAc6qQnk8eCBzi",
  "key16": "3AkUykUfo4J2vL6Gn15c5MHByC77FSePFHcGnA8g5vTGfdiieT3YsT9KaGBS2nTj3nnzUQcvHQ693SzEKBQRuLJW",
  "key17": "Y9PkZPekTRZZ11FqU43H9JhpwpavFK1HNBeCTc3BCJVGyDpQWTjNeNpjJP7mznwqCnBz1MgUR6Lp2Gq8hSwwMJa",
  "key18": "3oLbsKz1d2fytUnvEHq9uFEzDKyGj5f1uLooM4HjD1WJJwJNKVDasMPBWotXfds7ERCoGWibCMU9NH9fSuPgQGxD",
  "key19": "5cfpydXAqxdoxUWjy8SQdCpt7aWjnHXb98YfoLBA973mPgMEDsUiu9QFe4Wt6sca8pwn8daZeQG8x19ENfyKo7Mh",
  "key20": "3JZCk6MmAURx9aZdmtmc6ofNenaCNUheSbdEBSZT3e681RisLg3nvVVf37SgkHg5yCzvH3QypSPnYEYSxFxqCXuD",
  "key21": "3bi8AoCkDiJiGizHwLRNoNNUfyap1Yyv2NDXYgYiZB2LCxNvaaWQKGN3VTUgkGqet6Kpr1z576m8tZpEpCofCqKt",
  "key22": "5HS4L3fzy2t2RJrfsx4YtggZkNkvzGo6KJX96Eek8dLNHLq9SRjiwjGZKfHLrLEGrT4ZjADFZn48351iNfnN4xxB",
  "key23": "4qWq8jAGma9Gxagx9gPUyVsyhdU6CNcxjS4YkPqnxkSBgSnH7RNg6eKsiDSney7qwpYRyaddGPFU838dbNc61mD3",
  "key24": "3b5ep1Lv6a2nNvo34mqT6rhJPfYEZdbkMWV9WcvtiVBLqa6s3BgoPQSmJxwfcu37iFfoodMXqaG22BDDNz6GPK3L",
  "key25": "25mN5CCELXsK2ffrH5KtP2EzyhARBuE1gFBnJfer6KMdkA6Bb8yFnoXaQQFQeHpzREYtWK5o6YEttcxpA2NxWjw4",
  "key26": "2qfr6ubGWPehRQDpqhm6KShsTHueWBWjbxvhQzq5YBVRoKVTokUktHfgHBLe3UX5XifMvsYASKJnXcWkYRjpYRS1",
  "key27": "3BCPeb2VWMYNDdeUY8jHFnRc7AZv65JNgcvMUYUdEVSguV9zmEFrAPdHkBiHYsZQmDPGaHrPgm2XLpTLD1pRz8rj",
  "key28": "4Jwwie6kXqcF6mR7DuQaiovXsjtXmc7fwUWvdw1yBddkNAC6fTvhGQB2rDKKUYhEHhXpd2fgor9S6WtQEcKgVYEp",
  "key29": "iRiFbmA3ALkKdjESqiwV6853stKiki5kSiDPc53wFVn7WLmYLLaTj7c1QX7Hs6zrkNrEHmttue3GGZ7X49zbNCJ",
  "key30": "3g7ZViwkaKVyGu8WrdYfW9C2rP2KwQWrBoduWGCPtAvqD3k91K4Zj7jDgkVw9MGYRXyekFAAy6GJcCbXifhgW1U2",
  "key31": "5S7a1sh5CUJHTzbwjGgWgmAfE7rC8qQip7zz4QLxQu7QvwLPKScnkvyccfRKJQku26f3XFNPnKWYQAecHZzQbrDY",
  "key32": "NtFNEKUNWYzqdxudYhJ5GBF7scWUe9YhT49pkptL68cmLD4oc4X4MNu5fsNT443MhBEqHE2DUAEzXjJbaDL5RF3",
  "key33": "3UBBTTgr2n25VB2K2hw8RMUSpTMnyRrpPjW2gHRxtsUKCxyiWYSsXxwKkYApm7jb9KWFosvaiMA33M1vBtCfSVMn",
  "key34": "5ze5c25gEJGcMu85ZpRUqFhWtUtxE5XquV2bhc5HAgavomTdxbr1pviWMEKSjACvpUAHDDF6LWjWdY62VmHybiWo",
  "key35": "34tiiPCtd7bNj1F54xFsXZjpgca3FZxPG5WDPP6zny4kTQ5VRYWfeDUdM28622XgDncwfzLuL21VFKGP4oTFQdzr",
  "key36": "3juugjayYrsK9R1fqbJu95XAqUiz2JkJBYEjKtUCREW65uVXsNoCSvzYW1hmPeFhxhG88r7rzeHYaW2yRsxzmtAe"
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
