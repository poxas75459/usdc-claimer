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
    "4sXqPrQjTg7MMkcMy22CD2po2kaBV9Tut3rgLxK2dgVUavbKKtGFMf1FiUk4gnEzEVpfKee4dffDQLBZMFP23GH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pF7VmsSbjCheB4EUw3pKpRhnjXGG9P21eegF2EDFUuJw3RwFRBDorxrd3fEgiKtX5MgL24ezP142kuUur5PFQCZ",
  "key1": "2m4UAqTbCderEwfrMc8sPNexRAeqt7v3MmdEBkAEaG84APFjhcoHSvveSdxPsCMvQbB4v4E2fRE6Fme8x1s5qxFT",
  "key2": "3Aj5MYYCo3FVRsGCkELrsCTaPwwKwCAzWUSDtNa4hHJNruEywovp2yJGRPnnNc1kr5vcpNCyf8TUHs1w2KBhnYQM",
  "key3": "AedR26JQT2VC2NjpYFDt6HdbJ95VR5USfYnvuitssWFS1g6bpVGTFyiscdRfa7BdsoaDF9MJwYkGtzMz2ihC9pV",
  "key4": "3zvx4Za1dasQFmw6PL4B5FH1jCdy5xNobRMBGsmsBhKsRGQpLqptGqjzQdPPHBKTDMgtypSrHd9UzrD2SUEtfiHC",
  "key5": "3qrF5B3QZT6sownJiV8jdTSxRJcxHCMAP8z9rcbSGXgPBk2bsRBarcfu8XeuADvoE7nYmemhhJGZ5bmwcyQwykZX",
  "key6": "52MMauchqLM4vTbZ2UCX9Y5ubgEzijS3ibaFmktGAwkwSaynFKa6CgRt6ehHkNELND3DmbV4CDoMPYb7FQpPjVYq",
  "key7": "jyHNh6DByYnUmZKsP5h3wSy8XzsPyqhPfNscPgFhr7VLBdNcmdP8uqGp3LqzU6ZXo3BL9ib9ig5eFFFd316swdt",
  "key8": "5Ezyb8nsLzdSeSny3ayonoMef6Jam29wGfBEj83UiuHcWzk8PQwrd87MpVeMP4VsPSABXjL3FdmVQWxtPiM8wb6d",
  "key9": "4aiBk5Z91SFrKJCcWm7kx7CDF7zaJPTxiBw1hNYBcCLuVGTscVuMyBQAnLpvYExm6kZSQwWqm3FayZmGvP6XU2JC",
  "key10": "A8o8p4igpY85LZeiMoYjszCGTqb3fcCeDj5ewgarWLif6cqgfor5WEWSD99WW2HqknSGWH5gv7VA7RF6GNRa5Fg",
  "key11": "nk7DAVRctN8sSiwGrRzvNRSCURJ4CYMakAwroTbtPCXid6hWfU7B5r9XmRT3CvV1YhZ3Mw3Mo1cUQvb1BkUDFDU",
  "key12": "5R4AwSmUDi3B9TwEZZYpdBgtofbSJbbsoE9zJEztR7UjVAgtz5Ze63omzaokQgp7DAReKd5HbSRmEL1WCRHUDtCQ",
  "key13": "xvs9JRGyAd6SfJenS76nT8QcNW3P7XTjGNBFRvn7PFRPVB1Dt6KmFX1DcT64miPchUQBMii1M9LGPxeYE5NgBq6",
  "key14": "3ChanctciMCDqLoKNf4MELN4tZLcJ1j9BedPXQpoy3ez9xGyxppLG1p2Br4CZJcbRiJy5SgmdTw39kUqq5EqBT7r",
  "key15": "DnfLpk8kwoiGNmmD2a2zVQaeKtKJZ1p1xGkbmGeZ3DCJRDJCJsLBPv1np9msp6LWT79NUd3CttGsXnCGocfKqkZ",
  "key16": "2iUKsUtAAd9tZBEUxVqLBJwvNdRqc6v6NRCcassxQN1EPQ55SzWZYbwg6MGYfSApqPYzLGgX8mvUntxBU5nJv5V9",
  "key17": "5WCtng5QbTSPm3aBCGx8YB3bCbzvd8WZSjK2Be4jxz4q3ZMfiGunG5WAy69SRP3zyW8T9KrdoLFWDVhMd6j4WDkW",
  "key18": "5BRT9F8osG9xWBVvridg2dmoFjmErwv2c7TSvbHTmkTBZ2jutSHMtBDypLaXau8Vmuf5c24p5FMwK7fDgUC8g3Fy",
  "key19": "5gvrv8yXNTP3rKdkfmJtuKcaBRR4TqjS59E92Vocn5sACUZwQL6DeMuZhi477taK7J2WUBz559HjzPthwA9WuBXe",
  "key20": "5Yo2iadrkJhuC3gRofdfX3nHroQMj7rDKTZGgfykcnbzDMr2342cLi2aNSKcmYwgu6oeRQ6UXLMYEGwAofw8hT6J",
  "key21": "4vRc5F22SKKNqBHMu9KEmSHdVbs2P6HmgLVp7j9ZB6BZKPMZeXhePsbkZASvMYhxwUceeVu1pHLAKVejgPQCbsq6",
  "key22": "5R4USwXEaPMX44xXirC4vpYBnbUoXKJwJnjQU4eiAUJWAsg2kdfjdYUea8ivjgHQNbpgK9ihWXcr23fjjAzseKLh",
  "key23": "9ehCUFhq2ZAqEDBLvQbuRbAcTtBebcqt5iVwWQMUhKg8NTbjBgd4oDf2ZJoUfHL4La7cvURj9rBXL5ezUwfF8GA",
  "key24": "3Y4tPBnUp94bjSfBDBhixjd8KLGjTDHy4Z5dRqBWbuSLpaSDzGGkGwuuJMTjzyvK7TpceszMnLeg5AZp7kN2uYek",
  "key25": "5VxNbHxE4oGcSYfa27DBtFGvyjKxQywn6LjLy6Zu5GnDVsdPHbiY5GgwkcZKLEifSjLTQziLJTRGn4S9P8umttQf",
  "key26": "63pikk5RPbscQ5nYk5GHD3AP9J6WMZV9HBKGKjpqRi9dZrXue5qGy97D5ZS3mFWvKwN6VjbFkFdNAfWww81yHCTM",
  "key27": "65hBZQm4wkme4xz5aRgX6SwLxX2vHt2one5vVsDokVHMmbjXsW1zKgkaFZS1hAJ7L6bVj8oma46gJ7cds3MAGXE7",
  "key28": "4NtDDhUbo97mocxP4AdDomx8RGXFYZCaN9YB4C3EAT7tGRxAsE9JjGSDTwRARCkPKr5W1he63BzGKJaTS53wWFpE",
  "key29": "5aTyz57BhaKzvN2KZKCSPwvFhRac5rhAFs6HLaUaeEGmYggM7Mc25LV7nRsknM7XNFUDNcmecc578yWy5Jo3ztjC",
  "key30": "AHHvswVsMUV2v8F8GFPARGYcRACg6BjwU2oZ2yDNsjrVWfVF8pw6Cgumeb6ZswPzmPDWbJGQsQ3WosZPZCurGqF",
  "key31": "KGz3kGUwQdfBSaprHPPbWWqhR2DWgaDyutgLaVkoBV91KM9e5Lphw8cBCT832xhUfy1WqiLqNNuhRspH3krtbdB",
  "key32": "2ciBtSBVmiLViUDEM1psjFNgdCeG8qmnE1McXCuGW718T2hbRF8EdDq6w9KZ871Q9uCFi6f5FqiiHbdB5UMG7WpS",
  "key33": "4Dj2MfogXkkoi91pZCGAxNHqK8caqrgkgoaXo5YibxHhSPqgDsKcgHn3mSxkhXYkZ28KKJcfxr8YEQUmvHwepP3y",
  "key34": "b93EgXTNFeRb1iMK67t8zWEHm9jdfnhiZtZSmqX4YbodnjDCmV3hWM7NMTUG648UoisGWRVFUwQYMsgoJQvaiPj",
  "key35": "3jcSivSGeq8sbb7SjEB7yFBrLwtKws3P1jWUCowv4g1GXEdXmgfpSJhCnPfwbrPFhzN7Kxdgd5T7ZcdYDam5gHTD",
  "key36": "8PFmyfnfviD3YHkdJ7QiyYbvAxNwQGmai8BmNCaNvyq9cdCLK6NK5U8X3siXH16Bij84qyscaCFyhko5K5RqAUG",
  "key37": "yfKHRo53oAZ5BHX9oNaG7fS2f4URBRXieMsPj5AohyyrE1U1mxrkUTMpY718bcAJMP9aDN8nvtM3QqCDTknfnhG"
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
