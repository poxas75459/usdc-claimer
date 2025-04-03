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
    "5iC1TfcvxF9kTpUuLCC7YJ8hxuTLzVc4sp2GEj6V9V1WnR56GtN9tHyShAdvvtvpfgQ97k9bwaSbGmda6qbtJEJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhko2SqRXpx7yarXcVFuL2Wk4HZWEsbSj1wf1wZzPv8qPUA8o6UVbFKdebPqfW4ggo5u8cWFBjgz4nQXPhvwZpf",
  "key1": "4gDy61JZQ1ECBTMfGLSKGJbKCQtgkoFPr1nJ8hn2pUeAh9SRqbqXSGmtFywWS6kNBkJc99JDgPx54hEcJs4LAWXZ",
  "key2": "4VbzPX3QtThE7GQihAKYkmSwXri5NqFR3ShgBMS4NJ2ej71Ssdyt1ZpDs9FFyWD7hKE2PdKoTbvDmcFya429uo3k",
  "key3": "MyvV584RPzn9ZnCxNWVMrAEdUJ4xBbeWSNPsrSCCRLvYyCBKLwf2D8oiRvk5JX9u7dWoLCAQhMeoPikaVLdbzen",
  "key4": "5M7bcRkucWwJaDR6Se5o9KGtnTAJhh6mvrVLy614LiGnxYQsYtddgnmfEX8CdB7zqqTuMHy9V899jfE4kvSPyL7W",
  "key5": "4cus5M54RH2CQeR4JFxSWTvgPfh9dQ2NzKsjm962xiBxSxfpEjrBmNec1SNZ5qS5U5T8ybR1U92F49Gt5CFshbQz",
  "key6": "2EDV6pUgk1reWCe7KRK4KDL3RAsggHxaBuCHgQrsj62MkWinwgY61Ze5J98sePwb3jKfBDteTyBJBVuzWhVxP9R6",
  "key7": "3NmxehhqLLHYnuLhTVhrjCXu2JdhDCftHxpJufizsGJ7JKxaKG4DcM6ixdYDM2oPvimypjwyzd5szB72VA5wzjF7",
  "key8": "29CXGjBCfDyC858ipjxd8okvLSaJRG7645bHGWyPWrSoixMbKfHq3qxTNxyr3ZnFJE6nuP5akFSEFcVhEazxNekF",
  "key9": "54cra9stbubzckx2gNFFofmYMyGEkowWJ2rz7s5xtfJjmLbRAjsVeHtbH67o3PkdJ5w54C2qZBX1eUusoQixmxqW",
  "key10": "4KntpPUeK3uT72uoaoMRxefxMiGYrvfUpypKQBneHqQrgG8PV9SkziCdZwzydTFrMZpG1LhomUj1DQB99ojfoSmU",
  "key11": "4CeKTvzYzkgBXBWsTQQkrNXZ3SpQh3TtnhGQbJP3VhXx8rWkWKWSU2krmiJ5E2NGuBkNLa3hgEBFTHLadWoGrBUQ",
  "key12": "fN2eJTC6v8bnvGoPDY32BSyVzs6Rw3zgfHGYCdLU97X5pCYpDWeaU4mqcXLYkp5shLr3mRvtcmPnGwiWaxji1Be",
  "key13": "4meRdSXN6V2MM8t8kf1wSDvHWmNBXwHd5azD3fJXedvedJWCjsFHngz8o2qgu2GWoFmseDNfB46bb3i6ecTtjwtF",
  "key14": "gEjpfuWsPY74kZutGKV4dRCDrFrMEFfZ1S2fUiCVTa5C7Zxssw1qWJhXorLiq2hsFehDTH7v79hRFds7CGtTPKE",
  "key15": "2sPaUvYPE7aAfrHWddcnihNhMKgnHfxEYAdEq35o3idrmBjy1cFqpgrLkJG7RGJ8rocVFkMVt4rbskHZf5CdQXo2",
  "key16": "3s5HCZEikQd8xY1cAjg33ScfL45Rej4dbQ5NPFRPgZGskJ1AyRKMBvmdbQEnWVYHwsuCeYRy6D1hm6tL8WdHjQ8x",
  "key17": "3hgieV8kYU6m6MjtbKfTJTk6rcqQpcXsiVApGxYANFsdpGQzadXe7CX86ao8YgcMCkgEUgLUkaxBdTTUnUTny1FA",
  "key18": "63EZrHjNTF2Ddmet3tdpLwbM8j11Ng62st3aCz5pmUFpx8pWhzbs8WDbYrBFDokpSMCVk6XEx8zAUw5wm8H5vPEL",
  "key19": "2R92KzR3th6RZ5uZbTKAoziD9R1bExz69WUnELpyLTWBEuTwb7xB5WPRqDsPzn5GEGr29u4AHshciPyn4ZysdEsU",
  "key20": "34FfziaSL629vn1fhjZHKT7x5eJW1PESMuS69wG4AbJ8fEpKzToUjfznii9d3UzAM2KMoeg9XBhevYXV36jbehFG",
  "key21": "5Um7FqLWCV2XDeX74VHYydZECyiwTaBG8BYF5nFW2gDazKAqXAe9vofpi5kL3wwGWC2fMKoDCDPrKm2Eb596pAJC",
  "key22": "mtccUoKhuwnft9XExqetWgPrjkYKxppFu5jRH9DDKoLiMR3o3Bg67LGfxYoECQQGAvm5qkBNXqAwXMFrQ5DorA3",
  "key23": "8nshU3WMA8DSKjdTgSSD1HLGJLuGz2S2LCBCb4b79MqzfsJ1jDoZw5AttvYxuUzXgCSzVjJ3Vtbr71KNbBwcVva",
  "key24": "K8qAMUTiR4CmtTtt3C8KNaMYAEk2jerQRMZxoF1VGVDQyqAUPqdUcXRDXqRARBcv7ESEF7hgErejxum72F6fgEx",
  "key25": "5RpyF9Q7aj8DxCSJmRVTfXPE9bnua11bZpMdpwsL48n3xXubDH3wmk9NcWuQgcbJKxaGPezHSmrrNV5sJPnLG5sB",
  "key26": "iEmr6guvCbCcf3YKEGgscHd8sYx6n9noDu8eZ3L73fqFXmZfmvGAV4hZoWKz7FW7udvdFndsYBEbV2y48xBxuqV",
  "key27": "5LSfc4k5Mt3BCKnmUWjQKERQiZKgjXEug9YsC2HFFrmXAbJwMMGCA4scqtFTgrdJUKYGifqQ6kXUR6qTNaWx9LUf",
  "key28": "4Jy9ER7hJ2BEGHVB6BH6pfLY1EwpDZxEUvDLFG12CtbbvjgAhChsDqPbPWQpZzGMoURVm6PQd6UFEaD5LxGjDarH",
  "key29": "2ccW7zinFS532QtyocQ4xobQkUr9BTBeK86BQYZigkLxrigpRD6x66p2XNfrUG36j7PFPXok9fBrigePu2gpzKrb",
  "key30": "2d1WkuUMA2hhxjCgH9iZdQHELBoHJPYmBhEfayfZjgnjjf2zpVEMrBrFZpEyADNFJUbVbLSHfsS9D2Yo86u9xCc4",
  "key31": "5jQiwjAHYLJgfEicz3r9ugHB3piQ2cK4udFvsq9y74CMFnAgL8iaXFdV6ZzXNRhrGMG9Qr6DDT8eGSFZwg9UC63y",
  "key32": "vB2Y2okbHGS5D7k4SCaxXu2BWtB1eq8NNqbt5xZD2vv6UXx9cVHV2ARYMWNMj7fujj6c88kmWkWAyHcVPAXDWRT",
  "key33": "BTLqxBwEWLjVkSpZJncteWwYdKC7DNjBkjr8reuw1vMacqZSoNdBdubEpRwqKMxbTGLaejfQ6PSAt6SdfQhPV4P",
  "key34": "4scrsEKMqxzgPBUpMWPwQewnPEYZSyz7U3cKL2mBfiDJuX6vERYrDMfQNC3Cefp1SEZBhovqnMoDjV8A44urYhsF"
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
