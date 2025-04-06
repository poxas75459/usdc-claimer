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
    "3MbuZf6iqMRcyo1tmEkReEkTxU5TNzkyomUByv78PbHqkuZFhq1JvzMZes1PFeg4A91jpuwDgvaXktD3jovJ6HoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eT7UcxNhGwv2FDi1p4L7NP2qjew8BxiM4DRUXGL3g6un7CkfxtQYNmnF3F5pVBtGdmkqSzAVS8z3A6B6u1kBX3",
  "key1": "mLNr4HmuMVc9TLQjiGQXYnF6pDHyovNszfV8mkAWJAubYpQ2tC37CNpJWAF2ZgvTUJz2VhBLWBN36TPaLYxEvYv",
  "key2": "46HC2HpFsU33cBRM2VyPNnUSbsAZW6cG3XFspnpoAGH1W47uYb9tWeWUPxvCXPKwdD7juZujaDbsYa1N37q31HVm",
  "key3": "5KYUxmNDz3hW4RkMwjCnMrajuwHqQchGKL5cP7gZ3CCwfi9tDLKBCZoP6EHtzLJkRnYyVwEE6cmQrCtmx2nkpcVf",
  "key4": "2bFDBqzhxqYxoiLbPciFpaXVvEFiyiy9A8eYQUCcLMpkRzfR3zhemFBAMPBXNXEiFt6YR85yHyBxrBdeFk1Vp3MK",
  "key5": "3FCD2T9yWKkAtb6o646w4N4v1cs3SaM15yYdAj76jnRw8ddzTAvH7iBxGhqPtxBBdzSht4uJeYnqjziTSozEFHXq",
  "key6": "2u9ozSx5Rg1VwoTRoyZNtfU65XbrYPeURHMuh1mPJEKb2WpDPsDGscYqCfXiaKKzMJ4NAsk4oGrEvUt4eNeEGvGV",
  "key7": "5srZgEQrLnLfKFCc58aQKXJCSsKNEnyf2padrbb1CGqUQSTXUtvvdbqMB3wQWVjpFVJ54SWEVbAmAahYHDTM2qUf",
  "key8": "26RkFxiLyepAsEBpDsF4KiR73zcQbiQrzMVHRzLzzwuPZKAPXtAT5jirfUM26vSMohDVsofR5E7zHYcfkxQGPs61",
  "key9": "3T6RrEiZPt2MAKeTVoPR5qEosWXmaF1i9HnDaMaa8Uk5wNDcnebxQYAb7JQZTtBNeeZsibL82ixqzniK8ZRrunV7",
  "key10": "5KK75P8hMmSefntqYpiTcfT1XiZmUgHeKkmfTHRjxpdiSWRkrz4jCWPR13NJdjhM5HctjfjZv65uZxXMJE1iYYed",
  "key11": "3tthoWARpK8YhywMP4pacF5fCAWY3ErEy2ed9WnDxbA83JyvQDsVeVU7QudSCda5Kt3gpzQPCpqn6nnT3MrkbTDE",
  "key12": "29o3oCDEqb74NsiMkSso74uKHXWWYnHrY7bcZjreonwAWi6ANKGi67g9JHcz8kVwTHetgCNdDbT33YmhQPiYtpUY",
  "key13": "vudzDGyE7ZPmwHcfB15YzkRG9ppf731KGuW7kkwg9NueivgRJFMtH2k2JSemxB6rcxk26pNkTZNjJFjiaLbSSzY",
  "key14": "3ehVsuFXdtHCZDUYXD92JDgqPa8hjvRk63AD1yVL8ytL8J88xwm2xnUQXHcBn31XjBARMt5ToPJ6zkm11rYv1EfG",
  "key15": "3U2hUyrHPNCjWSnZ4Jhu54MKX4DLNaLgTx9WGntmn1TnrMJ5G2yQDTDSJgXyvPZwqvRw7AWg2FpZ7JK13UHUhjjJ",
  "key16": "2gFA9AkMCxyjgxVaCAaqTkcrFEC4iHvntffYLsuXvgmp6pBSygQ8E3XCq2b1vtRkiorjcb2NMztVRyhV6NEk4Gp5",
  "key17": "abWJbSwPQeUK5uJsueypMBS7dhv1nrcdp7bgTKHE4cn1A3Uc1CdaWUTvzKJBYRdjAHN53TZCFUqf3qZNNmYffs8",
  "key18": "5KBaqFfnJz9HKTvJB8N8ToQ86VFgyuFqm2J6EAvJcz1jq3tRt38dhSNvuQXe5DuWo4BbthsY7o1k2xZq2gHWkYp2",
  "key19": "5ZBNM6PRzzFBZk8QgKsiCaDFwbhnhyHkhFD3T822CbCYWXM42zr55mNRRgNkDCis77J9dDtGsDmjwH1PdMVpUsEY",
  "key20": "5n78DfgduD2xwnyVg4s3UypZA7kjdbKb7vC77ZxhATRC8QN1vDHQD6KR4eYzKaubdyuVyXeQk4Qx1eBUStLDdQuZ",
  "key21": "2q9jdsrRxSKCmcKMzsStUhz5TEz4HcQ7P6om74Ve3xTXxfWkNR2Lz8GAvxWEhCKa1bQQmd7tn2gn1soyccz2AY8X",
  "key22": "3No48zDXpAJdGwDdABUSMAUNTihkMZeEcZVCByuEsDXcKn9yHxERMyKKv4pN8LJAJZDXEtZMd1WZoisMojj83yK1",
  "key23": "38Z5H7TMdXJMQSRdeLqBwi7XNfwdWHKtXJRd1SGmyTKWGZWWRNgaTx2c5GSicZayPABzjieh1k3aE5SvrVRf8WVb",
  "key24": "3H1HYi6sVqkijMKxhAEkrYWeY5avJuyUBs78FhBoGJMSEewYU1RgEjqCnsfJMvLUwWkweqsfqvCd3vswCTCkaHc4",
  "key25": "aLdrQzKAM27Z5NZGB3kGQonkka7wQV3oD1RKSM7wKobvCvDPf8VicQvLzMZWCNcxEp1wyAfYsc1B9H7mj74c4zf",
  "key26": "VSMJKuCB861pYr5AydY3zEvydV4gu1qJj8Km9hrp3yEVttyfoJ9u3ZS7dC9sd81HL1etVKwWRQoyCTK3eCvxrHm",
  "key27": "4uWCkH5J83evKxXhFmjBQK2zGtUsfkpuU6KFDxhMsQyMCLn5P5T7BzJhYCgoudAGjgYhaYLLBu1zM1fWcgSzuyPt",
  "key28": "3CgisgvCbd8GPhKPChybzeRyovRTxqPz4en6qNbARYSYnTxhCY4YLUxDEzS1wSJUXdX1E9mGCZM5Jcsq9kQk1V2E",
  "key29": "2w598iohxcdA3AbS4juCQ79W9pswKav4yUmwp4tQejuj3AQUpe45NhrY1YhKhCpHP3jBqitoWqBhVcFgvVWfVaR6",
  "key30": "zhT7YVz2PZ8EvuXKkUAeJ7AAXVdUWhWkNbKD4wdRj6odbjszf8rhapPBwjY8czWGAtK3a7Y17KR7Na65P3kdwxp",
  "key31": "4VNkxgtgrtmykEwhnFiXggMNQ4corBqGwG7GTK4XqQRk4onHWmgcYiAJjXuUquoQ1Nwga5VpiBgTZDaFx92Ron4p",
  "key32": "5WpbFqsCKcLmtTENNYoD7PXCgna6oub4mNaAcfyDavMP9iiMNbR298xjzwNfz697KRW4Nbao2QhQns5pSYVfiVtZ",
  "key33": "73ZUibR9ucKYvw3uNcxTa1UY5TfrTZEumGVC4vPTTMgvDBqbewmGctd3jYoZfec7cmU1sYidKwBEucXS9J56VHp",
  "key34": "y4aFwU7eryBmZ5mXjpgsiQ795GaTRbNiEeVrbxtxKuJWQrJUxiHoZfDCt8k4KeVaTfTQr88vJqVMmsTnyS9tarq",
  "key35": "4UUFgskroXmbvzu9PgAnUcP5qYoGFNnh6bqa6hHTneVWEKLMTTuocPGxfqEoBFWDkSCAfBgFLWtET6STxYSNBSdH",
  "key36": "3rZKWwddJVi9TvZrnBhyBVapcoCcxgwqyDic8uqHxf4Vphhwn6KtPMxtUTaBSaSoDxzUKp9Z9hzS3nAVJKZnjnum",
  "key37": "43NqiTEzFZQB9uhkygqRmsBaUbnBGe8pHBNMi7enKQnpQnEPxarv8yWBQHkYvTYhHHJSuCAKjepMJhhEV2BT8zUY",
  "key38": "aPierhnQQYzJx8XZdEeNnfu24FNinMbdjmbxRqpMiu1UYRytDWR3MncKpbwEm4m7CupesFGF6NqfYKPR6MDZWjw",
  "key39": "3Jv9AEBvcrLHWfmQfSWCJ55ksEFRSkVA48r3TUVFv596K36pHUEAk6t9dLnYtK9U7UbzmTH8yLBfryiUugMusyt4"
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
