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
    "43QrUfTBgqDKGc5rRigMz9dehmocWSCtLdBp8ySir5R75jJa7rkeT186gsv377PfkrZ3fzZ4AThZZDQjPMaCS975"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3gcTMQTppGevVpWBSL5bWbU2FZGntHg3f7MESVadg6F9qzc4nqyubtCNB1YFn6e9gAAmmWW6cPom9ag7yisBd7",
  "key1": "39sbF8vRrFHS1ookz58ojpj3FxqiCT1oc5bDTmMhU2wcVzCpMQHfG3tNdQHXpf5oYDjAEtLCoEHpacQ7XN3Sva4M",
  "key2": "etemnQqAbAW2PNyf6dQDKHiRKDrfNs18Eumm9fd6S3HxQDNCKojdqzur2jiiB3rc6xYYyfC3DgyYqQrKK8BeSXz",
  "key3": "A8LyoYNKdzVH9hVmnbMrsXuyaRww5DYgyQfFRH4CXaRiSE7oL1Wi8UwsK9bbCSMENwqiDUJ2tPWQTF9kFuqTnCX",
  "key4": "3VGs5GJgjgtm4vGsjVb1kRGDpMErkrPfKoBhkuqYVriQBmhmA86nizLL4sVLoPug8kh62nBQoSd7BBKduZR23hj7",
  "key5": "4p2D6VP8sCUnqZdGHnpsydzM5TgM7kaxFqek4RkdTCn9Zif8jhrGNKcBqcEdcZL8GPa2ourJfrAnnkhSuLaXmMU9",
  "key6": "2ivwiPzH9x435FJj4uBwzMGofk2weM1Am68rz334dYDuyARq8etZTCMadqjcn3wQuFC477ExFbLaCScW5WHGspnX",
  "key7": "3rRL1xfwUuKmeT1NoicfNmC9jkP4tzr8uH6VfBDrWwaznCZcKB3jVqhdMTvzveZpvQeggxgVULnLp2dvHEa5VDNs",
  "key8": "2eAKL1VMRsmszGcHqY7758pRuAawZdBE7goNtXwrPSu5JUnydFHYdhbcDwuYXqr19ri2vexp5R1HpP86Uh4332Bs",
  "key9": "2wyZL8BCfmaM4MK1LDxQYU2gZm1GqWZin7WoQuT17QT3xcjuEy4i5VkddEW4rebwGBsoMPHL7LnqLEYV2aJVMfaw",
  "key10": "5eAQ4tzpsbQSAnpeqiQ3hgYnjXXnD4yc26jQkwgkjpUvaJpBduhGrR4XoHZpxDFWvnoT6oyv7UD9d9neLqyQ2pjb",
  "key11": "44kq2SdSzBbwFrGX8iPHZRtEiCu4tg8FMY6XaeYDzZnnzypXHD4u65B3MSxRXPbTjyxWQMsuXNQeZTGoJ65HE5Kg",
  "key12": "314rw1AAm6cWL7adWCubu5VUanXuCNRVgyTJYC2QTKM59E1jfSLz4PGs79FrCNKsYpdPWWzRvhi5HyjKdbYUWZq7",
  "key13": "23AzzMGzAx6CLscx4EC3ZP8LT8oBm6UQgpembXmo44F9FuxooXoEwtyQctaWxC1DZV1BDe1Jqwn62C2FMnp5mH7f",
  "key14": "3J8WcxEZ74bRv361GDPVdfKJ4oHLZ1oWHf6hKccqMsYgCBDHNkM5ZYfnTEm4Y7y6FVEuUMm6ZeSup729o7Bhpw12",
  "key15": "3j2haD7phajYJDqAsTbYWbKaCc2PpqFspZ7fo9F3JD5kHmVYJG7wQvc4HbuHqiDbm522Pp3JZLi76CW6ApamqEKL",
  "key16": "3U6veVezZt9bkd7AZRuzfBovD9b8ZXv9Ckii1i6cEs44e4w3wCFTWotj4GvK4KshU8Bh6UjqTZXEWkHk7rKyec6q",
  "key17": "4ZSPRZh5eBQ1Pykqatbe3E83JAzQSzGW5JXDg8VjqpReJCB9u4Cb7tpf4eGd9D1zn6Vf8exGSQ3cAhQm4HjvbEjS",
  "key18": "2rpnQD1NwnwDDKHi9uE3Qy7qWWNR6ytQpivvXKvsdFy19y6xP3NKrxMbGe11kgau7WuU9XR73uW7ATiXLEYmRhsU",
  "key19": "5GxHyEAPjc3DAc2HzHcLLoEQRTip76sZt4j1HMHddvx1UawvndCo4fseSuNtziJFdsAMmqD3DGwPaVgdLUeNjuQ1",
  "key20": "5T3VGRvaKkc4CXow6zpXzkMojwpTdRKnDLtQoGnYbTVaM7y8CNHNFctHFyQccBbbYaQAtc5PFKabk6QRa5Bzcg2M",
  "key21": "4Ux6A5eV3At5nQ78TkuKTaynvp1hwk5JSuhsD9RvYw8YTJPwNTAm5AHwC9GpzAN4BGVTFxQY5yw3mL8zX8HSQMJH",
  "key22": "5eKgQ57vT56vXVmMLSUxrpZ5ovG7Y6YaK4BfvUAFcxVRsyyX4mZoxSa3VTDyZSQ4EpUjFEpwiykwfYrQghaPU5vF",
  "key23": "5i1k29ezsLSbCxCn267m7bNy82AhUdi1BstjMtM78vQBCYFoUyJJUm29e7D8PuZJz9zpmaPfqBCRv9EmdgRHAVfd",
  "key24": "4xeWWBqgNtRzd62hgKC7KGsnKWviET5X9YwFVVfYSbUW6ckhpavbsjeTEaHmSaToRMPhW22Neqwq3oRLT9FXhCHE"
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
