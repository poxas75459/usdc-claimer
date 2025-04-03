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
    "kKXjvz8eg6XNoctNPE19gmp1yWfgaoz9S7BumkUMKxaBs17JJPwD8AdgWqakFV7sjyR3FH5j7RvnWZ3EcdhK1A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Md8UZqEitgnwxbpEzvHPt8h9QxMasXPiBusKtP6UU5SeTwLgQcX1s8JDs5j8JHfVXZyPXhh4eGwCs2hMwqWh7tR",
  "key1": "55xf39pQu7mWv8PWh7nDFPFtDefLNLEZZ9j9yXtFoivZC3j8aGRZMW91AgSTjM24UwFJFisByMBdthgVS8YXtmUe",
  "key2": "3XPaKG4ok651j5PaAHf3Eba1vRrSPTijR3GY2FnKNhPretMvjee9Sm2WQz4pwZBwSDZ9B7ycD8cESyaKf9m2Ysry",
  "key3": "2xxW6bNffMR5gwihZGAEjiEFehUhBTR1yhq7a8fNoy6AJiM1tHuLHbqWG8UZUB8oGp6K7jSd6F1V4bbz3G1U8eKR",
  "key4": "67r4WAT55wqK9yFDQhYzsMd2MUeSM821Xo6iAnFVi5YaftKdEvPt4UN3H2kyEKyp9HqR7EfSTM6UCpFdg59xbB6M",
  "key5": "2tb2BNskio9r5VD2Tb9RNynbGChRs8ebCgs4kZkBVu5BhmecbKcwvF3NRh1yCZ7BT6Dk9UVFViGPPmsvXWhEhavk",
  "key6": "5f3tHFsGNCbpjr63PnXJ57JwDFTPqXiF4CYn4v5B82YSA21KR2UWLa9gNvZDbd7qi7pR7hnXBh5k7t8WxfUhqFnY",
  "key7": "4R7fFiEGz2PgT6HEsyYKoFhkZcFvnKZJZcH7ZM4rP6SEcCw4hmfV4wts6gXkmnPYk6AcsiUSHDCEVFkNVPfZjzkR",
  "key8": "2zXLk7Nv3zzbcVNYLc611GtMyBtoCwX1iEXjvUoDjm7aYftiyMFhFn1n4dCVf2Jv3ShC2e5HvD2YTiBsmcDjSqiz",
  "key9": "4DV7AtL52eXioiUyafAvdmu8sF4PvScNBLdGDXxbhzGJcN6xCegsuKkDVNBpvZhvHRUm3RVCd7XPRRNqmtvpYmA3",
  "key10": "41V8rFm5o1J8HUr69xoi6qT42mE66XD2ZmbNT2z37p8SVCXhSVbHZjkZUPJrL7w86n3WfXJ3E6Zr2SAbWjdyGQcf",
  "key11": "4g3UCbMizEqAsyguLthxGHEu3fynuAdzaxozXtrwzV6Potj44wJbbCddz1DjAEDswUbxAQtFqv6anfuRLUYFiyYN",
  "key12": "eJYCXo2zwgaBUP2yG2rNHtXjcUB8XjH4YhuTPbMbvByfgLsxw5KZHTFzWoxHpR7GWducVxpH9eMxj9CWQU8NMTS",
  "key13": "4JK8ps3Ds4pfvueFpcewGdmsUjQUKczTA1LgbuikZ588HnFuAvQkyeBz951xpjn2D85Z9TnEjaQ9gVZh9Nzwxi3p",
  "key14": "5Vbv2W3VU64wdefWyhVJSzBzepFFkH5ooQSm3iwnV3TuPf14Bhg9ZBR4dGMLWXg7Y6h6humi2CTxj28w5QLD7hrU",
  "key15": "HzoVoXSBatwvW4fdHzXGCqSRoLNAKfx386wmX9ejnSay4a3rUd2ismxTu7DRwcrKuaRCWWgiLEjrXZzwKX1Yqes",
  "key16": "5XRmwj3e8eqntPt8fRXTyQZ1hcrfizepbk7rUuRdkNRLusj48KaZqauZRet1iTEMXmYYRSQam6onvKJecey9sh8S",
  "key17": "9iVoyoELLerfKynLwsLXLkTX1Sr4nwCCKsTFPqJ1vLo9c2B8tLxjtZLgNZ6EPRWSwrp7QZshqkV7K4zYu1psE9s",
  "key18": "4C6MnCMyyNfBgvURKtwPbNHcYj5z12UsCYGkt2ftnR4TEEXzzbWfS3X8hzYNr4MnYvNiLoqBp1JTtTq9dYGhKxbD",
  "key19": "LcErvJ4rXaHp26xYdqmbHS6GTLHEd1BEyEJfr6JF3h8682YDTFhmAxJx83r3s65MDHgRGvro4b3H1tUSSuQVMsg",
  "key20": "4QBi7BHKSm9ZT3CbU9VqDa5dki49QdC9qCrKYvffXVLnX3AuSv8eUh68xeyoSqY4Xs9GGja6vvaoDiBeWPq6YzRb",
  "key21": "5sS562WhVAWqUqot5DCceXstEUcTdj8ryhxspHopLkEHCEztN6xr4avWPdAdXKEBJYRDKAhTLe1TAQyFv1T5JE9h",
  "key22": "36NVYJQqvQLwJf7hywJqXZ9117Rn6qnQ6h5Y2LyRUhm2VVPSAPbgECXD9ukf4yM6PBJLKZ9Scpex71zpwfwVuhyf",
  "key23": "5JRiUrR5pgjkX5reEmcGCJpsXxk2o6NwYR4vhKj6rZcybpfgyc71HqyWWNxRTEEEjH7JXLA8psXiRmkq9pRRNyk4",
  "key24": "15FVg9oTyQYKoVFDxXvBDidTZDTocit9ubTzW1z7GXEcESx2ohx25V3SWU64StrYLHYBsaKaDa82WrkL2VeFBC3",
  "key25": "itSoBVLjtS97ZeRdHkhJNsqanbWw69nosp5VTP7LiiST64dHCb7cvyhGNym3dJ47nDjGeCZYrtYoSGCmb98fBiw",
  "key26": "53hv3o98qf7zmGyV8gD5b5sNjqftg8tHbHgjHZEN821cNwtyuYNvTDov8KRRPyQvnmm5m5wkYbk2ybQxvFPkPv5K",
  "key27": "5xDS56Ce6EjL6apGQzjT4CYysBQqYE1vZ2MC1cTYNz1cS7raUN3PtkTT1xGsZSeqQXb2sB3ueUKFy4YyPu86ALJS",
  "key28": "SXEX956VzRWQtkfow3YABJZkiWBnd3pukw5pc5akShYMB4ExLvzDQv5WTwWjibiDhBBzDEkeANgQz8k8iyc57Tj",
  "key29": "25gMthxTygKv3u67Wai154DnHLFNjHTsVuFMzUybvzicbVJftmYeh69EbdBfcd3CeH11Gs4fDiHaDZFQC1xftZFz",
  "key30": "495ZKgRJKRac7oJQzTTUC5aUZDbfRxW1v9aEkcZNo78dh3RyAgXRhgvwdfo8asPiYfK277U6T42XcLzeEJXsUK14",
  "key31": "43bUaZiDTwq25fL7UPRdntuoWZ8zkjrykJFZxUUHrTfznEyvhEsfuEVNvb6dS5PLnPnK9kCj8NNyBNt8XUTJbd6r",
  "key32": "58gkfTEZEAt74HBh6NfaqxtKAFYJFwvx2chjAAHhSKMvsNedfsd8GA3QuAwoBGdsAdAs7FuFbZK1DFpp7P9A4WLH",
  "key33": "5aEHhHCoK2M88LRSYGCG2H9beX7d12zUcmTBqYFHZQE5LTSaTaRDWVHHK9nrG8ckeoqpVGvxs2zoox3385uWYGwK",
  "key34": "5Z5kxx3nT71tazw6VRTiw33qAtvun79wPS2W1uqjrorpyzHbhmrmdbZEpEEQCUn2Gj4KmjPptPDzuowbdDDJRmsX"
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
