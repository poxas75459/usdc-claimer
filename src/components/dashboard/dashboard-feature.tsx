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
    "3NSPwUmYGyC9DAi2UtDvQTLwa6LBKKDTDCpjcsH47Qe4aSAbvHDPtnadJ5V9pBfC2D26c15qrZGigDdHEsfpiAKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UQkErrvcf43tXKFP1dTPkLoTZmxerQoZzsNEbDAhwW6to78vAvb9er26xBaFMRXLnNboj7wYeyQNmYH135EjDK",
  "key1": "SSMutrPhyWZao1woEHpea7mWVtpeD8419uVYn1LKwt26jksk5GQsF94Zp5ozEngkLMXNVuDGZvtcHzSzPKQzijY",
  "key2": "3BLFjEZr8YhDhw7ZL1RTDyyani1qq4JP673fGKFRrEogDAgTWEdJeFAPc3fxYC88aeD5WX5M6f8HMjU6iRtwdwt8",
  "key3": "3b9bcegV1cySHSTwKj5MeNMhbZeZeTmjWnUqvtvHEunk5KGVLNSatziQ5Hz1wRbXsGpHzb1JJqSYyPjgyEGAnNme",
  "key4": "47UoBNgVMPg2y3VX1jaaCVtt6KBcvmWtPMMzutDuuehoYDtT4gS1w5a3fRMezLydhWiy2EGSAtomsxPgTpJviAS2",
  "key5": "SYy5m8wf3NikqfhfSd22VmRktkhHauUBoE1QUUcLQzNxgvTwz81ZU8221FfQKB5r4HohXueLmaLy9rxPWFwcKiH",
  "key6": "4NrxauigPFrSaVswdYtkqLHx8mm9i5KQ8cbdVAANWyVN6PuZjwijbGzEQ8HrviGcNjYECQDXDiwwWgi8QCpeqovP",
  "key7": "vJdER81az5cRG6BVp2Nc1dvekwtsfrhkvcsq77g8Zo4AgofECcDZpZtYv6W7fzdsTizSVfUBvzwLgnsC3xMzurE",
  "key8": "3kcrAgBNunK2cQQcWRVh66DL4AVWh6CmgsyESjxkpKuTXx2qARAYEVH9zSTqPT8T4UJQd4v1UP4pzsKgkbYJcy2b",
  "key9": "4jo49z97bznS524BPAyh7BxLeNMVNtwLt4a7HEUSN4irjCAYKTTXCVsWTjturTkrmPaXWs12B9h1KSKJfUivc2F4",
  "key10": "57b7vJWsmcGmSniQwg47zLwW6AAmwxYe6UPao16PCgMFTLVsMx9NPQdUY3h4mEURvDLLBVC56zWpkKB3ASTxUaFM",
  "key11": "2NNuyDt1EkFmcCErY7ATqrY484EJqSgWBAioS9qoM5ocn3dL59o4AoyNDmbJ8as2orufJa3quNgPFPUAFSRi4vDa",
  "key12": "4hDxtHCzFwt3hxqivK5PgRw4oJDvbeXDUuAKVHXsJvCpZ1kxi2DApT1SuC3pHkP9nHnx71fz133XsV6tasMYfCTi",
  "key13": "9VwwWmgV1gbM6vjtiWQCTgkEXmobZwSxAiMXAybWxYcVvigCKjGGYKhqkKHcvpvQbHe7MrUS9CArueHeD3i9NoF",
  "key14": "3sMP4exMm9ChVCgXrMY2w5bfsb549YV4RDYKuisTttQmaJy92VRDu7EafFYFajRfB1j1qvjW5ppExbZtdfKHjP1n",
  "key15": "37g9r4k25xKbV1mTqfK8b9bwdNReMNhxgNGPSbY3EjSiUYrbsVcFJDv4Kz2JgXjHGPRXVtnd1Y7pAFNXWGXaFXP1",
  "key16": "5yri654rYSyrQL1jLN6JUPBo3ZqmgnjAyfA8uDg1Bya9RM1KwY9C9qD7uxfEqGnWVbGhNwBpMHkmQFdsk3rfRUoC",
  "key17": "417b9NxpmHB1k4ddBcz8VpSSWR6MLjDV3jTTzRZDxQr7gF5y5NQapKVVptr8wfC16AQPzDkQGbvpWSvkU4MaKY1i",
  "key18": "2eGNPuq7rg74rQF8RQc5rLzLSYcGdcik3exwG3KMBQtMqJPxE4ZXcpZL157i7tcTBkcZiEsCLiPWU7KEHor7v2tU",
  "key19": "rSHfhjnQkGzGQbXTV2jmr6cWuymPmt8pBcafUkTzVkJAZzSVkzPcwGHrzLukuYP4DMxr29UGmr89nVDTpbpjLEj",
  "key20": "3HQB9GXrEGya5qMmVx14NM4jXM6Xt5p5wazz536VDVh7uM3xERcBiBCqiGKp51jJLy3XBQwocsLg1eCTbro6qPBD",
  "key21": "3T8hvm8AYEMmFoZfTHBxEV9QxHRAcJrKjSQzVFgzpKitEZc1wjaFYitK7ymqSJdtb1To2sKjYRc4793RvCv9k2BA",
  "key22": "5zeKqbejxAyQDr6rdJaxf1fmmK6JRLqMGLi9PvmoxWRhbtKCoaCs7tUVT3YboN3yXR34Uz7ctDgg8veH9EZ8q4SY",
  "key23": "3EDUXstWkZWmaRKniHNSRyuLtsKLqXhT741x72PsEbcPZxCzfA1aVCQMzmB7MU8RgzHF47QCuj4U6s6sYj7UGYoX",
  "key24": "KkoQUxopitPBiuPffGNAecQnVt45u22cPvLuFnm9AFrht1TJQ6diBVzv2mmkdPnkYKhur7B1VxDeh68gQAimLVf",
  "key25": "4yNrax1EacCXXLRg8KEaX3UhsfjdfCnBFdbJdQfHjyFkwHVo33QBm6yebPpt9vAmxgJZaeWkxZ5QXFEVsRdMsJ3F",
  "key26": "2exaEZqsaAX8fnm5Uh3LXTooTzn5NTwBp36WTV9n3d1vPLBAB147ZHqmf1iSW2LbbKbGR3EGuY6wQkzgLXn2jp2v",
  "key27": "ZN41nKPAMs5RCvVipWcjcaHBt2Wbg1jiBTkcxeHCAGW32xDmqZLkHwD5CEbrRhaQ5dsDsHNsECqxKNH4C2URV46",
  "key28": "5U2Y48VXWhozKPxQrFDc4SdVswCwMDW4DPVctBWp8AXJw9m2AtTMTLhQhJnsaAcWsTtmJGqwGkKn7NmUmM5cfJ7C",
  "key29": "4zAzUTYo1P2BGEPZYZVnrD9kj4DUHsrRXLey16aoRVBJ5YD1b4zmYYq772JupTwGcHYdya8EQWJscFeGKHVxhpcT",
  "key30": "5haZWysRCzFfNxw6rdwao4jxsmtQDRrZ349sqjEvNqSKh1qEfAfRr8Pd1gkugM7dvG7gzb3VBH9Cyci53ZZfHFNM",
  "key31": "3mPiCUdLJfZzrTQwjpYwyxtRG4PXQ6LUthiSh15yBHp4M6eSFAfCmmTFN5rLHj2FCUEmJesv2ZPMRJjvLgnuSDHx",
  "key32": "4m7miig1ZrULtRyhxKiEAGPh9ZUD87DRCfGf29iKNXzaqDNcQqBRdMGpbpZfeZSMZWndPaK3RCALL3zhRuDkpYhS",
  "key33": "49VYDNLaY3ggCecNS29kaJa5NyuQHKTZQNoJHAtAGc8Do82K9Bj1PRri94hoBLXLuw8M7nhso1bhB3vbxWXW6fhx",
  "key34": "4mFax1LXUivzJinb3VeXw746UULhwFUxu7u4DCxVD57CugL8KDZH7Erh2L78NwakAeeRbnzidJpuC8VFj5No7r6r",
  "key35": "2qkDteemMqzystfVK2hdFV6A4aC1Zn8ydXfMtgPccYD5ZT5WerTEfHPo9LYw5voEoAXsf8VL1UfYbCtBV6cG3Pii",
  "key36": "5JG42PhTQLjWDMSLLmv9FUGjpYsx3rPoiREFfsvdGJ4PcvLBX2uJbrLcYThuMxFFdVEn9ECnAcWzEwkm3uKCK2fE",
  "key37": "3d9f71moSngToUegnJ1EAdsYtpz1DKqJvgdWF2MRDwMvUyPLjfwcRnzXUK64zaCzTsHQVUBEWdeLRm2KfnEzgDiU",
  "key38": "4LJizTR86rf7TsYyJbK966qKSTURr8yP6J9zkJJ7BvQVnPbastMvwXuA9ixfrqXn6ZRyTvHsLPdEt1B5b2L5CSfc",
  "key39": "51SLzxmE8tS4x2skZx2ax7BhHzJTjqVr5MbQy5276rRf4fb3hwY316thiF37vBthsFmP3FrbjKypsj39DkGRbqtE",
  "key40": "4wwv1eMv97DG4Kt3ey8GEqQjJxkNQVjmyqdSvhgbbMZqjWQ8ijfSzZCFAXLXL8fFWSqY2sMg8pciHbbdx7cFdY4b",
  "key41": "kPVze4Cwoh8EwunD1CYF3yWJy66BBwSPb2UPwz2fzHG17tUGudoQso1u5Jth3M69RQwT9XD7Gb3EmmJJ6LbzQPn",
  "key42": "WJcAbJKdc7JEpFC6Qcp9BTyiMJ1gk3iYZ8pKN5aU4m5ExfYJK5Xh5LbEBfak9UEwuU5rVBtTWygFFtZY5ah5Lvs",
  "key43": "Ajaj2LoLH8Tk1s5r2XQ7ScD4ZVFE2wGdJJ8jwai7E373Z1X1Swo4U964tiUQcZwkwDEBzdY6uMkpmku2kNLHF6a"
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
