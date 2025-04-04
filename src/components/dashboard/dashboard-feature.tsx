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
    "5sTy1dkTVDo3pjvrK21mhf1UknWAWgjHPEnuBKmcQovdKzJLSBd2BmcPtqpFSf2rKhm39hzdgxzPX5CAURspqBSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66U1dKFGQGUhRFzCyTVEPjZgJyARgVDFT5hRG3vJLavigskmnEdyHj6WhGwwBP7Unwhw2qYCm2yVVqAMP8rTfvsY",
  "key1": "rYryAU6ktJjpSNAig8sqKYceMFA6b37VGrmLerxmxKNVtAkVdoTT7uoN5b8WaXafPPg84pRDmE8km2RN9Qh2Kdv",
  "key2": "SpKd7eot2SgrPaPTd19Dmfx2mxqhxZtv3xZ34fXNgrCPxiK75p8So1jX5pLisAvFvdbw2ShmmAsKRmhjDftoXGh",
  "key3": "3ajzB8fyv8ppBcaLj5BvbnWZZxYZTUVVQSWj2yLCMxsDihoGorK4RwwfYK7ZdNWBCEyNYonj5AYLudLZgbbPK9pq",
  "key4": "2mivG9VovniyWBxCpTCeBUwjGE66Cq6RRWaMoEbSVfikgpyayPN7Upd6NgUcQvPrPd6iGAEgtBne3ntRbZN6LPuS",
  "key5": "4Mpu2niKKHuNc8Z1B3KdBibM7wvNauk2HomfoXvBTnBWzrEL77j1qgGGSzHDYKtHnPMpyRxkCD9maHsm5gnHjS4A",
  "key6": "4D4bLQ61gRkE4q8D1nhi2K5qR1RS6WbegqMRdYNoVKP7jVFSNcuoAwqurMnSApNKqc6w5hWGDoCyRp9kigydiSfw",
  "key7": "5mdCT9b1f6UKrJbnUz7z51WwPSsTApTa9KT6LWQoAVi84F11NyMRMikSnZXmuyCoYTeKCnkDBm3otNNB331xPGVX",
  "key8": "3zDLEyyyoymsb5rfzGUJV1mSzspRikKLgXv1SuJq6WAwC42rKmnu4Qch9pRNgQWKCY2K4vUsSXCyVS4VAkqY9wRM",
  "key9": "YSQUNNZeZ878wLby7emEQYRgXZ7cvNU8wgVpNJDrA78JfMok28YVt4St9TH31YhKp9oLUKvvLUZeu9q3gEGrRbh",
  "key10": "3Us33eL2djp7vtMw6CQLCtuZAD7WDYqgMjKxmeDJUgZx3EJtGFmTGWJufLgeFxen7QKFA7g4Gptq5Yy68Es1MY5D",
  "key11": "EczKvV7No5qQ1rEzUp2PMTgnyZK9jG6pdwYE3EWf8Z9h6GoHsgRGArvm1kYz7wEVDhN26MbbQvmsTytLDRSwuSD",
  "key12": "4AAK3kabibGqevP27Ms7HJ2wwguH3BPMmEVz4hfFk2WHPh744Qjr9BNCE6RweUZsDburyaUtXDrC6dxsBaM3moqM",
  "key13": "3gBR4sKf4UwJx3GUF8xViwvGFLV6MFSEoiNaWSCDzZYwx8WnFfWw1CVGDNSNDBGa2Zqkmiieo58iTLS1o49HtPYs",
  "key14": "2HNmmLZDA6DWGknVACtwWenCav2ds5Q39HSR3rG3cRygzL6EgyUt461JEeXzSKorgaPVoGBVPBrm8joJ9kQmAfgY",
  "key15": "4eoSLA7mFaQwCmd4yumuEUHwsqQZk6keeEeMk22zLfG1GgwG4xsje8aJM5k7Kj7Yr1NTDkeDxgKRGGsp869Cq5hd",
  "key16": "4u4DhAQFNs2a49nKWTZCExBx4MD4ASudC966oaUyYfNy1MpieagmWejXP2sVBANX919FhLiZrS6w2KfnT6LoeFFG",
  "key17": "2p8EVsS8dqM5qKsdyXnN6Mq8zxHqLAJaMki5MYbrgSsegoizZrEbrbRxyyMyaqRnXJ5oVpwcckJu2ewz5dsjnS4j",
  "key18": "5TwRL2RvRNwaFFMfYtxYEzhX8AcD9g8Nx8U9wd5p9nNHKo8uYrD2mYpiiPnYTPtNdP9LG7WqHMabYpWDXshJTFxY",
  "key19": "2fdLjQw4mLGWTgZxQxoS17kgcjkp6CHY88nk1ex2sB5GhL5FJ9hkGbrF1pkoc21pd7BTJJbxpTVStzBFbcxjRdcp",
  "key20": "3oeioksBWK5U6ffD4SiaBFicBpsXDJXsgR9X3ETniVRM2B5iHVKUHjAxFSuPJ5sRpFT5xrgUu5tnKvX8cESnHVLh",
  "key21": "3sUK7ChfvkcX1XMdyiAoa3NqSwzEn1shLqkNWUf5741AeCZmt2vMttvw9pgscpHJWKnjEeMbs3DkZPBkV1Kvm2q5",
  "key22": "4tMVbN75ew72WRiCpmpxdPCDKAy4cnyXJWPwXFiBxegMbfk5k1HMMKEL8ie9qjmX7PbhTjUcxhfYtgAC6DQ1g46p",
  "key23": "5tq6Av7dJdrcD5PxzAmCkELi6q6zcrmwwjSBfNgVbX5iFe9SzF4uEMJ4BE9dH2jAZRDaDy3HS2VWqaJ7uzW6aqw6",
  "key24": "4qaKtKkzmhFcXvsiLup252ZjgNEYZrYQsTgtZVUwPqtmxRPr6ch7adb7Z25v6Yaft9vHwUSQFmWm87ngghhiFqy4",
  "key25": "2mGA64vDxgDs7mFJTAVne7ogbMXd1XbG9PKKNmmcNdAyR4AXjK1ndVD9zvCYxDkeAZMFUhazw2Js8q3znxWnJZR5",
  "key26": "332VQFDEy9nSuzzymzLoLnZ6v5tbW565pkwZAmbJ8CML1bfdfxT9oVpojhnFxahQfnAoZjntAqGKazZzXHDfqXwL",
  "key27": "4wisFLxArC5NeaS6gkT8rBUE5CB3eAQM473yCG4vCNYBEk1ovvoExfnT2BVegfCSbK89A6nMz82vHFkaUETHS1mQ",
  "key28": "vgpekDLxEdL82ZenbRYMRofBnZUZHQ7Mb4Xgyo37T9uxu8LzAH5MFcSwZj18esDTaBy2nJ36QCuWgeHB3FXnQ7C",
  "key29": "Tjh9okz627WCaN937FAwNAQ8ehrpzpNeSAYzub2zTEewdbyrGUJg2PdmSzAuKiRLhQxFaDBtUGkK81CtZZDAvzc",
  "key30": "53RCgQsPR4zaRPk6o45VFeDo2ZBYyRwLqtrHMDH8Mf79YmwfdkeEygTqSXtGxYSqrUsZPH7nvxLqQifSH9f7gG3x",
  "key31": "4ngJukRU9dWVrHHDu6GfptvF41rtxetoSmxkDgEdGdqmz7udGHLk4te2kqr6juKdpKLBoQjWEApXx8LcHD92c8AM",
  "key32": "3r8DzvaZu7roH1K5WaCkzN7tzWnYUuo5hkFKN2Epyhjy4jd6LV5uHaoBZK5LTTE9xsfk2Vc3Aqb6f9ftKhahALW6",
  "key33": "3ZExaq5T5mxAdRhRCknarig6XBPeMRK3zLXYJEu7Z9VQ1Ge7B5cAsH41N9L1UWb2af3XkijhG1WLeBEAuGBAfA1L",
  "key34": "5jVnxgTKbTsSgg72HFdWP71FvrLhamgzRLuMormEhMJrnLipA6gkLSKU84wGhG9Tf8nvQoenziHBDQoRGfXv3AMj",
  "key35": "2S2HeJq5rAPnfGUHHmzQC1AUkgqMFr8twpJQZRJST9jmZkptdLmn1bctWVPND3zHF3dBWv5YMcRnHeZaqAVYjTg1",
  "key36": "568PqDNzZdGkK5uopMy5oRc11qLFJW3Y5zJSLQxG3v6MeyaQS2Yw1XCxRK6txLj1GXGexK7hkyH2YKsgg22ezrXc",
  "key37": "2NShpKNJSysMRWjh5rCUM61EfXsMvPU8dS8vQFCAhBuhwU9dfqKpAZojggmAVJn1ExRJy84Tt9tjmU1FdExm2xR8",
  "key38": "3k4tB6oJP5NbEC1DMTvKngSZhT5UDJQ2KTWJUygBduKK1GwsM9Wtgn5NXp64AAs4Pgapzc6VD6His8XGHEoue4Zr"
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
