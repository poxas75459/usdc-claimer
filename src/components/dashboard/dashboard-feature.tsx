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
    "2iFEDm1UqwQQxEg71BJM5QJLDFh5bxc36JCTA1XpeDbSk2NGh3n3P7HVreF2vsk2LiTHV6wtHGuSEuCzz49rgFMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJUX7a9z55UckrEKxccbd7oUahD9ykarLrtgUrexjtirF7sUr6TF4gVUzdW9iDjLLtZ4q16wpjeGB6GgAcc4GDu",
  "key1": "3b8FAXMv8JVEDGdtUumZzxWMWaAfXXtsHhtswKNgKatKBp3id4wFCWwEPweTevSVnAo2zsRNfGGKgrW5f9EpYqQf",
  "key2": "ooRY5p1BR3rbMUw8W9UaFqtXzSLX7RoFJ1DHDsv7AyPT4yPYNqWfAKyjgrJ9svb6ysus2NgjwQnPJ8GnS1ibJJ3",
  "key3": "5i2quhzPedSx9pqLS2oAamo22WBiwxKwozmegS9DRvubTyZAdD3Zfe5yd5QJuUpMnftBHgw99tKFK9A4gYfBWjin",
  "key4": "Zdu9Jm8cnWdK8AhSh3afd2rEdHqp33vzvj3DmgnqX3rK5XUMjuYB6tBrcCjFHBd64omUfjLDX39YxURKYTB6ZkY",
  "key5": "EmvXDtfz1vCcoaVkzh2rr93enbpEFqoQZyy5dWECpq1i4ZETFiWiadGH2mzZ8tSvuL3kCrTG6H93wYnhQtGLfRx",
  "key6": "2jnmsQokkvWMMa2eW3pqLCDt5nDLHU7YVXpk65E1XiUfJgqx4EPTCqGjASoaH9x9D1GpRyu6Z2a8BG4e8VrzeP1H",
  "key7": "3wGUdgdrNEsVufLuWiJHiWhuzivFbiveNbHgPEzDdy4bTJLcVREJ8NsqtVwPhjsPfmiHhmbXB6tf3CAQu4Wg68kL",
  "key8": "3tRNqxBY2mt9fjXmFdsWGTB6u8x88cVyAV9RYjpPkuS8TmRjHV4FaqsAVifnjAUd6XLi5mvVkGeR3FffTpzo9UVw",
  "key9": "27aFMtcdrfPzcKXsFDt1b8wpNVcxwTsccgsv4VHQowCV4pennWFjEFi5bP1KAwzf6uPUbNanKCJnd6A9jwrcEcgf",
  "key10": "3NYDYCC7EqTAg22zMYxRijAdBbWbCMARNVJ2CT5hEQMvM6twLe45bEKeJ5hpCaqtPY4pTeagwGXyUg3CpuZ1GtEx",
  "key11": "4cp2yy2pDxMi6f1nL7AB88jXsAXtKDYLvfbGQqY2Pt3qXer2Zj9DbKs6aqiJfgzhxLowgjXDmzH9opxR64FFNfNd",
  "key12": "3ETDPgzCzmG4HFYQ16p9tcf2K59TVqfag9mgi3fSGEVezw8gfZqsphakFk3zRzSbPGfPCVqsxE8oEV3eiMFMFSmR",
  "key13": "3iVSANRWGt2jbNHAbHbFtRTwAecBLXy8ed457B813BNYEs2uLsavmS7KyuiCWfQgStAMZCoHkq3o1BGqSndMXSE9",
  "key14": "5Hp8GuQfW2yM1t7JeUrcwmCw6BgCWRUVrXjXpqYW21wyY57WqR57ZYDfha8rhPCMe4agbHYHugXZfrgjg2xYK49G",
  "key15": "3AR1bXhJqCc7q7cxWx22b3dZPSZof3EfFqT7Hzbosb5XhTSr5tNFvw8J71hQVpTdAT2jsmGGrSHGg6xQRewMDXDE",
  "key16": "sBVh7WVnqCgaeJVkBSfpE6aKkZf5dF2AQGDNEcnjtxeg3iqErpVfXm8q1a5xothLnTGuyh76ABRkJN1MxzppatS",
  "key17": "2xGKBywKDVGAiN1bNzdcBHWzwm68Vi3emdTuehLnmmuAejzY7PR94YPe2FXGbkuLQfEaxaDoQf5dk9HXDikmsjho",
  "key18": "2jwRNxqc3pTkEoSkYojoY14XeqmXhyTq8dbLieFsisRRTQ2YTHTCmBe6bPkHZXQHpTUULFLEcwKtEEqTNRGLtB9C",
  "key19": "cuFJW5kuFUXGv2M7JC9zgNCzzeWdFbWkV4Jae4jSLcFh7G6N2BLioHaoTJFgsjHNG9UucuBcK2DiPnEnindYVpt",
  "key20": "6XHp2xnRix1j5baYvuadh7mfKy4n3o5EBrW1i8zxRVuM4Sik7aC4th2DqJQ1GPekGq3Cfvfryz4bi7ZkNbzSF25",
  "key21": "5AJ6gyPTBv3dvS3ps7JnKwbwRTz9Wun41aXnpru7tjSqbFjGcPVwLjbaPCyeHL1FMmqiHhdQ7AQ1GBbKhGd2AUkf",
  "key22": "5nHVxowPtBtLDw4APzGx5fLLNfG9DLVDSpTSp6KeD8kSiApkJ46FFE7RDGodsG71vMvEhZXrrnhyjmYGEFKa5Ff4",
  "key23": "yHhX3BppTnYPkGYxJpyRYwoUbroLRjVpXELdDrMtjRdgrNkPpSu91JpxLMpjpJ7CAR3if5oQx6ddphxhXD7hFgY",
  "key24": "3iQAsiCKdetPtFPbeLZzopGquZM43gLhm7pcXLcWAVMfsozJcweshNUHNYxZ5gBegPmcj44hgHYtubYWUJyqXLmo",
  "key25": "4Ksfw4H8ULKT8xJ2pqKzbAdpgz3Cad3zcsSqwx23bfVoAkrTbARgWEoVoWdyYiqgHB5fT1t3gk1V9Cje8dtjDfcc",
  "key26": "2BRA56HCgdeNDysqT4zbvCwLGqXs726dXgTnrjBjNAnUhdwY5wswfVGX4GpnDAp6Cu5tpirC3hcszS2hr7YwyfQc",
  "key27": "3BZRd2fsoWjg5aZ1J2XidHFKMXxeQFR7WtA2CYHxKdnFSNMTbrZibCrPFmdDSRouSpVRTttNvJ7Mgh36kiPGPDvW",
  "key28": "jDSpgorpSHDZWMBSziFgNHcECEKQbqEbkAUUv2QLWv6ftxZLr3rQ72kUCSTDt1oMCHia1YGGxJTgzqbtoxTBAGP",
  "key29": "4PFvtLt8R3x4wn52D8QqkA4gp7K792NxGK6QBnMRuWTHtw5wfQQQXnUVp7uJg9kHmLweniEMjnK3kYY748qTiNnR",
  "key30": "3YAbV41oveSs284hFs7wB93CVWd2gLtmZbk3NVnTgCahjyPi1tbBq56xiGc8eBXwUbB99QPcqeruBiMxXeiSu92w",
  "key31": "5nPAsMTP4oRXdcSwRTAd954yMjUM5F6dKe6jhyhXGtpymuAf1STzSsEzLH9df7NT9UwVr1i1xsVEyWQNe9QP8ds4"
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
