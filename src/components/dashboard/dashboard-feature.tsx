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
    "66fXiajcVsW6kbG9juv26GfgskEVAmii1jbqWxN8MWnoYrryrWZYC2Qs16kwbDAy3pEif9d5GuJ7xD9oEBeHbbDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37rSx5VKrqn7En9a1xns4s1tcgJEftBFeoRM9oTdLMCcDvYHiCJ49XbQdFfVDMiCbNrgzdT4MKmiw74qevz2LfCG",
  "key1": "5YD2JEZkAKr7J6PCT6Bpao8n9WyTLdgMun3QKfWmoJYASUKdWwf4xjDimkaRdxXH6bkDJdoA8HMcbMxwHAKGSkVv",
  "key2": "4odvU6p9RNnwpwBnDCWXqyFVM8CuCdRRZ3uyeW1j1EuufgnTbQWSr3ESHSC6p4ti4caeedi4qG71VsWYe742Eeao",
  "key3": "4x8abkda9W1SQZWUzK79AsXNCCrDFisBji7CYnCdKAjDcsycpwhgP5UVXX2h9bwE6LS4RVu1XfcGpN2ZDeKdpZuY",
  "key4": "2YhDwfGeQKftJi6wM3aFDtSr96WiF1VSJNNDwn4SChoFUEj3V4R91pKnDWSQaMH25EiUpCJWeUQ3vtKVCHTyZSoU",
  "key5": "4ZPV95rZnJnAUdBWPqdyjKdCsSbXFRGAEMnLFnYvjtcRxSPuytdbt7hbijiCYs1RiUaKnNyc1Kpo6WaLHkE6Jrds",
  "key6": "bVrQFTKm6dhhxSz3jMprif27DK8i2asfwrcm6ByzyuNSBRqNLsUGh8RrnxZCWLk11uwQrZcMR5Uyanr8QVigvGu",
  "key7": "PcAQ4d42yADfNqqsaNwmDatabedny6CkSCVbgkYwhjYBBGzMcqYKqBe5a5PjnEiPMmswZV8E4hxxVXxdrcYHRSL",
  "key8": "3bUEbKtBCzHb8y837Kx1uZxtCBWHZATWo9eM6hsD6wY9XsusEaykUG7te7xncYQUd3qb9TCtkSFoFqLefJx6puvv",
  "key9": "aCeGxko8x1DPg8s3qNZkDvo9fjcFtSccDhUHah4Ts4MxpKsRnoPguQ89LhV7ZbuApx47BzjiR9F4TZk9dRuG4Zo",
  "key10": "43zUhNHwPsEMKDqTxYk45pJQ9ASq2h6SVeUfJuNXxnt1LhPYteCvwCiGM36UekanMYzCEsmV42QEDFfZGyiLrccU",
  "key11": "xxRbc4k51ZNNvrZewJznBunVTPeBhh9YMHaqqFHhMmQUZAV6uzJSkB41mCWUQ4EZDyj55BBhyBjy66Ud9zgTTKp",
  "key12": "asQu7FR3QSSMWKu5wr1GzZTP2SmAVCVyXFDSqFRU4Err8xdqrmGoL6k3v7UarXvGVWiCL3rDZyTK1PJQmZdfqN8",
  "key13": "4trGJDBpc74wpdR9Qm3fQ6XUz63mjZuy86hNDyXV9hMNtrxLBLhXBRzK3DzdcXCEH2bd513q12qdDBpDzk64tEFo",
  "key14": "5Hscj6nZgsSueShfYfoAcLwjFuoH2SZs9HrSbiYnrJPgj5v65PuU74njFNGCDGQ2dKANxQHraSKawBDKfNwPZuPU",
  "key15": "vK7NUQ3W7ucTdz1TMWLL1LZ5ogPHZDcu82oAyHipPYTRwNrvNUP4aAXtCs7vTaMXYfy8JtiTxU5g3FYkkdy4wD5",
  "key16": "21baytC2GuDspbvb8gRUG1tbFuTEfG1n7R5GkUn9qcD7RcMHPLRqL1qjwBeRBVudttDn3tHMG7sHmUaa9WNG5xbw",
  "key17": "37wjFXH2iBZ8RvaAFspjjnzNLDTTGc4qArgD8T6vhtMyraD3c8mWFYToFDRsc24tu5HJnyrCrHPcStCQyjiR7dDT",
  "key18": "2oeAB2v4NZDn9htpVJ8Xi4yvr6uSM9bf6oqKb814KEMugKL8MSj9oaPvk6iDr7CNz3tvjPWBjYGKBxjJjPWbUn5b",
  "key19": "3PaTB9Q9MpHYrUo23R6rQJdJsdHxY1ShmXoSTxGtsjEYoL863HL6Swe51BJUMHhZKouoFrY9snga9imtnfToth5W",
  "key20": "64wbUjjwsAgiLbCcRXrPLDWn67L5pZN3ddDTV6Pb7Mr4DW1A7wc3itBUcKZsXS7vMfZbgY3BWQnvZNita8xTqiq6",
  "key21": "2rJnK4AWoMYPJrj3rAv3mVxUFLbQPENMG7tTArY1uoZFN7EY2kdUTTbsa4Zpoay2xTRcy7BsS7PWAvc4B4jqfHpL",
  "key22": "WTtpdCPfCt8i3eR5jVWj85h49TTUQCwVpSVL9r6zKZArU1bQaXYWzdoaEvGoVTWfghvmmVHwDoW8PSxd2gXorkA",
  "key23": "4XbPRv3WQUBk1KukhjSqWC8jNm3ECH5ySY3pnA8xVFALSXpMk6ak5CgeyCsEBanBo9g8gWhbXHd31GJrG9vL1ysQ",
  "key24": "2dVDQPj1TkwMNvrbwrNWNwksoKUUefiniRAzTUDnKv9UJccUiaWaJ5PAQkLr3GGHpefuLXNBh6LVEyzdUX9M7XBL",
  "key25": "5oua7VUePUxZCqQm8o9Tna5temo7bdS3jJ1JkjAVSQkd9MLSnKeUzdPTa3w7TbMUx1RX2xYZ9ME4V1r72Zgk2EVV",
  "key26": "2dJMAKagoVhcMxHPxPq3B4p85AomUqnmoRPHxhWhimUjKgPpJ94z9SEo3fcHR4vHtd1YcGeWG5HvPxUvT8fFzXMW",
  "key27": "26PRnZNfbdabBqhe5PxFiHYJUyFu8bGrGvRTUjjuRrzhEiXcst33cJMpb6q95PmJHF6feAXZDjBteyBjXP2JAPV6",
  "key28": "3mUJAZgo4zJrrab4cD29FQ9rnfKqqvxzWzEq76EkvrsbUEkYffnJvU72qUd4aoYg1NsHSZyP348UoZvZzNVjdcJu",
  "key29": "HRJNQZu9YwoxzByiaW8ctnb7mubyJb2jnsc27qxYTmpSpzJGYvFb96RwyMRvM6LZ873i5i4ncN9TtFbPRP5F46e",
  "key30": "3pE8TWhY9ukcs9x2bwpVaYHTVph2eA9UaZujXF6ncKtuYvUZay6UJzWCr2RwdYKmWvXJWwGKSXTqkx8fJUxJGG7V",
  "key31": "2oysmMTCfXqwpmHBgDuD7fbGMAGdzmcbti8hb8oiC6TCHf72trWio7BMr8HXF3uDZ5B4pgzFPSiNSniEo5Px9Anh",
  "key32": "5rqg9rqfZ6dVZvC2M9cEECaNxRjgu6UtDNoGZbtN4KyETMUf7umy5vNCUTEyPCgZYZCNULpCGtDHsMMtDhsfzj97",
  "key33": "9w24Jydu1sPCfP9YLJoGKs6oiuSkWT87ZNJpijZuTTjCqoRsJKkLkWGYJgCDDFEEcx76sn8PEtuPaiNGJjJHvHu",
  "key34": "5W9X9ARUzNFZtZmjPECnMZJRSpXTSapAWZsdD41B9d1CH92oVNN6pUVDeRs93rvdcboDFn69CaiimzWeXTcmx6b",
  "key35": "WiCWp8Gmu1pt3aPehMEkvxtLzVJveNV9ZndjBqoxRJEUZXd3FCnSnKVM5ALwiBrxxVcsSdz3qT1zJSD1rcxP7RJ",
  "key36": "5crSYTFyWmqBFpAupmsg6neDBjfC1zvPAcDqF8vgmRKkpxeqcLFqR9TdQupPFWfZngVf1eCPDUbgvQokhuHp9YzC",
  "key37": "5AvPp1GoRAXrmwdaWhXHwheeGPCvfqu8eRrVEuDuNnDvL47wbwgX3C2M3qiediuh72xdU1vrPEbvanYpncxrsepG",
  "key38": "48RwpJaLXXKQWLLD4AS3KZv6xuUekrCqKGeq7gEXCjnkKjfafaxqEyHNKQEoYf1VZAV8JPaXRYU3dCWPZzmVTHDE",
  "key39": "3mWTDfJZBk6a2yfd8mKq2k9QDjXBV9LsL9Yra9aQaeLwQw5SNqyyW17NJJ1T1E3mVFryBB7gpN4PxV5KDXgvGSCT",
  "key40": "47q9W5BFy963DHt6s4wD73ptgYuj1JxyBioWscs8ogYEUMuTYW5DP1Ts1w5LFEThvCLyotTrk2cHnzWDEDtfgrWS",
  "key41": "2Gs9HuzTcn2v4yzv8KrMeaZyvW7im15uDFKKdwzihK6wCkg9YzpEWtcrRgg3VqX4PrD8wZ1y2ACoCSv7bJjzXipT",
  "key42": "2qkfQ2DWeVwrQsfUFKyFyRBAGHvi7rFDAcM7tsnag3YA65mK38h7JNZnaLPtYMb5d8sKA5Hv7YpVVm57qPFUzpAT",
  "key43": "kV59LUDe1kJ4zxhgdmyaEEvXyqPSqrkQxoHYRHaPRbT7Gcfhq9gvdgwSUp1KHxSggoFgs94m7BkQyCHNQwWvcUq",
  "key44": "3rjsRajw7vashhrPsVzRdgTex2XbQs36uoiJxy45A64QqDXpJn7z1kHpvYUaPgASCmgNy8U9FQQuq1J7LyFsVfnf",
  "key45": "5ZSZ3eDkHNnVY43pfpdn8aQnT5KoF7p3mMad9c9JhSWyX5vcZvjomkH4xrzcChzgKH7PdDtguRKnJtdBvWCpSFrN",
  "key46": "3VErze6hP8mg1T15njWTmpUDj95n7EiwLQNFX4rmTtDccG1EwLVxeqgigTth9jWLtPKjZ5p1Y2WuqtX2ZrbRmAG7",
  "key47": "4k1FDvf6sddXMj2EHfALtxxQSwXZGAhQAgoWu4t3mUALp6mqf9B1DZgWevtr6J5E373bttBWXQkmwHsDSDvns2rA",
  "key48": "4CqYeZD6tyf8Cnq8DWbmpHQHs1B5TxLQSYzUPfH17VmH9ZA1agVQm8NxRBkhQjSQ3oKSYhTU5AhQTb8vGHNyGTtV"
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
