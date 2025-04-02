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
    "3121KPV7QYWyQ4mBujMQUqPM5aanM7cXeBkJ4i2Qc6DpjkTeCozcF49icfUW4uC3e5Jc4VwgbvggTUoEjWdGSm11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqt57yTNoHW3AqU2gYrgezYDYe5K3wX2BXiretZaVSLyCMWcCMFss8NsTSfqWBgmm75FGxmvbMdcebNEKCegXFu",
  "key1": "FCq6QgKrRoCRtmiJ8TLGP2Ucgdv3sCKX4trWSNtGn3zfKYEimT5jsaCPqUCHoAnTPne6phWxwHBpDU84JBfXQyJ",
  "key2": "32uTn3PofL5fadJ5m9c1vPBDV8fh9cRbVPaNQXppxAw62arNPxKrDMJ6pEsR7h3wafmveKLfCAxyRbSjFsCra5mS",
  "key3": "5Ksf6iuYcNVSJDYrRbmmtTibXRGXhBWEtKGJBpYr5TkJkz4DHMGfQTrRjUcFLxtJXaXYLyr1bGGB9KNXrCeG9Dck",
  "key4": "4jSTrTDtCHi2rdxyiRst2ta4mw7x6MGyv5yqz13jMpsnBqXHUwYJBSMU8gmN6HZjKxxzmPQCjEATSmaZtFoStDuw",
  "key5": "KbWcpseWYoSzAw3BHqDGgUN3owF2v21KbAheJ2Aqfiu8NjD2ggmyoEQ5hDea6ytnxzFgooYhueSdnpAqNnSAeSC",
  "key6": "EqCAVe17frTGmDFXretZwQDjXXdFxKyWVZ3S3ejpANoV3dy6hgSiNk3Uj5hSjofuaCvdbj4UWajjpT77jjAMyLX",
  "key7": "4MNfqByKr5zSmFZz78Am9KLVUDC98BjGwNUxYhtVn5Fhno3Dipf34aqe3YUSAscqkTEkToMaWMKEmJe1owmeSuq4",
  "key8": "5jpBg5mDJvErBqjYYuomQxUmT34F144fxtYKHUEBJNyTdV5PVMoYfWnce8KddG1xqXqzh6GeBEucTnaGkpd2bDPd",
  "key9": "2aUCCqyAT3okvM74KnVqRT6fabx6zUeDDHQPoFJN93jCzEYbuQXDrpsyUpht6mXK5UPNrscRwfyofYyZqdXiWTgz",
  "key10": "51uwPFNKT5rHwZvxrWsMMtNTucAyfrpQen8T8fgELAbL5jUFC3sAvd5dH69oMd9ABFLpz1jAqra3dZRgEFgxEBNm",
  "key11": "5oceD65LXit4t9dD7YWf4vgL7fKyKyMrDkEheadD83yJNzjdXWhT5arFTwwzXo88nuteBsY4B3QvkSL51Hw4xogM",
  "key12": "4P7vCatnktRKCRQgGJpyiRkR6JDUc9fr9JZVEaeHjNKvjSBbGELWzuwGvcocqxj83MoSpAbNShDkQ3e9Rw6QS9V4",
  "key13": "4wnwAmmNfpGQBo6X87yvxCsLMLdGv24vFhYChtJZDKS95dXgtiR5mQeoZtRDQzMdvbrmHB5V2rWSrNgxnyhd8KW3",
  "key14": "5ERYxpYuM2mSSeu9zLe2SGRM1i6e3h4sLJgRTggypVTm4Jdus21pmJoQE7UiYBmPtgRq4qQy8iZ3XJUaRz6bjY3D",
  "key15": "4SzXD5RmVZspuXiDmLBgyeKfrZM5EFAuS5MJKvxVCWjUcTg1KvSLkjP2JPVQAxPBMp8EsRfRGwFSCivGuVRNKHQ8",
  "key16": "4QNmoiKJuHZLnQx6nWDPJ5QokR87Qn6gWjrCvr6DPCE4rQefGLJ2VCTGyNHVe9jk8qB44Xr2e1f2iJiU2hEKpKuc",
  "key17": "5AAG2rS3cxaNRujn5npg6Nf9bUTWMPphZRmWfnBLsHWcJwBTgeaXTPLiYkQWHnAcCVtcFksaUetm3Vr4gNqLChDw",
  "key18": "3oHSHr4wJbg9YrFP8bpDh2TZAUtyQwfkpJivN7xBe8Hs7rPcruLsydgH6DzmqJDbrWWXFN3tGfMeFDADyH8Hn7cC",
  "key19": "H1B6RjF3G9qDCg1MGTcsU6e1zpEQ8gengvQmp2GdKixikGoXTW9gMT5AaxNsVC5HE3MGW9Ur2AYMPsxxaUZvLoh",
  "key20": "3HKYpWDSTyzzQAsfN5p3Jn4Xu6qQYhqvCx3TEeTWAkmenQEDn1E1MVCqP5pYw6Q5FntihoZQE3ZbAfFaDbNpdyXc",
  "key21": "xyeG5eVjVkZ8VSGoVCCAsu9Z2Dmsryk1zA6AGvnpZY9WYnHp2QwVWx77KpcDrvSHtc1EBFi2SbfptcGUWFPtvD3",
  "key22": "apAsgCiDUh3EgdLaQ1vweM9V4pG21W5c4kE73q2x4sRXuCfHroSduSP21yXEyEezf2JV8wH4gVeDcqo54xvWvYb",
  "key23": "4mzmENLxdDodGkM4SM5aqWSjyqUXnqQFQ2RxqhCK3EsZegn6dAJzvUd5XBa4ir8PV52YroFQ5KBtvhosF8dbXPfw",
  "key24": "3BJFb4tZuzT4Aj2DHyED5U3gTf5pA9BFxpsVU1hDpK8UmySUeaLa9F45i772n9fJKgjzKURLJXMkmXESzGhmcJA1",
  "key25": "57bVzjFdSYEfAaakRfigqpMTX2iTcVaJte4bheiyW2n45ECsNbdTDSK62ejrnn6ePT51nUeENryRPcdANKnsrkTr",
  "key26": "3rLM187vGkEutTWwJ4Tv5tnGG8w5HtZMt3yUKQJBrRueJVkDK8FmoTQhvsKGt7Cw5BpCmhfNxzR1mLatzvKsW6YH",
  "key27": "4HYV1qedimWw7yVHMhiWoCopnb21CvvY1meU4QJKjs1u8mVvSpD5aXAVgRyD32F5yeVXnX2JpD2LUVbRXMrxw2BH",
  "key28": "cACuwjUxWvAd6T7c6LzrKFmsfFWPnQ5WrYDofiLRJWfjpT37TfsWBePjQm1hqsg47EtVYNqJBKNXVNpNxyd4zG1",
  "key29": "2j8f4xRJirrgsB8ZBuUitY2BEhcEVES7GhX6AYKCso1rS3uWHw3DhqaUqCs2Pudn8a1pMKrqB6aZGqzGp5STBnWo"
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
