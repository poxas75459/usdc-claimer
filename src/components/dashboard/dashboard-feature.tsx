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
    "5K11423AwLqnQujHREvQ8HWJmcT9EqXM9qEahzccsFDxeF9qWes6rrXFTrG5NVgB5761WbViEf7kycC4gADSPwzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCLMh1q3qKxU7QQFKn4Fs2nMK7s5Em1UCHaug8Ae9NsiDufc9LKv6LLcPbtRRbAS9tsqwLMA3TZKvpaNDTLtTh1",
  "key1": "4yiDJnzmgYfEVU9ZmjMd6xH4sXmTMqKnAHQWKriErFyoWGBuTB3J5n2wDSCERUYCTxPeyKyc7ULKoPFVDkGmS1gW",
  "key2": "5qsZhKv288QWxk5XWRrY6c2EPobTFVBmceTd5bWnGLt5b25YY7cDYrBt8KPf5hm7EH4TFjVvxEXeGhdLCJkZqR5f",
  "key3": "43jdAGhUJTaDeqDjDARzxV3to8TbMnMBh2He3acoVTBQ5hVCPRDwZBW7Y2xHFtb8jgt8ncqTun1eqUXC75kNWr9D",
  "key4": "47myBDpQPgTt4Qf51PDFSqdu6wDAguivoWFHyfhKZk7kZT9nTTVpj2FeB24Du9dVErYhsFUa2xenKo4ZhV4r1kFP",
  "key5": "ct9Y9s4o1V1Czu2q7CEoBCJEJNiuAdAs4Dw6tTfxxgUt5fnpFK4XMD5Eifsoz1P1q4RU2tm7Zr6TEmbDSfLsqG9",
  "key6": "2F5CkW8HbqMmDDato7Qsg5rnJSovqiEHDwQEtWPrhvmWXevaGBhVyjP5rRzegr1jQi5ZrZqn8FxqVtRSFT8c7DX2",
  "key7": "2eKDUUfLhKsNB5nzgpKF6vi1NdFDhx6fBZJBNwLennRzCADo5qXAHx7qunw9NUaSaYtWLg1iWHwFBbeGg2gKZupJ",
  "key8": "4KBdxkZ8433HN4sw5Y8LATY4TsK9FDmZjB21FT2RiZmz9TjidtMU854PrbmEtAiGsUnYJkc8LTiyXGFYB8hUWo6q",
  "key9": "2SBn8vbXaynW4t6rSBXHCq59FRALGAwjYju4Pby3kRSEgyy5QbJN6rR63SRXyPWNstKo3k9wGWJPuMogBDt7Ju2n",
  "key10": "4HkNo4jAPzTnQVfU1oEacW91frbSCFCxU8YkbZ1NtXxw9SC8ahp5eMdBLbSH1eRWiVA9XB2o8Px2v6Auks7okvAb",
  "key11": "2wmc18ZyAdavsfzfmojap9pf2LFQa5FuNq4NZp1PWbwLUn7BqQY3eHiX1kGTTiCdVy4SUhbt2zZnrnZKiBS6Wotc",
  "key12": "5UpXrJndpq3NEZJvUHJccPrbge15NNEm5S9ZyjucgwdXamoJuqNX9dpx2Ff7e1PSTQZ8dt9nqerPgpyBS2aoLhjD",
  "key13": "34cofhcMDo5iB8zS45LNHfqQ67R2U4bmUMaRnqKhpqjgXdAdhBhpB7E261oAXTbvJGMEr19N1YhH2baf72RCQUG1",
  "key14": "5PrtWx57gwc7JjcqVLACmAvU1TQmqr5g6ADUtg46tpcCG9kks2ahCEk3voaT8W3sbsHYmXiQEzsuMMecTsuPtNNS",
  "key15": "2U7jHQHMRpnT1CzwL8SYt1kxpfbvTuRfKgc9bQ1aoZv2e8ohHc3uqAUETMygMUkq7hAQERsifqGjbm8KkimXapew",
  "key16": "3kw9wC9N5Pxfig3Ezq6Vndoc5nPES5SnX3sSRVPLRsUCAJnYE8WxXQNjoRQzq9E8QzydBvRkWrd25AcTVW7a7UBb",
  "key17": "4oubmhVPVLmbwTKPus3uGBHaB7u3cWGDxddBY1h6susSCyjUEJdkXasvDwbXSSxXtm6emAtj6UhSfqkDiP1BU9sW",
  "key18": "4iUnycztV5srqdukEbmsVzNTK2Rc1ErQZhE9Ewv8N76avWMoGr4R1fCsCSf6E4ZsMuoAKG5wXkMjCD6wSBXmJwys",
  "key19": "24ZhyDRLfYA5uqdxswPrKwcHsJUP3TvUP63Rx4AyQdqBhsQAwNRafEPAxG9bV4rUrscU58Vzn6sDg8NuPoHXoP1y",
  "key20": "34crET3fvJAo1EK3pMw77BHo1KbgWPpuxd4A3bgaq8urMXaDL8npbKUbtQCJvUgXugkFzadz7v5D9dgZ3imz9EFi",
  "key21": "4JKjE4AZizL5qbyZhH4PC7MbMuCyC9PWsuwUPqwavumYW6JV9dqo852hnfjAuMMMLJiaRiLTrNsNZHL9uTcKNTvy",
  "key22": "CJg6pyzqBv1shFWyF9tSu3wBki2FwzoznEC9eTmnCj5vGZHS4UbXSbfuaPJGx3x4CodquDFzV48cKpoor8r1XAe",
  "key23": "2sP2BS4pyx82nDbhtrhRUQ5Haefb9WKZLf6UNQHRJXTEgLVdp4URMxz9iqQ7vTHrvTdi9xwfcVJUSAN9AXmXwkDJ",
  "key24": "44aG5Ktowf9vjBDAqefUZiMLczhf3Uvet6ron5G8xr8eAbXF8XTKccGxaFdnStBCFuEAUYkLuPsLBj7fMAk1UoLf",
  "key25": "5rD4WyDU1yw9ChS9p3ZXPkiBTpWwUzmXAs12S34JwMSm5PXjAFRk9m4aEJmTzgjeyB9RnYFMBhW6GBuBu66aBydx",
  "key26": "2TEmZtomqvdn69EBrBTjzYU6B2zguKGkpcqKQj4hAx5tMa7nWPyTBte9CdYA3FZ5q7Dqt8CFW15TrmoEzDZJE8P7",
  "key27": "4sRCFsipKkGnKqVKqjRkLirUQqTZTVnxWunf2WMkk2n8b3zJ1NDA7UpYjuRGUkTh8BGE1ZJy4i2pMGhHAVVxhagi",
  "key28": "5GTbbowJVXiFnPNm1wGqy63mnDAVoseSjMTzSFucYvo4GXF68GEnakg8YCTbrVywq4TkBw15aAQWVK4dUDnK4Ymg",
  "key29": "27JGnGGgm1u3MyrMLked6RvGwv2tJYoRAPNDEudwc5EVs8Xhk8UHiRmVr8npisYQZhyNTVEUysb7HFoqWJsnEd1T"
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
