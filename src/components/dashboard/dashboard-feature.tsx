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
    "4KDL1fwV82QdRfw1NojzZ8EAAyZapGbbkLHDhieXhnqiTBq7WXR2cHgSbj5xiSPJNrpjz7eCGnvE9dpzaU6jtWs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGTVz5JpzAT4crtNSaBSNzss13JLvobfqg7cSV8bMGhGdwSHDkmUqwQR8CVBUVNsjSuxez9gkzxEodC1qLfP8m1",
  "key1": "54Gmdh6k7KCYhA3tecHhpZ1uk4B8aeZFssUaLzw1fQAy1XfG7wz94tZXAtPd4o2H8DqNuiiVgu8egYVetdpaEfoC",
  "key2": "2cNdpRgxSrn2E8zC5SQ5VUPZaaVAjPqttADDjMGLXB4fe8F9ar1qAfbqgf96Eqs3uuY26roiCvA69DYQF2YsxHv2",
  "key3": "4fCroUBdFhKn2psuiTPUAqEDNyfEJT6CzjoDFBRMZfyNWupmwqvpT74uAvsCe2cnKj3AYi3dUNMGYM161L8ufo14",
  "key4": "3SjzbHdEdkf784VjfURbEvhLFQbCVwVdvXbDHSiKjRxR2vTpAZknkDmLYHu3KXD1HKYg3rBva3MCMYZ5MucXL5NX",
  "key5": "wy7iYijeTifZhGfPQgyd2XNUZKq2TdwPav31sEuzqBLEVxa7k7tH8EfxWVHyga9wV3LSyPTGNW2YrjkLAsN7x4M",
  "key6": "4c2HrzN4H215BxnwDaxjmmnCRcckB6XDUwR7xvEaFbnfCVFqLymKXKgkodR8EkkRbmgCTgUjXgwaC9E8qcTwJiuf",
  "key7": "5qEkJXZ7KgEWEbXDrQoFzp8C2MRMvspAEMoNPgN2vxxDxE7akJa2dhshdMA34j8bXPAwr4ftNiMbtQm4QGHFSJbt",
  "key8": "67U365SBQGR7jK2fiw2eUnXGJchHGCTXwPQq4G86ABFbudjEDvBCL9De2UWfmEeJkUtxJ9ZdLUWc6JvXfJySnviv",
  "key9": "5NBqoVy5yWiaPFuHY1aAJD3NbT4yN2SugCkGbSvnK4UVDjwt2xTuSH3NX3fGvq1dniJcq4XDtDrGDc4moi7KknnL",
  "key10": "3NNPrTLyp3Kt4gPgFkotFbEgRArnEGUpy9rjBpo4cTn2sNUUpVp6LBGBWYJHJz3WiVCzBtKZZuAaxL4YLWTLW8nZ",
  "key11": "3nEENNKiLXitDqCPCgoC2U6FmnTB5Q2rLnruQtwD1YXLZkrSuzqUTgFE8UWbx92oe5SNhnj71LAsawxCQWWXmdmW",
  "key12": "4n7JwebysQGjGEF8HHrGvWGxXvEWsPeEj9hGJwkaqB8wF2DbwjaHQ1omErDHNmSoa9BG25ibCjEfbVtvRQQJH4Qm",
  "key13": "36tvEFL7sWw9waWYbfBzRSTZzhLc9Qq3kcxGhuRTFhDUV9mFVtxgyMdeBByPMKZ4gcyZmAcXjMXRUGBqScRPHAw3",
  "key14": "2KWHir2ujUhzmd13UAPc3oRKv66Z4WGjwTGn9YybCXMukAnMUe9nWKGumN7afaXpmxv6VLoxoGY7erMmJma61dBo",
  "key15": "4QCcaN9Rf8kHWFKJJDv4HAWbmr4ZnGMvekAS2X2bRzanRiDuLadGSkdnuGsfc9AGpLWg6NbYE7cB5dw5zGzhC6n1",
  "key16": "316VUoKtWG5fX7DtxYqWiJr5K1E2TvdiCHEVxx9K51m15Ps2j45PEcwh2FGrz3uM8Zbtxz9ojF48hQRcrtoV1J7R",
  "key17": "28a68PZTZXufgxTAkfFeQ3t8eSh2peSaHMkRy6F35vmVaFh84NgnHFxkiZrtdCvcoNCw1kk5xPxeBtFieLt1MFEC",
  "key18": "3wcQqnEsR4rUca298Rj5H5Vc6ibjJyh3e1Q8F2jxYimvVM6YHDhLNhMnxAj9dEjdSde4dgXwKXQaYoxrVRQPCc5c",
  "key19": "67kUDvXRyXgduF1GDe15AE4zoYTxDjYQgnLodUKwcEzL9qeA8zdN8fYtzhxfsVT4JTzHBLJFeVkPrKFpL1xFsrSA",
  "key20": "3BiWqPF1KW7yoCmaXBUoHDruDiUFL3AvfHY1jtPPixLEjfxP3JTAHP4e6q3r3K4gCi5jZyJfUcUNv7h14LMLTjf2",
  "key21": "4eu1RLEny8Jd6RcfZDVqqrvQHG3BMn2B3qfaUZJUtqH72vZD2LmZiHnSqJVD5jQNk4MmKKdyYc2Vd41pEXRssvvb",
  "key22": "3ft7VnNHxgzNfRTTRvewbzSdszhrx7eDB5aUv6PnfkEuXet7acQ3FziMR5VJFXQMW81b9XTGMBBd55H7zCC9gLeQ",
  "key23": "31EafiFBcRGkWtKqAgSjUc5QenRBioBLaPBLw3aLWjZCwpq5ow1iqYdS8qahwSsp8ZpssRKW3AqxUxk5xfWbJG5v",
  "key24": "j3Z7hAbAmt8bq5Se9nMQjyvM6NpXNRMc3J9m5cPAJqQT9n2cfcRRDkRHZystYXXv5krHNbYnwzMBaA5TSzW8vxi",
  "key25": "4NEwB8vQbiBA2yepTMQAw3JCkjVwSLMuNifsZxpTMb3jUnLTKGbHJSZFU8RHWpe9PCrhbfyzXWqEMyzWfQHX9U5r",
  "key26": "8mgvpj1xnPMA7K4e6sZgbDQ7CfLLPZjdCNZWbEHX8sCXoaKgawzu1wPPGCzcdTePWVE6Wtb4R5hWiBdFDacoAtS",
  "key27": "uhG36JnSbEgUYTEK8nLdcxhTqwRJDeaST6Qds44VLH7GqtvVHDhLh5u1UC5WjAnJCtP53GyXZW3jcGyhih9jjei",
  "key28": "5GawPs3rmCFC6SnMKe4NrYTUUTExkWfBoCH3NFHNdSUYWLCprSZjSdkVKuiVoKSZvZAiLwbN9kw9K3UNaRn1TnMz",
  "key29": "5GGcnpRbYSJEEgeVQw1pPxN23scx9S34abU6fBkVDe3ZCnjQ6MYajH8uwGKkvvHLxxeRbdT3gwb8cGb9v6hgosJp",
  "key30": "5tBa9GYoow6mPGDBk1PHBBfYfm96qnRah3HqShrZfqR9sr2tQwUUPCsjbQnN1x7MPkCJSMueWTiM8ttvESzTyzpt",
  "key31": "4DexLvewPLCoBBf9xu5dtJf6dcJvgtZoq1akwkf7xXoGDzbTa6Fx3NWFMf1CtxXfAeVEq45M7xBmnbrgfipeHsKT",
  "key32": "2hheuzSMWys5oX8iKnsw82xi6CbKaNz14rVSdsC8VSgnvMwkMqakNfXPo9YgR8MvRRNxtvhd4etwGrFNtjLL6M6c",
  "key33": "2cL9n9qJMKJY47ekVWgGa4X6vqskG3zm9MCHgnf2L8Gs2HCv16U7mMmKqfwqxtYAJDKsdQKABKdBspZepEZK6QbK",
  "key34": "2HTaq7BjPBW37wzJMaYnrfHQbmAQh64WF32jbAMY52Z8sHRhXbrxXKKsuc5Z62nqRFZCSwwrEu73W8itFf7kKSEB",
  "key35": "4AyhN2tNj8bBLhgQ3xhxX2RYjRadxAohHURm6EsDPPDdQhMRJnHZD9zWKJPtMbua4sE9WHBmVutyDZrMSxu75j5m",
  "key36": "5E1rCK8s7fP1caGc4yJ1XhfFHoSeV2MspGU6VS895iEc9chjcuM628krvkREYvBJ9gxGDJY22Y6nKe8koJiLneZj",
  "key37": "MRXGBLoHy7YVt8GaVBp9ZTgYMMtZidQtmJaodhRv3yhzTnCngkyYjy35w4tZrxWTnQC85MKEnyuV8juY6qViHdd",
  "key38": "3LXexJipRU56Ch6SXzvFWSd8FWCmuNDTsCjS2Jj1HAc6uwb5e7Wgr5u2L4k463YnAp5f7PW83NYoNdk59FjSsX8P",
  "key39": "5Bs9UCymwx2UDt7LdnQTKNgSSqdJgygKDp4yEbLAU9WdwTsUWQiY9giypPPvzqBaHe7N3XFUXozVqqBueSKZJSLt",
  "key40": "Rj5RxWUxfw1osDYP1TvzqKDvkdHcznuiX5aV4mfTyf36iUJhJPRTn6Ag32R3eGMuncFpfXhKFHk5mnhvM8AkLaL",
  "key41": "4VWMBV1rmR1eVcYscYV7g9QYijSi4DRWXm3U8f6qAbVwUou6mVg4iYic4nrtLdDDXudEsxM3J3Hmo6YoFMjXZpnA",
  "key42": "5VJrgbXAv9UYNk1SVF5LgEvvvC1bLpyKy8wj65Eqc3nx9DwWemH8wwB9jykn2cpW1o93YA3yY558a7xxMiNxLcLK",
  "key43": "4R9KYfvWNzdcLg3vpvY8PRqJuz6DkNFgFqjKTPGza7izPg1FeYQVDWFYZzpJY9CexCF891SVqWDrLvgELZKPtqov",
  "key44": "3y96PR5HiuojfZm2ysXRW4SZk7dvJGzd1Z5KqYvfqYbUpVz3G3p5G9s3RPySjJhkHN7PFEaZ4Arj7jov9Xaiem9m",
  "key45": "4hDTY5YuwkmRjp96SZvfkzt4pmS7Be6xsrzu5p2ceNdqN2EPpTRax4k6s1oTzKGzBJgpLjgi2zQGeNx5oigJhQAv",
  "key46": "3YZxVVV2CwnDWXCxMcwGLyUB2sydUv4gauDoJrhfeeRFsrzALCfRWXMbAP56h9dK9vsa9GFwq1EhHWsfLDnmdgkc",
  "key47": "2AuBGtRyqYpUUaQ884LT8aySgo5C1mjtwK2mwn1QZMXLyU8fTbPhUpTfP4fTxnqTwxoDuEUH9MzLWvJuyDvUP6H5",
  "key48": "NwqTzpNL6RRLw3MEPhdBBPNmcv1bJGm7ncH6k33C41yhEbuWijezfLTiq85NvQASHs9xZiwZTKoom29kLaRwa7s",
  "key49": "2RC26qrovnVQk4ju9Tg4bp7q5ovgdsJtL9z1d2SipKy4T4K4m7oEPPh3vAcdWHva6dWm7kdnZPMTgrSAcNh3VrM3"
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
