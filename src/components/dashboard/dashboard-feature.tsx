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
    "nbCpbjjLD99gvuuTj788GZ7u5WCbrHqVoYut5cCrKa8XRGZvpxSrjc2qJ8qskkyvNudavWx8LSSR8ae4ZsijKAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBbncqyHThczKbSaKWQN415iADz9UjRuWVXbHRGH9s7DWNUc9LW5E1muurGWyMZsvEy2Qh9U9haFAgHRHzHo9E7",
  "key1": "2yDafXQnkKbcFnTfE7dPpU6UkUCQHriPRhcWUqfarbWKuoNSxz36ckfjZyRdyDHA2GxE4YRggyRM6ivhbryziD2s",
  "key2": "4JZVQh97F4A7WqLLHPN1LVKRcbzu1fbGBaqPdNdUrJBB7otA5E1RoNo7QGnrWX4iX8d6C2mDejf27ZTGPbU6iJMy",
  "key3": "5jTTNBpKxke3nWQqobJrdiXXZFNQTsj3uWY4iwTqtfKJoLx8dRAX8jPtA5h8uPVDHotwcjfohYxhEQ2gTjWTeJJX",
  "key4": "2KL5gcApADVTDZGM5e6JU8XbLzUKscgeDjSTzsUEffqgEwQDewgDAGbRXtz4SKQ928bi1nqAbHr6SHxHczFnJY2b",
  "key5": "47QJkV7senuyCfZ2g53UcqooXk4pZW8xmVirEaDwLhwGiXKkK5kzLaZtBnjJKtdNXdEAwvwDRqBuzwzzUR27c3rq",
  "key6": "2CnUQbv9BAxv4eBBEF82u5xrJfZ799E8qPMiQVLKoUFY1Egi9xi4f3TvAVmgwUxgx7PV57xtEih4JyRHfpQyvDW3",
  "key7": "2g35cjSocZYgNW5J6YGVAG9wfxxvLMz3nHvLDRAeoC53N5SWNnArANYrkV6QEQ9WZRrQubqBffrahV5z4UQUG9sU",
  "key8": "vV9EuDgUWbWNBp9WrwpaNfwj2GDBnSAb4kuWfkJmcAcPhWvGiwJrvNCkpuj6M9ZV24eAmckw7oVkF2mKhGZB81h",
  "key9": "3EEyFDx6MnHJEScibPTkkjwKYE9n8uTqiQWUsvHNygaCTnJws39DMNeAS5Zt2knVzbAmUoQb2cpgvvikaWEhqKiE",
  "key10": "4JErmJszFihhjSToV134peKJbQD9s1J5TnzFc7aLikDCD2CsUqhdfBxMb8xkeG9D3z3mpU3sGbjKZjU9swctsdPA",
  "key11": "2aUwyqqWD9gPnw3Tx3ZWGejJ8Yy5SGnQbUu327mzEeUNbhoftjxCYKD3mx8zssj8x8NUCggbk4PQthzzHwK6YwXT",
  "key12": "uktVspA8PseYLGNGQEJNPBVoQcTKcCbr2R9oFjTyyxqxH1ZZbj1AXn1uywaLRP4NCF2vvri9WhFg9jzCxURmh7u",
  "key13": "5nQZ3MmNYgyixBV4PnGQB7ATRHrURGoGQkUyZYXb82jafVBFUwGRei2WgwGfdF1mhgcQQEvu8J93jBrLr4AHL7v3",
  "key14": "yHrbRfuAGqVvy4qW1im2yB76esqS3xthipWM7oHqvMWDDn44ZW5zuspF4RVEuN1EL4ZK4G4AXo8CUikJez8cG46",
  "key15": "4XEnAgmx6dAEC37G9rN1Y5c2inEXQpfeAocLDDPJSZhVwJfJ5Bu7gDdyc5vAbo8MSwzXemJF7hr3F8ih3bgyvxGr",
  "key16": "kUS2hKyzWZ4Zhth3EoRExPMJuogpNvkd8tYxWaN1x7x5QsYLnjKa1qPkTMfyVb3Cj2wC2FwNiWZhKSTqqu6DoCz",
  "key17": "3BdpHiWvKN8kvF3CGRuR4w6Tih6xb5Uq1NVA53GFGDYQ3bNdyYHQHfytZdqnRgJDL8AF3xrAVrZRPg9uricX6fRf",
  "key18": "noT3FURnnAsXZpJjdGhwjfFyE6AZ7GCyS3HeJX9TwYPQXV3bU9xELHsxpeU7poLS9VqfKpgUwnBff9C9MxTb9ww",
  "key19": "4FoYciT5QQwCTQMLtjPhgiZEvUJe9NSqSYc1kc7SaUJTRivtapVvRhcaJTQhZMYHH3uq8evS7oCetBz6TvenHe1d",
  "key20": "2NMjEGTScaXbunfpiPsiYXNPjhHFpSuBeBXTJx4ALSMC6cqGVJ4hGgoeANss1kp28QgWNa1MtmnWjLySwv7ZLBmW",
  "key21": "3QuMmaXXPa7Y41qxYGniUbVoCruekgkV3YhM5yKLtiy6wZzex57xS8KHKSAQUi5frHzPubgxSDqNiMG3jjKfCibW",
  "key22": "5pQaqEzZk73xbdZApfioNg4UqLURdqZJi52rQHNgSycGuVYrhXMC2gkzeFnALMzjTXEkXC45LBUEagT2GNLM4wHS",
  "key23": "i8RfZov8tThcPpKXVbLk23aKWFrxVgcNUsm3bcgvLjPWiJ2vnjcoMqrBj7PieZK4TUXXtN4yAh4LBFDgQvSwCpF",
  "key24": "4kEsEUTWanQFoWEUon5b5MKvBqeDnb6bWoCVbwv9GxSPcwtLkr4dXtdCwX9n6YEZRmeSgVjAJzKwkgkUTYVSakbL",
  "key25": "4DvStovJijWUmDaWrTXkBNYZpqVTF5z3be7FTgy3yt6VNh3jSXuC6ru198m3AwggkRgCh2sWDuyr4MESif2canqW",
  "key26": "3EPh1vYDhkj3JgEX6vjVAyL6526fpbUFWjpGSYa6J4eY5ZR16m5XqukoAK3d9i7e6XT2nhV8uXNufZcdDv5nC9cy",
  "key27": "2H51rhe1DQ62e16fcMT85fgxLbia3EGQzVgiJaSFQTa8ueA3omroeHHUof99cPkEiwQ7AVxc99KPfPkEvJwPKDKe",
  "key28": "5FESA4XShepQZp4g4FPTih7HhhE8gxFzoAupeezj6WqZGxo4HyqDj2Mcr7aD6nRxP3uiPK3f615M84DqV2B5scAu",
  "key29": "4cPjTBFC3aiRLzwDigpCQXqyt8F1Vi6qqsnroZPvKB1EJZZnEuvmLoNz35UmkiE81tXEcHooCTBfcKEZEXerEBhQ"
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
