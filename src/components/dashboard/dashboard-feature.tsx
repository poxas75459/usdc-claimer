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
    "3H5bURnCGfXhdRTTnEivP4ZZvZbisjcpPfnViUM9fAMfHf6s2jvWxssj9SEzPttBsD6K8X4o95cWS7k4PR7ewXAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q96772iaLMmqerfVC2azY4hDb6t7ybo6DFD1Upf1avvzL9rLaRKwjEJkxKwVStW1VJH748GXh1v3ZpTsrrJ2AH",
  "key1": "oGrUG2Q5kUJuDJtUheAxgNZu4SMV1YnHyeNUbKbCKLDTNg3tubbC6QGPduTJbydUkpVCBZfFCu8r8xL1QQuqAuK",
  "key2": "2WDSpVWR5oKXEoZGZKL6SYcW219xz5HyZ7KsVqKFZtoHssZ6jiqGo9oLN3GWFh1X3iQkGVsEzHoxFH3r2YTg9pyT",
  "key3": "4aWwQCG2Za9yJ3Zvs6CFgz7BZNdYaFmp5T5TDmQNuFY6NXtKo69GMG25p88Ek6WNeR4Tpv63VDWaxg8Hmrf7AL8t",
  "key4": "2DYsqex5WAXQVgEyfKPJomC2EmHzRA2y7M7RP8SniNXdWead2JSBFHpK5gM19yVpnktQNY57LmAYcHwzDxY3Jk77",
  "key5": "276iXAMfrrr46zBS5yi8PAR5WMtWHMbamUnrWCv6BKCSahnchdmFBTEH8pSJLHu6DD3ur9QfsjeCuKf7nSU67zgC",
  "key6": "4hXjG45i2VRDomA7mS4ReGGGmdRc7zZn4jVRCjUy8RX1exr8bAowKct7bgBhEhr5btYVtSnRcYUis76aqhYM5rzZ",
  "key7": "Q4rJqC3ZgueBs3s5USjxHkyzLwoGZEGsxBcYDgJVwrvJiibkdcgEYaRnydntj8pAJJ8iU4WraeGDGPtjMqBgMTX",
  "key8": "4KiPnWEkQsS8dmU3idQYMjcaWuaRUaSVFNZGKFXk9CvScKq11YPfMyWatgwPjfXatpkpuXu5pDUHY3ov96dkutZV",
  "key9": "2DyMJrvz5G4UeqTBU44zKSvPzpqGyGVsA16otZwMP1DvbrEBdeQQx9nX6YoNJgoEcRZYmZA9U8JVgroEqM4NzHht",
  "key10": "5C7nxP65c9KhetcAWjqp8WXZFKmmkbGamW8xv2CVLaYnjWPYCZSaUb6ZRyytTpsiAdb2qMB4TMRSuhcJbLCLF29z",
  "key11": "4uahLxJc44sufo4vSE1uZrwD5DxuXbi9D74ypeZZE36vvboyVJGkBKMM4hBqecvh8QQsMmrLK4LYZkD3P1en7mYs",
  "key12": "4retNvks4NCBVhjKnXtQRg2bWBFUFkTsGifDw6dYrtP9gU7bDyi3ke7L2ag6krKzb1dVBCNcoCTzQEHffm232RWe",
  "key13": "54qFhU4VWV5wHUVPMQSmEzxLykVcxgZpSUvZkZWLSF4Pp2ANaUHGXUZDjtK7hvhVwon977rx6BBWr1YyzB196did",
  "key14": "27drejnpezjswcAeiNvuxKHdduz9vFNdSoAKe88PCBJGwib8yYjn3MM6N8U3fSJHGxzTW7xtERfDT3FgFgnofMbP",
  "key15": "3r5FDqMFyK6eF3MNDLWLMYa4vnXUZwiBxSHoiQCY9tGAmVw8se7xJgstGzHhPhgXkQLxLQXqbvmCpkwVoFqnPw7y",
  "key16": "5uVQWTAmPNmpaYUDhLNZqxUZFhzXnQfdhDX9Y2JSV8PsXSELNGPZmZSKVs2nkmJfT2dH3rEyfjPXRT6nRqTF5kWY",
  "key17": "55uf3dpoTSQbo3ktjZZBp4ptKVjCWsZTdSFCjA9dujuj5JksVVoFuf7R66D1WsoERpppDYDx17Pg6v5o46zsNnco",
  "key18": "21JiGsf4srnY1NMcWEdeJXiLprbvr1FBGLrDnsNkwqPiPXoY2pM6NiRpU2TyriX5DA83wZoKzg6idh1DPnm8QqaJ",
  "key19": "38R52pLEhVBNweupsguVAAPuqMUtE6JSfhraGcJzJaaPPMJnNfmCyEc1hVLHf7mWKHHM2MnFxWrVcgpVbKng5H9U",
  "key20": "3aJmg5ZGhxFM9DTq8rrutWjE2x8XxzPkvdcWEJ2ZB9ZTvRDX81YePT28Q91dDo1tLpK6QJEHLmRQPRRZFVWkURGX",
  "key21": "283kRPHtYt1sqAGZwuKm25mhDxuHSbryF3qZbhu1GdsmaWKJVUBTeaTPB1Qyt966hP6pN64iNYJwcCSwf4DoSrqA",
  "key22": "36yxT3YnBNSXWq6ZqBQpEtLpNnRJ2bVoeTX6isWXHRhh8GFsfHFv32Kw66B5rEDKNPkWvwjtT4iZnXTSVWuLU1bX",
  "key23": "4291Hw6AmGMj3K11jsTrneUyBZ3Z7bPSxv66CHPSVxTFQuR6946Jyw3CKnq17tXfkReWSPDeo8B2aewEiSCabKNs",
  "key24": "2MfD4uAUKftke8LV4jvsmeTuaj4XxhwirgjFDmW5KokRuc5yLKg7PK723Wazrh8bh8mnAfUcTwWsF2WbXSMDM7zM",
  "key25": "8mu16mzJc5YALys8RmGRDYofqGPmYpXiYTiyyGT62Sy9M5vtWrxtcLz2383v6FZTC8sJh6EArskdZueB1rouec1",
  "key26": "3REYmGNirJZLd69ij3LY9Kz2hV9YcxVZgTZvK4Y2uEUUYhfTMKFBbDby3EiHppEgfdoA7RD5ti9EGHHgeJQBxFQM"
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
