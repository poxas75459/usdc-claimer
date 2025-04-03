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
    "4NBDgdAGcz5tCkiZua3ZhsrwWE3ifZtLEg7AJ2EPNvmKdp8TwvmD76BWrxaWn3DJvmxqFGuBJXSv556Y3YKusEBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vuj41Cvd5w5Xp3SipbVC4u95xbmhnjuCWsy2HUQusr2pjfngVi1qDFEwapvMVY5x8vhVdHU1qbXwV5BM7W6iSnx",
  "key1": "3dsRChu4ZqJhQYMcospN5Z36UsB3zj95Q78oqJhd31yFrzUf9S1e6y3LL7BmJpcyM6rX97zBaprS5vEjCD8i2qab",
  "key2": "47ujpEYErxTx8uvPc8i1xNnNYrgURfe22YxXHgUvZNBtj8tDxXu7hFy5bYvbRqteCyGKymf7jNhXz2uqwHsKTMoY",
  "key3": "3VXeks6AbgbiyrHPusRp48djPM46fYAEVTqq4Ht5CeCY8z3t3GfRtzAFEaw9WHq45UvkNYQc1rdMNNr6fRvtkvpo",
  "key4": "552dWzGVFxV8t3vPUP5twasHAuyu8zK9A1Y76NfvCCX2u357XoQsW8JNfMcM3c3JhGJBbwFHFNcLa7Z7y8XPUPu3",
  "key5": "41vSL9Va9ZTWPs37UirNTFgnFGMZKcgkztZ2U16LuYPsc5spZ8gCzqZGMGXpetkRVujozAXPRGSVvaPGmwrU9mtr",
  "key6": "8idD34yWvLjpYXMCrjBH5VmebdWJZgxLCsortCTcm2jpa8BNEBwib6sLNX2yprGqAXTC7sr5pBmVYiSPaWjuTbP",
  "key7": "2o8ZdaYuo5RxCTM4f4dqm9AmSsWr1AQyA8URx28zPC17RWYtb6FgkhpJTcGV7A6LR9LF1DuWCfSooCFMsewGqVs",
  "key8": "24Q8J1KYzkhzFmwQoZySD79Mhdv89j787rkbue9LaATaBpaSLPmhqcHqcZ7Dxj9eS5bRQ8m6NZ7tZyqVAVdEX2uy",
  "key9": "2ezuZKuApSUetVmESdaN13HzALu2WvTg9X17DPyPyoSsQZwWwZurL6HLZ2bjZLZLp8kvfJZqmqZ8xjfL35rfYmwS",
  "key10": "5znNvD9tnWAXBRd9sTeXuhygwmFWWswmaMfZps2c5uJowsTJ6QZNtaFRnkqV9kXcoiHwsWK4TG5aSwHTwQi2eEKv",
  "key11": "2wdmzDNMrpT9a7MFtk7DwQJphHnrT1xkHv7Suk7hbLU3fyNScWQXpPdyhvoXQ6SfKhRPJ49a3j5SSCMuWkyNmFCB",
  "key12": "4pxcouwwo6WrkuB3ChfQAXa7hs8jeEUNFqNDjXGxDJxEfeUNnXcC6mnP63UqEVEqUAxLYvNNt8kckkR93npxvzcb",
  "key13": "4TQDN3YNeLEBEPPekk9GGdboJKYqXEySvdn7whZPY5XezphS5MnytYQ6it6Y4g8t3MiZy32xqfashmfTh6FwCMee",
  "key14": "2qi7TBkpfPZUXoa1quCfivgwTS6YLM96B5JQHLFmyg28uicd8xTtAicApprYN3mZJ91GpH3E3iBFQebhg7EZgxnb",
  "key15": "4cE72oSCMyysvPmjE8YxFcgVC6JtABespk1jY1vbwmnVdStNjWFHUVMwUYoTjnHF4LxozkBJZoJR2yvmkCRz5KvT",
  "key16": "5nmpoAPNzMrkSmL6EtMbAyi1PYWv9UqeU1LSTVRfmUq5rdKyVDjTQvMbpomorioVNvjRv6hRc2ogcAo6zEZskGnD",
  "key17": "5X2N11z3pSem1nzKeVU1wfnwMekpEUgBpvTnk276aJMr6zKffEoWNxaJUFXUsqu8XHhxPMccoML9Et39woXwRHZc",
  "key18": "3GLt2rZBKunomtwSRFTa6QAsq8wD2FajEwJViXBynBdfrLu4hzQ7U3E8cy2LXLaBMNFpCeuec1PmhoDnfJMhAdSK",
  "key19": "4GPF3HqfiWGeHRvL8zdq52YbCfX5JYH31ucozJwuWsX2t3tXQvcvHrUJovE89DbrNvsygAU4aAwKsSzZm7spLUi6",
  "key20": "4vmCvhdzwoJ8FdeKCJ5Xo4DCK2wr7By2uoUQYyRJjH9MNqogzHqeKq3e81fLSvZiYb2TSn4hjMEWLDUWDZaFiiyY",
  "key21": "88KvNjSAiNb7SVQw5gL773pnrZHwcgTf8jpgnMCuoswsvnCK9PZnKsU3L9cspWGM6SRkDyp57EN5Fru4cPKAdZs",
  "key22": "5Ad43fD1cYw65GD9BgVSMTQrjyptr3wPXWHEkVs4KrJHC3nNEXeKVmd4YJWY9ANXFCWxVie1n1L7NEZPXkMRZhQz",
  "key23": "2xKaoRhALi2a1kN1HVXsG4DJyJAik6zr6YL12MZnwDUeMkCiBt6muniPzAA154vVYkUreLCnQf8PBwpSoLmYgx5Q",
  "key24": "2mVYsjysbBMjxVYkJcK92FzU2ASjKXybMP3ZpXvmT9HVYQctVfXqeRwwQywjMqbinBcpw4TbQisUNf4qTm5i8N8m",
  "key25": "5hivgEB388C2ZivKgzzGzbU4LJiajbMttvfCn4NaeuBUEsdvusGj77KxQpUX6kJ6SK1QB6b5raHSggydck13TEcg",
  "key26": "vrZ5PiznBCiYobV8B3WWz2CF3WD7HBbqrHCnwEWPVYUp2L5pJ8xzLgoxJNGv3BPYRdDzK7M44D4Vrv97gbmB6EL",
  "key27": "46jxAoewJZ1tgPqhFt6hEHE48UzfxeEyVmyYDQ6TKZnoHZUDU3a6Xri8kAEhvSQvcmmK8jVccvacNwkATCycQzGo",
  "key28": "5Mg5z3YbARfHNAh2kJoHmsVLdaGbR61FngJLJNJiFk3JrvyXbNiikqLFmuhfddmCkxpqk2TVwV51mFnP3u7Fi8iF",
  "key29": "bwUMiFKVBguKoc1q2SjGEK5FurD4LgKEGnj8ZZAqhAQqwZN55KNWrMtR4WYPYws2anVZ5Jq4gkHCzmbPsbu154u",
  "key30": "4deTmvTrvcJyjzSiddQJduXePhDMrMzvxX8e2zqaDLTZGAwgqPX4uwsmTTUiRa6c4uyMKAKHmTRtdt7TRNrAa445",
  "key31": "4ZAWc8zRXsNBj5dzt23H8Nj3yzUGWvMiEs786PQxUcFVbAiMhKonXBV65uRAFxraztoZDAfW31cRUr6P3eUFVp2e",
  "key32": "5FVNyZEQLCab7GKMYmb4DVpWCmaeRh1jKkNrzWWeJPDVWJ1X73ec25VsdZEBqZgCTrGwRZqkX6yrVC86gBDrGsPL",
  "key33": "3HCPVpbsoGuHYArZVu1irkm9nWuN2wiR5DSx963kj7QVYpeLyRMg8UAQKEZDUP532gfRz9qKgS5bsGSmXekmFMwJ",
  "key34": "31WVpuWMiDCjZNuRPcTnBD5fc8XGiMuLprHL94xrX73tiYrJpW94vUN9WfDd1qg7aoEYs3t5TtNpoRiki5ApBqt4",
  "key35": "4JNMKyorSLzbg6tDuMknHpbJ7hNxcyn4Z9sn9mxkMazoJgZ2dmFvWuAbmwfShT3uSmF6rWRDaWyv967Q5EWKni9Z",
  "key36": "2NPVmkNWCaUpMCGeqiV6JLneagy87rw1u2beQTWJ49UpyaMHxUvfUdxDFajs7D6KTPj9K2YoprShCaBx5qxJjPC4"
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
