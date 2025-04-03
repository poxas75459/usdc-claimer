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
    "sSUJTSxS3guP9wr65E3LUMAXTaH5ZsYe4xReRpjrmEcwu39Yc5wAEKHiKS6pBq67LGtaYWYrzSzL1aRdyLzW5QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RTc9C6P7CxSNwpFKQcnHG8UwWabx4HSaXUMBzDQqUjQ4QpXZLMwrrFbiJWHbi3MnUrsFXadJaBGCNxjPhJXhQa",
  "key1": "Zs22ddBPNvZcG5YrHSPWFBxLNLVtYeyBPC6KAkutDjYBY9gR8gAMdmfaeQf57mrAGyNNE3cAZeebySp71dk4h79",
  "key2": "57zfyvQgsGPEE2g4Ri1pgD2gEPxok35M8t6F45X4w2x5SHWGNfUwMmXcS7dduwTcyvVaPEXDd5Saz2Qe28q9N7Ri",
  "key3": "5YxmaiAAhEVSC5mP5pbc48CA1hBbXjbjvi1Yjsgn4p4b6A3xM5reFVZxSyv1oZSJiE3yGEwkD4wpfJ64NDRGSsTU",
  "key4": "3kFz7oGrRJB5ynCRFXudF8maXNaKRxvUFz7iF338hMfAvfYyYD3mwMZW5QL5AzBTC7oKiVcF9gcLVBt8zg3adrX6",
  "key5": "5V1z4c18KicVTVHLeZg71o2CqmwJ91uyR4B9xsXVAQndgCjcujRuNmbPSpEdVtVihgbsDZUqqSghDhWaG1g4Q4ij",
  "key6": "2TMkTUNSvDsHqm7c4Ar2yrHd6ZKjpeUHEbqNTn3J7VvcLvNs43Wmez3x8Fgn7S96kT3zkUMWXAzQ84WSuiQoqmPC",
  "key7": "4TAsyfZZJ5BbkZouaY4Zq2V3sgvt87i7Xpt5yAAguA6rRbehWMyVNLRxQgRRf65vgVeK8pNBGpfoZPiJNcdSrGGT",
  "key8": "3ksvq8sRy83vgFKPL1ZJjL7APBarGhcxrzUQNGUKgarqsLJikYMpMRj4zuYiXvpgsDH2UbVqzzfrruU1njHg66QX",
  "key9": "512Za73hHspVcxPfeLP5RfRgo9fTkdKf1nnDAt46a3WAmxMaeauczyY1uMyUGnA7MrKuQg7cma2Gs5qy75kFhdPG",
  "key10": "4Kw187GLED2yJLeCqYC6MD8CCefcbjW1EuDPcMtGo2jB3efffnav7YwQBiuCHKC8orZavLGYFSUsBwnQFxynrTF7",
  "key11": "3zsKBJ6iweQpgNJqduXnHQ8MbAdotkKZ3n2ieNRePukN92DYLQZf6EaRHXkU3L6BGrBiEY8ZHcdCnqRqP28sbQVV",
  "key12": "2stRRH92dV2U8wwSNfxrHDmFLnMgQ9vSj2Uhj2nhxngcjgTAAo9s4bYTk5nQ7REDPqhNkVx2VA5JaRtBoAZRSJHH",
  "key13": "3jfnCWK7TSV835cdEMB8vvCgTeiQjky2nXbVzKk6mdSwUQPCwRJtr3KRgUmjrwusH95nSeS2zu3aGT6m5xzaR1sX",
  "key14": "5e12HiFHWr3vruAmfPYHh6JZ4D16mm4ZL3GuRhSvD1DWZwteTGJG4LZ3cA8sPjq82iQLZN7kmVvP3dpkcYk8dF2z",
  "key15": "4qLJQXevn9jDTfxFDWirhyDaXjs555rhhFFbXSVTM7seHSq7kMF4gqbBntQ3RJWmoPXG9rdEwc6VrD63fxMySZZw",
  "key16": "Hf3krLmd7mrf5Ji19gP4mzEE6kDkh1ugNJ9gqzhW3LHHVNLKdtuVboe17yR9SfKxRKG8mLkeUrwteemdAYUh1Xu",
  "key17": "4ioCysCJQot4XzZLtNHmJwhsUNr2XUsPGrKfPC3tnSgbh8Lf3PLc2oX5HjaRu4gTLdbBE4WZNQDbF4i6f7F5nZp6",
  "key18": "35QhQ72v4TALYbmWyLC2jX1uNYtUrZMGGUnLr4c8R9mDrtDKB2rqsSBTAsjqSEoEQK6m7pzQgqtjWve9GTiFGZcm",
  "key19": "3ZfBc5Q6sHC3s5oh3FMUGnJNqNUv8zZnDXat8yM9o8a1T8jyWtpkXDigu1ivA9HHPVbFidSCZkZx9YJ6nZUNf9ui",
  "key20": "23XLuNNKaouY5NRzuVu7xV2cY95DjgxsCuJgfpLNnNCknQzhVyeeiUkC6ukCcUmM29cfB1Z51ehxreF8q3ZqyiSn",
  "key21": "2xFxMovMWKPMDbFPVYN8YTMD4XspYYeuyonRgKfrpbQjXG1Nim6cmiSiwK9Sz6YeioVGaXstYt1n92C2acPrKwFb",
  "key22": "3NADxJJgHbKKHW1xF954J1N9Cppk4dTqdA3xxWgrZnomvQNAmB3CGyg83bAKTUq48f6HzQm3P6t8egKpDgpDmkWk",
  "key23": "4xRzU4p9h7jRHQgtD4RVGJESiH4Lvbny2SyYjR3UqTeiGYenNTRuZgM7MEE81f4ddp35By17AwbXacBBHVwkMgrZ",
  "key24": "37YLbhMgLsEMVDaSBY9peqwRFirFZwiMCN4npDLCrxkCA6v9V7VybMZjV44MZjRHXLaCPGLe25dguAtaGnVhG4kN",
  "key25": "rB4ZhF7ZTv4F5ELVSYNLdvtpTW2KcqoqjMjnv4kQEsvadNpP3xabWimdwP3DRueGrgeyuMFMmvyt4ZaS6nSSH6K",
  "key26": "5BMaJ8z5Wt5jSrGmcNkh8PssvcLqGbrJFFPqCTMhwWCQHo5mCcEYoaPBNx6kxWJFy9dHB3Sqc37d9dWx7y78Ayvq",
  "key27": "4AE52owuDCXSJuP3wQg4ETM5hu5fkAkfC2BDV4AmEW7g7mbvjShLTGhgS3bp8tGQnSnmgb9UPwbWXCQJ6LHq2HkM",
  "key28": "ePw4i2PeRrujNWTPMNYw19aXrPSnhb7CVygssX4VcxbQLmQUE6R4WQg4CJWAc9PNHbRdxN6FWyZBh2Knm4js9b3",
  "key29": "2feRLMURaZnzh1qZWxbzVRnZpeCutttgeNERRzr8iGDX3YNJLAhKG4A6ADnQ61iZBPVCF3EXf1MznpqAYXcYKYxf",
  "key30": "2gk3M156kNPPEa2APbS7oqkjxMyA7yrdbpxP7k3Fc8m5EmbgFzVY7Hde3qxNocGLSoiVaw3jtDNpZdZFYGVstMi",
  "key31": "4suHV7yP1vEZagVSFtzyw47GX1q7F9vY2xYp9NWgithDFeWHC44umEs2K3Hr7cJCCwPWHQ9f3NaemtpbKJAv9j9s",
  "key32": "o2Q5gZVU3aENykmzTK5dWXxWdZj8pfXdHs9kknCqyqxS7nwgfJX9vDMDqtu8WKWLp879YJEJbQQktLywGuDExoL",
  "key33": "nKWU7pNrXeu9jjhqDfmY1PdRf42X1KNz9PYNxAEVrfeuCdtxUcSAWHDBGjHu1Phbqge1jR26R7fZRBEygYYbgR8",
  "key34": "5LNQgF8CJKkEsz1xCsm7FZBzAtvDBtkg96d2mh7mEirLBA9Kxt7QkG7giVDGsnGdMjECumV6D9QhFoW3gs8m5VBj",
  "key35": "4qNAC9VkmMFZUSSc9BP89rdm63P5zk9f44ysYqKCN5juXU8zmi6LUCHtq8Wokx6fPaAN6DBdnXVh5MshbKdgUTpq",
  "key36": "MXktToQu5NvncVqGQSMzxpw5pztyXGDgnv9fSEFCNVzvg8FQEPGvgWDAqw4UHGEYfAqYTQ19urAAAxpZ9VRLMfE",
  "key37": "5gc4EBD8Yty2hxJBwtFXLs4Zt9znpTRp5KimRz8fDKBDF1ctL2K879Yg5rJPBrwynewtLNx5pNXJd5rQ9hwz7P47",
  "key38": "4XMyKiThVonDd1tMYJVuEm6xbrV4pUhTakBU8NXM6ahv3WA7uWwLXyeydCRm28CMxesUpqbgj4fjWR3m5PXqj9Qp",
  "key39": "5qNwpyFgg5duGL5CRUhPSUhemVzDuBEjRZNFqBSAcHAfZFFqQEpSkKhCxsnVuyzz8qTVyaa7WLfxhq9Zobh96f7k",
  "key40": "5cjUin3fRuaWQJUnMLuG3VWht1b3QfAq9B7j8n84YoPoE93hJZ414R2nvc1qghMaUuD13PdTEqLB9Hq51azxnQCT",
  "key41": "3ozQbMsdxiJGTFH8SVeeq3LkwEYSHxgcMUyqrxW7JXyq8nAF5YvFcz2ViwTgwkUYGdKfDJd6Hk6Hx3UDzkJYEaCk",
  "key42": "4mnMcr6ZK1cDK8a86Bwu2Ni97A6UWwYh789nPjJX6bZo5i6J33anX5nuPX5SXUHNTgrARSNC8N6gnCrqrJM8A3Si",
  "key43": "31VxNW9LNsoHx4aKdqKrgpuqvk5HGELHwVEokVK8Sz653DZuFJvLkj58SnLyxqFk37RLmnQGurFqv5awVn8Sjdhb",
  "key44": "5X5QBNQZqJJhxv8o4iw4PsKBHjmYiFEJtTf9ngxNJ6oTZi6wci3VAT8Yqy4RwYULUY3eESN1Ht31CrcApDC2X64h",
  "key45": "3PCR618KnGr2aLRfxgrwC7ekZensWqgjMR9ptvJhs67EPjoWDRqdkLgALATFNFN3sWN436Gw5DB24fkov1RHJTZq",
  "key46": "2tgNNLquA3ZBT1rX88sGabYFJ1dGLBGEDxT1WKPb6qsnDVXDMxvNa9mGT3Cgxo1vYWwKLZroasSPyKSPkLXMj3qQ"
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
