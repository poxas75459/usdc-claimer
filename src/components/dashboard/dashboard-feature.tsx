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
    "fuLs6sdqjUCdewH7qVWQxRdZNy4R91Db6Ej9yzEDkBe28FiSFzfCy83uUAPYRwjW9aiWcanjaHENXx5G9v5Jk1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJMaxn7g3mr6poxji6V8PoC7ZcmSXAgoUFgpvMdi1r4u6C5xcftDPAe46nBEQ7xuxH7Sbmfw8QMynARsU3prKPj",
  "key1": "26BEMEbkfeXumsJK296fgvVP3M9tt1iqJxJGggvVkriaEKMDRUCntSoKxTr7G85CUnePWsUkZK5h4wXTvUQNmkGi",
  "key2": "3CApfkvpsET52WRFLjrVkfPB722EGTZqGEWrk8WmPjcWz6cmUD2NWAqJbRbFcdJB6Vfpa5cfsBpeEVaDaY7TQqyx",
  "key3": "2hYWfP1W3gCUR1SBZ6A7YJHf8dbtLPwo1bQGuDZUiSAR8KLZ6afz3AparfPWtFPRc7CvQ5KDN42i9trWdASShv8C",
  "key4": "2vi3pPudbU2HoiS1VbeYWRi8Mx6AnfLYnqLPoaPoc6EeHBhKRi8U8sMWbpn32gkaBepxUKp76GHCGz21x23nL7Hg",
  "key5": "Kxc9S9fy76wYuZ1L1YsZtUXNLCQL6JVj5DvK7jPbbMfkY8vsy4q4Vz2BFzk8itKvpD3sgaW2V6ipg1jTjCNzwns",
  "key6": "2rwXvzctmYDJ58pygevQffvdEFjisPceQWCCMohxqhHinZDedJzBLqHLtDEQUn7jnYvR5VGXpCzh6uKrN1QgT2rb",
  "key7": "22u18Xfg99HQJYi9vGpZsaTeFYez7sYD9wZzXpjeM7C9tvbWH5vSSiN4jP6KrnBRHrWmVAoCg1EoS2wvFJCPeFiB",
  "key8": "H6LMuB3xSH67Z3YT1At22hxMQQ8kyLrxyvKXZysC87npYhStNdvaXZhV9G4D2nFpd8hxYRSPiaftH6aLKPPBnYw",
  "key9": "3weidvppP9Aog8mu8Em1hgvQqvmDt5TTGRqspi5Q4S8K9LNnWP9M45faT8xgGAvzNbjq57viratCFN7F5ruzrpVg",
  "key10": "5vBNUKwLzwmu2WDjiWVyWWevHyrZNkMbKQoh6csEntX7ud2GBoz1dDSgAJjdRbdZXvzC6SHGy4ZLPN5bmzGYRvjn",
  "key11": "5hdHinM4r5LZAW1ir4DS5BJe8oYyLAXfykphg9JozXSeS3fCCqxAVp4mnhUcwGNJX67Ek9Sdtne2UBQnv7B6VZcc",
  "key12": "2MKGfNE7mCEnzWKm55K6v71gKTxaXEieBgnFgMNqTtnUsxKuwhmxZVZ8Dau5PpyKJofDeps5iJuWgrgdYy3ynpxM",
  "key13": "4BeRFq3AeH8ru2MEcGwK5GgK4vffS8PQujHamUxV7NaKbnWfMo7QpQo87aHeP3cBtjjRHd3bQAFbnHFGwRb3Xwn6",
  "key14": "3h8sahAH1oSWo6vbUpi3GW7vsAnLGiAy6fCMfv7L1oWkHgiW99TFWkCoFuAq4soDGBG7FkW4A7hEQx8EgAp1y8v",
  "key15": "tcAv6Mn2mCzSL7efTm3FvPPA2Ho6eRzbZF1uq3oU6uh1FnNch6XL422YDsctshnNyY2k8Gi8o6UEZSdvAWqenKM",
  "key16": "5in5LsGHCrwYCfhD3dzuPAGcpJa2wab3Hm6Je4Nah7APbVdkUh9u5DQs9waBEnrxHcgrpjr92WHv2x4L6YukrtM1",
  "key17": "YxCaK3q7CCQ2ow4qcuuQksppeHGBNGjFXFKYpPNjPCKgKVvbDk9M4PWvTnhotGx9V6Tf1GvVRwSRJwDXnYfAqC8",
  "key18": "23joeAyva2qb5AdCxVHuZj8boFhTLnHEGF4hP45GFG6UWd7so126oagFwDzUWNr5PBHUF6pNLkEMr7RAzP723WkW",
  "key19": "5TQjXGu5PX62tnJT5xCv7qGUYfK6wPNyCH9EBfBbfqUuvijBgxBeNS6fQv2iGSLsjz884JaE52scUswzQBq4LgXg",
  "key20": "21DrmtjTXYzWnBYk5QSYWqsQbofmVtmVHdR3A9se1oaCYb5KdGQPRpvJk2WrS5Yh2Qwdcuu9VbG8jgX6a84XRxpT",
  "key21": "65fPJbwihajaRWnrBDBu4j2WngnNhygJbdAJjV3dXWuaPdT2EstvSpDJdwxbbiumRe2gMsN4ZDm8gZiuQuaqkTCP",
  "key22": "63bDbBJutmZApEpfH3pgikgC7haK5R6RvqKkw9jLjRa91ZPoS4KRZGAWqSJaXubpcDpPJHFQeZzQgG92EPQeTgyY",
  "key23": "54Bh2hnnaV1R5Y9gkhPfWmhA7Qy4d9g6GqCoqCAyXKJxmcek8HKxmVneNJac2fdFxUqmFuZyqCKsQ6HpV6GbERwK",
  "key24": "4tPxh5AP7qGuNLJZxhE1mn3Nx5vcLwUaauRaGHNtEAuxaLDaxw8fFJG48w35Dz88FrNGA6RhAUTA8mM8sZ8fZwrq",
  "key25": "3V6VJUAbLpXpkkHhy6LJHEbJMMUiJ8acmVdeUEKo6gfBtYeVXeUQf3XBBTQFNE9i3iGeSNpABUnrhC8LEriq9TxR",
  "key26": "3i1WUJu7Fg6jxbgiDdk14KxcnwDENNJA2MwuUq1ZrYFcJV9fVMVDrvw56eWaTNN3vpYR8ydpMwZUCaHwkhtwib4o",
  "key27": "4brCKmNdxadevqxUX5bQJuiY5FCfuoQ1kG7pb59LMisjFipitxkraHFNz9DNt4fp3ycy8LRKB7bc5zRyfAFzwNc3",
  "key28": "m2XnQW41SUbobbhxJJMsjwuBSLXCiYbSt9CnTuQdgdZWXKFoTXfPxiiHf1eSFRop4jRcfMy2vt3n9z6u8rXad9Y",
  "key29": "5usQERKxess2h4fyHb8aVz4jn6crZxrsPh19jvoRefzsiffBUTFoqZCVzgYfUDQRWGVMQSYFJtn6uqHiRVJrZ7Wa",
  "key30": "47RhYHhVbE2EktUptEboPTokP7cBtFtwHuWSqwEeKdy7WXJHsBNVDiZpmARNa9Gkb4JSoXrtUHBzDfUXts8QqRHt",
  "key31": "rndu39nWifYdDJhNA6a7rQdvTMVR5FnFRvcZ24LPYZJEGkYwWcmoon8Y7RM226frVYBx231BatMCuvTMs2gwQTt",
  "key32": "4N8rCmwSLbzWPWoXmUszi84yi8WQsnU3Ex695UBLAsTJFsdrirCguq8A36rADda2wBk38E9NJLjhYwijdFtTg46P",
  "key33": "4jDTnXmTX65bzt1VjdGSBcWkc871XDyYKZ4nS75EtRbnDX5fJ1Q6bSYphAiRF5pUZaF8azv8Eb3xaW4CHkey48HD"
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
