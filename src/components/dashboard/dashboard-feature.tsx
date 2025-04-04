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
    "eGxsnWiJwispfuqPUZuLPjrK5cNJ7L34vJ3CwLi5W6CMoBi2RXoAkUjQSjvSdVji981A7kRtZ1CT3Q6YaQZnDfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66YFjSi7gJxDjh4VN7RFYKjXiVTcCRqmCHvPac2uzqjPYqxit5FLfQ9Wd6JXH13349sQ34E1WLWHLT4294wV1cp1",
  "key1": "2FS4XVUqbTqesPygLJM5RnXoNYiFvh9p2WETMjLGETcUnW5F9vy2wo4fJkT1iDKJHQvs9cH42V2eMwqyX25xCDr7",
  "key2": "yqk4XERM6V7V1saRMStTwgvcTHjxLHTZD2kSWbCGhi3VV8E8CYWXaktVR29Bdn4d1DJt3m9LiagsLfEjXTGL7xN",
  "key3": "RAJnfYhp9Dab3twsDNRow1nHHxVmQMmwRikPHskK4fWw2h15h4aa6ufnF5r9P7bg7EwywJM8YNkPSUrzsNpwjHQ",
  "key4": "4p8V3axR4ayZsLdNBYwzhhuhmn1RTjETSCxDMfJPQd2GLwyzGA5uifMYBtpMr7oRN2LFJVrRpka9dqPL1DWTSj2H",
  "key5": "9uR2hKvNtyFi1zAZPcmaoWkeKvaGV1126rPu1pD5GVoUzD5dT1oasYmZmnZPCQZS1gFYRMrg1i1PhxrorAWjFMM",
  "key6": "55TpkNFHSwkqMAaDFmS5wG1XFfrmgKBCaS7bDEfuJkVkFD3yi2PWaivbfvpc9UKAR2xFocVn4nVo3b9erA1HDWJS",
  "key7": "2YLDcpG7NEuF1YF5XwKUEK9PqZNb44tCbAEkzsmCYo3sQWHRVvTXZ5x2ExzZRk3ABWP3atxpmDgLnStjBXX5PQqx",
  "key8": "5wEcbWSmpqpWKf3w9Ury44iRuEyD4jDfoc1EfwwayBbct3DFBBNuczxREWbheXfb6KgQgqfbRvnDPEa9efULCGhC",
  "key9": "2PaZqtidB824vz8YZrpZ5mjBzUvhquFT8JTZPiBYcErTpc2n5qb46VVtspcoAtmyCV8i7KpJf2YnYpj2eKficQcq",
  "key10": "5CmiSh7d7cvChzr5r4tpzRNhWV16tiaKtYkKkHcSuhZppF9eMKQhvE17YLTLUpBc5rjcwkSDczBjPg4dKBwdRbTa",
  "key11": "63vCht6zjFhUfn8Bwhr6kf3xksb1KKSQj56vWopF8nVM1MPvWStqKqEKKb92p8C5PXHJMAViF5bZchHai64oBRzz",
  "key12": "8j8xHj35EewEhE25zC3BTPiDK1ZDS7mk1B8Tp6x4Div4nq7ycyKueLNzPd6Z4JNo8rnnjvsH895BstDNf5JuZ6L",
  "key13": "2ybmY9Wmx4axnwda7n2csbM7fawoncTkSGMHPQSY9smbRZ9SEsFNnU3a2X8WMZUcueopnBURCTguCedoYgBipMiY",
  "key14": "29YYPoPSDt97o3p66MpRiN5tU7xQhhPaTGAN8uHLpANEuSZU1pTCESAy5WLboXBRJCW7yN5WD9z5gbQuhwiQB5Ux",
  "key15": "643woigkv6vgBZAn2pdYusWNM6xuPxqcMtTB9pZBGz9UzMpLCEBtuMB6NQ6WBAU4EbrbnuJEAcVMiqTan3LJWvjm",
  "key16": "5soVmjbd94okwrb2QwFDsxR4Tpg6ebcc3rp1Huh1mTPBw6rTjPXYNAyeWirvoosLLdR6JACJnanW5TDJMYUaSpTH",
  "key17": "SKX2PsxHJ9EgfMSnxD2NLT2Vtk5gj6JPRPPRKQScQXNxPXLcpBBscQd3Z7q2oFvGgwXu88FECXG3e8pVnbviLUU",
  "key18": "zU9wHKFndxP2raqNmxHQjiZxaTrYQjGzs8NFuPc3QkmWfMV3nBu6P7d5ZNhSymhWcAXckDrc2GFeNvHUzbQppUJ",
  "key19": "5obqYDaw1o19vSPnfiEcZYzV4arQoiLcbNsQmE4iA2euyXCXeNLDLzBUe3Xq3w2RC7QAbtQoopZr2LUHTA3nbtCs",
  "key20": "4jYGFDkYLvM4sffffgXvrXyoDq2gAt2vfiiyRmDgQiFQEUapz8D4g9DVL7nAwbKsdfwPS8gT51JX1k9bVVgfFzQi",
  "key21": "2vioFw2hsyjqzgj8Ga7jCcnYXze5Yh9pQtroVx2pLwm5ueqvt1pdHrK2Ez7UuRMhHeYKWw4eTdvcsjYYg2jTjf7K",
  "key22": "8Zapaw6m65mw5hzMfK73uTauvCMwHAnYDg1FgoZwdG2p51wpzZcVrnuixqkaG5JBnPSLL6MWGxmy8J4B5ymHEKJ",
  "key23": "2umHXZiRybtRLVc5YhX65DyrTZMLg7cqaMLTMiaqiZ1NYurGgXFgPF5jRWfwd9psmSB7KfNA8sxTNhHCDqpHzYif",
  "key24": "2Qc8m2Eg7WVFMydoUat4P1akCCXgvoed3oXkduwDTHtrx4K8GPCMMkVGzkeooUvhJpa4KbrBRb16LDFc1gSVY5Qf",
  "key25": "3NEc3MEACEp1FyAbsc6VbRAi1B4wT5SeuaBUWGoXcKYgM3pjB33h2SrQBJBFTW5VpoDoz2agPwsnr7a9kUbTaQey",
  "key26": "3voSSyiXgEZkknwuQ6cNYGQKMb47LgEhHYja3kASuNFZYJcEX9D1KBy8qq8fu5pFggKHNYHMBZzTWVNe4b7A8se2",
  "key27": "FLwoGDW6mpHsBSsC5RayQxEZxeWJVsVieueTSJA3YALELchx1hjTmAWrhK21Wp1fkFfdZE2khpSQ9bSh7rGCxpo",
  "key28": "4rWzx69gk1kqGGocYPrAPTVX2AbR8ENrF9MdKh36aoLhgoMfBezkhUpCR1wXd12ZK5gbBtv6pTT9mhKnYn5S4z9o",
  "key29": "JjxbTgXiyd4pKE2HMoTs9VraWztj8rrJTpQHEAYDf3amEnyGp4VBwetqUhgafeBaW6wUncU9DHvoCAsgY3m7TzU",
  "key30": "21rqbmmDDvsx9hhGALph7nmpPFLDw4U2WTnnRGhpG5HSTu6pg4RCDAD1eaya9c2ha8zNKoxbEPZFZZRX2skKdU7q",
  "key31": "YyUQgPXA8i3ucBu8Tot9vy4QtB5URpGzkzZSJcbz35sSAEpuyvDZPDKgz763YDPRqT9Wf76VqDLHoV9BTU8Au8E",
  "key32": "4nvE5apmD9UcNEa6Nne3EDFA9YczSixM78Xp3yWaYAv4LbjQDXEAb9i7zpJb3VqdwipoaZwKcJnxnJ7XB8YE4F1W",
  "key33": "3Zx97NjwYpTC8wME6nZQVty5GycEm19SEeBELwAQscwsXJQPkvtyfyukvybAnTTcPJUY3RZaDnZSaBZfi4NAgUuK",
  "key34": "2e57XackBiW2PeuQvRwMLTC2xrXBqVtgUwcjmcuUDJ791ho6giN32rXFd4d1dnKWhidTUcCDSi3LoWtVmnhxY3e5",
  "key35": "5eE1YQUQHV4EUJvrsvJQh6NYK2SCc1RrkpNAXmadPkwprzYpEr4fsGae6kQDYKoYrRFUHReQ2ou1tuSXAME187Ju",
  "key36": "4zqNHS5tAZEehM4aByDQjidvCw1DPG2G84Y86SXUcpbXSMrYvKusUKJqaLMREGmGH9NdmULMDUTSdXYYiH2CazL4",
  "key37": "3mEnq9ccoP9aZ518JcywmVBrCnoc2qoHKXkHc5ykXXLBqW5C8CiTWnSU2T3kBqk9QkQkZ5SEj5fo1Ubrp2v69VyP",
  "key38": "5Dssir5FHDAJvwyM969vwZy8ku4CvGKhBnykEbt4TMFo4XmmNEefHju39CQoX89xcG7FJmM2qFtV1MUUGwYBXbgN",
  "key39": "654UJPCosNNAppZWaP4yDLHVYAA4ND35SQmQpkJBgvjxfSts6RBpUtKqtP2Kcbez5BDoMchhSPme4mLR8XAVvCbw",
  "key40": "534tJ3UDBJ1nj6Y5s9p1MZBRuFdNYyHpuCaePLdhQx7fQTPpiJMCjFTMJz8G65LnZ35agiGSBzCd6nodNX8eYZec"
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
