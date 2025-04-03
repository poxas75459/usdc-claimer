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
    "3QXXn2GSqLndsfk6WoeqARBwHeMUv7paAsXLgxycet7zqrfVXqwkjLQ2SKX8PMWZRfdaXgQAwom5WBMAQfJZxrwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvv6QHNA4KS6xJj3SyMuP1JDv5rAv8h5t36yPUmKDkWFkkxLtj9CmHEXerxZf3nRRDFWVdSrHzsxmMbDqybgcWe",
  "key1": "22fsNfGvbRB8DGb4YC3WsEo9Yie1avf1M1LLdJoxujeiya4Terqf3Md6nn42VxJTVR43TVu61HotEgfWh6JUJwvW",
  "key2": "56ftPWHVgsgScwTFNGbxWPKwFHpSeMbwJYB3tE3Khhz22tY52bt8Kxf1Y5WX4cXe49BturyfDzYiRmkfbU91LNWQ",
  "key3": "4kXxGKFxi2iWKvvxCZQ9UmePSEtGtE1CmJYXuGjpWFERsHgxaUc9h9rR9SkNKSqZH3KFJchpexWkBuDMxvTiWT5U",
  "key4": "3VA99yYAmyqznvSp3Bo5c1oVMC5rUnrQDFv3yPQudmaXzmnxkZFufcyYiUqLkD4GTEhDY43ckYqz3hks4k5aVnTA",
  "key5": "4nHvaQaF6xsgcrn6oDNUii6C3BCC3aU6F9N3H37iuECq64AbaQLu8RCh1VXajZbKtWAedgVkyjxeQF6ABr3iiPtK",
  "key6": "4Lkps6jMV5kqsMqiEdHwRdDW3UMSryLdZT6uwy211cho9MVUeftkXVk6nKucPAJnN6eMuZeQGPKX2wDscVvvEEzt",
  "key7": "5pEwJjR2JrpE4SQ1pKcuNAsAEBuESKYG7HfjSgfv3nToyN587LroNFgXKodhFxNydDgMWDm8XQo72YFyeu1G2fU8",
  "key8": "5jkGpruQr2wSguzPGS4W63q5e4MTh3ppfYNGGrV4YcaiEHta3M62NYMcvQVNQxkwkrNRTBBEZFM4s8nZmXZU2TCu",
  "key9": "28BkiSK8pL6RZgbuEYjjTpFaznEXMhFXy1i5qu26JxT25iggFVFSRfxjabCE458VUgy5qFW7GymUvB4Wjbnww6xs",
  "key10": "4kNMP819hGMjS2CZ9PMq6CZbDYxfbjLg8ukpXQjgJP68FJoJrstw6EZbf5fAtpvWb7rYyNGyifzKgw7F2iTdCZgP",
  "key11": "3paJdKwcUkgSoLAzmu4xbgYxh2tATDsKxM2e5BvcG7nbiYhVChXNsLE5YQjbUhUxyGFVPGvMPN6ShyCE87xUFk1Q",
  "key12": "39ggim7V7DGkXLfymVM6XRG1gxoexrhcTLXsoN4g6VgKRh1CrXRxUF1Ftpp3NGEGQe9w3WumjvJ6xR6PJEDCQ2gW",
  "key13": "8y7CfbJe9JeC8QgXaqBEUwrhUq9jKvqxAiYjTrhTAL7NfXuPBXtMFTbKXhMPnqakGN2scjjui9fPL8NJWq8kPRE",
  "key14": "3RFspd2bep4t1AwQAdhBNz2zvUj2FqH9HJwUR8HkpGEnkpkHdGwvqpW19piesSnc6tJR73BL4RcqtLc68r4Rd3er",
  "key15": "E5K9soHhQKxzzFqpod4FF5kW4GmRZ9onnF8RWbsD6sLj6zvzf3V37e2PzV8PP5V88CUxWZTYBzCS1YT2ZVhRoU2",
  "key16": "4Dxwa2suwEsjZMGuncNVurWKAKd4ncGWquHYBztFZB6ewdhc1aBnaTVqYGhsX2PWC9Gxf54UqrwysrS25D1Sv7rv",
  "key17": "4ajJ8FGJw9NhZkfVTEfFcAhyq3qyXfmhG3Rd9MPCQ4RB9DHd1kBa45CugVt56Sh9MMzezaeHGsbHLHCMDPz7jJQh",
  "key18": "4peq5B7U1Gm3eH8b2Ny828gCH1wEmfe8s9gLFzuqbXRpm3yQ2U66tvNzmL5mnHSNNSgDje83rURi3ua4K4Fj1FYL",
  "key19": "3PxNtjoj5e6gKQrTMFJsR415MtQE9bj3F7fyJymmU5FxquwCVjSepiZ8Rnmv9vkrkLVNPZQE7s9LiPRN68Nsonw4",
  "key20": "5NW1NnRhtnqS4TnBoxE7utTNLLvFQnKd39GzKQ84GbjcsHv9FVUYEcPVGTw2mjyZMuJrfgBcx5S7MbPq8R2SAPXm",
  "key21": "3GDB9TH8CA2scyN1WAQjDqDwyk6Zou2ooprYbsvnE1kQXAStcPU4u8vnRFLPPBn79i5XyVeiLN99s4mtZvtSrnjF",
  "key22": "5R688R9E4a5YFt8zeMdCP1gk2uMcxC6tkUtn7pzK58fPLGHnFHKbfJ56i6AeZRdo1z1NitULd7FC2tahwmzdYpUc",
  "key23": "5wU3DX2QpfX6wMGkTFdaPkn11uuqh6hmasGhzhC9y5bm647nxcFeobxiCmJ1yjzEtmworMo6Bs4ZvWUxoNTEE3Ku",
  "key24": "nNfNZuALQov7vzkPCKqzDh7p9rEHEybbVuzgKrKdSXUs4Co2U7mKzyeNCaYtXNkfuhW5yn2f7PoVta4aYwTWYVo",
  "key25": "5eW1xyZUhahAZiGUpYm2o8njnqrEgEvfjRCKaZL4nLMjEYVyoRebxEb6w94tKMTG6eeRr759i9d3LZoyrvSsMzK9",
  "key26": "zCWU25f7wrjBGperK1JdrqySVDmg2GhxSTFEB3zivn3xV9HfqZ4uH6HAd4DeQguCuzo3z7HbmCrwuCPWY8ACEwd",
  "key27": "2JCDvNPWndzi4AMoe5E4tLFhZzR16S5M9XXsNPEqEfpBFL7pSY1YNAfRpyAerKtfwCFBuHPgCjB6Sw6QNbRJy7a8",
  "key28": "2BpCk4u5q3sKJvXXsS4esuRbZRkfX6ZJpWco9jndPMgdz7Cw7trK5Nax4SPPsydGaffsAnZwhbHBSxQK15KeA2U4",
  "key29": "5H6cxfFU6igY6w6xmamcaTnApKpQgmXTUD1XQZPwV5CuxjQjrGWobE6PbF16MEt5uUGN883FjuJc3H5pTjdowq62",
  "key30": "4R22GLUJ7Kpsiipk5A2Y3Bym2onYbD3XNYuV54JMf1VdLH2svaZbPUR1nJiisFMmexWXEJ7BHrHVjJHvJAkJjC5E",
  "key31": "4wzcUarZc2AhkT8WsbjTPEoov3249FuD2VNkSSQkU64AaKdo84hLGZWUo7ET8D1nEXPECaUQwJz4yqouKkPskKyi",
  "key32": "3sSZrkYZXVZKuvUc66kn33hj5AzGoH99T2Z3LFRKXRBLQcgiGvKY19yURwNmg3P3peCXb1LGMA9RE3ZQP3onRzzP"
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
