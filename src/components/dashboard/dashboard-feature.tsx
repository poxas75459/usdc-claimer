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
    "8EwvNn8yuQdNg3hwBJVjGipMZbjhQrQ4yD1WANCwb4LJ88phctwQfKSdpnPzS4dF7hZLDi3b7Sw8QhLn8WQxuqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y9Np7c2q7en4Yf337tnoGJxpsxJQwAdJC1sP4dPjWrsgETT8dYaRvhHfHyYeLjiVJ64JjjRX3NuKC64BEbNvCzP",
  "key1": "5R63XyMmGJg9UQJiZQLY3rphsHwN28wiuKZzSXD9djvfcmPuMzeJQuZKELk9sPZd7ywgaXHBBsvvGKMJX4nhqtqd",
  "key2": "3J3bYKTvCHfSoKwBQzBeX6iCPQMWdcC2dADr9qGPk2a4GabxXZtmHRjwiZnugVuqQmcCBJfowQMWqWJDXktnuDHy",
  "key3": "4vTCK89yK3eXsShs8WEZR9u6iLVuukhe2NYCKU3dGZQgzeTrxDUjUSWe52VQBCN16ic6gddAtU8H21QtvA2W7S8X",
  "key4": "2kvM47oEU1QK9v9KNCrKRTLrALA1YGWd1tMYDj6GmRVdGrkSjnuXdRzwDJRgYt5gZzCxwcNaNM8GS44qY5HwphYG",
  "key5": "4GWChHkXFHRyn6oJpNHgt6am2hQNG7yvxbNRbpHiLMGBUSky8tqgNpEneq9LEsKpHK27TqqcSfnCoBnYWSGDXnMv",
  "key6": "Lorq8KsJwZtMCprt8fpVEy6WyLV4Q2qGoBKqFkGQFGuA7prSESfc7WpAPu5zyZEc9H6K2BtvSnjhqqZPPB8ETxG",
  "key7": "54fTWQxTrHvZFZC6FAoV1oPrywmUh9frJxgY4ErckkR3aPLwCwL52pJQwaPfN6ZDcE8hxJLFdDA8Bq9GFWx942nq",
  "key8": "2ZZjhTkt5skTuW7hPikLPqdemVooLXX2p8peNk3Gv3Xkbs81VzHXvaFhmCpEVJPJL7FwaajxQhTawy6hfX6qgFj4",
  "key9": "VcY75h6ZxiVgvdg4AHtRunWPi6jaCBMFqqfFChoiupSEeqNciuDd3iUt7SUPunh89CHnMMYk3c5hkTR4Gf7Pd79",
  "key10": "4JpSkheFii7dfG6DRu9ftBonTqXVRH7ydqDDRuSuKH37q7wGoDYXhM6XgM71rFGkmXp4te5xhuLUxxLjFTYxwx84",
  "key11": "2Jt3hbPDK1sV1aswYt8fRajrnUPpzJsW6pdUsfeMSMt67n9Zi4EKicCVSsSoYoKkkKcSSSEpjAj8JUcAcHU9qM6J",
  "key12": "2MjuVA6mpy92PQD1cAcHZV2vzpfs4te2fAuwVMHW2daNpdyqM4mFBhDrhZsfm2YQncsi2C4HCo3kUKGktzu39Pve",
  "key13": "jqANUqxFTBCvJwXUE6sHkKAUqTYhZzonxkiGY3WXP6ToGsg8EvcUKZLJ7K3MMqG8rds9mbiWbTww1u5xD17ogq5",
  "key14": "A32LjHegBjV5QUGJQep3HV9BJXS63N4PbKHUHan4PRhAdSDo3gimrSnvzrCakVhTMWigwi152o6Mfqwpt3BJGDH",
  "key15": "3FxFPeuVXNVDkD2ToJaWUpDBnXSrdeUCPDgM9JVnMoy5vvVmQbNPF7pWeiahxDmu69cPBBbjH2JVY678moybyUs7",
  "key16": "sytcbwGtmpKLX6oeyq3ZHJLVnq7qWtRKUPdXrNZTRULGoA6Zc8fJs2Vr5MW9PNfWbyuw9g52DodboPMA7mQUMmU",
  "key17": "5zg8GHFRukCx4tisfRLKCKsghD8bFvQSGo9BqmxtjaAgYLespwBWaHhwtxjLa5TBrYmhjQqwrNZYCJQhteiggvY4",
  "key18": "3MwcUgdi4p8srZAjLnLsn9v2RhKgJDdbpjgQyC7vxXaJFKjxayVw8zQSrU3cT21atxY9RAmEn1r9UP11otLp65BK",
  "key19": "3oRvLE8dHjDdJU1NEK1jUTWQ8P8PoDWpkpnPTifgjwnpgJ3vQgkkJgdVD6hop91AgsgupbbzPv7D268cWGx9iK8Y",
  "key20": "3jwWq331FDo6PyuevqL3DMYRKRdFwJ2BfQZYoKhSCzgYtqovuV3udDpcTUTVXVtAa2VsGD2NcCBtzJZkmGe6Uztn",
  "key21": "42GTs3TsGwmijxPDgrgJTC3vSbJJQ8r3draC6bPgWhwS4S5P1xodYRXM8vSpPThDiM1T4jqXjdpAbkUZYyviaa3B",
  "key22": "3CSttXwsWuyhViwp8fAaN1G36GxHiZtvoELgcEqDWUsvExmcvZhgkBF9T7vJKSFMcHNNa8E8HtiLM2kpwWsTTSSM",
  "key23": "37Q2qybdqZT3wYERijXxirMsH3JfbiMFMttKGYXYUBy4H1dFjFjBBd3m3XSoaTCAYQG7Qq3mGGT4LsSz9P2TwMo7",
  "key24": "RmBx3iTthtBxXNDLV1XxJu9k4dm7fcv29an6b7WMh1mqaFxdcr2JwsZ9JqJhV5Fk2HpuHuFpM1pvUye4wJdz5Ky",
  "key25": "665NprVasvmR2ubwER2sp3b6iz77KhFMGfSYMJJH71P75x1zHvEvpE9daS5P94tT6dNpsBhFuQKy1WX2xCQC8HcG",
  "key26": "3S1gL2PQcbxvMQUbFU4HRasWKAFf77FrYzaMwsYG8wjCYuEsemxp4xbufWkZF6iv9XooKU4YeV2iF3ZuQqP2ijRw",
  "key27": "46m8NdKcrSyA983bCgx5j57K8D8v3DzZP1P93Dsy9dAxpd3BYKLvZwg2X67B6q9HEuR92YSpvC8KMAPzwr3r54p",
  "key28": "4Y4kfpTLbLZoV8oBGJezD2fwiLEt67Kos8YYAtGfXeuxbvZQGut1Sqq6o8JqXdhs6aD4Z1UBPsGUz3vpbLHQq4kR",
  "key29": "2RnFPboyZF6tpSkoTZHEwCz88tMTZViAoqkKxHNSGdzBiyRZM3PqjpDVxdy23JZb8PiVPUffBw7kCq8eGPFXawpD",
  "key30": "Y1uJe1eoktKNAaD5RYhQn6W2DBVsgHyNpmcC7d7CYHtK8bDYd9HpxoidXFj7sTzCyRVkHAjtvKzYfWH6W6uWhwb",
  "key31": "HKDnzhKq6RBPWS48h5oQUBaEaiaV2v2Jt5r9U5nXKvssGL8Wk3zzEWHJkYSGPyBfhqbBo938s5UsCP9WCKga6aD",
  "key32": "4dFWBfzGR4EnSpiDbVtNc39mavzqaQy5Gjjy1rY6kJi6tSQmfc3RidB4GPSia9H5JMSyXCQj6KTVpEMxm7cVbecr",
  "key33": "4KesSS2HyrnkeQEXnvyNDMaEC8qVHy5RsepTeNtKRYJ1WnV9QH1ZRZ5Vg6TvTUSHmW8VVUkmSTjXqkkFxFCmZ7NW",
  "key34": "3kiH5GVTyp26Jgdf399jesbmBF912uCLAeT4VviBM7FNBdy6yMJ1Qm2a2MpWA2qk2H4uxymiZj7oPrY6NMr5WmvS",
  "key35": "4J9CJHpnUtW37W685A39owqu8X3sEScVMhs7E5zFyX8gjy9t27VTrmfaJxQau51XVFpeWdnwhobBo73M5EqvUCMB",
  "key36": "2kei2LGpRo35nnf152kePv7wEwxVJRe27kgjKNi3ByaCbmk9UaHzn8WMqvRb6yPjPx6TtsubiJi1yhPYoMg4iYz",
  "key37": "4xDW3GqxypKm5kU5tst5TJ9zDpk3xZEDbLE4rrQYQdgRdzxEHDsp1pKWhqZyARkM3mZndW78WcJvDdBA1bnJhsAC",
  "key38": "3Sw2Cb99BEd23uKZtrL8ZabBZW59qqj3sc4fbvdGnn2AFXpR2kNZjeVap1BByx2cDPDH5pfRfMW8BETgqAAsPAkA",
  "key39": "4xCUhdwMvFt6STHZQZu5by3rR5ckVWSeyLJDCmCdPswgAK5h2gSc9HfLguLHDtGb2C6PHDM3ttwh25RvdMkG5GXm",
  "key40": "j3stHA6hqBADwMeqJpG8mHgCvdbCRi6hJQTYR8WZFmZfpAsydvHE4erUREsmGhLNV769KaN4sXpacymjsB6vUDi",
  "key41": "4KRTpqFC3mGXDMWK4d4rcizjBMAe6jvHU7RPxRH7XjHCxVaghquLw1tJKSVohbJURKk86iL9u2rD9t8qwumtggQN",
  "key42": "4KNNjzx3vCbAiCTtV1DzXofxeYS4Fs2Ku16wLffFvLfVPqUSCzppCYGAscGWecKAg7kCRJD9kxNhFWpSRciv38E2",
  "key43": "ebgUE12rWz7YqJQdN49wkm2fygKHma7ti8qPToouWXVLaJAr2tNeV6RBHWiH8goAfgpmJ7Fgh5KRTW6ry1CoTJL",
  "key44": "2R3UHDjETFkWex8883DcV9WYmwxsA7Ux33hvaFGdmXuuzaz6WmR3xB5QixDjBRunDxbYB4J88mgQUG7bsxYE2G1h",
  "key45": "43suCaEvi9tfkgWhucxnCinuhNh6mx9WQ6zZ5WN9x1FVdYRTc631m6Ratr82AMMwgauXhnXi2qJ2RjJYacnjf54B",
  "key46": "4qmKdmZkC5Zt4MmBtehRHqzy2HpVLtgDWXkTRA2VatLKkpWsvhED5isGsbyKp7GsotvzHQ3GWauYt3oHBaDJqQfN"
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
