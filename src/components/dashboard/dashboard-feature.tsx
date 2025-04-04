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
    "5V6QfwYwUxX9CLoswminQeUEjfffLES4KLxnZt8xDeh4RiAZyntVbgneg57qcRBancLfLzXaj9DJb5EqLavFgPCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43hVFn9eEcjSKabbXBdyAXbYNvC8khhiAVLNTj9SXE7ojoYywmRYx3Hq4Q4HXAzgEKCBjitH1AH1gqX9oV8M1SG9",
  "key1": "eVk78193H3U9FupwxYpeZbQ1sofZebQZhpm29NcG7yr5TENBg2dHqzmP8qB2sZNQ63SfFhTt4uAc1kQYEkyzua8",
  "key2": "3mrUFccSQ8A7L8iMiAqe91GUPBqCfbpTDPmh3CuzniuAkMVhVqGtRcqHRTXaB2sbDKDeFgMTYdViX5NDo3RyCkxA",
  "key3": "3Ltk2ymhpV1cTkCGmFtFpZ6TUzE5SsyujWqmmk5ygdhf5tiyDvnXjkXZzGCVGCjHpyzR8gFDnhuhKXmMF2kLpeUd",
  "key4": "bmroBwDsmQp7URARK3nMUoW5NwU8pGqcwYHCknuiGMJn1GcTzRgdHCpDNjTrk9dXCqdKVYoHkkagT4XpCMa743h",
  "key5": "3jmAzeUnaUHvzpMgoiufwMiKTz4kdz9FAAMvyRJkhhH2SPHL8RfADdTvhVaKEtAEX9EzSj6aQDLdg6JiTkFsbZxg",
  "key6": "2rjC3gF8FHAMgCEFqc4skS3KncbPk5S2Tq6E152EJGtpatyduECk1SVd5VHQ6nvxPrFMPWLvDgUKD13ifsiDB4e2",
  "key7": "22Zrxyf6qVqXXQfesm9fB89PSdpVMEaVT5Wxtten5snQDSSQL5Vj9xQimWEX6ww5t7XwbJ41rQiJ8ynBXpVQT5RS",
  "key8": "2hRLZJyi84jx1qveACU67GubAbCb61J1VfSYBfLcjBXb5ZWMurNXaeBfzit3nsNyMMVNLcq15cN9mU5WVPHtKSQ1",
  "key9": "5ECqudD6exjG8qVA7MjwVdHVY1ZtbJPU6C8VgSjnPcWKwR1kyMzdryxAZjpzvyzYT2H6bfvNvrUQ6UmXmo8MBRGr",
  "key10": "396jBQFScb8HvEpvbBwJfQqjATzjJHgaacSCipqbwi5SB4Ja5j9Do9Hyt4CCc7yAPpXx57iz6jHUrG9yx8jvzCWZ",
  "key11": "2gukbfqBRu5t3CNNu75ywKYVpjHNYVwDfY2qWyzHC8WRCqnP9v1eE4wws8c7M4dtD8pxQAVJZn2MwtW698PYuiai",
  "key12": "3WNGmUJCpGaAoZAXsw5pcmGzYDrzxoADNM5hCBkGmQ9RgWLt7z7GypCkJomVFPt6Zm8Ntoa4x1YAU5rebeyqXPJn",
  "key13": "2yZ2C7z26TW2ySHchYLxvae6bU7QH9dpheXrzR1hiQTbSvPM4unxxyv87SsMX6PhMz3NWiTatxoLsvqpnYjqUeTY",
  "key14": "2gVfMQ3KqJUZUwbHrLMXh6ZJ9VYQygkGYUSTgSoWa2WwxV556RQLv3XMKKPfHLGxVHjoUYKsVggotR2J3ziuGJ35",
  "key15": "3G4Gh6PoCuqcN6gb1QEjoCE41kSYmqSxRj7LfQ1MQVYKiToXYuiRqtwiAwDz2u4RFS4KUpoxTAa21z9YJ1EYftEi",
  "key16": "3p4jtTnP2cz7admL5iHdqU1kpoud1GN1RLpn4VCd5rLEGvrkZufP99Wxyy4yySC2PhnyhS8Q68umu3tnvZqN9pDD",
  "key17": "YDdZAbkWjiYCtNr2bAjSpkHeJaFGutdFNkddCJWfMPU9pEftmzPYPNrnfztvA3EakVMneFya9VPGYRVsGqSqftN",
  "key18": "2MCZZ3DKJ7LZti2FLA9ikd6CM2v4S2KDgiM3dZABuQ2qmHySmyzSbmo7qKsKHD7GY3DS5JoGdoPNDuK5Kmz2bPpR",
  "key19": "4iZFGK45bixGuADccUWG2KuaqRg7fkNxbt8dDKCdY2dqvirXoVKQjN3BG1ntTNTG6ssdZHw1cRvux4ucaNkBnDnz",
  "key20": "2NseAc3q7W8vkvcHD6Pk1h6HGZidFTpBBs5bnouKLtRJjXEcbqVCeXEZK9YPx1UXzgXBdU6czB4GSkwT66P3t98m",
  "key21": "VhEBLiAGoRMgBEsQ6szA4Qzfso5uoFBoyPkVKjcKanZ4D8TiRdXYhpcxy19uYvJNDCwAFkZDeaLRr8KBTRKxUEp",
  "key22": "63DizS71oY4Gu6r4u22cPdu5Vms7MqwRy2pXwZwTRDHhSq8eLBsA5YtXGg4FUwn684o2wo35yCFzXkku7pjnAgrq",
  "key23": "2vwRRZzMp84E5oetqBYzReFRmNoMohPipjjniEFrxWZhmVvEEmHXsCaRvLKtcX9YfJerfUM8tZAz2ZQzJMFnchyi",
  "key24": "3geZNvkpXFLKHaGrzwvMdWqr93Z4iWD5jfyHg13C8uw5SnLhVkUoV3aNvrP4qNWqnsgEnKhTD9dDAqWZF3BjEonC"
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
