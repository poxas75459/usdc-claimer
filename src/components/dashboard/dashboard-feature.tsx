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
    "MmVcbaK2KUNbKjkqWtMF6a3FnZT21Fxn5gxncgw6TNN8Gii8VbE1GgHjtjgfhmekbRm8fJ2uCTTAH9pA77Whwqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1oDmSa5bLRWgxJz3J6KQ8Z4Y9MJe932QjMSgRGt6vTumiokvmZz3X7upY7p71ZJ9E6vP55QHm7tLgqUcvFbqG9",
  "key1": "4SSdEKetAUnMEw7Jys8eWCwYw8UnNJmiLZdXy4gRRUbGEqonByzCf7ozSpDP1odHBvvoyAbLy2k883HTQ9Kd5d2Q",
  "key2": "4fYek8jDNfjr5LJVK8S7WVmu2y8P9oDwMJcrZ2GeQrEXKq4aDYMmussaJ6tbEVux4t7qB1Lm87rwbFHUs9o8batj",
  "key3": "4M6CmmrxJqJ1haHZ8GMCdNgPLYQBWneiycLRDfTmWqNfb5bDdgnZgtZwq75RZLVbREvYfpnKLKkH9hiExsVGs8fJ",
  "key4": "28M8YA2eowj9PdAwFrtKeeP5ac1pavx1BgMjdEHzJL2ydMBaHP16DYDS1qu8VCqbGN2Jyo9xwo1KcWQfkR5NNHg4",
  "key5": "3apxe38wj7mRKZF9ou3kBCVEU8wTvTuQxaeuGbtrng1EdL5KAxhKxCLjFUH7aYFmBmteMFQFjtQVkFsdKgrcuBGG",
  "key6": "gdMz5yHUH3J22o8FTo5jYcv7ZmUD7kM8PyYnqs5ynQSoipRQraCuA1o1qXeGzdgrwsDAHovkrorSjNj96QEeUWW",
  "key7": "3criFXqYNjgmP7w4kHGVci1QRmQKykUbwDU6RLUzpa3KPzGF3Q6jwnngAiexpB1bcJE4D4voegvZNbgKtWfECN6F",
  "key8": "erXET6RFzmD3T14pto8raBD6RqTPxQY6b6ycv5XBHAwQr9A6yiCjN5EnijnHWe8yvmqEnr3QjuYLNgsrvsGWDzo",
  "key9": "257qNj7ng3w4W3Lr5iGtHm6YSGZYYCd6VwKFTzKbPh8bXNmVPMyoNzbZzgH5kPHcAw51XfgRkREaNqRpnSezybQf",
  "key10": "4Zpr333TjPZnxnPxwTkpfd7EfciYpNnG6xu1aYBavfK9zuwyj1a3iDRs1kWF1UHkyaTEqi1eAHsSvMUd6hVo7FiA",
  "key11": "23VFkwDq3df1cbaxNpQDUyZ7cbYLtEWoE723CMGsW6PbKnXFQB3UV2XBgNNUGRAmpQYeuVXBnKtuGgyJ3ZFJ3KM5",
  "key12": "2jmqaPPcEQ1fXrECT7p6ydgfjFLAWVnKF9Kr1kSyn1wwRbVXCkGzSQm8saEEVcjxGcWMF1MpdQrcSKXnaHp6xyx3",
  "key13": "7dettAr9vjU7rFdnRErm8TTab2mjKpiCrZwXnFeuNDgSjvtKPKsSfyiJobGUYt9VpLT9QEepmd2Az75KvNvC6bn",
  "key14": "47UVQm5V5jXqrN3SvFCRUnt3gFwKtiJC7MdGTjuYCVmBKP3vMCjA4aZHAYYwBqQ84RdpEwKtCqfwMiVmZ42TKmf1",
  "key15": "543pEG25VF2wzkuBb5GG2S7UL6Fv9JS2bfeotHHKr46YUJtphbRbaSnn7qRodRFeLa2aobi5P9dnJs6jtQU5RFrR",
  "key16": "ikVegiysCDpPM4umvGXrNXJvizK6dzF1XCb2rYV7duhEFibEnyzS48VMiEdp6Hnrx5b6KgDuu9iTMLTMRALcbxv",
  "key17": "531NZL5XHxi6x7fsPcqLoiZhszbka7T6oFwqQj1a3CgpBxnaBaydatpAdoq9U3QEaiziQa77DhY7PsTcSA7RK9oM",
  "key18": "4awGPE825i5wRZBUL3r79phFywBywYh1ZTisEts4smyoVk2hp5Ttgm58DW9b6VbArbEAbmrPPTBeCa4x3nUHQyrz",
  "key19": "3DB1qaevyHrPsJ7Q55xSYjDnfCsVNDPgBqbUapxBjBtrBJufXzYyG5TLiLF9YwFuPoAFtayjxCFVpBbfYDu1jDZP",
  "key20": "5uLDawv2AGK77pbNnVVjcZFADG7CiYarVHAB7ipgmHm3g33KHG2seQLoPiRsRHPiH7qSajQdcEzrSHSygAEZYx4s",
  "key21": "2Q37HsjNbH5MHNjPtBeLamg9dYdgJ7sUe4dDqpzpf4wwRCimGfX5cBpdsJ2QGhqJZGX72xM8B58QdwkVs3524b5s",
  "key22": "4KX2WK7wmmEMnn7Dv2mZnuyjLJP2X3mwhqkzpVqKm9Bbur6jSTMv294cF6GNeg79j12vBFiJCDqMuQerGbygBh1J",
  "key23": "GR2Cosii6YokdMUKDXfu9B8bzfxyc9EddH6wV6rurveY9an94pBVY7Ed6o4maH4ZdbCwcxAc5eFbbS1WAQDfLXy",
  "key24": "65DKeYBtQQY9TfZmnVFa7DNDienoj4AWNAV6BHQV9x6VEpKJymbxfnkavMcE356ddfRPWHCo6jyurabYWxMaAjzC",
  "key25": "24DZ8sj8dzVX8ExdFoMBwoafJvFEJRTwAMT3MVitoi2NEekyhPWcVKZVSDzyvyBV5kTnzD2HQssSiFkeQkux7ANM",
  "key26": "3BaKejQJzFaRjGj4GG6DY2RHJNo5f7sDh9EZ4NL7bVAaxCG56H42iPvAGiu6ycXNPjbEi5Gmsn2P3b9h8rgb2HRy",
  "key27": "5gF1teAz9W7vyUuryq7Gi6bxmudUN9JWad44JdyKZWtzYXq85crz1ujDhx11n2ns71ePpeeh6bVw1bJV4jkU47U7",
  "key28": "5nyBMCpERTG1qVoFnHfGwrnynQiYCVDJRtsDHagLm9vAeoZiLCRnJah3EKtcpHChNFa5QTeib7ueDg2bDV4qTqur",
  "key29": "2fVhFpMUxgjHihKYtVpuLTFUbSpo6oJtzqvqwLSHisGBVPKuUUg1T7aFQ749nSkbL6FRvovaFpQ1CUSnUJuwsKPx",
  "key30": "2rf9kTa2ex64uQen6eNE73W7wTUVRdfarx2Q3cAXoPVibkANuuVoHMYFgBguxmTrBpnnDrXn8CFxj8zFDqmnJTRW",
  "key31": "33WUmN1J4Dhi7pNuENaneDNgwPc2KLorW5u7bh6TU4Cmb9q1ErKxzvJTNofaRbubEBF2xBpFt3tNR5iPfz1NdBFN",
  "key32": "rb5FVEVhw1hi8cKRjkjaJxtKZMHQHMKVTkgLPYbjmB6fo6MvPagyifZrWMFmBgPw4MDHMbyULMZNWK4ap8t3w17",
  "key33": "2m2KTibYnkMzef5qheuUCYiY9ue6qQqEf7B8m27tXK4ko4vwK6M7u6FtC3Hpdttg5gEdcuJhzS9MFy8e3jvokBLW",
  "key34": "3apxHocfXkVhJNtRg3vH1axMH2LyBduXXFTtbdTkE44ukK37uGThWVzrPATxwBmmv9MphwNpZrHdmD1icxZMQfLR",
  "key35": "45B69FHBceLvtKaAqhQ6Rstwxf3ViuuFaj8AZXDC5Yi5DtuUCSjWrAFX8XtahRrQtf9dm32e1HW2vwZGt2FTa7FD",
  "key36": "5h1AMrZA8Fufbw6SeNiWouQ2DHj3WkcFciMERHQTHnmEE7nQrJ4yhLLCp6bEe5GQKDwqgVdVD3vheey9SPqaUWmN"
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
