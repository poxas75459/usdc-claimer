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
    "2Qz3RuTGP4HrmLsgAZLQ63bDN32fhAiosUJJ7WZmFWbyw525EcCx3dEFkaSA3Kbi2ps4NnudEPJ56DHn5VjHibAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NYD3KCMNwXGUVeAfHTAuKoUL8PHvpJfgLeSiJKN8uXsb6fx9gNZRS2QwzRNrFFLZLwmzVU3KHUaUfH24fwxzmit",
  "key1": "xdQMS1eCjWn1fhdFhBTT8CzU4Y1hJxQPhc9XjDzSNKvSisaJ46z9DAY6MKhLf2ZTSg4xvr9KpJ9R9gGvse9TGNU",
  "key2": "2fEcQ6JxcHMAar44PsGHuUWpxKUb6T2X84qL8JrVs6p8xmNmq6MbwZ6iVTVeRxw8YVFhwHiiUovbjsFRftFX7kVc",
  "key3": "39qN7uU7knVu43Bux7WFGVj21YVzGuPAVQqzRJ4z8xiNXRNZeApRCdLAPs4zyTTSjF26PVK3H2e87ViXWRRz3Xsq",
  "key4": "65GkzDQCgrYrarhDskoA5d1fA9UnJ8MzeZakjT2g3t5jXLRLXc9CuEtjMP8wBJTeJToqFBDUYacJfy59TonTaHYr",
  "key5": "3BXVm2BARPHjg9vYFdUsd549LQ4TqLKiznDPBRpocx6zvJDAGe2rqjwDDJ6gyypDxTBYGbb4JhNaWZPhu1VLbCW6",
  "key6": "2Tnwqsu41mYyUX9NMgUyeVjcSQeYXFPcT8Eo2arkACZyCt86PfojNQyH14t6a8JytXec6EAyaZud3Hs8hhhs4N8B",
  "key7": "2PzqCK5hFBjCFPJ7PT3g1ZsMLxc2va65MfUJ2i1HwgRCxs3vRcjqxEUqQeLS1yj9cG5Mv57rc3Xv77UsRn4fhP4d",
  "key8": "2s7FbF5XAk5eRGd91Ba97KHoBcw37v5Jy6rmK22wzL19tRNMm59pVsjQb3fBGaeCENdjob1eSVDpY2N4ERxCRyTC",
  "key9": "2smo7of6QBkLDzVejH3vJDuQWVyJruxSQMrqkwuHe1wDZoTqvQmdKUgwEJXD44zSFtUxbFj6F2sKR1PKFeNHfB8S",
  "key10": "4Jg8shoek6JHkAZnBGj5zmpw2CUiYbjWYhpoMpaP53qiLtCq2Crgr1Zyhoc9nqABHZKnjG3JakjtTZfZ99pEtZ7t",
  "key11": "28Q1vk7o8eJsDJbUByzMLcdHM2HJKF2HLUj7ZiEnMfN3kUGMALw27vsp6QN6L2ccnNwtgaECoDrDMBNBexaJGwgK",
  "key12": "4Dh97wAtpqbdaAs4mwohy72ChAKFK31r4uFUKkX7UcJYjsv3AxpyAEW6S58nAUk8CQDciwWg6p448fDPXTy7RCcr",
  "key13": "5UgQCZZGQuZ9drYNbW1LJ8WeJ14UDfscKebyZAYVc3Lo5qEbR3LKaJ4HBSxCdCGWT4zxE7973qqYgYWiHfproTvq",
  "key14": "2YV82wztWcw9Uu964DDFxc2XoZ91GwVM3vMehaiJwuxmT4p8pMHUoEicNJzU6GJAmjWjMLJ2SoMtKow3ghi84m5v",
  "key15": "4QEL2P2oUWNommHp7Hv6CWcmnj5GWiMzLeL7Z5rPWqeUNZMiBkf3hg5mELt1jqBKhBxmnLj72pBaMkUp3G72XJ4T",
  "key16": "2C11en4VAYj1oNpRKm829XgaNZnBNSmaEvAjtAUM4hJJiph4z8Uc9AJPLf6571PHdw5L6xYgsuZVoS2tv9Bj3m9A",
  "key17": "aizPUM4mEod6p8Aun2obspmc1am24Pk9MWCrrfgPUNRMfy5K51JzN5jz2M7Mg4KuHL7n3BTzJ8WPtDUy5ijPsYF",
  "key18": "5dpXWhAFD8FonBXnYFg8VMeX9VxZLWC244LMQdac2sbcrNie4mTyFiYBzHDSyWM5Xfd8Kg2Nr2v1ZNXFRcTHiLP9",
  "key19": "FAFRqqTtGUJyHj3Uer1xA1UrKMRF22sSWhL7HiXNGsYVFuxyAKs4pMyyQJsueww3VQF4T7JmSA4bdm2vkdwBNVo",
  "key20": "2Zbx38zXWdCwwkMFiddBNv52M1vJ1KhV1EdJKw2CdiwK8XKgTNwW6tGg8fCAoHZJiL7zDitFKknSvfKZXJPHyaN",
  "key21": "qcFHq1vsFLKHHTs7xdrRGn5NeSw32z1kL2cFKXSDyLi8u1Ump7XF1qJykn488EHHPbobw2QnbY8GcW9JPkz46oQ",
  "key22": "4w7wmKxw9VEmqAKgscSt5sRxWWSnFabF4z1xZhHbhgjHTr1qfa3eHwSgxGzgnHirB687CPw3fwji6EtCwic7Gc43",
  "key23": "2fx1DcujZzDHXxzGAAyfMi9Mh2ts3okSAKd72nZnAqBLv9xiUAQk5aJtGkUE9GpixnGcRmRiStsnR98eiA2xnVay",
  "key24": "2QMWdzeE84hcegPF3XfFCChvpGRXFZ5ckfNj6kQx2BcrKzeFxfViDHFHzeUwV7L52CatRfAvUnqRAFqN13Q1585d",
  "key25": "5f8B7VSdqKdwDqWzqZ2892RC2HGJv4x5rgGM5RrhPSGDEnXFhmHc6fpTdR835heW8JNthSQM1CLfR7Y98CM56yVS",
  "key26": "4vioyqpSuT5PQN8weaDpfaAYGJYipfT4iW4dww1zqpyepDe38ZdwyNueGyMjd16bPso5R3qAcUvxG5MiR85f5LJF",
  "key27": "2Lvg65SaweHbWM2McNWRkvgCye9Esen4qkoMVDwETemXb4BVgu8g2LiWY7jZJdZ8vT13j4xyHNRRqaWvstypmdkP",
  "key28": "xmfrZ6AJ8y4YAtrqxwYfBD7HhjtvMoFgxbExoruTbULbCrTGgCjebZFBusUuhuKfu1Bh9V8VXaVYfMenby5QTWK",
  "key29": "3fo12BqwKVRRFida9X1Nkwna6iLtWiKN7a5W9vPZ7kUzbVUFGhZ9jrtbJZCFRcSRSFANk5Er6Z4V2VsMN2NzTTws"
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
