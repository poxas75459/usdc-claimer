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
    "HQ7id1wh8b42kCAnc2PJeHdWbY3Uywjjs6drDGWvLVfprz3zGTjQy3xXTDNRp8vxmG7Xnduu7ArWYptVS9TXdTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hVVcedX6xnWUKpmUPTLkDZkysCJtV2THU4r7nQStPpjDgRhPeWKBe7gDSCfEcJvF9E4qxCT43Z1k7LapNTsG4t",
  "key1": "NTEaidRgW3ZzMMSYcY1WqeTamNkyzsVnDUMBEvebbh9ibQFongtjHdKozPc9L5cRVWj5VQzyPU8ic1iik9PNFvV",
  "key2": "5RnJ7h38QLHv8YPr7jQty1H1AzHno7xNbzj5SPCvfVnpG6wFRjZT6woAJfXrBd7ixXQkeHof9jCxXVFhYfa67gqZ",
  "key3": "4fxCPZFXdQvHin86iNJqQNZR8uW7y1soV5ZsCKMjRj7BPZQWDuLKbVbfoa2nDQr9B7yfksQwxogy3C2AXxg9QUB9",
  "key4": "3e7ZzyRtzzuJ7qg9ZwWFiDxwcg2J6WcFx9wAWmva19ULczaPiVt96AjeMcCZ2cc6McQMpXdCbub1tg7ERXPNR1Ae",
  "key5": "2FnftwYYuwQnenrDPx8QbvDKj3Px7hAQD1qzx6YRFzGZLFLBq55E29u3nsFK3h9yowJSfMywdo6zRSe3mwRt6kXW",
  "key6": "4Yq62CGLmkXpgrbd5jroc8zZ3jboKWQqLeWk3WLeL6M24T8fZdZTgYErkK5TboGpgQcWzVHbQXHX8eYEbSSQm1iv",
  "key7": "mqrqwXYj87jE7BWbYtLuR1EBMGWf8Q2zx3m8jq785vnjsQtb1ZBd3KwJP15E46VdB76yswpMDYsYSVTiP33M3oE",
  "key8": "53xZ4SmEJtxsk2QCMSFdEAuy55ZwR6LnqTqmxEgNdnYXEDfL42XoHbKbW9UhqabB6kSx5yuTDXXvMDMDnWG9Mqbg",
  "key9": "bkChBYsfBR4o8E2xJGQhnBRrsMmdLXT9s4TE36BmDPKKMmvDVb5amHRJyAdKhzQPk1UMXfccB8TGRh5UNxTPHoX",
  "key10": "MVQQFLbmLxLex96MZxvaAdCLe9Chr9GmFQZEXfPEHWePMVTJ4u6ZfTsJGQ38HbhxDiv9hn5yXmWmCkrSqp3zCTS",
  "key11": "27CGPp5r9n66poTKQsm2SvTWBq3Bt2oiL6r3xxcJEz7G7fyEfg2MqKGw6erghQCLgzy6gis19f2mCJmWhANjw2fM",
  "key12": "5Q13QXQGTX5VjmQQ1jXwBo3oumVhHWc6fFNK68QZFZCJpuruFdDcJiCUH8jS6JHXB6Bp92UxsxdtFYmETCJ73NhM",
  "key13": "6Wi7wetcokGRNoa4Z4HrCSZkDT4HCjdaShWk1DZVwyPLWx7Bb5LVsfRw9pVR8xAsLDto3LyNreNc87X1GkYDWMq",
  "key14": "4HRyD8b8dFZYGxeHJBBT2XuKSihmGsbeihHuuw4xrVKDT6NtnXWkxkG8w8zobGsf2XfPNLMkqVP6UxLG5sVQJvbk",
  "key15": "4KhCgPTGDq6zfwa7cGvRsZuWT5Ri3ZYZAF5tkBZrAxGams5Rfv88AM2bat81UX5F6zhTC9jUXXpDf57wnPBR1SWc",
  "key16": "2Ya6isXUvhgZxmK5sojeoNVFa9uDp1jXFSyDjExhxEgDp8WJhA1pvEKYJhCUYnwCVp6Y6C2td5PdWAmDqdWqPh2N",
  "key17": "21GhAU2AAJedMi9EarR3gx9LznkpZNEnHeLUR6qndEctDZZf8YqNPqkzYYESw6zE7jWuwmVbzsdAfXjtFPAV5siC",
  "key18": "3gegLFhyqzqGQ1VXPfYmHvm4NpHrKLB4UbVNH5CZPLgqrRSGBjtaYUZyNDjMbRF5BaGU41P76zUGWTohyTrEh7zr",
  "key19": "339P29tSGYp2HQq3wCLNG7V6WoqK5AtxfPeVboNJbHcDuFS3QejaWguQR41oK1hUUdnUTYHMxrsBUBAw6c1th1fx",
  "key20": "QZMEKJniGf6iYeJJkfDyefuc66gGKPx5eNFDt7s5uzsvZUQH3d4ZumrYrWHSqGiKdaMXsqF8Kbz4b4uDa6bv6wP",
  "key21": "585Zwazhvhjz91VXb4XPgH3po7NKUQYgmJe3PEkJvKRzRF75cEd4cKCpu8aGMm9821L1samxFnZJDyHETSSetTBV",
  "key22": "5F6yRYEKW3eHs6EhBgFb1Pa2tEzPQRH3Cgj2TyqLYPAjL4XbW4bZN7PdY89hnyc3VRUDWyvNSz6XWSN1XpsZYZJR",
  "key23": "5yTzsaBC64Fbpckf33V9ozhqe49qxGDXyBt9ZdNrWvxKtC6s6R8N2iuf4635BSGEL5aBTzS1rytLwGPRcHBej87z",
  "key24": "5T9UAQaQY2Jstv5oGxYAow3EjiyRvhVPLkwQFcuUa9N89ii783bLAKQaWb7iGZw82GwhLizDgzAa46Xc3K6qDynB",
  "key25": "4Wn9ZzJeAjufRo7zzv1qcc2T1UzwJUkorGw8wn8WrK6EaVh968fAtpj3VqB8TNUBPpb1Q2SBsnGrynvCbgE9M5HS",
  "key26": "5LjNBi1fQLhZvgWd3GNMfztWFfxvp5i7xQZaAcdjjMSL774zb9x3VPF2tX8SXKcCncPZnBc5Z7ztBGrCva3BpiFN",
  "key27": "3KkDjYKGTkDsbXRe85DRvJTHoD1rDVSRbgUP5fZ8Q7i8sZrogjQVG4QFfsSkeY51CRCQpJTsHjNb3tCqKij5Sz67",
  "key28": "5PNtebqEGKRNFQvPQxKim3hdPj2XV7caGJAkcHeHZp4qjw9ZKi4cGaZSubtVvow22PzFJk93iVXepQivQXhnqCHY",
  "key29": "58FBhuV8KaL5gtv2N6vMQEKqnx1LCfsbBHsHvibQ6JDc79dUUiGEhNsvyLkE7jLPDv459oNJ89CmakvwFZiUiC5S",
  "key30": "4vz1smA1yHA95W4th9RsVEpat76ZDqKTVLyE1Y7z6nzSEKtKkzpspfTZ7jUHAWCChojzLCgyHfjhcLJsrZ1xU9mN",
  "key31": "a7VMkesR88cdNw27EH1dCDStLAwnB3Gmi7uAdajWboAQppiENFw96BLb7ubWWzSCVXpSvpRJSEpcM4cL4SQdH5z",
  "key32": "3eMSLgpaogvatmdjXgqLkac9WYvwx1q7pirgzuefmBBQuuxFxcBYShu4do4F2jKUoxeAjSpazebBXA6CUHpG4cHU",
  "key33": "575bw4tyLZeZTPgwnfr1FAqQxbiYgUb7cG41bAzjjCL43jowf7iWHbzZeWfYFB9PGEJqRj5fXeaQn6dNH8Sp5fjF",
  "key34": "3tHdiRrHnQgrrMwamesELR26YLocMFSyLH2i37xNahv7xawGXPFTSj9EAGP573XHL6KrdssHwJAMGH6BY8cmX9Ln"
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
