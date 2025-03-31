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
    "563xGYbtEg6fGETfSj61oN3aXNVcEQKMkn2Q3vTyR9ftS3svm3Gfgq7kAfJd4sT9D54LRabCswRHpWjwV5iZyGoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BP5TQV1oZKQHdVP991u3keiPEJwC7gGZr5PRFSKqFbwGRrcVptDxPeircWRCkactQ58zjxWFfq1pxvopMM1x7Hg",
  "key1": "4HmBPsA2r5Ks9WH9k8oTgxErTkTaDozYNxMgpui2K71JK6r6M7bftjwijc4ZaQMeSig7LgfJPvsUBJHwz7tF63gZ",
  "key2": "MR1a3KjNWUJHe9ioAFDC4J9TQ8KPRSs5XBpfSdeRMP9wTSA5ytvACLGvWsGFkbAdZHUEKej78AgEPUp2pMPx2Ca",
  "key3": "3rijGx6QmnsnAt3dddWbnaUzrr2EL5NKKzkdACxRMA27N6dHSKMWMXHygVHKq6gpWWeEkP2yJbLomMdzdSqLqx3q",
  "key4": "392CacNp8GMsZUehVk8dVH5s2eKtMrqgJi7s3eQ8D9KP86pbkqiDHWrHg6kKr2iA4GfCvpGMgMC7RrsJXMMwdcZD",
  "key5": "5wmn1bHgQUrk9CGqQQBH9BDw6ETkZ1Zg2pdPscsfSsTxfamULm2KcFWSVcmWausQQrEfF94faYvMEfFpmW3rfLbA",
  "key6": "4FD17NpRJp95fx2NdHqJE2ziPrYW6yhFCs6wLwMp32259h5y739mN7AYCY5y8s7mkzyEDUDTLC6dHYL61SLQFnXW",
  "key7": "5T1DU25T7ZYkfEHdxdkidzdaxjFeDNNYPDjiEvRweLmUf52jViNYrPNwpAsNBgWdGzbypoK7svPTheRyFKLbmeSL",
  "key8": "4bPCAxaZMrnt9zLYQsGnJeVhuXyir7k9m3ezNfVXhLMMt1jWtmSP34dNrCzrZVoJqdQZp28b5vi9NvSmDUUcXHT3",
  "key9": "xMQbtWhBWnbkJyWo91mBnRttJLrFH7wYuW3M8Tbz2QMGyzmt2DGfLhQN2LyskdJNLfvLoVNEX7i4eFAxH8CkoKq",
  "key10": "2xDodbLxaaRujERKzfAkbFgEoKGRLEgU4crxqoJ3kiRfMxzsuFjJkFzMPzETRgwf6ov6vHqXGFDGSkuUE3JPcp7v",
  "key11": "25XEPvKazUscYEocTddeECpwvWCa4k8pALTMnGARcgLcgVToqsaaku823Dh7tHF532XeVLw85nFau4MSnZzia71W",
  "key12": "X8YSekEtqQJEULbAVxqCa2hSDBKYCyXUjLbRw5ZTBtKezLunEL996vLqGHmGNs7wvpoBR8PiQNdy8qz2kMdEmMB",
  "key13": "5GSU7RqRTRSqPSuGPHmv2VxU8WEBfwTewQXC7bh9FVy6pwucyFKLgN8PqU1K96NmraQGmMQPDoNhrhW4imrvK5MQ",
  "key14": "5C9P66YuJ7kvNni3DDiTnWkm3VjHB4RtGMztaz2NqnTxDuvvE6tg7G3tgdWrsuFtHSNFxWtv7KTHzpCPvDWbYGUZ",
  "key15": "Gse4v6Gp9EzHMYZkWj4d6k7LVS4ZgFeitTqk9kj3nuKS6QWa9CDVNPy91cRJ9fUoPuuUgGCmxfsKXD5WYKB6zft",
  "key16": "4rqQ55N4mzcQmpbZCw8YboM2b1iwK481mXD9voFT6iFHUDCwVPb1ujmkDkiCJbMSdSKJughpmtwFutxEAbwrT82U",
  "key17": "386hc6ksyQKcorSJLUhXk5NzZi7eqC9rMMUQMi23myE3VDWUb2Z72Es81eMnT81BAr9A6yxL8jSqpgMBv67hWFQC",
  "key18": "2wF6kiFmXkuu2fmBTHnT8uMiPC9ZErhTrACbSCK5a5VNuCMZrbjnmrdQ4nmw3q9QKcQde97pL2PWWnFYoPqEh8Nc",
  "key19": "24SzYj4iBmy4XWjBdqckMonkHqKaUy5NEvJeieygYbZJtWW6JnYTYqgC8ZnNiqf7Vwh1N3Uecb7xioKWwHaZMWG1",
  "key20": "2bQJpoQRurYRgx9C6kHZHkBEG7WSoJbzdLZydCjcU2stkdkuNkytdVXrnXXbtj1RQADvjEFjdzWtfWAv2kqFPDQ8",
  "key21": "38yDWAFRvNUKr6MjF6NFT7KwVuAnhNgo8ZBdtBgDptsnYADKrPKt7ZyfHrePJxmdTVRCxguCBcKi4Q5KEdhWeihN",
  "key22": "5WArMNo7iddD2jP68np7aeuctVce3M9wqkoecxp7iZsEoZK8tXGjAdc9rCxKviWhUv7Xc68kVN9fkarQyb4nC1A6",
  "key23": "5vfUXbn8ezTCZCyGaKNSRmQYh4nP14QLxyYvAc9QHACCBup4x63jre4VMY4MHCnU4uKkkSKvjWRvn68D8hL6coV6",
  "key24": "2TSkX87SSVKvdnEWCT17FUoCK3vJYKPD9kD2veGpANLHT1UcCuPhbX8zbEwkL7odUPoDxz8LM7rLGrtT2EqYek7F",
  "key25": "5EUBfkNuPNX76nk1CnEEGpoj9JvzQwnrwyuqvHcwGdoZyffa2NbFXoG7mtkhhGnxA8CGCk5KB5mfT4HFUJF1UNqB",
  "key26": "36DVqA9ZS2SwvjYqD2VdzaNw98ezASdxWjzkb8HYosRNoUsFfQmHrZ1YbyyREqDXQWJzph1L4f8U3VpaxGT2CcpK",
  "key27": "5wtD5JifrPrKK79MFTAiezUWQcnejy2c4shBn6j6RWd3HNKVgh94DGYsbXoM777FAB2XxM2XDmiYaKW6jVyE3FzJ",
  "key28": "5eWRfLbRx8V22HJEmoB96aK8XsYQzMBc4KtiiCycssq88uZmrRGX1URiVLynWZPXufGVQcW9AbjyuojpNiV9inRr",
  "key29": "29XvPC7nKMAyMZb4xQB48R7pL1T4EqwxwpXzM5RqUaAzvrySin3umVFBg653rX1gnQk1LhDC3h4x3zTmXb8GsSbm",
  "key30": "35R8BeLYwByQ47Z8QRGzc5WRkoqJETfpF1P34VLAHKq22yQCnqxSwNVcnk174JFNHHunVkCw23oo3iHTiTvQPQyg",
  "key31": "4ergxf5EboZrCjo27U93CJeUjyr1WdcW7SEaZfzm4r2hLRqwpPaR2M3bGNAxiwWd3CVshs5UeHuM4jPLiEPHYudL",
  "key32": "2AVxyY4VKm7ASnxgmu3VyvYfGNKTqj8uz8AnuEtqqZbZHtLgkrSGRaG6vN7qQdcW7nPPHKk6uiewPqWHkWSFb6xA",
  "key33": "exBJnhoWobHruZkVzXoTr1dmxoj6Chu6C6jSRxRPWGt64T2xA1LD91t3vufM2Zi9PZ9p5kKoxaxoitbczgGb4bn",
  "key34": "4j17aHshcX1dY9CXGmBddrBkMft1XVL62EtteNfAViYKqogEPH77JcZbiXza4pG3B6tHd4u5nz7GzfWg58JFFw5n",
  "key35": "22sm1wnaWTCQhoePnntnLq8GfmbFM7EWCLGhFocb7wmZYdipmW8FmRyMPQ5fEZcsCsSEHQA61fc3hTJBmmetdeUn",
  "key36": "4fiKNsrJLDC4ubsufru8PtwUCpCeNKooeZsovuhMyU5gZhmM84ZjTKpcGVwXYXvmQ37F3nC2pPzbWMJLEfntppk3",
  "key37": "5M89h6hkoXouX3HPDyw2kVide8G3b9E5tB9eqFsevoGnR6wm82vSy5pQm5mFsUX8XGjcqDhMbG493hJD5zW2kbE8",
  "key38": "67TTVrx5bnmpwkgDEq5ACQdS7Ji4pxvbBCX7dAzQ8idE3DNHx2MsJxUAbHgX25ENdUFYAM32E8jVyfBiWsP7craj"
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
