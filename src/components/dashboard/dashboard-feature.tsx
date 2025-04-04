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
    "tTzxNkv5bpUqJmz9PHPsGGfrmSmRJyJCuJKzrNT2shbGEJzszCNVQPkSohCxYAPaKmpPExMHMrKhVeAXXvPLze3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2yx9Ctdwqbq5Zxg94CRDQEJXC2vZED9MNgWSY1W8WTDDUdefsaLHwMNuMKepQpAFkyaUUCiYBLnLXGSa8VGJC3",
  "key1": "5kdx9qBdNCH558Amav2suYCByp8z3A8ZFQ7ZVa2wfaHFXzXQ9FNq3ocBdLPE4jw2Tume61K7TjfwoQKMhUuXYp5",
  "key2": "xLmkFtxvmfRsWhuZNMPZH3NREw7dkJwhjZLbrwjJY4qra8PGCs3DXueaTzsRR93SasmS6ybB8eLdkw8L41LGto9",
  "key3": "5PserMcHUkEj9tNCKB6zd1Aff7i7U9Aj12J9jjcqrBo24VH8u9u2GauTz27r9mNS4Ea2oNbhT3CV2xbCmf1AjBYv",
  "key4": "2MUaWJ3r4QMmPUzkmfVTva4hcWMShNLeLxvjXoReCaLyVq8gTAijufccnYxUnM21cEvjoUANjZS66YbNAEC5NLQq",
  "key5": "SYEcjXrhZE5Dz5H5ZAhoCmLELCyD3KonPvbriFSSy5yeZHDKgQPAKSQvYhp6umARmqrs8s53ak8GCx98FNWv1rn",
  "key6": "5LWLFXnhkt3EyhQfqoujUjAaHXQpKD9B6vXcDCjHChZ1Ud1dNu3A2viCYGJSXDguE4EXPuepobYe3oXAPzRJ6L9g",
  "key7": "3DbezD4TM3r3mjgtoQwuxhATQWiSWJEi2by6Rkp2fzUnaAw61Ykmev6D5qDpxm9RQnw5cJgD5bBEcihENdd9jE3g",
  "key8": "4GGGXXFtjJQxJwYzBy7SbtnYsdRUMw5TAr6i83qFe74ccJ5a1AWgQn7y7eFBtEDqvQLdPrQJr2cjuWPczXjTghnT",
  "key9": "3Gzfvz5xP7gfxjnfWi2cDWKeuCh4xRaptnFXdijnG13NDGNXhiPSxXc4gAJy8YpLAfkZ99S6KqeoCmMNXoizsDKz",
  "key10": "2qmw9oxnT96ZA1dRbUoo4wUJewKV7qmaSt24fzAmGHFQR5Vx5HT8bWyw2xJkinBEba1giQgbUD1f3DsGfuP5rTXf",
  "key11": "4DmRimaejWFZWtm46FzKrnQdSQS6SNLmXs2eVuxr5TGUgtdL9QExPq6KmZuGYoVVGyx5oyZVN6wGsdor6nxjh3G",
  "key12": "3XAtjS3gLmhiANbq7afp7NVRb2uHzekH8MV4DjasBY7QMkBz4kxtJk4e5eHUAaK1tgmvHSuxwmvyRVE9vhk89Ust",
  "key13": "3KVtmNHfDofJ2AxqHVW7wRD5ogWHhSJ1hvCYezu6QjjTaRoZqXbrg8QpE7fTh49zU4viGGddALU9xj7ckJawRbbd",
  "key14": "5Rw3p86f69M7f51Q4xAfPTwxksZHuzVRVhSk2D1V5CnuQgFm9wLq2SBs9h7y5vNog7SF43rkNxffH77KNcohQNUu",
  "key15": "4oexvk6BGNRHQw4xGKUJD1tyb9vSk2em1qWy5i26MDZe3aTfyAiTJPW7en4PkLx4hfba2xHnha572zDVwrC89BBx",
  "key16": "WRwNwGtamqt3mKwNh7qdXeFf2TQCy5hjvn9pduMeJYnW4TSkMz9vWfr1SYvcFRJJMf6KbY7kHkU9hXiNpyp1URy",
  "key17": "taTisHGoqH8JzhJ7CJu8TUEjwwhJagBfeY5xeqwbg8JwhUNNEaJvSCDPigXXiM7DmhvF9ANFVCthyvJy1yphwwC",
  "key18": "5x3hWZdaYSYSxJpV3EGmECrxVHgUWjTNKqzkf6V8jtwZvZgPqZpzZf4M1hZiXFb2Ukpm3Jh2Ad8wDe9DsqJ2P8yU",
  "key19": "2CNhn3yXFbrGGUu66DBzxVPo45Up3ebQa2b7vE1RThu9yKwnhVrG4DAYsyNkhXyxeCKf2bjEMk7pAmcRCR6UZYr6",
  "key20": "219R2p5iqSTsSfoFdv75zRheF9USDqrTPy9K6vZePkbEfSvFMhKGGn5SojZpsJ4TYvufcFiinxif2H4ByWUK2hMC",
  "key21": "5CRM9hUNgYyi3ZYFxLoCWJHRz8Z5QFSN2FwxCdvEjDpg1MqDuNRQ9kHdAXMWW45fL5ehjoTGAkiHmDvHqch6vzKY",
  "key22": "XUdeJEULxvyi4QpaBVMrvVK6F6sXtRoQ3tYynKB19AcPE8ztfUD9X8L97sidoaE7vR9TR4iN6KhnVhTHoxxZbnc",
  "key23": "4WuvzcYW9z3apwLerENjjryiet8DNFRFJm5VazgTa3EWxG6Nwmrs9Me9W4KjAMe7njtUU3QisCppzpZodR6ZhsDA",
  "key24": "21azfu1HRHfRCAmoY6p6ysG1XtBq9QsvdHV1pjKgbqFi2sjsiRVKConwXF6n3w4vkJunzYHuvn2L8wwnRqk4vpa9",
  "key25": "3RyTVQJZguY4b8mM6f6e25ejBHPVxHxUExsviTnFEMzzrmJzBQberYq9GP7xgNfDLuSxnhoUAeTFFF53fvbTqxHF",
  "key26": "DpuA9CKNZRQDbAZt4xnHPzATDBSS7s9C6hNP23bctpEsMFz8xEMe1yEqiEi9XWAb4pm8XsfPXN67gjxYrnZBhAE",
  "key27": "2LhQLcbwBSVrMkoxiHMjm6BxFDV9AkBRLyAg7Vbyw7Gs2CsWQVW2xoqVtivqrZ2LGZENEPAxUneT6GdurZvJHcY8",
  "key28": "dhsxWETicjusS4whvm6hMK8qXf64Hj6RXZ1zxww4SLuQibBRfBgPV8adegccGQjCw8ouQNj9uHrR4sWwDhe4o9n",
  "key29": "2gf8aGvaWgE91iaH8oLmRLaa6BC5m45nb8hd1fifKPdFEpqVEQL1uKtnaYAfhaPFHysUicbuQTens2rc5yUZ1u5P",
  "key30": "24kPuytE65nWyAQLsdqZbPhkSR2YFyhWdb8f3YZWbWieDnYpiaK8q1Dvhtq9WZ8QmYW5KJnbrhhib1DvfJ6SXYgR",
  "key31": "5Pnwxf1uxEWZ46UV4CgCnzD5uMkp9FT8w93Cf7jRC1NpgJgLv5SKM3zvBRxUPnwLr8ipXFJZDhnGZTnLtqrDt8R8",
  "key32": "4oUy6UgDByKrszD6mR1GAXeRF5bCZBXDy44XfpyHv6eusGea4RYdzGB8HZ9TB4t3wMEkuWDzz5iG2TKCpuR5yTUU",
  "key33": "4WWcNhYvkRXTWjJvqexi1DXyA9VhpGuVz8a9VqcT8K6UdcynAjr2a9N6Uhh5WVDhYZAWDcYCaRWmAoY94L7C7Mms",
  "key34": "fa92U7NZXRptwTmYiLrwG2Dw5egDMFaFvAoHCXrn4eBkVkQADtqxBGGVWU3TALBe2SNGcBuFs3LhnjqftdoUy1C",
  "key35": "617CvhM1EGeRpiZFNxAsB7vMYgxjqxZXddBrihuRAsgox8RTyPBnGi4ZHmbNFYRNUkWahPFYE1bFeh4izcCfg8qb",
  "key36": "4JTsqTr4dF3ouzAubgWGKwGPR5ZRrj17dUQA3yoku9irCEfSVqjtiB3UMeBtq9AZmfgz4tiaU6y6mg8RfDQ3Un18",
  "key37": "2KFrmvsK52kTtzyxQ2sSKy9YiT6mZUeGZScqcLiYowcX8EE4amnRBZezCpYqxpSfxegEfsZ8GHfrzP4Kp2F2wKkf"
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
