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
    "3iBE1PeAYxjrVw9BBtmM6o23w6NUSp41H5adQmQepc1UbzNDD1wbBrEv1bxJC6ids2cP9AkyJQKCY2Y53Kx6uqxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUWUjvpahoPgmbmcqo33TLENNNhpDVzVj1MAeUdUtT5CsYFYEzchvSmd1fvuEoHu6ffTuufSSstjZ8sVgyvxuZv",
  "key1": "4QbS6gdtnzDQQWZY8KU1DfXYerwTp59tAG2wttWhQ9RmmWqjkTAmpLK7sY4qxbgSp7who3wPHDXv8J7RECWUWChN",
  "key2": "XUf5j8iAz3pe6dh6fm58b8JGBCnjGyDDG5JSGo9guyjtEdmJTUwJoLNbfk58NRad2Rbvcv8adb5mSKZGMNkdEGt",
  "key3": "3GK19wT44nLz3DUAMhwvrSNSpL1Xd142zFSQxD6pEcAigb2gM5bSeiXbEczC4uRJhg4hQgbqpAavNoYNqtpgD7wk",
  "key4": "2PXqzx4aWKEUPJ2hYAEHfmfcCrcsjDkHr2rmCkhp6jiTSDFayzXrj9sxvqf2TahAqi7txuHqe1H1U28mTyEmuhEu",
  "key5": "3dKTs8ZtSYFtvGTaoasdSK6Lynht3TBTZAZoGkkv4q2XyNM5NbdZepZ6PyQnoEw8hfKrHHUxQ2UnbgUEozRykRZZ",
  "key6": "2FjuyxuauJVtbinQydyzfaoQscCVQBpppExKcZBFeCbitzKPnK24fmR4rUwxG56XnAxmFN5LNqvxjp5ms58sRuzy",
  "key7": "39DUcscesQR9TTz6bxdfK6i2Ynn4ZL5SGxv8FnkPyQ9e1L3FPUGJSfeG9NAaJ5o1nG28pTJDRxc8vAFtLwhxpee5",
  "key8": "4zfFMMf1bB4n8tCNsq5CGDRTQJaoidb5i6dWWG5cfLmyT4r8Dyi8seBb2EHGW8hAwyqadvoQvRcSjGnip7Ky3GWb",
  "key9": "HSvpggZiQHPJd8wQwbcqrEe59T99WVEwgYrVbah29ZdSqrkgyQML7Psx6D1imMwMpBxmG8cw54NdJLc3RdrVrQV",
  "key10": "zRxrg1Y2kDWv1p2xPewfrYGHVCcqnzZgVdKYquzDhR3AJ7fTqBeuQjGH5biKoXFroZP9ZqQVrTLi22GMMp61Rfb",
  "key11": "2PTgyYRKmPHnYdyQRjz2JLj8ZcuYjF3YDsLAoPpLi4tYz6fR8HmLmuaZJGMXGHDBKET5m9BCdoJra8bhR9W4uzc7",
  "key12": "5waQQx7ondc28mo7D7tgx7AHpxRQ1TErDJdZZYHcgfEAaQ7ioawrAkwjqUDpUijh52wsMc6yNjaXUabkDPFRLt8t",
  "key13": "xvZVkn93WAgMqemMEnTaTdX3JGAeRMPWFLZ6XMHSDHFBLntoSAisG58a61V4fS1zSfKwMMP21s9otozwpG2auPf",
  "key14": "4MATrz8yXWh1Yr7sLcnvE5x7m8rfZ3eMfvqBrJGKsjdh3NZHSMhfyCZGXUtHkohkJc5mvEV7nDpvdRCY5yP8CiUd",
  "key15": "nMnrKsSFqC84MwQfjijHacEXSG4oNvseYbdnDtgf5W7LvvQ2sCoew2kCbY6LUnHpYKCKAe6HqGTYJnUzsTfZ26j",
  "key16": "2pZjRCN3xcELd5jT4dsFSPM2LQt4VcQAgj2usegpr4VuB9qm5JjSgdNDz2g5Sg7RiXn92Qu9GTxL2v5fdtSKJuWe",
  "key17": "46kESCnyaeWR4qC4NNyCG27ceW2t9dGiwyq84GH8cu831AwiUwi4CyCJWKU8HGaMu95d3gKcLnekFog8JuuXkTnp",
  "key18": "4Fys76U6xE2m9TzTJ6T2KHui4rpWNhUsm232vNfkgNvHqrdbAeSH3iJsHbpFzUrAfE9xkAdDaKsMSuNYPh8XbGLZ",
  "key19": "5v8EEWhZEPfkCS1DZaymadPiq27mytUtVWuVzuCdSXBHghxw99Qg7ysJ43fkAJ7QXyp8iER7PggDshrGnFFLnEyp",
  "key20": "55kVTV25C8WZzA56n5c9mrnZ3NVnKrFHADRm4jCudDGy7GBxYzpN2aRE7UeTwLctMGDWZtuq7ANjcVAjU9viMenK",
  "key21": "2UzM432NudmCAzvDdBcVSNuHSycRc2jsU1FDN5UKMcNJCrUSHqwMU6pCJCj5Ck4SQqEh8ZTG44LoHou941TEzpZs",
  "key22": "2VnCMNYt3sQj7HzsPE9UQBGG17KCXEpdinWaArvRiGPVrLUr13CbbjTLkjMhvcGcQ32vFpPjBSm7v5gEfSxWPQUL",
  "key23": "5ezCswLzwDP4giEbfAoei8XbSj3jigbdHKa76wMerKgSbNoZ7AFyAadBAAsHcVzGL6ofK7CjUdty4mtCKi3G4zne",
  "key24": "23ER3AhuM3vquooDEWkDc89ybLT1pYUfx8QaYoaMwChbTmuhPah3GCQSAAyYkxPdtfD99DbUoLFbSKm6tjfMDqgu",
  "key25": "5hHwqNKYiubg1jRLVKZcDNsnaprc4mhFg2FmxxqwwXZT2s5vTceg4ED5jDhHbTAPiapPo2XDtpgoyAxByD6gzgjt",
  "key26": "3LYFBQyY3ELKiQ35Mif3WbRaXXAcUi3Mmw91fYZ2diGjs69sZ3insfHcPt5za4zkSsSJeamdnUtM4CDtuY2NNzSR"
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
