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
    "2SnTNsiQ9o86batXb56pcp9B3SqVN6VbJ43auDEgp3oogF62KSL4so15WzBW7KE3mtsKx8wwHBJgDSoebTBoTiyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efDzAAw7cxR1gMKznTHsJR1gvqE9sH6Bmsfee1SkBtwUyJ9Mv1mxpfAVNjfWhHtrFJpPrjPiyk1iQ9ATGK5YpYw",
  "key1": "5jYqBkggAL9KwG4hTbxxfydq5yCg6d6DHx4LYm4wzRfoEGbuKCLxkAvuHBGkicYZ4SCgabfZko4zKsCqEQ7kBd6D",
  "key2": "63UkcZjFtCnUHd18wf8LWg45AdFAeSCrA5p7AGjhzuksx1ZbjXcZJd3J9TeF8Zv2TVgdLJbXoM8uWVhYVedzmNHA",
  "key3": "2Jv4JUb1FS4qVUFVSoBsgZ7RwbdTbyidwRh3718MkSJHB4GTatZomtoGDwu7jiHLR2D64J5dBR3Gz7SY5MwxScAv",
  "key4": "65XjJVjqNsTDVhC46g3buJCBwyHmTc7CHS92Dm7BhPcXospgeMZ4E7YZXYkgmKxw7mMwS3DMt3FR82BG9xr6Qv8H",
  "key5": "3exn7AFWmQEf8KGLz6BViDWTRnPZfWmA68DxD7bsCqDnbKXpDQuLYajT1SzxowF6QnkdmsZkgNScK28JZVm4NoQC",
  "key6": "64qgp144jZy9PyxFRvXKzpU53gHK1pdGfMqwQhMsfFFUtrfKvMarKRb8TEY7LL4EB1jCUzvFudyVsYKd84TzkfRr",
  "key7": "5UiBtprRdzwSWD7kSwtKkFhA163t7aRnoMwUKY9ZcEaNwVgSAdAyniF86ZCKqTLs53xc5zU5Fe6EaHrpVokQ8ZQQ",
  "key8": "vRD3pTtxpwN3ytbLo85QnipiogWkJxLzvpR3zrunR5UctjvgHw5hLdhfPrMKhcwkAyHR3tgcdurTPmDGe3oNUAU",
  "key9": "4X7BsCaNv3nLoko2ZbC7eQbP7rhqguznMqzHJfVn14wX2NBuk49YHcPKEYWJEV4qJbTxdJjBt4uUoX7D66f4dVmt",
  "key10": "5erwAw2fssc2YvnLMzS8wHw9n6j1NsXeqXUVxQbQL1B5GnWhCQFhRFR3Jwz5xv4iq9JPb3JG2d9p7QVCWDAY6XMt",
  "key11": "5EPpd8FNSbWSRFGpCpv1UTVPPp7nBBP8VUbzwmzcyNBZgYQtps67ijC7N5j4YL6oF9uBb1NeBHDSqkbc3MZ2HAZv",
  "key12": "2fDtWHH3fVVn6G2tKMXQCHQuSwzS8Hp3cYMoG66ToWY2Z1KWQwnJyaYnWMAxNooHrmVqAdJzkZw9Hm4v3sbYrKNU",
  "key13": "4198L34fGj2uGG5CQiWaN9ATXgCiMEx2qpN6YVTUA2ki3M1Pg1MZhUBhEeaBCjkMZYDAUyn9VR1Xo2RHrffpduDu",
  "key14": "2LRVpw5bXY1Pgu2FiasNVxDnfeeum61oTkfCTTbHLHHDFF9m2TCmQM1ycNg5jjf4rToPLjnRPZu2KveX1WYJA733",
  "key15": "2iMuvssf3VkHpTHpxR7uU1eV1u2L7eSR8NKmCzQdJAMFR4bKcAciXyeXrpRFTuenZV8wWMz1JYS8FVjRqsyo5MVz",
  "key16": "4xK4ch1akhe9QJj59woNsKJq9fmcerQSC8S5DDW4KmvwcGT52eAW28FGfUMDKrN1emy5fzqKhJvQbrbj74ACe7e9",
  "key17": "2BRvxy82WLe6izpgixpJTEy4JGryoowc65YbtCxax7qxg3uJyk2Lmi99phPodRdUMpPF1MxK56cxpaBj9HmpdqYX",
  "key18": "42qXFX1dFBZtD6xuG9kFiXH1y6gJcUSfTVFZK1fhd4t21RcLFoY39SH27L7ftc1j15ftMxENJwXzRrdWxqqtcH5z",
  "key19": "4NnzXrb24S18y1EDctV9vfFTEbowzDtZ1UFHc77UpLKerZoXU2Up4AaxydbcJZULqHHsTLhaV2ViDNy4tSKSceAF",
  "key20": "4KLCwJAsL5KbDxSzVe9pBSdmQvLRna1AbJJeGZcis646J9anLzNKZ1DC7DZzuMV8is8ywkYTSYWAmNMGLzkCiT48",
  "key21": "32hoc2Up7tQzFcwnx1A6b99J7JzRmGJKNhmeZmAURkrJTccE1aZmB6iuMBvbKz8D3mGYxEkB7k9YyzD3tGv4Fxe5",
  "key22": "4PmL2xkP8zsSxqXL2PKE5f17x6p4f9QWx5VhvXGA9D9R3HkuqBpHTmF9kucsJxZTZktWZCa8gZ43L4AyYEww1w8F",
  "key23": "3msK2o1VBNSsmsnzQisaeEtWE3fHaaNHKbbT2KpXLnSvCFQBqtptrYSCyeQPbHp1839csbMGkcJjq9FVffgz5YKj",
  "key24": "5hW3e7i2kWhrnNbVNVSxvgWPHXjzntZqntsHQJTSVzMTZJSUGSFe7rbw3vkDVnrFocDqZAbYFiQEp57WebqMpit3",
  "key25": "3kvXVMbHfz6F8s6NX4PR7zToGLF3M374y6KnUurBVQr2HJRYyVUGgyWk7euaJtRhCkLHsKdUWmCBcDzHpGoAcWr2",
  "key26": "3k4TGqbd9fbAoGJ9UFBcQxJapqeKb8yRbtQhTzioReefgqAhFYNojSgsDFdLhYbcu7cgz3SAGW93BnxDUPMrvbBJ",
  "key27": "3hLSevYPd4C3ocZdHtpXoR3tVURjD9Bbz6swqib3eT3o3dgXG9o8WxKMSBh2GfAdsHsBVfmbAcgi6ytH8W4777nv",
  "key28": "2BfeH8a3Yzmyb8kAYm48Gsi63aiTbeoZKBXuP2141jFEb5rw2CXzbDxkS7Vdyw1DgtV39FejiU2SStUWAjXCVcqk",
  "key29": "2VcHANccAv56HmwR8tAPH3SSfPE44934DQogm8iHXdgquu3SSRSHE72nEsJg6GkBFYeDjTrknvFwMdmRSJxw9KNV"
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
