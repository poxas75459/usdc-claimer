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
    "5doSpnwjBgSBcomprzozjdi9UXUe3H3D5tWJRAjTR5hE3tbY5TVpVhza8qtxDvTBpMagdw6UkGEzosgvugPHsivd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qh6tid3gJVtvhuZrL5PzDVTWuNNUsFdTszJwZ22QUwftu6vBjemKsd7NfSVUBAKHDGqTpynmw1RDp1D8oSfQtFJ",
  "key1": "2FWPhLbMEe6whvkgXXy7miZfbLRctNwZxq4dwWEJHFr7mPu53zoUk1h11FR7i3UMwi6rtQ3jyrYdC4CtxAnNk1FK",
  "key2": "669dcErmT5yxst1WnpLSvn8Dt8XKcbuyZog3R9r4aHSmKokdRpzNZZZCfuk5FckhUQzjcm7nLCdYkPtmYneuLP9A",
  "key3": "tAfS233Ho38T1EZBFFAi1rXPRAv195xudu2SXpN1yg4nxqjg97w7hsts69WLtwYYcmXjxEszNPHPrUHSSXo86mC",
  "key4": "i5Z8dwr6K9xAyehstCDebbbJgdU6Yr6iUs5ZnumcRXCa8KBfSNwybu4j7ANQcdY3s9dKH9Y4WqPaTN5mv4vg5kZ",
  "key5": "563ZscRi8ZG6JWYbC8dCGEQVRJHp3wpvXdHbCMokiXXLByem66ef1YqbJ9sta2ry2B5huMz7XcSjSS2Q9cVzqTea",
  "key6": "5WDbfQL32MmJsfSnj7Amdi3bh6mU4k6mBshNAiqjAsniHeVhWFyQUtGRHxTaQRxUZQppacvxLYfjymfL5BQMa2c3",
  "key7": "3MAZoAgW9aaLht9ZgnL6BZozBvBAuwm8s2sYsYfCgthEvDgJ3ueqT72cdyeAs7vMmmeigMm4pvLKKEM7uT8zHYZR",
  "key8": "4Y7KvneMS9n4yeu2Ufzmb2jCCeUwqdmGuGGB2qXa3yLnp2uNy9rFmUdroASw8VzLhRxdVwrMZ23TWKqp4bAUCzML",
  "key9": "46gSNnfCMvKWu9redVpa8aGKLVsR53pKphGHYDXCV47jS93SZLN1SS7TziB1wiERARfbS6SqG23fnVQPbWSHEJUo",
  "key10": "g4GH3vMiugPfG5YNrXCrwcr1DgvsF4mLuBsbYfd18pobC6V1kxbc2oWo6uTNbMakoKjxg6okeJjesrkt91JrLsE",
  "key11": "54SHvsfpsQ8bmDRBNTVpZDE8Gnh2bMGAQajMy3yTrZM7VvnU8xXMi2k27QYF2XHLEFEPnM6YYuE3NdgLa1jrAHEC",
  "key12": "tp4fZv6XsbB6oXps5M7TgtVtA87URWpxxuouzfUxcaqyEd5k4GYQ9gzBpazr6hZbVe7pvbXpQKjWneHCmm9osaC",
  "key13": "5gf9i2BmVwhNGYPT7wxvTXvMMAGvDa7XEhpvTPa1M85rFyV9ELpev3XY1urdttHcrwiJMpsq6QptPm6VgXTQ417u",
  "key14": "4Gn383HXsyEfeW2cUEzQeKCfKFaaQj9iiAgvCBACCg9H215A8iWMLhaHdeBYjY93uuEmzroku9m1ZM1rKH17EpoQ",
  "key15": "2yknqcn4o1kjM2K3axh9rkQFg3dkcAM4RbjG41a6VGCEk6mthRVzW82oJwz5yDJqwoSqSKEhqw5WngA8wvNLwngv",
  "key16": "22apxQ4sdS4Ub7Gynx66qF3jN3Ubazf5M4qf1dJkpd31HbVWYoFXsz3SYgkYLHxx7mirH34BKkXK3w1EFvQ9C3i9",
  "key17": "4754VuTFwZPyBNx1aapUePudjWKM7JUjUxABc2nxEps4brxVsdRPdi1MVywurzrMoo6e9iT4EieTGcPBuKibATmm",
  "key18": "4iKARCqorbKpLWeYp4uhbWrzND4qhNUoH7uCvJcDdrKbw1HikhxbDuoo2KEJpGVBdxQowBdENxijGzdsRxYprTPt",
  "key19": "4UvcoPMZijm3Hs8S2rUCgDumBu8dPp4AdyNAvfVWi6tSs2fXkpGoaWi2iNj8MA35ZfWvieiTiMU5V1uX7ECW1L7L",
  "key20": "BSSvCvacwocwNcoHFradtpSo8nQJbA4fqBFzdKoZw2x1ZFbs97J7Qr7aJcwqB7p3inFTThXEDZxB7VrLnPJdAMn",
  "key21": "CkaE6A2ySNppM3NNtY4hx948QJKt9GbuQrRtYeSrLx6C9qzV3KxgoPL3qcv1n45RsSBdEBmrUJ7ktEhRWC2cYbB",
  "key22": "2bsntKCrfSmuVAJRnHGATpis89syQUKWkmiM4LxzwKFgRhs8wCn3USVNtNaTUMKgaVrrq67oGAUwVvUteEwyCi9y",
  "key23": "4QWvFh9MWgG8tZNrg6ZQJARZWczDwV4fayb9ZZjBMw6rDwcJadWizTwAf8Bc1ecz4UHa94PAhxD8q2WtQNweCfZz",
  "key24": "4MYLX5gkkrTmfd9dvETGXAchc1AWEM5csHRisYPU7ygvnyA4i2aCM6UTTyhkKnMZVDttsk9wtdrZAzF3SwGqJMaq",
  "key25": "5Cmo8DvRNusXZ1dpxd5QEXaJtPoJerfJJFonofnB6eAMogf6mJ2dpuCkxMVvVawyM47f72JFhRccSVfuAVvdDLM3",
  "key26": "2Tj61zdyvB34daUKkZ5sWsCekiFgTSGu134CtJRhSjUGutUqWj6Z7Qk8X5N6Yzi8q97TUm8qCLeo76dbi8B7KjuL",
  "key27": "2VCgg38E5Tnc8J8eFdeCUAFNnf8LdJxsVXv1VzujUABPbem6oUD2ma8upNnHbxaUFKGiUx7fqMs7dmyHKaxCMuJx",
  "key28": "4k8nBg41Cnna8UnaagGkmmSn4m8QkqCA6CjqzmUdoMLXQPwnH6oUDcQBQrznNf6sooaGUrcsEsm56MmCXdEuzM1E",
  "key29": "3rrmAYUHQFbfRa4ygvaZTHRmWf2Uc8rJVoyFz7YKMyZHuxqKYR1AmfhRAMCHZMHjxmpc3HREQxo1DjGGKstmJAbo",
  "key30": "3iF9VMm6Eyi2DTuK5RUCW6M4nat3FLq9WbTbkcudYtn14j2KV5QVuaPaYvKs4e5pT1mJFcgjSUKvRvy7XNsrzpoe",
  "key31": "aacgHmbrboLz484ygDQsgZqNFwCBMUf2zaBDVzfEZ79ob3NQMKhehdxx3F3VJ6ZpvDn8njctW8shU2F573349P1",
  "key32": "4hpKBMBHpxmC379pMFq35cPy2Gf2uSdiyBo1THZGafxeKfcjEmtfV7TMQ4TKXis9dc5rKv9nKRLmK1rAUarPxZMK",
  "key33": "n9Cc2w9gjH2wPW2xe6WRA4YGktRcsqRpVHCM96uWBR2p698ibPuQB91icUbWRCiizDDz4hF6uTJdzkQi99WH5dC"
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
