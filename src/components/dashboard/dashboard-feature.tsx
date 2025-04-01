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
    "4Prmvp8JopcXuJ3LWHR2qwiVR3LqyFNTqTRCKCiohyqaAkgZqY5kMUSwRTMuC4g3Hkthoqjghvk8Sx2Fk4Qqw7q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngLgfDHX77tWQ1XLidT2etJiCe2SHQkQypgXZriRX15cxrgsozonsMMJVnSF6woy7uce6LnfBjd6YLsY7RmcGwi",
  "key1": "2YuD2pNiikcLm8jUZ9KCCRN1zUVk5NWzcMsKmM88PMPJZ3YyR2XCkCe6R7AytrF9aNjgLAMFPefhpNsUs5R8w6tw",
  "key2": "2BXSHDFwYzdHkybyiN3M328RCFAW8VnLnp5SZnWkfexe46GtZ2w4VkWugRdC8bdwXptqkWvTkMueGhQw2o3xQrMY",
  "key3": "4qPyexu8t3PApNVSNjXAxPQti1HSMubjzmMxhZFEDS3Z3fQb3y84uL38KMjHysZkH9oM1i6mKEsChTCmnbsK79tP",
  "key4": "ma4HrhDSLZv4E1HxtTK3Bu7s3PfVfkA586grH1VzxzWu36mgZC8JeSq8tHam3m6oKQzQ9pmAkYacVBCusRe7gk3",
  "key5": "3HEbWEPpV6sYUPQRZfe8Re1NfkTug9y9F7s4P2M1euPwjud35L1kDhT89CeALeXpTZBRLYss6FfWaDUPU2wsxszs",
  "key6": "4xJKBLRkkWyPFEFGiadpnvfpQ1FQHi1i9VmTMqrB4wYPaexJLcvXqzVk2xRQCmGRNNPEWvZ5AmrHgdDj3H9kSzvE",
  "key7": "4qa7otM5rekdcAHypSihBzUHiyjgmF5mYyctx87qe4nKmXnPPArr5CBifK1xxePME6x73q3HMrVsWnMeKb2KHx8o",
  "key8": "35v2NG9YhXwFUMGNLQHqnrWv1Jkxfvn2WZJvxtZDaYAsL2spSA6JMJ66PkNmme6uoNknwiX58KYcmM2ff9b9P8Uw",
  "key9": "5uJLAiSQFYJz49nsrMdWPntA999wfHFjcmE8Px7Q6r8S4uJEpVAjwyVUpJbPWq7ZzSsn4gMNMatKHDrzNWaeKWC6",
  "key10": "nckmSddFZMpzTMHGDxbPm2AgGQ173Qy5xsiYHW624zd4oGqZnnhFFbz3axs4NbiuDqxtjoRdYaVoo1aePLUbnwt",
  "key11": "13aAkph5dakVZw3o1Las5ietRbsr8C9WCpDJTZ74qvtPWaWmiSkuPNRL9PNA9H7ipVSKKsBoCkZSCkcs3vvgLBm",
  "key12": "zQfpHiyZS3NfsiT5Unwwyi4SMbnT4AGAZisXzGHa8uZCgQKA2xKka5UhJQBqbD3BVcLnAsG31nfgYsLdHEqMmQU",
  "key13": "5pPCeJcYTyLsoVLQuE7fxTXZw5eEGstYXdxjkFZxCYXmtSRzVmhfpUukZnkRo1RBdPz7jP1n17AwPP1uphQZvPwk",
  "key14": "4MujfHu9PmzPeiaEt3FaTiXh9acESc8RaeW8VMQFJHMmMm7uQPQ8T9j6Uv83TPraX3Jp7y8bbTjW4dXUCgwPoUFz",
  "key15": "2E1r6WxCFmVCL2W33yZK234N6R9pckaKBcN8MBMZYegMGrFVSs7XCCm9epAQpRCGetckAxjjMsthKcuULWFj4NSn",
  "key16": "QzBciGqjS25ArL6b12SoDk8eskJ3PfuL7s3nNgUoMSQSFUrV8k76iGkALofZDEmtaZryhmBoXLjGC3LyghP7XUy",
  "key17": "61k7PWfGjriYqjemqp1uoc7nnRA2fWYNbRQJQTNrqApirXsKxVugXGbsUftiszJXyUpM4VJ3m2fKpSvDcThMALAH",
  "key18": "4KGk5E4V5cj7CAHzNLtvXiLq3i89YKVEQd5QNDdxsXk1B7Qf1dd27WQbGPk896rJKSjtwgcgvHi8NWU8A9xxymXu",
  "key19": "oG4H5kNvkwhsq4CM6KAbMHuwukQG79ug3QQw8M5H42H33DG6RFjFTYBNxpXVUnAHv6bc4zReHsv4ZbRSfSmxtM1",
  "key20": "2Pu3KB58iYwpmvByHgk967KMC12DyKrwnyaRARGEpbgBf7Faj3YUwy7hSubjpLRgnnYww4AHaWguqQ2rusaz2dDv",
  "key21": "4TWob6fSKPepq4WRFnBm2a4VykHen5AH28eVdjGfisi8i3P5sEFBiRRpH4JLoWYYnRtHrtL4xVih7aEVF7aeWoBD",
  "key22": "5BdXUoHcSRuFp7otgN4pJayULiVRvca3VTfhQiiRgkqtmonhr4QwtMzxRc3rmsj8knRrPyhc2s9LFVexQC4c5SFg",
  "key23": "eozV3wuzQey5RjbFMPpfFd1Gk4k2ncWTZQPBStJ36JAbMzg4nH2GCmYVdbf7kpRG7rZBEqhbEVSrKYALoaoifCF",
  "key24": "2zMY6djNp4jRbgTPm2gYFxtrWmW4byzByqkrYYTiJJtbJtP3te5Rju5EA5LvJNpoZ9GpFCbh5vZ1oQqcGLqJ1hY3",
  "key25": "5ffeCY8uhp4t8oABTRBDDdPAYvsHgXpD64JxW14KJSPbRku3BnGbmtaB6dsQBPHPwuTp5ek8RA7wGcEasX9D15wD",
  "key26": "3dEskev5R9CsHwEEhFwWkr9ddnfESYSi5tni4vMkesZdjGtKE1ZVxejY4A9KmYdBzu3J9oMEXETUM2mMFPva96cD"
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
