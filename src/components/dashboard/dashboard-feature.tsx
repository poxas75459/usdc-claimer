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
    "5btzfRPyEDk1XCWWVMFVxSsQqpDAT5ZVhXSBTDjXd3avo3TL2wAmEAXwttv7ys7jvLBm1y2cHREEoMe7KYSqWvqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTdGnsNH7z6HF9i3eUZtf7Sfk72wnZ8NNJ4SqWu3xgxHVpk2G1GievjjwbALL58mtSLU7CMVY2EzS1W7Qz2BNk6",
  "key1": "5QPuProY993r9zVytEypivqLdvhMz6TvrVbFHi43ENNRKhSpWLHnJNShKbw4kgQGczrhHdXEkRaPaSSLuTCZchL9",
  "key2": "5uZxYanDYqEvN62rDC6p84BPtmxWz2dR1rKx2ichqVgdXny7nSEEGXEPBRvejHYZJ3mKzJqUeLNTqVa9kr48j5aF",
  "key3": "omkPcnkTpZPfAru9vFkhbKaC6GLCRZaHE4zaH4bHvazge1odtcFifGUSohcMH5ssvSYPk5QZHz8gNUN9gkTt6aw",
  "key4": "44q8hD9b9EjUbN59MBHPHQpahJMczruf3CPeoRqpyVJWXPVppoEomCsBGapFgqkqvajR3UqSJmnQm8qkgSAsMtjA",
  "key5": "4RbcFGEypnquKUywaH4Pohk5BprvBknigVgmBUNb9qR6uQQ2wdnD3WQpevnMi2kprormTtEix2pKSQJucprbGLWF",
  "key6": "NLznR8FRGdTpCpGE8jg5HjybsHCo7JCZLo5AtNCUJrtbid8GCT4Xd2RnKjEU4TFEtvxSGDAfAVT8mmwnoHnKYCW",
  "key7": "2ipaBigWXk3tVzYi5cobLgjuBk6HcU9GkZvvXGAfKtiAhKmLqZiza8eypbbrCAHNusgXDQXYoAfVT98wXnZTXosx",
  "key8": "3e3PtqWvvX2Wzdu1paL6X8CBBfTLia8VTGrRLqhakigCYnfchQfQ5BucX1hQUp2vbHdQSuocDwHUjXGuAgXL2mXB",
  "key9": "4AndtkhPZ8kQgjFdzXDi7QaA6Mtgs8YvhkVo3Twk32ZaKVvEa8ykYnjKRfEQoPHx5WymECGHCwXTr5MW8ukyFhnZ",
  "key10": "2mbezFAhbpVHe6AfB5Nxq5Ep3E5Fjxu2uoYW3hbFxdWSwjgfX11DpvZKsy9XvHkv2sKxTS1kKM2roNNPETLub3LJ",
  "key11": "3FhhPgVEgNRtj7jkh1DUJccSvxqt19jixLKGmz7Ec6oyWUN45juKu7KVfhfbWmKSn6ZW2MVcV22G78yHJyyZFiLx",
  "key12": "2RmWfKQ1B3YWU4d23zXY3gJgEY98z1VLbzW73HozBFLQY4JWdfNeAB6mLwiH46obbkjfYEMxD4wm5UvUJ5ZknwvZ",
  "key13": "4Kq9JQBzaivAcThkSrkmg9V5dFdWpAzcaGSsHY9QNzyC5K7ttyqJCYtJzwkfHx97oZFieYmNKCW2AGEzQKApvhg",
  "key14": "2oYeSsLW32gEuRAaWEHsXmdsNtxzR4FT82HMKxjXfBaunMJKPvRWMmxGTrcU33Qh2fAT1Nj9TxXwhdcZ96FcdTnk",
  "key15": "ShJgyhyDTd1dwakX7CbaU5rEVM4R7kSG6tjSZ2Udqk9NPedP39a9PCb1iM8fZBmQiWfp1RetyGA6kBw6ymtJRow",
  "key16": "4U9PAwjGnQsUqUSHJGSUctD4mC18K8kZwLnCHgadvd1yE3Kep53GdEDecDFwBXuTc7sDHNbFRxQpSUXebRteCtjR",
  "key17": "2d5xKFixDZuNmhLgaoX13J27aNzdQBLdBocwnnaBq81V7XRjwHkzPE3bFfFp4KgKiFexjZzEgqmrNFd7X2XC6Nq8",
  "key18": "3AT1XrRocBj9Z5f23jS75ixbpfaiCfn9zPzbjQfeuMHiqEo5QYvAYGWwDLymgYcDtm8VB2XGJHjDPxS75PU9KmuP",
  "key19": "XvaF31UBjyrhP2y7DUFTC9P1Fqrc4AKNUeLYe15UjgX1dkMsz5ezWsp24NH7nHPYV6YxPCq21sV8fPhJap1vR8G",
  "key20": "4pndSZWKjr3qz78gydghvrnHZUmQFypkmcb2GoW5yXuMF7rB1zcdQMk2FbCVEMByyUMPDHTXw5HsCGruCcu2UuDN",
  "key21": "5HJAh2Q3S2sv4gtHyUgccvQW8ggVJQVdH7nHFod6cCacqC9GGRAyuJYzkerEKSzWyGAgnRyvbswdSza6QftcBzzD",
  "key22": "LJ2KZoucebddKqnjtxvHwUXsnRkumb2AwxmjFEDAGnAzfnS7BkxMDSikt6TxqGmx1k5QTdL5nM9pEn9jg9LW1dL",
  "key23": "DwpjWTkiTjJoqKMAxq2HCedznKtvmgHn8oFQP2owPrgPd24JFAb7Qdmxk2vZkY6822KFJvZELX1Md9r7A2rW6Rp",
  "key24": "5Qi8tKoh94Y5yfpURYNUJgPdoqJbhuuK4BcJLLjNGizCMaoAWpmyLXiqnriWTA59BkDUza66DstbqjeU7awLXWBT",
  "key25": "321Jv16Qk6hxetWAdpUesrBvFSPU5pL9Jebo6erkuUR8GsrgBW5qpFsDs1aGXNdi8wuXaSKihtYUA57fyiBQsEZp",
  "key26": "pKXbajWkZFVkjgfYixmVzc344hZgftGNg73Fz9ByK8f5RGozNfJvTXg7Je7ii1SF4ebxzvmRjjwin9MghNyBXw4",
  "key27": "5deWhuatAY2uJCZb39YFFNVcHGdmGVAKNPSMVEf2xNbTxYoUqqjewhVnN7RwHF8Y6j1zrUTpvyqXxcfZ1sbDnf8D",
  "key28": "m8W7YLorRG1wsa9cTbzxXaAQGf5fW4ar8edQ5PnY5hymB4xicYZBww14Qo7bWAKynhcSQeNkSxAeWeMkAfbzHJF",
  "key29": "271gf1kQNiKmcUZw6ng6qz8Sgvhy4FFrrgaxd5K6B5XvnNJ29kdBfidMQCuzpgaSW3XbGZg2VbyziQamHABKQutD",
  "key30": "5X4WSr18GQA4My8sa2LjcxHHd42zn5V4CkpdCHAUf4KfyiRWx4W6Q8msbtUxYQtuhZeMfcBsNvG3wjvdjGsjH3xR",
  "key31": "42PwHtjyEZttrhqGYwZV5jocxPaeizBrrsDfxJw3LED4mUBoFckt8QUjXnjyomgan45SdxHUsUXCzrYhPNGNNfLR"
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
