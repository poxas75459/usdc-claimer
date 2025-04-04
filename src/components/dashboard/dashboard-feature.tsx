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
    "53uCE37dywrvwTco6ViWJRqXQHXjaFVfwLo8sDvqjNDdPGspJonUGhBPr76MVibwTABSzR1GAHd7uTAPHD8mh1UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVD4k66WUtEdM1NBtpbL6uBrJYhpjqwkscevA5fkqPh57oVgyR1nYnF6ScU7xqkpGSNgXb9Jf2yoRCBAzo2sezo",
  "key1": "2AaUHVAuzifv4B46RhqeNBDGAEt1QQAk195TgGoJdRvHCHVLeNyNuQtAwEFwfSj5xXpqFZs22TH2mTUNfG4sfLtx",
  "key2": "5TW3UM94eArbrjQRtN4fVTYxivZZuR84xBPDfu6oSkfFzDiucMhJZ5msVbRLxjwLsu357YwSQkXFT9RWW1VGkG5u",
  "key3": "2Fwn5JWwhQ14Zs3GhuzsM3NJ2JD6CoHPHMqYTqMEfDNd5X3Ya9A327ZZTm76pt8qUcKrEEpPHZpuvWW9gAAUBmqR",
  "key4": "yoMVK8rUBaozTrfBDEbv3eFfGoLBoV36C4LLhRD3UkZ5v1Wea2gGVDnm7r5N2GebzH4ivdBRiKZ1qwY8J44MhPh",
  "key5": "Qijggv6s57A2PCb3P3PruZYcuX1em9JuKtBe8eQTZXeQSpd87Sd3QCdJrHLQ81fA9HfTGSendAFXEPXYDauqr3w",
  "key6": "3FYsfJ1wFxvwjwyfMUyH5bkrLrC3PZ11NEddPZSiq6iHJoyF9qHpbUT4WWBRgeWeJrWaKDAz8nxMaMtSktgysDat",
  "key7": "5nM9KhTEp6B5YuBmuWwgKtwmP2aqBhAnyKfvwPRPpEUBn2E65EMHqFH1Rm7isqVRJdxNaYdGjgaz54H5CjKodioN",
  "key8": "2WdRQ8YXJV8YoNcCUazGZ9ahuSf3Ab7tzzjvSWAMZbP5w9DMRy6ZHQhtWoaQUCT631n8JcPVC3Bd24nKFq2Pfkua",
  "key9": "VMJgcgCRQRD2kz5vvrbwcZxeJQbALi4RwvQGW5wrc5aGemnJVER4EPNXZyGyM2PGoFtd7mmCTGmF5s48GBh4tyk",
  "key10": "2Z217ov2cEd7a9p6XvYHqRAhqYR3cWZLBMEMU5dzEszcZphHrbHsZ4hsjuPD2Wv4LFmJW8hPhr8x7dzUULKdn1qX",
  "key11": "5rYEBEuCM5wJvHBg1hKTjphzYGARVgp6APXEfm9Yixj6faKoR9fDQH6zWn6MXqw9j7BPV2eEEHubvV1D5XcpogVT",
  "key12": "4itrcLrngevKEM33kbWNmroAJTgJJwUjZxdTvg7ZeS16C7eBz9W1g9xcjhTSi8F2zoJyZgqb3wKfMCVMUZ4d6B8f",
  "key13": "23Hge31kWXEp8Qm5tzavFEarfpHd2nYSGMnoES1r8T9NU8ZfUoiNRWsYB8eJCyxNpmn8eB3FJCuce3ss92QZ1qr4",
  "key14": "2rcQmS8UcZV3fBpwpAsjWHjzoEj8UhjWu1NB7sQsTepLPEkh2dv2tTe5U6fTmZb6AukayFqNuMDUKvjeQM2TuSCE",
  "key15": "ctfc6gFr6vCUru2vFcvzQBBVwDBn4Lwd1k3zGBEWLT6LSdmyDs73bbkE8rQq7mGYnPXeTHSVctXeMfRWRZoGvZw",
  "key16": "3GiuoCzkc3vhbpcM9nLULBNS77kfjffNSLAvEHxc8akyuuhhfLibQBH7KufahdHufMndizgYNi8UmVTwVxur7FeX",
  "key17": "gCoqcm8qWZueURGvgsNWCWwMHaQSSo6wHiik4vPonooHx8PobBLtSKX8wb8HxZh5298a1hb2XmtJ8VseZisGss2",
  "key18": "3biVXD4ADQkjUX57yCyfBKVNogJgWhWwWdoKxx9Auha4WqhhKQG5QUgKitBTUVDFwpRGEn5LemRDzb5GZveefHbG",
  "key19": "5MtVTj4ALC13CMUUxE36qQKK5eCgt6QeeDmVpsvNoALkef5a6jkcmfVNEgTw88EWbFQ9TQp82FvqtFYtyL3EbgF2",
  "key20": "3mYf3puGwnTnVweahtGLu9ZZdYpAMX2HVyKsgrRc5MiBvt7B9j1zkwAGa2sr3rmMwtevfxtAbV9U9WFAB57gpQ9c",
  "key21": "2uoo1EUSA5V7DVhbKC2LmStPPSaMrnAgyaaZeLLWokzJCEBX57sCSkgsxLbGTVsSLyHjz1WrgVjLaQsBdsTnWU8L",
  "key22": "2B7GqjNzT4Pi4okeLX6KMY3VXMMUjYsZRDb4hKBot8FjFQ7Y1otoJhveUf4CsAdPrFY9kvEY1taZBZXHATyhgwrP",
  "key23": "3D4V2c6mNXMY722BXGyG3uY4XHGHcPwzTcLGozUSa9Pb2KQTUKVhgieFa6ymaKrpMKEnKYBF1tUr57hQ8NT9uFVo",
  "key24": "2KgZRQUeeKLVuiirpuxmcoKmo3mufUUTqQcaNP9fhiyT8gqHNL4LCEjoLmgYf19ibchDSCUNK9HCo6XopBcmD2Df",
  "key25": "3N8DRZQ6VYHuGFe2w76pTvRABvLACLb9h2Fe9K6Sjjfu9jnrrMpdXEHu4iYCw7uML4NhcpvbqS5FqxNCfp6PBuRq",
  "key26": "56N6duEPVkM1rYEkGDzuLjJth2b9DRaysDxdK1Ztfjz4FddbYycVm3dvzo7TLKuaVEmrJWQtkWA9PvBcXVGzkhpf",
  "key27": "67jmADFgit5j6qsYwQTPUfqFPuH8JUBMkBvef7ysqmHjcoZFP8yhPUDiu1xeUcunJgvtPAYfd49rX87yNWkanspF",
  "key28": "3yXmV4cLj1thkNpeSmtikLj9rMmfJ4bUiKCdkBdyVZr42ZHhmyqFsYEDVMx6FkgqLctXzBP2jnVuYaohYKo8bnMr",
  "key29": "2DPVBizNSkmrnWVWEZqTwX7i1CHTvHZdXUm8Nj6K6QTR3nhZCkJJyWrrYjLpXNaYJp6aDhki78R2NAUnJDWNPao8",
  "key30": "2GmETTg2RqRWL9KiUPGzmDLT2ynwQADZhYYodaUy5i1yHvDz4Dz1Z4RcEwDYMbejyU9z3pD2gDzVDvVWHLrRMQq6",
  "key31": "52J66gZ9z2tcCe6fh7nyANP6dZAb33oiHRJEKCJSXrbY9qiwKDDDrBYYkYxbpu76FGrhcRGqvTKvZDS5Xr3jEMnz",
  "key32": "54MChJ16JJa4LMM16mAUgxk8U5muauoQbEBJ41YaHnmhMY4HAe5iYsDhwuBfFsmbLkJ6B7DQvRTHPH3h5fM8ui8Y"
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
