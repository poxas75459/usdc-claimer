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
    "2y1ihfXWHQVcMPAQ1z6nWgEQ1ehUGbzGzLbxT5GxnTLJwm2kLdRR4VP7fADcXwLqJxB2emGnLe35jAcuHVH1C8Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpzdLW9jQPzk5M3jjMN1WVVSUDUbdyGcpQozB4PGK5Zd7guyK9VgWtZn8wmnvK35tqvFSfFjumztrFKjPi8RD21",
  "key1": "2zHSBFXfkG6iodfcbknKRQVjBWqVXUnC3KBcPEQYB4tkCipLwUx7VVDxHa9rxGYb4rj8mRUE2HCjUfw1QkoJFQyj",
  "key2": "46Z5VNptSXnWx7PmGV88MAUTPx2t34pqT8B6WChW1xXL8fhhb3deLQ9FRe4vPYF1hrHDunJX4DdUVz5PwPt1t9F2",
  "key3": "2DQ1uNn5PLgGboaGouMMmjnQ7KotPYbA1DDoj3ZQmRPxmDbT1uDrNekD2Pnr6CGYm56HKfpdxA3ZJNkk6nEJ8SQ7",
  "key4": "ELHcaA2bQaTjXnD5BbtgQiTnFtu5F3fXz1HeAkAAVgy3LoE1rbhD9egbx8tptj4vPBdzPAgn17A9dn9xqE1aTXx",
  "key5": "2iPWY3pm5TuGMWDJNmCyi2gmFxBgnEABCTBgYUgueCVNNCoURAcYJgySAM3Mo4xzakn7nw7LLNS2eQgiDE6fTzJ6",
  "key6": "neKWnKcveqe4coJNbZMSwFLfZfsduLsYFR5LanEtnMDcXdmKLcJQ7DJPdnqcnYV52D4636XAKkF9iiAFKEfz5kB",
  "key7": "5XPLbhqjHWpz9iF5PUyEUJQTdwp3HpoMphTgTvEdkePAkFRBySwYzsfd5gfaXSVFEyTug41QEcy9BgHqf2bXUizY",
  "key8": "2vMeuqQva1p1JBfKCAuRYgEaigBJvydinBaggmCKgTU1mh1CGda3pas493p4kx8aUep8dwZZfGer76P4MpymwtVB",
  "key9": "2APeooXUGZoQRh8Kt7PQJwkjCTdH1joqLFzG7APGjsn7tDbSpKebZ6uQ4W1udqFgbiPNuxCF8m11wcd4uj5QGeJh",
  "key10": "3VB6A3mP4YhAzKoeChXGCPWrvp98QngeFkKeJPmdbRkaw6dDkKcogdTY8DuFVAHwwGPzAssJNgejtjb5Wek1SXcg",
  "key11": "4FRd9s5BrcUdJnYx1qxQL62QUHTZDgskKtxQmyG1v2F8GkJ29nQBocKKbMf8ZcKyvxoEFzpCfCJrrX9XeJZs8r3f",
  "key12": "23W8Z3PC1vtrmsGuQkkks1eoTnz6q5jrpE7sLB9S9SJQWq58yhnkyy5BHX8S2xu8jYQrFqv14Rs3ve74SbhZRvWN",
  "key13": "29A2cnDwP1RuauJEZZufKB5oe24NPqLhsqvAzN7ymosNiwwgUAkVxhKKLDj1mfActCNr8h75vGWrwDG4BcpfbXn5",
  "key14": "5p7KASWpCLcCasr5YxC84Bv5o1rT5W613FkUoREMrNbEw458qfuLgh1s2dys1og7innLJSjRVTmXRoHGa4VKAWrb",
  "key15": "dfvFRwqpyB9WzpDmgN4B2S59zC46eTy4khWLRNEs2BAU7ePjmkR88CS3TBbZd9vm1VFrR17SDLx8kR2MatwHcgv",
  "key16": "3KfMCpWUi78777T1p9FKvUuAhyAcTSLuzbQrhcoSFbvsvHkYWxk72b2u85Kp1tVRNmJyyGF6KRGEoNv3jTrBs8Y1",
  "key17": "3CqqdYDvEGAWpaer7L9HLo9ExSSCxc6riQkRB4Sjpa4rXM6L7NrkpWjYAma4yL617RJC3ycUFkmVBPzLfjLrGWuY",
  "key18": "5sJ3Fv6w7LaM8i1BMHLHrsgCEryFt2KG8BDWPk8ZXP2cnFTjimjUZT13Dv5aHuKkggWCUetdE55g8F9G5fqq4raj",
  "key19": "5g8bXAEezUUpccEmyKABECZJ5WMKKDvgqi8iR49T9jUWTC8yKEBKx7JW111jSXMgvwy4EBF3qY6cuhS4KV1WcRrX",
  "key20": "2d4z8qzDp19qY8cGK3qkMzpWQZGAEdZ5SVysC3DkWjeXA2JtupgyotN7RidpkRtbstBQUriKSS8MJNcLV7k9Nes3",
  "key21": "3BjCfBQvwnSRwtSk4UKGUXVWgJFG8WctJSaAqcGkPvKRxm8UJgGGK7gPqbJ4DwEaz4zZEAk5SVYYC5dnmAWYAnYE",
  "key22": "21fU5Wm9CGB2Lg3RoKQWYvXy665ZE4AtpvRd6vwaWzNhTnbyamMberZ47JY8FCHVnibsgZzPcxBYsKd3fPgQrNbQ",
  "key23": "5D1Sq6bQjqD5aTEX7PjozN9RXAXhY2KEZjTTWBUjPmMN8Tk8w3JmiZQnA9WS8y8Y94ftjhYA6ZHGrtqsvhrgmH6w",
  "key24": "2qoYiN521UMDxaeLpCoNutNj3hjF2MaD35s1NpZTrXNaMpBXYNKvVn7c4HJdRhbJdsZJDaTpWXXMRME3JHkkFQtJ",
  "key25": "3bYet3XcgdLVDiWio2sZZ9UUkFStDPrUqSXeCWP23KNWuVXBZpEFomw2hfMqNAvFziKUrySUG552mhhpnNwJvVGm",
  "key26": "31AUc27im6Y1tRppEQ6bWXGQ5HLLtn3S8mXRRC1kJH5pcpu7UQw17332RpaYgTDmzULNrSurrUdSD56ujVLNP8zK",
  "key27": "5YPunLw18R1YytoEaWjvZQEGrh8TZkccBvGETkJJm1Ef5fLnrY2t61tcUPe5gfGUbmLsguzcZkV2w3Lek1JDUVv7",
  "key28": "3Tsvi8Z2s4CUSdwKLQPPpM3Dw7fp3nL5GsEuNaaiXxLZYwytFuNHXSYzZ8h5C689bhUWUdsSF5VVNYvrtzmpCCRp",
  "key29": "2PNQ8QbZtzVzHxWo8RXuHoVM5vGxkpygE6JGu7Fjopu2oEH4LAiunN3EtaAAUitQtg4iXyL2UaJLwd5XStXLU26W",
  "key30": "3JPuNbNEks3q5JxG22QHncE4s69QsfSARYy4viswyxNLztLuDSWr5VcK5xphcZLYF1ekuA2F6fjVh1ayqCvDPETQ",
  "key31": "4qoocx3YfZUkasdwiY9M5jYVXB6u58XbXSFyu5KBSXekWQ8qnpyr8KkcnroTwQ32bc3vJB5W9U7jUPeNp9G6Wuho",
  "key32": "3FKeud4uxxrPwQqwdyqbAxSgEPCGe3ymGDMovjTTSaFbZ9soCeko6ZvhPExXkMJxhUSmJAvATuQh8HGuZd7fjRQD"
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
