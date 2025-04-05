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
    "5JAzVXdydmE8C7UvucuSXKX39Kwa1gegECobH7zgbPeEUvV9uXEmn8CPSXhZ12bZnqLectNekoMQ1XYuyGJLJTQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJQgh4o3kwjCmqMrqMz9uJ94N2LXUoCsxNkSxueoDxU3qy3rux6LdjrMxzjqpAcn8WTvw5m2atWt6f6Zm8cx96e",
  "key1": "5bESdQ2zEe6JnLp5zbto3AMW7vyXEqjqY3DZA6Fp6jBjErTVym4oNa85QBjgyweKRRHDADVxw4hBYRiJVuXN6BXS",
  "key2": "4RsAhzHwSCrUxLQTAyBFEw1FR526mdjjL81bGPD1FWUvbcJwPE224xs2qcG2CAyWvFWadbvdeG9NdhTCuomGT5Y",
  "key3": "2cgXV2G9hNeayip7yEpKj9QKJ1aootxEe8oQtYeiQgDFaJviAJ22d3Mr2fgRV8TKgPFU6o5eMwFvBqE5DxB8FhJj",
  "key4": "4HLU6LtgRzoKo6dFSXwiD1kBk8Q4fCQK8CDCYJ8EgTENxEriifKtVX1Daezkbu6m3kZQfeZgKz4otjWbFqX8p61B",
  "key5": "WNoBX4crmbbW6Y3Zd41xmkaxRCYDzmt8oSzys7HEukhPC3KMDemPLSjUPVHMgoLvMynBfeRUagGZdjee4mQcHpY",
  "key6": "5tckajPfPpiebRNoSr7jLaWaD7P6F8QfkTgXVvyndEa5YEUZeyeR8T5MMT4Yt1scCv1Ya7xiKrZzJbhq3WcidKu2",
  "key7": "65atHe1vcE4gTqrFzfyehVy9jAs8dPYyBRGKVdsa8F1jxWSogBtU37Lgbwkd6UDKAVaXkjGmqCvuuhwMTDyMNTk",
  "key8": "21b7ixjTWh8msR7sSQBviGFXUbjfpfthxfDub59FVQ5NzueG5HRE2DdvDNWXPkuBTPHZyvMUZNGyjhvUeU2LzUfL",
  "key9": "5RnFp8XGK3jnrCTYhk9VG8U2cuD2hoQheUA7iKPCvzo5DmjJLSaCDoraKoNJRmQzrmbsHhsJSHuM7SJcJ1kjJwgw",
  "key10": "2EyRvWG6d77aDyNRkJ7BEL5f7XZUzAmHLL8bnHo2TN1vWpJrWGtoHTANLRvEfaYe6SqNYTj3fvfH6VQmAPyZ7CuB",
  "key11": "418GSFF8QsZeuNj6mE2r4NUXrbHvoPymq6bVTNscnzAtERPukNCBdXGaww4PQWSWs7b31Jr94BLuuGjg3oZCQhbi",
  "key12": "6UhZDVK18GZ4wrQoWAktYKPaC5YGzCTpNZxxfcykYFRc8gvL3MDz8jXLJAmmuBayhezQShPKK2RKWBHtk6tGEnS",
  "key13": "9UjKZXm7FciCdheg7WTafqqDkxSyyrxJ1HcUmCuBetTwzgHJCHnBA131qfe1ExTahadQzpeYQP2QknXGCyHhkgW",
  "key14": "2gs7DQH8ZobcyxnPdxpzmHXp8UQtbKQxyieNe2E7GFv7BENxAkqKLdjJJfKYaX9WAc8p42yvGTwgJYBJsgvjVrRE",
  "key15": "YCRLy8rid7WXi5nuZjtPf2pdk1Tntb2cvwHSKCF6it8h82c116WXooMHV45HQshgiZHLAEX4Z8KxxyqqR2qeBxw",
  "key16": "5nAKCquKZMXTkZyLnwnVxj4zkWTGtqQsz5M3cjkYfS4iksZ17yd2FkSd4hTWJ3LreMp8NA6R2qq7ov2MXsMwHia3",
  "key17": "hZyn88a2PaZfzvHypmaaAa1Y2EkM4zE892ULN7DDKekPVFVGkgYjXRUK3oTjHQu3mnStapTPPiDDg2DSR9TpBa9",
  "key18": "fP6Nn1rzd5vnwBbKmxkaEvCufDDB1eDd3LEaMLFTbazxiJ9SZFS4BNt243K5jt3G1cquDRFY4CgeEBdfY947c6e",
  "key19": "3tbjVBsEXFYG7qVgTY2baq87Et26jHWzy4Ci65TcaHWrtXRqAa3uUAmGXRBUzwNYvLsuoc6E8b1aJoybXp3Mck5r",
  "key20": "37eAHRgEjtHDEYbbVzHpfd95mHSUQXdfAXRU5oJRHPY565T21WwUcua3vzguEToF2jw72CLRfhnn7TmjCyNGvyq8",
  "key21": "2myGfLygfUeEhpt78ukQvcvwBJycKPNiRQeSXsBjCCnQFThY32WN5SaH5t94TnRdhX63Vfz91K62ZH5c6dEj9Gc",
  "key22": "44AfK1nHNYFdAUrfS4HPpEN3XRzKCrkHFwSNX55Jb7pg1oz9ckKMabMVzm7kFr9pKS45AdkzSgv2w9zmeESsEiJs",
  "key23": "5vxprHBiXTY8hnVeXV4WnC7PYBnFzzgKcFqd9Ce8u2j2fQ7m7TZ2Pir3bZYJCRNQfeQ14ygRPkArkHb4Rx7cX2Bu",
  "key24": "2XGfSiori3mTiyhuebF1xrwpRRAwKsmr7zQ3oHpEfFQDvFHQZcAZVzS3kNniHmatXaJ4wVXx6qoqtw7QfDfcKs26",
  "key25": "4kP8LxZXkbXxjJgzwAAUWZQCf3zKeAznv7WgrRYyZWyDedMEU2Tx42ffp2rqKB6TnDUo6m6YwbfJiNNkMUNYZz2E"
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
