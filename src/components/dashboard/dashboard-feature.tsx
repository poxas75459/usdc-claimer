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
    "K4kLsNzftpNqSJL9Rqc8sSGTGqrCmTecbw6LoFNVUE2c77ZBvxhEQGDzLGmSvKuZ7m5xuiTaCSveURxkenGCXsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wj4PDeHw3HMKTczwowWTzhqSkchgrHZX1aHv8YjZsQc3F3nxaff9shnjRUBieeL2MwGUFbus4zsgdsxpMAdewnv",
  "key1": "28BSw6SvYfiLyTmKhZXgHHrTME3bUfoqGKU2gCya6JJvQumyoBVBJjqeoJybz3LkDJsjk4ecpozVDRKa6eNhRQ42",
  "key2": "3WSpBedxDGWfHepSxuDNLBRtPQvrtdQCZHhhZvZsgPFGz8Uoe5dEqymdE7wZQ9hQGYY9jhFnwVZGU3Nb4oVYhxAb",
  "key3": "5W4ksksb82qfL1jeFvzumcfP4gNGWSjEisobUJ8U7JUYgjAeLAVeHpb6Tp6TNoPVToTqswc5cNfgfpAx1VWfEPA7",
  "key4": "23nBbTczE7BG5ZEVWsH3TdnG1zSFAXqA5qzyYEzLoZpeH7keJH2i4HrGwJTWTXWqPb9yb7ewM8Ekgyfo7qReeSQK",
  "key5": "52usVMekpQCM5b7duQQXeQZSSWYJLSKtgEGGoAddrLRziVHpAUWW8tWMTJsC3bTzncb7RfJUjQ3NVsS9DiGCSyMz",
  "key6": "4pBj5YaDwwt5p7EqHyqZ57oD6YhjbVC1smaCRXnxYQmCxCQTmrpFK296cd7BPugb1FrhuFgVJohfizbKbspQPxFC",
  "key7": "5FFSRWJpZqfaZmQw6qccKgddbPJj4rwVTjV4AMXxQBtMHJCqLfYsdA5s9GBfFYALe2mRzcwFFHyA9bapUVvM2rEi",
  "key8": "3yEkMCyc2yhxgCK3doSVW7exxyw3P8YiXN2BbTqxap6sQmquRNWjS5UGeNQuNU5enCPJSY8kTvGJdS94dzyAMDnY",
  "key9": "2j77jvSrqmsjVtZL2S5D9Mc8k9B9APQr7WZtvEPGKiwTtf84iyRjJi6cmryq7y68y1R9QHBDTKkGBHeQ1Dxuqp9y",
  "key10": "52cZA1zDi3635GLAcpmx1enVmY5GASnkYvGcQyGm2N9X4xYSgZujx8Au5zhu61dQ27CnbiHWkaMVqAk7Xbk8oTWD",
  "key11": "2FC8J3FZmGFiZtmXwW5UsbPKGiEc8A1xmdy1PKeyimwnH7RS92jNTXtumJ13CVz146tEctg9CzRYGg1r8Nm65Jv6",
  "key12": "YxG45qwiudDZngbhbZzPfEWSJ2XG8mfVDhETU5HKEYNpdUQmo5krzgDscJGtVS8rnKmMwmYweKZaCyUG7kLc6YG",
  "key13": "5sSBQECvuU4mVYZcwsJKzZ63TaAi4q7FBxnvetJfuziquyekUfvZbFdDNowZ5H43LSUv7oPEnURMvabxdMuJAQRq",
  "key14": "27SfcJFs7k8ERPZvmFSHCqAfE4r7fjGfBQvEhShh3tMSvFHxx1xBDaNEhBLLTeDdp1sgTnvAyZH6wXTci67JPEPG",
  "key15": "3BfS4URdxUHRhh7LX1338WHEW28zkZ4VGRFpd7CDzYeQTHKrkA1nKt2SmPjnVU3WY3nbsgQWeRySuytFDRha1jqX",
  "key16": "5oEvG3AiZTAmMEHPuYsHbiUy5W4Tf8dEprAHV91jRMxkwGpg6PpieP3XBYtGDy19oNpcZjSxKkMQWVKzQ59WFUcU",
  "key17": "1yGrnehMAZUprbqqJgRKGgc1gWXF1w5hQ3nR4WTi4Q9d6P6JtsRJttq2mjteppKbmah8UkkCak9GNu7VKMg16fk",
  "key18": "r2Lb7fu2u5UP1BDchGJtKHseVEEsgTQ8swL3HwuY7JJdPtb9GTEkmkEQiM2JfdXFHHueLhsuTQoDWQutriNF6Vj",
  "key19": "2TLdyahaYMcGT9FtfYo1zaxhcTekyyhyD2a8EYNUtPAPtceNief597pG7K4jUV1dSQR33x4fAs5d8rEG2Ka3ahWY",
  "key20": "4GqgRvzX2E4tjLxZ7ADJVV45AjAPw73gdqQRLrq9wGBxgR8xjThWKU7vd3xDgt5jQL7zNUF2k3B7F5dQBTi98ZFo",
  "key21": "2nJUm7qXMrEySjWBnhsmzng4mtzq8Fu57obp9qmv4kJkBrX1NWpqzfLShHcGaAtyNZvrjkJFu9oPS7W8GfbTJXRN",
  "key22": "2ZrV3GececKjBqhRkawMFVHxeSB7JfLEsuH97HrAoWquFV39KPbweo3jHquRaNezJ2PfghKQY2chhifvDG2JVNeK",
  "key23": "1LXET87ePuYps4vm31GvDFRRVrr5gvk1nCMwrXeQhzNCCcuLPJaK1c1WExUCTQX8YbuxCsNXsHDeakpKYMQ49gC",
  "key24": "5o7RXStbB4tcRNw9A3dx7U2UF395ahjt64GSvdksWWcKDW4pm7kzwXsJBR3d5WgaQka27NxyaTc2KEeSzvwdXm9Q",
  "key25": "5kHBGQTNssPaUH5LXLX4Ydh8kkpHo5LSu5UoJxaugrZ8mmY2vtLnpaRwdX7xYVFSkHSjs2wg4CdS2PUL3ByfhbzG",
  "key26": "4kGwzckKXnqgmAEQZoNmNCQsrxeFcB3AuqoN72z8UBg28AX6Q2EGWcGuwTNxegNuNzrHEVnV83MaiKqyPXkRN6hq",
  "key27": "moWGNhXY1mVFBjqiWYpHt9vYM9uZThxBmWr1g9qsrY4UHkgPNjRqhsSkcf8EQD5gPYceAnkU8wu3wW3oL4C52Vz",
  "key28": "31uQgQuMeMLK3UCbi1zSUrboJUhkhhqTzCyy2HXq3cjxixKntw1btJ4kk3fEkBATqHUjhRbkP6Sd5om9u869Ye8Q",
  "key29": "49YgcDusuntDEVBKLw8onoqMaWRrXhwVTGZPzArmMZTsATrXQSjUi5LdgjT52wD84dKj5YVwdaJQQqrmgz55iDPv",
  "key30": "5FLMzWutKxXCYcmVeXgQ4Spa645JuhHas2a94HxbJdqp6sNyjuZcfEuvroGg7WxywSuqd6QHKYjyocSESme6MXWY",
  "key31": "3YU8VRH84fPwVZ3gm25vBwkBBKQMpufFX7Auc9T4eHGw1Pav2TCMYQKfjWrde2cHkpV9opm7sDumYpB5Kg1tGLWb",
  "key32": "82UTcDREFHAGNsXdtbhkHtN16N6j3BBdEjvv5omqYrMBeHfXudEXBn4Rwos3C5yYrXG7985FhdgpeiW5yGaaXoP",
  "key33": "22QMVdKq1KKPhcRSbEyb7k9h72XwBhcKZg3FmUuzxy1tJn3spye3ej7RmW5rKEN9koyN1Pk9FmiMfBpXh18BP5MR",
  "key34": "538455uqXbEsUwxnxsTAdi8ryHYSAvbzedbTWf1Uh1UmgojpDBbrGRYUoJ7U3A4jeWrzXWA6dnPbLS6yhpSchrQ8",
  "key35": "4BS7FPKtLSx1HuYVTDEyff1Taw5SyPzs1PvAquiru1DJfMnDG9qReHq9Z5L46YkdrHSR2zs4Hf25smmLBjr7Vkkx",
  "key36": "3eXWPx23AmVGeFwY3dmtWQctcW6dQEwUkwTR3tYmCF2qeEgKJkVLTLD8Wm51GbK1irM4nkcGVdC1FQ79kE7Txeae",
  "key37": "4FHBR9Ld2C6bXxge1E58x1WXN8HL9ugLWsCowuEdXrhXBBjcrtb1LqKSZZcaAERwY5vNV9rNPBPsMwYZsnihUAnQ",
  "key38": "65MaJHMPbqWVM1WWWvrNkoRuRKLE7e5yyoYJbk68CnGkc1y6me6SxCFexS6ASbMPodRKHor6brqKgVA8ZUsSYnFC"
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
