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
    "49nG7EpzZnMFTvScKYMkzq11es69Z2iKkP1ueBGwpetBHPzBVG3HLeMGCz2UdCgvTgzEwzazfuKequ59TbDMYcCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ggVhX5ave23vV1fFgiAaMAR62D7nfpQVe8PP7zopmWhGcVjAK7u9pHWdGTcMxNqd81XKuyhCe7V5WNS7Ro6WPqa",
  "key1": "spNMGQBuvcXaPXR5ZwCaephfCYzcj3RwpodZ5yWneDhMvUYc9F35KUJLro3KNEazsTDkEBqwtFxrrUV5KFHDCrJ",
  "key2": "McP6KADXiWsy1dp7UMvwCyHThB8PXDHpV7nMgBT37PjXFY1XJniyvyKSYbwTa8wbrbeM62eaNLSZSXf1MpMTVpX",
  "key3": "4v3gxDp6rCP3jeQwfk8sGf13MGNHCPPFrJEJwb4iQYaDkeLqXwgC7wC6WyLcSS4A7GtzcBToV8G6mVh99TJ4kfHe",
  "key4": "3CCDBXVa3a7abSTsrGiBT9htMKz8FKmXP4mazBWMajqf2vU1UcEnqrp8s7dJZ21MVRS59gyFxuchwCCp9QBQDWW2",
  "key5": "26FEps9sLs9PVLNUaNtGHS54yRux1VqDjcA6j6wqNEX5WixcK1BC5GdDF9H9ybGWT3jwRvTJbzjKdBtnrpjMDWJR",
  "key6": "3uZX1BNTQVRNo2rL6a8A3W2CWe3M2xheqdEnGUMxg5bMR8iCg2M8hG4ZeSMoendyKy2PWmEcgEmasQ2FtALpFj9B",
  "key7": "3s8hCYh6Ns8xqbuoAup7kWhqWR5BNXqieqmTyXfv9JsTqAmaFCYAfSUTDfCfGJj76wVzqVEKJ7cEdTqtWXXXud7y",
  "key8": "3PA9JiKPwCwCo3UWT1sWxBcKc2zsqiEMyGDDU1Wp5kevAjMnZF7fN9EQmn2yvW9H5h9VsKSUhxMDwcFE6v84vDtm",
  "key9": "T8DESvEFtjC1ow6zDWhugmm9cE4Ws58CtsvWSauHVLcdhtMUNxACSaW1vYGR9riYr2NjWbHXQFahp7bjQRUW4nF",
  "key10": "4tegrfoKCMRMDFRmjgN6YCbtqchUBLAP9z6FCF4dFueNbJgWaGwZwaQhofrKuSeEqPMpATbD1iiuiLD6NHXB6APa",
  "key11": "2Qgwxp4ji229JHALAHyzoWdMhiRVgAZUxPVzA53ZZyhHsLxsQVDTRuhsuzdrPiqBaxbbihbTCzZiAQp1fUnH2jTm",
  "key12": "2bZbMmZj17mWd1q9AdFbuHq19wfkthvgXXjYkipt4PNRYVUWRECAQtUBhYSBhGw44ge47MqKxmKnmkvrn4xdSiVj",
  "key13": "4qjBSitdQCVKFBucAw85R37mX289aPSP1boHYqsxMu1bzeXKLfVoATNnqsKc29vw42sxJNyCroFwTpLjPKxMJpn8",
  "key14": "23Bj5JuwNM7Rbk5L55KUKMHpNF6hunCQAzQiV1FFeYiBK9utAGefHutni6LktaexksXb4fr7r4Q5v92yYz6j5Md8",
  "key15": "5DWbFVVJ951oCKHYeQXigPcX3AM4grGoE7HcGTynof7p7RhYQSManmViogd4Y2synQioFMf73tK14Qwt55UUq9n1",
  "key16": "yWGPVhE6rmx6B61Wdwd3h2yyDhCph5qBYC9PE3CpAoVs9Txj2qcYmKpe4K68A2ud7psLcsUbSHLDqmn6fqdhbZ1",
  "key17": "2RyPF8u5e5yBFwGDnhMa4juYUTzurCHjxwMSCefA5UqawvRikRL44qDDqY3MvXhpmuWTVboqtaqsD4Txm5qr3NVP",
  "key18": "QdRJqWXRAJJYgvXpbYtpg8Efi5V5DyKQf9DpsoX8w13tnMVf7UA3VHSe61B2hZoiAoj6hrFEp1f8tXJ8XwEqbmZ",
  "key19": "2c7FuBazcz3BpNnKqX3coBZH3x5Vibxitp9C34w2KARK5THRiUgF89Ftrzwig3owRT7We8vHwiQZahReh3URkzQq",
  "key20": "FZeXD7f8HVhzYCP72kvgYDzg73TXFQg5raVJgFASXJfsBf4qoyyLms1ihW5Vh8teH1YWJSs9BwCQhfLoFdFWSyg",
  "key21": "5jydpLGb6VmbDa6Y4Avhz9DhPPysC6fch1GjLhCqotLCfDT8ifzt7Pc2Zgp9ABZuVGG8QntRbTecSrrM6cMxNk16",
  "key22": "4yJvxDj6PGcWPkWvWf9cbmgjAPSBoeM2UEZAuy5GfkVr874LLghoY1TCzM3HbtU9ap7zQDp3Ek4qZZ8CxHncTZ9B",
  "key23": "XQsXSuGEKmb96D8YhmrBPANfuXnFVsCr9RVk2YWcmG83YWk3horfR9xWWXcaDQfSaW7NGK68LWmicjgPERiyPew",
  "key24": "2N5NXyTNLxVAp2Vs7w5HxeCiTFbhRjEUe93L7LYFZj3M57DLigGWUHEkE7ksZRYQwf59oMpgtTGs7GodQbP5PgSu",
  "key25": "3DmrdrKzFL3zETgZBPFr8P8dncCgw4bVs22gVg9Zuf1JsApqFGpS6Hbqzoh6SRL3d82w2Nrqw2Kf2ahTUDcQ3L8Y",
  "key26": "4qecQeqHFe6jFXAK19BCsrYhZrf9zNPN1GqRXomX6M3bQRZ7WzxYW5KttPc82jXgi8G9SrcsRQHGjDnZHPo12bMd"
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
