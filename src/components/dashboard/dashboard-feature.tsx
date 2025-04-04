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
    "3AV3eBaEMURicC1jgPwsNZXd7i4hNrV4FXG7i5pTY8AiFprhydN36BG1EGYqWXBWLE1Ye6N5FsRbwVSAjHoj1S89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pseXxdR3ZBZLWVJEt3KcCMPYg1115sC99HwnSfgV9CdFDvHvqP91F2vtbo5krXC8GHRR8TmAa3CkLqWf6BL5MXN",
  "key1": "2UaPKraP7iTx7WzVueJMHSUZypQvLB3km6kzu3jXpVPCwCsXLCnrd26u6EhoNPgpa6JPqpdowV4mxySmDk9o3zsx",
  "key2": "2WtyzFN4kvF8EvpRA2yGFq87525nEWiUNh1YFn6if7KH8nsR7AzbDyQJ1Fq32WhbGi7iHY4eGsmvKemR7ajJYvSE",
  "key3": "jHAQGaptabdHnTz9sEBrEwaKYG7B1YG8ZMfSuVqPAxP3Y8bHFnGdsrvxevN9BYBQ4yDc2Wwh7Wif8J5dckLccfY",
  "key4": "5urggtWtcsxMPxYYXnasS8PpngBnktb3UJCt5RDErdVgKajy8N3TmJwo9sGWXb3cKbqmh5YiXhh2rMUAybtWCh2C",
  "key5": "4ey87K4fDJEjT8MN9yAkuKwwFNnvqWhoJrs3TSxbv1GT2pm2rdUgLzrTXrY2Lna3tRMwXd4mto2ach8DgMQFmkRZ",
  "key6": "yrcQrpUBj4iQ3Zq3CMsk4BPbWX27EvkQopDevJ1EGDkABeg1iSLe2ckBWVbNzwNQwoSKRUnxsgnd3zYxpt1yMts",
  "key7": "2bXaNdUyHJgKZw63ZNbckfW2AF8y4RKGqChYApNpmPmEe3eAJqHuwxVcMHTHGZBcZNtSu9PQjP8hGcDR18tkEVVT",
  "key8": "5erGATnCV67NJNKNMPpHi9PZ8ukmojgekQ68vLBLokFFeX64E3PhFB5P8AopPWAPbho7xf7hLQrrJHXpqmjhhjVk",
  "key9": "384CNv1FCwA7RPZeMQtmCUqDV8Y5U1g3WyUuLQyAvq3YzwYdcEMMYryC9B8JNckNXY4atQEsrrXwMNFNeWuAgrqD",
  "key10": "2iRCz9Jkinpy5GssWE3DvTCgDvfvCcmi7TAnprfaGjwtukoDrYvPUPDLepTuDgXQSbNy4yRmv3M8ReYAdz5Nyck1",
  "key11": "5Zt5sLTcxjotpmeHAitqFGmatzvjZBj9SS7YFr37Hwi1iKSvBfBtX5aSBwfRNDvVffZZvYiQ2efUqBGcPCub9Ea",
  "key12": "21yMfVwhEcvUDEGuBFFKbvDVGLyCQkeH62kJ9hCNQGGXtUv7xpGABLaR33UdUYviQkPt6SFBovLTeRzJTvomrEyg",
  "key13": "2EJhryiTVdwAxYYKVQfbcFwytVNoKZmBscviMMA463MDDT4waVgqLLagHrWtgzqW56seGFYtqn2TdiFBs1yXM3wg",
  "key14": "y6jkZNoNdqEdn6oHKrR3GMvPEjA1Rc1NmLkM6J7EkSTrjzWcQvSExevSLaxtEGPJbuquDMi6XFwo1GLqSxgXdAo",
  "key15": "3UqWPrmt6eBYVixLEXQZ43MVPZzG1TnJqsvjmQ2YGxwTi864EMsgRW3Eknr1WNEJhpHaP41TLJ6tNC4qrh5x8h2p",
  "key16": "5j5itNmstPv4Cc5Rx72pP2P35BcT7xSfUuJd4L4HjBdsXk3TvmokuMhfbLrEu74ZUmnb5UDfiR4zYFaJkRuzDhnm",
  "key17": "5pWWyc8rM6NsjJ2W2vv5K3wdJmf6Ds8gTG87Mx1wxewT1zJe8MidkioZmnH952irKZkm42u8Wxn5mbrzTyKE6p5X",
  "key18": "5efimgiHBqb2EUV1eiVwfTR6NG4Zpbh3scpPVvejoVQvo3PPVbMoSxoB62k9Js7cnmnz44AR8XRJMWesRKxksFAN",
  "key19": "4QtayXmwn9x7hDTCG3EseqN5NqkRMFiwsXtjU4JL9xUN6gXAxvRgtKBpEfmefKKtZbwyHR8jinMbx4TKCvGpY5pc",
  "key20": "228S41RVhY4Xp9XbMfCgTYVWGPqMVuDe8juumEZ9vjeabogPtKbA8ezYvv9DRLtYESbaU3HDD2xUopXtbxBXCQvg",
  "key21": "4iwEmMYFUqc2HtZ1JCGPnfV5BofTYkejMpGebVkaw4xEoVgkjTKGPAiDt7aumnHCxnCCZcmQffyhknmzFk3h77W7",
  "key22": "5vfcTagK99QLkv9pjpZXebkJRuBGPdhuhG3nEvu9rjRMxWdC84F5AnAqcGZE3sTqWZdhd6Y473GrwsTAKpnHMth7",
  "key23": "52zJV6qX5KcKPCNqod6DYJpLVkk1ErQxtwnLYn3x57SyRSAFdTCaTMpRTGYtYk3FxGYiMYceWiaaNwvgp4cnA3Jy",
  "key24": "587mqjmzmQXYPunpmuchmiKSof32M6ZW7m7kbPR9vyx9zFu35TtkqmNr883BYXndxVT6n7kNQJs55ZKSt7yx3tNj",
  "key25": "2Mu3i3mEYuVAGrtZiYDMa4wmvr8Z8BDmoQrFXDRBc5srHgRyUpXdcgmuJVFZQDE7DoWeMNM3wJq6pUV9me5G4Y1M",
  "key26": "2FwaAihe9zVrEcAxr45nfMRYK49ePSqGznRhvG7ZVVXSNphUZu5z7mhNM2L2DcumgdJPqcwsJ6zwrdcWGgydU8CG",
  "key27": "66xUV9vKkkQk8Zg7ngaJicDSKBZxzf4VD9XsWHiQvDiVWieY2MS23GFPdFj15zCHkUZ7tTFVTsrWKjqrqYX3bdT2",
  "key28": "21NQdmtmTRqBPTeJ6ZgJPxRpuPhwjYJHUGppCTfS8Y42CP3S8jkFh5XzaN66N6hd55YaRGSR6rGsEmSpDhEYSaD4",
  "key29": "4YLt1XyiBpKZCTDy5dRvMUpPmafH8vRkm8tw36SfvUdUaUbDVNa5xkwnL7C3Kkhqbfs6j5uu9DfDonT9B482Ysri",
  "key30": "iZJ7yuoiuc6cSD7uZr7AoKZJMCx3k3yL1LyhePLNsj8Cc2PDpTHDeMsMhbNYk9TibAoAYt5NPbxmPE7gLQBcvvw",
  "key31": "26cJ7yLLRX6jeC2QgT2sT3XZWYkgDbcgQUYYKXAqRSidgNj2V6xkUDrUndFDNLN2VCnRGrAqNnL987tHksWmo8hK",
  "key32": "5MwhCQjNz4AuW9qYTNoETetpuxAWpKff5R57eTXD1Jtg2NuBB4qwxbQZ28tq166eF29LkFWPADXnffQFHv69AZXs",
  "key33": "43Mou41fLepUtaBcX64Pu31Rfc5nik3GipRwkeySvaBUj1XTxtNstTTmNkycKsM9HXeUrNH3E3TEMTJFojQD6QHL",
  "key34": "YH9n5LYthPchkLRaEmnSv49ropeapSGTmB6hb7vrL4wJWoHkdWG7gjLLXMJ1yPibxt5qmu2QfGfq1r6t3wuVRKK",
  "key35": "359SrhcQD83oQCMUkrAyhMgXkt1Kgj7pzYHxerU4EPMbgzHzkMsJ5hfnG5cXipnJcSAeUVZiBcWchxQH6NtsLLY"
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
