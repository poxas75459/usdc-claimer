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
    "125B2eYk9hWkJ66bsjprLVKqg3rcDZgwUCJ7Kbt8YjRraTxMurwzJ1DYwnW9j8c7xWtgxZuVuVCmsaXVBo8Dq6yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvP1tmFzpxP9gD47y2LVnvihVDR1ixj3RcKChKTHtVSxWJ5TJNZoZg3GxqVQikyGPEKT5dxxwpGBkDrHBkyrPTu",
  "key1": "2dk87x2aUM3k7FHGzMojznxZ7aZgUfB7Fyp5rCGJ5jTtZAYsAe72i5Cm8MfJbuCG7RJi1iD35Uk2cbH4ZyA3XtLs",
  "key2": "5wSWVXb8C81j9evGKgnDXbo8maYN3JmPCK9bWAdaWBcHuYa2J3eAQjW4VdF3GGitqD2QtWVsddvLBk7ATbKtEbzb",
  "key3": "5KidSjjiDL9g1GBPzSdSpYwkPAvrq1GdUeXaaHXXVU4RZvav3ygd97MZFfgLuj6qPrXSi8vpk9tQgyoJbWiTnNYy",
  "key4": "2ti7K7ENEQ2EHsfBKC5SCxqy4uE8s1RARvPvDTMmVagpebGtSr9ai7YpFa5q8JwcUjZC9PfzBYgraVxDnKLb4QD9",
  "key5": "5q9sS6yCNhtuZPKZFPW2fxXSBmY7Vk4GgnYsHaJBx4Z3zgrW4Tx5Kaav7FDkBNuYBisgvUe8HaKADxzS5qs1Wjsj",
  "key6": "2BdpHdYcZA8tsTxTigBm8voEDqcxUXdYSiw1P7LAQmxNDg9oS3t8Qc85Ka3uBQzDPmBpvG199pKNnfYF4EZ9zG3u",
  "key7": "2frFpZ2MDyGkFHAkc9evqrEMPjkkD5hPAcDUEJcSojnTJii6uuGv7178nbooXhm6DEAwtzTeh7jPQja7Y2FDYLoc",
  "key8": "3cdWaim8DrhJeJzXRvNxTiX7hsmR3LKWxfqhLiukNnznvpoAk8b2ThSwSnxottzSEVX7g5W3ArwC2UKBQ3v4MM9g",
  "key9": "2Y6ipAzsMBgfT5KbKJFfWRQGs9G8yx4uPW5sLExf8n5VtM26Qwyg8D2Hxf7eRvLKmKXBvDKrzAD1R5W2vyw8jiNm",
  "key10": "4x7DZw8Hr3zarKAM6bXzCGPS87sWEZtJRvBxxt8XnBNeffVMXJzyaX8mgqNPCzoakrqwFPkffTtmwvTobJxUXh6p",
  "key11": "2N2Gve2e7CyPzTMYWkfEpJNGvJpz6gzBeqpzdSifLpCxmdV3TNgBmDp6gPCp4sBSGMSxxVAsCDBHT9TExHo1GP7q",
  "key12": "5mm1eZuJMGWgq1AtozFPH5pzrHykRpRSXNmUJ8e9SVx5ng9PumYAMiofh1DDBFVwPnxkD8CDqDV1YDJ52XRwQzHa",
  "key13": "594ZUKQBv3ibbMMpd3XsbrR77Nkc37actJB7u27RwPbQznuNdfZBAb98N5uenvaPB8aXZ9VNirjvzJ3CMbuMNbJc",
  "key14": "64KfrYXhjsdPy3Ch3euE7HiYLgTc62KsWSgFFuftaM2cSCALPzCJ87VL6kJy5HJAp5D3UKQiyBQPuVb34zyEcW1G",
  "key15": "3Tpbdsyv2rdieCMJfvgoiiQEx3prbB5cokciYmPxidXMVEYteWLH7mq4w1RQNsgoSAwFASeRKTLe3g4y19Acwebd",
  "key16": "2AQwVHiwaSJMwYRCNfHq3jSmWhwUaiZ5FvRMj693mz8SdmvXMZuzgUj74D2HsXP6TBKaSrWbcGtPd53BFF6B7kzs",
  "key17": "FfS7yPGbNNdQokJDEAkTt8siZ9xwZJ1SvfyLXao45EojMXndcVEgbCPerN2ZRWQbvmGsQMGUEt9NwhRJYxbvkjC",
  "key18": "2SsZxpRBN8C3xkBi8WwNFXDzQXhmwkDTA6FkY74naC2eFPNBARLJQEFnSK1U2KroXoMgWhhr6GDAaxrLucnc4Rce",
  "key19": "4vfx3164RBwwx6Mo5dtZDHgp5HN3ZwRVRsGAjus7SsJru4xHc5B84UdYwMarCVF4dovo4uYrJHZ5WBmXBG21jui5",
  "key20": "24v9ZewyVpbTmEW4cbpYBfBogNZsAjiPELMVsfGa3vud3NUnYeZbcD1pZcbrDyzTwBbjdCJz285HSBji7MGdrkzH",
  "key21": "5CWzoMZc1Eooyzay2hffLKjQUjnBcJpHAgjoXRjdGgwF5aeZwuM2gKDocC1mZ5wfzTfwKD6UphSmrexzxTGmbjcu",
  "key22": "26Z87xLyQtMbQ18wkr1iaG1hL8n6qpPUGxVAe8HQ7Azd7SEZSojTNNBtfX2LG41tKhZFzY625dFaUh5RGtX5DGAc",
  "key23": "5XEwxwnbqdMEcvZxVpKxunTUHYv6punCJy9esx4kpH4BxnaQYAAjHgptHgRPzY92pfGx6SVzjw59P8npH4qEcE5v",
  "key24": "qchBJBU8fqmcGaEbZPtWVq9yF74Zh13Ve5zxoEWcQoeaxv8byNAUk7mMk8iPfJiMTkvUBdCMtiS6CZ6vBB2C5d9",
  "key25": "56yJ4WYWZo5ccf87UXbygkQXhC5q2kNKYxzaZ1mcebBD8g4eP3r8ntBCSW7xFssD2Ctu1ir2WCHrVCgBJnpHtkRX",
  "key26": "2SFcQWwcDUELdQPWP8a6WnbiCmy8eFNXFixpMdQoo2A9N8vRBSwbzehgJuUNbMBXbq2WuTbbbcUZN1UMTuoaVAKe",
  "key27": "5FDBoDifeXfpEqL2gPXfNDUk7ocVawbQm23PkvE2sq52WT3ScKMMNznwMXEY4Wmq8rHjsiVWvSNNSwUG22zqCrJc",
  "key28": "4xgjmxyssL3ySE44E6ApvDpCmbk2fps2yFBDzoHeci9SQCXt7UY4MzqN3BPm1zxw5pXQwrJ32g7Sp1vhM9yXLtXc",
  "key29": "2vuLCXb1gp3j3fVrtsQ7v5fc6uGFsajxjEmL5RCt1wjv8pREYJxuwEnvhY1iLzPVhcLWgU6mEjA3bBfkB9jQBxHe",
  "key30": "yHEaEfzxbZyz6kF49zixYrTF528mZjgt9pamqcnRNvRjosaXMqjCsKypkKXhNHwKtziJoTy3zcrYoigovnxQvEX",
  "key31": "3AkHf6vqSFCy3L4v8eMoJVpLx5JLSgRLxtFcK4soaBdg9qa9x33bgee472AQ5meFaGCCygsXzaQSaETPkVcFSqLW",
  "key32": "3MHTKnPfjXYSLc4Qyp47mhLExZLbZjw4k3KGaVTdu54yUfk3EBR2khpU8KbDLYwK2UKRm9ty397FK9uFMDXkQUFC",
  "key33": "QZ8RSxUBcDKosSNPPSbHosYkHpPM6vdvGo3bo2R3pvQ5Yx7pCiS1mWK6TayRBMe5gZSHYx85D1DNnqg4ur9CCtz"
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
