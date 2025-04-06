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
    "t7AmXjmnEKZYspLcuKo4dcQEBxco93qN1D9HJRhCzQXWAtMnUYy2J9vm8aBy3hJB2mWBJpoHnb8oyZ3SPvHxFDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxpjHx2rwp8CMQcu7iRwmR9y9xbXunb7HmfKgyZKChLVHLkoTEmoSBYvHhsbuDSDPaXda6CrqmXcD7LHzvv9R2f",
  "key1": "3BNhj7dUtGsfUNhrp1PJhr7PPWiuXHKedp58VG9wePf3V1tZFWv4PxEpdjz4M3ziDhUkBzqtKmE9PeYA9h1tD5EN",
  "key2": "5npqaWvujRpS3wUp5E19hkC19G2fTkMcWvWbmFUKy3D9yCoNPrG25xK6ELrnFNFz2iNNj3knAHMKrMuTtMg3YdLJ",
  "key3": "2G2CnE5ckMck9UnpA5NQQ3wDpNqu2N6TorddMzHkGfbwCH9JRMsXT6FRagWmuyoqDBqpjuFQGc17kXfec3nkMz2D",
  "key4": "67BC3q3bL4bfvGMubr8AEiiGqRVGSYiA4aRymmEW9JXKVKTe28SyaPQVBnCmJSswGp9iQ7vkD652x9KoZRq6zngG",
  "key5": "13AofzPiFpuDgNixa7ktnWCGfxxr2HZw3dQ7v15usmn9LH8fDufqghgNGsRqmBserHGHd4dsBSReMjqHEJJbXV7",
  "key6": "1tCWb5DfqaSiJ6sZK6hdkndc4MP1n8opbAGnNdAueqgr1DLM7ckcdQ45EU8qtW4pLowVhfgtzcY8SaRDXV63PXQ",
  "key7": "1h2XSq8jPn3arzAWXqA6CJix59hd99iEJWFHC5bsFzinBzyqjhu56Gj6XouVJsz6GBzUgVm1h9W96kikTLHps5n",
  "key8": "4UGYfnfJhRo5Ue8bBJoq9BgQuf9FtUEV55wz3a2L4z5g3pSqB1SrojUjo62cUPD9uPYRntZiyu6aK15rBW9qJRwq",
  "key9": "5YFzowFPzKrswv1fe2q8r4vmdHQ3UPEvYZg2Jkf8udqTjJj9cuiz5MGvhHPXeFewhHf781JCDFKnfhRk5qBnUh1o",
  "key10": "kF2r7m51zjPrJv4cqYwV8vwZa1rwJKid9T4Q8Cqw7DayZi67uUP5HpQMBjWb8kLBjZuUsGVGdT5vgrPAYhja5H9",
  "key11": "37U2bchfcwzyhQfFcQXXVpguQjc2udGjBvktduLFUGCYTDXx4ywSbw77uhYCqSWUNNr13anwe7pz2wvvMjuEh8Ai",
  "key12": "Wau7R2Pm5Hn2H7Sh9jqiYx8BGEg2HaaQQn2QNHsSZA3KsQEVPQSpgnPFDddBGvQmZ4e14ng4Agu5qSsTSVvgZCK",
  "key13": "5KFesSv5KQx9aSLh5vMUm14DTj1eECWx6U6htszgHdrN2MYkdH7oMftZzQuEmQTot3xhkHuJuiuxNnkYWH6n4bXo",
  "key14": "ZtCCYEyKQRNJ3qFyjuMd6yNpwU5xMB64DrN92oPbMwEgYJLN7v9Epo1iGBhuwMuv6Yk9qgu5CdKcnMoo8i5r3Wg",
  "key15": "pERDcyxbdjYv4881VaX6w1iEAawQ5MictX3nTt8QouX2s3TeE9AWEoB26hL4ju3cZY8TzhUu6tSRsdCT4KEBg6i",
  "key16": "4GdDSPoyg7R7QK9DmNUCuwbz3h1UoyL9omHB9Z4FBoznQNSiN2Z2K21mgSGpr739MhDSARLzQvXUoRrQWcKNvN1M",
  "key17": "4VgxGPaFNMkMZ6v6xE5cYJZCDYUjqHEoNfdHpHoXUCETxaBoeapQPDAotCcqX1WSP1gHhYFxpbSjvaSNgLoz6Ek4",
  "key18": "2gWZG1rXDJUf7ypW2YMLRmosrJZMEjqFMMo5sqwyFXuyNsWWwZLrJuqdgrkagNYkSCzkPMxY3bZzSrL3qfxuq3MQ",
  "key19": "2cNoar9AYKs6kSMirJFi1MEuNAysbj1KvsG1yJsb3UgAvjuTWwLbxn7MqA3BD3jGgBDAPwgV8WUKdprZZUUF8sXi",
  "key20": "JjyoxRL26fHVoPxdBhveRSdjd8wwycL4tT4VrAa6JeMNkhM2NMLKTay94aX5muCTfLfUoV8jKv1RkysHdnA8HGe",
  "key21": "4foZShk9u1UJSm5hZgbuYKCDnJecQVU2Wuue8XVFcdBLcGhPAuwkwkWLvPL9KCZ72ZEB5ewHBKSrRLy2KQvu4bZS",
  "key22": "2BBJjFUftgppP3TAuWoAxtQJ1RqMkn98vDnJdEHWbUkjSq7Vd9qxvbyx5ZoEfDJSRw8zia67p5BzLj2rZxZz9wYZ",
  "key23": "4djKArDjeLxc29GPXAus4ZT27z238iFAfBrrJqRPgnE2US5Apc7dgHD5rvqewfntX9J4MZ47GxUrkCdj1sEKif1D",
  "key24": "4quYMKuB3w1ev6hFVWjX3jmoKtVAZQUbqTFRDyc9pdD8oXG7cEXVVXNqroAtcB8f5WeVb5mdu7Bhx2meaq93gyCY"
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
