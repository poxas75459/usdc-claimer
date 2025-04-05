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
    "5v5JujrZ7wNDnuWFccYcNUFZckKywzZzhkvrjcVRmJWiTRc7tk6ZXN7sPcsiTLBXSwsekAxzdP3k2iGvTKnpNaXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuPSFAic25zMrf7KAL5oPTMTbAQjLJ2bnwHyFUr4BdFXFqLzbi9gJh1mCaRUrws7rq3TGPnkVuem6wt86tDc4by",
  "key1": "egfnBrrwF7GP3ZVT4Ba5KRfgLAvWaywerQmtZtfnpVqTLDFfrQhBqsm5s1oU3EDBtSA4tS3kX8quMuUQ4Lc4fQx",
  "key2": "3nD8p9TCe96Ypesfd2PAEmC6B7fKr7Eq4ibo2VpWzUDVTEoVSquEmtpkLH92NgBfKe8CQBpP3p9aJaQAMchfzqHM",
  "key3": "2uEVFvy8PWCR4ENYVwLpG3eCbFmJ8WxpQm3y83P65NgZQg2siQp2pConXWjytxC5N9HFMKdC51SPyM3BCuBXRtTH",
  "key4": "55WcQLF9gX3G2CkasFFw8atEr9dUvgvyoW89Z2AW2jTeq2veM4hsW7wDvKSmueeZTKcn4iFucmzS996zT5s4WhDb",
  "key5": "3KCitw4wW24d3tkEqW2cvngrJBEnbvD8oK42VxEYFeTNqEHUHYL2amMVgmj2PSwV2bdvTwc4KsyM8eRjKuRmkvYn",
  "key6": "4GeF6hw5sHs6EfVZPuMnEnhcEMWoWHVaSrB7dp8CHG6tjinHCXAFom8VMKzRWV56PTQxhkSDBxfcSjtvrwMf52WR",
  "key7": "5bdqJLuCA8ttMvLVQJ28sNEGz15ayNKfwR8gcebWAZEKp2NdRdhP1u5SUZLphSnvw6ugM4hwHPDNhy1o2etqbETj",
  "key8": "4h8BKYArab33ML7Y2hVAPDGEAXpE9EofSG5G5zkncRtBTrsKMrWFj4QRkfxXgdc5xSZ74EKA8MfWpQJcNYQzc2R2",
  "key9": "54k289hz6vxNpWCFAFsjwZrh99nqdNbJ1sSLSxAZ7F6Wz9HVCBjLMNADSC5szaJXxv887UgjoVw4G4b8zdXJNXog",
  "key10": "uzV47zQCkvm5wPWU4WjgCKDhDeXSL3kRwb2SQMN35bL3k9oSW3wVYfqGNfeDFGv9HyE4z7QFbABaFzgbFNy55pX",
  "key11": "5KJZe2g1BzuJDikQZLJTgLdNWD1YZZVkazqUtpWErifmdShznVNcTnGFX8ZcAxaPLh1T9ThNcTGPK4mdpW2hvNeL",
  "key12": "nGRmDbjwFReimnsQrixfeTzNbScC7xShnCuhGoGN41zbim26XyRnwSZiozh3dxk5kapuWhctbMWHAkAyU76TZAU",
  "key13": "3jehv2HbyXtAQczUNT5CrN2Aewz9uC3uQwS4Y4rfXrRpccJomsgeMqT6NmYJLXnj2J5gbDffie968x9P3QfE7s2Q",
  "key14": "QSASJN93DBwdYBu7FSJrStiRs3eYUf21PS2UTWfATPSGFZBbv1ZRZ5x2HKhgWsiCBq5hkLwiysF79nhgttFkTcv",
  "key15": "2j3qEhjhP8jdk1tuwEDrhAMjAjAuvfj1zdrDUzmMRxqFB1wvqoFebQZNhVYSXMYCPkQuudgactwiHS46cMfmN29R",
  "key16": "4MjYreYsHU6WebDuX8DPG8QKGUGBnf5apFVtXVebbFWVxHj6Ar7N9rsXsRHv4gJVEY4x3qifsT88sAYkxPEveeE3",
  "key17": "9G4pyWDiqFXpRayMRmrXpSRkE4c5jDUApSkffSuVAnobTAadFSLkocuuW6hAdg9BHEpDfFmLnrs5NNgeVNy1yQC",
  "key18": "2ppZGyxcgjCMG6eqbnFuvLDC1fJwQ41cfWQ5qZzUcaBJbNpS5EQHn8FTeGLTAG1LL7YTWMuTG4WkEUhGcigGGo9G",
  "key19": "5iptzMYE74SZPaiu26pyXPBes1GKsfmw8YXrd6AifQNzqrKi5VpPkQQrh5Y1phzv4v4QN9RryN5j3dPt8KtYeZE2",
  "key20": "wuZFCcyb1N6shpyQg7CbRsEnen8LCyMZ1iAHWHBdNXc9R21JQSfuPpiADKu2GWGJKNPGJrE7Un4KZxLkXmPaGDP",
  "key21": "hwAJBJKMrg8KkvgZFa5KUjUW1eXFTwupLRW2hVyk4DQntPy75vPa9UdSob8Z7A6HtSiAwF2eEutnUp8sVfFQN3n",
  "key22": "39XGsvTwuxkoWTU6ScCKyRPmJWNXKovvqBZDpehyiWE9NJzaWGS2sGSyqNSSPj1d6JeZPh6LThmwppanXcV4GXm9",
  "key23": "xeycxic5T4i2TZMHNwDR4oiNiuLA9R5X7Dw1wEaY2E9iqepQsQKUwawtWaSgQQbupba7U9PVXYRkQSAARQyYaxH",
  "key24": "59NxctL6JQK2WB7SfuTNwBW51N7DgP5VYRyGUM6zDPmxdxRHevxjsQtr1x1mL2CTabS6KT6eNUhXxAfrNzGiWHUb",
  "key25": "2xHoWgjfq67vgbojUUBDbHdvj3e3nccnDdmcpyZNAyXJZkimP8jvr5EbRtxdUSiExoMUqyvEXbXWthRivMbXCWJ3",
  "key26": "322dKvCzSVRE5QmMAVYb4oeCP8V8nRbTxS5TMndAKBJ9ZyxS4Babqq9PvLTAQ82k8ENec35PeKQGtdHUB2sTL59W",
  "key27": "2chnacixfUfjtYteAJ7KfrihphFMNX9HQiebfBNGfkoYM6HvkxoFYyYnkCeuQ33nKCiEPm551Zzhrh1BxduhkC7c",
  "key28": "2cu5qFzMEi2aJvUySkrmSyGFrBQEPYdbrgaQyPsVxsCPRuHJx9eK8MhHYkgB6UjiuDag8gtoVDwuP4o1JaoDqGFa",
  "key29": "61FbPGq9tU9wURk4GX7kdPmcnJ4eAGPuQ7Nc2QtLbUpYAqXMUxsJGwz32ZsumKeYYdS3Jo85dW5kQjhoa48v7syN",
  "key30": "2p7wcccGNsXGDP4j8pR2rMWTfATfB6MbtzNNRH4DoLYTkUiDua4EDdBoBz6ypwpdeJ1wHS4Hf6Shf1uMqNYe4rsq",
  "key31": "5JL492t2KHBmJtQBpxbwxD5CB6KRrYHHKiZbUTtsVkRJ8oydbHVbEmEh7eyVxnVbUPswkSZTsyeXc8MLmqXCryMk",
  "key32": "52PxvHEq6QAfJFTSVFJg2d8MbT7KWqQaKhnAV8iiYZGf1DegBBi68ovGg57WeyxdBaX3caRZdvQJHhDLHBzpuxzN",
  "key33": "52Zjte6wkm68tC8xtr4EhPoMtR9TVXfoAaEoZTwXMCGA5N9pz2AiUxyDfr1BxJiW9amtyxR6FQKfnTba1xoCZhTN",
  "key34": "4P6nQeCMJZckbT3gzwZTVYuheHKUfnLWADbAhL6u8fkXHehzfixc2RP2BQ9SvJ8WqPZTK1V8UJKkGNfxztrSB8kS",
  "key35": "CSh1rMvLV7U2piPmD7XiWjUyLrhSfyJsqrYk51db219uh8c9X1sZEpQJr6iqhpGQDNxj3GX6j8gMujBxF5muk9q",
  "key36": "mjvNfhJNAbPucd89PeKdcDdsXwsszosQyEN6bWubbpHLwms4DK3QVMdcXPYgC3PzPaMd9XE3rKyoX7s8zj2BrAp",
  "key37": "3od7AVGkWVvaaTorKF5TAFwMNZBY1SfX4VskNiQ2Kvf4DDim7Q3U3Nf1RzPMQu2cFrrQ9HpVtihiyQJxt8KSCfvm",
  "key38": "4jYv6CaXEDMLHPmDRXdNFS3oCAQyTdRZ8YRS4bNgQ9FVQxYZGJ1gtady998qcqFRFmJTiausZkWJWPLukt18SPiB",
  "key39": "4pNnGm5J2p9Zau2rFhShVPcRHsx8qMuowEJF2mMqrEBnUcS8UkbB2tbssuMqWM6SGdS1eiQ1cgj7P3yXAv5aYng4",
  "key40": "4UJyx7jizmR4sdH32rMRkFzRGfzTN6WZ4zH58DWCNPtUrF4nyd1jphgw2tF6op26QHApFjeg6d7gS6GtozMdD5na",
  "key41": "3H725FdGefvi7AawiqZZtCdroCQ36Vb3KZdcHt5ZY4GxcXsN3TrRujQ4ZAHMgicJNDHqvK5wBNfPPLJdk7d9P4S6"
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
