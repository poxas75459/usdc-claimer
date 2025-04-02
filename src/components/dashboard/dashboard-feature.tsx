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
    "59GWijE64GicmrNxyzvsc4e8bN3hHZnwpJQds5bgMKcH1Ak6rgAMD2f3JRwPxRSQEn4EjCXowZ1xFp3Pdqim3Dr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zoWMKQJS1SVp5XUB7PbjYPXNPyotymXdU6V3K6VDY8vkTGaa89MZLMp2ipkEuSYE6k2G5tby79KiZYTw3yo5Rim",
  "key1": "3w55cLPHg7HdPDxqPtPoPBzsVkN1rKxATYcA1Sa53D5wpYzjycUyDrru7uLKo2gDLVNH5Qz8N64iZsko3NCgtNP4",
  "key2": "z6b5cxBr6uRLfWYLhbWpnXCnMjuFYiKhBsg7kXKecrcdVqH6EnfCCK3bv8ANzBgwKjBiC8zY6RXX2cCPkHmw1mg",
  "key3": "5VNBpUZT7wMD5fSYX9wmm4ReeneWiHijLjrNhwUZrfpT2tjZLyXN21iKVvfWgc9H1sL1prQqZLN3SWoTyDFwWf9B",
  "key4": "5hKiRyeat4AxiMNQqvq1d2gcJTNNYRHZpDJ7YLCdsyEzyxAaqzZst5G7zj6sahfDix5rSPJ75sHV6jaAbga1tEXA",
  "key5": "57QeqFuvysPgwbbnYSeW6XPfq2cxkS9TuPxZSyWCYioEHT3kRgGvsM7LXNfZbGW8TeDUiiNL8sauyZA1pvg3bH7h",
  "key6": "3cCGj8o9dSrqvTWbyRc6rLgtkucPuwkahcuy8nXw1xP9SwEFWqSTDnWzmWCYEycmcBwhamNBnp3KcxSeobyYShEe",
  "key7": "3bp428V1VLXM7jfC143XevLCPiXZjpM8z2s8pSvJrNfJ23K1UHYJ7NTpacG7DJkTUWTF8vqvUe7Q5TMd9SgD6nrd",
  "key8": "33Mo3MSfjrcAZ6q59APXdcAFDj7pJo93XomuJrwQZ7AnCEh2ZZsRwNLn5pf63okTbM9yFXqx5kyXdnZTJeTniZ3r",
  "key9": "5wbZ8SpytnUVM5SuNqAcYh32HP86BCJLZ5Bn29QCBdqZnLzR5ePnyLegQ5MqDy4zeQxiVV1GNbS7MHcC2Qriw5NB",
  "key10": "3yY8vawXPR82iXCKFtyMpQtErtSpa2RdXYgQrfXZGtbHxoUaZEi4St4tv6JTd3H5ABgGpnGDqnYqF1QRmyaJiiC2",
  "key11": "3N4fxLaihPFecF6kKeNr49uwZX5kebehaZ7mixvDzSDLWvG4fvoKQVXKZwrbRHr9q2hB1TBHvHnQ8CEgm2QHKiv5",
  "key12": "4HVjdJxrmVStm2RKEpmH3yzi9BGYsy22LyeoFGjRcvjqjFZ6oQzRu4awsdqDfMmGfHXV6wUKttNscADrJ5x3o5J7",
  "key13": "3jTNVUnfFj5tncKbcUeuhKEMK2nzWeTqyzva6mTvtdTnMee7V71iZgsvqk3tvpYrAKjH22jgTZmP5SC6dfknE796",
  "key14": "2opc3zkdhQTrL8MPRSpbxsV3RJo73dt8i26VReiGLbDqFEMMChBuST5nahQ2Mi1NHBa6eauyQhggZjE5KeLUzKjM",
  "key15": "5ih21hvb4yX49mTPRjRDuuUfTyGPsbt32osmZFocg7s5QmV7KVdFpfwSKd6BDb1m41Gn5qBhVR3jZ3CxgTPhaZYN",
  "key16": "5swZk93BYKF13kT26rqezTYwqvxyxQY2S5T85bUdGNp8sQTXQkEAmCbEuGhBpyXAiuLeVck6d7fcTYdSShtua1fT",
  "key17": "DMnqgHo1VrSjzwD3g2biCatEinuaYj3WqTedmpazrhe5oYVRw6xduTRbuu8UFRey7dwPVtozzYv298g1bfSH9Bw",
  "key18": "429vwkT8Ki9Aop8PczGz1XLYi1G2SnXvv2rRkdbdfE5K7SKGtBB3dsJCwG56aB2dCtxTgEkjLVRmHUpG6quwj42z",
  "key19": "2e5yLhTqnsweRoHdctUv9LBxZxKdSSE5Gkoyx1wq5tnS2K8Qs537V6YM3tCGVdWjLMMxxixqLxVN2ckDHQBQdtt4",
  "key20": "4WSXhcSY9eZr9upQHW26Rt7uGbXLPwcUdaPpQ9bTJtbZob9FMsmELcRxUcrvunrgUQ5X1vbhUxhvPMdCnXBTwmi4",
  "key21": "3ZvmjxcJmmSLdMGquh62bCyBmRF97Lvm5LhnNwt2TpEfpyHV6KkTeDfvShGFimRVJs5d9y2ha3cST9zFoUziNZK4",
  "key22": "2mWWYzjQPyKEaT7vUhwjFNfmzHfzq7kpbpJGLA8CqgV3SV8cjzuFvzuJ2A93sqSGGv7McbYcM6sEg5zbYWDKZyzL",
  "key23": "4FTGDCXEkACtUKL1uWEm5tqmcYg7JTFdxGmv7duf5iU2PW4G4mj7KxYmno7aBwDyQArpJ2oEzf5Jgz9bNVJpJXqz",
  "key24": "3c1qbbCJ6i8wL7eJ9FWvwj9u1Yy9eVpk38P7mdcPyPsnmou6Sr4DedD1xaymxUnAgadSvQtvachxrYYGBTRUsiSQ",
  "key25": "36xKd6NsabCxxMA3VY6qMH6VNtpRqbDgRsTStNoZTtSxMLTd949G9HZPXLpX6Tg9ZLLFnCoqCav7FwkhgFNYZ3sa",
  "key26": "HgjXoo1UGHs4nXAdvDP2PJmwCkUWMxDBnMRcuUzUJkoGBfn4BxYVcegREaEWUxDU4uNLbkPwyqeG1wNMfTtUoGn",
  "key27": "WfX4YGTN5Va11NTdBK4DLxVr5Wvdf73566vg5Sdtt4GX92MU4L53DoGPRNJXFyKZ2mLdXQssDTApGCqwp4gdguP",
  "key28": "2LQ7G82yPwHJasmxvgY57Sjinkgyt3gRR67L8ur53X6q1auJoPPmh3TjdKQtWGsLWLYt9NF4z5jY6x9m32roWRGh",
  "key29": "49VddngqWkFrP4NEZ6DU1vnSrn9rA7VApD8zKUn4CFJDn3w6Vrz9TuWt8QhprzpJA3JFqVcyNHYzkASDGM4yY4ci",
  "key30": "5Zz7VHuYLAUB6brPQaUmXozZRSx9dgkCkUZr8MQzmKBgR31Du5pPaGoh1BG2Cu61ZKWSMFVLMrsbYcGojYUCvykg",
  "key31": "5XTbFiTKxr3bp9ajFjemd68DqBtdLZfq4oyrX8mWWsVsMHgzSYx6uaEHsTmfYyzaVMuY6E5TT9stEKnR6sqgo3Te",
  "key32": "nL78Xv1FSfvVL4RLstRuBJS9rsAcn1bTf9zQUtHAwpMFrquSY8ZWHQ6SnueZm7CvS3zNEwa2sMqET1ZnLCUvcYJ",
  "key33": "2HBabxEbHK75skLokzS3gtxXCTn5RGVhj6TtS7D2rpAkVcDfh8JQbQ8VevtY4mG5pmbVts4wMEVNeAw2UoVC3NHm",
  "key34": "4481CJfr9C4jzFDBPpC38VdXHCuE2DT5yrnP38DrVfN8rQVLY4C7RV8EiSr2REbRND3Af6UcVB5ERk9EXpx5tPae",
  "key35": "5cBJ5PmyK9bTLk8Cjyw5bqf8TxrPmZFkgDTfi6kL5keitNCxR2LUEyxxtricpcFLN3nu9uBz1cTn34n6zZsZLcZN",
  "key36": "jQvY9kmyVcQ27et1em3CrzMm99yqP8cMCMHapNzEEVYH3QXHmaxeaJFM5cDBavSMaNaPzPzBcRfYBgC49YJFkJA",
  "key37": "3Wmtmx4mrxaDvKoXZwxVYJvEGiKzBcsjdxw3Aep5d7VJPH4FDTeEXqjgYh3m78uDtDc4cniGX6PXV3zkSqUmahpf"
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
