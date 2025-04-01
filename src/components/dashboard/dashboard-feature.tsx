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
    "TwW7BDqkZszgNUNBHyDD7FF1LW2drx7nvPSWjN8ibVdHkwb3ZgBELUN23rHSTVLqDuSTXVTe3bwHkcVrrfkii6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGxPCMefmJRAUabx7GNx2LV39gYR8EEEHuaowDYj7qYU1s6SpEdJa3Th8MSu674PbPWxJYw1p8FwWWPYPx82Pzw",
  "key1": "37wavWUYssf2immJ2CAzKi3pqPCqVg5TCrEz1KoCJnWMYVjgcNsWnhsQETmMsvniAXQRhB7iWTSGq6g8PwjB4brJ",
  "key2": "671bUbbUQoawrCBUcCUVqNtbN9Hvz62nZdqVMMbUztmc92WygVQCCEtUcebkEgMzZopdGUiA8ebWBg2VH9EECZMY",
  "key3": "3s26tMrsWhte89C32CByeN43kjSMgYFi2LGdYpy4q9JT8g2ofyGPeAuYH45gKuUuWqjeYjuB8GaGpTfztM7QFgmM",
  "key4": "62Qtav34qEAGWCFgnrgQXCLuQzsUfjEihGhLEtVeKAAWg6p9aJGtMbs4Zy3iubHeGN7HXLTzLudiwBqjTnGpZfjR",
  "key5": "4RHKHNx8D14qmRSV2VzqePhPdMQi32rkVNnpo55s2ptUWE632HhA8stSMuZQ3Q2P8tQ5Dzxe62iS2sewPvG16UVF",
  "key6": "3DF1m3HZLFNVW3ehnxzheNsBYBEAnZNvfv3rYjPxjVrf1J2Q7LjfyoPUWxJnFqKJYZQaVoViWcg3YMqj2zuZD1fo",
  "key7": "21Lica3U4ykRkBusPGwmGcvmAm4YThWAKBx2j7n8gjsmaEzEfKpXDiLofutroKdNobhLnPzCp6gTmK2939xxEpUa",
  "key8": "BnciX4RYYasjkTcv9cuFNvNocKg4b5nV51TDch96MJeZaQnRYUC9p7piouNzqQPyPeoEPLKZyVWsQnHoDhaFr6v",
  "key9": "5nghbH1sV7JYrDsnkWsroWcqzkqvjczs5dRc3267fhFeTfKNwcNNmQb9pcafPdbhcReZg2Hk5DTEbKsongpr4bvW",
  "key10": "3Vmx7gLTzGUHsWAXRaPxQ2k4xa5rgyeMHyEwuJUwtbCJHdC6gv4fiZ6QLDmRqsm956E9VQwLq4AJUWVxQuk14LQT",
  "key11": "3gTCZTTS8EocdNJSXFSu6enezqmzKoaVD4T3t4QorWRYLF6vs8ErwAKBuRACngzsHdDaqkFaMLtyB41PvpMMRL1U",
  "key12": "5oASdkiQUCsHdMex49PYqRmBgKpiErrTz5qzSGb93WXjpNDGA79HXviCRRLthQgEzFBXKYG1zmzBC4aaZ1BcotwX",
  "key13": "2X9YbSYWosaPhkpb7hf1WfAGBgKS5LS88sHXWhJgnCW5hAsnnsxBev18iw4d1fojVAqdEVAZ23A1e1qrkVx3BPmj",
  "key14": "Xmn63XED5w8eoWYh4yQ9UVagspoSYo2aXFTYkcfSWh6E2SB4sVfZSTgreyN5DgyT49ctpca6ZwRWsaeSNkKgNZ1",
  "key15": "4ipbocNzRryyaKiz7W5cRCn5D4a81rpC4fdHt7KgoC7gWW6YXBCh8bCPuyR9okpSBCb2MvJWfwRWBzJh9irh7Pa3",
  "key16": "2Gdewq3ZVcSYUooVhPMvAEC6rhJ73bBhnm8G9M8TiEwagow9f4n7iCihNd9Lwdf9WwFfCRkgpYJnb2v8sEd3KUdX",
  "key17": "4svqhSquiKF5CrvNZPaNHihbkFzfX6aedgTnhC2ViK5WUxaWAqY1i18PXBTR5Mj4VPKPZad9FZB6X5HwBo977Z7L",
  "key18": "3JVwJd5ZPk4nuW5LdgqyTtVCpc2edZELvQf9WjY9eo5JPq9AC4XL8aQugnvxGDpBHW5w5K7ySNtapWpmFsCoiAsZ",
  "key19": "3Zr2Mice2SukQEjj6K9Ez4oXB7B3MFAhWgYxVnqwdGUuBRbsSNfDfrVSVwoFqiVhsaUD7rkmkbMYw9jy53iASkB3",
  "key20": "2CWXsxqPeuLabhZd1L2sASaBDMiksdAeurjZXs7jaJaPQ2zULRE1w6EW8ZhXptUp2N1hf3Rv2sWs6ZGX59ZQ6ivp",
  "key21": "35duUTgKNTJCk4J8uNp9T9pydTHLR922nRks6Xmvw1YY57kmvEAxrr5rPQPrxCfAK2xV53zunsmVuYVWtEWJDsNv",
  "key22": "521Da5drkDytC7XoZFeWj9Rh3Uxva9G1drPwtDywBDGCgVGof6xef8Xz2gzXKTH4UQUeLPHCp6SdveeDqmyFaCwn",
  "key23": "27SN5Td4VGWJh2SFR7PYu6UqPCyVfUEwV6xxbdgAkF8swFzjgATtFT7nTaNkgHJrF1CiPbp1SczYMEngwJ2rmZTh",
  "key24": "vYGFV4NiV9xvM14nHcX7BPJdHDsgujc3YV8MjLm8q67xXLueTT5K1gYJbdAd6ov384Rk1hKY6tY9Bfr37QLcLiv",
  "key25": "5GokHq8BZZebJsRaGGkPHqA97Uo5C4BNgvxpXNFQfXVeLHaRKm2wA4Spjas3GRXE67uoA1iudhDVYavaiRoPv3po",
  "key26": "3c6y5a78Bahx9nLEjLE4CieX6SVB47F4T8aRZK92NftRDTBVPn5avmvqnKULyYV7uBtowjPwbK5Ui3agZ6icvkAG",
  "key27": "5WbhyVzg7CdtwLdRJyWncNMSp8sTjTMc5zHfEPLRSm94YjGRf6eXurXykvx3VKJkDojypaK6stsiCoRRi3rzgEfw",
  "key28": "sAs8PR2mTXvpgLcTSShqHC4R9v29FkGHzygFjkR9QqZ7ZJYJbMH4YsccSYwnmh4nUBKSTrhL6pQ4uyJaquBazGf",
  "key29": "3Lbk3XoDxuPDNwq96axfAxkU1c66z98NxqRtxoMY79yi4Xk6Aukj2N6iwCshimDQwJok7CzgeDffhY3inuESYXTi",
  "key30": "5ZXy6mQksJoSGt81bPMnKaA3D6wxaMhiRJDxJtQZstpM5ZKQ8RZAz6c166NMy33YBJwczEU2CzRvZ6xt2NkmuyoZ",
  "key31": "38A9KrJXVefsPNm9kohUXJBmfLuzcCuDWwoZRFnTuDw7sQYKjsa4aYwnqoNv898CMTSqgc49m8J4kFoUEvN9hbDv",
  "key32": "2pGer3jdvpezmUZaPchUdDxZ7FyE1oGnB3DuAXnioqCEw2ZnfyECnT9oRyCLHAV7UTLbJqhbtBfhVJAMKWguSYmZ",
  "key33": "4baFHNUXvvDHcUb7ukuLGWKJi16ep6RTyircciHras9ZRt46RjbX5gNQ77KEibJs98Sr5XTkbm9YBnCwEsSHvffB",
  "key34": "o6GyayCBed7VxhnY7pVDRJnGBt3KDsmthz2TZXQDkPUG2QnexADJyL1ynTYXuhY46HjaLhD51zgGj6e8ungjvWQ",
  "key35": "3y4wCKaBFQPeDZxrbABnstjWK2FmtJhzUfsGo4XDTgvmZPxw11eFugMLNmbZ4bnuQWQX2kVvCnjaWnzYmiQ57jtk"
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
