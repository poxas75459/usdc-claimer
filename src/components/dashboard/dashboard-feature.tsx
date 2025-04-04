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
    "3xK2s45ckpfxc6f2ANEL3N9X6bfx8cVq3u6dhFWSewHR7x1Erz8bm36Q6n4Msr2PMHsZ7DCcsFUZNxP3Php19f1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWiDVWyHmCjwi5xGXt7RBsJXqUHHwcdrTZHpgMVJY44fSifAwsBk1oSHWnrVyvWt4ucsBRQqqkntzJNoeLWNXvX",
  "key1": "4URSsttyddtfdhYXoFKdfCXDZtWCCrucw1Tq45RgHi4ALu6nGpNYqA9w512t9pxCuKBNh2ptDrFHhfzeFFHictWx",
  "key2": "37nZtrKn226CHUu4xY4CPfVvmDazThZ1xRNBHT1gg21dRqLrwAFLtvB796EbnuPGRhSbuMzgiu7DJXtZ2scx62Yp",
  "key3": "2X87sgYpaSCNWQ4uCBLWa2GdSHqVbKDetxWDJvM1pFv6zJyrsZrXqZACp1acmY9bDiZ7RCvRWuQnTCwaqGeN7D6h",
  "key4": "522gQ8gz71hgRgGQRJgaheRVDduCqwJgokdG6WRjymNRBDF6mgFWK6gvDpsbH8AKeizewZJUyPchNbvPcmgm2X8k",
  "key5": "4YhosxQyzpjWsoeomjbGVLwWx8eYeTkfe4N4um4tiJ8kBH5HUA1Sm1ttjRDhfFFjFq28v2s1aA9c8X6CdxXZ2pNE",
  "key6": "oBi2XgD3SMA32LunsV6LYESbbuphitwobuXcuRGfckrnyV6sndHkX74UTgZ57boe5HwMUq2scFXSmwxTaXs35zg",
  "key7": "KHhyiRqjxa8fJRFeAQbsENCfULYGPVHhxqznGzuY6oasauGPooS97t19zwmQ3ubstyYH1okZwUe1PecHHUK2zjm",
  "key8": "3jCRwmEnAHiGoH3bc7m2Yfp9nPAPmE6d7GX8iCdmeM9n3vswCZjfoLS1Xmc3WzwGAakL8498SJwrzSbkSvP7CSQ8",
  "key9": "2F7bRKQon1NdhW9xDAQAWGRUJpg5JyhDg2tdZGAwSza5vjzvqTuWtmLRa1F5urdUw6vFoZS3f6fyHDP97CZdBAUg",
  "key10": "2QSRTvqqmV2curUF7ViBSBX29SzWKKJAZyUZ5xE1JK7KMkv4UqrroQkcBSE5VLxMzqq61i3uuMFAFpADLLViRVgt",
  "key11": "5969En8E8Xv5sW6ctUAotE3b3bia58HofkbSzq1VnrwbRbcrpNnpekHHbF3nCWPCDxBif7bBZFdzEZ9JhHV41LxN",
  "key12": "29gHPhgjQwk39MxgJetqoMJKDPwMkTCPJ4T5uVAt6xpiFHvkDLrBcHrxPkwWuuHNhKGDHorcviLy6tuSR7hhCfeW",
  "key13": "2RUkVbfUvSU5wVVqjsLSzGFJh1y12DW6xFRNdrJbjWBE5y1htequZn5bwy2wYqVnpk8DRWgD66npUUzMLeKLeSMB",
  "key14": "4f8ru6ZSZuSF7J5fAo4B1uq9oy6JMkZCnudG5Sm3THkNHwr8mKKkBbrTDJkHnHcELx8hVVscozX6rGrh5eu7vuRa",
  "key15": "3jMu8T9kiM9snt9AeRiQtL2ZNE1VB6DHSNrYDhydzZ2JePvsJgi6rHfkcDDetKD49R2HNrUonCvkckTG8QbW4FsB",
  "key16": "58QpbwPbafMhQLLF2TgFytb8y534pxq1bqFGkMv3VVueFFDWvDZXB7cGso9KpeEE6qMRRAiQ4oCz2tSSaSPaQZqW",
  "key17": "CBpfyoTRGHPmMbCKm6VMCycsBu5YFi3n1vhmLWKHhsHNFnzYoHQe6wjuQMNMp4jvHU8dx4dfk28J7GnLFwBf37w",
  "key18": "4KboCXJvmixh5mg9jX9Wf8Ub25NiL1rcaToFcspbDUrovqUhXXgUWaZMy3zvc7D1Ah8kxE94i1eu5HA6VLkW747P",
  "key19": "5xtmad89nvxgrbrTiE6nTw8q3PYzoB97NezRu9KyxJYEhDqHjqdLFoDTS12qxuN4ajdYXP6xpsZF1Z1X44PQpxq3",
  "key20": "4zbrYSALMJjir1LucChqLs2DpKQwFmyYRGnz9sRT3oYWxFueZtcgU49W6tgV5to1Y2ardRqgBBioESsV2vRijuiZ",
  "key21": "NFiFixa8SArnKxQphYKnPLyc512mTvxjtV6pVWU3Httizxih5yYX2EjbRnL2drQtpsrSKEvJKYcMAz8RaQv87Ff",
  "key22": "2jBAN57QwXRb4Dw5m77pXjF4XvvdV6YrnUeToUhYhgz7T9ZrPR35RHrNS6aC5m8qPTBWfMLyX7eWFJfQstc4hSgy",
  "key23": "2KtVZQ1bZpK92MqJYfS2mkwJXmPCUx8XpPuk2GVrsY1KEwTFF9smPRfJE8YtAi2h27XUBnuGpJAjYWTFTk71xuEe",
  "key24": "qJ6MGv5XGnNLiKkEsqCJMytZMhTPLnnwyxa8ugqeqyuuvkhzREyrEpKuSmXLitFvnhtar4xytPDYkbp95VsKuuh",
  "key25": "RtmmAr7KR37EgbAe6YQcG62ZtwF1UtBYQkq9H12v24vuo85EwSrBWVy6hC539Q3AmFtyw1M2t8knobCMLjU94Db",
  "key26": "dwke8BGk92zHQMe3prPkek7bM6zxTUrvtPh6WVnFkDvYKMvnNfkVH5keoe1NrUf2sHjNv5ARehJGCZSS9rCoPFw",
  "key27": "GBY1zNLF3PZBZvuSQVtjdmGPtBpkPqCyWRgCvZcc445BAdxrKDNn1wT13PkQ3LtjA4HXs3dLap7nEaUV6RGbAkW",
  "key28": "4KtmA6g4dyB8LMq1VnVJNXFretBHQ5wk5CyvXMyJ8ttQqgUivmXvaKoWTuWkjGUMLEb5SJ4vWPFfMjYZuJ3DZHXs"
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
