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
    "2J9FqUfc74PTWhQgnp45VLiJUcPWxTKHrqUpkLmTRfMhiQrg22kMSeke1ifhxFDhxB4opto8uJ3VBwK9Tn7Dcq7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuWt6tsMHbUspk9JJqxyjsbbD3yMG3fZY6ScsjgRaKcyQ39eViyNw3DxfQDYYv9AEoy76oX31TSrdexEKVUQnv9",
  "key1": "3Afn1MyARRCHebk1jCuRmUTgdmYxV8R9HAinveiEbmm3te6uWUrU4PTVJSwJkqatHjXeJjLu6LrAhHz4n9wrswQo",
  "key2": "3KFu9uEECPJ2jcXDbxQiCuZtnQbsfcfDLVkR229V7Pys34Gyi1f89mDxaCYi9CEC2sy4fPUX6fVPCBDop2YTPZFV",
  "key3": "51De22JvYnRApmqMZoyZUk3dcVLo8s4foF5qVMiMdwQTg7Efo7UT89RTJwriZcRSGjsqVcz55FvKJn2ZwCQA5CUJ",
  "key4": "5uhjheLc7SpMyJMpWmXZTjbGCspyZTAUEejnTXKQT2Sdhwqcp2HqknFMwqYesUmCUBjgJmrhmcURBFZ45as8ULwW",
  "key5": "5spFBAU76oQA4U6FYErzWHZ5Xm1LJbhvUpATgPiwTkAWjGxcanUXxYJ5eKJNCxcqhWKuCaUrdgXjZFdqev5WcCgT",
  "key6": "3Hf6DbkMBJbspU1os8WuodQUZ24e4LEdcNuSm2PTp9fpNBESjtcF7vEn8Vj2pbjrxnVFFhmhgZjLjzvujwdXMu6L",
  "key7": "Mr1Nr9EM5xRiJv1PcrEML4P2RAgERw3WrRM8vRzM8ZyVe54v97vkPWomUWLa7QE4LNoUFEf4V7Y73tM7mHAEp9o",
  "key8": "62W1PwoVNSEoBVSgaSLhJdPjmDQbpyX3kYUk3RTEz8yB9kgLjUZR3Yh5JmZmCP6Q83EafMK6w29XVe5ecPePhGdo",
  "key9": "5ut4YzD9Q9BgzA5JMtwFTgQ9DcWRvm7zsQ8SaZt6iTrw4pgFNyVMy5t96Z2usd6RuhQpYudaJRL7XnRcFikMLDPD",
  "key10": "2v44shQpzoH6jbLSSmjK9YCc28yV1AFNmW4CbxW3emb7XprtS5ARuhinNmKzDiEJZBXoaj7QQW1B3bJL2cKYMKKV",
  "key11": "KSEtfMyR28fzAfbPUVqBwLKxDzZggHTRV8QPtMFbZsFEqE8gB8e84p7HB3bMqhheAnKcJkwRi8ujYUF8fMv5SwA",
  "key12": "VzmuoNusUNjvqCK1DVcpTX3p7pPyUi3V8WsArVbY8d8Pet5Wnx5iubr9FkAULTNF6p2mzXbhddJcafkms2XvqUk",
  "key13": "3DQKBcJYHHAP3TiYx2KzBHpdupxyTc1QNsYD5NVx8KwqMbmojMWnUfHhs8ZuTFid3R8jL1TV6vk2Wjp1bybG2Y7p",
  "key14": "5ZfcDcjjmoUJNvq8eF8uqLR6YLvSDCb7qei6k2kfgrhPkT26857XbrQUb6dF1UWVgXo3BWjYB3WgP5XhZEU8hn2j",
  "key15": "3VDne1RifuZX1EVdQar9PZ8fBJHdwvHbhQFbvwpohy6VXLWRU5SPVeXyUjnrBiEKknhMhmmcega8FhdZtUCLaT8s",
  "key16": "3wEf4SHEGwNgkpmUh8HgavJ3UUpaDtQ7Dr3TSaFbGH96eQ8XJDsP4LKoUbTaV1b2vKuo3pHEKvEXtEKJBvJ8PwGX",
  "key17": "3t5i7MN5QLoTv35pT5eYyS5rqnjDg6MGNsjAQA4gDSedvXw52Mmtxo92gKkT2W4uZ9dzkF3fy7emWxZFXP7V7RWr",
  "key18": "4DQEB1etJfnHqa1LxLExYbiXyrvVpuvnhYFrY7aqQiYNBBXhbbt5K4A5STq2T4JusEP6GRkYBmSvpuWo2nWcFuKC",
  "key19": "P9hpDGHzu6kdQZ8AMRwD3RwV8wiFbka52jcGDZsxzPedrPnttRmpTsijESFZX5vPLaCQ7VxokCN9owpxvUtkqcV",
  "key20": "5cMv4LZ6njSrF35oicJQ7S9zfEbthVSaTuJs3AZ689KYpmDinkoMwecn7km9Vh3ABcESeNZGRdNNUvCseVDSxBgD",
  "key21": "Krhk2Qfcq2oNVjHKzQpb9PtvtU74aEkLg34xf1ETqNVcEsAN85U6LZRHFhQj1YYzDbBHDKV5dSHvAF92SvtLTBe",
  "key22": "nBXo3NAjLqARHCf5sVcR6rDNrweTLVxczu2Xb51JVh3D1n2DiTBTCPtFC1ACFHUhNbz2soLgaPM8mZfSW9DCFVA",
  "key23": "2mnWDwdEAVEdC317Zp4XTVpq2c5dAB8TmJwXSQsNhvq8VSM7mnDRXQp6JRBKmM2PMCd5XCShHPMMtsbdBXwj1ER3",
  "key24": "qDtzMFXRYU4M2JdMxPUnbH2g8hBAtSKPoLbG2G1v2Zyc41jPLkFroiv8R35LCR92sx7eHtFfz9hcnW9GaSibfeZ",
  "key25": "3xRAAyY6Pf5yASYRAKkCbT32zuRhpasbnaU1rNrPy45PumYAwUg3DRVY8A2J9FBnxKuFfYyZK2kbYG5L5r2mbZuD",
  "key26": "2j2TU5T4E692KVGc2FeVTn6Nnn7izCgQcsroD3oboi1Lj2PGfyrdiwc4PVg3jP6wdcJfjgztydNuBtYbMqKqbYCD",
  "key27": "53kNpztEYVThF7WUfjxVEjveLbXpKEmEsK7QXU2gr22tpQ1an8RsbUSZVBrm6yu7APYYptzzECqZ5pur6tToomk",
  "key28": "4NtYnmVwqyh5rRxc49MkXhiUrJsTAT9Dr2m8xr5roJkjmcSJZwZJvPsxkuW1JNyM8GbCRRZ9LbERjCd68iCXxVEt",
  "key29": "5U3u62fCuzz92BQSyNsKXSMAKCehtR5Z6iDqHKjuGwpPS7ATvJxbFoeUhrPsgUNW13HdZerxJL4hPfcusAeDHA95",
  "key30": "2zpusVbDAeC4MRvcGyeLyU9yadnXGPZ2JNZA3uBWBnYXEFmT9CkyW7rQY947Rhu68rR4faJrZ8mhhn8L9udTDPCL",
  "key31": "4c9KexB191QmntqUgriMDDbEo8DqiBkDSqM3dru2P9Xd8cWVPcAeJi1JefmQ5LXPUS9frUikfLqHP7kBhzkTWB24",
  "key32": "xeMg1KkA1jrrWvLspCDPciT2a2yYw3GiM2ps1t8WQUaWFuGmRo6V2iTLoQMgKkf6uKK8znifTg7dGjHNTSGaKDM",
  "key33": "22Fb7hpBPaXdpd33zWfLpRrNYp9nuvtJko3y1broFZFnoNXHtBifGykKxTtJ5T1kq2nALmiEJFk9g4c8WGgLrbVc",
  "key34": "369hqKU4MxxSaVuSZx2PyGTh2iKUobg7ACkwqKE7wDVi9dw2z7NDm6SbGEvqbr7AvvDdZcLKUutaMr2d7ZrfEnjH",
  "key35": "pk7VCWGZDqQWggEZEENkqdVvkCdzupGykZVF8QZueVqtBehhFvv7yR5VGsyAXAa5UeeSCq5DcSUVQUmJVRdVMLF",
  "key36": "27d9bci1BRKrF4wy5qnH8C6xh8s2bWnNCRSx1bi9hE1Bbj5zgbpHVf7y3jA7x5SdKGQJ4gkBKXGvwSeUEpPpss1p"
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
