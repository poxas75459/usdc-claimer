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
    "3zMBYFfBmkQ3vdYtV3Ehk4e7MJFbY7TugXLSfFzWEPTSH5JVDH5676qMdyXWJ7ixtPZY4PovKdhPpDv7XoF9z6QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNutuddoQD5D8tSJotv4eyh3514y62YDSpH3FwvrvpBEEGrV4f1B5srywxq3rrEBa2V665zyzAzzBZPiAtaRFHu",
  "key1": "2RWWqZ5sqo9LzccfYEp7jd9rtjHyrL2hbtNpa2GBGWPwBeZ3m4y7ys6pnrMMxwdVKjQTrJ4VQSZcNGNsrMGqs9H4",
  "key2": "ydiLekUzHm7MfAgeUq6FBfH6PXRutRocjUGhF7t2FB6bFmHFY7FNUaBkQsAd2yaJiTXQPKtLv5Lf8GNzUVKN4Dk",
  "key3": "4NhAGr35Xkcqe8rUkm45PMhTiac1WhSaQuPMW8crsELTKQUVkWiu4AHtSUzscfNFhhUZFVfC8QanVJFdF7c1qGzZ",
  "key4": "pr9WUr5R4ivhBroPaXFTLZLz7PC2k4FYdsz5xHwSnYVRXYXtgwzxSMsBi78r7KtccZPcb7hs6NhTmQkcd6YAMs5",
  "key5": "h9ehE54VuGwcaaKkK3Fs2P2gLydmBmBCf9jE4z49yJg1gQz32cGsdDg4ZRMCK8XwSxwKBDDXEUBiZtM2BGDAjie",
  "key6": "4xSQRcyEH5s2jiwC8KVAVpVWpbvsmQFMCoB4MXi9SsTh9eMhpgrUn3eBhfUUASUpum1Sb8WyAKfEUY1R17meumDp",
  "key7": "5TNvDgRtxmsGZq7QcgXhSwPvmj5angn8Sybtzb58zZekkSK1Xf6AXmH6inZeJeRBgZY3Dn7q73Fpa3XJoweM8MFc",
  "key8": "5tKQxnNMBEnZnaeaw7vLzX3QSGdFyDfg3hz3UiNus4vt5mUFm6DP8Gurz4J4AzHrGyZ5thWPFsSJ5xZfQ5Kf6Ym8",
  "key9": "4XvHuTQXfhy84z9LXUTW33YbE3R7cbgT5494x6AHdNoww5Vg2kPH3Lif1ZcE38KxoQPjVJfzdMd8zSUiE9QWTnPs",
  "key10": "48NHGFCND3jprGvhwwafyr4wbxx769QZM8Vx2cDjpRUU7e9FRJGgqwafTQWdPizNGvkvq71CLvyivuwwCeZgJcDg",
  "key11": "2RnwSTM9gD6NrpZJKXperenkgyPJtGgX3MS88k1MRZhQwbgLpaqjpPp8oLo4Yy2Kg8KgDVAAjh9rXBzGNpzoL1rt",
  "key12": "5QfE2DbtXZW1KMQkAyT5Ushm6g2qCZnXi46n4enT1Bmz1SEKQ4NsjpdoozmgoRWr3PwduGp5oQBKVNrQ9GquQiqp",
  "key13": "52tb4bK3QZqzDuBZaZ4aVzU3xnsw2Y9UDz5fmRFJR8PoXXJiKrm3tRqbxhPQpNVYPfqzkixLYLfgQ9rn1YY5i5C6",
  "key14": "3vXQCMLzgUxwZWoCsenYdsMRkH5ebgUUq9KthiDpAzvSiw2sJP1nvwf9dxJmHZNYh6A5UYT1csFwgijUNH6d6AmF",
  "key15": "3z1sD3U3ff2ERgFxqDTizZDDdbAdcP6NJA5Nf7QxNjsEH9dirjKvWivJubXSw4GpEnWgUCEV92b26VYoujCrbPQG",
  "key16": "5xjFfuhCfpt9WaLHE8Zbyu5PgXibD6b7rCXQwhrjSogXmhnHz5vb89oNoAjoCi9zZ9ycHEwmGfymvGZDcE196vT8",
  "key17": "2cwah3QC81XeH14VaktVFSdPjuDZifsDq6uSBrJcHUKQfNoT7qYDRDEjUsPeCtnsCWxU4tB9HmTD2eJs34o7GMGM",
  "key18": "J86ZgwhYfsar5MMtpXtR7uMATjc8ryQHC7H8J3JAWFiHQbo8haxsutHx2oqmpAdnZGwXrB8ZsYRrJw6kHrwtwAa",
  "key19": "33AhvqdxVLY39b96eK3CLXrZGn3JgrXsHjCA69V5HRpB3xvAcb7cANWnnpUoL3896fY5aqYd1ksgm5cwuwZgTDf3",
  "key20": "5Ph3SsfcdpU1ShE72t3ghDLdsU5TMv6E7s6i2scuvWv4YuSPZ3PqBnGrqA7r5WtTo8ktBU3HtuCdFFxhktctaUtt",
  "key21": "2AdJ8W7djDDiVu8orb9pRCniTJB9DeEXWAuxBhqfPEzp8CBgg6cR4s62Ln9Y2mnZPHvAoG1bHJU5TtdZZnjmxp7V",
  "key22": "2fSsVtHkM7YZsDWT6ScKR2ohSGyVJxTcXtoipZVXtqtxppyScnWs8ogbx7mQFkert3PytdLr4N7znK9ky9egWT3t",
  "key23": "5HH3PNEiX6xJhobZ4k163CUAvjtPc1RF2ruHbTCS87FPTEsGpnT3YMJzVqevwSzx2sTY84HApkwqrNyQENXoAEez",
  "key24": "u5B75XUbDfnQNUaHQNrANDc9YkaFRmun25S6SerFxsnzGTaG7BqWpY5r3kFgDkQCMc7oHdNba2KLjHarQGADquv",
  "key25": "65SDhRbCm2itQm9LD4iC1V8VYnQPeNAdjbqJDHJTy7WvSV1ZoVpMWFJmUiWK3c9YAU5F3QDxHYRKq8wyYhvUAbpf",
  "key26": "3jcv2eSdwFqHh1KjTiSdGmbHdNrEH2JdCVcrENiDcTzE6PtFH5Bq8KFVDTtF2rnr9SpjSJY1yKxYMVx8kHY5vG1J",
  "key27": "4aZLto6MCt2MKF7n2dB32RsCvXdPsxv3oMizFZwD7JAepUVLp5VmP8RmEs4rmctQbiSuiadDMJzZAFgUdKiixxW2",
  "key28": "5rqVLRj3hSayXsw9P56j15o76ynFY67sbn3BfikazKJsKpsQaMCd23TegV18YSRgnJoRkrDrtmxeqRZKZgg7Wr9g",
  "key29": "4GBiDkarWKGtDgUmKWqZS11FMUbGm7PHmyHLRs29fwACbw5GAnkGxkFs5NkaMyf5SErTcaJDhZFVqznaje5cGUCh",
  "key30": "2Cm1mHWVhLDfegLB8BNq8CsUw1zujkwnXMBnoyk7tRHPDSk5woTckn1FxXGZfCYGTqPDPDYz8qohskyM7cVbFQhh",
  "key31": "3YWRyA9GgTMmzqwGDTgTRA7sTZwxMVMfzYjHx3utTN5gB8aCuEymkw6g3G8Ypnfr3aUaEwFqnH98JCb6XGKJUTnn",
  "key32": "FXQrMJXWrxD8e3nAdrRsxTBAaSxcEY2WmEP7itBcdxwyE3QgeEScSebu3NjXfspB6VrGwzkajtkAKfASXvUTSxs",
  "key33": "4x85guneT9cuEmA9VRQYDu78CLto5s5fMGQqfVogg2sViafMJn9xeUvNFzNwayLz2evWBU2cxLs7PHoKFuuSqtVD",
  "key34": "5Mwx3PG26bL27XaWvwKC3Aqg3jhTBQ4gVQTGeRZjLyUpDm3J3CbUUVKNSH1thngrA5DbSoQ9SUkFyfkNcCCJsKEQ"
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
