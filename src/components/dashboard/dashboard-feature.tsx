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
    "66vYmEHSUVCP8PX7rochNtETiYrSGc7kKdjjn2fSyocn1a7yMHNS8dy59dwhqt6i82CCPViFX6jFkLw7qJuCR9Rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vu6MTRTAqdp9k8AKDrRASSCz8vc5xUXBhVGdWA4fRBkywenhQSU9AU4Ax9cEi2a2nVymiW4T72vMcLmmvZ1KTGf",
  "key1": "2RSSDrrhiU5r7z2o6Cs845LWvXnHp1iXLEthHVJmQ9nQkoxdm5RQCghdfkUPR2JfxiGJDZJooKXyvUSBNgmNmTNx",
  "key2": "RBaB6yrBDi4vvaUBwVPaYVS9rmXyAzRXbN1dYBAfztPWv6WGLXnBUjTZTHPRKAAPAk6tE6HWfD9wkFwkddbLB37",
  "key3": "2b61dT7P7byBedGLx2tMDn9UgbZLCQxEAkKqhRec4sGjaMBcpuR8qTGNLu7wEXvyhbFxS77GrzmCGG7L7u6uMLuj",
  "key4": "3xRyr63bqepoYvL6oo6NDs2UrxR5kFsC1SiwCpdxZ7u5ZjhEhAsPXx8XJPiGyW9jPH8GhhJKQ5iaNW7DoS3GJKDu",
  "key5": "2rcsVnurF6Ege5hMECACeRvs5tNUUZgsNNMwjnRznkhg7AM96ywdSYFxTTy8kHW6BYJDz6H2Qeb2ApEzSatzaJf8",
  "key6": "5ykRPmCkYBYcSGm6QEjG9DfheKEuC6PPgo4HprhhK19F9zcuB1F2r6YqPuk97S2jqox26ncBuCrzmRQQvqHHe6ie",
  "key7": "3d8AtxBKyviWGsRwTF1aDmWXEuCz7UWGnskwWWqas9TCNWG4KPdHCNwmcCh5sEgHui5B7U9C2F6i7A5EcaYZNGAU",
  "key8": "H4x6SLiapuQqtyUCF1NrefgVBzvS4sdz26LTX5Hp4jpVPfAHJLvjukvQwPt9fmtG2z2YZeHi4XL8Yt6Ugsw5e7W",
  "key9": "3du4sif1FB4vLMjadjYqSj7esy8dugrHYJsV4CrxwyaxJAppepLsE9oggSa2aoE4KQxpgYrJzfMoThxF4qqNu9rU",
  "key10": "6H6S4hMD8yu1Weh7drpipx8vyxAnGyF1gDywqjCg5wEsPiM587yTKf8oPht2149jyViWU6j6mbhgXqnCk4HisEr",
  "key11": "2VpNAga1vDG45BR74K7bDTegHGqaCtQSZLSDpQGgNXdQAbAmnD36hKCgTDyooEtv6A59bFTpFf19nwQTYB2GW3cr",
  "key12": "3kSPtDsJacF8wnSuxSqn78shS4qsUfMuw5xqwrw4RTrmCszFpzxuC3WePiBL2unY1izfBRfGpZ2433zazwFjnMZv",
  "key13": "5YTh2sZAb47V6qiQ47rYv9at5zCXgpX2jcGG1n9pkujeR3S6a8anH8qFKCsYK16dMJ7AYTcF1LAzDNMJkbTUSxtS",
  "key14": "5tkNjmHDwpVtdyFueJfjNdhUop5ceTEevyMUUQELEJz8h7GmSJmz6fcLsiQgQWzAEmzJ5ZhVZnpMY2DCoLhyycVm",
  "key15": "2TgY3bJP4qNPwfyARcCL7kHXXioxnb2Gd32NxYYypT7Gj9EMKKADsYK1TQnd3dGXbwMFycJxJK7Bqfp7pJsjeaTd",
  "key16": "5S3i3zkJaViqe5oxhNhEh6rnZurrG8U37e5HXXHJq13TzkCTQXkKeogrfhhWjzzkYf6jfo2jK1EiLopBkxvHsm1M",
  "key17": "3jiHy279CcZguqbHkhitTnD9Tefg98he2Eg77CqpqHhm12wyo1Un83q9Rg1XgijPXsepVt1S9hypLEECiwjC93VK",
  "key18": "KrKrweyZDiyWc7xf23dnrWoWchkovpCNYRXcHHWqtPepTnBnKPcsHD8D1TQfWrWKSG4chyaj7HTG3H61fQRh1Gi",
  "key19": "2sMAMz1A5xdgcUiK38RFsz4Uof9PtezJ2ARggZST1rzfRFNvWEX8ty1SP9A6pWm52zyEszt6Ax4xAbSyZcdxjYr2",
  "key20": "2aG4XU9S8WF6AZwQV5svPKs39KWqBo7gN5koqJmb7qvQTdBtP93nj7b5ecpsyANq3YA5VEu5BKHGiWwNbKn9Mt4P",
  "key21": "4h643eUEyzb8Hp2GU1GrHRFMHRhfNuxKvWHJFSwud2NPEgmxR3JhiaNrCsrp34DP6xdxg6zGXAKZFfmdKTcrwNKt",
  "key22": "4jqBPfGdh2HXN8Y98KhxuQgVtH3HW6133hGFhBKhv8RPtjyuvzkbSP8xHZf1rnjL5dsYd2gy1QFQhSwtXqCMv5U",
  "key23": "41pBpxRG82VUtSdMHf7nvkVEXcDHRdgUYws1kzK5RXRLec1rRSvsYe9xvxspzA7BB3X8C295yaaAEvmHipyjtKaH",
  "key24": "ehw9r7PeV81mawnDQAFZDG1Ad5gBGCByR7YVKr3tfXdshye7stdGbhDSbbETwyAJdkAGHLXMDzV59crw6apw5Hx",
  "key25": "2QBJrGDKg8bJyguMAfScbgRPVw2ejxD6YfWp3DsK5bYG6V1CvEVffA87hcETEyWP58pmSDvR887JtvHR2kjpy9hr",
  "key26": "5mavW5qprW2G5xtiHDjaqauLnifweFRS9e2fADAtwu5vmpLqeYRvqHJh6vEmLpuuRPCdMHuK997fDFAyq58di2Za"
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
