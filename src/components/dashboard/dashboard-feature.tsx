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
    "2Pif4XrBpaNZsKEJnZwCh8wWFR8fqxgkeFuZMGDRAXWqP7f9cpv3smpXS82mi7gz4W3t6qD4rgSWF5Dgi6s4knFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCSf2LsHmHMMijwYkkBKnYPbsbcXo5vaxmDEnwwg6K9Um7vSapXHj9WamcGNnCA14SibUmJBdVK9UqEBavxRvhA",
  "key1": "2fh5vLDzDZScHbTnuwsSr6dDY3RhBfsoEkWHK8DSzhPEKrSharYyNrE6E3ZLTZPXrVJ9iCDzzXWVBUBtyrfdEbut",
  "key2": "3eSgHS93tNdDAVzG4Z5xdp6o9FXTntjp5d7FAq3mg5jWUp2iUouALEtSu6fqGGN41xAcE1QL5G6APWtfgFsTb29F",
  "key3": "2hzjE5RmruVCjJVddciU79vZ6n6Ej7C3pQra6P7cEDga9ZcbwbEQ2epa7x1G3sifM5KhDWtWbDARhGXiLRq2b7LR",
  "key4": "5QHt5VPN2YcCL1LRVf8z9fPPrvpYyZHJQgCqS5RokA3KTU8jTr11ipVHbvrskgvEgKZasSmLah7jcX3pbKtZoji6",
  "key5": "xd9xebMAYVmWpoAqvg7Z5uNWTuyL4B3QsHGGGUPcMYXHXLvEnEs829ghJvz7GkuqmwY8TSv7eypSdE7Rvy5x3Jq",
  "key6": "rzaQT7Mz22k8gsK4JVwYZQ4y6P4eFXg1k5ua2f8QtxHaVxhXZgHzxtf9iCukNH9CNQsur63bgc1cJ569TZHq2mS",
  "key7": "5MAns6qUc5kigngwXH75d9jrudUBrKGYXzea8TaHJmUgGS3aqP6oeFpgZABE4AMpXQosQf2YT7BHcTC1kkuj5eWe",
  "key8": "5wTqGTNY5SNPA4EQPvtPUKZJCH1BktMrLchpZS7KDEtDkL2hX9ddMHLZNaZb2MrpTLgoZzYDbvcSSEBCtUytEvew",
  "key9": "GwSfGhM6s2F5FaqwT8iVrbRRV2j2USZC2aF7AKbRB43pqDQ1U1ULe1tXHG1g5DaNb2mSNgtS6CC6xhuetrR52wS",
  "key10": "bWkPwqfijMHv1DDSNBEDe9PynXUCEJmQDPedmV5EjTEKorGrV9HPziy4sef2tyyBUndx19aD4NzZCfZqTwiCRD5",
  "key11": "2uTs5DYAViiztdDXY6xBGzurmEVRBbpUxtTJKfCN9GYFpVRFL9uaZrQtdRFoVT38Ga82wq9KgX2hnnm87N4owjU7",
  "key12": "3mJFVMt2kdkjtsgopuFDXjpabEdhpeqDtSzukhYb87EHYberwm8BmysFi1y1DVZyJ3VDHjne8FayDL5gZX7Mo3n6",
  "key13": "2zK99kEqqezPfuriq1wHU89KPi4Ht92MeysXv1YKxWiWsEEbDeiH7C3UurFMMVGZutxBsMjXMqDaJ7ac1SRrWCkf",
  "key14": "2fzwMDDn1B215dL9q2R25PBcMxT3jfqws7jb9aFcAc92vTDYSc6W7DGAjZgDGfD7s3qDrsrkQ1mQ7KkKS66qGYwC",
  "key15": "2brW3VhhZXLRo4CoBZQUPk2NhcLaYqd65XnpXvMCZgYXBb6xK1bc1WcKRbU31QMyW9R1mNyW1o5mEf85AmLVjgBe",
  "key16": "crehKvH2JfG4crEiGoyUHs4nzkzVLXFTw6EQvR4MfYDHeJ7LMCSoUTNze1UMUZLHmreYhdFxicWXozJP3BfG4Da",
  "key17": "4oBDVvR7WSNZ3mTsWaLNMia4rc7HPB7DUKhebxvjaWQfXNR7ni6DX3ibfYtUwDmzUhsxDwNkwcQj8DyWQrjGGMDQ",
  "key18": "521BMgLtMjzgmwAEUcUJu9AZ26crXSLZ1Wsg8HT6pzwxUVHHwxBUkt2rwQuMJYUc4hb7bYqh37CeGoNZa6c9UXmT",
  "key19": "5EfvkZjSmsdV3qfDZ1aQvHSCR24NvEb9qT6qGVsvD5ykczc22moJMU6yPddDxknBppXvfN5FLEHcZMwKaajp8gGS",
  "key20": "cybZRnQnit76NpvhrUNyLJzBCg9u9XoucFRSiqqoxSzomZuaWUMXqo5kyumVpnqDSGKwdwm1HdU9Cj5cVyYg4ET",
  "key21": "63ip93fKk3UD4QAFsYLFYKRBP19d2e2yijowNNmjxT94kqPmvoXGjEozrLeufFQ95gX39QwH4s46PYNveKDTjyr",
  "key22": "51h7XZjypmQqxNRispJFhyFNZWMig6VYu7w2joJpD4FHHGa12mz8gB4HWzyHKG8JFt2AMawnb4USPw2HBCM8JYER",
  "key23": "3ugym9Gu4wVFnwVgRrvK7LMhgBt4hULZkkHT11aHCNuJhgkHbxE5d5toJHC2tZvDfRfVtTVECJJkCyKCfUv9Nwpe",
  "key24": "4gVUctVvjEhgKUGpyVEQD5piBMiRSETrWVQ2dVcYLvumN4Uq4ADBqGf2YRqbFUxuoNAcM892caj9AcaMK9bhH8Ku"
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
