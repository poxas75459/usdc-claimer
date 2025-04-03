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
    "5GPfY4QKV323KFDZ1gKAKNtyCpJhNDMXT7r2rAsfQd5h842zJPqo2zLKVPAFLd8gC12wN3YNvSTfbYLhakGrKAjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFa5B3eFyRwzBsp99YaAsWwYoLGGAUuWLk1btrC6ki2AVHULfaRDspqsntBdhdXVHXmtqt4NRP3Qrm72WtUeZje",
  "key1": "2LPDqLQdwMAWwoYFJrfPJBvtUmGwdeBrTSdtwdKs1N8yDWanBuU6a2Y7rXqyRTNCmrRkDcGpztzgsiFAdxRwyWQo",
  "key2": "4swRDmLugHEc2jvMzXii2eFQG92bDCtgsKXBX6bPzkxKxLg2GiroL5x49TreDvyzmhyu8jKtDJaUwFT1Hm63qbjG",
  "key3": "4cCQEtYiXDMwC64nwkzBCcMAzqpCTnLFtMz4t3mySoF3DgXXLvXBQUnXsfc9zLzZJ2PJViVb4uWdLNkb4jLxi5tk",
  "key4": "2dW5TJbA1nuuDFfDCfo67QidBthWjaqWtN9GqwFFrrpvVSZ1CWgLtwdCtrFJUe78FNe7tfCvztbkkNZZuKXJGUPN",
  "key5": "2d1KAonsBvX2rgCZLc5rAFjMvN9GcQvsfEio7UJAFSErh6RN7UvnT4UjE7UnfFXAAbFjsGeYBDjypLSnmhTri9Bz",
  "key6": "2Zk6T5k6qi5SwKX3Dwvf5f7YY9BC9bxJty6Lr75Zi8LmJQW27ommBRdhzLEa9h1MgosxfEXXLn62hpkkXMeyfHE2",
  "key7": "3wTJrGmz9JuKQU6eH9zvgis4GUCBAKNYnqLMo3CCRwUvyRRaP9bG5KkX3BPEAkigXQZp3Uv9MdBgLSv3Jx7Dtgpz",
  "key8": "2WR8DYJmK7wyLrKeyRuUFkDFgqc2LwtqrdnVdDZWRMLhj8gvcvnAXWHowWiU42eiPYU2h3YQ4NxPTCCacx3vGYwM",
  "key9": "3yH4K91yFDkNvBMh5XcY7QkYRwRQyUrscjigaQkaESCGrUGaA7E9YWCfamF9F2oUTWjMNmJzxegUY1WFxHjqhpTR",
  "key10": "h17pag2KbC2PLnCtTizdoaeynWcDSyMzBKy9kQVYNVLmtWPqovqYJboovWZQrEVs857gWSoW5ueLqAu9bbt7AKC",
  "key11": "2dEyajtotdKxi4xsDGbvAPHRB5eMnYErcVjYJTM6JWQyWYiz6Dj4efgx3bVzF3JLFmTHid53ciNQK4s9iZ7BBR9R",
  "key12": "33HeCSBPiyRMTeXfKS5UUd55cnqDXohHP5zNrNMDVwurf2HCff9DgsfXrj6TZ39sRsFjU19RpE5XfYdW5Lnorx1W",
  "key13": "2NrH9ydjSuznjp1taMBWQTJJD62QMh6Cf6mZWMixZrrhfmy1LmqS62HtQHWbHFTgWeUtQsa2LBpdATSN24wCLPfK",
  "key14": "2HVjcv6VXauceJszr8iKC1mp23mjkkQGpUkD93PPdLTeHX5WF5yaKGQxpJwYvp2GFa1YY2iumZZy2CGHERP931A9",
  "key15": "46vsE4qdtdKQdZsdLx7aNZZP35zejZF1dvQV5xzaG8EwEYrpxiHofgPY27KEWZNrrJyEyhoaPFkVoubcD8MgKFza",
  "key16": "3dALoue4Wx5LhrtZxpeaPLGXBy97mk8SpSjKLdKdyP3awLUDCj3w5gf5UyofqjP98e9rD4FLv2wT3Hj33M6HUYE9",
  "key17": "2wjcSW33CSGcg6N7q44mtkYUwdVdPyocV5mLuZ69zQAmr3BPWinQ1Qczdf9XMzwLhaLarDG3LnV65S4QrwConfHz",
  "key18": "qSn22UVzyzgRrMLj2j78wJgGtB6UNjjJwzJdXtHMkpmp8f2K85bhcCBWQWkP79sEsfWD51LJA7V6Xya2owwkvYg",
  "key19": "3io5n483x3Kw4XNoVmnBWjGZFZQu2Q6nzueXvnx8uyaFuqTj15dG4xXXnz1VHFSyKiaqW25KYHEowTmf8AqcBxbX",
  "key20": "36wtySV8bUWwhpY11o1zYnm4hERdvR77CcXL8xrFt7PAzBkUSLf8mpcKLfeUatsR1sq5rbYxAoPBxQ7sJBq6zi93",
  "key21": "3Nhshp4NkfjRAnke4zubq8GVjNQuJpiSZK96Wi9jM6seuokKtNkahCeXQRzRPTSvYcpS4HUgM97rs4mSt8GJ2faW",
  "key22": "3wCM61wYF4UC4pzL8Lu1aKmnSe8hcpxeefYxj1NFgcwtPqK58Bn3e7rUe2TY4b9bVuMXgiBYKBcTM7qC2cdvTrdC",
  "key23": "UAg3a5FcRXYebQ2RhUF66mqSpyFzja2BNZAvDkxUBn4yub8A1x4RXAysHG5nU9YffnJFJAxqjCXmQMpzB4HE2L6",
  "key24": "QSMjLEtwmW5qwCRoKSQBV974sf9ryLmW1EDj18zcUcv84dqzvaAXg8aFavKq1UyWC8BAUimHVfbeneiE2iRZ9pz",
  "key25": "2VEEAshAPZDaTC1GqjBq4nsLFNsSBjdPTAyELNmXRBL7wsaqN2Aaa2qC2FNq956R5chzDmz235M8cQJ7wEFtrFir",
  "key26": "2CmFFn8omDRYmHRsATHhBRqGtJv3Z47iXyxEHbppQ4Xg5rkj63ZGx8iaQm4VfxUL6iXWGRTwbcrWtvTX68YYUSGh",
  "key27": "v6tZJAE8AbGF4rdtZvXrrME39WR8BMpH6m98zwkHb7U4W4fkDsSnoZ3swEmfyrMTg6uiocT76RSztB2VmiAQoMG",
  "key28": "2jstaXM9xathXXqqxkfSftnVbgq9dXyG57nEvnqcKucVdwZDM7fDwQSoTQY1eaHzdde12ghPJku3v8zzxzxxbk35",
  "key29": "35UHqsT75rBnashECAcwZAPsNuANmZHUyP1V6JXD48KH88Ri7m2R9q9PskDNnt1iTnxpWXMco1MyYPU6QX5w1u2h",
  "key30": "3pwpRviUk1RULvpBSfHdccQhnXQj5nznhmFdCUyCbWsMtFw99uVLr2ccLKfk7vvaQu15qw1XM5vZmL6SdGhtSTze",
  "key31": "29QvEsVXAS5jUNWzukWBoKM1vFw3hvMhZVwEs3yVwMFMMy9BdC8gggjR1zLps68DdZ1C28b8qxcVTnhEe14XS8ro",
  "key32": "2KTWABJZ1Sa1XSf9uSKcenK2hGtruTdPP49FTt7zxZAYyc2JhgMhZEgoSSKiXGReiLSatXumRS78gzYkeWSVPZ1z",
  "key33": "oy5pBCtGmYnqEJGPfR2BbABVKGnGe5AiKVuAjsyWPCnzM4aAsKtnKsDuNDtYw9GVyKPKYNe6vpwTqEZXv8zr9pw",
  "key34": "5oxAfbnTYevi8ynPrW1CCZGkAMPobB6SkFkQF5uwDoKjcc39Sp4a6GyHU1fBoV6XGaUiNpXEL7m44evhygEgiki1",
  "key35": "5W6XpJRbuLSAUVgk48Y67bNU3HHGpY4p1JbWjN74vJGWf2XHxsbdhPihC9duv3PDmBZW7k4N3UN1uY7wB7WrsqD2",
  "key36": "583GsxD2thLsXqAtzakNWoc1x5cEPfkqLT1wUq58FhHbBMNA4uMt5UB4w9AsTFuymXrGztvav3oxSJwy8bQCEPcp",
  "key37": "5HARGrhoGK3U1ryUMHoKewfbFqUGV7AnYH5kWYNdGmadoRbxGYvmTKDNhZHsVApDgoSMGzAwgvDmifBjGvJvMdDW",
  "key38": "YjMsCoRjrwq35TByDh1P8LZJfaJcxsBeX1hb89T94AwfWvFneUVUZoLPvbNYr7Mfbfv8Wgngrqt64XNfbwzN6jC",
  "key39": "3ejA18Nfkji4R785REwKcFm69FYHW8aQZeeA5abxXa4gw717vha6RQqd4mRDTRdpET8RZdEtXeN8L5fcizSuwv3L",
  "key40": "3Z6vsGQY3uLcrSZLZjsYx4JQyhbAZPGWiBsUujHouzbCG3JPqTy63M3J3Xe1FCgA9ybstuWdbwgSLG2iXKEcLUEi",
  "key41": "4sehtbutVdsrzY5uHBcSqzy52pEJvwYzmWLJgYEZxBWpKQzyRToF293EwsnJyCLp72u72fbV1ZKjvpfveed7Nqxk",
  "key42": "DLqERKcMn8LJKT8n2hLuDKerpbY9y2LdqriCFwo3GuLVLysTu14X6bDgJ9S1AsBsh3Di577f91Zsjfw8mVL5D9D",
  "key43": "4z8XsB4spKSTePn8zaKQekex5GHHDa5ApR6Fmhyx3q5h7WZtyPRARzcF6HVG5og3RcyoJ38fARbib2TC98xgYPb",
  "key44": "5Lsp87eaChANnUYATmvpaEWm3B68RKYA4GZNaYLX8MbL1J3xyzAm9oVA3GMY7TaxkvPXBkcn4N3xxPAGU6SDzeVp",
  "key45": "4SKy1kGeQcetYpfyA4gBFth8K1ewD8KtbsuY7WYjnBcxoQPxvoKc359gi92mctqUuTJKxi3cnQH9D8B2ZrzGETbo"
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
