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
    "w97pYyfCY2MdJ8x8rojPGZbvjf9M5tMTXaukzvWmbYsyXQuPBvVpcvZAG2ywXMjKq86s9NYGcWusgYPri8RU6qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeCarRvhDqkzkSByu8cNVVhQuRN5RhXTeskDWzB1taHPecum9L5KBC3QNnzp7zZcXvEuMrWbKfP7RUXruKYTFJz",
  "key1": "5LngEeJHgxRKMbPq146fnn9f1rZytWgrEd1XHfkdQ2Qrn8pVqQuTCCfcvxjTCdgtPqijjjLHZmDpxRo5ssGAEGuy",
  "key2": "2P295CDDeEWhpYvcLFpCyrhcdkSmktB74kXHBkJC8uqqHffYyiXJ2vAjynQZgobQ3C8q9yhstWUSUwYV6wxPUGLH",
  "key3": "5G3QoGsCKi8Yh7ts3Yf99YHsXDuqnj5XQMwJccXHye3TnLSXSRUCyWT2SqZyEMdhPoKZTVerNHaLLXpgyaHGw6M9",
  "key4": "BFei9GvdT5FG6nSWccDN6KckAaER5HexpTGDsc5b3d95QJd15TfHXJBU6u9W8A44SM1fbY3vXpkpDVWyEbgQ3ai",
  "key5": "5NEkS4tAxoUGPuYAW2pkxogBknQhYQZLhBcio5ADKbsGzJRvZFwHKziJRrfXVpWR8GbWzPgya5rGNG3eLqUP7jYS",
  "key6": "37e1hyra8wCWuukwYRfcNdY9GYU3hMMbAjfg7suV5Hx6KoNf9m4gLrKZ28HvoecTiJwPc3VGDyiWC35TCsqLBwXR",
  "key7": "38WKRV785T8vFTToGtbvE878zM5qpc261CVU91o4M93qj8GFDENjf3N3iRxzmnUUXR7XsE4wxzkrAtLbGa9Tiqew",
  "key8": "2FgWMiMRSPko2ZvHWSBoTxqKW8FvmdjrSQGHgu3HvroK4eoeBi3vFdvMoRFpdJjrkj7evZcG9bVQCEC321pELj1j",
  "key9": "4CEyKmznUVWh61usyThV4WhaUagJD9yAKRo2EjcFB1SgkjmmQ8sYnjp8oMZL1oSggmLY4GmgtFwJ124nhrQnATiH",
  "key10": "59soszQRnyEoaxZtmemx7MvY9VH68yf64hVQLipgpdKAeyDRd1XGRvvW6LjLz7KEzHCTbXKSM9TBQUkCTjao5w9q",
  "key11": "2axT4w9sf9xALgqFqGQVpr8yQUEdqRMbzYnneaRhAMkSrhAkXwgA1LQimWb8YpAixnEM76oRb8AyfBYyQDK3NDsy",
  "key12": "26Tw6zuGq2rjovfSLPfmZVtVGaRkDd34V1sqM7i9KKGFH8ENZMKyWDa154ct6zohcsLNUjPiNJURCcfGdJvpR1jr",
  "key13": "4cVupE4mPdjscrNcZAFhWrrt4gC5QrCaxcDdpbayB11medeMeizrTpgC1jZyQAwPncqVrSM5XFqn8cgpKfcaT5qb",
  "key14": "5r9qnQ4ePRD2fZo9PngA73hp4HiujbpNwcykH8q4nPCRaoqC8EF64My1Th1h4b3KpX18q8H8aYmg4SSqxZYA6P5A",
  "key15": "5JeVLUaAJKkzQ4UiRhyraQVhXCG24dwYg16HUgbvYwkYXYmG3WKSGxeCetAnc1sJMRXmwpNmcMb1Q5t95Zi6sYrX",
  "key16": "tofkXAZZnuvhXAt3NPUMoGE5qL2DbSVcP1Qv6eFjJC7b8y5fhE8aZqpYiRdW3LG7zveFL3yftvh2RT3jJrQRcrY",
  "key17": "5c9Cp9KQdDDvdKbEta7cYctTR3QHKhKKrDoksTQNkst7Yw7kqgBfWarU7SpdbBTeHtU2VLjGViJoa51jaw2464r9",
  "key18": "5fDnBBm2yRb7fsgrgbpyMeBpH4LxSDQL5ZUzrEHyHAi4yn825GpCkX2dARjbLxzxV7JdXsKQ6DGA1XZ6Nrz67796",
  "key19": "4taoUjA97hSn7EAc4hpFoBNjLC6pgMU4LW35jASBLBQ9AWxzwnHAm7Yw5BKvsHmbMBQ3S6NcxtoNFfHdj92zgf9P",
  "key20": "2kN8zfGsJiqmg9p9WdDij172XAAk1hudrvuyDptqHqGEaope9gSv9ZiAxH5uofD7ex66S59x2FAzbtQCvywy4pH1",
  "key21": "LnBXFeipRJ8TZPQ2QBHafXJa2GjSGmMWjhPdkjCLiL3xFN4QBDAnkBKRi2BEN4jbdhZd4JMvCFysBGkcoJKug8g",
  "key22": "iJGbsPVSaz6C1QdFV3DQzBY3UKrgnirhFxFAKvVA7LP6MCoTTiVAspebhVMw8BKEp2UyGdJ8WQaMCFFt3GnwpCA",
  "key23": "3p4hadufYnsP6VaACMPL4rJPSPvJ7bbVksULD26L1Jkxs6EVUDjKvjJSk14uePHFBf2rNJCG45hpAD4UncB9zVhT",
  "key24": "5WqhPXo76qYzg8b1qMiNH8t2aSpiPscarKsGQbbkmSJNfMBzec1Bb3DqgAppK8SnAXK72aqZaUappoUngLM5ZBzW",
  "key25": "3nE7M61MgWSswaJxLU2ACAkbivZPhMiGypp2YPZBSir8RikRsWb54isNXT6mdyhps2tbGEXVKyXi2KDA957H8z1Q",
  "key26": "yzkAjF3yyp5tR89Q1EqhHC9DE4x6xSqpfmj2FXSmYAqT2cVqFi22NPLconU15WEWdKZdGWYpnzWSwbgYVVH7GZF",
  "key27": "2DgToT9asTvaBcZAxcPj3j1QzBHBNZ4qEWsR1qBGPFutvLSxvrvfdu4PLoX5LbqLfodaEWK3oQyPcn2nCaJg2Wjv",
  "key28": "4mprdRBdaoQ5qsB8tMngQ9kEELkymSMA8AaFSLLy9dzgaPU4hCowQsYQCLXE5uJMUSHJADcpbx4zwivWveXo3D5b",
  "key29": "22QRnzZ63WLDLLTdMuKqArPbQPHtbSZArFeaenHadVKVzBPvEC1btrkrKfi4Bx3WjwFqXvo68g5RCinwf2A6YJ7B",
  "key30": "44sotvdVR1Duo5MfJmcSNgxBgworWjj63QLjxNteYasufrYXdwBKi9z8Z1wyAoxQExGbx5ctMCN8kjqkemMdqwmi",
  "key31": "2GxUtDdyvSyLJiqd5vUFbw9j3ud8wSxm65VM63rTfkNKZqBxU3st5S2h13UxBXp7rtYkkU2Qs2pWSeG6YPVs3Y74",
  "key32": "27RPkku9q42rHEEctWkCoP5jkAjLRFcEgAVcV4dSMbwG19xQMrytiXreBEaV2ste1fvRqhwJ42grVcWnkwLBn5A6",
  "key33": "21hnPHhygZKp2RH9kLfFQtLVg9zwQV4mtgRky41kLT2EcK4xMkP7DnrGQg2kxksbA6BNnHZCq8BiYwMA4mbbPaD1",
  "key34": "52xP9rrQBPiv6BTMLVCYj2xG15sjragfK2Xfn5DhRou9JoUYTmNgu4QBiJRqdHsHsTf136xaq7y3CTo9RJkKz2pr",
  "key35": "5233GEopWiTGtmZP6TFJVRXjfG5KHqhHpxnW8Xny1GZCVWAz6jweb9qENXPXSukDDWmhC63ioHFX8r4ws5Vt1ZdY",
  "key36": "4yz21xVk1bWjdMdw3uLkeuAjAW1Sx4rmjzSMLV6QyDEmcLVANcT3sERLJJ8Yqd7MDVwdMjPRJ27nGJJdj3Ukec4z",
  "key37": "jGgLvEcNdbrv6AwzkbS28M4DRK1J5LWtYXPKVM8TqxqeXxCx4fhRCB4FnCkwjDfbC42NtBAv1AugdYcNTvxNmBW",
  "key38": "2JZdDNECvzyxUvugPJqXs8xmhfwuimeSzF5DTJxasYanmfiRjnxSV8q355n3DTTAentwLaBvi5cLQGqpHCgtrqBU",
  "key39": "3LieufP7ceuuHsZTEaAq5r2Svr9FAFmGncjnhH7MANyboZbXtuooG2Hw93h9CNk7FXQq9Gi9RrU658dmYkmBMK7E",
  "key40": "Ue3qJ9i8KEAUXsjCBVws8LBxPSNicvRNTLkt4i2GJvQDitRcim1eR4KdHRcS6P1qpJdD57cEp1WXBsAX9L66gRQ",
  "key41": "5WyKZ6d8QtTk8YHfoFBDJgimXxovuSG4NN2WsmMWiGfNgWLtv9eeror4iL1bJ9g82gao7imtyVgKvEVcjb1VxQG2",
  "key42": "3QNdruXM4FnqPCv35LyoJCQcd7qjsTmY4ekBaMRAMGCJPhgsMY9xegdXnMHRtLyUmtYM4h2WZQLGPyWgvT7hZmBs",
  "key43": "3uPHyTybmrFAbPAVkMAAtH6RKGUDWJHt6HCLJUJ6hMhyCLMeUpdo3i2zStaJNMXkYuWwCNxNpSPYb7nso3K4B1z7",
  "key44": "zrx5dBoJt6qU3g8H3uJQHP7CcUscTxqmztVtQPsQVKLE78QovfxPwgsZgsjasSxAcdGHQTTEC9dJ8ZkvxskqbGe",
  "key45": "4XFYah8bwR9L25JVJVak918jNaQcdRyNL2yRsoiFakG3TJNckuts5ci7eeuBsko32ZTTdNEVWi5svvv7sHpZtP6Y",
  "key46": "w6qMydjmMN4PR7B7omE6YAoDUx1iPBa25aJehFDMfjmNpCzfuojqEHx46MbwAntXfzbSGCetknLdhZycWtSMFHq",
  "key47": "4TatTRYpgbVBMH9v9FdVjZVLJJWWTkB4RDuCJcmQN5MMYRwQ1nQc3UfHTNRDbMvnRNYg97VGFcvgjbucGszoc4jP"
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
