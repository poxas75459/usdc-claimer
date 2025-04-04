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
    "GGFiv1PtsNAFXEfjWF1qoHzG9G9e3RoeyJ96KYa1o9oDtUNp68tnLzM2DB5ASRcKo5FhiPRxYrV3eoowxZwAsrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2takJn6W4vCUYbg2SqvXa1GaxxBXKoSsRt3wExiukp2UAM4mcoeNK6c3Ppij5ddypNGhawTAXrXhT6bT8bL19YPW",
  "key1": "vLVWG7pcj2J9PHabvqDtB1NmVvoFmhw6xVrXuNYwzoSY9sRj6TDmyKLfqrtVawgPZE8bn5iqNEPVP1UstZo1hof",
  "key2": "38aeEurLX2rgopy8MUpMQA2s4PnkcKA82xDvAhzqJtY5nKRSeLhsKwspfXPMLHit25b5U2PZavq9tyAzPhsM5G27",
  "key3": "2wGxp3zMZqhj7LY5jGnETHwQEDbyNTyUGothmnX5fLzZuewNkbNDxCLXnJHppKEywLYqrxp1TRu9j8Pu1bDMcbz8",
  "key4": "2fb3G8LD65YqnNP3DvLNbZJKYeyjpEetR3bY3gApqndUKMTisAr19MzXHPfTwoRSmckfd9ehfKhHYnWbEJuLujKg",
  "key5": "2Chek2CN56i76ENyVfPS3vS9tkHZzYJMYrwx4hW5DbY2RXxJpmdBnsmUSoWM8y3HUNpgefB95uD2XT6sobYHZCUW",
  "key6": "5B5C96o1fS7t9zbCx1jpm7VsoAPw3BP2i2tdXdoiJML9DfWCiHaV4atfAtdjxEdLmSPcL7z4KJU9b7fQ1Va75M3H",
  "key7": "5EYdmBAn2ZnTX4YHuiMSyj9SoCwEyqixMgnyASxtiqDtUDidATpm9TBhwiFgLvHbiBGsvEXSGP8bGv7ZGSziFtMK",
  "key8": "J1Gtz9JJRi3i7abBTdxX1ehbxqJcDPVMd6nYDNxNYNE8WTAoycK5aEUT72MAuxBR6AY5CVPdSNkWsyGyqvmtKCf",
  "key9": "66Ds7PhxtvzihpB9e1tCdtoynNpFALhTxrSJPUZzgQ8ch5xir723ZNEzGAepGRFwzkX6mUaHJgLiJkotVdFaD6Dp",
  "key10": "57oEoJXQUeKZADMxaBSMVrBudwthAbwGbVJ6wy3sBnjLM9pwwoLMdMEZqnc3gfxScAvwCrnvhBpHdv7oyFdQvy9x",
  "key11": "gbVbGFrbY9Xf17CoPKvn3GMJXWp17TNmcTcbi1Mjo4vYFeCNjv64dZUcxSnyTuuux7BqX32av56q7kNcNBRApSx",
  "key12": "5KfhCwNwT9URDKQn2sqDnnu1J4WzX4Nc15kewf9ruX2stLKjevp5H9CFhWd1RmTbbUtEUgdpbCQGmCFNXt26fb4e",
  "key13": "5ZX8T3eq9C99xKRTJSzK9UQUvLRjXhxLW4JPSFB3p3ahoSbT7bLg6q1yaEJzr5DY8HiNrGrDNQpiCAL8HzUmCCuV",
  "key14": "3kE2sAWwWmGHZZxEKLZ5naJdb655BkkhPPTidSZ27EgvST6VcX9au4V86onVLkUditPaRNRUztKviwQiDEz6WWoT",
  "key15": "2n1UBnX6VDGHHssnLv2ryA99nJtnUJ5VCCSy8WVGHD8KJPhywgMfnNbrKMMapRuvuqV8BffAd19ng74oicnJiMka",
  "key16": "31YESXnhFLC9FyH9zJcSjmiFXRZymFXXVbM5jvPfZqxkprny4smTuwouSKDrLLztJsu6uruKCHvm5tNNHHike8UW",
  "key17": "5uqbJgR8Nw6oyCdaHYkmJnsNLBeNNGFUK3Nr1Y48pBDGnRAeSMqWoD53aer1v1hEiQd9Wrs6aQVbzHZ6j8fzUmds",
  "key18": "4AvyohcGVVx4zrM7wAxLcKpsrthpjriGVG9EL5ak3mXwBxAU6BjePKKhsFtb9jszDWUozwFE4MdvqmEGQCx8imP8",
  "key19": "ufgFioFG3s6bjTy4vLKV8BZq9RkDV18oZ4ZHrVCmVnigL9dLhQbxPUgEqDUVCKYiKjtikB2edehrDpMrU9iFQ2E",
  "key20": "35VhDxYiTXfiQ9TBX2XDKumizxHfRRcEhubYRzKy7pXWC3Tit6x95dgpdEo1oU2TAYS3UYKRuE7zyBEjmnHYgD2G",
  "key21": "5LCYEh5rkojMXbjW8KuqHwFc9i8VhBXYQVSNHndNKdbMLTnm2turnjLVbyR95dUFTw8W8J2EakoxiXoVRix4a1Mu",
  "key22": "2nt2gszENMeSiMHLBwqqPNXvcgb1saE1hyiDoD3mRSWN8dk5Wk9rHFUK9etuuUVRbSKyiLFkzMnLXGuBXM91TaVH",
  "key23": "3ASdjRL8yDVmnhMhrx9CV25HdC8z4K5m73YzwgQrdc2T9n2VqxwV6Nz21mufFkpKsbA2NMZ197aVvvdiHCFoYUg3",
  "key24": "5rTNGPdgQhdQ9bW2LZyJCugviri2d7mKk9XN857soUA8Ags3wNJZGBohVnCfRntGTjQKWFwFPvvuo1pHixJT8g5f",
  "key25": "3ZU46GGFiaUiYbPqiPWoZ7bGymX4MgZLnHWssqbeNSHX7pvsr2S1vghTrcAJJ1WTfMyMShL1pKXHPvoSGdjkq5u8"
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
