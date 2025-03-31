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
    "4Dy8zKLBfYgmAfoexTYGCRysqijoXNnnvG4KKgteHDaQnt5vN6fq56GT6j7JdNTYo7U88k9uVSTW49Mxr3yLxHTw"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2eTRztwTMcNZ1LsXE9KkMdvyZCcyMR7gYwTSiFHqV6qS2kWufUdSupdcdLRGJSogAsDASiAFiEnni185swzZ4ku4",
  "decoyKey1": "5fEGFNwzRoD1V4CG3E6voR4n1oBGHkXtXgXMWPV3UQ9YvcqdvmbanPBB1dA15V5w93pxeDahe6czG1E6Enbkb82y",
  "decoyKey2": "3t8W9YzuqN6ytvYEy2vyo348VkcNhL7K5zsm7BBinsbdNb7oH9g5tvX8npwKfN7wfz36eZtgBsjEMsM9RyheKMK9",
  "decoyKey3": "5E4yRdUfbx6aEgEfM8z5CCmfLvjYDzbQnPZ4GivB4oHwoMXLQL5L2w7h6SL2Bu9fRNJEQZbvw63C2dhDaweEGX9V",
  "decoyKey4": "4J3hArKtdwTtJUy2A668Csdh8fFsvsqhcZ2ea6v7JR2jY41TVmX1sCyZMifRqiupQsAwMEmKzH5rkNmGyNTtMh17",
  "decoyKey5": "4NUi966U65CHuHjkD67tJubqQVkeYv9k5kDMKwaQ9Bu5fXfXNVZXQzW5Usjz8SyUeaUfrmGFWgR3yWrLFDT1FgNM",
  "decoyKey6": "5nms9sKZCKCjqkJPbCYikxTpwYNRGfkL1fqZ6Dh3QyeRdBiPDPSsMj2oA55bPHXJQHM92qQZRbzS82beuK9aSraw",
  "decoyKey7": "2taXW5Xwp1sPaxMDXvYHf2nAN6sxQ5jjBVLcjERq3ivXX3PnJcH7KCN6pSXRrnWLzarynQaSDPNrNpcNjaPZQgaV",
  "decoyKey8": "66xBmJ8x5jFVDEKm6ndojaj8MofZLvCqRBv7pE1AQqeSxXRhFVC91PmFBungbBQ93386svN2tkGkzUpf5MDnd3yL",
  "decoyKey9": "X3AvpzrXGjmUDhatq2DnfjeELyVePbkxkGmr11iCefw7URoFgsHsMxjtXKQnS16xEcrnmgukxLNpUJUAyGp2qVA",
  "decoyKey10": "2cXuUBFMkm3dCZmQQ8gGRRU7CrKxjWWcUemRnnzVmKZzimXH1gkHSPkw6oJpXKioAkNqU4F6QiUVmG8C99gEvrf4",
  "decoyKey11": "MDRhPf1hSca5isvDY8az29h8pNdcia2vvvb6aCpn9JuYQ1gqQw6zrX7MKnvyiYVPqDqZZsxoJ4CuM7psG8mmATc",
  "decoyKey12": "tPShGffPGAmxzRodPE7pJ1zbijoqzW7EUs2GvJHtbdEyfSpozKxnj67owBB4v7N3Qw892tpppP1X3o7MJFUSmXK",
  "decoyKey13": "KutUQFUhjGhjdTKjRUz5dUkEXvNgSGWEgQV2MYfQgVq9qycPDLNxqga5Y5KMkiNvmEX4DZMsrABiXzCUCS4rny8",
  "decoyKey14": "26sFVK82oyc86dpM6fZfSJkByA4L4AfbSuUDVknnjj9pnULRjpFd6MeZwt6ENZ3Bc2KL6GgAts8crdK3sY51AfzY",
  "decoyKey15": "5CXrE1s7YUt68zi8gD1B5jUNEUGooMeazufZbmSYjBwABF9Kppb8FKvwCuUH7ArS36Uytaa9xVyLamxSpE2rcCDC",
  "decoyKey16": "sAK1MvmjNC9AEmYqbNBWdzNDSsMyKMHL8oAd6UqX2A1nLxtdvLKgYN4uuDgNdQcxMsjcTXi4UakRba75XPBGQrp",
  "decoyKey17": "3BL9ZU47n9vzojBxViZCZWkSNdwwpocTCCfVABed5jXWsbaWwRpNFfPzQ2mYmuwJxR8qA8NTB7vHEHgLH31JbCxn",
  "decoyKey18": "3ziZUpVDdTLbsrePbU31Nr9wSVKdad93eonvUSXG7gDtRkmRgmKf4xu53bcis3Xd2VP1Y8QwUrLvv6E5e1Grgbzc",
  "decoyKey19": "5DSu6cY23aTLFH84obdx9XtqBAR51joLqfmJHQBR2VtJxpDzrBxN29aXMWiJ1FW5PuPk4pDnwrN4tNd5xgSovjaq",
  "decoyKey20": "4oKpC3Bb38T95AB5dHLjT5NmVdGUdLwCR3X62JfX1HaqVWkVNDPwh9VLgSRTvPqE1mt2KeN3TaVCXyvAEMfCXkpX",
  "decoyKey21": "4cyjxoHzkfAtjApc9mh7AhwqbRMG4idV84b3JMsmV5ong3g6TPEeCbvjFNj143ReDQVx5fvNNb9PELi4UW9q51eN",
  "decoyKey22": "3mCHVX2EvAYV5rZ91YE2C6P5SXG2bcgm1h8gotV3d36pkM7RDMVEK4FnmduvNt9gu9pzaA39c1r2phC8KaRS8JWx",
  "decoyKey23": "3UydCboEPGd4oeLKtfthf6BYPwjXs5RLC9VwgS7Gb4XFhonKkJsjyMCztUZ4PRDjaVx1zNToEUryoZzXZ4UPCms5",
  "decoyKey24": "3abQoiNC8Jc193W97QpM8fUtWMQpt268LoS2qxHnuxzx1qNdKMvyyXi3PfNqqheY4xgLg2bjiEniBSP89M5uQjMX",
  "decoyKey25": "3wuKrNj4PLKzniwN36GsMbwwW6fba96Au61Th8oYDQ8PaqPR2sxXLocu6wDcjYjaPwtXvaSfknn65nAcEbVxw1on",
  "decoyKey26": "4fQaTHGihZRSmCQgtZJrJpwXQgiQdLUzjtv7BtKyNvFayM8GLdwd3GFBopwe7YLjGkcAUi4yxp6f75ona9YvKLLg",
  "decoyKey27": "4LV6iQD92zUqWkz75pj4AuBZu3XtNYZwCTUAQPQtnFi1e1Kq8xuNv6zkm5rLcNyCvntChm9WgsZEWgjSXqtWHdMh",
  "decoyKey28": "4iwDjDvYmrzs9nHvQecqmUrVWTXHwHe34HiFpcybHmTMESdUfcHDN4Dw8e9dYc1qJLqNFteKHR9NEphu9FoypT2",
  "decoyKey29": "2ubCcd3XwGyrcnFpt9pPLDkkqfVwhspwvJ5SLDVh74MCfBHKi5XvzdTSbo9V4Bs9JwSCLJJTYX7isuGm3KABC8No",
  "decoyKey30": "4YTKhXBPRMthqj9zbxDfqiGzvmPnbyPGd7MLdUzDe561TzkQNLpxv1ehwmF6cy6RtEf2VyXLDoW8yNhHG9rZamMw",
  "decoyKey31": "T1ruA3PMfUg976hMC9ebSxKLLBw4YgYc5eXn84rXtXMXSHst8z1syxEDRUd6PtnARmS2gvF2D4KkwxBtVXBKpvH",
  "decoyKey32": "3uBt8JRPWLGDDakANZdUbyQ1hAeCh9FsF1FzjsetUDmBGKe4pUog4KBufCcB6A9nnf3o5s5manqrmz2T6sUZtbzU",
  "decoyKey33": "5dyUs2LQFXT5os5j1yxjPYLB8xEYWEUJLFFa6duQbqkSznXBofmet3Ns4dnqtqjm1sFEj5CKyVYqENVucTfn2vf",
  "decoyKey34": "4LxbnK578soUoxiV5PCJBdq8EHeT6imAPJYUAABRt52u4UkZJz4kRVo8bCksCFmYZV5Ku9GyBDP4LTWS2WknvN5g",
  "decoyKey35": "2uojtYjJ5VF8GnQWp3oTHacRoYvr7iRV5A6t96dTKdgZPNLYGHUfkrj6E4NPZAN74Ld4jGPXTKEbQgonVkDzkS6W",
  "decoyKey36": "udRoepkvBpP7mWCDLdVczo5eMBL9yYDagkaDYyLDmat9Z2B7EcKrc6hw3sMJM3nvCiuSbXC2Hc8niPoePEh2oQD",
  "decoyKey37": "54Q5JjNhkU2XLFRT9hCDn5HuXN5ByYVWuF16PyfVFesHwv34W1h9rqL1XgJCjtwuKeNtPXbcbRnmMTeDfQ7i4yc8",
  "decoyKey38": "usZAoZC4NsEjiterAg5WaLewZubomeQQt7mWrxj2kmdALy8L2UUwLd2ju7e5oRkUsnY5Wr8LXWaj8rA9FW4CqAL",
  "decoyKey39": "5j3wWkJ1qaNQoSscrwCvPvBkDsnSPztQdDYzPBzXyxvsteo665MfpgE7hzmxFSrm4KdwWtUve5pXzjnMhY3yusY9",
  "decoyKey40": "4ayQ8HRLy9otKi5g7dj25Xx8YxZrhmEUPFQjft65JgJEs6DY8uFtHbK9XhK34MhSoaL6qZPyxVPMcsAZeXvrvqHE",
  "decoyKey41": "2zamsmgNvPQzeAkiNGEAwAzUzT5G6ZuatrzpfPCcxyEZV5D9YDsHkzk68muhWe1JDHuv9rrW2Jf8gbXf48qkbRpQ",
  "decoyKey42": "5ZkZSsCXbtMBVuhW7vrJZBZWYq5UXK8o8byBH8c9wLP3bdkLPQDNXqhUbPH2hirYwp2rMEhNmEivagWTD1RwvDk2",
  "decoyKey43": "5U72M4SMqEo1gLv43J6Y6QxXdjYhtFFcRBp1JDKimzTN4NLrqxh25afpmHtuUs75n5sjEhbo4rEZpohx8nQhmcji"
};
// DECOY_KEYS_END
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