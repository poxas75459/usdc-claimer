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
    "3ym8P7N2RdyUf7YGKaE5k1sBcFRQrCghVEigWQASmMHY69dJrAuQ1xaZ6HDufBm5ufhasLevGQnRSKBWc6Hn5bkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvEiNhh1ziRdCphQQMo12351Lj1MdkRaDdKU2ddk58MR5QbJwAPaKDvoM6Yn44WnWPMzyLksjefFkekLFLQGbg4",
  "key1": "3fXh2qWPeyE4E8R2yRikp7W74rAhDb4393tmY9pJacD1fuGGDUgjjhVVeGeBF8a51T6goaNvwWLXrDLtK5oJTD5F",
  "key2": "39xDSGrcCBfVpn9widoyFnZBVTGWH6cYNVShur2yxXCyQK1BEWdZFTpnYHS3oiG58ZBEJrVPWLFae56HMEEaQqqK",
  "key3": "2k95jvi4btAoF8PnP7hMsW5YQteooMeY9Qi8GC2fUugJaozq92ATrz9fomufGhc6PBcJL52L9KTLAG7eqTyxva6C",
  "key4": "2yyrTiUFTVrnqDghHE8az4Cp8GJvZqVKGCdQoPg5DBAuhRn2Um5MFBPUCJzZEbrrj3j6gfKyf8iCJsWZ5C6yiKXu",
  "key5": "3YArbcz9omkH8cpQV29Qi3L9NSFC2Wbn6hXQhqhP88rHUE6BGVJJ1Kez2gLui64LAcJwhyE5RH4WeCvoMqxALNLM",
  "key6": "SHczapV9erks6sm8SCBhQ8rFmj6L18GiALBf61LXiHzzmXwcVj5fzEPr6sVrrXUs56tVRPLHETbcaGweNYCm2fh",
  "key7": "3eLCopx1B3SYqVjoMxLmBTDWLZgoFPMyJpTfMtQzAqL9qfMd6FGamqDA5nXGLcdu48YigsHDLZohHpe978jQJv89",
  "key8": "3PtZ2cgjF94MfJeb9mHQkKTtzzzRUbWRjYC7GjmV81UBnzLzt5LVM497xnQ4MTM9ZyuSw7KUemFe6spsi2DB2tuU",
  "key9": "2quFkD1jndSG7WHhBZKK856yxGYgpnyxEbLibx4yPucr8fh1Zg1yfZJNUyzLF5V6GMmQLj4oMwkDQXzjuHrnb7JZ",
  "key10": "3kFuf8XSzRJzfxrSm3zKzUvF1f5nZJZ7HBQdtKotvtUaRgEKc1meoWNfCgq63qWP8JLT7DcCY6gzSq7h6vdk6GV9",
  "key11": "52guQeBY7suao5YHMhJ4UTD9kvhgaSwsZoEenBwnvYvrjRsZbtz8xmbYQVCymSnVJyxhVmr4AkM8uRMk8iQTaYTT",
  "key12": "5Eupf8f8R6vGoTBERuWGPY5k84gZjWMsoQs3UFETgcTS3PDJasZG6JTCyrcXYVZXT1WjHcZ31kREcQT62rBFfB46",
  "key13": "2WvMfs5fF81xrceny3XFgFDC5w7mKjPizo8eYS18UWNR1Bp9E7KwDT68vXDodAPnKsmSDPHSkumS7VqvMhGVQPif",
  "key14": "3wYsH4j29XiZzkRXM3P6EDVStfcESMPx8WQtHnxW95ReqafsTHzqpfvME82qUAAhawknQsEGQX9KBGtjU4HuYw1b",
  "key15": "5HS8RvEYQ6iqPZh6nbsfJMAzAbubtZvNTHaimRVaip1hsdFPw2BdHRWUJYcngXYADVRd69YicJDD7m3BnGZMvN22",
  "key16": "3okdFcctVWTVGsPg5RgKzNyVXHxqnpRHgRtUDwRa72caHj1Ci2MwQYeJoyqe7Hf6pVsZz4fEUPVBeKHmGNkXusCR",
  "key17": "2XriVrEEbRyDw5ZNsQSutHgKtpZoSDgiwCEFJxBN1aDbJfkkxASS1bCHXF4tyYsZArDJp8W6XFKTiqRmvaLVjmYN",
  "key18": "ewbcaypLEheLeK4PDptMbhByHF6WDDk5RrMpbzuTDpZTvzDRZR3zAVuAeyVKB5uUKatwcu6TY52knptCWgEJPTt",
  "key19": "5rbqSsc36kz9NZqv4fkRTbhWbnSasGnUv4KgszRmidwNkM9SE2vvvqJhfnaTjroJC1KZEfop8X54PLwCYzQWjay4",
  "key20": "4svWWrLsCMbkxWjgornTA9omnwSW1oRbYwwZJN2JMoZCACEbfRzGN3XyGpLrojtDrF79eJLwETYAmALpzrGZb8Nt",
  "key21": "5hniwXpCGzyfxPZ9LmWfSD9FgpxRPN58Dh5Sg2GucFmAgzcFPttk2YEh4mK88odvEVxgAWK6JoYB2urvEY5FeWvc",
  "key22": "x2MuMCCThPJyprUUCw8eAt38oBAnWAfdfPbV5231Xn8fi9wMfvStK4BrShE9dB3HJesPquRw1w4Bv9K6fn2Dthc",
  "key23": "4Y555Zxxs9gnkxL25ir32YF1sKUrxTnQB4rDSramVRPVRRr1mLBZa7AwarzYVLfBrq5afx2Mt5vvsED18LsX98A4",
  "key24": "36s6oauKaX5NUrrLXhh2YV4UnYqQY69A4duh6Bab9mpwA75xHM3k4fJsuGKcJyeTGHZy9313eoehmZ89zN1pmHW5",
  "key25": "3m3VnmT3v6tRHWHxutSPB3YiNeCJB23G99ZZHf2pESNeuhmLdHn5NtdDB9vBPgNm4kzTqTp8wnKDwUeji7pkrxxP",
  "key26": "4bXzwKhJYuRt8k8LQVfRpWVsz8VRNorxNmRfsLrCgWUAdLhpkRhghHv4HuNLLRkEAMrYRmtiyKWdrVXnNBzftGPZ"
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
