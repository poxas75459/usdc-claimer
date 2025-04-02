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
    "4yXCKKFsYdaewGSyTs97jidgdyzD5z2gyFstrSkyNn9TPjMo1bVSbGhhgECXNbwDiS6BPDknMo4BUChdXxu6sSud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pE4Xgfq83LLyfYtDpgUjY3ZVa9yaJjALUUz1biPU9qzys9zfADJFtzFC6s8mKH7EfCLb9feX7pLS7jDYi8JAKKN",
  "key1": "2ueMGDzoKbXwbSxfqW5kYPDcQXLtMkrHX6sAiVyRcMAvE7dC2oJq39bcKCba3yJYQ5VuzyrZKV7k2suuQ4UcV43d",
  "key2": "2gpuqbBfjsS87nHyJvTiCxFbBQifBqistTDqzoWzKYaJRrLsEhgjJhwJypVnRXChYfwBzrcc2Cc15viSxZxmmrwE",
  "key3": "5pktvFJYwrKruBKzBfoGns9sa8TkeQG2PqavLLSJVwGoR5mJo6q2X1Gd872BrKqBPcw4nfoyC37xAJn4Mk462JP2",
  "key4": "3qX9d2HxXHD9axzpCeJgvCLv25NMnujfvaK7ib9XT4RfFKKdmUAT7YcDqwsuiSG53qAbTK1c3FKmPWZJikaZJqe9",
  "key5": "65gvD69stWeEPjNtYGFU61BNngGHWMuC3JYYdFfN6yP3v83pGCaUujezPskMe7Ny2pXdhRdW2uYcSPsHsQdPMbCk",
  "key6": "52BFG5jwXuqN8xPMcPb9dw6aD1XKrpAo6mBMo1ArNTbpY3VN6bCYMFW9m1eZUCa7bSivechDmUY4jLRcxTUcGNf3",
  "key7": "5AbvWC1LR19zfPs1RhCMYgsVCDAGpmYSFpH4mFMzrYMg8RmnMjzFG3bDiMRBmyZY4YMLcYvHD8oKc81cxcTc6hG7",
  "key8": "4u9XUz6Xve1S5cdUY6PFBweCJHujoiFww4PmpBB1mWzhcJksm1rRuyeAqpRBEC9gGu6vJcfFxWhfzCS3Mv2DczA5",
  "key9": "2DHLzX1RGQSqucvzrEiCoj9inR99ZqeZE3ww2pjZXiAckcLFf86EmdgNAVWkEGEYQDcDGXtGtbJzUX19AKczDZhW",
  "key10": "2zopfmMknahVaf9gFSnYnzvEDTi6cAnufsuXWChWhb1f7hXqdsoGVHzNFYE8qLp7Y6HoMq7VjvzQAmkttjEY3n8Q",
  "key11": "49D9LQji9JmRhWLF96uEjEsxfCENJ4pwNsJFuf6PFLmRzXkqiT6W7jgxmmrjCm5XSmNatx3NBUiajKVGMXjWDttY",
  "key12": "z7QzvMeDHTHZASiGtkubLbzMtx3RTYKAU9XiA6E4dCwwMJaF3cZFJU3dpP5S53LjxW4qrA8FZ1EQdwiqsLJQ5G8",
  "key13": "3vqbPxHfagq9uywWhQW6SYL542x2Fiyz4Ji4xAhdHiRwm6sx6kcPStdV6MKqyTsYjm5EhMWaVN3jtPY2AHEuSWx3",
  "key14": "2W7zsqNbED8ggMRrGDiCWSr1N4UkezBvhD8wzu5vDVT664VYEgQXMsue9JM8kNuQsekpBH4v6KGeePzF4cGHjW86",
  "key15": "2qFeYLbTfWh1uH1Z6LG3ywQuABqueMKtmnzJ9HkZgoFJhWhWoedY6titLXyWFt939LwwDWszk3jb9ZsEvqimaQ41",
  "key16": "41EHUFKhU5KSYf9wiM6GKT4EeR1pvEacvEXBnrEQnaeJWgSrkybbzhPN39hFkNZUVnjfssa2eYaWh3eEkdQ3gK7T",
  "key17": "4geaY9Kxe4uNs59DCUAKtPf2EwcRAkuTLe2xksDu8Q9cNLYsXQAqFo8n2rUsEzT5S1CAp6kPhRqtzgdTMsdkMBkQ",
  "key18": "3GNDQy6TgksjhSiWtAP7C7yYBZNUcNGPN8CwmHhjSBCRKuCtkcQXF2hjoQarFqyAvW3B38ZnQkcjGUiW41ZVE9Av",
  "key19": "HwZxPhUn2FY6LywBngGtLN7bwmFhq6dpVYqiJQCe47ZZQ1WLFCPZSKmzaLVxUgPWkpEdY77nVGvR5HCG4G2fZb7",
  "key20": "4poF7rt8XKMEnfxRtkkprc6dHZFMwTKKVdp6euXmw561zYePyiLY7XVq1P9geUBEAtmoqVYCdFkDPndBh4YVn4JF",
  "key21": "3Yg79KA2XsrG82c5Edu38EAq1CKopcdmJUN9YrLWyWSMKBPv7WXTM8guji6HK2jd8YSAqLBE69Wb3r1cRtK4DNPt",
  "key22": "2Jug2UwH4kJ4FGBU1QCybqppXuz7BKV7Ejxyxxwkg4oApkWjaBZL8DVZNTVRQsLAX5tysDkCupbLGKfzfAh37qU",
  "key23": "57Dec9Zv28vigU86QaYZ8xJJgLaeNtw7QDyz9knp2eTuMXzKwTFPbA2NGCtsx5Ezussi6uPgrkxS1EA1RHYBmkbp",
  "key24": "Zptxad1jPaXNkPYfsnQV5zQGacGeYDQrvKMhwEKwYTeg6pojx6ojx13uPgfwkEiEmERKe49T8apdR9k8syCCA4w",
  "key25": "4hm7YffbV5dqUr7QSvFJrmBRK5Ta1NAu5JjjoQEtDEwdTdPz4vbq1yEU8YHWtz2Ceu7pGquTa9XiuZV6bCPZYawb",
  "key26": "422WJQxrTVcUfEQz8NEy3o6MirTKqbmjBKyzERcPEAZbypSBjEDyJnqybVBB2BYBtBdGqooZW8CByHiRV9m9xaGy",
  "key27": "rEpXVPCb5DafEN88sEgwRyzAX5dZkNNuCGsUsgQX4Z7zrvVLRgCq1hJsi15H22iUZ4bWeJduy1e9qLhSfqEFE87",
  "key28": "3sc5xqfS8vidhDfWCMbgZx6Rpb7pyXwYZu9HWH66jWgLwKHGwV3gf8KCr1tbPcBYX48EeJevRqe5v59J1t6yt8GG",
  "key29": "4eoTf97MRzSmKeUcvFgECzz9RPPP8PtLV3rGc7r2yDhDEJi4UmgUeKgabqkGnSdMkUwF86XdS2V5EyT8BL9KUfp7",
  "key30": "3ZMSiz5VZYfDwqnj57GNneR7ATd2iY6cF7pjTzWVpddnFjH34kf31iiHzYPVtSkzSeTyopURuVdfdtAgMFkfHMPB",
  "key31": "4geXMGtRXFf81Dtgeg3f6EPXJfCUgc1TD37PNBimjGFoDZZKyRDKdyTQSdirRTQDNMvjda7KEUpvud19HFPyvzEC",
  "key32": "3ZQkt2fazkzi4kKckMGzheuD4aVaGCNg8bcrK9AM41rvq6ZpiJKqZFJhuTKgcWiKf9MxCPNSdhBpZodeLyXDbBga",
  "key33": "5EjVAuw7M2Ex3KE2Edwmtq9dCp9uEZ8MHzw8H73WXicneJkn66ZLpTurh9LUZfTUe36KRN9roxhrDyt1bR6ZUTe",
  "key34": "4FcpdP5sfEqys3c1Z32zF1x3k6PAgFyyQKT7m8Dh1XLoKHdqeU4tjApHCH6vZPoAET1JDyvQMoq3SaV3qTrKBgnS",
  "key35": "5zdYTBNSSnqemzGhLP4yZumUsdoG6p9jRibHSqmivS9c5oZHt56C853m7Myh1Nhk93fAPTvYmBrGRd5SaqvYgNkD",
  "key36": "2aPe2jsNRj2UzvihFKo6L3GyDNK7NzwBPMuPistcQRK5vSm5k85u5f3xqxoTTKGrN831vq9UzVsK4N7ZTzMav7Q1",
  "key37": "fEW4FybZTrQKye1o3zmxJGLh9ADvJLRekThc8mNeeeYkkpDupzS5oWpitiU5mKPqj8tEWXRTMS8eDTrMURzHzZT",
  "key38": "2vN3c6PKri1FdW3TbMsmgmtqYJ3Ya278zfRv31LeHSZestiNrYogm4PZu4UcvSM82FVA1KtnxpwnToaeeUXi2aCh",
  "key39": "2MZ9fBfXkS2cBxNXtXtzWFMkcNK1odzLXWEyRwKQUw6CypqwmwMYF99Se6XHJYr1NDpXDcAYoQ1deFVUDGsUjtFF",
  "key40": "2uvKocanFRUF5eUiNh6YVxZHqNYL8s61in5Ez4rBTPMeN75ES7DWHgKydaX2ig8gQcN58GSCGwo3rJZni5kkfCPf",
  "key41": "Gbou34WgWdcn4vTHvSzsmgXssMa9eCaikrXkwLjhY3FbCemDs62k8bbPdscxBy3Bwyqk4NSHLG6x5zQYpfymuR6",
  "key42": "4Gq5KXRDF4NzrDyEfC7UsGRJCTuswPvg6M7nX98UCQGqMJMCxdyeUafokymyuuMf4bUAmp6WmcPNrvaTxWqALCoT"
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
