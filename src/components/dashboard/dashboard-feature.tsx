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
    "2fnNyvjmUpCJhZxVJvC5g1ym7ngsVmbjKmrFyZEwMyXrohyhj4wuytb5kbTm8D65K9wjRy2CkPBzdy7m8Rty6AY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQjBoWK5sDVkiAri28EkjKBfh72nUJpwGMmqwuFzmW5aPooKF3YWa8pJ15AZQMuK8TYaXhNcMNa1ikMS3Qu7igF",
  "key1": "4dsPtLH25Ysncw81LEUsjZA8k2XriywPDdkqNexLLUCHPjvHRuc35XyZrasPbdThgiudX78n5ir9oqKrAmuEaCVE",
  "key2": "4JjpEq4sRju6JuY9VXVoxHXSdiQgFeNGYyv4PSTNeN3QPmew6f7pwjUaibqVycHgCBHMea2R4Mv92ZjJHD975PfX",
  "key3": "2Jf7SUg9TKd4KMDuiqpJFBud36GEc8vhidpoUb2krhoPKtMfb57KBySy98PpgxA32hFrARzNXa7i8iHzZh1eXS6r",
  "key4": "38sKi3B5gmqQCabeJwv2VdmtJLPGLMvoWnBhsx9EsVxnr5DfbDph2wpHod6aTGXdnAZpAp2RuiiDatrWHNLeoBSP",
  "key5": "5G7jjtD9YaekcY5BJaGQzu5XABRhFKjP2jCnoWPVFi6JkEbyqz5mwxxceu8jLn5q1L8bpRvV9EkvHYKaMmDu1soT",
  "key6": "2S2wi5vGCeM2EVeNFB6hwikjcGgfzbzZYVyqHYB36v6roPMvs5vzqyg3os3gtjcNmGcFSRX4W3MBaKKoemyMyxVp",
  "key7": "5Z9JZ4NuvqfwgDsbFBnNYCCrHA2G81F2m7Wy74hHTZRCGhhouwMZZqPMiJMG3iYQPjaCu7H6mtdVtBPeCrbQwDKb",
  "key8": "5HoWwjENk2hTkKPuLq7f4pgAHMiRJ9wZRrtbuhJjrmW6uFMnzwu9JCuwzqZwFEaVpmLBfHQwuSKCiv5WdQs12Qoz",
  "key9": "44M9F3iUnm5Nr4BrNkRhagCSppgRP2C9zbK6P1swqvzYKaJTPgApG95GB8sSHACmEddga4uE4z1KgytibECnDKFV",
  "key10": "2gCtska7mzJE9vUHv2k8wEAcpuZTFLhMAqXkHZQsgkMdqt81JHWCVwbHZTYtqzcRaskfKtjNhiWUob6Nc1HTtmRm",
  "key11": "4WGaqAz1PqFxjKFuAziEBZXVs4Gm3GtpywfTqRWhKbgn9UJsgzq4VDW8VqRiHEJYowQvZr1t3NLtrEvnb4m3hB2D",
  "key12": "22UNmt7RMcnsRB72J6J6vwYAbHbvzZFEDJNmHYT9VNigBirWgpd9iUHqZvgG1iogKXJ6vycVgBES4uAWUcGKKwey",
  "key13": "4qRhBmkfKe2PcWBQkxr3dkVNeNwL3iqMYVrM9VG4ezkd9DtCES6LzWHautNv59GpMQP48BxGgoa1otCPrcqCbYSk",
  "key14": "67EGBhRkHqotFxSG34ZHDVjC8fZUxUUmDb5DjSg5GPWDLxk6EUM1D5C11mQTXXHXuoAzrZHmq7AwTmbQyoD2aj6f",
  "key15": "23Q9DT5HEeur1oHczRZ5CMdUqcs66bJiTnYszNQcxLrHPyKpEoyuC4YTic3u9nPxJVyVAnrFhyjoLLtGDj3WUCfd",
  "key16": "3bgHzNUc8An8MJLv6GdPJfHUvug2cazx4fBYh9oT7XHwQ89vaRaS2CJDbdC96yfPMcK9h4ud1wm3PjxMVDbEEVpm",
  "key17": "ehSvgwwc4BYxe5GvnurfGcGmtbX2icBfQ1fx4sy8TB7LvzsPbhrCsvUMhjrZYLs3DF5wXqytFhrRLBxmcg6Jvmh",
  "key18": "2YgSokrJc8S1wy2b9R5yeb1hqr1MxSYaG6eZMSquVMwJu8NiT9yZyQdXqaBHUXXfYAqNTf3occgFF6eJexEK3vHw",
  "key19": "5GY88DHKjmZzAwyi1JeRUKqk1tjsGcTcFx4QMqayodzA13JYN26Tz8pdBwsMsmgCG63DcMjqHd7qPbaoKvrHcFpT",
  "key20": "3GbTf4FEzKab9rXoV7UZk1qzRYZcdq5xcyg7FG4wm9jaGG57tJVDMXiQc7BgZD2ddTma5Psxh26ez3wavfxFsgGU",
  "key21": "64yHSVuyrViFGt2qjiayVuFTj6iXLndPkf6A5wPWcZXmhkHVyinyhc8X1esL4hWsSTxQe91LoCfRJnPT8Ax2HVJj",
  "key22": "266vp9TU6ZzNvtN9CjHgv4BpmLNL9yiTkvMpvuNWw5cgsUQQxVCztG1kWkr2sawkUtECGJDWxaEUPjVU5zazWgmM",
  "key23": "E1njUnySTfVrDxtDYq84YLQc4qX49d1WoDd1HUTQ44HtqMhfDdELnjBhijg9GMutPHL3okoPRTDHj4mBLJAjooq",
  "key24": "2L4xmusQJM46DjnAyGXUgT8BE8PYkRn2uMbBBeWet63eUmEZFZykWK7bwzNWYgSyHvgF97ky1YjTVB7wyxrNE4gX",
  "key25": "2GTn1iJ4kRaQV9v8kmP2pCV212onDbsRuB9fWV5APAXncFhVGpZFLS84yisFPiAD7vAjSAoMTtzZKaQexvtWoQqh",
  "key26": "47iAUDCXvKRGu3ds5SERsE7T2krN9ks6ExtSdbfwK17vv1fbrHroGoB24ZtX62VSLTFr4bSzKUa3rWmVSLgYdu8i",
  "key27": "5786aBnGzxxUpdWKcUHEP13CPaiDxRWwjVpo9JQf7Gjpx1KfBhq7CDiAh1kA4iyMV1CZFqEWS9STeYxypQnfZEHs"
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
