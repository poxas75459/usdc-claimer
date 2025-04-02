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
    "311sFoPRDKsHuEtmQV7aPEJZVQrWAGqRmpibu5MmxEgjxkANNvUNbarZWQM91DcmDqhQXESiiCM3afraQUckDm3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BpqAU9dKB56wxVRdhZYEwdSePYXpPwp49NYkJtEjgRiUShN1taQ4LoLD22KXzH4FMm53jB2UqZZAzqL1NubC1Nf",
  "key1": "4WLF6jPX13hC74mrkzNqwkXRLhfwCmXMkmmQNA6htCEJ6U6GBV3HQmgoubajrApaH3N6cRBBPWD6i5rYcD1qKwpi",
  "key2": "xB6n8PdeLiL9z5VjWbesq5fbbe4tb1MtM43VFan7NLhVPnD9E3tX6RZQfzLr3sDER1c9b5QmTrgHvsu6HhsUVDi",
  "key3": "2sAdFeDvZrTHSfRHKM2sGTFkJAtn9WrwnEsx7EGbxH8zTxx9z1FCwF89pFrBeWuKYXiz4NU6EgWyqmWYXDgSYksp",
  "key4": "3yPqCbRVmNWCEMXu1mX4P3QxJ1nnk1s3pQEtAJaMCU1JW6QQBnU5aDgfmGQttoaH7AXidpDjWgBMmc41RUmrTH6k",
  "key5": "5eQPxzTFT5caGnurLNQw9PhfWVtYJGjTwijgWVy3MDJUeqwGSXSwG5UuyCqM2LajL1FJQUvYnkBiakoVpN8xAPaw",
  "key6": "3WScX1yJuS7agVoHh9Mc21Vcxmo9nxT84xuG3vnh92mP3McVZAb3CwuECwcfycHVZhpQokuo9jZDmAr7n2S4wjMZ",
  "key7": "3eL9LACsikRBtiGBBHtK6GZoA9urhD7yiRGwVfpbdUBtHXR8iVZtELRKwqN3VZ1t4TSqwx18YJWK5ugmdYGkxW1V",
  "key8": "5RA41vFNGKsQRAMSCEPvnB5mfvAot1XTKJDugwRDwxmPTz9qdFCkKrdeqHMHAhPQKBstnLK4CJwEqrFWNMt1vare",
  "key9": "3YTnQaNsKwzXVPSzQbGJXVTnW1xt7Zdgsp6iatKzC3mTvVCKwgcKHTmGwYShwdkKk3Ls1ttQ85PnrCaSzBUofnob",
  "key10": "2hZ8GrGJ74fFGMLJtJSYqiefAPwxyDjyagBcVR385ypJBDvkG3JAuWXGRw8W33zjSHgsBr6PJ1STJdjVUUtvatmc",
  "key11": "5ZFKe8EpdF27wVfkKU9pGpyDk3Mn7SBYT2xMEMxSKHvMtzjUdB9bmtbgzB8bgykH2Emx7umweKJ85914pBnZG4s6",
  "key12": "KyxBsEs1jbu9VcTPM5jwQQxZi6eriSUto3Le6BgKny4UeNn7fh57CaGCQFqd9mnY96mSRCYvdiiFuoh8QTRqXd2",
  "key13": "2qNLRXtEX6A5L9B7vxQXCYGwc8s8LH53yy9eRzGQVRvJtwARg8yEt8EgDNgaT3HaTZVGMaEpqq2fiT2TVveXGtHX",
  "key14": "56FLv9K1tixCvqh4co12EtLiheHxq4NefEsgFHkBHZ7zKusfJ4MUbEgCfxVXApiG3RTw42Zj29Usv2aE9ZV2SkAk",
  "key15": "QTNRJ5fMhZdTspgADaZ4CAbANwPWtUEKy2aWQhAbWghvvT7xsbL6TP7f2XBayBanVHHprwwPCuh2aFE6NyJuGWo",
  "key16": "2JQBmm8GAtHApHZdyZEBoV3xLA7PGiV1XS62VnBuKBuVsT7Ge2A4xy6BtLsV5AgwevXR4v23yXYtnRtizKw7AUVK",
  "key17": "gfAPmqmGairv6jJBpwNAZBtvVcE8iDGJ5N6VfxkWffrsHxT7qBEGrAAEUvhnoUsXzpfzaYzRpJvCfCGGutEwEPA",
  "key18": "67S9zX4CQL4UK33d4AA8dtXET9wvvH2m6TfkWkp5Ww9bSbvddqSkVk7nqA5cwvcjEThHV5qbxm9UZc42qqjEKW11",
  "key19": "iGJgDGiqQx9ubsDAwdaGJ4F3GnyZ4Mm4MSbASwpzzjKoXpzAqxA7UnvntC5dDS4gh2rixKwk2WDAwogmfT8Szu2",
  "key20": "3nej2Zdw7MgwWvLRD3gDeHj4XiR4geExJuPyeEi1hYxGpYpJ3K2foRf3oQyG86oRNENT9swbk6w1WUWRKZENCneP",
  "key21": "5JQYfd7JYv3FWD6AnScz5e5cNQWMkTCiBK5v73vH3CMzPYZmgKwWzWaRJb4VLd1hnwdbny7mD7pwtUuaUofcmdXX",
  "key22": "4PvToxErbzS6x6zUHeYQvdFfpbQREPK6uzFkySxcsEXYcnex9jYFxXg2ipEv4HYGUvtqgTuJomtbTnYcpEFhLMXe",
  "key23": "3LwHhqaGG4kh1Mpwqeh1Zcmxhp4QHW1a2TkJgvb2mLFPfTRSrnLpgQrHoJ8v7FmKMFHUmgPMUbrrxDYuL3Sbv9NU",
  "key24": "5XyN14vFuUwqsajyKgtomsrnc5CL9qpbt96M8p7H6TrtWMVUyLn6zSfyW29RMvHe1XPbFiNZSfFv1JAA2scFgesH",
  "key25": "KcxhGs4ckyJJ22QrTx5s2e82ZobLfEHFexYHMd5n3MY8ugfo19ga41bSqUYgHrHazPAKAHQgpfkZVJQip3ZgWi5",
  "key26": "2uA7ncNqgohPTMc8Ht19oHSDEjZjundA1aXvRRUXzLKM3d7xW1N2Zhx93mBvsHBh9fmXvKzPo5BrmVZPcqijZxbw",
  "key27": "QVz6jRSQnrVU3LBDRV5unLcXbEDAkMYZKthnmLs54FPHpGhBUpnmgKNXaw2ddX8UzXwMpoRJ7pH2ozBH9ni1oB6"
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
