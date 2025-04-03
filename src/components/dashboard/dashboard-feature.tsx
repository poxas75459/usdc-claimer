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
    "41tZbccxh7yaQE5wodVXot5CrTSJ2K9ES9ohBZiTfXV8rFnBxwadAzdVYLKxUXKiv1GJ2JRpbC1qitXXXpKVCCxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxrrioNCRtcEymDbRGWTzcj4YjzEPmaHL5X8x8nqk6XUMDGkR8k7MxpZRHcREsWE1TZwiEiNmmUGwm6pjh1X8cP",
  "key1": "2UJhfdaT23xKevUqppNTHFE3ACjStyVAq8WC2b2A6bXSnNZxPr2T4tANYDgAuNxuZS2dPfRD4kt1rrU1icXdEMtL",
  "key2": "21v2Q1aTSSYvsonpTNz71Gqq6WViiJKKTPaRAyqPKmzSW9G7YrADD7KKQztSB1SvMrBV7DFpc261J34xSSNj7Pjx",
  "key3": "57ACTE9YYzW2ra2jynPxfCBWFYUU1bGrReaY58ychoejkxcsbY525tSx7BDeeV74Rk7yNGio9b88P45jTi7wWqgv",
  "key4": "4YijnywMDVc3rPeGaaemQmu3FF28k81PJBAWR9afNJPqU8E2QF75zAzKamT3aG2apFVr2i3TCY6PQAqGtWp7qyH9",
  "key5": "4SEEeMvYjAgtimeKPB2NTkbEG5KqQB74wBZ9je8urrJeRxRScgSxV7XXzuhzXaGd2zQ3CAccNXZL6jb75Sy7GzBf",
  "key6": "RGDqaZehtF7MFTuJu97eYt8eidcMrXiHpp5xzFCxf33M5vgHWPHGz6b5UgVQyfsQcDidvkpQ6kvtMoJFwXHTdqS",
  "key7": "rqSS93YKCj6bER6brRAX3VPMExhEuL8yipK1bgGkwzsvc62fgnfbq12mj9yMJjHvMB1UJs7D1BkgmNKUFwDvQeq",
  "key8": "5GZMYtjNmTpLfN5eh9beSy4PnBTkVoHspB96pnGZS4SrgG1Eg9dhRkB2xK3t7fp9ixQmDE7Rm3kUpCzrZvLrYfMp",
  "key9": "4ui6KsWfVJzqEGwLwCBkn7m3KL8J4kRBcpDbDmTAqDxHVGGSv56EFFNJRrJwNRJXCcVC2odQEx1aLV2YnnuKuRnp",
  "key10": "49YekSDgVXqK3B6J2t24fQ2RCLuZFZDvgpqVEc59HwjZfpG8swP4Gjz3BgTjN58rTPiH8zCZvZ4dfL15M4FYncHz",
  "key11": "4oHRYh7QEndY1rSHZkDrFsaR5qM1BH8SJkcm9URy5cCmzJmdHioA5csfjwZU6d47a5fDxFjRJnT3mhpdmWaP4ZzD",
  "key12": "2xECCqeqYYm35zxHCXEQZAK8ATjRaKxBRRD8SwwTU98a4Cppg3E4kGtrrUGx9JqQmoPxLroguM39USki87YkmPxM",
  "key13": "3K3ngEC1VdXW8Md5PgLSpWiL6QC7RfS1KiW4C1gNiwh5remSExdaxD7SrwbfUxroo8FC7N9DHBFhoq4jrntcWszK",
  "key14": "5uLwULN1QQTfSfms8jc3ePypp4AjZ3nCMoWoqv1XxqG6yX4cp8oEPBchm6bszZYNsQW6cyTQsupb2Wa6xtSTxz8M",
  "key15": "5sZz4Dykrk17qKffpQgH2FU4HXXP9BKaMBVpLD1Kq47UEDryfgkn7PGSDwr6Zwx8y5TGr3nzPHx7BA4CBo4XNodw",
  "key16": "3RvsotNuxYgqhjALg4WWrjPQCTeBAuv29TmacPMFf52BhmCyPVg9BhSunXayeDYeryK9LSvFAAFGgE9Y6St41TLg",
  "key17": "2UkW6nCKLKzj56npZoqF5wpKR61eV1Dt1gPryJWATccmgALVUcnZpQKw3DHEuf9iZHibTguC6PNx88C2ynPYVvUi",
  "key18": "qPwPYtSzhzQVmiJEewRafiy6Fmf8qNpPEVRd5GSetk3pgE4i7c4kedmBsGNe9rfZBRriFKn5FFdKJcTyPpT4vpy",
  "key19": "vfPW1XrDvFD7FbHS6UhK5LNps42ogov1TmxoL1mMQKWwbPU5qhqXh9dp1Wc1wZyye7FC4QHvE69hDtfpDjQhbPa",
  "key20": "3Suzqvho6VK9d92KNvqAwTWnHNaavbBEic3PTLXvpReuort7NV6Z8LGKuJ63BEsYji5wcfYDw7J4czP5Lz2saxuu",
  "key21": "xkt3XRDSCBezxKLr1w681q6ouMoBqmFYEhfHWKTwi3KxMpJL8yn2awym57TwsKvqf5DLftnVi2Wm4brVGiTYhMw",
  "key22": "A8Pxi1F67f29G92dCoxLaKHJeqfsKMQpvTkjynknGcoSXqyZjmG1dxPmaVFnjpxLFDQHbmbhTGpRth5X8erabfe",
  "key23": "5mtCYyRpF9bHjnhtJLGNDg9eZzZRWx9uWB83wif37dpXnhDyzM5hpKzA3LHkRizBVmEM4VSp9JgRnGbg1gdr5tKZ",
  "key24": "51mM8XtESDgfZatqCz1mRH4BLAUMdJorXm9uJ5m2TwZkFj6QsnoB1V8S4vwoe7H2vW3C8NuJLyKFFDdDm8gyBqJ5",
  "key25": "4NxQ5SeRAoomRvbPwByk79nnkqMD9y9RnULTNQSbDT5GNVBrYoBoJYt1mfAZsThdhr781JyeBLGoXtx1wSnhu85y",
  "key26": "4ipPtETEeTXoJUBCANL7hcmr66a9aRf6UtFMuN7hhni4efnojUdWF8WzrkS1LtdZqb88AFcpHTfFzqnedVxBVAt8"
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
