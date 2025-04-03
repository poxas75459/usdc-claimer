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
    "3ZSe92CmGSn7ppY4x4GQmzhU7ADMnzSt2aNmNaknpubZbwnCPtn1vztnXskbhqtjGj15a4VugbZkjJUhS4vH3PxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHV45wMXWDQ3Ms2ehYV88YL8yPConNSEj2Fw7LGiHhQMAkLENYYRPPf1dDbYSZf19Jsu7ZXsnGEB2NSB1gh3Fqt",
  "key1": "51n56q9yYrxgHATRB2BLgTJQpPSywwmH1e4X8JjJet7GLM4YgSjXGpEu9c7twD6tP9y8HXYsuTGy4kD2kT43rq8i",
  "key2": "uKzGfErH8fAJCYQfCRF1N34dX1QUFkeNn3AEktQzZJiEif5SBKXv8Yio7oDtzgr76MhvMkLHR6KfVKdubWwb5Kc",
  "key3": "5XHwazsfSptJ7HsLq5JyKptYkRx4d6NsHowW42A6RQhXXQUTyZmKPjVdBY1g9BwZKN97GqebJNnGFFjmJwQoNWA6",
  "key4": "2XhJFPQoEbUH2M8mi22LbufgGM5ug5d4vupKqMzPxR5utWT7e9eqscgfMEqaA6ivykUmio988reFFA8g7YXsysa9",
  "key5": "5WGU139g9e39N7cVERN9JTFfNbWG5NZbAX6PTWxwLJVnQB7hnpvoJqGgYkz2v48Q56E1DmjCF3Xcorv23vYj5ap8",
  "key6": "4pVh2qM4T9RDLJY3eWNZymyyFy9QTbSyoKuhHVPwPqJKhkKCwpa2gU8Sgt4eWpmxS9MSz1UCUFQZLe4eXXmkMVW9",
  "key7": "2G6zQx7Y3GCMXXtoGiyoGyHhffwWMLFKHXiYkuYWJpsXZ1ENdYcdV1Vu2wEWc6ic1rtZ9xNy39oVz6wwtat5y4qW",
  "key8": "5N96THWXMfSbDojUzU8QiHcNDHTFZz9eepzgyBF5BV5bLcDPqE81sAJrp6hnC4r9LsDa8HPDheoMYvHAcSGQJy2n",
  "key9": "2ai1YPSxEH9viNxTgYucL5s1ip1K6oZ4RWLbfnv3D4b7jT21RdSV35XDX6VTuz3SwKixS5AQaqtiJdE835vXhyVX",
  "key10": "5neKWSqZnretY9hr4gER9j3AXCVrnxwsvDu3y2Ex61BvwZXUnZTdxx9gc7uUQpQvVB4EvSHxZcRECRDPfJMa6Why",
  "key11": "5bMrDRkbK4NVHcSZpyBRvmEXFHnqDzbSCY8nawLTUMCAANXSjnPdgrAeeMGZgJ8e9sieWu9h3paSjXZcL4M546jW",
  "key12": "dhUVigHNHzDqqPCtQyMPx31ZythmRmKkux6iurYhUTVojcE8aSBAig9gTt7feeK8sz2DpXYyj1xofFp6Z7FzUq9",
  "key13": "35YikbQRUVQ9zEUD8NP3LPZT2ksicGXPmLoKVe8f3wLmXyhbaRsDyR7J4G2m4WMmHBJ6owgkcQ6tfq6Fds7bDYwY",
  "key14": "3G25RegDTY36SDa4XMmSxJn8FDBMZrqGAXcdKsTkWq5Qz75vnnPgDCa5xLC16Rm9vsqz4ay8r7P1RA3TYXEriyje",
  "key15": "3js5weSdkYkuEt2X67My7VoSTM1EqQah7w4wHN5RGU55zYcDy9BDYrHWnMEK2hoqjW3S86iZBMjVErnguLFPmAjG",
  "key16": "61zjZuTEYhk31QZSXK8522ppPPGv1eM81vArMYBu3CCp8U4F9EY6weMJAf4YkmKPUVmyzZBxzFFwJtws6B3onzKv",
  "key17": "2Psts7Vz16yeZr1S2bTGGduWazYSqVMHsoAe49ALfCDfmvBjYEK7b4XufS2cZbM9FwyLH4Nb8xG5TXgfppcDKbCQ",
  "key18": "4jh2E8En2fYoE6aMJW2A3VBCShN6gxxheoA1CF8K5jYLAF9nZ4WL8cpLGJzryn7iK8zD3SFSuWDKqX7SVQMhDqo8",
  "key19": "2zwWRoo3JQ1gomevLDepYjyHDGWauEX8m8YVudQ1Q8BCEPGYEMNpT3Tgmw7VcuHuwseTtvJPBkHrZDCNouyhGec4",
  "key20": "3SeJCfe8S8DrhTzcGAFZc4SxrNYn5qYagKwwsRkpmwRe2suppMh5bwW93mbDubB651BbunxiS54f6WtpiKnjiAdv",
  "key21": "2hoCPfSrMkJSxUqZv9SPuZaausG9pr6CF7SAMroWrxskMnHQQmq3GbbWh8goH5TLRFEaMxFSZiYS25sHPW448Rey",
  "key22": "Vh9QBv7qbPk3HUJAYRE3QFBZBAWEimcUwSbYhtdtYG6V5vqpGifoxvzuQPX8Fj1NkRYUVeSfwhXzb5cXvWCf2do",
  "key23": "2e94SvZGYutq85NqG661BCuiD8JwdZVwrai3buJPtkBiA75634SaVsGa7RWd9tQpo6MJ9Xg4wyG12ph43sjYgWC2",
  "key24": "4ZRXjbLcAPWeD8t5qqPCDrt4pn7MRZ2aaRvhGbgR7gmUCsMoz4hXu1uuBwWjex2ULEKRsbyXtgpzT2H17W7rwHd1",
  "key25": "4CKP5ghMKWAcKFsdUVbs9aoyA8gRdSqW67KR9H59TsvwkxPCQHXu3bjiSPSPC37gmrfa68k9NrMY3jembJ84Vf7o"
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
