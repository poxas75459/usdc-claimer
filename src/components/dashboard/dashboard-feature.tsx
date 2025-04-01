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
    "2eTco8AieBtG5m1fSVZxPFkQ39hdDnG7i6av4cgpxdGo67fPmd32gdGeVVMGwcL9Lb6M6VTGq675DesmjU39CWas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NYtKbHEjRuEirfyPfMZADSBHvxprVxR4g3Fb93Mu6TdbuCfSqpZqKAjGbkJCTHvqCqWym3N95NkymUmV2Q3mwCv",
  "key1": "JV2ESVsSUhmSS2ARjwKiMKfBeA6ophE2paaejAA2Fj18o8iEy5qZRgMM5sC7x8ZkafAXoGABiqvwKPqFt1sYDof",
  "key2": "2JjRjb6v2qDt5VaVSdpfJvjuYpEReud6P1wCiF6FiAjLHzUdy2bW3LZAY9iyH6CeoRMQhAHZ7cn5aeGko49Hng6y",
  "key3": "2tiqPmi5iUfH8U6vhMaZpNuMYAezffMRG9do99D9WYNUSDeznHwKPFKmEk6qwRQAKtyVsDcMh84BrbRPJSxZ3dpL",
  "key4": "38e55msWKjpGkbZAYHCqUWx8wGRYtAU4p3YxZ4r2NAvF954saPg3HGd4viPpR46Nn7EA9Uxm69GJLHeWovYmGbiU",
  "key5": "2MLTv3UBighVDeAnxwx2auZm2p4bMSGeAfqTvWMXY5Eb3RCEHT2VbcwpsutwqzJXeeebuUHo7c43U146bsRRTEuY",
  "key6": "1d5P5q4EEHMWk37RqEWS5iAXadPceT4U64bTTMtCxdXb6qozGNk7pJZ9PLKwLf4Y2KMwXRTNAtudiy9KWaxjyBy",
  "key7": "Kvqs8Dkujg4KXnMCGET1kBkVTdnMRBAVTFaNFTLPoghJCZx3MczWvd83wCrvH3wTPeiezJNuB5fKmfNBcyjNTLR",
  "key8": "4Dvtz6i3L5KtgmsjWUboVWWmQpnU3AuZcGMP3aBE1P6xSAXJE6dskv94YXaoWngQhrGmj5gMzdrqNssVQz5CfAPM",
  "key9": "3Z44AAzREKzvWETYKaANJrC6bpLaCeZF7Z8MvN8uE9R1yfjj1HKEjTyeqijn22rJ3XckXyyScwK2YmP5d42tsVwr",
  "key10": "3GPtNE5u5KrMQ4Y5mKMZ7LdQBPdrsPCYuzYZptvLzUF31KEj7p8dJCgdFQkB8k9YYCo96yowdQUsuTbzhd2dJwK",
  "key11": "D8nvseD3eD6ChGnANv9tMjxvX1VJ7f256beDf2W1wzewdpEnppKv3tTHjv4kYAiCvSrszNwZtUxyQ22y5y8RPUo",
  "key12": "5jJ7fx9tyfVG9XbkiigkKUs3oPPQuSXDMPdWZs2UnKmVZ5crCEAmuUKtinwuwF71NAVu2aZD5psqB4LMQemJ7eva",
  "key13": "2eq3QNFeYvvFwiKKT5AHshxSDy86XNroRiKKDZgZLZzSjA9nbtTYH33E37qp9EEJ8YX41xZvHUuQe3iSGZsc891Y",
  "key14": "BhZ5HmosPwXzBP5ovLzrw6nQsWZ7kZf2SNYzHchhRnhDETfo1bpoZXJoW8zS6d6nrDBqTQyKirg3CUfYYuMrv1i",
  "key15": "4EYEtLgLcgKB2nf5gTk56AapndMieUDFB1oVD29ujN5tL4NoUsgoyYu9Griue5MDpWQ1r9JNCXNfhC3zjL3hxVK1",
  "key16": "4kHNkBWnzwe2aD9szcFVxD5AJ8AZgs4nSCR9oo6nsswcLv4ZxHCS7qMQpCdSxDvvpAXyfFMPTZHuKd6y4LgQdjUo",
  "key17": "3wrkJsHX14EvN2sXjCr8h7b2KZ1EpZUASVBqcDJaGcc3AQYRPK42SmansYcS3zRUWCSEZ5LBy8rXCYqmUm3pQWiX",
  "key18": "nuZUkaWTYiv6XzH2moVbV5kjmELbPurhFQjkextptyyPp7W4PAD2SdAX8UvfJ6zPLwKukQqwjqvamFenV3kkFWB",
  "key19": "2kbVFx9hgEMi2Pd7ank6mF3StRe2ZuNyPzzHVoYhuEPdaZo26hWMbNLS7u8AsjBtxn8HG6iPaztHU8ynHRKrAcTv",
  "key20": "4deFab2FJkUdHMNcN8gZDvty8gkpGXHzZB25Lc8BBdgySG28tkUa5y23VndwgQcwYNRkNzLK7WLh2QrY5yxDtp51",
  "key21": "RX1HJAJzzHwtHgj8JMVQtNKd7pSm9XRjm4GLQSxwE3Lsj14UWET6aQkFH1GyvjNz2Vnoi2GpGSoDYKwc14h5N35",
  "key22": "aRTYMFdBjwVtpGEqyN8dzFpiy3SsBtLJn5zuD3gtjywB5CCEYgBh42145A8Mf6UwDoSFr1gEwUGapaTEtfwCke4",
  "key23": "3N2EsV3EfSnnqyAUVTWJj46swEXVmg8PgzsAFgzr5RrURJwxDa7aSWdCQQCW6c3q6bJ2EGVuGBrkvWB9obhuNWuS",
  "key24": "4PmeaUaLiPz9aS1V5fvX8akQcKshiAazAKHAec2HQijAzRYqs3MeLQp4V2BUaMaSazA1jNsFBVbKMuYVjsozep97",
  "key25": "525joAcK7HmBvduASighj1AGPmFPvcetKxtCMwmytCspD1VZVtxYmGf1MXo89gxNynmb8Ldt5iSj9p3m16hMxGfi"
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
