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
    "D6yvF5g82RaX1C9g9KwBTZbpEXryAXuWkjxZjMSKktuzNH7S554ajWzm3F4qMi2Eq7eJSSWv8GWQA31hFd5fnaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8tG22tpNgktnEUyyK3MybxAEsWUgExtn8cx7phq81UQNUGsiH1CeMhPq4ADAywzoF4DJHjM68Qi6fdLFRjzhyFa",
  "key1": "Yuz2Lbj1TKTpu7HJVhAfNHEJqUsz14HbzutPjb78dFjP7puepJiCXduchGF9MvK5Tjg3GoLnJrE8MgERhZ1c9mv",
  "key2": "4fhxRSkje9vPCbBcZx7xkmhw1t1J3CUHjJLaN93qEKxMUUydwCXjvpM7v6Zk9BmhxNhDniL2NfjnbSaitREU5FJq",
  "key3": "3BSShUagkfzemJsjFCmxNBxFYmZMEBBcFYopZTUP7gvVveFkT5rYzqZfKeCqCxdZsZ7kaqotCLXasVuWhuFR5yf7",
  "key4": "63Aih3PTExoWELw43zTWijSon3j1g6woTXdvbbcBR3ja7jGBThdTVzoJ947KxrPKN9HFbnix9p2k2Uvh9G9NQMXZ",
  "key5": "4nppzSYkgCRbMDLxa3KywzdTvwqcL53pRvRhp5jUWRguAiBDRbpTmaYVrRJf4DjwLSLWii2uUrJvt5t756wwCBw6",
  "key6": "3W4jh9aQBdkeKbY3YcGxCdwBAqKsoRkPnsFi1VHdN4SPGodLg9b8V8r2enrJRTJ4vpV5YNc9zv5g2FWirnAKzSCa",
  "key7": "b297Ayxe9rCHUSHgm5mwuju4K43gYcVqMtEVrVUzoPaedr5m6VUMAnd7nCtVdF1bLu4MnfqvBLSDc2g2B2X8wuj",
  "key8": "5fVXeRSCMucCvurur3d8p7mKQug5Qu96fYSEFfac718tEttq7v5pAWtjyFfTGir6vR98aGmkDEzBrde3HGmGuPdG",
  "key9": "ptUXQDgoBTZKqUM6JPb3NyjoY7DLQMfw4iPdigG7KEoXdZXzJPHFpo5gtUcBuA1HEk4URCYWPE5ZhuAFPjW2S5m",
  "key10": "5ZjSRrzG4VBiMqkxu3ygtp2Cuu7t2GMixPujmXjhcBZWeYBWBj7GCPSz1WC1kq5PpaPtEXZZ7JoMjepQTtmjRaFK",
  "key11": "2wkXMACQW39ymVFX4tVhrxLsqsMCh3krfFTtgLucdEboAP7DCoFAHBEg5y8H1tYSFu6w7vdRnvxRtekqMW3o4fmQ",
  "key12": "3hRPrsmvqenfJ6cb2HoBL2GfDVcMiTgqQRfbEpZxTtDH8MrAxmEa4dBeE18Dw48rYVJEqVFAQXBZMK5kB3fagk6t",
  "key13": "3azrETXnS5MD8NAbFK4QPFKfgPmVadDikgtWzigvKbuJYGhuned311BPEQEDcSFzQqxbmGfuA3Jvec69q3boQGDh",
  "key14": "4gMcQCTwdakyNUJsBGYhYHt4MAc9TwkUxCDoP1VkAd1nbHzrvmUukdXZjSHEf18ggzA7ytHysH5xxNHyXkW7FshP",
  "key15": "s446XALZwpsyxwcJKB3smp22prQ4SWyvdVJAdCXznDvzn5CgicsaomhhrYuf3C8GzX2p35tf3CVxbLJAZ1eaWDE",
  "key16": "64wTb3RPb4CHPbZdJ5vYN4ykdMzpUQngg2Qo85rw9VLpKaHFUmLSZ8aBpUA3DLvSESKbjqH7HFbJcKetxwz1r93S",
  "key17": "5bRfE5Gt6hcj8rStwzXMW5pqvRPwUaPkefRRVRG3HWrzN3AYzyZF8qAQP2p2HwJaA6xQekpQGc7iZm6s7ySdHpV2",
  "key18": "4WoS1eEb8qCS4UxyeNLwfJbjEjBKs9x5EcCzcFW1HMev1R1oNUg22DhiPUp6bcdDF87KYMUwyd512pQg1j6DY4Kc",
  "key19": "3T5V3VjyBcX4FRQhSNTntxVmLtvcjUUohfNzTDG7CL89uShWTUaLZaG1cgoFD2cMpf6DTPRYu5AZZuKae4BDEVxE",
  "key20": "5oBQ4XAMgT8nUtkHHXN67CWQ5YmZ5Wu1BzUZpDiPXfHpmHaDzEgQP2StDDfdctkG1upwYKH7gy2qhVEFBLPjP5ya",
  "key21": "2agp51nhQDhYDhmJwp5f6Esq9EvpR25tKgzATNGTqZUUjx1P5ZbGPLzKguUHgkeTPtkumZZM5DHWDXrbyYc55HTd",
  "key22": "5nmoR2Xw13JfePSDv8cCheyAfACD5D2aQ2BiVSsYr3y4e6fvsdhhAqywjVtkb7XFFe2PALVEXPj9P33enuvj8mbB",
  "key23": "C2xJeTwSX7F73DLATxXJC8r67rQdQCe5Ncxw71QYbjdjizURnRpMohWw1Ez7Fk7fYCsWmnFwqUou7eGA5C2Vgxx",
  "key24": "5xRWfcBkKitbESMD9vAgYeA8t4WZBqCQnG11TULzXaQYZLehC1imiHVdQWRrmzRvxfhmgjiw3w8CkkkeJK4V5K3v",
  "key25": "4DNEcyR1dW2UFnXeLnq86dmu2WidYd3oJu718AEYRBQbTPkVd2WGJperYGUmAcBPRsY6in2oEdv3iUDgf1iR4YjZ"
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
