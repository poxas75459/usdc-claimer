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
    "3ug4kE4H1N7MJgJPDggqFjxFh3V552P21EY3L9ZLcb4EePQFazHp1o7Rry362Sjv8GFnoehSg7hLfgW8UbV4jZQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wtpcLVja1SaaFp4aXwcvCAUv43dseTcnr6rqAECQiors9NEtgQdU78hCFntxhdRSfJughkaHvxkwXZjk8tPBbCa",
  "key1": "NPxugddU8xvhSLdLZxGph5nfrCRwJfiYKV64CypdKXR2SgyfvRKbPPsmDm7Hod4zzVkEMCYECQdK5zbeqRNFQth",
  "key2": "5NNMG3BEM9EjiwFkSaH1BDbY8qpqqiLBzshwWbSmRECV6fNMidfDEVsPEFN9UUXLX9vJxiU7EhkS1MhNjKiUSwqu",
  "key3": "4kWSwoN7PgP1a55tGvALQQBi5ZYim6MY3K9JszJosYv6FYDm9XgpL7mkAvHf1qJNuyehNmvjXjmWopSCD4FPGWb1",
  "key4": "3Zk52D5vCoi8xm328xvyuVGUK1TCBogFwbAUF9ZcjKpamMA3ioEdvHmZoYvRwG42ZeVMMVYRafWQb8RB2vMx8mZC",
  "key5": "4YYiVTKKm5xXLSt2taDv9QDpB9E2UjkuMyYzwrZjPvLrVwtzSgsuqBF24mhUx51cfHYu78RSSz2s8v8qMKJuhNAX",
  "key6": "jFbmLZsFV7HEwjqMi5s6BBwke36PmeNLGngoc1UHwPotbBXPYfNptY2VJiEfKYfNkGgDGFKPP2HD7MRGukD2Xg3",
  "key7": "67MCAQZMrAGiJjkSRG5ca5PrTzn5Hx8QPccvPV5YMK6J6mAcA9AQdgipDoib7eScMZdSsbCZkjtZPHWMgzC8G7J2",
  "key8": "5q9z8EVEUBo1Ni6m4tJTkobxJbE6rLkSLab4Gc9HgZrKs6hGVg3CnVGRVTndyG12h89hL4iQ6XtUwtA6pn2N1yh9",
  "key9": "372NMxSoCJ6EGP9eySJKtrdefjUh5YcUo2tvN7t4johM47rTb5Yk2LEPdeXapFsdVEDMjuLVPGtgt57CGgW5hAY9",
  "key10": "5fHDeVWPefKobEMZi8L8oPGZiau7Dph2KKq7u1TywFaKaMoRpVzNxauR7N8Zq22TB1m2pd3iuznV5Wb6jnhVm5F5",
  "key11": "2PoThh7xsBVjXZv4aKyYAPdkrTJgZZgBdtzMGGbDLMoBk4cXaqBEdySaVtB3hZHK6YxCGofB8NwXxKxDdpaEz3Uh",
  "key12": "3ywqkHaGw1eBuGrmdPLSy5wrpzzL1VpJxh1Jvn9JgQ1EhteYGMSyojZP8DbsnzzxkQr9sAEejGPizf5LfyAjKw4p",
  "key13": "RoxTvfZtK4Vfs6xXXEHc8BzPDHsTgmNzmQofe6SDUeH98HnDuA9JD6H27jrmvRrq9rxxJ7objcwZQHnAHteacCW",
  "key14": "5f4RQ6i3uRAyFEhbakG8f76oui6Q3dnPJtT4mEE9mhZtW9GSoDgRVTuxzzj3jcaKL7Ps8SdAcbP63ThwShLpUbrZ",
  "key15": "31JTjzqLmhboVBkC3xkeG63deJ3YmxtHQok8ixtrwEebeKJH9Vzg1uwBu5cUatGUi9aqBwzmKTZz2PdsMepYe1z1",
  "key16": "2gJpSJAMkR1MJ9kvb8pmTQTVn2Es2ZrMxnh4NsqJYPdSjzTA5ySa5XKBL1TS28oonWZqZf9XRkrF3a2QXyiWfJpH",
  "key17": "3njWHjpd9gzQEjzgeYsSrqerUn43bJVck2MXhVdzAV37kFwDGfXQNA4ijG5u4DkWcisK1Se3C7AXgrPC9Km3i5CL",
  "key18": "3gY6VdFo8cVhyzLcLyXFsiVh837YNkGEUDT8hsZkoCP5edcuJNzH98VTP6FGjVA8Tf5fmrsAxMPEKG7CMwWYjf9f",
  "key19": "4Twm9WYaUxncWZGFL573VVtNooBCj7kuQ7NdGbaMgChArHCbSMRFKYb1e2uBA1PGoKZjtVbwgVQzimER9g7GGRJ1",
  "key20": "2JAaoJ7PqPZCwseo78MFTjaG8iT77hum2119jNF8HsoNGaSPRiJ2C7QmRaR2iCeCAWR15faz9HWkGLUxSKtHAmmN",
  "key21": "f9S76ZaCxNV4HkJD7DsBDCxGwVasqvpwrgnMQfJ1RTcAMCobngtSQ271Twa6wCx3CmJgRfFkHwg62fv6yDGPtDk",
  "key22": "2U6K8CdG2pZUUDfm4JEUW7FoAQwHRY1DY7nnrjxT27N6RQQt9R18SuTfaJPiMRLLi96Ruoyi4eSMxsEUYBJWcGHC",
  "key23": "2QBvX2Bz1yPAZBrguuwDxg1vG2mjtGQWgbgi8s9VbDfSZTKBo7HQzA4d7BER7XvPgV25eJuBEr3Ca548aoNqN9NU",
  "key24": "45699T54FLffKsW4ci6uh8oRRs8ADyi1vvagyZCYTu7x4ifKvJwC46iaKzUxfz9xoymPFepu8u2mt7dvUWcMt28K",
  "key25": "3JAnHwaq1hX1aSw1ZrEWacjKEMzmG9cqMKXKuf3SHc9MsBwnL99EnoXLB3ko4REwm5RNzUYuwdJCB4XZJFXnXWaG",
  "key26": "2sLJUUdMCs3kNXC5c2A5vFeCSR5GeMmTAVdKMDWvFDb2Mk2ePQDzjp3bGjBnMct6Pa6umcdxHYfpotiwaNNtJpQp",
  "key27": "4HTA3qABNsDCpw4rqPik7CYZqYHs6L5uX3iQ4qsCGBfZDwDNAufX1Jz8Z4a1pFHWQFCM1vuk8XSS83zUk6X3Dta8",
  "key28": "NfZbWyyY8PeaSANhL55yqqki8ARvkKTZU7H84xD4RNaqX9iLWJAYBcrJqGEUTwi596EiBrrKBsrTkgp6ZShrTkE",
  "key29": "4YACdiHUtwfjqekv8v39QifPLLYMveQaGxuzzeMTPLbxSXtNLcicTYuiyLtNjRH171mVC8TFBm2gpV7DCfzMtiox",
  "key30": "5obqnL2ndfZYsEXEcaRsQrKwmne6LugUhmaZSGBbkPrFuTaK9YJQ9Nd98WJgWzugbaxsJgYuCtfRehnUVcSkT8LQ",
  "key31": "5AUMB72RKrRZmRqo6KhWNHUFzy9SyjbVRyDRH9PJnf76c6JBQB1GPy1XBXAGZGsJG5MNMsqjxXZF8gRxak9jjSFH",
  "key32": "5gqVpbeVQ4BLVeaSjrUwpGzcJtfEtF7zDSKg8ZdxYtDxRorYGQVsVjwFD3fV7i4mB7hCuxaaLHkyXU5Q3MT7jhpN",
  "key33": "44ZKhcAZ3WhHDaKFUj8dgCzDpyqfjCgqB89iDA7KsVewArCvWgMwbftzEQJymT6uaFQbxXS5dWAnf6vnScyoaYk6",
  "key34": "58MzyTkLhkj8Y1cYD2M2ExCKAvJK7VLh4jb74MSZNY2uxFVnpqWEt8i1myqP73Us4zh9wUVk2S72Nrr7x3o56e5y",
  "key35": "2cMiKUmAgwqt1aRU1jGC1jWB7w7WqiTsT2fk4SYNb9AmbkLk23KSqWGPFZ46VxN4cNRSCMFzbL3aRBAXst79snVF",
  "key36": "3Jdd6YPHMNY5yKqEDsHmhpW3XwwcUcXca28MbeCNY327HccK8LQooDd6DofKSqaHJzaAGj92LephfKEGWn6KcikZ",
  "key37": "3dtvhv9Se5eNAhp4e1jtxQE4oiQVaz7hA1ksbuowkD1uwjrPFtCBYLMG9v4Cd6PnaGR9yDwnLPdgy4MhWzcJquKi",
  "key38": "5EpMQULxiZHkSu7ANUdgivNz6GFhyfNzoJZ7Uck6aXb4uFQ1nxx1vBmrYpehxK62iVRArhSuuc6XoQjb3w73mCk4"
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
