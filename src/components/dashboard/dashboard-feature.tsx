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
    "4dU8kM5wrNS9LNXpooi7VxdHFhKuRysQPBU9ccM8SAzBp5wvhn58U2CsvAcY6CfKLknT8h5oA3iH8SaisnxxLuYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCUKHnmpme6ZMbiKVFxiQzGzWeeGzAyFUtHKxhcV8RMDHDCvQpwzs3LrWo6yes6VdbAuJ1t8nnfdhmF6gjcZTEp",
  "key1": "4eARaX5PAmzjQ1YFiL6tTEcVYd8Uw2xU7mas7QHxWE5gucXc83LfLQSBWXMdp2fT3TKXVrwyNxvoXDe487CUA6nD",
  "key2": "a1m2DfVaVQTYxtFxrp28H6TENFquNkCMEQoh67XPEY5dQRdHNVcWhbbSLNaDZ6WcxcA4rckVXHVMwVrYAzNRPG3",
  "key3": "25wtCnJ5K6SbBi2RE4qXHcBUCddG7RBmD4UPGfHYpgu4znZ2DG1gG6wnCSGW7od1nnNh7GTrHDMLQbdPqjWZJ88v",
  "key4": "4BwekEqGBGrTwX5PW3SYE1U3GyhdoWfeQ4viHuweetP48ZzsQKzmBGiEVocLHFov2VEx22tTJ2GniGwuLjsd4Ppe",
  "key5": "2FXXbVJL4QYHmcKwLhkuoBjTzmQCaL4Saq53Bzte6FY8TzkC7aPvy7hkLGFXGwxim883xTJwFeEY8nSSHxXLeocq",
  "key6": "4WFGy5rqtR6TRxYq9jY9AV3KapYaymAdsrDc4wnuQdqBHv42WXTE3qnNj4ncKp2ACe3Sp8NGfnL3SUMUCZkaUpDn",
  "key7": "4icBCbTGLgKb5EZYQyEQd19cPvJW1FmPkBbyBvau67SfvSJidp7uXBenf3zJxxatxN78cLa4rR7N1z4tJrbfj65V",
  "key8": "5GjYp4oFn1h9ppegjggYv7umCmP8GsqJXsZ8CnnN3oFBYYXra5VB96Jp1S4JKLYHgw7BHCjsfH34rbTu8spCH2TM",
  "key9": "4QHqEXumHmDTNUPUtXDpGpRKEyokWKDC4ovGynhTEFxFiY1d4iPLNGCtcK4P9hoNrMEjPvwpqckoqHadn6mZsVg1",
  "key10": "2rucwmjN9Zc8nnQNXjPSF35EhaMc6MaXP6XS2WuF9F1uAVipymbLpc25jpHX6Gr2C51rX61PwkLQVP6fm4i9jWYR",
  "key11": "4GWgJniczz28NKEiR7CYbKfVZANJjwZySSDytbgTKjikPw9Rmwg9GiwMi9cejXg7vh65SPPmpx24BfKeFmV9K7xi",
  "key12": "4q3b7hTEKrspV49NGsJnTWzd7jTdKjYDncS2NQApcfUoP5844UCWV8Tmdsr8sxeRy5HxaeRSRsmWtynNjFz4fFUX",
  "key13": "3SGhynwXEi9uXke2nCYX13NgXxgDKhqXhW4doku3s5XDMMQ6JiTomMW1TAc3ygDcyFAyHhyswS5WE8bzGg3DekHh",
  "key14": "TLv9WrcdH7DQXJAZ35Em6jqrTBUaWGjPruRGmfwYKL32aeGFQ7FY8mgS3pdmyeww1b7Fyzh5X2qgfricMUdsrV4",
  "key15": "5ufZPZ45Dp9rTGZLQy98WXCULzYVMiFwuAitbN9M81cNc8VJ3usbDefChMDSnr5PpLkvAjxSmUtNGm6e5Hs5CZND",
  "key16": "3VCpfGgUjKRjJhszT1CtVkqckzU4fDspSqsBzafe67LW6iKK4sh2DMSMUQkg1FVYf9E8sTrTddT6fseYwfiweNxV",
  "key17": "qRTQseJd7LkaRtVwkK6W466kYZDgMfGRdK3ePyn21rzPep9uDqeTc4XrCLpjH8XVYdrcgCzvtp5CVxanNuAtLUJ",
  "key18": "531bz7kfY1RWTX9LgbWSAwXJkVoDkgrwXt5T7EqiomCG5PM6P4edaV65bnowckhTPmsxqFiyDRu4ee7eArvYyAzP",
  "key19": "5Ny9Vu6LLj9qwzZkAmLhhJvtqxavcVbUgHmLkrhF9HvdD6Z61xCFdo2VF7MmY5tS4PEQ7RZZZRS2gd74gfebAnSK",
  "key20": "YAo6h1ENnVXR6pnrqTt7kcQcwG9Lc5XJaC9DVCZqZqC8TJgZ5TZkFRL5yu6XDosjcQos2bHWWipRjVyy2Wv3PDT",
  "key21": "26Pw3kxsbE9j8xf3YcBafyFZZtn6LeNtUEmwjzF6qQkxDCZZDvQiYM2BeZs1P1DuV75yipFLAEdEV2wTY1q4b971",
  "key22": "66NQFTBz4pT8X3drKQJKBdVK9XZmEDU1t6jLgZMN7RrVLPo9eBCsDm5niBs8CbcKgC5fm9dNU4ocd2qKrLwhYCdw",
  "key23": "3qsDZths3N4wQ75937fpuLV5Q8aS7rRQPpuDW1MWcdrfC156qX5tvtUrpww3YdUara99WMjFvRvibG5wd54t2nYV",
  "key24": "2W8sqotyiyXUrWpMLDxsphp9ayaE1M2PmpPbAhRkiPTP6EUypDBSyd3hRgrdW4tanQCveEbSFrjo6A2z1skuwWjT",
  "key25": "5T2JuUUxRGu7bHEtrw8CxuqHeHbCPjqWkdmqZjBtqpwu1yUXNg3LQeHhB3DNTLzbPcTzMCjnhRnHXFByTR6aQyri",
  "key26": "2EtmDTEUtAN1mBD4yDP1VhM2TvYV6RKVabXvvRennb1SB8MkDcwX4EPgvDf7UrMVdXFJDtYXxD9PFm1b2EUiqYv9",
  "key27": "gCd5oriMq5KrYg25qGJWeZgNErenHtXPUMo272PMxXqhhaVQDVs6bFf2xfrpRpwkycd9deRJhqjfuELgeW2NCSb",
  "key28": "2ViFe6Meq26FyrsPorUS2Sft4qQ8Lmh7agwBF1mFUz7SBGmWZBioXmrE6376EQxUDepEXfDoBbwHrHYbdXF2ZukA",
  "key29": "cU83261PCaBzN53KJVLHLEAjtwZCBzcsUzKy8Vq15GbbbekcFj9kkVHSZbNSbHVekgt3gJrTVBmUJCRYkASWbFj",
  "key30": "4wEvSfjXwJBvhDQjm5c9smsdK3S94uA2xyMFAF1LakeP628hMKEjUXGLYzhW5TNH4kQ9nzg9i1XSxQ3ZnFSzQUHa",
  "key31": "4MMRnPT39xV7r8sEjBhtkdzKiCdX4Lg5zAQMq8RjGiH829DbXUwnmKmj7u6vnFBW6SG7Q79ukyYeLqKmptdzJrwQ",
  "key32": "2Bzai44bj7H2EjJorpcszUVgVWB5A7mLtCes93ZEPKwyQip9tYdQBHwu3VFGMZ7zBU1j86T3t2ctoGfKxMJvnbUE",
  "key33": "5gJot2MRSpuwdS3Kd8kiBMGNdTeEjuycvrbaWRP4CLuyve59HyxQmetmRanG3JKpyqEpGFWCX7R9YigPmsdLy8tu"
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
