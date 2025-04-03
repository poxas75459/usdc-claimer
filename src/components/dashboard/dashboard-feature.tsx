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
    "4LXztC5HAnjYxHz1nQ3Bn46F57wG8V9RQ2TwreuXD3mAPYxotmMwAQF3fMb5jCZGjiNM7MBFJt5WZvEGXpvGPps4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5JBc1NyPNexT6ThB2HbssakYk2HqWAcS2jjpNHDXUvD85hzqXEDShpGHGtMiGHxzWYcPcj5yfAYAazdh52uKg9",
  "key1": "4WmWMT7HLs8pU8wkZ3u5t62713ZTZMNTY16L64ZQSud7fhEXwM5dB9cmnvHk81Gd2Ua7g47vZerLfaPCXhikkjiZ",
  "key2": "4iXwcHS8ewRpYmpQne8whJQHgJNB4whudWiqCTSJ5uhF8ruuxNDQeXV2djWWbbPV4pouYPS4KJP9g7VGFqPckn2g",
  "key3": "5gXUoxFZphXFzGKFCGbfacsizGdg4TSKLmfofQJyRkqfi1bQvXfqPYv8hV5hBnBnVRrL6dJL5YwpUFKbE9NTm7it",
  "key4": "3p6w4r91e3Ad5UyfxpaveyjN8S3se5KdmjJM4BKjN9CtnoBW1dSChUn6qMu1Hiuv5cnFT4G6jkD8iNjcegEoLpHC",
  "key5": "5hsWivrCvf5e5LpGJNxG1dwA6bzonjEbYosbaLXaeQRs7kLxtn13dwTLEVwczQK2ThJEZ2kkV7N24z77iyVsumpi",
  "key6": "6664LuBQ3TSRnfQAbS2E9jeGk8mW8yx2282NhCxajxbaSiotnYKCHZKWDzmTpRcP3wKXZrqnwhBQ72CrH4HtBuGE",
  "key7": "YG2uyUDyte18gabchgJxqg815uDwcqTVEpVp4wozH1NWx4kz6j8FwoQT1s2mZwHWcq4oFNP8VVBia8NNCpbwzuC",
  "key8": "uGb3EgCoEoHGeVHTo7yWgo83f73gcX1oZyWVBoTaBw3o15d2gDMh36BV7KpbYp68YF6rQjAzjgRnv7PiY3Nz1Hz",
  "key9": "3jc2jzYFTGwG4bKuNNYrgZk8HykSEB1AmF2D7tUbfUViszms8AMW6oyirFQhL2TbPZcDFBwaDQfrysXUuw4Cm8ig",
  "key10": "51BZMx5w4EruxDDnQJNDR9dZaqKKbhN8obB6quVQe2xWkW5MQcb4rhc4av5RtGoAEhMkcsmtzmhxtSM3WD142Pf4",
  "key11": "52kCeuswoAv83PuiVfdGuqZAfvirGNArMxi4U9RmKWweo8kRejA5Nd9ya96fEpNU9kQ4h7wRvdX8xfoDvzvdnjcm",
  "key12": "2g89V8VQ7ue414DjrDERwQZgYHEK29inSk1zXEjkZbMye71VEGcLLLrX8YnudH1wSCHBfpmYq8gg6TYkefuiuF7A",
  "key13": "5fm5VoN2ED7PsKEWNkwntiGUCdCAUXmqohaCyLV2MxprTd9feGRu8kQ73vDaohXrP8MuNe2TPKMwr92py4ygLZZw",
  "key14": "5E2Rj9jv4qXVavkD7whwe6J7r3WMM4jGkryBJ8F1e3XDFu41Dwt8Tf69wGj2JUzYYGgdvfXoNccadZVuU3A7sB1g",
  "key15": "3NwxZ9N7BUVkEPRnWMMRVwHV84LKR3DqExPbKzT3vr9sgpswtfg9VRaVGumBShXorkzFXsweYm3vBxc59QqXPYfb",
  "key16": "4Nkih8cEmstE6VBpCdFmptx16nse61U85TcKJkcKHCapLWJCVwzhBqU4ixNRUzib6HdS7a4SUoxYKq7WJSgabsRb",
  "key17": "5J5SFQZNaASKADZ728Hip1iG7NQYuLejBfWQYGZZevPPjUprGfREsRZiReM8A17V91t2q4abLYogwfFLut8Zpxum",
  "key18": "5Uuk6VhBvMZoEAQ6Kbipizq42LXSMe1w4nZnTyrv3rKwg3VhtukhwfmYhoBJM263ZhYBPkavqq8KtBbUZ26fANdv",
  "key19": "3kzeXt9dUG9nSVX1kRTUoCy6j5jSo7Zocc8nwRaHrH7ugqyCC9ixkshQ2rFj8Vvkpxczg6ghYjYnCL3RgiMAYHmx",
  "key20": "4PjUFLvXW9PbK5Qe4k8s1mqVX1ycXmXmV9CDL6iPPonJ7JNgyduwAZRUg9tcJGXVkW348jubTwpPAHn2buAoHE6g",
  "key21": "51FBLSvRW6H8Hj4TKjbHpmy8CPUUgyFV2DY1wVze6Sa5Lvy6MhkgdCbKxsmps4NsDtxRtdVFsjN4bsopd5ghwA1a",
  "key22": "4ug2waKWH9ExNyX1YxCwyhszNgMBKqj6N6DLsqBnwt8rK6NAfenSsX9mHGtpcbR8kZBHXgsspeQpFoXhUCtrNGNr",
  "key23": "4jbaLnbinviW2Uu8Zncy1aFbXAfbfEmeGHCFKWMyLarSi4Q8fP7VjvBXrBBHbrVKHidpdzebqoTRCZKxK7VdtF5j",
  "key24": "3bEcuXrYDrVUevA2QSXsbfTdMXzocGwFsP6eSAwZDF9CXDpA9G6guwZfbArtGiv5cmqJeKUxdckKnC6SpT9k9cqe",
  "key25": "2xLNZSAtkqUkPmiiUWuWRCE1N2xWVEGCu26iybUJMBnJcP2SqeL2p6yhMTx473Gd7HCYKFDg3Gz3MWm35bdr35WS",
  "key26": "2YBkF5yi1LuWGzYw8Sxiz7jPKAPcgjzp2nsQk9TZXzqAwKXrNGpdYRJS4P3soPGLp1pdApsPCn7Za9UU3CPsU8NW",
  "key27": "284Qo59fKaqCSWcjDfsmJ4J7cMBc3Ey6E2PCC3y4D9xXNPiWwVt19uMPu2q5RbcCwqa9cXEjCQsPeAmGpqvAC3ES",
  "key28": "5eEud3TGe51Jq8JF2RYXqrcuJugRSZk2UzxFp2Dt4QSstWiTPwBFNrzPezAWZUzSYe34T1QDLsKJrUejHg46q293",
  "key29": "4HHKKkjW1a96LVBrTtGCcMrnQK3jAU2TTcS3gKsrK4MjaEBbSaAX9JjU8zeyjMEakNnL5eFAFsP8DmDGUSvDMn3a",
  "key30": "54eQxq6af6CCvexg12DP151kTBDm5yr9UmHGud9yJp9QhZZoGNEbmgDXmDk329ErxnYfZC7xun9USot1ZinPHqg7",
  "key31": "4SEmz2NBr2tteHkmKin8MTvpXccWv9RCakywAYphS7vEtrDsjJ5DGuvLDHw7Q84Hokm15RsdiXdupAaPfiCG6Hwr"
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
