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
    "45kvAzbjbGogNv62J2eyY6bbMUUxui7N6tj3dPEQnYUEumyzBa1gL1fiqrgNrdaZNqEftMsrbPVokuxrzV4YewrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B5okHAMTMfJMeNkBzUXFEPVBDZUmJdxNRurbiZZWCB84SzFU1UjE3RR6XK3wMKwsm5iLkK9FSZu4zCrAuWLumKy",
  "key1": "s6Exwt75QVSoZjkD986HTtG6UxHrRYY6HXKfnJxg51DVJ9pmY8hLzAmvDQJGvtoSzrfdGnG9v87tvCVHyeSi8i9",
  "key2": "5fnp5Dd2JMGozm5zEAtaPnnsGmmhcV7BsCJ8iKrKCbmoxZaVQ72hbWaSHvdmbC8yv9WghQrvEwahL5LhgdcQVrG2",
  "key3": "KtoqTppSKpGMdr2d3f9rcycBCAaosQ3J3HG6iBwsQkRcxT7HigdRn5Ld6ujYda8PuiFPBqqxvAJortWLNdQH9ne",
  "key4": "iwu95fgsL8kdDinZtNrU5GcXPbFngj28NZG6PEvt2b69kGfZcPHmwEG3rRqvH3uCriqqU7amBroLxUKcWf7AivN",
  "key5": "zVLLk6G5WuCiLyurHBAaA5y7UKPyy6DnZxHDPVX9NXpuuFfaQfxYgDZ7ru5kPFaU1UT7NJB1gc1be9CvxxdwMNS",
  "key6": "339fSBbeB8JrSPA7h66ysviZtfma6qqzDCw1U5qzQLBVo4pwBSscmn6bwm7mbyojr9VUsgyMFNEMXBcgUkjXVBzP",
  "key7": "3md9caAWDss1UwW3Hp7v3bBDKecxcaN5BVg6du44t2UymidfwQS5LasY5YB7446aWAiURQZwC3JayAR18eaFz4oq",
  "key8": "65vGRuemHh3HmaJaSSMM69BfRc3Z3EetZTnUQGGSr9XQKC7FPPqVLaaXyQfgMX11UjzUGJozT9cbWQk4YnDXVdZ6",
  "key9": "2jyd3cHuqndcV3soWbiGaXGxSBhCxmmzAfPdNxuCA9sQPgpa6MtVRGAAYb8tr18WbCpjaZgEY6H5rDwM254kpTp8",
  "key10": "5XdkLB9REhzPyWihToC79oLfC6Na39YfQ7g8wjFYhXmDTZ4iNPL1NPCnnfe5Svje9csuQtULx2i1nzRwpkiVeYDU",
  "key11": "2kXek9U6n1vXMU84CijXsmnRVP7FkZ6EK6MiLdTVmHPjpb226vPuMdnT86k2qHosRjBCPtTyLSGTcYgZtt3D4hYj",
  "key12": "2DXwEV5yger4CL8wgX7SmqXAf5eA9N8y2yH4w9ittwP2sDRt4rznmp3i8BVEHr16rRxWsufi922UUvKi4gxWocxc",
  "key13": "XYGZgP2xt2wBhLqaAVG6m6CFnYwXU4kq47VKmdZgB1VV7UzkyE8ppfrYjeMemwpGkx7LiEimrDaVU5uLjH4NrEA",
  "key14": "2Fk7DyeGgfdrV5338z7RUweYGkJ4Kp45KjaxDcqntvA3ii4EJGuDt7nzSN35Svk9oXvgVokCzQQFnkFDmp8dEAtY",
  "key15": "5paZJe95uKHAuU5HvVQ5iMJmXrJ12HgqoSxmiCjhaCW6SjXokVbjvYckPVKMsugeFVsZqXCatxh7wf6Z6YA2W16q",
  "key16": "4jpkH7gbyhehAXX7CT34j4ZNJKLAbWr4vkd6FdK5LcjBc2b6X9bMFcS6ezmQ6UdVNgf92pX2Kx9YEm8EvTGJUgNj",
  "key17": "2yDUwZxBtvEJpE2ZPUeD54zDncRM55EjeMSL1kcL6Nrjv8p5MQk8ZrF5euqBZQx8iQUSMBZE2NmJbr9jejYhEvbe",
  "key18": "5CYTqR95pPX1bx441VhQ5n3P9QnTj3fMPYF3x4ZLjRzmWmUD7No7SuAGpscUgdAjgH5qK6ev9SVx1Tgs3LUKFHE7",
  "key19": "3pGzHDttE3LEt3DoBXP6avfCz3K2TVBR4iLWL5sjbCSBurQScrQijLf81x6wGSfAUnPEk5MsbKu54UenJf5ocQCf",
  "key20": "4XBrt8vVS24RPFncdNh7NuYtZeCmJx6rswTAgh774GMrvTkMdCKVKxZdmS5WYWU8Vb2L9g2UF457VjJukUd7ALhg",
  "key21": "2m7L7ABfPXmujCX368KYhT7GtffoKUU3KXZHZdxS3Ttfe9xJmbxzJaTYg1MGnpWa2NKBHY798KBEr2Mbv8f1bVw5",
  "key22": "2FvJDpC5EMQn3ijWV7p3JFVV8CXVBeYLcr1o49BWmn7RzESatNWMquSi3kF8dxFXogkcE1Q9VHRGzJWLwpo4tVfw",
  "key23": "3rgPM3BBYrnuy5nNBdsXaboPZ4YgXsnC3ttWRYCkYBsuN9nxgH2bG2qhVg8zjKPr8xmVXDTVHLniYPwmnW87nxDM",
  "key24": "4wEF4fSxFLRuZBME1pLcncMNo3zAx9mycpxFXP1cBTr1qaLWV7WVzriQ5YyLXeaKdo8FJK6gB5eBug3tAWqr8FW5",
  "key25": "5UBtPcSWivSHGSH6EkKfL48GS3torVbdrUYddmJDQsz9vRGrQWzHGBXXr62FmPvAwuCWwvGYPvnRAMdAzpxoC7tx",
  "key26": "tTg7nqv1yBpAd7EM6YmMPZAft1ksn7rUKfdK1XQCVE84DUFmFNzTqFtG1MDCMwiQiQTcpuzRARWQKkhuDoWihyM",
  "key27": "5gARBd844TUNpwWMZGRFvjQQoqJuf8fxKgHmXvaFjGLRniJKQ7CaH3newqWgDchaNMjcEBLuC7WXGXrWAYZHtZZg",
  "key28": "5GcAc1wRCaH6o6X2AxrNrAtdspvk2TBsrigJB5TLnUN9FQqQhqk8Lbs1y28FxZ9DST5YTvaVoVjnmEe8wpphFcCA",
  "key29": "3boV4xJtTEZ4Dyw65YZQwFaN5hvVLM5VtH5t7RwCncLNS3w5fZiDG5kF6kSRQEw27Ag92vv91HLUdQ3bmEQphvEx"
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
