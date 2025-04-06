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
    "2rtbup9UWSx2cpex1LP4gFGhb3v7g97ZNBhKc5ygxpmDRvEEVQZLEF4A2a2NeouZ789GJibXrQyRAiGgj5dUxZeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p8Mg4gfJtdGQVgLmH6FFTbYn2dVCA6Cb595PrcMUUMj1tThT93yJXPDrfPEGEHLGUPPLdX1mjKNhwwbhL6jpdtH",
  "key1": "2hSP6npaQAsqeq3zSfZ29tHXDqnf3mf1ihD8wH2PoqwK6RPZfzMCtVXqxgw9AahLfticn9WHZ23D65aq9SvDycb3",
  "key2": "61b1cRT3PXfpy6hWHABxZN6ok6h2zzp6Wv9fi3uot9kgrKPyQUAUXvpgxehh2df9jUe7psX4Q63hhwaczZ343qN9",
  "key3": "4jPB5hXLYuUnp69vCwiCPnjvMyi8pyYJMSmeHwm4LLMxdF3DdnxgdpfwJsXevq6WRnbykA1QTRoEVFL2KWZYsdTe",
  "key4": "22y1vrpL54Lq9suTFK7czXarqr3yiznuABtWpLFkf1zNaKKb1gAdY7SbjqfpbJB8869B4V6NHS1F2NWAe1WV2fK9",
  "key5": "63cSCVk1TWLWjm5LSkqYr2Gmh9B1mrRK82e5ppW3f7oGwdHEb8HSomDvWFxUNpFHJgWTpyMr8aT3QPFhNkR4sEAJ",
  "key6": "39ixemypCpmTHLmRzMCXXvm74YJzD36RTVffaJ6HxZSsDhibU48hzW7V4F4STLoNhbY87uUSDvv7VSpP7tyJanwc",
  "key7": "2XQzfkh6YGK7asJ98euwsArL3vnDcqsixTkqyYkE7inVaSD4KN3toFbPqFovsD4LTrsx7VL2dqDNj8EihXa78LnW",
  "key8": "2YXboEecnHMEeMawmBZePW6LMVCK23z1FVWfMYZAPzLLtny6gNiVCHXXHgPigj2SkTLdRfxP5Ft3CHmZpMMhHRnM",
  "key9": "24y6RgxpVFXHJcgZUZSi8Q7ZemtxD38RYcvzLdmJzProVN3KfamdTCxa3g6FKjY8dFFkzWhty32iy5KhnzpmuaDe",
  "key10": "38S5pUetsnXpcnZzCiF4WrwpfdYAQu4xrzEef9qpaXKjwAw76yqHbSh58DKEZThSvPcEHAryM6dheAWw1CqQRhDd",
  "key11": "4V1syJJtgcaF3Rcfiusexx6PfFMw7tUR9UDETidjQeSuFiytko4aZhANVpbJt3EuTPibYRYWd9AfF2ojdpZvkSYJ",
  "key12": "2ybFPtKrwF2wdQgGPLao9R3iuWFSi289hksKJfhH8mxX37prwTvcS7drR6RatScu5sxF2T797JPXKnN4qJzMHuV5",
  "key13": "UgzqnAwnypMGyHeS3zRKDNYKY5AS5EAEA6PQZc1GSi3wbXSMrex5G37WNA4S6XZHSfBiyf2nn1ZBv1xLdiFJ1DY",
  "key14": "3C3C2ETay1FvKwM7ARLBtjhWwxuxe9WVaSn2Qp8uAo8uKbELFy8DQsXLfJbiRykvQuqEXt64TFQwvuPXgPxdYKm5",
  "key15": "4YbGwa8TDQnvMCKG4aPwsK6iMHNen2ehpbbUhaCvtAKZx6k8UgTWKqKmcaqaNQo7GkNYNviWHDL1FUWvsQrTL1gP",
  "key16": "5g4xpA2aZifVBsACiHggqmKvPCzb3tvXiMTNwfqLhv2ZVwEB2YS9ddLAdmGs1tP4Dv2vDUPCr9QcvJaDpYc41nMt",
  "key17": "3xQnxndfm7YutbzJL9DV5xMZWeboyn7tasC9M1LYumUS9JUcSpsqk1bQ8hBR9irurzcVmZq3RdzDk1yjxa3vens6",
  "key18": "vP3QysBaiYhWA7BkVeSGviey27SDQEB8XKRYddZ9nxTLaDT5WmcwhRwx9N5iEVL4aZrfH14AwDiam21JfYAN85T",
  "key19": "5qwAAmwnPWjx7XsmUQeukrd1VHKxMugwxDPwiZ8pjra3pB823XcfZE3umPMHnaqw9ms2qigGxUGwHx4mkyYnBA6F",
  "key20": "5f7AVyVpLkYPds3EFEjHrrJUpS4i4ffpStCvqJg6w6xUqqj9zevrRwhEazgpV3NKXqpR6DRTP1rHEJnAQmdRomCL",
  "key21": "4Cx7LUEpLdWqxzgh8VnEUCAtJmsGo3HaABCojcA9aqPkzB2pmy8ywKkYELZLpLAr2cHw5sNBbCHJy2LxdbF7dTAK",
  "key22": "3sPSoZNkoWZiW7Au2AW4Yp4PfM5EJiDtMFeK2uiA8od5ysTy2jh8dbYAheU3y9XkTMRaYyYcdvNLNq9SYfqjG3E3",
  "key23": "2fMSkFd4KsfMTKmLM2mUDdpqdWuwmwLUAikeG2CikUUpagx4hojKbSoR8LRvF44rRjCDyEdprqXRBbj5BRQU2tLq",
  "key24": "2DXm9r2jPknLNwhat2eF5geJD2iwt2gKrw869HJkRwtWTRNEBs7cJFz1Y2PKfUVdGy1ABDd4dMv6jPpkAn2YX1d5",
  "key25": "RLFyy6iyiXVeho6NaDaNZEGb2gVUXgV67CKHCwXfVHhcbb8vg7zo65KExcGU54inSNyTYvDgU3R8hHdX5c3QRkB",
  "key26": "g8AuK8G1jRkjgij8KZqfCNaTH8QsfgNNfb56VWJHv4wsAZXwKdvQiMJA7DBN718w2BDDryfjjgfAcStNSdvV4xM",
  "key27": "5gTcY6s6NkWE9K66YP39Beh3tJhP6Dxb98EJo9st6WKwG8XvMB5LeZFEcURpsTVjm9cm23X5eWWseqPABydEZLBG",
  "key28": "2HWDJuST2FLxpKBhQxRfk9oRtSDaz6D6AjwP2VcMpBhhijPB8DAcnsA8JEPY2p1zq9KBdYEt2inAy2KKZQAxcSbu",
  "key29": "4ypaBc82FuUwY3kbArezQAxCZvfyEF66iJdVXjLWAwvaqF1xHAzhbuJp4ccfZsZrfpCYqe23d7V68X8FqhoeGi2W",
  "key30": "2VxsikGkdp7zYfPGUVXkdgCKejnBS75ZwHzjyMnGtQepBayRcVadyHKZfTk1xZra8X7JNLoJ8EVZzYht37HcTfH8",
  "key31": "6bkFWjn1oNwSGMm9DdqkmWBwwH2NJFd8VTEERrJXWCnkh3ZGv5Nmw1pkbtai794aizrGEQuf75PuitLUUnQxoak",
  "key32": "Fkwv2sKxce4g9mcnvbMEzAMKHhKVufvp8pY43dLdGuhrcwvfaS2zaYTDiRoGrVyUsprVYKqmoW9mgH6Gw3rGQXv",
  "key33": "24dQFzQZAiwTN2L5qBX5wgMW1KJpHoyBtyrbMBiYrtCKjcQ9UJ3YRM35E4bMBKjgRQY5F3VQNDi34arZYfQEaS83",
  "key34": "BE7fvk1rHVhJ8YHAY8LfXcH1m7bFr89mmHEJm3bVPGTUhHQST5TthR26sm9xTGLApDeoZ3mxJEbTh9xRvwoJQuz",
  "key35": "47gyM8QKJKib777RjNopM57FUvZUZuNErSCMUQ9dyLGp1WS58CvpBgoZ3YRfgqHTzUG7g9Nc77Pn8ponNs8ufx1t",
  "key36": "37sbNBDJfxRjk82a5WYV1aPvv6yoiXvJtvmyTgp7pnHXXVMyUMczarwmHjzZLMjoGWJJqazqVw2vAPdbGkxLZj5R",
  "key37": "4Rh465bRmAMSL8H7MVeje8cjdwUV76NSXaAgqpzbH1Cjeos1L6bhQWWLtZ7eZq35o6oYdeaNymGwMgcVp7bY8V5",
  "key38": "4tcs9xVWfbaqczA7e7uqXdW1X67Dp3Kd7dRVCdVEEMZgEE3tCR32YAajTeXyiyhnoDimCQZcXLyTgiw3wN3sdjyT",
  "key39": "28MD6RPYWx5NQXu4n6jhzgWNk4YUzoWRe1aDUtcoMT1udRSjdAqWzGyB9hnYKy77Aykcie6ixqJ59oRDtyufjATA",
  "key40": "5ENs5SHNyv4WVm3qRMzqVqRhJmErTtdTcvg2tBi361QzDuRqDC1QQBSYHsoKVkQ5bzqNeHFZnBSM9kQ28KL5NyhQ",
  "key41": "E21ZWbwCqoGH8kGaTh4qVPXsXwYYiG61sAfABRRt433GVa6p2kWvUc65QgkVMujhzCSG1a5SgKKmEhf83pw4emG",
  "key42": "3nvYAqBXJoM4SvNedH4F2aWzYbaU4SZ6RkyCC4B5nwz9D4vRwrt6YLzfoLbSxM4tKUNuQqicG5ezuPmUqyhSuR3F",
  "key43": "2vWcsA3bAAVi6PByUqy41j3Tf5H3SFf6FU5YUZXq5rwqNcpbzYZUS8dH9pjQzR9gHrZZBQZwBzRpq4ZrbUFe4HvF",
  "key44": "4rAk3EudRaY1fwVavshz2FbqZMcZZwm6HRBJGr5Ny5GZ3JKpc62Lk23MEF2apjupAS17FqT2oFkV5ntn7hhAgyxU",
  "key45": "2kWVSd1PBNjecmzb1nD5MfxK1cgJNAUBwxoSdEMo84HVrmNwyAXSL63NBRgyXeiifGK4aR8tyrorzBN7WUSARyk",
  "key46": "RAWq4vZGzqNFLGqdYBBBPHrmXR52ApGqPsQJpPidFmd8SCXizo7HsPKZJwk2QPtroRXFq29UV49R5LEvgpY7qVY",
  "key47": "57Vonp8Wk9wUiEYeCs3rLnuzaYMc5nxCbe2WX1Lf97Ret8Fwu5eTyNWx2ZoSxqDwHLsydACPLidjsU7GZ3GYjiKX",
  "key48": "5QFCWzudUa4YLnRc4JUR7acpAMqkR8FHipGYiLHDc7iSj4HaMzB1kPkGhumTGGkVAgmUzkPn2baA3ryX2Egc2uGs",
  "key49": "2CnQLywvoRd3Rxx9j9fYrbCMxPxPveVy1korKWRFJKPkpkqZkSaCGTEKBJcmXGkM5MqhxAEkYeAZvRWUdzMhj7b9"
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
