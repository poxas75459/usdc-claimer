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
    "444JBoNJUZ3cLsHXXnhvWaw1DEqx2CsB7ttLFYPHWWUAhrJYGDsp6bdDMgqqbNEsXsy5u78rxXmjawCQCijLrbUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPwHKmYPsX5nA1X6Rx1N8gwsrV6dactK9oym2ckjJBcHKhgxbeY2FqTYFi1orY2V7Y3GBK9r3wahyedA83ujW1q",
  "key1": "3wRRsQRMCeY8sbXKbjSHLgcZnF5tYXeJc2FpYAGrGYiZA6BpcSDkAGAddyZxkuriCwCuzAocPihWSJoh6AAk1VWB",
  "key2": "4pBNZYWPUHCVrpx2FDZUd3QABg2KWkaFC48ZZoPmqQ7gxb6bzuY6ZY349BSigHGpvt2xZGwtYgZ8tPmx9aRyaNK6",
  "key3": "hom7WM7mCEXRb73uAKiEYwiU126UKz2Js27PjJnggdMZmgxg2YQt1UYoaNvWpDjda9xLn9bFFRCcB8HkXFPQuCZ",
  "key4": "2bd4HUdogT5hXo2K5FwhfwQU4sBoh3egu7s6mrjL6wJAzojdzsSWnFnPs8XJR7NP5x68dT8WtE2AXKds9bSUM1wb",
  "key5": "3RWoA2t3TYzUh1yNGTRhPcrvNJyMhH3DQYjHg4Jhn9cdJAn6b9cUXbJtx467JGEt6T7529c78KBiTcNCTmgU4qDQ",
  "key6": "2ZE5Cx2sts4RMeNdqnGbb7PGsTg4u77zSwAKxywr2vJkpnRe67pkC2XbpoUiUkRwGHjFAzu6uM5iY2DwA1MmWUsW",
  "key7": "2nLr8Du9NZuYodoFQz9Ktc2f5Pw1CtRMWQcSZpg4odiXvXZ59DBzpw6VT2Te3kJCjeBt5x5DA2sNotWaxQmz99s",
  "key8": "3S17mmXs4s8x2bsoNK3ZBbagE9PU7obRTdjtQB5ivrb5TfnbBi9Ag6fZxuUnFA6P1FtkQ3jjU5WBzyLyzp8sZDtJ",
  "key9": "31RZxfQfhJZ5E3RKqRiYACYUY6VLFos4SKC7khf9jhti6kGNoqqjq1XJFXh588zDNCrpm3RQ9bo5TRD4WKEnDTDU",
  "key10": "39g9NERss9AS8qWWWcFmrh7nCpBducSkJ94JLkQxy8Dv6fDQozGN52vKLMhJczmWTvuFjm4LDqvZnGmoPLWf9WUS",
  "key11": "4WkNFgqLrFEsuVMhipxQkoTrQcHrajgProQGLDqq3qEBrw7bciwDq2XfvEiqUqpsTpNzvMYxvgzKUZ7ykVFGuJLq",
  "key12": "3hab5hpPVQDw9Ps1t9K1KRsBo2Q7MtgAPmiczM3ZF9YCiUs3rwS8ggxmZZv2Zx1LiUG2dGJyDhm5Z4ankAFXQ1dh",
  "key13": "4c7NqXTz9R4UozHGndNip6UJHtxwjr3zfiDfsPhXd9p9iTdejR3HmN1HagGaMqFaoHpPTDNJhfRCoZVnKFoGpjrB",
  "key14": "2dSJAM5cpZsn4VKbisiVZGVbokWJhwgW8kizgkB3Ym1e2B8cVmAzVVWNu1FKHRq1BBC7mJ8NJzZeCfePX5echbcz",
  "key15": "CWLjT1pfQU4BSezzPfLEBbuXoZi6MLQVcwTSubJFYLJWyjbkJooakZNVFX39uUBKTQjBpSGR53PdRAdwNcm322r",
  "key16": "3XA3dwrpsj3fqeCmZAGUfpN8WhArpDECxY5UJe9GwvikReCQnRRjLudz6EhSmSN6o7Ks8vxTAY2QyWhPvVBfvisV",
  "key17": "43Hx78eWsv7XJHC9qeaEYSZVraX371n3iWMA8CZqkDH62EpikVjKsQ5rayVEjNGvHdkTsP2KS2fFQthPQ1h56mCM",
  "key18": "KMzp8N5w515rU9sQ7tARz9pKzcz2SHwQdrPW1VYDzNN4pBeAcJi3miTCgszUsFGCJUiDGRgVLZu7vaBabUMs9Xd",
  "key19": "eUqt8JhPoPFZsQpEFKJuHPdkJztiBnHUhfCtLWirGWZAWNCJW7zzEgfP3LZBXd2Fzc9EHHvdRHZXvMuZsTYCYe3",
  "key20": "5pLgEoNnRjmKT3Nhi3uCNQtFsBDKmsmqdERosFuQYngPGSMK2nuKXA92zsgsWkPP8VN5LDevNyfDrrb8UYNuxz2D",
  "key21": "3TfeTuRyzzWvpDmvZBH7JPfG9eBDAbAWnzZs6gHiPG1Umsk8UeyazjHurpCfywHfwn3stbbgwjPYYfppodYwVAuP",
  "key22": "3VGvdc2LFfskDj9ZPbDtFn5GaXrQ3xeWJeGJCf6qF3eiCBAMv7igMvVFBqeUyvwuH6orwnifPaujuyAM76MMNNZU",
  "key23": "3oJpSiFNYtte35a69epjf4oRR1Pwwhf2hHA7UBoBZoAvxFkorxVpgSdFkAM5RHxakBbrhSFgjCY5DHBPJQa4vgW3",
  "key24": "3mQYCd8H5fHGCGg2Yn8JmoJHAKpgQCXETCCouQc8Pyvh3NrFZT1XGZzqJTkq3iEBdTav3fAX6BNjnuhusNpLddev",
  "key25": "25AD6fuuz2K7v3P5qYUVyGUX63VnaYU5a7xxfQ3vvtDDK3d4qE28zaUtJPu4uK76yg2ztggHCyXfjDD4AVkAW5ZR"
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
