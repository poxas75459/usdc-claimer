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
    "6286cnvPSzoC2Q8sLos1pFNkYWtYADbY56mHH2MzZUWxUV1NTmb9S9Y3NLRQ8jGDFpZ14J2KxYh3KbbBkXbUWfCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEPjE1UaJaviH6GGVTKYepjqLRTg2FpvN5s7TruKcmzuMkqTzKto11qTeTo6gzgxzHUtaPTYsbMk7YCVwN6g4iB",
  "key1": "4VebdzuyRKTsUjeZt89KDQaGDAzXbFTLtJR6fVKq1w8kJRu6MZjBy32HGv1xxZeebvtBRwkYpuqWpRWo34f71641",
  "key2": "4rMQj74eitUtNJHYRQrdimLUyGhg1MBW7igHHEx7irBxGHozHv5J4mwKEqR9WfBMDM2QsxHHbBByrevMeV4gux5C",
  "key3": "3kTbL8XYeNKgA3XzN1YMwwej2XG91775jGXdUAda85hcThjyZQxtBEKRZrBf4gJQrg7qUzmJDFaKZNgkw1h7KY95",
  "key4": "cHV68oFry2WEPSPuLqSDSFyKvY99Lq1N1uhBMFAeXD5NMNGD7HyU3oY4qmhqqMqdZSN63FNkFZdCMonebZQ69yi",
  "key5": "2PoAAaftcDyDR71eUuGjPH4AEqV2bpNWRsjkZXyB7Wydxi4bmsX6j45eR2XPgGGoHJhkaVW3vjfYZxi9gZQjmzyv",
  "key6": "2gjTAaxYsQf1wYRqkcaSdmiJYiQj959q3WekRkYQGHsuCDpb9xM21SA6WqLtCMwJFuiddDgcvf96MQktFu6E2L7i",
  "key7": "24v3rUfdisyHqe4gRiiM7Tbv2TV6d2caqY53Trd4yAbx1BUseW5d4o3NKWUKJz2EEq4TcBP3fSQV7kvbuTUKmLV5",
  "key8": "4RPyTkWxjESFmkWhcL1YKJEqo3xt7QNsksst6vYeAD8fD6r1QNtoD1YQBmRHnoUFpkVQDNh8W3yqrM2mjqDRJHgZ",
  "key9": "3tuuc2xS24VKYoz2SUYWsR9EL8LtSX6cuBpZKbBqiQ4utEccHARDkpp3pjhkJCg6ExpRuiMkt7Gjdz1F7SxhABdX",
  "key10": "5RKdrz2YhYBeteCnuKjKX3tr9y5kvBSrrwHoPUksvWUPdmSL1YMMcWRrFkDh2s34tVG4vPmiVAp1V2VthzC57bzT",
  "key11": "u1W1qk7yirDJ39whi6PSxnFVQMMF8tzAMm5gUf7h17FUXJEdKhnym3ABxrPjifBxfNjbvTB4Z5hD58XuMY41jbB",
  "key12": "41GPb3CJjym7mA1hcNEDuvLV5uxR1nZt1w8eRM7tPJ86muFSsGSJvHJ9u7JusiD8tmAptq6b72d2rNsJ9zbT8Ypd",
  "key13": "3LMrCY49A6AoWa9inbhw4yiPjG8Zk8RZWskx38sFwvxZ8GhvW1GqDtEmEwm2uS1bzxYavmScskCXfgAem2cmYXJj",
  "key14": "3ASLubkN7tvD5up11R6JJK1eVGkDXMSDnb4W7m2pe4ruV8fZkQ57AiWY4dMMYiWZ5tkBfEScWvKdjTTaoRYftkTJ",
  "key15": "5vF6Ttegq1uN9qaJGFmCpiefxkuks3q8fYWBCAoVxrVk9b1x9dHpPiz8u7ZSaY48MCwu3C2KPm2QU5ah5xTGmJQj",
  "key16": "4Byt48Kp6rEPVChPVRbF1FUJTYK454LEwnU7NUd7GaRCFzVVsUD4uwLBFYjPytsRtkFi9vrN6FbB5KLR351tNA9n",
  "key17": "cgUAGsjR1zBvT7RDgHWKaMntNTtLDDNDyqvAPBo1txh3pJQv2u9UmFEtvwFVsqv1MtDASqJc6Q1X89kMpiYJk9w",
  "key18": "4pLegAQ6BmdwsMfsPpGomHoWmVWvfsAD55Jzhg2Gdpj6dzhi6H2oRE85Jr3e1Txz2GHE7zMpkZrwvmmQR7nNYpa9",
  "key19": "UHczwMauZtrH3SU3yhEvvJJaTiZ73NYSbRY67bvqZPFAWSLPsZMgoUAecc11G1qq56Wv5o8bpgwbXhN2o6ie4D4",
  "key20": "48hE7UFEQMQvLEACXAU4wXr99kAZC3NdcCV76sPVPmeareZ6NBfDcLrNm8rDsqgHAPNAET7bYna3CNSdbu4g4pXk",
  "key21": "64JnJnCBJ1PpUZ9kTcLJY1C54ygDwjEDBNvRQpLYrPWBE2eKaHg2ATDSbnftPhc8z2EubQ8xxfzFDiZ7rktpRQy5",
  "key22": "3X7L3DcZr2Uwp8QzQs1UnYNE45YaHMCjmJLvtEUQrpEV4vdvR6BE1NDfNLVQq8eAXHMRUFpWSdBv59zXxZKW443X",
  "key23": "3GAQ4Pi6ygkLFMRzg9dFdJNmZgzJggWBNknMeNj9WVT36x3fDB37Z3Nnu3DofRP1pj9jeQYuuASdwsqdirSSR2mk",
  "key24": "55b2hwRsp2fA3qUVFMoshb6AXKxrsguL4fY21dSKvk2kfSu2XRdU8j8tRytJ8QT6eiVJ6mYTiU8uDD6sKCoxQVyq",
  "key25": "4HkYBnaN7QiJvzRfAfBKEuCqYULDJGGD2BwWRczRr1ts5awwmZGiPSfUyVbStWNrzPUUZX7zJ6r3bWDrpBkg3Lax",
  "key26": "3WYQgFCh6uz4G4wFzga2q4Sd6aXLqa7AUkFXGNqpdQon7hBrgRr7rcdyFEyTqEykh34NNuHKaaU73opuVQLbdnD8",
  "key27": "nVB4TRpVeiBVHZmGEHKScufb4v4mHo5EEPtE7nZyRHoHmqxZBk22QDWHfeLpT7C1Q8BR8uTz4ENfGAYrWpE853n",
  "key28": "2giYnctWsSuT3onyq4NmVVso5N6kGHqQSXaTaMJv4hDMHoRcAJMJYSYALSJZvGqBcXPKFdE5EEVUnFB7hiySV9s7",
  "key29": "2psywAQ9EhaVrGyUutp3kdSpn2SRaDdRBrSx6PoVrt7J8dd9c3fXWDpg88ZxuUQ31Htjr35wH1ugcNn6q9JbXEFf",
  "key30": "2Ey6HhFk2FMcjnU7dsrD3gbcj75WGrjJr2YDGxRi21fRGicHpCjaAUc5nAB6kdv7XKpC9ugSLkxp3LwT3vibHMbT",
  "key31": "4daYk67cNGKnw7awj8eCXqkn2BgxiDygiWcbDpG9gnKMb5LNUb7KMewBC5JxaAakrtXyWaEiyFrcxGXQBbYsNAPX",
  "key32": "5NPj8yPQegN46j5gjaFobHe5H991pyr91Xy2oBtt6R6cRZVfuLAMnraTNTvP53REWWyiN7Rj9jHs53ocXXVmwXPd",
  "key33": "52afDrwBurTrgq8VmxaeCKxmkvHdC9c9fe2cn6pL5dNiYxKCsy3ByrxsJS4oCKCG1cEkDTyTHtE9Rn9r9m3x9vYR",
  "key34": "4onACTQx8LX5Eyz3YqxBHC9k7Vam8HYcvNAma5W1NW5jffSFPBTo7Bj4s9hkAjWHCSn5tZuuVsUKnRRzZMk7CR6w",
  "key35": "5xtAneniJMQrdyw9G7vzei1LMxwjKDJhjzER88SFfr8oyEQKdwaGSuahHi9Lwu3u4iizTnbZsrQcbp3AKrqLGybK"
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
