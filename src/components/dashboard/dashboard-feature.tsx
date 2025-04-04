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
    "2joPGvjr5zXGLAiYdei61AXuWdCYBR2KccxC7wYiK9hHnKRPY2TfGLyAM9pDzVSMKYwmMZURBCmbPCBqCGtpoLvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpgkwGXioHmNHJjMxFCYkhsdfPX47QCvoqe6hff32YvVK3HNKg3r6pWpxw49r95VLRgTrPSNdPrjTYv1L4uq3a",
  "key1": "4F1jeYdjTQjqUoHSDtRRF68jwfx797nHCYaqMQXMkULztwfgoNamSgrNjo4CAXYMJpvrDTAJfLdCESnNaYhNjbs9",
  "key2": "5uRYFWYRvkEfChiRk94t8mvYzLkGZkNUE1ueshuLyKbbvFP2Pxb8aLphqCYGh1mWz5eRXRZj4s28GQkvzXyPNCwa",
  "key3": "4CPUG2EjVfc4KNDc9Z1ce7tcdHxvASRhk1HtuEBhRwna2QDep8yMAThbkP7Kue88pMpGdg98uZHJHfDpMT9D7Cgb",
  "key4": "2cb9y9Tx2eJLKdCKrqGAS9gMnCeVBAzTbsGrotLHHCfG1FzeeYohyHaiSEan2oNLjWe7zjAucFxNs4wQMpYvPCP8",
  "key5": "UbzcZCjFaAuPDAFBqB14vnaUSjRCkzvjf6DtCSz2ZZPDfkJ9Zvk2EArxWRykVfrB3ktqGbJUChG86TR39vDx4dc",
  "key6": "4UDxLNwhHpCtjLerjP9rhiiUKUbmahVKj8CYko53TNQkCwAGFcmWzJRrFoPSP7BLfxrPP4y5n2AvdpHsPHAu4Jjd",
  "key7": "5WnDBtSpEsB6fM7JikvMvTT1FRFcgBpZQ7kGw6HMLRxBbSVwqeAypHnsbkH3pVHqy4QrppuSf2HwxqfiA7aommsm",
  "key8": "6pWYvdRhfMAcbP6rNfNAwgCMWCjLKPtb384yKUYag2K7UpwkycEshPKvnrW6GmSWkzFDCgeF911dQef7EUtXm58",
  "key9": "4hmNuo3225YiY9LDRibVFBsGVdnTb9LGd3py1nQT3pHZ3mfS9GpwWuj7Ccg3mhcYnhuQHBEEXRbJ4QKY9UxQkUQv",
  "key10": "v1375dpZqHpSj21V3Mwjs4TfGyC3QwBuEkto4VPjukYk95QNqHLPqRyryoChMa9dCFkiq3RzSHCoAuMWj6wgSKv",
  "key11": "55nwQSYr7MH6xgF7zbjM4fn6vGE23spNYHTRrpo697EYSspJtSayKgm2YSrjyAccLEWu3huJzgWzrVpTjvRQdtjx",
  "key12": "5Uzp4WGcVycL8U62acM9Xo6bkY8sBxZRQ1KBeRBBN6X7yBYGWapcGFZKF35TRuE3vaY11ce7S3PsyAHdCynNBy8c",
  "key13": "58GDguXEdt27dC3xPUzDhtGV2x2MLnAwLwpfLJetso2gfKjtMRmdGKd1sNDQE6Zr5B6T6pzdLvWUNw3umFcDXhv2",
  "key14": "2rA35KRea7h9jC3x76rXpKfPk4hvemk6ESRwq4RZCni8HgdLdfSxEJCdgLPesYLqP6rBJbe4wfSWstmFthT4Qr1L",
  "key15": "5f1p5fZyFSZg5t5yaHCwuUQh1gEKKyzN1VtbhGdos5Mrq4svNffkScwLrjHQffBoNcNFswohrczBapEpot3tKW1r",
  "key16": "4FngsDP3tgFKZZzfzJan5BP6isXVsrMVetuGXtopoDpGeLQ92c97or6YWjrLJRYosYGADzZDvEEkW5ieptfM6wo6",
  "key17": "4uzZVQgvEvebk3sn3cqAqCQSXCT6SNG4p9MsqDXYGJccv9vigRAwi8RqEfPXTLd1VF9KFgWeDZdvmUotbL9TEz75",
  "key18": "mCT31Pm8kVT38JwJ6zrLiGeCQvByHsxyJt6h3aW2FD2QWYT6qqBPVvc3qUCuZtYH27tFAjmUUXvit4jwhYX2tS2",
  "key19": "3gg8eWhMf2k3aZsMPuXjSZQfSgvcixrgPSfSWnYEmbPR3ymdo6oeDCrwgf6Qw3MhNsHsqR2XrnuVLkSWdLe4sGGx",
  "key20": "2AcTkWbCQZD4GuDAqsZe84SY3tEvfen64h3CyZtcTvg62ojz6nFaEHd2djzoHgLCcdsNXN8xsYfvkhn9yEKzwzJN",
  "key21": "5w8cT9GqfWZuydLanQAyNwK64329sxLZrHWVJbtCsnNkURvY4y9SwJLsKLHdsAtaERynmPBcGHtYmE4RHnTRneXt",
  "key22": "4WmkKLQVhz3jqVTtbxoJydCPiNnxKx52peR6nZL1rT5P2HnuaJqPeerAmvzz32RkSvewPybzXAZwabLXmY6xHaG7",
  "key23": "5UZS4WnjZBhfCovE2Ef4ENYcZA37GXbQsdogCsoWNftYxR4s8EG4dkeuEa3BmB3bngKPB46ujWvL8Xyqgqjf6j9b",
  "key24": "23WZfAbJQyiBhnYJh53YmPEggZDeEtju54zkXA1rqp6sRHNnNJxfqaMw4PLmhiZ13VVKUyDVdxbPQTTSEzbaPsmP",
  "key25": "26yKBtFhzYbxF85beSbi1Mfef8xZ9ZR9wxpPqBK6QQcracM5jpkAnNRqrHWU3XBtu49GE6UYJimxmDCco9GnLzDd",
  "key26": "616dWyDtmvLiJdFMA7sG58AYV2bmndE5AW6uU1p9eSA89iXafG3TRdaom3nwZ3YHb84h3MPzhded52xDGQrZaDue",
  "key27": "5J7hXDaafhXzrFizBZSmCg2z9gJcigez15n3LfVu9JYP1oYKm6esywugPuSD5MJWCDNZZP4S1hWWb4DBUMUHGfN6",
  "key28": "4snja5TCGt9nca7M9a7VE4wQgRu2oPF9w7feywZ9fnKkXr6BhAMgPimwHsrfjUy82sPGc52BtYdzbAhbJNtGwXqc"
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
