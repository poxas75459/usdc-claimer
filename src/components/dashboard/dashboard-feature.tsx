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
    "59pE7reQD9ZjoNSdsuNqBMQ9iZs7ciAD6xutf79qQArAaZpd9QooEQyS1np2FVe7Hnt839zvRnkTccSP8nyVEgyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PfeMiAp3YxZugPR7ThQ8rzsbQbv6vpRhSNuyC161p2vAtbTocoPxbK8ZHpYG88JdqQs3t9YhdmphnwNFu1JN86",
  "key1": "X2267EyXYLpDoQyPpSWj9T7rBFrVE4myANXg2NfB5datA7HUXyN798jGGAraRV98mUp6QXH568rDTaCRYRWwcDb",
  "key2": "56JB477KW9o5oASPcr7jLkuVQFKvXemxWd4UpcjdEMhRihLxp5xCUMtpiceTwu7JV1swtm6vNeEtJUHqzwx3aKHK",
  "key3": "wmcBxZkx1Z22zrMvsHsSxTTNuAfTNiU1PLdJMyZ7pBi8T45HdVTt2UBaj991YjQPunNdSq2mU7Y6zytAe2upw2C",
  "key4": "5x3b8vkHd12LFyAvFSCwoeoRQfvWAMzmJ6MGMhUsCw8MxBrBKH2jnH79E3QCEMXaCfAZtJB9DNmYVrjgviPDwidv",
  "key5": "5cM96vv2zzFv2W3NYRY29D1o7754N9U8TypRGMiVujEnirncsP5fAZF6Cj9zjJJ3GeJYS8gnNGNYhPNMifxeSMZ8",
  "key6": "7kQNJehrsfwNBBVFUXuV75zLeWgJ1qNHxmDokaXUtyv93tbVybeP3HrmMFpUgDaEJi9Nbei3LMCwzsdMyHcSM1w",
  "key7": "5HLyhhKknpzCFhdnwnjaxCG7xabasFzafuRiCSMwqN8tQJStRAfsDoJUrn9MDW3SayvrdRcxdpttD3H1hEm23Sv6",
  "key8": "5cnkitvghtzqcqyjbTsaLuiRQwA6pntMemoftEb77GpawQJJcGVevXxmhqjuCs4NcfMqB7dvNjNC39ADZFN9Xs5R",
  "key9": "5FhGcHk631SUtg989y1dDxGzo8UoamEZNFhHzUnMCT8XAFxfPeJEYrD5hCvth4VPfV9irMgsDHddvNyMMb1YpfbG",
  "key10": "2hRK2c14XFkvF3f9hbL1i3f29tjotCbx62znnFFyReJGRyXWFbUpU75sJbZqF7LwbFcUGR8CA8DgS5JTbXXFhpUB",
  "key11": "5CaLTMKkYKoUUC4HS5ifov7BYdWgv3fZrB3MJGFQvMLTCCJDhPGHor1eAKitVy8Zbx1PrvfVbYtBZDSc1Q5ZLKM2",
  "key12": "2XebAdwpnAwDEqKNMceSs9dwsq83RUVpV8VyxowYVVAjcaCow2W838ts7Q1FjV4M8hymnYs9vYNkUnhP9WR3wChu",
  "key13": "49c9urpnsB2n1ezaNtGbRFTte8kUuAaU9PQDkCjsJN4pqPdFB5ms3iFEjsRMcD5kAL5ByYVWSeWDwLgoqRAzpWHp",
  "key14": "aWymMkrdU24KFgyMvmkwf85v3z2SMzznkaF2cHzJY2g7RYFQQfCP22ZiNpttNng2NzvS2q9Cyoa3g23nBJbEJn1",
  "key15": "2sr178tnPCcS7jAEVX5obZ7zHj5tccvZsesRxSJXbQ7EnyDRmLqT6Q7LvoUUC4Njoshg3ufYDGpggZ17rLm6M3C",
  "key16": "2Y3msRDC1fsEBLMeYmiV2GwwcXT8CDnuow7KHwoRLXcofYcNek8NMymn8LLMaRhTUypmbiJZDroTjZ4TpBwWBhW6",
  "key17": "5iRydsCzNGTcrtfgvdxGDKdWm9iREsAASzKQui13gazERFDjvEUzAcMF4gUcH3wf3iTnspHfpkXn9eceKJ7RLSSU",
  "key18": "B6y4AAE8Jf5U6LbeQQ7N3unaTiXzpCfAFJWamLXGvuK866h2hJRV5WwWPDj3miKSvEFufauvb3g5J4QS9SEJocC",
  "key19": "5PURAe12HRN7xBugKf16gRLTrPHTiJjAjQAZ59YmRoEz7XMKx7hbpVNj8BJdM8papUDzJD5BLwdpzr2afyACvJs",
  "key20": "uZiyVv1eHK9JyiNTHm4y2hgBdRBqGvTgkU5ZBvZntMKJxMYaWx9GimwhCmPCcZGwsACRMkogwQYRHZXP9TAHcZP",
  "key21": "2eL9Zgzp8DqPVMqEq6p8FHNjXGdJQsiUgPeMhvRb7xUhn1wihB2d11ggzPdFc9mK7Swf4uhViskhAD5rybKFB8y8",
  "key22": "57jeuDjx7TLG2pyyxRPrJ5iCZbApzkY7v2Q51ZwwwdAj7BsEG1K4x5gRTXvnuGdS6fX7TbkJP1wLmheePYSBM28p",
  "key23": "23QJTQ8Bw4WLtkazQK3A9sVxF7x2LuMLAcuKRxsReEH69pKmcfA4iitwM8oEhNy1i5Vq3dJ2Qpzb1RQPewsjhoYq",
  "key24": "2s2dRTdrD3R6MCExgTnu8ftsFzsyJhXLwExqCtEWmo3hQxJ14WepL7DZgaE5uoSNVKzEvkiZxsWBxirpVn5QMnun",
  "key25": "3URJaxtPzhCfY1XJSGjYTMFLdSxrhahF2jcfxeE6QKLVUFdkpjKTHBJfrKLTWYEZn2u6Y7wk6aSBAymt9JzNaXUn",
  "key26": "uCjHRjASFyd8E41UEpHeBanURiqw2zgqSkfJcu2py8evcvVwbYAG5U1DA3ExRSfWPuagD31G72AQgRpKCUgH4EW",
  "key27": "2MLXoi4z11uVhevnbVdFETikTgGZdviwHmndx5Bzg57qw6nuzseYritQpK2LmCGFjshZzPgGcb7Ds9XFFktZ2axV",
  "key28": "o8MWHs4KAZLt3pkfXwm9KBt2rtPc7LAbWK4HCg5dtTAZS9s7NC1YH8uXypypvAoKLgXZpXMatdi5JUwJ7XRBYgz",
  "key29": "3PwQU8XQ5aZWBV18auC389rvZAFhwVf2pJyn16TaoaTEQQrq5cCdjnqTgs2nLWAAuyUuvwLSApWvPEGVtktgKcPo",
  "key30": "4Tbp9fdz1Gk2gavNrjkakt8n2q6J8grdiayh5LDTBFcHnAxNkeNHDjHYwq4eD9xsL9YKnXpm3cz7jd59vzYP2d5k",
  "key31": "3TzCCVu9Fg7HAzJCBQ5HpC1XzPc9D8Zu14hd2j9UXrQ63U65gC2ZjTfb8xbnAiFpGMXdaG3uaFK1zgrYnRMK6esL",
  "key32": "5SiKaokJxLrpcYiiWKrkHdLjCa7yHTrHhRNEBvPVD6foCc9dDgjcPBefoMyF8ZYcxUaYytrCQm35WR8tMUuWLGZo",
  "key33": "4vJjKPWok9i5W5Lyp7adEPPj9yvLnCEfXsdHEGHfjdHnfii2YJSa6F7SWDboPuu9bhoFpLauNRGq5NBuSEKvbHqF",
  "key34": "4tY7J3Zcs47csF7V1iPirGasrnMoUmrih3UcUM1Pf54JZFBVUKrUnw7pg29YsSryh5J4Qe6Zc4pTxVCRDdYSJjQY",
  "key35": "4Vmo6PWAcaBzF4spnp4cueaNzL4586usvBVANMGs3AZvHgt4afkX6CRczTELAAuMCsA1QPPpR2LQqCpdV3K4bX4z",
  "key36": "5FBz2DkG1uLscAF8bqsEtj5fBCkfZiCwJ7TqmmpgHnJjhF3zMKDApjWWiQvkMfXmM4yQdGHbCzAUHyGihfUciuvH"
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
