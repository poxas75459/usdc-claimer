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
    "3mD2sE5JdbXwUQSBiAqR4hQVC5NJH7ch6M3Cxia1kRkJK2dQLrG4n2XHoVsfwBHEzFqaozjuo4t8F1Ld4uiyR2qA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Z1GWWmY9jazrFLa4csWVyrpYdn6MG29d5LqtvNbqaREAbzAYWdzxs97NbbMNHKyy55pSWFS1ecMVSxSq8iA2SB",
  "key1": "3gb1eLk5Z5pfvS9Wm9b4Pj55GCBxkhGQYj153cGm4Q6Kc473ZV94gBJZUFWM5ZLQioYPE4hPJ98wMBRcixp6KCyr",
  "key2": "2gJy2RfUyWJ4Rb8Wg2jxp9xSCyiviZLnSRArdNNQyi3RRMphBvcL2bs6kVVz7isjFtm3fgNvWAkjcpT1NCurSqXf",
  "key3": "44zeHXtkNXjZjjGDrrxSJyLLPeqnNLyQkphvAmPeFWARd9mPLdC28ayVbUeaeCzVyHSiqyWxKnY1J7KvLD3Bi7JY",
  "key4": "3XSDdhfVUvttwxm6BhrUaw2uQm2WcYYQuxXHf5xT34Ep3wgxehepdVjC1wT48bA6vTttwues3KsyoKVVaTzrD8mt",
  "key5": "2gW7y5tUmv9V4HyQ9Nvc5hfHepHkDBBbtiyhVeXkX35Lyxcug55pME7geyqQVgMjG4brk9HyckwYK852G3H5zEUT",
  "key6": "2kig3ScRfoCq25prRUdhKsV6Fu1utdUSXiyuASbQb91CgdMaiWe3Hup7d1UMpccbyU4RNqZQZyqf2DmrMpbSf6uA",
  "key7": "5N7kvvT2Z5W2dFvSBTCr5VvxmdTr5FEQnCT34Rr9MTNgf3sdstYHyZZkVZC2bGtzww3jYWAG33ZBZFneBFMAqZGp",
  "key8": "T95L1k171R1xtQJz4KTPj1VakjDzp3PSF2cBT9EFpM2XD16pe218XXB3RoJhKZLN16NyH5qWVWkKYimgg6TGjRX",
  "key9": "5rSqTXKdBEJoXxZ58WWrP7ZfSoQijok1SbVAydB7BzumeuCkB6vEk3UxroSrfnSvsTds2dXUjy21HzJ2MBNSTy3a",
  "key10": "5Mm9yj56etKLtUSD1UAkprUgoBEeePeLhokJhxtNKkevsYZYH99Vh4pbYkfZUZe8CezjpMsM1DMZjCh3cR5Z91tF",
  "key11": "5a2fyzG493pNVvQg91Vsu5cEfJu9VxkcMGGvz8RgDHwSVHsXk3VTPzdBqNMy33ChVZJRSEfbHpYVJA4CN2CkRWNk",
  "key12": "3JqjKjBcDpjBUtsm5DPbsHoexvogzcQsVQJXUHUV2PcoD9MZBVj11zx9WXpK83siv4gNysVqSXx2iup1nZ9ambdL",
  "key13": "2pVcsP4rDGxwfEvjuWt6BaUbiMwce8DTTpHD7EZa6vkeo91oroUH7JpjTdyF4S2sxAaVGNsT64hEZNZespRS6wxW",
  "key14": "2oy1Yr6pASpx4fwqX5qj4ccPza2n8bjEfScRffP4BdWdtyX6BrkeebRcq4wcMgYzjQHcewmGzUTNgJgEn2jipCTM",
  "key15": "23jH6FXjKqVRQ3dxhYj35EQD4oLyHo76Rz9EJfGdtpszjA5NARxKjdknDmtGxtee1SCsm38yH5fjDMf7ZcNyziiU",
  "key16": "5gS4coa2BPmVWAwDcByYGJRLtTyuxgjFbB6fRzYvc7zoeWZ5kXHh9UGvNGEJTCA2F7dTJSKvmsQkXrZZQtg3U9q6",
  "key17": "381eHySd32HhGoMXA8D1hB9C4RJPFpBaJ1RSnvdTWwV3yBjWUtnMS3i5EQoYj9YFEf3GXbSucohJXj6Eiz3mJ1My",
  "key18": "5QH4esHGN6KaRwCkKHRC5EgzZEQuWDvYBCRw2Z8azBqL1oqZMrzN5vPLXQWKoH3fs8vu57SUmm9991AdhfCGihLa",
  "key19": "2KmWtQ61Ao8LuWXWiDA8wLKZNrVYu5Cu9nsrQEtB192ZwD2FemFQ9E1tPiSErKeyeGSaeCgCkBeFweE6MedUuKUP",
  "key20": "3F4d9B8tJ4Tu2x2PH7sZuLKpqHskMNaucyqizE3BY5VfdoAePaTb9B9AMUYS6xc783ZfhGdKnQg1ejz2T3ayGgtU",
  "key21": "4w9FeJsaVEvuvYGeRgXCJwWJvtxfdb6YanyKH51QQCs4qLuvzezM545kVuZPCYX5hfgArxL5yUD341cVpHdPYVZp",
  "key22": "272k4bRZieardg61rouMvkYpNXoGq5uuSCHVRrF7CSWscVZ1zikY2B5oPy2VtVubymTN4ViEyuuNMEpMnKrseURb",
  "key23": "45Ed4hDDzBzJjrDUsGfSf6PXNVBxCfSb928g4TETTTEWWKx2v4aZCV6fv3fxft1P8tWdZdsvdZqcsT7MiNPypf2i",
  "key24": "3aqwJgEqBUtNLgbbXQNH6xmdvSZngWGqHdSn7vQA1s9K2WGLAx4GsnPv9N4U9KPEuYVGWQC7VTQS4ez5TYWc18Su",
  "key25": "5X8zc8kkDHFs3TbbyT16LdpfMjuyen8f6zbv6nAZNQg8vdARS9n5MikAcJQHZcWRxoP3ovdoT1RPjiCFSQovHavM",
  "key26": "3bxUx3qhbvnvgW2ToywnC3Vnn9rNmtX2TYpyxBF9NVHq5drNvTApWoS78RKwzGK3NxiSKyjQ8CbdNEnaXSAXqGNc",
  "key27": "4MooJ46FFi8bZnabn8iBxqEApPM3yQHBK4Ms38R8LjeZzdXvpGEWRQuL9q3K7oNsfHgBtBcWMV62wPc1kddPRKLB",
  "key28": "4tPEFjLQzpqTNMMWovynXQhb4mRH5XYQkaovvJoXvC2XpqgrNC3fmfnaWvcvHm43yRBhwfg7RA6geB3nDubzZ1rt",
  "key29": "3LGqhKRNkhw9PYDs62Jf8514Vs37cz3Mm2DSLKAsMqH8ybh9zV7GyQgwCHWPWg8dEPBGTyn7n75YgbNmeFhXtEro",
  "key30": "BHftnab7ZE87AoTZuKsQGZNiZAk9td7mL3CaM6wK1MTkbTKWuVNFEt6zNVBwT68yQoiEzfnwcucBcm2W5Uo5xvt",
  "key31": "uNziEfYUUdzQWC91tSP48d7fydQaKnAm8u23LegR3tPCFS7BbJyj8m8XzWwRKMxckX7L7JSXmQCW8TK48P2eERq",
  "key32": "2pGrjhe9CXwGKBE91bn7qds9bzt4FGPfCXNHLUSmWyFFmJesBFwowB2j5viuxfsxzweoiLjDAG14zWRwN4AceeBW",
  "key33": "3fRw5fWvbJpk3zfuLaX2NtG74tF29d9qowdZ5A8deGFcH8na1jfcuJpFqt4var3yixfgiSsh6KSLjef8p4W1xyi3"
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
