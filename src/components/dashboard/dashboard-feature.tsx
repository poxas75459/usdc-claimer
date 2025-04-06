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
    "4Em7QkFmLtQDtSCuoPwDqqpaxXpBcX6JEFK5pk958LsoPpmUDAGPmQCBxmXLMfydgs67dNn78LYPR1fCR1FzH91u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1T352oKz4RNg1ZTR1mxjc9dHTiposqgHKSaYS86R8bcnJAAtHdPVsKmvMTvr8pmJXAmttoBMe5gErURkmHkZAd",
  "key1": "3EmBF2161WCTGhn8fNjn75dfSAJiVATB45DhrekKe1jRPSDjWaisnevUZf3EJoPMviWDEM7ZrHLMUjCuTLDkaqE3",
  "key2": "4abqPDc9x8z3jWGDQ8wBrtuwAs8LM24ftkAvNHy7Yc79XNtPKugfPD6rCnzWKww7rupVnvLDzTKp7hfmUZP73Vvk",
  "key3": "3Bem9w2u3rUVZzjYrdRgL6u4zpWU1NvrsExeLpNKtFHAa2LdGVWj4P46Nd79ph58AjasA4hUtzE7L8rNM6W6BR6k",
  "key4": "5F45rV8F7kgpMjrve95LTN4uGDtL89xUugjDMoNJp4ka4G5MfeqeogbfLnVEqBkG54B91K2Y6LjfZ3Sx4TTF8nvc",
  "key5": "5fxJNCrqkp6YgfwstbZsDfGqPrsPX1N935KzUtBUtskRCXJfbsicZfX41Hx8fy9SE794GHEW5CEZydiAM9EGmgyh",
  "key6": "4YcEJ167R8vFeTei4tQDsDmm4W6aECE6gqDxuD3ws5jEZPYc8yjSqAJcjzwvXke6h2ws7HLcaqF3e9zN6yAG1aKV",
  "key7": "4sUk7jjQbcWZSz3JCR3RkAFefkDVDNZ4fFZkLDdMkBoSJGp9EuXiz18vo6YECLRkYzJn5mD2TGdzdoHUxX5xbgKy",
  "key8": "27XUpKLEGQSNzFqxrMoKjtiGmr67smFyWG1hCMQpeF2ocM3c2pEiepwKz3whKiY9zzC6jwXnpZ3ThKUSZWWCKsnt",
  "key9": "37KKLqhfAVsEDJadUfpJK6xstmF6ZPUQHaRFKYgnxnGBnKcMZ1Bo5A6FnYa2VfkCQ8wamMo8n7A45prLjCSbigAg",
  "key10": "2t9y4K8HZ3BtzXbvLcJzvzag2D2Wc2MU2kSA8YpAdoTyckeeN1yVsZYpFThb86DgnKPo5BhccLt4zEUovBj9jTvX",
  "key11": "5JYESFW575dsYFuj3VhVGM4sPEGJZMpfDwdkynvp8Hdc8EpLJ7efKAr3funzto4FoLaWGgrKVkscPsRRSkefKmno",
  "key12": "frKkbVp3edfEaZTMpNf9oUiHRFyF3H9WT9iCnHs7TabKbxvTDunM15nv6UQFEJxe15jNvn66ppBkGD1NBk5SpfU",
  "key13": "ABPWaTQCR99fLyjtckxynVyYpnBFvvgvVHkWfnCv7ZqDHfWEjCDVhRFD4M8R6nXJ5Phm6WM9kmVArSe5Davbdz9",
  "key14": "3RCEJmq2KQTqPGCPNLPDXmtVyHSiKy8ZCor8QSfQaqVGro93CfsXUaZxNAadAJKXky994PeXUD1XPqyt6Cr6goB4",
  "key15": "2gwXCK8FakzUSzuB4YmDM9w9ksSSPWjc3yVQP5983RDpALqbSqwmgs9mbTQUaj2uMdsSuAukWoEkNuzmGEq5MXu1",
  "key16": "UgT9Q7iLA2sb2obdLE9yN37dWpoWpwXaHdRx2Maehy3d6saDmfeK3gvkCimk1Jiw8pPywLXfGpw95jNepX3hqdJ",
  "key17": "2qhYd2adAz3JfxL92jatGq7aXow1ramDHgzrvz23vnPmrMQr6uwY2mWJu2NEJ2uQ8JBZJtaq6ofCoP9u9viuaSfm",
  "key18": "2kLTWonpFxbaRL8sFm8aikVbXfpTVrbYF17vJXTUZzAacZh6aL4sWRXWFCsAoF27EXY25r53U8bATEEoxYeAxTht",
  "key19": "3fNUejvWBt7WVWcsaSZh8FCtMvU43vaKQbG1YFBRSyNULhebFX7h5fBUCJxG9um1kfuZvVriqM9BmgfotowAcFAa",
  "key20": "2RLbcn3QPhdfQhUpFozfmr28iRt2z7muDH3Tfkn6uTbEvPCwLf1jrWaBPXx2ua41freNiVe3ykuGXNNiFYvffD1P",
  "key21": "ZwU4s3zvttq5MPwkzaYHdpCGxZoJZxRhWD5Aas1gxuLtYWnvpU8FSkJp3Sr8JxKVteWJ3ZLuJ3qdvgdZbM6PBT7",
  "key22": "3ZmbiCSEPjqkz14SXfnovyqNMZQjRxgoRBwBpHRsi495tLZFw9kf1b5RgsZSnYqmZkXzkqpaeb7VAjqquNdf9qa3",
  "key23": "4HApnHqvNTjk6q65n7PoEDdRcYmSi8sKUtdLpUjNnM1EroYNQ1NtSZXz5LK1Em2td3k82dbdySgStG8cSZoYLAen",
  "key24": "2nXks1gj4Q6GaQHzP8ArGXG4vBe4gpYwoUKdwHMtTeq199knZELqWh9iC9vByrzKhXY3oJ1oKRjyS9UPK7DxbsPa",
  "key25": "5sfg2v3p6WvXfMYHVLjdoiLYumbvYJBrs6u7TLt4uBjhoK2xSbwacy2S7Xkbfx1Bj3Hkmh5WXHv7YBQqrYdotm2T",
  "key26": "23xvTbkyg2Fjc8TSMZ1ezhs4TCxhAprrGmL5BLE7dG8325V5bHbw4a1m9y4c3PvDDej18g3jHJ77Psu8821uw1Th",
  "key27": "CywCHMGSPmDCBP37WJ6iPqXqxoikkAvxvwNeRVdHQ5bBrBHJWYJGkMAEJedJascnrVDsbtDToVvtXgswc5i7BPk",
  "key28": "M4Yas6v7MQr7qLnM7kKjiWGkiZCXW8vTSgkw8Nm8ymzeSRCnXwoizzHSrvPMicqkC6DCUYF9NqH6k6KWXYKeYZF",
  "key29": "2VKzGP2P7PMLGpUJabxUvaKnBNufko9sDqqnsH3icrmAr33umLkTnd6euq7TN6SaazjdhvGtu9gqaRYmzAkKMg6",
  "key30": "nKWKZ9DDbJGuYcVvtXAD9qYyW9yeT5tpX3vj2YMtxSTGxjQkm8dkBtSYdZA3SUtyyJmpvyXxopuYZiQ8K1ZJQB8",
  "key31": "4eBQLnmJ79ts52ZXMs4eAa4StyaQTGzEWCxMDqyFNqR13wudKC2U7FV9ofPipKD6mLbgveJBWeP4f4LgSBLMXRnC",
  "key32": "3f11T6jumHYXHKKpi7GN2c6GYmbw4rTca3oZsfJLcEDuwKmzFiB2avAVhrrTepY4mi1YMU53c81pjJc4uNQ8cwAF",
  "key33": "4JsCyK4TL4eYk5tD64bdJzrcEzYdkZn15gXW84A82oiNNveR4YPzaQpoVGW1qjGey1F25NYV2kpEcVLPe7Dkcuod",
  "key34": "2wLrBCNJ6biwL19tqKE2ZjcWX3PasUC5osgSiJ1xJuVh8YQkEYv1cEb1KqFFKFdVXuDKRp4173n1oXVacjnX3xCb",
  "key35": "8NtJZvZTYr76qoKxnpWUXww2df6o1vapfxH8g4KQS3NuQLZpdB8tcNVPQHFDjJXxxQZgTt69YfNaEt1JZ3KqfPR",
  "key36": "3nztN4Z5sP9kQUEP2zSutWkS4gL4x7eLZe9hX7XS9VqGBcPUdSyEHpN1bMx8DqGSuDx1cRgyeCbCeLTykXVFu12P"
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
