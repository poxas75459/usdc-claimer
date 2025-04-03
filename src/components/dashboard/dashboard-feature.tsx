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
    "2GZen16aThwcx3mCHBt4TgwSNqQLJZ2MDwUcYnpeYk3WhPymDfvYSf5pcex1oPcij6Rib8QeR3HgoHQgXhwWVfpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKoNJLgNEivsMkt1cQGSyUtMzz73UUsnqFtccpbE9tu5Ld9J4mpf69EhLgwZUEhF54FR1fMA3tEAe3jHyFanmsj",
  "key1": "3rAb1EDeDjm6js1YvELh2uWQF6E5di1h6eD4Qqo6k9TcLz3yVGGVGiA6ZYNTyDGTjZbUn5cuoRenB6iFwo68L5ct",
  "key2": "MdaPrBwRUji24WoMNdFpXZHSf5j5Uvh98KpwZAeRoYE5Sk1Jjnftcfem5GHPd5w1mWKW8Lr56ky5QEQvKwsqYpy",
  "key3": "32oqTXCBZgJX5JGnp71awiUdPkXpCknko4EHjFKsVDBHowPj68Yrf2su3ZRCrwVbDEuAuPRoEQh7Y8eGyRfBKykz",
  "key4": "5719g5o7PcAnyhbJcV5FqFxVZ1meyozHCe7vbF8G37JHQwthp1A4AqEdADzgnyhvwwTCzKFirU1dCUocqtYNbUHb",
  "key5": "4cetKYKB4L5g72TWE1wxyH5hPsy8K8gtZM5jUwWQy4XdFN68s66NSFSPoY4DtYUGRQfZa9E5MSMFyYrV1MZbKQbL",
  "key6": "5qZHs4y4mfvp32qBfrtWqv3TGPhJXti6MSp4TeqdRB6nisuwEBefZd2dpQenf24TTfj6r6FgWP9Cmi8ecp2tyJj7",
  "key7": "2QUGA9vVoM3atjb3Q2xGyrtPUijcj3eipgyGbWuCpryVPoQDb7mQRMx7nY1cSMhtjNyAiSkySZ1Jmd7KFsxwxWAT",
  "key8": "4biY94KdVdF6dkHSVUoxh2t1dTeZAAjEeAm8TgJCe242S4mro8ayCDWfeWM8GzMRwQzCmbxwSxKy331DhF1QGY1f",
  "key9": "3nSZcZ3Sj1TATAhRVpVmkGgNbJeuAj6dxymm7Rhkz8ZRVtDwFS1hgp44CdNipn3AUCgnfKtvU6mboTWzBWDDvMqS",
  "key10": "4omzuVRF68dJV74u1DepZhg1vKFNCZBLStBjY1HNayGLfAeS1iJgzxdq2z64hGi7gT2SxUEsmWTo1EwC9vpktfKs",
  "key11": "4czxtwkNC4KCScHweMqp2vubA7RDLmX5nox2Pde5ZGZqzRVD2YeoS1DX9TiQmc97xsPAwTZH1hhRBnugMHWvbGr2",
  "key12": "4RLTjdDGDm6tdcnfGDgH5owzrgK7nsDwhasnccHarVnmur2DJUNNacv6NxRgUc5JgJ5ujEk7fRKmxoD4teT5jxAR",
  "key13": "4Mo96j8XBeXuzF1a2c7gYdWnuxyBDAmfVPAyFtYqNLNzocTA3MNAd5d1rrov3PcUize17eWZrnfxVWjgDtvs167c",
  "key14": "4gqahPQE1YxxyNwqdbVUfL7XjUFPbRC3ZgfyKpSRKXJmLKWj4wjBFLXE1TaFPjY9nzgpkqEb3Uhk7uNjT9VftzJu",
  "key15": "X2sxqaGdGPyUSubX934yZWMVN84cMWLDvF2CdJxPnoAo1bv1L915NZAj4RNzJSnneGX7SKfeBtjz651QKjkk26U",
  "key16": "4zjVTVjFxQuwVHfL25DMxEZ5PcBR461F4rodgqbTqfNobz1bTg9D6mCGEagHRPfDAfkbK3f5XSQhmcHtEFLcp9cL",
  "key17": "24iY2C6v58Y8HckF1n8QGTEc1ofTddgfMXhvvZAfReEttUzDXLVgKs6eRJdvjFVUButB4n6Vcqequu47G8zrpPrP",
  "key18": "2RThunp36HUQULNgDJRWdAhBvamLzxmqjN1bD7hhb3mNfQYk25b24XiEcyd2UZztYLwGxAdYokmHWv7VA84jW39U",
  "key19": "2aGVBjjonKxikxWUJVmeCH9yDBYMG5YhKbh4WjeWmjhxGkHahZ86zrdsHdDr1nqz4oamoQ3gDH4rTGVKfJb1iMfB",
  "key20": "63okcEYLgtsm1T8JgjuDaqfZomK1uPtsv9ZCB61ji9QxNcjjBLRWsfMj3yxQDubQN554yuGgG1dverAoY3CXAdzK",
  "key21": "2LCniE8ZSWMmUzAkRNfvjxt7ymavWxgF2LYgvx8Fp9m15QaZzU7GVNN3ka9MwNJ39iw9aTFVu83eXrvt9UG6BrPr",
  "key22": "4AWG3QdxzSxWFwGYufEfJKzWEYLKUNaX7p7K54LfsPcb9hqdCVhkJ7LrhfC9kwRd9CUst9SFAdtviM78aKNU3n67",
  "key23": "utDq4UG13xUy9sYZtu1arPtQjKusBEUe8fAq6NsXdvox59WziGi9prpLLnp13vaRvVLCD8AkZFFV6BxyVQ6Gdej",
  "key24": "2nr6tLThoqRaE2DkASzPQ1J8CJotMmwJpEW3sXyhjd9nkqf4dTz5BoFL1XpXtn7A7C5mM8sg8f97u96JTKtCm6xo",
  "key25": "2obVZgLCjjQ6fH62EVdoQR5DmYrEwyuqKK2grbwT82SsdiXr2DNXdc6fJ93cXL11eFHYhpiCc93ZLPhJMDXk7pEy",
  "key26": "3nTAZjTwKpHDKCcZyAmiowMFf9ne8pR4dXKE5J1bj7FAC6zmqm7kwpmi5b6LNDedMyzD7B1wnvLuxoYUm63SZrjC",
  "key27": "5WZyLX7ict3sqquNm3rZhoMnTetzzt6Bw29ETJZ4j3HHwJT5vfVhg2DSqhnpix9qtQHF2hJrEYAzcRcUJh5xdz5p",
  "key28": "RqoirT3sLWUG7eWmZWgNrBpPGMfSNT6SBB666ApoE6Dj9M9AUNpJSnNp4sMtNdS5tC594frt2enDPuc4aTupoZi",
  "key29": "2s1M3gbho2qj7ZZ1go1TEdoTj6KMP1VxYZTTHkfJpsmPUUaXwkFVJS66P86Uep5KPWP9hZxnTNnQVEJKHVF517wM",
  "key30": "3qx8EM4QTiumc1fLpF6Ce75asCRSYR9kinGUheaPt96WkosMZ4ef8kPmJ25RdZk4kNVyQsV4H52whHyTYfy514Su",
  "key31": "5bqH5H4nCTFy6swssuD63yZ4RhtN5cvgDq9SMkNFhoBsK2TCzvaWLCeJAdxxitpE5htk99a9EmBTFHWoaHApEjeo",
  "key32": "3HAwMnBSogoTnChnYZRiTSXE7L1m7NDmQkCNRqrzL4ecZ8BMxnNL61YuzMdDsVdVJVnh3AJKowPMpFkzy5fSa8yP",
  "key33": "3uozsMYhkN6RoNkNky19xTgEzhzzHVQXyuir8RoGVNJW3s65MvXb6vGJm76fK9BGhELMbck5TzdLvRZvZVjehZAB",
  "key34": "2LaUkfa1SzyrdXKf2e3ikKh22E2TDD9cx9mbstWpSveJXpApj9LSKizLusxiXGfkjzjdWTfSgVmp4MUPXtbcTsVg",
  "key35": "7rQMBDWGV6t1UPpRbJu9AKFu31bGAqrBGdLVZv4pXsYhpnJCsq9QexvnFQXoyJpcANsyWTLcT1bRB5tuRqKjfLd",
  "key36": "4nV7icvQERpBakwDftiCAmVs42AfXUuz8RgMYvXaAN3aZXGm2WtyYDPczrj8xGGaQhzgerTdqg3cAWEHEiwwqWmE",
  "key37": "5anm8Bw4CEbepDvzejt31w9VQJNR7w6qYAyQQxCEnYmJXkkQMquXKibZ4UdmkVb52Ae2EWXEXPU33K1W8TxHhvG8",
  "key38": "3ziZmyqX1FLtNWsgiCjrqKHFisv32hNSQVgQ58sfyZeui2YSvnBjmhFnqmqjm95gBbpy7hSi2hqvMQUhD9FJTrzv",
  "key39": "3tXENY76ZVfveRm3mh5Zs1BCoXzxAu8Dnw54532NgKPoAYaCYPuWxdFS8QydZsieKMknkxFbHiCDjqoSi4H3D8sS",
  "key40": "41AFYEZEfti3VRjUwTfJKFvLndWnDtp4CpSmuNWbPPdZU4RaUGVJLGULUxSaSbN2y6zATq8mME1ANgymu3ZVXRhP",
  "key41": "5RdzTYTtpgvmrxAnEoLPFQeYVcpJm92W98P2ufsgFn3kgUCt5uoqfBxo43qAe9bYDhTWfhEAchxVrQSrYEPXyio2",
  "key42": "4GoG5JmCjT87B2kE91V8xoRFLfbgTNucDQLk7qEdSZvGMqb1XkGp9uux3faUWwkkyM258kVPgDujNozZfQw8CxKp"
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
